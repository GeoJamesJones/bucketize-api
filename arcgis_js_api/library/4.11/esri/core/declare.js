// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/declare"],function(l,m,h){function k(a,b){a&&!Array.isArray(a)&&"function"!==typeof a&&(b=a,a=null);a=a||[];b=b||{};return d([this].concat(a),b)}function d(a,b){a&&!Array.isArray(a)&&"function"!==typeof a&&(b=a,a=null);"function"===typeof a?a=[a]:a||(a=[]);b=b||{};var c,e;c=0;for(e=f.length;c<e;c++)f[c](a,b);a=h(a,b);a.createSubclass=k;c=0;for(e=g.length;c<e;c++)g[c](a);return a}var f=[],g=[];(function(a){a.hasMixin=function(a,c){a=Array.isArray(a)?a.reduce(function(a,
b){return b._meta?a.concat(b._meta.bases):a},[]):a._meta?a._meta.bases:a;if(!a)return!1;if("string"===typeof c)for(var b=a.length-1;0<=b;b--)if(a[b].prototype.declaredClass===c)return!0;return-1!==a.indexOf(c)};a.safeMixin=function(a,c){return h.safeMixin(a,c)};a.before=function(a){f.push(a)};a.after=function(a){g.push(a)}})(d||(d={}));return d});