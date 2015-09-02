// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.score');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('cnake.intercom');
cnake.score.submit_score_chan = cljs.core.async.chan.call(null,(10));
cnake.score.default_score = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"keystrokes","keystrokes",762690308),cljs.core.PersistentVector.EMPTY], null);
cnake.score.diff_millis = (function() {
var diff_millis = null;
var diff_millis__1 = (function (start){
return diff_millis.call(null,start,cljs_time.core.now.call(null));
});
var diff_millis__2 = (function (start,end){
return cljs_time.core.in_millis.call(null,cljs_time.core.interval.call(null,start,end));
});
diff_millis = function(start,end){
switch(arguments.length){
case 1:
return diff_millis__1.call(this,start);
case 2:
return diff_millis__2.call(this,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
diff_millis.cljs$core$IFn$_invoke$arity$1 = diff_millis__1;
diff_millis.cljs$core$IFn$_invoke$arity$2 = diff_millis__2;
return diff_millis;
})()
;
/**
* Helper to add a timestamp to a vector in a map.
*/
cnake.score.add_time_to = (function add_time_to(epoch,score,key){
return cljs.core.assoc.call(null,score,key,cljs.core.conj.call(null,score.call(null,key),cnake.score.diff_millis.call(null,epoch)));
});
cnake.score.HIGHSCORE_DIV_ID = "highscore-name-entry";
/**
* Toggles the visibility of an HTML element by id.
*/
cnake.score.toggle_element = (function toggle_element(id,visible){
return (document.getElementById(id).style["display"] = (cljs.core.truth_(visible)?"block":"none"));
});
var c__5911__auto___11272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___11272){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___11272){
return (function (state_11242){
var state_val_11243 = (state_11242[(1)]);
if((state_val_11243 === (9))){
var inst_11212 = (state_11242[(7)]);
var inst_11211 = (state_11242[(8)]);
var inst_11229 = cnake.score.diff_millis.call(null,inst_11211);
var inst_11230 = cljs.core.assoc.call(null,inst_11212,new cljs.core.Keyword(null,"duration","duration",1444101068),inst_11229);
var inst_11231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11232 = [inst_11211,inst_11230];
var inst_11233 = (new cljs.core.PersistentVector(null,2,(5),inst_11231,inst_11232,null));
var inst_11234 = cljs.core.async.put_BANG_.call(null,cnake.score.submit_score_chan,inst_11233);
var tmp11244 = inst_11212;
var tmp11245 = inst_11211;
var inst_11211__$1 = tmp11245;
var inst_11212__$1 = tmp11244;
var state_11242__$1 = (function (){var statearr_11248 = state_11242;
(statearr_11248[(7)] = inst_11212__$1);

(statearr_11248[(9)] = inst_11234);

(statearr_11248[(8)] = inst_11211__$1);

return statearr_11248;
})();
var statearr_11249_11273 = state_11242__$1;
(statearr_11249_11273[(2)] = null);

(statearr_11249_11273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (8))){
var inst_11212 = (state_11242[(7)]);
var inst_11211 = (state_11242[(8)]);
var inst_11226 = cnake.score.add_time_to.call(null,inst_11211,inst_11212,new cljs.core.Keyword(null,"keystrokes","keystrokes",762690308));
var tmp11246 = inst_11211;
var inst_11211__$1 = tmp11246;
var inst_11212__$1 = inst_11226;
var state_11242__$1 = (function (){var statearr_11250 = state_11242;
(statearr_11250[(7)] = inst_11212__$1);

(statearr_11250[(8)] = inst_11211__$1);

return statearr_11250;
})();
var statearr_11251_11274 = state_11242__$1;
(statearr_11251_11274[(2)] = null);

(statearr_11251_11274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (7))){
var inst_11212 = (state_11242[(7)]);
var inst_11211 = (state_11242[(8)]);
var inst_11223 = cnake.score.add_time_to.call(null,inst_11211,inst_11212,new cljs.core.Keyword(null,"pills","pills",-85353539));
var tmp11247 = inst_11211;
var inst_11211__$1 = tmp11247;
var inst_11212__$1 = inst_11223;
var state_11242__$1 = (function (){var statearr_11252 = state_11242;
(statearr_11252[(7)] = inst_11212__$1);

(statearr_11252[(8)] = inst_11211__$1);

return statearr_11252;
})();
var statearr_11253_11275 = state_11242__$1;
(statearr_11253_11275[(2)] = null);

(statearr_11253_11275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (6))){
var inst_11219 = cljs.core.println.call(null,"RESETING SCORE");
var inst_11220 = cljs_time.core.now.call(null);
var inst_11211 = inst_11220;
var inst_11212 = cnake.score.default_score;
var state_11242__$1 = (function (){var statearr_11254 = state_11242;
(statearr_11254[(7)] = inst_11212);

(statearr_11254[(8)] = inst_11211);

(statearr_11254[(10)] = inst_11219);

return statearr_11254;
})();
var statearr_11255_11276 = state_11242__$1;
(statearr_11255_11276[(2)] = null);

(statearr_11255_11276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (5))){
var inst_11238 = (state_11242[(2)]);
var state_11242__$1 = state_11242;
var statearr_11256_11277 = state_11242__$1;
(statearr_11256_11277[(2)] = inst_11238);

(statearr_11256_11277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (4))){
var inst_11216 = (state_11242[(2)]);
var inst_11217 = cljs.core.nth.call(null,inst_11216,(0),null);
var inst_11218 = cljs.core.nth.call(null,inst_11216,(1),null);
var state_11242__$1 = (function (){var statearr_11257 = state_11242;
(statearr_11257[(11)] = inst_11218);

return statearr_11257;
})();
var G__11258_11278 = (((inst_11217 instanceof cljs.core.Keyword))?inst_11217.fqn:null);
switch (G__11258_11278) {
case "game-over":
var statearr_11259_11280 = state_11242__$1;
(statearr_11259_11280[(1)] = (9));


break;
case "turn":
var statearr_11260_11281 = state_11242__$1;
(statearr_11260_11281[(1)] = (8));


break;
case "pill-eaten":
var statearr_11261_11282 = state_11242__$1;
(statearr_11261_11282[(1)] = (7));


break;
case "reset":
var statearr_11262_11283 = state_11242__$1;
(statearr_11262_11283[(1)] = (6));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11217)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (3))){
var inst_11240 = (state_11242[(2)]);
var state_11242__$1 = state_11242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11242__$1,inst_11240);
} else {
if((state_val_11243 === (2))){
var state_11242__$1 = state_11242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11242__$1,(4),cnake.intercom.score_chan);
} else {
if((state_val_11243 === (1))){
var inst_11210 = cljs_time.core.now.call(null);
var inst_11211 = inst_11210;
var inst_11212 = cnake.score.default_score;
var state_11242__$1 = (function (){var statearr_11263 = state_11242;
(statearr_11263[(7)] = inst_11212);

(statearr_11263[(8)] = inst_11211);

return statearr_11263;
})();
var statearr_11264_11284 = state_11242__$1;
(statearr_11264_11284[(2)] = null);

(statearr_11264_11284[(1)] = (2));


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
});})(c__5911__auto___11272))
;
return ((function (switch__5896__auto__,c__5911__auto___11272){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_11268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11268[(0)] = state_machine__5897__auto__);

(statearr_11268[(1)] = (1));

return statearr_11268;
});
var state_machine__5897__auto____1 = (function (state_11242){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_11242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e11269){if((e11269 instanceof Object)){
var ex__5900__auto__ = e11269;
var statearr_11270_11285 = state_11242;
(statearr_11270_11285[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11286 = state_11242;
state_11242 = G__11286;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_11242){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_11242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___11272))
})();
var state__5913__auto__ = (function (){var statearr_11271 = f__5912__auto__.call(null);
(statearr_11271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___11272);

return statearr_11271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___11272))
);

