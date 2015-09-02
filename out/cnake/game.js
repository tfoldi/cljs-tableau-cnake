// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.game');
goog.require('cljs.core');
goog.require('cnake.intercom');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
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
* Notify tableau to update pills
*/
cnake.game.tableau_update_pills = (function tableau_update_pills(pills){
cljs.core.async.put_BANG_.call(null,cnake.intercom.tableau_viz_control_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"pills","pills",-85353539),new cljs.core.Keyword(null,"pills","pills",-85353539),pills], null));

return pills;
});
/**
* Update velocity of a snake entity depending on which direction
* is passed (:up|down|left|right).
* The velocity is stored in :new-vel, and will be swapped with the
* old one in update-position
*/
cnake.game.new_vel = (function new_vel(snake,direction){
var new_vel__$1 = (function (){var G__10480 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__10480) {
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
cnake.game.crashed_QMARK_ = (function crashed_QMARK_(p__10482){
var map__10484 = p__10482;
var map__10484__$1 = ((cljs.core.seq_QMARK_.call(null,map__10484))?cljs.core.apply.call(null,cljs.core.hash_map,map__10484):map__10484);
var body = cljs.core.get.call(null,map__10484__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var head = cljs.core.last.call(null,body);
var in_body_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.butlast.call(null,body)));
return in_body_QMARK_.call(null,head);
});
/**
* Checks if the snake feeds and returns the pill or nil
*/
cnake.game.feed = (function feed(p__10485,pills){
var map__10487 = p__10485;
var map__10487__$1 = ((cljs.core.seq_QMARK_.call(null,map__10487))?cljs.core.apply.call(null,cljs.core.hash_map,map__10487):map__10487);
var snake = map__10487__$1;
var body = cljs.core.get.call(null,map__10487__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.last.call(null,body)], true),pills);
});
/**
* Grows the snake according to the old snake
*/
cnake.game.grow = (function grow(p__10488,p__10489){
var map__10492 = p__10488;
var map__10492__$1 = ((cljs.core.seq_QMARK_.call(null,map__10492))?cljs.core.apply.call(null,cljs.core.hash_map,map__10492):map__10492);
var new_snake = map__10492__$1;
var body = cljs.core.get.call(null,map__10492__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__10493 = p__10489;
var map__10493__$1 = ((cljs.core.seq_QMARK_.call(null,map__10493))?cljs.core.apply.call(null,cljs.core.hash_map,map__10493):map__10493);
var old_body = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
return cnake.game.tableau_update_pills.call(null,pills);
} else {
if(cljs.core.not.call(null,busy.call(null,pill))){
return cnake.game.tableau_update_pills.call(null,cljs.core.conj.call(null,pills,pill));
} else {
var G__10494 = cnake.game.random_point.call(null);
var G__10495 = (tries - (1));
pill = G__10494;
tries = G__10495;
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
return (function (state_10528){
var state_val_10529 = (state_10528[(1)]);
if((state_val_10529 === (2))){
var inst_10522 = (state_10528[(2)]);
var inst_10523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10524 = [new cljs.core.Keyword(null,"tick","tick",-835886976)];
var inst_10525 = (new cljs.core.PersistentVector(null,1,(5),inst_10523,inst_10524,null));
var inst_10526 = cljs.core.async.put_BANG_.call(null,cmds,inst_10525);
var state_10528__$1 = (function (){var statearr_10530 = state_10528;
(statearr_10530[(7)] = inst_10522);

return statearr_10530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10528__$1,inst_10526);
} else {
if((state_val_10529 === (1))){
var inst_10517 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10518 = cljs.core.async.timeout.call(null,speed);
var inst_10519 = [inst_10518,shortcircuit];
var inst_10520 = (new cljs.core.PersistentVector(null,2,(5),inst_10517,inst_10519,null));
var state_10528__$1 = state_10528;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10528__$1,(2),inst_10520);
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
var statearr_10534 = [null,null,null,null,null,null,null,null];
(statearr_10534[(0)] = state_machine__5897__auto__);

(statearr_10534[(1)] = (1));

return statearr_10534;
});
var state_machine__5897__auto____1 = (function (state_10528){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e10535){if((e10535 instanceof Object)){
var ex__5900__auto__ = e10535;
var statearr_10536_10538 = state_10528;
(statearr_10536_10538[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10539 = state_10528;
state_10528 = G__10539;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10528){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_10537 = f__5912__auto__.call(null);
(statearr_10537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_10537;
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
cnake.game.update_world = (function update_world(p__10540){
var map__10542 = p__10540;
var map__10542__$1 = ((cljs.core.seq_QMARK_.call(null,map__10542))?cljs.core.apply.call(null,cljs.core.hash_map,map__10542):map__10542);
var world = map__10542__$1;
var pills = cljs.core.get.call(null,map__10542__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__10542__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var new_snake = cnake.game.update_position.call(null,snake);
if(cljs.core.truth_(cnake.game.crashed_QMARK_.call(null,new_snake))){
console.log("GAME OVER OH BOY");

cljs.core.async.put_BANG_.call(null,cnake.intercom.score_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),world], null));

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
return (function (state_10814){
var state_val_10815 = (state_10814[(1)]);
if((state_val_10815 === (7))){
var inst_10720 = (state_10814[(7)]);
var inst_10725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10720);
var state_10814__$1 = state_10814;
var statearr_10816_10871 = state_10814__$1;
(statearr_10816_10871[(2)] = inst_10725);

(statearr_10816_10871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (20))){
var inst_10766 = (state_10814[(8)]);
var inst_10728 = (state_10814[(9)]);
var inst_10767 = (state_10814[(10)]);
var inst_10766__$1 = cnake.game.update_world.call(null,inst_10728);
var inst_10767__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_10766__$1);
var inst_10768 = cljs.core._EQ_.call(null,inst_10767__$1,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var state_10814__$1 = (function (){var statearr_10817 = state_10814;
(statearr_10817[(8)] = inst_10766__$1);

(statearr_10817[(10)] = inst_10767__$1);

return statearr_10817;
})();
if(inst_10768){
var statearr_10818_10872 = state_10814__$1;
(statearr_10818_10872[(1)] = (21));

} else {
var statearr_10819_10873 = state_10814__$1;
(statearr_10819_10873[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (27))){
var inst_10728 = (state_10814[(9)]);
var inst_10731 = (state_10814[(11)]);
var inst_10737 = (state_10814[(12)]);
var inst_10792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10793 = [new cljs.core.Keyword(null,"turn","turn",75759344),inst_10737];
var inst_10794 = (new cljs.core.PersistentVector(null,2,(5),inst_10792,inst_10793,null));
var inst_10795 = cljs.core.async.put_BANG_.call(null,cnake.intercom.score_chan,inst_10794);
var inst_10796 = cnake.game.new_vel.call(null,inst_10731,inst_10737);
var inst_10797 = cljs.core.assoc.call(null,inst_10728,new cljs.core.Keyword(null,"snake","snake",-244377242),inst_10796);
var inst_10720 = inst_10797;
var state_10814__$1 = (function (){var statearr_10820 = state_10814;
(statearr_10820[(7)] = inst_10720);

(statearr_10820[(13)] = inst_10795);

return statearr_10820;
})();
var statearr_10821_10874 = state_10814__$1;
(statearr_10821_10874[(2)] = null);

(statearr_10821_10874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (1))){
var inst_10710 = cljs.core.seq_QMARK_.call(null,initial_world);
var state_10814__$1 = state_10814;
if(inst_10710){
var statearr_10822_10875 = state_10814__$1;
(statearr_10822_10875[(1)] = (2));

} else {
var statearr_10823_10876 = state_10814__$1;
(statearr_10823_10876[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (24))){
var inst_10766 = (state_10814[(8)]);
var inst_10774 = (state_10814[(2)]);
var inst_10720 = inst_10766;
var state_10814__$1 = (function (){var statearr_10824 = state_10814;
(statearr_10824[(14)] = inst_10774);

(statearr_10824[(7)] = inst_10720);

return statearr_10824;
})();
var statearr_10825_10877 = state_10814__$1;
(statearr_10825_10877[(2)] = null);

(statearr_10825_10877[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (4))){
var inst_10715 = (state_10814[(2)]);
var inst_10716 = cljs.core.get.call(null,inst_10715,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_10717 = cljs.core.get.call(null,inst_10715,new cljs.core.Keyword(null,"pills","pills",-85353539));
var inst_10718 = cljs.core.get.call(null,inst_10715,new cljs.core.Keyword(null,"snake","snake",-244377242));
var inst_10719 = cljs.core.get.call(null,inst_10715,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_10720 = initial_world;
var state_10814__$1 = (function (){var statearr_10826 = state_10814;
(statearr_10826[(7)] = inst_10720);

(statearr_10826[(15)] = inst_10719);

(statearr_10826[(16)] = inst_10718);

(statearr_10826[(17)] = inst_10716);

(statearr_10826[(18)] = inst_10717);

return statearr_10826;
})();
var statearr_10827_10878 = state_10814__$1;
(statearr_10827_10878[(2)] = null);

(statearr_10827_10878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (15))){
var inst_10728 = (state_10814[(9)]);
var inst_10744 = cnake.game.plan_tick_BANG_.call(null,(0),cmds);
var inst_10720 = inst_10728;
var state_10814__$1 = (function (){var statearr_10828 = state_10814;
(statearr_10828[(7)] = inst_10720);

(statearr_10828[(19)] = inst_10744);

return statearr_10828;
})();
var statearr_10829_10879 = state_10814__$1;
(statearr_10829_10879[(2)] = null);

(statearr_10829_10879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (21))){
var inst_10770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10771 = [new cljs.core.Keyword(null,"game-over","game-over",-607322695)];
var inst_10772 = (new cljs.core.PersistentVector(null,1,(5),inst_10770,inst_10771,null));
var state_10814__$1 = state_10814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10814__$1,(24),notify,inst_10772);
} else {
if((state_val_10815 === (13))){
var inst_10810 = (state_10814[(2)]);
var state_10814__$1 = state_10814;
var statearr_10830_10880 = state_10814__$1;
(statearr_10830_10880[(2)] = inst_10810);

(statearr_10830_10880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (22))){
var inst_10767 = (state_10814[(10)]);
var inst_10729 = (state_10814[(20)]);
var inst_10777 = cnake.game.plan_tick_BANG_.call(null,inst_10729,cmds);
var inst_10778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10779 = [inst_10767];
var inst_10780 = (new cljs.core.PersistentVector(null,1,(5),inst_10778,inst_10779,null));
var state_10814__$1 = (function (){var statearr_10831 = state_10814;
(statearr_10831[(21)] = inst_10777);

return statearr_10831;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10814__$1,(25),notify,inst_10780);
} else {
if((state_val_10815 === (29))){
var inst_10736 = (state_10814[(22)]);
var inst_10803 = [cljs.core.str("Unrecognized game command: "),cljs.core.str(inst_10736)].join('');
var inst_10804 = (new Error(inst_10803));
var inst_10805 = (function(){throw inst_10804})();
var state_10814__$1 = state_10814;
var statearr_10832_10881 = state_10814__$1;
(statearr_10832_10881[(2)] = inst_10805);

(statearr_10832_10881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (6))){
var inst_10812 = (state_10814[(2)]);
var state_10814__$1 = state_10814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10814__$1,inst_10812);
} else {
if((state_val_10815 === (28))){
var inst_10728 = (state_10814[(9)]);
var inst_10737 = (state_10814[(12)]);
var inst_10800 = cnake.game.update_speed.call(null,inst_10728,inst_10737);
var inst_10720 = inst_10800;
var state_10814__$1 = (function (){var statearr_10833 = state_10814;
(statearr_10833[(7)] = inst_10720);

return statearr_10833;
})();
var statearr_10834_10882 = state_10814__$1;
(statearr_10834_10882[(2)] = null);

(statearr_10834_10882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (25))){
var inst_10766 = (state_10814[(8)]);
var inst_10782 = (state_10814[(2)]);
var inst_10783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10784 = [new cljs.core.Keyword(null,"world","world",-418292623),inst_10766];
var inst_10785 = (new cljs.core.PersistentVector(null,2,(5),inst_10783,inst_10784,null));
var state_10814__$1 = (function (){var statearr_10835 = state_10814;
(statearr_10835[(23)] = inst_10782);

return statearr_10835;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10814__$1,(26),notify,inst_10785);
} else {
if((state_val_10815 === (17))){
var inst_10749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10750 = [new cljs.core.Keyword(null,"init","init",-1875481434)];
var inst_10751 = (new cljs.core.PersistentVector(null,1,(5),inst_10749,inst_10750,null));
var inst_10752 = cljs.core.async.put_BANG_.call(null,cmds,inst_10751);
var state_10814__$1 = state_10814;
var statearr_10836_10883 = state_10814__$1;
(statearr_10836_10883[(2)] = inst_10752);

(statearr_10836_10883[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (3))){
var state_10814__$1 = state_10814;
var statearr_10837_10884 = state_10814__$1;
(statearr_10837_10884[(2)] = initial_world);

(statearr_10837_10884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (12))){
var inst_10736 = (state_10814[(22)]);
var state_10814__$1 = state_10814;
var G__10838_10885 = (((inst_10736 instanceof cljs.core.Keyword))?inst_10736.fqn:null);
switch (G__10838_10885) {
case "turbo":
var statearr_10839_10887 = state_10814__$1;
(statearr_10839_10887[(1)] = (28));


break;
case "turn":
var statearr_10840_10888 = state_10814__$1;
(statearr_10840_10888[(1)] = (27));


break;
case "tick":
var statearr_10841_10889 = state_10814__$1;
(statearr_10841_10889[(1)] = (20));


break;
case "reset":
var statearr_10842_10890 = state_10814__$1;
(statearr_10842_10890[(1)] = (16));


break;
case "init":
var statearr_10843_10891 = state_10814__$1;
(statearr_10843_10891[(1)] = (15));


break;
default:
var statearr_10844_10892 = state_10814__$1;
(statearr_10844_10892[(1)] = (29));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (2))){
var inst_10712 = cljs.core.apply.call(null,cljs.core.hash_map,initial_world);
var state_10814__$1 = state_10814;
var statearr_10845_10893 = state_10814__$1;
(statearr_10845_10893[(2)] = inst_10712);

(statearr_10845_10893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (23))){
var inst_10790 = (state_10814[(2)]);
var state_10814__$1 = state_10814;
var statearr_10846_10894 = state_10814__$1;
(statearr_10846_10894[(2)] = inst_10790);

(statearr_10846_10894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (19))){
var inst_10755 = (state_10814[(2)]);
var inst_10756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10757 = [new cljs.core.Keyword(null,"reset","reset",-800929946),null];
var inst_10758 = (new cljs.core.PersistentVector(null,2,(5),inst_10756,inst_10757,null));
var inst_10759 = cljs.core.async.put_BANG_.call(null,cnake.intercom.score_chan,inst_10758);
var inst_10760 = [new cljs.core.Keyword(null,"command","command",-894540724)];
var inst_10761 = [new cljs.core.Keyword(null,"reset","reset",-800929946)];
var inst_10762 = cljs.core.PersistentHashMap.fromArrays(inst_10760,inst_10761);
var inst_10763 = cljs.core.async.put_BANG_.call(null,cnake.intercom.tableau_viz_control_channel,inst_10762);
var inst_10720 = initial_world;
var state_10814__$1 = (function (){var statearr_10847 = state_10814;
(statearr_10847[(7)] = inst_10720);

(statearr_10847[(24)] = inst_10763);

(statearr_10847[(25)] = inst_10755);

(statearr_10847[(26)] = inst_10759);

return statearr_10847;
})();
var statearr_10848_10895 = state_10814__$1;
(statearr_10848_10895[(2)] = null);

(statearr_10848_10895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (11))){
var inst_10728 = (state_10814[(9)]);
var inst_10720 = inst_10728;
var state_10814__$1 = (function (){var statearr_10849 = state_10814;
(statearr_10849[(7)] = inst_10720);

return statearr_10849;
})();
var statearr_10850_10896 = state_10814__$1;
(statearr_10850_10896[(2)] = null);

(statearr_10850_10896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (9))){
var inst_10728 = (state_10814[(9)]);
var inst_10728__$1 = (state_10814[(2)]);
var inst_10729 = cljs.core.get.call(null,inst_10728__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_10730 = cljs.core.get.call(null,inst_10728__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var inst_10731 = cljs.core.get.call(null,inst_10728__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var inst_10732 = cljs.core.get.call(null,inst_10728__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var state_10814__$1 = (function (){var statearr_10851 = state_10814;
(statearr_10851[(9)] = inst_10728__$1);

(statearr_10851[(11)] = inst_10731);

(statearr_10851[(27)] = inst_10730);

(statearr_10851[(28)] = inst_10732);

(statearr_10851[(20)] = inst_10729);

return statearr_10851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10814__$1,(10),cmds);
} else {
if((state_val_10815 === (5))){
var inst_10720 = (state_10814[(7)]);
var inst_10723 = cljs.core.seq_QMARK_.call(null,inst_10720);
var state_10814__$1 = state_10814;
if(inst_10723){
var statearr_10852_10897 = state_10814__$1;
(statearr_10852_10897[(1)] = (7));

} else {
var statearr_10853_10898 = state_10814__$1;
(statearr_10853_10898[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (14))){
var inst_10808 = (state_10814[(2)]);
var state_10814__$1 = state_10814;
var statearr_10854_10899 = state_10814__$1;
(statearr_10854_10899[(2)] = inst_10808);

(statearr_10854_10899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (26))){
var inst_10766 = (state_10814[(8)]);
var inst_10787 = (state_10814[(2)]);
var inst_10720 = inst_10766;
var state_10814__$1 = (function (){var statearr_10855 = state_10814;
(statearr_10855[(7)] = inst_10720);

(statearr_10855[(29)] = inst_10787);

return statearr_10855;
})();
var statearr_10856_10900 = state_10814__$1;
(statearr_10856_10900[(2)] = null);

(statearr_10856_10900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (16))){
var inst_10732 = (state_10814[(28)]);
var inst_10747 = cljs.core._EQ_.call(null,inst_10732,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var state_10814__$1 = state_10814;
if(inst_10747){
var statearr_10857_10901 = state_10814__$1;
(statearr_10857_10901[(1)] = (17));

} else {
var statearr_10858_10902 = state_10814__$1;
(statearr_10858_10902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (10))){
var inst_10736 = (state_10814[(22)]);
var inst_10732 = (state_10814[(28)]);
var inst_10735 = (state_10814[(2)]);
var inst_10736__$1 = cljs.core.nth.call(null,inst_10735,(0),null);
var inst_10737 = cljs.core.nth.call(null,inst_10735,(1),null);
var inst_10738 = cljs.core._EQ_.call(null,inst_10732,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var inst_10739 = cljs.core.not_EQ_.call(null,inst_10736__$1,new cljs.core.Keyword(null,"reset","reset",-800929946));
var inst_10740 = (inst_10738) && (inst_10739);
var state_10814__$1 = (function (){var statearr_10859 = state_10814;
(statearr_10859[(22)] = inst_10736__$1);

(statearr_10859[(12)] = inst_10737);

return statearr_10859;
})();
if(cljs.core.truth_(inst_10740)){
var statearr_10860_10903 = state_10814__$1;
(statearr_10860_10903[(1)] = (11));

} else {
var statearr_10861_10904 = state_10814__$1;
(statearr_10861_10904[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (18))){
var state_10814__$1 = state_10814;
var statearr_10862_10905 = state_10814__$1;
(statearr_10862_10905[(2)] = null);

(statearr_10862_10905[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10815 === (8))){
var inst_10720 = (state_10814[(7)]);
var state_10814__$1 = state_10814;
var statearr_10863_10906 = state_10814__$1;
(statearr_10863_10906[(2)] = inst_10720);

(statearr_10863_10906[(1)] = (9));


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
var statearr_10867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10867[(0)] = state_machine__5897__auto__);

(statearr_10867[(1)] = (1));

return statearr_10867;
});
var state_machine__5897__auto____1 = (function (state_10814){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e10868){if((e10868 instanceof Object)){
var ex__5900__auto__ = e10868;
var statearr_10869_10907 = state_10814;
(statearr_10869_10907[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10908 = state_10814;
state_10814 = G__10908;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10814){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_10870 = f__5912__auto__.call(null);
(statearr_10870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_10870;
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