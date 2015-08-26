(ns cnake.core
  (:require [cnake.ui :as ui]
            [cnake.tableau :as tableau]))

(enable-console-print!)

;; The ui is the starting point. It will render itself and initialize
;; the game.
(ui/init)
