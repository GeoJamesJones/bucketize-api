// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function d(a,b,c){this._clientType=a;this._loader=b;this._activeRequests=null;c&&c.trackRequests&&(this._activeRequests=new Map)}d.prototype.request=function(a,b,c){var d=this;void 0===c&&(c=a);if(this._activeRequests&&this._activeRequests.has(a))return null;a=this._loader.request(a,b,this._clientType,c);this._activeRequests&&(this._activeRequests.set(c,a),b=function(){return d._activeRequests.delete(c)},
a.then(b,b));return a};d.prototype.cancelRequest=function(a){this._loader.cancel(a)};d.prototype.cancelAll=function(){var a=this;this._activeRequests&&(this._activeRequests.forEach(function(b){return a._loader.cancel(b)}),this._activeRequests.clear())};d.prototype.hasPendingDownloads=function(){return this._loader.hasPendingDownloads()};return d}();f.StreamDataSupplier=e;f.default=e});