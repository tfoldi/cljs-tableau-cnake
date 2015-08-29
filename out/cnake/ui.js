// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.ui');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cnake.utils.dom');
goog.require('cljs.core.async');
goog.require('cnake.game');
goog.require('clojure.set');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('cnake.utils.canvas');
/**
* UI state
*/
cnake.ui.world = cljs.core.atom.call(null,null);
/**
* Canvas dom element on the page
*/
cnake.ui.cvs = cnake.utils.dom.by_id.call(null,"cnake");
/**
* Canvas 2d context for drawing
*/
cnake.ui.ctx = cnake.utils.canvas.context.call(null,cnake.ui.cvs);
/**
* Size of each square in the board
*/
cnake.ui.square_size = 20.25;
cnake.ui.half_square = (cnake.ui.square_size / (2));
cnake.ui.pill_radius = (8);
cnake.ui.width = (cnake.game.width * cnake.ui.square_size);
cnake.ui.height = (cnake.game.height * cnake.ui.square_size);
/**
* Transforms a board point into pixels
*/
cnake.ui.point__GT_coords = (function point__GT_coords(point){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,cnake.ui.square_size),point);
});
/**
* Traslates coords x y pixels
* @param {...*} var_args
*/
cnake.ui.move_coords = (function() { 
var move_coords__delegate = function (coords,tp){
return cljs.core.map.call(null,cljs.core._PLUS_,coords,tp);
};
var move_coords = function (coords,var_args){
var tp = null;
if (arguments.length > 1) {
  tp = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move_coords__delegate.call(this,coords,tp);};
move_coords.cljs$lang$maxFixedArity = 1;
move_coords.cljs$lang$applyTo = (function (arglist__10480){
var coords = cljs.core.first(arglist__10480);
var tp = cljs.core.rest(arglist__10480);
return move_coords__delegate(coords,tp);
});
move_coords.cljs$core$IFn$_invoke$arity$variadic = move_coords__delegate;
return move_coords;
})()
;
/**
* Resize canvas to the required size for the board
*/
cnake.ui.resize_canvas_BANG_ = (function resize_canvas_BANG_(){
return cnake.utils.canvas.set_dimensions_BANG_.call(null,cnake.ui.cvs,cnake.ui.width,cnake.ui.height);
});
/**
* Draw a score in the bottom right of the canvas
*/
cnake.ui.draw_score_BANG_ = (function draw_score_BANG_(ctx,snake){
cnake.utils.canvas.font_BANG_.call(null,ctx,"monospace","normal",(8));

cnake.utils.canvas.text_align_BANG_.call(null,ctx,"right");

cnake.utils.canvas.fill_style_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100),(40)], null));

