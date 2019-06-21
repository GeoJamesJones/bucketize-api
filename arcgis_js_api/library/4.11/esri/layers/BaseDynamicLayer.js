// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ./Layer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer".split(" "),function(f,q,k,c,g,l,h,d,m,n,p){return function(e){function a(){var b=null!==e&&e.apply(this,arguments)||this;b.type="base-dynamic";return b}k(a,e);a.prototype.getImageUrl=function(b,a,d){throw new l("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented");
};a.prototype.fetchImage=function(b,a,d,c){b=this.getImageUrl(b,a,d);var e={responseType:"image"};c&&c.timestamp&&(e.query={_ts:c.timestamp});return"string"===typeof b?g(b,e).then(function(a){return a.data}):b.then(function(a){return g(a,e)}).then(function(a){return a.data})};a.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return h.create(function(a){return f(["../views/2d/layers/BaseDynamicLayerView2D"],a)});case "3d":return h.create(function(a){return f(["../views/3d/layers/DynamicLayerView3D"],
a)})}};c([d.property({readOnly:!0,value:"base-dynamic"})],a.prototype,"type",void 0);c([d.property({type:["show","hide"]})],a.prototype,"listMode",void 0);return a=c([d.subclass("esri.layers.BaseDynamicLayer")],a)}(d.declared(m,n,p))});