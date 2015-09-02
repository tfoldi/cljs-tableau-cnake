(ns cnake.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cnake.ui :as ui]
            [cnake.tableau :as tableau]
            [cnake.intercom :as intercom]
            [cljs.core.async :as async]))

(enable-console-print!)

;; The ui is the starting point. It will render itself and initialize
;; the game. But only after Tableau viz is in interactive mode
(go
  (async/<! intercom/tableau-viz-ready-channel)

  ;; After the tableau visualization has started, we need to re-focus
  ;; on the game div to get the keyboard inputs correctly.
  ;;
  ;; For some reason, calling focus() on document.body does not do
  ;; the job, so we simply blur the iframe that is already focused by
  ;; Tableau.
  (-> js/document (.getElementsByTagName "iframe") (aget 0) .blur)
  
  (ui/init))
