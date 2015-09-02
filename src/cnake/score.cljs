(ns cnake.score
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]

    ;; The google closure XHR library
            [goog.net.XhrIo :as xhr]
            [cljs-time.core :as time]
            [cljs-time.format :as tf]

            [cnake.intercom :refer [score-chan tableau-viz-control-channel]]))

;; Scoring PUBLIC API
;; ==================

;;; The channel used to input scoring data
;(def score-chan (async/chan 10))


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

(def ^:private ^:const GAME-NAME "clj-snake")

(def ^:private SCORING-URL "http://highscore.starschema.net")
(def ^:private HIGHSCORE-SUBMIT-URL (str SCORING-URL "/new-score"))
(def ^:private HIGHSCORES-URL (str SCORING-URL "/get-scores/" GAME-NAME))


(defn- make-score-event [type scores]
  (map (fn [s] {:type type :timestamp s}) scores))

(defn- submit-score
  "submits the score to the server"
  [score results-chan]
  (xhr/send HIGHSCORE-SUBMIT-URL
            ;; callback
            (fn [event]
              (let [res (-> event .-target .getResponseText)]
                ;; forward the received high-scores to the high score displayer
                (async/put! results-chan (-> res js/JSON.parse js->clj))))
            ;; method
            "post"
            ;; content
            (js/JSON.stringify (clj->js score))
            {"Content-Type" "application/json"}
            )
  )



;; The channel for the high scores info
(def ^:private highscore-chan (async/chan))

(declare output-high-scores)
(declare prepare-score-for-submission)
(declare fetch-high-scores)

(defn- is-better-score
  "Returns true if a score is better then the other-score"
  [other-score {:keys [score duration]}]
  (let [last-duration (other-score "duration")
        last-score (other-score "score")]
    ;; If the last score is nil, we have no high scores yet
    (or (nil? last-score)
        (< last-score score)
        (and (= last-score score) (> last-duration duration)))))

;; The main scoring submitter waiting for scores to submit
(go-loop [highscores []]
         (let [[v ch] (async/alts! [submit-score-chan highscore-chan])]
           (condp = ch
             ;; We received a new batch of high-scores. Store them in the loop
             highscore-chan (do
                              (output-high-scores v)
                              (recur v))
             ;; We need to submit the score (and maybe ask for a name)
             submit-score-chan (do
                                 (let [[epoch score] v
                                       new-score (prepare-score-for-submission epoch score)
                                       is-new-highscore (is-better-score (last highscores) new-score)]

                                   (async/put! tableau-viz-control-channel {:command    :game-over
                                                                            :score      score
                                                                            :highscores highscores})
                                   (submit-score new-score highscore-chan)
                                   ;; If a score gets submitted
                                   #_(if is-new-highscore
                                       (println "New highscore")
                                       (do
                                         (submit-score new-score)
                                         )
                                       )
                                   ;; Re-load the highscores after submission
                                   (recur highscores))))
           )
         )



(defn- output-high-scores [high-scores]
  (let [html-list (->> high-scores
                       (map-indexed (fn [i e]
                                      (str "<tr class='place-00" i "'>"
                                           "<td class='place'>" (+ 1 i) ".</td>"
                                           "<th class='user-name'>" (e "user-name") "</th>"
                                           "<td class='score'>" (e "score") " <small>points</small></td>"
                                           "<td class='duration'>" (Math/round (/ (e "duration") 1000)) " <small>sec</small></td>"
                                           "</tr>"))))]
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




(defn- prepare-score-for-submission
  "submits the score to the server"
  [epoch {:keys [pills duration keystrokes] :as score}]
  {:user-name  "my name here"
   :game-type  "clj-snake"

   :start-time (tf/unparse (tf/formatters :date-time) epoch)
   ;; since the extra calls to update-pills are unavoidable in the current
   ;; design, we add the +2 here (see also the pill events further down.
   :score      (+ (count pills) 2)
   :duration   duration
   :events     (concat
                 (make-score-event "keystroke" keystrokes)
                 ;; since we get an extra call when
                 ;; the third pill is initially generated, we need to skip
                 ;; the first entry here.
                 (make-score-event "pill" (rest pills)))}

  )


