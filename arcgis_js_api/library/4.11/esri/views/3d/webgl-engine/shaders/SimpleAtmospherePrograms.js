// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,a,c,b,d){Object.defineProperty(a,"__esModule",{value:!0});a.colorPass={name:"simple-atmosphere-color",shaders:function(a){return{vertexShader:d.glslifyDefineMap({PANORAMIC:a.panoramic})+b.resolveIncludes("environment/simpleAtmosphere.vert"),fragmentShader:d.glslifyDefineMap({PANORAMIC:a.panoramic})+b.resolveIncludes("environment/simpleAtmosphere.frag")}},attributes:c.Default3D};
a.fadePass={name:"simple-atmosphere-fade",shaders:{vertexShader:b.resolveIncludes("environment/simpleAtmosphereFade.vert"),fragmentShader:b.resolveIncludes("environment/simpleAtmosphereFade.frag")},attributes:c.Default3D}});