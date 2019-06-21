// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper dojo/dom-class ../core/Accessor ../core/ArrayPool ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./DOMContainer".split(" "),function(u,v,m,e,n,k,p,g,q,r,d,t){var f={widthBreakpoint:{getValue:function(b){var a=b.viewSize[0];b=b.breakpoints;var c=this.values;return a<=b.xsmall?c.xsmall:a<=b.small?c.small:a<=b.medium?c.medium:a<=b.large?c.large:c.xlarge},
values:{xsmall:"xsmall",small:"small",medium:"medium",large:"large",xlarge:"xlarge"},valueToClassName:{xsmall:"esri-view-width-xsmall esri-view-width-less-than-small esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge",small:"esri-view-width-small esri-view-width-greater-than-xsmall esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge",medium:"esri-view-width-medium esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-less-than-large esri-view-width-less-than-xlarge",
large:"esri-view-width-large esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-greater-than-medium esri-view-width-less-than-xlarge",xlarge:"esri-view-width-xlarge esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-greater-than-medium esri-view-width-greater-than-large"}},heightBreakpoint:{getValue:function(b){var a=b.viewSize[1];b=b.breakpoints;var c=this.values;return a<=b.xsmall?c.xsmall:a<=b.small?c.small:a<=b.medium?c.medium:
a<=b.large?c.large:c.xlarge},values:{xsmall:"xsmall",small:"small",medium:"medium",large:"large",xlarge:"xlarge"},valueToClassName:{xsmall:"esri-view-height-xsmall esri-view-height-less-than-small esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge",small:"esri-view-height-small esri-view-height-greater-than-xsmall esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge",medium:"esri-view-height-medium esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-less-than-large esri-view-height-less-than-xlarge",
large:"esri-view-height-large esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-greater-than-medium esri-view-height-less-than-xlarge",xlarge:"esri-view-height-xlarge esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-greater-than-medium esri-view-height-greater-than-large"}},orientation:{getValue:function(b){b=b.viewSize;var a=this.values;return b[1]>=b[0]?a.portrait:a.landscape},values:{portrait:"portrait",landscape:"landscape"},
valueToClassName:{portrait:"esri-view-orientation-portrait",landscape:"esri-view-orientation-landscape"}}},l={xsmall:544,small:768,medium:992,large:1200};return function(b){function a(){var c=null!==b&&b.apply(this,arguments)||this;c._breakpointsHandles=new q;c.breakpoints=l;c.orientation=null;c.widthBreakpoint=null;c.heightBreakpoint=null;return c}m(a,b);a.prototype.initialize=function(){this._breakpointsHandles.add([r.init(this,["breakpoints","size"],this._updateClassNames)])};a.prototype.destroy=
function(){this.destroyed||(this._removeActiveClassNames(),this._breakpointsHandles.destroy(),this._breakpointsHandles=null)};a.prototype._updateClassNames=function(){if(this.container){var c=g.acquire(),a=g.acquire(),b=!1,d,e,h;for(d in f)e=this[d],h=f[d].getValue({viewSize:this.size,breakpoints:this.breakpoints}),e!==h&&(b=!0,this[d]=h,a.push(f[d].valueToClassName[e]),c.push(f[d].valueToClassName[h]));b&&(this._applyClassNameChanges(c,a),g.release(c),g.release(a))}};a.prototype._applyClassNameChanges=
function(c,a){var b=this.container;b&&(k.remove(b,a),k.add(b,c))};a.prototype._removeActiveClassNames=function(){var c=this.container;if(c)for(var b in f)k.remove(c,f[b].valueToClassName[this[b]])};e([d.property({set:function(b){var a=this._get("breakpoints");if(b!==a){a=(a=b)&&a.xsmall<a.small&&a.small<a.medium&&a.medium<a.large;if(!a){var c=JSON.stringify(l,null,2);console.warn("provided breakpoints are not valid, using defaults:"+c)}b=a?b:l;this._set("breakpoints",n({},b))}}})],a.prototype,"breakpoints",
void 0);e([d.property()],a.prototype,"orientation",void 0);e([d.property()],a.prototype,"widthBreakpoint",void 0);e([d.property()],a.prototype,"heightBreakpoint",void 0);return a=e([d.subclass("esri.views.BreakpointsOwner")],a)}(d.declared(p,t))});