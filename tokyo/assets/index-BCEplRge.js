var Rd=Object.defineProperty;var Cd=(o,t,n)=>t in o?Rd(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var ue=(o,t,n)=>Cd(o,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="170",Pd=0,$l=1,Id=2,Pf=1,If=2,ci=3,Ci=0,Rn=1,pn=2,Ai=0,Co=1,Ra=2,Kl=3,Jl=4,Ld=5,Yi=100,Dd=101,Ud=102,Nd=103,zd=104,Fd=200,Od=201,kd=202,Bd=203,Ca=204,Pa=205,Gd=206,Hd=207,Vd=208,Wd=209,Xd=210,Yd=211,Zd=212,qd=213,$d=214,Ia=0,La=1,Da=2,Do=3,Ua=4,Na=5,za=6,Fa=7,Lf=0,Kd=1,Jd=2,Ri=0,jd=1,Qd=2,th=3,Df=4,eh=5,nh=6,ih=7,Uf=300,Uo=301,No=302,Oa=303,ka=304,Ir=306,Pe=1e3,qi=1001,Ba=1002,Wn=1003,oh=1004,Ws=1005,Qn=1006,Wr=1007,$i=1008,pi=1009,Nf=1010,zf=1011,Ss=1012,_l=1013,Ki=1014,fi=1015,Ps=1016,vl=1017,yl=1018,zo=1020,Ff=35902,Of=1021,kf=1022,Vn=1023,Bf=1024,Gf=1025,Po=1026,Fo=1027,Hf=1028,Ml=1029,Vf=1030,Sl=1031,bl=1033,yr=33776,Mr=33777,Sr=33778,br=33779,Ga=35840,Ha=35841,Va=35842,Wa=35843,Xa=36196,Ya=37492,Za=37496,qa=37808,$a=37809,Ka=37810,Ja=37811,ja=37812,Qa=37813,tl=37814,el=37815,nl=37816,il=37817,ol=37818,sl=37819,rl=37820,al=37821,Tr=36492,ll=36494,cl=36495,Wf=36283,fl=36284,dl=36285,hl=36286,sh=3200,rh=3201,Xf=0,ah=1,Ei="",ge="srgb",Bo="srgb-linear",Lr="linear",Le="srgb",fo=7680,jl=519,lh=512,ch=513,fh=514,Yf=515,dh=516,hh=517,uh=518,ph=519,Ql=35044,tc="300 es",di=2e3,Ar=2001;class Go{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(n)===-1&&e[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const i=e.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const gs=Math.PI/180,bs=180/Math.PI;function Qi(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[e&255]+yn[e>>8&255]+yn[e>>16&255]+yn[e>>24&255]).toLowerCase()}function un(o,t,n){return Math.max(t,Math.min(n,o))}function Tl(o,t){return(o%t+t)%t}function mh(o,t,n,e,i){return e+(o-t)*(i-e)/(n-t)}function gh(o,t,n){return o!==t?(n-o)/(t-o):0}function xs(o,t,n){return(1-n)*o+n*t}function xh(o,t,n,e){return xs(o,t,1-Math.exp(-n*e))}function wh(o,t=1){return t-Math.abs(Tl(o,t*2)-t)}function _h(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*(3-2*o))}function vh(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*o*(o*(o*6-15)+10))}function yh(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Mh(o,t){return o+Math.random()*(t-o)}function Sh(o){return o*(.5-Math.random())}function bh(o){o!==void 0&&(ec=o);let t=ec+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Th(o){return o*gs}function Eh(o){return o*bs}function Ah(o){return(o&o-1)===0&&o!==0}function Rh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ch(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ph(o,t,n,e,i){const s=Math.cos,r=Math.sin,a=s(n/2),l=r(n/2),c=s((t+e)/2),f=r((t+e)/2),d=s((t-e)/2),h=r((t-e)/2),u=s((e-t)/2),g=r((e-t)/2);switch(i){case"XYX":o.set(a*f,l*d,l*h,a*c);break;case"YZY":o.set(l*h,a*f,l*d,a*c);break;case"ZXZ":o.set(l*d,l*h,a*f,a*c);break;case"XZX":o.set(a*f,l*g,l*u,a*c);break;case"YXY":o.set(l*u,a*f,l*g,a*c);break;case"ZYZ":o.set(l*g,l*u,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Eo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function En(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Xr={DEG2RAD:gs,RAD2DEG:bs,generateUUID:Qi,clamp:un,euclideanModulo:Tl,mapLinear:mh,inverseLerp:gh,lerp:xs,damp:xh,pingpong:wh,smoothstep:_h,smootherstep:vh,randInt:yh,randFloat:Mh,randFloatSpread:Sh,seededRandom:bh,degToRad:Th,radToDeg:Eh,isPowerOfTwo:Ah,ceilPowerOfTwo:Rh,floorPowerOfTwo:Ch,setQuaternionFromProperEuler:Ph,normalize:En,denormalize:Eo};class Yt{constructor(t=0,n=0){Yt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,e=this.y,i=t.elements;return this.x=i[0]*n+i[3]*e+i[6],this.y=i[1]*n+i[4]*e+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(un(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y;return n*n+e*e}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const e=Math.cos(n),i=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*e-r*i+t.x,this.y=s*i+r*e+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,n,e,i,s,r,a,l,c){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,e,i,s,r,a,l,c)}set(t,n,e,i,s,r,a,l,c){const f=this.elements;return f[0]=t,f[1]=i,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=e,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],this}extractBasis(t,n,e){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,i=n.elements,s=this.elements,r=e[0],a=e[3],l=e[6],c=e[1],f=e[4],d=e[7],h=e[2],u=e[5],g=e[8],x=i[0],w=i[3],p=i[6],y=i[1],v=i[4],_=i[7],P=i[2],R=i[5],A=i[8];return s[0]=r*x+a*y+l*P,s[3]=r*w+a*v+l*R,s[6]=r*p+a*_+l*A,s[1]=c*x+f*y+d*P,s[4]=c*w+f*v+d*R,s[7]=c*p+f*_+d*A,s[2]=h*x+u*y+g*P,s[5]=h*w+u*v+g*R,s[8]=h*p+u*_+g*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*a*c-e*s*f+e*a*l+i*s*c-i*r*l}invert(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8],d=f*r-a*c,h=a*l-f*s,u=c*s-r*l,g=n*d+e*h+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(i*c-f*e)*x,t[2]=(a*e-i*r)*x,t[3]=h*x,t[4]=(f*n-i*l)*x,t[5]=(i*s-a*n)*x,t[6]=u*x,t[7]=(e*l-c*n)*x,t[8]=(r*n-e*s)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,e,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(e*l,e*c,-e*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Yr.makeScale(t,n)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,n){return this.premultiply(Yr.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,e,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,e=t.elements;for(let i=0;i<9;i++)if(n[i]!==e[i])return!1;return!0}fromArray(t,n=0){for(let e=0;e<9;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new me;function Zf(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Rr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ih(){const o=Rr("canvas");return o.style.display="block",o}const nc={};function us(o){o in nc||(nc[o]=!0,console.warn(o))}function Lh(o,t,n){return new Promise(function(e,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:e()}}setTimeout(s,n)})}function Dh(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uh(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Te={enabled:!0,workingColorSpace:Bo,spaces:{},convert:function(o,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===Le&&(o.r=hi(o.r),o.g=hi(o.g),o.b=hi(o.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Le&&(o.r=Io(o.r),o.g=Io(o.g),o.b=Io(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ei?Lr:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,n){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function hi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Io(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ic=[.64,.33,.3,.6,.15,.06],oc=[.2126,.7152,.0722],sc=[.3127,.329],rc=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Bo]:{primaries:ic,whitePoint:sc,transfer:Lr,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:oc,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:ic,whitePoint:sc,transfer:Le,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:oc,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});let ho;class Nh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ho===void 0&&(ho=Rr("canvas")),ho.width=t.width,ho.height=t.height;const e=ho.getContext("2d");t instanceof ImageData?e.putImageData(t,0,0):e.drawImage(t,0,0,t.width,t.height),n=ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Rr("canvas");n.width=t.width,n.height=t.height;const e=n.getContext("2d");e.drawImage(t,0,0,t.width,t.height);const i=e.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=hi(s[r]/255)*255;return e.putImageData(i,0,0),n}else if(t.data){const n=t.data.slice(0);for(let e=0;e<n.length;e++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[e]=Math.floor(hi(n[e]/255)*255):n[e]=hi(n[e]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zh=0;class qf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const e={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Zr(i[r].image)):s.push(Zr(i[r]))}else s=Zr(i);e.url=s}return n||(t.images[this.uuid]=e),e}}function Zr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Nh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fh=0;class Cn extends Go{constructor(t=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,e=qi,i=qi,s=Qn,r=$i,a=Vn,l=pi,c=Cn.DEFAULT_ANISOTROPY,f=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Qi(),this.name="",this.source=new qf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=e,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const e={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),n||(t.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pe:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pe:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Uf;Cn.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,n=0,e=0,i=1){De.prototype.isVector4=!0,this.x=t,this.y=n,this.z=e,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,e,i){return this.x=t,this.y=n,this.z=e,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,e=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*e+r[8]*i+r[12]*s,this.y=r[1]*n+r[5]*e+r[9]*i+r[13]*s,this.z=r[2]*n+r[6]*e+r[10]*i+r[14]*s,this.w=r[3]*n+r[7]*e+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,e,i,s;const l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],u=l[5],g=l[9],x=l[2],w=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-w)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+w)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,_=(u+1)/2,P=(p+1)/2,R=(f+h)/4,A=(d+x)/4,D=(g+w)/4;return v>_&&v>P?v<.01?(e=0,i=.707106781,s=.707106781):(e=Math.sqrt(v),i=R/e,s=A/e):_>P?_<.01?(e=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),e=R/i,s=D/i):P<.01?(e=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),e=A/s,i=D/s),this.set(e,i,s,n),this}let y=Math.sqrt((w-g)*(w-g)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(w-g)/y,this.y=(d-x)/y,this.z=(h-f)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this.w=t.w+(n.w-t.w)*e,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oh extends Go{constructor(t=1,n=1,e={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new De(0,0,t,n),this.scissorTest=!1,this.viewport=new De(0,0,t,n);const i={width:t,height:n,depth:1};e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},e);const s=new Cn(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace);s.flipY=!1,s.generateMipmaps=e.generateMipmaps,s.internalFormat=e.internalFormat,this.textures=[];const r=e.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.depthTexture=e.depthTexture,this.samples=e.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,e=1){if(this.width!==t||this.height!==n||this.depth!==e){this.width=t,this.height=n,this.depth=e;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=n,this.textures[i].image.depth=e;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++)this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new qf(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Oh{constructor(t=1,n=1,e={}){super(t,n,e),this.isWebGLRenderTarget=!0}}class $f extends Cn{constructor(t=null,n=1,e=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:e,depth:i},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kh extends Cn{constructor(t=null,n=1,e=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:e,depth:i},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=0,n=0,e=0,i=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=e,this._w=i}static slerpFlat(t,n,e,i,s,r,a){let l=e[i+0],c=e[i+1],f=e[i+2],d=e[i+3];const h=s[r+0],u=s[r+1],g=s[r+2],x=s[r+3];if(a===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(a===1){t[n+0]=h,t[n+1]=u,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==h||c!==u||f!==g){let w=1-a;const p=l*h+c*u+f*g+d*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,p*y);w=Math.sin(w*R)/P,a=Math.sin(a*R)/P}const _=a*y;if(l=l*w+h*_,c=c*w+u*_,f=f*w+g*_,d=d*w+x*_,w===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,e,i,s,r){const a=e[i],l=e[i+1],c=e[i+2],f=e[i+3],d=s[r],h=s[r+1],u=s[r+2],g=s[r+3];return t[n]=a*g+f*d+l*u-c*h,t[n+1]=l*g+f*h+c*d-a*u,t[n+2]=c*g+f*u+a*h-l*d,t[n+3]=f*g-a*d-l*h-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,e,i){return this._x=t,this._y=n,this._z=e,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const e=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(e/2),f=a(i/2),d=a(s/2),h=l(e/2),u=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=h*f*d+c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d-h*u*g;break;case"YXZ":this._x=h*f*d+c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d+h*u*g;break;case"ZXY":this._x=h*f*d-c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d-h*u*g;break;case"ZYX":this._x=h*f*d-c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d+h*u*g;break;case"YZX":this._x=h*f*d+c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d-h*u*g;break;case"XZY":this._x=h*f*d-c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d+h*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const e=n/2,i=Math.sin(e);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,e=n[0],i=n[4],s=n[8],r=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=e+a+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-l)*u,this._y=(s-c)*u,this._z=(r-i)*u}else if(e>a&&e>d){const u=2*Math.sqrt(1+e-a-d);this._w=(f-l)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(s+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-e-d);this._w=(s-c)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+d-e-a);this._w=(r-i)/u,this._x=(s+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let e=t.dot(n)+1;return e<Number.EPSILON?(e=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=e):(this._x=0,this._y=-t.z,this._z=t.y,this._w=e)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=e),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,n){const e=this.angleTo(t);if(e===0)return this;const i=Math.min(1,n/e);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const e=t._x,i=t._y,s=t._z,r=t._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=e*f+r*a+i*c-s*l,this._y=i*f+r*l+s*a-e*c,this._z=s*f+r*c+e*l-i*a,this._w=r*f-e*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const e=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+e*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=e,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-n;return this._w=u*r+n*this._w,this._x=u*e+n*this._x,this._y=u*i+n*this._y,this._z=u*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=r*d+this._w*h,this._x=e*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,e){return this.copy(t).slerp(n,e)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,e=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=e}set(t,n,e){return e===void 0&&(e=this.z),this.x=t,this.y=n,this.z=e,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(lc.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(lc.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,e=this.y,i=this.z,s=t.elements;return this.x=s[0]*n+s[3]*e+s[6]*i,this.y=s[1]*n+s[4]*e+s[7]*i,this.z=s[2]*n+s[5]*e+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,e=this.y,i=this.z,s=t.elements,r=1/(s[3]*n+s[7]*e+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*e+s[8]*i+s[12])*r,this.y=(s[1]*n+s[5]*e+s[9]*i+s[13])*r,this.z=(s[2]*n+s[6]*e+s[10]*i+s[14])*r,this}applyQuaternion(t){const n=this.x,e=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*e),f=2*(a*n-s*i),d=2*(s*e-r*n);return this.x=n+l*c+r*d-a*f,this.y=e+l*f+a*c-s*d,this.z=i+l*d+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,e=this.y,i=this.z,s=t.elements;return this.x=s[0]*n+s[4]*e+s[8]*i,this.y=s[1]*n+s[5]*e+s[9]*i,this.z=s[2]*n+s[6]*e+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const e=t.x,i=t.y,s=t.z,r=n.x,a=n.y,l=n.z;return this.x=i*l-s*a,this.y=s*r-e*l,this.z=e*a-i*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const e=t.dot(this)/n;return this.copy(t).multiplyScalar(e)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(un(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y,i=this.z-t.z;return n*n+e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,e){const i=Math.sin(n)*t;return this.x=i*Math.sin(e),this.y=Math.cos(n)*t,this.z=i*Math.cos(e),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,e){return this.x=t*Math.sin(n),this.y=e,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),e=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=e,this.z=i,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,e=Math.sqrt(1-n*n);return this.x=e*Math.cos(t),this.y=n,this.z=e*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new N,lc=new Ho;class Is{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n+=3)this.expandByPoint(kn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,e=t.count;n<e;n++)this.expandByPoint(kn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const e=kn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(e),this.max.copy(t).add(e),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const e=t.geometry;if(e!==void 0){const s=e.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,kn):kn.fromBufferAttribute(s,r),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,e;return t.normal.x>0?(n=t.normal.x*this.min.x,e=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,e=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,e+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,e+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,e+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,e+=t.normal.z*this.min.z),n<=-t.constant&&e>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Ys.subVectors(this.max,rs),uo.subVectors(t.a,rs),po.subVectors(t.b,rs),mo.subVectors(t.c,rs),vi.subVectors(po,uo),yi.subVectors(mo,po),Oi.subVectors(uo,mo);let n=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Oi.z,Oi.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Oi.z,0,-Oi.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Oi.y,Oi.x,0];return!$r(n,uo,po,mo,Ys)||(n=[1,0,0,0,1,0,0,0,1],!$r(n,uo,po,mo,Ys))?!1:(Zs.crossVectors(vi,yi),n=[Zs.x,Zs.y,Zs.z],$r(n,uo,po,mo,Ys))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,Xs=new Is,uo=new N,po=new N,mo=new N,vi=new N,yi=new N,Oi=new N,rs=new N,Ys=new N,Zs=new N,ki=new N;function $r(o,t,n,e,i){for(let s=0,r=o.length-3;s<=r;s+=3){ki.fromArray(o,s);const a=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=t.dot(ki),c=n.dot(ki),f=e.dot(ki);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Bh=new Is,as=new N,Kr=new N;class Dr{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const e=this.center;n!==void 0?e.copy(n):Bh.setFromPoints(t).getCenter(e);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,e.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const e=this.center.distanceToSquared(t);return n.copy(t),e>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const n=as.lengthSq();if(n>this.radius*this.radius){const e=Math.sqrt(n),i=(e-this.radius)*.5;this.center.addScaledVector(as,i/e),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(Kr)),this.expandByPoint(as.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new N,Jr=new N,qs=new N,Mi=new N,jr=new N,$s=new N,Qr=new N;class Kf{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const e=n.dot(this.direction);return e<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=si.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(t))}distanceSqToSegment(t,n,e,i){Jr.copy(t).add(n).multiplyScalar(.5),qs.copy(n).sub(t).normalize(),Mi.copy(this.origin).sub(Jr);const s=t.distanceTo(n)*.5,r=-this.direction.dot(qs),a=Mi.dot(this.direction),l=-Mi.dot(qs),c=Mi.lengthSq(),f=Math.abs(1-r*r);let d,h,u,g;if(f>0)if(d=r*l-a,h=r*a-l,g=s*f,d>=0)if(h>=-g)if(h<=g){const x=1/f;d*=x,h*=x,u=d*(d+r*h+2*a)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+a)),u=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+a)),u=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),u=h*(h+2*l)+c):(d=Math.max(0,-(r*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+a)),u=-d*d+h*(h+2*l)+c;return e&&e.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Jr).addScaledVector(qs,h),u}intersectSphere(t,n){si.subVectors(t.center,this.origin);const e=si.dot(this.direction),i=si.dot(si)-e*e,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=e-r,l=e+r;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const e=-(this.origin.dot(t.normal)+t.constant)/n;return e>=0?e:null}intersectPlane(t,n){const e=this.distanceToPlane(t);return e===null?null:this.at(e,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let e,i,s,r,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(e=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(e=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),e>r||s>i||((s>e||isNaN(e))&&(e=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),e>l||a>i)||((a>e||e!==e)&&(e=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(e>=0?e:i,n)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,n,e,i,s){jr.subVectors(n,t),$s.subVectors(e,t),Qr.crossVectors(jr,$s);let r=this.direction.dot(Qr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Mi.subVectors(this.origin,t);const l=a*this.direction.dot($s.crossVectors(Mi,$s));if(l<0)return null;const c=a*this.direction.dot(jr.cross(Mi));if(c<0||l+c>r)return null;const f=-a*Mi.dot(Qr);return f<0?null:this.at(f/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(t,n,e,i,s,r,a,l,c,f,d,h,u,g,x,w){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,e,i,s,r,a,l,c,f,d,h,u,g,x,w)}set(t,n,e,i,s,r,a,l,c,f,d,h,u,g,x,w){const p=this.elements;return p[0]=t,p[4]=n,p[8]=e,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=h,p[3]=u,p[7]=g,p[11]=x,p[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],this}copyPosition(t){const n=this.elements,e=t.elements;return n[12]=e[12],n[13]=e[13],n[14]=e[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,e){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(t,n,e){return this.set(t.x,n.x,e.x,0,t.y,n.y,e.y,0,t.z,n.z,e.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,e=t.elements,i=1/go.setFromMatrixColumn(t,0).length(),s=1/go.setFromMatrixColumn(t,1).length(),r=1/go.setFromMatrixColumn(t,2).length();return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=0,n[4]=e[4]*s,n[5]=e[5]*s,n[6]=e[6]*s,n[7]=0,n[8]=e[8]*r,n[9]=e[9]*r,n[10]=e[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,e=t.x,i=t.y,s=t.z,r=Math.cos(e),a=Math.sin(e),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=r*f,u=r*d,g=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=u+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+u*c,n[10]=r*l}else if(t.order==="YXZ"){const h=l*f,u=l*d,g=c*f,x=c*d;n[0]=h+x*a,n[4]=g*a-u,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-a,n[2]=u*a-g,n[6]=x+h*a,n[10]=r*l}else if(t.order==="ZXY"){const h=l*f,u=l*d,g=c*f,x=c*d;n[0]=h-x*a,n[4]=-r*d,n[8]=g+u*a,n[1]=u+g*a,n[5]=r*f,n[9]=x-h*a,n[2]=-r*c,n[6]=a,n[10]=r*l}else if(t.order==="ZYX"){const h=r*f,u=r*d,g=a*f,x=a*d;n[0]=l*f,n[4]=g*c-u,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=u*c-g,n[2]=-c,n[6]=a*l,n[10]=r*l}else if(t.order==="YZX"){const h=r*l,u=r*c,g=a*l,x=a*c;n[0]=l*f,n[4]=x-h*d,n[8]=g*d+u,n[1]=d,n[5]=r*f,n[9]=-a*f,n[2]=-c*f,n[6]=u*d+g,n[10]=h-x*d}else if(t.order==="XZY"){const h=r*l,u=r*c,g=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=r*f,n[9]=u*d-g,n[2]=g*d-u,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gh,t,Hh)}lookAt(t,n,e){const i=this.elements;return Ln.subVectors(t,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Si.crossVectors(e,Ln),Si.lengthSq()===0&&(Math.abs(e.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Si.crossVectors(e,Ln)),Si.normalize(),Ks.crossVectors(Ln,Si),i[0]=Si.x,i[4]=Ks.x,i[8]=Ln.x,i[1]=Si.y,i[5]=Ks.y,i[9]=Ln.y,i[2]=Si.z,i[6]=Ks.z,i[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,i=n.elements,s=this.elements,r=e[0],a=e[4],l=e[8],c=e[12],f=e[1],d=e[5],h=e[9],u=e[13],g=e[2],x=e[6],w=e[10],p=e[14],y=e[3],v=e[7],_=e[11],P=e[15],R=i[0],A=i[4],D=i[8],M=i[12],S=i[1],L=i[5],k=i[9],B=i[13],j=i[2],Z=i[6],H=i[10],Q=i[14],Y=i[3],at=i[7],ct=i[11],pt=i[15];return s[0]=r*R+a*S+l*j+c*Y,s[4]=r*A+a*L+l*Z+c*at,s[8]=r*D+a*k+l*H+c*ct,s[12]=r*M+a*B+l*Q+c*pt,s[1]=f*R+d*S+h*j+u*Y,s[5]=f*A+d*L+h*Z+u*at,s[9]=f*D+d*k+h*H+u*ct,s[13]=f*M+d*B+h*Q+u*pt,s[2]=g*R+x*S+w*j+p*Y,s[6]=g*A+x*L+w*Z+p*at,s[10]=g*D+x*k+w*H+p*ct,s[14]=g*M+x*B+w*Q+p*pt,s[3]=y*R+v*S+_*j+P*Y,s[7]=y*A+v*L+_*Z+P*at,s[11]=y*D+v*k+_*H+P*ct,s[15]=y*M+v*B+_*Q+P*pt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],u=t[14],g=t[3],x=t[7],w=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*a*h+e*c*h+i*a*u-e*l*u)+x*(+n*l*u-n*c*h+s*r*h-i*r*u+i*c*f-s*l*f)+w*(+n*c*d-n*a*u-s*r*d+e*r*u+s*a*f-e*c*f)+p*(-i*a*f-n*l*d+n*a*h+i*r*d-e*r*h+e*l*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,e){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=n,i[14]=e),this}invert(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],u=t[11],g=t[12],x=t[13],w=t[14],p=t[15],y=d*w*c-x*h*c+x*l*u-a*w*u-d*l*p+a*h*p,v=g*h*c-f*w*c-g*l*u+r*w*u+f*l*p-r*h*p,_=f*x*c-g*d*c+g*a*u-r*x*u-f*a*p+r*d*p,P=g*d*l-f*x*l-g*a*h+r*x*h+f*a*w-r*d*w,R=n*y+e*v+i*_+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=y*A,t[1]=(x*h*s-d*w*s-x*i*u+e*w*u+d*i*p-e*h*p)*A,t[2]=(a*w*s-x*l*s+x*i*c-e*w*c-a*i*p+e*l*p)*A,t[3]=(d*l*s-a*h*s-d*i*c+e*h*c+a*i*u-e*l*u)*A,t[4]=v*A,t[5]=(f*w*s-g*h*s+g*i*u-n*w*u-f*i*p+n*h*p)*A,t[6]=(g*l*s-r*w*s-g*i*c+n*w*c+r*i*p-n*l*p)*A,t[7]=(r*h*s-f*l*s+f*i*c-n*h*c-r*i*u+n*l*u)*A,t[8]=_*A,t[9]=(g*d*s-f*x*s-g*e*u+n*x*u+f*e*p-n*d*p)*A,t[10]=(r*x*s-g*a*s+g*e*c-n*x*c-r*e*p+n*a*p)*A,t[11]=(f*a*s-r*d*s-f*e*c+n*d*c+r*e*u-n*a*u)*A,t[12]=P*A,t[13]=(f*x*i-g*d*i+g*e*h-n*x*h-f*e*w+n*d*w)*A,t[14]=(g*a*i-r*x*i-g*e*l+n*x*l+r*e*w-n*a*w)*A,t[15]=(r*d*i-f*a*i+f*e*l-n*d*l-r*e*h+n*a*h)*A,this}scale(t){const n=this.elements,e=t.x,i=t.y,s=t.z;return n[0]*=e,n[4]*=i,n[8]*=s,n[1]*=e,n[5]*=i,n[9]*=s,n[2]*=e,n[6]*=i,n[10]*=s,n[3]*=e,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,e,i))}makeTranslation(t,n,e){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,e,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),e=Math.sin(t);return this.set(1,0,0,0,0,n,-e,0,0,e,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,0,e,0,0,1,0,0,-e,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,0,e,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const e=Math.cos(n),i=Math.sin(n),s=1-e,r=t.x,a=t.y,l=t.z,c=s*r,f=s*a;return this.set(c*r+e,c*a-i*l,c*l+i*a,0,c*a+i*l,f*a+e,f*l-i*r,0,c*l-i*a,f*l+i*r,s*l*l+e,0,0,0,0,1),this}makeScale(t,n,e){return this.set(t,0,0,0,0,n,0,0,0,0,e,0,0,0,0,1),this}makeShear(t,n,e,i,s,r){return this.set(1,e,s,0,t,1,r,0,n,i,1,0,0,0,0,1),this}compose(t,n,e){const i=this.elements,s=n._x,r=n._y,a=n._z,l=n._w,c=s+s,f=r+r,d=a+a,h=s*c,u=s*f,g=s*d,x=r*f,w=r*d,p=a*d,y=l*c,v=l*f,_=l*d,P=e.x,R=e.y,A=e.z;return i[0]=(1-(x+p))*P,i[1]=(u+_)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(u-_)*R,i[5]=(1-(h+p))*R,i[6]=(w+y)*R,i[7]=0,i[8]=(g+v)*A,i[9]=(w-y)*A,i[10]=(1-(h+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,n,e){const i=this.elements;let s=go.set(i[0],i[1],i[2]).length();const r=go.set(i[4],i[5],i[6]).length(),a=go.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Bn.copy(this);const c=1/s,f=1/r,d=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),e.x=s,e.y=r,e.z=a,this}makePerspective(t,n,e,i,s,r,a=di){const l=this.elements,c=2*s/(n-t),f=2*s/(e-i),d=(n+t)/(n-t),h=(e+i)/(e-i);let u,g;if(a===di)u=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Ar)u=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,e,i,s,r,a=di){const l=this.elements,c=1/(n-t),f=1/(e-i),d=1/(r-s),h=(n+t)*c,u=(e+i)*f;let g,x;if(a===di)g=(r+s)*d,x=-2*d;else if(a===Ar)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,e=t.elements;for(let i=0;i<16;i++)if(n[i]!==e[i])return!1;return!0}fromArray(t,n=0){for(let e=0;e<16;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t[n+9]=e[9],t[n+10]=e[10],t[n+11]=e[11],t[n+12]=e[12],t[n+13]=e[13],t[n+14]=e[14],t[n+15]=e[15],t}}const go=new N,Bn=new ze,Gh=new N(0,0,0),Hh=new N(1,1,1),Si=new N,Ks=new N,Ln=new N,cc=new ze,fc=new Ho;class Zn{constructor(t=0,n=0,e=0,i=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=e,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,e,i=this._order){return this._x=t,this._y=n,this._z=e,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,e=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],f=i[9],d=i[2],h=i[6],u=i[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-un(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,e===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,e){return cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cc,n,e)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Jf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vh=0;const dc=new N,xo=new Ho,ri=new ze,Js=new N,ls=new N,Wh=new N,Xh=new Ho,hc=new N(1,0,0),uc=new N(0,1,0),pc=new N(0,0,1),mc={type:"added"},Yh={type:"removed"},wo={type:"childadded",child:null},ta={type:"childremoved",child:null};class an extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new N,n=new Zn,e=new Ho,i=new N(1,1,1);function s(){e.setFromEuler(n,!1)}function r(){n.setFromQuaternion(e,void 0,!1)}n._onChange(s),e._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new me}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return xo.setFromAxisAngle(t,n),this.quaternion.multiply(xo),this}rotateOnWorldAxis(t,n){return xo.setFromAxisAngle(t,n),this.quaternion.premultiply(xo),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(pc,t)}translateOnAxis(t,n){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,n,e){t.isVector3?Js.copy(t):Js.set(t,n,e);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ls,Js,this.up):ri.lookAt(Js,ls,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),xo.setFromRotationMatrix(ri),this.quaternion.premultiply(xo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mc),wo.child=t,this.dispatchEvent(wo),wo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Yh),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mc),wo.child=t,this.dispatchEvent(wo),wo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let e=0,i=this.children.length;e<i;e++){const r=this.children[e].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,e=[]){this[t]===n&&e.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,n,e);return e}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].updateMatrixWorld(t)}updateWorldMatrix(t,n){const e=this.parent;if(t===!0&&e!==null&&e.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",e={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(n){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),u=r(t.animations),g=r(t.nodes);a.length>0&&(e.geometries=a),l.length>0&&(e.materials=l),c.length>0&&(e.textures=c),f.length>0&&(e.images=f),d.length>0&&(e.shapes=d),h.length>0&&(e.skeletons=h),u.length>0&&(e.animations=u),g.length>0&&(e.nodes=g)}return e.object=i,e;function r(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let e=0;e<t.children.length;e++){const i=t.children[e];this.add(i.clone())}return this}}an.DEFAULT_UP=new N(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new N,ai=new N,ea=new N,li=new N,_o=new N,vo=new N,gc=new N,na=new N,ia=new N,oa=new N,sa=new De,ra=new De,aa=new De;class Hn{constructor(t=new N,n=new N,e=new N){this.a=t,this.b=n,this.c=e}static getNormal(t,n,e,i){i.subVectors(e,n),Gn.subVectors(t,n),i.cross(Gn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,n,e,i,s){Gn.subVectors(i,n),ai.subVectors(e,n),ea.subVectors(t,n);const r=Gn.dot(Gn),a=Gn.dot(ai),l=Gn.dot(ea),c=ai.dot(ai),f=ai.dot(ea),d=r*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,u=(c*l-a*f)*h,g=(r*f-a*l)*h;return s.set(1-u-g,g,u)}static containsPoint(t,n,e,i){return this.getBarycoord(t,n,e,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,n,e,i,s,r,a,l){return this.getBarycoord(t,n,e,i,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(r,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(t,n,e,i,s,r){return sa.setScalar(0),ra.setScalar(0),aa.setScalar(0),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(sa,s.x),r.addScaledVector(ra,s.y),r.addScaledVector(aa,s.z),r}static isFrontFacing(t,n,e,i){return Gn.subVectors(e,n),ai.subVectors(t,n),Gn.cross(ai).dot(i)<0}set(t,n,e){return this.a.copy(t),this.b.copy(n),this.c.copy(e),this}setFromPointsAndIndices(t,n,e,i){return this.a.copy(t[n]),this.b.copy(t[e]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,n,e,i){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,e),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Gn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Hn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,e,i,s){return Hn.getInterpolation(t,this.a,this.b,this.c,n,e,i,s)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const e=this.a,i=this.b,s=this.c;let r,a;_o.subVectors(i,e),vo.subVectors(s,e),na.subVectors(t,e);const l=_o.dot(na),c=vo.dot(na);if(l<=0&&c<=0)return n.copy(e);ia.subVectors(t,i);const f=_o.dot(ia),d=vo.dot(ia);if(f>=0&&d<=f)return n.copy(i);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(e).addScaledVector(_o,r);oa.subVectors(t,s);const u=_o.dot(oa),g=vo.dot(oa);if(g>=0&&u<=g)return n.copy(s);const x=u*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(e).addScaledVector(vo,a);const w=f*g-u*d;if(w<=0&&d-f>=0&&u-g>=0)return gc.subVectors(s,i),a=(d-f)/(d-f+(u-g)),n.copy(i).addScaledVector(gc,a);const p=1/(w+x+h);return r=x*p,a=h*p,n.copy(e).addScaledVector(_o,r).addScaledVector(vo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},js={h:0,s:0,l:0};function la(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class we{constructor(t,n,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,e)}set(t,n,e){if(n===void 0&&e===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,n,e);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,n),this}setRGB(t,n,e,i=Te.workingColorSpace){return this.r=t,this.g=n,this.b=e,Te.toWorkingColorSpace(this,i),this}setHSL(t,n,e,i=Te.workingColorSpace){if(t=Tl(t,1),n=un(n,0,1),e=un(e,0,1),n===0)this.r=this.g=this.b=e;else{const s=e<=.5?e*(1+n):e+n-e*n,r=2*e-s;this.r=la(r,s,t+1/3),this.g=la(r,s,t),this.b=la(r,s,t-1/3)}return Te.toWorkingColorSpace(this,i),this}setStyle(t,n=ge){function e(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ge){const e=jf[t.toLowerCase()];return e!==void 0?this.setHex(e,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Te.fromWorkingColorSpace(Mn.copy(this),t),Math.round(un(Mn.r*255,0,255))*65536+Math.round(un(Mn.g*255,0,255))*256+Math.round(un(Mn.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Te.workingColorSpace){Te.fromWorkingColorSpace(Mn.copy(this),n);const e=Mn.r,i=Mn.g,s=Mn.b,r=Math.max(e,i,s),a=Math.min(e,i,s);let l,c;const f=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=f<=.5?d/(r+a):d/(2-r-a),r){case e:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-e)/d+2;break;case s:l=(e-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Te.workingColorSpace){return Te.fromWorkingColorSpace(Mn.copy(this),n),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=ge){Te.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,e=Mn.g,i=Mn.b;return t!==ge?`color(${t} ${n.toFixed(3)} ${e.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(e*255)},${Math.round(i*255)})`}offsetHSL(t,n,e){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+n,bi.l+e)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,e){return this.r=t.r+(n.r-t.r)*e,this.g=t.g+(n.g-t.g)*e,this.b=t.b+(n.b-t.b)*e,this}lerpHSL(t,n){this.getHSL(bi),t.getHSL(js);const e=xs(bi.h,js.h,n),i=xs(bi.s,js.s,n),s=xs(bi.l,js.l,n);return this.setHSL(e,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,e=this.g,i=this.b,s=t.elements;return this.r=s[0]*n+s[3]*e+s[6]*i,this.g=s[1]*n+s[4]*e+s[7]*i,this.b=s[2]*n+s[5]*e+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new we;we.NAMES=jf;let Zh=0;class Vo extends Go{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Qi(),this.name="",this.blending=Co,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const e=t[n];if(e===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(e):i&&i.isVector3&&e&&e.isVector3?i.copy(e):this[n]=e}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const e={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(e.dispersion=this.dispersion),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(t).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(t).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(t).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(t).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(t).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapRotation!==void 0&&(e.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(e.blending=this.blending),this.side!==Ci&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==Ca&&(e.blendSrc=this.blendSrc),this.blendDst!==Pa&&(e.blendDst=this.blendDst),this.blendEquation!==Yi&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(e.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(n){const s=i(t.textures),r=i(t.images);s.length>0&&(e.textures=s),r.length>0&&(e.images=r)}return e}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let e=null;if(n!==null){const i=n.length;e=new Array(i);for(let s=0;s!==i;++s)e[s]=n[s].clone()}return this.clippingPlanes=e,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gt extends Vo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new N,Qs=new Yt;class Xn{constructor(t,n,e=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=e,this.usage=Ql,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,e){t*=this.itemSize,e*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=n.array[e+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,e=this.count;n<e;n++)Qs.fromBufferAttribute(this,n),Qs.applyMatrix3(t),this.setXY(n,Qs.x,Qs.y);else if(this.itemSize===3)for(let n=0,e=this.count;n<e;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix3(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let n=0,e=this.count;n<e;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix4(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let n=0,e=this.count;n<e;n++)qe.fromBufferAttribute(this,n),qe.applyNormalMatrix(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let n=0,e=this.count;n<e;n++)qe.fromBufferAttribute(this,n),qe.transformDirection(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let e=this.array[t*this.itemSize+n];return this.normalized&&(e=Eo(e,this.array)),e}setComponent(t,n,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+n]=e,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,e){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),e=En(e,this.array)),this.array[t+0]=n,this.array[t+1]=e,this}setXYZ(t,n,e,i){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),e=En(e,this.array),i=En(i,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=i,this}setXYZW(t,n,e,i,s){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),e=En(e,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ql&&(t.usage=this.usage),t}}class Qf extends Xn{constructor(t,n,e){super(new Uint16Array(t),n,e)}}class td extends Xn{constructor(t,n,e){super(new Uint32Array(t),n,e)}}class Ie extends Xn{constructor(t,n,e){super(new Float32Array(t),n,e)}}let qh=0;const Nn=new ze,ca=new an,yo=new N,Dn=new Is,cs=new Is,rn=new N;class mn extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?td:Qf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,e=0){this.groups.push({start:t,count:n,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const e=this.attributes.normal;if(e!==void 0){const s=new me().getNormalMatrix(t);e.applyNormalMatrix(s),e.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,n,e){return Nn.makeTranslation(t,n,e),this.applyMatrix4(Nn),this}scale(t,n,e){return Nn.makeScale(t,n,e),this.applyMatrix4(Nn),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ie(e,3))}else{for(let e=0,i=n.count;e<i;e++){const s=t[e];n.setXYZ(e,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,i=n.length;e<i;e++){const s=n[e];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const e=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const a=n[s];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Dn.min,cs.min),Dn.expandByPoint(rn),rn.addVectors(Dn.max,cs.max),Dn.expandByPoint(rn)):(Dn.expandByPoint(cs.min),Dn.expandByPoint(cs.max))}Dn.getCenter(e);let i=0;for(let s=0,r=t.count;s<r;s++)rn.fromBufferAttribute(t,s),i=Math.max(i,e.distanceToSquared(rn));if(n)for(let s=0,r=n.length;s<r;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)rn.fromBufferAttribute(a,c),l&&(yo.fromBufferAttribute(t,c),rn.add(yo)),i=Math.max(i,e.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const e=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*e.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<e.count;D++)a[D]=new N,l[D]=new N;const c=new N,f=new N,d=new N,h=new Yt,u=new Yt,g=new Yt,x=new N,w=new N;function p(D,M,S){c.fromBufferAttribute(e,D),f.fromBufferAttribute(e,M),d.fromBufferAttribute(e,S),h.fromBufferAttribute(s,D),u.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),f.sub(c),d.sub(c),u.sub(h),g.sub(h);const L=1/(u.x*g.y-g.x*u.y);isFinite(L)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(L),w.copy(d).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(L),a[D].add(x),a[M].add(x),a[S].add(x),l[D].add(w),l[M].add(w),l[S].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,M=y.length;D<M;++D){const S=y[D],L=S.start,k=S.count;for(let B=L,j=L+k;B<j;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new N,_=new N,P=new N,R=new N;function A(D){P.fromBufferAttribute(i,D),R.copy(P);const M=a[D];v.copy(M),v.sub(P.multiplyScalar(P.dot(M))).normalize(),_.crossVectors(R,M);const L=_.dot(l[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,L)}for(let D=0,M=y.length;D<M;++D){const S=y[D],L=S.start,k=S.count;for(let B=L,j=L+k;B<j;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let e=this.getAttribute("normal");if(e===void 0)e=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",e);else for(let h=0,u=e.count;h<u;h++)e.setXYZ(h,0,0,0);const i=new N,s=new N,r=new N,a=new N,l=new N,c=new N,f=new N,d=new N;if(t)for(let h=0,u=t.count;h<u;h+=3){const g=t.getX(h+0),x=t.getX(h+1),w=t.getX(h+2);i.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,w),f.subVectors(r,s),d.subVectors(i,s),f.cross(d),a.fromBufferAttribute(e,g),l.fromBufferAttribute(e,x),c.fromBufferAttribute(e,w),a.add(f),l.add(f),c.add(f),e.setXYZ(g,a.x,a.y,a.z),e.setXYZ(x,l.x,l.y,l.z),e.setXYZ(w,c.x,c.y,c.z)}else for(let h=0,u=n.count;h<u;h+=3)i.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,s),d.subVectors(i,s),f.cross(d),e.setXYZ(h+0,f.x,f.y,f.z),e.setXYZ(h+1,f.x,f.y,f.z),e.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,e=t.count;n<e;n++)rn.fromBufferAttribute(t,n),rn.normalize(),t.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let u=0,g=0;for(let x=0,w=l.length;x<w;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*f;for(let p=0;p<f;p++)h[g++]=c[u++]}return new Xn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,e=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,e);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],u=t(h,e);l.push(u)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const e=this.attributes;for(const l in e){const c=e[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const u=c[d];f.push(u.toJSON(t.data))}f.length>0&&(i[l]=f,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const e=t.index;e!==null&&this.setIndex(e.clone(n));const i=t.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(n))}const s=t.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,u=d.length;h<u;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,f=r.length;c<f;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new ze,Bi=new Kf,tr=new Dr,wc=new N,er=new N,nr=new N,ir=new N,fa=new N,or=new N,_c=new N,sr=new N;class m extends an{constructor(t=new mn,n=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const i=n[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const e=this.geometry,i=e.attributes.position,s=e.morphAttributes.position,r=e.morphTargetsRelative;n.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(fa.fromBufferAttribute(d,t),r?or.addScaledVector(fa,f):or.addScaledVector(fa.sub(n),f))}n.add(or)}return n}raycast(t,n){const e=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere),tr.applyMatrix4(s),Bi.copy(t.ray).recast(t.near),!(tr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(tr,wc)===null||Bi.origin.distanceToSquared(wc)>(t.far-t.near)**2))&&(xc.copy(s).invert(),Bi.copy(t.ray).applyMatrix4(xc),!(e.boundingBox!==null&&Bi.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(t,n,Bi)))}_computeIntersections(t,n,e){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){const w=h[g],p=r[w.materialIndex],y=Math.max(w.start,u.start),v=Math.min(a.count,Math.min(w.start+w.count,u.start+u.count));for(let _=y,P=v;_<P;_+=3){const R=a.getX(_),A=a.getX(_+1),D=a.getX(_+2);i=rr(this,p,t,e,c,f,d,R,A,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=w.materialIndex,n.push(i))}}else{const g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let w=g,p=x;w<p;w+=3){const y=a.getX(w),v=a.getX(w+1),_=a.getX(w+2);i=rr(this,r,t,e,c,f,d,y,v,_),i&&(i.faceIndex=Math.floor(w/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){const w=h[g],p=r[w.materialIndex],y=Math.max(w.start,u.start),v=Math.min(l.count,Math.min(w.start+w.count,u.start+u.count));for(let _=y,P=v;_<P;_+=3){const R=_,A=_+1,D=_+2;i=rr(this,p,t,e,c,f,d,R,A,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=w.materialIndex,n.push(i))}}else{const g=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let w=g,p=x;w<p;w+=3){const y=w,v=w+1,_=w+2;i=rr(this,r,t,e,c,f,d,y,v,_),i&&(i.faceIndex=Math.floor(w/3),n.push(i))}}}}function $h(o,t,n,e,i,s,r,a){let l;if(t.side===Rn?l=e.intersectTriangle(r,s,i,!0,a):l=e.intersectTriangle(i,s,r,t.side===Ci,a),l===null)return null;sr.copy(a),sr.applyMatrix4(o.matrixWorld);const c=n.ray.origin.distanceTo(sr);return c<n.near||c>n.far?null:{distance:c,point:sr.clone(),object:o}}function rr(o,t,n,e,i,s,r,a,l,c){o.getVertexPosition(a,er),o.getVertexPosition(l,nr),o.getVertexPosition(c,ir);const f=$h(o,t,n,e,er,nr,ir,_c);if(f){const d=new N;Hn.getBarycoord(_c,er,nr,ir,d),i&&(f.uv=Hn.getInterpolatedAttribute(i,a,l,c,d,new Yt)),s&&(f.uv1=Hn.getInterpolatedAttribute(s,a,l,c,d,new Yt)),r&&(f.normal=Hn.getInterpolatedAttribute(r,a,l,c,d,new N),f.normal.dot(e.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Hn.getNormal(er,nr,ir,h.normal),f.face=h,f.barycoord=d}return f}class E extends mn{constructor(t=1,n=1,e=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:e,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],f=[],d=[];let h=0,u=0;g("z","y","x",-1,-1,e,n,t,r,s,0),g("z","y","x",1,-1,e,n,-t,r,s,1),g("x","z","y",1,1,t,e,n,i,r,2),g("x","z","y",1,-1,t,e,-n,i,r,3),g("x","y","z",1,-1,t,n,e,i,s,4),g("x","y","z",-1,-1,t,n,-e,i,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function g(x,w,p,y,v,_,P,R,A,D,M){const S=_/A,L=P/D,k=_/2,B=P/2,j=R/2,Z=A+1,H=D+1;let Q=0,Y=0;const at=new N;for(let ct=0;ct<H;ct++){const pt=ct*L-B;for(let St=0;St<Z;St++){const vt=St*S-k;at[x]=vt*y,at[w]=pt*v,at[p]=j,c.push(at.x,at.y,at.z),at[x]=0,at[w]=0,at[p]=R>0?1:-1,f.push(at.x,at.y,at.z),d.push(St/A),d.push(1-ct/D),Q+=1}}for(let ct=0;ct<D;ct++)for(let pt=0;pt<A;pt++){const St=h+pt+Z*ct,vt=h+pt+Z*(ct+1),V=h+(pt+1)+Z*(ct+1),G=h+(pt+1)+Z*ct;l.push(St,vt,G),l.push(vt,V,G),Y+=6}a.addGroup(u,Y,M),u+=Y,h+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new E(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oo(o){const t={};for(const n in o){t[n]={};for(const e in o[n]){const i=o[n][e];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][e]=null):t[n][e]=i.clone():Array.isArray(i)?t[n][e]=i.slice():t[n][e]=i}}return t}function An(o){const t={};for(let n=0;n<o.length;n++){const e=Oo(o[n]);for(const i in e)t[i]=e[i]}return t}function Kh(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function ed(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Jh={clone:Oo,merge:An};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Vo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oo(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?n.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[i]={type:"m4",value:r.toArray()}:n.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const e={};for(const i in this.extensions)this.extensions[i]===!0&&(e[i]=!0);return Object.keys(e).length>0&&(n.extensions=e),n}}class nd extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=di}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new N,vc=new Yt,yc=new Yt;class Un extends nd{constructor(t=50,n=1,e=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=e,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,e){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,n){return this.getViewBounds(t,vc,yc),n.subVectors(yc,vc)}setViewOffset(t,n,e,i,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(gs*.5*this.fov)/this.zoom,e=2*n,i=this.aspect*e,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,n-=r.offsetY*e/c,i*=r.width/l,e*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-e,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mo=-90,So=1;class t0 extends an{constructor(t,n,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(Mo,So,t,n);i.layers=this.layers,this.add(i);const s=new Un(Mo,So,t,n);s.layers=this.layers,this.add(s);const r=new Un(Mo,So,t,n);r.layers=this.layers,this.add(r);const a=new Un(Mo,So,t,n);a.layers=this.layers,this.add(a);const l=new Un(Mo,So,t,n);l.layers=this.layers,this.add(l);const c=new Un(Mo,So,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[e,i,s,r,a,l]=n;for(const c of n)this.remove(c);if(t===di)e.up.set(0,1,0),e.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)e.up.set(0,-1,0),e.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:e,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=e.texture.generateMipmaps;e.texture.generateMipmaps=!1,t.setRenderTarget(e,0,i),t.render(n,s),t.setRenderTarget(e,1,i),t.render(n,r),t.setRenderTarget(e,2,i),t.render(n,a),t.setRenderTarget(e,3,i),t.render(n,l),t.setRenderTarget(e,4,i),t.render(n,c),e.texture.generateMipmaps=x,t.setRenderTarget(e,5,i),t.render(n,f),t.setRenderTarget(d,h,u),t.xr.enabled=g,e.texture.needsPMREMUpdate=!0}}class id extends Cn{constructor(t,n,e,i,s,r,a,l,c,f){t=t!==void 0?t:[],n=n!==void 0?n:Uo,super(t,n,e,i,s,r,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class e0 extends Ji{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const e={width:t,height:t,depth:1},i=[e,e,e,e,e,e];this.texture=new id(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const e={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new E(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Oo(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Rn,blending:Ai});s.uniforms.tEquirect.value=n;const r=new m(i,s),a=n.minFilter;return n.minFilter===$i&&(n.minFilter=Qn),new t0(1,10,this).update(t,r),n.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,e,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,e,i);t.setRenderTarget(s)}}const da=new N,n0=new N,i0=new me;class Wi{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,e,i){return this.normal.set(t,n,e),this.constant=i,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,e){const i=da.subVectors(e,n).cross(n0.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const e=t.delta(da),i=this.normal.dot(e);if(i===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(t.start).addScaledVector(e,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),e=this.distanceToPoint(t.end);return n<0&&e>0||e<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const e=n||i0.getNormalMatrix(t),i=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(e).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Dr,ar=new N;class El{constructor(t=new Wi,n=new Wi,e=new Wi,i=new Wi,s=new Wi,r=new Wi){this.planes=[t,n,e,i,s,r]}set(t,n,e,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(e),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const n=this.planes;for(let e=0;e<6;e++)n[e].copy(t.planes[e]);return this}setFromProjectionMatrix(t,n=di){const e=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],f=i[5],d=i[6],h=i[7],u=i[8],g=i[9],x=i[10],w=i[11],p=i[12],y=i[13],v=i[14],_=i[15];if(e[0].setComponents(l-s,h-c,w-u,_-p).normalize(),e[1].setComponents(l+s,h+c,w+u,_+p).normalize(),e[2].setComponents(l+r,h+f,w+g,_+y).normalize(),e[3].setComponents(l-r,h-f,w-g,_-y).normalize(),e[4].setComponents(l-a,h-d,w-x,_-v).normalize(),n===di)e[5].setComponents(l+a,h+d,w+x,_+v).normalize();else if(n===Ar)e[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const n=this.planes,e=t.center,i=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<i)return!1;return!0}intersectsBox(t){const n=this.planes;for(let e=0;e<6;e++){const i=n[e];if(ar.x=i.normal.x>0?t.max.x:t.min.x,ar.y=i.normal.y>0?t.max.y:t.min.y,ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let e=0;e<6;e++)if(n[e].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function od(){let o=null,t=!1,n=null,e=null;function i(s,r){n(s,r),e=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(e=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(e),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){o=s}}}function o0(o){const t=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=o.createBuffer();o.bindBuffer(l,h),o.bufferData(l,c,f),a.onUploadCallback();let u;if(c instanceof Float32Array)u=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=o.HALF_FLOAT:u=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=o.SHORT;else if(c instanceof Uint32Array)u=o.UNSIGNED_INT;else if(c instanceof Int32Array)u=o.INT;else if(c instanceof Int8Array)u=o.BYTE;else if(c instanceof Uint8Array)u=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function e(a,l,c){const f=l.array,d=l.updateRanges;if(o.bindBuffer(c,a),d.length===0)o.bufferSubData(c,0,f);else{d.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<d.length;u++){const g=d[h],x=d[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let u=0,g=d.length;u<g;u++){const x=d[u];o.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");e(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class qt extends mn{constructor(t=1,n=1,e=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:e,heightSegments:i};const s=t/2,r=n/2,a=Math.floor(e),l=Math.floor(i),c=a+1,f=l+1,d=t/a,h=n/l,u=[],g=[],x=[],w=[];for(let p=0;p<f;p++){const y=p*h-r;for(let v=0;v<c;v++){const _=v*d-s;g.push(_,-y,0),x.push(0,0,1),w.push(v/a),w.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,_=y+c*(p+1),P=y+1+c*(p+1),R=y+1+c*p;u.push(v,_,R),u.push(_,P,R)}this.setIndex(u),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(w,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.widthSegments,t.heightSegments)}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
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
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P0=`vec3 transformedNormal = objectNormal;
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
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K0=`uniform bool receiveShadow;
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
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#endif`,du=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
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
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vu=`#ifdef USE_MORPHTARGETS
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
#endif`,yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Su=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lu=`#ifdef OPAQUE
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
gl_Position = projectionMatrix * mvPosition;`,zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,dp=`#if DEPTH_PACKING == 3200
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
}`,hp=`#define DISTANCE
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
}`,up=`#define DISTANCE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#define LAMBERT
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
}`,yp=`#define LAMBERT
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
}`,Mp=`#define MATCAP
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
}`,Sp=`#define MATCAP
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
}`,bp=`#define NORMAL
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
}`,Tp=`#define NORMAL
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
}`,Ep=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,Rp=`#define STANDARD
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define TOON
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
}`,Ip=`#define TOON
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
}`,Lp=`uniform float size;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:f0,aomap_fragment:d0,aomap_pars_fragment:h0,batching_pars_vertex:u0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:x0,iridescence_fragment:w0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:S0,color_fragment:b0,color_pars_fragment:T0,color_pars_vertex:E0,color_vertex:A0,common:R0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:P0,displacementmap_pars_vertex:I0,displacementmap_vertex:L0,emissivemap_fragment:D0,emissivemap_pars_fragment:U0,colorspace_fragment:N0,colorspace_pars_fragment:z0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:k0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:J0,envmap_vertex:G0,fog_vertex:H0,fog_pars_vertex:V0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:Z0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:$0,lights_pars_begin:K0,lights_toon_fragment:j0,lights_toon_pars_fragment:Q0,lights_phong_fragment:tu,lights_phong_pars_fragment:eu,lights_physical_fragment:nu,lights_physical_pars_fragment:iu,lights_fragment_begin:ou,lights_fragment_maps:su,lights_fragment_end:ru,logdepthbuf_fragment:au,logdepthbuf_pars_fragment:lu,logdepthbuf_pars_vertex:cu,logdepthbuf_vertex:fu,map_fragment:du,map_pars_fragment:hu,map_particle_fragment:uu,map_particle_pars_fragment:pu,metalnessmap_fragment:mu,metalnessmap_pars_fragment:gu,morphinstance_vertex:xu,morphcolor_vertex:wu,morphnormal_vertex:_u,morphtarget_pars_vertex:vu,morphtarget_vertex:yu,normal_fragment_begin:Mu,normal_fragment_maps:Su,normal_pars_fragment:bu,normal_pars_vertex:Tu,normal_vertex:Eu,normalmap_pars_fragment:Au,clearcoat_normal_fragment_begin:Ru,clearcoat_normal_fragment_maps:Cu,clearcoat_pars_fragment:Pu,iridescence_pars_fragment:Iu,opaque_fragment:Lu,packing:Du,premultiplied_alpha_fragment:Uu,project_vertex:Nu,dithering_fragment:zu,dithering_pars_fragment:Fu,roughnessmap_fragment:Ou,roughnessmap_pars_fragment:ku,shadowmap_pars_fragment:Bu,shadowmap_pars_vertex:Gu,shadowmap_vertex:Hu,shadowmask_pars_fragment:Vu,skinbase_vertex:Wu,skinning_pars_vertex:Xu,skinning_vertex:Yu,skinnormal_vertex:Zu,specularmap_fragment:qu,specularmap_pars_fragment:$u,tonemapping_fragment:Ku,tonemapping_pars_fragment:Ju,transmission_fragment:ju,transmission_pars_fragment:Qu,uv_pars_fragment:tp,uv_pars_vertex:ep,uv_vertex:np,worldpos_vertex:ip,background_vert:op,background_frag:sp,backgroundCube_vert:rp,backgroundCube_frag:ap,cube_vert:lp,cube_frag:cp,depth_vert:fp,depth_frag:dp,distanceRGBA_vert:hp,distanceRGBA_frag:up,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:xp,meshbasic_vert:wp,meshbasic_frag:_p,meshlambert_vert:vp,meshlambert_frag:yp,meshmatcap_vert:Mp,meshmatcap_frag:Sp,meshnormal_vert:bp,meshnormal_frag:Tp,meshphong_vert:Ep,meshphong_frag:Ap,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Pp,meshtoon_frag:Ip,points_vert:Lp,points_frag:Dp,shadow_vert:Up,shadow_frag:Np,sprite_vert:zp,sprite_frag:Fp},zt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},jn={basic:{uniforms:An([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:An([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new we(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:An([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:An([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:An([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new we(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:An([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:An([zt.points,zt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:An([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:An([zt.common,zt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:An([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:An([zt.sprite,zt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:An([zt.common,zt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:An([zt.lights,zt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};jn.physical={uniforms:An([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const lr={r:0,b:0,g:0},Hi=new Zn,Op=new ze;function kp(o,t,n,e,i,s,r){const a=new we(0);let l=s===!0?0:1,c,f,d=null,h=0,u=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:t).get(v)),v}function x(y){let v=!1;const _=g(y);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(o.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(y,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===Ir)?(f===void 0&&(f=new m(new E(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Oo(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Hi.copy(v.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(Hi)),f.material.toneMapped=Te.getTransfer(_.colorSpace)!==Le,(d!==_||h!==_.version||u!==o.toneMapping)&&(f.material.needsUpdate=!0,d=_,h=_.version,u=o.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new m(new qt(2,2),new Pi({name:"BackgroundMaterial",uniforms:Oo(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Te.getTransfer(_.colorSpace)!==Le,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||u!==o.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,u=o.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(lr,ed(o)),e.buffers.color.setClear(lr.r,lr.g,lr.b,v,r)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:w}}function Bp(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),e={},i=h(null);let s=i,r=!1;function a(S,L,k,B,j){let Z=!1;const H=d(B,k,L);s!==H&&(s=H,c(s.object)),Z=u(S,B,k,j),Z&&g(S,B,k,j),j!==null&&t.update(j,o.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,_(S,L,k,B),j!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return o.createVertexArray()}function c(S){return o.bindVertexArray(S)}function f(S){return o.deleteVertexArray(S)}function d(S,L,k){const B=k.wireframe===!0;let j=e[S.id];j===void 0&&(j={},e[S.id]=j);let Z=j[L.id];Z===void 0&&(Z={},j[L.id]=Z);let H=Z[B];return H===void 0&&(H=h(l()),Z[B]=H),H}function h(S){const L=[],k=[],B=[];for(let j=0;j<n;j++)L[j]=0,k[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:B,object:S,attributes:{},index:null}}function u(S,L,k,B){const j=s.attributes,Z=L.attributes;let H=0;const Q=k.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const ct=j[Y];let pt=Z[Y];if(pt===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),ct===void 0||ct.attribute!==pt||pt&&ct.data!==pt.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(S,L,k,B){const j={},Z=L.attributes;let H=0;const Q=k.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let ct=Z[Y];ct===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const pt={};pt.attribute=ct,ct&&ct.data&&(pt.data=ct.data),j[Y]=pt,H++}s.attributes=j,s.attributesNum=H,s.index=B}function x(){const S=s.newAttributes;for(let L=0,k=S.length;L<k;L++)S[L]=0}function w(S){p(S,0)}function p(S,L){const k=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;k[S]=1,B[S]===0&&(o.enableVertexAttribArray(S),B[S]=1),j[S]!==L&&(o.vertexAttribDivisor(S,L),j[S]=L)}function y(){const S=s.newAttributes,L=s.enabledAttributes;for(let k=0,B=L.length;k<B;k++)L[k]!==S[k]&&(o.disableVertexAttribArray(k),L[k]=0)}function v(S,L,k,B,j,Z,H){H===!0?o.vertexAttribIPointer(S,L,k,j,Z):o.vertexAttribPointer(S,L,k,B,j,Z)}function _(S,L,k,B){x();const j=B.attributes,Z=k.getAttributes(),H=L.defaultAttributeValues;for(const Q in Z){const Y=Z[Q];if(Y.location>=0){let at=j[Q];if(at===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){const ct=at.normalized,pt=at.itemSize,St=t.get(at);if(St===void 0)continue;const vt=St.buffer,V=St.type,G=St.bytesPerElement,q=V===o.INT||V===o.UNSIGNED_INT||at.gpuType===_l;if(at.isInterleavedBufferAttribute){const nt=at.data,gt=nt.stride,At=at.offset;if(nt.isInstancedInterleavedBuffer){for(let ut=0;ut<Y.locationSize;ut++)p(Y.location+ut,nt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ut=0;ut<Y.locationSize;ut++)w(Y.location+ut);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let ut=0;ut<Y.locationSize;ut++)v(Y.location+ut,pt/Y.locationSize,V,ct,gt*G,(At+pt/Y.locationSize*ut)*G,q)}else{if(at.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)p(Y.location+nt,at.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let nt=0;nt<Y.locationSize;nt++)w(Y.location+nt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let nt=0;nt<Y.locationSize;nt++)v(Y.location+nt,pt/Y.locationSize,V,ct,pt*G,pt/Y.locationSize*nt*G,q)}}else if(H!==void 0){const ct=H[Q];if(ct!==void 0)switch(ct.length){case 2:o.vertexAttrib2fv(Y.location,ct);break;case 3:o.vertexAttrib3fv(Y.location,ct);break;case 4:o.vertexAttrib4fv(Y.location,ct);break;default:o.vertexAttrib1fv(Y.location,ct)}}}}y()}function P(){D();for(const S in e){const L=e[S];for(const k in L){const B=L[k];for(const j in B)f(B[j].object),delete B[j];delete L[k]}delete e[S]}}function R(S){if(e[S.id]===void 0)return;const L=e[S.id];for(const k in L){const B=L[k];for(const j in B)f(B[j].object),delete B[j];delete L[k]}delete e[S.id]}function A(S){for(const L in e){const k=e[L];if(k[S.id]===void 0)continue;const B=k[S.id];for(const j in B)f(B[j].object),delete B[j];delete k[S.id]}}function D(){M(),r=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:w,disableUnusedAttributes:y}}function Gp(o,t,n){let e;function i(c){e=c}function s(c,f){o.drawArrays(e,c,f),n.update(f,e,1)}function r(c,f,d){d!==0&&(o.drawArraysInstanced(e,c,f,d),n.update(f,e,d))}function a(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(e,c,0,f,0,d);let u=0;for(let g=0;g<d;g++)u+=f[g];n.update(u,e,1)}function l(c,f,d,h){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)r(c[g],f[g],h[g]);else{u.multiDrawArraysInstancedWEBGL(e,c,0,f,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x]*h[x];n.update(g,e,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hp(o,t,n,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==Vn&&e.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pi&&e.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!D)}function l(A){if(A==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),w=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:w,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:P,maxSamples:R}}function Vp(o){const t=this;let n=null,e=0,i=!1,s=!1;const r=new Wi,a=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const u=d.length!==0||h||e!==0||i;return i=h,e=d.length,u},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,u){const g=d.clippingPlanes,x=d.clipIntersection,w=d.clipShadows,p=o.get(d);if(!i||g===null||g.length===0||s&&!w)s?f(null):c();else{const y=s?0:e,v=y*4;let _=p.clippingState||null;l.value=_,_=f(g,h,v,u);for(let P=0;P!==v;++P)_[P]=n[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=e>0),t.numPlanes=e,t.numIntersection=0}function f(d,h,u,g){const x=d!==null?d.length:0;let w=null;if(x!==0){if(w=l.value,g!==!0||w===null){const p=u+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(w===null||w.length<p)&&(w=new Float32Array(p));for(let v=0,_=u;v!==x;++v,_+=4)r.copy(d[v]).applyMatrix4(y,a),r.normal.toArray(w,_),w[_+3]=r.constant}l.value=w,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,w}}function Wp(o){let t=new WeakMap;function n(r,a){return a===Oa?r.mapping=Uo:a===ka&&(r.mapping=No),r}function e(r){if(r&&r.isTexture){const a=r.mapping;if(a===Oa||a===ka)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new e0(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),n(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:e,dispose:s}}class sd extends nd{constructor(t=-1,n=1,e=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=e,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,e,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=e-t,r=e+t,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ao=4,Mc=[.125,.215,.35,.446,.526,.582],Zi=20,ha=new sd,Sc=new we;let ua=null,pa=0,ma=0,ga=!1;const Xi=(1+Math.sqrt(5))/2,bo=1/Xi,bc=[new N(-Xi,bo,0),new N(Xi,bo,0),new N(-bo,0,Xi),new N(bo,0,Xi),new N(0,Xi,-bo),new N(0,Xi,bo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,e=.1,i=100){ua=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,e,i,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,pa,ma),this._renderer.xr.enabled=ga,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Uo||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const e=n||this._allocateTargets();return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,e={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Ps,format:Vn,colorSpace:Bo,depthBuffer:!1},i=Ec(t,n,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(t,n,e);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(s)),this._blurMaterial=Yp(s,t,n)}return i}_compileMaterial(t){const n=new m(this._lodPlanes[0],t);this._renderer.compile(n,ha)}_sceneToCubeUV(t,n,e,i){const a=new Un(90,1,n,e),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Sc),f.toneMapping=Ri,f.autoClear=!1;const u=new Gt({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new m(new E,u);let x=!1;const w=t.background;w?w.isColor&&(u.color.copy(w),t.background=null,x=!0):(u.color.copy(Sc),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;cr(i,y*v,p>2?v:0,v,v),f.setRenderTarget(i),x&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=w}_textureToCubeUV(t,n){const e=this._renderer,i=t.mapping===Uo||t.mapping===No;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new m(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;cr(n,0,0,3*l,2*l),e.setRenderTarget(n),e.render(r,ha)}_applyPMREM(t){const n=this._renderer,e=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bc[(i-s-1)%bc.length];this._blur(t,s-1,s,r,a)}n.autoClear=e}_blur(t,n,e,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,e,i,"latitudinal",s),this._halfBlur(r,t,e,e,i,"longitudinal",s)}_halfBlur(t,n,e,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new m(this._lodPlanes[i],c),h=c.uniforms,u=this._sizeLods[e]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Zi-1),x=s/g,w=isFinite(s)?1+Math.floor(f*x):Zi;w>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${Zi}`);const p=[];let y=0;for(let A=0;A<Zi;++A){const D=A/x,M=Math.exp(-D*D/2);p.push(M),A===0?y+=M:A<w&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;h.envMap.value=t.texture,h.samples.value=w,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-e;const _=this._sizeLods[i],P=3*_*(i>v-Ao?i-v+Ao:0),R=4*(this._cubeSize-_);cr(n,P,R,3*_,2*_),l.setRenderTarget(n),l.render(d,ha)}}function Xp(o){const t=[],n=[],e=[];let i=o;const s=o-Ao+1+Mc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);n.push(a);let l=1/a;r>o-Ao?l=Mc[r-o+Ao-1]:r===0&&(l=0),e.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],u=6,g=6,x=3,w=2,p=1,y=new Float32Array(x*g*u),v=new Float32Array(w*g*u),_=new Float32Array(p*g*u);for(let R=0;R<u;R++){const A=R%3*2/3-1,D=R>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(M,x*g*R),v.set(h,w*g*R);const S=[R,R,R,R,R,R];_.set(S,p*g*R)}const P=new mn;P.setAttribute("position",new Xn(y,x)),P.setAttribute("uv",new Xn(v,w)),P.setAttribute("faceIndex",new Xn(_,p)),t.push(P),i>Ao&&i--}return{lodPlanes:t,sizeLods:n,sigmas:e}}function Ec(o,t,n){const e=new Ji(o,t,n);return e.texture.mapping=Ir,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function cr(o,t,n,e,i){o.viewport.set(t,n,e,i),o.scissor.set(t,n,e,i)}function Yp(o,t,n){const e=new Float32Array(Zi),i=new N(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ac(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Rc(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function Zp(o){let t=new WeakMap,n=null;function e(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oa||l===ka,f=l===Uo||l===No;if(c||f){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Tc(o)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return c&&u&&u.height>0||f&&u&&i(u)?(n===null&&(n=new Tc(o)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:e,dispose:r}}function qp(o){const t={};function n(e){if(t[e]!==void 0)return t[e];let i;switch(e){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(e)}return t[e]=i,i}return{has:function(e){return n(e)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(e){const i=n(e);return i===null&&us("THREE.WebGLRenderer: "+e+" extension not supported."),i}}}function $p(o,t,n,e){const i={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let w=0,p=x.length;w<p;w++)t.remove(x[w])}h.removeEventListener("dispose",r),delete i[h.id];const u=s.get(h);u&&(t.remove(u),s.delete(h)),e.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],o.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const x=u[g];for(let w=0,p=x.length;w<p;w++)t.update(x[w],o.ARRAY_BUFFER)}}function c(d){const h=[],u=d.index,g=d.attributes.position;let x=0;if(u!==null){const y=u.array;x=u.version;for(let v=0,_=y.length;v<_;v+=3){const P=y[v+0],R=y[v+1],A=y[v+2];h.push(P,R,R,A,A,P)}}else if(g!==void 0){const y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const P=v+0,R=v+1,A=v+2;h.push(P,R,R,A,A,P)}}else return;const w=new(Zf(h)?td:Qf)(h,1);w.version=x;const p=s.get(d);p&&t.remove(p),s.set(d,w)}function f(d){const h=s.get(d);if(h){const u=d.index;u!==null&&h.version<u.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Kp(o,t,n){let e;function i(h){e=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function l(h,u){o.drawElements(e,u,s,h*r),n.update(u,e,1)}function c(h,u,g){g!==0&&(o.drawElementsInstanced(e,u,s,h*r,g),n.update(u,e,g))}function f(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(e,u,0,s,h,0,g);let w=0;for(let p=0;p<g;p++)w+=u[p];n.update(w,e,1)}function d(h,u,g,x){if(g===0)return;const w=t.get("WEBGL_multi_draw");if(w===null)for(let p=0;p<h.length;p++)c(h[p]/r,u[p],x[p]);else{w.multiDrawElementsInstancedWEBGL(e,u,0,s,h,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*x[y];n.update(p,e,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Jp(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function e(s,r,a){switch(n.calls++,r){case o.TRIANGLES:n.triangles+=a*(s/3);break;case o.LINES:n.lines+=a*(s/2);break;case o.LINE_STRIP:n.lines+=a*(s-1);break;case o.LINE_LOOP:n.lines+=a*s;break;case o.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:e}}function jp(o,t,n){const e=new WeakMap,i=new De;function s(r,a,l){const c=r.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=e.get(a);if(h===void 0||h.count!==d){let S=function(){D.dispose(),e.delete(a),a.removeEventListener("dispose",S)};var u=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),w===!0&&(_=3);let P=a.attributes.position.count*_,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*R*4*d),D=new $f(A,P,R,d);D.type=fi,D.needsUpdate=!0;const M=_*4;for(let L=0;L<d;L++){const k=p[L],B=y[L],j=v[L],Z=P*R*4*L;for(let H=0;H<k.count;H++){const Q=H*M;g===!0&&(i.fromBufferAttribute(k,H),A[Z+Q+0]=i.x,A[Z+Q+1]=i.y,A[Z+Q+2]=i.z,A[Z+Q+3]=0),x===!0&&(i.fromBufferAttribute(B,H),A[Z+Q+4]=i.x,A[Z+Q+5]=i.y,A[Z+Q+6]=i.z,A[Z+Q+7]=0),w===!0&&(i.fromBufferAttribute(j,H),A[Z+Q+8]=i.x,A[Z+Q+9]=i.y,A[Z+Q+10]=i.z,A[Z+Q+11]=j.itemSize===4?i.w:1)}}h={count:d,texture:D,size:new Yt(P,R)},e.set(a,h),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,n);else{let g=0;for(let w=0;w<c.length;w++)g+=c[w];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",x),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(o,"morphTargetsTextureSize",h.size)}return{update:s}}function Qp(o,t,n,e){let i=new WeakMap;function s(l){const c=e.render.frame,f=l.geometry,d=t.get(l,f);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}class rd extends Cn{constructor(t,n,e,i,s,r,a,l,c,f=Po){if(f!==Po&&f!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");e===void 0&&f===Po&&(e=Ki),e===void 0&&f===Fo&&(e=zo),super(null,i,s,r,a,l,f,e,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ad=new Cn,Cc=new rd(1,1),ld=new $f,cd=new kh,fd=new id,Pc=[],Ic=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Uc=new Float32Array(4);function Wo(o,t,n){const e=o[0];if(e<=0||e>0)return o;const i=t*n;let s=Pc[i];if(s===void 0&&(s=new Float32Array(i),Pc[i]=s),t!==0){e.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=n,o[r].toArray(s,a)}return s}function Qe(o,t){if(o.length!==t.length)return!1;for(let n=0,e=o.length;n<e;n++)if(o[n]!==t[n])return!1;return!0}function tn(o,t){for(let n=0,e=t.length;n<e;n++)o[n]=t[n]}function Ur(o,t){let n=Ic[t];n===void 0&&(n=new Int32Array(t),Ic[t]=n);for(let e=0;e!==t;++e)n[e]=o.allocateTextureUnit();return n}function tm(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function em(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;o.uniform2fv(this.addr,t),tn(n,t)}}function nm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qe(n,t))return;o.uniform3fv(this.addr,t),tn(n,t)}}function im(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;o.uniform4fv(this.addr,t),tn(n,t)}}function om(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Qe(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),tn(n,t)}else{if(Qe(n,e))return;Uc.set(e),o.uniformMatrix2fv(this.addr,!1,Uc),tn(n,e)}}function sm(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Qe(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),tn(n,t)}else{if(Qe(n,e))return;Dc.set(e),o.uniformMatrix3fv(this.addr,!1,Dc),tn(n,e)}}function rm(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Qe(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),tn(n,t)}else{if(Qe(n,e))return;Lc.set(e),o.uniformMatrix4fv(this.addr,!1,Lc),tn(n,e)}}function am(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function lm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;o.uniform2iv(this.addr,t),tn(n,t)}}function cm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;o.uniform3iv(this.addr,t),tn(n,t)}}function fm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;o.uniform4iv(this.addr,t),tn(n,t)}}function dm(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function hm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;o.uniform2uiv(this.addr,t),tn(n,t)}}function um(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;o.uniform3uiv(this.addr,t),tn(n,t)}}function pm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;o.uniform4uiv(this.addr,t),tn(n,t)}}function mm(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Cc.compareFunction=Yf,s=Cc):s=ad,n.setTexture2D(t||s,i)}function gm(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTexture3D(t||cd,i)}function xm(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTextureCube(t||fd,i)}function wm(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTexture2DArray(t||ld,i)}function _m(o){switch(o){case 5126:return tm;case 35664:return em;case 35665:return nm;case 35666:return im;case 35674:return om;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return hm;case 36295:return um;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return wm}}function vm(o,t){o.uniform1fv(this.addr,t)}function ym(o,t){const n=Wo(t,this.size,2);o.uniform2fv(this.addr,n)}function Mm(o,t){const n=Wo(t,this.size,3);o.uniform3fv(this.addr,n)}function Sm(o,t){const n=Wo(t,this.size,4);o.uniform4fv(this.addr,n)}function bm(o,t){const n=Wo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Tm(o,t){const n=Wo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Em(o,t){const n=Wo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Am(o,t){o.uniform1iv(this.addr,t)}function Rm(o,t){o.uniform2iv(this.addr,t)}function Cm(o,t){o.uniform3iv(this.addr,t)}function Pm(o,t){o.uniform4iv(this.addr,t)}function Im(o,t){o.uniform1uiv(this.addr,t)}function Lm(o,t){o.uniform2uiv(this.addr,t)}function Dm(o,t){o.uniform3uiv(this.addr,t)}function Um(o,t){o.uniform4uiv(this.addr,t)}function Nm(o,t,n){const e=this.cache,i=t.length,s=Ur(n,i);Qe(e,s)||(o.uniform1iv(this.addr,s),tn(e,s));for(let r=0;r!==i;++r)n.setTexture2D(t[r]||ad,s[r])}function zm(o,t,n){const e=this.cache,i=t.length,s=Ur(n,i);Qe(e,s)||(o.uniform1iv(this.addr,s),tn(e,s));for(let r=0;r!==i;++r)n.setTexture3D(t[r]||cd,s[r])}function Fm(o,t,n){const e=this.cache,i=t.length,s=Ur(n,i);Qe(e,s)||(o.uniform1iv(this.addr,s),tn(e,s));for(let r=0;r!==i;++r)n.setTextureCube(t[r]||fd,s[r])}function Om(o,t,n){const e=this.cache,i=t.length,s=Ur(n,i);Qe(e,s)||(o.uniform1iv(this.addr,s),tn(e,s));for(let r=0;r!==i;++r)n.setTexture2DArray(t[r]||ld,s[r])}function km(o){switch(o){case 5126:return vm;case 35664:return ym;case 35665:return Mm;case 35666:return Sm;case 35674:return bm;case 35675:return Tm;case 35676:return Em;case 5124:case 35670:return Am;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Pm;case 5125:return Im;case 36294:return Lm;case 36295:return Dm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}class Bm{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.setValue=_m(n.type)}}class Gm{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=km(n.type)}}class Hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,e){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,n[a.id],e)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Nc(o,t){o.seq.push(t),o.map[t.id]=t}function Vm(o,t,n){const e=o.name,i=e.length;for(xa.lastIndex=0;;){const s=xa.exec(e),r=xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Nc(n,c===void 0?new Bm(a,o,t):new Gm(a,o,t));break}else{let d=n.map[a];d===void 0&&(d=new Hm(a),Nc(n,d)),n=d}}}class Er{constructor(t,n){this.seq=[],this.map={};const e=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<e;++i){const s=t.getActiveUniform(n,i),r=t.getUniformLocation(n,s.name);Vm(s,r,this)}}setValue(t,n,e,i){const s=this.map[n];s!==void 0&&s.setValue(t,e,i)}setOptional(t,n,e){const i=n[e];i!==void 0&&this.setValue(t,e,i)}static upload(t,n,e,i){for(let s=0,r=n.length;s!==r;++s){const a=n[s],l=e[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,n){const e=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in n&&e.push(r)}return e}}function zc(o,t,n){const e=o.createShader(t);return o.shaderSource(e,n),o.compileShader(e),e}const Wm=37297;let Xm=0;function Ym(o,t){const n=o.split(`
`),e=[],i=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=i;r<s;r++){const a=r+1;e.push(`${a===t?">":" "} ${a}: ${n[r]}`)}return e.join(`
`)}const Fc=new me;function Zm(o){Te._getMatrix(Fc,Te.workingColorSpace,o);const t=`mat3( ${Fc.elements.map(n=>n.toFixed(4))} )`;switch(Te.getTransfer(o)){case Lr:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Oc(o,t,n){const e=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(e&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+Ym(o.getShaderSource(t),r)}else return i}function qm(o,t){const n=Zm(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function $m(o,t){let n;switch(t){case jd:n="Linear";break;case Qd:n="Reinhard";break;case th:n="Cineon";break;case Df:n="ACESFilmic";break;case nh:n="AgX";break;case ih:n="Neutral";break;case eh:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fr=new N;function Km(){Te.getLuminanceCoefficients(fr);const o=fr.x.toFixed(4),t=fr.y.toFixed(4),n=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function jm(o){const t=[];for(const n in o){const e=o[n];e!==!1&&t.push("#define "+n+" "+e)}return t.join(`
`)}function Qm(o,t){const n={},e=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<e;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),n[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return n}function ps(o){return o!==""}function kc(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(o){return o.replace(t2,n2)}const e2=new Map;function n2(o,t){let n=xe[t];if(n===void 0){const e=e2.get(t);if(e!==void 0)n=xe[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return ul(n)}const i2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(o){return o.replace(i2,o2)}function o2(o,t,n,e){let i="";for(let s=parseInt(t);s<parseInt(n);s++)i+=e.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hc(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function s2(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Pf?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===If?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function r2(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Uo:case No:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a2(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case No:t="ENVMAP_MODE_REFRACTION";break}return t}function l2(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lf:t="ENVMAP_BLENDING_MULTIPLY";break;case Kd:t="ENVMAP_BLENDING_MIX";break;case Jd:t="ENVMAP_BLENDING_ADD";break}return t}function c2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,e=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:e,maxMip:n}}function f2(o,t,n,e){const i=o.getContext(),s=n.defines;let r=n.vertexShader,a=n.fragmentShader;const l=s2(n),c=r2(n),f=a2(n),d=l2(n),h=c2(n),u=Jm(n),g=jm(s),x=i.createProgram();let w,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(w=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ps).join(`
`),w.length>0&&(w+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(w=[Hc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[Hc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?xe.tonemapping_pars_fragment:"",n.toneMapping!==Ri?$m("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,qm("linearToOutputTexel",n.outputColorSpace),Km(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`)),r=ul(r),r=kc(r,n),r=Bc(r,n),a=ul(a),a=kc(a,n),a=Bc(a,n),r=Gc(r),a=Gc(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,w=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,p=["#define varying in",n.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+w+r,_=y+p+a,P=zc(i,i.VERTEX_SHADER,v),R=zc(i,i.FRAGMENT_SHADER,_);i.attachShader(x,P),i.attachShader(x,R),n.index0AttributeName!==void 0?i.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(L){if(o.debug.checkShaderErrors){const k=i.getProgramInfoLog(x).trim(),B=i.getShaderInfoLog(P).trim(),j=i.getShaderInfoLog(R).trim();let Z=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,x,P,R);else{const Q=Oc(i,P,"vertex"),Y=Oc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Q+`
`+Y)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||j==="")&&(H=!1);H&&(L.diagnostics={runnable:Z,programLog:k,vertexShader:{log:B,prefix:w},fragmentShader:{log:j,prefix:p}})}i.deleteShader(P),i.deleteShader(R),D=new Er(i,x),M=Qm(i,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,Wm)),S},this.destroy=function(){e.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}let d2=0;class h2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,e=t.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(e),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const e of n)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let e=n.get(t);return e===void 0&&(e=new Set,n.set(t,e)),e}_getShaderStage(t){const n=this.shaderCache;let e=n.get(t);return e===void 0&&(e=new u2(t),n.set(t,e)),e}}class u2{constructor(t){this.id=d2++,this.code=t,this.usedTimes=0}}function p2(o,t,n,e,i,s,r){const a=new Jf,l=new h2,c=new Set,f=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function w(M,S,L,k,B){const j=k.fog,Z=B.geometry,H=M.isMeshStandardMaterial?k.environment:null,Q=(M.isMeshStandardMaterial?n:t).get(M.envMap||H),Y=Q&&Q.mapping===Ir?Q.image.height:null,at=g[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pt=ct!==void 0?ct.length:0;let St=0;Z.morphAttributes.position!==void 0&&(St=1),Z.morphAttributes.normal!==void 0&&(St=2),Z.morphAttributes.color!==void 0&&(St=3);let vt,V,G,q;if(at){const oe=jn[at];vt=oe.vertexShader,V=oe.fragmentShader}else vt=M.vertexShader,V=M.fragmentShader,l.update(M),G=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const nt=o.getRenderTarget(),gt=o.state.buffers.depth.getReversed(),At=B.isInstancedMesh===!0,ut=B.isBatchedMesh===!0,Ut=!!M.map,It=!!M.matcap,$t=!!Q,U=!!M.aoMap,Ht=!!M.lightMap,Et=!!M.bumpMap,Ot=!!M.normalMap,Lt=!!M.displacementMap,Kt=!!M.emissiveMap,Tt=!!M.metalnessMap,C=!!M.roughnessMap,b=M.anisotropy>0,X=M.clearcoat>0,it=M.dispersion>0,ot=M.iridescence>0,et=M.sheen>0,mt=M.transmission>0,xt=b&&!!M.anisotropyMap,ft=X&&!!M.clearcoatMap,Rt=X&&!!M.clearcoatNormalMap,lt=X&&!!M.clearcoatRoughnessMap,Mt=ot&&!!M.iridescenceMap,Zt=ot&&!!M.iridescenceThicknessMap,ie=et&&!!M.sheenColorMap,Dt=et&&!!M.sheenRoughnessMap,Qt=!!M.specularMap,Bt=!!M.specularColorMap,fe=!!M.specularIntensityMap,z=mt&&!!M.transmissionMap,bt=mt&&!!M.thicknessMap,J=!!M.gradientMap,st=!!M.alphaMap,_t=M.alphaTest>0,wt=!!M.alphaHash,Vt=!!M.extensions;let le=Ri;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=o.toneMapping);const Ae={shaderID:at,shaderType:M.type,shaderName:M.name,vertexShader:vt,fragmentShader:V,defines:M.defines,customVertexShaderID:G,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:ut,batchingColor:ut&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:nt===null?o.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Bo,alphaToCoverage:!!M.alphaToCoverage,map:Ut,matcap:It,envMap:$t,envMapMode:$t&&Q.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:Ht,bumpMap:Et,normalMap:Ot,displacementMap:h&&Lt,emissiveMap:Kt,normalMapObjectSpace:Ot&&M.normalMapType===ah,normalMapTangentSpace:Ot&&M.normalMapType===Xf,metalnessMap:Tt,roughnessMap:C,anisotropy:b,anisotropyMap:xt,clearcoat:X,clearcoatMap:ft,clearcoatNormalMap:Rt,clearcoatRoughnessMap:lt,dispersion:it,iridescence:ot,iridescenceMap:Mt,iridescenceThicknessMap:Zt,sheen:et,sheenColorMap:ie,sheenRoughnessMap:Dt,specularMap:Qt,specularColorMap:Bt,specularIntensityMap:fe,transmission:mt,transmissionMap:z,thicknessMap:bt,gradientMap:J,opaque:M.transparent===!1&&M.blending===Co&&M.alphaToCoverage===!1,alphaMap:st,alphaTest:_t,alphaHash:wt,combine:M.combine,mapUv:Ut&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:Ht&&x(M.lightMap.channel),bumpMapUv:Et&&x(M.bumpMap.channel),normalMapUv:Ot&&x(M.normalMap.channel),displacementMapUv:Lt&&x(M.displacementMap.channel),emissiveMapUv:Kt&&x(M.emissiveMap.channel),metalnessMapUv:Tt&&x(M.metalnessMap.channel),roughnessMapUv:C&&x(M.roughnessMap.channel),anisotropyMapUv:xt&&x(M.anisotropyMap.channel),clearcoatMapUv:ft&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(M.sheenRoughnessMap.channel),specularMapUv:Qt&&x(M.specularMap.channel),specularColorMapUv:Bt&&x(M.specularColorMap.channel),specularIntensityMapUv:fe&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:bt&&x(M.thicknessMap.channel),alphaMapUv:st&&x(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ot||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Ut||st),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:gt,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:Ut&&M.map.isVideoTexture===!0&&Te.getTransfer(M.map.colorSpace)===Le,decodeVideoTextureEmissive:Kt&&M.emissiveMap.isVideoTexture===!0&&Te.getTransfer(M.emissiveMap.colorSpace)===Le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===Rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&M.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(o.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const S=g[M.type];let L;if(S){const k=jn[S];L=Jh.clone(k.uniforms)}else L=M.uniforms;return L}function P(M,S){let L;for(let k=0,B=f.length;k<B;k++){const j=f[k];if(j.cacheKey===S){L=j,++L.usedTimes;break}}return L===void 0&&(L=new f2(o,S,M,s),f.push(L)),L}function R(M){if(--M.usedTimes===0){const S=f.indexOf(M);f[S]=f[f.length-1],f.pop(),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:w,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:f,dispose:D}}function m2(){let o=new WeakMap;function t(r){return o.has(r)}function n(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:t,get:n,remove:e,update:i,dispose:s}}function g2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Vc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Wc(){const o=[];let t=0;const n=[],e=[],i=[];function s(){t=0,n.length=0,e.length=0,i.length=0}function r(d,h,u,g,x,w){let p=o[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:u,groupOrder:g,renderOrder:d.renderOrder,z:x,group:w},o[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=w),t++,p}function a(d,h,u,g,x,w){const p=r(d,h,u,g,x,w);u.transmission>0?e.push(p):u.transparent===!0?i.push(p):n.push(p)}function l(d,h,u,g,x,w){const p=r(d,h,u,g,x,w);u.transmission>0?e.unshift(p):u.transparent===!0?i.unshift(p):n.unshift(p)}function c(d,h){n.length>1&&n.sort(d||g2),e.length>1&&e.sort(h||Vc),i.length>1&&i.sort(h||Vc)}function f(){for(let d=t,h=o.length;d<h;d++){const u=o[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:n,transmissive:e,transparent:i,init:s,push:a,unshift:l,finish:f,sort:c}}function x2(){let o=new WeakMap;function t(e,i){const s=o.get(e);let r;return s===void 0?(r=new Wc,o.set(e,[r])):i>=s.length?(r=new Wc,s.push(r)):r=s[i],r}function n(){o=new WeakMap}return{get:t,dispose:n}}function w2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new we};break;case"SpotLight":n={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return o[t.id]=n,n}}}function _2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let v2=0;function y2(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function M2(o){const t=new w2,n=_2(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)e.probe.push(new N);const i=new N,s=new ze,r=new ze;function a(c){let f=0,d=0,h=0;for(let M=0;M<9;M++)e.probe[M].set(0,0,0);let u=0,g=0,x=0,w=0,p=0,y=0,v=0,_=0,P=0,R=0,A=0;c.sort(y2);for(let M=0,S=c.length;M<S;M++){const L=c[M],k=L.color,B=L.intensity,j=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=k.r*B,d+=k.g*B,h+=k.b*B;else if(L.isLightProbe){for(let H=0;H<9;H++)e.probe[H].addScaledVector(L.sh.coefficients[H],B);A++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,Y=n.get(L);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,e.directionalShadow[u]=Y,e.directionalShadowMap[u]=Z,e.directionalShadowMatrix[u]=L.shadow.matrix,y++}e.directional[u]=H,u++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(k).multiplyScalar(B),H.distance=j,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,e.spot[x]=H;const Q=L.shadow;if(L.map&&(e.spotLightMap[P]=L.map,P++,Q.updateMatrices(L),L.castShadow&&R++),e.spotLightMatrix[x]=Q.matrix,L.castShadow){const Y=n.get(L);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,e.spotShadow[x]=Y,e.spotShadowMap[x]=Z,_++}x++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(k).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),e.rectArea[w]=H,w++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Q=L.shadow,Y=n.get(L);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,e.pointShadow[g]=Y,e.pointShadowMap[g]=Z,e.pointShadowMatrix[g]=L.shadow.matrix,v++}e.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(B),H.groundColor.copy(L.groundColor).multiplyScalar(B),e.hemi[p]=H,p++}}w>0&&(o.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=zt.LTC_FLOAT_1,e.rectAreaLTC2=zt.LTC_FLOAT_2):(e.rectAreaLTC1=zt.LTC_HALF_1,e.rectAreaLTC2=zt.LTC_HALF_2)),e.ambient[0]=f,e.ambient[1]=d,e.ambient[2]=h;const D=e.hash;(D.directionalLength!==u||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==w||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==v||D.numSpotShadows!==_||D.numSpotMaps!==P||D.numLightProbes!==A)&&(e.directional.length=u,e.spot.length=x,e.rectArea.length=w,e.point.length=g,e.hemi.length=p,e.directionalShadow.length=y,e.directionalShadowMap.length=y,e.pointShadow.length=v,e.pointShadowMap.length=v,e.spotShadow.length=_,e.spotShadowMap.length=_,e.directionalShadowMatrix.length=y,e.pointShadowMatrix.length=v,e.spotLightMatrix.length=_+P-R,e.spotLightMap.length=P,e.numSpotLightShadowsWithMaps=R,e.numLightProbes=A,D.directionalLength=u,D.pointLength=g,D.spotLength=x,D.rectAreaLength=w,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=v,D.numSpotShadows=_,D.numSpotMaps=P,D.numLightProbes=A,e.version=v2++)}function l(c,f){let d=0,h=0,u=0,g=0,x=0;const w=f.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const _=e.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(w),d++}else if(v.isSpotLight){const _=e.spot[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(w),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(w),u++}else if(v.isRectAreaLight){const _=e.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(w),r.identity(),s.copy(v.matrixWorld),s.premultiply(w),r.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const _=e.point[h];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(w),h++}else if(v.isHemisphereLight){const _=e.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(w),x++}}}return{setup:a,setupView:l,state:e}}function Xc(o){const t=new M2(o),n=[],e=[];function i(f){c.camera=f,n.length=0,e.length=0}function s(f){n.push(f)}function r(f){e.push(f)}function a(){t.setup(n)}function l(f){t.setupView(n,f)}const c={lightsArray:n,shadowsArray:e,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function S2(o){let t=new WeakMap;function n(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new Xc(o),t.set(i,[a])):s>=r.length?(a=new Xc(o),r.push(a)):a=r[s],a}function e(){t=new WeakMap}return{get:n,dispose:e}}class b2 extends Vo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T2 extends Vo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A2=`uniform sampler2D shadow_pass;
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
}`;function R2(o,t,n){let e=new El;const i=new Yt,s=new Yt,r=new De,a=new b2({depthPacking:rh}),l=new T2,c={},f=n.maxTextureSize,d={[Ci]:Rn,[Rn]:Ci,[pn]:pn},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:E2,fragmentShader:A2}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new m(g,h),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pf;let p=this.type;this.render=function(R,A,D){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||R.length===0)return;const M=o.getRenderTarget(),S=o.getActiveCubeFace(),L=o.getActiveMipmapLevel(),k=o.state;k.setBlending(Ai),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==ci&&this.type===ci,j=p===ci&&this.type!==ci;for(let Z=0,H=R.length;Z<H;Z++){const Q=R[Z],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const at=Y.getFrameExtents();if(i.multiply(at),s.copy(Y.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/at.x),i.x=s.x*at.x,Y.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/at.y),i.y=s.y*at.y,Y.mapSize.y=s.y)),Y.map===null||B===!0||j===!0){const pt=this.type!==ci?{minFilter:Wn,magFilter:Wn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ji(i.x,i.y,pt),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const ct=Y.getViewportCount();for(let pt=0;pt<ct;pt++){const St=Y.getViewport(pt);r.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),k.viewport(r),Y.updateMatrices(Q,pt),e=Y.getFrustum(),_(A,D,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===ci&&y(Y,D),Y.needsUpdate=!1}p=this.type,w.needsUpdate=!1,o.setRenderTarget(M,S,L)};function y(R,A){const D=t.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ji(i.x,i.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,o.setRenderTarget(R.mapPass),o.clear(),o.renderBufferDirect(A,null,D,h,x,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,o.setRenderTarget(R.map),o.clear(),o.renderBufferDirect(A,null,D,u,x,null)}function v(R,A,D,M){let S=null;const L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:a,o.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=S.uuid,B=A.uuid;let j=c[k];j===void 0&&(j={},c[k]=j);let Z=j[B];Z===void 0&&(Z=S.clone(),j[B]=Z,A.addEventListener("dispose",P)),S=Z}if(S.visible=A.visible,S.wireframe=A.wireframe,M===ci?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=o.properties.get(S);k.light=D}return S}function _(R,A,D,M,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ci)&&(!R.frustumCulled||e.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=t.update(R),j=R.material;if(Array.isArray(j)){const Z=B.groups;for(let H=0,Q=Z.length;H<Q;H++){const Y=Z[H],at=j[Y.materialIndex];if(at&&at.visible){const ct=v(R,at,M,S);R.onBeforeShadow(o,R,A,D,B,ct,Y),o.renderBufferDirect(D,null,B,ct,R,Y),R.onAfterShadow(o,R,A,D,B,ct,Y)}}}else if(j.visible){const Z=v(R,j,M,S);R.onBeforeShadow(o,R,A,D,B,Z,null),o.renderBufferDirect(D,null,B,Z,R,null),R.onAfterShadow(o,R,A,D,B,Z,null)}}const k=R.children;for(let B=0,j=k.length;B<j;B++)_(k[B],A,D,M,S)}function P(R){R.target.removeEventListener("dispose",P);for(const D in c){const M=c[D],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const C2={[Ia]:La,[Da]:za,[Ua]:Fa,[Do]:Na,[La]:Ia,[za]:Da,[Fa]:Ua,[Na]:Do};function P2(o,t){function n(){let z=!1;const bt=new De;let J=null;const st=new De(0,0,0,0);return{setMask:function(_t){J!==_t&&!z&&(o.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){z=_t},setClear:function(_t,wt,Vt,le,Ae){Ae===!0&&(_t*=le,wt*=le,Vt*=le),bt.set(_t,wt,Vt,le),st.equals(bt)===!1&&(o.clearColor(_t,wt,Vt,le),st.copy(bt))},reset:function(){z=!1,J=null,st.set(-1,0,0,0)}}}function e(){let z=!1,bt=!1,J=null,st=null,_t=null;return{setReversed:function(wt){if(bt!==wt){const Vt=t.get("EXT_clip_control");bt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const le=_t;_t=null,this.setClear(le)}bt=wt},getReversed:function(){return bt},setTest:function(wt){wt?nt(o.DEPTH_TEST):gt(o.DEPTH_TEST)},setMask:function(wt){J!==wt&&!z&&(o.depthMask(wt),J=wt)},setFunc:function(wt){if(bt&&(wt=C2[wt]),st!==wt){switch(wt){case Ia:o.depthFunc(o.NEVER);break;case La:o.depthFunc(o.ALWAYS);break;case Da:o.depthFunc(o.LESS);break;case Do:o.depthFunc(o.LEQUAL);break;case Ua:o.depthFunc(o.EQUAL);break;case Na:o.depthFunc(o.GEQUAL);break;case za:o.depthFunc(o.GREATER);break;case Fa:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}st=wt}},setLocked:function(wt){z=wt},setClear:function(wt){_t!==wt&&(bt&&(wt=1-wt),o.clearDepth(wt),_t=wt)},reset:function(){z=!1,J=null,st=null,_t=null,bt=!1}}}function i(){let z=!1,bt=null,J=null,st=null,_t=null,wt=null,Vt=null,le=null,Ae=null;return{setTest:function(oe){z||(oe?nt(o.STENCIL_TEST):gt(o.STENCIL_TEST))},setMask:function(oe){bt!==oe&&!z&&(o.stencilMask(oe),bt=oe)},setFunc:function(oe,Ue,Ge){(J!==oe||st!==Ue||_t!==Ge)&&(o.stencilFunc(oe,Ue,Ge),J=oe,st=Ue,_t=Ge)},setOp:function(oe,Ue,Ge){(wt!==oe||Vt!==Ue||le!==Ge)&&(o.stencilOp(oe,Ue,Ge),wt=oe,Vt=Ue,le=Ge)},setLocked:function(oe){z=oe},setClear:function(oe){Ae!==oe&&(o.clearStencil(oe),Ae=oe)},reset:function(){z=!1,bt=null,J=null,st=null,_t=null,wt=null,Vt=null,le=null,Ae=null}}}const s=new n,r=new e,a=new i,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,u=[],g=null,x=!1,w=null,p=null,y=null,v=null,_=null,P=null,R=null,A=new we(0,0,0),D=0,M=!1,S=null,L=null,k=null,B=null,j=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=Q>=2);let at=null,ct={};const pt=o.getParameter(o.SCISSOR_BOX),St=o.getParameter(o.VIEWPORT),vt=new De().fromArray(pt),V=new De().fromArray(St);function G(z,bt,J,st){const _t=new Uint8Array(4),wt=o.createTexture();o.bindTexture(z,wt),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<J;Vt++)z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,st,0,o.RGBA,o.UNSIGNED_BYTE,_t):o.texImage2D(bt+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,_t);return wt}const q={};q[o.TEXTURE_2D]=G(o.TEXTURE_2D,o.TEXTURE_2D,1),q[o.TEXTURE_CUBE_MAP]=G(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[o.TEXTURE_2D_ARRAY]=G(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),q[o.TEXTURE_3D]=G(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),nt(o.DEPTH_TEST),r.setFunc(Do),Et(!1),Ot($l),nt(o.CULL_FACE),U(Ai);function nt(z){f[z]!==!0&&(o.enable(z),f[z]=!0)}function gt(z){f[z]!==!1&&(o.disable(z),f[z]=!1)}function At(z,bt){return d[z]!==bt?(o.bindFramebuffer(z,bt),d[z]=bt,z===o.DRAW_FRAMEBUFFER&&(d[o.FRAMEBUFFER]=bt),z===o.FRAMEBUFFER&&(d[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function ut(z,bt){let J=u,st=!1;if(z){J=h.get(bt),J===void 0&&(J=[],h.set(bt,J));const _t=z.textures;if(J.length!==_t.length||J[0]!==o.COLOR_ATTACHMENT0){for(let wt=0,Vt=_t.length;wt<Vt;wt++)J[wt]=o.COLOR_ATTACHMENT0+wt;J.length=_t.length,st=!0}}else J[0]!==o.BACK&&(J[0]=o.BACK,st=!0);st&&o.drawBuffers(J)}function Ut(z){return g!==z?(o.useProgram(z),g=z,!0):!1}const It={[Yi]:o.FUNC_ADD,[Dd]:o.FUNC_SUBTRACT,[Ud]:o.FUNC_REVERSE_SUBTRACT};It[Nd]=o.MIN,It[zd]=o.MAX;const $t={[Fd]:o.ZERO,[Od]:o.ONE,[kd]:o.SRC_COLOR,[Ca]:o.SRC_ALPHA,[Xd]:o.SRC_ALPHA_SATURATE,[Vd]:o.DST_COLOR,[Gd]:o.DST_ALPHA,[Bd]:o.ONE_MINUS_SRC_COLOR,[Pa]:o.ONE_MINUS_SRC_ALPHA,[Wd]:o.ONE_MINUS_DST_COLOR,[Hd]:o.ONE_MINUS_DST_ALPHA,[Yd]:o.CONSTANT_COLOR,[Zd]:o.ONE_MINUS_CONSTANT_COLOR,[qd]:o.CONSTANT_ALPHA,[$d]:o.ONE_MINUS_CONSTANT_ALPHA};function U(z,bt,J,st,_t,wt,Vt,le,Ae,oe){if(z===Ai){x===!0&&(gt(o.BLEND),x=!1);return}if(x===!1&&(nt(o.BLEND),x=!0),z!==Ld){if(z!==w||oe!==M){if((p!==Yi||_!==Yi)&&(o.blendEquation(o.FUNC_ADD),p=Yi,_=Yi),oe)switch(z){case Co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ra:o.blendFunc(o.ONE,o.ONE);break;case Kl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jl:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ra:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Kl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jl:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,v=null,P=null,R=null,A.set(0,0,0),D=0,w=z,M=oe}return}_t=_t||bt,wt=wt||J,Vt=Vt||st,(bt!==p||_t!==_)&&(o.blendEquationSeparate(It[bt],It[_t]),p=bt,_=_t),(J!==y||st!==v||wt!==P||Vt!==R)&&(o.blendFuncSeparate($t[J],$t[st],$t[wt],$t[Vt]),y=J,v=st,P=wt,R=Vt),(le.equals(A)===!1||Ae!==D)&&(o.blendColor(le.r,le.g,le.b,Ae),A.copy(le),D=Ae),w=z,M=!1}function Ht(z,bt){z.side===pn?gt(o.CULL_FACE):nt(o.CULL_FACE);let J=z.side===Rn;bt&&(J=!J),Et(J),z.blending===Co&&z.transparent===!1?U(Ai):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const st=z.stencilWrite;a.setTest(st),st&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?nt(o.SAMPLE_ALPHA_TO_COVERAGE):gt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Et(z){S!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),S=z)}function Ot(z){z!==Pd?(nt(o.CULL_FACE),z!==L&&(z===$l?o.cullFace(o.BACK):z===Id?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):gt(o.CULL_FACE),L=z}function Lt(z){z!==k&&(H&&o.lineWidth(z),k=z)}function Kt(z,bt,J){z?(nt(o.POLYGON_OFFSET_FILL),(B!==bt||j!==J)&&(o.polygonOffset(bt,J),B=bt,j=J)):gt(o.POLYGON_OFFSET_FILL)}function Tt(z){z?nt(o.SCISSOR_TEST):gt(o.SCISSOR_TEST)}function C(z){z===void 0&&(z=o.TEXTURE0+Z-1),at!==z&&(o.activeTexture(z),at=z)}function b(z,bt,J){J===void 0&&(at===null?J=o.TEXTURE0+Z-1:J=at);let st=ct[J];st===void 0&&(st={type:void 0,texture:void 0},ct[J]=st),(st.type!==z||st.texture!==bt)&&(at!==J&&(o.activeTexture(J),at=J),o.bindTexture(z,bt||q[z]),st.type=z,st.texture=bt)}function X(){const z=ct[at];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function it(){try{o.compressedTexImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{o.compressedTexImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{o.texSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{o.texSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{o.texStorage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{o.texStorage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{o.texImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Zt(){try{o.texImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(z){vt.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),vt.copy(z))}function Dt(z){V.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),V.copy(z))}function Qt(z,bt){let J=c.get(bt);J===void 0&&(J=new WeakMap,c.set(bt,J));let st=J.get(z);st===void 0&&(st=o.getUniformBlockIndex(bt,z.name),J.set(z,st))}function Bt(z,bt){const st=c.get(bt).get(z);l.get(bt)!==st&&(o.uniformBlockBinding(bt,st,z.__bindingPointIndex),l.set(bt,st))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},at=null,ct={},d={},h=new WeakMap,u=[],g=null,x=!1,w=null,p=null,y=null,v=null,_=null,P=null,R=null,A=new we(0,0,0),D=0,M=!1,S=null,L=null,k=null,B=null,j=null,vt.set(0,0,o.canvas.width,o.canvas.height),V.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:nt,disable:gt,bindFramebuffer:At,drawBuffers:ut,useProgram:Ut,setBlending:U,setMaterial:Ht,setFlipSided:Et,setCullFace:Ot,setLineWidth:Lt,setPolygonOffset:Kt,setScissorTest:Tt,activeTexture:C,bindTexture:b,unbindTexture:X,compressedTexImage2D:it,compressedTexImage3D:ot,texImage2D:Mt,texImage3D:Zt,updateUBOMapping:Qt,uniformBlockBinding:Bt,texStorage2D:Rt,texStorage3D:lt,texSubImage2D:et,texSubImage3D:mt,compressedTexSubImage2D:xt,compressedTexSubImage3D:ft,scissor:ie,viewport:Dt,reset:fe}}function Yc(o,t,n,e){const i=I2(e);switch(n){case Of:return o*t;case Bf:return o*t;case Gf:return o*t*2;case Hf:return o*t/i.components*i.byteLength;case Ml:return o*t/i.components*i.byteLength;case Vf:return o*t*2/i.components*i.byteLength;case Sl:return o*t*2/i.components*i.byteLength;case kf:return o*t*3/i.components*i.byteLength;case Vn:return o*t*4/i.components*i.byteLength;case bl:return o*t*4/i.components*i.byteLength;case yr:case Mr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Sr:case br:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Wa:return Math.max(o,16)*Math.max(t,8)/4;case Ga:case Va:return Math.max(o,8)*Math.max(t,8)/2;case Xa:case Ya:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Za:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tr:case ll:case cl:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Wf:case fl:return Math.ceil(o/4)*Math.ceil(t/4)*8;case dl:case hl:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function I2(o){switch(o){case pi:case Nf:return{byteLength:1,components:1};case Ss:case zf:case Ps:return{byteLength:2,components:1};case vl:case yl:return{byteLength:2,components:4};case Ki:case _l:case fi:return{byteLength:4,components:1};case Ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function L2(o,t,n,e,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,f=new WeakMap;let d;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return u?new OffscreenCanvas(C,b):Rr("canvas")}function x(C,b,X){let it=1;const ot=Tt(C);if((ot.width>X||ot.height>X)&&(it=X/Math.max(ot.width,ot.height)),it<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=Math.floor(it*ot.width),mt=Math.floor(it*ot.height);d===void 0&&(d=g(et,mt));const xt=b?g(et,mt):d;return xt.width=et,xt.height=mt,xt.getContext("2d").drawImage(C,0,0,et,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+mt+")."),xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function w(C){return C.generateMipmaps}function p(C){o.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function v(C,b,X,it,ot=!1){if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=b;if(b===o.RED&&(X===o.FLOAT&&(et=o.R32F),X===o.HALF_FLOAT&&(et=o.R16F),X===o.UNSIGNED_BYTE&&(et=o.R8)),b===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(et=o.R8UI),X===o.UNSIGNED_SHORT&&(et=o.R16UI),X===o.UNSIGNED_INT&&(et=o.R32UI),X===o.BYTE&&(et=o.R8I),X===o.SHORT&&(et=o.R16I),X===o.INT&&(et=o.R32I)),b===o.RG&&(X===o.FLOAT&&(et=o.RG32F),X===o.HALF_FLOAT&&(et=o.RG16F),X===o.UNSIGNED_BYTE&&(et=o.RG8)),b===o.RG_INTEGER&&(X===o.UNSIGNED_BYTE&&(et=o.RG8UI),X===o.UNSIGNED_SHORT&&(et=o.RG16UI),X===o.UNSIGNED_INT&&(et=o.RG32UI),X===o.BYTE&&(et=o.RG8I),X===o.SHORT&&(et=o.RG16I),X===o.INT&&(et=o.RG32I)),b===o.RGB_INTEGER&&(X===o.UNSIGNED_BYTE&&(et=o.RGB8UI),X===o.UNSIGNED_SHORT&&(et=o.RGB16UI),X===o.UNSIGNED_INT&&(et=o.RGB32UI),X===o.BYTE&&(et=o.RGB8I),X===o.SHORT&&(et=o.RGB16I),X===o.INT&&(et=o.RGB32I)),b===o.RGBA_INTEGER&&(X===o.UNSIGNED_BYTE&&(et=o.RGBA8UI),X===o.UNSIGNED_SHORT&&(et=o.RGBA16UI),X===o.UNSIGNED_INT&&(et=o.RGBA32UI),X===o.BYTE&&(et=o.RGBA8I),X===o.SHORT&&(et=o.RGBA16I),X===o.INT&&(et=o.RGBA32I)),b===o.RGB&&X===o.UNSIGNED_INT_5_9_9_9_REV&&(et=o.RGB9_E5),b===o.RGBA){const mt=ot?Lr:Te.getTransfer(it);X===o.FLOAT&&(et=o.RGBA32F),X===o.HALF_FLOAT&&(et=o.RGBA16F),X===o.UNSIGNED_BYTE&&(et=mt===Le?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(et=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(et=o.RGB5_A1)}return(et===o.R16F||et===o.R32F||et===o.RG16F||et===o.RG32F||et===o.RGBA16F||et===o.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(C,b){let X;return C?b===null||b===Ki||b===zo?X=o.DEPTH24_STENCIL8:b===fi?X=o.DEPTH32F_STENCIL8:b===Ss&&(X=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ki||b===zo?X=o.DEPTH_COMPONENT24:b===fi?X=o.DEPTH_COMPONENT32F:b===Ss&&(X=o.DEPTH_COMPONENT16),X}function P(C,b){return w(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wn&&C.minFilter!==Qn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){const b=C.target;b.removeEventListener("dispose",R),D(b),b.isVideoTexture&&f.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),S(b)}function D(C){const b=e.get(C);if(b.__webglInit===void 0)return;const X=C.source,it=h.get(X);if(it){const ot=it[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&M(C),Object.keys(it).length===0&&h.delete(X)}e.remove(C)}function M(C){const b=e.get(C);o.deleteTexture(b.__webglTexture);const X=C.source,it=h.get(X);delete it[b.__cacheKey],r.memory.textures--}function S(C){const b=e.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),e.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let ot=0;ot<b.__webglFramebuffer[it].length;ot++)o.deleteFramebuffer(b.__webglFramebuffer[it][ot]);else o.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)o.deleteFramebuffer(b.__webglFramebuffer[it]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=C.textures;for(let it=0,ot=X.length;it<ot;it++){const et=e.get(X[it]);et.__webglTexture&&(o.deleteTexture(et.__webglTexture),r.memory.textures--),e.remove(X[it])}e.remove(C)}let L=0;function k(){L=0}function B(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function j(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Z(C,b){const X=e.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(X,C,b);return}}n.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+b)}function H(C,b){const X=e.get(C);if(C.version>0&&X.__version!==C.version){V(X,C,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+b)}function Q(C,b){const X=e.get(C);if(C.version>0&&X.__version!==C.version){V(X,C,b);return}n.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+b)}function Y(C,b){const X=e.get(C);if(C.version>0&&X.__version!==C.version){G(X,C,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+b)}const at={[Pe]:o.REPEAT,[qi]:o.CLAMP_TO_EDGE,[Ba]:o.MIRRORED_REPEAT},ct={[Wn]:o.NEAREST,[oh]:o.NEAREST_MIPMAP_NEAREST,[Ws]:o.NEAREST_MIPMAP_LINEAR,[Qn]:o.LINEAR,[Wr]:o.LINEAR_MIPMAP_NEAREST,[$i]:o.LINEAR_MIPMAP_LINEAR},pt={[lh]:o.NEVER,[ph]:o.ALWAYS,[ch]:o.LESS,[Yf]:o.LEQUAL,[fh]:o.EQUAL,[uh]:o.GEQUAL,[dh]:o.GREATER,[hh]:o.NOTEQUAL};function St(C,b){if(b.type===fi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qn||b.magFilter===Wr||b.magFilter===Ws||b.magFilter===$i||b.minFilter===Qn||b.minFilter===Wr||b.minFilter===Ws||b.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,at[b.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,at[b.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,at[b.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,ct[b.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wn||b.minFilter!==Ws&&b.minFilter!==$i||b.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||e.get(b).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");o.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),e.get(b).__currentAnisotropy=b.anisotropy}}}function vt(C,b){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",R));const it=b.source;let ot=h.get(it);ot===void 0&&(ot={},h.set(it,ot));const et=j(b);if(et!==C.__cacheKey){ot[et]===void 0&&(ot[et]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,X=!0),ot[et].usedTimes++;const mt=ot[C.__cacheKey];mt!==void 0&&(ot[C.__cacheKey].usedTimes--,mt.usedTimes===0&&M(b)),C.__cacheKey=et,C.__webglTexture=ot[et].texture}return X}function V(C,b,X){let it=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=o.TEXTURE_3D);const ot=vt(C,b),et=b.source;n.bindTexture(it,C.__webglTexture,o.TEXTURE0+X);const mt=e.get(et);if(et.version!==mt.__version||ot===!0){n.activeTexture(o.TEXTURE0+X);const xt=Te.getPrimaries(Te.workingColorSpace),ft=b.colorSpace===Ei?null:Te.getPrimaries(b.colorSpace),Rt=b.colorSpace===Ei||xt===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let lt=x(b.image,!1,i.maxTextureSize);lt=Kt(b,lt);const Mt=s.convert(b.format,b.colorSpace),Zt=s.convert(b.type);let ie=v(b.internalFormat,Mt,Zt,b.colorSpace,b.isVideoTexture);St(it,b);let Dt;const Qt=b.mipmaps,Bt=b.isVideoTexture!==!0,fe=mt.__version===void 0||ot===!0,z=et.dataReady,bt=P(b,lt);if(b.isDepthTexture)ie=_(b.format===Fo,b.type),fe&&(Bt?n.texStorage2D(o.TEXTURE_2D,1,ie,lt.width,lt.height):n.texImage2D(o.TEXTURE_2D,0,ie,lt.width,lt.height,0,Mt,Zt,null));else if(b.isDataTexture)if(Qt.length>0){Bt&&fe&&n.texStorage2D(o.TEXTURE_2D,bt,ie,Qt[0].width,Qt[0].height);for(let J=0,st=Qt.length;J<st;J++)Dt=Qt[J],Bt?z&&n.texSubImage2D(o.TEXTURE_2D,J,0,0,Dt.width,Dt.height,Mt,Zt,Dt.data):n.texImage2D(o.TEXTURE_2D,J,ie,Dt.width,Dt.height,0,Mt,Zt,Dt.data);b.generateMipmaps=!1}else Bt?(fe&&n.texStorage2D(o.TEXTURE_2D,bt,ie,lt.width,lt.height),z&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,Zt,lt.data)):n.texImage2D(o.TEXTURE_2D,0,ie,lt.width,lt.height,0,Mt,Zt,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Bt&&fe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,bt,ie,Qt[0].width,Qt[0].height,lt.depth);for(let J=0,st=Qt.length;J<st;J++)if(Dt=Qt[J],b.format!==Vn)if(Mt!==null)if(Bt){if(z)if(b.layerUpdates.size>0){const _t=Yc(Dt.width,Dt.height,b.format,b.type);for(const wt of b.layerUpdates){const Vt=Dt.data.subarray(wt*_t/Dt.data.BYTES_PER_ELEMENT,(wt+1)*_t/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,J,0,0,wt,Dt.width,Dt.height,1,Mt,Vt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,J,0,0,0,Dt.width,Dt.height,lt.depth,Mt,Dt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,J,ie,Dt.width,Dt.height,lt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?z&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,J,0,0,0,Dt.width,Dt.height,lt.depth,Mt,Zt,Dt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,J,ie,Dt.width,Dt.height,lt.depth,0,Mt,Zt,Dt.data)}else{Bt&&fe&&n.texStorage2D(o.TEXTURE_2D,bt,ie,Qt[0].width,Qt[0].height);for(let J=0,st=Qt.length;J<st;J++)Dt=Qt[J],b.format!==Vn?Mt!==null?Bt?z&&n.compressedTexSubImage2D(o.TEXTURE_2D,J,0,0,Dt.width,Dt.height,Mt,Dt.data):n.compressedTexImage2D(o.TEXTURE_2D,J,ie,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?z&&n.texSubImage2D(o.TEXTURE_2D,J,0,0,Dt.width,Dt.height,Mt,Zt,Dt.data):n.texImage2D(o.TEXTURE_2D,J,ie,Dt.width,Dt.height,0,Mt,Zt,Dt.data)}else if(b.isDataArrayTexture)if(Bt){if(fe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,bt,ie,lt.width,lt.height,lt.depth),z)if(b.layerUpdates.size>0){const J=Yc(lt.width,lt.height,b.format,b.type);for(const st of b.layerUpdates){const _t=lt.data.subarray(st*J/lt.data.BYTES_PER_ELEMENT,(st+1)*J/lt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,st,lt.width,lt.height,1,Mt,Zt,_t)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Zt,lt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,ie,lt.width,lt.height,lt.depth,0,Mt,Zt,lt.data);else if(b.isData3DTexture)Bt?(fe&&n.texStorage3D(o.TEXTURE_3D,bt,ie,lt.width,lt.height,lt.depth),z&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Zt,lt.data)):n.texImage3D(o.TEXTURE_3D,0,ie,lt.width,lt.height,lt.depth,0,Mt,Zt,lt.data);else if(b.isFramebufferTexture){if(fe)if(Bt)n.texStorage2D(o.TEXTURE_2D,bt,ie,lt.width,lt.height);else{let J=lt.width,st=lt.height;for(let _t=0;_t<bt;_t++)n.texImage2D(o.TEXTURE_2D,_t,ie,J,st,0,Mt,Zt,null),J>>=1,st>>=1}}else if(Qt.length>0){if(Bt&&fe){const J=Tt(Qt[0]);n.texStorage2D(o.TEXTURE_2D,bt,ie,J.width,J.height)}for(let J=0,st=Qt.length;J<st;J++)Dt=Qt[J],Bt?z&&n.texSubImage2D(o.TEXTURE_2D,J,0,0,Mt,Zt,Dt):n.texImage2D(o.TEXTURE_2D,J,ie,Mt,Zt,Dt);b.generateMipmaps=!1}else if(Bt){if(fe){const J=Tt(lt);n.texStorage2D(o.TEXTURE_2D,bt,ie,J.width,J.height)}z&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Zt,lt)}else n.texImage2D(o.TEXTURE_2D,0,ie,Mt,Zt,lt);w(b)&&p(it),mt.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function G(C,b,X){if(b.image.length!==6)return;const it=vt(C,b),ot=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+X);const et=e.get(ot);if(ot.version!==et.__version||it===!0){n.activeTexture(o.TEXTURE0+X);const mt=Te.getPrimaries(Te.workingColorSpace),xt=b.colorSpace===Ei?null:Te.getPrimaries(b.colorSpace),ft=b.colorSpace===Ei||mt===xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Rt=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let st=0;st<6;st++)!Rt&&!lt?Mt[st]=x(b.image[st],!0,i.maxCubemapSize):Mt[st]=lt?b.image[st].image:b.image[st],Mt[st]=Kt(b,Mt[st]);const Zt=Mt[0],ie=s.convert(b.format,b.colorSpace),Dt=s.convert(b.type),Qt=v(b.internalFormat,ie,Dt,b.colorSpace),Bt=b.isVideoTexture!==!0,fe=et.__version===void 0||it===!0,z=ot.dataReady;let bt=P(b,Zt);St(o.TEXTURE_CUBE_MAP,b);let J;if(Rt){Bt&&fe&&n.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Qt,Zt.width,Zt.height);for(let st=0;st<6;st++){J=Mt[st].mipmaps;for(let _t=0;_t<J.length;_t++){const wt=J[_t];b.format!==Vn?ie!==null?Bt?z&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,0,0,wt.width,wt.height,ie,wt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,Qt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,0,0,wt.width,wt.height,ie,Dt,wt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,Qt,wt.width,wt.height,0,ie,Dt,wt.data)}}}else{if(J=b.mipmaps,Bt&&fe){J.length>0&&bt++;const st=Tt(Mt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(lt){Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Mt[st].width,Mt[st].height,ie,Dt,Mt[st].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Mt[st].width,Mt[st].height,0,ie,Dt,Mt[st].data);for(let _t=0;_t<J.length;_t++){const Vt=J[_t].image[st].image;Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,0,0,Vt.width,Vt.height,ie,Dt,Vt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,Qt,Vt.width,Vt.height,0,ie,Dt,Vt.data)}}else{Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ie,Dt,Mt[st]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,ie,Dt,Mt[st]);for(let _t=0;_t<J.length;_t++){const wt=J[_t];Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,0,0,ie,Dt,wt.image[st]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,Qt,ie,Dt,wt.image[st])}}}w(b)&&p(o.TEXTURE_CUBE_MAP),et.__version=ot.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function q(C,b,X,it,ot,et){const mt=s.convert(X.format,X.colorSpace),xt=s.convert(X.type),ft=v(X.internalFormat,mt,xt,X.colorSpace),Rt=e.get(b),lt=e.get(X);if(lt.__renderTarget=b,!Rt.__hasExternalTextures){const Mt=Math.max(1,b.width>>et),Zt=Math.max(1,b.height>>et);ot===o.TEXTURE_3D||ot===o.TEXTURE_2D_ARRAY?n.texImage3D(ot,et,ft,Mt,Zt,b.depth,0,mt,xt,null):n.texImage2D(ot,et,ft,Mt,Zt,0,mt,xt,null)}n.bindFramebuffer(o.FRAMEBUFFER,C),Ot(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,it,ot,lt.__webglTexture,0,Et(b)):(ot===o.TEXTURE_2D||ot>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,it,ot,lt.__webglTexture,et),n.bindFramebuffer(o.FRAMEBUFFER,null)}function nt(C,b,X){if(o.bindRenderbuffer(o.RENDERBUFFER,C),b.depthBuffer){const it=b.depthTexture,ot=it&&it.isDepthTexture?it.type:null,et=_(b.stencilBuffer,ot),mt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=Et(b);Ot(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,et,b.width,b.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,et,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,et,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,C)}else{const it=b.textures;for(let ot=0;ot<it.length;ot++){const et=it[ot],mt=s.convert(et.format,et.colorSpace),xt=s.convert(et.type),ft=v(et.internalFormat,mt,xt,et.colorSpace),Rt=Et(b);X&&Ot(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ft,b.width,b.height):Ot(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function gt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=e.get(b.depthTexture);it.__renderTarget=b,(!it.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const ot=it.__webglTexture,et=Et(b);if(b.depthTexture.format===Po)Ot(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0);else if(b.depthTexture.format===Fo)Ot(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function At(C){const b=e.get(C),X=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const it=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){const ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",ot)};it.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=it}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");gt(b.__webglFramebuffer,C)}else if(X){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=o.createRenderbuffer(),nt(b.__webglDepthbuffer[it],C,!1);else{const ot=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[it];o.bindRenderbuffer(o.RENDERBUFFER,et),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,et)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),nt(b.__webglDepthbuffer,C,!1);else{const it=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,it,o.RENDERBUFFER,ot)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(C,b,X){const it=e.get(C);b!==void 0&&q(it.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&At(C)}function Ut(C){const b=C.texture,X=e.get(C),it=e.get(b);C.addEventListener("dispose",A);const ot=C.textures,et=C.isWebGLCubeRenderTarget===!0,mt=ot.length>1;if(mt||(it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture()),it.__version=b.version,r.memory.textures++),et){X.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[xt]=[];for(let ft=0;ft<b.mipmaps.length;ft++)X.__webglFramebuffer[xt][ft]=o.createFramebuffer()}else X.__webglFramebuffer[xt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)X.__webglFramebuffer[xt]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(mt)for(let xt=0,ft=ot.length;xt<ft;xt++){const Rt=e.get(ot[xt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=o.createTexture(),r.memory.textures++)}if(C.samples>0&&Ot(C)===!1){X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xt=0;xt<ot.length;xt++){const ft=ot[xt];X.__webglColorRenderbuffer[xt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[xt]);const Rt=s.convert(ft.format,ft.colorSpace),lt=s.convert(ft.type),Mt=v(ft.internalFormat,Rt,lt,ft.colorSpace,C.isXRRenderTarget===!0),Zt=Et(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Mt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,X.__webglColorRenderbuffer[xt])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),nt(X.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(et){n.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture),St(o.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)q(X.__webglFramebuffer[xt][ft],C,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ft);else q(X.__webglFramebuffer[xt],C,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);w(b)&&p(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(mt){for(let xt=0,ft=ot.length;xt<ft;xt++){const Rt=ot[xt],lt=e.get(Rt);n.bindTexture(o.TEXTURE_2D,lt.__webglTexture),St(o.TEXTURE_2D,Rt),q(X.__webglFramebuffer,C,Rt,o.COLOR_ATTACHMENT0+xt,o.TEXTURE_2D,0),w(Rt)&&p(o.TEXTURE_2D)}n.unbindTexture()}else{let xt=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(xt,it.__webglTexture),St(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)q(X.__webglFramebuffer[ft],C,b,o.COLOR_ATTACHMENT0,xt,ft);else q(X.__webglFramebuffer,C,b,o.COLOR_ATTACHMENT0,xt,0);w(b)&&p(xt),n.unbindTexture()}C.depthBuffer&&At(C)}function It(C){const b=C.textures;for(let X=0,it=b.length;X<it;X++){const ot=b[X];if(w(ot)){const et=y(C),mt=e.get(ot).__webglTexture;n.bindTexture(et,mt),p(et),n.unbindTexture()}}}const $t=[],U=[];function Ht(C){if(C.samples>0){if(Ot(C)===!1){const b=C.textures,X=C.width,it=C.height;let ot=o.COLOR_BUFFER_BIT;const et=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=e.get(C),xt=b.length>1;if(xt)for(let ft=0;ft<b.length;ft++)n.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=o.STENCIL_BUFFER_BIT)),xt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);const Rt=e.get(b[ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,X,it,0,0,X,it,ot,o.NEAREST),l===!0&&($t.length=0,U.length=0,$t.push(o.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&($t.push(et),U.push(et),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,U)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$t))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xt)for(let ft=0;ft<b.length;ft++){n.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);const Rt=e.get(b[ft]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,Rt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Et(C){return Math.min(i.maxSamples,C.samples)}function Ot(C){const b=e.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Lt(C){const b=r.render.frame;f.get(C)!==b&&(f.set(C,b),C.update())}function Kt(C,b){const X=C.colorSpace,it=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Bo&&X!==Ei&&(Te.getTransfer(X)===Le?(it!==Vn||ot!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=ut,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ot}function D2(o,t){function n(e,i=Ei){let s;const r=Te.getTransfer(i);if(e===pi)return o.UNSIGNED_BYTE;if(e===vl)return o.UNSIGNED_SHORT_4_4_4_4;if(e===yl)return o.UNSIGNED_SHORT_5_5_5_1;if(e===Ff)return o.UNSIGNED_INT_5_9_9_9_REV;if(e===Nf)return o.BYTE;if(e===zf)return o.SHORT;if(e===Ss)return o.UNSIGNED_SHORT;if(e===_l)return o.INT;if(e===Ki)return o.UNSIGNED_INT;if(e===fi)return o.FLOAT;if(e===Ps)return o.HALF_FLOAT;if(e===Of)return o.ALPHA;if(e===kf)return o.RGB;if(e===Vn)return o.RGBA;if(e===Bf)return o.LUMINANCE;if(e===Gf)return o.LUMINANCE_ALPHA;if(e===Po)return o.DEPTH_COMPONENT;if(e===Fo)return o.DEPTH_STENCIL;if(e===Hf)return o.RED;if(e===Ml)return o.RED_INTEGER;if(e===Vf)return o.RG;if(e===Sl)return o.RG_INTEGER;if(e===bl)return o.RGBA_INTEGER;if(e===yr||e===Mr||e===Sr||e===br)if(r===Le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(e===yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(e===yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(e===Ga||e===Ha||e===Va||e===Wa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(e===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(e===Xa||e===Ya||e===Za)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(e===Xa||e===Ya)return r===Le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(e===Za)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(e===qa||e===$a||e===Ka||e===Ja||e===ja||e===Qa||e===tl||e===el||e===nl||e===il||e===ol||e===sl||e===rl||e===al)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(e===qa)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===$a)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===Ka)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===Ja)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===ja)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===Qa)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===tl)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===el)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===nl)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===il)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===ol)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===sl)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===rl)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===al)return r===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(e===Tr||e===ll||e===cl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(e===Tr)return r===Le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(e===Wf||e===fl||e===dl||e===hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(e===Tr)return s.COMPRESSED_RED_RGTC1_EXT;if(e===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return e===zo?o.UNSIGNED_INT_24_8:o[e]!==void 0?o[e]:null}return{convert:n}}class U2 extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pt extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N2={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const e of t.hand.values())this._getHandJoint(n,e)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,e){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const w=n.getJointPose(x,e),p=this._getHandJoint(c,x);w!==null&&(p.matrix.fromArray(w.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=w.radius),p.visible=w!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&h>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,e),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(t.targetRaySpace,e),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N2)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const e=new Pt;e.matrixAutoUpdate=!1,e.visible=!1,t.joints[n.jointName]=e,t.add(e)}return t.joints[n.jointName]}}const z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F2=`
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

}`;class O2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,e){if(this.texture===null){const i=new Cn,s=t.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!=e.depthNear||n.depthFar!=e.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,e=new Pi({vertexShader:z2,fragmentShader:F2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new m(new qt(20,20),e)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k2 extends Go{constructor(t,n){super();const e=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,u=null,g=null;const x=new O2,w=n.getContextAttributes();let p=null,y=null;const v=[],_=[],P=new Yt;let R=null;const A=new Un;A.viewport=new De;const D=new Un;D.viewport=new De;const M=[A,D],S=new U2;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let G=v[V];return G===void 0&&(G=new wa,v[V]=G),G.getTargetRaySpace()},this.getControllerGrip=function(V){let G=v[V];return G===void 0&&(G=new wa,v[V]=G),G.getGripSpace()},this.getHand=function(V){let G=v[V];return G===void 0&&(G=new wa,v[V]=G),G.getHandSpace()};function B(V){const G=_.indexOf(V.inputSource);if(G===-1)return;const q=v[G];q!==void 0&&(q.update(V.inputSource,V.frame,c||r),q.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",Z);for(let V=0;V<v.length;V++){const G=_[V];G!==null&&(_[V]=null,v[V].disconnect(G))}L=null,k=null,x.reset(),t.setRenderTarget(p),u=null,h=null,d=null,i=null,y=null,vt.stop(),e.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",j),i.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const G={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,n,G),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ji(u.framebufferWidth,u.framebufferHeight,{format:Vn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil})}else{let G=null,q=null,nt=null;w.depth&&(nt=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,G=w.stencil?Fo:Po,q=w.stencil?zo:Ki);const gt={colorFormat:n.RGBA8,depthFormat:nt,scaleFactor:s};d=new XRWebGLBinding(i,n),h=d.createProjectionLayer(gt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ji(h.textureWidth,h.textureHeight,{format:Vn,type:pi,depthTexture:new rd(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),vt.setContext(i),vt.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(V){for(let G=0;G<V.removed.length;G++){const q=V.removed[G],nt=_.indexOf(q);nt>=0&&(_[nt]=null,v[nt].disconnect(q))}for(let G=0;G<V.added.length;G++){const q=V.added[G];let nt=_.indexOf(q);if(nt===-1){for(let At=0;At<v.length;At++)if(At>=_.length){_.push(q),nt=At;break}else if(_[At]===null){_[At]=q,nt=At;break}if(nt===-1)break}const gt=v[nt];gt&&gt.connect(q)}}const H=new N,Q=new N;function Y(V,G,q){H.setFromMatrixPosition(G.matrixWorld),Q.setFromMatrixPosition(q.matrixWorld);const nt=H.distanceTo(Q),gt=G.projectionMatrix.elements,At=q.projectionMatrix.elements,ut=gt[14]/(gt[10]-1),Ut=gt[14]/(gt[10]+1),It=(gt[9]+1)/gt[5],$t=(gt[9]-1)/gt[5],U=(gt[8]-1)/gt[0],Ht=(At[8]+1)/At[0],Et=ut*U,Ot=ut*Ht,Lt=nt/(-U+Ht),Kt=Lt*-U;if(G.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Kt),V.translateZ(Lt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),gt[10]===-1)V.projectionMatrix.copy(G.projectionMatrix),V.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Tt=ut+Lt,C=Ut+Lt,b=Et-Kt,X=Ot+(nt-Kt),it=It*Ut/C*Tt,ot=$t*Ut/C*Tt;V.projectionMatrix.makePerspective(b,X,it,ot,Tt,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function at(V,G){G===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(G.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let G=V.near,q=V.far;x.texture!==null&&(x.depthNear>0&&(G=x.depthNear),x.depthFar>0&&(q=x.depthFar)),S.near=D.near=A.near=G,S.far=D.far=A.far=q,(L!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,k=S.far),A.layers.mask=V.layers.mask|2,D.layers.mask=V.layers.mask|4,S.layers.mask=A.layers.mask|D.layers.mask;const nt=V.parent,gt=S.cameras;at(S,nt);for(let At=0;At<gt.length;At++)at(gt[At],nt);gt.length===2?Y(S,A,D):S.projectionMatrix.copy(A.projectionMatrix),ct(V,S,nt)};function ct(V,G,q){q===null?V.matrix.copy(G.matrixWorld):(V.matrix.copy(q.matrixWorld),V.matrix.invert(),V.matrix.multiply(G.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(G.projectionMatrix),V.projectionMatrixInverse.copy(G.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=bs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let pt=null;function St(V,G){if(f=G.getViewerPose(c||r),g=G,f!==null){const q=f.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let nt=!1;q.length!==S.cameras.length&&(S.cameras.length=0,nt=!0);for(let At=0;At<q.length;At++){const ut=q[At];let Ut=null;if(u!==null)Ut=u.getViewport(ut);else{const $t=d.getViewSubImage(h,ut);Ut=$t.viewport,At===0&&(t.setRenderTargetTextures(y,$t.colorTexture,h.ignoreDepthValues?void 0:$t.depthStencilTexture),t.setRenderTarget(y))}let It=M[At];It===void 0&&(It=new Un,It.layers.enable(At),It.viewport=new De,M[At]=It),It.matrix.fromArray(ut.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(ut.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),At===0&&(S.matrix.copy(It.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),nt===!0&&S.cameras.push(It)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const At=d.getDepthInformation(q[0]);At&&At.isValid&&At.texture&&x.init(t,At,i.renderState)}}for(let q=0;q<v.length;q++){const nt=_[q],gt=v[q];nt!==null&&gt!==void 0&&gt.update(nt,G,c||r)}pt&&pt(V,G),G.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:G}),g=null}const vt=new od;vt.setAnimationLoop(St),this.setAnimationLoop=function(V){pt=V},this.dispose=function(){}}}const Vi=new Zn,B2=new ze;function G2(o,t){function n(w,p){w.matrixAutoUpdate===!0&&w.updateMatrix(),p.value.copy(w.matrix)}function e(w,p){p.color.getRGB(w.fogColor.value,ed(o)),p.isFog?(w.fogNear.value=p.near,w.fogFar.value=p.far):p.isFogExp2&&(w.fogDensity.value=p.density)}function i(w,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(w,p):p.isMeshToonMaterial?(s(w,p),d(w,p)):p.isMeshPhongMaterial?(s(w,p),f(w,p)):p.isMeshStandardMaterial?(s(w,p),h(w,p),p.isMeshPhysicalMaterial&&u(w,p,_)):p.isMeshMatcapMaterial?(s(w,p),g(w,p)):p.isMeshDepthMaterial?s(w,p):p.isMeshDistanceMaterial?(s(w,p),x(w,p)):p.isMeshNormalMaterial?s(w,p):p.isLineBasicMaterial?(r(w,p),p.isLineDashedMaterial&&a(w,p)):p.isPointsMaterial?l(w,p,y,v):p.isSpriteMaterial?c(w,p):p.isShadowMaterial?(w.color.value.copy(p.color),w.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(w,p){w.opacity.value=p.opacity,p.color&&w.diffuse.value.copy(p.color),p.emissive&&w.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(w.map.value=p.map,n(p.map,w.mapTransform)),p.alphaMap&&(w.alphaMap.value=p.alphaMap,n(p.alphaMap,w.alphaMapTransform)),p.bumpMap&&(w.bumpMap.value=p.bumpMap,n(p.bumpMap,w.bumpMapTransform),w.bumpScale.value=p.bumpScale,p.side===Rn&&(w.bumpScale.value*=-1)),p.normalMap&&(w.normalMap.value=p.normalMap,n(p.normalMap,w.normalMapTransform),w.normalScale.value.copy(p.normalScale),p.side===Rn&&w.normalScale.value.negate()),p.displacementMap&&(w.displacementMap.value=p.displacementMap,n(p.displacementMap,w.displacementMapTransform),w.displacementScale.value=p.displacementScale,w.displacementBias.value=p.displacementBias),p.emissiveMap&&(w.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,w.emissiveMapTransform)),p.specularMap&&(w.specularMap.value=p.specularMap,n(p.specularMap,w.specularMapTransform)),p.alphaTest>0&&(w.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(w.envMap.value=v,Vi.copy(_),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),w.envMapRotation.value.setFromMatrix4(B2.makeRotationFromEuler(Vi)),w.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=p.reflectivity,w.ior.value=p.ior,w.refractionRatio.value=p.refractionRatio),p.lightMap&&(w.lightMap.value=p.lightMap,w.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,w.lightMapTransform)),p.aoMap&&(w.aoMap.value=p.aoMap,w.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,w.aoMapTransform))}function r(w,p){w.diffuse.value.copy(p.color),w.opacity.value=p.opacity,p.map&&(w.map.value=p.map,n(p.map,w.mapTransform))}function a(w,p){w.dashSize.value=p.dashSize,w.totalSize.value=p.dashSize+p.gapSize,w.scale.value=p.scale}function l(w,p,y,v){w.diffuse.value.copy(p.color),w.opacity.value=p.opacity,w.size.value=p.size*y,w.scale.value=v*.5,p.map&&(w.map.value=p.map,n(p.map,w.uvTransform)),p.alphaMap&&(w.alphaMap.value=p.alphaMap,n(p.alphaMap,w.alphaMapTransform)),p.alphaTest>0&&(w.alphaTest.value=p.alphaTest)}function c(w,p){w.diffuse.value.copy(p.color),w.opacity.value=p.opacity,w.rotation.value=p.rotation,p.map&&(w.map.value=p.map,n(p.map,w.mapTransform)),p.alphaMap&&(w.alphaMap.value=p.alphaMap,n(p.alphaMap,w.alphaMapTransform)),p.alphaTest>0&&(w.alphaTest.value=p.alphaTest)}function f(w,p){w.specular.value.copy(p.specular),w.shininess.value=Math.max(p.shininess,1e-4)}function d(w,p){p.gradientMap&&(w.gradientMap.value=p.gradientMap)}function h(w,p){w.metalness.value=p.metalness,p.metalnessMap&&(w.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,w.metalnessMapTransform)),w.roughness.value=p.roughness,p.roughnessMap&&(w.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,w.roughnessMapTransform)),p.envMap&&(w.envMapIntensity.value=p.envMapIntensity)}function u(w,p,y){w.ior.value=p.ior,p.sheen>0&&(w.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),w.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(w.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,w.sheenColorMapTransform)),p.sheenRoughnessMap&&(w.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,w.sheenRoughnessMapTransform))),p.clearcoat>0&&(w.clearcoat.value=p.clearcoat,w.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(w.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,w.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(w.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&w.clearcoatNormalScale.value.negate())),p.dispersion>0&&(w.dispersion.value=p.dispersion),p.iridescence>0&&(w.iridescence.value=p.iridescence,w.iridescenceIOR.value=p.iridescenceIOR,w.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(w.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,w.iridescenceMapTransform)),p.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),p.transmission>0&&(w.transmission.value=p.transmission,w.transmissionSamplerMap.value=y.texture,w.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(w.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,w.transmissionMapTransform)),w.thickness.value=p.thickness,p.thicknessMap&&(w.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=p.attenuationDistance,w.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(w.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(w.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=p.specularIntensity,w.specularColor.value.copy(p.specularColor),p.specularColorMap&&(w.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,w.specularColorMapTransform)),p.specularIntensityMap&&(w.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,w.specularIntensityMapTransform))}function g(w,p){p.matcap&&(w.matcap.value=p.matcap)}function x(w,p){const y=t.get(p).light;w.referencePosition.value.setFromMatrixPosition(y.matrixWorld),w.nearDistance.value=y.shadow.camera.near,w.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function H2(o,t,n,e){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const _=v.program;e.uniformBlockBinding(y,_)}function c(y,v){let _=i[y.id];_===void 0&&(g(y),_=f(y),i[y.id]=_,y.addEventListener("dispose",w));const P=v.program;e.updateUBOMapping(y,P);const R=t.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function f(y){const v=d();y.__bindingPointIndex=v;const _=o.createBuffer(),P=y.__size,R=y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,_),o.bufferData(o.UNIFORM_BUFFER,P,R),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,v,_),_}function d(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=i[y.id],_=y.uniforms,P=y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,v);for(let R=0,A=_.length;R<A;R++){const D=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,S=D.length;M<S;M++){const L=D[M];if(u(L,R,M,P)===!0){const k=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let Z=0;Z<B.length;Z++){const H=B[Z],Q=x(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,k+j,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,j),j+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,L.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function u(y,v,_,P){const R=y.value,A=v+"_"+_;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const D=P[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(y){const v=y.uniforms;let _=0;const P=16;for(let A=0,D=v.length;A<D;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,L=M.length;S<L;S++){const k=M[S],B=Array.isArray(k.value)?k.value:[k.value];for(let j=0,Z=B.length;j<Z;j++){const H=B[j],Q=x(H),Y=_%P,at=Y%Q.boundary,ct=Y+at;_+=at,ct!==0&&P-ct<Q.storage&&(_+=P-ct),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=Q.storage}}}const R=_%P;return R>0&&(_+=P-R),y.__size=_,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function w(y){const v=y.target;v.removeEventListener("dispose",w);const _=r.indexOf(v.__bindingPointIndex);r.splice(_,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const y in i)o.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class V2{constructor(t={}){const{canvas:n=Ih(),context:e=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let u;if(e!==null){if(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=e.getContextAttributes().alpha}else u=r;const g=new Uint32Array(4),x=new Int32Array(4);let w=null,p=null;const y=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Ri,this.toneMappingExposure=1;const _=this;let P=!1,R=0,A=0,D=null,M=-1,S=null;const L=new De,k=new De;let B=null;const j=new we(0);let Z=0,H=n.width,Q=n.height,Y=1,at=null,ct=null;const pt=new De(0,0,H,Q),St=new De(0,0,H,Q);let vt=!1;const V=new El;let G=!1,q=!1;const nt=new ze,gt=new ze,At=new N,ut=new De,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function $t(){return D===null?Y:1}let U=e;function Ht(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wl}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",_t,!1),n.addEventListener("webglcontextcreationerror",wt,!1),U===null){const F="webgl2";if(U=Ht(F,T),U===null)throw Ht(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Et,Ot,Lt,Kt,Tt,C,b,X,it,ot,et,mt,xt,ft,Rt,lt,Mt,Zt,ie,Dt,Qt,Bt,fe,z;function bt(){Et=new qp(U),Et.init(),Bt=new D2(U,Et),Ot=new Hp(U,Et,t,Bt),Lt=new P2(U,Et),Ot.reverseDepthBuffer&&h&&Lt.buffers.depth.setReversed(!0),Kt=new Jp(U),Tt=new m2,C=new L2(U,Et,Lt,Tt,Ot,Bt,Kt),b=new Wp(_),X=new Zp(_),it=new o0(U),fe=new Bp(U,it),ot=new $p(U,it,Kt,fe),et=new Qp(U,ot,it,Kt),ie=new jp(U,Ot,C),lt=new Vp(Tt),mt=new p2(_,b,X,Et,Ot,fe,lt),xt=new G2(_,Tt),ft=new x2,Rt=new S2(Et),Zt=new kp(_,b,X,Lt,et,u,l),Mt=new R2(_,et,Ot),z=new H2(U,Kt,Ot,Lt),Dt=new Gp(U,Et,Kt),Qt=new Kp(U,Et,Kt),Kt.programs=mt.programs,_.capabilities=Ot,_.extensions=Et,_.properties=Tt,_.renderLists=ft,_.shadowMap=Mt,_.state=Lt,_.info=Kt}bt();const J=new k2(_,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(H,Q,!1))},this.getSize=function(T){return T.set(H,Q)},this.setSize=function(T,F,$=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Q=F,n.width=Math.floor(T*Y),n.height=Math.floor(F*Y),$===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(H*Y,Q*Y).floor()},this.setDrawingBufferSize=function(T,F,$){H=T,Q=F,Y=$,n.width=Math.floor(T*$),n.height=Math.floor(F*$),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,F,$,K){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,F,$,K),Lt.viewport(L.copy(pt).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(St)},this.setScissor=function(T,F,$,K){T.isVector4?St.set(T.x,T.y,T.z,T.w):St.set(T,F,$,K),Lt.scissor(k.copy(St).multiplyScalar(Y).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(T){Lt.setScissorTest(vt=T)},this.setOpaqueSort=function(T){at=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(T=!0,F=!0,$=!0){let K=0;if(T){let O=!1;if(D!==null){const dt=D.texture.format;O=dt===bl||dt===Sl||dt===Ml}if(O){const dt=D.texture.type,Ct=dt===pi||dt===Ki||dt===Ss||dt===zo||dt===vl||dt===yl,Wt=Zt.getClearColor(),kt=Zt.getClearAlpha(),re=Wt.r,de=Wt.g,rt=Wt.b;Ct?(g[0]=re,g[1]=de,g[2]=rt,g[3]=kt,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=re,x[1]=de,x[2]=rt,x[3]=kt,U.clearBufferiv(U.COLOR,0,x))}else K|=U.COLOR_BUFFER_BIT}F&&(K|=U.DEPTH_BUFFER_BIT),$&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",_t,!1),n.removeEventListener("webglcontextcreationerror",wt,!1),ft.dispose(),Rt.dispose(),Tt.dispose(),b.dispose(),X.dispose(),et.dispose(),fe.dispose(),z.dispose(),mt.dispose(),J.dispose(),J.removeEventListener("sessionstart",ln),J.removeEventListener("sessionend",Oe),Me.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=Kt.autoReset,F=Mt.enabled,$=Mt.autoUpdate,K=Mt.needsUpdate,O=Mt.type;bt(),Kt.autoReset=T,Mt.enabled=F,Mt.autoUpdate=$,Mt.needsUpdate=K,Mt.type=O}function wt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vt(T){const F=T.target;F.removeEventListener("dispose",Vt),le(F)}function le(T){Ae(T),Tt.remove(T)}function Ae(T){const F=Tt.get(T).programs;F!==void 0&&(F.forEach(function($){mt.releaseProgram($)}),T.isShaderMaterial&&mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,$,K,O,dt){F===null&&(F=Ut);const Ct=O.isMesh&&O.matrixWorld.determinant()<0,Wt=Re(T,F,$,K,O);Lt.setMaterial(K,Ct);let kt=$.index,re=1;if(K.wireframe===!0){if(kt=ot.getWireframeAttribute($),kt===void 0)return;re=2}const de=$.drawRange,rt=$.attributes.position;let yt=de.start*re,jt=(de.start+de.count)*re;dt!==null&&(yt=Math.max(yt,dt.start*re),jt=Math.min(jt,(dt.start+dt.count)*re)),kt!==null?(yt=Math.max(yt,0),jt=Math.min(jt,kt.count)):rt!=null&&(yt=Math.max(yt,0),jt=Math.min(jt,rt.count));const ne=jt-yt;if(ne<0||ne===1/0)return;fe.setup(O,K,Wt,$,kt);let Se,ce=Dt;if(kt!==null&&(Se=it.get(kt),ce=Qt,ce.setIndex(Se)),O.isMesh)K.wireframe===!0?(Lt.setLineWidth(K.wireframeLinewidth*$t()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(O.isLine){let Nt=K.linewidth;Nt===void 0&&(Nt=1),Lt.setLineWidth(Nt*$t()),O.isLineSegments?ce.setMode(U.LINES):O.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else O.isPoints?ce.setMode(U.POINTS):O.isSprite&&ce.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ce.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))ce.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Nt=O._multiDrawStarts,Ve=O._multiDrawCounts,_e=O._multiDrawCount,Je=kt?it.get(kt).bytesPerElement:1,bn=Tt.get(K).currentProgram.getUniforms();for(let ke=0;ke<_e;ke++)bn.setValue(U,"_gl_DrawID",ke),ce.render(Nt[ke]/Je,Ve[ke])}else if(O.isInstancedMesh)ce.renderInstances(yt,ne,O.count);else if($.isInstancedBufferGeometry){const Nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ve=Math.min($.instanceCount,Nt);ce.renderInstances(yt,ne,Ve)}else ce.render(yt,ne)};function oe(T,F,$){T.transparent===!0&&T.side===pn&&T.forceSinglePass===!1?(T.side=Rn,T.needsUpdate=!0,He(T,F,$),T.side=Ci,T.needsUpdate=!0,He(T,F,$),T.side=pn):He(T,F,$)}this.compile=function(T,F,$=null){$===null&&($=T),p=Rt.get($),p.init(F),v.push(p),$.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==$&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const K=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const dt=O.material;if(dt)if(Array.isArray(dt))for(let Ct=0;Ct<dt.length;Ct++){const Wt=dt[Ct];oe(Wt,$,O),K.add(Wt)}else oe(dt,$,O),K.add(dt)}),v.pop(),p=null,K},this.compileAsync=function(T,F,$=null){const K=this.compile(T,F,$);return new Promise(O=>{function dt(){if(K.forEach(function(Ct){Tt.get(Ct).currentProgram.isReady()&&K.delete(Ct)}),K.size===0){O(T);return}setTimeout(dt,10)}Et.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ue=null;function Ge(T){Ue&&Ue(T)}function ln(){Me.stop()}function Oe(){Me.start()}const Me=new od;Me.setAnimationLoop(Ge),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(T){Ue=T,J.setAnimationLoop(T),T===null?Me.stop():Me.start()},J.addEventListener("sessionstart",ln),J.addEventListener("sessionend",Oe),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,D),p=Rt.get(T,v.length),p.init(F),v.push(p),gt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(gt),q=this.localClippingEnabled,G=lt.init(this.clippingPlanes,q),w=ft.get(T,y.length),w.init(),y.push(w),J.enabled===!0&&J.isPresenting===!0){const dt=_.xr.getDepthSensingMesh();dt!==null&&Xt(dt,F,-1/0,_.sortObjects)}Xt(T,F,0,_.sortObjects),w.finish(),_.sortObjects===!0&&w.sort(at,ct),It=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,It&&Zt.addToRenderList(w,T),this.info.render.frame++,G===!0&&lt.beginShadows();const $=p.state.shadowsArray;Mt.render($,T,F),G===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=w.opaque,O=w.transmissive;if(p.setupLights(),F.isArrayCamera){const dt=F.cameras;if(O.length>0)for(let Ct=0,Wt=dt.length;Ct<Wt;Ct++){const kt=dt[Ct];se(K,O,T,kt)}It&&Zt.render(T);for(let Ct=0,Wt=dt.length;Ct<Wt;Ct++){const kt=dt[Ct];he(w,T,kt,kt.viewport)}}else O.length>0&&se(K,O,T,F),It&&Zt.render(T),he(w,T,F);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,F),fe.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],G===!0&&lt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?w=y[y.length-1]:w=null};function Xt(T,F,$,K){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){K&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);const Ct=et.update(T),Wt=T.material;Wt.visible&&w.push(T,Ct,Wt,$,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){const Ct=et.update(T),Wt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ut.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ut.copy(Ct.boundingSphere.center)),ut.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(Wt)){const kt=Ct.groups;for(let re=0,de=kt.length;re<de;re++){const rt=kt[re],yt=Wt[rt.materialIndex];yt&&yt.visible&&w.push(T,Ct,yt,$,ut.z,rt)}}else Wt.visible&&w.push(T,Ct,Wt,$,ut.z,null)}}const dt=T.children;for(let Ct=0,Wt=dt.length;Ct<Wt;Ct++)Xt(dt[Ct],F,$,K)}function he(T,F,$,K){const O=T.opaque,dt=T.transmissive,Ct=T.transparent;p.setupLightsView($),G===!0&&lt.setGlobalState(_.clippingPlanes,$),K&&Lt.viewport(L.copy(K)),O.length>0&&ee(O,F,$),dt.length>0&&ee(dt,F,$),Ct.length>0&&ee(Ct,F,$),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function se(T,F,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ji(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Ps:pi,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const dt=p.state.transmissionRenderTarget[K.id],Ct=K.viewport||L;dt.setSize(Ct.z,Ct.w);const Wt=_.getRenderTarget();_.setRenderTarget(dt),_.getClearColor(j),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),It&&Zt.render($);const kt=_.toneMapping;_.toneMapping=Ri;const re=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),G===!0&&lt.setGlobalState(_.clippingPlanes,K),ee(T,$,K),C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt),Et.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let rt=0,yt=F.length;rt<yt;rt++){const jt=F[rt],ne=jt.object,Se=jt.geometry,ce=jt.material,Nt=jt.group;if(ce.side===pn&&ne.layers.test(K.layers)){const Ve=ce.side;ce.side=Rn,ce.needsUpdate=!0,pe(ne,$,K,Se,ce,Nt),ce.side=Ve,ce.needsUpdate=!0,de=!0}}de===!0&&(C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt))}_.setRenderTarget(Wt),_.setClearColor(j,Z),re!==void 0&&(K.viewport=re),_.toneMapping=kt}function ee(T,F,$){const K=F.isScene===!0?F.overrideMaterial:null;for(let O=0,dt=T.length;O<dt;O++){const Ct=T[O],Wt=Ct.object,kt=Ct.geometry,re=K===null?Ct.material:K,de=Ct.group;Wt.layers.test($.layers)&&pe(Wt,F,$,kt,re,de)}}function pe(T,F,$,K,O,dt){T.onBeforeRender(_,F,$,K,O,dt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,F,$,K,T,dt),O.transparent===!0&&O.side===pn&&O.forceSinglePass===!1?(O.side=Rn,O.needsUpdate=!0,_.renderBufferDirect($,F,K,O,T,dt),O.side=Ci,O.needsUpdate=!0,_.renderBufferDirect($,F,K,O,T,dt),O.side=pn):_.renderBufferDirect($,F,K,O,T,dt),T.onAfterRender(_,F,$,K,O,dt)}function He(T,F,$){F.isScene!==!0&&(F=Ut);const K=Tt.get(T),O=p.state.lights,dt=p.state.shadowsArray,Ct=O.state.version,Wt=mt.getParameters(T,O.state,dt,F,$),kt=mt.getProgramCacheKey(Wt);let re=K.programs;K.environment=T.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(T.isMeshStandardMaterial?X:b).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,re===void 0&&(T.addEventListener("dispose",Vt),re=new Map,K.programs=re);let de=re.get(kt);if(de!==void 0){if(K.currentProgram===de&&K.lightsStateVersion===Ct)return ye(T,Wt),de}else Wt.uniforms=mt.getUniforms(T),T.onBeforeCompile(Wt,_),de=mt.acquireProgram(Wt,kt),re.set(kt,de),K.uniforms=Wt.uniforms;const rt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(rt.clippingPlanes=lt.uniform),ye(T,Wt),K.needsLights=Jt(T),K.lightsStateVersion=Ct,K.needsLights&&(rt.ambientLightColor.value=O.state.ambient,rt.lightProbe.value=O.state.probe,rt.directionalLights.value=O.state.directional,rt.directionalLightShadows.value=O.state.directionalShadow,rt.spotLights.value=O.state.spot,rt.spotLightShadows.value=O.state.spotShadow,rt.rectAreaLights.value=O.state.rectArea,rt.ltc_1.value=O.state.rectAreaLTC1,rt.ltc_2.value=O.state.rectAreaLTC2,rt.pointLights.value=O.state.point,rt.pointLightShadows.value=O.state.pointShadow,rt.hemisphereLights.value=O.state.hemi,rt.directionalShadowMap.value=O.state.directionalShadowMap,rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,rt.spotShadowMap.value=O.state.spotShadowMap,rt.spotLightMatrix.value=O.state.spotLightMatrix,rt.spotLightMap.value=O.state.spotLightMap,rt.pointShadowMap.value=O.state.pointShadowMap,rt.pointShadowMatrix.value=O.state.pointShadowMatrix),K.currentProgram=de,K.uniformsList=null,de}function cn(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Er.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ye(T,F){const $=Tt.get(T);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Re(T,F,$,K,O){F.isScene!==!0&&(F=Ut),C.resetTextureUnits();const dt=F.fog,Ct=K.isMeshStandardMaterial?F.environment:null,Wt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Bo,kt=(K.isMeshStandardMaterial?X:b).get(K.envMap||Ct),re=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,de=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),rt=!!$.morphAttributes.position,yt=!!$.morphAttributes.normal,jt=!!$.morphAttributes.color;let ne=Ri;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ne=_.toneMapping);const Se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=Se!==void 0?Se.length:0,Nt=Tt.get(K),Ve=p.state.lights;if(G===!0&&(q===!0||T!==S)){const en=T===S&&K.id===M;lt.setState(K,T,en)}let _e=!1;K.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ve.state.version||Nt.outputColorSpace!==Wt||O.isBatchedMesh&&Nt.batching===!1||!O.isBatchedMesh&&Nt.batching===!0||O.isBatchedMesh&&Nt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Nt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Nt.instancing===!1||!O.isInstancedMesh&&Nt.instancing===!0||O.isSkinnedMesh&&Nt.skinning===!1||!O.isSkinnedMesh&&Nt.skinning===!0||O.isInstancedMesh&&Nt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Nt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Nt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Nt.instancingMorph===!1&&O.morphTexture!==null||Nt.envMap!==kt||K.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==re||Nt.vertexTangents!==de||Nt.morphTargets!==rt||Nt.morphNormals!==yt||Nt.morphColors!==jt||Nt.toneMapping!==ne||Nt.morphTargetsCount!==ce)&&(_e=!0):(_e=!0,Nt.__version=K.version);let Je=Nt.currentProgram;_e===!0&&(Je=He(K,F,O));let bn=!1,ke=!1,zn=!1;const Ce=Je.getUniforms(),fn=Nt.uniforms;if(Lt.useProgram(Je.program)&&(bn=!0,ke=!0,zn=!0),K.id!==M&&(M=K.id,ke=!0),bn||S!==T){Lt.buffers.depth.getReversed()?(nt.copy(T.projectionMatrix),Dh(nt),Uh(nt),Ce.setValue(U,"projectionMatrix",nt)):Ce.setValue(U,"projectionMatrix",T.projectionMatrix),Ce.setValue(U,"viewMatrix",T.matrixWorldInverse);const nn=Ce.map.cameraPosition;nn!==void 0&&nn.setValue(U,At.setFromMatrixPosition(T.matrixWorld)),Ot.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,ke=!0,zn=!0)}if(O.isSkinnedMesh){Ce.setOptional(U,O,"bindMatrix"),Ce.setOptional(U,O,"bindMatrixInverse");const en=O.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ce.setValue(U,"boneTexture",en.boneTexture,C))}O.isBatchedMesh&&(Ce.setOptional(U,O,"batchingTexture"),Ce.setValue(U,"batchingTexture",O._matricesTexture,C),Ce.setOptional(U,O,"batchingIdTexture"),Ce.setValue(U,"batchingIdTexture",O._indirectTexture,C),Ce.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Ce.setValue(U,"batchingColorTexture",O._colorsTexture,C));const qn=$.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&ie.update(O,$,Je),(ke||Nt.receiveShadow!==O.receiveShadow)&&(Nt.receiveShadow=O.receiveShadow,Ce.setValue(U,"receiveShadow",O.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fn.envMap.value=kt,fn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(fn.envMapIntensity.value=F.environmentIntensity),ke&&(Ce.setValue(U,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&te(fn,zn),dt&&K.fog===!0&&xt.refreshFogUniforms(fn,dt),xt.refreshMaterialUniforms(fn,K,Y,Q,p.state.transmissionRenderTarget[T.id]),Er.upload(U,cn(Nt),fn,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Er.upload(U,cn(Nt),fn,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ce.setValue(U,"center",O.center),Ce.setValue(U,"modelViewMatrix",O.modelViewMatrix),Ce.setValue(U,"normalMatrix",O.normalMatrix),Ce.setValue(U,"modelMatrix",O.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const en=K.uniformsGroups;for(let nn=0,on=en.length;nn<on;nn++){const $n=en[nn];z.update($n,Je),z.bind($n,Je)}}return Je}function te(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Jt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,F,$){Tt.get(T.texture).__webglTexture=F,Tt.get(T.depthTexture).__webglTexture=$;const K=Tt.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const $=Tt.get(T);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,$=0){D=T,R=F,A=$;let K=!0,O=null,dt=!1,Ct=!1;if(T){const kt=Tt.get(T);if(kt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(kt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(kt.__hasExternalTextures)C.rebindTextures(T,Tt.get(T.texture).__webglTexture,Tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const rt=T.depthTexture;if(kt.__boundDepthTexture!==rt){if(rt!==null&&Tt.has(rt)&&(T.width!==rt.image.width||T.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const re=T.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ct=!0);const de=Tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(de[F])?O=de[F][$]:O=de[F],dt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?O=Tt.get(T).__webglMultisampledFramebuffer:Array.isArray(de)?O=de[$]:O=de,L.copy(T.viewport),k.copy(T.scissor),B=T.scissorTest}else L.copy(pt).multiplyScalar(Y).floor(),k.copy(St).multiplyScalar(Y).floor(),B=vt;if(Lt.bindFramebuffer(U.FRAMEBUFFER,O)&&K&&Lt.drawBuffers(T,O),Lt.viewport(L),Lt.scissor(k),Lt.setScissorTest(B),dt){const kt=Tt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,kt.__webglTexture,$)}else if(Ct){const kt=Tt.get(T.texture),re=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,$||0,re)}M=-1},this.readRenderTargetPixels=function(T,F,$,K,O,dt,Ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Wt=Wt[Ct]),Wt){Lt.bindFramebuffer(U.FRAMEBUFFER,Wt);try{const kt=T.texture,re=kt.format,de=kt.type;if(!Ot.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-K&&$>=0&&$<=T.height-O&&U.readPixels(F,$,K,O,Bt.convert(re),Bt.convert(de),dt)}finally{const kt=D!==null?Tt.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,F,$,K,O,dt,Ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Wt=Wt[Ct]),Wt){const kt=T.texture,re=kt.format,de=kt.type;if(!Ot.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-K&&$>=0&&$<=T.height-O){Lt.bindFramebuffer(U.FRAMEBUFFER,Wt);const rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(F,$,K,O,Bt.convert(re),Bt.convert(de),0);const yt=D!==null?Tt.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,yt);const jt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Lh(U,jt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.deleteBuffer(rt),U.deleteSync(jt),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,$=0){T.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-$),O=Math.floor(T.image.width*K),dt=Math.floor(T.image.height*K),Ct=F!==null?F.x:0,Wt=F!==null?F.y:0;C.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Ct,Wt,O,dt),Lt.unbindTexture()},this.copyTextureToTexture=function(T,F,$=null,K=null,O=0){T.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,$=null);let dt,Ct,Wt,kt,re,de,rt,yt,jt;const ne=T.isCompressedTexture?T.mipmaps[O]:T.image;$!==null?(dt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,Wt=$.isBox3?$.max.z-$.min.z:1,kt=$.min.x,re=$.min.y,de=$.isBox3?$.min.z:0):(dt=ne.width,Ct=ne.height,Wt=ne.depth||1,kt=0,re=0,de=0),K!==null?(rt=K.x,yt=K.y,jt=K.z):(rt=0,yt=0,jt=0);const Se=Bt.convert(F.format),ce=Bt.convert(F.type);let Nt;F.isData3DTexture?(C.setTexture3D(F,0),Nt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Nt=U.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Nt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Ve=U.getParameter(U.UNPACK_ROW_LENGTH),_e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Je=U.getParameter(U.UNPACK_SKIP_PIXELS),bn=U.getParameter(U.UNPACK_SKIP_ROWS),ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ne.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),U.pixelStorei(U.UNPACK_SKIP_ROWS,re),U.pixelStorei(U.UNPACK_SKIP_IMAGES,de);const zn=T.isDataArrayTexture||T.isData3DTexture,Ce=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const fn=Tt.get(T),qn=Tt.get(F),en=Tt.get(fn.__renderTarget),nn=Tt.get(qn.__renderTarget);Lt.bindFramebuffer(U.READ_FRAMEBUFFER,en.__webglFramebuffer),Lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let on=0;on<Wt;on++)zn&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.get(T).__webglTexture,O,de+on),T.isDepthTexture?(Ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.get(F).__webglTexture,O,jt+on),U.blitFramebuffer(kt,re,dt,Ct,rt,yt,dt,Ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ce?U.copyTexSubImage3D(Nt,O,rt,yt,jt+on,kt,re,dt,Ct):U.copyTexSubImage2D(Nt,O,rt,yt,jt+on,kt,re,dt,Ct);Lt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ce?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Nt,O,rt,yt,jt,dt,Ct,Wt,Se,ce,ne.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,O,rt,yt,jt,dt,Ct,Wt,Se,ne.data):U.texSubImage3D(Nt,O,rt,yt,jt,dt,Ct,Wt,Se,ce,ne):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,rt,yt,dt,Ct,Se,ce,ne.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,rt,yt,ne.width,ne.height,Se,ne.data):U.texSubImage2D(U.TEXTURE_2D,O,rt,yt,dt,Ct,Se,ce,ne);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ve),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,bn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke),O===0&&F.generateMipmaps&&U.generateMipmap(Nt),Lt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,$=null,K=null,O=0){return T.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,$,K,O)},this.initRenderTarget=function(T){Tt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Lt.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,Lt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),n.unpackColorSpace=Te._getUnpackColorSpace()}}class Rl{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(t),this.density=n}clone(){return new Rl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class W2 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dd extends Vo{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cr=new N,Pr=new N,Zc=new ze,fs=new Kf,dr=new Dr,_a=new N,qc=new N;class X2 extends an{constructor(t=new mn,n=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,e=[0];for(let i=1,s=n.count;i<s;i++)Cr.fromBufferAttribute(n,i-1),Pr.fromBufferAttribute(n,i),e[i]=e[i-1],e[i]+=Cr.distanceTo(Pr);t.setAttribute("lineDistance",new Ie(e,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const e=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=e.drawRange;if(e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere),dr.applyMatrix4(i),dr.radius+=s,t.ray.intersectsSphere(dr)===!1)return;Zc.copy(i).invert(),fs.copy(t.ray).applyMatrix4(Zc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=e.index,h=e.attributes.position;if(f!==null){const u=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=u,w=g-1;x<w;x+=c){const p=f.getX(x),y=f.getX(x+1),v=hr(this,t,fs,l,p,y);v&&n.push(v)}if(this.isLineLoop){const x=f.getX(g-1),w=f.getX(u),p=hr(this,t,fs,l,x,w);p&&n.push(p)}}else{const u=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=u,w=g-1;x<w;x+=c){const p=hr(this,t,fs,l,x,x+1);p&&n.push(p)}if(this.isLineLoop){const x=hr(this,t,fs,l,g-1,u);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const i=n[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hr(o,t,n,e,i,s){const r=o.geometry.attributes.position;if(Cr.fromBufferAttribute(r,i),Pr.fromBufferAttribute(r,s),n.distanceSqToSegment(Cr,Pr,_a,qc)>e)return;_a.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(_a);if(!(l<t.near||l>t.far))return{distance:l,point:qc.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}class ae extends Cn{constructor(t,n,e,i,s,r,a,l,c){super(t,n,e,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const e=this.getUtoTmapping(t);return this.getPoint(e,n)}getPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return n}getSpacedPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPointAt(e/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let e,i=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)e=this.getPoint(r/t),s+=e.distanceTo(i),n.push(s),i=e;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const e=this.getLengths();let i=0;const s=e.length;let r;n?r=n:r=t*e[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=e[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,e[i]===r)return i/(s-1);const f=e[i],h=e[i+1]-f,u=(r-f)/h;return(i+u)/(s-1)}getTangent(t,n){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=n||(r.isVector2?new Yt:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,n){const e=this.getUtoTmapping(t);return this.getTangent(e,n)}computeFrenetFrames(t,n){const e=new N,i=[],s=[],r=[],a=new N,l=new ze;for(let u=0;u<=t;u++){const g=u/t;i[u]=this.getTangentAt(g,new N)}s[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const f=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);f<=c&&(c=f,e.set(1,0,0)),d<=c&&(c=d,e.set(0,1,0)),h<=c&&e.set(0,0,1),a.crossVectors(i[0],e).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(un(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,g))}r[u].crossVectors(i[u],s[u])}if(n===!0){let u=Math.acos(un(s[0].dot(s[t]),-1,1));u/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(u=-u);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends ei{constructor(t=0,n=0,e=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=e,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,n=new Yt){const e=n,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,u=c-this.aY;l=h*f-u*d+this.aX,c=h*d+u*f+this.aY}return e.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Y2 extends Cl{constructor(t,n,e,i,s,r){super(t,n,e,e,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Pl(){let o=0,t=0,n=0,e=0;function i(s,r,a,l){o=s,t=a,n=-3*s+3*r-2*a-l,e=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,f,d){let h=(r-s)/c-(a-s)/(c+f)+(a-r)/f,u=(a-r)/f-(l-r)/(f+d)+(l-a)/d;h*=f,u*=f,i(r,a,h,u)},calc:function(s){const r=s*s,a=r*s;return o+t*s+n*r+e*a}}}const ur=new N,va=new Pl,ya=new Pl,Ma=new Pl;class Z2 extends ei{constructor(t=[],n=!1,e="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=e,this.tension=i}getPoint(t,n=new N){const e=n,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=i[(a-1)%s]:(ur.subVectors(i[0],i[1]).add(i[0]),c=ur);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?f=i[(a+2)%s]:(ur.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(h),u),w=Math.pow(h.distanceToSquared(f),u);x<1e-4&&(x=1),g<1e-4&&(g=x),w<1e-4&&(w=x),va.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,g,x,w),ya.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,g,x,w),Ma.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,g,x,w)}else this.curveType==="catmullrom"&&(va.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),ya.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),Ma.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return e.set(va.calc(l),ya.calc(l),Ma.calc(l)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const i=this.points[n];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $c(o,t,n,e,i){const s=(e-t)*.5,r=(i-n)*.5,a=o*o,l=o*a;return(2*n-2*e+s+r)*l+(-3*n+3*e-2*s-r)*a+s*o+n}function q2(o,t){const n=1-o;return n*n*t}function $2(o,t){return 2*(1-o)*o*t}function K2(o,t){return o*o*t}function ws(o,t,n,e){return q2(o,t)+$2(o,n)+K2(o,e)}function J2(o,t){const n=1-o;return n*n*n*t}function j2(o,t){const n=1-o;return 3*n*n*o*t}function Q2(o,t){return 3*(1-o)*o*o*t}function t1(o,t){return o*o*o*t}function _s(o,t,n,e,i){return J2(o,t)+j2(o,n)+Q2(o,e)+t1(o,i)}class hd extends ei{constructor(t=new Yt,n=new Yt,e=new Yt,i=new Yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=e,this.v3=i}getPoint(t,n=new Yt){const e=n,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(_s(t,i.x,s.x,r.x,a.x),_s(t,i.y,s.y,r.y,a.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e1 extends ei{constructor(t=new N,n=new N,e=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=e,this.v3=i}getPoint(t,n=new N){const e=n,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(_s(t,i.x,s.x,r.x,a.x),_s(t,i.y,s.y,r.y,a.y),_s(t,i.z,s.z,r.z,a.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ud extends ei{constructor(t=new Yt,n=new Yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Yt){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Yt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n1 extends ei{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pd extends ei{constructor(t=new Yt,n=new Yt,e=new Yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new Yt){const e=n,i=this.v0,s=this.v1,r=this.v2;return e.set(ws(t,i.x,s.x,r.x),ws(t,i.y,s.y,r.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class md extends ei{constructor(t=new N,n=new N,e=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new N){const e=n,i=this.v0,s=this.v1,r=this.v2;return e.set(ws(t,i.x,s.x,r.x),ws(t,i.y,s.y,r.y),ws(t,i.z,s.z,r.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gd extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Yt){const e=n,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],f=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return e.set($c(a,l.x,c.x,f.x,d.x),$c(a,l.y,c.y,f.y,d.y)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const i=this.points[n];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(new Yt().fromArray(i))}return this}}var Kc=Object.freeze({__proto__:null,ArcCurve:Y2,CatmullRomCurve3:Z2,CubicBezierCurve:hd,CubicBezierCurve3:e1,EllipseCurve:Cl,LineCurve:ud,LineCurve3:n1,QuadraticBezierCurve:pd,QuadraticBezierCurve3:md,SplineCurve:gd});class i1 extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const e=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kc[e](n,t))}return this}getPoint(t,n){const e=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=e){const r=i[s]-e,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let e=0,i=this.curves.length;e<i;e++)n+=this.curves[e].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let e;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];e&&e.equals(f)||(n.push(f),e=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const i=t.curves[n];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,e=this.curves.length;n<e;n++){const i=this.curves[n];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const i=t.curves[n];this.curves.push(new Kc[i.type]().fromJSON(i))}return this}}class Jc extends i1{constructor(t){super(),this.type="Path",this.currentPoint=new Yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,e=t.length;n<e;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const e=new ud(this.currentPoint.clone(),new Yt(t,n));return this.curves.push(e),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,e,i){const s=new pd(this.currentPoint.clone(),new Yt(t,n),new Yt(e,i));return this.curves.push(s),this.currentPoint.set(e,i),this}bezierCurveTo(t,n,e,i,s,r){const a=new hd(this.currentPoint.clone(),new Yt(t,n),new Yt(e,i),new Yt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),e=new gd(n);return this.curves.push(e),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,e,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,n+l,e,i,s,r),this}absarc(t,n,e,i,s,r){return this.absellipse(t,n,e,e,i,s,r),this}ellipse(t,n,e,i,s,r,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,n+f,e,i,s,r,a,l),this}absellipse(t,n,e,i,s,r,a,l){const c=new Cl(t,n,e,i,s,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sn extends mn{constructor(t=1,n=32,e=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:e,thetaLength:i},n=Math.max(3,n);const s=[],r=[],a=[],l=[],c=new N,f=new Yt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const u=e+d/n*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),r.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(r[h]/t+1)/2,f.y=(r[h+1]/t+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class W extends mn{constructor(t=1,n=1,e=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const f=[],d=[],h=[],u=[];let g=0;const x=[],w=e/2;let p=0;y(),r===!1&&(t>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function y(){const _=new N,P=new N;let R=0;const A=(n-t)/e;for(let D=0;D<=s;D++){const M=[],S=D/s,L=S*(n-t)+t;for(let k=0;k<=i;k++){const B=k/i,j=B*l+a,Z=Math.sin(j),H=Math.cos(j);P.x=L*Z,P.y=-S*e+w,P.z=L*H,d.push(P.x,P.y,P.z),_.set(Z,A,H).normalize(),h.push(_.x,_.y,_.z),u.push(B,1-S),M.push(g++)}x.push(M)}for(let D=0;D<i;D++)for(let M=0;M<s;M++){const S=x[M][D],L=x[M+1][D],k=x[M+1][D+1],B=x[M][D+1];(t>0||M!==0)&&(f.push(S,L,B),R+=3),(n>0||M!==s-1)&&(f.push(L,k,B),R+=3)}c.addGroup(p,R,0),p+=R}function v(_){const P=g,R=new Yt,A=new N;let D=0;const M=_===!0?t:n,S=_===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,w*S,0),h.push(0,S,0),u.push(.5,.5),g++;const L=g;for(let k=0;k<=i;k++){const j=k/i*l+a,Z=Math.cos(j),H=Math.sin(j);A.x=M*H,A.y=w*S,A.z=M*Z,d.push(A.x,A.y,A.z),h.push(0,S,0),R.x=Z*.5+.5,R.y=H*.5*S+.5,u.push(R.x,R.y),g++}for(let k=0;k<i;k++){const B=P+k,j=L+k;_===!0?f.push(j,j+1,B):f.push(j+1,j,B),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new W(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ke extends W{constructor(t=1,n=1,e=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,n,e,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:e,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ke(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Il extends mn{constructor(t=[],n=[],e=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:e,detail:i};const s=[],r=[];a(i),c(e),f(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new N,_=new N,P=new N;for(let R=0;R<n.length;R+=3)u(n[R+0],v),u(n[R+1],_),u(n[R+2],P),l(v,_,P,y)}function l(y,v,_,P){const R=P+1,A=[];for(let D=0;D<=R;D++){A[D]=[];const M=y.clone().lerp(_,D/R),S=v.clone().lerp(_,D/R),L=R-D;for(let k=0;k<=L;k++)k===0&&D===R?A[D][k]=M:A[D][k]=M.clone().lerp(S,k/L)}for(let D=0;D<R;D++)for(let M=0;M<2*(R-D)-1;M++){const S=Math.floor(M/2);M%2===0?(h(A[D][S+1]),h(A[D+1][S]),h(A[D][S])):(h(A[D][S+1]),h(A[D+1][S+1]),h(A[D+1][S]))}}function c(y){const v=new N;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(y),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function f(){const y=new N;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const _=w(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;r.push(_,1-P)}g(),d()}function d(){for(let y=0;y<r.length;y+=6){const v=r[y+0],_=r[y+2],P=r[y+4],R=Math.max(v,_,P),A=Math.min(v,_,P);R>.9&&A<.1&&(v<.2&&(r[y+0]+=1),_<.2&&(r[y+2]+=1),P<.2&&(r[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function u(y,v){const _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const y=new N,v=new N,_=new N,P=new N,R=new Yt,A=new Yt,D=new Yt;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),R.set(r[S+0],r[S+1]),A.set(r[S+2],r[S+3]),D.set(r[S+4],r[S+5]),P.copy(y).add(v).add(_).divideScalar(3);const L=w(P);x(R,S+0,y,L),x(A,S+2,v,L),x(D,S+4,_,L)}}function x(y,v,_,P){P<0&&y.x===1&&(r[v]=y.x-1),_.x===0&&_.z===0&&(r[v]=P/2/Math.PI+.5)}function w(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.vertices,t.indices,t.radius,t.details)}}class Yn extends Il{constructor(t=1,n=0){const e=(1+Math.sqrt(5))/2,i=1/e,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-e,0,-i,e,0,i,-e,0,i,e,-i,-e,0,-i,e,0,i,-e,0,i,e,0,-e,0,-i,e,0,-i,-e,0,i,e,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Yn(t.radius,t.detail)}}class xd extends Jc{constructor(t){super(t),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let e=0,i=this.holes.length;e<i;e++)n[e]=this.holes[e].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const i=t.holes[n];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,e=this.holes.length;n<e;n++){const i=this.holes[n];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const i=t.holes[n];this.holes.push(new Jc().fromJSON(i))}return this}}const o1={triangulate:function(o,t,n=2){const e=t&&t.length,i=e?t[0]*n:o.length;let s=wd(o,0,i,n,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,f,d,h,u;if(e&&(s=c1(o,t,s,n)),o.length>80*n){a=c=o[0],l=f=o[1];for(let g=n;g<i;g+=n)d=o[g],h=o[g+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>f&&(f=h);u=Math.max(c-a,f-l),u=u!==0?32767/u:0}return Ts(s,r,n,a,l,u,0),r}};function wd(o,t,n,e,i){let s,r;if(i===v1(o,t,n,e)>0)for(s=t;s<n;s+=e)r=jc(s,o[s],o[s+1],r);else for(s=n-e;s>=t;s-=e)r=jc(s,o[s],o[s+1],r);return r&&Nr(r,r.next)&&(As(r),r=r.next),r}function ji(o,t){if(!o)return o;t||(t=o);let n=o,e;do if(e=!1,!n.steiner&&(Nr(n,n.next)||Be(n.prev,n,n.next)===0)){if(As(n),n=t=n.prev,n===n.next)break;e=!0}else n=n.next;while(e||n!==t);return t}function Ts(o,t,n,e,i,s,r){if(!o)return;!r&&s&&p1(o,e,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?r1(o,e,i,s):s1(o)){t.push(l.i/n|0),t.push(o.i/n|0),t.push(c.i/n|0),As(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=a1(ji(o),t,n),Ts(o,t,n,e,i,s,2)):r===2&&l1(o,t,n,e,i,s):Ts(ji(o),t,n,e,i,s,1);break}}}function s1(o){const t=o.prev,n=o,e=o.next;if(Be(t,n,e)>=0)return!1;const i=t.x,s=n.x,r=e.x,a=t.y,l=n.y,c=e.y,f=i<s?i<r?i:r:s<r?s:r,d=a<l?a<c?a:c:l<c?l:c,h=i>s?i>r?i:r:s>r?s:r,u=a>l?a>c?a:c:l>c?l:c;let g=e.next;for(;g!==t;){if(g.x>=f&&g.x<=h&&g.y>=d&&g.y<=u&&Ro(i,a,s,l,r,c,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function r1(o,t,n,e){const i=o.prev,s=o,r=o.next;if(Be(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,f=i.y,d=s.y,h=r.y,u=a<l?a<c?a:c:l<c?l:c,g=f<d?f<h?f:h:d<h?d:h,x=a>l?a>c?a:c:l>c?l:c,w=f>d?f>h?f:h:d>h?d:h,p=pl(u,g,t,n,e),y=pl(x,w,t,n,e);let v=o.prevZ,_=o.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=w&&v!==i&&v!==r&&Ro(a,f,l,d,c,h,v.x,v.y)&&Be(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=u&&_.x<=x&&_.y>=g&&_.y<=w&&_!==i&&_!==r&&Ro(a,f,l,d,c,h,_.x,_.y)&&Be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=w&&v!==i&&v!==r&&Ro(a,f,l,d,c,h,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=u&&_.x<=x&&_.y>=g&&_.y<=w&&_!==i&&_!==r&&Ro(a,f,l,d,c,h,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function a1(o,t,n){let e=o;do{const i=e.prev,s=e.next.next;!Nr(i,s)&&_d(i,e,e.next,s)&&Es(i,s)&&Es(s,i)&&(t.push(i.i/n|0),t.push(e.i/n|0),t.push(s.i/n|0),As(e),As(e.next),e=o=s),e=e.next}while(e!==o);return ji(e)}function l1(o,t,n,e,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&x1(r,a)){let l=vd(r,a);r=ji(r,r.next),l=ji(l,l.next),Ts(r,t,n,e,i,s,0),Ts(l,t,n,e,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function c1(o,t,n,e){const i=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*e,l=s<r-1?t[s+1]*e:o.length,c=wd(o,a,l,e,!1),c===c.next&&(c.steiner=!0),i.push(g1(c));for(i.sort(f1),s=0;s<i.length;s++)n=d1(i[s],n);return n}function f1(o,t){return o.x-t.x}function d1(o,t){const n=h1(o,t);if(!n)return t;const e=vd(n,o);return ji(e,e.next),ji(n,n.next)}function h1(o,t){let n=t,e=-1/0,i;const s=o.x,r=o.y;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>e&&(e=h,i=n.x<n.next.x?n:n.next,h===s))return i}n=n.next}while(n!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let f=1/0,d;n=i;do s>=n.x&&n.x>=l&&s!==n.x&&Ro(r<c?s:e,r,l,c,r<c?e:s,r,n.x,n.y)&&(d=Math.abs(r-n.y)/(s-n.x),Es(n,o)&&(d<f||d===f&&(n.x>i.x||n.x===i.x&&u1(i,n)))&&(i=n,f=d)),n=n.next;while(n!==a);return i}function u1(o,t){return Be(o.prev,o,t.prev)<0&&Be(t.next,o,o.next)<0}function p1(o,t,n,e){let i=o;do i.z===0&&(i.z=pl(i.x,i.y,t,n,e)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,m1(i)}function m1(o){let t,n,e,i,s,r,a,l,c=1;do{for(n=o,o=null,s=null,r=0;n;){for(r++,e=n,a=0,t=0;t<c&&(a++,e=e.nextZ,!!e);t++);for(l=c;a>0||l>0&&e;)a!==0&&(l===0||!e||n.z<=e.z)?(i=n,n=n.nextZ,a--):(i=e,e=e.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;n=e}s.nextZ=null,c*=2}while(r>1);return o}function pl(o,t,n,e,i){return o=(o-n)*i|0,t=(t-e)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function g1(o){let t=o,n=o;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==o);return n}function Ro(o,t,n,e,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(e-a)>=(n-r)*(t-a)&&(n-r)*(s-a)>=(i-r)*(e-a)}function x1(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!w1(o,t)&&(Es(o,t)&&Es(t,o)&&_1(o,t)&&(Be(o.prev,o,t.prev)||Be(o,t.prev,t))||Nr(o,t)&&Be(o.prev,o,o.next)>0&&Be(t.prev,t,t.next)>0)}function Be(o,t,n){return(t.y-o.y)*(n.x-t.x)-(t.x-o.x)*(n.y-t.y)}function Nr(o,t){return o.x===t.x&&o.y===t.y}function _d(o,t,n,e){const i=mr(Be(o,t,n)),s=mr(Be(o,t,e)),r=mr(Be(n,e,o)),a=mr(Be(n,e,t));return!!(i!==s&&r!==a||i===0&&pr(o,n,t)||s===0&&pr(o,e,t)||r===0&&pr(n,o,e)||a===0&&pr(n,t,e))}function pr(o,t,n){return t.x<=Math.max(o.x,n.x)&&t.x>=Math.min(o.x,n.x)&&t.y<=Math.max(o.y,n.y)&&t.y>=Math.min(o.y,n.y)}function mr(o){return o>0?1:o<0?-1:0}function w1(o,t){let n=o;do{if(n.i!==o.i&&n.next.i!==o.i&&n.i!==t.i&&n.next.i!==t.i&&_d(n,n.next,o,t))return!0;n=n.next}while(n!==o);return!1}function Es(o,t){return Be(o.prev,o,o.next)<0?Be(o,t,o.next)>=0&&Be(o,o.prev,t)>=0:Be(o,t,o.prev)<0||Be(o,o.next,t)<0}function _1(o,t){let n=o,e=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&i<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(e=!e),n=n.next;while(n!==o);return e}function vd(o,t){const n=new ml(o.i,o.x,o.y),e=new ml(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,n.next=i,i.prev=n,e.next=n,n.prev=e,s.next=e,e.prev=s,e}function jc(o,t,n,e){const i=new ml(o,t,n);return e?(i.next=e.next,i.prev=e,e.next.prev=i,e.next=i):(i.prev=i,i.next=i),i}function As(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function ml(o,t,n){this.i=o,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function v1(o,t,n,e){let i=0;for(let s=t,r=n-e;s<n;s+=e)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class vs{static area(t){const n=t.length;let e=0;for(let i=n-1,s=0;s<n;i=s++)e+=t[i].x*t[s].y-t[s].x*t[i].y;return e*.5}static isClockWise(t){return vs.area(t)<0}static triangulateShape(t,n){const e=[],i=[],s=[];Qc(t),tf(e,t);let r=t.length;n.forEach(Qc);for(let l=0;l<n.length;l++)i.push(r),r+=n[l].length,tf(e,n[l]);const a=o1.triangulate(e,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Qc(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function tf(o,t){for(let n=0;n<t.length;n++)o.push(t[n].x),o.push(t[n].y)}class Ll extends mn{constructor(t=.5,n=1,e=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:e,phiSegments:i,thetaStart:s,thetaLength:r},e=Math.max(3,e),i=Math.max(1,i);const a=[],l=[],c=[],f=[];let d=t;const h=(n-t)/i,u=new N,g=new Yt;for(let x=0;x<=i;x++){for(let w=0;w<=e;w++){const p=s+w/e*r;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/n+1)/2,g.y=(u.y/n+1)/2,f.push(g.x,g.y)}d+=h}for(let x=0;x<i;x++){const w=x*(e+1);for(let p=0;p<e;p++){const y=p+w,v=y,_=y+e+1,P=y+e+2,R=y+1;a.push(v,_,R),a.push(_,P,R)}}this.setIndex(a),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Dl extends mn{constructor(t=new xd([new Yt(0,.5),new Yt(-.5,-.5),new Yt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const e=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let f=0;f<t.length;f++)c(t[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(e),this.setAttribute("position",new Ie(i,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2));function c(f){const d=i.length/3,h=f.extractPoints(n);let u=h.shape;const g=h.holes;vs.isClockWise(u)===!1&&(u=u.reverse());for(let w=0,p=g.length;w<p;w++){const y=g[w];vs.isClockWise(y)===!0&&(g[w]=y.reverse())}const x=vs.triangulateShape(u,g);for(let w=0,p=g.length;w<p;w++){const y=g[w];u=u.concat(y)}for(let w=0,p=u.length;w<p;w++){const y=u[w];i.push(y.x,y.y,0),s.push(0,0,1),r.push(y.x,y.y)}for(let w=0,p=x.length;w<p;w++){const y=x[w],v=y[0]+d,_=y[1]+d,P=y[2]+d;e.push(v,_,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return y1(n,t)}static fromJSON(t,n){const e=[];for(let i=0,s=t.shapes.length;i<s;i++){const r=n[t.shapes[i]];e.push(r)}return new Dl(e,t.curveSegments)}}function y1(o,t){if(t.shapes=[],Array.isArray(o))for(let n=0,e=o.length;n<e;n++){const i=o[n];t.shapes.push(i.uuid)}else t.shapes.push(o.uuid);return t}class Ee extends mn{constructor(t=1,n=32,e=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:e,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},n=Math.max(3,Math.floor(n)),e=Math.max(2,Math.floor(e));const l=Math.min(r+a,Math.PI);let c=0;const f=[],d=new N,h=new N,u=[],g=[],x=[],w=[];for(let p=0;p<=e;p++){const y=[],v=p/e;let _=0;p===0&&r===0?_=.5/n:p===e&&l===Math.PI&&(_=-.5/n);for(let P=0;P<=n;P++){const R=P/n;d.x=-t*Math.cos(i+R*s)*Math.sin(r+v*a),d.y=t*Math.cos(r+v*a),d.z=t*Math.sin(i+R*s)*Math.sin(r+v*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),w.push(R+_,1-v),y.push(c++)}f.push(y)}for(let p=0;p<e;p++)for(let y=0;y<n;y++){const v=f[p][y+1],_=f[p][y],P=f[p+1][y],R=f[p+1][y+1];(p!==0||r>0)&&u.push(v,_,R),(p!==e-1||l<Math.PI)&&u.push(_,P,R)}this.setIndex(u),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(w,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $e extends mn{constructor(t=1,n=.4,e=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:e,tubularSegments:i,arc:s},e=Math.floor(e),i=Math.floor(i);const r=[],a=[],l=[],c=[],f=new N,d=new N,h=new N;for(let u=0;u<=e;u++)for(let g=0;g<=i;g++){const x=g/i*s,w=u/e*Math.PI*2;d.x=(t+n*Math.cos(w))*Math.cos(x),d.y=(t+n*Math.cos(w))*Math.sin(x),d.z=n*Math.sin(w),a.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(u/e)}for(let u=1;u<=e;u++)for(let g=1;g<=i;g++){const x=(i+1)*u+g-1,w=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,y=(i+1)*u+g;r.push(x,w,y),r.push(w,p,y)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class I extends Vo{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ul extends an{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class M1 extends Ul{constructor(t,n,e){super(t,e),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Sa=new ze,ef=new N,nf=new N;class yd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,e=this.matrix;ef.setFromMatrixPosition(t.matrixWorld),n.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(nf),n.updateMatrixWorld(),Sa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const of=new ze,ds=new N,ba=new N;class S1 extends yd{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,n=0){const e=this.camera,i=this.matrix,s=t.distance||e.far;s!==e.far&&(e.far=s,e.updateProjectionMatrix()),ds.setFromMatrixPosition(t.matrixWorld),e.position.copy(ds),ba.copy(e.position),ba.add(this._cubeDirections[n]),e.up.copy(this._cubeUps[n]),e.lookAt(ba),e.updateMatrixWorld(),i.makeTranslation(-ds.x,-ds.y,-ds.z),of.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of)}}class ve extends Ul{constructor(t,n,e=0,i=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=e,this.decay=i,this.shadow=new S1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class b1 extends yd{constructor(){super(new sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T1 extends Ul{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new b1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class E1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=sf();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function sf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);const ys=new Set,A1=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);function R1(){window.addEventListener("keydown",o=>{ys.add(o.code),A1.has(o.code)&&o.preventDefault()}),window.addEventListener("keyup",o=>{ys.delete(o.code)}),window.addEventListener("blur",()=>ys.clear())}function rf(o,t){let n=0;for(const e of o)ys.has(e)&&(n-=1);for(const e of t)ys.has(e)&&(n+=1);return Math.max(-1,Math.min(1,n))}const Jn=.28,af=1.75,lf=.24,gr=.015;class C1{constructor(){ue(this,"boxes",[])}add(t){return this.boxes.push(t),t}remove(t){const n=this.boxes.indexOf(t);n>=0&&this.boxes.splice(n,1)}move(t,n,e,i,s){const r=this.pushOut(t,n,s);t=r.x,n=r.z;const a=t+e;this.blocked(a,n,s)||(t=a);const l=n+i;return this.blocked(t,l,s)||(n=l),{x:t,z:n}}blocked(t,n,e){return this.hits(t,n,e,Jn)}hits(t,n,e,i){const s=e+af;for(const r of this.boxes)if(!(r.maxY<=e+.04)&&!(r.minY>=s)&&!(r.maxY<=e+lf)&&cf(t,n,i,r))return!0;return!1}pushOut(t,n,e){const i=e+af;for(let s=0;s<4;s++){let r=!1;for(const a of this.boxes){if(a.maxY<=e+.04||a.minY>=i||a.maxY<=e+lf||!cf(t,n,Jn,a))continue;r=!0;const l=t+Jn-a.minX,c=a.maxX-(t-Jn),f=n+Jn-a.minZ,d=a.maxZ-(n-Jn),h=Math.min(l,c,f,d);h>.6||(h===l?t=a.minX-Jn-gr:h===c?t=a.maxX+Jn+gr:h===f?n=a.minZ-Jn-gr:n=a.maxZ+Jn+gr)}if(!r)break}return{x:t,z:n}}}function cf(o,t,n,e){const i=df(o,e.minX,e.maxX),s=df(t,e.minZ,e.maxZ),r=o-i,a=t-s;return r*r+a*a<n*n}function ff(o,t,n,e=0){return o>=n.minX-e&&o<=n.maxX+e&&t>=n.minZ-e&&t<=n.maxZ+e}function df(o,t,n){return Math.max(t,Math.min(n,o))}const xr={x:0,z:0};class P1{constructor(){ue(this,"items",[]);ue(this,"current",null)}add(t){return this.items.push(t),t}update(t,n){const e=t.lookFlat();xr.x=e.x,xr.z=e.z;let i=null,s=1/0;for(const r of this.items){const a=r.x-t.x,l=r.z-t.z,c=Math.hypot(a,l);c>r.radius||c>=s||(c<.001?1:(a*xr.x+l*xr.z)/c)<.2||this.occluded(t.x,t.z,r.x,r.z,n)||(i=r,s=c)}this.current=i}prompt(){if(!this.current)return"";const t=this.current.prompt;return typeof t=="function"?t():t}use(){var t;(t=this.current)==null||t.onInteract()}occluded(t,n,e,i,s){const r=[[t*.65+e*.35,n*.65+i*.35],[t*.35+e*.65,n*.35+i*.65]];for(const a of s.boxes)if(!(a.maxY<1.1)&&!ff(e,i,a,.05)){for(const[l,c]of r)if(ff(l,c,a))return!0}return!1}}class I1{constructor(){ue(this,"text","");ue(this,"timer",0)}show(t,n=3.6){this.text=t,this.timer=n}update(t){this.timer<=0||(this.timer-=t,this.timer<=0&&(this.text=""))}}const L1=0,D1=.15;function Md(o,t){return t>=-3.5&&t<=3.5&&o>=-55&&o<=55||o>=13.5&&o<=18.5&&t>=3.5&&t<=40||o>=-16.5&&o<=-11.5&&t>=-40&&t<=-3.5}function Ta(o,t){return Md(o,t)?L1:D1}function hf(o,t){return o>=-6&&o<=6&&t>=78&&t<=92?"Sun Heights — Suite 402 (Your Room)":o>=-4.5&&o<=4.5&&t>=12.8&&t<=22?"Sun Heights — Entrance Lobby":o>=21.8&&o<=33&&t>=9&&t<=22?"FamilyKonbini — Store":o>=1.5&&o<=10.5&&t>=7.5&&t<=18?"Menya Tokyo — Ramen Bar":o>=-3&&o<=10.5&&t>=24&&t<=36?"Kissaten Mame — Cafe":o>=-8.5&&o<=9.5&&t>=-36.5&&t<=-7.5?"Sakura Pocket Park (桜公園)":o>=4.5&&o<=13.5&&t>=16&&t<=24||o>=-5&&o<=13.5&&t>=21&&t<=24?"Rojiura — Residential Alley":o>=10.5&&o<=21.5&&t>=3.5&&t<=42?"Kita-gai — Shopping Street":o>=-19.5&&o<=-8.5&&t>=-42&&t<=-3.5?"Minami-dori — Residential St":Math.abs(t)<=5?o>=11&&o<=21?"Chuo-dori — North Crosswalk":o>=-19&&o<=-9?"Chuo-dori — South Crosswalk":"Chuo-dori — Central Avenue":"Tokyo — Residential District"}const Sd=[{id:"b-sunheights",name:"Sun Heights Mansion",x:0,z:17.5,w:9,d:10,floors:4,wall:"#262d38",trim:"#3a4454",balcony:"#404c5e",bay:3,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"lobby",enterable:!0,doorFace:"s",doorAlong:0,seed:101},{id:"b-ramen",name:"Menya Tokyo (Ramen)",x:6,z:12.5,w:7,d:9,floors:3,wall:"#2b2622",trim:"#423a32",balcony:"#383028",bay:2,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2],ground:"ramen",enterable:!0,doorFace:"s",doorAlong:.2,sign:{text:"らーめん 麺処",sub:"MENYA TOKYO",bg:"#8a1f18",fg:"#ffebc4"},awning:"#8a1f18",seed:202},{id:"b-konbini",name:"FamilyKonbini Store",x:27,z:15.5,w:11,d:13,floors:3,wall:"#282d34",trim:"#3c4550",balcony:"#333b47",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2],ground:"konbini",enterable:!0,doorFace:"w",doorAlong:0,sign:{text:"CONVENIENCE STORE",sub:"24H コンビニエンス",bg:"#0d6b42",fg:"#ffffff"},awning:"#0d6b42",seed:303},{id:"b-cafe",name:"Cafe Mame",x:3.5,z:30,w:11,d:10,floors:3,wall:"#2a2723",trim:"#453c33",balcony:"#3e352b",bay:3,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"cafe",enterable:!0,doorFace:"e",doorAlong:0,sign:{text:"喫茶 TOKYO CAFE",sub:"ROASTERY & BEANS",bg:"#4a2f1c",fg:"#f4ebd8"},awning:"#4a2f1c",seed:404},{id:"b-ne-apartments",name:"Mori Building",x:27,z:32,w:11,d:14,floors:5,wall:"#232a35",trim:"#384355",balcony:"#2e3848",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"w",doorAlong:0,sign:{text:"森クリニック / 薬局",sub:"PHARMACY & CLINIC",bg:"#1c4a5c",fg:"#e8f4f8"},seed:505},{id:"b-nw-mansion",name:"Chuo Grand Residence",x:-24,z:15.5,w:22,d:13,floors:5,wall:"#222830",trim:"#343e4c",balcony:"#2b3340",bay:6,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"s",doorAlong:-.3,sign:{text:"白金クリーニング",sub:"DRY CLEANERS & LAUNDRY",bg:"#25447a",fg:"#eef4ff"},awning:"#25447a",seed:606},{id:"b-fe-north",name:"Higashi Heights",x:43,z:15.5,w:15,d:13,floors:4,wall:"#26292e",trim:"#3a3f47",balcony:"#31363e",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,sign:{text:"書店 本屋",sub:"BOOKSTORE & CAFE",bg:"#6b301e",fg:"#fbece2"},seed:707},{id:"b-sw-commercial",name:"Minami Square",x:-27,z:-15.5,w:15,d:13,floors:4,wall:"#2c2925",trim:"#443f38",balcony:"#37322c",bay:4,front:"n",open:["n","e"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,sign:{text:"和食 酒処 居酒屋",sub:"TRADITIONAL IZAKAYA",bg:"#8a331a",fg:"#ffeeda"},awning:"#8a331a",seed:808},{id:"b-sw-houses",name:"Minami Residences",x:-27,z:-32,w:15,d:14,floors:3,wall:"#282b2d",trim:"#3c4145",balcony:"#32363a",bay:4,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"home",enterable:!1,doorFace:"e",doorAlong:0,seed:909},{id:"b-se-mansion",name:"Parkside Court",x:23,z:-15.5,w:22,d:13,floors:5,wall:"#212630",trim:"#323a48",balcony:"#29303c",bay:6,front:"n",open:["n"],balconyFaces:["n","w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"n",doorAlong:.2,sign:{text:"パークサイド歯科",sub:"DENTAL CLINIC",bg:"#1f5263",fg:"#e8f7fa"},seed:1010},{id:"b-fe-south",name:"Taito Mansion",x:43,z:-15.5,w:15,d:13,floors:4,wall:"#27292c",trim:"#3d4045",balcony:"#33363a",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1111},{id:"b-fw-north",name:"Nishi Heights",x:-44,z:15.5,w:14,d:13,floors:4,wall:"#242a32",trim:"#363f4b",balcony:"#2d3540",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,seed:1212},{id:"b-fw-south",name:"Nishi Court",x:-44,z:-15.5,w:14,d:13,floors:4,wall:"#2a2725",trim:"#403b38",balcony:"#35312e",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1313}],uf=3.65,U1=18,N1=24,pf=.0022;class z1{constructor(t,n,e){ue(this,"x");ue(this,"z");ue(this,"yaw");ue(this,"pitch",0);ue(this,"feetY");ue(this,"eye",1.62);ue(this,"seated",!1);ue(this,"vx",0);ue(this,"vz",0);ue(this,"forward",new N);ue(this,"right",new N);ue(this,"euler",new Zn(0,0,0,"YXZ"));ue(this,"quat",new Ho);this.x=t,this.z=n,this.yaw=e,this.feetY=Ta(t,n)}applyMouse(t,n){this.yaw-=t*pf,this.pitch-=n*pf,this.pitch=Math.max(-1.25,Math.min(1.25,this.pitch))}update(t,n,e){this.forward.set(0,0,-1),this.euler.set(0,this.yaw,0,"YXZ"),this.forward.applyEuler(this.euler),this.forward.y=0,this.forward.lengthSq()>1e-6&&this.forward.normalize(),this.right.set(-this.forward.z,0,this.forward.x);const i=n&&!this.seated?rf(["KeyS","ArrowDown"],["KeyW","ArrowUp"]):0,s=n&&!this.seated?rf(["KeyA","ArrowLeft"],["KeyD","ArrowRight"]):0;let r=this.forward.x*i+this.right.x*s,a=this.forward.z*i+this.right.z*s;const l=Math.hypot(r,a);l>1&&(r/=l,a/=l);const c=r*uf,f=a*uf,d=Math.hypot(c,f),h=Math.hypot(this.vx,this.vz),g=(d>h?U1:N1)*t,x=c-this.vx,w=f-this.vz,p=Math.hypot(x,w);p<=g?(this.vx=c,this.vz=f):(this.vx+=x/p*g,this.vz+=w/p*g),(!n||this.seated)&&(this.vx=0,this.vz=0);const y=this.vx*t,v=this.vz*t;if(Math.abs(y)>1e-5||Math.abs(v)>1e-5){const A=e.move(this.x,this.z,y,v,this.feetY);this.x=A.x,this.z=A.z}const _=Ta(this.x,this.z),P=1-Math.exp(-14*t);this.feetY+=(_-this.feetY)*P;const R=this.seated?1.05:1.62;this.eye+=(R-this.eye)*(1-Math.exp(-8*t))}moving(){return Math.hypot(this.vx,this.vz)>.15}applyCamera(t){t.position.set(this.x,this.feetY+this.eye,this.z),t.rotation.order="YXZ",t.rotation.y=this.yaw,t.rotation.x=this.pitch,t.rotation.z=0}look(t){return this.euler.set(0,this.yaw,0,"YXZ"),this.quat.setFromEuler(this.euler),t.set(0,0,-1).applyQuaternion(this.quat)}lookFlat(){const t=this.look(this.forward);return{x:t.x,z:t.z}}teleport(t,n,e){this.x=t,this.z=n,e!==void 0&&(this.yaw=e),this.vx=0,this.vz=0,this.feetY=Ta(t,n)}}class F1{constructor(){ue(this,"quality","low");ue(this,"listeners",[]);try{const t=localStorage.getItem("tokyo_graphics_quality");t==="high"||t==="low"?this.quality=t:this.quality="low"}catch{this.quality="low"}}getQuality(){return this.quality}isHigh(){return this.quality==="high"}setQuality(t){this.quality=t;try{localStorage.setItem("tokyo_graphics_quality",t)}catch{}for(const n of this.listeners)n(t)}toggleQuality(){const t=this.quality==="low"?"high":"low";return this.setQuality(t),t}onChange(t){return this.listeners.push(t),()=>{const n=this.listeners.indexOf(t);n>=0&&this.listeners.splice(n,1)}}}const Pn=new F1;new I({vertexColors:!0,roughness:.86,metalness:.04});new Gt({vertexColors:!0,toneMapped:!1});new I({color:1054752,roughness:.08,metalness:.45,transparent:!0,opacity:.55,depthWrite:!1});const We=new I({color:12044756,roughness:.06,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1,side:pn}),O1=new I({color:16777215,roughness:.42,metalness:.62}),Fe=new I({color:2764339,roughness:.4,metalness:.72}),ti=new Gt({color:16769712,toneMapped:!1});function k1(){const o=document.createElement("canvas");o.width=512,o.height=512;const t=o.getContext("2d"),n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");t.fillStyle="#161920",t.fillRect(0,0,512,512),e.fillStyle="#b8b8b8",e.fillRect(0,0,512,512);const i=t.getImageData(0,0,512,512),s=e.getImageData(0,0,512,512),r=i.data,a=s.data;for(let d=0;d<r.length;d+=4){const h=(Math.random()-.5)*18;r[d]=Math.max(10,Math.min(45,r[d]+h)),r[d+1]=Math.max(12,Math.min(48,r[d+1]+h)),r[d+2]=Math.max(16,Math.min(54,r[d+2]+h));const u=(Math.random()-.5)*25;a[d]=Math.max(120,Math.min(230,a[d]+u)),a[d+1]=a[d],a[d+2]=a[d]}t.putImageData(i,0,0),e.putImageData(s,0,0),t.fillStyle="rgba(8, 10, 14, 0.65)",e.fillStyle="rgb(24, 24, 24)";const l=[{x:140,y:160,rx:90,ry:45,rot:.2},{x:380,y:340,rx:110,ry:55,rot:-.3},{x:260,y:440,rx:70,ry:35,rot:.1},{x:100,y:420,rx:60,ry:30,rot:-.2},{x:420,y:120,rx:80,ry:40,rot:.4}];for(const d of l)t.beginPath(),t.ellipse(d.x,d.y,d.rx,d.ry,d.rot,0,Math.PI*2),t.fill(),e.beginPath(),e.ellipse(d.x,d.y,d.rx,d.ry,d.rot,0,Math.PI*2),e.fill();const c=new ae(o);c.wrapS=Pe,c.wrapT=Pe,c.repeat.set(12,1.5),c.colorSpace=ge;const f=new ae(n);return f.wrapS=Pe,f.wrapT=Pe,f.repeat.set(12,1.5),{map:c,roughnessMap:f}}const mf=k1(),B1=new I({map:mf.map,roughnessMap:mf.roughnessMap,roughness:.65,metalness:.22});function G1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#2b3038",t.fillRect(0,0,256,256);const n=64;t.strokeStyle="#1b1e24",t.lineWidth=3;for(let i=0;i<256;i+=n)for(let s=0;s<256;s+=n){const r=Math.floor((Math.random()-.5)*12);t.fillStyle=`rgb(${43+r}, ${48+r}, ${56+r})`,t.fillRect(s+1.5,i+1.5,n-3,n-3),t.strokeRect(s,i,n,n)}const e=new ae(o);return e.wrapS=Pe,e.wrapT=Pe,e.repeat.set(8,2),e.colorSpace=ge,e}const H1=G1(),V1=new I({map:H1,color:13159892,roughness:.88,metalness:.04}),gf=new I({color:2368029,roughness:.92,metalness:.03});function W1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#2c271f",t.fillRect(0,0,256,256);const n=t.getImageData(0,0,256,256),e=n.data;for(let s=0;s<e.length;s+=4){const r=(Math.random()-.5)*22;e[s]=Math.max(25,Math.min(65,e[s]+r)),e[s+1]=Math.max(22,Math.min(58,e[s+1]+r*.9)),e[s+2]=Math.max(16,Math.min(48,e[s+2]+r*.75))}t.putImageData(n,0,0);for(let s=0;s<90;s++){const r=Math.random()*256,a=Math.random()*256,l=.8+Math.random()*1.6;t.fillStyle=Math.random()>.4?"rgba(78, 70, 58, 0.6)":"rgba(28, 24, 18, 0.7)",t.beginPath(),t.arc(r,a,l,0,Math.PI*2),t.fill()}const i=new ae(o);return i.wrapS=Pe,i.wrapT=Pe,i.repeat.set(10,10),i.colorSpace=ge,i}function X1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#1c1b18",t.fillRect(0,0,256,256);const n=8,e=256/n,i=64;t.strokeStyle="#141310",t.lineWidth=2;for(let r=0;r<n;r++){const a=r*e,l=r%2*(i/2);for(let c=-i;c<256+i;c+=i){const f=c+l,d=Math.floor((Math.random()-.5)*16);t.fillStyle=`rgb(${54+d}, ${50+d}, ${44+d})`,t.fillRect(f+1,a+1,i-2,e-2),t.strokeRect(f,a,i,e)}}const s=new ae(o);return s.wrapS=Pe,s.wrapT=Pe,s.repeat.set(4,4),s.colorSpace=ge,s}const Y1=W1(),Z1=X1(),q1=new I({map:Y1,color:12893359,roughness:.94,metalness:.02}),$1=new I({map:Z1,color:13485497,roughness:.88,metalness:.04}),K1=new I({color:1914401,roughness:.92,metalness:.01}),gl=new I({color:1453850,roughness:.95,metalness:0}),J1=new I({color:1255191,roughness:.95,metalness:0}),j1=new I({color:15232662,roughness:.72,metalness:0}),xf=new I({color:16118766,roughness:.72,metalness:0}),Q1=new I({color:9069252,roughness:.72,metalness:0}),Lo=new I({color:1942932,roughness:.35,metalness:.35}),Nl=new I({color:15054884,roughness:.32,metalness:.25}),ms=new I({color:14038054,roughness:.35,metalness:.25}),tg=new I({color:1842722,roughness:.95,metalness:.04}),eg=new I({color:14212841,roughness:.16,metalness:.88}),Ea=new I({color:5520422,roughness:.88,metalness:.02}),ng=new I({color:10390636,roughness:.96,metalness:.01}),ig=new I({color:3027770,roughness:.3,metalness:.85}),Ms=new I({color:14475496,roughness:.42,metalness:.02}),ko=new I({color:13214539,roughness:.65,metalness:.05,emissive:4010002,emissiveIntensity:.2}),ui=new I({color:4009245,roughness:.9,metalness:.02}),Rs=new I({color:3033648,roughness:.85,metalness:0}),zl=new I({color:14257826,roughness:.8,metalness:0});new I({color:14235689,emissive:12395541,emissiveIntensity:.85,roughness:.45});const og=new I({color:15263455,roughness:.22,metalness:.12}),Ft=new I({color:8555158,roughness:.28,metalness:.78}),wf=new I({color:3557470,roughness:.2,metalness:.85}),_f=new I({color:1318440,roughness:.05,metalness:.9,transparent:!0,opacity:.7}),sg=new I({color:16079390,roughness:.35,metalness:.1}),rg=new I({color:15660282,roughness:.05,metalness:.95}),ag=new Gt({color:16770736,transparent:!0,opacity:.07,side:pn,depthWrite:!1,blending:Ra}),vf=new Gt({color:14540253,transparent:!0,opacity:.25,depthWrite:!1}),ht=new Map;function lg(o,t,n,e,i=512,s=160){const r=`${o}|${t}|${n}|${e??""}|${i}|${s}`,a=ht.get(r);if(a)return a;const l=document.createElement("canvas");l.width=i,l.height=s;const c=l.getContext("2d");c.fillStyle=t,c.fillRect(0,0,i,s),c.fillStyle=n,c.textAlign="center",c.textBaseline="middle";const f='"Yu Gothic UI", "Yu Gothic", Meiryo, "MS PGothic", sans-serif';e?(c.font=`700 ${Math.floor(s*.36)}px ${f}`,c.fillText(o,i/2,s*.38),c.font=`500 ${Math.floor(s*.2)}px ${f}`,c.fillText(e,i/2,s*.72)):(c.font=`700 ${Math.floor(s*.42)}px ${f}`,c.fillText(o,i/2,s/2));const d=new ae(l);return d.colorSpace=ge,d.anisotropy=4,ht.set(r,d),d}function Cs(o,t,n,e,i=512,s=160){const r=lg(o,t,n,e,i,s);return new Gt({map:r,toneMapped:!1})}function cg(o){const t=`vend-${o}`,n=ht.get(t);if(n)return n;const e=[{bg:"#0e3d3a",head:"#f2a65a",a:"#d84a3a",b:"#2f6fed",c:"#f2d15a",label:"BOSS COFFEE"},{bg:"#3a1420",head:"#ff5a6a",a:"#7ad0c8",b:"#f2e27a",c:"#ffffff",label:"POCARI SWEAT"},{bg:"#14243f",head:"#7eb6ff",a:"#ff7a45",b:"#6d8",c:"#ffe08a",label:"GREEN TEA"}],i=e[o%e.length],s=document.createElement("canvas");s.width=256,s.height=512;const r=s.getContext("2d");r.fillStyle=i.bg,r.fillRect(0,0,256,512),r.fillStyle=i.head,r.fillRect(16,18,224,64),r.fillStyle="#102028",r.font='700 32px "Yu Gothic UI", Meiryo, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i.label,128,50),[i.a,i.b,i.c].forEach((c,f)=>{const d=110+f*96;r.fillStyle="#071016",r.fillRect(28,d,200,78),r.fillStyle=c,r.fillRect(40,d+12,36,54),r.fillRect(86,d+12,36,54),r.fillRect(132,d+12,36,54),r.fillRect(178,d+12,36,54)}),r.fillStyle="#05070a",r.fillRect(48,430,160,48),r.strokeStyle="rgba(255,255,255,0.35)",r.strokeRect(48,430,160,48);const l=new ae(s);return l.colorSpace=ge,ht.set(t,l),l}function fg(){const o="emergency-exit",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#0a7844",e.fillRect(0,0,256,128),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(8,8,240,112),e.fillStyle="#ffffff",e.font='bold 36px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("非常口 EXIT",128,74);const i=new ae(n);return i.colorSpace=ge,ht.set(o,i),i}function dg(){const o="manhole-cover",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22262c",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill(),e.strokeStyle="#3d444e",e.lineWidth=6,e.stroke(),e.strokeStyle="#485260",e.lineWidth=3,e.beginPath(),e.arc(128,128,96,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(128,128,54,0,Math.PI*2),e.stroke();for(let s=0;s<Math.PI*2;s+=Math.PI/4)e.save(),e.translate(128,128),e.rotate(s),e.fillStyle="#3a424e",e.beginPath(),e.ellipse(0,75,12,18,0,0,Math.PI*2),e.fill(),e.restore();e.fillStyle="#505a68",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("下水",128,128);const i=new ae(n);return i.colorSpace=ge,ht.set(o,i),i}function hg(){const o="konbini-counter-front",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#f8f9fa",e.fillRect(0,0,512,256),e.fillStyle="#0d7a46",e.fillRect(0,48,512,28),e.fillStyle="#ffffff",e.fillRect(0,76,512,8),e.fillStyle="#0080cc",e.fillRect(0,84,512,16),e.strokeStyle="#e2e6ea",e.lineWidth=2;for(let s=128;s<512;s+=128)e.beginPath(),e.moveTo(s,100),e.lineTo(s,230),e.stroke();e.fillStyle="#3a3f47",e.fillRect(0,230,512,26);const i=new ae(n);return i.colorSpace=ge,ht.set(o,i),i}function ug(){const o="konbini-wall-stripes",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#f4f6f9",e.fillRect(0,0,512,512),e.strokeStyle="#e1e5eb",e.lineWidth=2,e.strokeRect(0,0,512,512),e.fillStyle="#0d7a46",e.fillRect(0,18,512,36),e.fillStyle="#ffffff",e.fillRect(0,54,512,8),e.fillStyle="#0080cc",e.fillRect(0,62,512,22);const i=new ae(n);return i.wrapS=Pe,i.wrapT=Pe,i.repeat.set(4,1),i.colorSpace=ge,ht.set(o,i),i}function pg(){const o="konbini-cooler-doors",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#0a1016",e.fillRect(0,0,1024,512);const i=256,s=[[{color:"#2b7835",label:"お〜いお茶"},{color:"#388a44",label:"生茶"},{color:"#1f5e28",label:"伊右衛門"},{color:"#665522",label:"烏龍茶"}],[{color:"#0088dd",label:"POCARI"},{color:"#00b4d8",label:"AQUARIUS"},{color:"#e8f4ff",label:"いろはす"},{color:"#0066aa",label:"DAKARA"}],[{color:"#d4af37",label:"BOSS GOLD"},{color:"#1c1c1c",label:"BLACK COFFEE"},{color:"#8b0000",label:"GEORGIA"},{color:"#f5deb3",label:"MILK TEA"}],[{color:"#cc0000",label:"COCA-COLA"},{color:"#ffd700",label:"C.C.LEMON"},{color:"#00aa55",label:"MELON SODA"},{color:"#ffffff",label:"CALPIS"}]];for(let a=0;a<4;a++){const l=a*i,c=s[a];for(let f=0;f<5;f++){const d=30+f*95;e.fillStyle="#e8f4fa",e.fillRect(l+12,d+68,i-24,6),e.fillStyle="#ff4444",e.fillRect(l+12,d+74,i-24,12),e.fillStyle="#ffffff",e.font="bold 9px sans-serif",e.textAlign="center",e.fillText("¥140 ~ ¥160",l+i/2,d+83);const h=5;for(let u=0;u<h;u++){const g=l+24+u*44,x=c[u%c.length];e.fillStyle="rgba(255, 255, 255, 0.15)",e.fillRect(g-2,d+8,32,58),e.fillStyle=x.color,e.fillRect(g,d+10,28,56),e.fillStyle="#ffffff",e.fillRect(g+6,d+4,16,6),e.fillStyle="#ffffff",e.fillRect(g+2,d+26,24,22),e.fillStyle="#111111",e.font="bold 8px sans-serif",e.fillText(x.label.substring(0,4),g+14,d+38)}}e.strokeStyle="#8a929c",e.lineWidth=8,e.strokeRect(l+4,8,i-8,496),e.fillStyle="#cfd4dc",e.fillRect(l+i-22,180,10,150),e.fillStyle="#222222",e.fillRect(l+i-20,182,6,146)}const r=new ae(n);return r.colorSpace=ge,ht.set(o,r),r}function mg(){const o="hot-snacks-display",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#d92c18",e.fillRect(0,0,256,128),e.fillStyle="#ff7700",e.fillRect(4,4,248,42),e.fillStyle="#ffffff",e.font='bold 22px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("HOT SNACKS",128,30),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.fillText("ファミチキ ¥220 / 肉まん ¥160",128,76),e.font='12px "Yu Gothic UI", sans-serif',e.fillText("できたて あつあつ！揚げたて",128,104);const i=new ae(n);return i.colorSpace=ge,ht.set(o,i),i}function gg(){const o="apt-lobby-wall",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#eee9e0",e.fillRect(0,0,512,512);const i=64;for(let r=0;r<512;r+=i){const a=r/i%2===0?0:128;for(let l=-128;l<640;l+=256){const c=Math.floor((Math.sin(l*12.3+r*4.5)+1)*6),f=238+c,d=233+c,h=224+c;e.fillStyle=`rgb(${f},${d},${h})`,e.fillRect(l+a+2,r+2,252,i-4);for(let u=0;u<12;u++)e.fillStyle="rgba(160, 150, 135, 0.15)",e.fillRect(l+a+Math.random()*240,r+Math.random()*(i-6),2,2)}e.fillStyle="#cfc6b8",e.fillRect(0,r,512,2)}const s=new ae(n);return s.wrapS=Pe,s.wrapT=Pe,s.repeat.set(3,2),ht.set(o,s),s}function xg(){const o="apt-lobby-floor",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ded7cc",e.fillRect(0,0,512,512);for(let s=0;s<2;s++)for(let r=0;r<2;r++){const a=s*256,l=r*256;e.fillStyle=(s+r)%2===0?"#e4ded4":"#dfd9cf",e.fillRect(a+2,l+2,252,252),e.strokeStyle="rgba(255, 255, 255, 0.45)",e.lineWidth=3,e.beginPath(),e.moveTo(a+20,l+220),e.bezierCurveTo(a+90,l+160,a+140,l+200,a+230,l+40),e.stroke(),e.strokeStyle="rgba(160, 145, 130, 0.22)",e.lineWidth=2,e.beginPath(),e.moveTo(a+40,l+240),e.bezierCurveTo(a+120,l+170,a+170,l+120,a+240,l+80),e.stroke()}e.strokeStyle="#b8ad9e",e.lineWidth=3,e.strokeRect(0,0,512,512),e.beginPath(),e.moveTo(256,0),e.lineTo(256,512),e.moveTo(0,256),e.lineTo(512,256),e.stroke();const i=new ae(n);return i.wrapS=Pe,i.wrapT=Pe,i.repeat.set(4,4),ht.set(o,i),i}function wg(){const o="wood-slats",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22150c",e.fillRect(0,0,256,256);const i=24,r=i+8;for(let l=0;l<256;l+=r){e.fillStyle="#b8834a",e.fillRect(l,0,i,256),e.strokeStyle="rgba(120, 70, 30, 0.25)",e.lineWidth=1.5;for(let c=0;c<3;c++){const f=l+4+c*7;e.beginPath(),e.moveTo(f,0),e.bezierCurveTo(f+2,80,f-2,160,f+1,256),e.stroke()}e.fillStyle="rgba(255, 230, 190, 0.35)",e.fillRect(l,0,2,256),e.fillStyle="rgba(40, 20, 10, 0.45)",e.fillRect(l+i-2,0,2,256)}const a=new ae(n);return a.wrapS=Pe,a.wrapT=Pe,a.repeat.set(3,1),ht.set(o,a),a}function _g(){const o="apt-mailboxes",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#8f96a0",e.fillRect(0,0,1024,512);for(let h=0;h<512;h+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,h,1024,2);e.fillStyle="#222830",e.fillRect(16,12,992,44),e.fillStyle="#d4af37",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("SUN HEIGHTS  |  集合郵便受箱 (MAIL BOXES)",36,41),e.textAlign="right",e.font="15px sans-serif",e.fillStyle="#a0aec0",e.fillText("ROOMS 101 - 406",988,41);const i=6,s=4,r=20,a=68,l=Math.floor(984/i),c=Math.floor(432/s),f=[["401","402","403","404","405","406"],["301","302","303","304","305","306"],["201","202","203","204","205","206"],["101","102","103","104","105","106"]];for(let h=0;h<s;h++)for(let u=0;u<i;u++){const g=r+u*l,x=a+h*c;e.fillStyle="#a8b0ba",e.fillRect(g+3,x+3,l-6,c-6),e.strokeStyle="#4e5560",e.lineWidth=2,e.strokeRect(g+3,x+3,l-6,c-6),e.fillStyle="#68707a",e.fillRect(g+12,x+12,l-24,18),e.fillStyle="#242a32",e.fillRect(g+16,x+27,l-32,3);const w=f[h][u];e.fillStyle="#11161d",e.fillRect(g+14,x+40,56,26),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(g+14,x+40,56,26),e.fillStyle="#ffffff",e.font='bold 16px "Yu Gothic UI", monospace',e.textAlign="center",e.fillText(w,g+42,x+59);const p=g+l-34,y=x+53;e.fillStyle="#1a1f26",e.beginPath(),e.arc(p,y,15,0,Math.PI*2),e.fill(),e.strokeStyle="#c5ccd6",e.lineWidth=2,e.stroke(),e.fillStyle="#ffffff";for(let v=0;v<8;v++){const _=v*Math.PI/4;e.fillRect(p+Math.cos(_)*11-1,y+Math.sin(_)*11-1,2,2)}e.fillStyle="#e8ecf0",e.fillRect(g+14,x+72,l-28,14),e.strokeStyle="#7c8694",e.lineWidth=1,e.strokeRect(g+14,x+72,l-28,14),e.fillStyle="#44505f",e.font="10px sans-serif",e.textAlign="left",e.fillText(w==="304"?"RELZZY (304)":"RESIDENT",g+20,x+83)}const d=new ae(n);return ht.set(o,d),d}function vg(){const o="apt-delivery-lockers",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#262d36",e.fillRect(0,0,512,512),e.fillStyle="#151a22",e.fillRect(10,10,492,42),e.fillStyle="#38e59e",e.font='bold 18px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("宅配ロッカー TAKUHAIBOX",26,37),e.fillStyle="#a0aec0",e.font="12px sans-serif",e.textAlign="right",e.fillText("24H PARCEL SYSTEM",486,37),e.fillStyle="#1a202c",e.fillRect(160,68,192,210),e.strokeStyle="#4a5568",e.lineWidth=2,e.strokeRect(160,68,192,210),e.fillStyle="#0f2942",e.fillRect(172,80,168,90),e.fillStyle="#38bdf8",e.font='bold 13px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("荷物のお受け取り",256,106),e.fillStyle="#e2e8f0",e.font="11px sans-serif",e.fillText("部屋番号を入力してください",256,128),e.fillStyle="#22c55e",e.fillText("[304: 1個のお届け物]",256,150);for(let r=0;r<4;r++)for(let a=0;a<3;a++){const l=184+a*48,c=182+r*22;e.fillStyle="#334155",e.fillRect(l,c,40,18),e.fillStyle="#f8fafc",e.font="bold 10px monospace",e.fillText(`${r*3+a+1}`,l+20,c+13)}const i=[{x:16,y:68,w:132,h:64,label:"BOX 01",inUse:!1},{x:16,y:140,w:132,h:64,label:"BOX 02",inUse:!0},{x:16,y:212,w:132,h:64,label:"BOX 03",inUse:!0},{x:364,y:68,w:132,h:96,label:"BOX 04",inUse:!1},{x:364,y:172,w:132,h:104,label:"BOX 05",inUse:!1},{x:16,y:288,w:236,h:208,label:"LARGE BOX 06",inUse:!1},{x:260,y:288,w:236,h:208,label:"LARGE BOX 07",inUse:!1}];for(const r of i)e.fillStyle="#3a4454",e.fillRect(r.x,r.y,r.w,r.h),e.strokeStyle="#1a222e",e.lineWidth=2,e.strokeRect(r.x,r.y,r.w,r.h),e.fillStyle="#8a94a4",e.fillRect(r.x+r.w-18,r.y+r.h/2-16,8,32),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText(r.label,r.x+10,r.y+22),e.fillStyle=r.inUse?"#f59e0b":"#10b981",e.beginPath(),e.arc(r.x+r.w-14,r.y+16,5,0,Math.PI*2),e.fill();const s=new ae(n);return ht.set(o,s),s}function yg(){const o="reception-notice-board",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#c8955a",e.fillRect(0,0,512,256);for(let s=0;s<400;s++)e.fillStyle=Math.random()>.5?"rgba(90, 50, 20, 0.15)":"rgba(255, 230, 180, 0.15)",e.fillRect(Math.random()*512,Math.random()*256,3,3);e.strokeStyle="#6b401e",e.lineWidth=10,e.strokeRect(5,5,502,246),e.fillStyle="#2d1e12",e.fillRect(16,14,480,28),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("サンハイツ管理組合 掲示板 (RESIDENTS NOTICE)",256,34),e.fillStyle="#ffffff",e.fillRect(24,52,140,186),e.strokeStyle="#d4d4d4",e.lineWidth=1,e.strokeRect(24,52,140,186),e.fillStyle="#dc2626",e.fillRect(28,56,132,22),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.fillText("ゴミ収集日程",94,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・可燃ゴミ: 月・木",32,98),e.fillText("・資源ゴミ: 水曜日",32,116),e.fillText("・不燃ゴミ: 第2火曜",32,134),e.fillText("※朝8時までに排出",32,158),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.fillRect(182,52,150,186),e.strokeRect(182,52,150,186),e.fillStyle="#2563eb",e.fillRect(186,56,142,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("消防設備定期点検",257,72),e.fillStyle="#1e293b",e.font="10px sans-serif",e.textAlign="left",e.fillText("今週土曜日 10:00~",190,98),e.fillText("各戸火災報知器テスト",190,116),e.fillText("インターホン点検実施",190,134),e.fillText("ご在宅をお願いします",190,158),e.fillStyle="#3b82f6",e.beginPath(),e.arc(257,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#fffbeb",e.fillRect(350,52,138,186),e.strokeRect(350,52,138,186),e.fillStyle="#059669",e.fillRect(354,56,130,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("共用部利用マナー",419,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・駐輪場シール貼付",358,98),e.fillText("・共用廊下置配禁止",358,116),e.fillText("・夜間静粛のお願い",358,134),e.strokeStyle="#dc2626",e.lineWidth=2,e.strokeRect(436,180,42,42),e.fillStyle="#dc2626",e.font="bold 9px serif",e.textAlign="center",e.fillText("管理",457,198),e.fillText("組合印",457,214),e.fillStyle="#10b981",e.beginPath(),e.arc(419,56,5,0,Math.PI*2),e.fill();const i=new ae(n);return ht.set(o,i),i}function Mg(){const o="apt-directory-board",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=384;const e=n.getContext("2d");e.fillStyle="#161d26",e.fillRect(0,0,512,384),e.strokeStyle="#d4af37",e.lineWidth=6,e.strokeRect(6,6,500,372),e.strokeStyle="#4a5568",e.lineWidth=1.5,e.strokeRect(16,16,480,352),e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", serif',e.textAlign="center",e.fillText("SUN HEIGHTS KANAMECHO",256,54),e.font='14px "Yu Gothic UI", sans-serif',e.fillStyle="#e2e8f0",e.fillText("サンハイツ要町 総合案内",256,78),e.fillStyle="#d4af37",e.fillRect(40,92,432,2);const i=[{floor:"4F",desc:"401 - 406  RESIDENCE / ルーフバルコニー"},{floor:"3F",desc:"301 - 306  RESIDENCE (Relzzy #304)"},{floor:"2F",desc:"201 - 206  RESIDENCE"},{floor:"1F",desc:"管理事務室 / エントランス / 集合受箱 / 宅配BOX"}];for(let r=0;r<i.length;r++){const a=138+r*50;e.fillStyle="#2a3442",e.fillRect(44,a-24,60,34),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(44,a-24,60,34),e.fillStyle="#d4af37",e.font="bold 18px monospace",e.textAlign="center",e.fillText(i[r].floor,74,a),e.fillStyle="#ffffff",e.font='14px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText(i[r].desc,120,a),r<3&&(e.fillStyle="rgba(255, 255, 255, 0.12)",e.fillRect(44,a+20,424,1))}e.fillStyle="#718096",e.font="11px sans-serif",e.textAlign="center",e.fillText("管理人常駐: 平日 9:00 ~ 17:00 | 管理会社コールセンター 24H",256,346);const s=new ae(n);return ht.set(o,s),s}function Sg(){const o="ramen-shop-sign",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#1c1510",e.fillRect(0,0,512,256);for(let s=0;s<256;s+=4)e.fillStyle=Math.random()>.5?"rgba(70, 45, 25, 0.25)":"rgba(10, 8, 6, 0.35)",e.fillRect(0,s,512,3);e.strokeStyle="#3d2616",e.lineWidth=12,e.strokeRect(6,6,500,244),e.strokeStyle="#5a3820",e.lineWidth=3,e.strokeRect(14,14,484,228),e.fillStyle="#e2c595",e.font='bold 16px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("自家製麺・濃厚豚骨スープ",256,48),e.fillStyle="#f8e4b8",e.font="bold 52px serif",e.shadowColor="#000000",e.shadowBlur=6,e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText("らーめん 麺処",256,116),e.shadowColor="transparent",e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", sans-serif',e.fillText("MENYA TOKYO",256,160),e.fillStyle="#b89d78",e.font="14px sans-serif",e.fillText("創業 昭和六十二年  |  特製チャーシュー・煮玉子",256,196),e.strokeStyle="#c42012",e.lineWidth=2.5,e.strokeRect(38,92,42,42),e.fillStyle="#c42012",e.font="bold 11px serif",e.textAlign="center",e.fillText("味",59,110),e.fillText("自慢",59,126),e.strokeStyle="#c42012",e.strokeRect(432,92,42,42),e.fillText("秘",453,110),e.fillText("伝",453,126);const i=new ae(n);return ht.set(o,i),i}function bg(o){const t=`ramen-lantern-${o}`,n=ht.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,512,0);s.addColorStop(0,"#9a160c"),s.addColorStop(.3,"#d8281a"),s.addColorStop(.5,"#f03a28"),s.addColorStop(.7,"#d8281a"),s.addColorStop(1,"#9a160c"),i.fillStyle=s,i.fillRect(0,0,512,512);for(let c=40;c<470;c+=22)i.fillStyle="rgba(70, 8, 4, 0.4)",i.fillRect(0,c,512,3),i.fillStyle="rgba(255, 180, 160, 0.25)",i.fillRect(0,c+3,512,1.5);i.fillStyle="#141416",i.fillRect(0,0,512,42),i.fillRect(0,470,512,42),i.fillStyle="#d4af37",i.fillRect(0,38,512,4),i.fillRect(0,470,512,4),i.fillStyle="#101012",i.font="900 84px serif",i.textAlign="center";const r=o.split(""),a=256-(r.length-1)*90/2;r.forEach((c,f)=>{i.shadowColor="rgba(0, 0, 0, 0.6)",i.shadowBlur=4,i.shadowOffsetX=2,i.shadowOffsetY=2,i.fillText(c,256,a+f*95)}),i.shadowColor="transparent";const l=new ae(e);return ht.set(t,l),l}function Tg(){const o="ramen-noren",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#162234",e.fillRect(0,0,512,256);for(let a=0;a<256;a+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,a,512,2);const i=512/4;for(let a=1;a<4;a++){const l=a*i;e.fillStyle="#080c14",e.fillRect(l-3,40,6,216)}e.fillStyle="#0f1722",e.fillRect(0,0,512,38),e.strokeStyle="#2d3b4e",e.lineWidth=2,e.strokeRect(0,0,512,38);for(let a=0;a<8;a++){const l=28+a*64;e.fillStyle="#223044",e.fillRect(l,2,24,34)}const s=["ら","ー","め","ん"];e.fillStyle="#f8fafc",e.font='bold 64px "Yu Gothic UI", serif',e.textAlign="center";for(let a=0;a<4;a++){const l=a*i+i/2;e.fillText(s[a],l,155)}e.strokeStyle="#f8fafc",e.lineWidth=3,e.beginPath(),e.arc(256,75,22,0,Math.PI*2),e.stroke(),e.font="bold 22px serif",e.fillText("麺",256,83),e.fillStyle="#f8fafc",e.font="bold 13px sans-serif",e.fillText("営 業 中",450,220);const r=new ae(n);return ht.set(o,r),r}function Eg(){const o="ramen-kenbaiki",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8e2d8",e.fillRect(0,0,512,512),e.fillStyle="#262d36",e.fillRect(16,16,480,480),e.strokeStyle="#4a5568",e.lineWidth=3,e.strokeRect(16,16,480,480),e.fillStyle="#111822",e.fillRect(28,28,456,48),e.fillStyle="#f59e0b",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("食券をお買い求めください",256,56),e.font="11px sans-serif",e.fillStyle="#94a3b8",e.fillText("PLEASE PURCHASE TICKET FIRST  |  千円札・二千円札・硬貨対応",256,70),e.fillStyle="#06101a",e.fillRect(320,88,160,36),e.strokeStyle="#1e293b",e.strokeRect(320,88,160,36),e.fillStyle="#22c55e",e.font="bold 18px monospace",e.textAlign="right",e.fillText("¥1,000",470,113),e.fillStyle="#dc2626",e.fillRect(28,92,280,28),e.fillStyle="#ffffff",e.font="bold 13px sans-serif",e.textAlign="center",e.fillText("★ 当店おすすめ 定番らーめん ★",168,111);const i=[{title:"特製豚骨らーめん",price:"¥980",color:"#f59e0b"},{title:"チャーシュー麺",price:"¥1,100",color:"#ef4444"},{title:"濃厚魚介味噌",price:"¥950",color:"#d97706"},{title:"味玉豚骨らーめん",price:"¥880",color:"#f59e0b"},{title:"辛味噌らーめん",price:"¥920",color:"#dc2626"},{title:"あっさり魚介醤油",price:"¥850",color:"#3b82f6"},{title:"替玉 (一玉)",price:"¥150",color:"#10b981"},{title:"博多一口餃子(5個)",price:"¥380",color:"#10b981"},{title:"炙りチャーシュー丼",price:"¥350",color:"#f97316"},{title:"追加トッピング 煮玉子",price:"¥120",color:"#64748b"},{title:"追加 メンマ/白ネギ",price:"¥120",color:"#64748b"},{title:"アサヒ スーパードライ",price:"¥550",color:"#eab308"}],s=144,r=58,a=28,l=132;for(let f=0;f<i.length;f++){const d=f%3,h=Math.floor(f/3),u=a+d*156,g=l+h*66,x=i[f];e.fillStyle="#1e2632",e.fillRect(u,g,s,r),e.strokeStyle=x.color,e.lineWidth=2,e.strokeRect(u,g,s,r),e.fillStyle=x.color,e.fillRect(u+4,g+4,s-8,16),e.fillStyle="#ffffff",e.font="bold 9.5px sans-serif",e.textAlign="center",e.fillText(x.title,u+s/2,g+16),e.fillStyle="#ffffff",e.font="bold 15px monospace",e.fillText(x.price,u+s/2,g+42),e.fillStyle="#22c55e",e.beginPath(),e.arc(u+12,g+47,3.5,0,Math.PI*2),e.fill()}e.fillStyle="#111822",e.fillRect(28,404,210,42),e.strokeStyle="#334155",e.strokeRect(28,404,210,42),e.fillStyle="#38bdf8",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText("紙幣投入口 (1000/2000円)",42,428),e.fillStyle="#0284c7",e.fillRect(170,418,56,12),e.fillStyle="#111822",e.fillRect(256,404,228,42),e.strokeStyle="#334155",e.strokeRect(256,404,228,42),e.fillStyle="#f59e0b",e.fillText("硬貨投入口 (500/100/50/10)",270,428),e.fillStyle="#d97706",e.fillRect(432,416,38,16),e.fillStyle="#0b0f14",e.fillRect(28,454,456,36),e.strokeStyle="#22c55e",e.lineWidth=1.5,e.strokeRect(28,454,456,36),e.fillStyle="#22c55e",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("▼ おつり・食券 口 (TICKET / CHANGE)",256,477);const c=new ae(n);return ht.set(o,c),c}function Ag(){const o="ramen-shop-wall",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8dcc8",e.fillRect(0,0,512,320);for(let a=0;a<600;a++)e.fillStyle=Math.random()>.5?"rgba(180, 160, 130, 0.18)":"rgba(255, 245, 230, 0.25)",e.fillRect(Math.random()*512,Math.random()*320,2,2);const i=20;for(let a=0;a<512;a+=128)e.fillStyle="#3a2416",e.fillRect(a,0,i,320),e.fillStyle="#543622",e.fillRect(a+2,0,i-4,320);e.fillStyle="#3a2416",e.fillRect(0,312,512,16),e.fillStyle="#543622",e.fillRect(0,314,512,12),e.fillStyle="#2a1a10",e.fillRect(0,328,512,184);const s=42;for(let a=0;a<512;a+=s)e.fillStyle=a%(s*2)===0?"#382216":"#2e1c12",e.fillRect(a+2,328,s-4,184),e.fillStyle="#160d08",e.fillRect(a,328,2,184);const r=new ae(n);return r.wrapS=Pe,r.wrapT=Pe,r.repeat.set(3,1),ht.set(o,r),r}function Rg(){const o="ramen-shop-floor",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#22262c",e.fillRect(0,0,512,512);const i=128;for(let r=0;r<512;r+=i)for(let a=0;a<512;a+=i){const l=Math.floor((Math.sin(r*3+a*7)+1)*8);e.fillStyle=`rgb(${34+l},${38+l},${44+l})`,e.fillRect(r+3,a+3,i-6,i-6);for(let c=0;c<8;c++)e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(r+Math.random()*(i-6),a+Math.random()*(i-6),2,2)}e.strokeStyle="#121519",e.lineWidth=4,e.strokeRect(0,0,512,512);for(let r=i;r<512;r+=i)e.beginPath(),e.moveTo(r,0),e.lineTo(r,512),e.stroke();for(let r=i;r<512;r+=i)e.beginPath(),e.moveTo(0,r),e.lineTo(512,r),e.stroke();const s=new ae(n);return s.wrapS=Pe,s.wrapT=Pe,s.repeat.set(3,3),ht.set(o,s),s}const tt='"Yu Gothic UI", "Yu Gothic", Meiryo, "Hiragino Kaku Gothic ProN", "MS PGothic", sans-serif';function Cg(){const o="storefront-dental-window",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#eaf5f7"),i.addColorStop(.55,"#dbeff2"),i.addColorStop(1,"#cde6ea"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=e.getImageData(0,0,1024,512),r=s.data;for(let u=0;u<r.length;u+=4){const g=(Math.random()-.5)*8;r[u]=Math.min(255,Math.max(0,r[u]+g)),r[u+1]=Math.min(255,Math.max(0,r[u+1]+g)),r[u+2]=Math.min(255,Math.max(0,r[u+2]+g))}e.putImageData(s,0,0),e.fillStyle="#175261",e.fillRect(0,0,1024,88),e.fillStyle="#2db8aa",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(60,32),e.bezierCurveTo(54,24,68,22,68,34),e.bezierCurveTo(68,22,82,24,76,32),e.bezierCurveTo(82,48,76,60,72,60),e.bezierCurveTo(69,60,68,46,68,46),e.bezierCurveTo(68,46,67,60,64,60),e.bezierCurveTo(60,60,54,48,60,32),e.fill(),e.fillStyle="#ffffff",e.font=`700 36px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",114,34),e.fillStyle="#a6e2ec",e.font=`500 17px ${tt}`,e.fillText("PARKSIDE DENTAL CLINIC",116,64),e.fillStyle="#e2f7fa",e.font=`600 18px ${tt}`,e.textAlign="right",e.fillText("一般歯科 ・ 小児歯科 ・ 矯正歯科 ・ 口腔外科 ・ 予防定期検診",990,44),e.fillStyle="rgba(255, 255, 255, 0.92)",e.strokeStyle="#bedee3",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${tt}`,e.textAlign="left",e.fillText("【 診療時間のご案内 】",56,138);const a=56,l=165,c=48,f=["月","火","水","木","金","土","日/祝"];e.fillStyle="#edf7f9",e.fillRect(a+90,l,c*7,28),e.fillStyle="#175261",e.font=`700 15px ${tt}`,e.textAlign="center",f.forEach((u,g)=>{u==="木"||u.includes("日")?e.fillStyle="#d94b4b":e.fillStyle="#175261",e.fillText(u,a+90+g*c+c/2,l+14)}),[{label:"09:30 - 13:00",marks:["●","●","●","休","●","●","休"]},{label:"14:30 - 19:30",marks:["●","●","●","休","●","▲","休"]}].forEach((u,g)=>{const x=l+28+g*34;e.fillStyle=g%2===0?"#ffffff":"#f8fcfd",e.fillRect(a,x,90+c*7,34),e.strokeStyle="#d7eaee",e.strokeRect(a,x,90+c*7,34),e.fillStyle="#2a3b40",e.font=`600 13px ${tt}`,e.textAlign="center",e.fillText(u.label,a+45,x+17),u.marks.forEach((w,p)=>{w==="休"?(e.fillStyle="#b84242",e.font=`700 14px ${tt}`):w==="▲"?(e.fillStyle="#e07d10",e.font=`700 15px ${tt}`):(e.fillStyle="#1d788a",e.font=`700 16px ${tt}`),e.fillText(w,a+90+p*c+c/2,x+17)})}),e.fillStyle="#57727a",e.font=`500 13px ${tt}`,e.textAlign="left",e.fillText("▲ 土曜午後は 14:30〜17:00 まで診療",56,290),e.fillText("休診日：木曜日・日曜日・祝祭日",56,312),e.fillStyle="#1e7587",e.font=`600 13px ${tt}`,e.fillText("各種健康保険取扱 ・ 労災保険指定医療機関",56,345),e.fillStyle="rgba(255, 255, 255, 0.92)",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${tt}`,e.textAlign="left",e.fillText("【 ご予約・急患随時受付 】",546,138),e.fillStyle="#41575f",e.font=`500 15px ${tt}`,e.fillText("当院は患者様をお待たせしない予約優先制です。",546,172),e.fillText("急な歯の痛み・詰め物の脱落は当日診療いたします。",546,198),e.fillStyle="#edf8fa",e.strokeStyle="#3296a6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,222,420,72,6),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`600 14px ${tt}`,e.fillText("ご予約・お問い合わせダイヤル",566,242),e.fillStyle="#134e5c",e.font=`800 32px ${tt}`,e.fillText("TEL 03-3456-7890",566,274),e.fillStyle="#4a6870",e.font=`500 14px ${tt}`,e.fillText("● 痛みの少ない麻酔治療　● デジタルCT完備　● 完全滅菌対応",546,326),e.fillText("● 院内バリアフリー設計　● ベビーカー・車椅子そのまま入室可",546,352),e.fillStyle="rgba(255, 255, 255, 0.55)",e.fillRect(0,400,1024,112),e.fillStyle="rgba(255, 255, 255, 0.65)";for(let u=0;u<1024;u+=16)e.fillRect(u,405,8,95);e.fillStyle="#1c783c",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${tt}`,e.fillText("TOUCH 押してください",512,465);const h=new ae(n);return h.colorSpace=ge,h.anisotropy=4,ht.set(o,h),h}function Pg(){const o="storefront-dental-sign",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#154a57"),i.addColorStop(.5,"#1b5969"),i.addColorStop(1,"#113e4a"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#47a8bc",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(110,128,64,0,Math.PI*2),e.fill(),e.fillStyle="#1b5969",e.beginPath(),e.moveTo(96,100),e.bezierCurveTo(84,82,110,78,110,104),e.bezierCurveTo(110,78,136,82,124,100),e.bezierCurveTo(138,134,126,158,118,158),e.bezierCurveTo(112,158,110,130,110,130),e.bezierCurveTo(110,130,108,158,102,158),e.bezierCurveTo(94,158,82,134,96,100),e.fill(),e.fillStyle="#ffffff",e.font=`800 68px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",205,105),e.fillStyle="#9fe1ee",e.font=`600 24px ${tt}`,e.fillText("PARKSIDE DENTAL CLINIC  ・  TEL 03-3456-7890",210,172),e.fillStyle="#2db8aa",e.beginPath(),e.roundRect(790,80,190,96,12),e.fill(),e.fillStyle="#ffffff",e.font=`700 20px ${tt}`,e.textAlign="center",e.fillText("夜7時半まで",885,115),e.font=`600 16px ${tt}`,e.fillText("急患随時受付",885,146);const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function Ig(){const o="storefront-cleaners-window",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f0f5fb"),i.addColorStop(1,"#dfeaf5"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#1e3f7a",e.fillRect(0,0,1024,88),e.strokeStyle="#ffd84d",e.lineWidth=4,e.beginPath(),e.arc(68,30,12,0,Math.PI,!0),e.moveTo(40,58),e.lineTo(68,42),e.lineTo(96,58),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 38px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",120,36),e.fillStyle="#ffd84d",e.font=`600 17px ${tt}`,e.fillText("SHIROKANE DRY CLEANING & LAUNDRY",122,66),e.fillStyle="#ffffff",e.font=`700 18px ${tt}`,e.textAlign="right",e.fillText("朝10時お預かり ➡ 夕方5時お渡し！ スピード即日仕上げ",990,44),e.fillStyle="#ffffff",e.strokeStyle="#bed1e8",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 20px ${tt}`,e.textAlign="left",e.fillText("【 白金クリーニング 料金表 】",56,138),[{name:"ワイシャツ (立体抗菌消臭仕上)",price:"¥220〜"},{name:"スーツ上下 (汗抜きプレス付)",price:"¥1,280〜"},{name:"ジャケット・ブレザー",price:"¥780〜"},{name:"スラックス・スカート",price:"¥550〜"},{name:"ダウンジャケット・コート",price:"¥1,980〜"},{name:"毛布・羽毛ふとん丸洗い",price:"¥1,800〜"}].forEach((l,c)=>{const f=172+c*32;e.fillStyle="#2d3b4d",e.font=`600 15px ${tt}`,e.textAlign="left",e.fillText(l.name,56,f),e.fillStyle="#a0b3cb";for(let d=295;d<400;d+=8)e.fillRect(d,f-2,3,3);e.fillStyle="#d63429",e.font=`800 17px ${tt}`,e.textAlign="right",e.fillText(l.price,470,f)}),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#3a4b60",e.fillRect(550,130,412,6),["#1d2430","#3b4352","#263347","#4b5563","#1e2838"].forEach((l,c)=>{const f=560+c*80;e.strokeStyle="#8d99ae",e.lineWidth=2,e.beginPath(),e.moveTo(f+35,136),e.lineTo(f+15,155),e.lineTo(f+55,155),e.closePath(),e.stroke(),e.fillStyle=l,e.fillRect(f+15,155,40,75),e.fillStyle="rgba(255, 255, 255, 0.45)",e.fillRect(f+10,150,50,95),e.strokeStyle="rgba(180, 210, 240, 0.7)",e.strokeRect(f+10,150,50,95),e.fillStyle=c%2===0?"#ff4d4d":"#3385ff",e.fillRect(f+42,160,14,20)}),e.fillStyle="#eef5fc",e.strokeStyle="#296ed6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,260,420,100,6),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 18px ${tt}`,e.textAlign="left",e.fillText("★ 24時間コインランドリー併設 ★",566,285),e.fillStyle="#3f536e",e.font=`500 14px ${tt}`,e.fillText("大型洗濯乾燥機・スニーカーウォッシャー完備！",566,312),e.fillText("営業時間: 本店 8:00〜20:00 (水曜定休) / コインランドリー 24時間",566,338),e.fillStyle="rgba(235, 243, 252, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#1e3f7a",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${tt}`,e.fillText("TOUCH 押してください",512,465);const a=new ae(n);return a.colorSpace=ge,a.anisotropy=4,ht.set(o,a),a}function Lg(){const o="storefront-cleaners-sign",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#1c3e78"),i.addColorStop(.5,"#255099"),i.addColorStop(1,"#173466"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#ffd84d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#1c3e78",e.lineWidth=5,e.beginPath(),e.arc(105,105,15,0,Math.PI,!0),e.moveTo(75,142),e.lineTo(105,120),e.lineTo(135,142),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 68px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",200,102),e.fillStyle="#ffd84d",e.font=`700 24px ${tt}`,e.fillText("SHIROKANE DRY CLEANING  ・  24H コインランドリー併設",205,168),e.fillStyle="#e63946",e.beginPath(),e.roundRect(790,75,190,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${tt}`,e.textAlign="center",e.fillText("即日仕上げ",885,114),e.font=`600 15px ${tt}`,e.fillText("朝10時➡夕方5時",885,150);const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function Dg(){const o="storefront-izakaya-facade",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#261e19",e.fillRect(0,0,1024,512);for(let p=0;p<1024;p+=32)e.fillStyle=p%64===0?"#1f1814":"#2d231d",e.fillRect(p,0,31,512),e.fillStyle="#140f0c",e.fillRect(p+31,0,1,512);const i=600,s=212,r=150,a=5,l=i/a;for(let p=0;p<a;p++){const y=s+p*l;e.fillStyle="#1c283f",e.fillRect(y+2,0,l-4,r),e.fillStyle="#141e30",e.fillRect(y+2,r-12,l-4,12)}const c=s+i/2;e.strokeStyle="#f4eedb",e.lineWidth=4,e.beginPath(),e.arc(c,65,34,0,Math.PI*2),e.stroke(),e.fillStyle="#f4eedb",e.font='800 48px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("魚",c,64),e.font='800 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText("和",s+l*.5,75),e.fillText("食",s+l*1.5,75),e.fillText("酒",s+l*3.5,75),e.fillText("処",s+l*4.5,75);const f=40,d=175,h=440,u=290,g=e.createRadialGradient(f+h/2,d+u/2,40,f+h/2,d+u/2,280);g.addColorStop(0,"#ffe49e"),g.addColorStop(.7,"#ffaa44"),g.addColorStop(1,"#c96a1a"),e.fillStyle=g,e.fillRect(f,d,h,u),e.fillStyle="#261b14",e.lineWidth=6,e.strokeRect(f,d,h,u);for(let p=f;p<f+h;p+=36)e.fillRect(p,d,6,u);for(let p=d;p<d+u;p+=42)e.fillRect(f,p,h,6);[{title:"名物 もつ煮込み",price:"四八〇円"},{title:"本日のお造り盛合",price:"一二八〇円"},{title:"炭火串焼き盛合せ",price:"八五〇円"},{title:"旬魚 塩焼き各種",price:"六八〇円"},{title:"全国厳選 地酒一合",price:"七五〇円"}].forEach((p,y)=>{const v=530+y*92,_=175;e.fillStyle="#9e6e43",e.fillRect(v,_,76,285),e.strokeStyle="#5a3d24",e.lineWidth=3,e.strokeRect(v,_,76,285),e.fillStyle="#170e08",e.font='700 17px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",p.title.split("").forEach((R,A)=>{e.fillText(R,v+38,_+30+A*24)}),e.fillStyle="#9e241b",e.fillRect(v+26,_+215,24,24),e.fillStyle="#ffffff",e.font="700 12px serif",e.fillText("極",v+38,_+231),e.fillStyle="#2a1a10",e.font='600 13px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText(p.price,v+38,_+265)});const w=new ae(n);return w.colorSpace=ge,w.anisotropy=4,ht.set(o,w),w}function Ug(){const o="storefront-izakaya-sign",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#5a1910"),i.addColorStop(.5,"#7a2016"),i.addColorStop(1,"#4a120b"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#dfa84a",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#d93829",e.beginPath(),e.ellipse(110,128,48,62,0,0,Math.PI*2),e.fill(),e.strokeStyle="#220805",e.lineWidth=3,e.stroke(),e.fillStyle="#ffffff",e.font='900 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("酒",110,128),e.fillStyle="#ffeed0",e.font='900 72px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("和食 酒処 魚河岸",200,104),e.fillStyle="#dfa84a",e.font=`700 24px ${tt}`,e.fillText("TRADITIONAL IZAKAYA UOGASHI  ・  旬魚 炭火串焼 厳選銘酒",205,172),e.fillStyle="#b32215",e.fillRect(860,80,96,96),e.strokeStyle="#ffd875",e.lineWidth=2,e.strokeRect(862,82,92,92),e.fillStyle="#ffffff",e.font="700 20px serif",e.textAlign="center",e.fillText("商売",908,114),e.fillText("繁盛",908,148);const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function Ng(){const o="storefront-pharmacy-window",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f2faf8"),i.addColorStop(1,"#ddf1ec"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#0f6150",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(60,26,16,36),e.fillRect(50,36,36,16),e.fillStyle="#ffffff",e.font=`800 36px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 森薬局",114,34),e.fillStyle="#9ee8d7",e.font=`600 17px ${tt}`,e.fillText("MORI CLINIC & DISPENSING PHARMACY",116,64),e.fillStyle="#ffffff",e.font=`700 20px ${tt}`,e.textAlign="right",e.fillText("【保険調剤】 全国の処方せん受け付けます",990,44),e.fillStyle="#ffffff",e.strokeStyle="#b6e0d5",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${tt}`,e.textAlign="left",e.fillText("【 森クリニック 診療時間 】",56,138),e.fillStyle="#2e4741",e.font=`600 15px ${tt}`,e.fillText("診療科目：内科 ・ 消化器科 ・ 呼吸器科 ・ 小児科",56,172),e.fillText("午前診療：09:00 〜 12:30 （月・火・木・金・土）",56,206),e.fillText("午後診療：15:00 〜 18:30 （月・火・木・金）",56,238),e.fillStyle="#b83b3b",e.fillText("休診日：水曜午後・土曜午後・日曜・祝祭日",56,272),e.fillStyle="#376b5f",e.font=`500 14px ${tt}`,e.fillText("● 各種健康診断・予防接種 随時受付",56,316),e.fillText("● 在宅医療・訪問診療対応クリニック",56,344),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${tt}`,e.textAlign="left",e.fillText("【 調剤薬局 サービス案内 】",546,138),e.fillStyle="#e8f7f3",e.strokeStyle="#28a687",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,160,420,85,6),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 22px ${tt}`,e.fillText("処方せん受付中",566,188),e.fillStyle="#31544c",e.font=`500 14px ${tt}`,e.fillText("大学病院・総合病院・地域の診療所すべての処方せん調剤可",566,222),e.fillStyle="#2f4b44",e.font=`500 14px ${tt}`,e.fillText("● 電子お薬手帳アプリ対応",546,276),e.fillText("● お薬の飲み合わせ・健康相談 随時受付",546,304),e.fillText("● 一般用医薬品(OTC)・衛生材料・マスク・消毒液完備",546,332),e.fillText("● 各種クレジットカード・電子マネー対応",546,360),e.fillStyle="rgba(230, 245, 240, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#0f6150",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${tt}`,e.fillText("TOUCH 押してください",512,465);const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function zg(){const o="storefront-pharmacy-sign",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#0c4d40"),i.addColorStop(.5,"#136b58"),i.addColorStop(1,"#093a30"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#43d9b5",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(90,88,30,80),e.fillRect(65,113,80,30),e.fillStyle="#ffffff",e.font=`800 66px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 薬局",195,102),e.fillStyle="#9fe9d8",e.font=`600 24px ${tt}`,e.fillText("MORI CLINIC & PHARMACY  ・  処方せん受付・内科・小児科",200,168),e.fillStyle="#00a86b",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 22px ${tt}`,e.textAlign="center",e.fillText("保険調剤",897,114),e.font=`600 16px ${tt}`,e.fillText("処方せん受付",897,150);const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function Fg(){const o="storefront-bookstore-window",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f9f5ed"),i.addColorStop(1,"#ecdfcd"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#542617",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.font='800 38px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("東書店 本屋",48,36),e.fillStyle="#e8c9b5",e.font=`600 18px ${tt}`,e.fillText("HIGASHI BOOKSTORE & COMICS",50,66),e.fillStyle="#ffffff",e.font=`700 18px ${tt}`,e.textAlign="right",e.fillText("話題のベストセラー・新刊コミック・文庫・雑誌 豊富に取り揃えております",990,44);const s=115,r=250,a=["#b83328","#254b85","#247a46","#87428f","#d97d21","#1f2937","#b5832a","#326b78","#a82c4e","#4f46e5","#0d9488","#ea580c","#15803d","#4338ca","#be185d","#b45309","#1e40af","#065f46","#831843","#701a75","#1e3a8a"];e.fillStyle="#402619",e.fillRect(36,s+95,952,10);for(let c=45;c<970;c+=18){const f=a[c*7%a.length],d=75+c*13%20;e.fillStyle=f,e.fillRect(c,s+95-d,15,d)}e.fillStyle="#402619",e.fillRect(36,r+105,952,10);for(let c=45;c<970;c+=22){const f=a[c*11%a.length],d=85+c*17%20;e.fillStyle=f,e.fillRect(c,r+105-d,18,d)}e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#c9542a",e.lineWidth=3,e.beginPath(),e.roundRect(80,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#c9542a",e.font=`800 20px ${tt}`,e.textAlign="center",e.fillText("【 今週のベストセラー 】",210,185),e.fillStyle="#261b16",e.font=`700 15px ${tt}`,e.fillText("1位 直木賞受賞 話題の巨編",210,222),e.fillText("2位 週刊少年コミック 最新巻",210,254),e.fillText("3位 ビジネス実践名著",210,286),e.fillText("4位 東京下町 街歩きガイド",210,318),e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#2b63ab",e.lineWidth=3,e.beginPath(),e.roundRect(680,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#2b63ab",e.font=`800 20px ${tt}`,e.textAlign="center",e.fillText("★ コミック新刊 入荷 ★",810,185),e.fillStyle="#1c2838",e.font=`700 15px ${tt}`,e.fillText("週刊ジャンプ系 コミックス",810,222),e.fillText("少年マガジン系 コミックス",810,254),e.fillText("青年コミック・名作復刻版",810,286),e.fillText("図書カードNEXT 取扱店",810,318),e.fillStyle="rgba(240, 230, 218, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#542617",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${tt}`,e.fillText("東書店 入口",512,465);const l=new ae(n);return l.colorSpace=ge,l.anisotropy=4,ht.set(o,l),l}function Og(){const o="storefront-bookstore-sign",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#4a2013"),i.addColorStop(.5,"#632e1c"),i.addColorStop(1,"#3b180d"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#e0a96d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#4a2013",e.lineWidth=4,e.beginPath(),e.moveTo(75,110),e.quadraticCurveTo(105,120,105,150),e.quadraticCurveTo(105,120,135,110),e.lineTo(135,145),e.quadraticCurveTo(105,155,105,155),e.quadraticCurveTo(105,155,75,145),e.closePath(),e.stroke(),e.fillStyle="#ffeedb",e.font='900 74px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("書店 本屋",195,102),e.fillStyle="#dfaf85",e.font=`700 24px ${tt}`,e.fillText("HIGASHI BOOKSTORE & COMICS  ・  本・雑誌・コミック・文具",200,168),e.fillStyle="#8f3c20",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("本・コミック",897,114),e.font=`600 16px ${tt}`,e.fillText("新刊続々入荷",897,150);const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function kg(){const o="storefront-cafe-window",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#2d1f18"),i.addColorStop(1,"#1b120d"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=e.createRadialGradient(720,220,40,720,220,320);s.addColorStop(0,"#ffbf66"),s.addColorStop(.7,"#d47d22"),s.addColorStop(1,"#5e2e05"),e.fillStyle=s,e.fillRect(480,80,500,320),e.fillStyle="#8c5e37",e.beginPath(),e.roundRect(520,250,100,140,10),e.roundRect(640,260,100,130,10),e.roundRect(760,240,110,150,10),e.fill(),e.fillStyle="#26150b",e.font=`800 15px ${tt}`,e.textAlign="center",e.fillText("BRAZIL",570,310),e.fillText("ETHIOPIA",690,320),e.fillText("COLOMBIA",815,305);for(const l of[600,740,870])e.strokeStyle="#2b1b11",e.lineWidth=2,e.beginPath(),e.moveTo(l,80),e.lineTo(l,140),e.stroke(),e.fillStyle="#fff4cc",e.beginPath(),e.arc(l,145,12,0,Math.PI*2),e.fill();e.fillStyle="#212726",e.strokeStyle="#855938",e.lineWidth=6,e.beginPath(),e.roundRect(40,50,400,370,8),e.fill(),e.stroke(),e.fillStyle="#fceecb",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("CAFE MAME  珈琲豆",240,90),e.strokeStyle="#e0c99f",e.lineWidth=1.5,e.beginPath(),e.moveTo(100,105),e.lineTo(380,105),e.stroke(),[{name:"Tokyo Blend (深煎り)",price:"¥480"},{name:"Ethiopia Yirgacheffe (浅煎り)",price:"¥550"},{name:"Cafe Latte (Hot/Iced)",price:"¥520"},{name:"Cold Brew Nitro Coffee",price:"¥550"},{name:"自家製 バスクチーズケーキ",price:"¥500"},{name:"クラシック カスタードプリン",price:"¥450"}].forEach((l,c)=>{const f=145+c*36;e.fillStyle="#ffffff",e.font=`600 15px ${tt}`,e.textAlign="left",e.fillText(l.name,65,f),e.fillStyle="#ffd680",e.font=`700 16px ${tt}`,e.textAlign="right",e.fillText(l.price,415,f)}),e.fillStyle="#dfba87",e.font=`500 13px ${tt}`,e.textAlign="center",e.fillText("自家焙煎 厳選シングルオリジン豆販売 100g〜",240,385),e.fillStyle="rgba(40, 26, 18, 0.85)",e.fillRect(0,430,1024,82),e.fillStyle="#e8be8b",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("OPEN 8:30 〜 19:30  /  TAKE OUT OK",512,475);const a=new ae(n);return a.colorSpace=ge,a.anisotropy=4,ht.set(o,a),a}function Bg(){const o="storefront-cafe-sign",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#361e12"),i.addColorStop(.5,"#4a2b1b"),i.addColorStop(1,"#2a160c"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#d4a36a",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#361e12",e.beginPath(),e.roundRect(82,110,46,38,4),e.fill(),e.strokeStyle="#361e12",e.lineWidth=4,e.beginPath(),e.arc(130,126,10,-Math.PI/2,Math.PI/2),e.stroke(),e.fillStyle="#ffeed9",e.font='900 70px "Hiragino Mincho ProN", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("喫茶 TOKYO CAFE",195,102),e.fillStyle="#d4a36a",e.font=`700 24px ${tt}`,e.fillText("CAFE MAME  ・  ROASTERY & SPECIALTY BEANS",200,168),e.fillStyle="#6e3c23",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${tt}`,e.textAlign="center",e.fillText("自家焙煎",897,114),e.font=`600 16px ${tt}`,e.fillText("珈琲豆販売",897,150);const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function Gg(o){const t=`aframe-sign-${o}`,n=ht.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=768;const i=e.getContext("2d");o==="dental"?(i.fillStyle="#f0f8fa",i.fillRect(0,0,512,768),i.strokeStyle="#1b5b6b",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#1b5b6b",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${tt}`,i.textAlign="center",i.fillText("パークサイド歯科",256,75),i.font=`600 20px ${tt}`,i.fillText("PARKSIDE DENTAL",256,120),i.fillStyle="#1b5b6b",i.font=`800 32px ${tt}`,i.fillText("【 本日診療中 】",256,210),i.fillStyle="#2a444c",i.font=`600 24px ${tt}`,i.fillText("午前  09:30 〜 13:00",256,270),i.fillText("午後  14:30 〜 19:30",256,320),i.fillStyle="#d94b4b",i.font=`700 22px ${tt}`,i.fillText("初診・急患 随時受付",256,390),i.fillStyle="#32707e",i.font=`600 21px ${tt}`,i.fillText("歯のクリーニング・定期検診",256,445),i.fillText("ホワイトニング・小児歯科",256,485),i.fillText("保険証をご持参ください",256,540),i.fillStyle="#134754",i.font=`800 32px ${tt}`,i.fillText("TEL 03-3456-7890",256,620),i.fillStyle="#e85d04",i.fillRect(40,670,432,50),i.fillStyle="#ffffff",i.font=`700 22px ${tt}`,i.fillText("お気軽にご来院ください",256,702)):o==="cleaners"?(i.fillStyle="#f0f5fc",i.fillRect(0,0,512,768),i.strokeStyle="#1e3f7a",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#1e3f7a",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${tt}`,i.textAlign="center",i.fillText("白金クリーニング",256,75),i.fillStyle="#ffd84d",i.font=`700 20px ${tt}`,i.fillText("SHIROKANE CLEANING",256,120),i.fillStyle="#e63946",i.fillRect(30,180,452,65),i.fillStyle="#ffffff",i.font=`800 32px ${tt}`,i.fillText("★ 本日ポイント2倍DAY ★",256,224),i.fillStyle="#1e3f7a",i.font=`800 26px ${tt}`,i.fillText("ワイシャツ 抗菌仕上  ¥220",256,300),i.fillText("スーツ上下 汗抜き付  ¥1,280",256,350),i.fillText("ダウン・コート類   ¥1,980",256,400),i.fillStyle="#324a6d",i.font=`600 22px ${tt}`,i.fillText("朝10時お預かり ➡ 夕方5時お渡し",256,475),i.fillText("スピード即日仕上げ可能！",256,520),i.fillStyle="#1e3f7a",i.fillRect(30,570,452,130),i.fillStyle="#ffd84d",i.font=`800 26px ${tt}`,i.fillText("24時間コインランドリー",256,615),i.fillStyle="#ffffff",i.font=`600 20px ${tt}`,i.fillText("大型洗濯乾燥機 好評稼働中！",256,660)):o==="izakaya"?(i.fillStyle="#211c19",i.fillRect(0,0,512,768),i.strokeStyle="#85512b",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#94291e",i.fillRect(14,14,484,130),i.fillStyle="#fff0d9",i.font='900 44px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("和食・酒処 魚河岸",256,75),i.fillStyle="#ffd580",i.font=`700 22px ${tt}`,i.fillText("元気に営業中！",256,120),i.fillStyle="#ffd875",i.font='800 28px "Hiragino Mincho ProN", serif',i.fillText("〜 本日のおすすめ 〜",256,195),i.fillStyle="#ffffff",i.font='700 24px "Hiragino Mincho ProN", serif',i.fillText("● 本日の刺身三種盛り   九八〇円",256,255),i.fillText("● 特製 名物もつ煮込み   四八〇円",256,310),i.fillText("● 備長炭 串焼き五本盛   八五〇円",256,365),i.fillText("● 本日の地酒 純米大吟醸 七五〇円",256,420),i.fillStyle="#94291e",i.fillRect(30,480,452,100),i.fillStyle="#fff4de",i.font=`800 26px ${tt}`,i.fillText("【 晩酌セット 1,000円 】",256,522),i.font=`600 18px ${tt}`,i.fillText("生ビール ＋ 小鉢 ＋ 串焼き3本！",256,558),i.fillStyle="#e8a84a",i.font=`700 22px ${tt}`,i.fillText("お一人様大歓迎！ カウンター席有",256,650),i.fillText("いらっしゃいませ！",256,695)):o==="pharmacy"?(i.fillStyle="#f0faf6",i.fillRect(0,0,512,768),i.strokeStyle="#0f6150",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#0f6150",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${tt}`,i.textAlign="center",i.fillText("森クリニック / 薬局",256,75),i.fillStyle="#9fe8d7",i.font=`600 20px ${tt}`,i.fillText("PHARMACY & CLINIC",256,120),i.fillStyle="#00a86b",i.fillRect(30,180,452,70),i.fillStyle="#ffffff",i.font=`800 28px ${tt}`,i.fillText("【 保険調剤 処方せん受付 】",256,225),i.fillStyle="#21423a",i.font=`600 22px ${tt}`,i.fillText("全国どちらの医療機関の処方せんも",256,300),i.fillText("受け付けております",256,335),i.fillStyle="#0f6150",i.font=`700 24px ${tt}`,i.fillText("森クリニック 診療時間",256,410),i.fillStyle="#31544c",i.font=`600 21px ${tt}`,i.fillText("午前 9:00〜12:30 / 午後 15:00〜18:30",256,450),i.fillText("内科・小児科・呼吸器科",256,490),i.fillStyle="#0f6150",i.fillRect(30,560,452,140),i.fillStyle="#ffffff",i.font=`700 22px ${tt}`,i.fillText("お薬のご相談・在宅医療対応",256,605),i.fillText("電子お薬手帳アプリ対応",256,645),i.fillText("各種キャッシュレス決済可",256,680)):o==="bookstore"?(i.fillStyle="#faf4ec",i.fillRect(0,0,512,768),i.strokeStyle="#542617",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#542617",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font='900 44px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("東書店 本屋",256,75),i.fillStyle="#dfaf85",i.font=`600 20px ${tt}`,i.fillText("HIGASHI BOOKSTORE",256,120),i.fillStyle="#c94a28",i.fillRect(30,180,452,65),i.fillStyle="#ffffff",i.font=`800 28px ${tt}`,i.fillText("★ 今週のコミック新刊 入荷！ ★",256,224),i.fillStyle="#261b16",i.font=`700 24px ${tt}`,i.fillText("話題の直木賞・芥川賞 受賞作",256,300),i.fillText("週刊・月刊 雑誌最新号 発売中",256,350),i.fillText("文庫・新書・文具・万年筆",256,400),i.fillStyle="#542617",i.fillRect(30,470,452,110),i.fillStyle="#ffd8a8",i.font=`800 26px ${tt}`,i.fillText("図書カード NEXT 取扱店",256,515),i.fillStyle="#ffffff",i.font=`600 20px ${tt}`,i.fillText("全国共通 図書カードご贈答にどうぞ",256,555),i.fillStyle="#542617",i.font=`700 22px ${tt}`,i.fillText("営業時間 10:00 〜 21:00",256,640),i.fillText("どうぞお気軽にお立ち寄りください",256,685)):(i.fillStyle="#1f1a17",i.fillRect(0,0,512,768),i.strokeStyle="#6e3c23",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#4a2b1b",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font='900 42px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("CAFE MAME 喫茶",256,75),i.fillStyle="#e0a96d",i.font=`700 20px ${tt}`,i.fillText("SPECIALTY COFFEE ROASTERY",256,120),i.fillStyle="#ffd875",i.font=`800 28px ${tt}`,i.fillText("〜 TODAY’S DRIP 〜",256,195),i.fillStyle="#ffffff",i.font=`700 23px ${tt}`,i.fillText("Ethiopia Yirgacheffe G1",256,245),i.fillStyle="#d4a36a",i.font=`500 18px ${tt}`,i.fillText("フローラルな香りと華やかな柑橘の酸味",256,278),i.fillStyle="#ffffff",i.font=`700 22px ${tt}`,i.fillText("自家製バスクチーズケーキ  ¥500",256,340),i.fillText("クラシックカスタードプリン  ¥450",256,385),i.fillStyle="#4a2b1b",i.fillRect(30,450,452,100),i.fillStyle="#ffd875",i.font=`800 26px ${tt}`,i.fillText("自家焙煎 珈琲豆販売",256,492),i.fillStyle="#ffffff",i.font=`600 18px ${tt}`,i.fillText("お好みに合わせてお挽きいたします",256,528),i.fillStyle="#e0a96d",i.font=`700 24px ${tt}`,i.fillText("テイクアウト OK！",256,610),i.fillStyle="#ffffff",i.font=`600 20px ${tt}`,i.fillText("OPEN 8:30 〜 19:30",256,660));const s=new ae(e);return s.colorSpace=ge,s.anisotropy=4,ht.set(t,s),s}function Hg(){const o="storefront-residential-foyer",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1c2026",e.fillRect(0,0,512,512),e.strokeStyle="#434b57",e.lineWidth=4,e.strokeRect(10,10,492,492),e.fillStyle="#2a313d",e.fillRect(30,30,452,70),e.fillStyle="#d4dbe6",e.font=`700 26px ${tt}`,e.textAlign="center",e.fillText("RESIDENCE ENTRANCE",256,65),e.font=`500 16px ${tt}`,e.fillText("居住者専用 ・ オートロックシステム",256,88),e.fillStyle="#10141a",e.beginPath(),e.roundRect(136,130,240,320,10),e.fill(),e.strokeStyle="#5a6575",e.lineWidth=3,e.stroke(),e.fillStyle="#06090c",e.beginPath(),e.arc(256,175,24,0,Math.PI*2),e.fill(),e.strokeStyle="#404c5c",e.stroke(),e.fillStyle="#3a86ff",e.beginPath(),e.arc(256,175,8,0,Math.PI*2),e.fill(),e.fillStyle="#1d3328",e.fillRect(176,215,160,40),e.fillStyle="#4ade80",e.font="700 16px monospace",e.textAlign="center",e.fillText("ROOM No. _ _ _",256,240),["1","2","3","4","5","6","7","8","9","消","0","呼"].forEach((r,a)=>{const l=a%3,c=Math.floor(a/3),f=180+l*52,d=275+c*40;e.fillStyle=r==="呼"?"#2563eb":r==="消"?"#dc2626":"#2b3340",e.beginPath(),e.roundRect(f,d,44,32,4),e.fill(),e.fillStyle="#ffffff",e.font=`700 15px ${tt}`,e.fillText(r,f+22,d+21)});const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function Vg(){const o="cardboard-mikan-box",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#c79862",e.fillRect(0,0,512,512);const i=e.getImageData(0,0,512,512),s=i.data;for(let l=0;l<s.length;l+=4){const c=(Math.random()-.5)*14;s[l]=Math.min(255,Math.max(0,s[l]+c)),s[l+1]=Math.min(255,Math.max(0,s[l+1]+c)),s[l+2]=Math.min(255,Math.max(0,s[l+2]+c))}e.putImageData(i,0,0),e.fillStyle="#b3834e",e.fillRect(0,0,512,28),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fillRect(0,26,512,2),e.fillStyle="#f97316",e.beginPath(),e.arc(120,160,56,0,Math.PI*2),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.ellipse(120,96,26,12,Math.PI/4,0,Math.PI*2),e.ellipse(135,98,22,10,-Math.PI/4,0,Math.PI*2),e.fill(),e.fillStyle="#1e140a",e.font='900 52px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("愛媛みかん",195,145),e.fillStyle="#85200c",e.font=`800 22px ${tt}`,e.fillText("極上特選  完熟太陽のめぐみ",198,185),e.fillStyle="#2b1b0d",e.font="700 18px monospace",e.fillText("EHIME MIKAN  L SIZE  10KG",198,215),e.strokeStyle="#c2291d",e.lineWidth=3,e.beginPath(),e.arc(80,310,38,0,Math.PI*2),e.stroke(),e.fillStyle="#c2291d",e.font="800 20px serif",e.textAlign="center",e.fillText("特選",80,305),e.font="700 13px serif",e.fillText("農協保証",80,325),e.fillStyle="#1f1309",e.textAlign="left",e.font="800 32px monospace",e.fillText("↑↑",150,320),e.font=`700 16px ${tt}`,e.fillText("取扱注意  水濡厳禁",205,315),e.fillStyle="#1e140a";const r=350;for(let l=r;l<r+120;l+=4)Math.sin(l*9)>-.2&&e.fillRect(l,280,2.5,45);e.font="600 10px monospace",e.fillText("4 901234 567890",r,338);const a=new ae(n);return a.colorSpace=ge,a.anisotropy=4,ht.set(o,a),a}function Wg(){const o="tokyo-trash-notice-sign",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,512,512),e.strokeStyle="#15803d",e.lineWidth=10,e.strokeRect(5,5,502,502),e.fillStyle="#15803d",e.fillRect(10,10,492,100),e.fillStyle="#ffffff",e.font=`900 38px ${tt}`,e.textAlign="center",e.fillText("家庭ごみ集積所",256,58),e.font=`700 16px ${tt}`,e.fillText("RESIDENTIAL WASTE COLLECTION POINT",256,92),[{type:"燃やすごみ",days:"毎週  月・木曜日",color:"#dc2626"},{type:"燃やさないごみ",days:"第２・第４水曜日",color:"#2563eb"},{type:"資源ごみ (缶・瓶・PET)",days:"毎週  火曜日",color:"#16a34a"}].forEach((r,a)=>{const l=135+a*62;e.fillStyle=r.color,e.beginPath(),e.roundRect(30,l,165,48,6),e.fill(),e.fillStyle="#ffffff",e.font=`800 17px ${tt}`,e.textAlign="center",e.fillText(r.type,112,l+30),e.fillStyle="#1e293b",e.font=`800 24px ${tt}`,e.textAlign="left",e.fillText(r.days,215,l+34),e.strokeStyle="#e2e8f0",e.lineWidth=1.5,e.beginPath(),e.moveTo(30,l+55),e.lineTo(482,l+55),e.stroke()}),e.fillStyle="#fefce8",e.strokeStyle="#eab308",e.lineWidth=2,e.beginPath(),e.roundRect(30,330,452,125,8),e.fill(),e.stroke(),e.fillStyle="#854d0e",e.font=`800 18px ${tt}`,e.textAlign="left",e.fillText("【 ごみ出しのルールとマナー 】",45,358),e.fillStyle="#334155",e.font=`600 15px ${tt}`,e.fillText("● ごみは収集日当日の朝8時までに出してください。",45,388),e.fillText("● カラス被害防止のため、ネットは隙間なく掛けてください。",45,414),e.fillText("● 粗大ごみ・家電リサイクル品は集積所に出せません。",45,440),e.fillStyle="#64748b",e.font=`700 14px ${tt}`,e.textAlign="center",e.fillText("東京都 清掃環境事務所  /  町内自治会",256,485);const s=new ae(n);return s.colorSpace=ge,s.anisotropy=4,ht.set(o,s),s}function Xg(){const o="can-recycle-box-texture",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1d4ed8",e.fillRect(0,0,512,512),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(12,12,488,488),e.fillStyle="#ffffff",e.font=`900 42px ${tt}`,e.textAlign="center",e.fillText("空き缶 ・ ペットボトル",256,85),e.fillStyle="#bfdbfe",e.font=`700 20px ${tt}`,e.fillText("CANS & PLASTIC BOTTLES ONLY",256,125),e.strokeStyle="#22c55e",e.lineWidth=14,e.beginPath(),e.arc(256,235,65,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`900 36px ${tt}`,e.fillText("リサイクル",256,246),e.fillStyle="#0f172a",e.beginPath(),e.arc(140,360,48,0,Math.PI*2),e.arc(372,360,48,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font=`800 26px ${tt}`,e.fillText("缶",140,368),e.fillText("ボトル",372,368),e.fillStyle="#fef08a",e.font=`700 16px ${tt}`,e.fillText("※ タバコ・一般ゴミの投げ入れ厳禁",256,455);const i=new ae(n);return i.colorSpace=ge,i.anisotropy=4,ht.set(o,i),i}function Yg(){const o="crow-net-fine-texture",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="rgba(14, 76, 52, 0.45)",e.fillRect(0,0,256,256),e.strokeStyle="#10b981",e.lineWidth=2.5;const i=16;for(let r=-256;r<512;r+=i)e.beginPath(),e.moveTo(r,0),e.lineTo(r+256,256),e.stroke(),e.beginPath(),e.moveTo(r,256),e.lineTo(r+256,0),e.stroke();e.strokeStyle="#047857",e.lineWidth=8,e.strokeRect(0,0,256,256);const s=new ae(n);return s.wrapS=Pe,s.wrapT=Pe,s.repeat.set(4,4),ht.set(o,s),s}function Zg(){const o="park-nameplate-stone",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#22252a",e.fillRect(0,0,256,128);for(let s=0;s<180;s++){const r=Math.random()*256,a=Math.random()*128;e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.25)",e.fillRect(r,a,2,2)}e.strokeStyle="#c5a059",e.lineWidth=4,e.strokeRect(8,8,240,112),e.strokeStyle="#8c6f36",e.lineWidth=1.5,e.strokeRect(14,14,228,100),e.fillStyle="#f0d8a0",e.font=`900 28px ${tt}`,e.textAlign="center",e.textBaseline="middle",e.fillText("桜町児童遊園",128,52),e.fillStyle="#c5a059",e.font="600 12px monospace",e.fillText("SAKURA POCKET PARK",128,86);const i=new ae(n);return ht.set(o,i),i}function qg(){const o="park-rules-board",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=320;const e=n.getContext("2d");e.fillStyle="#eaedf1",e.fillRect(0,0,512,320),e.fillStyle="#105238",e.fillRect(0,0,512,64),e.strokeStyle="#ffffff",e.lineWidth=3,e.beginPath(),e.arc(42,32,18,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`800 24px ${tt}`,e.textAlign="left",e.fillText("公園の利用案内",72,36),e.font="600 13px sans-serif",e.fillText("PARK REGULATIONS & MANNER",72,54);const i=[{kanji:"ゴミは持ち帰りましょう",sub:"Please take your litter home with you",icon:"🗑️"},{kanji:"たき火・花火など火気厳禁",sub:"No fireworks or open flames permitted",icon:"🔥"},{kanji:"犬の散歩はリード着用・フン始末",sub:"Keep dogs on leash and clean up after pets",icon:"🐕"},{kanji:"夜間はお静かに願いします",sub:"Please be considerate and quiet at night",icon:"🌙"}];let s=100;for(const a of i)e.fillStyle="#105238",e.beginPath(),e.arc(36,s-6,12,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("!",36,s-2),e.fillStyle="#1a202c",e.font=`700 18px ${tt}`,e.textAlign="left",e.fillText(a.kanji,60,s-4),e.fillStyle="#4a5568",e.font="500 12px sans-serif",e.fillText(a.sub,60,s+14),e.fillStyle="rgba(0,0,0,0.08)",e.fillRect(20,s+24,472,1),s+=50;e.fillStyle="#718096",e.font=`600 12px ${tt}`,e.textAlign="right",e.fillText("東京都港区土木部公園緑地課　TEL 03-3578-2111",492,305),e.strokeStyle="#2d3748",e.lineWidth=6,e.strokeRect(0,0,512,320);const r=new ae(n);return ht.set(o,r),r}function $g(){const o="park-community-notice",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=300;const e=n.getContext("2d");e.fillStyle="#9b764d",e.fillRect(0,0,512,300);for(let s=0;s<400;s++){const r=Math.random()*512,a=Math.random()*300;e.fillStyle=Math.random()>.5?"rgba(74, 50, 26, 0.2)":"rgba(180, 145, 100, 0.25)",e.fillRect(r,a,3,3)}e.fillStyle="#fce7f3",e.fillRect(24,25,140,190),e.strokeStyle="#f472b6",e.lineWidth=2,e.strokeRect(24,25,140,190),e.fillStyle="#db2777",e.font=`800 16px ${tt}`,e.textAlign="center",e.fillText("桜まつり",94,58),e.font=`600 10px ${tt}`,e.fillText("春の夜桜ライトアップ",94,78),e.fillStyle="#4a044e",e.font=`500 9px ${tt}`,e.fillText("日時: 4月上旬 18:00~",94,110),e.fillText("場所: 桜町児童遊園",94,130),e.fillText("主催: 桜町自治会",94,150),e.fillStyle="#f43f5e",e.fillText("🌸🏮🌸",94,185),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#fef9c3",e.fillRect(184,25,140,190),e.strokeStyle="#eab308",e.lineWidth=2,e.strokeRect(184,25,140,190),e.fillStyle="#854d0e",e.font=`800 15px ${tt}`,e.fillText("広域避難場所",254,58),e.font=`600 10px ${tt}`,e.fillText("防災・安全マップ",254,78),e.fillStyle="#1c1917",e.font=`500 9px ${tt}`,e.fillText("一時集合場所:",254,108),e.fillText("当公園グラウンド",254,126),e.fillText("AED設置: 管理所横",254,146),e.fillText("給水拠点指定場所",254,166),e.fillStyle="#eab308",e.fillText("🔰 非常口 ⛑️",254,192),e.fillStyle="#3b82f6",e.beginPath(),e.arc(254,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(344,25,144,190),e.strokeStyle="#94a3b8",e.lineWidth=1.5,e.strokeRect(344,25,144,190),e.fillStyle="#dc2626",e.font=`800 15px ${tt}`,e.fillText("迷子ねこ",416,54),e.font=`600 10px ${tt}`,e.fillStyle="#334155",e.fillText("探しています！",416,72),e.fillStyle="#1e293b",e.beginPath(),e.arc(416,110,18,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(402,98),e.lineTo(396,82),e.lineTo(410,93),e.fill(),e.beginPath(),e.moveTo(430,98),e.lineTo(436,82),e.lineTo(422,93),e.fill(),e.fillStyle="#ef4444",e.fillRect(408,124,16,4),e.fillStyle="#475569",e.font=`500 9px ${tt}`,e.fillText("名前: ミケ (黒多め)",416,146),e.fillText("赤い首輪・鈴付き",416,162),e.fillText("見かけた方はご連絡を",416,178),e.fillStyle="#10b981",e.beginPath(),e.arc(416,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#3b2716",e.fillRect(0,0,512,18),e.fillStyle="#fef08a",e.font=`800 12px ${tt}`,e.textAlign="center",e.fillText("桜町町内会　広報掲示板",256,14),e.strokeStyle="#475569",e.lineWidth=8,e.strokeRect(0,0,512,300);const i=new ae(n);return ht.set(o,i),i}function Kg(){const o="park-analog-clock-face",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#faf8f2",e.fillRect(0,0,256,256),e.strokeStyle="#1e242b",e.lineWidth=8,e.beginPath(),e.arc(128,128,120,0,Math.PI*2),e.stroke(),e.strokeStyle="#64748b",e.lineWidth=1.5,e.beginPath(),e.arc(128,128,114,0,Math.PI*2),e.stroke();for(let l=0;l<60;l++){const c=l*Math.PI/30,f=l%5===0,d=f?14:6,h=114,u=h-d;e.strokeStyle=f?"#0f172a":"#94a3b8",e.lineWidth=f?3.5:1.5,e.beginPath(),e.moveTo(128+Math.cos(c)*h,128+Math.sin(c)*h),e.lineTo(128+Math.cos(c)*u,128+Math.sin(c)*u),e.stroke()}e.fillStyle="#0f172a",e.font='bold 22px "Plus Jakarta Sans", sans-serif',e.textAlign="center",e.textBaseline="middle";for(let l=1;l<=12;l++){const c=l*Math.PI/6-Math.PI/2,f=86;e.fillText(l.toString(),128+Math.cos(c)*f,128+Math.sin(c)*f)}e.fillStyle="#64748b",e.font="600 9px monospace",e.fillText("TOKYO PARKS",128,160);const i=(11+50/60)*Math.PI/6-Math.PI/2;e.strokeStyle="#0f172a",e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(i)*52,128+Math.sin(i)*52),e.stroke();const s=50*Math.PI/30-Math.PI/2;e.lineWidth=3.5,e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(s)*78,128+Math.sin(s)*78),e.stroke();const r=22*Math.PI/30-Math.PI/2;e.strokeStyle="#dc2626",e.lineWidth=1.5,e.beginPath(),e.moveTo(128-Math.cos(r)*16,128-Math.sin(r)*16),e.lineTo(128+Math.cos(r)*88,128+Math.sin(r)*88),e.stroke(),e.fillStyle="#0f172a",e.beginPath(),e.arc(128,128,6,0,Math.PI*2),e.fill();const a=new ae(n);return ht.set(o,a),a}function Jg(){const o="park-toilet-sign-picto",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,256,128),e.strokeStyle="#cbd5e1",e.lineWidth=3,e.strokeRect(4,4,248,120),e.fillStyle="#0284c7",e.beginPath(),e.arc(56,36,10,0,Math.PI*2),e.fill(),e.fillRect(46,50,20,28),e.fillRect(48,80,7,24),e.fillRect(57,80,7,24),e.fillStyle="#e11d48",e.beginPath(),e.arc(128,36,10,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(128,50),e.lineTo(142,78),e.lineTo(114,78),e.closePath(),e.fill(),e.fillRect(121,80,6,24),e.fillRect(129,80,6,24),e.fillStyle="#16a34a",e.beginPath(),e.arc(200,36,10,0,Math.PI*2),e.fill(),e.strokeStyle="#16a34a",e.lineWidth=4,e.beginPath(),e.arc(196,76,14,0,Math.PI*2),e.stroke(),e.fillRect(194,52,6,22),e.fillRect(194,66,16,5),e.fillStyle="#334155",e.font=`bold 12px ${tt}`,e.textAlign="center",e.fillText("公衆トイレ  TOILETS",128,118);const i=new ae(n);return ht.set(o,i),i}function jg(){const o="suite-hardwood-floor",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1c1511",e.fillRect(0,0,512,512);const i=64,s=["#1d1612","#221a15","#1a130f","#251c17","#1f1713","#241b16","#1b1410","#231b15"];for(let l=0;l<8;l++){const c=l*i;e.fillStyle=s[l%s.length],e.fillRect(0,c+2,512,i-4),e.strokeStyle="rgba(0, 0, 0, 0.28)",e.lineWidth=1.2;for(let f=0;f<6;f++){const d=c+8+f*8+Math.sin(f*2)*3;e.beginPath(),e.moveTo(0,d),e.bezierCurveTo(128,d+(f%2===0?3:-3),384,d+(f%2===0?-3:3),512,d),e.stroke()}e.strokeStyle="rgba(212, 175, 55, 0.04)",e.lineWidth=1,e.beginPath(),e.moveTo(0,c+4),e.lineTo(512,c+4),e.stroke(),e.fillStyle="#0e0a07",e.fillRect(0,c+i-2,512,2)}const r=[{x:140,y:0},{x:380,y:0},{x:260,y:64},{x:120,y:128},{x:420,y:128},{x:310,y:192},{x:180,y:256},{x:440,y:256},{x:280,y:320},{x:160,y:384},{x:390,y:384},{x:240,y:448}];e.fillStyle="#0e0a07";for(const l of r)e.fillRect(l.x,l.y+2,2,i-4);const a=new ae(n);return a.wrapS=Pe,a.wrapT=Pe,a.repeat.set(3,3),ht.set(o,a),a}function Qg(){const o="suite-luxury-rug",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=512,s=256;e.clearRect(0,0,1024,512),e.save(),e.beginPath(),e.ellipse(i,s,480,235,0,0,Math.PI*2),e.fillStyle="#121722",e.fill();const r=e.getImageData(0,0,1024,512),a=r.data;for(let c=30;c<482;c+=2)for(let f=40;f<984;f+=2){const d=(c*1024+f)*4;if(a[d+3]>0){const h=(Math.random()-.5)*16;a[d]=Math.max(10,Math.min(35,a[d]+h)),a[d+1]=Math.max(15,Math.min(42,a[d+1]+h)),a[d+2]=Math.max(25,Math.min(58,a[d+2]+h))}}e.putImageData(r,0,0),e.restore(),e.strokeStyle="#d4af37",e.lineWidth=10,e.beginPath(),e.ellipse(i,s,470,225,0,0,Math.PI*2),e.stroke(),e.strokeStyle="#d4af37",e.lineWidth=4,e.setLineDash([20,12]),e.beginPath(),e.ellipse(i,s,390,175,0,0,Math.PI*2),e.stroke(),e.setLineDash([]),e.strokeStyle="rgba(212, 175, 55, 0.65)",e.lineWidth=2.5,e.beginPath(),e.ellipse(i,s,260,105,0,0,Math.PI*2),e.stroke(),e.strokeStyle="#d4af37",e.fillStyle="rgba(212, 175, 55, 0.12)",e.lineWidth=5,e.beginPath(),e.moveTo(i,s-65),e.lineTo(i+60,s),e.lineTo(i,s+65),e.lineTo(i-60,s),e.closePath(),e.fill(),e.stroke(),e.lineWidth=2,e.beginPath(),e.moveTo(i,s-35),e.lineTo(i+32,s),e.lineTo(i,s+35),e.lineTo(i-32,s),e.closePath(),e.stroke();const l=new ae(n);return ht.set(o,l),l}function tx(){const o="suite-curved-monitor",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#070b12",e.fillRect(0,0,1024,512),e.strokeStyle="#00ffff",e.lineWidth=3,e.strokeRect(4,4,1016,504),e.fillStyle="#0f1724",e.fillRect(6,6,1012,42),e.fillStyle="#ff5f56",e.beginPath(),e.arc(26,27,7,0,Math.PI*2),e.fill(),e.fillStyle="#ffbd2e",e.beginPath(),e.arc(46,27,7,0,Math.PI*2),e.fill(),e.fillStyle="#27c93f",e.beginPath(),e.arc(66,27,7,0,Math.PI*2),e.fill(),e.fillStyle="#182438",e.fillRect(90,12,220,36),e.fillStyle="#00ffff",e.font="bold 16px monospace",e.fillText("Suite402.ts • relzzy",106,36),e.fillStyle="#10b981",e.font="14px monospace",e.fillText("SYS: 120 FPS // RTX 3060 ONLINE // LAT: 0.8ms",600,32),e.fillStyle="#0a0f18",e.fillRect(6,48,140,458),e.fillStyle="#64748b",e.font="13px monospace",["EXPLORER","▶ src","  ▼ world","    Suite402.ts","    Audio.ts","    Props.ts","  ▶ game","  ▶ ui","  package.json"].forEach((a,l)=>{e.fillStyle=a.includes("Suite402")?"#00ffff":a.startsWith("▶")||a.startsWith("▼")?"#94a3b8":"#64748b",e.fillText(a,16,78+l*24)}),e.fillStyle="#070b12",e.fillRect(146,48,872,458),[{num:"01",text:'import { Scene, PerspectiveCamera } from "three";',color:"#e2e8f0"},{num:"02",text:'import { Suite402 } from "./world/Suite402";',color:"#38ef7d"},{num:"03",text:"",color:"#e2e8f0"},{num:"04",text:"// EXECUTIVE SUITE 402 — CYBER WORKSTATION INITIALIZED",color:"#64748b"},{num:"05",text:"export async function launchTokyoNight(): Promise<void> {",color:"#00ffff"},{num:"06",text:"  const district = await buildMidnightTokyo({",color:"#f8fafc"},{num:"07",text:'    location: "Sun Heights Mansion // Suite 402",',color:"#ffd166"},{num:"08",text:'    lighting: "Ultra PBR Dynamic Pool",',color:"#ffd166"},{num:"09",text:'    atmosphere: "Cyber Midnight Twilight (東京の夜)",',color:"#ffd166"},{num:"10",text:'    fpsTarget: 120, status: "READY"',color:"#38ef7d"},{num:"11",text:"  });",color:"#f8fafc"},{num:"12",text:"  district.igniteAtmosphere();",color:"#00ffff"},{num:"13",text:'  console.log("Welcome home to Tokyo, Relzzy.");',color:"#f472b6"},{num:"14",text:"}",color:"#00ffff"}].forEach((a,l)=>{const c=84+l*26;e.fillStyle="#334155",e.font="14px monospace",e.fillText(a.num,160,c),e.fillStyle=a.color,e.font="15px monospace",e.fillText(a.text,195,c)}),e.fillStyle="#00ffff",e.fillRect(360,409,10,16),e.fillStyle="#04070c",e.fillRect(146,440,872,66),e.strokeStyle="#1e293b",e.strokeRect(146,440,872,66),e.fillStyle="#10b981",e.font="bold 13px monospace",e.fillText("TERMINAL: build succeeded in 1.10s — 0 errors — All 43 point lights synchronized.",160,470),e.fillStyle="#38bdf8",e.fillText("relzzy@tokyo-rig:~/project$ █",160,492);const r=new ae(n);return ht.set(o,r),r}function ex(){const o="suite-alarm-clock",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#080a0f",e.fillRect(0,0,256,128),e.strokeStyle="#1b2230",e.lineWidth=4,e.strokeRect(8,8,240,112),e.fillStyle="rgba(0, 255, 255, 0.08)",e.font="bold 64px monospace",e.textAlign="center",e.fillText("88:88",128,88),e.shadowColor="#00ffff",e.shadowBlur=14,e.fillStyle="#00ffff",e.font="bold 64px monospace",e.fillText("11:42",128,88),e.shadowBlur=0,e.fillStyle="#00ffff",e.font="bold 12px monospace",e.fillText("PM",214,50),e.fillStyle="#10b981",e.fillText("● ALARM ON",128,112);const i=new ae(n);return ht.set(o,i),i}function nx(){const o="suite-living-room-mat",t=ht.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=512;const e=n.getContext("2d");e.fillStyle="#141822",e.fillRect(0,0,256,512),e.strokeStyle="#d4af37",e.lineWidth=8,e.strokeRect(8,8,240,496),e.strokeStyle="rgba(212, 175, 55, 0.6)",e.lineWidth=3,e.setLineDash([12,8]),e.strokeRect(20,20,216,472),e.setLineDash([]),e.fillStyle="#d4af37",e.beginPath(),e.arc(128,48,6,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(128,464,6,0,Math.PI*2),e.fill(),e.save(),e.translate(128,256),e.rotate(-Math.PI/2),e.fillStyle="#d4af37",e.font="900 28px sans-serif",e.textAlign="center",e.letterSpacing="6px",e.fillText("LIVING ROOM",0,8),e.font="bold 13px monospace",e.fillStyle="rgba(212, 175, 55, 0.75)",e.fillText("SUITE 402 // TOKYO",0,32),e.restore();const i=new ae(n);return ht.set(o,i),i}function ix(o,t){const n=new Pt;n.name="streets_and_terrain";const e=[],i=new qt(110,7);i.rotateX(-Math.PI/2),i.translate(0,.002,0),e.push(i);const s=new qt(5,38.5);s.rotateX(-Math.PI/2),s.translate(16,.002,22.75),e.push(s);const r=new qt(5,38.5);r.rotateX(-Math.PI/2),r.translate(-14,.002,-22.75),e.push(r);for(const p of e){const y=new m(p,B1);y.receiveShadow=!0,n.add(y)}const a=[{w:68.5,d:4,x:-20.75,z:5.5},{w:33.5,d:4,x:35.25,z:5.5},{w:10,d:6,x:0,z:10.5},{w:38.5,d:4,x:-35.75,z:-5.5},{w:63.5,d:4,x:20.25,z:-5.5},{w:3,d:38.5,x:12,z:22.75},{w:3,d:38.5,x:20,z:22.75},{w:3,d:38.5,x:-18,z:-22.75},{w:3,d:38.5,x:-10,z:-22.75}];for(const p of a){const y=new E(p.w,.15,p.d),v=new m(y,V1);v.position.set(p.x,.075,p.z),v.receiveShadow=!0,n.add(v)}const l=new E(9.5,.15,3),c=new m(l,gf);c.position.set(8.75,.075,21),c.receiveShadow=!0,n.add(c);const f=new E(9,.15,3),d=new m(f,gf);d.position.set(0,.075,23.5),d.receiveShadow=!0,n.add(d);const h=new E(18,.15,29),u=new m(h,q1);u.position.set(.5,.075,-22),u.receiveShadow=!0,n.add(u);const g=[{x:0,z:-9.5,w:5.6,d:4},{x:-7.2,z:-22,w:2.8,d:3.6},{x:0,z:-21.5,w:6.2,d:5.8},{x:0,z:-15,w:3.2,d:7.2},{x:-4.2,z:-22,w:3.4,d:2.6},{x:1,z:-27.5,w:3,d:6.5},{x:6,z:-32,w:4.5,d:3.8}];for(const p of g){const y=new E(p.w,.012,p.d),v=new m(y,$1);v.position.set(p.x,.156,p.z),v.receiveShadow=!0,n.add(v)}const x=[{x:5.2,z:-16,w:5.8,d:7.2},{x:-5,z:-14.5,w:4.8,d:6.2},{x:-3.5,z:-33.2,w:7.4,d:4.2}],w=new I({color:5922920,roughness:.9});for(const p of x){const y=new E(p.w+.3,.06,p.d+.3),v=new m(y,w);v.position.set(p.x,.17,p.z),v.receiveShadow=!0,n.add(v);const _=new E(p.w,.065,p.d),P=new m(_,K1);P.position.set(p.x,.18,p.z),P.receiveShadow=!0,n.add(P)}return ox(n),t.add({minX:-55,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:-41.5}),t.add({minX:-55,minY:0,minZ:41.5,maxX:55,maxY:10,maxZ:45}),t.add({minX:-55,minY:0,minZ:-45,maxX:-51.5,maxY:10,maxZ:45}),t.add({minX:51.5,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:45}),wr(n,-51,0,0,!1),wr(n,51,0,0,!1),wr(n,16,0,40,!0),wr(n,-14,0,-40,!0),o.add(n),n}function ox(o){const t=[{x:16,z:0,w:4.2,d:6.8,rotY:0},{x:-14,z:0,w:4.2,d:6.8,rotY:0},{x:0,z:0,w:3.6,d:6.8,rotY:0},{x:16,z:5.5,w:4.8,d:3.2,rotY:Math.PI/2},{x:-14,z:-5.5,w:4.8,d:3.2,rotY:Math.PI/2}];for(const r of t){const l=r.rotY===0?r.w/15:r.d/15,c=r.rotY===0?r.d:r.w;for(let f=0;f<8;f++){const d=new qt(r.rotY===0?l:c,r.rotY===0?c:l);d.rotateX(-Math.PI/2);const h=new m(d,Ms);if(r.rotY===0){const u=-r.w/2+f*l*2+l/2;h.position.set(r.x+u,.005,r.z)}else{const u=-r.d/2+f*l*2+l/2;h.position.set(r.x,.005,r.z+u)}o.add(h)}}const n=2.4,e=2.4;for(let r=-50;r<=50;r+=n+e){if(Math.abs(r-16)<3.5||Math.abs(r- -14)<3.5||Math.abs(r)<2.5)continue;const a=new qt(n,.18);a.rotateX(-Math.PI/2);const l=new m(a,Ms);l.position.set(r+n/2,.004,0),o.add(l)}const i=[{z:-3.2,x1:-52,x2:-17},{z:-3.2,x1:-11,x2:52},{z:3.2,x1:-52,x2:13},{z:3.2,x1:19,x2:52}];for(const r of i){const a=r.x2-r.x1,l=new qt(a,.15);l.rotateX(-Math.PI/2);const c=new m(l,Ms);c.position.set(r.x1+a/2,.004,r.z),o.add(c)}const s=[{x:16,z:3.6,w:4,d:.6},{x:16,z:-3.6,w:4,d:.6},{x:-14,z:3.6,w:4,d:.6},{x:-14,z:-3.6,w:4,d:.6},{x:0,z:3.6,w:3.6,d:.6},{x:0,z:-3.6,w:3.6,d:.6},{x:13.6,z:5.5,w:.6,d:3},{x:18.4,z:5.5,w:.6,d:3}];for(const r of s){const a=new E(r.w,.015,r.d),l=new m(a,ko);l.position.set(r.x,.155,r.z),l.receiveShadow=!0,o.add(l)}yf(o,16,7.5,Math.PI),yf(o,-14,-7.5,0),sx(o)}function sx(o){const t=new I({map:dg(),roughness:.55,metalness:.8}),n=[{x:-6,z:1.2},{x:16,z:14},{x:-14,z:-14},{x:28,z:-1.2},{x:-30,z:1.4}],e=new Sn(.44,24);e.rotateX(-Math.PI/2);for(const a of n){const l=new m(e,t);l.position.set(a.x,.005,a.z),l.receiveShadow=!0,o.add(l)}const i=new qt(.4,.9);i.rotateX(-Math.PI/2);const s=new I({color:2237996,roughness:.4,metalness:.85}),r=[{x:-22,z:3.25},{x:-8,z:3.25},{x:8,z:3.25},{x:26,z:3.25},{x:-22,z:-3.25},{x:-8,z:-3.25},{x:8,z:-3.25},{x:26,z:-3.25},{x:13.75,z:12},{x:18.25,z:12},{x:13.75,z:28},{x:18.25,z:28}];for(const a of r){const l=new m(i,s);l.position.set(a.x,.005,a.z),o.add(l)}}function yf(o,t,n,e){const i=new qt(3.6,.45);i.rotateX(-Math.PI/2),i.rotateY(e);const s=new m(i,Ms);s.position.set(t,.006,n),o.add(s);const r=new mn,a=new Float32Array([-.9,.006,-.6,.9,.006,-.6,0,.006,1.2]);r.setAttribute("position",new Xn(a,3)),r.computeVertexNormals();const l=new m(r,Ms);l.position.set(t,0,n+(e===0?-1.8:1.8)),e!==0&&l.rotateY(e),o.add(l)}function wr(o,t,n,e,i){const s=new Pt,r=new W(.06,.06,1.1,8),a=new E(4.8,.18,.06),l=new m(r,Fe);l.position.set(-2.2,.55,0);const c=new m(r,Fe);c.position.set(2.2,.55,0),s.add(l,c);const f=new m(a,ko);f.position.set(0,.8,0);const d=new m(a,ko);d.position.set(0,.45,0),s.add(f,d),s.position.set(t,n,e),i&&s.rotateY(Math.PI/2),o.add(s)}function rx(o,t,n,e,i,s,r){const a=new Pt;a.name="suite-402-executive-bedroom",o.add(a);const l=0,c=85,f=.15,d=8.4,h=5.6,u=2.9,g=.3,x=jg(),w=new I({map:x,roughness:.3,metalness:.08}),p=new I({color:1449e3,roughness:.72,metalness:.06}),y=new I({color:1053984,roughness:.65,metalness:.1}),v=new I({color:13938487,roughness:.28,metalness:.88}),_=new I({color:2234387,roughness:.42,metalness:.06}),P=new I({color:2037265,roughness:.48,metalness:.05}),R=new I({color:16118766,roughness:.6}),A=new Gt({color:16775910,toneMapped:!1}),D=new I({color:8246268,roughness:.05,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1,side:pn}),M=new I({color:1975344,roughness:.35,metalness:.8}),S=new I({color:14542060,roughness:.15,metalness:.92}),L=new Gt({color:65535,toneMapped:!1}),k=new I({color:1778483,roughness:.84,metalness:.03}),B=new I({color:15988473,roughness:.8,metalness:0}),j=new E(d,.05,h),Z=new m(j,w);Z.position.set(l,f+.025,c),Z.receiveShadow=!0,a.add(Z);const H=new E(d,.1,h),Q=new m(H,R);Q.position.set(l,f+u+.05,c),a.add(Q);const Y=d-1.6,at=h-1.2,ct=new m(new E(Y,.06,at),R);ct.position.set(l,f+u-.02,c),a.add(ct);const pt=new E(Y+.1,.02,at+.1),St=new m(pt,A);St.position.set(l,f+u-.05,c),a.add(St);const vt=(be,Ze,ni,ii)=>{const co=new m(new E(ni,.12,ii),v);co.position.set(be,f+.06,Ze),a.add(co)};vt(l,c+h/2-.02,d,.04),vt(l-d/2+.02,c,.04,h),vt(l-2.8,c-h/2+.02,2.8,.04),vt(l+2.8,c-h/2+.02,2.8,.04),vt(l+d/2-.02,c-1.5,.04,2.6);const V=new E(d+g*2,u,g),G=new m(V,p);G.position.set(l,f+u/2,c+h/2+g/2),G.castShadow=!0,G.receiveShadow=!0,a.add(G);for(let be=-3.2;be<=3.2;be+=1.6){const Ze=new m(new E(.04,u-.4,.02),v);Ze.position.set(l+be,f+u/2,c+h/2-.01),a.add(Ze)}const q=new E(g,u,h),nt=new m(q,y);nt.position.set(l-d/2-g/2,f+u/2,c),nt.castShadow=!0,nt.receiveShadow=!0,a.add(nt);const gt=new E(g,u,2.6),At=new m(gt,p);At.position.set(l+d/2+g/2,f+u/2,c-1.5),a.add(At);const ut=new E(g,u,1.2),Ut=new m(ut,p);Ut.position.set(l+d/2+g/2,f+u/2,c+2.2),a.add(Ut);const It=2.3,$t=new E(g,u-It,1.8),U=new m($t,p);U.position.set(l+d/2+g/2,f+It+(u-It)/2,c+.7),a.add(U);const Ht=new E(.06,It,1.4),Et=new m(Ht,_);Et.position.set(l+d/2+.04,f+It/2,c+.8),a.add(Et);const Ot=new m(new E(.08,.4,.04),v);Ot.position.set(l+d/2-.02,f+1.1,c+.3),a.add(Ot);const Lt=nx(),Kt=new I({map:Lt,roughness:.45,metalness:.2}),Tt=new m(new qt(.9,1.6),Kt);Tt.rotation.x=-Math.PI/2,Tt.position.set(l+d/2-.55,f+.052,c+.7),a.add(Tt);const C=new E(2.8,u,g),b=new m(C,p);b.position.set(l-2.8,f+u/2,c-h/2-g/2),a.add(b);const X=new E(2.8,u,g),it=new m(X,p);it.position.set(l+2.8,f+u/2,c-h/2-g/2),a.add(it);const ot=2.45,et=new E(2.8,u-ot,g),mt=new m(et,p);mt.position.set(l,f+ot+(u-ot)/2,c-h/2-g/2),a.add(mt);const xt=new m(new E(2.8,.06,.08),v);xt.position.set(l,f+ot,c-h/2);const ft=new m(new E(.06,ot,.08),v);ft.position.set(l,f+ot/2,c-h/2),a.add(xt,ft);const Rt=new E(1.35,ot-.1,.03),lt=new m(Rt,D);lt.position.set(l-.7,f+ot/2,c-h/2);const Mt=new m(Rt,D);Mt.position.set(l+.7,f+ot/2,c-h/2+.02),a.add(lt,Mt);const Zt=new W(.015,.015,.6,8),ie=new m(Zt,v);ie.position.set(l-.1,f+1.15,c-h/2+.03);const Dt=new m(Zt,v);Dt.position.set(l+.1,f+1.15,c-h/2+.05),a.add(ie,Dt);const Qt=2.4,Bt=3.6,fe=c-h/2-Qt/2,z=new E(Bt,.08,Qt),bt=new m(z,_);bt.position.set(l,f-.01,fe),a.add(bt);const J=1.1,st=new m(new E(Bt,J,.04),D);st.position.set(l,f+J/2,fe-Qt/2);const _t=new m(new E(.04,J,Qt),D);_t.position.set(l-Bt/2,f+J/2,fe);const wt=new m(new E(.04,J,Qt),D);wt.position.set(l+Bt/2,f+J/2,fe);const Vt=new m(new E(Bt+.08,.05,.08),S);Vt.position.set(l,f+J,fe-Qt/2);const le=new m(new E(.08,.05,Qt),S);le.position.set(l-Bt/2,f+J,fe);const Ae=new m(new E(.08,.05,Qt),S);Ae.position.set(l+Bt/2,f+J,fe),a.add(st,_t,wt,Vt,le,Ae);const oe=new Pt;oe.name="balcony-tokyo-skyline";const Ue=new Gt({color:461847,side:Rn}),Ge=new m(new Ee(45,16,12,0,Math.PI*2,0,Math.PI/2),Ue);Ge.position.set(l,f,c),oe.add(Ge);const ln=new Gt({color:16774863,toneMapped:!1}),Oe=new m(new Sn(1.6,24),ln);Oe.position.set(l+10,f+18,c-40),Oe.rotation.y=Math.PI,oe.add(Oe);const Me=[{x:-18,z:-38,w:9,h:28,d:9,color:659485},{x:-7,z:-32,w:7,h:22,d:7,color:923174},{x:3,z:-36,w:10,h:32,d:10,color:593691},{x:14,z:-30,w:8,h:24,d:8,color:923432},{x:24,z:-38,w:11,h:35,d:11,color:527896}];for(const be of Me){const Ze=new m(new E(be.w,be.h,be.d),new Gt({color:be.color}));Ze.position.set(l+be.x,f+be.h/2-4,c+be.z),oe.add(Ze);const ni=5,ii=8;for(let os=0;os<ii;os++)for(let ss=0;ss<ni;ss++)if((os*3+ss*7)%3===0){const Ad=(os+ss)%2===0?16771743:8246268,ql=new m(new qt(.35,.45),new Gt({color:Ad,toneMapped:!1}));ql.position.set(l+be.x-be.w/2+1+ss*1.5,f+4+os*2.2,c+be.z+be.d/2+.05),oe.add(ql)}const co=new W(.04,.08,4,6),Yl=new m(co,M);Yl.position.set(l+be.x,f+be.h-4+2,c+be.z);const Zl=new m(new Ee(.12,8,8),new Gt({color:16720418,toneMapped:!1}));Zl.position.set(l+be.x,f+be.h-4+4.1,c+be.z),oe.add(Yl,Zl)}a.add(oe);const Xt=l-2.5,he=c-1.5,se=1.9,ee=1.2,pe=.76,He=new E(se,.05,ee),cn=new m(He,_);cn.position.set(Xt,f+pe-.025,he),cn.castShadow=!0,cn.receiveShadow=!0;const ye=new m(new E(se+.02,.02,ee+.02),v);ye.position.set(Xt,f+pe-.04,he),a.add(cn,ye);const Re=new E(.07,pe,.07),te=[{x:Xt-se/2+.06,z:he-ee/2+.06},{x:Xt+se/2-.06,z:he-ee/2+.06},{x:Xt-se/2+.06,z:he+ee/2-.06},{x:Xt+se/2-.06,z:he+ee/2-.06}];for(const be of te){const Ze=new m(Re,M);Ze.position.set(be.x,f+pe/2,be.z),a.add(Ze)}const Jt=new I({color:1119776,roughness:.88}),T=new m(new E(1.4,.008,.75),Jt);T.position.set(Xt+.05,f+pe+.004,he),a.add(T);const F=tx(),$=new Gt({map:F,toneMapped:!1}),K=new m(new W(.18,.22,.02,16),M);K.position.set(Xt,f+pe+.01,he-.35);const O=new m(new E(.06,.32,.06),M);O.position.set(Xt,f+pe+.17,he-.35),a.add(K,O);const dt=new m(new qt(.65,.38),$);dt.position.set(Xt,f+pe+.35,he-.24);const Ct=new qt(.24,.38),Wt=new m(Ct,$);Wt.position.set(Xt-.42,f+pe+.35,he-.21),Wt.rotation.y=.22;const kt=new m(Ct,$);kt.position.set(Xt+.42,f+pe+.35,he-.21),kt.rotation.y=-.22;const re=new m(new E(1.1,.4,.04),M);re.position.set(Xt,f+pe+.35,he-.26);const de=new m(new E(.9,.02,.02),L);de.position.set(Xt,f+pe+.35,he-.28),a.add(dt,Wt,kt,re,de);const rt=Xt-.65,yt=he-.1,jt=.24,ne=.52,Se=.46,ce=new m(new E(jt,Se,ne),M);ce.position.set(rt,f+pe+Se/2,yt);const Nt=new m(new qt(ne-.04,Se-.04),D);Nt.rotation.y=Math.PI/2,Nt.position.set(rt+jt/2+.005,f+pe+Se/2,yt);const Ve=new m(new E(.04,.08,.28),L);Ve.position.set(rt+.02,f+pe+.18,yt-.04);const _e=new Ll(.045,.065,16),Je=new m(_e,L);Je.position.set(rt,f+pe+.15,yt+ne/2+.005);const bn=new m(_e,L);bn.position.set(rt,f+pe+.32,yt+ne/2+.005);const ke=new m(new Sn(.012,12),L);ke.rotation.x=-Math.PI/2,ke.position.set(rt,f+pe+Se+.002,yt+ne/2-.04),a.add(ce,Nt,Ve,Je,bn,ke);const zn=new E(.44,.015,.16),Ce=new I({color:1777708,roughness:.4}),fn=new m(zn,Ce);fn.position.set(Xt,f+pe+.015,he+.06);const qn=new m(new E(.42,.004,.14),L);qn.position.set(Xt,f+pe+.024,he+.06);const en=new E(.07,.025,.12),nn=new m(en,M);nn.position.set(Xt+.36,f+pe+.018,he+.06);const on=new W(.006,.006,.018,8);on.rotateZ(Math.PI/2);const $n=new m(on,L);$n.position.set(Xt+.36,f+pe+.032,he+.02),a.add(fn,qn,nn,$n);const Ii=new W(.04,.038,.09,16),Ls=new m(Ii,B);Ls.position.set(Xt-.35,f+pe+.045,he+.15);const zr=new Sn(.036,16),to=new m(zr,new Gt({color:3021072}));to.rotation.x=-Math.PI/2,to.position.set(Xt-.35,f+pe+.088,he+.15),a.add(Ls,to);const mi=Xt,gi=he+.75,Xo=new m(new W(.03,.03,.38,8),S);Xo.position.set(mi,f+.19,gi);for(let be=0;be<5;be++){const Ze=be*Math.PI*2/5,ni=new E(.32,.02,.04),ii=new m(ni,S);ii.position.set(mi+Math.cos(Ze)*.16,f+.06,gi+Math.sin(Ze)*.16),ii.rotation.y=-Ze,a.add(ii)}const Fr=new E(.52,.07,.5),Ds=new m(Fr,new I({color:1448482,roughness:.85}));Ds.position.set(mi,f+.44,gi);const Us=new E(.48,.65,.04),eo=new m(Us,new I({color:1909294,roughness:.9}));eo.position.set(mi,f+.82,gi+.24),eo.rotation.x=-.1;const Yo=new m(new E(.06,.22,.28),M);Yo.position.set(mi-.28,f+.56,gi+.05);const Ns=new m(new E(.06,.22,.28),M);Ns.position.set(mi+.28,f+.56,gi+.05),a.add(Xo,Ds,eo,Yo,Ns);const Xe=l-2.2,Ne=c+.4,Ye=2.4,gn=1.9,Zo=new m(new E(Ye-.2,.16,gn-.2),M);Zo.position.set(Xe,f+.08,Ne);const zs=new E(Ye,.18,gn),qo=new m(zs,_);qo.position.set(Xe,f+.25,Ne);const Fs=new m(new E(Ye+.02,.02,gn+.02),v);Fs.position.set(Xe,f+.34,Ne),a.add(Zo,qo,Fs);const Or=new E(.12,1.25,gn+.2),Li=new m(Or,_);Li.position.set(l-d/2+.06,f+.72,Ne);const no=new m(new E(.02,.03,gn+.16),v);no.position.set(l-d/2+.13,f+.95,Ne),a.add(Li,no);const $o=new E(Ye-.12,.24,gn-.08),Ko=new m($o,k);Ko.position.set(Xe+.04,f+.46,Ne),Ko.castShadow=!0;const kr=new E(.25,.08,gn-.12),Jo=new m(kr,B);Jo.position.set(Xe-.75,f+.55,Ne);const Os=new I({color:1119778,roughness:.78}),jo=new E(.48,.04,gn-.06),xn=new m(jo,Os);xn.position.set(Xe+.8,f+.58,Ne);const In=new m(new E(.02,.015,gn-.06),v);In.position.set(Xe+.56,f+.6,Ne);const Fn=new m(new E(.02,.015,gn-.06),v);Fn.position.set(Xe+1.04,f+.6,Ne),a.add(Ko,Jo,xn,In,Fn);const wn=new E(.44,.15,.72),io=new m(wn,B);io.position.set(Xe-.85,f+.58,Ne-.42),io.rotation.y=.05;const oo=new m(wn,B);oo.position.set(Xe-.85,f+.58,Ne+.42),oo.rotation.y=-.05,a.add(io,oo);const dn=l-3.4,hn=c+2.1,xi=.82,Di=.72,_n=.54,ks=new E(xi,_n,Di),Qo=new m(ks,_);Qo.position.set(dn,f+_n/2,hn);const ts=new m(new E(xi+.01,.015,Di+.01),v);ts.position.set(dn,f+_n-.01,hn);const es=new m(new E(.02,.025,.32),v);es.position.set(dn+xi/2+.01,f+_n*.65,hn),a.add(Qo,ts,es);const ns=new m(new W(.12,.14,.02,16),v);ns.position.set(dn,f+_n+.01,hn-.15);const Ui=new m(new W(.015,.015,.22,8),v);Ui.position.set(dn,f+_n+.12,hn-.15);const so=new Gt({color:16775904,toneMapped:!1}),ro=new m(new Ee(.14,16,16),so);ro.position.set(dn,f+_n+.28,hn-.15),a.add(ns,Ui,ro);const Bs=ex(),ao=new Gt({map:Bs,toneMapped:!1}),wi=new m(new E(.18,.09,.12),M);wi.position.set(dn+.18,f+_n+.045,hn+.16),wi.rotation.y=-.35;const Ni=new m(new qt(.16,.08),ao);Ni.position.set(dn+.18+Math.sin(-.35)*.061,f+_n+.045,hn+.16+Math.cos(-.35)*.061),Ni.rotation.y=-.35,a.add(wi,Ni);const Gs=new m(new E(.24,.04,.18),new I({color:9116186,roughness:.6}));Gs.position.set(dn-.16,f+_n+.02,hn+.15),Gs.rotation.y=.12;const je=new m(new E(.22,.035,.16),new I({color:1784619,roughness:.6}));je.position.set(dn-.15,f+_n+.055,hn+.14),je.rotation.y=-.06,a.add(Gs,je);const vn=Qg(),Tn=new I({map:vn,roughness:.85,metalness:.08,transparent:!0}),_i=new m(new qt(3.6,2.1),Tn);_i.rotation.x=-Math.PI/2,_i.position.set(l+.6,f+.052,c+.6),_i.receiveShadow=!0,a.add(_i);const sn=l+3.1,On=c-1.5,lo=1.6,Kn=.72,zi=2.45,Br=new m(new E(lo,zi,Kn),P);Br.position.set(sn,f+zi/2,On),Br.castShadow=!0;const Fl=new m(new E(lo+.08,.1,Kn+.08),_);Fl.position.set(sn,f+zi+.04,On);const Ol=new m(new E(lo+.1,.015,Kn+.1),v);Ol.position.set(sn,f+zi+.01,On),a.add(Br,Fl,Ol);const is=(lo-.06)/2,kl=new E(is,zi-.18,.03),Gr=new m(kl,P);Gr.position.set(sn-is/2-.01,f+zi/2-.02,On+Kn/2+.01);const Hr=new m(kl,P);Hr.position.set(sn+is/2+.01,f+zi/2-.02,On+Kn/2+.01);const Bl=be=>{const Ze=new m(new E(is-.14,.85,.01),_);Ze.position.set(0,.42,.015);const ni=new m(new E(is-.14,.85,.01),_);ni.position.set(0,-.48,.015),be.add(Ze,ni)};Bl(Gr),Bl(Hr);const Gl=new E(.02,.35,.03),Hl=new m(Gl,v);Hl.position.set(sn-.05,f+1.15,On+Kn/2+.04);const Vl=new m(Gl,v);Vl.position.set(sn+.05,f+1.15,On+Kn/2+.04),a.add(Gr,Hr,Hl,Vl);let Fi=!0;const Vr=new ve(16753203,2.6,6.5,1.2);Vr.position.set(dn,f+_n+.35,hn-.15),a.add(Vr);let Hs=!0;const Vs=new ve(65535,2,5.2,1.1);Vs.position.set(Xt,f+pe+.38,he-.1),a.add(Vs);const Wl=new ve(16772822,1.8,11,1.2);Wl.position.set(l,f+u-.3,c),a.add(Wl),r&&(r.register({x:dn,y:f+_n+.35,z:hn-.15,color:16753203,intensity:2.6,distance:6.5,decay:1.2,zone:"Suite402",dynamicIntensity:()=>Fi?2.6:0}),r.register({x:Xt,y:f+pe+.38,z:he-.1,color:65535,intensity:2,distance:5.2,decay:1.1,zone:"Suite402",dynamicIntensity:()=>Hs?1.8+Math.sin(Date.now()*.003)*.2:0}),r.register({x:l,y:f+u-.3,z:c,color:16772822,intensity:1.8,distance:11,decay:1.2,zone:"Suite402"})),t.add({minX:l-d/2-.5,minY:0,minZ:c+h/2-.05,maxX:l+d/2+.5,maxY:4,maxZ:c+h/2+1}),t.add({minX:l-d/2-1,minY:0,minZ:c-h/2-.5,maxX:l-d/2+.05,maxY:4,maxZ:c+h/2+.5}),t.add({minX:l-d/2-.5,minY:0,minZ:c-h/2-.5,maxX:l-1.35,maxY:4,maxZ:c-h/2+.05}),t.add({minX:l+1.35,minY:0,minZ:c-h/2-.5,maxX:l+d/2+.5,maxY:4,maxZ:c-h/2+.05}),t.add({minX:l-Bt/2-.2,minY:0,minZ:fe-Qt/2-.3,maxX:l+Bt/2+.2,maxY:4,maxZ:fe-Qt/2+.1}),t.add({minX:l-Bt/2-.3,minY:0,minZ:c-h/2-Qt,maxX:l-Bt/2+.1,maxY:4,maxZ:c-h/2}),t.add({minX:l+Bt/2-.1,minY:0,minZ:c-h/2-Qt,maxX:l+Bt/2+.3,maxY:4,maxZ:c-h/2}),t.add({minX:l+d/2-.05,minY:0,minZ:c-h/2-.5,maxX:l+d/2+1,maxY:4,maxZ:c-.1}),t.add({minX:l+d/2-.05,minY:0,minZ:c+1.6,maxX:l+d/2+1,maxY:4,maxZ:c+h/2+.5}),t.add({minX:l+d/2+.25,minY:0,minZ:c-.1,maxX:l+d/2+1.2,maxY:4,maxZ:c+1.6}),t.add({minX:Xt-se/2-.1,minY:0,minZ:he-ee/2-.1,maxX:Xt+se/2+.1,maxY:1.5,maxZ:he+ee/2+.1}),t.add({minX:Xe-Ye/2-.1,minY:0,minZ:Ne-gn/2-.1,maxX:Xe+Ye/2+.1,maxY:1.2,maxZ:Ne+gn/2+.1}),t.add({minX:dn-xi/2-.05,minY:0,minZ:hn-Di/2-.05,maxX:dn+xi/2+.05,maxY:1,maxZ:hn+Di/2+.05}),t.add({minX:sn-lo/2-.05,minY:0,minZ:On-Kn/2-.05,maxX:sn+lo/2+.05,maxY:3,maxZ:On+Kn/2+.05}),n.add({id:"suite-lamp",x:dn,z:hn,radius:1.8,prompt:()=>Fi?"Turn Off Bedside Lamp [消灯]":"Turn On Bedside Lamp [点灯]",onInteract:()=>{Fi=!Fi,ro.material=Fi?so:new Gt({color:4866099}),Vr.intensity=Fi?2.6:0,s==null||s.playVendingSound(),e.show(Fi?"Bedside amber designer lamp turned ON.":"Bedside lamp turned OFF. Midnight shadows settle in.")}}),n.add({id:"suite-pc",x:Xt,z:he+.45,radius:1.7,prompt:()=>Hs?"Compile Code on Workstation [PC操作]":"Power On Workstation [PC起動]",onInteract:()=>{Hs=!0,Vs.intensity=2,s==null||s.playVendingSound(),e.show("💻 Tokyo Workstation: Build succeeded with 0 errors. All systems optimal!")}}),n.add({id:"suite-bed",x:Xe+.6,z:Ne,radius:1.8,prompt:()=>"Rest on Bed [ベッドで休む]",onInteract:()=>{e.show("🌙 You sit by the edge of your bed, listening to the distant midnight city murmur.")}}),n.add({id:"suite-wardrobe",x:sn,z:On+Kn/2+.4,radius:1.6,prompt:()=>"Inspect Wardrobe [クローゼット]",onInteract:()=>{e.show("👔 Wardrobe: High-school blazer uniform, dark coats, and fresh linen neatly organized.")}}),n.add({id:"suite-elevator",x:l+d/2-.2,z:c+.7,radius:1.6,prompt:()=>"Take Elevator to 1F Entrance Lobby [1階 ロビーへ]",onInteract:()=>{s==null||s.playElevatorChime(),e.show("*Ding* Riding elevator down to 1F Entrance Lobby..."),setTimeout(()=>{i.teleport(0,18.2,Math.PI),e.show("1F Entrance Lobby. Step out to explore midnight Tokyo.",5)},400)}}),n.add({id:"suite-balcony",x:l,z:c-h/2-.8,radius:1.6,prompt:()=>"Gaze across Tokyo Skyline [夜景を眺める]",onInteract:()=>{e.show("🌃 The midnight Tokyo skyline glimmers beneath the crescent moon. A cool evening breeze passes.")}});let Xl=0;return{group:a,update(be,Ze){Xl+=be;const ii=(Ze.x-l)**2+(Ze.z-c)**2<1600;if(a.visible=Pn.isHigh()||ii,!!a.visible&&Hs){const co=1.6+Math.sin(Xl*3.5)*.3;Vs.intensity=co}}}}function ax(o,t,n,e,i,s,r){const a=new Pt;a.name="buildings";let l=null,c=null,f=null;const d=[];for(const h of Sd){const u=new Pt;u.name=`building-${h.id}`;const g=3.2,x=h.floors*g,w=h.w/2,p=h.d/2,y=new we(h.wall),v=new we(h.trim),_=new we(h.balcony),P=new I({color:y,roughness:.82,metalness:.08}),R=new I({color:v,roughness:.65,metalness:.12}),A=new I({color:_,roughness:.75,metalness:.15});if(h.id==="b-sunheights"){const D=lx(u,h,t,n,e,P,R,i,s,r);l=D.light,d.push(D.update);const M=(h.floors-1)*g,S=new E(h.w,M,h.d),L=new m(S,P);L.position.set(h.x,g+M/2,h.z),L.castShadow=!0,L.receiveShadow=!0,u.add(L),_r(u,h,g,R,A)}else if(h.id==="b-konbini"){const D=cx(u,h,t,n,e,P,R,i,s);c=D.light,d.push(D.update);const M=(h.floors-1)*g,S=new E(h.w,M,h.d),L=new m(S,P);L.position.set(h.x,g+M/2,h.z),L.castShadow=!0,L.receiveShadow=!0,u.add(L),_r(u,h,g,R,A)}else if(h.id==="b-ramen"){const D=fx(u,h,t,n,e,P,R,i,s);f=D.light,d.push(D.update);const M=(h.floors-1)*g,S=new E(h.w,M,h.d),L=new m(S,P);L.position.set(h.x,g+M/2,h.z),L.castShadow=!0,L.receiveShadow=!0,u.add(L),_r(u,h,g,R,A)}else{const D=new E(h.w,x,h.d),M=new m(D,P);M.position.set(h.x,x/2,h.z),M.castShadow=!0,M.receiveShadow=!0,u.add(M),t.add({minX:h.x-w,minY:0,minZ:h.z-p,maxX:h.x+w,maxY:x+2,maxZ:h.z+p});const S=ux(u,h,R,n,e,i,s);S!=null&&S.update&&d.push(S.update),_r(u,h,0,R,A)}gx(u,h,x,R),mx(u,h,x),a.add(u)}if(o.add(a),r){const h=rx(o,t,n,e,r,i,s);d.push(h.update)}return{group:a,lobbyLight:l??new ve(16769712,1,10),konbiniLight:c??new ve(16777215,1,12),ramenLight:f??new ve(16750916,1,10),update(h,u){for(const g of d)g(h,u)}}}function lx(o,t,n,e,i,s,r,a,l,c){const d=t.w/2,h=new Pt;h.name="lobby-interior-props",o.add(h);const u=7.6,g=8.4,x=.15,w=.35,p=3.2-x,y=new I({map:xg(),roughness:.22,metalness:.08}),v=new E(u,.05,g),_=new m(v,y);_.position.set(t.x,x+.025,t.z),_.receiveShadow=!0,o.add(_);const P=new I({color:16184559,roughness:.5}),R=new E(u,.2,g),A=new m(R,P);A.position.set(t.x,3.2-.1,t.z),o.add(A);const D=4.8,M=5.6,S=new E(D,.08,M),L=new I({color:15789282,roughness:.6}),k=new m(S,L);k.position.set(t.x,3.2-.04,t.z),h.add(k);const B=new E(D+.12,.02,M+.12),j=new m(B,ti);j.position.set(t.x,3.2-.07,t.z),h.add(j);for(const je of[-1.8,1.8])for(const vn of[-2,2]){const Tn=new W(.12,.12,.04,12),_i=new m(Tn,Ft);_i.position.set(t.x+je,3.2-.02,t.z+vn);const sn=new m(new Sn(.09,12),ti);sn.rotateX(Math.PI/2),sn.position.set(t.x+je,3.2-.041,t.z+vn),h.add(_i,sn)}const Z=new I({map:gg(),roughness:.55,metalness:.02}),H=new E(u,p,w),Q=new m(H,Z);Q.position.set(t.x,x+p/2,t.z+g/2-w/2),o.add(Q),n.add({minX:t.x-u/2,minY:0,minZ:t.z+g/2-w,maxX:t.x+u/2,maxY:3.2,maxZ:t.z+g/2+1});const Y=new E(w,p,g),at=new m(Y,Z);at.position.set(t.x-u/2+w/2,x+p/2,t.z),o.add(at),n.add({minX:t.x-d-.5,minY:0,minZ:t.z-g/2,maxX:t.x-u/2+w,maxY:3.2,maxZ:t.z+g/2});const ct=new E(w,p,g),pt=new m(ct,Z);pt.position.set(t.x+u/2-w/2,x+p/2,t.z),o.add(pt),n.add({minX:t.x+u/2-w,minY:0,minZ:t.z-g/2,maxX:t.x+d+.5,maxY:3.2,maxZ:t.z+g/2});const St=2.4,vt=(u-St)/2,V=new E(vt,p,w),G=new m(V,Z);G.position.set(t.x-u/2+vt/2,x+p/2,t.z-g/2+w/2),o.add(G),n.add({minX:t.x-u/2,minY:0,minZ:t.z-g/2,maxX:t.x-St/2,maxY:3.2,maxZ:t.z-g/2+w});const q=new E(vt,p,w),nt=new m(q,Z);nt.position.set(t.x+u/2-vt/2,x+p/2,t.z-g/2+w/2),o.add(nt),n.add({minX:t.x+St/2,minY:0,minZ:t.z-g/2,maxX:t.x+u/2,maxY:3.2,maxZ:t.z-g/2+w});const gt=new E(St,.7,w),At=new m(gt,r);At.position.set(t.x,3.2-.35,t.z-g/2+w/2),o.add(At);const ut=new Gt({map:fg(),toneMapped:!1}),Ut=new m(new E(.8,.35,.08),ut);Ut.position.set(t.x,3.2-.55,t.z-g/2+w+.02),o.add(Ut);const It=new E(1.15,2.3,.06),$t=new m(It,We);$t.position.set(t.x-.65,x+1.15,t.z-g/2+w/2);const U=new m(It,We);U.position.set(t.x+.65,x+1.15,t.z-g/2+w/2),o.add($t,U);const Ht=new E(2.4,.015,1.4),Et=new I({color:2955812,roughness:.95}),Ot=new m(Ht,Et);Ot.position.set(t.x,x+.035,t.z-g/2+1.2),o.add(Ot);const Lt=new W(.18,.16,.65,12),Kt=new m(Lt,Ft);Kt.position.set(t.x+1.5,x+.325,t.z-g/2+.6),o.add(Kt);for(let je=0;je<3;je++){const vn=new $e(.04,.012,6,12,Math.PI),Tn=new m(vn,Fe);Tn.position.set(t.x+1.45+je*.05,x+.72,t.z-g/2+.6),o.add(Tn)}const Tt=new W(.08,.08,.42,10),C=new I({color:14231064,roughness:.3,metalness:.2}),b=new m(Tt,C);b.position.set(t.x-1.5,x+.28,t.z-g/2+.5),o.add(b);const X=new E(.35,.5,.06),it=new m(X,Ft);it.position.set(t.x+St/2+.4,x+1.35,t.z-g/2-.05),o.add(it);const ot=Cs("サンハイツ SUN HEIGHTS","#1d2530","#e2ebf5","RESIDENCE 1-24",512,128),et=new m(new E(2.6,.65,.12),ot);et.position.set(t.x,3.2-.25,t.z-g/2-.08),o.add(et);const mt=t.x-u/2+w,xt=.28,ft=1.35,Rt=2.6,lt=mt+xt/2+.01,Mt=t.z-.5,Zt=new E(xt,ft,Rt),ie=new I({color:4870749,roughness:.3,metalness:.6}),Dt=new m(Zt,ie);Dt.position.set(lt,x+1.25,Mt),h.add(Dt);const Qt=new I({map:_g(),roughness:.25,metalness:.5}),Bt=new m(new qt(Rt,ft),Qt);Bt.rotateY(Math.PI/2),Bt.position.set(lt+xt/2+.005,x+1.25,Mt),h.add(Bt);const fe=new E(.38,.04,Rt+.1),z=new m(fe,Ft);z.position.set(mt+.19,x+.56,Mt),h.add(z);const bt=new E(.32,.45,.45),J=new I({color:2250043,roughness:.4}),st=new m(bt,J);st.position.set(mt+.18,x+.23,Mt+Rt/2-.3),h.add(st);const _t=new m(new E(.24,.03,.06),Ft);_t.position.set(mt+.18,x+.46,Mt+Rt/2-.3),h.add(_t);const wt=.44,Vt=1.95,le=1.6,Ae=mt+wt/2+.01,oe=t.z+2.1,Ue=new m(new E(wt,Vt,le),new I({color:2041392,roughness:.35,metalness:.5}));Ue.position.set(Ae,x+Vt/2,oe),h.add(Ue);const Ge=new I({map:vg(),roughness:.3,metalness:.4}),ln=new m(new qt(le,Vt),Ge);ln.rotateY(Math.PI/2),ln.position.set(Ae+wt/2+.005,x+Vt/2,oe),h.add(ln),n.add({minX:t.x-u/2,minY:0,minZ:t.z-2,maxX:t.x-u/2+.85,maxY:2.4,maxZ:t.z+3.1}),e.add({id:"apt-mailboxes",x:mt+.95,z:t.z+.6,radius:2.2,prompt:"Check Mail & Parcel Lockers",onInteract:()=>{i.show("Apartment #304 (Relzzy): Tokyo Gas statement, local izakaya coupon, and a notification: Delivery Locker #3 is holding your Amazon parcel!")}});const Oe=t.x+u/2-w,Me=1.15,Xt=1.05,he=2.4,se=Oe-Me/2-.2,ee=t.z+.9,pe=new I({map:wg(),roughness:.4,metalness:.05}),He=new m(new E(Me,Xt,he),pe);He.position.set(se,x+Xt/2,ee),He.castShadow=!0,h.add(He);const cn=new E(.04,.02,he-.04),ye=new m(cn,ti);ye.position.set(se-Me/2-.01,x+Xt-.02,ee),h.add(ye);const Re=new E(Me+.08,.06,he+.08),te=new I({color:16119803,roughness:.18,metalness:.08}),Jt=new m(Re,te);Jt.position.set(se,x+Xt+.03,ee),h.add(Jt);const T=new E(.02,.45,he*.75),F=new m(T,We);F.position.set(se-Me/2+.05,x+Xt+.28,ee+.2),h.add(F);const $=new m(new W(.05,.06,.02,12),Ft),K=new m(new Ee(.045,12,8,0,Math.PI*2,0,Math.PI/2),new I({color:13938487,roughness:.2,metalness:.8})),O=new m(new W(.008,.008,.03,8),Ft);$.position.set(se-Me/4,x+Xt+.07,ee-.5),K.position.set(se-Me/4,x+Xt+.08,ee-.5),O.position.set(se-Me/4,x+Xt+.125,ee-.5),h.add($,K,O);const dt=new m(new E(.28,.015,.22),new I({color:2367002,roughness:.8})),Ct=new m(new E(.26,.016,.2),new I({color:16514040,roughness:.5}));dt.position.set(se-Me/4,x+Xt+.065,ee-.1),Ct.position.set(se-Me/4,x+Xt+.075,ee-.1),h.add(dt,Ct);const Wt=new m(new W(.015,.02,.03,8),Ft);Wt.position.set(se-Me/4+.18,x+Xt+.075,ee-.1);const kt=new m(new W(.004,.004,.14,6),Ft);kt.position.set(se-Me/4+.18,x+Xt+.14,ee-.1),kt.rotateZ(.15),h.add(Wt,kt);const re=new m(new E(.2,.05,.18),new I({color:2040616,roughness:.4}));re.position.set(se+.05,x+Xt+.08,ee+.6);const de=new m(new E(.06,.04,.2),new I({color:1119773,roughness:.3}));de.position.set(se+.02,x+Xt+.11,ee+.6),h.add(re,de);const rt=new m(new W(.06,.07,.02,10),Ft);rt.position.set(se+.15,x+Xt+.07,ee-.6);const yt=new m(new W(.012,.012,.28,8),Ft);yt.position.set(se+.15,x+Xt+.21,ee-.6);const jt=new m(new E(.18,.08,.1),new I({color:674347,roughness:.3,metalness:.2}));jt.position.set(se+.12,x+Xt+.33,ee-.6),h.add(rt,yt,jt);const ne=new ve(16768928,1.2,3.5);ne.position.set(se+.12,x+Xt+.3,ee-.6),l?l.register({x:se+.12,y:x+Xt+.3,z:ee-.6,color:16768928,intensity:1.2,distance:3.5,zone:"Lobby"}):h.add(ne);const Se=Cs("管理事務室","#18202c","#d4af37","CONCIERGE & MGMT",256,128),ce=new m(new qt(.24,.12),Se);ce.rotateY(-Math.PI/2),ce.position.set(se-Me/2-.005,x+Xt+.08,ee-.8),h.add(ce);const Nt=new m(new W(.25,.25,.04,6),Ft);Nt.position.set(se+.45,x+.06,ee+.1);const Ve=new m(new W(.025,.025,.45,8),Ft);Ve.position.set(se+.45,x+.28,ee+.1);const _e=new m(new E(.44,.06,.42),new I({color:1580582,roughness:.7}));_e.position.set(se+.45,x+.52,ee+.1);const Je=new m(new E(.05,.44,.4),new I({color:2239030,roughness:.6}));Je.position.set(se+.64,x+.74,ee+.1),h.add(Nt,Ve,_e,Je);const bn=new m(new E(.08,.6,.45),new I({color:4007959,roughness:.6}));bn.position.set(Oe-.05,x+1.5,ee-.6),h.add(bn);const ke=new m(new E(.06,.55,.85),new I({color:1119773,roughness:.3}));ke.position.set(Oe-.04,x+1.65,ee+.6);const zn=new m(new qt(.8,.5),new Gt({color:2245717}));zn.rotateY(-Math.PI/2),zn.position.set(Oe-.075,x+1.65,ee+.6),h.add(ke,zn);const Ce=new I({map:yg(),roughness:.6}),fn=new m(new qt(1.6,.8),Ce);fn.rotateY(-Math.PI/2),fn.position.set(Oe-.015,x+1.65,ee-.2),h.add(fn),n.add({minX:se-Me/2-.1,minY:0,minZ:ee-he/2-.1,maxX:t.x+u/2,maxY:2.2,maxZ:ee+he/2+.2}),e.add({id:"apt-reception-bell",x:se-Me/2-.4,z:ee-.5,radius:1.8,prompt:"Ring Concierge Desk Bell",onInteract:()=>{a==null||a.playDeskBellSound(),i.show('*Ting!* Resident Manager: "Konnichiwa! Welcome back to Sun Heights. All parcel lockers and facilities are operational."')}}),e.add({id:"apt-notice-board",x:se-Me/2-.4,z:ee-.1,radius:1.8,prompt:"Read Resident Notices",onInteract:()=>{i.show("[Lobby Notices] ① Trash: Burnable Mon/Thu, Recyclable Wed. ② Annual fire equipment check this Saturday. ③ Please collapse Amazon cardboard boxes.")}});const qn=new I({map:Mg(),roughness:.35,metalness:.2}),en=new m(new qt(1.4,1.05),qn);en.rotateY(-Math.PI/2),en.position.set(Oe-.015,x+1.6,t.z-2.2),h.add(en);const nn=1.4,on=.55,$n=Oe-on/2-.25,Ii=t.z-1.2,Ls=new E(on,.06,nn),zr=new I({color:2825492,roughness:.7}),to=new m(Ls,zr);to.position.set($n,x+.22,Ii);const mi=new E(on-.04,.18,nn-.04),gi=new I({color:8143650,roughness:.5}),Xo=new m(mi,gi);Xo.position.set($n,x+.33,Ii);for(const je of[-on/2+.08,on/2-.08])for(const vn of[-nn/2+.08,nn/2-.08]){const Tn=new m(new W(.02,.015,.22,8),Ft);Tn.position.set($n+je,x+.11,Ii+vn),h.add(Tn)}h.add(to,Xo),n.add({minX:$n-on/2,minY:0,minZ:Ii-nn/2,maxX:Oe,maxY:1,maxZ:Ii+nn/2});const Fr=new W(.24,.18,.55,12),Ds=new I({color:16119285,roughness:.3}),Us=new m(Fr,Ds),eo=t.x-u/2+.8,Yo=t.z-g/2+.9;Us.position.set(eo,x+.275,Yo),h.add(Us);const Ns=new I({color:3043136,roughness:.4});for(let je=0;je<7;je++){const vn=new Ke(.18,.65,5);vn.rotateX(.4);const Tn=new m(vn,Ns);Tn.position.set(eo,x+.55,Yo),Tn.rotateY(je*Math.PI*2/7),h.add(Tn)}const Xe=2,Ne=2.4,Ye=t.z+g/2-w-.05,gn=new I({color:8153418,roughness:.25,metalness:.7}),Zo=new m(new E(.12,Ne+.06,.08),gn);Zo.position.set(t.x-Xe/2-.06,x+Ne/2,Ye);const zs=new m(new E(.12,Ne+.06,.08),gn);zs.position.set(t.x+Xe/2+.06,x+Ne/2,Ye);const qo=new m(new E(Xe+.24,.12,.08),gn);qo.position.set(t.x,x+Ne+.06,Ye),h.add(Zo,zs,qo);const Fs=new E(.98,Ne,.06),Or=new E(.98,Ne,.06),Li=new I({color:9081501,roughness:.25,metalness:.75}),no=new m(Fs,Li),$o=new m(Or,Li);no.position.set(t.x-.5,x+Ne/2,Ye),$o.position.set(t.x+.5,x+Ne/2,Ye),h.add(no,$o);const Ko=new qt(.45,.22),kr=new Gt({color:16755234}),Jo=new m(Ko,kr);Jo.position.set(t.x,x+Ne+.22,Ye+.05),h.add(Jo);const Os=new m(new E(.12,.28,.03),Ft);Os.position.set(t.x+Xe/2+.35,x+1.25,Ye+.03);const jo=new m(new W(.025,.025,.02,10),ti);jo.rotateX(Math.PI/2),jo.position.set(t.x+Xe/2+.35,x+1.28,Ye+.05),h.add(Os,jo);const xn=2,In=1.8,Fn=2.5,wn=Ye+In/2+.05,io=new m(new E(xn,.04,In),y);io.position.set(t.x,x+.02,wn),h.add(io);const oo=new m(new E(xn,.08,In),Ft);oo.position.set(t.x,x+Fn,wn),h.add(oo);const dn=new E(xn-.1,Fn-.2,.04),hn=new I({color:13424352,roughness:.05,metalness:.9}),xi=new m(dn,hn);xi.position.set(t.x,x+Fn/2,wn+In/2-.02),h.add(xi);const Di=new E(.04,Fn,In),_n=new m(Di,Li);_n.position.set(t.x-xn/2+.02,x+Fn/2,wn);const ks=new m(Di,Li);ks.position.set(t.x+xn/2-.02,x+Fn/2,wn),h.add(_n,ks);const Qo=new W(.02,.02,xn-.2,8);Qo.rotateZ(Math.PI/2);const ts=new m(Qo,Ft);ts.position.set(t.x,x+.9,wn+In/2-.1),h.add(ts);const es=new m(new E(.08,.7,.14),Ft);es.position.set(t.x+xn/2-.06,x+1.25,wn-.2),h.add(es);const ns=new ve(16775904,2,5.5);ns.position.set(t.x,x+Fn-.15,wn),l?l.register({x:t.x,y:x+Fn-.15,z:wn,color:16775904,intensity:2,distance:5.5,zone:"Lobby"}):h.add(ns),n.add({minX:t.x-xn/2-.2,minY:0,minZ:wn+In/2-.1,maxX:t.x+xn/2+.2,maxY:3.2,maxZ:wn+In/2+.3}),n.add({minX:t.x-xn/2-.2,minY:0,minZ:Ye,maxX:t.x-xn/2+.1,maxY:3.2,maxZ:wn+In/2}),n.add({minX:t.x+xn/2-.1,minY:0,minZ:Ye,maxX:t.x+xn/2+.2,maxY:3.2,maxZ:wn+In/2});let Ui=!1;e.add({id:"apt-elevator",x:t.x+Xe/2+.35,z:t.z+g/2-.8,radius:1.8,prompt:()=>Ui?"Take Elevator to Suite 402 (Your Room) [4階 部屋へ]":"Call Elevator [1階 エレベーター]",onInteract:()=>{Ui?(a==null||a.playElevatorChime(),i.show("*Ding* Riding elevator up to 4F Suite 402..."),c&&setTimeout(()=>{c.teleport(1.2,85.2,-Math.PI/2),i.show("Sun Heights Suite 402 (Executive Bedroom). Welcome home.",5)},400)):(Ui=!0,a==null||a.playElevatorChime(),i.show("*Ding* Elevator arrives at 1F. Champagne doors glide open."))}});const so=new ve(16771279,2.2,16,1.1);so.position.set(t.x,3.2-.25,t.z);const ro=new ve(16769200,1.8,8,1.2);ro.position.set(se,3.2-.25,ee);const Bs=new ve(16770760,1.8,8,1.2);Bs.position.set(t.x,3.2-.25,Ye-1.2),l?(l.register({x:t.x,y:3.2-.25,z:t.z,color:16771279,intensity:2.2,distance:16,decay:1.1,zone:"Lobby"}),l.register({x:se,y:3.2-.25,z:ee,color:16769200,intensity:1.8,distance:8,decay:1.2,zone:"Lobby"}),l.register({x:t.x,y:3.2-.25,z:Ye-1.2,color:16770760,intensity:1.8,distance:8,decay:1.2,zone:"Lobby"})):(o.add(so),o.add(ro),o.add(Bs));let ao=0,wi=0,Ni=!1;return{light:so,update:(je,vn)=>{const Tn=(vn.x-t.x)**2+(vn.z-t.z)**2;h.visible=Pn.isHigh()||Tn<784;const sn=Math.hypot(vn.x-t.x,vn.z-(t.z-g/2))<2.6?1:0;sn>.5&&!Ni?(a==null||a.playSlidingDoorSound(),Ni=!0):sn<.5&&(Ni=!1),ao+=(sn-ao)*Math.min(1,je*5),$t.position.x=t.x-.65-ao*.75,U.position.x=t.x+.65+ao*.75,h.visible&&(wi+=((Ui?1:0)-wi)*Math.min(1,je*4),no.position.x=t.x-.5-wi*.75,$o.position.x=t.x+.5+wi*.75)}}}function cx(o,t,n,e,i,s,r,a,l){const u=3.0500000000000003,g=.35,x=new Pt;x.name="konbini-interior-props",o.add(x);const w=new E(9.8,.05,11.4),p=new m(w,og);p.position.set(t.x,.15+.025,t.z),p.receiveShadow=!0,o.add(p);const y=new E(9.8,.2,11.4),v=new I({color:16120058,roughness:.5}),_=new m(y,v);_.position.set(t.x,3.2-.1,t.z),o.add(_);const P=new I({map:ug(),roughness:.3,metalness:.05}),R=new E(g,u,11.4),A=new m(R,s);A.position.set(t.x+9.8/2-g/2,.15+u/2,t.z),o.add(A),n.add({minX:t.x+9.8/2-g,minY:0,minZ:t.z-11.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+11.4/2});const D=new m(new E(9.8,u,.04),P);D.position.set(t.x,.15+u/2,t.z+11.4/2-.02);const M=new m(new E(t.w,3.2,g),s);M.position.set(t.x,3.2/2,t.z+t.d/2-g/2),o.add(D,M);const S=new I({color:3818062,roughness:.6,metalness:.4}),L=new m(new E(1,2.1,.06),S);L.position.set(t.x-2.5,1.05,t.z+t.d/2+.01);const k=new m(new E(.5,.6,.22),Ft);k.position.set(t.x+2,1.5,t.z+t.d/2+.08),o.add(L,k),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z+11.4/2-g,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const B=new m(new E(9.8,u,.04),P);B.position.set(t.x,.15+u/2,t.z-11.4/2+.02);const j=new m(new E(t.w,3.2,g),s);j.position.set(t.x,3.2/2,t.z-t.d/2+g/2),o.add(B,j),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z-t.d/2-1,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z-11.4/2+g});const Z=2.4,H=(11.4-Z)/2,Q=new E(.1,2.4,H),Y=new m(Q,We);Y.position.set(t.x-9.8/2+.05,.15+1.2,t.z+11.4/2-H/2);const at=new E(.1,2.4,H),ct=new m(at,We);ct.position.set(t.x-9.8/2+.05,.15+1.2,t.z-11.4/2+H/2),o.add(Y,ct),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z+Z/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z+11.4/2}),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z-11.4/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z-Z/2});const pt=new E(.06,2.3,1.15),St=new m(pt,We),vt=new m(pt,We);St.position.set(t.x-9.8/2+.05,.15+1.15,t.z+.6),vt.position.set(t.x-9.8/2+.05,.15+1.15,t.z-.6),o.add(St,vt);const V=new E(.4,.8,11.4),G=new m(V,r);G.position.set(t.x-9.8/2+.2,3.2-.4,t.z),o.add(G);const q=Cs("CONVENIENCE 24H","#0c6c44","#ffffff","FAMILY STORE",512,160),nt=new m(new qt(7.5,.95),q);nt.rotateY(-Math.PI/2),nt.position.set(t.x-9.8/2-.05,3.2-.4,t.z),o.add(nt);const gt=8.6,At=new E(.65,2.4,gt),ut=new I({color:1317410,roughness:.3,metalness:.5}),Ut=new m(At,ut);Ut.position.set(t.x+9.8/2-.5,.15+1.2,t.z),x.add(Ut);const It=new Gt({map:pg(),toneMapped:!1}),$t=new m(new qt(gt,2.2),It);$t.rotateY(-Math.PI/2),$t.position.set(t.x+9.8/2-.84,.15+1.2,t.z),x.add($t),n.add({minX:t.x+9.8/2-1.1,minY:0,minZ:t.z-gt/2,maxX:t.x+9.8/2,maxY:2.6,maxZ:t.z+gt/2}),e.add({id:"konbini-drinks",x:t.x+9.8/2-1.4,z:t.z,radius:2,prompt:"Open Beverage Chiller & Grab Drink",onInteract:()=>{i.show("Cold blast of air! Grabbed an ice-cold Pocari Sweat and Melty Blend Green Tea.")}}),Mf(x,t.x+.8,.15,t.z+1.8,n),Mf(x,t.x+.8,.15,t.z-2.2,n),e.add({id:"konbini-shelf-noodles",x:t.x+.8,z:t.z+1.8,radius:1.8,prompt:"Browse Cup Noodles & Snacks",onInteract:()=>{i.show("Nissin Seafood Cup Noodles, Curry Ramen, Calbee Seaweed Chips, and Matcha Pocky in stock.")}}),e.add({id:"konbini-shelf-bento",x:t.x+.8,z:t.z-2.2,radius:1.8,prompt:"Inspect Bento & Onigiri Shelf",onInteract:()=>{i.show("Spicy salmon onigiri, tuna mayo rice ball, and hot tonkatsu bento lunchbox ready to eat.")}});const U=3.6,Ht=1.05,Et=.98,Ot=new E(Ht,Et,U),Lt=new I({map:hg(),roughness:.25,metalness:.05}),Kt=new m(Ot,Lt);Kt.position.set(t.x-2.2,.15+Et/2,t.z-3.4),x.add(Kt);const Tt=new E(Ht+.08,.06,U+.08),C=new I({color:2040616,roughness:.25,metalness:.15}),b=new m(Tt,C);b.position.set(t.x-2.2,.15+Et+.03,t.z-3.4),x.add(b),n.add({minX:t.x-2.2-Ht/2-.1,minY:0,minZ:t.z-3.4-U/2,maxX:t.x-2.2+Ht/2+.1,maxY:1.5,maxZ:t.z-3.4+U/2});const X=new m(new W(.04,.04,.2,8),Ft);X.position.set(t.x-2.2,.15+Et+.16,t.z-3.8);const it=new m(new E(.36,.26,.04),new Gt({color:1740620}));it.position.set(t.x-2.2,.15+Et+.3,t.z-3.8),it.rotateX(-.2),x.add(X,it);const ot=new m(new E(.14,.06,.2),new I({color:1118481,roughness:.3}));ot.position.set(t.x-1.85,.15+Et+.09,t.z-3.6),ot.rotateX(.15),x.add(ot);const et=new E(.18,.02,.14),mt=new I({color:30668,roughness:.3}),xt=new m(et,mt);xt.position.set(t.x-1.85,.15+Et+.07,t.z-4),x.add(xt);const ft=.95,Rt=.65,lt=.55,Mt=new Pt;Mt.position.set(t.x-2,.15+Et+.06,t.z-2.3);const Zt=new m(new E(lt,Rt,ft),Ft);Zt.position.set(0,Rt/2,0),Mt.add(Zt);const ie=new Gt({map:mg(),toneMapped:!1}),Dt=new m(new qt(ft*.95,.22),ie);Dt.rotateY(Math.PI/2),Dt.position.set(lt/2+.01,Rt-.12,0),Mt.add(Dt);const Qt=new m(new qt(ft*.95,Rt*.55),We);Qt.rotateY(Math.PI/2),Qt.position.set(lt/2+.01,Rt*.38,0),Mt.add(Qt);const Bt=new E(.08,.035,.14),fe=new I({color:14254616,roughness:.85});for(let ye=0;ye<3;ye++){const Re=new m(Bt,fe);Re.position.set(0,.18,-.28+ye*.28),Mt.add(Re)}const z=new Ee(.055,10,8);z.scale(1,.6,1);const bt=new I({color:16776437,roughness:.9});for(let ye=0;ye<3;ye++){const Re=new m(z,bt);Re.position.set(0,.36,-.28+ye*.28),Mt.add(Re)}const J=new ve(16742161,2.2,4.5);J.position.set(0,Rt-.1,0),l?l.register({x:t.x-2,y:.15+Et+.06+Rt-.1,z:t.z-2.3,color:16742161,intensity:2.2,distance:4.5,zone:"Konbini"}):Mt.add(J),x.add(Mt);const st=new E(.52,.45,.48),_t=new m(st,Ft);_t.position.set(t.x-2.8,.15+Et+.28,t.z-4.5),x.add(_t);const wt=new E(.42,.62,.42),Vt=new I({color:2040616,roughness:.3,metalness:.6}),le=new m(wt,Vt);le.position.set(t.x-2.8,.15+Et+.36,t.z-1.8),x.add(le);const Ae=new E(.35,1.25,2.6),oe=new I({color:4015182,metalness:.6,roughness:.3}),Ue=new m(Ae,oe);Ue.position.set(t.x-9.8/2+.65,.15+.65,t.z+3.4),x.add(Ue);const Ge=[14231064,1599700,2066488,15902298,9055202,16738740];for(let ye=0;ye<8;ye++){const Re=new m(new E(.06,.24,.28),new I({color:Ge[ye%Ge.length],roughness:.4}));Re.position.set(t.x-9.8/2+.68,.15+.85,t.z+2.3+ye*.3),Re.rotateZ(.2),x.add(Re)}const ln=new E(.75,1.95,.68),Oe=new I({color:1005876,roughness:.35}),Me=new m(ln,Oe);Me.position.set(t.x-9.8/2+.55,.15+.98,t.z-4.6),x.add(Me);const Xt=new m(new qt(.44,.32),new Gt({color:3728798}));Xt.rotateY(Math.PI/2),Xt.position.set(t.x-9.8/2+.94,.15+1.35,t.z-4.6),x.add(Xt),e.add({id:"konbini-famichiki",x:t.x-2,z:t.z-2.3,radius:1.8,prompt:"Buy Hot FamiChiki Fried Chicken [¥220]",onInteract:()=>{i.show("*Warm & Crispy!* You received piping hot FamiChiki in its tear-open paper pouch.")}}),e.add({id:"konbini-pay",x:t.x-1.8,z:t.z-3.6,radius:1.8,prompt:"Pay at Register with Suica / Cash [¥420]",onInteract:()=>{i.show('*Pii-rin!* "Arigatou gozaimashita!" Suica card accepted.')}});const he=new ve(16777215,2.8,18,1.1);he.position.set(t.x,3.2-.35,t.z);const se=new ve(16774634,2,9,1.2);se.position.set(t.x-2,3.2-.35,t.z-3.2);const ee=new ve(15792383,2,14,1.2);ee.position.set(t.x+1.8,3.2-.35,t.z),l?(l.register({x:t.x,y:3.2-.35,z:t.z,color:16777215,intensity:2.8,distance:18,decay:1.1,zone:"Konbini"}),l.register({x:t.x-2,y:3.2-.35,z:t.z-3.2,color:16774634,intensity:2,distance:9,decay:1.2,zone:"Konbini"}),l.register({x:t.x+1.8,y:3.2-.35,z:t.z,color:15792383,intensity:2,distance:14,decay:1.2,zone:"Konbini"})):(o.add(he),o.add(se),o.add(ee));for(let ye=-3.2;ye<=3.2;ye+=2.2){const Re=new Pt;Re.position.set(t.x,3.2-.08,t.z+ye);const te=new m(new E(4.2,.08,.35),Ft);Re.add(te);const Jt=new m(new E(4,.03,.08),ti);Jt.position.set(0,-.04,-.08);const T=new m(new E(4,.03,.08),ti);T.position.set(0,-.04,.08),Re.add(Jt,T),x.add(Re)}let pe=0,He=!1;return{light:he,update:(ye,Re)=>{const te=(Re.x-t.x)**2+(Re.z-t.z)**2;x.visible=Pn.isHigh()||te<784;const T=Math.hypot(Re.x-(t.x-9.8/2),Re.z-t.z)<2.8?1:0;T>.5&&!He?(a==null||a.playFamilyMartChime(),a==null||a.playSlidingDoorSound(),He=!0):T<.5&&(He=!1),pe+=(T-pe)*Math.min(1,ye*5),St.position.z=t.z+.6+pe*.7,vt.position.z=t.z-.6-pe*.7}}}function Mf(o,t,n,e,i){const l=new E(.95,.16,4.8),c=new I({color:15265008,roughness:.35,metalness:.4}),f=new m(l,c);f.position.set(t,n+.08,e),f.castShadow=!0,o.add(f);const d=new E(.04,1.55,4.8),h=new I({color:16777215,roughness:.4}),u=new m(d,h);u.position.set(t,n+1.55/2,e),o.add(u);const g=new I({color:883270,roughness:.35}),x=new E(.95+.04,1.55,.08),w=new m(x,g);w.position.set(t,n+1.55/2,e-4.8/2);const p=new m(x,g);p.position.set(t,n+1.55/2,e+4.8/2),o.add(w,p);const y=Cs("新発売 NEW","#ffaa00","#221100","RECOMMENDED",256,128),v=new m(new qt(.7,.35),y);v.position.set(t,n+1.55-.25,e-4.8/2-.05);const _=new m(new qt(.7,.35),y);_.position.set(t,n+1.55-.25,e+4.8/2+.05),_.rotateY(Math.PI),o.add(v,_);const P=new I({color:16119802,roughness:.3,metalness:.2}),R=new Gt({color:14231064}),A=new Gt({color:32972}),D=new I({color:14231064,roughness:.4}),M=new I({color:1599700,roughness:.4}),S=new I({color:14264358,roughness:.3,metalness:.4}),L=new I({color:2066488,roughness:.4}),k=new I({color:15887133,roughness:.4}),B=new I({color:1579032,roughness:.8}),j=new I({color:16316664,roughness:.5});for(let Z=0;Z<4;Z++){const H=n+.22+Z*.38;for(const Q of[-1,1]){const Y=new E(.42,.03,4.7),at=new m(Y,P);at.position.set(t+Q*.24,H,e),o.add(at);const ct=new E(.02,.04,4.8-.1),pt=new m(ct,Z%2===0?R:A);if(pt.position.set(t+Q*.45,H,e),o.add(pt),Z===3){const St=new W(.055,.042,.12,10),vt=14;for(let V=0;V<vt;V++){const G=e-2.4+.35+V*.3,q=V%3===0?D:V%3===1?M:S,nt=new m(St,q);nt.position.set(t+Q*.26,H+.075,G);const gt=new Sn(.057,10);gt.rotateX(-Math.PI/2);const At=new m(gt,j);At.position.set(t+Q*.26,H+.136,G),o.add(nt,At)}}else if(Z===2){const St=new E(.04,.16,.09),vt=16;for(let V=0;V<vt;V++){const G=e-2.4+.3+V*.26,q=V%4===0?D:V%4===1?L:V%4===2?k:M,nt=new m(St,q);nt.position.set(t+Q*.26,H+.095,G),o.add(nt)}}else if(Z===1){const St=new Ke(.055,.09,3),vt=new E(.22,.05,.16);for(let V=0;V<10;V++){const G=e-2.4+.4+V*.42;if(V%2===0){const q=new m(St,B);q.position.set(t+Q*.26,H+.06,G),o.add(q)}else{const q=new m(vt,B);q.position.set(t+Q*.26,H+.04,G);const nt=new m(new E(.18,.02,.12),j);nt.position.set(t+Q*.26,H+.066,G);const gt=new m(new E(.08,.025,.06),S);gt.position.set(t+Q*.26,H+.08,G),o.add(q,nt,gt)}}}else{const St=new W(.04,.04,.14,8);for(let vt=0;vt<14;vt++){const V=e-2.4+.35+vt*.3,G=vt%3===0?L:vt%3===1?M:S,q=new m(St,G);q.position.set(t+Q*.26,H+.08,V),o.add(q)}}}}i.add({minX:t-.95/2-.1,minY:n,minZ:e-4.8/2,maxX:t+.95/2+.1,maxY:n+1.55,maxZ:e+4.8/2})}function fx(o,t,n,e,i,s,r,a,l){const u=3.0500000000000003,g=.35,x=new Pt;x.name="ramen-interior-props",o.add(x);const w=new I({map:Rg(),roughness:.45,metalness:.08}),p=new E(5.8,.05,7.4),y=new m(p,w);y.position.set(t.x,.15+.025,t.z),y.receiveShadow=!0,o.add(y);const v=new I({color:2364940,roughness:.7}),_=new E(5.8,.2,7.4),P=new m(_,v);P.position.set(t.x,3.2-.1,t.z),o.add(P);const R=new I({color:4006932,roughness:.6});for(const rt of[-1.8,0,1.8]){const yt=new m(new E(5.8,.16,.18),R);yt.position.set(t.x,3.2-.16,t.z+rt),o.add(yt)}const A=new I({map:Ag(),roughness:.6,metalness:.02}),D=new E(5.8,u,g),M=new m(D,A);M.position.set(t.x,.15+u/2,t.z+7.4/2-g/2),o.add(M),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z+7.4/2-g,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const S=new E(g,u,7.4),L=new m(S,A);L.position.set(t.x-5.8/2+g/2,.15+u/2,t.z),o.add(L),n.add({minX:t.x-t.w/2-1,minY:0,minZ:t.z-7.4/2,maxX:t.x-5.8/2+g,maxY:3.2,maxZ:t.z+7.4/2});const k=new E(g,u,7.4),B=new m(k,A);B.position.set(t.x+5.8/2-g/2,.15+u/2,t.z),o.add(B),n.add({minX:t.x+5.8/2-g,minY:0,minZ:t.z-7.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+7.4/2});const j=2,Z=(5.8-j)/2,H=new I({color:1840915,roughness:.85}),Q=new E(Z,u,g),Y=new m(Q,H);Y.position.set(t.x-5.8/2+Z/2,.15+u/2,t.z-7.4/2+g/2),o.add(Y),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z-7.4/2,maxX:t.x-j/2,maxY:3.2,maxZ:t.z-7.4/2+g});const at=new E(Z,u,g),ct=new m(at,H);ct.position.set(t.x+5.8/2-Z/2,.15+u/2,t.z-7.4/2+g/2),o.add(ct),n.add({minX:t.x+j/2,minY:0,minZ:t.z-7.4/2,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z-7.4/2+g});const pt=new m(new E(j,.45,g),r);pt.position.set(t.x,3.2-.225,t.z-7.4/2+g/2),o.add(pt);const St=4.8,vt=.65,V=new E(St,.08,vt),G=new I({color:2237997,roughness:.5,metalness:.2}),q=new m(V,G);q.rotateX(.18),q.position.set(t.x,3.2+.05,t.z-7.4/2-.25),o.add(q);for(const rt of[-1.9,-.6,.6,1.9]){const yt=new m(new E(.08,.22,.35),R);yt.position.set(t.x+rt,3.2-.12,t.z-7.4/2-.15),o.add(yt)}const nt=new I({map:Sg(),roughness:.4,metalness:.05}),gt=new m(new E(4.4,.82,.1),nt);gt.position.set(t.x,3.2-.45,t.z-7.4/2-.08),o.add(gt);for(const rt of[-1.3,1.3]){const yt=new m(new W(.012,.012,.25,8),Ft);yt.rotateX(Math.PI/4),yt.position.set(t.x+rt,3.2-.05,t.z-7.4/2-.18);const jt=new m(new Ke(.06,.08,10),Ft);jt.rotateX(-Math.PI/3),jt.position.set(t.x+rt,3.2-.12,t.z-7.4/2-.26),o.add(yt,jt);const ne=new ve(16775904,1.2,2.5);ne.position.set(t.x+rt,3.2-.16,t.z-7.4/2-.25),l?l.register({x:t.x+rt,y:3.2-.16,z:t.z-7.4/2-.25,color:16775904,intensity:1.2,distance:2.5,zone:"Street"}):o.add(ne)}const At=3.2-1.25,ut=t.z-7.4/2-.38,Ut=(rt,yt)=>{const jt=new Pt;jt.position.set(rt,At,ut);const ne=new m(new W(.014,.014,.38,8),Fe);ne.rotateX(Math.PI/2),ne.position.set(0,.38,.18);const Se=new m(new $e(.025,.006,6,12),Fe);Se.position.set(0,.38,0),jt.add(ne,Se);const ce=new m(new W(.005,.005,.14,6),Ft);ce.position.set(0,.31,0),jt.add(ce);const Nt=new m(new W(.12,.16,.05,16),Fe);Nt.position.set(0,.22,0),jt.add(Nt);const Ve=new I({map:bg(yt),roughness:.5,metalness:.05,emissive:new we(14165528),emissiveIntensity:.35}),_e=new W(.18,.18,.44,16),Je=new m(_e,Ve);jt.add(Je);const bn=new m(new W(.16,.12,.05,16),Fe);bn.position.set(0,-.22,0),jt.add(bn);const ke=new ve(16733474,1.4,4.2);return ke.position.set(0,0,0),l?l.register({x:rt,y:At,z:ut,color:16733474,intensity:1.4,distance:4.2,zone:"Street"}):jt.add(ke),jt},It=Ut(t.x-1.45,"らーめん"),$t=Ut(t.x+1.45,"味自慢");o.add(It,$t);const U=new W(.016,.016,j+.15,8);U.rotateZ(Math.PI/2);const Ht=new m(U,R);Ht.position.set(t.x,3.2-.72,t.z-7.4/2-.06),o.add(Ht);const Et=new I({map:Tg(),roughness:.85,side:pn}),Ot=new m(new qt(j*.96,.72),Et);Ot.position.set(t.x,3.2-1.1,t.z-7.4/2-.07),o.add(Ot);const Lt=.68,Kt=1.62,Tt=.52,C=t.x-1.78,b=t.z-7.4/2-.28,X=new m(new E(Lt,Kt,Tt),new I({color:14210252,roughness:.4,metalness:.2}));X.position.set(C,.15+Kt/2,b),o.add(X);const it=new I({map:Eg(),roughness:.35,metalness:.1}),ot=new m(new qt(Lt*.95,Kt*.95),it);ot.position.set(C,.15+Kt/2,b-Tt/2-.005),ot.rotateY(Math.PI),o.add(ot),n.add({minX:C-Lt/2-.05,minY:0,minZ:b-Tt/2,maxX:C+Lt/2+.05,maxY:Kt,maxZ:b+Tt/2+.1}),e.add({id:"ramen-kenbaiki",x:C,z:b-.6,radius:1.8,prompt:"Buy Ramen Ticket at Kenbaiki [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),i.show("*Chink! Zzzzt!* Purchased [Special Tonkotsu Ramen ¥980]. Step inside and hand your ticket to Master at the counter!")}});const et=4.2,mt=.98,xt=.72,ft=t.x,Rt=t.z+.1,lt=new E(et,mt,xt),Mt=new I({color:2825234,roughness:.6}),Zt=new m(lt,Mt);Zt.position.set(ft,.15+mt/2,Rt),x.add(Zt);const ie=new E(et+.12,.06,xt+.08),Dt=new I({color:11367746,roughness:.28,metalness:.05}),Qt=new m(ie,Dt);Qt.position.set(ft,.15+mt+.03,Rt),x.add(Qt);const Bt=new E(et+.12,.18,.24),fe=new I({color:9065514,roughness:.35}),z=new m(Bt,fe);z.position.set(ft,.15+mt+.12,Rt+xt/2-.12),x.add(z);const bt=new I({color:1579036,roughness:.5}),J=new I({color:4006932,roughness:.5});for(let rt=0;rt<4;rt++){const yt=t.x-1.5+rt*1,jt=Rt-xt/2-.38,ne=new m(new W(.18,.18,.03,12),Ft);ne.position.set(yt,.15+.015,jt);const Se=new m(new W(.025,.025,.48,8),J);Se.position.set(yt,.15+.255,jt);const ce=new m(new $e(.12,.01,6,12),Ft);ce.rotateX(Math.PI/2),ce.position.set(yt,.15+.18,jt);const Nt=new m(new W(.19,.19,.08,14),bt);Nt.position.set(yt,.15+.53,jt),x.add(ne,Se,ce,Nt)}const st=.28,_t=.14,wt=t.x-.5,Vt=Rt-.08,le=.15+mt+.06,Ae=new m(new W(st/2,st*.28,_t,16,1,!0),new I({color:1579032,roughness:.15,side:pn}));Ae.position.set(wt,le+_t/2,Vt),x.add(Ae);const oe=new m(new Sn(st*.46,16),new I({color:13934677,roughness:.25}));oe.rotateX(-Math.PI/2),oe.position.set(wt,le+_t-.015,Vt),x.add(oe);const Ue=new m(new $e(.065,.012,6,12),new I({color:16109665,roughness:.6}));Ue.rotateX(Math.PI/2),Ue.position.set(wt+.02,le+_t-.008,Vt),x.add(Ue);for(let rt=0;rt<2;rt++){const yt=new m(new W(.038,.038,.01,10),new I({color:10176037,roughness:.7}));yt.position.set(wt-.04+rt*.05,le+_t,Vt-.03+rt*.04),x.add(yt)}const Ge=new m(new W(.03,.03,.01,10),new I({color:16514038,roughness:.5}));Ge.position.set(wt+.05,le+_t,Vt-.04);const ln=new m(new W(.018,.018,.012,8),new I({color:16753920,roughness:.3}));ln.position.set(wt+.05,le+_t+.002,Vt-.04),x.add(Ge,ln);const Oe=new m(new qt(.065,.09),new I({color:1316884,roughness:.9,side:pn}));Oe.rotateY(-.3),Oe.position.set(wt-.07,le+_t+.04,Vt-.05),x.add(Oe);const Me=new m(new W(.025,.025,.008,8),new I({color:2263842,roughness:.8}));Me.position.set(wt,le+_t+.002,Vt+.04),x.add(Me);const Xt=[];for(let rt=0;rt<4;rt++){const yt=new m(new qt(.22,.22),vf);yt.position.set(wt+(Math.random()-.5)*.08,le+.12+rt*.16,Vt),x.add(yt),Xt.push(yt)}const he=new W(.035,.035,.12,10),se=new m(he,new I({color:1119773,roughness:.2,metalness:.1}));se.position.set(t.x+.9,le+.06,Rt);const ee=new m(he,new I({color:12853266,roughness:.3}));ee.position.set(t.x+1.05,le+.06,Rt);const pe=new m(new W(.025,.025,.09,8),Ft);pe.position.set(t.x+1.18,le+.045,Rt),x.add(se,ee,pe);const He=new m(new E(.12,.18,.14),new I({color:5911582,roughness:.6}));He.position.set(t.x+1.4,le+.09,Rt);const cn=new m(new E(.08,.08,.1),new I({color:16119278,roughness:.8}));cn.position.set(t.x+1.4,le+.2,Rt),x.add(He,cn);const ye=new m(new W(.06,.07,.22,10),new I({color:14213352,roughness:.2,metalness:.8}));ye.position.set(t.x-1.4,le+.11,Rt);const Re=new m(new W(.032,.028,.09,8),We);Re.position.set(t.x-1.22,le+.045,Rt),x.add(ye,Re);const te=t.z+1.7,Jt=4.2,T=.92,F=new m(new E(Jt,T,.85),new I({color:9081500,roughness:.35,metalness:.75}));F.position.set(t.x,.15+T/2,te),x.add(F);const $=new m(new E(Jt*.9,.45,.95),new I({color:7239298,roughness:.3,metalness:.8}));$.position.set(t.x,3.2-.45,te),x.add($);const K=new ve(16773341,2.2,5.5);K.position.set(t.x,3.2-.65,te),l?l.register({x:t.x,y:3.2-.65,z:te,color:16773341,intensity:2.2,distance:5.5,zone:"Ramen"}):x.add(K);const O=new W(.24,.24,.48,14);for(let rt=0;rt<2;rt++){const yt=t.x-.9+rt*.58,jt=new m(O,Ft);jt.position.set(yt,.15+T+.24,te-.05);const ne=new m(new Sn(.22,12),new I({color:13143874,roughness:.4}));ne.rotateX(-Math.PI/2),ne.position.set(yt,.15+T+.46,te-.05);const Se=new m(new $e(.04,.008,4,8),Ft);Se.position.set(yt-.25,.15+T+.4,te-.05);const ce=new m(new $e(.04,.008,4,8),Ft);ce.position.set(yt+.25,.15+T+.4,te-.05),x.add(jt,ne,Se,ce);for(let Nt=0;Nt<3;Nt++){const Ve=new m(new qt(.35,.35),vf);Ve.position.set(yt+(Math.random()-.5)*.1,.15+T+.55+Nt*.25,te-.05),x.add(Ve),Xt.push(Ve)}}const dt=new E(.55,.35,.48),Ct=new m(dt,Ft);Ct.position.set(t.x+.7,.15+T+.18,te-.05),x.add(Ct);for(let rt=0;rt<2;rt++){const yt=new m(new W(.012,.012,.24,6),new I({color:5911582}));yt.rotateX(.3),yt.position.set(t.x+.6+rt*.18,.15+T+.42,te-.2),x.add(yt)}for(let rt=0;rt<4;rt++){const yt=new m(new W(.14,.08,.08,12,1,!0),new I({color:rt%2===0?14165528:16316664,roughness:.2}));yt.position.set(t.x+1.5,.15+T+.04+rt*.05,te),x.add(yt)}["特製豚骨 ¥980","チャーシュー麺 ¥1100","濃厚魚介味噌 ¥950","辛味噌らーめん ¥920","替玉(一玉) ¥150","博多一口餃子 ¥380"].forEach((rt,yt)=>{const jt=Cs(rt,"#e2caa0","#1c1208",void 0,256,64),ne=new m(new qt(.38,.85),jt);ne.position.set(t.x-1.6+yt*.64,.15+2.05,t.z+7.4/2-g-.02),x.add(ne)}),n.add({minX:ft-et/2-.1,minY:0,minZ:Rt-xt/2,maxX:ft+et/2+.1,maxY:1.5,maxZ:t.z+7.4/2}),e.add({id:"ramen-counter",x:t.x-.5,z:Rt-.8,radius:1.8,prompt:"Sit at Ramen Bar & Order Special Chashu Tonkotsu [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),i.show('"Hai, irasshai!" Master presents a steaming bowl of rich garlic tonkotsu ramen with tender chashu, soft-boiled ajitama, and wavy handmade noodles. It smells incredible!')}});for(const rt of[-1,1]){const yt=new m(new W(.004,.004,.75,6),Fe);yt.position.set(t.x+rt,3.2-.45,Rt);const jt=new m(new Ke(.18,.14,12,1,!0),new I({color:1582106,roughness:.4}));jt.position.set(t.x+rt,3.2-.82,Rt),x.add(yt,jt);const ne=new ve(16753988,1.8,6.5,1.2);ne.position.set(t.x+rt,3.2-.9,Rt),l?l.register({x:t.x+rt,y:3.2-.9,z:Rt,color:16753988,intensity:1.8,distance:6.5,decay:1.2,zone:"Ramen"}):x.add(ne)}const kt=new ve(16750916,2.2,14,1.1);kt.position.set(t.x,3.2-.35,t.z),l?l.register({x:t.x,y:3.2-.35,z:t.z,color:16750916,intensity:2.2,distance:14,decay:1.1,zone:"Ramen"}):o.add(kt);let re=0;return{light:kt,update:(rt,yt)=>{const jt=(yt.x-t.x)**2+(yt.z-t.z)**2;x.visible=Pn.isHigh()||jt<784,re+=rt;const ne=Math.sin(re*2)*.05;It.rotation.z=ne,$t.rotation.z=-ne,x.visible&&Xt.forEach((Se,ce)=>{const Nt=(re*.55+ce*.18)%1;Se.position.y+=rt*.25,Se.scale.setScalar(.75+Nt*.85),Se.rotation.z+=rt*.15})}}}function To(o){const t=new Pt,n=.92,e=.5,i=.16,s=new W(.012,.012,n,6),r=o==="izakaya"||o==="cafe"||o==="bookstore"?new I({color:4007706,roughness:.7}):Fe;for(const _ of[-1,1]){const P=_*e/2,R=new m(s,r);R.position.set(P,n/2,.07),R.rotation.x=-i,t.add(R);const A=new m(s,r);A.position.set(P,n/2,-.07),A.rotation.x=i,t.add(A)}const a=new W(.012,.012,e+.04,6);a.rotateZ(Math.PI/2);const l=new m(a,Ft);l.position.set(0,n-.02,0),t.add(l);const c=new W(.008,.008,e,6);c.rotateZ(Math.PI/2);const f=new m(c,Ft);f.position.set(0,.15,0),t.add(f);const d=new I({color:o==="dental"||o==="cleaners"?2381982:3818062,roughness:.55}),h=new E(e*.78,.09,.2),u=new m(h,d);u.position.set(0,.16,0),t.add(u);const g=new W(.02,.02,.02,8),x=new m(g,Ft);x.position.set(.12,.21,0),t.add(x);const w=new Gt({map:Gg(o),toneMapped:!1}),p=new qt(e-.04,.68),y=new m(p,w);y.position.set(0,.46,.075),y.rotation.x=-i,t.add(y);const v=new m(p,w);return v.position.set(0,.46,-.075),v.rotation.x=i,v.rotation.y=Math.PI,t.add(v),t}function hs(){const o=new Pt,t=.38,n=.55,e=.22,i=new E(t,n,e),s=new I({color:9082016,metalness:.85,roughness:.25,wireframe:!0}),r=new m(i,s);r.position.set(0,n/2,0),o.add(r);const a=new I({color:2237997,roughness:.6,metalness:.4}),l=new m(new E(t+.02,.04,e+.02),a);l.position.set(0,.02,0),o.add(l);const c=new I({color:14544632,roughness:.15,transparent:!0,opacity:.6}),f=new I({color:1711136,roughness:.3});return[{x:-.1,z:-.04,rx:.06,rz:-.08},{x:.08,z:.03,rx:-.05,rz:.09},{x:-.02,z:.05,rx:.08,rz:.04}].forEach(h=>{const u=new Pt;u.position.set(h.x,.1,h.z),u.rotation.x=h.rx,u.rotation.z=h.rz;const g=new m(new W(.006,.006,.72,6),Ft);g.position.set(0,.36,0);const x=new m(new Ke(.032,.48,8),c);x.position.set(0,.28,0);const w=new m(new $e(.032,.009,6,12,Math.PI),f);w.position.set(.032,.72,0),w.rotation.z=Math.PI/2,u.add(g,x,w),o.add(u)}),o}function dx(){const o=new Pt,t=new I({color:4336925,roughness:.75}),n=new m(new E(.56,.04,.46),t);n.position.set(0,.2,0),o.add(n);for(const d of[-.22,.22])for(const h of[-.18,.18]){const u=new m(new E(.05,.2,.05),t);u.position.set(d,.1,h),o.add(u)}const e=new I({color:12886895,roughness:.88}),i=new W(.24,.24,.48,16),s=new m(i,e);s.position.set(0,.46,0),o.add(s);const r=new I({color:5913892,roughness:.8});for(const d of[.32,.6]){const h=new m(new $e(.245,.014,6,16),r);h.position.set(0,d,0),h.rotation.x=Math.PI/2,o.add(h)}const a=new I({color:16777215,roughness:.5}),l=new m(new Sn(.12,16),a);l.position.set(0,.46,.245),o.add(l);const c=new Gt({color:13379869,toneMapped:!1}),f=new m(new qt(.07,.07),c);return f.position.set(0,.46,.248),o.add(f),o}function Sf(o,t=!1){const n=new Pt,e=new W(.012,.012,.44,6);e.rotateX(Math.PI/2);const i=new m(e,Fe);i.position.set(0,.35,.22);const s=new m(e,Fe);s.position.set(0,-.35,.22),n.add(i,s);const r=.12,a=.88,l=.42,c=new I({color:2238512,roughness:.4,metalness:.6}),f=new m(new E(r,a,l),c);f.position.set(0,0,.42),n.add(f);const d=new Gt({color:o==="dental"?14218746:14220014,toneMapped:!1}),h=new qt(l-.04,a-.04);for(const u of[-1,1]){const g=new m(h,d);if(g.position.set(u*(r/2+.005),0,.42),g.rotation.y=u*Math.PI/2,n.add(g),o==="pharmacy"){const x=new Gt({color:43115,toneMapped:!1}),w=new m(new qt(.07,.24),x);w.position.set(u*(r/2+.008),.08,.42),w.rotation.y=u*Math.PI/2;const p=new m(new qt(.24,.07),x);p.position.set(u*(r/2+.008),.08,.42),p.rotation.y=u*Math.PI/2,n.add(w,p)}else{const x=new Gt({color:2062988,toneMapped:!1}),w=new m(new Sn(.12,16),x);w.position.set(u*(r/2+.008),.08,.42),w.rotation.y=u*Math.PI/2,n.add(w)}}if(!t){const u=new ve(o==="dental"?10217717:9369039,.8,3.5);u.position.set(0,0,.45),n.add(u)}return n}function hx(){const o=new Pt,t=.82,n=.85,e=.48,i=new I({color:4014922,roughness:.5,metalness:.6}),s=new m(new E(t,n-.12,e),i);s.position.set(0,n/2,0),o.add(s);const r=new W(.04,.04,.02,8);r.rotateZ(Math.PI/2);for(const f of[-.34,.34])for(const d of[-.18,.18]){const h=new m(r,Fe);h.position.set(f,.04,d),o.add(h)}const a=[10365483,2381982,1996869,14251812,5976714,1975344];for(let f=-.32;f<.34;f+=.075){const d=a[Math.floor(Math.random()*a.length)],h=new I({color:d,roughness:.7}),u=new m(new E(.065,.18,.36),h);u.position.set(f,n+.08,0),u.rotation.y=(Math.random()-.5)*.15,o.add(u)}const l=new Gt({color:16765243,toneMapped:!1}),c=new m(new qt(.32,.14),l);return c.position.set(0,n-.08,e/2+.01),o.add(c),o}function ux(o,t,n,e,i,s,r){const l=t.w/2,c=t.d/2,f=t.front==="s"||t.front==="n"?t.w:t.d,d=new Pt;let h=0,u=t.x,g=t.z;t.front==="s"?(h=Math.PI,u=t.x,g=t.z-c):t.front==="n"?(h=0,u=t.x,g=t.z+c):t.front==="w"?(h=-Math.PI/2,u=t.x-l,g=t.z):t.front==="e"&&(h=Math.PI/2,u=t.x+l,g=t.z),d.position.set(u,0,g),d.rotation.y=h,o.add(d);function x(Z,H){return t.front==="s"?{x:t.x-Z,z:t.z-c-H}:t.front==="n"?{x:t.x+Z,z:t.z+c+H}:t.front==="w"?{x:t.x-l-H,z:t.z-Z}:{x:t.x+l+H,z:t.z+Z}}let w="residential";t.id==="b-se-mansion"?w="dental":t.id==="b-nw-mansion"?w="cleaners":t.id==="b-sw-commercial"?w="izakaya":t.id==="b-ne-apartments"?w="pharmacy":t.id==="b-fe-north"?w="bookstore":t.id==="b-cafe"&&(w="cafe");const p=new I({color:1975340,roughness:.35,metalness:.7});if(w==="dental"){const H=new I({color:14542571,roughness:.45,metalness:.1}),Q=new m(new E(10.8+.4,3.2,.08),H);Q.position.set(0,3.2/2,-.02),d.add(Q);const Y=5.6,at=2.25,ct=-2,pt=new Gt({map:Cg(),toneMapped:!1}),St=new m(new qt(Y,at),pt);St.position.set(ct,1.25,.04),d.add(St);const vt=new m(new E(Y+.1,.06,.08),p);vt.position.set(ct,1.25+at/2,.05);const V=new m(new E(Y+.1,.12,.08),p);V.position.set(ct,.06,.05),d.add(vt,V);for(const ft of[-Y/6,Y/6]){const Rt=new m(new E(.04,at,.06),p);Rt.position.set(ct+ft,1.25,.05),d.add(Rt)}const G=2.4,q=2.4,nt=new m(new E(G+.16,2.3,.12),p);nt.position.set(q,1.2,.02),d.add(nt);const gt=new E(G*.48,2.18,.04),At=new m(gt,We);At.position.set(q-G*.24,1.18,.03);const ut=new m(gt,We);ut.position.set(q+G*.24,1.18,.05),d.add(At,ut);const Ut=new m(new E(.04,.18,.02),Ft);Ut.position.set(q-.06,1.15,.07),d.add(Ut);const It=new E(G+.6,.06,.9),$t=new m(It,Ft);if($t.position.set(q,2.45,.45),d.add($t),r){const ft=x(q,.45);r.register({x:ft.x,y:2.38,z:ft.z,color:15924223,intensity:1.4,distance:4,decay:1.2,zone:"Street"})}else{const ft=new ve(15924223,1.4,4,1.2);ft.position.set(q,2.38,.45),d.add(ft)}const U=new I({color:1914429,roughness:.95}),Ht=new m(new E(G*.9,.02,.95),U);Ht.position.set(q,.012,.55),d.add(Ht);const Et=7.6,Ot=.82,Lt=new Gt({map:Pg(),toneMapped:!1}),Kt=new m(new E(Et,Ot,.15),Lt);Kt.position.set(0,2.76,.12),d.add(Kt);const Tt=new m(new E(Et+.12,Ot+.1,.18),p);Tt.position.set(0,2.76,.1),d.add(Tt);for(const ft of[-2.4,2.4]){const Rt=new m(new W(.012,.012,.35,6),Ft);Rt.rotation.x=Math.PI/3,Rt.position.set(ft,3.22,.25);const lt=new m(new E(.18,.08,.12),Ft);lt.position.set(ft,3.28,.38),d.add(Rt,lt)}if(r){const ft=x(0,.5);r.register({x:ft.x,y:3.15,z:ft.z,color:14481146,intensity:1.9,distance:7.5,decay:1.2,zone:"Street"})}else{const ft=new ve(14481146,1.9,7.5,1.2);ft.position.set(0,3.15,.5),d.add(ft)}const C=Sf("dental",!!r);C.position.set(10.8/2+.1,2.4,.25),d.add(C);const b=To("dental");b.position.set(-3.8,0,.85),b.rotation.y=.14,d.add(b);const X=hs();X.position.set(q+G/2+.35,0,.35),d.add(X);const it=new I({color:15724006,roughness:.5}),ot=new m(new W(.18,.14,.45,12),it);ot.position.set(.9,.225,.35);const et=new I({color:2250032,roughness:.6}),mt=new m(new Ee(.24,10,10),et);mt.position.set(.9,.55,.35),d.add(ot,mt);const xt=x(q,1.1);e.add({id:"sf-dental-clinic",x:xt.x,z:xt.z,radius:2.2,prompt:"Inspect Dental Clinic & Reception",onInteract:()=>{s&&s.playDeskBellSound(),i.show("パークサイド歯科: 『本日は予約優先制となっております。歯のクリーニング、定期検診、急患の診療は随時受付中（TEL 03-3456-7890）』")}});return}if(w==="cleaners"){const H=new I({color:1917824,roughness:.85}),Q=new E(10.8*.92,.08,1.25);Q.rotateX(.18);const Y=new m(Q,H);Y.position.set(0,2.45,.6);const at=new m(new E(10.8*.92,.22,.03),H);at.position.set(0,2.24,1.18),d.add(Y,at);const ct=5.6,pt=2.25,St=-2,vt=new Gt({map:Ig(),toneMapped:!1}),V=new m(new qt(ct,pt),vt);V.position.set(St,1.25,.04),d.add(V);const G=2.4,q=2.4,nt=new m(new E(G+.16,2.3,.12),p);nt.position.set(q,1.2,.02),d.add(nt);const gt=new E(G*.48,2.18,.04),At=new m(gt,We);At.position.set(q-G*.24,1.18,.03);const ut=new m(gt,We);ut.position.set(q+G*.24,1.18,.05),d.add(At,ut);const Ut=new I({color:1519967,roughness:.95}),It=new m(new E(G*.9,.02,.95),Ut);It.position.set(q,.012,.55),d.add(It);const $t=7.6,U=.82,Ht=new Gt({map:Lg(),toneMapped:!1}),Et=new m(new E($t,U,.15),Ht);if(Et.position.set(0,2.78,.12),d.add(Et),r){const Tt=x(0,.6);r.register({x:Tt.x,y:3.15,z:Tt.z,color:15266559,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const Tt=new ve(15266559,2,7.5,1.2);Tt.position.set(0,3.15,.6),d.add(Tt)}const Ot=To("cleaners");Ot.position.set(-3.8,0,.85),Ot.rotation.y=-.12,d.add(Ot);const Lt=hs();Lt.position.set(q+G/2+.35,0,.35),d.add(Lt);const Kt=x(q,1.1);e.add({id:"sf-dry-cleaners",x:Kt.x,z:Kt.z,radius:2.2,prompt:"Check Dry Cleaners Rates",onInteract:()=>{s&&s.playDeskBellSound(),i.show("白金クリーニング: 『朝10時までのお預かりで夕方5時お渡し！ワイシャツ立体仕上 ¥220、スーツ上下 ¥1,280。24Hコインランドリーも併設稼働中です！』")}});return}if(w==="izakaya"){const H=new I({color:2234900,roughness:.9}),Q=new m(new E(9.2+.3,3.2,.08),H);Q.position.set(0,3.2/2,-.02),d.add(Q);const Y=new E(9.2*.96,.12,1.2);Y.rotateX(.2);const at=new m(Y,new I({color:2040617,roughness:.6}));at.position.set(0,2.5,.6),d.add(at);const ct=5.2,pt=2.25,St=-1.6,vt=new Gt({map:Dg(),toneMapped:!1}),V=new m(new qt(ct,pt),vt);V.position.set(St,1.25,.04),d.add(V);const G=2,q=2.4,nt=new m(new E(G+.12,2.2,.1),H);nt.position.set(q,1.15,.02),d.add(nt);const gt=new E(G*.95,.55,.03),At=new I({color:1582139,roughness:.85}),ut=new m(gt,At);ut.position.set(q,2.05,.09),d.add(ut);const Ut=new I({color:4014664,roughness:.8}),It=new m(new E(G*1.1,.04,.8),Ut);It.position.set(q,.02,.45),d.add(It);const $t=dx();$t.position.set(-3.4,0,.55),d.add($t);const U=new Pt;U.position.set(1.1,2.3,.5);const Ht=new m(new W(.008,.008,.48,6),Fe);Ht.rotation.x=Math.PI/2,Ht.position.set(0,.15,-.24),U.add(Ht);const Et=new Gt({color:14235689,toneMapped:!1}),Ot=new m(new W(.16,.16,.38,12),Et),Lt=new m(new W(.12,.16,.04,12),Fe);Lt.position.set(0,.2,0);const Kt=new m(new W(.16,.12,.04,12),Fe);if(Kt.position.set(0,-.2,0),Ot.add(Lt,Kt),U.add(Ot),r){const mt=x(1.1,.5);r.register({x:mt.x,y:2.3,z:mt.z,color:16742178,intensity:1.8,distance:5,decay:1.2,zone:"Street"})}else{const mt=new ve(16742178,1.8,5,1.2);mt.position.set(0,0,0),U.add(mt)}d.add(U);const Tt=6.8,C=.82,b=new Gt({map:Ug(),toneMapped:!1}),X=new m(new E(Tt,C,.15),b);if(X.position.set(0,2.82,.12),d.add(X),r){const mt=x(0,.55);r.register({x:mt.x,y:3.1,z:mt.z,color:16750899,intensity:2.2,distance:8,decay:1.2,zone:"Street"})}else{const mt=new ve(16750899,2.2,8,1.2);mt.position.set(0,3.1,.55),d.add(mt)}const it=To("izakaya");it.position.set(3.4,0,.85),it.rotation.y=.15,d.add(it);const ot=x(q,1.1);e.add({id:"sf-izakaya",x:ot.x,z:ot.z,radius:2.2,prompt:"Look at Izakaya Specials",onInteract:()=>{s&&s.playDeskBellSound(),i.show("和食・酒処 魚河岸: 『いらっしゃい！今夜のイチオシは豊洲直送の刺身三種盛り(¥980)と、じっくり煮込んだ特製もつ煮込み(¥480)だよ！晩酌セットも大人気！』")}});let et=0;return{update(mt){et+=mt,Ot.rotation.z=Math.sin(et*2.2)*.06,Ot.rotation.x=Math.cos(et*1.8)*.04}}}if(w==="pharmacy"){const H=new I({color:14151399,roughness:.45,metalness:.1}),Q=new m(new E(8.8+.3,3.2,.08),H);Q.position.set(0,3.2/2,-.02),d.add(Q);const Y=4.8,at=2.25,ct=-1.6,pt=new Gt({map:Ng(),toneMapped:!1}),St=new m(new qt(Y,at),pt);St.position.set(ct,1.25,.04),d.add(St);const vt=2.2,V=2.2,G=new m(new E(vt+.16,2.3,.12),p);G.position.set(V,1.2,.02),d.add(G);const q=new E(vt*.48,2.18,.04),nt=new m(q,We);nt.position.set(V-vt*.24,1.18,.03);const gt=new m(q,We);gt.position.set(V+vt*.24,1.18,.05),d.add(nt,gt);const At=new I({color:1331780,roughness:.95}),ut=new m(new E(vt*.9,.02,.95),At);ut.position.set(V,.012,.55),d.add(ut);const Ut=6.6,It=.82,$t=new Gt({map:zg(),toneMapped:!1}),U=new m(new E(Ut,It,.15),$t);U.position.set(0,2.76,.12),d.add(U);const Ht=Sf("pharmacy",!!r);if(Ht.position.set(8.8/2+.1,2.4,.25),d.add(Ht),r){const Kt=x(0,.5);r.register({x:Kt.x,y:3.15,z:Kt.z,color:14350576,intensity:1.9,distance:7,decay:1.1,zone:"Street"})}else{const Kt=new ve(14350576,1.9,7,1.1);Kt.position.set(0,3.15,.5),d.add(Kt)}const Et=To("pharmacy");Et.position.set(-3.2,0,.85),Et.rotation.y=.12,d.add(Et);const Ot=hs();Ot.position.set(V+vt/2+.35,0,.35),d.add(Ot);const Lt=x(V,1.1);e.add({id:"sf-pharmacy",x:Lt.x,z:Lt.z,radius:2.2,prompt:"Consult Pharmacy Counter",onInteract:()=>{s&&s.playDeskBellSound(),i.show("森クリニック・森薬局: 『全国どちらの医療機関の処方せんも受け付けております。お薬の相談、在宅医療、各種健康診断もお気軽にどうぞ。』")}});return}if(w==="bookstore"){const H=new I({color:3875350,roughness:.65}),Q=new m(new E(9.8+.3,3.2,.08),H);Q.position.set(0,3.2/2,-.02),d.add(Q);const Y=5.4,at=2.25,ct=-1.8,pt=new Gt({map:Fg(),toneMapped:!1}),St=new m(new qt(Y,at),pt);St.position.set(ct,1.25,.04),d.add(St);const vt=2.2,V=2.2,G=new m(new E(vt+.16,2.3,.12),p);G.position.set(V,1.2,.02),d.add(G);const q=new E(vt*.48,2.18,.04),nt=new m(q,We);nt.position.set(V-vt*.24,1.18,.03);const gt=new m(q,We);gt.position.set(V+vt*.24,1.18,.05),d.add(nt,gt);const At=7,ut=.82,Ut=new Gt({map:Og(),toneMapped:!1}),It=new m(new E(At,ut,.15),Ut);if(It.position.set(0,2.76,.12),d.add(It),r){const Ot=x(0,.5);r.register({x:Ot.x,y:3.15,z:Ot.z,color:16770756,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const Ot=new ve(16770756,2,7.5,1.2);Ot.position.set(0,3.15,.5),d.add(Ot)}const $t=hx();$t.position.set(-3.2,0,.65),d.add($t);const U=To("bookstore");U.position.set(3.4,0,.85),U.rotation.y=-.15,d.add(U);const Ht=hs();Ht.position.set(1,0,.35),d.add(Ht);const Et=x(V,1.1);e.add({id:"sf-bookstore",x:Et.x,z:Et.z,radius:2.2,prompt:"Browse Bookstore Display",onInteract:()=>{s&&s.playDeskBellSound(),i.show("東書店: 『話題の直木賞・芥川賞受賞作、今週発売のジャンプ系コミックス最新巻が平積みされています！図書カードNEXT取扱店です。』")}});return}if(w==="cafe"){const H=new I({color:2759186,roughness:.7}),Q=new m(new E(8.2+.3,3.2,.08),H);Q.position.set(0,3.2/2,-.02),d.add(Q);const Y=new I({color:3547155,roughness:.85}),at=new E(8.2*.92,.08,1.15);at.rotateX(.18);const ct=new m(at,Y);ct.position.set(0,2.45,.55),d.add(ct);const pt=4.6,St=2.25,vt=-1.4,V=new Gt({map:kg(),toneMapped:!1}),G=new m(new qt(pt,St),V);G.position.set(vt,1.25,.04),d.add(G);const q=2,nt=2,gt=new m(new E(q+.14,2.25,.12),H);gt.position.set(nt,1.18,.02),d.add(gt);const At=new m(new E(q*.9,2.15,.04),We);At.position.set(nt,1.18,.04),d.add(At);const ut=new I({color:13936723,metalness:.85,roughness:.25}),Ut=new m(new W(.015,.015,.7,8),ut);Ut.rotation.z=Math.PI/2,Ut.position.set(nt,1.15,.08),d.add(Ut);const It=6.2,$t=.82,U=new Gt({map:Bg(),toneMapped:!1}),Ht=new m(new E(It,$t,.15),U);if(Ht.position.set(0,2.76,.12),d.add(Ht),r){const Tt=x(0,.5);r.register({x:Tt.x,y:3.15,z:Tt.z,color:16755268,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const Tt=new ve(16755268,2,7.5,1.2);Tt.position.set(0,3.15,.5),d.add(Tt)}const Et=To("cafe");Et.position.set(-2.8,0,.85),Et.rotation.y=.15,d.add(Et);const Ot=new I({color:4862496,roughness:.7}),Lt=new m(new E(1.4,.45,.42),Ot);Lt.position.set(2.8,.225,.55),d.add(Lt);const Kt=x(nt,1.1);e.add({id:"sf-cafe",x:Kt.x,z:Kt.z,radius:2.2,prompt:"Read Cafe Chalkboard",onInteract:()=>{s&&s.playDeskBellSound(),i.show("Cafe Mame: 『本日のおすすめ：エチオピア・イルガチェフェ G1（浅煎り ¥550）。華やかな香りと柑橘の酸味が楽しめます。テイクアウトも可能です。』")}});return}const y=Math.min(f*.55,5.8),v=new I({color:1909290,roughness:.35,metalness:.2}),_=new m(new E(y,3.2,.12),v);_.position.set(0,3.2/2,-.02),d.add(_);const P=2.4,R=new m(new E(P+.16,2.3,.14),p);R.position.set(-.5,1.2,.02),d.add(R);const A=new E(P*.48,2.18,.04),D=new m(A,We);D.position.set(-.5-P*.24,1.18,.03);const M=new m(A,We);M.position.set(-.5+P*.24,1.18,.05),d.add(D,M);const S=new Gt({map:Hg(),toneMapped:!1}),L=new m(new qt(.55,.55),S);L.position.set(1.4,1.35,.05),d.add(L);const k=new m(new E(y*.85,.08,.85),Ft);if(k.position.set(0,2.5,.4),d.add(k),r){const Z=x(0,.4);r.register({x:Z.x,y:2.42,z:Z.z,color:16773339,intensity:1.4,distance:5.5,decay:1.2,zone:"Street"})}else{const Z=new ve(16773339,1.4,5.5,1.2);Z.position.set(0,2.42,.4),d.add(Z)}const B=hs();B.position.set(-2,0,.35),d.add(B);const j=x(1.4,1);e.add({id:`sf-intercom-${t.id}`,x:j.x,z:j.z,radius:2,prompt:"Examine Residence Intercom",onInteract:()=>{s&&s.playDeskBellSound(),i.show("オートロック操作盤: 『居住者専用エントランスです。訪問先の部屋番号を押して「呼出」を押してください。』")}})}function _r(o,t,n,e,i){const r=t.w/2,a=t.d/2,l=new I({color:16769690,emissive:16758852,emissiveIntensity:.85,roughness:.3}),c=new I({color:13954303,emissive:7779560,emissiveIntensity:.7,roughness:.3}),f=new I({color:1580582,roughness:.1,metalness:.7}),d=(n>0,1);for(let h=d;h<t.floors;h++){const u=h*3.2;if(t.balconies.includes(h))for(const p of t.balconyFaces)px(o,t,p,u,i);const x=t.bay,w=(t.w-1.6)/x;for(let p=0;p<x;p++){const y=-r+.8+p*w+w/2,v=(t.seed+h*17+p*31)%100,_=v<55?l:v<80?c:f;if(t.front==="s")vr(o,t.x+y,u+1.45,t.z-a,1.4,1.6,"s",_,e);else if(t.front==="n")vr(o,t.x+y,u+1.45,t.z+a,1.4,1.6,"n",_,e);else if(t.front==="w"){const P=-a+.8+p*((t.d-1.6)/x)+(t.d-1.6)/x/2;vr(o,t.x-r,u+1.45,t.z+P,1.4,1.6,"w",_,e)}else{const P=-a+.8+p*((t.d-1.6)/x)+(t.d-1.6)/x/2;vr(o,t.x+r,u+1.45,t.z+P,1.4,1.6,"e",_,e)}}}}function vr(o,t,n,e,i,s,r,a,l){const d=r==="s"||r==="n"?new E(i,s,.18):new E(.18,s,i),h=new m(d,l);h.position.set(t,n,e),o.add(h);const u=r==="s"||r==="n"?new E(i-.08*2,s-.08*2,.04):new E(.04,s-.08*2,i-.08*2),g=new m(u,a),x=r==="s"?-.02:r==="n"?.02:0,w=r==="w"?-.02:r==="e"?.02:0;g.position.set(t+w,n,e+x),o.add(g)}function px(o,t,n,e,i){const s=t.w/2,r=t.d/2,a=1.15,l=1.05;if(n==="s"){const c=new E(t.w*.85,.18,a),f=new m(c,i);f.position.set(t.x,e+.09,t.z-r-a/2),o.add(f);const d=new E(t.w*.85,l,.06),h=new m(d,Ft);h.position.set(t.x,e+l/2+.18,t.z-r-a),o.add(h),Aa(o,t.x+t.w*.3,e+.5,t.z-r-a*.5,0)}else if(n==="n"){const c=new E(t.w*.85,.18,a),f=new m(c,i);f.position.set(t.x,e+.09,t.z+r+a/2),o.add(f);const d=new E(t.w*.85,l,.06),h=new m(d,Ft);h.position.set(t.x,e+l/2+.18,t.z+r+a),o.add(h),Aa(o,t.x-t.w*.3,e+.5,t.z+r+a*.5,Math.PI)}else if(n==="w"){const c=new E(a,.18,t.d*.85),f=new m(c,i);f.position.set(t.x-s-a/2,e+.09,t.z),o.add(f);const d=new E(.06,l,t.d*.85),h=new m(d,Ft);h.position.set(t.x-s-a,e+l/2+.18,t.z),o.add(h),Aa(o,t.x-s-a*.5,e+.5,t.z+t.d*.3,-Math.PI/2)}}function Aa(o,t,n,e,i){const s=new Pt,r=new E(.72,.52,.32),a=new m(r,O1);s.add(a);const l=new W(.2,.2,.02,16);l.rotateX(Math.PI/2);const c=new Gt({color:4473924}),f=new m(l,c);f.position.set(.12,0,.165),s.add(f),s.position.set(t,n,e),s.rotateY(i),o.add(s)}function mx(o,t,n){const e=t.w/2,i=t.d/2,s=new W(.06,.06,n,8),r=new m(s,Fe);r.position.set(t.x-e+.2,n/2,t.z-i-.08),o.add(r)}function gx(o,t,n,e){const i=t.w/2,s=t.d/2,r=.9,a=new m(new E(t.w,r,.3),e);a.position.set(t.x,n+r/2,t.z+s-.15);const l=new m(new E(t.w,r,.3),e);l.position.set(t.x,n+r/2,t.z-s+.15);const c=new m(new E(.3,r,t.d),e);c.position.set(t.x-i+.15,n+r/2,t.z);const f=new m(new E(.3,r,t.d),e);f.position.set(t.x+i-.15,n+r/2,t.z),o.add(a,l,c,f);const d=new E(3.2,2.4,3.2),h=new m(d,e);if(h.position.set(t.x,n+1.2,t.z),o.add(h),t.floors>=4){const x=new Pt,w=new W(.05,.05,1.2,6);for(const _ of[-.6,.6])for(const P of[-.6,.6]){const R=new m(w,Ft);R.position.set(_,.6,P),x.add(R)}const p=new W(.9,.9,1.6,16),y=new I({color:10008776,roughness:.3,metalness:.4}),v=new m(p,y);v.position.set(0,1.8,0),x.add(v),x.position.set(t.x+i*.5,n,t.z+s*.4),o.add(x)}const u=new W(.03,.04,3.6,6),g=new m(u,Ft);g.position.set(t.x-i*.4,n+1.8,t.z-s*.4),o.add(g)}function xx(o,t,n,e,i,s,r){const a=new Pt;a.name="urban_props";const l=[],c=[],f=[{x:-36,z:4.8},{x:-14,z:4.8},{x:8,z:4.8},{x:32,z:4.8},{x:-36,z:-4.8},{x:8,z:-4.8},{x:32,z:-4.8},{x:12.2,z:16},{x:12.2,z:32},{x:19.8,z:24},{x:-17.8,z:-18},{x:-17.8,z:-32},{x:-9.8,z:-20}];for(const _ of f){const P=wx(_.x,_.z,l,r);a.add(P),t.add({minX:_.x-.25,minY:0,minZ:_.z-.25,maxX:_.x+.25,maxY:10,maxZ:_.z+.25})}_x(a,f);const d=[{x:-4.2,z:8.8,rotY:0,variant:0,drink:"hot Boss Coffee [缶コーヒー ¥140]"},{x:20.4,z:9.8,rotY:-Math.PI/2,variant:1,drink:"cold Pocari Sweat [ポカリスエット ¥160]"},{x:5.2,z:22.1,rotY:Math.PI,variant:2,drink:"warm Green Tea [お〜いお茶 ¥130]"},{x:-9.6,z:-10.8,rotY:Math.PI/2,variant:0,drink:"cold Royal Milk Tea [ミルクティー ¥150]"}];for(let _=0;_<d.length;_++){const P=d[_],R=bd(P.x,P.z,P.rotY,P.variant,P.drink,n,e,t,r);a.add(R)}const h=vx(a,t,n,e,i,s,l,r);c.push(h.update);const u=[{x:2.4,z:6.8,rotY:.15,color:2046808,id:"bike-ramen"},{x:-3.5,z:8.2,rotY:-.1,color:1984032,id:"bike-sunheights"},{x:21.5,z:12,rotY:Math.PI/2,color:9050148,id:"bike-konbini-1"},{x:21.5,z:13.5,rotY:Math.PI/2,color:11056320,id:"bike-konbini-2"},{x:8.5,z:27.5,rotY:-Math.PI/2,color:2367002,id:"bike-cafe"},{x:10.8,z:20.5,rotY:Math.PI/2,color:2046808,id:"bike-alley"},{x:2.2,z:23.8,rotY:Math.PI,color:1984032,id:"bike-north"},{x:-18.2,z:-10.5,rotY:-Math.PI/2,color:9050148,id:"bike-residential"}];for(const _ of u){const P=Td(_.x,_.z,_.rotY,_.color,_.id,n,e,s);a.add(P),t.add({minX:_.x-.75,minY:0,minZ:_.z-.35,maxX:_.x+.75,maxY:1.2,maxZ:_.z+.35})}const g=[{x:-2.8,z:8.2,type:"bush"},{x:-2.2,z:8.2,type:"fern"},{x:2,z:8.2,type:"tall"},{x:6.8,z:21,type:"bonsai"},{x:7.4,z:21,type:"hydrangea"},{x:8,z:21,type:"trough"},{x:8.6,z:21,type:"tall"},{x:1.5,z:23.6,type:"fern"},{x:-1.2,z:23.6,type:"bush"}];for(const _ of g){const P=kx(_.x,_.z,_.type);a.add(P)}a.add(Bx(7.1,20.9));const x=Gx(-20.5,.15,-16.5,Math.PI/2,t);a.add(x);const w=Cf(-16.8,-4.2,Math.PI/4,t),p=Cf(13.2,4.2,-Math.PI/4,t);a.add(w,p);const y=Hx(9.6,20.4);a.add(y),a.add(Ed(4.25,22.1,n,e,s)),a.add(Vx(6.2,22.3,l,r)),Wx(a,t,n,e);const v=Xx(a,n,e,i,s);return c.push(v.update),o.add(a),{group:a,streetLights:l,update(_){for(const P of c)P(_)}}}function wx(o,t,n,e){const i=new Pt;i.position.set(o,0,t);const s=9.2,r=new W(.18,.24,s,12),a=new I({color:5922662,roughness:.88,metalness:.05}),l=new m(r,a);l.position.set(0,s/2,0),l.castShadow=!0,i.add(l);const c=new E(2.2,.1,.1),f=new m(c,Fe);f.position.set(0,s-.6,0),i.add(f);const d=new E(1.6,.1,.1),h=new m(d,Fe);h.position.set(0,s-1.4,0),i.add(h);const u=new W(.04,.04,.14,8),g=new I({color:15658734,roughness:.2});for(const L of[-.95,-.45,.45,.95]){const k=new m(u,g);k.position.set(L,s-.5,0),i.add(k)}const x=new W(.32,.32,1.1,12),w=new I({color:4739160,roughness:.5,metalness:.4}),p=new m(x,w);p.position.set(.35,s-2.2,0),i.add(p);const y=new W(.015,.015,.28,6);y.rotateZ(Math.PI/2);for(let L=1.8;L<s-2.5;L+=.55){const k=new m(y,Ft),B=Math.sin(L*4)>0?.2:-.2;k.position.set(B,L,0),i.add(k)}const v=new W(.03,.03,1.1,8);v.rotateZ(Math.PI/3);const _=new m(v,Fe);_.position.set(.45,5.2,0),i.add(_);const P=new Ke(.25,.15,12),R=new m(P,Fe);R.position.set(.85,4.8,0),i.add(R);const A=new Ee(.1,12,12),D=new m(A,ti);D.position.set(.85,4.72,0),i.add(D);const M=new Ke(2.4,4.6,16,1,!0);M.translate(0,-2.3,0);const S=new m(M,ag);if(S.position.set(.85,4.7,0),i.add(S),e)e.register({x:o+.85,y:4.65,z:t,color:16770229,intensity:1.6,distance:16,decay:1.5,zone:"Street"});else{const L=new ve(16770229,1.6,16,1.5);L.position.set(.85,4.65,0),n.push(L),i.add(L)}return i}function _x(o,t){const n=new dd({color:1711652,linewidth:1.5});for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){const s=t[e],r=t[i],a=Math.hypot(r.x-s.x,r.z-s.z);if(a<26)for(const l of[-.45,0,.45]){const c=8.6+l*.4,f=8.6+l*.4,d=(s.x+r.x)/2,h=(s.z+r.z)/2,u=Math.min(1.2,a*.045),x=new md(new N(s.x,c,s.z),new N(d,(c+f)/2-u,h),new N(r.x,f,r.z)).getPoints(12),w=new mn().setFromPoints(x),p=new X2(w,n);o.add(p)}}}function bd(o,t,n,e,i,s,r,a,l){const c=new Pt,f=1.05,d=1.95,h=.82,u=new E(f,d,h),g=new I({color:e===0?1784632:e===1?5904420:1715796,roughness:.35,metalness:.65}),x=new m(u,g);x.position.set(0,d/2,0),x.castShadow=!0,c.add(x);const w=new qt(.92,1.75),p=cg(e),y=new Gt({map:p,toneMapped:!1}),v=new m(w,y);v.position.set(0,d/2+.04,h/2+.01),c.add(v);const _=e===0?8060884:e===1?16746649:8965375;if(l){const k=h/2+.45;l.register({x:o+Math.sin(n)*k,y:.15+1.2,z:t+Math.cos(n)*k,color:_,intensity:.9,distance:4,decay:1.2,zone:"Street"})}else{const k=new ve(_,.9,4);k.position.set(0,1.2,h/2+.45),c.add(k)}const P=new E(.42,.85,.42),R=new I({color:4015181,roughness:.4}),A=new m(P,R);A.position.set(f/2+.32,.425,0),c.add(A);const D=new W(.08,.08,.02,12),M=new Gt({color:1118481}),S=new m(D,M);S.position.set(f/2+.24,.86,0);const L=new m(D,M);return L.position.set(f/2+.4,.86,0),c.add(S,L),c.position.set(o,.15,t),c.rotateY(n),a.add({minX:o-.9,minY:0,minZ:t-.7,maxX:o+.9,maxY:2.2,maxZ:t+.7}),s.add({id:`vending-${o}-${t}`,x:o,z:t,radius:1.8,prompt:`Buy ${i}`,onInteract:()=>{r.show(`*Clink-clatter-thump!* You bought a ${i}. It feels warm and soothing in your hands.`)}}),c}function vx(o,t,n,e,i,s,r,a){const l=[];yx(o,t,n,e),Mx(o,t),bf(o,1.8,-18.5,r??[],a),bf(o,-.5,-31,r??[],a);const c=Sx(-2.5,-17.5,a);o.add(c.group),l.push(c.update),t.add({minX:-2.9,minY:0,minZ:-17.9,maxX:-2.1,maxY:2.2,maxZ:-17.1}),bx(o,2.8,-8.5,t,n,e),Tx(o,-2.8,-8.5,t,n,e),Ex(o,3.6,-10.2,t),Ax(o,6.2,-32.5,t),Rx(o,3.6,-26,t);const f=bd(-7.5,-9.2,-Math.PI/2,1,"cold Pocari Sweat & Calpis Soda [¥160]",n,e,t,a);o.add(f),o.add(Ed(-7.5,-10.4,n,e,s));const d=Td(-5.8,-8.8,.25,1920312,"bike-park-entrance",n,e,s);o.add(d),t.add({minX:-6.5,minY:0,minZ:-9.2,maxX:-5.1,maxY:1.2,maxZ:-8.4}),Cx(o,-.5,-23.8,t,n,e,i);const h=xl(3.4,-18.2,-Math.PI/2);o.add(h),t.add({minX:3,minY:0,minZ:-19.2,maxX:3.8,maxY:1.2,maxZ:-17.2}),n.add({id:"bench-sakura",x:2.6,z:-18.2,radius:1.8,prompt:()=>i.seated?"Stand up from Bench":"Sit on Sakura Bench",onInteract:()=>{i.seated=!i.seated,i.seated?e.show("You sit beneath the grand sakura tree. Pink petals drift down gently in the quiet midnight breeze."):e.show("You stand back up, refreshed.")}});const u=xl(3.5,-28.5,-Math.PI/2);o.add(u),t.add({minX:3.1,minY:0,minZ:-29.5,maxX:3.9,maxY:1.2,maxZ:-27.5}),n.add({id:"bench-playground",x:2.7,z:-28.5,radius:1.8,prompt:()=>i.seated?"Stand up from Bench":"Sit on Park Bench",onInteract:()=>{i.seated=!i.seated,i.seated?e.show("You sit down facing the playground. The quiet night air of Tokyo surrounds you."):e.show("You stand back up.")}}),Px(o,2.4,-22.5,t),Ix(o,-2.2,-20.5,t,n,e,s);const g=Lx(o,-3.8,-27.5,t,n,e,i,s);l.push(g.update);const x=Dx(o,-1.5,-29.2,t,n,e,s);l.push(x.update),Ux(o,-4.8,-33.6,Math.PI,t,n,e,s),Nx(o,-2.5,-33.5,t);const w=Tf(5.2,-15.5,1.25);o.add(w),t.add({minX:4.6,minY:0,minZ:-16.1,maxX:5.8,maxY:6.5,maxZ:-14.9});const p=new Pt;o.add(p);const y=Ox(5.2,-15.5);p.add(y.group);const v=Tf(-2.8,-12.5,.85);o.add(v),t.add({minX:-3.3,minY:0,minZ:-13,maxX:-2.3,maxY:5.5,maxZ:-12});const _=zx(-5,-14);o.add(_),t.add({minX:-5.5,minY:0,minZ:-14.5,maxX:-4.5,maxY:5.5,maxZ:-13.5});const P=Ef(-5.5,-17.5,1);o.add(P),t.add({minX:-6,minY:0,minZ:-18,maxX:-5,maxY:5.5,maxZ:-17});const R=Ef(-6.8,-34.8,1.05);o.add(R),t.add({minX:-7.3,minY:0,minZ:-35.3,maxX:-6.3,maxY:5.5,maxZ:-34.3});for(const M of[{x:8.5,z:-28},{x:8.5,z:-31.5},{x:8.5,z:-35}]){const S=Fx(M.x,M.z);o.add(S),t.add({minX:M.x-.4,minY:0,minZ:M.z-.4,maxX:M.x+.4,maxY:6,maxZ:M.z+.4})}Af(o,7.6,-14,1.4,3.2,"azalea",t),Af(o,-7.2,-13.5,1.4,2.6,"hydrangea",t),Rf(p,5.2,-15.5,3.2,40),Rf(p,-2.8,-12.5,2.2,20);let A=0,D=!0;return{update(M){Pn.isHigh()?(p.visible=!0,y.update(M)):(A+=M,A>.1&&(A=0,D=(i.x-0)*(i.x-0)+(i.z- -22.5)*(i.z- -22.5)<1764,p.visible=D),D&&y.update(M));for(const S of l)S(M)}}}function yx(o,t,n,e){const i=new I({color:4738904,roughness:.85,metalness:.05}),s=new I({color:3554372,roughness:.8}),r=new Pt;r.position.set(-2.2,.15,-7.6);const a=new m(new E(.55,1.25,.55),i);a.position.set(0,.625,0),a.castShadow=!0;const l=new m(new E(.65,.1,.65),s);l.position.set(0,1.3,0),r.add(a,l),o.add(r),t.add({minX:-2.5,minY:0,minZ:-7.9,maxX:-1.9,maxY:1.5,maxZ:-7.3});const c=new Pt;c.position.set(2.2,.15,-7.6);const f=new m(new E(.55,1.25,.55),i);f.position.set(0,.625,0),f.castShadow=!0;const d=new m(new E(.65,.1,.65),s);d.position.set(0,1.3,0),c.add(f,d);const h=new Gt({map:Zg()}),u=new qt(.42,.22),g=new m(u,h);g.position.set(0,.85,.28),c.add(g),o.add(c),t.add({minX:1.9,minY:0,minZ:-7.9,maxX:2.5,maxY:1.5,maxZ:-7.3}),n.add({id:"park-nameplate",x:2.2,z:-7,radius:1.6,prompt:"Read Park Plaque",onInteract:()=>{e.show(`Bronze Park Plaque: "Sakura-cho Children's Park (桜町児童遊園) — Minato Ward, Tokyo".`)}});const x=new I({color:2236962,roughness:.5,metalness:.7}),w=new I({color:13938487,roughness:.4}),p=[{x:-.75,z:-7.6},{x:.75,z:-7.6},{x:-8.5,z:-22.6},{x:-8.5,z:-21.4}];for(const y of p){const v=new Pt;v.position.set(y.x,.15,y.z);const _=new m(new W(.08,.08,.8,12),x);_.position.set(0,.4,0),_.castShadow=!0;const P=new m(new Ee(.09,12,8),x);P.position.set(0,.8,0);const R=new m(new W(.085,.085,.16,12),w);R.position.set(0,.58,0),v.add(_,P,R),o.add(v),t.add({minX:y.x-.12,minY:0,minZ:y.z-.12,maxX:y.x+.12,maxY:.9,maxZ:y.z+.12})}}function Mx(o,t){const n=new I({color:4080716,roughness:.9}),e=new I({color:1779744,roughness:.4,metalness:.7}),i=[{x1:-8.5,z1:-7.6,x2:-2.5,z2:-7.6,w:6,d:.35,cx:-5.5,cz:-7.6},{x1:2.5,z1:-7.6,x2:9.5,z2:-7.6,w:7,d:.35,cx:6,cz:-7.6},{x1:-8.5,z1:-20.6,x2:-8.5,z2:-7.6,w:.35,d:13,cx:-8.5,cz:-14.1},{x1:-8.5,z1:-36.5,x2:-8.5,z2:-23.4,w:.35,d:13.1,cx:-8.5,cz:-29.95},{x1:-8.5,z1:-36.5,x2:9.5,z2:-36.5,w:18,d:.35,cx:.5,cz:-36.5},{x1:9.5,z1:-36.5,x2:9.5,z2:-7.6,w:.35,d:28.9,cx:9.5,cz:-22.05}];for(const s of i){const r=new E(s.w,.35,s.d),a=new m(r,n);a.position.set(s.cx,.15+.175,s.cz),a.castShadow=!0,o.add(a);const l=.75,c=s.w>s.d,f=new E(s.w,.05,s.d),d=new m(f,e);d.position.set(s.cx,.15+.35+l,s.cz),o.add(d);const h=c?s.w:s.d,u=Math.floor(h/.45);for(let v=0;v<=u;v++){const _=u>0?v/u-.5:0,P=c?s.cx+_*h:s.cx,R=c?s.cz:s.cz+_*h,A=new m(new W(.018,.018,l,6),e);A.position.set(P,.15+.35+l/2,R),o.add(A)}const g=c?s.cz<-20?.35:-.35:s.cx>0?-.35:.35,x=c?s.w-.2:.5,w=c?.5:s.d-.2,p=new E(x,.95,w),y=new m(p,gl);y.position.set(c?s.cx:s.cx+g,.15+.475,c?s.cz+g:s.cz),y.castShadow=!0,o.add(y),t.add({minX:s.cx-s.w/2-.1,minY:0,minZ:s.cz-s.d/2-.1,maxX:s.cx+s.w/2+.1,maxY:1.5,maxZ:s.cz+s.d/2+.1})}}function bf(o,t,n,e,i){const s=new Pt;s.position.set(t,.15,n);const r=new W(.08,.12,3.6,12),a=new I({color:1781026,roughness:.5,metalness:.6}),l=new m(r,a);l.position.set(0,1.8,0),l.castShadow=!0,s.add(l);const c=new m(new W(.18,.24,.4,12),a);c.position.set(0,.2,0),s.add(c);const f=new m(new W(.14,.07,.15,12),a);f.position.set(0,3.65,0),s.add(f);const d=new Ee(.24,16,16),h=new m(d,ti);if(h.position.set(0,3.85,0),s.add(h),i)i.register({x:t,y:4,z:n,color:16772290,intensity:1.6,distance:13,decay:1.2,zone:"Park"});else{const u=new ve(16772290,1.6,13);u.position.set(0,3.85,0),s.add(u),e.push(u)}o.add(s)}function Sx(o,t,n){const e=new Pt;e.position.set(o,.15,t);const i=new I({color:5922920,roughness:.9}),s=new m(new W(.42,.48,.35,6),i);s.position.set(0,.175,0),s.castShadow=!0,e.add(s);const r=new m(new W(.22,.25,.8,6),i);r.position.set(0,.75,0),e.add(r);const a=new m(new E(.55,.45,.55),i);a.position.set(0,1.35,0),e.add(a);let l=1.3,c=null;n?n.register({x:o,y:1.5,z:t,color:16754756,intensity:1.4,distance:6,decay:1.2,zone:"Park",dynamicIntensity:()=>l}):(c=new ve(16754756,1.4,6),c.position.set(0,1.35,0),e.add(c));const f=new m(new Ke(.75,.35,6),i);f.position.set(0,1.75,0),e.add(f);let d=0;return{group:e,update:u=>{d+=u,l=1.3+Math.sin(d*8.5)*.15+(Math.random()-.5)*.08,c&&(c.intensity=l)}}}function bx(o,t,n,e,i,s){const r=new Pt;r.position.set(t,.15,n);const a=new I({color:4739160,roughness:.4,metalness:.7}),l=new m(new W(.03,.03,1.6,8),a);l.position.set(-.55,.8,0);const c=new m(new W(.03,.03,1.6,8),a);c.position.set(.55,.8,0),r.add(l,c);const f=new Gt({map:qg()}),d=new qt(1.35,.85),h=new m(d,f);h.position.set(0,1.1,.015);const u=new m(d,f);u.position.set(0,1.1,-.015),u.rotateY(Math.PI);const g=new m(new E(1.4,.9,.025),a);g.position.set(0,1.1,0),r.add(l,c,g,h,u),o.add(r),e.add({minX:t-.75,minY:0,minZ:n-.15,maxX:t+.75,maxY:1.6,maxZ:n+.15}),i.add({id:"park-rules-sign",x:t,z:n+.6,radius:1.8,prompt:"Read Park Regulations",onInteract:()=>{s.show("Park Rules: Please take your litter home, no fireworks or open flames, keep dogs on leash, and keep noise down at night.")}})}function Tx(o,t,n,e,i,s){const r=new Pt;r.position.set(t,.15,n);const a=new I({color:4008216,roughness:.85}),l=new m(new E(.08,1.7,.08),a);l.position.set(-.75,.85,0);const c=new m(new E(.08,1.7,.08),a);c.position.set(.75,.85,0);const f=new Gt({map:$g()}),d=new m(new qt(1.5,.9),f);d.position.set(0,1.25,.02);const h=new m(new qt(1.5,.9),We);h.position.set(0,1.25,.035);const u=new m(new E(1.56,.96,.05),a);u.position.set(0,1.25,-.01);const g=new m(new E(1.7,.04,.25),a);g.position.set(0,1.75,.05),g.rotateX(.2),r.add(l,c,u,d,h,g),o.add(r),e.add({minX:t-.85,minY:0,minZ:n-.2,maxX:t+.85,maxY:1.8,maxZ:n+.2}),i.add({id:"community-board",x:t,z:n+.7,radius:1.8,prompt:"Read Community Bulletin",onInteract:()=>{s.show('Sakura-cho Bulletin: Spring night festival next week, disaster evacuation meeting point, and a lost calico cat flyer: "Answers to Mike, wearing a red bell collar"!')}})}function Ex(o,t,n,e){const i=new Pt;i.position.set(t,.15,n);const s=new I({color:2044967,roughness:.5,metalness:.5}),r=new m(new W(.22,.3,.6,8),s);r.position.set(0,.3,0),r.castShadow=!0;const a=new m(new W(.12,.16,3.4,8),s);a.position.set(0,2,0),a.castShadow=!0;const l=new W(.48,.48,.24,24);l.rotateX(Math.PI/2);const c=new m(l,s);c.position.set(0,3.8,0);const f=new Gt({map:Kg(),toneMapped:!1}),d=new Sn(.42,24),h=new m(d,f);h.position.set(0,3.8,.125);const u=new m(d,f);u.position.set(0,3.8,-.125),u.rotateY(Math.PI);const g=new m(new Ke(.08,.45,8),s);g.position.set(0,4.45,0),i.add(r,a,c,h,u,g),o.add(i),e.add({minX:t-.35,minY:0,minZ:n-.35,maxX:t+.35,maxY:4.5,maxZ:n+.35})}function Ax(o,t,n,e){const i=new Pt;i.position.set(t,.15,n);const s=new I({color:14671576,roughness:.65,metalness:.05}),r=new I({color:2632754,roughness:.7,metalness:.3}),a=new I({color:8029069,roughness:.3,metalness:.7}),l=new m(new E(4.2,2.7,3.2),s);l.position.set(0,1.35,0),l.castShadow=!0,i.add(l);const c=new m(new E(4.6,.18,3.6),r);c.position.set(0,2.75,0),i.add(c);const f=new m(new E(.85,2.05,.04),a);f.position.set(-1.1,1.025,1.62);const d=new m(new E(.85,2.05,.04),a);d.position.set(1.1,1.025,1.62),i.add(f,d);const h=new Gt({color:16769700,toneMapped:!1}),u=new m(new qt(3.6,.32),h);u.position.set(0,2.35,1.62),i.add(u);const g=new Gt({map:Jg()}),x=new m(new qt(.75,.36),g);x.position.set(0,1.9,1.62),i.add(x);const w=new m(new E(2.4,1.8,.12),s);w.position.set(0,.9,2.35),i.add(w),o.add(i),e.add({minX:t-2.2,minY:0,minZ:n-1.7,maxX:t+2.2,maxY:3,maxZ:n+1.7}),e.add({minX:t-1.3,minY:0,minZ:n+2.2,maxX:t+1.3,maxY:2,maxZ:n+2.5})}function Rx(o,t,n,e){const i=new Pt;i.position.set(t,.15,n);const s=new I({color:1984032,roughness:.5,metalness:.5}),r=new m(new W(.24,.22,.72,16),s);r.position.set(0,.36,0),r.castShadow=!0;const a=new m(new $e(.24,.02,8,16),s);a.position.set(0,.72,0),a.rotateX(Math.PI/2),i.add(r,a),o.add(i),e.add({minX:t-.3,minY:0,minZ:n-.3,maxX:t+.3,maxY:.8,maxZ:n+.3})}function Cx(o,t,n,e,i,s,r){const a=new Pt;a.position.set(t,.15,n);const l=new I({color:4862494,roughness:.88,metalness:.02}),c=new E(.16,2.6,.16),f=1.6,d=1,h=[{px:-f,pz:-d},{px:f,pz:-d},{px:-f,pz:d},{px:f,pz:d}];for(const v of h){const _=new m(c,l);_.position.set(v.px,1.3,v.pz),_.castShadow=!0,a.add(_)}const u=new E(3.6,.18,.1),g=new m(u,l);g.position.set(0,2.65,-d);const x=new m(u,l);x.position.set(0,2.65,d),a.add(g,x);const w=new E(.08,.14,2.4);for(let v=-f+.3;v<=f-.3;v+=.5){const _=new m(w,l);_.position.set(v,2.78,0),a.add(_)}const p=new Yn(.42,1);for(let v=-f;v<=f;v+=.8){const _=new m(p,Rs);_.position.set(v+(Math.random()-.5)*.3,2.9,(Math.random()-.5)*1.4),_.scale.set(1.4,.6,1.2),a.add(_)}const y=xl(0,0,0);a.add(y),o.add(a),e.add({minX:t-f-.15,minY:0,minZ:n-d-.15,maxX:t-f+.15,maxY:2.6,maxZ:n-d+.15}),e.add({minX:t+f-.15,minY:0,minZ:n-d-.15,maxX:t+f+.15,maxY:2.6,maxZ:n-d+.15}),e.add({minX:t-f-.15,minY:0,minZ:n+d-.15,maxX:t-f+.15,maxY:2.6,maxZ:n+d+.15}),e.add({minX:t+f-.15,minY:0,minZ:n+d-.15,maxX:t+f+.15,maxY:2.6,maxZ:n+d+.15}),e.add({minX:t-1.1,minY:0,minZ:n-.6,maxX:t+1.1,maxY:1.2,maxZ:n+.6}),i.add({id:"bench-pergola",x:t,z:n+.8,radius:1.8,prompt:()=>r.seated?"Stand up from Pergola":"Sit under Pergola",onInteract:()=>{r.seated=!r.seated,r.seated?s.show("You sit under the wisteria pergola. The climbing foliage filters the gentle streetlights above."):s.show("You stand back up.")}})}function xl(o,t,n){const e=new Pt;e.position.set(o,.15,t),e.rotateY(n);const i=new E(1.8,.08,.55),s=new m(i,ui);s.position.set(0,.44,0),s.castShadow=!0,e.add(s);const r=new E(1.8,.45,.08),a=new m(r,ui);a.position.set(0,.78,-.24),e.add(a);const l=new E(.08,.45,.5),c=new m(l,Ft);c.position.set(-.75,.22,0);const f=new m(l,Ft);return f.position.set(.75,.22,0),e.add(c,f),e}function Px(o,t,n,e){const i=new Pt;i.position.set(t,.15,n);const s=new I({color:5922920,roughness:.9}),r=new m(new W(.65,.65,.08,18),s);r.position.set(0,.74,0),r.castShadow=!0;const a=new m(new W(.18,.24,.7,12),s);a.position.set(0,.35,0),i.add(r,a);for(let l=0;l<3;l++){const c=l*Math.PI*2/3,f=Math.cos(c)*1.05,d=Math.sin(c)*1.05,h=new m(new W(.24,.24,.08,12),s);h.position.set(f,.42,d);const u=new m(new W(.1,.14,.4,10),s);u.position.set(f,.2,d),i.add(h,u)}o.add(i),e.add({minX:t-1.3,minY:0,minZ:n-1.3,maxX:t+1.3,maxY:.85,maxZ:n+1.3})}function Ix(o,t,n,e,i,s,r){const a=new Pt;a.position.set(t,.15,n);const l=new I({color:7238780,roughness:.82}),c=new m(new E(.5,.78,.5),l);c.position.set(0,.39,0),c.castShadow=!0;const f=new m(new W(.18,.18,.08,14),Ft);f.position.set(0,.82,0);const d=new m(new W(.015,.015,.09,8),Ft);d.position.set(0,.88,.06),d.rotateX(-.3);const h=new m(new W(.018,.018,.12,8),Ft);h.position.set(.26,.38,0),h.rotateZ(Math.PI/2);const u=new I({color:3355443,roughness:.6,metalness:.8}),g=new m(new E(.75,.02,.75),u);g.position.set(0,.01,0),a.add(c,f,d,h,g),o.add(a),e.add({minX:t-.4,minY:0,minZ:n-.4,maxX:t+.4,maxY:1.2,maxZ:n+.4}),i.add({id:"park-fountain",x:t,z:n+.6,radius:1.6,prompt:"Drink Cold Park Water",onInteract:()=>{r==null||r.playFountainDrinkSound(),s.show("Cold, crisp water bubbles from the fountain nozzle. Very refreshing!")}})}function Lx(o,t,n,e,i,s,r,a){const l=new Pt;l.position.set(t,.15,n);const c=3.4,f=2.8,d=new W(.06,.06,c+.4,12);d.rotateZ(Math.PI/2);const h=new m(d,Nl);h.position.set(0,f,0),h.castShadow=!0,l.add(h);const u=new W(.05,.05,3,10);for(const p of[-1,1]){const y=c/2*p,v=new m(u,Lo);v.position.set(y,f/2,.5),v.rotateX(.32*p),v.castShadow=!0;const _=new m(u,Lo);_.position.set(y,f/2,-.5),_.rotateX(-.32*p),_.castShadow=!0;const P=new m(new W(.03,.03,.85,8),Lo);P.position.set(y,1,0),P.rotateX(Math.PI/2),l.add(v,_,P)}const g=[];for(const p of[-.85,.85]){const y=new Pt;y.position.set(p,f-.05,0);const v=Ft,_=2.05;for(const R of[-.25,.25]){const A=new m(new W(.012,.012,_,6),v);A.position.set(R,-_/2,0),y.add(A)}const P=new m(new E(.55,.05,.26),tg);P.position.set(0,-_,0),P.castShadow=!0,y.add(P),l.add(y),g.push(y)}o.add(l),e.add({minX:t-c/2-.25,minY:0,minZ:n-.9,maxX:t-c/2+.25,maxY:2.8,maxZ:n+.9}),e.add({minX:t+c/2-.25,minY:0,minZ:n-.9,maxX:t+c/2+.25,maxY:2.8,maxZ:n+.9}),i.add({id:"park-swing",x:t,z:n+.7,radius:2,prompt:()=>r.seated?"Stand up from Swing":"Sit on Park Swing",onInteract:()=>{r.seated=!r.seated,r.seated?(a==null||a.playSwingCreakSound(),s.show("You sit on the park swing. The chains creak softly as you sway under the midnight sky.")):s.show("You hop off the swing.")}});let x=0;return{update:p=>{x+=p,g[0].rotation.x=Math.sin(x*1.5)*.12,g[1].rotation.x=Math.sin(x*1.7+1.2)*.1}}}function Dx(o,t,n,e,i,s,r){const a=new Pt;a.position.set(t,.15,n);const l=new m(new W(.24,.24,.05,12),Ft);l.position.set(0,.025,0),a.add(l);const c=new m(new W(.08,.08,.42,12),ig);c.position.set(0,.25,0),a.add(c);const f=new Pt;f.position.set(0,.46,0);const d=new I({color:15790320,roughness:.6}),h=new I({color:1710618,roughness:.7}),u=new m(new E(.38,.36,.65),d);u.position.set(0,.18,0),u.castShadow=!0;const g=new m(new E(.32,.04,.34),h);g.position.set(0,.38,-.05);const x=new m(new Ee(.22,12,12),d);x.position.set(0,.35,.38);const w=new m(new Ee(.07,8,8),h);w.position.set(-.16,.52,.34);const p=new m(new Ee(.07,8,8),h);p.position.set(.16,.52,.34),p.position.set(.16,.52,.34);const y=new m(new W(.018,.018,.44,8),ms);y.position.set(0,.52,.28),y.rotateZ(Math.PI/2);const v=new m(new W(.016,.016,.48,8),Ft);v.position.set(0,.08,.18),v.rotateZ(Math.PI/2),f.add(u,g,x,w,p,y,v),a.add(f),o.add(a),e.add({minX:t-.4,minY:0,minZ:n-.45,maxX:t+.4,maxY:1.1,maxZ:n+.45});let _=0;i.add({id:"spring-rocker",x:t,z:n+.5,radius:1.5,prompt:"Ride Panda Spring Rocker",onInteract:()=>{r==null||r.playSpringRockerSound(),_=2.5,s.show("You bounce on the little panda rocker! Boing boing!")}});let P=0;return{update:A=>{P+=A,_>0?(_-=A,f.rotation.x=Math.sin(P*16)*(_*.12),f.rotation.z=Math.cos(P*12)*(_*.05)):(f.rotation.x=Math.sin(P*2.2)*.02,f.rotation.z=0)}}}function Ux(o,t,n,e=Math.PI,i,s,r,a){const l=new Pt;l.position.set(t,.15,n),l.rotation.y=e;const c=2.1,f=new W(.035,.035,2.3,8),d=new m(f,ms);d.position.set(-.35,c/2,.4),d.rotateX(.25);const h=new m(f,ms);h.position.set(.35,c/2,.4),h.rotateX(.25),l.add(d,h);for(let _=.35;_<c;_+=.35){const P=new m(new W(.02,.02,.7,8),Nl);P.position.set(0,_,.4-_/c*.4),P.rotateZ(Math.PI/2),l.add(P)}const u=new m(new E(.8,.06,.8),ms);u.position.set(0,c,0);const g=new m(new $e(.4,.03,8,16,Math.PI),ms);g.position.set(0,c+.4,0),l.add(u,g);const x=3.6,w=new E(.65,.06,x),p=new m(w,eg);p.position.set(0,c/2+.1,-x/2+.2),p.rotateX(-.52),p.castShadow=!0;const y=new m(new E(.05,.22,x),Lo);y.position.set(-.32,c/2+.2,-x/2+.2),y.rotateX(-.52);const v=new m(new E(.05,.22,x),Lo);if(v.position.set(.32,c/2+.2,-x/2+.2),v.rotateX(-.52),l.add(p,y,v),o.add(l),i&&(Math.abs(e-Math.PI)<.2?i.add({minX:t-.55,minY:0,minZ:n-.6,maxX:t+.55,maxY:2.4,maxZ:n+x-.2}):i.add({minX:t-.55,minY:0,minZ:n-x+.2,maxX:t+.55,maxY:2.4,maxZ:n+.6})),s&&r){const _=Math.abs(e-Math.PI)<.2?n+1.6:n-1.6;s.add({id:"playground-slide",x:t,z:_,radius:2.2,prompt:"Ride Playground Slide [すべり台]",onInteract:()=>{a&&a.playSlideSound(),r.show("You climb the ladder to the red platform and whoosh down the stainless steel slide into the park grass! Wheee!")}})}}function Nx(o,t,n,e){const i=new Pt;i.position.set(t,.15,n);const s=2.4,r=new m(new E(s,.24,.16),Ea),a=r.clone();a.position.set(0,.12,-s/2);const l=r.clone();l.position.set(0,.12,s/2);const c=new m(new E(.16,.24,s),Ea);c.position.set(-s/2,.12,0);const f=new m(new E(.16,.24,s),Ea);f.position.set(s/2,.12,0);const d=new m(new E(s-.1,.18,s-.1),ng);d.position.set(0,.09,0),d.receiveShadow=!0;const h=new m(new W(.1,.07,.14,12),Nl);h.position.set(.4,.24,.3);const u=new m(new E(.06,.015,.22),Lo);u.position.set(.55,.19,.35),u.rotateY(.4),i.add(a,l,c,f,d,h,u),o.add(i),e.add({minX:t-s/2,minY:0,minZ:n-s/2,maxX:t+s/2,maxY:.3,maxZ:n+s/2})}function Tf(o,t,n=1){const e=new Pt;e.position.set(o,.15,t),e.scale.set(n,n,n);const i=new W(.32,.45,3.4,8),s=new m(i,ui);s.position.set(0,1.7,0),s.castShadow=!0,e.add(s);const r=new W(.18,.24,2.2,6);r.rotateZ(.55);const a=new m(r,ui);a.position.set(.7,3.2,0),e.add(a);const l=new W(.18,.24,2.2,6);l.rotateZ(-.55);const c=new m(l,ui);c.position.set(-.7,3.2,0),e.add(c);const f=[{x:0,y:4.8,z:0,r:2.4},{x:1.8,y:4.2,z:.6,r:1.8},{x:-1.8,y:4.2,z:-.6,r:1.8},{x:.8,y:4,z:-1.6,r:1.7},{x:-.8,y:4,z:1.6,r:1.7},{x:0,y:5.6,z:0,r:1.5}];for(const d of f){const h=new Yn(d.r,1),u=new m(h,zl);u.position.set(d.x,d.y,d.z),u.castShadow=!0,e.add(u)}return e}function zx(o,t){const n=new Pt;n.position.set(o,.15,t);const e=new m(new W(.28,.38,2,8),ui);e.position.set(0,1,0),e.rotateZ(-.15),e.castShadow=!0;const i=new m(new W(.18,.28,1.8,8),ui);i.position.set(.25,2.6,.1),i.rotateZ(.22),i.castShadow=!0,n.add(e,i);const s=[{x:.6,y:2.8,z:.3,sx:1.6,sy:.45,sz:1.3},{x:-.8,y:3.3,z:-.2,sx:1.8,sy:.48,sz:1.4},{x:.4,y:3.9,z:.1,sx:1.5,sy:.45,sz:1.3},{x:0,y:4.5,z:0,sx:1.3,sy:.42,sz:1.1}];for(const r of s){const a=new Yn(1,1),l=new m(a,J1);l.position.set(r.x,r.y,r.z),l.scale.set(r.sx,r.sy,r.sz),l.castShadow=!0,n.add(l)}return n}function Ef(o,t,n=1){const e=new Pt;e.position.set(o,.15,t),e.scale.set(n,n,n);const i=new W(.28,.38,3.2,8),s=new m(i,ui);s.position.set(0,1.6,0),s.castShadow=!0,e.add(s);const r=[{x:0,y:4.5,z:0,r:2},{x:1.4,y:3.8,z:.5,r:1.5},{x:-1.4,y:3.8,z:-.5,r:1.5},{x:0,y:5.2,z:0,r:1.2}];for(const a of r){const l=new Yn(a.r,1),c=new m(l,Rs);c.position.set(a.x,a.y,a.z),c.castShadow=!0,e.add(c)}return e}function Fx(o,t){const n=new Pt;n.position.set(o,.15,t);const e=new m(new W(.18,.24,2,8),ui);e.position.set(0,1,0),n.add(e);const i=new m(new Ke(1.1,2.5,8),gl);i.position.set(0,2.8,0);const s=new m(new Ke(.85,2.2,8),gl);return s.position.set(0,4.2,0),n.add(i,s),n}function Af(o,t,n,e,i,s,r){const a=new Pt;a.position.set(t,.15,n);const l=new I({color:5922920,roughness:.9}),c=new m(new E(e,.22,i),l);c.position.set(0,.11,0),a.add(c);const f=new I({color:2234898,roughness:.95}),d=new m(new E(e-.2,.24,i-.2),f);d.position.set(0,.12,0),a.add(d);const h=Math.max(3,Math.floor(e*i*1.5));for(let u=0;u<h;u++){const g=(Math.random()-.5)*(e-.4),x=(Math.random()-.5)*(i-.4),w=.28+Math.random()*.15,p=new m(new Ee(w,8,8),Rs);p.position.set(g,.24+w*.6,x),a.add(p);const y=s==="azalea"?Math.random()>.4?j1:xf:Math.random()>.4?Q1:xf,v=new m(new Yn(w*.65,0),y);v.position.set(g,.28+w*.9,x),a.add(v)}o.add(a),r.add({minX:t-e/2,minY:0,minZ:n-i/2,maxX:t+e/2,maxY:.6,maxZ:n+i/2})}function Rf(o,t,n,e,i){const s=new qt(.12,.08);s.rotateX(-Math.PI/2);for(let r=0;r<i;r++){const a=Math.sqrt(Math.random())*e,l=Math.random()*Math.PI*2,c=t+Math.cos(l)*a,f=n+Math.sin(l)*a,d=new m(s,zl);d.position.set(c,.158,f),d.rotateY(Math.random()*Math.PI),o.add(d)}}function Ox(o,t){const n=new Pt;n.position.set(o,.15,t);const e=38,i=[],s=new qt(.08,.05);for(let l=0;l<e;l++){const c=new m(s,zl),f=(Math.random()-.5)*9,d=(Math.random()-.5)*9,h=.5+Math.random()*4.8;c.position.set(f,h,d),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),n.add(c),i.push({mesh:c,x0:f,z0:d,speed:.28+Math.random()*.35,phase:Math.random()*Math.PI*2})}let r=0;return{group:n,update:l=>{r+=l;for(const c of i)c.mesh.position.y-=l*c.speed,c.mesh.position.x=c.x0+Math.sin(r*1.5+c.phase)*.4,c.mesh.position.z=c.z0+Math.cos(r*1.2+c.phase)*.4,c.mesh.rotation.z+=l*1.2,c.mesh.rotation.y+=l*.8,c.mesh.position.y<.1&&(c.mesh.position.y=4.8+Math.random()*.5)}}}function Td(o,t,n,e=2046808,i="bike",s,r,a){const l=new Pt;l.position.set(o,.15,t),l.rotateY(n),l.rotateZ(-.06);const c=new I({color:1579036,roughness:.9}),f=new I({color:e,roughness:.35,metalness:.4}),d=new I({color:2365458,roughness:.5}),h=new I({color:1315860,roughness:.85}),u=new I({color:13938487,roughness:.2,metalness:.85}),g=new Gt({color:14489624}),x=new Gt({color:16096779}),w=.32,p=[{x:.55,isFront:!0},{x:-.55,isFront:!1}];for(const G of p){const q=new Pt;q.position.set(G.x,w,0);const nt=new m(new $e(w,.024,8,24),c);q.add(nt);const gt=new m(new $e(w-.02,.012,6,24),Ft);q.add(gt);const At=new m(new W(.022,.022,.07,8),Ft);At.rotateX(Math.PI/2),q.add(At);for(let It=0;It<4;It++){const $t=new m(new W(.003,.003,(w-.02)*2,4),Ft);$t.rotateZ(It*Math.PI/4),q.add($t)}const ut=new $e(w+.022,.016,6,18,Math.PI*(G.isFront?.72:.85)),Ut=new m(ut,f);if(Ut.rotateZ(G.isFront?-Math.PI*.58:-Math.PI*.42),q.add(Ut),!G.isFront){const It=new m(new W(.012,.012,.01,8),g);It.position.set(-w-.015,-.05,0),It.rotateZ(Math.PI/2),q.add(It)}l.add(q)}const y=new m(new W(.025,.025,.08,8),f);y.rotateX(Math.PI/2),y.position.set(-.06,.28,0),l.add(y);const v=new m(new W(.02,.02,.2,8),f);v.position.set(.42,.7,0),v.rotateZ(-.28),l.add(v);for(const G of[-.018,.018]){const q=new m(new W(.014,.014,.65,8),f);q.position.set(.18,.46,G),q.rotateZ(.72),l.add(q)}const _=new m(new W(.016,.016,.46,8),f);_.position.set(-.16,.48,0),_.rotateZ(-.25),l.add(_);for(const G of[-.038,.038]){const q=new m(new W(.011,.009,.45,8),Ft);q.position.set(.48,.51,G),q.rotateZ(-.28),l.add(q)}for(const G of[-.038,.038]){const q=new m(new W(.01,.01,.52,6),f);q.position.set(-.31,.3,G),q.rotateZ(-.09),l.add(q)}for(const G of[-.038,.038]){const q=new m(new W(.01,.01,.55,6),f);q.position.set(-.38,.52,G),q.rotateZ(.78),l.add(q)}const P=new m(new W(.013,.013,.22,8),Ft);P.position.set(.44,.82,0),l.add(P);const R=new m(new $e(.24,.011,6,16,Math.PI*.8),Ft);R.rotateX(Math.PI/2),R.rotateZ(Math.PI*.6),R.position.set(.4,.92,0),l.add(R);for(const G of[-.22,.22]){const q=new m(new W(.016,.016,.09,8),h);q.position.set(.29,.91,G),q.rotateZ(Math.PI/6),l.add(q)}const A=new m(new Ee(.024,10,6,0,Math.PI*2,0,Math.PI/2),u);A.position.set(.35,.94,-.16);const D=new m(new E(.015,.005,.012),Ft);D.position.set(.33,.94,-.18),l.add(A,D);const M=.32,S=.22,L=.2,k=.58,B=.76,j=new m(new E(S,.016,M),Ft);j.position.set(k,B+L/2,0);const Z=new m(new E(S-.02,.012,M-.02),Ft);Z.position.set(k,B-L/2,0),l.add(j,Z);for(const G of[-S/2+.01,S/2-.01])for(const q of[-M/2+.01,M/2-.01]){const nt=new m(new W(.005,.005,L,4),Ft);nt.position.set(k+G,B,q),l.add(nt)}const H=new m(new E(S*.75,L*.65,M*.75),new I({color:16120058,roughness:.8}));H.position.set(k,B-.02,0),l.add(H);const Q=new m(new W(.024,.018,.06,10),Ft);Q.rotateZ(-Math.PI/2),Q.position.set(.66,.62,0);const Y=new m(new Sn(.022,10),ti);Y.rotateY(Math.PI/2),Y.position.set(.691,.62,0),l.add(Q,Y);const at=new m(new W(.013,.013,.16,8),Ft);at.position.set(-.19,.73,0),at.rotateZ(-.25);const ct=new m(new E(.24,.055,.17),d);ct.position.set(-.2,.81,0);for(const G of[-.045,.045]){const q=new m(new W(.016,.016,.04,8),Ft);q.position.set(-.26,.77,G),l.add(q)}l.add(at,ct);const pt=new m(new E(.44,.02,.14),Ft);pt.position.set(-.5,.73,0),l.add(pt);for(const G of[-.05,.05]){const q=new m(new W(.007,.007,.44,4),Ft);q.position.set(-.52,.52,G),q.rotateZ(.2),l.add(q)}const St=new m(new E(.48,.11,.03),f);St.position.set(-.28,.28,.04),l.add(St);for(const G of[-1,1]){const q=new m(new W(.008,.008,.14,6),Ft);q.position.set(-.06,.28+G*.06,G*.07);const nt=new m(new E(.08,.02,.06),h);nt.position.set(-.06,.28+G*.12,G*.1);const gt=new m(new E(.06,.01,.01),x);gt.position.set(-.06,.28+G*.12,G*.13),l.add(q,nt,gt)}const vt=new m(new W(.008,.008,.32,6),Ft);vt.position.set(-.46,.16,-.1),vt.rotateX(.38),l.add(vt);const V=new m(new W(.017,.017,.03,8),x);return V.position.set(-.16,.52,0),l.add(V),s&&s.add({id:`${i}-bell`,x:o,z:t,radius:1.8,prompt:"Ring Bicycle Bell",onInteract:()=>{a==null||a.playBikeBellSound(),r==null||r.show("*Riing-riing!* Japanese city commuter bicycle (Mamachari) with front grocery basket.")}}),l}function kx(o,t,n){const e=new Pt;if(e.position.set(o,.15,t),n==="bonsai"){const i=new I({color:2047064,roughness:.35,metalness:.15}),s=new m(new W(.24,.2,.08,14),i);s.position.set(0,.04,0),s.scale.set(1.3,1,.9);const r=new I({color:2243869,roughness:.9}),a=new m(new W(.22,.18,.04,12),r);a.position.set(0,.08,0),a.scale.set(1.25,1,.85),e.add(s,a);const l=new I({color:4007448,roughness:.9}),c=new m(new W(.025,.04,.22,7),l);c.position.set(0,.18,0),c.rotation.z=-.18;const f=new m(new W(.018,.025,.2,6),l);f.position.set(.04,.34,0),f.rotation.z=.28,e.add(c,f);const d=new I({color:1325858,roughness:.85});[{x:-.12,y:.28,z:.02,rx:.14,rz:.06},{x:.14,y:.38,z:-.04,rx:.16,rz:.07},{x:.02,y:.48,z:.02,rx:.2,rz:.08}].forEach(u=>{const g=new m(new W(u.rx,u.rx*.9,u.rz,10),d);g.position.set(u.x,u.y,u.z),e.add(g)})}else if(n==="hydrangea"){const i=new I({color:9063219,roughness:.8}),s=new m(new W(.22,.16,.38,12),i);s.position.set(0,.19,0),e.add(s);const r=new I({color:2055211,roughness:.7});for(let c=0;c<5;c++){const f=c*Math.PI*2/5,d=new m(new Ee(.14,6,6),r);d.scale.set(1.4,.3,.8),d.position.set(Math.cos(f)*.18,.38,Math.sin(f)*.18),d.rotation.y=-f,d.rotation.z=.35,e.add(d)}const a=[8162552,10980346,6333946];[{x:-.08,y:.52,z:.06,c:a[0]},{x:.09,y:.54,z:-.05,c:a[1]},{x:0,y:.62,z:0,c:a[2]}].forEach(c=>{const f=new I({color:c.c,roughness:.85}),d=new m(new Yn(.14,1),f);d.position.set(c.x,c.y,c.z),e.add(d)})}else if(n==="trough"){const i=new I({color:4862498,roughness:.85}),s=new m(new E(.65,.22,.25),i);s.position.set(0,.11,0),e.add(s);const r=new m(new E(.61,.04,.21),new I({color:2234384}));r.position.set(0,.21,0),e.add(r);const a=[16436245,16007006,16777215,11032055,16347926];for(let l=-.24;l<=.25;l+=.12){const c=a[Math.floor(Math.random()*a.length)],f=new m(new Yn(.06,1),new I({color:c}));f.position.set(l,.27,(Math.random()-.5)*.1),e.add(f)}}else if(n==="tall"){const i=new I({color:7226156,roughness:.8}),s=new m(new W(.18,.14,.42,10),i);s.position.set(0,.21,0),e.add(s);const r=new I({color:4028990,roughness:.5});for(const a of[-.06,.05]){const l=new m(new W(.015,.018,.9,6),r);l.position.set(a,.65,a*2*.03);const c=new m(new Ke(.16,.45,6),Rs);c.position.set(a,1.05,0),e.add(l,c)}}else{const i=new I({color:8146486,roughness:.85}),s=new m(new W(.2,.15,.35,10),i);s.position.set(0,.175,0);const r=new m(new Yn(.28,1),Rs);r.position.set(0,.45,0),e.add(s,r)}return e}function Bx(o,t){const n=new Pt;n.position.set(o,.15,t);const e=new I({color:1409085,roughness:.5}),i=new m(new W(.09,.1,.18,10),e);i.position.set(0,.09,0);const s=new $e(.08,.012,6,12,Math.PI),r=new m(s,e);r.position.set(0,.2,0),r.rotation.z=Math.PI/2;const a=new W(.01,.015,.22,6);a.rotateZ(-Math.PI/3);const l=new m(a,e);l.position.set(.12,.16,0);const c=new m(new W(.025,.015,.025,8),e);c.position.set(.21,.24,0),c.rotation.z=-Math.PI/3,n.add(i,r,l,c);const f=new I({color:366185,roughness:.6}),d=new m(new W(.16,.16,.12,12),f);d.rotation.x=Math.PI/2,d.position.set(-.35,.55,.28);const h=new I({color:1467700,roughness:.4}),u=new m(new $e(.14,.025,6,16),h);u.position.set(-.35,.55,.28);const g=new I({color:14251782,metalness:.8,roughness:.3}),x=new m(new W(.012,.012,.14,6),g);return x.position.set(-.24,.42,.28),n.add(d,u,x),n}function Gx(o,t,n,e,i){const s=new Pt;s.position.set(o,t,n),s.rotateY(e);const r=1.48,a=3.35,l=1.62,c=new E(r,.75,a),f=new m(c,wf);f.position.set(0,.55,0),f.castShadow=!0,s.add(f);const d=new E(r-.08,.72,a*.72),h=new m(d,wf);h.position.set(0,1.25,-.15),s.add(h);const u=new E(r-.04,.62,.06);u.rotateX(.2);const g=new m(u,_f);g.position.set(0,1.22,a*.72/2-.12),s.add(g);const x=new E(r-.04,.58,.06),w=new m(x,_f);w.position.set(0,1.25,-a*.72/2-.16),s.add(w);const p=new W(.26,.26,.18,12);p.rotateZ(Math.PI/2);const y=new I({color:1776411,roughness:.9});for(const j of[-r/2,r/2])for(const Z of[-a*.32,a*.32]){const H=new m(p,y);H.position.set(j,.26,Z),s.add(H)}const v=new E(.25,.18,.06),_=new Gt({color:16775912}),P=new m(v,_);P.position.set(-r/2+.24,.65,a/2+.01);const R=new m(v,_);R.position.set(r/2-.24,.65,a/2+.01),s.add(P,R);const A=new E(.2,.24,.06),D=new Gt({color:14489624}),M=new m(A,D);M.position.set(-r/2+.2,.75,-a/2-.01);const S=new m(A,D);S.position.set(r/2-.2,.75,-a/2-.01),s.add(M,S);const L=new E(.35,.18,.02),k=new m(L,ko);k.position.set(0,.38,a/2+.02);const B=new m(L,ko);return B.position.set(0,.42,-a/2-.02),s.add(k,B),i.add({minX:o-a/2-.1,minY:t,minZ:n-r/2-.1,maxX:o+a/2+.1,maxY:t+l,maxZ:n+r/2+.1}),s}function Cf(o,t,n,e){const i=new Pt;i.position.set(o,.15,t),i.rotateY(n);const s=3.4,r=new m(new W(.06,.06,s,10),Fe);r.position.set(0,s/2,0),i.add(r);const a=new W(.48,.52,.12,24);a.rotateX(Math.PI/2);const l=new m(a,sg);l.position.set(.35,s-.2,0),i.add(l);const c=new Ee(.44,24,12,0,Math.PI*2,0,Math.PI/3);c.rotateX(Math.PI/2);const f=new m(c,rg);return f.position.set(.35,s-.2,.04),i.add(f),e.add({minX:o-.25,minY:0,minZ:t-.25,maxX:o+.25,maxY:3.8,maxZ:t+.25}),i}function Hx(o,t){const n=new Pt;n.position.set(o,.15,t);const e=new qt(.72,.72),i=new Gt({map:Wg(),toneMapped:!1}),s=new m(e,i);s.position.set(0,1.4,.65),s.rotation.y=Math.PI,n.add(s);const r=new m(new E(.76,.76,.02),Ft);r.position.set(0,1.4,.66),n.add(r);const a=new I({color:15381256,roughness:.6}),l=new m(new E(.55,.32,.38),a);l.position.set(-.38,.16,.15),n.add(l);const c=[7877903,417606,1332013,9584654];for(let A=-.2;A<=.2;A+=.1){const D=c[Math.floor(Math.random()*c.length)],M=new I({color:D,roughness:.1,metalness:.1,transparent:!0,opacity:.85}),S=new m(new W(.03,.03,.22,8),M);S.position.set(-.38+A,.22,.15+(Math.random()-.5)*.1),n.add(S)}const f=new I({color:2450411,roughness:.6}),d=new m(new E(.55,.32,.38),f);d.position.set(.28,.16,.15),n.add(d);const h=[14251782,14427686,2450411,366185];for(let A=-.18;A<=.18;A+=.09){const D=h[Math.floor(Math.random()*h.length)],M=new m(new W(.028,.028,.14,8),new I({color:D,metalness:.6,roughness:.3}));M.position.set(.28+A,.18,.15+(Math.random()-.5)*.1),n.add(M)}const u=new I({color:16710083,roughness:.5,metalness:.05,transparent:!0,opacity:.85});[{x:-.25,y:.24,z:-.22,s:.24},{x:.22,y:.26,z:-.2,s:.26},{x:0,y:.22,z:-.28,s:.22}].forEach(A=>{const D=new Pt;D.position.set(A.x,A.y,A.z);const M=new m(new Yn(A.s,1),u);M.scale.set(1.1,.9,1.05);const S=new m(new Ke(.045,.09,6),u);S.position.set(0,A.s*.9,0),D.add(M,S),n.add(D)});const x=new I({map:Yg(),roughness:.8,transparent:!0,opacity:.85,side:pn}),w=new Ee(.78,16,12,0,Math.PI*2,0,Math.PI*.55);w.scale(1.3,.75,1.05);const p=new m(w,x);p.position.set(-.04,.08,-.04),n.add(p);const y=new I({color:413243,roughness:.9}),v=new m(new $e(.85,.022,6,24),y);v.rotation.x=Math.PI/2,v.scale.set(1.3,1.05,1),v.position.set(-.04,.02,-.04),n.add(v);const _=new Pt;_.position.set(.85,0,.45),_.rotation.z=-.15;const P=new m(new W(.012,.012,1.35,6),new I({color:10576391,roughness:.8}));P.position.set(0,.7,0);const R=new m(new Ke(.08,.35,8),new I({color:7877903,roughness:.9}));return R.position.set(0,.18,0),_.add(P,R),n.add(_),n}function Ed(o,t,n,e,i){const s=new Pt;s.position.set(o,.15,t);const r=.46,a=.95,l=.4,c=new I({map:Xg(),roughness:.4,metalness:.2}),f=new m(new E(r,a,l),c);f.position.set(0,a/2,0),s.add(f);const d=new I({color:1516884,roughness:.4}),h=new m(new E(r+.03,.06,l+.03),d);h.position.set(0,a+.03,0),s.add(h);const u=new I({color:132631,roughness:.8});for(const g of[-.12,.12]){const x=new m(new W(.05,.05,.02,12),u);x.position.set(g,a+.065,0),s.add(x)}return n.add({id:"alley-can-recycle",x:o,z:t,radius:1.8,prompt:"Recycle Can / Bottle [空き缶・ボトル回収]",onInteract:()=>{i&&i.playDeskBellSound(),e.show("空き缶・ペットボトル回収BOX: You recycle an empty canned drink with a satisfying *Clatter-clink!*")}}),s}function Vx(o,t,n,e){const i=new Pt;i.position.set(o,3.1,t);const s=new m(new W(.012,.012,.45,6),Fe);s.rotation.x=Math.PI/2,s.position.set(0,0,-.22),i.add(s);const r=new I({color:1259559,roughness:.35}),a=new m(new Ke(.24,.12,12,1,!0),r);a.position.set(0,-.06,0),i.add(a);const l=new m(new Ee(.045,8,8),ti);if(l.position.set(0,-.09,0),i.add(l),e)e.register({x:o,y:2.95,z:t,color:16753988,intensity:2.2,distance:8.5,decay:1.2,zone:"Street"});else{const c=new ve(16753988,2.2,8.5,1.2);c.position.set(0,-.15,0),i.add(c),n.push(c)}return i}function Wx(o,t,n,e){const i=[{x:13.8,z:3.8},{x:18.2,z:-3.8}];for(const s of i){const r=new Pt;r.position.set(s.x,.15,s.z);const a=new m(new W(.06,.06,3.2,8),Fe);a.position.set(0,1.6,0),r.add(a);const l=new m(new E(.2,.28,.14),ko);l.position.set(0,1.25,.08),r.add(l);const c=new m(new W(.04,.04,.03,10),Ft);c.rotateX(Math.PI/2),c.position.set(0,1.25,.16),r.add(c);const f=new m(new E(.32,.65,.22),Fe);f.position.set(0,2.8,0),r.add(f);const d=new m(new Sn(.1,12),new Gt({color:4521898}));d.position.set(0,2.65,.12),r.add(d),o.add(r),t.add({minX:s.x-.2,minY:0,minZ:s.z-.2,maxX:s.x+.2,maxY:3.5,maxZ:s.z+.2}),n.add({id:`signal-${s.x}`,x:s.x,z:s.z+.4,radius:1.6,prompt:"Push Pedestrian Crossing Button [押ボタン式]",onInteract:()=>{e.show('*Beep-Boop* "Omachi kudasai" (Please wait). Signal chime activates: *Piyo-piyo*')}})}}function Xx(o,t,n,e,i){const l=new Pt;l.position.set(6,.15,21.2);const c=new Pt,f=.52,d=.2,h=.4,u=.015,g=new I({map:Vg(),roughness:.88}),x=new I({color:13147500,roughness:.9}),w=new m(new E(f,u,h),g);w.position.set(0,u/2,0),c.add(w);const p=new m(new E(f,d,u),g);p.position.set(0,d/2,h/2-u/2);const y=new m(new E(f,d,u),g);y.position.set(0,d/2,-h/2+u/2);const v=new m(new E(u,d,h-u*2),g);v.position.set(-f/2+u/2,d/2,0);const _=new m(new E(u,d,h-u*2),g);_.position.set(f/2-u/2,d/2,0),c.add(p,y,v,_);const P=.08,R=new m(new E(f,u,P),x);R.position.set(0,d+.01,h/2+P*.4),R.rotation.x=.45;const A=new m(new E(f,u,P),x);A.position.set(0,d+.01,-h/2-P*.4),A.rotation.x=-.45;const D=new m(new E(P,u,h),x);D.position.set(-f/2-P*.4,d+.01,0),D.rotation.z=-.45;const M=new m(new E(P,u,h),x);M.position.set(f/2+P*.4,d+.01,0),M.rotation.z=.45,c.add(R,A,D,M);const S=new I({color:16643810,roughness:.95}),L=new m(new E(f-.06,.08,h-.06),S);L.position.set(0,.05,0),c.add(L),l.add(c);const k=new I({color:16317180,roughness:.25}),B=new m(new W(.1,.08,.035,16),k);B.position.set(-.42,.018,.06);const j=new I({color:7160611,roughness:.9}),Z=new m(new W(.085,.085,.02,12),j);Z.position.set(-.42,.032,.06),l.add(B,Z);const H=new I({color:14742270,roughness:.25}),Q=new m(new W(.09,.07,.045,16),H);Q.position.set(-.42,.0225,-.16);const Y=new m(new Sn(.08,16),new I({color:3718648,roughness:.1,metalness:.4,transparent:!0,opacity:.85}));Y.rotation.x=-Math.PI/2,Y.position.set(-.42,.04,-.16),l.add(Q,Y);const at=new I({color:13935475,roughness:.9}),ct=new m(new E(.12,.035,.32),at);ct.position.set(.38,.018,0),l.add(ct);const pt=new Pt;pt.position.set(0,.08,0);const St=new I({color:1579035,roughness:.82}),vt=new I({color:16317180,roughness:.85}),V=new I({color:16020150,roughness:.5}),G=new m(new Ee(.14,16,12),St);G.scale.set(.95,.76,1.25),G.position.set(0,.1,-.02),pt.add(G);const q=new m(new Ee(.09,12,8),vt);q.scale.set(.72,.72,.35),q.position.set(0,.11,.11),pt.add(q);const nt=new Ee(.038,10,8);nt.scale(.85,.55,1.25);const gt=new m(nt,vt);gt.position.set(-.065,.03,.12);const At=new m(nt,vt);At.position.set(.065,.03,.12),pt.add(gt,At);const ut=new Ee(.007,6,6);ut.scale(1,.6,1);for(const te of[-.065,.065])for(let Jt=-1;Jt<=1;Jt++){const T=new m(ut,V);T.position.set(te+Jt*.012,.032,.16),pt.add(T)}const Ut=new I({color:14427686,roughness:.4}),It=new m(new $e(.08,.011,6,16),Ut);It.position.set(0,.17,.09),It.rotation.x=.35,pt.add(It);const $t=new I({color:16436245,metalness:.85,roughness:.2}),U=new m(new Ee(.02,10,10),$t);U.position.set(0,.14,.16),pt.add(U);const Ht=new Pt;Ht.position.set(0,.22,.1);const Et=new m(new Ee(.115,16,14),St);Et.scale.set(1.05,.95,.98),Ht.add(Et);const Ot=new Ee(.036,10,8),Lt=new m(Ot,vt);Lt.position.set(-.032,-.026,.092);const Kt=new m(Ot,vt);Kt.position.set(.032,-.026,.092),Ht.add(Lt,Kt);const Tt=new Ke(.013,.014,3);Tt.rotateZ(Math.PI);const C=new m(Tt,V);C.position.set(0,-.014,.118),Ht.add(C);const b=new Gt({color:16777215}),X=new W(.0015,.0015,.11,4);X.rotateZ(Math.PI/2);for(const te of[-1,1])for(let Jt=-1;Jt<=1;Jt++){const T=new m(X,b);T.position.set(te*.075,-.024+Jt*.009,.095),T.rotation.z=te*(.15+Jt*.18),T.rotation.y=te*.35,Ht.add(T)}const it=new Pt;it.position.set(-.065,.085,.01);const ot=new Pt;ot.position.set(.065,.085,.01);const et=St,mt=new I({color:16361684,roughness:.65}),xt=new Ke(.038,.078,4),ft=new Ke(.026,.056,4),Rt=new m(xt,et);Rt.rotation.y=Math.PI/4;const lt=new m(ft,mt);lt.rotation.y=Math.PI/4,lt.position.set(0,-.004,.008),it.add(Rt,lt);const Mt=new m(xt,et);Mt.rotation.y=-Math.PI/4;const Zt=new m(ft,mt);Zt.rotation.y=-Math.PI/4,Zt.position.set(0,-.004,.008),ot.add(Mt,Zt),Ht.add(it,ot);const ie=new I({color:1096065,roughness:.2,emissive:366185,emissiveIntensity:.45}),Dt=new Gt({color:0}),Qt=new Gt({color:16777215}),Bt=[];for(const te of[-.044,.044]){const Jt=new Pt;Jt.position.set(te,.016,.098);const T=new m(new Ee(.024,12,10),ie);Jt.add(T);const F=new m(new E(.007,.032,.005),Dt);F.position.set(0,0,.022),Jt.add(F);const $=new m(new Ee(.005,6,6),Qt);$.position.set(-.007,.008,.023);const K=new m(new Ee(.0028,6,6),Qt);K.position.set(.005,-.006,.023),Jt.add($,K);const O=new Ee(.026,10,8,0,Math.PI*2,0,Math.PI*.52),dt=new m(O,St);dt.rotation.x=Math.PI/2,dt.position.set(0,.004,0),dt.scale.set(1.02,.01,1.02),Jt.add(dt),Bt.push(dt),Ht.add(Jt)}pt.add(Ht);const fe=new Pt;fe.position.set(0,.12,-.16);const z=St,bt=new W(.022,.026,.11,8);bt.translate(0,.055,0);const J=new m(bt,z);J.rotation.x=-.7,fe.add(J);const st=new Pt;st.position.set(0,.09,-.065);const _t=new W(.018,.022,.11,8);_t.translate(0,.055,0);const wt=new m(_t,z);wt.rotation.x=.5,st.add(wt);const Vt=new Pt;Vt.position.set(0,.09,.055);const le=new W(.012,.018,.1,8);le.translate(0,.05,0);const Ae=new m(le,vt);Ae.rotation.x=.8,Vt.add(Ae),st.add(Vt),fe.add(st),pt.add(fe),l.add(pt);const oe=new xd;oe.moveTo(.025,.025),oe.bezierCurveTo(.025,.025,.02,0,0,0),oe.bezierCurveTo(-.03,0,-.03,.035,-.03,.035),oe.bezierCurveTo(-.03,.055,-.01,.077,.025,.1),oe.bezierCurveTo(.06,.077,.08,.055,.08,.035),oe.bezierCurveTo(.08,.035,.08,0,.05,0),oe.bezierCurveTo(.035,0,.025,.025,.025,.025);const Ue=new Dl(oe);Ue.scale(.8,-.8,.8);const Ge=new Gt({color:16007006,side:pn,transparent:!0,opacity:0}),ln=[];for(let te=0;te<3;te++){const Jt=new m(Ue,Ge.clone());Jt.visible=!1,l.add(Jt),ln.push({mesh:Jt,vy:.35+te*.08,life:0,maxLife:1.6,baseX:(te-1)*.12,baseZ:te%2===0?.08:-.08})}const Oe=()=>{ln.forEach((te,Jt)=>{te.life=te.maxLife,te.mesh.visible=!0,te.mesh.position.set(te.baseX,.38+Jt*.05,te.baseZ);const T=te.mesh.material;T.opacity=1})};o.add(l);let Me=0,Xt=0;const he=['Kuro-chan (クロちゃん) leans gently into your hand, closes its emerald eyes, and lets out a warm, rumbling purr: "Nyaaa~~ ฅ(≈>ܫ<≈)ฅ"','You scratch Kuro-chan under its chin! The tiny brass bell tinkles softly as it purrs: "*Purrrrrr... Purrrrrr...*"','Kuro-chan rolls slightly onto its side on the warm fleece blanket, happily kneading its little white paws: "Mew! <3"','Kuro-chan nudges its nose against your fingers, completely relaxed in its Ehime Mikan box: "Purr-purr... Nyaa~"'];t.add({id:"stray-cat",x:6,z:21.2,radius:2,prompt:"Pet Kuro-chan the Alley Kitten [クロちゃんを撫でる]",onInteract:()=>{Xt=2.4,Oe(),i&&(i.playCatMeow(),setTimeout(()=>{i&&i.playCatPurr()},320));const te=he[Me%he.length];Me++,n.show(te)}});let se=0,ee=2.5,pe=!1,He=0,cn=4,ye=0;return{update:te=>{if(se+=te,G.scale.y=.76+Math.sin(se*2.2)*.024,G.position.y=.1+Math.sin(se*2.2)*.003,fe.rotation.y=Math.sin(se*1.8)*.22,st.rotation.y=Math.sin(se*1.8-.4)*.26,Vt.rotation.y=Math.sin(se*1.8-.8)*.32,ee-=te,ee<=0&&!pe&&(pe=!0,He=0),pe)if(He+=te*8,He>=Math.PI)pe=!1,ee=3+Math.random()*4,Bt.forEach(Jt=>Jt.scale.set(1.02,.01,1.02));else{const Jt=Math.sin(He)*.98+.01;Bt.forEach(T=>T.scale.set(1.02,Jt,1.02))}if(cn-=te,cn<=0&&ye<=0&&(ye=Math.PI*2,cn=3.5+Math.random()*5),ye>0){ye-=te*14;const Jt=Math.sin(ye)*.22;it.rotation.z=Math.max(0,Jt),ot.rotation.z=Math.min(0,-Jt*.7)}else it.rotation.z=0,ot.rotation.z=0;if(Xt>0)Xt-=te,Ht.rotation.x=-.22,Ht.rotation.z=.06*Math.sin(se*3),Bt.forEach(Jt=>Jt.scale.set(1.02,.85,1.02));else if(Ht.rotation.x=0,e){const Jt=e.x-6,T=e.z-21.2;if(Math.hypot(Jt,T)<4.2){const $=Math.atan2(Jt,T),K=Math.max(-1.3,Math.min(1.3,$));Ht.rotation.y=Xr.lerp(Ht.rotation.y,K,te*3.5),Ht.rotation.z=Math.sin(se*1.5)*.06}else Ht.rotation.y=Xr.lerp(Ht.rotation.y,0,te*2),Ht.rotation.z=Xr.lerp(Ht.rotation.z,0,te*2)}for(const Jt of ln)if(Jt.life>0){Jt.life-=te,Jt.mesh.position.y+=Jt.vy*te,Jt.mesh.position.x=Jt.baseX+Math.sin(Jt.life*4)*.03;const T=Jt.life/Jt.maxLife,F=Jt.mesh.material;F.opacity=Math.max(0,Math.min(1,T*1.5)),Jt.life<=0&&(Jt.mesh.visible=!1)}}}}class Yx{constructor(t,n="low"){ue(this,"scene");ue(this,"defs",[]);ue(this,"lowPool",[]);ue(this,"highLights",[]);ue(this,"POOL_SIZE",7);ue(this,"quality","low");ue(this,"updateTimer",0);ue(this,"lastUpdatePos",new N(-9999,-9999,-9999));this.scene=t,this.quality=n;for(let e=0;e<this.POOL_SIZE;e++){const i=new ve(16777215,0,10,1.2);i.position.set(0,-999,0),i.visible=this.quality==="low",t.add(i),this.lowPool.push(i)}}getQuality(){return this.quality}setQuality(t){if(this.quality!==t)if(this.quality=t,t==="high"){for(const n of this.lowPool)n.intensity=0,n.visible=!1,n.position.set(0,-999,0);for(const n of this.highLights)n.light.visible=!0,n.light.position.set(n.def.x,n.def.y,n.def.z),n.light.color.setHex(n.def.color),n.light.distance=n.def.distance,n.light.decay=n.def.decay??1.2,n.light.intensity=n.def.dynamicIntensity?n.def.dynamicIntensity():n.def.intensity}else{for(const n of this.highLights)n.light.visible=!1;for(const n of this.lowPool)n.visible=!0;this.lastUpdatePos.set(-9999,-9999,-9999)}}register(t){this.defs.push(t);const n=new ve(t.color,t.intensity,t.distance,t.decay??1.2);return n.position.set(t.x,t.y,t.z),n.visible=this.quality==="high",this.scene.add(n),this.highLights.push({def:t,light:n}),t}update(t,n,e,i=!1){if(this.quality==="high"){for(let a=0;a<this.highLights.length;a++){const l=this.highLights[a];l.def.dynamicIntensity&&(l.light.intensity=l.def.dynamicIntensity())}return}this.updateTimer+=t;const s=n.distanceToSquared(this.lastUpdatePos)>.16;if(!i&&!s&&this.updateTimer<.035)return;this.updateTimer=0,this.lastUpdatePos.copy(n);const r=[];for(let a=0;a<this.defs.length;a++){const l=this.defs[a],c=l.x-n.x,f=l.y-n.y,d=l.z-n.z,h=c*c+f*f+d*d,u=l.distance*1.55;if(h>u*u)continue;const g=Math.sqrt(h),x=l.dynamicIntensity?l.dynamicIntensity():l.intensity;if(x<=.01)continue;const w=1/(1+(g/l.distance)**2);let p=x*(1-g/u)*w;l.zone&&e.includes(l.zone)&&(p*=3),r.push({def:l,score:p,curIntensity:x})}r.sort((a,l)=>l.score-a.score);for(let a=0;a<this.POOL_SIZE;a++){const l=this.lowPool[a];if(a<r.length&&r[a].score>.005){const c=r[a];l.position.set(c.def.x,c.def.y,c.def.z),l.color.setHex(c.def.color),l.intensity=c.curIntensity,l.distance=c.def.distance,l.decay=c.def.decay??1.2}else l.intensity=0,l.position.set(0,-999,0)}}}class Zx{constructor(){ue(this,"ctx",null);ue(this,"ambientNode",null);ue(this,"stepTimer",0);ue(this,"stepInterval",.44)}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.startAmbience())}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startAmbience(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),e=n.getChannelData(0);let i=0;for(let a=0;a<t;a++){const l=Math.random()*2-1;e[a]=(i+.02*l)/1.02,i=e[a],e[a]*=3.5}const s=this.ctx.createBufferSource();s.buffer=n,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(140,this.ctx.currentTime),this.ambientNode=this.ctx.createGain(),this.ambientNode.gain.setValueAtTime(.18,this.ctx.currentTime),s.connect(r),r.connect(this.ambientNode),this.ambientNode.connect(this.ctx.destination),s.start()}updateFootsteps(t,n,e){if(!n){this.stepTimer=this.stepInterval*.75;return}this.stepTimer+=t,this.stepTimer>=this.stepInterval&&(this.stepTimer=0,this.playFootstep(e))}playFootstep(t){if(!this.ctx)return;const n=this.ctx.createOscillator(),e=this.ctx.createGain(),i=this.ctx.currentTime;t==="tile"?(n.frequency.setValueAtTime(320,i),n.frequency.exponentialRampToValueAtTime(80,i+.045),e.gain.setValueAtTime(.08,i),e.gain.exponentialRampToValueAtTime(.001,i+.045)):t==="walk"?(n.frequency.setValueAtTime(240,i),n.frequency.exponentialRampToValueAtTime(60,i+.055),e.gain.setValueAtTime(.1,i),e.gain.exponentialRampToValueAtTime(.001,i+.055)):t==="road"?(n.frequency.setValueAtTime(180,i),n.frequency.exponentialRampToValueAtTime(45,i+.065),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.065)):(n.frequency.setValueAtTime(140,i),n.frequency.exponentialRampToValueAtTime(50,i+.05),e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.05)),n.connect(e),e.connect(this.ctx.destination),n.start(i),n.stop(i+.07)}playVendingSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(2400,t),n.frequency.exponentialRampToValueAtTime(800,t+.03),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.04);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(280,t+.08),i.frequency.linearRampToValueAtTime(320,t+.25),s.gain.setValueAtTime(.08,t+.08),s.gain.linearRampToValueAtTime(.001,t+.28),i.connect(s),s.connect(this.ctx.destination),i.start(t+.08),i.stop(t+.29);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.frequency.setValueAtTime(180,t+.32),r.frequency.exponentialRampToValueAtTime(40,t+.45),a.gain.setValueAtTime(.35,t+.32),a.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(a),a.connect(this.ctx.destination),r.start(t+.32),r.stop(t+.46)}playElevatorChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(880,t),e.gain.setValueAtTime(.2,t),e.gain.exponentialRampToValueAtTime(.001,t+.6),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.65);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(659.25,t+.22),s.gain.setValueAtTime(.25,t+.22),s.gain.exponentialRampToValueAtTime(.001,t+.95),i.connect(s),s.connect(this.ctx.destination),i.start(t+.22),i.stop(t+1)}playCatMeow(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(550,t),n.frequency.linearRampToValueAtTime(820,t+.18),n.frequency.linearRampToValueAtTime(620,t+.42),e.gain.setValueAtTime(.01,t),e.gain.linearRampToValueAtTime(.18,t+.08),e.gain.linearRampToValueAtTime(.12,t+.28),e.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.46)}playCatPurr(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(85,t);const e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(26,t);const i=this.ctx.createGain();i.gain.setValueAtTime(35,t);const s=this.ctx.createGain();s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.22,t+.15),s.gain.setValueAtTime(.22,t+1.2),s.gain.exponentialRampToValueAtTime(.001,t+1.6),e.connect(i),i.connect(n.frequency),n.connect(s),s.connect(this.ctx.destination),e.start(t),n.start(t),e.stop(t+1.65),n.stop(t+1.65)}playCrosswalkChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(1800,t),n.frequency.exponentialRampToValueAtTime(1400,t+.12),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playFamilyMartChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=[{f:739.99,t:0,d:.18},{f:587.33,t:.18,d:.18},{f:440,t:.36,d:.18},{f:587.33,t:.54,d:.18},{f:659.25,t:.72,d:.18},{f:880,t:.9,d:.4},{f:659.25,t:1.35,d:.18},{f:739.99,t:1.53,d:.18},{f:659.25,t:1.71,d:.18},{f:440,t:1.89,d:.18},{f:587.33,t:2.07,d:.45}];for(const e of n){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e.f,t+e.t),s.gain.setValueAtTime(.16,t+e.t),s.gain.exponentialRampToValueAtTime(.001,t+e.t+e.d),i.connect(s),s.connect(this.ctx.destination),i.start(t+e.t),i.stop(t+e.t+e.d+.05)}}playSlidingDoorSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=Math.floor(this.ctx.sampleRate*.4),e=this.ctx.createBuffer(1,n,this.ctx.sampleRate),i=e.getChannelData(0);for(let l=0;l<n;l++)i[l]=(Math.random()*2-1)*(1-l/n);const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(800,t),r.Q.setValueAtTime(2,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.08,t),a.gain.linearRampToValueAtTime(.001,t+.38),s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(t)}playSipWaterSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(240,t+.14),e.gain.setValueAtTime(.12,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playDeskBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(2093,t),e.type="sine",e.frequency.setValueAtTime(3135,t),i.gain.setValueAtTime(.22,t),i.gain.exponentialRampToValueAtTime(.001,t+1.1),n.connect(i),e.connect(i),i.connect(this.ctx.destination),n.start(t),e.start(t),n.stop(t+1.1),e.stop(t+1.1)}playRamenTicketSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(587.33,t),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.12);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(880,t+.1),s.gain.setValueAtTime(.18,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(this.ctx.destination),i.start(t+.1),i.stop(t+.35);const r=Math.floor(this.ctx.sampleRate*.25),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),l=a.getChannelData(0);for(let h=0;h<r;h++)l[h]=(Math.random()*2-1)*Math.sin(h/r*Math.PI*40);const c=this.ctx.createBufferSource();c.buffer=a;const f=this.ctx.createBiquadFilter();f.type="bandpass",f.frequency.setValueAtTime(1400,t+.25);const d=this.ctx.createGain();d.gain.setValueAtTime(.08,t+.25),d.gain.linearRampToValueAtTime(.001,t+.5),c.connect(f),f.connect(d),d.connect(this.ctx.destination),c.start(t+.25)}playBikeBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let n=0;n<2;n++){const e=t+n*.12,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(2637,e),s.type="sine",s.frequency.setValueAtTime(4186,e),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),i.connect(r),s.connect(r),r.connect(this.ctx.destination),i.start(e),s.start(e),i.stop(e+.36),s.stop(e+.36)}}playFountainDrinkSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let i=0;i<4;i++){const s=t+i*.08,r=this.ctx.createOscillator(),a=this.ctx.createGain(),l=600+Math.random()*400;r.type="sine",r.frequency.setValueAtTime(l,s),r.frequency.exponentialRampToValueAtTime(l+250,s+.06),a.gain.setValueAtTime(.08,s),a.gain.exponentialRampToValueAtTime(.001,s+.06),r.connect(a),a.connect(this.ctx.destination),r.start(s),r.stop(s+.07)}const n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(260,t+.35),n.frequency.exponentialRampToValueAtTime(110,t+.5),e.gain.setValueAtTime(.12,t+.35),e.gain.exponentialRampToValueAtTime(.001,t+.52),n.connect(e),e.connect(this.ctx.destination),n.start(t+.35),n.stop(t+.53)}playSwingCreakSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(980,t),n.frequency.linearRampToValueAtTime(1420,t+.08),n.frequency.exponentialRampToValueAtTime(650,t+.22),e.gain.setValueAtTime(.05,t),e.gain.linearRampToValueAtTime(.08,t+.08),e.gain.exponentialRampToValueAtTime(.001,t+.24),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.25)}playSpringRockerSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(180,t),n.frequency.linearRampToValueAtTime(320,t+.06),n.frequency.exponentialRampToValueAtTime(90,t+.38),e.gain.setValueAtTime(.16,t),e.gain.exponentialRampToValueAtTime(.001,t+.4),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.42)}playSlideSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(420,t),n.frequency.exponentialRampToValueAtTime(140,t+.45),e.gain.setValueAtTime(.12,t),e.gain.linearRampToValueAtTime(.18,t+.1),e.gain.exponentialRampToValueAtTime(.001,t+.48),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.5)}}class qx{constructor(t){ue(this,"canvas");ue(this,"ctx");ue(this,"scale",3.2);ue(this,"lastX",-9999);ue(this,"lastZ",-9999);ue(this,"lastYaw",-9999);ue(this,"lastTime",0);this.canvas=t,this.canvas.width=256,this.canvas.height=256,this.ctx=t.getContext("2d")}update(t,n=!1){const e=performance.now();if(!n&&e-this.lastTime<50||!n&&Math.abs(t.x-this.lastX)<.04&&Math.abs(t.z-this.lastZ)<.04&&Math.abs(t.yaw-this.lastYaw)<.02)return;this.lastTime=e,this.lastX=t.x,this.lastZ=t.z,this.lastYaw=t.yaw;const i=this.ctx,s=this.canvas.width,r=this.canvas.height,a=s/2,l=r/2;i.fillStyle="#0a0e14",i.fillRect(0,0,s,r),i.save(),i.translate(a,l);const c=u=>(u-t.x)*this.scale,f=u=>(u-t.z)*this.scale;i.fillStyle="#181e28",i.fillRect(c(-55),f(-3.5),110*this.scale,7*this.scale),i.fillRect(c(13.5),f(3.5),5*this.scale,38.5*this.scale),i.fillRect(c(-16.5),f(-42),5*this.scale,38.5*this.scale),i.fillStyle="#222834",i.fillRect(c(-55),f(3.5),110*this.scale,4*this.scale),i.fillRect(c(-55),f(-7.5),110*this.scale,4*this.scale),i.fillRect(c(10.5),f(3.5),3*this.scale,38.5*this.scale),i.fillRect(c(18.5),f(3.5),3*this.scale,38.5*this.scale),i.fillRect(c(-19.5),f(-42),3*this.scale,38.5*this.scale),i.fillRect(c(-11.5),f(-42),3*this.scale,38.5*this.scale),i.fillRect(c(4),f(19.5),9.5*this.scale,3*this.scale),i.fillRect(c(-4),f(21.5),8*this.scale,3*this.scale),i.fillStyle="#222920",i.fillRect(c(-8.5),f(-36.5),18*this.scale,29*this.scale),i.strokeStyle="#2d5a3c",i.lineWidth=1.5,i.strokeRect(c(-8.5),f(-36.5),18*this.scale,29*this.scale),i.fillStyle="#343836",i.fillRect(c(-1.6),f(-18.6),3.2*this.scale,11.1*this.scale),i.fillRect(c(-3.1),f(-24.4),6.2*this.scale,5.8*this.scale),i.fillRect(c(-8.5),f(-23.3),5.4*this.scale,2.6*this.scale),i.fillRect(c(-.5),f(-30.7),3*this.scale,6.5*this.scale),i.fillStyle="#1a3d24",i.fillRect(c(2.3),f(-19.6),5.8*this.scale,7.2*this.scale),i.fillRect(c(-7.4),f(-17.6),4.8*this.scale,6.2*this.scale),i.fillStyle="#475569",i.strokeStyle="#94a3b8",i.lineWidth=1,i.fillRect(c(4.1),f(-34.1),4.2*this.scale,3.2*this.scale),i.strokeRect(c(4.1),f(-34.1),4.2*this.scale,3.2*this.scale),i.fillStyle="#ffffff";const d=[{x:16,z:0,w:4,d:7},{x:-14,z:0,w:4,d:7},{x:0,z:0,w:3.5,d:7},{x:16,z:5.5,w:5,d:3},{x:-14,z:-5.5,w:5,d:3}];for(const u of d)i.globalAlpha=.4,i.fillRect(c(u.x-u.w/2),f(u.z-u.d/2),u.w*this.scale,u.d*this.scale),i.globalAlpha=1;for(const u of Sd){const g=c(u.x-u.w/2),x=f(u.z-u.d/2),w=u.w*this.scale,p=u.d*this.scale;u.id==="b-sunheights"?(i.fillStyle="#1e384d",i.strokeStyle="#4da2d6"):u.id==="b-konbini"?(i.fillStyle="#14422e",i.strokeStyle="#32b87a"):u.id==="b-ramen"?(i.fillStyle="#4a201c",i.strokeStyle="#e04c3e"):u.id==="b-cafe"?(i.fillStyle="#3d2b1c",i.strokeStyle="#c4894d"):(i.fillStyle="#262d38",i.strokeStyle="#3d485a"),i.lineWidth=1.5,i.fillRect(g,x,w,p),i.strokeRect(g,x,w,p),i.font='10px "Yu Gothic UI", sans-serif',i.textAlign="center",i.textBaseline="middle",u.id==="b-sunheights"?(i.fillStyle="#78c6f7",i.fillText("🏠 サンハイツ",c(u.x),f(u.z))):u.id==="b-konbini"?(i.fillStyle="#5ee6a2",i.fillText("🏪 コンビニ",c(u.x),f(u.z))):u.id==="b-ramen"?(i.fillStyle="#ff8878",i.fillText("🍜 麺処",c(u.x),f(u.z))):u.id==="b-cafe"&&(i.fillStyle="#f0b878",i.fillText("☕ 喫茶",c(u.x),f(u.z)))}i.font='10px "Yu Gothic UI", sans-serif',i.fillStyle="#f472b6",i.fillText("🌸 桜公園",c(.5),f(-19)),i.fillStyle="#38bdf8",i.fillText("🛝 遊具",c(-2.5),f(-29)),i.fillStyle="#94a3b8",i.font='8px "Yu Gothic UI", sans-serif',i.fillText("🚻",c(6.2),f(-32.5)),i.restore(),i.save(),i.translate(a,l),i.rotate(-t.yaw);const h=i.createRadialGradient(0,0,2,0,0,36);h.addColorStop(0,"rgba(80, 210, 255, 0.45)"),h.addColorStop(1,"rgba(80, 210, 255, 0.0)"),i.beginPath(),i.moveTo(0,0),i.arc(0,0,36,-Math.PI/2-.45,-Math.PI/2+.45),i.closePath(),i.fillStyle=h,i.fill(),i.beginPath(),i.moveTo(0,-9),i.lineTo(6,6),i.lineTo(0,3),i.lineTo(-6,6),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.strokeStyle="#00aaff",i.lineWidth=1.5,i.stroke(),i.restore(),i.fillStyle="rgba(15, 20, 28, 0.75)",i.fillRect(s-28,6,22,22),i.strokeStyle="rgba(255, 255, 255, 0.2)",i.strokeRect(s-28,6,22,22),i.font="bold 11px sans-serif",i.fillStyle="#e85d4d",i.textAlign="center",i.textBaseline="middle",i.fillText("N",s-17,17)}}class $x{constructor(){ue(this,"locEl");ue(this,"crosshairEl");ue(this,"promptEl");ue(this,"toastEl");ue(this,"overlayEl");ue(this,"lastPrompt","");ue(this,"lastToast","");this.locEl=document.getElementById("location"),this.crosshairEl=document.getElementById("crosshair"),this.promptEl=document.getElementById("prompt"),this.toastEl=document.getElementById("toast"),this.overlayEl=document.getElementById("overlay")}update(t,n,e){var i,s;this.locEl&&this.locEl.textContent!==t&&(this.locEl.textContent=t),this.promptEl&&this.lastPrompt!==n&&(this.lastPrompt=n,n?(this.promptEl.innerHTML=`<kbd>E</kbd> ${n}`,(i=this.crosshairEl)==null||i.classList.add("active")):(this.promptEl.innerHTML="",(s=this.crosshairEl)==null||s.classList.remove("active"))),this.toastEl&&this.lastToast!==e&&(this.lastToast=e,this.toastEl.textContent=e)}showOverlay(){var t;(t=this.overlayEl)==null||t.classList.remove("hidden")}hideOverlay(){var t;(t=this.overlayEl)==null||t.classList.add("hidden")}isOverlayVisible(){var t;return!((t=this.overlayEl)!=null&&t.classList.contains("hidden"))}}async function Kx(){const o=new W2;o.background=new we(790551),o.fog=new Rl(790551,.022);const t=new Un(74,window.innerWidth/window.innerHeight,.1,Pn.isHigh()?180:90),n=new V2({antialias:!0,powerPreference:"high-performance"});n.setSize(window.innerWidth,window.innerHeight);const e=()=>Pn.isHigh()?Math.min(window.devicePixelRatio||1,1.5):Math.min(window.devicePixelRatio||1,1);let i=e();n.setPixelRatio(i),n.toneMapping=Df,n.toneMappingExposure=1.15,n.shadowMap.enabled=!0,n.shadowMap.type=If,n.shadowMap.autoUpdate=!1;const s=document.getElementById("app");s?s.appendChild(n.domElement):document.body.appendChild(n.domElement);const r=new M1(2635856,658708,.75);o.add(r);const a=new T1(8561876,.55);a.position.set(24,45,18),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=.5,a.shadow.camera.far=120,a.shadow.camera.left=-50,a.shadow.camera.right=50,a.shadow.camera.top=50,a.shadow.camera.bottom=-50,a.shadow.bias=-6e-4,o.add(a);let l=!0;R1();const c=new C1,f=new P1,d=new I1,h=new Zx,u=new $x,g=new URLSearchParams(window.location.search),x=g.get("room")==="1"||g.get("spawn")==="room",w=x?1.2:0,p=x?85.2:18.2,y=x?-Math.PI/2:Math.PI,v=new z1(w,p,y);v.applyCamera(t);const _=new Yx(o,Pn.getQuality());ix(o,c);const P=ax(o,c,f,d,h,_,v),R=xx(o,c,f,d,v,h,_),A=document.getElementById("minimap"),D=A?new qx(A):null;let M=!1;const S=()=>{document.pointerLockElement===document.body?(M=!0,u.hideOverlay(),h.init(),h.resume()):(M=!1,u.showOverlay())};document.addEventListener("pointerlockchange",S);const L=()=>{h.init(),h.resume(),document.body.requestPointerLock()};let k=1,B=0,j=0;const Z=document.getElementById("quality-btn"),H=document.getElementById("overlay-quality-btn"),Q=()=>{const ut=Pn.isHigh();Z&&(Z.textContent=ut?"✨ Graphics: High":"⚡ Graphics: Low",Z.classList.toggle("high",ut)),H&&(H.textContent=ut?"✨ High (Full Distance & Lighting)":"⚡ Low (Optimized for Laptops)",H.classList.toggle("high",ut))},Y=()=>{const ut=Pn.isHigh();t.far=ut?180:90,t.updateProjectionMatrix(),i=e(),k=1,n.setPixelRatio(i),_.setQuality(Pn.getQuality()),l=!0},at=()=>{const ut=Pn.toggleQuality();d.show(ut==="high"?"Graphics: High (Ultra) — Full lighting, extended draw distance & unculled interiors enabled!":"Graphics: Low (Performance) — Light pooling & interior distance culling enabled.",4)};Z&&Z.addEventListener("click",ut=>{ut.stopPropagation(),at()}),H&&H.addEventListener("click",ut=>{ut.stopPropagation(),at()}),Pn.onChange(()=>{Y(),Q()}),Q();const ct=document.getElementById("overlay");ct&&ct.addEventListener("click",ut=>{ut.target.closest("#overlay-quality-btn, #quality-btn, #exit-btn")||L()}),window.addEventListener("click",ut=>{if(!M){if(ut.target.closest("#overlay-quality-btn, #quality-btn, #exit-btn"))return;L()}}),window.addEventListener("mousemove",ut=>{M&&v.applyMouse(ut.movementX,ut.movementY)}),window.addEventListener("keydown",ut=>{if(ut.code==="KeyG"){at();return}if(ut.code==="KeyR"){const Ut=hf(v.x,v.z);h.init(),h.resume(),h.playElevatorChime(),Ut.includes("Suite 402")?(d.show("*Ding* Taking elevator down to 1F Entrance Lobby..."),setTimeout(()=>{v.teleport(0,18.2,Math.PI),d.show("1F Entrance Lobby. Step out to explore midnight Tokyo.",5)},400)):(d.show("*Ding* Taking elevator up to Suite 402..."),setTimeout(()=>{v.teleport(1.2,85.2,-Math.PI/2),d.show("Sun Heights Suite 402 (Executive Bedroom). Welcome home.",5)},400));return}if(ut.code==="KeyE"){const Ut=f.prompt().toLowerCase();Ut.includes("buy")||Ut.includes("coffee")||Ut.includes("tea")||Ut.includes("famichiki")||Ut.includes("chicken")?h.playVendingSound():Ut.includes("water")||Ut.includes("drink park")?h.playSipWaterSound():Ut.includes("elevator")?h.playElevatorChime():Ut.includes("cat")||Ut.includes("pet")?h.playCatMeow():Ut.includes("signal")||Ut.includes("crossing")||Ut.includes("button")?h.playCrosswalkChime():Ut.includes("slide")&&h.playSlideSound(),f.use()}}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(i*k),l=!0}),x?d.show("Welcome home to Suite 402. Explore your room, check the cyber workstation, or gaze off the balcony.",6):d.show("Welcome home to Tokyo. Walk through the front glass doors to explore, or take the elevator to Suite 402.",6);const pt=new E1,vt=1e3/120;let V=performance.now(),G=0,q=performance.now(),nt=120;const gt=document.getElementById("fps-badge");function At(ut){if(requestAnimationFrame(At),document.hidden)return;const Ut=M?vt:1e3/30,It=ut-V;if(It<Ut-1)return;V=ut-It%Ut,G++,ut-q>=1e3&&(nt=Math.round(G*1e3/(ut-q)),G=0,q=ut,gt&&(gt.textContent=`${nt} FPS`),Pn.isHigh()||(nt<22?(B++,j=0,B>=2&&k>.82&&(k=.82,n.setPixelRatio(i*k))):nt>=48?(j++,B=0,j>=3&&k<1&&(k=1,n.setPixelRatio(i*k))):(B=0,j=0)));const $t=Math.min(pt.getDelta(),.05);v.update($t,M,c),v.applyCamera(t),P.update($t,v),R.update($t),f.update(v,c),d.update($t);const U=M&&!v.seated&&v.moving();let Ht="walk";const Et=hf(v.x,v.z);_.update($t,t.position,Et),Et.includes("Lobby")||Et.includes("Store")||Et.includes("Ramen")?Ht="tile":Et.includes("Park")?Ht="park":Md(v.x,v.z)&&(Ht="road"),h.updateFootsteps($t,U,Ht),u.update(Et,f.prompt(),d.text),D&&D.update(v),l&&(n.shadowMap.needsUpdate=!0,l=!1),n.render(o,t)}requestAnimationFrame(At)}window.addEventListener("DOMContentLoaded",()=>{Kx().catch(o=>console.error("Initialization error:",o))});
