//>>built
define("dojo/_base/kernel dojo/_base/lang dojo/_base/connect dojo/_base/html ../gfx ../xml/DomParser ./UndoStack".split(" "),function(e){e.experimental("dojox.sketch");var f=dojox.sketch;f.tools={};f.registerTool=function(a,b){f.tools[a]=b};f.Figure=function(a){var b=this;this.annCounter=1;this.shapes=[];this.imageSrc=this.image=null;this.size={w:0,h:0};this.node=this.group=this.surface=null;this.zoomFactor=1;this.tools=null;this.obj={};e.mixin(this,a);this.selected=[];this.hasSelections=function(){return 0<
this.selected.length};this.isSelected=function(a){for(var c=0;c<b.selected.length;c++)if(b.selected[c]==a)return!0;return!1};this.select=function(a){b.isSelected(a)||(b.clearSelections(),b.selected=[a]);a.setMode(f.Annotation.Modes.View);a.setMode(f.Annotation.Modes.Edit)};this.deselect=function(a){for(var c=-1,d=0;d<b.selected.length;d++)if(b.selected[d]==a){c=d;break}-1<c&&(a.setMode(f.Annotation.Modes.View),b.selected.splice(c,1));return a};this.clearSelections=function(){for(var a=0;a<b.selected.length;a++)b.selected[a].setMode(f.Annotation.Modes.View);
b.selected=[]};this.replaceSelection=function(a,d){if(b.isSelected(d)){for(var c=-1,e=0;e<b.selected.length;e++)if(b.selected[e]==d){c=e;break}-1<c&&b.selected.splice(c,1,a)}else b.select(a)};this._cshape=this._absEnd=this._end=this._start=this._ctool=this._startPoint=this._prevState=this._action=this._lp=this._ctr=this._c=null;this._dblclick=function(a){var c=b._fromEvt(a);if(c)b.onDblClickShape(c,a)};this._keydown=function(a){var c=!1;if(a.ctrlKey)if(90===a.keyCode||122===a.keyCode)b.undo(),c=!0;
else if(89===a.keyCode||121===a.keyCode)b.redo(),c=!0;if(46===a.keyCode||8===a.keyCode)b._delete(b.selected),c=!0;c&&e.stopEvent(a)};this._md=function(a){"vml"==dojox.gfx.renderer&&b.node.focus();var c=b._fromEvt(a);b._startPoint={x:a.pageX,y:a.pageY};b._ctr=e.position(b.node);b._ctr={x:b._ctr.x-b.node.scrollLeft,y:b._ctr.y-b.node.scrollTop};var d=a.clientX-b._ctr.x,f=a.clientY-b._ctr.y;b._lp={x:d,y:f};b._start={x:d,y:f};b._end={x:d,y:f};b._absEnd={x:d,y:f};c?(c.type&&"Anchor"!=c.type()&&(b.isSelected(c)?
b._sameShapeSelected=!0:(b.select(c),b._sameShapeSelected=!1)),c.beginEdit(),b._c=c):(b.clearSelections(),b._ctool.onMouseDown(a))};this._mm=function(a){if(b._ctr)if(b._c&&!b._c.shape)b._clearMouse();else{var c=a.clientX-b._ctr.x,d=a.clientY-b._ctr.y,e=c-b._lp.x,f=d-b._lp.y;b._absEnd={x:c,y:d};if(b._c)b._c.setBinding({dx:e/b.zoomFactor,dy:f/b.zoomFactor}),b._lp={x:c,y:d};else if(b._end={x:e,y:f},c={x:Math.min(b._start.x,b._absEnd.x),y:Math.min(b._start.y,b._absEnd.y),width:Math.abs(b._start.x-b._absEnd.x),
height:Math.abs(b._start.y-b._absEnd.y)},c.width&&c.height)b._ctool.onMouseMove(a,c)}};this._mu=function(a){if(b._c)b._c.shape&&b._c.endEdit();else b._ctool.onMouseUp(a);b._clearMouse()};this._clearMouse=function(){b._c=b._ctr=b._lp=b._action=b._prevState=b._startPoint=null;b._cshape=b._start=b._end=b._absEnd=null};this.initUndoStack()};var d=f.Figure.prototype;d.initUndoStack=function(){this.history=new f.UndoStack(this)};d.setTool=function(a){this._ctool=a};d.gridSize=0;d._calCol=function(a){return this.gridSize?
Math.round(a/this.gridSize)*this.gridSize:a};d._delete=function(a,b){for(var c=0;c<a.length;c++)if(a[c].setMode(f.Annotation.Modes.View),a[c].destroy(b),this.remove(a[c]),this._remove(a[c]),!b)a[c].onRemove();a.splice(0,a.length)};d.onDblClickShape=function(a,b){if(a.onDblClick)a.onDblClick(b)};d.onCreateShape=function(a){};d.onBeforeCreateShape=function(a){};d.initialize=function(a){this.node=a;this.surface=dojox.gfx.createSurface(a,this.size.w,this.size.h);this.group=this.surface.createGroup();
this._cons=[];var b=this.surface.getEventSource();this._cons.push(e.connect(b,"ondraggesture",e.stopEvent),e.connect(b,"ondragenter",e.stopEvent),e.connect(b,"ondragover",e.stopEvent),e.connect(b,"ondragexit",e.stopEvent),e.connect(b,"ondragstart",e.stopEvent),e.connect(b,"onselectstart",e.stopEvent),e.connect(b,"onmousedown",this._md),e.connect(b,"onmousemove",this._mm),e.connect(b,"onmouseup",this._mu),e.connect(b,"onclick",this,"onClick"),e.connect(b,"ondblclick",this._dblclick),e.connect(a,"onkeydown",
this._keydown));this.image=this.group.createImage({width:this.imageSize.w,height:this.imageSize.h,src:this.imageSrc})};d.destroy=function(a){this.node&&(a||(this.history&&this.history.destroy(),this._subscribed&&(e.unsubscribe(this._subscribed),delete this._subscribed)),e.forEach(this._cons,e.disconnect),this._cons=[],e.empty(this.node),this.group=this.surface=null,this.obj={},this.shapes=[])};d.nextKey=function(){return"annotation-"+this.annCounter++};d.draw=function(){};d.zoom=function(a){this.zoomFactor=
a/100;this.surface.setDimensions(this.size.w*this.zoomFactor,this.size.h*this.zoomFactor);this.group.setTransform(dojox.gfx.matrix.scale(this.zoomFactor,this.zoomFactor));for(a=0;a<this.shapes.length;a++)this.shapes[a].zoom(this.zoomFactor)};d.getFit=function(){return 100*Math.min((this.node.parentNode.offsetWidth-5)/this.size.w,(this.node.parentNode.offsetHeight-5)/this.size.h)};d.unzoom=function(){this.zoomFactor=1;this.surface.setDimensions(this.size.w,this.size.h);this.group.setTransform()};d._add=
function(a){this.obj[a._key]=a};d._remove=function(a){this.obj[a._key]&&delete this.obj[a._key]};d._get=function(a){a&&-1<a.indexOf("bounding")?a=a.replace("-boundingBox",""):a&&-1<a.indexOf("-labelShape")&&(a=a.replace("-labelShape",""));return this.obj[a]};d._keyFromEvt=function(a){var b=a.target.id+"";if(0==b.length){a=a.target.parentNode;for(b=this.surface.getEventSource();a&&0==a.id.length&&a!=b;)a=a.parentNode;b=a.id}return b};d._fromEvt=function(a){return this._get(this._keyFromEvt(a))};d.add=
function(a){for(var b=0;b<this.shapes.length;b++)if(this.shapes[b]==a)return!0;this.shapes.push(a);return!0};d.remove=function(a){for(var b=-1,c=0;c<this.shapes.length;c++)if(this.shapes[c]==a){b=c;break}-1<b&&this.shapes.splice(b,1);return a};d.getAnnotator=function(a){for(var b=0;b<this.shapes.length;b++)if(this.shapes[b].id==a)return this.shapes[b];return null};d.convert=function(a,b){var c=b+"Annotation";if(f[c]){var d=a.type(),m=a.id;b=a.label;var n=a.mode,g,h,l,k;switch(d){case "Preexisting":case "Lead":k=
{dx:a.transform.dx,dy:a.transform.dy};g={x:a.start.x,y:a.start.y};h={x:a.end.x,y:a.end.y};l={x:h.x-(h.x-g.x)/2,y:h.y-(h.y-g.y)/2};break;case "SingleArrow":case "DoubleArrow":k={dx:a.transform.dx,dy:a.transform.dy};g={x:a.start.x,y:a.start.y};h={x:a.end.x,y:a.end.y};l={x:a.control.x,y:a.control.y};break;case "Underline":k={dx:a.transform.dx,dy:a.transform.dy},g={x:a.start.x,y:a.start.y},l={x:g.x+50,y:g.y+50},h={x:g.x+100,y:g.y+100}}c=new f[c](this,m);"Underline"==c.type()?c.transform={dx:k.dx+g.x,
dy:k.dy+g.y}:(c.transform&&(c.transform=k),c.start&&(c.start=g));c.end&&(c.end=h);c.control&&(c.control=l);c.label=b;c.token=e.lang.shallowCopy(a.token);c.initialize();this.replaceSelection(c,a);this._remove(a);this.remove(a);a.destroy();c.setMode(n)}};d.setValue=function(a){a=dojox.xml.DomParser.parse(a);this.load(a,this.node)};d.load=function(a,b){this.surface&&this.destroy(!0);a=a.documentElement;this.size={w:parseFloat(a.getAttribute("width"),10),h:parseFloat(a.getAttribute("height"),10)};a=a.childrenByName("g")[0];
var c=a.childrenByName("image")[0];this.imageSize={w:parseFloat(c.getAttribute("width"),10),h:parseFloat(c.getAttribute("height"),10)};this.imageSrc=c.getAttribute("xlink:href");this.initialize(b);b=a.childrenByName("g");for(a=0;a<b.length;a++)this._loadAnnotation(b[a]);this._loadDeferred&&(this._loadDeferred.callback(this),this._loadDeferred=null);this.onLoad()};d.onLoad=function(){};d.onClick=function(){};d._loadAnnotation=function(a){var b=a.getAttribute("dojoxsketch:type")+"Annotation";return f[b]?
(b=new f[b](this,a.id),b.initialize(a),this.nextKey(),b.setMode(f.Annotation.Modes.View),this._add(b),b):null};d.onUndo=function(){};d.onBeforeUndo=function(){};d.onRedo=function(){};d.onBeforeRedo=function(){};d.undo=function(){this.history&&(this.onBeforeUndo(),this.history.undo(),this.onUndo())};d.redo=function(){this.history&&(this.onBeforeRedo(),this.history.redo(),this.onRedo())};d.serialize=function(){for(var a='\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" xmlns:xlink\x3d"http://www.w3.org/1999/xlink" xmlns:dojoxsketch\x3d"http://dojotoolkit.org/dojox/sketch" width\x3d"'+
this.size.w+'" height\x3d"'+this.size.h+'"\x3e\x3cg\x3e\x3cimage xlink:href\x3d"'+this.imageSrc+'" x\x3d"0" y\x3d"0" width\x3d"'+this.size.w+'" height\x3d"'+this.size.h+'" /\x3e',b=0;b<this.shapes.length;b++)a+=this.shapes[b].serialize();return a+"\x3c/g\x3e\x3c/svg\x3e"};d.getValue=d.serialize;return dojox.sketch.Figure});