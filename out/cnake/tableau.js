// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.tableau');
goog.require('cljs.core');
goog.require('cnake.utils.dom');
goog.require('cljs.core.async');
cnake.tableau.tableau_viz_ready_channel = cljs.core.async.chan.call(null);
cnake.tableau.viz_url = "https://public.tableau.com/views/cljs-tableau-snake/cnake";
cnake.tableau.placeholder_div = cnake.utils.dom.by_id.call(null,"game");
cnake.tableau.viz_options = (function (){var obj10476 = {"hideTabs":true,"hideToolbar":true,"onFirstInteractive":(function (){
return cljs.core.async.put_BANG_.call(null,cnake.tableau.tableau_viz_ready_channel,"OK");
})};
return obj10476;
})();
cnake.tableau.vizobj = (new tableau.Viz(cnake.tableau.placeholder_div,cnake.tableau.viz_url,cnake.tableau.viz_options));
/**
* Concert pill location to tableau location
*/
cnake.tableau.calc_location = (function calc_location(p__10477){
var vec__10479 = p__10477;
var x = cljs.core.nth.call(null,vec__10479,(0),null);
var y = cljs.core.nth.call(null,vec__10479,(1),null);
return [cljs.core.str((((((cnake.game.height - (1)) - y) * cnake.game.width) + x) + (1)))].join('');
});
/**
* Pass new pills coordinates to Tableau viz
*/
cnake.tableau.update_pills = (function update_pills(pills){
if((cljs.core.count.call(null,pills) >= cnake.game.min_pills)){
cnake.tableau.vizobj.getWorkbook().getActiveSheet().getWorksheets().get("Sheet").applyFilterAsync("Location",cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cnake.tableau.calc_location,pills)),tableau.FilterUpdateType.REPLACE);
} else {
}

return pills;
});

//# sourceMappingURL=tableau.js.map