(ns tableau)

; The public URL of the tableau viz
(def viz-url "https://public.tableau.com/views/cljs-tableau-snake/cnake")

; canvas' DOM element
(def placeholder-div
  "Canvas dom element on the page"
  (dom/by-id "cnake"))