cnake.score.GAME_NAME = "clj-snake";
cnake.score.SCORING_URL = "http://highscore.starschema.net";
cnake.score.HIGHSCORE_SUBMIT_URL = [cljs.core.str(cnake.score.SCORING_URL),cljs.core.str("/new-score")].join('');
cnake.score.HIGHSCORES_URL = [cljs.core.str(cnake.score.SCORING_URL),cljs.core.str("/get-scores/"),cljs.core.str(cnake.score.GAME_NAME)].join('');
/**
* Submits the score to the server.
* The highscores returned by the server are sent via the results-chan
*/
cnake.score.submit_score = (function submit_score(score,results_chan){
return goog.net.XhrIo.send(cnake.score.HIGHSCORE_SUBMIT_URL,(function (event){
var res = event.target.getResponseText();
return cljs.core.async.put_BANG_.call(null,results_chan,cljs.core.js__GT_clj.call(null,JSON.parse(res)));
}),"post",JSON.stringify(cljs.core.clj__GT_js.call(null,score)),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null));
});
cnake.score.highscore_chan = cljs.core.async.chan.call(null);
cnake.score.highscore_submission_chan = cljs.core.async.chan.call(null);
/**
* Returns true if a score is better then the other-score
*/
cnake.score.is_better_score = (function is_better_score(other_score,p__11287){
var map__11289 = p__11287;
var map__11289__$1 = ((cljs.core.seq_QMARK_.call(null,map__11289))?cljs.core.apply.call(null,cljs.core.hash_map,map__11289):map__11289);
var duration = cljs.core.get.call(null,map__11289__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var score = cljs.core.get.call(null,map__11289__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var last_duration = other_score.call(null,"duration");
var last_score = other_score.call(null,"score");
return ((last_score == null)) || ((last_score < score)) || ((cljs.core._EQ_.call(null,last_score,score)) && ((last_duration > duration)));
});
var c__5911__auto___11370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___11370){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___11370){
return (function (state_11340){
var state_val_11341 = (state_11340[(1)]);
if((state_val_11341 === (7))){
var inst_11336 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11343_11371 = state_11340__$1;
(statearr_11343_11371[(2)] = inst_11336);

(statearr_11343_11371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (1))){
var inst_11290 = cljs.core.PersistentVector.EMPTY;
var inst_11291 = inst_11290;
var state_11340__$1 = (function (){var statearr_11344 = state_11340;
(statearr_11344[(7)] = inst_11291);

return statearr_11344;
})();
var statearr_11345_11372 = state_11340__$1;
(statearr_11345_11372[(2)] = null);

(statearr_11345_11372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (4))){
var inst_11300 = (state_11340[(8)]);
var inst_11298 = (state_11340[(2)]);
var inst_11299 = cljs.core.nth.call(null,inst_11298,(0),null);
var inst_11300__$1 = cljs.core.nth.call(null,inst_11298,(1),null);
var inst_11304 = cljs.core._EQ_.call(null,cnake.score.highscore_chan,inst_11300__$1);
var state_11340__$1 = (function (){var statearr_11346 = state_11340;
(statearr_11346[(9)] = inst_11299);

(statearr_11346[(8)] = inst_11300__$1);

return statearr_11346;
})();
if(inst_11304){
var statearr_11347_11373 = state_11340__$1;
(statearr_11347_11373[(1)] = (5));

} else {
var statearr_11348_11374 = state_11340__$1;
(statearr_11348_11374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (13))){
var inst_11291 = (state_11340[(7)]);
var inst_11327 = (state_11340[(2)]);
var tmp11342 = inst_11291;
var inst_11291__$1 = tmp11342;
var state_11340__$1 = (function (){var statearr_11349 = state_11340;
(statearr_11349[(7)] = inst_11291__$1);

(statearr_11349[(10)] = inst_11327);

return statearr_11349;
})();
var statearr_11350_11375 = state_11340__$1;
(statearr_11350_11375[(2)] = null);

(statearr_11350_11375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (6))){
var inst_11300 = (state_11340[(8)]);
var inst_11309 = cljs.core._EQ_.call(null,cnake.score.submit_score_chan,inst_11300);
var state_11340__$1 = state_11340;
if(inst_11309){
var statearr_11351_11376 = state_11340__$1;
(statearr_11351_11376[(1)] = (8));

} else {
var statearr_11352_11377 = state_11340__$1;
(statearr_11352_11377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (3))){
var inst_11338 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11340__$1,inst_11338);
} else {
if((state_val_11341 === (12))){
var inst_11314 = (state_11340[(11)]);
var inst_11325 = cljs.core.async.put_BANG_.call(null,cnake.score.highscore_submission_chan,inst_11314);
var state_11340__$1 = state_11340;
var statearr_11353_11378 = state_11340__$1;
(statearr_11353_11378[(2)] = inst_11325);

(statearr_11353_11378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (2))){
var inst_11294 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11295 = [cnake.score.submit_score_chan,cnake.score.highscore_chan];
var inst_11296 = (new cljs.core.PersistentVector(null,2,(5),inst_11294,inst_11295,null));
var state_11340__$1 = state_11340;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11340__$1,(4),inst_11296);
} else {
if((state_val_11341 === (11))){
var inst_11314 = (state_11340[(11)]);
var inst_11322 = cljs.core.println.call(null,"NEW HIGHSCORE!");
var inst_11323 = cnake.score.show_highscore_box.call(null,inst_11314,cnake.score.highscore_submission_chan);
var state_11340__$1 = (function (){var statearr_11354 = state_11340;
(statearr_11354[(12)] = inst_11322);

return statearr_11354;
})();
var statearr_11355_11379 = state_11340__$1;
(statearr_11355_11379[(2)] = inst_11323);

(statearr_11355_11379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (9))){
var inst_11300 = (state_11340[(8)]);
var inst_11330 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_11300)].join('');
var inst_11331 = (new Error(inst_11330));
var inst_11332 = (function(){throw inst_11331})();
var state_11340__$1 = state_11340;
var statearr_11356_11380 = state_11340__$1;
(statearr_11356_11380[(2)] = inst_11332);

(statearr_11356_11380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (5))){
var inst_11299 = (state_11340[(9)]);
var inst_11306 = cnake.score.output_high_scores.call(null,inst_11299);
var inst_11291 = inst_11299;
var state_11340__$1 = (function (){var statearr_11357 = state_11340;
(statearr_11357[(7)] = inst_11291);

(statearr_11357[(13)] = inst_11306);

return statearr_11357;
})();
var statearr_11358_11381 = state_11340__$1;
(statearr_11358_11381[(2)] = null);

(statearr_11358_11381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (10))){
var inst_11334 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11359_11382 = state_11340__$1;
(statearr_11359_11382[(2)] = inst_11334);

(statearr_11359_11382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (8))){
var inst_11291 = (state_11340[(7)]);
var inst_11299 = (state_11340[(9)]);
var inst_11314 = (state_11340[(11)]);
var inst_11312 = cljs.core.nth.call(null,inst_11299,(0),null);
var inst_11313 = cljs.core.nth.call(null,inst_11299,(1),null);
var inst_11314__$1 = cnake.score.prepare_score_for_submission.call(null,inst_11312,inst_11313);
var inst_11315 = cljs.core.last.call(null,inst_11291);
var inst_11316 = cnake.score.is_better_score.call(null,inst_11315,inst_11314__$1);
var inst_11317 = [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"highscores","highscores",-273300000)];
var inst_11318 = [new cljs.core.Keyword(null,"game-over","game-over",-607322695),inst_11313,inst_11291];
var inst_11319 = cljs.core.PersistentHashMap.fromArrays(inst_11317,inst_11318);
var inst_11320 = cljs.core.async.put_BANG_.call(null,cnake.intercom.tableau_viz_control_channel,inst_11319);
var state_11340__$1 = (function (){var statearr_11360 = state_11340;
(statearr_11360[(14)] = inst_11320);

(statearr_11360[(11)] = inst_11314__$1);

return statearr_11360;
})();
if(inst_11316){
var statearr_11361_11383 = state_11340__$1;
(statearr_11361_11383[(1)] = (11));

} else {
var statearr_11362_11384 = state_11340__$1;
(statearr_11362_11384[(1)] = (12));

}

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
});})(c__5911__auto___11370))
;
return ((function (switch__5896__auto__,c__5911__auto___11370){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_11366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11366[(0)] = state_machine__5897__auto__);

(statearr_11366[(1)] = (1));

return statearr_11366;
});
var state_machine__5897__auto____1 = (function (state_11340){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_11340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e11367){if((e11367 instanceof Object)){
var ex__5900__auto__ = e11367;
var statearr_11368_11385 = state_11340;
(statearr_11368_11385[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11386 = state_11340;
state_11340 = G__11386;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_11340){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_11340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___11370))
})();
var state__5913__auto__ = (function (){var statearr_11369 = f__5912__auto__.call(null);
(statearr_11369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___11370);

return statearr_11369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___11370))
);

