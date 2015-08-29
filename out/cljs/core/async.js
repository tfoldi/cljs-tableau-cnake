// Compiled by ClojureScript 0.0-2505
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t12122 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12122 = (function (f,fn_handler,meta12123){
this.f = f;
this.fn_handler = fn_handler;
this.meta12123 = meta12123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12122.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12124){
var self__ = this;
var _12124__$1 = this;
return self__.meta12123;
});

cljs.core.async.t12122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12124,meta12123__$1){
var self__ = this;
var _12124__$1 = this;
return (new cljs.core.async.t12122(self__.f,self__.fn_handler,meta12123__$1));
});

cljs.core.async.t12122.cljs$lang$type = true;

cljs.core.async.t12122.cljs$lang$ctorStr = "cljs.core.async/t12122";

cljs.core.async.t12122.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t12122");
});

cljs.core.async.__GT_t12122 = (function __GT_t12122(f__$1,fn_handler__$1,meta12123){
return (new cljs.core.async.t12122(f__$1,fn_handler__$1,meta12123));
});

}

return (new cljs.core.async.t12122(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__12126 = buff;
if(G__12126){
var bit__4369__auto__ = null;
if(cljs.core.truth_((function (){var or__3688__auto__ = bit__4369__auto__;
if(cljs.core.truth_(or__3688__auto__)){
return or__3688__auto__;
} else {
return G__12126.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12126.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12126);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12126);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12127 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12127);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12127,ret){
return (function (){
return fn1.call(null,val_12127);
});})(val_12127,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4575__auto___12128 = n;
var x_12129 = (0);
while(true){
if((x_12129 < n__4575__auto___12128)){
(a[x_12129] = (0));

var G__12130 = (x_12129 + (1));
x_12129 = G__12130;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12131 = (i + (1));
i = G__12131;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12135 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12135 = (function (flag,alt_flag,meta12136){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12136 = meta12136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12135.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12137){
var self__ = this;
var _12137__$1 = this;
return self__.meta12136;
});})(flag))
;

cljs.core.async.t12135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12137,meta12136__$1){
var self__ = this;
var _12137__$1 = this;
return (new cljs.core.async.t12135(self__.flag,self__.alt_flag,meta12136__$1));
});})(flag))
;

cljs.core.async.t12135.cljs$lang$type = true;

cljs.core.async.t12135.cljs$lang$ctorStr = "cljs.core.async/t12135";

cljs.core.async.t12135.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t12135");
});})(flag))
;

cljs.core.async.__GT_t12135 = ((function (flag){
return (function __GT_t12135(flag__$1,alt_flag__$1,meta12136){
return (new cljs.core.async.t12135(flag__$1,alt_flag__$1,meta12136));
});})(flag))
;

}

return (new cljs.core.async.t12135(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t12141 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12141 = (function (cb,flag,alt_handler,meta12142){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12142 = meta12142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12141.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12143){
var self__ = this;
var _12143__$1 = this;
return self__.meta12142;
});

cljs.core.async.t12141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12143,meta12142__$1){
var self__ = this;
var _12143__$1 = this;
return (new cljs.core.async.t12141(self__.cb,self__.flag,self__.alt_handler,meta12142__$1));
});

cljs.core.async.t12141.cljs$lang$type = true;

cljs.core.async.t12141.cljs$lang$ctorStr = "cljs.core.async/t12141";

cljs.core.async.t12141.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t12141");
});

cljs.core.async.__GT_t12141 = (function __GT_t12141(cb__$1,flag__$1,alt_handler__$1,meta12142){
return (new cljs.core.async.t12141(cb__$1,flag__$1,alt_handler__$1,meta12142));
});

}

