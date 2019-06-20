// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/kebabDictionary ../core/lang ../core/accessorSupport/decorators ./support/pointCloud/ColorModulation ./support/pointCloud/pointSizeAlgorithmJSONUtils ./support/pointCloud/pointSizeAlgorithmTypeUtils".split(" "),function(b,p,h,d,k,g,e,c,l,m,n){var f=g.strict()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",
pointCloudUniqueValueRenderer:"point-cloud-unique-value"});b=function(b){function a(a){a=b.call(this)||this;a.type=void 0;a.pointSizeAlgorithm=null;a.colorModulation=null;a.pointsPerInch=10;return a}h(a,b);a.prototype.clone=function(){console.warn(".clone() is not implemented for "+this.declaredClass);return null};a.prototype.cloneProperties=function(){return{pointSizeAlgorithm:e.clone(this.pointSizeAlgorithm),colorModulation:e.clone(this.colorModulation),pointsPerInch:e.clone(this.pointsPerInch)}};
d([c.property({type:f.apiValues,readOnly:!0,nonNullable:!0,json:{type:f.jsonValues,read:!1,write:f.write}})],a.prototype,"type",void 0);d([c.property({types:n.pointSizeAlgorithmTypes,json:{read:m.read,write:!0}})],a.prototype,"pointSizeAlgorithm",void 0);d([c.property({type:l.default,json:{write:!0}})],a.prototype,"colorModulation",void 0);d([c.property({json:{write:!0},nonNullable:!0,type:Number})],a.prototype,"pointsPerInch",void 0);return a=d([c.subclass("esri.renderers.PointCloudRenderer")],a)}(c.declared(k));
(b||(b={})).fieldTransformTypeKebabDict=new g.KebabDictionary({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});return b});