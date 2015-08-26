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
if(typeof cljs.core.async.t11914 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11914 = (function (f,fn_handler,meta11915){
this.f = f;
this.fn_handler = fn_handler;
this.meta11915 = meta11915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11914.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11916){
var self__ = this;
var _11916__$1 = this;
return self__.meta11915;
});

cljs.core.async.t11914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11916,meta11915__$1){
var self__ = this;
var _11916__$1 = this;
return (new cljs.core.async.t11914(self__.f,self__.fn_handler,meta11915__$1));
});

cljs.core.async.t11914.cljs$lang$type = true;

cljs.core.async.t11914.cljs$lang$ctorStr = "cljs.core.async/t11914";

cljs.core.async.t11914.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t11914");
});

cljs.core.async.__GT_t11914 = (function __GT_t11914(f__$1,fn_handler__$1,meta11915){
return (new cljs.core.async.t11914(f__$1,fn_handler__$1,meta11915));
});

}

return (new cljs.core.async.t11914(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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
var G__11918 = buff;
if(G__11918){
var bit__4303__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4303__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__11918.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11918.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11918);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11918);
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
var val_11919 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11919);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11919,ret){
return (function (){
return fn1.call(null,val_11919);
});})(val_11919,ret))
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
var n__4509__auto___11920 = n;
var x_11921 = (0);
while(true){
if((x_11921 < n__4509__auto___11920)){
(a[x_11921] = (0));

var G__11922 = (x_11921 + (1));
x_11921 = G__11922;
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

var G__11923 = (i + (1));
i = G__11923;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11927 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11927 = (function (flag,alt_flag,meta11928){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11928 = meta11928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11927.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11929){
var self__ = this;
var _11929__$1 = this;
return self__.meta11928;
});})(flag))
;

cljs.core.async.t11927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11929,meta11928__$1){
var self__ = this;
var _11929__$1 = this;
return (new cljs.core.async.t11927(self__.flag,self__.alt_flag,meta11928__$1));
});})(flag))
;

cljs.core.async.t11927.cljs$lang$type = true;

cljs.core.async.t11927.cljs$lang$ctorStr = "cljs.core.async/t11927";

cljs.core.async.t11927.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t11927");
});})(flag))
;

cljs.core.async.__GT_t11927 = ((function (flag){
return (function __GT_t11927(flag__$1,alt_flag__$1,meta11928){
return (new cljs.core.async.t11927(flag__$1,alt_flag__$1,meta11928));
});})(flag))
;

}

return (new cljs.core.async.t11927(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t11933 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11933 = (function (cb,flag,alt_handler,meta11934){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11934 = meta11934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11933.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11935){
var self__ = this;
var _11935__$1 = this;
return self__.meta11934;
});

cljs.core.async.t11933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11935,meta11934__$1){
var self__ = this;
var _11935__$1 = this;
return (new cljs.core.async.t11933(self__.cb,self__.flag,self__.alt_handler,meta11934__$1));
});

cljs.core.async.t11933.cljs$lang$type = true;

cljs.core.async.t11933.cljs$lang$ctorStr = "cljs.core.async/t11933";

cljs.core.async.t11933.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t11933");
});

cljs.core.async.__GT_t11933 = (function __GT_t11933(cb__$1,flag__$1,alt_handler__$1,meta11934){
return (new cljs.core.async.t11933(cb__$1,flag__$1,alt_handler__$1,meta11934));
});

}

