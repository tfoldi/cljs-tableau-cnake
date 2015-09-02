// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cnake.intercom');
goog.require('cnake.tableau');
goog.require('cnake.ui');
cljs.core.enable_console_print_BANG_.call(null);
var c__5911__auto___13925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5911__auto___13925){
return (function (){
var f__5912__auto__ = (function (){var switch__5896__auto__ = ((function (c__5911__auto___13925){
return (function (state_13915){
var state_val_13916 = (state_13915[(1)]);
if((state_val_13916 === (2))){
var inst_13909 = (state_13915[(2)]);
var inst_13910 = document.getElementsByTagName("iframe");
var inst_13911 = (inst_13910[(0)]);
var inst_13912 = inst_13911.blur();
var inst_13913 = cnake.ui.init.call(null);
var state_13915__$1 = (function (){var statearr_13917 = state_13915;
(statearr_13917[(7)] = inst_13912);

(statearr_13917[(8)] = inst_13909);

return statearr_13917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13915__$1,inst_13913);
} else {
if((state_val_13916 === (1))){
var state_13915__$1 = state_13915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13915__$1,(2),cnake.intercom.tableau_viz_ready_channel);
} else {
return null;
}
}
});})(c__5911__auto___13925))
;
return ((function (switch__5896__auto__,c__5911__auto___13925){
return (function() {
var state_machine__5897__auto__ = null;
var state_machine__5897__auto____0 = (function (){
var statearr_13921 = [null,null,null,null,null,null,null,null,null];
(statearr_13921[(0)] = state_machine__5897__auto__);

(statearr_13921[(1)] = (1));

return statearr_13921;
});
var state_machine__5897__auto____1 = (function (state_13915){
while(true){
var ret_value__5898__auto__ = (function (){try{while(true){
var result__5899__auto__ = switch__5896__auto__.call(null,state_13915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5899__auto__;
}
break;
}
}catch (e13922){if((e13922 instanceof Object)){
var ex__5900__auto__ = e13922;
var statearr_13923_13926 = state_13915;
(statearr_13923_13926[(5)] = ex__5900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13927 = state_13915;
state_13915 = G__13927;
continue;
} else {
return ret_value__5898__auto__;
}
break;
}
});
state_machine__5897__auto__ = function(state_13915){
switch(arguments.length){
case 0:
return state_machine__5897__auto____0.call(this);
case 1:
return state_machine__5897__auto____1.call(this,state_13915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5897__auto____0;
state_machine__5897__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5897__auto____1;
return state_machine__5897__auto__;
})()
;})(switch__5896__auto__,c__5911__auto___13925))
})();
var state__5913__auto__ = (function (){var statearr_13924 = f__5912__auto__.call(null);
(statearr_13924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5911__auto___13925);

return statearr_13924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5913__auto__);
});})(c__5911__auto___13925))
);


//# sourceMappingURL=core.js.map