// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/support/aaBoundingRect ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Util".split(" "),function(D,d,z,A,q,h){function v(a,b){return q.createSquareGeometry([[a[0],a[1],b],[a[2],a[1],b],[a[2],a[3],b],[a[0],a[3],b]])}Object.defineProperty(d,"__esModule",{value:!0});var B=new Float32Array([0,0,1]);d.createGeometryForExtent=v;d.createOuterImageGeometry=function(a,b,e){if(!z.intersects(a,b))return v(b,e);var f=
[a[1]-b[1],Math.min(a[3],b[3])-Math.max(a[1],b[1]),b[3]-a[3],123456],d=[a[0]-b[0],Math.min(a[2],b[2])-Math.max(a[0],b[0]),b[2]-a[2],123456],q=b[2]-b[0],C=b[3]-b[1],m=0<d[0]&&0<d[2]?3:2;a=0<f[0]&&0<f[2]?3:2;var k=(a+1)*(m+1),c=new Float32Array(3*k),k=new Float32Array(2*k);a=new Uint32Array(6*(a*m-1));for(var r=0,t=0,w=0,g=0,l=0,n=0;4>n;n++){var x=f[n];if(!(0>=x)){for(var u=0,p=0;4>p;p++){var y=d[p];0>=y||(c[t++]=b[0]+u,c[t++]=b[1]+r,c[t++]=e,k[w++]=u/q,k[w++]=r/C,3>p&&3>n&&(1!==p||1!==n)&&(a[l++]=
g,a[l++]=g+1,a[l++]=g+m+1,a[l++]=g+1,a[l++]=g+m+2,a[l++]=g+m+1),g++,u+=y)}r+=x}}b={};b[h.VertexAttrConstants.POSITION]={size:3,data:c};b[h.VertexAttrConstants.NORMAL]={size:3,data:B};b[h.VertexAttrConstants.UV0]={size:2,data:k};e={};f=new Uint32Array(a.length);for(c=0;c<f.length;c++)f[c]=0;e[h.VertexAttrConstants.POSITION]=a;e[h.VertexAttrConstants.NORMAL]=f;e[h.VertexAttrConstants.UV0]=a;return new A(b,e)}});