// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Collection ../../core/has ../../core/promiseUtils ../../layers/support/lazyLayerLoader ../PortalItem ./mapNotesUtils ./portalLayers ../../renderers/support/styleUtils".split(" "),function(J,q,l,h,v,K,w,m,x,y,z,A){function B(c,d,a){return h(this,void 0,void 0,function(){var b;return l(this,function(e){switch(e.label){case 0:return b=new c,b.read(d,a.context),[4,A.loadStyleRenderer(b,a.context)];
case 1:return e.sent(),[2,b]}})})}function t(c,d){return h(this,void 0,void 0,function(){var a;return l(this,function(b){switch(b.label){case 0:return[4,C(c,d)];case 1:return a=b.sent(),[2,B(a,c,d)]}})})}function C(c,d){return h(this,void 0,void 0,function(){var a,b,e,k,g,r,h,n;return l(this,function(f){switch(f.label){case 0:a=d.context;switch(a.origin){case "web-scene":switch(a.layerContainerType){case "basemap":f=D;break;case "ground":f=E;break;default:f=F}break;default:switch(a.layerContainerType){case "basemap":f=
G;break;default:f=H}}b=f;e=c.layerType||c.type;!e&&d&&d.defaultLayerType&&(e=d.defaultLayerType);g=(k=b[e])?m.layerLookupMap[k]:m.layerLookupMap.UnknownLayer;if("Feature Collection"!==c.type)return[3,4];if(!c.itemId)return[3,3];r=new x({id:c.itemId,portal:a&&a.portal});return[4,r.load()];case 1:return f.sent(),[4,z.selectLayerClassPath(r)];case 2:h=f.sent(),n=h.className||"UnknownLayer",g=m.layerLookupMap[n],f.label=3;case 3:return[3,5];case 4:"ArcGISFeatureLayer"===e&&y.isMapNotesLayer(c)&&(g=m.layerLookupMap.MapNotesLayer),
f.label=5;case 5:return c.wmtsInfo&&(g=m.layerLookupMap.WMTSLayer),[2,g()]}})})}function I(c,d,a){return h(this,void 0,void 0,function(){var b,e,k;return l(this,function(g){switch(g.label){case 0:return b=new v,e=u(b,Array.isArray(d.layers)?d.layers:[],a),[4,c];case 1:return k=g.sent(),[4,e];case 2:return g.sent(),"group"===k.type?(k.layers.addMany(b),[2,k]):[2]}})})}function u(c,d,a){return h(this,void 0,void 0,function(){var b,e,k,g,h,m,n,f,p;return l(this,function(l){switch(l.label){case 0:if(!d)return[2];
b=[];e=0;for(k=d;e<k.length;e++)g=k[e],h=t(g,a),"GroupLayer"===g.layerType?b.push(I(h,g,a)):b.push(h);return[4,w.eachAlways(b)];case 1:m=l.sent();n=0;for(f=m;n<f.length;n++)p=f[n],!p.value||a.filter&&!a.filter(p.value)||c.add(p.value);return[2]}})})}Object.defineProperty(q,"__esModule",{value:!0});var F={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",
BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},E={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer"},D={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"TileLayer",
OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},H={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",
VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},G={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",
WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};q.createLayer=t;q.populateOperationalLayers=function(c,d,a){return h(this,void 0,void 0,function(){return l(this,function(b){return[2,u(c,d,a)]})})}});