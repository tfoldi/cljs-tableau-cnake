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
if(typeof cljs.core.async.t12259 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12259 = (function (f,fn_handler,meta12260){
this.f = f;
this.fn_handler = fn_handler;
this.meta12260 = meta12260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12259.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12261){
var self__ = this;
var _12261__$1 = this;
return self__.meta12260;
});

cljs.core.async.t12259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12261,meta12260__$1){
var self__ = this;
var _12261__$1 = this;
return (new cljs.core.async.t12259(self__.f,self__.fn_handler,meta12260__$1));
});

cljs.core.async.t12259.cljs$lang$type = true;

cljs.core.async.t12259.cljs$lang$ctorStr = "cljs.core.async/t12259";

cljs.core.async.t12259.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t12259");
});

cljs.core.async.__GT_t12259 = (function __GT_t12259(f__$1,fn_handler__$1,meta12260){
return (new cljs.core.async.t12259(f__$1,fn_handler__$1,meta12260));
});

}

return (new cljs.core.async.t12259(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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
var G__12263 = buff;
if(G__12263){
var bit__4369__auto__ = null;
if(cljs.core.truth_((function (){var or__3688__auto__ = bit__4369__auto__;
if(cljs.core.truth_(or__3688__auto__)){
return or__3688__auto__;
} else {
return G__12263.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12263.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12263);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12263);
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
var val_12264 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12264);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12264,ret){
return (function (){
return fn1.call(null,val_12264);
});})(val_12264,ret))
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
var n__4575__auto___12265 = n;
var x_12266 = (0);
while(true){
if((x_12266 < n__4575__auto___12265)){
(a[x_12266] = (0));

var G__12267 = (x_12266 + (1));
x_12266 = G__12267;
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

var G__12268 = (i + (1));
i = G__12268;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12272 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12272 = (function (flag,alt_flag,meta12273){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12273 = meta12273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12272.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12274){
var self__ = this;
var _12274__$1 = this;
return self__.meta12273;
});})(flag))
;

cljs.core.async.t12272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12274,meta12273__$1){
var self__ = this;
var _12274__$1 = this;
return (new cljs.core.async.t12272(self__.flag,self__.alt_flag,meta12273__$1));
});})(flag))
;

cljs.core.async.t12272.cljs$lang$type = true;

cljs.core.async.t12272.cljs$lang$ctorStr = "cljs.core.async/t12272";

cljs.core.async.t12272.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t12272");
});})(flag))
;

cljs.core.async.__GT_t12272 = ((function (flag){
return (function __GT_t12272(flag__$1,alt_flag__$1,meta12273){
return (new cljs.core.async.t12272(flag__$1,alt_flag__$1,meta12273));
});})(flag))
;

}

return (new cljs.core.async.t12272(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t12278 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12278 = (function (cb,flag,alt_handler,meta12279){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12279 = meta12279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12278.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12280){
var self__ = this;
var _12280__$1 = this;
return self__.meta12279;
});

cljs.core.async.t12278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12280,meta12279__$1){
var self__ = this;
var _12280__$1 = this;
return (new cljs.core.async.t12278(self__.cb,self__.flag,self__.alt_handler,meta12279__$1));
});

cljs.core.async.t12278.cljs$lang$type = true;

cljs.core.async.t12278.cljs$lang$ctorStr = "cljs.core.async/t12278";

cljs.core.async.t12278.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t12278");
});

cljs.core.async.__GT_t12278 = (function __GT_t12278(cb__$1,flag__$1,alt_handler__$1,meta12279){
return (new cljs.core.async.t12278(cb__$1,flag__$1,alt_handler__$1,meta12279));
});

}

