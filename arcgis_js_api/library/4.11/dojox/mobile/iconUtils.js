//>>built
define("dojo/_base/array dojo/_base/config dojo/_base/connect dojo/_base/event dojo/_base/lang dojo/_base/window dojo/dom-class dojo/dom-construct dojo/dom-style ./sniff".split(" "),function(p,x,q,r,t,u,e,k,l,v){var w=t.getObject("dojox.mobile",!0);return new function(){this.setupSpriteIcon=function(b,d){if(b&&d){d=p.map(d.split(/[ ,]/),function(a){return a-0});var a=d[0],f=d[1];l.set(b,{position:"absolute",clip:"rect("+a+"px "+(d[1]+d[2])+"px "+(d[0]+d[3])+"px "+f+"px)",top:(b.parentNode?l.get(b,
"top"):0)-a+"px",left:-f+"px"});e.add(b,"mblSpriteIcon")}};this.createDomButton=function(b,d,a){if(!this._domButtons)if(v("webkit")){var f=function(a,b){var c;if(!a){b={};var d=u.doc.styleSheets;for(a=0;a<d.length;a++)d[a]&&f(d[a],b);return b}d=a.cssRules||[];for(a=0;a<d.length;a++)if(c=d[a],c.href&&c.styleSheet)f(c.styleSheet,b);else if(c.selectorText){var g=c.selectorText.split(/,/);for(c=0;c<g.length;c++){var e=g[c],h=e.split(/>/).length-1;e.match(/(mblDomButton\w+)/)&&(e=RegExp.$1,!b[e]||h>b[e])&&
(b[e]=h)}}return b};this._domButtons=f()}else this._domButtons={};var c=b.className,g=a||b;if(c.match(/(mblDomButton\w+)/)&&-1===c.indexOf("/")){var h=RegExp.$1,m=4;c.match(/(mblDomButton\w+_(\d+))/)?m=RegExp.$2-0:void 0!==this._domButtons[h]&&(m=this._domButtons[h]);for(var c=0,n=g;c<m;c++)n=n.firstChild||k.create("div",null,n);a&&(setTimeout(function(){e.remove(b,h)},0),e.add(a,h))}else if(-1!==c.indexOf("."))k.create("img",{src:c},g);else return null;e.add(g,"mblDomButton");d&&l.set(g,d);return g};
this.createIcon=function(b,d,a,f,c,g,h){f=f||"";b&&0===b.indexOf("mblDomButton")?(a?a.className.match(/(mblDomButton\w+)/)&&e.remove(a,RegExp.$1):a=k.create("div",null,g||c,h),a.title=f,e.add(a,b),this.createDomButton(a)):b&&"none"!==b&&(a&&"IMG"===a.nodeName||(a=k.create("img",{alt:f},g||c,h)),a.src=(b||"").replace("${theme}",w.currentTheme),this.setupSpriteIcon(a,d),d&&c&&(b=d.split(/[ ,]/),l.set(c,{position:"relative",width:b[2]+"px",height:b[3]+"px"}),e.add(c,"mblSpriteIconParent")),q.connect(a,
"ondragstart",r,"stop"));return a};this.iconWrapper=!1;this.setIcon=function(b,d,a,f,c,g,h){if(!c||!b&&!a)return null;if(b&&"none"!==b)return this.iconWrapper||0===b.indexOf("mblDomButton")||d?(a&&"IMG"===a.tagName&&(k.destroy(a),a=null),a&&k.empty(a),a||(a=k.create("div",null,g||c,h)),this.createIcon(b,d,null,null,a),f&&(a.title=f)):(a&&"DIV"===a.tagName&&(k.destroy(a),a=null),a=this.createIcon(b,null,a,f,c,g,h),e.add(a,"mblImageIcon")),e.remove(c,"mblNoIcon"),a;k.destroy(a);e.add(c,"mblNoIcon");
return null}}});