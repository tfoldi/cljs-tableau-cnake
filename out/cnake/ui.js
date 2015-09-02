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
move_coords.cljs$lang$applyTo = (function (arglist__10617){
var coords = cljs.core.first(arglist__10617);
var tp = cljs.core.rest(arglist__10617);
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
var seq__10624 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,lines,cljs.core.range.call(null,(- n),(n + (1)))));
var chunk__10625 = null;
var count__10626 = (0);
var i__10627 = (0);
while(true){
if((i__10627 < count__10626)){
var vec__10628 = cljs.core._nth.call(null,chunk__10625,i__10627);
var line = cljs.core.nth.call(null,vec__10628,(0),null);
var y = cljs.core.nth.call(null,vec__10628,(1),null);
cnake.utils.canvas.fill_text_BANG_.call(null,ctx,line,cljs.core.quot.call(null,cnake.ui.width,(2)),(cljs.core.quot.call(null,cnake.ui.height,(2)) + ((18) * y)));

var G__10630 = seq__10624;
var G__10631 = chunk__10625;
var G__10632 = count__10626;
var G__10633 = (i__10627 + (1));
seq__10624 = G__10630;
chunk__10625 = G__10631;
count__10626 = G__10632;
i__10627 = G__10633;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10624);
if(temp__4126__auto__){
var seq__10624__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10624__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__10624__$1);
var G__10634 = cljs.core.chunk_rest.call(null,seq__10624__$1);
var G__10635 = c__4475__auto__;
var G__10636 = cljs.core.count.call(null,c__4475__auto__);
var G__10637 = (0);
seq__10624 = G__10634;
chunk__10625 = G__10635;
count__10626 = G__10636;
i__10627 = G__10637;
continue;
} else {
var vec__10629 = cljs.core.first.call(null,seq__10624__$1);
var line = cljs.core.nth.call(null,vec__10629,(0),null);
var y = cljs.core.nth.call(null,vec__10629,(1),null);
cnake.utils.canvas.fill_text_BANG_.call(null,ctx,line,cljs.core.quot.call(null,cnake.ui.width,(2)),(cljs.core.quot.call(null,cnake.ui.height,(2)) + ((18) * y)));

var G__10638 = cljs.core.next.call(null,seq__10624__$1);
var G__10639 = null;
var G__10640 = (0);
var G__10641 = (0);
seq__10624 = G__10638;
chunk__10625 = G__10639;
count__10626 = G__10640;
i__10627 = G__10641;
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

var seq__10648 = cljs.core.seq.call(null,snake);
var chunk__10649 = null;
var count__10650 = (0);
var i__10651 = (0);
while(true){
if((i__10651 < count__10650)){
var vec__10652 = cljs.core._nth.call(null,chunk__10649,i__10651);
var x = cljs.core.nth.call(null,vec__10652,(0),null);
var y = cljs.core.nth.call(null,vec__10652,(1),null);
cnake.utils.canvas.fill_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

cnake.utils.canvas.stroke_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

var G__10654 = seq__10648;
var G__10655 = chunk__10649;
var G__10656 = count__10650;
var G__10657 = (i__10651 + (1));
seq__10648 = G__10654;
chunk__10649 = G__10655;
count__10650 = G__10656;
i__10651 = G__10657;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10648);
if(temp__4126__auto__){
var seq__10648__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10648__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__10648__$1);
var G__10658 = cljs.core.chunk_rest.call(null,seq__10648__$1);
var G__10659 = c__4475__auto__;
var G__10660 = cljs.core.count.call(null,c__4475__auto__);
var G__10661 = (0);
seq__10648 = G__10658;
chunk__10649 = G__10659;
count__10650 = G__10660;
i__10651 = G__10661;
continue;
} else {
var vec__10653 = cljs.core.first.call(null,seq__10648__$1);
var x = cljs.core.nth.call(null,vec__10653,(0),null);
var y = cljs.core.nth.call(null,vec__10653,(1),null);
cnake.utils.canvas.fill_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

cnake.utils.canvas.stroke_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

var G__10662 = cljs.core.next.call(null,seq__10648__$1);
var G__10663 = null;
var G__10664 = (0);
var G__10665 = (0);
seq__10648 = G__10662;
chunk__10649 = G__10663;
count__10650 = G__10664;
i__10651 = G__10665;
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

var seq__10672 = cljs.core.seq.call(null,pills);
var chunk__10673 = null;
var count__10674 = (0);
var i__10675 = (0);
while(true){
if((i__10675 < count__10674)){
var vec__10676 = cljs.core._nth.call(null,chunk__10673,i__10675);
var x = cljs.core.nth.call(null,vec__10676,(0),null);
var y = cljs.core.nth.call(null,vec__10676,(1),null);
cnake.utils.canvas.fill_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

cnake.utils.canvas.stroke_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

var G__10678 = seq__10672;
var G__10679 = chunk__10673;
var G__10680 = count__10674;
var G__10681 = (i__10675 + (1));
seq__10672 = G__10678;
chunk__10673 = G__10679;
count__10674 = G__10680;
i__10675 = G__10681;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10672);
if(temp__4126__auto__){
var seq__10672__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10672__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__10672__$1);
var G__10682 = cljs.core.chunk_rest.call(null,seq__10672__$1);
var G__10683 = c__4475__auto__;
var G__10684 = cljs.core.count.call(null,c__4475__auto__);
var G__10685 = (0);
seq__10672 = G__10682;
chunk__10673 = G__10683;
count__10674 = G__10684;
i__10675 = G__10685;
continue;
} else {
var vec__10677 = cljs.core.first.call(null,seq__10672__$1);
var x = cljs.core.nth.call(null,vec__10677,(0),null);
var y = cljs.core.nth.call(null,vec__10677,(1),null);
cnake.utils.canvas.fill_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

cnake.utils.canvas.stroke_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

var G__10686 = cljs.core.next.call(null,seq__10672__$1);
var G__10687 = null;
var G__10688 = (0);
var G__10689 = (0);
seq__10672 = G__10686;
chunk__10673 = G__10687;
count__10674 = G__10688;
i__10675 = G__10689;
continue;
}
} else {
return null;
}
}
break;
}
});
cnake.ui.draw_game_over_BANG_ = (function draw_game_over_BANG_(p__10690){
var map__10692 = p__10690;
var map__10692__$1 = ((cljs.core.seq_QMARK_.call(null,map__10692))?cljs.core.apply.call(null,cljs.core.hash_map,map__10692):map__10692);
var world = map__10692__$1;
var pills = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
return cnake.ui.draw_text_BANG_.call(null,cnake.ui.ctx,[cljs.core.str("GAME OVER\nYour score: "),cljs.core.str(cljs.core.count.call(null,snake)),cljs.core.str("\n\n(Press Enter\nto restart)")].join(''));
});
/**
* Transforms a game snapshot into ui world data
*/
cnake.ui.game_world__GT_ui_world = (function game_world__GT_ui_world(p__10694){
var map__10696 = p__10694;
var map__10696__$1 = ((cljs.core.seq_QMARK_.call(null,map__10696))?cljs.core.apply.call(null,cljs.core.hash_map,map__10696):map__10696);
var game = map__10696__$1;
var pills = cljs.core.get.call(null,map__10696__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__10696__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snake","snake",-244377242),cljs.core.map.call(null,cnake.ui.point__GT_coords,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(snake)),new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.map.call(null,((function (map__10696,map__10696__$1,game,pills,snake){
return (function (p1__10693_SHARP_){
return cnake.ui.move_coords.call(null,cnake.ui.point__GT_coords.call(null,p1__10693_SHARP_),cnake.ui.half_square,cnake.ui.half_square);
});})(map__10696,map__10696__$1,game,pills,snake))
,pills)], null);
});
/**
* Render
*/
cnake.ui.render = (function render(p__10697){
var map__10699 = p__10697;
var map__10699__$1 = ((cljs.core.seq_QMARK_.call(null,map__10699))?cljs.core.apply.call(null,cljs.core.hash_map,map__10699):map__10699);
var world = map__10699__$1;
var pills = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
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
var c__5911__auto___10820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___10820){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___10820){
return (function (state_10793){
var state_val_10794 = (state_10793[(1)]);
if((state_val_10794 === (7))){
var inst_10775 = cljs.core.deref.call(null,cnake.ui.world);
var inst_10776 = cnake.ui.draw_game_over_BANG_.call(null,inst_10775);
var inst_10777 = cljs.core.reset_BANG_.call(null,cnake.ui.world,null);
var state_10793__$1 = (function (){var statearr_10795 = state_10793;
(statearr_10795[(7)] = inst_10776);

return statearr_10795;
})();
var statearr_10796_10821 = state_10793__$1;
(statearr_10796_10821[(2)] = inst_10777);

(statearr_10796_10821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (1))){
var state_10793__$1 = state_10793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10793__$1,(2),notifos);
} else {
if((state_val_10794 === (4))){
var inst_10791 = (state_10793[(2)]);
var state_10793__$1 = state_10793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10793__$1,inst_10791);
} else {
if((state_val_10794 === (6))){
var inst_10771 = (state_10793[(8)]);
var inst_10772 = cnake.ui.game_world__GT_ui_world.call(null,inst_10771);
var inst_10773 = cljs.core.reset_BANG_.call(null,cnake.ui.world,inst_10772);
var state_10793__$1 = state_10793;
var statearr_10797_10822 = state_10793__$1;
(statearr_10797_10822[(2)] = inst_10773);

(statearr_10797_10822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (3))){
var inst_10767 = (state_10793[(9)]);
var inst_10770 = (state_10793[(10)]);
var inst_10770__$1 = cljs.core.nth.call(null,inst_10767,(0),null);
var inst_10771 = cljs.core.nth.call(null,inst_10767,(1),null);
var state_10793__$1 = (function (){var statearr_10798 = state_10793;
(statearr_10798[(8)] = inst_10771);

(statearr_10798[(10)] = inst_10770__$1);

return statearr_10798;
})();
var G__10799_10823 = (((inst_10770__$1 instanceof cljs.core.Keyword))?inst_10770__$1.fqn:null);
switch (G__10799_10823) {
case "eat":
var statearr_10800_10825 = state_10793__$1;
(statearr_10800_10825[(1)] = (9));


break;
case "move":
var statearr_10801_10826 = state_10793__$1;
(statearr_10801_10826[(1)] = (8));


break;
case "game-over":
var statearr_10802_10827 = state_10793__$1;
(statearr_10802_10827[(1)] = (7));


break;
case "world":
var statearr_10803_10828 = state_10793__$1;
(statearr_10803_10828[(1)] = (6));


break;
default:
var statearr_10804_10829 = state_10793__$1;
(statearr_10804_10829[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (2))){
var inst_10764 = (state_10793[(2)]);
var inst_10765 = cljs.core.nth.call(null,inst_10764,(0),null);
var inst_10766 = cljs.core.nth.call(null,inst_10764,(1),null);
var inst_10767 = inst_10764;
var state_10793__$1 = (function (){var statearr_10805 = state_10793;
(statearr_10805[(11)] = inst_10766);

(statearr_10805[(9)] = inst_10767);

(statearr_10805[(12)] = inst_10765);

return statearr_10805;
})();
var statearr_10806_10830 = state_10793__$1;
(statearr_10806_10830[(2)] = null);

(statearr_10806_10830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (11))){
var inst_10788 = (state_10793[(2)]);
var inst_10767 = inst_10788;
var state_10793__$1 = (function (){var statearr_10807 = state_10793;
(statearr_10807[(9)] = inst_10767);

return statearr_10807;
})();
var statearr_10808_10831 = state_10793__$1;
(statearr_10808_10831[(2)] = null);

(statearr_10808_10831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (9))){
var state_10793__$1 = state_10793;
var statearr_10809_10832 = state_10793__$1;
(statearr_10809_10832[(2)] = null);

(statearr_10809_10832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (5))){
var inst_10786 = (state_10793[(2)]);
var state_10793__$1 = (function (){var statearr_10810 = state_10793;
(statearr_10810[(13)] = inst_10786);

return statearr_10810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10793__$1,(11),notifos);
} else {
if((state_val_10794 === (10))){
var inst_10770 = (state_10793[(10)]);
var inst_10781 = [cljs.core.str("Unrecognized UI command: "),cljs.core.str(inst_10770)].join('');
var inst_10782 = (new Error(inst_10781));
var inst_10783 = cljs.core.println.call(null,inst_10782);
var state_10793__$1 = state_10793;
var statearr_10811_10833 = state_10793__$1;
(statearr_10811_10833[(2)] = inst_10783);

(statearr_10811_10833[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (8))){
var state_10793__$1 = state_10793;
var statearr_10812_10834 = state_10793__$1;
(statearr_10812_10834[(2)] = null);

(statearr_10812_10834[(1)] = (5));


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
});})(c__5911__auto___10820))
;
return ((function (switch__5896__auto__,c__5911__auto___10820){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_10816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10816[(0)] = state_machine__5897__auto__);

(statearr_10816[(1)] = (1));

return statearr_10816;
});
var state_machine__5897__auto____1 = (function (state_10793){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e10817){if((e10817 instanceof Object)){
var ex__5900__auto__ = e10817;
var statearr_10818_10835 = state_10793;
(statearr_10818_10835[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10836 = state_10793;
state_10793 = G__10836;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10793){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___10820))
})();
var state__5913__auto__ = (function (){var statearr_10819 = f__5912__auto__.call(null);
(statearr_10819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___10820);

return statearr_10819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___10820))
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
return (function (p1__10837_SHARP_){
if(cljs.core.truth_(prevent_default)){
p1__10837_SHARP_.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,ev_chan,parse_event.call(null,p1__10837_SHARP_));
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
var c__5911__auto___11008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___11008,moves,cmds){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___11008,moves,cmds){
return (function (state_10979){
var state_val_10980 = (state_10979[(1)]);
if((state_val_10980 === (7))){
var inst_10972 = (state_10979[(2)]);
var state_10979__$1 = (function (){var statearr_10981 = state_10979;
(statearr_10981[(7)] = inst_10972);

return statearr_10981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10979__$1,(18),moves);
} else {
if((state_val_10980 === (1))){
var inst_10923 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_10924 = [(0),(0)];
var inst_10925 = cljs.core.PersistentHashMap.fromArrays(inst_10923,inst_10924);
var state_10979__$1 = (function (){var statearr_10982 = state_10979;
(statearr_10982[(8)] = inst_10925);

return statearr_10982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10979__$1,(2),moves);
} else {
if((state_val_10980 === (4))){
var inst_10977 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10979__$1,inst_10977);
} else {
if((state_val_10980 === (15))){
var inst_10970 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_10983_11009 = state_10979__$1;
(statearr_10983_11009[(2)] = inst_10970);

(statearr_10983_11009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (13))){
var inst_10962 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_10979__$1 = state_10979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10979__$1,(16),cmds,inst_10962);
} else {
if((state_val_10980 === (6))){
var inst_10939 = (state_10979[(9)]);
var inst_10959 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_10939);
var inst_10960 = ((0) > inst_10959);
var state_10979__$1 = state_10979;
if(cljs.core.truth_(inst_10960)){
var statearr_10984_11010 = state_10979__$1;
(statearr_10984_11010[(1)] = (13));

} else {
var statearr_10985_11011 = state_10979__$1;
(statearr_10985_11011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (17))){
var inst_10968 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_10986_11012 = state_10979__$1;
(statearr_10986_11012[(2)] = inst_10968);

(statearr_10986_11012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (3))){
var inst_10928 = (state_10979[(10)]);
var inst_10939 = (state_10979[(9)]);
var inst_10929 = (state_10979[(11)]);
var inst_10931 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_10932 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_10929);
var inst_10933 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_10928);
var inst_10934 = (inst_10932 - inst_10933);
var inst_10935 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_10929);
var inst_10936 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_10928);
var inst_10937 = (inst_10935 - inst_10936);
var inst_10938 = [inst_10934,inst_10937];
var inst_10939__$1 = cljs.core.PersistentHashMap.fromArrays(inst_10931,inst_10938);
var inst_10940 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_10939__$1);
var inst_10941 = Math.abs(inst_10940);
var inst_10942 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_10939__$1);
var inst_10943 = Math.abs(inst_10942);
var inst_10944 = (inst_10941 > inst_10943);
var state_10979__$1 = (function (){var statearr_10987 = state_10979;
(statearr_10987[(9)] = inst_10939__$1);

return statearr_10987;
})();
if(cljs.core.truth_(inst_10944)){
var statearr_10988_11013 = state_10979__$1;
(statearr_10988_11013[(1)] = (5));

} else {
var statearr_10989_11014 = state_10979__$1;
(statearr_10989_11014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (12))){
var inst_10955 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_10990_11015 = state_10979__$1;
(statearr_10990_11015[(2)] = inst_10955);

(statearr_10990_11015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (2))){
var inst_10925 = (state_10979[(8)]);
var inst_10927 = (state_10979[(2)]);
var inst_10928 = inst_10925;
var inst_10929 = inst_10927;
var state_10979__$1 = (function (){var statearr_10991 = state_10979;
(statearr_10991[(10)] = inst_10928);

(statearr_10991[(11)] = inst_10929);

return statearr_10991;
})();
var statearr_10992_11016 = state_10979__$1;
(statearr_10992_11016[(2)] = null);

(statearr_10992_11016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (11))){
var inst_10951 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_10993_11017 = state_10979__$1;
(statearr_10993_11017[(2)] = inst_10951);

(statearr_10993_11017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (9))){
var inst_10953 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var state_10979__$1 = state_10979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10979__$1,(12),cmds,inst_10953);
} else {
if((state_val_10980 === (5))){
var inst_10939 = (state_10979[(9)]);
var inst_10946 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_10939);
var inst_10947 = ((0) > inst_10946);
var state_10979__$1 = state_10979;
if(cljs.core.truth_(inst_10947)){
var statearr_10994_11018 = state_10979__$1;
(statearr_10994_11018[(1)] = (8));

} else {
var statearr_10995_11019 = state_10979__$1;
(statearr_10995_11019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (14))){
var inst_10966 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"down","down",1565245570));
var state_10979__$1 = state_10979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10979__$1,(17),cmds,inst_10966);
} else {
if((state_val_10980 === (16))){
var inst_10964 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_10997_11020 = state_10979__$1;
(statearr_10997_11020[(2)] = inst_10964);

(statearr_10997_11020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (10))){
var inst_10957 = (state_10979[(2)]);
var state_10979__$1 = state_10979;
var statearr_10998_11021 = state_10979__$1;
(statearr_10998_11021[(2)] = inst_10957);

(statearr_10998_11021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (18))){
var inst_10929 = (state_10979[(11)]);
var inst_10974 = (state_10979[(2)]);
var tmp10996 = inst_10929;
var inst_10928 = tmp10996;
var inst_10929__$1 = inst_10974;
var state_10979__$1 = (function (){var statearr_10999 = state_10979;
(statearr_10999[(10)] = inst_10928);

(statearr_10999[(11)] = inst_10929__$1);

return statearr_10999;
})();
var statearr_11000_11022 = state_10979__$1;
(statearr_11000_11022[(2)] = null);

(statearr_11000_11022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10980 === (8))){
var inst_10949 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
var state_10979__$1 = state_10979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10979__$1,(11),cmds,inst_10949);
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
});})(c__5911__auto___11008,moves,cmds))
;
return ((function (switch__5896__auto__,c__5911__auto___11008,moves,cmds){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_11004 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11004[(0)] = state_machine__5897__auto__);

(statearr_11004[(1)] = (1));

return statearr_11004;
});
var state_machine__5897__auto____1 = (function (state_10979){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e11005){if((e11005 instanceof Object)){
var ex__5900__auto__ = e11005;
var statearr_11006_11023 = state_10979;
(statearr_11006_11023[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11024 = state_10979;
state_10979 = G__11024;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10979){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___11008,moves,cmds))
})();
var state__5913__auto__ = (function (){var statearr_11007 = f__5912__auto__.call(null);
(statearr_11007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___11008);

return statearr_11007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___11008,moves,cmds))
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