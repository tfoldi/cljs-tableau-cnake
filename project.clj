(defproject cljs-tableau-cnake "0.1.0-SNAPSHOT"
            :description "Snake game using Tableau Public + JS API"
            :url "https://github.com/tfoldi/cljs-tableau-cnake"

            :dependencies [[org.clojure/clojure "1.6.0"]
                           [org.clojure/clojurescript "0.0-2505"]
                           [com.andrewmcveigh/cljs-time "0.3.11"]
                           [org.clojure/core.async "0.1.346.0-17112a-alpha"]]

            :plugins [[lein-cljsbuild "1.1.0"]]

            :source-paths ["src"]

            :cljsbuild {
                        :builds [{:id           "cnake"
                                  :source-paths ["src"]
                                  :compiler     {
                                                 :output-to     "tableau-cnake.js"
                                                 :output-dir    "out"
                                                 :optimizations :none
                                                 :source-map    true}}
                                 {:id           "cnake-prod"
                                  :source-paths ["src"]
                                  :compiler
                                                {:foreign-libs
                                                                [{:file     "http://public.tableau.com/javascripts/api/tableau-2.0.0.js"
                                                                  :file-min "http://public.tableau.com/javascripts/api/tableau-2.0.0.min.js"
                                                                  :provides ["tableau.Viz"]}]
                                                 :output-to     "tableau-cnake-prod.js"
                                                 :optimizations :advanced}}]})
