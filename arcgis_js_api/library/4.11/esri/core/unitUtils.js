// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ./compilerUtils ./kebabDictionary ./wgs84Constants ../geometry/support/WKIDUnitConversion".split(" "),function(p,b,x,k,q,y){function g(a){if(a=z[a])return a;throw Error("unknown measure");}function r(a){return f[a].baseUnit}function l(a,c){void 0===c&&(c=null);c=c||g(a);return f[c].baseUnit===a}function d(a,c,b){if(c===b)return a;var e=g(c);if(e!==g(b))throw Error("incompatible units");a=l(c,e)?a:a*f[e].units[c].inBaseUnits;return l(b,e)?a:a/f[e].units[b].inBaseUnits}function t(a){return u.fromJSON(a.toLowerCase())||
null}function m(a){return v(a)||b.decDegToMeters}function v(a){var c,b,d;null!=a&&("object"===typeof a?(c=a.wkid,b=a.wkt):"number"===typeof a?c=a:"string"===typeof a&&(b=a));c?d=h.values[h[c]]:b&&-1!==b.search(/^PROJCS/i)&&(a=w.exec(b))&&a[1]&&(d=parseFloat(a[1].split(",")[1]));return d}function n(a){var c,b,d;null!=a&&("object"===typeof a?(c=a.wkid,b=a.wkt):"number"===typeof a?c=a:"string"===typeof a&&(b=a));c?d=h.units[h[c]]:b&&-1!==b.search(/^PROJCS/i)&&(a=w.exec(b))&&a[1]&&(d=(a=/[\\"\\']{1}([^\\"\\']+)/.exec(a[1]))&&
a[1]);return d?t(d):null}Object.defineProperty(b,"__esModule",{value:!0});b.inchesPerMeter=39.37;b.decDegToMeters=q.wgs84Radius*Math.PI/180;var w=/UNIT\[([^\]]+)\]\]$/i,h=y,u=k.strict()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",
chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});p={millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1E3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}};k={"square-millimeters":{inBaseUnits:1E-6},"square-centimeters":{inBaseUnits:1E-4},
"square-decimeters":{inBaseUnits:.1*.1},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:1E6},"square-inches":{inBaseUnits:6.4516E-4},"square-feet":{inBaseUnits:.09290304},"square-yards":{inBaseUnits:.83612736},"square-miles":{inBaseUnits:2589988.110336},"square-us-feet":{inBaseUnits:function(a){return a*a}(1200/3937)},acres:{inBaseUnits:4046.8564224},ares:{inBaseUnits:100},hectares:{inBaseUnits:1E4}};var f={length:{baseUnit:"meters",units:p},area:{baseUnit:"square-meters",units:k},
volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1E3*1E-9},"cubic-centimeters":{inBaseUnits:.001},"cubic-decimeters":{inBaseUnits:1},"cubic-meters":{inBaseUnits:1E3},"cubic-kilometers":{inBaseUnits:1E12},"cubic-inches":{inBaseUnits:.016387064},"cubic-feet":{inBaseUnits:.09290304*304.8},"cubic-yards":{inBaseUnits:764.554857984},"cubic-miles":{inBaseUnits:4.16818182544058E12}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/
180}}}},z=function(){var a={},b;for(b in f)for(var d in f[b].units)a[d]=b;return a}();b.measureForUnit=g;b.baseUnitForMeasure=r;b.baseUnitForUnit=function(a){return r(g(a))};b.isBaseUnit=l;b.convertUnit=d;b.preferredMetricLengthUnit=function(a,b){return 3E3>d(a,b,"meters")?"meters":"kilometers"};b.preferredMetricVerticalLengthUnit=function(a,b){return 1E5>d(a,b,"meters")?"meters":"kilometers"};b.preferredImperialLengthUnit=function(a,b){return 1E3>d(a,b,"feet")?"feet":"miles"};b.preferredImperialVerticalLengthUnit=
function(a,b){return 1E5>d(a,b,"feet")?"feet":"miles"};b.preferredMetricAreaUnit=function(a,b){return 3E6>d(a,b,"square-meters")?"square-meters":"square-kilometers"};b.preferredImperialAreaUnit=function(a,b){return 1E6>d(a,b,"square-feet")?"square-feet":"square-miles"};b.lengthToDegrees=function(a,b,e){void 0===e&&(e=q.wgs84Radius);return d(a,b,"meters")/(e*Math.PI/180)};b.unitFromRESTJSON=t;b.unitToRESTJSON=function(a){return u.toJSON(a)||null};b.getMetersPerVerticalUnitForSR=function(a){a=m(a);
return 1E5<a?1:a};b.getVerticalUnitStringForSR=function(a){return 1E5<m(a)?"meters":n(a)};b.getMetersPerUnitForSR=m;b.getMetersPerUnit=v;b.getUnitString=n;b.getDefaultUnitSystem=function(a){if(!a)return null;a=n(a);switch(a){case "feet":case "us-feet":case "clarke-feet":case "clarke-yards":case "clarke-links":case "sears-yards":case "sears-feet":case "sears-chains":case "benoit-1895-b-chains":case "indian-yards":case "indian-1937-yards":case "gold-coast-feet":case "sears-1922-truncated-chains":return"imperial";
case "50-kilometers":case "150-kilometers":case "meters":return"metric";case null:case void 0:break;default:x.neverReached(a)}return null}});