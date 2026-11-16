var Rf=Object.defineProperty;var Cf=(i,t,n)=>t in i?Rf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var xe=(i,t,n)=>Cf(i,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="170",Pf=0,Za=1,Lf=2,Mc=1,Sc=2,Wn=3,ai=0,hn=1,tn=2,oi=0,Zi=1,wr=2,qa=3,$a=4,If=5,vi=100,Df=101,Uf=102,Nf=103,Ff=104,Of=200,zf=201,Bf=202,kf=203,Mr=204,Sr=205,Gf=206,Hf=207,Vf=208,Wf=209,Xf=210,Yf=211,Zf=212,qf=213,$f=214,yr=0,br=1,Tr=2,Ji=3,Er=4,Ar=5,Rr=6,Cr=7,yc=0,Kf=1,Jf=2,si=0,jf=1,Qf=2,th=3,bc=4,eh=5,nh=6,ih=7,Tc=300,ji=301,Qi=302,Pr=303,Lr=304,As=306,Ne=1e3,Mi=1001,Ir=1002,Cn=1003,oh=1004,ko=1005,On=1006,zs=1007,Si=1008,$n=1009,Ec=1010,Ac=1011,Ao=1012,fa=1013,yi=1014,Xn=1015,Do=1016,ha=1017,da=1018,to=1020,Rc=35902,Cc=1021,Pc=1022,Rn=1023,Lc=1024,Ic=1025,qi=1026,eo=1027,Dc=1028,ua=1029,Uc=1030,pa=1031,ma=1033,xs=33776,_s=33777,vs=33778,ws=33779,Dr=35840,Ur=35841,Nr=35842,Fr=35843,Or=36196,zr=37492,Br=37496,kr=37808,Gr=37809,Hr=37810,Vr=37811,Wr=37812,Xr=37813,Yr=37814,Zr=37815,qr=37816,$r=37817,Kr=37818,Jr=37819,jr=37820,Qr=37821,Ms=36492,ta=36494,ea=36495,Nc=36283,na=36284,ia=36285,oa=36286,sh=3200,rh=3201,Fc=0,ah=1,ii="",he="srgb",oo="srgb-linear",Rs="linear",Ee="srgb",Ci=7680,Ka=519,lh=512,ch=513,fh=514,Oc=515,hh=516,dh=517,uh=518,ph=519,Ja=35044,ja="300 es",Yn=2e3,ys=2001;class so{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(n)===-1&&e[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const o=e.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qa=1234567;const wo=Math.PI/180,Ro=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[n&63|128]+je[n>>8&255]+"-"+je[n>>16&255]+je[n>>24&255]+je[e&255]+je[e>>8&255]+je[e>>16&255]+je[e>>24&255]).toLowerCase()}function Ke(i,t,n){return Math.max(t,Math.min(n,i))}function ga(i,t){return(i%t+t)%t}function mh(i,t,n,e,o){return e+(i-t)*(o-e)/(n-t)}function gh(i,t,n){return i!==t?(n-i)/(t-i):0}function Mo(i,t,n){return(1-n)*i+n*t}function xh(i,t,n,e){return Mo(i,t,1-Math.exp(-n*e))}function _h(i,t=1){return t-Math.abs(ga(i,t*2)-t)}function vh(i,t,n){return i<=t?0:i>=n?1:(i=(i-t)/(n-t),i*i*(3-2*i))}function wh(i,t,n){return i<=t?0:i>=n?1:(i=(i-t)/(n-t),i*i*i*(i*(i*6-15)+10))}function Mh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sh(i,t){return i+Math.random()*(t-i)}function yh(i){return i*(.5-Math.random())}function bh(i){i!==void 0&&(Qa=i);let t=Qa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Th(i){return i*wo}function Eh(i){return i*Ro}function Ah(i){return(i&i-1)===0&&i!==0}function Rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ch(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ph(i,t,n,e,o){const s=Math.cos,r=Math.sin,a=s(n/2),l=r(n/2),f=s((t+e)/2),c=r((t+e)/2),d=s((t-e)/2),h=r((t-e)/2),u=s((e-t)/2),g=r((e-t)/2);switch(o){case"XYX":i.set(a*c,l*d,l*h,a*f);break;case"YZY":i.set(l*h,a*c,l*d,a*f);break;case"ZXZ":i.set(l*d,l*h,a*c,a*f);break;case"XZX":i.set(a*c,l*g,l*u,a*f);break;case"YXY":i.set(l*u,a*c,l*g,a*f);break;case"ZYZ":i.set(l*g,l*u,a*c,a*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bs={DEG2RAD:wo,RAD2DEG:Ro,generateUUID:Ei,clamp:Ke,euclideanModulo:ga,mapLinear:mh,inverseLerp:gh,lerp:Mo,damp:xh,pingpong:_h,smoothstep:vh,smootherstep:wh,randInt:Mh,randFloat:Sh,randFloatSpread:yh,seededRandom:bh,degToRad:Th,radToDeg:Eh,isPowerOfTwo:Ah,ceilPowerOfTwo:Rh,floorPowerOfTwo:Ch,setQuaternionFromProperEuler:Ph,normalize:on,denormalize:Wi};class zt{constructor(t=0,n=0){zt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,e=this.y,o=t.elements;return this.x=o[0]*n+o[3]*e+o[6],this.y=o[1]*n+o[4]*e+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(Ke(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y;return n*n+e*e}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const e=Math.cos(n),o=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*e-r*o+t.x,this.y=s*o+r*e+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,n,e,o,s,r,a,l,f){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,e,o,s,r,a,l,f)}set(t,n,e,o,s,r,a,l,f){const c=this.elements;return c[0]=t,c[1]=o,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=e,c[7]=r,c[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],this}extractBasis(t,n,e){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,o=n.elements,s=this.elements,r=e[0],a=e[3],l=e[6],f=e[1],c=e[4],d=e[7],h=e[2],u=e[5],g=e[8],_=o[0],m=o[3],p=o[6],T=o[1],w=o[4],v=o[7],I=o[2],R=o[5],E=o[8];return s[0]=r*_+a*T+l*I,s[3]=r*m+a*w+l*R,s[6]=r*p+a*v+l*E,s[1]=f*_+c*T+d*I,s[4]=f*m+c*w+d*R,s[7]=f*p+c*v+d*E,s[2]=h*_+u*T+g*I,s[5]=h*m+u*w+g*R,s[8]=h*p+u*v+g*E,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],f=t[7],c=t[8];return n*r*c-n*a*f-e*s*c+e*a*l+o*s*f-o*r*l}invert(){const t=this.elements,n=t[0],e=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],f=t[7],c=t[8],d=c*r-a*f,h=a*l-c*s,u=f*s-r*l,g=n*d+e*h+o*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(o*f-c*e)*_,t[2]=(a*e-o*r)*_,t[3]=h*_,t[4]=(c*n-o*l)*_,t[5]=(o*s-a*n)*_,t[6]=u*_,t[7]=(e*l-f*n)*_,t[8]=(r*n-e*s)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,e,o,s,r,a){const l=Math.cos(s),f=Math.sin(s);return this.set(e*l,e*f,-e*(l*r+f*a)+r+t,-o*f,o*l,-o*(-f*r+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(ks.makeScale(t,n)),this}rotate(t){return this.premultiply(ks.makeRotation(-t)),this}translate(t,n){return this.premultiply(ks.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,e,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,e=t.elements;for(let o=0;o<9;o++)if(n[o]!==e[o])return!1;return!0}fromArray(t,n=0){for(let e=0;e<9;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new ae;function zc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lh(){const i=bs("canvas");return i.style.display="block",i}const tl={};function _o(i){i in tl||(tl[i]=!0,console.warn(i))}function Ih(i,t,n){return new Promise(function(e,o){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:e()}}setTimeout(s,n)})}function Dh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ve={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(i,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===Ee&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ee&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Rs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,n){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const el=[.64,.33,.3,.6,.15,.06],nl=[.2126,.7152,.0722],il=[.3127,.329],ol=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ve.define({[oo]:{primaries:el,whitePoint:il,transfer:Rs,toXYZ:ol,fromXYZ:sl,luminanceCoefficients:nl,workingColorSpaceConfig:{unpackColorSpace:he},outputColorSpaceConfig:{drawingBufferColorSpace:he}},[he]:{primaries:el,whitePoint:il,transfer:Ee,toXYZ:ol,fromXYZ:sl,luminanceCoefficients:nl,outputColorSpaceConfig:{drawingBufferColorSpace:he}}});let Pi;class Nh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pi===void 0&&(Pi=bs("canvas")),Pi.width=t.width,Pi.height=t.height;const e=Pi.getContext("2d");t instanceof ImageData?e.putImageData(t,0,0):e.drawImage(t,0,0,t.width,t.height),n=Pi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=bs("canvas");n.width=t.width,n.height=t.height;const e=n.getContext("2d");e.drawImage(t,0,0,t.width,t.height);const o=e.getImageData(0,0,t.width,t.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=qn(s[r]/255)*255;return e.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let e=0;e<n.length;e++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[e]=Math.floor(qn(n[e]/255)*255):n[e]=qn(n[e]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fh=0;class Bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const e={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(Gs(o[r].image)):s.push(Gs(o[r]))}else s=Gs(o);e.url=s}return n||(t.images[this.uuid]=e),e}}function Gs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;class rn extends so{constructor(t=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,e=Mi,o=Mi,s=On,r=Si,a=Rn,l=$n,f=rn.DEFAULT_ANISOTROPY,c=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Ei(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=e,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const e={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),n||(t.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ne:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ne:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Tc;rn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,n=0,e=0,o=1){Ae.prototype.isVector4=!0,this.x=t,this.y=n,this.z=e,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,e,o){return this.x=t,this.y=n,this.z=e,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,e=this.y,o=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*e+r[8]*o+r[12]*s,this.y=r[1]*n+r[5]*e+r[9]*o+r[13]*s,this.z=r[2]*n+r[6]*e+r[10]*o+r[14]*s,this.w=r[3]*n+r[7]*e+r[11]*o+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,e,o,s;const l=t.elements,f=l[0],c=l[4],d=l[8],h=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(f+u+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(f+1)/2,v=(u+1)/2,I=(p+1)/2,R=(c+h)/4,E=(d+_)/4,C=(g+m)/4;return w>v&&w>I?w<.01?(e=0,o=.707106781,s=.707106781):(e=Math.sqrt(w),o=R/e,s=E/e):v>I?v<.01?(e=.707106781,o=0,s=.707106781):(o=Math.sqrt(v),e=R/o,s=C/o):I<.01?(e=.707106781,o=.707106781,s=0):(s=Math.sqrt(I),e=E/s,o=C/s),this.set(e,o,s,n),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(h-c)/T,this.w=Math.acos((f+u+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this.w=t.w+(n.w-t.w)*e,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends so{constructor(t=1,n=1,e={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ae(0,0,t,n),this.scissorTest=!1,this.viewport=new Ae(0,0,t,n);const o={width:t,height:n,depth:1};e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},e);const s=new rn(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace);s.flipY=!1,s.generateMipmaps=e.generateMipmaps,s.internalFormat=e.internalFormat,this.textures=[];const r=e.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.depthTexture=e.depthTexture,this.samples=e.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,e=1){if(this.width!==t||this.height!==n||this.depth!==e){this.width=t,this.height=n,this.depth=e;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=e;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,o=t.textures.length;e<o;e++)this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Bc(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends zh{constructor(t=1,n=1,e={}){super(t,n,e),this.isWebGLRenderTarget=!0}}class kc extends rn{constructor(t=null,n=1,e=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:e,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bh extends rn{constructor(t=null,n=1,e=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:e,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(t=0,n=0,e=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=e,this._w=o}static slerpFlat(t,n,e,o,s,r,a){let l=e[o+0],f=e[o+1],c=e[o+2],d=e[o+3];const h=s[r+0],u=s[r+1],g=s[r+2],_=s[r+3];if(a===0){t[n+0]=l,t[n+1]=f,t[n+2]=c,t[n+3]=d;return}if(a===1){t[n+0]=h,t[n+1]=u,t[n+2]=g,t[n+3]=_;return}if(d!==_||l!==h||f!==u||c!==g){let m=1-a;const p=l*h+f*u+c*g+d*_,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const I=Math.sqrt(w),R=Math.atan2(I,p*T);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const v=a*T;if(l=l*m+h*v,f=f*m+u*v,c=c*m+g*v,d=d*m+_*v,m===1-a){const I=1/Math.sqrt(l*l+f*f+c*c+d*d);l*=I,f*=I,c*=I,d*=I}}t[n]=l,t[n+1]=f,t[n+2]=c,t[n+3]=d}static multiplyQuaternionsFlat(t,n,e,o,s,r){const a=e[o],l=e[o+1],f=e[o+2],c=e[o+3],d=s[r],h=s[r+1],u=s[r+2],g=s[r+3];return t[n]=a*g+c*d+l*u-f*h,t[n+1]=l*g+c*h+f*d-a*u,t[n+2]=f*g+c*u+a*h-l*d,t[n+3]=c*g-a*d-l*h-f*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,e,o){return this._x=t,this._y=n,this._z=e,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const e=t._x,o=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,f=a(e/2),c=a(o/2),d=a(s/2),h=l(e/2),u=l(o/2),g=l(s/2);switch(r){case"XYZ":this._x=h*c*d+f*u*g,this._y=f*u*d-h*c*g,this._z=f*c*g+h*u*d,this._w=f*c*d-h*u*g;break;case"YXZ":this._x=h*c*d+f*u*g,this._y=f*u*d-h*c*g,this._z=f*c*g-h*u*d,this._w=f*c*d+h*u*g;break;case"ZXY":this._x=h*c*d-f*u*g,this._y=f*u*d+h*c*g,this._z=f*c*g+h*u*d,this._w=f*c*d-h*u*g;break;case"ZYX":this._x=h*c*d-f*u*g,this._y=f*u*d+h*c*g,this._z=f*c*g-h*u*d,this._w=f*c*d+h*u*g;break;case"YZX":this._x=h*c*d+f*u*g,this._y=f*u*d+h*c*g,this._z=f*c*g-h*u*d,this._w=f*c*d-h*u*g;break;case"XZY":this._x=h*c*d-f*u*g,this._y=f*u*d-h*c*g,this._z=f*c*g+h*u*d,this._w=f*c*d+h*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const e=n/2,o=Math.sin(e);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,e=n[0],o=n[4],s=n[8],r=n[1],a=n[5],l=n[9],f=n[2],c=n[6],d=n[10],h=e+a+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(c-l)*u,this._y=(s-f)*u,this._z=(r-o)*u}else if(e>a&&e>d){const u=2*Math.sqrt(1+e-a-d);this._w=(c-l)/u,this._x=.25*u,this._y=(o+r)/u,this._z=(s+f)/u}else if(a>d){const u=2*Math.sqrt(1+a-e-d);this._w=(s-f)/u,this._x=(o+r)/u,this._y=.25*u,this._z=(l+c)/u}else{const u=2*Math.sqrt(1+d-e-a);this._w=(r-o)/u,this._x=(s+f)/u,this._y=(l+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let e=t.dot(n)+1;return e<Number.EPSILON?(e=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=e):(this._x=0,this._y=-t.z,this._z=t.y,this._w=e)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=e),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,n){const e=this.angleTo(t);if(e===0)return this;const o=Math.min(1,n/e);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const e=t._x,o=t._y,s=t._z,r=t._w,a=n._x,l=n._y,f=n._z,c=n._w;return this._x=e*c+r*a+o*f-s*l,this._y=o*c+r*l+s*a-e*f,this._z=s*c+r*f+e*l-o*a,this._w=r*c-e*a-o*l-s*f,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const e=this._x,o=this._y,s=this._z,r=this._w;let a=r*t._w+e*t._x+o*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=e,this._y=o,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-n;return this._w=u*r+n*this._w,this._x=u*e+n*this._x,this._y=u*o+n*this._y,this._z=u*s+n*this._z,this.normalize(),this}const f=Math.sqrt(l),c=Math.atan2(f,a),d=Math.sin((1-n)*c)/f,h=Math.sin(n*c)/f;return this._w=r*d+this._w*h,this._x=e*d+this._x*h,this._y=o*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,e){return this.copy(t).slerp(n,e)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),e=Math.random(),o=Math.sqrt(1-e),s=Math.sqrt(e);return this.set(o*Math.sin(t),o*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,e=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=e}set(t,n,e){return e===void 0&&(e=this.z),this.x=t,this.y=n,this.z=e,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(rl.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,e=this.y,o=this.z,s=t.elements;return this.x=s[0]*n+s[3]*e+s[6]*o,this.y=s[1]*n+s[4]*e+s[7]*o,this.z=s[2]*n+s[5]*e+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,e=this.y,o=this.z,s=t.elements,r=1/(s[3]*n+s[7]*e+s[11]*o+s[15]);return this.x=(s[0]*n+s[4]*e+s[8]*o+s[12])*r,this.y=(s[1]*n+s[5]*e+s[9]*o+s[13])*r,this.z=(s[2]*n+s[6]*e+s[10]*o+s[14])*r,this}applyQuaternion(t){const n=this.x,e=this.y,o=this.z,s=t.x,r=t.y,a=t.z,l=t.w,f=2*(r*o-a*e),c=2*(a*n-s*o),d=2*(s*e-r*n);return this.x=n+l*f+r*d-a*c,this.y=e+l*c+a*f-s*d,this.z=o+l*d+s*c-r*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,e=this.y,o=this.z,s=t.elements;return this.x=s[0]*n+s[4]*e+s[8]*o,this.y=s[1]*n+s[5]*e+s[9]*o,this.z=s[2]*n+s[6]*e+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const e=t.x,o=t.y,s=t.z,r=n.x,a=n.y,l=n.z;return this.x=o*l-s*a,this.y=s*r-e*l,this.z=e*a-o*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const e=t.dot(this)/n;return this.copy(t).multiplyScalar(e)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(Ke(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y,o=this.z-t.z;return n*n+e*e+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,e){const o=Math.sin(n)*t;return this.x=o*Math.sin(e),this.y=Math.cos(n)*t,this.z=o*Math.cos(e),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,e){return this.x=t*Math.sin(n),this.y=e,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),e=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=e,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,e=Math.sqrt(1-n*n);return this.x=e*Math.cos(t),this.y=n,this.z=e*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new N,rl=new ro;class Uo{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n+=3)this.expandByPoint(bn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,e=t.count;n<e;n++)this.expandByPoint(bn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const e=bn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(e),this.max.copy(t).add(e),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const e=t.geometry;if(e!==void 0){const s=e.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,bn):bn.fromBufferAttribute(s,r),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}const o=t.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,e;return t.normal.x>0?(n=t.normal.x*this.min.x,e=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,e=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,e+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,e+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,e+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,e+=t.normal.z*this.min.z),n<=-t.constant&&e>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fo),Ho.subVectors(this.max,fo),Li.subVectors(t.a,fo),Ii.subVectors(t.b,fo),Di.subVectors(t.c,fo),Jn.subVectors(Ii,Li),jn.subVectors(Di,Ii),hi.subVectors(Li,Di);let n=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-hi.z,hi.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!Vs(n,Li,Ii,Di,Ho)||(n=[1,0,0,0,1,0,0,0,1],!Vs(n,Li,Ii,Di,Ho))?!1:(Vo.crossVectors(Jn,jn),n=[Vo.x,Vo.y,Vo.z],Vs(n,Li,Ii,Di,Ho))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new N,new N,new N,new N,new N,new N,new N,new N],bn=new N,Go=new Uo,Li=new N,Ii=new N,Di=new N,Jn=new N,jn=new N,hi=new N,fo=new N,Ho=new N,Vo=new N,di=new N;function Vs(i,t,n,e,o){for(let s=0,r=i.length-3;s<=r;s+=3){di.fromArray(i,s);const a=o.x*Math.abs(di.x)+o.y*Math.abs(di.y)+o.z*Math.abs(di.z),l=t.dot(di),f=n.dot(di),c=e.dot(di);if(Math.max(-Math.max(l,f,c),Math.min(l,f,c))>a)return!1}return!0}const kh=new Uo,ho=new N,Ws=new N;class Cs{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const e=this.center;n!==void 0?e.copy(n):kh.setFromPoints(t).getCenter(e);let o=0;for(let s=0,r=t.length;s<r;s++)o=Math.max(o,e.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const e=this.center.distanceToSquared(t);return n.copy(t),e>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ho.subVectors(t,this.center);const n=ho.lengthSq();if(n>this.radius*this.radius){const e=Math.sqrt(n),o=(e-this.radius)*.5;this.center.addScaledVector(ho,o/e),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ho.copy(t.center).add(Ws)),this.expandByPoint(ho.copy(t.center).sub(Ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new N,Xs=new N,Wo=new N,Qn=new N,Ys=new N,Xo=new N,Zs=new N;class Gc{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const e=n.dot(this.direction);return e<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=kn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,n),kn.distanceToSquared(t))}distanceSqToSegment(t,n,e,o){Xs.copy(t).add(n).multiplyScalar(.5),Wo.copy(n).sub(t).normalize(),Qn.copy(this.origin).sub(Xs);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Wo),a=Qn.dot(this.direction),l=-Qn.dot(Wo),f=Qn.lengthSq(),c=Math.abs(1-r*r);let d,h,u,g;if(c>0)if(d=r*l-a,h=r*a-l,g=s*c,d>=0)if(h>=-g)if(h<=g){const _=1/c;d*=_,h*=_,u=d*(d+r*h+2*a)+h*(r*d+h+2*l)+f}else h=s,d=Math.max(0,-(r*h+a)),u=-d*d+h*(h+2*l)+f;else h=-s,d=Math.max(0,-(r*h+a)),u=-d*d+h*(h+2*l)+f;else h<=-g?(d=Math.max(0,-(-r*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+h*(h+2*l)+f):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),u=h*(h+2*l)+f):(d=Math.max(0,-(r*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+h*(h+2*l)+f);else h=r>0?-s:s,d=Math.max(0,-(r*h+a)),u=-d*d+h*(h+2*l)+f;return e&&e.copy(this.origin).addScaledVector(this.direction,d),o&&o.copy(Xs).addScaledVector(Wo,h),u}intersectSphere(t,n){kn.subVectors(t.center,this.origin);const e=kn.dot(this.direction),o=kn.dot(kn)-e*e,s=t.radius*t.radius;if(o>s)return null;const r=Math.sqrt(s-o),a=e-r,l=e+r;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const e=-(this.origin.dot(t.normal)+t.constant)/n;return e>=0?e:null}intersectPlane(t,n){const e=this.distanceToPlane(t);return e===null?null:this.at(e,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let e,o,s,r,a,l;const f=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return f>=0?(e=(t.min.x-h.x)*f,o=(t.max.x-h.x)*f):(e=(t.max.x-h.x)*f,o=(t.min.x-h.x)*f),c>=0?(s=(t.min.y-h.y)*c,r=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,r=(t.min.y-h.y)*c),e>r||s>o||((s>e||isNaN(e))&&(e=s),(r<o||isNaN(o))&&(o=r),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),e>l||a>o)||((a>e||e!==e)&&(e=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(e>=0?e:o,n)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,n,e,o,s){Ys.subVectors(n,t),Xo.subVectors(e,t),Zs.crossVectors(Ys,Xo);let r=this.direction.dot(Zs),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Qn.subVectors(this.origin,t);const l=a*this.direction.dot(Xo.crossVectors(Qn,Xo));if(l<0)return null;const f=a*this.direction.dot(Ys.cross(Qn));if(f<0||l+f>r)return null;const c=-a*Qn.dot(Zs);return c<0?null:this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,n,e,o,s,r,a,l,f,c,d,h,u,g,_,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,e,o,s,r,a,l,f,c,d,h,u,g,_,m)}set(t,n,e,o,s,r,a,l,f,c,d,h,u,g,_,m){const p=this.elements;return p[0]=t,p[4]=n,p[8]=e,p[12]=o,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=f,p[6]=c,p[10]=d,p[14]=h,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],this}copyPosition(t){const n=this.elements,e=t.elements;return n[12]=e[12],n[13]=e[13],n[14]=e[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,e){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(t,n,e){return this.set(t.x,n.x,e.x,0,t.y,n.y,e.y,0,t.z,n.z,e.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,e=t.elements,o=1/Ui.setFromMatrixColumn(t,0).length(),s=1/Ui.setFromMatrixColumn(t,1).length(),r=1/Ui.setFromMatrixColumn(t,2).length();return n[0]=e[0]*o,n[1]=e[1]*o,n[2]=e[2]*o,n[3]=0,n[4]=e[4]*s,n[5]=e[5]*s,n[6]=e[6]*s,n[7]=0,n[8]=e[8]*r,n[9]=e[9]*r,n[10]=e[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,e=t.x,o=t.y,s=t.z,r=Math.cos(e),a=Math.sin(e),l=Math.cos(o),f=Math.sin(o),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=r*c,u=r*d,g=a*c,_=a*d;n[0]=l*c,n[4]=-l*d,n[8]=f,n[1]=u+g*f,n[5]=h-_*f,n[9]=-a*l,n[2]=_-h*f,n[6]=g+u*f,n[10]=r*l}else if(t.order==="YXZ"){const h=l*c,u=l*d,g=f*c,_=f*d;n[0]=h+_*a,n[4]=g*a-u,n[8]=r*f,n[1]=r*d,n[5]=r*c,n[9]=-a,n[2]=u*a-g,n[6]=_+h*a,n[10]=r*l}else if(t.order==="ZXY"){const h=l*c,u=l*d,g=f*c,_=f*d;n[0]=h-_*a,n[4]=-r*d,n[8]=g+u*a,n[1]=u+g*a,n[5]=r*c,n[9]=_-h*a,n[2]=-r*f,n[6]=a,n[10]=r*l}else if(t.order==="ZYX"){const h=r*c,u=r*d,g=a*c,_=a*d;n[0]=l*c,n[4]=g*f-u,n[8]=h*f+_,n[1]=l*d,n[5]=_*f+h,n[9]=u*f-g,n[2]=-f,n[6]=a*l,n[10]=r*l}else if(t.order==="YZX"){const h=r*l,u=r*f,g=a*l,_=a*f;n[0]=l*c,n[4]=_-h*d,n[8]=g*d+u,n[1]=d,n[5]=r*c,n[9]=-a*c,n[2]=-f*c,n[6]=u*d+g,n[10]=h-_*d}else if(t.order==="XZY"){const h=r*l,u=r*f,g=a*l,_=a*f;n[0]=l*c,n[4]=-d,n[8]=f*c,n[1]=h*d+_,n[5]=r*c,n[9]=u*d-g,n[2]=g*d-u,n[6]=a*c,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gh,t,Hh)}lookAt(t,n,e){const o=this.elements;return pn.subVectors(t,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ti.crossVectors(e,pn),ti.lengthSq()===0&&(Math.abs(e.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ti.crossVectors(e,pn)),ti.normalize(),Yo.crossVectors(pn,ti),o[0]=ti.x,o[4]=Yo.x,o[8]=pn.x,o[1]=ti.y,o[5]=Yo.y,o[9]=pn.y,o[2]=ti.z,o[6]=Yo.z,o[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,o=n.elements,s=this.elements,r=e[0],a=e[4],l=e[8],f=e[12],c=e[1],d=e[5],h=e[9],u=e[13],g=e[2],_=e[6],m=e[10],p=e[14],T=e[3],w=e[7],v=e[11],I=e[15],R=o[0],E=o[4],C=o[8],S=o[12],M=o[1],P=o[5],B=o[9],k=o[13],K=o[2],Z=o[6],V=o[10],j=o[14],X=o[3],rt=o[7],lt=o[11],ut=o[15];return s[0]=r*R+a*M+l*K+f*X,s[4]=r*E+a*P+l*Z+f*rt,s[8]=r*C+a*B+l*V+f*lt,s[12]=r*S+a*k+l*j+f*ut,s[1]=c*R+d*M+h*K+u*X,s[5]=c*E+d*P+h*Z+u*rt,s[9]=c*C+d*B+h*V+u*lt,s[13]=c*S+d*k+h*j+u*ut,s[2]=g*R+_*M+m*K+p*X,s[6]=g*E+_*P+m*Z+p*rt,s[10]=g*C+_*B+m*V+p*lt,s[14]=g*S+_*k+m*j+p*ut,s[3]=T*R+w*M+v*K+I*X,s[7]=T*E+w*P+v*Z+I*rt,s[11]=T*C+w*B+v*V+I*lt,s[15]=T*S+w*k+v*j+I*ut,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[4],o=t[8],s=t[12],r=t[1],a=t[5],l=t[9],f=t[13],c=t[2],d=t[6],h=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*d-o*f*d-s*a*h+e*f*h+o*a*u-e*l*u)+_*(+n*l*u-n*f*h+s*r*h-o*r*u+o*f*c-s*l*c)+m*(+n*f*d-n*a*u-s*r*d+e*r*u+s*a*c-e*f*c)+p*(-o*a*c-n*l*d+n*a*h+o*r*d-e*r*h+e*l*c)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,e){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=e),this}invert(){const t=this.elements,n=t[0],e=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],f=t[7],c=t[8],d=t[9],h=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=d*m*f-_*h*f+_*l*u-a*m*u-d*l*p+a*h*p,w=g*h*f-c*m*f-g*l*u+r*m*u+c*l*p-r*h*p,v=c*_*f-g*d*f+g*a*u-r*_*u-c*a*p+r*d*p,I=g*d*l-c*_*l-g*a*h+r*_*h+c*a*m-r*d*m,R=n*T+e*w+o*v+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=T*E,t[1]=(_*h*s-d*m*s-_*o*u+e*m*u+d*o*p-e*h*p)*E,t[2]=(a*m*s-_*l*s+_*o*f-e*m*f-a*o*p+e*l*p)*E,t[3]=(d*l*s-a*h*s-d*o*f+e*h*f+a*o*u-e*l*u)*E,t[4]=w*E,t[5]=(c*m*s-g*h*s+g*o*u-n*m*u-c*o*p+n*h*p)*E,t[6]=(g*l*s-r*m*s-g*o*f+n*m*f+r*o*p-n*l*p)*E,t[7]=(r*h*s-c*l*s+c*o*f-n*h*f-r*o*u+n*l*u)*E,t[8]=v*E,t[9]=(g*d*s-c*_*s-g*e*u+n*_*u+c*e*p-n*d*p)*E,t[10]=(r*_*s-g*a*s+g*e*f-n*_*f-r*e*p+n*a*p)*E,t[11]=(c*a*s-r*d*s-c*e*f+n*d*f+r*e*u-n*a*u)*E,t[12]=I*E,t[13]=(c*_*o-g*d*o+g*e*h-n*_*h-c*e*m+n*d*m)*E,t[14]=(g*a*o-r*_*o-g*e*l+n*_*l+r*e*m-n*a*m)*E,t[15]=(r*d*o-c*a*o+c*e*l-n*d*l-r*e*h+n*a*h)*E,this}scale(t){const n=this.elements,e=t.x,o=t.y,s=t.z;return n[0]*=e,n[4]*=o,n[8]*=s,n[1]*=e,n[5]*=o,n[9]*=s,n[2]*=e,n[6]*=o,n[10]*=s,n[3]*=e,n[7]*=o,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,e,o))}makeTranslation(t,n,e){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,e,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),e=Math.sin(t);return this.set(1,0,0,0,0,n,-e,0,0,e,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,0,e,0,0,1,0,0,-e,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,0,e,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const e=Math.cos(n),o=Math.sin(n),s=1-e,r=t.x,a=t.y,l=t.z,f=s*r,c=s*a;return this.set(f*r+e,f*a-o*l,f*l+o*a,0,f*a+o*l,c*a+e,c*l-o*r,0,f*l-o*a,c*l+o*r,s*l*l+e,0,0,0,0,1),this}makeScale(t,n,e){return this.set(t,0,0,0,0,n,0,0,0,0,e,0,0,0,0,1),this}makeShear(t,n,e,o,s,r){return this.set(1,e,s,0,t,1,r,0,n,o,1,0,0,0,0,1),this}compose(t,n,e){const o=this.elements,s=n._x,r=n._y,a=n._z,l=n._w,f=s+s,c=r+r,d=a+a,h=s*f,u=s*c,g=s*d,_=r*c,m=r*d,p=a*d,T=l*f,w=l*c,v=l*d,I=e.x,R=e.y,E=e.z;return o[0]=(1-(_+p))*I,o[1]=(u+v)*I,o[2]=(g-w)*I,o[3]=0,o[4]=(u-v)*R,o[5]=(1-(h+p))*R,o[6]=(m+T)*R,o[7]=0,o[8]=(g+w)*E,o[9]=(m-T)*E,o[10]=(1-(h+_))*E,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,e){const o=this.elements;let s=Ui.set(o[0],o[1],o[2]).length();const r=Ui.set(o[4],o[5],o[6]).length(),a=Ui.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],Tn.copy(this);const f=1/s,c=1/r,d=1/a;return Tn.elements[0]*=f,Tn.elements[1]*=f,Tn.elements[2]*=f,Tn.elements[4]*=c,Tn.elements[5]*=c,Tn.elements[6]*=c,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,n.setFromRotationMatrix(Tn),e.x=s,e.y=r,e.z=a,this}makePerspective(t,n,e,o,s,r,a=Yn){const l=this.elements,f=2*s/(n-t),c=2*s/(e-o),d=(n+t)/(n-t),h=(e+o)/(e-o);let u,g;if(a===Yn)u=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===ys)u=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,e,o,s,r,a=Yn){const l=this.elements,f=1/(n-t),c=1/(e-o),d=1/(r-s),h=(n+t)*f,u=(e+o)*c;let g,_;if(a===Yn)g=(r+s)*d,_=-2*d;else if(a===ys)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,e=t.elements;for(let o=0;o<16;o++)if(n[o]!==e[o])return!1;return!0}fromArray(t,n=0){for(let e=0;e<16;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t[n+9]=e[9],t[n+10]=e[10],t[n+11]=e[11],t[n+12]=e[12],t[n+13]=e[13],t[n+14]=e[14],t[n+15]=e[15],t}}const Ui=new N,Tn=new Le,Gh=new N(0,0,0),Hh=new N(1,1,1),ti=new N,Yo=new N,pn=new N,al=new Le,ll=new ro;class Ln{constructor(t=0,n=0,e=0,o=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=e,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,e,o=this._order){return this._x=t,this._y=n,this._z=e,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,e=!0){const o=t.elements,s=o[0],r=o[4],a=o[8],l=o[1],f=o[5],c=o[9],d=o[2],h=o[6],u=o[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,f));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,f),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,e===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,e){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,n,e)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vh=0;const cl=new N,Ni=new ro,Gn=new Le,Zo=new N,uo=new N,Wh=new N,Xh=new ro,fl=new N(1,0,0),hl=new N(0,1,0),dl=new N(0,0,1),ul={type:"added"},Yh={type:"removed"},Fi={type:"childadded",child:null},qs={type:"childremoved",child:null};class Xe extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new N,n=new Ln,e=new ro,o=new N(1,1,1);function s(){e.setFromEuler(n,!1)}function r(){n.setFromQuaternion(e,void 0,!1)}n._onChange(s),e._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Le},normalMatrix:{value:new ae}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ni.setFromAxisAngle(t,n),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,n){return Ni.setFromAxisAngle(t,n),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,n){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,n,e){t.isVector3?Zo.copy(t):Zo.set(t,n,e);const o=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(uo,Zo,this.up):Gn.lookAt(Zo,uo,this.up),this.quaternion.setFromRotationMatrix(Gn),o&&(Gn.extractRotation(o.matrixWorld),Ni.setFromRotationMatrix(Gn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ul),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Yh),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ul),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let e=0,o=this.children.length;e<o;e++){const r=this.children[e].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,e=[]){this[t]===n&&e.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(t,n,e);return e}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let e=0,o=n.length;e<o;e++)n[e].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let e=0,o=n.length;e<o;e++)n[e].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let e=0,o=n.length;e<o;e++)n[e].updateMatrixWorld(t)}updateWorldMatrix(t,n){const e=this.parent;if(t===!0&&e!==null&&e.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",e={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let f=0,c=l.length;f<c;f++){const d=l[f];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,f=this.material.length;l<f;l++)a.push(s(t.materials,this.material[l]));o.material=a}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(s(t.animations,l))}}if(n){const a=r(t.geometries),l=r(t.materials),f=r(t.textures),c=r(t.images),d=r(t.shapes),h=r(t.skeletons),u=r(t.animations),g=r(t.nodes);a.length>0&&(e.geometries=a),l.length>0&&(e.materials=l),f.length>0&&(e.textures=f),c.length>0&&(e.images=c),d.length>0&&(e.shapes=d),h.length>0&&(e.skeletons=h),u.length>0&&(e.animations=u),g.length>0&&(e.nodes=g)}return e.object=o,e;function r(a){const l=[];for(const f in a){const c=a[f];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let e=0;e<t.children.length;e++){const o=t.children[e];this.add(o.clone())}return this}}Xe.DEFAULT_UP=new N(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new N,Hn=new N,$s=new N,Vn=new N,Oi=new N,zi=new N,pl=new N,Ks=new N,Js=new N,js=new N,Qs=new Ae,tr=new Ae,er=new Ae;class An{constructor(t=new N,n=new N,e=new N){this.a=t,this.b=n,this.c=e}static getNormal(t,n,e,o){o.subVectors(e,n),En.subVectors(t,n),o.cross(En);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,n,e,o,s){En.subVectors(o,n),Hn.subVectors(e,n),$s.subVectors(t,n);const r=En.dot(En),a=En.dot(Hn),l=En.dot($s),f=Hn.dot(Hn),c=Hn.dot($s),d=r*f-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,u=(f*l-a*c)*h,g=(r*c-a*l)*h;return s.set(1-u-g,g,u)}static containsPoint(t,n,e,o){return this.getBarycoord(t,n,e,o,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,n,e,o,s,r,a,l){return this.getBarycoord(t,n,e,o,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(r,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,n,e,o,s,r){return Qs.setScalar(0),tr.setScalar(0),er.setScalar(0),Qs.fromBufferAttribute(t,n),tr.fromBufferAttribute(t,e),er.fromBufferAttribute(t,o),r.setScalar(0),r.addScaledVector(Qs,s.x),r.addScaledVector(tr,s.y),r.addScaledVector(er,s.z),r}static isFrontFacing(t,n,e,o){return En.subVectors(e,n),Hn.subVectors(t,n),En.cross(Hn).dot(o)<0}set(t,n,e){return this.a.copy(t),this.b.copy(n),this.c.copy(e),this}setFromPointsAndIndices(t,n,e,o){return this.a.copy(t[n]),this.b.copy(t[e]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,e,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,e),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),En.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return An.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,e,o,s){return An.getInterpolation(t,this.a,this.b,this.c,n,e,o,s)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const e=this.a,o=this.b,s=this.c;let r,a;Oi.subVectors(o,e),zi.subVectors(s,e),Ks.subVectors(t,e);const l=Oi.dot(Ks),f=zi.dot(Ks);if(l<=0&&f<=0)return n.copy(e);Js.subVectors(t,o);const c=Oi.dot(Js),d=zi.dot(Js);if(c>=0&&d<=c)return n.copy(o);const h=l*d-c*f;if(h<=0&&l>=0&&c<=0)return r=l/(l-c),n.copy(e).addScaledVector(Oi,r);js.subVectors(t,s);const u=Oi.dot(js),g=zi.dot(js);if(g>=0&&u<=g)return n.copy(s);const _=u*f-l*g;if(_<=0&&f>=0&&g<=0)return a=f/(f-g),n.copy(e).addScaledVector(zi,a);const m=c*g-u*d;if(m<=0&&d-c>=0&&u-g>=0)return pl.subVectors(s,o),a=(d-c)/(d-c+(u-g)),n.copy(o).addScaledVector(pl,a);const p=1/(m+_+h);return r=_*p,a=h*p,n.copy(e).addScaledVector(Oi,r).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},qo={h:0,s:0,l:0};function nr(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class de{constructor(t,n,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,e)}set(t,n,e){if(n===void 0&&e===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,e);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,n),this}setRGB(t,n,e,o=ve.workingColorSpace){return this.r=t,this.g=n,this.b=e,ve.toWorkingColorSpace(this,o),this}setHSL(t,n,e,o=ve.workingColorSpace){if(t=ga(t,1),n=Ke(n,0,1),e=Ke(e,0,1),n===0)this.r=this.g=this.b=e;else{const s=e<=.5?e*(1+n):e+n-e*n,r=2*e-s;this.r=nr(r,s,t+1/3),this.g=nr(r,s,t),this.b=nr(r,s,t-1/3)}return ve.toWorkingColorSpace(this,o),this}setStyle(t,n=he){function e(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=he){const e=Vc[t.toLowerCase()];return e!==void 0?this.setHex(e,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return ve.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ke(Qe.r*255,0,255))*65536+Math.round(Ke(Qe.g*255,0,255))*256+Math.round(Ke(Qe.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ve.workingColorSpace){ve.fromWorkingColorSpace(Qe.copy(this),n);const e=Qe.r,o=Qe.g,s=Qe.b,r=Math.max(e,o,s),a=Math.min(e,o,s);let l,f;const c=(a+r)/2;if(a===r)l=0,f=0;else{const d=r-a;switch(f=c<=.5?d/(r+a):d/(2-r-a),r){case e:l=(o-s)/d+(o<s?6:0);break;case o:l=(s-e)/d+2;break;case s:l=(e-o)/d+4;break}l/=6}return t.h=l,t.s=f,t.l=c,t}getRGB(t,n=ve.workingColorSpace){return ve.fromWorkingColorSpace(Qe.copy(this),n),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=he){ve.fromWorkingColorSpace(Qe.copy(this),t);const n=Qe.r,e=Qe.g,o=Qe.b;return t!==he?`color(${t} ${n.toFixed(3)} ${e.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(e*255)},${Math.round(o*255)})`}offsetHSL(t,n,e){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+n,ei.l+e)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,e){return this.r=t.r+(n.r-t.r)*e,this.g=t.g+(n.g-t.g)*e,this.b=t.b+(n.b-t.b)*e,this}lerpHSL(t,n){this.getHSL(ei),t.getHSL(qo);const e=Mo(ei.h,qo.h,n),o=Mo(ei.s,qo.s,n),s=Mo(ei.l,qo.l,n);return this.setHSL(e,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,e=this.g,o=this.b,s=t.elements;return this.r=s[0]*n+s[3]*e+s[6]*o,this.g=s[1]*n+s[4]*e+s[7]*o,this.b=s[2]*n+s[5]*e+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new de;de.NAMES=Vc;let Zh=0;class ao extends so{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Ei(),this.name="",this.blending=Zi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=Sr,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const e=t[n];if(e===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(e):o&&o.isVector3&&e&&e.isVector3?o.copy(e):this[n]=e}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const e={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(e.dispersion=this.dispersion),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(t).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(t).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(t).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(t).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(t).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapRotation!==void 0&&(e.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(e.blending=this.blending),this.side!==ai&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==Mr&&(e.blendSrc=this.blendSrc),this.blendDst!==Sr&&(e.blendDst=this.blendDst),this.blendEquation!==vi&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(e.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function o(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(n){const s=o(t.textures),r=o(t.images);s.length>0&&(e.textures=s),r.length>0&&(e.images=r)}return e}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let e=null;if(n!==null){const o=n.length;e=new Array(o);for(let s=0;s!==o;++s)e[s]=n[s].clone()}return this.clippingPlanes=e,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qt extends ao{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new N,$o=new zt;class Pn{constructor(t,n,e=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=e,this.usage=Ja,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,e){t*=this.itemSize,e*=n.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=n.array[e+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,e=this.count;n<e;n++)$o.fromBufferAttribute(this,n),$o.applyMatrix3(t),this.setXY(n,$o.x,$o.y);else if(this.itemSize===3)for(let n=0,e=this.count;n<e;n++)Oe.fromBufferAttribute(this,n),Oe.applyMatrix3(t),this.setXYZ(n,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let n=0,e=this.count;n<e;n++)Oe.fromBufferAttribute(this,n),Oe.applyMatrix4(t),this.setXYZ(n,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let n=0,e=this.count;n<e;n++)Oe.fromBufferAttribute(this,n),Oe.applyNormalMatrix(t),this.setXYZ(n,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let n=0,e=this.count;n<e;n++)Oe.fromBufferAttribute(this,n),Oe.transformDirection(t),this.setXYZ(n,Oe.x,Oe.y,Oe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let e=this.array[t*this.itemSize+n];return this.normalized&&(e=Wi(e,this.array)),e}setComponent(t,n,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+n]=e,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Wi(n,this.array)),n}setX(t,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Wi(n,this.array)),n}setY(t,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Wi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Wi(n,this.array)),n}setW(t,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,e){return t*=this.itemSize,this.normalized&&(n=on(n,this.array),e=on(e,this.array)),this.array[t+0]=n,this.array[t+1]=e,this}setXYZ(t,n,e,o){return t*=this.itemSize,this.normalized&&(n=on(n,this.array),e=on(e,this.array),o=on(o,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=o,this}setXYZW(t,n,e,o,s){return t*=this.itemSize,this.normalized&&(n=on(n,this.array),e=on(e,this.array),o=on(o,this.array),s=on(s,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class Wc extends Pn{constructor(t,n,e){super(new Uint16Array(t),n,e)}}class Xc extends Pn{constructor(t,n,e){super(new Uint32Array(t),n,e)}}class Pe extends Pn{constructor(t,n,e){super(new Float32Array(t),n,e)}}let qh=0;const Sn=new Le,ir=new Xe,Bi=new N,mn=new Uo,po=new Uo,Ve=new N;class en extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zc(t)?Xc:Wc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,e=0){this.groups.push({start:t,count:n,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const e=this.attributes.normal;if(e!==void 0){const s=new ae().getNormalMatrix(t);e.applyNormalMatrix(s),e.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,n,e){return Sn.makeTranslation(t,n,e),this.applyMatrix4(Sn),this}scale(t,n,e){return Sn.makeScale(t,n,e),this.applyMatrix4(Sn),this}lookAt(t){return ir.lookAt(t),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const e=[];for(let o=0,s=t.length;o<s;o++){const r=t[o];e.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Pe(e,3))}else{for(let e=0,o=n.count;e<o;e++){const s=t[e];n.setXYZ(e,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,o=n.length;e<o;e++){const s=n[e];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const e=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const a=n[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(mn.min,po.min),mn.expandByPoint(Ve),Ve.addVectors(mn.max,po.max),mn.expandByPoint(Ve)):(mn.expandByPoint(po.min),mn.expandByPoint(po.max))}mn.getCenter(e);let o=0;for(let s=0,r=t.count;s<r;s++)Ve.fromBufferAttribute(t,s),o=Math.max(o,e.distanceToSquared(Ve));if(n)for(let s=0,r=n.length;s<r;s++){const a=n[s],l=this.morphTargetsRelative;for(let f=0,c=a.count;f<c;f++)Ve.fromBufferAttribute(a,f),l&&(Bi.fromBufferAttribute(t,f),Ve.add(Bi)),o=Math.max(o,e.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const e=n.position,o=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*e.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<e.count;C++)a[C]=new N,l[C]=new N;const f=new N,c=new N,d=new N,h=new zt,u=new zt,g=new zt,_=new N,m=new N;function p(C,S,M){f.fromBufferAttribute(e,C),c.fromBufferAttribute(e,S),d.fromBufferAttribute(e,M),h.fromBufferAttribute(s,C),u.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),c.sub(f),d.sub(f),u.sub(h),g.sub(h);const P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(P),m.copy(d).multiplyScalar(u.x).addScaledVector(c,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(m),l[S].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,S=T.length;C<S;++C){const M=T[C],P=M.start,B=M.count;for(let k=P,K=P+B;k<K;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new N,v=new N,I=new N,R=new N;function E(C){I.fromBufferAttribute(o,C),R.copy(I);const S=a[C];w.copy(S),w.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(R,S);const P=v.dot(l[C])<0?-1:1;r.setXYZW(C,w.x,w.y,w.z,P)}for(let C=0,S=T.length;C<S;++C){const M=T[C],P=M.start,B=M.count;for(let k=P,K=P+B;k<K;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let e=this.getAttribute("normal");if(e===void 0)e=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",e);else for(let h=0,u=e.count;h<u;h++)e.setXYZ(h,0,0,0);const o=new N,s=new N,r=new N,a=new N,l=new N,f=new N,c=new N,d=new N;if(t)for(let h=0,u=t.count;h<u;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);o.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,m),c.subVectors(r,s),d.subVectors(o,s),c.cross(d),a.fromBufferAttribute(e,g),l.fromBufferAttribute(e,_),f.fromBufferAttribute(e,m),a.add(c),l.add(c),f.add(c),e.setXYZ(g,a.x,a.y,a.z),e.setXYZ(_,l.x,l.y,l.z),e.setXYZ(m,f.x,f.y,f.z)}else for(let h=0,u=n.count;h<u;h+=3)o.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),c.subVectors(r,s),d.subVectors(o,s),c.cross(d),e.setXYZ(h+0,c.x,c.y,c.z),e.setXYZ(h+1,c.x,c.y,c.z),e.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,e=t.count;n<e;n++)Ve.fromBufferAttribute(t,n),Ve.normalize(),t.setXYZ(n,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const f=a.array,c=a.itemSize,d=a.normalized,h=new f.constructor(l.length*c);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*c;for(let p=0;p<c;p++)h[g++]=f[u++]}return new Pn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new en,e=this.index.array,o=this.attributes;for(const a in o){const l=o[a],f=t(l,e);n.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const l=[],f=s[a];for(let c=0,d=f.length;c<d;c++){const h=f[c],u=t(h,e);l.push(u)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const f=r[a];n.addGroup(f.start,f.count,f.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(t[f]=l[f]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const e=this.attributes;for(const l in e){const f=e[l];t.data.attributes[l]=f.toJSON(t.data)}const o={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],c=[];for(let d=0,h=f.length;d<h;d++){const u=f[d];c.push(u.toJSON(t.data))}c.length>0&&(o[l]=c,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const e=t.index;e!==null&&this.setIndex(e.clone(n));const o=t.attributes;for(const f in o){const c=o[f];this.setAttribute(f,c.clone(n))}const s=t.morphAttributes;for(const f in s){const c=[],d=s[f];for(let h=0,u=d.length;h<u;h++)c.push(d[h].clone(n));this.morphAttributes[f]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let f=0,c=r.length;f<c;f++){const d=r[f];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new Le,ui=new Gc,Ko=new Cs,gl=new N,Jo=new N,jo=new N,Qo=new N,or=new N,ts=new N,xl=new N,es=new N;class x extends Xe{constructor(t=new en,n=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const o=n[e[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const e=this.geometry,o=e.attributes.position,s=e.morphAttributes.position,r=e.morphTargetsRelative;n.fromBufferAttribute(o,t);const a=this.morphTargetInfluences;if(s&&a){ts.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const c=a[l],d=s[l];c!==0&&(or.fromBufferAttribute(d,t),r?ts.addScaledVector(or,c):ts.addScaledVector(or.sub(n),c))}n.add(ts)}return n}raycast(t,n){const e=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),Ko.copy(e.boundingSphere),Ko.applyMatrix4(s),ui.copy(t.ray).recast(t.near),!(Ko.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Ko,gl)===null||ui.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(s).invert(),ui.copy(t.ray).applyMatrix4(ml),!(e.boundingBox!==null&&ui.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(t,n,ui)))}_computeIntersections(t,n,e){let o;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,f=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=r[m.materialIndex],T=Math.max(m.start,u.start),w=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=T,I=w;v<I;v+=3){const R=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);o=ns(this,p,t,e,f,c,d,R,E,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);o=ns(this,r,t,e,f,c,d,T,w,v),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=r[m.materialIndex],T=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=T,I=w;v<I;v+=3){const R=v,E=v+1,C=v+2;o=ns(this,p,t,e,f,c,d,R,E,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const T=m,w=m+1,v=m+2;o=ns(this,r,t,e,f,c,d,T,w,v),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}}}function $h(i,t,n,e,o,s,r,a){let l;if(t.side===hn?l=e.intersectTriangle(r,s,o,!0,a):l=e.intersectTriangle(o,s,r,t.side===ai,a),l===null)return null;es.copy(a),es.applyMatrix4(i.matrixWorld);const f=n.ray.origin.distanceTo(es);return f<n.near||f>n.far?null:{distance:f,point:es.clone(),object:i}}function ns(i,t,n,e,o,s,r,a,l,f){i.getVertexPosition(a,Jo),i.getVertexPosition(l,jo),i.getVertexPosition(f,Qo);const c=$h(i,t,n,e,Jo,jo,Qo,xl);if(c){const d=new N;An.getBarycoord(xl,Jo,jo,Qo,d),o&&(c.uv=An.getInterpolatedAttribute(o,a,l,f,d,new zt)),s&&(c.uv1=An.getInterpolatedAttribute(s,a,l,f,d,new zt)),r&&(c.normal=An.getInterpolatedAttribute(r,a,l,f,d,new N),c.normal.dot(e.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:f,normal:new N,materialIndex:0};An.getNormal(Jo,jo,Qo,h.normal),c.face=h,c.barycoord=d}return c}class L extends en{constructor(t=1,n=1,e=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:e,widthSegments:o,heightSegments:s,depthSegments:r};const a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const l=[],f=[],c=[],d=[];let h=0,u=0;g("z","y","x",-1,-1,e,n,t,r,s,0),g("z","y","x",1,-1,e,n,-t,r,s,1),g("x","z","y",1,1,t,e,n,o,r,2),g("x","z","y",1,-1,t,e,-n,o,r,3),g("x","y","z",1,-1,t,n,e,o,s,4),g("x","y","z",-1,-1,t,n,-e,o,s,5),this.setIndex(l),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(d,2));function g(_,m,p,T,w,v,I,R,E,C,S){const M=v/E,P=I/C,B=v/2,k=I/2,K=R/2,Z=E+1,V=C+1;let j=0,X=0;const rt=new N;for(let lt=0;lt<V;lt++){const ut=lt*P-k;for(let Tt=0;Tt<Z;Tt++){const St=Tt*M-B;rt[_]=St*T,rt[m]=ut*w,rt[p]=K,f.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=R>0?1:-1,c.push(rt.x,rt.y,rt.z),d.push(Tt/E),d.push(1-lt/C),j+=1}}for(let lt=0;lt<C;lt++)for(let ut=0;ut<E;ut++){const Tt=h+ut+Z*lt,St=h+ut+Z*(lt+1),G=h+(ut+1)+Z*(lt+1),W=h+(ut+1)+Z*lt;l.push(Tt,St,W),l.push(St,G,W),X+=6}a.addGroup(u,X,S),u+=X,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new L(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function no(i){const t={};for(const n in i){t[n]={};for(const e in i[n]){const o=i[n][e];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][e]=null):t[n][e]=o.clone():Array.isArray(o)?t[n][e]=o.slice():t[n][e]=o}}return t}function sn(i){const t={};for(let n=0;n<i.length;n++){const e=no(i[n]);for(const o in e)t[o]=e[o]}return t}function Kh(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function Yc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Jh={clone:no,merge:sn};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends ao{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=no(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?n.uniforms[o]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[o]={type:"m4",value:r.toArray()}:n.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const e={};for(const o in this.extensions)this.extensions[o]===!0&&(e[o]=!0);return Object.keys(e).length>0&&(n.extensions=e),n}}class Zc extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Yn}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new N,_l=new zt,vl=new zt;class gn extends Zc{constructor(t=50,n=1,e=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=e,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,e){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,n){return this.getViewBounds(t,_l,vl),n.subVectors(vl,_l)}setViewOffset(t,n,e,o,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(wo*.5*this.fov)/this.zoom,e=2*n,o=this.aspect*e,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,f=r.fullHeight;s+=r.offsetX*o/l,n-=r.offsetY*e/f,o*=r.width/l,e*=r.height/f}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,n,n-e,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ki=-90,Gi=1;class td extends Xe{constructor(t,n,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gn(ki,Gi,t,n);o.layers=this.layers,this.add(o);const s=new gn(ki,Gi,t,n);s.layers=this.layers,this.add(s);const r=new gn(ki,Gi,t,n);r.layers=this.layers,this.add(r);const a=new gn(ki,Gi,t,n);a.layers=this.layers,this.add(a);const l=new gn(ki,Gi,t,n);l.layers=this.layers,this.add(l);const f=new gn(ki,Gi,t,n);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[e,o,s,r,a,l]=n;for(const f of n)this.remove(f);if(t===Yn)e.up.set(0,1,0),e.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)e.up.set(0,-1,0),e.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of n)this.add(f),f.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:e,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,f,c]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=e.texture.generateMipmaps;e.texture.generateMipmaps=!1,t.setRenderTarget(e,0,o),t.render(n,s),t.setRenderTarget(e,1,o),t.render(n,r),t.setRenderTarget(e,2,o),t.render(n,a),t.setRenderTarget(e,3,o),t.render(n,l),t.setRenderTarget(e,4,o),t.render(n,f),e.texture.generateMipmaps=_,t.setRenderTarget(e,5,o),t.render(n,c),t.setRenderTarget(d,h,u),t.xr.enabled=g,e.texture.needsPMREMUpdate=!0}}class qc extends rn{constructor(t,n,e,o,s,r,a,l,f,c){t=t!==void 0?t:[],n=n!==void 0?n:ji,super(t,n,e,o,s,r,a,l,f,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ed extends bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const e={width:t,height:t,depth:1},o=[e,e,e,e,e,e];this.texture=new qc(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const e={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new L(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:no(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:hn,blending:oi});s.uniforms.tEquirect.value=n;const r=new x(o,s),a=n.minFilter;return n.minFilter===Si&&(n.minFilter=On),new td(1,10,this).update(t,r),n.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,e,o){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,e,o);t.setRenderTarget(s)}}const sr=new N,nd=new N,id=new ae;class xi{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,e,o){return this.normal.set(t,n,e),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,e){const o=sr.subVectors(e,n).cross(nd.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const e=t.delta(sr),o=this.normal.dot(e);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:n.copy(t.start).addScaledVector(e,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),e=this.distanceToPoint(t.end);return n<0&&e>0||e<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const e=n||id.getNormalMatrix(t),o=this.coplanarPoint(sr).applyMatrix4(t),s=this.normal.applyMatrix3(e).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Cs,is=new N;class xa{constructor(t=new xi,n=new xi,e=new xi,o=new xi,s=new xi,r=new xi){this.planes=[t,n,e,o,s,r]}set(t,n,e,o,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(e),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(t){const n=this.planes;for(let e=0;e<6;e++)n[e].copy(t.planes[e]);return this}setFromProjectionMatrix(t,n=Yn){const e=this.planes,o=t.elements,s=o[0],r=o[1],a=o[2],l=o[3],f=o[4],c=o[5],d=o[6],h=o[7],u=o[8],g=o[9],_=o[10],m=o[11],p=o[12],T=o[13],w=o[14],v=o[15];if(e[0].setComponents(l-s,h-f,m-u,v-p).normalize(),e[1].setComponents(l+s,h+f,m+u,v+p).normalize(),e[2].setComponents(l+r,h+c,m+g,v+T).normalize(),e[3].setComponents(l-r,h-c,m-g,v-T).normalize(),e[4].setComponents(l-a,h-d,m-_,v-w).normalize(),n===Yn)e[5].setComponents(l+a,h+d,m+_,v+w).normalize();else if(n===ys)e[5].setComponents(a,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pi.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const n=this.planes,e=t.center,o=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let e=0;e<6;e++){const o=n[e];if(is.x=o.normal.x>0?t.max.x:t.min.x,is.y=o.normal.y>0?t.max.y:t.min.y,is.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let e=0;e<6;e++)if(n[e].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $c(){let i=null,t=!1,n=null,e=null;function o(s,r){n(s,r),e=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(e=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(e),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){i=s}}}function od(i){const t=new WeakMap;function n(a,l){const f=a.array,c=a.usage,d=f.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,f,c),a.onUploadCallback();let u;if(f instanceof Float32Array)u=i.FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)u=i.SHORT;else if(f instanceof Uint32Array)u=i.UNSIGNED_INT;else if(f instanceof Int32Array)u=i.INT;else if(f instanceof Int8Array)u=i.BYTE;else if(f instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:u,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:d}}function e(a,l,f){const c=l.array,d=l.updateRanges;if(i.bindBuffer(f,a),d.length===0)i.bufferSubData(f,0,c);else{d.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<d.length;u++){const g=d[h],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];i.bufferSubData(f,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const f=t.get(a);if(f===void 0)t.set(a,n(a,l));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");e(f.buffer,a,l),f.version=a.version}}return{get:o,remove:s,update:r}}class ee extends en{constructor(t=1,n=1,e=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:e,heightSegments:o};const s=t/2,r=n/2,a=Math.floor(e),l=Math.floor(o),f=a+1,c=l+1,d=t/a,h=n/l,u=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const T=p*h-r;for(let w=0;w<f;w++){const v=w*d-s;g.push(v,-T,0),_.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const w=T+f*p,v=T+f*(p+1),I=T+1+f*(p+1),R=T+1+f*p;u.push(w,v,R),u.push(v,I,R)}this.setIndex(u),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.width,t.height,t.widthSegments,t.heightSegments)}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ou=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,au=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_u=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Au=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Du=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ju=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,F0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:fd,aomap_fragment:hd,aomap_pars_fragment:dd,batching_pars_vertex:ud,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:xd,iridescence_fragment:_d,bumpmap_pars_fragment:vd,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:Sd,clipping_planes_vertex:yd,color_fragment:bd,color_pars_fragment:Td,color_pars_vertex:Ed,color_vertex:Ad,common:Rd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Id,emissivemap_fragment:Dd,emissivemap_pars_fragment:Ud,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:zd,envmap_pars_fragment:Bd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Jd,envmap_vertex:Gd,fog_vertex:Hd,fog_pars_vertex:Vd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:Zd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:$d,lights_pars_begin:Kd,lights_toon_fragment:jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:tu,lights_phong_pars_fragment:eu,lights_physical_fragment:nu,lights_physical_pars_fragment:iu,lights_fragment_begin:ou,lights_fragment_maps:su,lights_fragment_end:ru,logdepthbuf_fragment:au,logdepthbuf_pars_fragment:lu,logdepthbuf_pars_vertex:cu,logdepthbuf_vertex:fu,map_fragment:hu,map_pars_fragment:du,map_particle_fragment:uu,map_particle_pars_fragment:pu,metalnessmap_fragment:mu,metalnessmap_pars_fragment:gu,morphinstance_vertex:xu,morphcolor_vertex:_u,morphnormal_vertex:vu,morphtarget_pars_vertex:wu,morphtarget_vertex:Mu,normal_fragment_begin:Su,normal_fragment_maps:yu,normal_pars_fragment:bu,normal_pars_vertex:Tu,normal_vertex:Eu,normalmap_pars_fragment:Au,clearcoat_normal_fragment_begin:Ru,clearcoat_normal_fragment_maps:Cu,clearcoat_pars_fragment:Pu,iridescence_pars_fragment:Lu,opaque_fragment:Iu,packing:Du,premultiplied_alpha_fragment:Uu,project_vertex:Nu,dithering_fragment:Fu,dithering_pars_fragment:Ou,roughnessmap_fragment:zu,roughnessmap_pars_fragment:Bu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:Gu,shadowmap_vertex:Hu,shadowmask_pars_fragment:Vu,skinbase_vertex:Wu,skinning_pars_vertex:Xu,skinning_vertex:Yu,skinnormal_vertex:Zu,specularmap_fragment:qu,specularmap_pars_fragment:$u,tonemapping_fragment:Ku,tonemapping_pars_fragment:Ju,transmission_fragment:ju,transmission_pars_fragment:Qu,uv_pars_fragment:t0,uv_pars_vertex:e0,uv_vertex:n0,worldpos_vertex:i0,background_vert:o0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:f0,depth_frag:h0,distanceRGBA_vert:d0,distanceRGBA_frag:u0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:x0,meshbasic_vert:_0,meshbasic_frag:v0,meshlambert_vert:w0,meshlambert_frag:M0,meshmatcap_vert:S0,meshmatcap_frag:y0,meshnormal_vert:b0,meshnormal_frag:T0,meshphong_vert:E0,meshphong_frag:A0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:P0,meshtoon_frag:L0,points_vert:I0,points_frag:D0,shadow_vert:U0,shadow_frag:N0,sprite_vert:F0,sprite_frag:O0},Ct={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Fn={basic:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:sn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:sn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:sn([Ct.points,Ct.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:sn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:sn([Ct.common,Ct.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:sn([Ct.sprite,Ct.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:sn([Ct.common,Ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:sn([Ct.lights,Ct.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Fn.physical={uniforms:sn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const os={r:0,b:0,g:0},mi=new Ln,z0=new Le;function B0(i,t,n,e,o,s,r){const a=new de(0);let l=s===!0?0:1,f,c,d=null,h=0,u=null;function g(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?n:t).get(w)),w}function _(T){let w=!1;const v=g(T);v===null?p(a,l):v&&v.isColor&&(p(v,1),w=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,w){const v=g(w);v&&(v.isCubeTexture||v.mapping===As)?(c===void 0&&(c=new x(new L(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:no(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),mi.copy(w.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(mi)),c.material.toneMapped=ve.getTransfer(v.colorSpace)!==Ee,(d!==v||h!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(f===void 0&&(f=new x(new ee(2,2),new li({name:"BackgroundMaterial",uniforms:no(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=v,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=ve.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),f.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==i.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,u=i.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}function p(T,w){T.getRGB(os,Yc(i)),e.buffers.color.setClear(os.r,os.g,os.b,w,r)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m}}function k0(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),e={},o=h(null);let s=o,r=!1;function a(M,P,B,k,K){let Z=!1;const V=d(k,B,P);s!==V&&(s=V,f(s.object)),Z=u(M,k,B,K),Z&&g(M,k,B,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,v(M,P,B,k),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function f(M){return i.bindVertexArray(M)}function c(M){return i.deleteVertexArray(M)}function d(M,P,B){const k=B.wireframe===!0;let K=e[M.id];K===void 0&&(K={},e[M.id]=K);let Z=K[P.id];Z===void 0&&(Z={},K[P.id]=Z);let V=Z[k];return V===void 0&&(V=h(l()),Z[k]=V),V}function h(M){const P=[],B=[],k=[];for(let K=0;K<n;K++)P[K]=0,B[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:k,object:M,attributes:{},index:null}}function u(M,P,B,k){const K=s.attributes,Z=P.attributes;let V=0;const j=B.getAttributes();for(const X in j)if(j[X].location>=0){const lt=K[X];let ut=Z[X];if(ut===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),lt===void 0||lt.attribute!==ut||ut&&lt.data!==ut.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function g(M,P,B,k){const K={},Z=P.attributes;let V=0;const j=B.getAttributes();for(const X in j)if(j[X].location>=0){let lt=Z[X];lt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const ut={};ut.attribute=lt,lt&&lt.data&&(ut.data=lt.data),K[X]=ut,V++}s.attributes=K,s.attributesNum=V,s.index=k}function _(){const M=s.newAttributes;for(let P=0,B=M.length;P<B;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const B=s.newAttributes,k=s.enabledAttributes,K=s.attributeDivisors;B[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),K[M]!==P&&(i.vertexAttribDivisor(M,P),K[M]=P)}function T(){const M=s.newAttributes,P=s.enabledAttributes;for(let B=0,k=P.length;B<k;B++)P[B]!==M[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function w(M,P,B,k,K,Z,V){V===!0?i.vertexAttribIPointer(M,P,B,K,Z):i.vertexAttribPointer(M,P,B,k,K,Z)}function v(M,P,B,k){_();const K=k.attributes,Z=B.getAttributes(),V=P.defaultAttributeValues;for(const j in Z){const X=Z[j];if(X.location>=0){let rt=K[j];if(rt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const lt=rt.normalized,ut=rt.itemSize,Tt=t.get(rt);if(Tt===void 0)continue;const St=Tt.buffer,G=Tt.type,W=Tt.bytesPerElement,Y=G===i.INT||G===i.UNSIGNED_INT||rt.gpuType===fa;if(rt.isInterleavedBufferAttribute){const st=rt.data,xt=st.stride,Rt=rt.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<X.locationSize;Ut++)p(X.location+Ut,st.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<X.locationSize;Ut++)m(X.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Ut=0;Ut<X.locationSize;Ut++)w(X.location+Ut,ut/X.locationSize,G,lt,xt*W,(Rt+ut/X.locationSize*Ut)*W,Y)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<X.locationSize;st++)p(X.location+st,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<X.locationSize;st++)m(X.location+st);i.bindBuffer(i.ARRAY_BUFFER,St);for(let st=0;st<X.locationSize;st++)w(X.location+st,ut/X.locationSize,G,lt,ut*W,ut/X.locationSize*st*W,Y)}}else if(V!==void 0){const lt=V[j];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(X.location,lt);break;case 3:i.vertexAttrib3fv(X.location,lt);break;case 4:i.vertexAttrib4fv(X.location,lt);break;default:i.vertexAttrib1fv(X.location,lt)}}}}T()}function I(){C();for(const M in e){const P=e[M];for(const B in P){const k=P[B];for(const K in k)c(k[K].object),delete k[K];delete P[B]}delete e[M]}}function R(M){if(e[M.id]===void 0)return;const P=e[M.id];for(const B in P){const k=P[B];for(const K in k)c(k[K].object),delete k[K];delete P[B]}delete e[M.id]}function E(M){for(const P in e){const B=e[P];if(B[M.id]===void 0)continue;const k=B[M.id];for(const K in k)c(k[K].object),delete k[K];delete B[M.id]}}function C(){S(),r=!0,s!==o&&(s=o,f(s.object))}function S(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function G0(i,t,n){let e;function o(f){e=f}function s(f,c){i.drawArrays(e,f,c),n.update(c,e,1)}function r(f,c,d){d!==0&&(i.drawArraysInstanced(e,f,c,d),n.update(c,e,d))}function a(f,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(e,f,0,c,0,d);let u=0;for(let g=0;g<d;g++)u+=c[g];n.update(u,e,1)}function l(f,c,d,h){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<f.length;g++)r(f[g],c[g],h[g]);else{u.multiDrawArraysInstancedWEBGL(e,f,0,c,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_]*h[_];n.update(g,e,1)}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function H0(i,t,n,e){let o;function s(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(E){return!(E!==Rn&&e.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Do&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==$n&&e.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Xn&&!C)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=n.precision!==void 0?n.precision:"highp";const c=l(f);c!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",c,"instead."),f=c);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:I,maxSamples:R}}function V0(i){const t=this;let n=null,e=0,o=!1,s=!1;const r=new xi,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const u=d.length!==0||h||e!==0||o;return o=h,e=d.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!o||g===null||g.length===0||s&&!m)s?c(null):f();else{const T=s?0:e,w=T*4;let v=p.clippingState||null;l.value=v,v=c(g,h,w,u);for(let I=0;I!==w;++I)v[I]=n[I];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function f(){l.value!==n&&(l.value=n,l.needsUpdate=e>0),t.numPlanes=e,t.numIntersection=0}function c(d,h,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=u;w!==_;++w,v+=4)r.copy(d[w]).applyMatrix4(T,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function W0(i){let t=new WeakMap;function n(r,a){return a===Pr?r.mapping=ji:a===Lr&&(r.mapping=Qi),r}function e(r){if(r&&r.isTexture){const a=r.mapping;if(a===Pr||a===Lr)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const f=new ed(l.height);return f.fromEquirectangularTexture(i,r),t.set(r,f),r.addEventListener("dispose",o),n(f.texture,r.mapping)}else return null}}return r}function o(r){const a=r.target;a.removeEventListener("dispose",o);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:e,dispose:s}}class Kc extends Zc{constructor(t=-1,n=1,e=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=e,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,e,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=e-t,r=e+t,a=o+n,l=o-n;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,r=s+f*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xi=4,wl=[.125,.215,.35,.446,.526,.582],wi=20,rr=new Kc,Ml=new de;let ar=null,lr=0,cr=0,fr=!1;const _i=(1+Math.sqrt(5))/2,Hi=1/_i,Sl=[new N(-_i,Hi,0),new N(_i,Hi,0),new N(-Hi,0,_i),new N(Hi,0,_i),new N(0,_i,-Hi),new N(0,_i,Hi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,e=.1,o=100){ar=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,e,o,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ar,lr,cr),this._renderer.xr.enabled=fr,t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ar=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const e=n||this._allocateTargets();return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,e={magFilter:On,minFilter:On,generateMipmaps:!1,type:Do,format:Rn,colorSpace:oo,depthBuffer:!1},o=bl(t,n,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(t,n,e);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(s)),this._blurMaterial=Y0(s,t,n)}return o}_compileMaterial(t){const n=new x(this._lodPlanes[0],t);this._renderer.compile(n,rr)}_sceneToCubeUV(t,n,e,o){const a=new gn(90,1,n,e),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Ml),c.toneMapping=si,c.autoClear=!1;const u=new Qt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new x(new L,u);let _=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(Ml),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(f[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,f[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,f[p]));const w=this._cubeSize;ss(o,T*w,p>2?w:0,w,w),c.setRenderTarget(o),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,t.background=m}_textureToCubeUV(t,n){const e=this._renderer,o=t.mapping===ji||t.mapping===Qi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new x(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ss(n,0,0,3*l,2*l),e.setRenderTarget(n),e.render(r,rr)}_applyPMREM(t){const n=this._renderer,e=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Sl[(o-s-1)%Sl.length];this._blur(t,s-1,s,r,a)}n.autoClear=e}_blur(t,n,e,o,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,e,o,"latitudinal",s),this._halfBlur(r,t,e,e,o,"longitudinal",s)}_halfBlur(t,n,e,o,s,r,a){const l=this._renderer,f=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new x(this._lodPlanes[o],f),h=f.uniforms,u=this._sizeLods[e]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*wi-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):wi;m>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let T=0;for(let E=0;E<wi;++E){const C=E/_,S=Math.exp(-C*C/2);p.push(S),E===0?T+=S:E<m&&(T+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/T;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-e;const v=this._sizeLods[o],I=3*v*(o>w-Xi?o-w+Xi:0),R=4*(this._cubeSize-v);ss(n,I,R,3*v,2*v),l.setRenderTarget(n),l.render(d,rr)}}function X0(i){const t=[],n=[],e=[];let o=i;const s=i-Xi+1+wl.length;for(let r=0;r<s;r++){const a=Math.pow(2,o);n.push(a);let l=1/a;r>i-Xi?l=wl[r-i+Xi-1]:r===0&&(l=0),e.push(l);const f=1/(a-2),c=-f,d=1+f,h=[c,c,d,c,d,d,c,c,d,d,c,d],u=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*u),w=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let R=0;R<u;R++){const E=R%3*2/3-1,C=R>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];T.set(S,_*g*R),w.set(h,m*g*R);const M=[R,R,R,R,R,R];v.set(M,p*g*R)}const I=new en;I.setAttribute("position",new Pn(T,_)),I.setAttribute("uv",new Pn(w,m)),I.setAttribute("faceIndex",new Pn(v,p)),t.push(I),o>Xi&&o--}return{lodPlanes:t,sizeLods:n,sigmas:e}}function bl(i,t,n){const e=new bi(i,t,n);return e.texture.mapping=As,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ss(i,t,n,e,o){i.viewport.set(t,n,e,o),i.scissor.set(t,n,e,o)}function Y0(i,t,n){const e=new Float32Array(wi),o=new N(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Tl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function El(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function _a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z0(i){let t=new WeakMap,n=null;function e(a){if(a&&a.isTexture){const l=a.mapping,f=l===Pr||l===Lr,c=l===ji||l===Qi;if(f||c){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new yl(i)),d=f?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return f&&u&&u.height>0||c&&u&&o(u)?(n===null&&(n=new yl(i)),d=f?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function o(a){let l=0;const f=6;for(let c=0;c<f;c++)a[c]!==void 0&&l++;return l===f}function s(a){const l=a.target;l.removeEventListener("dispose",s);const f=t.get(l);f!==void 0&&(t.delete(l),f.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:e,dispose:r}}function q0(i){const t={};function n(e){if(t[e]!==void 0)return t[e];let o;switch(e){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(e)}return t[e]=o,o}return{has:function(e){return n(e)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(e){const o=n(e);return o===null&&_o("THREE.WebGLRenderer: "+e+" extension not supported."),o}}}function $0(i,t,n,e){const o={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",r),delete o[h.id];const u=s.get(h);u&&(t.remove(u),s.delete(h)),e.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return o[h.id]===!0||(h.addEventListener("dispose",r),o[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const _=u[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function f(d){const h=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const T=u.array;_=u.version;for(let w=0,v=T.length;w<v;w+=3){const I=T[w+0],R=T[w+1],E=T[w+2];h.push(I,R,R,E,E,I)}}else if(g!==void 0){const T=g.array;_=g.version;for(let w=0,v=T.length/3-1;w<v;w+=3){const I=w+0,R=w+1,E=w+2;h.push(I,R,R,E,E,I)}}else return;const m=new(zc(h)?Xc:Wc)(h,1);m.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function c(d){const h=s.get(d);if(h){const u=d.index;u!==null&&h.version<u.version&&f(d)}else f(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function K0(i,t,n){let e;function o(h){e=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function l(h,u){i.drawElements(e,u,s,h*r),n.update(u,e,1)}function f(h,u,g){g!==0&&(i.drawElementsInstanced(e,u,s,h*r,g),n.update(u,e,g))}function c(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(e,u,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];n.update(m,e,1)}function d(h,u,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)f(h[p]/r,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(e,u,0,s,h,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=u[T]*_[T];n.update(p,e,1)}}this.setMode=o,this.setIndex=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function J0(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function e(s,r,a){switch(n.calls++,r){case i.TRIANGLES:n.triangles+=a*(s/3);break;case i.LINES:n.lines+=a*(s/2);break;case i.LINE_STRIP:n.lines+=a*(s-1);break;case i.LINE_LOOP:n.lines+=a*s;break;case i.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:e}}function j0(i,t,n){const e=new WeakMap,o=new Ae;function s(r,a,l){const f=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let h=e.get(a);if(h===void 0||h.count!==d){let M=function(){C.dispose(),e.delete(a),a.removeEventListener("dispose",M)};var u=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let I=a.attributes.position.count*v,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const E=new Float32Array(I*R*4*d),C=new kc(E,I,R,d);C.type=Xn,C.needsUpdate=!0;const S=v*4;for(let P=0;P<d;P++){const B=p[P],k=T[P],K=w[P],Z=I*R*4*P;for(let V=0;V<B.count;V++){const j=V*S;g===!0&&(o.fromBufferAttribute(B,V),E[Z+j+0]=o.x,E[Z+j+1]=o.y,E[Z+j+2]=o.z,E[Z+j+3]=0),_===!0&&(o.fromBufferAttribute(k,V),E[Z+j+4]=o.x,E[Z+j+5]=o.y,E[Z+j+6]=o.z,E[Z+j+7]=0),m===!0&&(o.fromBufferAttribute(K,V),E[Z+j+8]=o.x,E[Z+j+9]=o.y,E[Z+j+10]=o.z,E[Z+j+11]=K.itemSize===4?o.w:1)}}h={count:d,texture:C,size:new zt(I,R)},e.set(a,h),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,n);else{let g=0;for(let m=0;m<f.length;m++)g+=f[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",f)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Q0(i,t,n,e){let o=new WeakMap;function s(l){const f=e.render.frame,c=l.geometry,d=t.get(l,c);if(o.get(d)!==f&&(t.update(d),o.set(d,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==f&&(n.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,i.ARRAY_BUFFER),o.set(l,f))),l.isSkinnedMesh){const h=l.skeleton;o.get(h)!==f&&(h.update(),o.set(h,f))}return d}function r(){o=new WeakMap}function a(l){const f=l.target;f.removeEventListener("dispose",a),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:s,dispose:r}}class Jc extends rn{constructor(t,n,e,o,s,r,a,l,f,c=qi){if(c!==qi&&c!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");e===void 0&&c===qi&&(e=yi),e===void 0&&c===eo&&(e=to),super(null,o,s,r,a,l,c,e,f),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jc=new rn,Al=new Jc(1,1),Qc=new kc,tf=new Bh,ef=new qc,Rl=[],Cl=[],Pl=new Float32Array(16),Ll=new Float32Array(9),Il=new Float32Array(4);function lo(i,t,n){const e=i[0];if(e<=0||e>0)return i;const o=t*n;let s=Rl[o];if(s===void 0&&(s=new Float32Array(o),Rl[o]=s),t!==0){e.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=n,i[r].toArray(s,a)}return s}function ke(i,t){if(i.length!==t.length)return!1;for(let n=0,e=i.length;n<e;n++)if(i[n]!==t[n])return!1;return!0}function Ge(i,t){for(let n=0,e=t.length;n<e;n++)i[n]=t[n]}function Ps(i,t){let n=Cl[t];n===void 0&&(n=new Int32Array(t),Cl[t]=n);for(let e=0;e!==t;++e)n[e]=i.allocateTextureUnit();return n}function tp(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function ep(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;i.uniform2fv(this.addr,t),Ge(n,t)}}function np(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ke(n,t))return;i.uniform3fv(this.addr,t),Ge(n,t)}}function ip(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;i.uniform4fv(this.addr,t),Ge(n,t)}}function op(i,t){const n=this.cache,e=t.elements;if(e===void 0){if(ke(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(n,t)}else{if(ke(n,e))return;Il.set(e),i.uniformMatrix2fv(this.addr,!1,Il),Ge(n,e)}}function sp(i,t){const n=this.cache,e=t.elements;if(e===void 0){if(ke(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(n,t)}else{if(ke(n,e))return;Ll.set(e),i.uniformMatrix3fv(this.addr,!1,Ll),Ge(n,e)}}function rp(i,t){const n=this.cache,e=t.elements;if(e===void 0){if(ke(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(n,t)}else{if(ke(n,e))return;Pl.set(e),i.uniformMatrix4fv(this.addr,!1,Pl),Ge(n,e)}}function ap(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function lp(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;i.uniform2iv(this.addr,t),Ge(n,t)}}function cp(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;i.uniform3iv(this.addr,t),Ge(n,t)}}function fp(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;i.uniform4iv(this.addr,t),Ge(n,t)}}function hp(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function dp(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;i.uniform2uiv(this.addr,t),Ge(n,t)}}function up(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;i.uniform3uiv(this.addr,t),Ge(n,t)}}function pp(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;i.uniform4uiv(this.addr,t),Ge(n,t)}}function mp(i,t,n){const e=this.cache,o=n.allocateTextureUnit();e[0]!==o&&(i.uniform1i(this.addr,o),e[0]=o);let s;this.type===i.SAMPLER_2D_SHADOW?(Al.compareFunction=Oc,s=Al):s=jc,n.setTexture2D(t||s,o)}function gp(i,t,n){const e=this.cache,o=n.allocateTextureUnit();e[0]!==o&&(i.uniform1i(this.addr,o),e[0]=o),n.setTexture3D(t||tf,o)}function xp(i,t,n){const e=this.cache,o=n.allocateTextureUnit();e[0]!==o&&(i.uniform1i(this.addr,o),e[0]=o),n.setTextureCube(t||ef,o)}function _p(i,t,n){const e=this.cache,o=n.allocateTextureUnit();e[0]!==o&&(i.uniform1i(this.addr,o),e[0]=o),n.setTexture2DArray(t||Qc,o)}function vp(i){switch(i){case 5126:return tp;case 35664:return ep;case 35665:return np;case 35666:return ip;case 35674:return op;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return ap;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return fp;case 5125:return hp;case 36294:return dp;case 36295:return up;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return _p}}function wp(i,t){i.uniform1fv(this.addr,t)}function Mp(i,t){const n=lo(t,this.size,2);i.uniform2fv(this.addr,n)}function Sp(i,t){const n=lo(t,this.size,3);i.uniform3fv(this.addr,n)}function yp(i,t){const n=lo(t,this.size,4);i.uniform4fv(this.addr,n)}function bp(i,t){const n=lo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function Tp(i,t){const n=lo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function Ep(i,t){const n=lo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function Ap(i,t){i.uniform1iv(this.addr,t)}function Rp(i,t){i.uniform2iv(this.addr,t)}function Cp(i,t){i.uniform3iv(this.addr,t)}function Pp(i,t){i.uniform4iv(this.addr,t)}function Lp(i,t){i.uniform1uiv(this.addr,t)}function Ip(i,t){i.uniform2uiv(this.addr,t)}function Dp(i,t){i.uniform3uiv(this.addr,t)}function Up(i,t){i.uniform4uiv(this.addr,t)}function Np(i,t,n){const e=this.cache,o=t.length,s=Ps(n,o);ke(e,s)||(i.uniform1iv(this.addr,s),Ge(e,s));for(let r=0;r!==o;++r)n.setTexture2D(t[r]||jc,s[r])}function Fp(i,t,n){const e=this.cache,o=t.length,s=Ps(n,o);ke(e,s)||(i.uniform1iv(this.addr,s),Ge(e,s));for(let r=0;r!==o;++r)n.setTexture3D(t[r]||tf,s[r])}function Op(i,t,n){const e=this.cache,o=t.length,s=Ps(n,o);ke(e,s)||(i.uniform1iv(this.addr,s),Ge(e,s));for(let r=0;r!==o;++r)n.setTextureCube(t[r]||ef,s[r])}function zp(i,t,n){const e=this.cache,o=t.length,s=Ps(n,o);ke(e,s)||(i.uniform1iv(this.addr,s),Ge(e,s));for(let r=0;r!==o;++r)n.setTexture2DArray(t[r]||Qc,s[r])}function Bp(i){switch(i){case 5126:return wp;case 35664:return Mp;case 35665:return Sp;case 35666:return yp;case 35674:return bp;case 35675:return Tp;case 35676:return Ep;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Ip;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return zp}}class kp{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.setValue=vp(n.type)}}class Gp{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Bp(n.type)}}class Hp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,e){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const a=o[s];a.setValue(t,n[a.id],e)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function Dl(i,t){i.seq.push(t),i.map[t.id]=t}function Vp(i,t,n){const e=i.name,o=e.length;for(hr.lastIndex=0;;){const s=hr.exec(e),r=hr.lastIndex;let a=s[1];const l=s[2]==="]",f=s[3];if(l&&(a=a|0),f===void 0||f==="["&&r+2===o){Dl(n,f===void 0?new kp(a,i,t):new Gp(a,i,t));break}else{let d=n.map[a];d===void 0&&(d=new Hp(a),Dl(n,d)),n=d}}}class Ss{constructor(t,n){this.seq=[],this.map={};const e=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<e;++o){const s=t.getActiveUniform(n,o),r=t.getUniformLocation(n,s.name);Vp(s,r,this)}}setValue(t,n,e,o){const s=this.map[n];s!==void 0&&s.setValue(t,e,o)}setOptional(t,n,e){const o=n[e];o!==void 0&&this.setValue(t,e,o)}static upload(t,n,e,o){for(let s=0,r=n.length;s!==r;++s){const a=n[s],l=e[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,o)}}static seqWithValue(t,n){const e=[];for(let o=0,s=t.length;o!==s;++o){const r=t[o];r.id in n&&e.push(r)}return e}}function Ul(i,t,n){const e=i.createShader(t);return i.shaderSource(e,n),i.compileShader(e),e}const Wp=37297;let Xp=0;function Yp(i,t){const n=i.split(`
`),e=[],o=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=o;r<s;r++){const a=r+1;e.push(`${a===t?">":" "} ${a}: ${n[r]}`)}return e.join(`
`)}const Nl=new ae;function Zp(i){ve._getMatrix(Nl,ve.workingColorSpace,i);const t=`mat3( ${Nl.elements.map(n=>n.toFixed(4))} )`;switch(ve.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fl(i,t,n){const e=i.getShaderParameter(t,i.COMPILE_STATUS),o=i.getShaderInfoLog(t).trim();if(e&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+Yp(i.getShaderSource(t),r)}else return o}function qp(i,t){const n=Zp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function $p(i,t){let n;switch(t){case jf:n="Linear";break;case Qf:n="Reinhard";break;case th:n="Cineon";break;case bc:n="ACESFilmic";break;case nh:n="AgX";break;case ih:n="Neutral";break;case eh:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const rs=new N;function Kp(){ve.getLuminanceCoefficients(rs);const i=rs.x.toFixed(4),t=rs.y.toFixed(4),n=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function jp(i){const t=[];for(const n in i){const e=i[n];e!==!1&&t.push("#define "+n+" "+e)}return t.join(`
`)}function Qp(i,t){const n={},e=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<e;o++){const s=i.getActiveAttrib(t,o),r=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),n[r]={type:s.type,location:i.getAttribLocation(t,r),locationSize:a}}return n}function vo(i){return i!==""}function Ol(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(tm,nm)}const em=new Map;function nm(i,t){let n=ce[t];if(n===void 0){const e=em.get(t);if(e!==void 0)n=ce[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return sa(n)}const im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(im,om)}function om(i,t,n,e){let o="";for(let s=parseInt(t);s<parseInt(n);s++)o+=e.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function kl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function rm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case As:t="ENVMAP_TYPE_CUBE_UV";break}return t}function am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Kf:t="ENVMAP_BLENDING_MIX";break;case Jf:t="ENVMAP_BLENDING_ADD";break}return t}function cm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,e=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:e,maxMip:n}}function fm(i,t,n,e){const o=i.getContext(),s=n.defines;let r=n.vertexShader,a=n.fragmentShader;const l=sm(n),f=rm(n),c=am(n),d=lm(n),h=cm(n),u=Jp(n),g=jp(s),_=o.createProgram();let m,p,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(m=[kl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[kl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==si?"#define TONE_MAPPING":"",n.toneMapping!==si?ce.tonemapping_pars_fragment:"",n.toneMapping!==si?$p("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,qp("linearToOutputTexel",n.outputColorSpace),Kp(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),r=sa(r),r=Ol(r,n),r=zl(r,n),a=sa(a),a=Ol(a,n),a=zl(a,n),r=Bl(r),a=Bl(a),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+r,v=T+p+a,I=Ul(o,o.VERTEX_SHADER,w),R=Ul(o,o.FRAGMENT_SHADER,v);o.attachShader(_,I),o.attachShader(_,R),n.index0AttributeName!==void 0?o.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){const B=o.getProgramInfoLog(_).trim(),k=o.getShaderInfoLog(I).trim(),K=o.getShaderInfoLog(R).trim();let Z=!0,V=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,_,I,R);else{const j=Fl(o,I,"vertex"),X=Fl(o,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+j+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||K==="")&&(V=!1);V&&(P.diagnostics={runnable:Z,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:K,prefix:p}})}o.deleteShader(I),o.deleteShader(R),C=new Ss(o,_),S=Qp(o,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(_,Wp)),M},this.destroy=function(){e.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}let hm=0;class dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,e=t.fragmentShader,o=this._getShaderStage(n),s=this._getShaderStage(e),r=this._getShaderCacheForMaterial(t);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const e of n)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let e=n.get(t);return e===void 0&&(e=new Set,n.set(t,e)),e}_getShaderStage(t){const n=this.shaderCache;let e=n.get(t);return e===void 0&&(e=new um(t),n.set(t,e)),e}}class um{constructor(t){this.id=hm++,this.code=t,this.usedTimes=0}}function pm(i,t,n,e,o,s,r){const a=new Hc,l=new dm,f=new Set,c=[],d=o.logarithmicDepthBuffer,h=o.vertexTextures;let u=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return f.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,B,k){const K=B.fog,Z=k.geometry,V=S.isMeshStandardMaterial?B.environment:null,j=(S.isMeshStandardMaterial?n:t).get(S.envMap||V),X=j&&j.mapping===As?j.image.height:null,rt=g[S.type];S.precision!==null&&(u=o.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ut=lt!==void 0?lt.length:0;let Tt=0;Z.morphAttributes.position!==void 0&&(Tt=1),Z.morphAttributes.normal!==void 0&&(Tt=2),Z.morphAttributes.color!==void 0&&(Tt=3);let St,G,W,Y;if(rt){const te=Fn[rt];St=te.vertexShader,G=te.fragmentShader}else St=S.vertexShader,G=S.fragmentShader,l.update(S),W=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const st=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Rt=k.isInstancedMesh===!0,Ut=k.isBatchedMesh===!0,Wt=!!S.map,Lt=!!S.matcap,jt=!!j,U=!!S.aoMap,Vt=!!S.lightMap,Ft=!!S.bumpMap,It=!!S.normalMap,Et=!!S.displacementMap,qt=!!S.emissiveMap,At=!!S.metalnessMap,A=!!S.roughnessMap,y=S.anisotropy>0,H=S.clearcoat>0,Q=S.dispersion>0,ot=S.iridescence>0,tt=S.sheen>0,wt=S.transmission>0,at=y&&!!S.anisotropyMap,_t=H&&!!S.clearcoatMap,Kt=H&&!!S.clearcoatNormalMap,ct=H&&!!S.clearcoatRoughnessMap,Mt=ot&&!!S.iridescenceMap,Ot=ot&&!!S.iridescenceThicknessMap,Gt=tt&&!!S.sheenColorMap,Pt=tt&&!!S.sheenRoughnessMap,ie=!!S.specularMap,$t=!!S.specularColorMap,ue=!!S.specularIntensityMap,F=wt&&!!S.transmissionMap,vt=wt&&!!S.thicknessMap,J=!!S.gradientMap,et=!!S.alphaMap,mt=S.alphaTest>0,ft=!!S.alphaHash,Xt=!!S.extensions;let me=si;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(me=i.toneMapping);const be={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:St,fragmentShader:G,defines:S.defines,customVertexShaderID:W,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ut,batchingColor:Ut&&k._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&k.instanceColor!==null,instancingMorph:Rt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:oo,alphaToCoverage:!!S.alphaToCoverage,map:Wt,matcap:Lt,envMap:jt,envMapMode:jt&&j.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:Vt,bumpMap:Ft,normalMap:It,displacementMap:h&&Et,emissiveMap:qt,normalMapObjectSpace:It&&S.normalMapType===ah,normalMapTangentSpace:It&&S.normalMapType===Fc,metalnessMap:At,roughnessMap:A,anisotropy:y,anisotropyMap:at,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Kt,clearcoatRoughnessMap:ct,dispersion:Q,iridescence:ot,iridescenceMap:Mt,iridescenceThicknessMap:Ot,sheen:tt,sheenColorMap:Gt,sheenRoughnessMap:Pt,specularMap:ie,specularColorMap:$t,specularIntensityMap:ue,transmission:wt,transmissionMap:F,thicknessMap:vt,gradientMap:J,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:mt,alphaHash:ft,combine:S.combine,mapUv:Wt&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Vt&&_(S.lightMap.channel),bumpMapUv:Ft&&_(S.bumpMap.channel),normalMapUv:It&&_(S.normalMap.channel),displacementMapUv:Et&&_(S.displacementMap.channel),emissiveMapUv:qt&&_(S.emissiveMap.channel),metalnessMapUv:At&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:at&&_(S.anisotropyMap.channel),clearcoatMapUv:_t&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:ie&&_(S.specularMap.channel),specularColorMapUv:$t&&_(S.specularColorMap.channel),specularIntensityMapUv:ue&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:vt&&_(S.thicknessMap.channel),alphaMapUv:et&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(It||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(Wt||et),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:xt,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Wt&&S.map.isVideoTexture===!0&&ve.getTransfer(S.map.colorSpace)===Ee,decodeVideoTextureEmissive:qt&&S.emissiveMap.isVideoTexture===!0&&ve.getTransfer(S.emissiveMap.colorSpace)===Ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&S.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=f.has(1),be.vertexUv2s=f.has(2),be.vertexUv3s=f.has(3),f.clear(),be}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(T(M,S),w(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let P;if(M){const B=Fn[M];P=Jh.clone(B.uniforms)}else P=S.uniforms;return P}function I(S,M){let P;for(let B=0,k=c.length;B<k;B++){const K=c[B];if(K.cacheKey===M){P=K,++P.usedTimes;break}}return P===void 0&&(P=new fm(i,M,S,s),c.push(P)),P}function R(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function E(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:C}}function mm(){let i=new WeakMap;function t(r){return i.has(r)}function n(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function o(r,a,l){i.get(r)[a]=l}function s(){i=new WeakMap}return{has:t,get:n,remove:e,update:o,dispose:s}}function gm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hl(){const i=[];let t=0;const n=[],e=[],o=[];function s(){t=0,n.length=0,e.length=0,o.length=0}function r(d,h,u,g,_,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,h,u,g,_,m){const p=r(d,h,u,g,_,m);u.transmission>0?e.push(p):u.transparent===!0?o.push(p):n.push(p)}function l(d,h,u,g,_,m){const p=r(d,h,u,g,_,m);u.transmission>0?e.unshift(p):u.transparent===!0?o.unshift(p):n.unshift(p)}function f(d,h){n.length>1&&n.sort(d||gm),e.length>1&&e.sort(h||Gl),o.length>1&&o.sort(h||Gl)}function c(){for(let d=t,h=i.length;d<h;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:n,transmissive:e,transparent:o,init:s,push:a,unshift:l,finish:c,sort:f}}function xm(){let i=new WeakMap;function t(e,o){const s=i.get(e);let r;return s===void 0?(r=new Hl,i.set(e,[r])):o>=s.length?(r=new Hl,s.push(r)):r=s[o],r}function n(){i=new WeakMap}return{get:t,dispose:n}}function _m(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new de};break;case"SpotLight":n={position:new N,direction:new N,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new de,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new de,groundColor:new de};break;case"RectAreaLight":n={color:new de,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=n,n}}}function vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let wm=0;function Mm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sm(i){const t=new _m,n=vm(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)e.probe.push(new N);const o=new N,s=new Le,r=new Le;function a(f){let c=0,d=0,h=0;for(let S=0;S<9;S++)e.probe[S].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,T=0,w=0,v=0,I=0,R=0,E=0;f.sort(Mm);for(let S=0,M=f.length;S<M;S++){const P=f[S],B=P.color,k=P.intensity,K=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=B.r*k,d+=B.g*k,h+=B.b*k;else if(P.isLightProbe){for(let V=0;V<9;V++)e.probe[V].addScaledVector(P.sh.coefficients[V],k);E++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,X=n.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,e.directionalShadow[u]=X,e.directionalShadowMap[u]=Z,e.directionalShadowMatrix[u]=P.shadow.matrix,T++}e.directional[u]=V,u++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(k),V.distance=K,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,e.spot[_]=V;const j=P.shadow;if(P.map&&(e.spotLightMap[I]=P.map,I++,j.updateMatrices(P),P.castShadow&&R++),e.spotLightMatrix[_]=j.matrix,P.castShadow){const X=n.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,e.spotShadow[_]=X,e.spotShadowMap[_]=Z,v++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(B).multiplyScalar(k),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),e.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const j=P.shadow,X=n.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,e.pointShadow[g]=X,e.pointShadowMap[g]=Z,e.pointShadowMatrix[g]=P.shadow.matrix,w++}e.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(k),V.groundColor.copy(P.groundColor).multiplyScalar(k),e.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=Ct.LTC_FLOAT_1,e.rectAreaLTC2=Ct.LTC_FLOAT_2):(e.rectAreaLTC1=Ct.LTC_HALF_1,e.rectAreaLTC2=Ct.LTC_HALF_2)),e.ambient[0]=c,e.ambient[1]=d,e.ambient[2]=h;const C=e.hash;(C.directionalLength!==u||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==T||C.numPointShadows!==w||C.numSpotShadows!==v||C.numSpotMaps!==I||C.numLightProbes!==E)&&(e.directional.length=u,e.spot.length=_,e.rectArea.length=m,e.point.length=g,e.hemi.length=p,e.directionalShadow.length=T,e.directionalShadowMap.length=T,e.pointShadow.length=w,e.pointShadowMap.length=w,e.spotShadow.length=v,e.spotShadowMap.length=v,e.directionalShadowMatrix.length=T,e.pointShadowMatrix.length=w,e.spotLightMatrix.length=v+I-R,e.spotLightMap.length=I,e.numSpotLightShadowsWithMaps=R,e.numLightProbes=E,C.directionalLength=u,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=T,C.numPointShadows=w,C.numSpotShadows=v,C.numSpotMaps=I,C.numLightProbes=E,e.version=wm++)}function l(f,c){let d=0,h=0,u=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,T=f.length;p<T;p++){const w=f[p];if(w.isDirectionalLight){const v=e.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(o),v.direction.transformDirection(m),d++}else if(w.isSpotLight){const v=e.spot[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(o),v.direction.transformDirection(m),u++}else if(w.isRectAreaLight){const v=e.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),r.identity(),s.copy(w.matrixWorld),s.premultiply(m),r.extractRotation(s),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const v=e.point[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const v=e.hemi[_];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:e}}function Vl(i){const t=new Sm(i),n=[],e=[];function o(c){f.camera=c,n.length=0,e.length=0}function s(c){n.push(c)}function r(c){e.push(c)}function a(){t.setup(n)}function l(c){t.setupView(n,c)}const f={lightsArray:n,shadowsArray:e,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function ym(i){let t=new WeakMap;function n(o,s=0){const r=t.get(o);let a;return r===void 0?(a=new Vl(i),t.set(o,[a])):s>=r.length?(a=new Vl(i),r.push(a)):a=r[s],a}function e(){t=new WeakMap}return{get:n,dispose:e}}class bm extends ao{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends ao{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rm(i,t,n){let e=new xa;const o=new zt,s=new zt,r=new Ae,a=new bm({depthPacking:rh}),l=new Tm,f={},c=n.maxTextureSize,d={[ai]:hn,[hn]:ai,[tn]:tn},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Em,fragmentShader:Am}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new x(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let p=this.type;this.render=function(R,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(oi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==Wn&&this.type===Wn,K=p===Wn&&this.type!==Wn;for(let Z=0,V=R.length;Z<V;Z++){const j=R[Z],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const rt=X.getFrameExtents();if(o.multiply(rt),s.copy(X.mapSize),(o.x>c||o.y>c)&&(o.x>c&&(s.x=Math.floor(c/rt.x),o.x=s.x*rt.x,X.mapSize.x=s.x),o.y>c&&(s.y=Math.floor(c/rt.y),o.y=s.y*rt.y,X.mapSize.y=s.y)),X.map===null||k===!0||K===!0){const ut=this.type!==Wn?{minFilter:Cn,magFilter:Cn}:{};X.map!==null&&X.map.dispose(),X.map=new bi(o.x,o.y,ut),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const lt=X.getViewportCount();for(let ut=0;ut<lt;ut++){const Tt=X.getViewport(ut);r.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),B.viewport(r),X.updateMatrices(j,ut),e=X.getFrustum(),v(E,C,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Wn&&T(X,C),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function T(R,E){const C=t.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new bi(o.x,o.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(E,null,C,h,_,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(E,null,C,u,_,null)}function w(R,E,C,S){let M=null;const P=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=M.uuid,k=E.uuid;let K=f[B];K===void 0&&(K={},f[B]=K);let Z=K[k];Z===void 0&&(Z=M.clone(),K[k]=Z,E.addEventListener("dispose",I)),M=Z}if(M.visible=E.visible,M.wireframe=E.wireframe,S===Wn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=C}return M}function v(R,E,C,S,M){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Wn)&&(!R.frustumCulled||e.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const k=t.update(R),K=R.material;if(Array.isArray(K)){const Z=k.groups;for(let V=0,j=Z.length;V<j;V++){const X=Z[V],rt=K[X.materialIndex];if(rt&&rt.visible){const lt=w(R,rt,S,M);R.onBeforeShadow(i,R,E,C,k,lt,X),i.renderBufferDirect(C,null,k,lt,R,X),R.onAfterShadow(i,R,E,C,k,lt,X)}}}else if(K.visible){const Z=w(R,K,S,M);R.onBeforeShadow(i,R,E,C,k,Z,null),i.renderBufferDirect(C,null,k,Z,R,null),R.onAfterShadow(i,R,E,C,k,Z,null)}}const B=R.children;for(let k=0,K=B.length;k<K;k++)v(B[k],E,C,S,M)}function I(R){R.target.removeEventListener("dispose",I);for(const C in f){const S=f[C],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Cm={[yr]:br,[Tr]:Rr,[Er]:Cr,[Ji]:Ar,[br]:yr,[Rr]:Tr,[Cr]:Er,[Ar]:Ji};function Pm(i,t){function n(){let F=!1;const vt=new Ae;let J=null;const et=new Ae(0,0,0,0);return{setMask:function(mt){J!==mt&&!F&&(i.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){F=mt},setClear:function(mt,ft,Xt,me,be){be===!0&&(mt*=me,ft*=me,Xt*=me),vt.set(mt,ft,Xt,me),et.equals(vt)===!1&&(i.clearColor(mt,ft,Xt,me),et.copy(vt))},reset:function(){F=!1,J=null,et.set(-1,0,0,0)}}}function e(){let F=!1,vt=!1,J=null,et=null,mt=null;return{setReversed:function(ft){if(vt!==ft){const Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const me=mt;mt=null,this.setClear(me)}vt=ft},getReversed:function(){return vt},setTest:function(ft){ft?st(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(ft){J!==ft&&!F&&(i.depthMask(ft),J=ft)},setFunc:function(ft){if(vt&&(ft=Cm[ft]),et!==ft){switch(ft){case yr:i.depthFunc(i.NEVER);break;case br:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Er:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case Rr:i.depthFunc(i.GREATER);break;case Cr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=ft}},setLocked:function(ft){F=ft},setClear:function(ft){mt!==ft&&(vt&&(ft=1-ft),i.clearDepth(ft),mt=ft)},reset:function(){F=!1,J=null,et=null,mt=null,vt=!1}}}function o(){let F=!1,vt=null,J=null,et=null,mt=null,ft=null,Xt=null,me=null,be=null;return{setTest:function(te){F||(te?st(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(te){vt!==te&&!F&&(i.stencilMask(te),vt=te)},setFunc:function(te,Te,ge){(J!==te||et!==Te||mt!==ge)&&(i.stencilFunc(te,Te,ge),J=te,et=Te,mt=ge)},setOp:function(te,Te,ge){(ft!==te||Xt!==Te||me!==ge)&&(i.stencilOp(te,Te,ge),ft=te,Xt=Te,me=ge)},setLocked:function(te){F=te},setClear:function(te){be!==te&&(i.clearStencil(te),be=te)},reset:function(){F=!1,vt=null,J=null,et=null,mt=null,ft=null,Xt=null,me=null,be=null}}}const s=new n,r=new e,a=new o,l=new WeakMap,f=new WeakMap;let c={},d={},h=new WeakMap,u=[],g=null,_=!1,m=null,p=null,T=null,w=null,v=null,I=null,R=null,E=new de(0,0,0),C=0,S=!1,M=null,P=null,B=null,k=null,K=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=j>=2);let rt=null,lt={};const ut=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),St=new Ae().fromArray(ut),G=new Ae().fromArray(Tt);function W(F,vt,J,et){const mt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(F,ft),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<J;Xt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(vt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ft}const Y={};Y[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),st(i.DEPTH_TEST),r.setFunc(Ji),Ft(!1),It(Za),st(i.CULL_FACE),U(oi);function st(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function xt(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function Rt(F,vt){return d[F]!==vt?(i.bindFramebuffer(F,vt),d[F]=vt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=vt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ut(F,vt){let J=u,et=!1;if(F){J=h.get(vt),J===void 0&&(J=[],h.set(vt,J));const mt=F.textures;if(J.length!==mt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Xt=mt.length;ft<Xt;ft++)J[ft]=i.COLOR_ATTACHMENT0+ft;J.length=mt.length,et=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,et=!0);et&&i.drawBuffers(J)}function Wt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const Lt={[vi]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};Lt[Nf]=i.MIN,Lt[Ff]=i.MAX;const jt={[Of]:i.ZERO,[zf]:i.ONE,[Bf]:i.SRC_COLOR,[Mr]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[Gf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[Wf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Yf]:i.CONSTANT_COLOR,[Zf]:i.ONE_MINUS_CONSTANT_COLOR,[qf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function U(F,vt,J,et,mt,ft,Xt,me,be,te){if(F===oi){_===!0&&(xt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),F!==If){if(F!==m||te!==S){if((p!==vi||v!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,v=vi),te)switch(F){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,w=null,I=null,R=null,E.set(0,0,0),C=0,m=F,S=te}return}mt=mt||vt,ft=ft||J,Xt=Xt||et,(vt!==p||mt!==v)&&(i.blendEquationSeparate(Lt[vt],Lt[mt]),p=vt,v=mt),(J!==T||et!==w||ft!==I||Xt!==R)&&(i.blendFuncSeparate(jt[J],jt[et],jt[ft],jt[Xt]),T=J,w=et,I=ft,R=Xt),(me.equals(E)===!1||be!==C)&&(i.blendColor(me.r,me.g,me.b,be),E.copy(me),C=be),m=F,S=!1}function Vt(F,vt){F.side===tn?xt(i.CULL_FACE):st(i.CULL_FACE);let J=F.side===hn;vt&&(J=!J),Ft(J),F.blending===Zi&&F.transparent===!1?U(oi):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const et=F.stencilWrite;a.setTest(et),et&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),qt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function It(F){F!==Pf?(st(i.CULL_FACE),F!==P&&(F===Za?i.cullFace(i.BACK):F===Lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),P=F}function Et(F){F!==B&&(V&&i.lineWidth(F),B=F)}function qt(F,vt,J){F?(st(i.POLYGON_OFFSET_FILL),(k!==vt||K!==J)&&(i.polygonOffset(vt,J),k=vt,K=J)):xt(i.POLYGON_OFFSET_FILL)}function At(F){F?st(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function A(F){F===void 0&&(F=i.TEXTURE0+Z-1),rt!==F&&(i.activeTexture(F),rt=F)}function y(F,vt,J){J===void 0&&(rt===null?J=i.TEXTURE0+Z-1:J=rt);let et=lt[J];et===void 0&&(et={type:void 0,texture:void 0},lt[J]=et),(et.type!==F||et.texture!==vt)&&(rt!==J&&(i.activeTexture(J),rt=J),i.bindTexture(F,vt||Y[F]),et.type=F,et.texture=vt)}function H(){const F=lt[rt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(F){St.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),St.copy(F))}function Pt(F){G.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function ie(F,vt){let J=f.get(vt);J===void 0&&(J=new WeakMap,f.set(vt,J));let et=J.get(F);et===void 0&&(et=i.getUniformBlockIndex(vt,F.name),J.set(F,et))}function $t(F,vt){const et=f.get(vt).get(F);l.get(vt)!==et&&(i.uniformBlockBinding(vt,et,F.__bindingPointIndex),l.set(vt,et))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},rt=null,lt={},d={},h=new WeakMap,u=[],g=null,_=!1,m=null,p=null,T=null,w=null,v=null,I=null,R=null,E=new de(0,0,0),C=0,S=!1,M=null,P=null,B=null,k=null,K=null,St.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:st,disable:xt,bindFramebuffer:Rt,drawBuffers:Ut,useProgram:Wt,setBlending:U,setMaterial:Vt,setFlipSided:Ft,setCullFace:It,setLineWidth:Et,setPolygonOffset:qt,setScissorTest:At,activeTexture:A,bindTexture:y,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ot,texImage2D:Mt,texImage3D:Ot,updateUBOMapping:ie,uniformBlockBinding:$t,texStorage2D:Kt,texStorage3D:ct,texSubImage2D:tt,texSubImage3D:wt,compressedTexSubImage2D:at,compressedTexSubImage3D:_t,scissor:Gt,viewport:Pt,reset:ue}}function Wl(i,t,n,e){const o=Lm(e);switch(n){case Cc:return i*t;case Lc:return i*t;case Ic:return i*t*2;case Dc:return i*t/o.components*o.byteLength;case ua:return i*t/o.components*o.byteLength;case Uc:return i*t*2/o.components*o.byteLength;case pa:return i*t*2/o.components*o.byteLength;case Pc:return i*t*3/o.components*o.byteLength;case Rn:return i*t*4/o.components*o.byteLength;case ma:return i*t*4/o.components*o.byteLength;case xs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vs:case ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ur:case Fr:return Math.max(i,16)*Math.max(t,8)/4;case Dr:case Nr:return Math.max(i,8)*Math.max(t,8)/2;case Or:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $r:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ms:case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nc:case na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Lm(i){switch(i){case $n:case Ec:return{byteLength:1,components:1};case Ao:case Ac:case Do:return{byteLength:2,components:1};case ha:case da:return{byteLength:2,components:4};case yi:case fa:case Xn:return{byteLength:4,components:1};case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Im(i,t,n,e,o,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new zt,c=new WeakMap;let d;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return u?new OffscreenCanvas(A,y):bs("canvas")}function _(A,y,H){let Q=1;const ot=At(A);if((ot.width>H||ot.height>H)&&(Q=H/Math.max(ot.width,ot.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const tt=Math.floor(Q*ot.width),wt=Math.floor(Q*ot.height);d===void 0&&(d=g(tt,wt));const at=y?g(tt,wt):d;return at.width=tt,at.height=wt,at.getContext("2d").drawImage(A,0,0,tt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+tt+"x"+wt+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,y,H,Q,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=y;if(y===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),y===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),y===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),y===i.RGBA){const wt=ot?Rs:ve.getTransfer(Q);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=wt===Ee?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(A,y){let H;return A?y===null||y===yi||y===to?H=i.DEPTH24_STENCIL8:y===Xn?H=i.DEPTH32F_STENCIL8:y===Ao&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===yi||y===to?H=i.DEPTH_COMPONENT24:y===Xn?H=i.DEPTH_COMPONENT32F:y===Ao&&(H=i.DEPTH_COMPONENT16),H}function I(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Cn&&A.minFilter!==On?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){const y=A.target;y.removeEventListener("dispose",R),C(y),y.isVideoTexture&&c.delete(y)}function E(A){const y=A.target;y.removeEventListener("dispose",E),M(y)}function C(A){const y=e.get(A);if(y.__webglInit===void 0)return;const H=A.source,Q=h.get(H);if(Q){const ot=Q[y.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(A),Object.keys(Q).length===0&&h.delete(H)}e.remove(A)}function S(A){const y=e.get(A);i.deleteTexture(y.__webglTexture);const H=A.source,Q=h.get(H);delete Q[y.__cacheKey],r.memory.textures--}function M(A){const y=e.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),e.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ot=0;ot<y.__webglFramebuffer[Q].length;ot++)i.deleteFramebuffer(y.__webglFramebuffer[Q][ot]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=A.textures;for(let Q=0,ot=H.length;Q<ot;Q++){const tt=e.get(H[Q]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),r.memory.textures--),e.remove(H[Q])}e.remove(A)}let P=0;function B(){P=0}function k(){const A=P;return A>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+o.maxTextures),P+=1,A}function K(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function Z(A,y){const H=e.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(H,A,y);return}}n.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function V(A,y){const H=e.get(A);if(A.version>0&&H.__version!==A.version){G(H,A,y);return}n.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function j(A,y){const H=e.get(A);if(A.version>0&&H.__version!==A.version){G(H,A,y);return}n.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function X(A,y){const H=e.get(A);if(A.version>0&&H.__version!==A.version){W(H,A,y);return}n.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}const rt={[Ne]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},lt={[Cn]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[zs]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},ut={[lh]:i.NEVER,[ph]:i.ALWAYS,[ch]:i.LESS,[Oc]:i.LEQUAL,[fh]:i.EQUAL,[uh]:i.GEQUAL,[hh]:i.GREATER,[dh]:i.NOTEQUAL};function Tt(A,y){if(y.type===Xn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===On||y.magFilter===zs||y.magFilter===ko||y.magFilter===Si||y.minFilter===On||y.minFilter===zs||y.minFilter===ko||y.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,rt[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,rt[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,rt[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ut[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==ko&&y.minFilter!==Si||y.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||e.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),e.get(y).__currentAnisotropy=y.anisotropy}}}function St(A,y){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));const Q=y.source;let ot=h.get(Q);ot===void 0&&(ot={},h.set(Q,ot));const tt=K(y);if(tt!==A.__cacheKey){ot[tt]===void 0&&(ot[tt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,H=!0),ot[tt].usedTimes++;const wt=ot[A.__cacheKey];wt!==void 0&&(ot[A.__cacheKey].usedTimes--,wt.usedTimes===0&&S(y)),A.__cacheKey=tt,A.__webglTexture=ot[tt].texture}return H}function G(A,y,H){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);const ot=St(A,y),tt=y.source;n.bindTexture(Q,A.__webglTexture,i.TEXTURE0+H);const wt=e.get(tt);if(tt.version!==wt.__version||ot===!0){n.activeTexture(i.TEXTURE0+H);const at=ve.getPrimaries(ve.workingColorSpace),_t=y.colorSpace===ii?null:ve.getPrimaries(y.colorSpace),Kt=y.colorSpace===ii||at===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ct=_(y.image,!1,o.maxTextureSize);ct=qt(y,ct);const Mt=s.convert(y.format,y.colorSpace),Ot=s.convert(y.type);let Gt=w(y.internalFormat,Mt,Ot,y.colorSpace,y.isVideoTexture);Tt(Q,y);let Pt;const ie=y.mipmaps,$t=y.isVideoTexture!==!0,ue=wt.__version===void 0||ot===!0,F=tt.dataReady,vt=I(y,ct);if(y.isDepthTexture)Gt=v(y.format===eo,y.type),ue&&($t?n.texStorage2D(i.TEXTURE_2D,1,Gt,ct.width,ct.height):n.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,Mt,Ot,null));else if(y.isDataTexture)if(ie.length>0){$t&&ue&&n.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let J=0,et=ie.length;J<et;J++)Pt=ie[J],$t?F&&n.texSubImage2D(i.TEXTURE_2D,J,0,0,Pt.width,Pt.height,Mt,Ot,Pt.data):n.texImage2D(i.TEXTURE_2D,J,Gt,Pt.width,Pt.height,0,Mt,Ot,Pt.data);y.generateMipmaps=!1}else $t?(ue&&n.texStorage2D(i.TEXTURE_2D,vt,Gt,ct.width,ct.height),F&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Mt,Ot,ct.data)):n.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,Mt,Ot,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$t&&ue&&n.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,ie[0].width,ie[0].height,ct.depth);for(let J=0,et=ie.length;J<et;J++)if(Pt=ie[J],y.format!==Rn)if(Mt!==null)if($t){if(F)if(y.layerUpdates.size>0){const mt=Wl(Pt.width,Pt.height,y.format,y.type);for(const ft of y.layerUpdates){const Xt=Pt.data.subarray(ft*mt/Pt.data.BYTES_PER_ELEMENT,(ft+1)*mt/Pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ft,Pt.width,Pt.height,1,Mt,Xt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Pt.width,Pt.height,ct.depth,Mt,Pt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Gt,Pt.width,Pt.height,ct.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?F&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Pt.width,Pt.height,ct.depth,Mt,Ot,Pt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,J,Gt,Pt.width,Pt.height,ct.depth,0,Mt,Ot,Pt.data)}else{$t&&ue&&n.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let J=0,et=ie.length;J<et;J++)Pt=ie[J],y.format!==Rn?Mt!==null?$t?F&&n.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Pt.width,Pt.height,Mt,Pt.data):n.compressedTexImage2D(i.TEXTURE_2D,J,Gt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?F&&n.texSubImage2D(i.TEXTURE_2D,J,0,0,Pt.width,Pt.height,Mt,Ot,Pt.data):n.texImage2D(i.TEXTURE_2D,J,Gt,Pt.width,Pt.height,0,Mt,Ot,Pt.data)}else if(y.isDataArrayTexture)if($t){if(ue&&n.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,ct.width,ct.height,ct.depth),F)if(y.layerUpdates.size>0){const J=Wl(ct.width,ct.height,y.format,y.type);for(const et of y.layerUpdates){const mt=ct.data.subarray(et*J/ct.data.BYTES_PER_ELEMENT,(et+1)*J/ct.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,Mt,Ot,mt)}y.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Mt,Ot,ct.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,Mt,Ot,ct.data);else if(y.isData3DTexture)$t?(ue&&n.texStorage3D(i.TEXTURE_3D,vt,Gt,ct.width,ct.height,ct.depth),F&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Mt,Ot,ct.data)):n.texImage3D(i.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,Mt,Ot,ct.data);else if(y.isFramebufferTexture){if(ue)if($t)n.texStorage2D(i.TEXTURE_2D,vt,Gt,ct.width,ct.height);else{let J=ct.width,et=ct.height;for(let mt=0;mt<vt;mt++)n.texImage2D(i.TEXTURE_2D,mt,Gt,J,et,0,Mt,Ot,null),J>>=1,et>>=1}}else if(ie.length>0){if($t&&ue){const J=At(ie[0]);n.texStorage2D(i.TEXTURE_2D,vt,Gt,J.width,J.height)}for(let J=0,et=ie.length;J<et;J++)Pt=ie[J],$t?F&&n.texSubImage2D(i.TEXTURE_2D,J,0,0,Mt,Ot,Pt):n.texImage2D(i.TEXTURE_2D,J,Gt,Mt,Ot,Pt);y.generateMipmaps=!1}else if($t){if(ue){const J=At(ct);n.texStorage2D(i.TEXTURE_2D,vt,Gt,J.width,J.height)}F&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ot,ct)}else n.texImage2D(i.TEXTURE_2D,0,Gt,Mt,Ot,ct);m(y)&&p(Q),wt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function W(A,y,H){if(y.image.length!==6)return;const Q=St(A,y),ot=y.source;n.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const tt=e.get(ot);if(ot.version!==tt.__version||Q===!0){n.activeTexture(i.TEXTURE0+H);const wt=ve.getPrimaries(ve.workingColorSpace),at=y.colorSpace===ii?null:ve.getPrimaries(y.colorSpace),_t=y.colorSpace===ii||wt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Kt=y.isCompressedTexture||y.image[0].isCompressedTexture,ct=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let et=0;et<6;et++)!Kt&&!ct?Mt[et]=_(y.image[et],!0,o.maxCubemapSize):Mt[et]=ct?y.image[et].image:y.image[et],Mt[et]=qt(y,Mt[et]);const Ot=Mt[0],Gt=s.convert(y.format,y.colorSpace),Pt=s.convert(y.type),ie=w(y.internalFormat,Gt,Pt,y.colorSpace),$t=y.isVideoTexture!==!0,ue=tt.__version===void 0||Q===!0,F=ot.dataReady;let vt=I(y,Ot);Tt(i.TEXTURE_CUBE_MAP,y);let J;if(Kt){$t&&ue&&n.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,Ot.width,Ot.height);for(let et=0;et<6;et++){J=Mt[et].mipmaps;for(let mt=0;mt<J.length;mt++){const ft=J[mt];y.format!==Rn?Gt!==null?$t?F&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,0,0,ft.width,ft.height,Gt,ft.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,ie,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?F&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,0,0,ft.width,ft.height,Gt,Pt,ft.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,ie,ft.width,ft.height,0,Gt,Pt,ft.data)}}}else{if(J=y.mipmaps,$t&&ue){J.length>0&&vt++;const et=At(Mt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,et.width,et.height)}for(let et=0;et<6;et++)if(ct){$t?F&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Mt[et].width,Mt[et].height,Gt,Pt,Mt[et].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Mt[et].width,Mt[et].height,0,Gt,Pt,Mt[et].data);for(let mt=0;mt<J.length;mt++){const Xt=J[mt].image[et].image;$t?F&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,0,0,Xt.width,Xt.height,Gt,Pt,Xt.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,ie,Xt.width,Xt.height,0,Gt,Pt,Xt.data)}}else{$t?F&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Gt,Pt,Mt[et]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Gt,Pt,Mt[et]);for(let mt=0;mt<J.length;mt++){const ft=J[mt];$t?F&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,0,0,Gt,Pt,ft.image[et]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,ie,Gt,Pt,ft.image[et])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),tt.__version=ot.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Y(A,y,H,Q,ot,tt){const wt=s.convert(H.format,H.colorSpace),at=s.convert(H.type),_t=w(H.internalFormat,wt,at,H.colorSpace),Kt=e.get(y),ct=e.get(H);if(ct.__renderTarget=y,!Kt.__hasExternalTextures){const Mt=Math.max(1,y.width>>tt),Ot=Math.max(1,y.height>>tt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?n.texImage3D(ot,tt,_t,Mt,Ot,y.depth,0,wt,at,null):n.texImage2D(ot,tt,_t,Mt,Ot,0,wt,at,null)}n.bindFramebuffer(i.FRAMEBUFFER,A),It(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ot,ct.__webglTexture,0,Ft(y)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ot,ct.__webglTexture,tt),n.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const Q=y.depthTexture,ot=Q&&Q.isDepthTexture?Q.type:null,tt=v(y.stencilBuffer,ot),wt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ft(y);It(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,tt,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,tt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,A)}else{const Q=y.textures;for(let ot=0;ot<Q.length;ot++){const tt=Q[ot],wt=s.convert(tt.format,tt.colorSpace),at=s.convert(tt.type),_t=w(tt.internalFormat,wt,at,tt.colorSpace),Kt=Ft(y);H&&It(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,_t,y.width,y.height):It(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=e.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const ot=Q.__webglTexture,tt=Ft(y);if(y.depthTexture.format===qi)It(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(y.depthTexture.format===eo)It(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Rt(A){const y=e.get(A),H=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const ot=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",ot)};Q.addEventListener("dispose",ot),y.__depthDisposeCallback=ot}y.__boundDepthTexture=Q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");xt(y.__webglFramebuffer,A)}else if(H){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),st(y.__webglDepthbuffer[Q],A,!1);else{const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,tt)}}else if(n.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),st(y.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ot)}n.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(A,y,H){const Q=e.get(A);y!==void 0&&Y(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Rt(A)}function Wt(A){const y=A.texture,H=e.get(A),Q=e.get(y);A.addEventListener("dispose",E);const ot=A.textures,tt=A.isWebGLCubeRenderTarget===!0,wt=ot.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,r.memory.textures++),tt){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let _t=0;_t<y.mipmaps.length;_t++)H.__webglFramebuffer[at][_t]=i.createFramebuffer()}else H.__webglFramebuffer[at]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)H.__webglFramebuffer[at]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(wt)for(let at=0,_t=ot.length;at<_t;at++){const Kt=e.get(ot[at]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&It(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<ot.length;at++){const _t=ot[at];H.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const Kt=s.convert(_t.format,_t.colorSpace),ct=s.convert(_t.type),Mt=w(_t.internalFormat,Kt,ct,_t.colorSpace,A.isXRRenderTarget===!0),Ot=Ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,H.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),st(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){n.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Y(H.__webglFramebuffer[at][_t],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t);else Y(H.__webglFramebuffer[at],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(y)&&p(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let at=0,_t=ot.length;at<_t;at++){const Kt=ot[at],ct=e.get(Kt);n.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Tt(i.TEXTURE_2D,Kt),Y(H.__webglFramebuffer,A,Kt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}n.unbindTexture()}else{let at=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(at,Q.__webglTexture),Tt(at,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Y(H.__webglFramebuffer[_t],A,y,i.COLOR_ATTACHMENT0,at,_t);else Y(H.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,at,0);m(y)&&p(at),n.unbindTexture()}A.depthBuffer&&Rt(A)}function Lt(A){const y=A.textures;for(let H=0,Q=y.length;H<Q;H++){const ot=y[H];if(m(ot)){const tt=T(A),wt=e.get(ot).__webglTexture;n.bindTexture(tt,wt),p(tt),n.unbindTexture()}}}const jt=[],U=[];function Vt(A){if(A.samples>0){if(It(A)===!1){const y=A.textures,H=A.width,Q=A.height;let ot=i.COLOR_BUFFER_BIT;const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=e.get(A),at=y.length>1;if(at)for(let _t=0;_t<y.length;_t++)n.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Kt=e.get(y[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,ot,i.NEAREST),l===!0&&(jt.length=0,U.length=0,jt.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(jt.push(tt),U.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let _t=0;_t<y.length;_t++){n.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Kt=e.get(y[_t]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Kt,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ft(A){return Math.min(o.maxSamples,A.samples)}function It(A){const y=e.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(A){const y=r.render.frame;c.get(A)!==y&&(c.set(A,y),A.update())}function qt(A,y){const H=A.colorSpace,Q=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==oo&&H!==ii&&(ve.getTransfer(H)===Ee?(Q!==Rn||ot!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function At(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(f.width=A.naturalWidth||A.width,f.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(f.width=A.displayWidth,f.height=A.displayHeight):(f.width=A.width,f.height=A.height),f}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=Ut,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=It}function Dm(i,t){function n(e,o=ii){let s;const r=ve.getTransfer(o);if(e===$n)return i.UNSIGNED_BYTE;if(e===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(e===da)return i.UNSIGNED_SHORT_5_5_5_1;if(e===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(e===Ec)return i.BYTE;if(e===Ac)return i.SHORT;if(e===Ao)return i.UNSIGNED_SHORT;if(e===fa)return i.INT;if(e===yi)return i.UNSIGNED_INT;if(e===Xn)return i.FLOAT;if(e===Do)return i.HALF_FLOAT;if(e===Cc)return i.ALPHA;if(e===Pc)return i.RGB;if(e===Rn)return i.RGBA;if(e===Lc)return i.LUMINANCE;if(e===Ic)return i.LUMINANCE_ALPHA;if(e===qi)return i.DEPTH_COMPONENT;if(e===eo)return i.DEPTH_STENCIL;if(e===Dc)return i.RED;if(e===ua)return i.RED_INTEGER;if(e===Uc)return i.RG;if(e===pa)return i.RG_INTEGER;if(e===ma)return i.RGBA_INTEGER;if(e===xs||e===_s||e===vs||e===ws)if(r===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(e===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(e===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(e===Dr||e===Ur||e===Nr||e===Fr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(e===Dr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===Ur)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===Nr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===Fr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(e===Or||e===zr||e===Br)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(e===Or||e===zr)return r===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(e===Br)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(e===kr||e===Gr||e===Hr||e===Vr||e===Wr||e===Xr||e===Yr||e===Zr||e===qr||e===$r||e===Kr||e===Jr||e===jr||e===Qr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(e===kr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===Gr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===Hr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===Vr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===Wr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===Xr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===Yr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===Zr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===qr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===$r)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===Kr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===Jr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===jr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===Qr)return r===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(e===Ms||e===ta||e===ea)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(e===Ms)return r===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(e===Nc||e===na||e===ia||e===oa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(e===Ms)return s.COMPRESSED_RED_RGTC1_EXT;if(e===na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return e===to?i.UNSIGNED_INT_24_8:i[e]!==void 0?i[e]:null}return{convert:n}}class Um extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nm={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const e of t.hand.values())this._getHandJoint(n,e)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,e){let o=null,s=null,r=null;const a=this._targetRay,l=this._grip,f=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(f&&t.hand){r=!0;for(const _ of t.hand.values()){const m=n.getJointPose(_,e),p=this._getHandJoint(f,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],h=c.position.distanceTo(d.position),u=.02,g=.005;f.inputState.pinching&&h>u+g?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&h<=u-g&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,e),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=n.getPose(t.targetRaySpace,e),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const e=new Jt;e.matrixAutoUpdate=!1,e.visible=!1,t.joints[n.jointName]=e,t.add(e)}return t.joints[n.jointName]}}const Fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Om=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,e){if(this.texture===null){const o=new rn,s=t.properties.get(o);s.__webglTexture=n.texture,(n.depthNear!=e.depthNear||n.depthFar!=e.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,e=new li({vertexShader:Fm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new x(new ee(20,20),e)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bm extends so{constructor(t,n){super();const e=this;let o=null,s=1,r=null,a="local-floor",l=1,f=null,c=null,d=null,h=null,u=null,g=null;const _=new zm,m=n.getContextAttributes();let p=null,T=null;const w=[],v=[],I=new zt;let R=null;const E=new gn;E.viewport=new Ae;const C=new gn;C.viewport=new Ae;const S=[E,C],M=new Um;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let W=w[G];return W===void 0&&(W=new dr,w[G]=W),W.getTargetRaySpace()},this.getControllerGrip=function(G){let W=w[G];return W===void 0&&(W=new dr,w[G]=W),W.getGripSpace()},this.getHand=function(G){let W=w[G];return W===void 0&&(W=new dr,w[G]=W),W.getHandSpace()};function k(G){const W=v.indexOf(G.inputSource);if(W===-1)return;const Y=w[W];Y!==void 0&&(Y.update(G.inputSource,G.frame,f||r),Y.dispatchEvent({type:G.type,data:G.inputSource}))}function K(){o.removeEventListener("select",k),o.removeEventListener("selectstart",k),o.removeEventListener("selectend",k),o.removeEventListener("squeeze",k),o.removeEventListener("squeezestart",k),o.removeEventListener("squeezeend",k),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",Z);for(let G=0;G<w.length;G++){const W=v[G];W!==null&&(v[G]=null,w[G].disconnect(W))}P=null,B=null,_.reset(),t.setRenderTarget(p),u=null,h=null,d=null,o=null,T=null,St.stop(),e.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||r},this.setReferenceSpace=function(G){f=G},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(p=t.getRenderTarget(),o.addEventListener("select",k),o.addEventListener("selectstart",k),o.addEventListener("selectend",k),o.addEventListener("squeeze",k),o.addEventListener("squeezestart",k),o.addEventListener("squeezeend",k),o.addEventListener("end",K),o.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),o.renderState.layers===void 0){const W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(o,n,W),o.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new bi(u.framebufferWidth,u.framebufferHeight,{format:Rn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,Y=null,st=null;m.depth&&(st=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=m.stencil?eo:qi,Y=m.stencil?to:yi);const xt={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:s};d=new XRWebGLBinding(o,n),h=d.createProjectionLayer(xt),o.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new bi(h.textureWidth,h.textureHeight,{format:Rn,type:$n,depthTexture:new Jc(h.textureWidth,h.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),f=null,r=await o.requestReferenceSpace(a),St.setContext(o),St.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(G){for(let W=0;W<G.removed.length;W++){const Y=G.removed[W],st=v.indexOf(Y);st>=0&&(v[st]=null,w[st].disconnect(Y))}for(let W=0;W<G.added.length;W++){const Y=G.added[W];let st=v.indexOf(Y);if(st===-1){for(let Rt=0;Rt<w.length;Rt++)if(Rt>=v.length){v.push(Y),st=Rt;break}else if(v[Rt]===null){v[Rt]=Y,st=Rt;break}if(st===-1)break}const xt=w[st];xt&&xt.connect(Y)}}const V=new N,j=new N;function X(G,W,Y){V.setFromMatrixPosition(W.matrixWorld),j.setFromMatrixPosition(Y.matrixWorld);const st=V.distanceTo(j),xt=W.projectionMatrix.elements,Rt=Y.projectionMatrix.elements,Ut=xt[14]/(xt[10]-1),Wt=xt[14]/(xt[10]+1),Lt=(xt[9]+1)/xt[5],jt=(xt[9]-1)/xt[5],U=(xt[8]-1)/xt[0],Vt=(Rt[8]+1)/Rt[0],Ft=Ut*U,It=Ut*Vt,Et=st/(-U+Vt),qt=Et*-U;if(W.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(qt),G.translateZ(Et),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),xt[10]===-1)G.projectionMatrix.copy(W.projectionMatrix),G.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const At=Ut+Et,A=Wt+Et,y=Ft-qt,H=It+(st-qt),Q=Lt*Wt/A*At,ot=jt*Wt/A*At;G.projectionMatrix.makePerspective(y,H,Q,ot,At,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function rt(G,W){W===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(W.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;let W=G.near,Y=G.far;_.texture!==null&&(_.depthNear>0&&(W=_.depthNear),_.depthFar>0&&(Y=_.depthFar)),M.near=C.near=E.near=W,M.far=C.far=E.far=Y,(P!==M.near||B!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,B=M.far),E.layers.mask=G.layers.mask|2,C.layers.mask=G.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;const st=G.parent,xt=M.cameras;rt(M,st);for(let Rt=0;Rt<xt.length;Rt++)rt(xt[Rt],st);xt.length===2?X(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),lt(G,M,st)};function lt(G,W,Y){Y===null?G.matrix.copy(W.matrixWorld):(G.matrix.copy(Y.matrixWorld),G.matrix.invert(),G.matrix.multiply(W.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(W.projectionMatrix),G.projectionMatrixInverse.copy(W.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ro*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ut=null;function Tt(G,W){if(c=W.getViewerPose(f||r),g=W,c!==null){const Y=c.views;u!==null&&(t.setRenderTargetFramebuffer(T,u.framebuffer),t.setRenderTarget(T));let st=!1;Y.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Rt=0;Rt<Y.length;Rt++){const Ut=Y[Rt];let Wt=null;if(u!==null)Wt=u.getViewport(Ut);else{const jt=d.getViewSubImage(h,Ut);Wt=jt.viewport,Rt===0&&(t.setRenderTargetTextures(T,jt.colorTexture,h.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(T))}let Lt=S[Rt];Lt===void 0&&(Lt=new gn,Lt.layers.enable(Rt),Lt.viewport=new Ae,S[Rt]=Lt),Lt.matrix.fromArray(Ut.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Ut.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Rt===0&&(M.matrix.copy(Lt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Lt)}const xt=o.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Rt=d.getDepthInformation(Y[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,o.renderState)}}for(let Y=0;Y<w.length;Y++){const st=v[Y],xt=w[Y];st!==null&&xt!==void 0&&xt.update(st,W,f||r)}ut&&ut(G,W),W.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:W}),g=null}const St=new $c;St.setAnimationLoop(Tt),this.setAnimationLoop=function(G){ut=G},this.dispose=function(){}}}const gi=new Ln,km=new Le;function Gm(i,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function e(m,p){p.color.getRGB(m.fogColor.value,Yc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function o(m,p,T,w,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,w):p.isSpriteMaterial?f(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),w=T.envMap,v=T.envMapRotation;w&&(m.envMap.value=w,gi.copy(v),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(gi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:e,refreshMaterialUniforms:o}}function Hm(i,t,n,e){let o={},s={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const v=w.program;e.uniformBlockBinding(T,v)}function f(T,w){let v=o[T.id];v===void 0&&(g(T),v=c(T),o[T.id]=v,T.addEventListener("dispose",m));const I=w.program;e.updateUBOMapping(T,I);const R=t.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function c(T){const w=d();T.__bindingPointIndex=w;const v=i.createBuffer(),I=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function d(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const w=o[T.id],v=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,E=v.length;R<E;R++){const C=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,M=C.length;S<M;S++){const P=C[S];if(u(P,R,S,I)===!0){const B=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let Z=0;Z<k.length;Z++){const V=k[Z],j=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+K,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,K),K+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(T,w,v,I){const R=T.value,E=w+"_"+v;if(I[E]===void 0)return typeof R=="number"||typeof R=="boolean"?I[E]=R:I[E]=R.clone(),!0;{const C=I[E];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return I[E]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(T){const w=T.uniforms;let v=0;const I=16;for(let E=0,C=w.length;E<C;E++){const S=Array.isArray(w[E])?w[E]:[w[E]];for(let M=0,P=S.length;M<P;M++){const B=S[M],k=Array.isArray(B.value)?B.value:[B.value];for(let K=0,Z=k.length;K<Z;K++){const V=k[K],j=_(V),X=v%I,rt=X%j.boundary,lt=X+rt;v+=rt,lt!==0&&I-lt<j.storage&&(v+=I-lt),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=j.storage}}}const R=v%I;return R>0&&(v+=I-R),T.__size=v,T.__cache={},this}function _(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const v=r.indexOf(w.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(o[w.id]),delete o[w.id],delete s[w.id]}function p(){for(const T in o)i.deleteBuffer(o[T]);r=[],o={},s={}}return{bind:l,update:f,dispose:p}}class Vm{constructor(t={}){const{canvas:n=Lh(),context:e=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let u;if(e!==null){if(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=e.getContextAttributes().alpha}else u=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let I=!1,R=0,E=0,C=null,S=-1,M=null;const P=new Ae,B=new Ae;let k=null;const K=new de(0);let Z=0,V=n.width,j=n.height,X=1,rt=null,lt=null;const ut=new Ae(0,0,V,j),Tt=new Ae(0,0,V,j);let St=!1;const G=new xa;let W=!1,Y=!1;const st=new Le,xt=new Le,Rt=new N,Ut=new Ae,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function jt(){return C===null?X:1}let U=e;function Vt(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ca}`),n.addEventListener("webglcontextlost",et,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",ft,!1),U===null){const O="webgl2";if(U=Vt(O,b),U===null)throw Vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,It,Et,qt,At,A,y,H,Q,ot,tt,wt,at,_t,Kt,ct,Mt,Ot,Gt,Pt,ie,$t,ue,F;function vt(){Ft=new q0(U),Ft.init(),$t=new Dm(U,Ft),It=new H0(U,Ft,t,$t),Et=new Pm(U,Ft),It.reverseDepthBuffer&&h&&Et.buffers.depth.setReversed(!0),qt=new J0(U),At=new mm,A=new Im(U,Ft,Et,At,It,$t,qt),y=new W0(v),H=new Z0(v),Q=new od(U),ue=new k0(U,Q),ot=new $0(U,Q,qt,ue),tt=new Q0(U,ot,Q,qt),Gt=new j0(U,It,A),ct=new V0(At),wt=new pm(v,y,H,Ft,It,ue,ct),at=new Gm(v,At),_t=new xm,Kt=new ym(Ft),Ot=new B0(v,y,H,Et,tt,u,l),Mt=new Rm(v,tt,It),F=new Hm(U,qt,It,Et),Pt=new G0(U,Ft,qt),ie=new K0(U,Ft,qt),qt.programs=wt.programs,v.capabilities=It,v.extensions=Ft,v.properties=At,v.renderLists=_t,v.shadowMap=Mt,v.state=Et,v.info=qt}vt();const J=new Bm(v,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(V,j,!1))},this.getSize=function(b){return b.set(V,j)},this.setSize=function(b,O,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,j=O,n.width=Math.floor(b*X),n.height=Math.floor(O*X),q===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(V*X,j*X).floor()},this.setDrawingBufferSize=function(b,O,q){V=b,j=O,X=q,n.width=Math.floor(b*q),n.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ut)},this.setViewport=function(b,O,q,$){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,O,q,$),Et.viewport(P.copy(ut).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Tt)},this.setScissor=function(b,O,q,$){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,O,q,$),Et.scissor(B.copy(Tt).multiplyScalar(X).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(b){Et.setScissorTest(St=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){lt=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(b=!0,O=!0,q=!0){let $=0;if(b){let z=!1;if(C!==null){const ht=C.texture.format;z=ht===ma||ht===pa||ht===ua}if(z){const ht=C.texture.type,bt=ht===$n||ht===yi||ht===Ao||ht===to||ht===ha||ht===da,Nt=Ot.getClearColor(),Bt=Ot.getClearAlpha(),dt=Nt.r,gt=Nt.g,pt=Nt.b;bt?(g[0]=dt,g[1]=gt,g[2]=pt,g[3]=Bt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=dt,_[1]=gt,_[2]=pt,_[3]=Bt,U.clearBufferiv(U.COLOR,0,_))}else $|=U.COLOR_BUFFER_BIT}O&&($|=U.DEPTH_BUFFER_BIT),q&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",et,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Kt.dispose(),At.dispose(),y.dispose(),H.dispose(),tt.dispose(),ue.dispose(),F.dispose(),wt.dispose(),J.dispose(),J.removeEventListener("sessionstart",we),J.removeEventListener("sessionend",Be),oe.stop()};function et(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const b=qt.autoReset,O=Mt.enabled,q=Mt.autoUpdate,$=Mt.needsUpdate,z=Mt.type;vt(),qt.autoReset=b,Mt.enabled=O,Mt.autoUpdate=q,Mt.needsUpdate=$,Mt.type=z}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const O=b.target;O.removeEventListener("dispose",Xt),me(O)}function me(b){be(b),At.remove(b)}function be(b){const O=At.get(b).programs;O!==void 0&&(O.forEach(function(q){wt.releaseProgram(q)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,$,z,ht){O===null&&(O=Wt);const bt=z.isMesh&&z.matrixWorld.determinant()<0,Nt=ln(b,O,q,$,z);Et.setMaterial($,bt);let Bt=q.index,dt=1;if($.wireframe===!0){if(Bt=ot.getWireframeAttribute(q),Bt===void 0)return;dt=2}const gt=q.drawRange,pt=q.attributes.position;let Ht=gt.start*dt,re=(gt.start+gt.count)*dt;ht!==null&&(Ht=Math.max(Ht,ht.start*dt),re=Math.min(re,(ht.start+ht.count)*dt)),Bt!==null?(Ht=Math.max(Ht,0),re=Math.min(re,Bt.count)):pt!=null&&(Ht=Math.max(Ht,0),re=Math.min(re,pt.count));const le=re-Ht;if(le<0||le===1/0)return;ue.setup(z,$,Nt,q,Bt);let Re,fe=Pt;if(Bt!==null&&(Re=Q.get(Bt),fe=ie,fe.setIndex(Re)),z.isMesh)$.wireframe===!0?(Et.setLineWidth($.wireframeLinewidth*jt()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(z.isLine){let kt=$.linewidth;kt===void 0&&(kt=1),Et.setLineWidth(kt*jt()),z.isLineSegments?fe.setMode(U.LINES):z.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else z.isPoints?fe.setMode(U.POINTS):z.isSprite&&fe.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)fe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const kt=z._multiDrawStarts,cn=z._multiDrawCounts,pe=z._multiDrawCount,He=Bt?Q.get(Bt).bytesPerElement:1,Kn=At.get($).currentProgram.getUniforms();for(let Ze=0;Ze<pe;Ze++)Kn.setValue(U,"_gl_DrawID",Ze),fe.render(kt[Ze]/He,cn[Ze])}else if(z.isInstancedMesh)fe.renderInstances(Ht,le,z.count);else if(q.isInstancedBufferGeometry){const kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,cn=Math.min(q.instanceCount,kt);fe.renderInstances(Ht,le,cn)}else fe.render(Ht,le)};function te(b,O,q){b.transparent===!0&&b.side===tn&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,_e(b,O,q),b.side=ai,b.needsUpdate=!0,_e(b,O,q),b.side=tn):_e(b,O,q)}this.compile=function(b,O,q=null){q===null&&(q=b),p=Kt.get(q),p.init(O),w.push(p),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==q&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const $=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ht=z.material;if(ht)if(Array.isArray(ht))for(let bt=0;bt<ht.length;bt++){const Nt=ht[bt];te(Nt,q,z),$.add(Nt)}else te(ht,q,z),$.add(ht)}),w.pop(),p=null,$},this.compileAsync=function(b,O,q=null){const $=this.compile(b,O,q);return new Promise(z=>{function ht(){if($.forEach(function(bt){At.get(bt).currentProgram.isReady()&&$.delete(bt)}),$.size===0){z(b);return}setTimeout(ht,10)}Ft.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Te=null;function ge(b){Te&&Te(b)}function we(){oe.stop()}function Be(){oe.start()}const oe=new $c;oe.setAnimationLoop(ge),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(b){Te=b,J.setAnimationLoop(b),b===null?oe.stop():oe.start()},J.addEventListener("sessionstart",we),J.addEventListener("sessionend",Be),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,C),p=Kt.get(b,w.length),p.init(O),w.push(p),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(xt),Y=this.localClippingEnabled,W=ct.init(this.clippingPlanes,Y),m=_t.get(b,T.length),m.init(),T.push(m),J.enabled===!0&&J.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&ne(ht,O,-1/0,v.sortObjects)}ne(b,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,lt),Lt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Lt&&Ot.addToRenderList(m,b),this.info.render.frame++,W===!0&&ct.beginShadows();const q=p.state.shadowsArray;Mt.render(q,b,O),W===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const ht=O.cameras;if(z.length>0)for(let bt=0,Nt=ht.length;bt<Nt;bt++){const Bt=ht[bt];De($,z,b,Bt)}Lt&&Ot.render(b);for(let bt=0,Nt=ht.length;bt<Nt;bt++){const Bt=ht[bt];dn(m,b,Bt,Bt.viewport)}}else z.length>0&&De($,z,b,O),Lt&&Ot.render(b),dn(m,b,O);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,O),ue.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],W===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ne(b,O,q,$){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){$&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);const bt=tt.update(b),Nt=b.material;Nt.visible&&m.push(b,bt,Nt,q,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){const bt=tt.update(b),Nt=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ut.copy(bt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(Nt)){const Bt=bt.groups;for(let dt=0,gt=Bt.length;dt<gt;dt++){const pt=Bt[dt],Ht=Nt[pt.materialIndex];Ht&&Ht.visible&&m.push(b,bt,Ht,q,Ut.z,pt)}}else Nt.visible&&m.push(b,bt,Nt,q,Ut.z,null)}}const ht=b.children;for(let bt=0,Nt=ht.length;bt<Nt;bt++)ne(ht[bt],O,q,$)}function dn(b,O,q,$){const z=b.opaque,ht=b.transmissive,bt=b.transparent;p.setupLightsView(q),W===!0&&ct.setGlobalState(v.clippingPlanes,q),$&&Et.viewport(P.copy($)),z.length>0&&Ye(z,O,q),ht.length>0&&Ye(ht,O,q),bt.length>0&&Ye(bt,O,q),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function De(b,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new bi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Do:$n,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const ht=p.state.transmissionRenderTarget[$.id],bt=$.viewport||P;ht.setSize(bt.z,bt.w);const Nt=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(K),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Lt&&Ot.render(q);const Bt=v.toneMapping;v.toneMapping=si;const dt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),W===!0&&ct.setGlobalState(v.clippingPlanes,$),Ye(b,q,$),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let pt=0,Ht=O.length;pt<Ht;pt++){const re=O[pt],le=re.object,Re=re.geometry,fe=re.material,kt=re.group;if(fe.side===tn&&le.layers.test($.layers)){const cn=fe.side;fe.side=hn,fe.needsUpdate=!0,an(le,q,$,Re,fe,kt),fe.side=cn,fe.needsUpdate=!0,gt=!0}}gt===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht))}v.setRenderTarget(Nt),v.setClearColor(K,Z),dt!==void 0&&($.viewport=dt),v.toneMapping=Bt}function Ye(b,O,q){const $=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ht=b.length;z<ht;z++){const bt=b[z],Nt=bt.object,Bt=bt.geometry,dt=$===null?bt.material:$,gt=bt.group;Nt.layers.test(q.layers)&&an(Nt,O,q,Bt,dt,gt)}}function an(b,O,q,$,z,ht){b.onBeforeRender(v,O,q,$,z,ht),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(v,O,q,$,b,ht),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,v.renderBufferDirect(q,O,$,z,b,ht),z.side=ai,z.needsUpdate=!0,v.renderBufferDirect(q,O,$,z,b,ht),z.side=tn):v.renderBufferDirect(q,O,$,z,b,ht),b.onAfterRender(v,O,q,$,z,ht)}function _e(b,O,q){O.isScene!==!0&&(O=Wt);const $=At.get(b),z=p.state.lights,ht=p.state.shadowsArray,bt=z.state.version,Nt=wt.getParameters(b,z.state,ht,O,q),Bt=wt.getProgramCacheKey(Nt);let dt=$.programs;$.environment=b.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(b.isMeshStandardMaterial?H:y).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,dt===void 0&&(b.addEventListener("dispose",Xt),dt=new Map,$.programs=dt);let gt=dt.get(Bt);if(gt!==void 0){if($.currentProgram===gt&&$.lightsStateVersion===bt)return Ce(b,Nt),gt}else Nt.uniforms=wt.getUniforms(b),b.onBeforeCompile(Nt,v),gt=wt.acquireProgram(Nt,Bt),dt.set(Bt,gt),$.uniforms=Nt.uniforms;const pt=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(pt.clippingPlanes=ct.uniform),Ce(b,Nt),$.needsLights=Zt(b),$.lightsStateVersion=bt,$.needsLights&&(pt.ambientLightColor.value=z.state.ambient,pt.lightProbe.value=z.state.probe,pt.directionalLights.value=z.state.directional,pt.directionalLightShadows.value=z.state.directionalShadow,pt.spotLights.value=z.state.spot,pt.spotLightShadows.value=z.state.spotShadow,pt.rectAreaLights.value=z.state.rectArea,pt.ltc_1.value=z.state.rectAreaLTC1,pt.ltc_2.value=z.state.rectAreaLTC2,pt.pointLights.value=z.state.point,pt.pointLightShadows.value=z.state.pointShadow,pt.hemisphereLights.value=z.state.hemi,pt.directionalShadowMap.value=z.state.directionalShadowMap,pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,pt.spotShadowMap.value=z.state.spotShadowMap,pt.spotLightMatrix.value=z.state.spotLightMatrix,pt.spotLightMap.value=z.state.spotLightMap,pt.pointShadowMap.value=z.state.pointShadowMap,pt.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=gt,$.uniformsList=null,gt}function Se(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Ss.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Ce(b,O){const q=At.get(b);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function ln(b,O,q,$,z){O.isScene!==!0&&(O=Wt),A.resetTextureUnits();const ht=O.fog,bt=$.isMeshStandardMaterial?O.environment:null,Nt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:oo,Bt=($.isMeshStandardMaterial?H:y).get($.envMap||bt),dt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,gt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),pt=!!q.morphAttributes.position,Ht=!!q.morphAttributes.normal,re=!!q.morphAttributes.color;let le=si;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(le=v.toneMapping);const Re=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=Re!==void 0?Re.length:0,kt=At.get($),cn=p.state.lights;if(W===!0&&(Y===!0||b!==M)){const $e=b===M&&$.id===S;ct.setState($,b,$e)}let pe=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==cn.state.version||kt.outputColorSpace!==Nt||z.isBatchedMesh&&kt.batching===!1||!z.isBatchedMesh&&kt.batching===!0||z.isBatchedMesh&&kt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&kt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&kt.instancing===!1||!z.isInstancedMesh&&kt.instancing===!0||z.isSkinnedMesh&&kt.skinning===!1||!z.isSkinnedMesh&&kt.skinning===!0||z.isInstancedMesh&&kt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&kt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&kt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&kt.instancingMorph===!1&&z.morphTexture!==null||kt.envMap!==Bt||$.fog===!0&&kt.fog!==ht||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ct.numPlanes||kt.numIntersection!==ct.numIntersection)||kt.vertexAlphas!==dt||kt.vertexTangents!==gt||kt.morphTargets!==pt||kt.morphNormals!==Ht||kt.morphColors!==re||kt.toneMapping!==le||kt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,kt.__version=$.version);let He=kt.currentProgram;pe===!0&&(He=_e($,O,z));let Kn=!1,Ze=!1,ci=!1;const ye=He.getUniforms(),qe=kt.uniforms;if(Et.useProgram(He.program)&&(Kn=!0,Ze=!0,ci=!0),$.id!==S&&(S=$.id,Ze=!0),Kn||M!==b){Et.buffers.depth.getReversed()?(st.copy(b.projectionMatrix),Dh(st),Uh(st),ye.setValue(U,"projectionMatrix",st)):ye.setValue(U,"projectionMatrix",b.projectionMatrix),ye.setValue(U,"viewMatrix",b.matrixWorldInverse);const fn=ye.map.cameraPosition;fn!==void 0&&fn.setValue(U,Rt.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&ye.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ye.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ze=!0,ci=!0)}if(z.isSkinnedMesh){ye.setOptional(U,z,"bindMatrix"),ye.setOptional(U,z,"bindMatrixInverse");const $e=z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ye.setValue(U,"boneTexture",$e.boneTexture,A))}z.isBatchedMesh&&(ye.setOptional(U,z,"batchingTexture"),ye.setValue(U,"batchingTexture",z._matricesTexture,A),ye.setOptional(U,z,"batchingIdTexture"),ye.setValue(U,"batchingIdTexture",z._indirectTexture,A),ye.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ye.setValue(U,"batchingColorTexture",z._colorsTexture,A));const xn=q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Gt.update(z,q,He),(Ze||kt.receiveShadow!==z.receiveShadow)&&(kt.receiveShadow=z.receiveShadow,ye.setValue(U,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(qe.envMap.value=Bt,qe.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(qe.envMapIntensity.value=O.environmentIntensity),Ze&&(ye.setValue(U,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Yt(qe,ci),ht&&$.fog===!0&&at.refreshFogUniforms(qe,ht),at.refreshMaterialUniforms(qe,$,X,j,p.state.transmissionRenderTarget[b.id]),Ss.upload(U,Se(kt),qe,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ss.upload(U,Se(kt),qe,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ye.setValue(U,"center",z.center),ye.setValue(U,"modelViewMatrix",z.modelViewMatrix),ye.setValue(U,"normalMatrix",z.normalMatrix),ye.setValue(U,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const $e=$.uniformsGroups;for(let fn=0,In=$e.length;fn<In;fn++){const No=$e[fn];F.update(No,He),F.bind(No,He)}}return He}function Yt(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Zt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,q){At.get(b.texture).__webglTexture=O,At.get(b.depthTexture).__webglTexture=q;const $=At.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const q=At.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,q=0){C=b,R=O,E=q;let $=!0,z=null,ht=!1,bt=!1;if(b){const Bt=At.get(b);if(Bt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Bt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Bt.__hasExternalTextures)A.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const pt=b.depthTexture;if(Bt.__boundDepthTexture!==pt){if(pt!==null&&At.has(pt)&&(b.width!==pt.image.width||b.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const dt=b.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(bt=!0);const gt=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(gt[O])?z=gt[O][q]:z=gt[O],ht=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?z=At.get(b).__webglMultisampledFramebuffer:Array.isArray(gt)?z=gt[q]:z=gt,P.copy(b.viewport),B.copy(b.scissor),k=b.scissorTest}else P.copy(ut).multiplyScalar(X).floor(),B.copy(Tt).multiplyScalar(X).floor(),k=St;if(Et.bindFramebuffer(U.FRAMEBUFFER,z)&&$&&Et.drawBuffers(b,z),Et.viewport(P),Et.scissor(B),Et.setScissorTest(k),ht){const Bt=At.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Bt.__webglTexture,q)}else if(bt){const Bt=At.get(b.texture),dt=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,q||0,dt)}S=-1},this.readRenderTargetPixels=function(b,O,q,$,z,ht,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Nt=Nt[bt]),Nt){Et.bindFramebuffer(U.FRAMEBUFFER,Nt);try{const Bt=b.texture,dt=Bt.format,gt=Bt.type;if(!It.textureFormatReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-$&&q>=0&&q<=b.height-z&&U.readPixels(O,q,$,z,$t.convert(dt),$t.convert(gt),ht)}finally{const Bt=C!==null?At.get(C).__webglFramebuffer:null;Et.bindFramebuffer(U.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,O,q,$,z,ht,bt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Nt=Nt[bt]),Nt){const Bt=b.texture,dt=Bt.format,gt=Bt.type;if(!It.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-$&&q>=0&&q<=b.height-z){Et.bindFramebuffer(U.FRAMEBUFFER,Nt);const pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.bufferData(U.PIXEL_PACK_BUFFER,ht.byteLength,U.STREAM_READ),U.readPixels(O,q,$,z,$t.convert(dt),$t.convert(gt),0);const Ht=C!==null?At.get(C).__webglFramebuffer:null;Et.bindFramebuffer(U.FRAMEBUFFER,Ht);const re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ih(U,re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ht),U.deleteBuffer(pt),U.deleteSync(re),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,q=0){b.isTexture!==!0&&(_o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-q),z=Math.floor(b.image.width*$),ht=Math.floor(b.image.height*$),bt=O!==null?O.x:0,Nt=O!==null?O.y:0;A.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,bt,Nt,z,ht),Et.unbindTexture()},this.copyTextureToTexture=function(b,O,q=null,$=null,z=0){b.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],O=arguments[2],z=arguments[3]||0,q=null);let ht,bt,Nt,Bt,dt,gt,pt,Ht,re;const le=b.isCompressedTexture?b.mipmaps[z]:b.image;q!==null?(ht=q.max.x-q.min.x,bt=q.max.y-q.min.y,Nt=q.isBox3?q.max.z-q.min.z:1,Bt=q.min.x,dt=q.min.y,gt=q.isBox3?q.min.z:0):(ht=le.width,bt=le.height,Nt=le.depth||1,Bt=0,dt=0,gt=0),$!==null?(pt=$.x,Ht=$.y,re=$.z):(pt=0,Ht=0,re=0);const Re=$t.convert(O.format),fe=$t.convert(O.type);let kt;O.isData3DTexture?(A.setTexture3D(O,0),kt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),kt=U.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),kt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const cn=U.getParameter(U.UNPACK_ROW_LENGTH),pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),He=U.getParameter(U.UNPACK_SKIP_PIXELS),Kn=U.getParameter(U.UNPACK_SKIP_ROWS),Ze=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,dt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,gt);const ci=b.isDataArrayTexture||b.isData3DTexture,ye=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const qe=At.get(b),xn=At.get(O),$e=At.get(qe.__renderTarget),fn=At.get(xn.__renderTarget);Et.bindFramebuffer(U.READ_FRAMEBUFFER,$e.__webglFramebuffer),Et.bindFramebuffer(U.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let In=0;In<Nt;In++)ci&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(b).__webglTexture,z,gt+In),b.isDepthTexture?(ye&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(O).__webglTexture,z,re+In),U.blitFramebuffer(Bt,dt,ht,bt,pt,Ht,ht,bt,U.DEPTH_BUFFER_BIT,U.NEAREST)):ye?U.copyTexSubImage3D(kt,z,pt,Ht,re+In,Bt,dt,ht,bt):U.copyTexSubImage2D(kt,z,pt,Ht,re+In,Bt,dt,ht,bt);Et.bindFramebuffer(U.READ_FRAMEBUFFER,null),Et.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ye?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(kt,z,pt,Ht,re,ht,bt,Nt,Re,fe,le.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(kt,z,pt,Ht,re,ht,bt,Nt,Re,le.data):U.texSubImage3D(kt,z,pt,Ht,re,ht,bt,Nt,Re,fe,le):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,pt,Ht,ht,bt,Re,fe,le.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,pt,Ht,le.width,le.height,Re,le.data):U.texSubImage2D(U.TEXTURE_2D,z,pt,Ht,ht,bt,Re,fe,le);U.pixelStorei(U.UNPACK_ROW_LENGTH,cn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,He),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ze),z===0&&O.generateMipmaps&&U.generateMipmap(kt),Et.unbindTexture()},this.copyTextureToTexture3D=function(b,O,q=null,$=null,z=0){return b.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,b=arguments[2],O=arguments[3],z=arguments[4]||0),_o('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,q,$,z)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Et.unbindTexture()},this.resetState=function(){R=0,E=0,C=null,Et.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=ve._getDrawingBufferColorSpace(t),n.unpackColorSpace=ve._getUnpackColorSpace()}}class va{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(t),this.density=n}clone(){return new va(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wm extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class nf extends ao{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ts=new N,Es=new N,Xl=new Le,mo=new Gc,as=new Cs,ur=new N,Yl=new N;class Xm extends Xe{constructor(t=new en,n=new nf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,e=[0];for(let o=1,s=n.count;o<s;o++)Ts.fromBufferAttribute(n,o-1),Es.fromBufferAttribute(n,o),e[o]=e[o-1],e[o]+=Ts.distanceTo(Es);t.setAttribute("lineDistance",new Pe(e,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const e=this.geometry,o=this.matrixWorld,s=t.params.Line.threshold,r=e.drawRange;if(e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere),as.applyMatrix4(o),as.radius+=s,t.ray.intersectsSphere(as)===!1)return;Xl.copy(o).invert(),mo.copy(t.ray).applyMatrix4(Xl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,f=this.isLineSegments?2:1,c=e.index,h=e.attributes.position;if(c!==null){const u=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let _=u,m=g-1;_<m;_+=f){const p=c.getX(_),T=c.getX(_+1),w=ls(this,t,mo,l,p,T);w&&n.push(w)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(u),p=ls(this,t,mo,l,_,m);p&&n.push(p)}}else{const u=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=u,m=g-1;_<m;_+=f){const p=ls(this,t,mo,l,_,_+1);p&&n.push(p)}if(this.isLineLoop){const _=ls(this,t,mo,l,g-1,u);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const o=n[e[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ls(i,t,n,e,o,s){const r=i.geometry.attributes.position;if(Ts.fromBufferAttribute(r,o),Es.fromBufferAttribute(r,s),n.distanceSqToSegment(Ts,Es,ur,Yl)>e)return;ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ur);if(!(l<t.near||l>t.far))return{distance:l,point:Yl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class se extends rn{constructor(t,n,e,o,s,r,a,l,f){super(t,n,e,o,s,r,a,l,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const e=this.getUtoTmapping(t);return this.getPoint(e,n)}getPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return n}getSpacedPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPointAt(e/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let e,o=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)e=this.getPoint(r/t),s+=e.distanceTo(o),n.push(s),o=e;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const e=this.getLengths();let o=0;const s=e.length;let r;n?r=n:r=t*e[s-1];let a=0,l=s-1,f;for(;a<=l;)if(o=Math.floor(a+(l-a)/2),f=e[o]-r,f<0)a=o+1;else if(f>0)l=o-1;else{l=o;break}if(o=l,e[o]===r)return o/(s-1);const c=e[o],h=e[o+1]-c,u=(r-c)/h;return(o+u)/(s-1)}getTangent(t,n){let o=t-1e-4,s=t+1e-4;o<0&&(o=0),s>1&&(s=1);const r=this.getPoint(o),a=this.getPoint(s),l=n||(r.isVector2?new zt:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,n){const e=this.getUtoTmapping(t);return this.getTangent(e,n)}computeFrenetFrames(t,n){const e=new N,o=[],s=[],r=[],a=new N,l=new Le;for(let u=0;u<=t;u++){const g=u/t;o[u]=this.getTangentAt(g,new N)}s[0]=new N,r[0]=new N;let f=Number.MAX_VALUE;const c=Math.abs(o[0].x),d=Math.abs(o[0].y),h=Math.abs(o[0].z);c<=f&&(f=c,e.set(1,0,0)),d<=f&&(f=d,e.set(0,1,0)),h<=f&&e.set(0,0,1),a.crossVectors(o[0],e).normalize(),s[0].crossVectors(o[0],a),r[0].crossVectors(o[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(o[u-1],o[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ke(o[u-1].dot(o[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,g))}r[u].crossVectors(o[u],s[u])}if(n===!0){let u=Math.acos(Ke(s[0].dot(s[t]),-1,1));u/=t,o[0].dot(a.crossVectors(s[0],s[t]))>0&&(u=-u);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(o[g],u*g)),r[g].crossVectors(o[g],s[g])}return{tangents:o,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wa extends zn{constructor(t=0,n=0,e=1,o=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=e,this.yRadius=o,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,n=new zt){const e=n,o=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(r?s=0:s=o),this.aClockwise===!0&&!r&&(s===o?s=-o:s=s-o);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),f=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,u=f-this.aY;l=h*c-u*d+this.aX,f=h*d+u*c+this.aY}return e.set(l,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ym extends wa{constructor(t,n,e,o,s,r){super(t,n,e,e,o,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ma(){let i=0,t=0,n=0,e=0;function o(s,r,a,l){i=s,t=a,n=-3*s+3*r-2*a-l,e=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,f){o(r,a,f*(a-s),f*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,f,c,d){let h=(r-s)/f-(a-s)/(f+c)+(a-r)/c,u=(a-r)/c-(l-r)/(c+d)+(l-a)/d;h*=c,u*=c,o(r,a,h,u)},calc:function(s){const r=s*s,a=r*s;return i+t*s+n*r+e*a}}}const cs=new N,pr=new Ma,mr=new Ma,gr=new Ma;class Zm extends zn{constructor(t=[],n=!1,e="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=e,this.tension=o}getPoint(t,n=new N){const e=n,o=this.points,s=o.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let f,c;this.closed||a>0?f=o[(a-1)%s]:(cs.subVectors(o[0],o[1]).add(o[0]),f=cs);const d=o[a%s],h=o[(a+1)%s];if(this.closed||a+2<s?c=o[(a+2)%s]:(cs.subVectors(o[s-1],o[s-2]).add(o[s-1]),c=cs),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(f.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(h),u),m=Math.pow(h.distanceToSquared(c),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),pr.initNonuniformCatmullRom(f.x,d.x,h.x,c.x,g,_,m),mr.initNonuniformCatmullRom(f.y,d.y,h.y,c.y,g,_,m),gr.initNonuniformCatmullRom(f.z,d.z,h.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(pr.initCatmullRom(f.x,d.x,h.x,c.x,this.tension),mr.initCatmullRom(f.y,d.y,h.y,c.y,this.tension),gr.initCatmullRom(f.z,d.z,h.z,c.z,this.tension));return e.set(pr.calc(l),mr.calc(l),gr.calc(l)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const o=t.points[n];this.points.push(new N().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zl(i,t,n,e,o){const s=(e-t)*.5,r=(o-n)*.5,a=i*i,l=i*a;return(2*n-2*e+s+r)*l+(-3*n+3*e-2*s-r)*a+s*i+n}function qm(i,t){const n=1-i;return n*n*t}function $m(i,t){return 2*(1-i)*i*t}function Km(i,t){return i*i*t}function So(i,t,n,e){return qm(i,t)+$m(i,n)+Km(i,e)}function Jm(i,t){const n=1-i;return n*n*n*t}function jm(i,t){const n=1-i;return 3*n*n*i*t}function Qm(i,t){return 3*(1-i)*i*i*t}function tg(i,t){return i*i*i*t}function yo(i,t,n,e,o){return Jm(i,t)+jm(i,n)+Qm(i,e)+tg(i,o)}class of extends zn{constructor(t=new zt,n=new zt,e=new zt,o=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=e,this.v3=o}getPoint(t,n=new zt){const e=n,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(yo(t,o.x,s.x,r.x,a.x),yo(t,o.y,s.y,r.y,a.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eg extends zn{constructor(t=new N,n=new N,e=new N,o=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=e,this.v3=o}getPoint(t,n=new N){const e=n,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(yo(t,o.x,s.x,r.x,a.x),yo(t,o.y,s.y,r.y,a.y),yo(t,o.z,s.z,r.z,a.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sf extends zn{constructor(t=new zt,n=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new zt){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new zt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ng extends zn{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends zn{constructor(t=new zt,n=new zt,e=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new zt){const e=n,o=this.v0,s=this.v1,r=this.v2;return e.set(So(t,o.x,s.x,r.x),So(t,o.y,s.y,r.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends zn{constructor(t=new N,n=new N,e=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new N){const e=n,o=this.v0,s=this.v1,r=this.v2;return e.set(So(t,o.x,s.x,r.x),So(t,o.y,s.y,r.y),So(t,o.z,s.z,r.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lf extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new zt){const e=n,o=this.points,s=(o.length-1)*t,r=Math.floor(s),a=s-r,l=o[r===0?r:r-1],f=o[r],c=o[r>o.length-2?o.length-1:r+1],d=o[r>o.length-3?o.length-1:r+2];return e.set(Zl(a,l.x,f.x,c.x,d.x),Zl(a,l.y,f.y,c.y,d.y)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const o=t.points[n];this.points.push(new zt().fromArray(o))}return this}}var ql=Object.freeze({__proto__:null,ArcCurve:Ym,CatmullRomCurve3:Zm,CubicBezierCurve:of,CubicBezierCurve3:eg,EllipseCurve:wa,LineCurve:sf,LineCurve3:ng,QuadraticBezierCurve:rf,QuadraticBezierCurve3:af,SplineCurve:lf});class ig extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const e=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[e](n,t))}return this}getPoint(t,n){const e=t*this.getLength(),o=this.getCurveLengths();let s=0;for(;s<o.length;){if(o[s]>=e){const r=o[s]-e,a=this.curves[s],l=a.getLength(),f=l===0?0:1-r/l;return a.getPointAt(f,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let e=0,o=this.curves.length;e<o;e++)n+=this.curves[e].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let e;for(let o=0,s=this.curves;o<s.length;o++){const r=s[o],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let f=0;f<l.length;f++){const c=l[f];e&&e.equals(c)||(n.push(c),e=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,e=this.curves.length;n<e;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const o=t.curves[n];this.curves.push(new ql[o.type]().fromJSON(o))}return this}}class $l extends ig{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,e=t.length;n<e;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const e=new sf(this.currentPoint.clone(),new zt(t,n));return this.curves.push(e),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,e,o){const s=new rf(this.currentPoint.clone(),new zt(t,n),new zt(e,o));return this.curves.push(s),this.currentPoint.set(e,o),this}bezierCurveTo(t,n,e,o,s,r){const a=new of(this.currentPoint.clone(),new zt(t,n),new zt(e,o),new zt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),e=new lf(n);return this.curves.push(e),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,e,o,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,n+l,e,o,s,r),this}absarc(t,n,e,o,s,r){return this.absellipse(t,n,e,e,o,s,r),this}ellipse(t,n,e,o,s,r,a,l){const f=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+f,n+c,e,o,s,r,a,l),this}absellipse(t,n,e,o,s,r,a,l){const f=new wa(t,n,e,o,s,r,a,l);if(this.curves.length>0){const d=f.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(f);const c=f.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yn extends en{constructor(t=1,n=32,e=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:e,thetaLength:o},n=Math.max(3,n);const s=[],r=[],a=[],l=[],f=new N,c=new zt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const u=e+d/n*o;f.x=t*Math.cos(u),f.y=t*Math.sin(u),r.push(f.x,f.y,f.z),a.push(0,0,1),c.x=(r[h]/t+1)/2,c.y=(r[h+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class it extends en{constructor(t=1,n=1,e=1,o=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:e,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const f=this;o=Math.floor(o),s=Math.floor(s);const c=[],d=[],h=[],u=[];let g=0;const _=[],m=e/2;let p=0;T(),r===!1&&(t>0&&w(!0),n>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function T(){const v=new N,I=new N;let R=0;const E=(n-t)/e;for(let C=0;C<=s;C++){const S=[],M=C/s,P=M*(n-t)+t;for(let B=0;B<=o;B++){const k=B/o,K=k*l+a,Z=Math.sin(K),V=Math.cos(K);I.x=P*Z,I.y=-M*e+m,I.z=P*V,d.push(I.x,I.y,I.z),v.set(Z,E,V).normalize(),h.push(v.x,v.y,v.z),u.push(k,1-M),S.push(g++)}_.push(S)}for(let C=0;C<o;C++)for(let S=0;S<s;S++){const M=_[S][C],P=_[S+1][C],B=_[S+1][C+1],k=_[S][C+1];(t>0||S!==0)&&(c.push(M,P,k),R+=3),(n>0||S!==s-1)&&(c.push(P,B,k),R+=3)}f.addGroup(p,R,0),p+=R}function w(v){const I=g,R=new zt,E=new N;let C=0;const S=v===!0?t:n,M=v===!0?1:-1;for(let B=1;B<=o;B++)d.push(0,m*M,0),h.push(0,M,0),u.push(.5,.5),g++;const P=g;for(let B=0;B<=o;B++){const K=B/o*l+a,Z=Math.cos(K),V=Math.sin(K);E.x=S*V,E.y=m*M,E.z=S*Z,d.push(E.x,E.y,E.z),h.push(0,M,0),R.x=Z*.5+.5,R.y=V*.5*M+.5,u.push(R.x,R.y),g++}for(let B=0;B<o;B++){const k=I+B,K=P+B;v===!0?c.push(K,K+1,k):c.push(K+1,K,k),C+=3}f.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Je extends it{constructor(t=1,n=1,e=32,o=1,s=!1,r=0,a=Math.PI*2){super(0,t,n,e,o,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:e,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Je(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sa extends en{constructor(t=[],n=[],e=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:e,detail:o};const s=[],r=[];a(o),f(e),c(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(r,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const w=new N,v=new N,I=new N;for(let R=0;R<n.length;R+=3)u(n[R+0],w),u(n[R+1],v),u(n[R+2],I),l(w,v,I,T)}function l(T,w,v,I){const R=I+1,E=[];for(let C=0;C<=R;C++){E[C]=[];const S=T.clone().lerp(v,C/R),M=w.clone().lerp(v,C/R),P=R-C;for(let B=0;B<=P;B++)B===0&&C===R?E[C][B]=S:E[C][B]=S.clone().lerp(M,B/P)}for(let C=0;C<R;C++)for(let S=0;S<2*(R-C)-1;S++){const M=Math.floor(S/2);S%2===0?(h(E[C][M+1]),h(E[C+1][M]),h(E[C][M])):(h(E[C][M+1]),h(E[C+1][M+1]),h(E[C+1][M]))}}function f(T){const w=new N;for(let v=0;v<s.length;v+=3)w.x=s[v+0],w.y=s[v+1],w.z=s[v+2],w.normalize().multiplyScalar(T),s[v+0]=w.x,s[v+1]=w.y,s[v+2]=w.z}function c(){const T=new N;for(let w=0;w<s.length;w+=3){T.x=s[w+0],T.y=s[w+1],T.z=s[w+2];const v=m(T)/2/Math.PI+.5,I=p(T)/Math.PI+.5;r.push(v,1-I)}g(),d()}function d(){for(let T=0;T<r.length;T+=6){const w=r[T+0],v=r[T+2],I=r[T+4],R=Math.max(w,v,I),E=Math.min(w,v,I);R>.9&&E<.1&&(w<.2&&(r[T+0]+=1),v<.2&&(r[T+2]+=1),I<.2&&(r[T+4]+=1))}}function h(T){s.push(T.x,T.y,T.z)}function u(T,w){const v=T*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){const T=new N,w=new N,v=new N,I=new N,R=new zt,E=new zt,C=new zt;for(let S=0,M=0;S<s.length;S+=9,M+=6){T.set(s[S+0],s[S+1],s[S+2]),w.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),R.set(r[M+0],r[M+1]),E.set(r[M+2],r[M+3]),C.set(r[M+4],r[M+5]),I.copy(T).add(w).add(v).divideScalar(3);const P=m(I);_(R,M+0,T,P),_(E,M+2,w,P),_(C,M+4,v,P)}}function _(T,w,v,I){I<0&&T.x===1&&(r[w]=T.x-1),v.x===0&&v.z===0&&(r[w]=I/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.vertices,t.indices,t.radius,t.details)}}class ri extends Sa{constructor(t=1,n=0){const e=(1+Math.sqrt(5))/2,o=1/e,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-e,0,-o,e,0,o,-e,0,o,e,-o,-e,0,-o,e,0,o,-e,0,o,e,0,-e,0,-o,e,0,-o,-e,0,o,e,0,o],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new ri(t.radius,t.detail)}}class cf extends $l{constructor(t){super(t),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let e=0,o=this.holes.length;e<o;e++)n[e]=this.holes[e].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,e=this.holes.length;n<e;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const o=t.holes[n];this.holes.push(new $l().fromJSON(o))}return this}}const og={triangulate:function(i,t,n=2){const e=t&&t.length,o=e?t[0]*n:i.length;let s=ff(i,0,o,n,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,f,c,d,h,u;if(e&&(s=cg(i,t,s,n)),i.length>80*n){a=f=i[0],l=c=i[1];for(let g=n;g<o;g+=n)d=i[g],h=i[g+1],d<a&&(a=d),h<l&&(l=h),d>f&&(f=d),h>c&&(c=h);u=Math.max(f-a,c-l),u=u!==0?32767/u:0}return Co(s,r,n,a,l,u,0),r}};function ff(i,t,n,e,o){let s,r;if(o===wg(i,t,n,e)>0)for(s=t;s<n;s+=e)r=Kl(s,i[s],i[s+1],r);else for(s=n-e;s>=t;s-=e)r=Kl(s,i[s],i[s+1],r);return r&&Ls(r,r.next)&&(Lo(r),r=r.next),r}function Ti(i,t){if(!i)return i;t||(t=i);let n=i,e;do if(e=!1,!n.steiner&&(Ls(n,n.next)||Ue(n.prev,n,n.next)===0)){if(Lo(n),n=t=n.prev,n===n.next)break;e=!0}else n=n.next;while(e||n!==t);return t}function Co(i,t,n,e,o,s,r){if(!i)return;!r&&s&&pg(i,e,o,s);let a=i,l,f;for(;i.prev!==i.next;){if(l=i.prev,f=i.next,s?rg(i,e,o,s):sg(i)){t.push(l.i/n|0),t.push(i.i/n|0),t.push(f.i/n|0),Lo(i),i=f.next,a=f.next;continue}if(i=f,i===a){r?r===1?(i=ag(Ti(i),t,n),Co(i,t,n,e,o,s,2)):r===2&&lg(i,t,n,e,o,s):Co(Ti(i),t,n,e,o,s,1);break}}}function sg(i){const t=i.prev,n=i,e=i.next;if(Ue(t,n,e)>=0)return!1;const o=t.x,s=n.x,r=e.x,a=t.y,l=n.y,f=e.y,c=o<s?o<r?o:r:s<r?s:r,d=a<l?a<f?a:f:l<f?l:f,h=o>s?o>r?o:r:s>r?s:r,u=a>l?a>f?a:f:l>f?l:f;let g=e.next;for(;g!==t;){if(g.x>=c&&g.x<=h&&g.y>=d&&g.y<=u&&Yi(o,a,s,l,r,f,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rg(i,t,n,e){const o=i.prev,s=i,r=i.next;if(Ue(o,s,r)>=0)return!1;const a=o.x,l=s.x,f=r.x,c=o.y,d=s.y,h=r.y,u=a<l?a<f?a:f:l<f?l:f,g=c<d?c<h?c:h:d<h?d:h,_=a>l?a>f?a:f:l>f?l:f,m=c>d?c>h?c:h:d>h?d:h,p=ra(u,g,t,n,e),T=ra(_,m,t,n,e);let w=i.prevZ,v=i.nextZ;for(;w&&w.z>=p&&v&&v.z<=T;){if(w.x>=u&&w.x<=_&&w.y>=g&&w.y<=m&&w!==o&&w!==r&&Yi(a,c,l,d,f,h,w.x,w.y)&&Ue(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==o&&v!==r&&Yi(a,c,l,d,f,h,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=u&&w.x<=_&&w.y>=g&&w.y<=m&&w!==o&&w!==r&&Yi(a,c,l,d,f,h,w.x,w.y)&&Ue(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=T;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==o&&v!==r&&Yi(a,c,l,d,f,h,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ag(i,t,n){let e=i;do{const o=e.prev,s=e.next.next;!Ls(o,s)&&hf(o,e,e.next,s)&&Po(o,s)&&Po(s,o)&&(t.push(o.i/n|0),t.push(e.i/n|0),t.push(s.i/n|0),Lo(e),Lo(e.next),e=i=s),e=e.next}while(e!==i);return Ti(e)}function lg(i,t,n,e,o,s){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&xg(r,a)){let l=df(r,a);r=Ti(r,r.next),l=Ti(l,l.next),Co(r,t,n,e,o,s,0),Co(l,t,n,e,o,s,0);return}a=a.next}r=r.next}while(r!==i)}function cg(i,t,n,e){const o=[];let s,r,a,l,f;for(s=0,r=t.length;s<r;s++)a=t[s]*e,l=s<r-1?t[s+1]*e:i.length,f=ff(i,a,l,e,!1),f===f.next&&(f.steiner=!0),o.push(gg(f));for(o.sort(fg),s=0;s<o.length;s++)n=hg(o[s],n);return n}function fg(i,t){return i.x-t.x}function hg(i,t){const n=dg(i,t);if(!n)return t;const e=df(n,i);return Ti(e,e.next),Ti(n,n.next)}function dg(i,t){let n=t,e=-1/0,o;const s=i.x,r=i.y;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>e&&(e=h,o=n.x<n.next.x?n:n.next,h===s))return o}n=n.next}while(n!==t);if(!o)return null;const a=o,l=o.x,f=o.y;let c=1/0,d;n=o;do s>=n.x&&n.x>=l&&s!==n.x&&Yi(r<f?s:e,r,l,f,r<f?e:s,r,n.x,n.y)&&(d=Math.abs(r-n.y)/(s-n.x),Po(n,i)&&(d<c||d===c&&(n.x>o.x||n.x===o.x&&ug(o,n)))&&(o=n,c=d)),n=n.next;while(n!==a);return o}function ug(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function pg(i,t,n,e){let o=i;do o.z===0&&(o.z=ra(o.x,o.y,t,n,e)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,mg(o)}function mg(i){let t,n,e,o,s,r,a,l,f=1;do{for(n=i,i=null,s=null,r=0;n;){for(r++,e=n,a=0,t=0;t<f&&(a++,e=e.nextZ,!!e);t++);for(l=f;a>0||l>0&&e;)a!==0&&(l===0||!e||n.z<=e.z)?(o=n,n=n.nextZ,a--):(o=e,e=e.nextZ,l--),s?s.nextZ=o:i=o,o.prevZ=s,s=o;n=e}s.nextZ=null,f*=2}while(r>1);return i}function ra(i,t,n,e,o){return i=(i-n)*o|0,t=(t-e)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gg(i){let t=i,n=i;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==i);return n}function Yi(i,t,n,e,o,s,r,a){return(o-r)*(t-a)>=(i-r)*(s-a)&&(i-r)*(e-a)>=(n-r)*(t-a)&&(n-r)*(s-a)>=(o-r)*(e-a)}function xg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_g(i,t)&&(Po(i,t)&&Po(t,i)&&vg(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Ls(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,n){return(t.y-i.y)*(n.x-t.x)-(t.x-i.x)*(n.y-t.y)}function Ls(i,t){return i.x===t.x&&i.y===t.y}function hf(i,t,n,e){const o=hs(Ue(i,t,n)),s=hs(Ue(i,t,e)),r=hs(Ue(n,e,i)),a=hs(Ue(n,e,t));return!!(o!==s&&r!==a||o===0&&fs(i,n,t)||s===0&&fs(i,e,t)||r===0&&fs(n,i,e)||a===0&&fs(n,t,e))}function fs(i,t,n){return t.x<=Math.max(i.x,n.x)&&t.x>=Math.min(i.x,n.x)&&t.y<=Math.max(i.y,n.y)&&t.y>=Math.min(i.y,n.y)}function hs(i){return i>0?1:i<0?-1:0}function _g(i,t){let n=i;do{if(n.i!==i.i&&n.next.i!==i.i&&n.i!==t.i&&n.next.i!==t.i&&hf(n,n.next,i,t))return!0;n=n.next}while(n!==i);return!1}function Po(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function vg(i,t){let n=i,e=!1;const o=(i.x+t.x)/2,s=(i.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&o<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(e=!e),n=n.next;while(n!==i);return e}function df(i,t){const n=new aa(i.i,i.x,i.y),e=new aa(t.i,t.x,t.y),o=i.next,s=t.prev;return i.next=t,t.prev=i,n.next=o,o.prev=n,e.next=n,n.prev=e,s.next=e,e.prev=s,e}function Kl(i,t,n,e){const o=new aa(i,t,n);return e?(o.next=e.next,o.prev=e,e.next.prev=o,e.next=o):(o.prev=o,o.next=o),o}function Lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function aa(i,t,n){this.i=i,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wg(i,t,n,e){let o=0;for(let s=t,r=n-e;s<n;s+=e)o+=(i[r]-i[s])*(i[s+1]+i[r+1]),r=s;return o}class bo{static area(t){const n=t.length;let e=0;for(let o=n-1,s=0;s<n;o=s++)e+=t[o].x*t[s].y-t[s].x*t[o].y;return e*.5}static isClockWise(t){return bo.area(t)<0}static triangulateShape(t,n){const e=[],o=[],s=[];Jl(t),jl(e,t);let r=t.length;n.forEach(Jl);for(let l=0;l<n.length;l++)o.push(r),r+=n[l].length,jl(e,n[l]);const a=og.triangulate(e,o);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Jl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jl(i,t){for(let n=0;n<t.length;n++)i.push(t[n].x),i.push(t[n].y)}class ya extends en{constructor(t=new cf([new zt(0,.5),new zt(-.5,-.5),new zt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const e=[],o=[],s=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)f(t);else for(let c=0;c<t.length;c++)f(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(e),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2));function f(c){const d=o.length/3,h=c.extractPoints(n);let u=h.shape;const g=h.holes;bo.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];bo.isClockWise(T)===!0&&(g[m]=T.reverse())}const _=bo.triangulateShape(u,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];u=u.concat(T)}for(let m=0,p=u.length;m<p;m++){const T=u[m];o.push(T.x,T.y,0),s.push(0,0,1),r.push(T.x,T.y)}for(let m=0,p=_.length;m<p;m++){const T=_[m],w=T[0]+d,v=T[1]+d,I=T[2]+d;e.push(w,v,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return Mg(n,t)}static fromJSON(t,n){const e=[];for(let o=0,s=t.shapes.length;o<s;o++){const r=n[t.shapes[o]];e.push(r)}return new ya(e,t.curveSegments)}}function Mg(i,t){if(t.shapes=[],Array.isArray(i))for(let n=0,e=i.length;n<e;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t}class Fe extends en{constructor(t=1,n=32,e=16,o=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:e,phiStart:o,phiLength:s,thetaStart:r,thetaLength:a},n=Math.max(3,Math.floor(n)),e=Math.max(2,Math.floor(e));const l=Math.min(r+a,Math.PI);let f=0;const c=[],d=new N,h=new N,u=[],g=[],_=[],m=[];for(let p=0;p<=e;p++){const T=[],w=p/e;let v=0;p===0&&r===0?v=.5/n:p===e&&l===Math.PI&&(v=-.5/n);for(let I=0;I<=n;I++){const R=I/n;d.x=-t*Math.cos(o+R*s)*Math.sin(r+w*a),d.y=t*Math.cos(r+w*a),d.z=t*Math.sin(o+R*s)*Math.sin(r+w*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(R+v,1-w),T.push(f++)}c.push(T)}for(let p=0;p<e;p++)for(let T=0;T<n;T++){const w=c[p][T+1],v=c[p][T],I=c[p+1][T],R=c[p+1][T+1];(p!==0||r>0)&&u.push(w,v,R),(p!==e-1||l<Math.PI)&&u.push(v,I,R)}this.setIndex(u),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class We extends en{constructor(t=1,n=.4,e=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:e,tubularSegments:o,arc:s},e=Math.floor(e),o=Math.floor(o);const r=[],a=[],l=[],f=[],c=new N,d=new N,h=new N;for(let u=0;u<=e;u++)for(let g=0;g<=o;g++){const _=g/o*s,m=u/e*Math.PI*2;d.x=(t+n*Math.cos(m))*Math.cos(_),d.y=(t+n*Math.cos(m))*Math.sin(_),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),h.subVectors(d,c).normalize(),l.push(h.x,h.y,h.z),f.push(g/o),f.push(u/e)}for(let u=1;u<=e;u++)for(let g=1;g<=o;g++){const _=(o+1)*u+g-1,m=(o+1)*(u-1)+g-1,p=(o+1)*(u-1)+g,T=(o+1)*u+g;r.push(_,m,T),r.push(m,p,T)}this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class D extends ao{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ba extends Xe{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Sg extends ba{constructor(t,n,e){super(t,e),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const xr=new Le,Ql=new N,tc=new N;class uf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,e=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ql),tc.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(tc),n.updateMatrixWorld(),xr.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr),e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ec=new Le,go=new N,_r=new N;class yg extends uf{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,n=0){const e=this.camera,o=this.matrix,s=t.distance||e.far;s!==e.far&&(e.far=s,e.updateProjectionMatrix()),go.setFromMatrixPosition(t.matrixWorld),e.position.copy(go),_r.copy(e.position),_r.add(this._cubeDirections[n]),e.up.copy(this._cubeUps[n]),e.lookAt(_r),e.updateMatrixWorld(),o.makeTranslation(-go.x,-go.y,-go.z),ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}}class Me extends ba{constructor(t,n,e=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=e,this.decay=o,this.shadow=new yg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bg extends uf{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tg extends ba{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Eg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=nc();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function nc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);const To=new Set,Ag=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);function Rg(){window.addEventListener("keydown",i=>{To.add(i.code),Ag.has(i.code)&&i.preventDefault()}),window.addEventListener("keyup",i=>{To.delete(i.code)}),window.addEventListener("blur",()=>To.clear())}function ic(i,t){let n=0;for(const e of i)To.has(e)&&(n-=1);for(const e of t)To.has(e)&&(n+=1);return Math.max(-1,Math.min(1,n))}const Nn=.28,oc=1.75,sc=.24,ds=.015;class Cg{constructor(){xe(this,"boxes",[])}add(t){return this.boxes.push(t),t}remove(t){const n=this.boxes.indexOf(t);n>=0&&this.boxes.splice(n,1)}move(t,n,e,o,s){const r=this.pushOut(t,n,s);t=r.x,n=r.z;const a=t+e;this.blocked(a,n,s)||(t=a);const l=n+o;return this.blocked(t,l,s)||(n=l),{x:t,z:n}}blocked(t,n,e){return this.hits(t,n,e,Nn)}hits(t,n,e,o){const s=e+oc;for(const r of this.boxes)if(!(r.maxY<=e+.04)&&!(r.minY>=s)&&!(r.maxY<=e+sc)&&rc(t,n,o,r))return!0;return!1}pushOut(t,n,e){const o=e+oc;for(let s=0;s<4;s++){let r=!1;for(const a of this.boxes){if(a.maxY<=e+.04||a.minY>=o||a.maxY<=e+sc||!rc(t,n,Nn,a))continue;r=!0;const l=t+Nn-a.minX,f=a.maxX-(t-Nn),c=n+Nn-a.minZ,d=a.maxZ-(n-Nn),h=Math.min(l,f,c,d);h>.6||(h===l?t=a.minX-Nn-ds:h===f?t=a.maxX+Nn+ds:h===c?n=a.minZ-Nn-ds:n=a.maxZ+Nn+ds)}if(!r)break}return{x:t,z:n}}}function rc(i,t,n,e){const o=lc(i,e.minX,e.maxX),s=lc(t,e.minZ,e.maxZ),r=i-o,a=t-s;return r*r+a*a<n*n}function ac(i,t,n,e=0){return i>=n.minX-e&&i<=n.maxX+e&&t>=n.minZ-e&&t<=n.maxZ+e}function lc(i,t,n){return Math.max(t,Math.min(n,i))}const us={x:0,z:0};class Pg{constructor(){xe(this,"items",[]);xe(this,"current",null)}add(t){return this.items.push(t),t}update(t,n){const e=t.lookFlat();us.x=e.x,us.z=e.z;let o=null,s=1/0;for(const r of this.items){const a=r.x-t.x,l=r.z-t.z,f=Math.hypot(a,l);f>r.radius||f>=s||(f<.001?1:(a*us.x+l*us.z)/f)<.2||this.occluded(t.x,t.z,r.x,r.z,n)||(o=r,s=f)}this.current=o}prompt(){if(!this.current)return"";const t=this.current.prompt;return typeof t=="function"?t():t}use(){var t;(t=this.current)==null||t.onInteract()}occluded(t,n,e,o,s){const r=[[t*.65+e*.35,n*.65+o*.35],[t*.35+e*.65,n*.35+o*.65]];for(const a of s.boxes)if(!(a.maxY<1.1)&&!ac(e,o,a,.05)){for(const[l,f]of r)if(ac(l,f,a))return!0}return!1}}class Lg{constructor(){xe(this,"text","");xe(this,"timer",0)}show(t,n=3.6){this.text=t,this.timer=n}update(t){this.timer<=0||(this.timer-=t,this.timer<=0&&(this.text=""))}}const Ig=0,Dg=.15;function pf(i,t){return t>=-3.5&&t<=3.5&&i>=-55&&i<=55||i>=13.5&&i<=18.5&&t>=3.5&&t<=40||i>=-16.5&&i<=-11.5&&t>=-40&&t<=-3.5}function cc(i,t){return pf(i,t)?Ig:Dg}function Ug(i,t){return i>=-4.5&&i<=4.5&&t>=12.8&&t<=22?"Sun Heights — Entrance Lobby":i>=21.8&&i<=33&&t>=9&&t<=22?"FamilyKonbini — Store":i>=1.5&&i<=10.5&&t>=7.5&&t<=18?"Menya Tokyo — Ramen Bar":i>=-3&&i<=10.5&&t>=24&&t<=36?"Kissaten Mame — Cafe":i>=-8.5&&i<=8&&t>=-34&&t<=-12?"Sakura Pocket Park (桜公園)":i>=4.5&&i<=13.5&&t>=16&&t<=24||i>=-5&&i<=13.5&&t>=21&&t<=24?"Rojiura — Residential Alley":i>=10.5&&i<=21.5&&t>=3.5&&t<=42?"Kita-gai — Shopping Street":i>=-19.5&&i<=-8.5&&t>=-42&&t<=-3.5?"Minami-dori — Residential St":Math.abs(t)<=5?i>=11&&i<=21?"Chuo-dori — North Crosswalk":i>=-19&&i<=-9?"Chuo-dori — South Crosswalk":"Chuo-dori — Central Avenue":"Tokyo — Residential District"}const mf=[{id:"b-sunheights",name:"Sun Heights Mansion",x:0,z:17.5,w:9,d:10,floors:4,wall:"#262d38",trim:"#3a4454",balcony:"#404c5e",bay:3,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"lobby",enterable:!0,doorFace:"s",doorAlong:0,seed:101},{id:"b-ramen",name:"Menya Tokyo (Ramen)",x:6,z:12.5,w:7,d:9,floors:3,wall:"#2b2622",trim:"#423a32",balcony:"#383028",bay:2,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2],ground:"ramen",enterable:!0,doorFace:"s",doorAlong:.2,sign:{text:"らーめん 麺処",sub:"MENYA TOKYO",bg:"#8a1f18",fg:"#ffebc4"},awning:"#8a1f18",seed:202},{id:"b-konbini",name:"FamilyKonbini Store",x:27,z:15.5,w:11,d:13,floors:3,wall:"#282d34",trim:"#3c4550",balcony:"#333b47",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2],ground:"konbini",enterable:!0,doorFace:"w",doorAlong:0,sign:{text:"CONVENIENCE STORE",sub:"24H コンビニエンス",bg:"#0d6b42",fg:"#ffffff"},awning:"#0d6b42",seed:303},{id:"b-cafe",name:"Cafe Mame",x:3.5,z:30,w:11,d:10,floors:3,wall:"#2a2723",trim:"#453c33",balcony:"#3e352b",bay:3,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"cafe",enterable:!0,doorFace:"e",doorAlong:0,sign:{text:"喫茶 TOKYO CAFE",sub:"ROASTERY & BEANS",bg:"#4a2f1c",fg:"#f4ebd8"},awning:"#4a2f1c",seed:404},{id:"b-ne-apartments",name:"Mori Building",x:27,z:32,w:11,d:14,floors:5,wall:"#232a35",trim:"#384355",balcony:"#2e3848",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"w",doorAlong:0,sign:{text:"森クリニック / 薬局",sub:"PHARMACY & CLINIC",bg:"#1c4a5c",fg:"#e8f4f8"},seed:505},{id:"b-nw-mansion",name:"Chuo Grand Residence",x:-24,z:15.5,w:22,d:13,floors:5,wall:"#222830",trim:"#343e4c",balcony:"#2b3340",bay:6,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"s",doorAlong:-.3,sign:{text:"白金クリーニング",sub:"DRY CLEANERS & LAUNDRY",bg:"#25447a",fg:"#eef4ff"},awning:"#25447a",seed:606},{id:"b-fe-north",name:"Higashi Heights",x:43,z:15.5,w:15,d:13,floors:4,wall:"#26292e",trim:"#3a3f47",balcony:"#31363e",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,sign:{text:"書店 本屋",sub:"BOOKSTORE & CAFE",bg:"#6b301e",fg:"#fbece2"},seed:707},{id:"b-sw-commercial",name:"Minami Square",x:-27,z:-15.5,w:15,d:13,floors:4,wall:"#2c2925",trim:"#443f38",balcony:"#37322c",bay:4,front:"n",open:["n","e"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,sign:{text:"和食 酒処 居酒屋",sub:"TRADITIONAL IZAKAYA",bg:"#8a331a",fg:"#ffeeda"},awning:"#8a331a",seed:808},{id:"b-sw-houses",name:"Minami Residences",x:-27,z:-32,w:15,d:14,floors:3,wall:"#282b2d",trim:"#3c4145",balcony:"#32363a",bay:4,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"home",enterable:!1,doorFace:"e",doorAlong:0,seed:909},{id:"b-se-mansion",name:"Parkside Court",x:23,z:-15.5,w:22,d:13,floors:5,wall:"#212630",trim:"#323a48",balcony:"#29303c",bay:6,front:"n",open:["n"],balconyFaces:["n","w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"n",doorAlong:.2,sign:{text:"パークサイド歯科",sub:"DENTAL CLINIC",bg:"#1f5263",fg:"#e8f7fa"},seed:1010},{id:"b-fe-south",name:"Taito Mansion",x:43,z:-15.5,w:15,d:13,floors:4,wall:"#27292c",trim:"#3d4045",balcony:"#33363a",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1111},{id:"b-fw-north",name:"Nishi Heights",x:-44,z:15.5,w:14,d:13,floors:4,wall:"#242a32",trim:"#363f4b",balcony:"#2d3540",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,seed:1212},{id:"b-fw-south",name:"Nishi Court",x:-44,z:-15.5,w:14,d:13,floors:4,wall:"#2a2725",trim:"#403b38",balcony:"#35312e",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1313}],fc=3.65,Ng=18,Fg=24,hc=.0022;class Og{constructor(t,n,e){xe(this,"x");xe(this,"z");xe(this,"yaw");xe(this,"pitch",0);xe(this,"feetY");xe(this,"eye",1.62);xe(this,"seated",!1);xe(this,"vx",0);xe(this,"vz",0);xe(this,"forward",new N);xe(this,"right",new N);xe(this,"euler",new Ln(0,0,0,"YXZ"));xe(this,"quat",new ro);this.x=t,this.z=n,this.yaw=e,this.feetY=cc(t,n)}applyMouse(t,n){this.yaw-=t*hc,this.pitch-=n*hc,this.pitch=Math.max(-1.25,Math.min(1.25,this.pitch))}update(t,n,e){this.forward.set(0,0,-1),this.euler.set(0,this.yaw,0,"YXZ"),this.forward.applyEuler(this.euler),this.forward.y=0,this.forward.lengthSq()>1e-6&&this.forward.normalize(),this.right.set(-this.forward.z,0,this.forward.x);const o=n&&!this.seated?ic(["KeyS","ArrowDown"],["KeyW","ArrowUp"]):0,s=n&&!this.seated?ic(["KeyA","ArrowLeft"],["KeyD","ArrowRight"]):0;let r=this.forward.x*o+this.right.x*s,a=this.forward.z*o+this.right.z*s;const l=Math.hypot(r,a);l>1&&(r/=l,a/=l);const f=r*fc,c=a*fc,d=Math.hypot(f,c),h=Math.hypot(this.vx,this.vz),g=(d>h?Ng:Fg)*t,_=f-this.vx,m=c-this.vz,p=Math.hypot(_,m);p<=g?(this.vx=f,this.vz=c):(this.vx+=_/p*g,this.vz+=m/p*g),(!n||this.seated)&&(this.vx=0,this.vz=0);const T=this.vx*t,w=this.vz*t;if(Math.abs(T)>1e-5||Math.abs(w)>1e-5){const E=e.move(this.x,this.z,T,w,this.feetY);this.x=E.x,this.z=E.z}const v=cc(this.x,this.z),I=1-Math.exp(-14*t);this.feetY+=(v-this.feetY)*I;const R=this.seated?1.05:1.62;this.eye+=(R-this.eye)*(1-Math.exp(-8*t))}moving(){return Math.hypot(this.vx,this.vz)>.15}applyCamera(t){t.position.set(this.x,this.feetY+this.eye,this.z),t.rotation.order="YXZ",t.rotation.y=this.yaw,t.rotation.x=this.pitch,t.rotation.z=0}look(t){return this.euler.set(0,this.yaw,0,"YXZ"),this.quat.setFromEuler(this.euler),t.set(0,0,-1).applyQuaternion(this.quat)}lookFlat(){const t=this.look(this.forward);return{x:t.x,z:t.z}}}new D({vertexColors:!0,roughness:.86,metalness:.04});new Qt({vertexColors:!0,toneMapped:!1});new D({color:1054752,roughness:.08,metalness:.45,transparent:!0,opacity:.55,depthWrite:!1});const ze=new D({color:12044756,roughness:.06,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1,side:tn}),zg=new D({color:16777215,roughness:.42,metalness:.62}),Ie=new D({color:2764339,roughness:.4,metalness:.72}),Zn=new Qt({color:16769712,toneMapped:!1});function Bg(){const i=document.createElement("canvas");i.width=512,i.height=512;const t=i.getContext("2d"),n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");t.fillStyle="#161920",t.fillRect(0,0,512,512),e.fillStyle="#b8b8b8",e.fillRect(0,0,512,512);const o=t.getImageData(0,0,512,512),s=e.getImageData(0,0,512,512),r=o.data,a=s.data;for(let d=0;d<r.length;d+=4){const h=(Math.random()-.5)*18;r[d]=Math.max(10,Math.min(45,r[d]+h)),r[d+1]=Math.max(12,Math.min(48,r[d+1]+h)),r[d+2]=Math.max(16,Math.min(54,r[d+2]+h));const u=(Math.random()-.5)*25;a[d]=Math.max(120,Math.min(230,a[d]+u)),a[d+1]=a[d],a[d+2]=a[d]}t.putImageData(o,0,0),e.putImageData(s,0,0),t.fillStyle="rgba(8, 10, 14, 0.65)",e.fillStyle="rgb(24, 24, 24)";const l=[{x:140,y:160,rx:90,ry:45,rot:.2},{x:380,y:340,rx:110,ry:55,rot:-.3},{x:260,y:440,rx:70,ry:35,rot:.1},{x:100,y:420,rx:60,ry:30,rot:-.2},{x:420,y:120,rx:80,ry:40,rot:.4}];for(const d of l)t.beginPath(),t.ellipse(d.x,d.y,d.rx,d.ry,d.rot,0,Math.PI*2),t.fill(),e.beginPath(),e.ellipse(d.x,d.y,d.rx,d.ry,d.rot,0,Math.PI*2),e.fill();const f=new se(i);f.wrapS=Ne,f.wrapT=Ne,f.repeat.set(12,1.5),f.colorSpace=he;const c=new se(n);return c.wrapS=Ne,c.wrapT=Ne,c.repeat.set(12,1.5),{map:f,roughnessMap:c}}const dc=Bg(),kg=new D({map:dc.map,roughnessMap:dc.roughnessMap,roughness:.65,metalness:.22});function Gg(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");t.fillStyle="#2b3038",t.fillRect(0,0,256,256);const n=64;t.strokeStyle="#1b1e24",t.lineWidth=3;for(let o=0;o<256;o+=n)for(let s=0;s<256;s+=n){const r=Math.floor((Math.random()-.5)*12);t.fillStyle=`rgb(${43+r}, ${48+r}, ${56+r})`,t.fillRect(s+1.5,o+1.5,n-3,n-3),t.strokeRect(s,o,n,n)}const e=new se(i);return e.wrapS=Ne,e.wrapT=Ne,e.repeat.set(8,2),e.colorSpace=he,e}const Hg=Gg(),Vg=new D({map:Hg,color:13159892,roughness:.88,metalness:.04}),uc=new D({color:2368029,roughness:.92,metalness:.03}),Wg=new D({color:1583134,roughness:.96,metalness:0}),Xg=new D({color:3814444,roughness:.94,metalness:.02}),Eo=new D({color:14475496,roughness:.42,metalness:.02}),io=new D({color:13214539,roughness:.65,metalness:.05,emissive:4010002,emissiveIntensity:.2}),Ki=new D({color:4009245,roughness:.9,metalness:.02}),la=new D({color:3033648,roughness:.85,metalness:0}),gf=new D({color:14257826,roughness:.8,metalness:0});new D({color:14235689,emissive:12395541,emissiveIntensity:.85,roughness:.45});const Yg=new D({color:15263455,roughness:.22,metalness:.12}),Dt=new D({color:8555158,roughness:.28,metalness:.78}),pc=new D({color:3557470,roughness:.2,metalness:.85}),mc=new D({color:1318440,roughness:.05,metalness:.9,transparent:!0,opacity:.7}),Zg=new D({color:16079390,roughness:.35,metalness:.1}),qg=new D({color:15660282,roughness:.05,metalness:.95}),$g=new Qt({color:16770736,transparent:!0,opacity:.07,side:tn,depthWrite:!1,blending:wr}),gc=new Qt({color:14540253,transparent:!0,opacity:.25,depthWrite:!1}),yt=new Map;function Kg(i,t,n,e,o=512,s=160){const r=`${i}|${t}|${n}|${e??""}|${o}|${s}`,a=yt.get(r);if(a)return a;const l=document.createElement("canvas");l.width=o,l.height=s;const f=l.getContext("2d");f.fillStyle=t,f.fillRect(0,0,o,s),f.fillStyle=n,f.textAlign="center",f.textBaseline="middle";const c='"Yu Gothic UI", "Yu Gothic", Meiryo, "MS PGothic", sans-serif';e?(f.font=`700 ${Math.floor(s*.36)}px ${c}`,f.fillText(i,o/2,s*.38),f.font=`500 ${Math.floor(s*.2)}px ${c}`,f.fillText(e,o/2,s*.72)):(f.font=`700 ${Math.floor(s*.42)}px ${c}`,f.fillText(i,o/2,s/2));const d=new se(l);return d.colorSpace=he,d.anisotropy=4,yt.set(r,d),d}function Io(i,t,n,e,o=512,s=160){const r=Kg(i,t,n,e,o,s);return new Qt({map:r,toneMapped:!1})}function Jg(i){const t=`vend-${i}`,n=yt.get(t);if(n)return n;const e=[{bg:"#0e3d3a",head:"#f2a65a",a:"#d84a3a",b:"#2f6fed",c:"#f2d15a",label:"BOSS COFFEE"},{bg:"#3a1420",head:"#ff5a6a",a:"#7ad0c8",b:"#f2e27a",c:"#ffffff",label:"POCARI SWEAT"},{bg:"#14243f",head:"#7eb6ff",a:"#ff7a45",b:"#6d8",c:"#ffe08a",label:"GREEN TEA"}],o=e[i%e.length],s=document.createElement("canvas");s.width=256,s.height=512;const r=s.getContext("2d");r.fillStyle=o.bg,r.fillRect(0,0,256,512),r.fillStyle=o.head,r.fillRect(16,18,224,64),r.fillStyle="#102028",r.font='700 32px "Yu Gothic UI", Meiryo, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(o.label,128,50),[o.a,o.b,o.c].forEach((f,c)=>{const d=110+c*96;r.fillStyle="#071016",r.fillRect(28,d,200,78),r.fillStyle=f,r.fillRect(40,d+12,36,54),r.fillRect(86,d+12,36,54),r.fillRect(132,d+12,36,54),r.fillRect(178,d+12,36,54)}),r.fillStyle="#05070a",r.fillRect(48,430,160,48),r.strokeStyle="rgba(255,255,255,0.35)",r.strokeRect(48,430,160,48);const l=new se(s);return l.colorSpace=he,yt.set(t,l),l}function jg(){const i="emergency-exit",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#0a7844",e.fillRect(0,0,256,128),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(8,8,240,112),e.fillStyle="#ffffff",e.font='bold 36px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("非常口 EXIT",128,74);const o=new se(n);return o.colorSpace=he,yt.set(i,o),o}function Qg(){const i="manhole-cover",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22262c",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill(),e.strokeStyle="#3d444e",e.lineWidth=6,e.stroke(),e.strokeStyle="#485260",e.lineWidth=3,e.beginPath(),e.arc(128,128,96,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(128,128,54,0,Math.PI*2),e.stroke();for(let s=0;s<Math.PI*2;s+=Math.PI/4)e.save(),e.translate(128,128),e.rotate(s),e.fillStyle="#3a424e",e.beginPath(),e.ellipse(0,75,12,18,0,0,Math.PI*2),e.fill(),e.restore();e.fillStyle="#505a68",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("下水",128,128);const o=new se(n);return o.colorSpace=he,yt.set(i,o),o}function t2(){const i="konbini-counter-front",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#f8f9fa",e.fillRect(0,0,512,256),e.fillStyle="#0d7a46",e.fillRect(0,48,512,28),e.fillStyle="#ffffff",e.fillRect(0,76,512,8),e.fillStyle="#0080cc",e.fillRect(0,84,512,16),e.strokeStyle="#e2e6ea",e.lineWidth=2;for(let s=128;s<512;s+=128)e.beginPath(),e.moveTo(s,100),e.lineTo(s,230),e.stroke();e.fillStyle="#3a3f47",e.fillRect(0,230,512,26);const o=new se(n);return o.colorSpace=he,yt.set(i,o),o}function e2(){const i="konbini-wall-stripes",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#f4f6f9",e.fillRect(0,0,512,512),e.strokeStyle="#e1e5eb",e.lineWidth=2,e.strokeRect(0,0,512,512),e.fillStyle="#0d7a46",e.fillRect(0,18,512,36),e.fillStyle="#ffffff",e.fillRect(0,54,512,8),e.fillStyle="#0080cc",e.fillRect(0,62,512,22);const o=new se(n);return o.wrapS=Ne,o.wrapT=Ne,o.repeat.set(4,1),o.colorSpace=he,yt.set(i,o),o}function n2(){const i="konbini-cooler-doors",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#0a1016",e.fillRect(0,0,1024,512);const o=256,s=[[{color:"#2b7835",label:"お〜いお茶"},{color:"#388a44",label:"生茶"},{color:"#1f5e28",label:"伊右衛門"},{color:"#665522",label:"烏龍茶"}],[{color:"#0088dd",label:"POCARI"},{color:"#00b4d8",label:"AQUARIUS"},{color:"#e8f4ff",label:"いろはす"},{color:"#0066aa",label:"DAKARA"}],[{color:"#d4af37",label:"BOSS GOLD"},{color:"#1c1c1c",label:"BLACK COFFEE"},{color:"#8b0000",label:"GEORGIA"},{color:"#f5deb3",label:"MILK TEA"}],[{color:"#cc0000",label:"COCA-COLA"},{color:"#ffd700",label:"C.C.LEMON"},{color:"#00aa55",label:"MELON SODA"},{color:"#ffffff",label:"CALPIS"}]];for(let a=0;a<4;a++){const l=a*o,f=s[a];for(let c=0;c<5;c++){const d=30+c*95;e.fillStyle="#e8f4fa",e.fillRect(l+12,d+68,o-24,6),e.fillStyle="#ff4444",e.fillRect(l+12,d+74,o-24,12),e.fillStyle="#ffffff",e.font="bold 9px sans-serif",e.textAlign="center",e.fillText("¥140 ~ ¥160",l+o/2,d+83);const h=5;for(let u=0;u<h;u++){const g=l+24+u*44,_=f[u%f.length];e.fillStyle="rgba(255, 255, 255, 0.15)",e.fillRect(g-2,d+8,32,58),e.fillStyle=_.color,e.fillRect(g,d+10,28,56),e.fillStyle="#ffffff",e.fillRect(g+6,d+4,16,6),e.fillStyle="#ffffff",e.fillRect(g+2,d+26,24,22),e.fillStyle="#111111",e.font="bold 8px sans-serif",e.fillText(_.label.substring(0,4),g+14,d+38)}}e.strokeStyle="#8a929c",e.lineWidth=8,e.strokeRect(l+4,8,o-8,496),e.fillStyle="#cfd4dc",e.fillRect(l+o-22,180,10,150),e.fillStyle="#222222",e.fillRect(l+o-20,182,6,146)}const r=new se(n);return r.colorSpace=he,yt.set(i,r),r}function i2(){const i="hot-snacks-display",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#d92c18",e.fillRect(0,0,256,128),e.fillStyle="#ff7700",e.fillRect(4,4,248,42),e.fillStyle="#ffffff",e.font='bold 22px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("HOT SNACKS",128,30),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.fillText("ファミチキ ¥220 / 肉まん ¥160",128,76),e.font='12px "Yu Gothic UI", sans-serif',e.fillText("できたて あつあつ！揚げたて",128,104);const o=new se(n);return o.colorSpace=he,yt.set(i,o),o}function o2(){const i="apt-lobby-wall",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#eee9e0",e.fillRect(0,0,512,512);const o=64;for(let r=0;r<512;r+=o){const a=r/o%2===0?0:128;for(let l=-128;l<640;l+=256){const f=Math.floor((Math.sin(l*12.3+r*4.5)+1)*6),c=238+f,d=233+f,h=224+f;e.fillStyle=`rgb(${c},${d},${h})`,e.fillRect(l+a+2,r+2,252,o-4);for(let u=0;u<12;u++)e.fillStyle="rgba(160, 150, 135, 0.15)",e.fillRect(l+a+Math.random()*240,r+Math.random()*(o-6),2,2)}e.fillStyle="#cfc6b8",e.fillRect(0,r,512,2)}const s=new se(n);return s.wrapS=Ne,s.wrapT=Ne,s.repeat.set(3,2),yt.set(i,s),s}function s2(){const i="apt-lobby-floor",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ded7cc",e.fillRect(0,0,512,512);for(let s=0;s<2;s++)for(let r=0;r<2;r++){const a=s*256,l=r*256;e.fillStyle=(s+r)%2===0?"#e4ded4":"#dfd9cf",e.fillRect(a+2,l+2,252,252),e.strokeStyle="rgba(255, 255, 255, 0.45)",e.lineWidth=3,e.beginPath(),e.moveTo(a+20,l+220),e.bezierCurveTo(a+90,l+160,a+140,l+200,a+230,l+40),e.stroke(),e.strokeStyle="rgba(160, 145, 130, 0.22)",e.lineWidth=2,e.beginPath(),e.moveTo(a+40,l+240),e.bezierCurveTo(a+120,l+170,a+170,l+120,a+240,l+80),e.stroke()}e.strokeStyle="#b8ad9e",e.lineWidth=3,e.strokeRect(0,0,512,512),e.beginPath(),e.moveTo(256,0),e.lineTo(256,512),e.moveTo(0,256),e.lineTo(512,256),e.stroke();const o=new se(n);return o.wrapS=Ne,o.wrapT=Ne,o.repeat.set(4,4),yt.set(i,o),o}function r2(){const i="wood-slats",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22150c",e.fillRect(0,0,256,256);const o=24,r=o+8;for(let l=0;l<256;l+=r){e.fillStyle="#b8834a",e.fillRect(l,0,o,256),e.strokeStyle="rgba(120, 70, 30, 0.25)",e.lineWidth=1.5;for(let f=0;f<3;f++){const c=l+4+f*7;e.beginPath(),e.moveTo(c,0),e.bezierCurveTo(c+2,80,c-2,160,c+1,256),e.stroke()}e.fillStyle="rgba(255, 230, 190, 0.35)",e.fillRect(l,0,2,256),e.fillStyle="rgba(40, 20, 10, 0.45)",e.fillRect(l+o-2,0,2,256)}const a=new se(n);return a.wrapS=Ne,a.wrapT=Ne,a.repeat.set(3,1),yt.set(i,a),a}function a2(){const i="apt-mailboxes",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#8f96a0",e.fillRect(0,0,1024,512);for(let h=0;h<512;h+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,h,1024,2);e.fillStyle="#222830",e.fillRect(16,12,992,44),e.fillStyle="#d4af37",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("SUN HEIGHTS  |  集合郵便受箱 (MAIL BOXES)",36,41),e.textAlign="right",e.font="15px sans-serif",e.fillStyle="#a0aec0",e.fillText("ROOMS 101 - 406",988,41);const o=6,s=4,r=20,a=68,l=Math.floor(984/o),f=Math.floor(432/s),c=[["401","402","403","404","405","406"],["301","302","303","304","305","306"],["201","202","203","204","205","206"],["101","102","103","104","105","106"]];for(let h=0;h<s;h++)for(let u=0;u<o;u++){const g=r+u*l,_=a+h*f;e.fillStyle="#a8b0ba",e.fillRect(g+3,_+3,l-6,f-6),e.strokeStyle="#4e5560",e.lineWidth=2,e.strokeRect(g+3,_+3,l-6,f-6),e.fillStyle="#68707a",e.fillRect(g+12,_+12,l-24,18),e.fillStyle="#242a32",e.fillRect(g+16,_+27,l-32,3);const m=c[h][u];e.fillStyle="#11161d",e.fillRect(g+14,_+40,56,26),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(g+14,_+40,56,26),e.fillStyle="#ffffff",e.font='bold 16px "Yu Gothic UI", monospace',e.textAlign="center",e.fillText(m,g+42,_+59);const p=g+l-34,T=_+53;e.fillStyle="#1a1f26",e.beginPath(),e.arc(p,T,15,0,Math.PI*2),e.fill(),e.strokeStyle="#c5ccd6",e.lineWidth=2,e.stroke(),e.fillStyle="#ffffff";for(let w=0;w<8;w++){const v=w*Math.PI/4;e.fillRect(p+Math.cos(v)*11-1,T+Math.sin(v)*11-1,2,2)}e.fillStyle="#e8ecf0",e.fillRect(g+14,_+72,l-28,14),e.strokeStyle="#7c8694",e.lineWidth=1,e.strokeRect(g+14,_+72,l-28,14),e.fillStyle="#44505f",e.font="10px sans-serif",e.textAlign="left",e.fillText(m==="304"?"RELZZY (304)":"RESIDENT",g+20,_+83)}const d=new se(n);return yt.set(i,d),d}function l2(){const i="apt-delivery-lockers",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#262d36",e.fillRect(0,0,512,512),e.fillStyle="#151a22",e.fillRect(10,10,492,42),e.fillStyle="#38e59e",e.font='bold 18px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("宅配ロッカー TAKUHAIBOX",26,37),e.fillStyle="#a0aec0",e.font="12px sans-serif",e.textAlign="right",e.fillText("24H PARCEL SYSTEM",486,37),e.fillStyle="#1a202c",e.fillRect(160,68,192,210),e.strokeStyle="#4a5568",e.lineWidth=2,e.strokeRect(160,68,192,210),e.fillStyle="#0f2942",e.fillRect(172,80,168,90),e.fillStyle="#38bdf8",e.font='bold 13px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("荷物のお受け取り",256,106),e.fillStyle="#e2e8f0",e.font="11px sans-serif",e.fillText("部屋番号を入力してください",256,128),e.fillStyle="#22c55e",e.fillText("[304: 1個のお届け物]",256,150);for(let r=0;r<4;r++)for(let a=0;a<3;a++){const l=184+a*48,f=182+r*22;e.fillStyle="#334155",e.fillRect(l,f,40,18),e.fillStyle="#f8fafc",e.font="bold 10px monospace",e.fillText(`${r*3+a+1}`,l+20,f+13)}const o=[{x:16,y:68,w:132,h:64,label:"BOX 01",inUse:!1},{x:16,y:140,w:132,h:64,label:"BOX 02",inUse:!0},{x:16,y:212,w:132,h:64,label:"BOX 03",inUse:!0},{x:364,y:68,w:132,h:96,label:"BOX 04",inUse:!1},{x:364,y:172,w:132,h:104,label:"BOX 05",inUse:!1},{x:16,y:288,w:236,h:208,label:"LARGE BOX 06",inUse:!1},{x:260,y:288,w:236,h:208,label:"LARGE BOX 07",inUse:!1}];for(const r of o)e.fillStyle="#3a4454",e.fillRect(r.x,r.y,r.w,r.h),e.strokeStyle="#1a222e",e.lineWidth=2,e.strokeRect(r.x,r.y,r.w,r.h),e.fillStyle="#8a94a4",e.fillRect(r.x+r.w-18,r.y+r.h/2-16,8,32),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText(r.label,r.x+10,r.y+22),e.fillStyle=r.inUse?"#f59e0b":"#10b981",e.beginPath(),e.arc(r.x+r.w-14,r.y+16,5,0,Math.PI*2),e.fill();const s=new se(n);return yt.set(i,s),s}function c2(){const i="reception-notice-board",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#c8955a",e.fillRect(0,0,512,256);for(let s=0;s<400;s++)e.fillStyle=Math.random()>.5?"rgba(90, 50, 20, 0.15)":"rgba(255, 230, 180, 0.15)",e.fillRect(Math.random()*512,Math.random()*256,3,3);e.strokeStyle="#6b401e",e.lineWidth=10,e.strokeRect(5,5,502,246),e.fillStyle="#2d1e12",e.fillRect(16,14,480,28),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("サンハイツ管理組合 掲示板 (RESIDENTS NOTICE)",256,34),e.fillStyle="#ffffff",e.fillRect(24,52,140,186),e.strokeStyle="#d4d4d4",e.lineWidth=1,e.strokeRect(24,52,140,186),e.fillStyle="#dc2626",e.fillRect(28,56,132,22),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.fillText("ゴミ収集日程",94,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・可燃ゴミ: 月・木",32,98),e.fillText("・資源ゴミ: 水曜日",32,116),e.fillText("・不燃ゴミ: 第2火曜",32,134),e.fillText("※朝8時までに排出",32,158),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.fillRect(182,52,150,186),e.strokeRect(182,52,150,186),e.fillStyle="#2563eb",e.fillRect(186,56,142,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("消防設備定期点検",257,72),e.fillStyle="#1e293b",e.font="10px sans-serif",e.textAlign="left",e.fillText("今週土曜日 10:00~",190,98),e.fillText("各戸火災報知器テスト",190,116),e.fillText("インターホン点検実施",190,134),e.fillText("ご在宅をお願いします",190,158),e.fillStyle="#3b82f6",e.beginPath(),e.arc(257,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#fffbeb",e.fillRect(350,52,138,186),e.strokeRect(350,52,138,186),e.fillStyle="#059669",e.fillRect(354,56,130,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("共用部利用マナー",419,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・駐輪場シール貼付",358,98),e.fillText("・共用廊下置配禁止",358,116),e.fillText("・夜間静粛のお願い",358,134),e.strokeStyle="#dc2626",e.lineWidth=2,e.strokeRect(436,180,42,42),e.fillStyle="#dc2626",e.font="bold 9px serif",e.textAlign="center",e.fillText("管理",457,198),e.fillText("組合印",457,214),e.fillStyle="#10b981",e.beginPath(),e.arc(419,56,5,0,Math.PI*2),e.fill();const o=new se(n);return yt.set(i,o),o}function f2(){const i="apt-directory-board",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=384;const e=n.getContext("2d");e.fillStyle="#161d26",e.fillRect(0,0,512,384),e.strokeStyle="#d4af37",e.lineWidth=6,e.strokeRect(6,6,500,372),e.strokeStyle="#4a5568",e.lineWidth=1.5,e.strokeRect(16,16,480,352),e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", serif',e.textAlign="center",e.fillText("SUN HEIGHTS KANAMECHO",256,54),e.font='14px "Yu Gothic UI", sans-serif',e.fillStyle="#e2e8f0",e.fillText("サンハイツ要町 総合案内",256,78),e.fillStyle="#d4af37",e.fillRect(40,92,432,2);const o=[{floor:"4F",desc:"401 - 406  RESIDENCE / ルーフバルコニー"},{floor:"3F",desc:"301 - 306  RESIDENCE (Relzzy #304)"},{floor:"2F",desc:"201 - 206  RESIDENCE"},{floor:"1F",desc:"管理事務室 / エントランス / 集合受箱 / 宅配BOX"}];for(let r=0;r<o.length;r++){const a=138+r*50;e.fillStyle="#2a3442",e.fillRect(44,a-24,60,34),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(44,a-24,60,34),e.fillStyle="#d4af37",e.font="bold 18px monospace",e.textAlign="center",e.fillText(o[r].floor,74,a),e.fillStyle="#ffffff",e.font='14px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText(o[r].desc,120,a),r<3&&(e.fillStyle="rgba(255, 255, 255, 0.12)",e.fillRect(44,a+20,424,1))}e.fillStyle="#718096",e.font="11px sans-serif",e.textAlign="center",e.fillText("管理人常駐: 平日 9:00 ~ 17:00 | 管理会社コールセンター 24H",256,346);const s=new se(n);return yt.set(i,s),s}function h2(){const i="ramen-shop-sign",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#1c1510",e.fillRect(0,0,512,256);for(let s=0;s<256;s+=4)e.fillStyle=Math.random()>.5?"rgba(70, 45, 25, 0.25)":"rgba(10, 8, 6, 0.35)",e.fillRect(0,s,512,3);e.strokeStyle="#3d2616",e.lineWidth=12,e.strokeRect(6,6,500,244),e.strokeStyle="#5a3820",e.lineWidth=3,e.strokeRect(14,14,484,228),e.fillStyle="#e2c595",e.font='bold 16px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("自家製麺・濃厚豚骨スープ",256,48),e.fillStyle="#f8e4b8",e.font="bold 52px serif",e.shadowColor="#000000",e.shadowBlur=6,e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText("らーめん 麺処",256,116),e.shadowColor="transparent",e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", sans-serif',e.fillText("MENYA TOKYO",256,160),e.fillStyle="#b89d78",e.font="14px sans-serif",e.fillText("創業 昭和六十二年  |  特製チャーシュー・煮玉子",256,196),e.strokeStyle="#c42012",e.lineWidth=2.5,e.strokeRect(38,92,42,42),e.fillStyle="#c42012",e.font="bold 11px serif",e.textAlign="center",e.fillText("味",59,110),e.fillText("自慢",59,126),e.strokeStyle="#c42012",e.strokeRect(432,92,42,42),e.fillText("秘",453,110),e.fillText("伝",453,126);const o=new se(n);return yt.set(i,o),o}function d2(i){const t=`ramen-lantern-${i}`,n=yt.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=512;const o=e.getContext("2d"),s=o.createLinearGradient(0,0,512,0);s.addColorStop(0,"#9a160c"),s.addColorStop(.3,"#d8281a"),s.addColorStop(.5,"#f03a28"),s.addColorStop(.7,"#d8281a"),s.addColorStop(1,"#9a160c"),o.fillStyle=s,o.fillRect(0,0,512,512);for(let f=40;f<470;f+=22)o.fillStyle="rgba(70, 8, 4, 0.4)",o.fillRect(0,f,512,3),o.fillStyle="rgba(255, 180, 160, 0.25)",o.fillRect(0,f+3,512,1.5);o.fillStyle="#141416",o.fillRect(0,0,512,42),o.fillRect(0,470,512,42),o.fillStyle="#d4af37",o.fillRect(0,38,512,4),o.fillRect(0,470,512,4),o.fillStyle="#101012",o.font="900 84px serif",o.textAlign="center";const r=i.split(""),a=256-(r.length-1)*90/2;r.forEach((f,c)=>{o.shadowColor="rgba(0, 0, 0, 0.6)",o.shadowBlur=4,o.shadowOffsetX=2,o.shadowOffsetY=2,o.fillText(f,256,a+c*95)}),o.shadowColor="transparent";const l=new se(e);return yt.set(t,l),l}function u2(){const i="ramen-noren",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#162234",e.fillRect(0,0,512,256);for(let a=0;a<256;a+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,a,512,2);const o=512/4;for(let a=1;a<4;a++){const l=a*o;e.fillStyle="#080c14",e.fillRect(l-3,40,6,216)}e.fillStyle="#0f1722",e.fillRect(0,0,512,38),e.strokeStyle="#2d3b4e",e.lineWidth=2,e.strokeRect(0,0,512,38);for(let a=0;a<8;a++){const l=28+a*64;e.fillStyle="#223044",e.fillRect(l,2,24,34)}const s=["ら","ー","め","ん"];e.fillStyle="#f8fafc",e.font='bold 64px "Yu Gothic UI", serif',e.textAlign="center";for(let a=0;a<4;a++){const l=a*o+o/2;e.fillText(s[a],l,155)}e.strokeStyle="#f8fafc",e.lineWidth=3,e.beginPath(),e.arc(256,75,22,0,Math.PI*2),e.stroke(),e.font="bold 22px serif",e.fillText("麺",256,83),e.fillStyle="#f8fafc",e.font="bold 13px sans-serif",e.fillText("営 業 中",450,220);const r=new se(n);return yt.set(i,r),r}function p2(){const i="ramen-kenbaiki",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8e2d8",e.fillRect(0,0,512,512),e.fillStyle="#262d36",e.fillRect(16,16,480,480),e.strokeStyle="#4a5568",e.lineWidth=3,e.strokeRect(16,16,480,480),e.fillStyle="#111822",e.fillRect(28,28,456,48),e.fillStyle="#f59e0b",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("食券をお買い求めください",256,56),e.font="11px sans-serif",e.fillStyle="#94a3b8",e.fillText("PLEASE PURCHASE TICKET FIRST  |  千円札・二千円札・硬貨対応",256,70),e.fillStyle="#06101a",e.fillRect(320,88,160,36),e.strokeStyle="#1e293b",e.strokeRect(320,88,160,36),e.fillStyle="#22c55e",e.font="bold 18px monospace",e.textAlign="right",e.fillText("¥1,000",470,113),e.fillStyle="#dc2626",e.fillRect(28,92,280,28),e.fillStyle="#ffffff",e.font="bold 13px sans-serif",e.textAlign="center",e.fillText("★ 当店おすすめ 定番らーめん ★",168,111);const o=[{title:"特製豚骨らーめん",price:"¥980",color:"#f59e0b"},{title:"チャーシュー麺",price:"¥1,100",color:"#ef4444"},{title:"濃厚魚介味噌",price:"¥950",color:"#d97706"},{title:"味玉豚骨らーめん",price:"¥880",color:"#f59e0b"},{title:"辛味噌らーめん",price:"¥920",color:"#dc2626"},{title:"あっさり魚介醤油",price:"¥850",color:"#3b82f6"},{title:"替玉 (一玉)",price:"¥150",color:"#10b981"},{title:"博多一口餃子(5個)",price:"¥380",color:"#10b981"},{title:"炙りチャーシュー丼",price:"¥350",color:"#f97316"},{title:"追加トッピング 煮玉子",price:"¥120",color:"#64748b"},{title:"追加 メンマ/白ネギ",price:"¥120",color:"#64748b"},{title:"アサヒ スーパードライ",price:"¥550",color:"#eab308"}],s=144,r=58,a=28,l=132;for(let c=0;c<o.length;c++){const d=c%3,h=Math.floor(c/3),u=a+d*156,g=l+h*66,_=o[c];e.fillStyle="#1e2632",e.fillRect(u,g,s,r),e.strokeStyle=_.color,e.lineWidth=2,e.strokeRect(u,g,s,r),e.fillStyle=_.color,e.fillRect(u+4,g+4,s-8,16),e.fillStyle="#ffffff",e.font="bold 9.5px sans-serif",e.textAlign="center",e.fillText(_.title,u+s/2,g+16),e.fillStyle="#ffffff",e.font="bold 15px monospace",e.fillText(_.price,u+s/2,g+42),e.fillStyle="#22c55e",e.beginPath(),e.arc(u+12,g+47,3.5,0,Math.PI*2),e.fill()}e.fillStyle="#111822",e.fillRect(28,404,210,42),e.strokeStyle="#334155",e.strokeRect(28,404,210,42),e.fillStyle="#38bdf8",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText("紙幣投入口 (1000/2000円)",42,428),e.fillStyle="#0284c7",e.fillRect(170,418,56,12),e.fillStyle="#111822",e.fillRect(256,404,228,42),e.strokeStyle="#334155",e.strokeRect(256,404,228,42),e.fillStyle="#f59e0b",e.fillText("硬貨投入口 (500/100/50/10)",270,428),e.fillStyle="#d97706",e.fillRect(432,416,38,16),e.fillStyle="#0b0f14",e.fillRect(28,454,456,36),e.strokeStyle="#22c55e",e.lineWidth=1.5,e.strokeRect(28,454,456,36),e.fillStyle="#22c55e",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("▼ おつり・食券 口 (TICKET / CHANGE)",256,477);const f=new se(n);return yt.set(i,f),f}function m2(){const i="ramen-shop-wall",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8dcc8",e.fillRect(0,0,512,320);for(let a=0;a<600;a++)e.fillStyle=Math.random()>.5?"rgba(180, 160, 130, 0.18)":"rgba(255, 245, 230, 0.25)",e.fillRect(Math.random()*512,Math.random()*320,2,2);const o=20;for(let a=0;a<512;a+=128)e.fillStyle="#3a2416",e.fillRect(a,0,o,320),e.fillStyle="#543622",e.fillRect(a+2,0,o-4,320);e.fillStyle="#3a2416",e.fillRect(0,312,512,16),e.fillStyle="#543622",e.fillRect(0,314,512,12),e.fillStyle="#2a1a10",e.fillRect(0,328,512,184);const s=42;for(let a=0;a<512;a+=s)e.fillStyle=a%(s*2)===0?"#382216":"#2e1c12",e.fillRect(a+2,328,s-4,184),e.fillStyle="#160d08",e.fillRect(a,328,2,184);const r=new se(n);return r.wrapS=Ne,r.wrapT=Ne,r.repeat.set(3,1),yt.set(i,r),r}function g2(){const i="ramen-shop-floor",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#22262c",e.fillRect(0,0,512,512);const o=128;for(let r=0;r<512;r+=o)for(let a=0;a<512;a+=o){const l=Math.floor((Math.sin(r*3+a*7)+1)*8);e.fillStyle=`rgb(${34+l},${38+l},${44+l})`,e.fillRect(r+3,a+3,o-6,o-6);for(let f=0;f<8;f++)e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(r+Math.random()*(o-6),a+Math.random()*(o-6),2,2)}e.strokeStyle="#121519",e.lineWidth=4,e.strokeRect(0,0,512,512);for(let r=o;r<512;r+=o)e.beginPath(),e.moveTo(r,0),e.lineTo(r,512),e.stroke();for(let r=o;r<512;r+=o)e.beginPath(),e.moveTo(0,r),e.lineTo(512,r),e.stroke();const s=new se(n);return s.wrapS=Ne,s.wrapT=Ne,s.repeat.set(3,3),yt.set(i,s),s}const nt='"Yu Gothic UI", "Yu Gothic", Meiryo, "Hiragino Kaku Gothic ProN", "MS PGothic", sans-serif';function x2(){const i="storefront-dental-window",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#eaf5f7"),o.addColorStop(.55,"#dbeff2"),o.addColorStop(1,"#cde6ea"),e.fillStyle=o,e.fillRect(0,0,1024,512);const s=e.getImageData(0,0,1024,512),r=s.data;for(let u=0;u<r.length;u+=4){const g=(Math.random()-.5)*8;r[u]=Math.min(255,Math.max(0,r[u]+g)),r[u+1]=Math.min(255,Math.max(0,r[u+1]+g)),r[u+2]=Math.min(255,Math.max(0,r[u+2]+g))}e.putImageData(s,0,0),e.fillStyle="#175261",e.fillRect(0,0,1024,88),e.fillStyle="#2db8aa",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(60,32),e.bezierCurveTo(54,24,68,22,68,34),e.bezierCurveTo(68,22,82,24,76,32),e.bezierCurveTo(82,48,76,60,72,60),e.bezierCurveTo(69,60,68,46,68,46),e.bezierCurveTo(68,46,67,60,64,60),e.bezierCurveTo(60,60,54,48,60,32),e.fill(),e.fillStyle="#ffffff",e.font=`700 36px ${nt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",114,34),e.fillStyle="#a6e2ec",e.font=`500 17px ${nt}`,e.fillText("PARKSIDE DENTAL CLINIC",116,64),e.fillStyle="#e2f7fa",e.font=`600 18px ${nt}`,e.textAlign="right",e.fillText("一般歯科 ・ 小児歯科 ・ 矯正歯科 ・ 口腔外科 ・ 予防定期検診",990,44),e.fillStyle="rgba(255, 255, 255, 0.92)",e.strokeStyle="#bedee3",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${nt}`,e.textAlign="left",e.fillText("【 診療時間のご案内 】",56,138);const a=56,l=165,f=48,c=["月","火","水","木","金","土","日/祝"];e.fillStyle="#edf7f9",e.fillRect(a+90,l,f*7,28),e.fillStyle="#175261",e.font=`700 15px ${nt}`,e.textAlign="center",c.forEach((u,g)=>{u==="木"||u.includes("日")?e.fillStyle="#d94b4b":e.fillStyle="#175261",e.fillText(u,a+90+g*f+f/2,l+14)}),[{label:"09:30 - 13:00",marks:["●","●","●","休","●","●","休"]},{label:"14:30 - 19:30",marks:["●","●","●","休","●","▲","休"]}].forEach((u,g)=>{const _=l+28+g*34;e.fillStyle=g%2===0?"#ffffff":"#f8fcfd",e.fillRect(a,_,90+f*7,34),e.strokeStyle="#d7eaee",e.strokeRect(a,_,90+f*7,34),e.fillStyle="#2a3b40",e.font=`600 13px ${nt}`,e.textAlign="center",e.fillText(u.label,a+45,_+17),u.marks.forEach((m,p)=>{m==="休"?(e.fillStyle="#b84242",e.font=`700 14px ${nt}`):m==="▲"?(e.fillStyle="#e07d10",e.font=`700 15px ${nt}`):(e.fillStyle="#1d788a",e.font=`700 16px ${nt}`),e.fillText(m,a+90+p*f+f/2,_+17)})}),e.fillStyle="#57727a",e.font=`500 13px ${nt}`,e.textAlign="left",e.fillText("▲ 土曜午後は 14:30〜17:00 まで診療",56,290),e.fillText("休診日：木曜日・日曜日・祝祭日",56,312),e.fillStyle="#1e7587",e.font=`600 13px ${nt}`,e.fillText("各種健康保険取扱 ・ 労災保険指定医療機関",56,345),e.fillStyle="rgba(255, 255, 255, 0.92)",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${nt}`,e.textAlign="left",e.fillText("【 ご予約・急患随時受付 】",546,138),e.fillStyle="#41575f",e.font=`500 15px ${nt}`,e.fillText("当院は患者様をお待たせしない予約優先制です。",546,172),e.fillText("急な歯の痛み・詰め物の脱落は当日診療いたします。",546,198),e.fillStyle="#edf8fa",e.strokeStyle="#3296a6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,222,420,72,6),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`600 14px ${nt}`,e.fillText("ご予約・お問い合わせダイヤル",566,242),e.fillStyle="#134e5c",e.font=`800 32px ${nt}`,e.fillText("TEL 03-3456-7890",566,274),e.fillStyle="#4a6870",e.font=`500 14px ${nt}`,e.fillText("● 痛みの少ない麻酔治療　● デジタルCT完備　● 完全滅菌対応",546,326),e.fillText("● 院内バリアフリー設計　● ベビーカー・車椅子そのまま入室可",546,352),e.fillStyle="rgba(255, 255, 255, 0.55)",e.fillRect(0,400,1024,112),e.fillStyle="rgba(255, 255, 255, 0.65)";for(let u=0;u<1024;u+=16)e.fillRect(u,405,8,95);e.fillStyle="#1c783c",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${nt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${nt}`,e.fillText("TOUCH 押してください",512,465);const h=new se(n);return h.colorSpace=he,h.anisotropy=4,yt.set(i,h),h}function _2(){const i="storefront-dental-sign",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,256);o.addColorStop(0,"#154a57"),o.addColorStop(.5,"#1b5969"),o.addColorStop(1,"#113e4a"),e.fillStyle=o,e.fillRect(0,0,1024,256),e.strokeStyle="#47a8bc",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(110,128,64,0,Math.PI*2),e.fill(),e.fillStyle="#1b5969",e.beginPath(),e.moveTo(96,100),e.bezierCurveTo(84,82,110,78,110,104),e.bezierCurveTo(110,78,136,82,124,100),e.bezierCurveTo(138,134,126,158,118,158),e.bezierCurveTo(112,158,110,130,110,130),e.bezierCurveTo(110,130,108,158,102,158),e.bezierCurveTo(94,158,82,134,96,100),e.fill(),e.fillStyle="#ffffff",e.font=`800 68px ${nt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",205,105),e.fillStyle="#9fe1ee",e.font=`600 24px ${nt}`,e.fillText("PARKSIDE DENTAL CLINIC  ・  TEL 03-3456-7890",210,172),e.fillStyle="#2db8aa",e.beginPath(),e.roundRect(790,80,190,96,12),e.fill(),e.fillStyle="#ffffff",e.font=`700 20px ${nt}`,e.textAlign="center",e.fillText("夜7時半まで",885,115),e.font=`600 16px ${nt}`,e.fillText("急患随時受付",885,146);const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function v2(){const i="storefront-cleaners-window",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#f0f5fb"),o.addColorStop(1,"#dfeaf5"),e.fillStyle=o,e.fillRect(0,0,1024,512),e.fillStyle="#1e3f7a",e.fillRect(0,0,1024,88),e.strokeStyle="#ffd84d",e.lineWidth=4,e.beginPath(),e.arc(68,30,12,0,Math.PI,!0),e.moveTo(40,58),e.lineTo(68,42),e.lineTo(96,58),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 38px ${nt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",120,36),e.fillStyle="#ffd84d",e.font=`600 17px ${nt}`,e.fillText("SHIROKANE DRY CLEANING & LAUNDRY",122,66),e.fillStyle="#ffffff",e.font=`700 18px ${nt}`,e.textAlign="right",e.fillText("朝10時お預かり ➡ 夕方5時お渡し！ スピード即日仕上げ",990,44),e.fillStyle="#ffffff",e.strokeStyle="#bed1e8",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 20px ${nt}`,e.textAlign="left",e.fillText("【 白金クリーニング 料金表 】",56,138),[{name:"ワイシャツ (立体抗菌消臭仕上)",price:"¥220〜"},{name:"スーツ上下 (汗抜きプレス付)",price:"¥1,280〜"},{name:"ジャケット・ブレザー",price:"¥780〜"},{name:"スラックス・スカート",price:"¥550〜"},{name:"ダウンジャケット・コート",price:"¥1,980〜"},{name:"毛布・羽毛ふとん丸洗い",price:"¥1,800〜"}].forEach((l,f)=>{const c=172+f*32;e.fillStyle="#2d3b4d",e.font=`600 15px ${nt}`,e.textAlign="left",e.fillText(l.name,56,c),e.fillStyle="#a0b3cb";for(let d=295;d<400;d+=8)e.fillRect(d,c-2,3,3);e.fillStyle="#d63429",e.font=`800 17px ${nt}`,e.textAlign="right",e.fillText(l.price,470,c)}),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#3a4b60",e.fillRect(550,130,412,6),["#1d2430","#3b4352","#263347","#4b5563","#1e2838"].forEach((l,f)=>{const c=560+f*80;e.strokeStyle="#8d99ae",e.lineWidth=2,e.beginPath(),e.moveTo(c+35,136),e.lineTo(c+15,155),e.lineTo(c+55,155),e.closePath(),e.stroke(),e.fillStyle=l,e.fillRect(c+15,155,40,75),e.fillStyle="rgba(255, 255, 255, 0.45)",e.fillRect(c+10,150,50,95),e.strokeStyle="rgba(180, 210, 240, 0.7)",e.strokeRect(c+10,150,50,95),e.fillStyle=f%2===0?"#ff4d4d":"#3385ff",e.fillRect(c+42,160,14,20)}),e.fillStyle="#eef5fc",e.strokeStyle="#296ed6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,260,420,100,6),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 18px ${nt}`,e.textAlign="left",e.fillText("★ 24時間コインランドリー併設 ★",566,285),e.fillStyle="#3f536e",e.font=`500 14px ${nt}`,e.fillText("大型洗濯乾燥機・スニーカーウォッシャー完備！",566,312),e.fillText("営業時間: 本店 8:00〜20:00 (水曜定休) / コインランドリー 24時間",566,338),e.fillStyle="rgba(235, 243, 252, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#1e3f7a",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${nt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${nt}`,e.fillText("TOUCH 押してください",512,465);const a=new se(n);return a.colorSpace=he,a.anisotropy=4,yt.set(i,a),a}function w2(){const i="storefront-cleaners-sign",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,256);o.addColorStop(0,"#1c3e78"),o.addColorStop(.5,"#255099"),o.addColorStop(1,"#173466"),e.fillStyle=o,e.fillRect(0,0,1024,256),e.strokeStyle="#ffd84d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#1c3e78",e.lineWidth=5,e.beginPath(),e.arc(105,105,15,0,Math.PI,!0),e.moveTo(75,142),e.lineTo(105,120),e.lineTo(135,142),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 68px ${nt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",200,102),e.fillStyle="#ffd84d",e.font=`700 24px ${nt}`,e.fillText("SHIROKANE DRY CLEANING  ・  24H コインランドリー併設",205,168),e.fillStyle="#e63946",e.beginPath(),e.roundRect(790,75,190,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${nt}`,e.textAlign="center",e.fillText("即日仕上げ",885,114),e.font=`600 15px ${nt}`,e.fillText("朝10時➡夕方5時",885,150);const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function M2(){const i="storefront-izakaya-facade",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#261e19",e.fillRect(0,0,1024,512);for(let p=0;p<1024;p+=32)e.fillStyle=p%64===0?"#1f1814":"#2d231d",e.fillRect(p,0,31,512),e.fillStyle="#140f0c",e.fillRect(p+31,0,1,512);const o=600,s=212,r=150,a=5,l=o/a;for(let p=0;p<a;p++){const T=s+p*l;e.fillStyle="#1c283f",e.fillRect(T+2,0,l-4,r),e.fillStyle="#141e30",e.fillRect(T+2,r-12,l-4,12)}const f=s+o/2;e.strokeStyle="#f4eedb",e.lineWidth=4,e.beginPath(),e.arc(f,65,34,0,Math.PI*2),e.stroke(),e.fillStyle="#f4eedb",e.font='800 48px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("魚",f,64),e.font='800 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText("和",s+l*.5,75),e.fillText("食",s+l*1.5,75),e.fillText("酒",s+l*3.5,75),e.fillText("処",s+l*4.5,75);const c=40,d=175,h=440,u=290,g=e.createRadialGradient(c+h/2,d+u/2,40,c+h/2,d+u/2,280);g.addColorStop(0,"#ffe49e"),g.addColorStop(.7,"#ffaa44"),g.addColorStop(1,"#c96a1a"),e.fillStyle=g,e.fillRect(c,d,h,u),e.fillStyle="#261b14",e.lineWidth=6,e.strokeRect(c,d,h,u);for(let p=c;p<c+h;p+=36)e.fillRect(p,d,6,u);for(let p=d;p<d+u;p+=42)e.fillRect(c,p,h,6);[{title:"名物 もつ煮込み",price:"四八〇円"},{title:"本日のお造り盛合",price:"一二八〇円"},{title:"炭火串焼き盛合せ",price:"八五〇円"},{title:"旬魚 塩焼き各種",price:"六八〇円"},{title:"全国厳選 地酒一合",price:"七五〇円"}].forEach((p,T)=>{const w=530+T*92,v=175;e.fillStyle="#9e6e43",e.fillRect(w,v,76,285),e.strokeStyle="#5a3d24",e.lineWidth=3,e.strokeRect(w,v,76,285),e.fillStyle="#170e08",e.font='700 17px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",p.title.split("").forEach((R,E)=>{e.fillText(R,w+38,v+30+E*24)}),e.fillStyle="#9e241b",e.fillRect(w+26,v+215,24,24),e.fillStyle="#ffffff",e.font="700 12px serif",e.fillText("極",w+38,v+231),e.fillStyle="#2a1a10",e.font='600 13px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText(p.price,w+38,v+265)});const m=new se(n);return m.colorSpace=he,m.anisotropy=4,yt.set(i,m),m}function S2(){const i="storefront-izakaya-sign",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,256);o.addColorStop(0,"#5a1910"),o.addColorStop(.5,"#7a2016"),o.addColorStop(1,"#4a120b"),e.fillStyle=o,e.fillRect(0,0,1024,256),e.strokeStyle="#dfa84a",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#d93829",e.beginPath(),e.ellipse(110,128,48,62,0,0,Math.PI*2),e.fill(),e.strokeStyle="#220805",e.lineWidth=3,e.stroke(),e.fillStyle="#ffffff",e.font='900 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("酒",110,128),e.fillStyle="#ffeed0",e.font='900 72px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("和食 酒処 魚河岸",200,104),e.fillStyle="#dfa84a",e.font=`700 24px ${nt}`,e.fillText("TRADITIONAL IZAKAYA UOGASHI  ・  旬魚 炭火串焼 厳選銘酒",205,172),e.fillStyle="#b32215",e.fillRect(860,80,96,96),e.strokeStyle="#ffd875",e.lineWidth=2,e.strokeRect(862,82,92,92),e.fillStyle="#ffffff",e.font="700 20px serif",e.textAlign="center",e.fillText("商売",908,114),e.fillText("繁盛",908,148);const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function y2(){const i="storefront-pharmacy-window",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#f2faf8"),o.addColorStop(1,"#ddf1ec"),e.fillStyle=o,e.fillRect(0,0,1024,512),e.fillStyle="#0f6150",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(60,26,16,36),e.fillRect(50,36,36,16),e.fillStyle="#ffffff",e.font=`800 36px ${nt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 森薬局",114,34),e.fillStyle="#9ee8d7",e.font=`600 17px ${nt}`,e.fillText("MORI CLINIC & DISPENSING PHARMACY",116,64),e.fillStyle="#ffffff",e.font=`700 20px ${nt}`,e.textAlign="right",e.fillText("【保険調剤】 全国の処方せん受け付けます",990,44),e.fillStyle="#ffffff",e.strokeStyle="#b6e0d5",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${nt}`,e.textAlign="left",e.fillText("【 森クリニック 診療時間 】",56,138),e.fillStyle="#2e4741",e.font=`600 15px ${nt}`,e.fillText("診療科目：内科 ・ 消化器科 ・ 呼吸器科 ・ 小児科",56,172),e.fillText("午前診療：09:00 〜 12:30 （月・火・木・金・土）",56,206),e.fillText("午後診療：15:00 〜 18:30 （月・火・木・金）",56,238),e.fillStyle="#b83b3b",e.fillText("休診日：水曜午後・土曜午後・日曜・祝祭日",56,272),e.fillStyle="#376b5f",e.font=`500 14px ${nt}`,e.fillText("● 各種健康診断・予防接種 随時受付",56,316),e.fillText("● 在宅医療・訪問診療対応クリニック",56,344),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${nt}`,e.textAlign="left",e.fillText("【 調剤薬局 サービス案内 】",546,138),e.fillStyle="#e8f7f3",e.strokeStyle="#28a687",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,160,420,85,6),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 22px ${nt}`,e.fillText("処方せん受付中",566,188),e.fillStyle="#31544c",e.font=`500 14px ${nt}`,e.fillText("大学病院・総合病院・地域の診療所すべての処方せん調剤可",566,222),e.fillStyle="#2f4b44",e.font=`500 14px ${nt}`,e.fillText("● 電子お薬手帳アプリ対応",546,276),e.fillText("● お薬の飲み合わせ・健康相談 随時受付",546,304),e.fillText("● 一般用医薬品(OTC)・衛生材料・マスク・消毒液完備",546,332),e.fillText("● 各種クレジットカード・電子マネー対応",546,360),e.fillStyle="rgba(230, 245, 240, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#0f6150",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${nt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${nt}`,e.fillText("TOUCH 押してください",512,465);const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function b2(){const i="storefront-pharmacy-sign",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,256);o.addColorStop(0,"#0c4d40"),o.addColorStop(.5,"#136b58"),o.addColorStop(1,"#093a30"),e.fillStyle=o,e.fillRect(0,0,1024,256),e.strokeStyle="#43d9b5",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(90,88,30,80),e.fillRect(65,113,80,30),e.fillStyle="#ffffff",e.font=`800 66px ${nt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 薬局",195,102),e.fillStyle="#9fe9d8",e.font=`600 24px ${nt}`,e.fillText("MORI CLINIC & PHARMACY  ・  処方せん受付・内科・小児科",200,168),e.fillStyle="#00a86b",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 22px ${nt}`,e.textAlign="center",e.fillText("保険調剤",897,114),e.font=`600 16px ${nt}`,e.fillText("処方せん受付",897,150);const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function T2(){const i="storefront-bookstore-window",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#f9f5ed"),o.addColorStop(1,"#ecdfcd"),e.fillStyle=o,e.fillRect(0,0,1024,512),e.fillStyle="#542617",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.font='800 38px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("東書店 本屋",48,36),e.fillStyle="#e8c9b5",e.font=`600 18px ${nt}`,e.fillText("HIGASHI BOOKSTORE & COMICS",50,66),e.fillStyle="#ffffff",e.font=`700 18px ${nt}`,e.textAlign="right",e.fillText("話題のベストセラー・新刊コミック・文庫・雑誌 豊富に取り揃えております",990,44);const s=115,r=250,a=["#b83328","#254b85","#247a46","#87428f","#d97d21","#1f2937","#b5832a","#326b78","#a82c4e","#4f46e5","#0d9488","#ea580c","#15803d","#4338ca","#be185d","#b45309","#1e40af","#065f46","#831843","#701a75","#1e3a8a"];e.fillStyle="#402619",e.fillRect(36,s+95,952,10);for(let f=45;f<970;f+=18){const c=a[f*7%a.length],d=75+f*13%20;e.fillStyle=c,e.fillRect(f,s+95-d,15,d)}e.fillStyle="#402619",e.fillRect(36,r+105,952,10);for(let f=45;f<970;f+=22){const c=a[f*11%a.length],d=85+f*17%20;e.fillStyle=c,e.fillRect(f,r+105-d,18,d)}e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#c9542a",e.lineWidth=3,e.beginPath(),e.roundRect(80,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#c9542a",e.font=`800 20px ${nt}`,e.textAlign="center",e.fillText("【 今週のベストセラー 】",210,185),e.fillStyle="#261b16",e.font=`700 15px ${nt}`,e.fillText("1位 直木賞受賞 話題の巨編",210,222),e.fillText("2位 週刊少年コミック 最新巻",210,254),e.fillText("3位 ビジネス実践名著",210,286),e.fillText("4位 東京下町 街歩きガイド",210,318),e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#2b63ab",e.lineWidth=3,e.beginPath(),e.roundRect(680,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#2b63ab",e.font=`800 20px ${nt}`,e.textAlign="center",e.fillText("★ コミック新刊 入荷 ★",810,185),e.fillStyle="#1c2838",e.font=`700 15px ${nt}`,e.fillText("週刊ジャンプ系 コミックス",810,222),e.fillText("少年マガジン系 コミックス",810,254),e.fillText("青年コミック・名作復刻版",810,286),e.fillText("図書カードNEXT 取扱店",810,318),e.fillStyle="rgba(240, 230, 218, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#542617",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${nt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${nt}`,e.fillText("東書店 入口",512,465);const l=new se(n);return l.colorSpace=he,l.anisotropy=4,yt.set(i,l),l}function E2(){const i="storefront-bookstore-sign",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,256);o.addColorStop(0,"#4a2013"),o.addColorStop(.5,"#632e1c"),o.addColorStop(1,"#3b180d"),e.fillStyle=o,e.fillRect(0,0,1024,256),e.strokeStyle="#e0a96d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#4a2013",e.lineWidth=4,e.beginPath(),e.moveTo(75,110),e.quadraticCurveTo(105,120,105,150),e.quadraticCurveTo(105,120,135,110),e.lineTo(135,145),e.quadraticCurveTo(105,155,105,155),e.quadraticCurveTo(105,155,75,145),e.closePath(),e.stroke(),e.fillStyle="#ffeedb",e.font='900 74px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("書店 本屋",195,102),e.fillStyle="#dfaf85",e.font=`700 24px ${nt}`,e.fillText("HIGASHI BOOKSTORE & COMICS  ・  本・雑誌・コミック・文具",200,168),e.fillStyle="#8f3c20",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("本・コミック",897,114),e.font=`600 16px ${nt}`,e.fillText("新刊続々入荷",897,150);const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function A2(){const i="storefront-cafe-window",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#2d1f18"),o.addColorStop(1,"#1b120d"),e.fillStyle=o,e.fillRect(0,0,1024,512);const s=e.createRadialGradient(720,220,40,720,220,320);s.addColorStop(0,"#ffbf66"),s.addColorStop(.7,"#d47d22"),s.addColorStop(1,"#5e2e05"),e.fillStyle=s,e.fillRect(480,80,500,320),e.fillStyle="#8c5e37",e.beginPath(),e.roundRect(520,250,100,140,10),e.roundRect(640,260,100,130,10),e.roundRect(760,240,110,150,10),e.fill(),e.fillStyle="#26150b",e.font=`800 15px ${nt}`,e.textAlign="center",e.fillText("BRAZIL",570,310),e.fillText("ETHIOPIA",690,320),e.fillText("COLOMBIA",815,305);for(const l of[600,740,870])e.strokeStyle="#2b1b11",e.lineWidth=2,e.beginPath(),e.moveTo(l,80),e.lineTo(l,140),e.stroke(),e.fillStyle="#fff4cc",e.beginPath(),e.arc(l,145,12,0,Math.PI*2),e.fill();e.fillStyle="#212726",e.strokeStyle="#855938",e.lineWidth=6,e.beginPath(),e.roundRect(40,50,400,370,8),e.fill(),e.stroke(),e.fillStyle="#fceecb",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("CAFE MAME  珈琲豆",240,90),e.strokeStyle="#e0c99f",e.lineWidth=1.5,e.beginPath(),e.moveTo(100,105),e.lineTo(380,105),e.stroke(),[{name:"Tokyo Blend (深煎り)",price:"¥480"},{name:"Ethiopia Yirgacheffe (浅煎り)",price:"¥550"},{name:"Cafe Latte (Hot/Iced)",price:"¥520"},{name:"Cold Brew Nitro Coffee",price:"¥550"},{name:"自家製 バスクチーズケーキ",price:"¥500"},{name:"クラシック カスタードプリン",price:"¥450"}].forEach((l,f)=>{const c=145+f*36;e.fillStyle="#ffffff",e.font=`600 15px ${nt}`,e.textAlign="left",e.fillText(l.name,65,c),e.fillStyle="#ffd680",e.font=`700 16px ${nt}`,e.textAlign="right",e.fillText(l.price,415,c)}),e.fillStyle="#dfba87",e.font=`500 13px ${nt}`,e.textAlign="center",e.fillText("自家焙煎 厳選シングルオリジン豆販売 100g〜",240,385),e.fillStyle="rgba(40, 26, 18, 0.85)",e.fillRect(0,430,1024,82),e.fillStyle="#e8be8b",e.font=`700 16px ${nt}`,e.textAlign="center",e.fillText("OPEN 8:30 〜 19:30  /  TAKE OUT OK",512,475);const a=new se(n);return a.colorSpace=he,a.anisotropy=4,yt.set(i,a),a}function R2(){const i="storefront-cafe-sign",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),o=e.createLinearGradient(0,0,0,256);o.addColorStop(0,"#361e12"),o.addColorStop(.5,"#4a2b1b"),o.addColorStop(1,"#2a160c"),e.fillStyle=o,e.fillRect(0,0,1024,256),e.strokeStyle="#d4a36a",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#361e12",e.beginPath(),e.roundRect(82,110,46,38,4),e.fill(),e.strokeStyle="#361e12",e.lineWidth=4,e.beginPath(),e.arc(130,126,10,-Math.PI/2,Math.PI/2),e.stroke(),e.fillStyle="#ffeed9",e.font='900 70px "Hiragino Mincho ProN", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("喫茶 TOKYO CAFE",195,102),e.fillStyle="#d4a36a",e.font=`700 24px ${nt}`,e.fillText("CAFE MAME  ・  ROASTERY & SPECIALTY BEANS",200,168),e.fillStyle="#6e3c23",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${nt}`,e.textAlign="center",e.fillText("自家焙煎",897,114),e.font=`600 16px ${nt}`,e.fillText("珈琲豆販売",897,150);const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function C2(i){const t=`aframe-sign-${i}`,n=yt.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=768;const o=e.getContext("2d");i==="dental"?(o.fillStyle="#f0f8fa",o.fillRect(0,0,512,768),o.strokeStyle="#1b5b6b",o.lineWidth=14,o.strokeRect(7,7,498,754),o.fillStyle="#1b5b6b",o.fillRect(14,14,484,140),o.fillStyle="#ffffff",o.font=`800 42px ${nt}`,o.textAlign="center",o.fillText("パークサイド歯科",256,75),o.font=`600 20px ${nt}`,o.fillText("PARKSIDE DENTAL",256,120),o.fillStyle="#1b5b6b",o.font=`800 32px ${nt}`,o.fillText("【 本日診療中 】",256,210),o.fillStyle="#2a444c",o.font=`600 24px ${nt}`,o.fillText("午前  09:30 〜 13:00",256,270),o.fillText("午後  14:30 〜 19:30",256,320),o.fillStyle="#d94b4b",o.font=`700 22px ${nt}`,o.fillText("初診・急患 随時受付",256,390),o.fillStyle="#32707e",o.font=`600 21px ${nt}`,o.fillText("歯のクリーニング・定期検診",256,445),o.fillText("ホワイトニング・小児歯科",256,485),o.fillText("保険証をご持参ください",256,540),o.fillStyle="#134754",o.font=`800 32px ${nt}`,o.fillText("TEL 03-3456-7890",256,620),o.fillStyle="#e85d04",o.fillRect(40,670,432,50),o.fillStyle="#ffffff",o.font=`700 22px ${nt}`,o.fillText("お気軽にご来院ください",256,702)):i==="cleaners"?(o.fillStyle="#f0f5fc",o.fillRect(0,0,512,768),o.strokeStyle="#1e3f7a",o.lineWidth=14,o.strokeRect(7,7,498,754),o.fillStyle="#1e3f7a",o.fillRect(14,14,484,140),o.fillStyle="#ffffff",o.font=`800 42px ${nt}`,o.textAlign="center",o.fillText("白金クリーニング",256,75),o.fillStyle="#ffd84d",o.font=`700 20px ${nt}`,o.fillText("SHIROKANE CLEANING",256,120),o.fillStyle="#e63946",o.fillRect(30,180,452,65),o.fillStyle="#ffffff",o.font=`800 32px ${nt}`,o.fillText("★ 本日ポイント2倍DAY ★",256,224),o.fillStyle="#1e3f7a",o.font=`800 26px ${nt}`,o.fillText("ワイシャツ 抗菌仕上  ¥220",256,300),o.fillText("スーツ上下 汗抜き付  ¥1,280",256,350),o.fillText("ダウン・コート類   ¥1,980",256,400),o.fillStyle="#324a6d",o.font=`600 22px ${nt}`,o.fillText("朝10時お預かり ➡ 夕方5時お渡し",256,475),o.fillText("スピード即日仕上げ可能！",256,520),o.fillStyle="#1e3f7a",o.fillRect(30,570,452,130),o.fillStyle="#ffd84d",o.font=`800 26px ${nt}`,o.fillText("24時間コインランドリー",256,615),o.fillStyle="#ffffff",o.font=`600 20px ${nt}`,o.fillText("大型洗濯乾燥機 好評稼働中！",256,660)):i==="izakaya"?(o.fillStyle="#211c19",o.fillRect(0,0,512,768),o.strokeStyle="#85512b",o.lineWidth=14,o.strokeRect(7,7,498,754),o.fillStyle="#94291e",o.fillRect(14,14,484,130),o.fillStyle="#fff0d9",o.font='900 44px "Hiragino Mincho ProN", serif',o.textAlign="center",o.fillText("和食・酒処 魚河岸",256,75),o.fillStyle="#ffd580",o.font=`700 22px ${nt}`,o.fillText("元気に営業中！",256,120),o.fillStyle="#ffd875",o.font='800 28px "Hiragino Mincho ProN", serif',o.fillText("〜 本日のおすすめ 〜",256,195),o.fillStyle="#ffffff",o.font='700 24px "Hiragino Mincho ProN", serif',o.fillText("● 本日の刺身三種盛り   九八〇円",256,255),o.fillText("● 特製 名物もつ煮込み   四八〇円",256,310),o.fillText("● 備長炭 串焼き五本盛   八五〇円",256,365),o.fillText("● 本日の地酒 純米大吟醸 七五〇円",256,420),o.fillStyle="#94291e",o.fillRect(30,480,452,100),o.fillStyle="#fff4de",o.font=`800 26px ${nt}`,o.fillText("【 晩酌セット 1,000円 】",256,522),o.font=`600 18px ${nt}`,o.fillText("生ビール ＋ 小鉢 ＋ 串焼き3本！",256,558),o.fillStyle="#e8a84a",o.font=`700 22px ${nt}`,o.fillText("お一人様大歓迎！ カウンター席有",256,650),o.fillText("いらっしゃいませ！",256,695)):i==="pharmacy"?(o.fillStyle="#f0faf6",o.fillRect(0,0,512,768),o.strokeStyle="#0f6150",o.lineWidth=14,o.strokeRect(7,7,498,754),o.fillStyle="#0f6150",o.fillRect(14,14,484,140),o.fillStyle="#ffffff",o.font=`800 42px ${nt}`,o.textAlign="center",o.fillText("森クリニック / 薬局",256,75),o.fillStyle="#9fe8d7",o.font=`600 20px ${nt}`,o.fillText("PHARMACY & CLINIC",256,120),o.fillStyle="#00a86b",o.fillRect(30,180,452,70),o.fillStyle="#ffffff",o.font=`800 28px ${nt}`,o.fillText("【 保険調剤 処方せん受付 】",256,225),o.fillStyle="#21423a",o.font=`600 22px ${nt}`,o.fillText("全国どちらの医療機関の処方せんも",256,300),o.fillText("受け付けております",256,335),o.fillStyle="#0f6150",o.font=`700 24px ${nt}`,o.fillText("森クリニック 診療時間",256,410),o.fillStyle="#31544c",o.font=`600 21px ${nt}`,o.fillText("午前 9:00〜12:30 / 午後 15:00〜18:30",256,450),o.fillText("内科・小児科・呼吸器科",256,490),o.fillStyle="#0f6150",o.fillRect(30,560,452,140),o.fillStyle="#ffffff",o.font=`700 22px ${nt}`,o.fillText("お薬のご相談・在宅医療対応",256,605),o.fillText("電子お薬手帳アプリ対応",256,645),o.fillText("各種キャッシュレス決済可",256,680)):i==="bookstore"?(o.fillStyle="#faf4ec",o.fillRect(0,0,512,768),o.strokeStyle="#542617",o.lineWidth=14,o.strokeRect(7,7,498,754),o.fillStyle="#542617",o.fillRect(14,14,484,140),o.fillStyle="#ffffff",o.font='900 44px "Hiragino Mincho ProN", serif',o.textAlign="center",o.fillText("東書店 本屋",256,75),o.fillStyle="#dfaf85",o.font=`600 20px ${nt}`,o.fillText("HIGASHI BOOKSTORE",256,120),o.fillStyle="#c94a28",o.fillRect(30,180,452,65),o.fillStyle="#ffffff",o.font=`800 28px ${nt}`,o.fillText("★ 今週のコミック新刊 入荷！ ★",256,224),o.fillStyle="#261b16",o.font=`700 24px ${nt}`,o.fillText("話題の直木賞・芥川賞 受賞作",256,300),o.fillText("週刊・月刊 雑誌最新号 発売中",256,350),o.fillText("文庫・新書・文具・万年筆",256,400),o.fillStyle="#542617",o.fillRect(30,470,452,110),o.fillStyle="#ffd8a8",o.font=`800 26px ${nt}`,o.fillText("図書カード NEXT 取扱店",256,515),o.fillStyle="#ffffff",o.font=`600 20px ${nt}`,o.fillText("全国共通 図書カードご贈答にどうぞ",256,555),o.fillStyle="#542617",o.font=`700 22px ${nt}`,o.fillText("営業時間 10:00 〜 21:00",256,640),o.fillText("どうぞお気軽にお立ち寄りください",256,685)):(o.fillStyle="#1f1a17",o.fillRect(0,0,512,768),o.strokeStyle="#6e3c23",o.lineWidth=14,o.strokeRect(7,7,498,754),o.fillStyle="#4a2b1b",o.fillRect(14,14,484,140),o.fillStyle="#ffffff",o.font='900 42px "Hiragino Mincho ProN", serif',o.textAlign="center",o.fillText("CAFE MAME 喫茶",256,75),o.fillStyle="#e0a96d",o.font=`700 20px ${nt}`,o.fillText("SPECIALTY COFFEE ROASTERY",256,120),o.fillStyle="#ffd875",o.font=`800 28px ${nt}`,o.fillText("〜 TODAY’S DRIP 〜",256,195),o.fillStyle="#ffffff",o.font=`700 23px ${nt}`,o.fillText("Ethiopia Yirgacheffe G1",256,245),o.fillStyle="#d4a36a",o.font=`500 18px ${nt}`,o.fillText("フローラルな香りと華やかな柑橘の酸味",256,278),o.fillStyle="#ffffff",o.font=`700 22px ${nt}`,o.fillText("自家製バスクチーズケーキ  ¥500",256,340),o.fillText("クラシックカスタードプリン  ¥450",256,385),o.fillStyle="#4a2b1b",o.fillRect(30,450,452,100),o.fillStyle="#ffd875",o.font=`800 26px ${nt}`,o.fillText("自家焙煎 珈琲豆販売",256,492),o.fillStyle="#ffffff",o.font=`600 18px ${nt}`,o.fillText("お好みに合わせてお挽きいたします",256,528),o.fillStyle="#e0a96d",o.font=`700 24px ${nt}`,o.fillText("テイクアウト OK！",256,610),o.fillStyle="#ffffff",o.font=`600 20px ${nt}`,o.fillText("OPEN 8:30 〜 19:30",256,660));const s=new se(e);return s.colorSpace=he,s.anisotropy=4,yt.set(t,s),s}function P2(){const i="storefront-residential-foyer",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1c2026",e.fillRect(0,0,512,512),e.strokeStyle="#434b57",e.lineWidth=4,e.strokeRect(10,10,492,492),e.fillStyle="#2a313d",e.fillRect(30,30,452,70),e.fillStyle="#d4dbe6",e.font=`700 26px ${nt}`,e.textAlign="center",e.fillText("RESIDENCE ENTRANCE",256,65),e.font=`500 16px ${nt}`,e.fillText("居住者専用 ・ オートロックシステム",256,88),e.fillStyle="#10141a",e.beginPath(),e.roundRect(136,130,240,320,10),e.fill(),e.strokeStyle="#5a6575",e.lineWidth=3,e.stroke(),e.fillStyle="#06090c",e.beginPath(),e.arc(256,175,24,0,Math.PI*2),e.fill(),e.strokeStyle="#404c5c",e.stroke(),e.fillStyle="#3a86ff",e.beginPath(),e.arc(256,175,8,0,Math.PI*2),e.fill(),e.fillStyle="#1d3328",e.fillRect(176,215,160,40),e.fillStyle="#4ade80",e.font="700 16px monospace",e.textAlign="center",e.fillText("ROOM No. _ _ _",256,240),["1","2","3","4","5","6","7","8","9","消","0","呼"].forEach((r,a)=>{const l=a%3,f=Math.floor(a/3),c=180+l*52,d=275+f*40;e.fillStyle=r==="呼"?"#2563eb":r==="消"?"#dc2626":"#2b3340",e.beginPath(),e.roundRect(c,d,44,32,4),e.fill(),e.fillStyle="#ffffff",e.font=`700 15px ${nt}`,e.fillText(r,c+22,d+21)});const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function L2(){const i="cardboard-mikan-box",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#c79862",e.fillRect(0,0,512,512);const o=e.getImageData(0,0,512,512),s=o.data;for(let l=0;l<s.length;l+=4){const f=(Math.random()-.5)*14;s[l]=Math.min(255,Math.max(0,s[l]+f)),s[l+1]=Math.min(255,Math.max(0,s[l+1]+f)),s[l+2]=Math.min(255,Math.max(0,s[l+2]+f))}e.putImageData(o,0,0),e.fillStyle="#b3834e",e.fillRect(0,0,512,28),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fillRect(0,26,512,2),e.fillStyle="#f97316",e.beginPath(),e.arc(120,160,56,0,Math.PI*2),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.ellipse(120,96,26,12,Math.PI/4,0,Math.PI*2),e.ellipse(135,98,22,10,-Math.PI/4,0,Math.PI*2),e.fill(),e.fillStyle="#1e140a",e.font='900 52px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("愛媛みかん",195,145),e.fillStyle="#85200c",e.font=`800 22px ${nt}`,e.fillText("極上特選  完熟太陽のめぐみ",198,185),e.fillStyle="#2b1b0d",e.font="700 18px monospace",e.fillText("EHIME MIKAN  L SIZE  10KG",198,215),e.strokeStyle="#c2291d",e.lineWidth=3,e.beginPath(),e.arc(80,310,38,0,Math.PI*2),e.stroke(),e.fillStyle="#c2291d",e.font="800 20px serif",e.textAlign="center",e.fillText("特選",80,305),e.font="700 13px serif",e.fillText("農協保証",80,325),e.fillStyle="#1f1309",e.textAlign="left",e.font="800 32px monospace",e.fillText("↑↑",150,320),e.font=`700 16px ${nt}`,e.fillText("取扱注意  水濡厳禁",205,315),e.fillStyle="#1e140a";const r=350;for(let l=r;l<r+120;l+=4)Math.sin(l*9)>-.2&&e.fillRect(l,280,2.5,45);e.font="600 10px monospace",e.fillText("4 901234 567890",r,338);const a=new se(n);return a.colorSpace=he,a.anisotropy=4,yt.set(i,a),a}function I2(){const i="tokyo-trash-notice-sign",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,512,512),e.strokeStyle="#15803d",e.lineWidth=10,e.strokeRect(5,5,502,502),e.fillStyle="#15803d",e.fillRect(10,10,492,100),e.fillStyle="#ffffff",e.font=`900 38px ${nt}`,e.textAlign="center",e.fillText("家庭ごみ集積所",256,58),e.font=`700 16px ${nt}`,e.fillText("RESIDENTIAL WASTE COLLECTION POINT",256,92),[{type:"燃やすごみ",days:"毎週  月・木曜日",color:"#dc2626"},{type:"燃やさないごみ",days:"第２・第４水曜日",color:"#2563eb"},{type:"資源ごみ (缶・瓶・PET)",days:"毎週  火曜日",color:"#16a34a"}].forEach((r,a)=>{const l=135+a*62;e.fillStyle=r.color,e.beginPath(),e.roundRect(30,l,165,48,6),e.fill(),e.fillStyle="#ffffff",e.font=`800 17px ${nt}`,e.textAlign="center",e.fillText(r.type,112,l+30),e.fillStyle="#1e293b",e.font=`800 24px ${nt}`,e.textAlign="left",e.fillText(r.days,215,l+34),e.strokeStyle="#e2e8f0",e.lineWidth=1.5,e.beginPath(),e.moveTo(30,l+55),e.lineTo(482,l+55),e.stroke()}),e.fillStyle="#fefce8",e.strokeStyle="#eab308",e.lineWidth=2,e.beginPath(),e.roundRect(30,330,452,125,8),e.fill(),e.stroke(),e.fillStyle="#854d0e",e.font=`800 18px ${nt}`,e.textAlign="left",e.fillText("【 ごみ出しのルールとマナー 】",45,358),e.fillStyle="#334155",e.font=`600 15px ${nt}`,e.fillText("● ごみは収集日当日の朝8時までに出してください。",45,388),e.fillText("● カラス被害防止のため、ネットは隙間なく掛けてください。",45,414),e.fillText("● 粗大ごみ・家電リサイクル品は集積所に出せません。",45,440),e.fillStyle="#64748b",e.font=`700 14px ${nt}`,e.textAlign="center",e.fillText("東京都 清掃環境事務所  /  町内自治会",256,485);const s=new se(n);return s.colorSpace=he,s.anisotropy=4,yt.set(i,s),s}function D2(){const i="can-recycle-box-texture",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1d4ed8",e.fillRect(0,0,512,512),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(12,12,488,488),e.fillStyle="#ffffff",e.font=`900 42px ${nt}`,e.textAlign="center",e.fillText("空き缶 ・ ペットボトル",256,85),e.fillStyle="#bfdbfe",e.font=`700 20px ${nt}`,e.fillText("CANS & PLASTIC BOTTLES ONLY",256,125),e.strokeStyle="#22c55e",e.lineWidth=14,e.beginPath(),e.arc(256,235,65,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`900 36px ${nt}`,e.fillText("リサイクル",256,246),e.fillStyle="#0f172a",e.beginPath(),e.arc(140,360,48,0,Math.PI*2),e.arc(372,360,48,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font=`800 26px ${nt}`,e.fillText("缶",140,368),e.fillText("ボトル",372,368),e.fillStyle="#fef08a",e.font=`700 16px ${nt}`,e.fillText("※ タバコ・一般ゴミの投げ入れ厳禁",256,455);const o=new se(n);return o.colorSpace=he,o.anisotropy=4,yt.set(i,o),o}function U2(){const i="crow-net-fine-texture",t=yt.get(i);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="rgba(14, 76, 52, 0.45)",e.fillRect(0,0,256,256),e.strokeStyle="#10b981",e.lineWidth=2.5;const o=16;for(let r=-256;r<512;r+=o)e.beginPath(),e.moveTo(r,0),e.lineTo(r+256,256),e.stroke(),e.beginPath(),e.moveTo(r,256),e.lineTo(r+256,0),e.stroke();e.strokeStyle="#047857",e.lineWidth=8,e.strokeRect(0,0,256,256);const s=new se(n);return s.wrapS=Ne,s.wrapT=Ne,s.repeat.set(4,4),yt.set(i,s),s}function N2(i,t){const n=new Jt;n.name="streets_and_terrain";const e=[],o=new ee(110,7);o.rotateX(-Math.PI/2),o.translate(0,.002,0),e.push(o);const s=new ee(5,38.5);s.rotateX(-Math.PI/2),s.translate(16,.002,22.75),e.push(s);const r=new ee(5,38.5);r.rotateX(-Math.PI/2),r.translate(-14,.002,-22.75),e.push(r);for(const _ of e){const m=new x(_,kg);m.receiveShadow=!0,n.add(m)}const a=[{w:68.5,d:4,x:-20.75,z:5.5},{w:33.5,d:4,x:35.25,z:5.5},{w:10,d:6,x:0,z:10.5},{w:38.5,d:4,x:-35.75,z:-5.5},{w:63.5,d:4,x:20.25,z:-5.5},{w:3,d:38.5,x:12,z:22.75},{w:3,d:38.5,x:20,z:22.75},{w:3,d:38.5,x:-18,z:-22.75},{w:3,d:38.5,x:-10,z:-22.75}];for(const _ of a){const m=new L(_.w,.15,_.d),p=new x(m,Vg);p.position.set(_.x,.075,_.z),p.receiveShadow=!0,n.add(p)}const l=new L(9.5,.15,3),f=new x(l,uc);f.position.set(8.75,.075,21),f.receiveShadow=!0,n.add(f);const c=new L(9,.15,3),d=new x(c,uc);d.position.set(0,.075,23.5),d.receiveShadow=!0,n.add(d);const h=new L(16.5,.15,24),u=new x(h,Wg);u.position.set(-.25,.075,-24),u.receiveShadow=!0,n.add(u);const g=[{x:-9.5,z:-15,w:2.2,d:1.2},{x:-7.5,z:-17,w:1.8,d:1.8},{x:-5.5,z:-20,w:2,d:1.6},{x:-3.5,z:-23,w:2.2,d:2},{x:-1,z:-25,w:2.4,d:2.2},{x:1.5,z:-25,w:2.2,d:1.8},{x:4,z:-23,w:2,d:1.8},{x:2,z:-19,w:2.2,d:1.8},{x:0,z:-15,w:2,d:2}];for(const _ of g){const m=new L(_.w,.015,_.d),p=new x(m,Xg);p.position.set(_.x,.158,_.z),p.receiveShadow=!0,n.add(p)}return F2(n),t.add({minX:-55,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:-41.5}),t.add({minX:-55,minY:0,minZ:41.5,maxX:55,maxY:10,maxZ:45}),t.add({minX:-55,minY:0,minZ:-45,maxX:-51.5,maxY:10,maxZ:45}),t.add({minX:51.5,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:45}),ps(n,-51,0,0,!1),ps(n,51,0,0,!1),ps(n,16,0,40,!0),ps(n,-14,0,-40,!0),i.add(n),n}function F2(i){const t=[{x:16,z:0,w:4.2,d:6.8,rotY:0},{x:-14,z:0,w:4.2,d:6.8,rotY:0},{x:0,z:0,w:3.6,d:6.8,rotY:0},{x:16,z:5.5,w:4.8,d:3.2,rotY:Math.PI/2},{x:-14,z:-5.5,w:4.8,d:3.2,rotY:Math.PI/2}];for(const r of t){const l=r.rotY===0?r.w/15:r.d/15,f=r.rotY===0?r.d:r.w;for(let c=0;c<8;c++){const d=new ee(r.rotY===0?l:f,r.rotY===0?f:l);d.rotateX(-Math.PI/2);const h=new x(d,Eo);if(r.rotY===0){const u=-r.w/2+c*l*2+l/2;h.position.set(r.x+u,.005,r.z)}else{const u=-r.d/2+c*l*2+l/2;h.position.set(r.x,.005,r.z+u)}i.add(h)}}const n=2.4,e=2.4;for(let r=-50;r<=50;r+=n+e){if(Math.abs(r-16)<3.5||Math.abs(r- -14)<3.5||Math.abs(r)<2.5)continue;const a=new ee(n,.18);a.rotateX(-Math.PI/2);const l=new x(a,Eo);l.position.set(r+n/2,.004,0),i.add(l)}const o=[{z:-3.2,x1:-52,x2:-17},{z:-3.2,x1:-11,x2:52},{z:3.2,x1:-52,x2:13},{z:3.2,x1:19,x2:52}];for(const r of o){const a=r.x2-r.x1,l=new ee(a,.15);l.rotateX(-Math.PI/2);const f=new x(l,Eo);f.position.set(r.x1+a/2,.004,r.z),i.add(f)}const s=[{x:16,z:3.6,w:4,d:.6},{x:16,z:-3.6,w:4,d:.6},{x:-14,z:3.6,w:4,d:.6},{x:-14,z:-3.6,w:4,d:.6},{x:0,z:3.6,w:3.6,d:.6},{x:0,z:-3.6,w:3.6,d:.6},{x:13.6,z:5.5,w:.6,d:3},{x:18.4,z:5.5,w:.6,d:3}];for(const r of s){const a=new L(r.w,.015,r.d),l=new x(a,io);l.position.set(r.x,.155,r.z),l.receiveShadow=!0,i.add(l)}xc(i,16,7.5,Math.PI),xc(i,-14,-7.5,0),O2(i)}function O2(i){const t=new D({map:Qg(),roughness:.55,metalness:.8}),n=[{x:-6,z:1.2},{x:16,z:14},{x:-14,z:-14},{x:28,z:-1.2},{x:-30,z:1.4}],e=new yn(.44,24);e.rotateX(-Math.PI/2);for(const a of n){const l=new x(e,t);l.position.set(a.x,.005,a.z),l.receiveShadow=!0,i.add(l)}const o=new ee(.4,.9);o.rotateX(-Math.PI/2);const s=new D({color:2237996,roughness:.4,metalness:.85}),r=[{x:-22,z:3.25},{x:-8,z:3.25},{x:8,z:3.25},{x:26,z:3.25},{x:-22,z:-3.25},{x:-8,z:-3.25},{x:8,z:-3.25},{x:26,z:-3.25},{x:13.75,z:12},{x:18.25,z:12},{x:13.75,z:28},{x:18.25,z:28}];for(const a of r){const l=new x(o,s);l.position.set(a.x,.005,a.z),i.add(l)}}function xc(i,t,n,e){const o=new ee(3.6,.45);o.rotateX(-Math.PI/2),o.rotateY(e);const s=new x(o,Eo);s.position.set(t,.006,n),i.add(s);const r=new en,a=new Float32Array([-.9,.006,-.6,.9,.006,-.6,0,.006,1.2]);r.setAttribute("position",new Pn(a,3)),r.computeVertexNormals();const l=new x(r,Eo);l.position.set(t,0,n+(e===0?-1.8:1.8)),e!==0&&l.rotateY(e),i.add(l)}function ps(i,t,n,e,o){const s=new Jt,r=new it(.06,.06,1.1,8),a=new L(4.8,.18,.06),l=new x(r,Ie);l.position.set(-2.2,.55,0);const f=new x(r,Ie);f.position.set(2.2,.55,0),s.add(l,f);const c=new x(a,io);c.position.set(0,.8,0);const d=new x(a,io);d.position.set(0,.45,0),s.add(c,d),s.position.set(t,n,e),o&&s.rotateY(Math.PI/2),i.add(s)}function z2(i,t,n,e,o){const s=new Jt;s.name="buildings";let r=null,a=null,l=null;const f=[];for(const c of mf){const d=new Jt;d.name=`building-${c.id}`;const h=3.2,u=c.floors*h,g=c.w/2,_=c.d/2,m=new de(c.wall),p=new de(c.trim),T=new de(c.balcony),w=new D({color:m,roughness:.82,metalness:.08}),v=new D({color:p,roughness:.65,metalness:.12}),I=new D({color:T,roughness:.75,metalness:.15});if(c.id==="b-sunheights"){const R=B2(d,c,t,n,e,w,v,o);r=R.light,f.push(R.update);const E=(c.floors-1)*h,C=new L(c.w,E,c.d),S=new x(C,w);S.position.set(c.x,h+E/2,c.z),S.castShadow=!0,S.receiveShadow=!0,d.add(S),ms(d,c,h,v,I)}else if(c.id==="b-konbini"){const R=k2(d,c,t,n,e,w,v,o);a=R.light,f.push(R.update);const E=(c.floors-1)*h,C=new L(c.w,E,c.d),S=new x(C,w);S.position.set(c.x,h+E/2,c.z),S.castShadow=!0,S.receiveShadow=!0,d.add(S),ms(d,c,h,v,I)}else if(c.id==="b-ramen"){const R=G2(d,c,t,n,e,w,v,o);l=R.light,f.push(R.update);const E=(c.floors-1)*h,C=new L(c.w,E,c.d),S=new x(C,w);S.position.set(c.x,h+E/2,c.z),S.castShadow=!0,S.receiveShadow=!0,d.add(S),ms(d,c,h,v,I)}else{const R=new L(c.w,u,c.d),E=new x(R,w);E.position.set(c.x,u/2,c.z),E.castShadow=!0,E.receiveShadow=!0,d.add(E),t.add({minX:c.x-g,minY:0,minZ:c.z-_,maxX:c.x+g,maxY:u+2,maxZ:c.z+_});const C=W2(d,c,v,n,e,o);C!=null&&C.update&&f.push(C.update),ms(d,c,0,v,I)}Z2(d,c,u,v),Y2(d,c,u),s.add(d)}return i.add(s),{group:s,lobbyLight:r??new Me(16769712,1,10),konbiniLight:a??new Me(16777215,1,12),ramenLight:l??new Me(16750916,1,10),update(c,d){for(const h of f)h(c,d)}}}function B2(i,t,n,e,o,s,r,a){const f=t.w/2,c=7.6,d=8.4,h=.15,u=.35,g=3.2-h,_=new D({map:s2(),roughness:.22,metalness:.08}),m=new L(c,.05,d),p=new x(m,_);p.position.set(t.x,h+.025,t.z),p.receiveShadow=!0,i.add(p);const T=new D({color:16184559,roughness:.5}),w=new L(c,.2,d),v=new x(w,T);v.position.set(t.x,3.2-.1,t.z),i.add(v);const I=4.8,R=5.6,E=new L(I,.08,R),C=new D({color:15789282,roughness:.6}),S=new x(E,C);S.position.set(t.x,3.2-.04,t.z),i.add(S);const M=new L(I+.12,.02,R+.12),P=new x(M,Zn);P.position.set(t.x,3.2-.07,t.z),i.add(P);for(const nn of[-1.8,1.8])for(const wn of[-2,2]){const Mn=new it(.12,.12,.04,12),Ri=new x(Mn,Dt);Ri.position.set(t.x+nn,3.2-.02,t.z+wn);const Bo=new x(new yn(.09,12),Zn);Bo.rotateX(Math.PI/2),Bo.position.set(t.x+nn,3.2-.041,t.z+wn),i.add(Ri,Bo)}const B=new D({map:o2(),roughness:.55,metalness:.02}),k=new L(c,g,u),K=new x(k,B);K.position.set(t.x,h+g/2,t.z+d/2-u/2),i.add(K),n.add({minX:t.x-c/2,minY:0,minZ:t.z+d/2-u,maxX:t.x+c/2,maxY:3.2,maxZ:t.z+d/2+1});const Z=new L(u,g,d),V=new x(Z,B);V.position.set(t.x-c/2+u/2,h+g/2,t.z),i.add(V),n.add({minX:t.x-f-.5,minY:0,minZ:t.z-d/2,maxX:t.x-c/2+u,maxY:3.2,maxZ:t.z+d/2});const j=new L(u,g,d),X=new x(j,B);X.position.set(t.x+c/2-u/2,h+g/2,t.z),i.add(X),n.add({minX:t.x+c/2-u,minY:0,minZ:t.z-d/2,maxX:t.x+f+.5,maxY:3.2,maxZ:t.z+d/2});const rt=2.4,lt=(c-rt)/2,ut=new L(lt,g,u),Tt=new x(ut,B);Tt.position.set(t.x-c/2+lt/2,h+g/2,t.z-d/2+u/2),i.add(Tt),n.add({minX:t.x-c/2,minY:0,minZ:t.z-d/2,maxX:t.x-rt/2,maxY:3.2,maxZ:t.z-d/2+u});const St=new L(lt,g,u),G=new x(St,B);G.position.set(t.x+c/2-lt/2,h+g/2,t.z-d/2+u/2),i.add(G),n.add({minX:t.x+rt/2,minY:0,minZ:t.z-d/2,maxX:t.x+c/2,maxY:3.2,maxZ:t.z-d/2+u});const W=new L(rt,.7,u),Y=new x(W,r);Y.position.set(t.x,3.2-.35,t.z-d/2+u/2),i.add(Y);const st=new Qt({map:jg(),toneMapped:!1}),xt=new x(new L(.8,.35,.08),st);xt.position.set(t.x,3.2-.55,t.z-d/2+u+.02),i.add(xt);const Rt=new L(1.15,2.3,.06),Ut=new x(Rt,ze);Ut.position.set(t.x-.65,h+1.15,t.z-d/2+u/2);const Wt=new x(Rt,ze);Wt.position.set(t.x+.65,h+1.15,t.z-d/2+u/2),i.add(Ut,Wt);const Lt=new L(2.4,.015,1.4),jt=new D({color:2955812,roughness:.95}),U=new x(Lt,jt);U.position.set(t.x,h+.035,t.z-d/2+1.2),i.add(U);const Vt=new it(.18,.16,.65,12),Ft=new x(Vt,Dt);Ft.position.set(t.x+1.5,h+.325,t.z-d/2+.6),i.add(Ft);for(let nn=0;nn<3;nn++){const wn=new We(.04,.012,6,12,Math.PI),Mn=new x(wn,Ie);Mn.position.set(t.x+1.45+nn*.05,h+.72,t.z-d/2+.6),i.add(Mn)}const It=new it(.08,.08,.42,10),Et=new D({color:14231064,roughness:.3,metalness:.2}),qt=new x(It,Et);qt.position.set(t.x-1.5,h+.28,t.z-d/2+.5),i.add(qt);const At=new L(.35,.5,.06),A=new x(At,Dt);A.position.set(t.x+rt/2+.4,h+1.35,t.z-d/2-.05),i.add(A);const y=Io("サンハイツ SUN HEIGHTS","#1d2530","#e2ebf5","RESIDENCE 1-24",512,128),H=new x(new L(2.6,.65,.12),y);H.position.set(t.x,3.2-.25,t.z-d/2-.08),i.add(H);const Q=t.x-c/2+u,ot=.28,tt=1.35,wt=2.6,at=Q+ot/2+.01,_t=t.z-.5,Kt=new L(ot,tt,wt),ct=new D({color:4870749,roughness:.3,metalness:.6}),Mt=new x(Kt,ct);Mt.position.set(at,h+1.25,_t),i.add(Mt);const Ot=new D({map:a2(),roughness:.25,metalness:.5}),Gt=new x(new ee(wt,tt),Ot);Gt.rotateY(Math.PI/2),Gt.position.set(at+ot/2+.005,h+1.25,_t),i.add(Gt);const Pt=new L(.38,.04,wt+.1),ie=new x(Pt,Dt);ie.position.set(Q+.19,h+.56,_t),i.add(ie);const $t=new L(.32,.45,.45),ue=new D({color:2250043,roughness:.4}),F=new x($t,ue);F.position.set(Q+.18,h+.23,_t+wt/2-.3),i.add(F);const vt=new x(new L(.24,.03,.06),Dt);vt.position.set(Q+.18,h+.46,_t+wt/2-.3),i.add(vt);const J=.44,et=1.95,mt=1.6,ft=Q+J/2+.01,Xt=t.z+2.1,me=new x(new L(J,et,mt),new D({color:2041392,roughness:.35,metalness:.5}));me.position.set(ft,h+et/2,Xt),i.add(me);const be=new D({map:l2(),roughness:.3,metalness:.4}),te=new x(new ee(mt,et),be);te.rotateY(Math.PI/2),te.position.set(ft+J/2+.005,h+et/2,Xt),i.add(te),n.add({minX:t.x-c/2,minY:0,minZ:t.z-2,maxX:t.x-c/2+.85,maxY:2.4,maxZ:t.z+3.1}),e.add({id:"apt-mailboxes",x:Q+.95,z:t.z+.6,radius:2.2,prompt:"Check Mail & Parcel Lockers",onInteract:()=>{o.show("Apartment #304 (Relzzy): Tokyo Gas statement, local izakaya coupon, and a notification: Delivery Locker #3 is holding your Amazon parcel!")}});const Te=t.x+c/2-u,ge=1.15,we=1.05,Be=2.4,oe=Te-ge/2-.2,ne=t.z+.9,dn=new D({map:r2(),roughness:.4,metalness:.05}),De=new x(new L(ge,we,Be),dn);De.position.set(oe,h+we/2,ne),De.castShadow=!0,i.add(De);const Ye=new L(.04,.02,Be-.04),an=new x(Ye,Zn);an.position.set(oe-ge/2-.01,h+we-.02,ne),i.add(an);const _e=new L(ge+.08,.06,Be+.08),Se=new D({color:16119803,roughness:.18,metalness:.08}),Ce=new x(_e,Se);Ce.position.set(oe,h+we+.03,ne),i.add(Ce);const ln=new L(.02,.45,Be*.75),Yt=new x(ln,ze);Yt.position.set(oe-ge/2+.05,h+we+.28,ne+.2),i.add(Yt);const Zt=new x(new it(.05,.06,.02,12),Dt),b=new x(new Fe(.045,12,8,0,Math.PI*2,0,Math.PI/2),new D({color:13938487,roughness:.2,metalness:.8})),O=new x(new it(.008,.008,.03,8),Dt);Zt.position.set(oe-ge/4,h+we+.07,ne-.5),b.position.set(oe-ge/4,h+we+.08,ne-.5),O.position.set(oe-ge/4,h+we+.125,ne-.5),i.add(Zt,b,O);const q=new x(new L(.28,.015,.22),new D({color:2367002,roughness:.8})),$=new x(new L(.26,.016,.2),new D({color:16514040,roughness:.5}));q.position.set(oe-ge/4,h+we+.065,ne-.1),$.position.set(oe-ge/4,h+we+.075,ne-.1),i.add(q,$);const z=new x(new it(.015,.02,.03,8),Dt);z.position.set(oe-ge/4+.18,h+we+.075,ne-.1);const ht=new x(new it(.004,.004,.14,6),Dt);ht.position.set(oe-ge/4+.18,h+we+.14,ne-.1),ht.rotateZ(.15),i.add(z,ht);const bt=new x(new L(.2,.05,.18),new D({color:2040616,roughness:.4}));bt.position.set(oe+.05,h+we+.08,ne+.6);const Nt=new x(new L(.06,.04,.2),new D({color:1119773,roughness:.3}));Nt.position.set(oe+.02,h+we+.11,ne+.6),i.add(bt,Nt);const Bt=new x(new it(.06,.07,.02,10),Dt);Bt.position.set(oe+.15,h+we+.07,ne-.6);const dt=new x(new it(.012,.012,.28,8),Dt);dt.position.set(oe+.15,h+we+.21,ne-.6);const gt=new x(new L(.18,.08,.1),new D({color:674347,roughness:.3,metalness:.2}));gt.position.set(oe+.12,h+we+.33,ne-.6),i.add(Bt,dt,gt);const pt=new Me(16768928,1.2,3.5);pt.position.set(oe+.12,h+we+.3,ne-.6),i.add(pt);const Ht=Io("管理事務室","#18202c","#d4af37","CONCIERGE & MGMT",256,128),re=new x(new ee(.24,.12),Ht);re.rotateY(-Math.PI/2),re.position.set(oe-ge/2-.005,h+we+.08,ne-.8),i.add(re);const le=new x(new it(.25,.25,.04,6),Dt);le.position.set(oe+.45,h+.06,ne+.1);const Re=new x(new it(.025,.025,.45,8),Dt);Re.position.set(oe+.45,h+.28,ne+.1);const fe=new x(new L(.44,.06,.42),new D({color:1580582,roughness:.7}));fe.position.set(oe+.45,h+.52,ne+.1);const kt=new x(new L(.05,.44,.4),new D({color:2239030,roughness:.6}));kt.position.set(oe+.64,h+.74,ne+.1),i.add(le,Re,fe,kt);const cn=new x(new L(.08,.6,.45),new D({color:4007959,roughness:.6}));cn.position.set(Te-.05,h+1.5,ne-.6),i.add(cn);const pe=new x(new L(.06,.55,.85),new D({color:1119773,roughness:.3}));pe.position.set(Te-.04,h+1.65,ne+.6);const He=new x(new ee(.8,.5),new Qt({color:2245717}));He.rotateY(-Math.PI/2),He.position.set(Te-.075,h+1.65,ne+.6),i.add(pe,He);const Kn=new D({map:c2(),roughness:.6}),Ze=new x(new ee(1.6,.8),Kn);Ze.rotateY(-Math.PI/2),Ze.position.set(Te-.015,h+1.65,ne-.2),i.add(Ze),n.add({minX:oe-ge/2-.1,minY:0,minZ:ne-Be/2-.1,maxX:t.x+c/2,maxY:2.2,maxZ:ne+Be/2+.2}),e.add({id:"apt-reception-bell",x:oe-ge/2-.4,z:ne-.5,radius:1.8,prompt:"Ring Concierge Desk Bell",onInteract:()=>{a==null||a.playDeskBellSound(),o.show('*Ting!* Resident Manager: "Konnichiwa! Welcome back to Sun Heights. All parcel lockers and facilities are operational."')}}),e.add({id:"apt-notice-board",x:oe-ge/2-.4,z:ne-.1,radius:1.8,prompt:"Read Resident Notices",onInteract:()=>{o.show("[Lobby Notices] ① Trash: Burnable Mon/Thu, Recyclable Wed. ② Annual fire equipment check this Saturday. ③ Please collapse Amazon cardboard boxes.")}});const ci=new D({map:f2(),roughness:.35,metalness:.2}),ye=new x(new ee(1.4,1.05),ci);ye.rotateY(-Math.PI/2),ye.position.set(Te-.015,h+1.6,t.z-2.2),i.add(ye);const qe=1.4,xn=.55,$e=Te-xn/2-.25,fn=t.z-1.2,In=new L(xn,.06,qe),No=new D({color:2825492,roughness:.7}),Ta=new x(In,No);Ta.position.set($e,h+.22,fn);const xf=new L(xn-.04,.18,qe-.04),_f=new D({color:8143650,roughness:.5}),Ea=new x(xf,_f);Ea.position.set($e,h+.33,fn);for(const nn of[-xn/2+.08,xn/2-.08])for(const wn of[-qe/2+.08,qe/2-.08]){const Mn=new x(new it(.02,.015,.22,8),Dt);Mn.position.set($e+nn,h+.11,fn+wn),i.add(Mn)}i.add(Ta,Ea),n.add({minX:$e-xn/2,minY:0,minZ:fn-qe/2,maxX:Te,maxY:1,maxZ:fn+qe/2});const vf=new it(.24,.18,.55,12),wf=new D({color:16119285,roughness:.3}),Aa=new x(vf,wf),Ra=t.x-c/2+.8,Ca=t.z-d/2+.9;Aa.position.set(Ra,h+.275,Ca),i.add(Aa);const Mf=new D({color:3043136,roughness:.4});for(let nn=0;nn<7;nn++){const wn=new Je(.18,.65,5);wn.rotateX(.4);const Mn=new x(wn,Mf);Mn.position.set(Ra,h+.55,Ca),Mn.rotateY(nn*Math.PI*2/7),i.add(Mn)}const Ai=2,Dn=2.4,_n=t.z+d/2-u-.05,Is=new D({color:8153418,roughness:.25,metalness:.7}),Pa=new x(new L(.12,Dn+.06,.08),Is);Pa.position.set(t.x-Ai/2-.06,h+Dn/2,_n);const La=new x(new L(.12,Dn+.06,.08),Is);La.position.set(t.x+Ai/2+.06,h+Dn/2,_n);const Ia=new x(new L(Ai+.24,.12,.08),Is);Ia.position.set(t.x,h+Dn+.06,_n),i.add(Pa,La,Ia);const Sf=new L(.98,Dn,.06),yf=new L(.98,Dn,.06),Fo=new D({color:9081501,roughness:.25,metalness:.75}),Ds=new x(Sf,Fo),Us=new x(yf,Fo);Ds.position.set(t.x-.5,h+Dn/2,_n),Us.position.set(t.x+.5,h+Dn/2,_n),i.add(Ds,Us);const bf=new ee(.45,.22),Tf=new Qt({color:16755234}),Da=new x(bf,Tf);Da.position.set(t.x,h+Dn+.22,_n+.05),i.add(Da);const Ua=new x(new L(.12,.28,.03),Dt);Ua.position.set(t.x+Ai/2+.35,h+1.25,_n+.03);const Ns=new x(new it(.025,.025,.02,10),Zn);Ns.rotateX(Math.PI/2),Ns.position.set(t.x+Ai/2+.35,h+1.28,_n+.05),i.add(Ua,Ns);const un=2,Un=1.8,fi=2.5,vn=_n+Un/2+.05,Na=new x(new L(un,.04,Un),_);Na.position.set(t.x,h+.02,vn),i.add(Na);const Fa=new x(new L(un,.08,Un),Dt);Fa.position.set(t.x,h+fi,vn),i.add(Fa);const Ef=new L(un-.1,fi-.2,.04),Af=new D({color:13424352,roughness:.05,metalness:.9}),Oa=new x(Ef,Af);Oa.position.set(t.x,h+fi/2,vn+Un/2-.02),i.add(Oa);const za=new L(.04,fi,Un),Ba=new x(za,Fo);Ba.position.set(t.x-un/2+.02,h+fi/2,vn);const ka=new x(za,Fo);ka.position.set(t.x+un/2-.02,h+fi/2,vn),i.add(Ba,ka);const Ga=new it(.02,.02,un-.2,8);Ga.rotateZ(Math.PI/2);const Ha=new x(Ga,Dt);Ha.position.set(t.x,h+.9,vn+Un/2-.1),i.add(Ha);const Va=new x(new L(.08,.7,.14),Dt);Va.position.set(t.x+un/2-.06,h+1.25,vn-.2),i.add(Va);const Wa=new Me(16775904,2,5.5);Wa.position.set(t.x,h+fi-.15,vn),i.add(Wa),n.add({minX:t.x-un/2-.2,minY:0,minZ:vn+Un/2-.1,maxX:t.x+un/2+.2,maxY:3.2,maxZ:vn+Un/2+.3}),n.add({minX:t.x-un/2-.2,minY:0,minZ:_n,maxX:t.x-un/2+.1,maxY:3.2,maxZ:vn+Un/2}),n.add({minX:t.x+un/2-.1,minY:0,minZ:_n,maxX:t.x+un/2+.2,maxY:3.2,maxZ:vn+Un/2});let co=!1;e.add({id:"apt-elevator",x:t.x+Ai/2+.35,z:t.z+d/2-.8,radius:1.8,prompt:()=>co?"Step into Elevator":"Call Elevator [Floor 1]",onInteract:()=>{co=!co,co?(a==null||a.playElevatorChime(),o.show("*Ding* Elevator arrives at 1F. The champagne steel doors slide open.")):o.show("The elevator doors glide shut softly.")}});const Fs=new Me(16771279,2.2,16,1.1);Fs.position.set(t.x,3.2-.25,t.z),i.add(Fs);const Xa=new Me(16769200,1.8,8,1.2);Xa.position.set(oe,3.2-.25,ne),i.add(Xa);const Ya=new Me(16770760,1.8,8,1.2);Ya.position.set(t.x,3.2-.25,_n-1.2),i.add(Ya);let Oo=0,zo=0,Os=!1;return{light:Fs,update:(nn,wn)=>{const Ri=Math.hypot(wn.x-t.x,wn.z-(t.z-d/2))<2.6?1:0;Ri>.5&&!Os?(a==null||a.playSlidingDoorSound(),Os=!0):Ri<.5&&(Os=!1),Oo+=(Ri-Oo)*Math.min(1,nn*5),Ut.position.x=t.x-.65-Oo*.75,Wt.position.x=t.x+.65+Oo*.75,zo+=((co?1:0)-zo)*Math.min(1,nn*4),Ds.position.x=t.x-.5-zo*.75,Us.position.x=t.x+.5+zo*.75}}}function k2(i,t,n,e,o,s,r,a){const h=3.0500000000000003,u=.35,g=new L(9.8,.05,11.4),_=new x(g,Yg);_.position.set(t.x,.15+.025,t.z),_.receiveShadow=!0,i.add(_);const m=new L(9.8,.2,11.4),p=new D({color:16120058,roughness:.5}),T=new x(m,p);T.position.set(t.x,3.2-.1,t.z),i.add(T);const w=new D({map:e2(),roughness:.3,metalness:.05}),v=new L(u,h,11.4),I=new x(v,s);I.position.set(t.x+9.8/2-u/2,.15+h/2,t.z),i.add(I),n.add({minX:t.x+9.8/2-u,minY:0,minZ:t.z-11.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+11.4/2});const R=new x(new L(9.8,h,.04),w);R.position.set(t.x,.15+h/2,t.z+11.4/2-.02);const E=new x(new L(t.w,3.2,u),s);E.position.set(t.x,3.2/2,t.z+t.d/2-u/2),i.add(R,E);const C=new D({color:3818062,roughness:.6,metalness:.4}),S=new x(new L(1,2.1,.06),C);S.position.set(t.x-2.5,1.05,t.z+t.d/2+.01);const M=new x(new L(.5,.6,.22),Dt);M.position.set(t.x+2,1.5,t.z+t.d/2+.08),i.add(S,M),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z+11.4/2-u,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const P=new x(new L(9.8,h,.04),w);P.position.set(t.x,.15+h/2,t.z-11.4/2+.02);const B=new x(new L(t.w,3.2,u),s);B.position.set(t.x,3.2/2,t.z-t.d/2+u/2),i.add(P,B),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z-t.d/2-1,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z-11.4/2+u});const k=2.4,K=(11.4-k)/2,Z=new L(.1,2.4,K),V=new x(Z,ze);V.position.set(t.x-9.8/2+.05,.15+1.2,t.z+11.4/2-K/2);const j=new L(.1,2.4,K),X=new x(j,ze);X.position.set(t.x-9.8/2+.05,.15+1.2,t.z-11.4/2+K/2),i.add(V,X),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z+k/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z+11.4/2}),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z-11.4/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z-k/2});const rt=new L(.06,2.3,1.15),lt=new x(rt,ze),ut=new x(rt,ze);lt.position.set(t.x-9.8/2+.05,.15+1.15,t.z+.6),ut.position.set(t.x-9.8/2+.05,.15+1.15,t.z-.6),i.add(lt,ut);const Tt=new L(.4,.8,11.4),St=new x(Tt,r);St.position.set(t.x-9.8/2+.2,3.2-.4,t.z),i.add(St);const G=Io("CONVENIENCE 24H","#0c6c44","#ffffff","FAMILY STORE",512,160),W=new x(new ee(7.5,.95),G);W.rotateY(-Math.PI/2),W.position.set(t.x-9.8/2-.05,3.2-.4,t.z),i.add(W);const Y=8.6,st=new L(.65,2.4,Y),xt=new D({color:1317410,roughness:.3,metalness:.5}),Rt=new x(st,xt);Rt.position.set(t.x+9.8/2-.5,.15+1.2,t.z),i.add(Rt);const Ut=new Qt({map:n2(),toneMapped:!1}),Wt=new x(new ee(Y,2.2),Ut);Wt.rotateY(-Math.PI/2),Wt.position.set(t.x+9.8/2-.84,.15+1.2,t.z),i.add(Wt),n.add({minX:t.x+9.8/2-1.1,minY:0,minZ:t.z-Y/2,maxX:t.x+9.8/2,maxY:2.6,maxZ:t.z+Y/2}),e.add({id:"konbini-drinks",x:t.x+9.8/2-1.4,z:t.z,radius:2,prompt:"Open Beverage Chiller & Grab Drink",onInteract:()=>{o.show("Cold blast of air! Grabbed an ice-cold Pocari Sweat and Melty Blend Green Tea.")}}),_c(i,t.x+.8,.15,t.z+1.8,n),_c(i,t.x+.8,.15,t.z-2.2,n),e.add({id:"konbini-shelf-noodles",x:t.x+.8,z:t.z+1.8,radius:1.8,prompt:"Browse Cup Noodles & Snacks",onInteract:()=>{o.show("Nissin Seafood Cup Noodles, Curry Ramen, Calbee Seaweed Chips, and Matcha Pocky in stock.")}}),e.add({id:"konbini-shelf-bento",x:t.x+.8,z:t.z-2.2,radius:1.8,prompt:"Inspect Bento & Onigiri Shelf",onInteract:()=>{o.show("Spicy salmon onigiri, tuna mayo rice ball, and hot tonkatsu bento lunchbox ready to eat.")}});const Lt=3.6,jt=1.05,U=.98,Vt=new L(jt,U,Lt),Ft=new D({map:t2(),roughness:.25,metalness:.05}),It=new x(Vt,Ft);It.position.set(t.x-2.2,.15+U/2,t.z-3.4),i.add(It);const Et=new L(jt+.08,.06,Lt+.08),qt=new D({color:2040616,roughness:.25,metalness:.15}),At=new x(Et,qt);At.position.set(t.x-2.2,.15+U+.03,t.z-3.4),i.add(At),n.add({minX:t.x-2.2-jt/2-.1,minY:0,minZ:t.z-3.4-Lt/2,maxX:t.x-2.2+jt/2+.1,maxY:1.5,maxZ:t.z-3.4+Lt/2});const A=new x(new it(.04,.04,.2,8),Dt);A.position.set(t.x-2.2,.15+U+.16,t.z-3.8);const y=new x(new L(.36,.26,.04),new Qt({color:1740620}));y.position.set(t.x-2.2,.15+U+.3,t.z-3.8),y.rotateX(-.2),i.add(A,y);const H=new x(new L(.14,.06,.2),new D({color:1118481,roughness:.3}));H.position.set(t.x-1.85,.15+U+.09,t.z-3.6),H.rotateX(.15),i.add(H);const Q=new L(.18,.02,.14),ot=new D({color:30668,roughness:.3}),tt=new x(Q,ot);tt.position.set(t.x-1.85,.15+U+.07,t.z-4),i.add(tt);const wt=.95,at=.65,_t=.55,Kt=new Jt;Kt.position.set(t.x-2,.15+U+.06,t.z-2.3);const ct=new x(new L(_t,at,wt),Dt);ct.position.set(0,at/2,0),Kt.add(ct);const Mt=new Qt({map:i2(),toneMapped:!1}),Ot=new x(new ee(wt*.95,.22),Mt);Ot.rotateY(Math.PI/2),Ot.position.set(_t/2+.01,at-.12,0),Kt.add(Ot);const Gt=new x(new ee(wt*.95,at*.55),ze);Gt.rotateY(Math.PI/2),Gt.position.set(_t/2+.01,at*.38,0),Kt.add(Gt);const Pt=new L(.08,.035,.14),ie=new D({color:14254616,roughness:.85});for(let _e=0;_e<3;_e++){const Se=new x(Pt,ie);Se.position.set(0,.18,-.28+_e*.28),Kt.add(Se)}const $t=new Fe(.055,10,8);$t.scale(1,.6,1);const ue=new D({color:16776437,roughness:.9});for(let _e=0;_e<3;_e++){const Se=new x($t,ue);Se.position.set(0,.36,-.28+_e*.28),Kt.add(Se)}const F=new Me(16742161,2.2,4.5);F.position.set(0,at-.1,0),Kt.add(F),i.add(Kt);const vt=new L(.52,.45,.48),J=new x(vt,Dt);J.position.set(t.x-2.8,.15+U+.28,t.z-4.5),i.add(J);const et=new L(.42,.62,.42),mt=new D({color:2040616,roughness:.3,metalness:.6}),ft=new x(et,mt);ft.position.set(t.x-2.8,.15+U+.36,t.z-1.8),i.add(ft);const Xt=new L(.35,1.25,2.6),me=new D({color:4015182,metalness:.6,roughness:.3}),be=new x(Xt,me);be.position.set(t.x-9.8/2+.65,.15+.65,t.z+3.4),i.add(be);const te=[14231064,1599700,2066488,15902298,9055202,16738740];for(let _e=0;_e<8;_e++){const Se=new x(new L(.06,.24,.28),new D({color:te[_e%te.length],roughness:.4}));Se.position.set(t.x-9.8/2+.68,.15+.85,t.z+2.3+_e*.3),Se.rotateZ(.2),i.add(Se)}const Te=new L(.75,1.95,.68),ge=new D({color:1005876,roughness:.35}),we=new x(Te,ge);we.position.set(t.x-9.8/2+.55,.15+.98,t.z-4.6),i.add(we);const Be=new x(new ee(.44,.32),new Qt({color:3728798}));Be.rotateY(Math.PI/2),Be.position.set(t.x-9.8/2+.94,.15+1.35,t.z-4.6),i.add(Be),e.add({id:"konbini-famichiki",x:t.x-2,z:t.z-2.3,radius:1.8,prompt:"Buy Hot FamiChiki Fried Chicken [¥220]",onInteract:()=>{o.show("*Warm & Crispy!* You received piping hot FamiChiki in its tear-open paper pouch.")}}),e.add({id:"konbini-pay",x:t.x-1.8,z:t.z-3.6,radius:1.8,prompt:"Pay at Register with Suica / Cash [¥420]",onInteract:()=>{o.show('*Pii-rin!* "Arigatou gozaimashita!" Suica card accepted.')}});const oe=new Me(16777215,2.8,18,1.1);oe.position.set(t.x,3.2-.35,t.z),i.add(oe);const ne=new Me(16774634,2,9,1.2);ne.position.set(t.x-2,3.2-.35,t.z-3.2),i.add(ne);const dn=new Me(15792383,2,14,1.2);dn.position.set(t.x+1.8,3.2-.35,t.z),i.add(dn);for(let _e=-3.2;_e<=3.2;_e+=2.2){const Se=new Jt;Se.position.set(t.x,3.2-.08,t.z+_e);const Ce=new x(new L(4.2,.08,.35),Dt);Se.add(Ce);const ln=new x(new L(4,.03,.08),Zn);ln.position.set(0,-.04,-.08);const Yt=new x(new L(4,.03,.08),Zn);Yt.position.set(0,-.04,.08),Se.add(ln,Yt),i.add(Se)}let De=0,Ye=!1;return{light:oe,update:(_e,Se)=>{const ln=Math.hypot(Se.x-(t.x-4.9),Se.z-t.z)<2.8?1:0;ln>.5&&!Ye?(a==null||a.playFamilyMartChime(),a==null||a.playSlidingDoorSound(),Ye=!0):ln<.5&&(Ye=!1),De+=(ln-De)*Math.min(1,_e*5),lt.position.z=t.z+.6+De*.7,ut.position.z=t.z-.6-De*.7}}}function _c(i,t,n,e,o){const l=new L(.95,.16,4.8),f=new D({color:15265008,roughness:.35,metalness:.4}),c=new x(l,f);c.position.set(t,n+.08,e),c.castShadow=!0,i.add(c);const d=new L(.04,1.55,4.8),h=new D({color:16777215,roughness:.4}),u=new x(d,h);u.position.set(t,n+1.55/2,e),i.add(u);const g=new D({color:883270,roughness:.35}),_=new L(.95+.04,1.55,.08),m=new x(_,g);m.position.set(t,n+1.55/2,e-4.8/2);const p=new x(_,g);p.position.set(t,n+1.55/2,e+4.8/2),i.add(m,p);const T=Io("新発売 NEW","#ffaa00","#221100","RECOMMENDED",256,128),w=new x(new ee(.7,.35),T);w.position.set(t,n+1.55-.25,e-4.8/2-.05);const v=new x(new ee(.7,.35),T);v.position.set(t,n+1.55-.25,e+4.8/2+.05),v.rotateY(Math.PI),i.add(w,v);const I=new D({color:16119802,roughness:.3,metalness:.2}),R=new Qt({color:14231064}),E=new Qt({color:32972}),C=new D({color:14231064,roughness:.4}),S=new D({color:1599700,roughness:.4}),M=new D({color:14264358,roughness:.3,metalness:.4}),P=new D({color:2066488,roughness:.4}),B=new D({color:15887133,roughness:.4}),k=new D({color:1579032,roughness:.8}),K=new D({color:16316664,roughness:.5});for(let Z=0;Z<4;Z++){const V=n+.22+Z*.38;for(const j of[-1,1]){const X=new L(.42,.03,4.7),rt=new x(X,I);rt.position.set(t+j*.24,V,e),i.add(rt);const lt=new L(.02,.04,4.8-.1),ut=new x(lt,Z%2===0?R:E);if(ut.position.set(t+j*.45,V,e),i.add(ut),Z===3){const Tt=new it(.055,.042,.12,10),St=14;for(let G=0;G<St;G++){const W=e-2.4+.35+G*.3,Y=G%3===0?C:G%3===1?S:M,st=new x(Tt,Y);st.position.set(t+j*.26,V+.075,W);const xt=new yn(.057,10);xt.rotateX(-Math.PI/2);const Rt=new x(xt,K);Rt.position.set(t+j*.26,V+.136,W),i.add(st,Rt)}}else if(Z===2){const Tt=new L(.04,.16,.09),St=16;for(let G=0;G<St;G++){const W=e-2.4+.3+G*.26,Y=G%4===0?C:G%4===1?P:G%4===2?B:S,st=new x(Tt,Y);st.position.set(t+j*.26,V+.095,W),i.add(st)}}else if(Z===1){const Tt=new Je(.055,.09,3),St=new L(.22,.05,.16);for(let G=0;G<10;G++){const W=e-2.4+.4+G*.42;if(G%2===0){const Y=new x(Tt,k);Y.position.set(t+j*.26,V+.06,W),i.add(Y)}else{const Y=new x(St,k);Y.position.set(t+j*.26,V+.04,W);const st=new x(new L(.18,.02,.12),K);st.position.set(t+j*.26,V+.066,W);const xt=new x(new L(.08,.025,.06),M);xt.position.set(t+j*.26,V+.08,W),i.add(Y,st,xt)}}}else{const Tt=new it(.04,.04,.14,8);for(let St=0;St<14;St++){const G=e-2.4+.35+St*.3,W=St%3===0?P:St%3===1?S:M,Y=new x(Tt,W);Y.position.set(t+j*.26,V+.08,G),i.add(Y)}}}}o.add({minX:t-.95/2-.1,minY:n,minZ:e-4.8/2,maxX:t+.95/2+.1,maxY:n+1.55,maxZ:e+4.8/2})}function G2(i,t,n,e,o,s,r,a){const h=3.0500000000000003,u=.35,g=new D({map:g2(),roughness:.45,metalness:.08}),_=new L(5.8,.05,7.4),m=new x(_,g);m.position.set(t.x,.15+.025,t.z),m.receiveShadow=!0,i.add(m);const p=new D({color:2364940,roughness:.7}),T=new L(5.8,.2,7.4),w=new x(T,p);w.position.set(t.x,3.2-.1,t.z),i.add(w);const v=new D({color:4006932,roughness:.6});for(const dt of[-1.8,0,1.8]){const gt=new x(new L(5.8,.16,.18),v);gt.position.set(t.x,3.2-.16,t.z+dt),i.add(gt)}const I=new D({map:m2(),roughness:.6,metalness:.02}),R=new L(5.8,h,u),E=new x(R,I);E.position.set(t.x,.15+h/2,t.z+7.4/2-u/2),i.add(E),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z+7.4/2-u,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const C=new L(u,h,7.4),S=new x(C,I);S.position.set(t.x-5.8/2+u/2,.15+h/2,t.z),i.add(S),n.add({minX:t.x-t.w/2-1,minY:0,minZ:t.z-7.4/2,maxX:t.x-5.8/2+u,maxY:3.2,maxZ:t.z+7.4/2});const M=new L(u,h,7.4),P=new x(M,I);P.position.set(t.x+5.8/2-u/2,.15+h/2,t.z),i.add(P),n.add({minX:t.x+5.8/2-u,minY:0,minZ:t.z-7.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+7.4/2});const B=2,k=(5.8-B)/2,K=new D({color:1840915,roughness:.85}),Z=new L(k,h,u),V=new x(Z,K);V.position.set(t.x-5.8/2+k/2,.15+h/2,t.z-7.4/2+u/2),i.add(V),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z-7.4/2,maxX:t.x-B/2,maxY:3.2,maxZ:t.z-7.4/2+u});const j=new L(k,h,u),X=new x(j,K);X.position.set(t.x+5.8/2-k/2,.15+h/2,t.z-7.4/2+u/2),i.add(X),n.add({minX:t.x+B/2,minY:0,minZ:t.z-7.4/2,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z-7.4/2+u});const rt=new x(new L(B,.45,u),r);rt.position.set(t.x,3.2-.225,t.z-7.4/2+u/2),i.add(rt);const lt=4.8,ut=.65,Tt=new L(lt,.08,ut),St=new D({color:2237997,roughness:.5,metalness:.2}),G=new x(Tt,St);G.rotateX(.18),G.position.set(t.x,3.2+.05,t.z-7.4/2-.25),i.add(G);for(const dt of[-1.9,-.6,.6,1.9]){const gt=new x(new L(.08,.22,.35),v);gt.position.set(t.x+dt,3.2-.12,t.z-7.4/2-.15),i.add(gt)}const W=new D({map:h2(),roughness:.4,metalness:.05}),Y=new x(new L(4.4,.82,.1),W);Y.position.set(t.x,3.2-.45,t.z-7.4/2-.08),i.add(Y);for(const dt of[-1.3,1.3]){const gt=new x(new it(.012,.012,.25,8),Dt);gt.rotateX(Math.PI/4),gt.position.set(t.x+dt,3.2-.05,t.z-7.4/2-.18);const pt=new x(new Je(.06,.08,10),Dt);pt.rotateX(-Math.PI/3),pt.position.set(t.x+dt,3.2-.12,t.z-7.4/2-.26),i.add(gt,pt);const Ht=new Me(16775904,1.2,2.5);Ht.position.set(t.x+dt,3.2-.16,t.z-7.4/2-.25),i.add(Ht)}const st=3.2-1.25,xt=t.z-7.4/2-.38,Rt=(dt,gt)=>{const pt=new Jt;pt.position.set(dt,st,xt);const Ht=new x(new it(.014,.014,.38,8),Ie);Ht.rotateX(Math.PI/2),Ht.position.set(0,.38,.18);const re=new x(new We(.025,.006,6,12),Ie);re.position.set(0,.38,0),pt.add(Ht,re);const le=new x(new it(.005,.005,.14,6),Dt);le.position.set(0,.31,0),pt.add(le);const Re=new x(new it(.12,.16,.05,16),Ie);Re.position.set(0,.22,0),pt.add(Re);const fe=new D({map:d2(gt),roughness:.5,metalness:.05,emissive:new de(14165528),emissiveIntensity:.35}),kt=new it(.18,.18,.44,16),cn=new x(kt,fe);pt.add(cn);const pe=new x(new it(.16,.12,.05,16),Ie);pe.position.set(0,-.22,0),pt.add(pe);const He=new Me(16733474,1.4,4.2);return He.position.set(0,0,0),pt.add(He),pt},Ut=Rt(t.x-1.45,"らーめん"),Wt=Rt(t.x+1.45,"味自慢");i.add(Ut,Wt);const Lt=new it(.016,.016,B+.15,8);Lt.rotateZ(Math.PI/2);const jt=new x(Lt,v);jt.position.set(t.x,3.2-.72,t.z-7.4/2-.06),i.add(jt);const U=new D({map:u2(),roughness:.85,side:tn}),Vt=new x(new ee(B*.96,.72),U);Vt.position.set(t.x,3.2-1.1,t.z-7.4/2-.07),i.add(Vt);const Ft=.68,It=1.62,Et=.52,qt=t.x-1.78,At=t.z-7.4/2-.28,A=new x(new L(Ft,It,Et),new D({color:14210252,roughness:.4,metalness:.2}));A.position.set(qt,.15+It/2,At),i.add(A);const y=new D({map:p2(),roughness:.35,metalness:.1}),H=new x(new ee(Ft*.95,It*.95),y);H.position.set(qt,.15+It/2,At-Et/2-.005),H.rotateY(Math.PI),i.add(H),n.add({minX:qt-Ft/2-.05,minY:0,minZ:At-Et/2,maxX:qt+Ft/2+.05,maxY:It,maxZ:At+Et/2+.1}),e.add({id:"ramen-kenbaiki",x:qt,z:At-.6,radius:1.8,prompt:"Buy Ramen Ticket at Kenbaiki [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),o.show("*Chink! Zzzzt!* Purchased [Special Tonkotsu Ramen ¥980]. Step inside and hand your ticket to Master at the counter!")}});const Q=4.2,ot=.98,tt=.72,wt=t.x,at=t.z+.1,_t=new L(Q,ot,tt),Kt=new D({color:2825234,roughness:.6}),ct=new x(_t,Kt);ct.position.set(wt,.15+ot/2,at),i.add(ct);const Mt=new L(Q+.12,.06,tt+.08),Ot=new D({color:11367746,roughness:.28,metalness:.05}),Gt=new x(Mt,Ot);Gt.position.set(wt,.15+ot+.03,at),i.add(Gt);const Pt=new L(Q+.12,.18,.24),ie=new D({color:9065514,roughness:.35}),$t=new x(Pt,ie);$t.position.set(wt,.15+ot+.12,at+tt/2-.12),i.add($t);const ue=new D({color:1579036,roughness:.5}),F=new D({color:4006932,roughness:.5});for(let dt=0;dt<4;dt++){const gt=t.x-1.5+dt*1,pt=at-tt/2-.38,Ht=new x(new it(.18,.18,.03,12),Dt);Ht.position.set(gt,.15+.015,pt);const re=new x(new it(.025,.025,.48,8),F);re.position.set(gt,.15+.255,pt);const le=new x(new We(.12,.01,6,12),Dt);le.rotateX(Math.PI/2),le.position.set(gt,.15+.18,pt);const Re=new x(new it(.19,.19,.08,14),ue);Re.position.set(gt,.15+.53,pt),i.add(Ht,re,le,Re)}const vt=.28,J=.14,et=t.x-.5,mt=at-.08,ft=.15+ot+.06,Xt=new x(new it(vt/2,vt*.28,J,16,1,!0),new D({color:1579032,roughness:.15,side:tn}));Xt.position.set(et,ft+J/2,mt),i.add(Xt);const me=new x(new yn(vt*.46,16),new D({color:13934677,roughness:.25}));me.rotateX(-Math.PI/2),me.position.set(et,ft+J-.015,mt),i.add(me);const be=new x(new We(.065,.012,6,12),new D({color:16109665,roughness:.6}));be.rotateX(Math.PI/2),be.position.set(et+.02,ft+J-.008,mt),i.add(be);for(let dt=0;dt<2;dt++){const gt=new x(new it(.038,.038,.01,10),new D({color:10176037,roughness:.7}));gt.position.set(et-.04+dt*.05,ft+J,mt-.03+dt*.04),i.add(gt)}const te=new x(new it(.03,.03,.01,10),new D({color:16514038,roughness:.5}));te.position.set(et+.05,ft+J,mt-.04);const Te=new x(new it(.018,.018,.012,8),new D({color:16753920,roughness:.3}));Te.position.set(et+.05,ft+J+.002,mt-.04),i.add(te,Te);const ge=new x(new ee(.065,.09),new D({color:1316884,roughness:.9,side:tn}));ge.rotateY(-.3),ge.position.set(et-.07,ft+J+.04,mt-.05),i.add(ge);const we=new x(new it(.025,.025,.008,8),new D({color:2263842,roughness:.8}));we.position.set(et,ft+J+.002,mt+.04),i.add(we);const Be=[];for(let dt=0;dt<4;dt++){const gt=new x(new ee(.22,.22),gc);gt.position.set(et+(Math.random()-.5)*.08,ft+.12+dt*.16,mt),i.add(gt),Be.push(gt)}const oe=new it(.035,.035,.12,10),ne=new x(oe,new D({color:1119773,roughness:.2,metalness:.1}));ne.position.set(t.x+.9,ft+.06,at);const dn=new x(oe,new D({color:12853266,roughness:.3}));dn.position.set(t.x+1.05,ft+.06,at);const De=new x(new it(.025,.025,.09,8),Dt);De.position.set(t.x+1.18,ft+.045,at),i.add(ne,dn,De);const Ye=new x(new L(.12,.18,.14),new D({color:5911582,roughness:.6}));Ye.position.set(t.x+1.4,ft+.09,at);const an=new x(new L(.08,.08,.1),new D({color:16119278,roughness:.8}));an.position.set(t.x+1.4,ft+.2,at),i.add(Ye,an);const _e=new x(new it(.06,.07,.22,10),new D({color:14213352,roughness:.2,metalness:.8}));_e.position.set(t.x-1.4,ft+.11,at);const Se=new x(new it(.032,.028,.09,8),ze);Se.position.set(t.x-1.22,ft+.045,at),i.add(_e,Se);const Ce=t.z+1.7,ln=4.2,Yt=.92,Zt=new x(new L(ln,Yt,.85),new D({color:9081500,roughness:.35,metalness:.75}));Zt.position.set(t.x,.15+Yt/2,Ce),i.add(Zt);const b=new x(new L(ln*.9,.45,.95),new D({color:7239298,roughness:.3,metalness:.8}));b.position.set(t.x,3.2-.45,Ce),i.add(b);const O=new Me(16773341,2.2,5.5);O.position.set(t.x,3.2-.65,Ce),i.add(O);const q=new it(.24,.24,.48,14);for(let dt=0;dt<2;dt++){const gt=t.x-.9+dt*.58,pt=new x(q,Dt);pt.position.set(gt,.15+Yt+.24,Ce-.05);const Ht=new x(new yn(.22,12),new D({color:13143874,roughness:.4}));Ht.rotateX(-Math.PI/2),Ht.position.set(gt,.15+Yt+.46,Ce-.05);const re=new x(new We(.04,.008,4,8),Dt);re.position.set(gt-.25,.15+Yt+.4,Ce-.05);const le=new x(new We(.04,.008,4,8),Dt);le.position.set(gt+.25,.15+Yt+.4,Ce-.05),i.add(pt,Ht,re,le);for(let Re=0;Re<3;Re++){const fe=new x(new ee(.35,.35),gc);fe.position.set(gt+(Math.random()-.5)*.1,.15+Yt+.55+Re*.25,Ce-.05),i.add(fe),Be.push(fe)}}const $=new L(.55,.35,.48),z=new x($,Dt);z.position.set(t.x+.7,.15+Yt+.18,Ce-.05),i.add(z);for(let dt=0;dt<2;dt++){const gt=new x(new it(.012,.012,.24,6),new D({color:5911582}));gt.rotateX(.3),gt.position.set(t.x+.6+dt*.18,.15+Yt+.42,Ce-.2),i.add(gt)}for(let dt=0;dt<4;dt++){const gt=new x(new it(.14,.08,.08,12,1,!0),new D({color:dt%2===0?14165528:16316664,roughness:.2}));gt.position.set(t.x+1.5,.15+Yt+.04+dt*.05,Ce),i.add(gt)}["特製豚骨 ¥980","チャーシュー麺 ¥1100","濃厚魚介味噌 ¥950","辛味噌らーめん ¥920","替玉(一玉) ¥150","博多一口餃子 ¥380"].forEach((dt,gt)=>{const pt=Io(dt,"#e2caa0","#1c1208",void 0,256,64),Ht=new x(new ee(.38,.85),pt);Ht.position.set(t.x-1.6+gt*.64,.15+2.05,t.z+7.4/2-u-.02),i.add(Ht)}),n.add({minX:wt-Q/2-.1,minY:0,minZ:at-tt/2,maxX:wt+Q/2+.1,maxY:1.5,maxZ:t.z+7.4/2}),e.add({id:"ramen-counter",x:t.x-.5,z:at-.8,radius:1.8,prompt:"Sit at Ramen Bar & Order Special Chashu Tonkotsu [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),o.show('"Hai, irasshai!" Master presents a steaming bowl of rich garlic tonkotsu ramen with tender chashu, soft-boiled ajitama, and wavy handmade noodles. It smells incredible!')}});for(const dt of[-1,1]){const gt=new x(new it(.004,.004,.75,6),Ie);gt.position.set(t.x+dt,3.2-.45,at);const pt=new x(new Je(.18,.14,12,1,!0),new D({color:1582106,roughness:.4}));pt.position.set(t.x+dt,3.2-.82,at),i.add(gt,pt);const Ht=new Me(16753988,1.8,6.5,1.2);Ht.position.set(t.x+dt,3.2-.9,at),i.add(Ht)}const bt=new Me(16750916,2.2,14,1.1);bt.position.set(t.x,3.2-.35,t.z),i.add(bt);let Nt=0;return{light:bt,update:(dt,gt)=>{Nt+=dt;const pt=Math.sin(Nt*2)*.05;Ut.rotation.z=pt,Wt.rotation.z=-pt,Be.forEach((Ht,re)=>{const le=(Nt*.55+re*.18)%1;Ht.position.y+=dt*.25,Ht.scale.setScalar(.75+le*.85),Ht.rotation.z+=dt*.15})}}}function Vi(i){const t=new Jt,n=.92,e=.5,o=.16,s=new it(.012,.012,n,6),r=i==="izakaya"||i==="cafe"||i==="bookstore"?new D({color:4007706,roughness:.7}):Ie;for(const v of[-1,1]){const I=v*e/2,R=new x(s,r);R.position.set(I,n/2,.07),R.rotation.x=-o,t.add(R);const E=new x(s,r);E.position.set(I,n/2,-.07),E.rotation.x=o,t.add(E)}const a=new it(.012,.012,e+.04,6);a.rotateZ(Math.PI/2);const l=new x(a,Dt);l.position.set(0,n-.02,0),t.add(l);const f=new it(.008,.008,e,6);f.rotateZ(Math.PI/2);const c=new x(f,Dt);c.position.set(0,.15,0),t.add(c);const d=new D({color:i==="dental"||i==="cleaners"?2381982:3818062,roughness:.55}),h=new L(e*.78,.09,.2),u=new x(h,d);u.position.set(0,.16,0),t.add(u);const g=new it(.02,.02,.02,8),_=new x(g,Dt);_.position.set(.12,.21,0),t.add(_);const m=new Qt({map:C2(i),toneMapped:!1}),p=new ee(e-.04,.68),T=new x(p,m);T.position.set(0,.46,.075),T.rotation.x=-o,t.add(T);const w=new x(p,m);return w.position.set(0,.46,-.075),w.rotation.x=o,w.rotation.y=Math.PI,t.add(w),t}function xo(){const i=new Jt,t=.38,n=.55,e=.22,o=new L(t,n,e),s=new D({color:9082016,metalness:.85,roughness:.25,wireframe:!0}),r=new x(o,s);r.position.set(0,n/2,0),i.add(r);const a=new D({color:2237997,roughness:.6,metalness:.4}),l=new x(new L(t+.02,.04,e+.02),a);l.position.set(0,.02,0),i.add(l);const f=new D({color:14544632,roughness:.15,transparent:!0,opacity:.6}),c=new D({color:1711136,roughness:.3});return[{x:-.1,z:-.04,rx:.06,rz:-.08},{x:.08,z:.03,rx:-.05,rz:.09},{x:-.02,z:.05,rx:.08,rz:.04}].forEach(h=>{const u=new Jt;u.position.set(h.x,.1,h.z),u.rotation.x=h.rx,u.rotation.z=h.rz;const g=new x(new it(.006,.006,.72,6),Dt);g.position.set(0,.36,0);const _=new x(new Je(.032,.48,8),f);_.position.set(0,.28,0);const m=new x(new We(.032,.009,6,12,Math.PI),c);m.position.set(.032,.72,0),m.rotation.z=Math.PI/2,u.add(g,_,m),i.add(u)}),i}function H2(){const i=new Jt,t=new D({color:4336925,roughness:.75}),n=new x(new L(.56,.04,.46),t);n.position.set(0,.2,0),i.add(n);for(const d of[-.22,.22])for(const h of[-.18,.18]){const u=new x(new L(.05,.2,.05),t);u.position.set(d,.1,h),i.add(u)}const e=new D({color:12886895,roughness:.88}),o=new it(.24,.24,.48,16),s=new x(o,e);s.position.set(0,.46,0),i.add(s);const r=new D({color:5913892,roughness:.8});for(const d of[.32,.6]){const h=new x(new We(.245,.014,6,16),r);h.position.set(0,d,0),h.rotation.x=Math.PI/2,i.add(h)}const a=new D({color:16777215,roughness:.5}),l=new x(new yn(.12,16),a);l.position.set(0,.46,.245),i.add(l);const f=new Qt({color:13379869,toneMapped:!1}),c=new x(new ee(.07,.07),f);return c.position.set(0,.46,.248),i.add(c),i}function vc(i){const t=new Jt,n=new it(.012,.012,.44,6);n.rotateX(Math.PI/2);const e=new x(n,Ie);e.position.set(0,.35,.22);const o=new x(n,Ie);o.position.set(0,-.35,.22),t.add(e,o);const s=.12,r=.88,a=.42,l=new D({color:2238512,roughness:.4,metalness:.6}),f=new x(new L(s,r,a),l);f.position.set(0,0,.42),t.add(f);const c=new Qt({color:i==="dental"?14218746:14220014,toneMapped:!1}),d=new ee(a-.04,r-.04);for(const u of[-1,1]){const g=new x(d,c);if(g.position.set(u*(s/2+.005),0,.42),g.rotation.y=u*Math.PI/2,t.add(g),i==="pharmacy"){const _=new Qt({color:43115,toneMapped:!1}),m=new x(new ee(.07,.24),_);m.position.set(u*(s/2+.008),.08,.42),m.rotation.y=u*Math.PI/2;const p=new x(new ee(.24,.07),_);p.position.set(u*(s/2+.008),.08,.42),p.rotation.y=u*Math.PI/2,t.add(m,p)}else{const _=new Qt({color:2062988,toneMapped:!1}),m=new x(new yn(.12,16),_);m.position.set(u*(s/2+.008),.08,.42),m.rotation.y=u*Math.PI/2,t.add(m)}}const h=new Me(i==="dental"?10217717:9369039,.8,3.5);return h.position.set(0,0,.45),t.add(h),t}function V2(){const i=new Jt,t=.82,n=.85,e=.48,o=new D({color:4014922,roughness:.5,metalness:.6}),s=new x(new L(t,n-.12,e),o);s.position.set(0,n/2,0),i.add(s);const r=new it(.04,.04,.02,8);r.rotateZ(Math.PI/2);for(const c of[-.34,.34])for(const d of[-.18,.18]){const h=new x(r,Ie);h.position.set(c,.04,d),i.add(h)}const a=[10365483,2381982,1996869,14251812,5976714,1975344];for(let c=-.32;c<.34;c+=.075){const d=a[Math.floor(Math.random()*a.length)],h=new D({color:d,roughness:.7}),u=new x(new L(.065,.18,.36),h);u.position.set(c,n+.08,0),u.rotation.y=(Math.random()-.5)*.15,i.add(u)}const l=new Qt({color:16765243,toneMapped:!1}),f=new x(new ee(.32,.14),l);return f.position.set(0,n-.08,e/2+.01),i.add(f),i}function W2(i,t,n,e,o,s){const a=t.w/2,l=t.d/2,f=t.front==="s"||t.front==="n"?t.w:t.d,c=new Jt;let d=0,h=t.x,u=t.z;t.front==="s"?(d=Math.PI,h=t.x,u=t.z-l):t.front==="n"?(d=0,h=t.x,u=t.z+l):t.front==="w"?(d=-Math.PI/2,h=t.x-a,u=t.z):t.front==="e"&&(d=Math.PI/2,h=t.x+a,u=t.z),c.position.set(h,0,u),c.rotation.y=d,i.add(c);function g(Z,V){return t.front==="s"?{x:t.x-Z,z:t.z-l-V}:t.front==="n"?{x:t.x+Z,z:t.z+l+V}:t.front==="w"?{x:t.x-a-V,z:t.z-Z}:{x:t.x+a+V,z:t.z+Z}}let _="residential";t.id==="b-se-mansion"?_="dental":t.id==="b-nw-mansion"?_="cleaners":t.id==="b-sw-commercial"?_="izakaya":t.id==="b-ne-apartments"?_="pharmacy":t.id==="b-fe-north"?_="bookstore":t.id==="b-cafe"&&(_="cafe");const m=new D({color:1975340,roughness:.35,metalness:.7});if(_==="dental"){const V=new D({color:14542571,roughness:.45,metalness:.1}),j=new x(new L(10.8+.4,3.2,.08),V);j.position.set(0,3.2/2,-.02),c.add(j);const X=5.6,rt=2.25,lt=-2,ut=new Qt({map:x2(),toneMapped:!1}),Tt=new x(new ee(X,rt),ut);Tt.position.set(lt,1.25,.04),c.add(Tt);const St=new x(new L(X+.1,.06,.08),m);St.position.set(lt,1.25+rt/2,.05);const G=new x(new L(X+.1,.12,.08),m);G.position.set(lt,.06,.05),c.add(St,G);for(const ct of[-X/6,X/6]){const Mt=new x(new L(.04,rt,.06),m);Mt.position.set(lt+ct,1.25,.05),c.add(Mt)}const W=2.4,Y=2.4,st=new x(new L(W+.16,2.3,.12),m);st.position.set(Y,1.2,.02),c.add(st);const xt=new L(W*.48,2.18,.04),Rt=new x(xt,ze);Rt.position.set(Y-W*.24,1.18,.03);const Ut=new x(xt,ze);Ut.position.set(Y+W*.24,1.18,.05),c.add(Rt,Ut);const Wt=new x(new L(.04,.18,.02),Dt);Wt.position.set(Y-.06,1.15,.07),c.add(Wt);const Lt=new L(W+.6,.06,.9),jt=new x(Lt,Dt);jt.position.set(Y,2.45,.45),c.add(jt);const U=new Me(15924223,1.4,4,1.2);U.position.set(Y,2.38,.45),c.add(U);const Vt=new D({color:1914429,roughness:.95}),Ft=new x(new L(W*.9,.02,.95),Vt);Ft.position.set(Y,.012,.55),c.add(Ft);const It=7.6,Et=.82,qt=new Qt({map:_2(),toneMapped:!1}),At=new x(new L(It,Et,.15),qt);At.position.set(0,2.76,.12),c.add(At);const A=new x(new L(It+.12,Et+.1,.18),m);A.position.set(0,2.76,.1),c.add(A);for(const ct of[-2.4,2.4]){const Mt=new x(new it(.012,.012,.35,6),Dt);Mt.rotation.x=Math.PI/3,Mt.position.set(ct,3.22,.25);const Ot=new x(new L(.18,.08,.12),Dt);Ot.position.set(ct,3.28,.38),c.add(Mt,Ot)}const y=new Me(14481146,1.9,7.5,1.2);y.position.set(0,3.15,.5),c.add(y);const H=vc("dental");H.position.set(10.8/2+.1,2.4,.25),c.add(H);const Q=Vi("dental");Q.position.set(-3.8,0,.85),Q.rotation.y=.14,c.add(Q);const ot=xo();ot.position.set(Y+W/2+.35,0,.35),c.add(ot);const tt=new D({color:15724006,roughness:.5}),wt=new x(new it(.18,.14,.45,12),tt);wt.position.set(.9,.225,.35);const at=new D({color:2250032,roughness:.6}),_t=new x(new Fe(.24,10,10),at);_t.position.set(.9,.55,.35),c.add(wt,_t);const Kt=g(Y,1.1);e.add({id:"sf-dental-clinic",x:Kt.x,z:Kt.z,radius:2.2,prompt:"Inspect Dental Clinic & Reception",onInteract:()=>{s&&s.playDeskBellSound(),o.show("パークサイド歯科: 『本日は予約優先制となっております。歯のクリーニング、定期検診、急患の診療は随時受付中（TEL 03-3456-7890）』")}});return}if(_==="cleaners"){const V=new D({color:1917824,roughness:.85}),j=new L(10.8*.92,.08,1.25);j.rotateX(.18);const X=new x(j,V);X.position.set(0,2.45,.6);const rt=new x(new L(10.8*.92,.22,.03),V);rt.position.set(0,2.24,1.18),c.add(X,rt);const lt=5.6,ut=2.25,Tt=-2,St=new Qt({map:v2(),toneMapped:!1}),G=new x(new ee(lt,ut),St);G.position.set(Tt,1.25,.04),c.add(G);const W=2.4,Y=2.4,st=new x(new L(W+.16,2.3,.12),m);st.position.set(Y,1.2,.02),c.add(st);const xt=new L(W*.48,2.18,.04),Rt=new x(xt,ze);Rt.position.set(Y-W*.24,1.18,.03);const Ut=new x(xt,ze);Ut.position.set(Y+W*.24,1.18,.05),c.add(Rt,Ut);const Wt=new D({color:1519967,roughness:.95}),Lt=new x(new L(W*.9,.02,.95),Wt);Lt.position.set(Y,.012,.55),c.add(Lt);const jt=7.6,U=.82,Vt=new Qt({map:w2(),toneMapped:!1}),Ft=new x(new L(jt,U,.15),Vt);Ft.position.set(0,2.78,.12),c.add(Ft);const It=new Me(15266559,2,7.5,1.2);It.position.set(0,3.15,.6),c.add(It);const Et=Vi("cleaners");Et.position.set(-3.8,0,.85),Et.rotation.y=-.12,c.add(Et);const qt=xo();qt.position.set(Y+W/2+.35,0,.35),c.add(qt);const At=g(Y,1.1);e.add({id:"sf-dry-cleaners",x:At.x,z:At.z,radius:2.2,prompt:"Check Dry Cleaners Rates",onInteract:()=>{s&&s.playDeskBellSound(),o.show("白金クリーニング: 『朝10時までのお預かりで夕方5時お渡し！ワイシャツ立体仕上 ¥220、スーツ上下 ¥1,280。24Hコインランドリーも併設稼働中です！』")}});return}if(_==="izakaya"){const V=new D({color:2234900,roughness:.9}),j=new x(new L(9.2+.3,3.2,.08),V);j.position.set(0,3.2/2,-.02),c.add(j);const X=new L(9.2*.96,.12,1.2);X.rotateX(.2);const rt=new x(X,new D({color:2040617,roughness:.6}));rt.position.set(0,2.5,.6),c.add(rt);const lt=5.2,ut=2.25,Tt=-1.6,St=new Qt({map:M2(),toneMapped:!1}),G=new x(new ee(lt,ut),St);G.position.set(Tt,1.25,.04),c.add(G);const W=2,Y=2.4,st=new x(new L(W+.12,2.2,.1),V);st.position.set(Y,1.15,.02),c.add(st);const xt=new L(W*.95,.55,.03),Rt=new D({color:1582139,roughness:.85}),Ut=new x(xt,Rt);Ut.position.set(Y,2.05,.09),c.add(Ut);const Wt=new D({color:4014664,roughness:.8}),Lt=new x(new L(W*1.1,.04,.8),Wt);Lt.position.set(Y,.02,.45),c.add(Lt);const jt=H2();jt.position.set(-3.4,0,.55),c.add(jt);const U=new Jt;U.position.set(1.1,2.3,.5);const Vt=new x(new it(.008,.008,.48,6),Ie);Vt.rotation.x=Math.PI/2,Vt.position.set(0,.15,-.24),U.add(Vt);const Ft=new Qt({color:14235689,toneMapped:!1}),It=new x(new it(.16,.16,.38,12),Ft),Et=new x(new it(.12,.16,.04,12),Ie);Et.position.set(0,.2,0);const qt=new x(new it(.16,.12,.04,12),Ie);qt.position.set(0,-.2,0),It.add(Et,qt),U.add(It);const At=new Me(16742178,1.8,5,1.2);At.position.set(0,0,0),U.add(At),c.add(U);const A=6.8,y=.82,H=new Qt({map:S2(),toneMapped:!1}),Q=new x(new L(A,y,.15),H);Q.position.set(0,2.82,.12),c.add(Q);const ot=new Me(16750899,2.2,8,1.2);ot.position.set(0,3.1,.55),c.add(ot);const tt=Vi("izakaya");tt.position.set(3.4,0,.85),tt.rotation.y=.15,c.add(tt);const wt=g(Y,1.1);e.add({id:"sf-izakaya",x:wt.x,z:wt.z,radius:2.2,prompt:"Look at Izakaya Specials",onInteract:()=>{s&&s.playDeskBellSound(),o.show("和食・酒処 魚河岸: 『いらっしゃい！今夜のイチオシは豊洲直送の刺身三種盛り(¥980)と、じっくり煮込んだ特製もつ煮込み(¥480)だよ！晩酌セットも大人気！』")}});let at=0;return{update(_t){at+=_t,It.rotation.z=Math.sin(at*2.2)*.06,It.rotation.x=Math.cos(at*1.8)*.04}}}if(_==="pharmacy"){const V=new D({color:14151399,roughness:.45,metalness:.1}),j=new x(new L(8.8+.3,3.2,.08),V);j.position.set(0,3.2/2,-.02),c.add(j);const X=4.8,rt=2.25,lt=-1.6,ut=new Qt({map:y2(),toneMapped:!1}),Tt=new x(new ee(X,rt),ut);Tt.position.set(lt,1.25,.04),c.add(Tt);const St=2.2,G=2.2,W=new x(new L(St+.16,2.3,.12),m);W.position.set(G,1.2,.02),c.add(W);const Y=new L(St*.48,2.18,.04),st=new x(Y,ze);st.position.set(G-St*.24,1.18,.03);const xt=new x(Y,ze);xt.position.set(G+St*.24,1.18,.05),c.add(st,xt);const Rt=new D({color:1331780,roughness:.95}),Ut=new x(new L(St*.9,.02,.95),Rt);Ut.position.set(G,.012,.55),c.add(Ut);const Wt=6.6,Lt=.82,jt=new Qt({map:b2(),toneMapped:!1}),U=new x(new L(Wt,Lt,.15),jt);U.position.set(0,2.76,.12),c.add(U);const Vt=vc("pharmacy");Vt.position.set(8.8/2+.1,2.4,.25),c.add(Vt);const Ft=new Me(14350576,1.9,7,1.1);Ft.position.set(0,3.15,.5),c.add(Ft);const It=Vi("pharmacy");It.position.set(-3.2,0,.85),It.rotation.y=.12,c.add(It);const Et=xo();Et.position.set(G+St/2+.35,0,.35),c.add(Et);const qt=g(G,1.1);e.add({id:"sf-pharmacy",x:qt.x,z:qt.z,radius:2.2,prompt:"Consult Pharmacy Counter",onInteract:()=>{s&&s.playDeskBellSound(),o.show("森クリニック・森薬局: 『全国どちらの医療機関の処方せんも受け付けております。お薬の相談、在宅医療、各種健康診断もお気軽にどうぞ。』")}});return}if(_==="bookstore"){const V=new D({color:3875350,roughness:.65}),j=new x(new L(9.8+.3,3.2,.08),V);j.position.set(0,3.2/2,-.02),c.add(j);const X=5.4,rt=2.25,lt=-1.8,ut=new Qt({map:T2(),toneMapped:!1}),Tt=new x(new ee(X,rt),ut);Tt.position.set(lt,1.25,.04),c.add(Tt);const St=2.2,G=2.2,W=new x(new L(St+.16,2.3,.12),m);W.position.set(G,1.2,.02),c.add(W);const Y=new L(St*.48,2.18,.04),st=new x(Y,ze);st.position.set(G-St*.24,1.18,.03);const xt=new x(Y,ze);xt.position.set(G+St*.24,1.18,.05),c.add(st,xt);const Rt=7,Ut=.82,Wt=new Qt({map:E2(),toneMapped:!1}),Lt=new x(new L(Rt,Ut,.15),Wt);Lt.position.set(0,2.76,.12),c.add(Lt);const jt=new Me(16770756,2,7.5,1.2);jt.position.set(0,3.15,.5),c.add(jt);const U=V2();U.position.set(-3.2,0,.65),c.add(U);const Vt=Vi("bookstore");Vt.position.set(3.4,0,.85),Vt.rotation.y=-.15,c.add(Vt);const Ft=xo();Ft.position.set(1,0,.35),c.add(Ft);const It=g(G,1.1);e.add({id:"sf-bookstore",x:It.x,z:It.z,radius:2.2,prompt:"Browse Bookstore Display",onInteract:()=>{s&&s.playDeskBellSound(),o.show("東書店: 『話題の直木賞・芥川賞受賞作、今週発売のジャンプ系コミックス最新巻が平積みされています！図書カードNEXT取扱店です。』")}});return}if(_==="cafe"){const V=new D({color:2759186,roughness:.7}),j=new x(new L(8.2+.3,3.2,.08),V);j.position.set(0,3.2/2,-.02),c.add(j);const X=new D({color:3547155,roughness:.85}),rt=new L(8.2*.92,.08,1.15);rt.rotateX(.18);const lt=new x(rt,X);lt.position.set(0,2.45,.55),c.add(lt);const ut=4.6,Tt=2.25,St=-1.4,G=new Qt({map:A2(),toneMapped:!1}),W=new x(new ee(ut,Tt),G);W.position.set(St,1.25,.04),c.add(W);const Y=2,st=2,xt=new x(new L(Y+.14,2.25,.12),V);xt.position.set(st,1.18,.02),c.add(xt);const Rt=new x(new L(Y*.9,2.15,.04),ze);Rt.position.set(st,1.18,.04),c.add(Rt);const Ut=new D({color:13936723,metalness:.85,roughness:.25}),Wt=new x(new it(.015,.015,.7,8),Ut);Wt.rotation.z=Math.PI/2,Wt.position.set(st,1.15,.08),c.add(Wt);const Lt=6.2,jt=.82,U=new Qt({map:R2(),toneMapped:!1}),Vt=new x(new L(Lt,jt,.15),U);Vt.position.set(0,2.76,.12),c.add(Vt);const Ft=new Me(16755268,2,7.5,1.2);Ft.position.set(0,3.15,.5),c.add(Ft);const It=Vi("cafe");It.position.set(-2.8,0,.85),It.rotation.y=.15,c.add(It);const Et=new D({color:4862496,roughness:.7}),qt=new x(new L(1.4,.45,.42),Et);qt.position.set(2.8,.225,.55),c.add(qt);const At=g(st,1.1);e.add({id:"sf-cafe",x:At.x,z:At.z,radius:2.2,prompt:"Read Cafe Chalkboard",onInteract:()=>{s&&s.playDeskBellSound(),o.show("Cafe Mame: 『本日のおすすめ：エチオピア・イルガチェフェ G1（浅煎り ¥550）。華やかな香りと柑橘の酸味が楽しめます。テイクアウトも可能です。』")}});return}const p=Math.min(f*.55,5.8),T=new D({color:1909290,roughness:.35,metalness:.2}),w=new x(new L(p,3.2,.12),T);w.position.set(0,3.2/2,-.02),c.add(w);const v=2.4,I=new x(new L(v+.16,2.3,.14),m);I.position.set(-.5,1.2,.02),c.add(I);const R=new L(v*.48,2.18,.04),E=new x(R,ze);E.position.set(-.5-v*.24,1.18,.03);const C=new x(R,ze);C.position.set(-.5+v*.24,1.18,.05),c.add(E,C);const S=new Qt({map:P2(),toneMapped:!1}),M=new x(new ee(.55,.55),S);M.position.set(1.4,1.35,.05),c.add(M);const P=new x(new L(p*.85,.08,.85),Dt);P.position.set(0,2.5,.4),c.add(P);const B=new Me(16773339,1.4,5.5,1.2);B.position.set(0,2.42,.4),c.add(B);const k=xo();k.position.set(-2,0,.35),c.add(k);const K=g(1.4,1);e.add({id:`sf-intercom-${t.id}`,x:K.x,z:K.z,radius:2,prompt:"Examine Residence Intercom",onInteract:()=>{s&&s.playDeskBellSound(),o.show("オートロック操作盤: 『居住者専用エントランスです。訪問先の部屋番号を押して「呼出」を押してください。』")}})}function ms(i,t,n,e,o){const r=t.w/2,a=t.d/2,l=new D({color:16769690,emissive:16758852,emissiveIntensity:.85,roughness:.3}),f=new D({color:13954303,emissive:7779560,emissiveIntensity:.7,roughness:.3}),c=new D({color:1580582,roughness:.1,metalness:.7}),d=(n>0,1);for(let h=d;h<t.floors;h++){const u=h*3.2;if(t.balconies.includes(h))for(const p of t.balconyFaces)X2(i,t,p,u,o);const _=t.bay,m=(t.w-1.6)/_;for(let p=0;p<_;p++){const T=-r+.8+p*m+m/2,w=(t.seed+h*17+p*31)%100,v=w<55?l:w<80?f:c;if(t.front==="s")gs(i,t.x+T,u+1.45,t.z-a,1.4,1.6,"s",v,e);else if(t.front==="n")gs(i,t.x+T,u+1.45,t.z+a,1.4,1.6,"n",v,e);else if(t.front==="w"){const I=-a+.8+p*((t.d-1.6)/_)+(t.d-1.6)/_/2;gs(i,t.x-r,u+1.45,t.z+I,1.4,1.6,"w",v,e)}else{const I=-a+.8+p*((t.d-1.6)/_)+(t.d-1.6)/_/2;gs(i,t.x+r,u+1.45,t.z+I,1.4,1.6,"e",v,e)}}}}function gs(i,t,n,e,o,s,r,a,l){const d=r==="s"||r==="n"?new L(o,s,.18):new L(.18,s,o),h=new x(d,l);h.position.set(t,n,e),i.add(h);const u=r==="s"||r==="n"?new L(o-.08*2,s-.08*2,.04):new L(.04,s-.08*2,o-.08*2),g=new x(u,a),_=r==="s"?-.02:r==="n"?.02:0,m=r==="w"?-.02:r==="e"?.02:0;g.position.set(t+m,n,e+_),i.add(g)}function X2(i,t,n,e,o){const s=t.w/2,r=t.d/2,a=1.15,l=1.05;if(n==="s"){const f=new L(t.w*.85,.18,a),c=new x(f,o);c.position.set(t.x,e+.09,t.z-r-a/2),i.add(c);const d=new L(t.w*.85,l,.06),h=new x(d,Dt);h.position.set(t.x,e+l/2+.18,t.z-r-a),i.add(h),vr(i,t.x+t.w*.3,e+.5,t.z-r-a*.5,0)}else if(n==="n"){const f=new L(t.w*.85,.18,a),c=new x(f,o);c.position.set(t.x,e+.09,t.z+r+a/2),i.add(c);const d=new L(t.w*.85,l,.06),h=new x(d,Dt);h.position.set(t.x,e+l/2+.18,t.z+r+a),i.add(h),vr(i,t.x-t.w*.3,e+.5,t.z+r+a*.5,Math.PI)}else if(n==="w"){const f=new L(a,.18,t.d*.85),c=new x(f,o);c.position.set(t.x-s-a/2,e+.09,t.z),i.add(c);const d=new L(.06,l,t.d*.85),h=new x(d,Dt);h.position.set(t.x-s-a,e+l/2+.18,t.z),i.add(h),vr(i,t.x-s-a*.5,e+.5,t.z+t.d*.3,-Math.PI/2)}}function vr(i,t,n,e,o){const s=new Jt,r=new L(.72,.52,.32),a=new x(r,zg);s.add(a);const l=new it(.2,.2,.02,16);l.rotateX(Math.PI/2);const f=new Qt({color:4473924}),c=new x(l,f);c.position.set(.12,0,.165),s.add(c),s.position.set(t,n,e),s.rotateY(o),i.add(s)}function Y2(i,t,n){const e=t.w/2,o=t.d/2,s=new it(.06,.06,n,8),r=new x(s,Ie);r.position.set(t.x-e+.2,n/2,t.z-o-.08),i.add(r)}function Z2(i,t,n,e){const o=t.w/2,s=t.d/2,r=.9,a=new x(new L(t.w,r,.3),e);a.position.set(t.x,n+r/2,t.z+s-.15);const l=new x(new L(t.w,r,.3),e);l.position.set(t.x,n+r/2,t.z-s+.15);const f=new x(new L(.3,r,t.d),e);f.position.set(t.x-o+.15,n+r/2,t.z);const c=new x(new L(.3,r,t.d),e);c.position.set(t.x+o-.15,n+r/2,t.z),i.add(a,l,f,c);const d=new L(3.2,2.4,3.2),h=new x(d,e);if(h.position.set(t.x,n+1.2,t.z),i.add(h),t.floors>=4){const _=new Jt,m=new it(.05,.05,1.2,6);for(const v of[-.6,.6])for(const I of[-.6,.6]){const R=new x(m,Dt);R.position.set(v,.6,I),_.add(R)}const p=new it(.9,.9,1.6,16),T=new D({color:10008776,roughness:.3,metalness:.4}),w=new x(p,T);w.position.set(0,1.8,0),_.add(w),_.position.set(t.x+o*.5,n,t.z+s*.4),i.add(_)}const u=new it(.03,.04,3.6,6),g=new x(u,Dt);g.position.set(t.x-o*.4,n+1.8,t.z-s*.4),i.add(g)}function q2(i,t,n,e,o,s){const r=new Jt;r.name="urban_props";const a=[],l=[],f=[{x:-36,z:4.8},{x:-14,z:4.8},{x:8,z:4.8},{x:32,z:4.8},{x:-36,z:-4.8},{x:8,z:-4.8},{x:32,z:-4.8},{x:12.2,z:16},{x:12.2,z:32},{x:19.8,z:24},{x:-17.8,z:-18},{x:-17.8,z:-32},{x:-9.8,z:-20}];for(const w of f){const v=$2(w.x,w.z,a);r.add(v),t.add({minX:w.x-.25,minY:0,minZ:w.z-.25,maxX:w.x+.25,maxY:10,maxZ:w.z+.25})}K2(r,f);const c=[{x:-4.2,z:8.8,rotY:0,variant:0,drink:"hot Boss Coffee [缶コーヒー ¥140]"},{x:20.4,z:9.8,rotY:-Math.PI/2,variant:1,drink:"cold Pocari Sweat [ポカリスエット ¥160]"},{x:5.2,z:22.1,rotY:Math.PI,variant:2,drink:"warm Green Tea [お〜いお茶 ¥130]"},{x:-9.6,z:-10.8,rotY:Math.PI/2,variant:0,drink:"cold Royal Milk Tea [ミルクティー ¥150]"}];for(let w=0;w<c.length;w++){const v=c[w],I=J2(v.x,v.z,v.rotY,v.variant,v.drink,n,e,t);r.add(I)}const d=j2(r,t,n,e,o);l.push(d.update);const h=[{x:2.4,z:6.8,rotY:.15,color:2046808,id:"bike-ramen"},{x:-3.5,z:8.2,rotY:-.1,color:1984032,id:"bike-sunheights"},{x:21.5,z:12,rotY:Math.PI/2,color:9050148,id:"bike-konbini-1"},{x:21.5,z:13.5,rotY:Math.PI/2,color:11056320,id:"bike-konbini-2"},{x:8.5,z:27.5,rotY:-Math.PI/2,color:2367002,id:"bike-cafe"},{x:10.8,z:20.5,rotY:Math.PI/2,color:2046808,id:"bike-alley"},{x:2.2,z:23.8,rotY:Math.PI,color:1984032,id:"bike-north"},{x:-18.2,z:-10.5,rotY:-Math.PI/2,color:9050148,id:"bike-residential"}];for(const w of h){const v=sx(w.x,w.z,w.rotY,w.color,w.id,n,e,s);r.add(v),t.add({minX:w.x-.75,minY:0,minZ:w.z-.35,maxX:w.x+.75,maxY:1.2,maxZ:w.z+.35})}const u=[{x:-2.8,z:8.2,type:"bush"},{x:-2.2,z:8.2,type:"fern"},{x:2,z:8.2,type:"tall"},{x:6.8,z:21,type:"bonsai"},{x:7.4,z:21,type:"hydrangea"},{x:8,z:21,type:"trough"},{x:8.6,z:21,type:"tall"},{x:1.5,z:23.6,type:"fern"},{x:-1.2,z:23.6,type:"bush"}];for(const w of u){const v=rx(w.x,w.z,w.type);r.add(v)}r.add(ax(7.1,20.9));const g=lx(-20.5,.15,-16.5,Math.PI/2,t);r.add(g);const _=wc(-16.8,-4.2,Math.PI/4,t),m=wc(13.2,4.2,-Math.PI/4,t);r.add(_,m);const p=cx(9.6,20.4);r.add(p),r.add(fx(4.25,22.1,n,e,s)),r.add(hx(6.2,22.3,a)),dx(r,t,n,e);const T=ux(r,n,e,o,s);return l.push(T.update),i.add(r),{group:r,streetLights:a,update(w){for(const v of l)v(w)}}}function $2(i,t,n){const e=new Jt;e.position.set(i,0,t);const o=9.2,s=new it(.18,.24,o,12),r=new D({color:5922662,roughness:.88,metalness:.05}),a=new x(s,r);a.position.set(0,o/2,0),a.castShadow=!0,e.add(a);const l=new L(2.2,.1,.1),f=new x(l,Ie);f.position.set(0,o-.6,0),e.add(f);const c=new L(1.6,.1,.1),d=new x(c,Ie);d.position.set(0,o-1.4,0),e.add(d);const h=new it(.04,.04,.14,8),u=new D({color:15658734,roughness:.2});for(const P of[-.95,-.45,.45,.95]){const B=new x(h,u);B.position.set(P,o-.5,0),e.add(B)}const g=new it(.32,.32,1.1,12),_=new D({color:4739160,roughness:.5,metalness:.4}),m=new x(g,_);m.position.set(.35,o-2.2,0),e.add(m);const p=new it(.015,.015,.28,6);p.rotateZ(Math.PI/2);for(let P=1.8;P<o-2.5;P+=.55){const B=new x(p,Dt),k=Math.sin(P*4)>0?.2:-.2;B.position.set(k,P,0),e.add(B)}const T=new it(.03,.03,1.1,8);T.rotateZ(Math.PI/3);const w=new x(T,Ie);w.position.set(.45,5.2,0),e.add(w);const v=new Je(.25,.15,12),I=new x(v,Ie);I.position.set(.85,4.8,0),e.add(I);const R=new Fe(.1,12,12),E=new x(R,Zn);E.position.set(.85,4.72,0),e.add(E);const C=new Je(2.4,4.6,16,1,!0);C.translate(0,-2.3,0);const S=new x(C,$g);S.position.set(.85,4.7,0),e.add(S);const M=new Me(16770229,1.6,16,1.5);return M.position.set(i+.85,4.65,t),n.push(M),e.add(M),e}function K2(i,t){const n=new nf({color:1711652,linewidth:1.5});for(let e=0;e<t.length;e++)for(let o=e+1;o<t.length;o++){const s=t[e],r=t[o],a=Math.hypot(r.x-s.x,r.z-s.z);if(a<26)for(const l of[-.45,0,.45]){const f=8.6+l*.4,c=8.6+l*.4,d=(s.x+r.x)/2,h=(s.z+r.z)/2,u=Math.min(1.2,a*.045),_=new af(new N(s.x,f,s.z),new N(d,(f+c)/2-u,h),new N(r.x,c,r.z)).getPoints(12),m=new en().setFromPoints(_),p=new Xm(m,n);i.add(p)}}}function J2(i,t,n,e,o,s,r,a){const l=new Jt,f=1.05,c=1.95,d=.82,h=new L(f,c,d),u=new D({color:e===0?1784632:e===1?5904420:1715796,roughness:.35,metalness:.65}),g=new x(h,u);g.position.set(0,c/2,0),g.castShadow=!0,l.add(g);const _=new ee(.92,1.75),m=Jg(e),p=new Qt({map:m,toneMapped:!1}),T=new x(_,p);T.position.set(0,c/2+.04,d/2+.01),l.add(T);const w=new Me(e===0?8060884:e===1?16746649:8965375,.9,4);w.position.set(0,1.2,d/2+.45),l.add(w);const v=new L(.42,.85,.42),I=new D({color:4015181,roughness:.4}),R=new x(v,I);R.position.set(f/2+.32,.425,0),l.add(R);const E=new it(.08,.08,.02,12),C=new Qt({color:1118481}),S=new x(E,C);S.position.set(f/2+.24,.86,0);const M=new x(E,C);return M.position.set(f/2+.4,.86,0),l.add(S,M),l.position.set(i,.15,t),l.rotateY(n),a.add({minX:i-.9,minY:0,minZ:t-.7,maxX:i+.9,maxY:2.2,maxZ:t+.7}),s.add({id:`vending-${i}-${t}`,x:i,z:t,radius:1.8,prompt:`Buy ${o}`,onInteract:()=>{r.show(`*Clink-clatter-thump!* You bought a ${o}. It feels warm and soothing in your hands.`)}}),l}function j2(i,t,n,e,o){const s={x:-.25,z:-24},r=Q2(s.x+3.2,s.z-3.5);i.add(r),t.add({minX:s.x+2.6,minY:0,minZ:s.z-4.1,maxX:s.x+3.8,maxY:6,maxZ:s.z-2.9});const a=tx(s.x-4.5,s.z+4.5);i.add(a),t.add({minX:s.x-5.1,minY:0,minZ:s.z+3.9,maxX:s.x-3.9,maxY:6,maxZ:s.z+5.1});const l=ex(s.x+3,s.z-3.5);i.add(l.group);const f=s.x-1.2,c=s.z-2,d=nx(f,c,.3);i.add(d),t.add({minX:f-1.1,minY:0,minZ:c-.6,maxX:f+1.1,maxY:1.2,maxZ:c+.6}),n.add({id:"park-bench",x:f,z:c+.8,radius:1.8,prompt:()=>o.seated?"Stand up from Bench":"Sit on Park Bench",onInteract:()=>{o.seated=!o.seated,o.seated?e.show("You sit down on the wooden bench. Gentle night breeze rustles the sakura leaves overhead."):e.show("You stand back up, refreshed.")}});const h=s.x+4.5,u=s.z+3.2,g=ix(h,u);i.add(g.group),t.add({minX:h-.5,minY:0,minZ:u-.5,maxX:h+.5,maxY:2.2,maxZ:u+.5});const _=s.x-5.2,m=s.z-2.5,p=ox(_,m);return i.add(p),t.add({minX:_-.4,minY:0,minZ:m-.4,maxX:_+.4,maxY:1.2,maxZ:m+.4}),n.add({id:"park-fountain",x:_,z:m+.6,radius:1.6,prompt:"Drink Cold Park Water",onInteract:()=>{e.show("The cold water bubbles up from the stainless steel nozzle. Crisp and clean.")}}),{update:w=>{l.update(w),g.update(w)}}}function Q2(i,t){const n=new Jt;n.position.set(i,.15,t);const e=new it(.32,.45,3.4,8),o=new x(e,Ki);o.position.set(0,1.7,0),o.castShadow=!0,n.add(o);const s=new it(.18,.24,2.2,6);s.rotateZ(.55);const r=new x(s,Ki);r.position.set(.7,3.2,0),n.add(r);const a=new it(.18,.24,2.2,6);a.rotateZ(-.55);const l=new x(a,Ki);l.position.set(-.7,3.2,0),n.add(l);const f=[{x:0,y:4.8,z:0,r:2.2},{x:1.6,y:4.2,z:.6,r:1.7},{x:-1.6,y:4.2,z:-.6,r:1.7},{x:.8,y:4,z:-1.5,r:1.6},{x:-.8,y:4,z:1.5,r:1.6}];for(const c of f){const d=new ri(c.r,1),h=new x(d,gf);h.position.set(c.x,c.y,c.z),h.castShadow=!0,n.add(h)}return n}function tx(i,t){const n=new Jt;n.position.set(i,.15,t);const e=new it(.28,.38,3.2,8),o=new x(e,Ki);o.position.set(0,1.6,0),o.castShadow=!0,n.add(o);const s=[{x:0,y:4.5,z:0,r:2},{x:1.4,y:3.8,z:.5,r:1.5},{x:-1.4,y:3.8,z:-.5,r:1.5}];for(const r of s){const a=new ri(r.r,1),l=new x(a,la);l.position.set(r.x,r.y,r.z),l.castShadow=!0,n.add(l)}return n}function ex(i,t){const n=new Jt;n.position.set(i,.15,t);const e=30,o=[],s=new ee(.08,.05);for(let l=0;l<e;l++){const f=new x(s,gf),c=(Math.random()-.5)*8,d=(Math.random()-.5)*8,h=.5+Math.random()*4.5;f.position.set(c,h,d),f.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),n.add(f),o.push({mesh:f,x0:c,z0:d,speed:.3+Math.random()*.35,phase:Math.random()*Math.PI*2})}let r=0;return{group:n,update:l=>{r+=l;for(const f of o)f.mesh.position.y-=l*f.speed,f.mesh.position.x=f.x0+Math.sin(r*1.5+f.phase)*.4,f.mesh.position.z=f.z0+Math.cos(r*1.2+f.phase)*.4,f.mesh.rotation.z+=l*1.2,f.mesh.rotation.y+=l*.8,f.mesh.position.y<.1&&(f.mesh.position.y=4.5+Math.random()*.5)}}}function nx(i,t,n){const e=new Jt;e.position.set(i,.15,t),e.rotateY(n);const o=new L(1.8,.08,.55),s=new x(o,Ki);s.position.set(0,.44,0),e.add(s);const r=new L(1.8,.45,.08),a=new x(r,Ki);a.position.set(0,.78,-.24),e.add(a);const l=new L(.08,.45,.5),f=new x(l,Dt);f.position.set(-.75,.22,0);const c=new x(l,Dt);return c.position.set(.75,.22,0),e.add(f,c),e}function ix(i,t){const n=new Jt;n.position.set(i,.15,t);const e=new D({color:5922920,roughness:.9}),o=new x(new it(.42,.48,.35,6),e);o.position.set(0,.175,0),n.add(o);const s=new x(new it(.22,.25,.8,6),e);s.position.set(0,.75,0),n.add(s);const r=new x(new L(.55,.45,.55),e);r.position.set(0,1.35,0),n.add(r);const a=new Me(16754756,1.4,6);a.position.set(0,1.35,0),n.add(a);const l=new x(new Je(.75,.35,6),e);l.position.set(0,1.75,0),n.add(l);let f=0;return{group:n,update:d=>{f+=d,a.intensity=1.3+Math.sin(f*8.5)*.15+(Math.random()-.5)*.08}}}function ox(i,t){const n=new Jt;n.position.set(i,.15,t);const e=new D({color:7238780,roughness:.8}),o=new x(new L(.45,.75,.45),e);o.position.set(0,.375,0),n.add(o);const s=new x(new it(.18,.18,.08,12),Dt);return s.position.set(0,.78,0),n.add(s),n}function sx(i,t,n,e=2046808,o="bike",s,r,a){const l=new Jt;l.position.set(i,.15,t),l.rotateY(n),l.rotateZ(-.06);const f=new D({color:1579036,roughness:.9}),c=new D({color:e,roughness:.35,metalness:.4}),d=new D({color:2365458,roughness:.5}),h=new D({color:1315860,roughness:.85}),u=new D({color:13938487,roughness:.2,metalness:.85}),g=new Qt({color:14489624}),_=new Qt({color:16096779}),m=.32,p=[{x:.55,isFront:!0},{x:-.55,isFront:!1}];for(const W of p){const Y=new Jt;Y.position.set(W.x,m,0);const st=new x(new We(m,.024,8,24),f);Y.add(st);const xt=new x(new We(m-.02,.012,6,24),Dt);Y.add(xt);const Rt=new x(new it(.022,.022,.07,8),Dt);Rt.rotateX(Math.PI/2),Y.add(Rt);for(let Lt=0;Lt<4;Lt++){const jt=new x(new it(.003,.003,(m-.02)*2,4),Dt);jt.rotateZ(Lt*Math.PI/4),Y.add(jt)}const Ut=new We(m+.022,.016,6,18,Math.PI*(W.isFront?.72:.85)),Wt=new x(Ut,c);if(Wt.rotateZ(W.isFront?-Math.PI*.58:-Math.PI*.42),Y.add(Wt),!W.isFront){const Lt=new x(new it(.012,.012,.01,8),g);Lt.position.set(-m-.015,-.05,0),Lt.rotateZ(Math.PI/2),Y.add(Lt)}l.add(Y)}const T=new x(new it(.025,.025,.08,8),c);T.rotateX(Math.PI/2),T.position.set(-.06,.28,0),l.add(T);const w=new x(new it(.02,.02,.2,8),c);w.position.set(.42,.7,0),w.rotateZ(-.28),l.add(w);for(const W of[-.018,.018]){const Y=new x(new it(.014,.014,.65,8),c);Y.position.set(.18,.46,W),Y.rotateZ(.72),l.add(Y)}const v=new x(new it(.016,.016,.46,8),c);v.position.set(-.16,.48,0),v.rotateZ(-.25),l.add(v);for(const W of[-.038,.038]){const Y=new x(new it(.011,.009,.45,8),Dt);Y.position.set(.48,.51,W),Y.rotateZ(-.28),l.add(Y)}for(const W of[-.038,.038]){const Y=new x(new it(.01,.01,.52,6),c);Y.position.set(-.31,.3,W),Y.rotateZ(-.09),l.add(Y)}for(const W of[-.038,.038]){const Y=new x(new it(.01,.01,.55,6),c);Y.position.set(-.38,.52,W),Y.rotateZ(.78),l.add(Y)}const I=new x(new it(.013,.013,.22,8),Dt);I.position.set(.44,.82,0),l.add(I);const R=new x(new We(.24,.011,6,16,Math.PI*.8),Dt);R.rotateX(Math.PI/2),R.rotateZ(Math.PI*.6),R.position.set(.4,.92,0),l.add(R);for(const W of[-.22,.22]){const Y=new x(new it(.016,.016,.09,8),h);Y.position.set(.29,.91,W),Y.rotateZ(Math.PI/6),l.add(Y)}const E=new x(new Fe(.024,10,6,0,Math.PI*2,0,Math.PI/2),u);E.position.set(.35,.94,-.16);const C=new x(new L(.015,.005,.012),Dt);C.position.set(.33,.94,-.18),l.add(E,C);const S=.32,M=.22,P=.2,B=.58,k=.76,K=new x(new L(M,.016,S),Dt);K.position.set(B,k+P/2,0);const Z=new x(new L(M-.02,.012,S-.02),Dt);Z.position.set(B,k-P/2,0),l.add(K,Z);for(const W of[-M/2+.01,M/2-.01])for(const Y of[-S/2+.01,S/2-.01]){const st=new x(new it(.005,.005,P,4),Dt);st.position.set(B+W,k,Y),l.add(st)}const V=new x(new L(M*.75,P*.65,S*.75),new D({color:16120058,roughness:.8}));V.position.set(B,k-.02,0),l.add(V);const j=new x(new it(.024,.018,.06,10),Dt);j.rotateZ(-Math.PI/2),j.position.set(.66,.62,0);const X=new x(new yn(.022,10),Zn);X.rotateY(Math.PI/2),X.position.set(.691,.62,0),l.add(j,X);const rt=new x(new it(.013,.013,.16,8),Dt);rt.position.set(-.19,.73,0),rt.rotateZ(-.25);const lt=new x(new L(.24,.055,.17),d);lt.position.set(-.2,.81,0);for(const W of[-.045,.045]){const Y=new x(new it(.016,.016,.04,8),Dt);Y.position.set(-.26,.77,W),l.add(Y)}l.add(rt,lt);const ut=new x(new L(.44,.02,.14),Dt);ut.position.set(-.5,.73,0),l.add(ut);for(const W of[-.05,.05]){const Y=new x(new it(.007,.007,.44,4),Dt);Y.position.set(-.52,.52,W),Y.rotateZ(.2),l.add(Y)}const Tt=new x(new L(.48,.11,.03),c);Tt.position.set(-.28,.28,.04),l.add(Tt);for(const W of[-1,1]){const Y=new x(new it(.008,.008,.14,6),Dt);Y.position.set(-.06,.28+W*.06,W*.07);const st=new x(new L(.08,.02,.06),h);st.position.set(-.06,.28+W*.12,W*.1);const xt=new x(new L(.06,.01,.01),_);xt.position.set(-.06,.28+W*.12,W*.13),l.add(Y,st,xt)}const St=new x(new it(.008,.008,.32,6),Dt);St.position.set(-.46,.16,-.1),St.rotateX(.38),l.add(St);const G=new x(new it(.017,.017,.03,8),_);return G.position.set(-.16,.52,0),l.add(G),s&&s.add({id:`${o}-bell`,x:i,z:t,radius:1.8,prompt:"Ring Bicycle Bell",onInteract:()=>{a==null||a.playBikeBellSound(),r==null||r.show("*Riing-riing!* Japanese city commuter bicycle (Mamachari) with front grocery basket.")}}),l}function rx(i,t,n){const e=new Jt;if(e.position.set(i,.15,t),n==="bonsai"){const o=new D({color:2047064,roughness:.35,metalness:.15}),s=new x(new it(.24,.2,.08,14),o);s.position.set(0,.04,0),s.scale.set(1.3,1,.9);const r=new D({color:2243869,roughness:.9}),a=new x(new it(.22,.18,.04,12),r);a.position.set(0,.08,0),a.scale.set(1.25,1,.85),e.add(s,a);const l=new D({color:4007448,roughness:.9}),f=new x(new it(.025,.04,.22,7),l);f.position.set(0,.18,0),f.rotation.z=-.18;const c=new x(new it(.018,.025,.2,6),l);c.position.set(.04,.34,0),c.rotation.z=.28,e.add(f,c);const d=new D({color:1325858,roughness:.85});[{x:-.12,y:.28,z:.02,rx:.14,rz:.06},{x:.14,y:.38,z:-.04,rx:.16,rz:.07},{x:.02,y:.48,z:.02,rx:.2,rz:.08}].forEach(u=>{const g=new x(new it(u.rx,u.rx*.9,u.rz,10),d);g.position.set(u.x,u.y,u.z),e.add(g)})}else if(n==="hydrangea"){const o=new D({color:9063219,roughness:.8}),s=new x(new it(.22,.16,.38,12),o);s.position.set(0,.19,0),e.add(s);const r=new D({color:2055211,roughness:.7});for(let f=0;f<5;f++){const c=f*Math.PI*2/5,d=new x(new Fe(.14,6,6),r);d.scale.set(1.4,.3,.8),d.position.set(Math.cos(c)*.18,.38,Math.sin(c)*.18),d.rotation.y=-c,d.rotation.z=.35,e.add(d)}const a=[8162552,10980346,6333946];[{x:-.08,y:.52,z:.06,c:a[0]},{x:.09,y:.54,z:-.05,c:a[1]},{x:0,y:.62,z:0,c:a[2]}].forEach(f=>{const c=new D({color:f.c,roughness:.85}),d=new x(new ri(.14,1),c);d.position.set(f.x,f.y,f.z),e.add(d)})}else if(n==="trough"){const o=new D({color:4862498,roughness:.85}),s=new x(new L(.65,.22,.25),o);s.position.set(0,.11,0),e.add(s);const r=new x(new L(.61,.04,.21),new D({color:2234384}));r.position.set(0,.21,0),e.add(r);const a=[16436245,16007006,16777215,11032055,16347926];for(let l=-.24;l<=.25;l+=.12){const f=a[Math.floor(Math.random()*a.length)],c=new x(new ri(.06,1),new D({color:f}));c.position.set(l,.27,(Math.random()-.5)*.1),e.add(c)}}else if(n==="tall"){const o=new D({color:7226156,roughness:.8}),s=new x(new it(.18,.14,.42,10),o);s.position.set(0,.21,0),e.add(s);const r=new D({color:4028990,roughness:.5});for(const a of[-.06,.05]){const l=new x(new it(.015,.018,.9,6),r);l.position.set(a,.65,a*2*.03);const f=new x(new Je(.16,.45,6),la);f.position.set(a,1.05,0),e.add(l,f)}}else{const o=new D({color:8146486,roughness:.85}),s=new x(new it(.2,.15,.35,10),o);s.position.set(0,.175,0);const r=new x(new ri(.28,1),la);r.position.set(0,.45,0),e.add(s,r)}return e}function ax(i,t){const n=new Jt;n.position.set(i,.15,t);const e=new D({color:1409085,roughness:.5}),o=new x(new it(.09,.1,.18,10),e);o.position.set(0,.09,0);const s=new We(.08,.012,6,12,Math.PI),r=new x(s,e);r.position.set(0,.2,0),r.rotation.z=Math.PI/2;const a=new it(.01,.015,.22,6);a.rotateZ(-Math.PI/3);const l=new x(a,e);l.position.set(.12,.16,0);const f=new x(new it(.025,.015,.025,8),e);f.position.set(.21,.24,0),f.rotation.z=-Math.PI/3,n.add(o,r,l,f);const c=new D({color:366185,roughness:.6}),d=new x(new it(.16,.16,.12,12),c);d.rotation.x=Math.PI/2,d.position.set(-.35,.55,.28);const h=new D({color:1467700,roughness:.4}),u=new x(new We(.14,.025,6,16),h);u.position.set(-.35,.55,.28);const g=new D({color:14251782,metalness:.8,roughness:.3}),_=new x(new it(.012,.012,.14,6),g);return _.position.set(-.24,.42,.28),n.add(d,u,_),n}function lx(i,t,n,e,o){const s=new Jt;s.position.set(i,t,n),s.rotateY(e);const r=1.48,a=3.35,l=1.62,f=new L(r,.75,a),c=new x(f,pc);c.position.set(0,.55,0),c.castShadow=!0,s.add(c);const d=new L(r-.08,.72,a*.72),h=new x(d,pc);h.position.set(0,1.25,-.15),s.add(h);const u=new L(r-.04,.62,.06);u.rotateX(.2);const g=new x(u,mc);g.position.set(0,1.22,a*.72/2-.12),s.add(g);const _=new L(r-.04,.58,.06),m=new x(_,mc);m.position.set(0,1.25,-a*.72/2-.16),s.add(m);const p=new it(.26,.26,.18,12);p.rotateZ(Math.PI/2);const T=new D({color:1776411,roughness:.9});for(const K of[-r/2,r/2])for(const Z of[-a*.32,a*.32]){const V=new x(p,T);V.position.set(K,.26,Z),s.add(V)}const w=new L(.25,.18,.06),v=new Qt({color:16775912}),I=new x(w,v);I.position.set(-r/2+.24,.65,a/2+.01);const R=new x(w,v);R.position.set(r/2-.24,.65,a/2+.01),s.add(I,R);const E=new L(.2,.24,.06),C=new Qt({color:14489624}),S=new x(E,C);S.position.set(-r/2+.2,.75,-a/2-.01);const M=new x(E,C);M.position.set(r/2-.2,.75,-a/2-.01),s.add(S,M);const P=new L(.35,.18,.02),B=new x(P,io);B.position.set(0,.38,a/2+.02);const k=new x(P,io);return k.position.set(0,.42,-a/2-.02),s.add(B,k),o.add({minX:i-a/2-.1,minY:t,minZ:n-r/2-.1,maxX:i+a/2+.1,maxY:t+l,maxZ:n+r/2+.1}),s}function wc(i,t,n,e){const o=new Jt;o.position.set(i,.15,t),o.rotateY(n);const s=3.4,r=new x(new it(.06,.06,s,10),Ie);r.position.set(0,s/2,0),o.add(r);const a=new it(.48,.52,.12,24);a.rotateX(Math.PI/2);const l=new x(a,Zg);l.position.set(.35,s-.2,0),o.add(l);const f=new Fe(.44,24,12,0,Math.PI*2,0,Math.PI/3);f.rotateX(Math.PI/2);const c=new x(f,qg);return c.position.set(.35,s-.2,.04),o.add(c),e.add({minX:i-.25,minY:0,minZ:t-.25,maxX:i+.25,maxY:3.8,maxZ:t+.25}),o}function cx(i,t){const n=new Jt;n.position.set(i,.15,t);const e=new ee(.72,.72),o=new Qt({map:I2(),toneMapped:!1}),s=new x(e,o);s.position.set(0,1.4,.65),s.rotation.y=Math.PI,n.add(s);const r=new x(new L(.76,.76,.02),Dt);r.position.set(0,1.4,.66),n.add(r);const a=new D({color:15381256,roughness:.6}),l=new x(new L(.55,.32,.38),a);l.position.set(-.38,.16,.15),n.add(l);const f=[7877903,417606,1332013,9584654];for(let E=-.2;E<=.2;E+=.1){const C=f[Math.floor(Math.random()*f.length)],S=new D({color:C,roughness:.1,metalness:.1,transparent:!0,opacity:.85}),M=new x(new it(.03,.03,.22,8),S);M.position.set(-.38+E,.22,.15+(Math.random()-.5)*.1),n.add(M)}const c=new D({color:2450411,roughness:.6}),d=new x(new L(.55,.32,.38),c);d.position.set(.28,.16,.15),n.add(d);const h=[14251782,14427686,2450411,366185];for(let E=-.18;E<=.18;E+=.09){const C=h[Math.floor(Math.random()*h.length)],S=new x(new it(.028,.028,.14,8),new D({color:C,metalness:.6,roughness:.3}));S.position.set(.28+E,.18,.15+(Math.random()-.5)*.1),n.add(S)}const u=new D({color:16710083,roughness:.5,metalness:.05,transparent:!0,opacity:.85});[{x:-.25,y:.24,z:-.22,s:.24},{x:.22,y:.26,z:-.2,s:.26},{x:0,y:.22,z:-.28,s:.22}].forEach(E=>{const C=new Jt;C.position.set(E.x,E.y,E.z);const S=new x(new ri(E.s,1),u);S.scale.set(1.1,.9,1.05);const M=new x(new Je(.045,.09,6),u);M.position.set(0,E.s*.9,0),C.add(S,M),n.add(C)});const _=new D({map:U2(),roughness:.8,transparent:!0,opacity:.85,side:tn}),m=new Fe(.78,16,12,0,Math.PI*2,0,Math.PI*.55);m.scale(1.3,.75,1.05);const p=new x(m,_);p.position.set(-.04,.08,-.04),n.add(p);const T=new D({color:413243,roughness:.9}),w=new x(new We(.85,.022,6,24),T);w.rotation.x=Math.PI/2,w.scale.set(1.3,1.05,1),w.position.set(-.04,.02,-.04),n.add(w);const v=new Jt;v.position.set(.85,0,.45),v.rotation.z=-.15;const I=new x(new it(.012,.012,1.35,6),new D({color:10576391,roughness:.8}));I.position.set(0,.7,0);const R=new x(new Je(.08,.35,8),new D({color:7877903,roughness:.9}));return R.position.set(0,.18,0),v.add(I,R),n.add(v),n}function fx(i,t,n,e,o){const s=new Jt;s.position.set(i,.15,t);const r=.46,a=.95,l=.4,f=new D({map:D2(),roughness:.4,metalness:.2}),c=new x(new L(r,a,l),f);c.position.set(0,a/2,0),s.add(c);const d=new D({color:1516884,roughness:.4}),h=new x(new L(r+.03,.06,l+.03),d);h.position.set(0,a+.03,0),s.add(h);const u=new D({color:132631,roughness:.8});for(const g of[-.12,.12]){const _=new x(new it(.05,.05,.02,12),u);_.position.set(g,a+.065,0),s.add(_)}return n.add({id:"alley-can-recycle",x:i,z:t,radius:1.8,prompt:"Recycle Can / Bottle [空き缶・ボトル回収]",onInteract:()=>{o&&o.playDeskBellSound(),e.show("空き缶・ペットボトル回収BOX: You recycle an empty canned drink with a satisfying *Clatter-clink!*")}}),s}function hx(i,t,n){const e=new Jt;e.position.set(i,3.1,t);const o=new x(new it(.012,.012,.45,6),Ie);o.rotation.x=Math.PI/2,o.position.set(0,0,-.22),e.add(o);const s=new D({color:1259559,roughness:.35}),r=new x(new Je(.24,.12,12,1,!0),s);r.position.set(0,-.06,0),e.add(r);const a=new x(new Fe(.045,8,8),Zn);a.position.set(0,-.09,0),e.add(a);const l=new Me(16753988,2.2,8.5,1.2);return l.position.set(0,-.15,0),e.add(l),n.push(l),e}function dx(i,t,n,e){const o=[{x:13.8,z:3.8},{x:18.2,z:-3.8}];for(const s of o){const r=new Jt;r.position.set(s.x,.15,s.z);const a=new x(new it(.06,.06,3.2,8),Ie);a.position.set(0,1.6,0),r.add(a);const l=new x(new L(.2,.28,.14),io);l.position.set(0,1.25,.08),r.add(l);const f=new x(new it(.04,.04,.03,10),Dt);f.rotateX(Math.PI/2),f.position.set(0,1.25,.16),r.add(f);const c=new x(new L(.32,.65,.22),Ie);c.position.set(0,2.8,0),r.add(c);const d=new x(new yn(.1,12),new Qt({color:4521898}));d.position.set(0,2.65,.12),r.add(d),i.add(r),t.add({minX:s.x-.2,minY:0,minZ:s.z-.2,maxX:s.x+.2,maxY:3.5,maxZ:s.z+.2}),n.add({id:`signal-${s.x}`,x:s.x,z:s.z+.4,radius:1.6,prompt:"Push Pedestrian Crossing Button [押ボタン式]",onInteract:()=>{e.show('*Beep-Boop* "Omachi kudasai" (Please wait). Signal chime activates: *Piyo-piyo*')}})}}function ux(i,t,n,e,o){const l=new Jt;l.position.set(6,.15,21.2);const f=new Jt,c=.52,d=.2,h=.4,u=.015,g=new D({map:L2(),roughness:.88}),_=new D({color:13147500,roughness:.9}),m=new x(new L(c,u,h),g);m.position.set(0,u/2,0),f.add(m);const p=new x(new L(c,d,u),g);p.position.set(0,d/2,h/2-u/2);const T=new x(new L(c,d,u),g);T.position.set(0,d/2,-h/2+u/2);const w=new x(new L(u,d,h-u*2),g);w.position.set(-c/2+u/2,d/2,0);const v=new x(new L(u,d,h-u*2),g);v.position.set(c/2-u/2,d/2,0),f.add(p,T,w,v);const I=.08,R=new x(new L(c,u,I),_);R.position.set(0,d+.01,h/2+I*.4),R.rotation.x=.45;const E=new x(new L(c,u,I),_);E.position.set(0,d+.01,-h/2-I*.4),E.rotation.x=-.45;const C=new x(new L(I,u,h),_);C.position.set(-c/2-I*.4,d+.01,0),C.rotation.z=-.45;const S=new x(new L(I,u,h),_);S.position.set(c/2+I*.4,d+.01,0),S.rotation.z=.45,f.add(R,E,C,S);const M=new D({color:16643810,roughness:.95}),P=new x(new L(c-.06,.08,h-.06),M);P.position.set(0,.05,0),f.add(P),l.add(f);const B=new D({color:16317180,roughness:.25}),k=new x(new it(.1,.08,.035,16),B);k.position.set(-.42,.018,.06);const K=new D({color:7160611,roughness:.9}),Z=new x(new it(.085,.085,.02,12),K);Z.position.set(-.42,.032,.06),l.add(k,Z);const V=new D({color:14742270,roughness:.25}),j=new x(new it(.09,.07,.045,16),V);j.position.set(-.42,.0225,-.16);const X=new x(new yn(.08,16),new D({color:3718648,roughness:.1,metalness:.4,transparent:!0,opacity:.85}));X.rotation.x=-Math.PI/2,X.position.set(-.42,.04,-.16),l.add(j,X);const rt=new D({color:13935475,roughness:.9}),lt=new x(new L(.12,.035,.32),rt);lt.position.set(.38,.018,0),l.add(lt);const ut=new Jt;ut.position.set(0,.08,0);const Tt=new D({color:1579035,roughness:.82}),St=new D({color:16317180,roughness:.85}),G=new D({color:16020150,roughness:.5}),W=new x(new Fe(.14,16,12),Tt);W.scale.set(.95,.76,1.25),W.position.set(0,.1,-.02),ut.add(W);const Y=new x(new Fe(.09,12,8),St);Y.scale.set(.72,.72,.35),Y.position.set(0,.11,.11),ut.add(Y);const st=new Fe(.038,10,8);st.scale(.85,.55,1.25);const xt=new x(st,St);xt.position.set(-.065,.03,.12);const Rt=new x(st,St);Rt.position.set(.065,.03,.12),ut.add(xt,Rt);const Ut=new Fe(.007,6,6);Ut.scale(1,.6,1);for(const Yt of[-.065,.065])for(let Zt=-1;Zt<=1;Zt++){const b=new x(Ut,G);b.position.set(Yt+Zt*.012,.032,.16),ut.add(b)}const Wt=new D({color:14427686,roughness:.4}),Lt=new x(new We(.08,.011,6,16),Wt);Lt.position.set(0,.17,.09),Lt.rotation.x=.35,ut.add(Lt);const jt=new D({color:16436245,metalness:.85,roughness:.2}),U=new x(new Fe(.02,10,10),jt);U.position.set(0,.14,.16),ut.add(U);const Vt=new Jt;Vt.position.set(0,.22,.1);const Ft=new x(new Fe(.115,16,14),Tt);Ft.scale.set(1.05,.95,.98),Vt.add(Ft);const It=new Fe(.036,10,8),Et=new x(It,St);Et.position.set(-.032,-.026,.092);const qt=new x(It,St);qt.position.set(.032,-.026,.092),Vt.add(Et,qt);const At=new Je(.013,.014,3);At.rotateZ(Math.PI);const A=new x(At,G);A.position.set(0,-.014,.118),Vt.add(A);const y=new Qt({color:16777215}),H=new it(.0015,.0015,.11,4);H.rotateZ(Math.PI/2);for(const Yt of[-1,1])for(let Zt=-1;Zt<=1;Zt++){const b=new x(H,y);b.position.set(Yt*.075,-.024+Zt*.009,.095),b.rotation.z=Yt*(.15+Zt*.18),b.rotation.y=Yt*.35,Vt.add(b)}const Q=new Jt;Q.position.set(-.065,.085,.01);const ot=new Jt;ot.position.set(.065,.085,.01);const tt=Tt,wt=new D({color:16361684,roughness:.65}),at=new Je(.038,.078,4),_t=new Je(.026,.056,4),Kt=new x(at,tt);Kt.rotation.y=Math.PI/4;const ct=new x(_t,wt);ct.rotation.y=Math.PI/4,ct.position.set(0,-.004,.008),Q.add(Kt,ct);const Mt=new x(at,tt);Mt.rotation.y=-Math.PI/4;const Ot=new x(_t,wt);Ot.rotation.y=-Math.PI/4,Ot.position.set(0,-.004,.008),ot.add(Mt,Ot),Vt.add(Q,ot);const Gt=new D({color:1096065,roughness:.2,emissive:366185,emissiveIntensity:.45}),Pt=new Qt({color:0}),ie=new Qt({color:16777215}),$t=[];for(const Yt of[-.044,.044]){const Zt=new Jt;Zt.position.set(Yt,.016,.098);const b=new x(new Fe(.024,12,10),Gt);Zt.add(b);const O=new x(new L(.007,.032,.005),Pt);O.position.set(0,0,.022),Zt.add(O);const q=new x(new Fe(.005,6,6),ie);q.position.set(-.007,.008,.023);const $=new x(new Fe(.0028,6,6),ie);$.position.set(.005,-.006,.023),Zt.add(q,$);const z=new Fe(.026,10,8,0,Math.PI*2,0,Math.PI*.52),ht=new x(z,Tt);ht.rotation.x=Math.PI/2,ht.position.set(0,.004,0),ht.scale.set(1.02,.01,1.02),Zt.add(ht),$t.push(ht),Vt.add(Zt)}ut.add(Vt);const ue=new Jt;ue.position.set(0,.12,-.16);const F=Tt,vt=new it(.022,.026,.11,8);vt.translate(0,.055,0);const J=new x(vt,F);J.rotation.x=-.7,ue.add(J);const et=new Jt;et.position.set(0,.09,-.065);const mt=new it(.018,.022,.11,8);mt.translate(0,.055,0);const ft=new x(mt,F);ft.rotation.x=.5,et.add(ft);const Xt=new Jt;Xt.position.set(0,.09,.055);const me=new it(.012,.018,.1,8);me.translate(0,.05,0);const be=new x(me,St);be.rotation.x=.8,Xt.add(be),et.add(Xt),ue.add(et),ut.add(ue),l.add(ut);const te=new cf;te.moveTo(.025,.025),te.bezierCurveTo(.025,.025,.02,0,0,0),te.bezierCurveTo(-.03,0,-.03,.035,-.03,.035),te.bezierCurveTo(-.03,.055,-.01,.077,.025,.1),te.bezierCurveTo(.06,.077,.08,.055,.08,.035),te.bezierCurveTo(.08,.035,.08,0,.05,0),te.bezierCurveTo(.035,0,.025,.025,.025,.025);const Te=new ya(te);Te.scale(.8,-.8,.8);const ge=new Qt({color:16007006,side:tn,transparent:!0,opacity:0}),we=[];for(let Yt=0;Yt<3;Yt++){const Zt=new x(Te,ge.clone());Zt.visible=!1,l.add(Zt),we.push({mesh:Zt,vy:.35+Yt*.08,life:0,maxLife:1.6,baseX:(Yt-1)*.12,baseZ:Yt%2===0?.08:-.08})}const Be=()=>{we.forEach((Yt,Zt)=>{Yt.life=Yt.maxLife,Yt.mesh.visible=!0,Yt.mesh.position.set(Yt.baseX,.38+Zt*.05,Yt.baseZ);const b=Yt.mesh.material;b.opacity=1})};i.add(l);let oe=0,ne=0;const dn=['Kuro-chan (クロちゃん) leans gently into your hand, closes its emerald eyes, and lets out a warm, rumbling purr: "Nyaaa~~ ฅ(≈>ܫ<≈)ฅ"','You scratch Kuro-chan under its chin! The tiny brass bell tinkles softly as it purrs: "*Purrrrrr... Purrrrrr...*"','Kuro-chan rolls slightly onto its side on the warm fleece blanket, happily kneading its little white paws: "Mew! <3"','Kuro-chan nudges its nose against your fingers, completely relaxed in its Ehime Mikan box: "Purr-purr... Nyaa~"'];t.add({id:"stray-cat",x:6,z:21.2,radius:2,prompt:"Pet Kuro-chan the Alley Kitten [クロちゃんを撫でる]",onInteract:()=>{ne=2.4,Be(),o&&(o.playCatMeow(),setTimeout(()=>{o&&o.playCatPurr()},320));const Yt=dn[oe%dn.length];oe++,n.show(Yt)}});let De=0,Ye=2.5,an=!1,_e=0,Se=4,Ce=0;return{update:Yt=>{if(De+=Yt,W.scale.y=.76+Math.sin(De*2.2)*.024,W.position.y=.1+Math.sin(De*2.2)*.003,ue.rotation.y=Math.sin(De*1.8)*.22,et.rotation.y=Math.sin(De*1.8-.4)*.26,Xt.rotation.y=Math.sin(De*1.8-.8)*.32,Ye-=Yt,Ye<=0&&!an&&(an=!0,_e=0),an)if(_e+=Yt*8,_e>=Math.PI)an=!1,Ye=3+Math.random()*4,$t.forEach(Zt=>Zt.scale.set(1.02,.01,1.02));else{const Zt=Math.sin(_e)*.98+.01;$t.forEach(b=>b.scale.set(1.02,Zt,1.02))}if(Se-=Yt,Se<=0&&Ce<=0&&(Ce=Math.PI*2,Se=3.5+Math.random()*5),Ce>0){Ce-=Yt*14;const Zt=Math.sin(Ce)*.22;Q.rotation.z=Math.max(0,Zt),ot.rotation.z=Math.min(0,-Zt*.7)}else Q.rotation.z=0,ot.rotation.z=0;if(ne>0)ne-=Yt,Vt.rotation.x=-.22,Vt.rotation.z=.06*Math.sin(De*3),$t.forEach(Zt=>Zt.scale.set(1.02,.85,1.02));else if(Vt.rotation.x=0,e){const Zt=e.x-6,b=e.z-21.2;if(Math.hypot(Zt,b)<4.2){const q=Math.atan2(Zt,b),$=Math.max(-1.3,Math.min(1.3,q));Vt.rotation.y=Bs.lerp(Vt.rotation.y,$,Yt*3.5),Vt.rotation.z=Math.sin(De*1.5)*.06}else Vt.rotation.y=Bs.lerp(Vt.rotation.y,0,Yt*2),Vt.rotation.z=Bs.lerp(Vt.rotation.z,0,Yt*2)}for(const Zt of we)if(Zt.life>0){Zt.life-=Yt,Zt.mesh.position.y+=Zt.vy*Yt,Zt.mesh.position.x=Zt.baseX+Math.sin(Zt.life*4)*.03;const b=Zt.life/Zt.maxLife,O=Zt.mesh.material;O.opacity=Math.max(0,Math.min(1,b*1.5)),Zt.life<=0&&(Zt.mesh.visible=!1)}}}}class px{constructor(){xe(this,"ctx",null);xe(this,"ambientNode",null);xe(this,"stepTimer",0);xe(this,"stepInterval",.44)}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.startAmbience())}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startAmbience(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),e=n.getChannelData(0);let o=0;for(let a=0;a<t;a++){const l=Math.random()*2-1;e[a]=(o+.02*l)/1.02,o=e[a],e[a]*=3.5}const s=this.ctx.createBufferSource();s.buffer=n,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(140,this.ctx.currentTime),this.ambientNode=this.ctx.createGain(),this.ambientNode.gain.setValueAtTime(.18,this.ctx.currentTime),s.connect(r),r.connect(this.ambientNode),this.ambientNode.connect(this.ctx.destination),s.start()}updateFootsteps(t,n,e){if(!n){this.stepTimer=this.stepInterval*.75;return}this.stepTimer+=t,this.stepTimer>=this.stepInterval&&(this.stepTimer=0,this.playFootstep(e))}playFootstep(t){if(!this.ctx)return;const n=this.ctx.createOscillator(),e=this.ctx.createGain(),o=this.ctx.currentTime;t==="tile"?(n.frequency.setValueAtTime(320,o),n.frequency.exponentialRampToValueAtTime(80,o+.045),e.gain.setValueAtTime(.08,o),e.gain.exponentialRampToValueAtTime(.001,o+.045)):t==="walk"?(n.frequency.setValueAtTime(240,o),n.frequency.exponentialRampToValueAtTime(60,o+.055),e.gain.setValueAtTime(.1,o),e.gain.exponentialRampToValueAtTime(.001,o+.055)):t==="road"?(n.frequency.setValueAtTime(180,o),n.frequency.exponentialRampToValueAtTime(45,o+.065),e.gain.setValueAtTime(.12,o),e.gain.exponentialRampToValueAtTime(.001,o+.065)):(n.frequency.setValueAtTime(140,o),n.frequency.exponentialRampToValueAtTime(50,o+.05),e.gain.setValueAtTime(.06,o),e.gain.exponentialRampToValueAtTime(.001,o+.05)),n.connect(e),e.connect(this.ctx.destination),n.start(o),n.stop(o+.07)}playVendingSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(2400,t),n.frequency.exponentialRampToValueAtTime(800,t+.03),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.04);const o=this.ctx.createOscillator(),s=this.ctx.createGain();o.frequency.setValueAtTime(280,t+.08),o.frequency.linearRampToValueAtTime(320,t+.25),s.gain.setValueAtTime(.08,t+.08),s.gain.linearRampToValueAtTime(.001,t+.28),o.connect(s),s.connect(this.ctx.destination),o.start(t+.08),o.stop(t+.29);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.frequency.setValueAtTime(180,t+.32),r.frequency.exponentialRampToValueAtTime(40,t+.45),a.gain.setValueAtTime(.35,t+.32),a.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(a),a.connect(this.ctx.destination),r.start(t+.32),r.stop(t+.46)}playElevatorChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(880,t),e.gain.setValueAtTime(.2,t),e.gain.exponentialRampToValueAtTime(.001,t+.6),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.65);const o=this.ctx.createOscillator(),s=this.ctx.createGain();o.frequency.setValueAtTime(659.25,t+.22),s.gain.setValueAtTime(.25,t+.22),s.gain.exponentialRampToValueAtTime(.001,t+.95),o.connect(s),s.connect(this.ctx.destination),o.start(t+.22),o.stop(t+1)}playCatMeow(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(550,t),n.frequency.linearRampToValueAtTime(820,t+.18),n.frequency.linearRampToValueAtTime(620,t+.42),e.gain.setValueAtTime(.01,t),e.gain.linearRampToValueAtTime(.18,t+.08),e.gain.linearRampToValueAtTime(.12,t+.28),e.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.46)}playCatPurr(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(85,t);const e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(26,t);const o=this.ctx.createGain();o.gain.setValueAtTime(35,t);const s=this.ctx.createGain();s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.22,t+.15),s.gain.setValueAtTime(.22,t+1.2),s.gain.exponentialRampToValueAtTime(.001,t+1.6),e.connect(o),o.connect(n.frequency),n.connect(s),s.connect(this.ctx.destination),e.start(t),n.start(t),e.stop(t+1.65),n.stop(t+1.65)}playCrosswalkChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(1800,t),n.frequency.exponentialRampToValueAtTime(1400,t+.12),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playFamilyMartChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=[{f:739.99,t:0,d:.18},{f:587.33,t:.18,d:.18},{f:440,t:.36,d:.18},{f:587.33,t:.54,d:.18},{f:659.25,t:.72,d:.18},{f:880,t:.9,d:.4},{f:659.25,t:1.35,d:.18},{f:739.99,t:1.53,d:.18},{f:659.25,t:1.71,d:.18},{f:440,t:1.89,d:.18},{f:587.33,t:2.07,d:.45}];for(const e of n){const o=this.ctx.createOscillator(),s=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(e.f,t+e.t),s.gain.setValueAtTime(.16,t+e.t),s.gain.exponentialRampToValueAtTime(.001,t+e.t+e.d),o.connect(s),s.connect(this.ctx.destination),o.start(t+e.t),o.stop(t+e.t+e.d+.05)}}playSlidingDoorSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=Math.floor(this.ctx.sampleRate*.4),e=this.ctx.createBuffer(1,n,this.ctx.sampleRate),o=e.getChannelData(0);for(let l=0;l<n;l++)o[l]=(Math.random()*2-1)*(1-l/n);const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(800,t),r.Q.setValueAtTime(2,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.08,t),a.gain.linearRampToValueAtTime(.001,t+.38),s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(t)}playSipWaterSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(240,t+.14),e.gain.setValueAtTime(.12,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playDeskBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createOscillator(),o=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(2093,t),e.type="sine",e.frequency.setValueAtTime(3135,t),o.gain.setValueAtTime(.22,t),o.gain.exponentialRampToValueAtTime(.001,t+1.1),n.connect(o),e.connect(o),o.connect(this.ctx.destination),n.start(t),e.start(t),n.stop(t+1.1),e.stop(t+1.1)}playRamenTicketSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(587.33,t),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.12);const o=this.ctx.createOscillator(),s=this.ctx.createGain();o.frequency.setValueAtTime(880,t+.1),s.gain.setValueAtTime(.18,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.35),o.connect(s),s.connect(this.ctx.destination),o.start(t+.1),o.stop(t+.35);const r=Math.floor(this.ctx.sampleRate*.25),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),l=a.getChannelData(0);for(let h=0;h<r;h++)l[h]=(Math.random()*2-1)*Math.sin(h/r*Math.PI*40);const f=this.ctx.createBufferSource();f.buffer=a;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(1400,t+.25);const d=this.ctx.createGain();d.gain.setValueAtTime(.08,t+.25),d.gain.linearRampToValueAtTime(.001,t+.5),f.connect(c),c.connect(d),d.connect(this.ctx.destination),f.start(t+.25)}playBikeBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let n=0;n<2;n++){const e=t+n*.12,o=this.ctx.createOscillator(),s=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(2637,e),s.type="sine",s.frequency.setValueAtTime(4186,e),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),o.connect(r),s.connect(r),r.connect(this.ctx.destination),o.start(e),s.start(e),o.stop(e+.36),s.stop(e+.36)}}}class mx{constructor(t){xe(this,"canvas");xe(this,"ctx");xe(this,"scale",3.2);xe(this,"lastX",-9999);xe(this,"lastZ",-9999);xe(this,"lastYaw",-9999);this.canvas=t,this.canvas.width=256,this.canvas.height=256,this.ctx=t.getContext("2d")}update(t,n=!1){if(!n&&Math.abs(t.x-this.lastX)<.012&&Math.abs(t.z-this.lastZ)<.012&&Math.abs(t.yaw-this.lastYaw)<.008)return;this.lastX=t.x,this.lastZ=t.z,this.lastYaw=t.yaw;const e=this.ctx,o=this.canvas.width,s=this.canvas.height,r=o/2,a=s/2;e.fillStyle="#0a0e14",e.fillRect(0,0,o,s),e.save(),e.translate(r,a);const l=h=>(h-t.x)*this.scale,f=h=>(h-t.z)*this.scale;e.fillStyle="#181e28",e.fillRect(l(-55),f(-3.5),110*this.scale,7*this.scale),e.fillRect(l(13.5),f(3.5),5*this.scale,38.5*this.scale),e.fillRect(l(-16.5),f(-42),5*this.scale,38.5*this.scale),e.fillStyle="#222834",e.fillRect(l(-55),f(3.5),110*this.scale,4*this.scale),e.fillRect(l(-55),f(-7.5),110*this.scale,4*this.scale),e.fillRect(l(10.5),f(3.5),3*this.scale,38.5*this.scale),e.fillRect(l(18.5),f(3.5),3*this.scale,38.5*this.scale),e.fillRect(l(-19.5),f(-42),3*this.scale,38.5*this.scale),e.fillRect(l(-11.5),f(-42),3*this.scale,38.5*this.scale),e.fillRect(l(4),f(19.5),9.5*this.scale,3*this.scale),e.fillRect(l(-4),f(21.5),8*this.scale,3*this.scale),e.fillStyle="#142a1e",e.fillRect(l(-8.5),f(-36),16.5*this.scale,24*this.scale),e.strokeStyle="#2d5a3c",e.lineWidth=1,e.strokeRect(l(-8.5),f(-36),16.5*this.scale,24*this.scale),e.fillStyle="#ffffff";const c=[{x:16,z:0,w:4,d:7},{x:-14,z:0,w:4,d:7},{x:0,z:0,w:3.5,d:7},{x:16,z:5.5,w:5,d:3},{x:-14,z:-5.5,w:5,d:3}];for(const h of c)e.globalAlpha=.4,e.fillRect(l(h.x-h.w/2),f(h.z-h.d/2),h.w*this.scale,h.d*this.scale),e.globalAlpha=1;for(const h of mf){const u=l(h.x-h.w/2),g=f(h.z-h.d/2),_=h.w*this.scale,m=h.d*this.scale;h.id==="b-sunheights"?(e.fillStyle="#1e384d",e.strokeStyle="#4da2d6"):h.id==="b-konbini"?(e.fillStyle="#14422e",e.strokeStyle="#32b87a"):h.id==="b-ramen"?(e.fillStyle="#4a201c",e.strokeStyle="#e04c3e"):h.id==="b-cafe"?(e.fillStyle="#3d2b1c",e.strokeStyle="#c4894d"):(e.fillStyle="#262d38",e.strokeStyle="#3d485a"),e.lineWidth=1.5,e.fillRect(u,g,_,m),e.strokeRect(u,g,_,m),e.font='10px "Yu Gothic UI", sans-serif',e.textAlign="center",e.textBaseline="middle",h.id==="b-sunheights"?(e.fillStyle="#78c6f7",e.fillText("🏠 サンハイツ",l(h.x),f(h.z))):h.id==="b-konbini"?(e.fillStyle="#5ee6a2",e.fillText("🏪 コンビニ",l(h.x),f(h.z))):h.id==="b-ramen"?(e.fillStyle="#ff8878",e.fillText("🍜 麺処",l(h.x),f(h.z))):h.id==="b-cafe"&&(e.fillStyle="#f0b878",e.fillText("☕ 喫茶",l(h.x),f(h.z)))}e.font='10px "Yu Gothic UI", sans-serif',e.fillStyle="#65d48a",e.fillText("🌸 桜公園",l(-.25),f(-24)),e.restore(),e.save(),e.translate(r,a),e.rotate(-t.yaw);const d=e.createRadialGradient(0,0,2,0,0,36);d.addColorStop(0,"rgba(80, 210, 255, 0.45)"),d.addColorStop(1,"rgba(80, 210, 255, 0.0)"),e.beginPath(),e.moveTo(0,0),e.arc(0,0,36,-Math.PI/2-.45,-Math.PI/2+.45),e.closePath(),e.fillStyle=d,e.fill(),e.beginPath(),e.moveTo(0,-9),e.lineTo(6,6),e.lineTo(0,3),e.lineTo(-6,6),e.closePath(),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="#00aaff",e.lineWidth=1.5,e.stroke(),e.restore(),e.fillStyle="rgba(15, 20, 28, 0.75)",e.fillRect(o-28,6,22,22),e.strokeStyle="rgba(255, 255, 255, 0.2)",e.strokeRect(o-28,6,22,22),e.font="bold 11px sans-serif",e.fillStyle="#e85d4d",e.textAlign="center",e.textBaseline="middle",e.fillText("N",o-17,17)}}class gx{constructor(){xe(this,"locEl");xe(this,"crosshairEl");xe(this,"promptEl");xe(this,"toastEl");xe(this,"overlayEl");this.locEl=document.getElementById("location"),this.crosshairEl=document.getElementById("crosshair"),this.promptEl=document.getElementById("prompt"),this.toastEl=document.getElementById("toast"),this.overlayEl=document.getElementById("overlay")}update(t,n,e){var o,s;this.locEl&&this.locEl.textContent!==t&&(this.locEl.textContent=t),this.promptEl&&(n?(this.promptEl.innerHTML=`<kbd>E</kbd> ${n}`,(o=this.crosshairEl)==null||o.classList.add("active")):(this.promptEl.innerHTML="",(s=this.crosshairEl)==null||s.classList.remove("active"))),this.toastEl&&(this.toastEl.textContent=e)}showOverlay(){var t;(t=this.overlayEl)==null||t.classList.remove("hidden")}hideOverlay(){var t;(t=this.overlayEl)==null||t.classList.add("hidden")}isOverlayVisible(){var t;return!((t=this.overlayEl)!=null&&t.classList.contains("hidden"))}}async function xx(){const i=new Wm;i.background=new de(790551),i.fog=new va(790551,.022);const t=new gn(74,window.innerWidth/window.innerHeight,.1,180),n=new Vm({antialias:!0,powerPreference:"high-performance"});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),n.toneMapping=bc,n.toneMappingExposure=1.15,n.shadowMap.enabled=!0,n.shadowMap.type=Sc,n.shadowMap.autoUpdate=!1;const e=document.getElementById("app");e?e.appendChild(n.domElement):document.body.appendChild(n.domElement);const o=new Sg(2635856,658708,.75);i.add(o);const s=new Tg(8561876,.55);s.position.set(24,45,18),s.castShadow=!0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,s.shadow.camera.near=.5,s.shadow.camera.far=120,s.shadow.camera.left=-50,s.shadow.camera.right=50,s.shadow.camera.top=50,s.shadow.camera.bottom=-50,s.shadow.bias=-6e-4,i.add(s);let r=!0;Rg();const a=new Cg,l=new Pg,f=new Lg,c=new px,d=new gx,h=new Og(0,18.2,Math.PI);h.applyCamera(t),N2(i,a);const u=z2(i,a,l,f,c),g=q2(i,a,l,f,h,c),_=document.getElementById("minimap"),m=_?new mx(_):null;let p=!1;const T=()=>{document.pointerLockElement===document.body?(p=!0,d.hideOverlay(),c.init(),c.resume()):(p=!1,d.showOverlay())};document.addEventListener("pointerlockchange",T);const w=()=>{c.init(),c.resume(),document.body.requestPointerLock()},v=document.getElementById("overlay");v&&v.addEventListener("click",w),window.addEventListener("click",()=>{p||w()}),window.addEventListener("mousemove",K=>{p&&h.applyMouse(K.movementX,K.movementY)}),window.addEventListener("keydown",K=>{if(K.code==="KeyE"){const Z=l.prompt().toLowerCase();Z.includes("buy")||Z.includes("coffee")||Z.includes("tea")||Z.includes("famichiki")||Z.includes("chicken")?c.playVendingSound():Z.includes("water")||Z.includes("drink park")?c.playSipWaterSound():Z.includes("elevator")?c.playElevatorChime():Z.includes("cat")||Z.includes("pet")?c.playCatMeow():(Z.includes("signal")||Z.includes("crossing")||Z.includes("button"))&&c.playCrosswalkChime(),l.use()}}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),r=!0}),f.show("Welcome home to Tokyo. Walk through the front glass doors to explore the neighbourhood.",6);const I=new Eg,E=1e3/120;let C=performance.now(),S=0,M=performance.now(),P=120;const B=document.getElementById("fps-badge");function k(K){if(requestAnimationFrame(k),document.hidden)return;const Z=p?E:1e3/30,V=K-C;if(V<Z-1)return;C=K-V%Z,S++,K-M>=1e3&&(P=Math.round(S*1e3/(K-M)),S=0,M=K,B&&(B.textContent=`${P} FPS`));const j=Math.min(I.getDelta(),.05);h.update(j,p,a),h.applyCamera(t),u.update(j,h),g.update(j),l.update(h,a),f.update(j);const X=p&&!h.seated&&h.moving();let rt="walk";const lt=Ug(h.x,h.z);lt.includes("Lobby")||lt.includes("Store")||lt.includes("Ramen")?rt="tile":lt.includes("Park")?rt="park":pf(h.x,h.z)&&(rt="road"),c.updateFootsteps(j,X,rt),d.update(lt,l.prompt(),f.text),m&&m.update(h),r&&(n.shadowMap.needsUpdate=!0,r=!1),n.render(i,t)}requestAnimationFrame(k)}window.addEventListener("DOMContentLoaded",()=>{xx().catch(i=>console.error("Initialization error:",i))});
