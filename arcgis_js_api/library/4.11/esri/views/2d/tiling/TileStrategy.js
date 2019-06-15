// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(y,z,A,t){var h=new t(0,0,0,0),d=new Map,k=[],l=[];return function(){function e(a){this._previousScale=Number.POSITIVE_INFINITY;this.cachePolicy="keep";this.coveragePolicy="closest";this.resampling=!0;this.tileIndex=new Map;this.tiles=[];this.buffer=192;this.acquireTile=a.acquireTile;this.releaseTile=a.releaseTile;this.tileInfoView=a.tileInfoView;this.resampling=null==a.resampling||!!a.resampling;a.cachePolicy&&
(this.cachePolicy=a.cachePolicy);a.coveragePolicy&&(this.coveragePolicy=a.coveragePolicy);null!=a.buffer&&(this.buffer=a.buffer)}e.prototype.destroy=function(){this.tileIndex.clear()};e.prototype.update=function(a){var m=this,b=this.resampling,f=this.tileIndex,e=this.tileInfoView.getTileCoverage(a.state,this.buffer,this.coveragePolicy);l.length=0;k.length=0;d.clear();if(e){var c=this.tileInfoView.tileInfo,n=c.minScale,p=c.maxScale,c=e.spans,u=e.lodInfo,q=u.level,g=a.state.scale,v=!a.stationary&&g>
this._previousScale;this._previousScale=g;this.tiles.length=0;if(!b&&(g>n||g<p))return this.tiles.length=0,d.clear(),f.forEach(function(a){m.releaseTile(a)}),f.clear(),l.length=0,k.length=0,d.clear(),!0;f.forEach(function(a){return a.visible=!0});p=n=0;if(0<c.length)for(g=0;g<c.length;g++){a=c[g];for(var t=a.row,x=a.colTo,r=a.colFrom;r<=x;r++)n++,a=h.set(q,t,u.normalizeCol(r),u.getWorldForColumn(r)).id,f.has(a)?(b=f.get(a),b.isReady?(d.set(a,b),p++):v||this._addParentTile(a,d)):(b=this.acquireTile(h),
this.tileIndex.set(a,b),v||this._addParentTile(a,d))}var w=p===n;f.forEach(function(a,b){h.set(b);if(!d.has(b)){var c=m.tileInfoView.intersects(e,h);!c||!v&&w?"purge"===m.cachePolicy?h.level===q&&c||k.push(b):(h.level>q||!c)&&k.push(b):a.isReady?l.push(b):h.level>q&&k.push(b)}});for(c=0;c<l.length;c++)a=l[c],(b=f.get(a))&&b.isReady&&d.set(a,b);for(c=0;c<k.length;c++)a=k[c],b=f.get(a),this.releaseTile(b),f["delete"](a);d.forEach(function(a){return m.tiles.push(a)});f.forEach(function(a){d.has(a.key.id)||
(a.visible=!1)});return w}};e.prototype.clear=function(){var a=this,d=this.tileIndex;d.forEach(function(b){a.releaseTile(b)});d.clear()};e.prototype._addParentTile=function(a,d){for(var b=null;;){a=this.tileInfoView.getTileParentId(a);if(!a)break;if(this.tileIndex.has(a)&&(b=this.tileIndex.get(a))&&b.isReady){d.has(b.key.id)||d.set(b.key.id,b);break}}};return e}()});