// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.utils.canvas');
goog.require('cljs.core');
cnake.utils.canvas.context = (function context(canvas){
return canvas.getContext("2d");
});
cnake.utils.canvas.set_dimensions_BANG_ = (function set_dimensions_BANG_(canvas,w,h){
canvas.width = w;

return canvas.height = h;
});
/**
* Returns a string with the hsla color.
* h(ue) is a value between 0 and 360
* s(aturation) is a value between 0 and 100
* l(ightness) is a value between 0 and 100
* a(lpha) [optional] between 0 and 1
*/
cnake.utils.canvas.hsla = (function() {
var hsla = null;
var hsla__3 = (function (h,s,l){
return hsla.call(null,h,s,l,(1));
});
var hsla__4 = (function (h,s,l,a){
return [cljs.core.str("hsla("),cljs.core.str(h),cljs.core.str(","),cljs.core.str(s),cljs.core.str("%,"),cljs.core.str(l),cljs.core.str("%,"),cljs.core.str(a),cljs.core.str(")")].join('');
});
hsla = function(h,s,l,a){
switch(arguments.length){
case 3:
return hsla__3.call(this,h,s,l);
case 4:
return hsla__4.call(this,h,s,l,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hsla.cljs$core$IFn$_invoke$arity$3 = hsla__3;
hsla.cljs$core$IFn$_invoke$arity$4 = hsla__4;
return hsla;
})()
;
cnake.utils.canvas.save_BANG_ = (function save_BANG_(ctx){
return ctx.save();
});
cnake.utils.canvas.restore_BANG_ = (function restore_BANG_(ctx){
return ctx.restore();
});
cnake.utils.canvas.translate_BANG_ = (function translate_BANG_(ctx,x,y){
return ctx.translate(x,y);
});
cnake.utils.canvas.fill_style_BANG_ = (function fill_style_BANG_(ctx,color){
return ctx.fillStyle = cljs.core.apply.call(null,cnake.utils.canvas.hsla,color);
});
cnake.utils.canvas.clear_rect_BANG_ = (function clear_rect_BANG_(ctx,x,y,w,h){
return ctx.clearRect(x,y,w,h);
});
cnake.utils.canvas.fill_rect_BANG_ = (function fill_rect_BANG_(ctx,x,y,w,h){
return ctx.fillRect(x,y,w,h);
});
cnake.utils.canvas.stroke_rect_BANG_ = (function stroke_rect_BANG_(ctx,x,y,w,h){
return ctx.strokeRect(x,y,w,h);
});
cnake.utils.canvas.deg360 = ((2) * Math.PI);
cnake.utils.canvas.fill_circle_BANG_ = (function fill_circle_BANG_(ctx,x,y,r){
var G__10681 = ctx;
G__10681.beginPath();

G__10681.arc(x,y,r,(0),cnake.utils.canvas.deg360,true);

G__10681.fill();

return G__10681;
});
cnake.utils.canvas.stroke_circle_BANG_ = (function stroke_circle_BANG_(ctx,x,y,r){
var G__10683 = ctx;
G__10683.beginPath();

G__10683.arc(x,y,r,(0),cnake.utils.canvas.deg360,true);

G__10683.stroke();

return G__10683;
});
/**
* Returns a string with the font parsed.
*/
cnake.utils.canvas.font = (function font(font__$1,style,size){
return [cljs.core.str(style),cljs.core.str(" "),cljs.core.str(size),cljs.core.str("pt "),cljs.core.str(font__$1)].join('');
});
cnake.utils.canvas.font_BANG_ = (function font_BANG_(ctx,family,style,size){
return ctx.font = cnake.utils.canvas.font.call(null,family,style,size);
});
cnake.utils.canvas.text_align_BANG_ = (function text_align_BANG_(ctx,align){
return ctx.textAlign = align;
});
cnake.utils.canvas.fill_text_BANG_ = (function fill_text_BANG_(ctx,text,x,y){
return ctx.fillText(text,x,y);
});
cnake.utils.canvas.request_animation_frame = (function request_animation_frame(f){
return requestAnimationFrame(f);
});

//# sourceMappingURL=canvas.js.map