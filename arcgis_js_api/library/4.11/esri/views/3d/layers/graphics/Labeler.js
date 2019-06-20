// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Handles ../../../../core/Logger ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators ../../../../layers/support/LabelClass ../../../../layers/support/labelFormatUtils ../../../../support/arcadeUtils ../../../../symbols/callouts/calloutUtils ./Graphics3DCalloutSymbolLayerFactory ./graphicSymbolUtils ./labelPlacement ../../support/debugFlags ../../webgl-engine/Stage ../../webgl-engine/lib/Layer ../../webgl-engine/lib/MaterialCollection ../../webgl-engine/lib/TextRenderer ../../webgl-engine/lib/TextRenderParameters ../../webgl-engine/lib/TextTextureAtlas".split(" "),
function(m,r,y,n,z,A,B,t,p,C,u,D,E,F,G,H,I,v,J,w,K,L,M){Object.defineProperty(r,"__esModule",{value:!0});var N=B.getLogger("esri.views.3d.layers.graphics.Labeler");m=function(m){function d(a){a=m.call(this)||this;a.idHint="__labeler";a._dirty=!1;a.labels={};a.labelsToAdd={};a.labelsToRemove={};a.labelingContexts=[];return a}y(d,m);d.prototype.setup=function(){var a=this;this.handles||(this.handles=new A,this.handles.add([this.view.watch("state.camera",function(){return a.setDirty()}),this.view.watch("pixelRatio",
function(){return a.resetAllLabels()})]));this.textTextureAtlas||(this.textTextureAtlas=new M.default(this.idHint+"_atlas",this.view),this.hudMaterialCollection=new w(this.view._stage),this.calloutMaterialCollection=new w(this.view._stage));this.handles.add(this.view.resourceController.scheduler.registerTask(8,function(b){return a.update(b)},function(){return a.needsUpdate()}))};d.prototype.dispose=function(){this.handles&&(this.handles.destroy(),this.handles=null);this.textTextureAtlas&&(this.textTextureAtlas.dispose(),
this.textTextureAtlas=null);this.hudMaterialCollection&&(this.hudMaterialCollection.dispose(),this.hudMaterialCollection=null);this.calloutMaterialCollection&&(this.calloutMaterialCollection.dispose(),this.calloutMaterialCollection=null);this.labelingContexts=[];this.labels={};this.labelsToAdd={};this.labelsToRemove={}};d.prototype.isActiveLabelingContext=function(a){return a.active&&this.labelsEnabled(a)};d.prototype.activateLabelingContext=function(a){for(var b in a.labels){var c=a.labels[b];this.labels[b]=
c;c.graphics3DGraphic.setVisibilityFlag(0,!0,1)}a.active=!0};d.prototype.deactivateLabelingContext=function(a){for(var b in a.labels){var c=a.labels[b];c.graphics3DGraphic.setVisibilityFlag(0,!1,1);c.rendered&&(this.labelsToRemove[b]=a.labels[b]);delete this.labels[b];delete this.labelsToAdd[b]}a.active=!1};d.prototype.addLabelTextureToAtlas=function(a){for(var b=0;b<a.graphics3DGraphic._labelGraphics.length;b++){var c=a.graphics3DGraphic._labelGraphics[b];if(c._labelClass){var e=a.textRenderers[c._labelIndex];
e&&this.textTextureAtlas.addTextTexture(e,c.stageObject)}}a.rendered=!0};d.prototype.removeLabelTextureFromAtlas=function(a){for(var b=a.graphics3DGraphic,c=0;c<b._labelGraphics.length;c++){var e=b._labelGraphics[c];e._labelClass&&(e=a.textRenderers[e._labelIndex])&&this.textTextureAtlas.removeTextTexture(e,b._labelGraphics[c].stageObject)}a.rendered=!1};d.prototype.needsUpdate=function(){return this.view.ready&&this.isDirty};d.prototype.update=function(a){for(var b=null!=a,c=this._dirty=!1,e=0,d=
this.labelingContexts;e<d.length;e++){var f=d[e];if(this.isActiveLabelingContext(f)){if(!this.hasValidLabelClassContext(f)){if(this.hasInvalidLabelClassContext(f)){this.deactivateLabelingContext(f);continue}this.createLabelClassContext(f);if(this.hasPendingLabelClassContext(f)){this._dirty=!0;continue}if(!this.hasValidLabelClassContext(f))continue}for(var h in f.labelsToInitialize){var l=f.labelsToInitialize[h];this.ensureGraphics3DResources(l)&&(this.labels[h]=l,c=!0);(l.visible&&l.hasTextTextureResources||
!l.visible&&l.hasGraphics3DResources)&&delete f.labelsToInitialize[h];if(b&&(a.madeProgress(),a.done)){this._dirty=!0;return}}}}b&&c&&this.view.deconflictor.setDirty();for(h in this.labelsToRemove)this.removeLabelTextureFromAtlas(this.labelsToRemove[h]),delete this.labelsToRemove[h];for(h in this.labelsToAdd)this.addLabelTextureToAtlas(this.labelsToAdd[h]),delete this.labelsToAdd[h]};d.prototype.hasPendingLabelClassContext=function(a){return a.labelClassPromise&&!a.labelClassPromise.isResolved()};
d.prototype.hasValidLabelClassContext=function(a){return a.labelClassContexts&&a.labelClassContexts.length};d.prototype.hasInvalidLabelClassContext=function(a){return null===a.labelClassContexts};d.prototype.createLabelClassContext=function(a){var b=this;if(a.labelClassPromise)return a.labelClassPromise;a.labelClassPromise=a.layer.when(function(){a.scaleVisibility&&a.scaleVisibility.updateScaleRangeActive();var c=a.graphics3DCore,e=c.layer.labelingInfo&&c.layer.labelingInfo.filter(function(a){return!!a.symbol});
if(!e||0===e.length)return null;if(e.some(function(a){return D.hasGeometryOperations(a)}))return N.warn('Label expressions with arcade geometry operations are not supported. Labels for layer "'+a.layer.title+'" will not display '),null;var d=Array(e.length),e=e.map(function(a,e){var f=a.symbol,h=G.getGraphics3DSymbol(c.getOrCreateGraphics3DSymbol(f)),x=null;E.isCalloutSupport(f)&&f.hasVisibleCallout()&&(x=F.make(f,c.symbolCreationContext));d[e]={labelClass:a,graphics3DSymbol:h,graphics3DCalloutSymbolLayer:x,
options:u.getLabelingOptions(a),calloutSymbolLayerIndex:0,textRenderParameters:b.createTextRenderParameters(h.symbol)};return h});return t.all(e).then(function(){return d})}).then(function(b){b&&(a.labelClassContexts=b)}).catch(function(){a.labelClassContexts=null});return a.labelClassPromise};d.prototype.createTextRenderParameters=function(a){return(a=a.symbolLayers.getItemAt(0))&&"text"===a.type?L.default.fromSymbol(a,this.view.pixelRatio):null};d.prototype.destroyLabelClassContext=function(a){for(var b=
0,c=a.labelClassContexts;b<c.length;b++){var e=c[b];--e.graphics3DSymbol.referenced;e.graphics3DSymbol=null}a.labelClassContexts=[];a.labelClassPromise=null};d.prototype.createLabelText=function(a,b,c,e){if(!C.evaluateWhere(b.where,a.attributes))return null;b=b.getLabelExpression();return b.expression?u.buildLabelText(b.expression,a,e.fields,c):null};d.prototype.createTextSymbolGraphic=function(a,b,c,e,d){a={text:a.text,centerOffset:c.centerOffset,translation:c.translation,elevationOffset:c.elevationOffset,
screenOffset:c.screenOffset,anchor:c.anchor,centerOffsetUnits:c.centerOffsetUnits,verticalOffset:c.verticalOffset,debugDrawBorder:I.LABELS_SHOW_BORDER,displayWidth:a.displayWidth,displayHeight:a.displayHeight};g.graphic=b;g.renderingInfo=null;g.layer=e;return d.createLabel(g,a,this.hudMaterialCollection,this.textTextureAtlas)};d.prototype.createLineCalloutGraphic=function(a,b,c,e,d){b={symbol:b,translation:e.translation,elevationOffset:e.elevationOffset,screenOffset:e.screenOffset,centerOffset:e.centerOffset,
centerOffsetUnits:e.centerOffsetUnits,materialCollection:this.calloutMaterialCollection};g.graphic=a;g.renderingInfo=b;g.layer=d;return c.createGraphics3DGraphic(g)};d.prototype.ensureGraphics3DResources=function(a){var b=a.graphics3DGraphic;if(b.destroyed||a.hasGraphics3DResources)return!1;this.ensureTextTextureResources(a);var c=a.labelingContext,e=!1,d=b.graphic,f=c.labelClassContexts,h=c.layer,l=this.labelsEnabled(c);if(!f||0===f.length||!b._graphics[0])return!1;for(var g=0;g<f.length;g++){var q=
f[g],m=q.labelClass,p=a.textRenderers[g];if(p){var k=q.graphics3DSymbol,n=null;k.symbol&&"label-3d"===k.symbol.type&&(n=k.symbol);var r=k.childGraphics3DSymbols[0],k=H.get({graphics3DGraphic:b,labelSymbol:n,labelClass:q.labelClass});if(r&&k){if(e=this.createTextSymbolGraphic(p,d,k,h,r)){if(e._labelClass=m,e._labelIndex=g,b.addLabelGraphic(e,c.stageLayer,this.view._stage),c.spatialIndex&&c.spatialIndex.add(b),b.setVisibilityFlag(0,l,1),b.clearVisibilityFlag(1,1),b.setVisibilityFlag(3,!1,1),e=!0,q.graphics3DCalloutSymbolLayer&&
k.hasLabelVerticalOffset&&(d=this.createLineCalloutGraphic(d,n,q.graphics3DCalloutSymbolLayer,k,h)))q.calloutSymbolLayerIndex=b._labelGraphics.length,b.addLabelGraphic(d,c.stageLayer,this.view._stage)}else return!1;break}}}c.scaleVisibility&&e&&c.scaleVisibility.updateGraphicLabelScaleVisibility(b);return a.hasGraphics3DResources=!0};d.prototype.destroyGraphics3DResources=function(a){a.graphics3DGraphic.clearLabelGraphics();a.hasGraphics3DResources=!1};d.prototype.ensureTextTextureResources=function(a){if(!a.hasTextTextureResources){var b=
a.labelingContext,c=b.labelClassContexts,b=b.layer,e=a.graphics3DGraphic.graphic;if(c&&0!==c.length){for(var d=0;d<c.length;d++){var f=c[d];a.textRenderers[d]=null;if(f.textRenderParameters){var h=this.createLabelText(e,f.labelClass,f.options,b);h&&(a.textRenderers[d]=new K.default(h,f.textRenderParameters))}}a.hasTextTextureResources=!0}}};d.prototype.destroyTextTextureResources=function(a){a.textRenderers=[];a.hasTextTextureResources=!1};d.prototype.addGraphic=function(a,b){var c={hasGraphics3DResources:!1,
hasTextTextureResources:!1,visible:!1,rendered:!1,labelingContext:a,graphics3DGraphic:b,textRenderers:[]};b=b.graphic.uid;a.labels[b]=c;this.isActiveLabelingContext(a)&&this.hasValidLabelClassContext(a)&&this.ensureGraphics3DResources(c)?this.labels[b]=c:a.labelsToInitialize[b]=c;this.setDirty(a.graphics3DCore.asyncUpdates);this.view.deconflictor.setDirty()};d.prototype.removeGraphic=function(a,b){b=b.graphic.uid;var c=a.labels[b];c&&(this.labels[b]&&(this.removeLabelTextureFromAtlas(c),delete this.labels[b],
delete this.labelsToAdd[b],delete this.labelsToRemove[b]),c.hasTextTextureResources&&this.destroyTextTextureResources(c),c.hasGraphics3DResources&&this.destroyGraphics3DResources(c),delete a.labels[b],delete a.labelsToInitialize[b],this.setDirty(a.graphics3DCore.asyncUpdates),this.view.deconflictor.setDirty())};d.prototype.labelsEnabled=function(a){return!0===a.layer.labelsVisible&&null!=a.layer.labelingInfo&&0<a.layer.labelingInfo.length};d.prototype.labelingInfoChange=function(a,b){if(b){for(var c=
0;c<b.length;c++){var d=a.labels[b[c]];d&&(this.removeGraphic(a,d.graphics3DGraphic),this.addGraphic(a,d.graphics3DGraphic))}return t.create(function(a){return!0})}this.visibilityInfoChange(a);this.resetLabels(a);return this.createLabelClassContext(a)};d.prototype.globalPropertyChanged=function(a,b){for(var c=function(c){var d=new Map,e;for(e in b.labels){var f=b.labels[e].graphics3DGraphic;d.set(f.graphic.uid,f)}c.graphics3DSymbol.childGraphics3DSymbols[0].globalPropertyChanged(a,d,function(a){return a._labelGraphics[0]});
c.graphics3DCalloutSymbolLayer&&c.graphics3DCalloutSymbolLayer.globalPropertyChanged(a,d,function(a){return a._labelGraphics[c.calloutSymbolLayerIndex]})},d=0,g=b.labelClassContexts;d<g.length;d++)c(g[d])};d.prototype.visibilityInfoChange=function(a){var b=a.layer.labelsVisible;b&&!a.active&&this.activateLabelingContext(a);!b&&a.active&&this.deactivateLabelingContext(a);this.setDirty(a.graphics3DCore.asyncUpdates)};d.prototype.resetAllLabels=function(){for(var a=0,b=this.labelingContexts;a<b.length;a++)this.resetLabels(b[a])};
d.prototype.resetLabels=function(a){for(var b in a.labels){var c=a.labels[b];this.labels[b]&&(this.removeLabelTextureFromAtlas(c),delete this.labels[b],delete this.labelsToAdd[b],delete this.labelsToRemove[b]);c.hasTextTextureResources&&this.destroyTextTextureResources(c);c.hasGraphics3DResources&&this.destroyGraphics3DResources(c);c.visible=!1;c.rendered=!1;a.labelsToInitialize[b]=c}this.destroyLabelClassContext(a);this.setDirty(a.graphics3DCore.asyncUpdates);this.view.deconflictor.setDirty()};d.prototype.findLabelingContext=
function(a){for(var b=0,c=this.labelingContexts;b<c.length;b++){var d=c[b];if(d.graphics3DCore===a)return d}return null};d.prototype.addGraphicsOwner=function(a,b,c){var d=this;if(!this.findLabelingContext(a)){var g=a.layer,f={graphics3DCore:a,layer:g,scaleVisibility:b,spatialIndex:c,active:a.layer.labelsVisible,labelClassPromise:null,labelClassContexts:[],labels:{},labelsToInitialize:{},stageLayer:new J(this.idHint+"_"+g.uid,{isPickable:!0},g.uid)};this.view._stage.add(v.ModelContentType.LAYER,f.stageLayer);
this.view._stage.addToViewContent([f.stageLayer.id]);this.labelingContexts.push(f);this.setDirty();return{addGraphic:function(a){return d.addGraphic(f,a)},removeGraphic:function(a){return d.removeGraphic(f,a)},featureReductionChange:function(){},layerLabelsEnabled:function(){return d.labelsEnabled(f)},labelingInfoChange:function(a){return d.labelingInfoChange(f,a)},elevationInfoChange:function(){return d.globalPropertyChanged("elevationInfo",f)},slicePlaneEnabledChange:function(){return d.globalPropertyChanged("slicePlaneEnabled",
f)},visibilityInfoChange:function(){return d.visibilityInfoChange(f)},reset:function(){return d.resetLabels(f)},clear:function(){},processStageDirty:function(){return d.view._stage.processDirtyLayer(f.stageLayer.id)}}}};d.prototype.removeGraphicsOwner=function(a){if(a=this.findLabelingContext(a)){var b=this.labelingContexts.indexOf(a);this.labelingContexts.splice(b,1);for(var c in a.labels)this.removeGraphic(a,a.labels[c].graphics3DGraphic);c=a.stageLayer.id;this.view._stage.removeFromViewContent([c]);
this.view._stage.remove(v.ModelContentType.LAYER,c);a.stageLayer=null;this.setDirty()}};d.prototype.setLabelGraphicVisibility=function(a,b){a=a.graphic.uid;var c=this.labels[a];c&&(b&&!c.rendered?(this.labelsToAdd[a]=c,c.hasTextTextureResources||(c.labelingContext.labelsToInitialize[a]=c)):!b&&c.rendered&&(this.labelsToRemove[a]=c),c.visible=b,this.setDirty(c.labelingContext.graphics3DCore.asyncUpdates))};Object.defineProperty(d.prototype,"isDirty",{get:function(){return this._dirty||this.textTextureAtlas&&
this.textTextureAtlas.isDirty},enumerable:!0,configurable:!0});d.prototype.setDirty=function(a){void 0===a&&(a=!0);this._dirty=!0;a||this.update(null)};Object.defineProperty(d.prototype,"updating",{get:function(){return this.labelingContexts.some(function(a){return a.labelClassPromise&&!a.labelClassPromise.isResolved()})},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"test",{get:function(){return{textTextureAtlas:this.textTextureAtlas}},enumerable:!0,configurable:!0});n([p.property({constructOnly:!0})],
d.prototype,"view",void 0);n([p.property({type:Boolean,readOnly:!0})],d.prototype,"updating",null);return d=n([p.subclass()],d)}(p.declared(z));r.Labeler=m;var g={graphic:null,renderingInfo:null,layer:null}});