// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/JSONSupport ../../../core/accessorSupport/decorators".split(" "),function(b,c,f,e,g,d){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.field=null;a.minValue=0;a.maxValue=255;return a}f(a,b);c=a;a.prototype.clone=function(){return new c({field:this.field,minValue:this.minValue,maxValue:this.maxValue})};
var c;e([d.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);e([d.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"minValue",void 0);e([d.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"maxValue",void 0);return a=c=e([d.subclass("esri.renderers.support.pointCloud.ColorModulation")],a)}(d.declared(g));c.ColorModulation=b;c.default=b});