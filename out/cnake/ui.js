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
move_coords.cljs$lang$applyTo = (function (arglist__15469){
var coords = cljs.core.first(arglist__15469);
var tp = cljs.core.rest(arglist__15469);
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
* Draw a timestamp in the bottom right of the canvas
*/
cnake.ui.draw_timestamp_BANG_ = (function draw_timestamp_BANG_(ctx){
cnake.utils.canvas.font_BANG_.call(null,ctx,"monospace","normal",(8));

cnake.utils.canvas.text_align_BANG_.call(null,ctx,"right");

cnake.utils.canvas.fill_style_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100),(40)], null));

return cnake.utils.canvas.fill_text_BANG_.call(null,ctx,(new Date()).toLocaleString(),(cnake.ui.width - (10)),(cnake.ui.height - (10)));
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
var seq__15476 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,lines,cljs.core.range.call(null,(- n),(n + (1)))));
var chunk__15477 = null;
var count__15478 = (0);
var i__15479 = (0);
while(true){
if((i__15479 < count__15478)){
var vec__15480 = cljs.core._nth.call(null,chunk__15477,i__15479);
var line = cljs.core.nth.call(null,vec__15480,(0),null);
var y = cljs.core.nth.call(null,vec__15480,(1),null);
cnake.utils.canvas.fill_text_BANG_.call(null,ctx,line,cljs.core.quot.call(null,cnake.ui.width,(2)),(cljs.core.quot.call(null,cnake.ui.height,(2)) + ((18) * y)));

var G__15482 = seq__15476;
var G__15483 = chunk__15477;
var G__15484 = count__15478;
var G__15485 = (i__15479 + (1));
seq__15476 = G__15482;
chunk__15477 = G__15483;
count__15478 = G__15484;
i__15479 = G__15485;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15476);
if(temp__4126__auto__){
var seq__15476__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15476__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__15476__$1);
var G__15486 = cljs.core.chunk_rest.call(null,seq__15476__$1);
var G__15487 = c__4475__auto__;
var G__15488 = cljs.core.count.call(null,c__4475__auto__);
var G__15489 = (0);
seq__15476 = G__15486;
chunk__15477 = G__15487;
count__15478 = G__15488;
i__15479 = G__15489;
continue;
} else {
var vec__15481 = cljs.core.first.call(null,seq__15476__$1);
var line = cljs.core.nth.call(null,vec__15481,(0),null);
var y = cljs.core.nth.call(null,vec__15481,(1),null);
cnake.utils.canvas.fill_text_BANG_.call(null,ctx,line,cljs.core.quot.call(null,cnake.ui.width,(2)),(cljs.core.quot.call(null,cnake.ui.height,(2)) + ((18) * y)));

var G__15490 = cljs.core.next.call(null,seq__15476__$1);
var G__15491 = null;
var G__15492 = (0);
var G__15493 = (0);
seq__15476 = G__15490;
chunk__15477 = G__15491;
count__15478 = G__15492;
i__15479 = G__15493;
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

var seq__15500 = cljs.core.seq.call(null,snake);
var chunk__15501 = null;
var count__15502 = (0);
var i__15503 = (0);
while(true){
if((i__15503 < count__15502)){
var vec__15504 = cljs.core._nth.call(null,chunk__15501,i__15503);
var x = cljs.core.nth.call(null,vec__15504,(0),null);
var y = cljs.core.nth.call(null,vec__15504,(1),null);
cnake.utils.canvas.fill_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

cnake.utils.canvas.stroke_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

var G__15506 = seq__15500;
var G__15507 = chunk__15501;
var G__15508 = count__15502;
var G__15509 = (i__15503 + (1));
seq__15500 = G__15506;
chunk__15501 = G__15507;
count__15502 = G__15508;
i__15503 = G__15509;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15500);
if(temp__4126__auto__){
var seq__15500__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15500__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__15500__$1);
var G__15510 = cljs.core.chunk_rest.call(null,seq__15500__$1);
var G__15511 = c__4475__auto__;
var G__15512 = cljs.core.count.call(null,c__4475__auto__);
var G__15513 = (0);
seq__15500 = G__15510;
chunk__15501 = G__15511;
count__15502 = G__15512;
i__15503 = G__15513;
continue;
} else {
var vec__15505 = cljs.core.first.call(null,seq__15500__$1);
var x = cljs.core.nth.call(null,vec__15505,(0),null);
var y = cljs.core.nth.call(null,vec__15505,(1),null);
cnake.utils.canvas.fill_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

cnake.utils.canvas.stroke_rect_BANG_.call(null,ctx,x,y,cnake.ui.square_size,cnake.ui.square_size);

var G__15514 = cljs.core.next.call(null,seq__15500__$1);
var G__15515 = null;
var G__15516 = (0);
var G__15517 = (0);
seq__15500 = G__15514;
chunk__15501 = G__15515;
count__15502 = G__15516;
i__15503 = G__15517;
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

var seq__15524 = cljs.core.seq.call(null,pills);
var chunk__15525 = null;
var count__15526 = (0);
var i__15527 = (0);
while(true){
if((i__15527 < count__15526)){
var vec__15528 = cljs.core._nth.call(null,chunk__15525,i__15527);
var x = cljs.core.nth.call(null,vec__15528,(0),null);
var y = cljs.core.nth.call(null,vec__15528,(1),null);
cnake.utils.canvas.fill_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

cnake.utils.canvas.stroke_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

var G__15530 = seq__15524;
var G__15531 = chunk__15525;
var G__15532 = count__15526;
var G__15533 = (i__15527 + (1));
seq__15524 = G__15530;
chunk__15525 = G__15531;
count__15526 = G__15532;
i__15527 = G__15533;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15524);
if(temp__4126__auto__){
var seq__15524__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15524__$1)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,seq__15524__$1);
var G__15534 = cljs.core.chunk_rest.call(null,seq__15524__$1);
var G__15535 = c__4475__auto__;
var G__15536 = cljs.core.count.call(null,c__4475__auto__);
var G__15537 = (0);
seq__15524 = G__15534;
chunk__15525 = G__15535;
count__15526 = G__15536;
i__15527 = G__15537;
continue;
} else {
var vec__15529 = cljs.core.first.call(null,seq__15524__$1);
var x = cljs.core.nth.call(null,vec__15529,(0),null);
var y = cljs.core.nth.call(null,vec__15529,(1),null);
cnake.utils.canvas.fill_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

cnake.utils.canvas.stroke_circle_BANG_.call(null,ctx,x,y,cnake.ui.pill_radius);

var G__15538 = cljs.core.next.call(null,seq__15524__$1);
var G__15539 = null;
var G__15540 = (0);
var G__15541 = (0);
seq__15524 = G__15538;
chunk__15525 = G__15539;
count__15526 = G__15540;
i__15527 = G__15541;
continue;
}
} else {
return null;
}
}
break;
}
});
cnake.ui.draw_game_over_BANG_ = (function draw_game_over_BANG_(ctx){
return cnake.ui.draw_text_BANG_.call(null,ctx,"GAME OVER\nPress Enter\nto restart");
});
/**
* Transforms a game snapshot into ui world data
*/
cnake.ui.game_world__GT_ui_world = (function game_world__GT_ui_world(p__15543){
var map__15545 = p__15543;
var map__15545__$1 = ((cljs.core.seq_QMARK_.call(null,map__15545))?cljs.core.apply.call(null,cljs.core.hash_map,map__15545):map__15545);
var game = map__15545__$1;
var pills = cljs.core.get.call(null,map__15545__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__15545__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snake","snake",-244377242),cljs.core.map.call(null,cnake.ui.point__GT_coords,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(snake)),new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.map.call(null,((function (map__15545,map__15545__$1,game,pills,snake){
return (function (p1__15542_SHARP_){
return cnake.ui.move_coords.call(null,cnake.ui.point__GT_coords.call(null,p1__15542_SHARP_),cnake.ui.half_square,cnake.ui.half_square);
});})(map__15545,map__15545__$1,game,pills,snake))
,pills)], null);
});
/**
* Render
*/
cnake.ui.render = (function render(p__15546){
var map__15548 = p__15546;
var map__15548__$1 = ((cljs.core.seq_QMARK_.call(null,map__15548))?cljs.core.apply.call(null,cljs.core.hash_map,map__15548):map__15548);
var world = map__15548__$1;
var pills = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var snake = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
if(cljs.core.truth_(world)){
cnake.utils.canvas.clear_rect_BANG_.call(null,cnake.ui.ctx,(0),(0),cnake.ui.width,cnake.ui.height);

cnake.utils.canvas.save_BANG_.call(null,cnake.ui.ctx);

cnake.utils.canvas.translate_BANG_.call(null,cnake.ui.ctx,0.5,0.5);

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
var c__6456__auto___15667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6456__auto___15667){
return (function (){
var f__6457__auto__ = (function (){var switch__6400__auto__ = ((function (c__6456__auto___15667){
return (function (state_15640){
var state_val_15641 = (state_15640[(1)]);
if((state_val_15641 === (7))){
var inst_15623 = cljs.core.reset_BANG_.call(null,cnake.ui.world,null);
var inst_15624 = cnake.ui.draw_game_over_BANG_.call(null,cnake.ui.ctx);
var state_15640__$1 = (function (){var statearr_15642 = state_15640;
(statearr_15642[(7)] = inst_15623);

return statearr_15642;
})();
var statearr_15643_15668 = state_15640__$1;
(statearr_15643_15668[(2)] = inst_15624);

(statearr_15643_15668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (1))){
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15640__$1,(2),notifos);
} else {
if((state_val_15641 === (4))){
var inst_15638 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15640__$1,inst_15638);
} else {
if((state_val_15641 === (6))){
var inst_15619 = (state_15640[(8)]);
var inst_15620 = cnake.ui.game_world__GT_ui_world.call(null,inst_15619);
var inst_15621 = cljs.core.reset_BANG_.call(null,cnake.ui.world,inst_15620);
var state_15640__$1 = state_15640;
var statearr_15644_15669 = state_15640__$1;
(statearr_15644_15669[(2)] = inst_15621);

(statearr_15644_15669[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (3))){
var inst_15618 = (state_15640[(9)]);
var inst_15615 = (state_15640[(10)]);
var inst_15618__$1 = cljs.core.nth.call(null,inst_15615,(0),null);
var inst_15619 = cljs.core.nth.call(null,inst_15615,(1),null);
var state_15640__$1 = (function (){var statearr_15645 = state_15640;
(statearr_15645[(9)] = inst_15618__$1);

(statearr_15645[(8)] = inst_15619);

return statearr_15645;
})();
var G__15646_15670 = (((inst_15618__$1 instanceof cljs.core.Keyword))?inst_15618__$1.fqn:null);
switch (G__15646_15670) {
case "eat":
var statearr_15647_15672 = state_15640__$1;
(statearr_15647_15672[(1)] = (9));


break;
case "move":
var statearr_15648_15673 = state_15640__$1;
(statearr_15648_15673[(1)] = (8));


break;
case "game-over":
var statearr_15649_15674 = state_15640__$1;
(statearr_15649_15674[(1)] = (7));


break;
case "world":
var statearr_15650_15675 = state_15640__$1;
(statearr_15650_15675[(1)] = (6));


break;
default:
var statearr_15651_15676 = state_15640__$1;
(statearr_15651_15676[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (2))){
var inst_15612 = (state_15640[(2)]);
var inst_15613 = cljs.core.nth.call(null,inst_15612,(0),null);
var inst_15614 = cljs.core.nth.call(null,inst_15612,(1),null);
var inst_15615 = inst_15612;
var state_15640__$1 = (function (){var statearr_15652 = state_15640;
(statearr_15652[(11)] = inst_15613);

(statearr_15652[(10)] = inst_15615);

(statearr_15652[(12)] = inst_15614);

return statearr_15652;
})();
var statearr_15653_15677 = state_15640__$1;
(statearr_15653_15677[(2)] = null);

(statearr_15653_15677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (11))){
var inst_15635 = (state_15640[(2)]);
var inst_15615 = inst_15635;
var state_15640__$1 = (function (){var statearr_15654 = state_15640;
(statearr_15654[(10)] = inst_15615);

return statearr_15654;
})();
var statearr_15655_15678 = state_15640__$1;
(statearr_15655_15678[(2)] = null);

(statearr_15655_15678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (9))){
var state_15640__$1 = state_15640;
var statearr_15656_15679 = state_15640__$1;
(statearr_15656_15679[(2)] = null);

(statearr_15656_15679[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (5))){
var inst_15633 = (state_15640[(2)]);
var state_15640__$1 = (function (){var statearr_15657 = state_15640;
(statearr_15657[(13)] = inst_15633);

return statearr_15657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15640__$1,(11),notifos);
} else {
if((state_val_15641 === (10))){
var inst_15618 = (state_15640[(9)]);
var inst_15628 = [cljs.core.str("Unrecognized UI command: "),cljs.core.str(inst_15618)].join('');
var inst_15629 = (new Error(inst_15628));
var inst_15630 = cljs.core.println.call(null,inst_15629);
var state_15640__$1 = state_15640;
var statearr_15658_15680 = state_15640__$1;
(statearr_15658_15680[(2)] = inst_15630);

(statearr_15658_15680[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (8))){
var state_15640__$1 = state_15640;
var statearr_15659_15681 = state_15640__$1;
(statearr_15659_15681[(2)] = null);

(statearr_15659_15681[(1)] = (5));


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
});})(c__6456__auto___15667))
;
return ((function (switch__6400__auto__,c__6456__auto___15667){
return (function() {
var state_machine__6401__auto__ = null;
var state_machine__6401__auto____0 = (function (){
var statearr_15663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15663[(0)] = state_machine__6401__auto__);

(statearr_15663[(1)] = (1));

return statearr_15663;
});
var state_machine__6401__auto____1 = (function (state_15640){
while(true){
var ret_value__6402__auto__ = (function (){try{while(true){
var result__6403__auto__ = switch__6400__auto__.call(null,state_15640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6403__auto__;
}
break;
}
}catch (e15664){if((e15664 instanceof Object)){
var ex__6404__auto__ = e15664;
var statearr_15665_15682 = state_15640;
(statearr_15665_15682[(5)] = ex__6404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15683 = state_15640;
state_15640 = G__15683;
continue;
} else {
return ret_value__6402__auto__;
}
break;
}
});
state_machine__6401__auto__ = function(state_15640){
switch(arguments.length){
case 0:
return state_machine__6401__auto____0.call(this);
case 1:
return state_machine__6401__auto____1.call(this,state_15640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6401__auto____0;
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6401__auto____1;
return state_machine__6401__auto__;
})()
;})(switch__6400__auto__,c__6456__auto___15667))
})();
var state__6458__auto__ = (function (){var statearr_15666 = f__6457__auto__.call(null);
(statearr_15666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6456__auto___15667);

return statearr_15666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6458__auto__);
});})(c__6456__auto___15667))
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
return (function (p1__15684_SHARP_){
if(cljs.core.truth_(prevent_default)){
p1__15684_SHARP_.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,ev_chan,parse_event.call(null,p1__15684_SHARP_));
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
var c__6456__auto___15855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6456__auto___15855,moves,cmds){
return (function (){
var f__6457__auto__ = (function (){var switch__6400__auto__ = ((function (c__6456__auto___15855,moves,cmds){
return (function (state_15826){
var state_val_15827 = (state_15826[(1)]);
if((state_val_15827 === (7))){
var inst_15819 = (state_15826[(2)]);
var state_15826__$1 = (function (){var statearr_15828 = state_15826;
(statearr_15828[(7)] = inst_15819);

return statearr_15828;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15826__$1,(18),moves);
} else {
if((state_val_15827 === (1))){
var inst_15770 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_15771 = [(0),(0)];
var inst_15772 = cljs.core.PersistentHashMap.fromArrays(inst_15770,inst_15771);
var state_15826__$1 = (function (){var statearr_15829 = state_15826;
(statearr_15829[(8)] = inst_15772);

return statearr_15829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15826__$1,(2),moves);
} else {
if((state_val_15827 === (4))){
var inst_15824 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15826__$1,inst_15824);
} else {
if((state_val_15827 === (15))){
var inst_15817 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15830_15856 = state_15826__$1;
(statearr_15830_15856[(2)] = inst_15817);

(statearr_15830_15856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (13))){
var inst_15809 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_15826__$1 = state_15826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15826__$1,(16),cmds,inst_15809);
} else {
if((state_val_15827 === (6))){
var inst_15786 = (state_15826[(9)]);
var inst_15806 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_15786);
var inst_15807 = ((0) > inst_15806);
var state_15826__$1 = state_15826;
if(cljs.core.truth_(inst_15807)){
var statearr_15831_15857 = state_15826__$1;
(statearr_15831_15857[(1)] = (13));

} else {
var statearr_15832_15858 = state_15826__$1;
(statearr_15832_15858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (17))){
var inst_15815 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15833_15859 = state_15826__$1;
(statearr_15833_15859[(2)] = inst_15815);

(statearr_15833_15859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (3))){
var inst_15786 = (state_15826[(9)]);
var inst_15776 = (state_15826[(10)]);
var inst_15775 = (state_15826[(11)]);
var inst_15778 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_15779 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_15776);
var inst_15780 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_15775);
var inst_15781 = (inst_15779 - inst_15780);
var inst_15782 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_15776);
var inst_15783 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_15775);
var inst_15784 = (inst_15782 - inst_15783);
var inst_15785 = [inst_15781,inst_15784];
var inst_15786__$1 = cljs.core.PersistentHashMap.fromArrays(inst_15778,inst_15785);
var inst_15787 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_15786__$1);
var inst_15788 = Math.abs(inst_15787);
var inst_15789 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_15786__$1);
var inst_15790 = Math.abs(inst_15789);
var inst_15791 = (inst_15788 > inst_15790);
var state_15826__$1 = (function (){var statearr_15834 = state_15826;
(statearr_15834[(9)] = inst_15786__$1);

return statearr_15834;
})();
if(cljs.core.truth_(inst_15791)){
var statearr_15835_15860 = state_15826__$1;
(statearr_15835_15860[(1)] = (5));

} else {
var statearr_15836_15861 = state_15826__$1;
(statearr_15836_15861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (12))){
var inst_15802 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15837_15862 = state_15826__$1;
(statearr_15837_15862[(2)] = inst_15802);

(statearr_15837_15862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (2))){
var inst_15772 = (state_15826[(8)]);
var inst_15774 = (state_15826[(2)]);
var inst_15775 = inst_15772;
var inst_15776 = inst_15774;
var state_15826__$1 = (function (){var statearr_15838 = state_15826;
(statearr_15838[(10)] = inst_15776);

(statearr_15838[(11)] = inst_15775);

return statearr_15838;
})();
var statearr_15839_15863 = state_15826__$1;
(statearr_15839_15863[(2)] = null);

(statearr_15839_15863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (11))){
var inst_15798 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15840_15864 = state_15826__$1;
(statearr_15840_15864[(2)] = inst_15798);

(statearr_15840_15864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (9))){
var inst_15800 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var state_15826__$1 = state_15826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15826__$1,(12),cmds,inst_15800);
} else {
if((state_val_15827 === (5))){
var inst_15786 = (state_15826[(9)]);
var inst_15793 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_15786);
var inst_15794 = ((0) > inst_15793);
var state_15826__$1 = state_15826;
if(cljs.core.truth_(inst_15794)){
var statearr_15841_15865 = state_15826__$1;
(statearr_15841_15865[(1)] = (8));

} else {
var statearr_15842_15866 = state_15826__$1;
(statearr_15842_15866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (14))){
var inst_15813 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"down","down",1565245570));
var state_15826__$1 = state_15826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15826__$1,(17),cmds,inst_15813);
} else {
if((state_val_15827 === (16))){
var inst_15811 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15844_15867 = state_15826__$1;
(statearr_15844_15867[(2)] = inst_15811);

(statearr_15844_15867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (10))){
var inst_15804 = (state_15826[(2)]);
var state_15826__$1 = state_15826;
var statearr_15845_15868 = state_15826__$1;
(statearr_15845_15868[(2)] = inst_15804);

(statearr_15845_15868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (18))){
var inst_15776 = (state_15826[(10)]);
var inst_15821 = (state_15826[(2)]);
var tmp15843 = inst_15776;
var inst_15775 = tmp15843;
var inst_15776__$1 = inst_15821;
var state_15826__$1 = (function (){var statearr_15846 = state_15826;
(statearr_15846[(10)] = inst_15776__$1);

(statearr_15846[(11)] = inst_15775);

return statearr_15846;
})();
var statearr_15847_15869 = state_15826__$1;
(statearr_15847_15869[(2)] = null);

(statearr_15847_15869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15827 === (8))){
var inst_15796 = cnake.ui.key_down__GT_command.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
var state_15826__$1 = state_15826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15826__$1,(11),cmds,inst_15796);
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
});})(c__6456__auto___15855,moves,cmds))
;
return ((function (switch__6400__auto__,c__6456__auto___15855,moves,cmds){
return (function() {
var state_machine__6401__auto__ = null;
var state_machine__6401__auto____0 = (function (){
var statearr_15851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15851[(0)] = state_machine__6401__auto__);

(statearr_15851[(1)] = (1));

return statearr_15851;
});
var state_machine__6401__auto____1 = (function (state_15826){
while(true){
var ret_value__6402__auto__ = (function (){try{while(true){
var result__6403__auto__ = switch__6400__auto__.call(null,state_15826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6403__auto__;
}
break;
}
}catch (e15852){if((e15852 instanceof Object)){
var ex__6404__auto__ = e15852;
var statearr_15853_15870 = state_15826;
(statearr_15853_15870[(5)] = ex__6404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15871 = state_15826;
state_15826 = G__15871;
continue;
} else {
return ret_value__6402__auto__;
}
break;
}
});
state_machine__6401__auto__ = function(state_15826){
switch(arguments.length){
case 0:
return state_machine__6401__auto____0.call(this);
case 1:
return state_machine__6401__auto____1.call(this,state_15826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6401__auto____0;
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6401__auto____1;
return state_machine__6401__auto__;
})()
;})(switch__6400__auto__,c__6456__auto___15855,moves,cmds))
})();
var state__6458__auto__ = (function (){var statearr_15854 = f__6457__auto__.call(null);
(statearr_15854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6456__auto___15855);

return statearr_15854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6458__auto__);
});})(c__6456__auto___15855,moves,cmds))
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