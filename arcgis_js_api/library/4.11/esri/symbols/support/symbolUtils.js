// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/compilerUtils ./previewSymbol2D ./previewSymbol3D ./previewWebStyleSymbol ./utils".split(" "),function(q,b,g,h,k,l,m,n,p){function d(a,c){switch(a.type){case "web-style":return n.previewWebStyleSymbol(a,d,c);case "label-3d":case "line-3d":case "mesh-3d":case "point-3d":case "polygon-3d":return m.previewSymbol3D(a,c);case "simple-marker":case "simple-line":case "simple-fill":case "picture-marker":case "picture-fill":case "text":case "cim":return l.previewSymbol2D(a,
c);default:k.neverReached(a)}}Object.defineProperty(b,"__esModule",{value:!0});b.renderPreviewHTML=d;b.getDisplayedSymbol=function(a,c){return h(this,void 0,void 0,function(){var b,e,f;return g(this,function(d){if(!a)return[2];b=a.get("layer.opacity")||a.get("sourceLayer.opacity");return a.symbol?(e=a.symbol.clone(),p.applyColorToSymbol(e,null,b),[2,e]):(f=a.get("layer.renderer")||a.get("sourceLayer.renderer"))&&"getDisplayedSymbol"in f?[2,f.getDisplayedSymbol(a,c)]:[2]})})}});