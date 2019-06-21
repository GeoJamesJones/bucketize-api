// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/screenUtils ../InputHandler ./support".split(" "),function(k,f,m,n,p,q){function l(b){var d=[];b.forEach(function(a){d.push(n.createScreenPoint(a.event.x,a.event.y))});return q.fitCircleLSQ(d)}function g(b){var d=l(b),a=0;b.forEach(function(e){for(var c=h(e,d),c=c-e.lastAngle;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;c=e.lastAngle+c;e.lastAngle=c;a+=c-e.initialAngle});a/=b.size||1;return{angle:a,radius:d.radius,
center:d.center}}function r(b){var d=new Map;b.forEach(function(a,e){return d.set(e,a.event)});return d}function h(b,d){b=b.event;return Math.atan2(b.y-d.center.y,b.x-d.center.x)}Object.defineProperty(f,"__esModule",{value:!0});k=function(b){function d(){var a=b.call(this,!1)||this;a.startStateModifiers=new Set;a.activePointerMap=new Map;a.isDragging=!1;a.drag=a.registerOutgoing("drag");a.registerIncoming("pointer-drag",a.handlePointerDrag.bind(a));a.registerIncoming("pointer-up",a.handlePointerUpAndPointerLost.bind(a));
a.registerIncoming("pointer-capture-lost",a.handlePointerUpAndPointerLost.bind(a));a.registerIncoming("pointer-cancel",a.handlePointerUpAndPointerLost.bind(a));return a}m(d,b);d.prototype.createPayload=function(a,e,c,b){return{action:a,pointerType:this.pointerType,button:this.mouseButton,buttons:e.buttons,timestamp:b,pointers:r(this.activePointerMap),pointer:e,angle:c.angle,radius:c.radius,center:c.center}};d.prototype.addPointer=function(a){var e=a.native.pointerId,c=g(this.activePointerMap).angle;
a={event:a,initialAngle:0,lastAngle:0};this.activePointerMap.set(e,a);e=h(a,l(this.activePointerMap));a.initialAngle=e;a.lastAngle=e;this.updatePointerAngles(c)};d.prototype.updatePointer=function(a){if(!a||null!=a.x||null!=a.y){var e=this.activePointerMap.get(a.native.pointerId);e?e.event=a:this.addPointer(a)}};d.prototype.removePointer=function(a){var e=g(this.activePointerMap).angle;this.activePointerMap.delete(a);this.updatePointerAngles(e)};d.prototype.updatePointerAngles=function(a){var e=g(this.activePointerMap);
this.activePointerMap.forEach(function(c){c.initialAngle=h(c,e)-a;c.lastAngle=h(c,e)-a})};d.prototype.emitEvent=function(a,e,c){var b=g(this.activePointerMap);this.drag.emit(this.createPayload(a,e,b,c),void 0,this.startStateModifiers)};d.prototype.handlePointerUpAndPointerLost=function(a){var b=a.data.native.pointerId,c=a.timestamp;this.activePointerMap.get(b)&&(1===this.activePointerMap.size?(this.updatePointer(a.data),this.emitEvent("end",a.data,c),this.isDragging=!1,this.removePointer(b)):(this.removePointer(b),
this.emitEvent("removed",a.data,a.timestamp)))};d.prototype.handlePointerDrag=function(a){var b=a.data,c=b.currentEvent,d=a.timestamp;switch(b.action){case "start":case "update":this.isDragging?this.activePointerMap.has(c.native.pointerId)?(this.updatePointer(c),this.emitEvent("update",c,d)):(this.addPointer(c),this.emitEvent("added",c,d)):(this.updatePointer(c),this.pointerType=a.data.startEvent.pointerType,this.mouseButton=a.data.startEvent.button,this.startStateModifiers=a.modifiers,this.isDragging=
!0,this.emitEvent("start",c,d))}};return d}(p.InputHandler);f.Drag=k;(function(b){b[b.Left=0]="Left";b[b.Middle=1]="Middle";b[b.Right=2]="Right";b[b.Back=3]="Back";b[b.Forward=4]="Forward";b[b.Undefined=-1]="Undefined"})(f.Button||(f.Button={}))});