return (new cljs.core.async.t11933(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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
return (function (p1__11936_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11936_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11937_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11937_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3622__auto__ = wport;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11938 = (i + (1));
i = G__11938;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3622__auto__ = ret;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3610__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3610__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3610__auto__;
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
var alts_BANG___delegate = function (ports,p__11939){
var map__11941 = p__11939;
var map__11941__$1 = ((cljs.core.seq_QMARK_.call(null,map__11941))?cljs.core.apply.call(null,cljs.core.hash_map,map__11941):map__11941);
var opts = map__11941__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11939 = null;
if (arguments.length > 1) {
  p__11939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__11939);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11942){
var ports = cljs.core.first(arglist__11942);
var p__11939 = cljs.core.rest(arglist__11942);
return alts_BANG___delegate(ports,p__11939);
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
var c__6390__auto___12037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___12037){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___12037){
return (function (state_12013){
var state_val_12014 = (state_12013[(1)]);
if((state_val_12014 === (7))){
var inst_12009 = (state_12013[(2)]);
var state_12013__$1 = state_12013;
var statearr_12015_12038 = state_12013__$1;
(statearr_12015_12038[(2)] = inst_12009);

(statearr_12015_12038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (1))){
var state_12013__$1 = state_12013;
var statearr_12016_12039 = state_12013__$1;
(statearr_12016_12039[(2)] = null);

(statearr_12016_12039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (4))){
var inst_11992 = (state_12013[(7)]);
var inst_11992__$1 = (state_12013[(2)]);
var inst_11993 = (inst_11992__$1 == null);
var state_12013__$1 = (function (){var statearr_12017 = state_12013;
(statearr_12017[(7)] = inst_11992__$1);

return statearr_12017;
})();
if(cljs.core.truth_(inst_11993)){
var statearr_12018_12040 = state_12013__$1;
(statearr_12018_12040[(1)] = (5));

} else {
var statearr_12019_12041 = state_12013__$1;
(statearr_12019_12041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (13))){
var state_12013__$1 = state_12013;
var statearr_12020_12042 = state_12013__$1;
(statearr_12020_12042[(2)] = null);

(statearr_12020_12042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (6))){
var inst_11992 = (state_12013[(7)]);
var state_12013__$1 = state_12013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12013__$1,(11),to,inst_11992);
} else {
if((state_val_12014 === (3))){
var inst_12011 = (state_12013[(2)]);
var state_12013__$1 = state_12013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12013__$1,inst_12011);
} else {
if((state_val_12014 === (12))){
var state_12013__$1 = state_12013;
var statearr_12021_12043 = state_12013__$1;
(statearr_12021_12043[(2)] = null);

(statearr_12021_12043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (2))){
var state_12013__$1 = state_12013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12013__$1,(4),from);
} else {
if((state_val_12014 === (11))){
var inst_12002 = (state_12013[(2)]);
var state_12013__$1 = state_12013;
if(cljs.core.truth_(inst_12002)){
var statearr_12022_12044 = state_12013__$1;
(statearr_12022_12044[(1)] = (12));

} else {
var statearr_12023_12045 = state_12013__$1;
(statearr_12023_12045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (9))){
var state_12013__$1 = state_12013;
var statearr_12024_12046 = state_12013__$1;
(statearr_12024_12046[(2)] = null);

(statearr_12024_12046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (5))){
var state_12013__$1 = state_12013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12025_12047 = state_12013__$1;
(statearr_12025_12047[(1)] = (8));

} else {
var statearr_12026_12048 = state_12013__$1;
(statearr_12026_12048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (14))){
var inst_12007 = (state_12013[(2)]);
var state_12013__$1 = state_12013;
var statearr_12027_12049 = state_12013__$1;
(statearr_12027_12049[(2)] = inst_12007);

(statearr_12027_12049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (10))){
var inst_11999 = (state_12013[(2)]);
var state_12013__$1 = state_12013;
var statearr_12028_12050 = state_12013__$1;
(statearr_12028_12050[(2)] = inst_11999);

(statearr_12028_12050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12014 === (8))){
var inst_11996 = cljs.core.async.close_BANG_.call(null,to);
var state_12013__$1 = state_12013;
var statearr_12029_12051 = state_12013__$1;
(statearr_12029_12051[(2)] = inst_11996);

(statearr_12029_12051[(1)] = (10));


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
});})(c__6390__auto___12037))
;
return ((function (switch__6334__auto__,c__6390__auto___12037){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12033 = [null,null,null,null,null,null,null,null];
(statearr_12033[(0)] = state_machine__6335__auto__);

(statearr_12033[(1)] = (1));

return statearr_12033;
});
var state_machine__6335__auto____1 = (function (state_12013){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12034){if((e12034 instanceof Object)){
var ex__6338__auto__ = e12034;
var statearr_12035_12052 = state_12013;
(statearr_12035_12052[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12053 = state_12013;
state_12013 = G__12053;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12013){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___12037))
})();
var state__6392__auto__ = (function (){var statearr_12036 = f__6391__auto__.call(null);
(statearr_12036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___12037);

return statearr_12036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___12037))
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
return (function (p__12237){
var vec__12238 = p__12237;
var v = cljs.core.nth.call(null,vec__12238,(0),null);
var p = cljs.core.nth.call(null,vec__12238,(1),null);
var job = vec__12238;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6390__auto___12420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___12420,res,vec__12238,v,p,job,jobs,results){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___12420,res,vec__12238,v,p,job,jobs,results){
return (function (state_12243){
var state_val_12244 = (state_12243[(1)]);
if((state_val_12244 === (2))){
var inst_12240 = (state_12243[(2)]);
var inst_12241 = cljs.core.async.close_BANG_.call(null,res);
var state_12243__$1 = (function (){var statearr_12245 = state_12243;
(statearr_12245[(7)] = inst_12240);

return statearr_12245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12243__$1,inst_12241);
} else {
if((state_val_12244 === (1))){
var state_12243__$1 = state_12243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12243__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6390__auto___12420,res,vec__12238,v,p,job,jobs,results))
;
return ((function (switch__6334__auto__,c__6390__auto___12420,res,vec__12238,v,p,job,jobs,results){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12249 = [null,null,null,null,null,null,null,null];
(statearr_12249[(0)] = state_machine__6335__auto__);

(statearr_12249[(1)] = (1));

return statearr_12249;
});
var state_machine__6335__auto____1 = (function (state_12243){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12250){if((e12250 instanceof Object)){
var ex__6338__auto__ = e12250;
var statearr_12251_12421 = state_12243;
(statearr_12251_12421[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12422 = state_12243;
state_12243 = G__12422;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12243){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___12420,res,vec__12238,v,p,job,jobs,results))
})();
var state__6392__auto__ = (function (){var statearr_12252 = f__6391__auto__.call(null);
(statearr_12252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___12420);

return statearr_12252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___12420,res,vec__12238,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12253){
var vec__12254 = p__12253;
var v = cljs.core.nth.call(null,vec__12254,(0),null);
var p = cljs.core.nth.call(null,vec__12254,(1),null);
var job = vec__12254;
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
var n__4509__auto___12423 = n;
var __12424 = (0);
while(true){
if((__12424 < n__4509__auto___12423)){
var G__12255_12425 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12255_12425) {
case "async":
var c__6390__auto___12427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12424,c__6390__auto___12427,G__12255_12425,n__4509__auto___12423,jobs,results,process,async){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (__12424,c__6390__auto___12427,G__12255_12425,n__4509__auto___12423,jobs,results,process,async){
return (function (state_12268){
var state_val_12269 = (state_12268[(1)]);
if((state_val_12269 === (7))){
var inst_12264 = (state_12268[(2)]);
var state_12268__$1 = state_12268;
var statearr_12270_12428 = state_12268__$1;
(statearr_12270_12428[(2)] = inst_12264);

(statearr_12270_12428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (6))){
var state_12268__$1 = state_12268;
var statearr_12271_12429 = state_12268__$1;
(statearr_12271_12429[(2)] = null);

(statearr_12271_12429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (5))){
var state_12268__$1 = state_12268;
var statearr_12272_12430 = state_12268__$1;
(statearr_12272_12430[(2)] = null);

(statearr_12272_12430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (4))){
var inst_12258 = (state_12268[(2)]);
var inst_12259 = async.call(null,inst_12258);
var state_12268__$1 = state_12268;
if(cljs.core.truth_(inst_12259)){
var statearr_12273_12431 = state_12268__$1;
(statearr_12273_12431[(1)] = (5));

} else {
var statearr_12274_12432 = state_12268__$1;
(statearr_12274_12432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12269 === (3))){
var inst_12266 = (state_12268[(2)]);
var state_12268__$1 = state_12268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12268__$1,inst_12266);
} else {
if((state_val_12269 === (2))){
var state_12268__$1 = state_12268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12268__$1,(4),jobs);
} else {
if((state_val_12269 === (1))){
var state_12268__$1 = state_12268;
var statearr_12275_12433 = state_12268__$1;
(statearr_12275_12433[(2)] = null);

(statearr_12275_12433[(1)] = (2));


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
});})(__12424,c__6390__auto___12427,G__12255_12425,n__4509__auto___12423,jobs,results,process,async))
;
return ((function (__12424,switch__6334__auto__,c__6390__auto___12427,G__12255_12425,n__4509__auto___12423,jobs,results,process,async){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12279 = [null,null,null,null,null,null,null];
(statearr_12279[(0)] = state_machine__6335__auto__);

(statearr_12279[(1)] = (1));

return statearr_12279;
});
var state_machine__6335__auto____1 = (function (state_12268){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12280){if((e12280 instanceof Object)){
var ex__6338__auto__ = e12280;
var statearr_12281_12434 = state_12268;
(statearr_12281_12434[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12435 = state_12268;
state_12268 = G__12435;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12268){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(__12424,switch__6334__auto__,c__6390__auto___12427,G__12255_12425,n__4509__auto___12423,jobs,results,process,async))
})();
var state__6392__auto__ = (function (){var statearr_12282 = f__6391__auto__.call(null);
(statearr_12282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___12427);

return statearr_12282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(__12424,c__6390__auto___12427,G__12255_12425,n__4509__auto___12423,jobs,results,process,async))
);


break;
case "compute":
var c__6390__auto___12436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12424,c__6390__auto___12436,G__12255_12425,n__4509__auto___12423,jobs,results,process,async){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (__12424,c__6390__auto___12436,G__12255_12425,n__4509__auto___12423,jobs,results,process,async){
return (function (state_12295){
var state_val_12296 = (state_12295[(1)]);
if((state_val_12296 === (7))){
var inst_12291 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12297_12437 = state_12295__$1;
(statearr_12297_12437[(2)] = inst_12291);

(statearr_12297_12437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (6))){
var state_12295__$1 = state_12295;
var statearr_12298_12438 = state_12295__$1;
(statearr_12298_12438[(2)] = null);

(statearr_12298_12438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (5))){
var state_12295__$1 = state_12295;
var statearr_12299_12439 = state_12295__$1;
(statearr_12299_12439[(2)] = null);

(statearr_12299_12439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (4))){
var inst_12285 = (state_12295[(2)]);
var inst_12286 = process.call(null,inst_12285);
var state_12295__$1 = state_12295;
if(cljs.core.truth_(inst_12286)){
var statearr_12300_12440 = state_12295__$1;
(statearr_12300_12440[(1)] = (5));

} else {
var statearr_12301_12441 = state_12295__$1;
(statearr_12301_12441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (3))){
var inst_12293 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12295__$1,inst_12293);
} else {
if((state_val_12296 === (2))){
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12295__$1,(4),jobs);
} else {
if((state_val_12296 === (1))){
var state_12295__$1 = state_12295;
var statearr_12302_12442 = state_12295__$1;
(statearr_12302_12442[(2)] = null);

(statearr_12302_12442[(1)] = (2));


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
});})(__12424,c__6390__auto___12436,G__12255_12425,n__4509__auto___12423,jobs,results,process,async))
;
return ((function (__12424,switch__6334__auto__,c__6390__auto___12436,G__12255_12425,n__4509__auto___12423,jobs,results,process,async){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12306 = [null,null,null,null,null,null,null];
(statearr_12306[(0)] = state_machine__6335__auto__);

(statearr_12306[(1)] = (1));

return statearr_12306;
});
var state_machine__6335__auto____1 = (function (state_12295){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12307){if((e12307 instanceof Object)){
var ex__6338__auto__ = e12307;
var statearr_12308_12443 = state_12295;
(statearr_12308_12443[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12444 = state_12295;
state_12295 = G__12444;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12295){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(__12424,switch__6334__auto__,c__6390__auto___12436,G__12255_12425,n__4509__auto___12423,jobs,results,process,async))
})();
var state__6392__auto__ = (function (){var statearr_12309 = f__6391__auto__.call(null);
(statearr_12309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___12436);

return statearr_12309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(__12424,c__6390__auto___12436,G__12255_12425,n__4509__auto___12423,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12445 = (__12424 + (1));
__12424 = G__12445;
continue;
} else {
}
break;
}

var c__6390__auto___12446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___12446,jobs,results,process,async){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___12446,jobs,results,process,async){
return (function (state_12331){
var state_val_12332 = (state_12331[(1)]);
if((state_val_12332 === (9))){
var inst_12324 = (state_12331[(2)]);
var state_12331__$1 = (function (){var statearr_12333 = state_12331;
(statearr_12333[(7)] = inst_12324);

return statearr_12333;
})();
var statearr_12334_12447 = state_12331__$1;
(statearr_12334_12447[(2)] = null);

(statearr_12334_12447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (8))){
var inst_12317 = (state_12331[(8)]);
var inst_12322 = (state_12331[(2)]);
var state_12331__$1 = (function (){var statearr_12335 = state_12331;
(statearr_12335[(9)] = inst_12322);

return statearr_12335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12331__$1,(9),results,inst_12317);
} else {
if((state_val_12332 === (7))){
var inst_12327 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var statearr_12336_12448 = state_12331__$1;
(statearr_12336_12448[(2)] = inst_12327);

(statearr_12336_12448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (6))){
var inst_12312 = (state_12331[(10)]);
var inst_12317 = (state_12331[(8)]);
var inst_12317__$1 = cljs.core.async.chan.call(null,(1));
var inst_12318 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12319 = [inst_12312,inst_12317__$1];
var inst_12320 = (new cljs.core.PersistentVector(null,2,(5),inst_12318,inst_12319,null));
var state_12331__$1 = (function (){var statearr_12337 = state_12331;
(statearr_12337[(8)] = inst_12317__$1);

return statearr_12337;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12331__$1,(8),jobs,inst_12320);
} else {
if((state_val_12332 === (5))){
var inst_12315 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12331__$1 = state_12331;
var statearr_12338_12449 = state_12331__$1;
(statearr_12338_12449[(2)] = inst_12315);

(statearr_12338_12449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (4))){
var inst_12312 = (state_12331[(10)]);
var inst_12312__$1 = (state_12331[(2)]);
var inst_12313 = (inst_12312__$1 == null);
var state_12331__$1 = (function (){var statearr_12339 = state_12331;
(statearr_12339[(10)] = inst_12312__$1);

return statearr_12339;
})();
if(cljs.core.truth_(inst_12313)){
var statearr_12340_12450 = state_12331__$1;
(statearr_12340_12450[(1)] = (5));

} else {
var statearr_12341_12451 = state_12331__$1;
(statearr_12341_12451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (3))){
var inst_12329 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12331__$1,inst_12329);
} else {
if((state_val_12332 === (2))){
var state_12331__$1 = state_12331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12331__$1,(4),from);
} else {
if((state_val_12332 === (1))){
var state_12331__$1 = state_12331;
var statearr_12342_12452 = state_12331__$1;
(statearr_12342_12452[(2)] = null);

(statearr_12342_12452[(1)] = (2));


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
});})(c__6390__auto___12446,jobs,results,process,async))
;
return ((function (switch__6334__auto__,c__6390__auto___12446,jobs,results,process,async){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12346[(0)] = state_machine__6335__auto__);

(statearr_12346[(1)] = (1));

return statearr_12346;
});
var state_machine__6335__auto____1 = (function (state_12331){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12347){if((e12347 instanceof Object)){
var ex__6338__auto__ = e12347;
var statearr_12348_12453 = state_12331;
(statearr_12348_12453[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12454 = state_12331;
state_12331 = G__12454;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12331){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___12446,jobs,results,process,async))
})();
var state__6392__auto__ = (function (){var statearr_12349 = f__6391__auto__.call(null);
(statearr_12349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___12446);

return statearr_12349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___12446,jobs,results,process,async))
);


var c__6390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto__,jobs,results,process,async){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto__,jobs,results,process,async){
return (function (state_12387){
var state_val_12388 = (state_12387[(1)]);
if((state_val_12388 === (7))){
var inst_12383 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
var statearr_12389_12455 = state_12387__$1;
(statearr_12389_12455[(2)] = inst_12383);

(statearr_12389_12455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (20))){
var state_12387__$1 = state_12387;
var statearr_12390_12456 = state_12387__$1;
(statearr_12390_12456[(2)] = null);

(statearr_12390_12456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (1))){
var state_12387__$1 = state_12387;
var statearr_12391_12457 = state_12387__$1;
(statearr_12391_12457[(2)] = null);

(statearr_12391_12457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (4))){
var inst_12352 = (state_12387[(7)]);
var inst_12352__$1 = (state_12387[(2)]);
var inst_12353 = (inst_12352__$1 == null);
var state_12387__$1 = (function (){var statearr_12392 = state_12387;
(statearr_12392[(7)] = inst_12352__$1);

return statearr_12392;
})();
if(cljs.core.truth_(inst_12353)){
var statearr_12393_12458 = state_12387__$1;
(statearr_12393_12458[(1)] = (5));

} else {
var statearr_12394_12459 = state_12387__$1;
(statearr_12394_12459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (15))){
var inst_12365 = (state_12387[(8)]);
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12387__$1,(18),to,inst_12365);
} else {
if((state_val_12388 === (21))){
var inst_12378 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
var statearr_12395_12460 = state_12387__$1;
(statearr_12395_12460[(2)] = inst_12378);

(statearr_12395_12460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (13))){
var inst_12380 = (state_12387[(2)]);
var state_12387__$1 = (function (){var statearr_12396 = state_12387;
(statearr_12396[(9)] = inst_12380);

return statearr_12396;
})();
var statearr_12397_12461 = state_12387__$1;
(statearr_12397_12461[(2)] = null);

(statearr_12397_12461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (6))){
var inst_12352 = (state_12387[(7)]);
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12387__$1,(11),inst_12352);
} else {
if((state_val_12388 === (17))){
var inst_12373 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
if(cljs.core.truth_(inst_12373)){
var statearr_12398_12462 = state_12387__$1;
(statearr_12398_12462[(1)] = (19));

} else {
var statearr_12399_12463 = state_12387__$1;
(statearr_12399_12463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (3))){
var inst_12385 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12387__$1,inst_12385);
} else {
if((state_val_12388 === (12))){
var inst_12362 = (state_12387[(10)]);
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12387__$1,(14),inst_12362);
} else {
if((state_val_12388 === (2))){
var state_12387__$1 = state_12387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12387__$1,(4),results);
} else {
if((state_val_12388 === (19))){
var state_12387__$1 = state_12387;
var statearr_12400_12464 = state_12387__$1;
(statearr_12400_12464[(2)] = null);

(statearr_12400_12464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (11))){
var inst_12362 = (state_12387[(2)]);
var state_12387__$1 = (function (){var statearr_12401 = state_12387;
(statearr_12401[(10)] = inst_12362);

return statearr_12401;
})();
var statearr_12402_12465 = state_12387__$1;
(statearr_12402_12465[(2)] = null);

(statearr_12402_12465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (9))){
var state_12387__$1 = state_12387;
var statearr_12403_12466 = state_12387__$1;
(statearr_12403_12466[(2)] = null);

(statearr_12403_12466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (5))){
var state_12387__$1 = state_12387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12404_12467 = state_12387__$1;
(statearr_12404_12467[(1)] = (8));

} else {
var statearr_12405_12468 = state_12387__$1;
(statearr_12405_12468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (14))){
var inst_12367 = (state_12387[(11)]);
var inst_12365 = (state_12387[(8)]);
var inst_12365__$1 = (state_12387[(2)]);
var inst_12366 = (inst_12365__$1 == null);
var inst_12367__$1 = cljs.core.not.call(null,inst_12366);
var state_12387__$1 = (function (){var statearr_12406 = state_12387;
(statearr_12406[(11)] = inst_12367__$1);

(statearr_12406[(8)] = inst_12365__$1);

return statearr_12406;
})();
if(inst_12367__$1){
var statearr_12407_12469 = state_12387__$1;
(statearr_12407_12469[(1)] = (15));

} else {
var statearr_12408_12470 = state_12387__$1;
(statearr_12408_12470[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (16))){
var inst_12367 = (state_12387[(11)]);
var state_12387__$1 = state_12387;
var statearr_12409_12471 = state_12387__$1;
(statearr_12409_12471[(2)] = inst_12367);

(statearr_12409_12471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (10))){
var inst_12359 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
var statearr_12410_12472 = state_12387__$1;
(statearr_12410_12472[(2)] = inst_12359);

(statearr_12410_12472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (18))){
var inst_12370 = (state_12387[(2)]);
var state_12387__$1 = state_12387;
var statearr_12411_12473 = state_12387__$1;
(statearr_12411_12473[(2)] = inst_12370);

(statearr_12411_12473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12388 === (8))){
var inst_12356 = cljs.core.async.close_BANG_.call(null,to);
var state_12387__$1 = state_12387;
var statearr_12412_12474 = state_12387__$1;
(statearr_12412_12474[(2)] = inst_12356);

(statearr_12412_12474[(1)] = (10));


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
});})(c__6390__auto__,jobs,results,process,async))
;
return ((function (switch__6334__auto__,c__6390__auto__,jobs,results,process,async){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12416 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12416[(0)] = state_machine__6335__auto__);

(statearr_12416[(1)] = (1));

return statearr_12416;
});
var state_machine__6335__auto____1 = (function (state_12387){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12417){if((e12417 instanceof Object)){
var ex__6338__auto__ = e12417;
var statearr_12418_12475 = state_12387;
(statearr_12418_12475[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12476 = state_12387;
state_12387 = G__12476;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12387){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto__,jobs,results,process,async))
})();
var state__6392__auto__ = (function (){var statearr_12419 = f__6391__auto__.call(null);
(statearr_12419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto__);

return statearr_12419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto__,jobs,results,process,async))
);

return c__6390__auto__;
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
var c__6390__auto___12577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___12577,tc,fc){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___12577,tc,fc){
return (function (state_12552){
var state_val_12553 = (state_12552[(1)]);
if((state_val_12553 === (7))){
var inst_12548 = (state_12552[(2)]);
var state_12552__$1 = state_12552;
var statearr_12554_12578 = state_12552__$1;
(statearr_12554_12578[(2)] = inst_12548);

(statearr_12554_12578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (1))){
var state_12552__$1 = state_12552;
var statearr_12555_12579 = state_12552__$1;
(statearr_12555_12579[(2)] = null);

(statearr_12555_12579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (4))){
var inst_12529 = (state_12552[(7)]);
var inst_12529__$1 = (state_12552[(2)]);
var inst_12530 = (inst_12529__$1 == null);
var state_12552__$1 = (function (){var statearr_12556 = state_12552;
(statearr_12556[(7)] = inst_12529__$1);

return statearr_12556;
})();
if(cljs.core.truth_(inst_12530)){
var statearr_12557_12580 = state_12552__$1;
(statearr_12557_12580[(1)] = (5));

} else {
var statearr_12558_12581 = state_12552__$1;
(statearr_12558_12581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (13))){
var state_12552__$1 = state_12552;
var statearr_12559_12582 = state_12552__$1;
(statearr_12559_12582[(2)] = null);

(statearr_12559_12582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (6))){
var inst_12529 = (state_12552[(7)]);
var inst_12535 = p.call(null,inst_12529);
var state_12552__$1 = state_12552;
if(cljs.core.truth_(inst_12535)){
var statearr_12560_12583 = state_12552__$1;
(statearr_12560_12583[(1)] = (9));

} else {
var statearr_12561_12584 = state_12552__$1;
(statearr_12561_12584[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (3))){
var inst_12550 = (state_12552[(2)]);
var state_12552__$1 = state_12552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12552__$1,inst_12550);
} else {
if((state_val_12553 === (12))){
var state_12552__$1 = state_12552;
var statearr_12562_12585 = state_12552__$1;
(statearr_12562_12585[(2)] = null);

(statearr_12562_12585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (2))){
var state_12552__$1 = state_12552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12552__$1,(4),ch);
} else {
if((state_val_12553 === (11))){
var inst_12529 = (state_12552[(7)]);
var inst_12539 = (state_12552[(2)]);
var state_12552__$1 = state_12552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12552__$1,(8),inst_12539,inst_12529);
} else {
if((state_val_12553 === (9))){
var state_12552__$1 = state_12552;
var statearr_12563_12586 = state_12552__$1;
(statearr_12563_12586[(2)] = tc);

(statearr_12563_12586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (5))){
var inst_12532 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12533 = cljs.core.async.close_BANG_.call(null,fc);
var state_12552__$1 = (function (){var statearr_12564 = state_12552;
(statearr_12564[(8)] = inst_12532);

return statearr_12564;
})();
var statearr_12565_12587 = state_12552__$1;
(statearr_12565_12587[(2)] = inst_12533);

(statearr_12565_12587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (14))){
var inst_12546 = (state_12552[(2)]);
var state_12552__$1 = state_12552;
var statearr_12566_12588 = state_12552__$1;
(statearr_12566_12588[(2)] = inst_12546);

(statearr_12566_12588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (10))){
var state_12552__$1 = state_12552;
var statearr_12567_12589 = state_12552__$1;
(statearr_12567_12589[(2)] = fc);

(statearr_12567_12589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12553 === (8))){
var inst_12541 = (state_12552[(2)]);
var state_12552__$1 = state_12552;
if(cljs.core.truth_(inst_12541)){
var statearr_12568_12590 = state_12552__$1;
(statearr_12568_12590[(1)] = (12));

} else {
var statearr_12569_12591 = state_12552__$1;
(statearr_12569_12591[(1)] = (13));

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
});})(c__6390__auto___12577,tc,fc))
;
return ((function (switch__6334__auto__,c__6390__auto___12577,tc,fc){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12573 = [null,null,null,null,null,null,null,null,null];
(statearr_12573[(0)] = state_machine__6335__auto__);

(statearr_12573[(1)] = (1));

return statearr_12573;
});
var state_machine__6335__auto____1 = (function (state_12552){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12574){if((e12574 instanceof Object)){
var ex__6338__auto__ = e12574;
var statearr_12575_12592 = state_12552;
(statearr_12575_12592[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12593 = state_12552;
state_12552 = G__12593;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12552){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___12577,tc,fc))
})();
var state__6392__auto__ = (function (){var statearr_12576 = f__6391__auto__.call(null);
(statearr_12576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___12577);

return statearr_12576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___12577,tc,fc))
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
var c__6390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto__){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto__){
return (function (state_12640){
var state_val_12641 = (state_12640[(1)]);
if((state_val_12641 === (7))){
var inst_12636 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
var statearr_12642_12658 = state_12640__$1;
(statearr_12642_12658[(2)] = inst_12636);

(statearr_12642_12658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (6))){
var inst_12626 = (state_12640[(7)]);
var inst_12629 = (state_12640[(8)]);
var inst_12633 = f.call(null,inst_12626,inst_12629);
var inst_12626__$1 = inst_12633;
var state_12640__$1 = (function (){var statearr_12643 = state_12640;
(statearr_12643[(7)] = inst_12626__$1);

return statearr_12643;
})();
var statearr_12644_12659 = state_12640__$1;
(statearr_12644_12659[(2)] = null);

(statearr_12644_12659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (5))){
var inst_12626 = (state_12640[(7)]);
var state_12640__$1 = state_12640;
var statearr_12645_12660 = state_12640__$1;
(statearr_12645_12660[(2)] = inst_12626);

(statearr_12645_12660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (4))){
var inst_12629 = (state_12640[(8)]);
var inst_12629__$1 = (state_12640[(2)]);
var inst_12630 = (inst_12629__$1 == null);
var state_12640__$1 = (function (){var statearr_12646 = state_12640;
(statearr_12646[(8)] = inst_12629__$1);

return statearr_12646;
})();
if(cljs.core.truth_(inst_12630)){
var statearr_12647_12661 = state_12640__$1;
(statearr_12647_12661[(1)] = (5));

} else {
var statearr_12648_12662 = state_12640__$1;
(statearr_12648_12662[(1)] = (6));

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
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12640__$1,(4),ch);
} else {
if((state_val_12641 === (1))){
var inst_12626 = init;
var state_12640__$1 = (function (){var statearr_12649 = state_12640;
(statearr_12649[(7)] = inst_12626);

return statearr_12649;
})();
var statearr_12650_12663 = state_12640__$1;
(statearr_12650_12663[(2)] = null);

(statearr_12650_12663[(1)] = (2));


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
});})(c__6390__auto__))
;
return ((function (switch__6334__auto__,c__6390__auto__){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12654 = [null,null,null,null,null,null,null,null,null];
(statearr_12654[(0)] = state_machine__6335__auto__);

(statearr_12654[(1)] = (1));

return statearr_12654;
});
var state_machine__6335__auto____1 = (function (state_12640){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12655){if((e12655 instanceof Object)){
var ex__6338__auto__ = e12655;
var statearr_12656_12664 = state_12640;
(statearr_12656_12664[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12665 = state_12640;
state_12640 = G__12665;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12640){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto__))
})();
var state__6392__auto__ = (function (){var statearr_12657 = f__6391__auto__.call(null);
(statearr_12657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto__);

return statearr_12657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto__))
);

return c__6390__auto__;
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
var c__6390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto__){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto__){
return (function (state_12739){
var state_val_12740 = (state_12739[(1)]);
if((state_val_12740 === (7))){
var inst_12721 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12741_12764 = state_12739__$1;
(statearr_12741_12764[(2)] = inst_12721);

(statearr_12741_12764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (1))){
var inst_12715 = cljs.core.seq.call(null,coll);
var inst_12716 = inst_12715;
var state_12739__$1 = (function (){var statearr_12742 = state_12739;
(statearr_12742[(7)] = inst_12716);

return statearr_12742;
})();
var statearr_12743_12765 = state_12739__$1;
(statearr_12743_12765[(2)] = null);

(statearr_12743_12765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (4))){
var inst_12716 = (state_12739[(7)]);
var inst_12719 = cljs.core.first.call(null,inst_12716);
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12739__$1,(7),ch,inst_12719);
} else {
if((state_val_12740 === (13))){
var inst_12733 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12744_12766 = state_12739__$1;
(statearr_12744_12766[(2)] = inst_12733);

(statearr_12744_12766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (6))){
var inst_12724 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
if(cljs.core.truth_(inst_12724)){
var statearr_12745_12767 = state_12739__$1;
(statearr_12745_12767[(1)] = (8));

} else {
var statearr_12746_12768 = state_12739__$1;
(statearr_12746_12768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (3))){
var inst_12737 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12739__$1,inst_12737);
} else {
if((state_val_12740 === (12))){
var state_12739__$1 = state_12739;
var statearr_12747_12769 = state_12739__$1;
(statearr_12747_12769[(2)] = null);

(statearr_12747_12769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (2))){
var inst_12716 = (state_12739[(7)]);
var state_12739__$1 = state_12739;
if(cljs.core.truth_(inst_12716)){
var statearr_12748_12770 = state_12739__$1;
(statearr_12748_12770[(1)] = (4));

} else {
var statearr_12749_12771 = state_12739__$1;
(statearr_12749_12771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (11))){
var inst_12730 = cljs.core.async.close_BANG_.call(null,ch);
var state_12739__$1 = state_12739;
var statearr_12750_12772 = state_12739__$1;
(statearr_12750_12772[(2)] = inst_12730);

(statearr_12750_12772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (9))){
var state_12739__$1 = state_12739;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12751_12773 = state_12739__$1;
(statearr_12751_12773[(1)] = (11));

} else {
var statearr_12752_12774 = state_12739__$1;
(statearr_12752_12774[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (5))){
var inst_12716 = (state_12739[(7)]);
var state_12739__$1 = state_12739;
var statearr_12753_12775 = state_12739__$1;
(statearr_12753_12775[(2)] = inst_12716);

(statearr_12753_12775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (10))){
var inst_12735 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12754_12776 = state_12739__$1;
(statearr_12754_12776[(2)] = inst_12735);

(statearr_12754_12776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (8))){
var inst_12716 = (state_12739[(7)]);
var inst_12726 = cljs.core.next.call(null,inst_12716);
var inst_12716__$1 = inst_12726;
var state_12739__$1 = (function (){var statearr_12755 = state_12739;
(statearr_12755[(7)] = inst_12716__$1);

return statearr_12755;
})();
var statearr_12756_12777 = state_12739__$1;
(statearr_12756_12777[(2)] = null);

(statearr_12756_12777[(1)] = (2));


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
});})(c__6390__auto__))
;
return ((function (switch__6334__auto__,c__6390__auto__){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_12760 = [null,null,null,null,null,null,null,null];
(statearr_12760[(0)] = state_machine__6335__auto__);

(statearr_12760[(1)] = (1));

return statearr_12760;
});
var state_machine__6335__auto____1 = (function (state_12739){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_12739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e12761){if((e12761 instanceof Object)){
var ex__6338__auto__ = e12761;
var statearr_12762_12778 = state_12739;
(statearr_12762_12778[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12779 = state_12739;
state_12739 = G__12779;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_12739){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_12739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto__))
})();
var state__6392__auto__ = (function (){var statearr_12763 = f__6391__auto__.call(null);
(statearr_12763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto__);

return statearr_12763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto__))
);

return c__6390__auto__;
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

cljs.core.async.Mux = (function (){var obj12781 = {};
return obj12781;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3610__auto__ = _;
if(and__3610__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4266__auto__ = (((_ == null))?null:_);
return (function (){var or__3622__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj12783 = {};
return obj12783;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
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
if(typeof cljs.core.async.t13005 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13005 = (function (cs,ch,mult,meta13006){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13006 = meta13006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13005.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13005.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13005.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13005.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13005.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13007){
var self__ = this;
var _13007__$1 = this;
return self__.meta13006;
});})(cs))
;

cljs.core.async.t13005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13007,meta13006__$1){
var self__ = this;
var _13007__$1 = this;
return (new cljs.core.async.t13005(self__.cs,self__.ch,self__.mult,meta13006__$1));
});})(cs))
;

cljs.core.async.t13005.cljs$lang$type = true;

cljs.core.async.t13005.cljs$lang$ctorStr = "cljs.core.async/t13005";

cljs.core.async.t13005.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t13005");
});})(cs))
;

cljs.core.async.__GT_t13005 = ((function (cs){
return (function __GT_t13005(cs__$1,ch__$1,mult__$1,meta13006){
return (new cljs.core.async.t13005(cs__$1,ch__$1,mult__$1,meta13006));
});})(cs))
;

}

return (new cljs.core.async.t13005(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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
var c__6390__auto___13226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___13226,cs,m,dchan,dctr,done){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___13226,cs,m,dchan,dctr,done){
return (function (state_13138){
var state_val_13139 = (state_13138[(1)]);
if((state_val_13139 === (7))){
var inst_13134 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13140_13227 = state_13138__$1;
(statearr_13140_13227[(2)] = inst_13134);

(statearr_13140_13227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (20))){
var inst_13039 = (state_13138[(7)]);
var inst_13049 = cljs.core.first.call(null,inst_13039);
var inst_13050 = cljs.core.nth.call(null,inst_13049,(0),null);
var inst_13051 = cljs.core.nth.call(null,inst_13049,(1),null);
var state_13138__$1 = (function (){var statearr_13141 = state_13138;
(statearr_13141[(8)] = inst_13050);

return statearr_13141;
})();
if(cljs.core.truth_(inst_13051)){
var statearr_13142_13228 = state_13138__$1;
(statearr_13142_13228[(1)] = (22));

} else {
var statearr_13143_13229 = state_13138__$1;
(statearr_13143_13229[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (27))){
var inst_13086 = (state_13138[(9)]);
var inst_13079 = (state_13138[(10)]);
var inst_13081 = (state_13138[(11)]);
var inst_13010 = (state_13138[(12)]);
var inst_13086__$1 = cljs.core._nth.call(null,inst_13079,inst_13081);
var inst_13087 = cljs.core.async.put_BANG_.call(null,inst_13086__$1,inst_13010,done);
var state_13138__$1 = (function (){var statearr_13144 = state_13138;
(statearr_13144[(9)] = inst_13086__$1);

return statearr_13144;
})();
if(cljs.core.truth_(inst_13087)){
var statearr_13145_13230 = state_13138__$1;
(statearr_13145_13230[(1)] = (30));

} else {
var statearr_13146_13231 = state_13138__$1;
(statearr_13146_13231[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (1))){
var state_13138__$1 = state_13138;
var statearr_13147_13232 = state_13138__$1;
(statearr_13147_13232[(2)] = null);

(statearr_13147_13232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (24))){
var inst_13039 = (state_13138[(7)]);
var inst_13056 = (state_13138[(2)]);
var inst_13057 = cljs.core.next.call(null,inst_13039);
var inst_13019 = inst_13057;
var inst_13020 = null;
var inst_13021 = (0);
var inst_13022 = (0);
var state_13138__$1 = (function (){var statearr_13148 = state_13138;
(statearr_13148[(13)] = inst_13019);

(statearr_13148[(14)] = inst_13020);

(statearr_13148[(15)] = inst_13022);

(statearr_13148[(16)] = inst_13021);

(statearr_13148[(17)] = inst_13056);

return statearr_13148;
})();
var statearr_13149_13233 = state_13138__$1;
(statearr_13149_13233[(2)] = null);

(statearr_13149_13233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (39))){
var state_13138__$1 = state_13138;
var statearr_13153_13234 = state_13138__$1;
(statearr_13153_13234[(2)] = null);

(statearr_13153_13234[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (4))){
var inst_13010 = (state_13138[(12)]);
var inst_13010__$1 = (state_13138[(2)]);
var inst_13011 = (inst_13010__$1 == null);
var state_13138__$1 = (function (){var statearr_13154 = state_13138;
(statearr_13154[(12)] = inst_13010__$1);

return statearr_13154;
})();
if(cljs.core.truth_(inst_13011)){
var statearr_13155_13235 = state_13138__$1;
(statearr_13155_13235[(1)] = (5));

} else {
var statearr_13156_13236 = state_13138__$1;
(statearr_13156_13236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (15))){
var inst_13019 = (state_13138[(13)]);
var inst_13020 = (state_13138[(14)]);
var inst_13022 = (state_13138[(15)]);
var inst_13021 = (state_13138[(16)]);
var inst_13035 = (state_13138[(2)]);
var inst_13036 = (inst_13022 + (1));
var tmp13150 = inst_13019;
var tmp13151 = inst_13020;
var tmp13152 = inst_13021;
var inst_13019__$1 = tmp13150;
var inst_13020__$1 = tmp13151;
var inst_13021__$1 = tmp13152;
var inst_13022__$1 = inst_13036;
var state_13138__$1 = (function (){var statearr_13157 = state_13138;
(statearr_13157[(13)] = inst_13019__$1);

(statearr_13157[(14)] = inst_13020__$1);

(statearr_13157[(15)] = inst_13022__$1);

(statearr_13157[(16)] = inst_13021__$1);

(statearr_13157[(18)] = inst_13035);

return statearr_13157;
})();
var statearr_13158_13237 = state_13138__$1;
(statearr_13158_13237[(2)] = null);

(statearr_13158_13237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (21))){
var inst_13060 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13162_13238 = state_13138__$1;
(statearr_13162_13238[(2)] = inst_13060);

(statearr_13162_13238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (31))){
var inst_13086 = (state_13138[(9)]);
var inst_13090 = done.call(null,null);
var inst_13091 = cljs.core.async.untap_STAR_.call(null,m,inst_13086);
var state_13138__$1 = (function (){var statearr_13163 = state_13138;
(statearr_13163[(19)] = inst_13090);

return statearr_13163;
})();
var statearr_13164_13239 = state_13138__$1;
(statearr_13164_13239[(2)] = inst_13091);

(statearr_13164_13239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (32))){
var inst_13079 = (state_13138[(10)]);
var inst_13078 = (state_13138[(20)]);
var inst_13080 = (state_13138[(21)]);
var inst_13081 = (state_13138[(11)]);
var inst_13093 = (state_13138[(2)]);
var inst_13094 = (inst_13081 + (1));
var tmp13159 = inst_13079;
var tmp13160 = inst_13078;
var tmp13161 = inst_13080;
var inst_13078__$1 = tmp13160;
var inst_13079__$1 = tmp13159;
var inst_13080__$1 = tmp13161;
var inst_13081__$1 = inst_13094;
var state_13138__$1 = (function (){var statearr_13165 = state_13138;
(statearr_13165[(10)] = inst_13079__$1);

(statearr_13165[(20)] = inst_13078__$1);

(statearr_13165[(21)] = inst_13080__$1);

(statearr_13165[(11)] = inst_13081__$1);

(statearr_13165[(22)] = inst_13093);

return statearr_13165;
})();
var statearr_13166_13240 = state_13138__$1;
(statearr_13166_13240[(2)] = null);

(statearr_13166_13240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (40))){
var inst_13106 = (state_13138[(23)]);
var inst_13110 = done.call(null,null);
var inst_13111 = cljs.core.async.untap_STAR_.call(null,m,inst_13106);
var state_13138__$1 = (function (){var statearr_13167 = state_13138;
(statearr_13167[(24)] = inst_13110);

return statearr_13167;
})();
var statearr_13168_13241 = state_13138__$1;
(statearr_13168_13241[(2)] = inst_13111);

(statearr_13168_13241[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (33))){
var inst_13097 = (state_13138[(25)]);
var inst_13099 = cljs.core.chunked_seq_QMARK_.call(null,inst_13097);
var state_13138__$1 = state_13138;
if(inst_13099){
var statearr_13169_13242 = state_13138__$1;
(statearr_13169_13242[(1)] = (36));

} else {
var statearr_13170_13243 = state_13138__$1;
(statearr_13170_13243[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (13))){
var inst_13029 = (state_13138[(26)]);
var inst_13032 = cljs.core.async.close_BANG_.call(null,inst_13029);
var state_13138__$1 = state_13138;
var statearr_13171_13244 = state_13138__$1;
(statearr_13171_13244[(2)] = inst_13032);

(statearr_13171_13244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (22))){
var inst_13050 = (state_13138[(8)]);
var inst_13053 = cljs.core.async.close_BANG_.call(null,inst_13050);
var state_13138__$1 = state_13138;
var statearr_13172_13245 = state_13138__$1;
(statearr_13172_13245[(2)] = inst_13053);

(statearr_13172_13245[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (36))){
var inst_13097 = (state_13138[(25)]);
var inst_13101 = cljs.core.chunk_first.call(null,inst_13097);
var inst_13102 = cljs.core.chunk_rest.call(null,inst_13097);
var inst_13103 = cljs.core.count.call(null,inst_13101);
var inst_13078 = inst_13102;
var inst_13079 = inst_13101;
var inst_13080 = inst_13103;
var inst_13081 = (0);
var state_13138__$1 = (function (){var statearr_13173 = state_13138;
(statearr_13173[(10)] = inst_13079);

(statearr_13173[(20)] = inst_13078);

(statearr_13173[(21)] = inst_13080);

(statearr_13173[(11)] = inst_13081);

return statearr_13173;
})();
var statearr_13174_13246 = state_13138__$1;
(statearr_13174_13246[(2)] = null);

(statearr_13174_13246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (41))){
var inst_13097 = (state_13138[(25)]);
var inst_13113 = (state_13138[(2)]);
var inst_13114 = cljs.core.next.call(null,inst_13097);
var inst_13078 = inst_13114;
var inst_13079 = null;
var inst_13080 = (0);
var inst_13081 = (0);
var state_13138__$1 = (function (){var statearr_13175 = state_13138;
(statearr_13175[(27)] = inst_13113);

(statearr_13175[(10)] = inst_13079);

(statearr_13175[(20)] = inst_13078);

(statearr_13175[(21)] = inst_13080);

(statearr_13175[(11)] = inst_13081);

return statearr_13175;
})();
var statearr_13176_13247 = state_13138__$1;
(statearr_13176_13247[(2)] = null);

(statearr_13176_13247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (43))){
var state_13138__$1 = state_13138;
var statearr_13177_13248 = state_13138__$1;
(statearr_13177_13248[(2)] = null);

(statearr_13177_13248[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (29))){
var inst_13122 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13178_13249 = state_13138__$1;
(statearr_13178_13249[(2)] = inst_13122);

(statearr_13178_13249[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (44))){
var inst_13131 = (state_13138[(2)]);
var state_13138__$1 = (function (){var statearr_13179 = state_13138;
(statearr_13179[(28)] = inst_13131);

return statearr_13179;
})();
var statearr_13180_13250 = state_13138__$1;
(statearr_13180_13250[(2)] = null);

(statearr_13180_13250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (6))){
var inst_13070 = (state_13138[(29)]);
var inst_13069 = cljs.core.deref.call(null,cs);
var inst_13070__$1 = cljs.core.keys.call(null,inst_13069);
var inst_13071 = cljs.core.count.call(null,inst_13070__$1);
var inst_13072 = cljs.core.reset_BANG_.call(null,dctr,inst_13071);
var inst_13077 = cljs.core.seq.call(null,inst_13070__$1);
var inst_13078 = inst_13077;
var inst_13079 = null;
var inst_13080 = (0);
var inst_13081 = (0);
var state_13138__$1 = (function (){var statearr_13181 = state_13138;
(statearr_13181[(10)] = inst_13079);

(statearr_13181[(20)] = inst_13078);

(statearr_13181[(21)] = inst_13080);

(statearr_13181[(11)] = inst_13081);

(statearr_13181[(30)] = inst_13072);

(statearr_13181[(29)] = inst_13070__$1);

return statearr_13181;
})();
var statearr_13182_13251 = state_13138__$1;
(statearr_13182_13251[(2)] = null);

(statearr_13182_13251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (28))){
var inst_13097 = (state_13138[(25)]);
var inst_13078 = (state_13138[(20)]);
var inst_13097__$1 = cljs.core.seq.call(null,inst_13078);
var state_13138__$1 = (function (){var statearr_13183 = state_13138;
(statearr_13183[(25)] = inst_13097__$1);

return statearr_13183;
})();
if(inst_13097__$1){
var statearr_13184_13252 = state_13138__$1;
(statearr_13184_13252[(1)] = (33));

} else {
var statearr_13185_13253 = state_13138__$1;
(statearr_13185_13253[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (25))){
var inst_13080 = (state_13138[(21)]);
var inst_13081 = (state_13138[(11)]);
var inst_13083 = (inst_13081 < inst_13080);
var inst_13084 = inst_13083;
var state_13138__$1 = state_13138;
if(cljs.core.truth_(inst_13084)){
var statearr_13186_13254 = state_13138__$1;
(statearr_13186_13254[(1)] = (27));

} else {
var statearr_13187_13255 = state_13138__$1;
(statearr_13187_13255[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (34))){
var state_13138__$1 = state_13138;
var statearr_13188_13256 = state_13138__$1;
(statearr_13188_13256[(2)] = null);

(statearr_13188_13256[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (17))){
var state_13138__$1 = state_13138;
var statearr_13189_13257 = state_13138__$1;
(statearr_13189_13257[(2)] = null);

(statearr_13189_13257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (3))){
var inst_13136 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13138__$1,inst_13136);
} else {
if((state_val_13139 === (12))){
var inst_13065 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13190_13258 = state_13138__$1;
(statearr_13190_13258[(2)] = inst_13065);

(statearr_13190_13258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (2))){
var state_13138__$1 = state_13138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13138__$1,(4),ch);
} else {
if((state_val_13139 === (23))){
var state_13138__$1 = state_13138;
var statearr_13191_13259 = state_13138__$1;
(statearr_13191_13259[(2)] = null);

(statearr_13191_13259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (35))){
var inst_13120 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13192_13260 = state_13138__$1;
(statearr_13192_13260[(2)] = inst_13120);

(statearr_13192_13260[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (19))){
var inst_13039 = (state_13138[(7)]);
var inst_13043 = cljs.core.chunk_first.call(null,inst_13039);
var inst_13044 = cljs.core.chunk_rest.call(null,inst_13039);
var inst_13045 = cljs.core.count.call(null,inst_13043);
var inst_13019 = inst_13044;
var inst_13020 = inst_13043;
var inst_13021 = inst_13045;
var inst_13022 = (0);
var state_13138__$1 = (function (){var statearr_13193 = state_13138;
(statearr_13193[(13)] = inst_13019);

(statearr_13193[(14)] = inst_13020);

(statearr_13193[(15)] = inst_13022);

(statearr_13193[(16)] = inst_13021);

return statearr_13193;
})();
var statearr_13194_13261 = state_13138__$1;
(statearr_13194_13261[(2)] = null);

(statearr_13194_13261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (11))){
var inst_13019 = (state_13138[(13)]);
var inst_13039 = (state_13138[(7)]);
var inst_13039__$1 = cljs.core.seq.call(null,inst_13019);
var state_13138__$1 = (function (){var statearr_13195 = state_13138;
(statearr_13195[(7)] = inst_13039__$1);

return statearr_13195;
})();
if(inst_13039__$1){
var statearr_13196_13262 = state_13138__$1;
(statearr_13196_13262[(1)] = (16));

} else {
var statearr_13197_13263 = state_13138__$1;
(statearr_13197_13263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (9))){
var inst_13067 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13198_13264 = state_13138__$1;
(statearr_13198_13264[(2)] = inst_13067);

(statearr_13198_13264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (5))){
var inst_13017 = cljs.core.deref.call(null,cs);
var inst_13018 = cljs.core.seq.call(null,inst_13017);
var inst_13019 = inst_13018;
var inst_13020 = null;
var inst_13021 = (0);
var inst_13022 = (0);
var state_13138__$1 = (function (){var statearr_13199 = state_13138;
(statearr_13199[(13)] = inst_13019);

(statearr_13199[(14)] = inst_13020);

(statearr_13199[(15)] = inst_13022);

(statearr_13199[(16)] = inst_13021);

return statearr_13199;
})();
var statearr_13200_13265 = state_13138__$1;
(statearr_13200_13265[(2)] = null);

(statearr_13200_13265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (14))){
var state_13138__$1 = state_13138;
var statearr_13201_13266 = state_13138__$1;
(statearr_13201_13266[(2)] = null);

(statearr_13201_13266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (45))){
var inst_13128 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13202_13267 = state_13138__$1;
(statearr_13202_13267[(2)] = inst_13128);

(statearr_13202_13267[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (26))){
var inst_13070 = (state_13138[(29)]);
var inst_13124 = (state_13138[(2)]);
var inst_13125 = cljs.core.seq.call(null,inst_13070);
var state_13138__$1 = (function (){var statearr_13203 = state_13138;
(statearr_13203[(31)] = inst_13124);

return statearr_13203;
})();
if(inst_13125){
var statearr_13204_13268 = state_13138__$1;
(statearr_13204_13268[(1)] = (42));

} else {
var statearr_13205_13269 = state_13138__$1;
(statearr_13205_13269[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (16))){
var inst_13039 = (state_13138[(7)]);
var inst_13041 = cljs.core.chunked_seq_QMARK_.call(null,inst_13039);
var state_13138__$1 = state_13138;
if(inst_13041){
var statearr_13206_13270 = state_13138__$1;
(statearr_13206_13270[(1)] = (19));

} else {
var statearr_13207_13271 = state_13138__$1;
(statearr_13207_13271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (38))){
var inst_13117 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13208_13272 = state_13138__$1;
(statearr_13208_13272[(2)] = inst_13117);

(statearr_13208_13272[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (30))){
var state_13138__$1 = state_13138;
var statearr_13209_13273 = state_13138__$1;
(statearr_13209_13273[(2)] = null);

(statearr_13209_13273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (10))){
var inst_13020 = (state_13138[(14)]);
var inst_13022 = (state_13138[(15)]);
var inst_13028 = cljs.core._nth.call(null,inst_13020,inst_13022);
var inst_13029 = cljs.core.nth.call(null,inst_13028,(0),null);
var inst_13030 = cljs.core.nth.call(null,inst_13028,(1),null);
var state_13138__$1 = (function (){var statearr_13210 = state_13138;
(statearr_13210[(26)] = inst_13029);

return statearr_13210;
})();
if(cljs.core.truth_(inst_13030)){
var statearr_13211_13274 = state_13138__$1;
(statearr_13211_13274[(1)] = (13));

} else {
var statearr_13212_13275 = state_13138__$1;
(statearr_13212_13275[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (18))){
var inst_13063 = (state_13138[(2)]);
var state_13138__$1 = state_13138;
var statearr_13213_13276 = state_13138__$1;
(statearr_13213_13276[(2)] = inst_13063);

(statearr_13213_13276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (42))){
var state_13138__$1 = state_13138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13138__$1,(45),dchan);
} else {
if((state_val_13139 === (37))){
var inst_13097 = (state_13138[(25)]);
var inst_13106 = (state_13138[(23)]);
var inst_13010 = (state_13138[(12)]);
var inst_13106__$1 = cljs.core.first.call(null,inst_13097);
var inst_13107 = cljs.core.async.put_BANG_.call(null,inst_13106__$1,inst_13010,done);
var state_13138__$1 = (function (){var statearr_13214 = state_13138;
(statearr_13214[(23)] = inst_13106__$1);

return statearr_13214;
})();
if(cljs.core.truth_(inst_13107)){
var statearr_13215_13277 = state_13138__$1;
(statearr_13215_13277[(1)] = (39));

} else {
var statearr_13216_13278 = state_13138__$1;
(statearr_13216_13278[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13139 === (8))){
var inst_13022 = (state_13138[(15)]);
var inst_13021 = (state_13138[(16)]);
var inst_13024 = (inst_13022 < inst_13021);
var inst_13025 = inst_13024;
var state_13138__$1 = state_13138;
if(cljs.core.truth_(inst_13025)){
var statearr_13217_13279 = state_13138__$1;
(statearr_13217_13279[(1)] = (10));

} else {
var statearr_13218_13280 = state_13138__$1;
(statearr_13218_13280[(1)] = (11));

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
});})(c__6390__auto___13226,cs,m,dchan,dctr,done))
;
return ((function (switch__6334__auto__,c__6390__auto___13226,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_13222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13222[(0)] = state_machine__6335__auto__);

(statearr_13222[(1)] = (1));

return statearr_13222;
});
var state_machine__6335__auto____1 = (function (state_13138){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_13138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e13223){if((e13223 instanceof Object)){
var ex__6338__auto__ = e13223;
var statearr_13224_13281 = state_13138;
(statearr_13224_13281[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13282 = state_13138;
state_13138 = G__13282;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_13138){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_13138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___13226,cs,m,dchan,dctr,done))
})();
var state__6392__auto__ = (function (){var statearr_13225 = f__6391__auto__.call(null);
(statearr_13225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___13226);

return statearr_13225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___13226,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj13284 = {};
return obj13284;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4266__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13285){
var map__13290 = p__13285;
var map__13290__$1 = ((cljs.core.seq_QMARK_.call(null,map__13290))?cljs.core.apply.call(null,cljs.core.hash_map,map__13290):map__13290);
var opts = map__13290__$1;
var statearr_13291_13294 = state;
(statearr_13291_13294[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13290,map__13290__$1,opts){
return (function (val){
var statearr_13292_13295 = state;
(statearr_13292_13295[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13290,map__13290__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13293_13296 = state;
(statearr_13293_13296[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13285 = null;
if (arguments.length > 3) {
  p__13285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13285);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13297){
var state = cljs.core.first(arglist__13297);
arglist__13297 = cljs.core.next(arglist__13297);
var cont_block = cljs.core.first(arglist__13297);
arglist__13297 = cljs.core.next(arglist__13297);
var ports = cljs.core.first(arglist__13297);
var p__13285 = cljs.core.rest(arglist__13297);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13285);
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
if(typeof cljs.core.async.t13417 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13417 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13418){
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
this.meta13418 = meta13418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13417.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13417.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13417.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13417.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13417.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13417.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t13417.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13419){
var self__ = this;
var _13419__$1 = this;
return self__.meta13418;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13419,meta13418__$1){
var self__ = this;
var _13419__$1 = this;
return (new cljs.core.async.t13417(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13418__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13417.cljs$lang$type = true;

cljs.core.async.t13417.cljs$lang$ctorStr = "cljs.core.async/t13417";

cljs.core.async.t13417.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t13417");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13417 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13417(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13418){
return (new cljs.core.async.t13417(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13418));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13417(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var c__6390__auto___13536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___13536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___13536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13489){
var state_val_13490 = (state_13489[(1)]);
if((state_val_13490 === (7))){
var inst_13433 = (state_13489[(7)]);
var inst_13438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13433);
var state_13489__$1 = state_13489;
var statearr_13491_13537 = state_13489__$1;
(statearr_13491_13537[(2)] = inst_13438);

(statearr_13491_13537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (20))){
var inst_13448 = (state_13489[(8)]);
var state_13489__$1 = state_13489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13489__$1,(23),out,inst_13448);
} else {
if((state_val_13490 === (1))){
var inst_13423 = (state_13489[(9)]);
var inst_13423__$1 = calc_state.call(null);
var inst_13424 = cljs.core.seq_QMARK_.call(null,inst_13423__$1);
var state_13489__$1 = (function (){var statearr_13492 = state_13489;
(statearr_13492[(9)] = inst_13423__$1);

return statearr_13492;
})();
if(inst_13424){
var statearr_13493_13538 = state_13489__$1;
(statearr_13493_13538[(1)] = (2));

} else {
var statearr_13494_13539 = state_13489__$1;
(statearr_13494_13539[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (24))){
var inst_13441 = (state_13489[(10)]);
var inst_13433 = inst_13441;
var state_13489__$1 = (function (){var statearr_13495 = state_13489;
(statearr_13495[(7)] = inst_13433);

return statearr_13495;
})();
var statearr_13496_13540 = state_13489__$1;
(statearr_13496_13540[(2)] = null);

(statearr_13496_13540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (4))){
var inst_13423 = (state_13489[(9)]);
var inst_13429 = (state_13489[(2)]);
var inst_13430 = cljs.core.get.call(null,inst_13429,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13431 = cljs.core.get.call(null,inst_13429,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13432 = cljs.core.get.call(null,inst_13429,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13433 = inst_13423;
var state_13489__$1 = (function (){var statearr_13497 = state_13489;
(statearr_13497[(11)] = inst_13432);

(statearr_13497[(12)] = inst_13430);

(statearr_13497[(7)] = inst_13433);

(statearr_13497[(13)] = inst_13431);

return statearr_13497;
})();
var statearr_13498_13541 = state_13489__$1;
(statearr_13498_13541[(2)] = null);

(statearr_13498_13541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (15))){
var state_13489__$1 = state_13489;
var statearr_13499_13542 = state_13489__$1;
(statearr_13499_13542[(2)] = null);

(statearr_13499_13542[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (21))){
var inst_13441 = (state_13489[(10)]);
var inst_13433 = inst_13441;
var state_13489__$1 = (function (){var statearr_13500 = state_13489;
(statearr_13500[(7)] = inst_13433);

return statearr_13500;
})();
var statearr_13501_13543 = state_13489__$1;
(statearr_13501_13543[(2)] = null);

(statearr_13501_13543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (13))){
var inst_13485 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
var statearr_13502_13544 = state_13489__$1;
(statearr_13502_13544[(2)] = inst_13485);

(statearr_13502_13544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (22))){
var inst_13483 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
var statearr_13503_13545 = state_13489__$1;
(statearr_13503_13545[(2)] = inst_13483);

(statearr_13503_13545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (6))){
var inst_13487 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13489__$1,inst_13487);
} else {
if((state_val_13490 === (25))){
var state_13489__$1 = state_13489;
var statearr_13504_13546 = state_13489__$1;
(statearr_13504_13546[(2)] = null);

(statearr_13504_13546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (17))){
var inst_13463 = (state_13489[(14)]);
var state_13489__$1 = state_13489;
var statearr_13505_13547 = state_13489__$1;
(statearr_13505_13547[(2)] = inst_13463);

(statearr_13505_13547[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (3))){
var inst_13423 = (state_13489[(9)]);
var state_13489__$1 = state_13489;
var statearr_13506_13548 = state_13489__$1;
(statearr_13506_13548[(2)] = inst_13423);

(statearr_13506_13548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (12))){
var inst_13463 = (state_13489[(14)]);
var inst_13444 = (state_13489[(15)]);
var inst_13449 = (state_13489[(16)]);
var inst_13463__$1 = inst_13444.call(null,inst_13449);
var state_13489__$1 = (function (){var statearr_13507 = state_13489;
(statearr_13507[(14)] = inst_13463__$1);

return statearr_13507;
})();
if(cljs.core.truth_(inst_13463__$1)){
var statearr_13508_13549 = state_13489__$1;
(statearr_13508_13549[(1)] = (17));

} else {
var statearr_13509_13550 = state_13489__$1;
(statearr_13509_13550[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (2))){
var inst_13423 = (state_13489[(9)]);
var inst_13426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13423);
var state_13489__$1 = state_13489;
var statearr_13510_13551 = state_13489__$1;
(statearr_13510_13551[(2)] = inst_13426);

(statearr_13510_13551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (23))){
var inst_13474 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
if(cljs.core.truth_(inst_13474)){
var statearr_13511_13552 = state_13489__$1;
(statearr_13511_13552[(1)] = (24));

} else {
var statearr_13512_13553 = state_13489__$1;
(statearr_13512_13553[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (19))){
var inst_13471 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
if(cljs.core.truth_(inst_13471)){
var statearr_13513_13554 = state_13489__$1;
(statearr_13513_13554[(1)] = (20));

} else {
var statearr_13514_13555 = state_13489__$1;
(statearr_13514_13555[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (11))){
var inst_13448 = (state_13489[(8)]);
var inst_13454 = (inst_13448 == null);
var state_13489__$1 = state_13489;
if(cljs.core.truth_(inst_13454)){
var statearr_13515_13556 = state_13489__$1;
(statearr_13515_13556[(1)] = (14));

} else {
var statearr_13516_13557 = state_13489__$1;
(statearr_13516_13557[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (9))){
var inst_13441 = (state_13489[(10)]);
var inst_13441__$1 = (state_13489[(2)]);
var inst_13442 = cljs.core.get.call(null,inst_13441__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13443 = cljs.core.get.call(null,inst_13441__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13444 = cljs.core.get.call(null,inst_13441__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13489__$1 = (function (){var statearr_13517 = state_13489;
(statearr_13517[(10)] = inst_13441__$1);

(statearr_13517[(15)] = inst_13444);

(statearr_13517[(17)] = inst_13443);

return statearr_13517;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13489__$1,(10),inst_13442);
} else {
if((state_val_13490 === (5))){
var inst_13433 = (state_13489[(7)]);
var inst_13436 = cljs.core.seq_QMARK_.call(null,inst_13433);
var state_13489__$1 = state_13489;
if(inst_13436){
var statearr_13518_13558 = state_13489__$1;
(statearr_13518_13558[(1)] = (7));

} else {
var statearr_13519_13559 = state_13489__$1;
(statearr_13519_13559[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (14))){
var inst_13449 = (state_13489[(16)]);
var inst_13456 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13449);
var state_13489__$1 = state_13489;
var statearr_13520_13560 = state_13489__$1;
(statearr_13520_13560[(2)] = inst_13456);

(statearr_13520_13560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (26))){
var inst_13479 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
var statearr_13521_13561 = state_13489__$1;
(statearr_13521_13561[(2)] = inst_13479);

(statearr_13521_13561[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (16))){
var inst_13459 = (state_13489[(2)]);
var inst_13460 = calc_state.call(null);
var inst_13433 = inst_13460;
var state_13489__$1 = (function (){var statearr_13522 = state_13489;
(statearr_13522[(18)] = inst_13459);

(statearr_13522[(7)] = inst_13433);

return statearr_13522;
})();
var statearr_13523_13562 = state_13489__$1;
(statearr_13523_13562[(2)] = null);

(statearr_13523_13562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (10))){
var inst_13449 = (state_13489[(16)]);
var inst_13448 = (state_13489[(8)]);
var inst_13447 = (state_13489[(2)]);
var inst_13448__$1 = cljs.core.nth.call(null,inst_13447,(0),null);
var inst_13449__$1 = cljs.core.nth.call(null,inst_13447,(1),null);
var inst_13450 = (inst_13448__$1 == null);
var inst_13451 = cljs.core._EQ_.call(null,inst_13449__$1,change);
var inst_13452 = (inst_13450) || (inst_13451);
var state_13489__$1 = (function (){var statearr_13524 = state_13489;
(statearr_13524[(16)] = inst_13449__$1);

(statearr_13524[(8)] = inst_13448__$1);

return statearr_13524;
})();
if(cljs.core.truth_(inst_13452)){
var statearr_13525_13563 = state_13489__$1;
(statearr_13525_13563[(1)] = (11));

} else {
var statearr_13526_13564 = state_13489__$1;
(statearr_13526_13564[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (18))){
var inst_13444 = (state_13489[(15)]);
var inst_13449 = (state_13489[(16)]);
var inst_13443 = (state_13489[(17)]);
var inst_13466 = cljs.core.empty_QMARK_.call(null,inst_13444);
var inst_13467 = inst_13443.call(null,inst_13449);
var inst_13468 = cljs.core.not.call(null,inst_13467);
var inst_13469 = (inst_13466) && (inst_13468);
var state_13489__$1 = state_13489;
var statearr_13527_13565 = state_13489__$1;
(statearr_13527_13565[(2)] = inst_13469);

(statearr_13527_13565[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (8))){
var inst_13433 = (state_13489[(7)]);
var state_13489__$1 = state_13489;
var statearr_13528_13566 = state_13489__$1;
(statearr_13528_13566[(2)] = inst_13433);

(statearr_13528_13566[(1)] = (9));


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
});})(c__6390__auto___13536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6334__auto__,c__6390__auto___13536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_13532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13532[(0)] = state_machine__6335__auto__);

(statearr_13532[(1)] = (1));

return statearr_13532;
});
var state_machine__6335__auto____1 = (function (state_13489){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_13489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e13533){if((e13533 instanceof Object)){
var ex__6338__auto__ = e13533;
var statearr_13534_13567 = state_13489;
(statearr_13534_13567[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13568 = state_13489;
state_13489 = G__13568;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_13489){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_13489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___13536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6392__auto__ = (function (){var statearr_13535 = f__6391__auto__.call(null);
(statearr_13535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___13536);

return statearr_13535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___13536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj13570 = {};
return obj13570;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4266__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4266__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
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
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4266__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4266__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4266__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
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
var or__3622__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3622__auto__,mults){
return (function (p1__13571_SHARP_){
if(cljs.core.truth_(p1__13571_SHARP_.call(null,topic))){
return p1__13571_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13571_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t13694 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13694 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13695){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13695 = meta13695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13694.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t13694.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t13694.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t13694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t13694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t13694.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t13694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13696){
var self__ = this;
var _13696__$1 = this;
return self__.meta13695;
});})(mults,ensure_mult))
;

cljs.core.async.t13694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13696,meta13695__$1){
var self__ = this;
var _13696__$1 = this;
return (new cljs.core.async.t13694(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13695__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t13694.cljs$lang$type = true;

cljs.core.async.t13694.cljs$lang$ctorStr = "cljs.core.async/t13694";

cljs.core.async.t13694.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t13694");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t13694 = ((function (mults,ensure_mult){
return (function __GT_t13694(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13695){
return (new cljs.core.async.t13694(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13695));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t13694(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var c__6390__auto___13816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___13816,mults,ensure_mult,p){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___13816,mults,ensure_mult,p){
return (function (state_13768){
var state_val_13769 = (state_13768[(1)]);
if((state_val_13769 === (7))){
var inst_13764 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
var statearr_13770_13817 = state_13768__$1;
(statearr_13770_13817[(2)] = inst_13764);

(statearr_13770_13817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (20))){
var state_13768__$1 = state_13768;
var statearr_13771_13818 = state_13768__$1;
(statearr_13771_13818[(2)] = null);

(statearr_13771_13818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (1))){
var state_13768__$1 = state_13768;
var statearr_13772_13819 = state_13768__$1;
(statearr_13772_13819[(2)] = null);

(statearr_13772_13819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (24))){
var inst_13747 = (state_13768[(7)]);
var inst_13756 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13747);
var state_13768__$1 = state_13768;
var statearr_13773_13820 = state_13768__$1;
(statearr_13773_13820[(2)] = inst_13756);

(statearr_13773_13820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (4))){
var inst_13699 = (state_13768[(8)]);
var inst_13699__$1 = (state_13768[(2)]);
var inst_13700 = (inst_13699__$1 == null);
var state_13768__$1 = (function (){var statearr_13774 = state_13768;
(statearr_13774[(8)] = inst_13699__$1);

return statearr_13774;
})();
if(cljs.core.truth_(inst_13700)){
var statearr_13775_13821 = state_13768__$1;
(statearr_13775_13821[(1)] = (5));

} else {
var statearr_13776_13822 = state_13768__$1;
(statearr_13776_13822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (15))){
var inst_13741 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
var statearr_13777_13823 = state_13768__$1;
(statearr_13777_13823[(2)] = inst_13741);

(statearr_13777_13823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (21))){
var inst_13761 = (state_13768[(2)]);
var state_13768__$1 = (function (){var statearr_13778 = state_13768;
(statearr_13778[(9)] = inst_13761);

return statearr_13778;
})();
var statearr_13779_13824 = state_13768__$1;
(statearr_13779_13824[(2)] = null);

(statearr_13779_13824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (13))){
var inst_13723 = (state_13768[(10)]);
var inst_13725 = cljs.core.chunked_seq_QMARK_.call(null,inst_13723);
var state_13768__$1 = state_13768;
if(inst_13725){
var statearr_13780_13825 = state_13768__$1;
(statearr_13780_13825[(1)] = (16));

} else {
var statearr_13781_13826 = state_13768__$1;
(statearr_13781_13826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (22))){
var inst_13753 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
if(cljs.core.truth_(inst_13753)){
var statearr_13782_13827 = state_13768__$1;
(statearr_13782_13827[(1)] = (23));

} else {
var statearr_13783_13828 = state_13768__$1;
(statearr_13783_13828[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (6))){
var inst_13747 = (state_13768[(7)]);
var inst_13699 = (state_13768[(8)]);
var inst_13749 = (state_13768[(11)]);
var inst_13747__$1 = topic_fn.call(null,inst_13699);
var inst_13748 = cljs.core.deref.call(null,mults);
var inst_13749__$1 = cljs.core.get.call(null,inst_13748,inst_13747__$1);
var state_13768__$1 = (function (){var statearr_13784 = state_13768;
(statearr_13784[(7)] = inst_13747__$1);

(statearr_13784[(11)] = inst_13749__$1);

return statearr_13784;
})();
if(cljs.core.truth_(inst_13749__$1)){
var statearr_13785_13829 = state_13768__$1;
(statearr_13785_13829[(1)] = (19));

} else {
var statearr_13786_13830 = state_13768__$1;
(statearr_13786_13830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (25))){
var inst_13758 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
var statearr_13787_13831 = state_13768__$1;
(statearr_13787_13831[(2)] = inst_13758);

(statearr_13787_13831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (17))){
var inst_13723 = (state_13768[(10)]);
var inst_13732 = cljs.core.first.call(null,inst_13723);
var inst_13733 = cljs.core.async.muxch_STAR_.call(null,inst_13732);
var inst_13734 = cljs.core.async.close_BANG_.call(null,inst_13733);
var inst_13735 = cljs.core.next.call(null,inst_13723);
var inst_13709 = inst_13735;
var inst_13710 = null;
var inst_13711 = (0);
var inst_13712 = (0);
var state_13768__$1 = (function (){var statearr_13788 = state_13768;
(statearr_13788[(12)] = inst_13734);

(statearr_13788[(13)] = inst_13709);

(statearr_13788[(14)] = inst_13711);

(statearr_13788[(15)] = inst_13710);

(statearr_13788[(16)] = inst_13712);

return statearr_13788;
})();
var statearr_13789_13832 = state_13768__$1;
(statearr_13789_13832[(2)] = null);

(statearr_13789_13832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (3))){
var inst_13766 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13768__$1,inst_13766);
} else {
if((state_val_13769 === (12))){
var inst_13743 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
var statearr_13790_13833 = state_13768__$1;
(statearr_13790_13833[(2)] = inst_13743);

(statearr_13790_13833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (2))){
var state_13768__$1 = state_13768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13768__$1,(4),ch);
} else {
if((state_val_13769 === (23))){
var state_13768__$1 = state_13768;
var statearr_13791_13834 = state_13768__$1;
(statearr_13791_13834[(2)] = null);

(statearr_13791_13834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (19))){
var inst_13699 = (state_13768[(8)]);
var inst_13749 = (state_13768[(11)]);
var inst_13751 = cljs.core.async.muxch_STAR_.call(null,inst_13749);
var state_13768__$1 = state_13768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13768__$1,(22),inst_13751,inst_13699);
} else {
if((state_val_13769 === (11))){
var inst_13723 = (state_13768[(10)]);
var inst_13709 = (state_13768[(13)]);
var inst_13723__$1 = cljs.core.seq.call(null,inst_13709);
var state_13768__$1 = (function (){var statearr_13792 = state_13768;
(statearr_13792[(10)] = inst_13723__$1);

return statearr_13792;
})();
if(inst_13723__$1){
var statearr_13793_13835 = state_13768__$1;
(statearr_13793_13835[(1)] = (13));

} else {
var statearr_13794_13836 = state_13768__$1;
(statearr_13794_13836[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (9))){
var inst_13745 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
var statearr_13795_13837 = state_13768__$1;
(statearr_13795_13837[(2)] = inst_13745);

(statearr_13795_13837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (5))){
var inst_13706 = cljs.core.deref.call(null,mults);
var inst_13707 = cljs.core.vals.call(null,inst_13706);
var inst_13708 = cljs.core.seq.call(null,inst_13707);
var inst_13709 = inst_13708;
var inst_13710 = null;
var inst_13711 = (0);
var inst_13712 = (0);
var state_13768__$1 = (function (){var statearr_13796 = state_13768;
(statearr_13796[(13)] = inst_13709);

(statearr_13796[(14)] = inst_13711);

(statearr_13796[(15)] = inst_13710);

(statearr_13796[(16)] = inst_13712);

return statearr_13796;
})();
var statearr_13797_13838 = state_13768__$1;
(statearr_13797_13838[(2)] = null);

(statearr_13797_13838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (14))){
var state_13768__$1 = state_13768;
var statearr_13801_13839 = state_13768__$1;
(statearr_13801_13839[(2)] = null);

(statearr_13801_13839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (16))){
var inst_13723 = (state_13768[(10)]);
var inst_13727 = cljs.core.chunk_first.call(null,inst_13723);
var inst_13728 = cljs.core.chunk_rest.call(null,inst_13723);
var inst_13729 = cljs.core.count.call(null,inst_13727);
var inst_13709 = inst_13728;
var inst_13710 = inst_13727;
var inst_13711 = inst_13729;
var inst_13712 = (0);
var state_13768__$1 = (function (){var statearr_13802 = state_13768;
(statearr_13802[(13)] = inst_13709);

(statearr_13802[(14)] = inst_13711);

(statearr_13802[(15)] = inst_13710);

(statearr_13802[(16)] = inst_13712);

return statearr_13802;
})();
var statearr_13803_13840 = state_13768__$1;
(statearr_13803_13840[(2)] = null);

(statearr_13803_13840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (10))){
var inst_13709 = (state_13768[(13)]);
var inst_13711 = (state_13768[(14)]);
var inst_13710 = (state_13768[(15)]);
var inst_13712 = (state_13768[(16)]);
var inst_13717 = cljs.core._nth.call(null,inst_13710,inst_13712);
var inst_13718 = cljs.core.async.muxch_STAR_.call(null,inst_13717);
var inst_13719 = cljs.core.async.close_BANG_.call(null,inst_13718);
var inst_13720 = (inst_13712 + (1));
var tmp13798 = inst_13709;
var tmp13799 = inst_13711;
var tmp13800 = inst_13710;
var inst_13709__$1 = tmp13798;
var inst_13710__$1 = tmp13800;
var inst_13711__$1 = tmp13799;
var inst_13712__$1 = inst_13720;
var state_13768__$1 = (function (){var statearr_13804 = state_13768;
(statearr_13804[(17)] = inst_13719);

(statearr_13804[(13)] = inst_13709__$1);

(statearr_13804[(14)] = inst_13711__$1);

(statearr_13804[(15)] = inst_13710__$1);

(statearr_13804[(16)] = inst_13712__$1);

return statearr_13804;
})();
var statearr_13805_13841 = state_13768__$1;
(statearr_13805_13841[(2)] = null);

(statearr_13805_13841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (18))){
var inst_13738 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
var statearr_13806_13842 = state_13768__$1;
(statearr_13806_13842[(2)] = inst_13738);

(statearr_13806_13842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13769 === (8))){
var inst_13711 = (state_13768[(14)]);
var inst_13712 = (state_13768[(16)]);
var inst_13714 = (inst_13712 < inst_13711);
var inst_13715 = inst_13714;
var state_13768__$1 = state_13768;
if(cljs.core.truth_(inst_13715)){
var statearr_13807_13843 = state_13768__$1;
(statearr_13807_13843[(1)] = (10));

} else {
var statearr_13808_13844 = state_13768__$1;
(statearr_13808_13844[(1)] = (11));

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
});})(c__6390__auto___13816,mults,ensure_mult,p))
;
return ((function (switch__6334__auto__,c__6390__auto___13816,mults,ensure_mult,p){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_13812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13812[(0)] = state_machine__6335__auto__);

(statearr_13812[(1)] = (1));

return statearr_13812;
});
var state_machine__6335__auto____1 = (function (state_13768){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_13768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e13813){if((e13813 instanceof Object)){
var ex__6338__auto__ = e13813;
var statearr_13814_13845 = state_13768;
(statearr_13814_13845[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13846 = state_13768;
state_13768 = G__13846;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_13768){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_13768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___13816,mults,ensure_mult,p))
})();
var state__6392__auto__ = (function (){var statearr_13815 = f__6391__auto__.call(null);
(statearr_13815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___13816);

return statearr_13815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___13816,mults,ensure_mult,p))
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
var c__6390__auto___13983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___13983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___13983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13953){
var state_val_13954 = (state_13953[(1)]);
if((state_val_13954 === (7))){
var state_13953__$1 = state_13953;
var statearr_13955_13984 = state_13953__$1;
(statearr_13955_13984[(2)] = null);

(statearr_13955_13984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (1))){
var state_13953__$1 = state_13953;
var statearr_13956_13985 = state_13953__$1;
(statearr_13956_13985[(2)] = null);

(statearr_13956_13985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (4))){
var inst_13917 = (state_13953[(7)]);
var inst_13919 = (inst_13917 < cnt);
var state_13953__$1 = state_13953;
if(cljs.core.truth_(inst_13919)){
var statearr_13957_13986 = state_13953__$1;
(statearr_13957_13986[(1)] = (6));

} else {
var statearr_13958_13987 = state_13953__$1;
(statearr_13958_13987[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (15))){
var inst_13949 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13959_13988 = state_13953__$1;
(statearr_13959_13988[(2)] = inst_13949);

(statearr_13959_13988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (13))){
var inst_13942 = cljs.core.async.close_BANG_.call(null,out);
var state_13953__$1 = state_13953;
var statearr_13960_13989 = state_13953__$1;
(statearr_13960_13989[(2)] = inst_13942);

(statearr_13960_13989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (6))){
var state_13953__$1 = state_13953;
var statearr_13961_13990 = state_13953__$1;
(statearr_13961_13990[(2)] = null);

(statearr_13961_13990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (3))){
var inst_13951 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13953__$1,inst_13951);
} else {
if((state_val_13954 === (12))){
var inst_13939 = (state_13953[(8)]);
var inst_13939__$1 = (state_13953[(2)]);
var inst_13940 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13939__$1);
var state_13953__$1 = (function (){var statearr_13962 = state_13953;
(statearr_13962[(8)] = inst_13939__$1);

return statearr_13962;
})();
if(cljs.core.truth_(inst_13940)){
var statearr_13963_13991 = state_13953__$1;
(statearr_13963_13991[(1)] = (13));

} else {
var statearr_13964_13992 = state_13953__$1;
(statearr_13964_13992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (2))){
var inst_13916 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13917 = (0);
var state_13953__$1 = (function (){var statearr_13965 = state_13953;
(statearr_13965[(7)] = inst_13917);

(statearr_13965[(9)] = inst_13916);

return statearr_13965;
})();
var statearr_13966_13993 = state_13953__$1;
(statearr_13966_13993[(2)] = null);

(statearr_13966_13993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (11))){
var inst_13917 = (state_13953[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13953,(10),Object,null,(9));
var inst_13926 = chs__$1.call(null,inst_13917);
var inst_13927 = done.call(null,inst_13917);
var inst_13928 = cljs.core.async.take_BANG_.call(null,inst_13926,inst_13927);
var state_13953__$1 = state_13953;
var statearr_13967_13994 = state_13953__$1;
(statearr_13967_13994[(2)] = inst_13928);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13953__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (9))){
var inst_13917 = (state_13953[(7)]);
var inst_13930 = (state_13953[(2)]);
var inst_13931 = (inst_13917 + (1));
var inst_13917__$1 = inst_13931;
var state_13953__$1 = (function (){var statearr_13968 = state_13953;
(statearr_13968[(7)] = inst_13917__$1);

(statearr_13968[(10)] = inst_13930);

return statearr_13968;
})();
var statearr_13969_13995 = state_13953__$1;
(statearr_13969_13995[(2)] = null);

(statearr_13969_13995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (5))){
var inst_13937 = (state_13953[(2)]);
var state_13953__$1 = (function (){var statearr_13970 = state_13953;
(statearr_13970[(11)] = inst_13937);

return statearr_13970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13953__$1,(12),dchan);
} else {
if((state_val_13954 === (14))){
var inst_13939 = (state_13953[(8)]);
var inst_13944 = cljs.core.apply.call(null,f,inst_13939);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13953__$1,(16),out,inst_13944);
} else {
if((state_val_13954 === (16))){
var inst_13946 = (state_13953[(2)]);
var state_13953__$1 = (function (){var statearr_13971 = state_13953;
(statearr_13971[(12)] = inst_13946);

return statearr_13971;
})();
var statearr_13972_13996 = state_13953__$1;
(statearr_13972_13996[(2)] = null);

(statearr_13972_13996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (10))){
var inst_13921 = (state_13953[(2)]);
var inst_13922 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13953__$1 = (function (){var statearr_13973 = state_13953;
(statearr_13973[(13)] = inst_13921);

return statearr_13973;
})();
var statearr_13974_13997 = state_13953__$1;
(statearr_13974_13997[(2)] = inst_13922);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13953__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (8))){
var inst_13935 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13975_13998 = state_13953__$1;
(statearr_13975_13998[(2)] = inst_13935);

(statearr_13975_13998[(1)] = (5));


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
});})(c__6390__auto___13983,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6334__auto__,c__6390__auto___13983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_13979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13979[(0)] = state_machine__6335__auto__);

(statearr_13979[(1)] = (1));

return statearr_13979;
});
var state_machine__6335__auto____1 = (function (state_13953){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_13953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e13980){if((e13980 instanceof Object)){
var ex__6338__auto__ = e13980;
var statearr_13981_13999 = state_13953;
(statearr_13981_13999[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14000 = state_13953;
state_13953 = G__14000;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_13953){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_13953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___13983,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6392__auto__ = (function (){var statearr_13982 = f__6391__auto__.call(null);
(statearr_13982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___13983);

return statearr_13982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___13983,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6390__auto___14108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___14108,out){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___14108,out){
return (function (state_14084){
var state_val_14085 = (state_14084[(1)]);
if((state_val_14085 === (7))){
var inst_14063 = (state_14084[(7)]);
var inst_14064 = (state_14084[(8)]);
var inst_14063__$1 = (state_14084[(2)]);
var inst_14064__$1 = cljs.core.nth.call(null,inst_14063__$1,(0),null);
var inst_14065 = cljs.core.nth.call(null,inst_14063__$1,(1),null);
var inst_14066 = (inst_14064__$1 == null);
var state_14084__$1 = (function (){var statearr_14086 = state_14084;
(statearr_14086[(7)] = inst_14063__$1);

(statearr_14086[(9)] = inst_14065);

(statearr_14086[(8)] = inst_14064__$1);

return statearr_14086;
})();
if(cljs.core.truth_(inst_14066)){
var statearr_14087_14109 = state_14084__$1;
(statearr_14087_14109[(1)] = (8));

} else {
var statearr_14088_14110 = state_14084__$1;
(statearr_14088_14110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (1))){
var inst_14055 = cljs.core.vec.call(null,chs);
var inst_14056 = inst_14055;
var state_14084__$1 = (function (){var statearr_14089 = state_14084;
(statearr_14089[(10)] = inst_14056);

return statearr_14089;
})();
var statearr_14090_14111 = state_14084__$1;
(statearr_14090_14111[(2)] = null);

(statearr_14090_14111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (4))){
var inst_14056 = (state_14084[(10)]);
var state_14084__$1 = state_14084;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14084__$1,(7),inst_14056);
} else {
if((state_val_14085 === (6))){
var inst_14080 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
var statearr_14091_14112 = state_14084__$1;
(statearr_14091_14112[(2)] = inst_14080);

(statearr_14091_14112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (3))){
var inst_14082 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14084__$1,inst_14082);
} else {
if((state_val_14085 === (2))){
var inst_14056 = (state_14084[(10)]);
var inst_14058 = cljs.core.count.call(null,inst_14056);
var inst_14059 = (inst_14058 > (0));
var state_14084__$1 = state_14084;
if(cljs.core.truth_(inst_14059)){
var statearr_14093_14113 = state_14084__$1;
(statearr_14093_14113[(1)] = (4));

} else {
var statearr_14094_14114 = state_14084__$1;
(statearr_14094_14114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (11))){
var inst_14056 = (state_14084[(10)]);
var inst_14073 = (state_14084[(2)]);
var tmp14092 = inst_14056;
var inst_14056__$1 = tmp14092;
var state_14084__$1 = (function (){var statearr_14095 = state_14084;
(statearr_14095[(10)] = inst_14056__$1);

(statearr_14095[(11)] = inst_14073);

return statearr_14095;
})();
var statearr_14096_14115 = state_14084__$1;
(statearr_14096_14115[(2)] = null);

(statearr_14096_14115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (9))){
var inst_14064 = (state_14084[(8)]);
var state_14084__$1 = state_14084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14084__$1,(11),out,inst_14064);
} else {
if((state_val_14085 === (5))){
var inst_14078 = cljs.core.async.close_BANG_.call(null,out);
var state_14084__$1 = state_14084;
var statearr_14097_14116 = state_14084__$1;
(statearr_14097_14116[(2)] = inst_14078);

(statearr_14097_14116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (10))){
var inst_14076 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
var statearr_14098_14117 = state_14084__$1;
(statearr_14098_14117[(2)] = inst_14076);

(statearr_14098_14117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (8))){
var inst_14056 = (state_14084[(10)]);
var inst_14063 = (state_14084[(7)]);
var inst_14065 = (state_14084[(9)]);
var inst_14064 = (state_14084[(8)]);
var inst_14068 = (function (){var c = inst_14065;
var v = inst_14064;
var vec__14061 = inst_14063;
var cs = inst_14056;
return ((function (c,v,vec__14061,cs,inst_14056,inst_14063,inst_14065,inst_14064,state_val_14085,c__6390__auto___14108,out){
return (function (p1__14001_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14001_SHARP_);
});
;})(c,v,vec__14061,cs,inst_14056,inst_14063,inst_14065,inst_14064,state_val_14085,c__6390__auto___14108,out))
})();
var inst_14069 = cljs.core.filterv.call(null,inst_14068,inst_14056);
var inst_14056__$1 = inst_14069;
var state_14084__$1 = (function (){var statearr_14099 = state_14084;
(statearr_14099[(10)] = inst_14056__$1);

return statearr_14099;
})();
var statearr_14100_14118 = state_14084__$1;
(statearr_14100_14118[(2)] = null);

(statearr_14100_14118[(1)] = (2));


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
});})(c__6390__auto___14108,out))
;
return ((function (switch__6334__auto__,c__6390__auto___14108,out){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_14104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14104[(0)] = state_machine__6335__auto__);

(statearr_14104[(1)] = (1));

return statearr_14104;
});
var state_machine__6335__auto____1 = (function (state_14084){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_14084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e14105){if((e14105 instanceof Object)){
var ex__6338__auto__ = e14105;
var statearr_14106_14119 = state_14084;
(statearr_14106_14119[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14120 = state_14084;
state_14084 = G__14120;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_14084){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_14084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___14108,out))
})();
var state__6392__auto__ = (function (){var statearr_14107 = f__6391__auto__.call(null);
(statearr_14107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___14108);

return statearr_14107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___14108,out))
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
var c__6390__auto___14213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___14213,out){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___14213,out){
return (function (state_14190){
var state_val_14191 = (state_14190[(1)]);
if((state_val_14191 === (7))){
var inst_14172 = (state_14190[(7)]);
var inst_14172__$1 = (state_14190[(2)]);
var inst_14173 = (inst_14172__$1 == null);
var inst_14174 = cljs.core.not.call(null,inst_14173);
var state_14190__$1 = (function (){var statearr_14192 = state_14190;
(statearr_14192[(7)] = inst_14172__$1);

return statearr_14192;
})();
if(inst_14174){
var statearr_14193_14214 = state_14190__$1;
(statearr_14193_14214[(1)] = (8));

} else {
var statearr_14194_14215 = state_14190__$1;
(statearr_14194_14215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (1))){
var inst_14167 = (0);
var state_14190__$1 = (function (){var statearr_14195 = state_14190;
(statearr_14195[(8)] = inst_14167);

return statearr_14195;
})();
var statearr_14196_14216 = state_14190__$1;
(statearr_14196_14216[(2)] = null);

(statearr_14196_14216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (4))){
var state_14190__$1 = state_14190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14190__$1,(7),ch);
} else {
if((state_val_14191 === (6))){
var inst_14185 = (state_14190[(2)]);
var state_14190__$1 = state_14190;
var statearr_14197_14217 = state_14190__$1;
(statearr_14197_14217[(2)] = inst_14185);

(statearr_14197_14217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (3))){
var inst_14187 = (state_14190[(2)]);
var inst_14188 = cljs.core.async.close_BANG_.call(null,out);
var state_14190__$1 = (function (){var statearr_14198 = state_14190;
(statearr_14198[(9)] = inst_14187);

return statearr_14198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14190__$1,inst_14188);
} else {
if((state_val_14191 === (2))){
var inst_14167 = (state_14190[(8)]);
var inst_14169 = (inst_14167 < n);
var state_14190__$1 = state_14190;
if(cljs.core.truth_(inst_14169)){
var statearr_14199_14218 = state_14190__$1;
(statearr_14199_14218[(1)] = (4));

} else {
var statearr_14200_14219 = state_14190__$1;
(statearr_14200_14219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (11))){
var inst_14167 = (state_14190[(8)]);
var inst_14177 = (state_14190[(2)]);
var inst_14178 = (inst_14167 + (1));
var inst_14167__$1 = inst_14178;
var state_14190__$1 = (function (){var statearr_14201 = state_14190;
(statearr_14201[(8)] = inst_14167__$1);

(statearr_14201[(10)] = inst_14177);

return statearr_14201;
})();
var statearr_14202_14220 = state_14190__$1;
(statearr_14202_14220[(2)] = null);

(statearr_14202_14220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (9))){
var state_14190__$1 = state_14190;
var statearr_14203_14221 = state_14190__$1;
(statearr_14203_14221[(2)] = null);

(statearr_14203_14221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (5))){
var state_14190__$1 = state_14190;
var statearr_14204_14222 = state_14190__$1;
(statearr_14204_14222[(2)] = null);

(statearr_14204_14222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (10))){
var inst_14182 = (state_14190[(2)]);
var state_14190__$1 = state_14190;
var statearr_14205_14223 = state_14190__$1;
(statearr_14205_14223[(2)] = inst_14182);

(statearr_14205_14223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (8))){
var inst_14172 = (state_14190[(7)]);
var state_14190__$1 = state_14190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14190__$1,(11),out,inst_14172);
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
});})(c__6390__auto___14213,out))
;
return ((function (switch__6334__auto__,c__6390__auto___14213,out){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_14209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14209[(0)] = state_machine__6335__auto__);

(statearr_14209[(1)] = (1));

return statearr_14209;
});
var state_machine__6335__auto____1 = (function (state_14190){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_14190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e14210){if((e14210 instanceof Object)){
var ex__6338__auto__ = e14210;
var statearr_14211_14224 = state_14190;
(statearr_14211_14224[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14225 = state_14190;
state_14190 = G__14225;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_14190){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_14190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___14213,out))
})();
var state__6392__auto__ = (function (){var statearr_14212 = f__6391__auto__.call(null);
(statearr_14212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___14213);

return statearr_14212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___14213,out))
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
if(typeof cljs.core.async.t14233 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14233 = (function (ch,f,map_LT_,meta14234){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14234 = meta14234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14233.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14233.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14236 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14236 = (function (fn1,_,meta14234,map_LT_,f,ch,meta14237){
this.fn1 = fn1;
this._ = _;
this.meta14234 = meta14234;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14237 = meta14237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14236.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14226_SHARP_){
return f1.call(null,(((p1__14226_SHARP_ == null))?null:self__.f.call(null,p1__14226_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14238){
var self__ = this;
var _14238__$1 = this;
return self__.meta14237;
});})(___$1))
;

cljs.core.async.t14236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14238,meta14237__$1){
var self__ = this;
var _14238__$1 = this;
return (new cljs.core.async.t14236(self__.fn1,self__._,self__.meta14234,self__.map_LT_,self__.f,self__.ch,meta14237__$1));
});})(___$1))
;

cljs.core.async.t14236.cljs$lang$type = true;

cljs.core.async.t14236.cljs$lang$ctorStr = "cljs.core.async/t14236";

cljs.core.async.t14236.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14236");
});})(___$1))
;

cljs.core.async.__GT_t14236 = ((function (___$1){
return (function __GT_t14236(fn1__$1,___$2,meta14234__$1,map_LT___$1,f__$1,ch__$1,meta14237){
return (new cljs.core.async.t14236(fn1__$1,___$2,meta14234__$1,map_LT___$1,f__$1,ch__$1,meta14237));
});})(___$1))
;

}

return (new cljs.core.async.t14236(fn1,___$1,self__.meta14234,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3610__auto__ = ret;
if(cljs.core.truth_(and__3610__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3610__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t14233.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14235){
var self__ = this;
var _14235__$1 = this;
return self__.meta14234;
});

cljs.core.async.t14233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14235,meta14234__$1){
var self__ = this;
var _14235__$1 = this;
return (new cljs.core.async.t14233(self__.ch,self__.f,self__.map_LT_,meta14234__$1));
});

cljs.core.async.t14233.cljs$lang$type = true;

cljs.core.async.t14233.cljs$lang$ctorStr = "cljs.core.async/t14233";

cljs.core.async.t14233.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14233");
});

cljs.core.async.__GT_t14233 = (function __GT_t14233(ch__$1,f__$1,map_LT___$1,meta14234){
return (new cljs.core.async.t14233(ch__$1,f__$1,map_LT___$1,meta14234));
});

}

return (new cljs.core.async.t14233(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t14242 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14242 = (function (ch,f,map_GT_,meta14243){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14243 = meta14243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14242.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14242.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14242.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14244){
var self__ = this;
var _14244__$1 = this;
return self__.meta14243;
});

cljs.core.async.t14242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14244,meta14243__$1){
var self__ = this;
var _14244__$1 = this;
return (new cljs.core.async.t14242(self__.ch,self__.f,self__.map_GT_,meta14243__$1));
});

cljs.core.async.t14242.cljs$lang$type = true;

cljs.core.async.t14242.cljs$lang$ctorStr = "cljs.core.async/t14242";

cljs.core.async.t14242.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14242");
});

cljs.core.async.__GT_t14242 = (function __GT_t14242(ch__$1,f__$1,map_GT___$1,meta14243){
return (new cljs.core.async.t14242(ch__$1,f__$1,map_GT___$1,meta14243));
});

}

return (new cljs.core.async.t14242(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t14248 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14248 = (function (ch,p,filter_GT_,meta14249){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14249 = meta14249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14248.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14248.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14248.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14250){
var self__ = this;
var _14250__$1 = this;
return self__.meta14249;
});

cljs.core.async.t14248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14250,meta14249__$1){
var self__ = this;
var _14250__$1 = this;
return (new cljs.core.async.t14248(self__.ch,self__.p,self__.filter_GT_,meta14249__$1));
});

cljs.core.async.t14248.cljs$lang$type = true;

cljs.core.async.t14248.cljs$lang$ctorStr = "cljs.core.async/t14248";

cljs.core.async.t14248.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"cljs.core.async/t14248");
});

cljs.core.async.__GT_t14248 = (function __GT_t14248(ch__$1,p__$1,filter_GT___$1,meta14249){
return (new cljs.core.async.t14248(ch__$1,p__$1,filter_GT___$1,meta14249));
});

}

return (new cljs.core.async.t14248(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"c:\\projects\\IdeaProjects\\cljs-tableau-cnake\\out\\cljs\\core\\async.cljs"], null)));
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
var c__6390__auto___14333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___14333,out){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___14333,out){
return (function (state_14312){
var state_val_14313 = (state_14312[(1)]);
if((state_val_14313 === (7))){
var inst_14308 = (state_14312[(2)]);
var state_14312__$1 = state_14312;
var statearr_14314_14334 = state_14312__$1;
(statearr_14314_14334[(2)] = inst_14308);

(statearr_14314_14334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14313 === (1))){
var state_14312__$1 = state_14312;
var statearr_14315_14335 = state_14312__$1;
(statearr_14315_14335[(2)] = null);

(statearr_14315_14335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14313 === (4))){
var inst_14294 = (state_14312[(7)]);
var inst_14294__$1 = (state_14312[(2)]);
var inst_14295 = (inst_14294__$1 == null);
var state_14312__$1 = (function (){var statearr_14316 = state_14312;
(statearr_14316[(7)] = inst_14294__$1);

return statearr_14316;
})();
if(cljs.core.truth_(inst_14295)){
var statearr_14317_14336 = state_14312__$1;
(statearr_14317_14336[(1)] = (5));

} else {
var statearr_14318_14337 = state_14312__$1;
(statearr_14318_14337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14313 === (6))){
var inst_14294 = (state_14312[(7)]);
var inst_14299 = p.call(null,inst_14294);
var state_14312__$1 = state_14312;
if(cljs.core.truth_(inst_14299)){
var statearr_14319_14338 = state_14312__$1;
(statearr_14319_14338[(1)] = (8));

} else {
var statearr_14320_14339 = state_14312__$1;
(statearr_14320_14339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14313 === (3))){
var inst_14310 = (state_14312[(2)]);
var state_14312__$1 = state_14312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14312__$1,inst_14310);
} else {
if((state_val_14313 === (2))){
var state_14312__$1 = state_14312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14312__$1,(4),ch);
} else {
if((state_val_14313 === (11))){
var inst_14302 = (state_14312[(2)]);
var state_14312__$1 = state_14312;
var statearr_14321_14340 = state_14312__$1;
(statearr_14321_14340[(2)] = inst_14302);

(statearr_14321_14340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14313 === (9))){
var state_14312__$1 = state_14312;
var statearr_14322_14341 = state_14312__$1;
(statearr_14322_14341[(2)] = null);

(statearr_14322_14341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14313 === (5))){
var inst_14297 = cljs.core.async.close_BANG_.call(null,out);
var state_14312__$1 = state_14312;
var statearr_14323_14342 = state_14312__$1;
(statearr_14323_14342[(2)] = inst_14297);

(statearr_14323_14342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14313 === (10))){
var inst_14305 = (state_14312[(2)]);
var state_14312__$1 = (function (){var statearr_14324 = state_14312;
(statearr_14324[(8)] = inst_14305);

return statearr_14324;
})();
var statearr_14325_14343 = state_14312__$1;
(statearr_14325_14343[(2)] = null);

(statearr_14325_14343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14313 === (8))){
var inst_14294 = (state_14312[(7)]);
var state_14312__$1 = state_14312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14312__$1,(11),out,inst_14294);
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
});})(c__6390__auto___14333,out))
;
return ((function (switch__6334__auto__,c__6390__auto___14333,out){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_14329 = [null,null,null,null,null,null,null,null,null];
(statearr_14329[(0)] = state_machine__6335__auto__);

(statearr_14329[(1)] = (1));

return statearr_14329;
});
var state_machine__6335__auto____1 = (function (state_14312){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_14312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e14330){if((e14330 instanceof Object)){
var ex__6338__auto__ = e14330;
var statearr_14331_14344 = state_14312;
(statearr_14331_14344[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14345 = state_14312;
state_14312 = G__14345;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_14312){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_14312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___14333,out))
})();
var state__6392__auto__ = (function (){var statearr_14332 = f__6391__auto__.call(null);
(statearr_14332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___14333);

return statearr_14332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___14333,out))
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
var c__6390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto__){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto__){
return (function (state_14511){
var state_val_14512 = (state_14511[(1)]);
if((state_val_14512 === (7))){
var inst_14507 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
var statearr_14513_14554 = state_14511__$1;
(statearr_14513_14554[(2)] = inst_14507);

(statearr_14513_14554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (20))){
var inst_14477 = (state_14511[(7)]);
var inst_14488 = (state_14511[(2)]);
var inst_14489 = cljs.core.next.call(null,inst_14477);
var inst_14463 = inst_14489;
var inst_14464 = null;
var inst_14465 = (0);
var inst_14466 = (0);
var state_14511__$1 = (function (){var statearr_14514 = state_14511;
(statearr_14514[(8)] = inst_14464);

(statearr_14514[(9)] = inst_14466);

(statearr_14514[(10)] = inst_14463);

(statearr_14514[(11)] = inst_14465);

(statearr_14514[(12)] = inst_14488);

return statearr_14514;
})();
var statearr_14515_14555 = state_14511__$1;
(statearr_14515_14555[(2)] = null);

(statearr_14515_14555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (1))){
var state_14511__$1 = state_14511;
var statearr_14516_14556 = state_14511__$1;
(statearr_14516_14556[(2)] = null);

(statearr_14516_14556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (4))){
var inst_14452 = (state_14511[(13)]);
var inst_14452__$1 = (state_14511[(2)]);
var inst_14453 = (inst_14452__$1 == null);
var state_14511__$1 = (function (){var statearr_14517 = state_14511;
(statearr_14517[(13)] = inst_14452__$1);

return statearr_14517;
})();
if(cljs.core.truth_(inst_14453)){
var statearr_14518_14557 = state_14511__$1;
(statearr_14518_14557[(1)] = (5));

} else {
var statearr_14519_14558 = state_14511__$1;
(statearr_14519_14558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (15))){
var state_14511__$1 = state_14511;
var statearr_14523_14559 = state_14511__$1;
(statearr_14523_14559[(2)] = null);

(statearr_14523_14559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (21))){
var state_14511__$1 = state_14511;
var statearr_14524_14560 = state_14511__$1;
(statearr_14524_14560[(2)] = null);

(statearr_14524_14560[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (13))){
var inst_14464 = (state_14511[(8)]);
var inst_14466 = (state_14511[(9)]);
var inst_14463 = (state_14511[(10)]);
var inst_14465 = (state_14511[(11)]);
var inst_14473 = (state_14511[(2)]);
var inst_14474 = (inst_14466 + (1));
var tmp14520 = inst_14464;
var tmp14521 = inst_14463;
var tmp14522 = inst_14465;
var inst_14463__$1 = tmp14521;
var inst_14464__$1 = tmp14520;
var inst_14465__$1 = tmp14522;
var inst_14466__$1 = inst_14474;
var state_14511__$1 = (function (){var statearr_14525 = state_14511;
(statearr_14525[(8)] = inst_14464__$1);

(statearr_14525[(9)] = inst_14466__$1);

(statearr_14525[(14)] = inst_14473);

(statearr_14525[(10)] = inst_14463__$1);

(statearr_14525[(11)] = inst_14465__$1);

return statearr_14525;
})();
var statearr_14526_14561 = state_14511__$1;
(statearr_14526_14561[(2)] = null);

(statearr_14526_14561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (22))){
var state_14511__$1 = state_14511;
var statearr_14527_14562 = state_14511__$1;
(statearr_14527_14562[(2)] = null);

(statearr_14527_14562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (6))){
var inst_14452 = (state_14511[(13)]);
var inst_14461 = f.call(null,inst_14452);
var inst_14462 = cljs.core.seq.call(null,inst_14461);
var inst_14463 = inst_14462;
var inst_14464 = null;
var inst_14465 = (0);
var inst_14466 = (0);
var state_14511__$1 = (function (){var statearr_14528 = state_14511;
(statearr_14528[(8)] = inst_14464);

(statearr_14528[(9)] = inst_14466);

(statearr_14528[(10)] = inst_14463);

(statearr_14528[(11)] = inst_14465);

return statearr_14528;
})();
var statearr_14529_14563 = state_14511__$1;
(statearr_14529_14563[(2)] = null);

(statearr_14529_14563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (17))){
var inst_14477 = (state_14511[(7)]);
var inst_14481 = cljs.core.chunk_first.call(null,inst_14477);
var inst_14482 = cljs.core.chunk_rest.call(null,inst_14477);
var inst_14483 = cljs.core.count.call(null,inst_14481);
var inst_14463 = inst_14482;
var inst_14464 = inst_14481;
var inst_14465 = inst_14483;
var inst_14466 = (0);
var state_14511__$1 = (function (){var statearr_14530 = state_14511;
(statearr_14530[(8)] = inst_14464);

(statearr_14530[(9)] = inst_14466);

(statearr_14530[(10)] = inst_14463);

(statearr_14530[(11)] = inst_14465);

return statearr_14530;
})();
var statearr_14531_14564 = state_14511__$1;
(statearr_14531_14564[(2)] = null);

(statearr_14531_14564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (3))){
var inst_14509 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14511__$1,inst_14509);
} else {
if((state_val_14512 === (12))){
var inst_14497 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
var statearr_14532_14565 = state_14511__$1;
(statearr_14532_14565[(2)] = inst_14497);

(statearr_14532_14565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (2))){
var state_14511__$1 = state_14511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14511__$1,(4),in$);
} else {
if((state_val_14512 === (23))){
var inst_14505 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
var statearr_14533_14566 = state_14511__$1;
(statearr_14533_14566[(2)] = inst_14505);

(statearr_14533_14566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (19))){
var inst_14492 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
var statearr_14534_14567 = state_14511__$1;
(statearr_14534_14567[(2)] = inst_14492);

(statearr_14534_14567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (11))){
var inst_14463 = (state_14511[(10)]);
var inst_14477 = (state_14511[(7)]);
var inst_14477__$1 = cljs.core.seq.call(null,inst_14463);
var state_14511__$1 = (function (){var statearr_14535 = state_14511;
(statearr_14535[(7)] = inst_14477__$1);

return statearr_14535;
})();
if(inst_14477__$1){
var statearr_14536_14568 = state_14511__$1;
(statearr_14536_14568[(1)] = (14));

} else {
var statearr_14537_14569 = state_14511__$1;
(statearr_14537_14569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (9))){
var inst_14499 = (state_14511[(2)]);
var inst_14500 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14511__$1 = (function (){var statearr_14538 = state_14511;
(statearr_14538[(15)] = inst_14499);

return statearr_14538;
})();
if(cljs.core.truth_(inst_14500)){
var statearr_14539_14570 = state_14511__$1;
(statearr_14539_14570[(1)] = (21));

} else {
var statearr_14540_14571 = state_14511__$1;
(statearr_14540_14571[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (5))){
var inst_14455 = cljs.core.async.close_BANG_.call(null,out);
var state_14511__$1 = state_14511;
var statearr_14541_14572 = state_14511__$1;
(statearr_14541_14572[(2)] = inst_14455);

(statearr_14541_14572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (14))){
var inst_14477 = (state_14511[(7)]);
var inst_14479 = cljs.core.chunked_seq_QMARK_.call(null,inst_14477);
var state_14511__$1 = state_14511;
if(inst_14479){
var statearr_14542_14573 = state_14511__$1;
(statearr_14542_14573[(1)] = (17));

} else {
var statearr_14543_14574 = state_14511__$1;
(statearr_14543_14574[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (16))){
var inst_14495 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
var statearr_14544_14575 = state_14511__$1;
(statearr_14544_14575[(2)] = inst_14495);

(statearr_14544_14575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (10))){
var inst_14464 = (state_14511[(8)]);
var inst_14466 = (state_14511[(9)]);
var inst_14471 = cljs.core._nth.call(null,inst_14464,inst_14466);
var state_14511__$1 = state_14511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14511__$1,(13),out,inst_14471);
} else {
if((state_val_14512 === (18))){
var inst_14477 = (state_14511[(7)]);
var inst_14486 = cljs.core.first.call(null,inst_14477);
var state_14511__$1 = state_14511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14511__$1,(20),out,inst_14486);
} else {
if((state_val_14512 === (8))){
var inst_14466 = (state_14511[(9)]);
var inst_14465 = (state_14511[(11)]);
var inst_14468 = (inst_14466 < inst_14465);
var inst_14469 = inst_14468;
var state_14511__$1 = state_14511;
if(cljs.core.truth_(inst_14469)){
var statearr_14545_14576 = state_14511__$1;
(statearr_14545_14576[(1)] = (10));

} else {
var statearr_14546_14577 = state_14511__$1;
(statearr_14546_14577[(1)] = (11));

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
});})(c__6390__auto__))
;
return ((function (switch__6334__auto__,c__6390__auto__){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_14550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14550[(0)] = state_machine__6335__auto__);

(statearr_14550[(1)] = (1));

return statearr_14550;
});
var state_machine__6335__auto____1 = (function (state_14511){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_14511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e14551){if((e14551 instanceof Object)){
var ex__6338__auto__ = e14551;
var statearr_14552_14578 = state_14511;
(statearr_14552_14578[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14579 = state_14511;
state_14511 = G__14579;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_14511){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_14511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto__))
})();
var state__6392__auto__ = (function (){var statearr_14553 = f__6391__auto__.call(null);
(statearr_14553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto__);

return statearr_14553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto__))
);

return c__6390__auto__;
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
var c__6390__auto___14676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___14676,out){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___14676,out){
return (function (state_14651){
var state_val_14652 = (state_14651[(1)]);
if((state_val_14652 === (7))){
var inst_14646 = (state_14651[(2)]);
var state_14651__$1 = state_14651;
var statearr_14653_14677 = state_14651__$1;
(statearr_14653_14677[(2)] = inst_14646);

(statearr_14653_14677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (1))){
var inst_14628 = null;
var state_14651__$1 = (function (){var statearr_14654 = state_14651;
(statearr_14654[(7)] = inst_14628);

return statearr_14654;
})();
var statearr_14655_14678 = state_14651__$1;
(statearr_14655_14678[(2)] = null);

(statearr_14655_14678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (4))){
var inst_14631 = (state_14651[(8)]);
var inst_14631__$1 = (state_14651[(2)]);
var inst_14632 = (inst_14631__$1 == null);
var inst_14633 = cljs.core.not.call(null,inst_14632);
var state_14651__$1 = (function (){var statearr_14656 = state_14651;
(statearr_14656[(8)] = inst_14631__$1);

return statearr_14656;
})();
if(inst_14633){
var statearr_14657_14679 = state_14651__$1;
(statearr_14657_14679[(1)] = (5));

} else {
var statearr_14658_14680 = state_14651__$1;
(statearr_14658_14680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (6))){
var state_14651__$1 = state_14651;
var statearr_14659_14681 = state_14651__$1;
(statearr_14659_14681[(2)] = null);

(statearr_14659_14681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (3))){
var inst_14648 = (state_14651[(2)]);
var inst_14649 = cljs.core.async.close_BANG_.call(null,out);
var state_14651__$1 = (function (){var statearr_14660 = state_14651;
(statearr_14660[(9)] = inst_14648);

return statearr_14660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14651__$1,inst_14649);
} else {
if((state_val_14652 === (2))){
var state_14651__$1 = state_14651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14651__$1,(4),ch);
} else {
if((state_val_14652 === (11))){
var inst_14631 = (state_14651[(8)]);
var inst_14640 = (state_14651[(2)]);
var inst_14628 = inst_14631;
var state_14651__$1 = (function (){var statearr_14661 = state_14651;
(statearr_14661[(7)] = inst_14628);

(statearr_14661[(10)] = inst_14640);

return statearr_14661;
})();
var statearr_14662_14682 = state_14651__$1;
(statearr_14662_14682[(2)] = null);

(statearr_14662_14682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (9))){
var inst_14631 = (state_14651[(8)]);
var state_14651__$1 = state_14651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14651__$1,(11),out,inst_14631);
} else {
if((state_val_14652 === (5))){
var inst_14628 = (state_14651[(7)]);
var inst_14631 = (state_14651[(8)]);
var inst_14635 = cljs.core._EQ_.call(null,inst_14631,inst_14628);
var state_14651__$1 = state_14651;
if(inst_14635){
var statearr_14664_14683 = state_14651__$1;
(statearr_14664_14683[(1)] = (8));

} else {
var statearr_14665_14684 = state_14651__$1;
(statearr_14665_14684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (10))){
var inst_14643 = (state_14651[(2)]);
var state_14651__$1 = state_14651;
var statearr_14666_14685 = state_14651__$1;
(statearr_14666_14685[(2)] = inst_14643);

(statearr_14666_14685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (8))){
var inst_14628 = (state_14651[(7)]);
var tmp14663 = inst_14628;
var inst_14628__$1 = tmp14663;
var state_14651__$1 = (function (){var statearr_14667 = state_14651;
(statearr_14667[(7)] = inst_14628__$1);

return statearr_14667;
})();
var statearr_14668_14686 = state_14651__$1;
(statearr_14668_14686[(2)] = null);

(statearr_14668_14686[(1)] = (2));


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
});})(c__6390__auto___14676,out))
;
return ((function (switch__6334__auto__,c__6390__auto___14676,out){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_14672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14672[(0)] = state_machine__6335__auto__);

(statearr_14672[(1)] = (1));

return statearr_14672;
});
var state_machine__6335__auto____1 = (function (state_14651){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_14651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e14673){if((e14673 instanceof Object)){
var ex__6338__auto__ = e14673;
var statearr_14674_14687 = state_14651;
(statearr_14674_14687[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14688 = state_14651;
state_14651 = G__14688;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_14651){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_14651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___14676,out))
})();
var state__6392__auto__ = (function (){var statearr_14675 = f__6391__auto__.call(null);
(statearr_14675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___14676);

return statearr_14675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___14676,out))
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
var c__6390__auto___14823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___14823,out){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___14823,out){
return (function (state_14793){
var state_val_14794 = (state_14793[(1)]);
if((state_val_14794 === (7))){
var inst_14789 = (state_14793[(2)]);
var state_14793__$1 = state_14793;
var statearr_14795_14824 = state_14793__$1;
(statearr_14795_14824[(2)] = inst_14789);

(statearr_14795_14824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (1))){
var inst_14756 = (new Array(n));
var inst_14757 = inst_14756;
var inst_14758 = (0);
var state_14793__$1 = (function (){var statearr_14796 = state_14793;
(statearr_14796[(7)] = inst_14758);

(statearr_14796[(8)] = inst_14757);

return statearr_14796;
})();
var statearr_14797_14825 = state_14793__$1;
(statearr_14797_14825[(2)] = null);

(statearr_14797_14825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (4))){
var inst_14761 = (state_14793[(9)]);
var inst_14761__$1 = (state_14793[(2)]);
var inst_14762 = (inst_14761__$1 == null);
var inst_14763 = cljs.core.not.call(null,inst_14762);
var state_14793__$1 = (function (){var statearr_14798 = state_14793;
(statearr_14798[(9)] = inst_14761__$1);

return statearr_14798;
})();
if(inst_14763){
var statearr_14799_14826 = state_14793__$1;
(statearr_14799_14826[(1)] = (5));

} else {
var statearr_14800_14827 = state_14793__$1;
(statearr_14800_14827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (15))){
var inst_14783 = (state_14793[(2)]);
var state_14793__$1 = state_14793;
var statearr_14801_14828 = state_14793__$1;
(statearr_14801_14828[(2)] = inst_14783);

(statearr_14801_14828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (13))){
var state_14793__$1 = state_14793;
var statearr_14802_14829 = state_14793__$1;
(statearr_14802_14829[(2)] = null);

(statearr_14802_14829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (6))){
var inst_14758 = (state_14793[(7)]);
var inst_14779 = (inst_14758 > (0));
var state_14793__$1 = state_14793;
if(cljs.core.truth_(inst_14779)){
var statearr_14803_14830 = state_14793__$1;
(statearr_14803_14830[(1)] = (12));

} else {
var statearr_14804_14831 = state_14793__$1;
(statearr_14804_14831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (3))){
var inst_14791 = (state_14793[(2)]);
var state_14793__$1 = state_14793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14793__$1,inst_14791);
} else {
if((state_val_14794 === (12))){
var inst_14757 = (state_14793[(8)]);
var inst_14781 = cljs.core.vec.call(null,inst_14757);
var state_14793__$1 = state_14793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14793__$1,(15),out,inst_14781);
} else {
if((state_val_14794 === (2))){
var state_14793__$1 = state_14793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14793__$1,(4),ch);
} else {
if((state_val_14794 === (11))){
var inst_14773 = (state_14793[(2)]);
var inst_14774 = (new Array(n));
var inst_14757 = inst_14774;
var inst_14758 = (0);
var state_14793__$1 = (function (){var statearr_14805 = state_14793;
(statearr_14805[(7)] = inst_14758);

(statearr_14805[(8)] = inst_14757);

(statearr_14805[(10)] = inst_14773);

return statearr_14805;
})();
var statearr_14806_14832 = state_14793__$1;
(statearr_14806_14832[(2)] = null);

(statearr_14806_14832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (9))){
var inst_14757 = (state_14793[(8)]);
var inst_14771 = cljs.core.vec.call(null,inst_14757);
var state_14793__$1 = state_14793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14793__$1,(11),out,inst_14771);
} else {
if((state_val_14794 === (5))){
var inst_14761 = (state_14793[(9)]);
var inst_14758 = (state_14793[(7)]);
var inst_14766 = (state_14793[(11)]);
var inst_14757 = (state_14793[(8)]);
var inst_14765 = (inst_14757[inst_14758] = inst_14761);
var inst_14766__$1 = (inst_14758 + (1));
var inst_14767 = (inst_14766__$1 < n);
var state_14793__$1 = (function (){var statearr_14807 = state_14793;
(statearr_14807[(12)] = inst_14765);

(statearr_14807[(11)] = inst_14766__$1);

return statearr_14807;
})();
if(cljs.core.truth_(inst_14767)){
var statearr_14808_14833 = state_14793__$1;
(statearr_14808_14833[(1)] = (8));

} else {
var statearr_14809_14834 = state_14793__$1;
(statearr_14809_14834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (14))){
var inst_14786 = (state_14793[(2)]);
var inst_14787 = cljs.core.async.close_BANG_.call(null,out);
var state_14793__$1 = (function (){var statearr_14811 = state_14793;
(statearr_14811[(13)] = inst_14786);

return statearr_14811;
})();
var statearr_14812_14835 = state_14793__$1;
(statearr_14812_14835[(2)] = inst_14787);

(statearr_14812_14835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (10))){
var inst_14777 = (state_14793[(2)]);
var state_14793__$1 = state_14793;
var statearr_14813_14836 = state_14793__$1;
(statearr_14813_14836[(2)] = inst_14777);

(statearr_14813_14836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (8))){
var inst_14766 = (state_14793[(11)]);
var inst_14757 = (state_14793[(8)]);
var tmp14810 = inst_14757;
var inst_14757__$1 = tmp14810;
var inst_14758 = inst_14766;
var state_14793__$1 = (function (){var statearr_14814 = state_14793;
(statearr_14814[(7)] = inst_14758);

(statearr_14814[(8)] = inst_14757__$1);

return statearr_14814;
})();
var statearr_14815_14837 = state_14793__$1;
(statearr_14815_14837[(2)] = null);

(statearr_14815_14837[(1)] = (2));


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
});})(c__6390__auto___14823,out))
;
return ((function (switch__6334__auto__,c__6390__auto___14823,out){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_14819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14819[(0)] = state_machine__6335__auto__);

(statearr_14819[(1)] = (1));

return statearr_14819;
});
var state_machine__6335__auto____1 = (function (state_14793){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_14793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e14820){if((e14820 instanceof Object)){
var ex__6338__auto__ = e14820;
var statearr_14821_14838 = state_14793;
(statearr_14821_14838[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14839 = state_14793;
state_14793 = G__14839;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_14793){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_14793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___14823,out))
})();
var state__6392__auto__ = (function (){var statearr_14822 = f__6391__auto__.call(null);
(statearr_14822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___14823);

return statearr_14822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___14823,out))
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
var c__6390__auto___14982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6390__auto___14982,out){
return (function (){
var f__6391__auto__ = (function (){var switch__6334__auto__ = ((function (c__6390__auto___14982,out){
return (function (state_14952){
var state_val_14953 = (state_14952[(1)]);
if((state_val_14953 === (7))){
var inst_14948 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14954_14983 = state_14952__$1;
(statearr_14954_14983[(2)] = inst_14948);

(statearr_14954_14983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (1))){
var inst_14911 = [];
var inst_14912 = inst_14911;
var inst_14913 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14952__$1 = (function (){var statearr_14955 = state_14952;
(statearr_14955[(7)] = inst_14913);

(statearr_14955[(8)] = inst_14912);

return statearr_14955;
})();
var statearr_14956_14984 = state_14952__$1;
(statearr_14956_14984[(2)] = null);

(statearr_14956_14984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (4))){
var inst_14916 = (state_14952[(9)]);
var inst_14916__$1 = (state_14952[(2)]);
var inst_14917 = (inst_14916__$1 == null);
var inst_14918 = cljs.core.not.call(null,inst_14917);
var state_14952__$1 = (function (){var statearr_14957 = state_14952;
(statearr_14957[(9)] = inst_14916__$1);

return statearr_14957;
})();
if(inst_14918){
var statearr_14958_14985 = state_14952__$1;
(statearr_14958_14985[(1)] = (5));

} else {
var statearr_14959_14986 = state_14952__$1;
(statearr_14959_14986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (15))){
var inst_14942 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14960_14987 = state_14952__$1;
(statearr_14960_14987[(2)] = inst_14942);

(statearr_14960_14987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (13))){
var state_14952__$1 = state_14952;
var statearr_14961_14988 = state_14952__$1;
(statearr_14961_14988[(2)] = null);

(statearr_14961_14988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (6))){
var inst_14912 = (state_14952[(8)]);
var inst_14937 = inst_14912.length;
var inst_14938 = (inst_14937 > (0));
var state_14952__$1 = state_14952;
if(cljs.core.truth_(inst_14938)){
var statearr_14962_14989 = state_14952__$1;
(statearr_14962_14989[(1)] = (12));

} else {
var statearr_14963_14990 = state_14952__$1;
(statearr_14963_14990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (3))){
var inst_14950 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14952__$1,inst_14950);
} else {
if((state_val_14953 === (12))){
var inst_14912 = (state_14952[(8)]);
var inst_14940 = cljs.core.vec.call(null,inst_14912);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14952__$1,(15),out,inst_14940);
} else {
if((state_val_14953 === (2))){
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14952__$1,(4),ch);
} else {
if((state_val_14953 === (11))){
var inst_14920 = (state_14952[(10)]);
var inst_14916 = (state_14952[(9)]);
var inst_14930 = (state_14952[(2)]);
var inst_14931 = [];
var inst_14932 = inst_14931.push(inst_14916);
var inst_14912 = inst_14931;
var inst_14913 = inst_14920;
var state_14952__$1 = (function (){var statearr_14964 = state_14952;
(statearr_14964[(11)] = inst_14932);

(statearr_14964[(7)] = inst_14913);

(statearr_14964[(8)] = inst_14912);

(statearr_14964[(12)] = inst_14930);

return statearr_14964;
})();
var statearr_14965_14991 = state_14952__$1;
(statearr_14965_14991[(2)] = null);

(statearr_14965_14991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (9))){
var inst_14912 = (state_14952[(8)]);
var inst_14928 = cljs.core.vec.call(null,inst_14912);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14952__$1,(11),out,inst_14928);
} else {
if((state_val_14953 === (5))){
var inst_14913 = (state_14952[(7)]);
var inst_14920 = (state_14952[(10)]);
var inst_14916 = (state_14952[(9)]);
var inst_14920__$1 = f.call(null,inst_14916);
var inst_14921 = cljs.core._EQ_.call(null,inst_14920__$1,inst_14913);
var inst_14922 = cljs.core.keyword_identical_QMARK_.call(null,inst_14913,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14923 = (inst_14921) || (inst_14922);
var state_14952__$1 = (function (){var statearr_14966 = state_14952;
(statearr_14966[(10)] = inst_14920__$1);

return statearr_14966;
})();
if(cljs.core.truth_(inst_14923)){
var statearr_14967_14992 = state_14952__$1;
(statearr_14967_14992[(1)] = (8));

} else {
var statearr_14968_14993 = state_14952__$1;
(statearr_14968_14993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (14))){
var inst_14945 = (state_14952[(2)]);
var inst_14946 = cljs.core.async.close_BANG_.call(null,out);
var state_14952__$1 = (function (){var statearr_14970 = state_14952;
(statearr_14970[(13)] = inst_14945);

return statearr_14970;
})();
var statearr_14971_14994 = state_14952__$1;
(statearr_14971_14994[(2)] = inst_14946);

(statearr_14971_14994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (10))){
var inst_14935 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14972_14995 = state_14952__$1;
(statearr_14972_14995[(2)] = inst_14935);

(statearr_14972_14995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (8))){
var inst_14912 = (state_14952[(8)]);
var inst_14920 = (state_14952[(10)]);
var inst_14916 = (state_14952[(9)]);
var inst_14925 = inst_14912.push(inst_14916);
var tmp14969 = inst_14912;
var inst_14912__$1 = tmp14969;
var inst_14913 = inst_14920;
var state_14952__$1 = (function (){var statearr_14973 = state_14952;
(statearr_14973[(14)] = inst_14925);

(statearr_14973[(7)] = inst_14913);

(statearr_14973[(8)] = inst_14912__$1);

return statearr_14973;
})();
var statearr_14974_14996 = state_14952__$1;
(statearr_14974_14996[(2)] = null);

(statearr_14974_14996[(1)] = (2));


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
});})(c__6390__auto___14982,out))
;
return ((function (switch__6334__auto__,c__6390__auto___14982,out){
return (function() {
var state_machine__6335__auto__ = null;
var state_machine__6335__auto____0 = (function (){
var statearr_14978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14978[(0)] = state_machine__6335__auto__);

(statearr_14978[(1)] = (1));

return statearr_14978;
});
var state_machine__6335__auto____1 = (function (state_14952){
while(true){
var ret_value__6336__auto__ = (function (){try{while(true){
var result__6337__auto__ = switch__6334__auto__.call(null,state_14952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6337__auto__;
}
break;
}
}catch (e14979){if((e14979 instanceof Object)){
var ex__6338__auto__ = e14979;
var statearr_14980_14997 = state_14952;
(statearr_14980_14997[(5)] = ex__6338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14998 = state_14952;
state_14952 = G__14998;
continue;
} else {
return ret_value__6336__auto__;
}
break;
}
});
state_machine__6335__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return state_machine__6335__auto____0.call(this);
case 1:
return state_machine__6335__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6335__auto____0;
state_machine__6335__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6335__auto____1;
return state_machine__6335__auto__;
})()
;})(switch__6334__auto__,c__6390__auto___14982,out))
})();
var state__6392__auto__ = (function (){var statearr_14981 = f__6391__auto__.call(null);
(statearr_14981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6390__auto___14982);

return statearr_14981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6392__auto__);
});})(c__6390__auto___14982,out))
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