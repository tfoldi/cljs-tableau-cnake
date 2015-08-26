(ns cnake.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cnake.ui :as ui]
            [cnake.tableau :as tableau]
            [cljs.core.async :as async]))

(enable-console-print!)

;; The ui is the starting point. It will render itself and initialize
;; the game. But only after Tableau viz is in interactive mode
(go
  (async/<! tableau/tableau-viz-ready-channel)
  (ui/init))