return cnake.utils.canvas.fill_text_BANG_.call(null,ctx,[cljs.core.str("Score: "),cljs.core.str(cljs.core.count.call(null,snake))].join(''),(cnake.ui.width - (10)),(cnake.ui.height - (10)));
});
/**
* Draw a text in the screen of the canvas
*/
cnake.ui.draw_text_BANG_ = (function draw_text_BANG_(ctx,text){
cnake.utils.canvas.font_BANG_.call(null,ctx,"monospace","bold",(16));

cnake.utils.canvas.text_align_BANG_.call(null,ctx,"center");

cnake.utils.canvas.fill_style_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

var lines = text.split("\n");
var n = cljs.core.quot.call(null,cljs.core.count.call(null,lines),(2));
var seq__10487 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,lines,cljs.core.range.call(null,(- n),(n + (1)))));
var chunk__10488 = null;
var count__10489 = (0);
var i__10490 = (0);
while(true){
if((i__10490 < count__10489)){
var vec__10491 = cljs.core._nth.call(null,chunk__10488,i__10490);
var line = cljs.core.nth.call(null,vec__10491,(0),null);
var y = cljs.core.nth.call(null,vec__10491,(1),null);
cnake.utils.canvas.fill_text_BANG_.call(null,ctx,line,cljs.core.quot.call(null,cnake.ui.width,(2)),(cljs.core.quot.call(null,cnake.ui.height,(2)) + ((18) * y)));

var G__10493 = seq__10487;
var G__10494 = chunk__10488;
var G__10495 = count__10489;
var G__10496 = (i__10490 + (1));
seq__10487 = G__10493;
chunk__10488 = G__10494;
count__10489 = G__10495;
i__10490 = G__10496;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10487);
if(temp__4126__auto__){
var seq__10487__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10487__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__10487__$1);
var G__10497 = cljs.core.chunk_rest.call(null,seq__10487__$1);
var G__10498 = c__4475__auto__;
var G__10499 = cljs.core.count.call(null,c__4475__auto__);
var G__10500 = (0);
seq__10487 = G__10497;
chunk__10488 = G__10498;
count__10489 = G__10499;
i__10490 = G__10500;
continue;
} else {
var vec__10492 = cljs.core.first.call(null,seq__10487__$1);
var line = cljs.core.nth.call(null,vec__10492,(0),null);
var y = cljs.core.nth.call(null,vec__10492,(1),null);
cnake.utils.canvas.fill_text_BANG_.call(null,ctx,line,cljs.core.quot.call(null,cnake.ui.width,(2)),(cljs.core.quot.call(null,cnake.ui.height,(2)) + ((18) * y)));

var G__10501 = cljs.core.next.call(null,seq__10487__$1);
var G__10502 = null;
var G__10503 = (0);
var G__10504 = (0);
seq__10487 = G__10501;
chunk__10488 = G__10502;
count__10489 = G__10503;
i__10490 = G__10504;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Snake body color [hue saturation lightness]
*/
cnake.ui.snake_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100),(40)], null);
/**
* Draw a snake on the board.
*/
cnake.ui.draw_snake = (function draw_snake(ctx,snake){
cnake.utils.canvas.fill_style_BANG_.call(null,ctx,cnake.ui.snake_color);

var seq__10511 = cljs.core.seq.call(null,snake);
var chunk__10512 = null;
var count__10513 = (0);
var i__10514 = (0);
while(true){
if((i__10514 < count__10513)){
var vec__10515 = cljs.core._nth.call(null,chunk__10512,i__10514);
var x = cljs.core.nth.call(null,vec__10515,(0),null);
var y = cljs.core.nth.call(null,vec__10515,(1),null);
cnake.utils.canvas.fill_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

cnake.utils.canvas.stroke_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

var G__10517 = seq__10511;
var G__10518 = chunk__10512;
var G__10519 = count__10513;
var G__10520 = (i__10514 + (1));
seq__10511 = G__10517;
chunk__10512 = G__10518;
count__10513 = G__10519;
i__10514 = G__10520;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10511);
if(temp__4126__auto__){
var seq__10511__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10511__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__10511__$1);
var G__10521 = cljs.core.chunk_rest.call(null,seq__10511__$1);
var G__10522 = c__4475__auto__;
var G__10523 = cljs.core.count.call(null,c__4475__auto__);
var G__10524 = (0);
seq__10511 = G__10521;
chunk__10512 = G__10522;
count__10513 = G__10523;
i__10514 = G__10524;
continue;
} else {
var vec__10516 = cljs.core.first.call(null,seq__10511__$1);
var x = cljs.core.nth.call(null,vec__10516,(0),null);
var y = cljs.core.nth.call(null,vec__10516,(1),null);
cnake.utils.canvas.fill_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

cnake.utils.canvas.stroke_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

var G__10525 = cljs.core.next.call(null,seq__10511__$1);
var G__10526 = null;
var G__10527 = (0);
var G__10528 = (0);
seq__10511 = G__10525;
chunk__10512 = G__10526;
count__10513 = G__10527;
i__10514 = G__10528;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Pill color [hue saturation lightness]
*/
cnake.ui.pill_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(140),(50),(40)], null);
/**
* Draw the pills on the board
*/
cnake.ui.draw_pills = (function draw_pills(ctx,pills){
cnake.utils.canvas.fill_style_BANG_.call(null,ctx,cnake.ui.pill_color);

var seq__10535 = cljs.core.seq.call(null,pills);
var chunk__10536 = null;
var count__10537 = (0);
var i__10538 = (0);
while(true){
if((i__10538 < count__10537)){
var vec__10539 = cljs.core._nth.call(null,chunk__10536,i__10538);
var x = cljs.core.nth.call(null,vec__10539,(0),null);
var y = cljs.core.nth.call(null,vec__10539,(1),null);
cnake.utils.canvas.fill_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

cnake.utils.canvas.stroke_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

var G__10541 = seq__10535;
var G__10542 = chunk__10536;
var G__10543 = count__10537;
var G__10544 = (i__10538 + (1));
seq__10535 = G__10541;
chunk__10536 = G__10542;
count__10537 = G__10543;
i__10538 = G__10544;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10535);
if(temp__4126__auto__){
var seq__10535__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10535__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__10535__$1);
var G__10545 = cljs.core.chunk_rest.call(null,seq__10535__$1);
var G__10546 = c__4475__auto__;
var G__10547 = cljs.core.count.call(null,c__4475__auto__);
var G__10548 = (0);
seq__10535 = G__10545;
chunk__10536 = G__10546;
count__10537 = G__10547;
i__10538 = G__10548;
continue;
} else {
var vec__10540 = cljs.core.first.call(null,seq__10535__$1);
var x = cljs.core.nth.call(null,vec__10540,(0),null);
var y = cljs.core.nth.call(null,vec__10540,(1),null);
cnake.utils.canvas.fill_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

cnake.utils.canvas.stroke_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

var G__10549 = cljs.core.next.call(null,seq__10535__$1);
var G__10550 = null;
var G__10551 = (0);
var G__10552 = (0);
seq__10535 = G__10549;
chunk__10536 = G__10550;
count__10537 = G__10551;
i__10538 = G__10552;
continue;
}
} else {
return null;
}
}
break;
}
});
cnake.ui.draw_game_over_BANG_ = (function draw_game_over_BANG_(p__10553){
var map__10555 = p__10553;
var map__10555__$1 = ((cljs.core.seq_QMARK_.call(null,map__10555))?cljs.core.apply.call(null,cljs.core.hash_map,map__10555):map__10555);
var world = map__10555__$1;
var pills = cljs.core.get.call(null,map__10555__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__10555__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
return cnake.ui.draw_text_BANG_.call(null,cnake.ui.ctx,[cljs.core.str("GAME OVER\nYour score: "),cljs.core.str(cljs.core.count.call(null,snake)),cljs.core.str("\n\n(Press Enter\nto restart)")].join(''));
});
/**
* Transforms a game snapshot into ui world data
*/
cnake.ui.game_world__GT_ui_world = (function game_world__GT_ui_world(p__10557){
var map__10559 = p__10557;
var map__10559__$1 = ((cljs.core.seq_QMARK_.call(null,map__10559))?cljs.core.apply.call(null,cljs.core.hash_map,map__10559):map__10559);
var game = map__10559__$1;
var pills = cljs.core.get.call(null,map__10559__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__10559__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snake","snake",-244377242),cljs.core.map.call(null,cnake.ui.point__GT_coords,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(snake)),new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.map.call(null,((function (map__10559,map__10559__$1,game,pills,snake){
return (function (p1__10556_SHARP_){
return cnake.ui.move_coords.call(null,cnake.ui.point__GT_coords.call(null,p1__10556_SHARP_),cnake.ui.half_square,cnake.ui.half_square);
});})(map__10559,map__10559__$1,game,pills,snake))
,pills)], null);
});
/**
* Render
*/
cnake.ui.render = (function render(p__10560){
var map__10562 = p__10560;
var map__10562__$1 = ((cljs.core.seq_QMARK_.call(null,map__10562))?cljs.core.apply.call(null,cljs.core.hash_map,map__10562):map__10562);
var world = map__10562__$1;
var pills = cljs.core.get.call(null,map__10562__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__10562__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
if(cljs.core.truth_(world)){
cnake.utils.canvas.clear_rect_BANG_.call(null,cnake.ui.ctx,(0),(0),cnake.ui.width,cnake.ui.height);

cnake.utils.canvas.save_BANG_.call(null,cnake.ui.ctx);

cnake.utils.canvas.translate_BANG_.call(null,cnake.ui.ctx,0.5,0.5);

cnake.ui.draw_score_BANG_.call(null,cnake.ui.ctx,snake);

cnake.ui.draw_snake.call(null,cnake.ui.ctx,snake);

return cnake.utils.canvas.restore_BANG_.call(null,cnake.ui.ctx);
} else {
return null;
}
});
/**
* Render loop. Watches for updates from the game and sets the
* actual loop that renders
*/
cnake.ui.render_loop_BANG_ = (function render_loop_BANG_(notifos){
var c__5911__auto___10683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___10683){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___10683){
return (function (state_10656){
var state_val_10657 = (state_10656[(1)]);
if((state_val_10657 === (7))){
var inst_10638 = cljs.core.deref.call(null,cnake.ui.world);
var inst_10639 = cnake.ui.draw_game_over_BANG_.call(null,inst_10638);
var inst_10640 = cljs.core.reset_BANG_.call(null,cnake.ui.world,null);
var state_10656__$1 = (function (){var statearr_10658 = state_10656;
(statearr_10658[(7)] = inst_10639);

return statearr_10658;
})();
var statearr_10659_10684 = state_10656__$1;
(statearr_10659_10684[(2)] = inst_10640);

(statearr_10659_10684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (1))){
var state_10656__$1 = state_10656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10656__$1,(2),notifos);
} else {
if((state_val_10657 === (4))){
var inst_10654 = (state_10656[(2)]);
var state_10656__$1 = state_10656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10656__$1,inst_10654);
} else {
if((state_val_10657 === (6))){
var inst_10634 = (state_10656[(8)]);
var inst_10635 = cnake.ui.game_world__GT_ui_world.call(null,inst_10634);
var inst_10636 = cljs.core.reset_BANG_.call(null,cnake.ui.world,inst_10635);
var state_10656__$1 = state_10656;
var statearr_10660_10685 = state_10656__$1;
(statearr_10660_10685[(2)] = inst_10636);

(statearr_10660_10685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (3))){
var inst_10630 = (state_10656[(9)]);
var inst_10633 = (state_10656[(10)]);
var inst_10633__$1 = cljs.core.nth.call(null,inst_10630,(0),null);
var inst_10634 = cljs.core.nth.call(null,inst_10630,(1),null);
var state_10656__$1 = (function (){var statearr_10661 = state_10656;
(statearr_10661[(8)] = inst_10634);

(statearr_10661[(10)] = inst_10633__$1);

return statearr_10661;
})();
var G__10662_10686 = (((inst_10633__$1 instanceof cljs.core.Keyword))?inst_10633__$1.fqn:null);
switch (G__10662_10686) {
case "eat":
var statearr_10663_10688 = state_10656__$1;
(statearr_10663_10688[(1)] = (9));


break;
case "move":
var statearr_10664_10689 = state_10656__$1;
(statearr_10664_10689[(1)] = (8));


break;
case "game-over":
var statearr_10665_10690 = state_10656__$1;
(statearr_10665_10690[(1)] = (7));


break;
case "world":
var statearr_10666_10691 = state_10656__$1;
(statearr_10666_10691[(1)] = (6));


break;
default:
var statearr_10667_10692 = state_10656__$1;
(statearr_10667_10692[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (2))){
var inst_10627 = (state_10656[(2)]);
var inst_10628 = cljs.core.nth.call(null,inst_10627,(0),null);
var inst_10629 = cljs.core.nth.call(null,inst_10627,(1),null);
var inst_10630 = inst_10627;
var state_10656__$1 = (function (){var statearr_10668 = state_10656;
(statearr_10668[(11)] = inst_10629);

(statearr_10668[(12)] = inst_10628);

(statearr_10668[(9)] = inst_10630);

return statearr_10668;
})();
var statearr_10669_10693 = state_10656__$1;
(statearr_10669_10693[(2)] = null);

(statearr_10669_10693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (11))){
var inst_10651 = (state_10656[(2)]);
var inst_10630 = inst_10651;
var state_10656__$1 = (function (){var statearr_10670 = state_10656;
(statearr_10670[(9)] = inst_10630);

return statearr_10670;
})();
var statearr_10671_10694 = state_10656__$1;
(statearr_10671_10694[(2)] = null);

(statearr_10671_10694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (9))){
var state_10656__$1 = state_10656;
var statearr_10672_10695 = state_10656__$1;
(statearr_10672_10695[(2)] = null);

(statearr_10672_10695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (5))){
var inst_10649 = (state_10656[(2)]);
var state_10656__$1 = (function (){var statearr_10673 = state_10656;
(statearr_10673[(13)] = inst_10649);

return statearr_10673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10656__$1,(11),notifos);
} else {
if((state_val_10657 === (10))){
var inst_10633 = (state_10656[(10)]);
var inst_10644 = [cljs.core.str("Unrecognized UI command: "),cljs.core.str(inst_10633)].join('');
var inst_10645 = (new Error(inst_10644));
var inst_10646 = cljs.core.println.call(null,inst_10645);
var state_10656__$1 = state_10656;
var statearr_10674_10696 = state_10656__$1;
(statearr_10674_10696[(2)] = inst_10646);

(statearr_10674_10696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (8))){
var state_10656__$1 = state_10656;
var statearr_10675_10697 = state_10656__$1;
(statearr_10675_10697[(2)] = null);

(statearr_10675_10697[(1)] = (5));


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
});})(c__5911__auto___10683))
;
return ((function (switch__5896__auto__,c__5911__auto___10683){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_10679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10679[(0)] = state_machine__5897__auto__);

(statearr_10679[(1)] = (1));

return statearr_10679;
});
var state_machine__5897__auto____1 = (function (state_10656){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e10680){if((e10680 instanceof Object)){
var ex__5900__auto__ = e10680;
var statearr_10681_10698 = state_10656;
(statearr_10681_10698[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10699 = state_10656;
state_10656 = G__10699;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10656){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___10683))
})();
var state__5913__auto__ = (function (){var statearr_10682 = f__5912__auto__.call(null);
(statearr_10682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___10683);

return statearr_10682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___10683))
);


return cnake.utils.canvas.request_animation_frame.call(null,(function lo(){
cnake.utils.canvas.request_animation_frame.call(null,lo);

return cnake.ui.render.call(null,cljs.core.deref.call(null,cnake.ui.world));
}));
});
/**
* Keycodes that interest us. Taken from
* http://docs.closure-library.googlecode.com/git/closure_goog_events_keynames.js.source.html#line33
*/
cnake.ui.keycodes = new cljs.core.PersistentArrayMap(null, 6, [(37),new cljs.core.Keyword(null,"left","left",-399115937),(38),new cljs.core.Keyword(null,"up","up",-269712113),(39),new cljs.core.Keyword(null,"right","right",-452581833),(40),new cljs.core.Keyword(null,"down","down",1565245570),(32),new cljs.core.Keyword(null,"space","space",348133475),(13),new cljs.core.Keyword(null,"enter","enter",1792452624)], null);
/**
* Transform an js event object into the key name
*/
cnake.ui.event__GT_key = (function event__GT_key(ev){
var keycode = ev.keyCode;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(39),null,(32),null,(40),null,(13),null,(38),null,(37),null], null), null).call(null,keycode))){
ev.preventDefault();
} else {
}

