// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/debugFlags"],function(t,g,u,l){function p(a,f,e,q,h){var d=c.height,b=k;b.beginPath();b.lineWidth=1;b.strokeStyle=h;b.moveTo(a,d-e);b.lineTo(f,d-e);b.stroke();b.lineTo(f,d-q);b.stroke();b.lineTo(f,d-e);b.stroke();b.lineTo(a,d-e);b.stroke();b.lineTo(a,d-e);b.stroke();b.closePath()}Object.defineProperty(g,"__esModule",{value:!0});var m=!1,n=!1,c,k;g.drawAccelerationStruct=function(a,c){if(n&&k){for(var e=k,f=0,h=0;h<
a.accBinsNumX;h++)for(var d=0;d<a.accBinsNumY;d++){var b=a.accBins[h][a.accBinsNumY-1-d],f=f+b.length,g=h*a.accBinsSizeX,m=(h+1)*a.accBinsSizeX,l=d*a.accBinsSizeY,r=(d+1)*a.accBinsSizeY;e.fillText(b.length.toFixed(),g+5,l+15);p(g,m,l,r,"blue")}e.fillText("total totalShownLabels: "+f,70,40);e.fillText("total visible labels: "+c.length,70,50);e.fillText("total numTests: "+a.accNumTests,70,30)}};g.prepare=function(a){m=l.DECONFLICTOR_SHOW_OUTLINES;n=l.DECONFLICTOR_SHOW_GRID;if(m||n){null==c&&(c=document.createElement("canvas"),
c.setAttribute("id","canvas2d"),a.surface.parentElement.style.position="relative",a.surface.parentElement.appendChild(c));var f=a.height*a.pixelRatio;c.setAttribute("width",a.width*a.pixelRatio+"px");c.setAttribute("height",f+"px");c.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;width:"+a.width+"px;height:"+a.height+"px");k=c.getContext("2d");k.clearRect(0,0,a.width,a.height);k.font="12px Arial"}};g.drawPoly=function(a,c){m&&p(a.xMin,a.xMax,a.yMin,a.yMax,
c)}});