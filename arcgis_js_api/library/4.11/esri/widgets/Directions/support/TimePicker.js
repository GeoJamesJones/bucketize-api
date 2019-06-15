// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../nls/TimePicker dojo/keys ../../../moment ../../../core/accessorSupport/decorators ../../Widget ./TimePickerViewModel ../../support/widget".split(" "),function(x,y,q,g,r,e,t,h,u,n,k){var v=[e.DOWN_ARROW,e.LEFT_ARROW,e.RIGHT_ARROW,e.UP_ARROW,e.TAB];return function(p){function b(a){a=p.call(this)||this;a._activeTime=null;a.value=null;a.viewModel=new n;return a}q(b,p);b.prototype.render=
function(){var a=this._activeTime||this.viewModel.value;return k.tsx("div",{class:"esri-time-picker esri-widget"},k.tsx("input",{afterUpdate:this._handleInputUpdate,"aria-label":r.inputTitle,bind:this,class:this.classes("esri-time-picker__input","esri-input"),onblur:this._handleInputBlur,onfocus:this._handleInputFocus,onkeydown:this._handleInputKeydown,onclick:this._handleInputClick,onpaste:this._handleInputPaste,onwheel:this._handleInputWheel,value:a.format("LT")}))};b.prototype._handleInputBlur=
function(){this._activeTime.isValid()&&(this.viewModel.value=this._activeTime);this._activePart=this._activeTime=null};b.prototype._handleInputUpdate=function(a){this._selectPart(a,this._activePart)};b.prototype._selectPart=function(a,d){var c=this._activeTime;if(c){var c=c.format("LT"),l=c.indexOf(":");if("hours"===d)a.setSelectionRange(0,l);else{var b=l+1,l=b+2;"minutes"===d?a.setSelectionRange(b,l):(c=c.length,"meridiem"===d&&a.setSelectionRange(l+1,c))}}};b.prototype._handleInputFocus=function(a){this._activePart=
"hours";this._activeTime=this.viewModel.value.clone().startOf("minute");this._selectPart(a.target,"hours")};b.prototype._caretIndexToPartName=function(a){var d=this._activeTime.format("LT"),c=d.indexOf(":"),d=d.indexOf(" ");return a<=c?"hours":a>c&&a<=d?"minutes":"meridiem"};b.prototype._handleInputKeydown=function(a){var d=a.ctrlKey,c=a.key,b=a.keyCode,w=a.metaKey,h=a.shiftKey,f=this._activeTime,m=this._activePart,g=/\d/.test(c),k=/^a|p$/i.test(c),d=w||d;if(-1<v.indexOf(b)||g||"meridiem"===m&&k&&
!d){if(b===e.LEFT_ARROW)this._activePart=this._prevPart();else if(b===e.RIGHT_ARROW)this._activePart=this._nextPart();else if(b===e.TAB){f=h?this._prevPart():this._nextPart();if(f===this._activePart)return;this._activePart=f}else b===e.UP_ARROW?this._shift("up",f,m):b===e.DOWN_ARROW?this._shift("down",f,m):g?this._setTime(f,m,Number(c)):k&&(c=c.toLowerCase(),b=f.hour(),("a"===c&&12<=b||"p"===c&&12>b)&&this._shift("up",f,m));a.preventDefault();a.stopImmediatePropagation()}else d||(a.preventDefault(),
a.stopImmediatePropagation())};b.prototype._handleInputClick=function(a){a=a.target;this._activePart=null;this.renderNow();this._activePart=this._caretIndexToPartName(a.selectionStart)};b.prototype._getOrderedParts=function(){return-1<this._activeTime.format("LT").indexOf(" ")?["hours","minutes","meridiem"]:["hours","minutes"]};b.prototype._prevPart=function(){var a=this._getOrderedParts(),d=a.indexOf(this._activePart)-1;return a[Math.max(d,0)]};b.prototype._nextPart=function(){var a=this._getOrderedParts(),
d=a.indexOf(this._activePart)+1;return a[Math.min(d,a.length-1)]};b.prototype._setTime=function(a,d,b){if("hours"===d){d=-1<a.format("LT").indexOf(" ")?12:24;var c=""+a.hour()%d,e=Number(""+c+b);2===c.length||e>d?a.hour(b):e<=d&&a.hour(e)}else"minutes"===d&&(d=""+a.minute(),c=Number(""+d+b),2===d.length||59<c?a.minute(b):59>c&&a.minute(c))};b.prototype._handleInputPaste=function(a){var b=a.clipboardData.getData("text/plain"),b=t(b);b.isValid()&&(this._activeTime=b);a.preventDefault();a.stopImmediatePropagation()};
b.prototype._handleInputWheel=function(a){this._shift(0>a.deltaY?"up":"down",this._activeTime,this._activePart)};b.prototype._shift=function(a,b,c){if(a&&b&&c)b["up"===a?"add":"subtract"]("meridiem"===c?12:1,"hours"===c?"hour":"minutes"===c?"minute":"hours")};g([h.aliasOf("viewModel.value")],b.prototype,"value",void 0);g([h.property({type:n}),k.renderable("viewModel.value")],b.prototype,"viewModel",void 0);return b=g([h.subclass("esri.widgets.Directions.support.TimePicker")],b)}(h.declared(u))});