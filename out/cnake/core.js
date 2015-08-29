// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cnake.tableau');
goog.require('cnake.ui');
cljs.core.enable_console_print_BANG_.call(null);
var c__5911__auto___10066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___10066){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___10066){
return (function (state_10056){
var state_val_10057 = (state_10056[(1)]);
if((state_val_10057 === (2))){
var inst_10050 = (state_10056[(2)]);
var inst_10051 = document.getElementsByTagName("iframe");
var inst_10052 = (inst_10051[(0)]);
var inst_10053 = inst_10052.blur();
var inst_10054 = cnake.ui.init.call(null);
var state_10056__$1 = (function (){var statearr_10058 = state_10056;
(statearr_10058[(7)] = inst_10053);

(statearr_10058[(8)] = inst_10050);

return statearr_10058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10056__$1,inst_10054);
} else {
if((state_val_10057 === (1))){
var state_10056__$1 = state_10056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10056__$1,(2),cnake.tableau.tableau_viz_ready_channel);
} else {
return null;
}
}
});})(c__5911__auto___10066))
;
return ((function (switch__5896__auto__,c__5911__auto___10066){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_10062 = [null,null,null,null,null,null,null,null,null];
(statearr_10062[(0)] = state_machine__5897__auto__);

(statearr_10062[(1)] = (1));

return statearr_10062;
});
var state_machine__5897__auto____1 = (function (state_10056){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_10056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e10063){if((e10063 instanceof Object)){
var ex__5900__auto__ = e10063;
var statearr_10064_10067 = state_10056;
(statearr_10064_10067[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10068 = state_10056;
state_10056 = G__10068;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_10056){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_10056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___10066))
})();
var state__5913__auto__ = (function (){var statearr_10065 = f__5912__auto__.call(null);
(statearr_10065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___10066);

return statearr_10065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___10066))
);


//# sourceMappingURL=core.js.map