var c__5911__auto___11407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___11407){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___11407){
return (function (state_11395){
var state_val_11396 = (state_11395[(1)]);
if((state_val_11396 === (4))){
var inst_11389 = (state_11395[(2)]);
var inst_11390 = cnake.score.submit_score.call(null,inst_11389,cnake.score.highscore_chan);
var state_11395__$1 = (function (){var statearr_11397 = state_11395;
(statearr_11397[(7)] = inst_11390);

return statearr_11397;
})();
var statearr_11398_11408 = state_11395__$1;
(statearr_11398_11408[(2)] = null);

(statearr_11398_11408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11396 === (3))){
var inst_11393 = (state_11395[(2)]);
var state_11395__$1 = state_11395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11395__$1,inst_11393);
} else {
if((state_val_11396 === (2))){
var state_11395__$1 = state_11395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11395__$1,(4),cnake.score.highscore_submission_chan);
} else {
if((state_val_11396 === (1))){
var state_11395__$1 = state_11395;
var statearr_11399_11409 = state_11395__$1;
(statearr_11399_11409[(2)] = null);

(statearr_11399_11409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__5911__auto___11407))
;
return ((function (switch__5896__auto__,c__5911__auto___11407){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_11403 = [null,null,null,null,null,null,null,null];
(statearr_11403[(0)] = state_machine__5897__auto__);

(statearr_11403[(1)] = (1));

return statearr_11403;
});
var state_machine__5897__auto____1 = (function (state_11395){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_11395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e11404){if((e11404 instanceof Object)){
var ex__5900__auto__ = e11404;
var statearr_11405_11410 = state_11395;
(statearr_11405_11410[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11411 = state_11395;
state_11395 = G__11411;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_11395){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_11395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___11407))
})();
var state__5913__auto__ = (function (){var statearr_11406 = f__5912__auto__.call(null);
(statearr_11406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___11407);

return statearr_11406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___11407))
);

/**
* Shows the highscore box.
* After the user clicks the submit button, the score will be sent to
* submit-channel with a new user-name.
*/
cnake.score.show_highscore_box = (function show_highscore_box(score,submit_channel){
cnake.score.toggle_element.call(null,cnake.score.HIGHSCORE_DIV_ID,true);

var submit_btn = goog.dom.getElement("submit-name-btn");
return goog.events.listen(submit_btn,"click",((function (submit_btn){
return (function (e){
goog.events.removeAll(submit_btn,"click");

e.preventDefault();

cnake.score.toggle_element.call(null,cnake.score.HIGHSCORE_DIV_ID,false);

return cljs.core.async.put_BANG_.call(null,submit_channel,cljs.core.assoc.call(null,score,new cljs.core.Keyword(null,"user-name","user-name",1302913545),goog.dom.getElement("name-entry").value));
});})(submit_btn))
);
});
/**
* Creates the highscore table.
*/
cnake.score.output_high_scores = (function output_high_scores(high_scores){
var html_list = cljs.core.map_indexed.call(null,(function (i,e){
return [cljs.core.str("<tr class='place-00"),cljs.core.str(i),cljs.core.str("'>"),cljs.core.str("<td class='place'>"),cljs.core.str(((1) + i)),cljs.core.str(".</td>"),cljs.core.str("<th class='user-name'>"),cljs.core.str(e.call(null,"user-name")),cljs.core.str("</th>"),cljs.core.str("<td class='score'>"),cljs.core.str(e.call(null,"score")),cljs.core.str(" <small>points</small></td>"),cljs.core.str("<td class='duration'>"),cljs.core.str(Math.round.call(null,(e.call(null,"duration") / (1000)))),cljs.core.str(" <small>sec</small></td>"),cljs.core.str("</tr>")].join('');
}),high_scores);
(document.getElementById("high-scores-list-table-body")["innerHTML"] = cljs.core.apply.call(null,cljs.core.str,html_list));

cnake.score.toggle_element.call(null,"high-scores-loaded",true);

return cnake.score.toggle_element.call(null,"high-scores-loader",false);
});
cnake.score.fetch_high_scores = (function fetch_high_scores(){
return goog.net.XhrIo.send(cnake.score.HIGHSCORES_URL,(function (event){
var res = event.target.getResponseText();
var v = cljs.core.js__GT_clj.call(null,JSON.parse(res));
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,v),cnake.score.GAME_NAME)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Wrong game type for highscores!"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Symbol(null,"GAME-NAME","GAME-NAME",1493209114,null))))].join('')));
}

return cljs.core.async.put_BANG_.call(null,cnake.score.highscore_chan,cljs.core.second.call(null,v));
}),"GET");
});
cnake.score.fetch_high_scores.call(null);
/**
* Convert a list of timestamps to an event of type.
*/
cnake.score.make_score_event = (function make_score_event(type,scores){
return cljs.core.map.call(null,(function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),s], null);
}),scores);
});
/**
* Converts the score data to the format accepted by the server.
*/
cnake.score.prepare_score_for_submission = (function prepare_score_for_submission(epoch,p__11412){
var map__11414 = p__11412;
var map__11414__$1 = ((cljs.core.seq_QMARK_.call(null,map__11414))?cljs.core.apply.call(null,cljs.core.hash_map,map__11414):map__11414);
var score = map__11414__$1;
var keystrokes = cljs.core.get.call(null,map__11414__$1,new cljs.core.Keyword(null,"keystrokes","keystrokes",762690308));
var duration = cljs.core.get.call(null,map__11414__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pills = cljs.core.get.call(null,map__11414__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"user-name","user-name",1302913545),"Anonymous",new cljs.core.Keyword(null,"game-type","game-type",-1745309040),"clj-snake",new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs_time.format.unparse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180)),epoch),new cljs.core.Keyword(null,"score","score",-1963588780),(cljs.core.count.call(null,pills) + (2)),new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.concat.call(null,cnake.score.make_score_event.call(null,"keystroke",keystrokes),cnake.score.make_score_event.call(null,"pill",cljs.core.rest.call(null,pills)))], null);
});

//# sourceMappingURL=score.js.map