// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators ../../../layers/support/LOD".split(" "),function(v,w,r,g,t,d,u){return function(k){function a(){var b=null!==k&&k.apply(this,arguments)||this;b._lodByScale={};b._scales=[];b.effectiveLODs=null;b.effectiveMinZoom=-1;b.effectiveMaxZoom=-1;b.effectiveMinScale=0;b.effectiveMaxScale=0;b.enabled=!0;b.lods=null;b.minZoom=-1;b.maxZoom=
-1;b.minScale=0;b.maxScale=0;b.snapToZoom=!0;return b}r(a,k);l=a;a.prototype.initialize=function(){var b=this,c,h,a=this.lods;h=this.minScale;c=this.maxScale;var e=this.minZoom,f=this.maxZoom,d=-1,g=-1,k=!1,l=!1;0!==h&&0!==c&&h<c&&(c=[c,h],h=c[0],c=c[1]);if(a&&a.length){a=a.map(function(b){return b.clone()});a.sort(function(b,c){return c.scale-b.scale});a.forEach(function(b,c){return b.level=c});for(var n,p=0,q=a;p<q.length;p++){var m=q[p];!k&&0<h&&h>=m.scale&&(d=m.level,k=!0);!l&&0<c&&c>=m.scale&&
(g=n?n.level:-1,l=!0);n=m}-1===e&&(e=0===h?0:d);-1===f&&(f=0===c?a.length-1:g);e=Math.max(e,0);e=Math.min(e,a.length-1);f=Math.max(f,0);f=Math.min(f,a.length-1);e>f&&(h=[f,e],e=h[0],f=h[1]);h=a[e].scale;c=a[f].scale;a.splice(0,e);a.splice(f-e+1,a.length);a.forEach(function(c,a){b._lodByScale[c.scale]=c;b._scales[a]=c.scale});this._set("effectiveLODs",a);this._set("effectiveMinZoom",e);this._set("effectiveMaxZoom",f)}this._set("effectiveMinScale",h);this._set("effectiveMaxScale",c)};a.prototype.constrain=
function(b,c){if(!this.enabled||c&&b.scale===c.scale)return b;var a=this.effectiveMinScale,d=this.effectiveMaxScale,e=b.targetGeometry,f=c&&c.targetGeometry,g=0!==a&&b.scale>a;if(0!==d&&b.scale<d||g)a=g?a:d,f&&(c=(a-c.scale)/(b.scale-c.scale),e.x=f.x+(e.x-f.x)*c,e.y=f.y+(e.y-f.y)*c),b.scale=a;this.snapToZoom&&this.effectiveLODs&&(b.scale=this._getClosestScale(b.scale));return b};a.prototype.fit=function(b){if(!this.effectiveLODs)return this.constrain(b,null);var c=this.scaleToZoom(b.scale);b.scale=
this.zoomToScale(.99<Math.abs(c-Math.floor(c))?Math.round(c):Math.floor(c));return b};a.prototype.zoomToScale=function(b){if(!this.effectiveLODs)return 0;b-=this.effectiveMinZoom;b=Math.max(0,b);var c=this._scales;if(0>=b)return c[0];if(b>=c.length)return c[c.length-1];var a=Math.round(b);return c[a]+(a-b)*(c[Math.round(b-.5)]-c[a])};a.prototype.scaleToZoom=function(b){if(!this.effectiveLODs)return-1;var c=this._scales,a=0,d=c.length-1,e,f;for(a;a<d;a++){e=c[a];f=c[a+1];if(e<=b)return a+this.effectiveMinZoom;
if(f===b)return a+1+this.effectiveMinZoom;if(e>b&&f<b)return a+1-(b-f)/(e-f)+this.effectiveMinZoom}return a};a.prototype.snapToClosestScale=function(b){if(!this.effectiveLODs)return b;b=this.scaleToZoom(b);return this.zoomToScale(Math.round(b))};a.prototype.snapToNextScale=function(b,a){void 0===a&&(a=.5);if(!this.effectiveLODs)return b*a;b=Math.round(this.scaleToZoom(b));return this.zoomToScale(b+1)};a.prototype.snapToPreviousScale=function(b,a){void 0===a&&(a=2);if(!this.effectiveLODs)return b*
a;b=Math.round(this.scaleToZoom(b));return this.zoomToScale(b-1)};a.prototype.clone=function(){return new l({enabled:this.enabled,lods:this.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale})};a.prototype._getClosestScale=function(b){if(this._lodByScale[b])return this._lodByScale[b].scale;b=this._scales.reduce(function(a,d,g,e){return Math.abs(d-b)<=Math.abs(a-b)?d:a},this._scales[0]);return this._lodByScale[b].scale};var l;g([d.property({readOnly:!0})],
a.prototype,"effectiveLODs",void 0);g([d.property({readOnly:!0})],a.prototype,"effectiveMinZoom",void 0);g([d.property({readOnly:!0})],a.prototype,"effectiveMaxZoom",void 0);g([d.property({readOnly:!0})],a.prototype,"effectiveMinScale",void 0);g([d.property({readOnly:!0})],a.prototype,"effectiveMaxScale",void 0);g([d.property()],a.prototype,"enabled",void 0);g([d.property({type:[u]})],a.prototype,"lods",void 0);g([d.property()],a.prototype,"minZoom",void 0);g([d.property()],a.prototype,"maxZoom",
void 0);g([d.property()],a.prototype,"minScale",void 0);g([d.property()],a.prototype,"maxScale",void 0);g([d.property()],a.prototype,"snapToZoom",void 0);return a=l=g([d.subclass("esri.views.2d.constraints.ZoomConstraint")],a)}(d.declared(t))});