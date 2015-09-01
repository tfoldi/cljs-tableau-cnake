(ns cnake.tableau
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [cnake.game :as game]
            [cnake.utils.dom :as dom]
            [cnake.score :as score]))


(def tableau-viz-ready-channel (async/chan))


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


(defn- update-stats
  "Update the stats if a pill gets eaten"
  [pills]
  ;; If the pill count is bellow the minimum, we are only
  ;; adding them to the board, no scoring necesary
  ;; TODO: add a better method of detecting if the snake has eaten
  (when (>= (count pills) game/min-pills)
    (async/put! score/score-chan [:pill-eaten pills])))

(defn update-pills
      "Pass new pill coordinates to Tableau viz"
      [pills]
      (when (>= (count pills) game/min-pills)
            (-> vizobj
                (.getWorkbook)
                (.getActiveSheet)
                (.getWorksheets)
                (.get "Sheet")
                (.applyFilterAsync "Location" (clj->js (map calc-location pills)) js/tableau.FilterUpdateType.REPLACE)
                ))
      (update-stats pills))


(go-loop [{:keys [:command :pills] :as params} (async/<! game/tableau-viz-control-channel)]
         (println "Params:" params "Cmd:" command)
         (case command
               :pills (update-pills pills))
         (recur (async/<! game/tableau-viz-control-channel)))