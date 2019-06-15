// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ./nextTick ./libs/gl-matrix-2/mat3f64 ./libs/gl-matrix-2/mat4f64 ./libs/gl-matrix-2/quatf64 ./libs/gl-matrix-2/vec2f64 ./libs/gl-matrix-2/vec3f64 ./libs/gl-matrix-2/vec4f64".split(" "),function(d,e,f,g,h,k,l,m,n){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function b(a,b,c){var p=this;this.itemByteSize=a;this.itemCreate=b;this.buffers=[];this.items=[];this.itemsPtr=this.itemsPerBuffer=0;this.itemsPerBuffer=Math.ceil(c/this.itemByteSize);this.tickHandle=f.before(function(){return p.reset()})}
b.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=null);this.itemsPtr=0;this.buffers=this.items=null};b.prototype.get=function(){0===this.itemsPtr&&f(function(){});for(var a=Math.floor(this.itemsPtr/this.itemsPerBuffer);this.buffers.length<=a;){for(var b=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize),c=0;c<this.itemsPerBuffer;++c)this.items.push(this.itemCreate(b,c*this.itemByteSize));this.buffers.push(b)}return this.items[this.itemsPtr++]};b.prototype.reset=
function(){for(var a=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);this.buffers.length>a;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0};b.createVec2f64=function(a){void 0===a&&(a=c);return new b(16,l.vec2f64.createView,a)};b.createVec3f64=function(a){void 0===a&&(a=c);return new b(24,m.vec3f64.createView,a)};b.createVec4f64=function(a){void 0===a&&(a=c);return new b(32,n.vec4f64.createView,a)};b.createMat3f64=function(a){void 0===a&&(a=c);return new b(72,
g.mat3f64.createView,a)};b.createMat4f64=function(a){void 0===a&&(a=c);return new b(128,h.mat4f64.createView,a)};b.createQuatf64=function(a){void 0===a&&(a=c);return new b(32,k.quatf64.createView,a)};Object.defineProperty(b.prototype,"test",{get:function(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}},enumerable:!0,configurable:!0});return b}();e.VectorStack=d;var c=4096});