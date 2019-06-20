// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["../../Component","dojo/date/locale","../../Buttons/Toggle","dojo/i18n!../../DateSelection/DateRangeSelector/nls/resources","../../DateSelection/DatePicker"],function(k,m,n,p,q){return function(e){function c(a){if(b[a])return b[a].exports;var d=b[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,c),d.l=!0,d.exports}var b={};return c.m=e,c.c=b,c.d=function(a,d,b){c.o(a,d)||Object.defineProperty(a,d,{enumerable:!0,get:b})},c.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&
Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,d){if((1&d&&(a=c(a)),8&d)||4&d&&"object"==typeof a&&a&&a.__esModule)return a;var b=Object.create(null);if(c.r(b),Object.defineProperty(b,"default",{enumerable:!0,value:a}),2&d&&"string"!=typeof a)for(var h in a)c.d(b,h,function(d){return a[d]}.bind(null,h));return b},c.n=function(a){var d=a&&a.__esModule?function(){return a.default}:function(){return a};return c.d(d,"a",d),
d},c.o=function(a,d){return Object.prototype.hasOwnProperty.call(a,d)},c.p="",c(c.s=367)}({0:function(e,c,b){function a(a,b){function c(){this.constructor=a}d(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}b.d(c,"b",function(){return a});b.d(c,"a",function(){return f});var d=function(a,b){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])})(a,b)},f=function(){return(f=
Object.assign||function(b){for(var a,d=1,c=arguments.length;d<c;d++)for(var e in a=arguments[d])Object.prototype.hasOwnProperty.call(a,e)&&(b[e]=a[e]);return b}).apply(this,arguments)}},130:function(e,c,b){var a=b(0),d=b(46),f=b(24);c.a=function(b,c){var e=new Date,g=e.getTime();e.setHours(0,0,0,0);e=e.getTime();switch(b){case "today":return{start:e,end:g,label:d.today};case "yesterday":return{start:e-864E5,end:e,label:d.yesterday};case "last7Days":return{start:g-6048E5,end:g,label:d.last7Days};case "last30Days":return{start:g-
2592E6,end:g,label:d.last30Days};case "custom":if(c)return b=f.format(new Date(c.start),{selector:"date",formatLength:"short"}),g=f.format(new Date(c.end),{selector:"date",formatLength:"short"}),a.a({},c,{label:b+"\u2014"+g})}}},138:function(e,c){e.exports=q},203:function(e,c,b){var a=b(0);e=b(4);var d=b(26),f=b.n(d);b=function(b){function d(a){return b.call(this,a)||this}return a.b(d,b),d.prototype.render=function(b){var a=this;return this.props.options.map(function(d){return b(f.a,{key:d.value,
name:d.displayName,value:d.value,selectedToggle:a.props.selectedOption,childOptions:d.childOptions,onToggleClick:a.props.handleOptionClick})})},d}(e.Component);c.a=b},24:function(e,c){e.exports=m},26:function(e,c){e.exports=n},367:function(e,c,b){b.r(c);var a=b(0),d=b(46);e=b(4);var f=b(138),h=b.n(f),k=b(203),l=b(130);b=function(b){function c(a){var c=b.call(this,a)||this;return c.state={uid:Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5),customStart:"custom"===a.selectedOption&&a.range?
new Date(a.range.start):void 0,customEnd:"custom"===a.selectedOption&&a.range?new Date(a.range.end):void 0,customRange:"custom"===a.selectedOption&&a.range?a.range:void 0,options:[{value:"today",displayName:d.today},{value:"yesterday",displayName:d.yesterday},{value:"last7Days",displayName:d.last7Days},{value:"last30Days",displayName:d.last30Days},{value:"custom",displayName:d.custom}]},c.handleFromDateChange=c.handleFromDateChange.bind(c),c.handleToDateChange=c.handleToDateChange.bind(c),c.handleOptionClick=
c.handleOptionClick.bind(c),c}return a.b(c,b),c.prototype.render=function(a){var b={hide:"custom"!==this.props.selectedOption,"margin-left-1":!0,"margin-right-0":!0,date__selector:!0,"date__selector--hide":"custom"!==this.props.selectedOption};return a("div",null,a(k.a,{key:"date-range-static-toggles",options:this.state.options,selectedOption:this.props.selectedOption,customRange:this.state.customRange,handleOptionClick:this.handleOptionClick}),a("div",{classes:b},a("label",null,d.from,a("div",{class:"date-selector__pick-wrapper"},
a(h.a,{key:"from-picker-"+this.state.uid,onDateChange:this.handleFromDateChange,value:this.state.customStart,constraints:this.state.customEnd?{max:this.state.customEnd}:void 0}))),a("label",null,d.to,a("div",{class:"date-selector__pick-wrapper"},a(h.a,{key:"to-picker-"+this.state.uid,onDateChange:this.handleToDateChange,value:this.state.customEnd,constraints:this.state.customStart?{min:this.state.customStart}:void 0})))))},c.prototype.handleFromDateChange=function(a){this.state.customEnd?(this.setState({customStart:a,
customRange:{start:a.getTime(),end:this.state.customEnd.getTime()+(864E5-1)}}),this.props.onDateRangeSelect("custom",Object(l.a)("custom",this.state.customRange))):this.setState({customStart:a})},c.prototype.handleToDateChange=function(a){this.state.customStart?(this.setState({customEnd:a,customRange:{start:this.state.customStart.getTime(),end:a.getTime()+(864E5-1)}}),this.props.onDateRangeSelect("custom",Object(l.a)("custom",this.state.customRange))):this.setState({customEnd:a})},c.prototype.handleOptionClick=
function(a){this.props.selectedOption===a?this.props.onDateRangeSelect():this.props.onDateRangeSelect(a,Object(l.a)(a,this.state.customRange))},c}(e.Component);c.default=b},4:function(e,c){e.exports=k},46:function(e,c){e.exports=p}})});