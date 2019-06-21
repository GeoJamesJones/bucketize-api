// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-2 as well as the corresponding HMAC implementation
 as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2015
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
define(["require","exports"],function(ka,la){function C(a,b){var c=[],d,e=[],k=0,l,m,n;if("UTF8"===b)for(l=0;l<a.length;l+=1)for(d=a.charCodeAt(l),e=[],128>d?e.push(d):2048>d?(e.push(192|d>>>6),e.push(128|d&63)):55296>d||57344<=d?e.push(224|d>>>12,128|d>>>6&63,128|d&63):(l+=1,d=65536+((d&1023)<<10|a.charCodeAt(l)&1023),e.push(240|d>>>18,128|d>>>12&63,128|d>>>6&63,128|d&63)),m=0;m<e.length;m+=1){for(n=k>>>2;c.length<=n;)c.push(0);c[n]|=e[m]<<24-k%4*8;k+=1}else if("UTF16BE"===b||"UTF16LE"===b)for(l=
0;l<a.length;l+=1){d=a.charCodeAt(l);"UTF16LE"===b&&(m=d&255,d=m<<8|d>>8);for(n=k>>>2;c.length<=n;)c.push(0);c[n]|=d<<16-k%4*8;k+=2}return{value:c,binLen:8*k}}function M(a){var b=[],c=a.length,d,e,k;if(0!==c%2)throw"String of HEX type must be in byte increments";for(d=0;d<c;d+=2){e=parseInt(a.substr(d,2),16);if(isNaN(e))throw"String of HEX type contains invalid characters";for(k=d>>>3;b.length<=k;)b.push(0);b[d>>>3]|=e<<24-d%8*4}return{value:b,binLen:4*c}}function N(a){var b=[],c,d,e;for(d=0;d<a.length;d+=
1)c=a.charCodeAt(d),e=d>>>2,b.length<=e&&b.push(0),b[e]|=c<<24-d%4*8;return{value:b,binLen:8*a.length}}function O(a){var b=[],c=0,d,e,k,l,m;if(-1===a.search(/^[a-zA-Z0-9=+\/]+$/))throw"Invalid character in base-64 string";e=a.indexOf("\x3d");a=a.replace(/\=/g,"");if(-1!==e&&e<a.length)throw"Invalid '\x3d' found in base-64 string";for(e=0;e<a.length;e+=4){m=a.substr(e,4);for(k=l=0;k<m.length;k+=1)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(m[k]),l|=d<<18-6*k;for(k=
0;k<m.length-1;k+=1){for(d=c>>>2;b.length<=d;)b.push(0);b[d]|=(l>>>16-8*k&255)<<24-c%4*8;c+=1}}return{value:b,binLen:8*c}}function P(a,b){var c="",d=4*a.length,e,k;for(e=0;e<d;e+=1)k=a[e>>>2]>>>8*(3-e%4),c+="0123456789abcdef".charAt(k>>>4&15)+"0123456789abcdef".charAt(k&15);return b.outputUpper?c.toUpperCase():c}function Q(a,b){var c="",d=4*a.length,e,k,l;for(e=0;e<d;e+=3)for(l=e+1>>>2,k=a.length<=l?0:a[l],l=e+2>>>2,l=a.length<=l?0:a[l],l=(a[e>>>2]>>>8*(3-e%4)&255)<<16|(k>>>8*(3-(e+1)%4)&255)<<8|
l>>>8*(3-(e+2)%4)&255,k=0;4>k;k+=1)c=8*e+6*k<=32*a.length?c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(l>>>6*(3-k)&63):c+b.b64Pad;return c}function R(a,b){b="";var c=4*a.length,d,e;for(d=0;d<c;d+=1)e=a[d>>>2]>>>8*(3-d%4)&255,b+=String.fromCharCode(e);return b}function S(a){var b={outputUpper:!1,b64Pad:"\x3d"};try{a.hasOwnProperty("outputUpper")&&(b.outputUpper=a.outputUpper),a.hasOwnProperty("b64Pad")&&(b.b64Pad=a.b64Pad)}catch(c){}if("boolean"!==typeof b.outputUpper)throw"Invalid outputUpper formatting option";
if("string"!==typeof b.b64Pad)throw"Invalid b64Pad formatting option";return b}function y(a,b){return a<<b|a>>>32-b}function t(a,b){return a>>>b|a<<32-b}function u(a,b){var c=null;a=new r(a.highOrder,a.lowOrder);return c=32>=b?new r(a.highOrder>>>b|a.lowOrder<<32-b&4294967295,a.lowOrder>>>b|a.highOrder<<32-b&4294967295):new r(a.lowOrder>>>b-32|a.highOrder<<64-b&4294967295,a.highOrder>>>b-32|a.lowOrder<<64-b&4294967295)}function T(a,b){var c=null;return c=32>=b?new r(a.highOrder>>>b,a.lowOrder>>>b|
a.highOrder<<32-b&4294967295):new r(0,a.highOrder>>>b-32)}function V(a,b,c){return a&b^~a&c}function W(a,b,c){return new r(a.highOrder&b.highOrder^~a.highOrder&c.highOrder,a.lowOrder&b.lowOrder^~a.lowOrder&c.lowOrder)}function U(a,b,c){return a&b^a&c^b&c}function X(a,b,c){return new r(a.highOrder&b.highOrder^a.highOrder&c.highOrder^b.highOrder&c.highOrder,a.lowOrder&b.lowOrder^a.lowOrder&c.lowOrder^b.lowOrder&c.lowOrder)}function Y(a){return t(a,2)^t(a,13)^t(a,22)}function Z(a){var b=u(a,28),c=u(a,
34);a=u(a,39);return new r(b.highOrder^c.highOrder^a.highOrder,b.lowOrder^c.lowOrder^a.lowOrder)}function aa(a){return t(a,6)^t(a,11)^t(a,25)}function ba(a){var b=u(a,14),c=u(a,18);a=u(a,41);return new r(b.highOrder^c.highOrder^a.highOrder,b.lowOrder^c.lowOrder^a.lowOrder)}function ca(a){return t(a,7)^t(a,18)^a>>>3}function da(a){var b=u(a,1),c=u(a,8);a=T(a,7);return new r(b.highOrder^c.highOrder^a.highOrder,b.lowOrder^c.lowOrder^a.lowOrder)}function ea(a){return t(a,17)^t(a,19)^a>>>10}function fa(a){var b=
u(a,19),c=u(a,61);a=T(a,6);return new r(b.highOrder^c.highOrder^a.highOrder,b.lowOrder^c.lowOrder^a.lowOrder)}function B(a,b){var c=(a&65535)+(b&65535);return((a>>>16)+(b>>>16)+(c>>>16)&65535)<<16|c&65535}function ga(a,b,c,d){var e=(a&65535)+(b&65535)+(c&65535)+(d&65535);return((a>>>16)+(b>>>16)+(c>>>16)+(d>>>16)+(e>>>16)&65535)<<16|e&65535}function D(a,b,c,d,e){var k=(a&65535)+(b&65535)+(c&65535)+(d&65535)+(e&65535);return((a>>>16)+(b>>>16)+(c>>>16)+(d>>>16)+(e>>>16)+(k>>>16)&65535)<<16|k&65535}
function ha(a,b){var c,d,e;c=(a.lowOrder&65535)+(b.lowOrder&65535);d=(a.lowOrder>>>16)+(b.lowOrder>>>16)+(c>>>16);e=(d&65535)<<16|c&65535;c=(a.highOrder&65535)+(b.highOrder&65535)+(d>>>16);d=(a.highOrder>>>16)+(b.highOrder>>>16)+(c>>>16);return new r((d&65535)<<16|c&65535,e)}function ia(a,b,c,d){var e,k,l;e=(a.lowOrder&65535)+(b.lowOrder&65535)+(c.lowOrder&65535)+(d.lowOrder&65535);k=(a.lowOrder>>>16)+(b.lowOrder>>>16)+(c.lowOrder>>>16)+(d.lowOrder>>>16)+(e>>>16);l=(k&65535)<<16|e&65535;e=(a.highOrder&
65535)+(b.highOrder&65535)+(c.highOrder&65535)+(d.highOrder&65535)+(k>>>16);k=(a.highOrder>>>16)+(b.highOrder>>>16)+(c.highOrder>>>16)+(d.highOrder>>>16)+(e>>>16);return new r((k&65535)<<16|e&65535,l)}function ja(a,b,c,d,e){var k,l,m;k=(a.lowOrder&65535)+(b.lowOrder&65535)+(c.lowOrder&65535)+(d.lowOrder&65535)+(e.lowOrder&65535);l=(a.lowOrder>>>16)+(b.lowOrder>>>16)+(c.lowOrder>>>16)+(d.lowOrder>>>16)+(e.lowOrder>>>16)+(k>>>16);m=(l&65535)<<16|k&65535;k=(a.highOrder&65535)+(b.highOrder&65535)+(c.highOrder&
65535)+(d.highOrder&65535)+(e.highOrder&65535)+(l>>>16);l=(a.highOrder>>>16)+(b.highOrder>>>16)+(c.highOrder>>>16)+(d.highOrder>>>16)+(e.highOrder>>>16)+(k>>>16);return new r((l&65535)<<16|k&65535,m)}function z(a,b){var c=[],d,e,k,l,m,n,p,r,q=[1732584193,4023233417,2562383102,271733878,3285377520];for(d=(b+65>>>9<<4)+15;a.length<=d;)a.push(0);a[b>>>5]|=128<<24-b%32;a[d]=b;r=a.length;for(n=0;n<r;n+=16){b=q[0];d=q[1];e=q[2];k=q[3];l=q[4];for(p=0;80>p;p+=1)c[p]=16>p?a[p+n]:y(c[p-3]^c[p-8]^c[p-14]^c[p-
16],1),m=20>p?D(y(b,5),d&e^~d&k,l,1518500249,c[p]):40>p?D(y(b,5),d^e^k,l,1859775393,c[p]):60>p?D(y(b,5),U(d,e,k),l,2400959708,c[p]):D(y(b,5),d^e^k,l,3395469782,c[p]),l=k,k=e,e=y(d,30),d=b,b=m;q[0]=B(b,q[0]);q[1]=B(d,q[1]);q[2]=B(e,q[2]);q[3]=B(k,q[3]);q[4]=B(l,q[4])}return q}function x(a,b,c){var d,e,k,l,m,n,p,t,q,g,u,x,v,y,z,w,E,F,G,H,I,J,K,L,f,A=[],C,h=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,
2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,
2756734187,3204031479,3329325298];g=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428];e=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];if("SHA-224"===c||"SHA-256"===c)u=64,d=(b+65>>>9<<4)+15,y=16,z=1,f=Number,w=B,E=ga,F=D,G=ca,H=ea,I=Y,J=aa,L=U,K=V,g="SHA-224"===c?g:e;else if("SHA-384"===c||"SHA-512"===c)u=80,d=(b+128>>>10<<5)+31,y=32,z=2,f=r,w=ha,E=ia,F=ja,G=da,H=fa,I=Z,J=ba,L=X,K=W,h=[new f(h[0],3609767458),new f(h[1],
602891725),new f(h[2],3964484399),new f(h[3],2173295548),new f(h[4],4081628472),new f(h[5],3053834265),new f(h[6],2937671579),new f(h[7],3664609560),new f(h[8],2734883394),new f(h[9],1164996542),new f(h[10],1323610764),new f(h[11],3590304994),new f(h[12],4068182383),new f(h[13],991336113),new f(h[14],633803317),new f(h[15],3479774868),new f(h[16],2666613458),new f(h[17],944711139),new f(h[18],2341262773),new f(h[19],2007800933),new f(h[20],1495990901),new f(h[21],1856431235),new f(h[22],3175218132),
new f(h[23],2198950837),new f(h[24],3999719339),new f(h[25],766784016),new f(h[26],2566594879),new f(h[27],3203337956),new f(h[28],1034457026),new f(h[29],2466948901),new f(h[30],3758326383),new f(h[31],168717936),new f(h[32],1188179964),new f(h[33],1546045734),new f(h[34],1522805485),new f(h[35],2643833823),new f(h[36],2343527390),new f(h[37],1014477480),new f(h[38],1206759142),new f(h[39],344077627),new f(h[40],1290863460),new f(h[41],3158454273),new f(h[42],3505952657),new f(h[43],106217008),new f(h[44],
3606008344),new f(h[45],1432725776),new f(h[46],1467031594),new f(h[47],851169720),new f(h[48],3100823752),new f(h[49],1363258195),new f(h[50],3750685593),new f(h[51],3785050280),new f(h[52],3318307427),new f(h[53],3812723403),new f(h[54],2003034995),new f(h[55],3602036899),new f(h[56],1575990012),new f(h[57],1125592928),new f(h[58],2716904306),new f(h[59],442776044),new f(h[60],593698344),new f(h[61],3733110249),new f(h[62],2999351573),new f(h[63],3815920427),new f(3391569614,3928383900),new f(3515267271,
566280711),new f(3940187606,3454069534),new f(4118630271,4000239992),new f(116418474,1914138554),new f(174292421,2731055270),new f(289380356,3203993006),new f(460393269,320620315),new f(685471733,587496836),new f(852142971,1086792851),new f(1017036298,365543100),new f(1126000580,2618297676),new f(1288033470,3409855158),new f(1501505948,4234509866),new f(1607167915,987167468),new f(1816402316,1246189591)],g="SHA-384"===c?[new f(3418070365,g[0]),new f(1654270250,g[1]),new f(2438529370,g[2]),new f(355462360,
g[3]),new f(1731405415,g[4]),new f(41048885895,g[5]),new f(3675008525,g[6]),new f(1203062813,g[7])]:[new f(e[0],4089235720),new f(e[1],2227873595),new f(e[2],4271175723),new f(e[3],1595750129),new f(e[4],2917565137),new f(e[5],725511199),new f(e[6],4215389547),new f(e[7],327033209)];else throw"Unexpected error in SHA-2 implementation";for(;a.length<=d;)a.push(0);a[b>>>5]|=128<<24-b%32;a[d]=b;C=a.length;for(x=0;x<C;x+=y){b=g[0];d=g[1];e=g[2];k=g[3];l=g[4];m=g[5];n=g[6];p=g[7];for(v=0;v<u;v+=1)16>v?
(q=v*z+x,t=a.length<=q?0:a[q],q=a.length<=q+1?0:a[q+1],A[v]=new f(t,q)):A[v]=E(H(A[v-2]),A[v-7],G(A[v-15]),A[v-16]),t=F(p,J(l),K(l,m,n),h[v],A[v]),q=w(I(b),L(b,d,e)),p=n,n=m,m=l,l=w(k,t),k=e,e=d,d=b,b=w(t,q);g[0]=w(b,g[0]);g[1]=w(d,g[1]);g[2]=w(e,g[2]);g[3]=w(k,g[3]);g[4]=w(l,g[4]);g[5]=w(m,g[5]);g[6]=w(n,g[6]);g[7]=w(p,g[7])}if("SHA-224"===c)a=[g[0],g[1],g[2],g[3],g[4],g[5],g[6]];else if("SHA-256"===c)a=g;else if("SHA-384"===c)a=[g[0].highOrder,g[0].lowOrder,g[1].highOrder,g[1].lowOrder,g[2].highOrder,
g[2].lowOrder,g[3].highOrder,g[3].lowOrder,g[4].highOrder,g[4].lowOrder,g[5].highOrder,g[5].lowOrder];else if("SHA-512"===c)a=[g[0].highOrder,g[0].lowOrder,g[1].highOrder,g[1].lowOrder,g[2].highOrder,g[2].lowOrder,g[3].highOrder,g[3].lowOrder,g[4].highOrder,g[4].lowOrder,g[5].highOrder,g[5].lowOrder,g[6].highOrder,g[6].lowOrder,g[7].highOrder,g[7].lowOrder];else throw"Unexpected error in SHA-2 implementation";return a}var r=function(){return function(a,b){this.highOrder=a;this.lowOrder=b}}();return function(){function a(a,
c,d){this.strBinLen=0;this.strToHash=null;this.utfType="";var b=null;this.strToHash=[0];this.strBinLen=0;this.utfType=d||"UTF8";if("UTF8"!==this.utfType&&"UTF16BE"!==this.utfType&&"UTF16LE"!==this.utfType)throw"encoding must be UTF8, UTF16BE, or UTF16LE";if("HEX"===c){if(0!==a.length%2)throw"srcString of HEX type must be in byte increments";b=M(a);this.strBinLen=b.binLen;this.strToHash=b.value}else if("TEXT"===c)b=C(a,this.utfType),this.strBinLen=b.binLen,this.strToHash=b.value;else if("B64"===c)b=
O(a),this.strBinLen=b.binLen,this.strToHash=b.value;else if("BYTES"===c)b=N(a),this.strBinLen=b.binLen,this.strToHash=b.value;else throw"inputFormat must be HEX, TEXT, B64, or BYTES";}a.prototype.getHash=function(a,c,d,e){var b=null,l=this.strToHash.slice(),m=this.strBinLen,n;3===arguments.length?"number"!==typeof d&&(e=d,d=1):2===arguments.length&&(d=1);if(d!==parseInt(d,10)||1>d)throw"numRounds must a integer \x3e\x3d 1";switch(c){case "HEX":b=P;break;case "B64":b=Q;break;case "BYTES":b=R;break;
default:throw"format must be HEX, B64, or BYTES";}if("SHA-1"===a)for(n=0;n<d;n+=1)l=z(l,m),m=160;else if("SHA-224"===a)for(n=0;n<d;n+=1)l=x(l,m,a),m=224;else if("SHA-256"===a)for(n=0;n<d;n+=1)l=x(l,m,a),m=256;else if("SHA-384"===a)for(n=0;n<d;n+=1)l=x(l,m,a),m=384;else if("SHA-512"===a)for(n=0;n<d;n+=1)l=x(l,m,a),m=512;else throw"Chosen SHA variant is not supported";return b(l,S(e))};a.prototype.getHMAC=function(a,c,d,e,k){var b,m,n,p,r=[],q=[];b=null;switch(e){case "HEX":e=P;break;case "B64":e=Q;
break;case "BYTES":e=R;break;default:throw"outputFormat must be HEX, B64, or BYTES";}if("SHA-1"===d)m=64,p=160;else if("SHA-224"===d)m=64,p=224;else if("SHA-256"===d)m=64,p=256;else if("SHA-384"===d)m=128,p=384;else if("SHA-512"===d)m=128,p=512;else throw"Chosen SHA variant is not supported";if("HEX"===c)b=M(a),n=b.binLen,b=b.value;else if("TEXT"===c)b=C(a,this.utfType),n=b.binLen,b=b.value;else if("B64"===c)b=O(a),n=b.binLen,b=b.value;else if("BYTES"===c)b=N(a),n=b.binLen,b=b.value;else throw"inputFormat must be HEX, TEXT, B64, or BYTES";
a=8*m;c=m/4-1;if(m<n/8){for(b="SHA-1"===d?z(b,n):x(b,n,d);b.length<=c;)b.push(0);b[c]&=4294967040}else if(m>n/8){for(;b.length<=c;)b.push(0);b[c]&=4294967040}for(m=0;m<=c;m+=1)r[m]=b[m]^909522486,q[m]=b[m]^1549556828;d="SHA-1"===d?z(q.concat(z(r.concat(this.strToHash),a+this.strBinLen)),a+p):x(q.concat(x(r.concat(this.strToHash),a+this.strBinLen,d)),a+p,d);return e(d,S(k))};return a}()});