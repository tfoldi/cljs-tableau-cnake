(ns cnake.tableau
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [cnake.game :as game]
            [cnake.utils.dom :as dom]
            [cnake.score :as score]
            [cnake.intercom :as intercom :refer [tableau-viz-ready-channel]]))



; Workbook parameters: Param 1...Param 10 + You
(def stats-params
  (conj (mapv #(str "Rank " %) (range 1 11)) "You"))

; The public URL of the tableau viz
(def viz-url "https://public.tableau.com/views/cljs-tableau-snake/cnake")

; canvas' DOM element
(def placeholder-div
  (dom/by-id "game"))

; Hide things from the embedded viz
(def viz-options
  (js-obj
    "hideTabs" true
    "hideToolbar" true
    "onFirstInteractive" #(async/put! tableau-viz-ready-channel "OK")))

(def vizobj
  (js/tableau.Viz. placeholder-div viz-url viz-options))

(defn- calc-location
       "Concert pill location to tableau location"
       [[x y]]
       (->
         (- game/height 1)
         (- y)
         (* game/width)
         (+ x)
         (+ 1)
         (str)))

(defn with-tab
      "Change tableau report's current sheet if necessary, then execute callback when present"
      ([viz tabname]
        (-> viz
            (.getWorkbook)
            (.activateSheetAsync tabname)))
      ([viz tabname then-callback]
        (.then (with-tab viz tabname) then-callback)))

(defn- set-parameters
       "Change parameter values for the active sheet"
       [viz parameter-map]
       (print "setting parameters: " parameter-map)
       (let [workbook (.getWorkbook viz)]
            (doall
              (map (fn [param]
                       (.changeParameterValueAsync workbook (first param) (second param)))
                   parameter-map))))


(defn- update-stats
       "Update the stats if a pill gets eaten"
       [pills]
       ;; If the pill count is bellow the minimum, we are only
       ;; adding them to the board, no scoring necesary
       ;; TODO: add a better method of detecting if the snake has eaten
       (when (>= (count pills) game/min-pills)
             (async/put! intercom/score-chan [:pill-eaten pills])))

(defn- update-pills
       "Pass new pill coordinates to Tableau viz"
       [pills]
       (when (>= (count pills) game/min-pills)
             (with-tab vizobj "cnake"
                       #(doall
                         (-> vizobj
                             (.getWorkbook)
                             (.getActiveSheet)
                             (.getWorksheets)
                             (.get "Sheet")
                             (.applyFilterAsync "Location" (clj->js (map calc-location pills)) js/tableau.FilterUpdateType.REPLACE)
                             ))
                       ))
       (update-stats pills))

(defn- show-top-scores
       [viz params]
       (with-tab vizobj "stats"
                 (fn [] (set-parameters viz
                                        (->> (count (get-in params [:score :pills])) ; pill render events
                                             (+ 2)          ; points equals pills rendered + 2. TODO: get the exact score from the chan
                                             (conj (mapv #(get % "score") (get params :highscores))) ; append it to top 10
                                             (zipmap stats-params)))))) ; merge with parameter names

(go-loop [{:keys [:command :pills] :as params} (async/<! intercom/tableau-viz-control-channel)]
         (println "Params:" params "Cmd:" command)
         (case command
               :pills (update-pills pills)
               :reset nil ;  not implemented yet
               :game-over (show-top-scores vizobj params))
         (recur (async/<! intercom/tableau-viz-control-channel)))
