//>>built
(function(e){"object"===typeof module&&"object"===typeof module.exports?(e=e(require,exports),void 0!==e&&(module.exports=e)):"function"===typeof define&&define.amd&&define("require exports tslib ../shim/Map ../shim/WeakMap ./d ./diff ./RegistryHandler ./NodeHandler ./Registry".split(" "),e)})(function(e,k){Object.defineProperty(k,"__esModule",{value:!0});var l=e("tslib"),n=e("../shim/Map"),m=e("../shim/WeakMap"),p=e("./d"),x=e("./diff"),y=e("./RegistryHandler"),z=e("./NodeHandler"),t=e("./Registry"),
A=0,v=new m.default,u=new m.default,q=new m.default;k.widgetInstanceMap=new m.default;var B=x.auto.bind(null);k.noBind="__dojo_no_bind";e=function(){function b(){var a=this;this._initialProperties=!0;this._changedPropertyKeys=[];this._nodeHandler=new z.default;this._handles=[];this._children=[];this._decoratorCache=new n.default;this._properties={};this._boundRenderFunc=this.render.bind(this);this._boundInvalidate=this.invalidate.bind(this);k.widgetInstanceMap.set(this,{dirty:!0,onAttach:function(){a.onAttach()},
onDetach:function(){a.onDetach();a.destroy()},nodeHandler:this._nodeHandler,rendering:!1,inputProperties:{}});this.own({destroy:function(){k.widgetInstanceMap.delete(a);a._nodeHandler.clear();a._nodeHandler.destroy()}});this._runAfterConstructors()}b.prototype.meta=function(a){void 0===this._metaMap&&(this._metaMap=new n.default);var f=this._metaMap.get(a);f||(f=new a({invalidate:this._boundInvalidate,nodeHandler:this._nodeHandler,bind:this}),this.own(f),this._metaMap.set(a,f));return f};b.prototype.onAttach=
function(){};b.prototype.onDetach=function(){};Object.defineProperty(b.prototype,"properties",{get:function(){return this._properties},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"changedPropertyKeys",{get:function(){return l.__spread(this._changedPropertyKeys)},enumerable:!0,configurable:!0});b.prototype.__setProperties__=function(a,f){var h=this,d=k.widgetInstanceMap.get(this);d&&(d.inputProperties=a);a=this._runBeforeProperties(a);var d=this.getDecorator("registeredDiffProperty"),
c=[],b=Object.keys(a);if(!1===this._initialProperties||0!==d.length){for(var b=l.__spread(b,Object.keys(this._properties)),e=[],m={},n=!1,r=0;r<b.length;r++){var g=b[r];if(-1===e.indexOf(g)){e.push(g);var p=this._properties[g],t=this._bindFunctionProperty(a[g],f);if(-1!==d.indexOf(g))for(var n=!0,u=this.getDecorator("diffProperty:"+g),q=0;q<u.length;q++){var w=u[q](p,t);w.changed&&-1===c.indexOf(g)&&c.push(g);g in a&&(m[g]=w.value)}else w=B(p,t),w.changed&&-1===c.indexOf(g)&&c.push(g),g in a&&(m[g]=
w.value)}}if(n){var v=[];this.getDecorator("diffReaction").forEach(function(a){var f=a.reaction;a=-1!==c.indexOf(a.propertyName);var d=-1!==v.indexOf(f);a&&!d&&(f.call(h,h._properties,m),v.push(f))})}this._properties=m;this._changedPropertyKeys=c}else{this._initialProperties=!1;for(r=0;r<b.length;r++)g=b[r],"function"===typeof a[g]?a[g]=this._bindFunctionProperty(a[g],f):c.push(g);this._changedPropertyKeys=c;this._properties=l.__assign({},a)}0<this._changedPropertyKeys.length&&this.invalidate()};
Object.defineProperty(b.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0});b.prototype.__setChildren__=function(a){if(0<this._children.length||0<a.length)this._children=a,this.invalidate()};b.prototype._filterAndConvert=function(a){var f=Array.isArray(a);a=Array.isArray(a)?a:[a];for(var h=[],d=0;d<a.length;d++){var c=a[d];if(c)if("string"===typeof c)h.push({tag:"",properties:{},children:void 0,text:""+c,type:p.VNODE});else{if(p.isVNode(c)&&c.deferredPropertiesCallback){var b=
c.deferredPropertiesCallback(!1);c.originalProperties=c.properties;c.properties=l.__assign({},b,c.properties)}if(p.isWNode(c)&&!t.isWidgetBaseConstructor(c.widgetConstructor)){if("function"===typeof c.widgetConstructor)b=v.get(c.widgetConstructor),b||(b="__lazy_widget_"+A++,v.set(c.widgetConstructor,b),this.registry.define(b,c.widgetConstructor)),c.widgetConstructor=b;else if((b=c.widgetConstructor)&&b.label){var e=c.widgetConstructor,b=e.label,e=e.registryItem;this.registry.has(b)||this.registry.define(b,
e);c.widgetConstructor=b}c.widgetConstructor=this.registry.get(c.widgetConstructor)||c.widgetConstructor}c.bind||(c.bind=this);h.push(c);c.children&&c.children.length&&(c.children=this._filterAndConvert(c.children))}}return f?h:h[0]};b.prototype.__render__=function(){var a=k.widgetInstanceMap.get(this);a&&(a.dirty=!1);a=this._runBeforeRenders();a=this._filterAndConvert(this._runAfterRenders(a()));this._nodeHandler.clear();return a};b.prototype.invalidate=function(){var a=k.widgetInstanceMap.get(this);
a&&a.invalidate&&a.invalidate()};b.prototype.render=function(){return p.v("div",{},this.children)};b.prototype.addDecorator=function(a,f){f=Array.isArray(f)?f:[f];if(this.hasOwnProperty("constructor")){var b=u.get(this.constructor);b||(b=new n.default,u.set(this.constructor,b));var d=b.get(a);d||(d=[],b.set(a,d));d.push.apply(d,l.__spread(f))}else b=this.getDecorator(a),this._decoratorCache.set(a,l.__spread(b,f))};b.prototype._buildDecoratorList=function(a){for(var b=[],h=this.constructor;h;){var d=
u.get(h);d&&(d=d.get(a))&&b.unshift.apply(b,l.__spread(d));h=Object.getPrototypeOf(h)}h=q.get(this.constructor)||new n.default;h.set(a,b);q.set(this.constructor,h);return b};b.prototype.getDecorator=function(a){var b=q.get(this.constructor),b=this._decoratorCache.get(a)||b&&b.get(a);if(void 0!==b)return b;b=this._buildDecoratorList(a);b=l.__spread(b);this._decoratorCache.set(a,b);return b};b.prototype._bindFunctionProperty=function(a,b){if("function"===typeof a&&!a[k.noBind]&&!1===t.isWidgetBaseConstructor(a)){void 0===
this._bindFunctionPropertyMap&&(this._bindFunctionPropertyMap=new m.default);var f=this._bindFunctionPropertyMap.get(a)||{},d=f.boundFunc,f=f.scope;if(void 0===d||f!==b)d=a.bind(b),this._bindFunctionPropertyMap.set(a,{boundFunc:d,scope:b});return d}return a};Object.defineProperty(b.prototype,"registry",{get:function(){void 0===this._registry&&(this._registry=new y.default,this.own(this._registry),this.own(this._registry.on("invalidate",this._boundInvalidate)));return this._registry},enumerable:!0,
configurable:!0});b.prototype._runBeforeProperties=function(a){var b=this,h=this.getDecorator("beforeProperties");return 0<h.length?h.reduce(function(a,c){return l.__assign({},a,c.call(b,a))},l.__assign({},a)):a};b.prototype._runBeforeRenders=function(){var a=this,b=this.getDecorator("beforeRender");return 0<b.length?b.reduce(function(b,d){d=d.call(a,b,a._properties,a._children);return d?d:(console.warn("Render function not returned from beforeRender, using previous render"),b)},this._boundRenderFunc):
this._boundRenderFunc};b.prototype._runAfterRenders=function(a){var b=this,e=this.getDecorator("afterRender");0<e.length&&(a=e.reduce(function(a,c){return c.call(b,a)},a));void 0!==this._metaMap&&this._metaMap.forEach(function(a){a.afterRender&&a.afterRender()});return a};b.prototype._runAfterConstructors=function(){var a=this,b=this.getDecorator("afterConstructor");0<b.length&&b.forEach(function(b){return b.call(a)})};b.prototype.own=function(a){this._handles.push(a)};b.prototype.destroy=function(){for(;0<
this._handles.length;){var a=this._handles.pop();a&&a.destroy()}};b._type=t.WIDGET_BASE_TYPE;return b}();k.WidgetBase=e;k.default=e});