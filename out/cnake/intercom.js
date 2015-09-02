// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.intercom');
goog.require('cljs.core');
goog.require('cljs.core.async');
cnake.intercom.score_chan = cljs.core.async.chan.call(null,(10));
cnake.intercom.tableau_viz_control_channel = cljs.core.async.chan.call(null);
cnake.intercom.tableau_viz_ready_channel = cljs.core.async.chan.call(null);

//# sourceMappingURL=intercom.js.map