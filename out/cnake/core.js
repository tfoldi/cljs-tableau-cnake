// Compiled by ClojureScript 0.0-2505
goog.provide('cnake.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cnake.tableau');
goog.require('cnake.ui');
cljs.core.enable_console_print_BANG_.call(null);
var c__6456__auto___21360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6456__auto___21360){
return (function (){
var f__6457__auto__ = (function (){var switch__6400__auto__ = ((function (c__6456__auto___21360){
return (function (state_21350){
var state_val_21351 = (state_21350[(1)]);
if((state_val_21351 === (2))){
var inst_21344 = (state_21350[(2)]);
var inst_21345 = document.getElementsByTagName("iframe");
var inst_21346 = (inst_21345[(0)]);
var inst_21347 = inst_21346.blur();
var inst_21348 = cnake.ui.init.call(null);
var state_21350__$1 = (function (){var statearr_21352 = state_21350;
(statearr_21352[(7)] = inst_21344);

(statearr_21352[(8)] = inst_21347);

return statearr_21352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21350__$1,inst_21348);
} else {
if((state_val_21351 === (1))){
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21350__$1,(2),cnake.tableau.tableau_viz_ready_channel);
} else {
return null;
}
}
});})(c__6456__auto___21360))
;
return ((function (switch__6400__auto__,c__6456__auto___21360){
return (function() {
var state_machine__6401__auto__ = null;
var state_machine__6401__auto____0 = (function (){
var statearr_21356 = [null,null,null,null,null,null,null,null,null];
(statearr_21356[(0)] = state_machine__6401__auto__);

(statearr_21356[(1)] = (1));

return statearr_21356;
});
var state_machine__6401__auto____1 = (function (state_21350){
while(true){
var ret_value__6402__auto__ = (function (){try{while(true){
var result__6403__auto__ = switch__6400__auto__.call(null,state_21350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6403__auto__;
}
break;
}
}catch (e21357){if((e21357 instanceof Object)){
var ex__6404__auto__ = e21357;
var statearr_21358_21361 = state_21350;
(statearr_21358_21361[(5)] = ex__6404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21362 = state_21350;
state_21350 = G__21362;
continue;
} else {
return ret_value__6402__auto__;
}
break;
}
});
state_machine__6401__auto__ = function(state_21350){
switch(arguments.length){
case 0:
return state_machine__6401__auto____0.call(this);
case 1:
return state_machine__6401__auto____1.call(this,state_21350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6401__auto____0;
state_machine__6401__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6401__auto____1;
return state_machine__6401__auto__;
})()
;})(switch__6400__auto__,c__6456__auto___21360))
})();
var state__6458__auto__ = (function (){var statearr_21359 = f__6457__auto__.call(null);
(statearr_21359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6456__auto___21360);

return statearr_21359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6458__auto__);
});})(c__6456__auto___21360))
);


//# sourceMappingURL=core.js.map