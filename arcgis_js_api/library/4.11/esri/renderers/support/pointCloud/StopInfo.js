// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Color ../../../core/JSONSupport ../../../core/lang ../../../core/accessorSupport/decorators ../../../core/accessorSupport/ensureType".split(" "),function(b,c,f,e,g,h,k,d,l){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.label=null;a.value=0;a.color=null;return a}f(a,b);c=a;a.prototype.clone=function(){return new c({label:this.label,
value:this.value,color:k.clone(this.color)})};var c;e([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);e([d.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"value",void 0);e([d.property({type:g,json:{type:[l.Integer],write:!0}})],a.prototype,"color",void 0);return a=c=e([d.subclass("esri.renderers.support.pointCloud.StopInfo")],a)}(d.declared(h));c.StopInfo=b;c.default=b});