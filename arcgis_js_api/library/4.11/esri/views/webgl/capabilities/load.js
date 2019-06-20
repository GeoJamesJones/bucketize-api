// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ./DisjointTimerQuery ./Instancing ./isWebGL2Context ./VertexArrayObjects".split(" "),function(t,k,n,p,l,q){function g(a,b,g,m,e){if(m&&l.default(a))return!0;if(b[g])return!1;for(b=0;b<e.length;b++)if(a.getExtension(e[b]))return!0;return!1}Object.defineProperty(k,"__esModule",{value:!0});k.loadCapabilities=function(a,b){b=b&&b.disabledExtensions||{};g(a,b,"standardDerivatives",!0,["OES_standard_derivatives"]);var k=p.load(a),m=q.load(a,b),e;e=b.compressedTextureS3TC?null:(e=
a.getExtension("WEBGL_compressed_texture_s3tc"))?{COMPRESSED_RGB_S3TC_DXT1:e.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:e.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:e.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:e.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null;var h;h=b.textureFilterAnisotropic?null:(h=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic"))?{MAX_TEXTURE_MAX_ANISOTROPY:h.MAX_TEXTURE_MAX_ANISOTROPY_EXT,
TEXTURE_MAX_ANISOTROPY:h.TEXTURE_MAX_ANISOTROPY_EXT}:null;var r=n.load(a,b),f;l.default(a)?f={textureFloat:!0,textureFloatLinear:!b.textureFloatLinear&&!!a.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!b.textureHalfFloatLinear&&!!a.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:a.HALF_FLOAT}:a instanceof WebGLRenderingContext?(f=!b.textureHalfFloat&&a.getExtension("OES_texture_half_float"),f={textureFloat:!b.textureFloat&&!!a.getExtension("OES_texture_float"),
textureFloatLinear:!b.textureFloatLinear&&!!a.getExtension("OES_texture_float_linear"),textureHalfFloat:!!f,textureHalfFloatLinear:!b.textureHalfFloatLinear&&!!a.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:f?f.HALF_FLOAT_OES:void 0}):f=void 0;var c;if(l.default(a)){c=!b.colorBufferFloat&&a.getExtension("EXT_color_buffer_half_float");var d=!b.colorBufferFloat&&a.getExtension("EXT_color_buffer_float");c=c||d?{textureFloat:!!d,textureHalfFloat:!!c,R16F:a.R16F,RG16F:a.RG16F,RGBA16F:a.RGBA16F,
R32F:a.R32F,RG32F:a.RG32F,RGBA32F:a.RGBA32F,R11F_G11F_B10F:a.R11F_G11F_B10F,RGB16F:a.RGB16F}:null}else a instanceof WebGLRenderingContext?(c=!b.colorBufferFloat&&a.getExtension("EXT_color_buffer_half_float"),d=!b.colorBufferFloat&&a.getExtension("WEBGL_color_buffer_float"),c=c||d?{textureFloat:!!d,textureHalfFloat:!!c,RGBA16F:c?c.RGBA16F_EXT:void 0,RGB16F:c?c.RGB16F_EXT:void 0,RGBA32F:d?d.RGBA32F_EXT:void 0}:null):c=void 0;d=l.default(a)?{MIN:a.MIN,MAX:a.MAX}:b.blendMinMax?null:(d=a.getExtension("EXT_blend_minmax"))?
{MIN:d.MIN_EXT,MAX:d.MAX_EXT}:null;return{instancing:k,vao:m,compressedTextureS3TC:e,textureFilterAnisotropic:h,disjointTimerQuery:r,textureFloat:f,colorBufferFloat:c,blendMinMax:d,depthTexture:g(a,b,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"]),standardDerivatives:!0,shaderTextureLOD:g(a,b,"shaderTextureLOD",!0,["EXT_shader_texture_lod"]),fragDepth:g(a,b,"fragDepth",!0,["EXT_frag_depth"])}}});