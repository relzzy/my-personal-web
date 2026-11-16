var Yf=Object.defineProperty;var Zf=(o,t,n)=>t in o?Yf(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var ae=(o,t,n)=>Zf(o,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="170",qf=0,el=1,$f=2,Nc=1,zc=2,qn=3,hi=0,hn=1,nn=2,ci=0,Ki=1,Tr=2,nl=3,il=4,Kf=5,Si=100,Jf=101,jf=102,Qf=103,th=104,eh=200,nh=201,ih=202,oh=203,Er=204,Ar=205,sh=206,rh=207,ah=208,lh=209,ch=210,fh=211,hh=212,dh=213,uh=214,Rr=0,Cr=1,Pr=2,to=3,Ir=4,Lr=5,Dr=6,Ur=7,Fc=0,ph=1,mh=2,fi=0,gh=1,xh=2,_h=3,Oc=4,wh=5,vh=6,yh=7,kc=300,eo=301,no=302,Nr=303,zr=304,Ps=306,Ce=1e3,Ti=1001,Fr=1002,In=1003,Mh=1004,Vo=1005,kn=1006,Hs=1007,Ei=1008,Qn=1009,Bc=1010,Gc=1011,Io=1012,ga=1013,Ai=1014,$n=1015,Oo=1016,xa=1017,_a=1018,io=1020,Hc=35902,Vc=1021,Wc=1022,Pn=1023,Xc=1024,Yc=1025,Ji=1026,oo=1027,Zc=1028,wa=1029,qc=1030,va=1031,ya=1033,vs=33776,ys=33777,Ms=33778,Ss=33779,Or=35840,kr=35841,Br=35842,Gr=35843,Hr=36196,Vr=37492,Wr=37496,Xr=37808,Yr=37809,Zr=37810,qr=37811,$r=37812,Kr=37813,Jr=37814,jr=37815,Qr=37816,ta=37817,ea=37818,na=37819,ia=37820,oa=37821,bs=36492,sa=36494,ra=36495,$c=36283,aa=36284,la=36285,ca=36286,Sh=3200,bh=3201,Kc=0,Th=1,li="",de="srgb",ao="srgb-linear",Is="linear",Se="srgb",Li=7680,ol=519,Eh=512,Ah=513,Rh=514,Jc=515,Ch=516,Ph=517,Ih=518,Lh=519,sl=35044,rl="300 es",Kn=2e3,Es=2001;class lo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(n)===-1&&e[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const i=e.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const bo=Math.PI/180,Lo=180/Math.PI;function Pi(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(tn[o&255]+tn[o>>8&255]+tn[o>>16&255]+tn[o>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[e&255]+tn[e>>8&255]+tn[e>>16&255]+tn[e>>24&255]).toLowerCase()}function Je(o,t,n){return Math.max(t,Math.min(n,o))}function Ma(o,t){return(o%t+t)%t}function Dh(o,t,n,e,i){return e+(o-t)*(i-e)/(n-t)}function Uh(o,t,n){return o!==t?(n-o)/(t-o):0}function To(o,t,n){return(1-n)*o+n*t}function Nh(o,t,n,e){return To(o,t,1-Math.exp(-n*e))}function zh(o,t=1){return t-Math.abs(Ma(o,t*2)-t)}function Fh(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*(3-2*o))}function Oh(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*o*(o*(o*6-15)+10))}function kh(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Bh(o,t){return o+Math.random()*(t-o)}function Gh(o){return o*(.5-Math.random())}function Hh(o){o!==void 0&&(al=o);let t=al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vh(o){return o*bo}function Wh(o){return o*Lo}function Xh(o){return(o&o-1)===0&&o!==0}function Yh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Zh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function qh(o,t,n,e,i){const s=Math.cos,r=Math.sin,a=s(n/2),l=r(n/2),c=s((t+e)/2),h=r((t+e)/2),f=s((t-e)/2),u=r((t-e)/2),d=s((e-t)/2),m=r((e-t)/2);switch(i){case"XYX":o.set(a*h,l*f,l*u,a*c);break;case"YZY":o.set(l*u,a*h,l*f,a*c);break;case"ZXZ":o.set(l*f,l*u,a*h,a*c);break;case"XZX":o.set(a*h,l*m,l*d,a*c);break;case"YXY":o.set(l*d,a*h,l*m,a*c);break;case"ZYZ":o.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function an(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Vs={DEG2RAD:bo,RAD2DEG:Lo,generateUUID:Pi,clamp:Je,euclideanModulo:Ma,mapLinear:Dh,inverseLerp:Uh,lerp:To,damp:Nh,pingpong:zh,smoothstep:Fh,smootherstep:Oh,randInt:kh,randFloat:Bh,randFloatSpread:Gh,seededRandom:Hh,degToRad:Vh,radToDeg:Wh,isPowerOfTwo:Xh,ceilPowerOfTwo:Yh,floorPowerOfTwo:Zh,setQuaternionFromProperEuler:qh,normalize:an,denormalize:Zi};class Bt{constructor(t=0,n=0){Bt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,e=this.y,i=t.elements;return this.x=i[0]*n+i[3]*e+i[6],this.y=i[1]*n+i[4]*e+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(Je(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y;return n*n+e*e}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const e=Math.cos(n),i=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*e-r*i+t.x,this.y=s*i+r*e+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,n,e,i,s,r,a,l,c){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,e,i,s,r,a,l,c)}set(t,n,e,i,s,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=e,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],this}extractBasis(t,n,e){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,i=n.elements,s=this.elements,r=e[0],a=e[3],l=e[6],c=e[1],h=e[4],f=e[7],u=e[2],d=e[5],m=e[8],_=i[0],x=i[3],p=i[6],M=i[1],v=i[4],w=i[7],P=i[2],R=i[5],E=i[8];return s[0]=r*_+a*M+l*P,s[3]=r*x+a*v+l*R,s[6]=r*p+a*w+l*E,s[1]=c*_+h*M+f*P,s[4]=c*x+h*v+f*R,s[7]=c*p+h*w+f*E,s[2]=u*_+d*M+m*P,s[5]=u*x+d*v+m*R,s[8]=u*p+d*w+m*E,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*a*c-e*s*h+e*a*l+i*s*c-i*r*l}invert(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*s,d=c*s-r*l,m=n*f+e*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(i*c-h*e)*_,t[2]=(a*e-i*r)*_,t[3]=u*_,t[4]=(h*n-i*l)*_,t[5]=(i*s-a*n)*_,t[6]=d*_,t[7]=(e*l-c*n)*_,t[8]=(r*n-e*s)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,e,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(e*l,e*c,-e*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Ws.makeScale(t,n)),this}rotate(t){return this.premultiply(Ws.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ws.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,e,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,e=t.elements;for(let i=0;i<9;i++)if(n[i]!==e[i])return!1;return!0}fromArray(t,n=0){for(let e=0;e<9;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new he;function jc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function As(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $h(){const o=As("canvas");return o.style.display="block",o}const ll={};function yo(o){o in ll||(ll[o]=!0,console.warn(o))}function Kh(o,t,n){return new Promise(function(e,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:e()}}setTimeout(s,n)})}function Jh(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jh(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const we={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(o,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===Se&&(o.r=Jn(o.r),o.g=Jn(o.g),o.b=Jn(o.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Se&&(o.r=ji(o.r),o.g=ji(o.g),o.b=ji(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===li?Is:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,n){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Jn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ji(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const cl=[.64,.33,.3,.6,.15,.06],fl=[.2126,.7152,.0722],hl=[.3127,.329],dl=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);we.define({[ao]:{primaries:cl,whitePoint:hl,transfer:Is,toXYZ:dl,fromXYZ:ul,luminanceCoefficients:fl,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:cl,whitePoint:hl,transfer:Se,toXYZ:dl,fromXYZ:ul,luminanceCoefficients:fl,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});let Di;class Qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=As("canvas")),Di.width=t.width,Di.height=t.height;const e=Di.getContext("2d");t instanceof ImageData?e.putImageData(t,0,0):e.drawImage(t,0,0,t.width,t.height),n=Di}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=As("canvas");n.width=t.width,n.height=t.height;const e=n.getContext("2d");e.drawImage(t,0,0,t.width,t.height);const i=e.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Jn(s[r]/255)*255;return e.putImageData(i,0,0),n}else if(t.data){const n=t.data.slice(0);for(let e=0;e<n.length;e++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[e]=Math.floor(Jn(n[e]/255)*255):n[e]=Jn(n[e]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let td=0;class Qc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const e={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Xs(i[r].image)):s.push(Xs(i[r]))}else s=Xs(i);e.url=s}return n||(t.images[this.uuid]=e),e}}function Xs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Qh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ed=0;class cn extends lo{constructor(t=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,e=Ti,i=Ti,s=kn,r=Ei,a=Pn,l=Qn,c=cn.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Pi(),this.name="",this.source=new Qc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=e,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const e={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),n||(t.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ce:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ce:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=kc;cn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,n=0,e=0,i=1){Te.prototype.isVector4=!0,this.x=t,this.y=n,this.z=e,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,e,i){return this.x=t,this.y=n,this.z=e,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,e=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*e+r[8]*i+r[12]*s,this.y=r[1]*n+r[5]*e+r[9]*i+r[13]*s,this.z=r[2]*n+r[6]*e+r[10]*i+r[14]*s,this.w=r[3]*n+r[7]*e+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,e,i,s;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],x=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,w=(d+1)/2,P=(p+1)/2,R=(h+u)/4,E=(f+_)/4,I=(m+x)/4;return v>w&&v>P?v<.01?(e=0,i=.707106781,s=.707106781):(e=Math.sqrt(v),i=R/e,s=E/e):w>P?w<.01?(e=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),e=R/i,s=I/i):P<.01?(e=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),e=E/s,i=I/s),this.set(e,i,s,n),this}let M=Math.sqrt((x-m)*(x-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(x-m)/M,this.y=(f-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this.w=t.w+(n.w-t.w)*e,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nd extends lo{constructor(t=1,n=1,e={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Te(0,0,t,n),this.scissorTest=!1,this.viewport=new Te(0,0,t,n);const i={width:t,height:n,depth:1};e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},e);const s=new cn(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace);s.flipY=!1,s.generateMipmaps=e.generateMipmaps,s.internalFormat=e.internalFormat,this.textures=[];const r=e.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.depthTexture=e.depthTexture,this.samples=e.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,e=1){if(this.width!==t||this.height!==n||this.depth!==e){this.width=t,this.height=n,this.depth=e;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=n,this.textures[i].image.depth=e;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++)this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Qc(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends nd{constructor(t=1,n=1,e={}){super(t,n,e),this.isWebGLRenderTarget=!0}}class tf extends cn{constructor(t=null,n=1,e=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:e,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class id extends cn{constructor(t=null,n=1,e=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:e,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class co{constructor(t=0,n=0,e=0,i=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=e,this._w=i}static slerpFlat(t,n,e,i,s,r,a){let l=e[i+0],c=e[i+1],h=e[i+2],f=e[i+3];const u=s[r+0],d=s[r+1],m=s[r+2],_=s[r+3];if(a===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=f;return}if(a===1){t[n+0]=u,t[n+1]=d,t[n+2]=m,t[n+3]=_;return}if(f!==_||l!==u||c!==d||h!==m){let x=1-a;const p=l*u+c*d+h*m+f*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,p*M);x=Math.sin(x*R)/P,a=Math.sin(a*R)/P}const w=a*M;if(l=l*x+u*w,c=c*x+d*w,h=h*x+m*w,f=f*x+_*w,x===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=f}static multiplyQuaternionsFlat(t,n,e,i,s,r){const a=e[i],l=e[i+1],c=e[i+2],h=e[i+3],f=s[r],u=s[r+1],d=s[r+2],m=s[r+3];return t[n]=a*m+h*f+l*d-c*u,t[n+1]=l*m+h*u+c*f-a*d,t[n+2]=c*m+h*d+a*u-l*f,t[n+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,e,i){return this._x=t,this._y=n,this._z=e,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const e=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(e/2),h=a(i/2),f=a(s/2),u=l(e/2),d=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const e=n/2,i=Math.sin(e);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,e=n[0],i=n[4],s=n[8],r=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],u=e+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(e>a&&e>f){const d=2*Math.sqrt(1+e-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-e-f);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-e-a);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let e=t.dot(n)+1;return e<Number.EPSILON?(e=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=e):(this._x=0,this._y=-t.z,this._z=t.y,this._w=e)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=e),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,n){const e=this.angleTo(t);if(e===0)return this;const i=Math.min(1,n/e);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const e=t._x,i=t._y,s=t._z,r=t._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=e*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-e*c,this._z=s*h+r*c+e*l-i*a,this._w=r*h-e*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const e=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+e*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=e,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*r+n*this._w,this._x=d*e+n*this._x,this._y=d*i+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,u=Math.sin(n*h)/c;return this._w=r*f+this._w*u,this._x=e*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,n,e){return this.copy(t).slerp(n,e)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,e=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=e}set(t,n,e){return e===void 0&&(e=this.z),this.x=t,this.y=n,this.z=e,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(pl.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,e=this.y,i=this.z,s=t.elements;return this.x=s[0]*n+s[3]*e+s[6]*i,this.y=s[1]*n+s[4]*e+s[7]*i,this.z=s[2]*n+s[5]*e+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,e=this.y,i=this.z,s=t.elements,r=1/(s[3]*n+s[7]*e+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*e+s[8]*i+s[12])*r,this.y=(s[1]*n+s[5]*e+s[9]*i+s[13])*r,this.z=(s[2]*n+s[6]*e+s[10]*i+s[14])*r,this}applyQuaternion(t){const n=this.x,e=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*e),h=2*(a*n-s*i),f=2*(s*e-r*n);return this.x=n+l*c+r*f-a*h,this.y=e+l*h+a*c-s*f,this.z=i+l*f+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,e=this.y,i=this.z,s=t.elements;return this.x=s[0]*n+s[4]*e+s[8]*i,this.y=s[1]*n+s[5]*e+s[9]*i,this.z=s[2]*n+s[6]*e+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const e=t.x,i=t.y,s=t.z,r=n.x,a=n.y,l=n.z;return this.x=i*l-s*a,this.y=s*r-e*l,this.z=e*a-i*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const e=t.dot(this)/n;return this.copy(t).multiplyScalar(e)}projectOnPlane(t){return Ys.copy(this).projectOnVector(t),this.sub(Ys)}reflect(t){return this.sub(Ys.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(Je(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y,i=this.z-t.z;return n*n+e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,e){const i=Math.sin(n)*t;return this.x=i*Math.sin(e),this.y=Math.cos(n)*t,this.z=i*Math.cos(e),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,e){return this.x=t*Math.sin(n),this.y=e,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),e=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=e,this.z=i,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,e=Math.sqrt(1-n*n);return this.x=e*Math.cos(t),this.y=n,this.z=e*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new N,pl=new co;class ko{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n+=3)this.expandByPoint(En.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,e=t.count;n<e;n++)this.expandByPoint(En.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const e=En.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(e),this.max.copy(t).add(e),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const e=t.geometry;if(e!==void 0){const s=e.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,En):En.fromBufferAttribute(s,r),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,e;return t.normal.x>0?(n=t.normal.x*this.min.x,e=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,e=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,e+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,e+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,e+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,e+=t.normal.z*this.min.z),n<=-t.constant&&e>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),Xo.subVectors(this.max,po),Ui.subVectors(t.a,po),Ni.subVectors(t.b,po),zi.subVectors(t.c,po),ni.subVectors(Ni,Ui),ii.subVectors(zi,Ni),mi.subVectors(Ui,zi);let n=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-mi.z,mi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,mi.z,0,-mi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-mi.y,mi.x,0];return!Zs(n,Ui,Ni,zi,Xo)||(n=[1,0,0,0,1,0,0,0,1],!Zs(n,Ui,Ni,zi,Xo))?!1:(Yo.crossVectors(ni,ii),n=[Yo.x,Yo.y,Yo.z],Zs(n,Ui,Ni,zi,Xo))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new N,new N,new N,new N,new N,new N,new N,new N],En=new N,Wo=new ko,Ui=new N,Ni=new N,zi=new N,ni=new N,ii=new N,mi=new N,po=new N,Xo=new N,Yo=new N,gi=new N;function Zs(o,t,n,e,i){for(let s=0,r=o.length-3;s<=r;s+=3){gi.fromArray(o,s);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=t.dot(gi),c=n.dot(gi),h=e.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const od=new ko,mo=new N,qs=new N;class Ls{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const e=this.center;n!==void 0?e.copy(n):od.setFromPoints(t).getCenter(e);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,e.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const e=this.center.distanceToSquared(t);return n.copy(t),e>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const e=Math.sqrt(n),i=(e-this.radius)*.5;this.center.addScaledVector(mo,i/e),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(qs)),this.expandByPoint(mo.copy(t.center).sub(qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new N,$s=new N,Zo=new N,oi=new N,Ks=new N,qo=new N,Js=new N;class ef{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const e=n.dot(this.direction);return e<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Wn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,n),Wn.distanceToSquared(t))}distanceSqToSegment(t,n,e,i){$s.copy(t).add(n).multiplyScalar(.5),Zo.copy(n).sub(t).normalize(),oi.copy(this.origin).sub($s);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Zo),a=oi.dot(this.direction),l=-oi.dot(Zo),c=oi.lengthSq(),h=Math.abs(1-r*r);let f,u,d,m;if(h>0)if(f=r*l-a,u=r*a-l,m=s*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=s,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-r*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(r*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=r>0?-s:s,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return e&&e.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy($s).addScaledVector(Zo,u),d}intersectSphere(t,n){Wn.subVectors(t.center,this.origin);const e=Wn.dot(this.direction),i=Wn.dot(Wn)-e*e,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=e-r,l=e+r;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const e=-(this.origin.dot(t.normal)+t.constant)/n;return e>=0?e:null}intersectPlane(t,n){const e=this.distanceToPlane(t);return e===null?null:this.at(e,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let e,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(e=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(e=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),e>r||s>i||((s>e||isNaN(e))&&(e=s),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),e>l||a>i)||((a>e||e!==e)&&(e=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(e>=0?e:i,n)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,n,e,i,s){Ks.subVectors(n,t),qo.subVectors(e,t),Js.crossVectors(Ks,qo);let r=this.direction.dot(Js),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;oi.subVectors(this.origin,t);const l=a*this.direction.dot(qo.crossVectors(oi,qo));if(l<0)return null;const c=a*this.direction.dot(Ks.cross(oi));if(c<0||l+c>r)return null;const h=-a*oi.dot(Js);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,n,e,i,s,r,a,l,c,h,f,u,d,m,_,x){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,e,i,s,r,a,l,c,h,f,u,d,m,_,x)}set(t,n,e,i,s,r,a,l,c,h,f,u,d,m,_,x){const p=this.elements;return p[0]=t,p[4]=n,p[8]=e,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],this}copyPosition(t){const n=this.elements,e=t.elements;return n[12]=e[12],n[13]=e[13],n[14]=e[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,e){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(t,n,e){return this.set(t.x,n.x,e.x,0,t.y,n.y,e.y,0,t.z,n.z,e.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,e=t.elements,i=1/Fi.setFromMatrixColumn(t,0).length(),s=1/Fi.setFromMatrixColumn(t,1).length(),r=1/Fi.setFromMatrixColumn(t,2).length();return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=0,n[4]=e[4]*s,n[5]=e[5]*s,n[6]=e[6]*s,n[7]=0,n[8]=e[8]*r,n[9]=e[9]*r,n[10]=e[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,e=t.x,i=t.y,s=t.z,r=Math.cos(e),a=Math.sin(e),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=r*h,d=r*f,m=a*h,_=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=d+m*c,n[5]=u-_*c,n[9]=-a*l,n[2]=_-u*c,n[6]=m+d*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,_=c*f;n[0]=u+_*a,n[4]=m*a-d,n[8]=r*c,n[1]=r*f,n[5]=r*h,n[9]=-a,n[2]=d*a-m,n[6]=_+u*a,n[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,_=c*f;n[0]=u-_*a,n[4]=-r*f,n[8]=m+d*a,n[1]=d+m*a,n[5]=r*h,n[9]=_-u*a,n[2]=-r*c,n[6]=a,n[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,m=a*h,_=a*f;n[0]=l*h,n[4]=m*c-d,n[8]=u*c+_,n[1]=l*f,n[5]=_*c+u,n[9]=d*c-m,n[2]=-c,n[6]=a*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,m=a*l,_=a*c;n[0]=l*h,n[4]=_-u*f,n[8]=m*f+d,n[1]=f,n[5]=r*h,n[9]=-a*h,n[2]=-c*h,n[6]=d*f+m,n[10]=u-_*f}else if(t.order==="XZY"){const u=r*l,d=r*c,m=a*l,_=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=u*f+_,n[5]=r*h,n[9]=d*f-m,n[2]=m*f-d,n[6]=a*h,n[10]=_*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,rd)}lookAt(t,n,e){const i=this.elements;return _n.subVectors(t,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),si.crossVectors(e,_n),si.lengthSq()===0&&(Math.abs(e.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),si.crossVectors(e,_n)),si.normalize(),$o.crossVectors(_n,si),i[0]=si.x,i[4]=$o.x,i[8]=_n.x,i[1]=si.y,i[5]=$o.y,i[9]=_n.y,i[2]=si.z,i[6]=$o.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,i=n.elements,s=this.elements,r=e[0],a=e[4],l=e[8],c=e[12],h=e[1],f=e[5],u=e[9],d=e[13],m=e[2],_=e[6],x=e[10],p=e[14],M=e[3],v=e[7],w=e[11],P=e[15],R=i[0],E=i[4],I=i[8],S=i[12],y=i[1],D=i[5],G=i[9],V=i[13],J=i[2],$=i[6],X=i[10],Q=i[14],Y=i[3],at=i[7],ct=i[11],ht=i[15];return s[0]=r*R+a*y+l*J+c*Y,s[4]=r*E+a*D+l*$+c*at,s[8]=r*I+a*G+l*X+c*ct,s[12]=r*S+a*V+l*Q+c*ht,s[1]=h*R+f*y+u*J+d*Y,s[5]=h*E+f*D+u*$+d*at,s[9]=h*I+f*G+u*X+d*ct,s[13]=h*S+f*V+u*Q+d*ht,s[2]=m*R+_*y+x*J+p*Y,s[6]=m*E+_*D+x*$+p*at,s[10]=m*I+_*G+x*X+p*ct,s[14]=m*S+_*V+x*Q+p*ht,s[3]=M*R+v*y+w*J+P*Y,s[7]=M*E+v*D+w*$+P*at,s[11]=M*I+v*G+w*X+P*ct,s[15]=M*S+v*V+w*Q+P*ht,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],x=t[11],p=t[15];return m*(+s*l*f-i*c*f-s*a*u+e*c*u+i*a*d-e*l*d)+_*(+n*l*d-n*c*u+s*r*u-i*r*d+i*c*h-s*l*h)+x*(+n*c*f-n*a*d-s*r*f+e*r*d+s*a*h-e*c*h)+p*(-i*a*h-n*l*f+n*a*u+i*r*f-e*r*u+e*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,e){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=n,i[14]=e),this}invert(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],x=t[14],p=t[15],M=f*x*c-_*u*c+_*l*d-a*x*d-f*l*p+a*u*p,v=m*u*c-h*x*c-m*l*d+r*x*d+h*l*p-r*u*p,w=h*_*c-m*f*c+m*a*d-r*_*d-h*a*p+r*f*p,P=m*f*l-h*_*l-m*a*u+r*_*u+h*a*x-r*f*x,R=n*M+e*v+i*w+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=M*E,t[1]=(_*u*s-f*x*s-_*i*d+e*x*d+f*i*p-e*u*p)*E,t[2]=(a*x*s-_*l*s+_*i*c-e*x*c-a*i*p+e*l*p)*E,t[3]=(f*l*s-a*u*s-f*i*c+e*u*c+a*i*d-e*l*d)*E,t[4]=v*E,t[5]=(h*x*s-m*u*s+m*i*d-n*x*d-h*i*p+n*u*p)*E,t[6]=(m*l*s-r*x*s-m*i*c+n*x*c+r*i*p-n*l*p)*E,t[7]=(r*u*s-h*l*s+h*i*c-n*u*c-r*i*d+n*l*d)*E,t[8]=w*E,t[9]=(m*f*s-h*_*s-m*e*d+n*_*d+h*e*p-n*f*p)*E,t[10]=(r*_*s-m*a*s+m*e*c-n*_*c-r*e*p+n*a*p)*E,t[11]=(h*a*s-r*f*s-h*e*c+n*f*c+r*e*d-n*a*d)*E,t[12]=P*E,t[13]=(h*_*i-m*f*i+m*e*u-n*_*u-h*e*x+n*f*x)*E,t[14]=(m*a*i-r*_*i-m*e*l+n*_*l+r*e*x-n*a*x)*E,t[15]=(r*f*i-h*a*i+h*e*l-n*f*l-r*e*u+n*a*u)*E,this}scale(t){const n=this.elements,e=t.x,i=t.y,s=t.z;return n[0]*=e,n[4]*=i,n[8]*=s,n[1]*=e,n[5]*=i,n[9]*=s,n[2]*=e,n[6]*=i,n[10]*=s,n[3]*=e,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,e,i))}makeTranslation(t,n,e){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,e,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),e=Math.sin(t);return this.set(1,0,0,0,0,n,-e,0,0,e,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,0,e,0,0,1,0,0,-e,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,0,e,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const e=Math.cos(n),i=Math.sin(n),s=1-e,r=t.x,a=t.y,l=t.z,c=s*r,h=s*a;return this.set(c*r+e,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+e,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+e,0,0,0,0,1),this}makeScale(t,n,e){return this.set(t,0,0,0,0,n,0,0,0,0,e,0,0,0,0,1),this}makeShear(t,n,e,i,s,r){return this.set(1,e,s,0,t,1,r,0,n,i,1,0,0,0,0,1),this}compose(t,n,e){const i=this.elements,s=n._x,r=n._y,a=n._z,l=n._w,c=s+s,h=r+r,f=a+a,u=s*c,d=s*h,m=s*f,_=r*h,x=r*f,p=a*f,M=l*c,v=l*h,w=l*f,P=e.x,R=e.y,E=e.z;return i[0]=(1-(_+p))*P,i[1]=(d+w)*P,i[2]=(m-v)*P,i[3]=0,i[4]=(d-w)*R,i[5]=(1-(u+p))*R,i[6]=(x+M)*R,i[7]=0,i[8]=(m+v)*E,i[9]=(x-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,n,e){const i=this.elements;let s=Fi.set(i[0],i[1],i[2]).length();const r=Fi.set(i[4],i[5],i[6]).length(),a=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],An.copy(this);const c=1/s,h=1/r,f=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,n.setFromRotationMatrix(An),e.x=s,e.y=r,e.z=a,this}makePerspective(t,n,e,i,s,r,a=Kn){const l=this.elements,c=2*s/(n-t),h=2*s/(e-i),f=(n+t)/(n-t),u=(e+i)/(e-i);let d,m;if(a===Kn)d=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===Es)d=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,e,i,s,r,a=Kn){const l=this.elements,c=1/(n-t),h=1/(e-i),f=1/(r-s),u=(n+t)*c,d=(e+i)*h;let m,_;if(a===Kn)m=(r+s)*f,_=-2*f;else if(a===Es)m=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,e=t.elements;for(let i=0;i<16;i++)if(n[i]!==e[i])return!1;return!0}fromArray(t,n=0){for(let e=0;e<16;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t[n+9]=e[9],t[n+10]=e[10],t[n+11]=e[11],t[n+12]=e[12],t[n+13]=e[13],t[n+14]=e[14],t[n+15]=e[15],t}}const Fi=new N,An=new Ie,sd=new N(0,0,0),rd=new N(1,1,1),si=new N,$o=new N,_n=new N,ml=new Ie,gl=new co;class Un{constructor(t=0,n=0,e=0,i=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=e,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,e,i=this._order){return this._x=t,this._y=n,this._z=e,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,e=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(n){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,e===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,e){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,n,e)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ad=0;const xl=new N,Oi=new co,Xn=new Ie,Ko=new N,go=new N,ld=new N,cd=new co,_l=new N(1,0,0),wl=new N(0,1,0),vl=new N(0,0,1),yl={type:"added"},fd={type:"removed"},ki={type:"childadded",child:null},js={type:"childremoved",child:null};class Ke extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new N,n=new Un,e=new co,i=new N(1,1,1);function s(){e.setFromEuler(n,!1)}function r(){n.setFromQuaternion(e,void 0,!1)}n._onChange(s),e._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new he}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Oi.setFromAxisAngle(t,n),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,n){return Oi.setFromAxisAngle(t,n),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,n){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,n,e){t.isVector3?Ko.copy(t):Ko.set(t,n,e);const i=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(go,Ko,this.up):Xn.lookAt(Ko,go,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yl),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(fd),js.child=t,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yl),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let e=0,i=this.children.length;e<i;e++){const r=this.children[e].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,e=[]){this[t]===n&&e.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,n,e);return e}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].updateMatrixWorld(t)}updateWorldMatrix(t,n){const e=this.parent;if(t===!0&&e!==null&&e.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",e={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(n){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(e.geometries=a),l.length>0&&(e.materials=l),c.length>0&&(e.textures=c),h.length>0&&(e.images=h),f.length>0&&(e.shapes=f),u.length>0&&(e.skeletons=u),d.length>0&&(e.animations=d),m.length>0&&(e.nodes=m)}return e.object=i,e;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let e=0;e<t.children.length;e++){const i=t.children[e];this.add(i.clone())}return this}}Ke.DEFAULT_UP=new N(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new N,Yn=new N,Qs=new N,Zn=new N,Bi=new N,Gi=new N,Ml=new N,tr=new N,er=new N,nr=new N,ir=new Te,or=new Te,sr=new Te;class Cn{constructor(t=new N,n=new N,e=new N){this.a=t,this.b=n,this.c=e}static getNormal(t,n,e,i){i.subVectors(e,n),Rn.subVectors(t,n),i.cross(Rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,n,e,i,s){Rn.subVectors(i,n),Yn.subVectors(e,n),Qs.subVectors(t,n);const r=Rn.dot(Rn),a=Rn.dot(Yn),l=Rn.dot(Qs),c=Yn.dot(Yn),h=Yn.dot(Qs),f=r*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(r*h-a*l)*u;return s.set(1-d-m,m,d)}static containsPoint(t,n,e,i){return this.getBarycoord(t,n,e,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,n,e,i,s,r,a,l){return this.getBarycoord(t,n,e,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(r,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,n,e,i,s,r){return ir.setScalar(0),or.setScalar(0),sr.setScalar(0),ir.fromBufferAttribute(t,n),or.fromBufferAttribute(t,e),sr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ir,s.x),r.addScaledVector(or,s.y),r.addScaledVector(sr,s.z),r}static isFrontFacing(t,n,e,i){return Rn.subVectors(e,n),Yn.subVectors(t,n),Rn.cross(Yn).dot(i)<0}set(t,n,e){return this.a.copy(t),this.b.copy(n),this.c.copy(e),this}setFromPointsAndIndices(t,n,e,i){return this.a.copy(t[n]),this.b.copy(t[e]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,n,e,i){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,e),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Rn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Cn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,e,i,s){return Cn.getInterpolation(t,this.a,this.b,this.c,n,e,i,s)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const e=this.a,i=this.b,s=this.c;let r,a;Bi.subVectors(i,e),Gi.subVectors(s,e),tr.subVectors(t,e);const l=Bi.dot(tr),c=Gi.dot(tr);if(l<=0&&c<=0)return n.copy(e);er.subVectors(t,i);const h=Bi.dot(er),f=Gi.dot(er);if(h>=0&&f<=h)return n.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(e).addScaledVector(Bi,r);nr.subVectors(t,s);const d=Bi.dot(nr),m=Gi.dot(nr);if(m>=0&&d<=m)return n.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(e).addScaledVector(Gi,a);const x=h*m-d*f;if(x<=0&&f-h>=0&&d-m>=0)return Ml.subVectors(s,i),a=(f-h)/(f-h+(d-m)),n.copy(i).addScaledVector(Ml,a);const p=1/(x+_+u);return r=_*p,a=u*p,n.copy(e).addScaledVector(Bi,r).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function rr(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class me{constructor(t,n,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,e)}set(t,n,e){if(n===void 0&&e===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,n,e);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,n),this}setRGB(t,n,e,i=we.workingColorSpace){return this.r=t,this.g=n,this.b=e,we.toWorkingColorSpace(this,i),this}setHSL(t,n,e,i=we.workingColorSpace){if(t=Ma(t,1),n=Je(n,0,1),e=Je(e,0,1),n===0)this.r=this.g=this.b=e;else{const s=e<=.5?e*(1+n):e+n-e*n,r=2*e-s;this.r=rr(r,s,t+1/3),this.g=rr(r,s,t),this.b=rr(r,s,t-1/3)}return we.toWorkingColorSpace(this,i),this}setStyle(t,n=de){function e(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=de){const e=of[t.toLowerCase()];return e!==void 0?this.setHex(e,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return we.fromWorkingColorSpace(en.copy(this),t),Math.round(Je(en.r*255,0,255))*65536+Math.round(Je(en.g*255,0,255))*256+Math.round(Je(en.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.fromWorkingColorSpace(en.copy(this),n);const e=en.r,i=en.g,s=en.b,r=Math.max(e,i,s),a=Math.min(e,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case e:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-e)/f+2;break;case s:l=(e-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=we.workingColorSpace){return we.fromWorkingColorSpace(en.copy(this),n),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=de){we.fromWorkingColorSpace(en.copy(this),t);const n=en.r,e=en.g,i=en.b;return t!==de?`color(${t} ${n.toFixed(3)} ${e.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(e*255)},${Math.round(i*255)})`}offsetHSL(t,n,e){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+n,ri.l+e)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,e){return this.r=t.r+(n.r-t.r)*e,this.g=t.g+(n.g-t.g)*e,this.b=t.b+(n.b-t.b)*e,this}lerpHSL(t,n){this.getHSL(ri),t.getHSL(Jo);const e=To(ri.h,Jo.h,n),i=To(ri.s,Jo.s,n),s=To(ri.l,Jo.l,n);return this.setHSL(e,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,e=this.g,i=this.b,s=t.elements;return this.r=s[0]*n+s[3]*e+s[6]*i,this.g=s[1]*n+s[4]*e+s[7]*i,this.b=s[2]*n+s[5]*e+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new me;me.NAMES=of;let hd=0;class fo extends lo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Pi(),this.name="",this.blending=Ki,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Ar,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const e=t[n];if(e===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(e):i&&i.isVector3&&e&&e.isVector3?i.copy(e):this[n]=e}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const e={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(e.dispersion=this.dispersion),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(t).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(t).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(t).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(t).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(t).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapRotation!==void 0&&(e.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(e.blending=this.blending),this.side!==hi&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==Er&&(e.blendSrc=this.blendSrc),this.blendDst!==Ar&&(e.blendDst=this.blendDst),this.blendEquation!==Si&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(e.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(n){const s=i(t.textures),r=i(t.images);s.length>0&&(e.textures=s),r.length>0&&(e.images=r)}return e}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let e=null;if(n!==null){const i=n.length;e=new Array(i);for(let s=0;s!==i;++s)e[s]=n[s].clone()}return this.clippingPlanes=e,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $t extends fo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new N,jo=new Bt;class Ln{constructor(t,n,e=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=e,this.usage=sl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,e){t*=this.itemSize,e*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=n.array[e+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,e=this.count;n<e;n++)jo.fromBufferAttribute(this,n),jo.applyMatrix3(t),this.setXY(n,jo.x,jo.y);else if(this.itemSize===3)for(let n=0,e=this.count;n<e;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,e=this.count;n<e;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,e=this.count;n<e;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,e=this.count;n<e;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let e=this.array[t*this.itemSize+n];return this.normalized&&(e=Zi(e,this.array)),e}setComponent(t,n,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+n]=e,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Zi(n,this.array)),n}setX(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Zi(n,this.array)),n}setY(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Zi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Zi(n,this.array)),n}setW(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,e){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),e=an(e,this.array)),this.array[t+0]=n,this.array[t+1]=e,this}setXYZ(t,n,e,i){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),e=an(e,this.array),i=an(i,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=i,this}setXYZW(t,n,e,i,s){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),e=an(e,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sl&&(t.usage=this.usage),t}}class sf extends Ln{constructor(t,n,e){super(new Uint16Array(t),n,e)}}class rf extends Ln{constructor(t,n,e){super(new Uint32Array(t),n,e)}}class Pe extends Ln{constructor(t,n,e){super(new Float32Array(t),n,e)}}let dd=0;const Tn=new Ie,ar=new Ke,Hi=new N,wn=new ko,xo=new ko,$e=new N;class on extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?rf:sf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,e=0){this.groups.push({start:t,count:n,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const e=this.attributes.normal;if(e!==void 0){const s=new he().getNormalMatrix(t);e.applyNormalMatrix(s),e.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,n,e){return Tn.makeTranslation(t,n,e),this.applyMatrix4(Tn),this}scale(t,n,e){return Tn.makeScale(t,n,e),this.applyMatrix4(Tn),this}lookAt(t){return ar.lookAt(t),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Pe(e,3))}else{for(let e=0,i=n.count;e<i;e++){const s=t[e];n.setXYZ(e,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,i=n.length;e<i;e++){const s=n[e];wn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const e=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const a=n[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(wn.min,xo.min),wn.expandByPoint($e),$e.addVectors(wn.max,xo.max),wn.expandByPoint($e)):(wn.expandByPoint(xo.min),wn.expandByPoint(xo.max))}wn.getCenter(e);let i=0;for(let s=0,r=t.count;s<r;s++)$e.fromBufferAttribute(t,s),i=Math.max(i,e.distanceToSquared($e));if(n)for(let s=0,r=n.length;s<r;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(t,c),$e.add(Hi)),i=Math.max(i,e.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const e=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*e.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<e.count;I++)a[I]=new N,l[I]=new N;const c=new N,h=new N,f=new N,u=new Bt,d=new Bt,m=new Bt,_=new N,x=new N;function p(I,S,y){c.fromBufferAttribute(e,I),h.fromBufferAttribute(e,S),f.fromBufferAttribute(e,y),u.fromBufferAttribute(s,I),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,y),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(D),x.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(D),a[I].add(_),a[S].add(_),a[y].add(_),l[I].add(x),l[S].add(x),l[y].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,S=M.length;I<S;++I){const y=M[I],D=y.start,G=y.count;for(let V=D,J=D+G;V<J;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const v=new N,w=new N,P=new N,R=new N;function E(I){P.fromBufferAttribute(i,I),R.copy(P);const S=a[I];v.copy(S),v.sub(P.multiplyScalar(P.dot(S))).normalize(),w.crossVectors(R,S);const D=w.dot(l[I])<0?-1:1;r.setXYZW(I,v.x,v.y,v.z,D)}for(let I=0,S=M.length;I<S;++I){const y=M[I],D=y.start,G=y.count;for(let V=D,J=D+G;V<J;V+=3)E(t.getX(V+0)),E(t.getX(V+1)),E(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let e=this.getAttribute("normal");if(e===void 0)e=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",e);else for(let u=0,d=e.count;u<d;u++)e.setXYZ(u,0,0,0);const i=new N,s=new N,r=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),x=t.getX(u+2);i.fromBufferAttribute(n,m),s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),h.subVectors(r,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(e,m),l.fromBufferAttribute(e,_),c.fromBufferAttribute(e,x),a.add(h),l.add(h),c.add(h),e.setXYZ(m,a.x,a.y,a.z),e.setXYZ(_,l.x,l.y,l.z),e.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)i.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),f.subVectors(i,s),h.cross(f),e.setXYZ(u+0,h.x,h.y,h.z),e.setXYZ(u+1,h.x,h.y,h.z),e.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,e=t.count;n<e;n++)$e.fromBufferAttribute(t,n),$e.normalize(),t.setXYZ(n,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Ln(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new on,e=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,e);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,e);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const e=this.attributes;for(const l in e){const c=e[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const e=t.index;e!==null&&this.setIndex(e.clone(n));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(n))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new Ie,xi=new ef,Qo=new Ls,bl=new N,ts=new N,es=new N,ns=new N,lr=new N,is=new N,Tl=new N,os=new N;class g extends Ke{constructor(t=new on,n=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const i=n[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const e=this.geometry,i=e.attributes.position,s=e.morphAttributes.position,r=e.morphTargetsRelative;n.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(lr.fromBufferAttribute(f,t),r?is.addScaledVector(lr,h):is.addScaledVector(lr.sub(n),h))}n.add(is)}return n}raycast(t,n){const e=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),Qo.copy(e.boundingSphere),Qo.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(Qo.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Qo,bl)===null||xi.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(Sl.copy(s).invert(),xi.copy(t.ray).applyMatrix4(Sl),!(e.boundingBox!==null&&xi.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(t,n,xi)))}_computeIntersections(t,n,e){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const x=u[m],p=r[x.materialIndex],M=Math.max(x.start,d.start),v=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let w=M,P=v;w<P;w+=3){const R=a.getX(w),E=a.getX(w+1),I=a.getX(w+2);i=ss(this,p,t,e,c,h,f,R,E,I),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,n.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){const M=a.getX(x),v=a.getX(x+1),w=a.getX(x+2);i=ss(this,r,t,e,c,h,f,M,v,w),i&&(i.faceIndex=Math.floor(x/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const x=u[m],p=r[x.materialIndex],M=Math.max(x.start,d.start),v=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let w=M,P=v;w<P;w+=3){const R=w,E=w+1,I=w+2;i=ss(this,p,t,e,c,h,f,R,E,I),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,n.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){const M=x,v=x+1,w=x+2;i=ss(this,r,t,e,c,h,f,M,v,w),i&&(i.faceIndex=Math.floor(x/3),n.push(i))}}}}function ud(o,t,n,e,i,s,r,a){let l;if(t.side===hn?l=e.intersectTriangle(r,s,i,!0,a):l=e.intersectTriangle(i,s,r,t.side===hi,a),l===null)return null;os.copy(a),os.applyMatrix4(o.matrixWorld);const c=n.ray.origin.distanceTo(os);return c<n.near||c>n.far?null:{distance:c,point:os.clone(),object:o}}function ss(o,t,n,e,i,s,r,a,l,c){o.getVertexPosition(a,ts),o.getVertexPosition(l,es),o.getVertexPosition(c,ns);const h=ud(o,t,n,e,ts,es,ns,Tl);if(h){const f=new N;Cn.getBarycoord(Tl,ts,es,ns,f),i&&(h.uv=Cn.getInterpolatedAttribute(i,a,l,c,f,new Bt)),s&&(h.uv1=Cn.getInterpolatedAttribute(s,a,l,c,f,new Bt)),r&&(h.normal=Cn.getInterpolatedAttribute(r,a,l,c,f,new N),h.normal.dot(e.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};Cn.getNormal(ts,es,ns,u.normal),h.face=u,h.barycoord=f}return h}class C extends on{constructor(t=1,n=1,e=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:e,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,e,n,t,r,s,0),m("z","y","x",1,-1,e,n,-t,r,s,1),m("x","z","y",1,1,t,e,n,i,r,2),m("x","z","y",1,-1,t,e,-n,i,r,3),m("x","y","z",1,-1,t,n,e,i,s,4),m("x","y","z",-1,-1,t,n,-e,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(f,2));function m(_,x,p,M,v,w,P,R,E,I,S){const y=w/E,D=P/I,G=w/2,V=P/2,J=R/2,$=E+1,X=I+1;let Q=0,Y=0;const at=new N;for(let ct=0;ct<X;ct++){const ht=ct*D-V;for(let wt=0;wt<$;wt++){const vt=wt*y-G;at[_]=vt*M,at[x]=ht*v,at[p]=J,c.push(at.x,at.y,at.z),at[_]=0,at[x]=0,at[p]=R>0?1:-1,h.push(at.x,at.y,at.z),f.push(wt/E),f.push(1-ct/I),Q+=1}}for(let ct=0;ct<I;ct++)for(let ht=0;ht<E;ht++){const wt=u+ht+$*ct,vt=u+ht+$*(ct+1),H=u+(ht+1)+$*(ct+1),z=u+(ht+1)+$*ct;l.push(wt,vt,z),l.push(vt,H,z),Y+=6}a.addGroup(d,Y,S),d+=Y,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new C(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function so(o){const t={};for(const n in o){t[n]={};for(const e in o[n]){const i=o[n][e];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][e]=null):t[n][e]=i.clone():Array.isArray(i)?t[n][e]=i.slice():t[n][e]=i}}return t}function ln(o){const t={};for(let n=0;n<o.length;n++){const e=so(o[n]);for(const i in e)t[i]=e[i]}return t}function pd(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function af(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const md={clone:so,merge:ln};var gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends fo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?n.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[i]={type:"m4",value:r.toArray()}:n.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const e={};for(const i in this.extensions)this.extensions[i]===!0&&(e[i]=!0);return Object.keys(e).length>0&&(n.extensions=e),n}}class lf extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Kn}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new N,El=new Bt,Al=new Bt;class yn extends lf{constructor(t=50,n=1,e=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=e,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Lo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,e){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,n){return this.getViewBounds(t,El,Al),n.subVectors(Al,El)}setViewOffset(t,n,e,i,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(bo*.5*this.fov)/this.zoom,e=2*n,i=this.aspect*e,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,n-=r.offsetY*e/c,i*=r.width/l,e*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-e,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vi=-90,Wi=1;class _d extends Ke{constructor(t,n,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(Vi,Wi,t,n);i.layers=this.layers,this.add(i);const s=new yn(Vi,Wi,t,n);s.layers=this.layers,this.add(s);const r=new yn(Vi,Wi,t,n);r.layers=this.layers,this.add(r);const a=new yn(Vi,Wi,t,n);a.layers=this.layers,this.add(a);const l=new yn(Vi,Wi,t,n);l.layers=this.layers,this.add(l);const c=new yn(Vi,Wi,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[e,i,s,r,a,l]=n;for(const c of n)this.remove(c);if(t===Kn)e.up.set(0,1,0),e.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)e.up.set(0,-1,0),e.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:e,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=e.texture.generateMipmaps;e.texture.generateMipmaps=!1,t.setRenderTarget(e,0,i),t.render(n,s),t.setRenderTarget(e,1,i),t.render(n,r),t.setRenderTarget(e,2,i),t.render(n,a),t.setRenderTarget(e,3,i),t.render(n,l),t.setRenderTarget(e,4,i),t.render(n,c),e.texture.generateMipmaps=_,t.setRenderTarget(e,5,i),t.render(n,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,e.texture.needsPMREMUpdate=!0}}class cf extends cn{constructor(t,n,e,i,s,r,a,l,c,h){t=t!==void 0?t:[],n=n!==void 0?n:eo,super(t,n,e,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wd extends Ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const e={width:t,height:t,depth:1},i=[e,e,e,e,e,e];this.texture=new cf(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const e={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new C(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:so(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:hn,blending:ci});s.uniforms.tEquirect.value=n;const r=new g(i,s),a=n.minFilter;return n.minFilter===Ei&&(n.minFilter=kn),new _d(1,10,this).update(t,r),n.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,e,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,e,i);t.setRenderTarget(s)}}const cr=new N,vd=new N,yd=new he;class yi{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,e,i){return this.normal.set(t,n,e),this.constant=i,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,e){const i=cr.subVectors(e,n).cross(vd.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const e=t.delta(cr),i=this.normal.dot(e);if(i===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(t.start).addScaledVector(e,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),e=this.distanceToPoint(t.end);return n<0&&e>0||e<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const e=n||yd.getNormalMatrix(t),i=this.coplanarPoint(cr).applyMatrix4(t),s=this.normal.applyMatrix3(e).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Ls,rs=new N;class Sa{constructor(t=new yi,n=new yi,e=new yi,i=new yi,s=new yi,r=new yi){this.planes=[t,n,e,i,s,r]}set(t,n,e,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(e),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const n=this.planes;for(let e=0;e<6;e++)n[e].copy(t.planes[e]);return this}setFromProjectionMatrix(t,n=Kn){const e=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],m=i[9],_=i[10],x=i[11],p=i[12],M=i[13],v=i[14],w=i[15];if(e[0].setComponents(l-s,u-c,x-d,w-p).normalize(),e[1].setComponents(l+s,u+c,x+d,w+p).normalize(),e[2].setComponents(l+r,u+h,x+m,w+M).normalize(),e[3].setComponents(l-r,u-h,x-m,w-M).normalize(),e[4].setComponents(l-a,u-f,x-_,w-v).normalize(),n===Kn)e[5].setComponents(l+a,u+f,x+_,w+v).normalize();else if(n===Es)e[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_i.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const n=this.planes,e=t.center,i=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<i)return!1;return!0}intersectsBox(t){const n=this.planes;for(let e=0;e<6;e++){const i=n[e];if(rs.x=i.normal.x>0?t.max.x:t.min.x,rs.y=i.normal.y>0?t.max.y:t.min.y,rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let e=0;e<6;e++)if(n[e].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ff(){let o=null,t=!1,n=null,e=null;function i(s,r){n(s,r),e=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(e=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(e),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){o=s}}}function Md(o){const t=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=o.createBuffer();o.bindBuffer(l,u),o.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=o.HALF_FLOAT:d=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=o.SHORT;else if(c instanceof Uint32Array)d=o.UNSIGNED_INT;else if(c instanceof Int32Array)d=o.INT;else if(c instanceof Int8Array)d=o.BYTE;else if(c instanceof Uint8Array)d=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function e(a,l,c){const h=l.array,f=l.updateRanges;if(o.bindBuffer(c,a),f.length===0)o.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];o.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");e(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class Kt extends on{constructor(t=1,n=1,e=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:e,heightSegments:i};const s=t/2,r=n/2,a=Math.floor(e),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=n/l,d=[],m=[],_=[],x=[];for(let p=0;p<h;p++){const M=p*u-r;for(let v=0;v<c;v++){const w=v*f-s;m.push(w,-M,0),_.push(0,0,1),x.push(v/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,w=M+c*(p+1),P=M+1+c*(p+1),R=M+1+c*p;d.push(v,w,R),d.push(w,P,R)}this.setIndex(d),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
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
#endif`,Ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Fd=`#ifdef USE_BUMPMAP
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fu=`#ifdef USE_GRADIENTMAP
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
}`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vu=`PhysicalMaterial material;
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
#endif`,yu=`struct PhysicalMaterial {
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
}`,Mu=`
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
#endif`,Su=`#if defined( RE_IndirectDiffuse )
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lu=`#if defined( USE_POINTS_UV )
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
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`#ifdef USE_MORPHTARGETS
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
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,Yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a0=`float getShadowMask() {
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
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`#include <common>
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
}`,C0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,N0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,B0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,V0=`#define NORMAL
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
}`,W0=`#define PHONG
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
}`,X0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,$0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Q0=`uniform vec3 color;
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
}`,tp=`uniform float rotation;
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
}`,ep=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Sd,alphahash_pars_fragment:bd,alphamap_fragment:Td,alphamap_pars_fragment:Ed,alphatest_fragment:Ad,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Pd,batching_pars_vertex:Id,batching_vertex:Ld,begin_vertex:Dd,beginnormal_vertex:Ud,bsdfs:Nd,iridescence_fragment:zd,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:Gd,color_fragment:Hd,color_pars_fragment:Vd,color_pars_vertex:Wd,color_vertex:Xd,common:Yd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:qd,displacementmap_pars_vertex:$d,displacementmap_vertex:Kd,emissivemap_fragment:Jd,emissivemap_pars_fragment:jd,colorspace_fragment:Qd,colorspace_pars_fragment:tu,envmap_fragment:eu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:ou,envmap_physical_pars_fragment:mu,envmap_vertex:su,fog_vertex:ru,fog_pars_vertex:au,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:fu,lightmap_pars_fragment:hu,lights_lambert_fragment:du,lights_lambert_pars_fragment:uu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:xu,lights_phong_fragment:_u,lights_phong_pars_fragment:wu,lights_physical_fragment:vu,lights_physical_pars_fragment:yu,lights_fragment_begin:Mu,lights_fragment_maps:Su,lights_fragment_end:bu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Eu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Ru,map_fragment:Cu,map_pars_fragment:Pu,map_particle_fragment:Iu,map_particle_pars_fragment:Lu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Uu,morphinstance_vertex:Nu,morphcolor_vertex:zu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Ou,morphtarget_vertex:ku,normal_fragment_begin:Bu,normal_fragment_maps:Gu,normal_pars_fragment:Hu,normal_pars_vertex:Vu,normal_vertex:Wu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:Yu,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:qu,iridescence_pars_fragment:$u,opaque_fragment:Ku,packing:Ju,premultiplied_alpha_fragment:ju,project_vertex:Qu,dithering_fragment:t0,dithering_pars_fragment:e0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:a0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:f0,skinnormal_vertex:h0,specularmap_fragment:d0,specularmap_pars_fragment:u0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:x0,uv_pars_fragment:_0,uv_pars_vertex:w0,uv_vertex:v0,worldpos_vertex:y0,background_vert:M0,background_frag:S0,backgroundCube_vert:b0,backgroundCube_frag:T0,cube_vert:E0,cube_frag:A0,depth_vert:R0,depth_frag:C0,distanceRGBA_vert:P0,distanceRGBA_frag:I0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:U0,linedashed_frag:N0,meshbasic_vert:z0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:k0,meshmatcap_vert:B0,meshmatcap_frag:G0,meshnormal_vert:H0,meshnormal_frag:V0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:Y0,meshphysical_frag:Z0,meshtoon_vert:q0,meshtoon_frag:$0,points_vert:K0,points_frag:J0,shadow_vert:j0,shadow_frag:Q0,sprite_vert:tp,sprite_frag:ep},Ct={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},On={basic:{uniforms:ln([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:ln([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new me(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:ln([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:ln([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:ln([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new me(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:ln([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:ln([Ct.points,Ct.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:ln([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:ln([Ct.common,Ct.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:ln([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:ln([Ct.sprite,Ct.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:ln([Ct.common,Ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:ln([Ct.lights,Ct.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};On.physical={uniforms:ln([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const as={r:0,b:0,g:0},wi=new Un,np=new Ie;function ip(o,t,n,e,i,s,r){const a=new me(0);let l=s===!0?0:1,c,h,f=null,u=0,d=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?n:t).get(v)),v}function _(M){let v=!1;const w=m(M);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(o.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(M,v){const w=m(v);w&&(w.isCubeTexture||w.mapping===Ps)?(h===void 0&&(h=new g(new C(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:so(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),wi.copy(v.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(np.makeRotationFromEuler(wi)),h.material.toneMapped=we.getTransfer(w.colorSpace)!==Se,(f!==w||u!==w.version||d!==o.toneMapping)&&(h.material.needsUpdate=!0,f=w,u=w.version,d=o.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new g(new Kt(2,2),new di({name:"BackgroundMaterial",uniforms:so(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=we.getTransfer(w.colorSpace)!==Se,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||u!==w.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,f=w,u=w.version,d=o.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(as,af(o)),e.buffers.color.setClear(as.r,as.g,as.b,v,r)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:x}}function op(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),e={},i=u(null);let s=i,r=!1;function a(y,D,G,V,J){let $=!1;const X=f(V,G,D);s!==X&&(s=X,c(s.object)),$=d(y,V,G,J),$&&m(y,V,G,J),J!==null&&t.update(J,o.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,w(y,D,G,V),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return o.createVertexArray()}function c(y){return o.bindVertexArray(y)}function h(y){return o.deleteVertexArray(y)}function f(y,D,G){const V=G.wireframe===!0;let J=e[y.id];J===void 0&&(J={},e[y.id]=J);let $=J[D.id];$===void 0&&($={},J[D.id]=$);let X=$[V];return X===void 0&&(X=u(l()),$[V]=X),X}function u(y){const D=[],G=[],V=[];for(let J=0;J<n;J++)D[J]=0,G[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:V,object:y,attributes:{},index:null}}function d(y,D,G,V){const J=s.attributes,$=D.attributes;let X=0;const Q=G.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const ct=J[Y];let ht=$[Y];if(ht===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ct===void 0||ct.attribute!==ht||ht&&ct.data!==ht.data)return!0;X++}return s.attributesNum!==X||s.index!==V}function m(y,D,G,V){const J={},$=D.attributes;let X=0;const Q=G.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let ct=$[Y];ct===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor));const ht={};ht.attribute=ct,ct&&ct.data&&(ht.data=ct.data),J[Y]=ht,X++}s.attributes=J,s.attributesNum=X,s.index=V}function _(){const y=s.newAttributes;for(let D=0,G=y.length;D<G;D++)y[D]=0}function x(y){p(y,0)}function p(y,D){const G=s.newAttributes,V=s.enabledAttributes,J=s.attributeDivisors;G[y]=1,V[y]===0&&(o.enableVertexAttribArray(y),V[y]=1),J[y]!==D&&(o.vertexAttribDivisor(y,D),J[y]=D)}function M(){const y=s.newAttributes,D=s.enabledAttributes;for(let G=0,V=D.length;G<V;G++)D[G]!==y[G]&&(o.disableVertexAttribArray(G),D[G]=0)}function v(y,D,G,V,J,$,X){X===!0?o.vertexAttribIPointer(y,D,G,J,$):o.vertexAttribPointer(y,D,G,V,J,$)}function w(y,D,G,V){_();const J=V.attributes,$=G.getAttributes(),X=D.defaultAttributeValues;for(const Q in $){const Y=$[Q];if(Y.location>=0){let at=J[Q];if(at===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const ct=at.normalized,ht=at.itemSize,wt=t.get(at);if(wt===void 0)continue;const vt=wt.buffer,H=wt.type,z=wt.bytesPerElement,B=H===o.INT||H===o.UNSIGNED_INT||at.gpuType===ga;if(at.isInterleavedBufferAttribute){const it=at.data,dt=it.stride,Rt=at.offset;if(it.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Y.locationSize;Ut++)p(Y.location+Ut,it.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ut=0;Ut<Y.locationSize;Ut++)x(Y.location+Ut);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Ut=0;Ut<Y.locationSize;Ut++)v(Y.location+Ut,ht/Y.locationSize,H,ct,dt*z,(Rt+ht/Y.locationSize*Ut)*z,B)}else{if(at.isInstancedBufferAttribute){for(let it=0;it<Y.locationSize;it++)p(Y.location+it,at.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let it=0;it<Y.locationSize;it++)x(Y.location+it);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let it=0;it<Y.locationSize;it++)v(Y.location+it,ht/Y.locationSize,H,ct,ht*z,ht/Y.locationSize*it*z,B)}}else if(X!==void 0){const ct=X[Q];if(ct!==void 0)switch(ct.length){case 2:o.vertexAttrib2fv(Y.location,ct);break;case 3:o.vertexAttrib3fv(Y.location,ct);break;case 4:o.vertexAttrib4fv(Y.location,ct);break;default:o.vertexAttrib1fv(Y.location,ct)}}}}M()}function P(){I();for(const y in e){const D=e[y];for(const G in D){const V=D[G];for(const J in V)h(V[J].object),delete V[J];delete D[G]}delete e[y]}}function R(y){if(e[y.id]===void 0)return;const D=e[y.id];for(const G in D){const V=D[G];for(const J in V)h(V[J].object),delete V[J];delete D[G]}delete e[y.id]}function E(y){for(const D in e){const G=e[D];if(G[y.id]===void 0)continue;const V=G[y.id];for(const J in V)h(V[J].object),delete V[J];delete G[y.id]}}function I(){S(),r=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:x,disableUnusedAttributes:M}}function sp(o,t,n){let e;function i(c){e=c}function s(c,h){o.drawArrays(e,c,h),n.update(h,e,1)}function r(c,h,f){f!==0&&(o.drawArraysInstanced(e,c,h,f),n.update(h,e,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(e,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];n.update(d,e,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)r(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(e,c,0,h,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_]*u[_];n.update(m,e,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rp(o,t,n,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){return!(E!==Pn&&e.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const I=E===Oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Qn&&e.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$n&&!I)}function l(E){if(E==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),M=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,R=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:P,maxSamples:R}}function ap(o){const t=this;let n=null,e=0,i=!1,s=!1;const r=new yi,a=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||e!==0||i;return i=u,e=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,p=o.get(f);if(!i||m===null||m.length===0||s&&!x)s?h(null):c();else{const M=s?0:e,v=M*4;let w=p.clippingState||null;l.value=w,w=h(m,u,v,d);for(let P=0;P!==v;++P)w[P]=n[P];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=e>0),t.numPlanes=e,t.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let x=null;if(_!==0){if(x=l.value,m!==!0||x===null){const p=d+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<p)&&(x=new Float32Array(p));for(let v=0,w=d;v!==_;++v,w+=4)r.copy(f[v]).applyMatrix4(M,a),r.normal.toArray(x,w),x[w+3]=r.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}function lp(o){let t=new WeakMap;function n(r,a){return a===Nr?r.mapping=eo:a===zr&&(r.mapping=no),r}function e(r){if(r&&r.isTexture){const a=r.mapping;if(a===Nr||a===zr)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new wd(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),n(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:e,dispose:s}}class hf extends lf{constructor(t=-1,n=1,e=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=e,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,e,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=e-t,r=e+t,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qi=4,Rl=[.125,.215,.35,.446,.526,.582],bi=20,fr=new hf,Cl=new me;let hr=null,dr=0,ur=0,pr=!1;const Mi=(1+Math.sqrt(5))/2,Xi=1/Mi,Pl=[new N(-Mi,Xi,0),new N(Mi,Xi,0),new N(-Xi,0,Mi),new N(Xi,0,Mi),new N(0,Mi,-Xi),new N(0,Mi,Xi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,e=.1,i=100){hr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,e,i,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hr,dr,ur),this._renderer.xr.enabled=pr,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===eo||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const e=n||this._allocateTargets();return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,e={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Oo,format:Pn,colorSpace:ao,depthBuffer:!1},i=Ll(t,n,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,n,e);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cp(s)),this._blurMaterial=fp(s,t,n)}return i}_compileMaterial(t){const n=new g(this._lodPlanes[0],t);this._renderer.compile(n,fr)}_sceneToCubeUV(t,n,e,i){const a=new yn(90,1,n,e),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Cl),h.toneMapping=fi,h.autoClear=!1;const d=new $t({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new g(new C,d);let _=!1;const x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,_=!0):(d.color.copy(Cl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;ls(i,M*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=x}_textureToCubeUV(t,n){const e=this._renderer,i=t.mapping===eo||t.mapping===no;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new g(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ls(n,0,0,3*l,2*l),e.setRenderTarget(n),e.render(r,fr)}_applyPMREM(t){const n=this._renderer,e=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pl[(i-s-1)%Pl.length];this._blur(t,s-1,s,r,a)}n.autoClear=e}_blur(t,n,e,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,e,i,"latitudinal",s),this._halfBlur(r,t,e,e,i,"longitudinal",s)}_halfBlur(t,n,e,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new g(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[e]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*bi-1),_=s/m,x=isFinite(s)?1+Math.floor(h*_):bi;x>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${bi}`);const p=[];let M=0;for(let E=0;E<bi;++E){const I=E/_,S=Math.exp(-I*I/2);p.push(S),E===0?M+=S:E<x&&(M+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;u.envMap.value=t.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-e;const w=this._sizeLods[i],P=3*w*(i>v-qi?i-v+qi:0),R=4*(this._cubeSize-w);ls(n,P,R,3*w,2*w),l.setRenderTarget(n),l.render(f,fr)}}function cp(o){const t=[],n=[],e=[];let i=o;const s=o-qi+1+Rl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);n.push(a);let l=1/a;r>o-qi?l=Rl[r-o+qi-1]:r===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,_=3,x=2,p=1,M=new Float32Array(_*m*d),v=new Float32Array(x*m*d),w=new Float32Array(p*m*d);for(let R=0;R<d;R++){const E=R%3*2/3-1,I=R>2?0:-1,S=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];M.set(S,_*m*R),v.set(u,x*m*R);const y=[R,R,R,R,R,R];w.set(y,p*m*R)}const P=new on;P.setAttribute("position",new Ln(M,_)),P.setAttribute("uv",new Ln(v,x)),P.setAttribute("faceIndex",new Ln(w,p)),t.push(P),i>qi&&i--}return{lodPlanes:t,sizeLods:n,sigmas:e}}function Ll(o,t,n){const e=new Ri(o,t,n);return e.texture.mapping=Ps,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ls(o,t,n,e,i){o.viewport.set(t,n,e,i),o.scissor.set(t,n,e,i)}function fp(o,t,n){const e=new Float32Array(bi),i=new N(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ba(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Dl(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ul(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}function hp(o){let t=new WeakMap,n=null;function e(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nr||l===zr,h=l===eo||l===no;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new Il(o)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(n===null&&(n=new Il(o)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:e,dispose:r}}function dp(o){const t={};function n(e){if(t[e]!==void 0)return t[e];let i;switch(e){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(e)}return t[e]=i,i}return{has:function(e){return n(e)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(e){const i=n(e);return i===null&&yo("THREE.WebGLRenderer: "+e+" extension not supported."),i}}}function up(o,t,n,e){const i={},s=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let x=0,p=_.length;x<p;x++)t.remove(_[x])}u.removeEventListener("dispose",r),delete i[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),e.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)t.update(u[m],o.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const _=d[m];for(let x=0,p=_.length;x<p;x++)t.update(_[x],o.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,w=M.length;v<w;v+=3){const P=M[v+0],R=M[v+1],E=M[v+2];u.push(P,R,R,E,E,P)}}else if(m!==void 0){const M=m.array;_=m.version;for(let v=0,w=M.length/3-1;v<w;v+=3){const P=v+0,R=v+1,E=v+2;u.push(P,R,R,E,E,P)}}else return;const x=new(jc(u)?rf:sf)(u,1);x.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,x)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function pp(o,t,n){let e;function i(u){e=u}let s,r;function a(u){s=u.type,r=u.bytesPerElement}function l(u,d){o.drawElements(e,d,s,u*r),n.update(d,e,1)}function c(u,d,m){m!==0&&(o.drawElementsInstanced(e,d,s,u*r,m),n.update(d,e,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(e,d,0,s,u,0,m);let x=0;for(let p=0;p<m;p++)x+=d[p];n.update(x,e,1)}function f(u,d,m,_){if(m===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<u.length;p++)c(u[p]/r,d[p],_[p]);else{x.multiDrawElementsInstancedWEBGL(e,d,0,s,u,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*_[M];n.update(p,e,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function mp(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function e(s,r,a){switch(n.calls++,r){case o.TRIANGLES:n.triangles+=a*(s/3);break;case o.LINES:n.lines+=a*(s/2);break;case o.LINE_STRIP:n.lines+=a*(s-1);break;case o.LINE_LOOP:n.lines+=a*s;break;case o.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:e}}function gp(o,t,n){const e=new WeakMap,i=new Te;function s(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=e.get(a);if(u===void 0||u.count!==f){let y=function(){I.dispose(),e.delete(a),a.removeEventListener("dispose",y)};var d=y;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let w=0;m===!0&&(w=1),_===!0&&(w=2),x===!0&&(w=3);let P=a.attributes.position.count*w,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const E=new Float32Array(P*R*4*f),I=new tf(E,P,R,f);I.type=$n,I.needsUpdate=!0;const S=w*4;for(let D=0;D<f;D++){const G=p[D],V=M[D],J=v[D],$=P*R*4*D;for(let X=0;X<G.count;X++){const Q=X*S;m===!0&&(i.fromBufferAttribute(G,X),E[$+Q+0]=i.x,E[$+Q+1]=i.y,E[$+Q+2]=i.z,E[$+Q+3]=0),_===!0&&(i.fromBufferAttribute(V,X),E[$+Q+4]=i.x,E[$+Q+5]=i.y,E[$+Q+6]=i.z,E[$+Q+7]=0),x===!0&&(i.fromBufferAttribute(J,X),E[$+Q+8]=i.x,E[$+Q+9]=i.y,E[$+Q+10]=i.z,E[$+Q+11]=J.itemSize===4?i.w:1)}}u={count:f,texture:I,size:new Bt(P,R)},e.set(a,u),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,n);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(o,"morphTargetBaseInfluence",_),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(o,"morphTargetsTextureSize",u.size)}return{update:s}}function xp(o,t,n,e){let i=new WeakMap;function s(l){const c=e.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}class df extends cn{constructor(t,n,e,i,s,r,a,l,c,h=Ji){if(h!==Ji&&h!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");e===void 0&&h===Ji&&(e=Ai),e===void 0&&h===oo&&(e=io),super(null,i,s,r,a,l,h,e,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const uf=new cn,Nl=new df(1,1),pf=new tf,mf=new id,gf=new cf,zl=[],Fl=[],Ol=new Float32Array(16),kl=new Float32Array(9),Bl=new Float32Array(4);function ho(o,t,n){const e=o[0];if(e<=0||e>0)return o;const i=t*n;let s=zl[i];if(s===void 0&&(s=new Float32Array(i),zl[i]=s),t!==0){e.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=n,o[r].toArray(s,a)}return s}function Xe(o,t){if(o.length!==t.length)return!1;for(let n=0,e=o.length;n<e;n++)if(o[n]!==t[n])return!1;return!0}function Ye(o,t){for(let n=0,e=t.length;n<e;n++)o[n]=t[n]}function Ds(o,t){let n=Fl[t];n===void 0&&(n=new Int32Array(t),Fl[t]=n);for(let e=0;e!==t;++e)n[e]=o.allocateTextureUnit();return n}function _p(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function wp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;o.uniform2fv(this.addr,t),Ye(n,t)}}function vp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xe(n,t))return;o.uniform3fv(this.addr,t),Ye(n,t)}}function yp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;o.uniform4fv(this.addr,t),Ye(n,t)}}function Mp(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Xe(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ye(n,t)}else{if(Xe(n,e))return;Bl.set(e),o.uniformMatrix2fv(this.addr,!1,Bl),Ye(n,e)}}function Sp(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Xe(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ye(n,t)}else{if(Xe(n,e))return;kl.set(e),o.uniformMatrix3fv(this.addr,!1,kl),Ye(n,e)}}function bp(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Xe(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ye(n,t)}else{if(Xe(n,e))return;Ol.set(e),o.uniformMatrix4fv(this.addr,!1,Ol),Ye(n,e)}}function Tp(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function Ep(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;o.uniform2iv(this.addr,t),Ye(n,t)}}function Ap(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;o.uniform3iv(this.addr,t),Ye(n,t)}}function Rp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;o.uniform4iv(this.addr,t),Ye(n,t)}}function Cp(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function Pp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;o.uniform2uiv(this.addr,t),Ye(n,t)}}function Ip(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;o.uniform3uiv(this.addr,t),Ye(n,t)}}function Lp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;o.uniform4uiv(this.addr,t),Ye(n,t)}}function Dp(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Nl.compareFunction=Jc,s=Nl):s=uf,n.setTexture2D(t||s,i)}function Up(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTexture3D(t||mf,i)}function Np(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTextureCube(t||gf,i)}function zp(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTexture2DArray(t||pf,i)}function Fp(o){switch(o){case 5126:return _p;case 35664:return wp;case 35665:return vp;case 35666:return yp;case 35674:return Mp;case 35675:return Sp;case 35676:return bp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ep;case 35668:case 35672:return Ap;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Pp;case 36295:return Ip;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return zp}}function Op(o,t){o.uniform1fv(this.addr,t)}function kp(o,t){const n=ho(t,this.size,2);o.uniform2fv(this.addr,n)}function Bp(o,t){const n=ho(t,this.size,3);o.uniform3fv(this.addr,n)}function Gp(o,t){const n=ho(t,this.size,4);o.uniform4fv(this.addr,n)}function Hp(o,t){const n=ho(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Vp(o,t){const n=ho(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Wp(o,t){const n=ho(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Xp(o,t){o.uniform1iv(this.addr,t)}function Yp(o,t){o.uniform2iv(this.addr,t)}function Zp(o,t){o.uniform3iv(this.addr,t)}function qp(o,t){o.uniform4iv(this.addr,t)}function $p(o,t){o.uniform1uiv(this.addr,t)}function Kp(o,t){o.uniform2uiv(this.addr,t)}function Jp(o,t){o.uniform3uiv(this.addr,t)}function jp(o,t){o.uniform4uiv(this.addr,t)}function Qp(o,t,n){const e=this.cache,i=t.length,s=Ds(n,i);Xe(e,s)||(o.uniform1iv(this.addr,s),Ye(e,s));for(let r=0;r!==i;++r)n.setTexture2D(t[r]||uf,s[r])}function tm(o,t,n){const e=this.cache,i=t.length,s=Ds(n,i);Xe(e,s)||(o.uniform1iv(this.addr,s),Ye(e,s));for(let r=0;r!==i;++r)n.setTexture3D(t[r]||mf,s[r])}function em(o,t,n){const e=this.cache,i=t.length,s=Ds(n,i);Xe(e,s)||(o.uniform1iv(this.addr,s),Ye(e,s));for(let r=0;r!==i;++r)n.setTextureCube(t[r]||gf,s[r])}function nm(o,t,n){const e=this.cache,i=t.length,s=Ds(n,i);Xe(e,s)||(o.uniform1iv(this.addr,s),Ye(e,s));for(let r=0;r!==i;++r)n.setTexture2DArray(t[r]||pf,s[r])}function im(o){switch(o){case 5126:return Op;case 35664:return kp;case 35665:return Bp;case 35666:return Gp;case 35674:return Hp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return Yp;case 35668:case 35672:return Zp;case 35669:case 35673:return qp;case 5125:return $p;case 36294:return Kp;case 36295:return Jp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}class om{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.setValue=Fp(n.type)}}class sm{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=im(n.type)}}class rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,e){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,n[a.id],e)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function Gl(o,t){o.seq.push(t),o.map[t.id]=t}function am(o,t,n){const e=o.name,i=e.length;for(mr.lastIndex=0;;){const s=mr.exec(e),r=mr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Gl(n,c===void 0?new om(a,o,t):new sm(a,o,t));break}else{let f=n.map[a];f===void 0&&(f=new rm(a),Gl(n,f)),n=f}}}class Ts{constructor(t,n){this.seq=[],this.map={};const e=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<e;++i){const s=t.getActiveUniform(n,i),r=t.getUniformLocation(n,s.name);am(s,r,this)}}setValue(t,n,e,i){const s=this.map[n];s!==void 0&&s.setValue(t,e,i)}setOptional(t,n,e){const i=n[e];i!==void 0&&this.setValue(t,e,i)}static upload(t,n,e,i){for(let s=0,r=n.length;s!==r;++s){const a=n[s],l=e[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,n){const e=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in n&&e.push(r)}return e}}function Hl(o,t,n){const e=o.createShader(t);return o.shaderSource(e,n),o.compileShader(e),e}const lm=37297;let cm=0;function fm(o,t){const n=o.split(`
`),e=[],i=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=i;r<s;r++){const a=r+1;e.push(`${a===t?">":" "} ${a}: ${n[r]}`)}return e.join(`
`)}const Vl=new he;function hm(o){we._getMatrix(Vl,we.workingColorSpace,o);const t=`mat3( ${Vl.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(o)){case Is:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Wl(o,t,n){const e=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(e&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+fm(o.getShaderSource(t),r)}else return i}function dm(o,t){const n=hm(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function um(o,t){let n;switch(t){case gh:n="Linear";break;case xh:n="Reinhard";break;case _h:n="Cineon";break;case Oc:n="ACESFilmic";break;case vh:n="AgX";break;case yh:n="Neutral";break;case wh:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cs=new N;function pm(){we.getLuminanceCoefficients(cs);const o=cs.x.toFixed(4),t=cs.y.toFixed(4),n=cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mm(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function gm(o){const t=[];for(const n in o){const e=o[n];e!==!1&&t.push("#define "+n+" "+e)}return t.join(`
`)}function xm(o,t){const n={},e=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<e;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),n[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return n}function Mo(o){return o!==""}function Xl(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(o){return o.replace(_m,vm)}const wm=new Map;function vm(o,t){let n=ue[t];if(n===void 0){const e=wm.get(t);if(e!==void 0)n=ue[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return fa(n)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(o){return o.replace(ym,Mm)}function Mm(o,t,n,e){let i="";for(let s=parseInt(t);s<parseInt(n);s++)i+=e.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ql(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function bm(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case eo:case no:t="ENVMAP_TYPE_CUBE";break;case Ps:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tm(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case no:t="ENVMAP_MODE_REFRACTION";break}return t}function Em(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Fc:t="ENVMAP_BLENDING_MULTIPLY";break;case ph:t="ENVMAP_BLENDING_MIX";break;case mh:t="ENVMAP_BLENDING_ADD";break}return t}function Am(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,e=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:e,maxMip:n}}function Rm(o,t,n,e){const i=o.getContext(),s=n.defines;let r=n.vertexShader,a=n.fragmentShader;const l=Sm(n),c=bm(n),h=Tm(n),f=Em(n),u=Am(n),d=mm(n),m=gm(s),_=i.createProgram();let x,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Mo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Mo).join(`
`),p.length>0&&(p+=`
`)):(x=[ql(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),p=[ql(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fi?"#define TONE_MAPPING":"",n.toneMapping!==fi?ue.tonemapping_pars_fragment:"",n.toneMapping!==fi?um("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,dm("linearToOutputTexel",n.outputColorSpace),pm(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Mo).join(`
`)),r=fa(r),r=Xl(r,n),r=Yl(r,n),a=fa(a),a=Xl(a,n),a=Yl(a,n),r=Zl(r),a=Zl(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",n.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+x+r,w=M+p+a,P=Hl(i,i.VERTEX_SHADER,v),R=Hl(i,i.FRAGMENT_SHADER,w);i.attachShader(_,P),i.attachShader(_,R),n.index0AttributeName!==void 0?i.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(o.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(P).trim(),J=i.getShaderInfoLog(R).trim();let $=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,P,R);else{const Q=Wl(i,P,"vertex"),Y=Wl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+Q+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||J==="")&&(X=!1);X&&(D.diagnostics={runnable:$,programLog:G,vertexShader:{log:V,prefix:x},fragmentShader:{log:J,prefix:p}})}i.deleteShader(P),i.deleteShader(R),I=new Ts(i,_),S=xm(i,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,lm)),y},this.destroy=function(){e.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let Cm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,e=t.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(e),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const e of n)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let e=n.get(t);return e===void 0&&(e=new Set,n.set(t,e)),e}_getShaderStage(t){const n=this.shaderCache;let e=n.get(t);return e===void 0&&(e=new Im(t),n.set(t,e)),e}}class Im{constructor(t){this.id=Cm++,this.code=t,this.usedTimes=0}}function Lm(o,t,n,e,i,s,r){const a=new nf,l=new Pm,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function x(S,y,D,G,V){const J=G.fog,$=V.geometry,X=S.isMeshStandardMaterial?G.environment:null,Q=(S.isMeshStandardMaterial?n:t).get(S.envMap||X),Y=Q&&Q.mapping===Ps?Q.image.height:null,at=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=ct!==void 0?ct.length:0;let wt=0;$.morphAttributes.position!==void 0&&(wt=1),$.morphAttributes.normal!==void 0&&(wt=2),$.morphAttributes.color!==void 0&&(wt=3);let vt,H,z,B;if(at){const re=On[at];vt=re.vertexShader,H=re.fragmentShader}else vt=S.vertexShader,H=S.fragmentShader,l.update(S),z=l.getVertexShaderID(S),B=l.getFragmentShaderID(S);const it=o.getRenderTarget(),dt=o.state.buffers.depth.getReversed(),Rt=V.isInstancedMesh===!0,Ut=V.isBatchedMesh===!0,Vt=!!S.map,zt=!!S.matcap,jt=!!Q,U=!!S.aoMap,Wt=!!S.lightMap,It=!!S.bumpMap,Ft=!!S.normalMap,Tt=!!S.displacementMap,Xt=!!S.emissiveMap,St=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,W=S.clearcoat>0,nt=S.dispersion>0,ot=S.iridescence>0,et=S.sheen>0,xt=S.transmission>0,mt=b&&!!S.anisotropyMap,ft=W&&!!S.clearcoatMap,Lt=W&&!!S.clearcoatNormalMap,lt=W&&!!S.clearcoatRoughnessMap,bt=ot&&!!S.iridescenceMap,Ht=ot&&!!S.iridescenceThicknessMap,Jt=et&&!!S.sheenColorMap,Dt=et&&!!S.sheenRoughnessMap,oe=!!S.specularMap,Qt=!!S.specularColorMap,pe=!!S.specularIntensityMap,F=xt&&!!S.transmissionMap,yt=xt&&!!S.thicknessMap,tt=!!S.gradientMap,st=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Gt=!!S.extensions;let se=fi;S.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(se=o.toneMapping);const Ee={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:vt,fragmentShader:H,defines:S.defines,customVertexShaderID:z,customFragmentShaderID:B,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&V._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&V.instanceColor!==null,instancingMorph:Rt&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ao,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:zt,envMap:jt,envMapMode:jt&&Q.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:Wt,bumpMap:It,normalMap:Ft,displacementMap:u&&Tt,emissiveMap:Xt,normalMapObjectSpace:Ft&&S.normalMapType===Th,normalMapTangentSpace:Ft&&S.normalMapType===Kc,metalnessMap:St,roughnessMap:A,anisotropy:b,anisotropyMap:mt,clearcoat:W,clearcoatMap:ft,clearcoatNormalMap:Lt,clearcoatRoughnessMap:lt,dispersion:nt,iridescence:ot,iridescenceMap:bt,iridescenceThicknessMap:Ht,sheen:et,sheenColorMap:Jt,sheenRoughnessMap:Dt,specularMap:oe,specularColorMap:Qt,specularIntensityMap:pe,transmission:xt,transmissionMap:F,thicknessMap:yt,gradientMap:tt,opaque:S.transparent===!1&&S.blending===Ki&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:Vt&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Wt&&_(S.lightMap.channel),bumpMapUv:It&&_(S.bumpMap.channel),normalMapUv:Ft&&_(S.normalMap.channel),displacementMapUv:Tt&&_(S.displacementMap.channel),emissiveMapUv:Xt&&_(S.emissiveMap.channel),metalnessMapUv:St&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:mt&&_(S.anisotropyMap.channel),clearcoatMapUv:ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(S.sheenRoughnessMap.channel),specularMapUv:oe&&_(S.specularMap.channel),specularColorMapUv:Qt&&_(S.specularColorMap.channel),specularIntensityMapUv:pe&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:yt&&_(S.thicknessMap.channel),alphaMapUv:st&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ft||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(Vt||st),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:dt,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&we.getTransfer(S.map.colorSpace)===Se,decodeVideoTextureEmissive:Xt&&S.emissiveMap.isVideoTexture===!0&&we.getTransfer(S.emissiveMap.colorSpace)===Se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(y,S),v(y,S),y.push(o.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function w(S){const y=m[S.type];let D;if(y){const G=On[y];D=md.clone(G.uniforms)}else D=S.uniforms;return D}function P(S,y){let D;for(let G=0,V=h.length;G<V;G++){const J=h[G];if(J.cacheKey===y){D=J,++D.usedTimes;break}}return D===void 0&&(D=new Rm(o,y,S,s),h.push(D)),D}function R(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function I(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:w,acquireProgram:P,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:I}}function Dm(){let o=new WeakMap;function t(r){return o.has(r)}function n(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:t,get:n,remove:e,update:i,dispose:s}}function Um(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function $l(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Kl(){const o=[];let t=0;const n=[],e=[],i=[];function s(){t=0,n.length=0,e.length=0,i.length=0}function r(f,u,d,m,_,x){let p=o[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:x},o[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=x),t++,p}function a(f,u,d,m,_,x){const p=r(f,u,d,m,_,x);d.transmission>0?e.push(p):d.transparent===!0?i.push(p):n.push(p)}function l(f,u,d,m,_,x){const p=r(f,u,d,m,_,x);d.transmission>0?e.unshift(p):d.transparent===!0?i.unshift(p):n.unshift(p)}function c(f,u){n.length>1&&n.sort(f||Um),e.length>1&&e.sort(u||$l),i.length>1&&i.sort(u||$l)}function h(){for(let f=t,u=o.length;f<u;f++){const d=o[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:e,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Nm(){let o=new WeakMap;function t(e,i){const s=o.get(e);let r;return s===void 0?(r=new Kl,o.set(e,[r])):i>=s.length?(r=new Kl,s.push(r)):r=s[i],r}function n(){o=new WeakMap}return{get:t,dispose:n}}function zm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new me};break;case"SpotLight":n={position:new N,direction:new N,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new me,groundColor:new me};break;case"RectAreaLight":n={color:new me,position:new N,halfWidth:new N,halfHeight:new N};break}return o[t.id]=n,n}}}function Fm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let Om=0;function km(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Bm(o){const t=new zm,n=Fm(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)e.probe.push(new N);const i=new N,s=new Ie,r=new Ie;function a(c){let h=0,f=0,u=0;for(let S=0;S<9;S++)e.probe[S].set(0,0,0);let d=0,m=0,_=0,x=0,p=0,M=0,v=0,w=0,P=0,R=0,E=0;c.sort(km);for(let S=0,y=c.length;S<y;S++){const D=c[S],G=D.color,V=D.intensity,J=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*V,f+=G.g*V,u+=G.b*V;else if(D.isLightProbe){for(let X=0;X<9;X++)e.probe[X].addScaledVector(D.sh.coefficients[X],V);E++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,Y=n.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,e.directionalShadow[d]=Y,e.directionalShadowMap[d]=$,e.directionalShadowMatrix[d]=D.shadow.matrix,M++}e.directional[d]=X,d++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(G).multiplyScalar(V),X.distance=J,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,e.spot[_]=X;const Q=D.shadow;if(D.map&&(e.spotLightMap[P]=D.map,P++,Q.updateMatrices(D),D.castShadow&&R++),e.spotLightMatrix[_]=Q.matrix,D.castShadow){const Y=n.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,e.spotShadow[_]=Y,e.spotShadowMap[_]=$,w++}_++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(G).multiplyScalar(V),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),e.rectArea[x]=X,x++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Q=D.shadow,Y=n.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,e.pointShadow[m]=Y,e.pointShadowMap[m]=$,e.pointShadowMatrix[m]=D.shadow.matrix,v++}e.point[m]=X,m++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(V),X.groundColor.copy(D.groundColor).multiplyScalar(V),e.hemi[p]=X,p++}}x>0&&(o.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=Ct.LTC_FLOAT_1,e.rectAreaLTC2=Ct.LTC_FLOAT_2):(e.rectAreaLTC1=Ct.LTC_HALF_1,e.rectAreaLTC2=Ct.LTC_HALF_2)),e.ambient[0]=h,e.ambient[1]=f,e.ambient[2]=u;const I=e.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==x||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==v||I.numSpotShadows!==w||I.numSpotMaps!==P||I.numLightProbes!==E)&&(e.directional.length=d,e.spot.length=_,e.rectArea.length=x,e.point.length=m,e.hemi.length=p,e.directionalShadow.length=M,e.directionalShadowMap.length=M,e.pointShadow.length=v,e.pointShadowMap.length=v,e.spotShadow.length=w,e.spotShadowMap.length=w,e.directionalShadowMatrix.length=M,e.pointShadowMatrix.length=v,e.spotLightMatrix.length=w+P-R,e.spotLightMap.length=P,e.numSpotLightShadowsWithMaps=R,e.numLightProbes=E,I.directionalLength=d,I.pointLength=m,I.spotLength=_,I.rectAreaLength=x,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=v,I.numSpotShadows=w,I.numSpotMaps=P,I.numLightProbes=E,e.version=Om++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0;const x=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const w=e.directional[f];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),f++}else if(v.isSpotLight){const w=e.spot[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),d++}else if(v.isRectAreaLight){const w=e.rectArea[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(x),r.identity(),s.copy(v.matrixWorld),s.premultiply(x),r.extractRotation(s),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),m++}else if(v.isPointLight){const w=e.point[u];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(x),u++}else if(v.isHemisphereLight){const w=e.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(x),_++}}}return{setup:a,setupView:l,state:e}}function Jl(o){const t=new Bm(o),n=[],e=[];function i(h){c.camera=h,n.length=0,e.length=0}function s(h){n.push(h)}function r(h){e.push(h)}function a(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:e,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Gm(o){let t=new WeakMap;function n(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new Jl(o),t.set(i,[a])):s>=r.length?(a=new Jl(o),r.push(a)):a=r[s],a}function e(){t=new WeakMap}return{get:n,dispose:e}}class Hm extends fo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vm extends fo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
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
}`;function Ym(o,t,n){let e=new Sa;const i=new Bt,s=new Bt,r=new Te,a=new Hm({depthPacking:bh}),l=new Vm,c={},h=n.maxTextureSize,f={[hi]:hn,[hn]:hi,[nn]:nn},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new on;m.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new g(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let p=this.type;this.render=function(R,E,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;const S=o.getRenderTarget(),y=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),G=o.state;G.setBlending(ci),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=p!==qn&&this.type===qn,J=p===qn&&this.type!==qn;for(let $=0,X=R.length;$<X;$++){const Q=R[$],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const at=Y.getFrameExtents();if(i.multiply(at),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/at.x),i.x=s.x*at.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/at.y),i.y=s.y*at.y,Y.mapSize.y=s.y)),Y.map===null||V===!0||J===!0){const ht=this.type!==qn?{minFilter:In,magFilter:In}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ri(i.x,i.y,ht),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const ct=Y.getViewportCount();for(let ht=0;ht<ct;ht++){const wt=Y.getViewport(ht);r.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),G.viewport(r),Y.updateMatrices(Q,ht),e=Y.getFrustum(),w(E,I,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===qn&&M(Y,I),Y.needsUpdate=!1}p=this.type,x.needsUpdate=!1,o.setRenderTarget(S,y,D)};function M(R,E){const I=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,o.setRenderTarget(R.mapPass),o.clear(),o.renderBufferDirect(E,null,I,u,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,o.setRenderTarget(R.map),o.clear(),o.renderBufferDirect(E,null,I,d,_,null)}function v(R,E,I,S){let y=null;const D=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:a,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=y.uuid,V=E.uuid;let J=c[G];J===void 0&&(J={},c[G]=J);let $=J[V];$===void 0&&($=y.clone(),J[V]=$,E.addEventListener("dispose",P)),y=$}if(y.visible=E.visible,y.wireframe=E.wireframe,S===qn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=o.properties.get(y);G.light=I}return y}function w(R,E,I,S,y){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===qn)&&(!R.frustumCulled||e.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const V=t.update(R),J=R.material;if(Array.isArray(J)){const $=V.groups;for(let X=0,Q=$.length;X<Q;X++){const Y=$[X],at=J[Y.materialIndex];if(at&&at.visible){const ct=v(R,at,S,y);R.onBeforeShadow(o,R,E,I,V,ct,Y),o.renderBufferDirect(I,null,V,ct,R,Y),R.onAfterShadow(o,R,E,I,V,ct,Y)}}}else if(J.visible){const $=v(R,J,S,y);R.onBeforeShadow(o,R,E,I,V,$,null),o.renderBufferDirect(I,null,V,$,R,null),R.onAfterShadow(o,R,E,I,V,$,null)}}const G=R.children;for(let V=0,J=G.length;V<J;V++)w(G[V],E,I,S,y)}function P(R){R.target.removeEventListener("dispose",P);for(const I in c){const S=c[I],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Zm={[Rr]:Cr,[Pr]:Dr,[Ir]:Ur,[to]:Lr,[Cr]:Rr,[Dr]:Pr,[Ur]:Ir,[Lr]:to};function qm(o,t){function n(){let F=!1;const yt=new Te;let tt=null;const st=new Te(0,0,0,0);return{setMask:function(gt){tt!==gt&&!F&&(o.colorMask(gt,gt,gt,gt),tt=gt)},setLocked:function(gt){F=gt},setClear:function(gt,pt,Gt,se,Ee){Ee===!0&&(gt*=se,pt*=se,Gt*=se),yt.set(gt,pt,Gt,se),st.equals(yt)===!1&&(o.clearColor(gt,pt,Gt,se),st.copy(yt))},reset:function(){F=!1,tt=null,st.set(-1,0,0,0)}}}function e(){let F=!1,yt=!1,tt=null,st=null,gt=null;return{setReversed:function(pt){if(yt!==pt){const Gt=t.get("EXT_clip_control");yt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const se=gt;gt=null,this.setClear(se)}yt=pt},getReversed:function(){return yt},setTest:function(pt){pt?it(o.DEPTH_TEST):dt(o.DEPTH_TEST)},setMask:function(pt){tt!==pt&&!F&&(o.depthMask(pt),tt=pt)},setFunc:function(pt){if(yt&&(pt=Zm[pt]),st!==pt){switch(pt){case Rr:o.depthFunc(o.NEVER);break;case Cr:o.depthFunc(o.ALWAYS);break;case Pr:o.depthFunc(o.LESS);break;case to:o.depthFunc(o.LEQUAL);break;case Ir:o.depthFunc(o.EQUAL);break;case Lr:o.depthFunc(o.GEQUAL);break;case Dr:o.depthFunc(o.GREATER);break;case Ur:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}st=pt}},setLocked:function(pt){F=pt},setClear:function(pt){gt!==pt&&(yt&&(pt=1-pt),o.clearDepth(pt),gt=pt)},reset:function(){F=!1,tt=null,st=null,gt=null,yt=!1}}}function i(){let F=!1,yt=null,tt=null,st=null,gt=null,pt=null,Gt=null,se=null,Ee=null;return{setTest:function(re){F||(re?it(o.STENCIL_TEST):dt(o.STENCIL_TEST))},setMask:function(re){yt!==re&&!F&&(o.stencilMask(re),yt=re)},setFunc:function(re,De,ze){(tt!==re||st!==De||gt!==ze)&&(o.stencilFunc(re,De,ze),tt=re,st=De,gt=ze)},setOp:function(re,De,ze){(pt!==re||Gt!==De||se!==ze)&&(o.stencilOp(re,De,ze),pt=re,Gt=De,se=ze)},setLocked:function(re){F=re},setClear:function(re){Ee!==re&&(o.clearStencil(re),Ee=re)},reset:function(){F=!1,yt=null,tt=null,st=null,gt=null,pt=null,Gt=null,se=null,Ee=null}}}const s=new n,r=new e,a=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,_=!1,x=null,p=null,M=null,v=null,w=null,P=null,R=null,E=new me(0,0,0),I=0,S=!1,y=null,D=null,G=null,V=null,J=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=Q>=2);let at=null,ct={};const ht=o.getParameter(o.SCISSOR_BOX),wt=o.getParameter(o.VIEWPORT),vt=new Te().fromArray(ht),H=new Te().fromArray(wt);function z(F,yt,tt,st){const gt=new Uint8Array(4),pt=o.createTexture();o.bindTexture(F,pt),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<tt;Gt++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(yt,0,o.RGBA,1,1,st,0,o.RGBA,o.UNSIGNED_BYTE,gt):o.texImage2D(yt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,gt);return pt}const B={};B[o.TEXTURE_2D]=z(o.TEXTURE_2D,o.TEXTURE_2D,1),B[o.TEXTURE_CUBE_MAP]=z(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[o.TEXTURE_2D_ARRAY]=z(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),B[o.TEXTURE_3D]=z(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),it(o.DEPTH_TEST),r.setFunc(to),It(!1),Ft(el),it(o.CULL_FACE),U(ci);function it(F){h[F]!==!0&&(o.enable(F),h[F]=!0)}function dt(F){h[F]!==!1&&(o.disable(F),h[F]=!1)}function Rt(F,yt){return f[F]!==yt?(o.bindFramebuffer(F,yt),f[F]=yt,F===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=yt),F===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=yt),!0):!1}function Ut(F,yt){let tt=d,st=!1;if(F){tt=u.get(yt),tt===void 0&&(tt=[],u.set(yt,tt));const gt=F.textures;if(tt.length!==gt.length||tt[0]!==o.COLOR_ATTACHMENT0){for(let pt=0,Gt=gt.length;pt<Gt;pt++)tt[pt]=o.COLOR_ATTACHMENT0+pt;tt.length=gt.length,st=!0}}else tt[0]!==o.BACK&&(tt[0]=o.BACK,st=!0);st&&o.drawBuffers(tt)}function Vt(F){return m!==F?(o.useProgram(F),m=F,!0):!1}const zt={[Si]:o.FUNC_ADD,[Jf]:o.FUNC_SUBTRACT,[jf]:o.FUNC_REVERSE_SUBTRACT};zt[Qf]=o.MIN,zt[th]=o.MAX;const jt={[eh]:o.ZERO,[nh]:o.ONE,[ih]:o.SRC_COLOR,[Er]:o.SRC_ALPHA,[ch]:o.SRC_ALPHA_SATURATE,[ah]:o.DST_COLOR,[sh]:o.DST_ALPHA,[oh]:o.ONE_MINUS_SRC_COLOR,[Ar]:o.ONE_MINUS_SRC_ALPHA,[lh]:o.ONE_MINUS_DST_COLOR,[rh]:o.ONE_MINUS_DST_ALPHA,[fh]:o.CONSTANT_COLOR,[hh]:o.ONE_MINUS_CONSTANT_COLOR,[dh]:o.CONSTANT_ALPHA,[uh]:o.ONE_MINUS_CONSTANT_ALPHA};function U(F,yt,tt,st,gt,pt,Gt,se,Ee,re){if(F===ci){_===!0&&(dt(o.BLEND),_=!1);return}if(_===!1&&(it(o.BLEND),_=!0),F!==Kf){if(F!==x||re!==S){if((p!==Si||w!==Si)&&(o.blendEquation(o.FUNC_ADD),p=Si,w=Si),re)switch(F){case Ki:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tr:o.blendFunc(o.ONE,o.ONE);break;case nl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case il:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ki:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tr:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case nl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case il:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,v=null,P=null,R=null,E.set(0,0,0),I=0,x=F,S=re}return}gt=gt||yt,pt=pt||tt,Gt=Gt||st,(yt!==p||gt!==w)&&(o.blendEquationSeparate(zt[yt],zt[gt]),p=yt,w=gt),(tt!==M||st!==v||pt!==P||Gt!==R)&&(o.blendFuncSeparate(jt[tt],jt[st],jt[pt],jt[Gt]),M=tt,v=st,P=pt,R=Gt),(se.equals(E)===!1||Ee!==I)&&(o.blendColor(se.r,se.g,se.b,Ee),E.copy(se),I=Ee),x=F,S=!1}function Wt(F,yt){F.side===nn?dt(o.CULL_FACE):it(o.CULL_FACE);let tt=F.side===hn;yt&&(tt=!tt),It(tt),F.blending===Ki&&F.transparent===!1?U(ci):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const st=F.stencilWrite;a.setTest(st),st&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Xt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function It(F){y!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),y=F)}function Ft(F){F!==qf?(it(o.CULL_FACE),F!==D&&(F===el?o.cullFace(o.BACK):F===$f?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):dt(o.CULL_FACE),D=F}function Tt(F){F!==G&&(X&&o.lineWidth(F),G=F)}function Xt(F,yt,tt){F?(it(o.POLYGON_OFFSET_FILL),(V!==yt||J!==tt)&&(o.polygonOffset(yt,tt),V=yt,J=tt)):dt(o.POLYGON_OFFSET_FILL)}function St(F){F?it(o.SCISSOR_TEST):dt(o.SCISSOR_TEST)}function A(F){F===void 0&&(F=o.TEXTURE0+$-1),at!==F&&(o.activeTexture(F),at=F)}function b(F,yt,tt){tt===void 0&&(at===null?tt=o.TEXTURE0+$-1:tt=at);let st=ct[tt];st===void 0&&(st={type:void 0,texture:void 0},ct[tt]=st),(st.type!==F||st.texture!==yt)&&(at!==tt&&(o.activeTexture(tt),at=tt),o.bindTexture(F,yt||B[F]),st.type=F,st.texture=yt)}function W(){const F=ct[at];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Jt(F){vt.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),vt.copy(F))}function Dt(F){H.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),H.copy(F))}function oe(F,yt){let tt=c.get(yt);tt===void 0&&(tt=new WeakMap,c.set(yt,tt));let st=tt.get(F);st===void 0&&(st=o.getUniformBlockIndex(yt,F.name),tt.set(F,st))}function Qt(F,yt){const st=c.get(yt).get(F);l.get(yt)!==st&&(o.uniformBlockBinding(yt,st,F.__bindingPointIndex),l.set(yt,st))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},at=null,ct={},f={},u=new WeakMap,d=[],m=null,_=!1,x=null,p=null,M=null,v=null,w=null,P=null,R=null,E=new me(0,0,0),I=0,S=!1,y=null,D=null,G=null,V=null,J=null,vt.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:it,disable:dt,bindFramebuffer:Rt,drawBuffers:Ut,useProgram:Vt,setBlending:U,setMaterial:Wt,setFlipSided:It,setCullFace:Ft,setLineWidth:Tt,setPolygonOffset:Xt,setScissorTest:St,activeTexture:A,bindTexture:b,unbindTexture:W,compressedTexImage2D:nt,compressedTexImage3D:ot,texImage2D:bt,texImage3D:Ht,updateUBOMapping:oe,uniformBlockBinding:Qt,texStorage2D:Lt,texStorage3D:lt,texSubImage2D:et,texSubImage3D:xt,compressedTexSubImage2D:mt,compressedTexSubImage3D:ft,scissor:Jt,viewport:Dt,reset:pe}}function jl(o,t,n,e){const i=$m(e);switch(n){case Vc:return o*t;case Xc:return o*t;case Yc:return o*t*2;case Zc:return o*t/i.components*i.byteLength;case wa:return o*t/i.components*i.byteLength;case qc:return o*t*2/i.components*i.byteLength;case va:return o*t*2/i.components*i.byteLength;case Wc:return o*t*3/i.components*i.byteLength;case Pn:return o*t*4/i.components*i.byteLength;case ya:return o*t*4/i.components*i.byteLength;case vs:case ys:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ms:case Ss:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kr:case Gr:return Math.max(o,16)*Math.max(t,8)/4;case Or:case Br:return Math.max(o,8)*Math.max(t,8)/2;case Hr:case Vr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case qr:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case $r:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case jr:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Qr:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ea:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case na:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ia:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bs:case sa:case ra:return Math.ceil(o/4)*Math.ceil(t/4)*16;case $c:case aa:return Math.ceil(o/4)*Math.ceil(t/4)*8;case la:case ca:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $m(o){switch(o){case Qn:case Bc:return{byteLength:1,components:1};case Io:case Gc:case Oo:return{byteLength:2,components:1};case xa:case _a:return{byteLength:2,components:4};case Ai:case ga:case $n:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Km(o,t,n,e,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return d?new OffscreenCanvas(A,b):As("canvas")}function _(A,b,W){let nt=1;const ot=St(A);if((ot.width>W||ot.height>W)&&(nt=W/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const et=Math.floor(nt*ot.width),xt=Math.floor(nt*ot.height);f===void 0&&(f=m(et,xt));const mt=b?m(et,xt):f;return mt.width=et,mt.height=xt,mt.getContext("2d").drawImage(A,0,0,et,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+xt+")."),mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function x(A){return A.generateMipmaps}function p(A){o.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?o.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function v(A,b,W,nt,ot=!1){if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=b;if(b===o.RED&&(W===o.FLOAT&&(et=o.R32F),W===o.HALF_FLOAT&&(et=o.R16F),W===o.UNSIGNED_BYTE&&(et=o.R8)),b===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(et=o.R8UI),W===o.UNSIGNED_SHORT&&(et=o.R16UI),W===o.UNSIGNED_INT&&(et=o.R32UI),W===o.BYTE&&(et=o.R8I),W===o.SHORT&&(et=o.R16I),W===o.INT&&(et=o.R32I)),b===o.RG&&(W===o.FLOAT&&(et=o.RG32F),W===o.HALF_FLOAT&&(et=o.RG16F),W===o.UNSIGNED_BYTE&&(et=o.RG8)),b===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(et=o.RG8UI),W===o.UNSIGNED_SHORT&&(et=o.RG16UI),W===o.UNSIGNED_INT&&(et=o.RG32UI),W===o.BYTE&&(et=o.RG8I),W===o.SHORT&&(et=o.RG16I),W===o.INT&&(et=o.RG32I)),b===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(et=o.RGB8UI),W===o.UNSIGNED_SHORT&&(et=o.RGB16UI),W===o.UNSIGNED_INT&&(et=o.RGB32UI),W===o.BYTE&&(et=o.RGB8I),W===o.SHORT&&(et=o.RGB16I),W===o.INT&&(et=o.RGB32I)),b===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(et=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(et=o.RGBA16UI),W===o.UNSIGNED_INT&&(et=o.RGBA32UI),W===o.BYTE&&(et=o.RGBA8I),W===o.SHORT&&(et=o.RGBA16I),W===o.INT&&(et=o.RGBA32I)),b===o.RGB&&W===o.UNSIGNED_INT_5_9_9_9_REV&&(et=o.RGB9_E5),b===o.RGBA){const xt=ot?Is:we.getTransfer(nt);W===o.FLOAT&&(et=o.RGBA32F),W===o.HALF_FLOAT&&(et=o.RGBA16F),W===o.UNSIGNED_BYTE&&(et=xt===Se?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(et=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(et=o.RGB5_A1)}return(et===o.R16F||et===o.R32F||et===o.RG16F||et===o.RG32F||et===o.RGBA16F||et===o.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function w(A,b){let W;return A?b===null||b===Ai||b===io?W=o.DEPTH24_STENCIL8:b===$n?W=o.DEPTH32F_STENCIL8:b===Io&&(W=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ai||b===io?W=o.DEPTH_COMPONENT24:b===$n?W=o.DEPTH_COMPONENT32F:b===Io&&(W=o.DEPTH_COMPONENT16),W}function P(A,b){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==In&&A.minFilter!==kn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){const b=A.target;b.removeEventListener("dispose",R),I(b),b.isVideoTexture&&h.delete(b)}function E(A){const b=A.target;b.removeEventListener("dispose",E),y(b)}function I(A){const b=e.get(A);if(b.__webglInit===void 0)return;const W=A.source,nt=u.get(W);if(nt){const ot=nt[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(A),Object.keys(nt).length===0&&u.delete(W)}e.remove(A)}function S(A){const b=e.get(A);o.deleteTexture(b.__webglTexture);const W=A.source,nt=u.get(W);delete nt[b.__cacheKey],r.memory.textures--}function y(A){const b=e.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),e.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let ot=0;ot<b.__webglFramebuffer[nt].length;ot++)o.deleteFramebuffer(b.__webglFramebuffer[nt][ot]);else o.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)o.deleteFramebuffer(b.__webglFramebuffer[nt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=A.textures;for(let nt=0,ot=W.length;nt<ot;nt++){const et=e.get(W[nt]);et.__webglTexture&&(o.deleteTexture(et.__webglTexture),r.memory.textures--),e.remove(W[nt])}e.remove(A)}let D=0;function G(){D=0}function V(){const A=D;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function J(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function $(A,b){const W=e.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(W,A,b);return}}n.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+b)}function X(A,b){const W=e.get(A);if(A.version>0&&W.__version!==A.version){H(W,A,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+b)}function Q(A,b){const W=e.get(A);if(A.version>0&&W.__version!==A.version){H(W,A,b);return}n.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+b)}function Y(A,b){const W=e.get(A);if(A.version>0&&W.__version!==A.version){z(W,A,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+b)}const at={[Ce]:o.REPEAT,[Ti]:o.CLAMP_TO_EDGE,[Fr]:o.MIRRORED_REPEAT},ct={[In]:o.NEAREST,[Mh]:o.NEAREST_MIPMAP_NEAREST,[Vo]:o.NEAREST_MIPMAP_LINEAR,[kn]:o.LINEAR,[Hs]:o.LINEAR_MIPMAP_NEAREST,[Ei]:o.LINEAR_MIPMAP_LINEAR},ht={[Eh]:o.NEVER,[Lh]:o.ALWAYS,[Ah]:o.LESS,[Jc]:o.LEQUAL,[Rh]:o.EQUAL,[Ih]:o.GEQUAL,[Ch]:o.GREATER,[Ph]:o.NOTEQUAL};function wt(A,b){if(b.type===$n&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===kn||b.magFilter===Hs||b.magFilter===Vo||b.magFilter===Ei||b.minFilter===kn||b.minFilter===Hs||b.minFilter===Vo||b.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(A,o.TEXTURE_WRAP_S,at[b.wrapS]),o.texParameteri(A,o.TEXTURE_WRAP_T,at[b.wrapT]),(A===o.TEXTURE_3D||A===o.TEXTURE_2D_ARRAY)&&o.texParameteri(A,o.TEXTURE_WRAP_R,at[b.wrapR]),o.texParameteri(A,o.TEXTURE_MAG_FILTER,ct[b.magFilter]),o.texParameteri(A,o.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(o.texParameteri(A,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(A,o.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===In||b.minFilter!==Vo&&b.minFilter!==Ei||b.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||e.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),e.get(b).__currentAnisotropy=b.anisotropy}}}function vt(A,b){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));const nt=b.source;let ot=u.get(nt);ot===void 0&&(ot={},u.set(nt,ot));const et=J(b);if(et!==A.__cacheKey){ot[et]===void 0&&(ot[et]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,W=!0),ot[et].usedTimes++;const xt=ot[A.__cacheKey];xt!==void 0&&(ot[A.__cacheKey].usedTimes--,xt.usedTimes===0&&S(b)),A.__cacheKey=et,A.__webglTexture=ot[et].texture}return W}function H(A,b,W){let nt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=o.TEXTURE_3D);const ot=vt(A,b),et=b.source;n.bindTexture(nt,A.__webglTexture,o.TEXTURE0+W);const xt=e.get(et);if(et.version!==xt.__version||ot===!0){n.activeTexture(o.TEXTURE0+W);const mt=we.getPrimaries(we.workingColorSpace),ft=b.colorSpace===li?null:we.getPrimaries(b.colorSpace),Lt=b.colorSpace===li||mt===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let lt=_(b.image,!1,i.maxTextureSize);lt=Xt(b,lt);const bt=s.convert(b.format,b.colorSpace),Ht=s.convert(b.type);let Jt=v(b.internalFormat,bt,Ht,b.colorSpace,b.isVideoTexture);wt(nt,b);let Dt;const oe=b.mipmaps,Qt=b.isVideoTexture!==!0,pe=xt.__version===void 0||ot===!0,F=et.dataReady,yt=P(b,lt);if(b.isDepthTexture)Jt=w(b.format===oo,b.type),pe&&(Qt?n.texStorage2D(o.TEXTURE_2D,1,Jt,lt.width,lt.height):n.texImage2D(o.TEXTURE_2D,0,Jt,lt.width,lt.height,0,bt,Ht,null));else if(b.isDataTexture)if(oe.length>0){Qt&&pe&&n.texStorage2D(o.TEXTURE_2D,yt,Jt,oe[0].width,oe[0].height);for(let tt=0,st=oe.length;tt<st;tt++)Dt=oe[tt],Qt?F&&n.texSubImage2D(o.TEXTURE_2D,tt,0,0,Dt.width,Dt.height,bt,Ht,Dt.data):n.texImage2D(o.TEXTURE_2D,tt,Jt,Dt.width,Dt.height,0,bt,Ht,Dt.data);b.generateMipmaps=!1}else Qt?(pe&&n.texStorage2D(o.TEXTURE_2D,yt,Jt,lt.width,lt.height),F&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,lt.width,lt.height,bt,Ht,lt.data)):n.texImage2D(o.TEXTURE_2D,0,Jt,lt.width,lt.height,0,bt,Ht,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&pe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,yt,Jt,oe[0].width,oe[0].height,lt.depth);for(let tt=0,st=oe.length;tt<st;tt++)if(Dt=oe[tt],b.format!==Pn)if(bt!==null)if(Qt){if(F)if(b.layerUpdates.size>0){const gt=jl(Dt.width,Dt.height,b.format,b.type);for(const pt of b.layerUpdates){const Gt=Dt.data.subarray(pt*gt/Dt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,pt,Dt.width,Dt.height,1,bt,Gt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,0,Dt.width,Dt.height,lt.depth,bt,Dt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,tt,Jt,Dt.width,Dt.height,lt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?F&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,0,Dt.width,Dt.height,lt.depth,bt,Ht,Dt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,tt,Jt,Dt.width,Dt.height,lt.depth,0,bt,Ht,Dt.data)}else{Qt&&pe&&n.texStorage2D(o.TEXTURE_2D,yt,Jt,oe[0].width,oe[0].height);for(let tt=0,st=oe.length;tt<st;tt++)Dt=oe[tt],b.format!==Pn?bt!==null?Qt?F&&n.compressedTexSubImage2D(o.TEXTURE_2D,tt,0,0,Dt.width,Dt.height,bt,Dt.data):n.compressedTexImage2D(o.TEXTURE_2D,tt,Jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?F&&n.texSubImage2D(o.TEXTURE_2D,tt,0,0,Dt.width,Dt.height,bt,Ht,Dt.data):n.texImage2D(o.TEXTURE_2D,tt,Jt,Dt.width,Dt.height,0,bt,Ht,Dt.data)}else if(b.isDataArrayTexture)if(Qt){if(pe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,yt,Jt,lt.width,lt.height,lt.depth),F)if(b.layerUpdates.size>0){const tt=jl(lt.width,lt.height,b.format,b.type);for(const st of b.layerUpdates){const gt=lt.data.subarray(st*tt/lt.data.BYTES_PER_ELEMENT,(st+1)*tt/lt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,st,lt.width,lt.height,1,bt,Ht,gt)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Ht,lt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Jt,lt.width,lt.height,lt.depth,0,bt,Ht,lt.data);else if(b.isData3DTexture)Qt?(pe&&n.texStorage3D(o.TEXTURE_3D,yt,Jt,lt.width,lt.height,lt.depth),F&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Ht,lt.data)):n.texImage3D(o.TEXTURE_3D,0,Jt,lt.width,lt.height,lt.depth,0,bt,Ht,lt.data);else if(b.isFramebufferTexture){if(pe)if(Qt)n.texStorage2D(o.TEXTURE_2D,yt,Jt,lt.width,lt.height);else{let tt=lt.width,st=lt.height;for(let gt=0;gt<yt;gt++)n.texImage2D(o.TEXTURE_2D,gt,Jt,tt,st,0,bt,Ht,null),tt>>=1,st>>=1}}else if(oe.length>0){if(Qt&&pe){const tt=St(oe[0]);n.texStorage2D(o.TEXTURE_2D,yt,Jt,tt.width,tt.height)}for(let tt=0,st=oe.length;tt<st;tt++)Dt=oe[tt],Qt?F&&n.texSubImage2D(o.TEXTURE_2D,tt,0,0,bt,Ht,Dt):n.texImage2D(o.TEXTURE_2D,tt,Jt,bt,Ht,Dt);b.generateMipmaps=!1}else if(Qt){if(pe){const tt=St(lt);n.texStorage2D(o.TEXTURE_2D,yt,Jt,tt.width,tt.height)}F&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Ht,lt)}else n.texImage2D(o.TEXTURE_2D,0,Jt,bt,Ht,lt);x(b)&&p(nt),xt.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function z(A,b,W){if(b.image.length!==6)return;const nt=vt(A,b),ot=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,A.__webglTexture,o.TEXTURE0+W);const et=e.get(ot);if(ot.version!==et.__version||nt===!0){n.activeTexture(o.TEXTURE0+W);const xt=we.getPrimaries(we.workingColorSpace),mt=b.colorSpace===li?null:we.getPrimaries(b.colorSpace),ft=b.colorSpace===li||xt===mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let st=0;st<6;st++)!Lt&&!lt?bt[st]=_(b.image[st],!0,i.maxCubemapSize):bt[st]=lt?b.image[st].image:b.image[st],bt[st]=Xt(b,bt[st]);const Ht=bt[0],Jt=s.convert(b.format,b.colorSpace),Dt=s.convert(b.type),oe=v(b.internalFormat,Jt,Dt,b.colorSpace),Qt=b.isVideoTexture!==!0,pe=et.__version===void 0||nt===!0,F=ot.dataReady;let yt=P(b,Ht);wt(o.TEXTURE_CUBE_MAP,b);let tt;if(Lt){Qt&&pe&&n.texStorage2D(o.TEXTURE_CUBE_MAP,yt,oe,Ht.width,Ht.height);for(let st=0;st<6;st++){tt=bt[st].mipmaps;for(let gt=0;gt<tt.length;gt++){const pt=tt[gt];b.format!==Pn?Jt!==null?Qt?F&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,0,0,pt.width,pt.height,Jt,pt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,oe,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?F&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,0,0,pt.width,pt.height,Jt,Dt,pt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,oe,pt.width,pt.height,0,Jt,Dt,pt.data)}}}else{if(tt=b.mipmaps,Qt&&pe){tt.length>0&&yt++;const st=St(bt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,yt,oe,st.width,st.height)}for(let st=0;st<6;st++)if(lt){Qt?F&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,bt[st].width,bt[st].height,Jt,Dt,bt[st].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,oe,bt[st].width,bt[st].height,0,Jt,Dt,bt[st].data);for(let gt=0;gt<tt.length;gt++){const Gt=tt[gt].image[st].image;Qt?F&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,0,0,Gt.width,Gt.height,Jt,Dt,Gt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,oe,Gt.width,Gt.height,0,Jt,Dt,Gt.data)}}else{Qt?F&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Jt,Dt,bt[st]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,oe,Jt,Dt,bt[st]);for(let gt=0;gt<tt.length;gt++){const pt=tt[gt];Qt?F&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,0,0,Jt,Dt,pt.image[st]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,oe,Jt,Dt,pt.image[st])}}}x(b)&&p(o.TEXTURE_CUBE_MAP),et.__version=ot.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function B(A,b,W,nt,ot,et){const xt=s.convert(W.format,W.colorSpace),mt=s.convert(W.type),ft=v(W.internalFormat,xt,mt,W.colorSpace),Lt=e.get(b),lt=e.get(W);if(lt.__renderTarget=b,!Lt.__hasExternalTextures){const bt=Math.max(1,b.width>>et),Ht=Math.max(1,b.height>>et);ot===o.TEXTURE_3D||ot===o.TEXTURE_2D_ARRAY?n.texImage3D(ot,et,ft,bt,Ht,b.depth,0,xt,mt,null):n.texImage2D(ot,et,ft,bt,Ht,0,xt,mt,null)}n.bindFramebuffer(o.FRAMEBUFFER,A),Ft(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,nt,ot,lt.__webglTexture,0,It(b)):(ot===o.TEXTURE_2D||ot>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,nt,ot,lt.__webglTexture,et),n.bindFramebuffer(o.FRAMEBUFFER,null)}function it(A,b,W){if(o.bindRenderbuffer(o.RENDERBUFFER,A),b.depthBuffer){const nt=b.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,et=w(b.stencilBuffer,ot),xt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=It(b);Ft(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt,et,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,et,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,et,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,A)}else{const nt=b.textures;for(let ot=0;ot<nt.length;ot++){const et=nt[ot],xt=s.convert(et.format,et.colorSpace),mt=s.convert(et.type),ft=v(et.internalFormat,xt,mt,et.colorSpace),Lt=It(b);W&&Ft(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,ft,b.width,b.height):Ft(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function dt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=e.get(b.depthTexture);nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const ot=nt.__webglTexture,et=It(b);if(b.depthTexture.format===Ji)Ft(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0);else if(b.depthTexture.format===oo)Ft(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Rt(A){const b=e.get(A),W=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const nt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){const ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=nt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");dt(b.__webglFramebuffer,A)}else if(W){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=o.createRenderbuffer(),it(b.__webglDepthbuffer[nt],A,!1);else{const ot=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[nt];o.bindRenderbuffer(o.RENDERBUFFER,et),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,et)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),it(b.__webglDepthbuffer,A,!1);else{const nt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,nt,o.RENDERBUFFER,ot)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(A,b,W){const nt=e.get(A);b!==void 0&&B(nt.__webglFramebuffer,A,A.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&Rt(A)}function Vt(A){const b=A.texture,W=e.get(A),nt=e.get(b);A.addEventListener("dispose",E);const ot=A.textures,et=A.isWebGLCubeRenderTarget===!0,xt=ot.length>1;if(xt||(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=b.version,r.memory.textures++),et){W.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[mt]=[];for(let ft=0;ft<b.mipmaps.length;ft++)W.__webglFramebuffer[mt][ft]=o.createFramebuffer()}else W.__webglFramebuffer[mt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)W.__webglFramebuffer[mt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(xt)for(let mt=0,ft=ot.length;mt<ft;mt++){const Lt=e.get(ot[mt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture(),r.memory.textures++)}if(A.samples>0&&Ft(A)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let mt=0;mt<ot.length;mt++){const ft=ot[mt];W.__webglColorRenderbuffer[mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[mt]);const Lt=s.convert(ft.format,ft.colorSpace),lt=s.convert(ft.type),bt=v(ft.internalFormat,Lt,lt,ft.colorSpace,A.isXRRenderTarget===!0),Ht=It(A);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,bt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+mt,o.RENDERBUFFER,W.__webglColorRenderbuffer[mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),it(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(et){n.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture),wt(o.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)B(W.__webglFramebuffer[mt][ft],A,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ft);else B(W.__webglFramebuffer[mt],A,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);x(b)&&p(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xt){for(let mt=0,ft=ot.length;mt<ft;mt++){const Lt=ot[mt],lt=e.get(Lt);n.bindTexture(o.TEXTURE_2D,lt.__webglTexture),wt(o.TEXTURE_2D,Lt),B(W.__webglFramebuffer,A,Lt,o.COLOR_ATTACHMENT0+mt,o.TEXTURE_2D,0),x(Lt)&&p(o.TEXTURE_2D)}n.unbindTexture()}else{let mt=o.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(mt=A.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(mt,nt.__webglTexture),wt(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)B(W.__webglFramebuffer[ft],A,b,o.COLOR_ATTACHMENT0,mt,ft);else B(W.__webglFramebuffer,A,b,o.COLOR_ATTACHMENT0,mt,0);x(b)&&p(mt),n.unbindTexture()}A.depthBuffer&&Rt(A)}function zt(A){const b=A.textures;for(let W=0,nt=b.length;W<nt;W++){const ot=b[W];if(x(ot)){const et=M(A),xt=e.get(ot).__webglTexture;n.bindTexture(et,xt),p(et),n.unbindTexture()}}}const jt=[],U=[];function Wt(A){if(A.samples>0){if(Ft(A)===!1){const b=A.textures,W=A.width,nt=A.height;let ot=o.COLOR_BUFFER_BIT;const et=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=e.get(A),mt=b.length>1;if(mt)for(let ft=0;ft<b.length;ft++)n.bindFramebuffer(o.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=o.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=o.STENCIL_BUFFER_BIT)),mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Lt=e.get(b[ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Lt,0)}o.blitFramebuffer(0,0,W,nt,0,0,W,nt,ot,o.NEAREST),l===!0&&(jt.length=0,U.length=0,jt.push(o.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(jt.push(et),U.push(et),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,U)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),mt)for(let ft=0;ft<b.length;ft++){n.bindFramebuffer(o.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Lt=e.get(b[ft]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,Lt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function It(A){return Math.min(i.maxSamples,A.samples)}function Ft(A){const b=e.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(A){const b=r.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Xt(A,b){const W=A.colorSpace,nt=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==ao&&W!==li&&(we.getTransfer(W)===Se?(nt!==Pn||ot!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=Ut,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=B,this.useMultisampledRTT=Ft}function Jm(o,t){function n(e,i=li){let s;const r=we.getTransfer(i);if(e===Qn)return o.UNSIGNED_BYTE;if(e===xa)return o.UNSIGNED_SHORT_4_4_4_4;if(e===_a)return o.UNSIGNED_SHORT_5_5_5_1;if(e===Hc)return o.UNSIGNED_INT_5_9_9_9_REV;if(e===Bc)return o.BYTE;if(e===Gc)return o.SHORT;if(e===Io)return o.UNSIGNED_SHORT;if(e===ga)return o.INT;if(e===Ai)return o.UNSIGNED_INT;if(e===$n)return o.FLOAT;if(e===Oo)return o.HALF_FLOAT;if(e===Vc)return o.ALPHA;if(e===Wc)return o.RGB;if(e===Pn)return o.RGBA;if(e===Xc)return o.LUMINANCE;if(e===Yc)return o.LUMINANCE_ALPHA;if(e===Ji)return o.DEPTH_COMPONENT;if(e===oo)return o.DEPTH_STENCIL;if(e===Zc)return o.RED;if(e===wa)return o.RED_INTEGER;if(e===qc)return o.RG;if(e===va)return o.RG_INTEGER;if(e===ya)return o.RGBA_INTEGER;if(e===vs||e===ys||e===Ms||e===Ss)if(r===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(e===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(e===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(e===Or||e===kr||e===Br||e===Gr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(e===Or)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===kr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===Br)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===Gr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(e===Hr||e===Vr||e===Wr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(e===Hr||e===Vr)return r===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(e===Wr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(e===Xr||e===Yr||e===Zr||e===qr||e===$r||e===Kr||e===Jr||e===jr||e===Qr||e===ta||e===ea||e===na||e===ia||e===oa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(e===Xr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===Yr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===Zr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===qr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===$r)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===Kr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===Jr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===jr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===Qr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===ta)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===ea)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===na)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===ia)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===oa)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(e===bs||e===sa||e===ra)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(e===bs)return r===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===sa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===ra)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(e===$c||e===aa||e===la||e===ca)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(e===bs)return s.COMPRESSED_RED_RGTC1_EXT;if(e===aa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===la)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return e===io?o.UNSIGNED_INT_24_8:o[e]!==void 0?o[e]:null}return{convert:n}}class jm extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qm={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const e of t.hand.values())this._getHandJoint(n,e)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,e){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const x=n.getJointPose(_,e),p=this._getHandJoint(c,_);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,e),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(t.targetRaySpace,e),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const e=new At;e.matrixAutoUpdate=!1,e.visible=!1,t.joints[n.jointName]=e,t.add(e)}return t.joints[n.jointName]}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
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

}`;class n2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,e){if(this.texture===null){const i=new cn,s=t.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!=e.depthNear||n.depthFar!=e.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,e=new di({vertexShader:t2,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new g(new Kt(20,20),e)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i2 extends lo{constructor(t,n){super();const e=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const _=new n2,x=n.getContextAttributes();let p=null,M=null;const v=[],w=[],P=new Bt;let R=null;const E=new yn;E.viewport=new Te;const I=new yn;I.viewport=new Te;const S=[E,I],y=new jm;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let z=v[H];return z===void 0&&(z=new gr,v[H]=z),z.getTargetRaySpace()},this.getControllerGrip=function(H){let z=v[H];return z===void 0&&(z=new gr,v[H]=z),z.getGripSpace()},this.getHand=function(H){let z=v[H];return z===void 0&&(z=new gr,v[H]=z),z.getHandSpace()};function V(H){const z=w.indexOf(H.inputSource);if(z===-1)return;const B=v[z];B!==void 0&&(B.update(H.inputSource,H.frame,c||r),B.dispatchEvent({type:H.type,data:H.inputSource}))}function J(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",$);for(let H=0;H<v.length;H++){const z=w[H];z!==null&&(w[H]=null,v[H].disconnect(z))}D=null,G=null,_.reset(),t.setRenderTarget(p),d=null,u=null,f=null,i=null,M=null,vt.stop(),e.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",J),i.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const z={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,n,z),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ri(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let z=null,B=null,it=null;x.depth&&(it=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,z=x.stencil?oo:Ji,B=x.stencil?io:Ai);const dt={colorFormat:n.RGBA8,depthFormat:it,scaleFactor:s};f=new XRWebGLBinding(i,n),u=f.createProjectionLayer(dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ri(u.textureWidth,u.textureHeight,{format:Pn,type:Qn,depthTexture:new df(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),vt.setContext(i),vt.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(H){for(let z=0;z<H.removed.length;z++){const B=H.removed[z],it=w.indexOf(B);it>=0&&(w[it]=null,v[it].disconnect(B))}for(let z=0;z<H.added.length;z++){const B=H.added[z];let it=w.indexOf(B);if(it===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=w.length){w.push(B),it=Rt;break}else if(w[Rt]===null){w[Rt]=B,it=Rt;break}if(it===-1)break}const dt=v[it];dt&&dt.connect(B)}}const X=new N,Q=new N;function Y(H,z,B){X.setFromMatrixPosition(z.matrixWorld),Q.setFromMatrixPosition(B.matrixWorld);const it=X.distanceTo(Q),dt=z.projectionMatrix.elements,Rt=B.projectionMatrix.elements,Ut=dt[14]/(dt[10]-1),Vt=dt[14]/(dt[10]+1),zt=(dt[9]+1)/dt[5],jt=(dt[9]-1)/dt[5],U=(dt[8]-1)/dt[0],Wt=(Rt[8]+1)/Rt[0],It=Ut*U,Ft=Ut*Wt,Tt=it/(-U+Wt),Xt=Tt*-U;if(z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Xt),H.translateZ(Tt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),dt[10]===-1)H.projectionMatrix.copy(z.projectionMatrix),H.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const St=Ut+Tt,A=Vt+Tt,b=It-Xt,W=Ft+(it-Xt),nt=zt*Vt/A*St,ot=jt*Vt/A*St;H.projectionMatrix.makePerspective(b,W,nt,ot,St,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function at(H,z){z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let z=H.near,B=H.far;_.texture!==null&&(_.depthNear>0&&(z=_.depthNear),_.depthFar>0&&(B=_.depthFar)),y.near=I.near=E.near=z,y.far=I.far=E.far=B,(D!==y.near||G!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,G=y.far),E.layers.mask=H.layers.mask|2,I.layers.mask=H.layers.mask|4,y.layers.mask=E.layers.mask|I.layers.mask;const it=H.parent,dt=y.cameras;at(y,it);for(let Rt=0;Rt<dt.length;Rt++)at(dt[Rt],it);dt.length===2?Y(y,E,I):y.projectionMatrix.copy(E.projectionMatrix),ct(H,y,it)};function ct(H,z,B){B===null?H.matrix.copy(z.matrixWorld):(H.matrix.copy(B.matrixWorld),H.matrix.invert(),H.matrix.multiply(z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(z.projectionMatrix),H.projectionMatrixInverse.copy(z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Lo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ht=null;function wt(H,z){if(h=z.getViewerPose(c||r),m=z,h!==null){const B=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let it=!1;B.length!==y.cameras.length&&(y.cameras.length=0,it=!0);for(let Rt=0;Rt<B.length;Rt++){const Ut=B[Rt];let Vt=null;if(d!==null)Vt=d.getViewport(Ut);else{const jt=f.getViewSubImage(u,Ut);Vt=jt.viewport,Rt===0&&(t.setRenderTargetTextures(M,jt.colorTexture,u.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(M))}let zt=S[Rt];zt===void 0&&(zt=new yn,zt.layers.enable(Rt),zt.viewport=new Te,S[Rt]=zt),zt.matrix.fromArray(Ut.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Ut.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Rt===0&&(y.matrix.copy(zt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),it===!0&&y.cameras.push(zt)}const dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const Rt=f.getDepthInformation(B[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,i.renderState)}}for(let B=0;B<v.length;B++){const it=w[B],dt=v[B];it!==null&&dt!==void 0&&dt.update(it,z,c||r)}ht&&ht(H,z),z.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:z}),m=null}const vt=new ff;vt.setAnimationLoop(wt),this.setAnimationLoop=function(H){ht=H},this.dispose=function(){}}}const vi=new Un,o2=new Ie;function s2(o,t){function n(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function e(x,p){p.color.getRGB(x.fogColor.value,af(o)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,M,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(x,p):p.isMeshToonMaterial?(s(x,p),f(x,p)):p.isMeshPhongMaterial?(s(x,p),h(x,p)):p.isMeshStandardMaterial?(s(x,p),u(x,p),p.isMeshPhysicalMaterial&&d(x,p,w)):p.isMeshMatcapMaterial?(s(x,p),m(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),_(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(r(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,M,v):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,n(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===hn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,n(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===hn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,n(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,n(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,w=M.envMapRotation;v&&(x.envMap.value=v,vi.copy(w),vi.x*=-1,vi.y*=-1,vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),x.envMapRotation.value.setFromMatrix4(o2.makeRotationFromEuler(vi)),x.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,x.aoMapTransform))}function r(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,M,v){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*M,x.scale.value=v*.5,p.map&&(x.map.value=p.map,n(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function u(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,M){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function _(x,p){const M=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function r2(o,t,n,e){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const w=v.program;e.uniformBlockBinding(M,w)}function c(M,v){let w=i[M.id];w===void 0&&(m(M),w=h(M),i[M.id]=w,M.addEventListener("dispose",x));const P=v.program;e.updateUBOMapping(M,P);const R=t.render.frame;s[M.id]!==R&&(u(M),s[M.id]=R)}function h(M){const v=f();M.__bindingPointIndex=v;const w=o.createBuffer(),P=M.__size,R=M.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,P,R),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,v,w),w}function f(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=i[M.id],w=M.uniforms,P=M.__cache;o.bindBuffer(o.UNIFORM_BUFFER,v);for(let R=0,E=w.length;R<E;R++){const I=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,y=I.length;S<y;S++){const D=I[S];if(d(D,R,S,P)===!0){const G=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let $=0;$<V.length;$++){const X=V[$],Q=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,G+J,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,G,D.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function d(M,v,w,P){const R=M.value,E=v+"_"+w;if(P[E]===void 0)return typeof R=="number"||typeof R=="boolean"?P[E]=R:P[E]=R.clone(),!0;{const I=P[E];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[E]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function m(M){const v=M.uniforms;let w=0;const P=16;for(let E=0,I=v.length;E<I;E++){const S=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,D=S.length;y<D;y++){const G=S[y],V=Array.isArray(G.value)?G.value:[G.value];for(let J=0,$=V.length;J<$;J++){const X=V[J],Q=_(X),Y=w%P,at=Y%Q.boundary,ct=Y+at;w+=at,ct!==0&&P-ct<Q.storage&&(w+=P-ct),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=Q.storage}}}const R=w%P;return R>0&&(w+=P-R),M.__size=w,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function x(M){const v=M.target;v.removeEventListener("dispose",x);const w=r.indexOf(v.__bindingPointIndex);r.splice(w,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const M in i)o.deleteBuffer(i[M]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class a2{constructor(t={}){const{canvas:n=$h(),context:e=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(e!==null){if(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=e.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const M=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=fi,this.toneMappingExposure=1;const w=this;let P=!1,R=0,E=0,I=null,S=-1,y=null;const D=new Te,G=new Te;let V=null;const J=new me(0);let $=0,X=n.width,Q=n.height,Y=1,at=null,ct=null;const ht=new Te(0,0,X,Q),wt=new Te(0,0,X,Q);let vt=!1;const H=new Sa;let z=!1,B=!1;const it=new Ie,dt=new Ie,Rt=new N,Ut=new Te,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function jt(){return I===null?Y:1}let U=e;function Wt(T,O){return n.getContext(T,O)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ma}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",gt,!1),n.addEventListener("webglcontextcreationerror",pt,!1),U===null){const O="webgl2";if(U=Wt(O,T),U===null)throw Wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let It,Ft,Tt,Xt,St,A,b,W,nt,ot,et,xt,mt,ft,Lt,lt,bt,Ht,Jt,Dt,oe,Qt,pe,F;function yt(){It=new dp(U),It.init(),Qt=new Jm(U,It),Ft=new rp(U,It,t,Qt),Tt=new qm(U,It),Ft.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),Xt=new mp(U),St=new Dm,A=new Km(U,It,Tt,St,Ft,Qt,Xt),b=new lp(w),W=new hp(w),nt=new Md(U),pe=new op(U,nt),ot=new up(U,nt,Xt,pe),et=new xp(U,ot,nt,Xt),Jt=new gp(U,Ft,A),lt=new ap(St),xt=new Lm(w,b,W,It,Ft,pe,lt),mt=new s2(w,St),ft=new Nm,Lt=new Gm(It),Ht=new ip(w,b,W,Tt,et,d,l),bt=new Ym(w,et,Ft),F=new r2(U,Xt,Ft,Tt),Dt=new sp(U,It,Xt),oe=new pp(U,It,Xt),Xt.programs=xt.programs,w.capabilities=Ft,w.extensions=It,w.properties=St,w.renderLists=ft,w.shadowMap=bt,w.state=Tt,w.info=Xt}yt();const tt=new i2(w,U);this.xr=tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=It.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=It.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(X,Q,!1))},this.getSize=function(T){return T.set(X,Q)},this.setSize=function(T,O,q=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Q=O,n.width=Math.floor(T*Y),n.height=Math.floor(O*Y),q===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(X*Y,Q*Y).floor()},this.setDrawingBufferSize=function(T,O,q){X=T,Q=O,Y=q,n.width=Math.floor(T*q),n.height=Math.floor(O*q),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,O,q,K){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,O,q,K),Tt.viewport(D.copy(ht).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(wt)},this.setScissor=function(T,O,q,K){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,O,q,K),Tt.scissor(G.copy(wt).multiplyScalar(Y).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(T){Tt.setScissorTest(vt=T)},this.setOpaqueSort=function(T){at=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(T=!0,O=!0,q=!0){let K=0;if(T){let k=!1;if(I!==null){const ut=I.texture.format;k=ut===ya||ut===va||ut===wa}if(k){const ut=I.texture.type,Et=ut===Qn||ut===Ai||ut===Io||ut===io||ut===xa||ut===_a,kt=Ht.getClearColor(),Ot=Ht.getClearAlpha(),ee=kt.r,le=kt.g,rt=kt.b;Et?(m[0]=ee,m[1]=le,m[2]=rt,m[3]=Ot,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=ee,_[1]=le,_[2]=rt,_[3]=Ot,U.clearBufferiv(U.COLOR,0,_))}else K|=U.COLOR_BUFFER_BIT}O&&(K|=U.DEPTH_BUFFER_BIT),q&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",gt,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),ft.dispose(),Lt.dispose(),St.dispose(),b.dispose(),W.dispose(),et.dispose(),pe.dispose(),F.dispose(),xt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Oe),tt.removeEventListener("sessionend",Ae),ge.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=Xt.autoReset,O=bt.enabled,q=bt.autoUpdate,K=bt.needsUpdate,k=bt.type;yt(),Xt.autoReset=T,bt.enabled=O,bt.autoUpdate=q,bt.needsUpdate=K,bt.type=k}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){const O=T.target;O.removeEventListener("dispose",Gt),se(O)}function se(T){Ee(T),St.remove(T)}function Ee(T){const O=St.get(T).programs;O!==void 0&&(O.forEach(function(q){xt.releaseProgram(q)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,q,K,k,ut){O===null&&(O=Vt);const Et=k.isMesh&&k.matrixWorld.determinant()<0,kt=Re(T,O,q,K,k);Tt.setMaterial(K,Et);let Ot=q.index,ee=1;if(K.wireframe===!0){if(Ot=ot.getWireframeAttribute(q),Ot===void 0)return;ee=2}const le=q.drawRange,rt=q.attributes.position;let Mt=le.start*ee,qt=(le.start+le.count)*ee;ut!==null&&(Mt=Math.max(Mt,ut.start*ee),qt=Math.min(qt,(ut.start+ut.count)*ee)),Ot!==null?(Mt=Math.max(Mt,0),qt=Math.min(qt,Ot.count)):rt!=null&&(Mt=Math.max(Mt,0),qt=Math.min(qt,rt.count));const ne=qt-Mt;if(ne<0||ne===1/0)return;pe.setup(k,K,kt,q,Ot);let ye,ce=Dt;if(Ot!==null&&(ye=nt.get(Ot),ce=oe,ce.setIndex(ye)),k.isMesh)K.wireframe===!0?(Tt.setLineWidth(K.wireframeLinewidth*jt()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(k.isLine){let Nt=K.linewidth;Nt===void 0&&(Nt=1),Tt.setLineWidth(Nt*jt()),k.isLineSegments?ce.setMode(U.LINES):k.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else k.isPoints?ce.setMode(U.POINTS):k.isSprite&&ce.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,qe=k._multiDrawCounts,xe=k._multiDrawCount,Qe=Ot?nt.get(Ot).bytesPerElement:1,Sn=St.get(K).currentProgram.getUniforms();for(let ke=0;ke<xe;ke++)Sn.setValue(U,"_gl_DrawID",ke),ce.render(Nt[ke]/Qe,qe[ke])}else if(k.isInstancedMesh)ce.renderInstances(Mt,ne,k.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,qe=Math.min(q.instanceCount,Nt);ce.renderInstances(Mt,ne,qe)}else ce.render(Mt,ne)};function re(T,O,q){T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Ze(T,O,q),T.side=hi,T.needsUpdate=!0,Ze(T,O,q),T.side=nn):Ze(T,O,q)}this.compile=function(T,O,q=null){q===null&&(q=T),p=Lt.get(q),p.init(O),v.push(p),q.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==q&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const K=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ut=k.material;if(ut)if(Array.isArray(ut))for(let Et=0;Et<ut.length;Et++){const kt=ut[Et];re(kt,q,k),K.add(kt)}else re(ut,q,k),K.add(ut)}),v.pop(),p=null,K},this.compileAsync=function(T,O,q=null){const K=this.compile(T,O,q);return new Promise(k=>{function ut(){if(K.forEach(function(Et){St.get(Et).currentProgram.isReady()&&K.delete(Et)}),K.size===0){k(T);return}setTimeout(ut,10)}It.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let De=null;function ze(T){De&&De(T)}function Oe(){ge.stop()}function Ae(){ge.start()}const ge=new ff;ge.setAnimationLoop(ze),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(T){De=T,tt.setAnimationLoop(T),T===null?ge.stop():ge.start()},tt.addEventListener("sessionstart",Oe),tt.addEventListener("sessionend",Ae),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(O),O=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,O,I),p=Lt.get(T,v.length),p.init(O),v.push(p),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(dt),B=this.localClippingEnabled,z=lt.init(this.clippingPlanes,B),x=ft.get(T,M.length),x.init(),M.push(x),tt.enabled===!0&&tt.isPresenting===!0){const ut=w.xr.getDepthSensingMesh();ut!==null&&Ne(ut,O,-1/0,w.sortObjects)}Ne(T,O,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(at,ct),zt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,zt&&Ht.addToRenderList(x,T),this.info.render.frame++,z===!0&&lt.beginShadows();const q=p.state.shadowsArray;bt.render(q,T,O),z===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,k=x.transmissive;if(p.setupLights(),O.isArrayCamera){const ut=O.cameras;if(k.length>0)for(let Et=0,kt=ut.length;Et<kt;Et++){const Ot=ut[Et];te(K,k,T,Ot)}zt&&Ht.render(T);for(let Et=0,kt=ut.length;Et<kt;Et++){const Ot=ut[Et];fe(x,T,Ot,Ot.viewport)}}else k.length>0&&te(K,k,T,O),zt&&Ht.render(T),fe(x,T,O);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(w,T,O),pe.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],z===!0&&lt.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function Ne(T,O,q,K){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){K&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const Et=et.update(T),kt=T.material;kt.visible&&x.push(T,Et,kt,q,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||H.intersectsObject(T))){const Et=et.update(T),kt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ut.copy(Et.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(kt)){const Ot=Et.groups;for(let ee=0,le=Ot.length;ee<le;ee++){const rt=Ot[ee],Mt=kt[rt.materialIndex];Mt&&Mt.visible&&x.push(T,Et,Mt,q,Ut.z,rt)}}else kt.visible&&x.push(T,Et,kt,q,Ut.z,null)}}const ut=T.children;for(let Et=0,kt=ut.length;Et<kt;Et++)Ne(ut[Et],O,q,K)}function fe(T,O,q,K){const k=T.opaque,ut=T.transmissive,Et=T.transparent;p.setupLightsView(q),z===!0&&lt.setGlobalState(w.clippingPlanes,q),K&&Tt.viewport(D.copy(K)),k.length>0&&je(k,O,q),ut.length>0&&je(ut,O,q),Et.length>0&&je(Et,O,q),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function te(T,O,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ri(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Oo:Qn,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const ut=p.state.transmissionRenderTarget[K.id],Et=K.viewport||D;ut.setSize(Et.z,Et.w);const kt=w.getRenderTarget();w.setRenderTarget(ut),w.getClearColor(J),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),w.clear(),zt&&Ht.render(q);const Ot=w.toneMapping;w.toneMapping=fi;const ee=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),z===!0&&lt.setGlobalState(w.clippingPlanes,K),je(T,q,K),A.updateMultisampleRenderTarget(ut),A.updateRenderTargetMipmap(ut),It.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let rt=0,Mt=O.length;rt<Mt;rt++){const qt=O[rt],ne=qt.object,ye=qt.geometry,ce=qt.material,Nt=qt.group;if(ce.side===nn&&ne.layers.test(K.layers)){const qe=ce.side;ce.side=hn,ce.needsUpdate=!0,Ve(ne,q,K,ye,ce,Nt),ce.side=qe,ce.needsUpdate=!0,le=!0}}le===!0&&(A.updateMultisampleRenderTarget(ut),A.updateRenderTargetMipmap(ut))}w.setRenderTarget(kt),w.setClearColor(J,$),ee!==void 0&&(K.viewport=ee),w.toneMapping=Ot}function je(T,O,q){const K=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ut=T.length;k<ut;k++){const Et=T[k],kt=Et.object,Ot=Et.geometry,ee=K===null?Et.material:K,le=Et.group;kt.layers.test(q.layers)&&Ve(kt,O,q,Ot,ee,le)}}function Ve(T,O,q,K,k,ut){T.onBeforeRender(w,O,q,K,k,ut),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(w,O,q,K,T,ut),k.transparent===!0&&k.side===nn&&k.forceSinglePass===!1?(k.side=hn,k.needsUpdate=!0,w.renderBufferDirect(q,O,K,k,T,ut),k.side=hi,k.needsUpdate=!0,w.renderBufferDirect(q,O,K,k,T,ut),k.side=nn):w.renderBufferDirect(q,O,K,k,T,ut),T.onAfterRender(w,O,q,K,k,ut)}function Ze(T,O,q){O.isScene!==!0&&(O=Vt);const K=St.get(T),k=p.state.lights,ut=p.state.shadowsArray,Et=k.state.version,kt=xt.getParameters(T,k.state,ut,O,q),Ot=xt.getProgramCacheKey(kt);let ee=K.programs;K.environment=T.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(T.isMeshStandardMaterial?W:b).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,ee===void 0&&(T.addEventListener("dispose",Gt),ee=new Map,K.programs=ee);let le=ee.get(Ot);if(le!==void 0){if(K.currentProgram===le&&K.lightsStateVersion===Et)return ve(T,kt),le}else kt.uniforms=xt.getUniforms(T),T.onBeforeCompile(kt,w),le=xt.acquireProgram(kt,Ot),ee.set(Ot,le),K.uniforms=kt.uniforms;const rt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(rt.clippingPlanes=lt.uniform),ve(T,kt),K.needsLights=Zt(T),K.lightsStateVersion=Et,K.needsLights&&(rt.ambientLightColor.value=k.state.ambient,rt.lightProbe.value=k.state.probe,rt.directionalLights.value=k.state.directional,rt.directionalLightShadows.value=k.state.directionalShadow,rt.spotLights.value=k.state.spot,rt.spotLightShadows.value=k.state.spotShadow,rt.rectAreaLights.value=k.state.rectArea,rt.ltc_1.value=k.state.rectAreaLTC1,rt.ltc_2.value=k.state.rectAreaLTC2,rt.pointLights.value=k.state.point,rt.pointLightShadows.value=k.state.pointShadow,rt.hemisphereLights.value=k.state.hemi,rt.directionalShadowMap.value=k.state.directionalShadowMap,rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,rt.spotShadowMap.value=k.state.spotShadowMap,rt.spotLightMatrix.value=k.state.spotLightMatrix,rt.spotLightMap.value=k.state.spotLightMap,rt.pointShadowMap.value=k.state.pointShadowMap,rt.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=le,K.uniformsList=null,le}function dn(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Ts.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function ve(T,O){const q=St.get(T);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Re(T,O,q,K,k){O.isScene!==!0&&(O=Vt),A.resetTextureUnits();const ut=O.fog,Et=K.isMeshStandardMaterial?O.environment:null,kt=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ao,Ot=(K.isMeshStandardMaterial?W:b).get(K.envMap||Et),ee=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,le=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),rt=!!q.morphAttributes.position,Mt=!!q.morphAttributes.normal,qt=!!q.morphAttributes.color;let ne=fi;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ne=w.toneMapping);const ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=ye!==void 0?ye.length:0,Nt=St.get(K),qe=p.state.lights;if(z===!0&&(B===!0||T!==y)){const We=T===y&&K.id===S;lt.setState(K,T,We)}let xe=!1;K.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==qe.state.version||Nt.outputColorSpace!==kt||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==Ot||K.fog===!0&&Nt.fog!==ut||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==ee||Nt.vertexTangents!==le||Nt.morphTargets!==rt||Nt.morphNormals!==Mt||Nt.morphColors!==qt||Nt.toneMapping!==ne||Nt.morphTargetsCount!==ce)&&(xe=!0):(xe=!0,Nt.__version=K.version);let Qe=Nt.currentProgram;xe===!0&&(Qe=Ze(K,O,k));let Sn=!1,ke=!1,ui=!1;const Me=Qe.getUniforms(),bn=Nt.uniforms;if(Tt.useProgram(Qe.program)&&(Sn=!0,ke=!0,ui=!0),K.id!==S&&(S=K.id,ke=!0),Sn||y!==T){Tt.buffers.depth.getReversed()?(it.copy(T.projectionMatrix),Jh(it),jh(it),Me.setValue(U,"projectionMatrix",it)):Me.setValue(U,"projectionMatrix",T.projectionMatrix),Me.setValue(U,"viewMatrix",T.matrixWorldInverse);const sn=Me.map.cameraPosition;sn!==void 0&&sn.setValue(U,Rt.setFromMatrixPosition(T.matrixWorld)),Ft.logarithmicDepthBuffer&&Me.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Me.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,ke=!0,ui=!0)}if(k.isSkinnedMesh){Me.setOptional(U,k,"bindMatrix"),Me.setOptional(U,k,"bindMatrixInverse");const We=k.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Me.setValue(U,"boneTexture",We.boneTexture,A))}k.isBatchedMesh&&(Me.setOptional(U,k,"batchingTexture"),Me.setValue(U,"batchingTexture",k._matricesTexture,A),Me.setOptional(U,k,"batchingIdTexture"),Me.setValue(U,"batchingIdTexture",k._indirectTexture,A),Me.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&Me.setValue(U,"batchingColorTexture",k._colorsTexture,A));const Hn=q.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Jt.update(k,q,Qe),(ke||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,Me.setValue(U,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(bn.envMap.value=Ot,bn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&O.environment!==null&&(bn.envMapIntensity.value=O.environmentIntensity),ke&&(Me.setValue(U,"toneMappingExposure",w.toneMappingExposure),Nt.needsLights&&Yt(bn,ui),ut&&K.fog===!0&&mt.refreshFogUniforms(bn,ut),mt.refreshMaterialUniforms(bn,K,Y,Q,p.state.transmissionRenderTarget[T.id]),Ts.upload(U,dn(Nt),bn,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ts.upload(U,dn(Nt),bn,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Me.setValue(U,"center",k.center),Me.setValue(U,"modelViewMatrix",k.modelViewMatrix),Me.setValue(U,"normalMatrix",k.normalMatrix),Me.setValue(U,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const We=K.uniformsGroups;for(let sn=0,un=We.length;sn<un;sn++){const ti=We[sn];F.update(ti,Qe),F.bind(ti,Qe)}}return Qe}function Yt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Zt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,O,q){St.get(T.texture).__webglTexture=O,St.get(T.depthTexture).__webglTexture=q;const K=St.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const q=St.get(T);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,q=0){I=T,R=O,E=q;let K=!0,k=null,ut=!1,Et=!1;if(T){const Ot=St.get(T);if(Ot.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(Ot.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ot.__hasExternalTextures)A.rebindTextures(T,St.get(T.texture).__webglTexture,St.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const rt=T.depthTexture;if(Ot.__boundDepthTexture!==rt){if(rt!==null&&St.has(rt)&&(T.width!==rt.image.width||T.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const ee=T.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Et=!0);const le=St.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(le[O])?k=le[O][q]:k=le[O],ut=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?k=St.get(T).__webglMultisampledFramebuffer:Array.isArray(le)?k=le[q]:k=le,D.copy(T.viewport),G.copy(T.scissor),V=T.scissorTest}else D.copy(ht).multiplyScalar(Y).floor(),G.copy(wt).multiplyScalar(Y).floor(),V=vt;if(Tt.bindFramebuffer(U.FRAMEBUFFER,k)&&K&&Tt.drawBuffers(T,k),Tt.viewport(D),Tt.scissor(G),Tt.setScissorTest(V),ut){const Ot=St.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ot.__webglTexture,q)}else if(Et){const Ot=St.get(T.texture),ee=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,q||0,ee)}S=-1},this.readRenderTargetPixels=function(T,O,q,K,k,ut,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(kt=kt[Et]),kt){Tt.bindFramebuffer(U.FRAMEBUFFER,kt);try{const Ot=T.texture,ee=Ot.format,le=Ot.type;if(!Ft.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-K&&q>=0&&q<=T.height-k&&U.readPixels(O,q,K,k,Qt.convert(ee),Qt.convert(le),ut)}finally{const Ot=I!==null?St.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,O,q,K,k,ut,Et){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(kt=kt[Et]),kt){const Ot=T.texture,ee=Ot.format,le=Ot.type;if(!Ft.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-K&&q>=0&&q<=T.height-k){Tt.bindFramebuffer(U.FRAMEBUFFER,kt);const rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.bufferData(U.PIXEL_PACK_BUFFER,ut.byteLength,U.STREAM_READ),U.readPixels(O,q,K,k,Qt.convert(ee),Qt.convert(le),0);const Mt=I!==null?St.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Mt);const qt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kh(U,qt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ut),U.deleteBuffer(rt),U.deleteSync(qt),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,q=0){T.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-q),k=Math.floor(T.image.width*K),ut=Math.floor(T.image.height*K),Et=O!==null?O.x:0,kt=O!==null?O.y:0;A.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Et,kt,k,ut),Tt.unbindTexture()},this.copyTextureToTexture=function(T,O,q=null,K=null,k=0){T.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],O=arguments[2],k=arguments[3]||0,q=null);let ut,Et,kt,Ot,ee,le,rt,Mt,qt;const ne=T.isCompressedTexture?T.mipmaps[k]:T.image;q!==null?(ut=q.max.x-q.min.x,Et=q.max.y-q.min.y,kt=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,ee=q.min.y,le=q.isBox3?q.min.z:0):(ut=ne.width,Et=ne.height,kt=ne.depth||1,Ot=0,ee=0,le=0),K!==null?(rt=K.x,Mt=K.y,qt=K.z):(rt=0,Mt=0,qt=0);const ye=Qt.convert(O.format),ce=Qt.convert(O.type);let Nt;O.isData3DTexture?(A.setTexture3D(O,0),Nt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Nt=U.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Nt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const qe=U.getParameter(U.UNPACK_ROW_LENGTH),xe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Qe=U.getParameter(U.UNPACK_SKIP_PIXELS),Sn=U.getParameter(U.UNPACK_SKIP_ROWS),ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ne.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),U.pixelStorei(U.UNPACK_SKIP_ROWS,ee),U.pixelStorei(U.UNPACK_SKIP_IMAGES,le);const ui=T.isDataArrayTexture||T.isData3DTexture,Me=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const bn=St.get(T),Hn=St.get(O),We=St.get(bn.__renderTarget),sn=St.get(Hn.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,We.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let un=0;un<kt;un++)ui&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(T).__webglTexture,k,le+un),T.isDepthTexture?(Me&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(O).__webglTexture,k,qt+un),U.blitFramebuffer(Ot,ee,ut,Et,rt,Mt,ut,Et,U.DEPTH_BUFFER_BIT,U.NEAREST)):Me?U.copyTexSubImage3D(Nt,k,rt,Mt,qt+un,Ot,ee,ut,Et):U.copyTexSubImage2D(Nt,k,rt,Mt,qt+un,Ot,ee,ut,Et);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Me?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Nt,k,rt,Mt,qt,ut,Et,kt,ye,ce,ne.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,k,rt,Mt,qt,ut,Et,kt,ye,ne.data):U.texSubImage3D(Nt,k,rt,Mt,qt,ut,Et,kt,ye,ce,ne):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,rt,Mt,ut,Et,ye,ce,ne.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,rt,Mt,ne.width,ne.height,ye,ne.data):U.texSubImage2D(U.TEXTURE_2D,k,rt,Mt,ut,Et,ye,ce,ne);U.pixelStorei(U.UNPACK_ROW_LENGTH,qe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Sn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke),k===0&&O.generateMipmaps&&U.generateMipmap(Nt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,O,q=null,K=null,k=0){return T.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,K=arguments[1]||null,T=arguments[2],O=arguments[3],k=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,q,K,k)},this.initRenderTarget=function(T){St.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){R=0,E=0,I=null,Tt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}class Ta{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(t),this.density=n}clone(){return new Ta(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class l2 extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class xf extends fo{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rs=new N,Cs=new N,Ql=new Ie,_o=new ef,fs=new Ls,xr=new N,tc=new N;class c2 extends Ke{constructor(t=new on,n=new xf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,e=[0];for(let i=1,s=n.count;i<s;i++)Rs.fromBufferAttribute(n,i-1),Cs.fromBufferAttribute(n,i),e[i]=e[i-1],e[i]+=Rs.distanceTo(Cs);t.setAttribute("lineDistance",new Pe(e,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const e=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=e.drawRange;if(e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere),fs.applyMatrix4(i),fs.radius+=s,t.ray.intersectsSphere(fs)===!1)return;Ql.copy(i).invert(),_o.copy(t.ray).applyMatrix4(Ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=e.index,u=e.attributes.position;if(h!==null){const d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=d,x=m-1;_<x;_+=c){const p=h.getX(_),M=h.getX(_+1),v=hs(this,t,_o,l,p,M);v&&n.push(v)}if(this.isLineLoop){const _=h.getX(m-1),x=h.getX(d),p=hs(this,t,_o,l,_,x);p&&n.push(p)}}else{const d=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let _=d,x=m-1;_<x;_+=c){const p=hs(this,t,_o,l,_,_+1);p&&n.push(p)}if(this.isLineLoop){const _=hs(this,t,_o,l,m-1,d);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const i=n[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hs(o,t,n,e,i,s){const r=o.geometry.attributes.position;if(Rs.fromBufferAttribute(r,i),Cs.fromBufferAttribute(r,s),n.distanceSqToSegment(Rs,Cs,xr,tc)>e)return;xr.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(xr);if(!(l<t.near||l>t.far))return{distance:l,point:tc.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}class ie extends cn{constructor(t,n,e,i,s,r,a,l,c){super(t,n,e,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const e=this.getUtoTmapping(t);return this.getPoint(e,n)}getPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return n}getSpacedPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPointAt(e/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let e,i=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)e=this.getPoint(r/t),s+=e.distanceTo(i),n.push(s),i=e;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const e=this.getLengths();let i=0;const s=e.length;let r;n?r=n:r=t*e[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=e[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,e[i]===r)return i/(s-1);const h=e[i],u=e[i+1]-h,d=(r-h)/u;return(i+d)/(s-1)}getTangent(t,n){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=n||(r.isVector2?new Bt:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,n){const e=this.getUtoTmapping(t);return this.getTangent(e,n)}computeFrenetFrames(t,n){const e=new N,i=[],s=[],r=[],a=new N,l=new Ie;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new N)}s[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,e.set(1,0,0)),f<=c&&(c=f,e.set(0,1,0)),u<=c&&e.set(0,0,1),a.crossVectors(i[0],e).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Je(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}r[d].crossVectors(i[d],s[d])}if(n===!0){let d=Math.acos(Je(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ea extends Gn{constructor(t=0,n=0,e=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=e,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,n=new Bt){const e=n,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return e.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class f2 extends Ea{constructor(t,n,e,i,s,r){super(t,n,e,e,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Aa(){let o=0,t=0,n=0,e=0;function i(s,r,a,l){o=s,t=a,n=-3*s+3*r-2*a-l,e=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,f){let u=(r-s)/c-(a-s)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,i(r,a,u,d)},calc:function(s){const r=s*s,a=r*s;return o+t*s+n*r+e*a}}}const ds=new N,_r=new Aa,wr=new Aa,vr=new Aa;class h2 extends Gn{constructor(t=[],n=!1,e="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=e,this.tension=i}getPoint(t,n=new N){const e=n,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(ds.subVectors(i[0],i[1]).add(i[0]),c=ds);const f=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ds.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ds),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),x<1e-4&&(x=_),_r.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,x),wr.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,x),vr.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,x)}else this.curveType==="catmullrom"&&(_r.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),wr.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),vr.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return e.set(_r.calc(l),wr.calc(l),vr.calc(l)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const i=this.points[n];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ec(o,t,n,e,i){const s=(e-t)*.5,r=(i-n)*.5,a=o*o,l=o*a;return(2*n-2*e+s+r)*l+(-3*n+3*e-2*s-r)*a+s*o+n}function d2(o,t){const n=1-o;return n*n*t}function u2(o,t){return 2*(1-o)*o*t}function p2(o,t){return o*o*t}function Eo(o,t,n,e){return d2(o,t)+u2(o,n)+p2(o,e)}function m2(o,t){const n=1-o;return n*n*n*t}function g2(o,t){const n=1-o;return 3*n*n*o*t}function x2(o,t){return 3*(1-o)*o*o*t}function _2(o,t){return o*o*o*t}function Ao(o,t,n,e,i){return m2(o,t)+g2(o,n)+x2(o,e)+_2(o,i)}class _f extends Gn{constructor(t=new Bt,n=new Bt,e=new Bt,i=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=e,this.v3=i}getPoint(t,n=new Bt){const e=n,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(Ao(t,i.x,s.x,r.x,a.x),Ao(t,i.y,s.y,r.y,a.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w2 extends Gn{constructor(t=new N,n=new N,e=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=e,this.v3=i}getPoint(t,n=new N){const e=n,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(Ao(t,i.x,s.x,r.x,a.x),Ao(t,i.y,s.y,r.y,a.y),Ao(t,i.z,s.z,r.z,a.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wf extends Gn{constructor(t=new Bt,n=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Bt){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Bt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class v2 extends Gn{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends Gn{constructor(t=new Bt,n=new Bt,e=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new Bt){const e=n,i=this.v0,s=this.v1,r=this.v2;return e.set(Eo(t,i.x,s.x,r.x),Eo(t,i.y,s.y,r.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends Gn{constructor(t=new N,n=new N,e=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new N){const e=n,i=this.v0,s=this.v1,r=this.v2;return e.set(Eo(t,i.x,s.x,r.x),Eo(t,i.y,s.y,r.y),Eo(t,i.z,s.z,r.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mf extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Bt){const e=n,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return e.set(ec(a,l.x,c.x,h.x,f.x),ec(a,l.y,c.y,h.y,f.y)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const i=this.points[n];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(new Bt().fromArray(i))}return this}}var nc=Object.freeze({__proto__:null,ArcCurve:f2,CatmullRomCurve3:h2,CubicBezierCurve:_f,CubicBezierCurve3:w2,EllipseCurve:Ea,LineCurve:wf,LineCurve3:v2,QuadraticBezierCurve:vf,QuadraticBezierCurve3:yf,SplineCurve:Mf});class y2 extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const e=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[e](n,t))}return this}getPoint(t,n){const e=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=e){const r=i[s]-e,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let e=0,i=this.curves.length;e<i;e++)n+=this.curves[e].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let e;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];e&&e.equals(h)||(n.push(h),e=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const i=t.curves[n];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,e=this.curves.length;n<e;n++){const i=this.curves[n];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const i=t.curves[n];this.curves.push(new nc[i.type]().fromJSON(i))}return this}}class ic extends y2{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,e=t.length;n<e;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const e=new wf(this.currentPoint.clone(),new Bt(t,n));return this.curves.push(e),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,e,i){const s=new vf(this.currentPoint.clone(),new Bt(t,n),new Bt(e,i));return this.curves.push(s),this.currentPoint.set(e,i),this}bezierCurveTo(t,n,e,i,s,r){const a=new _f(this.currentPoint.clone(),new Bt(t,n),new Bt(e,i),new Bt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),e=new Mf(n);return this.curves.push(e),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,e,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,n+l,e,i,s,r),this}absarc(t,n,e,i,s,r){return this.absellipse(t,n,e,e,i,s,r),this}ellipse(t,n,e,i,s,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,n+h,e,i,s,r,a,l),this}absellipse(t,n,e,i,s,r,a,l){const c=new Ea(t,n,e,i,s,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mn extends on{constructor(t=1,n=32,e=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:e,thetaLength:i},n=Math.max(3,n);const s=[],r=[],a=[],l=[],c=new N,h=new Bt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=n;f++,u+=3){const d=e+f/n*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Z extends on{constructor(t=1,n=1,e=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],u=[],d=[];let m=0;const _=[],x=e/2;let p=0;M(),r===!1&&(t>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(d,2));function M(){const w=new N,P=new N;let R=0;const E=(n-t)/e;for(let I=0;I<=s;I++){const S=[],y=I/s,D=y*(n-t)+t;for(let G=0;G<=i;G++){const V=G/i,J=V*l+a,$=Math.sin(J),X=Math.cos(J);P.x=D*$,P.y=-y*e+x,P.z=D*X,f.push(P.x,P.y,P.z),w.set($,E,X).normalize(),u.push(w.x,w.y,w.z),d.push(V,1-y),S.push(m++)}_.push(S)}for(let I=0;I<i;I++)for(let S=0;S<s;S++){const y=_[S][I],D=_[S+1][I],G=_[S+1][I+1],V=_[S][I+1];(t>0||S!==0)&&(h.push(y,D,V),R+=3),(n>0||S!==s-1)&&(h.push(D,G,V),R+=3)}c.addGroup(p,R,0),p+=R}function v(w){const P=m,R=new Bt,E=new N;let I=0;const S=w===!0?t:n,y=w===!0?1:-1;for(let G=1;G<=i;G++)f.push(0,x*y,0),u.push(0,y,0),d.push(.5,.5),m++;const D=m;for(let G=0;G<=i;G++){const J=G/i*l+a,$=Math.cos(J),X=Math.sin(J);E.x=S*X,E.y=x*y,E.z=S*$,f.push(E.x,E.y,E.z),u.push(0,y,0),R.x=$*.5+.5,R.y=X*.5*y+.5,d.push(R.x,R.y),m++}for(let G=0;G<i;G++){const V=P+G,J=D+G;w===!0?h.push(J,J+1,V):h.push(J+1,J,V),I+=3}c.addGroup(p,I,w===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Z(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class He extends Z{constructor(t=1,n=1,e=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,n,e,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:e,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new He(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ra extends on{constructor(t=[],n=[],e=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:e,detail:i};const s=[],r=[];a(i),c(e),h(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new N,w=new N,P=new N;for(let R=0;R<n.length;R+=3)d(n[R+0],v),d(n[R+1],w),d(n[R+2],P),l(v,w,P,M)}function l(M,v,w,P){const R=P+1,E=[];for(let I=0;I<=R;I++){E[I]=[];const S=M.clone().lerp(w,I/R),y=v.clone().lerp(w,I/R),D=R-I;for(let G=0;G<=D;G++)G===0&&I===R?E[I][G]=S:E[I][G]=S.clone().lerp(y,G/D)}for(let I=0;I<R;I++)for(let S=0;S<2*(R-I)-1;S++){const y=Math.floor(S/2);S%2===0?(u(E[I][y+1]),u(E[I+1][y]),u(E[I][y])):(u(E[I][y+1]),u(E[I+1][y+1]),u(E[I+1][y]))}}function c(M){const v=new N;for(let w=0;w<s.length;w+=3)v.x=s[w+0],v.y=s[w+1],v.z=s[w+2],v.normalize().multiplyScalar(M),s[w+0]=v.x,s[w+1]=v.y,s[w+2]=v.z}function h(){const M=new N;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];const w=x(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;r.push(w,1-P)}m(),f()}function f(){for(let M=0;M<r.length;M+=6){const v=r[M+0],w=r[M+2],P=r[M+4],R=Math.max(v,w,P),E=Math.min(v,w,P);R>.9&&E<.1&&(v<.2&&(r[M+0]+=1),w<.2&&(r[M+2]+=1),P<.2&&(r[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function d(M,v){const w=M*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function m(){const M=new N,v=new N,w=new N,P=new N,R=new Bt,E=new Bt,I=new Bt;for(let S=0,y=0;S<s.length;S+=9,y+=6){M.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),w.set(s[S+6],s[S+7],s[S+8]),R.set(r[y+0],r[y+1]),E.set(r[y+2],r[y+3]),I.set(r[y+4],r[y+5]),P.copy(M).add(v).add(w).divideScalar(3);const D=x(P);_(R,y+0,M,D),_(E,y+2,v,D),_(I,y+4,w,D)}}function _(M,v,w,P){P<0&&M.x===1&&(r[v]=M.x-1),w.x===0&&w.z===0&&(r[v]=P/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.vertices,t.indices,t.radius,t.details)}}class Dn extends Ra{constructor(t=1,n=0){const e=(1+Math.sqrt(5))/2,i=1/e,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-e,0,-i,e,0,i,-e,0,i,e,-i,-e,0,-i,e,0,i,-e,0,i,e,0,-e,0,-i,e,0,-i,-e,0,i,e,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Dn(t.radius,t.detail)}}class Sf extends ic{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let e=0,i=this.holes.length;e<i;e++)n[e]=this.holes[e].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const i=t.holes[n];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,e=this.holes.length;n<e;n++){const i=this.holes[n];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const i=t.holes[n];this.holes.push(new ic().fromJSON(i))}return this}}const M2={triangulate:function(o,t,n=2){const e=t&&t.length,i=e?t[0]*n:o.length;let s=bf(o,0,i,n,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,h,f,u,d;if(e&&(s=A2(o,t,s,n)),o.length>80*n){a=c=o[0],l=h=o[1];for(let m=n;m<i;m+=n)f=o[m],u=o[m+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Do(s,r,n,a,l,d,0),r}};function bf(o,t,n,e,i){let s,r;if(i===O2(o,t,n,e)>0)for(s=t;s<n;s+=e)r=oc(s,o[s],o[s+1],r);else for(s=n-e;s>=t;s-=e)r=oc(s,o[s],o[s+1],r);return r&&Us(r,r.next)&&(No(r),r=r.next),r}function Ci(o,t){if(!o)return o;t||(t=o);let n=o,e;do if(e=!1,!n.steiner&&(Us(n,n.next)||Ue(n.prev,n,n.next)===0)){if(No(n),n=t=n.prev,n===n.next)break;e=!0}else n=n.next;while(e||n!==t);return t}function Do(o,t,n,e,i,s,r){if(!o)return;!r&&s&&L2(o,e,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?b2(o,e,i,s):S2(o)){t.push(l.i/n|0),t.push(o.i/n|0),t.push(c.i/n|0),No(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=T2(Ci(o),t,n),Do(o,t,n,e,i,s,2)):r===2&&E2(o,t,n,e,i,s):Do(Ci(o),t,n,e,i,s,1);break}}}function S2(o){const t=o.prev,n=o,e=o.next;if(Ue(t,n,e)>=0)return!1;const i=t.x,s=n.x,r=e.x,a=t.y,l=n.y,c=e.y,h=i<s?i<r?i:r:s<r?s:r,f=a<l?a<c?a:c:l<c?l:c,u=i>s?i>r?i:r:s>r?s:r,d=a>l?a>c?a:c:l>c?l:c;let m=e.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&$i(i,a,s,l,r,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function b2(o,t,n,e){const i=o.prev,s=o,r=o.next;if(Ue(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,h=i.y,f=s.y,u=r.y,d=a<l?a<c?a:c:l<c?l:c,m=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,x=h>f?h>u?h:u:f>u?f:u,p=ha(d,m,t,n,e),M=ha(_,x,t,n,e);let v=o.prevZ,w=o.nextZ;for(;v&&v.z>=p&&w&&w.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=x&&v!==i&&v!==r&&$i(a,h,l,f,c,u,v.x,v.y)&&Ue(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=d&&w.x<=_&&w.y>=m&&w.y<=x&&w!==i&&w!==r&&$i(a,h,l,f,c,u,w.x,w.y)&&Ue(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=x&&v!==i&&v!==r&&$i(a,h,l,f,c,u,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=M;){if(w.x>=d&&w.x<=_&&w.y>=m&&w.y<=x&&w!==i&&w!==r&&$i(a,h,l,f,c,u,w.x,w.y)&&Ue(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function T2(o,t,n){let e=o;do{const i=e.prev,s=e.next.next;!Us(i,s)&&Tf(i,e,e.next,s)&&Uo(i,s)&&Uo(s,i)&&(t.push(i.i/n|0),t.push(e.i/n|0),t.push(s.i/n|0),No(e),No(e.next),e=o=s),e=e.next}while(e!==o);return Ci(e)}function E2(o,t,n,e,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&N2(r,a)){let l=Ef(r,a);r=Ci(r,r.next),l=Ci(l,l.next),Do(r,t,n,e,i,s,0),Do(l,t,n,e,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function A2(o,t,n,e){const i=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*e,l=s<r-1?t[s+1]*e:o.length,c=bf(o,a,l,e,!1),c===c.next&&(c.steiner=!0),i.push(U2(c));for(i.sort(R2),s=0;s<i.length;s++)n=C2(i[s],n);return n}function R2(o,t){return o.x-t.x}function C2(o,t){const n=P2(o,t);if(!n)return t;const e=Ef(n,o);return Ci(e,e.next),Ci(n,n.next)}function P2(o,t){let n=t,e=-1/0,i;const s=o.x,r=o.y;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const u=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=s&&u>e&&(e=u,i=n.x<n.next.x?n:n.next,u===s))return i}n=n.next}while(n!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;n=i;do s>=n.x&&n.x>=l&&s!==n.x&&$i(r<c?s:e,r,l,c,r<c?e:s,r,n.x,n.y)&&(f=Math.abs(r-n.y)/(s-n.x),Uo(n,o)&&(f<h||f===h&&(n.x>i.x||n.x===i.x&&I2(i,n)))&&(i=n,h=f)),n=n.next;while(n!==a);return i}function I2(o,t){return Ue(o.prev,o,t.prev)<0&&Ue(t.next,o,o.next)<0}function L2(o,t,n,e){let i=o;do i.z===0&&(i.z=ha(i.x,i.y,t,n,e)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,D2(i)}function D2(o){let t,n,e,i,s,r,a,l,c=1;do{for(n=o,o=null,s=null,r=0;n;){for(r++,e=n,a=0,t=0;t<c&&(a++,e=e.nextZ,!!e);t++);for(l=c;a>0||l>0&&e;)a!==0&&(l===0||!e||n.z<=e.z)?(i=n,n=n.nextZ,a--):(i=e,e=e.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;n=e}s.nextZ=null,c*=2}while(r>1);return o}function ha(o,t,n,e,i){return o=(o-n)*i|0,t=(t-e)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function U2(o){let t=o,n=o;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==o);return n}function $i(o,t,n,e,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(e-a)>=(n-r)*(t-a)&&(n-r)*(s-a)>=(i-r)*(e-a)}function N2(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!z2(o,t)&&(Uo(o,t)&&Uo(t,o)&&F2(o,t)&&(Ue(o.prev,o,t.prev)||Ue(o,t.prev,t))||Us(o,t)&&Ue(o.prev,o,o.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(o,t,n){return(t.y-o.y)*(n.x-t.x)-(t.x-o.x)*(n.y-t.y)}function Us(o,t){return o.x===t.x&&o.y===t.y}function Tf(o,t,n,e){const i=ps(Ue(o,t,n)),s=ps(Ue(o,t,e)),r=ps(Ue(n,e,o)),a=ps(Ue(n,e,t));return!!(i!==s&&r!==a||i===0&&us(o,n,t)||s===0&&us(o,e,t)||r===0&&us(n,o,e)||a===0&&us(n,t,e))}function us(o,t,n){return t.x<=Math.max(o.x,n.x)&&t.x>=Math.min(o.x,n.x)&&t.y<=Math.max(o.y,n.y)&&t.y>=Math.min(o.y,n.y)}function ps(o){return o>0?1:o<0?-1:0}function z2(o,t){let n=o;do{if(n.i!==o.i&&n.next.i!==o.i&&n.i!==t.i&&n.next.i!==t.i&&Tf(n,n.next,o,t))return!0;n=n.next}while(n!==o);return!1}function Uo(o,t){return Ue(o.prev,o,o.next)<0?Ue(o,t,o.next)>=0&&Ue(o,o.prev,t)>=0:Ue(o,t,o.prev)<0||Ue(o,o.next,t)<0}function F2(o,t){let n=o,e=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&i<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(e=!e),n=n.next;while(n!==o);return e}function Ef(o,t){const n=new da(o.i,o.x,o.y),e=new da(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,n.next=i,i.prev=n,e.next=n,n.prev=e,s.next=e,e.prev=s,e}function oc(o,t,n,e){const i=new da(o,t,n);return e?(i.next=e.next,i.prev=e,e.next.prev=i,e.next=i):(i.prev=i,i.next=i),i}function No(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function da(o,t,n){this.i=o,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O2(o,t,n,e){let i=0;for(let s=t,r=n-e;s<n;s+=e)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class Ro{static area(t){const n=t.length;let e=0;for(let i=n-1,s=0;s<n;i=s++)e+=t[i].x*t[s].y-t[s].x*t[i].y;return e*.5}static isClockWise(t){return Ro.area(t)<0}static triangulateShape(t,n){const e=[],i=[],s=[];sc(t),rc(e,t);let r=t.length;n.forEach(sc);for(let l=0;l<n.length;l++)i.push(r),r+=n[l].length,rc(e,n[l]);const a=M2.triangulate(e,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function sc(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function rc(o,t){for(let n=0;n<t.length;n++)o.push(t[n].x),o.push(t[n].y)}class Ca extends on{constructor(t=new Sf([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const e=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(e),this.setAttribute("position",new Pe(i,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2));function c(h){const f=i.length/3,u=h.extractPoints(n);let d=u.shape;const m=u.holes;Ro.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,p=m.length;x<p;x++){const M=m[x];Ro.isClockWise(M)===!0&&(m[x]=M.reverse())}const _=Ro.triangulateShape(d,m);for(let x=0,p=m.length;x<p;x++){const M=m[x];d=d.concat(M)}for(let x=0,p=d.length;x<p;x++){const M=d[x];i.push(M.x,M.y,0),s.push(0,0,1),r.push(M.x,M.y)}for(let x=0,p=_.length;x<p;x++){const M=_[x],v=M[0]+f,w=M[1]+f,P=M[2]+f;e.push(v,w,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return k2(n,t)}static fromJSON(t,n){const e=[];for(let i=0,s=t.shapes.length;i<s;i++){const r=n[t.shapes[i]];e.push(r)}return new Ca(e,t.curveSegments)}}function k2(o,t){if(t.shapes=[],Array.isArray(o))for(let n=0,e=o.length;n<e;n++){const i=o[n];t.shapes.push(i.uuid)}else t.shapes.push(o.uuid);return t}class be extends on{constructor(t=1,n=32,e=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:e,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},n=Math.max(3,Math.floor(n)),e=Math.max(2,Math.floor(e));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new N,u=new N,d=[],m=[],_=[],x=[];for(let p=0;p<=e;p++){const M=[],v=p/e;let w=0;p===0&&r===0?w=.5/n:p===e&&l===Math.PI&&(w=-.5/n);for(let P=0;P<=n;P++){const R=P/n;f.x=-t*Math.cos(i+R*s)*Math.sin(r+v*a),f.y=t*Math.cos(r+v*a),f.z=t*Math.sin(i+R*s)*Math.sin(r+v*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),x.push(R+w,1-v),M.push(c++)}h.push(M)}for(let p=0;p<e;p++)for(let M=0;M<n;M++){const v=h[p][M+1],w=h[p][M],P=h[p+1][M],R=h[p+1][M+1];(p!==0||r>0)&&d.push(v,w,R),(p!==e-1||l<Math.PI)&&d.push(w,P,R)}this.setIndex(d),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ge extends on{constructor(t=1,n=.4,e=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:e,tubularSegments:i,arc:s},e=Math.floor(e),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new N,f=new N,u=new N;for(let d=0;d<=e;d++)for(let m=0;m<=i;m++){const _=m/i*s,x=d/e*Math.PI*2;f.x=(t+n*Math.cos(x))*Math.cos(_),f.y=(t+n*Math.cos(x))*Math.sin(_),f.z=n*Math.sin(x),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(d/e)}for(let d=1;d<=e;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,x=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,M=(i+1)*d+m;r.push(_,x,M),r.push(x,p,M)}this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class L extends fo{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pa extends Ke{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class B2 extends Pa{constructor(t,n,e){super(t,e),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const yr=new Ie,ac=new N,lc=new N;class Af{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,e=this.matrix;ac.setFromMatrixPosition(t.matrixWorld),n.position.copy(ac),lc.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(lc),n.updateMatrixWorld(),yr.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr),e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cc=new Ie,wo=new N,Mr=new N;class G2 extends Af{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,n=0){const e=this.camera,i=this.matrix,s=t.distance||e.far;s!==e.far&&(e.far=s,e.updateProjectionMatrix()),wo.setFromMatrixPosition(t.matrixWorld),e.position.copy(wo),Mr.copy(e.position),Mr.add(this._cubeDirections[n]),e.up.copy(this._cubeUps[n]),e.lookAt(Mr),e.updateMatrixWorld(),i.makeTranslation(-wo.x,-wo.y,-wo.z),cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc)}}class _e extends Pa{constructor(t,n,e=0,i=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=e,this.decay=i,this.shadow=new G2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class H2 extends Af{constructor(){super(new hf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V2 extends Pa{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new H2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class W2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=fc();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function fc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);const Co=new Set,X2=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);function Y2(){window.addEventListener("keydown",o=>{Co.add(o.code),X2.has(o.code)&&o.preventDefault()}),window.addEventListener("keyup",o=>{Co.delete(o.code)}),window.addEventListener("blur",()=>Co.clear())}function hc(o,t){let n=0;for(const e of o)Co.has(e)&&(n-=1);for(const e of t)Co.has(e)&&(n+=1);return Math.max(-1,Math.min(1,n))}const Fn=.28,dc=1.75,uc=.24,ms=.015;class Z2{constructor(){ae(this,"boxes",[])}add(t){return this.boxes.push(t),t}remove(t){const n=this.boxes.indexOf(t);n>=0&&this.boxes.splice(n,1)}move(t,n,e,i,s){const r=this.pushOut(t,n,s);t=r.x,n=r.z;const a=t+e;this.blocked(a,n,s)||(t=a);const l=n+i;return this.blocked(t,l,s)||(n=l),{x:t,z:n}}blocked(t,n,e){return this.hits(t,n,e,Fn)}hits(t,n,e,i){const s=e+dc;for(const r of this.boxes)if(!(r.maxY<=e+.04)&&!(r.minY>=s)&&!(r.maxY<=e+uc)&&pc(t,n,i,r))return!0;return!1}pushOut(t,n,e){const i=e+dc;for(let s=0;s<4;s++){let r=!1;for(const a of this.boxes){if(a.maxY<=e+.04||a.minY>=i||a.maxY<=e+uc||!pc(t,n,Fn,a))continue;r=!0;const l=t+Fn-a.minX,c=a.maxX-(t-Fn),h=n+Fn-a.minZ,f=a.maxZ-(n-Fn),u=Math.min(l,c,h,f);u>.6||(u===l?t=a.minX-Fn-ms:u===c?t=a.maxX+Fn+ms:u===h?n=a.minZ-Fn-ms:n=a.maxZ+Fn+ms)}if(!r)break}return{x:t,z:n}}}function pc(o,t,n,e){const i=gc(o,e.minX,e.maxX),s=gc(t,e.minZ,e.maxZ),r=o-i,a=t-s;return r*r+a*a<n*n}function mc(o,t,n,e=0){return o>=n.minX-e&&o<=n.maxX+e&&t>=n.minZ-e&&t<=n.maxZ+e}function gc(o,t,n){return Math.max(t,Math.min(n,o))}const gs={x:0,z:0};class q2{constructor(){ae(this,"items",[]);ae(this,"current",null)}add(t){return this.items.push(t),t}update(t,n){const e=t.lookFlat();gs.x=e.x,gs.z=e.z;let i=null,s=1/0;for(const r of this.items){const a=r.x-t.x,l=r.z-t.z,c=Math.hypot(a,l);c>r.radius||c>=s||(c<.001?1:(a*gs.x+l*gs.z)/c)<.2||this.occluded(t.x,t.z,r.x,r.z,n)||(i=r,s=c)}this.current=i}prompt(){if(!this.current)return"";const t=this.current.prompt;return typeof t=="function"?t():t}use(){var t;(t=this.current)==null||t.onInteract()}occluded(t,n,e,i,s){const r=[[t*.65+e*.35,n*.65+i*.35],[t*.35+e*.65,n*.35+i*.65]];for(const a of s.boxes)if(!(a.maxY<1.1)&&!mc(e,i,a,.05)){for(const[l,c]of r)if(mc(l,c,a))return!0}return!1}}class $2{constructor(){ae(this,"text","");ae(this,"timer",0)}show(t,n=3.6){this.text=t,this.timer=n}update(t){this.timer<=0||(this.timer-=t,this.timer<=0&&(this.text=""))}}const K2=0,J2=.15;function Rf(o,t){return t>=-3.5&&t<=3.5&&o>=-55&&o<=55||o>=13.5&&o<=18.5&&t>=3.5&&t<=40||o>=-16.5&&o<=-11.5&&t>=-40&&t<=-3.5}function xc(o,t){return Rf(o,t)?K2:J2}function j2(o,t){return o>=-4.5&&o<=4.5&&t>=12.8&&t<=22?"Sun Heights — Entrance Lobby":o>=21.8&&o<=33&&t>=9&&t<=22?"FamilyKonbini — Store":o>=1.5&&o<=10.5&&t>=7.5&&t<=18?"Menya Tokyo — Ramen Bar":o>=-3&&o<=10.5&&t>=24&&t<=36?"Kissaten Mame — Cafe":o>=-8.5&&o<=9.5&&t>=-36.5&&t<=-7.5?"Sakura Pocket Park (桜公園)":o>=4.5&&o<=13.5&&t>=16&&t<=24||o>=-5&&o<=13.5&&t>=21&&t<=24?"Rojiura — Residential Alley":o>=10.5&&o<=21.5&&t>=3.5&&t<=42?"Kita-gai — Shopping Street":o>=-19.5&&o<=-8.5&&t>=-42&&t<=-3.5?"Minami-dori — Residential St":Math.abs(t)<=5?o>=11&&o<=21?"Chuo-dori — North Crosswalk":o>=-19&&o<=-9?"Chuo-dori — South Crosswalk":"Chuo-dori — Central Avenue":"Tokyo — Residential District"}const Cf=[{id:"b-sunheights",name:"Sun Heights Mansion",x:0,z:17.5,w:9,d:10,floors:4,wall:"#262d38",trim:"#3a4454",balcony:"#404c5e",bay:3,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"lobby",enterable:!0,doorFace:"s",doorAlong:0,seed:101},{id:"b-ramen",name:"Menya Tokyo (Ramen)",x:6,z:12.5,w:7,d:9,floors:3,wall:"#2b2622",trim:"#423a32",balcony:"#383028",bay:2,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2],ground:"ramen",enterable:!0,doorFace:"s",doorAlong:.2,sign:{text:"らーめん 麺処",sub:"MENYA TOKYO",bg:"#8a1f18",fg:"#ffebc4"},awning:"#8a1f18",seed:202},{id:"b-konbini",name:"FamilyKonbini Store",x:27,z:15.5,w:11,d:13,floors:3,wall:"#282d34",trim:"#3c4550",balcony:"#333b47",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2],ground:"konbini",enterable:!0,doorFace:"w",doorAlong:0,sign:{text:"CONVENIENCE STORE",sub:"24H コンビニエンス",bg:"#0d6b42",fg:"#ffffff"},awning:"#0d6b42",seed:303},{id:"b-cafe",name:"Cafe Mame",x:3.5,z:30,w:11,d:10,floors:3,wall:"#2a2723",trim:"#453c33",balcony:"#3e352b",bay:3,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"cafe",enterable:!0,doorFace:"e",doorAlong:0,sign:{text:"喫茶 TOKYO CAFE",sub:"ROASTERY & BEANS",bg:"#4a2f1c",fg:"#f4ebd8"},awning:"#4a2f1c",seed:404},{id:"b-ne-apartments",name:"Mori Building",x:27,z:32,w:11,d:14,floors:5,wall:"#232a35",trim:"#384355",balcony:"#2e3848",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"w",doorAlong:0,sign:{text:"森クリニック / 薬局",sub:"PHARMACY & CLINIC",bg:"#1c4a5c",fg:"#e8f4f8"},seed:505},{id:"b-nw-mansion",name:"Chuo Grand Residence",x:-24,z:15.5,w:22,d:13,floors:5,wall:"#222830",trim:"#343e4c",balcony:"#2b3340",bay:6,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"s",doorAlong:-.3,sign:{text:"白金クリーニング",sub:"DRY CLEANERS & LAUNDRY",bg:"#25447a",fg:"#eef4ff"},awning:"#25447a",seed:606},{id:"b-fe-north",name:"Higashi Heights",x:43,z:15.5,w:15,d:13,floors:4,wall:"#26292e",trim:"#3a3f47",balcony:"#31363e",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,sign:{text:"書店 本屋",sub:"BOOKSTORE & CAFE",bg:"#6b301e",fg:"#fbece2"},seed:707},{id:"b-sw-commercial",name:"Minami Square",x:-27,z:-15.5,w:15,d:13,floors:4,wall:"#2c2925",trim:"#443f38",balcony:"#37322c",bay:4,front:"n",open:["n","e"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,sign:{text:"和食 酒処 居酒屋",sub:"TRADITIONAL IZAKAYA",bg:"#8a331a",fg:"#ffeeda"},awning:"#8a331a",seed:808},{id:"b-sw-houses",name:"Minami Residences",x:-27,z:-32,w:15,d:14,floors:3,wall:"#282b2d",trim:"#3c4145",balcony:"#32363a",bay:4,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"home",enterable:!1,doorFace:"e",doorAlong:0,seed:909},{id:"b-se-mansion",name:"Parkside Court",x:23,z:-15.5,w:22,d:13,floors:5,wall:"#212630",trim:"#323a48",balcony:"#29303c",bay:6,front:"n",open:["n"],balconyFaces:["n","w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"n",doorAlong:.2,sign:{text:"パークサイド歯科",sub:"DENTAL CLINIC",bg:"#1f5263",fg:"#e8f7fa"},seed:1010},{id:"b-fe-south",name:"Taito Mansion",x:43,z:-15.5,w:15,d:13,floors:4,wall:"#27292c",trim:"#3d4045",balcony:"#33363a",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1111},{id:"b-fw-north",name:"Nishi Heights",x:-44,z:15.5,w:14,d:13,floors:4,wall:"#242a32",trim:"#363f4b",balcony:"#2d3540",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,seed:1212},{id:"b-fw-south",name:"Nishi Court",x:-44,z:-15.5,w:14,d:13,floors:4,wall:"#2a2725",trim:"#403b38",balcony:"#35312e",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1313}],_c=3.65,Q2=18,t1=24,wc=.0022;class e1{constructor(t,n,e){ae(this,"x");ae(this,"z");ae(this,"yaw");ae(this,"pitch",0);ae(this,"feetY");ae(this,"eye",1.62);ae(this,"seated",!1);ae(this,"vx",0);ae(this,"vz",0);ae(this,"forward",new N);ae(this,"right",new N);ae(this,"euler",new Un(0,0,0,"YXZ"));ae(this,"quat",new co);this.x=t,this.z=n,this.yaw=e,this.feetY=xc(t,n)}applyMouse(t,n){this.yaw-=t*wc,this.pitch-=n*wc,this.pitch=Math.max(-1.25,Math.min(1.25,this.pitch))}update(t,n,e){this.forward.set(0,0,-1),this.euler.set(0,this.yaw,0,"YXZ"),this.forward.applyEuler(this.euler),this.forward.y=0,this.forward.lengthSq()>1e-6&&this.forward.normalize(),this.right.set(-this.forward.z,0,this.forward.x);const i=n&&!this.seated?hc(["KeyS","ArrowDown"],["KeyW","ArrowUp"]):0,s=n&&!this.seated?hc(["KeyA","ArrowLeft"],["KeyD","ArrowRight"]):0;let r=this.forward.x*i+this.right.x*s,a=this.forward.z*i+this.right.z*s;const l=Math.hypot(r,a);l>1&&(r/=l,a/=l);const c=r*_c,h=a*_c,f=Math.hypot(c,h),u=Math.hypot(this.vx,this.vz),m=(f>u?Q2:t1)*t,_=c-this.vx,x=h-this.vz,p=Math.hypot(_,x);p<=m?(this.vx=c,this.vz=h):(this.vx+=_/p*m,this.vz+=x/p*m),(!n||this.seated)&&(this.vx=0,this.vz=0);const M=this.vx*t,v=this.vz*t;if(Math.abs(M)>1e-5||Math.abs(v)>1e-5){const E=e.move(this.x,this.z,M,v,this.feetY);this.x=E.x,this.z=E.z}const w=xc(this.x,this.z),P=1-Math.exp(-14*t);this.feetY+=(w-this.feetY)*P;const R=this.seated?1.05:1.62;this.eye+=(R-this.eye)*(1-Math.exp(-8*t))}moving(){return Math.hypot(this.vx,this.vz)>.15}applyCamera(t){t.position.set(this.x,this.feetY+this.eye,this.z),t.rotation.order="YXZ",t.rotation.y=this.yaw,t.rotation.x=this.pitch,t.rotation.z=0}look(t){return this.euler.set(0,this.yaw,0,"YXZ"),this.quat.setFromEuler(this.euler),t.set(0,0,-1).applyQuaternion(this.quat)}lookFlat(){const t=this.look(this.forward);return{x:t.x,z:t.z}}}class n1{constructor(){ae(this,"quality","low");ae(this,"listeners",[]);try{const t=localStorage.getItem("tokyo_graphics_quality");t==="high"||t==="low"?this.quality=t:this.quality="low"}catch{this.quality="low"}}getQuality(){return this.quality}isHigh(){return this.quality==="high"}setQuality(t){this.quality=t;try{localStorage.setItem("tokyo_graphics_quality",t)}catch{}for(const n of this.listeners)n(t)}toggleQuality(){const t=this.quality==="low"?"high":"low";return this.setQuality(t),t}onChange(t){return this.listeners.push(t),()=>{const n=this.listeners.indexOf(t);n>=0&&this.listeners.splice(n,1)}}}const vn=new n1;new L({vertexColors:!0,roughness:.86,metalness:.04});new $t({vertexColors:!0,toneMapped:!1});new L({color:1054752,roughness:.08,metalness:.45,transparent:!0,opacity:.55,depthWrite:!1});const Fe=new L({color:12044756,roughness:.06,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1,side:nn}),i1=new L({color:16777215,roughness:.42,metalness:.62}),Le=new L({color:2764339,roughness:.4,metalness:.72}),Bn=new $t({color:16769712,toneMapped:!1});function o1(){const o=document.createElement("canvas");o.width=512,o.height=512;const t=o.getContext("2d"),n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");t.fillStyle="#161920",t.fillRect(0,0,512,512),e.fillStyle="#b8b8b8",e.fillRect(0,0,512,512);const i=t.getImageData(0,0,512,512),s=e.getImageData(0,0,512,512),r=i.data,a=s.data;for(let f=0;f<r.length;f+=4){const u=(Math.random()-.5)*18;r[f]=Math.max(10,Math.min(45,r[f]+u)),r[f+1]=Math.max(12,Math.min(48,r[f+1]+u)),r[f+2]=Math.max(16,Math.min(54,r[f+2]+u));const d=(Math.random()-.5)*25;a[f]=Math.max(120,Math.min(230,a[f]+d)),a[f+1]=a[f],a[f+2]=a[f]}t.putImageData(i,0,0),e.putImageData(s,0,0),t.fillStyle="rgba(8, 10, 14, 0.65)",e.fillStyle="rgb(24, 24, 24)";const l=[{x:140,y:160,rx:90,ry:45,rot:.2},{x:380,y:340,rx:110,ry:55,rot:-.3},{x:260,y:440,rx:70,ry:35,rot:.1},{x:100,y:420,rx:60,ry:30,rot:-.2},{x:420,y:120,rx:80,ry:40,rot:.4}];for(const f of l)t.beginPath(),t.ellipse(f.x,f.y,f.rx,f.ry,f.rot,0,Math.PI*2),t.fill(),e.beginPath(),e.ellipse(f.x,f.y,f.rx,f.ry,f.rot,0,Math.PI*2),e.fill();const c=new ie(o);c.wrapS=Ce,c.wrapT=Ce,c.repeat.set(12,1.5),c.colorSpace=de;const h=new ie(n);return h.wrapS=Ce,h.wrapT=Ce,h.repeat.set(12,1.5),{map:c,roughnessMap:h}}const vc=o1(),s1=new L({map:vc.map,roughnessMap:vc.roughnessMap,roughness:.65,metalness:.22});function r1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#2b3038",t.fillRect(0,0,256,256);const n=64;t.strokeStyle="#1b1e24",t.lineWidth=3;for(let i=0;i<256;i+=n)for(let s=0;s<256;s+=n){const r=Math.floor((Math.random()-.5)*12);t.fillStyle=`rgb(${43+r}, ${48+r}, ${56+r})`,t.fillRect(s+1.5,i+1.5,n-3,n-3),t.strokeRect(s,i,n,n)}const e=new ie(o);return e.wrapS=Ce,e.wrapT=Ce,e.repeat.set(8,2),e.colorSpace=de,e}const a1=r1(),l1=new L({map:a1,color:13159892,roughness:.88,metalness:.04}),yc=new L({color:2368029,roughness:.92,metalness:.03});function c1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#2c271f",t.fillRect(0,0,256,256);const n=t.getImageData(0,0,256,256),e=n.data;for(let s=0;s<e.length;s+=4){const r=(Math.random()-.5)*22;e[s]=Math.max(25,Math.min(65,e[s]+r)),e[s+1]=Math.max(22,Math.min(58,e[s+1]+r*.9)),e[s+2]=Math.max(16,Math.min(48,e[s+2]+r*.75))}t.putImageData(n,0,0);for(let s=0;s<90;s++){const r=Math.random()*256,a=Math.random()*256,l=.8+Math.random()*1.6;t.fillStyle=Math.random()>.4?"rgba(78, 70, 58, 0.6)":"rgba(28, 24, 18, 0.7)",t.beginPath(),t.arc(r,a,l,0,Math.PI*2),t.fill()}const i=new ie(o);return i.wrapS=Ce,i.wrapT=Ce,i.repeat.set(10,10),i.colorSpace=de,i}function f1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#1c1b18",t.fillRect(0,0,256,256);const n=8,e=256/n,i=64;t.strokeStyle="#141310",t.lineWidth=2;for(let r=0;r<n;r++){const a=r*e,l=r%2*(i/2);for(let c=-i;c<256+i;c+=i){const h=c+l,f=Math.floor((Math.random()-.5)*16);t.fillStyle=`rgb(${54+f}, ${50+f}, ${44+f})`,t.fillRect(h+1,a+1,i-2,e-2),t.strokeRect(h,a,i,e)}}const s=new ie(o);return s.wrapS=Ce,s.wrapT=Ce,s.repeat.set(4,4),s.colorSpace=de,s}const h1=c1(),d1=f1(),u1=new L({map:h1,color:12893359,roughness:.94,metalness:.02}),p1=new L({map:d1,color:13485497,roughness:.88,metalness:.04}),m1=new L({color:1914401,roughness:.92,metalness:.01}),ua=new L({color:1453850,roughness:.95,metalness:0}),g1=new L({color:1255191,roughness:.95,metalness:0}),x1=new L({color:15232662,roughness:.72,metalness:0}),Mc=new L({color:16118766,roughness:.72,metalness:0}),_1=new L({color:9069252,roughness:.72,metalness:0}),Qi=new L({color:1942932,roughness:.35,metalness:.35}),Ia=new L({color:15054884,roughness:.32,metalness:.25}),So=new L({color:14038054,roughness:.35,metalness:.25}),w1=new L({color:1842722,roughness:.95,metalness:.04}),v1=new L({color:14212841,roughness:.16,metalness:.88}),Sr=new L({color:5520422,roughness:.88,metalness:.02}),y1=new L({color:10390636,roughness:.96,metalness:.01}),M1=new L({color:3027770,roughness:.3,metalness:.85}),Po=new L({color:14475496,roughness:.42,metalness:.02}),ro=new L({color:13214539,roughness:.65,metalness:.05,emissive:4010002,emissiveIntensity:.2}),jn=new L({color:4009245,roughness:.9,metalness:.02}),zo=new L({color:3033648,roughness:.85,metalness:0}),La=new L({color:14257826,roughness:.8,metalness:0});new L({color:14235689,emissive:12395541,emissiveIntensity:.85,roughness:.45});const S1=new L({color:15263455,roughness:.22,metalness:.12}),Pt=new L({color:8555158,roughness:.28,metalness:.78}),Sc=new L({color:3557470,roughness:.2,metalness:.85}),bc=new L({color:1318440,roughness:.05,metalness:.9,transparent:!0,opacity:.7}),b1=new L({color:16079390,roughness:.35,metalness:.1}),T1=new L({color:15660282,roughness:.05,metalness:.95}),E1=new $t({color:16770736,transparent:!0,opacity:.07,side:nn,depthWrite:!1,blending:Tr}),Tc=new $t({color:14540253,transparent:!0,opacity:.25,depthWrite:!1}),_t=new Map;function A1(o,t,n,e,i=512,s=160){const r=`${o}|${t}|${n}|${e??""}|${i}|${s}`,a=_t.get(r);if(a)return a;const l=document.createElement("canvas");l.width=i,l.height=s;const c=l.getContext("2d");c.fillStyle=t,c.fillRect(0,0,i,s),c.fillStyle=n,c.textAlign="center",c.textBaseline="middle";const h='"Yu Gothic UI", "Yu Gothic", Meiryo, "MS PGothic", sans-serif';e?(c.font=`700 ${Math.floor(s*.36)}px ${h}`,c.fillText(o,i/2,s*.38),c.font=`500 ${Math.floor(s*.2)}px ${h}`,c.fillText(e,i/2,s*.72)):(c.font=`700 ${Math.floor(s*.42)}px ${h}`,c.fillText(o,i/2,s/2));const f=new ie(l);return f.colorSpace=de,f.anisotropy=4,_t.set(r,f),f}function Fo(o,t,n,e,i=512,s=160){const r=A1(o,t,n,e,i,s);return new $t({map:r,toneMapped:!1})}function R1(o){const t=`vend-${o}`,n=_t.get(t);if(n)return n;const e=[{bg:"#0e3d3a",head:"#f2a65a",a:"#d84a3a",b:"#2f6fed",c:"#f2d15a",label:"BOSS COFFEE"},{bg:"#3a1420",head:"#ff5a6a",a:"#7ad0c8",b:"#f2e27a",c:"#ffffff",label:"POCARI SWEAT"},{bg:"#14243f",head:"#7eb6ff",a:"#ff7a45",b:"#6d8",c:"#ffe08a",label:"GREEN TEA"}],i=e[o%e.length],s=document.createElement("canvas");s.width=256,s.height=512;const r=s.getContext("2d");r.fillStyle=i.bg,r.fillRect(0,0,256,512),r.fillStyle=i.head,r.fillRect(16,18,224,64),r.fillStyle="#102028",r.font='700 32px "Yu Gothic UI", Meiryo, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i.label,128,50),[i.a,i.b,i.c].forEach((c,h)=>{const f=110+h*96;r.fillStyle="#071016",r.fillRect(28,f,200,78),r.fillStyle=c,r.fillRect(40,f+12,36,54),r.fillRect(86,f+12,36,54),r.fillRect(132,f+12,36,54),r.fillRect(178,f+12,36,54)}),r.fillStyle="#05070a",r.fillRect(48,430,160,48),r.strokeStyle="rgba(255,255,255,0.35)",r.strokeRect(48,430,160,48);const l=new ie(s);return l.colorSpace=de,_t.set(t,l),l}function C1(){const o="emergency-exit",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#0a7844",e.fillRect(0,0,256,128),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(8,8,240,112),e.fillStyle="#ffffff",e.font='bold 36px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("非常口 EXIT",128,74);const i=new ie(n);return i.colorSpace=de,_t.set(o,i),i}function P1(){const o="manhole-cover",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22262c",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill(),e.strokeStyle="#3d444e",e.lineWidth=6,e.stroke(),e.strokeStyle="#485260",e.lineWidth=3,e.beginPath(),e.arc(128,128,96,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(128,128,54,0,Math.PI*2),e.stroke();for(let s=0;s<Math.PI*2;s+=Math.PI/4)e.save(),e.translate(128,128),e.rotate(s),e.fillStyle="#3a424e",e.beginPath(),e.ellipse(0,75,12,18,0,0,Math.PI*2),e.fill(),e.restore();e.fillStyle="#505a68",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("下水",128,128);const i=new ie(n);return i.colorSpace=de,_t.set(o,i),i}function I1(){const o="konbini-counter-front",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#f8f9fa",e.fillRect(0,0,512,256),e.fillStyle="#0d7a46",e.fillRect(0,48,512,28),e.fillStyle="#ffffff",e.fillRect(0,76,512,8),e.fillStyle="#0080cc",e.fillRect(0,84,512,16),e.strokeStyle="#e2e6ea",e.lineWidth=2;for(let s=128;s<512;s+=128)e.beginPath(),e.moveTo(s,100),e.lineTo(s,230),e.stroke();e.fillStyle="#3a3f47",e.fillRect(0,230,512,26);const i=new ie(n);return i.colorSpace=de,_t.set(o,i),i}function L1(){const o="konbini-wall-stripes",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#f4f6f9",e.fillRect(0,0,512,512),e.strokeStyle="#e1e5eb",e.lineWidth=2,e.strokeRect(0,0,512,512),e.fillStyle="#0d7a46",e.fillRect(0,18,512,36),e.fillStyle="#ffffff",e.fillRect(0,54,512,8),e.fillStyle="#0080cc",e.fillRect(0,62,512,22);const i=new ie(n);return i.wrapS=Ce,i.wrapT=Ce,i.repeat.set(4,1),i.colorSpace=de,_t.set(o,i),i}function D1(){const o="konbini-cooler-doors",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#0a1016",e.fillRect(0,0,1024,512);const i=256,s=[[{color:"#2b7835",label:"お〜いお茶"},{color:"#388a44",label:"生茶"},{color:"#1f5e28",label:"伊右衛門"},{color:"#665522",label:"烏龍茶"}],[{color:"#0088dd",label:"POCARI"},{color:"#00b4d8",label:"AQUARIUS"},{color:"#e8f4ff",label:"いろはす"},{color:"#0066aa",label:"DAKARA"}],[{color:"#d4af37",label:"BOSS GOLD"},{color:"#1c1c1c",label:"BLACK COFFEE"},{color:"#8b0000",label:"GEORGIA"},{color:"#f5deb3",label:"MILK TEA"}],[{color:"#cc0000",label:"COCA-COLA"},{color:"#ffd700",label:"C.C.LEMON"},{color:"#00aa55",label:"MELON SODA"},{color:"#ffffff",label:"CALPIS"}]];for(let a=0;a<4;a++){const l=a*i,c=s[a];for(let h=0;h<5;h++){const f=30+h*95;e.fillStyle="#e8f4fa",e.fillRect(l+12,f+68,i-24,6),e.fillStyle="#ff4444",e.fillRect(l+12,f+74,i-24,12),e.fillStyle="#ffffff",e.font="bold 9px sans-serif",e.textAlign="center",e.fillText("¥140 ~ ¥160",l+i/2,f+83);const u=5;for(let d=0;d<u;d++){const m=l+24+d*44,_=c[d%c.length];e.fillStyle="rgba(255, 255, 255, 0.15)",e.fillRect(m-2,f+8,32,58),e.fillStyle=_.color,e.fillRect(m,f+10,28,56),e.fillStyle="#ffffff",e.fillRect(m+6,f+4,16,6),e.fillStyle="#ffffff",e.fillRect(m+2,f+26,24,22),e.fillStyle="#111111",e.font="bold 8px sans-serif",e.fillText(_.label.substring(0,4),m+14,f+38)}}e.strokeStyle="#8a929c",e.lineWidth=8,e.strokeRect(l+4,8,i-8,496),e.fillStyle="#cfd4dc",e.fillRect(l+i-22,180,10,150),e.fillStyle="#222222",e.fillRect(l+i-20,182,6,146)}const r=new ie(n);return r.colorSpace=de,_t.set(o,r),r}function U1(){const o="hot-snacks-display",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#d92c18",e.fillRect(0,0,256,128),e.fillStyle="#ff7700",e.fillRect(4,4,248,42),e.fillStyle="#ffffff",e.font='bold 22px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("HOT SNACKS",128,30),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.fillText("ファミチキ ¥220 / 肉まん ¥160",128,76),e.font='12px "Yu Gothic UI", sans-serif',e.fillText("できたて あつあつ！揚げたて",128,104);const i=new ie(n);return i.colorSpace=de,_t.set(o,i),i}function N1(){const o="apt-lobby-wall",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#eee9e0",e.fillRect(0,0,512,512);const i=64;for(let r=0;r<512;r+=i){const a=r/i%2===0?0:128;for(let l=-128;l<640;l+=256){const c=Math.floor((Math.sin(l*12.3+r*4.5)+1)*6),h=238+c,f=233+c,u=224+c;e.fillStyle=`rgb(${h},${f},${u})`,e.fillRect(l+a+2,r+2,252,i-4);for(let d=0;d<12;d++)e.fillStyle="rgba(160, 150, 135, 0.15)",e.fillRect(l+a+Math.random()*240,r+Math.random()*(i-6),2,2)}e.fillStyle="#cfc6b8",e.fillRect(0,r,512,2)}const s=new ie(n);return s.wrapS=Ce,s.wrapT=Ce,s.repeat.set(3,2),_t.set(o,s),s}function z1(){const o="apt-lobby-floor",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ded7cc",e.fillRect(0,0,512,512);for(let s=0;s<2;s++)for(let r=0;r<2;r++){const a=s*256,l=r*256;e.fillStyle=(s+r)%2===0?"#e4ded4":"#dfd9cf",e.fillRect(a+2,l+2,252,252),e.strokeStyle="rgba(255, 255, 255, 0.45)",e.lineWidth=3,e.beginPath(),e.moveTo(a+20,l+220),e.bezierCurveTo(a+90,l+160,a+140,l+200,a+230,l+40),e.stroke(),e.strokeStyle="rgba(160, 145, 130, 0.22)",e.lineWidth=2,e.beginPath(),e.moveTo(a+40,l+240),e.bezierCurveTo(a+120,l+170,a+170,l+120,a+240,l+80),e.stroke()}e.strokeStyle="#b8ad9e",e.lineWidth=3,e.strokeRect(0,0,512,512),e.beginPath(),e.moveTo(256,0),e.lineTo(256,512),e.moveTo(0,256),e.lineTo(512,256),e.stroke();const i=new ie(n);return i.wrapS=Ce,i.wrapT=Ce,i.repeat.set(4,4),_t.set(o,i),i}function F1(){const o="wood-slats",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22150c",e.fillRect(0,0,256,256);const i=24,r=i+8;for(let l=0;l<256;l+=r){e.fillStyle="#b8834a",e.fillRect(l,0,i,256),e.strokeStyle="rgba(120, 70, 30, 0.25)",e.lineWidth=1.5;for(let c=0;c<3;c++){const h=l+4+c*7;e.beginPath(),e.moveTo(h,0),e.bezierCurveTo(h+2,80,h-2,160,h+1,256),e.stroke()}e.fillStyle="rgba(255, 230, 190, 0.35)",e.fillRect(l,0,2,256),e.fillStyle="rgba(40, 20, 10, 0.45)",e.fillRect(l+i-2,0,2,256)}const a=new ie(n);return a.wrapS=Ce,a.wrapT=Ce,a.repeat.set(3,1),_t.set(o,a),a}function O1(){const o="apt-mailboxes",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#8f96a0",e.fillRect(0,0,1024,512);for(let u=0;u<512;u+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,u,1024,2);e.fillStyle="#222830",e.fillRect(16,12,992,44),e.fillStyle="#d4af37",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("SUN HEIGHTS  |  集合郵便受箱 (MAIL BOXES)",36,41),e.textAlign="right",e.font="15px sans-serif",e.fillStyle="#a0aec0",e.fillText("ROOMS 101 - 406",988,41);const i=6,s=4,r=20,a=68,l=Math.floor(984/i),c=Math.floor(432/s),h=[["401","402","403","404","405","406"],["301","302","303","304","305","306"],["201","202","203","204","205","206"],["101","102","103","104","105","106"]];for(let u=0;u<s;u++)for(let d=0;d<i;d++){const m=r+d*l,_=a+u*c;e.fillStyle="#a8b0ba",e.fillRect(m+3,_+3,l-6,c-6),e.strokeStyle="#4e5560",e.lineWidth=2,e.strokeRect(m+3,_+3,l-6,c-6),e.fillStyle="#68707a",e.fillRect(m+12,_+12,l-24,18),e.fillStyle="#242a32",e.fillRect(m+16,_+27,l-32,3);const x=h[u][d];e.fillStyle="#11161d",e.fillRect(m+14,_+40,56,26),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(m+14,_+40,56,26),e.fillStyle="#ffffff",e.font='bold 16px "Yu Gothic UI", monospace',e.textAlign="center",e.fillText(x,m+42,_+59);const p=m+l-34,M=_+53;e.fillStyle="#1a1f26",e.beginPath(),e.arc(p,M,15,0,Math.PI*2),e.fill(),e.strokeStyle="#c5ccd6",e.lineWidth=2,e.stroke(),e.fillStyle="#ffffff";for(let v=0;v<8;v++){const w=v*Math.PI/4;e.fillRect(p+Math.cos(w)*11-1,M+Math.sin(w)*11-1,2,2)}e.fillStyle="#e8ecf0",e.fillRect(m+14,_+72,l-28,14),e.strokeStyle="#7c8694",e.lineWidth=1,e.strokeRect(m+14,_+72,l-28,14),e.fillStyle="#44505f",e.font="10px sans-serif",e.textAlign="left",e.fillText(x==="304"?"RELZZY (304)":"RESIDENT",m+20,_+83)}const f=new ie(n);return _t.set(o,f),f}function k1(){const o="apt-delivery-lockers",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#262d36",e.fillRect(0,0,512,512),e.fillStyle="#151a22",e.fillRect(10,10,492,42),e.fillStyle="#38e59e",e.font='bold 18px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("宅配ロッカー TAKUHAIBOX",26,37),e.fillStyle="#a0aec0",e.font="12px sans-serif",e.textAlign="right",e.fillText("24H PARCEL SYSTEM",486,37),e.fillStyle="#1a202c",e.fillRect(160,68,192,210),e.strokeStyle="#4a5568",e.lineWidth=2,e.strokeRect(160,68,192,210),e.fillStyle="#0f2942",e.fillRect(172,80,168,90),e.fillStyle="#38bdf8",e.font='bold 13px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("荷物のお受け取り",256,106),e.fillStyle="#e2e8f0",e.font="11px sans-serif",e.fillText("部屋番号を入力してください",256,128),e.fillStyle="#22c55e",e.fillText("[304: 1個のお届け物]",256,150);for(let r=0;r<4;r++)for(let a=0;a<3;a++){const l=184+a*48,c=182+r*22;e.fillStyle="#334155",e.fillRect(l,c,40,18),e.fillStyle="#f8fafc",e.font="bold 10px monospace",e.fillText(`${r*3+a+1}`,l+20,c+13)}const i=[{x:16,y:68,w:132,h:64,label:"BOX 01",inUse:!1},{x:16,y:140,w:132,h:64,label:"BOX 02",inUse:!0},{x:16,y:212,w:132,h:64,label:"BOX 03",inUse:!0},{x:364,y:68,w:132,h:96,label:"BOX 04",inUse:!1},{x:364,y:172,w:132,h:104,label:"BOX 05",inUse:!1},{x:16,y:288,w:236,h:208,label:"LARGE BOX 06",inUse:!1},{x:260,y:288,w:236,h:208,label:"LARGE BOX 07",inUse:!1}];for(const r of i)e.fillStyle="#3a4454",e.fillRect(r.x,r.y,r.w,r.h),e.strokeStyle="#1a222e",e.lineWidth=2,e.strokeRect(r.x,r.y,r.w,r.h),e.fillStyle="#8a94a4",e.fillRect(r.x+r.w-18,r.y+r.h/2-16,8,32),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText(r.label,r.x+10,r.y+22),e.fillStyle=r.inUse?"#f59e0b":"#10b981",e.beginPath(),e.arc(r.x+r.w-14,r.y+16,5,0,Math.PI*2),e.fill();const s=new ie(n);return _t.set(o,s),s}function B1(){const o="reception-notice-board",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#c8955a",e.fillRect(0,0,512,256);for(let s=0;s<400;s++)e.fillStyle=Math.random()>.5?"rgba(90, 50, 20, 0.15)":"rgba(255, 230, 180, 0.15)",e.fillRect(Math.random()*512,Math.random()*256,3,3);e.strokeStyle="#6b401e",e.lineWidth=10,e.strokeRect(5,5,502,246),e.fillStyle="#2d1e12",e.fillRect(16,14,480,28),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("サンハイツ管理組合 掲示板 (RESIDENTS NOTICE)",256,34),e.fillStyle="#ffffff",e.fillRect(24,52,140,186),e.strokeStyle="#d4d4d4",e.lineWidth=1,e.strokeRect(24,52,140,186),e.fillStyle="#dc2626",e.fillRect(28,56,132,22),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.fillText("ゴミ収集日程",94,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・可燃ゴミ: 月・木",32,98),e.fillText("・資源ゴミ: 水曜日",32,116),e.fillText("・不燃ゴミ: 第2火曜",32,134),e.fillText("※朝8時までに排出",32,158),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.fillRect(182,52,150,186),e.strokeRect(182,52,150,186),e.fillStyle="#2563eb",e.fillRect(186,56,142,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("消防設備定期点検",257,72),e.fillStyle="#1e293b",e.font="10px sans-serif",e.textAlign="left",e.fillText("今週土曜日 10:00~",190,98),e.fillText("各戸火災報知器テスト",190,116),e.fillText("インターホン点検実施",190,134),e.fillText("ご在宅をお願いします",190,158),e.fillStyle="#3b82f6",e.beginPath(),e.arc(257,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#fffbeb",e.fillRect(350,52,138,186),e.strokeRect(350,52,138,186),e.fillStyle="#059669",e.fillRect(354,56,130,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("共用部利用マナー",419,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・駐輪場シール貼付",358,98),e.fillText("・共用廊下置配禁止",358,116),e.fillText("・夜間静粛のお願い",358,134),e.strokeStyle="#dc2626",e.lineWidth=2,e.strokeRect(436,180,42,42),e.fillStyle="#dc2626",e.font="bold 9px serif",e.textAlign="center",e.fillText("管理",457,198),e.fillText("組合印",457,214),e.fillStyle="#10b981",e.beginPath(),e.arc(419,56,5,0,Math.PI*2),e.fill();const i=new ie(n);return _t.set(o,i),i}function G1(){const o="apt-directory-board",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=384;const e=n.getContext("2d");e.fillStyle="#161d26",e.fillRect(0,0,512,384),e.strokeStyle="#d4af37",e.lineWidth=6,e.strokeRect(6,6,500,372),e.strokeStyle="#4a5568",e.lineWidth=1.5,e.strokeRect(16,16,480,352),e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", serif',e.textAlign="center",e.fillText("SUN HEIGHTS KANAMECHO",256,54),e.font='14px "Yu Gothic UI", sans-serif',e.fillStyle="#e2e8f0",e.fillText("サンハイツ要町 総合案内",256,78),e.fillStyle="#d4af37",e.fillRect(40,92,432,2);const i=[{floor:"4F",desc:"401 - 406  RESIDENCE / ルーフバルコニー"},{floor:"3F",desc:"301 - 306  RESIDENCE (Relzzy #304)"},{floor:"2F",desc:"201 - 206  RESIDENCE"},{floor:"1F",desc:"管理事務室 / エントランス / 集合受箱 / 宅配BOX"}];for(let r=0;r<i.length;r++){const a=138+r*50;e.fillStyle="#2a3442",e.fillRect(44,a-24,60,34),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(44,a-24,60,34),e.fillStyle="#d4af37",e.font="bold 18px monospace",e.textAlign="center",e.fillText(i[r].floor,74,a),e.fillStyle="#ffffff",e.font='14px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText(i[r].desc,120,a),r<3&&(e.fillStyle="rgba(255, 255, 255, 0.12)",e.fillRect(44,a+20,424,1))}e.fillStyle="#718096",e.font="11px sans-serif",e.textAlign="center",e.fillText("管理人常駐: 平日 9:00 ~ 17:00 | 管理会社コールセンター 24H",256,346);const s=new ie(n);return _t.set(o,s),s}function H1(){const o="ramen-shop-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#1c1510",e.fillRect(0,0,512,256);for(let s=0;s<256;s+=4)e.fillStyle=Math.random()>.5?"rgba(70, 45, 25, 0.25)":"rgba(10, 8, 6, 0.35)",e.fillRect(0,s,512,3);e.strokeStyle="#3d2616",e.lineWidth=12,e.strokeRect(6,6,500,244),e.strokeStyle="#5a3820",e.lineWidth=3,e.strokeRect(14,14,484,228),e.fillStyle="#e2c595",e.font='bold 16px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("自家製麺・濃厚豚骨スープ",256,48),e.fillStyle="#f8e4b8",e.font="bold 52px serif",e.shadowColor="#000000",e.shadowBlur=6,e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText("らーめん 麺処",256,116),e.shadowColor="transparent",e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", sans-serif',e.fillText("MENYA TOKYO",256,160),e.fillStyle="#b89d78",e.font="14px sans-serif",e.fillText("創業 昭和六十二年  |  特製チャーシュー・煮玉子",256,196),e.strokeStyle="#c42012",e.lineWidth=2.5,e.strokeRect(38,92,42,42),e.fillStyle="#c42012",e.font="bold 11px serif",e.textAlign="center",e.fillText("味",59,110),e.fillText("自慢",59,126),e.strokeStyle="#c42012",e.strokeRect(432,92,42,42),e.fillText("秘",453,110),e.fillText("伝",453,126);const i=new ie(n);return _t.set(o,i),i}function V1(o){const t=`ramen-lantern-${o}`,n=_t.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,512,0);s.addColorStop(0,"#9a160c"),s.addColorStop(.3,"#d8281a"),s.addColorStop(.5,"#f03a28"),s.addColorStop(.7,"#d8281a"),s.addColorStop(1,"#9a160c"),i.fillStyle=s,i.fillRect(0,0,512,512);for(let c=40;c<470;c+=22)i.fillStyle="rgba(70, 8, 4, 0.4)",i.fillRect(0,c,512,3),i.fillStyle="rgba(255, 180, 160, 0.25)",i.fillRect(0,c+3,512,1.5);i.fillStyle="#141416",i.fillRect(0,0,512,42),i.fillRect(0,470,512,42),i.fillStyle="#d4af37",i.fillRect(0,38,512,4),i.fillRect(0,470,512,4),i.fillStyle="#101012",i.font="900 84px serif",i.textAlign="center";const r=o.split(""),a=256-(r.length-1)*90/2;r.forEach((c,h)=>{i.shadowColor="rgba(0, 0, 0, 0.6)",i.shadowBlur=4,i.shadowOffsetX=2,i.shadowOffsetY=2,i.fillText(c,256,a+h*95)}),i.shadowColor="transparent";const l=new ie(e);return _t.set(t,l),l}function W1(){const o="ramen-noren",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#162234",e.fillRect(0,0,512,256);for(let a=0;a<256;a+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,a,512,2);const i=512/4;for(let a=1;a<4;a++){const l=a*i;e.fillStyle="#080c14",e.fillRect(l-3,40,6,216)}e.fillStyle="#0f1722",e.fillRect(0,0,512,38),e.strokeStyle="#2d3b4e",e.lineWidth=2,e.strokeRect(0,0,512,38);for(let a=0;a<8;a++){const l=28+a*64;e.fillStyle="#223044",e.fillRect(l,2,24,34)}const s=["ら","ー","め","ん"];e.fillStyle="#f8fafc",e.font='bold 64px "Yu Gothic UI", serif',e.textAlign="center";for(let a=0;a<4;a++){const l=a*i+i/2;e.fillText(s[a],l,155)}e.strokeStyle="#f8fafc",e.lineWidth=3,e.beginPath(),e.arc(256,75,22,0,Math.PI*2),e.stroke(),e.font="bold 22px serif",e.fillText("麺",256,83),e.fillStyle="#f8fafc",e.font="bold 13px sans-serif",e.fillText("営 業 中",450,220);const r=new ie(n);return _t.set(o,r),r}function X1(){const o="ramen-kenbaiki",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8e2d8",e.fillRect(0,0,512,512),e.fillStyle="#262d36",e.fillRect(16,16,480,480),e.strokeStyle="#4a5568",e.lineWidth=3,e.strokeRect(16,16,480,480),e.fillStyle="#111822",e.fillRect(28,28,456,48),e.fillStyle="#f59e0b",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("食券をお買い求めください",256,56),e.font="11px sans-serif",e.fillStyle="#94a3b8",e.fillText("PLEASE PURCHASE TICKET FIRST  |  千円札・二千円札・硬貨対応",256,70),e.fillStyle="#06101a",e.fillRect(320,88,160,36),e.strokeStyle="#1e293b",e.strokeRect(320,88,160,36),e.fillStyle="#22c55e",e.font="bold 18px monospace",e.textAlign="right",e.fillText("¥1,000",470,113),e.fillStyle="#dc2626",e.fillRect(28,92,280,28),e.fillStyle="#ffffff",e.font="bold 13px sans-serif",e.textAlign="center",e.fillText("★ 当店おすすめ 定番らーめん ★",168,111);const i=[{title:"特製豚骨らーめん",price:"¥980",color:"#f59e0b"},{title:"チャーシュー麺",price:"¥1,100",color:"#ef4444"},{title:"濃厚魚介味噌",price:"¥950",color:"#d97706"},{title:"味玉豚骨らーめん",price:"¥880",color:"#f59e0b"},{title:"辛味噌らーめん",price:"¥920",color:"#dc2626"},{title:"あっさり魚介醤油",price:"¥850",color:"#3b82f6"},{title:"替玉 (一玉)",price:"¥150",color:"#10b981"},{title:"博多一口餃子(5個)",price:"¥380",color:"#10b981"},{title:"炙りチャーシュー丼",price:"¥350",color:"#f97316"},{title:"追加トッピング 煮玉子",price:"¥120",color:"#64748b"},{title:"追加 メンマ/白ネギ",price:"¥120",color:"#64748b"},{title:"アサヒ スーパードライ",price:"¥550",color:"#eab308"}],s=144,r=58,a=28,l=132;for(let h=0;h<i.length;h++){const f=h%3,u=Math.floor(h/3),d=a+f*156,m=l+u*66,_=i[h];e.fillStyle="#1e2632",e.fillRect(d,m,s,r),e.strokeStyle=_.color,e.lineWidth=2,e.strokeRect(d,m,s,r),e.fillStyle=_.color,e.fillRect(d+4,m+4,s-8,16),e.fillStyle="#ffffff",e.font="bold 9.5px sans-serif",e.textAlign="center",e.fillText(_.title,d+s/2,m+16),e.fillStyle="#ffffff",e.font="bold 15px monospace",e.fillText(_.price,d+s/2,m+42),e.fillStyle="#22c55e",e.beginPath(),e.arc(d+12,m+47,3.5,0,Math.PI*2),e.fill()}e.fillStyle="#111822",e.fillRect(28,404,210,42),e.strokeStyle="#334155",e.strokeRect(28,404,210,42),e.fillStyle="#38bdf8",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText("紙幣投入口 (1000/2000円)",42,428),e.fillStyle="#0284c7",e.fillRect(170,418,56,12),e.fillStyle="#111822",e.fillRect(256,404,228,42),e.strokeStyle="#334155",e.strokeRect(256,404,228,42),e.fillStyle="#f59e0b",e.fillText("硬貨投入口 (500/100/50/10)",270,428),e.fillStyle="#d97706",e.fillRect(432,416,38,16),e.fillStyle="#0b0f14",e.fillRect(28,454,456,36),e.strokeStyle="#22c55e",e.lineWidth=1.5,e.strokeRect(28,454,456,36),e.fillStyle="#22c55e",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("▼ おつり・食券 口 (TICKET / CHANGE)",256,477);const c=new ie(n);return _t.set(o,c),c}function Y1(){const o="ramen-shop-wall",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8dcc8",e.fillRect(0,0,512,320);for(let a=0;a<600;a++)e.fillStyle=Math.random()>.5?"rgba(180, 160, 130, 0.18)":"rgba(255, 245, 230, 0.25)",e.fillRect(Math.random()*512,Math.random()*320,2,2);const i=20;for(let a=0;a<512;a+=128)e.fillStyle="#3a2416",e.fillRect(a,0,i,320),e.fillStyle="#543622",e.fillRect(a+2,0,i-4,320);e.fillStyle="#3a2416",e.fillRect(0,312,512,16),e.fillStyle="#543622",e.fillRect(0,314,512,12),e.fillStyle="#2a1a10",e.fillRect(0,328,512,184);const s=42;for(let a=0;a<512;a+=s)e.fillStyle=a%(s*2)===0?"#382216":"#2e1c12",e.fillRect(a+2,328,s-4,184),e.fillStyle="#160d08",e.fillRect(a,328,2,184);const r=new ie(n);return r.wrapS=Ce,r.wrapT=Ce,r.repeat.set(3,1),_t.set(o,r),r}function Z1(){const o="ramen-shop-floor",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#22262c",e.fillRect(0,0,512,512);const i=128;for(let r=0;r<512;r+=i)for(let a=0;a<512;a+=i){const l=Math.floor((Math.sin(r*3+a*7)+1)*8);e.fillStyle=`rgb(${34+l},${38+l},${44+l})`,e.fillRect(r+3,a+3,i-6,i-6);for(let c=0;c<8;c++)e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(r+Math.random()*(i-6),a+Math.random()*(i-6),2,2)}e.strokeStyle="#121519",e.lineWidth=4,e.strokeRect(0,0,512,512);for(let r=i;r<512;r+=i)e.beginPath(),e.moveTo(r,0),e.lineTo(r,512),e.stroke();for(let r=i;r<512;r+=i)e.beginPath(),e.moveTo(0,r),e.lineTo(512,r),e.stroke();const s=new ie(n);return s.wrapS=Ce,s.wrapT=Ce,s.repeat.set(3,3),_t.set(o,s),s}const j='"Yu Gothic UI", "Yu Gothic", Meiryo, "Hiragino Kaku Gothic ProN", "MS PGothic", sans-serif';function q1(){const o="storefront-dental-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#eaf5f7"),i.addColorStop(.55,"#dbeff2"),i.addColorStop(1,"#cde6ea"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=e.getImageData(0,0,1024,512),r=s.data;for(let d=0;d<r.length;d+=4){const m=(Math.random()-.5)*8;r[d]=Math.min(255,Math.max(0,r[d]+m)),r[d+1]=Math.min(255,Math.max(0,r[d+1]+m)),r[d+2]=Math.min(255,Math.max(0,r[d+2]+m))}e.putImageData(s,0,0),e.fillStyle="#175261",e.fillRect(0,0,1024,88),e.fillStyle="#2db8aa",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(60,32),e.bezierCurveTo(54,24,68,22,68,34),e.bezierCurveTo(68,22,82,24,76,32),e.bezierCurveTo(82,48,76,60,72,60),e.bezierCurveTo(69,60,68,46,68,46),e.bezierCurveTo(68,46,67,60,64,60),e.bezierCurveTo(60,60,54,48,60,32),e.fill(),e.fillStyle="#ffffff",e.font=`700 36px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",114,34),e.fillStyle="#a6e2ec",e.font=`500 17px ${j}`,e.fillText("PARKSIDE DENTAL CLINIC",116,64),e.fillStyle="#e2f7fa",e.font=`600 18px ${j}`,e.textAlign="right",e.fillText("一般歯科 ・ 小児歯科 ・ 矯正歯科 ・ 口腔外科 ・ 予防定期検診",990,44),e.fillStyle="rgba(255, 255, 255, 0.92)",e.strokeStyle="#bedee3",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${j}`,e.textAlign="left",e.fillText("【 診療時間のご案内 】",56,138);const a=56,l=165,c=48,h=["月","火","水","木","金","土","日/祝"];e.fillStyle="#edf7f9",e.fillRect(a+90,l,c*7,28),e.fillStyle="#175261",e.font=`700 15px ${j}`,e.textAlign="center",h.forEach((d,m)=>{d==="木"||d.includes("日")?e.fillStyle="#d94b4b":e.fillStyle="#175261",e.fillText(d,a+90+m*c+c/2,l+14)}),[{label:"09:30 - 13:00",marks:["●","●","●","休","●","●","休"]},{label:"14:30 - 19:30",marks:["●","●","●","休","●","▲","休"]}].forEach((d,m)=>{const _=l+28+m*34;e.fillStyle=m%2===0?"#ffffff":"#f8fcfd",e.fillRect(a,_,90+c*7,34),e.strokeStyle="#d7eaee",e.strokeRect(a,_,90+c*7,34),e.fillStyle="#2a3b40",e.font=`600 13px ${j}`,e.textAlign="center",e.fillText(d.label,a+45,_+17),d.marks.forEach((x,p)=>{x==="休"?(e.fillStyle="#b84242",e.font=`700 14px ${j}`):x==="▲"?(e.fillStyle="#e07d10",e.font=`700 15px ${j}`):(e.fillStyle="#1d788a",e.font=`700 16px ${j}`),e.fillText(x,a+90+p*c+c/2,_+17)})}),e.fillStyle="#57727a",e.font=`500 13px ${j}`,e.textAlign="left",e.fillText("▲ 土曜午後は 14:30〜17:00 まで診療",56,290),e.fillText("休診日：木曜日・日曜日・祝祭日",56,312),e.fillStyle="#1e7587",e.font=`600 13px ${j}`,e.fillText("各種健康保険取扱 ・ 労災保険指定医療機関",56,345),e.fillStyle="rgba(255, 255, 255, 0.92)",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${j}`,e.textAlign="left",e.fillText("【 ご予約・急患随時受付 】",546,138),e.fillStyle="#41575f",e.font=`500 15px ${j}`,e.fillText("当院は患者様をお待たせしない予約優先制です。",546,172),e.fillText("急な歯の痛み・詰め物の脱落は当日診療いたします。",546,198),e.fillStyle="#edf8fa",e.strokeStyle="#3296a6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,222,420,72,6),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`600 14px ${j}`,e.fillText("ご予約・お問い合わせダイヤル",566,242),e.fillStyle="#134e5c",e.font=`800 32px ${j}`,e.fillText("TEL 03-3456-7890",566,274),e.fillStyle="#4a6870",e.font=`500 14px ${j}`,e.fillText("● 痛みの少ない麻酔治療　● デジタルCT完備　● 完全滅菌対応",546,326),e.fillText("● 院内バリアフリー設計　● ベビーカー・車椅子そのまま入室可",546,352),e.fillStyle="rgba(255, 255, 255, 0.55)",e.fillRect(0,400,1024,112),e.fillStyle="rgba(255, 255, 255, 0.65)";for(let d=0;d<1024;d+=16)e.fillRect(d,405,8,95);e.fillStyle="#1c783c",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${j}`,e.fillText("TOUCH 押してください",512,465);const u=new ie(n);return u.colorSpace=de,u.anisotropy=4,_t.set(o,u),u}function $1(){const o="storefront-dental-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#154a57"),i.addColorStop(.5,"#1b5969"),i.addColorStop(1,"#113e4a"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#47a8bc",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(110,128,64,0,Math.PI*2),e.fill(),e.fillStyle="#1b5969",e.beginPath(),e.moveTo(96,100),e.bezierCurveTo(84,82,110,78,110,104),e.bezierCurveTo(110,78,136,82,124,100),e.bezierCurveTo(138,134,126,158,118,158),e.bezierCurveTo(112,158,110,130,110,130),e.bezierCurveTo(110,130,108,158,102,158),e.bezierCurveTo(94,158,82,134,96,100),e.fill(),e.fillStyle="#ffffff",e.font=`800 68px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",205,105),e.fillStyle="#9fe1ee",e.font=`600 24px ${j}`,e.fillText("PARKSIDE DENTAL CLINIC  ・  TEL 03-3456-7890",210,172),e.fillStyle="#2db8aa",e.beginPath(),e.roundRect(790,80,190,96,12),e.fill(),e.fillStyle="#ffffff",e.font=`700 20px ${j}`,e.textAlign="center",e.fillText("夜7時半まで",885,115),e.font=`600 16px ${j}`,e.fillText("急患随時受付",885,146);const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function K1(){const o="storefront-cleaners-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f0f5fb"),i.addColorStop(1,"#dfeaf5"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#1e3f7a",e.fillRect(0,0,1024,88),e.strokeStyle="#ffd84d",e.lineWidth=4,e.beginPath(),e.arc(68,30,12,0,Math.PI,!0),e.moveTo(40,58),e.lineTo(68,42),e.lineTo(96,58),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 38px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",120,36),e.fillStyle="#ffd84d",e.font=`600 17px ${j}`,e.fillText("SHIROKANE DRY CLEANING & LAUNDRY",122,66),e.fillStyle="#ffffff",e.font=`700 18px ${j}`,e.textAlign="right",e.fillText("朝10時お預かり ➡ 夕方5時お渡し！ スピード即日仕上げ",990,44),e.fillStyle="#ffffff",e.strokeStyle="#bed1e8",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 20px ${j}`,e.textAlign="left",e.fillText("【 白金クリーニング 料金表 】",56,138),[{name:"ワイシャツ (立体抗菌消臭仕上)",price:"¥220〜"},{name:"スーツ上下 (汗抜きプレス付)",price:"¥1,280〜"},{name:"ジャケット・ブレザー",price:"¥780〜"},{name:"スラックス・スカート",price:"¥550〜"},{name:"ダウンジャケット・コート",price:"¥1,980〜"},{name:"毛布・羽毛ふとん丸洗い",price:"¥1,800〜"}].forEach((l,c)=>{const h=172+c*32;e.fillStyle="#2d3b4d",e.font=`600 15px ${j}`,e.textAlign="left",e.fillText(l.name,56,h),e.fillStyle="#a0b3cb";for(let f=295;f<400;f+=8)e.fillRect(f,h-2,3,3);e.fillStyle="#d63429",e.font=`800 17px ${j}`,e.textAlign="right",e.fillText(l.price,470,h)}),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#3a4b60",e.fillRect(550,130,412,6),["#1d2430","#3b4352","#263347","#4b5563","#1e2838"].forEach((l,c)=>{const h=560+c*80;e.strokeStyle="#8d99ae",e.lineWidth=2,e.beginPath(),e.moveTo(h+35,136),e.lineTo(h+15,155),e.lineTo(h+55,155),e.closePath(),e.stroke(),e.fillStyle=l,e.fillRect(h+15,155,40,75),e.fillStyle="rgba(255, 255, 255, 0.45)",e.fillRect(h+10,150,50,95),e.strokeStyle="rgba(180, 210, 240, 0.7)",e.strokeRect(h+10,150,50,95),e.fillStyle=c%2===0?"#ff4d4d":"#3385ff",e.fillRect(h+42,160,14,20)}),e.fillStyle="#eef5fc",e.strokeStyle="#296ed6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,260,420,100,6),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 18px ${j}`,e.textAlign="left",e.fillText("★ 24時間コインランドリー併設 ★",566,285),e.fillStyle="#3f536e",e.font=`500 14px ${j}`,e.fillText("大型洗濯乾燥機・スニーカーウォッシャー完備！",566,312),e.fillText("営業時間: 本店 8:00〜20:00 (水曜定休) / コインランドリー 24時間",566,338),e.fillStyle="rgba(235, 243, 252, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#1e3f7a",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${j}`,e.fillText("TOUCH 押してください",512,465);const a=new ie(n);return a.colorSpace=de,a.anisotropy=4,_t.set(o,a),a}function J1(){const o="storefront-cleaners-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#1c3e78"),i.addColorStop(.5,"#255099"),i.addColorStop(1,"#173466"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#ffd84d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#1c3e78",e.lineWidth=5,e.beginPath(),e.arc(105,105,15,0,Math.PI,!0),e.moveTo(75,142),e.lineTo(105,120),e.lineTo(135,142),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 68px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",200,102),e.fillStyle="#ffd84d",e.font=`700 24px ${j}`,e.fillText("SHIROKANE DRY CLEANING  ・  24H コインランドリー併設",205,168),e.fillStyle="#e63946",e.beginPath(),e.roundRect(790,75,190,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${j}`,e.textAlign="center",e.fillText("即日仕上げ",885,114),e.font=`600 15px ${j}`,e.fillText("朝10時➡夕方5時",885,150);const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function j1(){const o="storefront-izakaya-facade",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#261e19",e.fillRect(0,0,1024,512);for(let p=0;p<1024;p+=32)e.fillStyle=p%64===0?"#1f1814":"#2d231d",e.fillRect(p,0,31,512),e.fillStyle="#140f0c",e.fillRect(p+31,0,1,512);const i=600,s=212,r=150,a=5,l=i/a;for(let p=0;p<a;p++){const M=s+p*l;e.fillStyle="#1c283f",e.fillRect(M+2,0,l-4,r),e.fillStyle="#141e30",e.fillRect(M+2,r-12,l-4,12)}const c=s+i/2;e.strokeStyle="#f4eedb",e.lineWidth=4,e.beginPath(),e.arc(c,65,34,0,Math.PI*2),e.stroke(),e.fillStyle="#f4eedb",e.font='800 48px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("魚",c,64),e.font='800 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText("和",s+l*.5,75),e.fillText("食",s+l*1.5,75),e.fillText("酒",s+l*3.5,75),e.fillText("処",s+l*4.5,75);const h=40,f=175,u=440,d=290,m=e.createRadialGradient(h+u/2,f+d/2,40,h+u/2,f+d/2,280);m.addColorStop(0,"#ffe49e"),m.addColorStop(.7,"#ffaa44"),m.addColorStop(1,"#c96a1a"),e.fillStyle=m,e.fillRect(h,f,u,d),e.fillStyle="#261b14",e.lineWidth=6,e.strokeRect(h,f,u,d);for(let p=h;p<h+u;p+=36)e.fillRect(p,f,6,d);for(let p=f;p<f+d;p+=42)e.fillRect(h,p,u,6);[{title:"名物 もつ煮込み",price:"四八〇円"},{title:"本日のお造り盛合",price:"一二八〇円"},{title:"炭火串焼き盛合せ",price:"八五〇円"},{title:"旬魚 塩焼き各種",price:"六八〇円"},{title:"全国厳選 地酒一合",price:"七五〇円"}].forEach((p,M)=>{const v=530+M*92,w=175;e.fillStyle="#9e6e43",e.fillRect(v,w,76,285),e.strokeStyle="#5a3d24",e.lineWidth=3,e.strokeRect(v,w,76,285),e.fillStyle="#170e08",e.font='700 17px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",p.title.split("").forEach((R,E)=>{e.fillText(R,v+38,w+30+E*24)}),e.fillStyle="#9e241b",e.fillRect(v+26,w+215,24,24),e.fillStyle="#ffffff",e.font="700 12px serif",e.fillText("極",v+38,w+231),e.fillStyle="#2a1a10",e.font='600 13px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText(p.price,v+38,w+265)});const x=new ie(n);return x.colorSpace=de,x.anisotropy=4,_t.set(o,x),x}function Q1(){const o="storefront-izakaya-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#5a1910"),i.addColorStop(.5,"#7a2016"),i.addColorStop(1,"#4a120b"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#dfa84a",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#d93829",e.beginPath(),e.ellipse(110,128,48,62,0,0,Math.PI*2),e.fill(),e.strokeStyle="#220805",e.lineWidth=3,e.stroke(),e.fillStyle="#ffffff",e.font='900 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("酒",110,128),e.fillStyle="#ffeed0",e.font='900 72px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("和食 酒処 魚河岸",200,104),e.fillStyle="#dfa84a",e.font=`700 24px ${j}`,e.fillText("TRADITIONAL IZAKAYA UOGASHI  ・  旬魚 炭火串焼 厳選銘酒",205,172),e.fillStyle="#b32215",e.fillRect(860,80,96,96),e.strokeStyle="#ffd875",e.lineWidth=2,e.strokeRect(862,82,92,92),e.fillStyle="#ffffff",e.font="700 20px serif",e.textAlign="center",e.fillText("商売",908,114),e.fillText("繁盛",908,148);const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function tg(){const o="storefront-pharmacy-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f2faf8"),i.addColorStop(1,"#ddf1ec"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#0f6150",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(60,26,16,36),e.fillRect(50,36,36,16),e.fillStyle="#ffffff",e.font=`800 36px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 森薬局",114,34),e.fillStyle="#9ee8d7",e.font=`600 17px ${j}`,e.fillText("MORI CLINIC & DISPENSING PHARMACY",116,64),e.fillStyle="#ffffff",e.font=`700 20px ${j}`,e.textAlign="right",e.fillText("【保険調剤】 全国の処方せん受け付けます",990,44),e.fillStyle="#ffffff",e.strokeStyle="#b6e0d5",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${j}`,e.textAlign="left",e.fillText("【 森クリニック 診療時間 】",56,138),e.fillStyle="#2e4741",e.font=`600 15px ${j}`,e.fillText("診療科目：内科 ・ 消化器科 ・ 呼吸器科 ・ 小児科",56,172),e.fillText("午前診療：09:00 〜 12:30 （月・火・木・金・土）",56,206),e.fillText("午後診療：15:00 〜 18:30 （月・火・木・金）",56,238),e.fillStyle="#b83b3b",e.fillText("休診日：水曜午後・土曜午後・日曜・祝祭日",56,272),e.fillStyle="#376b5f",e.font=`500 14px ${j}`,e.fillText("● 各種健康診断・予防接種 随時受付",56,316),e.fillText("● 在宅医療・訪問診療対応クリニック",56,344),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${j}`,e.textAlign="left",e.fillText("【 調剤薬局 サービス案内 】",546,138),e.fillStyle="#e8f7f3",e.strokeStyle="#28a687",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,160,420,85,6),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 22px ${j}`,e.fillText("処方せん受付中",566,188),e.fillStyle="#31544c",e.font=`500 14px ${j}`,e.fillText("大学病院・総合病院・地域の診療所すべての処方せん調剤可",566,222),e.fillStyle="#2f4b44",e.font=`500 14px ${j}`,e.fillText("● 電子お薬手帳アプリ対応",546,276),e.fillText("● お薬の飲み合わせ・健康相談 随時受付",546,304),e.fillText("● 一般用医薬品(OTC)・衛生材料・マスク・消毒液完備",546,332),e.fillText("● 各種クレジットカード・電子マネー対応",546,360),e.fillStyle="rgba(230, 245, 240, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#0f6150",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${j}`,e.fillText("TOUCH 押してください",512,465);const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function eg(){const o="storefront-pharmacy-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#0c4d40"),i.addColorStop(.5,"#136b58"),i.addColorStop(1,"#093a30"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#43d9b5",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(90,88,30,80),e.fillRect(65,113,80,30),e.fillStyle="#ffffff",e.font=`800 66px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 薬局",195,102),e.fillStyle="#9fe9d8",e.font=`600 24px ${j}`,e.fillText("MORI CLINIC & PHARMACY  ・  処方せん受付・内科・小児科",200,168),e.fillStyle="#00a86b",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 22px ${j}`,e.textAlign="center",e.fillText("保険調剤",897,114),e.font=`600 16px ${j}`,e.fillText("処方せん受付",897,150);const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function ng(){const o="storefront-bookstore-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f9f5ed"),i.addColorStop(1,"#ecdfcd"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#542617",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.font='800 38px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("東書店 本屋",48,36),e.fillStyle="#e8c9b5",e.font=`600 18px ${j}`,e.fillText("HIGASHI BOOKSTORE & COMICS",50,66),e.fillStyle="#ffffff",e.font=`700 18px ${j}`,e.textAlign="right",e.fillText("話題のベストセラー・新刊コミック・文庫・雑誌 豊富に取り揃えております",990,44);const s=115,r=250,a=["#b83328","#254b85","#247a46","#87428f","#d97d21","#1f2937","#b5832a","#326b78","#a82c4e","#4f46e5","#0d9488","#ea580c","#15803d","#4338ca","#be185d","#b45309","#1e40af","#065f46","#831843","#701a75","#1e3a8a"];e.fillStyle="#402619",e.fillRect(36,s+95,952,10);for(let c=45;c<970;c+=18){const h=a[c*7%a.length],f=75+c*13%20;e.fillStyle=h,e.fillRect(c,s+95-f,15,f)}e.fillStyle="#402619",e.fillRect(36,r+105,952,10);for(let c=45;c<970;c+=22){const h=a[c*11%a.length],f=85+c*17%20;e.fillStyle=h,e.fillRect(c,r+105-f,18,f)}e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#c9542a",e.lineWidth=3,e.beginPath(),e.roundRect(80,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#c9542a",e.font=`800 20px ${j}`,e.textAlign="center",e.fillText("【 今週のベストセラー 】",210,185),e.fillStyle="#261b16",e.font=`700 15px ${j}`,e.fillText("1位 直木賞受賞 話題の巨編",210,222),e.fillText("2位 週刊少年コミック 最新巻",210,254),e.fillText("3位 ビジネス実践名著",210,286),e.fillText("4位 東京下町 街歩きガイド",210,318),e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#2b63ab",e.lineWidth=3,e.beginPath(),e.roundRect(680,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#2b63ab",e.font=`800 20px ${j}`,e.textAlign="center",e.fillText("★ コミック新刊 入荷 ★",810,185),e.fillStyle="#1c2838",e.font=`700 15px ${j}`,e.fillText("週刊ジャンプ系 コミックス",810,222),e.fillText("少年マガジン系 コミックス",810,254),e.fillText("青年コミック・名作復刻版",810,286),e.fillText("図書カードNEXT 取扱店",810,318),e.fillStyle="rgba(240, 230, 218, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#542617",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${j}`,e.fillText("東書店 入口",512,465);const l=new ie(n);return l.colorSpace=de,l.anisotropy=4,_t.set(o,l),l}function ig(){const o="storefront-bookstore-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#4a2013"),i.addColorStop(.5,"#632e1c"),i.addColorStop(1,"#3b180d"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#e0a96d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#4a2013",e.lineWidth=4,e.beginPath(),e.moveTo(75,110),e.quadraticCurveTo(105,120,105,150),e.quadraticCurveTo(105,120,135,110),e.lineTo(135,145),e.quadraticCurveTo(105,155,105,155),e.quadraticCurveTo(105,155,75,145),e.closePath(),e.stroke(),e.fillStyle="#ffeedb",e.font='900 74px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("書店 本屋",195,102),e.fillStyle="#dfaf85",e.font=`700 24px ${j}`,e.fillText("HIGASHI BOOKSTORE & COMICS  ・  本・雑誌・コミック・文具",200,168),e.fillStyle="#8f3c20",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("本・コミック",897,114),e.font=`600 16px ${j}`,e.fillText("新刊続々入荷",897,150);const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function og(){const o="storefront-cafe-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#2d1f18"),i.addColorStop(1,"#1b120d"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=e.createRadialGradient(720,220,40,720,220,320);s.addColorStop(0,"#ffbf66"),s.addColorStop(.7,"#d47d22"),s.addColorStop(1,"#5e2e05"),e.fillStyle=s,e.fillRect(480,80,500,320),e.fillStyle="#8c5e37",e.beginPath(),e.roundRect(520,250,100,140,10),e.roundRect(640,260,100,130,10),e.roundRect(760,240,110,150,10),e.fill(),e.fillStyle="#26150b",e.font=`800 15px ${j}`,e.textAlign="center",e.fillText("BRAZIL",570,310),e.fillText("ETHIOPIA",690,320),e.fillText("COLOMBIA",815,305);for(const l of[600,740,870])e.strokeStyle="#2b1b11",e.lineWidth=2,e.beginPath(),e.moveTo(l,80),e.lineTo(l,140),e.stroke(),e.fillStyle="#fff4cc",e.beginPath(),e.arc(l,145,12,0,Math.PI*2),e.fill();e.fillStyle="#212726",e.strokeStyle="#855938",e.lineWidth=6,e.beginPath(),e.roundRect(40,50,400,370,8),e.fill(),e.stroke(),e.fillStyle="#fceecb",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("CAFE MAME  珈琲豆",240,90),e.strokeStyle="#e0c99f",e.lineWidth=1.5,e.beginPath(),e.moveTo(100,105),e.lineTo(380,105),e.stroke(),[{name:"Tokyo Blend (深煎り)",price:"¥480"},{name:"Ethiopia Yirgacheffe (浅煎り)",price:"¥550"},{name:"Cafe Latte (Hot/Iced)",price:"¥520"},{name:"Cold Brew Nitro Coffee",price:"¥550"},{name:"自家製 バスクチーズケーキ",price:"¥500"},{name:"クラシック カスタードプリン",price:"¥450"}].forEach((l,c)=>{const h=145+c*36;e.fillStyle="#ffffff",e.font=`600 15px ${j}`,e.textAlign="left",e.fillText(l.name,65,h),e.fillStyle="#ffd680",e.font=`700 16px ${j}`,e.textAlign="right",e.fillText(l.price,415,h)}),e.fillStyle="#dfba87",e.font=`500 13px ${j}`,e.textAlign="center",e.fillText("自家焙煎 厳選シングルオリジン豆販売 100g〜",240,385),e.fillStyle="rgba(40, 26, 18, 0.85)",e.fillRect(0,430,1024,82),e.fillStyle="#e8be8b",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("OPEN 8:30 〜 19:30  /  TAKE OUT OK",512,475);const a=new ie(n);return a.colorSpace=de,a.anisotropy=4,_t.set(o,a),a}function sg(){const o="storefront-cafe-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#361e12"),i.addColorStop(.5,"#4a2b1b"),i.addColorStop(1,"#2a160c"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#d4a36a",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#361e12",e.beginPath(),e.roundRect(82,110,46,38,4),e.fill(),e.strokeStyle="#361e12",e.lineWidth=4,e.beginPath(),e.arc(130,126,10,-Math.PI/2,Math.PI/2),e.stroke(),e.fillStyle="#ffeed9",e.font='900 70px "Hiragino Mincho ProN", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("喫茶 TOKYO CAFE",195,102),e.fillStyle="#d4a36a",e.font=`700 24px ${j}`,e.fillText("CAFE MAME  ・  ROASTERY & SPECIALTY BEANS",200,168),e.fillStyle="#6e3c23",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${j}`,e.textAlign="center",e.fillText("自家焙煎",897,114),e.font=`600 16px ${j}`,e.fillText("珈琲豆販売",897,150);const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function rg(o){const t=`aframe-sign-${o}`,n=_t.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=768;const i=e.getContext("2d");o==="dental"?(i.fillStyle="#f0f8fa",i.fillRect(0,0,512,768),i.strokeStyle="#1b5b6b",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#1b5b6b",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${j}`,i.textAlign="center",i.fillText("パークサイド歯科",256,75),i.font=`600 20px ${j}`,i.fillText("PARKSIDE DENTAL",256,120),i.fillStyle="#1b5b6b",i.font=`800 32px ${j}`,i.fillText("【 本日診療中 】",256,210),i.fillStyle="#2a444c",i.font=`600 24px ${j}`,i.fillText("午前  09:30 〜 13:00",256,270),i.fillText("午後  14:30 〜 19:30",256,320),i.fillStyle="#d94b4b",i.font=`700 22px ${j}`,i.fillText("初診・急患 随時受付",256,390),i.fillStyle="#32707e",i.font=`600 21px ${j}`,i.fillText("歯のクリーニング・定期検診",256,445),i.fillText("ホワイトニング・小児歯科",256,485),i.fillText("保険証をご持参ください",256,540),i.fillStyle="#134754",i.font=`800 32px ${j}`,i.fillText("TEL 03-3456-7890",256,620),i.fillStyle="#e85d04",i.fillRect(40,670,432,50),i.fillStyle="#ffffff",i.font=`700 22px ${j}`,i.fillText("お気軽にご来院ください",256,702)):o==="cleaners"?(i.fillStyle="#f0f5fc",i.fillRect(0,0,512,768),i.strokeStyle="#1e3f7a",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#1e3f7a",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${j}`,i.textAlign="center",i.fillText("白金クリーニング",256,75),i.fillStyle="#ffd84d",i.font=`700 20px ${j}`,i.fillText("SHIROKANE CLEANING",256,120),i.fillStyle="#e63946",i.fillRect(30,180,452,65),i.fillStyle="#ffffff",i.font=`800 32px ${j}`,i.fillText("★ 本日ポイント2倍DAY ★",256,224),i.fillStyle="#1e3f7a",i.font=`800 26px ${j}`,i.fillText("ワイシャツ 抗菌仕上  ¥220",256,300),i.fillText("スーツ上下 汗抜き付  ¥1,280",256,350),i.fillText("ダウン・コート類   ¥1,980",256,400),i.fillStyle="#324a6d",i.font=`600 22px ${j}`,i.fillText("朝10時お預かり ➡ 夕方5時お渡し",256,475),i.fillText("スピード即日仕上げ可能！",256,520),i.fillStyle="#1e3f7a",i.fillRect(30,570,452,130),i.fillStyle="#ffd84d",i.font=`800 26px ${j}`,i.fillText("24時間コインランドリー",256,615),i.fillStyle="#ffffff",i.font=`600 20px ${j}`,i.fillText("大型洗濯乾燥機 好評稼働中！",256,660)):o==="izakaya"?(i.fillStyle="#211c19",i.fillRect(0,0,512,768),i.strokeStyle="#85512b",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#94291e",i.fillRect(14,14,484,130),i.fillStyle="#fff0d9",i.font='900 44px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("和食・酒処 魚河岸",256,75),i.fillStyle="#ffd580",i.font=`700 22px ${j}`,i.fillText("元気に営業中！",256,120),i.fillStyle="#ffd875",i.font='800 28px "Hiragino Mincho ProN", serif',i.fillText("〜 本日のおすすめ 〜",256,195),i.fillStyle="#ffffff",i.font='700 24px "Hiragino Mincho ProN", serif',i.fillText("● 本日の刺身三種盛り   九八〇円",256,255),i.fillText("● 特製 名物もつ煮込み   四八〇円",256,310),i.fillText("● 備長炭 串焼き五本盛   八五〇円",256,365),i.fillText("● 本日の地酒 純米大吟醸 七五〇円",256,420),i.fillStyle="#94291e",i.fillRect(30,480,452,100),i.fillStyle="#fff4de",i.font=`800 26px ${j}`,i.fillText("【 晩酌セット 1,000円 】",256,522),i.font=`600 18px ${j}`,i.fillText("生ビール ＋ 小鉢 ＋ 串焼き3本！",256,558),i.fillStyle="#e8a84a",i.font=`700 22px ${j}`,i.fillText("お一人様大歓迎！ カウンター席有",256,650),i.fillText("いらっしゃいませ！",256,695)):o==="pharmacy"?(i.fillStyle="#f0faf6",i.fillRect(0,0,512,768),i.strokeStyle="#0f6150",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#0f6150",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${j}`,i.textAlign="center",i.fillText("森クリニック / 薬局",256,75),i.fillStyle="#9fe8d7",i.font=`600 20px ${j}`,i.fillText("PHARMACY & CLINIC",256,120),i.fillStyle="#00a86b",i.fillRect(30,180,452,70),i.fillStyle="#ffffff",i.font=`800 28px ${j}`,i.fillText("【 保険調剤 処方せん受付 】",256,225),i.fillStyle="#21423a",i.font=`600 22px ${j}`,i.fillText("全国どちらの医療機関の処方せんも",256,300),i.fillText("受け付けております",256,335),i.fillStyle="#0f6150",i.font=`700 24px ${j}`,i.fillText("森クリニック 診療時間",256,410),i.fillStyle="#31544c",i.font=`600 21px ${j}`,i.fillText("午前 9:00〜12:30 / 午後 15:00〜18:30",256,450),i.fillText("内科・小児科・呼吸器科",256,490),i.fillStyle="#0f6150",i.fillRect(30,560,452,140),i.fillStyle="#ffffff",i.font=`700 22px ${j}`,i.fillText("お薬のご相談・在宅医療対応",256,605),i.fillText("電子お薬手帳アプリ対応",256,645),i.fillText("各種キャッシュレス決済可",256,680)):o==="bookstore"?(i.fillStyle="#faf4ec",i.fillRect(0,0,512,768),i.strokeStyle="#542617",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#542617",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font='900 44px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("東書店 本屋",256,75),i.fillStyle="#dfaf85",i.font=`600 20px ${j}`,i.fillText("HIGASHI BOOKSTORE",256,120),i.fillStyle="#c94a28",i.fillRect(30,180,452,65),i.fillStyle="#ffffff",i.font=`800 28px ${j}`,i.fillText("★ 今週のコミック新刊 入荷！ ★",256,224),i.fillStyle="#261b16",i.font=`700 24px ${j}`,i.fillText("話題の直木賞・芥川賞 受賞作",256,300),i.fillText("週刊・月刊 雑誌最新号 発売中",256,350),i.fillText("文庫・新書・文具・万年筆",256,400),i.fillStyle="#542617",i.fillRect(30,470,452,110),i.fillStyle="#ffd8a8",i.font=`800 26px ${j}`,i.fillText("図書カード NEXT 取扱店",256,515),i.fillStyle="#ffffff",i.font=`600 20px ${j}`,i.fillText("全国共通 図書カードご贈答にどうぞ",256,555),i.fillStyle="#542617",i.font=`700 22px ${j}`,i.fillText("営業時間 10:00 〜 21:00",256,640),i.fillText("どうぞお気軽にお立ち寄りください",256,685)):(i.fillStyle="#1f1a17",i.fillRect(0,0,512,768),i.strokeStyle="#6e3c23",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#4a2b1b",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font='900 42px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("CAFE MAME 喫茶",256,75),i.fillStyle="#e0a96d",i.font=`700 20px ${j}`,i.fillText("SPECIALTY COFFEE ROASTERY",256,120),i.fillStyle="#ffd875",i.font=`800 28px ${j}`,i.fillText("〜 TODAY’S DRIP 〜",256,195),i.fillStyle="#ffffff",i.font=`700 23px ${j}`,i.fillText("Ethiopia Yirgacheffe G1",256,245),i.fillStyle="#d4a36a",i.font=`500 18px ${j}`,i.fillText("フローラルな香りと華やかな柑橘の酸味",256,278),i.fillStyle="#ffffff",i.font=`700 22px ${j}`,i.fillText("自家製バスクチーズケーキ  ¥500",256,340),i.fillText("クラシックカスタードプリン  ¥450",256,385),i.fillStyle="#4a2b1b",i.fillRect(30,450,452,100),i.fillStyle="#ffd875",i.font=`800 26px ${j}`,i.fillText("自家焙煎 珈琲豆販売",256,492),i.fillStyle="#ffffff",i.font=`600 18px ${j}`,i.fillText("お好みに合わせてお挽きいたします",256,528),i.fillStyle="#e0a96d",i.font=`700 24px ${j}`,i.fillText("テイクアウト OK！",256,610),i.fillStyle="#ffffff",i.font=`600 20px ${j}`,i.fillText("OPEN 8:30 〜 19:30",256,660));const s=new ie(e);return s.colorSpace=de,s.anisotropy=4,_t.set(t,s),s}function ag(){const o="storefront-residential-foyer",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1c2026",e.fillRect(0,0,512,512),e.strokeStyle="#434b57",e.lineWidth=4,e.strokeRect(10,10,492,492),e.fillStyle="#2a313d",e.fillRect(30,30,452,70),e.fillStyle="#d4dbe6",e.font=`700 26px ${j}`,e.textAlign="center",e.fillText("RESIDENCE ENTRANCE",256,65),e.font=`500 16px ${j}`,e.fillText("居住者専用 ・ オートロックシステム",256,88),e.fillStyle="#10141a",e.beginPath(),e.roundRect(136,130,240,320,10),e.fill(),e.strokeStyle="#5a6575",e.lineWidth=3,e.stroke(),e.fillStyle="#06090c",e.beginPath(),e.arc(256,175,24,0,Math.PI*2),e.fill(),e.strokeStyle="#404c5c",e.stroke(),e.fillStyle="#3a86ff",e.beginPath(),e.arc(256,175,8,0,Math.PI*2),e.fill(),e.fillStyle="#1d3328",e.fillRect(176,215,160,40),e.fillStyle="#4ade80",e.font="700 16px monospace",e.textAlign="center",e.fillText("ROOM No. _ _ _",256,240),["1","2","3","4","5","6","7","8","9","消","0","呼"].forEach((r,a)=>{const l=a%3,c=Math.floor(a/3),h=180+l*52,f=275+c*40;e.fillStyle=r==="呼"?"#2563eb":r==="消"?"#dc2626":"#2b3340",e.beginPath(),e.roundRect(h,f,44,32,4),e.fill(),e.fillStyle="#ffffff",e.font=`700 15px ${j}`,e.fillText(r,h+22,f+21)});const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function lg(){const o="cardboard-mikan-box",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#c79862",e.fillRect(0,0,512,512);const i=e.getImageData(0,0,512,512),s=i.data;for(let l=0;l<s.length;l+=4){const c=(Math.random()-.5)*14;s[l]=Math.min(255,Math.max(0,s[l]+c)),s[l+1]=Math.min(255,Math.max(0,s[l+1]+c)),s[l+2]=Math.min(255,Math.max(0,s[l+2]+c))}e.putImageData(i,0,0),e.fillStyle="#b3834e",e.fillRect(0,0,512,28),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fillRect(0,26,512,2),e.fillStyle="#f97316",e.beginPath(),e.arc(120,160,56,0,Math.PI*2),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.ellipse(120,96,26,12,Math.PI/4,0,Math.PI*2),e.ellipse(135,98,22,10,-Math.PI/4,0,Math.PI*2),e.fill(),e.fillStyle="#1e140a",e.font='900 52px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("愛媛みかん",195,145),e.fillStyle="#85200c",e.font=`800 22px ${j}`,e.fillText("極上特選  完熟太陽のめぐみ",198,185),e.fillStyle="#2b1b0d",e.font="700 18px monospace",e.fillText("EHIME MIKAN  L SIZE  10KG",198,215),e.strokeStyle="#c2291d",e.lineWidth=3,e.beginPath(),e.arc(80,310,38,0,Math.PI*2),e.stroke(),e.fillStyle="#c2291d",e.font="800 20px serif",e.textAlign="center",e.fillText("特選",80,305),e.font="700 13px serif",e.fillText("農協保証",80,325),e.fillStyle="#1f1309",e.textAlign="left",e.font="800 32px monospace",e.fillText("↑↑",150,320),e.font=`700 16px ${j}`,e.fillText("取扱注意  水濡厳禁",205,315),e.fillStyle="#1e140a";const r=350;for(let l=r;l<r+120;l+=4)Math.sin(l*9)>-.2&&e.fillRect(l,280,2.5,45);e.font="600 10px monospace",e.fillText("4 901234 567890",r,338);const a=new ie(n);return a.colorSpace=de,a.anisotropy=4,_t.set(o,a),a}function cg(){const o="tokyo-trash-notice-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,512,512),e.strokeStyle="#15803d",e.lineWidth=10,e.strokeRect(5,5,502,502),e.fillStyle="#15803d",e.fillRect(10,10,492,100),e.fillStyle="#ffffff",e.font=`900 38px ${j}`,e.textAlign="center",e.fillText("家庭ごみ集積所",256,58),e.font=`700 16px ${j}`,e.fillText("RESIDENTIAL WASTE COLLECTION POINT",256,92),[{type:"燃やすごみ",days:"毎週  月・木曜日",color:"#dc2626"},{type:"燃やさないごみ",days:"第２・第４水曜日",color:"#2563eb"},{type:"資源ごみ (缶・瓶・PET)",days:"毎週  火曜日",color:"#16a34a"}].forEach((r,a)=>{const l=135+a*62;e.fillStyle=r.color,e.beginPath(),e.roundRect(30,l,165,48,6),e.fill(),e.fillStyle="#ffffff",e.font=`800 17px ${j}`,e.textAlign="center",e.fillText(r.type,112,l+30),e.fillStyle="#1e293b",e.font=`800 24px ${j}`,e.textAlign="left",e.fillText(r.days,215,l+34),e.strokeStyle="#e2e8f0",e.lineWidth=1.5,e.beginPath(),e.moveTo(30,l+55),e.lineTo(482,l+55),e.stroke()}),e.fillStyle="#fefce8",e.strokeStyle="#eab308",e.lineWidth=2,e.beginPath(),e.roundRect(30,330,452,125,8),e.fill(),e.stroke(),e.fillStyle="#854d0e",e.font=`800 18px ${j}`,e.textAlign="left",e.fillText("【 ごみ出しのルールとマナー 】",45,358),e.fillStyle="#334155",e.font=`600 15px ${j}`,e.fillText("● ごみは収集日当日の朝8時までに出してください。",45,388),e.fillText("● カラス被害防止のため、ネットは隙間なく掛けてください。",45,414),e.fillText("● 粗大ごみ・家電リサイクル品は集積所に出せません。",45,440),e.fillStyle="#64748b",e.font=`700 14px ${j}`,e.textAlign="center",e.fillText("東京都 清掃環境事務所  /  町内自治会",256,485);const s=new ie(n);return s.colorSpace=de,s.anisotropy=4,_t.set(o,s),s}function fg(){const o="can-recycle-box-texture",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1d4ed8",e.fillRect(0,0,512,512),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(12,12,488,488),e.fillStyle="#ffffff",e.font=`900 42px ${j}`,e.textAlign="center",e.fillText("空き缶 ・ ペットボトル",256,85),e.fillStyle="#bfdbfe",e.font=`700 20px ${j}`,e.fillText("CANS & PLASTIC BOTTLES ONLY",256,125),e.strokeStyle="#22c55e",e.lineWidth=14,e.beginPath(),e.arc(256,235,65,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`900 36px ${j}`,e.fillText("リサイクル",256,246),e.fillStyle="#0f172a",e.beginPath(),e.arc(140,360,48,0,Math.PI*2),e.arc(372,360,48,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font=`800 26px ${j}`,e.fillText("缶",140,368),e.fillText("ボトル",372,368),e.fillStyle="#fef08a",e.font=`700 16px ${j}`,e.fillText("※ タバコ・一般ゴミの投げ入れ厳禁",256,455);const i=new ie(n);return i.colorSpace=de,i.anisotropy=4,_t.set(o,i),i}function hg(){const o="crow-net-fine-texture",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="rgba(14, 76, 52, 0.45)",e.fillRect(0,0,256,256),e.strokeStyle="#10b981",e.lineWidth=2.5;const i=16;for(let r=-256;r<512;r+=i)e.beginPath(),e.moveTo(r,0),e.lineTo(r+256,256),e.stroke(),e.beginPath(),e.moveTo(r,256),e.lineTo(r+256,0),e.stroke();e.strokeStyle="#047857",e.lineWidth=8,e.strokeRect(0,0,256,256);const s=new ie(n);return s.wrapS=Ce,s.wrapT=Ce,s.repeat.set(4,4),_t.set(o,s),s}function dg(){const o="park-nameplate-stone",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#22252a",e.fillRect(0,0,256,128);for(let s=0;s<180;s++){const r=Math.random()*256,a=Math.random()*128;e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.25)",e.fillRect(r,a,2,2)}e.strokeStyle="#c5a059",e.lineWidth=4,e.strokeRect(8,8,240,112),e.strokeStyle="#8c6f36",e.lineWidth=1.5,e.strokeRect(14,14,228,100),e.fillStyle="#f0d8a0",e.font=`900 28px ${j}`,e.textAlign="center",e.textBaseline="middle",e.fillText("桜町児童遊園",128,52),e.fillStyle="#c5a059",e.font="600 12px monospace",e.fillText("SAKURA POCKET PARK",128,86);const i=new ie(n);return _t.set(o,i),i}function ug(){const o="park-rules-board",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=320;const e=n.getContext("2d");e.fillStyle="#eaedf1",e.fillRect(0,0,512,320),e.fillStyle="#105238",e.fillRect(0,0,512,64),e.strokeStyle="#ffffff",e.lineWidth=3,e.beginPath(),e.arc(42,32,18,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`800 24px ${j}`,e.textAlign="left",e.fillText("公園の利用案内",72,36),e.font="600 13px sans-serif",e.fillText("PARK REGULATIONS & MANNER",72,54);const i=[{kanji:"ゴミは持ち帰りましょう",sub:"Please take your litter home with you",icon:"🗑️"},{kanji:"たき火・花火など火気厳禁",sub:"No fireworks or open flames permitted",icon:"🔥"},{kanji:"犬の散歩はリード着用・フン始末",sub:"Keep dogs on leash and clean up after pets",icon:"🐕"},{kanji:"夜間はお静かに願いします",sub:"Please be considerate and quiet at night",icon:"🌙"}];let s=100;for(const a of i)e.fillStyle="#105238",e.beginPath(),e.arc(36,s-6,12,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("!",36,s-2),e.fillStyle="#1a202c",e.font=`700 18px ${j}`,e.textAlign="left",e.fillText(a.kanji,60,s-4),e.fillStyle="#4a5568",e.font="500 12px sans-serif",e.fillText(a.sub,60,s+14),e.fillStyle="rgba(0,0,0,0.08)",e.fillRect(20,s+24,472,1),s+=50;e.fillStyle="#718096",e.font=`600 12px ${j}`,e.textAlign="right",e.fillText("東京都港区土木部公園緑地課　TEL 03-3578-2111",492,305),e.strokeStyle="#2d3748",e.lineWidth=6,e.strokeRect(0,0,512,320);const r=new ie(n);return _t.set(o,r),r}function pg(){const o="park-community-notice",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=300;const e=n.getContext("2d");e.fillStyle="#9b764d",e.fillRect(0,0,512,300);for(let s=0;s<400;s++){const r=Math.random()*512,a=Math.random()*300;e.fillStyle=Math.random()>.5?"rgba(74, 50, 26, 0.2)":"rgba(180, 145, 100, 0.25)",e.fillRect(r,a,3,3)}e.fillStyle="#fce7f3",e.fillRect(24,25,140,190),e.strokeStyle="#f472b6",e.lineWidth=2,e.strokeRect(24,25,140,190),e.fillStyle="#db2777",e.font=`800 16px ${j}`,e.textAlign="center",e.fillText("桜まつり",94,58),e.font=`600 10px ${j}`,e.fillText("春の夜桜ライトアップ",94,78),e.fillStyle="#4a044e",e.font=`500 9px ${j}`,e.fillText("日時: 4月上旬 18:00~",94,110),e.fillText("場所: 桜町児童遊園",94,130),e.fillText("主催: 桜町自治会",94,150),e.fillStyle="#f43f5e",e.fillText("🌸🏮🌸",94,185),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#fef9c3",e.fillRect(184,25,140,190),e.strokeStyle="#eab308",e.lineWidth=2,e.strokeRect(184,25,140,190),e.fillStyle="#854d0e",e.font=`800 15px ${j}`,e.fillText("広域避難場所",254,58),e.font=`600 10px ${j}`,e.fillText("防災・安全マップ",254,78),e.fillStyle="#1c1917",e.font=`500 9px ${j}`,e.fillText("一時集合場所:",254,108),e.fillText("当公園グラウンド",254,126),e.fillText("AED設置: 管理所横",254,146),e.fillText("給水拠点指定場所",254,166),e.fillStyle="#eab308",e.fillText("🔰 非常口 ⛑️",254,192),e.fillStyle="#3b82f6",e.beginPath(),e.arc(254,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(344,25,144,190),e.strokeStyle="#94a3b8",e.lineWidth=1.5,e.strokeRect(344,25,144,190),e.fillStyle="#dc2626",e.font=`800 15px ${j}`,e.fillText("迷子ねこ",416,54),e.font=`600 10px ${j}`,e.fillStyle="#334155",e.fillText("探しています！",416,72),e.fillStyle="#1e293b",e.beginPath(),e.arc(416,110,18,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(402,98),e.lineTo(396,82),e.lineTo(410,93),e.fill(),e.beginPath(),e.moveTo(430,98),e.lineTo(436,82),e.lineTo(422,93),e.fill(),e.fillStyle="#ef4444",e.fillRect(408,124,16,4),e.fillStyle="#475569",e.font=`500 9px ${j}`,e.fillText("名前: ミケ (黒多め)",416,146),e.fillText("赤い首輪・鈴付き",416,162),e.fillText("見かけた方はご連絡を",416,178),e.fillStyle="#10b981",e.beginPath(),e.arc(416,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#3b2716",e.fillRect(0,0,512,18),e.fillStyle="#fef08a",e.font=`800 12px ${j}`,e.textAlign="center",e.fillText("桜町町内会　広報掲示板",256,14),e.strokeStyle="#475569",e.lineWidth=8,e.strokeRect(0,0,512,300);const i=new ie(n);return _t.set(o,i),i}function mg(){const o="park-analog-clock-face",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#faf8f2",e.fillRect(0,0,256,256),e.strokeStyle="#1e242b",e.lineWidth=8,e.beginPath(),e.arc(128,128,120,0,Math.PI*2),e.stroke(),e.strokeStyle="#64748b",e.lineWidth=1.5,e.beginPath(),e.arc(128,128,114,0,Math.PI*2),e.stroke();for(let l=0;l<60;l++){const c=l*Math.PI/30,h=l%5===0,f=h?14:6,u=114,d=u-f;e.strokeStyle=h?"#0f172a":"#94a3b8",e.lineWidth=h?3.5:1.5,e.beginPath(),e.moveTo(128+Math.cos(c)*u,128+Math.sin(c)*u),e.lineTo(128+Math.cos(c)*d,128+Math.sin(c)*d),e.stroke()}e.fillStyle="#0f172a",e.font='bold 22px "Plus Jakarta Sans", sans-serif',e.textAlign="center",e.textBaseline="middle";for(let l=1;l<=12;l++){const c=l*Math.PI/6-Math.PI/2,h=86;e.fillText(l.toString(),128+Math.cos(c)*h,128+Math.sin(c)*h)}e.fillStyle="#64748b",e.font="600 9px monospace",e.fillText("TOKYO PARKS",128,160);const i=(11+50/60)*Math.PI/6-Math.PI/2;e.strokeStyle="#0f172a",e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(i)*52,128+Math.sin(i)*52),e.stroke();const s=50*Math.PI/30-Math.PI/2;e.lineWidth=3.5,e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(s)*78,128+Math.sin(s)*78),e.stroke();const r=22*Math.PI/30-Math.PI/2;e.strokeStyle="#dc2626",e.lineWidth=1.5,e.beginPath(),e.moveTo(128-Math.cos(r)*16,128-Math.sin(r)*16),e.lineTo(128+Math.cos(r)*88,128+Math.sin(r)*88),e.stroke(),e.fillStyle="#0f172a",e.beginPath(),e.arc(128,128,6,0,Math.PI*2),e.fill();const a=new ie(n);return _t.set(o,a),a}function gg(){const o="park-toilet-sign-picto",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,256,128),e.strokeStyle="#cbd5e1",e.lineWidth=3,e.strokeRect(4,4,248,120),e.fillStyle="#0284c7",e.beginPath(),e.arc(56,36,10,0,Math.PI*2),e.fill(),e.fillRect(46,50,20,28),e.fillRect(48,80,7,24),e.fillRect(57,80,7,24),e.fillStyle="#e11d48",e.beginPath(),e.arc(128,36,10,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(128,50),e.lineTo(142,78),e.lineTo(114,78),e.closePath(),e.fill(),e.fillRect(121,80,6,24),e.fillRect(129,80,6,24),e.fillStyle="#16a34a",e.beginPath(),e.arc(200,36,10,0,Math.PI*2),e.fill(),e.strokeStyle="#16a34a",e.lineWidth=4,e.beginPath(),e.arc(196,76,14,0,Math.PI*2),e.stroke(),e.fillRect(194,52,6,22),e.fillRect(194,66,16,5),e.fillStyle="#334155",e.font=`bold 12px ${j}`,e.textAlign="center",e.fillText("公衆トイレ  TOILETS",128,118);const i=new ie(n);return _t.set(o,i),i}function xg(o,t){const n=new At;n.name="streets_and_terrain";const e=[],i=new Kt(110,7);i.rotateX(-Math.PI/2),i.translate(0,.002,0),e.push(i);const s=new Kt(5,38.5);s.rotateX(-Math.PI/2),s.translate(16,.002,22.75),e.push(s);const r=new Kt(5,38.5);r.rotateX(-Math.PI/2),r.translate(-14,.002,-22.75),e.push(r);for(const p of e){const M=new g(p,s1);M.receiveShadow=!0,n.add(M)}const a=[{w:68.5,d:4,x:-20.75,z:5.5},{w:33.5,d:4,x:35.25,z:5.5},{w:10,d:6,x:0,z:10.5},{w:38.5,d:4,x:-35.75,z:-5.5},{w:63.5,d:4,x:20.25,z:-5.5},{w:3,d:38.5,x:12,z:22.75},{w:3,d:38.5,x:20,z:22.75},{w:3,d:38.5,x:-18,z:-22.75},{w:3,d:38.5,x:-10,z:-22.75}];for(const p of a){const M=new C(p.w,.15,p.d),v=new g(M,l1);v.position.set(p.x,.075,p.z),v.receiveShadow=!0,n.add(v)}const l=new C(9.5,.15,3),c=new g(l,yc);c.position.set(8.75,.075,21),c.receiveShadow=!0,n.add(c);const h=new C(9,.15,3),f=new g(h,yc);f.position.set(0,.075,23.5),f.receiveShadow=!0,n.add(f);const u=new C(18,.15,29),d=new g(u,u1);d.position.set(.5,.075,-22),d.receiveShadow=!0,n.add(d);const m=[{x:0,z:-9.5,w:5.6,d:4},{x:-7.2,z:-22,w:2.8,d:3.6},{x:0,z:-21.5,w:6.2,d:5.8},{x:0,z:-15,w:3.2,d:7.2},{x:-4.2,z:-22,w:3.4,d:2.6},{x:1,z:-27.5,w:3,d:6.5},{x:6,z:-32,w:4.5,d:3.8}];for(const p of m){const M=new C(p.w,.012,p.d),v=new g(M,p1);v.position.set(p.x,.156,p.z),v.receiveShadow=!0,n.add(v)}const _=[{x:5.2,z:-16,w:5.8,d:7.2},{x:-5,z:-14.5,w:4.8,d:6.2},{x:-3.5,z:-33.2,w:7.4,d:4.2}],x=new L({color:5922920,roughness:.9});for(const p of _){const M=new C(p.w+.3,.06,p.d+.3),v=new g(M,x);v.position.set(p.x,.17,p.z),v.receiveShadow=!0,n.add(v);const w=new C(p.w,.065,p.d),P=new g(w,m1);P.position.set(p.x,.18,p.z),P.receiveShadow=!0,n.add(P)}return _g(n),t.add({minX:-55,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:-41.5}),t.add({minX:-55,minY:0,minZ:41.5,maxX:55,maxY:10,maxZ:45}),t.add({minX:-55,minY:0,minZ:-45,maxX:-51.5,maxY:10,maxZ:45}),t.add({minX:51.5,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:45}),xs(n,-51,0,0,!1),xs(n,51,0,0,!1),xs(n,16,0,40,!0),xs(n,-14,0,-40,!0),o.add(n),n}function _g(o){const t=[{x:16,z:0,w:4.2,d:6.8,rotY:0},{x:-14,z:0,w:4.2,d:6.8,rotY:0},{x:0,z:0,w:3.6,d:6.8,rotY:0},{x:16,z:5.5,w:4.8,d:3.2,rotY:Math.PI/2},{x:-14,z:-5.5,w:4.8,d:3.2,rotY:Math.PI/2}];for(const r of t){const l=r.rotY===0?r.w/15:r.d/15,c=r.rotY===0?r.d:r.w;for(let h=0;h<8;h++){const f=new Kt(r.rotY===0?l:c,r.rotY===0?c:l);f.rotateX(-Math.PI/2);const u=new g(f,Po);if(r.rotY===0){const d=-r.w/2+h*l*2+l/2;u.position.set(r.x+d,.005,r.z)}else{const d=-r.d/2+h*l*2+l/2;u.position.set(r.x,.005,r.z+d)}o.add(u)}}const n=2.4,e=2.4;for(let r=-50;r<=50;r+=n+e){if(Math.abs(r-16)<3.5||Math.abs(r- -14)<3.5||Math.abs(r)<2.5)continue;const a=new Kt(n,.18);a.rotateX(-Math.PI/2);const l=new g(a,Po);l.position.set(r+n/2,.004,0),o.add(l)}const i=[{z:-3.2,x1:-52,x2:-17},{z:-3.2,x1:-11,x2:52},{z:3.2,x1:-52,x2:13},{z:3.2,x1:19,x2:52}];for(const r of i){const a=r.x2-r.x1,l=new Kt(a,.15);l.rotateX(-Math.PI/2);const c=new g(l,Po);c.position.set(r.x1+a/2,.004,r.z),o.add(c)}const s=[{x:16,z:3.6,w:4,d:.6},{x:16,z:-3.6,w:4,d:.6},{x:-14,z:3.6,w:4,d:.6},{x:-14,z:-3.6,w:4,d:.6},{x:0,z:3.6,w:3.6,d:.6},{x:0,z:-3.6,w:3.6,d:.6},{x:13.6,z:5.5,w:.6,d:3},{x:18.4,z:5.5,w:.6,d:3}];for(const r of s){const a=new C(r.w,.015,r.d),l=new g(a,ro);l.position.set(r.x,.155,r.z),l.receiveShadow=!0,o.add(l)}Ec(o,16,7.5,Math.PI),Ec(o,-14,-7.5,0),wg(o)}function wg(o){const t=new L({map:P1(),roughness:.55,metalness:.8}),n=[{x:-6,z:1.2},{x:16,z:14},{x:-14,z:-14},{x:28,z:-1.2},{x:-30,z:1.4}],e=new Mn(.44,24);e.rotateX(-Math.PI/2);for(const a of n){const l=new g(e,t);l.position.set(a.x,.005,a.z),l.receiveShadow=!0,o.add(l)}const i=new Kt(.4,.9);i.rotateX(-Math.PI/2);const s=new L({color:2237996,roughness:.4,metalness:.85}),r=[{x:-22,z:3.25},{x:-8,z:3.25},{x:8,z:3.25},{x:26,z:3.25},{x:-22,z:-3.25},{x:-8,z:-3.25},{x:8,z:-3.25},{x:26,z:-3.25},{x:13.75,z:12},{x:18.25,z:12},{x:13.75,z:28},{x:18.25,z:28}];for(const a of r){const l=new g(i,s);l.position.set(a.x,.005,a.z),o.add(l)}}function Ec(o,t,n,e){const i=new Kt(3.6,.45);i.rotateX(-Math.PI/2),i.rotateY(e);const s=new g(i,Po);s.position.set(t,.006,n),o.add(s);const r=new on,a=new Float32Array([-.9,.006,-.6,.9,.006,-.6,0,.006,1.2]);r.setAttribute("position",new Ln(a,3)),r.computeVertexNormals();const l=new g(r,Po);l.position.set(t,0,n+(e===0?-1.8:1.8)),e!==0&&l.rotateY(e),o.add(l)}function xs(o,t,n,e,i){const s=new At,r=new Z(.06,.06,1.1,8),a=new C(4.8,.18,.06),l=new g(r,Le);l.position.set(-2.2,.55,0);const c=new g(r,Le);c.position.set(2.2,.55,0),s.add(l,c);const h=new g(a,ro);h.position.set(0,.8,0);const f=new g(a,ro);f.position.set(0,.45,0),s.add(h,f),s.position.set(t,n,e),i&&s.rotateY(Math.PI/2),o.add(s)}function vg(o,t,n,e,i,s){const r=new At;r.name="buildings";let a=null,l=null,c=null;const h=[];for(const f of Cf){const u=new At;u.name=`building-${f.id}`;const d=3.2,m=f.floors*d,_=f.w/2,x=f.d/2,p=new me(f.wall),M=new me(f.trim),v=new me(f.balcony),w=new L({color:p,roughness:.82,metalness:.08}),P=new L({color:M,roughness:.65,metalness:.12}),R=new L({color:v,roughness:.75,metalness:.15});if(f.id==="b-sunheights"){const E=yg(u,f,t,n,e,w,P,i,s);a=E.light,h.push(E.update);const I=(f.floors-1)*d,S=new C(f.w,I,f.d),y=new g(S,w);y.position.set(f.x,d+I/2,f.z),y.castShadow=!0,y.receiveShadow=!0,u.add(y),_s(u,f,d,P,R)}else if(f.id==="b-konbini"){const E=Mg(u,f,t,n,e,w,P,i,s);l=E.light,h.push(E.update);const I=(f.floors-1)*d,S=new C(f.w,I,f.d),y=new g(S,w);y.position.set(f.x,d+I/2,f.z),y.castShadow=!0,y.receiveShadow=!0,u.add(y),_s(u,f,d,P,R)}else if(f.id==="b-ramen"){const E=Sg(u,f,t,n,e,w,P,i,s);c=E.light,h.push(E.update);const I=(f.floors-1)*d,S=new C(f.w,I,f.d),y=new g(S,w);y.position.set(f.x,d+I/2,f.z),y.castShadow=!0,y.receiveShadow=!0,u.add(y),_s(u,f,d,P,R)}else{const E=new C(f.w,m,f.d),I=new g(E,w);I.position.set(f.x,m/2,f.z),I.castShadow=!0,I.receiveShadow=!0,u.add(I),t.add({minX:f.x-_,minY:0,minZ:f.z-x,maxX:f.x+_,maxY:m+2,maxZ:f.z+x});const S=Eg(u,f,P,n,e,i,s);S!=null&&S.update&&h.push(S.update),_s(u,f,0,P,R)}Cg(u,f,m,P),Rg(u,f,m),r.add(u)}return o.add(r),{group:r,lobbyLight:a??new _e(16769712,1,10),konbiniLight:l??new _e(16777215,1,12),ramenLight:c??new _e(16750916,1,10),update(f,u){for(const d of h)d(f,u)}}}function yg(o,t,n,e,i,s,r,a,l){const h=t.w/2,f=new At;f.name="lobby-interior-props",o.add(f);const u=7.6,d=8.4,m=.15,_=.35,x=3.2-m,p=new L({map:z1(),roughness:.22,metalness:.08}),M=new C(u,.05,d),v=new g(M,p);v.position.set(t.x,m+.025,t.z),v.receiveShadow=!0,o.add(v);const w=new L({color:16184559,roughness:.5}),P=new C(u,.2,d),R=new g(P,w);R.position.set(t.x,3.2-.1,t.z),o.add(R);const E=4.8,I=5.6,S=new C(E,.08,I),y=new L({color:15789282,roughness:.6}),D=new g(S,y);D.position.set(t.x,3.2-.04,t.z),f.add(D);const G=new C(E+.12,.02,I+.12),V=new g(G,Bn);V.position.set(t.x,3.2-.07,t.z),f.add(V);for(const rn of[-1.8,1.8])for(const fn of[-2,2]){const xn=new Z(.12,.12,.04,12),Gs=new g(xn,Pt);Gs.position.set(t.x+rn,3.2-.02,t.z+fn);const pi=new g(new Mn(.09,12),Bn);pi.rotateX(Math.PI/2),pi.position.set(t.x+rn,3.2-.041,t.z+fn),f.add(Gs,pi)}const J=new L({map:N1(),roughness:.55,metalness:.02}),$=new C(u,x,_),X=new g($,J);X.position.set(t.x,m+x/2,t.z+d/2-_/2),o.add(X),n.add({minX:t.x-u/2,minY:0,minZ:t.z+d/2-_,maxX:t.x+u/2,maxY:3.2,maxZ:t.z+d/2+1});const Q=new C(_,x,d),Y=new g(Q,J);Y.position.set(t.x-u/2+_/2,m+x/2,t.z),o.add(Y),n.add({minX:t.x-h-.5,minY:0,minZ:t.z-d/2,maxX:t.x-u/2+_,maxY:3.2,maxZ:t.z+d/2});const at=new C(_,x,d),ct=new g(at,J);ct.position.set(t.x+u/2-_/2,m+x/2,t.z),o.add(ct),n.add({minX:t.x+u/2-_,minY:0,minZ:t.z-d/2,maxX:t.x+h+.5,maxY:3.2,maxZ:t.z+d/2});const ht=2.4,wt=(u-ht)/2,vt=new C(wt,x,_),H=new g(vt,J);H.position.set(t.x-u/2+wt/2,m+x/2,t.z-d/2+_/2),o.add(H),n.add({minX:t.x-u/2,minY:0,minZ:t.z-d/2,maxX:t.x-ht/2,maxY:3.2,maxZ:t.z-d/2+_});const z=new C(wt,x,_),B=new g(z,J);B.position.set(t.x+u/2-wt/2,m+x/2,t.z-d/2+_/2),o.add(B),n.add({minX:t.x+ht/2,minY:0,minZ:t.z-d/2,maxX:t.x+u/2,maxY:3.2,maxZ:t.z-d/2+_});const it=new C(ht,.7,_),dt=new g(it,r);dt.position.set(t.x,3.2-.35,t.z-d/2+_/2),o.add(dt);const Rt=new $t({map:C1(),toneMapped:!1}),Ut=new g(new C(.8,.35,.08),Rt);Ut.position.set(t.x,3.2-.55,t.z-d/2+_+.02),o.add(Ut);const Vt=new C(1.15,2.3,.06),zt=new g(Vt,Fe);zt.position.set(t.x-.65,m+1.15,t.z-d/2+_/2);const jt=new g(Vt,Fe);jt.position.set(t.x+.65,m+1.15,t.z-d/2+_/2),o.add(zt,jt);const U=new C(2.4,.015,1.4),Wt=new L({color:2955812,roughness:.95}),It=new g(U,Wt);It.position.set(t.x,m+.035,t.z-d/2+1.2),o.add(It);const Ft=new Z(.18,.16,.65,12),Tt=new g(Ft,Pt);Tt.position.set(t.x+1.5,m+.325,t.z-d/2+.6),o.add(Tt);for(let rn=0;rn<3;rn++){const fn=new Ge(.04,.012,6,12,Math.PI),xn=new g(fn,Le);xn.position.set(t.x+1.45+rn*.05,m+.72,t.z-d/2+.6),o.add(xn)}const Xt=new Z(.08,.08,.42,10),St=new L({color:14231064,roughness:.3,metalness:.2}),A=new g(Xt,St);A.position.set(t.x-1.5,m+.28,t.z-d/2+.5),o.add(A);const b=new C(.35,.5,.06),W=new g(b,Pt);W.position.set(t.x+ht/2+.4,m+1.35,t.z-d/2-.05),o.add(W);const nt=Fo("サンハイツ SUN HEIGHTS","#1d2530","#e2ebf5","RESIDENCE 1-24",512,128),ot=new g(new C(2.6,.65,.12),nt);ot.position.set(t.x,3.2-.25,t.z-d/2-.08),o.add(ot);const et=t.x-u/2+_,xt=.28,mt=1.35,ft=2.6,Lt=et+xt/2+.01,lt=t.z-.5,bt=new C(xt,mt,ft),Ht=new L({color:4870749,roughness:.3,metalness:.6}),Jt=new g(bt,Ht);Jt.position.set(Lt,m+1.25,lt),f.add(Jt);const Dt=new L({map:O1(),roughness:.25,metalness:.5}),oe=new g(new Kt(ft,mt),Dt);oe.rotateY(Math.PI/2),oe.position.set(Lt+xt/2+.005,m+1.25,lt),f.add(oe);const Qt=new C(.38,.04,ft+.1),pe=new g(Qt,Pt);pe.position.set(et+.19,m+.56,lt),f.add(pe);const F=new C(.32,.45,.45),yt=new L({color:2250043,roughness:.4}),tt=new g(F,yt);tt.position.set(et+.18,m+.23,lt+ft/2-.3),f.add(tt);const st=new g(new C(.24,.03,.06),Pt);st.position.set(et+.18,m+.46,lt+ft/2-.3),f.add(st);const gt=.44,pt=1.95,Gt=1.6,se=et+gt/2+.01,Ee=t.z+2.1,re=new g(new C(gt,pt,Gt),new L({color:2041392,roughness:.35,metalness:.5}));re.position.set(se,m+pt/2,Ee),f.add(re);const De=new L({map:k1(),roughness:.3,metalness:.4}),ze=new g(new Kt(Gt,pt),De);ze.rotateY(Math.PI/2),ze.position.set(se+gt/2+.005,m+pt/2,Ee),f.add(ze),n.add({minX:t.x-u/2,minY:0,minZ:t.z-2,maxX:t.x-u/2+.85,maxY:2.4,maxZ:t.z+3.1}),e.add({id:"apt-mailboxes",x:et+.95,z:t.z+.6,radius:2.2,prompt:"Check Mail & Parcel Lockers",onInteract:()=>{i.show("Apartment #304 (Relzzy): Tokyo Gas statement, local izakaya coupon, and a notification: Delivery Locker #3 is holding your Amazon parcel!")}});const Oe=t.x+u/2-_,Ae=1.15,ge=1.05,Ne=2.4,fe=Oe-Ae/2-.2,te=t.z+.9,je=new L({map:F1(),roughness:.4,metalness:.05}),Ve=new g(new C(Ae,ge,Ne),je);Ve.position.set(fe,m+ge/2,te),Ve.castShadow=!0,f.add(Ve);const Ze=new C(.04,.02,Ne-.04),dn=new g(Ze,Bn);dn.position.set(fe-Ae/2-.01,m+ge-.02,te),f.add(dn);const ve=new C(Ae+.08,.06,Ne+.08),Re=new L({color:16119803,roughness:.18,metalness:.08}),Yt=new g(ve,Re);Yt.position.set(fe,m+ge+.03,te),f.add(Yt);const Zt=new C(.02,.45,Ne*.75),T=new g(Zt,Fe);T.position.set(fe-Ae/2+.05,m+ge+.28,te+.2),f.add(T);const O=new g(new Z(.05,.06,.02,12),Pt),q=new g(new be(.045,12,8,0,Math.PI*2,0,Math.PI/2),new L({color:13938487,roughness:.2,metalness:.8})),K=new g(new Z(.008,.008,.03,8),Pt);O.position.set(fe-Ae/4,m+ge+.07,te-.5),q.position.set(fe-Ae/4,m+ge+.08,te-.5),K.position.set(fe-Ae/4,m+ge+.125,te-.5),f.add(O,q,K);const k=new g(new C(.28,.015,.22),new L({color:2367002,roughness:.8})),ut=new g(new C(.26,.016,.2),new L({color:16514040,roughness:.5}));k.position.set(fe-Ae/4,m+ge+.065,te-.1),ut.position.set(fe-Ae/4,m+ge+.075,te-.1),f.add(k,ut);const Et=new g(new Z(.015,.02,.03,8),Pt);Et.position.set(fe-Ae/4+.18,m+ge+.075,te-.1);const kt=new g(new Z(.004,.004,.14,6),Pt);kt.position.set(fe-Ae/4+.18,m+ge+.14,te-.1),kt.rotateZ(.15),f.add(Et,kt);const Ot=new g(new C(.2,.05,.18),new L({color:2040616,roughness:.4}));Ot.position.set(fe+.05,m+ge+.08,te+.6);const ee=new g(new C(.06,.04,.2),new L({color:1119773,roughness:.3}));ee.position.set(fe+.02,m+ge+.11,te+.6),f.add(Ot,ee);const le=new g(new Z(.06,.07,.02,10),Pt);le.position.set(fe+.15,m+ge+.07,te-.6);const rt=new g(new Z(.012,.012,.28,8),Pt);rt.position.set(fe+.15,m+ge+.21,te-.6);const Mt=new g(new C(.18,.08,.1),new L({color:674347,roughness:.3,metalness:.2}));Mt.position.set(fe+.12,m+ge+.33,te-.6),f.add(le,rt,Mt);const qt=new _e(16768928,1.2,3.5);qt.position.set(fe+.12,m+ge+.3,te-.6),l?l.register({x:fe+.12,y:m+ge+.3,z:te-.6,color:16768928,intensity:1.2,distance:3.5,zone:"Lobby"}):f.add(qt);const ne=Fo("管理事務室","#18202c","#d4af37","CONCIERGE & MGMT",256,128),ye=new g(new Kt(.24,.12),ne);ye.rotateY(-Math.PI/2),ye.position.set(fe-Ae/2-.005,m+ge+.08,te-.8),f.add(ye);const ce=new g(new Z(.25,.25,.04,6),Pt);ce.position.set(fe+.45,m+.06,te+.1);const Nt=new g(new Z(.025,.025,.45,8),Pt);Nt.position.set(fe+.45,m+.28,te+.1);const qe=new g(new C(.44,.06,.42),new L({color:1580582,roughness:.7}));qe.position.set(fe+.45,m+.52,te+.1);const xe=new g(new C(.05,.44,.4),new L({color:2239030,roughness:.6}));xe.position.set(fe+.64,m+.74,te+.1),f.add(ce,Nt,qe,xe);const Qe=new g(new C(.08,.6,.45),new L({color:4007959,roughness:.6}));Qe.position.set(Oe-.05,m+1.5,te-.6),f.add(Qe);const Sn=new g(new C(.06,.55,.85),new L({color:1119773,roughness:.3}));Sn.position.set(Oe-.04,m+1.65,te+.6);const ke=new g(new Kt(.8,.5),new $t({color:2245717}));ke.rotateY(-Math.PI/2),ke.position.set(Oe-.075,m+1.65,te+.6),f.add(Sn,ke);const ui=new L({map:B1(),roughness:.6}),Me=new g(new Kt(1.6,.8),ui);Me.rotateY(-Math.PI/2),Me.position.set(Oe-.015,m+1.65,te-.2),f.add(Me),n.add({minX:fe-Ae/2-.1,minY:0,minZ:te-Ne/2-.1,maxX:t.x+u/2,maxY:2.2,maxZ:te+Ne/2+.2}),e.add({id:"apt-reception-bell",x:fe-Ae/2-.4,z:te-.5,radius:1.8,prompt:"Ring Concierge Desk Bell",onInteract:()=>{a==null||a.playDeskBellSound(),i.show('*Ting!* Resident Manager: "Konnichiwa! Welcome back to Sun Heights. All parcel lockers and facilities are operational."')}}),e.add({id:"apt-notice-board",x:fe-Ae/2-.4,z:te-.1,radius:1.8,prompt:"Read Resident Notices",onInteract:()=>{i.show("[Lobby Notices] ① Trash: Burnable Mon/Thu, Recyclable Wed. ② Annual fire equipment check this Saturday. ③ Please collapse Amazon cardboard boxes.")}});const bn=new L({map:G1(),roughness:.35,metalness:.2}),Hn=new g(new Kt(1.4,1.05),bn);Hn.rotateY(-Math.PI/2),Hn.position.set(Oe-.015,m+1.6,t.z-2.2),f.add(Hn);const We=1.4,sn=.55,un=Oe-sn/2-.25,ti=t.z-1.2,Df=new C(sn,.06,We),Uf=new L({color:2825492,roughness:.7}),Da=new g(Df,Uf);Da.position.set(un,m+.22,ti);const Nf=new C(sn-.04,.18,We-.04),zf=new L({color:8143650,roughness:.5}),Ua=new g(Nf,zf);Ua.position.set(un,m+.33,ti);for(const rn of[-sn/2+.08,sn/2-.08])for(const fn of[-We/2+.08,We/2-.08]){const xn=new g(new Z(.02,.015,.22,8),Pt);xn.position.set(un+rn,m+.11,ti+fn),f.add(xn)}f.add(Da,Ua),n.add({minX:un-sn/2,minY:0,minZ:ti-We/2,maxX:Oe,maxY:1,maxZ:ti+We/2});const Ff=new Z(.24,.18,.55,12),Of=new L({color:16119285,roughness:.3}),Na=new g(Ff,Of),za=t.x-u/2+.8,Fa=t.z-d/2+.9;Na.position.set(za,m+.275,Fa),f.add(Na);const kf=new L({color:3043136,roughness:.4});for(let rn=0;rn<7;rn++){const fn=new He(.18,.65,5);fn.rotateX(.4);const xn=new g(fn,kf);xn.position.set(za,m+.55,Fa),xn.rotateY(rn*Math.PI*2/7),f.add(xn)}const Ii=2,Nn=2.4,pn=t.z+d/2-_-.05,Ns=new L({color:8153418,roughness:.25,metalness:.7}),Oa=new g(new C(.12,Nn+.06,.08),Ns);Oa.position.set(t.x-Ii/2-.06,m+Nn/2,pn);const ka=new g(new C(.12,Nn+.06,.08),Ns);ka.position.set(t.x+Ii/2+.06,m+Nn/2,pn);const Ba=new g(new C(Ii+.24,.12,.08),Ns);Ba.position.set(t.x,m+Nn+.06,pn),f.add(Oa,ka,Ba);const Bf=new C(.98,Nn,.06),Gf=new C(.98,Nn,.06),Bo=new L({color:9081501,roughness:.25,metalness:.75}),zs=new g(Bf,Bo),Fs=new g(Gf,Bo);zs.position.set(t.x-.5,m+Nn/2,pn),Fs.position.set(t.x+.5,m+Nn/2,pn),f.add(zs,Fs);const Hf=new Kt(.45,.22),Vf=new $t({color:16755234}),Ga=new g(Hf,Vf);Ga.position.set(t.x,m+Nn+.22,pn+.05),f.add(Ga);const Ha=new g(new C(.12,.28,.03),Pt);Ha.position.set(t.x+Ii/2+.35,m+1.25,pn+.03);const Os=new g(new Z(.025,.025,.02,10),Bn);Os.rotateX(Math.PI/2),Os.position.set(t.x+Ii/2+.35,m+1.28,pn+.05),f.add(Ha,Os);const mn=2,zn=1.8,ei=2.5,gn=pn+zn/2+.05,Va=new g(new C(mn,.04,zn),p);Va.position.set(t.x,m+.02,gn),f.add(Va);const Wa=new g(new C(mn,.08,zn),Pt);Wa.position.set(t.x,m+ei,gn),f.add(Wa);const Wf=new C(mn-.1,ei-.2,.04),Xf=new L({color:13424352,roughness:.05,metalness:.9}),Xa=new g(Wf,Xf);Xa.position.set(t.x,m+ei/2,gn+zn/2-.02),f.add(Xa);const Ya=new C(.04,ei,zn),Za=new g(Ya,Bo);Za.position.set(t.x-mn/2+.02,m+ei/2,gn);const qa=new g(Ya,Bo);qa.position.set(t.x+mn/2-.02,m+ei/2,gn),f.add(Za,qa);const $a=new Z(.02,.02,mn-.2,8);$a.rotateZ(Math.PI/2);const Ka=new g($a,Pt);Ka.position.set(t.x,m+.9,gn+zn/2-.1),f.add(Ka);const Ja=new g(new C(.08,.7,.14),Pt);Ja.position.set(t.x+mn/2-.06,m+1.25,gn-.2),f.add(Ja);const ja=new _e(16775904,2,5.5);ja.position.set(t.x,m+ei-.15,gn),l?l.register({x:t.x,y:m+ei-.15,z:gn,color:16775904,intensity:2,distance:5.5,zone:"Lobby"}):f.add(ja),n.add({minX:t.x-mn/2-.2,minY:0,minZ:gn+zn/2-.1,maxX:t.x+mn/2+.2,maxY:3.2,maxZ:gn+zn/2+.3}),n.add({minX:t.x-mn/2-.2,minY:0,minZ:pn,maxX:t.x-mn/2+.1,maxY:3.2,maxZ:gn+zn/2}),n.add({minX:t.x+mn/2-.1,minY:0,minZ:pn,maxX:t.x+mn/2+.2,maxY:3.2,maxZ:gn+zn/2});let uo=!1;e.add({id:"apt-elevator",x:t.x+Ii/2+.35,z:t.z+d/2-.8,radius:1.8,prompt:()=>uo?"Step into Elevator":"Call Elevator [Floor 1]",onInteract:()=>{uo=!uo,uo?(a==null||a.playElevatorChime(),i.show("*Ding* Elevator arrives at 1F. The champagne steel doors slide open.")):i.show("The elevator doors glide shut softly.")}});const ks=new _e(16771279,2.2,16,1.1);ks.position.set(t.x,3.2-.25,t.z);const Qa=new _e(16769200,1.8,8,1.2);Qa.position.set(fe,3.2-.25,te);const tl=new _e(16770760,1.8,8,1.2);tl.position.set(t.x,3.2-.25,pn-1.2),l?(l.register({x:t.x,y:3.2-.25,z:t.z,color:16771279,intensity:2.2,distance:16,decay:1.1,zone:"Lobby"}),l.register({x:fe,y:3.2-.25,z:te,color:16769200,intensity:1.8,distance:8,decay:1.2,zone:"Lobby"}),l.register({x:t.x,y:3.2-.25,z:pn-1.2,color:16770760,intensity:1.8,distance:8,decay:1.2,zone:"Lobby"})):(o.add(ks),o.add(Qa),o.add(tl));let Go=0,Ho=0,Bs=!1;return{light:ks,update:(rn,fn)=>{const xn=(fn.x-t.x)**2+(fn.z-t.z)**2;f.visible=vn.isHigh()||xn<784;const pi=Math.hypot(fn.x-t.x,fn.z-(t.z-d/2))<2.6?1:0;pi>.5&&!Bs?(a==null||a.playSlidingDoorSound(),Bs=!0):pi<.5&&(Bs=!1),Go+=(pi-Go)*Math.min(1,rn*5),zt.position.x=t.x-.65-Go*.75,jt.position.x=t.x+.65+Go*.75,f.visible&&(Ho+=((uo?1:0)-Ho)*Math.min(1,rn*4),zs.position.x=t.x-.5-Ho*.75,Fs.position.x=t.x+.5+Ho*.75)}}}function Mg(o,t,n,e,i,s,r,a,l){const d=3.0500000000000003,m=.35,_=new At;_.name="konbini-interior-props",o.add(_);const x=new C(9.8,.05,11.4),p=new g(x,S1);p.position.set(t.x,.15+.025,t.z),p.receiveShadow=!0,o.add(p);const M=new C(9.8,.2,11.4),v=new L({color:16120058,roughness:.5}),w=new g(M,v);w.position.set(t.x,3.2-.1,t.z),o.add(w);const P=new L({map:L1(),roughness:.3,metalness:.05}),R=new C(m,d,11.4),E=new g(R,s);E.position.set(t.x+9.8/2-m/2,.15+d/2,t.z),o.add(E),n.add({minX:t.x+9.8/2-m,minY:0,minZ:t.z-11.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+11.4/2});const I=new g(new C(9.8,d,.04),P);I.position.set(t.x,.15+d/2,t.z+11.4/2-.02);const S=new g(new C(t.w,3.2,m),s);S.position.set(t.x,3.2/2,t.z+t.d/2-m/2),o.add(I,S);const y=new L({color:3818062,roughness:.6,metalness:.4}),D=new g(new C(1,2.1,.06),y);D.position.set(t.x-2.5,1.05,t.z+t.d/2+.01);const G=new g(new C(.5,.6,.22),Pt);G.position.set(t.x+2,1.5,t.z+t.d/2+.08),o.add(D,G),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z+11.4/2-m,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const V=new g(new C(9.8,d,.04),P);V.position.set(t.x,.15+d/2,t.z-11.4/2+.02);const J=new g(new C(t.w,3.2,m),s);J.position.set(t.x,3.2/2,t.z-t.d/2+m/2),o.add(V,J),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z-t.d/2-1,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z-11.4/2+m});const $=2.4,X=(11.4-$)/2,Q=new C(.1,2.4,X),Y=new g(Q,Fe);Y.position.set(t.x-9.8/2+.05,.15+1.2,t.z+11.4/2-X/2);const at=new C(.1,2.4,X),ct=new g(at,Fe);ct.position.set(t.x-9.8/2+.05,.15+1.2,t.z-11.4/2+X/2),o.add(Y,ct),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z+$/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z+11.4/2}),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z-11.4/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z-$/2});const ht=new C(.06,2.3,1.15),wt=new g(ht,Fe),vt=new g(ht,Fe);wt.position.set(t.x-9.8/2+.05,.15+1.15,t.z+.6),vt.position.set(t.x-9.8/2+.05,.15+1.15,t.z-.6),o.add(wt,vt);const H=new C(.4,.8,11.4),z=new g(H,r);z.position.set(t.x-9.8/2+.2,3.2-.4,t.z),o.add(z);const B=Fo("CONVENIENCE 24H","#0c6c44","#ffffff","FAMILY STORE",512,160),it=new g(new Kt(7.5,.95),B);it.rotateY(-Math.PI/2),it.position.set(t.x-9.8/2-.05,3.2-.4,t.z),o.add(it);const dt=8.6,Rt=new C(.65,2.4,dt),Ut=new L({color:1317410,roughness:.3,metalness:.5}),Vt=new g(Rt,Ut);Vt.position.set(t.x+9.8/2-.5,.15+1.2,t.z),_.add(Vt);const zt=new $t({map:D1(),toneMapped:!1}),jt=new g(new Kt(dt,2.2),zt);jt.rotateY(-Math.PI/2),jt.position.set(t.x+9.8/2-.84,.15+1.2,t.z),_.add(jt),n.add({minX:t.x+9.8/2-1.1,minY:0,minZ:t.z-dt/2,maxX:t.x+9.8/2,maxY:2.6,maxZ:t.z+dt/2}),e.add({id:"konbini-drinks",x:t.x+9.8/2-1.4,z:t.z,radius:2,prompt:"Open Beverage Chiller & Grab Drink",onInteract:()=>{i.show("Cold blast of air! Grabbed an ice-cold Pocari Sweat and Melty Blend Green Tea.")}}),Ac(_,t.x+.8,.15,t.z+1.8,n),Ac(_,t.x+.8,.15,t.z-2.2,n),e.add({id:"konbini-shelf-noodles",x:t.x+.8,z:t.z+1.8,radius:1.8,prompt:"Browse Cup Noodles & Snacks",onInteract:()=>{i.show("Nissin Seafood Cup Noodles, Curry Ramen, Calbee Seaweed Chips, and Matcha Pocky in stock.")}}),e.add({id:"konbini-shelf-bento",x:t.x+.8,z:t.z-2.2,radius:1.8,prompt:"Inspect Bento & Onigiri Shelf",onInteract:()=>{i.show("Spicy salmon onigiri, tuna mayo rice ball, and hot tonkatsu bento lunchbox ready to eat.")}});const U=3.6,Wt=1.05,It=.98,Ft=new C(Wt,It,U),Tt=new L({map:I1(),roughness:.25,metalness:.05}),Xt=new g(Ft,Tt);Xt.position.set(t.x-2.2,.15+It/2,t.z-3.4),_.add(Xt);const St=new C(Wt+.08,.06,U+.08),A=new L({color:2040616,roughness:.25,metalness:.15}),b=new g(St,A);b.position.set(t.x-2.2,.15+It+.03,t.z-3.4),_.add(b),n.add({minX:t.x-2.2-Wt/2-.1,minY:0,minZ:t.z-3.4-U/2,maxX:t.x-2.2+Wt/2+.1,maxY:1.5,maxZ:t.z-3.4+U/2});const W=new g(new Z(.04,.04,.2,8),Pt);W.position.set(t.x-2.2,.15+It+.16,t.z-3.8);const nt=new g(new C(.36,.26,.04),new $t({color:1740620}));nt.position.set(t.x-2.2,.15+It+.3,t.z-3.8),nt.rotateX(-.2),_.add(W,nt);const ot=new g(new C(.14,.06,.2),new L({color:1118481,roughness:.3}));ot.position.set(t.x-1.85,.15+It+.09,t.z-3.6),ot.rotateX(.15),_.add(ot);const et=new C(.18,.02,.14),xt=new L({color:30668,roughness:.3}),mt=new g(et,xt);mt.position.set(t.x-1.85,.15+It+.07,t.z-4),_.add(mt);const ft=.95,Lt=.65,lt=.55,bt=new At;bt.position.set(t.x-2,.15+It+.06,t.z-2.3);const Ht=new g(new C(lt,Lt,ft),Pt);Ht.position.set(0,Lt/2,0),bt.add(Ht);const Jt=new $t({map:U1(),toneMapped:!1}),Dt=new g(new Kt(ft*.95,.22),Jt);Dt.rotateY(Math.PI/2),Dt.position.set(lt/2+.01,Lt-.12,0),bt.add(Dt);const oe=new g(new Kt(ft*.95,Lt*.55),Fe);oe.rotateY(Math.PI/2),oe.position.set(lt/2+.01,Lt*.38,0),bt.add(oe);const Qt=new C(.08,.035,.14),pe=new L({color:14254616,roughness:.85});for(let ve=0;ve<3;ve++){const Re=new g(Qt,pe);Re.position.set(0,.18,-.28+ve*.28),bt.add(Re)}const F=new be(.055,10,8);F.scale(1,.6,1);const yt=new L({color:16776437,roughness:.9});for(let ve=0;ve<3;ve++){const Re=new g(F,yt);Re.position.set(0,.36,-.28+ve*.28),bt.add(Re)}const tt=new _e(16742161,2.2,4.5);tt.position.set(0,Lt-.1,0),l?l.register({x:t.x-2,y:.15+It+.06+Lt-.1,z:t.z-2.3,color:16742161,intensity:2.2,distance:4.5,zone:"Konbini"}):bt.add(tt),_.add(bt);const st=new C(.52,.45,.48),gt=new g(st,Pt);gt.position.set(t.x-2.8,.15+It+.28,t.z-4.5),_.add(gt);const pt=new C(.42,.62,.42),Gt=new L({color:2040616,roughness:.3,metalness:.6}),se=new g(pt,Gt);se.position.set(t.x-2.8,.15+It+.36,t.z-1.8),_.add(se);const Ee=new C(.35,1.25,2.6),re=new L({color:4015182,metalness:.6,roughness:.3}),De=new g(Ee,re);De.position.set(t.x-9.8/2+.65,.15+.65,t.z+3.4),_.add(De);const ze=[14231064,1599700,2066488,15902298,9055202,16738740];for(let ve=0;ve<8;ve++){const Re=new g(new C(.06,.24,.28),new L({color:ze[ve%ze.length],roughness:.4}));Re.position.set(t.x-9.8/2+.68,.15+.85,t.z+2.3+ve*.3),Re.rotateZ(.2),_.add(Re)}const Oe=new C(.75,1.95,.68),Ae=new L({color:1005876,roughness:.35}),ge=new g(Oe,Ae);ge.position.set(t.x-9.8/2+.55,.15+.98,t.z-4.6),_.add(ge);const Ne=new g(new Kt(.44,.32),new $t({color:3728798}));Ne.rotateY(Math.PI/2),Ne.position.set(t.x-9.8/2+.94,.15+1.35,t.z-4.6),_.add(Ne),e.add({id:"konbini-famichiki",x:t.x-2,z:t.z-2.3,radius:1.8,prompt:"Buy Hot FamiChiki Fried Chicken [¥220]",onInteract:()=>{i.show("*Warm & Crispy!* You received piping hot FamiChiki in its tear-open paper pouch.")}}),e.add({id:"konbini-pay",x:t.x-1.8,z:t.z-3.6,radius:1.8,prompt:"Pay at Register with Suica / Cash [¥420]",onInteract:()=>{i.show('*Pii-rin!* "Arigatou gozaimashita!" Suica card accepted.')}});const fe=new _e(16777215,2.8,18,1.1);fe.position.set(t.x,3.2-.35,t.z);const te=new _e(16774634,2,9,1.2);te.position.set(t.x-2,3.2-.35,t.z-3.2);const je=new _e(15792383,2,14,1.2);je.position.set(t.x+1.8,3.2-.35,t.z),l?(l.register({x:t.x,y:3.2-.35,z:t.z,color:16777215,intensity:2.8,distance:18,decay:1.1,zone:"Konbini"}),l.register({x:t.x-2,y:3.2-.35,z:t.z-3.2,color:16774634,intensity:2,distance:9,decay:1.2,zone:"Konbini"}),l.register({x:t.x+1.8,y:3.2-.35,z:t.z,color:15792383,intensity:2,distance:14,decay:1.2,zone:"Konbini"})):(o.add(fe),o.add(te),o.add(je));for(let ve=-3.2;ve<=3.2;ve+=2.2){const Re=new At;Re.position.set(t.x,3.2-.08,t.z+ve);const Yt=new g(new C(4.2,.08,.35),Pt);Re.add(Yt);const Zt=new g(new C(4,.03,.08),Bn);Zt.position.set(0,-.04,-.08);const T=new g(new C(4,.03,.08),Bn);T.position.set(0,-.04,.08),Re.add(Zt,T),_.add(Re)}let Ve=0,Ze=!1;return{light:fe,update:(ve,Re)=>{const Yt=(Re.x-t.x)**2+(Re.z-t.z)**2;_.visible=vn.isHigh()||Yt<784;const T=Math.hypot(Re.x-(t.x-9.8/2),Re.z-t.z)<2.8?1:0;T>.5&&!Ze?(a==null||a.playFamilyMartChime(),a==null||a.playSlidingDoorSound(),Ze=!0):T<.5&&(Ze=!1),Ve+=(T-Ve)*Math.min(1,ve*5),wt.position.z=t.z+.6+Ve*.7,vt.position.z=t.z-.6-Ve*.7}}}function Ac(o,t,n,e,i){const l=new C(.95,.16,4.8),c=new L({color:15265008,roughness:.35,metalness:.4}),h=new g(l,c);h.position.set(t,n+.08,e),h.castShadow=!0,o.add(h);const f=new C(.04,1.55,4.8),u=new L({color:16777215,roughness:.4}),d=new g(f,u);d.position.set(t,n+1.55/2,e),o.add(d);const m=new L({color:883270,roughness:.35}),_=new C(.95+.04,1.55,.08),x=new g(_,m);x.position.set(t,n+1.55/2,e-4.8/2);const p=new g(_,m);p.position.set(t,n+1.55/2,e+4.8/2),o.add(x,p);const M=Fo("新発売 NEW","#ffaa00","#221100","RECOMMENDED",256,128),v=new g(new Kt(.7,.35),M);v.position.set(t,n+1.55-.25,e-4.8/2-.05);const w=new g(new Kt(.7,.35),M);w.position.set(t,n+1.55-.25,e+4.8/2+.05),w.rotateY(Math.PI),o.add(v,w);const P=new L({color:16119802,roughness:.3,metalness:.2}),R=new $t({color:14231064}),E=new $t({color:32972}),I=new L({color:14231064,roughness:.4}),S=new L({color:1599700,roughness:.4}),y=new L({color:14264358,roughness:.3,metalness:.4}),D=new L({color:2066488,roughness:.4}),G=new L({color:15887133,roughness:.4}),V=new L({color:1579032,roughness:.8}),J=new L({color:16316664,roughness:.5});for(let $=0;$<4;$++){const X=n+.22+$*.38;for(const Q of[-1,1]){const Y=new C(.42,.03,4.7),at=new g(Y,P);at.position.set(t+Q*.24,X,e),o.add(at);const ct=new C(.02,.04,4.8-.1),ht=new g(ct,$%2===0?R:E);if(ht.position.set(t+Q*.45,X,e),o.add(ht),$===3){const wt=new Z(.055,.042,.12,10),vt=14;for(let H=0;H<vt;H++){const z=e-2.4+.35+H*.3,B=H%3===0?I:H%3===1?S:y,it=new g(wt,B);it.position.set(t+Q*.26,X+.075,z);const dt=new Mn(.057,10);dt.rotateX(-Math.PI/2);const Rt=new g(dt,J);Rt.position.set(t+Q*.26,X+.136,z),o.add(it,Rt)}}else if($===2){const wt=new C(.04,.16,.09),vt=16;for(let H=0;H<vt;H++){const z=e-2.4+.3+H*.26,B=H%4===0?I:H%4===1?D:H%4===2?G:S,it=new g(wt,B);it.position.set(t+Q*.26,X+.095,z),o.add(it)}}else if($===1){const wt=new He(.055,.09,3),vt=new C(.22,.05,.16);for(let H=0;H<10;H++){const z=e-2.4+.4+H*.42;if(H%2===0){const B=new g(wt,V);B.position.set(t+Q*.26,X+.06,z),o.add(B)}else{const B=new g(vt,V);B.position.set(t+Q*.26,X+.04,z);const it=new g(new C(.18,.02,.12),J);it.position.set(t+Q*.26,X+.066,z);const dt=new g(new C(.08,.025,.06),y);dt.position.set(t+Q*.26,X+.08,z),o.add(B,it,dt)}}}else{const wt=new Z(.04,.04,.14,8);for(let vt=0;vt<14;vt++){const H=e-2.4+.35+vt*.3,z=vt%3===0?D:vt%3===1?S:y,B=new g(wt,z);B.position.set(t+Q*.26,X+.08,H),o.add(B)}}}}i.add({minX:t-.95/2-.1,minY:n,minZ:e-4.8/2,maxX:t+.95/2+.1,maxY:n+1.55,maxZ:e+4.8/2})}function Sg(o,t,n,e,i,s,r,a,l){const d=3.0500000000000003,m=.35,_=new At;_.name="ramen-interior-props",o.add(_);const x=new L({map:Z1(),roughness:.45,metalness:.08}),p=new C(5.8,.05,7.4),M=new g(p,x);M.position.set(t.x,.15+.025,t.z),M.receiveShadow=!0,o.add(M);const v=new L({color:2364940,roughness:.7}),w=new C(5.8,.2,7.4),P=new g(w,v);P.position.set(t.x,3.2-.1,t.z),o.add(P);const R=new L({color:4006932,roughness:.6});for(const rt of[-1.8,0,1.8]){const Mt=new g(new C(5.8,.16,.18),R);Mt.position.set(t.x,3.2-.16,t.z+rt),o.add(Mt)}const E=new L({map:Y1(),roughness:.6,metalness:.02}),I=new C(5.8,d,m),S=new g(I,E);S.position.set(t.x,.15+d/2,t.z+7.4/2-m/2),o.add(S),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z+7.4/2-m,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const y=new C(m,d,7.4),D=new g(y,E);D.position.set(t.x-5.8/2+m/2,.15+d/2,t.z),o.add(D),n.add({minX:t.x-t.w/2-1,minY:0,minZ:t.z-7.4/2,maxX:t.x-5.8/2+m,maxY:3.2,maxZ:t.z+7.4/2});const G=new C(m,d,7.4),V=new g(G,E);V.position.set(t.x+5.8/2-m/2,.15+d/2,t.z),o.add(V),n.add({minX:t.x+5.8/2-m,minY:0,minZ:t.z-7.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+7.4/2});const J=2,$=(5.8-J)/2,X=new L({color:1840915,roughness:.85}),Q=new C($,d,m),Y=new g(Q,X);Y.position.set(t.x-5.8/2+$/2,.15+d/2,t.z-7.4/2+m/2),o.add(Y),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z-7.4/2,maxX:t.x-J/2,maxY:3.2,maxZ:t.z-7.4/2+m});const at=new C($,d,m),ct=new g(at,X);ct.position.set(t.x+5.8/2-$/2,.15+d/2,t.z-7.4/2+m/2),o.add(ct),n.add({minX:t.x+J/2,minY:0,minZ:t.z-7.4/2,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z-7.4/2+m});const ht=new g(new C(J,.45,m),r);ht.position.set(t.x,3.2-.225,t.z-7.4/2+m/2),o.add(ht);const wt=4.8,vt=.65,H=new C(wt,.08,vt),z=new L({color:2237997,roughness:.5,metalness:.2}),B=new g(H,z);B.rotateX(.18),B.position.set(t.x,3.2+.05,t.z-7.4/2-.25),o.add(B);for(const rt of[-1.9,-.6,.6,1.9]){const Mt=new g(new C(.08,.22,.35),R);Mt.position.set(t.x+rt,3.2-.12,t.z-7.4/2-.15),o.add(Mt)}const it=new L({map:H1(),roughness:.4,metalness:.05}),dt=new g(new C(4.4,.82,.1),it);dt.position.set(t.x,3.2-.45,t.z-7.4/2-.08),o.add(dt);for(const rt of[-1.3,1.3]){const Mt=new g(new Z(.012,.012,.25,8),Pt);Mt.rotateX(Math.PI/4),Mt.position.set(t.x+rt,3.2-.05,t.z-7.4/2-.18);const qt=new g(new He(.06,.08,10),Pt);qt.rotateX(-Math.PI/3),qt.position.set(t.x+rt,3.2-.12,t.z-7.4/2-.26),o.add(Mt,qt);const ne=new _e(16775904,1.2,2.5);ne.position.set(t.x+rt,3.2-.16,t.z-7.4/2-.25),l?l.register({x:t.x+rt,y:3.2-.16,z:t.z-7.4/2-.25,color:16775904,intensity:1.2,distance:2.5,zone:"Street"}):o.add(ne)}const Rt=3.2-1.25,Ut=t.z-7.4/2-.38,Vt=(rt,Mt)=>{const qt=new At;qt.position.set(rt,Rt,Ut);const ne=new g(new Z(.014,.014,.38,8),Le);ne.rotateX(Math.PI/2),ne.position.set(0,.38,.18);const ye=new g(new Ge(.025,.006,6,12),Le);ye.position.set(0,.38,0),qt.add(ne,ye);const ce=new g(new Z(.005,.005,.14,6),Pt);ce.position.set(0,.31,0),qt.add(ce);const Nt=new g(new Z(.12,.16,.05,16),Le);Nt.position.set(0,.22,0),qt.add(Nt);const qe=new L({map:V1(Mt),roughness:.5,metalness:.05,emissive:new me(14165528),emissiveIntensity:.35}),xe=new Z(.18,.18,.44,16),Qe=new g(xe,qe);qt.add(Qe);const Sn=new g(new Z(.16,.12,.05,16),Le);Sn.position.set(0,-.22,0),qt.add(Sn);const ke=new _e(16733474,1.4,4.2);return ke.position.set(0,0,0),l?l.register({x:rt,y:Rt,z:Ut,color:16733474,intensity:1.4,distance:4.2,zone:"Street"}):qt.add(ke),qt},zt=Vt(t.x-1.45,"らーめん"),jt=Vt(t.x+1.45,"味自慢");o.add(zt,jt);const U=new Z(.016,.016,J+.15,8);U.rotateZ(Math.PI/2);const Wt=new g(U,R);Wt.position.set(t.x,3.2-.72,t.z-7.4/2-.06),o.add(Wt);const It=new L({map:W1(),roughness:.85,side:nn}),Ft=new g(new Kt(J*.96,.72),It);Ft.position.set(t.x,3.2-1.1,t.z-7.4/2-.07),o.add(Ft);const Tt=.68,Xt=1.62,St=.52,A=t.x-1.78,b=t.z-7.4/2-.28,W=new g(new C(Tt,Xt,St),new L({color:14210252,roughness:.4,metalness:.2}));W.position.set(A,.15+Xt/2,b),o.add(W);const nt=new L({map:X1(),roughness:.35,metalness:.1}),ot=new g(new Kt(Tt*.95,Xt*.95),nt);ot.position.set(A,.15+Xt/2,b-St/2-.005),ot.rotateY(Math.PI),o.add(ot),n.add({minX:A-Tt/2-.05,minY:0,minZ:b-St/2,maxX:A+Tt/2+.05,maxY:Xt,maxZ:b+St/2+.1}),e.add({id:"ramen-kenbaiki",x:A,z:b-.6,radius:1.8,prompt:"Buy Ramen Ticket at Kenbaiki [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),i.show("*Chink! Zzzzt!* Purchased [Special Tonkotsu Ramen ¥980]. Step inside and hand your ticket to Master at the counter!")}});const et=4.2,xt=.98,mt=.72,ft=t.x,Lt=t.z+.1,lt=new C(et,xt,mt),bt=new L({color:2825234,roughness:.6}),Ht=new g(lt,bt);Ht.position.set(ft,.15+xt/2,Lt),_.add(Ht);const Jt=new C(et+.12,.06,mt+.08),Dt=new L({color:11367746,roughness:.28,metalness:.05}),oe=new g(Jt,Dt);oe.position.set(ft,.15+xt+.03,Lt),_.add(oe);const Qt=new C(et+.12,.18,.24),pe=new L({color:9065514,roughness:.35}),F=new g(Qt,pe);F.position.set(ft,.15+xt+.12,Lt+mt/2-.12),_.add(F);const yt=new L({color:1579036,roughness:.5}),tt=new L({color:4006932,roughness:.5});for(let rt=0;rt<4;rt++){const Mt=t.x-1.5+rt*1,qt=Lt-mt/2-.38,ne=new g(new Z(.18,.18,.03,12),Pt);ne.position.set(Mt,.15+.015,qt);const ye=new g(new Z(.025,.025,.48,8),tt);ye.position.set(Mt,.15+.255,qt);const ce=new g(new Ge(.12,.01,6,12),Pt);ce.rotateX(Math.PI/2),ce.position.set(Mt,.15+.18,qt);const Nt=new g(new Z(.19,.19,.08,14),yt);Nt.position.set(Mt,.15+.53,qt),_.add(ne,ye,ce,Nt)}const st=.28,gt=.14,pt=t.x-.5,Gt=Lt-.08,se=.15+xt+.06,Ee=new g(new Z(st/2,st*.28,gt,16,1,!0),new L({color:1579032,roughness:.15,side:nn}));Ee.position.set(pt,se+gt/2,Gt),_.add(Ee);const re=new g(new Mn(st*.46,16),new L({color:13934677,roughness:.25}));re.rotateX(-Math.PI/2),re.position.set(pt,se+gt-.015,Gt),_.add(re);const De=new g(new Ge(.065,.012,6,12),new L({color:16109665,roughness:.6}));De.rotateX(Math.PI/2),De.position.set(pt+.02,se+gt-.008,Gt),_.add(De);for(let rt=0;rt<2;rt++){const Mt=new g(new Z(.038,.038,.01,10),new L({color:10176037,roughness:.7}));Mt.position.set(pt-.04+rt*.05,se+gt,Gt-.03+rt*.04),_.add(Mt)}const ze=new g(new Z(.03,.03,.01,10),new L({color:16514038,roughness:.5}));ze.position.set(pt+.05,se+gt,Gt-.04);const Oe=new g(new Z(.018,.018,.012,8),new L({color:16753920,roughness:.3}));Oe.position.set(pt+.05,se+gt+.002,Gt-.04),_.add(ze,Oe);const Ae=new g(new Kt(.065,.09),new L({color:1316884,roughness:.9,side:nn}));Ae.rotateY(-.3),Ae.position.set(pt-.07,se+gt+.04,Gt-.05),_.add(Ae);const ge=new g(new Z(.025,.025,.008,8),new L({color:2263842,roughness:.8}));ge.position.set(pt,se+gt+.002,Gt+.04),_.add(ge);const Ne=[];for(let rt=0;rt<4;rt++){const Mt=new g(new Kt(.22,.22),Tc);Mt.position.set(pt+(Math.random()-.5)*.08,se+.12+rt*.16,Gt),_.add(Mt),Ne.push(Mt)}const fe=new Z(.035,.035,.12,10),te=new g(fe,new L({color:1119773,roughness:.2,metalness:.1}));te.position.set(t.x+.9,se+.06,Lt);const je=new g(fe,new L({color:12853266,roughness:.3}));je.position.set(t.x+1.05,se+.06,Lt);const Ve=new g(new Z(.025,.025,.09,8),Pt);Ve.position.set(t.x+1.18,se+.045,Lt),_.add(te,je,Ve);const Ze=new g(new C(.12,.18,.14),new L({color:5911582,roughness:.6}));Ze.position.set(t.x+1.4,se+.09,Lt);const dn=new g(new C(.08,.08,.1),new L({color:16119278,roughness:.8}));dn.position.set(t.x+1.4,se+.2,Lt),_.add(Ze,dn);const ve=new g(new Z(.06,.07,.22,10),new L({color:14213352,roughness:.2,metalness:.8}));ve.position.set(t.x-1.4,se+.11,Lt);const Re=new g(new Z(.032,.028,.09,8),Fe);Re.position.set(t.x-1.22,se+.045,Lt),_.add(ve,Re);const Yt=t.z+1.7,Zt=4.2,T=.92,O=new g(new C(Zt,T,.85),new L({color:9081500,roughness:.35,metalness:.75}));O.position.set(t.x,.15+T/2,Yt),_.add(O);const q=new g(new C(Zt*.9,.45,.95),new L({color:7239298,roughness:.3,metalness:.8}));q.position.set(t.x,3.2-.45,Yt),_.add(q);const K=new _e(16773341,2.2,5.5);K.position.set(t.x,3.2-.65,Yt),l?l.register({x:t.x,y:3.2-.65,z:Yt,color:16773341,intensity:2.2,distance:5.5,zone:"Ramen"}):_.add(K);const k=new Z(.24,.24,.48,14);for(let rt=0;rt<2;rt++){const Mt=t.x-.9+rt*.58,qt=new g(k,Pt);qt.position.set(Mt,.15+T+.24,Yt-.05);const ne=new g(new Mn(.22,12),new L({color:13143874,roughness:.4}));ne.rotateX(-Math.PI/2),ne.position.set(Mt,.15+T+.46,Yt-.05);const ye=new g(new Ge(.04,.008,4,8),Pt);ye.position.set(Mt-.25,.15+T+.4,Yt-.05);const ce=new g(new Ge(.04,.008,4,8),Pt);ce.position.set(Mt+.25,.15+T+.4,Yt-.05),_.add(qt,ne,ye,ce);for(let Nt=0;Nt<3;Nt++){const qe=new g(new Kt(.35,.35),Tc);qe.position.set(Mt+(Math.random()-.5)*.1,.15+T+.55+Nt*.25,Yt-.05),_.add(qe),Ne.push(qe)}}const ut=new C(.55,.35,.48),Et=new g(ut,Pt);Et.position.set(t.x+.7,.15+T+.18,Yt-.05),_.add(Et);for(let rt=0;rt<2;rt++){const Mt=new g(new Z(.012,.012,.24,6),new L({color:5911582}));Mt.rotateX(.3),Mt.position.set(t.x+.6+rt*.18,.15+T+.42,Yt-.2),_.add(Mt)}for(let rt=0;rt<4;rt++){const Mt=new g(new Z(.14,.08,.08,12,1,!0),new L({color:rt%2===0?14165528:16316664,roughness:.2}));Mt.position.set(t.x+1.5,.15+T+.04+rt*.05,Yt),_.add(Mt)}["特製豚骨 ¥980","チャーシュー麺 ¥1100","濃厚魚介味噌 ¥950","辛味噌らーめん ¥920","替玉(一玉) ¥150","博多一口餃子 ¥380"].forEach((rt,Mt)=>{const qt=Fo(rt,"#e2caa0","#1c1208",void 0,256,64),ne=new g(new Kt(.38,.85),qt);ne.position.set(t.x-1.6+Mt*.64,.15+2.05,t.z+7.4/2-m-.02),_.add(ne)}),n.add({minX:ft-et/2-.1,minY:0,minZ:Lt-mt/2,maxX:ft+et/2+.1,maxY:1.5,maxZ:t.z+7.4/2}),e.add({id:"ramen-counter",x:t.x-.5,z:Lt-.8,radius:1.8,prompt:"Sit at Ramen Bar & Order Special Chashu Tonkotsu [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),i.show('"Hai, irasshai!" Master presents a steaming bowl of rich garlic tonkotsu ramen with tender chashu, soft-boiled ajitama, and wavy handmade noodles. It smells incredible!')}});for(const rt of[-1,1]){const Mt=new g(new Z(.004,.004,.75,6),Le);Mt.position.set(t.x+rt,3.2-.45,Lt);const qt=new g(new He(.18,.14,12,1,!0),new L({color:1582106,roughness:.4}));qt.position.set(t.x+rt,3.2-.82,Lt),_.add(Mt,qt);const ne=new _e(16753988,1.8,6.5,1.2);ne.position.set(t.x+rt,3.2-.9,Lt),l?l.register({x:t.x+rt,y:3.2-.9,z:Lt,color:16753988,intensity:1.8,distance:6.5,decay:1.2,zone:"Ramen"}):_.add(ne)}const Ot=new _e(16750916,2.2,14,1.1);Ot.position.set(t.x,3.2-.35,t.z),l?l.register({x:t.x,y:3.2-.35,z:t.z,color:16750916,intensity:2.2,distance:14,decay:1.1,zone:"Ramen"}):o.add(Ot);let ee=0;return{light:Ot,update:(rt,Mt)=>{const qt=(Mt.x-t.x)**2+(Mt.z-t.z)**2;_.visible=vn.isHigh()||qt<784,ee+=rt;const ne=Math.sin(ee*2)*.05;zt.rotation.z=ne,jt.rotation.z=-ne,_.visible&&Ne.forEach((ye,ce)=>{const Nt=(ee*.55+ce*.18)%1;ye.position.y+=rt*.25,ye.scale.setScalar(.75+Nt*.85),ye.rotation.z+=rt*.15})}}}function Yi(o){const t=new At,n=.92,e=.5,i=.16,s=new Z(.012,.012,n,6),r=o==="izakaya"||o==="cafe"||o==="bookstore"?new L({color:4007706,roughness:.7}):Le;for(const w of[-1,1]){const P=w*e/2,R=new g(s,r);R.position.set(P,n/2,.07),R.rotation.x=-i,t.add(R);const E=new g(s,r);E.position.set(P,n/2,-.07),E.rotation.x=i,t.add(E)}const a=new Z(.012,.012,e+.04,6);a.rotateZ(Math.PI/2);const l=new g(a,Pt);l.position.set(0,n-.02,0),t.add(l);const c=new Z(.008,.008,e,6);c.rotateZ(Math.PI/2);const h=new g(c,Pt);h.position.set(0,.15,0),t.add(h);const f=new L({color:o==="dental"||o==="cleaners"?2381982:3818062,roughness:.55}),u=new C(e*.78,.09,.2),d=new g(u,f);d.position.set(0,.16,0),t.add(d);const m=new Z(.02,.02,.02,8),_=new g(m,Pt);_.position.set(.12,.21,0),t.add(_);const x=new $t({map:rg(o),toneMapped:!1}),p=new Kt(e-.04,.68),M=new g(p,x);M.position.set(0,.46,.075),M.rotation.x=-i,t.add(M);const v=new g(p,x);return v.position.set(0,.46,-.075),v.rotation.x=i,v.rotation.y=Math.PI,t.add(v),t}function vo(){const o=new At,t=.38,n=.55,e=.22,i=new C(t,n,e),s=new L({color:9082016,metalness:.85,roughness:.25,wireframe:!0}),r=new g(i,s);r.position.set(0,n/2,0),o.add(r);const a=new L({color:2237997,roughness:.6,metalness:.4}),l=new g(new C(t+.02,.04,e+.02),a);l.position.set(0,.02,0),o.add(l);const c=new L({color:14544632,roughness:.15,transparent:!0,opacity:.6}),h=new L({color:1711136,roughness:.3});return[{x:-.1,z:-.04,rx:.06,rz:-.08},{x:.08,z:.03,rx:-.05,rz:.09},{x:-.02,z:.05,rx:.08,rz:.04}].forEach(u=>{const d=new At;d.position.set(u.x,.1,u.z),d.rotation.x=u.rx,d.rotation.z=u.rz;const m=new g(new Z(.006,.006,.72,6),Pt);m.position.set(0,.36,0);const _=new g(new He(.032,.48,8),c);_.position.set(0,.28,0);const x=new g(new Ge(.032,.009,6,12,Math.PI),h);x.position.set(.032,.72,0),x.rotation.z=Math.PI/2,d.add(m,_,x),o.add(d)}),o}function bg(){const o=new At,t=new L({color:4336925,roughness:.75}),n=new g(new C(.56,.04,.46),t);n.position.set(0,.2,0),o.add(n);for(const f of[-.22,.22])for(const u of[-.18,.18]){const d=new g(new C(.05,.2,.05),t);d.position.set(f,.1,u),o.add(d)}const e=new L({color:12886895,roughness:.88}),i=new Z(.24,.24,.48,16),s=new g(i,e);s.position.set(0,.46,0),o.add(s);const r=new L({color:5913892,roughness:.8});for(const f of[.32,.6]){const u=new g(new Ge(.245,.014,6,16),r);u.position.set(0,f,0),u.rotation.x=Math.PI/2,o.add(u)}const a=new L({color:16777215,roughness:.5}),l=new g(new Mn(.12,16),a);l.position.set(0,.46,.245),o.add(l);const c=new $t({color:13379869,toneMapped:!1}),h=new g(new Kt(.07,.07),c);return h.position.set(0,.46,.248),o.add(h),o}function Rc(o,t=!1){const n=new At,e=new Z(.012,.012,.44,6);e.rotateX(Math.PI/2);const i=new g(e,Le);i.position.set(0,.35,.22);const s=new g(e,Le);s.position.set(0,-.35,.22),n.add(i,s);const r=.12,a=.88,l=.42,c=new L({color:2238512,roughness:.4,metalness:.6}),h=new g(new C(r,a,l),c);h.position.set(0,0,.42),n.add(h);const f=new $t({color:o==="dental"?14218746:14220014,toneMapped:!1}),u=new Kt(l-.04,a-.04);for(const d of[-1,1]){const m=new g(u,f);if(m.position.set(d*(r/2+.005),0,.42),m.rotation.y=d*Math.PI/2,n.add(m),o==="pharmacy"){const _=new $t({color:43115,toneMapped:!1}),x=new g(new Kt(.07,.24),_);x.position.set(d*(r/2+.008),.08,.42),x.rotation.y=d*Math.PI/2;const p=new g(new Kt(.24,.07),_);p.position.set(d*(r/2+.008),.08,.42),p.rotation.y=d*Math.PI/2,n.add(x,p)}else{const _=new $t({color:2062988,toneMapped:!1}),x=new g(new Mn(.12,16),_);x.position.set(d*(r/2+.008),.08,.42),x.rotation.y=d*Math.PI/2,n.add(x)}}if(!t){const d=new _e(o==="dental"?10217717:9369039,.8,3.5);d.position.set(0,0,.45),n.add(d)}return n}function Tg(){const o=new At,t=.82,n=.85,e=.48,i=new L({color:4014922,roughness:.5,metalness:.6}),s=new g(new C(t,n-.12,e),i);s.position.set(0,n/2,0),o.add(s);const r=new Z(.04,.04,.02,8);r.rotateZ(Math.PI/2);for(const h of[-.34,.34])for(const f of[-.18,.18]){const u=new g(r,Le);u.position.set(h,.04,f),o.add(u)}const a=[10365483,2381982,1996869,14251812,5976714,1975344];for(let h=-.32;h<.34;h+=.075){const f=a[Math.floor(Math.random()*a.length)],u=new L({color:f,roughness:.7}),d=new g(new C(.065,.18,.36),u);d.position.set(h,n+.08,0),d.rotation.y=(Math.random()-.5)*.15,o.add(d)}const l=new $t({color:16765243,toneMapped:!1}),c=new g(new Kt(.32,.14),l);return c.position.set(0,n-.08,e/2+.01),o.add(c),o}function Eg(o,t,n,e,i,s,r){const l=t.w/2,c=t.d/2,h=t.front==="s"||t.front==="n"?t.w:t.d,f=new At;let u=0,d=t.x,m=t.z;t.front==="s"?(u=Math.PI,d=t.x,m=t.z-c):t.front==="n"?(u=0,d=t.x,m=t.z+c):t.front==="w"?(u=-Math.PI/2,d=t.x-l,m=t.z):t.front==="e"&&(u=Math.PI/2,d=t.x+l,m=t.z),f.position.set(d,0,m),f.rotation.y=u,o.add(f);function _($,X){return t.front==="s"?{x:t.x-$,z:t.z-c-X}:t.front==="n"?{x:t.x+$,z:t.z+c+X}:t.front==="w"?{x:t.x-l-X,z:t.z-$}:{x:t.x+l+X,z:t.z+$}}let x="residential";t.id==="b-se-mansion"?x="dental":t.id==="b-nw-mansion"?x="cleaners":t.id==="b-sw-commercial"?x="izakaya":t.id==="b-ne-apartments"?x="pharmacy":t.id==="b-fe-north"?x="bookstore":t.id==="b-cafe"&&(x="cafe");const p=new L({color:1975340,roughness:.35,metalness:.7});if(x==="dental"){const X=new L({color:14542571,roughness:.45,metalness:.1}),Q=new g(new C(10.8+.4,3.2,.08),X);Q.position.set(0,3.2/2,-.02),f.add(Q);const Y=5.6,at=2.25,ct=-2,ht=new $t({map:q1(),toneMapped:!1}),wt=new g(new Kt(Y,at),ht);wt.position.set(ct,1.25,.04),f.add(wt);const vt=new g(new C(Y+.1,.06,.08),p);vt.position.set(ct,1.25+at/2,.05);const H=new g(new C(Y+.1,.12,.08),p);H.position.set(ct,.06,.05),f.add(vt,H);for(const ft of[-Y/6,Y/6]){const Lt=new g(new C(.04,at,.06),p);Lt.position.set(ct+ft,1.25,.05),f.add(Lt)}const z=2.4,B=2.4,it=new g(new C(z+.16,2.3,.12),p);it.position.set(B,1.2,.02),f.add(it);const dt=new C(z*.48,2.18,.04),Rt=new g(dt,Fe);Rt.position.set(B-z*.24,1.18,.03);const Ut=new g(dt,Fe);Ut.position.set(B+z*.24,1.18,.05),f.add(Rt,Ut);const Vt=new g(new C(.04,.18,.02),Pt);Vt.position.set(B-.06,1.15,.07),f.add(Vt);const zt=new C(z+.6,.06,.9),jt=new g(zt,Pt);if(jt.position.set(B,2.45,.45),f.add(jt),r){const ft=_(B,.45);r.register({x:ft.x,y:2.38,z:ft.z,color:15924223,intensity:1.4,distance:4,decay:1.2,zone:"Street"})}else{const ft=new _e(15924223,1.4,4,1.2);ft.position.set(B,2.38,.45),f.add(ft)}const U=new L({color:1914429,roughness:.95}),Wt=new g(new C(z*.9,.02,.95),U);Wt.position.set(B,.012,.55),f.add(Wt);const It=7.6,Ft=.82,Tt=new $t({map:$1(),toneMapped:!1}),Xt=new g(new C(It,Ft,.15),Tt);Xt.position.set(0,2.76,.12),f.add(Xt);const St=new g(new C(It+.12,Ft+.1,.18),p);St.position.set(0,2.76,.1),f.add(St);for(const ft of[-2.4,2.4]){const Lt=new g(new Z(.012,.012,.35,6),Pt);Lt.rotation.x=Math.PI/3,Lt.position.set(ft,3.22,.25);const lt=new g(new C(.18,.08,.12),Pt);lt.position.set(ft,3.28,.38),f.add(Lt,lt)}if(r){const ft=_(0,.5);r.register({x:ft.x,y:3.15,z:ft.z,color:14481146,intensity:1.9,distance:7.5,decay:1.2,zone:"Street"})}else{const ft=new _e(14481146,1.9,7.5,1.2);ft.position.set(0,3.15,.5),f.add(ft)}const A=Rc("dental",!!r);A.position.set(10.8/2+.1,2.4,.25),f.add(A);const b=Yi("dental");b.position.set(-3.8,0,.85),b.rotation.y=.14,f.add(b);const W=vo();W.position.set(B+z/2+.35,0,.35),f.add(W);const nt=new L({color:15724006,roughness:.5}),ot=new g(new Z(.18,.14,.45,12),nt);ot.position.set(.9,.225,.35);const et=new L({color:2250032,roughness:.6}),xt=new g(new be(.24,10,10),et);xt.position.set(.9,.55,.35),f.add(ot,xt);const mt=_(B,1.1);e.add({id:"sf-dental-clinic",x:mt.x,z:mt.z,radius:2.2,prompt:"Inspect Dental Clinic & Reception",onInteract:()=>{s&&s.playDeskBellSound(),i.show("パークサイド歯科: 『本日は予約優先制となっております。歯のクリーニング、定期検診、急患の診療は随時受付中（TEL 03-3456-7890）』")}});return}if(x==="cleaners"){const X=new L({color:1917824,roughness:.85}),Q=new C(10.8*.92,.08,1.25);Q.rotateX(.18);const Y=new g(Q,X);Y.position.set(0,2.45,.6);const at=new g(new C(10.8*.92,.22,.03),X);at.position.set(0,2.24,1.18),f.add(Y,at);const ct=5.6,ht=2.25,wt=-2,vt=new $t({map:K1(),toneMapped:!1}),H=new g(new Kt(ct,ht),vt);H.position.set(wt,1.25,.04),f.add(H);const z=2.4,B=2.4,it=new g(new C(z+.16,2.3,.12),p);it.position.set(B,1.2,.02),f.add(it);const dt=new C(z*.48,2.18,.04),Rt=new g(dt,Fe);Rt.position.set(B-z*.24,1.18,.03);const Ut=new g(dt,Fe);Ut.position.set(B+z*.24,1.18,.05),f.add(Rt,Ut);const Vt=new L({color:1519967,roughness:.95}),zt=new g(new C(z*.9,.02,.95),Vt);zt.position.set(B,.012,.55),f.add(zt);const jt=7.6,U=.82,Wt=new $t({map:J1(),toneMapped:!1}),It=new g(new C(jt,U,.15),Wt);if(It.position.set(0,2.78,.12),f.add(It),r){const St=_(0,.6);r.register({x:St.x,y:3.15,z:St.z,color:15266559,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const St=new _e(15266559,2,7.5,1.2);St.position.set(0,3.15,.6),f.add(St)}const Ft=Yi("cleaners");Ft.position.set(-3.8,0,.85),Ft.rotation.y=-.12,f.add(Ft);const Tt=vo();Tt.position.set(B+z/2+.35,0,.35),f.add(Tt);const Xt=_(B,1.1);e.add({id:"sf-dry-cleaners",x:Xt.x,z:Xt.z,radius:2.2,prompt:"Check Dry Cleaners Rates",onInteract:()=>{s&&s.playDeskBellSound(),i.show("白金クリーニング: 『朝10時までのお預かりで夕方5時お渡し！ワイシャツ立体仕上 ¥220、スーツ上下 ¥1,280。24Hコインランドリーも併設稼働中です！』")}});return}if(x==="izakaya"){const X=new L({color:2234900,roughness:.9}),Q=new g(new C(9.2+.3,3.2,.08),X);Q.position.set(0,3.2/2,-.02),f.add(Q);const Y=new C(9.2*.96,.12,1.2);Y.rotateX(.2);const at=new g(Y,new L({color:2040617,roughness:.6}));at.position.set(0,2.5,.6),f.add(at);const ct=5.2,ht=2.25,wt=-1.6,vt=new $t({map:j1(),toneMapped:!1}),H=new g(new Kt(ct,ht),vt);H.position.set(wt,1.25,.04),f.add(H);const z=2,B=2.4,it=new g(new C(z+.12,2.2,.1),X);it.position.set(B,1.15,.02),f.add(it);const dt=new C(z*.95,.55,.03),Rt=new L({color:1582139,roughness:.85}),Ut=new g(dt,Rt);Ut.position.set(B,2.05,.09),f.add(Ut);const Vt=new L({color:4014664,roughness:.8}),zt=new g(new C(z*1.1,.04,.8),Vt);zt.position.set(B,.02,.45),f.add(zt);const jt=bg();jt.position.set(-3.4,0,.55),f.add(jt);const U=new At;U.position.set(1.1,2.3,.5);const Wt=new g(new Z(.008,.008,.48,6),Le);Wt.rotation.x=Math.PI/2,Wt.position.set(0,.15,-.24),U.add(Wt);const It=new $t({color:14235689,toneMapped:!1}),Ft=new g(new Z(.16,.16,.38,12),It),Tt=new g(new Z(.12,.16,.04,12),Le);Tt.position.set(0,.2,0);const Xt=new g(new Z(.16,.12,.04,12),Le);if(Xt.position.set(0,-.2,0),Ft.add(Tt,Xt),U.add(Ft),r){const xt=_(1.1,.5);r.register({x:xt.x,y:2.3,z:xt.z,color:16742178,intensity:1.8,distance:5,decay:1.2,zone:"Street"})}else{const xt=new _e(16742178,1.8,5,1.2);xt.position.set(0,0,0),U.add(xt)}f.add(U);const St=6.8,A=.82,b=new $t({map:Q1(),toneMapped:!1}),W=new g(new C(St,A,.15),b);if(W.position.set(0,2.82,.12),f.add(W),r){const xt=_(0,.55);r.register({x:xt.x,y:3.1,z:xt.z,color:16750899,intensity:2.2,distance:8,decay:1.2,zone:"Street"})}else{const xt=new _e(16750899,2.2,8,1.2);xt.position.set(0,3.1,.55),f.add(xt)}const nt=Yi("izakaya");nt.position.set(3.4,0,.85),nt.rotation.y=.15,f.add(nt);const ot=_(B,1.1);e.add({id:"sf-izakaya",x:ot.x,z:ot.z,radius:2.2,prompt:"Look at Izakaya Specials",onInteract:()=>{s&&s.playDeskBellSound(),i.show("和食・酒処 魚河岸: 『いらっしゃい！今夜のイチオシは豊洲直送の刺身三種盛り(¥980)と、じっくり煮込んだ特製もつ煮込み(¥480)だよ！晩酌セットも大人気！』")}});let et=0;return{update(xt){et+=xt,Ft.rotation.z=Math.sin(et*2.2)*.06,Ft.rotation.x=Math.cos(et*1.8)*.04}}}if(x==="pharmacy"){const X=new L({color:14151399,roughness:.45,metalness:.1}),Q=new g(new C(8.8+.3,3.2,.08),X);Q.position.set(0,3.2/2,-.02),f.add(Q);const Y=4.8,at=2.25,ct=-1.6,ht=new $t({map:tg(),toneMapped:!1}),wt=new g(new Kt(Y,at),ht);wt.position.set(ct,1.25,.04),f.add(wt);const vt=2.2,H=2.2,z=new g(new C(vt+.16,2.3,.12),p);z.position.set(H,1.2,.02),f.add(z);const B=new C(vt*.48,2.18,.04),it=new g(B,Fe);it.position.set(H-vt*.24,1.18,.03);const dt=new g(B,Fe);dt.position.set(H+vt*.24,1.18,.05),f.add(it,dt);const Rt=new L({color:1331780,roughness:.95}),Ut=new g(new C(vt*.9,.02,.95),Rt);Ut.position.set(H,.012,.55),f.add(Ut);const Vt=6.6,zt=.82,jt=new $t({map:eg(),toneMapped:!1}),U=new g(new C(Vt,zt,.15),jt);U.position.set(0,2.76,.12),f.add(U);const Wt=Rc("pharmacy",!!r);if(Wt.position.set(8.8/2+.1,2.4,.25),f.add(Wt),r){const Xt=_(0,.5);r.register({x:Xt.x,y:3.15,z:Xt.z,color:14350576,intensity:1.9,distance:7,decay:1.1,zone:"Street"})}else{const Xt=new _e(14350576,1.9,7,1.1);Xt.position.set(0,3.15,.5),f.add(Xt)}const It=Yi("pharmacy");It.position.set(-3.2,0,.85),It.rotation.y=.12,f.add(It);const Ft=vo();Ft.position.set(H+vt/2+.35,0,.35),f.add(Ft);const Tt=_(H,1.1);e.add({id:"sf-pharmacy",x:Tt.x,z:Tt.z,radius:2.2,prompt:"Consult Pharmacy Counter",onInteract:()=>{s&&s.playDeskBellSound(),i.show("森クリニック・森薬局: 『全国どちらの医療機関の処方せんも受け付けております。お薬の相談、在宅医療、各種健康診断もお気軽にどうぞ。』")}});return}if(x==="bookstore"){const X=new L({color:3875350,roughness:.65}),Q=new g(new C(9.8+.3,3.2,.08),X);Q.position.set(0,3.2/2,-.02),f.add(Q);const Y=5.4,at=2.25,ct=-1.8,ht=new $t({map:ng(),toneMapped:!1}),wt=new g(new Kt(Y,at),ht);wt.position.set(ct,1.25,.04),f.add(wt);const vt=2.2,H=2.2,z=new g(new C(vt+.16,2.3,.12),p);z.position.set(H,1.2,.02),f.add(z);const B=new C(vt*.48,2.18,.04),it=new g(B,Fe);it.position.set(H-vt*.24,1.18,.03);const dt=new g(B,Fe);dt.position.set(H+vt*.24,1.18,.05),f.add(it,dt);const Rt=7,Ut=.82,Vt=new $t({map:ig(),toneMapped:!1}),zt=new g(new C(Rt,Ut,.15),Vt);if(zt.position.set(0,2.76,.12),f.add(zt),r){const Ft=_(0,.5);r.register({x:Ft.x,y:3.15,z:Ft.z,color:16770756,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const Ft=new _e(16770756,2,7.5,1.2);Ft.position.set(0,3.15,.5),f.add(Ft)}const jt=Tg();jt.position.set(-3.2,0,.65),f.add(jt);const U=Yi("bookstore");U.position.set(3.4,0,.85),U.rotation.y=-.15,f.add(U);const Wt=vo();Wt.position.set(1,0,.35),f.add(Wt);const It=_(H,1.1);e.add({id:"sf-bookstore",x:It.x,z:It.z,radius:2.2,prompt:"Browse Bookstore Display",onInteract:()=>{s&&s.playDeskBellSound(),i.show("東書店: 『話題の直木賞・芥川賞受賞作、今週発売のジャンプ系コミックス最新巻が平積みされています！図書カードNEXT取扱店です。』")}});return}if(x==="cafe"){const X=new L({color:2759186,roughness:.7}),Q=new g(new C(8.2+.3,3.2,.08),X);Q.position.set(0,3.2/2,-.02),f.add(Q);const Y=new L({color:3547155,roughness:.85}),at=new C(8.2*.92,.08,1.15);at.rotateX(.18);const ct=new g(at,Y);ct.position.set(0,2.45,.55),f.add(ct);const ht=4.6,wt=2.25,vt=-1.4,H=new $t({map:og(),toneMapped:!1}),z=new g(new Kt(ht,wt),H);z.position.set(vt,1.25,.04),f.add(z);const B=2,it=2,dt=new g(new C(B+.14,2.25,.12),X);dt.position.set(it,1.18,.02),f.add(dt);const Rt=new g(new C(B*.9,2.15,.04),Fe);Rt.position.set(it,1.18,.04),f.add(Rt);const Ut=new L({color:13936723,metalness:.85,roughness:.25}),Vt=new g(new Z(.015,.015,.7,8),Ut);Vt.rotation.z=Math.PI/2,Vt.position.set(it,1.15,.08),f.add(Vt);const zt=6.2,jt=.82,U=new $t({map:sg(),toneMapped:!1}),Wt=new g(new C(zt,jt,.15),U);if(Wt.position.set(0,2.76,.12),f.add(Wt),r){const St=_(0,.5);r.register({x:St.x,y:3.15,z:St.z,color:16755268,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const St=new _e(16755268,2,7.5,1.2);St.position.set(0,3.15,.5),f.add(St)}const It=Yi("cafe");It.position.set(-2.8,0,.85),It.rotation.y=.15,f.add(It);const Ft=new L({color:4862496,roughness:.7}),Tt=new g(new C(1.4,.45,.42),Ft);Tt.position.set(2.8,.225,.55),f.add(Tt);const Xt=_(it,1.1);e.add({id:"sf-cafe",x:Xt.x,z:Xt.z,radius:2.2,prompt:"Read Cafe Chalkboard",onInteract:()=>{s&&s.playDeskBellSound(),i.show("Cafe Mame: 『本日のおすすめ：エチオピア・イルガチェフェ G1（浅煎り ¥550）。華やかな香りと柑橘の酸味が楽しめます。テイクアウトも可能です。』")}});return}const M=Math.min(h*.55,5.8),v=new L({color:1909290,roughness:.35,metalness:.2}),w=new g(new C(M,3.2,.12),v);w.position.set(0,3.2/2,-.02),f.add(w);const P=2.4,R=new g(new C(P+.16,2.3,.14),p);R.position.set(-.5,1.2,.02),f.add(R);const E=new C(P*.48,2.18,.04),I=new g(E,Fe);I.position.set(-.5-P*.24,1.18,.03);const S=new g(E,Fe);S.position.set(-.5+P*.24,1.18,.05),f.add(I,S);const y=new $t({map:ag(),toneMapped:!1}),D=new g(new Kt(.55,.55),y);D.position.set(1.4,1.35,.05),f.add(D);const G=new g(new C(M*.85,.08,.85),Pt);if(G.position.set(0,2.5,.4),f.add(G),r){const $=_(0,.4);r.register({x:$.x,y:2.42,z:$.z,color:16773339,intensity:1.4,distance:5.5,decay:1.2,zone:"Street"})}else{const $=new _e(16773339,1.4,5.5,1.2);$.position.set(0,2.42,.4),f.add($)}const V=vo();V.position.set(-2,0,.35),f.add(V);const J=_(1.4,1);e.add({id:`sf-intercom-${t.id}`,x:J.x,z:J.z,radius:2,prompt:"Examine Residence Intercom",onInteract:()=>{s&&s.playDeskBellSound(),i.show("オートロック操作盤: 『居住者専用エントランスです。訪問先の部屋番号を押して「呼出」を押してください。』")}})}function _s(o,t,n,e,i){const r=t.w/2,a=t.d/2,l=new L({color:16769690,emissive:16758852,emissiveIntensity:.85,roughness:.3}),c=new L({color:13954303,emissive:7779560,emissiveIntensity:.7,roughness:.3}),h=new L({color:1580582,roughness:.1,metalness:.7}),f=(n>0,1);for(let u=f;u<t.floors;u++){const d=u*3.2;if(t.balconies.includes(u))for(const p of t.balconyFaces)Ag(o,t,p,d,i);const _=t.bay,x=(t.w-1.6)/_;for(let p=0;p<_;p++){const M=-r+.8+p*x+x/2,v=(t.seed+u*17+p*31)%100,w=v<55?l:v<80?c:h;if(t.front==="s")ws(o,t.x+M,d+1.45,t.z-a,1.4,1.6,"s",w,e);else if(t.front==="n")ws(o,t.x+M,d+1.45,t.z+a,1.4,1.6,"n",w,e);else if(t.front==="w"){const P=-a+.8+p*((t.d-1.6)/_)+(t.d-1.6)/_/2;ws(o,t.x-r,d+1.45,t.z+P,1.4,1.6,"w",w,e)}else{const P=-a+.8+p*((t.d-1.6)/_)+(t.d-1.6)/_/2;ws(o,t.x+r,d+1.45,t.z+P,1.4,1.6,"e",w,e)}}}}function ws(o,t,n,e,i,s,r,a,l){const f=r==="s"||r==="n"?new C(i,s,.18):new C(.18,s,i),u=new g(f,l);u.position.set(t,n,e),o.add(u);const d=r==="s"||r==="n"?new C(i-.08*2,s-.08*2,.04):new C(.04,s-.08*2,i-.08*2),m=new g(d,a),_=r==="s"?-.02:r==="n"?.02:0,x=r==="w"?-.02:r==="e"?.02:0;m.position.set(t+x,n,e+_),o.add(m)}function Ag(o,t,n,e,i){const s=t.w/2,r=t.d/2,a=1.15,l=1.05;if(n==="s"){const c=new C(t.w*.85,.18,a),h=new g(c,i);h.position.set(t.x,e+.09,t.z-r-a/2),o.add(h);const f=new C(t.w*.85,l,.06),u=new g(f,Pt);u.position.set(t.x,e+l/2+.18,t.z-r-a),o.add(u),br(o,t.x+t.w*.3,e+.5,t.z-r-a*.5,0)}else if(n==="n"){const c=new C(t.w*.85,.18,a),h=new g(c,i);h.position.set(t.x,e+.09,t.z+r+a/2),o.add(h);const f=new C(t.w*.85,l,.06),u=new g(f,Pt);u.position.set(t.x,e+l/2+.18,t.z+r+a),o.add(u),br(o,t.x-t.w*.3,e+.5,t.z+r+a*.5,Math.PI)}else if(n==="w"){const c=new C(a,.18,t.d*.85),h=new g(c,i);h.position.set(t.x-s-a/2,e+.09,t.z),o.add(h);const f=new C(.06,l,t.d*.85),u=new g(f,Pt);u.position.set(t.x-s-a,e+l/2+.18,t.z),o.add(u),br(o,t.x-s-a*.5,e+.5,t.z+t.d*.3,-Math.PI/2)}}function br(o,t,n,e,i){const s=new At,r=new C(.72,.52,.32),a=new g(r,i1);s.add(a);const l=new Z(.2,.2,.02,16);l.rotateX(Math.PI/2);const c=new $t({color:4473924}),h=new g(l,c);h.position.set(.12,0,.165),s.add(h),s.position.set(t,n,e),s.rotateY(i),o.add(s)}function Rg(o,t,n){const e=t.w/2,i=t.d/2,s=new Z(.06,.06,n,8),r=new g(s,Le);r.position.set(t.x-e+.2,n/2,t.z-i-.08),o.add(r)}function Cg(o,t,n,e){const i=t.w/2,s=t.d/2,r=.9,a=new g(new C(t.w,r,.3),e);a.position.set(t.x,n+r/2,t.z+s-.15);const l=new g(new C(t.w,r,.3),e);l.position.set(t.x,n+r/2,t.z-s+.15);const c=new g(new C(.3,r,t.d),e);c.position.set(t.x-i+.15,n+r/2,t.z);const h=new g(new C(.3,r,t.d),e);h.position.set(t.x+i-.15,n+r/2,t.z),o.add(a,l,c,h);const f=new C(3.2,2.4,3.2),u=new g(f,e);if(u.position.set(t.x,n+1.2,t.z),o.add(u),t.floors>=4){const _=new At,x=new Z(.05,.05,1.2,6);for(const w of[-.6,.6])for(const P of[-.6,.6]){const R=new g(x,Pt);R.position.set(w,.6,P),_.add(R)}const p=new Z(.9,.9,1.6,16),M=new L({color:10008776,roughness:.3,metalness:.4}),v=new g(p,M);v.position.set(0,1.8,0),_.add(v),_.position.set(t.x+i*.5,n,t.z+s*.4),o.add(_)}const d=new Z(.03,.04,3.6,6),m=new g(d,Pt);m.position.set(t.x-i*.4,n+1.8,t.z-s*.4),o.add(m)}function Pg(o,t,n,e,i,s,r){const a=new At;a.name="urban_props";const l=[],c=[],h=[{x:-36,z:4.8},{x:-14,z:4.8},{x:8,z:4.8},{x:32,z:4.8},{x:-36,z:-4.8},{x:8,z:-4.8},{x:32,z:-4.8},{x:12.2,z:16},{x:12.2,z:32},{x:19.8,z:24},{x:-17.8,z:-18},{x:-17.8,z:-32},{x:-9.8,z:-20}];for(const w of h){const P=Ig(w.x,w.z,l,r);a.add(P),t.add({minX:w.x-.25,minY:0,minZ:w.z-.25,maxX:w.x+.25,maxY:10,maxZ:w.z+.25})}Lg(a,h);const f=[{x:-4.2,z:8.8,rotY:0,variant:0,drink:"hot Boss Coffee [缶コーヒー ¥140]"},{x:20.4,z:9.8,rotY:-Math.PI/2,variant:1,drink:"cold Pocari Sweat [ポカリスエット ¥160]"},{x:5.2,z:22.1,rotY:Math.PI,variant:2,drink:"warm Green Tea [お〜いお茶 ¥130]"},{x:-9.6,z:-10.8,rotY:Math.PI/2,variant:0,drink:"cold Royal Milk Tea [ミルクティー ¥150]"}];for(let w=0;w<f.length;w++){const P=f[w],R=Pf(P.x,P.z,P.rotY,P.variant,P.drink,n,e,t,r);a.add(R)}const u=Dg(a,t,n,e,i,s,l,r);c.push(u.update);const d=[{x:2.4,z:6.8,rotY:.15,color:2046808,id:"bike-ramen"},{x:-3.5,z:8.2,rotY:-.1,color:1984032,id:"bike-sunheights"},{x:21.5,z:12,rotY:Math.PI/2,color:9050148,id:"bike-konbini-1"},{x:21.5,z:13.5,rotY:Math.PI/2,color:11056320,id:"bike-konbini-2"},{x:8.5,z:27.5,rotY:-Math.PI/2,color:2367002,id:"bike-cafe"},{x:10.8,z:20.5,rotY:Math.PI/2,color:2046808,id:"bike-alley"},{x:2.2,z:23.8,rotY:Math.PI,color:1984032,id:"bike-north"},{x:-18.2,z:-10.5,rotY:-Math.PI/2,color:9050148,id:"bike-residential"}];for(const w of d){const P=If(w.x,w.z,w.rotY,w.color,w.id,n,e,s);a.add(P),t.add({minX:w.x-.75,minY:0,minZ:w.z-.35,maxX:w.x+.75,maxY:1.2,maxZ:w.z+.35})}const m=[{x:-2.8,z:8.2,type:"bush"},{x:-2.2,z:8.2,type:"fern"},{x:2,z:8.2,type:"tall"},{x:6.8,z:21,type:"bonsai"},{x:7.4,z:21,type:"hydrangea"},{x:8,z:21,type:"trough"},{x:8.6,z:21,type:"tall"},{x:1.5,z:23.6,type:"fern"},{x:-1.2,z:23.6,type:"bush"}];for(const w of m){const P=jg(w.x,w.z,w.type);a.add(P)}a.add(Qg(7.1,20.9));const _=tx(-20.5,.15,-16.5,Math.PI/2,t);a.add(_);const x=Uc(-16.8,-4.2,Math.PI/4,t),p=Uc(13.2,4.2,-Math.PI/4,t);a.add(x,p);const M=ex(9.6,20.4);a.add(M),a.add(Lf(4.25,22.1,n,e,s)),a.add(nx(6.2,22.3,l,r)),ix(a,t,n,e);const v=ox(a,n,e,i,s);return c.push(v.update),o.add(a),{group:a,streetLights:l,update(w){for(const P of c)P(w)}}}function Ig(o,t,n,e){const i=new At;i.position.set(o,0,t);const s=9.2,r=new Z(.18,.24,s,12),a=new L({color:5922662,roughness:.88,metalness:.05}),l=new g(r,a);l.position.set(0,s/2,0),l.castShadow=!0,i.add(l);const c=new C(2.2,.1,.1),h=new g(c,Le);h.position.set(0,s-.6,0),i.add(h);const f=new C(1.6,.1,.1),u=new g(f,Le);u.position.set(0,s-1.4,0),i.add(u);const d=new Z(.04,.04,.14,8),m=new L({color:15658734,roughness:.2});for(const D of[-.95,-.45,.45,.95]){const G=new g(d,m);G.position.set(D,s-.5,0),i.add(G)}const _=new Z(.32,.32,1.1,12),x=new L({color:4739160,roughness:.5,metalness:.4}),p=new g(_,x);p.position.set(.35,s-2.2,0),i.add(p);const M=new Z(.015,.015,.28,6);M.rotateZ(Math.PI/2);for(let D=1.8;D<s-2.5;D+=.55){const G=new g(M,Pt),V=Math.sin(D*4)>0?.2:-.2;G.position.set(V,D,0),i.add(G)}const v=new Z(.03,.03,1.1,8);v.rotateZ(Math.PI/3);const w=new g(v,Le);w.position.set(.45,5.2,0),i.add(w);const P=new He(.25,.15,12),R=new g(P,Le);R.position.set(.85,4.8,0),i.add(R);const E=new be(.1,12,12),I=new g(E,Bn);I.position.set(.85,4.72,0),i.add(I);const S=new He(2.4,4.6,16,1,!0);S.translate(0,-2.3,0);const y=new g(S,E1);if(y.position.set(.85,4.7,0),i.add(y),e)e.register({x:o+.85,y:4.65,z:t,color:16770229,intensity:1.6,distance:16,decay:1.5,zone:"Street"});else{const D=new _e(16770229,1.6,16,1.5);D.position.set(.85,4.65,0),n.push(D),i.add(D)}return i}function Lg(o,t){const n=new xf({color:1711652,linewidth:1.5});for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){const s=t[e],r=t[i],a=Math.hypot(r.x-s.x,r.z-s.z);if(a<26)for(const l of[-.45,0,.45]){const c=8.6+l*.4,h=8.6+l*.4,f=(s.x+r.x)/2,u=(s.z+r.z)/2,d=Math.min(1.2,a*.045),_=new yf(new N(s.x,c,s.z),new N(f,(c+h)/2-d,u),new N(r.x,h,r.z)).getPoints(12),x=new on().setFromPoints(_),p=new c2(x,n);o.add(p)}}}function Pf(o,t,n,e,i,s,r,a,l){const c=new At,h=1.05,f=1.95,u=.82,d=new C(h,f,u),m=new L({color:e===0?1784632:e===1?5904420:1715796,roughness:.35,metalness:.65}),_=new g(d,m);_.position.set(0,f/2,0),_.castShadow=!0,c.add(_);const x=new Kt(.92,1.75),p=R1(e),M=new $t({map:p,toneMapped:!1}),v=new g(x,M);v.position.set(0,f/2+.04,u/2+.01),c.add(v);const w=e===0?8060884:e===1?16746649:8965375;if(l){const G=u/2+.45;l.register({x:o+Math.sin(n)*G,y:.15+1.2,z:t+Math.cos(n)*G,color:w,intensity:.9,distance:4,decay:1.2,zone:"Street"})}else{const G=new _e(w,.9,4);G.position.set(0,1.2,u/2+.45),c.add(G)}const P=new C(.42,.85,.42),R=new L({color:4015181,roughness:.4}),E=new g(P,R);E.position.set(h/2+.32,.425,0),c.add(E);const I=new Z(.08,.08,.02,12),S=new $t({color:1118481}),y=new g(I,S);y.position.set(h/2+.24,.86,0);const D=new g(I,S);return D.position.set(h/2+.4,.86,0),c.add(y,D),c.position.set(o,.15,t),c.rotateY(n),a.add({minX:o-.9,minY:0,minZ:t-.7,maxX:o+.9,maxY:2.2,maxZ:t+.7}),s.add({id:`vending-${o}-${t}`,x:o,z:t,radius:1.8,prompt:`Buy ${i}`,onInteract:()=>{r.show(`*Clink-clatter-thump!* You bought a ${i}. It feels warm and soothing in your hands.`)}}),c}function Dg(o,t,n,e,i,s,r,a){const l=[];Ug(o,t,n,e),Ng(o,t),Cc(o,1.8,-18.5,r??[],a),Cc(o,-.5,-31,r??[],a);const c=zg(-2.5,-17.5,a);o.add(c.group),l.push(c.update),t.add({minX:-2.9,minY:0,minZ:-17.9,maxX:-2.1,maxY:2.2,maxZ:-17.1}),Fg(o,2.8,-8.5,t,n,e),Og(o,-2.8,-8.5,t,n,e),kg(o,3.6,-10.2,t),Bg(o,6.2,-32.5,t),Gg(o,3.6,-26,t);const h=Pf(-7.5,-9.2,-Math.PI/2,1,"cold Pocari Sweat & Calpis Soda [¥160]",n,e,t,a);o.add(h),o.add(Lf(-7.5,-10.4,n,e,s));const f=If(-5.8,-8.8,.25,1920312,"bike-park-entrance",n,e,s);o.add(f),t.add({minX:-6.5,minY:0,minZ:-9.2,maxX:-5.1,maxY:1.2,maxZ:-8.4}),Hg(o,-.5,-23.8,t,n,e,i);const u=pa(3.4,-18.2,-Math.PI/2);o.add(u),t.add({minX:3,minY:0,minZ:-19.2,maxX:3.8,maxY:1.2,maxZ:-17.2}),n.add({id:"bench-sakura",x:2.6,z:-18.2,radius:1.8,prompt:()=>i.seated?"Stand up from Bench":"Sit on Sakura Bench",onInteract:()=>{i.seated=!i.seated,i.seated?e.show("You sit beneath the grand sakura tree. Pink petals drift down gently in the quiet midnight breeze."):e.show("You stand back up, refreshed.")}});const d=pa(3.5,-28.5,-Math.PI/2);o.add(d),t.add({minX:3.1,minY:0,minZ:-29.5,maxX:3.9,maxY:1.2,maxZ:-27.5}),n.add({id:"bench-playground",x:2.7,z:-28.5,radius:1.8,prompt:()=>i.seated?"Stand up from Bench":"Sit on Park Bench",onInteract:()=>{i.seated=!i.seated,i.seated?e.show("You sit down facing the playground. The quiet night air of Tokyo surrounds you."):e.show("You stand back up.")}}),Vg(o,2.4,-22.5,t),Wg(o,-2.2,-20.5,t,n,e,s);const m=Xg(o,-3.8,-27.5,t,n,e,i,s);l.push(m.update);const _=Yg(o,-1.5,-29.2,t,n,e,s);l.push(_.update),Zg(o,-4.8,-33.6,Math.PI,t,n,e,s),qg(o,-2.5,-33.5,t);const x=Pc(5.2,-15.5,1.25);o.add(x),t.add({minX:4.6,minY:0,minZ:-16.1,maxX:5.8,maxY:6.5,maxZ:-14.9});const p=new At;o.add(p);const M=Jg(5.2,-15.5);p.add(M.group);const v=Pc(-2.8,-12.5,.85);o.add(v),t.add({minX:-3.3,minY:0,minZ:-13,maxX:-2.3,maxY:5.5,maxZ:-12});const w=$g(-5,-14);o.add(w),t.add({minX:-5.5,minY:0,minZ:-14.5,maxX:-4.5,maxY:5.5,maxZ:-13.5});const P=Ic(-5.5,-17.5,1);o.add(P),t.add({minX:-6,minY:0,minZ:-18,maxX:-5,maxY:5.5,maxZ:-17});const R=Ic(-6.8,-34.8,1.05);o.add(R),t.add({minX:-7.3,minY:0,minZ:-35.3,maxX:-6.3,maxY:5.5,maxZ:-34.3});for(const S of[{x:8.5,z:-28},{x:8.5,z:-31.5},{x:8.5,z:-35}]){const y=Kg(S.x,S.z);o.add(y),t.add({minX:S.x-.4,minY:0,minZ:S.z-.4,maxX:S.x+.4,maxY:6,maxZ:S.z+.4})}Lc(o,7.6,-14,1.4,3.2,"azalea",t),Lc(o,-7.2,-13.5,1.4,2.6,"hydrangea",t),Dc(p,5.2,-15.5,3.2,40),Dc(p,-2.8,-12.5,2.2,20);let E=0,I=!0;return{update(S){vn.isHigh()?(p.visible=!0,M.update(S)):(E+=S,E>.1&&(E=0,I=(i.x-0)*(i.x-0)+(i.z- -22.5)*(i.z- -22.5)<1764,p.visible=I),I&&M.update(S));for(const y of l)y(S)}}}function Ug(o,t,n,e){const i=new L({color:4738904,roughness:.85,metalness:.05}),s=new L({color:3554372,roughness:.8}),r=new At;r.position.set(-2.2,.15,-7.6);const a=new g(new C(.55,1.25,.55),i);a.position.set(0,.625,0),a.castShadow=!0;const l=new g(new C(.65,.1,.65),s);l.position.set(0,1.3,0),r.add(a,l),o.add(r),t.add({minX:-2.5,minY:0,minZ:-7.9,maxX:-1.9,maxY:1.5,maxZ:-7.3});const c=new At;c.position.set(2.2,.15,-7.6);const h=new g(new C(.55,1.25,.55),i);h.position.set(0,.625,0),h.castShadow=!0;const f=new g(new C(.65,.1,.65),s);f.position.set(0,1.3,0),c.add(h,f);const u=new $t({map:dg()}),d=new Kt(.42,.22),m=new g(d,u);m.position.set(0,.85,.28),c.add(m),o.add(c),t.add({minX:1.9,minY:0,minZ:-7.9,maxX:2.5,maxY:1.5,maxZ:-7.3}),n.add({id:"park-nameplate",x:2.2,z:-7,radius:1.6,prompt:"Read Park Plaque",onInteract:()=>{e.show(`Bronze Park Plaque: "Sakura-cho Children's Park (桜町児童遊園) — Minato Ward, Tokyo".`)}});const _=new L({color:2236962,roughness:.5,metalness:.7}),x=new L({color:13938487,roughness:.4}),p=[{x:-.75,z:-7.6},{x:.75,z:-7.6},{x:-8.5,z:-22.6},{x:-8.5,z:-21.4}];for(const M of p){const v=new At;v.position.set(M.x,.15,M.z);const w=new g(new Z(.08,.08,.8,12),_);w.position.set(0,.4,0),w.castShadow=!0;const P=new g(new be(.09,12,8),_);P.position.set(0,.8,0);const R=new g(new Z(.085,.085,.16,12),x);R.position.set(0,.58,0),v.add(w,P,R),o.add(v),t.add({minX:M.x-.12,minY:0,minZ:M.z-.12,maxX:M.x+.12,maxY:.9,maxZ:M.z+.12})}}function Ng(o,t){const n=new L({color:4080716,roughness:.9}),e=new L({color:1779744,roughness:.4,metalness:.7}),i=[{x1:-8.5,z1:-7.6,x2:-2.5,z2:-7.6,w:6,d:.35,cx:-5.5,cz:-7.6},{x1:2.5,z1:-7.6,x2:9.5,z2:-7.6,w:7,d:.35,cx:6,cz:-7.6},{x1:-8.5,z1:-20.6,x2:-8.5,z2:-7.6,w:.35,d:13,cx:-8.5,cz:-14.1},{x1:-8.5,z1:-36.5,x2:-8.5,z2:-23.4,w:.35,d:13.1,cx:-8.5,cz:-29.95},{x1:-8.5,z1:-36.5,x2:9.5,z2:-36.5,w:18,d:.35,cx:.5,cz:-36.5},{x1:9.5,z1:-36.5,x2:9.5,z2:-7.6,w:.35,d:28.9,cx:9.5,cz:-22.05}];for(const s of i){const r=new C(s.w,.35,s.d),a=new g(r,n);a.position.set(s.cx,.15+.175,s.cz),a.castShadow=!0,o.add(a);const l=.75,c=s.w>s.d,h=new C(s.w,.05,s.d),f=new g(h,e);f.position.set(s.cx,.15+.35+l,s.cz),o.add(f);const u=c?s.w:s.d,d=Math.floor(u/.45);for(let v=0;v<=d;v++){const w=d>0?v/d-.5:0,P=c?s.cx+w*u:s.cx,R=c?s.cz:s.cz+w*u,E=new g(new Z(.018,.018,l,6),e);E.position.set(P,.15+.35+l/2,R),o.add(E)}const m=c?s.cz<-20?.35:-.35:s.cx>0?-.35:.35,_=c?s.w-.2:.5,x=c?.5:s.d-.2,p=new C(_,.95,x),M=new g(p,ua);M.position.set(c?s.cx:s.cx+m,.15+.475,c?s.cz+m:s.cz),M.castShadow=!0,o.add(M),t.add({minX:s.cx-s.w/2-.1,minY:0,minZ:s.cz-s.d/2-.1,maxX:s.cx+s.w/2+.1,maxY:1.5,maxZ:s.cz+s.d/2+.1})}}function Cc(o,t,n,e,i){const s=new At;s.position.set(t,.15,n);const r=new Z(.08,.12,3.6,12),a=new L({color:1781026,roughness:.5,metalness:.6}),l=new g(r,a);l.position.set(0,1.8,0),l.castShadow=!0,s.add(l);const c=new g(new Z(.18,.24,.4,12),a);c.position.set(0,.2,0),s.add(c);const h=new g(new Z(.14,.07,.15,12),a);h.position.set(0,3.65,0),s.add(h);const f=new be(.24,16,16),u=new g(f,Bn);if(u.position.set(0,3.85,0),s.add(u),i)i.register({x:t,y:4,z:n,color:16772290,intensity:1.6,distance:13,decay:1.2,zone:"Park"});else{const d=new _e(16772290,1.6,13);d.position.set(0,3.85,0),s.add(d),e.push(d)}o.add(s)}function zg(o,t,n){const e=new At;e.position.set(o,.15,t);const i=new L({color:5922920,roughness:.9}),s=new g(new Z(.42,.48,.35,6),i);s.position.set(0,.175,0),s.castShadow=!0,e.add(s);const r=new g(new Z(.22,.25,.8,6),i);r.position.set(0,.75,0),e.add(r);const a=new g(new C(.55,.45,.55),i);a.position.set(0,1.35,0),e.add(a);let l=1.3,c=null;n?n.register({x:o,y:1.5,z:t,color:16754756,intensity:1.4,distance:6,decay:1.2,zone:"Park",dynamicIntensity:()=>l}):(c=new _e(16754756,1.4,6),c.position.set(0,1.35,0),e.add(c));const h=new g(new He(.75,.35,6),i);h.position.set(0,1.75,0),e.add(h);let f=0;return{group:e,update:d=>{f+=d,l=1.3+Math.sin(f*8.5)*.15+(Math.random()-.5)*.08,c&&(c.intensity=l)}}}function Fg(o,t,n,e,i,s){const r=new At;r.position.set(t,.15,n);const a=new L({color:4739160,roughness:.4,metalness:.7}),l=new g(new Z(.03,.03,1.6,8),a);l.position.set(-.55,.8,0);const c=new g(new Z(.03,.03,1.6,8),a);c.position.set(.55,.8,0),r.add(l,c);const h=new $t({map:ug()}),f=new Kt(1.35,.85),u=new g(f,h);u.position.set(0,1.1,.015);const d=new g(f,h);d.position.set(0,1.1,-.015),d.rotateY(Math.PI);const m=new g(new C(1.4,.9,.025),a);m.position.set(0,1.1,0),r.add(l,c,m,u,d),o.add(r),e.add({minX:t-.75,minY:0,minZ:n-.15,maxX:t+.75,maxY:1.6,maxZ:n+.15}),i.add({id:"park-rules-sign",x:t,z:n+.6,radius:1.8,prompt:"Read Park Regulations",onInteract:()=>{s.show("Park Rules: Please take your litter home, no fireworks or open flames, keep dogs on leash, and keep noise down at night.")}})}function Og(o,t,n,e,i,s){const r=new At;r.position.set(t,.15,n);const a=new L({color:4008216,roughness:.85}),l=new g(new C(.08,1.7,.08),a);l.position.set(-.75,.85,0);const c=new g(new C(.08,1.7,.08),a);c.position.set(.75,.85,0);const h=new $t({map:pg()}),f=new g(new Kt(1.5,.9),h);f.position.set(0,1.25,.02);const u=new g(new Kt(1.5,.9),Fe);u.position.set(0,1.25,.035);const d=new g(new C(1.56,.96,.05),a);d.position.set(0,1.25,-.01);const m=new g(new C(1.7,.04,.25),a);m.position.set(0,1.75,.05),m.rotateX(.2),r.add(l,c,d,f,u,m),o.add(r),e.add({minX:t-.85,minY:0,minZ:n-.2,maxX:t+.85,maxY:1.8,maxZ:n+.2}),i.add({id:"community-board",x:t,z:n+.7,radius:1.8,prompt:"Read Community Bulletin",onInteract:()=>{s.show('Sakura-cho Bulletin: Spring night festival next week, disaster evacuation meeting point, and a lost calico cat flyer: "Answers to Mike, wearing a red bell collar"!')}})}function kg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=new L({color:2044967,roughness:.5,metalness:.5}),r=new g(new Z(.22,.3,.6,8),s);r.position.set(0,.3,0),r.castShadow=!0;const a=new g(new Z(.12,.16,3.4,8),s);a.position.set(0,2,0),a.castShadow=!0;const l=new Z(.48,.48,.24,24);l.rotateX(Math.PI/2);const c=new g(l,s);c.position.set(0,3.8,0);const h=new $t({map:mg(),toneMapped:!1}),f=new Mn(.42,24),u=new g(f,h);u.position.set(0,3.8,.125);const d=new g(f,h);d.position.set(0,3.8,-.125),d.rotateY(Math.PI);const m=new g(new He(.08,.45,8),s);m.position.set(0,4.45,0),i.add(r,a,c,u,d,m),o.add(i),e.add({minX:t-.35,minY:0,minZ:n-.35,maxX:t+.35,maxY:4.5,maxZ:n+.35})}function Bg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=new L({color:14671576,roughness:.65,metalness:.05}),r=new L({color:2632754,roughness:.7,metalness:.3}),a=new L({color:8029069,roughness:.3,metalness:.7}),l=new g(new C(4.2,2.7,3.2),s);l.position.set(0,1.35,0),l.castShadow=!0,i.add(l);const c=new g(new C(4.6,.18,3.6),r);c.position.set(0,2.75,0),i.add(c);const h=new g(new C(.85,2.05,.04),a);h.position.set(-1.1,1.025,1.62);const f=new g(new C(.85,2.05,.04),a);f.position.set(1.1,1.025,1.62),i.add(h,f);const u=new $t({color:16769700,toneMapped:!1}),d=new g(new Kt(3.6,.32),u);d.position.set(0,2.35,1.62),i.add(d);const m=new $t({map:gg()}),_=new g(new Kt(.75,.36),m);_.position.set(0,1.9,1.62),i.add(_);const x=new g(new C(2.4,1.8,.12),s);x.position.set(0,.9,2.35),i.add(x),o.add(i),e.add({minX:t-2.2,minY:0,minZ:n-1.7,maxX:t+2.2,maxY:3,maxZ:n+1.7}),e.add({minX:t-1.3,minY:0,minZ:n+2.2,maxX:t+1.3,maxY:2,maxZ:n+2.5})}function Gg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=new L({color:1984032,roughness:.5,metalness:.5}),r=new g(new Z(.24,.22,.72,16),s);r.position.set(0,.36,0),r.castShadow=!0;const a=new g(new Ge(.24,.02,8,16),s);a.position.set(0,.72,0),a.rotateX(Math.PI/2),i.add(r,a),o.add(i),e.add({minX:t-.3,minY:0,minZ:n-.3,maxX:t+.3,maxY:.8,maxZ:n+.3})}function Hg(o,t,n,e,i,s,r){const a=new At;a.position.set(t,.15,n);const l=new L({color:4862494,roughness:.88,metalness:.02}),c=new C(.16,2.6,.16),h=1.6,f=1,u=[{px:-h,pz:-f},{px:h,pz:-f},{px:-h,pz:f},{px:h,pz:f}];for(const v of u){const w=new g(c,l);w.position.set(v.px,1.3,v.pz),w.castShadow=!0,a.add(w)}const d=new C(3.6,.18,.1),m=new g(d,l);m.position.set(0,2.65,-f);const _=new g(d,l);_.position.set(0,2.65,f),a.add(m,_);const x=new C(.08,.14,2.4);for(let v=-h+.3;v<=h-.3;v+=.5){const w=new g(x,l);w.position.set(v,2.78,0),a.add(w)}const p=new Dn(.42,1);for(let v=-h;v<=h;v+=.8){const w=new g(p,zo);w.position.set(v+(Math.random()-.5)*.3,2.9,(Math.random()-.5)*1.4),w.scale.set(1.4,.6,1.2),a.add(w)}const M=pa(0,0,0);a.add(M),o.add(a),e.add({minX:t-h-.15,minY:0,minZ:n-f-.15,maxX:t-h+.15,maxY:2.6,maxZ:n-f+.15}),e.add({minX:t+h-.15,minY:0,minZ:n-f-.15,maxX:t+h+.15,maxY:2.6,maxZ:n-f+.15}),e.add({minX:t-h-.15,minY:0,minZ:n+f-.15,maxX:t-h+.15,maxY:2.6,maxZ:n+f+.15}),e.add({minX:t+h-.15,minY:0,minZ:n+f-.15,maxX:t+h+.15,maxY:2.6,maxZ:n+f+.15}),e.add({minX:t-1.1,minY:0,minZ:n-.6,maxX:t+1.1,maxY:1.2,maxZ:n+.6}),i.add({id:"bench-pergola",x:t,z:n+.8,radius:1.8,prompt:()=>r.seated?"Stand up from Pergola":"Sit under Pergola",onInteract:()=>{r.seated=!r.seated,r.seated?s.show("You sit under the wisteria pergola. The climbing foliage filters the gentle streetlights above."):s.show("You stand back up.")}})}function pa(o,t,n){const e=new At;e.position.set(o,.15,t),e.rotateY(n);const i=new C(1.8,.08,.55),s=new g(i,jn);s.position.set(0,.44,0),s.castShadow=!0,e.add(s);const r=new C(1.8,.45,.08),a=new g(r,jn);a.position.set(0,.78,-.24),e.add(a);const l=new C(.08,.45,.5),c=new g(l,Pt);c.position.set(-.75,.22,0);const h=new g(l,Pt);return h.position.set(.75,.22,0),e.add(c,h),e}function Vg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=new L({color:5922920,roughness:.9}),r=new g(new Z(.65,.65,.08,18),s);r.position.set(0,.74,0),r.castShadow=!0;const a=new g(new Z(.18,.24,.7,12),s);a.position.set(0,.35,0),i.add(r,a);for(let l=0;l<3;l++){const c=l*Math.PI*2/3,h=Math.cos(c)*1.05,f=Math.sin(c)*1.05,u=new g(new Z(.24,.24,.08,12),s);u.position.set(h,.42,f);const d=new g(new Z(.1,.14,.4,10),s);d.position.set(h,.2,f),i.add(u,d)}o.add(i),e.add({minX:t-1.3,minY:0,minZ:n-1.3,maxX:t+1.3,maxY:.85,maxZ:n+1.3})}function Wg(o,t,n,e,i,s,r){const a=new At;a.position.set(t,.15,n);const l=new L({color:7238780,roughness:.82}),c=new g(new C(.5,.78,.5),l);c.position.set(0,.39,0),c.castShadow=!0;const h=new g(new Z(.18,.18,.08,14),Pt);h.position.set(0,.82,0);const f=new g(new Z(.015,.015,.09,8),Pt);f.position.set(0,.88,.06),f.rotateX(-.3);const u=new g(new Z(.018,.018,.12,8),Pt);u.position.set(.26,.38,0),u.rotateZ(Math.PI/2);const d=new L({color:3355443,roughness:.6,metalness:.8}),m=new g(new C(.75,.02,.75),d);m.position.set(0,.01,0),a.add(c,h,f,u,m),o.add(a),e.add({minX:t-.4,minY:0,minZ:n-.4,maxX:t+.4,maxY:1.2,maxZ:n+.4}),i.add({id:"park-fountain",x:t,z:n+.6,radius:1.6,prompt:"Drink Cold Park Water",onInteract:()=>{r==null||r.playFountainDrinkSound(),s.show("Cold, crisp water bubbles from the fountain nozzle. Very refreshing!")}})}function Xg(o,t,n,e,i,s,r,a){const l=new At;l.position.set(t,.15,n);const c=3.4,h=2.8,f=new Z(.06,.06,c+.4,12);f.rotateZ(Math.PI/2);const u=new g(f,Ia);u.position.set(0,h,0),u.castShadow=!0,l.add(u);const d=new Z(.05,.05,3,10);for(const p of[-1,1]){const M=c/2*p,v=new g(d,Qi);v.position.set(M,h/2,.5),v.rotateX(.32*p),v.castShadow=!0;const w=new g(d,Qi);w.position.set(M,h/2,-.5),w.rotateX(-.32*p),w.castShadow=!0;const P=new g(new Z(.03,.03,.85,8),Qi);P.position.set(M,1,0),P.rotateX(Math.PI/2),l.add(v,w,P)}const m=[];for(const p of[-.85,.85]){const M=new At;M.position.set(p,h-.05,0);const v=Pt,w=2.05;for(const R of[-.25,.25]){const E=new g(new Z(.012,.012,w,6),v);E.position.set(R,-w/2,0),M.add(E)}const P=new g(new C(.55,.05,.26),w1);P.position.set(0,-w,0),P.castShadow=!0,M.add(P),l.add(M),m.push(M)}o.add(l),e.add({minX:t-c/2-.25,minY:0,minZ:n-.9,maxX:t-c/2+.25,maxY:2.8,maxZ:n+.9}),e.add({minX:t+c/2-.25,minY:0,minZ:n-.9,maxX:t+c/2+.25,maxY:2.8,maxZ:n+.9}),i.add({id:"park-swing",x:t,z:n+.7,radius:2,prompt:()=>r.seated?"Stand up from Swing":"Sit on Park Swing",onInteract:()=>{r.seated=!r.seated,r.seated?(a==null||a.playSwingCreakSound(),s.show("You sit on the park swing. The chains creak softly as you sway under the midnight sky.")):s.show("You hop off the swing.")}});let _=0;return{update:p=>{_+=p,m[0].rotation.x=Math.sin(_*1.5)*.12,m[1].rotation.x=Math.sin(_*1.7+1.2)*.1}}}function Yg(o,t,n,e,i,s,r){const a=new At;a.position.set(t,.15,n);const l=new g(new Z(.24,.24,.05,12),Pt);l.position.set(0,.025,0),a.add(l);const c=new g(new Z(.08,.08,.42,12),M1);c.position.set(0,.25,0),a.add(c);const h=new At;h.position.set(0,.46,0);const f=new L({color:15790320,roughness:.6}),u=new L({color:1710618,roughness:.7}),d=new g(new C(.38,.36,.65),f);d.position.set(0,.18,0),d.castShadow=!0;const m=new g(new C(.32,.04,.34),u);m.position.set(0,.38,-.05);const _=new g(new be(.22,12,12),f);_.position.set(0,.35,.38);const x=new g(new be(.07,8,8),u);x.position.set(-.16,.52,.34);const p=new g(new be(.07,8,8),u);p.position.set(.16,.52,.34),p.position.set(.16,.52,.34);const M=new g(new Z(.018,.018,.44,8),So);M.position.set(0,.52,.28),M.rotateZ(Math.PI/2);const v=new g(new Z(.016,.016,.48,8),Pt);v.position.set(0,.08,.18),v.rotateZ(Math.PI/2),h.add(d,m,_,x,p,M,v),a.add(h),o.add(a),e.add({minX:t-.4,minY:0,minZ:n-.45,maxX:t+.4,maxY:1.1,maxZ:n+.45});let w=0;i.add({id:"spring-rocker",x:t,z:n+.5,radius:1.5,prompt:"Ride Panda Spring Rocker",onInteract:()=>{r==null||r.playSpringRockerSound(),w=2.5,s.show("You bounce on the little panda rocker! Boing boing!")}});let P=0;return{update:E=>{P+=E,w>0?(w-=E,h.rotation.x=Math.sin(P*16)*(w*.12),h.rotation.z=Math.cos(P*12)*(w*.05)):(h.rotation.x=Math.sin(P*2.2)*.02,h.rotation.z=0)}}}function Zg(o,t,n,e=Math.PI,i,s,r,a){const l=new At;l.position.set(t,.15,n),l.rotation.y=e;const c=2.1,h=new Z(.035,.035,2.3,8),f=new g(h,So);f.position.set(-.35,c/2,.4),f.rotateX(.25);const u=new g(h,So);u.position.set(.35,c/2,.4),u.rotateX(.25),l.add(f,u);for(let w=.35;w<c;w+=.35){const P=new g(new Z(.02,.02,.7,8),Ia);P.position.set(0,w,.4-w/c*.4),P.rotateZ(Math.PI/2),l.add(P)}const d=new g(new C(.8,.06,.8),So);d.position.set(0,c,0);const m=new g(new Ge(.4,.03,8,16,Math.PI),So);m.position.set(0,c+.4,0),l.add(d,m);const _=3.6,x=new C(.65,.06,_),p=new g(x,v1);p.position.set(0,c/2+.1,-_/2+.2),p.rotateX(-.52),p.castShadow=!0;const M=new g(new C(.05,.22,_),Qi);M.position.set(-.32,c/2+.2,-_/2+.2),M.rotateX(-.52);const v=new g(new C(.05,.22,_),Qi);if(v.position.set(.32,c/2+.2,-_/2+.2),v.rotateX(-.52),l.add(p,M,v),o.add(l),i&&(Math.abs(e-Math.PI)<.2?i.add({minX:t-.55,minY:0,minZ:n-.6,maxX:t+.55,maxY:2.4,maxZ:n+_-.2}):i.add({minX:t-.55,minY:0,minZ:n-_+.2,maxX:t+.55,maxY:2.4,maxZ:n+.6})),s&&r){const w=Math.abs(e-Math.PI)<.2?n+1.6:n-1.6;s.add({id:"playground-slide",x:t,z:w,radius:2.2,prompt:"Ride Playground Slide [すべり台]",onInteract:()=>{a&&a.playSlideSound(),r.show("You climb the ladder to the red platform and whoosh down the stainless steel slide into the park grass! Wheee!")}})}}function qg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=2.4,r=new g(new C(s,.24,.16),Sr),a=r.clone();a.position.set(0,.12,-s/2);const l=r.clone();l.position.set(0,.12,s/2);const c=new g(new C(.16,.24,s),Sr);c.position.set(-s/2,.12,0);const h=new g(new C(.16,.24,s),Sr);h.position.set(s/2,.12,0);const f=new g(new C(s-.1,.18,s-.1),y1);f.position.set(0,.09,0),f.receiveShadow=!0;const u=new g(new Z(.1,.07,.14,12),Ia);u.position.set(.4,.24,.3);const d=new g(new C(.06,.015,.22),Qi);d.position.set(.55,.19,.35),d.rotateY(.4),i.add(a,l,c,h,f,u,d),o.add(i),e.add({minX:t-s/2,minY:0,minZ:n-s/2,maxX:t+s/2,maxY:.3,maxZ:n+s/2})}function Pc(o,t,n=1){const e=new At;e.position.set(o,.15,t),e.scale.set(n,n,n);const i=new Z(.32,.45,3.4,8),s=new g(i,jn);s.position.set(0,1.7,0),s.castShadow=!0,e.add(s);const r=new Z(.18,.24,2.2,6);r.rotateZ(.55);const a=new g(r,jn);a.position.set(.7,3.2,0),e.add(a);const l=new Z(.18,.24,2.2,6);l.rotateZ(-.55);const c=new g(l,jn);c.position.set(-.7,3.2,0),e.add(c);const h=[{x:0,y:4.8,z:0,r:2.4},{x:1.8,y:4.2,z:.6,r:1.8},{x:-1.8,y:4.2,z:-.6,r:1.8},{x:.8,y:4,z:-1.6,r:1.7},{x:-.8,y:4,z:1.6,r:1.7},{x:0,y:5.6,z:0,r:1.5}];for(const f of h){const u=new Dn(f.r,1),d=new g(u,La);d.position.set(f.x,f.y,f.z),d.castShadow=!0,e.add(d)}return e}function $g(o,t){const n=new At;n.position.set(o,.15,t);const e=new g(new Z(.28,.38,2,8),jn);e.position.set(0,1,0),e.rotateZ(-.15),e.castShadow=!0;const i=new g(new Z(.18,.28,1.8,8),jn);i.position.set(.25,2.6,.1),i.rotateZ(.22),i.castShadow=!0,n.add(e,i);const s=[{x:.6,y:2.8,z:.3,sx:1.6,sy:.45,sz:1.3},{x:-.8,y:3.3,z:-.2,sx:1.8,sy:.48,sz:1.4},{x:.4,y:3.9,z:.1,sx:1.5,sy:.45,sz:1.3},{x:0,y:4.5,z:0,sx:1.3,sy:.42,sz:1.1}];for(const r of s){const a=new Dn(1,1),l=new g(a,g1);l.position.set(r.x,r.y,r.z),l.scale.set(r.sx,r.sy,r.sz),l.castShadow=!0,n.add(l)}return n}function Ic(o,t,n=1){const e=new At;e.position.set(o,.15,t),e.scale.set(n,n,n);const i=new Z(.28,.38,3.2,8),s=new g(i,jn);s.position.set(0,1.6,0),s.castShadow=!0,e.add(s);const r=[{x:0,y:4.5,z:0,r:2},{x:1.4,y:3.8,z:.5,r:1.5},{x:-1.4,y:3.8,z:-.5,r:1.5},{x:0,y:5.2,z:0,r:1.2}];for(const a of r){const l=new Dn(a.r,1),c=new g(l,zo);c.position.set(a.x,a.y,a.z),c.castShadow=!0,e.add(c)}return e}function Kg(o,t){const n=new At;n.position.set(o,.15,t);const e=new g(new Z(.18,.24,2,8),jn);e.position.set(0,1,0),n.add(e);const i=new g(new He(1.1,2.5,8),ua);i.position.set(0,2.8,0);const s=new g(new He(.85,2.2,8),ua);return s.position.set(0,4.2,0),n.add(i,s),n}function Lc(o,t,n,e,i,s,r){const a=new At;a.position.set(t,.15,n);const l=new L({color:5922920,roughness:.9}),c=new g(new C(e,.22,i),l);c.position.set(0,.11,0),a.add(c);const h=new L({color:2234898,roughness:.95}),f=new g(new C(e-.2,.24,i-.2),h);f.position.set(0,.12,0),a.add(f);const u=Math.max(3,Math.floor(e*i*1.5));for(let d=0;d<u;d++){const m=(Math.random()-.5)*(e-.4),_=(Math.random()-.5)*(i-.4),x=.28+Math.random()*.15,p=new g(new be(x,8,8),zo);p.position.set(m,.24+x*.6,_),a.add(p);const M=s==="azalea"?Math.random()>.4?x1:Mc:Math.random()>.4?_1:Mc,v=new g(new Dn(x*.65,0),M);v.position.set(m,.28+x*.9,_),a.add(v)}o.add(a),r.add({minX:t-e/2,minY:0,minZ:n-i/2,maxX:t+e/2,maxY:.6,maxZ:n+i/2})}function Dc(o,t,n,e,i){const s=new Kt(.12,.08);s.rotateX(-Math.PI/2);for(let r=0;r<i;r++){const a=Math.sqrt(Math.random())*e,l=Math.random()*Math.PI*2,c=t+Math.cos(l)*a,h=n+Math.sin(l)*a,f=new g(s,La);f.position.set(c,.158,h),f.rotateY(Math.random()*Math.PI),o.add(f)}}function Jg(o,t){const n=new At;n.position.set(o,.15,t);const e=38,i=[],s=new Kt(.08,.05);for(let l=0;l<e;l++){const c=new g(s,La),h=(Math.random()-.5)*9,f=(Math.random()-.5)*9,u=.5+Math.random()*4.8;c.position.set(h,u,f),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),n.add(c),i.push({mesh:c,x0:h,z0:f,speed:.28+Math.random()*.35,phase:Math.random()*Math.PI*2})}let r=0;return{group:n,update:l=>{r+=l;for(const c of i)c.mesh.position.y-=l*c.speed,c.mesh.position.x=c.x0+Math.sin(r*1.5+c.phase)*.4,c.mesh.position.z=c.z0+Math.cos(r*1.2+c.phase)*.4,c.mesh.rotation.z+=l*1.2,c.mesh.rotation.y+=l*.8,c.mesh.position.y<.1&&(c.mesh.position.y=4.8+Math.random()*.5)}}}function If(o,t,n,e=2046808,i="bike",s,r,a){const l=new At;l.position.set(o,.15,t),l.rotateY(n),l.rotateZ(-.06);const c=new L({color:1579036,roughness:.9}),h=new L({color:e,roughness:.35,metalness:.4}),f=new L({color:2365458,roughness:.5}),u=new L({color:1315860,roughness:.85}),d=new L({color:13938487,roughness:.2,metalness:.85}),m=new $t({color:14489624}),_=new $t({color:16096779}),x=.32,p=[{x:.55,isFront:!0},{x:-.55,isFront:!1}];for(const z of p){const B=new At;B.position.set(z.x,x,0);const it=new g(new Ge(x,.024,8,24),c);B.add(it);const dt=new g(new Ge(x-.02,.012,6,24),Pt);B.add(dt);const Rt=new g(new Z(.022,.022,.07,8),Pt);Rt.rotateX(Math.PI/2),B.add(Rt);for(let zt=0;zt<4;zt++){const jt=new g(new Z(.003,.003,(x-.02)*2,4),Pt);jt.rotateZ(zt*Math.PI/4),B.add(jt)}const Ut=new Ge(x+.022,.016,6,18,Math.PI*(z.isFront?.72:.85)),Vt=new g(Ut,h);if(Vt.rotateZ(z.isFront?-Math.PI*.58:-Math.PI*.42),B.add(Vt),!z.isFront){const zt=new g(new Z(.012,.012,.01,8),m);zt.position.set(-x-.015,-.05,0),zt.rotateZ(Math.PI/2),B.add(zt)}l.add(B)}const M=new g(new Z(.025,.025,.08,8),h);M.rotateX(Math.PI/2),M.position.set(-.06,.28,0),l.add(M);const v=new g(new Z(.02,.02,.2,8),h);v.position.set(.42,.7,0),v.rotateZ(-.28),l.add(v);for(const z of[-.018,.018]){const B=new g(new Z(.014,.014,.65,8),h);B.position.set(.18,.46,z),B.rotateZ(.72),l.add(B)}const w=new g(new Z(.016,.016,.46,8),h);w.position.set(-.16,.48,0),w.rotateZ(-.25),l.add(w);for(const z of[-.038,.038]){const B=new g(new Z(.011,.009,.45,8),Pt);B.position.set(.48,.51,z),B.rotateZ(-.28),l.add(B)}for(const z of[-.038,.038]){const B=new g(new Z(.01,.01,.52,6),h);B.position.set(-.31,.3,z),B.rotateZ(-.09),l.add(B)}for(const z of[-.038,.038]){const B=new g(new Z(.01,.01,.55,6),h);B.position.set(-.38,.52,z),B.rotateZ(.78),l.add(B)}const P=new g(new Z(.013,.013,.22,8),Pt);P.position.set(.44,.82,0),l.add(P);const R=new g(new Ge(.24,.011,6,16,Math.PI*.8),Pt);R.rotateX(Math.PI/2),R.rotateZ(Math.PI*.6),R.position.set(.4,.92,0),l.add(R);for(const z of[-.22,.22]){const B=new g(new Z(.016,.016,.09,8),u);B.position.set(.29,.91,z),B.rotateZ(Math.PI/6),l.add(B)}const E=new g(new be(.024,10,6,0,Math.PI*2,0,Math.PI/2),d);E.position.set(.35,.94,-.16);const I=new g(new C(.015,.005,.012),Pt);I.position.set(.33,.94,-.18),l.add(E,I);const S=.32,y=.22,D=.2,G=.58,V=.76,J=new g(new C(y,.016,S),Pt);J.position.set(G,V+D/2,0);const $=new g(new C(y-.02,.012,S-.02),Pt);$.position.set(G,V-D/2,0),l.add(J,$);for(const z of[-y/2+.01,y/2-.01])for(const B of[-S/2+.01,S/2-.01]){const it=new g(new Z(.005,.005,D,4),Pt);it.position.set(G+z,V,B),l.add(it)}const X=new g(new C(y*.75,D*.65,S*.75),new L({color:16120058,roughness:.8}));X.position.set(G,V-.02,0),l.add(X);const Q=new g(new Z(.024,.018,.06,10),Pt);Q.rotateZ(-Math.PI/2),Q.position.set(.66,.62,0);const Y=new g(new Mn(.022,10),Bn);Y.rotateY(Math.PI/2),Y.position.set(.691,.62,0),l.add(Q,Y);const at=new g(new Z(.013,.013,.16,8),Pt);at.position.set(-.19,.73,0),at.rotateZ(-.25);const ct=new g(new C(.24,.055,.17),f);ct.position.set(-.2,.81,0);for(const z of[-.045,.045]){const B=new g(new Z(.016,.016,.04,8),Pt);B.position.set(-.26,.77,z),l.add(B)}l.add(at,ct);const ht=new g(new C(.44,.02,.14),Pt);ht.position.set(-.5,.73,0),l.add(ht);for(const z of[-.05,.05]){const B=new g(new Z(.007,.007,.44,4),Pt);B.position.set(-.52,.52,z),B.rotateZ(.2),l.add(B)}const wt=new g(new C(.48,.11,.03),h);wt.position.set(-.28,.28,.04),l.add(wt);for(const z of[-1,1]){const B=new g(new Z(.008,.008,.14,6),Pt);B.position.set(-.06,.28+z*.06,z*.07);const it=new g(new C(.08,.02,.06),u);it.position.set(-.06,.28+z*.12,z*.1);const dt=new g(new C(.06,.01,.01),_);dt.position.set(-.06,.28+z*.12,z*.13),l.add(B,it,dt)}const vt=new g(new Z(.008,.008,.32,6),Pt);vt.position.set(-.46,.16,-.1),vt.rotateX(.38),l.add(vt);const H=new g(new Z(.017,.017,.03,8),_);return H.position.set(-.16,.52,0),l.add(H),s&&s.add({id:`${i}-bell`,x:o,z:t,radius:1.8,prompt:"Ring Bicycle Bell",onInteract:()=>{a==null||a.playBikeBellSound(),r==null||r.show("*Riing-riing!* Japanese city commuter bicycle (Mamachari) with front grocery basket.")}}),l}function jg(o,t,n){const e=new At;if(e.position.set(o,.15,t),n==="bonsai"){const i=new L({color:2047064,roughness:.35,metalness:.15}),s=new g(new Z(.24,.2,.08,14),i);s.position.set(0,.04,0),s.scale.set(1.3,1,.9);const r=new L({color:2243869,roughness:.9}),a=new g(new Z(.22,.18,.04,12),r);a.position.set(0,.08,0),a.scale.set(1.25,1,.85),e.add(s,a);const l=new L({color:4007448,roughness:.9}),c=new g(new Z(.025,.04,.22,7),l);c.position.set(0,.18,0),c.rotation.z=-.18;const h=new g(new Z(.018,.025,.2,6),l);h.position.set(.04,.34,0),h.rotation.z=.28,e.add(c,h);const f=new L({color:1325858,roughness:.85});[{x:-.12,y:.28,z:.02,rx:.14,rz:.06},{x:.14,y:.38,z:-.04,rx:.16,rz:.07},{x:.02,y:.48,z:.02,rx:.2,rz:.08}].forEach(d=>{const m=new g(new Z(d.rx,d.rx*.9,d.rz,10),f);m.position.set(d.x,d.y,d.z),e.add(m)})}else if(n==="hydrangea"){const i=new L({color:9063219,roughness:.8}),s=new g(new Z(.22,.16,.38,12),i);s.position.set(0,.19,0),e.add(s);const r=new L({color:2055211,roughness:.7});for(let c=0;c<5;c++){const h=c*Math.PI*2/5,f=new g(new be(.14,6,6),r);f.scale.set(1.4,.3,.8),f.position.set(Math.cos(h)*.18,.38,Math.sin(h)*.18),f.rotation.y=-h,f.rotation.z=.35,e.add(f)}const a=[8162552,10980346,6333946];[{x:-.08,y:.52,z:.06,c:a[0]},{x:.09,y:.54,z:-.05,c:a[1]},{x:0,y:.62,z:0,c:a[2]}].forEach(c=>{const h=new L({color:c.c,roughness:.85}),f=new g(new Dn(.14,1),h);f.position.set(c.x,c.y,c.z),e.add(f)})}else if(n==="trough"){const i=new L({color:4862498,roughness:.85}),s=new g(new C(.65,.22,.25),i);s.position.set(0,.11,0),e.add(s);const r=new g(new C(.61,.04,.21),new L({color:2234384}));r.position.set(0,.21,0),e.add(r);const a=[16436245,16007006,16777215,11032055,16347926];for(let l=-.24;l<=.25;l+=.12){const c=a[Math.floor(Math.random()*a.length)],h=new g(new Dn(.06,1),new L({color:c}));h.position.set(l,.27,(Math.random()-.5)*.1),e.add(h)}}else if(n==="tall"){const i=new L({color:7226156,roughness:.8}),s=new g(new Z(.18,.14,.42,10),i);s.position.set(0,.21,0),e.add(s);const r=new L({color:4028990,roughness:.5});for(const a of[-.06,.05]){const l=new g(new Z(.015,.018,.9,6),r);l.position.set(a,.65,a*2*.03);const c=new g(new He(.16,.45,6),zo);c.position.set(a,1.05,0),e.add(l,c)}}else{const i=new L({color:8146486,roughness:.85}),s=new g(new Z(.2,.15,.35,10),i);s.position.set(0,.175,0);const r=new g(new Dn(.28,1),zo);r.position.set(0,.45,0),e.add(s,r)}return e}function Qg(o,t){const n=new At;n.position.set(o,.15,t);const e=new L({color:1409085,roughness:.5}),i=new g(new Z(.09,.1,.18,10),e);i.position.set(0,.09,0);const s=new Ge(.08,.012,6,12,Math.PI),r=new g(s,e);r.position.set(0,.2,0),r.rotation.z=Math.PI/2;const a=new Z(.01,.015,.22,6);a.rotateZ(-Math.PI/3);const l=new g(a,e);l.position.set(.12,.16,0);const c=new g(new Z(.025,.015,.025,8),e);c.position.set(.21,.24,0),c.rotation.z=-Math.PI/3,n.add(i,r,l,c);const h=new L({color:366185,roughness:.6}),f=new g(new Z(.16,.16,.12,12),h);f.rotation.x=Math.PI/2,f.position.set(-.35,.55,.28);const u=new L({color:1467700,roughness:.4}),d=new g(new Ge(.14,.025,6,16),u);d.position.set(-.35,.55,.28);const m=new L({color:14251782,metalness:.8,roughness:.3}),_=new g(new Z(.012,.012,.14,6),m);return _.position.set(-.24,.42,.28),n.add(f,d,_),n}function tx(o,t,n,e,i){const s=new At;s.position.set(o,t,n),s.rotateY(e);const r=1.48,a=3.35,l=1.62,c=new C(r,.75,a),h=new g(c,Sc);h.position.set(0,.55,0),h.castShadow=!0,s.add(h);const f=new C(r-.08,.72,a*.72),u=new g(f,Sc);u.position.set(0,1.25,-.15),s.add(u);const d=new C(r-.04,.62,.06);d.rotateX(.2);const m=new g(d,bc);m.position.set(0,1.22,a*.72/2-.12),s.add(m);const _=new C(r-.04,.58,.06),x=new g(_,bc);x.position.set(0,1.25,-a*.72/2-.16),s.add(x);const p=new Z(.26,.26,.18,12);p.rotateZ(Math.PI/2);const M=new L({color:1776411,roughness:.9});for(const J of[-r/2,r/2])for(const $ of[-a*.32,a*.32]){const X=new g(p,M);X.position.set(J,.26,$),s.add(X)}const v=new C(.25,.18,.06),w=new $t({color:16775912}),P=new g(v,w);P.position.set(-r/2+.24,.65,a/2+.01);const R=new g(v,w);R.position.set(r/2-.24,.65,a/2+.01),s.add(P,R);const E=new C(.2,.24,.06),I=new $t({color:14489624}),S=new g(E,I);S.position.set(-r/2+.2,.75,-a/2-.01);const y=new g(E,I);y.position.set(r/2-.2,.75,-a/2-.01),s.add(S,y);const D=new C(.35,.18,.02),G=new g(D,ro);G.position.set(0,.38,a/2+.02);const V=new g(D,ro);return V.position.set(0,.42,-a/2-.02),s.add(G,V),i.add({minX:o-a/2-.1,minY:t,minZ:n-r/2-.1,maxX:o+a/2+.1,maxY:t+l,maxZ:n+r/2+.1}),s}function Uc(o,t,n,e){const i=new At;i.position.set(o,.15,t),i.rotateY(n);const s=3.4,r=new g(new Z(.06,.06,s,10),Le);r.position.set(0,s/2,0),i.add(r);const a=new Z(.48,.52,.12,24);a.rotateX(Math.PI/2);const l=new g(a,b1);l.position.set(.35,s-.2,0),i.add(l);const c=new be(.44,24,12,0,Math.PI*2,0,Math.PI/3);c.rotateX(Math.PI/2);const h=new g(c,T1);return h.position.set(.35,s-.2,.04),i.add(h),e.add({minX:o-.25,minY:0,minZ:t-.25,maxX:o+.25,maxY:3.8,maxZ:t+.25}),i}function ex(o,t){const n=new At;n.position.set(o,.15,t);const e=new Kt(.72,.72),i=new $t({map:cg(),toneMapped:!1}),s=new g(e,i);s.position.set(0,1.4,.65),s.rotation.y=Math.PI,n.add(s);const r=new g(new C(.76,.76,.02),Pt);r.position.set(0,1.4,.66),n.add(r);const a=new L({color:15381256,roughness:.6}),l=new g(new C(.55,.32,.38),a);l.position.set(-.38,.16,.15),n.add(l);const c=[7877903,417606,1332013,9584654];for(let E=-.2;E<=.2;E+=.1){const I=c[Math.floor(Math.random()*c.length)],S=new L({color:I,roughness:.1,metalness:.1,transparent:!0,opacity:.85}),y=new g(new Z(.03,.03,.22,8),S);y.position.set(-.38+E,.22,.15+(Math.random()-.5)*.1),n.add(y)}const h=new L({color:2450411,roughness:.6}),f=new g(new C(.55,.32,.38),h);f.position.set(.28,.16,.15),n.add(f);const u=[14251782,14427686,2450411,366185];for(let E=-.18;E<=.18;E+=.09){const I=u[Math.floor(Math.random()*u.length)],S=new g(new Z(.028,.028,.14,8),new L({color:I,metalness:.6,roughness:.3}));S.position.set(.28+E,.18,.15+(Math.random()-.5)*.1),n.add(S)}const d=new L({color:16710083,roughness:.5,metalness:.05,transparent:!0,opacity:.85});[{x:-.25,y:.24,z:-.22,s:.24},{x:.22,y:.26,z:-.2,s:.26},{x:0,y:.22,z:-.28,s:.22}].forEach(E=>{const I=new At;I.position.set(E.x,E.y,E.z);const S=new g(new Dn(E.s,1),d);S.scale.set(1.1,.9,1.05);const y=new g(new He(.045,.09,6),d);y.position.set(0,E.s*.9,0),I.add(S,y),n.add(I)});const _=new L({map:hg(),roughness:.8,transparent:!0,opacity:.85,side:nn}),x=new be(.78,16,12,0,Math.PI*2,0,Math.PI*.55);x.scale(1.3,.75,1.05);const p=new g(x,_);p.position.set(-.04,.08,-.04),n.add(p);const M=new L({color:413243,roughness:.9}),v=new g(new Ge(.85,.022,6,24),M);v.rotation.x=Math.PI/2,v.scale.set(1.3,1.05,1),v.position.set(-.04,.02,-.04),n.add(v);const w=new At;w.position.set(.85,0,.45),w.rotation.z=-.15;const P=new g(new Z(.012,.012,1.35,6),new L({color:10576391,roughness:.8}));P.position.set(0,.7,0);const R=new g(new He(.08,.35,8),new L({color:7877903,roughness:.9}));return R.position.set(0,.18,0),w.add(P,R),n.add(w),n}function Lf(o,t,n,e,i){const s=new At;s.position.set(o,.15,t);const r=.46,a=.95,l=.4,c=new L({map:fg(),roughness:.4,metalness:.2}),h=new g(new C(r,a,l),c);h.position.set(0,a/2,0),s.add(h);const f=new L({color:1516884,roughness:.4}),u=new g(new C(r+.03,.06,l+.03),f);u.position.set(0,a+.03,0),s.add(u);const d=new L({color:132631,roughness:.8});for(const m of[-.12,.12]){const _=new g(new Z(.05,.05,.02,12),d);_.position.set(m,a+.065,0),s.add(_)}return n.add({id:"alley-can-recycle",x:o,z:t,radius:1.8,prompt:"Recycle Can / Bottle [空き缶・ボトル回収]",onInteract:()=>{i&&i.playDeskBellSound(),e.show("空き缶・ペットボトル回収BOX: You recycle an empty canned drink with a satisfying *Clatter-clink!*")}}),s}function nx(o,t,n,e){const i=new At;i.position.set(o,3.1,t);const s=new g(new Z(.012,.012,.45,6),Le);s.rotation.x=Math.PI/2,s.position.set(0,0,-.22),i.add(s);const r=new L({color:1259559,roughness:.35}),a=new g(new He(.24,.12,12,1,!0),r);a.position.set(0,-.06,0),i.add(a);const l=new g(new be(.045,8,8),Bn);if(l.position.set(0,-.09,0),i.add(l),e)e.register({x:o,y:2.95,z:t,color:16753988,intensity:2.2,distance:8.5,decay:1.2,zone:"Street"});else{const c=new _e(16753988,2.2,8.5,1.2);c.position.set(0,-.15,0),i.add(c),n.push(c)}return i}function ix(o,t,n,e){const i=[{x:13.8,z:3.8},{x:18.2,z:-3.8}];for(const s of i){const r=new At;r.position.set(s.x,.15,s.z);const a=new g(new Z(.06,.06,3.2,8),Le);a.position.set(0,1.6,0),r.add(a);const l=new g(new C(.2,.28,.14),ro);l.position.set(0,1.25,.08),r.add(l);const c=new g(new Z(.04,.04,.03,10),Pt);c.rotateX(Math.PI/2),c.position.set(0,1.25,.16),r.add(c);const h=new g(new C(.32,.65,.22),Le);h.position.set(0,2.8,0),r.add(h);const f=new g(new Mn(.1,12),new $t({color:4521898}));f.position.set(0,2.65,.12),r.add(f),o.add(r),t.add({minX:s.x-.2,minY:0,minZ:s.z-.2,maxX:s.x+.2,maxY:3.5,maxZ:s.z+.2}),n.add({id:`signal-${s.x}`,x:s.x,z:s.z+.4,radius:1.6,prompt:"Push Pedestrian Crossing Button [押ボタン式]",onInteract:()=>{e.show('*Beep-Boop* "Omachi kudasai" (Please wait). Signal chime activates: *Piyo-piyo*')}})}}function ox(o,t,n,e,i){const l=new At;l.position.set(6,.15,21.2);const c=new At,h=.52,f=.2,u=.4,d=.015,m=new L({map:lg(),roughness:.88}),_=new L({color:13147500,roughness:.9}),x=new g(new C(h,d,u),m);x.position.set(0,d/2,0),c.add(x);const p=new g(new C(h,f,d),m);p.position.set(0,f/2,u/2-d/2);const M=new g(new C(h,f,d),m);M.position.set(0,f/2,-u/2+d/2);const v=new g(new C(d,f,u-d*2),m);v.position.set(-h/2+d/2,f/2,0);const w=new g(new C(d,f,u-d*2),m);w.position.set(h/2-d/2,f/2,0),c.add(p,M,v,w);const P=.08,R=new g(new C(h,d,P),_);R.position.set(0,f+.01,u/2+P*.4),R.rotation.x=.45;const E=new g(new C(h,d,P),_);E.position.set(0,f+.01,-u/2-P*.4),E.rotation.x=-.45;const I=new g(new C(P,d,u),_);I.position.set(-h/2-P*.4,f+.01,0),I.rotation.z=-.45;const S=new g(new C(P,d,u),_);S.position.set(h/2+P*.4,f+.01,0),S.rotation.z=.45,c.add(R,E,I,S);const y=new L({color:16643810,roughness:.95}),D=new g(new C(h-.06,.08,u-.06),y);D.position.set(0,.05,0),c.add(D),l.add(c);const G=new L({color:16317180,roughness:.25}),V=new g(new Z(.1,.08,.035,16),G);V.position.set(-.42,.018,.06);const J=new L({color:7160611,roughness:.9}),$=new g(new Z(.085,.085,.02,12),J);$.position.set(-.42,.032,.06),l.add(V,$);const X=new L({color:14742270,roughness:.25}),Q=new g(new Z(.09,.07,.045,16),X);Q.position.set(-.42,.0225,-.16);const Y=new g(new Mn(.08,16),new L({color:3718648,roughness:.1,metalness:.4,transparent:!0,opacity:.85}));Y.rotation.x=-Math.PI/2,Y.position.set(-.42,.04,-.16),l.add(Q,Y);const at=new L({color:13935475,roughness:.9}),ct=new g(new C(.12,.035,.32),at);ct.position.set(.38,.018,0),l.add(ct);const ht=new At;ht.position.set(0,.08,0);const wt=new L({color:1579035,roughness:.82}),vt=new L({color:16317180,roughness:.85}),H=new L({color:16020150,roughness:.5}),z=new g(new be(.14,16,12),wt);z.scale.set(.95,.76,1.25),z.position.set(0,.1,-.02),ht.add(z);const B=new g(new be(.09,12,8),vt);B.scale.set(.72,.72,.35),B.position.set(0,.11,.11),ht.add(B);const it=new be(.038,10,8);it.scale(.85,.55,1.25);const dt=new g(it,vt);dt.position.set(-.065,.03,.12);const Rt=new g(it,vt);Rt.position.set(.065,.03,.12),ht.add(dt,Rt);const Ut=new be(.007,6,6);Ut.scale(1,.6,1);for(const Yt of[-.065,.065])for(let Zt=-1;Zt<=1;Zt++){const T=new g(Ut,H);T.position.set(Yt+Zt*.012,.032,.16),ht.add(T)}const Vt=new L({color:14427686,roughness:.4}),zt=new g(new Ge(.08,.011,6,16),Vt);zt.position.set(0,.17,.09),zt.rotation.x=.35,ht.add(zt);const jt=new L({color:16436245,metalness:.85,roughness:.2}),U=new g(new be(.02,10,10),jt);U.position.set(0,.14,.16),ht.add(U);const Wt=new At;Wt.position.set(0,.22,.1);const It=new g(new be(.115,16,14),wt);It.scale.set(1.05,.95,.98),Wt.add(It);const Ft=new be(.036,10,8),Tt=new g(Ft,vt);Tt.position.set(-.032,-.026,.092);const Xt=new g(Ft,vt);Xt.position.set(.032,-.026,.092),Wt.add(Tt,Xt);const St=new He(.013,.014,3);St.rotateZ(Math.PI);const A=new g(St,H);A.position.set(0,-.014,.118),Wt.add(A);const b=new $t({color:16777215}),W=new Z(.0015,.0015,.11,4);W.rotateZ(Math.PI/2);for(const Yt of[-1,1])for(let Zt=-1;Zt<=1;Zt++){const T=new g(W,b);T.position.set(Yt*.075,-.024+Zt*.009,.095),T.rotation.z=Yt*(.15+Zt*.18),T.rotation.y=Yt*.35,Wt.add(T)}const nt=new At;nt.position.set(-.065,.085,.01);const ot=new At;ot.position.set(.065,.085,.01);const et=wt,xt=new L({color:16361684,roughness:.65}),mt=new He(.038,.078,4),ft=new He(.026,.056,4),Lt=new g(mt,et);Lt.rotation.y=Math.PI/4;const lt=new g(ft,xt);lt.rotation.y=Math.PI/4,lt.position.set(0,-.004,.008),nt.add(Lt,lt);const bt=new g(mt,et);bt.rotation.y=-Math.PI/4;const Ht=new g(ft,xt);Ht.rotation.y=-Math.PI/4,Ht.position.set(0,-.004,.008),ot.add(bt,Ht),Wt.add(nt,ot);const Jt=new L({color:1096065,roughness:.2,emissive:366185,emissiveIntensity:.45}),Dt=new $t({color:0}),oe=new $t({color:16777215}),Qt=[];for(const Yt of[-.044,.044]){const Zt=new At;Zt.position.set(Yt,.016,.098);const T=new g(new be(.024,12,10),Jt);Zt.add(T);const O=new g(new C(.007,.032,.005),Dt);O.position.set(0,0,.022),Zt.add(O);const q=new g(new be(.005,6,6),oe);q.position.set(-.007,.008,.023);const K=new g(new be(.0028,6,6),oe);K.position.set(.005,-.006,.023),Zt.add(q,K);const k=new be(.026,10,8,0,Math.PI*2,0,Math.PI*.52),ut=new g(k,wt);ut.rotation.x=Math.PI/2,ut.position.set(0,.004,0),ut.scale.set(1.02,.01,1.02),Zt.add(ut),Qt.push(ut),Wt.add(Zt)}ht.add(Wt);const pe=new At;pe.position.set(0,.12,-.16);const F=wt,yt=new Z(.022,.026,.11,8);yt.translate(0,.055,0);const tt=new g(yt,F);tt.rotation.x=-.7,pe.add(tt);const st=new At;st.position.set(0,.09,-.065);const gt=new Z(.018,.022,.11,8);gt.translate(0,.055,0);const pt=new g(gt,F);pt.rotation.x=.5,st.add(pt);const Gt=new At;Gt.position.set(0,.09,.055);const se=new Z(.012,.018,.1,8);se.translate(0,.05,0);const Ee=new g(se,vt);Ee.rotation.x=.8,Gt.add(Ee),st.add(Gt),pe.add(st),ht.add(pe),l.add(ht);const re=new Sf;re.moveTo(.025,.025),re.bezierCurveTo(.025,.025,.02,0,0,0),re.bezierCurveTo(-.03,0,-.03,.035,-.03,.035),re.bezierCurveTo(-.03,.055,-.01,.077,.025,.1),re.bezierCurveTo(.06,.077,.08,.055,.08,.035),re.bezierCurveTo(.08,.035,.08,0,.05,0),re.bezierCurveTo(.035,0,.025,.025,.025,.025);const De=new Ca(re);De.scale(.8,-.8,.8);const ze=new $t({color:16007006,side:nn,transparent:!0,opacity:0}),Oe=[];for(let Yt=0;Yt<3;Yt++){const Zt=new g(De,ze.clone());Zt.visible=!1,l.add(Zt),Oe.push({mesh:Zt,vy:.35+Yt*.08,life:0,maxLife:1.6,baseX:(Yt-1)*.12,baseZ:Yt%2===0?.08:-.08})}const Ae=()=>{Oe.forEach((Yt,Zt)=>{Yt.life=Yt.maxLife,Yt.mesh.visible=!0,Yt.mesh.position.set(Yt.baseX,.38+Zt*.05,Yt.baseZ);const T=Yt.mesh.material;T.opacity=1})};o.add(l);let ge=0,Ne=0;const fe=['Kuro-chan (クロちゃん) leans gently into your hand, closes its emerald eyes, and lets out a warm, rumbling purr: "Nyaaa~~ ฅ(≈>ܫ<≈)ฅ"','You scratch Kuro-chan under its chin! The tiny brass bell tinkles softly as it purrs: "*Purrrrrr... Purrrrrr...*"','Kuro-chan rolls slightly onto its side on the warm fleece blanket, happily kneading its little white paws: "Mew! <3"','Kuro-chan nudges its nose against your fingers, completely relaxed in its Ehime Mikan box: "Purr-purr... Nyaa~"'];t.add({id:"stray-cat",x:6,z:21.2,radius:2,prompt:"Pet Kuro-chan the Alley Kitten [クロちゃんを撫でる]",onInteract:()=>{Ne=2.4,Ae(),i&&(i.playCatMeow(),setTimeout(()=>{i&&i.playCatPurr()},320));const Yt=fe[ge%fe.length];ge++,n.show(Yt)}});let te=0,je=2.5,Ve=!1,Ze=0,dn=4,ve=0;return{update:Yt=>{if(te+=Yt,z.scale.y=.76+Math.sin(te*2.2)*.024,z.position.y=.1+Math.sin(te*2.2)*.003,pe.rotation.y=Math.sin(te*1.8)*.22,st.rotation.y=Math.sin(te*1.8-.4)*.26,Gt.rotation.y=Math.sin(te*1.8-.8)*.32,je-=Yt,je<=0&&!Ve&&(Ve=!0,Ze=0),Ve)if(Ze+=Yt*8,Ze>=Math.PI)Ve=!1,je=3+Math.random()*4,Qt.forEach(Zt=>Zt.scale.set(1.02,.01,1.02));else{const Zt=Math.sin(Ze)*.98+.01;Qt.forEach(T=>T.scale.set(1.02,Zt,1.02))}if(dn-=Yt,dn<=0&&ve<=0&&(ve=Math.PI*2,dn=3.5+Math.random()*5),ve>0){ve-=Yt*14;const Zt=Math.sin(ve)*.22;nt.rotation.z=Math.max(0,Zt),ot.rotation.z=Math.min(0,-Zt*.7)}else nt.rotation.z=0,ot.rotation.z=0;if(Ne>0)Ne-=Yt,Wt.rotation.x=-.22,Wt.rotation.z=.06*Math.sin(te*3),Qt.forEach(Zt=>Zt.scale.set(1.02,.85,1.02));else if(Wt.rotation.x=0,e){const Zt=e.x-6,T=e.z-21.2;if(Math.hypot(Zt,T)<4.2){const q=Math.atan2(Zt,T),K=Math.max(-1.3,Math.min(1.3,q));Wt.rotation.y=Vs.lerp(Wt.rotation.y,K,Yt*3.5),Wt.rotation.z=Math.sin(te*1.5)*.06}else Wt.rotation.y=Vs.lerp(Wt.rotation.y,0,Yt*2),Wt.rotation.z=Vs.lerp(Wt.rotation.z,0,Yt*2)}for(const Zt of Oe)if(Zt.life>0){Zt.life-=Yt,Zt.mesh.position.y+=Zt.vy*Yt,Zt.mesh.position.x=Zt.baseX+Math.sin(Zt.life*4)*.03;const T=Zt.life/Zt.maxLife,O=Zt.mesh.material;O.opacity=Math.max(0,Math.min(1,T*1.5)),Zt.life<=0&&(Zt.mesh.visible=!1)}}}}class sx{constructor(t,n="low"){ae(this,"scene");ae(this,"defs",[]);ae(this,"lowPool",[]);ae(this,"highLights",[]);ae(this,"POOL_SIZE",7);ae(this,"quality","low");ae(this,"updateTimer",0);ae(this,"lastUpdatePos",new N(-9999,-9999,-9999));this.scene=t,this.quality=n;for(let e=0;e<this.POOL_SIZE;e++){const i=new _e(16777215,0,10,1.2);i.position.set(0,-999,0),i.visible=this.quality==="low",t.add(i),this.lowPool.push(i)}}getQuality(){return this.quality}setQuality(t){if(this.quality!==t)if(this.quality=t,t==="high"){for(const n of this.lowPool)n.intensity=0,n.visible=!1,n.position.set(0,-999,0);for(const n of this.highLights)n.light.visible=!0,n.light.position.set(n.def.x,n.def.y,n.def.z),n.light.color.setHex(n.def.color),n.light.distance=n.def.distance,n.light.decay=n.def.decay??1.2,n.light.intensity=n.def.dynamicIntensity?n.def.dynamicIntensity():n.def.intensity}else{for(const n of this.highLights)n.light.visible=!1;for(const n of this.lowPool)n.visible=!0;this.lastUpdatePos.set(-9999,-9999,-9999)}}register(t){this.defs.push(t);const n=new _e(t.color,t.intensity,t.distance,t.decay??1.2);return n.position.set(t.x,t.y,t.z),n.visible=this.quality==="high",this.scene.add(n),this.highLights.push({def:t,light:n}),t}update(t,n,e,i=!1){if(this.quality==="high"){for(let a=0;a<this.highLights.length;a++){const l=this.highLights[a];l.def.dynamicIntensity&&(l.light.intensity=l.def.dynamicIntensity())}return}this.updateTimer+=t;const s=n.distanceToSquared(this.lastUpdatePos)>.16;if(!i&&!s&&this.updateTimer<.035)return;this.updateTimer=0,this.lastUpdatePos.copy(n);const r=[];for(let a=0;a<this.defs.length;a++){const l=this.defs[a],c=l.x-n.x,h=l.y-n.y,f=l.z-n.z,u=c*c+h*h+f*f,d=l.distance*1.55;if(u>d*d)continue;const m=Math.sqrt(u),_=l.dynamicIntensity?l.dynamicIntensity():l.intensity;if(_<=.01)continue;const x=1/(1+(m/l.distance)**2);let p=_*(1-m/d)*x;l.zone&&e.includes(l.zone)&&(p*=3),r.push({def:l,score:p,curIntensity:_})}r.sort((a,l)=>l.score-a.score);for(let a=0;a<this.POOL_SIZE;a++){const l=this.lowPool[a];if(a<r.length&&r[a].score>.005){const c=r[a];l.position.set(c.def.x,c.def.y,c.def.z),l.color.setHex(c.def.color),l.intensity=c.curIntensity,l.distance=c.def.distance,l.decay=c.def.decay??1.2}else l.intensity=0,l.position.set(0,-999,0)}}}class rx{constructor(){ae(this,"ctx",null);ae(this,"ambientNode",null);ae(this,"stepTimer",0);ae(this,"stepInterval",.44)}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.startAmbience())}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startAmbience(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),e=n.getChannelData(0);let i=0;for(let a=0;a<t;a++){const l=Math.random()*2-1;e[a]=(i+.02*l)/1.02,i=e[a],e[a]*=3.5}const s=this.ctx.createBufferSource();s.buffer=n,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(140,this.ctx.currentTime),this.ambientNode=this.ctx.createGain(),this.ambientNode.gain.setValueAtTime(.18,this.ctx.currentTime),s.connect(r),r.connect(this.ambientNode),this.ambientNode.connect(this.ctx.destination),s.start()}updateFootsteps(t,n,e){if(!n){this.stepTimer=this.stepInterval*.75;return}this.stepTimer+=t,this.stepTimer>=this.stepInterval&&(this.stepTimer=0,this.playFootstep(e))}playFootstep(t){if(!this.ctx)return;const n=this.ctx.createOscillator(),e=this.ctx.createGain(),i=this.ctx.currentTime;t==="tile"?(n.frequency.setValueAtTime(320,i),n.frequency.exponentialRampToValueAtTime(80,i+.045),e.gain.setValueAtTime(.08,i),e.gain.exponentialRampToValueAtTime(.001,i+.045)):t==="walk"?(n.frequency.setValueAtTime(240,i),n.frequency.exponentialRampToValueAtTime(60,i+.055),e.gain.setValueAtTime(.1,i),e.gain.exponentialRampToValueAtTime(.001,i+.055)):t==="road"?(n.frequency.setValueAtTime(180,i),n.frequency.exponentialRampToValueAtTime(45,i+.065),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.065)):(n.frequency.setValueAtTime(140,i),n.frequency.exponentialRampToValueAtTime(50,i+.05),e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.05)),n.connect(e),e.connect(this.ctx.destination),n.start(i),n.stop(i+.07)}playVendingSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(2400,t),n.frequency.exponentialRampToValueAtTime(800,t+.03),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.04);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(280,t+.08),i.frequency.linearRampToValueAtTime(320,t+.25),s.gain.setValueAtTime(.08,t+.08),s.gain.linearRampToValueAtTime(.001,t+.28),i.connect(s),s.connect(this.ctx.destination),i.start(t+.08),i.stop(t+.29);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.frequency.setValueAtTime(180,t+.32),r.frequency.exponentialRampToValueAtTime(40,t+.45),a.gain.setValueAtTime(.35,t+.32),a.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(a),a.connect(this.ctx.destination),r.start(t+.32),r.stop(t+.46)}playElevatorChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(880,t),e.gain.setValueAtTime(.2,t),e.gain.exponentialRampToValueAtTime(.001,t+.6),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.65);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(659.25,t+.22),s.gain.setValueAtTime(.25,t+.22),s.gain.exponentialRampToValueAtTime(.001,t+.95),i.connect(s),s.connect(this.ctx.destination),i.start(t+.22),i.stop(t+1)}playCatMeow(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(550,t),n.frequency.linearRampToValueAtTime(820,t+.18),n.frequency.linearRampToValueAtTime(620,t+.42),e.gain.setValueAtTime(.01,t),e.gain.linearRampToValueAtTime(.18,t+.08),e.gain.linearRampToValueAtTime(.12,t+.28),e.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.46)}playCatPurr(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(85,t);const e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(26,t);const i=this.ctx.createGain();i.gain.setValueAtTime(35,t);const s=this.ctx.createGain();s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.22,t+.15),s.gain.setValueAtTime(.22,t+1.2),s.gain.exponentialRampToValueAtTime(.001,t+1.6),e.connect(i),i.connect(n.frequency),n.connect(s),s.connect(this.ctx.destination),e.start(t),n.start(t),e.stop(t+1.65),n.stop(t+1.65)}playCrosswalkChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(1800,t),n.frequency.exponentialRampToValueAtTime(1400,t+.12),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playFamilyMartChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=[{f:739.99,t:0,d:.18},{f:587.33,t:.18,d:.18},{f:440,t:.36,d:.18},{f:587.33,t:.54,d:.18},{f:659.25,t:.72,d:.18},{f:880,t:.9,d:.4},{f:659.25,t:1.35,d:.18},{f:739.99,t:1.53,d:.18},{f:659.25,t:1.71,d:.18},{f:440,t:1.89,d:.18},{f:587.33,t:2.07,d:.45}];for(const e of n){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e.f,t+e.t),s.gain.setValueAtTime(.16,t+e.t),s.gain.exponentialRampToValueAtTime(.001,t+e.t+e.d),i.connect(s),s.connect(this.ctx.destination),i.start(t+e.t),i.stop(t+e.t+e.d+.05)}}playSlidingDoorSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=Math.floor(this.ctx.sampleRate*.4),e=this.ctx.createBuffer(1,n,this.ctx.sampleRate),i=e.getChannelData(0);for(let l=0;l<n;l++)i[l]=(Math.random()*2-1)*(1-l/n);const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(800,t),r.Q.setValueAtTime(2,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.08,t),a.gain.linearRampToValueAtTime(.001,t+.38),s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(t)}playSipWaterSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(240,t+.14),e.gain.setValueAtTime(.12,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playDeskBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(2093,t),e.type="sine",e.frequency.setValueAtTime(3135,t),i.gain.setValueAtTime(.22,t),i.gain.exponentialRampToValueAtTime(.001,t+1.1),n.connect(i),e.connect(i),i.connect(this.ctx.destination),n.start(t),e.start(t),n.stop(t+1.1),e.stop(t+1.1)}playRamenTicketSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(587.33,t),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.12);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(880,t+.1),s.gain.setValueAtTime(.18,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(this.ctx.destination),i.start(t+.1),i.stop(t+.35);const r=Math.floor(this.ctx.sampleRate*.25),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),l=a.getChannelData(0);for(let u=0;u<r;u++)l[u]=(Math.random()*2-1)*Math.sin(u/r*Math.PI*40);const c=this.ctx.createBufferSource();c.buffer=a;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(1400,t+.25);const f=this.ctx.createGain();f.gain.setValueAtTime(.08,t+.25),f.gain.linearRampToValueAtTime(.001,t+.5),c.connect(h),h.connect(f),f.connect(this.ctx.destination),c.start(t+.25)}playBikeBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let n=0;n<2;n++){const e=t+n*.12,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(2637,e),s.type="sine",s.frequency.setValueAtTime(4186,e),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),i.connect(r),s.connect(r),r.connect(this.ctx.destination),i.start(e),s.start(e),i.stop(e+.36),s.stop(e+.36)}}playFountainDrinkSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let i=0;i<4;i++){const s=t+i*.08,r=this.ctx.createOscillator(),a=this.ctx.createGain(),l=600+Math.random()*400;r.type="sine",r.frequency.setValueAtTime(l,s),r.frequency.exponentialRampToValueAtTime(l+250,s+.06),a.gain.setValueAtTime(.08,s),a.gain.exponentialRampToValueAtTime(.001,s+.06),r.connect(a),a.connect(this.ctx.destination),r.start(s),r.stop(s+.07)}const n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(260,t+.35),n.frequency.exponentialRampToValueAtTime(110,t+.5),e.gain.setValueAtTime(.12,t+.35),e.gain.exponentialRampToValueAtTime(.001,t+.52),n.connect(e),e.connect(this.ctx.destination),n.start(t+.35),n.stop(t+.53)}playSwingCreakSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(980,t),n.frequency.linearRampToValueAtTime(1420,t+.08),n.frequency.exponentialRampToValueAtTime(650,t+.22),e.gain.setValueAtTime(.05,t),e.gain.linearRampToValueAtTime(.08,t+.08),e.gain.exponentialRampToValueAtTime(.001,t+.24),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.25)}playSpringRockerSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(180,t),n.frequency.linearRampToValueAtTime(320,t+.06),n.frequency.exponentialRampToValueAtTime(90,t+.38),e.gain.setValueAtTime(.16,t),e.gain.exponentialRampToValueAtTime(.001,t+.4),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.42)}playSlideSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(420,t),n.frequency.exponentialRampToValueAtTime(140,t+.45),e.gain.setValueAtTime(.12,t),e.gain.linearRampToValueAtTime(.18,t+.1),e.gain.exponentialRampToValueAtTime(.001,t+.48),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.5)}}class ax{constructor(t){ae(this,"canvas");ae(this,"ctx");ae(this,"scale",3.2);ae(this,"lastX",-9999);ae(this,"lastZ",-9999);ae(this,"lastYaw",-9999);ae(this,"lastTime",0);this.canvas=t,this.canvas.width=256,this.canvas.height=256,this.ctx=t.getContext("2d")}update(t,n=!1){const e=performance.now();if(!n&&e-this.lastTime<50||!n&&Math.abs(t.x-this.lastX)<.04&&Math.abs(t.z-this.lastZ)<.04&&Math.abs(t.yaw-this.lastYaw)<.02)return;this.lastTime=e,this.lastX=t.x,this.lastZ=t.z,this.lastYaw=t.yaw;const i=this.ctx,s=this.canvas.width,r=this.canvas.height,a=s/2,l=r/2;i.fillStyle="#0a0e14",i.fillRect(0,0,s,r),i.save(),i.translate(a,l);const c=d=>(d-t.x)*this.scale,h=d=>(d-t.z)*this.scale;i.fillStyle="#181e28",i.fillRect(c(-55),h(-3.5),110*this.scale,7*this.scale),i.fillRect(c(13.5),h(3.5),5*this.scale,38.5*this.scale),i.fillRect(c(-16.5),h(-42),5*this.scale,38.5*this.scale),i.fillStyle="#222834",i.fillRect(c(-55),h(3.5),110*this.scale,4*this.scale),i.fillRect(c(-55),h(-7.5),110*this.scale,4*this.scale),i.fillRect(c(10.5),h(3.5),3*this.scale,38.5*this.scale),i.fillRect(c(18.5),h(3.5),3*this.scale,38.5*this.scale),i.fillRect(c(-19.5),h(-42),3*this.scale,38.5*this.scale),i.fillRect(c(-11.5),h(-42),3*this.scale,38.5*this.scale),i.fillRect(c(4),h(19.5),9.5*this.scale,3*this.scale),i.fillRect(c(-4),h(21.5),8*this.scale,3*this.scale),i.fillStyle="#222920",i.fillRect(c(-8.5),h(-36.5),18*this.scale,29*this.scale),i.strokeStyle="#2d5a3c",i.lineWidth=1.5,i.strokeRect(c(-8.5),h(-36.5),18*this.scale,29*this.scale),i.fillStyle="#343836",i.fillRect(c(-1.6),h(-18.6),3.2*this.scale,11.1*this.scale),i.fillRect(c(-3.1),h(-24.4),6.2*this.scale,5.8*this.scale),i.fillRect(c(-8.5),h(-23.3),5.4*this.scale,2.6*this.scale),i.fillRect(c(-.5),h(-30.7),3*this.scale,6.5*this.scale),i.fillStyle="#1a3d24",i.fillRect(c(2.3),h(-19.6),5.8*this.scale,7.2*this.scale),i.fillRect(c(-7.4),h(-17.6),4.8*this.scale,6.2*this.scale),i.fillStyle="#475569",i.strokeStyle="#94a3b8",i.lineWidth=1,i.fillRect(c(4.1),h(-34.1),4.2*this.scale,3.2*this.scale),i.strokeRect(c(4.1),h(-34.1),4.2*this.scale,3.2*this.scale),i.fillStyle="#ffffff";const f=[{x:16,z:0,w:4,d:7},{x:-14,z:0,w:4,d:7},{x:0,z:0,w:3.5,d:7},{x:16,z:5.5,w:5,d:3},{x:-14,z:-5.5,w:5,d:3}];for(const d of f)i.globalAlpha=.4,i.fillRect(c(d.x-d.w/2),h(d.z-d.d/2),d.w*this.scale,d.d*this.scale),i.globalAlpha=1;for(const d of Cf){const m=c(d.x-d.w/2),_=h(d.z-d.d/2),x=d.w*this.scale,p=d.d*this.scale;d.id==="b-sunheights"?(i.fillStyle="#1e384d",i.strokeStyle="#4da2d6"):d.id==="b-konbini"?(i.fillStyle="#14422e",i.strokeStyle="#32b87a"):d.id==="b-ramen"?(i.fillStyle="#4a201c",i.strokeStyle="#e04c3e"):d.id==="b-cafe"?(i.fillStyle="#3d2b1c",i.strokeStyle="#c4894d"):(i.fillStyle="#262d38",i.strokeStyle="#3d485a"),i.lineWidth=1.5,i.fillRect(m,_,x,p),i.strokeRect(m,_,x,p),i.font='10px "Yu Gothic UI", sans-serif',i.textAlign="center",i.textBaseline="middle",d.id==="b-sunheights"?(i.fillStyle="#78c6f7",i.fillText("🏠 サンハイツ",c(d.x),h(d.z))):d.id==="b-konbini"?(i.fillStyle="#5ee6a2",i.fillText("🏪 コンビニ",c(d.x),h(d.z))):d.id==="b-ramen"?(i.fillStyle="#ff8878",i.fillText("🍜 麺処",c(d.x),h(d.z))):d.id==="b-cafe"&&(i.fillStyle="#f0b878",i.fillText("☕ 喫茶",c(d.x),h(d.z)))}i.font='10px "Yu Gothic UI", sans-serif',i.fillStyle="#f472b6",i.fillText("🌸 桜公園",c(.5),h(-19)),i.fillStyle="#38bdf8",i.fillText("🛝 遊具",c(-2.5),h(-29)),i.fillStyle="#94a3b8",i.font='8px "Yu Gothic UI", sans-serif',i.fillText("🚻",c(6.2),h(-32.5)),i.restore(),i.save(),i.translate(a,l),i.rotate(-t.yaw);const u=i.createRadialGradient(0,0,2,0,0,36);u.addColorStop(0,"rgba(80, 210, 255, 0.45)"),u.addColorStop(1,"rgba(80, 210, 255, 0.0)"),i.beginPath(),i.moveTo(0,0),i.arc(0,0,36,-Math.PI/2-.45,-Math.PI/2+.45),i.closePath(),i.fillStyle=u,i.fill(),i.beginPath(),i.moveTo(0,-9),i.lineTo(6,6),i.lineTo(0,3),i.lineTo(-6,6),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.strokeStyle="#00aaff",i.lineWidth=1.5,i.stroke(),i.restore(),i.fillStyle="rgba(15, 20, 28, 0.75)",i.fillRect(s-28,6,22,22),i.strokeStyle="rgba(255, 255, 255, 0.2)",i.strokeRect(s-28,6,22,22),i.font="bold 11px sans-serif",i.fillStyle="#e85d4d",i.textAlign="center",i.textBaseline="middle",i.fillText("N",s-17,17)}}class lx{constructor(){ae(this,"locEl");ae(this,"crosshairEl");ae(this,"promptEl");ae(this,"toastEl");ae(this,"overlayEl");ae(this,"lastPrompt","");ae(this,"lastToast","");this.locEl=document.getElementById("location"),this.crosshairEl=document.getElementById("crosshair"),this.promptEl=document.getElementById("prompt"),this.toastEl=document.getElementById("toast"),this.overlayEl=document.getElementById("overlay")}update(t,n,e){var i,s;this.locEl&&this.locEl.textContent!==t&&(this.locEl.textContent=t),this.promptEl&&this.lastPrompt!==n&&(this.lastPrompt=n,n?(this.promptEl.innerHTML=`<kbd>E</kbd> ${n}`,(i=this.crosshairEl)==null||i.classList.add("active")):(this.promptEl.innerHTML="",(s=this.crosshairEl)==null||s.classList.remove("active"))),this.toastEl&&this.lastToast!==e&&(this.lastToast=e,this.toastEl.textContent=e)}showOverlay(){var t;(t=this.overlayEl)==null||t.classList.remove("hidden")}hideOverlay(){var t;(t=this.overlayEl)==null||t.classList.add("hidden")}isOverlayVisible(){var t;return!((t=this.overlayEl)!=null&&t.classList.contains("hidden"))}}async function cx(){const o=new l2;o.background=new me(790551),o.fog=new Ta(790551,.022);const t=new yn(74,window.innerWidth/window.innerHeight,.1,vn.isHigh()?180:90),n=new a2({antialias:!0,powerPreference:"high-performance"});n.setSize(window.innerWidth,window.innerHeight);const e=()=>vn.isHigh()?Math.min(window.devicePixelRatio||1,1.5):Math.min(window.devicePixelRatio||1,1);let i=e();n.setPixelRatio(i),n.toneMapping=Oc,n.toneMappingExposure=1.15,n.shadowMap.enabled=!0,n.shadowMap.type=zc,n.shadowMap.autoUpdate=!1;const s=document.getElementById("app");s?s.appendChild(n.domElement):document.body.appendChild(n.domElement);const r=new B2(2635856,658708,.75);o.add(r);const a=new V2(8561876,.55);a.position.set(24,45,18),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=.5,a.shadow.camera.far=120,a.shadow.camera.left=-50,a.shadow.camera.right=50,a.shadow.camera.top=50,a.shadow.camera.bottom=-50,a.shadow.bias=-6e-4,o.add(a);let l=!0;Y2();const c=new Z2,h=new q2,f=new $2,u=new rx,d=new lx,m=new e1(0,18.2,Math.PI);m.applyCamera(t);const _=new sx(o,vn.getQuality());xg(o,c);const x=vg(o,c,h,f,u,_),p=Pg(o,c,h,f,m,u,_),M=document.getElementById("minimap"),v=M?new ax(M):null;let w=!1;const P=()=>{document.pointerLockElement===document.body?(w=!0,d.hideOverlay(),u.init(),u.resume()):(w=!1,d.showOverlay())};document.addEventListener("pointerlockchange",P);const R=()=>{u.init(),u.resume(),document.body.requestPointerLock()};let E=1,I=0,S=0;const y=document.getElementById("quality-btn"),D=document.getElementById("overlay-quality-btn"),G=()=>{const z=vn.isHigh();y&&(y.textContent=z?"✨ Graphics: High":"⚡ Graphics: Low",y.classList.toggle("high",z)),D&&(D.textContent=z?"✨ High (Full Distance & Lighting)":"⚡ Low (Optimized for Laptops)",D.classList.toggle("high",z))},V=()=>{const z=vn.isHigh();t.far=z?180:90,t.updateProjectionMatrix(),i=e(),E=1,n.setPixelRatio(i),_.setQuality(vn.getQuality()),l=!0},J=()=>{const z=vn.toggleQuality();f.show(z==="high"?"Graphics: High (Ultra) — Full lighting, extended draw distance & unculled interiors enabled!":"Graphics: Low (Performance) — Light pooling & interior distance culling enabled.",4)};y&&y.addEventListener("click",z=>{z.stopPropagation(),J()}),D&&D.addEventListener("click",z=>{z.stopPropagation(),J()}),vn.onChange(()=>{V(),G()}),G();const $=document.getElementById("overlay");$&&$.addEventListener("click",z=>{z.target.closest("#overlay-quality-btn, #quality-btn, #exit-btn")||R()}),window.addEventListener("click",z=>{if(!w){if(z.target.closest("#overlay-quality-btn, #quality-btn, #exit-btn"))return;R()}}),window.addEventListener("mousemove",z=>{w&&m.applyMouse(z.movementX,z.movementY)}),window.addEventListener("keydown",z=>{if(z.code==="KeyG"){J();return}if(z.code==="KeyE"){const B=h.prompt().toLowerCase();B.includes("buy")||B.includes("coffee")||B.includes("tea")||B.includes("famichiki")||B.includes("chicken")?u.playVendingSound():B.includes("water")||B.includes("drink park")?u.playSipWaterSound():B.includes("elevator")?u.playElevatorChime():B.includes("cat")||B.includes("pet")?u.playCatMeow():B.includes("signal")||B.includes("crossing")||B.includes("button")?u.playCrosswalkChime():B.includes("slide")&&u.playSlideSound(),h.use()}}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(i*E),l=!0}),f.show("Welcome home to Tokyo. Walk through the front glass doors to explore the neighbourhood.",6);const X=new W2,Y=1e3/120;let at=performance.now(),ct=0,ht=performance.now(),wt=120;const vt=document.getElementById("fps-badge");function H(z){if(requestAnimationFrame(H),document.hidden)return;const B=w?Y:1e3/30,it=z-at;if(it<B-1)return;at=z-it%B,ct++,z-ht>=1e3&&(wt=Math.round(ct*1e3/(z-ht)),ct=0,ht=z,vt&&(vt.textContent=`${wt} FPS`),vn.isHigh()||(wt<22?(I++,S=0,I>=2&&E>.82&&(E=.82,n.setPixelRatio(i*E))):wt>=48?(S++,I=0,S>=3&&E<1&&(E=1,n.setPixelRatio(i*E))):(I=0,S=0)));const dt=Math.min(X.getDelta(),.05);m.update(dt,w,c),m.applyCamera(t),x.update(dt,m),p.update(dt),h.update(m,c),f.update(dt);const Rt=w&&!m.seated&&m.moving();let Ut="walk";const Vt=j2(m.x,m.z);_.update(dt,t.position,Vt),Vt.includes("Lobby")||Vt.includes("Store")||Vt.includes("Ramen")?Ut="tile":Vt.includes("Park")?Ut="park":Rf(m.x,m.z)&&(Ut="road"),u.updateFootsteps(dt,Rt,Ut),d.update(Vt,h.prompt(),f.text),v&&v.update(m),l&&(n.shadowMap.needsUpdate=!0,l=!1),n.render(o,t)}requestAnimationFrame(H)}window.addEventListener("DOMContentLoaded",()=>{cx().catch(o=>console.error("Initialization error:",o))});
