//>>built
define(["dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang"],function(h,m,f,k,d){function n(a){return a.substring(0,1).toUpperCase()+a.substring(1)}function l(a,b){var c=a.resize?a.resize(b):f.setMarginBox(a.domNode,b);c?d.mixin(a,c):(d.mixin(a,f.getMarginBox(a.domNode)),d.mixin(a,b))}return{marginBox2contentBox:function(a,b){var c=k.getComputedStyle(a),g=f.getMarginExtents(a,c),d=f.getPadBorderExtents(a,c);return{l:k.toPixelValue(a,c.paddingLeft),t:k.toPixelValue(a,
c.paddingTop),w:b.w-(g.w+d.w),h:b.h-(g.h+d.h)}},layoutChildren:function(a,b,c,g,f){b=d.mixin({},b);m.add(a,"dijitLayoutContainer");c=h.filter(c,function(b){return"center"!=b._constraint&&"client"!=b.layoutAlign}).concat(h.filter(c,function(b){return"center"==b._constraint||"client"==b.layoutAlign}));h.forEach(c,function(a){var c=a.domNode,e=a._constraint||a.layoutAlign;if(!e)throw Error("No constraint setting for "+a.id);var d=c.style;d.left=b.l+"px";d.top=b.t+"px";d.position="absolute";m.add(c,"dijitAlign"+
n(e));c={};g&&g==a.id&&(c["top"==a._constraint||"bottom"==a._constraint?"h":"w"]=f);"top"==e||"bottom"==e?(c.w=b.w,l(a,c),b.h-=a.h,"top"==e?b.t+=a.h:d.top=b.t+b.h+"px"):"left"==e||"right"==e?(c.h=b.h,l(a,c),b.w-=a.w,"left"==e?b.l+=a.w:d.left=b.l+b.w+"px"):"client"!=e&&"center"!=e||l(a,b)})}}});