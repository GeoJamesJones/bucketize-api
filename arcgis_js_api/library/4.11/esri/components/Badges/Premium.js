// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["dojo/i18n!../Badges/nls/resources","../Badges/Badge"],function(g,h){return function(c){function b(a){if(e[a])return e[a].exports;var d=e[a]={i:a,l:!1,exports:{}};return c[a].call(d.exports,d,d.exports,b),d.l=!0,d.exports}var e={};return b.m=c,b.c=e,b.d=function(a,d,f){b.o(a,d)||Object.defineProperty(a,d,{enumerable:!0,get:f})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},
b.t=function(a,d){if((1&d&&(a=b(a)),8&d)||4&d&&"object"==typeof a&&a&&a.__esModule)return a;var f=Object.create(null);if(b.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:a}),2&d&&"string"!=typeof a)for(var c in a)b.d(f,c,function(b){return a[b]}.bind(null,c));return f},b.n=function(a){var d=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(d,"a",d),d},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=357)}({14:function(c,b){c.exports=
g},25:function(c,b){c.exports=h},357:function(c,b,e){e.r(b);var a=e(14);c=e(25);var d=e.n(c);b.default=function(b,c){var e=b.user,e=e?e.orgId?"Org":"Public":"Anon";return c(d.a,{backgroundColor:"#DBEDFA",textColor:"#196FA6",key:"premium-badge",size:b.size,text:a.premium,title:a.tooltips["premium"+e],tooltip:b.tooltip?a.tooltips["premium"+e]:void 0,tooltipDirection:b.tooltipDirection},c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},c("path",{fill:"none",d:"M0 0h16v16H0z"}),
c("path",{fill:"none",d:"M0 0h16v16H0z"}),c("path",{d:"M8.05 15.5a.497.497 0 0 1-.25-.067C.6 11.275 1.542 2.038 1.552 1.944a.5.5 0 0 1 .259-.382.507.507 0 0 1 .463-.009 5.15 5.15 0 0 0 5.459-.94.5.5 0 0 1 .64.006c1.817 1.54 3.601 1.844 5.457.932a.5.5 0 0 1 .718.394 16.944 16.944 0 0 1-.344 4.965.5.5 0 1 1-.978-.211 16.952 16.952 0 0 0 .367-3.962 5.57 5.57 0 0 1-5.55-1.098A6.178 6.178 0 0 1 2.51 2.706c-.057 2.086.231 8.651 5.79 11.86a.5.5 0 0 1-.25.934z",fill:"#196fa6"}),c("path",{d:"M12 15.5a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4zm0-7a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3z",
fill:"#196fa6"})))}}})});