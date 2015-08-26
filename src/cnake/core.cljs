(ns cnake.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cnake.ui :as ui]
            [cljs.core.async :as async]))

(enable-console-print!)

(def tableau-viz-ready-channel (async/chan))


;; The ui is the starting point. It will render itself and initialize
;; the game.
(go
  (async/<! tableau-viz-ready-channel)
  (ui/init))
