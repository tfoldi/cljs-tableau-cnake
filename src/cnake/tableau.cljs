(ns cnake.tableau
  (:require [cnake.utils.dom :as dom]))

; The public URL of the tableau viz
(def viz-url "https://public.tableau.com/views/cljs-tableau-snake/cnake")

; canvas' DOM element
(def placeholder-div
  (dom/by-id "game"))

; Hide things from the embedded viz
(def viz-options
  (clj->js
    {:hideTabs     true,
     :hideToolbar: true}))

(def vizobj
  (js/tableau.Viz. placeholder-div viz-url viz-options ))