return cljs.core.get.call(null,cnake.ui.keycodes,ev.keyCode,new cljs.core.Keyword(null,"key-not-found","key-not-found",-872876464));
});
/**
* Creates a channel with the events of type event-type and optionally applies
* the function parse-event to each event.
*/
cnake.ui.event_chan = (function() {
var event_chan = null;
var event_chan__1 = (function (event_type){
return event_chan.call(null,event_type,cljs.core.identity,false);
});
var event_chan__2 = (function (event_type,parse_event){
return event_chan.call(null,event_type,parse_event,false);
});
var event_chan__3 = (function (event_type,parse_event,prevent_default){
var ev_chan = cljs.core.async.chan.call(null);
goog.events.listen(document.body,event_type,((function (ev_chan){
return (function (p1__10700_SHARP_){
if(cljs.core.truth_(prevent_default)){
p1__10700_SHARP_.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,ev_chan,parse_event.call(null,p1__10700_SHARP_));
});})(ev_chan))
);

return ev_chan;
});
event_chan = function(event_type,parse_event,prevent_default){
switch(arguments.length){
case 1:
return event_chan__1.call(this,event_type);
case 2:
return event_chan__2.call(this,event_type,parse_event);
case 3:
return event_chan__3.call(this,event_type,parse_event,prevent_default);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
event_chan.cljs$core$IFn$_invoke$arity$1 = event_chan__1;
event_chan.cljs$core$IFn$_invoke$arity$2 = event_chan__2;
event_chan.cljs$core$IFn$_invoke$arity$3 = event_chan__3;
return event_chan;
})()
;
/**
* Returns a channel with the key events of event-type parsed and
* filtered by the allowed-keys
*/
cnake.ui.keys_chan = (function keys_chan(event_type,allowed_keys){
var evs = cnake.ui.event_chan.call(null,event_type,cnake.ui.event__GT_key);
return cljs.core.async.filter_LT_.call(null,allowed_keys,evs);
});
/**
* Keys that trigger boost
*/
cnake.ui.boost_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space","space",348133475),null], null), null);
/**
* Keys that trigger movement
*/
cnake.ui.move_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
/**
* Reset key
*/
cnake.ui.reset_key = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),null], null), null);
/**
* Keys we want to listen on key up
*/
cnake.ui.valid_keys_up = cnake.ui.boost_keys;
/**
* Create a channel of keys up restricted by the valid keys
*/
cnake.ui.keys_up_chan = (function keys_up_chan(){
return cnake.ui.keys_chan.call(null,goog.events.EventType.KEYUP,cnake.ui.valid_keys_up);
});
/**
* Keys we want to listen on key down
*/
cnake.ui.valid_keys_down = clojure.set.union.call(null,cnake.ui.move_keys,cnake.ui.boost_keys,cnake.ui.reset_key);
/**
* Create a channel of keys pressed down restricted by the valid keys
*/
cnake.ui.keys_down_chan = (function keys_down_chan(){
return cnake.ui.keys_chan.call(null,goog.events.EventType.KEYDOWN,cnake.ui.valid_keys_down);
});
/**
* Transform a key pressed down to the command we will send to the game
*/
cnake.ui.key_down__GT_command = (function key_down__GT_command(k){
if(cljs.core.truth_(cnake.ui.move_keys.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344),k], null);
} else {
if(cljs.core.truth_(cnake.ui.reset_key.call(null,k))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset","reset",-800929946)], null);
} else {
if(cljs.core.truth_(cnake.ui.boost_keys.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turbo","turbo",846610757),true], null);
} else {
return null;
}
}
}
});
/**
* Transform a key up to the command we will send to the game
*/
cnake.ui.key_up__GT_command = (function key_up__GT_command(k){
if(cljs.core.truth_(cnake.ui.boost_keys.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turbo","turbo",846610757),false], null);
} else {
return null;
}
});
cnake.ui.touch_event__GT_coords = (function touch_event__GT_coords(e){
var touch = (e.event_.touches[(0)]);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),touch.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),touch.pageY], null);
});
cnake.ui.touch_move_chan = (function touch_move_chan(){
return cnake.ui.event_chan.call(null,goog.events.EventType.TOUCHMOVE,cnake.ui.touch_event__GT_coords,true);
});
cnake.ui.touch_commands = (function touch_commands(){
var moves = cnake.ui.touch_move_chan.call(null);
var cmds = cljs.core.async.chan.call(null);
var c__5911__auto___10871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___10871,moves,cmds){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___10871,moves,cmds){
return (function (state_10842){
var state_val_10843 = (state_10842[(1)]);
if((state_val_10843 === (7))){
var inst_10835 = (state_10842[(2)]);
var state_10842__$1 = (function (){var statearr_10844 = state_10842;
(statearr_10844[(7)] = inst_10835);

return statearr_10844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10842__$1,(18),moves);
} else {
if((state_val_10843 === (1))){
var inst_10786 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_10787 = [(0),(0)];
var inst_10788 = cljs.core.PersistentHashMap.fromArrays(inst_10786,inst_10787);
var state_10842__$1 = (function (){var statearr_10845 = state_10842;
(statearr_10845[(8)] = inst_10788);

return statearr_10845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10842__$1,(2),moves);
} else {
if((state_val_10843 === (4))){
var inst_10840 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10842__$1,inst_10840);
} else {
if((state_val_10843 === (15))){
var inst_10833 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10846_10872 = state_10842__$1;
(statearr_10846_10872[(2)] = inst_10833);

(statearr_10846_10872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (13))){
var inst_10825 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10842__$1,(16),cmds,inst_10825);
} else {
if((state_val_10843 === (6))){
var inst_10802 = (state_10842[(9)]);
var inst_10822 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_10802);
var inst_10823 = ((0) > inst_10822);
var state_10842__$1 = state_10842;
if(cljs.core.truth_(inst_10823)){
var statearr_10847_10873 = state_10842__$1;
(statearr_10847_10873[(1)] = (13));

} else {
var statearr_10848_10874 = state_10842__$1;
(statearr_10848_10874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (17))){
var inst_10831 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10849_10875 = state_10842__$1;
(statearr_10849_10875[(2)] = inst_10831);

(statearr_10849_10875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (3))){
var inst_10791 = (state_10842[(10)]);
var inst_10792 = (state_10842[(11)]);
var inst_10802 = (state_10842[(9)]);
var inst_10794 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_10795 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_10792);
var inst_10796 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_10791);
var inst_10797 = (inst_10795 - inst_10796);
var inst_10798 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_10792);
var inst_10799 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_10791);
var inst_10800 = (inst_10798 - inst_10799);
var inst_10801 = [inst_10797,inst_10800];
var inst_10802__$1 = cljs.core.PersistentHashMap.fromArrays(inst_10794,inst_10801);
var inst_10803 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_10802__$1);
var inst_10804 = Math.abs(inst_10803);
var inst_10805 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_10802__$1);
var inst_10806 = Math.abs(inst_10805);
var inst_10807 = (inst_10804 > inst_10806);
var state_10842__$1 = (function (){var statearr_10850 = state_10842;
(statearr_10850[(9)] = inst_10802__$1);

return statearr_10850;
})();
if(cljs.core.truth_(inst_10807)){
var statearr_10851_10876 = state_10842__$1;
(statearr_10851_10876[(1)] = (5));

} else {
var statearr_10852_10877 = state_10842__$1;
(statearr_10852_10877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (12))){
var inst_10818 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10853_10878 = state_10842__$1;
(statearr_10853_10878[(2)] = inst_10818);

(statearr_10853_10878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (2))){
var inst_10788 = (state_10842[(8)]);
var inst_10790 = (state_10842[(2)]);
var inst_10791 = inst_10788;
var inst_10792 = inst_10790;
var state_10842__$1 = (function (){var statearr_10854 = state_10842;
(statearr_10854[(10)] = inst_10791);

(statearr_10854[(11)] = inst_10792);

return statearr_10854;
})();
var statearr_10855_10879 = state_10842__$1;
(statearr_10855_10879[(2)] = null);

(statearr_10855_10879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (11))){
var inst_10814 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10856_10880 = state_10842__$1;
(statearr_10856_10880[(2)] = inst_10814);

(statearr_10856_10880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (9))){
var inst_10816 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10842__$1,(12),cmds,inst_10816);
} else {
if((state_val_10843 === (5))){
var inst_10802 = (state_10842[(9)]);
var inst_10809 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_10802);
var inst_10810 = ((0) > inst_10809);
var state_10842__$1 = state_10842;
if(cljs.core.truth_(inst_10810)){
var statearr_10857_10881 = state_10842__$1;
(statearr_10857_10881[(1)] = (8));

} else {
var statearr_10858_10882 = state_10842__$1;
(statearr_10858_10882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (14))){
var inst_10829 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"down","down",1565245570));
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10842__$1,(17),cmds,inst_10829);
} else {
if((state_val_10843 === (16))){
var inst_10827 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10860_10883 = state_10842__$1;
(statearr_10860_10883[(2)] = inst_10827);

(statearr_10860_10883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (10))){
var inst_10820 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10861_10884 = state_10842__$1;
(statearr_10861_10884[(2)] = inst_10820);

(statearr_10861_10884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (18))){
var inst_10792 = (state_10842[(11)]);
var inst_10837 = (state_10842[(2)]);
var tmp10859 = inst_10792;
var inst_10791 = tmp10859;
var inst_10792__$1 = inst_10837;
var state_10842__$1 = (function (){var statearr_10862 = state_10842;
(statearr_10862[(10)] = inst_10791);

(statearr_10862[(11)] = inst_10792__$1);

return statearr_10862;
})();
var statearr_10863_10885 = state_10842__$1;
(statearr_10863_10885[(2)] = null);

(statearr_10863_10885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (8))){
var inst_10812 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10842__$1,(11),cmds,inst_10812);
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
});})(c__5911__auto___10871,moves,cmds))
;
return ((function (switch__5896__auto__,c__5911__auto___10871,moves,cmds){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_10867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10867[(0)] = state_machine__5897__auto__);

(statearr_10867[(1)] = (1));

return statearr_10867;
});
var state_machine__5897__auto____1 = (function (state_10842){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e10868){if((e10868 instanceof Object)){
var ex__5900__auto__ = e10868;
var statearr_10869_10886 = state_10842;
(statearr_10869_10886[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10887 = state_10842;
state_10842 = G__10887;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10842){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___10871,moves,cmds))
})();
var state__5913__auto__ = (function (){var statearr_10870 = f__5912__auto__.call(null);
(statearr_10870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___10871);

return statearr_10870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___10871,moves,cmds))
);


return cmds;
});
/**
* Initialize event processing. It takes all the key presses and transforms
* them into commands and passes them to the game commands channel
*/
cnake.ui.init_events_BANG_ = (function init_events_BANG_(game_commands){
var keys_pressed = cnake.ui.keys_down_chan.call(null);
var keys_up = cnake.ui.keys_up_chan.call(null);
var commands = cljs.core.async.unique.call(null,cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.map_LT_.call(null,cnake.ui.key_down__GT_command,keys_pressed),cljs.core.async.map_LT_.call(null,cnake.ui.key_up__GT_command,keys_up),cnake.ui.touch_commands.call(null)], null)));
return cljs.core.async.pipe.call(null,commands,game_commands);
});
/**
* Initialize the UI by initializing the user input, adapting the canvas
* and starting the render loop.
*/
cnake.ui.init = (function init(){
var commands = cljs.core.async.chan.call(null);
var notifos = cnake.game.init.call(null,commands);
cnake.ui.init_events_BANG_.call(null,commands);

cnake.ui.resize_canvas_BANG_.call(null);

cnake.ui.render_loop_BANG_.call(null,notifos);

return cljs.core.async.put_BANG_.call(null,commands,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434)], null));
});

//# sourceMappingURL=ui.js.map