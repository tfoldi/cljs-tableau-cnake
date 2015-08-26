// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.game');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
cnake.game.initial_world = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"snake","snake",-244377242),cnake.game.initial_snake,new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"speed","speed",1257663751),cnake.game.game_speed,new cljs.core.Keyword(null,"status","status",-1997798413),null], null);
/**
* Update velocity of a snake entity depending on which direction
* is passed (:up|down|left|right).
* The velocity is stored in :new-vel, and will be swapped with the
* old one in update-position
*/
cnake.game.new_vel = (function new_vel(snake,direction){
var new_vel__$1 = (function (){var G__13253 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__13253) {
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
cnake.game.crashed_QMARK_ = (function crashed_QMARK_(p__13255){
var map__13257 = p__13255;
var map__13257__$1 = ((cljs.core.seq_QMARK_.call(null,map__13257))?cljs.core.apply.call(null,cljs.core.hash_map,map__13257):map__13257);
var body = cljs.core.get.call(null,map__13257__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var head = cljs.core.last.call(null,body);
var in_body_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.butlast.call(null,body)));
return in_body_QMARK_.call(null,head);
});
/**
* Checks if the snake feeds and returns the pill or nil
*/
cnake.game.feed = (function feed(p__13258,pills){
var map__13260 = p__13258;
var map__13260__$1 = ((cljs.core.seq_QMARK_.call(null,map__13260))?cljs.core.apply.call(null,cljs.core.hash_map,map__13260):map__13260);
var snake = map__13260__$1;
var body = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.last.call(null,body)], true),pills);
});
/**
* Grows the snake according to the old snake
*/
cnake.game.grow = (function grow(p__13261,p__13262){
var map__13265 = p__13261;
var map__13265__$1 = ((cljs.core.seq_QMARK_.call(null,map__13265))?cljs.core.apply.call(null,cljs.core.hash_map,map__13265):map__13265);
var new_snake = map__13265__$1;
var body = cljs.core.get.call(null,map__13265__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__13266 = p__13262;
var map__13266__$1 = ((cljs.core.seq_QMARK_.call(null,map__13266))?cljs.core.apply.call(null,cljs.core.hash_map,map__13266):map__13266);
var old_body = cljs.core.get.call(null,map__13266__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
var G__13267 = cnake.game.random_point.call(null);
var G__13268 = (tries - (1));
pill = G__13267;
tries = G__13268;
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
var c__6456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6456__auto__){
return (function (){
var f__6457__auto__ = (function (){var switch__6400__auto__ = ((function (c__6456__auto__){
return (function (state_13301){
var state_val_13302 = (state_13301[(1)]);
if((state_val_13302 === (2))){
var inst_13295 = (state_13301[(2)]);
var inst_13296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13297 = [new cljs.core.Keyword(null,"tick","tick",-835886976)];
var inst_13298 = (new cljs.core.PersistentVector(null,1,(5),inst_13296,inst_13297,null));
var inst_13299 = cljs.core.async.put_BANG_.call(null,cmds,inst_13298);
var state_13301__$1 = (function (){var statearr_13303 = state_13301;
(statearr_13303[(7)] = inst_13295);

return statearr_13303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13301__$1,inst_13299);
} else {
if((state_val_13302 === (1))){
var inst_13290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13291 = cljs.core.async.timeout.call(null,speed);
var inst_13292 = [inst_13291,shortcircuit];
var inst_13293 = (new cljs.core.PersistentVector(null,2,(5),inst_13290,inst_13292,null));
var state_13301__$1 = state_13301;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13301__$1,(2),inst_13293);
} else {
return null;
}
}
});})(c__6456__auto__))
;
return ((function (switch__6400__auto__,c__6456__auto__){
return (function() {
var state_machine__6401__auto__ = null;
var state_machine__6401__auto____0 = (function (){
var statearr_13307 = [null,null,null,null,null,null,null,null];
(statearr_13307[(0)] = state_machine__6401__auto__);

(statearr_13307[(1)] = (1));

return statearr_13307;
});
var state_machine__6401__auto____1 = (function (state_13301){
while(true){
var ret_value__6402__auto__ = (function (){try{while(true){
var result__6403__auto__ = switch__6400__auto__.call(null,state_13301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6403__auto__;
}
break;
}
}catch (e13308){if((e13308 instanceof Object)){
var ex__6404__auto__ = e13308;
var statearr_13309_13311 = state_13301;
(statearr_13309_13311[(5)] = ex__6404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13312 = state_13301;
state_13301 = G__13312;
continue;
} else {
return ret_value__6402__auto__;
}
break;
}
});
state_machine__6401__auto__ = function(state_13301){
switch(arguments.length){
case 0:
return state_machine__6401__auto____0.call(this);
case 1:
return state_machine__6401__auto____1.call(this,state_13301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6401__auto____0;
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6401__auto____1;
return state_machine__6401__auto__;
})()
;})(switch__6400__auto__,c__6456__auto__))
})();
var state__6458__auto__ = (function (){var statearr_13310 = f__6457__auto__.call(null);
(statearr_13310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6456__auto__);

return statearr_13310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6458__auto__);
});})(c__6456__auto__))
);

return c__6456__auto__;
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
cnake.game.update_world = (function update_world(p__13313){
var map__13315 = p__13313;
var map__13315__$1 = ((cljs.core.seq_QMARK_.call(null,map__13315))?cljs.core.apply.call(null,cljs.core.hash_map,map__13315):map__13315);
var world = map__13315__$1;
var pills = cljs.core.get.call(null,map__13315__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__13315__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
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
var c__6456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6456__auto__){
return (function (){
var f__6457__auto__ = (function (){var switch__6400__auto__ = ((function (c__6456__auto__){
return (function (state_13563){
var state_val_13564 = (state_13563[(1)]);
if((state_val_13564 === (7))){
var inst_13481 = (state_13563[(7)]);
var inst_13486 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13481);
var state_13563__$1 = state_13563;
var statearr_13565_13620 = state_13563__$1;
(statearr_13565_13620[(2)] = inst_13486);

(statearr_13565_13620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (20))){
var inst_13519 = (state_13563[(8)]);
var inst_13520 = (state_13563[(9)]);
var inst_13489 = (state_13563[(10)]);
var inst_13519__$1 = cnake.game.update_world.call(null,inst_13489);
var inst_13520__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_13519__$1);
var inst_13521 = cljs.core._EQ_.call(null,inst_13520__$1,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var state_13563__$1 = (function (){var statearr_13566 = state_13563;
(statearr_13566[(8)] = inst_13519__$1);

(statearr_13566[(9)] = inst_13520__$1);

return statearr_13566;
})();
if(inst_13521){
var statearr_13567_13621 = state_13563__$1;
(statearr_13567_13621[(1)] = (21));

} else {
var statearr_13568_13622 = state_13563__$1;
(statearr_13568_13622[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (27))){
var inst_13492 = (state_13563[(11)]);
var inst_13498 = (state_13563[(12)]);
var inst_13489 = (state_13563[(10)]);
var inst_13545 = cnake.game.new_vel.call(null,inst_13492,inst_13498);
var inst_13546 = cljs.core.assoc.call(null,inst_13489,new cljs.core.Keyword(null,"snake","snake",-244377242),inst_13545);
var inst_13481 = inst_13546;
var state_13563__$1 = (function (){var statearr_13569 = state_13563;
(statearr_13569[(7)] = inst_13481);

return statearr_13569;
})();
var statearr_13570_13623 = state_13563__$1;
(statearr_13570_13623[(2)] = null);

(statearr_13570_13623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (1))){
var inst_13471 = cljs.core.seq_QMARK_.call(null,initial_world);
var state_13563__$1 = state_13563;
if(inst_13471){
var statearr_13571_13624 = state_13563__$1;
(statearr_13571_13624[(1)] = (2));

} else {
var statearr_13572_13625 = state_13563__$1;
(statearr_13572_13625[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (24))){
var inst_13519 = (state_13563[(8)]);
var inst_13527 = (state_13563[(2)]);
var inst_13481 = inst_13519;
var state_13563__$1 = (function (){var statearr_13573 = state_13563;
(statearr_13573[(13)] = inst_13527);

(statearr_13573[(7)] = inst_13481);

return statearr_13573;
})();
var statearr_13574_13626 = state_13563__$1;
(statearr_13574_13626[(2)] = null);

(statearr_13574_13626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (4))){
var inst_13476 = (state_13563[(2)]);
var inst_13477 = cljs.core.get.call(null,inst_13476,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_13478 = cljs.core.get.call(null,inst_13476,new cljs.core.Keyword(null,"pills","pills",-85353539));
var inst_13479 = cljs.core.get.call(null,inst_13476,new cljs.core.Keyword(null,"snake","snake",-244377242));
var inst_13480 = cljs.core.get.call(null,inst_13476,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_13481 = initial_world;
var state_13563__$1 = (function (){var statearr_13575 = state_13563;
(statearr_13575[(14)] = inst_13479);

(statearr_13575[(15)] = inst_13477);

(statearr_13575[(7)] = inst_13481);

(statearr_13575[(16)] = inst_13478);

(statearr_13575[(17)] = inst_13480);

return statearr_13575;
})();
var statearr_13576_13627 = state_13563__$1;
(statearr_13576_13627[(2)] = null);

(statearr_13576_13627[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (15))){
var inst_13489 = (state_13563[(10)]);
var inst_13505 = cnake.game.plan_tick_BANG_.call(null,(0),cmds);
var inst_13481 = inst_13489;
var state_13563__$1 = (function (){var statearr_13577 = state_13563;
(statearr_13577[(18)] = inst_13505);

(statearr_13577[(7)] = inst_13481);

return statearr_13577;
})();
var statearr_13578_13628 = state_13563__$1;
(statearr_13578_13628[(2)] = null);

(statearr_13578_13628[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (21))){
var inst_13523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13524 = [new cljs.core.Keyword(null,"game-over","game-over",-607322695)];
var inst_13525 = (new cljs.core.PersistentVector(null,1,(5),inst_13523,inst_13524,null));
var state_13563__$1 = state_13563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13563__$1,(24),notify,inst_13525);
} else {
if((state_val_13564 === (13))){
var inst_13559 = (state_13563[(2)]);
var state_13563__$1 = state_13563;
var statearr_13579_13629 = state_13563__$1;
(statearr_13579_13629[(2)] = inst_13559);

(statearr_13579_13629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (22))){
var inst_13490 = (state_13563[(19)]);
var inst_13520 = (state_13563[(9)]);
var inst_13530 = cnake.game.plan_tick_BANG_.call(null,inst_13490,cmds);
var inst_13531 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13532 = [inst_13520];
var inst_13533 = (new cljs.core.PersistentVector(null,1,(5),inst_13531,inst_13532,null));
var state_13563__$1 = (function (){var statearr_13580 = state_13563;
(statearr_13580[(20)] = inst_13530);

return statearr_13580;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13563__$1,(25),notify,inst_13533);
} else {
if((state_val_13564 === (29))){
var inst_13497 = (state_13563[(21)]);
var inst_13552 = [cljs.core.str("Unrecognized game command: "),cljs.core.str(inst_13497)].join('');
var inst_13553 = (new Error(inst_13552));
var inst_13554 = (function(){throw inst_13553})();
var state_13563__$1 = state_13563;
var statearr_13581_13630 = state_13563__$1;
(statearr_13581_13630[(2)] = inst_13554);

(statearr_13581_13630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (6))){
var inst_13561 = (state_13563[(2)]);
var state_13563__$1 = state_13563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13563__$1,inst_13561);
} else {
if((state_val_13564 === (28))){
var inst_13498 = (state_13563[(12)]);
var inst_13489 = (state_13563[(10)]);
var inst_13549 = cnake.game.update_speed.call(null,inst_13489,inst_13498);
var inst_13481 = inst_13549;
var state_13563__$1 = (function (){var statearr_13582 = state_13563;
(statearr_13582[(7)] = inst_13481);

return statearr_13582;
})();
var statearr_13583_13631 = state_13563__$1;
(statearr_13583_13631[(2)] = null);

(statearr_13583_13631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (25))){
var inst_13519 = (state_13563[(8)]);
var inst_13535 = (state_13563[(2)]);
var inst_13536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13537 = [new cljs.core.Keyword(null,"world","world",-418292623),inst_13519];
var inst_13538 = (new cljs.core.PersistentVector(null,2,(5),inst_13536,inst_13537,null));
var state_13563__$1 = (function (){var statearr_13584 = state_13563;
(statearr_13584[(22)] = inst_13535);

return statearr_13584;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13563__$1,(26),notify,inst_13538);
} else {
if((state_val_13564 === (17))){
var inst_13510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13511 = [new cljs.core.Keyword(null,"init","init",-1875481434)];
var inst_13512 = (new cljs.core.PersistentVector(null,1,(5),inst_13510,inst_13511,null));
var inst_13513 = cljs.core.async.put_BANG_.call(null,cmds,inst_13512);
var state_13563__$1 = state_13563;
var statearr_13585_13632 = state_13563__$1;
(statearr_13585_13632[(2)] = inst_13513);

(statearr_13585_13632[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (3))){
var state_13563__$1 = state_13563;
var statearr_13586_13633 = state_13563__$1;
(statearr_13586_13633[(2)] = initial_world);

(statearr_13586_13633[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (12))){
var inst_13497 = (state_13563[(21)]);
var state_13563__$1 = state_13563;
var G__13587_13634 = (((inst_13497 instanceof cljs.core.Keyword))?inst_13497.fqn:null);
switch (G__13587_13634) {
case "turbo":
var statearr_13588_13636 = state_13563__$1;
(statearr_13588_13636[(1)] = (28));


break;
case "turn":
var statearr_13589_13637 = state_13563__$1;
(statearr_13589_13637[(1)] = (27));


break;
case "tick":
var statearr_13590_13638 = state_13563__$1;
(statearr_13590_13638[(1)] = (20));


break;
case "reset":
var statearr_13591_13639 = state_13563__$1;
(statearr_13591_13639[(1)] = (16));


break;
case "init":
var statearr_13592_13640 = state_13563__$1;
(statearr_13592_13640[(1)] = (15));


break;
default:
var statearr_13593_13641 = state_13563__$1;
(statearr_13593_13641[(1)] = (29));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (2))){
var inst_13473 = cljs.core.apply.call(null,cljs.core.hash_map,initial_world);
var state_13563__$1 = state_13563;
var statearr_13594_13642 = state_13563__$1;
(statearr_13594_13642[(2)] = inst_13473);

(statearr_13594_13642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (23))){
var inst_13543 = (state_13563[(2)]);
var state_13563__$1 = state_13563;
var statearr_13595_13643 = state_13563__$1;
(statearr_13595_13643[(2)] = inst_13543);

(statearr_13595_13643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (19))){
var inst_13516 = (state_13563[(2)]);
var inst_13481 = initial_world;
var state_13563__$1 = (function (){var statearr_13596 = state_13563;
(statearr_13596[(7)] = inst_13481);

(statearr_13596[(23)] = inst_13516);

return statearr_13596;
})();
var statearr_13597_13644 = state_13563__$1;
(statearr_13597_13644[(2)] = null);

(statearr_13597_13644[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (11))){
var inst_13489 = (state_13563[(10)]);
var inst_13481 = inst_13489;
var state_13563__$1 = (function (){var statearr_13598 = state_13563;
(statearr_13598[(7)] = inst_13481);

return statearr_13598;
})();
var statearr_13599_13645 = state_13563__$1;
(statearr_13599_13645[(2)] = null);

(statearr_13599_13645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (9))){
var inst_13489 = (state_13563[(10)]);
var inst_13489__$1 = (state_13563[(2)]);
var inst_13490 = cljs.core.get.call(null,inst_13489__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_13491 = cljs.core.get.call(null,inst_13489__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var inst_13492 = cljs.core.get.call(null,inst_13489__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var inst_13493 = cljs.core.get.call(null,inst_13489__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var state_13563__$1 = (function (){var statearr_13600 = state_13563;
(statearr_13600[(19)] = inst_13490);

(statearr_13600[(11)] = inst_13492);

(statearr_13600[(24)] = inst_13493);

(statearr_13600[(25)] = inst_13491);

(statearr_13600[(10)] = inst_13489__$1);

return statearr_13600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13563__$1,(10),cmds);
} else {
if((state_val_13564 === (5))){
var inst_13481 = (state_13563[(7)]);
var inst_13484 = cljs.core.seq_QMARK_.call(null,inst_13481);
var state_13563__$1 = state_13563;
if(inst_13484){
var statearr_13601_13646 = state_13563__$1;
(statearr_13601_13646[(1)] = (7));

} else {
var statearr_13602_13647 = state_13563__$1;
(statearr_13602_13647[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (14))){
var inst_13557 = (state_13563[(2)]);
var state_13563__$1 = state_13563;
var statearr_13603_13648 = state_13563__$1;
(statearr_13603_13648[(2)] = inst_13557);

(statearr_13603_13648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (26))){
var inst_13519 = (state_13563[(8)]);
var inst_13540 = (state_13563[(2)]);
var inst_13481 = inst_13519;
var state_13563__$1 = (function (){var statearr_13604 = state_13563;
(statearr_13604[(26)] = inst_13540);

(statearr_13604[(7)] = inst_13481);

return statearr_13604;
})();
var statearr_13605_13649 = state_13563__$1;
(statearr_13605_13649[(2)] = null);

(statearr_13605_13649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (16))){
var inst_13493 = (state_13563[(24)]);
var inst_13508 = cljs.core._EQ_.call(null,inst_13493,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var state_13563__$1 = state_13563;
if(inst_13508){
var statearr_13606_13650 = state_13563__$1;
(statearr_13606_13650[(1)] = (17));

} else {
var statearr_13607_13651 = state_13563__$1;
(statearr_13607_13651[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (10))){
var inst_13497 = (state_13563[(21)]);
var inst_13493 = (state_13563[(24)]);
var inst_13496 = (state_13563[(2)]);
var inst_13497__$1 = cljs.core.nth.call(null,inst_13496,(0),null);
var inst_13498 = cljs.core.nth.call(null,inst_13496,(1),null);
var inst_13499 = cljs.core._EQ_.call(null,inst_13493,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var inst_13500 = cljs.core.not_EQ_.call(null,inst_13497__$1,new cljs.core.Keyword(null,"reset","reset",-800929946));
var inst_13501 = (inst_13499) && (inst_13500);
var state_13563__$1 = (function (){var statearr_13608 = state_13563;
(statearr_13608[(21)] = inst_13497__$1);

(statearr_13608[(12)] = inst_13498);

return statearr_13608;
})();
if(cljs.core.truth_(inst_13501)){
var statearr_13609_13652 = state_13563__$1;
(statearr_13609_13652[(1)] = (11));

} else {
var statearr_13610_13653 = state_13563__$1;
(statearr_13610_13653[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (18))){
var state_13563__$1 = state_13563;
var statearr_13611_13654 = state_13563__$1;
(statearr_13611_13654[(2)] = null);

(statearr_13611_13654[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (8))){
var inst_13481 = (state_13563[(7)]);
var state_13563__$1 = state_13563;
var statearr_13612_13655 = state_13563__$1;
(statearr_13612_13655[(2)] = inst_13481);

(statearr_13612_13655[(1)] = (9));


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
});})(c__6456__auto__))
;
return ((function (switch__6400__auto__,c__6456__auto__){
return (function() {
var state_machine__6401__auto__ = null;
var state_machine__6401__auto____0 = (function (){
var statearr_13616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13616[(0)] = state_machine__6401__auto__);

(statearr_13616[(1)] = (1));

return statearr_13616;
});
var state_machine__6401__auto____1 = (function (state_13563){
while(true){
var ret_value__6402__auto__ = (function (){try{while(true){
var result__6403__auto__ = switch__6400__auto__.call(null,state_13563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6403__auto__;
}
break;
}
}catch (e13617){if((e13617 instanceof Object)){
var ex__6404__auto__ = e13617;
var statearr_13618_13656 = state_13563;
(statearr_13618_13656[(5)] = ex__6404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13657 = state_13563;
state_13563 = G__13657;
continue;
} else {
return ret_value__6402__auto__;
}
break;
}
});
state_machine__6401__auto__ = function(state_13563){
switch(arguments.length){
case 0:
return state_machine__6401__auto____0.call(this);
case 1:
return state_machine__6401__auto____1.call(this,state_13563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6401__auto____0;
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6401__auto____1;
return state_machine__6401__auto__;
})()
;})(switch__6400__auto__,c__6456__auto__))
})();
var state__6458__auto__ = (function (){var statearr_13619 = f__6457__auto__.call(null);
(statearr_13619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6456__auto__);

return statearr_13619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6458__auto__);
});})(c__6456__auto__))
);

return c__6456__auto__;
});
cnake.game.init = (function init(commands){
var notifos = cljs.core.async.chan.call(null);
cnake.game.game_BANG_.call(null,cnake.game.initial_world,commands,notifos);

return notifos;
});

//# sourceMappingURL=game.js.map