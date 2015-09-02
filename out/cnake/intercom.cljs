(ns cnake.intercom
  (:require [cljs.core.async :as async]))

;; The channel used to input scoring data
(def score-chan (async/chan 10))

(def tableau-viz-control-channel (async/chan))

;; The channel to mark when the tableau reports is complete
(def tableau-viz-ready-channel (async/chan))

