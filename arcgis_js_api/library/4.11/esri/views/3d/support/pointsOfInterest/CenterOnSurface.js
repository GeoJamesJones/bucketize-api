// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/Point ../debugFlags ../earthUtils ../mathUtils ../PropertiesPool ./PointOfInterest".split(" "),function(h,f,n,g,d,e,k,p,q,l,m,r,t){Object.defineProperty(f,"__esModule",{value:!0});var u=Array;h=function(h){function a(b){b=h.call(this,b)||this;
b.propertiesPool=new r.default({location:p,renderLocation:u},b);b._dirtyTimeStamp=0;b.currentSurfaceAltitude=0;b.latestSurfaceAltitude=0;b.distance=0;b.renderLocation=k.vec3f64.create();return b}n(a,h);f=a;a.prototype.initialize=function(){var b=this;this._frameWorker=this.scheduler.registerTask(1,function(){return b.measureSurfaceAltitude()},function(){return b.needsUpdate()});this.measureSurfaceAltitude()};a.prototype.destroy=function(){this._frameWorker&&(this._frameWorker.remove(),this._frameWorker=
null);this.propertiesPool.destroy();this.propertiesPool=null};Object.defineProperty(a.prototype,"location",{get:function(){var b=this.propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,b,this.state.spatialReference);return b},enumerable:!0,configurable:!0});a.prototype.update=function(b){this._setDirty();this.updateCenterOnSurface()};a.prototype.forceUpdate=function(){this.measureSurfaceAltitude();this.updateCenterOnSurface()};a.prototype.hasPendingUpdates=
function(){return 0<this._dirtyTimeStamp};Object.defineProperty(a.prototype,"estimatedSurfaceAltitude",{get:function(){return this.latestSurfaceAltitude},enumerable:!0,configurable:!0});a.prototype._setDirty=function(){this._dirtyTimeStamp=this._dirtyTimeStamp||this.scheduler.now};a.prototype.needsUpdate=function(){return 0<this._dirtyTimeStamp&&this.scheduler.now-this._dirtyTimeStamp>=this.altitudeEstimationInterval};a.prototype.measureSurfaceAltitude=function(){this.latestSurfaceAltitude=this.estimateSurfaceAltitudeAtCenter();
this.updateCenterOnSurface();this._dirtyTimeStamp=0};a.prototype.updateCenterOnSurface=function(){var b=v,c=this.calculateSurfaceIntersection(this.currentSurfaceAltitude,b),a=this.currentSurfaceAltitude!==this.latestSurfaceAltitude;!c&&a&&(c=this.calculateSurfaceIntersection(this.latestSurfaceAltitude,b))&&(this.currentSurfaceAltitude=this.latestSurfaceAltitude);a=w;c&&this.latestSurfaceAltitudeChangesDistanceSignificantly(b,a)&&(e.vec3.copy(b,a),this.currentSurfaceAltitude=this.latestSurfaceAltitude);
c?(c=e.vec3.distance(this.state.camera.eye,b),c!==this._get("distance")&&this._set("distance",c)):(c=this.state.camera,e.vec3.scale(b,c.viewForward,this._get("distance")),e.vec3.add(b,b,c.eye));c=this._get("renderLocation");c[0]===b[0]&&c[1]===b[1]&&c[2]===b[2]||this._set("renderLocation",e.vec3.copy(this.propertiesPool.get("renderLocation"),b))};a.prototype.calculateSurfaceIntersection=function(b,a){var c=this.state.camera;if(!this.renderCoordsHelper.intersectManifold(c.ray,b,a))return!1;if(this.state.isGlobal){b=
l.earthRadius+b;var d=e.vec3.squaredLength(c.eye),f=d<b*b,g=e.vec3.distance(c.eye,a);f&&g>l.earthRadius/4&&(e.vec3.scale(a,c.viewForward,b-Math.sqrt(d)),e.vec3.add(a,a,c.eye))}else if(c=this.surface.ready&&this.surface.extent)a[0]=m.clamp(a[0],c[0],c[2]),a[1]=m.clamp(a[1],c[1],c[3]);return!0};a.prototype.latestSurfaceAltitudeChangesDistanceSignificantly=function(b,a){if(this.latestSurfaceAltitude===this.currentSurfaceAltitude||null==b)return!1;if(this.calculateSurfaceIntersection(this.latestSurfaceAltitude,
a)){var c=this.state.camera.eye;b=e.vec3.distance(c,b);a=e.vec3.distance(c,a);if(q.TESTS_DISABLE_UPDATE_THROTTLE_THRESHOLDS||Math.abs(a-b)/b>f.RELATIVE_ALTITUDE_CHANGE_THRESHOLD)return!0}return!1};var f;a.RELATIVE_ALTITUDE_CHANGE_THRESHOLD=.05;g([d.property({constructOnly:!0})],a.prototype,"scheduler",void 0);g([d.property({constructOnly:!0})],a.prototype,"altitudeEstimationInterval",void 0);g([d.property({readOnly:!0})],a.prototype,"distance",void 0);g([d.property({constructOnly:!0})],a.prototype,
"estimateSurfaceAltitudeAtCenter",void 0);g([d.property({readOnly:!0,dependsOn:["renderLocation"]})],a.prototype,"location",null);g([d.property({readOnly:!0})],a.prototype,"renderLocation",void 0);return a=f=g([d.subclass("esri.views.3d.support.CenterOnSurface")],a)}(d.declared(t.PointOfInterest));f.CenterOnSurface=h;var v=k.vec3f64.create(),w=k.vec3f64.create();f.default=h});