return (new cljs.core.async.t12278(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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
return (function (p1__12281_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12281_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12282_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12282_SHARP_,port], null));
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
var G__12283 = (i + (1));
i = G__12283;
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
var alts_BANG___delegate = function (ports,p__12284){
var map__12286 = p__12284;
var map__12286__$1 = ((cljs.core.seq_QMARK_.call(null,map__12286))?cljs.core.apply.call(null,cljs.core.hash_map,map__12286):map__12286);
var opts = map__12286__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12284 = null;
if (arguments.length > 1) {
  p__12284 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__12284);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12287){
var ports = cljs.core.first(arglist__12287);
var p__12284 = cljs.core.rest(arglist__12287);
return alts_BANG___delegate(ports,p__12284);
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
var c__5911__auto___12382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___12382){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___12382){
return (function (state_12358){
var state_val_12359 = (state_12358[(1)]);
if((state_val_12359 === (7))){
var inst_12354 = (state_12358[(2)]);
var state_12358__$1 = state_12358;
var statearr_12360_12383 = state_12358__$1;
(statearr_12360_12383[(2)] = inst_12354);

(statearr_12360_12383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (1))){
var state_12358__$1 = state_12358;
var statearr_12361_12384 = state_12358__$1;
(statearr_12361_12384[(2)] = null);

(statearr_12361_12384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (4))){
var inst_12337 = (state_12358[(7)]);
var inst_12337__$1 = (state_12358[(2)]);
var inst_12338 = (inst_12337__$1 == null);
var state_12358__$1 = (function (){var statearr_12362 = state_12358;
(statearr_12362[(7)] = inst_12337__$1);

return statearr_12362;
})();
if(cljs.core.truth_(inst_12338)){
var statearr_12363_12385 = state_12358__$1;
(statearr_12363_12385[(1)] = (5));

} else {
var statearr_12364_12386 = state_12358__$1;
(statearr_12364_12386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (13))){
var state_12358__$1 = state_12358;
var statearr_12365_12387 = state_12358__$1;
(statearr_12365_12387[(2)] = null);

(statearr_12365_12387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (6))){
var inst_12337 = (state_12358[(7)]);
var state_12358__$1 = state_12358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12358__$1,(11),to,inst_12337);
} else {
if((state_val_12359 === (3))){
var inst_12356 = (state_12358[(2)]);
var state_12358__$1 = state_12358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12358__$1,inst_12356);
} else {
if((state_val_12359 === (12))){
var state_12358__$1 = state_12358;
var statearr_12366_12388 = state_12358__$1;
(statearr_12366_12388[(2)] = null);

(statearr_12366_12388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (2))){
var state_12358__$1 = state_12358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12358__$1,(4),from);
} else {
if((state_val_12359 === (11))){
var inst_12347 = (state_12358[(2)]);
var state_12358__$1 = state_12358;
if(cljs.core.truth_(inst_12347)){
var statearr_12367_12389 = state_12358__$1;
(statearr_12367_12389[(1)] = (12));

} else {
var statearr_12368_12390 = state_12358__$1;
(statearr_12368_12390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (9))){
var state_12358__$1 = state_12358;
var statearr_12369_12391 = state_12358__$1;
(statearr_12369_12391[(2)] = null);

(statearr_12369_12391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (5))){
var state_12358__$1 = state_12358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12370_12392 = state_12358__$1;
(statearr_12370_12392[(1)] = (8));

} else {
var statearr_12371_12393 = state_12358__$1;
(statearr_12371_12393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (14))){
var inst_12352 = (state_12358[(2)]);
var state_12358__$1 = state_12358;
var statearr_12372_12394 = state_12358__$1;
(statearr_12372_12394[(2)] = inst_12352);

(statearr_12372_12394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (10))){
var inst_12344 = (state_12358[(2)]);
var state_12358__$1 = state_12358;
var statearr_12373_12395 = state_12358__$1;
(statearr_12373_12395[(2)] = inst_12344);

(statearr_12373_12395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12359 === (8))){
var inst_12341 = cljs.core.async.close_BANG_.call(null,to);
var state_12358__$1 = state_12358;
var statearr_12374_12396 = state_12358__$1;
(statearr_12374_12396[(2)] = inst_12341);

(statearr_12374_12396[(1)] = (10));


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
});})(c__5911__auto___12382))
;
return ((function (switch__5896__auto__,c__5911__auto___12382){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12378 = [null,null,null,null,null,null,null,null];
(statearr_12378[(0)] = state_machine__5897__auto__);

(statearr_12378[(1)] = (1));

return statearr_12378;
});
var state_machine__5897__auto____1 = (function (state_12358){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12379){if((e12379 instanceof Object)){
var ex__5900__auto__ = e12379;
var statearr_12380_12397 = state_12358;
(statearr_12380_12397[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12398 = state_12358;
state_12358 = G__12398;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12358){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___12382))
})();
var state__5913__auto__ = (function (){var statearr_12381 = f__5912__auto__.call(null);
(statearr_12381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12382);

return statearr_12381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___12382))
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
return (function (p__12582){
var vec__12583 = p__12582;
var v = cljs.core.nth.call(null,vec__12583,(0),null);
var p = cljs.core.nth.call(null,vec__12583,(1),null);
var job = vec__12583;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5911__auto___12765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___12765,res,vec__12583,v,p,job,jobs,results){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___12765,res,vec__12583,v,p,job,jobs,results){
return (function (state_12588){
var state_val_12589 = (state_12588[(1)]);
if((state_val_12589 === (2))){
var inst_12585 = (state_12588[(2)]);
var inst_12586 = cljs.core.async.close_BANG_.call(null,res);
var state_12588__$1 = (function (){var statearr_12590 = state_12588;
(statearr_12590[(7)] = inst_12585);

return statearr_12590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12588__$1,inst_12586);
} else {
if((state_val_12589 === (1))){
var state_12588__$1 = state_12588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12588__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5911__auto___12765,res,vec__12583,v,p,job,jobs,results))
;
return ((function (switch__5896__auto__,c__5911__auto___12765,res,vec__12583,v,p,job,jobs,results){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12594 = [null,null,null,null,null,null,null,null];
(statearr_12594[(0)] = state_machine__5897__auto__);

(statearr_12594[(1)] = (1));

return statearr_12594;
});
var state_machine__5897__auto____1 = (function (state_12588){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12595){if((e12595 instanceof Object)){
var ex__5900__auto__ = e12595;
var statearr_12596_12766 = state_12588;
(statearr_12596_12766[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12767 = state_12588;
state_12588 = G__12767;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12588){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___12765,res,vec__12583,v,p,job,jobs,results))
})();
var state__5913__auto__ = (function (){var statearr_12597 = f__5912__auto__.call(null);
(statearr_12597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12765);

return statearr_12597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___12765,res,vec__12583,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12598){
var vec__12599 = p__12598;
var v = cljs.core.nth.call(null,vec__12599,(0),null);
var p = cljs.core.nth.call(null,vec__12599,(1),null);
var job = vec__12599;
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
var n__4575__auto___12768 = n;
var __12769 = (0);
while(true){
if((__12769 < n__4575__auto___12768)){
var G__12600_12770 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12600_12770) {
case "async":
var c__5911__auto___12772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12769,c__5911__auto___12772,G__12600_12770,n__4575__auto___12768,jobs,results,process,async){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (__12769,c__5911__auto___12772,G__12600_12770,n__4575__auto___12768,jobs,results,process,async){
return (function (state_12613){
var state_val_12614 = (state_12613[(1)]);
if((state_val_12614 === (7))){
var inst_12609 = (state_12613[(2)]);
var state_12613__$1 = state_12613;
var statearr_12615_12773 = state_12613__$1;
(statearr_12615_12773[(2)] = inst_12609);

(statearr_12615_12773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12614 === (6))){
var state_12613__$1 = state_12613;
var statearr_12616_12774 = state_12613__$1;
(statearr_12616_12774[(2)] = null);

(statearr_12616_12774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12614 === (5))){
var state_12613__$1 = state_12613;
var statearr_12617_12775 = state_12613__$1;
(statearr_12617_12775[(2)] = null);

(statearr_12617_12775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12614 === (4))){
var inst_12603 = (state_12613[(2)]);
var inst_12604 = async.call(null,inst_12603);
var state_12613__$1 = state_12613;
if(cljs.core.truth_(inst_12604)){
var statearr_12618_12776 = state_12613__$1;
(statearr_12618_12776[(1)] = (5));

} else {
var statearr_12619_12777 = state_12613__$1;
(statearr_12619_12777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12614 === (3))){
var inst_12611 = (state_12613[(2)]);
var state_12613__$1 = state_12613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12613__$1,inst_12611);
} else {
if((state_val_12614 === (2))){
var state_12613__$1 = state_12613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12613__$1,(4),jobs);
} else {
if((state_val_12614 === (1))){
var state_12613__$1 = state_12613;
var statearr_12620_12778 = state_12613__$1;
(statearr_12620_12778[(2)] = null);

(statearr_12620_12778[(1)] = (2));


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
});})(__12769,c__5911__auto___12772,G__12600_12770,n__4575__auto___12768,jobs,results,process,async))
;
return ((function (__12769,switch__5896__auto__,c__5911__auto___12772,G__12600_12770,n__4575__auto___12768,jobs,results,process,async){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12624 = [null,null,null,null,null,null,null];
(statearr_12624[(0)] = state_machine__5897__auto__);

(statearr_12624[(1)] = (1));

return statearr_12624;
});
var state_machine__5897__auto____1 = (function (state_12613){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12625){if((e12625 instanceof Object)){
var ex__5900__auto__ = e12625;
var statearr_12626_12779 = state_12613;
(statearr_12626_12779[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12780 = state_12613;
state_12613 = G__12780;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12613){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(__12769,switch__5896__auto__,c__5911__auto___12772,G__12600_12770,n__4575__auto___12768,jobs,results,process,async))
})();
var state__5913__auto__ = (function (){var statearr_12627 = f__5912__auto__.call(null);
(statearr_12627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12772);

return statearr_12627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(__12769,c__5911__auto___12772,G__12600_12770,n__4575__auto___12768,jobs,results,process,async))
);


break;
case "compute":
var c__5911__auto___12781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12769,c__5911__auto___12781,G__12600_12770,n__4575__auto___12768,jobs,results,process,async){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (__12769,c__5911__auto___12781,G__12600_12770,n__4575__auto___12768,jobs,results,process,async){
return (function (state_12640){
var state_val_12641 = (state_12640[(1)]);
if((state_val_12641 === (7))){
var inst_12636 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
var statearr_12642_12782 = state_12640__$1;
(statearr_12642_12782[(2)] = inst_12636);

(statearr_12642_12782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (6))){
var state_12640__$1 = state_12640;
var statearr_12643_12783 = state_12640__$1;
(statearr_12643_12783[(2)] = null);

(statearr_12643_12783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (5))){
var state_12640__$1 = state_12640;
var statearr_12644_12784 = state_12640__$1;
(statearr_12644_12784[(2)] = null);

(statearr_12644_12784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (4))){
var inst_12630 = (state_12640[(2)]);
var inst_12631 = process.call(null,inst_12630);
var state_12640__$1 = state_12640;
if(cljs.core.truth_(inst_12631)){
var statearr_12645_12785 = state_12640__$1;
(statearr_12645_12785[(1)] = (5));

} else {
var statearr_12646_12786 = state_12640__$1;
(statearr_12646_12786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (3))){
var inst_12638 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12640__$1,inst_12638);
} else {
if((state_val_12641 === (2))){
var state_12640__$1 = state_12640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12640__$1,(4),jobs);
} else {
if((state_val_12641 === (1))){
var state_12640__$1 = state_12640;
var statearr_12647_12787 = state_12640__$1;
(statearr_12647_12787[(2)] = null);

(statearr_12647_12787[(1)] = (2));


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
});})(__12769,c__5911__auto___12781,G__12600_12770,n__4575__auto___12768,jobs,results,process,async))
;
return ((function (__12769,switch__5896__auto__,c__5911__auto___12781,G__12600_12770,n__4575__auto___12768,jobs,results,process,async){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12651 = [null,null,null,null,null,null,null];
(statearr_12651[(0)] = state_machine__5897__auto__);

(statearr_12651[(1)] = (1));

return statearr_12651;
});
var state_machine__5897__auto____1 = (function (state_12640){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12652){if((e12652 instanceof Object)){
var ex__5900__auto__ = e12652;
var statearr_12653_12788 = state_12640;
(statearr_12653_12788[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12789 = state_12640;
state_12640 = G__12789;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12640){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(__12769,switch__5896__auto__,c__5911__auto___12781,G__12600_12770,n__4575__auto___12768,jobs,results,process,async))
})();
var state__5913__auto__ = (function (){var statearr_12654 = f__5912__auto__.call(null);
(statearr_12654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12781);

return statearr_12654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(__12769,c__5911__auto___12781,G__12600_12770,n__4575__auto___12768,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12790 = (__12769 + (1));
__12769 = G__12790;
continue;
} else {
}
break;
}

var c__5911__auto___12791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___12791,jobs,results,process,async){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___12791,jobs,results,process,async){
return (function (state_12676){
var state_val_12677 = (state_12676[(1)]);
if((state_val_12677 === (9))){
var inst_12669 = (state_12676[(2)]);
var state_12676__$1 = (function (){var statearr_12678 = state_12676;
(statearr_12678[(7)] = inst_12669);

return statearr_12678;
})();
var statearr_12679_12792 = state_12676__$1;
(statearr_12679_12792[(2)] = null);

(statearr_12679_12792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12677 === (8))){
var inst_12662 = (state_12676[(8)]);
var inst_12667 = (state_12676[(2)]);
var state_12676__$1 = (function (){var statearr_12680 = state_12676;
(statearr_12680[(9)] = inst_12667);

return statearr_12680;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12676__$1,(9),results,inst_12662);
} else {
if((state_val_12677 === (7))){
var inst_12672 = (state_12676[(2)]);
var state_12676__$1 = state_12676;
var statearr_12681_12793 = state_12676__$1;
(statearr_12681_12793[(2)] = inst_12672);

(statearr_12681_12793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12677 === (6))){
var inst_12657 = (state_12676[(10)]);
var inst_12662 = (state_12676[(8)]);
var inst_12662__$1 = cljs.core.async.chan.call(null,(1));
var inst_12663 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12664 = [inst_12657,inst_12662__$1];
var inst_12665 = (new cljs.core.PersistentVector(null,2,(5),inst_12663,inst_12664,null));
var state_12676__$1 = (function (){var statearr_12682 = state_12676;
(statearr_12682[(8)] = inst_12662__$1);

return statearr_12682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12676__$1,(8),jobs,inst_12665);
} else {
if((state_val_12677 === (5))){
var inst_12660 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12676__$1 = state_12676;
var statearr_12683_12794 = state_12676__$1;
(statearr_12683_12794[(2)] = inst_12660);

(statearr_12683_12794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12677 === (4))){
var inst_12657 = (state_12676[(10)]);
var inst_12657__$1 = (state_12676[(2)]);
var inst_12658 = (inst_12657__$1 == null);
var state_12676__$1 = (function (){var statearr_12684 = state_12676;
(statearr_12684[(10)] = inst_12657__$1);

return statearr_12684;
})();
if(cljs.core.truth_(inst_12658)){
var statearr_12685_12795 = state_12676__$1;
(statearr_12685_12795[(1)] = (5));

} else {
var statearr_12686_12796 = state_12676__$1;
(statearr_12686_12796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12677 === (3))){
var inst_12674 = (state_12676[(2)]);
var state_12676__$1 = state_12676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12676__$1,inst_12674);
} else {
if((state_val_12677 === (2))){
var state_12676__$1 = state_12676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12676__$1,(4),from);
} else {
if((state_val_12677 === (1))){
var state_12676__$1 = state_12676;
var statearr_12687_12797 = state_12676__$1;
(statearr_12687_12797[(2)] = null);

(statearr_12687_12797[(1)] = (2));


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
});})(c__5911__auto___12791,jobs,results,process,async))
;
return ((function (switch__5896__auto__,c__5911__auto___12791,jobs,results,process,async){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12691[(0)] = state_machine__5897__auto__);

(statearr_12691[(1)] = (1));

return statearr_12691;
});
var state_machine__5897__auto____1 = (function (state_12676){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12692){if((e12692 instanceof Object)){
var ex__5900__auto__ = e12692;
var statearr_12693_12798 = state_12676;
(statearr_12693_12798[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12799 = state_12676;
state_12676 = G__12799;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12676){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___12791,jobs,results,process,async))
})();
var state__5913__auto__ = (function (){var statearr_12694 = f__5912__auto__.call(null);
(statearr_12694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12791);

return statearr_12694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___12791,jobs,results,process,async))
);


var c__5911__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto__,jobs,results,process,async){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto__,jobs,results,process,async){
return (function (state_12732){
var state_val_12733 = (state_12732[(1)]);
if((state_val_12733 === (7))){
var inst_12728 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12734_12800 = state_12732__$1;
(statearr_12734_12800[(2)] = inst_12728);

(statearr_12734_12800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (20))){
var state_12732__$1 = state_12732;
var statearr_12735_12801 = state_12732__$1;
(statearr_12735_12801[(2)] = null);

(statearr_12735_12801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (1))){
var state_12732__$1 = state_12732;
var statearr_12736_12802 = state_12732__$1;
(statearr_12736_12802[(2)] = null);

(statearr_12736_12802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (4))){
var inst_12697 = (state_12732[(7)]);
var inst_12697__$1 = (state_12732[(2)]);
var inst_12698 = (inst_12697__$1 == null);
var state_12732__$1 = (function (){var statearr_12737 = state_12732;
(statearr_12737[(7)] = inst_12697__$1);

return statearr_12737;
})();
if(cljs.core.truth_(inst_12698)){
var statearr_12738_12803 = state_12732__$1;
(statearr_12738_12803[(1)] = (5));

} else {
var statearr_12739_12804 = state_12732__$1;
(statearr_12739_12804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (15))){
var inst_12710 = (state_12732[(8)]);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12732__$1,(18),to,inst_12710);
} else {
if((state_val_12733 === (21))){
var inst_12723 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12740_12805 = state_12732__$1;
(statearr_12740_12805[(2)] = inst_12723);

(statearr_12740_12805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (13))){
var inst_12725 = (state_12732[(2)]);
var state_12732__$1 = (function (){var statearr_12741 = state_12732;
(statearr_12741[(9)] = inst_12725);

return statearr_12741;
})();
var statearr_12742_12806 = state_12732__$1;
(statearr_12742_12806[(2)] = null);

(statearr_12742_12806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (6))){
var inst_12697 = (state_12732[(7)]);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12732__$1,(11),inst_12697);
} else {
if((state_val_12733 === (17))){
var inst_12718 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
if(cljs.core.truth_(inst_12718)){
var statearr_12743_12807 = state_12732__$1;
(statearr_12743_12807[(1)] = (19));

} else {
var statearr_12744_12808 = state_12732__$1;
(statearr_12744_12808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (3))){
var inst_12730 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12732__$1,inst_12730);
} else {
if((state_val_12733 === (12))){
var inst_12707 = (state_12732[(10)]);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12732__$1,(14),inst_12707);
} else {
if((state_val_12733 === (2))){
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12732__$1,(4),results);
} else {
if((state_val_12733 === (19))){
var state_12732__$1 = state_12732;
var statearr_12745_12809 = state_12732__$1;
(statearr_12745_12809[(2)] = null);

(statearr_12745_12809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (11))){
var inst_12707 = (state_12732[(2)]);
var state_12732__$1 = (function (){var statearr_12746 = state_12732;
(statearr_12746[(10)] = inst_12707);

return statearr_12746;
})();
var statearr_12747_12810 = state_12732__$1;
(statearr_12747_12810[(2)] = null);

(statearr_12747_12810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (9))){
var state_12732__$1 = state_12732;
var statearr_12748_12811 = state_12732__$1;
(statearr_12748_12811[(2)] = null);

(statearr_12748_12811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (5))){
var state_12732__$1 = state_12732;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12749_12812 = state_12732__$1;
(statearr_12749_12812[(1)] = (8));

} else {
var statearr_12750_12813 = state_12732__$1;
(statearr_12750_12813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (14))){
var inst_12712 = (state_12732[(11)]);
var inst_12710 = (state_12732[(8)]);
var inst_12710__$1 = (state_12732[(2)]);
var inst_12711 = (inst_12710__$1 == null);
var inst_12712__$1 = cljs.core.not.call(null,inst_12711);
var state_12732__$1 = (function (){var statearr_12751 = state_12732;
(statearr_12751[(11)] = inst_12712__$1);

(statearr_12751[(8)] = inst_12710__$1);

return statearr_12751;
})();
if(inst_12712__$1){
var statearr_12752_12814 = state_12732__$1;
(statearr_12752_12814[(1)] = (15));

} else {
var statearr_12753_12815 = state_12732__$1;
(statearr_12753_12815[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (16))){
var inst_12712 = (state_12732[(11)]);
var state_12732__$1 = state_12732;
var statearr_12754_12816 = state_12732__$1;
(statearr_12754_12816[(2)] = inst_12712);

(statearr_12754_12816[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (10))){
var inst_12704 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12755_12817 = state_12732__$1;
(statearr_12755_12817[(2)] = inst_12704);

(statearr_12755_12817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (18))){
var inst_12715 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12756_12818 = state_12732__$1;
(statearr_12756_12818[(2)] = inst_12715);

(statearr_12756_12818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (8))){
var inst_12701 = cljs.core.async.close_BANG_.call(null,to);
var state_12732__$1 = state_12732;
var statearr_12757_12819 = state_12732__$1;
(statearr_12757_12819[(2)] = inst_12701);

(statearr_12757_12819[(1)] = (10));


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
var statearr_12761 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12761[(0)] = state_machine__5897__auto__);

(statearr_12761[(1)] = (1));

return statearr_12761;
});
var state_machine__5897__auto____1 = (function (state_12732){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12762){if((e12762 instanceof Object)){
var ex__5900__auto__ = e12762;
var statearr_12763_12820 = state_12732;
(statearr_12763_12820[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12821 = state_12732;
state_12732 = G__12821;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12732){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__,jobs,results,process,async))
})();
var state__5913__auto__ = (function (){var statearr_12764 = f__5912__auto__.call(null);
(statearr_12764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_12764;
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
var c__5911__auto___12922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___12922,tc,fc){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___12922,tc,fc){
return (function (state_12897){
var state_val_12898 = (state_12897[(1)]);
if((state_val_12898 === (7))){
var inst_12893 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
var statearr_12899_12923 = state_12897__$1;
(statearr_12899_12923[(2)] = inst_12893);

(statearr_12899_12923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (1))){
var state_12897__$1 = state_12897;
var statearr_12900_12924 = state_12897__$1;
(statearr_12900_12924[(2)] = null);

(statearr_12900_12924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (4))){
var inst_12874 = (state_12897[(7)]);
var inst_12874__$1 = (state_12897[(2)]);
var inst_12875 = (inst_12874__$1 == null);
var state_12897__$1 = (function (){var statearr_12901 = state_12897;
(statearr_12901[(7)] = inst_12874__$1);

return statearr_12901;
})();
if(cljs.core.truth_(inst_12875)){
var statearr_12902_12925 = state_12897__$1;
(statearr_12902_12925[(1)] = (5));

} else {
var statearr_12903_12926 = state_12897__$1;
(statearr_12903_12926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (13))){
var state_12897__$1 = state_12897;
var statearr_12904_12927 = state_12897__$1;
(statearr_12904_12927[(2)] = null);

(statearr_12904_12927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (6))){
var inst_12874 = (state_12897[(7)]);
var inst_12880 = p.call(null,inst_12874);
var state_12897__$1 = state_12897;
if(cljs.core.truth_(inst_12880)){
var statearr_12905_12928 = state_12897__$1;
(statearr_12905_12928[(1)] = (9));

} else {
var statearr_12906_12929 = state_12897__$1;
(statearr_12906_12929[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (3))){
var inst_12895 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12897__$1,inst_12895);
} else {
if((state_val_12898 === (12))){
var state_12897__$1 = state_12897;
var statearr_12907_12930 = state_12897__$1;
(statearr_12907_12930[(2)] = null);

(statearr_12907_12930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (2))){
var state_12897__$1 = state_12897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12897__$1,(4),ch);
} else {
if((state_val_12898 === (11))){
var inst_12874 = (state_12897[(7)]);
var inst_12884 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12897__$1,(8),inst_12884,inst_12874);
} else {
if((state_val_12898 === (9))){
var state_12897__$1 = state_12897;
var statearr_12908_12931 = state_12897__$1;
(statearr_12908_12931[(2)] = tc);

(statearr_12908_12931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (5))){
var inst_12877 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12878 = cljs.core.async.close_BANG_.call(null,fc);
var state_12897__$1 = (function (){var statearr_12909 = state_12897;
(statearr_12909[(8)] = inst_12877);

return statearr_12909;
})();
var statearr_12910_12932 = state_12897__$1;
(statearr_12910_12932[(2)] = inst_12878);

(statearr_12910_12932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (14))){
var inst_12891 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
var statearr_12911_12933 = state_12897__$1;
(statearr_12911_12933[(2)] = inst_12891);

(statearr_12911_12933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (10))){
var state_12897__$1 = state_12897;
var statearr_12912_12934 = state_12897__$1;
(statearr_12912_12934[(2)] = fc);

(statearr_12912_12934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (8))){
var inst_12886 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
if(cljs.core.truth_(inst_12886)){
var statearr_12913_12935 = state_12897__$1;
(statearr_12913_12935[(1)] = (12));

} else {
var statearr_12914_12936 = state_12897__$1;
(statearr_12914_12936[(1)] = (13));

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
});})(c__5911__auto___12922,tc,fc))
;
return ((function (switch__5896__auto__,c__5911__auto___12922,tc,fc){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_12918 = [null,null,null,null,null,null,null,null,null];
(statearr_12918[(0)] = state_machine__5897__auto__);

(statearr_12918[(1)] = (1));

return statearr_12918;
});
var state_machine__5897__auto____1 = (function (state_12897){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e12919){if((e12919 instanceof Object)){
var ex__5900__auto__ = e12919;
var statearr_12920_12937 = state_12897;
(statearr_12920_12937[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12938 = state_12897;
state_12897 = G__12938;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12897){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___12922,tc,fc))
})();
var state__5913__auto__ = (function (){var statearr_12921 = f__5912__auto__.call(null);
(statearr_12921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___12922);

return statearr_12921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___12922,tc,fc))
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
return (function (state_12985){
var state_val_12986 = (state_12985[(1)]);
if((state_val_12986 === (7))){
var inst_12981 = (state_12985[(2)]);
var state_12985__$1 = state_12985;
var statearr_12987_13003 = state_12985__$1;
(statearr_12987_13003[(2)] = inst_12981);

(statearr_12987_13003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12986 === (6))){
var inst_12971 = (state_12985[(7)]);
var inst_12974 = (state_12985[(8)]);
var inst_12978 = f.call(null,inst_12971,inst_12974);
var inst_12971__$1 = inst_12978;
var state_12985__$1 = (function (){var statearr_12988 = state_12985;
(statearr_12988[(7)] = inst_12971__$1);

return statearr_12988;
})();
var statearr_12989_13004 = state_12985__$1;
(statearr_12989_13004[(2)] = null);

(statearr_12989_13004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12986 === (5))){
var inst_12971 = (state_12985[(7)]);
var state_12985__$1 = state_12985;
var statearr_12990_13005 = state_12985__$1;
(statearr_12990_13005[(2)] = inst_12971);

(statearr_12990_13005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12986 === (4))){
var inst_12974 = (state_12985[(8)]);
var inst_12974__$1 = (state_12985[(2)]);
var inst_12975 = (inst_12974__$1 == null);
var state_12985__$1 = (function (){var statearr_12991 = state_12985;
(statearr_12991[(8)] = inst_12974__$1);

return statearr_12991;
})();
if(cljs.core.truth_(inst_12975)){
var statearr_12992_13006 = state_12985__$1;
(statearr_12992_13006[(1)] = (5));

} else {
var statearr_12993_13007 = state_12985__$1;
(statearr_12993_13007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12986 === (3))){
var inst_12983 = (state_12985[(2)]);
var state_12985__$1 = state_12985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12985__$1,inst_12983);
} else {
if((state_val_12986 === (2))){
var state_12985__$1 = state_12985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12985__$1,(4),ch);
} else {
if((state_val_12986 === (1))){
var inst_12971 = init;
var state_12985__$1 = (function (){var statearr_12994 = state_12985;
(statearr_12994[(7)] = inst_12971);

return statearr_12994;
})();
var statearr_12995_13008 = state_12985__$1;
(statearr_12995_13008[(2)] = null);

(statearr_12995_13008[(1)] = (2));


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
var statearr_12999 = [null,null,null,null,null,null,null,null,null];
(statearr_12999[(0)] = state_machine__5897__auto__);

(statearr_12999[(1)] = (1));

return statearr_12999;
});
var state_machine__5897__auto____1 = (function (state_12985){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_12985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e13000){if((e13000 instanceof Object)){
var ex__5900__auto__ = e13000;
var statearr_13001_13009 = state_12985;
(statearr_13001_13009[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13010 = state_12985;
state_12985 = G__13010;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_12985){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_12985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_13002 = f__5912__auto__.call(null);
(statearr_13002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_13002;
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
return (function (state_13084){
var state_val_13085 = (state_13084[(1)]);
if((state_val_13085 === (7))){
var inst_13066 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13086_13109 = state_13084__$1;
(statearr_13086_13109[(2)] = inst_13066);

(statearr_13086_13109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (1))){
var inst_13060 = cljs.core.seq.call(null,coll);
var inst_13061 = inst_13060;
var state_13084__$1 = (function (){var statearr_13087 = state_13084;
(statearr_13087[(7)] = inst_13061);

return statearr_13087;
})();
var statearr_13088_13110 = state_13084__$1;
(statearr_13088_13110[(2)] = null);

(statearr_13088_13110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (4))){
var inst_13061 = (state_13084[(7)]);
var inst_13064 = cljs.core.first.call(null,inst_13061);
var state_13084__$1 = state_13084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13084__$1,(7),ch,inst_13064);
} else {
if((state_val_13085 === (13))){
var inst_13078 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13089_13111 = state_13084__$1;
(statearr_13089_13111[(2)] = inst_13078);

(statearr_13089_13111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (6))){
var inst_13069 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
if(cljs.core.truth_(inst_13069)){
var statearr_13090_13112 = state_13084__$1;
(statearr_13090_13112[(1)] = (8));

} else {
var statearr_13091_13113 = state_13084__$1;
(statearr_13091_13113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (3))){
var inst_13082 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13084__$1,inst_13082);
} else {
if((state_val_13085 === (12))){
var state_13084__$1 = state_13084;
var statearr_13092_13114 = state_13084__$1;
(statearr_13092_13114[(2)] = null);

(statearr_13092_13114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (2))){
var inst_13061 = (state_13084[(7)]);
var state_13084__$1 = state_13084;
if(cljs.core.truth_(inst_13061)){
var statearr_13093_13115 = state_13084__$1;
(statearr_13093_13115[(1)] = (4));

} else {
var statearr_13094_13116 = state_13084__$1;
(statearr_13094_13116[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (11))){
var inst_13075 = cljs.core.async.close_BANG_.call(null,ch);
var state_13084__$1 = state_13084;
var statearr_13095_13117 = state_13084__$1;
(statearr_13095_13117[(2)] = inst_13075);

(statearr_13095_13117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (9))){
var state_13084__$1 = state_13084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13096_13118 = state_13084__$1;
(statearr_13096_13118[(1)] = (11));

} else {
var statearr_13097_13119 = state_13084__$1;
(statearr_13097_13119[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (5))){
var inst_13061 = (state_13084[(7)]);
var state_13084__$1 = state_13084;
var statearr_13098_13120 = state_13084__$1;
(statearr_13098_13120[(2)] = inst_13061);

(statearr_13098_13120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (10))){
var inst_13080 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13099_13121 = state_13084__$1;
(statearr_13099_13121[(2)] = inst_13080);

(statearr_13099_13121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (8))){
var inst_13061 = (state_13084[(7)]);
var inst_13071 = cljs.core.next.call(null,inst_13061);
var inst_13061__$1 = inst_13071;
var state_13084__$1 = (function (){var statearr_13100 = state_13084;
(statearr_13100[(7)] = inst_13061__$1);

return statearr_13100;
})();
var statearr_13101_13122 = state_13084__$1;
(statearr_13101_13122[(2)] = null);

(statearr_13101_13122[(1)] = (2));


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
var statearr_13105 = [null,null,null,null,null,null,null,null];
(statearr_13105[(0)] = state_machine__5897__auto__);

(statearr_13105[(1)] = (1));

return statearr_13105;
});
var state_machine__5897__auto____1 = (function (state_13084){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_13084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e13106){if((e13106 instanceof Object)){
var ex__5900__auto__ = e13106;
var statearr_13107_13123 = state_13084;
(statearr_13107_13123[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13124 = state_13084;
state_13084 = G__13124;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_13084){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_13084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_13108 = f__5912__auto__.call(null);
(statearr_13108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_13108;
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

cljs.core.async.Mux = (function (){var obj13126 = {};
return obj13126;
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


cljs.core.async.Mult = (function (){var obj13128 = {};
return obj13128;
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
if(typeof cljs.core.async.t13350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13350 = (function (cs,ch,mult,meta13351){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13351 = meta13351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13350.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13350.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13350.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13350.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13350.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13352){
var self__ = this;
var _13352__$1 = this;
return self__.meta13351;
});})(cs))
;

cljs.core.async.t13350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13352,meta13351__$1){
var self__ = this;
var _13352__$1 = this;
return (new cljs.core.async.t13350(self__.cs,self__.ch,self__.mult,meta13351__$1));
});})(cs))
;

cljs.core.async.t13350.cljs$lang$type = true;

cljs.core.async.t13350.cljs$lang$ctorStr = "cljs.core.async/t13350";

cljs.core.async.t13350.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t13350");
});})(cs))
;

cljs.core.async.__GT_t13350 = ((function (cs){
return (function __GT_t13350(cs__$1,ch__$1,mult__$1,meta13351){
return (new cljs.core.async.t13350(cs__$1,ch__$1,mult__$1,meta13351));
});})(cs))
;

}

return (new cljs.core.async.t13350(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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
var c__5911__auto___13571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___13571,cs,m,dchan,dctr,done){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___13571,cs,m,dchan,dctr,done){
return (function (state_13483){
var state_val_13484 = (state_13483[(1)]);
if((state_val_13484 === (7))){
var inst_13479 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13485_13572 = state_13483__$1;
(statearr_13485_13572[(2)] = inst_13479);

(statearr_13485_13572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (20))){
var inst_13384 = (state_13483[(7)]);
var inst_13394 = cljs.core.first.call(null,inst_13384);
var inst_13395 = cljs.core.nth.call(null,inst_13394,(0),null);
var inst_13396 = cljs.core.nth.call(null,inst_13394,(1),null);
var state_13483__$1 = (function (){var statearr_13486 = state_13483;
(statearr_13486[(8)] = inst_13395);

return statearr_13486;
})();
if(cljs.core.truth_(inst_13396)){
var statearr_13487_13573 = state_13483__$1;
(statearr_13487_13573[(1)] = (22));

} else {
var statearr_13488_13574 = state_13483__$1;
(statearr_13488_13574[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (27))){
var inst_13424 = (state_13483[(9)]);
var inst_13426 = (state_13483[(10)]);
var inst_13355 = (state_13483[(11)]);
var inst_13431 = (state_13483[(12)]);
var inst_13431__$1 = cljs.core._nth.call(null,inst_13424,inst_13426);
var inst_13432 = cljs.core.async.put_BANG_.call(null,inst_13431__$1,inst_13355,done);
var state_13483__$1 = (function (){var statearr_13489 = state_13483;
(statearr_13489[(12)] = inst_13431__$1);

return statearr_13489;
})();
if(cljs.core.truth_(inst_13432)){
var statearr_13490_13575 = state_13483__$1;
(statearr_13490_13575[(1)] = (30));

} else {
var statearr_13491_13576 = state_13483__$1;
(statearr_13491_13576[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (1))){
var state_13483__$1 = state_13483;
var statearr_13492_13577 = state_13483__$1;
(statearr_13492_13577[(2)] = null);

(statearr_13492_13577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (24))){
var inst_13384 = (state_13483[(7)]);
var inst_13401 = (state_13483[(2)]);
var inst_13402 = cljs.core.next.call(null,inst_13384);
var inst_13364 = inst_13402;
var inst_13365 = null;
var inst_13366 = (0);
var inst_13367 = (0);
var state_13483__$1 = (function (){var statearr_13493 = state_13483;
(statearr_13493[(13)] = inst_13366);

(statearr_13493[(14)] = inst_13367);

(statearr_13493[(15)] = inst_13365);

(statearr_13493[(16)] = inst_13401);

(statearr_13493[(17)] = inst_13364);

return statearr_13493;
})();
var statearr_13494_13578 = state_13483__$1;
(statearr_13494_13578[(2)] = null);

(statearr_13494_13578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (39))){
var state_13483__$1 = state_13483;
var statearr_13498_13579 = state_13483__$1;
(statearr_13498_13579[(2)] = null);

(statearr_13498_13579[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (4))){
var inst_13355 = (state_13483[(11)]);
var inst_13355__$1 = (state_13483[(2)]);
var inst_13356 = (inst_13355__$1 == null);
var state_13483__$1 = (function (){var statearr_13499 = state_13483;
(statearr_13499[(11)] = inst_13355__$1);

return statearr_13499;
})();
if(cljs.core.truth_(inst_13356)){
var statearr_13500_13580 = state_13483__$1;
(statearr_13500_13580[(1)] = (5));

} else {
var statearr_13501_13581 = state_13483__$1;
(statearr_13501_13581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (15))){
var inst_13366 = (state_13483[(13)]);
var inst_13367 = (state_13483[(14)]);
var inst_13365 = (state_13483[(15)]);
var inst_13364 = (state_13483[(17)]);
var inst_13380 = (state_13483[(2)]);
var inst_13381 = (inst_13367 + (1));
var tmp13495 = inst_13366;
var tmp13496 = inst_13365;
var tmp13497 = inst_13364;
var inst_13364__$1 = tmp13497;
var inst_13365__$1 = tmp13496;
var inst_13366__$1 = tmp13495;
var inst_13367__$1 = inst_13381;
var state_13483__$1 = (function (){var statearr_13502 = state_13483;
(statearr_13502[(13)] = inst_13366__$1);

(statearr_13502[(14)] = inst_13367__$1);

(statearr_13502[(15)] = inst_13365__$1);

(statearr_13502[(17)] = inst_13364__$1);

(statearr_13502[(18)] = inst_13380);

return statearr_13502;
})();
var statearr_13503_13582 = state_13483__$1;
(statearr_13503_13582[(2)] = null);

(statearr_13503_13582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (21))){
var inst_13405 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13507_13583 = state_13483__$1;
(statearr_13507_13583[(2)] = inst_13405);

(statearr_13507_13583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (31))){
var inst_13431 = (state_13483[(12)]);
var inst_13435 = done.call(null,null);
var inst_13436 = cljs.core.async.untap_STAR_.call(null,m,inst_13431);
var state_13483__$1 = (function (){var statearr_13508 = state_13483;
(statearr_13508[(19)] = inst_13435);

return statearr_13508;
})();
var statearr_13509_13584 = state_13483__$1;
(statearr_13509_13584[(2)] = inst_13436);

(statearr_13509_13584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (32))){
var inst_13423 = (state_13483[(20)]);
var inst_13424 = (state_13483[(9)]);
var inst_13426 = (state_13483[(10)]);
var inst_13425 = (state_13483[(21)]);
var inst_13438 = (state_13483[(2)]);
var inst_13439 = (inst_13426 + (1));
var tmp13504 = inst_13423;
var tmp13505 = inst_13424;
var tmp13506 = inst_13425;
var inst_13423__$1 = tmp13504;
var inst_13424__$1 = tmp13505;
var inst_13425__$1 = tmp13506;
var inst_13426__$1 = inst_13439;
var state_13483__$1 = (function (){var statearr_13510 = state_13483;
(statearr_13510[(20)] = inst_13423__$1);

(statearr_13510[(9)] = inst_13424__$1);

(statearr_13510[(22)] = inst_13438);

(statearr_13510[(10)] = inst_13426__$1);

(statearr_13510[(21)] = inst_13425__$1);

return statearr_13510;
})();
var statearr_13511_13585 = state_13483__$1;
(statearr_13511_13585[(2)] = null);

(statearr_13511_13585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (40))){
var inst_13451 = (state_13483[(23)]);
var inst_13455 = done.call(null,null);
var inst_13456 = cljs.core.async.untap_STAR_.call(null,m,inst_13451);
var state_13483__$1 = (function (){var statearr_13512 = state_13483;
(statearr_13512[(24)] = inst_13455);

return statearr_13512;
})();
var statearr_13513_13586 = state_13483__$1;
(statearr_13513_13586[(2)] = inst_13456);

(statearr_13513_13586[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (33))){
var inst_13442 = (state_13483[(25)]);
var inst_13444 = cljs.core.chunked_seq_QMARK_.call(null,inst_13442);
var state_13483__$1 = state_13483;
if(inst_13444){
var statearr_13514_13587 = state_13483__$1;
(statearr_13514_13587[(1)] = (36));

} else {
var statearr_13515_13588 = state_13483__$1;
(statearr_13515_13588[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (13))){
var inst_13374 = (state_13483[(26)]);
var inst_13377 = cljs.core.async.close_BANG_.call(null,inst_13374);
var state_13483__$1 = state_13483;
var statearr_13516_13589 = state_13483__$1;
(statearr_13516_13589[(2)] = inst_13377);

(statearr_13516_13589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (22))){
var inst_13395 = (state_13483[(8)]);
var inst_13398 = cljs.core.async.close_BANG_.call(null,inst_13395);
var state_13483__$1 = state_13483;
var statearr_13517_13590 = state_13483__$1;
(statearr_13517_13590[(2)] = inst_13398);

(statearr_13517_13590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (36))){
var inst_13442 = (state_13483[(25)]);
var inst_13446 = cljs.core.chunk_first.call(null,inst_13442);
var inst_13447 = cljs.core.chunk_rest.call(null,inst_13442);
var inst_13448 = cljs.core.count.call(null,inst_13446);
var inst_13423 = inst_13447;
var inst_13424 = inst_13446;
var inst_13425 = inst_13448;
var inst_13426 = (0);
var state_13483__$1 = (function (){var statearr_13518 = state_13483;
(statearr_13518[(20)] = inst_13423);

(statearr_13518[(9)] = inst_13424);

(statearr_13518[(10)] = inst_13426);

(statearr_13518[(21)] = inst_13425);

return statearr_13518;
})();
var statearr_13519_13591 = state_13483__$1;
(statearr_13519_13591[(2)] = null);

(statearr_13519_13591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (41))){
var inst_13442 = (state_13483[(25)]);
var inst_13458 = (state_13483[(2)]);
var inst_13459 = cljs.core.next.call(null,inst_13442);
var inst_13423 = inst_13459;
var inst_13424 = null;
var inst_13425 = (0);
var inst_13426 = (0);
var state_13483__$1 = (function (){var statearr_13520 = state_13483;
(statearr_13520[(20)] = inst_13423);

(statearr_13520[(9)] = inst_13424);

(statearr_13520[(10)] = inst_13426);

(statearr_13520[(27)] = inst_13458);

(statearr_13520[(21)] = inst_13425);

return statearr_13520;
})();
var statearr_13521_13592 = state_13483__$1;
(statearr_13521_13592[(2)] = null);

(statearr_13521_13592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (43))){
var state_13483__$1 = state_13483;
var statearr_13522_13593 = state_13483__$1;
(statearr_13522_13593[(2)] = null);

(statearr_13522_13593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (29))){
var inst_13467 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13523_13594 = state_13483__$1;
(statearr_13523_13594[(2)] = inst_13467);

(statearr_13523_13594[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (44))){
var inst_13476 = (state_13483[(2)]);
var state_13483__$1 = (function (){var statearr_13524 = state_13483;
(statearr_13524[(28)] = inst_13476);

return statearr_13524;
})();
var statearr_13525_13595 = state_13483__$1;
(statearr_13525_13595[(2)] = null);

(statearr_13525_13595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (6))){
var inst_13415 = (state_13483[(29)]);
var inst_13414 = cljs.core.deref.call(null,cs);
var inst_13415__$1 = cljs.core.keys.call(null,inst_13414);
var inst_13416 = cljs.core.count.call(null,inst_13415__$1);
var inst_13417 = cljs.core.reset_BANG_.call(null,dctr,inst_13416);
var inst_13422 = cljs.core.seq.call(null,inst_13415__$1);
var inst_13423 = inst_13422;
var inst_13424 = null;
var inst_13425 = (0);
var inst_13426 = (0);
var state_13483__$1 = (function (){var statearr_13526 = state_13483;
(statearr_13526[(20)] = inst_13423);

(statearr_13526[(29)] = inst_13415__$1);

(statearr_13526[(9)] = inst_13424);

(statearr_13526[(10)] = inst_13426);

(statearr_13526[(30)] = inst_13417);

(statearr_13526[(21)] = inst_13425);

return statearr_13526;
})();
var statearr_13527_13596 = state_13483__$1;
(statearr_13527_13596[(2)] = null);

(statearr_13527_13596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (28))){
var inst_13423 = (state_13483[(20)]);
var inst_13442 = (state_13483[(25)]);
var inst_13442__$1 = cljs.core.seq.call(null,inst_13423);
var state_13483__$1 = (function (){var statearr_13528 = state_13483;
(statearr_13528[(25)] = inst_13442__$1);

return statearr_13528;
})();
if(inst_13442__$1){
var statearr_13529_13597 = state_13483__$1;
(statearr_13529_13597[(1)] = (33));

} else {
var statearr_13530_13598 = state_13483__$1;
(statearr_13530_13598[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (25))){
var inst_13426 = (state_13483[(10)]);
var inst_13425 = (state_13483[(21)]);
var inst_13428 = (inst_13426 < inst_13425);
var inst_13429 = inst_13428;
var state_13483__$1 = state_13483;
if(cljs.core.truth_(inst_13429)){
var statearr_13531_13599 = state_13483__$1;
(statearr_13531_13599[(1)] = (27));

} else {
var statearr_13532_13600 = state_13483__$1;
(statearr_13532_13600[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (34))){
var state_13483__$1 = state_13483;
var statearr_13533_13601 = state_13483__$1;
(statearr_13533_13601[(2)] = null);

(statearr_13533_13601[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (17))){
var state_13483__$1 = state_13483;
var statearr_13534_13602 = state_13483__$1;
(statearr_13534_13602[(2)] = null);

(statearr_13534_13602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (3))){
var inst_13481 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13483__$1,inst_13481);
} else {
if((state_val_13484 === (12))){
var inst_13410 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13535_13603 = state_13483__$1;
(statearr_13535_13603[(2)] = inst_13410);

(statearr_13535_13603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (2))){
var state_13483__$1 = state_13483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13483__$1,(4),ch);
} else {
if((state_val_13484 === (23))){
var state_13483__$1 = state_13483;
var statearr_13536_13604 = state_13483__$1;
(statearr_13536_13604[(2)] = null);

(statearr_13536_13604[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (35))){
var inst_13465 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13537_13605 = state_13483__$1;
(statearr_13537_13605[(2)] = inst_13465);

(statearr_13537_13605[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (19))){
var inst_13384 = (state_13483[(7)]);
var inst_13388 = cljs.core.chunk_first.call(null,inst_13384);
var inst_13389 = cljs.core.chunk_rest.call(null,inst_13384);
var inst_13390 = cljs.core.count.call(null,inst_13388);
var inst_13364 = inst_13389;
var inst_13365 = inst_13388;
var inst_13366 = inst_13390;
var inst_13367 = (0);
var state_13483__$1 = (function (){var statearr_13538 = state_13483;
(statearr_13538[(13)] = inst_13366);

(statearr_13538[(14)] = inst_13367);

(statearr_13538[(15)] = inst_13365);

(statearr_13538[(17)] = inst_13364);

return statearr_13538;
})();
var statearr_13539_13606 = state_13483__$1;
(statearr_13539_13606[(2)] = null);

(statearr_13539_13606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (11))){
var inst_13384 = (state_13483[(7)]);
var inst_13364 = (state_13483[(17)]);
var inst_13384__$1 = cljs.core.seq.call(null,inst_13364);
var state_13483__$1 = (function (){var statearr_13540 = state_13483;
(statearr_13540[(7)] = inst_13384__$1);

return statearr_13540;
})();
if(inst_13384__$1){
var statearr_13541_13607 = state_13483__$1;
(statearr_13541_13607[(1)] = (16));

} else {
var statearr_13542_13608 = state_13483__$1;
(statearr_13542_13608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (9))){
var inst_13412 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13543_13609 = state_13483__$1;
(statearr_13543_13609[(2)] = inst_13412);

(statearr_13543_13609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (5))){
var inst_13362 = cljs.core.deref.call(null,cs);
var inst_13363 = cljs.core.seq.call(null,inst_13362);
var inst_13364 = inst_13363;
var inst_13365 = null;
var inst_13366 = (0);
var inst_13367 = (0);
var state_13483__$1 = (function (){var statearr_13544 = state_13483;
(statearr_13544[(13)] = inst_13366);

(statearr_13544[(14)] = inst_13367);

(statearr_13544[(15)] = inst_13365);

(statearr_13544[(17)] = inst_13364);

return statearr_13544;
})();
var statearr_13545_13610 = state_13483__$1;
(statearr_13545_13610[(2)] = null);

(statearr_13545_13610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (14))){
var state_13483__$1 = state_13483;
var statearr_13546_13611 = state_13483__$1;
(statearr_13546_13611[(2)] = null);

(statearr_13546_13611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (45))){
var inst_13473 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13547_13612 = state_13483__$1;
(statearr_13547_13612[(2)] = inst_13473);

(statearr_13547_13612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (26))){
var inst_13415 = (state_13483[(29)]);
var inst_13469 = (state_13483[(2)]);
var inst_13470 = cljs.core.seq.call(null,inst_13415);
var state_13483__$1 = (function (){var statearr_13548 = state_13483;
(statearr_13548[(31)] = inst_13469);

return statearr_13548;
})();
if(inst_13470){
var statearr_13549_13613 = state_13483__$1;
(statearr_13549_13613[(1)] = (42));

} else {
var statearr_13550_13614 = state_13483__$1;
(statearr_13550_13614[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (16))){
var inst_13384 = (state_13483[(7)]);
var inst_13386 = cljs.core.chunked_seq_QMARK_.call(null,inst_13384);
var state_13483__$1 = state_13483;
if(inst_13386){
var statearr_13551_13615 = state_13483__$1;
(statearr_13551_13615[(1)] = (19));

} else {
var statearr_13552_13616 = state_13483__$1;
(statearr_13552_13616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (38))){
var inst_13462 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13553_13617 = state_13483__$1;
(statearr_13553_13617[(2)] = inst_13462);

(statearr_13553_13617[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (30))){
var state_13483__$1 = state_13483;
var statearr_13554_13618 = state_13483__$1;
(statearr_13554_13618[(2)] = null);

(statearr_13554_13618[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (10))){
var inst_13367 = (state_13483[(14)]);
var inst_13365 = (state_13483[(15)]);
var inst_13373 = cljs.core._nth.call(null,inst_13365,inst_13367);
var inst_13374 = cljs.core.nth.call(null,inst_13373,(0),null);
var inst_13375 = cljs.core.nth.call(null,inst_13373,(1),null);
var state_13483__$1 = (function (){var statearr_13555 = state_13483;
(statearr_13555[(26)] = inst_13374);

return statearr_13555;
})();
if(cljs.core.truth_(inst_13375)){
var statearr_13556_13619 = state_13483__$1;
(statearr_13556_13619[(1)] = (13));

} else {
var statearr_13557_13620 = state_13483__$1;
(statearr_13557_13620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (18))){
var inst_13408 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13558_13621 = state_13483__$1;
(statearr_13558_13621[(2)] = inst_13408);

(statearr_13558_13621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (42))){
var state_13483__$1 = state_13483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13483__$1,(45),dchan);
} else {
if((state_val_13484 === (37))){
var inst_13451 = (state_13483[(23)]);
var inst_13355 = (state_13483[(11)]);
var inst_13442 = (state_13483[(25)]);
var inst_13451__$1 = cljs.core.first.call(null,inst_13442);
var inst_13452 = cljs.core.async.put_BANG_.call(null,inst_13451__$1,inst_13355,done);
var state_13483__$1 = (function (){var statearr_13559 = state_13483;
(statearr_13559[(23)] = inst_13451__$1);

return statearr_13559;
})();
if(cljs.core.truth_(inst_13452)){
var statearr_13560_13622 = state_13483__$1;
(statearr_13560_13622[(1)] = (39));

} else {
var statearr_13561_13623 = state_13483__$1;
(statearr_13561_13623[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (8))){
var inst_13366 = (state_13483[(13)]);
var inst_13367 = (state_13483[(14)]);
var inst_13369 = (inst_13367 < inst_13366);
var inst_13370 = inst_13369;
var state_13483__$1 = state_13483;
if(cljs.core.truth_(inst_13370)){
var statearr_13562_13624 = state_13483__$1;
(statearr_13562_13624[(1)] = (10));

} else {
var statearr_13563_13625 = state_13483__$1;
(statearr_13563_13625[(1)] = (11));

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
});})(c__5911__auto___13571,cs,m,dchan,dctr,done))
;
return ((function (switch__5896__auto__,c__5911__auto___13571,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_13567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13567[(0)] = state_machine__5897__auto__);

(statearr_13567[(1)] = (1));

return statearr_13567;
});
var state_machine__5897__auto____1 = (function (state_13483){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_13483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e13568){if((e13568 instanceof Object)){
var ex__5900__auto__ = e13568;
var statearr_13569_13626 = state_13483;
(statearr_13569_13626[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13627 = state_13483;
state_13483 = G__13627;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_13483){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_13483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___13571,cs,m,dchan,dctr,done))
})();
var state__5913__auto__ = (function (){var statearr_13570 = f__5912__auto__.call(null);
(statearr_13570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___13571);

return statearr_13570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___13571,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj13629 = {};
return obj13629;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13630){
var map__13635 = p__13630;
var map__13635__$1 = ((cljs.core.seq_QMARK_.call(null,map__13635))?cljs.core.apply.call(null,cljs.core.hash_map,map__13635):map__13635);
var opts = map__13635__$1;
var statearr_13636_13639 = state;
(statearr_13636_13639[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13635,map__13635__$1,opts){
return (function (val){
var statearr_13637_13640 = state;
(statearr_13637_13640[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13635,map__13635__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13638_13641 = state;
(statearr_13638_13641[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13630 = null;
if (arguments.length > 3) {
  p__13630 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13630);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13642){
var state = cljs.core.first(arglist__13642);
arglist__13642 = cljs.core.next(arglist__13642);
var cont_block = cljs.core.first(arglist__13642);
arglist__13642 = cljs.core.next(arglist__13642);
var ports = cljs.core.first(arglist__13642);
var p__13630 = cljs.core.rest(arglist__13642);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13630);
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
if(typeof cljs.core.async.t13762 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13762 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13763){
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
this.meta13763 = meta13763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13762.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13762.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13762.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13762.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13762.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13762.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t13762.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13764){
var self__ = this;
var _13764__$1 = this;
return self__.meta13763;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13764,meta13763__$1){
var self__ = this;
var _13764__$1 = this;
return (new cljs.core.async.t13762(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13763__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13762.cljs$lang$type = true;

cljs.core.async.t13762.cljs$lang$ctorStr = "cljs.core.async/t13762";

cljs.core.async.t13762.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t13762");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13762 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13762(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13763){
return (new cljs.core.async.t13762(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13763));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13762(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var c__5911__auto___13881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___13881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___13881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13834){
var state_val_13835 = (state_13834[(1)]);
if((state_val_13835 === (7))){
var inst_13778 = (state_13834[(7)]);
var inst_13783 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13778);
var state_13834__$1 = state_13834;
var statearr_13836_13882 = state_13834__$1;
(statearr_13836_13882[(2)] = inst_13783);

(statearr_13836_13882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (20))){
var inst_13793 = (state_13834[(8)]);
var state_13834__$1 = state_13834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13834__$1,(23),out,inst_13793);
} else {
if((state_val_13835 === (1))){
var inst_13768 = (state_13834[(9)]);
var inst_13768__$1 = calc_state.call(null);
var inst_13769 = cljs.core.seq_QMARK_.call(null,inst_13768__$1);
var state_13834__$1 = (function (){var statearr_13837 = state_13834;
(statearr_13837[(9)] = inst_13768__$1);

return statearr_13837;
})();
if(inst_13769){
var statearr_13838_13883 = state_13834__$1;
(statearr_13838_13883[(1)] = (2));

} else {
var statearr_13839_13884 = state_13834__$1;
(statearr_13839_13884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (24))){
var inst_13786 = (state_13834[(10)]);
var inst_13778 = inst_13786;
var state_13834__$1 = (function (){var statearr_13840 = state_13834;
(statearr_13840[(7)] = inst_13778);

return statearr_13840;
})();
var statearr_13841_13885 = state_13834__$1;
(statearr_13841_13885[(2)] = null);

(statearr_13841_13885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (4))){
var inst_13768 = (state_13834[(9)]);
var inst_13774 = (state_13834[(2)]);
var inst_13775 = cljs.core.get.call(null,inst_13774,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13776 = cljs.core.get.call(null,inst_13774,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13777 = cljs.core.get.call(null,inst_13774,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13778 = inst_13768;
var state_13834__$1 = (function (){var statearr_13842 = state_13834;
(statearr_13842[(11)] = inst_13777);

(statearr_13842[(12)] = inst_13776);

(statearr_13842[(7)] = inst_13778);

(statearr_13842[(13)] = inst_13775);

return statearr_13842;
})();
var statearr_13843_13886 = state_13834__$1;
(statearr_13843_13886[(2)] = null);

(statearr_13843_13886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (15))){
var state_13834__$1 = state_13834;
var statearr_13844_13887 = state_13834__$1;
(statearr_13844_13887[(2)] = null);

(statearr_13844_13887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (21))){
var inst_13786 = (state_13834[(10)]);
var inst_13778 = inst_13786;
var state_13834__$1 = (function (){var statearr_13845 = state_13834;
(statearr_13845[(7)] = inst_13778);

return statearr_13845;
})();
var statearr_13846_13888 = state_13834__$1;
(statearr_13846_13888[(2)] = null);

(statearr_13846_13888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (13))){
var inst_13830 = (state_13834[(2)]);
var state_13834__$1 = state_13834;
var statearr_13847_13889 = state_13834__$1;
(statearr_13847_13889[(2)] = inst_13830);

(statearr_13847_13889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (22))){
var inst_13828 = (state_13834[(2)]);
var state_13834__$1 = state_13834;
var statearr_13848_13890 = state_13834__$1;
(statearr_13848_13890[(2)] = inst_13828);

(statearr_13848_13890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (6))){
var inst_13832 = (state_13834[(2)]);
var state_13834__$1 = state_13834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13834__$1,inst_13832);
} else {
if((state_val_13835 === (25))){
var state_13834__$1 = state_13834;
var statearr_13849_13891 = state_13834__$1;
(statearr_13849_13891[(2)] = null);

(statearr_13849_13891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (17))){
var inst_13808 = (state_13834[(14)]);
var state_13834__$1 = state_13834;
var statearr_13850_13892 = state_13834__$1;
(statearr_13850_13892[(2)] = inst_13808);

(statearr_13850_13892[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (3))){
var inst_13768 = (state_13834[(9)]);
var state_13834__$1 = state_13834;
var statearr_13851_13893 = state_13834__$1;
(statearr_13851_13893[(2)] = inst_13768);

(statearr_13851_13893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (12))){
var inst_13794 = (state_13834[(15)]);
var inst_13789 = (state_13834[(16)]);
var inst_13808 = (state_13834[(14)]);
var inst_13808__$1 = inst_13789.call(null,inst_13794);
var state_13834__$1 = (function (){var statearr_13852 = state_13834;
(statearr_13852[(14)] = inst_13808__$1);

return statearr_13852;
})();
if(cljs.core.truth_(inst_13808__$1)){
var statearr_13853_13894 = state_13834__$1;
(statearr_13853_13894[(1)] = (17));

} else {
var statearr_13854_13895 = state_13834__$1;
(statearr_13854_13895[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (2))){
var inst_13768 = (state_13834[(9)]);
var inst_13771 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13768);
var state_13834__$1 = state_13834;
var statearr_13855_13896 = state_13834__$1;
(statearr_13855_13896[(2)] = inst_13771);

(statearr_13855_13896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (23))){
var inst_13819 = (state_13834[(2)]);
var state_13834__$1 = state_13834;
if(cljs.core.truth_(inst_13819)){
var statearr_13856_13897 = state_13834__$1;
(statearr_13856_13897[(1)] = (24));

} else {
var statearr_13857_13898 = state_13834__$1;
(statearr_13857_13898[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (19))){
var inst_13816 = (state_13834[(2)]);
var state_13834__$1 = state_13834;
if(cljs.core.truth_(inst_13816)){
var statearr_13858_13899 = state_13834__$1;
(statearr_13858_13899[(1)] = (20));

} else {
var statearr_13859_13900 = state_13834__$1;
(statearr_13859_13900[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (11))){
var inst_13793 = (state_13834[(8)]);
var inst_13799 = (inst_13793 == null);
var state_13834__$1 = state_13834;
if(cljs.core.truth_(inst_13799)){
var statearr_13860_13901 = state_13834__$1;
(statearr_13860_13901[(1)] = (14));

} else {
var statearr_13861_13902 = state_13834__$1;
(statearr_13861_13902[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (9))){
var inst_13786 = (state_13834[(10)]);
var inst_13786__$1 = (state_13834[(2)]);
var inst_13787 = cljs.core.get.call(null,inst_13786__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13788 = cljs.core.get.call(null,inst_13786__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13789 = cljs.core.get.call(null,inst_13786__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13834__$1 = (function (){var statearr_13862 = state_13834;
(statearr_13862[(16)] = inst_13789);

(statearr_13862[(10)] = inst_13786__$1);

(statearr_13862[(17)] = inst_13788);

return statearr_13862;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13834__$1,(10),inst_13787);
} else {
if((state_val_13835 === (5))){
var inst_13778 = (state_13834[(7)]);
var inst_13781 = cljs.core.seq_QMARK_.call(null,inst_13778);
var state_13834__$1 = state_13834;
if(inst_13781){
var statearr_13863_13903 = state_13834__$1;
(statearr_13863_13903[(1)] = (7));

} else {
var statearr_13864_13904 = state_13834__$1;
(statearr_13864_13904[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (14))){
var inst_13794 = (state_13834[(15)]);
var inst_13801 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13794);
var state_13834__$1 = state_13834;
var statearr_13865_13905 = state_13834__$1;
(statearr_13865_13905[(2)] = inst_13801);

(statearr_13865_13905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (26))){
var inst_13824 = (state_13834[(2)]);
var state_13834__$1 = state_13834;
var statearr_13866_13906 = state_13834__$1;
(statearr_13866_13906[(2)] = inst_13824);

(statearr_13866_13906[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (16))){
var inst_13804 = (state_13834[(2)]);
var inst_13805 = calc_state.call(null);
var inst_13778 = inst_13805;
var state_13834__$1 = (function (){var statearr_13867 = state_13834;
(statearr_13867[(7)] = inst_13778);

(statearr_13867[(18)] = inst_13804);

return statearr_13867;
})();
var statearr_13868_13907 = state_13834__$1;
(statearr_13868_13907[(2)] = null);

(statearr_13868_13907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (10))){
var inst_13794 = (state_13834[(15)]);
var inst_13793 = (state_13834[(8)]);
var inst_13792 = (state_13834[(2)]);
var inst_13793__$1 = cljs.core.nth.call(null,inst_13792,(0),null);
var inst_13794__$1 = cljs.core.nth.call(null,inst_13792,(1),null);
var inst_13795 = (inst_13793__$1 == null);
var inst_13796 = cljs.core._EQ_.call(null,inst_13794__$1,change);
var inst_13797 = (inst_13795) || (inst_13796);
var state_13834__$1 = (function (){var statearr_13869 = state_13834;
(statearr_13869[(15)] = inst_13794__$1);

(statearr_13869[(8)] = inst_13793__$1);

return statearr_13869;
})();
if(cljs.core.truth_(inst_13797)){
var statearr_13870_13908 = state_13834__$1;
(statearr_13870_13908[(1)] = (11));

} else {
var statearr_13871_13909 = state_13834__$1;
(statearr_13871_13909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (18))){
var inst_13794 = (state_13834[(15)]);
var inst_13789 = (state_13834[(16)]);
var inst_13788 = (state_13834[(17)]);
var inst_13811 = cljs.core.empty_QMARK_.call(null,inst_13789);
var inst_13812 = inst_13788.call(null,inst_13794);
var inst_13813 = cljs.core.not.call(null,inst_13812);
var inst_13814 = (inst_13811) && (inst_13813);
var state_13834__$1 = state_13834;
var statearr_13872_13910 = state_13834__$1;
(statearr_13872_13910[(2)] = inst_13814);

(statearr_13872_13910[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (8))){
var inst_13778 = (state_13834[(7)]);
var state_13834__$1 = state_13834;
var statearr_13873_13911 = state_13834__$1;
(statearr_13873_13911[(2)] = inst_13778);

(statearr_13873_13911[(1)] = (9));


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
});})(c__5911__auto___13881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5896__auto__,c__5911__auto___13881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_13877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13877[(0)] = state_machine__5897__auto__);

(statearr_13877[(1)] = (1));

return statearr_13877;
});
var state_machine__5897__auto____1 = (function (state_13834){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_13834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e13878){if((e13878 instanceof Object)){
var ex__5900__auto__ = e13878;
var statearr_13879_13912 = state_13834;
(statearr_13879_13912[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13913 = state_13834;
state_13834 = G__13913;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_13834){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_13834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___13881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5913__auto__ = (function (){var statearr_13880 = f__5912__auto__.call(null);
(statearr_13880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___13881);

return statearr_13880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___13881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj13915 = {};
return obj13915;
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
return (function (p1__13916_SHARP_){
if(cljs.core.truth_(p1__13916_SHARP_.call(null,topic))){
return p1__13916_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13916_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3688__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14039 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14040){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14040 = meta14040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14039.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14039.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14039.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t14039.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14039.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14041){
var self__ = this;
var _14041__$1 = this;
return self__.meta14040;
});})(mults,ensure_mult))
;

cljs.core.async.t14039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14041,meta14040__$1){
var self__ = this;
var _14041__$1 = this;
return (new cljs.core.async.t14039(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14040__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14039.cljs$lang$type = true;

cljs.core.async.t14039.cljs$lang$ctorStr = "cljs.core.async/t14039";

cljs.core.async.t14039.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14039");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14039 = ((function (mults,ensure_mult){
return (function __GT_t14039(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14040){
return (new cljs.core.async.t14039(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14040));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14039(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var c__5911__auto___14161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14161,mults,ensure_mult,p){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14161,mults,ensure_mult,p){
return (function (state_14113){
var state_val_14114 = (state_14113[(1)]);
if((state_val_14114 === (7))){
var inst_14109 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14115_14162 = state_14113__$1;
(statearr_14115_14162[(2)] = inst_14109);

(statearr_14115_14162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (20))){
var state_14113__$1 = state_14113;
var statearr_14116_14163 = state_14113__$1;
(statearr_14116_14163[(2)] = null);

(statearr_14116_14163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (1))){
var state_14113__$1 = state_14113;
var statearr_14117_14164 = state_14113__$1;
(statearr_14117_14164[(2)] = null);

(statearr_14117_14164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (24))){
var inst_14092 = (state_14113[(7)]);
var inst_14101 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14092);
var state_14113__$1 = state_14113;
var statearr_14118_14165 = state_14113__$1;
(statearr_14118_14165[(2)] = inst_14101);

(statearr_14118_14165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (4))){
var inst_14044 = (state_14113[(8)]);
var inst_14044__$1 = (state_14113[(2)]);
var inst_14045 = (inst_14044__$1 == null);
var state_14113__$1 = (function (){var statearr_14119 = state_14113;
(statearr_14119[(8)] = inst_14044__$1);

return statearr_14119;
})();
if(cljs.core.truth_(inst_14045)){
var statearr_14120_14166 = state_14113__$1;
(statearr_14120_14166[(1)] = (5));

} else {
var statearr_14121_14167 = state_14113__$1;
(statearr_14121_14167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (15))){
var inst_14086 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14122_14168 = state_14113__$1;
(statearr_14122_14168[(2)] = inst_14086);

(statearr_14122_14168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (21))){
var inst_14106 = (state_14113[(2)]);
var state_14113__$1 = (function (){var statearr_14123 = state_14113;
(statearr_14123[(9)] = inst_14106);

return statearr_14123;
})();
var statearr_14124_14169 = state_14113__$1;
(statearr_14124_14169[(2)] = null);

(statearr_14124_14169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (13))){
var inst_14068 = (state_14113[(10)]);
var inst_14070 = cljs.core.chunked_seq_QMARK_.call(null,inst_14068);
var state_14113__$1 = state_14113;
if(inst_14070){
var statearr_14125_14170 = state_14113__$1;
(statearr_14125_14170[(1)] = (16));

} else {
var statearr_14126_14171 = state_14113__$1;
(statearr_14126_14171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (22))){
var inst_14098 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
if(cljs.core.truth_(inst_14098)){
var statearr_14127_14172 = state_14113__$1;
(statearr_14127_14172[(1)] = (23));

} else {
var statearr_14128_14173 = state_14113__$1;
(statearr_14128_14173[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (6))){
var inst_14044 = (state_14113[(8)]);
var inst_14092 = (state_14113[(7)]);
var inst_14094 = (state_14113[(11)]);
var inst_14092__$1 = topic_fn.call(null,inst_14044);
var inst_14093 = cljs.core.deref.call(null,mults);
var inst_14094__$1 = cljs.core.get.call(null,inst_14093,inst_14092__$1);
var state_14113__$1 = (function (){var statearr_14129 = state_14113;
(statearr_14129[(7)] = inst_14092__$1);

(statearr_14129[(11)] = inst_14094__$1);

return statearr_14129;
})();
if(cljs.core.truth_(inst_14094__$1)){
var statearr_14130_14174 = state_14113__$1;
(statearr_14130_14174[(1)] = (19));

} else {
var statearr_14131_14175 = state_14113__$1;
(statearr_14131_14175[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (25))){
var inst_14103 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14132_14176 = state_14113__$1;
(statearr_14132_14176[(2)] = inst_14103);

(statearr_14132_14176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (17))){
var inst_14068 = (state_14113[(10)]);
var inst_14077 = cljs.core.first.call(null,inst_14068);
var inst_14078 = cljs.core.async.muxch_STAR_.call(null,inst_14077);
var inst_14079 = cljs.core.async.close_BANG_.call(null,inst_14078);
var inst_14080 = cljs.core.next.call(null,inst_14068);
var inst_14054 = inst_14080;
var inst_14055 = null;
var inst_14056 = (0);
var inst_14057 = (0);
var state_14113__$1 = (function (){var statearr_14133 = state_14113;
(statearr_14133[(12)] = inst_14056);

(statearr_14133[(13)] = inst_14054);

(statearr_14133[(14)] = inst_14057);

(statearr_14133[(15)] = inst_14079);

(statearr_14133[(16)] = inst_14055);

return statearr_14133;
})();
var statearr_14134_14177 = state_14113__$1;
(statearr_14134_14177[(2)] = null);

(statearr_14134_14177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (3))){
var inst_14111 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14113__$1,inst_14111);
} else {
if((state_val_14114 === (12))){
var inst_14088 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14135_14178 = state_14113__$1;
(statearr_14135_14178[(2)] = inst_14088);

(statearr_14135_14178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (2))){
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14113__$1,(4),ch);
} else {
if((state_val_14114 === (23))){
var state_14113__$1 = state_14113;
var statearr_14136_14179 = state_14113__$1;
(statearr_14136_14179[(2)] = null);

(statearr_14136_14179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (19))){
var inst_14044 = (state_14113[(8)]);
var inst_14094 = (state_14113[(11)]);
var inst_14096 = cljs.core.async.muxch_STAR_.call(null,inst_14094);
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14113__$1,(22),inst_14096,inst_14044);
} else {
if((state_val_14114 === (11))){
var inst_14054 = (state_14113[(13)]);
var inst_14068 = (state_14113[(10)]);
var inst_14068__$1 = cljs.core.seq.call(null,inst_14054);
var state_14113__$1 = (function (){var statearr_14137 = state_14113;
(statearr_14137[(10)] = inst_14068__$1);

return statearr_14137;
})();
if(inst_14068__$1){
var statearr_14138_14180 = state_14113__$1;
(statearr_14138_14180[(1)] = (13));

} else {
var statearr_14139_14181 = state_14113__$1;
(statearr_14139_14181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (9))){
var inst_14090 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14140_14182 = state_14113__$1;
(statearr_14140_14182[(2)] = inst_14090);

(statearr_14140_14182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (5))){
var inst_14051 = cljs.core.deref.call(null,mults);
var inst_14052 = cljs.core.vals.call(null,inst_14051);
var inst_14053 = cljs.core.seq.call(null,inst_14052);
var inst_14054 = inst_14053;
var inst_14055 = null;
var inst_14056 = (0);
var inst_14057 = (0);
var state_14113__$1 = (function (){var statearr_14141 = state_14113;
(statearr_14141[(12)] = inst_14056);

(statearr_14141[(13)] = inst_14054);

(statearr_14141[(14)] = inst_14057);

(statearr_14141[(16)] = inst_14055);

return statearr_14141;
})();
var statearr_14142_14183 = state_14113__$1;
(statearr_14142_14183[(2)] = null);

(statearr_14142_14183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (14))){
var state_14113__$1 = state_14113;
var statearr_14146_14184 = state_14113__$1;
(statearr_14146_14184[(2)] = null);

(statearr_14146_14184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (16))){
var inst_14068 = (state_14113[(10)]);
var inst_14072 = cljs.core.chunk_first.call(null,inst_14068);
var inst_14073 = cljs.core.chunk_rest.call(null,inst_14068);
var inst_14074 = cljs.core.count.call(null,inst_14072);
var inst_14054 = inst_14073;
var inst_14055 = inst_14072;
var inst_14056 = inst_14074;
var inst_14057 = (0);
var state_14113__$1 = (function (){var statearr_14147 = state_14113;
(statearr_14147[(12)] = inst_14056);

(statearr_14147[(13)] = inst_14054);

(statearr_14147[(14)] = inst_14057);

(statearr_14147[(16)] = inst_14055);

return statearr_14147;
})();
var statearr_14148_14185 = state_14113__$1;
(statearr_14148_14185[(2)] = null);

(statearr_14148_14185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (10))){
var inst_14056 = (state_14113[(12)]);
var inst_14054 = (state_14113[(13)]);
var inst_14057 = (state_14113[(14)]);
var inst_14055 = (state_14113[(16)]);
var inst_14062 = cljs.core._nth.call(null,inst_14055,inst_14057);
var inst_14063 = cljs.core.async.muxch_STAR_.call(null,inst_14062);
var inst_14064 = cljs.core.async.close_BANG_.call(null,inst_14063);
var inst_14065 = (inst_14057 + (1));
var tmp14143 = inst_14056;
var tmp14144 = inst_14054;
var tmp14145 = inst_14055;
var inst_14054__$1 = tmp14144;
var inst_14055__$1 = tmp14145;
var inst_14056__$1 = tmp14143;
var inst_14057__$1 = inst_14065;
var state_14113__$1 = (function (){var statearr_14149 = state_14113;
(statearr_14149[(12)] = inst_14056__$1);

(statearr_14149[(13)] = inst_14054__$1);

(statearr_14149[(14)] = inst_14057__$1);

(statearr_14149[(16)] = inst_14055__$1);

(statearr_14149[(17)] = inst_14064);

return statearr_14149;
})();
var statearr_14150_14186 = state_14113__$1;
(statearr_14150_14186[(2)] = null);

(statearr_14150_14186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (18))){
var inst_14083 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14151_14187 = state_14113__$1;
(statearr_14151_14187[(2)] = inst_14083);

(statearr_14151_14187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (8))){
var inst_14056 = (state_14113[(12)]);
var inst_14057 = (state_14113[(14)]);
var inst_14059 = (inst_14057 < inst_14056);
var inst_14060 = inst_14059;
var state_14113__$1 = state_14113;
if(cljs.core.truth_(inst_14060)){
var statearr_14152_14188 = state_14113__$1;
(statearr_14152_14188[(1)] = (10));

} else {
var statearr_14153_14189 = state_14113__$1;
(statearr_14153_14189[(1)] = (11));

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
});})(c__5911__auto___14161,mults,ensure_mult,p))
;
return ((function (switch__5896__auto__,c__5911__auto___14161,mults,ensure_mult,p){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14157[(0)] = state_machine__5897__auto__);

(statearr_14157[(1)] = (1));

return statearr_14157;
});
var state_machine__5897__auto____1 = (function (state_14113){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14158){if((e14158 instanceof Object)){
var ex__5900__auto__ = e14158;
var statearr_14159_14190 = state_14113;
(statearr_14159_14190[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14191 = state_14113;
state_14113 = G__14191;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14113){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14161,mults,ensure_mult,p))
})();
var state__5913__auto__ = (function (){var statearr_14160 = f__5912__auto__.call(null);
(statearr_14160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14161);

return statearr_14160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14161,mults,ensure_mult,p))
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
var c__5911__auto___14328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14298){
var state_val_14299 = (state_14298[(1)]);
if((state_val_14299 === (7))){
var state_14298__$1 = state_14298;
var statearr_14300_14329 = state_14298__$1;
(statearr_14300_14329[(2)] = null);

(statearr_14300_14329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (1))){
var state_14298__$1 = state_14298;
var statearr_14301_14330 = state_14298__$1;
(statearr_14301_14330[(2)] = null);

(statearr_14301_14330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (4))){
var inst_14262 = (state_14298[(7)]);
var inst_14264 = (inst_14262 < cnt);
var state_14298__$1 = state_14298;
if(cljs.core.truth_(inst_14264)){
var statearr_14302_14331 = state_14298__$1;
(statearr_14302_14331[(1)] = (6));

} else {
var statearr_14303_14332 = state_14298__$1;
(statearr_14303_14332[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (15))){
var inst_14294 = (state_14298[(2)]);
var state_14298__$1 = state_14298;
var statearr_14304_14333 = state_14298__$1;
(statearr_14304_14333[(2)] = inst_14294);

(statearr_14304_14333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (13))){
var inst_14287 = cljs.core.async.close_BANG_.call(null,out);
var state_14298__$1 = state_14298;
var statearr_14305_14334 = state_14298__$1;
(statearr_14305_14334[(2)] = inst_14287);

(statearr_14305_14334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (6))){
var state_14298__$1 = state_14298;
var statearr_14306_14335 = state_14298__$1;
(statearr_14306_14335[(2)] = null);

(statearr_14306_14335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (3))){
var inst_14296 = (state_14298[(2)]);
var state_14298__$1 = state_14298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14298__$1,inst_14296);
} else {
if((state_val_14299 === (12))){
var inst_14284 = (state_14298[(8)]);
var inst_14284__$1 = (state_14298[(2)]);
var inst_14285 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14284__$1);
var state_14298__$1 = (function (){var statearr_14307 = state_14298;
(statearr_14307[(8)] = inst_14284__$1);

return statearr_14307;
})();
if(cljs.core.truth_(inst_14285)){
var statearr_14308_14336 = state_14298__$1;
(statearr_14308_14336[(1)] = (13));

} else {
var statearr_14309_14337 = state_14298__$1;
(statearr_14309_14337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (2))){
var inst_14261 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14262 = (0);
var state_14298__$1 = (function (){var statearr_14310 = state_14298;
(statearr_14310[(7)] = inst_14262);

(statearr_14310[(9)] = inst_14261);

return statearr_14310;
})();
var statearr_14311_14338 = state_14298__$1;
(statearr_14311_14338[(2)] = null);

(statearr_14311_14338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (11))){
var inst_14262 = (state_14298[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14298,(10),Object,null,(9));
var inst_14271 = chs__$1.call(null,inst_14262);
var inst_14272 = done.call(null,inst_14262);
var inst_14273 = cljs.core.async.take_BANG_.call(null,inst_14271,inst_14272);
var state_14298__$1 = state_14298;
var statearr_14312_14339 = state_14298__$1;
(statearr_14312_14339[(2)] = inst_14273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14298__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (9))){
var inst_14262 = (state_14298[(7)]);
var inst_14275 = (state_14298[(2)]);
var inst_14276 = (inst_14262 + (1));
var inst_14262__$1 = inst_14276;
var state_14298__$1 = (function (){var statearr_14313 = state_14298;
(statearr_14313[(10)] = inst_14275);

(statearr_14313[(7)] = inst_14262__$1);

return statearr_14313;
})();
var statearr_14314_14340 = state_14298__$1;
(statearr_14314_14340[(2)] = null);

(statearr_14314_14340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (5))){
var inst_14282 = (state_14298[(2)]);
var state_14298__$1 = (function (){var statearr_14315 = state_14298;
(statearr_14315[(11)] = inst_14282);

return statearr_14315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14298__$1,(12),dchan);
} else {
if((state_val_14299 === (14))){
var inst_14284 = (state_14298[(8)]);
var inst_14289 = cljs.core.apply.call(null,f,inst_14284);
var state_14298__$1 = state_14298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14298__$1,(16),out,inst_14289);
} else {
if((state_val_14299 === (16))){
var inst_14291 = (state_14298[(2)]);
var state_14298__$1 = (function (){var statearr_14316 = state_14298;
(statearr_14316[(12)] = inst_14291);

return statearr_14316;
})();
var statearr_14317_14341 = state_14298__$1;
(statearr_14317_14341[(2)] = null);

(statearr_14317_14341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (10))){
var inst_14266 = (state_14298[(2)]);
var inst_14267 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14298__$1 = (function (){var statearr_14318 = state_14298;
(statearr_14318[(13)] = inst_14266);

return statearr_14318;
})();
var statearr_14319_14342 = state_14298__$1;
(statearr_14319_14342[(2)] = inst_14267);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14298__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14299 === (8))){
var inst_14280 = (state_14298[(2)]);
var state_14298__$1 = state_14298;
var statearr_14320_14343 = state_14298__$1;
(statearr_14320_14343[(2)] = inst_14280);

(statearr_14320_14343[(1)] = (5));


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
});})(c__5911__auto___14328,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5896__auto__,c__5911__auto___14328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14324[(0)] = state_machine__5897__auto__);

(statearr_14324[(1)] = (1));

return statearr_14324;
});
var state_machine__5897__auto____1 = (function (state_14298){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14325){if((e14325 instanceof Object)){
var ex__5900__auto__ = e14325;
var statearr_14326_14344 = state_14298;
(statearr_14326_14344[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14345 = state_14298;
state_14298 = G__14345;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14298){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14328,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5913__auto__ = (function (){var statearr_14327 = f__5912__auto__.call(null);
(statearr_14327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14328);

return statearr_14327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14328,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5911__auto___14453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14453,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14453,out){
return (function (state_14429){
var state_val_14430 = (state_14429[(1)]);
if((state_val_14430 === (7))){
var inst_14408 = (state_14429[(7)]);
var inst_14409 = (state_14429[(8)]);
var inst_14408__$1 = (state_14429[(2)]);
var inst_14409__$1 = cljs.core.nth.call(null,inst_14408__$1,(0),null);
var inst_14410 = cljs.core.nth.call(null,inst_14408__$1,(1),null);
var inst_14411 = (inst_14409__$1 == null);
var state_14429__$1 = (function (){var statearr_14431 = state_14429;
(statearr_14431[(7)] = inst_14408__$1);

(statearr_14431[(9)] = inst_14410);

(statearr_14431[(8)] = inst_14409__$1);

return statearr_14431;
})();
if(cljs.core.truth_(inst_14411)){
var statearr_14432_14454 = state_14429__$1;
(statearr_14432_14454[(1)] = (8));

} else {
var statearr_14433_14455 = state_14429__$1;
(statearr_14433_14455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14430 === (1))){
var inst_14400 = cljs.core.vec.call(null,chs);
var inst_14401 = inst_14400;
var state_14429__$1 = (function (){var statearr_14434 = state_14429;
(statearr_14434[(10)] = inst_14401);

return statearr_14434;
})();
var statearr_14435_14456 = state_14429__$1;
(statearr_14435_14456[(2)] = null);

(statearr_14435_14456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14430 === (4))){
var inst_14401 = (state_14429[(10)]);
var state_14429__$1 = state_14429;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14429__$1,(7),inst_14401);
} else {
if((state_val_14430 === (6))){
var inst_14425 = (state_14429[(2)]);
var state_14429__$1 = state_14429;
var statearr_14436_14457 = state_14429__$1;
(statearr_14436_14457[(2)] = inst_14425);

(statearr_14436_14457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14430 === (3))){
var inst_14427 = (state_14429[(2)]);
var state_14429__$1 = state_14429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14429__$1,inst_14427);
} else {
if((state_val_14430 === (2))){
var inst_14401 = (state_14429[(10)]);
var inst_14403 = cljs.core.count.call(null,inst_14401);
var inst_14404 = (inst_14403 > (0));
var state_14429__$1 = state_14429;
if(cljs.core.truth_(inst_14404)){
var statearr_14438_14458 = state_14429__$1;
(statearr_14438_14458[(1)] = (4));

} else {
var statearr_14439_14459 = state_14429__$1;
(statearr_14439_14459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14430 === (11))){
var inst_14401 = (state_14429[(10)]);
var inst_14418 = (state_14429[(2)]);
var tmp14437 = inst_14401;
var inst_14401__$1 = tmp14437;
var state_14429__$1 = (function (){var statearr_14440 = state_14429;
(statearr_14440[(10)] = inst_14401__$1);

(statearr_14440[(11)] = inst_14418);

return statearr_14440;
})();
var statearr_14441_14460 = state_14429__$1;
(statearr_14441_14460[(2)] = null);

(statearr_14441_14460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14430 === (9))){
var inst_14409 = (state_14429[(8)]);
var state_14429__$1 = state_14429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14429__$1,(11),out,inst_14409);
} else {
if((state_val_14430 === (5))){
var inst_14423 = cljs.core.async.close_BANG_.call(null,out);
var state_14429__$1 = state_14429;
var statearr_14442_14461 = state_14429__$1;
(statearr_14442_14461[(2)] = inst_14423);

(statearr_14442_14461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14430 === (10))){
var inst_14421 = (state_14429[(2)]);
var state_14429__$1 = state_14429;
var statearr_14443_14462 = state_14429__$1;
(statearr_14443_14462[(2)] = inst_14421);

(statearr_14443_14462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14430 === (8))){
var inst_14401 = (state_14429[(10)]);
var inst_14408 = (state_14429[(7)]);
var inst_14410 = (state_14429[(9)]);
var inst_14409 = (state_14429[(8)]);
var inst_14413 = (function (){var c = inst_14410;
var v = inst_14409;
var vec__14406 = inst_14408;
var cs = inst_14401;
return ((function (c,v,vec__14406,cs,inst_14401,inst_14408,inst_14410,inst_14409,state_val_14430,c__5911__auto___14453,out){
return (function (p1__14346_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14346_SHARP_);
});
;})(c,v,vec__14406,cs,inst_14401,inst_14408,inst_14410,inst_14409,state_val_14430,c__5911__auto___14453,out))
})();
var inst_14414 = cljs.core.filterv.call(null,inst_14413,inst_14401);
var inst_14401__$1 = inst_14414;
var state_14429__$1 = (function (){var statearr_14444 = state_14429;
(statearr_14444[(10)] = inst_14401__$1);

return statearr_14444;
})();
var statearr_14445_14463 = state_14429__$1;
(statearr_14445_14463[(2)] = null);

(statearr_14445_14463[(1)] = (2));


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
});})(c__5911__auto___14453,out))
;
return ((function (switch__5896__auto__,c__5911__auto___14453,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14449 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14449[(0)] = state_machine__5897__auto__);

(statearr_14449[(1)] = (1));

return statearr_14449;
});
var state_machine__5897__auto____1 = (function (state_14429){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14450){if((e14450 instanceof Object)){
var ex__5900__auto__ = e14450;
var statearr_14451_14464 = state_14429;
(statearr_14451_14464[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14465 = state_14429;
state_14429 = G__14465;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14429){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14453,out))
})();
var state__5913__auto__ = (function (){var statearr_14452 = f__5912__auto__.call(null);
(statearr_14452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14453);

return statearr_14452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14453,out))
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
var c__5911__auto___14558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14558,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14558,out){
return (function (state_14535){
var state_val_14536 = (state_14535[(1)]);
if((state_val_14536 === (7))){
var inst_14517 = (state_14535[(7)]);
var inst_14517__$1 = (state_14535[(2)]);
var inst_14518 = (inst_14517__$1 == null);
var inst_14519 = cljs.core.not.call(null,inst_14518);
var state_14535__$1 = (function (){var statearr_14537 = state_14535;
(statearr_14537[(7)] = inst_14517__$1);

return statearr_14537;
})();
if(inst_14519){
var statearr_14538_14559 = state_14535__$1;
(statearr_14538_14559[(1)] = (8));

} else {
var statearr_14539_14560 = state_14535__$1;
(statearr_14539_14560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (1))){
var inst_14512 = (0);
var state_14535__$1 = (function (){var statearr_14540 = state_14535;
(statearr_14540[(8)] = inst_14512);

return statearr_14540;
})();
var statearr_14541_14561 = state_14535__$1;
(statearr_14541_14561[(2)] = null);

(statearr_14541_14561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (4))){
var state_14535__$1 = state_14535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14535__$1,(7),ch);
} else {
if((state_val_14536 === (6))){
var inst_14530 = (state_14535[(2)]);
var state_14535__$1 = state_14535;
var statearr_14542_14562 = state_14535__$1;
(statearr_14542_14562[(2)] = inst_14530);

(statearr_14542_14562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (3))){
var inst_14532 = (state_14535[(2)]);
var inst_14533 = cljs.core.async.close_BANG_.call(null,out);
var state_14535__$1 = (function (){var statearr_14543 = state_14535;
(statearr_14543[(9)] = inst_14532);

return statearr_14543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14535__$1,inst_14533);
} else {
if((state_val_14536 === (2))){
var inst_14512 = (state_14535[(8)]);
var inst_14514 = (inst_14512 < n);
var state_14535__$1 = state_14535;
if(cljs.core.truth_(inst_14514)){
var statearr_14544_14563 = state_14535__$1;
(statearr_14544_14563[(1)] = (4));

} else {
var statearr_14545_14564 = state_14535__$1;
(statearr_14545_14564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (11))){
var inst_14512 = (state_14535[(8)]);
var inst_14522 = (state_14535[(2)]);
var inst_14523 = (inst_14512 + (1));
var inst_14512__$1 = inst_14523;
var state_14535__$1 = (function (){var statearr_14546 = state_14535;
(statearr_14546[(8)] = inst_14512__$1);

(statearr_14546[(10)] = inst_14522);

return statearr_14546;
})();
var statearr_14547_14565 = state_14535__$1;
(statearr_14547_14565[(2)] = null);

(statearr_14547_14565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (9))){
var state_14535__$1 = state_14535;
var statearr_14548_14566 = state_14535__$1;
(statearr_14548_14566[(2)] = null);

(statearr_14548_14566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (5))){
var state_14535__$1 = state_14535;
var statearr_14549_14567 = state_14535__$1;
(statearr_14549_14567[(2)] = null);

(statearr_14549_14567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (10))){
var inst_14527 = (state_14535[(2)]);
var state_14535__$1 = state_14535;
var statearr_14550_14568 = state_14535__$1;
(statearr_14550_14568[(2)] = inst_14527);

(statearr_14550_14568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (8))){
var inst_14517 = (state_14535[(7)]);
var state_14535__$1 = state_14535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14535__$1,(11),out,inst_14517);
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
});})(c__5911__auto___14558,out))
;
return ((function (switch__5896__auto__,c__5911__auto___14558,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14554[(0)] = state_machine__5897__auto__);

(statearr_14554[(1)] = (1));

return statearr_14554;
});
var state_machine__5897__auto____1 = (function (state_14535){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14555){if((e14555 instanceof Object)){
var ex__5900__auto__ = e14555;
var statearr_14556_14569 = state_14535;
(statearr_14556_14569[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14570 = state_14535;
state_14535 = G__14570;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14535){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14558,out))
})();
var state__5913__auto__ = (function (){var statearr_14557 = f__5912__auto__.call(null);
(statearr_14557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14558);

return statearr_14557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14558,out))
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
if(typeof cljs.core.async.t14578 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14578 = (function (ch,f,map_LT_,meta14579){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14579 = meta14579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14578.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14578.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14581 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14581 = (function (fn1,_,meta14579,map_LT_,f,ch,meta14582){
this.fn1 = fn1;
this._ = _;
this.meta14579 = meta14579;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14582 = meta14582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14571_SHARP_){
return f1.call(null,(((p1__14571_SHARP_ == null))?null:self__.f.call(null,p1__14571_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14583){
var self__ = this;
var _14583__$1 = this;
return self__.meta14582;
});})(___$1))
;

cljs.core.async.t14581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14583,meta14582__$1){
var self__ = this;
var _14583__$1 = this;
return (new cljs.core.async.t14581(self__.fn1,self__._,self__.meta14579,self__.map_LT_,self__.f,self__.ch,meta14582__$1));
});})(___$1))
;

cljs.core.async.t14581.cljs$lang$type = true;

cljs.core.async.t14581.cljs$lang$ctorStr = "cljs.core.async/t14581";

cljs.core.async.t14581.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14581");
});})(___$1))
;

cljs.core.async.__GT_t14581 = ((function (___$1){
return (function __GT_t14581(fn1__$1,___$2,meta14579__$1,map_LT___$1,f__$1,ch__$1,meta14582){
return (new cljs.core.async.t14581(fn1__$1,___$2,meta14579__$1,map_LT___$1,f__$1,ch__$1,meta14582));
});})(___$1))
;

}

return (new cljs.core.async.t14581(fn1,___$1,self__.meta14579,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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

cljs.core.async.t14578.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14578.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14580){
var self__ = this;
var _14580__$1 = this;
return self__.meta14579;
});

cljs.core.async.t14578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14580,meta14579__$1){
var self__ = this;
var _14580__$1 = this;
return (new cljs.core.async.t14578(self__.ch,self__.f,self__.map_LT_,meta14579__$1));
});

cljs.core.async.t14578.cljs$lang$type = true;

cljs.core.async.t14578.cljs$lang$ctorStr = "cljs.core.async/t14578";

cljs.core.async.t14578.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14578");
});

cljs.core.async.__GT_t14578 = (function __GT_t14578(ch__$1,f__$1,map_LT___$1,meta14579){
return (new cljs.core.async.t14578(ch__$1,f__$1,map_LT___$1,meta14579));
});

}

return (new cljs.core.async.t14578(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t14587 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14587 = (function (ch,f,map_GT_,meta14588){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14588 = meta14588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14587.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14587.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14587.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14589){
var self__ = this;
var _14589__$1 = this;
return self__.meta14588;
});

cljs.core.async.t14587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14589,meta14588__$1){
var self__ = this;
var _14589__$1 = this;
return (new cljs.core.async.t14587(self__.ch,self__.f,self__.map_GT_,meta14588__$1));
});

cljs.core.async.t14587.cljs$lang$type = true;

cljs.core.async.t14587.cljs$lang$ctorStr = "cljs.core.async/t14587";

cljs.core.async.t14587.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14587");
});

cljs.core.async.__GT_t14587 = (function __GT_t14587(ch__$1,f__$1,map_GT___$1,meta14588){
return (new cljs.core.async.t14587(ch__$1,f__$1,map_GT___$1,meta14588));
});

}

return (new cljs.core.async.t14587(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t14593 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14593 = (function (ch,p,filter_GT_,meta14594){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14594 = meta14594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14593.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14593.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14593.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14593.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14595){
var self__ = this;
var _14595__$1 = this;
return self__.meta14594;
});

cljs.core.async.t14593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14595,meta14594__$1){
var self__ = this;
var _14595__$1 = this;
return (new cljs.core.async.t14593(self__.ch,self__.p,self__.filter_GT_,meta14594__$1));
});

cljs.core.async.t14593.cljs$lang$type = true;

cljs.core.async.t14593.cljs$lang$ctorStr = "cljs.core.async/t14593";

cljs.core.async.t14593.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__,opt__4277__auto__){
return cljs.core._write.call(null,writer__4276__auto__,"cljs.core.async/t14593");
});

cljs.core.async.__GT_t14593 = (function __GT_t14593(ch__$1,p__$1,filter_GT___$1,meta14594){
return (new cljs.core.async.t14593(ch__$1,p__$1,filter_GT___$1,meta14594));
});

}

return (new cljs.core.async.t14593(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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
var c__5911__auto___14678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___14678,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___14678,out){
return (function (state_14657){
var state_val_14658 = (state_14657[(1)]);
if((state_val_14658 === (7))){
var inst_14653 = (state_14657[(2)]);
var state_14657__$1 = state_14657;
var statearr_14659_14679 = state_14657__$1;
(statearr_14659_14679[(2)] = inst_14653);

(statearr_14659_14679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (1))){
var state_14657__$1 = state_14657;
var statearr_14660_14680 = state_14657__$1;
(statearr_14660_14680[(2)] = null);

(statearr_14660_14680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (4))){
var inst_14639 = (state_14657[(7)]);
var inst_14639__$1 = (state_14657[(2)]);
var inst_14640 = (inst_14639__$1 == null);
var state_14657__$1 = (function (){var statearr_14661 = state_14657;
(statearr_14661[(7)] = inst_14639__$1);

return statearr_14661;
})();
if(cljs.core.truth_(inst_14640)){
var statearr_14662_14681 = state_14657__$1;
(statearr_14662_14681[(1)] = (5));

} else {
var statearr_14663_14682 = state_14657__$1;
(statearr_14663_14682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (6))){
var inst_14639 = (state_14657[(7)]);
var inst_14644 = p.call(null,inst_14639);
var state_14657__$1 = state_14657;
if(cljs.core.truth_(inst_14644)){
var statearr_14664_14683 = state_14657__$1;
(statearr_14664_14683[(1)] = (8));

} else {
var statearr_14665_14684 = state_14657__$1;
(statearr_14665_14684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (3))){
var inst_14655 = (state_14657[(2)]);
var state_14657__$1 = state_14657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14657__$1,inst_14655);
} else {
if((state_val_14658 === (2))){
var state_14657__$1 = state_14657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14657__$1,(4),ch);
} else {
if((state_val_14658 === (11))){
var inst_14647 = (state_14657[(2)]);
var state_14657__$1 = state_14657;
var statearr_14666_14685 = state_14657__$1;
(statearr_14666_14685[(2)] = inst_14647);

(statearr_14666_14685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (9))){
var state_14657__$1 = state_14657;
var statearr_14667_14686 = state_14657__$1;
(statearr_14667_14686[(2)] = null);

(statearr_14667_14686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (5))){
var inst_14642 = cljs.core.async.close_BANG_.call(null,out);
var state_14657__$1 = state_14657;
var statearr_14668_14687 = state_14657__$1;
(statearr_14668_14687[(2)] = inst_14642);

(statearr_14668_14687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (10))){
var inst_14650 = (state_14657[(2)]);
var state_14657__$1 = (function (){var statearr_14669 = state_14657;
(statearr_14669[(8)] = inst_14650);

return statearr_14669;
})();
var statearr_14670_14688 = state_14657__$1;
(statearr_14670_14688[(2)] = null);

(statearr_14670_14688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (8))){
var inst_14639 = (state_14657[(7)]);
var state_14657__$1 = state_14657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14657__$1,(11),out,inst_14639);
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
});})(c__5911__auto___14678,out))
;
return ((function (switch__5896__auto__,c__5911__auto___14678,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_14674 = [null,null,null,null,null,null,null,null,null];
(statearr_14674[(0)] = state_machine__5897__auto__);

(statearr_14674[(1)] = (1));

return statearr_14674;
});
var state_machine__5897__auto____1 = (function (state_14657){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14675){if((e14675 instanceof Object)){
var ex__5900__auto__ = e14675;
var statearr_14676_14689 = state_14657;
(statearr_14676_14689[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14690 = state_14657;
state_14657 = G__14690;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14657){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___14678,out))
})();
var state__5913__auto__ = (function (){var statearr_14677 = f__5912__auto__.call(null);
(statearr_14677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___14678);

return statearr_14677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___14678,out))
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
return (function (state_14856){
var state_val_14857 = (state_14856[(1)]);
if((state_val_14857 === (7))){
var inst_14852 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14858_14899 = state_14856__$1;
(statearr_14858_14899[(2)] = inst_14852);

(statearr_14858_14899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (20))){
var inst_14822 = (state_14856[(7)]);
var inst_14833 = (state_14856[(2)]);
var inst_14834 = cljs.core.next.call(null,inst_14822);
var inst_14808 = inst_14834;
var inst_14809 = null;
var inst_14810 = (0);
var inst_14811 = (0);
var state_14856__$1 = (function (){var statearr_14859 = state_14856;
(statearr_14859[(8)] = inst_14809);

(statearr_14859[(9)] = inst_14808);

(statearr_14859[(10)] = inst_14810);

(statearr_14859[(11)] = inst_14811);

(statearr_14859[(12)] = inst_14833);

return statearr_14859;
})();
var statearr_14860_14900 = state_14856__$1;
(statearr_14860_14900[(2)] = null);

(statearr_14860_14900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (1))){
var state_14856__$1 = state_14856;
var statearr_14861_14901 = state_14856__$1;
(statearr_14861_14901[(2)] = null);

(statearr_14861_14901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (4))){
var inst_14797 = (state_14856[(13)]);
var inst_14797__$1 = (state_14856[(2)]);
var inst_14798 = (inst_14797__$1 == null);
var state_14856__$1 = (function (){var statearr_14862 = state_14856;
(statearr_14862[(13)] = inst_14797__$1);

return statearr_14862;
})();
if(cljs.core.truth_(inst_14798)){
var statearr_14863_14902 = state_14856__$1;
(statearr_14863_14902[(1)] = (5));

} else {
var statearr_14864_14903 = state_14856__$1;
(statearr_14864_14903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (15))){
var state_14856__$1 = state_14856;
var statearr_14868_14904 = state_14856__$1;
(statearr_14868_14904[(2)] = null);

(statearr_14868_14904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (21))){
var state_14856__$1 = state_14856;
var statearr_14869_14905 = state_14856__$1;
(statearr_14869_14905[(2)] = null);

(statearr_14869_14905[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (13))){
var inst_14809 = (state_14856[(8)]);
var inst_14808 = (state_14856[(9)]);
var inst_14810 = (state_14856[(10)]);
var inst_14811 = (state_14856[(11)]);
var inst_14818 = (state_14856[(2)]);
var inst_14819 = (inst_14811 + (1));
var tmp14865 = inst_14809;
var tmp14866 = inst_14808;
var tmp14867 = inst_14810;
var inst_14808__$1 = tmp14866;
var inst_14809__$1 = tmp14865;
var inst_14810__$1 = tmp14867;
var inst_14811__$1 = inst_14819;
var state_14856__$1 = (function (){var statearr_14870 = state_14856;
(statearr_14870[(8)] = inst_14809__$1);

(statearr_14870[(9)] = inst_14808__$1);

(statearr_14870[(10)] = inst_14810__$1);

(statearr_14870[(11)] = inst_14811__$1);

(statearr_14870[(14)] = inst_14818);

return statearr_14870;
})();
var statearr_14871_14906 = state_14856__$1;
(statearr_14871_14906[(2)] = null);

(statearr_14871_14906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (22))){
var state_14856__$1 = state_14856;
var statearr_14872_14907 = state_14856__$1;
(statearr_14872_14907[(2)] = null);

(statearr_14872_14907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (6))){
var inst_14797 = (state_14856[(13)]);
var inst_14806 = f.call(null,inst_14797);
var inst_14807 = cljs.core.seq.call(null,inst_14806);
var inst_14808 = inst_14807;
var inst_14809 = null;
var inst_14810 = (0);
var inst_14811 = (0);
var state_14856__$1 = (function (){var statearr_14873 = state_14856;
(statearr_14873[(8)] = inst_14809);

(statearr_14873[(9)] = inst_14808);

(statearr_14873[(10)] = inst_14810);

(statearr_14873[(11)] = inst_14811);

return statearr_14873;
})();
var statearr_14874_14908 = state_14856__$1;
(statearr_14874_14908[(2)] = null);

(statearr_14874_14908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (17))){
var inst_14822 = (state_14856[(7)]);
var inst_14826 = cljs.core.chunk_first.call(null,inst_14822);
var inst_14827 = cljs.core.chunk_rest.call(null,inst_14822);
var inst_14828 = cljs.core.count.call(null,inst_14826);
var inst_14808 = inst_14827;
var inst_14809 = inst_14826;
var inst_14810 = inst_14828;
var inst_14811 = (0);
var state_14856__$1 = (function (){var statearr_14875 = state_14856;
(statearr_14875[(8)] = inst_14809);

(statearr_14875[(9)] = inst_14808);

(statearr_14875[(10)] = inst_14810);

(statearr_14875[(11)] = inst_14811);

return statearr_14875;
})();
var statearr_14876_14909 = state_14856__$1;
(statearr_14876_14909[(2)] = null);

(statearr_14876_14909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (3))){
var inst_14854 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14856__$1,inst_14854);
} else {
if((state_val_14857 === (12))){
var inst_14842 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14877_14910 = state_14856__$1;
(statearr_14877_14910[(2)] = inst_14842);

(statearr_14877_14910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (2))){
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14856__$1,(4),in$);
} else {
if((state_val_14857 === (23))){
var inst_14850 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14878_14911 = state_14856__$1;
(statearr_14878_14911[(2)] = inst_14850);

(statearr_14878_14911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (19))){
var inst_14837 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14879_14912 = state_14856__$1;
(statearr_14879_14912[(2)] = inst_14837);

(statearr_14879_14912[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (11))){
var inst_14808 = (state_14856[(9)]);
var inst_14822 = (state_14856[(7)]);
var inst_14822__$1 = cljs.core.seq.call(null,inst_14808);
var state_14856__$1 = (function (){var statearr_14880 = state_14856;
(statearr_14880[(7)] = inst_14822__$1);

return statearr_14880;
})();
if(inst_14822__$1){
var statearr_14881_14913 = state_14856__$1;
(statearr_14881_14913[(1)] = (14));

} else {
var statearr_14882_14914 = state_14856__$1;
(statearr_14882_14914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (9))){
var inst_14844 = (state_14856[(2)]);
var inst_14845 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14856__$1 = (function (){var statearr_14883 = state_14856;
(statearr_14883[(15)] = inst_14844);

return statearr_14883;
})();
if(cljs.core.truth_(inst_14845)){
var statearr_14884_14915 = state_14856__$1;
(statearr_14884_14915[(1)] = (21));

} else {
var statearr_14885_14916 = state_14856__$1;
(statearr_14885_14916[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (5))){
var inst_14800 = cljs.core.async.close_BANG_.call(null,out);
var state_14856__$1 = state_14856;
var statearr_14886_14917 = state_14856__$1;
(statearr_14886_14917[(2)] = inst_14800);

(statearr_14886_14917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (14))){
var inst_14822 = (state_14856[(7)]);
var inst_14824 = cljs.core.chunked_seq_QMARK_.call(null,inst_14822);
var state_14856__$1 = state_14856;
if(inst_14824){
var statearr_14887_14918 = state_14856__$1;
(statearr_14887_14918[(1)] = (17));

} else {
var statearr_14888_14919 = state_14856__$1;
(statearr_14888_14919[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (16))){
var inst_14840 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14889_14920 = state_14856__$1;
(statearr_14889_14920[(2)] = inst_14840);

(statearr_14889_14920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (10))){
var inst_14809 = (state_14856[(8)]);
var inst_14811 = (state_14856[(11)]);
var inst_14816 = cljs.core._nth.call(null,inst_14809,inst_14811);
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14856__$1,(13),out,inst_14816);
} else {
if((state_val_14857 === (18))){
var inst_14822 = (state_14856[(7)]);
var inst_14831 = cljs.core.first.call(null,inst_14822);
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14856__$1,(20),out,inst_14831);
} else {
if((state_val_14857 === (8))){
var inst_14810 = (state_14856[(10)]);
var inst_14811 = (state_14856[(11)]);
var inst_14813 = (inst_14811 < inst_14810);
var inst_14814 = inst_14813;
var state_14856__$1 = state_14856;
if(cljs.core.truth_(inst_14814)){
var statearr_14890_14921 = state_14856__$1;
(statearr_14890_14921[(1)] = (10));

} else {
var statearr_14891_14922 = state_14856__$1;
(statearr_14891_14922[(1)] = (11));

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
var statearr_14895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14895[(0)] = state_machine__5897__auto__);

(statearr_14895[(1)] = (1));

return statearr_14895;
});
var state_machine__5897__auto____1 = (function (state_14856){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e14896){if((e14896 instanceof Object)){
var ex__5900__auto__ = e14896;
var statearr_14897_14923 = state_14856;
(statearr_14897_14923[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14924 = state_14856;
state_14856 = G__14924;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14856){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto__))
})();
var state__5913__auto__ = (function (){var statearr_14898 = f__5912__auto__.call(null);
(statearr_14898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto__);

return statearr_14898;
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
var c__5911__auto___15021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___15021,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___15021,out){
return (function (state_14996){
var state_val_14997 = (state_14996[(1)]);
if((state_val_14997 === (7))){
var inst_14991 = (state_14996[(2)]);
var state_14996__$1 = state_14996;
var statearr_14998_15022 = state_14996__$1;
(statearr_14998_15022[(2)] = inst_14991);

(statearr_14998_15022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (1))){
var inst_14973 = null;
var state_14996__$1 = (function (){var statearr_14999 = state_14996;
(statearr_14999[(7)] = inst_14973);

return statearr_14999;
})();
var statearr_15000_15023 = state_14996__$1;
(statearr_15000_15023[(2)] = null);

(statearr_15000_15023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (4))){
var inst_14976 = (state_14996[(8)]);
var inst_14976__$1 = (state_14996[(2)]);
var inst_14977 = (inst_14976__$1 == null);
var inst_14978 = cljs.core.not.call(null,inst_14977);
var state_14996__$1 = (function (){var statearr_15001 = state_14996;
(statearr_15001[(8)] = inst_14976__$1);

return statearr_15001;
})();
if(inst_14978){
var statearr_15002_15024 = state_14996__$1;
(statearr_15002_15024[(1)] = (5));

} else {
var statearr_15003_15025 = state_14996__$1;
(statearr_15003_15025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (6))){
var state_14996__$1 = state_14996;
var statearr_15004_15026 = state_14996__$1;
(statearr_15004_15026[(2)] = null);

(statearr_15004_15026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (3))){
var inst_14993 = (state_14996[(2)]);
var inst_14994 = cljs.core.async.close_BANG_.call(null,out);
var state_14996__$1 = (function (){var statearr_15005 = state_14996;
(statearr_15005[(9)] = inst_14993);

return statearr_15005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14996__$1,inst_14994);
} else {
if((state_val_14997 === (2))){
var state_14996__$1 = state_14996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14996__$1,(4),ch);
} else {
if((state_val_14997 === (11))){
var inst_14976 = (state_14996[(8)]);
var inst_14985 = (state_14996[(2)]);
var inst_14973 = inst_14976;
var state_14996__$1 = (function (){var statearr_15006 = state_14996;
(statearr_15006[(7)] = inst_14973);

(statearr_15006[(10)] = inst_14985);

return statearr_15006;
})();
var statearr_15007_15027 = state_14996__$1;
(statearr_15007_15027[(2)] = null);

(statearr_15007_15027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (9))){
var inst_14976 = (state_14996[(8)]);
var state_14996__$1 = state_14996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14996__$1,(11),out,inst_14976);
} else {
if((state_val_14997 === (5))){
var inst_14973 = (state_14996[(7)]);
var inst_14976 = (state_14996[(8)]);
var inst_14980 = cljs.core._EQ_.call(null,inst_14976,inst_14973);
var state_14996__$1 = state_14996;
if(inst_14980){
var statearr_15009_15028 = state_14996__$1;
(statearr_15009_15028[(1)] = (8));

} else {
var statearr_15010_15029 = state_14996__$1;
(statearr_15010_15029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (10))){
var inst_14988 = (state_14996[(2)]);
var state_14996__$1 = state_14996;
var statearr_15011_15030 = state_14996__$1;
(statearr_15011_15030[(2)] = inst_14988);

(statearr_15011_15030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (8))){
var inst_14973 = (state_14996[(7)]);
var tmp15008 = inst_14973;
var inst_14973__$1 = tmp15008;
var state_14996__$1 = (function (){var statearr_15012 = state_14996;
(statearr_15012[(7)] = inst_14973__$1);

return statearr_15012;
})();
var statearr_15013_15031 = state_14996__$1;
(statearr_15013_15031[(2)] = null);

(statearr_15013_15031[(1)] = (2));


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
});})(c__5911__auto___15021,out))
;
return ((function (switch__5896__auto__,c__5911__auto___15021,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_15017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15017[(0)] = state_machine__5897__auto__);

(statearr_15017[(1)] = (1));

return statearr_15017;
});
var state_machine__5897__auto____1 = (function (state_14996){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_14996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e15018){if((e15018 instanceof Object)){
var ex__5900__auto__ = e15018;
var statearr_15019_15032 = state_14996;
(statearr_15019_15032[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15033 = state_14996;
state_14996 = G__15033;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_14996){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_14996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___15021,out))
})();
var state__5913__auto__ = (function (){var statearr_15020 = f__5912__auto__.call(null);
(statearr_15020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___15021);

return statearr_15020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___15021,out))
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
var c__5911__auto___15168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___15168,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___15168,out){
return (function (state_15138){
var state_val_15139 = (state_15138[(1)]);
if((state_val_15139 === (7))){
var inst_15134 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
var statearr_15140_15169 = state_15138__$1;
(statearr_15140_15169[(2)] = inst_15134);

(statearr_15140_15169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (1))){
var inst_15101 = (new Array(n));
var inst_15102 = inst_15101;
var inst_15103 = (0);
var state_15138__$1 = (function (){var statearr_15141 = state_15138;
(statearr_15141[(7)] = inst_15102);

(statearr_15141[(8)] = inst_15103);

return statearr_15141;
})();
var statearr_15142_15170 = state_15138__$1;
(statearr_15142_15170[(2)] = null);

(statearr_15142_15170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (4))){
var inst_15106 = (state_15138[(9)]);
var inst_15106__$1 = (state_15138[(2)]);
var inst_15107 = (inst_15106__$1 == null);
var inst_15108 = cljs.core.not.call(null,inst_15107);
var state_15138__$1 = (function (){var statearr_15143 = state_15138;
(statearr_15143[(9)] = inst_15106__$1);

return statearr_15143;
})();
if(inst_15108){
var statearr_15144_15171 = state_15138__$1;
(statearr_15144_15171[(1)] = (5));

} else {
var statearr_15145_15172 = state_15138__$1;
(statearr_15145_15172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (15))){
var inst_15128 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
var statearr_15146_15173 = state_15138__$1;
(statearr_15146_15173[(2)] = inst_15128);

(statearr_15146_15173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (13))){
var state_15138__$1 = state_15138;
var statearr_15147_15174 = state_15138__$1;
(statearr_15147_15174[(2)] = null);

(statearr_15147_15174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (6))){
var inst_15103 = (state_15138[(8)]);
var inst_15124 = (inst_15103 > (0));
var state_15138__$1 = state_15138;
if(cljs.core.truth_(inst_15124)){
var statearr_15148_15175 = state_15138__$1;
(statearr_15148_15175[(1)] = (12));

} else {
var statearr_15149_15176 = state_15138__$1;
(statearr_15149_15176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (3))){
var inst_15136 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15138__$1,inst_15136);
} else {
if((state_val_15139 === (12))){
var inst_15102 = (state_15138[(7)]);
var inst_15126 = cljs.core.vec.call(null,inst_15102);
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15138__$1,(15),out,inst_15126);
} else {
if((state_val_15139 === (2))){
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15138__$1,(4),ch);
} else {
if((state_val_15139 === (11))){
var inst_15118 = (state_15138[(2)]);
var inst_15119 = (new Array(n));
var inst_15102 = inst_15119;
var inst_15103 = (0);
var state_15138__$1 = (function (){var statearr_15150 = state_15138;
(statearr_15150[(7)] = inst_15102);

(statearr_15150[(8)] = inst_15103);

(statearr_15150[(10)] = inst_15118);

return statearr_15150;
})();
var statearr_15151_15177 = state_15138__$1;
(statearr_15151_15177[(2)] = null);

(statearr_15151_15177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (9))){
var inst_15102 = (state_15138[(7)]);
var inst_15116 = cljs.core.vec.call(null,inst_15102);
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15138__$1,(11),out,inst_15116);
} else {
if((state_val_15139 === (5))){
var inst_15102 = (state_15138[(7)]);
var inst_15103 = (state_15138[(8)]);
var inst_15106 = (state_15138[(9)]);
var inst_15111 = (state_15138[(11)]);
var inst_15110 = (inst_15102[inst_15103] = inst_15106);
var inst_15111__$1 = (inst_15103 + (1));
var inst_15112 = (inst_15111__$1 < n);
var state_15138__$1 = (function (){var statearr_15152 = state_15138;
(statearr_15152[(12)] = inst_15110);

(statearr_15152[(11)] = inst_15111__$1);

return statearr_15152;
})();
if(cljs.core.truth_(inst_15112)){
var statearr_15153_15178 = state_15138__$1;
(statearr_15153_15178[(1)] = (8));

} else {
var statearr_15154_15179 = state_15138__$1;
(statearr_15154_15179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (14))){
var inst_15131 = (state_15138[(2)]);
var inst_15132 = cljs.core.async.close_BANG_.call(null,out);
var state_15138__$1 = (function (){var statearr_15156 = state_15138;
(statearr_15156[(13)] = inst_15131);

return statearr_15156;
})();
var statearr_15157_15180 = state_15138__$1;
(statearr_15157_15180[(2)] = inst_15132);

(statearr_15157_15180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (10))){
var inst_15122 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
var statearr_15158_15181 = state_15138__$1;
(statearr_15158_15181[(2)] = inst_15122);

(statearr_15158_15181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (8))){
var inst_15102 = (state_15138[(7)]);
var inst_15111 = (state_15138[(11)]);
var tmp15155 = inst_15102;
var inst_15102__$1 = tmp15155;
var inst_15103 = inst_15111;
var state_15138__$1 = (function (){var statearr_15159 = state_15138;
(statearr_15159[(7)] = inst_15102__$1);

(statearr_15159[(8)] = inst_15103);

return statearr_15159;
})();
var statearr_15160_15182 = state_15138__$1;
(statearr_15160_15182[(2)] = null);

(statearr_15160_15182[(1)] = (2));


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
});})(c__5911__auto___15168,out))
;
return ((function (switch__5896__auto__,c__5911__auto___15168,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_15164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15164[(0)] = state_machine__5897__auto__);

(statearr_15164[(1)] = (1));

return statearr_15164;
});
var state_machine__5897__auto____1 = (function (state_15138){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_15138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e15165){if((e15165 instanceof Object)){
var ex__5900__auto__ = e15165;
var statearr_15166_15183 = state_15138;
(statearr_15166_15183[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15184 = state_15138;
state_15138 = G__15184;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_15138){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_15138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___15168,out))
})();
var state__5913__auto__ = (function (){var statearr_15167 = f__5912__auto__.call(null);
(statearr_15167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___15168);

return statearr_15167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___15168,out))
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
var c__5911__auto___15327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___15327,out){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___15327,out){
return (function (state_15297){
var state_val_15298 = (state_15297[(1)]);
if((state_val_15298 === (7))){
var inst_15293 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15299_15328 = state_15297__$1;
(statearr_15299_15328[(2)] = inst_15293);

(statearr_15299_15328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (1))){
var inst_15256 = [];
var inst_15257 = inst_15256;
var inst_15258 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15297__$1 = (function (){var statearr_15300 = state_15297;
(statearr_15300[(7)] = inst_15257);

(statearr_15300[(8)] = inst_15258);

return statearr_15300;
})();
var statearr_15301_15329 = state_15297__$1;
(statearr_15301_15329[(2)] = null);

(statearr_15301_15329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (4))){
var inst_15261 = (state_15297[(9)]);
var inst_15261__$1 = (state_15297[(2)]);
var inst_15262 = (inst_15261__$1 == null);
var inst_15263 = cljs.core.not.call(null,inst_15262);
var state_15297__$1 = (function (){var statearr_15302 = state_15297;
(statearr_15302[(9)] = inst_15261__$1);

return statearr_15302;
})();
if(inst_15263){
var statearr_15303_15330 = state_15297__$1;
(statearr_15303_15330[(1)] = (5));

} else {
var statearr_15304_15331 = state_15297__$1;
(statearr_15304_15331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (15))){
var inst_15287 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15305_15332 = state_15297__$1;
(statearr_15305_15332[(2)] = inst_15287);

(statearr_15305_15332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (13))){
var state_15297__$1 = state_15297;
var statearr_15306_15333 = state_15297__$1;
(statearr_15306_15333[(2)] = null);

(statearr_15306_15333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (6))){
var inst_15257 = (state_15297[(7)]);
var inst_15282 = inst_15257.length;
var inst_15283 = (inst_15282 > (0));
var state_15297__$1 = state_15297;
if(cljs.core.truth_(inst_15283)){
var statearr_15307_15334 = state_15297__$1;
(statearr_15307_15334[(1)] = (12));

} else {
var statearr_15308_15335 = state_15297__$1;
(statearr_15308_15335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (3))){
var inst_15295 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15297__$1,inst_15295);
} else {
if((state_val_15298 === (12))){
var inst_15257 = (state_15297[(7)]);
var inst_15285 = cljs.core.vec.call(null,inst_15257);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15297__$1,(15),out,inst_15285);
} else {
if((state_val_15298 === (2))){
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15297__$1,(4),ch);
} else {
if((state_val_15298 === (11))){
var inst_15265 = (state_15297[(10)]);
var inst_15261 = (state_15297[(9)]);
var inst_15275 = (state_15297[(2)]);
var inst_15276 = [];
var inst_15277 = inst_15276.push(inst_15261);
var inst_15257 = inst_15276;
var inst_15258 = inst_15265;
var state_15297__$1 = (function (){var statearr_15309 = state_15297;
(statearr_15309[(11)] = inst_15277);

(statearr_15309[(7)] = inst_15257);

(statearr_15309[(8)] = inst_15258);

(statearr_15309[(12)] = inst_15275);

return statearr_15309;
})();
var statearr_15310_15336 = state_15297__$1;
(statearr_15310_15336[(2)] = null);

(statearr_15310_15336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (9))){
var inst_15257 = (state_15297[(7)]);
var inst_15273 = cljs.core.vec.call(null,inst_15257);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15297__$1,(11),out,inst_15273);
} else {
if((state_val_15298 === (5))){
var inst_15258 = (state_15297[(8)]);
var inst_15265 = (state_15297[(10)]);
var inst_15261 = (state_15297[(9)]);
var inst_15265__$1 = f.call(null,inst_15261);
var inst_15266 = cljs.core._EQ_.call(null,inst_15265__$1,inst_15258);
var inst_15267 = cljs.core.keyword_identical_QMARK_.call(null,inst_15258,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15268 = (inst_15266) || (inst_15267);
var state_15297__$1 = (function (){var statearr_15311 = state_15297;
(statearr_15311[(10)] = inst_15265__$1);

return statearr_15311;
})();
if(cljs.core.truth_(inst_15268)){
var statearr_15312_15337 = state_15297__$1;
(statearr_15312_15337[(1)] = (8));

} else {
var statearr_15313_15338 = state_15297__$1;
(statearr_15313_15338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (14))){
var inst_15290 = (state_15297[(2)]);
var inst_15291 = cljs.core.async.close_BANG_.call(null,out);
var state_15297__$1 = (function (){var statearr_15315 = state_15297;
(statearr_15315[(13)] = inst_15290);

return statearr_15315;
})();
var statearr_15316_15339 = state_15297__$1;
(statearr_15316_15339[(2)] = inst_15291);

(statearr_15316_15339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (10))){
var inst_15280 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15317_15340 = state_15297__$1;
(statearr_15317_15340[(2)] = inst_15280);

(statearr_15317_15340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (8))){
var inst_15257 = (state_15297[(7)]);
var inst_15265 = (state_15297[(10)]);
var inst_15261 = (state_15297[(9)]);
var inst_15270 = inst_15257.push(inst_15261);
var tmp15314 = inst_15257;
var inst_15257__$1 = tmp15314;
var inst_15258 = inst_15265;
var state_15297__$1 = (function (){var statearr_15318 = state_15297;
(statearr_15318[(7)] = inst_15257__$1);

(statearr_15318[(8)] = inst_15258);

(statearr_15318[(14)] = inst_15270);

return statearr_15318;
})();
var statearr_15319_15341 = state_15297__$1;
(statearr_15319_15341[(2)] = null);

(statearr_15319_15341[(1)] = (2));


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
});})(c__5911__auto___15327,out))
;
return ((function (switch__5896__auto__,c__5911__auto___15327,out){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_15323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15323[(0)] = state_machine__5897__auto__);

(statearr_15323[(1)] = (1));

return statearr_15323;
});
var state_machine__5897__auto____1 = (function (state_15297){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_15297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e15324){if((e15324 instanceof Object)){
var ex__5900__auto__ = e15324;
var statearr_15325_15342 = state_15297;
(statearr_15325_15342[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15343 = state_15297;
state_15297 = G__15343;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___15327,out))
})();
var state__5913__auto__ = (function (){var statearr_15326 = f__5912__auto__.call(null);
(statearr_15326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___15327);

return statearr_15326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___15327,out))
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