return (new cljs.core.async.t12141(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12144_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12144_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12145_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12145_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3688__auto__ = wport;
if(cljs.core.truth_(or__3688__auto__)){
return or__3688__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12146 = (i + (1));
i = G__12146;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3688__auto__ = ret;
if(cljs.core.truth_(or__3688__auto__)){
return or__3688__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3676__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3676__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3676__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12147){
var map__12149 = p__12147;
var map__12149__$1 = ((cljs.core.seq_QMARK_.call(null,map__12149))?cljs.core.apply.call(null,cljs.core.hash_map,map__12149):map__12149);
var opts = map__12149__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12147 = null;
if (arguments.length > 1) {
  p__12147 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__12147);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12150){
var ports = cljs.core.first(arglist__12150);
var p__12147 = cljs.core.rest(arglist__12150);
return alts_BANG___delegate(ports,p__12147);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__5911__auto___12245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___12245){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___12245){
return (function (state_12221){
var state_val_12222 = (state_12221[(1)]);
if((state_val_12222 === (7))){
var inst_12217 = (state_12221[(2)]);
var state_12221__$1 = state_12221;
var statearr_12223_12246 = state_12221__$1;
(statearr_12223_12246[(2)] = inst_12217);

(statearr_12223_12246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (1))){
var state_12221__$1 = state_12221;
var statearr_12224_12247 = state_12221__$1;
(statearr_12224_12247[(2)] = null);

(statearr_12224_12247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (4))){
var inst_12200 = (state_12221[(7)]);
var inst_12200__$1 = (state_12221[(2)]);
var inst_12201 = (inst_12200__$1 == null);
var state_12221__$1 = (function (){var statearr_12225 = state_12221;
(statearr_12225[(7)] = inst_12200__$1);

return statearr_12225;
})();
if(cljs.core.truth_(inst_12201)){
var statearr_12226_12248 = state_12221__$1;
(statearr_12226_12248[(1)] = (5));

} else {
var statearr_12227_12249 = state_12221__$1;
(statearr_12227_12249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (13))){
var state_12221__$1 = state_12221;
var statearr_12228_12250 = state_12221__$1;
(statearr_12228_12250[(2)] = null);

(statearr_12228_12250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (6))){
var inst_12200 = (state_12221[(7)]);
var state_12221__$1 = state_12221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12221__$1,(11),to,inst_12200);
} else {
if((state_val_12222 === (3))){
var inst_12219 = (state_12221[(2)]);
var state_12221__$1 = state_12221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12221__$1,inst_12219);
} else {
if((state_val_12222 === (12))){
var state_12221__$1 = state_12221;
var statearr_12229_12251 = state_12221__$1;
(statearr_12229_12251[(2)] = null);

(statearr_12229_12251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (2))){
var state_12221__$1 = state_12221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12221__$1,(4),from);
} else {
if((state_val_12222 === (11))){
var inst_12210 = (state_12221[(2)]);
var state_12221__$1 = state_12221;
if(cljs.core.truth_(inst_12210)){
var statearr_12230_12252 = state_12221__$1;
(statearr_12230_12252[(1)] = (12));

} else {
var statearr_12231_12253 = state_12221__$1;
(statearr_12231_12253[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (9))){
var state_12221__$1 = state_12221;
var statearr_12232_12254 = state_12221__$1;
(statearr_12232_12254[(2)] = null);

(statearr_12232_12254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (5))){
var state_12221__$1 = state_12221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12233_12255 = state_12221__$1;
(statearr_12233_12255[(1)] = (8));

} else {
var statearr_12234_12256 = state_12221__$1;
(statearr_12234_12256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (14))){
var inst_12215 = (state_12221[(2)]);
var state_12221__$1 = state_12221;
var statearr_12235_12257 = state_12221__$1;
(statearr_12235_12257[(2)] = inst_12215);

(statearr_12235_12257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (10))){
var inst_12207 = (state_12221[(2)]);
var state_12221__$1 = state_12221;
var statearr_12236_12258 = state_12221__$1;
(statearr_12236_12258[(2)] = inst_12207);

(statearr_12236_12258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12222 === (8))){
var inst_12204 = cljs.core.async.close_BANG_.call(null,to);
var state_12221__$1 = state_12221;
var statearr_12237_12259 = state_12221__$1;
(statearr_12237_12259[(2)] = inst_12204);

(statearr_12237_12259[(1)] = (10));


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
});})(c__5911__auto___12245))
;
return ((function (switch__5896__auto__,c__5911__auto___12245){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12241 = [null,null,null,null,null,null,null,null];
(statearr_12241[(0)] = state_machine__5897__auto__);

(statearr_12241[(1)] = (1));

return statearr_12241;
});
var state_machine__5897__auto____1 = (function (state_12221){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12242){if((e12242 instanceof Object)){
var ex__5900__auto__ = e12242;
var statearr_12243_12260 = state_12221;
(statearr_12243_12260[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12261 = state_12221;
state_12221 = G__12261;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12221){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___12245))
})();
var state__5913__auto__ = (function (){var statearr_12244 = f__5912__auto__.call(null);
(statearr_12244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12245);

return statearr_12244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___12245))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12445){
var vec__12446 = p__12445;
var v = cljs.core.nth.call(null,vec__12446,(0),null);
var p = cljs.core.nth.call(null,vec__12446,(1),null);
var job = vec__12446;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5911__auto___12628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___12628,res,vec__12446,v,p,job,jobs,results){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___12628,res,vec__12446,v,p,job,jobs,results){
return (function (state_12451){
var state_val_12452 = (state_12451[(1)]);
if((state_val_12452 === (2))){
var inst_12448 = (state_12451[(2)]);
var inst_12449 = cljs.core.async.close_BANG_.call(null,res);
var state_12451__$1 = (function (){var statearr_12453 = state_12451;
(statearr_12453[(7)] = inst_12448);

return statearr_12453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12451__$1,inst_12449);
} else {
if((state_val_12452 === (1))){
var state_12451__$1 = state_12451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12451__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5911__auto___12628,res,vec__12446,v,p,job,jobs,results))
;
return ((function (switch__5896__auto__,c__5911__auto___12628,res,vec__12446,v,p,job,jobs,results){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12457 = [null,null,null,null,null,null,null,null];
(statearr_12457[(0)] = state_machine__5897__auto__);

(statearr_12457[(1)] = (1));

return statearr_12457;
});
var state_machine__5897__auto____1 = (function (state_12451){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12458){if((e12458 instanceof Object)){
var ex__5900__auto__ = e12458;
var statearr_12459_12629 = state_12451;
(statearr_12459_12629[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12630 = state_12451;
state_12451 = G__12630;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12451){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___12628,res,vec__12446,v,p,job,jobs,results))
})();
var state__5913__auto__ = (function (){var statearr_12460 = f__5912__auto__.call(null);
(statearr_12460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12628);

return statearr_12460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___12628,res,vec__12446,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12461){
var vec__12462 = p__12461;
var v = cljs.core.nth.call(null,vec__12462,(0),null);
var p = cljs.core.nth.call(null,vec__12462,(1),null);
var job = vec__12462;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4575__auto___12631 = n;
var __12632 = (0);
while(true){
if((__12632 < n__4575__auto___12631)){
var G__12463_12633 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12463_12633) {
case "async":
var c__5911__auto___12635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12632,c__5911__auto___12635,G__12463_12633,n__4575__auto___12631,jobs,results,process,async){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (__12632,c__5911__auto___12635,G__12463_12633,n__4575__auto___12631,jobs,results,process,async){
return (function (state_12476){
var state_val_12477 = (state_12476[(1)]);
if((state_val_12477 === (7))){
var inst_12472 = (state_12476[(2)]);
var state_12476__$1 = state_12476;
var statearr_12478_12636 = state_12476__$1;
(statearr_12478_12636[(2)] = inst_12472);

(statearr_12478_12636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (6))){
var state_12476__$1 = state_12476;
var statearr_12479_12637 = state_12476__$1;
(statearr_12479_12637[(2)] = null);

(statearr_12479_12637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (5))){
var state_12476__$1 = state_12476;
var statearr_12480_12638 = state_12476__$1;
(statearr_12480_12638[(2)] = null);

(statearr_12480_12638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (4))){
var inst_12466 = (state_12476[(2)]);
var inst_12467 = async.call(null,inst_12466);
var state_12476__$1 = state_12476;
if(cljs.core.truth_(inst_12467)){
var statearr_12481_12639 = state_12476__$1;
(statearr_12481_12639[(1)] = (5));

} else {
var statearr_12482_12640 = state_12476__$1;
(statearr_12482_12640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12477 === (3))){
var inst_12474 = (state_12476[(2)]);
var state_12476__$1 = state_12476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12476__$1,inst_12474);
} else {
if((state_val_12477 === (2))){
var state_12476__$1 = state_12476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12476__$1,(4),jobs);
} else {
if((state_val_12477 === (1))){
var state_12476__$1 = state_12476;
var statearr_12483_12641 = state_12476__$1;
(statearr_12483_12641[(2)] = null);

(statearr_12483_12641[(1)] = (2));


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
});})(__12632,c__5911__auto___12635,G__12463_12633,n__4575__auto___12631,jobs,results,process,async))
;
return ((function (__12632,switch__5896__auto__,c__5911__auto___12635,G__12463_12633,n__4575__auto___12631,jobs,results,process,async){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12487 = [null,null,null,null,null,null,null];
(statearr_12487[(0)] = state_machine__5897__auto__);

(statearr_12487[(1)] = (1));

return statearr_12487;
});
var state_machine__5897__auto____1 = (function (state_12476){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12488){if((e12488 instanceof Object)){
var ex__5900__auto__ = e12488;
var statearr_12489_12642 = state_12476;
(statearr_12489_12642[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12643 = state_12476;
state_12476 = G__12643;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12476){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(__12632,switch__5896__auto__,c__5911__auto___12635,G__12463_12633,n__4575__auto___12631,jobs,results,process,async))
})();
var state__5913__auto__ = (function (){var statearr_12490 = f__5912__auto__.call(null);
(statearr_12490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12635);

return statearr_12490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(__12632,c__5911__auto___12635,G__12463_12633,n__4575__auto___12631,jobs,results,process,async))
);


break;
case "compute":
var c__5911__auto___12644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12632,c__5911__auto___12644,G__12463_12633,n__4575__auto___12631,jobs,results,process,async){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (__12632,c__5911__auto___12644,G__12463_12633,n__4575__auto___12631,jobs,results,process,async){
return (function (state_12503){
var state_val_12504 = (state_12503[(1)]);
if((state_val_12504 === (7))){
var inst_12499 = (state_12503[(2)]);
var state_12503__$1 = state_12503;
var statearr_12505_12645 = state_12503__$1;
(statearr_12505_12645[(2)] = inst_12499);

(statearr_12505_12645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (6))){
var state_12503__$1 = state_12503;
var statearr_12506_12646 = state_12503__$1;
(statearr_12506_12646[(2)] = null);

(statearr_12506_12646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (5))){
var state_12503__$1 = state_12503;
var statearr_12507_12647 = state_12503__$1;
(statearr_12507_12647[(2)] = null);

(statearr_12507_12647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (4))){
var inst_12493 = (state_12503[(2)]);
var inst_12494 = process.call(null,inst_12493);
var state_12503__$1 = state_12503;
if(cljs.core.truth_(inst_12494)){
var statearr_12508_12648 = state_12503__$1;
(statearr_12508_12648[(1)] = (5));

} else {
var statearr_12509_12649 = state_12503__$1;
(statearr_12509_12649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (3))){
var inst_12501 = (state_12503[(2)]);
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12503__$1,inst_12501);
} else {
if((state_val_12504 === (2))){
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12503__$1,(4),jobs);
} else {
if((state_val_12504 === (1))){
var state_12503__$1 = state_12503;
var statearr_12510_12650 = state_12503__$1;
(statearr_12510_12650[(2)] = null);

(statearr_12510_12650[(1)] = (2));


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
});})(__12632,c__5911__auto___12644,G__12463_12633,n__4575__auto___12631,jobs,results,process,async))
;
return ((function (__12632,switch__5896__auto__,c__5911__auto___12644,G__12463_12633,n__4575__auto___12631,jobs,results,process,async){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12514 = [null,null,null,null,null,null,null];
(statearr_12514[(0)] = state_machine__5897__auto__);

(statearr_12514[(1)] = (1));

return statearr_12514;
});
var state_machine__5897__auto____1 = (function (state_12503){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12515){if((e12515 instanceof Object)){
var ex__5900__auto__ = e12515;
var statearr_12516_12651 = state_12503;
(statearr_12516_12651[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12652 = state_12503;
state_12503 = G__12652;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(__12632,switch__5896__auto__,c__5911__auto___12644,G__12463_12633,n__4575__auto___12631,jobs,results,process,async))
})();
var state__5913__auto__ = (function (){var statearr_12517 = f__5912__auto__.call(null);
(statearr_12517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12644);

return statearr_12517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(__12632,c__5911__auto___12644,G__12463_12633,n__4575__auto___12631,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12653 = (__12632 + (1));
__12632 = G__12653;
continue;
} else {
}
break;
}

var c__5911__auto___12654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___12654,jobs,results,process,async){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___12654,jobs,results,process,async){
return (function (state_12539){
var state_val_12540 = (state_12539[(1)]);
if((state_val_12540 === (9))){
var inst_12532 = (state_12539[(2)]);
var state_12539__$1 = (function (){var statearr_12541 = state_12539;
(statearr_12541[(7)] = inst_12532);

return statearr_12541;
})();
var statearr_12542_12655 = state_12539__$1;
(statearr_12542_12655[(2)] = null);

(statearr_12542_12655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12540 === (8))){
var inst_12525 = (state_12539[(8)]);
var inst_12530 = (state_12539[(2)]);
var state_12539__$1 = (function (){var statearr_12543 = state_12539;
(statearr_12543[(9)] = inst_12530);

return statearr_12543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12539__$1,(9),results,inst_12525);
} else {
if((state_val_12540 === (7))){
var inst_12535 = (state_12539[(2)]);
var state_12539__$1 = state_12539;
var statearr_12544_12656 = state_12539__$1;
(statearr_12544_12656[(2)] = inst_12535);

(statearr_12544_12656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12540 === (6))){
var inst_12525 = (state_12539[(8)]);
var inst_12520 = (state_12539[(10)]);
var inst_12525__$1 = cljs.core.async.chan.call(null,(1));
var inst_12526 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12527 = [inst_12520,inst_12525__$1];
var inst_12528 = (new cljs.core.PersistentVector(null,2,(5),inst_12526,inst_12527,null));
var state_12539__$1 = (function (){var statearr_12545 = state_12539;
(statearr_12545[(8)] = inst_12525__$1);

return statearr_12545;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12539__$1,(8),jobs,inst_12528);
} else {
if((state_val_12540 === (5))){
var inst_12523 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12539__$1 = state_12539;
var statearr_12546_12657 = state_12539__$1;
(statearr_12546_12657[(2)] = inst_12523);

(statearr_12546_12657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12540 === (4))){
var inst_12520 = (state_12539[(10)]);
var inst_12520__$1 = (state_12539[(2)]);
var inst_12521 = (inst_12520__$1 == null);
var state_12539__$1 = (function (){var statearr_12547 = state_12539;
(statearr_12547[(10)] = inst_12520__$1);

return statearr_12547;
})();
if(cljs.core.truth_(inst_12521)){
var statearr_12548_12658 = state_12539__$1;
(statearr_12548_12658[(1)] = (5));

} else {
var statearr_12549_12659 = state_12539__$1;
(statearr_12549_12659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12540 === (3))){
var inst_12537 = (state_12539[(2)]);
var state_12539__$1 = state_12539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12539__$1,inst_12537);
} else {
if((state_val_12540 === (2))){
var state_12539__$1 = state_12539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12539__$1,(4),from);
} else {
if((state_val_12540 === (1))){
var state_12539__$1 = state_12539;
var statearr_12550_12660 = state_12539__$1;
(statearr_12550_12660[(2)] = null);

(statearr_12550_12660[(1)] = (2));


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
});})(c__5911__auto___12654,jobs,results,process,async))
;
return ((function (switch__5896__auto__,c__5911__auto___12654,jobs,results,process,async){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12554[(0)] = state_machine__5897__auto__);

(statearr_12554[(1)] = (1));

return statearr_12554;
});
var state_machine__5897__auto____1 = (function (state_12539){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12555){if((e12555 instanceof Object)){
var ex__5900__auto__ = e12555;
var statearr_12556_12661 = state_12539;
(statearr_12556_12661[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12662 = state_12539;
state_12539 = G__12662;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12539){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___12654,jobs,results,process,async))
})();
var state__5913__auto__ = (function (){var statearr_12557 = f__5912__auto__.call(null);
(statearr_12557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12654);

return statearr_12557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___12654,jobs,results,process,async))
);


var c__5911__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto__,jobs,results,process,async){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto__,jobs,results,process,async){
return (function (state_12595){
var state_val_12596 = (state_12595[(1)]);
if((state_val_12596 === (7))){
var inst_12591 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12597_12663 = state_12595__$1;
(statearr_12597_12663[(2)] = inst_12591);

(statearr_12597_12663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (20))){
var state_12595__$1 = state_12595;
var statearr_12598_12664 = state_12595__$1;
(statearr_12598_12664[(2)] = null);

(statearr_12598_12664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (1))){
var state_12595__$1 = state_12595;
var statearr_12599_12665 = state_12595__$1;
(statearr_12599_12665[(2)] = null);

(statearr_12599_12665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (4))){
var inst_12560 = (state_12595[(7)]);
var inst_12560__$1 = (state_12595[(2)]);
var inst_12561 = (inst_12560__$1 == null);
var state_12595__$1 = (function (){var statearr_12600 = state_12595;
(statearr_12600[(7)] = inst_12560__$1);

return statearr_12600;
})();
if(cljs.core.truth_(inst_12561)){
var statearr_12601_12666 = state_12595__$1;
(statearr_12601_12666[(1)] = (5));

} else {
var statearr_12602_12667 = state_12595__$1;
(statearr_12602_12667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (15))){
var inst_12573 = (state_12595[(8)]);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12595__$1,(18),to,inst_12573);
} else {
if((state_val_12596 === (21))){
var inst_12586 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12603_12668 = state_12595__$1;
(statearr_12603_12668[(2)] = inst_12586);

(statearr_12603_12668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (13))){
var inst_12588 = (state_12595[(2)]);
var state_12595__$1 = (function (){var statearr_12604 = state_12595;
(statearr_12604[(9)] = inst_12588);

return statearr_12604;
})();
var statearr_12605_12669 = state_12595__$1;
(statearr_12605_12669[(2)] = null);

(statearr_12605_12669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (6))){
var inst_12560 = (state_12595[(7)]);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12595__$1,(11),inst_12560);
} else {
if((state_val_12596 === (17))){
var inst_12581 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
if(cljs.core.truth_(inst_12581)){
var statearr_12606_12670 = state_12595__$1;
(statearr_12606_12670[(1)] = (19));

} else {
var statearr_12607_12671 = state_12595__$1;
(statearr_12607_12671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (3))){
var inst_12593 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12595__$1,inst_12593);
} else {
if((state_val_12596 === (12))){
var inst_12570 = (state_12595[(10)]);
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12595__$1,(14),inst_12570);
} else {
if((state_val_12596 === (2))){
var state_12595__$1 = state_12595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12595__$1,(4),results);
} else {
if((state_val_12596 === (19))){
var state_12595__$1 = state_12595;
var statearr_12608_12672 = state_12595__$1;
(statearr_12608_12672[(2)] = null);

(statearr_12608_12672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (11))){
var inst_12570 = (state_12595[(2)]);
var state_12595__$1 = (function (){var statearr_12609 = state_12595;
(statearr_12609[(10)] = inst_12570);

return statearr_12609;
})();
var statearr_12610_12673 = state_12595__$1;
(statearr_12610_12673[(2)] = null);

(statearr_12610_12673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (9))){
var state_12595__$1 = state_12595;
var statearr_12611_12674 = state_12595__$1;
(statearr_12611_12674[(2)] = null);

(statearr_12611_12674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (5))){
var state_12595__$1 = state_12595;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12612_12675 = state_12595__$1;
(statearr_12612_12675[(1)] = (8));

} else {
var statearr_12613_12676 = state_12595__$1;
(statearr_12613_12676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (14))){
var inst_12575 = (state_12595[(11)]);
var inst_12573 = (state_12595[(8)]);
var inst_12573__$1 = (state_12595[(2)]);
var inst_12574 = (inst_12573__$1 == null);
var inst_12575__$1 = cljs.core.not.call(null,inst_12574);
var state_12595__$1 = (function (){var statearr_12614 = state_12595;
(statearr_12614[(11)] = inst_12575__$1);

(statearr_12614[(8)] = inst_12573__$1);

return statearr_12614;
})();
if(inst_12575__$1){
var statearr_12615_12677 = state_12595__$1;
(statearr_12615_12677[(1)] = (15));

} else {
var statearr_12616_12678 = state_12595__$1;
(statearr_12616_12678[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (16))){
var inst_12575 = (state_12595[(11)]);
var state_12595__$1 = state_12595;
var statearr_12617_12679 = state_12595__$1;
(statearr_12617_12679[(2)] = inst_12575);

(statearr_12617_12679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (10))){
var inst_12567 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12618_12680 = state_12595__$1;
(statearr_12618_12680[(2)] = inst_12567);

(statearr_12618_12680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (18))){
var inst_12578 = (state_12595[(2)]);
var state_12595__$1 = state_12595;
var statearr_12619_12681 = state_12595__$1;
(statearr_12619_12681[(2)] = inst_12578);

(statearr_12619_12681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12596 === (8))){
var inst_12564 = cljs.core.async.close_BANG_.call(null,to);
var state_12595__$1 = state_12595;
var statearr_12620_12682 = state_12595__$1;
(statearr_12620_12682[(2)] = inst_12564);

(statearr_12620_12682[(1)] = (10));


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
});})(c__5911__auto__,jobs,results,process,async))
;
return ((function (switch__5896__auto__,c__5911__auto__,jobs,results,process,async){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12624[(0)] = state_machine__5897__auto__);

(statearr_12624[(1)] = (1));

return statearr_12624;
});
var state_machine__5897__auto____1 = (function (state_12595){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12625){if((e12625 instanceof Object)){
var ex__5900__auto__ = e12625;
var statearr_12626_12683 = state_12595;
(statearr_12626_12683[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12684 = state_12595;
state_12595 = G__12684;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12595){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__,jobs,results,process,async))
})();
var state__5913__auto__ = (function (){var statearr_12627 = f__5912__auto__.call(null);
(statearr_12627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_12627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto__,jobs,results,process,async))
);

return c__5911__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__5911__auto___12785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___12785,tc,fc){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___12785,tc,fc){
return (function (state_12760){
var state_val_12761 = (state_12760[(1)]);
if((state_val_12761 === (7))){
var inst_12756 = (state_12760[(2)]);
var state_12760__$1 = state_12760;
var statearr_12762_12786 = state_12760__$1;
(statearr_12762_12786[(2)] = inst_12756);

(statearr_12762_12786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (1))){
var state_12760__$1 = state_12760;
var statearr_12763_12787 = state_12760__$1;
(statearr_12763_12787[(2)] = null);

(statearr_12763_12787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (4))){
var inst_12737 = (state_12760[(7)]);
var inst_12737__$1 = (state_12760[(2)]);
var inst_12738 = (inst_12737__$1 == null);
var state_12760__$1 = (function (){var statearr_12764 = state_12760;
(statearr_12764[(7)] = inst_12737__$1);

return statearr_12764;
})();
if(cljs.core.truth_(inst_12738)){
var statearr_12765_12788 = state_12760__$1;
(statearr_12765_12788[(1)] = (5));

} else {
var statearr_12766_12789 = state_12760__$1;
(statearr_12766_12789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (13))){
var state_12760__$1 = state_12760;
var statearr_12767_12790 = state_12760__$1;
(statearr_12767_12790[(2)] = null);

(statearr_12767_12790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (6))){
var inst_12737 = (state_12760[(7)]);
var inst_12743 = p.call(null,inst_12737);
var state_12760__$1 = state_12760;
if(cljs.core.truth_(inst_12743)){
var statearr_12768_12791 = state_12760__$1;
(statearr_12768_12791[(1)] = (9));

} else {
var statearr_12769_12792 = state_12760__$1;
(statearr_12769_12792[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (3))){
var inst_12758 = (state_12760[(2)]);
var state_12760__$1 = state_12760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12760__$1,inst_12758);
} else {
if((state_val_12761 === (12))){
var state_12760__$1 = state_12760;
var statearr_12770_12793 = state_12760__$1;
(statearr_12770_12793[(2)] = null);

(statearr_12770_12793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (2))){
var state_12760__$1 = state_12760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12760__$1,(4),ch);
} else {
if((state_val_12761 === (11))){
var inst_12737 = (state_12760[(7)]);
var inst_12747 = (state_12760[(2)]);
var state_12760__$1 = state_12760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12760__$1,(8),inst_12747,inst_12737);
} else {
if((state_val_12761 === (9))){
var state_12760__$1 = state_12760;
var statearr_12771_12794 = state_12760__$1;
(statearr_12771_12794[(2)] = tc);

(statearr_12771_12794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (5))){
var inst_12740 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12741 = cljs.core.async.close_BANG_.call(null,fc);
var state_12760__$1 = (function (){var statearr_12772 = state_12760;
(statearr_12772[(8)] = inst_12740);

return statearr_12772;
})();
var statearr_12773_12795 = state_12760__$1;
(statearr_12773_12795[(2)] = inst_12741);

(statearr_12773_12795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (14))){
var inst_12754 = (state_12760[(2)]);
var state_12760__$1 = state_12760;
var statearr_12774_12796 = state_12760__$1;
(statearr_12774_12796[(2)] = inst_12754);

(statearr_12774_12796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (10))){
var state_12760__$1 = state_12760;
var statearr_12775_12797 = state_12760__$1;
(statearr_12775_12797[(2)] = fc);

(statearr_12775_12797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12761 === (8))){
var inst_12749 = (state_12760[(2)]);
var state_12760__$1 = state_12760;
if(cljs.core.truth_(inst_12749)){
var statearr_12776_12798 = state_12760__$1;
(statearr_12776_12798[(1)] = (12));

} else {
var statearr_12777_12799 = state_12760__$1;
(statearr_12777_12799[(1)] = (13));

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
}
});})(c__5911__auto___12785,tc,fc))
;
return ((function (switch__5896__auto__,c__5911__auto___12785,tc,fc){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12781 = [null,null,null,null,null,null,null,null,null];
(statearr_12781[(0)] = state_machine__5897__auto__);

(statearr_12781[(1)] = (1));

return statearr_12781;
});
var state_machine__5897__auto____1 = (function (state_12760){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12782){if((e12782 instanceof Object)){
var ex__5900__auto__ = e12782;
var statearr_12783_12800 = state_12760;
(statearr_12783_12800[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12801 = state_12760;
state_12760 = G__12801;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12760){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___12785,tc,fc))
})();
var state__5913__auto__ = (function (){var statearr_12784 = f__5912__auto__.call(null);
(statearr_12784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12785);

return statearr_12784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___12785,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__5911__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto__){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto__){
return (function (state_12848){
var state_val_12849 = (state_12848[(1)]);
if((state_val_12849 === (7))){
var inst_12844 = (state_12848[(2)]);
var state_12848__$1 = state_12848;
var statearr_12850_12866 = state_12848__$1;
(statearr_12850_12866[(2)] = inst_12844);

(statearr_12850_12866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12849 === (6))){
var inst_12834 = (state_12848[(7)]);
var inst_12837 = (state_12848[(8)]);
var inst_12841 = f.call(null,inst_12834,inst_12837);
var inst_12834__$1 = inst_12841;
var state_12848__$1 = (function (){var statearr_12851 = state_12848;
(statearr_12851[(7)] = inst_12834__$1);

return statearr_12851;
})();
var statearr_12852_12867 = state_12848__$1;
(statearr_12852_12867[(2)] = null);

(statearr_12852_12867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12849 === (5))){
var inst_12834 = (state_12848[(7)]);
var state_12848__$1 = state_12848;
var statearr_12853_12868 = state_12848__$1;
(statearr_12853_12868[(2)] = inst_12834);

(statearr_12853_12868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12849 === (4))){
var inst_12837 = (state_12848[(8)]);
var inst_12837__$1 = (state_12848[(2)]);
var inst_12838 = (inst_12837__$1 == null);
var state_12848__$1 = (function (){var statearr_12854 = state_12848;
(statearr_12854[(8)] = inst_12837__$1);

return statearr_12854;
})();
if(cljs.core.truth_(inst_12838)){
var statearr_12855_12869 = state_12848__$1;
(statearr_12855_12869[(1)] = (5));

} else {
var statearr_12856_12870 = state_12848__$1;
(statearr_12856_12870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12849 === (3))){
var inst_12846 = (state_12848[(2)]);
var state_12848__$1 = state_12848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12848__$1,inst_12846);
} else {
if((state_val_12849 === (2))){
var state_12848__$1 = state_12848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12848__$1,(4),ch);
} else {
if((state_val_12849 === (1))){
var inst_12834 = init;
var state_12848__$1 = (function (){var statearr_12857 = state_12848;
(statearr_12857[(7)] = inst_12834);

return statearr_12857;
})();
var statearr_12858_12871 = state_12848__$1;
(statearr_12858_12871[(2)] = null);

(statearr_12858_12871[(1)] = (2));


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
});})(c__5911__auto__))
;
return ((function (switch__5896__auto__,c__5911__auto__){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12862 = [null,null,null,null,null,null,null,null,null];
(statearr_12862[(0)] = state_machine__5897__auto__);

(statearr_12862[(1)] = (1));

return statearr_12862;
});
var state_machine__5897__auto____1 = (function (state_12848){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12863){if((e12863 instanceof Object)){
var ex__5900__auto__ = e12863;
var statearr_12864_12872 = state_12848;
(statearr_12864_12872[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12873 = state_12848;
state_12848 = G__12873;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12848){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_12865 = f__5912__auto__.call(null);
(statearr_12865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_12865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto__))
);

return c__5911__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__5911__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto__){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto__){
return (function (state_12947){
var state_val_12948 = (state_12947[(1)]);
if((state_val_12948 === (7))){
var inst_12929 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12949_12972 = state_12947__$1;
(statearr_12949_12972[(2)] = inst_12929);

(statearr_12949_12972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (1))){
var inst_12923 = cljs.core.seq.call(null,coll);
var inst_12924 = inst_12923;
var state_12947__$1 = (function (){var statearr_12950 = state_12947;
(statearr_12950[(7)] = inst_12924);

return statearr_12950;
})();
var statearr_12951_12973 = state_12947__$1;
(statearr_12951_12973[(2)] = null);

(statearr_12951_12973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (4))){
var inst_12924 = (state_12947[(7)]);
var inst_12927 = cljs.core.first.call(null,inst_12924);
var state_12947__$1 = state_12947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12947__$1,(7),ch,inst_12927);
} else {
if((state_val_12948 === (13))){
var inst_12941 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12952_12974 = state_12947__$1;
(statearr_12952_12974[(2)] = inst_12941);

(statearr_12952_12974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (6))){
var inst_12932 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
if(cljs.core.truth_(inst_12932)){
var statearr_12953_12975 = state_12947__$1;
(statearr_12953_12975[(1)] = (8));

} else {
var statearr_12954_12976 = state_12947__$1;
(statearr_12954_12976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (3))){
var inst_12945 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12947__$1,inst_12945);
} else {
if((state_val_12948 === (12))){
var state_12947__$1 = state_12947;
var statearr_12955_12977 = state_12947__$1;
(statearr_12955_12977[(2)] = null);

(statearr_12955_12977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (2))){
var inst_12924 = (state_12947[(7)]);
var state_12947__$1 = state_12947;
if(cljs.core.truth_(inst_12924)){
var statearr_12956_12978 = state_12947__$1;
(statearr_12956_12978[(1)] = (4));

} else {
var statearr_12957_12979 = state_12947__$1;
(statearr_12957_12979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (11))){
var inst_12938 = cljs.core.async.close_BANG_.call(null,ch);
var state_12947__$1 = state_12947;
var statearr_12958_12980 = state_12947__$1;
(statearr_12958_12980[(2)] = inst_12938);

(statearr_12958_12980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (9))){
var state_12947__$1 = state_12947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12959_12981 = state_12947__$1;
(statearr_12959_12981[(1)] = (11));

} else {
var statearr_12960_12982 = state_12947__$1;
(statearr_12960_12982[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (5))){
var inst_12924 = (state_12947[(7)]);
var state_12947__$1 = state_12947;
var statearr_12961_12983 = state_12947__$1;
(statearr_12961_12983[(2)] = inst_12924);

(statearr_12961_12983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (10))){
var inst_12943 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12962_12984 = state_12947__$1;
(statearr_12962_12984[(2)] = inst_12943);

(statearr_12962_12984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (8))){
var inst_12924 = (state_12947[(7)]);
var inst_12934 = cljs.core.next.call(null,inst_12924);
var inst_12924__$1 = inst_12934;
var state_12947__$1 = (function (){var statearr_12963 = state_12947;
(statearr_12963[(7)] = inst_12924__$1);

return statearr_12963;
})();
var statearr_12964_12985 = state_12947__$1;
(statearr_12964_12985[(2)] = null);

(statearr_12964_12985[(1)] = (2));


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
});})(c__5911__auto__))
;
return ((function (switch__5896__auto__,c__5911__auto__){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12968 = [null,null,null,null,null,null,null,null];
(statearr_12968[(0)] = state_machine__5897__auto__);

(statearr_12968[(1)] = (1));

return statearr_12968;
});
var state_machine__5897__auto____1 = (function (state_12947){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12969){if((e12969 instanceof Object)){
var ex__5900__auto__ = e12969;
var statearr_12970_12986 = state_12947;
(statearr_12970_12986[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12987 = state_12947;
state_12947 = G__12987;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12947){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_12971 = f__5912__auto__.call(null);
(statearr_12971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_12971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto__))
);

return c__5911__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj12989 = {};
return obj12989;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3676__auto__ = _;
if(and__3676__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3676__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4332__auto__ = (((_ == null))?null:_);
return (function (){var or__3688__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj12991 = {};
return obj12991;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3676__auto__ = m;
if(and__3676__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3676__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4332__auto__ = (((m == null))?null:m);
return (function (){var or__3688__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3676__auto__ = m;
if(and__3676__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3676__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4332__auto__ = (((m == null))?null:m);
return (function (){var or__3688__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3676__auto__ = m;
if(and__3676__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3676__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4332__auto__ = (((m == null))?null:m);
return (function (){var or__3688__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t13213 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13213 = (function (cs,ch,mult,meta13214){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13214 = meta13214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13213.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13213.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13213.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13213.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13213.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13215){
var self__ = this;
var _13215__$1 = this;
return self__.meta13214;
});})(cs))
;

cljs.core.async.t13213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13215,meta13214__$1){
var self__ = this;
var _13215__$1 = this;
return (new cljs.core.async.t13213(self__.cs,self__.ch,self__.mult,meta13214__$1));
});})(cs))
;

cljs.core.async.t13213.cljs$lang$type = true;

cljs.core.async.t13213.cljs$lang$ctorStr = "cljs.core.async/t13213";

cljs.core.async.t13213.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t13213");
});})(cs))
;

cljs.core.async.__GT_t13213 = ((function (cs){
return (function __GT_t13213(cs__$1,ch__$1,mult__$1,meta13214){
return (new cljs.core.async.t13213(cs__$1,ch__$1,mult__$1,meta13214));
});})(cs))
;

}

return (new cljs.core.async.t13213(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__5911__auto___13434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___13434,cs,m,dchan,dctr,done){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___13434,cs,m,dchan,dctr,done){
return (function (state_13346){
var state_val_13347 = (state_13346[(1)]);
if((state_val_13347 === (7))){
var inst_13342 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13348_13435 = state_13346__$1;
(statearr_13348_13435[(2)] = inst_13342);

(statearr_13348_13435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (20))){
var inst_13247 = (state_13346[(7)]);
var inst_13257 = cljs.core.first.call(null,inst_13247);
var inst_13258 = cljs.core.nth.call(null,inst_13257,(0),null);
var inst_13259 = cljs.core.nth.call(null,inst_13257,(1),null);
var state_13346__$1 = (function (){var statearr_13349 = state_13346;
(statearr_13349[(8)] = inst_13258);

return statearr_13349;
})();
if(cljs.core.truth_(inst_13259)){
var statearr_13350_13436 = state_13346__$1;
(statearr_13350_13436[(1)] = (22));

} else {
var statearr_13351_13437 = state_13346__$1;
(statearr_13351_13437[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (27))){
var inst_13289 = (state_13346[(9)]);
var inst_13287 = (state_13346[(10)]);
var inst_13218 = (state_13346[(11)]);
var inst_13294 = (state_13346[(12)]);
var inst_13294__$1 = cljs.core._nth.call(null,inst_13287,inst_13289);
var inst_13295 = cljs.core.async.put_BANG_.call(null,inst_13294__$1,inst_13218,done);
var state_13346__$1 = (function (){var statearr_13352 = state_13346;
(statearr_13352[(12)] = inst_13294__$1);

return statearr_13352;
})();
if(cljs.core.truth_(inst_13295)){
var statearr_13353_13438 = state_13346__$1;
(statearr_13353_13438[(1)] = (30));

} else {
var statearr_13354_13439 = state_13346__$1;
(statearr_13354_13439[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (1))){
var state_13346__$1 = state_13346;
var statearr_13355_13440 = state_13346__$1;
(statearr_13355_13440[(2)] = null);

(statearr_13355_13440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (24))){
var inst_13247 = (state_13346[(7)]);
var inst_13264 = (state_13346[(2)]);
var inst_13265 = cljs.core.next.call(null,inst_13247);
var inst_13227 = inst_13265;
var inst_13228 = null;
var inst_13229 = (0);
var inst_13230 = (0);
var state_13346__$1 = (function (){var statearr_13356 = state_13346;
(statearr_13356[(13)] = inst_13229);

(statearr_13356[(14)] = inst_13264);

(statearr_13356[(15)] = inst_13227);

(statearr_13356[(16)] = inst_13230);

(statearr_13356[(17)] = inst_13228);

return statearr_13356;
})();
var statearr_13357_13441 = state_13346__$1;
(statearr_13357_13441[(2)] = null);

(statearr_13357_13441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (39))){
var state_13346__$1 = state_13346;
var statearr_13361_13442 = state_13346__$1;
(statearr_13361_13442[(2)] = null);

(statearr_13361_13442[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (4))){
var inst_13218 = (state_13346[(11)]);
var inst_13218__$1 = (state_13346[(2)]);
var inst_13219 = (inst_13218__$1 == null);
var state_13346__$1 = (function (){var statearr_13362 = state_13346;
(statearr_13362[(11)] = inst_13218__$1);

return statearr_13362;
})();
if(cljs.core.truth_(inst_13219)){
var statearr_13363_13443 = state_13346__$1;
(statearr_13363_13443[(1)] = (5));

} else {
var statearr_13364_13444 = state_13346__$1;
(statearr_13364_13444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (15))){
var inst_13229 = (state_13346[(13)]);
var inst_13227 = (state_13346[(15)]);
var inst_13230 = (state_13346[(16)]);
var inst_13228 = (state_13346[(17)]);
var inst_13243 = (state_13346[(2)]);
var inst_13244 = (inst_13230 + (1));
var tmp13358 = inst_13229;
var tmp13359 = inst_13227;
var tmp13360 = inst_13228;
var inst_13227__$1 = tmp13359;
var inst_13228__$1 = tmp13360;
var inst_13229__$1 = tmp13358;
var inst_13230__$1 = inst_13244;
var state_13346__$1 = (function (){var statearr_13365 = state_13346;
(statearr_13365[(13)] = inst_13229__$1);

(statearr_13365[(15)] = inst_13227__$1);

(statearr_13365[(16)] = inst_13230__$1);

(statearr_13365[(17)] = inst_13228__$1);

(statearr_13365[(18)] = inst_13243);

return statearr_13365;
})();
var statearr_13366_13445 = state_13346__$1;
(statearr_13366_13445[(2)] = null);

(statearr_13366_13445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (21))){
var inst_13268 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13370_13446 = state_13346__$1;
(statearr_13370_13446[(2)] = inst_13268);

(statearr_13370_13446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (31))){
var inst_13294 = (state_13346[(12)]);
var inst_13298 = done.call(null,null);
var inst_13299 = cljs.core.async.untap_STAR_.call(null,m,inst_13294);
var state_13346__$1 = (function (){var statearr_13371 = state_13346;
(statearr_13371[(19)] = inst_13298);

return statearr_13371;
})();
var statearr_13372_13447 = state_13346__$1;
(statearr_13372_13447[(2)] = inst_13299);

(statearr_13372_13447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (32))){
var inst_13289 = (state_13346[(9)]);
var inst_13286 = (state_13346[(20)]);
var inst_13287 = (state_13346[(10)]);
var inst_13288 = (state_13346[(21)]);
var inst_13301 = (state_13346[(2)]);
var inst_13302 = (inst_13289 + (1));
var tmp13367 = inst_13286;
var tmp13368 = inst_13287;
var tmp13369 = inst_13288;
var inst_13286__$1 = tmp13367;
var inst_13287__$1 = tmp13368;
var inst_13288__$1 = tmp13369;
var inst_13289__$1 = inst_13302;
var state_13346__$1 = (function (){var statearr_13373 = state_13346;
(statearr_13373[(22)] = inst_13301);

(statearr_13373[(9)] = inst_13289__$1);

(statearr_13373[(20)] = inst_13286__$1);

(statearr_13373[(10)] = inst_13287__$1);

(statearr_13373[(21)] = inst_13288__$1);

return statearr_13373;
})();
var statearr_13374_13448 = state_13346__$1;
(statearr_13374_13448[(2)] = null);

(statearr_13374_13448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (40))){
var inst_13314 = (state_13346[(23)]);
var inst_13318 = done.call(null,null);
var inst_13319 = cljs.core.async.untap_STAR_.call(null,m,inst_13314);
var state_13346__$1 = (function (){var statearr_13375 = state_13346;
(statearr_13375[(24)] = inst_13318);

return statearr_13375;
})();
var statearr_13376_13449 = state_13346__$1;
(statearr_13376_13449[(2)] = inst_13319);

(statearr_13376_13449[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (33))){
var inst_13305 = (state_13346[(25)]);
var inst_13307 = cljs.core.chunked_seq_QMARK_.call(null,inst_13305);
var state_13346__$1 = state_13346;
if(inst_13307){
var statearr_13377_13450 = state_13346__$1;
(statearr_13377_13450[(1)] = (36));

} else {
var statearr_13378_13451 = state_13346__$1;
(statearr_13378_13451[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (13))){
var inst_13237 = (state_13346[(26)]);
var inst_13240 = cljs.core.async.close_BANG_.call(null,inst_13237);
var state_13346__$1 = state_13346;
var statearr_13379_13452 = state_13346__$1;
(statearr_13379_13452[(2)] = inst_13240);

(statearr_13379_13452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (22))){
var inst_13258 = (state_13346[(8)]);
var inst_13261 = cljs.core.async.close_BANG_.call(null,inst_13258);
var state_13346__$1 = state_13346;
var statearr_13380_13453 = state_13346__$1;
(statearr_13380_13453[(2)] = inst_13261);

(statearr_13380_13453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (36))){
var inst_13305 = (state_13346[(25)]);
var inst_13309 = cljs.core.chunk_first.call(null,inst_13305);
var inst_13310 = cljs.core.chunk_rest.call(null,inst_13305);
var inst_13311 = cljs.core.count.call(null,inst_13309);
var inst_13286 = inst_13310;
var inst_13287 = inst_13309;
var inst_13288 = inst_13311;
var inst_13289 = (0);
var state_13346__$1 = (function (){var statearr_13381 = state_13346;
(statearr_13381[(9)] = inst_13289);

(statearr_13381[(20)] = inst_13286);

(statearr_13381[(10)] = inst_13287);

(statearr_13381[(21)] = inst_13288);

return statearr_13381;
})();
var statearr_13382_13454 = state_13346__$1;
(statearr_13382_13454[(2)] = null);

(statearr_13382_13454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (41))){
var inst_13305 = (state_13346[(25)]);
var inst_13321 = (state_13346[(2)]);
var inst_13322 = cljs.core.next.call(null,inst_13305);
var inst_13286 = inst_13322;
var inst_13287 = null;
var inst_13288 = (0);
var inst_13289 = (0);
var state_13346__$1 = (function (){var statearr_13383 = state_13346;
(statearr_13383[(9)] = inst_13289);

(statearr_13383[(20)] = inst_13286);

(statearr_13383[(10)] = inst_13287);

(statearr_13383[(27)] = inst_13321);

(statearr_13383[(21)] = inst_13288);

return statearr_13383;
})();
var statearr_13384_13455 = state_13346__$1;
(statearr_13384_13455[(2)] = null);

(statearr_13384_13455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (43))){
var state_13346__$1 = state_13346;
var statearr_13385_13456 = state_13346__$1;
(statearr_13385_13456[(2)] = null);

(statearr_13385_13456[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (29))){
var inst_13330 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13386_13457 = state_13346__$1;
(statearr_13386_13457[(2)] = inst_13330);

(statearr_13386_13457[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (44))){
var inst_13339 = (state_13346[(2)]);
var state_13346__$1 = (function (){var statearr_13387 = state_13346;
(statearr_13387[(28)] = inst_13339);

return statearr_13387;
})();
var statearr_13388_13458 = state_13346__$1;
(statearr_13388_13458[(2)] = null);

(statearr_13388_13458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (6))){
var inst_13278 = (state_13346[(29)]);
var inst_13277 = cljs.core.deref.call(null,cs);
var inst_13278__$1 = cljs.core.keys.call(null,inst_13277);
var inst_13279 = cljs.core.count.call(null,inst_13278__$1);
var inst_13280 = cljs.core.reset_BANG_.call(null,dctr,inst_13279);
var inst_13285 = cljs.core.seq.call(null,inst_13278__$1);
var inst_13286 = inst_13285;
var inst_13287 = null;
var inst_13288 = (0);
var inst_13289 = (0);
var state_13346__$1 = (function (){var statearr_13389 = state_13346;
(statearr_13389[(9)] = inst_13289);

(statearr_13389[(20)] = inst_13286);

(statearr_13389[(10)] = inst_13287);

(statearr_13389[(29)] = inst_13278__$1);

(statearr_13389[(21)] = inst_13288);

(statearr_13389[(30)] = inst_13280);

return statearr_13389;
})();
var statearr_13390_13459 = state_13346__$1;
(statearr_13390_13459[(2)] = null);

(statearr_13390_13459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (28))){
var inst_13305 = (state_13346[(25)]);
var inst_13286 = (state_13346[(20)]);
var inst_13305__$1 = cljs.core.seq.call(null,inst_13286);
var state_13346__$1 = (function (){var statearr_13391 = state_13346;
(statearr_13391[(25)] = inst_13305__$1);

return statearr_13391;
})();
if(inst_13305__$1){
var statearr_13392_13460 = state_13346__$1;
(statearr_13392_13460[(1)] = (33));

} else {
var statearr_13393_13461 = state_13346__$1;
(statearr_13393_13461[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (25))){
var inst_13289 = (state_13346[(9)]);
var inst_13288 = (state_13346[(21)]);
var inst_13291 = (inst_13289 < inst_13288);
var inst_13292 = inst_13291;
var state_13346__$1 = state_13346;
if(cljs.core.truth_(inst_13292)){
var statearr_13394_13462 = state_13346__$1;
(statearr_13394_13462[(1)] = (27));

} else {
var statearr_13395_13463 = state_13346__$1;
(statearr_13395_13463[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (34))){
var state_13346__$1 = state_13346;
var statearr_13396_13464 = state_13346__$1;
(statearr_13396_13464[(2)] = null);

(statearr_13396_13464[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (17))){
var state_13346__$1 = state_13346;
var statearr_13397_13465 = state_13346__$1;
(statearr_13397_13465[(2)] = null);

(statearr_13397_13465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (3))){
var inst_13344 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13346__$1,inst_13344);
} else {
if((state_val_13347 === (12))){
var inst_13273 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13398_13466 = state_13346__$1;
(statearr_13398_13466[(2)] = inst_13273);

(statearr_13398_13466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (2))){
var state_13346__$1 = state_13346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13346__$1,(4),ch);
} else {
if((state_val_13347 === (23))){
var state_13346__$1 = state_13346;
var statearr_13399_13467 = state_13346__$1;
(statearr_13399_13467[(2)] = null);

(statearr_13399_13467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (35))){
var inst_13328 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13400_13468 = state_13346__$1;
(statearr_13400_13468[(2)] = inst_13328);

(statearr_13400_13468[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (19))){
var inst_13247 = (state_13346[(7)]);
var inst_13251 = cljs.core.chunk_first.call(null,inst_13247);
var inst_13252 = cljs.core.chunk_rest.call(null,inst_13247);
var inst_13253 = cljs.core.count.call(null,inst_13251);
var inst_13227 = inst_13252;
var inst_13228 = inst_13251;
var inst_13229 = inst_13253;
var inst_13230 = (0);
var state_13346__$1 = (function (){var statearr_13401 = state_13346;
(statearr_13401[(13)] = inst_13229);

(statearr_13401[(15)] = inst_13227);

(statearr_13401[(16)] = inst_13230);

(statearr_13401[(17)] = inst_13228);

return statearr_13401;
})();
var statearr_13402_13469 = state_13346__$1;
(statearr_13402_13469[(2)] = null);

(statearr_13402_13469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (11))){
var inst_13247 = (state_13346[(7)]);
var inst_13227 = (state_13346[(15)]);
var inst_13247__$1 = cljs.core.seq.call(null,inst_13227);
var state_13346__$1 = (function (){var statearr_13403 = state_13346;
(statearr_13403[(7)] = inst_13247__$1);

return statearr_13403;
})();
if(inst_13247__$1){
var statearr_13404_13470 = state_13346__$1;
(statearr_13404_13470[(1)] = (16));

} else {
var statearr_13405_13471 = state_13346__$1;
(statearr_13405_13471[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (9))){
var inst_13275 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13406_13472 = state_13346__$1;
(statearr_13406_13472[(2)] = inst_13275);

(statearr_13406_13472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (5))){
var inst_13225 = cljs.core.deref.call(null,cs);
var inst_13226 = cljs.core.seq.call(null,inst_13225);
var inst_13227 = inst_13226;
var inst_13228 = null;
var inst_13229 = (0);
var inst_13230 = (0);
var state_13346__$1 = (function (){var statearr_13407 = state_13346;
(statearr_13407[(13)] = inst_13229);

(statearr_13407[(15)] = inst_13227);

(statearr_13407[(16)] = inst_13230);

(statearr_13407[(17)] = inst_13228);

return statearr_13407;
})();
var statearr_13408_13473 = state_13346__$1;
(statearr_13408_13473[(2)] = null);

(statearr_13408_13473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (14))){
var state_13346__$1 = state_13346;
var statearr_13409_13474 = state_13346__$1;
(statearr_13409_13474[(2)] = null);

(statearr_13409_13474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (45))){
var inst_13336 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13410_13475 = state_13346__$1;
(statearr_13410_13475[(2)] = inst_13336);

(statearr_13410_13475[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (26))){
var inst_13278 = (state_13346[(29)]);
var inst_13332 = (state_13346[(2)]);
var inst_13333 = cljs.core.seq.call(null,inst_13278);
var state_13346__$1 = (function (){var statearr_13411 = state_13346;
(statearr_13411[(31)] = inst_13332);

return statearr_13411;
})();
if(inst_13333){
var statearr_13412_13476 = state_13346__$1;
(statearr_13412_13476[(1)] = (42));

} else {
var statearr_13413_13477 = state_13346__$1;
(statearr_13413_13477[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (16))){
var inst_13247 = (state_13346[(7)]);
var inst_13249 = cljs.core.chunked_seq_QMARK_.call(null,inst_13247);
var state_13346__$1 = state_13346;
if(inst_13249){
var statearr_13414_13478 = state_13346__$1;
(statearr_13414_13478[(1)] = (19));

} else {
var statearr_13415_13479 = state_13346__$1;
(statearr_13415_13479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (38))){
var inst_13325 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13416_13480 = state_13346__$1;
(statearr_13416_13480[(2)] = inst_13325);

(statearr_13416_13480[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (30))){
var state_13346__$1 = state_13346;
var statearr_13417_13481 = state_13346__$1;
(statearr_13417_13481[(2)] = null);

(statearr_13417_13481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (10))){
var inst_13230 = (state_13346[(16)]);
var inst_13228 = (state_13346[(17)]);
var inst_13236 = cljs.core._nth.call(null,inst_13228,inst_13230);
var inst_13237 = cljs.core.nth.call(null,inst_13236,(0),null);
var inst_13238 = cljs.core.nth.call(null,inst_13236,(1),null);
var state_13346__$1 = (function (){var statearr_13418 = state_13346;
(statearr_13418[(26)] = inst_13237);

return statearr_13418;
})();
if(cljs.core.truth_(inst_13238)){
var statearr_13419_13482 = state_13346__$1;
(statearr_13419_13482[(1)] = (13));

} else {
var statearr_13420_13483 = state_13346__$1;
(statearr_13420_13483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (18))){
var inst_13271 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13421_13484 = state_13346__$1;
(statearr_13421_13484[(2)] = inst_13271);

(statearr_13421_13484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (42))){
var state_13346__$1 = state_13346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13346__$1,(45),dchan);
} else {
if((state_val_13347 === (37))){
var inst_13305 = (state_13346[(25)]);
var inst_13218 = (state_13346[(11)]);
var inst_13314 = (state_13346[(23)]);
var inst_13314__$1 = cljs.core.first.call(null,inst_13305);
var inst_13315 = cljs.core.async.put_BANG_.call(null,inst_13314__$1,inst_13218,done);
var state_13346__$1 = (function (){var statearr_13422 = state_13346;
(statearr_13422[(23)] = inst_13314__$1);

return statearr_13422;
})();
if(cljs.core.truth_(inst_13315)){
var statearr_13423_13485 = state_13346__$1;
(statearr_13423_13485[(1)] = (39));

} else {
var statearr_13424_13486 = state_13346__$1;
(statearr_13424_13486[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (8))){
var inst_13229 = (state_13346[(13)]);
var inst_13230 = (state_13346[(16)]);
var inst_13232 = (inst_13230 < inst_13229);
var inst_13233 = inst_13232;
var state_13346__$1 = state_13346;
if(cljs.core.truth_(inst_13233)){
var statearr_13425_13487 = state_13346__$1;
(statearr_13425_13487[(1)] = (10));

} else {
var statearr_13426_13488 = state_13346__$1;
(statearr_13426_13488[(1)] = (11));

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
}
}
}
});})(c__5911__auto___13434,cs,m,dchan,dctr,done))
;
return ((function (switch__5896__auto__,c__5911__auto___13434,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_13430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13430[(0)] = state_machine__5897__auto__);

(statearr_13430[(1)] = (1));

return statearr_13430;
});
var state_machine__5897__auto____1 = (function (state_13346){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_13346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e13431){if((e13431 instanceof Object)){
var ex__5900__auto__ = e13431;
var statearr_13432_13489 = state_13346;
(statearr_13432_13489[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_13346;
state_13346 = G__13490;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_13346){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_13346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___13434,cs,m,dchan,dctr,done))
})();
var state__5913__auto__ = (function (){var statearr_13433 = f__5912__auto__.call(null);
(statearr_13433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___13434);

return statearr_13433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___13434,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj13492 = {};
return obj13492;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3676__auto__ = m;
if(and__3676__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3676__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4332__auto__ = (((m == null))?null:m);
return (function (){var or__3688__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3676__auto__ = m;
if(and__3676__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3676__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4332__auto__ = (((m == null))?null:m);
return (function (){var or__3688__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3676__auto__ = m;
if(and__3676__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3676__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4332__auto__ = (((m == null))?null:m);
return (function (){var or__3688__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3676__auto__ = m;
if(and__3676__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3676__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4332__auto__ = (((m == null))?null:m);
return (function (){var or__3688__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3676__auto__ = m;
if(and__3676__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3676__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4332__auto__ = (((m == null))?null:m);
return (function (){var or__3688__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13493){
var map__13498 = p__13493;
var map__13498__$1 = ((cljs.core.seq_QMARK_.call(null,map__13498))?cljs.core.apply.call(null,cljs.core.hash_map,map__13498):map__13498);
var opts = map__13498__$1;
var statearr_13499_13502 = state;
(statearr_13499_13502[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13498,map__13498__$1,opts){
return (function (val){
var statearr_13500_13503 = state;
(statearr_13500_13503[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13498,map__13498__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13501_13504 = state;
(statearr_13501_13504[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13493 = null;
if (arguments.length > 3) {
  p__13493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13493);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13505){
var state = cljs.core.first(arglist__13505);
arglist__13505 = cljs.core.next(arglist__13505);
var cont_block = cljs.core.first(arglist__13505);
arglist__13505 = cljs.core.next(arglist__13505);
var ports = cljs.core.first(arglist__13505);
var p__13493 = cljs.core.rest(arglist__13505);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13493);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t13625 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13625 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13626){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13626 = meta13626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13625.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13625.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13625.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13625.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13625.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13625.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13625.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13627){
var self__ = this;
var _13627__$1 = this;
return self__.meta13626;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13627,meta13626__$1){
var self__ = this;
var _13627__$1 = this;
return (new cljs.core.async.t13625(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13626__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13625.cljs$lang$type = true;

cljs.core.async.t13625.cljs$lang$ctorStr = "cljs.core.async/t13625";

cljs.core.async.t13625.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t13625");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13625 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13625(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13626){
return (new cljs.core.async.t13625(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13626));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13625(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var c__5911__auto___13744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___13744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___13744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13697){
var state_val_13698 = (state_13697[(1)]);
if((state_val_13698 === (7))){
var inst_13641 = (state_13697[(7)]);
var inst_13646 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13641);
var state_13697__$1 = state_13697;
var statearr_13699_13745 = state_13697__$1;
(statearr_13699_13745[(2)] = inst_13646);

(statearr_13699_13745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (20))){
var inst_13656 = (state_13697[(8)]);
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13697__$1,(23),out,inst_13656);
} else {
if((state_val_13698 === (1))){
var inst_13631 = (state_13697[(9)]);
var inst_13631__$1 = calc_state.call(null);
var inst_13632 = cljs.core.seq_QMARK_.call(null,inst_13631__$1);
var state_13697__$1 = (function (){var statearr_13700 = state_13697;
(statearr_13700[(9)] = inst_13631__$1);

return statearr_13700;
})();
if(inst_13632){
var statearr_13701_13746 = state_13697__$1;
(statearr_13701_13746[(1)] = (2));

} else {
var statearr_13702_13747 = state_13697__$1;
(statearr_13702_13747[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (24))){
var inst_13649 = (state_13697[(10)]);
var inst_13641 = inst_13649;
var state_13697__$1 = (function (){var statearr_13703 = state_13697;
(statearr_13703[(7)] = inst_13641);

return statearr_13703;
})();
var statearr_13704_13748 = state_13697__$1;
(statearr_13704_13748[(2)] = null);

(statearr_13704_13748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (4))){
var inst_13631 = (state_13697[(9)]);
var inst_13637 = (state_13697[(2)]);
var inst_13638 = cljs.core.get.call(null,inst_13637,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13639 = cljs.core.get.call(null,inst_13637,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13640 = cljs.core.get.call(null,inst_13637,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13641 = inst_13631;
var state_13697__$1 = (function (){var statearr_13705 = state_13697;
(statearr_13705[(11)] = inst_13638);

(statearr_13705[(7)] = inst_13641);

(statearr_13705[(12)] = inst_13640);

(statearr_13705[(13)] = inst_13639);

return statearr_13705;
})();
var statearr_13706_13749 = state_13697__$1;
(statearr_13706_13749[(2)] = null);

(statearr_13706_13749[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (15))){
var state_13697__$1 = state_13697;
var statearr_13707_13750 = state_13697__$1;
(statearr_13707_13750[(2)] = null);

(statearr_13707_13750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (21))){
var inst_13649 = (state_13697[(10)]);
var inst_13641 = inst_13649;
var state_13697__$1 = (function (){var statearr_13708 = state_13697;
(statearr_13708[(7)] = inst_13641);

return statearr_13708;
})();
var statearr_13709_13751 = state_13697__$1;
(statearr_13709_13751[(2)] = null);

(statearr_13709_13751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (13))){
var inst_13693 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
var statearr_13710_13752 = state_13697__$1;
(statearr_13710_13752[(2)] = inst_13693);

(statearr_13710_13752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (22))){
var inst_13691 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
var statearr_13711_13753 = state_13697__$1;
(statearr_13711_13753[(2)] = inst_13691);

(statearr_13711_13753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (6))){
var inst_13695 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13697__$1,inst_13695);
} else {
if((state_val_13698 === (25))){
var state_13697__$1 = state_13697;
var statearr_13712_13754 = state_13697__$1;
(statearr_13712_13754[(2)] = null);

(statearr_13712_13754[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (17))){
var inst_13671 = (state_13697[(14)]);
var state_13697__$1 = state_13697;
var statearr_13713_13755 = state_13697__$1;
(statearr_13713_13755[(2)] = inst_13671);

(statearr_13713_13755[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (3))){
var inst_13631 = (state_13697[(9)]);
var state_13697__$1 = state_13697;
var statearr_13714_13756 = state_13697__$1;
(statearr_13714_13756[(2)] = inst_13631);

(statearr_13714_13756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (12))){
var inst_13671 = (state_13697[(14)]);
var inst_13657 = (state_13697[(15)]);
var inst_13652 = (state_13697[(16)]);
var inst_13671__$1 = inst_13652.call(null,inst_13657);
var state_13697__$1 = (function (){var statearr_13715 = state_13697;
(statearr_13715[(14)] = inst_13671__$1);

return statearr_13715;
})();
if(cljs.core.truth_(inst_13671__$1)){
var statearr_13716_13757 = state_13697__$1;
(statearr_13716_13757[(1)] = (17));

} else {
var statearr_13717_13758 = state_13697__$1;
(statearr_13717_13758[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (2))){
var inst_13631 = (state_13697[(9)]);
var inst_13634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13631);
var state_13697__$1 = state_13697;
var statearr_13718_13759 = state_13697__$1;
(statearr_13718_13759[(2)] = inst_13634);

(statearr_13718_13759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (23))){
var inst_13682 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
if(cljs.core.truth_(inst_13682)){
var statearr_13719_13760 = state_13697__$1;
(statearr_13719_13760[(1)] = (24));

} else {
var statearr_13720_13761 = state_13697__$1;
(statearr_13720_13761[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (19))){
var inst_13679 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
if(cljs.core.truth_(inst_13679)){
var statearr_13721_13762 = state_13697__$1;
(statearr_13721_13762[(1)] = (20));

} else {
var statearr_13722_13763 = state_13697__$1;
(statearr_13722_13763[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (11))){
var inst_13656 = (state_13697[(8)]);
var inst_13662 = (inst_13656 == null);
var state_13697__$1 = state_13697;
if(cljs.core.truth_(inst_13662)){
var statearr_13723_13764 = state_13697__$1;
(statearr_13723_13764[(1)] = (14));

} else {
var statearr_13724_13765 = state_13697__$1;
(statearr_13724_13765[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (9))){
var inst_13649 = (state_13697[(10)]);
var inst_13649__$1 = (state_13697[(2)]);
var inst_13650 = cljs.core.get.call(null,inst_13649__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13651 = cljs.core.get.call(null,inst_13649__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13652 = cljs.core.get.call(null,inst_13649__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13697__$1 = (function (){var statearr_13725 = state_13697;
(statearr_13725[(17)] = inst_13651);

(statearr_13725[(10)] = inst_13649__$1);

(statearr_13725[(16)] = inst_13652);

return statearr_13725;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13697__$1,(10),inst_13650);
} else {
if((state_val_13698 === (5))){
var inst_13641 = (state_13697[(7)]);
var inst_13644 = cljs.core.seq_QMARK_.call(null,inst_13641);
var state_13697__$1 = state_13697;
if(inst_13644){
var statearr_13726_13766 = state_13697__$1;
(statearr_13726_13766[(1)] = (7));

} else {
var statearr_13727_13767 = state_13697__$1;
(statearr_13727_13767[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (14))){
var inst_13657 = (state_13697[(15)]);
var inst_13664 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13657);
var state_13697__$1 = state_13697;
var statearr_13728_13768 = state_13697__$1;
(statearr_13728_13768[(2)] = inst_13664);

(statearr_13728_13768[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (26))){
var inst_13687 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
var statearr_13729_13769 = state_13697__$1;
(statearr_13729_13769[(2)] = inst_13687);

(statearr_13729_13769[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (16))){
var inst_13667 = (state_13697[(2)]);
var inst_13668 = calc_state.call(null);
var inst_13641 = inst_13668;
var state_13697__$1 = (function (){var statearr_13730 = state_13697;
(statearr_13730[(18)] = inst_13667);

(statearr_13730[(7)] = inst_13641);

return statearr_13730;
})();
var statearr_13731_13770 = state_13697__$1;
(statearr_13731_13770[(2)] = null);

(statearr_13731_13770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (10))){
var inst_13656 = (state_13697[(8)]);
var inst_13657 = (state_13697[(15)]);
var inst_13655 = (state_13697[(2)]);
var inst_13656__$1 = cljs.core.nth.call(null,inst_13655,(0),null);
var inst_13657__$1 = cljs.core.nth.call(null,inst_13655,(1),null);
var inst_13658 = (inst_13656__$1 == null);
var inst_13659 = cljs.core._EQ_.call(null,inst_13657__$1,change);
var inst_13660 = (inst_13658) || (inst_13659);
var state_13697__$1 = (function (){var statearr_13732 = state_13697;
(statearr_13732[(8)] = inst_13656__$1);

(statearr_13732[(15)] = inst_13657__$1);

return statearr_13732;
})();
if(cljs.core.truth_(inst_13660)){
var statearr_13733_13771 = state_13697__$1;
(statearr_13733_13771[(1)] = (11));

} else {
var statearr_13734_13772 = state_13697__$1;
(statearr_13734_13772[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (18))){
var inst_13657 = (state_13697[(15)]);
var inst_13651 = (state_13697[(17)]);
var inst_13652 = (state_13697[(16)]);
var inst_13674 = cljs.core.empty_QMARK_.call(null,inst_13652);
var inst_13675 = inst_13651.call(null,inst_13657);
var inst_13676 = cljs.core.not.call(null,inst_13675);
var inst_13677 = (inst_13674) && (inst_13676);
var state_13697__$1 = state_13697;
var statearr_13735_13773 = state_13697__$1;
(statearr_13735_13773[(2)] = inst_13677);

(statearr_13735_13773[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (8))){
var inst_13641 = (state_13697[(7)]);
var state_13697__$1 = state_13697;
var statearr_13736_13774 = state_13697__$1;
(statearr_13736_13774[(2)] = inst_13641);

(statearr_13736_13774[(1)] = (9));


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
});})(c__5911__auto___13744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5896__auto__,c__5911__auto___13744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_13740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13740[(0)] = state_machine__5897__auto__);

(statearr_13740[(1)] = (1));

return statearr_13740;
});
var state_machine__5897__auto____1 = (function (state_13697){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_13697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e13741){if((e13741 instanceof Object)){
var ex__5900__auto__ = e13741;
var statearr_13742_13775 = state_13697;
(statearr_13742_13775[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13776 = state_13697;
state_13697 = G__13776;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_13697){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_13697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___13744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5913__auto__ = (function (){var statearr_13743 = f__5912__auto__.call(null);
(statearr_13743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___13744);

return statearr_13743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___13744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj13778 = {};
return obj13778;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3676__auto__ = p;
if(and__3676__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3676__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4332__auto__ = (((p == null))?null:p);
return (function (){var or__3688__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3676__auto__ = p;
if(and__3676__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3676__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4332__auto__ = (((p == null))?null:p);
return (function (){var or__3688__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3676__auto__ = p;
if(and__3676__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3676__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4332__auto__ = (((p == null))?null:p);
return (function (){var or__3688__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3676__auto__ = p;
if(and__3676__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3676__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4332__auto__ = (((p == null))?null:p);
return (function (){var or__3688__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4332__auto__)]);
if(or__3688__auto__){
return or__3688__auto__;
} else {
var or__3688__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3688__auto____$1){
return or__3688__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3688__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3688__auto__)){
return or__3688__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3688__auto__,mults){
return (function (p1__13779_SHARP_){
if(cljs.core.truth_(p1__13779_SHARP_.call(null,topic))){
return p1__13779_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13779_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3688__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t13902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13902 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13903){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13903 = meta13903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13902.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t13902.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t13902.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t13902.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t13902.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t13902.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t13902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13904){
var self__ = this;
var _13904__$1 = this;
return self__.meta13903;
});})(mults,ensure_mult))
;

cljs.core.async.t13902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13904,meta13903__$1){
var self__ = this;
var _13904__$1 = this;
return (new cljs.core.async.t13902(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13903__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t13902.cljs$lang$type = true;

cljs.core.async.t13902.cljs$lang$ctorStr = "cljs.core.async/t13902";

cljs.core.async.t13902.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t13902");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t13902 = ((function (mults,ensure_mult){
return (function __GT_t13902(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13903){
return (new cljs.core.async.t13902(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13903));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t13902(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var c__5911__auto___14024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14024,mults,ensure_mult,p){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14024,mults,ensure_mult,p){
return (function (state_13976){
var state_val_13977 = (state_13976[(1)]);
if((state_val_13977 === (7))){
var inst_13972 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
var statearr_13978_14025 = state_13976__$1;
(statearr_13978_14025[(2)] = inst_13972);

(statearr_13978_14025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (20))){
var state_13976__$1 = state_13976;
var statearr_13979_14026 = state_13976__$1;
(statearr_13979_14026[(2)] = null);

(statearr_13979_14026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (1))){
var state_13976__$1 = state_13976;
var statearr_13980_14027 = state_13976__$1;
(statearr_13980_14027[(2)] = null);

(statearr_13980_14027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (24))){
var inst_13955 = (state_13976[(7)]);
var inst_13964 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13955);
var state_13976__$1 = state_13976;
var statearr_13981_14028 = state_13976__$1;
(statearr_13981_14028[(2)] = inst_13964);

(statearr_13981_14028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (4))){
var inst_13907 = (state_13976[(8)]);
var inst_13907__$1 = (state_13976[(2)]);
var inst_13908 = (inst_13907__$1 == null);
var state_13976__$1 = (function (){var statearr_13982 = state_13976;
(statearr_13982[(8)] = inst_13907__$1);

return statearr_13982;
})();
if(cljs.core.truth_(inst_13908)){
var statearr_13983_14029 = state_13976__$1;
(statearr_13983_14029[(1)] = (5));

} else {
var statearr_13984_14030 = state_13976__$1;
(statearr_13984_14030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (15))){
var inst_13949 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
var statearr_13985_14031 = state_13976__$1;
(statearr_13985_14031[(2)] = inst_13949);

(statearr_13985_14031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (21))){
var inst_13969 = (state_13976[(2)]);
var state_13976__$1 = (function (){var statearr_13986 = state_13976;
(statearr_13986[(9)] = inst_13969);

return statearr_13986;
})();
var statearr_13987_14032 = state_13976__$1;
(statearr_13987_14032[(2)] = null);

(statearr_13987_14032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (13))){
var inst_13931 = (state_13976[(10)]);
var inst_13933 = cljs.core.chunked_seq_QMARK_.call(null,inst_13931);
var state_13976__$1 = state_13976;
if(inst_13933){
var statearr_13988_14033 = state_13976__$1;
(statearr_13988_14033[(1)] = (16));

} else {
var statearr_13989_14034 = state_13976__$1;
(statearr_13989_14034[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (22))){
var inst_13961 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
if(cljs.core.truth_(inst_13961)){
var statearr_13990_14035 = state_13976__$1;
(statearr_13990_14035[(1)] = (23));

} else {
var statearr_13991_14036 = state_13976__$1;
(statearr_13991_14036[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (6))){
var inst_13955 = (state_13976[(7)]);
var inst_13957 = (state_13976[(11)]);
var inst_13907 = (state_13976[(8)]);
var inst_13955__$1 = topic_fn.call(null,inst_13907);
var inst_13956 = cljs.core.deref.call(null,mults);
var inst_13957__$1 = cljs.core.get.call(null,inst_13956,inst_13955__$1);
var state_13976__$1 = (function (){var statearr_13992 = state_13976;
(statearr_13992[(7)] = inst_13955__$1);

(statearr_13992[(11)] = inst_13957__$1);

return statearr_13992;
})();
if(cljs.core.truth_(inst_13957__$1)){
var statearr_13993_14037 = state_13976__$1;
(statearr_13993_14037[(1)] = (19));

} else {
var statearr_13994_14038 = state_13976__$1;
(statearr_13994_14038[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (25))){
var inst_13966 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
var statearr_13995_14039 = state_13976__$1;
(statearr_13995_14039[(2)] = inst_13966);

(statearr_13995_14039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (17))){
var inst_13931 = (state_13976[(10)]);
var inst_13940 = cljs.core.first.call(null,inst_13931);
var inst_13941 = cljs.core.async.muxch_STAR_.call(null,inst_13940);
var inst_13942 = cljs.core.async.close_BANG_.call(null,inst_13941);
var inst_13943 = cljs.core.next.call(null,inst_13931);
var inst_13917 = inst_13943;
var inst_13918 = null;
var inst_13919 = (0);
var inst_13920 = (0);
var state_13976__$1 = (function (){var statearr_13996 = state_13976;
(statearr_13996[(12)] = inst_13917);

(statearr_13996[(13)] = inst_13919);

(statearr_13996[(14)] = inst_13942);

(statearr_13996[(15)] = inst_13918);

(statearr_13996[(16)] = inst_13920);

return statearr_13996;
})();
var statearr_13997_14040 = state_13976__$1;
(statearr_13997_14040[(2)] = null);

(statearr_13997_14040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (3))){
var inst_13974 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13976__$1,inst_13974);
} else {
if((state_val_13977 === (12))){
var inst_13951 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
var statearr_13998_14041 = state_13976__$1;
(statearr_13998_14041[(2)] = inst_13951);

(statearr_13998_14041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (2))){
var state_13976__$1 = state_13976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13976__$1,(4),ch);
} else {
if((state_val_13977 === (23))){
var state_13976__$1 = state_13976;
var statearr_13999_14042 = state_13976__$1;
(statearr_13999_14042[(2)] = null);

(statearr_13999_14042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (19))){
var inst_13957 = (state_13976[(11)]);
var inst_13907 = (state_13976[(8)]);
var inst_13959 = cljs.core.async.muxch_STAR_.call(null,inst_13957);
var state_13976__$1 = state_13976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13976__$1,(22),inst_13959,inst_13907);
} else {
if((state_val_13977 === (11))){
var inst_13931 = (state_13976[(10)]);
var inst_13917 = (state_13976[(12)]);
var inst_13931__$1 = cljs.core.seq.call(null,inst_13917);
var state_13976__$1 = (function (){var statearr_14000 = state_13976;
(statearr_14000[(10)] = inst_13931__$1);

return statearr_14000;
})();
if(inst_13931__$1){
var statearr_14001_14043 = state_13976__$1;
(statearr_14001_14043[(1)] = (13));

} else {
var statearr_14002_14044 = state_13976__$1;
(statearr_14002_14044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (9))){
var inst_13953 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
var statearr_14003_14045 = state_13976__$1;
(statearr_14003_14045[(2)] = inst_13953);

(statearr_14003_14045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (5))){
var inst_13914 = cljs.core.deref.call(null,mults);
var inst_13915 = cljs.core.vals.call(null,inst_13914);
var inst_13916 = cljs.core.seq.call(null,inst_13915);
var inst_13917 = inst_13916;
var inst_13918 = null;
var inst_13919 = (0);
var inst_13920 = (0);
var state_13976__$1 = (function (){var statearr_14004 = state_13976;
(statearr_14004[(12)] = inst_13917);

(statearr_14004[(13)] = inst_13919);

(statearr_14004[(15)] = inst_13918);

(statearr_14004[(16)] = inst_13920);

return statearr_14004;
})();
var statearr_14005_14046 = state_13976__$1;
(statearr_14005_14046[(2)] = null);

(statearr_14005_14046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (14))){
var state_13976__$1 = state_13976;
var statearr_14009_14047 = state_13976__$1;
(statearr_14009_14047[(2)] = null);

(statearr_14009_14047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (16))){
var inst_13931 = (state_13976[(10)]);
var inst_13935 = cljs.core.chunk_first.call(null,inst_13931);
var inst_13936 = cljs.core.chunk_rest.call(null,inst_13931);
var inst_13937 = cljs.core.count.call(null,inst_13935);
var inst_13917 = inst_13936;
var inst_13918 = inst_13935;
var inst_13919 = inst_13937;
var inst_13920 = (0);
var state_13976__$1 = (function (){var statearr_14010 = state_13976;
(statearr_14010[(12)] = inst_13917);

(statearr_14010[(13)] = inst_13919);

(statearr_14010[(15)] = inst_13918);

(statearr_14010[(16)] = inst_13920);

return statearr_14010;
})();
var statearr_14011_14048 = state_13976__$1;
(statearr_14011_14048[(2)] = null);

(statearr_14011_14048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (10))){
var inst_13917 = (state_13976[(12)]);
var inst_13919 = (state_13976[(13)]);
var inst_13918 = (state_13976[(15)]);
var inst_13920 = (state_13976[(16)]);
var inst_13925 = cljs.core._nth.call(null,inst_13918,inst_13920);
var inst_13926 = cljs.core.async.muxch_STAR_.call(null,inst_13925);
var inst_13927 = cljs.core.async.close_BANG_.call(null,inst_13926);
var inst_13928 = (inst_13920 + (1));
var tmp14006 = inst_13917;
var tmp14007 = inst_13919;
var tmp14008 = inst_13918;
var inst_13917__$1 = tmp14006;
var inst_13918__$1 = tmp14008;
var inst_13919__$1 = tmp14007;
var inst_13920__$1 = inst_13928;
var state_13976__$1 = (function (){var statearr_14012 = state_13976;
(statearr_14012[(12)] = inst_13917__$1);

(statearr_14012[(13)] = inst_13919__$1);

(statearr_14012[(15)] = inst_13918__$1);

(statearr_14012[(16)] = inst_13920__$1);

(statearr_14012[(17)] = inst_13927);

return statearr_14012;
})();
var statearr_14013_14049 = state_13976__$1;
(statearr_14013_14049[(2)] = null);

(statearr_14013_14049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (18))){
var inst_13946 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
var statearr_14014_14050 = state_13976__$1;
(statearr_14014_14050[(2)] = inst_13946);

(statearr_14014_14050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13977 === (8))){
var inst_13919 = (state_13976[(13)]);
var inst_13920 = (state_13976[(16)]);
var inst_13922 = (inst_13920 < inst_13919);
var inst_13923 = inst_13922;
var state_13976__$1 = state_13976;
if(cljs.core.truth_(inst_13923)){
var statearr_14015_14051 = state_13976__$1;
(statearr_14015_14051[(1)] = (10));

} else {
var statearr_14016_14052 = state_13976__$1;
(statearr_14016_14052[(1)] = (11));

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
});})(c__5911__auto___14024,mults,ensure_mult,p))
;
return ((function (switch__5896__auto__,c__5911__auto___14024,mults,ensure_mult,p){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14020[(0)] = state_machine__5897__auto__);

(statearr_14020[(1)] = (1));

return statearr_14020;
});
var state_machine__5897__auto____1 = (function (state_13976){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_13976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14021){if((e14021 instanceof Object)){
var ex__5900__auto__ = e14021;
var statearr_14022_14053 = state_13976;
(statearr_14022_14053[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14054 = state_13976;
state_13976 = G__14054;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_13976){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_13976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14024,mults,ensure_mult,p))
})();
var state__5913__auto__ = (function (){var statearr_14023 = f__5912__auto__.call(null);
(statearr_14023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14024);

return statearr_14023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14024,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__5911__auto___14191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14191,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14191,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14161){
var state_val_14162 = (state_14161[(1)]);
if((state_val_14162 === (7))){
var state_14161__$1 = state_14161;
var statearr_14163_14192 = state_14161__$1;
(statearr_14163_14192[(2)] = null);

(statearr_14163_14192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (1))){
var state_14161__$1 = state_14161;
var statearr_14164_14193 = state_14161__$1;
(statearr_14164_14193[(2)] = null);

(statearr_14164_14193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (4))){
var inst_14125 = (state_14161[(7)]);
var inst_14127 = (inst_14125 < cnt);
var state_14161__$1 = state_14161;
if(cljs.core.truth_(inst_14127)){
var statearr_14165_14194 = state_14161__$1;
(statearr_14165_14194[(1)] = (6));

} else {
var statearr_14166_14195 = state_14161__$1;
(statearr_14166_14195[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (15))){
var inst_14157 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
var statearr_14167_14196 = state_14161__$1;
(statearr_14167_14196[(2)] = inst_14157);

(statearr_14167_14196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (13))){
var inst_14150 = cljs.core.async.close_BANG_.call(null,out);
var state_14161__$1 = state_14161;
var statearr_14168_14197 = state_14161__$1;
(statearr_14168_14197[(2)] = inst_14150);

(statearr_14168_14197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (6))){
var state_14161__$1 = state_14161;
var statearr_14169_14198 = state_14161__$1;
(statearr_14169_14198[(2)] = null);

(statearr_14169_14198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (3))){
var inst_14159 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14161__$1,inst_14159);
} else {
if((state_val_14162 === (12))){
var inst_14147 = (state_14161[(8)]);
var inst_14147__$1 = (state_14161[(2)]);
var inst_14148 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14147__$1);
var state_14161__$1 = (function (){var statearr_14170 = state_14161;
(statearr_14170[(8)] = inst_14147__$1);

return statearr_14170;
})();
if(cljs.core.truth_(inst_14148)){
var statearr_14171_14199 = state_14161__$1;
(statearr_14171_14199[(1)] = (13));

} else {
var statearr_14172_14200 = state_14161__$1;
(statearr_14172_14200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (2))){
var inst_14124 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14125 = (0);
var state_14161__$1 = (function (){var statearr_14173 = state_14161;
(statearr_14173[(7)] = inst_14125);

(statearr_14173[(9)] = inst_14124);

return statearr_14173;
})();
var statearr_14174_14201 = state_14161__$1;
(statearr_14174_14201[(2)] = null);

(statearr_14174_14201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (11))){
var inst_14125 = (state_14161[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14161,(10),Object,null,(9));
var inst_14134 = chs__$1.call(null,inst_14125);
var inst_14135 = done.call(null,inst_14125);
var inst_14136 = cljs.core.async.take_BANG_.call(null,inst_14134,inst_14135);
var state_14161__$1 = state_14161;
var statearr_14175_14202 = state_14161__$1;
(statearr_14175_14202[(2)] = inst_14136);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14161__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (9))){
var inst_14125 = (state_14161[(7)]);
var inst_14138 = (state_14161[(2)]);
var inst_14139 = (inst_14125 + (1));
var inst_14125__$1 = inst_14139;
var state_14161__$1 = (function (){var statearr_14176 = state_14161;
(statearr_14176[(10)] = inst_14138);

(statearr_14176[(7)] = inst_14125__$1);

return statearr_14176;
})();
var statearr_14177_14203 = state_14161__$1;
(statearr_14177_14203[(2)] = null);

(statearr_14177_14203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (5))){
var inst_14145 = (state_14161[(2)]);
var state_14161__$1 = (function (){var statearr_14178 = state_14161;
(statearr_14178[(11)] = inst_14145);

return statearr_14178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14161__$1,(12),dchan);
} else {
if((state_val_14162 === (14))){
var inst_14147 = (state_14161[(8)]);
var inst_14152 = cljs.core.apply.call(null,f,inst_14147);
var state_14161__$1 = state_14161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14161__$1,(16),out,inst_14152);
} else {
if((state_val_14162 === (16))){
var inst_14154 = (state_14161[(2)]);
var state_14161__$1 = (function (){var statearr_14179 = state_14161;
(statearr_14179[(12)] = inst_14154);

return statearr_14179;
})();
var statearr_14180_14204 = state_14161__$1;
(statearr_14180_14204[(2)] = null);

(statearr_14180_14204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (10))){
var inst_14129 = (state_14161[(2)]);
var inst_14130 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14161__$1 = (function (){var statearr_14181 = state_14161;
(statearr_14181[(13)] = inst_14129);

return statearr_14181;
})();
var statearr_14182_14205 = state_14161__$1;
(statearr_14182_14205[(2)] = inst_14130);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14161__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (8))){
var inst_14143 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
var statearr_14183_14206 = state_14161__$1;
(statearr_14183_14206[(2)] = inst_14143);

(statearr_14183_14206[(1)] = (5));


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
});})(c__5911__auto___14191,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5896__auto__,c__5911__auto___14191,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14187[(0)] = state_machine__5897__auto__);

(statearr_14187[(1)] = (1));

return statearr_14187;
});
var state_machine__5897__auto____1 = (function (state_14161){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14188){if((e14188 instanceof Object)){
var ex__5900__auto__ = e14188;
var statearr_14189_14207 = state_14161;
(statearr_14189_14207[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14208 = state_14161;
state_14161 = G__14208;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14161){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14191,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5913__auto__ = (function (){var statearr_14190 = f__5912__auto__.call(null);
(statearr_14190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14191);

return statearr_14190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14191,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5911__auto___14316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14316,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14316,out){
return (function (state_14292){
var state_val_14293 = (state_14292[(1)]);
if((state_val_14293 === (7))){
var inst_14272 = (state_14292[(7)]);
var inst_14271 = (state_14292[(8)]);
var inst_14271__$1 = (state_14292[(2)]);
var inst_14272__$1 = cljs.core.nth.call(null,inst_14271__$1,(0),null);
var inst_14273 = cljs.core.nth.call(null,inst_14271__$1,(1),null);
var inst_14274 = (inst_14272__$1 == null);
var state_14292__$1 = (function (){var statearr_14294 = state_14292;
(statearr_14294[(9)] = inst_14273);

(statearr_14294[(7)] = inst_14272__$1);

(statearr_14294[(8)] = inst_14271__$1);

return statearr_14294;
})();
if(cljs.core.truth_(inst_14274)){
var statearr_14295_14317 = state_14292__$1;
(statearr_14295_14317[(1)] = (8));

} else {
var statearr_14296_14318 = state_14292__$1;
(statearr_14296_14318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (1))){
var inst_14263 = cljs.core.vec.call(null,chs);
var inst_14264 = inst_14263;
var state_14292__$1 = (function (){var statearr_14297 = state_14292;
(statearr_14297[(10)] = inst_14264);

return statearr_14297;
})();
var statearr_14298_14319 = state_14292__$1;
(statearr_14298_14319[(2)] = null);

(statearr_14298_14319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (4))){
var inst_14264 = (state_14292[(10)]);
var state_14292__$1 = state_14292;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14292__$1,(7),inst_14264);
} else {
if((state_val_14293 === (6))){
var inst_14288 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
var statearr_14299_14320 = state_14292__$1;
(statearr_14299_14320[(2)] = inst_14288);

(statearr_14299_14320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (3))){
var inst_14290 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14292__$1,inst_14290);
} else {
if((state_val_14293 === (2))){
var inst_14264 = (state_14292[(10)]);
var inst_14266 = cljs.core.count.call(null,inst_14264);
var inst_14267 = (inst_14266 > (0));
var state_14292__$1 = state_14292;
if(cljs.core.truth_(inst_14267)){
var statearr_14301_14321 = state_14292__$1;
(statearr_14301_14321[(1)] = (4));

} else {
var statearr_14302_14322 = state_14292__$1;
(statearr_14302_14322[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (11))){
var inst_14264 = (state_14292[(10)]);
var inst_14281 = (state_14292[(2)]);
var tmp14300 = inst_14264;
var inst_14264__$1 = tmp14300;
var state_14292__$1 = (function (){var statearr_14303 = state_14292;
(statearr_14303[(10)] = inst_14264__$1);

(statearr_14303[(11)] = inst_14281);

return statearr_14303;
})();
var statearr_14304_14323 = state_14292__$1;
(statearr_14304_14323[(2)] = null);

(statearr_14304_14323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (9))){
var inst_14272 = (state_14292[(7)]);
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14292__$1,(11),out,inst_14272);
} else {
if((state_val_14293 === (5))){
var inst_14286 = cljs.core.async.close_BANG_.call(null,out);
var state_14292__$1 = state_14292;
var statearr_14305_14324 = state_14292__$1;
(statearr_14305_14324[(2)] = inst_14286);

(statearr_14305_14324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (10))){
var inst_14284 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
var statearr_14306_14325 = state_14292__$1;
(statearr_14306_14325[(2)] = inst_14284);

(statearr_14306_14325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (8))){
var inst_14273 = (state_14292[(9)]);
var inst_14272 = (state_14292[(7)]);
var inst_14264 = (state_14292[(10)]);
var inst_14271 = (state_14292[(8)]);
var inst_14276 = (function (){var c = inst_14273;
var v = inst_14272;
var vec__14269 = inst_14271;
var cs = inst_14264;
return ((function (c,v,vec__14269,cs,inst_14273,inst_14272,inst_14264,inst_14271,state_val_14293,c__5911__auto___14316,out){
return (function (p1__14209_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14209_SHARP_);
});
;})(c,v,vec__14269,cs,inst_14273,inst_14272,inst_14264,inst_14271,state_val_14293,c__5911__auto___14316,out))
})();
var inst_14277 = cljs.core.filterv.call(null,inst_14276,inst_14264);
var inst_14264__$1 = inst_14277;
var state_14292__$1 = (function (){var statearr_14307 = state_14292;
(statearr_14307[(10)] = inst_14264__$1);

return statearr_14307;
})();
var statearr_14308_14326 = state_14292__$1;
(statearr_14308_14326[(2)] = null);

(statearr_14308_14326[(1)] = (2));


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
});})(c__5911__auto___14316,out))
;
return ((function (switch__5896__auto__,c__5911__auto___14316,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14312[(0)] = state_machine__5897__auto__);

(statearr_14312[(1)] = (1));

return statearr_14312;
});
var state_machine__5897__auto____1 = (function (state_14292){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14313){if((e14313 instanceof Object)){
var ex__5900__auto__ = e14313;
var statearr_14314_14327 = state_14292;
(statearr_14314_14327[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14328 = state_14292;
state_14292 = G__14328;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14292){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14316,out))
})();
var state__5913__auto__ = (function (){var statearr_14315 = f__5912__auto__.call(null);
(statearr_14315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14316);

return statearr_14315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14316,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5911__auto___14421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14421,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14421,out){
return (function (state_14398){
var state_val_14399 = (state_14398[(1)]);
if((state_val_14399 === (7))){
var inst_14380 = (state_14398[(7)]);
var inst_14380__$1 = (state_14398[(2)]);
var inst_14381 = (inst_14380__$1 == null);
var inst_14382 = cljs.core.not.call(null,inst_14381);
var state_14398__$1 = (function (){var statearr_14400 = state_14398;
(statearr_14400[(7)] = inst_14380__$1);

return statearr_14400;
})();
if(inst_14382){
var statearr_14401_14422 = state_14398__$1;
(statearr_14401_14422[(1)] = (8));

} else {
var statearr_14402_14423 = state_14398__$1;
(statearr_14402_14423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (1))){
var inst_14375 = (0);
var state_14398__$1 = (function (){var statearr_14403 = state_14398;
(statearr_14403[(8)] = inst_14375);

return statearr_14403;
})();
var statearr_14404_14424 = state_14398__$1;
(statearr_14404_14424[(2)] = null);

(statearr_14404_14424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (4))){
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14398__$1,(7),ch);
} else {
if((state_val_14399 === (6))){
var inst_14393 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14405_14425 = state_14398__$1;
(statearr_14405_14425[(2)] = inst_14393);

(statearr_14405_14425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (3))){
var inst_14395 = (state_14398[(2)]);
var inst_14396 = cljs.core.async.close_BANG_.call(null,out);
var state_14398__$1 = (function (){var statearr_14406 = state_14398;
(statearr_14406[(9)] = inst_14395);

return statearr_14406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14398__$1,inst_14396);
} else {
if((state_val_14399 === (2))){
var inst_14375 = (state_14398[(8)]);
var inst_14377 = (inst_14375 < n);
var state_14398__$1 = state_14398;
if(cljs.core.truth_(inst_14377)){
var statearr_14407_14426 = state_14398__$1;
(statearr_14407_14426[(1)] = (4));

} else {
var statearr_14408_14427 = state_14398__$1;
(statearr_14408_14427[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (11))){
var inst_14375 = (state_14398[(8)]);
var inst_14385 = (state_14398[(2)]);
var inst_14386 = (inst_14375 + (1));
var inst_14375__$1 = inst_14386;
var state_14398__$1 = (function (){var statearr_14409 = state_14398;
(statearr_14409[(10)] = inst_14385);

(statearr_14409[(8)] = inst_14375__$1);

return statearr_14409;
})();
var statearr_14410_14428 = state_14398__$1;
(statearr_14410_14428[(2)] = null);

(statearr_14410_14428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (9))){
var state_14398__$1 = state_14398;
var statearr_14411_14429 = state_14398__$1;
(statearr_14411_14429[(2)] = null);

(statearr_14411_14429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (5))){
var state_14398__$1 = state_14398;
var statearr_14412_14430 = state_14398__$1;
(statearr_14412_14430[(2)] = null);

(statearr_14412_14430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (10))){
var inst_14390 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14413_14431 = state_14398__$1;
(statearr_14413_14431[(2)] = inst_14390);

(statearr_14413_14431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (8))){
var inst_14380 = (state_14398[(7)]);
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14398__$1,(11),out,inst_14380);
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
});})(c__5911__auto___14421,out))
;
return ((function (switch__5896__auto__,c__5911__auto___14421,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14417[(0)] = state_machine__5897__auto__);

(statearr_14417[(1)] = (1));

return statearr_14417;
});
var state_machine__5897__auto____1 = (function (state_14398){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14418){if((e14418 instanceof Object)){
var ex__5900__auto__ = e14418;
var statearr_14419_14432 = state_14398;
(statearr_14419_14432[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14433 = state_14398;
state_14398 = G__14433;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14398){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14421,out))
})();
var state__5913__auto__ = (function (){var statearr_14420 = f__5912__auto__.call(null);
(statearr_14420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14421);

return statearr_14420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14421,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t14441 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14441 = (function (ch,f,map_LT_,meta14442){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14442 = meta14442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14441.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14441.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14444 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14444 = (function (fn1,_,meta14442,map_LT_,f,ch,meta14445){
this.fn1 = fn1;
this._ = _;
this.meta14442 = meta14442;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14445 = meta14445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14444.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14434_SHARP_){
return f1.call(null,(((p1__14434_SHARP_ == null))?null:self__.f.call(null,p1__14434_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14446){
var self__ = this;
var _14446__$1 = this;
return self__.meta14445;
});})(___$1))
;

cljs.core.async.t14444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14446,meta14445__$1){
var self__ = this;
var _14446__$1 = this;
return (new cljs.core.async.t14444(self__.fn1,self__._,self__.meta14442,self__.map_LT_,self__.f,self__.ch,meta14445__$1));
});})(___$1))
;

cljs.core.async.t14444.cljs$lang$type = true;

cljs.core.async.t14444.cljs$lang$ctorStr = "cljs.core.async/t14444";

cljs.core.async.t14444.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14444");
});})(___$1))
;

cljs.core.async.__GT_t14444 = ((function (___$1){
return (function __GT_t14444(fn1__$1,___$2,meta14442__$1,map_LT___$1,f__$1,ch__$1,meta14445){
return (new cljs.core.async.t14444(fn1__$1,___$2,meta14442__$1,map_LT___$1,f__$1,ch__$1,meta14445));
});})(___$1))
;

}

return (new cljs.core.async.t14444(fn1,___$1,self__.meta14442,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3676__auto__ = ret;
if(cljs.core.truth_(and__3676__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3676__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t14441.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14441.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14443){
var self__ = this;
var _14443__$1 = this;
return self__.meta14442;
});

cljs.core.async.t14441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14443,meta14442__$1){
var self__ = this;
var _14443__$1 = this;
return (new cljs.core.async.t14441(self__.ch,self__.f,self__.map_LT_,meta14442__$1));
});

cljs.core.async.t14441.cljs$lang$type = true;

cljs.core.async.t14441.cljs$lang$ctorStr = "cljs.core.async/t14441";

cljs.core.async.t14441.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14441");
});

cljs.core.async.__GT_t14441 = (function __GT_t14441(ch__$1,f__$1,map_LT___$1,meta14442){
return (new cljs.core.async.t14441(ch__$1,f__$1,map_LT___$1,meta14442));
});

}

return (new cljs.core.async.t14441(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t14450 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14450 = (function (ch,f,map_GT_,meta14451){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14451 = meta14451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14450.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14450.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14450.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14452){
var self__ = this;
var _14452__$1 = this;
return self__.meta14451;
});

cljs.core.async.t14450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14452,meta14451__$1){
var self__ = this;
var _14452__$1 = this;
return (new cljs.core.async.t14450(self__.ch,self__.f,self__.map_GT_,meta14451__$1));
});

cljs.core.async.t14450.cljs$lang$type = true;

cljs.core.async.t14450.cljs$lang$ctorStr = "cljs.core.async/t14450";

cljs.core.async.t14450.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14450");
});

cljs.core.async.__GT_t14450 = (function __GT_t14450(ch__$1,f__$1,map_GT___$1,meta14451){
return (new cljs.core.async.t14450(ch__$1,f__$1,map_GT___$1,meta14451));
});

}

return (new cljs.core.async.t14450(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t14456 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14456 = (function (ch,p,filter_GT_,meta14457){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14457 = meta14457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14456.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14456.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14456.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14458){
var self__ = this;
var _14458__$1 = this;
return self__.meta14457;
});

cljs.core.async.t14456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14458,meta14457__$1){
var self__ = this;
var _14458__$1 = this;
return (new cljs.core.async.t14456(self__.ch,self__.p,self__.filter_GT_,meta14457__$1));
});

cljs.core.async.t14456.cljs$lang$type = true;

cljs.core.async.t14456.cljs$lang$ctorStr = "cljs.core.async/t14456";

cljs.core.async.t14456.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14456");
});

cljs.core.async.__GT_t14456 = (function __GT_t14456(ch__$1,p__$1,filter_GT___$1,meta14457){
return (new cljs.core.async.t14456(ch__$1,p__$1,filter_GT___$1,meta14457));
});

}

return (new cljs.core.async.t14456(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5911__auto___14541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14541,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14541,out){
return (function (state_14520){
var state_val_14521 = (state_14520[(1)]);
if((state_val_14521 === (7))){
var inst_14516 = (state_14520[(2)]);
var state_14520__$1 = state_14520;
var statearr_14522_14542 = state_14520__$1;
(statearr_14522_14542[(2)] = inst_14516);

(statearr_14522_14542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14521 === (1))){
var state_14520__$1 = state_14520;
var statearr_14523_14543 = state_14520__$1;
(statearr_14523_14543[(2)] = null);

(statearr_14523_14543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14521 === (4))){
var inst_14502 = (state_14520[(7)]);
var inst_14502__$1 = (state_14520[(2)]);
var inst_14503 = (inst_14502__$1 == null);
var state_14520__$1 = (function (){var statearr_14524 = state_14520;
(statearr_14524[(7)] = inst_14502__$1);

return statearr_14524;
})();
if(cljs.core.truth_(inst_14503)){
var statearr_14525_14544 = state_14520__$1;
(statearr_14525_14544[(1)] = (5));

} else {
var statearr_14526_14545 = state_14520__$1;
(statearr_14526_14545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14521 === (6))){
var inst_14502 = (state_14520[(7)]);
var inst_14507 = p.call(null,inst_14502);
var state_14520__$1 = state_14520;
if(cljs.core.truth_(inst_14507)){
var statearr_14527_14546 = state_14520__$1;
(statearr_14527_14546[(1)] = (8));

} else {
var statearr_14528_14547 = state_14520__$1;
(statearr_14528_14547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14521 === (3))){
var inst_14518 = (state_14520[(2)]);
var state_14520__$1 = state_14520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14520__$1,inst_14518);
} else {
if((state_val_14521 === (2))){
var state_14520__$1 = state_14520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14520__$1,(4),ch);
} else {
if((state_val_14521 === (11))){
var inst_14510 = (state_14520[(2)]);
var state_14520__$1 = state_14520;
var statearr_14529_14548 = state_14520__$1;
(statearr_14529_14548[(2)] = inst_14510);

(statearr_14529_14548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14521 === (9))){
var state_14520__$1 = state_14520;
var statearr_14530_14549 = state_14520__$1;
(statearr_14530_14549[(2)] = null);

(statearr_14530_14549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14521 === (5))){
var inst_14505 = cljs.core.async.close_BANG_.call(null,out);
var state_14520__$1 = state_14520;
var statearr_14531_14550 = state_14520__$1;
(statearr_14531_14550[(2)] = inst_14505);

(statearr_14531_14550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14521 === (10))){
var inst_14513 = (state_14520[(2)]);
var state_14520__$1 = (function (){var statearr_14532 = state_14520;
(statearr_14532[(8)] = inst_14513);

return statearr_14532;
})();
var statearr_14533_14551 = state_14520__$1;
(statearr_14533_14551[(2)] = null);

(statearr_14533_14551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14521 === (8))){
var inst_14502 = (state_14520[(7)]);
var state_14520__$1 = state_14520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14520__$1,(11),out,inst_14502);
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
});})(c__5911__auto___14541,out))
;
return ((function (switch__5896__auto__,c__5911__auto___14541,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14537 = [null,null,null,null,null,null,null,null,null];
(statearr_14537[(0)] = state_machine__5897__auto__);

(statearr_14537[(1)] = (1));

return statearr_14537;
});
var state_machine__5897__auto____1 = (function (state_14520){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14538){if((e14538 instanceof Object)){
var ex__5900__auto__ = e14538;
var statearr_14539_14552 = state_14520;
(statearr_14539_14552[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14553 = state_14520;
state_14520 = G__14553;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14520){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14541,out))
})();
var state__5913__auto__ = (function (){var statearr_14540 = f__5912__auto__.call(null);
(statearr_14540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14541);

return statearr_14540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14541,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__5911__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto__){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto__){
return (function (state_14719){
var state_val_14720 = (state_14719[(1)]);
if((state_val_14720 === (7))){
var inst_14715 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14721_14762 = state_14719__$1;
(statearr_14721_14762[(2)] = inst_14715);

(statearr_14721_14762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (20))){
var inst_14685 = (state_14719[(7)]);
var inst_14696 = (state_14719[(2)]);
var inst_14697 = cljs.core.next.call(null,inst_14685);
var inst_14671 = inst_14697;
var inst_14672 = null;
var inst_14673 = (0);
var inst_14674 = (0);
var state_14719__$1 = (function (){var statearr_14722 = state_14719;
(statearr_14722[(8)] = inst_14674);

(statearr_14722[(9)] = inst_14696);

(statearr_14722[(10)] = inst_14672);

(statearr_14722[(11)] = inst_14673);

(statearr_14722[(12)] = inst_14671);

return statearr_14722;
})();
var statearr_14723_14763 = state_14719__$1;
(statearr_14723_14763[(2)] = null);

(statearr_14723_14763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (1))){
var state_14719__$1 = state_14719;
var statearr_14724_14764 = state_14719__$1;
(statearr_14724_14764[(2)] = null);

(statearr_14724_14764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (4))){
var inst_14660 = (state_14719[(13)]);
var inst_14660__$1 = (state_14719[(2)]);
var inst_14661 = (inst_14660__$1 == null);
var state_14719__$1 = (function (){var statearr_14725 = state_14719;
(statearr_14725[(13)] = inst_14660__$1);

return statearr_14725;
})();
if(cljs.core.truth_(inst_14661)){
var statearr_14726_14765 = state_14719__$1;
(statearr_14726_14765[(1)] = (5));

} else {
var statearr_14727_14766 = state_14719__$1;
(statearr_14727_14766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (15))){
var state_14719__$1 = state_14719;
var statearr_14731_14767 = state_14719__$1;
(statearr_14731_14767[(2)] = null);

(statearr_14731_14767[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (21))){
var state_14719__$1 = state_14719;
var statearr_14732_14768 = state_14719__$1;
(statearr_14732_14768[(2)] = null);

(statearr_14732_14768[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (13))){
var inst_14674 = (state_14719[(8)]);
var inst_14672 = (state_14719[(10)]);
var inst_14673 = (state_14719[(11)]);
var inst_14671 = (state_14719[(12)]);
var inst_14681 = (state_14719[(2)]);
var inst_14682 = (inst_14674 + (1));
var tmp14728 = inst_14672;
var tmp14729 = inst_14673;
var tmp14730 = inst_14671;
var inst_14671__$1 = tmp14730;
var inst_14672__$1 = tmp14728;
var inst_14673__$1 = tmp14729;
var inst_14674__$1 = inst_14682;
var state_14719__$1 = (function (){var statearr_14733 = state_14719;
(statearr_14733[(8)] = inst_14674__$1);

(statearr_14733[(10)] = inst_14672__$1);

(statearr_14733[(14)] = inst_14681);

(statearr_14733[(11)] = inst_14673__$1);

(statearr_14733[(12)] = inst_14671__$1);

return statearr_14733;
})();
var statearr_14734_14769 = state_14719__$1;
(statearr_14734_14769[(2)] = null);

(statearr_14734_14769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (22))){
var state_14719__$1 = state_14719;
var statearr_14735_14770 = state_14719__$1;
(statearr_14735_14770[(2)] = null);

(statearr_14735_14770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (6))){
var inst_14660 = (state_14719[(13)]);
var inst_14669 = f.call(null,inst_14660);
var inst_14670 = cljs.core.seq.call(null,inst_14669);
var inst_14671 = inst_14670;
var inst_14672 = null;
var inst_14673 = (0);
var inst_14674 = (0);
var state_14719__$1 = (function (){var statearr_14736 = state_14719;
(statearr_14736[(8)] = inst_14674);

(statearr_14736[(10)] = inst_14672);

(statearr_14736[(11)] = inst_14673);

(statearr_14736[(12)] = inst_14671);

return statearr_14736;
})();
var statearr_14737_14771 = state_14719__$1;
(statearr_14737_14771[(2)] = null);

(statearr_14737_14771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (17))){
var inst_14685 = (state_14719[(7)]);
var inst_14689 = cljs.core.chunk_first.call(null,inst_14685);
var inst_14690 = cljs.core.chunk_rest.call(null,inst_14685);
var inst_14691 = cljs.core.count.call(null,inst_14689);
var inst_14671 = inst_14690;
var inst_14672 = inst_14689;
var inst_14673 = inst_14691;
var inst_14674 = (0);
var state_14719__$1 = (function (){var statearr_14738 = state_14719;
(statearr_14738[(8)] = inst_14674);

(statearr_14738[(10)] = inst_14672);

(statearr_14738[(11)] = inst_14673);

(statearr_14738[(12)] = inst_14671);

return statearr_14738;
})();
var statearr_14739_14772 = state_14719__$1;
(statearr_14739_14772[(2)] = null);

(statearr_14739_14772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (3))){
var inst_14717 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14719__$1,inst_14717);
} else {
if((state_val_14720 === (12))){
var inst_14705 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14740_14773 = state_14719__$1;
(statearr_14740_14773[(2)] = inst_14705);

(statearr_14740_14773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (2))){
var state_14719__$1 = state_14719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14719__$1,(4),in$);
} else {
if((state_val_14720 === (23))){
var inst_14713 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14741_14774 = state_14719__$1;
(statearr_14741_14774[(2)] = inst_14713);

(statearr_14741_14774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (19))){
var inst_14700 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14742_14775 = state_14719__$1;
(statearr_14742_14775[(2)] = inst_14700);

(statearr_14742_14775[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (11))){
var inst_14685 = (state_14719[(7)]);
var inst_14671 = (state_14719[(12)]);
var inst_14685__$1 = cljs.core.seq.call(null,inst_14671);
var state_14719__$1 = (function (){var statearr_14743 = state_14719;
(statearr_14743[(7)] = inst_14685__$1);

return statearr_14743;
})();
if(inst_14685__$1){
var statearr_14744_14776 = state_14719__$1;
(statearr_14744_14776[(1)] = (14));

} else {
var statearr_14745_14777 = state_14719__$1;
(statearr_14745_14777[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (9))){
var inst_14707 = (state_14719[(2)]);
var inst_14708 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14719__$1 = (function (){var statearr_14746 = state_14719;
(statearr_14746[(15)] = inst_14707);

return statearr_14746;
})();
if(cljs.core.truth_(inst_14708)){
var statearr_14747_14778 = state_14719__$1;
(statearr_14747_14778[(1)] = (21));

} else {
var statearr_14748_14779 = state_14719__$1;
(statearr_14748_14779[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (5))){
var inst_14663 = cljs.core.async.close_BANG_.call(null,out);
var state_14719__$1 = state_14719;
var statearr_14749_14780 = state_14719__$1;
(statearr_14749_14780[(2)] = inst_14663);

(statearr_14749_14780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (14))){
var inst_14685 = (state_14719[(7)]);
var inst_14687 = cljs.core.chunked_seq_QMARK_.call(null,inst_14685);
var state_14719__$1 = state_14719;
if(inst_14687){
var statearr_14750_14781 = state_14719__$1;
(statearr_14750_14781[(1)] = (17));

} else {
var statearr_14751_14782 = state_14719__$1;
(statearr_14751_14782[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (16))){
var inst_14703 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14752_14783 = state_14719__$1;
(statearr_14752_14783[(2)] = inst_14703);

(statearr_14752_14783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (10))){
var inst_14674 = (state_14719[(8)]);
var inst_14672 = (state_14719[(10)]);
var inst_14679 = cljs.core._nth.call(null,inst_14672,inst_14674);
var state_14719__$1 = state_14719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14719__$1,(13),out,inst_14679);
} else {
if((state_val_14720 === (18))){
var inst_14685 = (state_14719[(7)]);
var inst_14694 = cljs.core.first.call(null,inst_14685);
var state_14719__$1 = state_14719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14719__$1,(20),out,inst_14694);
} else {
if((state_val_14720 === (8))){
var inst_14674 = (state_14719[(8)]);
var inst_14673 = (state_14719[(11)]);
var inst_14676 = (inst_14674 < inst_14673);
var inst_14677 = inst_14676;
var state_14719__$1 = state_14719;
if(cljs.core.truth_(inst_14677)){
var statearr_14753_14784 = state_14719__$1;
(statearr_14753_14784[(1)] = (10));

} else {
var statearr_14754_14785 = state_14719__$1;
(statearr_14754_14785[(1)] = (11));

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
var statearr_14758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14758[(0)] = state_machine__5897__auto__);

(statearr_14758[(1)] = (1));

return statearr_14758;
});
var state_machine__5897__auto____1 = (function (state_14719){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14759){if((e14759 instanceof Object)){
var ex__5900__auto__ = e14759;
var statearr_14760_14786 = state_14719;
(statearr_14760_14786[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14787 = state_14719;
state_14719 = G__14787;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14719){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_14761 = f__5912__auto__.call(null);
(statearr_14761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_14761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto__))
);

return c__5911__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5911__auto___14884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14884,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14884,out){
return (function (state_14859){
var state_val_14860 = (state_14859[(1)]);
if((state_val_14860 === (7))){
var inst_14854 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14861_14885 = state_14859__$1;
(statearr_14861_14885[(2)] = inst_14854);

(statearr_14861_14885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (1))){
var inst_14836 = null;
var state_14859__$1 = (function (){var statearr_14862 = state_14859;
(statearr_14862[(7)] = inst_14836);

return statearr_14862;
})();
var statearr_14863_14886 = state_14859__$1;
(statearr_14863_14886[(2)] = null);

(statearr_14863_14886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (4))){
var inst_14839 = (state_14859[(8)]);
var inst_14839__$1 = (state_14859[(2)]);
var inst_14840 = (inst_14839__$1 == null);
var inst_14841 = cljs.core.not.call(null,inst_14840);
var state_14859__$1 = (function (){var statearr_14864 = state_14859;
(statearr_14864[(8)] = inst_14839__$1);

return statearr_14864;
})();
if(inst_14841){
var statearr_14865_14887 = state_14859__$1;
(statearr_14865_14887[(1)] = (5));

} else {
var statearr_14866_14888 = state_14859__$1;
(statearr_14866_14888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (6))){
var state_14859__$1 = state_14859;
var statearr_14867_14889 = state_14859__$1;
(statearr_14867_14889[(2)] = null);

(statearr_14867_14889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (3))){
var inst_14856 = (state_14859[(2)]);
var inst_14857 = cljs.core.async.close_BANG_.call(null,out);
var state_14859__$1 = (function (){var statearr_14868 = state_14859;
(statearr_14868[(9)] = inst_14856);

return statearr_14868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14859__$1,inst_14857);
} else {
if((state_val_14860 === (2))){
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14859__$1,(4),ch);
} else {
if((state_val_14860 === (11))){
var inst_14839 = (state_14859[(8)]);
var inst_14848 = (state_14859[(2)]);
var inst_14836 = inst_14839;
var state_14859__$1 = (function (){var statearr_14869 = state_14859;
(statearr_14869[(7)] = inst_14836);

(statearr_14869[(10)] = inst_14848);

return statearr_14869;
})();
var statearr_14870_14890 = state_14859__$1;
(statearr_14870_14890[(2)] = null);

(statearr_14870_14890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (9))){
var inst_14839 = (state_14859[(8)]);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14859__$1,(11),out,inst_14839);
} else {
if((state_val_14860 === (5))){
var inst_14839 = (state_14859[(8)]);
var inst_14836 = (state_14859[(7)]);
var inst_14843 = cljs.core._EQ_.call(null,inst_14839,inst_14836);
var state_14859__$1 = state_14859;
if(inst_14843){
var statearr_14872_14891 = state_14859__$1;
(statearr_14872_14891[(1)] = (8));

} else {
var statearr_14873_14892 = state_14859__$1;
(statearr_14873_14892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (10))){
var inst_14851 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14874_14893 = state_14859__$1;
(statearr_14874_14893[(2)] = inst_14851);

(statearr_14874_14893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (8))){
var inst_14836 = (state_14859[(7)]);
var tmp14871 = inst_14836;
var inst_14836__$1 = tmp14871;
var state_14859__$1 = (function (){var statearr_14875 = state_14859;
(statearr_14875[(7)] = inst_14836__$1);

return statearr_14875;
})();
var statearr_14876_14894 = state_14859__$1;
(statearr_14876_14894[(2)] = null);

(statearr_14876_14894[(1)] = (2));


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
});})(c__5911__auto___14884,out))
;
return ((function (switch__5896__auto__,c__5911__auto___14884,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14880[(0)] = state_machine__5897__auto__);

(statearr_14880[(1)] = (1));

return statearr_14880;
});
var state_machine__5897__auto____1 = (function (state_14859){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14881){if((e14881 instanceof Object)){
var ex__5900__auto__ = e14881;
var statearr_14882_14895 = state_14859;
(statearr_14882_14895[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14896 = state_14859;
state_14859 = G__14896;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14859){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14884,out))
})();
var state__5913__auto__ = (function (){var statearr_14883 = f__5912__auto__.call(null);
(statearr_14883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14884);

return statearr_14883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14884,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5911__auto___15031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___15031,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___15031,out){
return (function (state_15001){
var state_val_15002 = (state_15001[(1)]);
if((state_val_15002 === (7))){
var inst_14997 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15003_15032 = state_15001__$1;
(statearr_15003_15032[(2)] = inst_14997);

(statearr_15003_15032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (1))){
var inst_14964 = (new Array(n));
var inst_14965 = inst_14964;
var inst_14966 = (0);
var state_15001__$1 = (function (){var statearr_15004 = state_15001;
(statearr_15004[(7)] = inst_14966);

(statearr_15004[(8)] = inst_14965);

return statearr_15004;
})();
var statearr_15005_15033 = state_15001__$1;
(statearr_15005_15033[(2)] = null);

(statearr_15005_15033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (4))){
var inst_14969 = (state_15001[(9)]);
var inst_14969__$1 = (state_15001[(2)]);
var inst_14970 = (inst_14969__$1 == null);
var inst_14971 = cljs.core.not.call(null,inst_14970);
var state_15001__$1 = (function (){var statearr_15006 = state_15001;
(statearr_15006[(9)] = inst_14969__$1);

return statearr_15006;
})();
if(inst_14971){
var statearr_15007_15034 = state_15001__$1;
(statearr_15007_15034[(1)] = (5));

} else {
var statearr_15008_15035 = state_15001__$1;
(statearr_15008_15035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (15))){
var inst_14991 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15009_15036 = state_15001__$1;
(statearr_15009_15036[(2)] = inst_14991);

(statearr_15009_15036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (13))){
var state_15001__$1 = state_15001;
var statearr_15010_15037 = state_15001__$1;
(statearr_15010_15037[(2)] = null);

(statearr_15010_15037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (6))){
var inst_14966 = (state_15001[(7)]);
var inst_14987 = (inst_14966 > (0));
var state_15001__$1 = state_15001;
if(cljs.core.truth_(inst_14987)){
var statearr_15011_15038 = state_15001__$1;
(statearr_15011_15038[(1)] = (12));

} else {
var statearr_15012_15039 = state_15001__$1;
(statearr_15012_15039[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (3))){
var inst_14999 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15001__$1,inst_14999);
} else {
if((state_val_15002 === (12))){
var inst_14965 = (state_15001[(8)]);
var inst_14989 = cljs.core.vec.call(null,inst_14965);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15001__$1,(15),out,inst_14989);
} else {
if((state_val_15002 === (2))){
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15001__$1,(4),ch);
} else {
if((state_val_15002 === (11))){
var inst_14981 = (state_15001[(2)]);
var inst_14982 = (new Array(n));
var inst_14965 = inst_14982;
var inst_14966 = (0);
var state_15001__$1 = (function (){var statearr_15013 = state_15001;
(statearr_15013[(7)] = inst_14966);

(statearr_15013[(10)] = inst_14981);

(statearr_15013[(8)] = inst_14965);

return statearr_15013;
})();
var statearr_15014_15040 = state_15001__$1;
(statearr_15014_15040[(2)] = null);

(statearr_15014_15040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (9))){
var inst_14965 = (state_15001[(8)]);
var inst_14979 = cljs.core.vec.call(null,inst_14965);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15001__$1,(11),out,inst_14979);
} else {
if((state_val_15002 === (5))){
var inst_14966 = (state_15001[(7)]);
var inst_14974 = (state_15001[(11)]);
var inst_14969 = (state_15001[(9)]);
var inst_14965 = (state_15001[(8)]);
var inst_14973 = (inst_14965[inst_14966] = inst_14969);
var inst_14974__$1 = (inst_14966 + (1));
var inst_14975 = (inst_14974__$1 < n);
var state_15001__$1 = (function (){var statearr_15015 = state_15001;
(statearr_15015[(12)] = inst_14973);

(statearr_15015[(11)] = inst_14974__$1);

return statearr_15015;
})();
if(cljs.core.truth_(inst_14975)){
var statearr_15016_15041 = state_15001__$1;
(statearr_15016_15041[(1)] = (8));

} else {
var statearr_15017_15042 = state_15001__$1;
(statearr_15017_15042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (14))){
var inst_14994 = (state_15001[(2)]);
var inst_14995 = cljs.core.async.close_BANG_.call(null,out);
var state_15001__$1 = (function (){var statearr_15019 = state_15001;
(statearr_15019[(13)] = inst_14994);

return statearr_15019;
})();
var statearr_15020_15043 = state_15001__$1;
(statearr_15020_15043[(2)] = inst_14995);

(statearr_15020_15043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (10))){
var inst_14985 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15021_15044 = state_15001__$1;
(statearr_15021_15044[(2)] = inst_14985);

(statearr_15021_15044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (8))){
var inst_14974 = (state_15001[(11)]);
var inst_14965 = (state_15001[(8)]);
var tmp15018 = inst_14965;
var inst_14965__$1 = tmp15018;
var inst_14966 = inst_14974;
var state_15001__$1 = (function (){var statearr_15022 = state_15001;
(statearr_15022[(7)] = inst_14966);

(statearr_15022[(8)] = inst_14965__$1);

return statearr_15022;
})();
var statearr_15023_15045 = state_15001__$1;
(statearr_15023_15045[(2)] = null);

(statearr_15023_15045[(1)] = (2));


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
});})(c__5911__auto___15031,out))
;
return ((function (switch__5896__auto__,c__5911__auto___15031,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_15027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15027[(0)] = state_machine__5897__auto__);

(statearr_15027[(1)] = (1));

return statearr_15027;
});
var state_machine__5897__auto____1 = (function (state_15001){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_15001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e15028){if((e15028 instanceof Object)){
var ex__5900__auto__ = e15028;
var statearr_15029_15046 = state_15001;
(statearr_15029_15046[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15047 = state_15001;
state_15001 = G__15047;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_15001){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_15001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___15031,out))
})();
var state__5913__auto__ = (function (){var statearr_15030 = f__5912__auto__.call(null);
(statearr_15030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___15031);

return statearr_15030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___15031,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5911__auto___15190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___15190,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___15190,out){
return (function (state_15160){
var state_val_15161 = (state_15160[(1)]);
if((state_val_15161 === (7))){
var inst_15156 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15162_15191 = state_15160__$1;
(statearr_15162_15191[(2)] = inst_15156);

(statearr_15162_15191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (1))){
var inst_15119 = [];
var inst_15120 = inst_15119;
var inst_15121 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15160__$1 = (function (){var statearr_15163 = state_15160;
(statearr_15163[(7)] = inst_15120);

(statearr_15163[(8)] = inst_15121);

return statearr_15163;
})();
var statearr_15164_15192 = state_15160__$1;
(statearr_15164_15192[(2)] = null);

(statearr_15164_15192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (4))){
var inst_15124 = (state_15160[(9)]);
var inst_15124__$1 = (state_15160[(2)]);
var inst_15125 = (inst_15124__$1 == null);
var inst_15126 = cljs.core.not.call(null,inst_15125);
var state_15160__$1 = (function (){var statearr_15165 = state_15160;
(statearr_15165[(9)] = inst_15124__$1);

return statearr_15165;
})();
if(inst_15126){
var statearr_15166_15193 = state_15160__$1;
(statearr_15166_15193[(1)] = (5));

} else {
var statearr_15167_15194 = state_15160__$1;
(statearr_15167_15194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (15))){
var inst_15150 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15168_15195 = state_15160__$1;
(statearr_15168_15195[(2)] = inst_15150);

(statearr_15168_15195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (13))){
var state_15160__$1 = state_15160;
var statearr_15169_15196 = state_15160__$1;
(statearr_15169_15196[(2)] = null);

(statearr_15169_15196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (6))){
var inst_15120 = (state_15160[(7)]);
var inst_15145 = inst_15120.length;
var inst_15146 = (inst_15145 > (0));
var state_15160__$1 = state_15160;
if(cljs.core.truth_(inst_15146)){
var statearr_15170_15197 = state_15160__$1;
(statearr_15170_15197[(1)] = (12));

} else {
var statearr_15171_15198 = state_15160__$1;
(statearr_15171_15198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (3))){
var inst_15158 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15160__$1,inst_15158);
} else {
if((state_val_15161 === (12))){
var inst_15120 = (state_15160[(7)]);
var inst_15148 = cljs.core.vec.call(null,inst_15120);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15160__$1,(15),out,inst_15148);
} else {
if((state_val_15161 === (2))){
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15160__$1,(4),ch);
} else {
if((state_val_15161 === (11))){
var inst_15124 = (state_15160[(9)]);
var inst_15128 = (state_15160[(10)]);
var inst_15138 = (state_15160[(2)]);
var inst_15139 = [];
var inst_15140 = inst_15139.push(inst_15124);
var inst_15120 = inst_15139;
var inst_15121 = inst_15128;
var state_15160__$1 = (function (){var statearr_15172 = state_15160;
(statearr_15172[(7)] = inst_15120);

(statearr_15172[(11)] = inst_15140);

(statearr_15172[(12)] = inst_15138);

(statearr_15172[(8)] = inst_15121);

return statearr_15172;
})();
var statearr_15173_15199 = state_15160__$1;
(statearr_15173_15199[(2)] = null);

(statearr_15173_15199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (9))){
var inst_15120 = (state_15160[(7)]);
var inst_15136 = cljs.core.vec.call(null,inst_15120);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15160__$1,(11),out,inst_15136);
} else {
if((state_val_15161 === (5))){
var inst_15124 = (state_15160[(9)]);
var inst_15121 = (state_15160[(8)]);
var inst_15128 = (state_15160[(10)]);
var inst_15128__$1 = f.call(null,inst_15124);
var inst_15129 = cljs.core._EQ_.call(null,inst_15128__$1,inst_15121);
var inst_15130 = cljs.core.keyword_identical_QMARK_.call(null,inst_15121,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15131 = (inst_15129) || (inst_15130);
var state_15160__$1 = (function (){var statearr_15174 = state_15160;
(statearr_15174[(10)] = inst_15128__$1);

return statearr_15174;
})();
if(cljs.core.truth_(inst_15131)){
var statearr_15175_15200 = state_15160__$1;
(statearr_15175_15200[(1)] = (8));

} else {
var statearr_15176_15201 = state_15160__$1;
(statearr_15176_15201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (14))){
var inst_15153 = (state_15160[(2)]);
var inst_15154 = cljs.core.async.close_BANG_.call(null,out);
var state_15160__$1 = (function (){var statearr_15178 = state_15160;
(statearr_15178[(13)] = inst_15153);

return statearr_15178;
})();
var statearr_15179_15202 = state_15160__$1;
(statearr_15179_15202[(2)] = inst_15154);

(statearr_15179_15202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (10))){
var inst_15143 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15180_15203 = state_15160__$1;
(statearr_15180_15203[(2)] = inst_15143);

(statearr_15180_15203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (8))){
var inst_15120 = (state_15160[(7)]);
var inst_15124 = (state_15160[(9)]);
var inst_15128 = (state_15160[(10)]);
var inst_15133 = inst_15120.push(inst_15124);
var tmp15177 = inst_15120;
var inst_15120__$1 = tmp15177;
var inst_15121 = inst_15128;
var state_15160__$1 = (function (){var statearr_15181 = state_15160;
(statearr_15181[(7)] = inst_15120__$1);

(statearr_15181[(14)] = inst_15133);

(statearr_15181[(8)] = inst_15121);

return statearr_15181;
})();
var statearr_15182_15204 = state_15160__$1;
(statearr_15182_15204[(2)] = null);

(statearr_15182_15204[(1)] = (2));


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
});})(c__5911__auto___15190,out))
;
return ((function (switch__5896__auto__,c__5911__auto___15190,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_15186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15186[(0)] = state_machine__5897__auto__);

(statearr_15186[(1)] = (1));

return statearr_15186;
});
var state_machine__5897__auto____1 = (function (state_15160){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_15160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e15187){if((e15187 instanceof Object)){
var ex__5900__auto__ = e15187;
var statearr_15188_15205 = state_15160;
(statearr_15188_15205[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15206 = state_15160;
state_15160 = G__15206;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_15160){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_15160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___15190,out))
})();
var state__5913__auto__ = (function (){var statearr_15189 = f__5912__auto__.call(null);
(statearr_15189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___15190);

return statearr_15189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___15190,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map