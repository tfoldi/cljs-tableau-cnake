(ns cnake.score
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]

    ;; The google closure XHR library
            [goog.net.XhrIo :as xhr]
            [cljs-time.core :as time]
            [cljs-time.format :as tf]))

;; Scoring PUBLIC API
;; ==================

;; The channel used to input scoring data
(def score-chan (async/chan 10))

;; The channel for score timing stuff
(def submit-score-chan (async/chan 10))


;; Private API
;; ===========


;; The startup value for the scoring
(def ^:private default-score {:pills [] :keystrokes []})

(defn- diff-millis
  ([start] (diff-millis start (time/now)))
  ([start end] (->> end (time/interval start) (time/in-millis))))

(defn- add-time-to
  "Helper to add a timestamp to a vector in a map."
  ([epoch score key]
   (assoc score
     key (conj (score key) (diff-millis epoch)))))

(def ^:private HIGHSCORE-DIV-ID "highscore-name-entry")

(defn- toggle-element
  "Toggles the visibility of an HTML element by id."
  [id visible]
  (-> js/document (.getElementById id) .-style (aset "display" (if visible "block" "none"))))

(defn- show-highscore-box
  "Shows the highscore box"
  [score visible]
  (toggle-element HIGHSCORE-DIV-ID visible))


;; Loop until we have a scoring event
(go-loop [epoch (time/now)
          score default-score]
         ;; Read from the channel
         (let [[command data] (async/<! score-chan)]


           (case command
             ;; On reset, clear the score
             :reset (recur (time/now) default-score)

             ;; If the snake ate a pill, grow the pills list
             :pill-eaten (recur epoch (add-time-to epoch score :pills))

             ;; If there is a turn taken by the player, save its timestamp
             ;; so someone may analyze winning players later down the road
             :turn (recur epoch (add-time-to epoch score :keystrokes))


             ;; On game over submit the score
             :game-over (do
                          (let [final-score (assoc score :duration (diff-millis epoch))]

                            ;(show-highscore-box score true)
                            ;; Add the duration here, so the stopwatch
                            ;; is stopped right after game over.
                            (async/put! submit-score-chan [epoch final-score])
                            (recur epoch score)))
             ))
         )


;; Score submission
;; ================

(def ^:private SCORING-URL "http://localhost:3000")
(def ^:private HIGHSCORES-URL (str SCORING-URL "/get-scores/clj-snake"))


(defn- make-score-event [type scores]
  (map (fn [s] {:type type :timestamp s}) scores))

(defn- submit-score
  "Submits the score to the server"
  [epoch {:keys [pills duration keystrokes] :as score}]
  (let [game-data {:name       "My name here"
                   :type       "tableau-snake"

                   :start-time (tf/unparse (tf/formatters :date-time) epoch)
                   ;; Since the extra calls to update-pills are unavoidable in the current
                   ;; design, we add the +2 here (see also the pill events further down.
                   :score      (+ (count pills) 2)
                   :duration   duration
                   :events     (concat
                                 (make-score-event "keystroke" keystrokes)
                                 ;; Since we get an extra call when
                                 ;; the third pill is initially generated, we need to skip
                                 ;; the first entry here.
                                 (make-score-event "pill" (rest pills)))}]
    (xhr/send SCORING-URL
              ;; Callback
              (fn [event]
                (let [res (-> event .-target .getResponseText)]
                  (js/console.log "Response is:" (js/JSON.parse res))
                  ))
              ;; Method
              "POST"
              ;; Content
              (pr-str game-data)
              ))
  )



;; The channel for the high scores info
(def ^:private highscore-chan (async/chan))
(def ^:private ^:const GAME-NAME "clj-snake")

(declare output-high-scores)

;; The main scoring submitter waiting for scores to submit
(go-loop [highscores []]
         (let [[v ch] (async/alts! [submit-score-chan highscore-chan])]
           (condp = ch
             highscore-chan (do
                              (println "Got some high-scores!" (pr-str v))
                              (output-high-scores v)
                              (recur v))
             submit-score-chan (do
                                 (println "Got submit high-scores!" (pr-str v))
                                 (recur highscores)))
           )
         ;; If a score gets submitted
         #_(submit-score epoch score))



(defn- output-high-scores [high-scores]
  (let [html-list (->> high-scores
                       (map #(str "<tr>"
                                  "<th>" (% "user-name") "</th>"
                                  "<td>" (% "score") "</td>"
                                  "<td>" (/ (% "duration") 1000) " seconds</td>"
                                  "</tr>")))]
    (-> js/document
        (.getElementById "high-scores-list-table-body")
        (aset "innerHTML" (apply str html-list)))

    (toggle-element "high-scores-loaded" true)
    (toggle-element "high-scores-loader" false)
    ))

(defn- fetch-high-scores []
  (xhr/send HIGHSCORES-URL
            ;; Callback
            (fn [event]
              (let [res (-> event .-target .getResponseText)]
                (let [v (js->clj (js/JSON.parse res))]
                  (assert (= (first v) GAME-NAME) "Wrong game type for highscores!")
                  (async/put! highscore-chan (second v)))))
            ;; Method
            "GET"
            )
  )

(fetch-high-scores)

