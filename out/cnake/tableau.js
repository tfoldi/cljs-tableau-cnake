// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.tableau');
goog.require('cljs.core');
goog.require('cnake.intercom');
goog.require('cnake.utils.dom');
goog.require('cljs.core.async');
goog.require('cnake.game');
goog.require('cnake.score');
cnake.tableau.stats_params = cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (p1__11114_SHARP_){
return [cljs.core.str("Rank "),cljs.core.str(p1__11114_SHARP_)].join('');
}),cljs.core.range.call(null,(1),(11))),"You");
cnake.tableau.viz_url = "https://public.tableau.com/views/cljs-tableau-snake/cnake";
cnake.tableau.placeholder_div = cnake.utils.dom.by_id.call(null,"game");
cnake.tableau.viz_options = (function (){var obj11116 = {"hideTabs":true,"hideToolbar":true,"onFirstInteractive":(function (){
return cljs.core.async.put_BANG_.call(null,cnake.intercom.tableau_viz_ready_channel,"OK");
})};
return obj11116;
})();
cnake.tableau.vizobj = (new tableau.Viz(cnake.tableau.placeholder_div,cnake.tableau.viz_url,cnake.tableau.viz_options));
/**
* Concert pill location to tableau location
*/
cnake.tableau.calc_location = (function calc_location(p__11117){
var vec__11119 = p__11117;
var x = cljs.core.nth.call(null,vec__11119,(0),null);
var y = cljs.core.nth.call(null,vec__11119,(1),null);
return [cljs.core.str((((((cnake.game.height - (1)) - y) * cnake.game.width) + x) + (1)))].join('');
});
/**
* Change tableau report's current sheet if necessary, then execute callback when present
*/
cnake.tableau.with_tab = (function() {
var with_tab = null;
var with_tab__2 = (function (viz,tabname){
return viz.getWorkbook().activateSheetAsync(tabname);
});
var with_tab__3 = (function (viz,tabname,then_callback){
return with_tab.call(null,viz,tabname).then(then_callback);
});
with_tab = function(viz,tabname,then_callback){
switch(arguments.length){
case 2:
return with_tab__2.call(this,viz,tabname);
case 3:
return with_tab__3.call(this,viz,tabname,then_callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
with_tab.cljs$core$IFn$_invoke$arity$2 = with_tab__2;
with_tab.cljs$core$IFn$_invoke$arity$3 = with_tab__3;
return with_tab;
})()
;
/**
* Change parameter values for the active sheet
*/
cnake.tableau.set_parameters = (function set_parameters(viz,parameter_map){
var workbook = viz.getWorkbook();
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (workbook){
return (function (param){
return workbook.changeParameterValueAsync(cljs.core.first.call(null,param),cljs.core.second.call(null,param));
});})(workbook))
,parameter_map));
});
/**
* Update the stats if a pill gets eaten
*/
cnake.tableau.update_stats = (function update_stats(pills){
if((cljs.core.count.call(null,pills) >= cnake.game.min_pills)){
return cljs.core.async.put_BANG_.call(null,cnake.intercom.score_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pill-eaten","pill-eaten",18762326),pills], null));
} else {
return null;
}
});
/**
* Pass new pill coordinates to Tableau viz
*/
cnake.tableau.update_pills = (function update_pills(pills){
if((cljs.core.count.call(null,pills) >= cnake.game.min_pills)){
cnake.tableau.with_tab.call(null,cnake.tableau.vizobj,"cnake",(function (){
return cljs.core.doall.call(null,cnake.tableau.vizobj.getWorkbook().getActiveSheet().getWorksheets().get("Sheet").applyFilterAsync("Location",cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cnake.tableau.calc_location,pills)),tableau.FilterUpdateType.REPLACE));
}));
} else {
}

return cnake.tableau.update_stats.call(null,pills);
});
cnake.tableau.show_top_scores = (function show_top_scores(viz,params){
return cnake.tableau.with_tab.call(null,cnake.tableau.vizobj,"stats",(function (){
return cnake.tableau.set_parameters.call(null,viz,cljs.core.zipmap.call(null,cnake.tableau.stats_params,cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (p1__11120_SHARP_){
return cljs.core.get.call(null,p1__11120_SHARP_,"score");
}),cljs.core.get.call(null,params,new cljs.core.Keyword(null,"highscores","highscores",-273300000))),((2) + cljs.core.count.call(null,cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"pills","pills",-85353539)], null)))))));
}));
});
var c__5911__auto___11189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___11189){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___11189){
return (function (state_11158){
var state_val_11159 = (state_11158[(1)]);
if((state_val_11159 === (7))){
var inst_11156 = (state_11158[(2)]);
var state_11158__$1 = state_11158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11158__$1,inst_11156);
} else {
if((state_val_11159 === (1))){
var state_11158__$1 = state_11158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11158__$1,(2),cnake.intercom.tableau_viz_control_channel);
} else {
if((state_val_11159 === (4))){
var inst_11125 = (state_11158[(7)]);
var state_11158__$1 = state_11158;
var statearr_11160_11190 = state_11158__$1;
(statearr_11160_11190[(2)] = inst_11125);

(statearr_11160_11190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (15))){
var inst_11153 = (state_11158[(2)]);
var inst_11134 = inst_11153;
var state_11158__$1 = (function (){var statearr_11161 = state_11158;
(statearr_11161[(8)] = inst_11134);

return statearr_11161;
})();
var statearr_11162_11191 = state_11158__$1;
(statearr_11162_11191[(2)] = null);

(statearr_11162_11191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (13))){
var state_11158__$1 = state_11158;
var statearr_11163_11192 = state_11158__$1;
(statearr_11163_11192[(2)] = null);

(statearr_11163_11192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (6))){
var inst_11134 = (state_11158[(8)]);
var inst_11137 = cljs.core.seq_QMARK_.call(null,inst_11134);
var state_11158__$1 = state_11158;
if(inst_11137){
var statearr_11164_11193 = state_11158__$1;
(statearr_11164_11193[(1)] = (8));

} else {
var statearr_11165_11194 = state_11158__$1;
(statearr_11165_11194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (3))){
var inst_11125 = (state_11158[(7)]);
var inst_11128 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11125);
var state_11158__$1 = state_11158;
var statearr_11166_11195 = state_11158__$1;
(statearr_11166_11195[(2)] = inst_11128);

(statearr_11166_11195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (12))){
var inst_11143 = (state_11158[(9)]);
var inst_11145 = cnake.tableau.update_pills.call(null,inst_11143);
var state_11158__$1 = state_11158;
var statearr_11167_11196 = state_11158__$1;
(statearr_11167_11196[(2)] = inst_11145);

(statearr_11167_11196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (2))){
var inst_11125 = (state_11158[(7)]);
var inst_11125__$1 = (state_11158[(2)]);
var inst_11126 = cljs.core.seq_QMARK_.call(null,inst_11125__$1);
var state_11158__$1 = (function (){var statearr_11168 = state_11158;
(statearr_11168[(7)] = inst_11125__$1);

return statearr_11168;
})();
if(inst_11126){
var statearr_11169_11197 = state_11158__$1;
(statearr_11169_11197[(1)] = (3));

} else {
var statearr_11170_11198 = state_11158__$1;
(statearr_11170_11198[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (11))){
var inst_11151 = (state_11158[(2)]);
var state_11158__$1 = (function (){var statearr_11171 = state_11158;
(statearr_11171[(10)] = inst_11151);

return statearr_11171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11158__$1,(15),cnake.intercom.tableau_viz_control_channel);
} else {
if((state_val_11159 === (9))){
var inst_11134 = (state_11158[(8)]);
var state_11158__$1 = state_11158;
var statearr_11172_11199 = state_11158__$1;
(statearr_11172_11199[(2)] = inst_11134);

(statearr_11172_11199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (5))){
var inst_11125 = (state_11158[(7)]);
var inst_11131 = (state_11158[(2)]);
var inst_11132 = cljs.core.get.call(null,inst_11131,new cljs.core.Keyword(null,"pills","pills",-85353539));
var inst_11133 = cljs.core.get.call(null,inst_11131,new cljs.core.Keyword(null,"command","command",-894540724));
var inst_11134 = inst_11125;
var state_11158__$1 = (function (){var statearr_11173 = state_11158;
(statearr_11173[(8)] = inst_11134);

(statearr_11173[(11)] = inst_11133);

(statearr_11173[(12)] = inst_11132);

return statearr_11173;
})();
var statearr_11174_11200 = state_11158__$1;
(statearr_11174_11200[(2)] = null);

(statearr_11174_11200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (14))){
var inst_11142 = (state_11158[(13)]);
var inst_11148 = cnake.tableau.show_top_scores.call(null,cnake.tableau.vizobj,inst_11142);
var state_11158__$1 = state_11158;
var statearr_11175_11201 = state_11158__$1;
(statearr_11175_11201[(2)] = inst_11148);

(statearr_11175_11201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (10))){
var inst_11142 = (state_11158[(13)]);
var inst_11142__$1 = (state_11158[(2)]);
var inst_11143 = cljs.core.get.call(null,inst_11142__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var inst_11144 = cljs.core.get.call(null,inst_11142__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var state_11158__$1 = (function (){var statearr_11176 = state_11158;
(statearr_11176[(13)] = inst_11142__$1);

(statearr_11176[(9)] = inst_11143);

return statearr_11176;
})();
var G__11177_11202 = (((inst_11144 instanceof cljs.core.Keyword))?inst_11144.fqn:null);
switch (G__11177_11202) {
case "game-over":
var statearr_11178_11204 = state_11158__$1;
(statearr_11178_11204[(1)] = (14));


break;
case "reset":
var statearr_11179_11205 = state_11158__$1;
(statearr_11179_11205[(1)] = (13));


break;
case "pills":
var statearr_11180_11206 = state_11158__$1;
(statearr_11180_11206[(1)] = (12));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11144)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (8))){
var inst_11134 = (state_11158[(8)]);
var inst_11139 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11134);
var state_11158__$1 = state_11158;
var statearr_11181_11207 = state_11158__$1;
(statearr_11181_11207[(2)] = inst_11139);

(statearr_11181_11207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5911__auto___11189))
;
return ((function (switch__5896__auto__,c__5911__auto___11189){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_11185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11185[(0)] = state_machine__5897__auto__);

(statearr_11185[(1)] = (1));

return statearr_11185;
});
var state_machine__5897__auto____1 = (function (state_11158){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_11158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e11186){if((e11186 instanceof Object)){
var ex__5900__auto__ = e11186;
var statearr_11187_11208 = state_11158;
(statearr_11187_11208[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11209 = state_11158;
state_11158 = G__11209;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_11158){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_11158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___11189))
})();
var state__5913__auto__ = (function (){var statearr_11188 = f__5912__auto__.call(null);
(statearr_11188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___11189);

return statearr_11188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___11189))
);


//# sourceMappingURL=tableau.js.map