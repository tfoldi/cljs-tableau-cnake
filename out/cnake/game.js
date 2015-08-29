// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.game');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('cnake.tableau');
/**
* Board width
*/
cnake.game.width = (25);
/**
* Board height
*/
cnake.game.height = (16);
/**
* Game logic tick speed
*/
cnake.game.game_speed = (200);
/**
* Game speed turbo multiplier
*/
cnake.game.game_turbo = (4);
/**
* Minimum number of pills on the board
*/
cnake.game.min_pills = (3);
cnake.game.initial_body_length = (3);
cnake.game.initial_body_x_pos = cljs.core.quot.call(null,cnake.game.width,(3));
cnake.game.initial_body_y_pos = cljs.core.quot.call(null,cnake.game.height,(2));
cnake.game.initial_body = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core._PLUS_,cljs.core.range.call(null,cnake.game.initial_body_length),cljs.core.repeat.call(null,cnake.game.initial_body_x_pos)),cljs.core.repeat.call(null,cnake.game.initial_body_y_pos)));
cnake.game.initial_snake = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),cnake.game.initial_body,new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null);
cnake.game.initial_world = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"snake","snake",-244377242),cnake.game.initial_snake,new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"speed","speed",1257663751),cnake.game.game_speed,new cljs.core.Keyword(null,"epoch","epoch",1435633666),cljs_time.core.epoch.call(null),new cljs.core.Keyword(null,"status","status",-1997798413),null], null);
/**
* Update velocity of a snake entity depending on which direction
* is passed (:up|down|left|right).
* The velocity is stored in :new-vel, and will be swapped with the
* old one in update-position
*/
cnake.game.new_vel = (function new_vel(snake,direction){
var new_vel__$1 = (function (){var G__10070 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__10070) {
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);

break;
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);

break;
default:
return new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(snake);

}
})();
return cljs.core.assoc.call(null,snake,new cljs.core.Keyword(null,"new-vel","new-vel",249169634),new_vel__$1);
});
/**
* Wraps the position of a point if it is out of bounds off the map
*/
cnake.game.mod_position = (function mod_position(pos){
return cljs.core.map.call(null,cljs.core.mod,pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnake.game.width,cnake.game.height], null));
});
/**
* Swaps the new-vel with the current vel if it isn't the opposite
* direction and removes the new-vel from the snake
*/
cnake.game.update_vel = (function update_vel(snake){
var vel = new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(snake);
var new_vel = new cljs.core.Keyword(null,"new-vel","new-vel",249169634).cljs$core$IFn$_invoke$arity$1(snake);
var opposite_vel_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.map.call(null,cljs.core._PLUS_,new_vel,vel));
if(cljs.core.truth_(new_vel)){
return cljs.core.dissoc.call(null,((!(opposite_vel_QMARK_))?cljs.core.assoc.call(null,snake,new cljs.core.Keyword(null,"vel","vel",-110770822),new_vel):snake),new cljs.core.Keyword(null,"new-vel","new-vel",249169634));
} else {
return snake;
}
});
/**
* Updates the position of the snake based on its own direction
*/
cnake.game.update_position = (function update_position(snake){
var turned_snake = cnake.game.update_vel.call(null,snake);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(snake);
var last_pos = cljs.core.last.call(null,body);
var new_pos = cnake.game.mod_position.call(null,cljs.core.map.call(null,cljs.core._PLUS_,last_pos,new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(turned_snake)));
return cljs.core.assoc.call(null,turned_snake,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.conj.call(null,cljs.core.subvec.call(null,body,(1)),new_pos));
});
/**
* Returns if snake crashed with itself.
*/
cnake.game.crashed_QMARK_ = (function crashed_QMARK_(p__10072){
var map__10074 = p__10072;
var map__10074__$1 = ((cljs.core.seq_QMARK_.call(null,map__10074))?cljs.core.apply.call(null,cljs.core.hash_map,map__10074):map__10074);
var body = cljs.core.get.call(null,map__10074__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var head = cljs.core.last.call(null,body);
var in_body_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.butlast.call(null,body)));
return in_body_QMARK_.call(null,head);
});
/**
* Checks if the snake feeds and returns the pill or nil
*/
cnake.game.feed = (function feed(p__10075,pills){
var map__10077 = p__10075;
var map__10077__$1 = ((cljs.core.seq_QMARK_.call(null,map__10077))?cljs.core.apply.call(null,cljs.core.hash_map,map__10077):map__10077);
var snake = map__10077__$1;
var body = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.last.call(null,body)], true),pills);
});
/**
* Grows the snake according to the old snake
*/
cnake.game.grow = (function grow(p__10078,p__10079){
var map__10082 = p__10078;
var map__10082__$1 = ((cljs.core.seq_QMARK_.call(null,map__10082))?cljs.core.apply.call(null,cljs.core.hash_map,map__10082):map__10082);
var new_snake = map__10082__$1;
var body = cljs.core.get.call(null,map__10082__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__10083 = p__10079;
var map__10083__$1 = ((cljs.core.seq_QMARK_.call(null,map__10083))?cljs.core.apply.call(null,cljs.core.hash_map,map__10083):map__10083);
var old_body = cljs.core.get.call(null,map__10083__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc.call(null,new_snake,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.conj.call(null,old_body,cljs.core.last.call(null,body)));
});
/**
* Returns a random point in the keyboard
*/
cnake.game.random_point = (function random_point(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,cnake.game.width),cljs.core.rand_int.call(null,cnake.game.height)], null);
});
/**
* Generate pills when there are none.
* Generate in free space
*/
cnake.game.update_pills = (function update_pills(pills,world){
if((cljs.core.count.call(null,pills) < cnake.game.min_pills)){
var busy = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.call(null,pills,cljs.core.get_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"body","body",-2049205669)], null))));
var pill = cnake.game.random_point.call(null);
var tries = (30);
while(true){
if(cljs.core._EQ_.call(null,tries,(0))){
return cnake.tableau.update_pills.call(null,pills);
} else {
if(cljs.core.not.call(null,busy.call(null,pill))){
return cnake.tableau.update_pills.call(null,cljs.core.conj.call(null,pills,pill));
} else {
var G__10084 = cnake.game.random_point.call(null);
var G__10085 = (tries - (1));
pill = G__10084;
tries = G__10085;
continue;

}
}
break;
}
} else {
return pills;
}
});
/**
* Updates the speed of the snake
*/
cnake.game.update_speed = (function update_speed(game,speed_up_QMARK_){
var cur_speed = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(game);
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"speed","speed",1257663751),(cljs.core.truth_(speed_up_QMARK_)?(cur_speed / cnake.game.game_turbo):(cur_speed * cnake.game.game_turbo)));
});
/**
* Tick the game after the elapsed speed time
*/
cnake.game.plan_tick_BANG_ = (function() {
var plan_tick_BANG_ = null;
var plan_tick_BANG___2 = (function (speed,cmds){
return plan_tick_BANG_.call(null,speed,cmds,cljs.core.async.chan.call(null));
});
var plan_tick_BANG___3 = (function (speed,cmds,shortcircuit){
var c__5911__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto__){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto__){
return (function (state_10118){
var state_val_10119 = (state_10118[(1)]);
if((state_val_10119 === (2))){
var inst_10112 = (state_10118[(2)]);
var inst_10113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10114 = [new cljs.core.Keyword(null,"tick","tick",-835886976)];
var inst_10115 = (new cljs.core.PersistentVector(null,1,(5),inst_10113,inst_10114,null));
var inst_10116 = cljs.core.async.put_BANG_.call(null,cmds,inst_10115);
var state_10118__$1 = (function (){var statearr_10120 = state_10118;
(statearr_10120[(7)] = inst_10112);

return statearr_10120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10118__$1,inst_10116);
} else {
if((state_val_10119 === (1))){
var inst_10107 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10108 = cljs.core.async.timeout.call(null,speed);
var inst_10109 = [inst_10108,shortcircuit];
var inst_10110 = (new cljs.core.PersistentVector(null,2,(5),inst_10107,inst_10109,null));
var state_10118__$1 = state_10118;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10118__$1,(2),inst_10110);
} else {
return null;
}
}
});})(c__5911__auto__))
;
return ((function (switch__5896__auto__,c__5911__auto__){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_10124 = [null,null,null,null,null,null,null,null];
(statearr_10124[(0)] = state_machine__5897__auto__);

(statearr_10124[(1)] = (1));

return statearr_10124;
});
var state_machine__5897__auto____1 = (function (state_10118){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e10125){if((e10125 instanceof Object)){
var ex__5900__auto__ = e10125;
var statearr_10126_10128 = state_10118;
(statearr_10126_10128[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10129 = state_10118;
state_10118 = G__10129;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10118){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_10127 = f__5912__auto__.call(null);
(statearr_10127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_10127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto__))
);

return c__5911__auto__;
});
plan_tick_BANG_ = function(speed,cmds,shortcircuit){
switch(arguments.length){
case 2:
return plan_tick_BANG___2.call(this,speed,cmds);
case 3:
return plan_tick_BANG___3.call(this,speed,cmds,shortcircuit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plan_tick_BANG_.cljs$core$IFn$_invoke$arity$2 = plan_tick_BANG___2;
plan_tick_BANG_.cljs$core$IFn$_invoke$arity$3 = plan_tick_BANG___3;
return plan_tick_BANG_;
})()
;
/**
* Applies the game constraints (eating, dying, ...) to the world
* and returns the new version.
*/
cnake.game.update_world = (function update_world(p__10130){
var map__10132 = p__10130;
var map__10132__$1 = ((cljs.core.seq_QMARK_.call(null,map__10132))?cljs.core.apply.call(null,cljs.core.hash_map,map__10132):map__10132);
var world = map__10132__$1;
var pills = cljs.core.get.call(null,map__10132__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__10132__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var new_snake = cnake.game.update_position.call(null,snake);
if(cljs.core.truth_(cnake.game.crashed_QMARK_.call(null,new_snake))){
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
var temp__4124__auto__ = cnake.game.feed.call(null,new_snake,pills);
if(cljs.core.truth_(temp__4124__auto__)){
var meal = temp__4124__auto__;
var fed_snake = cnake.game.grow.call(null,new_snake,snake);
var fed_pills = cnake.game.update_pills.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([meal], true),pills),world);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"snake","snake",-244377242),fed_snake,new cljs.core.Keyword(null,"pills","pills",-85353539),fed_pills,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"eat","eat",1686757401));
} else {
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"snake","snake",-244377242),new_snake,new cljs.core.Keyword(null,"pills","pills",-85353539),cnake.game.update_pills.call(null,pills,world),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"move","move",-2110884309));
}
}
});
/**
* Game internal loop that processes commands and updates state
* applying functions
*/
cnake.game.game_BANG_ = (function game_BANG_(initial_world,cmds,notify){
var c__5911__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto__){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto__){
return (function (state_10380){
var state_val_10381 = (state_10380[(1)]);
if((state_val_10381 === (7))){
var inst_10298 = (state_10380[(7)]);
var inst_10303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10298);
var state_10380__$1 = state_10380;
var statearr_10382_10437 = state_10380__$1;
(statearr_10382_10437[(2)] = inst_10303);

(statearr_10382_10437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (20))){
var inst_10336 = (state_10380[(8)]);
var inst_10337 = (state_10380[(9)]);
var inst_10306 = (state_10380[(10)]);
var inst_10336__$1 = cnake.game.update_world.call(null,inst_10306);
var inst_10337__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_10336__$1);
var inst_10338 = cljs.core._EQ_.call(null,inst_10337__$1,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var state_10380__$1 = (function (){var statearr_10383 = state_10380;
(statearr_10383[(8)] = inst_10336__$1);

(statearr_10383[(9)] = inst_10337__$1);

return statearr_10383;
})();
if(inst_10338){
var statearr_10384_10438 = state_10380__$1;
(statearr_10384_10438[(1)] = (21));

} else {
var statearr_10385_10439 = state_10380__$1;
(statearr_10385_10439[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (27))){
var inst_10309 = (state_10380[(11)]);
var inst_10306 = (state_10380[(10)]);
var inst_10315 = (state_10380[(12)]);
var inst_10362 = cnake.game.new_vel.call(null,inst_10309,inst_10315);
var inst_10363 = cljs.core.assoc.call(null,inst_10306,new cljs.core.Keyword(null,"snake","snake",-244377242),inst_10362);
var inst_10298 = inst_10363;
var state_10380__$1 = (function (){var statearr_10386 = state_10380;
(statearr_10386[(7)] = inst_10298);

return statearr_10386;
})();
var statearr_10387_10440 = state_10380__$1;
(statearr_10387_10440[(2)] = null);

(statearr_10387_10440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (1))){
var inst_10288 = cljs.core.seq_QMARK_.call(null,initial_world);
var state_10380__$1 = state_10380;
if(inst_10288){
var statearr_10388_10441 = state_10380__$1;
(statearr_10388_10441[(1)] = (2));

} else {
var statearr_10389_10442 = state_10380__$1;
(statearr_10389_10442[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (24))){
var inst_10336 = (state_10380[(8)]);
var inst_10344 = (state_10380[(2)]);
var inst_10298 = inst_10336;
var state_10380__$1 = (function (){var statearr_10390 = state_10380;
(statearr_10390[(7)] = inst_10298);

(statearr_10390[(13)] = inst_10344);

return statearr_10390;
})();
var statearr_10391_10443 = state_10380__$1;
(statearr_10391_10443[(2)] = null);

(statearr_10391_10443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (4))){
var inst_10293 = (state_10380[(2)]);
var inst_10294 = cljs.core.get.call(null,inst_10293,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_10295 = cljs.core.get.call(null,inst_10293,new cljs.core.Keyword(null,"pills","pills",-85353539));
var inst_10296 = cljs.core.get.call(null,inst_10293,new cljs.core.Keyword(null,"snake","snake",-244377242));
var inst_10297 = cljs.core.get.call(null,inst_10293,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_10298 = initial_world;
var state_10380__$1 = (function (){var statearr_10392 = state_10380;
(statearr_10392[(14)] = inst_10297);

(statearr_10392[(15)] = inst_10296);

(statearr_10392[(16)] = inst_10295);

(statearr_10392[(7)] = inst_10298);

(statearr_10392[(17)] = inst_10294);

return statearr_10392;
})();
var statearr_10393_10444 = state_10380__$1;
(statearr_10393_10444[(2)] = null);

(statearr_10393_10444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (15))){
var inst_10306 = (state_10380[(10)]);
var inst_10322 = cnake.game.plan_tick_BANG_.call(null,(0),cmds);
var inst_10298 = inst_10306;
var state_10380__$1 = (function (){var statearr_10394 = state_10380;
(statearr_10394[(18)] = inst_10322);

(statearr_10394[(7)] = inst_10298);

return statearr_10394;
})();
var statearr_10395_10445 = state_10380__$1;
(statearr_10395_10445[(2)] = null);

(statearr_10395_10445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (21))){
var inst_10340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10341 = [new cljs.core.Keyword(null,"game-over","game-over",-607322695)];
var inst_10342 = (new cljs.core.PersistentVector(null,1,(5),inst_10340,inst_10341,null));
var state_10380__$1 = state_10380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10380__$1,(24),notify,inst_10342);
} else {
if((state_val_10381 === (13))){
var inst_10376 = (state_10380[(2)]);
var state_10380__$1 = state_10380;
var statearr_10396_10446 = state_10380__$1;
(statearr_10396_10446[(2)] = inst_10376);

(statearr_10396_10446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (22))){
var inst_10337 = (state_10380[(9)]);
var inst_10307 = (state_10380[(19)]);
var inst_10347 = cnake.game.plan_tick_BANG_.call(null,inst_10307,cmds);
var inst_10348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10349 = [inst_10337];
var inst_10350 = (new cljs.core.PersistentVector(null,1,(5),inst_10348,inst_10349,null));
var state_10380__$1 = (function (){var statearr_10397 = state_10380;
(statearr_10397[(20)] = inst_10347);

return statearr_10397;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10380__$1,(25),notify,inst_10350);
} else {
if((state_val_10381 === (29))){
var inst_10314 = (state_10380[(21)]);
var inst_10369 = [cljs.core.str("Unrecognized game command: "),cljs.core.str(inst_10314)].join('');
var inst_10370 = (new Error(inst_10369));
var inst_10371 = (function(){throw inst_10370})();
var state_10380__$1 = state_10380;
var statearr_10398_10447 = state_10380__$1;
(statearr_10398_10447[(2)] = inst_10371);

(statearr_10398_10447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (6))){
var inst_10378 = (state_10380[(2)]);
var state_10380__$1 = state_10380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10380__$1,inst_10378);
} else {
if((state_val_10381 === (28))){
var inst_10306 = (state_10380[(10)]);
var inst_10315 = (state_10380[(12)]);
var inst_10366 = cnake.game.update_speed.call(null,inst_10306,inst_10315);
var inst_10298 = inst_10366;
var state_10380__$1 = (function (){var statearr_10399 = state_10380;
(statearr_10399[(7)] = inst_10298);

return statearr_10399;
})();
var statearr_10400_10448 = state_10380__$1;
(statearr_10400_10448[(2)] = null);

(statearr_10400_10448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (25))){
var inst_10336 = (state_10380[(8)]);
var inst_10352 = (state_10380[(2)]);
var inst_10353 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10354 = [new cljs.core.Keyword(null,"world","world",-418292623),inst_10336];
var inst_10355 = (new cljs.core.PersistentVector(null,2,(5),inst_10353,inst_10354,null));
var state_10380__$1 = (function (){var statearr_10401 = state_10380;
(statearr_10401[(22)] = inst_10352);

return statearr_10401;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10380__$1,(26),notify,inst_10355);
} else {
if((state_val_10381 === (17))){
var inst_10327 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10328 = [new cljs.core.Keyword(null,"init","init",-1875481434)];
var inst_10329 = (new cljs.core.PersistentVector(null,1,(5),inst_10327,inst_10328,null));
var inst_10330 = cljs.core.async.put_BANG_.call(null,cmds,inst_10329);
var state_10380__$1 = state_10380;
var statearr_10402_10449 = state_10380__$1;
(statearr_10402_10449[(2)] = inst_10330);

(statearr_10402_10449[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (3))){
var state_10380__$1 = state_10380;
var statearr_10403_10450 = state_10380__$1;
(statearr_10403_10450[(2)] = initial_world);

(statearr_10403_10450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (12))){
var inst_10314 = (state_10380[(21)]);
var state_10380__$1 = state_10380;
var G__10404_10451 = (((inst_10314 instanceof cljs.core.Keyword))?inst_10314.fqn:null);
switch (G__10404_10451) {
case "turbo":
var statearr_10405_10453 = state_10380__$1;
(statearr_10405_10453[(1)] = (28));


break;
case "turn":
var statearr_10406_10454 = state_10380__$1;
(statearr_10406_10454[(1)] = (27));


break;
case "tick":
var statearr_10407_10455 = state_10380__$1;
(statearr_10407_10455[(1)] = (20));


break;
case "reset":
var statearr_10408_10456 = state_10380__$1;
(statearr_10408_10456[(1)] = (16));


break;
case "init":
var statearr_10409_10457 = state_10380__$1;
(statearr_10409_10457[(1)] = (15));


break;
default:
var statearr_10410_10458 = state_10380__$1;
(statearr_10410_10458[(1)] = (29));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (2))){
var inst_10290 = cljs.core.apply.call(null,cljs.core.hash_map,initial_world);
var state_10380__$1 = state_10380;
var statearr_10411_10459 = state_10380__$1;
(statearr_10411_10459[(2)] = inst_10290);

(statearr_10411_10459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (23))){
var inst_10360 = (state_10380[(2)]);
var state_10380__$1 = state_10380;
var statearr_10412_10460 = state_10380__$1;
(statearr_10412_10460[(2)] = inst_10360);

(statearr_10412_10460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (19))){
var inst_10333 = (state_10380[(2)]);
var inst_10298 = initial_world;
var state_10380__$1 = (function (){var statearr_10413 = state_10380;
(statearr_10413[(23)] = inst_10333);

(statearr_10413[(7)] = inst_10298);

return statearr_10413;
})();
var statearr_10414_10461 = state_10380__$1;
(statearr_10414_10461[(2)] = null);

(statearr_10414_10461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (11))){
var inst_10306 = (state_10380[(10)]);
var inst_10298 = inst_10306;
var state_10380__$1 = (function (){var statearr_10415 = state_10380;
(statearr_10415[(7)] = inst_10298);

return statearr_10415;
})();
var statearr_10416_10462 = state_10380__$1;
(statearr_10416_10462[(2)] = null);

(statearr_10416_10462[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (9))){
var inst_10306 = (state_10380[(10)]);
var inst_10306__$1 = (state_10380[(2)]);
var inst_10307 = cljs.core.get.call(null,inst_10306__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_10308 = cljs.core.get.call(null,inst_10306__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var inst_10309 = cljs.core.get.call(null,inst_10306__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var inst_10310 = cljs.core.get.call(null,inst_10306__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var state_10380__$1 = (function (){var statearr_10417 = state_10380;
(statearr_10417[(24)] = inst_10308);

(statearr_10417[(25)] = inst_10310);

(statearr_10417[(11)] = inst_10309);

(statearr_10417[(10)] = inst_10306__$1);

(statearr_10417[(19)] = inst_10307);

return statearr_10417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10380__$1,(10),cmds);
} else {
if((state_val_10381 === (5))){
var inst_10298 = (state_10380[(7)]);
var inst_10301 = cljs.core.seq_QMARK_.call(null,inst_10298);
var state_10380__$1 = state_10380;
if(inst_10301){
var statearr_10418_10463 = state_10380__$1;
(statearr_10418_10463[(1)] = (7));

} else {
var statearr_10419_10464 = state_10380__$1;
(statearr_10419_10464[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (14))){
var inst_10374 = (state_10380[(2)]);
var state_10380__$1 = state_10380;
var statearr_10420_10465 = state_10380__$1;
(statearr_10420_10465[(2)] = inst_10374);

(statearr_10420_10465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (26))){
var inst_10336 = (state_10380[(8)]);
var inst_10357 = (state_10380[(2)]);
var inst_10298 = inst_10336;
var state_10380__$1 = (function (){var statearr_10421 = state_10380;
(statearr_10421[(26)] = inst_10357);

(statearr_10421[(7)] = inst_10298);

return statearr_10421;
})();
var statearr_10422_10466 = state_10380__$1;
(statearr_10422_10466[(2)] = null);

(statearr_10422_10466[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (16))){
var inst_10310 = (state_10380[(25)]);
var inst_10325 = cljs.core._EQ_.call(null,inst_10310,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var state_10380__$1 = state_10380;
if(inst_10325){
var statearr_10423_10467 = state_10380__$1;
(statearr_10423_10467[(1)] = (17));

} else {
var statearr_10424_10468 = state_10380__$1;
(statearr_10424_10468[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (10))){
var inst_10310 = (state_10380[(25)]);
var inst_10314 = (state_10380[(21)]);
var inst_10313 = (state_10380[(2)]);
var inst_10314__$1 = cljs.core.nth.call(null,inst_10313,(0),null);
var inst_10315 = cljs.core.nth.call(null,inst_10313,(1),null);
var inst_10316 = cljs.core._EQ_.call(null,inst_10310,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var inst_10317 = cljs.core.not_EQ_.call(null,inst_10314__$1,new cljs.core.Keyword(null,"reset","reset",-800929946));
var inst_10318 = (inst_10316) && (inst_10317);
var state_10380__$1 = (function (){var statearr_10425 = state_10380;
(statearr_10425[(21)] = inst_10314__$1);

(statearr_10425[(12)] = inst_10315);

return statearr_10425;
})();
if(cljs.core.truth_(inst_10318)){
var statearr_10426_10469 = state_10380__$1;
(statearr_10426_10469[(1)] = (11));

} else {
var statearr_10427_10470 = state_10380__$1;
(statearr_10427_10470[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (18))){
var state_10380__$1 = state_10380;
var statearr_10428_10471 = state_10380__$1;
(statearr_10428_10471[(2)] = null);

(statearr_10428_10471[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10381 === (8))){
var inst_10298 = (state_10380[(7)]);
var state_10380__$1 = state_10380;
var statearr_10429_10472 = state_10380__$1;
(statearr_10429_10472[(2)] = inst_10298);

(statearr_10429_10472[(1)] = (9));


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
});})(c__5911__auto__))
;
return ((function (switch__5896__auto__,c__5911__auto__){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_10433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10433[(0)] = state_machine__5897__auto__);

(statearr_10433[(1)] = (1));

return statearr_10433;
});
var state_machine__5897__auto____1 = (function (state_10380){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e10434){if((e10434 instanceof Object)){
var ex__5900__auto__ = e10434;
var statearr_10435_10473 = state_10380;
(statearr_10435_10473[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10474 = state_10380;
state_10380 = G__10474;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10380){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_10436 = f__5912__auto__.call(null);
(statearr_10436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_10436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto__))
);

return c__5911__auto__;
});
cnake.game.init = (function init(commands){
var notifos = cljs.core.async.chan.call(null);
cnake.game.game_BANG_.call(null,cnake.game.initial_world,commands,notifos);

return notifos;
});

//# sourceMappingURL=game.js.map