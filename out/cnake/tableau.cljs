(ns cnake.tableau
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [cnake.utils.dom :as dom]))


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
         (- cnake.game/height 1)
         (- y)
         (* cnake.game/width)
         (+ x)
         (+ 1)
         (str)))

(defn update-pills
      "Pass new pills coordinates to Tableau viz"
      [pills]
      (when (>= (count pills) cnake.game/min-pills)
            (-> vizobj
                (.getWorkbook)
                (.getActiveSheet)
                (.getWorksheets)
                (.get "Sheet")
                (.applyFilterAsync "Location" (clj->js (map calc-location pills)) js/tableau.FilterUpdateType.REPLACE)
                ))
      pills)
