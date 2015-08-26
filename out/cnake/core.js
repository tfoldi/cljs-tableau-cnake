// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cnake.tableau');
goog.require('cnake.ui');
cljs.core.enable_console_print_BANG_.call(null);
var c__6456__auto___16011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6456__auto___16011){
return (function (){
var f__6457__auto__ = (function (){var switch__6400__auto__ = ((function (c__6456__auto___16011){
return (function (state_16001){
var state_val_16002 = (state_16001[(1)]);
if((state_val_16002 === (2))){
var inst_15998 = (state_16001[(2)]);
var inst_15999 = cnake.ui.init.call(null);
var state_16001__$1 = (function (){var statearr_16003 = state_16001;
(statearr_16003[(7)] = inst_15998);

return statearr_16003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16001__$1,inst_15999);
} else {
if((state_val_16002 === (1))){
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16001__$1,(2),cnake.tableau.tableau_viz_ready_channel);
} else {
return null;
}
}
});})(c__6456__auto___16011))
;
return ((function (switch__6400__auto__,c__6456__auto___16011){
return (function() {
var state_machine__6401__auto__ = null;
var state_machine__6401__auto____0 = (function (){
var statearr_16007 = [null,null,null,null,null,null,null,null];
(statearr_16007[(0)] = state_machine__6401__auto__);

(statearr_16007[(1)] = (1));

return statearr_16007;
});
var state_machine__6401__auto____1 = (function (state_16001){
while(true){
var ret_value__6402__auto__ = (function (){try{while(true){
var result__6403__auto__ = switch__6400__auto__.call(null,state_16001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6403__auto__;
}
break;
}
}catch (e16008){if((e16008 instanceof Object)){
var ex__6404__auto__ = e16008;
var statearr_16009_16012 = state_16001;
(statearr_16009_16012[(5)] = ex__6404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16013 = state_16001;
state_16001 = G__16013;
continue;
} else {
return ret_value__6402__auto__;
}
break;
}
});
state_machine__6401__auto__ = function(state_16001){
switch(arguments.length){
case 0:
return state_machine__6401__auto____0.call(this);
case 1:
return state_machine__6401__auto____1.call(this,state_16001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6401__auto____0;
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6401__auto____1;
return state_machine__6401__auto__;
})()
;})(switch__6400__auto__,c__6456__auto___16011))
})();
var state__6458__auto__ = (function (){var statearr_16010 = f__6457__auto__.call(null);
(statearr_16010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6456__auto___16011);

return statearr_16010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6458__auto__);
});})(c__6456__auto___16011))
);


//# sourceMappingURL=core.js.map