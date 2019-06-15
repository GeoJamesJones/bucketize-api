// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../geometry/SpatialReference ../../../../../geometry/support/geodesicUtils ../../../support/mathUtils ../../../support/projectionUtils".split(" "),function(u,v,l,h,n,k,d,f){function p(b){b.x=r.normalize(b.x);b.y=t.normalize(b.y)}function q(b,g,a){f.vectorToVector(b,g,a,n.WGS84);a[0]=d.deg2rad(a[0]);a[1]=d.deg2rad(a[1])}var r=new d.Cyclical(-180,180),t=new d.Cyclical(-90,90),m;
(function(b){var g=function(){function a(e,c){this._startPosition=h.vec3f64.create();this._endPosition=h.vec3f64.create();l.vec3.copy(this._startPosition,e);l.vec3.copy(this._endPosition,c)}a.prototype.eval=function(e,c){l.vec3.lerp(c,this._startPosition,this._endPosition,e)};return a}();b.Linear=g;g=function(){function a(e,c,a,b){this._startCoords=h.vec3f64.create();this._endCoords=h.vec3f64.create();q(e,a,this._startCoords);q(c,a,this._endCoords);this._destSR=b;this._startToEnd=k.inverseGeodeticSolver(this._startCoords[1],
this._startCoords[0],this._endCoords[1],this._endCoords[0]);this._endToStart=k.inverseGeodeticSolver(this._endCoords[1],this._endCoords[0],this._startCoords[1],this._startCoords[0])}a.prototype.eval=function(a,c){var b=k.directGeodeticSolver(this._startCoords[1],this._startCoords[0],this._startToEnd.azimuth,this._startToEnd.geodesicDistance*a),e=k.directGeodeticSolver(this._endCoords[1],this._endCoords[0],this._endToStart.azimuth,this._endToStart.geodesicDistance*(1-a));p(b);p(e);c[0]=d.lerp(b.x,
e.x,a);c[1]=d.lerp(b.y,e.y,a);c[2]=d.lerp(this._startCoords[2],this._endCoords[2],a);f.vectorToVector(c,n.WGS84,c,this._destSR)};return a}();b.Geodesic=g;g=function(){function a(a,c,b,d){this._startPosition=h.vec3f64.create();this._endPosition=h.vec3f64.create();f.vectorToVector(a,b,this._startPosition,f.SphericalECEFSpatialReference);f.vectorToVector(c,b,this._endPosition,f.SphericalECEFSpatialReference);this._destSR=d}a.prototype.eval=function(a,b){d.slerp(this._startPosition,this._endPosition,
a,b);f.vectorToVector(b,f.SphericalECEFSpatialReference,b,this._destSR)};return a}();b.Spherical=g})(m||(m={}));return m});