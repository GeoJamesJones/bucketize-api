// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Collection ../../../../core/Handles ../../../../core/Logger ../../../../core/throttle ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../geometry/support/aaBoundingRect ./FeatureTileDescriptor3D ./FeatureTileMeasurements3D ../../support/debugFlags ../../support/projectionUtils".split(" "),function(e,g,l,d,m,n,
p,q,r,t,c,f,u,v,w,x){Object.defineProperty(g,"__esModule",{value:!0});var y=q.getLogger("esri.views.3d.layers.support.FeatureTileFetcher3D");e=function(e){function b(a){a=e.call(this,a)||this;a.tiles=new n;a.tileSize=512;a.disableThrottling=!1;a.idToTile=new Map;a.handles=new p;a.clients=new Set;a._dirty=!1;return a}l(b,e);Object.defineProperty(b.prototype,"tilingScheme",{get:function(){var a=this.tilingSchemeOwner.tilingScheme;return a?a.clone():null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"filterExtent",{set:function(a){if(a&&!a.spatialReference.equals(this.viewState.spatialReference))y.error("#extent","extent spatial reference needs to be in the same spatial reference as the view");else{var b=this._get("filterExtent");b===a||b&&a&&b.equals(a)||(a=a?a.clone():null,this._set("filterExtent",a),this.setDirty())}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"filterExtentRect",{get:function(){if(!this.filterExtent||!this.tilingScheme)return null;var a=f.create();x.extentToBoundingRect(this.filterExtent,
a,this.tilingScheme.spatialReference);return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"rootTileIds",{get:function(){return this.filterExtentRect?this.tilingScheme.rootTilesInExtent(this.filterExtentRect):[[0,0,0]]},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"suspended",{set:function(a){a!==this._get("suspended")&&(this._set("suspended",a),a||this.setDirty())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return this.throttledUpdate.hasPendingUpdates()||
this._dirty},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"changeId",{get:function(){var a=this._get("changeId")||0;return!this.hasClients||this.suspended?a:a+1},enumerable:!0,configurable:!0});b.prototype.initialize=function(){var a=this;this.throttledUpdate=r.throttle(this.setDirty,function(){return a.notifyChange("updating")},w.TESTS_LIMIT_FEATURE_TILE_TREE_THROTTLING?100:1E3,this);var b=this.disableThrottling?function(){return a.setDirty}:this.throttledUpdate;this.handles.add(this.watch(["tilingScheme",
"tileSize"],function(){return a.tileMeasurements=null},!0));this.handles.add(t.init(this,"changeId",b));this.scheduler&&(this._frameWorker=this.scheduler.registerTask(2,function(){return a.update()},function(){return a.needsUpdate()}))};b.prototype.destroy=function(){this._frameWorker&&(this._frameWorker.remove(),this._frameWorker=null);this.handles&&(this.handles.destroy(),this.handles=null)};b.prototype.addClient=function(){var a=this,b=z++;this.clients.add(b);1===this.clients.size&&this.setDirty();
return{remove:function(){return a.removeClient(b)}}};b.prototype.removeClient=function(a){this.clients.delete(a);this.hasClients||this.setDirty()};Object.defineProperty(b.prototype,"hasClients",{get:function(){return 0<this.clients.size},enumerable:!0,configurable:!0});b.prototype.setDirty=function(){this.suspended?this.notifyChange("updating"):(this._dirty=!0,this._frameWorker||this.update())};b.prototype.needsUpdate=function(){return this._dirty&&!this.suspended};b.prototype.update=function(){this._dirty=
!1;if(this.tilingScheme&&this.hasClients){this.tileMeasurements||(this.tileMeasurements=new v.FeatureTileMeasurements3D({renderCoordsHelper:this.renderCoordsHelper,tilingScheme:this.tilingScheme,tileSize:this.tileSize,maxVerticalScreenSize:k}));var a=this.cameraOnSurface.location;this.tileMeasurements.begin(this.viewState.camera,this.focus?this.focus.locationOnSurface:a,a.z);this.updateTiles(this.subdivideTilesForView(this.getRootTiles()));this.tileMeasurements.end()}else this.tiles.removeAll(),this.idToTile.clear();
this.notifyChange("updating")};b.prototype.getRootTiles=function(){var a=this;return this.rootTileIds.map(function(b){return new u.FeatureTileDescriptor3D(b[0],b[1],b[2],a.tilingScheme)})};b.prototype.purgeHorizonTiles=function(a){a.sort(function(a,b){a=a.measures.screen.rect;b=b.measures.screen.rect;return a[1]+a[3]-(b[1]+b[3])});f.empty(h);for(var b=0;b<a.length;b++)if(f.expand(h,a[b].measures.screen.rect),f.height(h)>k)return a.slice(b);return[]};b.prototype.subdivideTilesForView=function(a){a=
a.slice();for(var b=[];0<a.length;){var c=a.pop();if(!this.filterExtentRect||f.intersects(this.filterExtentRect,c.extent))this.tileMeasurements.updateTile(c),0!==c.measures.visibility&&(c.measures.shouldSplit?(this.tilingScheme.ensureMaxLod(c.lij[0]+1),a.push.apply(a,c.getChildren())):b.push(c))}return this.purgeHorizonTiles(b)};b.prototype.updateTiles=function(a){for(var b=this,c=0,d=this.tiles.items;c<d.length;c++)d[c].used=!1;a=a.filter(function(a){var c=b.idToTile.get(a.id);c?(c.copyMeasurementsFrom(a),
c.used=!0):b.idToTile.set(a.id,a);return!c});c=this.tiles.items.filter(function(a){return a.used?!1:(b.idToTile.delete(a.id),!0)});this.tiles.removeMany(c);this.tiles.addMany(a);this.sortTiles()};b.prototype.sortTiles=function(){this.tiles.sort(function(a,b){return a.measures.visibility!==b.measures.visibility?2===a.measures.visibility?-1:1:a.measures.distance-b.measures.distance});this.tiles.forEach(function(a,b){return a.loadPriority=b})};d([c.property({constructOnly:!0})],b.prototype,"scheduler",
void 0);d([c.property({constructOnly:!0})],b.prototype,"renderCoordsHelper",void 0);d([c.property({constructOnly:!0})],b.prototype,"tilingSchemeOwner",void 0);d([c.property({constructOnly:!0})],b.prototype,"cameraOnSurface",void 0);d([c.property({constructOnly:!0})],b.prototype,"focus",void 0);d([c.property({constructOnly:!0})],b.prototype,"viewState",void 0);d([c.property()],b.prototype,"tiles",void 0);d([c.property()],b.prototype,"tileSize",void 0);d([c.property({readOnly:!0,dependsOn:["tilingSchemeOwner.tilingScheme"]})],
b.prototype,"tilingScheme",null);d([c.property()],b.prototype,"filterExtent",null);d([c.property({readOnly:!0,dependsOn:["filterExtent","tilingScheme"]})],b.prototype,"filterExtentRect",null);d([c.property({readOnly:!0,dependsOn:["filterExtentRect"]})],b.prototype,"rootTileIds",null);d([c.property({value:!1})],b.prototype,"suspended",null);d([c.property()],b.prototype,"updating",null);d([c.property({readOnly:!0,dependsOn:["tileSize","cameraOnSurface.location","tilingScheme","viewState.camera","focus.locationOnSurface"]})],
b.prototype,"changeId",null);d([c.property({constructOnly:!0})],b.prototype,"disableThrottling",void 0);return b=d([c.subclass()],b)}(c.declared(m));g.FeatureTileTree3D=e;var z=0,h=f.create(),k=10;g.default=e});