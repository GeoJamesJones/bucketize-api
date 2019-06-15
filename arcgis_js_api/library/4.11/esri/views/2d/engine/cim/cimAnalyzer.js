// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../webgl/CIMSymbolHelper ../webgl/enums ../webgl/SDFHelper ../webgl/Utils".split(" "),function(y,m,p,l,u,v){function n(b){return b?{r:b[0],g:b[1],b:b[2],a:b[3]/255}:{r:0,g:0,b:0,a:0}}function q(b){switch(b){case "Butt":return l.CapType.BUTT;case "Square":return l.CapType.SQUARE;default:return l.CapType.ROUND}}function r(b){switch(b){case "Bevel":return l.JoinType.BEVEL;case "Miter":return l.JoinType.MITER;default:return l.JoinType.ROUND}}function w(b,c,e,f,x,k){var h=b.markerGraphics;
if(h){var l=0;if(b.scaleSymbolsProportionally){var a=b.frame;a&&(l=a.ymax-a.ymin)}for(a=0;a<h.length;a++)if(h[a]){var g=u.getSDFSymbol(b),m=g&&"CIMLineSymbol"===g.type?.5:1;k.push({type:"marker",materialHash:e?function(a){return"0"}:null,cim:b,colorLocked:b.colorLocked,alignment:x,anchorPoint:b.anchorPoint,size:d(b.primitiveName,"Size",e,c)||b.size,scaleX:1,rotation:d(b.primitiveName,"Rotation",e,c)||b.rotation,offsetX:d(b.primitiveName,"OffsetX",e,c)||b.offsetX,offsetY:d(b.primitiveName,"OffsetY",
e,c)||b.offsetY,color:n(p.CIMSymbolHelper.getFillColor(g)),outlineColor:n(p.CIMSymbolHelper.getStrokeColor(g)),outlineWidth:p.CIMSymbolHelper.getStrokeWidth(g)*m,frameHeight:l,rotateClockwise:b.rotateClockwise,sizeRatio:f?b.size/f:1})}}}function d(b,c,d,f){if(!b)return null;for(var e=0;e<d.length;e++){var k=d[e];if(k.primitiveName===b&&k.propertyName===c&&(k=k.valueExpressionInfo))return v.createArcadeFunction(k.expression,f)}return null}Object.defineProperty(m,"__esModule",{value:!0});m.analyzeCIMSymbol=
function(b,c){var e=[],f=b.data.symbol;b=b.data.primitiveOverrides;switch(f.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(f){var m=f.symbolLayers;if(m){var k,h=p.CIMSymbolHelper.getSize(f);"CIMPointSymbol"===f.type&&"Map"===f.angleAlignment&&(k=l.Alignment.MAP);for(var t=m.length;t--;){var a=m[t];if(a&&!1!==a.enable)switch(a.type){case "CIMSolidFill":e.push({type:"fill",materialHash:null,cim:a,colorLocked:a.colorLocked,color:d(a.primitiveName,"Color",b,c)||n(a.color),
height:0,angle:0,offsetX:0,offsetY:0,scaleX:1});break;case "CIMPictureFill":e.push({type:"fill",materialHash:null,cim:a,colorLocked:a.colorLocked,color:d(a.primitiveName,"TintColor",b,c)||n(a.tintColor),height:d(a.primitiveName,"Height",b,c)||a.height,scaleX:d(a.primitiveName,"ScaleX",b,c)||a.scaleX,angle:d(a.primitiveName,"Rotation",b,c)||a.rotation,offsetX:d(a.primitiveName,"OffsetX",b,c)||a.offsetY,offsetY:d(a.primitiveName,"OffsetY",b,c)||a.offsetY});break;case "CIMSolidStroke":var g=void 0!==
a.width?a.width:4;e.push({type:"line",materialHash:null,cim:a,isOutline:"CIMPolygonSymbol"===f.type,colorLocked:a.colorLocked,color:d(a.primitiveName,"Color",b,c)||n(a.color),width:d(a.primitiveName,"Width",b,c)||g,cap:d(a.primitiveName,"CapStyle",b,c)||q(a.capStyle),join:d(a.primitiveName,"JoinStyle",b,c)||r(a.joinStyle),miterLimit:d(a.primitiveName,"MiterLimit",b,c)||a.miterLimit,sizeRatio:h?g/h:1,isDashed:!1});break;case "CIMPictureStroke":g=void 0!==a.width?a.width:4;e.push({type:"line",materialHash:null,
cim:a,isOutline:"CIMPolygonSymbol"===f.type,colorLocked:a.colorLocked,color:d(a.primitiveName,"TintColor",b,c)||n(a.tintColor),width:d(a.primitiveName,"Width",b,c)||g,cap:d(a.primitiveName,"CapStyle",b,c)||q(a.capStyle),join:d(a.primitiveName,"JoinStyle",b,c)||r(a.joinStyle),miterLimit:d(a.primitiveName,"MiterLimit",b,c)||a.miterLimit,sizeRatio:h?g/h:1,isDashed:!1});break;case "CIMGradientStroke":g=void 0!==a.width?a.width:4;e.push({type:"line",materialHash:null,cim:a,isOutline:"CIMPolygonSymbol"===
f.type,colorLocked:a.colorLocked,color:{r:0,g:0,b:0,a:1},width:d(a.primitiveName,"Width",b,c)||g,cap:d(a.primitiveName,"CapStyle",b,c)||q(a.capStyle),join:d(a.primitiveName,"JoinStyle",b,c)||r(a.joinStyle),miterLimit:d(a.primitiveName,"MiterLimit",b,c)||a.miterLimit,sizeRatio:h?g/h:1,isDashed:!1});break;case "CIMPictureMarker":e.push({type:"marker",materialHash:null,cim:a,colorLocked:a.colorLocked,alignment:k,anchorPoint:a.anchorPoint,size:d(a.primitiveName,"Size",b,c)||a.size,scaleX:d(a.primitiveName,
"ScaleX",b,c)||a.scaleX,rotation:d(a.primitiveName,"Rotation",b,c)||a.rotation,offsetX:d(a.primitiveName,"OffsetX",b,c)||a.offsetX,offsetY:d(a.primitiveName,"OffsetY",b,c)||a.offsetY,color:d(a.primitiveName,"TintColor",b,c)||n(a.tintColor),outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:a.rotateClockwise,sizeRatio:h?a.size/h:1});break;case "CIMVectorMarker":w(a,c,b,h,k,e)}}}}}return e};m.analyzeCIMResource=function(b,c){return c}});