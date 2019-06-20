// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/types/mat4 ../../../../geometry/support/aaBoundingRect ../../support/buffer/InterleavedLayout ../lib/ComponentUtils ../lib/GLMaterialTexture ../lib/Material ../lib/screenSizePerspectiveUtils ../lib/Util ./internal/bufferWriters ./internal/MaterialUtil ./renderers/MergedRenderer ../shaders/HUDPrograms ../../../webgl/renderState".split(" "),
function(O,sa,I,ba,P,ca,Q,R,S,T,h,C,da,ea,fa,ga,U,ha,F,e,z,k,ia,J,r){function K(c,a,b){c.setUniform1f("cameraGroundRelative",b.cameraAboveGround?1:-1);c.setUniform1f("polygonOffset",a.shaderPolygonOffset);c.setUniform4fv("viewport",b.viewport);c.setUniform1f("perDistancePixelRatio",Math.tan(b.fovY/2)/(b.viewport[2]/2));k.bindVerticalOffset(a.verticalOffset,b,c);c.setUniformMatrix4fv("viewNormal",b.viewInvTransp);a.screenSizePerspective&&(k.bindScreenSizePerspective(a.screenSizePerspective,c,"screenSizePerspective"),
k.bindScreenSizePerspective(a.screenSizePerspectiveAlignment||a.screenSizePerspective,c,"screenSizePerspectiveAlignment"))}function V(c,a,b,f){b.occlusionTest&&(a.setUniform1i("hudVisibilityTexture",1),c.bindTexture(f.hudVisibilityTexture,1),c.setActiveTexture(0));a.setUniform1f("uRenderTransparentlyOccludedHUD","occluded"===f.renderTransparentlyOccludedHUD?1:"notOccluded"===f.renderTransparentlyOccludedHUD?0:.75);c=f.pixelRatio||1;a.setUniform4fv("overrideColor",b.color);a.setUniform1f("pixelRatio",
c);b.textureIsSignedDistanceField&&(a.setUniform4fv("outlineColor",b.outlineColor),a.setUniform1f("outlineSize",b.outlineSize));b.vvSizeEnabled&&(a.setUniform3fv("vvSizeMinSize",b.vvSizeMinSize),a.setUniform3fv("vvSizeMaxSize",b.vvSizeMaxSize),a.setUniform3fv("vvSizeOffset",b.vvSizeOffset),a.setUniform3fv("vvSizeFactor",b.vvSizeFactor));b.vvColorEnabled&&(a.setUniform1fv("vvColorValues",b.vvColorValues),a.setUniform4fv("vvColorColors",b.vvColorColors));a.setUniform2f("screenOffset",2*b.screenOffset[0]*
c,2*b.screenOffset[1]*c);a.setUniform2fv("anchorPos",G(b))}function G(c,a){void 0===a&&(a=W);if(c.textureIsSignedDistanceField){var b=c.anchorPos;c=c.distanceFieldBoundingBox;var f=a;f[0]=b[0]*(c[2]-c[0])+c[0];f[1]=b[1]*(c[3]-c[1])+c[1]}else S.vec2.copy(a,c.anchorPos);return a}O=function(c){function a(b,a){a=c.call(this,a)||this;a.params=k.copyParameters(b,ja);return a}I(a,c);a.prototype.dispose=function(){};a.prototype.setParameterValues=function(b){for(var a in b)"textureId"===a&&e.assert(!!this.params.textureId,
"Can only change texture of material that already has a texture"),this.params[a]=b[a];this.notifyDirty("matChanged")};a.prototype.getParameters=function(){return this.params};a.prototype.intersect=function(b,a,d,t,p,c,e,g,h){h?this.intersectDrapedRenderHudGeometry(b,a,d,t,p,c,e,g):this.intersectHudGeometry(b,a,d,t,p,c,e,g)};a.prototype.intersectDrapedRenderHudGeometry=function(b,a,d,t,p,c,A,g){a=b.getAttribute(e.VertexAttrConstants.POSITION);d=b.getAttribute(e.VertexAttrConstants.SIZE);t=this.params;
p=G(t);var f=1,l=1;g&&(l=g(L),f=l[0],l=l[5]);f*=b.pixelRatio;l*=b.pixelRatio;g=ka*b.pixelRatio;for(var w=0;w<a.data.length/a.size;w++){var q=w*a.size;h.vec3.set(m,a.data[q],a.data[q+1],a.data[q+2]);q=w*d.size;u[0]=d.data[q]*f;u[1]=d.data[q+1]*l;var q=m[0],k=m[1],v=void 0;t.textureIsSignedDistanceField&&(v=t.outlineSize*b.pixelRatio/2);this._isInsideIconBoundaries(c,q,k,g,v,t,p)&&A()}};a.prototype.intersectHudGeometry=function(b,a,d,t,p,c,A,g){if(t.enable.selectionMode&&t.enable.hud&&!ga.isAllHidden(a.componentVisibilities,
b.componentOffsets)){var f=b.data;b=this.params;p=a=1;P.mat3.fromMat4(H,d);if(g){p=g(L);a=p[0];p=p[5];g=H;c=g[0];var l=g[1],w=g[2],q=g[3],k=g[4],r=g[5],y=g[6],n=g[7],x=g[8],B=1/Math.sqrt(c*c+l*l+w*w),E=1/Math.sqrt(q*q+k*k+r*r),z=1/Math.sqrt(y*y+n*n+x*x);g[0]=c*B;g[1]=l*B;g[2]=w*B;g[3]=q*E;g[4]=k*E;g[5]=r*E;g[6]=y*z;g[7]=n*z;g[8]=x*z}g=f.getVertexAttr()[e.VertexAttrConstants.POSITION];c=f.getVertexAttr()[e.VertexAttrConstants.SIZE];l=f.getVertexAttr()[e.VertexAttrConstants.NORMAL];f=f.getVertexAttr()[e.VertexAttrConstants.AUXPOS1];
e.assert(3<=g.size);w=t.point;q=t.camera;k=G(b);a*=q.pixelRatio;p*=q.pixelRatio;r="screen"===this.params.centerOffsetUnits;for(y=0;y<g.data.length/g.size;y++)n=y*g.size,h.vec3.set(m,g.data[n],g.data[n+1],g.data[n+2]),h.vec3.transformMat4(m,m,d),n=y*c.size,u[0]=c.data[n]*a,u[1]=c.data[n+1]*p,h.vec3.transformMat4(m,m,q.viewMatrix),n=y*f.size,h.vec3.set(v,f.data[n+0],f.data[n+1],f.data[n+2]),r||(m[0]+=v[0],m[1]+=v[1],0!==v[2]&&(n=v[2],h.vec3.normalize(v,m),h.vec3.subtract(m,m,h.vec3.scale(v,v,n)))),
n=y*l.size,h.vec3.set(X,l.data[n],l.data[n+1],l.data[n+2]),this.applyVerticalOffsetTransformation(m,X,H,q,M),q.applyProjection(m,D),-1<D[0]&&(n=Math.floor(D[0])+this.params.screenOffset[0],x=Math.floor(D[1])+this.params.screenOffset[1],r&&(n+=v[0],0!==v[1]&&(x+=F.applyScaleFactor(v[1],M.factorAlignment))),F.applyPrecomputedScaleFactorVec2(u,M.factor,u),B=la*q.pixelRatio,E=void 0,b.textureIsSignedDistanceField&&(E=b.outlineSize*q.pixelRatio/2),this._isInsideIconBoundaries(w,n,x,B,E,b,k)&&(x=t.ray,
h.vec3.transformMat4(Y,m,Q.mat4.invert(ma,q.viewMatrix)),D[0]=w[0],D[1]=w[1],q.unprojectPoint(D,m),n=C.vec3f64.create(),h.vec3.copy(n,x.direction),B=1/h.vec3.length(n),h.vec3.scale(n,n,B),x=h.vec3.distance(x.origin,m)*B,A(x,n,-1,1,!0,Y)))}};a.prototype._isInsideIconBoundaries=function(b,a,d,c,p,e,A){a=a-c-(0<A[0]?u[0]*A[0]:0);var f=a+u[0]+2*c;d=d-c-(0<A[1]?u[1]*A[1]:0);c=d+u[1]+2*c;e.textureIsSignedDistanceField&&(e=e.distanceFieldBoundingBox,a+=u[0]*e[0],d+=u[1]*e[1],f-=u[0]*(1-e[2]),c-=u[1]*(1-
e[3]),a-=p,f+=p,d-=p,c+=p);return b[0]>a&&b[0]<f&&b[1]>d&&b[1]<c};a.prototype.createBufferWriter=function(){return new na(this)};a.prototype.createRenderer=function(b,a){return new ia(b,a,this)};a.prototype.normalAndViewAngle=function(b,a,d,c){void 0===c&&(c=N);h.vec3.transformMat3(c.normal,b,a);h.vec3.transformMat4(c.normal,c.normal,d.viewInverseTransposeMatrix);c.cosAngle=h.vec3.dot(Z,oa);return c};a.prototype.updateScaleInfo=function(b,a,d){a=this.params;a.screenSizePerspective?b.factor=F.precomputeScaleFactor(N.cosAngle,
d,a.screenSizePerspective,b.factor):(b.factor.scale=1,b.factor.factor=0,b.factor.minPixelSize=0,b.factor.paddingPixels=0);a.screenSizePerspectiveAlignment?b.factorAlignment=F.precomputeScaleFactor(N.cosAngle,d,a.screenSizePerspectiveAlignment,b.factorAlignment):(b.factorAlignment.factor=b.factor.factor,b.factorAlignment.scale=b.factor.scale,b.factorAlignment.minPixelSize=b.factor.minPixelSize,b.factorAlignment.paddingPixels=b.factor.paddingPixels)};a.prototype.applyVerticalOffsetTransformation=function(b,
a,d,c,p,e){var f=this.params;da.isMat4(d)&&(d=P.mat3.fromMat4(H,d));if(!f.verticalOffset||!f.verticalOffset.screenLength)return p&&(f.screenSizePerspective||f.screenSizePerspectiveAlignment)?(c=this.normalAndViewAngle(a,d,c),f=h.vec3.length(b),this.updateScaleInfo(p,c.cosAngle,f)):p&&(p.factor.scale=1,p.factorAlignment.scale=1),e?h.vec3.copy(e,b):b;a=this.normalAndViewAngle(a,d,c);d=h.vec3.length(b);c=k.verticalOffsetAtDistance(c,d,f.verticalOffset,a.cosAngle,f.screenSizePerspectiveAlignment||f.screenSizePerspective);
p&&this.updateScaleInfo(p,a.cosAngle,d);return h.vec3.add(e||b,b,h.vec3.scale(a.normal,a.normal,c))};a.prototype.getGLMaterials=function(){return{color:pa,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:qa}};a.prototype.getAllTextureIds=function(){return[this.params.textureId]};a.prototype.calculateRelativeScreenBounds=function(b,a,c){void 0===c&&(c=ea.create());var f=this.params,d=c;void 0===d&&(d=W);S.vec2.copy(d,f.anchorPos);d[0]*=-b[0];d[1]*=-b[1];d[0]+=f.screenOffset[0]*a;d[1]+=f.screenOffset[1]*
a;c[2]=c[0]+b[0];c[3]=c[1]+b[1];return c};a.prototype.calculateAnchorPosForRendering=function(b){return G(this.params,b)};a.shouldRenderVisibilityDuringRenderPass=function(b){return 0===b||4};return a}(ha);var pa=function(c){function a(b,a,d){b=c.call(this,b,a,d,b.getParameters().textureId)||this;b.isOcclusionSlot=!1;b.updateParameters();return b}I(a,c);a.prototype.selectSlot=function(){this.mainSlot=this.params.drawInSecondSlot?16:15};a.prototype.selectProgram=function(){var b=this.params;this.occlusionProgram=
this.programRep.getProgram(J.occlusionPass,{verticalOffset:!!b.verticalOffset,screenSizePerspective:!!b.screenSizePerspective,centerOffsetUnitsScreen:"screen"===b.centerOffsetUnits,slice:b.slicePlaneEnabled});this.renderProgram=this.programRep.getProgram(J.colorPass,{occlTest:b.occlusionTest,sdf:b.textureIsSignedDistanceField,vvSize:!!b.vvSizeEnabled,vvColor:!!b.vvColorEnabled,verticalOffset:!!b.verticalOffset,screenSizePerspective:!!b.screenSizePerspective,centerOffsetUnitsScreen:"screen"===b.centerOffsetUnits,
debugDrawBorder:!!b.debugDrawBorder,slice:b.slicePlaneEnabled});this.renderPipelineState=r.makePipelineState({blending:r.simpleBlendingParams(1,771),polygonOffset:b.polygonOffset&&aa,depthTest:{func:515},depthWrite:r.defaultDepthWriteParams,colorWrite:r.defaultColorWriteParams});this.occlusionPipelineState=r.makePipelineState({depthTest:{func:515},depthWrite:r.defaultDepthWriteParams,colorWrite:r.defaultColorWriteParams})};a.prototype.beginSlot=function(b){if(this.params.occlusionTest)return this.isOcclusionSlot=
10===b,10===b||b===this.mainSlot;this.isOcclusionSlot=!1;return b===this.mainSlot};a.prototype.getProgram=function(){return this.isOcclusionSlot?this.occlusionProgram:this.renderProgram};a.prototype.getPrograms=function(){return[this.occlusionProgram,this.renderProgram]};a.prototype.updateParameters=function(){this.params=k.copyParameters(this.material.getParameters());this.updateTexture(this.params.textureId);this.selectProgram();this.selectSlot()};a.prototype.bind=function(b,a){if(this.isOcclusionSlot){var c=
this.occlusionProgram;b.bindProgram(c);b.setPipelineState(this.occlusionPipelineState);K(c,this.params,a);c.setUniform4f("color",1,1,1,1);c.setUniform1f("pixelRatio",a.pixelRatio||1)}else c=this.renderProgram,b.bindProgram(c),b.setPipelineState(this.renderPipelineState),this.bindTexture(b,c),this.bindTextureScale(b,c),K(c,this.params,a),V(b,c,this.params,a)};a.prototype.bindView=function(b,a){b=a.origin;var c=this.getProgram();k.bindView(b,a.view,c);k.bindCamPos(b,a.viewInvTransp,c);this.params.slicePlaneEnabled&&
k.bindSlicePlane(a.origin,a.slicePlane,c)};a.prototype.bindInstance=function(b,a){b=this.getProgram();b.setUniformMatrix4fv("model",a.transformation);b.setUniformMatrix4fv("modelNormal",a.transformationNormal)};a.prototype.release=function(b){};a.prototype.getDrawMode=function(){return this.isOcclusionSlot?0:4};return a}(U),qa=function(c){function a(b,a,d){b=c.call(this,b,a,d,b.getParameters().textureId)||this;b.updateParameters();return b}I(a,c);a.prototype.selectSlot=function(){this.mainSlot=this.params.drawInSecondSlot?
16:15};a.prototype.beginSlot=function(b){return b===this.mainSlot};a.prototype.getProgram=function(){return this.program};a.prototype.updateParameters=function(){this.params=k.copyParameters(this.material.getParameters());this.updateTexture(this.params.textureId);this.selectProgram();this.selectSlot()};a.prototype.selectProgram=function(){var b=this.params;this.program=this.programRep.getProgram(J.highlightPass,{occlTest:b.occlusionTest,sdf:b.textureIsSignedDistanceField,vvSize:!!b.vvSizeEnabled,
vvColor:!!b.vvColorEnabled,verticalOffset:!!b.verticalOffset,screenSizePerspective:!!b.screenSizePerspective,centerOffsetUnitsScreen:"screen"===b.centerOffsetUnits,binaryHighlightOcclusion:b.binaryHighlightOcclusion,slice:b.slicePlaneEnabled});this.pipelineState=r.makePipelineState({blending:r.separateBlendingParams(1,1,771,771),polygonOffset:b.polygonOffset&&aa,depthTest:{func:513},colorWrite:r.defaultColorWriteParams})};a.prototype.bind=function(b,a){var c=this.program;b.bindProgram(c);b.setPipelineState(this.pipelineState);
this.bindTexture(b,c);this.bindTextureScale(b,c);K(c,this.params,a);V(b,c,this.params,a);k.bindHighlightRendering(b,a,this.program)};a.prototype.bindView=function(a,c){a=c.origin;var b=this.getProgram();k.bindView(a,c.view,b);k.bindCamPos(a,c.viewInvTransp,b);this.params.slicePlaneEnabled&&k.bindSlicePlane(c.origin,c.slicePlane,b)};a.prototype.bindInstance=function(a,c){a=this.getProgram();a.setUniformMatrix4fv("model",c.transformation);a.setUniformMatrix4fv("modelNormal",c.transformationNormal)};
a.prototype.release=function(a){};a.prototype.getDrawMode=function(){return 4};return a}(U),M={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},W=T.vec2f64.create(),m=C.vec3f64.create(),X=C.vec3f64.create(),D=ba.createRenderScreenPointArray3(),Z=C.vec3f64.create(),Y=C.vec3f64.create(),H=ca.mat3f64.create(),ma=R.mat4f64.create(),v=C.vec3f64.create(),N={normal:Z,cosAngle:0},L=R.mat4f64.create();Q.mat4.identity(L);var la=1,ka=
2,u=[0,0],oa=C.vec3f64.fromValues(0,0,1),ja={texCoordScale:[1,1],occlusionTest:!0,binaryHighlightOcclusion:!0,drawInSecondSlot:!1,color:[1,1,1,1],outlineColor:[1,1,1,1],outlineSize:0,textureIsSignedDistanceField:!1,distanceFieldBoundingBox:null,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],screenOffset:[0,0],
verticalOffset:null,screenSizePerspective:null,screenSizePerspectiveAlignment:null,slicePlaneEnabled:!1,anchorPos:T.vec2f64.fromValues(.5,.5),shaderPolygonOffset:1E-5,polygonOffset:!1,textureId:null,centerOffsetUnits:"world",debugDrawBorder:!1},ra=fa.newLayout().vec3f(e.VertexAttrConstants.POSITION).vec3f(e.VertexAttrConstants.NORMAL).vec2f(e.VertexAttrConstants.UV0).vec4u8(e.VertexAttrConstants.COLOR).vec2f(e.VertexAttrConstants.SIZE).vec4f(e.VertexAttrConstants.AUXPOS1).vec4f(e.VertexAttrConstants.AUXPOS2),
na=function(){function c(a){this.material=a;this.vertexBufferLayout=ra}c.prototype.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};c.prototype.elementCount=function(a){return 6*a.indices[e.VertexAttrConstants.POSITION].length};c.prototype.write=function(a,b,c,d,h){z.writePosition(b.indices[e.VertexAttrConstants.POSITION],b.vertexAttr[e.VertexAttrConstants.POSITION].data,a.transformation,d.position,h,6);z.writeNormal(b.indices[e.VertexAttrConstants.NORMAL],b.vertexAttr[e.VertexAttrConstants.NORMAL].data,
a.invTranspTransformation,d.normal,h,6);a=b.vertexAttr[e.VertexAttrConstants.UV0].data;var f=void 0,k=void 0,m=void 0,g=void 0;null==a||4>a.length?(a=this.material.getParameters(),k=f=0,m=a.texCoordScale[0],g=a.texCoordScale[1]):(f=a[0],k=a[1],m=a[2],g=a[3]);var m=Math.min(1.99999,m+1),g=Math.min(1.99999,g+1),r=b.indices[e.VertexAttrConstants.POSITION].length,l=d.uv0;a=h;for(c=0;c<r;++c)l.set(a,0,f),l.set(a,1,k),a+=1,l.set(a,0,m),l.set(a,1,k),a+=1,l.set(a,0,m),l.set(a,1,g),a+=1,l.set(a,0,m),l.set(a,
1,g),a+=1,l.set(a,0,f),l.set(a,1,g),a+=1,l.set(a,0,f),l.set(a,1,k),a+=1;z.writeColor(b.indices[e.VertexAttrConstants.COLOR],b.vertexAttr[e.VertexAttrConstants.COLOR].data,4,d.color,h,6);f=b.indices[e.VertexAttrConstants.SIZE];k=b.vertexAttr[e.VertexAttrConstants.SIZE].data;m=f.length;g=d.size;a=h;for(c=0;c<m;++c)for(var r=k[2*f[c]],l=k[2*f[c]+1],t=0;6>t;++t)g.set(a,0,r),g.set(a,1,l),a+=1;b.indices[e.VertexAttrConstants.AUXPOS1]&&b.vertexAttr[e.VertexAttrConstants.AUXPOS1]&&z.writeBufferVec4(b.indices[e.VertexAttrConstants.AUXPOS1],
b.vertexAttr[e.VertexAttrConstants.AUXPOS1].data,d.auxpos1,h,6);b.indices[e.VertexAttrConstants.AUXPOS2]&&b.vertexAttr[e.VertexAttrConstants.AUXPOS2]&&z.writeBufferVec4(b.indices[e.VertexAttrConstants.AUXPOS2],b.vertexAttr[e.VertexAttrConstants.AUXPOS2].data,d.auxpos2,h,6)};return c}(),aa={factor:0,units:-4};return O});