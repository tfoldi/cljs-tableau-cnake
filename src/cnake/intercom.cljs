(ns cnake.intercom
  (:require [cljs.core.async :as async]))

;; The channel used to input scoring data
(def score-chan (async/chan 10))

(def tableau-viz-control-channel (async/chan))