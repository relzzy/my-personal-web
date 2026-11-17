var Id=Object.defineProperty;var Ld=(o,t,n)=>t in o?Id(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var ue=(o,t,n)=>Ld(o,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="170",Dd=0,$l=1,Ud=2,Lf=1,Df=2,fi=3,Ii=0,Cn=1,pn=2,Ci=0,Ro=1,Ra=2,Kl=3,Jl=4,Nd=5,Ki=100,zd=101,Fd=102,kd=103,Od=104,Bd=200,Gd=201,Hd=202,Vd=203,Ca=204,Pa=205,Wd=206,Xd=207,Yd=208,Zd=209,qd=210,$d=211,Kd=212,Jd=213,jd=214,Ia=0,La=1,Da=2,Lo=3,Ua=4,Na=5,za=6,Fa=7,Uf=0,Qd=1,th=2,Pi=0,eh=1,nh=2,ih=3,Nf=4,oh=5,sh=6,rh=7,zf=300,Do=301,Uo=302,ka=303,Oa=304,Ir=306,Pe=1e3,Ri=1001,Ba=1002,Xn=1003,ah=1004,Ws=1005,Qn=1006,Wr=1007,ji=1008,mi=1009,Ff=1010,kf=1011,vs=1012,_l=1013,Qi=1014,di=1015,Rs=1016,yl=1017,vl=1018,No=1020,Of=35902,Bf=1021,Gf=1022,Wn=1023,Hf=1024,Vf=1025,Co=1026,zo=1027,Wf=1028,Ml=1029,Xf=1030,Sl=1031,bl=1033,vr=33776,Mr=33777,Sr=33778,br=33779,Ga=35840,Ha=35841,Va=35842,Wa=35843,Xa=36196,Ya=37492,Za=37496,qa=37808,$a=37809,Ka=37810,Ja=37811,ja=37812,Qa=37813,tl=37814,el=37815,nl=37816,il=37817,ol=37818,sl=37819,rl=37820,al=37821,Tr=36492,ll=36494,cl=36495,Yf=36283,fl=36284,dl=36285,hl=36286,lh=3200,ch=3201,Zf=0,fh=1,Ai="",xe="srgb",Oo="srgb-linear",Lr="linear",De="srgb",co=7680,jl=519,dh=512,hh=513,uh=514,qf=515,ph=516,mh=517,gh=518,xh=519,Ql=35044,tc="300 es",hi=2e3,Ar=2001;class Bo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(n)===-1&&e[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const i=e.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const ps=Math.PI/180,Ms=180/Math.PI;function no(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[e&255]+yn[e>>8&255]+yn[e>>16&255]+yn[e>>24&255]).toLowerCase()}function un(o,t,n){return Math.max(t,Math.min(n,o))}function Tl(o,t){return(o%t+t)%t}function wh(o,t,n,e,i){return e+(o-t)*(i-e)/(n-t)}function _h(o,t,n){return o!==t?(n-o)/(t-o):0}function ms(o,t,n){return(1-n)*o+n*t}function yh(o,t,n,e){return ms(o,t,1-Math.exp(-n*e))}function vh(o,t=1){return t-Math.abs(Tl(o,t*2)-t)}function Mh(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*(3-2*o))}function Sh(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*o*(o*(o*6-15)+10))}function bh(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Th(o,t){return o+Math.random()*(t-o)}function Eh(o){return o*(.5-Math.random())}function Ah(o){o!==void 0&&(ec=o);let t=ec+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rh(o){return o*ps}function Ch(o){return o*Ms}function Ph(o){return(o&o-1)===0&&o!==0}function Ih(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Lh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Dh(o,t,n,e,i){const s=Math.cos,r=Math.sin,a=s(n/2),l=r(n/2),c=s((t+e)/2),f=r((t+e)/2),d=s((t-e)/2),u=r((t-e)/2),h=s((e-t)/2),x=r((e-t)/2);switch(i){case"XYX":o.set(a*f,l*d,l*u,a*c);break;case"YZY":o.set(l*u,a*f,l*d,a*c);break;case"ZXZ":o.set(l*d,l*u,a*f,a*c);break;case"XZX":o.set(a*f,l*x,l*h,a*c);break;case"YXY":o.set(l*h,a*f,l*x,a*c);break;case"ZYZ":o.set(l*x,l*h,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function En(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Xr={DEG2RAD:ps,RAD2DEG:Ms,generateUUID:no,clamp:un,euclideanModulo:Tl,mapLinear:wh,inverseLerp:_h,lerp:ms,damp:yh,pingpong:vh,smoothstep:Mh,smootherstep:Sh,randInt:bh,randFloat:Th,randFloatSpread:Eh,seededRandom:Ah,degToRad:Rh,radToDeg:Ch,isPowerOfTwo:Ph,ceilPowerOfTwo:Ih,floorPowerOfTwo:Lh,setQuaternionFromProperEuler:Dh,normalize:En,denormalize:To};class jt{constructor(t=0,n=0){jt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,e=this.y,i=t.elements;return this.x=i[0]*n+i[3]*e+i[6],this.y=i[1]*n+i[4]*e+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(un(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y;return n*n+e*e}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const e=Math.cos(n),i=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*e-r*i+t.x,this.y=s*i+r*e+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t,n,e,i,s,r,a,l,c){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,e,i,s,r,a,l,c)}set(t,n,e,i,s,r,a,l,c){const f=this.elements;return f[0]=t,f[1]=i,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=e,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],this}extractBasis(t,n,e){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,i=n.elements,s=this.elements,r=e[0],a=e[3],l=e[6],c=e[1],f=e[4],d=e[7],u=e[2],h=e[5],x=e[8],w=i[0],g=i[3],m=i[6],v=i[1],y=i[4],_=i[7],P=i[2],C=i[5],A=i[8];return s[0]=r*w+a*v+l*P,s[3]=r*g+a*y+l*C,s[6]=r*m+a*_+l*A,s[1]=c*w+f*v+d*P,s[4]=c*g+f*y+d*C,s[7]=c*m+f*_+d*A,s[2]=u*w+h*v+x*P,s[5]=u*g+h*y+x*C,s[8]=u*m+h*_+x*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*a*c-e*s*f+e*a*l+i*s*c-i*r*l}invert(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8],d=f*r-a*c,u=a*l-f*s,h=c*s-r*l,x=n*d+e*u+i*h;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/x;return t[0]=d*w,t[1]=(i*c-f*e)*w,t[2]=(a*e-i*r)*w,t[3]=u*w,t[4]=(f*n-i*l)*w,t[5]=(i*s-a*n)*w,t[6]=h*w,t[7]=(e*l-c*n)*w,t[8]=(r*n-e*s)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,e,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(e*l,e*c,-e*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Yr.makeScale(t,n)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,n){return this.premultiply(Yr.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,e,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,e=t.elements;for(let i=0;i<9;i++)if(n[i]!==e[i])return!1;return!0}fromArray(t,n=0){for(let e=0;e<9;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new ge;function $f(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Rr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Uh(){const o=Rr("canvas");return o.style.display="block",o}const nc={};function ds(o){o in nc||(nc[o]=!0,console.warn(o))}function Nh(o,t,n){return new Promise(function(e,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:e()}}setTimeout(s,n)})}function zh(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fh(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ee={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(o,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===De&&(o.r=ui(o.r),o.g=ui(o.g),o.b=ui(o.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===De&&(o.r=Po(o.r),o.g=Po(o.g),o.b=Po(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ai?Lr:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,n){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function ui(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Po(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ic=[.64,.33,.3,.6,.15,.06],oc=[.2126,.7152,.0722],sc=[.3127,.329],rc=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee.define({[Oo]:{primaries:ic,whitePoint:sc,transfer:Lr,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:oc,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:ic,whitePoint:sc,transfer:De,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:oc,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});let fo;class kh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fo===void 0&&(fo=Rr("canvas")),fo.width=t.width,fo.height=t.height;const e=fo.getContext("2d");t instanceof ImageData?e.putImageData(t,0,0):e.drawImage(t,0,0,t.width,t.height),n=fo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Rr("canvas");n.width=t.width,n.height=t.height;const e=n.getContext("2d");e.drawImage(t,0,0,t.width,t.height);const i=e.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ui(s[r]/255)*255;return e.putImageData(i,0,0),n}else if(t.data){const n=t.data.slice(0);for(let e=0;e<n.length;e++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[e]=Math.floor(ui(n[e]/255)*255):n[e]=ui(n[e]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Oh=0;class Kf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=no(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const e={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Zr(i[r].image)):s.push(Zr(i[r]))}else s=Zr(i);e.url=s}return n||(t.images[this.uuid]=e),e}}function Zr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bh=0;class Pn extends Bo{constructor(t=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,e=Ri,i=Ri,s=Qn,r=ji,a=Wn,l=mi,c=Pn.DEFAULT_ANISOTROPY,f=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=no(),this.name="",this.source=new Kf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=e,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const e={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),n||(t.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pe:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pe:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=zf;Pn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,n=0,e=0,i=1){Ue.prototype.isVector4=!0,this.x=t,this.y=n,this.z=e,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,e,i){return this.x=t,this.y=n,this.z=e,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,e=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*e+r[8]*i+r[12]*s,this.y=r[1]*n+r[5]*e+r[9]*i+r[13]*s,this.z=r[2]*n+r[6]*e+r[10]*i+r[14]*s,this.w=r[3]*n+r[7]*e+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,e,i,s;const l=t.elements,c=l[0],f=l[4],d=l[8],u=l[1],h=l[5],x=l[9],w=l[2],g=l[6],m=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-w)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+w)<.1&&Math.abs(x+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(h+1)/2,P=(m+1)/2,C=(f+u)/4,A=(d+w)/4,D=(x+g)/4;return y>_&&y>P?y<.01?(e=0,i=.707106781,s=.707106781):(e=Math.sqrt(y),i=C/e,s=A/e):_>P?_<.01?(e=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),e=C/i,s=D/i):P<.01?(e=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),e=A/s,i=D/s),this.set(e,i,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(d-w)*(d-w)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(d-w)/v,this.z=(u-f)/v,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this.w=t.w+(n.w-t.w)*e,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gh extends Bo{constructor(t=1,n=1,e={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ue(0,0,t,n),this.scissorTest=!1,this.viewport=new Ue(0,0,t,n);const i={width:t,height:n,depth:1};e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},e);const s=new Pn(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace);s.flipY=!1,s.generateMipmaps=e.generateMipmaps,s.internalFormat=e.internalFormat,this.textures=[];const r=e.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.depthTexture=e.depthTexture,this.samples=e.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,e=1){if(this.width!==t||this.height!==n||this.depth!==e){this.width=t,this.height=n,this.depth=e;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=n,this.textures[i].image.depth=e;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++)this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Kf(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class to extends Gh{constructor(t=1,n=1,e={}){super(t,n,e),this.isWebGLRenderTarget=!0}}class Jf extends Pn{constructor(t=null,n=1,e=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:e,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hh extends Pn{constructor(t=null,n=1,e=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:e,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(t=0,n=0,e=0,i=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=e,this._w=i}static slerpFlat(t,n,e,i,s,r,a){let l=e[i+0],c=e[i+1],f=e[i+2],d=e[i+3];const u=s[r+0],h=s[r+1],x=s[r+2],w=s[r+3];if(a===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(a===1){t[n+0]=u,t[n+1]=h,t[n+2]=x,t[n+3]=w;return}if(d!==w||l!==u||c!==h||f!==x){let g=1-a;const m=l*u+c*h+f*x+d*w,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),C=Math.atan2(P,m*v);g=Math.sin(g*C)/P,a=Math.sin(a*C)/P}const _=a*v;if(l=l*g+u*_,c=c*g+h*_,f=f*g+x*_,d=d*g+w*_,g===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,e,i,s,r){const a=e[i],l=e[i+1],c=e[i+2],f=e[i+3],d=s[r],u=s[r+1],h=s[r+2],x=s[r+3];return t[n]=a*x+f*d+l*h-c*u,t[n+1]=l*x+f*u+c*d-a*h,t[n+2]=c*x+f*h+a*u-l*d,t[n+3]=f*x-a*d-l*u-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,e,i){return this._x=t,this._y=n,this._z=e,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const e=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(e/2),f=a(i/2),d=a(s/2),u=l(e/2),h=l(i/2),x=l(s/2);switch(r){case"XYZ":this._x=u*f*d+c*h*x,this._y=c*h*d-u*f*x,this._z=c*f*x+u*h*d,this._w=c*f*d-u*h*x;break;case"YXZ":this._x=u*f*d+c*h*x,this._y=c*h*d-u*f*x,this._z=c*f*x-u*h*d,this._w=c*f*d+u*h*x;break;case"ZXY":this._x=u*f*d-c*h*x,this._y=c*h*d+u*f*x,this._z=c*f*x+u*h*d,this._w=c*f*d-u*h*x;break;case"ZYX":this._x=u*f*d-c*h*x,this._y=c*h*d+u*f*x,this._z=c*f*x-u*h*d,this._w=c*f*d+u*h*x;break;case"YZX":this._x=u*f*d+c*h*x,this._y=c*h*d+u*f*x,this._z=c*f*x-u*h*d,this._w=c*f*d-u*h*x;break;case"XZY":this._x=u*f*d-c*h*x,this._y=c*h*d-u*f*x,this._z=c*f*x+u*h*d,this._w=c*f*d+u*h*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const e=n/2,i=Math.sin(e);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,e=n[0],i=n[4],s=n[8],r=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=e+a+d;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-c)*h,this._z=(r-i)*h}else if(e>a&&e>d){const h=2*Math.sqrt(1+e-a-d);this._w=(f-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-e-d);this._w=(s-c)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+d-e-a);this._w=(r-i)/h,this._x=(s+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let e=t.dot(n)+1;return e<Number.EPSILON?(e=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=e):(this._x=0,this._y=-t.z,this._z=t.y,this._w=e)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=e),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,n){const e=this.angleTo(t);if(e===0)return this;const i=Math.min(1,n/e);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const e=t._x,i=t._y,s=t._z,r=t._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=e*f+r*a+i*c-s*l,this._y=i*f+r*l+s*a-e*c,this._z=s*f+r*c+e*l-i*a,this._w=r*f-e*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const e=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+e*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=e,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*r+n*this._w,this._x=h*e+n*this._x,this._y=h*i+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,u=Math.sin(n*f)/c;return this._w=r*d+this._w*u,this._x=e*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,n,e){return this.copy(t).slerp(n,e)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,e=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=e}set(t,n,e){return e===void 0&&(e=this.z),this.x=t,this.y=n,this.z=e,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(lc.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(lc.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,e=this.y,i=this.z,s=t.elements;return this.x=s[0]*n+s[3]*e+s[6]*i,this.y=s[1]*n+s[4]*e+s[7]*i,this.z=s[2]*n+s[5]*e+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,e=this.y,i=this.z,s=t.elements,r=1/(s[3]*n+s[7]*e+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*e+s[8]*i+s[12])*r,this.y=(s[1]*n+s[5]*e+s[9]*i+s[13])*r,this.z=(s[2]*n+s[6]*e+s[10]*i+s[14])*r,this}applyQuaternion(t){const n=this.x,e=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*e),f=2*(a*n-s*i),d=2*(s*e-r*n);return this.x=n+l*c+r*d-a*f,this.y=e+l*f+a*c-s*d,this.z=i+l*d+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,e=this.y,i=this.z,s=t.elements;return this.x=s[0]*n+s[4]*e+s[8]*i,this.y=s[1]*n+s[5]*e+s[9]*i,this.z=s[2]*n+s[6]*e+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const e=t.x,i=t.y,s=t.z,r=n.x,a=n.y,l=n.z;return this.x=i*l-s*a,this.y=s*r-e*l,this.z=e*a-i*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const e=t.dot(this)/n;return this.copy(t).multiplyScalar(e)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(un(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y,i=this.z-t.z;return n*n+e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,e){const i=Math.sin(n)*t;return this.x=i*Math.sin(e),this.y=Math.cos(n)*t,this.z=i*Math.cos(e),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,e){return this.x=t*Math.sin(n),this.y=e,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),e=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=e,this.z=i,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,e=Math.sqrt(1-n*n);return this.x=e*Math.cos(t),this.y=n,this.z=e*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new N,lc=new Go;class Cs{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n+=3)this.expandByPoint(Bn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,e=t.count;n<e;n++)this.expandByPoint(Bn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const e=Bn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(e),this.max.copy(t).add(e),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const e=t.geometry;if(e!==void 0){const s=e.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Bn):Bn.fromBufferAttribute(s,r),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,e;return t.normal.x>0?(n=t.normal.x*this.min.x,e=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,e=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,e+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,e+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,e+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,e+=t.normal.z*this.min.z),n<=-t.constant&&e>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Ys.subVectors(this.max,os),ho.subVectors(t.a,os),uo.subVectors(t.b,os),po.subVectors(t.c,os),vi.subVectors(uo,ho),Mi.subVectors(po,uo),Hi.subVectors(ho,po);let n=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Hi.z,Hi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Hi.z,0,-Hi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Hi.y,Hi.x,0];return!$r(n,ho,uo,po,Ys)||(n=[1,0,0,0,1,0,0,0,1],!$r(n,ho,uo,po,Ys))?!1:(Zs.crossVectors(vi,Mi),n=[Zs.x,Zs.y,Zs.z],$r(n,ho,uo,po,Ys))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new N,new N,new N,new N,new N,new N,new N,new N],Bn=new N,Xs=new Cs,ho=new N,uo=new N,po=new N,vi=new N,Mi=new N,Hi=new N,os=new N,Ys=new N,Zs=new N,Vi=new N;function $r(o,t,n,e,i){for(let s=0,r=o.length-3;s<=r;s+=3){Vi.fromArray(o,s);const a=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=t.dot(Vi),c=n.dot(Vi),f=e.dot(Vi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Vh=new Cs,ss=new N,Kr=new N;class Dr{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const e=this.center;n!==void 0?e.copy(n):Vh.setFromPoints(t).getCenter(e);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,e.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const e=this.center.distanceToSquared(t);return n.copy(t),e>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const n=ss.lengthSq();if(n>this.radius*this.radius){const e=Math.sqrt(n),i=(e-this.radius)*.5;this.center.addScaledVector(ss,i/e),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Kr)),this.expandByPoint(ss.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new N,Jr=new N,qs=new N,Si=new N,jr=new N,$s=new N,Qr=new N;class jf{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const e=n.dot(this.direction);return e<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ri.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(t))}distanceSqToSegment(t,n,e,i){Jr.copy(t).add(n).multiplyScalar(.5),qs.copy(n).sub(t).normalize(),Si.copy(this.origin).sub(Jr);const s=t.distanceTo(n)*.5,r=-this.direction.dot(qs),a=Si.dot(this.direction),l=-Si.dot(qs),c=Si.lengthSq(),f=Math.abs(1-r*r);let d,u,h,x;if(f>0)if(d=r*l-a,u=r*a-l,x=s*f,d>=0)if(u>=-x)if(u<=x){const w=1/f;d*=w,u*=w,h=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*l)+c;return e&&e.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Jr).addScaledVector(qs,u),h}intersectSphere(t,n){ri.subVectors(t.center,this.origin);const e=ri.dot(this.direction),i=ri.dot(ri)-e*e,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=e-r,l=e+r;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const e=-(this.origin.dot(t.normal)+t.constant)/n;return e>=0?e:null}intersectPlane(t,n){const e=this.distanceToPlane(t);return e===null?null:this.at(e,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let e,i,s,r,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(e=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(e=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),f>=0?(s=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(s=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),e>r||s>i||((s>e||isNaN(e))&&(e=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),e>l||a>i)||((a>e||e!==e)&&(e=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(e>=0?e:i,n)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,n,e,i,s){jr.subVectors(n,t),$s.subVectors(e,t),Qr.crossVectors(jr,$s);let r=this.direction.dot(Qr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Si.subVectors(this.origin,t);const l=a*this.direction.dot($s.crossVectors(Si,$s));if(l<0)return null;const c=a*this.direction.dot(jr.cross(Si));if(c<0||l+c>r)return null;const f=-a*Si.dot(Qr);return f<0?null:this.at(f/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,n,e,i,s,r,a,l,c,f,d,u,h,x,w,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,e,i,s,r,a,l,c,f,d,u,h,x,w,g)}set(t,n,e,i,s,r,a,l,c,f,d,u,h,x,w,g){const m=this.elements;return m[0]=t,m[4]=n,m[8]=e,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=d,m[14]=u,m[3]=h,m[7]=x,m[11]=w,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],this}copyPosition(t){const n=this.elements,e=t.elements;return n[12]=e[12],n[13]=e[13],n[14]=e[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,e){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(t,n,e){return this.set(t.x,n.x,e.x,0,t.y,n.y,e.y,0,t.z,n.z,e.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,e=t.elements,i=1/mo.setFromMatrixColumn(t,0).length(),s=1/mo.setFromMatrixColumn(t,1).length(),r=1/mo.setFromMatrixColumn(t,2).length();return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=0,n[4]=e[4]*s,n[5]=e[5]*s,n[6]=e[6]*s,n[7]=0,n[8]=e[8]*r,n[9]=e[9]*r,n[10]=e[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,e=t.x,i=t.y,s=t.z,r=Math.cos(e),a=Math.sin(e),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*f,h=r*d,x=a*f,w=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=h+x*c,n[5]=u-w*c,n[9]=-a*l,n[2]=w-u*c,n[6]=x+h*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*f,h=l*d,x=c*f,w=c*d;n[0]=u+w*a,n[4]=x*a-h,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-a,n[2]=h*a-x,n[6]=w+u*a,n[10]=r*l}else if(t.order==="ZXY"){const u=l*f,h=l*d,x=c*f,w=c*d;n[0]=u-w*a,n[4]=-r*d,n[8]=x+h*a,n[1]=h+x*a,n[5]=r*f,n[9]=w-u*a,n[2]=-r*c,n[6]=a,n[10]=r*l}else if(t.order==="ZYX"){const u=r*f,h=r*d,x=a*f,w=a*d;n[0]=l*f,n[4]=x*c-h,n[8]=u*c+w,n[1]=l*d,n[5]=w*c+u,n[9]=h*c-x,n[2]=-c,n[6]=a*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,h=r*c,x=a*l,w=a*c;n[0]=l*f,n[4]=w-u*d,n[8]=x*d+h,n[1]=d,n[5]=r*f,n[9]=-a*f,n[2]=-c*f,n[6]=h*d+x,n[10]=u-w*d}else if(t.order==="XZY"){const u=r*l,h=r*c,x=a*l,w=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+w,n[5]=r*f,n[9]=h*d-x,n[2]=x*d-h,n[6]=a*f,n[10]=w*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wh,t,Xh)}lookAt(t,n,e){const i=this.elements;return Dn.subVectors(t,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),bi.crossVectors(e,Dn),bi.lengthSq()===0&&(Math.abs(e.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),bi.crossVectors(e,Dn)),bi.normalize(),Ks.crossVectors(Dn,bi),i[0]=bi.x,i[4]=Ks.x,i[8]=Dn.x,i[1]=bi.y,i[5]=Ks.y,i[9]=Dn.y,i[2]=bi.z,i[6]=Ks.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,i=n.elements,s=this.elements,r=e[0],a=e[4],l=e[8],c=e[12],f=e[1],d=e[5],u=e[9],h=e[13],x=e[2],w=e[6],g=e[10],m=e[14],v=e[3],y=e[7],_=e[11],P=e[15],C=i[0],A=i[4],D=i[8],S=i[12],M=i[1],L=i[5],F=i[9],B=i[13],Q=i[2],q=i[6],G=i[10],J=i[14],X=i[3],lt=i[7],dt=i[11],pt=i[15];return s[0]=r*C+a*M+l*Q+c*X,s[4]=r*A+a*L+l*q+c*lt,s[8]=r*D+a*F+l*G+c*dt,s[12]=r*S+a*B+l*J+c*pt,s[1]=f*C+d*M+u*Q+h*X,s[5]=f*A+d*L+u*q+h*lt,s[9]=f*D+d*F+u*G+h*dt,s[13]=f*S+d*B+u*J+h*pt,s[2]=x*C+w*M+g*Q+m*X,s[6]=x*A+w*L+g*q+m*lt,s[10]=x*D+w*F+g*G+m*dt,s[14]=x*S+w*B+g*J+m*pt,s[3]=v*C+y*M+_*Q+P*X,s[7]=v*A+y*L+_*q+P*lt,s[11]=v*D+y*F+_*G+P*dt,s[15]=v*S+y*B+_*J+P*pt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],f=t[2],d=t[6],u=t[10],h=t[14],x=t[3],w=t[7],g=t[11],m=t[15];return x*(+s*l*d-i*c*d-s*a*u+e*c*u+i*a*h-e*l*h)+w*(+n*l*h-n*c*u+s*r*u-i*r*h+i*c*f-s*l*f)+g*(+n*c*d-n*a*h-s*r*d+e*r*h+s*a*f-e*c*f)+m*(-i*a*f-n*l*d+n*a*u+i*r*d-e*r*u+e*l*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,e){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=n,i[14]=e),this}invert(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8],d=t[9],u=t[10],h=t[11],x=t[12],w=t[13],g=t[14],m=t[15],v=d*g*c-w*u*c+w*l*h-a*g*h-d*l*m+a*u*m,y=x*u*c-f*g*c-x*l*h+r*g*h+f*l*m-r*u*m,_=f*w*c-x*d*c+x*a*h-r*w*h-f*a*m+r*d*m,P=x*d*l-f*w*l-x*a*u+r*w*u+f*a*g-r*d*g,C=n*v+e*y+i*_+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=v*A,t[1]=(w*u*s-d*g*s-w*i*h+e*g*h+d*i*m-e*u*m)*A,t[2]=(a*g*s-w*l*s+w*i*c-e*g*c-a*i*m+e*l*m)*A,t[3]=(d*l*s-a*u*s-d*i*c+e*u*c+a*i*h-e*l*h)*A,t[4]=y*A,t[5]=(f*g*s-x*u*s+x*i*h-n*g*h-f*i*m+n*u*m)*A,t[6]=(x*l*s-r*g*s-x*i*c+n*g*c+r*i*m-n*l*m)*A,t[7]=(r*u*s-f*l*s+f*i*c-n*u*c-r*i*h+n*l*h)*A,t[8]=_*A,t[9]=(x*d*s-f*w*s-x*e*h+n*w*h+f*e*m-n*d*m)*A,t[10]=(r*w*s-x*a*s+x*e*c-n*w*c-r*e*m+n*a*m)*A,t[11]=(f*a*s-r*d*s-f*e*c+n*d*c+r*e*h-n*a*h)*A,t[12]=P*A,t[13]=(f*w*i-x*d*i+x*e*u-n*w*u-f*e*g+n*d*g)*A,t[14]=(x*a*i-r*w*i-x*e*l+n*w*l+r*e*g-n*a*g)*A,t[15]=(r*d*i-f*a*i+f*e*l-n*d*l-r*e*u+n*a*u)*A,this}scale(t){const n=this.elements,e=t.x,i=t.y,s=t.z;return n[0]*=e,n[4]*=i,n[8]*=s,n[1]*=e,n[5]*=i,n[9]*=s,n[2]*=e,n[6]*=i,n[10]*=s,n[3]*=e,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,e,i))}makeTranslation(t,n,e){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,e,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),e=Math.sin(t);return this.set(1,0,0,0,0,n,-e,0,0,e,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,0,e,0,0,1,0,0,-e,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,0,e,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const e=Math.cos(n),i=Math.sin(n),s=1-e,r=t.x,a=t.y,l=t.z,c=s*r,f=s*a;return this.set(c*r+e,c*a-i*l,c*l+i*a,0,c*a+i*l,f*a+e,f*l-i*r,0,c*l-i*a,f*l+i*r,s*l*l+e,0,0,0,0,1),this}makeScale(t,n,e){return this.set(t,0,0,0,0,n,0,0,0,0,e,0,0,0,0,1),this}makeShear(t,n,e,i,s,r){return this.set(1,e,s,0,t,1,r,0,n,i,1,0,0,0,0,1),this}compose(t,n,e){const i=this.elements,s=n._x,r=n._y,a=n._z,l=n._w,c=s+s,f=r+r,d=a+a,u=s*c,h=s*f,x=s*d,w=r*f,g=r*d,m=a*d,v=l*c,y=l*f,_=l*d,P=e.x,C=e.y,A=e.z;return i[0]=(1-(w+m))*P,i[1]=(h+_)*P,i[2]=(x-y)*P,i[3]=0,i[4]=(h-_)*C,i[5]=(1-(u+m))*C,i[6]=(g+v)*C,i[7]=0,i[8]=(x+y)*A,i[9]=(g-v)*A,i[10]=(1-(u+w))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,n,e){const i=this.elements;let s=mo.set(i[0],i[1],i[2]).length();const r=mo.set(i[4],i[5],i[6]).length(),a=mo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Gn.copy(this);const c=1/s,f=1/r,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),e.x=s,e.y=r,e.z=a,this}makePerspective(t,n,e,i,s,r,a=hi){const l=this.elements,c=2*s/(n-t),f=2*s/(e-i),d=(n+t)/(n-t),u=(e+i)/(e-i);let h,x;if(a===hi)h=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(a===Ar)h=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,e,i,s,r,a=hi){const l=this.elements,c=1/(n-t),f=1/(e-i),d=1/(r-s),u=(n+t)*c,h=(e+i)*f;let x,w;if(a===hi)x=(r+s)*d,w=-2*d;else if(a===Ar)x=s*d,w=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=w,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,e=t.elements;for(let i=0;i<16;i++)if(n[i]!==e[i])return!1;return!0}fromArray(t,n=0){for(let e=0;e<16;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t[n+9]=e[9],t[n+10]=e[10],t[n+11]=e[11],t[n+12]=e[12],t[n+13]=e[13],t[n+14]=e[14],t[n+15]=e[15],t}}const mo=new N,Gn=new ke,Wh=new N(0,0,0),Xh=new N(1,1,1),bi=new N,Ks=new N,Dn=new N,cc=new ke,fc=new Go;class qn{constructor(t=0,n=0,e=0,i=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=e,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,e,i=this._order){return this._x=t,this._y=n,this._z=e,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,e=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],f=i[9],d=i[2],u=i[6],h=i[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-un(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,e===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,e){return cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cc,n,e)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yh=0;const dc=new N,go=new Go,ai=new ke,Js=new N,rs=new N,Zh=new N,qh=new Go,hc=new N(1,0,0),uc=new N(0,1,0),pc=new N(0,0,1),mc={type:"added"},$h={type:"removed"},xo={type:"childadded",child:null},ta={type:"childremoved",child:null};class an extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new N,n=new qn,e=new Go,i=new N(1,1,1);function s(){e.setFromEuler(n,!1)}function r(){n.setFromQuaternion(e,void 0,!1)}n._onChange(s),e._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new ge}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return go.setFromAxisAngle(t,n),this.quaternion.multiply(go),this}rotateOnWorldAxis(t,n){return go.setFromAxisAngle(t,n),this.quaternion.premultiply(go),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(pc,t)}translateOnAxis(t,n){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,n,e){t.isVector3?Js.copy(t):Js.set(t,n,e);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(rs,Js,this.up):ai.lookAt(Js,rs,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),go.setFromRotationMatrix(ai),this.quaternion.premultiply(go.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mc),xo.child=t,this.dispatchEvent(xo),xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent($h),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mc),xo.child=t,this.dispatchEvent(xo),xo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let e=0,i=this.children.length;e<i;e++){const r=this.children[e].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,e=[]){this[t]===n&&e.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,n,e);return e}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].updateMatrixWorld(t)}updateWorldMatrix(t,n){const e=this.parent;if(t===!0&&e!==null&&e.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",e={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(n){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),u=r(t.skeletons),h=r(t.animations),x=r(t.nodes);a.length>0&&(e.geometries=a),l.length>0&&(e.materials=l),c.length>0&&(e.textures=c),f.length>0&&(e.images=f),d.length>0&&(e.shapes=d),u.length>0&&(e.skeletons=u),h.length>0&&(e.animations=h),x.length>0&&(e.nodes=x)}return e.object=i,e;function r(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let e=0;e<t.children.length;e++){const i=t.children[e];this.add(i.clone())}return this}}an.DEFAULT_UP=new N(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new N,li=new N,ea=new N,ci=new N,wo=new N,_o=new N,gc=new N,na=new N,ia=new N,oa=new N,sa=new Ue,ra=new Ue,aa=new Ue;class Vn{constructor(t=new N,n=new N,e=new N){this.a=t,this.b=n,this.c=e}static getNormal(t,n,e,i){i.subVectors(e,n),Hn.subVectors(t,n),i.cross(Hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,n,e,i,s){Hn.subVectors(i,n),li.subVectors(e,n),ea.subVectors(t,n);const r=Hn.dot(Hn),a=Hn.dot(li),l=Hn.dot(ea),c=li.dot(li),f=li.dot(ea),d=r*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,h=(c*l-a*f)*u,x=(r*f-a*l)*u;return s.set(1-h-x,x,h)}static containsPoint(t,n,e,i){return this.getBarycoord(t,n,e,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,n,e,i,s,r,a,l){return this.getBarycoord(t,n,e,i,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(r,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(t,n,e,i,s,r){return sa.setScalar(0),ra.setScalar(0),aa.setScalar(0),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(sa,s.x),r.addScaledVector(ra,s.y),r.addScaledVector(aa,s.z),r}static isFrontFacing(t,n,e,i){return Hn.subVectors(e,n),li.subVectors(t,n),Hn.cross(li).dot(i)<0}set(t,n,e){return this.a.copy(t),this.b.copy(n),this.c.copy(e),this}setFromPointsAndIndices(t,n,e,i){return this.a.copy(t[n]),this.b.copy(t[e]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,n,e,i){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,e),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Hn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Vn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,e,i,s){return Vn.getInterpolation(t,this.a,this.b,this.c,n,e,i,s)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const e=this.a,i=this.b,s=this.c;let r,a;wo.subVectors(i,e),_o.subVectors(s,e),na.subVectors(t,e);const l=wo.dot(na),c=_o.dot(na);if(l<=0&&c<=0)return n.copy(e);ia.subVectors(t,i);const f=wo.dot(ia),d=_o.dot(ia);if(f>=0&&d<=f)return n.copy(i);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(e).addScaledVector(wo,r);oa.subVectors(t,s);const h=wo.dot(oa),x=_o.dot(oa);if(x>=0&&h<=x)return n.copy(s);const w=h*c-l*x;if(w<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(e).addScaledVector(_o,a);const g=f*x-h*d;if(g<=0&&d-f>=0&&h-x>=0)return gc.subVectors(s,i),a=(d-f)/(d-f+(h-x)),n.copy(i).addScaledVector(gc,a);const m=1/(g+w+u);return r=w*m,a=u*m,n.copy(e).addScaledVector(wo,r).addScaledVector(_o,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},js={h:0,s:0,l:0};function la(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class _e{constructor(t,n,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,e)}set(t,n,e){if(n===void 0&&e===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,n,e);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,n),this}setRGB(t,n,e,i=Ee.workingColorSpace){return this.r=t,this.g=n,this.b=e,Ee.toWorkingColorSpace(this,i),this}setHSL(t,n,e,i=Ee.workingColorSpace){if(t=Tl(t,1),n=un(n,0,1),e=un(e,0,1),n===0)this.r=this.g=this.b=e;else{const s=e<=.5?e*(1+n):e+n-e*n,r=2*e-s;this.r=la(r,s,t+1/3),this.g=la(r,s,t),this.b=la(r,s,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,n=xe){function e(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=xe){const e=td[t.toLowerCase()];return e!==void 0?this.setHex(e,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Po(t.r),this.g=Po(t.g),this.b=Po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Ee.fromWorkingColorSpace(vn.copy(this),t),Math.round(un(vn.r*255,0,255))*65536+Math.round(un(vn.g*255,0,255))*256+Math.round(un(vn.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ee.workingColorSpace){Ee.fromWorkingColorSpace(vn.copy(this),n);const e=vn.r,i=vn.g,s=vn.b,r=Math.max(e,i,s),a=Math.min(e,i,s);let l,c;const f=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=f<=.5?d/(r+a):d/(2-r-a),r){case e:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-e)/d+2;break;case s:l=(e-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(vn.copy(this),n),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=xe){Ee.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,e=vn.g,i=vn.b;return t!==xe?`color(${t} ${n.toFixed(3)} ${e.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(e*255)},${Math.round(i*255)})`}offsetHSL(t,n,e){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+n,Ti.l+e)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,e){return this.r=t.r+(n.r-t.r)*e,this.g=t.g+(n.g-t.g)*e,this.b=t.b+(n.b-t.b)*e,this}lerpHSL(t,n){this.getHSL(Ti),t.getHSL(js);const e=ms(Ti.h,js.h,n),i=ms(Ti.s,js.s,n),s=ms(Ti.l,js.l,n);return this.setHSL(e,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,e=this.g,i=this.b,s=t.elements;return this.r=s[0]*n+s[3]*e+s[6]*i,this.g=s[1]*n+s[4]*e+s[7]*i,this.b=s[2]*n+s[5]*e+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new _e;_e.NAMES=td;let Kh=0;class Ho extends Bo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=no(),this.name="",this.blending=Ro,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const e=t[n];if(e===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(e):i&&i.isVector3&&e&&e.isVector3?i.copy(e):this[n]=e}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const e={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(e.dispersion=this.dispersion),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(t).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(t).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(t).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(t).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(t).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapRotation!==void 0&&(e.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(e.blending=this.blending),this.side!==Ii&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==Ca&&(e.blendSrc=this.blendSrc),this.blendDst!==Pa&&(e.blendDst=this.blendDst),this.blendEquation!==Ki&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(e.stencilFail=this.stencilFail),this.stencilZFail!==co&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(n){const s=i(t.textures),r=i(t.images);s.length>0&&(e.textures=s),r.length>0&&(e.images=r)}return e}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let e=null;if(n!==null){const i=n.length;e=new Array(i);for(let s=0;s!==i;++s)e[s]=n[s].clone()}return this.clippingPlanes=e,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends Ho{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new N,Qs=new jt;class Yn{constructor(t,n,e=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=e,this.usage=Ql,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,e){t*=this.itemSize,e*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=n.array[e+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,e=this.count;n<e;n++)Qs.fromBufferAttribute(this,n),Qs.applyMatrix3(t),this.setXY(n,Qs.x,Qs.y);else if(this.itemSize===3)for(let n=0,e=this.count;n<e;n++)Ke.fromBufferAttribute(this,n),Ke.applyMatrix3(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let n=0,e=this.count;n<e;n++)Ke.fromBufferAttribute(this,n),Ke.applyMatrix4(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let n=0,e=this.count;n<e;n++)Ke.fromBufferAttribute(this,n),Ke.applyNormalMatrix(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let n=0,e=this.count;n<e;n++)Ke.fromBufferAttribute(this,n),Ke.transformDirection(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let e=this.array[t*this.itemSize+n];return this.normalized&&(e=To(e,this.array)),e}setComponent(t,n,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+n]=e,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(t,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,e){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),e=En(e,this.array)),this.array[t+0]=n,this.array[t+1]=e,this}setXYZ(t,n,e,i){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),e=En(e,this.array),i=En(i,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=i,this}setXYZW(t,n,e,i,s){return t*=this.itemSize,this.normalized&&(n=En(n,this.array),e=En(e,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ql&&(t.usage=this.usage),t}}class ed extends Yn{constructor(t,n,e){super(new Uint16Array(t),n,e)}}class nd extends Yn{constructor(t,n,e){super(new Uint32Array(t),n,e)}}class Ie extends Yn{constructor(t,n,e){super(new Float32Array(t),n,e)}}let Jh=0;const kn=new ke,ca=new an,yo=new N,Un=new Cs,as=new Cs,rn=new N;class mn extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($f(t)?nd:ed)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,e=0){this.groups.push({start:t,count:n,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const e=this.attributes.normal;if(e!==void 0){const s=new ge().getNormalMatrix(t);e.applyNormalMatrix(s),e.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,n,e){return kn.makeTranslation(t,n,e),this.applyMatrix4(kn),this}scale(t,n,e){return kn.makeScale(t,n,e),this.applyMatrix4(kn),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ie(e,3))}else{for(let e=0,i=n.count;e<i;e++){const s=t[e];n.setXYZ(e,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,i=n.length;e<i;e++){const s=n[e];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const e=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const a=n[s];as.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Un.min,as.min),Un.expandByPoint(rn),rn.addVectors(Un.max,as.max),Un.expandByPoint(rn)):(Un.expandByPoint(as.min),Un.expandByPoint(as.max))}Un.getCenter(e);let i=0;for(let s=0,r=t.count;s<r;s++)rn.fromBufferAttribute(t,s),i=Math.max(i,e.distanceToSquared(rn));if(n)for(let s=0,r=n.length;s<r;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)rn.fromBufferAttribute(a,c),l&&(yo.fromBufferAttribute(t,c),rn.add(yo)),i=Math.max(i,e.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const e=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*e.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<e.count;D++)a[D]=new N,l[D]=new N;const c=new N,f=new N,d=new N,u=new jt,h=new jt,x=new jt,w=new N,g=new N;function m(D,S,M){c.fromBufferAttribute(e,D),f.fromBufferAttribute(e,S),d.fromBufferAttribute(e,M),u.fromBufferAttribute(s,D),h.fromBufferAttribute(s,S),x.fromBufferAttribute(s,M),f.sub(c),d.sub(c),h.sub(u),x.sub(u);const L=1/(h.x*x.y-x.x*h.y);isFinite(L)&&(w.copy(f).multiplyScalar(x.y).addScaledVector(d,-h.y).multiplyScalar(L),g.copy(d).multiplyScalar(h.x).addScaledVector(f,-x.x).multiplyScalar(L),a[D].add(w),a[S].add(w),a[M].add(w),l[D].add(g),l[S].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,S=v.length;D<S;++D){const M=v[D],L=M.start,F=M.count;for(let B=L,Q=L+F;B<Q;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new N,_=new N,P=new N,C=new N;function A(D){P.fromBufferAttribute(i,D),C.copy(P);const S=a[D];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(C,S);const L=_.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,S=v.length;D<S;++D){const M=v[D],L=M.start,F=M.count;for(let B=L,Q=L+F;B<Q;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let e=this.getAttribute("normal");if(e===void 0)e=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",e);else for(let u=0,h=e.count;u<h;u++)e.setXYZ(u,0,0,0);const i=new N,s=new N,r=new N,a=new N,l=new N,c=new N,f=new N,d=new N;if(t)for(let u=0,h=t.count;u<h;u+=3){const x=t.getX(u+0),w=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(n,x),s.fromBufferAttribute(n,w),r.fromBufferAttribute(n,g),f.subVectors(r,s),d.subVectors(i,s),f.cross(d),a.fromBufferAttribute(e,x),l.fromBufferAttribute(e,w),c.fromBufferAttribute(e,g),a.add(f),l.add(f),c.add(f),e.setXYZ(x,a.x,a.y,a.z),e.setXYZ(w,l.x,l.y,l.z),e.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)i.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,s),d.subVectors(i,s),f.cross(d),e.setXYZ(u+0,f.x,f.y,f.z),e.setXYZ(u+1,f.x,f.y,f.z),e.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,e=t.count;n<e;n++)rn.fromBufferAttribute(t,n),rn.normalize(),t.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let h=0,x=0;for(let w=0,g=l.length;w<g;w++){a.isInterleavedBufferAttribute?h=l[w]*a.data.stride+a.offset:h=l[w]*f;for(let m=0;m<f;m++)u[x++]=c[h++]}return new Yn(u,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,e=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,e);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],h=t(u,e);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const e=this.attributes;for(const l in e){const c=e[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const h=c[d];f.push(h.toJSON(t.data))}f.length>0&&(i[l]=f,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const e=t.index;e!==null&&this.setIndex(e.clone(n));const i=t.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(n))}const s=t.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,h=d.length;u<h;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,f=r.length;c<f;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new ke,Wi=new jf,tr=new Dr,wc=new N,er=new N,nr=new N,ir=new N,fa=new N,or=new N,_c=new N,sr=new N;class p extends an{constructor(t=new mn,n=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const i=n[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const e=this.geometry,i=e.attributes.position,s=e.morphAttributes.position,r=e.morphTargetsRelative;n.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(fa.fromBufferAttribute(d,t),r?or.addScaledVector(fa,f):or.addScaledVector(fa.sub(n),f))}n.add(or)}return n}raycast(t,n){const e=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere),tr.applyMatrix4(s),Wi.copy(t.ray).recast(t.near),!(tr.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(tr,wc)===null||Wi.origin.distanceToSquared(wc)>(t.far-t.near)**2))&&(xc.copy(s).invert(),Wi.copy(t.ray).applyMatrix4(xc),!(e.boundingBox!==null&&Wi.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(t,n,Wi)))}_computeIntersections(t,n,e){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(r))for(let x=0,w=u.length;x<w;x++){const g=u[x],m=r[g.materialIndex],v=Math.max(g.start,h.start),y=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let _=v,P=y;_<P;_+=3){const C=a.getX(_),A=a.getX(_+1),D=a.getX(_+2);i=rr(this,m,t,e,c,f,d,C,A,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const x=Math.max(0,h.start),w=Math.min(a.count,h.start+h.count);for(let g=x,m=w;g<m;g+=3){const v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);i=rr(this,r,t,e,c,f,d,v,y,_),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,w=u.length;x<w;x++){const g=u[x],m=r[g.materialIndex],v=Math.max(g.start,h.start),y=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let _=v,P=y;_<P;_+=3){const C=_,A=_+1,D=_+2;i=rr(this,m,t,e,c,f,d,C,A,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const x=Math.max(0,h.start),w=Math.min(l.count,h.start+h.count);for(let g=x,m=w;g<m;g+=3){const v=g,y=g+1,_=g+2;i=rr(this,r,t,e,c,f,d,v,y,_),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function jh(o,t,n,e,i,s,r,a){let l;if(t.side===Cn?l=e.intersectTriangle(r,s,i,!0,a):l=e.intersectTriangle(i,s,r,t.side===Ii,a),l===null)return null;sr.copy(a),sr.applyMatrix4(o.matrixWorld);const c=n.ray.origin.distanceTo(sr);return c<n.near||c>n.far?null:{distance:c,point:sr.clone(),object:o}}function rr(o,t,n,e,i,s,r,a,l,c){o.getVertexPosition(a,er),o.getVertexPosition(l,nr),o.getVertexPosition(c,ir);const f=jh(o,t,n,e,er,nr,ir,_c);if(f){const d=new N;Vn.getBarycoord(_c,er,nr,ir,d),i&&(f.uv=Vn.getInterpolatedAttribute(i,a,l,c,d,new jt)),s&&(f.uv1=Vn.getInterpolatedAttribute(s,a,l,c,d,new jt)),r&&(f.normal=Vn.getInterpolatedAttribute(r,a,l,c,d,new N),f.normal.dot(e.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};Vn.getNormal(er,nr,ir,u.normal),f.face=u,f.barycoord=d}return f}class T extends mn{constructor(t=1,n=1,e=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:e,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],f=[],d=[];let u=0,h=0;x("z","y","x",-1,-1,e,n,t,r,s,0),x("z","y","x",1,-1,e,n,-t,r,s,1),x("x","z","y",1,1,t,e,n,i,r,2),x("x","z","y",1,-1,t,e,-n,i,r,3),x("x","y","z",1,-1,t,n,e,i,s,4),x("x","y","z",-1,-1,t,n,-e,i,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function x(w,g,m,v,y,_,P,C,A,D,S){const M=_/A,L=P/D,F=_/2,B=P/2,Q=C/2,q=A+1,G=D+1;let J=0,X=0;const lt=new N;for(let dt=0;dt<G;dt++){const pt=dt*L-B;for(let Et=0;Et<q;Et++){const yt=Et*M-F;lt[w]=yt*v,lt[g]=pt*y,lt[m]=Q,c.push(lt.x,lt.y,lt.z),lt[w]=0,lt[g]=0,lt[m]=C>0?1:-1,f.push(lt.x,lt.y,lt.z),d.push(Et/A),d.push(1-dt/D),J+=1}}for(let dt=0;dt<D;dt++)for(let pt=0;pt<A;pt++){const Et=u+pt+q*dt,yt=u+pt+q*(dt+1),H=u+(pt+1)+q*(dt+1),W=u+(pt+1)+q*dt;l.push(Et,yt,W),l.push(yt,H,W),X+=6}a.addGroup(h,X,S),h+=X,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new T(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fo(o){const t={};for(const n in o){t[n]={};for(const e in o[n]){const i=o[n][e];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][e]=null):t[n][e]=i.clone():Array.isArray(i)?t[n][e]=i.slice():t[n][e]=i}}return t}function An(o){const t={};for(let n=0;n<o.length;n++){const e=Fo(o[n]);for(const i in e)t[i]=e[i]}return t}function Qh(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function id(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const t0={clone:Fo,merge:An};var e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Ho{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fo(t.uniforms),this.uniformsGroups=Qh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?n.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[i]={type:"m4",value:r.toArray()}:n.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const e={};for(const i in this.extensions)this.extensions[i]===!0&&(e[i]=!0);return Object.keys(e).length>0&&(n.extensions=e),n}}class od extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=hi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new N,yc=new jt,vc=new jt;class Nn extends od{constructor(t=50,n=1,e=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=e,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,e){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,n){return this.getViewBounds(t,yc,vc),n.subVectors(vc,yc)}setViewOffset(t,n,e,i,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ps*.5*this.fov)/this.zoom,e=2*n,i=this.aspect*e,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,n-=r.offsetY*e/c,i*=r.width/l,e*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-e,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vo=-90,Mo=1;class i0 extends an{constructor(t,n,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nn(vo,Mo,t,n);i.layers=this.layers,this.add(i);const s=new Nn(vo,Mo,t,n);s.layers=this.layers,this.add(s);const r=new Nn(vo,Mo,t,n);r.layers=this.layers,this.add(r);const a=new Nn(vo,Mo,t,n);a.layers=this.layers,this.add(a);const l=new Nn(vo,Mo,t,n);l.layers=this.layers,this.add(l);const c=new Nn(vo,Mo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[e,i,s,r,a,l]=n;for(const c of n)this.remove(c);if(t===hi)e.up.set(0,1,0),e.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)e.up.set(0,-1,0),e.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:e,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,f]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const w=e.texture.generateMipmaps;e.texture.generateMipmaps=!1,t.setRenderTarget(e,0,i),t.render(n,s),t.setRenderTarget(e,1,i),t.render(n,r),t.setRenderTarget(e,2,i),t.render(n,a),t.setRenderTarget(e,3,i),t.render(n,l),t.setRenderTarget(e,4,i),t.render(n,c),e.texture.generateMipmaps=w,t.setRenderTarget(e,5,i),t.render(n,f),t.setRenderTarget(d,u,h),t.xr.enabled=x,e.texture.needsPMREMUpdate=!0}}class sd extends Pn{constructor(t,n,e,i,s,r,a,l,c,f){t=t!==void 0?t:[],n=n!==void 0?n:Do,super(t,n,e,i,s,r,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class o0 extends to{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const e={width:t,height:t,depth:1},i=[e,e,e,e,e,e];this.texture=new sd(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const e={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new T(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Fo(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Cn,blending:Ci});s.uniforms.tEquirect.value=n;const r=new p(i,s),a=n.minFilter;return n.minFilter===ji&&(n.minFilter=Qn),new i0(1,10,this).update(t,r),n.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,e,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,e,i);t.setRenderTarget(s)}}const da=new N,s0=new N,r0=new ge;class qi{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,e,i){return this.normal.set(t,n,e),this.constant=i,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,e){const i=da.subVectors(e,n).cross(s0.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const e=t.delta(da),i=this.normal.dot(e);if(i===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(t.start).addScaledVector(e,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),e=this.distanceToPoint(t.end);return n<0&&e>0||e<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const e=n||r0.getNormalMatrix(t),i=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(e).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Dr,ar=new N;class El{constructor(t=new qi,n=new qi,e=new qi,i=new qi,s=new qi,r=new qi){this.planes=[t,n,e,i,s,r]}set(t,n,e,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(e),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const n=this.planes;for(let e=0;e<6;e++)n[e].copy(t.planes[e]);return this}setFromProjectionMatrix(t,n=hi){const e=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],f=i[5],d=i[6],u=i[7],h=i[8],x=i[9],w=i[10],g=i[11],m=i[12],v=i[13],y=i[14],_=i[15];if(e[0].setComponents(l-s,u-c,g-h,_-m).normalize(),e[1].setComponents(l+s,u+c,g+h,_+m).normalize(),e[2].setComponents(l+r,u+f,g+x,_+v).normalize(),e[3].setComponents(l-r,u-f,g-x,_-v).normalize(),e[4].setComponents(l-a,u-d,g-w,_-y).normalize(),n===hi)e[5].setComponents(l+a,u+d,g+w,_+y).normalize();else if(n===Ar)e[5].setComponents(a,d,w,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const n=this.planes,e=t.center,i=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<i)return!1;return!0}intersectsBox(t){const n=this.planes;for(let e=0;e<6;e++){const i=n[e];if(ar.x=i.normal.x>0?t.max.x:t.min.x,ar.y=i.normal.y>0?t.max.y:t.min.y,ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let e=0;e<6;e++)if(n[e].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rd(){let o=null,t=!1,n=null,e=null;function i(s,r){n(s,r),e=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(e=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(e),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){o=s}}}function a0(o){const t=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=o.createBuffer();o.bindBuffer(l,u),o.bufferData(l,c,f),a.onUploadCallback();let h;if(c instanceof Float32Array)h=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=o.HALF_FLOAT:h=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=o.SHORT;else if(c instanceof Uint32Array)h=o.UNSIGNED_INT;else if(c instanceof Int32Array)h=o.INT;else if(c instanceof Int8Array)h=o.BYTE;else if(c instanceof Uint8Array)h=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function e(a,l,c){const f=l.array,d=l.updateRanges;if(o.bindBuffer(c,a),d.length===0)o.bufferSubData(c,0,f);else{d.sort((h,x)=>h.start-x.start);let u=0;for(let h=1;h<d.length;h++){const x=d[u],w=d[h];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++u,d[u]=w)}d.length=u+1;for(let h=0,x=d.length;h<x;h++){const w=d[h];o.bufferSubData(c,w.start*f.BYTES_PER_ELEMENT,f,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");e(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class Xt extends mn{constructor(t=1,n=1,e=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:e,heightSegments:i};const s=t/2,r=n/2,a=Math.floor(e),l=Math.floor(i),c=a+1,f=l+1,d=t/a,u=n/l,h=[],x=[],w=[],g=[];for(let m=0;m<f;m++){const v=m*u-r;for(let y=0;y<c;y++){const _=y*d-s;x.push(_,-v,0),w.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const y=v+c*m,_=v+c*(m+1),P=v+1+c*(m+1),C=v+1+c*m;h.push(y,_,C),h.push(_,P,C)}this.setIndex(h),this.setAttribute("position",new Ie(x,3)),this.setAttribute("normal",new Ie(w,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.widthSegments,t.heightSegments)}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,su=`PhysicalMaterial material;
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
#endif`,ru=`struct PhysicalMaterial {
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
}`,au=`
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
#endif`,lu=`#if defined( RE_IndirectDiffuse )
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,du=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xu=`#if defined( USE_POINTS_UV )
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
#endif`,wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Su=`#ifdef USE_MORPHTARGETS
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
#endif`,bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pu=`#ifdef USE_NORMALMAP
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
#endif`,Iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ou=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yu=`float getShadowMask() {
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
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qu=`#ifdef USE_SKINNING
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
#endif`,$u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ku=`#ifdef USE_SKINNING
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
#endif`,Ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lp=`uniform sampler2D t2D;
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
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
}`,pp=`#if DEPTH_PACKING == 3200
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
}`,mp=`#define DISTANCE
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
}`,gp=`#define DISTANCE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`uniform float scale;
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
}`,yp=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,Tp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,Ap=`#define NORMAL
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
}`,Rp=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Pp=`#define PHONG
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
}`,Ip=`#define STANDARD
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
}`,Lp=`#define STANDARD
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
}`,Dp=`#define TOON
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
}`,Up=`#define TOON
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
}`,Np=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,kp=`uniform vec3 color;
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
}`,Op=`uniform float rotation;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:l0,alphahash_pars_fragment:c0,alphamap_fragment:f0,alphamap_pars_fragment:d0,alphatest_fragment:h0,alphatest_pars_fragment:u0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:x0,begin_vertex:w0,beginnormal_vertex:_0,bsdfs:y0,iridescence_fragment:v0,bumpmap_pars_fragment:M0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:E0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:I0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:D0,displacementmap_pars_vertex:U0,displacementmap_vertex:N0,emissivemap_fragment:z0,emissivemap_pars_fragment:F0,colorspace_fragment:k0,colorspace_pars_fragment:O0,envmap_fragment:B0,envmap_common_pars_fragment:G0,envmap_pars_fragment:H0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:tu,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:Y0,fog_fragment:Z0,fog_pars_fragment:q0,gradientmap_pars_fragment:$0,lightmap_pars_fragment:K0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:j0,lights_pars_begin:Q0,lights_toon_fragment:eu,lights_toon_pars_fragment:nu,lights_phong_fragment:iu,lights_phong_pars_fragment:ou,lights_physical_fragment:su,lights_physical_pars_fragment:ru,lights_fragment_begin:au,lights_fragment_maps:lu,lights_fragment_end:cu,logdepthbuf_fragment:fu,logdepthbuf_pars_fragment:du,logdepthbuf_pars_vertex:hu,logdepthbuf_vertex:uu,map_fragment:pu,map_pars_fragment:mu,map_particle_fragment:gu,map_particle_pars_fragment:xu,metalnessmap_fragment:wu,metalnessmap_pars_fragment:_u,morphinstance_vertex:yu,morphcolor_vertex:vu,morphnormal_vertex:Mu,morphtarget_pars_vertex:Su,morphtarget_vertex:bu,normal_fragment_begin:Tu,normal_fragment_maps:Eu,normal_pars_fragment:Au,normal_pars_vertex:Ru,normal_vertex:Cu,normalmap_pars_fragment:Pu,clearcoat_normal_fragment_begin:Iu,clearcoat_normal_fragment_maps:Lu,clearcoat_pars_fragment:Du,iridescence_pars_fragment:Uu,opaque_fragment:Nu,packing:zu,premultiplied_alpha_fragment:Fu,project_vertex:ku,dithering_fragment:Ou,dithering_pars_fragment:Bu,roughnessmap_fragment:Gu,roughnessmap_pars_fragment:Hu,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:Wu,shadowmap_vertex:Xu,shadowmask_pars_fragment:Yu,skinbase_vertex:Zu,skinning_pars_vertex:qu,skinning_vertex:$u,skinnormal_vertex:Ku,specularmap_fragment:Ju,specularmap_pars_fragment:ju,tonemapping_fragment:Qu,tonemapping_pars_fragment:tp,transmission_fragment:ep,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:op,uv_vertex:sp,worldpos_vertex:rp,background_vert:ap,background_frag:lp,backgroundCube_vert:cp,backgroundCube_frag:fp,cube_vert:dp,cube_frag:hp,depth_vert:up,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:xp,equirect_frag:wp,linedashed_vert:_p,linedashed_frag:yp,meshbasic_vert:vp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:bp,meshmatcap_vert:Tp,meshmatcap_frag:Ep,meshnormal_vert:Ap,meshnormal_frag:Rp,meshphong_vert:Cp,meshphong_frag:Pp,meshphysical_vert:Ip,meshphysical_frag:Lp,meshtoon_vert:Dp,meshtoon_frag:Up,points_vert:Np,points_frag:zp,shadow_vert:Fp,shadow_frag:kp,sprite_vert:Op,sprite_frag:Bp},Gt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},jn={basic:{uniforms:An([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:An([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:An([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:An([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:An([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:An([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:An([Gt.points,Gt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:An([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:An([Gt.common,Gt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:An([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:An([Gt.sprite,Gt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:An([Gt.common,Gt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:An([Gt.lights,Gt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};jn.physical={uniforms:An([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const lr={r:0,b:0,g:0},Yi=new qn,Gp=new ke;function Hp(o,t,n,e,i,s,r){const a=new _e(0);let l=s===!0?0:1,c,f,d=null,u=0,h=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:t).get(y)),y}function w(v){let y=!1;const _=x(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),y=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(o.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(v,y){const _=x(y);_&&(_.isCubeTexture||_.mapping===Ir)?(f===void 0&&(f=new p(new T(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Fo(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Yi.copy(y.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(Yi)),f.material.toneMapped=Ee.getTransfer(_.colorSpace)!==De,(d!==_||u!==_.version||h!==o.toneMapping)&&(f.material.needsUpdate=!0,d=_,u=_.version,h=o.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new p(new Xt(2,2),new Li({name:"BackgroundMaterial",uniforms:Fo(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ee.getTransfer(_.colorSpace)!==De,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||h!==o.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,h=o.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(lr,id(o)),e.buffers.color.setClear(lr.r,lr.g,lr.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:w,addToRenderList:g}}function Vp(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),e={},i=u(null);let s=i,r=!1;function a(M,L,F,B,Q){let q=!1;const G=d(B,F,L);s!==G&&(s=G,c(s.object)),q=h(M,B,F,Q),q&&x(M,B,F,Q),Q!==null&&t.update(Q,o.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,_(M,L,F,B),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return o.createVertexArray()}function c(M){return o.bindVertexArray(M)}function f(M){return o.deleteVertexArray(M)}function d(M,L,F){const B=F.wireframe===!0;let Q=e[M.id];Q===void 0&&(Q={},e[M.id]=Q);let q=Q[L.id];q===void 0&&(q={},Q[L.id]=q);let G=q[B];return G===void 0&&(G=u(l()),q[B]=G),G}function u(M){const L=[],F=[],B=[];for(let Q=0;Q<n;Q++)L[Q]=0,F[Q]=0,B[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function h(M,L,F,B){const Q=s.attributes,q=L.attributes;let G=0;const J=F.getAttributes();for(const X in J)if(J[X].location>=0){const dt=Q[X];let pt=q[X];if(pt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),dt===void 0||dt.attribute!==pt||pt&&dt.data!==pt.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function x(M,L,F,B){const Q={},q=L.attributes;let G=0;const J=F.getAttributes();for(const X in J)if(J[X].location>=0){let dt=q[X];dt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const pt={};pt.attribute=dt,dt&&dt.data&&(pt.data=dt.data),Q[X]=pt,G++}s.attributes=Q,s.attributesNum=G,s.index=B}function w(){const M=s.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function g(M){m(M,0)}function m(M,L){const F=s.newAttributes,B=s.enabledAttributes,Q=s.attributeDivisors;F[M]=1,B[M]===0&&(o.enableVertexAttribArray(M),B[M]=1),Q[M]!==L&&(o.vertexAttribDivisor(M,L),Q[M]=L)}function v(){const M=s.newAttributes,L=s.enabledAttributes;for(let F=0,B=L.length;F<B;F++)L[F]!==M[F]&&(o.disableVertexAttribArray(F),L[F]=0)}function y(M,L,F,B,Q,q,G){G===!0?o.vertexAttribIPointer(M,L,F,Q,q):o.vertexAttribPointer(M,L,F,B,Q,q)}function _(M,L,F,B){w();const Q=B.attributes,q=F.getAttributes(),G=L.defaultAttributeValues;for(const J in q){const X=q[J];if(X.location>=0){let lt=Q[J];if(lt===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){const dt=lt.normalized,pt=lt.itemSize,Et=t.get(lt);if(Et===void 0)continue;const yt=Et.buffer,H=Et.type,W=Et.bytesPerElement,Z=H===o.INT||H===o.UNSIGNED_INT||lt.gpuType===_l;if(lt.isInterleavedBufferAttribute){const ot=lt.data,ut=ot.stride,Pt=lt.offset;if(ot.isInstancedInterleavedBuffer){for(let Vt=0;Vt<X.locationSize;Vt++)m(X.location+Vt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Vt=0;Vt<X.locationSize;Vt++)g(X.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Vt=0;Vt<X.locationSize;Vt++)y(X.location+Vt,pt/X.locationSize,H,dt,ut*W,(Pt+pt/X.locationSize*Vt)*W,Z)}else{if(lt.isInstancedBufferAttribute){for(let ot=0;ot<X.locationSize;ot++)m(X.location+ot,lt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ot=0;ot<X.locationSize;ot++)g(X.location+ot);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ot=0;ot<X.locationSize;ot++)y(X.location+ot,pt/X.locationSize,H,dt,pt*W,pt/X.locationSize*ot*W,Z)}}else if(G!==void 0){const dt=G[J];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(X.location,dt);break;case 3:o.vertexAttrib3fv(X.location,dt);break;case 4:o.vertexAttrib4fv(X.location,dt);break;default:o.vertexAttrib1fv(X.location,dt)}}}}v()}function P(){D();for(const M in e){const L=e[M];for(const F in L){const B=L[F];for(const Q in B)f(B[Q].object),delete B[Q];delete L[F]}delete e[M]}}function C(M){if(e[M.id]===void 0)return;const L=e[M.id];for(const F in L){const B=L[F];for(const Q in B)f(B[Q].object),delete B[Q];delete L[F]}delete e[M.id]}function A(M){for(const L in e){const F=e[L];if(F[M.id]===void 0)continue;const B=F[M.id];for(const Q in B)f(B[Q].object),delete B[Q];delete F[M.id]}}function D(){S(),r=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:w,enableAttribute:g,disableUnusedAttributes:v}}function Wp(o,t,n){let e;function i(c){e=c}function s(c,f){o.drawArrays(e,c,f),n.update(f,e,1)}function r(c,f,d){d!==0&&(o.drawArraysInstanced(e,c,f,d),n.update(f,e,d))}function a(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(e,c,0,f,0,d);let h=0;for(let x=0;x<d;x++)h+=f[x];n.update(h,e,1)}function l(c,f,d,u){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let x=0;x<c.length;x++)r(c[x],f[x],u[x]);else{h.multiDrawArraysInstancedWEBGL(e,c,0,f,0,u,0,d);let x=0;for(let w=0;w<d;w++)x+=f[w]*u[w];n.update(x,e,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xp(o,t,n,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==Wn&&e.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==mi&&e.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==di&&!D)}function l(A){if(A==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,C=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:h,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:C}}function Yp(o){const t=this;let n=null,e=0,i=!1,s=!1;const r=new qi,a=new ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const h=d.length!==0||u||e!==0||i;return i=u,e=d.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,h){const x=d.clippingPlanes,w=d.clipIntersection,g=d.clipShadows,m=o.get(d);if(!i||x===null||x.length===0||s&&!g)s?f(null):c();else{const v=s?0:e,y=v*4;let _=m.clippingState||null;l.value=_,_=f(x,u,y,h);for(let P=0;P!==y;++P)_[P]=n[P];m.clippingState=_,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=e>0),t.numPlanes=e,t.numIntersection=0}function f(d,u,h,x){const w=d!==null?d.length:0;let g=null;if(w!==0){if(g=l.value,x!==!0||g===null){const m=h+w*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,_=h;y!==w;++y,_+=4)r.copy(d[y]).applyMatrix4(v,a),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}function Zp(o){let t=new WeakMap;function n(r,a){return a===ka?r.mapping=Do:a===Oa&&(r.mapping=Uo),r}function e(r){if(r&&r.isTexture){const a=r.mapping;if(a===ka||a===Oa)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new o0(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),n(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:e,dispose:s}}class ad extends od{constructor(t=-1,n=1,e=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=e,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,e,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=e-t,r=e+t,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Eo=4,Mc=[.125,.215,.35,.446,.526,.582],Ji=20,ha=new ad,Sc=new _e;let ua=null,pa=0,ma=0,ga=!1;const $i=(1+Math.sqrt(5))/2,So=1/$i,bc=[new N(-$i,So,0),new N($i,So,0),new N(-So,0,$i),new N(So,0,$i),new N(0,$i,-So),new N(0,$i,So),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,e=.1,i=100){ua=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,e,i,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,pa,ma),this._renderer.xr.enabled=ga,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Do||t.mapping===Uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const e=n||this._allocateTargets();return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,e={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Rs,format:Wn,colorSpace:Oo,depthBuffer:!1},i=Ec(t,n,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(t,n,e);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(s)),this._blurMaterial=$p(s,t,n)}return i}_compileMaterial(t){const n=new p(this._lodPlanes[0],t);this._renderer.compile(n,ha)}_sceneToCubeUV(t,n,e,i){const a=new Nn(90,1,n,e),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Sc),f.toneMapping=Pi,f.autoClear=!1;const h=new Wt({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),x=new p(new T,h);let w=!1;const g=t.background;g?g.isColor&&(h.color.copy(g),t.background=null,w=!0):(h.color.copy(Sc),w=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;cr(i,v*y,m>2?y:0,y,y),f.setRenderTarget(i),w&&f.render(x,a),f.render(t,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=g}_textureToCubeUV(t,n){const e=this._renderer,i=t.mapping===Do||t.mapping===Uo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new p(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;cr(n,0,0,3*l,2*l),e.setRenderTarget(n),e.render(r,ha)}_applyPMREM(t){const n=this._renderer,e=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bc[(i-s-1)%bc.length];this._blur(t,s-1,s,r,a)}n.autoClear=e}_blur(t,n,e,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,e,i,"latitudinal",s),this._halfBlur(r,t,e,e,i,"longitudinal",s)}_halfBlur(t,n,e,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new p(this._lodPlanes[i],c),u=c.uniforms,h=this._sizeLods[e]-1,x=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ji-1),w=s/x,g=isFinite(s)?1+Math.floor(f*w):Ji;g>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ji}`);const m=[];let v=0;for(let A=0;A<Ji;++A){const D=A/w,S=Math.exp(-D*D/2);m.push(S),A===0?v+=S:A<g&&(v+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=x,u.mipInt.value=y-e;const _=this._sizeLods[i],P=3*_*(i>y-Eo?i-y+Eo:0),C=4*(this._cubeSize-_);cr(n,P,C,3*_,2*_),l.setRenderTarget(n),l.render(d,ha)}}function qp(o){const t=[],n=[],e=[];let i=o;const s=o-Eo+1+Mc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);n.push(a);let l=1/a;r>o-Eo?l=Mc[r-o+Eo-1]:r===0&&(l=0),e.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],h=6,x=6,w=3,g=2,m=1,v=new Float32Array(w*x*h),y=new Float32Array(g*x*h),_=new Float32Array(m*x*h);for(let C=0;C<h;C++){const A=C%3*2/3-1,D=C>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(S,w*x*C),y.set(u,g*x*C);const M=[C,C,C,C,C,C];_.set(M,m*x*C)}const P=new mn;P.setAttribute("position",new Yn(v,w)),P.setAttribute("uv",new Yn(y,g)),P.setAttribute("faceIndex",new Yn(_,m)),t.push(P),i>Eo&&i--}return{lodPlanes:t,sizeLods:n,sigmas:e}}function Ec(o,t,n){const e=new to(o,t,n);return e.texture.mapping=Ir,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function cr(o,t,n,e,i){o.viewport.set(t,n,e,i),o.scissor.set(t,n,e,i)}function $p(o,t,n){const e=new Float32Array(Ji),i=new N(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ac(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Rc(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function Kp(o){let t=new WeakMap,n=null;function e(a){if(a&&a.isTexture){const l=a.mapping,c=l===ka||l===Oa,f=l===Do||l===Uo;if(c||f){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new Tc(o)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||f&&h&&i(h)?(n===null&&(n=new Tc(o)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:e,dispose:r}}function Jp(o){const t={};function n(e){if(t[e]!==void 0)return t[e];let i;switch(e){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(e)}return t[e]=i,i}return{has:function(e){return n(e)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(e){const i=n(e);return i===null&&ds("THREE.WebGLRenderer: "+e+" extension not supported."),i}}}function jp(o,t,n,e){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const x in u.attributes)t.remove(u.attributes[x]);for(const x in u.morphAttributes){const w=u.morphAttributes[x];for(let g=0,m=w.length;g<m;g++)t.remove(w[g])}u.removeEventListener("dispose",r),delete i[u.id];const h=s.get(u);h&&(t.remove(h),s.delete(u)),e.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const x in u)t.update(u[x],o.ARRAY_BUFFER);const h=d.morphAttributes;for(const x in h){const w=h[x];for(let g=0,m=w.length;g<m;g++)t.update(w[g],o.ARRAY_BUFFER)}}function c(d){const u=[],h=d.index,x=d.attributes.position;let w=0;if(h!==null){const v=h.array;w=h.version;for(let y=0,_=v.length;y<_;y+=3){const P=v[y+0],C=v[y+1],A=v[y+2];u.push(P,C,C,A,A,P)}}else if(x!==void 0){const v=x.array;w=x.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const P=y+0,C=y+1,A=y+2;u.push(P,C,C,A,A,P)}}else return;const g=new($f(u)?nd:ed)(u,1);g.version=w;const m=s.get(d);m&&t.remove(m),s.set(d,g)}function f(d){const u=s.get(d);if(u){const h=d.index;h!==null&&u.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Qp(o,t,n){let e;function i(u){e=u}let s,r;function a(u){s=u.type,r=u.bytesPerElement}function l(u,h){o.drawElements(e,h,s,u*r),n.update(h,e,1)}function c(u,h,x){x!==0&&(o.drawElementsInstanced(e,h,s,u*r,x),n.update(h,e,x))}function f(u,h,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(e,h,0,s,u,0,x);let g=0;for(let m=0;m<x;m++)g+=h[m];n.update(g,e,1)}function d(u,h,x,w){if(x===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/r,h[m],w[m]);else{g.multiDrawElementsInstancedWEBGL(e,h,0,s,u,0,w,0,x);let m=0;for(let v=0;v<x;v++)m+=h[v]*w[v];n.update(m,e,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function tm(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function e(s,r,a){switch(n.calls++,r){case o.TRIANGLES:n.triangles+=a*(s/3);break;case o.LINES:n.lines+=a*(s/2);break;case o.LINE_STRIP:n.lines+=a*(s-1);break;case o.LINE_LOOP:n.lines+=a*s;break;case o.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:e}}function em(o,t,n){const e=new WeakMap,i=new Ue;function s(r,a,l){const c=r.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=e.get(a);if(u===void 0||u.count!==d){let M=function(){D.dispose(),e.delete(a),a.removeEventListener("dispose",M)};var h=M;u!==void 0&&u.texture.dispose();const x=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;x===!0&&(_=1),w===!0&&(_=2),g===!0&&(_=3);let P=a.attributes.position.count*_,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*C*4*d),D=new Jf(A,P,C,d);D.type=di,D.needsUpdate=!0;const S=_*4;for(let L=0;L<d;L++){const F=m[L],B=v[L],Q=y[L],q=P*C*4*L;for(let G=0;G<F.count;G++){const J=G*S;x===!0&&(i.fromBufferAttribute(F,G),A[q+J+0]=i.x,A[q+J+1]=i.y,A[q+J+2]=i.z,A[q+J+3]=0),w===!0&&(i.fromBufferAttribute(B,G),A[q+J+4]=i.x,A[q+J+5]=i.y,A[q+J+6]=i.z,A[q+J+7]=0),g===!0&&(i.fromBufferAttribute(Q,G),A[q+J+8]=i.x,A[q+J+9]=i.y,A[q+J+10]=i.z,A[q+J+11]=Q.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new jt(P,C)},e.set(a,u),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const w=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(o,"morphTargetBaseInfluence",w),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(o,"morphTargetsTextureSize",u.size)}return{update:s}}function nm(o,t,n,e){let i=new WeakMap;function s(l){const c=e.render.frame,f=l.geometry,d=t.get(l,f);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}class ld extends Pn{constructor(t,n,e,i,s,r,a,l,c,f=Co){if(f!==Co&&f!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");e===void 0&&f===Co&&(e=Qi),e===void 0&&f===zo&&(e=No),super(null,i,s,r,a,l,f,e,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:Xn,this.minFilter=l!==void 0?l:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const cd=new Pn,Cc=new ld(1,1),fd=new Jf,dd=new Hh,hd=new sd,Pc=[],Ic=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Uc=new Float32Array(4);function Vo(o,t,n){const e=o[0];if(e<=0||e>0)return o;const i=t*n;let s=Pc[i];if(s===void 0&&(s=new Float32Array(i),Pc[i]=s),t!==0){e.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=n,o[r].toArray(s,a)}return s}function Qe(o,t){if(o.length!==t.length)return!1;for(let n=0,e=o.length;n<e;n++)if(o[n]!==t[n])return!1;return!0}function tn(o,t){for(let n=0,e=t.length;n<e;n++)o[n]=t[n]}function Ur(o,t){let n=Ic[t];n===void 0&&(n=new Int32Array(t),Ic[t]=n);for(let e=0;e!==t;++e)n[e]=o.allocateTextureUnit();return n}function im(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function om(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;o.uniform2fv(this.addr,t),tn(n,t)}}function sm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qe(n,t))return;o.uniform3fv(this.addr,t),tn(n,t)}}function rm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;o.uniform4fv(this.addr,t),tn(n,t)}}function am(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Qe(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),tn(n,t)}else{if(Qe(n,e))return;Uc.set(e),o.uniformMatrix2fv(this.addr,!1,Uc),tn(n,e)}}function lm(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Qe(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),tn(n,t)}else{if(Qe(n,e))return;Dc.set(e),o.uniformMatrix3fv(this.addr,!1,Dc),tn(n,e)}}function cm(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Qe(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),tn(n,t)}else{if(Qe(n,e))return;Lc.set(e),o.uniformMatrix4fv(this.addr,!1,Lc),tn(n,e)}}function fm(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function dm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;o.uniform2iv(this.addr,t),tn(n,t)}}function hm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;o.uniform3iv(this.addr,t),tn(n,t)}}function um(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;o.uniform4iv(this.addr,t),tn(n,t)}}function pm(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function mm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;o.uniform2uiv(this.addr,t),tn(n,t)}}function gm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;o.uniform3uiv(this.addr,t),tn(n,t)}}function xm(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;o.uniform4uiv(this.addr,t),tn(n,t)}}function wm(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Cc.compareFunction=qf,s=Cc):s=cd,n.setTexture2D(t||s,i)}function _m(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTexture3D(t||dd,i)}function ym(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTextureCube(t||hd,i)}function vm(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTexture2DArray(t||fd,i)}function Mm(o){switch(o){case 5126:return im;case 35664:return om;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return vm}}function Sm(o,t){o.uniform1fv(this.addr,t)}function bm(o,t){const n=Vo(t,this.size,2);o.uniform2fv(this.addr,n)}function Tm(o,t){const n=Vo(t,this.size,3);o.uniform3fv(this.addr,n)}function Em(o,t){const n=Vo(t,this.size,4);o.uniform4fv(this.addr,n)}function Am(o,t){const n=Vo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Rm(o,t){const n=Vo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Cm(o,t){const n=Vo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Pm(o,t){o.uniform1iv(this.addr,t)}function Im(o,t){o.uniform2iv(this.addr,t)}function Lm(o,t){o.uniform3iv(this.addr,t)}function Dm(o,t){o.uniform4iv(this.addr,t)}function Um(o,t){o.uniform1uiv(this.addr,t)}function Nm(o,t){o.uniform2uiv(this.addr,t)}function zm(o,t){o.uniform3uiv(this.addr,t)}function Fm(o,t){o.uniform4uiv(this.addr,t)}function km(o,t,n){const e=this.cache,i=t.length,s=Ur(n,i);Qe(e,s)||(o.uniform1iv(this.addr,s),tn(e,s));for(let r=0;r!==i;++r)n.setTexture2D(t[r]||cd,s[r])}function Om(o,t,n){const e=this.cache,i=t.length,s=Ur(n,i);Qe(e,s)||(o.uniform1iv(this.addr,s),tn(e,s));for(let r=0;r!==i;++r)n.setTexture3D(t[r]||dd,s[r])}function Bm(o,t,n){const e=this.cache,i=t.length,s=Ur(n,i);Qe(e,s)||(o.uniform1iv(this.addr,s),tn(e,s));for(let r=0;r!==i;++r)n.setTextureCube(t[r]||hd,s[r])}function Gm(o,t,n){const e=this.cache,i=t.length,s=Ur(n,i);Qe(e,s)||(o.uniform1iv(this.addr,s),tn(e,s));for(let r=0;r!==i;++r)n.setTexture2DArray(t[r]||fd,s[r])}function Hm(o){switch(o){case 5126:return Sm;case 35664:return bm;case 35665:return Tm;case 35666:return Em;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Im;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Um;case 36294:return Nm;case 36295:return zm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Gm}}class Vm{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.setValue=Mm(n.type)}}class Wm{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hm(n.type)}}class Xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,e){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,n[a.id],e)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Nc(o,t){o.seq.push(t),o.map[t.id]=t}function Ym(o,t,n){const e=o.name,i=e.length;for(xa.lastIndex=0;;){const s=xa.exec(e),r=xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Nc(n,c===void 0?new Vm(a,o,t):new Wm(a,o,t));break}else{let d=n.map[a];d===void 0&&(d=new Xm(a),Nc(n,d)),n=d}}}class Er{constructor(t,n){this.seq=[],this.map={};const e=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<e;++i){const s=t.getActiveUniform(n,i),r=t.getUniformLocation(n,s.name);Ym(s,r,this)}}setValue(t,n,e,i){const s=this.map[n];s!==void 0&&s.setValue(t,e,i)}setOptional(t,n,e){const i=n[e];i!==void 0&&this.setValue(t,e,i)}static upload(t,n,e,i){for(let s=0,r=n.length;s!==r;++s){const a=n[s],l=e[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,n){const e=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in n&&e.push(r)}return e}}function zc(o,t,n){const e=o.createShader(t);return o.shaderSource(e,n),o.compileShader(e),e}const Zm=37297;let qm=0;function $m(o,t){const n=o.split(`
`),e=[],i=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=i;r<s;r++){const a=r+1;e.push(`${a===t?">":" "} ${a}: ${n[r]}`)}return e.join(`
`)}const Fc=new ge;function Km(o){Ee._getMatrix(Fc,Ee.workingColorSpace,o);const t=`mat3( ${Fc.elements.map(n=>n.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Lr:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function kc(o,t,n){const e=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(e&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+$m(o.getShaderSource(t),r)}else return i}function Jm(o,t){const n=Km(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jm(o,t){let n;switch(t){case eh:n="Linear";break;case nh:n="Reinhard";break;case ih:n="Cineon";break;case Nf:n="ACESFilmic";break;case sh:n="AgX";break;case rh:n="Neutral";break;case oh:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fr=new N;function Qm(){Ee.getLuminanceCoefficients(fr);const o=fr.x.toFixed(4),t=fr.y.toFixed(4),n=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function e2(o){const t=[];for(const n in o){const e=o[n];e!==!1&&t.push("#define "+n+" "+e)}return t.join(`
`)}function n2(o,t){const n={},e=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<e;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),n[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return n}function hs(o){return o!==""}function Oc(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(o){return o.replace(i2,s2)}const o2=new Map;function s2(o,t){let n=we[t];if(n===void 0){const e=o2.get(t);if(e!==void 0)n=we[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return ul(n)}const r2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(o){return o.replace(r2,a2)}function a2(o,t,n,e){let i="";for(let s=parseInt(t);s<parseInt(n);s++)i+=e.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hc(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function l2(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Lf?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Df?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function c2(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Do:case Uo:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f2(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Uo:t="ENVMAP_MODE_REFRACTION";break}return t}function d2(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Uf:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case th:t="ENVMAP_BLENDING_ADD";break}return t}function h2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,e=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:e,maxMip:n}}function u2(o,t,n,e){const i=o.getContext(),s=n.defines;let r=n.vertexShader,a=n.fragmentShader;const l=l2(n),c=c2(n),f=f2(n),d=d2(n),u=h2(n),h=t2(n),x=e2(s),w=i.createProgram();let g,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(hs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(hs).join(`
`),m.length>0&&(m+=`
`)):(g=[Hc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),m=[Hc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?we.tonemapping_pars_fragment:"",n.toneMapping!==Pi?jm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,Jm("linearToOutputTexel",n.outputColorSpace),Qm(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hs).join(`
`)),r=ul(r),r=Oc(r,n),r=Bc(r,n),a=ul(a),a=Oc(a,n),a=Bc(a,n),r=Gc(r),a=Gc(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+g+r,_=v+m+a,P=zc(i,i.VERTEX_SHADER,y),C=zc(i,i.FRAGMENT_SHADER,_);i.attachShader(w,P),i.attachShader(w,C),n.index0AttributeName!==void 0?i.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(w,0,"position"),i.linkProgram(w);function A(L){if(o.debug.checkShaderErrors){const F=i.getProgramInfoLog(w).trim(),B=i.getShaderInfoLog(P).trim(),Q=i.getShaderInfoLog(C).trim();let q=!0,G=!0;if(i.getProgramParameter(w,i.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,w,P,C);else{const J=kc(i,P,"vertex"),X=kc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(w,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+J+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||Q==="")&&(G=!1);G&&(L.diagnostics={runnable:q,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:Q,prefix:m}})}i.deleteShader(P),i.deleteShader(C),D=new Er(i,w),S=n2(i,w)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(w,Zm)),M},this.destroy=function(){e.releaseStatesOfProgram(this),i.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qm++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=C,this}let p2=0;class m2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,e=t.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(e),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const e of n)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let e=n.get(t);return e===void 0&&(e=new Set,n.set(t,e)),e}_getShaderStage(t){const n=this.shaderCache;let e=n.get(t);return e===void 0&&(e=new g2(t),n.set(t,e)),e}}class g2{constructor(t){this.id=p2++,this.code=t,this.usedTimes=0}}function x2(o,t,n,e,i,s,r){const a=new Qf,l=new m2,c=new Set,f=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let h=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,F,B){const Q=F.fog,q=B.geometry,G=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?n:t).get(S.envMap||G),X=J&&J.mapping===Ir?J.image.height:null,lt=x[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=dt!==void 0?dt.length:0;let Et=0;q.morphAttributes.position!==void 0&&(Et=1),q.morphAttributes.normal!==void 0&&(Et=2),q.morphAttributes.color!==void 0&&(Et=3);let yt,H,W,Z;if(lt){const ce=jn[lt];yt=ce.vertexShader,H=ce.fragmentShader}else yt=S.vertexShader,H=S.fragmentShader,l.update(S),W=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const ot=o.getRenderTarget(),ut=o.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,Vt=B.isBatchedMesh===!0,bt=!!S.map,mt=!!S.matcap,oe=!!J,U=!!S.aoMap,zt=!!S.lightMap,Rt=!!S.bumpMap,Dt=!!S.normalMap,It=!!S.displacementMap,Qt=!!S.emissiveMap,Tt=!!S.metalnessMap,I=!!S.roughnessMap,b=S.anisotropy>0,V=S.clearcoat>0,it=S.dispersion>0,nt=S.iridescence>0,et=S.sheen>0,vt=S.transmission>0,gt=b&&!!S.anisotropyMap,ht=V&&!!S.clearcoatMap,Ut=V&&!!S.clearcoatNormalMap,ct=V&&!!S.clearcoatRoughnessMap,At=nt&&!!S.iridescenceMap,Yt=nt&&!!S.iridescenceThicknessMap,le=et&&!!S.sheenColorMap,Ft=et&&!!S.sheenRoughnessMap,te=!!S.specularMap,Bt=!!S.specularColorMap,re=!!S.specularIntensityMap,z=vt&&!!S.transmissionMap,xt=vt&&!!S.thicknessMap,j=!!S.gradientMap,st=!!S.alphaMap,wt=S.alphaTest>0,_t=!!S.alphaHash,Zt=!!S.extensions;let fe=Pi;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(fe=o.toneMapping);const be={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:yt,fragmentShader:H,defines:S.defines,customVertexShaderID:W,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Vt,batchingColor:Vt&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Oo,alphaToCoverage:!!S.alphaToCoverage,map:bt,matcap:mt,envMap:oe,envMapMode:oe&&J.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:zt,bumpMap:Rt,normalMap:Dt,displacementMap:u&&It,emissiveMap:Qt,normalMapObjectSpace:Dt&&S.normalMapType===fh,normalMapTangentSpace:Dt&&S.normalMapType===Zf,metalnessMap:Tt,roughnessMap:I,anisotropy:b,anisotropyMap:gt,clearcoat:V,clearcoatMap:ht,clearcoatNormalMap:Ut,clearcoatRoughnessMap:ct,dispersion:it,iridescence:nt,iridescenceMap:At,iridescenceThicknessMap:Yt,sheen:et,sheenColorMap:le,sheenRoughnessMap:Ft,specularMap:te,specularColorMap:Bt,specularIntensityMap:re,transmission:vt,transmissionMap:z,thicknessMap:xt,gradientMap:j,opaque:S.transparent===!1&&S.blending===Ro&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:wt,alphaHash:_t,combine:S.combine,mapUv:bt&&w(S.map.channel),aoMapUv:U&&w(S.aoMap.channel),lightMapUv:zt&&w(S.lightMap.channel),bumpMapUv:Rt&&w(S.bumpMap.channel),normalMapUv:Dt&&w(S.normalMap.channel),displacementMapUv:It&&w(S.displacementMap.channel),emissiveMapUv:Qt&&w(S.emissiveMap.channel),metalnessMapUv:Tt&&w(S.metalnessMap.channel),roughnessMapUv:I&&w(S.roughnessMap.channel),anisotropyMapUv:gt&&w(S.anisotropyMap.channel),clearcoatMapUv:ht&&w(S.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&w(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&w(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&w(S.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&w(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&w(S.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(S.sheenRoughnessMap.channel),specularMapUv:te&&w(S.specularMap.channel),specularColorMapUv:Bt&&w(S.specularColorMap.channel),specularIntensityMapUv:re&&w(S.specularIntensityMap.channel),transmissionMapUv:z&&w(S.transmissionMap.channel),thicknessMapUv:xt&&w(S.thicknessMap.channel),alphaMapUv:st&&w(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Dt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(bt||st),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ut,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:bt&&S.map.isVideoTexture===!0&&Ee.getTransfer(S.map.colorSpace)===De,decodeVideoTextureEmissive:Qt&&S.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(S.emissiveMap.colorSpace)===De,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===Cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(o.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=x[S.type];let L;if(M){const F=jn[M];L=t0.clone(F.uniforms)}else L=S.uniforms;return L}function P(S,M){let L;for(let F=0,B=f.length;F<B;F++){const Q=f[F];if(Q.cacheKey===M){L=Q,++L.usedTimes;break}}return L===void 0&&(L=new u2(o,M,S,s),f.push(L)),L}function C(S){if(--S.usedTimes===0){const M=f.indexOf(S);f[M]=f[f.length-1],f.pop(),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:f,dispose:D}}function w2(){let o=new WeakMap;function t(r){return o.has(r)}function n(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:t,get:n,remove:e,update:i,dispose:s}}function _2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Vc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Wc(){const o=[];let t=0;const n=[],e=[],i=[];function s(){t=0,n.length=0,e.length=0,i.length=0}function r(d,u,h,x,w,g){let m=o[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:h,groupOrder:x,renderOrder:d.renderOrder,z:w,group:g},o[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=h,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=w,m.group=g),t++,m}function a(d,u,h,x,w,g){const m=r(d,u,h,x,w,g);h.transmission>0?e.push(m):h.transparent===!0?i.push(m):n.push(m)}function l(d,u,h,x,w,g){const m=r(d,u,h,x,w,g);h.transmission>0?e.unshift(m):h.transparent===!0?i.unshift(m):n.unshift(m)}function c(d,u){n.length>1&&n.sort(d||_2),e.length>1&&e.sort(u||Vc),i.length>1&&i.sort(u||Vc)}function f(){for(let d=t,u=o.length;d<u;d++){const h=o[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:e,transparent:i,init:s,push:a,unshift:l,finish:f,sort:c}}function y2(){let o=new WeakMap;function t(e,i){const s=o.get(e);let r;return s===void 0?(r=new Wc,o.set(e,[r])):i>=s.length?(r=new Wc,s.push(r)):r=s[i],r}function n(){o=new WeakMap}return{get:t,dispose:n}}function v2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new _e};break;case"SpotLight":n={position:new N,direction:new N,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new _e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":n={color:new _e,position:new N,halfWidth:new N,halfHeight:new N};break}return o[t.id]=n,n}}}function M2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let S2=0;function b2(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function T2(o){const t=new v2,n=M2(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)e.probe.push(new N);const i=new N,s=new ke,r=new ke;function a(c){let f=0,d=0,u=0;for(let S=0;S<9;S++)e.probe[S].set(0,0,0);let h=0,x=0,w=0,g=0,m=0,v=0,y=0,_=0,P=0,C=0,A=0;c.sort(b2);for(let S=0,M=c.length;S<M;S++){const L=c[S],F=L.color,B=L.intensity,Q=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*B,d+=F.g*B,u+=F.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)e.probe[G].addScaledVector(L.sh.coefficients[G],B);A++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,X=n.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,e.directionalShadow[h]=X,e.directionalShadowMap[h]=q,e.directionalShadowMatrix[h]=L.shadow.matrix,v++}e.directional[h]=G,h++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=Q,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,e.spot[w]=G;const J=L.shadow;if(L.map&&(e.spotLightMap[P]=L.map,P++,J.updateMatrices(L),L.castShadow&&C++),e.spotLightMatrix[w]=J.matrix,L.castShadow){const X=n.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,e.spotShadow[w]=X,e.spotShadowMap[w]=q,_++}w++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),e.rectArea[g]=G,g++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const J=L.shadow,X=n.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,e.pointShadow[x]=X,e.pointShadowMap[x]=q,e.pointShadowMatrix[x]=L.shadow.matrix,y++}e.point[x]=G,x++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),e.hemi[m]=G,m++}}g>0&&(o.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=Gt.LTC_FLOAT_1,e.rectAreaLTC2=Gt.LTC_FLOAT_2):(e.rectAreaLTC1=Gt.LTC_HALF_1,e.rectAreaLTC2=Gt.LTC_HALF_2)),e.ambient[0]=f,e.ambient[1]=d,e.ambient[2]=u;const D=e.hash;(D.directionalLength!==h||D.pointLength!==x||D.spotLength!==w||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==P||D.numLightProbes!==A)&&(e.directional.length=h,e.spot.length=w,e.rectArea.length=g,e.point.length=x,e.hemi.length=m,e.directionalShadow.length=v,e.directionalShadowMap.length=v,e.pointShadow.length=y,e.pointShadowMap.length=y,e.spotShadow.length=_,e.spotShadowMap.length=_,e.directionalShadowMatrix.length=v,e.pointShadowMatrix.length=y,e.spotLightMatrix.length=_+P-C,e.spotLightMap.length=P,e.numSpotLightShadowsWithMaps=C,e.numLightProbes=A,D.directionalLength=h,D.pointLength=x,D.spotLength=w,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=P,D.numLightProbes=A,e.version=S2++)}function l(c,f){let d=0,u=0,h=0,x=0,w=0;const g=f.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const y=c[m];if(y.isDirectionalLight){const _=e.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(y.isSpotLight){const _=e.spot[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),h++}else if(y.isRectAreaLight){const _=e.rectArea[x];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),r.identity(),s.copy(y.matrixWorld),s.premultiply(g),r.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),x++}else if(y.isPointLight){const _=e.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const _=e.hemi[w];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),w++}}}return{setup:a,setupView:l,state:e}}function Xc(o){const t=new T2(o),n=[],e=[];function i(f){c.camera=f,n.length=0,e.length=0}function s(f){n.push(f)}function r(f){e.push(f)}function a(){t.setup(n)}function l(f){t.setupView(n,f)}const c={lightsArray:n,shadowsArray:e,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function E2(o){let t=new WeakMap;function n(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new Xc(o),t.set(i,[a])):s>=r.length?(a=new Xc(o),r.push(a)):a=r[s],a}function e(){t=new WeakMap}return{get:n,dispose:e}}class A2 extends Ho{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R2 extends Ho{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
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
}`;function I2(o,t,n){let e=new El;const i=new jt,s=new jt,r=new Ue,a=new A2({depthPacking:ch}),l=new R2,c={},f=n.maxTextureSize,d={[Ii]:Cn,[Cn]:Ii,[pn]:pn},u=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:C2,fragmentShader:P2}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const x=new mn;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new p(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lf;let m=this.type;this.render=function(C,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const S=o.getRenderTarget(),M=o.getActiveCubeFace(),L=o.getActiveMipmapLevel(),F=o.state;F.setBlending(Ci),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=m!==fi&&this.type===fi,Q=m===fi&&this.type!==fi;for(let q=0,G=C.length;q<G;q++){const J=C[q],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const lt=X.getFrameExtents();if(i.multiply(lt),s.copy(X.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/lt.x),i.x=s.x*lt.x,X.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/lt.y),i.y=s.y*lt.y,X.mapSize.y=s.y)),X.map===null||B===!0||Q===!0){const pt=this.type!==fi?{minFilter:Xn,magFilter:Xn}:{};X.map!==null&&X.map.dispose(),X.map=new to(i.x,i.y,pt),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const dt=X.getViewportCount();for(let pt=0;pt<dt;pt++){const Et=X.getViewport(pt);r.set(s.x*Et.x,s.y*Et.y,s.x*Et.z,s.y*Et.w),F.viewport(r),X.updateMatrices(J,pt),e=X.getFrustum(),_(A,D,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===fi&&v(X,D),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,o.setRenderTarget(S,M,L)};function v(C,A){const D=t.update(w);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new to(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(A,null,D,u,w,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(A,null,D,h,w,null)}function y(C,A,D,S){let M=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,o.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=M.uuid,B=A.uuid;let Q=c[F];Q===void 0&&(Q={},c[F]=Q);let q=Q[B];q===void 0&&(q=M.clone(),Q[B]=q,A.addEventListener("dispose",P)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,S===fi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=o.properties.get(M);F.light=D}return M}function _(C,A,D,S,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===fi)&&(!C.frustumCulled||e.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const B=t.update(C),Q=C.material;if(Array.isArray(Q)){const q=B.groups;for(let G=0,J=q.length;G<J;G++){const X=q[G],lt=Q[X.materialIndex];if(lt&&lt.visible){const dt=y(C,lt,S,M);C.onBeforeShadow(o,C,A,D,B,dt,X),o.renderBufferDirect(D,null,B,dt,C,X),C.onAfterShadow(o,C,A,D,B,dt,X)}}}else if(Q.visible){const q=y(C,Q,S,M);C.onBeforeShadow(o,C,A,D,B,q,null),o.renderBufferDirect(D,null,B,q,C,null),C.onAfterShadow(o,C,A,D,B,q,null)}}const F=C.children;for(let B=0,Q=F.length;B<Q;B++)_(F[B],A,D,S,M)}function P(C){C.target.removeEventListener("dispose",P);for(const D in c){const S=c[D],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const L2={[Ia]:La,[Da]:za,[Ua]:Fa,[Lo]:Na,[La]:Ia,[za]:Da,[Fa]:Ua,[Na]:Lo};function D2(o,t){function n(){let z=!1;const xt=new Ue;let j=null;const st=new Ue(0,0,0,0);return{setMask:function(wt){j!==wt&&!z&&(o.colorMask(wt,wt,wt,wt),j=wt)},setLocked:function(wt){z=wt},setClear:function(wt,_t,Zt,fe,be){be===!0&&(wt*=fe,_t*=fe,Zt*=fe),xt.set(wt,_t,Zt,fe),st.equals(xt)===!1&&(o.clearColor(wt,_t,Zt,fe),st.copy(xt))},reset:function(){z=!1,j=null,st.set(-1,0,0,0)}}}function e(){let z=!1,xt=!1,j=null,st=null,wt=null;return{setReversed:function(_t){if(xt!==_t){const Zt=t.get("EXT_clip_control");xt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const fe=wt;wt=null,this.setClear(fe)}xt=_t},getReversed:function(){return xt},setTest:function(_t){_t?ot(o.DEPTH_TEST):ut(o.DEPTH_TEST)},setMask:function(_t){j!==_t&&!z&&(o.depthMask(_t),j=_t)},setFunc:function(_t){if(xt&&(_t=L2[_t]),st!==_t){switch(_t){case Ia:o.depthFunc(o.NEVER);break;case La:o.depthFunc(o.ALWAYS);break;case Da:o.depthFunc(o.LESS);break;case Lo:o.depthFunc(o.LEQUAL);break;case Ua:o.depthFunc(o.EQUAL);break;case Na:o.depthFunc(o.GEQUAL);break;case za:o.depthFunc(o.GREATER);break;case Fa:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}st=_t}},setLocked:function(_t){z=_t},setClear:function(_t){wt!==_t&&(xt&&(_t=1-_t),o.clearDepth(_t),wt=_t)},reset:function(){z=!1,j=null,st=null,wt=null,xt=!1}}}function i(){let z=!1,xt=null,j=null,st=null,wt=null,_t=null,Zt=null,fe=null,be=null;return{setTest:function(ce){z||(ce?ot(o.STENCIL_TEST):ut(o.STENCIL_TEST))},setMask:function(ce){xt!==ce&&!z&&(o.stencilMask(ce),xt=ce)},setFunc:function(ce,Le,Ne){(j!==ce||st!==Le||wt!==Ne)&&(o.stencilFunc(ce,Le,Ne),j=ce,st=Le,wt=Ne)},setOp:function(ce,Le,Ne){(_t!==ce||Zt!==Le||fe!==Ne)&&(o.stencilOp(ce,Le,Ne),_t=ce,Zt=Le,fe=Ne)},setLocked:function(ce){z=ce},setClear:function(ce){be!==ce&&(o.clearStencil(ce),be=ce)},reset:function(){z=!1,xt=null,j=null,st=null,wt=null,_t=null,Zt=null,fe=null,be=null}}}const s=new n,r=new e,a=new i,l=new WeakMap,c=new WeakMap;let f={},d={},u=new WeakMap,h=[],x=null,w=!1,g=null,m=null,v=null,y=null,_=null,P=null,C=null,A=new _e(0,0,0),D=0,S=!1,M=null,L=null,F=null,B=null,Q=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=J>=2);let lt=null,dt={};const pt=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),yt=new Ue().fromArray(pt),H=new Ue().fromArray(Et);function W(z,xt,j,st){const wt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(z,_t),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<j;Zt++)z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY?o.texImage3D(xt,0,o.RGBA,1,1,st,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(xt+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return _t}const Z={};Z[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ot(o.DEPTH_TEST),r.setFunc(Lo),Rt(!1),Dt($l),ot(o.CULL_FACE),U(Ci);function ot(z){f[z]!==!0&&(o.enable(z),f[z]=!0)}function ut(z){f[z]!==!1&&(o.disable(z),f[z]=!1)}function Pt(z,xt){return d[z]!==xt?(o.bindFramebuffer(z,xt),d[z]=xt,z===o.DRAW_FRAMEBUFFER&&(d[o.FRAMEBUFFER]=xt),z===o.FRAMEBUFFER&&(d[o.DRAW_FRAMEBUFFER]=xt),!0):!1}function Vt(z,xt){let j=h,st=!1;if(z){j=u.get(xt),j===void 0&&(j=[],u.set(xt,j));const wt=z.textures;if(j.length!==wt.length||j[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Zt=wt.length;_t<Zt;_t++)j[_t]=o.COLOR_ATTACHMENT0+_t;j.length=wt.length,st=!0}}else j[0]!==o.BACK&&(j[0]=o.BACK,st=!0);st&&o.drawBuffers(j)}function bt(z){return x!==z?(o.useProgram(z),x=z,!0):!1}const mt={[Ki]:o.FUNC_ADD,[zd]:o.FUNC_SUBTRACT,[Fd]:o.FUNC_REVERSE_SUBTRACT};mt[kd]=o.MIN,mt[Od]=o.MAX;const oe={[Bd]:o.ZERO,[Gd]:o.ONE,[Hd]:o.SRC_COLOR,[Ca]:o.SRC_ALPHA,[qd]:o.SRC_ALPHA_SATURATE,[Yd]:o.DST_COLOR,[Wd]:o.DST_ALPHA,[Vd]:o.ONE_MINUS_SRC_COLOR,[Pa]:o.ONE_MINUS_SRC_ALPHA,[Zd]:o.ONE_MINUS_DST_COLOR,[Xd]:o.ONE_MINUS_DST_ALPHA,[$d]:o.CONSTANT_COLOR,[Kd]:o.ONE_MINUS_CONSTANT_COLOR,[Jd]:o.CONSTANT_ALPHA,[jd]:o.ONE_MINUS_CONSTANT_ALPHA};function U(z,xt,j,st,wt,_t,Zt,fe,be,ce){if(z===Ci){w===!0&&(ut(o.BLEND),w=!1);return}if(w===!1&&(ot(o.BLEND),w=!0),z!==Nd){if(z!==g||ce!==S){if((m!==Ki||_!==Ki)&&(o.blendEquation(o.FUNC_ADD),m=Ki,_=Ki),ce)switch(z){case Ro:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ra:o.blendFunc(o.ONE,o.ONE);break;case Kl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jl:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ro:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ra:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Kl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jl:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,y=null,P=null,C=null,A.set(0,0,0),D=0,g=z,S=ce}return}wt=wt||xt,_t=_t||j,Zt=Zt||st,(xt!==m||wt!==_)&&(o.blendEquationSeparate(mt[xt],mt[wt]),m=xt,_=wt),(j!==v||st!==y||_t!==P||Zt!==C)&&(o.blendFuncSeparate(oe[j],oe[st],oe[_t],oe[Zt]),v=j,y=st,P=_t,C=Zt),(fe.equals(A)===!1||be!==D)&&(o.blendColor(fe.r,fe.g,fe.b,be),A.copy(fe),D=be),g=z,S=!1}function zt(z,xt){z.side===pn?ut(o.CULL_FACE):ot(o.CULL_FACE);let j=z.side===Cn;xt&&(j=!j),Rt(j),z.blending===Ro&&z.transparent===!1?U(Ci):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const st=z.stencilWrite;a.setTest(st),st&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Qt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(z){M!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),M=z)}function Dt(z){z!==Dd?(ot(o.CULL_FACE),z!==L&&(z===$l?o.cullFace(o.BACK):z===Ud?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ut(o.CULL_FACE),L=z}function It(z){z!==F&&(G&&o.lineWidth(z),F=z)}function Qt(z,xt,j){z?(ot(o.POLYGON_OFFSET_FILL),(B!==xt||Q!==j)&&(o.polygonOffset(xt,j),B=xt,Q=j)):ut(o.POLYGON_OFFSET_FILL)}function Tt(z){z?ot(o.SCISSOR_TEST):ut(o.SCISSOR_TEST)}function I(z){z===void 0&&(z=o.TEXTURE0+q-1),lt!==z&&(o.activeTexture(z),lt=z)}function b(z,xt,j){j===void 0&&(lt===null?j=o.TEXTURE0+q-1:j=lt);let st=dt[j];st===void 0&&(st={type:void 0,texture:void 0},dt[j]=st),(st.type!==z||st.texture!==xt)&&(lt!==j&&(o.activeTexture(j),lt=j),o.bindTexture(z,xt||Z[z]),st.type=z,st.texture=xt)}function V(){const z=dt[lt];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function it(){try{o.compressedTexImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{o.texSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{o.texSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{o.texStorage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{o.texStorage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{o.texImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Yt(){try{o.texImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(z){yt.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),yt.copy(z))}function Ft(z){H.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),H.copy(z))}function te(z,xt){let j=c.get(xt);j===void 0&&(j=new WeakMap,c.set(xt,j));let st=j.get(z);st===void 0&&(st=o.getUniformBlockIndex(xt,z.name),j.set(z,st))}function Bt(z,xt){const st=c.get(xt).get(z);l.get(xt)!==st&&(o.uniformBlockBinding(xt,st,z.__bindingPointIndex),l.set(xt,st))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},lt=null,dt={},d={},u=new WeakMap,h=[],x=null,w=!1,g=null,m=null,v=null,y=null,_=null,P=null,C=null,A=new _e(0,0,0),D=0,S=!1,M=null,L=null,F=null,B=null,Q=null,yt.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ot,disable:ut,bindFramebuffer:Pt,drawBuffers:Vt,useProgram:bt,setBlending:U,setMaterial:zt,setFlipSided:Rt,setCullFace:Dt,setLineWidth:It,setPolygonOffset:Qt,setScissorTest:Tt,activeTexture:I,bindTexture:b,unbindTexture:V,compressedTexImage2D:it,compressedTexImage3D:nt,texImage2D:At,texImage3D:Yt,updateUBOMapping:te,uniformBlockBinding:Bt,texStorage2D:Ut,texStorage3D:ct,texSubImage2D:et,texSubImage3D:vt,compressedTexSubImage2D:gt,compressedTexSubImage3D:ht,scissor:le,viewport:Ft,reset:re}}function Yc(o,t,n,e){const i=U2(e);switch(n){case Bf:return o*t;case Hf:return o*t;case Vf:return o*t*2;case Wf:return o*t/i.components*i.byteLength;case Ml:return o*t/i.components*i.byteLength;case Xf:return o*t*2/i.components*i.byteLength;case Sl:return o*t*2/i.components*i.byteLength;case Gf:return o*t*3/i.components*i.byteLength;case Wn:return o*t*4/i.components*i.byteLength;case bl:return o*t*4/i.components*i.byteLength;case vr:case Mr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Sr:case br:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Wa:return Math.max(o,16)*Math.max(t,8)/4;case Ga:case Va:return Math.max(o,8)*Math.max(t,8)/2;case Xa:case Ya:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Za:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tr:case ll:case cl:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Yf:case fl:return Math.ceil(o/4)*Math.ceil(t/4)*8;case dl:case hl:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function U2(o){switch(o){case mi:case Ff:return{byteLength:1,components:1};case vs:case kf:case Rs:return{byteLength:2,components:1};case yl:case vl:return{byteLength:2,components:4};case Qi:case _l:case di:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function N2(o,t,n,e,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,f=new WeakMap;let d;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,b){return h?new OffscreenCanvas(I,b):Rr("canvas")}function w(I,b,V){let it=1;const nt=Tt(I);if((nt.width>V||nt.height>V)&&(it=V/Math.max(nt.width,nt.height)),it<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const et=Math.floor(it*nt.width),vt=Math.floor(it*nt.height);d===void 0&&(d=x(et,vt));const gt=b?x(et,vt):d;return gt.width=et,gt.height=vt,gt.getContext("2d").drawImage(I,0,0,et,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+et+"x"+vt+")."),gt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){o.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function y(I,b,V,it,nt=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let et=b;if(b===o.RED&&(V===o.FLOAT&&(et=o.R32F),V===o.HALF_FLOAT&&(et=o.R16F),V===o.UNSIGNED_BYTE&&(et=o.R8)),b===o.RED_INTEGER&&(V===o.UNSIGNED_BYTE&&(et=o.R8UI),V===o.UNSIGNED_SHORT&&(et=o.R16UI),V===o.UNSIGNED_INT&&(et=o.R32UI),V===o.BYTE&&(et=o.R8I),V===o.SHORT&&(et=o.R16I),V===o.INT&&(et=o.R32I)),b===o.RG&&(V===o.FLOAT&&(et=o.RG32F),V===o.HALF_FLOAT&&(et=o.RG16F),V===o.UNSIGNED_BYTE&&(et=o.RG8)),b===o.RG_INTEGER&&(V===o.UNSIGNED_BYTE&&(et=o.RG8UI),V===o.UNSIGNED_SHORT&&(et=o.RG16UI),V===o.UNSIGNED_INT&&(et=o.RG32UI),V===o.BYTE&&(et=o.RG8I),V===o.SHORT&&(et=o.RG16I),V===o.INT&&(et=o.RG32I)),b===o.RGB_INTEGER&&(V===o.UNSIGNED_BYTE&&(et=o.RGB8UI),V===o.UNSIGNED_SHORT&&(et=o.RGB16UI),V===o.UNSIGNED_INT&&(et=o.RGB32UI),V===o.BYTE&&(et=o.RGB8I),V===o.SHORT&&(et=o.RGB16I),V===o.INT&&(et=o.RGB32I)),b===o.RGBA_INTEGER&&(V===o.UNSIGNED_BYTE&&(et=o.RGBA8UI),V===o.UNSIGNED_SHORT&&(et=o.RGBA16UI),V===o.UNSIGNED_INT&&(et=o.RGBA32UI),V===o.BYTE&&(et=o.RGBA8I),V===o.SHORT&&(et=o.RGBA16I),V===o.INT&&(et=o.RGBA32I)),b===o.RGB&&V===o.UNSIGNED_INT_5_9_9_9_REV&&(et=o.RGB9_E5),b===o.RGBA){const vt=nt?Lr:Ee.getTransfer(it);V===o.FLOAT&&(et=o.RGBA32F),V===o.HALF_FLOAT&&(et=o.RGBA16F),V===o.UNSIGNED_BYTE&&(et=vt===De?o.SRGB8_ALPHA8:o.RGBA8),V===o.UNSIGNED_SHORT_4_4_4_4&&(et=o.RGBA4),V===o.UNSIGNED_SHORT_5_5_5_1&&(et=o.RGB5_A1)}return(et===o.R16F||et===o.R32F||et===o.RG16F||et===o.RG32F||et===o.RGBA16F||et===o.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(I,b){let V;return I?b===null||b===Qi||b===No?V=o.DEPTH24_STENCIL8:b===di?V=o.DEPTH32F_STENCIL8:b===vs&&(V=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qi||b===No?V=o.DEPTH_COMPONENT24:b===di?V=o.DEPTH_COMPONENT32F:b===vs&&(V=o.DEPTH_COMPONENT16),V}function P(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xn&&I.minFilter!==Qn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function C(I){const b=I.target;b.removeEventListener("dispose",C),D(b),b.isVideoTexture&&f.delete(b)}function A(I){const b=I.target;b.removeEventListener("dispose",A),M(b)}function D(I){const b=e.get(I);if(b.__webglInit===void 0)return;const V=I.source,it=u.get(V);if(it){const nt=it[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(I),Object.keys(it).length===0&&u.delete(V)}e.remove(I)}function S(I){const b=e.get(I);o.deleteTexture(b.__webglTexture);const V=I.source,it=u.get(V);delete it[b.__cacheKey],r.memory.textures--}function M(I){const b=e.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),e.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let nt=0;nt<b.__webglFramebuffer[it].length;nt++)o.deleteFramebuffer(b.__webglFramebuffer[it][nt]);else o.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)o.deleteFramebuffer(b.__webglFramebuffer[it]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=I.textures;for(let it=0,nt=V.length;it<nt;it++){const et=e.get(V[it]);et.__webglTexture&&(o.deleteTexture(et.__webglTexture),r.memory.textures--),e.remove(V[it])}e.remove(I)}let L=0;function F(){L=0}function B(){const I=L;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),L+=1,I}function Q(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function q(I,b){const V=e.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){const it=I.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(V,I,b);return}}n.bindTexture(o.TEXTURE_2D,V.__webglTexture,o.TEXTURE0+b)}function G(I,b){const V=e.get(I);if(I.version>0&&V.__version!==I.version){H(V,I,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,V.__webglTexture,o.TEXTURE0+b)}function J(I,b){const V=e.get(I);if(I.version>0&&V.__version!==I.version){H(V,I,b);return}n.bindTexture(o.TEXTURE_3D,V.__webglTexture,o.TEXTURE0+b)}function X(I,b){const V=e.get(I);if(I.version>0&&V.__version!==I.version){W(V,I,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,V.__webglTexture,o.TEXTURE0+b)}const lt={[Pe]:o.REPEAT,[Ri]:o.CLAMP_TO_EDGE,[Ba]:o.MIRRORED_REPEAT},dt={[Xn]:o.NEAREST,[ah]:o.NEAREST_MIPMAP_NEAREST,[Ws]:o.NEAREST_MIPMAP_LINEAR,[Qn]:o.LINEAR,[Wr]:o.LINEAR_MIPMAP_NEAREST,[ji]:o.LINEAR_MIPMAP_LINEAR},pt={[dh]:o.NEVER,[xh]:o.ALWAYS,[hh]:o.LESS,[qf]:o.LEQUAL,[uh]:o.EQUAL,[gh]:o.GEQUAL,[ph]:o.GREATER,[mh]:o.NOTEQUAL};function Et(I,b){if(b.type===di&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qn||b.magFilter===Wr||b.magFilter===Ws||b.magFilter===ji||b.minFilter===Qn||b.minFilter===Wr||b.minFilter===Ws||b.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,lt[b.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,lt[b.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,lt[b.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,dt[b.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xn||b.minFilter!==Ws&&b.minFilter!==ji||b.type===di&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||e.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),e.get(b).__currentAnisotropy=b.anisotropy}}}function yt(I,b){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",C));const it=b.source;let nt=u.get(it);nt===void 0&&(nt={},u.set(it,nt));const et=Q(b);if(et!==I.__cacheKey){nt[et]===void 0&&(nt[et]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,V=!0),nt[et].usedTimes++;const vt=nt[I.__cacheKey];vt!==void 0&&(nt[I.__cacheKey].usedTimes--,vt.usedTimes===0&&S(b)),I.__cacheKey=et,I.__webglTexture=nt[et].texture}return V}function H(I,b,V){let it=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=o.TEXTURE_3D);const nt=yt(I,b),et=b.source;n.bindTexture(it,I.__webglTexture,o.TEXTURE0+V);const vt=e.get(et);if(et.version!==vt.__version||nt===!0){n.activeTexture(o.TEXTURE0+V);const gt=Ee.getPrimaries(Ee.workingColorSpace),ht=b.colorSpace===Ai?null:Ee.getPrimaries(b.colorSpace),Ut=b.colorSpace===Ai||gt===ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ct=w(b.image,!1,i.maxTextureSize);ct=Qt(b,ct);const At=s.convert(b.format,b.colorSpace),Yt=s.convert(b.type);let le=y(b.internalFormat,At,Yt,b.colorSpace,b.isVideoTexture);Et(it,b);let Ft;const te=b.mipmaps,Bt=b.isVideoTexture!==!0,re=vt.__version===void 0||nt===!0,z=et.dataReady,xt=P(b,ct);if(b.isDepthTexture)le=_(b.format===zo,b.type),re&&(Bt?n.texStorage2D(o.TEXTURE_2D,1,le,ct.width,ct.height):n.texImage2D(o.TEXTURE_2D,0,le,ct.width,ct.height,0,At,Yt,null));else if(b.isDataTexture)if(te.length>0){Bt&&re&&n.texStorage2D(o.TEXTURE_2D,xt,le,te[0].width,te[0].height);for(let j=0,st=te.length;j<st;j++)Ft=te[j],Bt?z&&n.texSubImage2D(o.TEXTURE_2D,j,0,0,Ft.width,Ft.height,At,Yt,Ft.data):n.texImage2D(o.TEXTURE_2D,j,le,Ft.width,Ft.height,0,At,Yt,Ft.data);b.generateMipmaps=!1}else Bt?(re&&n.texStorage2D(o.TEXTURE_2D,xt,le,ct.width,ct.height),z&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ct.width,ct.height,At,Yt,ct.data)):n.texImage2D(o.TEXTURE_2D,0,le,ct.width,ct.height,0,At,Yt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Bt&&re&&n.texStorage3D(o.TEXTURE_2D_ARRAY,xt,le,te[0].width,te[0].height,ct.depth);for(let j=0,st=te.length;j<st;j++)if(Ft=te[j],b.format!==Wn)if(At!==null)if(Bt){if(z)if(b.layerUpdates.size>0){const wt=Yc(Ft.width,Ft.height,b.format,b.type);for(const _t of b.layerUpdates){const Zt=Ft.data.subarray(_t*wt/Ft.data.BYTES_PER_ELEMENT,(_t+1)*wt/Ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,_t,Ft.width,Ft.height,1,At,Zt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,0,Ft.width,Ft.height,ct.depth,At,Ft.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,j,le,Ft.width,Ft.height,ct.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?z&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,0,Ft.width,Ft.height,ct.depth,At,Yt,Ft.data):n.texImage3D(o.TEXTURE_2D_ARRAY,j,le,Ft.width,Ft.height,ct.depth,0,At,Yt,Ft.data)}else{Bt&&re&&n.texStorage2D(o.TEXTURE_2D,xt,le,te[0].width,te[0].height);for(let j=0,st=te.length;j<st;j++)Ft=te[j],b.format!==Wn?At!==null?Bt?z&&n.compressedTexSubImage2D(o.TEXTURE_2D,j,0,0,Ft.width,Ft.height,At,Ft.data):n.compressedTexImage2D(o.TEXTURE_2D,j,le,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?z&&n.texSubImage2D(o.TEXTURE_2D,j,0,0,Ft.width,Ft.height,At,Yt,Ft.data):n.texImage2D(o.TEXTURE_2D,j,le,Ft.width,Ft.height,0,At,Yt,Ft.data)}else if(b.isDataArrayTexture)if(Bt){if(re&&n.texStorage3D(o.TEXTURE_2D_ARRAY,xt,le,ct.width,ct.height,ct.depth),z)if(b.layerUpdates.size>0){const j=Yc(ct.width,ct.height,b.format,b.type);for(const st of b.layerUpdates){const wt=ct.data.subarray(st*j/ct.data.BYTES_PER_ELEMENT,(st+1)*j/ct.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,At,Yt,wt)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,At,Yt,ct.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,le,ct.width,ct.height,ct.depth,0,At,Yt,ct.data);else if(b.isData3DTexture)Bt?(re&&n.texStorage3D(o.TEXTURE_3D,xt,le,ct.width,ct.height,ct.depth),z&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,At,Yt,ct.data)):n.texImage3D(o.TEXTURE_3D,0,le,ct.width,ct.height,ct.depth,0,At,Yt,ct.data);else if(b.isFramebufferTexture){if(re)if(Bt)n.texStorage2D(o.TEXTURE_2D,xt,le,ct.width,ct.height);else{let j=ct.width,st=ct.height;for(let wt=0;wt<xt;wt++)n.texImage2D(o.TEXTURE_2D,wt,le,j,st,0,At,Yt,null),j>>=1,st>>=1}}else if(te.length>0){if(Bt&&re){const j=Tt(te[0]);n.texStorage2D(o.TEXTURE_2D,xt,le,j.width,j.height)}for(let j=0,st=te.length;j<st;j++)Ft=te[j],Bt?z&&n.texSubImage2D(o.TEXTURE_2D,j,0,0,At,Yt,Ft):n.texImage2D(o.TEXTURE_2D,j,le,At,Yt,Ft);b.generateMipmaps=!1}else if(Bt){if(re){const j=Tt(ct);n.texStorage2D(o.TEXTURE_2D,xt,le,j.width,j.height)}z&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,At,Yt,ct)}else n.texImage2D(o.TEXTURE_2D,0,le,At,Yt,ct);g(b)&&m(it),vt.__version=et.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function W(I,b,V){if(b.image.length!==6)return;const it=yt(I,b),nt=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+V);const et=e.get(nt);if(nt.version!==et.__version||it===!0){n.activeTexture(o.TEXTURE0+V);const vt=Ee.getPrimaries(Ee.workingColorSpace),gt=b.colorSpace===Ai?null:Ee.getPrimaries(b.colorSpace),ht=b.colorSpace===Ai||vt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Ut=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,At=[];for(let st=0;st<6;st++)!Ut&&!ct?At[st]=w(b.image[st],!0,i.maxCubemapSize):At[st]=ct?b.image[st].image:b.image[st],At[st]=Qt(b,At[st]);const Yt=At[0],le=s.convert(b.format,b.colorSpace),Ft=s.convert(b.type),te=y(b.internalFormat,le,Ft,b.colorSpace),Bt=b.isVideoTexture!==!0,re=et.__version===void 0||it===!0,z=nt.dataReady;let xt=P(b,Yt);Et(o.TEXTURE_CUBE_MAP,b);let j;if(Ut){Bt&&re&&n.texStorage2D(o.TEXTURE_CUBE_MAP,xt,te,Yt.width,Yt.height);for(let st=0;st<6;st++){j=At[st].mipmaps;for(let wt=0;wt<j.length;wt++){const _t=j[wt];b.format!==Wn?le!==null?Bt?z&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,_t.width,_t.height,le,_t.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,te,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,_t.width,_t.height,le,Ft,_t.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,te,_t.width,_t.height,0,le,Ft,_t.data)}}}else{if(j=b.mipmaps,Bt&&re){j.length>0&&xt++;const st=Tt(At[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,xt,te,st.width,st.height)}for(let st=0;st<6;st++)if(ct){Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,At[st].width,At[st].height,le,Ft,At[st].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,te,At[st].width,At[st].height,0,le,Ft,At[st].data);for(let wt=0;wt<j.length;wt++){const Zt=j[wt].image[st].image;Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,Zt.width,Zt.height,le,Ft,Zt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,te,Zt.width,Zt.height,0,le,Ft,Zt.data)}}else{Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,le,Ft,At[st]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,te,le,Ft,At[st]);for(let wt=0;wt<j.length;wt++){const _t=j[wt];Bt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,le,Ft,_t.image[st]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,te,le,Ft,_t.image[st])}}}g(b)&&m(o.TEXTURE_CUBE_MAP),et.__version=nt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Z(I,b,V,it,nt,et){const vt=s.convert(V.format,V.colorSpace),gt=s.convert(V.type),ht=y(V.internalFormat,vt,gt,V.colorSpace),Ut=e.get(b),ct=e.get(V);if(ct.__renderTarget=b,!Ut.__hasExternalTextures){const At=Math.max(1,b.width>>et),Yt=Math.max(1,b.height>>et);nt===o.TEXTURE_3D||nt===o.TEXTURE_2D_ARRAY?n.texImage3D(nt,et,ht,At,Yt,b.depth,0,vt,gt,null):n.texImage2D(nt,et,ht,At,Yt,0,vt,gt,null)}n.bindFramebuffer(o.FRAMEBUFFER,I),Dt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,it,nt,ct.__webglTexture,0,Rt(b)):(nt===o.TEXTURE_2D||nt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,it,nt,ct.__webglTexture,et),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ot(I,b,V){if(o.bindRenderbuffer(o.RENDERBUFFER,I),b.depthBuffer){const it=b.depthTexture,nt=it&&it.isDepthTexture?it.type:null,et=_(b.stencilBuffer,nt),vt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=Rt(b);Dt(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,et,b.width,b.height):V?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,et,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,et,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,I)}else{const it=b.textures;for(let nt=0;nt<it.length;nt++){const et=it[nt],vt=s.convert(et.format,et.colorSpace),gt=s.convert(et.type),ht=y(et.internalFormat,vt,gt,et.colorSpace),Ut=Rt(b);V&&Dt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ht,b.width,b.height):Dt(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ht,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ht,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ut(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=e.get(b.depthTexture);it.__renderTarget=b,(!it.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const nt=it.__webglTexture,et=Rt(b);if(b.depthTexture.format===Co)Dt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,nt,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,nt,0);else if(b.depthTexture.format===zo)Dt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,nt,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Pt(I){const b=e.get(I),V=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const it=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",nt)};it.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=it}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ut(b.__webglFramebuffer,I)}else if(V){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=o.createRenderbuffer(),ot(b.__webglDepthbuffer[it],I,!1);else{const nt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[it];o.bindRenderbuffer(o.RENDERBUFFER,et),o.framebufferRenderbuffer(o.FRAMEBUFFER,nt,o.RENDERBUFFER,et)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),ot(b.__webglDepthbuffer,I,!1);else{const it=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,it,o.RENDERBUFFER,nt)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(I,b,V){const it=e.get(I);b!==void 0&&Z(it.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),V!==void 0&&Pt(I)}function bt(I){const b=I.texture,V=e.get(I),it=e.get(b);I.addEventListener("dispose",A);const nt=I.textures,et=I.isWebGLCubeRenderTarget===!0,vt=nt.length>1;if(vt||(it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture()),it.__version=b.version,r.memory.textures++),et){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let ht=0;ht<b.mipmaps.length;ht++)V.__webglFramebuffer[gt][ht]=o.createFramebuffer()}else V.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)V.__webglFramebuffer[gt]=o.createFramebuffer()}else V.__webglFramebuffer=o.createFramebuffer();if(vt)for(let gt=0,ht=nt.length;gt<ht;gt++){const Ut=e.get(nt[gt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=o.createTexture(),r.memory.textures++)}if(I.samples>0&&Dt(I)===!1){V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){const ht=nt[gt];V.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);const Ut=s.convert(ht.format,ht.colorSpace),ct=s.convert(ht.type),At=y(ht.internalFormat,Ut,ct,ht.colorSpace,I.isXRRenderTarget===!0),Yt=Rt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,At,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),ot(V.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(et){n.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture),Et(o.TEXTURE_CUBE_MAP,b);for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Z(V.__webglFramebuffer[gt][ht],I,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ht);else Z(V.__webglFramebuffer[gt],I,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(b)&&m(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(vt){for(let gt=0,ht=nt.length;gt<ht;gt++){const Ut=nt[gt],ct=e.get(Ut);n.bindTexture(o.TEXTURE_2D,ct.__webglTexture),Et(o.TEXTURE_2D,Ut),Z(V.__webglFramebuffer,I,Ut,o.COLOR_ATTACHMENT0+gt,o.TEXTURE_2D,0),g(Ut)&&m(o.TEXTURE_2D)}n.unbindTexture()}else{let gt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(gt,it.__webglTexture),Et(gt,b),b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Z(V.__webglFramebuffer[ht],I,b,o.COLOR_ATTACHMENT0,gt,ht);else Z(V.__webglFramebuffer,I,b,o.COLOR_ATTACHMENT0,gt,0);g(b)&&m(gt),n.unbindTexture()}I.depthBuffer&&Pt(I)}function mt(I){const b=I.textures;for(let V=0,it=b.length;V<it;V++){const nt=b[V];if(g(nt)){const et=v(I),vt=e.get(nt).__webglTexture;n.bindTexture(et,vt),m(et),n.unbindTexture()}}}const oe=[],U=[];function zt(I){if(I.samples>0){if(Dt(I)===!1){const b=I.textures,V=I.width,it=I.height;let nt=o.COLOR_BUFFER_BIT;const et=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=e.get(I),gt=b.length>1;if(gt)for(let ht=0;ht<b.length;ht++)n.bindFramebuffer(o.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ht,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ht,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<b.length;ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const Ut=e.get(b[ht]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ut,0)}o.blitFramebuffer(0,0,V,it,0,0,V,it,nt,o.NEAREST),l===!0&&(oe.length=0,U.length=0,oe.push(o.COLOR_ATTACHMENT0+ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(oe.push(et),U.push(et),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,U)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,oe))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let ht=0;ht<b.length;ht++){n.bindFramebuffer(o.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ht,o.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const Ut=e.get(b[ht]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ht,o.TEXTURE_2D,Ut,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Rt(I){return Math.min(i.maxSamples,I.samples)}function Dt(I){const b=e.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(I){const b=r.render.frame;f.get(I)!==b&&(f.set(I,b),I.update())}function Qt(I,b){const V=I.colorSpace,it=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Oo&&V!==Ai&&(Ee.getTransfer(V)===De?(it!==Wn||nt!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Dt}function z2(o,t){function n(e,i=Ai){let s;const r=Ee.getTransfer(i);if(e===mi)return o.UNSIGNED_BYTE;if(e===yl)return o.UNSIGNED_SHORT_4_4_4_4;if(e===vl)return o.UNSIGNED_SHORT_5_5_5_1;if(e===Of)return o.UNSIGNED_INT_5_9_9_9_REV;if(e===Ff)return o.BYTE;if(e===kf)return o.SHORT;if(e===vs)return o.UNSIGNED_SHORT;if(e===_l)return o.INT;if(e===Qi)return o.UNSIGNED_INT;if(e===di)return o.FLOAT;if(e===Rs)return o.HALF_FLOAT;if(e===Bf)return o.ALPHA;if(e===Gf)return o.RGB;if(e===Wn)return o.RGBA;if(e===Hf)return o.LUMINANCE;if(e===Vf)return o.LUMINANCE_ALPHA;if(e===Co)return o.DEPTH_COMPONENT;if(e===zo)return o.DEPTH_STENCIL;if(e===Wf)return o.RED;if(e===Ml)return o.RED_INTEGER;if(e===Xf)return o.RG;if(e===Sl)return o.RG_INTEGER;if(e===bl)return o.RGBA_INTEGER;if(e===vr||e===Mr||e===Sr||e===br)if(r===De)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(e===vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(e===vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(e===Ga||e===Ha||e===Va||e===Wa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(e===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(e===Xa||e===Ya||e===Za)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(e===Xa||e===Ya)return r===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(e===Za)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(e===qa||e===$a||e===Ka||e===Ja||e===ja||e===Qa||e===tl||e===el||e===nl||e===il||e===ol||e===sl||e===rl||e===al)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(e===qa)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===$a)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===Ka)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===Ja)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===ja)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===Qa)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===tl)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===el)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===nl)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===il)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===ol)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===sl)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===rl)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===al)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(e===Tr||e===ll||e===cl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(e===Tr)return r===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(e===Yf||e===fl||e===dl||e===hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(e===Tr)return s.COMPRESSED_RED_RGTC1_EXT;if(e===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return e===No?o.UNSIGNED_INT_24_8:o[e]!==void 0?o[e]:null}return{convert:n}}class F2 extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lt extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k2={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const e of t.hand.values())this._getHandJoint(n,e)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,e){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const w of t.hand.values()){const g=n.getJointPose(w,e),m=this._getHandJoint(c,w);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),h=.02,x=.005;c.inputState.pinching&&u>h+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=h-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,e),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(t.targetRaySpace,e),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k2)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const e=new Lt;e.matrixAutoUpdate=!1,e.visible=!1,t.joints[n.jointName]=e,t.add(e)}return t.joints[n.jointName]}}const O2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B2=`
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

}`;class G2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,e){if(this.texture===null){const i=new Pn,s=t.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!=e.depthNear||n.depthFar!=e.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,e=new Li({vertexShader:O2,fragmentShader:B2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new p(new Xt(20,20),e)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H2 extends Bo{constructor(t,n){super();const e=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,h=null,x=null;const w=new G2,g=n.getContextAttributes();let m=null,v=null;const y=[],_=[],P=new jt;let C=null;const A=new Nn;A.viewport=new Ue;const D=new Nn;D.viewport=new Ue;const S=[A,D],M=new F2;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=y[H];return W===void 0&&(W=new wa,y[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=y[H];return W===void 0&&(W=new wa,y[H]=W),W.getGripSpace()},this.getHand=function(H){let W=y[H];return W===void 0&&(W=new wa,y[H]=W),W.getHandSpace()};function B(H){const W=_.indexOf(H.inputSource);if(W===-1)return;const Z=y[W];Z!==void 0&&(Z.update(H.inputSource,H.frame,c||r),Z.dispatchEvent({type:H.type,data:H.inputSource}))}function Q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",q);for(let H=0;H<y.length;H++){const W=_[H];W!==null&&(_[H]=null,y[H].disconnect(W))}L=null,F=null,w.reset(),t.setRenderTarget(m),h=null,u=null,d=null,i=null,v=null,yt.stop(),e.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const W={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,n,W),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new to(h.framebufferWidth,h.framebufferHeight,{format:Wn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let W=null,Z=null,ot=null;g.depth&&(ot=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=g.stencil?zo:Co,Z=g.stencil?No:Qi);const ut={colorFormat:n.RGBA8,depthFormat:ot,scaleFactor:s};d=new XRWebGLBinding(i,n),u=d.createProjectionLayer(ut),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new to(u.textureWidth,u.textureHeight,{format:Wn,type:mi,depthTexture:new ld(u.textureWidth,u.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function q(H){for(let W=0;W<H.removed.length;W++){const Z=H.removed[W],ot=_.indexOf(Z);ot>=0&&(_[ot]=null,y[ot].disconnect(Z))}for(let W=0;W<H.added.length;W++){const Z=H.added[W];let ot=_.indexOf(Z);if(ot===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=_.length){_.push(Z),ot=Pt;break}else if(_[Pt]===null){_[Pt]=Z,ot=Pt;break}if(ot===-1)break}const ut=y[ot];ut&&ut.connect(Z)}}const G=new N,J=new N;function X(H,W,Z){G.setFromMatrixPosition(W.matrixWorld),J.setFromMatrixPosition(Z.matrixWorld);const ot=G.distanceTo(J),ut=W.projectionMatrix.elements,Pt=Z.projectionMatrix.elements,Vt=ut[14]/(ut[10]-1),bt=ut[14]/(ut[10]+1),mt=(ut[9]+1)/ut[5],oe=(ut[9]-1)/ut[5],U=(ut[8]-1)/ut[0],zt=(Pt[8]+1)/Pt[0],Rt=Vt*U,Dt=Vt*zt,It=ot/(-U+zt),Qt=It*-U;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Qt),H.translateZ(It),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ut[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Tt=Vt+It,I=bt+It,b=Rt-Qt,V=Dt+(ot-Qt),it=mt*bt/I*Tt,nt=oe*bt/I*Tt;H.projectionMatrix.makePerspective(b,V,it,nt,Tt,I),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function lt(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let W=H.near,Z=H.far;w.texture!==null&&(w.depthNear>0&&(W=w.depthNear),w.depthFar>0&&(Z=w.depthFar)),M.near=D.near=A.near=W,M.far=D.far=A.far=Z,(L!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,F=M.far),A.layers.mask=H.layers.mask|2,D.layers.mask=H.layers.mask|4,M.layers.mask=A.layers.mask|D.layers.mask;const ot=H.parent,ut=M.cameras;lt(M,ot);for(let Pt=0;Pt<ut.length;Pt++)lt(ut[Pt],ot);ut.length===2?X(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),dt(H,M,ot)};function dt(H,W,Z){Z===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(Z.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ms*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(M)};let pt=null;function Et(H,W){if(f=W.getViewerPose(c||r),x=W,f!==null){const Z=f.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let ot=!1;Z.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Pt=0;Pt<Z.length;Pt++){const Vt=Z[Pt];let bt=null;if(h!==null)bt=h.getViewport(Vt);else{const oe=d.getViewSubImage(u,Vt);bt=oe.viewport,Pt===0&&(t.setRenderTargetTextures(v,oe.colorTexture,u.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(v))}let mt=S[Pt];mt===void 0&&(mt=new Nn,mt.layers.enable(Pt),mt.viewport=new Ue,S[Pt]=mt),mt.matrix.fromArray(Vt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Vt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(bt.x,bt.y,bt.width,bt.height),Pt===0&&(M.matrix.copy(mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(mt)}const ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const Pt=d.getDepthInformation(Z[0]);Pt&&Pt.isValid&&Pt.texture&&w.init(t,Pt,i.renderState)}}for(let Z=0;Z<y.length;Z++){const ot=_[Z],ut=y[Z];ot!==null&&ut!==void 0&&ut.update(ot,W,c||r)}pt&&pt(H,W),W.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:W}),x=null}const yt=new rd;yt.setAnimationLoop(Et),this.setAnimationLoop=function(H){pt=H},this.dispose=function(){}}}const Zi=new qn,V2=new ke;function W2(o,t){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function e(g,m){m.color.getRGB(g.fogColor.value,id(o)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),f(g,m)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&h(g,m,_)):m.isMeshMatcapMaterial?(s(g,m),x(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),w(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Cn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Cn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,Zi.copy(_),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(Zi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Cn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function w(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function X2(o,t,n,e){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const _=y.program;e.uniformBlockBinding(v,_)}function c(v,y){let _=i[v.id];_===void 0&&(x(v),_=f(v),i[v.id]=_,v.addEventListener("dispose",g));const P=y.program;e.updateUBOMapping(v,P);const C=t.render.frame;s[v.id]!==C&&(u(v),s[v.id]=C)}function f(v){const y=d();v.__bindingPointIndex=y;const _=o.createBuffer(),P=v.__size,C=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,_),o.bufferData(o.UNIFORM_BUFFER,P,C),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,_),_}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],_=v.uniforms,P=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let C=0,A=_.length;C<A;C++){const D=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,M=D.length;S<M;S++){const L=D[S];if(h(L,C,S,P)===!0){const F=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Q=0;for(let q=0;q<B.length;q++){const G=B[q],J=w(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,F+Q,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,Q),Q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,L.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function h(v,y,_,P){const C=v.value,A=y+"_"+_;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const D=P[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return P[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function x(v){const y=v.uniforms;let _=0;const P=16;for(let A=0,D=y.length;A<D;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=S.length;M<L;M++){const F=S[M],B=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,q=B.length;Q<q;Q++){const G=B[Q],J=w(G),X=_%P,lt=X%J.boundary,dt=X+lt;_+=lt,dt!==0&&P-dt<J.storage&&(_+=P-dt),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=J.storage}}}const C=_%P;return C>0&&(_+=P-C),v.__size=_,v.__cache={},this}function w(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Y2{constructor(t={}){const{canvas:n=Uh(),context:e=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let h;if(e!==null){if(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=e.getContextAttributes().alpha}else h=r;const x=new Uint32Array(4),w=new Int32Array(4);let g=null,m=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=Pi,this.toneMappingExposure=1;const _=this;let P=!1,C=0,A=0,D=null,S=-1,M=null;const L=new Ue,F=new Ue;let B=null;const Q=new _e(0);let q=0,G=n.width,J=n.height,X=1,lt=null,dt=null;const pt=new Ue(0,0,G,J),Et=new Ue(0,0,G,J);let yt=!1;const H=new El;let W=!1,Z=!1;const ot=new ke,ut=new ke,Pt=new N,Vt=new Ue,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function oe(){return D===null?X:1}let U=e;function zt(E,k){return n.getContext(E,k)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wl}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",_t,!1),U===null){const k="webgl2";if(U=zt(k,E),U===null)throw zt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Rt,Dt,It,Qt,Tt,I,b,V,it,nt,et,vt,gt,ht,Ut,ct,At,Yt,le,Ft,te,Bt,re,z;function xt(){Rt=new Jp(U),Rt.init(),Bt=new z2(U,Rt),Dt=new Xp(U,Rt,t,Bt),It=new D2(U,Rt),Dt.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),Qt=new tm(U),Tt=new w2,I=new N2(U,Rt,It,Tt,Dt,Bt,Qt),b=new Zp(_),V=new Kp(_),it=new a0(U),re=new Vp(U,it),nt=new jp(U,it,Qt,re),et=new nm(U,nt,it,Qt),le=new em(U,Dt,I),ct=new Yp(Tt),vt=new x2(_,b,V,Rt,Dt,re,ct),gt=new W2(_,Tt),ht=new y2,Ut=new E2(Rt),Yt=new Hp(_,b,V,It,et,h,l),At=new I2(_,et,Dt),z=new X2(U,Qt,Dt,It),Ft=new Wp(U,Rt,Qt),te=new Qp(U,Rt,Qt),Qt.programs=vt.programs,_.capabilities=Dt,_.extensions=Rt,_.properties=Tt,_.renderLists=ht,_.shadowMap=At,_.state=It,_.info=Qt}xt();const j=new H2(_,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(G,J,!1))},this.getSize=function(E){return E.set(G,J)},this.setSize=function(E,k,K=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,J=k,n.width=Math.floor(E*X),n.height=Math.floor(k*X),K===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(G*X,J*X).floor()},this.setDrawingBufferSize=function(E,k,K){G=E,J=k,X=K,n.width=Math.floor(E*K),n.height=Math.floor(k*K),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,k,K,$){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,k,K,$),It.viewport(L.copy(pt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Et)},this.setScissor=function(E,k,K,$){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,k,K,$),It.scissor(F.copy(Et).multiplyScalar(X).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){It.setScissorTest(yt=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(E=!0,k=!0,K=!0){let $=0;if(E){let O=!1;if(D!==null){const at=D.texture.format;O=at===bl||at===Sl||at===Ml}if(O){const at=D.texture.type,Mt=at===mi||at===Qi||at===vs||at===No||at===yl||at===vl,Ct=Yt.getClearColor(),Nt=Yt.getClearAlpha(),Kt=Ct.r,ae=Ct.g,rt=Ct.b;Mt?(x[0]=Kt,x[1]=ae,x[2]=rt,x[3]=Nt,U.clearBufferuiv(U.COLOR,0,x)):(w[0]=Kt,w[1]=ae,w[2]=rt,w[3]=Nt,U.clearBufferiv(U.COLOR,0,w))}else $|=U.COLOR_BUFFER_BIT}k&&($|=U.DEPTH_BUFFER_BIT),K&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",_t,!1),ht.dispose(),Ut.dispose(),Tt.dispose(),b.dispose(),V.dispose(),et.dispose(),re.dispose(),z.dispose(),vt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ve),j.removeEventListener("sessionend",Fe),Ce.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=Qt.autoReset,k=At.enabled,K=At.autoUpdate,$=At.needsUpdate,O=At.type;xt(),Qt.autoReset=E,At.enabled=k,At.autoUpdate=K,At.needsUpdate=$,At.type=O}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){const k=E.target;k.removeEventListener("dispose",Zt),fe(k)}function fe(E){be(E),Tt.remove(E)}function be(E){const k=Tt.get(E).programs;k!==void 0&&(k.forEach(function(K){vt.releaseProgram(K)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,K,$,O,at){k===null&&(k=bt);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,Ct=Te(E,k,K,$,O);It.setMaterial($,Mt);let Nt=K.index,Kt=1;if($.wireframe===!0){if(Nt=nt.getWireframeAttribute(K),Nt===void 0)return;Kt=2}const ae=K.drawRange,rt=K.attributes.position;let St=ae.start*Kt,qt=(ae.start+ae.count)*Kt;at!==null&&(St=Math.max(St,at.start*Kt),qt=Math.min(qt,(at.start+at.count)*Kt)),Nt!==null?(St=Math.max(St,0),qt=Math.min(qt,Nt.count)):rt!=null&&(St=Math.max(St,0),qt=Math.min(qt,rt.count));const Jt=qt-St;if(Jt<0||Jt===1/0)return;re.setup(O,$,Ct,K,Nt);let pe,he=Ft;if(Nt!==null&&(pe=it.get(Nt),he=te,he.setIndex(pe)),O.isMesh)$.wireframe===!0?(It.setLineWidth($.wireframeLinewidth*oe()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(O.isLine){let Ot=$.linewidth;Ot===void 0&&(Ot=1),It.setLineWidth(Ot*oe()),O.isLineSegments?he.setMode(U.LINES):O.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else O.isPoints?he.setMode(U.POINTS):O.isSprite&&he.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ot=O._multiDrawStarts,Ze=O._multiDrawCounts,ye=O._multiDrawCount,je=Nt?it.get(Nt).bytesPerElement:1,Mn=Tt.get($).currentProgram.getUniforms();for(let Ge=0;Ge<ye;Ge++)Mn.setValue(U,"_gl_DrawID",Ge),he.render(Ot[Ge]/je,Ze[Ge])}else if(O.isInstancedMesh)he.renderInstances(St,Jt,O.count);else if(K.isInstancedBufferGeometry){const Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ze=Math.min(K.instanceCount,Ot);he.renderInstances(St,Jt,Ze)}else he.render(St,Jt)};function ce(E,k,K){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=Cn,E.needsUpdate=!0,Be(E,k,K),E.side=Ii,E.needsUpdate=!0,Be(E,k,K),E.side=pn):Be(E,k,K)}this.compile=function(E,k,K=null){K===null&&(K=E),m=Ut.get(K),m.init(k),y.push(m),K.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==K&&E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const $=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const at=O.material;if(at)if(Array.isArray(at))for(let Mt=0;Mt<at.length;Mt++){const Ct=at[Mt];ce(Ct,K,O),$.add(Ct)}else ce(at,K,O),$.add(at)}),y.pop(),m=null,$},this.compileAsync=function(E,k,K=null){const $=this.compile(E,k,K);return new Promise(O=>{function at(){if($.forEach(function(Mt){Tt.get(Mt).currentProgram.isReady()&&$.delete(Mt)}),$.size===0){O(E);return}setTimeout(at,10)}Rt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Le=null;function Ne(E){Le&&Le(E)}function Ve(){Ce.stop()}function Fe(){Ce.start()}const Ce=new rd;Ce.setAnimationLoop(Ne),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(E){Le=E,j.setAnimationLoop(E),E===null?Ce.stop():Ce.start()},j.addEventListener("sessionstart",Ve),j.addEventListener("sessionend",Fe),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,k,D),m=Ut.get(E,y.length),m.init(k),y.push(m),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H.setFromProjectionMatrix(ut),Z=this.localClippingEnabled,W=ct.init(this.clippingPlanes,Z),g=ht.get(E,v.length),g.init(),v.push(g),j.enabled===!0&&j.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&ee(at,k,-1/0,_.sortObjects)}ee(E,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(lt,dt),mt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,mt&&Yt.addToRenderList(g,E),this.info.render.frame++,W===!0&&ct.beginShadows();const K=m.state.shadowsArray;At.render(K,E,k),W===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,O=g.transmissive;if(m.setupLights(),k.isArrayCamera){const at=k.cameras;if(O.length>0)for(let Mt=0,Ct=at.length;Mt<Ct;Mt++){const Nt=at[Mt];ve($,O,E,Nt)}mt&&Yt.render(E);for(let Mt=0,Ct=at.length;Mt<Ct;Mt++){const Nt=at[Mt];$t(g,E,Nt,Nt.viewport)}}else O.length>0&&ve($,O,E,k),mt&&Yt.render(E),$t(g,E,k);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(_,E,k),re.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],W===!0&&ct.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ee(E,k,K,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){$&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);const Mt=et.update(E),Ct=E.material;Ct.visible&&g.push(E,Mt,Ct,K,Vt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){const Mt=et.update(E),Ct=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Vt.copy(Mt.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(ut)),Array.isArray(Ct)){const Nt=Mt.groups;for(let Kt=0,ae=Nt.length;Kt<ae;Kt++){const rt=Nt[Kt],St=Ct[rt.materialIndex];St&&St.visible&&g.push(E,Mt,St,K,Vt.z,rt)}}else Ct.visible&&g.push(E,Mt,Ct,K,Vt.z,null)}}const at=E.children;for(let Mt=0,Ct=at.length;Mt<Ct;Mt++)ee(at[Mt],k,K,$)}function $t(E,k,K,$){const O=E.opaque,at=E.transmissive,Mt=E.transparent;m.setupLightsView(K),W===!0&&ct.setGlobalState(_.clippingPlanes,K),$&&It.viewport(L.copy($)),O.length>0&&de(O,k,K),at.length>0&&de(at,k,K),Mt.length>0&&de(Mt,k,K),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ve(E,k,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new to(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Rs:mi,minFilter:ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const at=m.state.transmissionRenderTarget[$.id],Mt=$.viewport||L;at.setSize(Mt.z,Mt.w);const Ct=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(Q),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),mt&&Yt.render(K);const Nt=_.toneMapping;_.toneMapping=Pi;const Kt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),W===!0&&ct.setGlobalState(_.clippingPlanes,$),de(E,K,$),I.updateMultisampleRenderTarget(at),I.updateRenderTargetMipmap(at),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let rt=0,St=k.length;rt<St;rt++){const qt=k[rt],Jt=qt.object,pe=qt.geometry,he=qt.material,Ot=qt.group;if(he.side===pn&&Jt.layers.test($.layers)){const Ze=he.side;he.side=Cn,he.needsUpdate=!0,kt(Jt,K,$,pe,he,Ot),he.side=Ze,he.needsUpdate=!0,ae=!0}}ae===!0&&(I.updateMultisampleRenderTarget(at),I.updateRenderTargetMipmap(at))}_.setRenderTarget(Ct),_.setClearColor(Q,q),Kt!==void 0&&($.viewport=Kt),_.toneMapping=Nt}function de(E,k,K){const $=k.isScene===!0?k.overrideMaterial:null;for(let O=0,at=E.length;O<at;O++){const Mt=E[O],Ct=Mt.object,Nt=Mt.geometry,Kt=$===null?Mt.material:$,ae=Mt.group;Ct.layers.test(K.layers)&&kt(Ct,k,K,Nt,Kt,ae)}}function kt(E,k,K,$,O,at){E.onBeforeRender(_,k,K,$,O,at),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,k,K,$,E,at),O.transparent===!0&&O.side===pn&&O.forceSinglePass===!1?(O.side=Cn,O.needsUpdate=!0,_.renderBufferDirect(K,k,$,O,E,at),O.side=Ii,O.needsUpdate=!0,_.renderBufferDirect(K,k,$,O,E,at),O.side=pn):_.renderBufferDirect(K,k,$,O,E,at),E.onAfterRender(_,k,K,$,O,at)}function Be(E,k,K){k.isScene!==!0&&(k=bt);const $=Tt.get(E),O=m.state.lights,at=m.state.shadowsArray,Mt=O.state.version,Ct=vt.getParameters(E,O.state,at,k,K),Nt=vt.getProgramCacheKey(Ct);let Kt=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?V:b).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Kt===void 0&&(E.addEventListener("dispose",Zt),Kt=new Map,$.programs=Kt);let ae=Kt.get(Nt);if(ae!==void 0){if($.currentProgram===ae&&$.lightsStateVersion===Mt)return Me(E,Ct),ae}else Ct.uniforms=vt.getUniforms(E),E.onBeforeCompile(Ct,_),ae=vt.acquireProgram(Ct,Nt),Kt.set(Nt,ae),$.uniforms=Ct.uniforms;const rt=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(rt.clippingPlanes=ct.uniform),Me(E,Ct),$.needsLights=ie(E),$.lightsStateVersion=Mt,$.needsLights&&(rt.ambientLightColor.value=O.state.ambient,rt.lightProbe.value=O.state.probe,rt.directionalLights.value=O.state.directional,rt.directionalLightShadows.value=O.state.directionalShadow,rt.spotLights.value=O.state.spot,rt.spotLightShadows.value=O.state.spotShadow,rt.rectAreaLights.value=O.state.rectArea,rt.ltc_1.value=O.state.rectAreaLTC1,rt.ltc_2.value=O.state.rectAreaLTC2,rt.pointLights.value=O.state.point,rt.pointLightShadows.value=O.state.pointShadow,rt.hemisphereLights.value=O.state.hemi,rt.directionalShadowMap.value=O.state.directionalShadowMap,rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,rt.spotShadowMap.value=O.state.spotShadowMap,rt.spotLightMatrix.value=O.state.spotLightMatrix,rt.spotLightMap.value=O.state.spotLightMap,rt.pointShadowMap.value=O.state.pointShadowMap,rt.pointShadowMatrix.value=O.state.pointShadowMatrix),$.currentProgram=ae,$.uniformsList=null,ae}function Ye(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Er.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Me(E,k){const K=Tt.get(E);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Te(E,k,K,$,O){k.isScene!==!0&&(k=bt),I.resetTextureUnits();const at=k.fog,Mt=$.isMeshStandardMaterial?k.environment:null,Ct=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Oo,Nt=($.isMeshStandardMaterial?V:b).get($.envMap||Mt),Kt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ae=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),rt=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,qt=!!K.morphAttributes.color;let Jt=Pi;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Jt=_.toneMapping);const pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,he=pe!==void 0?pe.length:0,Ot=Tt.get($),Ze=m.state.lights;if(W===!0&&(Z===!0||E!==M)){const gn=E===M&&$.id===S;ct.setState($,E,gn)}let ye=!1;$.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ze.state.version||Ot.outputColorSpace!==Ct||O.isBatchedMesh&&Ot.batching===!1||!O.isBatchedMesh&&Ot.batching===!0||O.isBatchedMesh&&Ot.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ot.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ot.instancing===!1||!O.isInstancedMesh&&Ot.instancing===!0||O.isSkinnedMesh&&Ot.skinning===!1||!O.isSkinnedMesh&&Ot.skinning===!0||O.isInstancedMesh&&Ot.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ot.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ot.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ot.instancingMorph===!1&&O.morphTexture!==null||Ot.envMap!==Nt||$.fog===!0&&Ot.fog!==at||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ct.numPlanes||Ot.numIntersection!==ct.numIntersection)||Ot.vertexAlphas!==Kt||Ot.vertexTangents!==ae||Ot.morphTargets!==rt||Ot.morphNormals!==St||Ot.morphColors!==qt||Ot.toneMapping!==Jt||Ot.morphTargetsCount!==he)&&(ye=!0):(ye=!0,Ot.__version=$.version);let je=Ot.currentProgram;ye===!0&&(je=Be($,k,O));let Mn=!1,Ge=!1,$n=!1;const Ae=je.getUniforms(),Sn=Ot.uniforms;if(It.useProgram(je.program)&&(Mn=!0,Ge=!0,$n=!0),$.id!==S&&(S=$.id,Ge=!0),Mn||M!==E){It.buffers.depth.getReversed()?(ot.copy(E.projectionMatrix),zh(ot),Fh(ot),Ae.setValue(U,"projectionMatrix",ot)):Ae.setValue(U,"projectionMatrix",E.projectionMatrix),Ae.setValue(U,"viewMatrix",E.matrixWorldInverse);const bn=Ae.map.cameraPosition;bn!==void 0&&bn.setValue(U,Pt.setFromMatrixPosition(E.matrixWorld)),Dt.logarithmicDepthBuffer&&Ae.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ae.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ge=!0,$n=!0)}if(O.isSkinnedMesh){Ae.setOptional(U,O,"bindMatrix"),Ae.setOptional(U,O,"bindMatrixInverse");const gn=O.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ae.setValue(U,"boneTexture",gn.boneTexture,I))}O.isBatchedMesh&&(Ae.setOptional(U,O,"batchingTexture"),Ae.setValue(U,"batchingTexture",O._matricesTexture,I),Ae.setOptional(U,O,"batchingIdTexture"),Ae.setValue(U,"batchingIdTexture",O._indirectTexture,I),Ae.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Ae.setValue(U,"batchingColorTexture",O._colorsTexture,I));const zn=K.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&le.update(O,K,je),(Ge||Ot.receiveShadow!==O.receiveShadow)&&(Ot.receiveShadow=O.receiveShadow,Ae.setValue(U,"receiveShadow",O.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=Nt,Sn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Sn.envMapIntensity.value=k.environmentIntensity),Ge&&(Ae.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&ne(Sn,$n),at&&$.fog===!0&&gt.refreshFogUniforms(Sn,at),gt.refreshMaterialUniforms(Sn,$,X,J,m.state.transmissionRenderTarget[E.id]),Er.upload(U,Ye(Ot),Sn,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Er.upload(U,Ye(Ot),Sn,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ae.setValue(U,"center",O.center),Ae.setValue(U,"modelViewMatrix",O.modelViewMatrix),Ae.setValue(U,"normalMatrix",O.normalMatrix),Ae.setValue(U,"modelMatrix",O.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const gn=$.uniformsGroups;for(let bn=0,en=gn.length;bn<en;bn++){const Fn=gn[bn];z.update(Fn,je),z.bind(Fn,je)}}return je}function ne(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function ie(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,k,K){Tt.get(E.texture).__webglTexture=k,Tt.get(E.depthTexture).__webglTexture=K;const $=Tt.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const K=Tt.get(E);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,K=0){D=E,C=k,A=K;let $=!0,O=null,at=!1,Mt=!1;if(E){const Nt=Tt.get(E);if(Nt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Nt.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(Nt.__hasExternalTextures)I.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const rt=E.depthTexture;if(Nt.__boundDepthTexture!==rt){if(rt!==null&&Tt.has(rt)&&(E.width!==rt.image.width||E.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}const Kt=E.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Mt=!0);const ae=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ae[k])?O=ae[k][K]:O=ae[k],at=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?O=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(ae)?O=ae[K]:O=ae,L.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else L.copy(pt).multiplyScalar(X).floor(),F.copy(Et).multiplyScalar(X).floor(),B=yt;if(It.bindFramebuffer(U.FRAMEBUFFER,O)&&$&&It.drawBuffers(E,O),It.viewport(L),It.scissor(F),It.setScissorTest(B),at){const Nt=Tt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,K)}else if(Mt){const Nt=Tt.get(E.texture),Kt=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.__webglTexture,K||0,Kt)}S=-1},this.readRenderTargetPixels=function(E,k,K,$,O,at,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){It.bindFramebuffer(U.FRAMEBUFFER,Ct);try{const Nt=E.texture,Kt=Nt.format,ae=Nt.type;if(!Dt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-$&&K>=0&&K<=E.height-O&&U.readPixels(k,K,$,O,Bt.convert(Kt),Bt.convert(ae),at)}finally{const Nt=D!==null?Tt.get(D).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(E,k,K,$,O,at,Mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){const Nt=E.texture,Kt=Nt.format,ae=Nt.type;if(!Dt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-$&&K>=0&&K<=E.height-O){It.bindFramebuffer(U.FRAMEBUFFER,Ct);const rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.bufferData(U.PIXEL_PACK_BUFFER,at.byteLength,U.STREAM_READ),U.readPixels(k,K,$,O,Bt.convert(Kt),Bt.convert(ae),0);const St=D!==null?Tt.get(D).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,St);const qt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Nh(U,qt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,at),U.deleteBuffer(rt),U.deleteSync(qt),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,K=0){E.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-K),O=Math.floor(E.image.width*$),at=Math.floor(E.image.height*$),Mt=k!==null?k.x:0,Ct=k!==null?k.y:0;I.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Mt,Ct,O,at),It.unbindTexture()},this.copyTextureToTexture=function(E,k,K=null,$=null,O=0){E.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],k=arguments[2],O=arguments[3]||0,K=null);let at,Mt,Ct,Nt,Kt,ae,rt,St,qt;const Jt=E.isCompressedTexture?E.mipmaps[O]:E.image;K!==null?(at=K.max.x-K.min.x,Mt=K.max.y-K.min.y,Ct=K.isBox3?K.max.z-K.min.z:1,Nt=K.min.x,Kt=K.min.y,ae=K.isBox3?K.min.z:0):(at=Jt.width,Mt=Jt.height,Ct=Jt.depth||1,Nt=0,Kt=0,ae=0),$!==null?(rt=$.x,St=$.y,qt=$.z):(rt=0,St=0,qt=0);const pe=Bt.convert(k.format),he=Bt.convert(k.type);let Ot;k.isData3DTexture?(I.setTexture3D(k,0),Ot=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(I.setTexture2DArray(k,0),Ot=U.TEXTURE_2D_ARRAY):(I.setTexture2D(k,0),Ot=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Ze=U.getParameter(U.UNPACK_ROW_LENGTH),ye=U.getParameter(U.UNPACK_IMAGE_HEIGHT),je=U.getParameter(U.UNPACK_SKIP_PIXELS),Mn=U.getParameter(U.UNPACK_SKIP_ROWS),Ge=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Jt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ae);const $n=E.isDataArrayTexture||E.isData3DTexture,Ae=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Sn=Tt.get(E),zn=Tt.get(k),gn=Tt.get(Sn.__renderTarget),bn=Tt.get(zn.__renderTarget);It.bindFramebuffer(U.READ_FRAMEBUFFER,gn.__webglFramebuffer),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let en=0;en<Ct;en++)$n&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.get(E).__webglTexture,O,ae+en),E.isDepthTexture?(Ae&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.get(k).__webglTexture,O,qt+en),U.blitFramebuffer(Nt,Kt,at,Mt,rt,St,at,Mt,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ae?U.copyTexSubImage3D(Ot,O,rt,St,qt+en,Nt,Kt,at,Mt):U.copyTexSubImage2D(Ot,O,rt,St,qt+en,Nt,Kt,at,Mt);It.bindFramebuffer(U.READ_FRAMEBUFFER,null),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ae?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ot,O,rt,St,qt,at,Mt,Ct,pe,he,Jt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Ot,O,rt,St,qt,at,Mt,Ct,pe,Jt.data):U.texSubImage3D(Ot,O,rt,St,qt,at,Mt,Ct,pe,he,Jt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,rt,St,at,Mt,pe,he,Jt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,rt,St,Jt.width,Jt.height,pe,Jt.data):U.texSubImage2D(U.TEXTURE_2D,O,rt,St,at,Mt,pe,he,Jt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye),U.pixelStorei(U.UNPACK_SKIP_PIXELS,je),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge),O===0&&k.generateMipmaps&&U.generateMipmap(Ot),It.unbindTexture()},this.copyTextureToTexture3D=function(E,k,K=null,$=null,O=0){return E.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,E=arguments[2],k=arguments[3],O=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,K,$,O)},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),It.unbindTexture()},this.resetState=function(){C=0,A=0,D=null,It.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ee._getUnpackColorSpace()}}class Rl{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(t),this.density=n}clone(){return new Rl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Z2 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ud extends Ho{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cr=new N,Pr=new N,Zc=new ke,ls=new jf,dr=new Dr,_a=new N,qc=new N;class q2 extends an{constructor(t=new mn,n=new ud){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,e=[0];for(let i=1,s=n.count;i<s;i++)Cr.fromBufferAttribute(n,i-1),Pr.fromBufferAttribute(n,i),e[i]=e[i-1],e[i]+=Cr.distanceTo(Pr);t.setAttribute("lineDistance",new Ie(e,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const e=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=e.drawRange;if(e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere),dr.applyMatrix4(i),dr.radius+=s,t.ray.intersectsSphere(dr)===!1)return;Zc.copy(i).invert(),ls.copy(t.ray).applyMatrix4(Zc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=e.index,u=e.attributes.position;if(f!==null){const h=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let w=h,g=x-1;w<g;w+=c){const m=f.getX(w),v=f.getX(w+1),y=hr(this,t,ls,l,m,v);y&&n.push(y)}if(this.isLineLoop){const w=f.getX(x-1),g=f.getX(h),m=hr(this,t,ls,l,w,g);m&&n.push(m)}}else{const h=Math.max(0,r.start),x=Math.min(u.count,r.start+r.count);for(let w=h,g=x-1;w<g;w+=c){const m=hr(this,t,ls,l,w,w+1);m&&n.push(m)}if(this.isLineLoop){const w=hr(this,t,ls,l,x-1,h);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const i=n[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hr(o,t,n,e,i,s){const r=o.geometry.attributes.position;if(Cr.fromBufferAttribute(r,i),Pr.fromBufferAttribute(r,s),n.distanceSqToSegment(Cr,Pr,_a,qc)>e)return;_a.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(_a);if(!(l<t.near||l>t.far))return{distance:l,point:qc.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}class se extends Pn{constructor(t,n,e,i,s,r,a,l,c){super(t,n,e,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const e=this.getUtoTmapping(t);return this.getPoint(e,n)}getPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return n}getSpacedPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPointAt(e/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let e,i=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)e=this.getPoint(r/t),s+=e.distanceTo(i),n.push(s),i=e;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const e=this.getLengths();let i=0;const s=e.length;let r;n?r=n:r=t*e[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=e[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,e[i]===r)return i/(s-1);const f=e[i],u=e[i+1]-f,h=(r-f)/u;return(i+h)/(s-1)}getTangent(t,n){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=n||(r.isVector2?new jt:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,n){const e=this.getUtoTmapping(t);return this.getTangent(e,n)}computeFrenetFrames(t,n){const e=new N,i=[],s=[],r=[],a=new N,l=new ke;for(let h=0;h<=t;h++){const x=h/t;i[h]=this.getTangentAt(x,new N)}s[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const f=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);f<=c&&(c=f,e.set(1,0,0)),d<=c&&(c=d,e.set(0,1,0)),u<=c&&e.set(0,0,1),a.crossVectors(i[0],e).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(un(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,x))}r[h].crossVectors(i[h],s[h])}if(n===!0){let h=Math.acos(un(s[0].dot(s[t]),-1,1));h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(i[x],h*x)),r[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends ei{constructor(t=0,n=0,e=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=e,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,n=new jt){const e=n,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,h=c-this.aY;l=u*f-h*d+this.aX,c=u*d+h*f+this.aY}return e.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $2 extends Cl{constructor(t,n,e,i,s,r){super(t,n,e,e,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Pl(){let o=0,t=0,n=0,e=0;function i(s,r,a,l){o=s,t=a,n=-3*s+3*r-2*a-l,e=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,f,d){let u=(r-s)/c-(a-s)/(c+f)+(a-r)/f,h=(a-r)/f-(l-r)/(f+d)+(l-a)/d;u*=f,h*=f,i(r,a,u,h)},calc:function(s){const r=s*s,a=r*s;return o+t*s+n*r+e*a}}}const ur=new N,ya=new Pl,va=new Pl,Ma=new Pl;class K2 extends ei{constructor(t=[],n=!1,e="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=e,this.tension=i}getPoint(t,n=new N){const e=n,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=i[(a-1)%s]:(ur.subVectors(i[0],i[1]).add(i[0]),c=ur);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?f=i[(a+2)%s]:(ur.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(d),h),w=Math.pow(d.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(f),h);w<1e-4&&(w=1),x<1e-4&&(x=w),g<1e-4&&(g=w),ya.initNonuniformCatmullRom(c.x,d.x,u.x,f.x,x,w,g),va.initNonuniformCatmullRom(c.y,d.y,u.y,f.y,x,w,g),Ma.initNonuniformCatmullRom(c.z,d.z,u.z,f.z,x,w,g)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,d.x,u.x,f.x,this.tension),va.initCatmullRom(c.y,d.y,u.y,f.y,this.tension),Ma.initCatmullRom(c.z,d.z,u.z,f.z,this.tension));return e.set(ya.calc(l),va.calc(l),Ma.calc(l)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const i=this.points[n];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $c(o,t,n,e,i){const s=(e-t)*.5,r=(i-n)*.5,a=o*o,l=o*a;return(2*n-2*e+s+r)*l+(-3*n+3*e-2*s-r)*a+s*o+n}function J2(o,t){const n=1-o;return n*n*t}function j2(o,t){return 2*(1-o)*o*t}function Q2(o,t){return o*o*t}function gs(o,t,n,e){return J2(o,t)+j2(o,n)+Q2(o,e)}function t1(o,t){const n=1-o;return n*n*n*t}function e1(o,t){const n=1-o;return 3*n*n*o*t}function n1(o,t){return 3*(1-o)*o*o*t}function i1(o,t){return o*o*o*t}function xs(o,t,n,e,i){return t1(o,t)+e1(o,n)+n1(o,e)+i1(o,i)}class pd extends ei{constructor(t=new jt,n=new jt,e=new jt,i=new jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=e,this.v3=i}getPoint(t,n=new jt){const e=n,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(xs(t,i.x,s.x,r.x,a.x),xs(t,i.y,s.y,r.y,a.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class o1 extends ei{constructor(t=new N,n=new N,e=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=e,this.v3=i}getPoint(t,n=new N){const e=n,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(xs(t,i.x,s.x,r.x,a.x),xs(t,i.y,s.y,r.y,a.y),xs(t,i.z,s.z,r.z,a.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class md extends ei{constructor(t=new jt,n=new jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new jt){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new jt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s1 extends ei{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gd extends ei{constructor(t=new jt,n=new jt,e=new jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new jt){const e=n,i=this.v0,s=this.v1,r=this.v2;return e.set(gs(t,i.x,s.x,r.x),gs(t,i.y,s.y,r.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends ei{constructor(t=new N,n=new N,e=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new N){const e=n,i=this.v0,s=this.v1,r=this.v2;return e.set(gs(t,i.x,s.x,r.x),gs(t,i.y,s.y,r.y),gs(t,i.z,s.z,r.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wd extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new jt){const e=n,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],f=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return e.set($c(a,l.x,c.x,f.x,d.x),$c(a,l.y,c.y,f.y,d.y)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const i=this.points[n];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(new jt().fromArray(i))}return this}}var Kc=Object.freeze({__proto__:null,ArcCurve:$2,CatmullRomCurve3:K2,CubicBezierCurve:pd,CubicBezierCurve3:o1,EllipseCurve:Cl,LineCurve:md,LineCurve3:s1,QuadraticBezierCurve:gd,QuadraticBezierCurve3:xd,SplineCurve:wd});class r1 extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const e=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kc[e](n,t))}return this}getPoint(t,n){const e=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=e){const r=i[s]-e,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let e=0,i=this.curves.length;e<i;e++)n+=this.curves[e].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let e;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];e&&e.equals(f)||(n.push(f),e=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const i=t.curves[n];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,e=this.curves.length;n<e;n++){const i=this.curves[n];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const i=t.curves[n];this.curves.push(new Kc[i.type]().fromJSON(i))}return this}}class Jc extends r1{constructor(t){super(),this.type="Path",this.currentPoint=new jt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,e=t.length;n<e;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const e=new md(this.currentPoint.clone(),new jt(t,n));return this.curves.push(e),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,e,i){const s=new gd(this.currentPoint.clone(),new jt(t,n),new jt(e,i));return this.curves.push(s),this.currentPoint.set(e,i),this}bezierCurveTo(t,n,e,i,s,r){const a=new pd(this.currentPoint.clone(),new jt(t,n),new jt(e,i),new jt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),e=new wd(n);return this.curves.push(e),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,e,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,n+l,e,i,s,r),this}absarc(t,n,e,i,s,r){return this.absellipse(t,n,e,e,i,s,r),this}ellipse(t,n,e,i,s,r,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,n+f,e,i,s,r,a,l),this}absellipse(t,n,e,i,s,r,a,l){const c=new Cl(t,n,e,i,s,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ln extends mn{constructor(t=1,n=32,e=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:e,thetaLength:i},n=Math.max(3,n);const s=[],r=[],a=[],l=[],c=new N,f=new jt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){const h=e+d/n*i;c.x=t*Math.cos(h),c.y=t*Math.sin(h),r.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(r[u]/t+1)/2,f.y=(r[u+1]/t+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Y extends mn{constructor(t=1,n=1,e=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const f=[],d=[],u=[],h=[];let x=0;const w=[],g=e/2;let m=0;v(),r===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function v(){const _=new N,P=new N;let C=0;const A=(n-t)/e;for(let D=0;D<=s;D++){const S=[],M=D/s,L=M*(n-t)+t;for(let F=0;F<=i;F++){const B=F/i,Q=B*l+a,q=Math.sin(Q),G=Math.cos(Q);P.x=L*q,P.y=-M*e+g,P.z=L*G,d.push(P.x,P.y,P.z),_.set(q,A,G).normalize(),u.push(_.x,_.y,_.z),h.push(B,1-M),S.push(x++)}w.push(S)}for(let D=0;D<i;D++)for(let S=0;S<s;S++){const M=w[S][D],L=w[S+1][D],F=w[S+1][D+1],B=w[S][D+1];(t>0||S!==0)&&(f.push(M,L,B),C+=3),(n>0||S!==s-1)&&(f.push(L,F,B),C+=3)}c.addGroup(m,C,0),m+=C}function y(_){const P=x,C=new jt,A=new N;let D=0;const S=_===!0?t:n,M=_===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,g*M,0),u.push(0,M,0),h.push(.5,.5),x++;const L=x;for(let F=0;F<=i;F++){const Q=F/i*l+a,q=Math.cos(Q),G=Math.sin(Q);A.x=S*G,A.y=g*M,A.z=S*q,d.push(A.x,A.y,A.z),u.push(0,M,0),C.x=q*.5+.5,C.y=G*.5*M+.5,h.push(C.x,C.y),x++}for(let F=0;F<i;F++){const B=P+F,Q=L+F;_===!0?f.push(Q,Q+1,B):f.push(Q+1,Q,B),D+=3}c.addGroup(m,D,_===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xe extends Y{constructor(t=1,n=1,e=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,n,e,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:e,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Xe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Il extends mn{constructor(t=[],n=[],e=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:e,detail:i};const s=[],r=[];a(i),c(e),f(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new N,_=new N,P=new N;for(let C=0;C<n.length;C+=3)h(n[C+0],y),h(n[C+1],_),h(n[C+2],P),l(y,_,P,v)}function l(v,y,_,P){const C=P+1,A=[];for(let D=0;D<=C;D++){A[D]=[];const S=v.clone().lerp(_,D/C),M=y.clone().lerp(_,D/C),L=C-D;for(let F=0;F<=L;F++)F===0&&D===C?A[D][F]=S:A[D][F]=S.clone().lerp(M,F/L)}for(let D=0;D<C;D++)for(let S=0;S<2*(C-D)-1;S++){const M=Math.floor(S/2);S%2===0?(u(A[D][M+1]),u(A[D+1][M]),u(A[D][M])):(u(A[D][M+1]),u(A[D+1][M+1]),u(A[D+1][M]))}}function c(v){const y=new N;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(v),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function f(){const v=new N;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const _=g(v)/2/Math.PI+.5,P=m(v)/Math.PI+.5;r.push(_,1-P)}x(),d()}function d(){for(let v=0;v<r.length;v+=6){const y=r[v+0],_=r[v+2],P=r[v+4],C=Math.max(y,_,P),A=Math.min(y,_,P);C>.9&&A<.1&&(y<.2&&(r[v+0]+=1),_<.2&&(r[v+2]+=1),P<.2&&(r[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function h(v,y){const _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function x(){const v=new N,y=new N,_=new N,P=new N,C=new jt,A=new jt,D=new jt;for(let S=0,M=0;S<s.length;S+=9,M+=6){v.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),C.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),D.set(r[M+4],r[M+5]),P.copy(v).add(y).add(_).divideScalar(3);const L=g(P);w(C,M+0,v,L),w(A,M+2,y,L),w(D,M+4,_,L)}}function w(v,y,_,P){P<0&&v.x===1&&(r[y]=v.x-1),_.x===0&&_.z===0&&(r[y]=P/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.vertices,t.indices,t.radius,t.details)}}class Zn extends Il{constructor(t=1,n=0){const e=(1+Math.sqrt(5))/2,i=1/e,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-e,0,-i,e,0,i,-e,0,i,e,-i,-e,0,-i,e,0,i,-e,0,i,e,0,-e,0,-i,e,0,-i,-e,0,i,e,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Zn(t.radius,t.detail)}}class _d extends Jc{constructor(t){super(t),this.uuid=no(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let e=0,i=this.holes.length;e<i;e++)n[e]=this.holes[e].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const i=t.holes[n];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,e=this.holes.length;n<e;n++){const i=this.holes[n];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const i=t.holes[n];this.holes.push(new Jc().fromJSON(i))}return this}}const a1={triangulate:function(o,t,n=2){const e=t&&t.length,i=e?t[0]*n:o.length;let s=yd(o,0,i,n,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,f,d,u,h;if(e&&(s=h1(o,t,s,n)),o.length>80*n){a=c=o[0],l=f=o[1];for(let x=n;x<i;x+=n)d=o[x],u=o[x+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>f&&(f=u);h=Math.max(c-a,f-l),h=h!==0?32767/h:0}return Ss(s,r,n,a,l,h,0),r}};function yd(o,t,n,e,i){let s,r;if(i===S1(o,t,n,e)>0)for(s=t;s<n;s+=e)r=jc(s,o[s],o[s+1],r);else for(s=n-e;s>=t;s-=e)r=jc(s,o[s],o[s+1],r);return r&&Nr(r,r.next)&&(Ts(r),r=r.next),r}function eo(o,t){if(!o)return o;t||(t=o);let n=o,e;do if(e=!1,!n.steiner&&(Nr(n,n.next)||He(n.prev,n,n.next)===0)){if(Ts(n),n=t=n.prev,n===n.next)break;e=!0}else n=n.next;while(e||n!==t);return t}function Ss(o,t,n,e,i,s,r){if(!o)return;!r&&s&&x1(o,e,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?c1(o,e,i,s):l1(o)){t.push(l.i/n|0),t.push(o.i/n|0),t.push(c.i/n|0),Ts(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=f1(eo(o),t,n),Ss(o,t,n,e,i,s,2)):r===2&&d1(o,t,n,e,i,s):Ss(eo(o),t,n,e,i,s,1);break}}}function l1(o){const t=o.prev,n=o,e=o.next;if(He(t,n,e)>=0)return!1;const i=t.x,s=n.x,r=e.x,a=t.y,l=n.y,c=e.y,f=i<s?i<r?i:r:s<r?s:r,d=a<l?a<c?a:c:l<c?l:c,u=i>s?i>r?i:r:s>r?s:r,h=a>l?a>c?a:c:l>c?l:c;let x=e.next;for(;x!==t;){if(x.x>=f&&x.x<=u&&x.y>=d&&x.y<=h&&Ao(i,a,s,l,r,c,x.x,x.y)&&He(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function c1(o,t,n,e){const i=o.prev,s=o,r=o.next;if(He(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,f=i.y,d=s.y,u=r.y,h=a<l?a<c?a:c:l<c?l:c,x=f<d?f<u?f:u:d<u?d:u,w=a>l?a>c?a:c:l>c?l:c,g=f>d?f>u?f:u:d>u?d:u,m=pl(h,x,t,n,e),v=pl(w,g,t,n,e);let y=o.prevZ,_=o.nextZ;for(;y&&y.z>=m&&_&&_.z<=v;){if(y.x>=h&&y.x<=w&&y.y>=x&&y.y<=g&&y!==i&&y!==r&&Ao(a,f,l,d,c,u,y.x,y.y)&&He(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=h&&_.x<=w&&_.y>=x&&_.y<=g&&_!==i&&_!==r&&Ao(a,f,l,d,c,u,_.x,_.y)&&He(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=h&&y.x<=w&&y.y>=x&&y.y<=g&&y!==i&&y!==r&&Ao(a,f,l,d,c,u,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=h&&_.x<=w&&_.y>=x&&_.y<=g&&_!==i&&_!==r&&Ao(a,f,l,d,c,u,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function f1(o,t,n){let e=o;do{const i=e.prev,s=e.next.next;!Nr(i,s)&&vd(i,e,e.next,s)&&bs(i,s)&&bs(s,i)&&(t.push(i.i/n|0),t.push(e.i/n|0),t.push(s.i/n|0),Ts(e),Ts(e.next),e=o=s),e=e.next}while(e!==o);return eo(e)}function d1(o,t,n,e,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&y1(r,a)){let l=Md(r,a);r=eo(r,r.next),l=eo(l,l.next),Ss(r,t,n,e,i,s,0),Ss(l,t,n,e,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function h1(o,t,n,e){const i=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*e,l=s<r-1?t[s+1]*e:o.length,c=yd(o,a,l,e,!1),c===c.next&&(c.steiner=!0),i.push(_1(c));for(i.sort(u1),s=0;s<i.length;s++)n=p1(i[s],n);return n}function u1(o,t){return o.x-t.x}function p1(o,t){const n=m1(o,t);if(!n)return t;const e=Md(n,o);return eo(e,e.next),eo(n,n.next)}function m1(o,t){let n=t,e=-1/0,i;const s=o.x,r=o.y;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const u=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=s&&u>e&&(e=u,i=n.x<n.next.x?n:n.next,u===s))return i}n=n.next}while(n!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let f=1/0,d;n=i;do s>=n.x&&n.x>=l&&s!==n.x&&Ao(r<c?s:e,r,l,c,r<c?e:s,r,n.x,n.y)&&(d=Math.abs(r-n.y)/(s-n.x),bs(n,o)&&(d<f||d===f&&(n.x>i.x||n.x===i.x&&g1(i,n)))&&(i=n,f=d)),n=n.next;while(n!==a);return i}function g1(o,t){return He(o.prev,o,t.prev)<0&&He(t.next,o,o.next)<0}function x1(o,t,n,e){let i=o;do i.z===0&&(i.z=pl(i.x,i.y,t,n,e)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,w1(i)}function w1(o){let t,n,e,i,s,r,a,l,c=1;do{for(n=o,o=null,s=null,r=0;n;){for(r++,e=n,a=0,t=0;t<c&&(a++,e=e.nextZ,!!e);t++);for(l=c;a>0||l>0&&e;)a!==0&&(l===0||!e||n.z<=e.z)?(i=n,n=n.nextZ,a--):(i=e,e=e.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;n=e}s.nextZ=null,c*=2}while(r>1);return o}function pl(o,t,n,e,i){return o=(o-n)*i|0,t=(t-e)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function _1(o){let t=o,n=o;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==o);return n}function Ao(o,t,n,e,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(e-a)>=(n-r)*(t-a)&&(n-r)*(s-a)>=(i-r)*(e-a)}function y1(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!v1(o,t)&&(bs(o,t)&&bs(t,o)&&M1(o,t)&&(He(o.prev,o,t.prev)||He(o,t.prev,t))||Nr(o,t)&&He(o.prev,o,o.next)>0&&He(t.prev,t,t.next)>0)}function He(o,t,n){return(t.y-o.y)*(n.x-t.x)-(t.x-o.x)*(n.y-t.y)}function Nr(o,t){return o.x===t.x&&o.y===t.y}function vd(o,t,n,e){const i=mr(He(o,t,n)),s=mr(He(o,t,e)),r=mr(He(n,e,o)),a=mr(He(n,e,t));return!!(i!==s&&r!==a||i===0&&pr(o,n,t)||s===0&&pr(o,e,t)||r===0&&pr(n,o,e)||a===0&&pr(n,t,e))}function pr(o,t,n){return t.x<=Math.max(o.x,n.x)&&t.x>=Math.min(o.x,n.x)&&t.y<=Math.max(o.y,n.y)&&t.y>=Math.min(o.y,n.y)}function mr(o){return o>0?1:o<0?-1:0}function v1(o,t){let n=o;do{if(n.i!==o.i&&n.next.i!==o.i&&n.i!==t.i&&n.next.i!==t.i&&vd(n,n.next,o,t))return!0;n=n.next}while(n!==o);return!1}function bs(o,t){return He(o.prev,o,o.next)<0?He(o,t,o.next)>=0&&He(o,o.prev,t)>=0:He(o,t,o.prev)<0||He(o,o.next,t)<0}function M1(o,t){let n=o,e=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&i<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(e=!e),n=n.next;while(n!==o);return e}function Md(o,t){const n=new ml(o.i,o.x,o.y),e=new ml(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,n.next=i,i.prev=n,e.next=n,n.prev=e,s.next=e,e.prev=s,e}function jc(o,t,n,e){const i=new ml(o,t,n);return e?(i.next=e.next,i.prev=e,e.next.prev=i,e.next=i):(i.prev=i,i.next=i),i}function Ts(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function ml(o,t,n){this.i=o,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S1(o,t,n,e){let i=0;for(let s=t,r=n-e;s<n;s+=e)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class ws{static area(t){const n=t.length;let e=0;for(let i=n-1,s=0;s<n;i=s++)e+=t[i].x*t[s].y-t[s].x*t[i].y;return e*.5}static isClockWise(t){return ws.area(t)<0}static triangulateShape(t,n){const e=[],i=[],s=[];Qc(t),tf(e,t);let r=t.length;n.forEach(Qc);for(let l=0;l<n.length;l++)i.push(r),r+=n[l].length,tf(e,n[l]);const a=a1.triangulate(e,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Qc(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function tf(o,t){for(let n=0;n<t.length;n++)o.push(t[n].x),o.push(t[n].y)}class Ll extends mn{constructor(t=.5,n=1,e=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:e,phiSegments:i,thetaStart:s,thetaLength:r},e=Math.max(3,e),i=Math.max(1,i);const a=[],l=[],c=[],f=[];let d=t;const u=(n-t)/i,h=new N,x=new jt;for(let w=0;w<=i;w++){for(let g=0;g<=e;g++){const m=s+g/e*r;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),x.x=(h.x/n+1)/2,x.y=(h.y/n+1)/2,f.push(x.x,x.y)}d+=u}for(let w=0;w<i;w++){const g=w*(e+1);for(let m=0;m<e;m++){const v=m+g,y=v,_=v+e+1,P=v+e+2,C=v+1;a.push(y,_,C),a.push(_,P,C)}}this.setIndex(a),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Dl extends mn{constructor(t=new _d([new jt(0,.5),new jt(-.5,-.5),new jt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const e=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let f=0;f<t.length;f++)c(t[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(e),this.setAttribute("position",new Ie(i,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2));function c(f){const d=i.length/3,u=f.extractPoints(n);let h=u.shape;const x=u.holes;ws.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=x.length;g<m;g++){const v=x[g];ws.isClockWise(v)===!0&&(x[g]=v.reverse())}const w=ws.triangulateShape(h,x);for(let g=0,m=x.length;g<m;g++){const v=x[g];h=h.concat(v)}for(let g=0,m=h.length;g<m;g++){const v=h[g];i.push(v.x,v.y,0),s.push(0,0,1),r.push(v.x,v.y)}for(let g=0,m=w.length;g<m;g++){const v=w[g],y=v[0]+d,_=v[1]+d,P=v[2]+d;e.push(y,_,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return b1(n,t)}static fromJSON(t,n){const e=[];for(let i=0,s=t.shapes.length;i<s;i++){const r=n[t.shapes[i]];e.push(r)}return new Dl(e,t.curveSegments)}}function b1(o,t){if(t.shapes=[],Array.isArray(o))for(let n=0,e=o.length;n<e;n++){const i=o[n];t.shapes.push(i.uuid)}else t.shapes.push(o.uuid);return t}class Re extends mn{constructor(t=1,n=32,e=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:e,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},n=Math.max(3,Math.floor(n)),e=Math.max(2,Math.floor(e));const l=Math.min(r+a,Math.PI);let c=0;const f=[],d=new N,u=new N,h=[],x=[],w=[],g=[];for(let m=0;m<=e;m++){const v=[],y=m/e;let _=0;m===0&&r===0?_=.5/n:m===e&&l===Math.PI&&(_=-.5/n);for(let P=0;P<=n;P++){const C=P/n;d.x=-t*Math.cos(i+C*s)*Math.sin(r+y*a),d.y=t*Math.cos(r+y*a),d.z=t*Math.sin(i+C*s)*Math.sin(r+y*a),x.push(d.x,d.y,d.z),u.copy(d).normalize(),w.push(u.x,u.y,u.z),g.push(C+_,1-y),v.push(c++)}f.push(v)}for(let m=0;m<e;m++)for(let v=0;v<n;v++){const y=f[m][v+1],_=f[m][v],P=f[m+1][v],C=f[m+1][v+1];(m!==0||r>0)&&h.push(y,_,C),(m!==e-1||l<Math.PI)&&h.push(_,P,C)}this.setIndex(h),this.setAttribute("position",new Ie(x,3)),this.setAttribute("normal",new Ie(w,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Je extends mn{constructor(t=1,n=.4,e=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:e,tubularSegments:i,arc:s},e=Math.floor(e),i=Math.floor(i);const r=[],a=[],l=[],c=[],f=new N,d=new N,u=new N;for(let h=0;h<=e;h++)for(let x=0;x<=i;x++){const w=x/i*s,g=h/e*Math.PI*2;d.x=(t+n*Math.cos(g))*Math.cos(w),d.y=(t+n*Math.cos(g))*Math.sin(w),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),f.x=t*Math.cos(w),f.y=t*Math.sin(w),u.subVectors(d,f).normalize(),l.push(u.x,u.y,u.z),c.push(x/i),c.push(h/e)}for(let h=1;h<=e;h++)for(let x=1;x<=i;x++){const w=(i+1)*h+x-1,g=(i+1)*(h-1)+x-1,m=(i+1)*(h-1)+x,v=(i+1)*h+x;r.push(w,g,v),r.push(g,m,v)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class R extends Ho{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ul extends an{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class T1 extends Ul{constructor(t,n,e){super(t,e),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Sa=new ke,ef=new N,nf=new N;class Sd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,e=this.matrix;ef.setFromMatrixPosition(t.matrixWorld),n.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(nf),n.updateMatrixWorld(),Sa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const of=new ke,cs=new N,ba=new N;class E1 extends Sd{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,n=0){const e=this.camera,i=this.matrix,s=t.distance||e.far;s!==e.far&&(e.far=s,e.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),e.position.copy(cs),ba.copy(e.position),ba.add(this._cubeDirections[n]),e.up.copy(this._cubeUps[n]),e.lookAt(ba),e.updateMatrixWorld(),i.makeTranslation(-cs.x,-cs.y,-cs.z),of.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of)}}class me extends Ul{constructor(t,n,e=0,i=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=e,this.decay=i,this.shadow=new E1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class A1 extends Sd{constructor(){super(new ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R1 extends Ul{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new A1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class C1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=sf();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function sf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);const _s=new Set,P1=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);function I1(){window.addEventListener("keydown",o=>{_s.add(o.code),P1.has(o.code)&&o.preventDefault()}),window.addEventListener("keyup",o=>{_s.delete(o.code)}),window.addEventListener("blur",()=>_s.clear())}function rf(o,t){let n=0;for(const e of o)_s.has(e)&&(n-=1);for(const e of t)_s.has(e)&&(n+=1);return Math.max(-1,Math.min(1,n))}const Jn=.28,af=1.75,lf=.24,gr=.015;class L1{constructor(){ue(this,"boxes",[])}add(t){return this.boxes.push(t),t}remove(t){const n=this.boxes.indexOf(t);n>=0&&this.boxes.splice(n,1)}move(t,n,e,i,s){const r=this.pushOut(t,n,s);t=r.x,n=r.z;const a=t+e;this.blocked(a,n,s)||(t=a);const l=n+i;return this.blocked(t,l,s)||(n=l),{x:t,z:n}}blocked(t,n,e){return this.hits(t,n,e,Jn)}hits(t,n,e,i){const s=e+af;for(const r of this.boxes)if(!(r.maxY<=e+.04)&&!(r.minY>=s)&&!(r.maxY<=e+lf)&&cf(t,n,i,r))return!0;return!1}pushOut(t,n,e){const i=e+af;for(let s=0;s<4;s++){let r=!1;for(const a of this.boxes){if(a.maxY<=e+.04||a.minY>=i||a.maxY<=e+lf||!cf(t,n,Jn,a))continue;r=!0;const l=t+Jn-a.minX,c=a.maxX-(t-Jn),f=n+Jn-a.minZ,d=a.maxZ-(n-Jn),u=Math.min(l,c,f,d);u>.6||(u===l?t=a.minX-Jn-gr:u===c?t=a.maxX+Jn+gr:u===f?n=a.minZ-Jn-gr:n=a.maxZ+Jn+gr)}if(!r)break}return{x:t,z:n}}}function cf(o,t,n,e){const i=df(o,e.minX,e.maxX),s=df(t,e.minZ,e.maxZ),r=o-i,a=t-s;return r*r+a*a<n*n}function ff(o,t,n,e=0){return o>=n.minX-e&&o<=n.maxX+e&&t>=n.minZ-e&&t<=n.maxZ+e}function df(o,t,n){return Math.max(t,Math.min(n,o))}const xr={x:0,z:0};class D1{constructor(){ue(this,"items",[]);ue(this,"current",null)}add(t){return this.items.push(t),t}update(t,n){const e=t.lookFlat();xr.x=e.x,xr.z=e.z;let i=null,s=1/0;for(const r of this.items){const a=r.x-t.x,l=r.z-t.z,c=Math.hypot(a,l);c>r.radius||c>=s||(c<.001?1:(a*xr.x+l*xr.z)/c)<.2||this.occluded(t.x,t.z,r.x,r.z,n)||(i=r,s=c)}this.current=i}prompt(){if(!this.current)return"";const t=this.current.prompt;return typeof t=="function"?t():t}use(){var t;(t=this.current)==null||t.onInteract()}occluded(t,n,e,i,s){const r=[[t*.65+e*.35,n*.65+i*.35],[t*.35+e*.65,n*.35+i*.65]];for(const a of s.boxes)if(!(a.maxY<1.1)&&!ff(e,i,a,.05)){for(const[l,c]of r)if(ff(l,c,a))return!0}return!1}}class U1{constructor(){ue(this,"text","");ue(this,"timer",0)}show(t,n=3.6){this.text=t,this.timer=n}update(t){this.timer<=0||(this.timer-=t,this.timer<=0&&(this.text=""))}}const N1=0,z1=.15;function bd(o,t){return t>=-3.5&&t<=3.5&&o>=-55&&o<=55||o>=13.5&&o<=18.5&&t>=3.5&&t<=40||o>=-16.5&&o<=-11.5&&t>=-40&&t<=-3.5}function Ta(o,t){return bd(o,t)?N1:z1}function hf(o,t){return o>=-6&&o<=6&&t>=78&&t<=92?"Sun Heights — Suite 402 (Your Room)":o>=-8.5&&o<=8.5&&t>=60&&t<=72?"Sun Heights — 4F Elevator Lounge":o>=-4.5&&o<=4.5&&t>=12.8&&t<=22?"Sun Heights — Entrance Lobby":o>=21.8&&o<=33&&t>=9&&t<=22?"FamilyKonbini — Store":o>=1.5&&o<=10.5&&t>=7.5&&t<=18?"Menya Tokyo — Ramen Bar":o>=-3&&o<=10.5&&t>=24&&t<=36?"Kissaten Mame — Cafe":o>=-8.5&&o<=9.5&&t>=-36.5&&t<=-7.5?"Sakura Pocket Park (桜公園)":o>=4.5&&o<=13.5&&t>=16&&t<=24||o>=-5&&o<=13.5&&t>=21&&t<=24?"Rojiura — Residential Alley":o>=10.5&&o<=21.5&&t>=3.5&&t<=42?"Kita-gai — Shopping Street":o>=-19.5&&o<=-8.5&&t>=-42&&t<=-3.5?"Minami-dori — Residential St":Math.abs(t)<=5?o>=11&&o<=21?"Chuo-dori — North Crosswalk":o>=-19&&o<=-9?"Chuo-dori — South Crosswalk":"Chuo-dori — Central Avenue":"Tokyo — Residential District"}const Td=[{id:"b-sunheights",name:"Sun Heights Mansion",x:0,z:17.5,w:9,d:10,floors:4,wall:"#262d38",trim:"#3a4454",balcony:"#404c5e",bay:3,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"lobby",enterable:!0,doorFace:"s",doorAlong:0,seed:101},{id:"b-ramen",name:"Menya Tokyo (Ramen)",x:6,z:12.5,w:7,d:9,floors:3,wall:"#2b2622",trim:"#423a32",balcony:"#383028",bay:2,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2],ground:"ramen",enterable:!0,doorFace:"s",doorAlong:.2,sign:{text:"らーめん 麺処",sub:"MENYA TOKYO",bg:"#8a1f18",fg:"#ffebc4"},awning:"#8a1f18",seed:202},{id:"b-konbini",name:"FamilyKonbini Store",x:27,z:15.5,w:11,d:13,floors:3,wall:"#282d34",trim:"#3c4550",balcony:"#333b47",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2],ground:"konbini",enterable:!0,doorFace:"w",doorAlong:0,sign:{text:"CONVENIENCE STORE",sub:"24H コンビニエンス",bg:"#0d6b42",fg:"#ffffff"},awning:"#0d6b42",seed:303},{id:"b-cafe",name:"Cafe Mame",x:3.5,z:30,w:11,d:10,floors:3,wall:"#2a2723",trim:"#453c33",balcony:"#3e352b",bay:3,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"cafe",enterable:!0,doorFace:"e",doorAlong:0,sign:{text:"喫茶 TOKYO CAFE",sub:"ROASTERY & BEANS",bg:"#4a2f1c",fg:"#f4ebd8"},awning:"#4a2f1c",seed:404},{id:"b-ne-apartments",name:"Mori Building",x:27,z:32,w:11,d:14,floors:5,wall:"#232a35",trim:"#384355",balcony:"#2e3848",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"w",doorAlong:0,sign:{text:"森クリニック / 薬局",sub:"PHARMACY & CLINIC",bg:"#1c4a5c",fg:"#e8f4f8"},seed:505},{id:"b-nw-mansion",name:"Chuo Grand Residence",x:-24,z:15.5,w:22,d:13,floors:5,wall:"#222830",trim:"#343e4c",balcony:"#2b3340",bay:6,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"s",doorAlong:-.3,sign:{text:"白金クリーニング",sub:"DRY CLEANERS & LAUNDRY",bg:"#25447a",fg:"#eef4ff"},awning:"#25447a",seed:606},{id:"b-fe-north",name:"Higashi Heights",x:43,z:15.5,w:15,d:13,floors:4,wall:"#26292e",trim:"#3a3f47",balcony:"#31363e",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,sign:{text:"書店 本屋",sub:"BOOKSTORE & CAFE",bg:"#6b301e",fg:"#fbece2"},seed:707},{id:"b-sw-commercial",name:"Minami Square",x:-27,z:-15.5,w:15,d:13,floors:4,wall:"#2c2925",trim:"#443f38",balcony:"#37322c",bay:4,front:"n",open:["n","e"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,sign:{text:"和食 酒処 居酒屋",sub:"TRADITIONAL IZAKAYA",bg:"#8a331a",fg:"#ffeeda"},awning:"#8a331a",seed:808},{id:"b-sw-houses",name:"Minami Residences",x:-27,z:-32,w:15,d:14,floors:3,wall:"#282b2d",trim:"#3c4145",balcony:"#32363a",bay:4,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"home",enterable:!1,doorFace:"e",doorAlong:0,seed:909},{id:"b-se-mansion",name:"Parkside Court",x:23,z:-15.5,w:22,d:13,floors:5,wall:"#212630",trim:"#323a48",balcony:"#29303c",bay:6,front:"n",open:["n"],balconyFaces:["n","w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"n",doorAlong:.2,sign:{text:"パークサイド歯科",sub:"DENTAL CLINIC",bg:"#1f5263",fg:"#e8f7fa"},seed:1010},{id:"b-fe-south",name:"Taito Mansion",x:43,z:-15.5,w:15,d:13,floors:4,wall:"#27292c",trim:"#3d4045",balcony:"#33363a",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1111},{id:"b-fw-north",name:"Nishi Heights",x:-44,z:15.5,w:14,d:13,floors:4,wall:"#242a32",trim:"#363f4b",balcony:"#2d3540",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,seed:1212},{id:"b-fw-south",name:"Nishi Court",x:-44,z:-15.5,w:14,d:13,floors:4,wall:"#2a2725",trim:"#403b38",balcony:"#35312e",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1313}],uf=3.65,F1=18,k1=24,pf=.0022;class O1{constructor(t,n,e){ue(this,"x");ue(this,"z");ue(this,"yaw");ue(this,"pitch",0);ue(this,"feetY");ue(this,"eye",1.62);ue(this,"seated",!1);ue(this,"vx",0);ue(this,"vz",0);ue(this,"forward",new N);ue(this,"right",new N);ue(this,"euler",new qn(0,0,0,"YXZ"));ue(this,"quat",new Go);this.x=t,this.z=n,this.yaw=e,this.feetY=Ta(t,n)}applyMouse(t,n){this.yaw-=t*pf,this.pitch-=n*pf,this.pitch=Math.max(-1.25,Math.min(1.25,this.pitch))}update(t,n,e){this.forward.set(0,0,-1),this.euler.set(0,this.yaw,0,"YXZ"),this.forward.applyEuler(this.euler),this.forward.y=0,this.forward.lengthSq()>1e-6&&this.forward.normalize(),this.right.set(-this.forward.z,0,this.forward.x);const i=n&&!this.seated?rf(["KeyS","ArrowDown"],["KeyW","ArrowUp"]):0,s=n&&!this.seated?rf(["KeyA","ArrowLeft"],["KeyD","ArrowRight"]):0;let r=this.forward.x*i+this.right.x*s,a=this.forward.z*i+this.right.z*s;const l=Math.hypot(r,a);l>1&&(r/=l,a/=l);const c=r*uf,f=a*uf,d=Math.hypot(c,f),u=Math.hypot(this.vx,this.vz),x=(d>u?F1:k1)*t,w=c-this.vx,g=f-this.vz,m=Math.hypot(w,g);m<=x?(this.vx=c,this.vz=f):(this.vx+=w/m*x,this.vz+=g/m*x),(!n||this.seated)&&(this.vx=0,this.vz=0);const v=this.vx*t,y=this.vz*t;if(Math.abs(v)>1e-5||Math.abs(y)>1e-5){const A=e.move(this.x,this.z,v,y,this.feetY);this.x=A.x,this.z=A.z}const _=Ta(this.x,this.z),P=1-Math.exp(-14*t);this.feetY+=(_-this.feetY)*P;const C=this.seated?1.05:1.62;this.eye+=(C-this.eye)*(1-Math.exp(-8*t))}moving(){return Math.hypot(this.vx,this.vz)>.15}applyCamera(t){t.position.set(this.x,this.feetY+this.eye,this.z),t.rotation.order="YXZ",t.rotation.y=this.yaw,t.rotation.x=this.pitch,t.rotation.z=0}look(t){return this.euler.set(0,this.yaw,0,"YXZ"),this.quat.setFromEuler(this.euler),t.set(0,0,-1).applyQuaternion(this.quat)}lookFlat(){const t=this.look(this.forward);return{x:t.x,z:t.z}}teleport(t,n,e){this.x=t,this.z=n,e!==void 0&&(this.yaw=e),this.vx=0,this.vz=0,this.feetY=Ta(t,n)}}class B1{constructor(){ue(this,"quality","low");ue(this,"listeners",[]);try{const t=localStorage.getItem("tokyo_graphics_quality");t==="high"||t==="low"?this.quality=t:this.quality="low"}catch{this.quality="low"}}getQuality(){return this.quality}isHigh(){return this.quality==="high"}setQuality(t){this.quality=t;try{localStorage.setItem("tokyo_graphics_quality",t)}catch{}for(const n of this.listeners)n(t)}toggleQuality(){const t=this.quality==="low"?"high":"low";return this.setQuality(t),t}onChange(t){return this.listeners.push(t),()=>{const n=this.listeners.indexOf(t);n>=0&&this.listeners.splice(n,1)}}}const Rn=new B1;new R({vertexColors:!0,roughness:.86,metalness:.04});new Wt({vertexColors:!0,toneMapped:!1});new R({color:1054752,roughness:.08,metalness:.45,transparent:!0,opacity:.55,depthWrite:!1});const qe=new R({color:12044756,roughness:.06,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1,side:pn}),G1=new R({color:16777215,roughness:.42,metalness:.62}),Oe=new R({color:2764339,roughness:.4,metalness:.72}),ti=new Wt({color:16769712,toneMapped:!1});function H1(){const o=document.createElement("canvas");o.width=512,o.height=512;const t=o.getContext("2d"),n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");t.fillStyle="#161920",t.fillRect(0,0,512,512),e.fillStyle="#b8b8b8",e.fillRect(0,0,512,512);const i=t.getImageData(0,0,512,512),s=e.getImageData(0,0,512,512),r=i.data,a=s.data;for(let d=0;d<r.length;d+=4){const u=(Math.random()-.5)*18;r[d]=Math.max(10,Math.min(45,r[d]+u)),r[d+1]=Math.max(12,Math.min(48,r[d+1]+u)),r[d+2]=Math.max(16,Math.min(54,r[d+2]+u));const h=(Math.random()-.5)*25;a[d]=Math.max(120,Math.min(230,a[d]+h)),a[d+1]=a[d],a[d+2]=a[d]}t.putImageData(i,0,0),e.putImageData(s,0,0),t.fillStyle="rgba(8, 10, 14, 0.65)",e.fillStyle="rgb(24, 24, 24)";const l=[{x:140,y:160,rx:90,ry:45,rot:.2},{x:380,y:340,rx:110,ry:55,rot:-.3},{x:260,y:440,rx:70,ry:35,rot:.1},{x:100,y:420,rx:60,ry:30,rot:-.2},{x:420,y:120,rx:80,ry:40,rot:.4}];for(const d of l)t.beginPath(),t.ellipse(d.x,d.y,d.rx,d.ry,d.rot,0,Math.PI*2),t.fill(),e.beginPath(),e.ellipse(d.x,d.y,d.rx,d.ry,d.rot,0,Math.PI*2),e.fill();const c=new se(o);c.wrapS=Pe,c.wrapT=Pe,c.repeat.set(12,1.5),c.colorSpace=xe;const f=new se(n);return f.wrapS=Pe,f.wrapT=Pe,f.repeat.set(12,1.5),{map:c,roughnessMap:f}}const mf=H1(),V1=new R({map:mf.map,roughnessMap:mf.roughnessMap,roughness:.65,metalness:.22});function W1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#2b3038",t.fillRect(0,0,256,256);const n=64;t.strokeStyle="#1b1e24",t.lineWidth=3;for(let i=0;i<256;i+=n)for(let s=0;s<256;s+=n){const r=Math.floor((Math.random()-.5)*12);t.fillStyle=`rgb(${43+r}, ${48+r}, ${56+r})`,t.fillRect(s+1.5,i+1.5,n-3,n-3),t.strokeRect(s,i,n,n)}const e=new se(o);return e.wrapS=Pe,e.wrapT=Pe,e.repeat.set(8,2),e.colorSpace=xe,e}const X1=W1(),Y1=new R({map:X1,color:13159892,roughness:.88,metalness:.04}),gf=new R({color:2368029,roughness:.92,metalness:.03});function Z1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#2c271f",t.fillRect(0,0,256,256);const n=t.getImageData(0,0,256,256),e=n.data;for(let s=0;s<e.length;s+=4){const r=(Math.random()-.5)*22;e[s]=Math.max(25,Math.min(65,e[s]+r)),e[s+1]=Math.max(22,Math.min(58,e[s+1]+r*.9)),e[s+2]=Math.max(16,Math.min(48,e[s+2]+r*.75))}t.putImageData(n,0,0);for(let s=0;s<90;s++){const r=Math.random()*256,a=Math.random()*256,l=.8+Math.random()*1.6;t.fillStyle=Math.random()>.4?"rgba(78, 70, 58, 0.6)":"rgba(28, 24, 18, 0.7)",t.beginPath(),t.arc(r,a,l,0,Math.PI*2),t.fill()}const i=new se(o);return i.wrapS=Pe,i.wrapT=Pe,i.repeat.set(10,10),i.colorSpace=xe,i}function q1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#1c1b18",t.fillRect(0,0,256,256);const n=8,e=256/n,i=64;t.strokeStyle="#141310",t.lineWidth=2;for(let r=0;r<n;r++){const a=r*e,l=r%2*(i/2);for(let c=-i;c<256+i;c+=i){const f=c+l,d=Math.floor((Math.random()-.5)*16);t.fillStyle=`rgb(${54+d}, ${50+d}, ${44+d})`,t.fillRect(f+1,a+1,i-2,e-2),t.strokeRect(f,a,i,e)}}const s=new se(o);return s.wrapS=Pe,s.wrapT=Pe,s.repeat.set(4,4),s.colorSpace=xe,s}const $1=Z1(),K1=q1(),J1=new R({map:$1,color:12893359,roughness:.94,metalness:.02}),j1=new R({map:K1,color:13485497,roughness:.88,metalness:.04}),Q1=new R({color:1914401,roughness:.92,metalness:.01}),gl=new R({color:1453850,roughness:.95,metalness:0}),tg=new R({color:1255191,roughness:.95,metalness:0}),eg=new R({color:15232662,roughness:.72,metalness:0}),xf=new R({color:16118766,roughness:.72,metalness:0}),ng=new R({color:9069252,roughness:.72,metalness:0}),Io=new R({color:1942932,roughness:.35,metalness:.35}),Nl=new R({color:15054884,roughness:.32,metalness:.25}),us=new R({color:14038054,roughness:.35,metalness:.25}),ig=new R({color:1842722,roughness:.95,metalness:.04}),og=new R({color:14212841,roughness:.16,metalness:.88}),Ea=new R({color:5520422,roughness:.88,metalness:.02}),sg=new R({color:10390636,roughness:.96,metalness:.01}),rg=new R({color:3027770,roughness:.3,metalness:.85}),ys=new R({color:14475496,roughness:.42,metalness:.02}),ko=new R({color:13214539,roughness:.65,metalness:.05,emissive:4010002,emissiveIntensity:.2}),pi=new R({color:4009245,roughness:.9,metalness:.02}),Es=new R({color:3033648,roughness:.85,metalness:0}),zl=new R({color:14257826,roughness:.8,metalness:0});new R({color:14235689,emissive:12395541,emissiveIntensity:.85,roughness:.45});const ag=new R({color:15263455,roughness:.22,metalness:.12}),Ht=new R({color:8555158,roughness:.28,metalness:.78}),wf=new R({color:3557470,roughness:.2,metalness:.85}),_f=new R({color:1318440,roughness:.05,metalness:.9,transparent:!0,opacity:.7}),lg=new R({color:16079390,roughness:.35,metalness:.1}),cg=new R({color:15660282,roughness:.05,metalness:.95}),fg=new Wt({color:16770736,transparent:!0,opacity:.07,side:pn,depthWrite:!1,blending:Ra}),yf=new Wt({color:14540253,transparent:!0,opacity:.25,depthWrite:!1}),ft=new Map;function dg(o,t,n,e,i=512,s=160){const r=`${o}|${t}|${n}|${e??""}|${i}|${s}`,a=ft.get(r);if(a)return a;const l=document.createElement("canvas");l.width=i,l.height=s;const c=l.getContext("2d");c.fillStyle=t,c.fillRect(0,0,i,s),c.fillStyle=n,c.textAlign="center",c.textBaseline="middle";const f='"Yu Gothic UI", "Yu Gothic", Meiryo, "MS PGothic", sans-serif';e?(c.font=`700 ${Math.floor(s*.36)}px ${f}`,c.fillText(o,i/2,s*.38),c.font=`500 ${Math.floor(s*.2)}px ${f}`,c.fillText(e,i/2,s*.72)):(c.font=`700 ${Math.floor(s*.42)}px ${f}`,c.fillText(o,i/2,s/2));const d=new se(l);return d.colorSpace=xe,d.anisotropy=4,ft.set(r,d),d}function As(o,t,n,e,i=512,s=160){const r=dg(o,t,n,e,i,s);return new Wt({map:r,toneMapped:!1})}function hg(o){const t=`vend-${o}`,n=ft.get(t);if(n)return n;const e=[{bg:"#0e3d3a",head:"#f2a65a",a:"#d84a3a",b:"#2f6fed",c:"#f2d15a",label:"BOSS COFFEE"},{bg:"#3a1420",head:"#ff5a6a",a:"#7ad0c8",b:"#f2e27a",c:"#ffffff",label:"POCARI SWEAT"},{bg:"#14243f",head:"#7eb6ff",a:"#ff7a45",b:"#6d8",c:"#ffe08a",label:"GREEN TEA"}],i=e[o%e.length],s=document.createElement("canvas");s.width=256,s.height=512;const r=s.getContext("2d");r.fillStyle=i.bg,r.fillRect(0,0,256,512),r.fillStyle=i.head,r.fillRect(16,18,224,64),r.fillStyle="#102028",r.font='700 32px "Yu Gothic UI", Meiryo, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i.label,128,50),[i.a,i.b,i.c].forEach((c,f)=>{const d=110+f*96;r.fillStyle="#071016",r.fillRect(28,d,200,78),r.fillStyle=c,r.fillRect(40,d+12,36,54),r.fillRect(86,d+12,36,54),r.fillRect(132,d+12,36,54),r.fillRect(178,d+12,36,54)}),r.fillStyle="#05070a",r.fillRect(48,430,160,48),r.strokeStyle="rgba(255,255,255,0.35)",r.strokeRect(48,430,160,48);const l=new se(s);return l.colorSpace=xe,ft.set(t,l),l}function ug(){const o="emergency-exit",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#0a7844",e.fillRect(0,0,256,128),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(8,8,240,112),e.fillStyle="#ffffff",e.font='bold 36px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("非常口 EXIT",128,74);const i=new se(n);return i.colorSpace=xe,ft.set(o,i),i}function pg(){const o="manhole-cover",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22262c",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill(),e.strokeStyle="#3d444e",e.lineWidth=6,e.stroke(),e.strokeStyle="#485260",e.lineWidth=3,e.beginPath(),e.arc(128,128,96,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(128,128,54,0,Math.PI*2),e.stroke();for(let s=0;s<Math.PI*2;s+=Math.PI/4)e.save(),e.translate(128,128),e.rotate(s),e.fillStyle="#3a424e",e.beginPath(),e.ellipse(0,75,12,18,0,0,Math.PI*2),e.fill(),e.restore();e.fillStyle="#505a68",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("下水",128,128);const i=new se(n);return i.colorSpace=xe,ft.set(o,i),i}function mg(){const o="konbini-counter-front",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#f8f9fa",e.fillRect(0,0,512,256),e.fillStyle="#0d7a46",e.fillRect(0,48,512,28),e.fillStyle="#ffffff",e.fillRect(0,76,512,8),e.fillStyle="#0080cc",e.fillRect(0,84,512,16),e.strokeStyle="#e2e6ea",e.lineWidth=2;for(let s=128;s<512;s+=128)e.beginPath(),e.moveTo(s,100),e.lineTo(s,230),e.stroke();e.fillStyle="#3a3f47",e.fillRect(0,230,512,26);const i=new se(n);return i.colorSpace=xe,ft.set(o,i),i}function gg(){const o="konbini-wall-stripes",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#f4f6f9",e.fillRect(0,0,512,512),e.strokeStyle="#e1e5eb",e.lineWidth=2,e.strokeRect(0,0,512,512),e.fillStyle="#0d7a46",e.fillRect(0,18,512,36),e.fillStyle="#ffffff",e.fillRect(0,54,512,8),e.fillStyle="#0080cc",e.fillRect(0,62,512,22);const i=new se(n);return i.wrapS=Pe,i.wrapT=Pe,i.repeat.set(4,1),i.colorSpace=xe,ft.set(o,i),i}function xg(){const o="konbini-cooler-doors",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#0a1016",e.fillRect(0,0,1024,512);const i=256,s=[[{color:"#2b7835",label:"お〜いお茶"},{color:"#388a44",label:"生茶"},{color:"#1f5e28",label:"伊右衛門"},{color:"#665522",label:"烏龍茶"}],[{color:"#0088dd",label:"POCARI"},{color:"#00b4d8",label:"AQUARIUS"},{color:"#e8f4ff",label:"いろはす"},{color:"#0066aa",label:"DAKARA"}],[{color:"#d4af37",label:"BOSS GOLD"},{color:"#1c1c1c",label:"BLACK COFFEE"},{color:"#8b0000",label:"GEORGIA"},{color:"#f5deb3",label:"MILK TEA"}],[{color:"#cc0000",label:"COCA-COLA"},{color:"#ffd700",label:"C.C.LEMON"},{color:"#00aa55",label:"MELON SODA"},{color:"#ffffff",label:"CALPIS"}]];for(let a=0;a<4;a++){const l=a*i,c=s[a];for(let f=0;f<5;f++){const d=30+f*95;e.fillStyle="#e8f4fa",e.fillRect(l+12,d+68,i-24,6),e.fillStyle="#ff4444",e.fillRect(l+12,d+74,i-24,12),e.fillStyle="#ffffff",e.font="bold 9px sans-serif",e.textAlign="center",e.fillText("¥140 ~ ¥160",l+i/2,d+83);const u=5;for(let h=0;h<u;h++){const x=l+24+h*44,w=c[h%c.length];e.fillStyle="rgba(255, 255, 255, 0.15)",e.fillRect(x-2,d+8,32,58),e.fillStyle=w.color,e.fillRect(x,d+10,28,56),e.fillStyle="#ffffff",e.fillRect(x+6,d+4,16,6),e.fillStyle="#ffffff",e.fillRect(x+2,d+26,24,22),e.fillStyle="#111111",e.font="bold 8px sans-serif",e.fillText(w.label.substring(0,4),x+14,d+38)}}e.strokeStyle="#8a929c",e.lineWidth=8,e.strokeRect(l+4,8,i-8,496),e.fillStyle="#cfd4dc",e.fillRect(l+i-22,180,10,150),e.fillStyle="#222222",e.fillRect(l+i-20,182,6,146)}const r=new se(n);return r.colorSpace=xe,ft.set(o,r),r}function wg(){const o="hot-snacks-display",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#d92c18",e.fillRect(0,0,256,128),e.fillStyle="#ff7700",e.fillRect(4,4,248,42),e.fillStyle="#ffffff",e.font='bold 22px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("HOT SNACKS",128,30),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.fillText("ファミチキ ¥220 / 肉まん ¥160",128,76),e.font='12px "Yu Gothic UI", sans-serif',e.fillText("できたて あつあつ！揚げたて",128,104);const i=new se(n);return i.colorSpace=xe,ft.set(o,i),i}function _g(){const o="apt-lobby-wall",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#eee9e0",e.fillRect(0,0,512,512);const i=64;for(let r=0;r<512;r+=i){const a=r/i%2===0?0:128;for(let l=-128;l<640;l+=256){const c=Math.floor((Math.sin(l*12.3+r*4.5)+1)*6),f=238+c,d=233+c,u=224+c;e.fillStyle=`rgb(${f},${d},${u})`,e.fillRect(l+a+2,r+2,252,i-4);for(let h=0;h<12;h++)e.fillStyle="rgba(160, 150, 135, 0.15)",e.fillRect(l+a+Math.random()*240,r+Math.random()*(i-6),2,2)}e.fillStyle="#cfc6b8",e.fillRect(0,r,512,2)}const s=new se(n);return s.wrapS=Pe,s.wrapT=Pe,s.repeat.set(3,2),ft.set(o,s),s}function yg(){const o="apt-lobby-floor",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ded7cc",e.fillRect(0,0,512,512);for(let s=0;s<2;s++)for(let r=0;r<2;r++){const a=s*256,l=r*256;e.fillStyle=(s+r)%2===0?"#e4ded4":"#dfd9cf",e.fillRect(a+2,l+2,252,252),e.strokeStyle="rgba(255, 255, 255, 0.45)",e.lineWidth=3,e.beginPath(),e.moveTo(a+20,l+220),e.bezierCurveTo(a+90,l+160,a+140,l+200,a+230,l+40),e.stroke(),e.strokeStyle="rgba(160, 145, 130, 0.22)",e.lineWidth=2,e.beginPath(),e.moveTo(a+40,l+240),e.bezierCurveTo(a+120,l+170,a+170,l+120,a+240,l+80),e.stroke()}e.strokeStyle="#b8ad9e",e.lineWidth=3,e.strokeRect(0,0,512,512),e.beginPath(),e.moveTo(256,0),e.lineTo(256,512),e.moveTo(0,256),e.lineTo(512,256),e.stroke();const i=new se(n);return i.wrapS=Pe,i.wrapT=Pe,i.repeat.set(4,4),ft.set(o,i),i}function vg(){const o="wood-slats",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22150c",e.fillRect(0,0,256,256);const i=24,r=i+8;for(let l=0;l<256;l+=r){e.fillStyle="#b8834a",e.fillRect(l,0,i,256),e.strokeStyle="rgba(120, 70, 30, 0.25)",e.lineWidth=1.5;for(let c=0;c<3;c++){const f=l+4+c*7;e.beginPath(),e.moveTo(f,0),e.bezierCurveTo(f+2,80,f-2,160,f+1,256),e.stroke()}e.fillStyle="rgba(255, 230, 190, 0.35)",e.fillRect(l,0,2,256),e.fillStyle="rgba(40, 20, 10, 0.45)",e.fillRect(l+i-2,0,2,256)}const a=new se(n);return a.wrapS=Pe,a.wrapT=Pe,a.repeat.set(3,1),ft.set(o,a),a}function Mg(){const o="apt-mailboxes",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#8f96a0",e.fillRect(0,0,1024,512);for(let u=0;u<512;u+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,u,1024,2);e.fillStyle="#222830",e.fillRect(16,12,992,44),e.fillStyle="#d4af37",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("SUN HEIGHTS  |  集合郵便受箱 (MAIL BOXES)",36,41),e.textAlign="right",e.font="15px sans-serif",e.fillStyle="#a0aec0",e.fillText("ROOMS 101 - 406",988,41);const i=6,s=4,r=20,a=68,l=Math.floor(984/i),c=Math.floor(432/s),f=[["401","402","403","404","405","406"],["301","302","303","304","305","306"],["201","202","203","204","205","206"],["101","102","103","104","105","106"]];for(let u=0;u<s;u++)for(let h=0;h<i;h++){const x=r+h*l,w=a+u*c;e.fillStyle="#a8b0ba",e.fillRect(x+3,w+3,l-6,c-6),e.strokeStyle="#4e5560",e.lineWidth=2,e.strokeRect(x+3,w+3,l-6,c-6),e.fillStyle="#68707a",e.fillRect(x+12,w+12,l-24,18),e.fillStyle="#242a32",e.fillRect(x+16,w+27,l-32,3);const g=f[u][h];e.fillStyle="#11161d",e.fillRect(x+14,w+40,56,26),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(x+14,w+40,56,26),e.fillStyle="#ffffff",e.font='bold 16px "Yu Gothic UI", monospace',e.textAlign="center",e.fillText(g,x+42,w+59);const m=x+l-34,v=w+53;e.fillStyle="#1a1f26",e.beginPath(),e.arc(m,v,15,0,Math.PI*2),e.fill(),e.strokeStyle="#c5ccd6",e.lineWidth=2,e.stroke(),e.fillStyle="#ffffff";for(let y=0;y<8;y++){const _=y*Math.PI/4;e.fillRect(m+Math.cos(_)*11-1,v+Math.sin(_)*11-1,2,2)}e.fillStyle="#e8ecf0",e.fillRect(x+14,w+72,l-28,14),e.strokeStyle="#7c8694",e.lineWidth=1,e.strokeRect(x+14,w+72,l-28,14),e.fillStyle="#44505f",e.font="10px sans-serif",e.textAlign="left",e.fillText(g==="304"?"RELZZY (304)":"RESIDENT",x+20,w+83)}const d=new se(n);return ft.set(o,d),d}function Sg(){const o="apt-delivery-lockers",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#262d36",e.fillRect(0,0,512,512),e.fillStyle="#151a22",e.fillRect(10,10,492,42),e.fillStyle="#38e59e",e.font='bold 18px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("宅配ロッカー TAKUHAIBOX",26,37),e.fillStyle="#a0aec0",e.font="12px sans-serif",e.textAlign="right",e.fillText("24H PARCEL SYSTEM",486,37),e.fillStyle="#1a202c",e.fillRect(160,68,192,210),e.strokeStyle="#4a5568",e.lineWidth=2,e.strokeRect(160,68,192,210),e.fillStyle="#0f2942",e.fillRect(172,80,168,90),e.fillStyle="#38bdf8",e.font='bold 13px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("荷物のお受け取り",256,106),e.fillStyle="#e2e8f0",e.font="11px sans-serif",e.fillText("部屋番号を入力してください",256,128),e.fillStyle="#22c55e",e.fillText("[304: 1個のお届け物]",256,150);for(let r=0;r<4;r++)for(let a=0;a<3;a++){const l=184+a*48,c=182+r*22;e.fillStyle="#334155",e.fillRect(l,c,40,18),e.fillStyle="#f8fafc",e.font="bold 10px monospace",e.fillText(`${r*3+a+1}`,l+20,c+13)}const i=[{x:16,y:68,w:132,h:64,label:"BOX 01",inUse:!1},{x:16,y:140,w:132,h:64,label:"BOX 02",inUse:!0},{x:16,y:212,w:132,h:64,label:"BOX 03",inUse:!0},{x:364,y:68,w:132,h:96,label:"BOX 04",inUse:!1},{x:364,y:172,w:132,h:104,label:"BOX 05",inUse:!1},{x:16,y:288,w:236,h:208,label:"LARGE BOX 06",inUse:!1},{x:260,y:288,w:236,h:208,label:"LARGE BOX 07",inUse:!1}];for(const r of i)e.fillStyle="#3a4454",e.fillRect(r.x,r.y,r.w,r.h),e.strokeStyle="#1a222e",e.lineWidth=2,e.strokeRect(r.x,r.y,r.w,r.h),e.fillStyle="#8a94a4",e.fillRect(r.x+r.w-18,r.y+r.h/2-16,8,32),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText(r.label,r.x+10,r.y+22),e.fillStyle=r.inUse?"#f59e0b":"#10b981",e.beginPath(),e.arc(r.x+r.w-14,r.y+16,5,0,Math.PI*2),e.fill();const s=new se(n);return ft.set(o,s),s}function bg(){const o="reception-notice-board",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#c8955a",e.fillRect(0,0,512,256);for(let s=0;s<400;s++)e.fillStyle=Math.random()>.5?"rgba(90, 50, 20, 0.15)":"rgba(255, 230, 180, 0.15)",e.fillRect(Math.random()*512,Math.random()*256,3,3);e.strokeStyle="#6b401e",e.lineWidth=10,e.strokeRect(5,5,502,246),e.fillStyle="#2d1e12",e.fillRect(16,14,480,28),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("サンハイツ管理組合 掲示板 (RESIDENTS NOTICE)",256,34),e.fillStyle="#ffffff",e.fillRect(24,52,140,186),e.strokeStyle="#d4d4d4",e.lineWidth=1,e.strokeRect(24,52,140,186),e.fillStyle="#dc2626",e.fillRect(28,56,132,22),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.fillText("ゴミ収集日程",94,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・可燃ゴミ: 月・木",32,98),e.fillText("・資源ゴミ: 水曜日",32,116),e.fillText("・不燃ゴミ: 第2火曜",32,134),e.fillText("※朝8時までに排出",32,158),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.fillRect(182,52,150,186),e.strokeRect(182,52,150,186),e.fillStyle="#2563eb",e.fillRect(186,56,142,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("消防設備定期点検",257,72),e.fillStyle="#1e293b",e.font="10px sans-serif",e.textAlign="left",e.fillText("今週土曜日 10:00~",190,98),e.fillText("各戸火災報知器テスト",190,116),e.fillText("インターホン点検実施",190,134),e.fillText("ご在宅をお願いします",190,158),e.fillStyle="#3b82f6",e.beginPath(),e.arc(257,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#fffbeb",e.fillRect(350,52,138,186),e.strokeRect(350,52,138,186),e.fillStyle="#059669",e.fillRect(354,56,130,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("共用部利用マナー",419,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・駐輪場シール貼付",358,98),e.fillText("・共用廊下置配禁止",358,116),e.fillText("・夜間静粛のお願い",358,134),e.strokeStyle="#dc2626",e.lineWidth=2,e.strokeRect(436,180,42,42),e.fillStyle="#dc2626",e.font="bold 9px serif",e.textAlign="center",e.fillText("管理",457,198),e.fillText("組合印",457,214),e.fillStyle="#10b981",e.beginPath(),e.arc(419,56,5,0,Math.PI*2),e.fill();const i=new se(n);return ft.set(o,i),i}function Tg(){const o="apt-directory-board",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=384;const e=n.getContext("2d");e.fillStyle="#161d26",e.fillRect(0,0,512,384),e.strokeStyle="#d4af37",e.lineWidth=6,e.strokeRect(6,6,500,372),e.strokeStyle="#4a5568",e.lineWidth=1.5,e.strokeRect(16,16,480,352),e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", serif',e.textAlign="center",e.fillText("SUN HEIGHTS KANAMECHO",256,54),e.font='14px "Yu Gothic UI", sans-serif',e.fillStyle="#e2e8f0",e.fillText("サンハイツ要町 総合案内",256,78),e.fillStyle="#d4af37",e.fillRect(40,92,432,2);const i=[{floor:"4F",desc:"401 - 406  RESIDENCE / ルーフバルコニー"},{floor:"3F",desc:"301 - 306  RESIDENCE (Relzzy #304)"},{floor:"2F",desc:"201 - 206  RESIDENCE"},{floor:"1F",desc:"管理事務室 / エントランス / 集合受箱 / 宅配BOX"}];for(let r=0;r<i.length;r++){const a=138+r*50;e.fillStyle="#2a3442",e.fillRect(44,a-24,60,34),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(44,a-24,60,34),e.fillStyle="#d4af37",e.font="bold 18px monospace",e.textAlign="center",e.fillText(i[r].floor,74,a),e.fillStyle="#ffffff",e.font='14px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText(i[r].desc,120,a),r<3&&(e.fillStyle="rgba(255, 255, 255, 0.12)",e.fillRect(44,a+20,424,1))}e.fillStyle="#718096",e.font="11px sans-serif",e.textAlign="center",e.fillText("管理人常駐: 平日 9:00 ~ 17:00 | 管理会社コールセンター 24H",256,346);const s=new se(n);return ft.set(o,s),s}function Eg(){const o="ramen-shop-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#1c1510",e.fillRect(0,0,512,256);for(let s=0;s<256;s+=4)e.fillStyle=Math.random()>.5?"rgba(70, 45, 25, 0.25)":"rgba(10, 8, 6, 0.35)",e.fillRect(0,s,512,3);e.strokeStyle="#3d2616",e.lineWidth=12,e.strokeRect(6,6,500,244),e.strokeStyle="#5a3820",e.lineWidth=3,e.strokeRect(14,14,484,228),e.fillStyle="#e2c595",e.font='bold 16px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("自家製麺・濃厚豚骨スープ",256,48),e.fillStyle="#f8e4b8",e.font="bold 52px serif",e.shadowColor="#000000",e.shadowBlur=6,e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText("らーめん 麺処",256,116),e.shadowColor="transparent",e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", sans-serif',e.fillText("MENYA TOKYO",256,160),e.fillStyle="#b89d78",e.font="14px sans-serif",e.fillText("創業 昭和六十二年  |  特製チャーシュー・煮玉子",256,196),e.strokeStyle="#c42012",e.lineWidth=2.5,e.strokeRect(38,92,42,42),e.fillStyle="#c42012",e.font="bold 11px serif",e.textAlign="center",e.fillText("味",59,110),e.fillText("自慢",59,126),e.strokeStyle="#c42012",e.strokeRect(432,92,42,42),e.fillText("秘",453,110),e.fillText("伝",453,126);const i=new se(n);return ft.set(o,i),i}function Ag(o){const t=`ramen-lantern-${o}`,n=ft.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,512,0);s.addColorStop(0,"#9a160c"),s.addColorStop(.3,"#d8281a"),s.addColorStop(.5,"#f03a28"),s.addColorStop(.7,"#d8281a"),s.addColorStop(1,"#9a160c"),i.fillStyle=s,i.fillRect(0,0,512,512);for(let c=40;c<470;c+=22)i.fillStyle="rgba(70, 8, 4, 0.4)",i.fillRect(0,c,512,3),i.fillStyle="rgba(255, 180, 160, 0.25)",i.fillRect(0,c+3,512,1.5);i.fillStyle="#141416",i.fillRect(0,0,512,42),i.fillRect(0,470,512,42),i.fillStyle="#d4af37",i.fillRect(0,38,512,4),i.fillRect(0,470,512,4),i.fillStyle="#101012",i.font="900 84px serif",i.textAlign="center";const r=o.split(""),a=256-(r.length-1)*90/2;r.forEach((c,f)=>{i.shadowColor="rgba(0, 0, 0, 0.6)",i.shadowBlur=4,i.shadowOffsetX=2,i.shadowOffsetY=2,i.fillText(c,256,a+f*95)}),i.shadowColor="transparent";const l=new se(e);return ft.set(t,l),l}function Rg(){const o="ramen-noren",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#162234",e.fillRect(0,0,512,256);for(let a=0;a<256;a+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,a,512,2);const i=512/4;for(let a=1;a<4;a++){const l=a*i;e.fillStyle="#080c14",e.fillRect(l-3,40,6,216)}e.fillStyle="#0f1722",e.fillRect(0,0,512,38),e.strokeStyle="#2d3b4e",e.lineWidth=2,e.strokeRect(0,0,512,38);for(let a=0;a<8;a++){const l=28+a*64;e.fillStyle="#223044",e.fillRect(l,2,24,34)}const s=["ら","ー","め","ん"];e.fillStyle="#f8fafc",e.font='bold 64px "Yu Gothic UI", serif',e.textAlign="center";for(let a=0;a<4;a++){const l=a*i+i/2;e.fillText(s[a],l,155)}e.strokeStyle="#f8fafc",e.lineWidth=3,e.beginPath(),e.arc(256,75,22,0,Math.PI*2),e.stroke(),e.font="bold 22px serif",e.fillText("麺",256,83),e.fillStyle="#f8fafc",e.font="bold 13px sans-serif",e.fillText("営 業 中",450,220);const r=new se(n);return ft.set(o,r),r}function Cg(){const o="ramen-kenbaiki",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8e2d8",e.fillRect(0,0,512,512),e.fillStyle="#262d36",e.fillRect(16,16,480,480),e.strokeStyle="#4a5568",e.lineWidth=3,e.strokeRect(16,16,480,480),e.fillStyle="#111822",e.fillRect(28,28,456,48),e.fillStyle="#f59e0b",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("食券をお買い求めください",256,56),e.font="11px sans-serif",e.fillStyle="#94a3b8",e.fillText("PLEASE PURCHASE TICKET FIRST  |  千円札・二千円札・硬貨対応",256,70),e.fillStyle="#06101a",e.fillRect(320,88,160,36),e.strokeStyle="#1e293b",e.strokeRect(320,88,160,36),e.fillStyle="#22c55e",e.font="bold 18px monospace",e.textAlign="right",e.fillText("¥1,000",470,113),e.fillStyle="#dc2626",e.fillRect(28,92,280,28),e.fillStyle="#ffffff",e.font="bold 13px sans-serif",e.textAlign="center",e.fillText("★ 当店おすすめ 定番らーめん ★",168,111);const i=[{title:"特製豚骨らーめん",price:"¥980",color:"#f59e0b"},{title:"チャーシュー麺",price:"¥1,100",color:"#ef4444"},{title:"濃厚魚介味噌",price:"¥950",color:"#d97706"},{title:"味玉豚骨らーめん",price:"¥880",color:"#f59e0b"},{title:"辛味噌らーめん",price:"¥920",color:"#dc2626"},{title:"あっさり魚介醤油",price:"¥850",color:"#3b82f6"},{title:"替玉 (一玉)",price:"¥150",color:"#10b981"},{title:"博多一口餃子(5個)",price:"¥380",color:"#10b981"},{title:"炙りチャーシュー丼",price:"¥350",color:"#f97316"},{title:"追加トッピング 煮玉子",price:"¥120",color:"#64748b"},{title:"追加 メンマ/白ネギ",price:"¥120",color:"#64748b"},{title:"アサヒ スーパードライ",price:"¥550",color:"#eab308"}],s=144,r=58,a=28,l=132;for(let f=0;f<i.length;f++){const d=f%3,u=Math.floor(f/3),h=a+d*156,x=l+u*66,w=i[f];e.fillStyle="#1e2632",e.fillRect(h,x,s,r),e.strokeStyle=w.color,e.lineWidth=2,e.strokeRect(h,x,s,r),e.fillStyle=w.color,e.fillRect(h+4,x+4,s-8,16),e.fillStyle="#ffffff",e.font="bold 9.5px sans-serif",e.textAlign="center",e.fillText(w.title,h+s/2,x+16),e.fillStyle="#ffffff",e.font="bold 15px monospace",e.fillText(w.price,h+s/2,x+42),e.fillStyle="#22c55e",e.beginPath(),e.arc(h+12,x+47,3.5,0,Math.PI*2),e.fill()}e.fillStyle="#111822",e.fillRect(28,404,210,42),e.strokeStyle="#334155",e.strokeRect(28,404,210,42),e.fillStyle="#38bdf8",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText("紙幣投入口 (1000/2000円)",42,428),e.fillStyle="#0284c7",e.fillRect(170,418,56,12),e.fillStyle="#111822",e.fillRect(256,404,228,42),e.strokeStyle="#334155",e.strokeRect(256,404,228,42),e.fillStyle="#f59e0b",e.fillText("硬貨投入口 (500/100/50/10)",270,428),e.fillStyle="#d97706",e.fillRect(432,416,38,16),e.fillStyle="#0b0f14",e.fillRect(28,454,456,36),e.strokeStyle="#22c55e",e.lineWidth=1.5,e.strokeRect(28,454,456,36),e.fillStyle="#22c55e",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("▼ おつり・食券 口 (TICKET / CHANGE)",256,477);const c=new se(n);return ft.set(o,c),c}function Pg(){const o="ramen-shop-wall",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8dcc8",e.fillRect(0,0,512,320);for(let a=0;a<600;a++)e.fillStyle=Math.random()>.5?"rgba(180, 160, 130, 0.18)":"rgba(255, 245, 230, 0.25)",e.fillRect(Math.random()*512,Math.random()*320,2,2);const i=20;for(let a=0;a<512;a+=128)e.fillStyle="#3a2416",e.fillRect(a,0,i,320),e.fillStyle="#543622",e.fillRect(a+2,0,i-4,320);e.fillStyle="#3a2416",e.fillRect(0,312,512,16),e.fillStyle="#543622",e.fillRect(0,314,512,12),e.fillStyle="#2a1a10",e.fillRect(0,328,512,184);const s=42;for(let a=0;a<512;a+=s)e.fillStyle=a%(s*2)===0?"#382216":"#2e1c12",e.fillRect(a+2,328,s-4,184),e.fillStyle="#160d08",e.fillRect(a,328,2,184);const r=new se(n);return r.wrapS=Pe,r.wrapT=Pe,r.repeat.set(3,1),ft.set(o,r),r}function Ig(){const o="ramen-shop-floor",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#22262c",e.fillRect(0,0,512,512);const i=128;for(let r=0;r<512;r+=i)for(let a=0;a<512;a+=i){const l=Math.floor((Math.sin(r*3+a*7)+1)*8);e.fillStyle=`rgb(${34+l},${38+l},${44+l})`,e.fillRect(r+3,a+3,i-6,i-6);for(let c=0;c<8;c++)e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(r+Math.random()*(i-6),a+Math.random()*(i-6),2,2)}e.strokeStyle="#121519",e.lineWidth=4,e.strokeRect(0,0,512,512);for(let r=i;r<512;r+=i)e.beginPath(),e.moveTo(r,0),e.lineTo(r,512),e.stroke();for(let r=i;r<512;r+=i)e.beginPath(),e.moveTo(0,r),e.lineTo(512,r),e.stroke();const s=new se(n);return s.wrapS=Pe,s.wrapT=Pe,s.repeat.set(3,3),ft.set(o,s),s}const tt='"Yu Gothic UI", "Yu Gothic", Meiryo, "Hiragino Kaku Gothic ProN", "MS PGothic", sans-serif';function Lg(){const o="storefront-dental-window",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#eaf5f7"),i.addColorStop(.55,"#dbeff2"),i.addColorStop(1,"#cde6ea"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=e.getImageData(0,0,1024,512),r=s.data;for(let h=0;h<r.length;h+=4){const x=(Math.random()-.5)*8;r[h]=Math.min(255,Math.max(0,r[h]+x)),r[h+1]=Math.min(255,Math.max(0,r[h+1]+x)),r[h+2]=Math.min(255,Math.max(0,r[h+2]+x))}e.putImageData(s,0,0),e.fillStyle="#175261",e.fillRect(0,0,1024,88),e.fillStyle="#2db8aa",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(60,32),e.bezierCurveTo(54,24,68,22,68,34),e.bezierCurveTo(68,22,82,24,76,32),e.bezierCurveTo(82,48,76,60,72,60),e.bezierCurveTo(69,60,68,46,68,46),e.bezierCurveTo(68,46,67,60,64,60),e.bezierCurveTo(60,60,54,48,60,32),e.fill(),e.fillStyle="#ffffff",e.font=`700 36px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",114,34),e.fillStyle="#a6e2ec",e.font=`500 17px ${tt}`,e.fillText("PARKSIDE DENTAL CLINIC",116,64),e.fillStyle="#e2f7fa",e.font=`600 18px ${tt}`,e.textAlign="right",e.fillText("一般歯科 ・ 小児歯科 ・ 矯正歯科 ・ 口腔外科 ・ 予防定期検診",990,44),e.fillStyle="rgba(255, 255, 255, 0.92)",e.strokeStyle="#bedee3",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${tt}`,e.textAlign="left",e.fillText("【 診療時間のご案内 】",56,138);const a=56,l=165,c=48,f=["月","火","水","木","金","土","日/祝"];e.fillStyle="#edf7f9",e.fillRect(a+90,l,c*7,28),e.fillStyle="#175261",e.font=`700 15px ${tt}`,e.textAlign="center",f.forEach((h,x)=>{h==="木"||h.includes("日")?e.fillStyle="#d94b4b":e.fillStyle="#175261",e.fillText(h,a+90+x*c+c/2,l+14)}),[{label:"09:30 - 13:00",marks:["●","●","●","休","●","●","休"]},{label:"14:30 - 19:30",marks:["●","●","●","休","●","▲","休"]}].forEach((h,x)=>{const w=l+28+x*34;e.fillStyle=x%2===0?"#ffffff":"#f8fcfd",e.fillRect(a,w,90+c*7,34),e.strokeStyle="#d7eaee",e.strokeRect(a,w,90+c*7,34),e.fillStyle="#2a3b40",e.font=`600 13px ${tt}`,e.textAlign="center",e.fillText(h.label,a+45,w+17),h.marks.forEach((g,m)=>{g==="休"?(e.fillStyle="#b84242",e.font=`700 14px ${tt}`):g==="▲"?(e.fillStyle="#e07d10",e.font=`700 15px ${tt}`):(e.fillStyle="#1d788a",e.font=`700 16px ${tt}`),e.fillText(g,a+90+m*c+c/2,w+17)})}),e.fillStyle="#57727a",e.font=`500 13px ${tt}`,e.textAlign="left",e.fillText("▲ 土曜午後は 14:30〜17:00 まで診療",56,290),e.fillText("休診日：木曜日・日曜日・祝祭日",56,312),e.fillStyle="#1e7587",e.font=`600 13px ${tt}`,e.fillText("各種健康保険取扱 ・ 労災保険指定医療機関",56,345),e.fillStyle="rgba(255, 255, 255, 0.92)",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${tt}`,e.textAlign="left",e.fillText("【 ご予約・急患随時受付 】",546,138),e.fillStyle="#41575f",e.font=`500 15px ${tt}`,e.fillText("当院は患者様をお待たせしない予約優先制です。",546,172),e.fillText("急な歯の痛み・詰め物の脱落は当日診療いたします。",546,198),e.fillStyle="#edf8fa",e.strokeStyle="#3296a6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,222,420,72,6),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`600 14px ${tt}`,e.fillText("ご予約・お問い合わせダイヤル",566,242),e.fillStyle="#134e5c",e.font=`800 32px ${tt}`,e.fillText("TEL 03-3456-7890",566,274),e.fillStyle="#4a6870",e.font=`500 14px ${tt}`,e.fillText("● 痛みの少ない麻酔治療　● デジタルCT完備　● 完全滅菌対応",546,326),e.fillText("● 院内バリアフリー設計　● ベビーカー・車椅子そのまま入室可",546,352),e.fillStyle="rgba(255, 255, 255, 0.55)",e.fillRect(0,400,1024,112),e.fillStyle="rgba(255, 255, 255, 0.65)";for(let h=0;h<1024;h+=16)e.fillRect(h,405,8,95);e.fillStyle="#1c783c",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${tt}`,e.fillText("TOUCH 押してください",512,465);const u=new se(n);return u.colorSpace=xe,u.anisotropy=4,ft.set(o,u),u}function Dg(){const o="storefront-dental-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#154a57"),i.addColorStop(.5,"#1b5969"),i.addColorStop(1,"#113e4a"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#47a8bc",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(110,128,64,0,Math.PI*2),e.fill(),e.fillStyle="#1b5969",e.beginPath(),e.moveTo(96,100),e.bezierCurveTo(84,82,110,78,110,104),e.bezierCurveTo(110,78,136,82,124,100),e.bezierCurveTo(138,134,126,158,118,158),e.bezierCurveTo(112,158,110,130,110,130),e.bezierCurveTo(110,130,108,158,102,158),e.bezierCurveTo(94,158,82,134,96,100),e.fill(),e.fillStyle="#ffffff",e.font=`800 68px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",205,105),e.fillStyle="#9fe1ee",e.font=`600 24px ${tt}`,e.fillText("PARKSIDE DENTAL CLINIC  ・  TEL 03-3456-7890",210,172),e.fillStyle="#2db8aa",e.beginPath(),e.roundRect(790,80,190,96,12),e.fill(),e.fillStyle="#ffffff",e.font=`700 20px ${tt}`,e.textAlign="center",e.fillText("夜7時半まで",885,115),e.font=`600 16px ${tt}`,e.fillText("急患随時受付",885,146);const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function Ug(){const o="storefront-cleaners-window",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f0f5fb"),i.addColorStop(1,"#dfeaf5"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#1e3f7a",e.fillRect(0,0,1024,88),e.strokeStyle="#ffd84d",e.lineWidth=4,e.beginPath(),e.arc(68,30,12,0,Math.PI,!0),e.moveTo(40,58),e.lineTo(68,42),e.lineTo(96,58),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 38px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",120,36),e.fillStyle="#ffd84d",e.font=`600 17px ${tt}`,e.fillText("SHIROKANE DRY CLEANING & LAUNDRY",122,66),e.fillStyle="#ffffff",e.font=`700 18px ${tt}`,e.textAlign="right",e.fillText("朝10時お預かり ➡ 夕方5時お渡し！ スピード即日仕上げ",990,44),e.fillStyle="#ffffff",e.strokeStyle="#bed1e8",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 20px ${tt}`,e.textAlign="left",e.fillText("【 白金クリーニング 料金表 】",56,138),[{name:"ワイシャツ (立体抗菌消臭仕上)",price:"¥220〜"},{name:"スーツ上下 (汗抜きプレス付)",price:"¥1,280〜"},{name:"ジャケット・ブレザー",price:"¥780〜"},{name:"スラックス・スカート",price:"¥550〜"},{name:"ダウンジャケット・コート",price:"¥1,980〜"},{name:"毛布・羽毛ふとん丸洗い",price:"¥1,800〜"}].forEach((l,c)=>{const f=172+c*32;e.fillStyle="#2d3b4d",e.font=`600 15px ${tt}`,e.textAlign="left",e.fillText(l.name,56,f),e.fillStyle="#a0b3cb";for(let d=295;d<400;d+=8)e.fillRect(d,f-2,3,3);e.fillStyle="#d63429",e.font=`800 17px ${tt}`,e.textAlign="right",e.fillText(l.price,470,f)}),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#3a4b60",e.fillRect(550,130,412,6),["#1d2430","#3b4352","#263347","#4b5563","#1e2838"].forEach((l,c)=>{const f=560+c*80;e.strokeStyle="#8d99ae",e.lineWidth=2,e.beginPath(),e.moveTo(f+35,136),e.lineTo(f+15,155),e.lineTo(f+55,155),e.closePath(),e.stroke(),e.fillStyle=l,e.fillRect(f+15,155,40,75),e.fillStyle="rgba(255, 255, 255, 0.45)",e.fillRect(f+10,150,50,95),e.strokeStyle="rgba(180, 210, 240, 0.7)",e.strokeRect(f+10,150,50,95),e.fillStyle=c%2===0?"#ff4d4d":"#3385ff",e.fillRect(f+42,160,14,20)}),e.fillStyle="#eef5fc",e.strokeStyle="#296ed6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,260,420,100,6),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 18px ${tt}`,e.textAlign="left",e.fillText("★ 24時間コインランドリー併設 ★",566,285),e.fillStyle="#3f536e",e.font=`500 14px ${tt}`,e.fillText("大型洗濯乾燥機・スニーカーウォッシャー完備！",566,312),e.fillText("営業時間: 本店 8:00〜20:00 (水曜定休) / コインランドリー 24時間",566,338),e.fillStyle="rgba(235, 243, 252, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#1e3f7a",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${tt}`,e.fillText("TOUCH 押してください",512,465);const a=new se(n);return a.colorSpace=xe,a.anisotropy=4,ft.set(o,a),a}function Ng(){const o="storefront-cleaners-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#1c3e78"),i.addColorStop(.5,"#255099"),i.addColorStop(1,"#173466"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#ffd84d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#1c3e78",e.lineWidth=5,e.beginPath(),e.arc(105,105,15,0,Math.PI,!0),e.moveTo(75,142),e.lineTo(105,120),e.lineTo(135,142),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 68px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",200,102),e.fillStyle="#ffd84d",e.font=`700 24px ${tt}`,e.fillText("SHIROKANE DRY CLEANING  ・  24H コインランドリー併設",205,168),e.fillStyle="#e63946",e.beginPath(),e.roundRect(790,75,190,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${tt}`,e.textAlign="center",e.fillText("即日仕上げ",885,114),e.font=`600 15px ${tt}`,e.fillText("朝10時➡夕方5時",885,150);const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function zg(){const o="storefront-izakaya-facade",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#261e19",e.fillRect(0,0,1024,512);for(let m=0;m<1024;m+=32)e.fillStyle=m%64===0?"#1f1814":"#2d231d",e.fillRect(m,0,31,512),e.fillStyle="#140f0c",e.fillRect(m+31,0,1,512);const i=600,s=212,r=150,a=5,l=i/a;for(let m=0;m<a;m++){const v=s+m*l;e.fillStyle="#1c283f",e.fillRect(v+2,0,l-4,r),e.fillStyle="#141e30",e.fillRect(v+2,r-12,l-4,12)}const c=s+i/2;e.strokeStyle="#f4eedb",e.lineWidth=4,e.beginPath(),e.arc(c,65,34,0,Math.PI*2),e.stroke(),e.fillStyle="#f4eedb",e.font='800 48px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("魚",c,64),e.font='800 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText("和",s+l*.5,75),e.fillText("食",s+l*1.5,75),e.fillText("酒",s+l*3.5,75),e.fillText("処",s+l*4.5,75);const f=40,d=175,u=440,h=290,x=e.createRadialGradient(f+u/2,d+h/2,40,f+u/2,d+h/2,280);x.addColorStop(0,"#ffe49e"),x.addColorStop(.7,"#ffaa44"),x.addColorStop(1,"#c96a1a"),e.fillStyle=x,e.fillRect(f,d,u,h),e.fillStyle="#261b14",e.lineWidth=6,e.strokeRect(f,d,u,h);for(let m=f;m<f+u;m+=36)e.fillRect(m,d,6,h);for(let m=d;m<d+h;m+=42)e.fillRect(f,m,u,6);[{title:"名物 もつ煮込み",price:"四八〇円"},{title:"本日のお造り盛合",price:"一二八〇円"},{title:"炭火串焼き盛合せ",price:"八五〇円"},{title:"旬魚 塩焼き各種",price:"六八〇円"},{title:"全国厳選 地酒一合",price:"七五〇円"}].forEach((m,v)=>{const y=530+v*92,_=175;e.fillStyle="#9e6e43",e.fillRect(y,_,76,285),e.strokeStyle="#5a3d24",e.lineWidth=3,e.strokeRect(y,_,76,285),e.fillStyle="#170e08",e.font='700 17px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",m.title.split("").forEach((C,A)=>{e.fillText(C,y+38,_+30+A*24)}),e.fillStyle="#9e241b",e.fillRect(y+26,_+215,24,24),e.fillStyle="#ffffff",e.font="700 12px serif",e.fillText("極",y+38,_+231),e.fillStyle="#2a1a10",e.font='600 13px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText(m.price,y+38,_+265)});const g=new se(n);return g.colorSpace=xe,g.anisotropy=4,ft.set(o,g),g}function Fg(){const o="storefront-izakaya-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#5a1910"),i.addColorStop(.5,"#7a2016"),i.addColorStop(1,"#4a120b"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#dfa84a",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#d93829",e.beginPath(),e.ellipse(110,128,48,62,0,0,Math.PI*2),e.fill(),e.strokeStyle="#220805",e.lineWidth=3,e.stroke(),e.fillStyle="#ffffff",e.font='900 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("酒",110,128),e.fillStyle="#ffeed0",e.font='900 72px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("和食 酒処 魚河岸",200,104),e.fillStyle="#dfa84a",e.font=`700 24px ${tt}`,e.fillText("TRADITIONAL IZAKAYA UOGASHI  ・  旬魚 炭火串焼 厳選銘酒",205,172),e.fillStyle="#b32215",e.fillRect(860,80,96,96),e.strokeStyle="#ffd875",e.lineWidth=2,e.strokeRect(862,82,92,92),e.fillStyle="#ffffff",e.font="700 20px serif",e.textAlign="center",e.fillText("商売",908,114),e.fillText("繁盛",908,148);const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function kg(){const o="storefront-pharmacy-window",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f2faf8"),i.addColorStop(1,"#ddf1ec"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#0f6150",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(60,26,16,36),e.fillRect(50,36,36,16),e.fillStyle="#ffffff",e.font=`800 36px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 森薬局",114,34),e.fillStyle="#9ee8d7",e.font=`600 17px ${tt}`,e.fillText("MORI CLINIC & DISPENSING PHARMACY",116,64),e.fillStyle="#ffffff",e.font=`700 20px ${tt}`,e.textAlign="right",e.fillText("【保険調剤】 全国の処方せん受け付けます",990,44),e.fillStyle="#ffffff",e.strokeStyle="#b6e0d5",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${tt}`,e.textAlign="left",e.fillText("【 森クリニック 診療時間 】",56,138),e.fillStyle="#2e4741",e.font=`600 15px ${tt}`,e.fillText("診療科目：内科 ・ 消化器科 ・ 呼吸器科 ・ 小児科",56,172),e.fillText("午前診療：09:00 〜 12:30 （月・火・木・金・土）",56,206),e.fillText("午後診療：15:00 〜 18:30 （月・火・木・金）",56,238),e.fillStyle="#b83b3b",e.fillText("休診日：水曜午後・土曜午後・日曜・祝祭日",56,272),e.fillStyle="#376b5f",e.font=`500 14px ${tt}`,e.fillText("● 各種健康診断・予防接種 随時受付",56,316),e.fillText("● 在宅医療・訪問診療対応クリニック",56,344),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${tt}`,e.textAlign="left",e.fillText("【 調剤薬局 サービス案内 】",546,138),e.fillStyle="#e8f7f3",e.strokeStyle="#28a687",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,160,420,85,6),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 22px ${tt}`,e.fillText("処方せん受付中",566,188),e.fillStyle="#31544c",e.font=`500 14px ${tt}`,e.fillText("大学病院・総合病院・地域の診療所すべての処方せん調剤可",566,222),e.fillStyle="#2f4b44",e.font=`500 14px ${tt}`,e.fillText("● 電子お薬手帳アプリ対応",546,276),e.fillText("● お薬の飲み合わせ・健康相談 随時受付",546,304),e.fillText("● 一般用医薬品(OTC)・衛生材料・マスク・消毒液完備",546,332),e.fillText("● 各種クレジットカード・電子マネー対応",546,360),e.fillStyle="rgba(230, 245, 240, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#0f6150",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${tt}`,e.fillText("TOUCH 押してください",512,465);const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function Og(){const o="storefront-pharmacy-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#0c4d40"),i.addColorStop(.5,"#136b58"),i.addColorStop(1,"#093a30"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#43d9b5",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(90,88,30,80),e.fillRect(65,113,80,30),e.fillStyle="#ffffff",e.font=`800 66px ${tt}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 薬局",195,102),e.fillStyle="#9fe9d8",e.font=`600 24px ${tt}`,e.fillText("MORI CLINIC & PHARMACY  ・  処方せん受付・内科・小児科",200,168),e.fillStyle="#00a86b",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 22px ${tt}`,e.textAlign="center",e.fillText("保険調剤",897,114),e.font=`600 16px ${tt}`,e.fillText("処方せん受付",897,150);const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function Bg(){const o="storefront-bookstore-window",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f9f5ed"),i.addColorStop(1,"#ecdfcd"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#542617",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.font='800 38px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("東書店 本屋",48,36),e.fillStyle="#e8c9b5",e.font=`600 18px ${tt}`,e.fillText("HIGASHI BOOKSTORE & COMICS",50,66),e.fillStyle="#ffffff",e.font=`700 18px ${tt}`,e.textAlign="right",e.fillText("話題のベストセラー・新刊コミック・文庫・雑誌 豊富に取り揃えております",990,44);const s=115,r=250,a=["#b83328","#254b85","#247a46","#87428f","#d97d21","#1f2937","#b5832a","#326b78","#a82c4e","#4f46e5","#0d9488","#ea580c","#15803d","#4338ca","#be185d","#b45309","#1e40af","#065f46","#831843","#701a75","#1e3a8a"];e.fillStyle="#402619",e.fillRect(36,s+95,952,10);for(let c=45;c<970;c+=18){const f=a[c*7%a.length],d=75+c*13%20;e.fillStyle=f,e.fillRect(c,s+95-d,15,d)}e.fillStyle="#402619",e.fillRect(36,r+105,952,10);for(let c=45;c<970;c+=22){const f=a[c*11%a.length],d=85+c*17%20;e.fillStyle=f,e.fillRect(c,r+105-d,18,d)}e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#c9542a",e.lineWidth=3,e.beginPath(),e.roundRect(80,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#c9542a",e.font=`800 20px ${tt}`,e.textAlign="center",e.fillText("【 今週のベストセラー 】",210,185),e.fillStyle="#261b16",e.font=`700 15px ${tt}`,e.fillText("1位 直木賞受賞 話題の巨編",210,222),e.fillText("2位 週刊少年コミック 最新巻",210,254),e.fillText("3位 ビジネス実践名著",210,286),e.fillText("4位 東京下町 街歩きガイド",210,318),e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#2b63ab",e.lineWidth=3,e.beginPath(),e.roundRect(680,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#2b63ab",e.font=`800 20px ${tt}`,e.textAlign="center",e.fillText("★ コミック新刊 入荷 ★",810,185),e.fillStyle="#1c2838",e.font=`700 15px ${tt}`,e.fillText("週刊ジャンプ系 コミックス",810,222),e.fillText("少年マガジン系 コミックス",810,254),e.fillText("青年コミック・名作復刻版",810,286),e.fillText("図書カードNEXT 取扱店",810,318),e.fillStyle="rgba(240, 230, 218, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#542617",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${tt}`,e.fillText("東書店 入口",512,465);const l=new se(n);return l.colorSpace=xe,l.anisotropy=4,ft.set(o,l),l}function Gg(){const o="storefront-bookstore-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#4a2013"),i.addColorStop(.5,"#632e1c"),i.addColorStop(1,"#3b180d"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#e0a96d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#4a2013",e.lineWidth=4,e.beginPath(),e.moveTo(75,110),e.quadraticCurveTo(105,120,105,150),e.quadraticCurveTo(105,120,135,110),e.lineTo(135,145),e.quadraticCurveTo(105,155,105,155),e.quadraticCurveTo(105,155,75,145),e.closePath(),e.stroke(),e.fillStyle="#ffeedb",e.font='900 74px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("書店 本屋",195,102),e.fillStyle="#dfaf85",e.font=`700 24px ${tt}`,e.fillText("HIGASHI BOOKSTORE & COMICS  ・  本・雑誌・コミック・文具",200,168),e.fillStyle="#8f3c20",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("本・コミック",897,114),e.font=`600 16px ${tt}`,e.fillText("新刊続々入荷",897,150);const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function Hg(){const o="storefront-cafe-window",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#2d1f18"),i.addColorStop(1,"#1b120d"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=e.createRadialGradient(720,220,40,720,220,320);s.addColorStop(0,"#ffbf66"),s.addColorStop(.7,"#d47d22"),s.addColorStop(1,"#5e2e05"),e.fillStyle=s,e.fillRect(480,80,500,320),e.fillStyle="#8c5e37",e.beginPath(),e.roundRect(520,250,100,140,10),e.roundRect(640,260,100,130,10),e.roundRect(760,240,110,150,10),e.fill(),e.fillStyle="#26150b",e.font=`800 15px ${tt}`,e.textAlign="center",e.fillText("BRAZIL",570,310),e.fillText("ETHIOPIA",690,320),e.fillText("COLOMBIA",815,305);for(const l of[600,740,870])e.strokeStyle="#2b1b11",e.lineWidth=2,e.beginPath(),e.moveTo(l,80),e.lineTo(l,140),e.stroke(),e.fillStyle="#fff4cc",e.beginPath(),e.arc(l,145,12,0,Math.PI*2),e.fill();e.fillStyle="#212726",e.strokeStyle="#855938",e.lineWidth=6,e.beginPath(),e.roundRect(40,50,400,370,8),e.fill(),e.stroke(),e.fillStyle="#fceecb",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("CAFE MAME  珈琲豆",240,90),e.strokeStyle="#e0c99f",e.lineWidth=1.5,e.beginPath(),e.moveTo(100,105),e.lineTo(380,105),e.stroke(),[{name:"Tokyo Blend (深煎り)",price:"¥480"},{name:"Ethiopia Yirgacheffe (浅煎り)",price:"¥550"},{name:"Cafe Latte (Hot/Iced)",price:"¥520"},{name:"Cold Brew Nitro Coffee",price:"¥550"},{name:"自家製 バスクチーズケーキ",price:"¥500"},{name:"クラシック カスタードプリン",price:"¥450"}].forEach((l,c)=>{const f=145+c*36;e.fillStyle="#ffffff",e.font=`600 15px ${tt}`,e.textAlign="left",e.fillText(l.name,65,f),e.fillStyle="#ffd680",e.font=`700 16px ${tt}`,e.textAlign="right",e.fillText(l.price,415,f)}),e.fillStyle="#dfba87",e.font=`500 13px ${tt}`,e.textAlign="center",e.fillText("自家焙煎 厳選シングルオリジン豆販売 100g〜",240,385),e.fillStyle="rgba(40, 26, 18, 0.85)",e.fillRect(0,430,1024,82),e.fillStyle="#e8be8b",e.font=`700 16px ${tt}`,e.textAlign="center",e.fillText("OPEN 8:30 〜 19:30  /  TAKE OUT OK",512,475);const a=new se(n);return a.colorSpace=xe,a.anisotropy=4,ft.set(o,a),a}function Vg(){const o="storefront-cafe-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#361e12"),i.addColorStop(.5,"#4a2b1b"),i.addColorStop(1,"#2a160c"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#d4a36a",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#361e12",e.beginPath(),e.roundRect(82,110,46,38,4),e.fill(),e.strokeStyle="#361e12",e.lineWidth=4,e.beginPath(),e.arc(130,126,10,-Math.PI/2,Math.PI/2),e.stroke(),e.fillStyle="#ffeed9",e.font='900 70px "Hiragino Mincho ProN", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("喫茶 TOKYO CAFE",195,102),e.fillStyle="#d4a36a",e.font=`700 24px ${tt}`,e.fillText("CAFE MAME  ・  ROASTERY & SPECIALTY BEANS",200,168),e.fillStyle="#6e3c23",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${tt}`,e.textAlign="center",e.fillText("自家焙煎",897,114),e.font=`600 16px ${tt}`,e.fillText("珈琲豆販売",897,150);const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function Wg(o){const t=`aframe-sign-${o}`,n=ft.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=768;const i=e.getContext("2d");o==="dental"?(i.fillStyle="#f0f8fa",i.fillRect(0,0,512,768),i.strokeStyle="#1b5b6b",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#1b5b6b",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${tt}`,i.textAlign="center",i.fillText("パークサイド歯科",256,75),i.font=`600 20px ${tt}`,i.fillText("PARKSIDE DENTAL",256,120),i.fillStyle="#1b5b6b",i.font=`800 32px ${tt}`,i.fillText("【 本日診療中 】",256,210),i.fillStyle="#2a444c",i.font=`600 24px ${tt}`,i.fillText("午前  09:30 〜 13:00",256,270),i.fillText("午後  14:30 〜 19:30",256,320),i.fillStyle="#d94b4b",i.font=`700 22px ${tt}`,i.fillText("初診・急患 随時受付",256,390),i.fillStyle="#32707e",i.font=`600 21px ${tt}`,i.fillText("歯のクリーニング・定期検診",256,445),i.fillText("ホワイトニング・小児歯科",256,485),i.fillText("保険証をご持参ください",256,540),i.fillStyle="#134754",i.font=`800 32px ${tt}`,i.fillText("TEL 03-3456-7890",256,620),i.fillStyle="#e85d04",i.fillRect(40,670,432,50),i.fillStyle="#ffffff",i.font=`700 22px ${tt}`,i.fillText("お気軽にご来院ください",256,702)):o==="cleaners"?(i.fillStyle="#f0f5fc",i.fillRect(0,0,512,768),i.strokeStyle="#1e3f7a",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#1e3f7a",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${tt}`,i.textAlign="center",i.fillText("白金クリーニング",256,75),i.fillStyle="#ffd84d",i.font=`700 20px ${tt}`,i.fillText("SHIROKANE CLEANING",256,120),i.fillStyle="#e63946",i.fillRect(30,180,452,65),i.fillStyle="#ffffff",i.font=`800 32px ${tt}`,i.fillText("★ 本日ポイント2倍DAY ★",256,224),i.fillStyle="#1e3f7a",i.font=`800 26px ${tt}`,i.fillText("ワイシャツ 抗菌仕上  ¥220",256,300),i.fillText("スーツ上下 汗抜き付  ¥1,280",256,350),i.fillText("ダウン・コート類   ¥1,980",256,400),i.fillStyle="#324a6d",i.font=`600 22px ${tt}`,i.fillText("朝10時お預かり ➡ 夕方5時お渡し",256,475),i.fillText("スピード即日仕上げ可能！",256,520),i.fillStyle="#1e3f7a",i.fillRect(30,570,452,130),i.fillStyle="#ffd84d",i.font=`800 26px ${tt}`,i.fillText("24時間コインランドリー",256,615),i.fillStyle="#ffffff",i.font=`600 20px ${tt}`,i.fillText("大型洗濯乾燥機 好評稼働中！",256,660)):o==="izakaya"?(i.fillStyle="#211c19",i.fillRect(0,0,512,768),i.strokeStyle="#85512b",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#94291e",i.fillRect(14,14,484,130),i.fillStyle="#fff0d9",i.font='900 44px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("和食・酒処 魚河岸",256,75),i.fillStyle="#ffd580",i.font=`700 22px ${tt}`,i.fillText("元気に営業中！",256,120),i.fillStyle="#ffd875",i.font='800 28px "Hiragino Mincho ProN", serif',i.fillText("〜 本日のおすすめ 〜",256,195),i.fillStyle="#ffffff",i.font='700 24px "Hiragino Mincho ProN", serif',i.fillText("● 本日の刺身三種盛り   九八〇円",256,255),i.fillText("● 特製 名物もつ煮込み   四八〇円",256,310),i.fillText("● 備長炭 串焼き五本盛   八五〇円",256,365),i.fillText("● 本日の地酒 純米大吟醸 七五〇円",256,420),i.fillStyle="#94291e",i.fillRect(30,480,452,100),i.fillStyle="#fff4de",i.font=`800 26px ${tt}`,i.fillText("【 晩酌セット 1,000円 】",256,522),i.font=`600 18px ${tt}`,i.fillText("生ビール ＋ 小鉢 ＋ 串焼き3本！",256,558),i.fillStyle="#e8a84a",i.font=`700 22px ${tt}`,i.fillText("お一人様大歓迎！ カウンター席有",256,650),i.fillText("いらっしゃいませ！",256,695)):o==="pharmacy"?(i.fillStyle="#f0faf6",i.fillRect(0,0,512,768),i.strokeStyle="#0f6150",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#0f6150",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${tt}`,i.textAlign="center",i.fillText("森クリニック / 薬局",256,75),i.fillStyle="#9fe8d7",i.font=`600 20px ${tt}`,i.fillText("PHARMACY & CLINIC",256,120),i.fillStyle="#00a86b",i.fillRect(30,180,452,70),i.fillStyle="#ffffff",i.font=`800 28px ${tt}`,i.fillText("【 保険調剤 処方せん受付 】",256,225),i.fillStyle="#21423a",i.font=`600 22px ${tt}`,i.fillText("全国どちらの医療機関の処方せんも",256,300),i.fillText("受け付けております",256,335),i.fillStyle="#0f6150",i.font=`700 24px ${tt}`,i.fillText("森クリニック 診療時間",256,410),i.fillStyle="#31544c",i.font=`600 21px ${tt}`,i.fillText("午前 9:00〜12:30 / 午後 15:00〜18:30",256,450),i.fillText("内科・小児科・呼吸器科",256,490),i.fillStyle="#0f6150",i.fillRect(30,560,452,140),i.fillStyle="#ffffff",i.font=`700 22px ${tt}`,i.fillText("お薬のご相談・在宅医療対応",256,605),i.fillText("電子お薬手帳アプリ対応",256,645),i.fillText("各種キャッシュレス決済可",256,680)):o==="bookstore"?(i.fillStyle="#faf4ec",i.fillRect(0,0,512,768),i.strokeStyle="#542617",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#542617",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font='900 44px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("東書店 本屋",256,75),i.fillStyle="#dfaf85",i.font=`600 20px ${tt}`,i.fillText("HIGASHI BOOKSTORE",256,120),i.fillStyle="#c94a28",i.fillRect(30,180,452,65),i.fillStyle="#ffffff",i.font=`800 28px ${tt}`,i.fillText("★ 今週のコミック新刊 入荷！ ★",256,224),i.fillStyle="#261b16",i.font=`700 24px ${tt}`,i.fillText("話題の直木賞・芥川賞 受賞作",256,300),i.fillText("週刊・月刊 雑誌最新号 発売中",256,350),i.fillText("文庫・新書・文具・万年筆",256,400),i.fillStyle="#542617",i.fillRect(30,470,452,110),i.fillStyle="#ffd8a8",i.font=`800 26px ${tt}`,i.fillText("図書カード NEXT 取扱店",256,515),i.fillStyle="#ffffff",i.font=`600 20px ${tt}`,i.fillText("全国共通 図書カードご贈答にどうぞ",256,555),i.fillStyle="#542617",i.font=`700 22px ${tt}`,i.fillText("営業時間 10:00 〜 21:00",256,640),i.fillText("どうぞお気軽にお立ち寄りください",256,685)):(i.fillStyle="#1f1a17",i.fillRect(0,0,512,768),i.strokeStyle="#6e3c23",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#4a2b1b",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font='900 42px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("CAFE MAME 喫茶",256,75),i.fillStyle="#e0a96d",i.font=`700 20px ${tt}`,i.fillText("SPECIALTY COFFEE ROASTERY",256,120),i.fillStyle="#ffd875",i.font=`800 28px ${tt}`,i.fillText("〜 TODAY’S DRIP 〜",256,195),i.fillStyle="#ffffff",i.font=`700 23px ${tt}`,i.fillText("Ethiopia Yirgacheffe G1",256,245),i.fillStyle="#d4a36a",i.font=`500 18px ${tt}`,i.fillText("フローラルな香りと華やかな柑橘の酸味",256,278),i.fillStyle="#ffffff",i.font=`700 22px ${tt}`,i.fillText("自家製バスクチーズケーキ  ¥500",256,340),i.fillText("クラシックカスタードプリン  ¥450",256,385),i.fillStyle="#4a2b1b",i.fillRect(30,450,452,100),i.fillStyle="#ffd875",i.font=`800 26px ${tt}`,i.fillText("自家焙煎 珈琲豆販売",256,492),i.fillStyle="#ffffff",i.font=`600 18px ${tt}`,i.fillText("お好みに合わせてお挽きいたします",256,528),i.fillStyle="#e0a96d",i.font=`700 24px ${tt}`,i.fillText("テイクアウト OK！",256,610),i.fillStyle="#ffffff",i.font=`600 20px ${tt}`,i.fillText("OPEN 8:30 〜 19:30",256,660));const s=new se(e);return s.colorSpace=xe,s.anisotropy=4,ft.set(t,s),s}function Xg(){const o="storefront-residential-foyer",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1c2026",e.fillRect(0,0,512,512),e.strokeStyle="#434b57",e.lineWidth=4,e.strokeRect(10,10,492,492),e.fillStyle="#2a313d",e.fillRect(30,30,452,70),e.fillStyle="#d4dbe6",e.font=`700 26px ${tt}`,e.textAlign="center",e.fillText("RESIDENCE ENTRANCE",256,65),e.font=`500 16px ${tt}`,e.fillText("居住者専用 ・ オートロックシステム",256,88),e.fillStyle="#10141a",e.beginPath(),e.roundRect(136,130,240,320,10),e.fill(),e.strokeStyle="#5a6575",e.lineWidth=3,e.stroke(),e.fillStyle="#06090c",e.beginPath(),e.arc(256,175,24,0,Math.PI*2),e.fill(),e.strokeStyle="#404c5c",e.stroke(),e.fillStyle="#3a86ff",e.beginPath(),e.arc(256,175,8,0,Math.PI*2),e.fill(),e.fillStyle="#1d3328",e.fillRect(176,215,160,40),e.fillStyle="#4ade80",e.font="700 16px monospace",e.textAlign="center",e.fillText("ROOM No. _ _ _",256,240),["1","2","3","4","5","6","7","8","9","消","0","呼"].forEach((r,a)=>{const l=a%3,c=Math.floor(a/3),f=180+l*52,d=275+c*40;e.fillStyle=r==="呼"?"#2563eb":r==="消"?"#dc2626":"#2b3340",e.beginPath(),e.roundRect(f,d,44,32,4),e.fill(),e.fillStyle="#ffffff",e.font=`700 15px ${tt}`,e.fillText(r,f+22,d+21)});const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function Yg(){const o="cardboard-mikan-box",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#c79862",e.fillRect(0,0,512,512);const i=e.getImageData(0,0,512,512),s=i.data;for(let l=0;l<s.length;l+=4){const c=(Math.random()-.5)*14;s[l]=Math.min(255,Math.max(0,s[l]+c)),s[l+1]=Math.min(255,Math.max(0,s[l+1]+c)),s[l+2]=Math.min(255,Math.max(0,s[l+2]+c))}e.putImageData(i,0,0),e.fillStyle="#b3834e",e.fillRect(0,0,512,28),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fillRect(0,26,512,2),e.fillStyle="#f97316",e.beginPath(),e.arc(120,160,56,0,Math.PI*2),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.ellipse(120,96,26,12,Math.PI/4,0,Math.PI*2),e.ellipse(135,98,22,10,-Math.PI/4,0,Math.PI*2),e.fill(),e.fillStyle="#1e140a",e.font='900 52px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("愛媛みかん",195,145),e.fillStyle="#85200c",e.font=`800 22px ${tt}`,e.fillText("極上特選  完熟太陽のめぐみ",198,185),e.fillStyle="#2b1b0d",e.font="700 18px monospace",e.fillText("EHIME MIKAN  L SIZE  10KG",198,215),e.strokeStyle="#c2291d",e.lineWidth=3,e.beginPath(),e.arc(80,310,38,0,Math.PI*2),e.stroke(),e.fillStyle="#c2291d",e.font="800 20px serif",e.textAlign="center",e.fillText("特選",80,305),e.font="700 13px serif",e.fillText("農協保証",80,325),e.fillStyle="#1f1309",e.textAlign="left",e.font="800 32px monospace",e.fillText("↑↑",150,320),e.font=`700 16px ${tt}`,e.fillText("取扱注意  水濡厳禁",205,315),e.fillStyle="#1e140a";const r=350;for(let l=r;l<r+120;l+=4)Math.sin(l*9)>-.2&&e.fillRect(l,280,2.5,45);e.font="600 10px monospace",e.fillText("4 901234 567890",r,338);const a=new se(n);return a.colorSpace=xe,a.anisotropy=4,ft.set(o,a),a}function Zg(){const o="tokyo-trash-notice-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,512,512),e.strokeStyle="#15803d",e.lineWidth=10,e.strokeRect(5,5,502,502),e.fillStyle="#15803d",e.fillRect(10,10,492,100),e.fillStyle="#ffffff",e.font=`900 38px ${tt}`,e.textAlign="center",e.fillText("家庭ごみ集積所",256,58),e.font=`700 16px ${tt}`,e.fillText("RESIDENTIAL WASTE COLLECTION POINT",256,92),[{type:"燃やすごみ",days:"毎週  月・木曜日",color:"#dc2626"},{type:"燃やさないごみ",days:"第２・第４水曜日",color:"#2563eb"},{type:"資源ごみ (缶・瓶・PET)",days:"毎週  火曜日",color:"#16a34a"}].forEach((r,a)=>{const l=135+a*62;e.fillStyle=r.color,e.beginPath(),e.roundRect(30,l,165,48,6),e.fill(),e.fillStyle="#ffffff",e.font=`800 17px ${tt}`,e.textAlign="center",e.fillText(r.type,112,l+30),e.fillStyle="#1e293b",e.font=`800 24px ${tt}`,e.textAlign="left",e.fillText(r.days,215,l+34),e.strokeStyle="#e2e8f0",e.lineWidth=1.5,e.beginPath(),e.moveTo(30,l+55),e.lineTo(482,l+55),e.stroke()}),e.fillStyle="#fefce8",e.strokeStyle="#eab308",e.lineWidth=2,e.beginPath(),e.roundRect(30,330,452,125,8),e.fill(),e.stroke(),e.fillStyle="#854d0e",e.font=`800 18px ${tt}`,e.textAlign="left",e.fillText("【 ごみ出しのルールとマナー 】",45,358),e.fillStyle="#334155",e.font=`600 15px ${tt}`,e.fillText("● ごみは収集日当日の朝8時までに出してください。",45,388),e.fillText("● カラス被害防止のため、ネットは隙間なく掛けてください。",45,414),e.fillText("● 粗大ごみ・家電リサイクル品は集積所に出せません。",45,440),e.fillStyle="#64748b",e.font=`700 14px ${tt}`,e.textAlign="center",e.fillText("東京都 清掃環境事務所  /  町内自治会",256,485);const s=new se(n);return s.colorSpace=xe,s.anisotropy=4,ft.set(o,s),s}function qg(){const o="can-recycle-box-texture",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1d4ed8",e.fillRect(0,0,512,512),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(12,12,488,488),e.fillStyle="#ffffff",e.font=`900 42px ${tt}`,e.textAlign="center",e.fillText("空き缶 ・ ペットボトル",256,85),e.fillStyle="#bfdbfe",e.font=`700 20px ${tt}`,e.fillText("CANS & PLASTIC BOTTLES ONLY",256,125),e.strokeStyle="#22c55e",e.lineWidth=14,e.beginPath(),e.arc(256,235,65,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`900 36px ${tt}`,e.fillText("リサイクル",256,246),e.fillStyle="#0f172a",e.beginPath(),e.arc(140,360,48,0,Math.PI*2),e.arc(372,360,48,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font=`800 26px ${tt}`,e.fillText("缶",140,368),e.fillText("ボトル",372,368),e.fillStyle="#fef08a",e.font=`700 16px ${tt}`,e.fillText("※ タバコ・一般ゴミの投げ入れ厳禁",256,455);const i=new se(n);return i.colorSpace=xe,i.anisotropy=4,ft.set(o,i),i}function $g(){const o="crow-net-fine-texture",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="rgba(14, 76, 52, 0.45)",e.fillRect(0,0,256,256),e.strokeStyle="#10b981",e.lineWidth=2.5;const i=16;for(let r=-256;r<512;r+=i)e.beginPath(),e.moveTo(r,0),e.lineTo(r+256,256),e.stroke(),e.beginPath(),e.moveTo(r,256),e.lineTo(r+256,0),e.stroke();e.strokeStyle="#047857",e.lineWidth=8,e.strokeRect(0,0,256,256);const s=new se(n);return s.wrapS=Pe,s.wrapT=Pe,s.repeat.set(4,4),ft.set(o,s),s}function Kg(){const o="park-nameplate-stone",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#22252a",e.fillRect(0,0,256,128);for(let s=0;s<180;s++){const r=Math.random()*256,a=Math.random()*128;e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.25)",e.fillRect(r,a,2,2)}e.strokeStyle="#c5a059",e.lineWidth=4,e.strokeRect(8,8,240,112),e.strokeStyle="#8c6f36",e.lineWidth=1.5,e.strokeRect(14,14,228,100),e.fillStyle="#f0d8a0",e.font=`900 28px ${tt}`,e.textAlign="center",e.textBaseline="middle",e.fillText("桜町児童遊園",128,52),e.fillStyle="#c5a059",e.font="600 12px monospace",e.fillText("SAKURA POCKET PARK",128,86);const i=new se(n);return ft.set(o,i),i}function Jg(){const o="park-rules-board",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=320;const e=n.getContext("2d");e.fillStyle="#eaedf1",e.fillRect(0,0,512,320),e.fillStyle="#105238",e.fillRect(0,0,512,64),e.strokeStyle="#ffffff",e.lineWidth=3,e.beginPath(),e.arc(42,32,18,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`800 24px ${tt}`,e.textAlign="left",e.fillText("公園の利用案内",72,36),e.font="600 13px sans-serif",e.fillText("PARK REGULATIONS & MANNER",72,54);const i=[{kanji:"ゴミは持ち帰りましょう",sub:"Please take your litter home with you",icon:"🗑️"},{kanji:"たき火・花火など火気厳禁",sub:"No fireworks or open flames permitted",icon:"🔥"},{kanji:"犬の散歩はリード着用・フン始末",sub:"Keep dogs on leash and clean up after pets",icon:"🐕"},{kanji:"夜間はお静かに願いします",sub:"Please be considerate and quiet at night",icon:"🌙"}];let s=100;for(const a of i)e.fillStyle="#105238",e.beginPath(),e.arc(36,s-6,12,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("!",36,s-2),e.fillStyle="#1a202c",e.font=`700 18px ${tt}`,e.textAlign="left",e.fillText(a.kanji,60,s-4),e.fillStyle="#4a5568",e.font="500 12px sans-serif",e.fillText(a.sub,60,s+14),e.fillStyle="rgba(0,0,0,0.08)",e.fillRect(20,s+24,472,1),s+=50;e.fillStyle="#718096",e.font=`600 12px ${tt}`,e.textAlign="right",e.fillText("東京都港区土木部公園緑地課　TEL 03-3578-2111",492,305),e.strokeStyle="#2d3748",e.lineWidth=6,e.strokeRect(0,0,512,320);const r=new se(n);return ft.set(o,r),r}function jg(){const o="park-community-notice",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=300;const e=n.getContext("2d");e.fillStyle="#9b764d",e.fillRect(0,0,512,300);for(let s=0;s<400;s++){const r=Math.random()*512,a=Math.random()*300;e.fillStyle=Math.random()>.5?"rgba(74, 50, 26, 0.2)":"rgba(180, 145, 100, 0.25)",e.fillRect(r,a,3,3)}e.fillStyle="#fce7f3",e.fillRect(24,25,140,190),e.strokeStyle="#f472b6",e.lineWidth=2,e.strokeRect(24,25,140,190),e.fillStyle="#db2777",e.font=`800 16px ${tt}`,e.textAlign="center",e.fillText("桜まつり",94,58),e.font=`600 10px ${tt}`,e.fillText("春の夜桜ライトアップ",94,78),e.fillStyle="#4a044e",e.font=`500 9px ${tt}`,e.fillText("日時: 4月上旬 18:00~",94,110),e.fillText("場所: 桜町児童遊園",94,130),e.fillText("主催: 桜町自治会",94,150),e.fillStyle="#f43f5e",e.fillText("🌸🏮🌸",94,185),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#fef9c3",e.fillRect(184,25,140,190),e.strokeStyle="#eab308",e.lineWidth=2,e.strokeRect(184,25,140,190),e.fillStyle="#854d0e",e.font=`800 15px ${tt}`,e.fillText("広域避難場所",254,58),e.font=`600 10px ${tt}`,e.fillText("防災・安全マップ",254,78),e.fillStyle="#1c1917",e.font=`500 9px ${tt}`,e.fillText("一時集合場所:",254,108),e.fillText("当公園グラウンド",254,126),e.fillText("AED設置: 管理所横",254,146),e.fillText("給水拠点指定場所",254,166),e.fillStyle="#eab308",e.fillText("🔰 非常口 ⛑️",254,192),e.fillStyle="#3b82f6",e.beginPath(),e.arc(254,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(344,25,144,190),e.strokeStyle="#94a3b8",e.lineWidth=1.5,e.strokeRect(344,25,144,190),e.fillStyle="#dc2626",e.font=`800 15px ${tt}`,e.fillText("迷子ねこ",416,54),e.font=`600 10px ${tt}`,e.fillStyle="#334155",e.fillText("探しています！",416,72),e.fillStyle="#1e293b",e.beginPath(),e.arc(416,110,18,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(402,98),e.lineTo(396,82),e.lineTo(410,93),e.fill(),e.beginPath(),e.moveTo(430,98),e.lineTo(436,82),e.lineTo(422,93),e.fill(),e.fillStyle="#ef4444",e.fillRect(408,124,16,4),e.fillStyle="#475569",e.font=`500 9px ${tt}`,e.fillText("名前: ミケ (黒多め)",416,146),e.fillText("赤い首輪・鈴付き",416,162),e.fillText("見かけた方はご連絡を",416,178),e.fillStyle="#10b981",e.beginPath(),e.arc(416,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#3b2716",e.fillRect(0,0,512,18),e.fillStyle="#fef08a",e.font=`800 12px ${tt}`,e.textAlign="center",e.fillText("桜町町内会　広報掲示板",256,14),e.strokeStyle="#475569",e.lineWidth=8,e.strokeRect(0,0,512,300);const i=new se(n);return ft.set(o,i),i}function Qg(){const o="park-analog-clock-face",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#faf8f2",e.fillRect(0,0,256,256),e.strokeStyle="#1e242b",e.lineWidth=8,e.beginPath(),e.arc(128,128,120,0,Math.PI*2),e.stroke(),e.strokeStyle="#64748b",e.lineWidth=1.5,e.beginPath(),e.arc(128,128,114,0,Math.PI*2),e.stroke();for(let l=0;l<60;l++){const c=l*Math.PI/30,f=l%5===0,d=f?14:6,u=114,h=u-d;e.strokeStyle=f?"#0f172a":"#94a3b8",e.lineWidth=f?3.5:1.5,e.beginPath(),e.moveTo(128+Math.cos(c)*u,128+Math.sin(c)*u),e.lineTo(128+Math.cos(c)*h,128+Math.sin(c)*h),e.stroke()}e.fillStyle="#0f172a",e.font='bold 22px "Plus Jakarta Sans", sans-serif',e.textAlign="center",e.textBaseline="middle";for(let l=1;l<=12;l++){const c=l*Math.PI/6-Math.PI/2,f=86;e.fillText(l.toString(),128+Math.cos(c)*f,128+Math.sin(c)*f)}e.fillStyle="#64748b",e.font="600 9px monospace",e.fillText("TOKYO PARKS",128,160);const i=(11+50/60)*Math.PI/6-Math.PI/2;e.strokeStyle="#0f172a",e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(i)*52,128+Math.sin(i)*52),e.stroke();const s=50*Math.PI/30-Math.PI/2;e.lineWidth=3.5,e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(s)*78,128+Math.sin(s)*78),e.stroke();const r=22*Math.PI/30-Math.PI/2;e.strokeStyle="#dc2626",e.lineWidth=1.5,e.beginPath(),e.moveTo(128-Math.cos(r)*16,128-Math.sin(r)*16),e.lineTo(128+Math.cos(r)*88,128+Math.sin(r)*88),e.stroke(),e.fillStyle="#0f172a",e.beginPath(),e.arc(128,128,6,0,Math.PI*2),e.fill();const a=new se(n);return ft.set(o,a),a}function tx(){const o="park-toilet-sign-picto",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,256,128),e.strokeStyle="#cbd5e1",e.lineWidth=3,e.strokeRect(4,4,248,120),e.fillStyle="#0284c7",e.beginPath(),e.arc(56,36,10,0,Math.PI*2),e.fill(),e.fillRect(46,50,20,28),e.fillRect(48,80,7,24),e.fillRect(57,80,7,24),e.fillStyle="#e11d48",e.beginPath(),e.arc(128,36,10,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(128,50),e.lineTo(142,78),e.lineTo(114,78),e.closePath(),e.fill(),e.fillRect(121,80,6,24),e.fillRect(129,80,6,24),e.fillStyle="#16a34a",e.beginPath(),e.arc(200,36,10,0,Math.PI*2),e.fill(),e.strokeStyle="#16a34a",e.lineWidth=4,e.beginPath(),e.arc(196,76,14,0,Math.PI*2),e.stroke(),e.fillRect(194,52,6,22),e.fillRect(194,66,16,5),e.fillStyle="#334155",e.font=`bold 12px ${tt}`,e.textAlign="center",e.fillText("公衆トイレ  TOILETS",128,118);const i=new se(n);return ft.set(o,i),i}function Ed(){const o="suite-hardwood-floor",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1c1511",e.fillRect(0,0,512,512);const i=64,s=["#1d1612","#221a15","#1a130f","#251c17","#1f1713","#241b16","#1b1410","#231b15"];for(let l=0;l<8;l++){const c=l*i;e.fillStyle=s[l%s.length],e.fillRect(0,c+2,512,i-4),e.strokeStyle="rgba(0, 0, 0, 0.28)",e.lineWidth=1.2;for(let f=0;f<6;f++){const d=c+8+f*8+Math.sin(f*2)*3;e.beginPath(),e.moveTo(0,d),e.bezierCurveTo(128,d+(f%2===0?3:-3),384,d+(f%2===0?-3:3),512,d),e.stroke()}e.strokeStyle="rgba(212, 175, 55, 0.04)",e.lineWidth=1,e.beginPath(),e.moveTo(0,c+4),e.lineTo(512,c+4),e.stroke(),e.fillStyle="#0e0a07",e.fillRect(0,c+i-2,512,2)}const r=[{x:140,y:0},{x:380,y:0},{x:260,y:64},{x:120,y:128},{x:420,y:128},{x:310,y:192},{x:180,y:256},{x:440,y:256},{x:280,y:320},{x:160,y:384},{x:390,y:384},{x:240,y:448}];e.fillStyle="#0e0a07";for(const l of r)e.fillRect(l.x,l.y+2,2,i-4);const a=new se(n);return a.wrapS=Pe,a.wrapT=Pe,a.repeat.set(3,3),ft.set(o,a),a}function ex(){const o="suite-luxury-rug",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=512,s=256;e.clearRect(0,0,1024,512),e.save(),e.beginPath(),e.ellipse(i,s,480,235,0,0,Math.PI*2),e.fillStyle="#121722",e.fill();const r=e.getImageData(0,0,1024,512),a=r.data;for(let c=30;c<482;c+=2)for(let f=40;f<984;f+=2){const d=(c*1024+f)*4;if(a[d+3]>0){const u=(Math.random()-.5)*16;a[d]=Math.max(10,Math.min(35,a[d]+u)),a[d+1]=Math.max(15,Math.min(42,a[d+1]+u)),a[d+2]=Math.max(25,Math.min(58,a[d+2]+u))}}e.putImageData(r,0,0),e.restore(),e.strokeStyle="#d4af37",e.lineWidth=10,e.beginPath(),e.ellipse(i,s,470,225,0,0,Math.PI*2),e.stroke(),e.strokeStyle="#d4af37",e.lineWidth=4,e.setLineDash([20,12]),e.beginPath(),e.ellipse(i,s,390,175,0,0,Math.PI*2),e.stroke(),e.setLineDash([]),e.strokeStyle="rgba(212, 175, 55, 0.65)",e.lineWidth=2.5,e.beginPath(),e.ellipse(i,s,260,105,0,0,Math.PI*2),e.stroke(),e.strokeStyle="#d4af37",e.fillStyle="rgba(212, 175, 55, 0.12)",e.lineWidth=5,e.beginPath(),e.moveTo(i,s-65),e.lineTo(i+60,s),e.lineTo(i,s+65),e.lineTo(i-60,s),e.closePath(),e.fill(),e.stroke(),e.lineWidth=2,e.beginPath(),e.moveTo(i,s-35),e.lineTo(i+32,s),e.lineTo(i,s+35),e.lineTo(i-32,s),e.closePath(),e.stroke();const l=new se(n);return ft.set(o,l),l}function nx(){const o="suite-curved-monitor",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#070b12",e.fillRect(0,0,1024,512),e.strokeStyle="#00ffff",e.lineWidth=3,e.strokeRect(4,4,1016,504),e.fillStyle="#0f1724",e.fillRect(6,6,1012,42),e.fillStyle="#ff5f56",e.beginPath(),e.arc(26,27,7,0,Math.PI*2),e.fill(),e.fillStyle="#ffbd2e",e.beginPath(),e.arc(46,27,7,0,Math.PI*2),e.fill(),e.fillStyle="#27c93f",e.beginPath(),e.arc(66,27,7,0,Math.PI*2),e.fill(),e.fillStyle="#182438",e.fillRect(90,12,220,36),e.fillStyle="#00ffff",e.font="bold 16px monospace",e.fillText("Suite402.ts • relzzy",106,36),e.fillStyle="#10b981",e.font="14px monospace",e.fillText("SYS: 120 FPS // RTX 3060 ONLINE // LAT: 0.8ms",600,32),e.fillStyle="#0a0f18",e.fillRect(6,48,140,458),e.fillStyle="#64748b",e.font="13px monospace",["EXPLORER","▶ src","  ▼ world","    Suite402.ts","    Audio.ts","    Props.ts","  ▶ game","  ▶ ui","  package.json"].forEach((a,l)=>{e.fillStyle=a.includes("Suite402")?"#00ffff":a.startsWith("▶")||a.startsWith("▼")?"#94a3b8":"#64748b",e.fillText(a,16,78+l*24)}),e.fillStyle="#070b12",e.fillRect(146,48,872,458),[{num:"01",text:'import { Scene, PerspectiveCamera } from "three";',color:"#e2e8f0"},{num:"02",text:'import { Suite402 } from "./world/Suite402";',color:"#38ef7d"},{num:"03",text:"",color:"#e2e8f0"},{num:"04",text:"// EXECUTIVE SUITE 402 — CYBER WORKSTATION INITIALIZED",color:"#64748b"},{num:"05",text:"export async function launchTokyoNight(): Promise<void> {",color:"#00ffff"},{num:"06",text:"  const district = await buildMidnightTokyo({",color:"#f8fafc"},{num:"07",text:'    location: "Sun Heights Mansion // Suite 402",',color:"#ffd166"},{num:"08",text:'    lighting: "Ultra PBR Dynamic Pool",',color:"#ffd166"},{num:"09",text:'    atmosphere: "Cyber Midnight Twilight (東京の夜)",',color:"#ffd166"},{num:"10",text:'    fpsTarget: 120, status: "READY"',color:"#38ef7d"},{num:"11",text:"  });",color:"#f8fafc"},{num:"12",text:"  district.igniteAtmosphere();",color:"#00ffff"},{num:"13",text:'  console.log("Welcome home to Tokyo, Relzzy.");',color:"#f472b6"},{num:"14",text:"}",color:"#00ffff"}].forEach((a,l)=>{const c=84+l*26;e.fillStyle="#334155",e.font="14px monospace",e.fillText(a.num,160,c),e.fillStyle=a.color,e.font="15px monospace",e.fillText(a.text,195,c)}),e.fillStyle="#00ffff",e.fillRect(360,409,10,16),e.fillStyle="#04070c",e.fillRect(146,440,872,66),e.strokeStyle="#1e293b",e.strokeRect(146,440,872,66),e.fillStyle="#10b981",e.font="bold 13px monospace",e.fillText("TERMINAL: build succeeded in 1.10s — 0 errors — All 43 point lights synchronized.",160,470),e.fillStyle="#38bdf8",e.fillText("relzzy@tokyo-rig:~/project$ █",160,492);const r=new se(n);return ft.set(o,r),r}function ix(){const o="suite-alarm-clock",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#080a0f",e.fillRect(0,0,256,128),e.strokeStyle="#1b2230",e.lineWidth=4,e.strokeRect(8,8,240,112),e.fillStyle="rgba(0, 255, 255, 0.08)",e.font="bold 64px monospace",e.textAlign="center",e.fillText("88:88",128,88),e.shadowColor="#00ffff",e.shadowBlur=14,e.fillStyle="#00ffff",e.font="bold 64px monospace",e.fillText("11:42",128,88),e.shadowBlur=0,e.fillStyle="#00ffff",e.font="bold 12px monospace",e.fillText("PM",214,50),e.fillStyle="#10b981",e.fillText("● ALARM ON",128,112);const i=new se(n);return ft.set(o,i),i}function ox(){const o="suite-living-room-mat",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=512;const e=n.getContext("2d");e.fillStyle="#141822",e.fillRect(0,0,256,512),e.strokeStyle="#d4af37",e.lineWidth=8,e.strokeRect(8,8,240,496),e.strokeStyle="rgba(212, 175, 55, 0.6)",e.lineWidth=3,e.setLineDash([12,8]),e.strokeRect(20,20,216,472),e.setLineDash([]),e.fillStyle="#d4af37",e.beginPath(),e.arc(128,48,6,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(128,464,6,0,Math.PI*2),e.fill(),e.save(),e.translate(128,256),e.rotate(-Math.PI/2),e.fillStyle="#d4af37",e.font="900 28px sans-serif",e.textAlign="center",e.letterSpacing="6px",e.fillText("LIVING ROOM",0,8),e.font="bold 13px monospace",e.fillStyle="rgba(212, 175, 55, 0.75)",e.fillText("SUITE 402 // TOKYO",0,32),e.restore();const i=new se(n);return ft.set(o,i),i}function sx(){const o="corridor-carpet-runner",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#0f1420",e.fillRect(0,0,1024,512);const i=e.getImageData(0,0,1024,512),s=i.data;for(let l=0;l<512;l+=2)for(let c=0;c<1024;c+=2){const f=(l*1024+c)*4,d=(Math.random()-.5)*14;s[f]=Math.max(10,Math.min(32,s[f]+d)),s[f+1]=Math.max(14,Math.min(38,s[f+1]+d)),s[f+2]=Math.max(24,Math.min(52,s[f+2]+d))}e.putImageData(i,0,0),e.strokeStyle="#d4af37",e.lineWidth=8,e.beginPath(),e.moveTo(0,20),e.lineTo(1024,20),e.stroke(),e.strokeStyle="rgba(212, 175, 55, 0.55)",e.lineWidth=3,e.beginPath(),e.moveTo(0,34),e.lineTo(1024,34),e.stroke(),e.strokeStyle="rgba(212, 175, 55, 0.55)",e.lineWidth=3,e.beginPath(),e.moveTo(0,478),e.lineTo(1024,478),e.stroke(),e.strokeStyle="#d4af37",e.lineWidth=8,e.beginPath(),e.moveTo(0,492),e.lineTo(1024,492),e.stroke(),e.strokeStyle="rgba(212, 175, 55, 0.28)",e.lineWidth=2;const r=128;for(let l=0;l<=1024;l+=r)e.beginPath(),e.moveTo(l,40),e.lineTo(l+r/2,256),e.lineTo(l,472),e.stroke(),e.beginPath(),e.moveTo(l+r/2,256),e.lineTo(l+r,40),e.moveTo(l+r/2,256),e.lineTo(l+r,472),e.stroke(),e.fillStyle="rgba(212, 175, 55, 0.12)",e.beginPath(),e.moveTo(l+r/2,220),e.lineTo(l+r/2+25,256),e.lineTo(l+r/2,292),e.lineTo(l+r/2-25,256),e.closePath(),e.fill(),e.stroke();const a=new se(n);return a.wrapS=Pe,a.wrapT=Ri,a.repeat.set(4,1),ft.set(o,a),a}function vf(o){const t=`corridor-elev-disp-${o}`,n=ft.get(t);if(n)return n;const e=document.createElement("canvas");e.width=256,e.height=96;const i=e.getContext("2d");i.fillStyle="#060810",i.fillRect(0,0,256,96),i.strokeStyle="#d4af37",i.lineWidth=4,i.strokeRect(4,4,248,88),i.shadowColor="#f59e0b",i.shadowBlur=12,i.fillStyle="#f59e0b",i.font="bold 36px monospace",i.textAlign="center",o==="left"?i.fillText("▲ 4",128,60):(i.font="bold 28px monospace",i.fillText("4 - IDLE",128,58));const s=new se(e);return ft.set(t,s),s}function rx(){const o="corridor-fire-stairs-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=96;const e=n.getContext("2d");e.fillStyle="#15803d",e.fillRect(0,0,256,96),e.strokeStyle="#22c55e",e.lineWidth=6,e.strokeRect(4,4,248,88),e.fillStyle="#ffffff",e.beginPath(),e.arc(60,36,9,0,Math.PI*2),e.fill(),e.fillRect(56,48,8,24),e.fillRect(44,54,32,6),e.font="900 32px monospace",e.fillStyle="#ffffff",e.fillText("STAIRS",110,58);const i=new se(n);return ft.set(o,i),i}function ax(){const o="corridor-wayfinding-sign",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=128;const e=n.getContext("2d");e.fillStyle="#0f172a",e.fillRect(0,0,512,128),e.strokeStyle="#d4af37",e.lineWidth=4,e.strokeRect(6,6,500,116),e.fillStyle="#f1f5f9",e.font="bold 26px monospace",e.textAlign="center",e.fillText("◄ 401-404 | LIFTS | STAIRS ►",256,68),e.font="bold 14px monospace",e.fillStyle="#d4af37",e.fillText("4TH FLOOR RESIDENTIAL WING",256,96);const i=new se(n);return ft.set(o,i),i}function Mf(o){const t=`corridor-suite-plaque-${o}`,n=ft.get(t);if(n)return n;const e=document.createElement("canvas");e.width=128,e.height=96;const i=e.getContext("2d");i.fillStyle="#d4af37",i.fillRect(0,0,128,96),i.strokeStyle="#854d0e",i.lineWidth=4,i.strokeRect(3,3,122,90),i.fillStyle="#000000",i.font="900 44px monospace",i.textAlign="center",i.fillText(o,64,64);const s=new se(e);return ft.set(t,s),s}function lx(){const o="corridor-refuse-chute",t=ft.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=320;const e=n.getContext("2d");e.fillStyle="#64748b",e.fillRect(0,0,256,320),e.fillStyle="#475569";for(let s=10;s<310;s+=6)e.fillRect(10,s,236,2);e.fillStyle="#0f172a",e.fillRect(20,30,216,48),e.fillStyle="#94a3b8",e.font="bold 20px sans-serif",e.textAlign="center",e.fillText("REFUSE CHUTE",128,62),e.fillStyle="#1e293b",e.fillRect(60,130,136,24),e.strokeStyle="#cbd5e1",e.lineWidth=3,e.strokeRect(60,130,136,24),e.fillStyle="#22c55e",e.beginPath(),e.arc(128,220,12,0,Math.PI*2),e.fill();const i=new se(n);return ft.set(o,i),i}function cx(o,t){const n=new Lt;n.name="streets_and_terrain";const e=[],i=new Xt(110,7);i.rotateX(-Math.PI/2),i.translate(0,.002,0),e.push(i);const s=new Xt(5,38.5);s.rotateX(-Math.PI/2),s.translate(16,.002,22.75),e.push(s);const r=new Xt(5,38.5);r.rotateX(-Math.PI/2),r.translate(-14,.002,-22.75),e.push(r);for(const m of e){const v=new p(m,V1);v.receiveShadow=!0,n.add(v)}const a=[{w:68.5,d:4,x:-20.75,z:5.5},{w:33.5,d:4,x:35.25,z:5.5},{w:10,d:6,x:0,z:10.5},{w:38.5,d:4,x:-35.75,z:-5.5},{w:63.5,d:4,x:20.25,z:-5.5},{w:3,d:38.5,x:12,z:22.75},{w:3,d:38.5,x:20,z:22.75},{w:3,d:38.5,x:-18,z:-22.75},{w:3,d:38.5,x:-10,z:-22.75}];for(const m of a){const v=new T(m.w,.15,m.d),y=new p(v,Y1);y.position.set(m.x,.075,m.z),y.receiveShadow=!0,n.add(y)}const l=new T(9.5,.15,3),c=new p(l,gf);c.position.set(8.75,.075,21),c.receiveShadow=!0,n.add(c);const f=new T(9,.15,3),d=new p(f,gf);d.position.set(0,.075,23.5),d.receiveShadow=!0,n.add(d);const u=new T(18,.15,29),h=new p(u,J1);h.position.set(.5,.075,-22),h.receiveShadow=!0,n.add(h);const x=[{x:0,z:-9.5,w:5.6,d:4},{x:-7.2,z:-22,w:2.8,d:3.6},{x:0,z:-21.5,w:6.2,d:5.8},{x:0,z:-15,w:3.2,d:7.2},{x:-4.2,z:-22,w:3.4,d:2.6},{x:1,z:-27.5,w:3,d:6.5},{x:6,z:-32,w:4.5,d:3.8}];for(const m of x){const v=new T(m.w,.012,m.d),y=new p(v,j1);y.position.set(m.x,.156,m.z),y.receiveShadow=!0,n.add(y)}const w=[{x:5.2,z:-16,w:5.8,d:7.2},{x:-5,z:-14.5,w:4.8,d:6.2},{x:-3.5,z:-33.2,w:7.4,d:4.2}],g=new R({color:5922920,roughness:.9});for(const m of w){const v=new T(m.w+.3,.06,m.d+.3),y=new p(v,g);y.position.set(m.x,.17,m.z),y.receiveShadow=!0,n.add(y);const _=new T(m.w,.065,m.d),P=new p(_,Q1);P.position.set(m.x,.18,m.z),P.receiveShadow=!0,n.add(P)}return fx(n),t.add({minX:-55,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:-41.5}),t.add({minX:-55,minY:0,minZ:41.5,maxX:55,maxY:10,maxZ:45}),t.add({minX:-55,minY:0,minZ:-45,maxX:-51.5,maxY:10,maxZ:45}),t.add({minX:51.5,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:45}),wr(n,-51,0,0,!1),wr(n,51,0,0,!1),wr(n,16,0,40,!0),wr(n,-14,0,-40,!0),o.add(n),n}function fx(o){const t=[{x:16,z:0,w:4.2,d:6.8,rotY:0},{x:-14,z:0,w:4.2,d:6.8,rotY:0},{x:0,z:0,w:3.6,d:6.8,rotY:0},{x:16,z:5.5,w:4.8,d:3.2,rotY:Math.PI/2},{x:-14,z:-5.5,w:4.8,d:3.2,rotY:Math.PI/2}];for(const r of t){const l=r.rotY===0?r.w/15:r.d/15,c=r.rotY===0?r.d:r.w;for(let f=0;f<8;f++){const d=new Xt(r.rotY===0?l:c,r.rotY===0?c:l);d.rotateX(-Math.PI/2);const u=new p(d,ys);if(r.rotY===0){const h=-r.w/2+f*l*2+l/2;u.position.set(r.x+h,.005,r.z)}else{const h=-r.d/2+f*l*2+l/2;u.position.set(r.x,.005,r.z+h)}o.add(u)}}const n=2.4,e=2.4;for(let r=-50;r<=50;r+=n+e){if(Math.abs(r-16)<3.5||Math.abs(r- -14)<3.5||Math.abs(r)<2.5)continue;const a=new Xt(n,.18);a.rotateX(-Math.PI/2);const l=new p(a,ys);l.position.set(r+n/2,.004,0),o.add(l)}const i=[{z:-3.2,x1:-52,x2:-17},{z:-3.2,x1:-11,x2:52},{z:3.2,x1:-52,x2:13},{z:3.2,x1:19,x2:52}];for(const r of i){const a=r.x2-r.x1,l=new Xt(a,.15);l.rotateX(-Math.PI/2);const c=new p(l,ys);c.position.set(r.x1+a/2,.004,r.z),o.add(c)}const s=[{x:16,z:3.6,w:4,d:.6},{x:16,z:-3.6,w:4,d:.6},{x:-14,z:3.6,w:4,d:.6},{x:-14,z:-3.6,w:4,d:.6},{x:0,z:3.6,w:3.6,d:.6},{x:0,z:-3.6,w:3.6,d:.6},{x:13.6,z:5.5,w:.6,d:3},{x:18.4,z:5.5,w:.6,d:3}];for(const r of s){const a=new T(r.w,.015,r.d),l=new p(a,ko);l.position.set(r.x,.155,r.z),l.receiveShadow=!0,o.add(l)}Sf(o,16,7.5,Math.PI),Sf(o,-14,-7.5,0),dx(o)}function dx(o){const t=new R({map:pg(),roughness:.55,metalness:.8}),n=[{x:-6,z:1.2},{x:16,z:14},{x:-14,z:-14},{x:28,z:-1.2},{x:-30,z:1.4}],e=new ln(.44,24);e.rotateX(-Math.PI/2);for(const a of n){const l=new p(e,t);l.position.set(a.x,.005,a.z),l.receiveShadow=!0,o.add(l)}const i=new Xt(.4,.9);i.rotateX(-Math.PI/2);const s=new R({color:2237996,roughness:.4,metalness:.85}),r=[{x:-22,z:3.25},{x:-8,z:3.25},{x:8,z:3.25},{x:26,z:3.25},{x:-22,z:-3.25},{x:-8,z:-3.25},{x:8,z:-3.25},{x:26,z:-3.25},{x:13.75,z:12},{x:18.25,z:12},{x:13.75,z:28},{x:18.25,z:28}];for(const a of r){const l=new p(i,s);l.position.set(a.x,.005,a.z),o.add(l)}}function Sf(o,t,n,e){const i=new Xt(3.6,.45);i.rotateX(-Math.PI/2),i.rotateY(e);const s=new p(i,ys);s.position.set(t,.006,n),o.add(s);const r=new mn,a=new Float32Array([-.9,.006,-.6,.9,.006,-.6,0,.006,1.2]);r.setAttribute("position",new Yn(a,3)),r.computeVertexNormals();const l=new p(r,ys);l.position.set(t,0,n+(e===0?-1.8:1.8)),e!==0&&l.rotateY(e),o.add(l)}function wr(o,t,n,e,i){const s=new Lt,r=new Y(.06,.06,1.1,8),a=new T(4.8,.18,.06),l=new p(r,Oe);l.position.set(-2.2,.55,0);const c=new p(r,Oe);c.position.set(2.2,.55,0),s.add(l,c);const f=new p(a,ko);f.position.set(0,.8,0);const d=new p(a,ko);d.position.set(0,.45,0),s.add(f,d),s.position.set(t,n,e),i&&s.rotateY(Math.PI/2),o.add(s)}function hx(o,t,n,e,i,s,r){const a=new Lt;a.name="suite-402-executive-bedroom",o.add(a);const l=0,c=85,f=.15,d=8.4,u=5.6,h=2.9,x=.3,w=Ed(),g=new R({map:w,roughness:.3,metalness:.08}),m=new R({color:1449e3,roughness:.72,metalness:.06}),v=new R({color:1053984,roughness:.65,metalness:.1}),y=new R({color:13938487,roughness:.28,metalness:.88}),_=new R({color:2234387,roughness:.42,metalness:.06}),P=new R({color:2037265,roughness:.48,metalness:.05}),C=new R({color:16118766,roughness:.6}),A=new Wt({color:16775910,toneMapped:!1}),D=new R({color:8246268,roughness:.05,metalness:.1,transparent:!0,opacity:.32,depthWrite:!1,side:pn}),S=new R({color:1975344,roughness:.35,metalness:.8}),M=new R({color:14542060,roughness:.15,metalness:.92}),L=new Wt({color:65535,toneMapped:!1}),F=new R({color:1778483,roughness:.84,metalness:.03}),B=new R({color:15988473,roughness:.8,metalness:0}),Q=new T(d,.05,u),q=new p(Q,g);q.position.set(l,f+.025,c),q.receiveShadow=!0,a.add(q);const G=new T(d,.1,u),J=new p(G,C);J.position.set(l,f+h+.05,c),a.add(J);const X=d-1.6,lt=u-1.2,dt=new p(new T(X,.06,lt),C);dt.position.set(l,f+h-.02,c),a.add(dt);const pt=new T(X+.1,.02,lt+.1),Et=new p(pt,A);Et.position.set(l,f+h-.05,c),a.add(Et);const yt=(Se,$e,ii,oi)=>{const lo=new p(new T(ii,.12,oi),y);lo.position.set(Se,f+.06,$e),a.add(lo)};yt(l,c+u/2-.02,d,.04),yt(l-d/2+.02,c,.04,u),yt(l-2.8,c-u/2+.02,2.8,.04),yt(l+2.8,c-u/2+.02,2.8,.04),yt(l+d/2-.02,c-1.5,.04,2.6);const H=new T(d+x*2,h,x),W=new p(H,m);W.position.set(l,f+h/2,c+u/2+x/2),W.castShadow=!0,W.receiveShadow=!0,a.add(W);for(let Se=-3.2;Se<=3.2;Se+=1.6){const $e=new p(new T(.04,h-.4,.02),y);$e.position.set(l+Se,f+h/2,c+u/2-.01),a.add($e)}const Z=new T(x,h,u),ot=new p(Z,v);ot.position.set(l-d/2-x/2,f+h/2,c),ot.castShadow=!0,ot.receiveShadow=!0,a.add(ot);const ut=new T(x,h,2.6),Pt=new p(ut,m);Pt.position.set(l+d/2+x/2,f+h/2,c-1.5),a.add(Pt);const Vt=new T(x,h,1.2),bt=new p(Vt,m);bt.position.set(l+d/2+x/2,f+h/2,c+2.2),a.add(bt);const mt=2.3,oe=new T(x,h-mt,1.8),U=new p(oe,m);U.position.set(l+d/2+x/2,f+mt+(h-mt)/2,c+.7),a.add(U);const zt=new T(.06,mt,1.4),Rt=new p(zt,_);Rt.position.set(l+d/2+.04,f+mt/2,c+.8),a.add(Rt);const Dt=new p(new T(.08,.4,.04),y);Dt.position.set(l+d/2-.02,f+1.1,c+.3),a.add(Dt);const It=ox(),Qt=new R({map:It,roughness:.45,metalness:.2}),Tt=new p(new Xt(.9,1.6),Qt);Tt.rotation.x=-Math.PI/2,Tt.position.set(l+d/2-.55,f+.052,c+.7),a.add(Tt);const I=new T(2.8,h,x),b=new p(I,m);b.position.set(l-2.8,f+h/2,c-u/2-x/2),a.add(b);const V=new T(2.8,h,x),it=new p(V,m);it.position.set(l+2.8,f+h/2,c-u/2-x/2),a.add(it);const nt=2.45,et=new T(2.8,h-nt,x),vt=new p(et,m);vt.position.set(l,f+nt+(h-nt)/2,c-u/2-x/2),a.add(vt);const gt=new p(new T(2.8,.06,.08),y);gt.position.set(l,f+nt,c-u/2);const ht=new p(new T(.06,nt,.08),y);ht.position.set(l,f+nt/2,c-u/2),a.add(gt,ht);const Ut=new T(1.35,nt-.1,.03),ct=new p(Ut,D);ct.position.set(l-.7,f+nt/2,c-u/2);const At=new p(Ut,D);At.position.set(l+.7,f+nt/2,c-u/2+.02),a.add(ct,At);const Yt=new Y(.015,.015,.6,8),le=new p(Yt,y);le.position.set(l-.1,f+1.15,c-u/2+.03);const Ft=new p(Yt,y);Ft.position.set(l+.1,f+1.15,c-u/2+.05),a.add(le,Ft);const te=2.4,Bt=3.6,re=c-u/2-te/2,z=new T(Bt,.08,te),xt=new p(z,_);xt.position.set(l,f-.01,re),a.add(xt);const j=1.1,st=new p(new T(Bt,j,.04),D);st.position.set(l,f+j/2,re-te/2);const wt=new p(new T(.04,j,te),D);wt.position.set(l-Bt/2,f+j/2,re);const _t=new p(new T(.04,j,te),D);_t.position.set(l+Bt/2,f+j/2,re);const Zt=new p(new T(Bt+.08,.05,.08),M);Zt.position.set(l,f+j,re-te/2);const fe=new p(new T(.08,.05,te),M);fe.position.set(l-Bt/2,f+j,re);const be=new p(new T(.08,.05,te),M);be.position.set(l+Bt/2,f+j,re),a.add(st,wt,_t,Zt,fe,be);const ce=new Lt;ce.name="balcony-tokyo-skyline";const Le=new Wt({color:461847,side:Cn}),Ne=new p(new Re(45,16,12,0,Math.PI*2,0,Math.PI/2),Le);Ne.position.set(l,f,c),ce.add(Ne);const Ve=new Wt({color:16774863,toneMapped:!1}),Fe=new p(new ln(1.6,24),Ve);Fe.position.set(l+10,f+18,c-40),Fe.rotation.y=Math.PI,ce.add(Fe);const Ce=[{x:-18,z:-38,w:9,h:28,d:9,color:659485},{x:-7,z:-32,w:7,h:22,d:7,color:923174},{x:3,z:-36,w:10,h:32,d:10,color:593691},{x:14,z:-30,w:8,h:24,d:8,color:923432},{x:24,z:-38,w:11,h:35,d:11,color:527896}];for(const Se of Ce){const $e=new p(new T(Se.w,Se.h,Se.d),new Wt({color:Se.color}));$e.position.set(l+Se.x,f+Se.h/2-4,c+Se.z),ce.add($e);const ii=5,oi=8;for(let ns=0;ns<oi;ns++)for(let is=0;is<ii;is++)if((ns*3+is*7)%3===0){const Pd=(ns+is)%2===0?16771743:8246268,ql=new p(new Xt(.35,.45),new Wt({color:Pd,toneMapped:!1}));ql.position.set(l+Se.x-Se.w/2+1+is*1.5,f+4+ns*2.2,c+Se.z+Se.d/2+.05),ce.add(ql)}const lo=new Y(.04,.08,4,6),Yl=new p(lo,S);Yl.position.set(l+Se.x,f+Se.h-4+2,c+Se.z);const Zl=new p(new Re(.12,8,8),new Wt({color:16720418,toneMapped:!1}));Zl.position.set(l+Se.x,f+Se.h-4+4.1,c+Se.z),ce.add(Yl,Zl)}a.add(ce);const ee=l-2.5,$t=c-1.5,ve=1.9,de=1.2,kt=.76,Be=new T(ve,.05,de),Ye=new p(Be,_);Ye.position.set(ee,f+kt-.025,$t),Ye.castShadow=!0,Ye.receiveShadow=!0;const Me=new p(new T(ve+.02,.02,de+.02),y);Me.position.set(ee,f+kt-.04,$t),a.add(Ye,Me);const Te=new T(.07,kt,.07),ne=[{x:ee-ve/2+.06,z:$t-de/2+.06},{x:ee+ve/2-.06,z:$t-de/2+.06},{x:ee-ve/2+.06,z:$t+de/2-.06},{x:ee+ve/2-.06,z:$t+de/2-.06}];for(const Se of ne){const $e=new p(Te,S);$e.position.set(Se.x,f+kt/2,Se.z),a.add($e)}const ie=new R({color:1119776,roughness:.88}),E=new p(new T(1.4,.008,.75),ie);E.position.set(ee+.05,f+kt+.004,$t),a.add(E);const k=nx(),K=new Wt({map:k,toneMapped:!1}),$=new p(new Y(.18,.22,.02,16),S);$.position.set(ee,f+kt+.01,$t-.35);const O=new p(new T(.06,.32,.06),S);O.position.set(ee,f+kt+.17,$t-.35),a.add($,O);const at=new p(new Xt(.65,.38),K);at.position.set(ee,f+kt+.35,$t-.24);const Mt=new Xt(.24,.38),Ct=new p(Mt,K);Ct.position.set(ee-.42,f+kt+.35,$t-.21),Ct.rotation.y=.22;const Nt=new p(Mt,K);Nt.position.set(ee+.42,f+kt+.35,$t-.21),Nt.rotation.y=-.22;const Kt=new p(new T(1.1,.4,.04),S);Kt.position.set(ee,f+kt+.35,$t-.26);const ae=new p(new T(.9,.02,.02),L);ae.position.set(ee,f+kt+.35,$t-.28),a.add(at,Ct,Nt,Kt,ae);const rt=ee-.65,St=$t-.1,qt=.24,Jt=.52,pe=.46,he=new p(new T(qt,pe,Jt),S);he.position.set(rt,f+kt+pe/2,St);const Ot=new p(new Xt(Jt-.04,pe-.04),D);Ot.rotation.y=Math.PI/2,Ot.position.set(rt+qt/2+.005,f+kt+pe/2,St);const Ze=new p(new T(.04,.08,.28),L);Ze.position.set(rt+.02,f+kt+.18,St-.04);const ye=new Ll(.045,.065,16),je=new p(ye,L);je.position.set(rt,f+kt+.15,St+Jt/2+.005);const Mn=new p(ye,L);Mn.position.set(rt,f+kt+.32,St+Jt/2+.005);const Ge=new p(new ln(.012,12),L);Ge.rotation.x=-Math.PI/2,Ge.position.set(rt,f+kt+pe+.002,St+Jt/2-.04),a.add(he,Ot,Ze,je,Mn,Ge);const $n=new T(.44,.015,.16),Ae=new R({color:1777708,roughness:.4}),Sn=new p($n,Ae);Sn.position.set(ee,f+kt+.015,$t+.06);const zn=new p(new T(.42,.004,.14),L);zn.position.set(ee,f+kt+.024,$t+.06);const gn=new T(.07,.025,.12),bn=new p(gn,S);bn.position.set(ee+.36,f+kt+.018,$t+.06);const en=new Y(.006,.006,.018,8);en.rotateZ(Math.PI/2);const Fn=new p(en,L);Fn.position.set(ee+.36,f+kt+.032,$t+.02),a.add(Sn,zn,bn,Fn);const io=new Y(.04,.038,.09,16),gi=new p(io,B);gi.position.set(ee-.35,f+kt+.045,$t+.15);const zr=new ln(.036,16),Wo=new p(zr,new Wt({color:3021072}));Wo.rotation.x=-Math.PI/2,Wo.position.set(ee-.35,f+kt+.088,$t+.15),a.add(gi,Wo);const ni=ee,xi=$t+.75,Ps=new p(new Y(.03,.03,.38,8),M);Ps.position.set(ni,f+.19,xi);for(let Se=0;Se<5;Se++){const $e=Se*Math.PI*2/5,ii=new T(.32,.02,.04),oi=new p(ii,M);oi.position.set(ni+Math.cos($e)*.16,f+.06,xi+Math.sin($e)*.16),oi.rotation.y=-$e,a.add(oi)}const Is=new T(.52,.07,.5),Ls=new p(Is,new R({color:1448482,roughness:.85}));Ls.position.set(ni,f+.44,xi);const Fr=new T(.48,.65,.04),oo=new p(Fr,new R({color:1909294,roughness:.9}));oo.position.set(ni,f+.82,xi+.24),oo.rotation.x=-.1;const Xo=new p(new T(.06,.22,.28),S);Xo.position.set(ni-.28,f+.56,xi+.05);const Yo=new p(new T(.06,.22,.28),S);Yo.position.set(ni+.28,f+.56,xi+.05),a.add(Ps,Ls,oo,Xo,Yo);const Tn=l-2.2,We=c+.4,cn=2.4,ze=1.9,so=new p(new T(cn-.2,.16,ze-.2),S);so.position.set(Tn,f+.08,We);const Ds=new T(cn,.18,ze),Zo=new p(Ds,_);Zo.position.set(Tn,f+.25,We);const qo=new p(new T(cn+.02,.02,ze+.02),y);qo.position.set(Tn,f+.34,We),a.add(so,Zo,qo);const kr=new T(.12,1.25,ze+.2),Us=new p(kr,_);Us.position.set(l-d/2+.06,f+.72,We);const Di=new p(new T(.02,.03,ze+.16),y);Di.position.set(l-d/2+.13,f+.95,We),a.add(Us,Di);const $o=new T(cn-.12,.24,ze-.08),Ui=new p($o,F);Ui.position.set(Tn+.04,f+.46,We),Ui.castShadow=!0;const Or=new T(.25,.08,ze-.12),Ns=new p(Or,B);Ns.position.set(Tn-.75,f+.55,We);const zs=new R({color:1119778,roughness:.78}),Fs=new T(.48,.04,ze-.06),ro=new p(Fs,zs);ro.position.set(Tn+.8,f+.58,We);const xn=new p(new T(.02,.015,ze-.06),y);xn.position.set(Tn+.56,f+.6,We);const Ln=new p(new T(.02,.015,ze-.06),y);Ln.position.set(Tn+1.04,f+.6,We),a.add(Ui,Ns,ro,xn,Ln);const On=new T(.44,.15,.72),fn=new p(On,B);fn.position.set(Tn-.85,f+.58,We-.42),fn.rotation.y=.05;const ao=new p(On,B);ao.position.set(Tn-.85,f+.58,We+.42),ao.rotation.y=-.05,a.add(fn,ao);const nn=l-3.4,dn=c+2.1,Ni=.82,zi=.72,wn=.54,ks=new T(Ni,wn,zi),Ko=new p(ks,_);Ko.position.set(nn,f+wn/2,dn);const Jo=new p(new T(Ni+.01,.015,zi+.01),y);Jo.position.set(nn,f+wn-.01,dn);const jo=new p(new T(.02,.025,.32),y);jo.position.set(nn+Ni/2+.01,f+wn*.65,dn),a.add(Ko,Jo,jo);const Qo=new p(new Y(.12,.14,.02,16),y);Qo.position.set(nn,f+wn+.01,dn-.15);const ts=new p(new Y(.015,.015,.22,8),y);ts.position.set(nn,f+wn+.12,dn-.15);const wi=new Wt({color:16775904,toneMapped:!1}),Fi=new p(new Re(.14,16,16),wi);Fi.position.set(nn,f+wn+.28,dn-.15),a.add(Qo,ts,Fi);const Os=ix(),Bs=new Wt({map:Os,toneMapped:!1}),_i=new p(new T(.18,.09,.12),S);_i.position.set(nn+.18,f+wn+.045,dn+.16),_i.rotation.y=-.35;const yi=new p(new Xt(.16,.08),Bs);yi.position.set(nn+.18+Math.sin(-.35)*.061,f+wn+.045,dn+.16+Math.cos(-.35)*.061),yi.rotation.y=-.35,a.add(_i,yi);const ki=new p(new T(.24,.04,.18),new R({color:9116186,roughness:.6}));ki.position.set(nn-.16,f+wn+.02,dn+.15),ki.rotation.y=.12;const Gs=new p(new T(.22,.035,.16),new R({color:1784619,roughness:.6}));Gs.position.set(nn-.15,f+wn+.055,dn+.14),Gs.rotation.y=-.06,a.add(ki,Gs);const hn=ex(),_n=new R({map:hn,roughness:.85,metalness:.08,transparent:!0}),on=new p(new Xt(3.6,2.1),_n);on.rotation.x=-Math.PI/2,on.position.set(l+.6,f+.052,c+.6),on.receiveShadow=!0,a.add(on);const In=l+3.1,sn=c-1.5,Oi=1.6,Kn=.72,Bi=2.45,Br=new p(new T(Oi,Bi,Kn),P);Br.position.set(In,f+Bi/2,sn),Br.castShadow=!0;const Fl=new p(new T(Oi+.08,.1,Kn+.08),_);Fl.position.set(In,f+Bi+.04,sn);const kl=new p(new T(Oi+.1,.015,Kn+.1),y);kl.position.set(In,f+Bi+.01,sn),a.add(Br,Fl,kl);const es=(Oi-.06)/2,Ol=new T(es,Bi-.18,.03),Gr=new p(Ol,P);Gr.position.set(In-es/2-.01,f+Bi/2-.02,sn+Kn/2+.01);const Hr=new p(Ol,P);Hr.position.set(In+es/2+.01,f+Bi/2-.02,sn+Kn/2+.01);const Bl=Se=>{const $e=new p(new T(es-.14,.85,.01),_);$e.position.set(0,.42,.015);const ii=new p(new T(es-.14,.85,.01),_);ii.position.set(0,-.48,.015),Se.add($e,ii)};Bl(Gr),Bl(Hr);const Gl=new T(.02,.35,.03),Hl=new p(Gl,y);Hl.position.set(In-.05,f+1.15,sn+Kn/2+.04);const Vl=new p(Gl,y);Vl.position.set(In+.05,f+1.15,sn+Kn/2+.04),a.add(Gr,Hr,Hl,Vl);let Gi=!0;const Vr=new me(16753203,2.6,6.5,1.2);Vr.position.set(nn,f+wn+.35,dn-.15),a.add(Vr);let Hs=!0;const Vs=new me(65535,2,5.2,1.1);Vs.position.set(ee,f+kt+.38,$t-.1),a.add(Vs);const Wl=new me(16772822,1.8,11,1.2);Wl.position.set(l,f+h-.3,c),a.add(Wl),r&&(r.register({x:nn,y:f+wn+.35,z:dn-.15,color:16753203,intensity:2.6,distance:6.5,decay:1.2,zone:"Suite402",dynamicIntensity:()=>Gi?2.6:0}),r.register({x:ee,y:f+kt+.38,z:$t-.1,color:65535,intensity:2,distance:5.2,decay:1.1,zone:"Suite402",dynamicIntensity:()=>Hs?1.8+Math.sin(Date.now()*.003)*.2:0}),r.register({x:l,y:f+h-.3,z:c,color:16772822,intensity:1.8,distance:11,decay:1.2,zone:"Suite402"})),t.add({minX:l-d/2-.5,minY:0,minZ:c+u/2-.05,maxX:l+d/2+.5,maxY:4,maxZ:c+u/2+1}),t.add({minX:l-d/2-1,minY:0,minZ:c-u/2-.5,maxX:l-d/2+.05,maxY:4,maxZ:c+u/2+.5}),t.add({minX:l-d/2-.5,minY:0,minZ:c-u/2-.5,maxX:l-1.35,maxY:4,maxZ:c-u/2+.05}),t.add({minX:l+1.35,minY:0,minZ:c-u/2-.5,maxX:l+d/2+.5,maxY:4,maxZ:c-u/2+.05}),t.add({minX:l-Bt/2-.2,minY:0,minZ:re-te/2-.3,maxX:l+Bt/2+.2,maxY:4,maxZ:re-te/2+.1}),t.add({minX:l-Bt/2-.3,minY:0,minZ:c-u/2-te,maxX:l-Bt/2+.1,maxY:4,maxZ:c-u/2}),t.add({minX:l+Bt/2-.1,minY:0,minZ:c-u/2-te,maxX:l+Bt/2+.3,maxY:4,maxZ:c-u/2}),t.add({minX:l+d/2-.05,minY:0,minZ:c-u/2-.5,maxX:l+d/2+1,maxY:4,maxZ:c-.1}),t.add({minX:l+d/2-.05,minY:0,minZ:c+1.6,maxX:l+d/2+1,maxY:4,maxZ:c+u/2+.5}),t.add({minX:l+d/2+.25,minY:0,minZ:c-.1,maxX:l+d/2+1.2,maxY:4,maxZ:c+1.6}),t.add({minX:ee-ve/2-.1,minY:0,minZ:$t-de/2-.1,maxX:ee+ve/2+.1,maxY:1.5,maxZ:$t+de/2+.1}),t.add({minX:Tn-cn/2-.1,minY:0,minZ:We-ze/2-.1,maxX:Tn+cn/2+.1,maxY:1.2,maxZ:We+ze/2+.1}),t.add({minX:nn-Ni/2-.05,minY:0,minZ:dn-zi/2-.05,maxX:nn+Ni/2+.05,maxY:1,maxZ:dn+zi/2+.05}),t.add({minX:In-Oi/2-.05,minY:0,minZ:sn-Kn/2-.05,maxX:In+Oi/2+.05,maxY:3,maxZ:sn+Kn/2+.05}),n.add({id:"suite-lamp",x:nn,z:dn,radius:1.8,prompt:()=>Gi?"Turn Off Bedside Lamp [消灯]":"Turn On Bedside Lamp [点灯]",onInteract:()=>{Gi=!Gi,Fi.material=Gi?wi:new Wt({color:4866099}),Vr.intensity=Gi?2.6:0,s==null||s.playVendingSound(),e.show(Gi?"Bedside amber designer lamp turned ON.":"Bedside lamp turned OFF. Midnight shadows settle in.")}}),n.add({id:"suite-pc",x:ee,z:$t+.45,radius:1.7,prompt:()=>Hs?"Compile Code on Workstation [PC操作]":"Power On Workstation [PC起動]",onInteract:()=>{Hs=!0,Vs.intensity=2,s==null||s.playVendingSound(),e.show("💻 Tokyo Workstation: Build succeeded with 0 errors. All systems optimal!")}}),n.add({id:"suite-bed",x:Tn+.6,z:We,radius:1.8,prompt:()=>"Rest on Bed [ベッドで休む]",onInteract:()=>{e.show("🌙 You sit by the edge of your bed, listening to the distant midnight city murmur.")}}),n.add({id:"suite-wardrobe",x:In,z:sn+Kn/2+.4,radius:1.6,prompt:()=>"Inspect Wardrobe [クローゼット]",onInteract:()=>{e.show("👔 Wardrobe: High-school blazer uniform, dark coats, and fresh linen neatly organized.")}}),n.add({id:"suite-elevator",x:l+d/2-.2,z:c+.7,radius:1.6,prompt:()=>"Exit to 4F Lounge & Hallway [廊下・ラウンジへ]",onInteract:()=>{s==null||s.playVendingSound(),e.show("Stepping out into the 4F Elevator Lounge..."),setTimeout(()=>{i.teleport(-5.8,65,0),e.show("4F Elevator Lounge & Residential Corridor.",4)},350)}}),n.add({id:"suite-balcony",x:l,z:c-u/2-.8,radius:1.6,prompt:()=>"Gaze across Tokyo Skyline [夜景を眺める]",onInteract:()=>{e.show("🌃 The midnight Tokyo skyline glimmers beneath the crescent moon. A cool evening breeze passes.")}});let Xl=0;return{group:a,update(Se,$e){Xl+=Se;const oi=($e.x-l)**2+($e.z-c)**2<1600;if(a.visible=Rn.isHigh()||oi,!!a.visible&&Hs){const lo=1.6+Math.sin(Xl*3.5)*.3;Vs.intensity=lo}}}}function ux(o,t,n,e,i,s,r){const a=new Lt;a.name="corridor-4f-elevator-lounge",o.add(a);const l=0,c=65,f=.15,d=14.4,u=5.2,h=2.9,x=.3,w=Ed(),g=new R({map:w,roughness:.35,metalness:.08}),m=sx(),v=new R({map:m,roughness:.88,metalness:.04}),y=new R({color:1317414,roughness:.78,metalness:.05}),_=new R({color:2234386,roughness:.45,metalness:.06}),P=new R({color:13938487,roughness:.28,metalness:.88}),C=new R({color:1712172,roughness:.4,metalness:.8}),A=new R({color:9741240,roughness:.25,metalness:.82}),D=new R({color:1185570,roughness:.7}),S=new Wt({color:16771743,toneMapped:!1}),M=new p(new T(d,.05,u),g);M.position.set(l,f+.025,c),M.receiveShadow=!0,a.add(M);const L=d-.4,F=3.6,B=new p(new Xt(L,F),v);B.rotation.x=-Math.PI/2,B.position.set(l,f+.052,c),B.receiveShadow=!0,a.add(B);const Q=new p(new T(d,.1,u),D);Q.position.set(l,f+h+.05,c),a.add(Q);const q=(at,Mt,Ct,Nt,Kt=!0)=>{const ae=new Lt,rt=h-1.05,St=new p(new T(at,rt,Mt),y);St.position.set(0,1.05+rt/2,0),ae.add(St);const qt=new p(new T(Kt?at:.03,.03,Kt?.03:Mt),P);qt.position.set(0,1.05,0),ae.add(qt);const Jt=new p(new T(at,.95,Mt),_);Jt.position.set(0,.525,0),ae.add(Jt);const pe=new p(new T(Kt?at:.04,.1,Kt?.04:Mt),P);return pe.position.set(0,.05,0),ae.add(pe),ae.position.set(Ct,f,Nt),a.add(ae),ae};q(d+x*2,x,l,c+u/2+x/2,!0),q(x,u,l+d/2+x/2,c,!1);const G=1.6,J=2.4,X=(u-G)/2;q(x,X,l-d/2-x/2,c-u/2+X/2,!1),q(x,X,l-d/2-x/2,c+u/2-X/2,!1);const lt=new p(new T(x,h-J,G),y);lt.position.set(l-d/2-x/2,f+J+(h-J)/2,c),a.add(lt);const dt=new p(new T(.06,.08,G+.16),P);dt.position.set(l-d/2+.02,f+J+.04,c);const pt=new p(new T(.06,J,.08),P);pt.position.set(l-d/2+.02,f+J/2,c-G/2-.04);const Et=new p(new T(.06,J,.08),P);Et.position.set(l-d/2+.02,f+J/2,c+G/2+.04),a.add(dt,pt,Et);const yt=Mf("402"),H=new p(new Xt(.18,.12),new R({map:yt,metalness:.85,roughness:.2}));H.rotation.y=Math.PI/2,H.position.set(l-d/2+.02,f+1.6,c+G/2+.2),a.add(H);const W=new p(new T(.02,.16,.08),C);W.position.set(l-d/2+.02,f+1.35,c+G/2+.2);const Z=new p(new ln(.012,8),new Wt({color:2278750,toneMapped:!1}));Z.rotation.y=Math.PI/2,Z.position.set(l-d/2+.031,f+1.4,c+G/2+.2),a.add(W,Z);const ot=new p(new Xt(.9,1.4),new R({color:1185570,roughness:.8}));ot.rotation.x=-Math.PI/2,ot.position.set(l-d/2+.55,f+.054,c),a.add(ot);const ut=new me(16758861,1.8,4.5,1.2);ut.position.set(l-d/2+.5,f+1.8,c),a.add(ut);const Pt=new T(d+x*2,h,x),Vt=new p(Pt,y);Vt.position.set(l,f+h/2,c-u/2-x/2),a.add(Vt);const bt=new p(new T(d,.95,.04),_);bt.position.set(l,f+.475,c-u/2+.02);const mt=new p(new T(d,.03,.04),P);mt.position.set(l,f+1.05,c-u/2+.02),a.add(bt,mt);const oe=4.4,U=2.4,zt=c-u/2+.02,Rt=new p(new T(oe,U+.35,.08),P);Rt.position.set(l,f+(U+.35)/2,zt+.04);const Dt=new p(new T(oe-.16,U+.18,.06),C);Dt.position.set(l,f+(U+.18)/2,zt+.06),a.add(Rt,Dt);const It=new p(new T(.24,.65,.04),C);It.position.set(l,f+1.3,zt+.08);const Qt=new Y(.025,.025,.02,12);Qt.rotateX(Math.PI/2);const Tt=new p(Qt,S);Tt.position.set(l,f+1.45,zt+.1);const I=new p(Qt,P);I.position.set(l,f+1.25,zt+.1),a.add(It,Tt,I);const b=l-1.15,V=.92,it=new T(V,U,.04),nt=new p(it,A),et=new p(it,A);nt.position.set(b-V/2+.01,f+U/2,zt+.05),et.position.set(b+V/2-.01,f+U/2,zt+.05),a.add(nt,et);const vt=vf("left"),gt=new Wt({map:vt,toneMapped:!1}),ht=new p(new Xt(.55,.2),gt);ht.position.set(b,f+U+.18,zt+.09),a.add(ht);const Ut=l+1.15,ct=new p(it,A),At=new p(it,A);ct.position.set(Ut-V/2+.01,f+U/2,zt+.05),At.position.set(Ut+V/2-.01,f+U/2,zt+.05),a.add(ct,At);const Yt=vf("right"),le=new Wt({map:Yt,toneMapped:!1}),Ft=new p(new Xt(.65,.2),le);Ft.position.set(Ut,f+U+.18,zt+.09),a.add(Ft);const te=new p(new T(oe-.1,.02,.16),P);te.position.set(l,f+.053,zt+.08),a.add(te);const Bt=2.1,re=2,z=2.5,xt=zt-re/2-.02,j=new p(new T(Bt,.04,re),g);j.position.set(b,f+.02,xt);const st=new p(new T(Bt,.06,re),C);st.position.set(b,f+z,xt);const wt=new p(new T(Bt,z,.04),new R({color:13161696,roughness:.1,metalness:.9}));wt.position.set(b,f+z/2,xt-re/2);const _t=new me(16775910,2,5);_t.position.set(b,f+z-.1,xt),a.add(j,st,wt,_t);const Zt=(at,Mt)=>{const Ct=new Lt,Nt=new p(new T(1.2,2.3,.06),_);Nt.position.set(0,1.15,.03),Ct.add(Nt);const Kt=new p(new T(1.05,2.2,.04),_);Kt.position.set(0,1.12,.05),Ct.add(Kt);const ae=new p(new T(.38,1.8,.02),new R({color:1576970,roughness:.5}));ae.position.set(-.24,1.12,.06);const rt=new p(new T(.38,1.8,.02),new R({color:1576970,roughness:.5}));rt.position.set(.24,1.12,.06),Ct.add(ae,rt);const St=Mf(at),qt=new p(new Xt(.18,.12),new R({map:St,metalness:.85,roughness:.2}));qt.position.set(0,1.68,.075),Ct.add(qt);const Jt=new p(new Y(.015,.015,.02,10),P);Jt.rotateX(Math.PI/2),Jt.position.set(0,1.5,.075),Ct.add(Jt);const pe=new p(new T(.14,.03,.04),P);pe.position.set(.42,1.05,.08),Ct.add(pe);const he=new p(new ln(.025,12),S);he.position.set(-.58,1.35,.06),Ct.add(he),Ct.position.set(Mt,f,c-u/2),a.add(Ct)};Zt("401",l-3.8),Zt("403",l+3.4);const fe=l-2.6,be=c-u/2,ce=lx(),Le=new R({map:ce,roughness:.35,metalness:.75}),Ne=new p(new Xt(.65,.9),Le);Ne.position.set(fe,f+1.25,be+.03),a.add(Ne);const Ve=l+5.2,Fe=c-u/2,Ce=new p(new T(1.25,2.35,.06),C);Ce.position.set(Ve,f+1.175,Fe+.03);const ee=new p(new T(1.12,2.25,.04),new R({color:2568255,roughness:.5,metalness:.6}));ee.position.set(Ve,f+1.15,Fe+.045);const $t=new p(new Xt(.42,.55),new R({color:536393,roughness:.1,metalness:.2,transparent:!0,opacity:.85}));$t.position.set(Ve,f+1.5,Fe+.068);const ve=new p(new Y(.02,.02,.9,12),new R({color:13751771,roughness:.2,metalness:.85}));ve.rotateZ(Math.PI/2),ve.position.set(Ve,f+.95,Fe+.09);const de=rx(),kt=new Wt({map:de,toneMapped:!1}),Be=new p(new Xt(.72,.24),kt);Be.position.set(Ve,f+2.52,Fe+.06),a.add(Ce,ee,$t,ve,Be);const Ye=ax(),Me=new R({map:Ye,roughness:.35,metalness:.6}),Te=new p(new Xt(1.1,.28),Me);Te.position.set(l+6.3,f+1.6,c-u/2+.04),a.add(Te);const ne=new p(new T(.8,.55,.06),new R({color:12131356,roughness:.4}));ne.position.set(l-2.8,f+1.25,c+u/2-.02),a.add(ne);const ie=[l-5.5,l-1.8,l+1.8,l+4.4,l];for(const at of ie){const Mt=new p(new T(.08,.16,.04),P);Mt.position.set(at,f+1.75,c-u/2+.03);const Ct=new p(new Xe(.06,.1,8),S);Ct.position.set(at,f+1.86,c-u/2+.04);const Nt=new p(new Xe(.06,.1,8),S);Nt.rotation.x=Math.PI,Nt.position.set(at,f+1.64,c-u/2+.04),a.add(Mt,Ct,Nt)}const E=new me(16775904,2.2,14,1.2);E.position.set(l,f+h-.25,c),a.add(E);const k=new me(16771279,1.8,9,1.2);k.position.set(l-4.5,f+h-.25,c),a.add(k);const K=new me(16771279,1.8,9,1.2);K.position.set(l+4.5,f+h-.25,c),a.add(K),r&&(r.register({x:l,y:f+h-.25,z:c,color:16775904,intensity:2.2,distance:14,decay:1.2,zone:"Lounge"}),r.register({x:l-4.5,y:f+h-.25,z:c,color:16771279,intensity:1.8,distance:9,decay:1.2,zone:"Lounge"}),r.register({x:l+4.5,y:f+h-.25,z:c,color:16771279,intensity:1.8,distance:9,decay:1.2,zone:"Lounge"})),t.add({minX:l-d/2-.5,minY:0,minZ:c+u/2-.05,maxX:l+d/2+.5,maxY:4,maxZ:c+u/2+.8}),t.add({minX:l-d/2-.5,minY:0,minZ:c-u/2-.8,maxX:b-.95,maxY:4,maxZ:c-u/2+.05}),t.add({minX:b+.95,minY:0,minZ:c-u/2-.8,maxX:l+d/2+.5,maxY:4,maxZ:c-u/2+.05}),t.add({minX:b-Bt/2-.2,minY:0,minZ:xt-re/2-.3,maxX:b+Bt/2+.2,maxY:4,maxZ:xt-re/2+.05}),t.add({minX:b-Bt/2-.2,minY:0,minZ:xt-re/2,maxX:b-Bt/2+.05,maxY:4,maxZ:c-u/2+.05}),t.add({minX:b+Bt/2-.05,minY:0,minZ:xt-re/2,maxX:b+Bt/2+.2,maxY:4,maxZ:c-u/2+.05}),t.add({minX:l+d/2-.05,minY:0,minZ:c-u/2-.5,maxX:l+d/2+.8,maxY:4,maxZ:c+u/2+.5}),t.add({minX:l-d/2-.8,minY:0,minZ:c-u/2-.5,maxX:l-d/2+.05,maxY:4,maxZ:c-G/2}),t.add({minX:l-d/2-.8,minY:0,minZ:c+G/2,maxX:l-d/2+.05,maxY:4,maxZ:c+u/2+.5});let $=!0,O=1;return n.add({id:"corridor-elevator",x:b,z:c-u/2+.5,radius:1.8,prompt:()=>$?"Take Elevator to 1F Lobby [1階 ロビーへ]":"Call Elevator [4階 エレベーター]",onInteract:()=>{$?($=!1,s==null||s.playElevatorChime(),e.show("*Ding* Elevator doors glide shut. Descending to 1F Entrance Lobby..."),setTimeout(()=>{i.teleport(0,18.2,Math.PI),e.show("1F Entrance Lobby. Step out into midnight Tokyo.",5)},500)):($=!0,s==null||s.playElevatorChime(),e.show("*Ding* Lift 1 doors glide open."))}}),n.add({id:"corridor-stairs",x:Ve,z:Fe+.5,radius:1.6,prompt:()=>"Take Emergency Stairs to 1F [非常階段で1階へ]",onInteract:()=>{s==null||s.playVendingSound(),e.show("Heavy fire door clicks open. Descending fire stairs to 1F..."),setTimeout(()=>{i.teleport(0,18.2,Math.PI),e.show("Arrived at 1F Entrance Lobby.",4)},400)}}),n.add({id:"corridor-suite-402",x:l-d/2+.6,z:c,radius:1.7,prompt:()=>"Enter Suite 402 (Your Bedroom) [402号室へ]",onInteract:()=>{s==null||s.playElevatorChime(),e.show("Smart lock beeps: Access Granted. Welcome home to Suite 402."),setTimeout(()=>{i.teleport(1.2,85.2,-Math.PI/2)},350)}}),n.add({id:"corridor-suite-401",x:l-3.8,z:c-u/2+.6,radius:1.5,prompt:()=>"Ring Doorbell (Suite 401) [インターホン]",onInteract:()=>{s==null||s.playCrosswalkChime(),e.show("Suite 401: *Chime* No answer. Soft relaxing lo-fi jazz can be heard inside.")}}),n.add({id:"corridor-suite-403",x:l+3.4,z:c-u/2+.6,radius:1.5,prompt:()=>"Ring Doorbell (Suite 403) [インターホン]",onInteract:()=>{s==null||s.playCrosswalkChime(),e.show("Suite 403: *Chime* A quiet evening hum. The occupant seems to be asleep.")}}),n.add({id:"corridor-refuse-chute",x:fe,z:be+.6,radius:1.5,prompt:()=>"Open Refuse Chute [ダストシュート]",onInteract:()=>{s==null||s.playVendingSound(),e.show("The stainless steel chute flap opens with a smooth pneumatic hiss.")}}),{group:a,openElevator(at=!0){at?($=!1,O=0,setTimeout(()=>{$=!0,s==null||s.playElevatorChime()},150)):($=!0,O=1)},update(at,Mt){const Nt=(Mt.x-l)**2+(Mt.z-c)**2<1600;if(a.visible=Rn.isHigh()||Nt,!a.visible)return;O+=(($?1:0)-O)*Math.min(1,at*4.5),nt.position.x=b-V/2+.01-O*.75,et.position.x=b+V/2-.01+O*.75}}}function px(o,t,n,e,i,s,r){const a=new Lt;a.name="buildings";let l=null,c=null,f=null;const d=[];let u;for(const h of Td){const x=new Lt;x.name=`building-${h.id}`;const w=3.2,g=h.floors*w,m=h.w/2,v=h.d/2,y=new _e(h.wall),_=new _e(h.trim),P=new _e(h.balcony),C=new R({color:y,roughness:.82,metalness:.08}),A=new R({color:_,roughness:.65,metalness:.12}),D=new R({color:P,roughness:.75,metalness:.15});if(h.id==="b-sunheights"){const S=mx(x,h,t,n,e,C,A,i,s,r,()=>{u==null||u.openElevator(!0)});l=S.light,d.push(S.update);const M=(h.floors-1)*w,L=new T(h.w,M,h.d),F=new p(L,C);F.position.set(h.x,w+M/2,h.z),F.castShadow=!0,F.receiveShadow=!0,x.add(F),_r(x,h,w,A,D)}else if(h.id==="b-konbini"){const S=gx(x,h,t,n,e,C,A,i,s);c=S.light,d.push(S.update);const M=(h.floors-1)*w,L=new T(h.w,M,h.d),F=new p(L,C);F.position.set(h.x,w+M/2,h.z),F.castShadow=!0,F.receiveShadow=!0,x.add(F),_r(x,h,w,A,D)}else if(h.id==="b-ramen"){const S=xx(x,h,t,n,e,C,A,i,s);f=S.light,d.push(S.update);const M=(h.floors-1)*w,L=new T(h.w,M,h.d),F=new p(L,C);F.position.set(h.x,w+M/2,h.z),F.castShadow=!0,F.receiveShadow=!0,x.add(F),_r(x,h,w,A,D)}else{const S=new T(h.w,g,h.d),M=new p(S,C);M.position.set(h.x,g/2,h.z),M.castShadow=!0,M.receiveShadow=!0,x.add(M),t.add({minX:h.x-m,minY:0,minZ:h.z-v,maxX:h.x+m,maxY:g+2,maxZ:h.z+v});const L=yx(x,h,A,n,e,i,s);L!=null&&L.update&&d.push(L.update),_r(x,h,0,A,D)}Sx(x,h,g,A),Mx(x,h,g),a.add(x)}if(o.add(a),r){const h=hx(o,t,n,e,r,i,s);d.push(h.update),u=ux(o,t,n,e,r,i,s),d.push(u.update)}return{group:a,lobbyLight:l??new me(16769712,1,10),konbiniLight:c??new me(16777215,1,12),ramenLight:f??new me(16750916,1,10),update(h,x){for(const w of d)w(h,x)}}}function mx(o,t,n,e,i,s,r,a,l,c,f){const u=t.w/2,h=new Lt;h.name="lobby-interior-props",o.add(h);const x=7.6,w=8.4,g=.15,m=.35,v=3.2-g,y=new R({map:yg(),roughness:.22,metalness:.08}),_=new T(x,.05,w),P=new p(_,y);P.position.set(t.x,g+.025,t.z),P.receiveShadow=!0,o.add(P);const C=new R({color:16184559,roughness:.5}),A=new T(x,.2,w),D=new p(A,C);D.position.set(t.x,3.2-.1,t.z),o.add(D);const S=4.8,M=5.6,L=new T(S,.08,M),F=new R({color:15789282,roughness:.6}),B=new p(L,F);B.position.set(t.x,3.2-.04,t.z),h.add(B);const Q=new T(S+.12,.02,M+.12),q=new p(Q,ti);q.position.set(t.x,3.2-.07,t.z),h.add(q);for(const hn of[-1.8,1.8])for(const _n of[-2,2]){const on=new Y(.12,.12,.04,12),In=new p(on,Ht);In.position.set(t.x+hn,3.2-.02,t.z+_n);const sn=new p(new ln(.09,12),ti);sn.rotateX(Math.PI/2),sn.position.set(t.x+hn,3.2-.041,t.z+_n),h.add(In,sn)}const G=new R({map:_g(),roughness:.55,metalness:.02}),J=new T(x,v,m),X=new p(J,G);X.position.set(t.x,g+v/2,t.z+w/2-m/2),o.add(X),n.add({minX:t.x-x/2,minY:0,minZ:t.z+w/2-m,maxX:t.x+x/2,maxY:3.2,maxZ:t.z+w/2+1});const lt=new T(m,v,w),dt=new p(lt,G);dt.position.set(t.x-x/2+m/2,g+v/2,t.z),o.add(dt),n.add({minX:t.x-u-.5,minY:0,minZ:t.z-w/2,maxX:t.x-x/2+m,maxY:3.2,maxZ:t.z+w/2});const pt=new T(m,v,w),Et=new p(pt,G);Et.position.set(t.x+x/2-m/2,g+v/2,t.z),o.add(Et),n.add({minX:t.x+x/2-m,minY:0,minZ:t.z-w/2,maxX:t.x+u+.5,maxY:3.2,maxZ:t.z+w/2});const yt=2.4,H=(x-yt)/2,W=new T(H,v,m),Z=new p(W,G);Z.position.set(t.x-x/2+H/2,g+v/2,t.z-w/2+m/2),o.add(Z),n.add({minX:t.x-x/2,minY:0,minZ:t.z-w/2,maxX:t.x-yt/2,maxY:3.2,maxZ:t.z-w/2+m});const ot=new T(H,v,m),ut=new p(ot,G);ut.position.set(t.x+x/2-H/2,g+v/2,t.z-w/2+m/2),o.add(ut),n.add({minX:t.x+yt/2,minY:0,minZ:t.z-w/2,maxX:t.x+x/2,maxY:3.2,maxZ:t.z-w/2+m});const Pt=new T(yt,.7,m),Vt=new p(Pt,r);Vt.position.set(t.x,3.2-.35,t.z-w/2+m/2),o.add(Vt);const bt=new Wt({map:ug(),toneMapped:!1}),mt=new p(new T(.8,.35,.08),bt);mt.position.set(t.x,3.2-.55,t.z-w/2+m+.02),o.add(mt);const oe=new T(1.15,2.3,.06),U=new p(oe,qe);U.position.set(t.x-.65,g+1.15,t.z-w/2+m/2);const zt=new p(oe,qe);zt.position.set(t.x+.65,g+1.15,t.z-w/2+m/2),o.add(U,zt);const Rt=new T(2.4,.015,1.4),Dt=new R({color:2955812,roughness:.95}),It=new p(Rt,Dt);It.position.set(t.x,g+.035,t.z-w/2+1.2),o.add(It);const Qt=new Y(.18,.16,.65,12),Tt=new p(Qt,Ht);Tt.position.set(t.x+1.5,g+.325,t.z-w/2+.6),o.add(Tt);for(let hn=0;hn<3;hn++){const _n=new Je(.04,.012,6,12,Math.PI),on=new p(_n,Oe);on.position.set(t.x+1.45+hn*.05,g+.72,t.z-w/2+.6),o.add(on)}const I=new Y(.08,.08,.42,10),b=new R({color:14231064,roughness:.3,metalness:.2}),V=new p(I,b);V.position.set(t.x-1.5,g+.28,t.z-w/2+.5),o.add(V);const it=new T(.35,.5,.06),nt=new p(it,Ht);nt.position.set(t.x+yt/2+.4,g+1.35,t.z-w/2-.05),o.add(nt);const et=As("サンハイツ SUN HEIGHTS","#1d2530","#e2ebf5","RESIDENCE 1-24",512,128),vt=new p(new T(2.6,.65,.12),et);vt.position.set(t.x,3.2-.25,t.z-w/2-.08),o.add(vt);const gt=t.x-x/2+m,ht=.28,Ut=1.35,ct=2.6,At=gt+ht/2+.01,Yt=t.z-.5,le=new T(ht,Ut,ct),Ft=new R({color:4870749,roughness:.3,metalness:.6}),te=new p(le,Ft);te.position.set(At,g+1.25,Yt),h.add(te);const Bt=new R({map:Mg(),roughness:.25,metalness:.5}),re=new p(new Xt(ct,Ut),Bt);re.rotateY(Math.PI/2),re.position.set(At+ht/2+.005,g+1.25,Yt),h.add(re);const z=new T(.38,.04,ct+.1),xt=new p(z,Ht);xt.position.set(gt+.19,g+.56,Yt),h.add(xt);const j=new T(.32,.45,.45),st=new R({color:2250043,roughness:.4}),wt=new p(j,st);wt.position.set(gt+.18,g+.23,Yt+ct/2-.3),h.add(wt);const _t=new p(new T(.24,.03,.06),Ht);_t.position.set(gt+.18,g+.46,Yt+ct/2-.3),h.add(_t);const Zt=.44,fe=1.95,be=1.6,ce=gt+Zt/2+.01,Le=t.z+2.1,Ne=new p(new T(Zt,fe,be),new R({color:2041392,roughness:.35,metalness:.5}));Ne.position.set(ce,g+fe/2,Le),h.add(Ne);const Ve=new R({map:Sg(),roughness:.3,metalness:.4}),Fe=new p(new Xt(be,fe),Ve);Fe.rotateY(Math.PI/2),Fe.position.set(ce+Zt/2+.005,g+fe/2,Le),h.add(Fe),n.add({minX:t.x-x/2,minY:0,minZ:t.z-2,maxX:t.x-x/2+.85,maxY:2.4,maxZ:t.z+3.1}),e.add({id:"apt-mailboxes",x:gt+.95,z:t.z+.6,radius:2.2,prompt:"Check Mail & Parcel Lockers",onInteract:()=>{i.show("Apartment #304 (Relzzy): Tokyo Gas statement, local izakaya coupon, and a notification: Delivery Locker #3 is holding your Amazon parcel!")}});const Ce=t.x+x/2-m,ee=1.15,$t=1.05,ve=2.4,de=Ce-ee/2-.2,kt=t.z+.9,Be=new R({map:vg(),roughness:.4,metalness:.05}),Ye=new p(new T(ee,$t,ve),Be);Ye.position.set(de,g+$t/2,kt),Ye.castShadow=!0,h.add(Ye);const Me=new T(.04,.02,ve-.04),Te=new p(Me,ti);Te.position.set(de-ee/2-.01,g+$t-.02,kt),h.add(Te);const ne=new T(ee+.08,.06,ve+.08),ie=new R({color:16119803,roughness:.18,metalness:.08}),E=new p(ne,ie);E.position.set(de,g+$t+.03,kt),h.add(E);const k=new T(.02,.45,ve*.75),K=new p(k,qe);K.position.set(de-ee/2+.05,g+$t+.28,kt+.2),h.add(K);const $=new p(new Y(.05,.06,.02,12),Ht),O=new p(new Re(.045,12,8,0,Math.PI*2,0,Math.PI/2),new R({color:13938487,roughness:.2,metalness:.8})),at=new p(new Y(.008,.008,.03,8),Ht);$.position.set(de-ee/4,g+$t+.07,kt-.5),O.position.set(de-ee/4,g+$t+.08,kt-.5),at.position.set(de-ee/4,g+$t+.125,kt-.5),h.add($,O,at);const Mt=new p(new T(.28,.015,.22),new R({color:2367002,roughness:.8})),Ct=new p(new T(.26,.016,.2),new R({color:16514040,roughness:.5}));Mt.position.set(de-ee/4,g+$t+.065,kt-.1),Ct.position.set(de-ee/4,g+$t+.075,kt-.1),h.add(Mt,Ct);const Nt=new p(new Y(.015,.02,.03,8),Ht);Nt.position.set(de-ee/4+.18,g+$t+.075,kt-.1);const Kt=new p(new Y(.004,.004,.14,6),Ht);Kt.position.set(de-ee/4+.18,g+$t+.14,kt-.1),Kt.rotateZ(.15),h.add(Nt,Kt);const ae=new p(new T(.2,.05,.18),new R({color:2040616,roughness:.4}));ae.position.set(de+.05,g+$t+.08,kt+.6);const rt=new p(new T(.06,.04,.2),new R({color:1119773,roughness:.3}));rt.position.set(de+.02,g+$t+.11,kt+.6),h.add(ae,rt);const St=new p(new Y(.06,.07,.02,10),Ht);St.position.set(de+.15,g+$t+.07,kt-.6);const qt=new p(new Y(.012,.012,.28,8),Ht);qt.position.set(de+.15,g+$t+.21,kt-.6);const Jt=new p(new T(.18,.08,.1),new R({color:674347,roughness:.3,metalness:.2}));Jt.position.set(de+.12,g+$t+.33,kt-.6),h.add(St,qt,Jt);const pe=new me(16768928,1.2,3.5);pe.position.set(de+.12,g+$t+.3,kt-.6),l?l.register({x:de+.12,y:g+$t+.3,z:kt-.6,color:16768928,intensity:1.2,distance:3.5,zone:"Lobby"}):h.add(pe);const he=As("管理事務室","#18202c","#d4af37","CONCIERGE & MGMT",256,128),Ot=new p(new Xt(.24,.12),he);Ot.rotateY(-Math.PI/2),Ot.position.set(de-ee/2-.005,g+$t+.08,kt-.8),h.add(Ot);const Ze=new p(new Y(.25,.25,.04,6),Ht);Ze.position.set(de+.45,g+.06,kt+.1);const ye=new p(new Y(.025,.025,.45,8),Ht);ye.position.set(de+.45,g+.28,kt+.1);const je=new p(new T(.44,.06,.42),new R({color:1580582,roughness:.7}));je.position.set(de+.45,g+.52,kt+.1);const Mn=new p(new T(.05,.44,.4),new R({color:2239030,roughness:.6}));Mn.position.set(de+.64,g+.74,kt+.1),h.add(Ze,ye,je,Mn);const Ge=new p(new T(.08,.6,.45),new R({color:4007959,roughness:.6}));Ge.position.set(Ce-.05,g+1.5,kt-.6),h.add(Ge);const $n=new p(new T(.06,.55,.85),new R({color:1119773,roughness:.3}));$n.position.set(Ce-.04,g+1.65,kt+.6);const Ae=new p(new Xt(.8,.5),new Wt({color:2245717}));Ae.rotateY(-Math.PI/2),Ae.position.set(Ce-.075,g+1.65,kt+.6),h.add($n,Ae);const Sn=new R({map:bg(),roughness:.6}),zn=new p(new Xt(1.6,.8),Sn);zn.rotateY(-Math.PI/2),zn.position.set(Ce-.015,g+1.65,kt-.2),h.add(zn),n.add({minX:de-ee/2-.1,minY:0,minZ:kt-ve/2-.1,maxX:t.x+x/2,maxY:2.2,maxZ:kt+ve/2+.2}),e.add({id:"apt-reception-bell",x:de-ee/2-.4,z:kt-.5,radius:1.8,prompt:"Ring Concierge Desk Bell",onInteract:()=>{a==null||a.playDeskBellSound(),i.show('*Ting!* Resident Manager: "Konnichiwa! Welcome back to Sun Heights. All parcel lockers and facilities are operational."')}}),e.add({id:"apt-notice-board",x:de-ee/2-.4,z:kt-.1,radius:1.8,prompt:"Read Resident Notices",onInteract:()=>{i.show("[Lobby Notices] ① Trash: Burnable Mon/Thu, Recyclable Wed. ② Annual fire equipment check this Saturday. ③ Please collapse Amazon cardboard boxes.")}});const gn=new R({map:Tg(),roughness:.35,metalness:.2}),bn=new p(new Xt(1.4,1.05),gn);bn.rotateY(-Math.PI/2),bn.position.set(Ce-.015,g+1.6,t.z-2.2),h.add(bn);const en=1.4,Fn=.55,io=Ce-Fn/2-.25,gi=t.z-1.2,zr=new T(Fn,.06,en),Wo=new R({color:2825492,roughness:.7}),ni=new p(zr,Wo);ni.position.set(io,g+.22,gi);const xi=new T(Fn-.04,.18,en-.04),Ps=new R({color:8143650,roughness:.5}),Is=new p(xi,Ps);Is.position.set(io,g+.33,gi);for(const hn of[-Fn/2+.08,Fn/2-.08])for(const _n of[-en/2+.08,en/2-.08]){const on=new p(new Y(.02,.015,.22,8),Ht);on.position.set(io+hn,g+.11,gi+_n),h.add(on)}h.add(ni,Is),n.add({minX:io-Fn/2,minY:0,minZ:gi-en/2,maxX:Ce,maxY:1,maxZ:gi+en/2});const Ls=new Y(.24,.18,.55,12),Fr=new R({color:16119285,roughness:.3}),oo=new p(Ls,Fr),Xo=t.x-x/2+.8,Yo=t.z-w/2+.9;oo.position.set(Xo,g+.275,Yo),h.add(oo);const Tn=new R({color:3043136,roughness:.4});for(let hn=0;hn<7;hn++){const _n=new Xe(.18,.65,5);_n.rotateX(.4);const on=new p(_n,Tn);on.position.set(Xo,g+.55,Yo),on.rotateY(hn*Math.PI*2/7),h.add(on)}const We=2,cn=2.4,ze=t.z+w/2-m-.05,so=new R({color:8153418,roughness:.25,metalness:.7}),Ds=new p(new T(.12,cn+.06,.08),so);Ds.position.set(t.x-We/2-.06,g+cn/2,ze);const Zo=new p(new T(.12,cn+.06,.08),so);Zo.position.set(t.x+We/2+.06,g+cn/2,ze);const qo=new p(new T(We+.24,.12,.08),so);qo.position.set(t.x,g+cn+.06,ze),h.add(Ds,Zo,qo);const kr=new T(.98,cn,.06),Us=new T(.98,cn,.06),Di=new R({color:9081501,roughness:.25,metalness:.75}),$o=new p(kr,Di),Ui=new p(Us,Di);$o.position.set(t.x-.5,g+cn/2,ze),Ui.position.set(t.x+.5,g+cn/2,ze),h.add($o,Ui);const Or=new Xt(.45,.22),Ns=new Wt({color:16755234}),zs=new p(Or,Ns);zs.position.set(t.x,g+cn+.22,ze+.05),h.add(zs);const Fs=new p(new T(.12,.28,.03),Ht);Fs.position.set(t.x+We/2+.35,g+1.25,ze+.03);const ro=new p(new Y(.025,.025,.02,10),ti);ro.rotateX(Math.PI/2),ro.position.set(t.x+We/2+.35,g+1.28,ze+.05),h.add(Fs,ro);const xn=2,Ln=1.8,On=2.5,fn=ze+Ln/2+.05,ao=new p(new T(xn,.04,Ln),y);ao.position.set(t.x,g+.02,fn),h.add(ao);const nn=new p(new T(xn,.08,Ln),Ht);nn.position.set(t.x,g+On,fn),h.add(nn);const dn=new T(xn-.1,On-.2,.04),Ni=new R({color:13424352,roughness:.05,metalness:.9}),zi=new p(dn,Ni);zi.position.set(t.x,g+On/2,fn+Ln/2-.02),h.add(zi);const wn=new T(.04,On,Ln),ks=new p(wn,Di);ks.position.set(t.x-xn/2+.02,g+On/2,fn);const Ko=new p(wn,Di);Ko.position.set(t.x+xn/2-.02,g+On/2,fn),h.add(ks,Ko);const Jo=new Y(.02,.02,xn-.2,8);Jo.rotateZ(Math.PI/2);const jo=new p(Jo,Ht);jo.position.set(t.x,g+.9,fn+Ln/2-.1),h.add(jo);const Qo=new p(new T(.08,.7,.14),Ht);Qo.position.set(t.x+xn/2-.06,g+1.25,fn-.2),h.add(Qo);const ts=new me(16775904,2,5.5);ts.position.set(t.x,g+On-.15,fn),l?l.register({x:t.x,y:g+On-.15,z:fn,color:16775904,intensity:2,distance:5.5,zone:"Lobby"}):h.add(ts),n.add({minX:t.x-xn/2-.2,minY:0,minZ:fn+Ln/2-.1,maxX:t.x+xn/2+.2,maxY:3.2,maxZ:fn+Ln/2+.3}),n.add({minX:t.x-xn/2-.2,minY:0,minZ:ze,maxX:t.x-xn/2+.1,maxY:3.2,maxZ:fn+Ln/2}),n.add({minX:t.x+xn/2-.1,minY:0,minZ:ze,maxX:t.x+xn/2+.2,maxY:3.2,maxZ:fn+Ln/2});let wi=!1;e.add({id:"apt-elevator",x:t.x+We/2+.35,z:t.z+w/2-.8,radius:1.8,prompt:()=>wi?"Take Elevator to 4F Lounge [4階 ラウンジへ]":"Call Elevator [1階 エレベーター]",onInteract:()=>{wi?(wi=!1,a==null||a.playElevatorChime(),i.show("*Ding* Doors glide shut. Riding elevator up to 4F Lounge..."),c&&setTimeout(()=>{c.teleport(-1.15,61.5,0),f==null||f(),i.show("Sun Heights 4F Elevator Lounge. Suite 402 is down the hall to the left.",5)},450)):(wi=!0,a==null||a.playElevatorChime(),i.show("*Ding* Elevator arrives at 1F. Champagne doors glide open."))}});const Fi=new me(16771279,2.2,16,1.1);Fi.position.set(t.x,3.2-.25,t.z);const Os=new me(16769200,1.8,8,1.2);Os.position.set(de,3.2-.25,kt);const Bs=new me(16770760,1.8,8,1.2);Bs.position.set(t.x,3.2-.25,ze-1.2),l?(l.register({x:t.x,y:3.2-.25,z:t.z,color:16771279,intensity:2.2,distance:16,decay:1.1,zone:"Lobby"}),l.register({x:de,y:3.2-.25,z:kt,color:16769200,intensity:1.8,distance:8,decay:1.2,zone:"Lobby"}),l.register({x:t.x,y:3.2-.25,z:ze-1.2,color:16770760,intensity:1.8,distance:8,decay:1.2,zone:"Lobby"})):(o.add(Fi),o.add(Os),o.add(Bs));let _i=0,yi=0,ki=!1;return{light:Fi,update:(hn,_n)=>{const on=(_n.x-t.x)**2+(_n.z-t.z)**2;h.visible=Rn.isHigh()||on<784;const sn=Math.hypot(_n.x-t.x,_n.z-(t.z-w/2))<2.6?1:0;sn>.5&&!ki?(a==null||a.playSlidingDoorSound(),ki=!0):sn<.5&&(ki=!1),_i+=(sn-_i)*Math.min(1,hn*5),U.position.x=t.x-.65-_i*.75,zt.position.x=t.x+.65+_i*.75,h.visible&&(yi+=((wi?1:0)-yi)*Math.min(1,hn*4),$o.position.x=t.x-.5-yi*.75,Ui.position.x=t.x+.5+yi*.75)}}}function gx(o,t,n,e,i,s,r,a,l){const h=3.0500000000000003,x=.35,w=new Lt;w.name="konbini-interior-props",o.add(w);const g=new T(9.8,.05,11.4),m=new p(g,ag);m.position.set(t.x,.15+.025,t.z),m.receiveShadow=!0,o.add(m);const v=new T(9.8,.2,11.4),y=new R({color:16120058,roughness:.5}),_=new p(v,y);_.position.set(t.x,3.2-.1,t.z),o.add(_);const P=new R({map:gg(),roughness:.3,metalness:.05}),C=new T(x,h,11.4),A=new p(C,s);A.position.set(t.x+9.8/2-x/2,.15+h/2,t.z),o.add(A),n.add({minX:t.x+9.8/2-x,minY:0,minZ:t.z-11.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+11.4/2});const D=new p(new T(9.8,h,.04),P);D.position.set(t.x,.15+h/2,t.z+11.4/2-.02);const S=new p(new T(t.w,3.2,x),s);S.position.set(t.x,3.2/2,t.z+t.d/2-x/2),o.add(D,S);const M=new R({color:3818062,roughness:.6,metalness:.4}),L=new p(new T(1,2.1,.06),M);L.position.set(t.x-2.5,1.05,t.z+t.d/2+.01);const F=new p(new T(.5,.6,.22),Ht);F.position.set(t.x+2,1.5,t.z+t.d/2+.08),o.add(L,F),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z+11.4/2-x,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const B=new p(new T(9.8,h,.04),P);B.position.set(t.x,.15+h/2,t.z-11.4/2+.02);const Q=new p(new T(t.w,3.2,x),s);Q.position.set(t.x,3.2/2,t.z-t.d/2+x/2),o.add(B,Q),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z-t.d/2-1,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z-11.4/2+x});const q=2.4,G=(11.4-q)/2,J=new T(.1,2.4,G),X=new p(J,qe);X.position.set(t.x-9.8/2+.05,.15+1.2,t.z+11.4/2-G/2);const lt=new T(.1,2.4,G),dt=new p(lt,qe);dt.position.set(t.x-9.8/2+.05,.15+1.2,t.z-11.4/2+G/2),o.add(X,dt),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z+q/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z+11.4/2}),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z-11.4/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z-q/2});const pt=new T(.06,2.3,1.15),Et=new p(pt,qe),yt=new p(pt,qe);Et.position.set(t.x-9.8/2+.05,.15+1.15,t.z+.6),yt.position.set(t.x-9.8/2+.05,.15+1.15,t.z-.6),o.add(Et,yt);const H=new T(.4,.8,11.4),W=new p(H,r);W.position.set(t.x-9.8/2+.2,3.2-.4,t.z),o.add(W);const Z=As("CONVENIENCE 24H","#0c6c44","#ffffff","FAMILY STORE",512,160),ot=new p(new Xt(7.5,.95),Z);ot.rotateY(-Math.PI/2),ot.position.set(t.x-9.8/2-.05,3.2-.4,t.z),o.add(ot);const ut=8.6,Pt=new T(.65,2.4,ut),Vt=new R({color:1317410,roughness:.3,metalness:.5}),bt=new p(Pt,Vt);bt.position.set(t.x+9.8/2-.5,.15+1.2,t.z),w.add(bt);const mt=new Wt({map:xg(),toneMapped:!1}),oe=new p(new Xt(ut,2.2),mt);oe.rotateY(-Math.PI/2),oe.position.set(t.x+9.8/2-.84,.15+1.2,t.z),w.add(oe),n.add({minX:t.x+9.8/2-1.1,minY:0,minZ:t.z-ut/2,maxX:t.x+9.8/2,maxY:2.6,maxZ:t.z+ut/2}),e.add({id:"konbini-drinks",x:t.x+9.8/2-1.4,z:t.z,radius:2,prompt:"Open Beverage Chiller & Grab Drink",onInteract:()=>{i.show("Cold blast of air! Grabbed an ice-cold Pocari Sweat and Melty Blend Green Tea.")}}),bf(w,t.x+.8,.15,t.z+1.8,n),bf(w,t.x+.8,.15,t.z-2.2,n),e.add({id:"konbini-shelf-noodles",x:t.x+.8,z:t.z+1.8,radius:1.8,prompt:"Browse Cup Noodles & Snacks",onInteract:()=>{i.show("Nissin Seafood Cup Noodles, Curry Ramen, Calbee Seaweed Chips, and Matcha Pocky in stock.")}}),e.add({id:"konbini-shelf-bento",x:t.x+.8,z:t.z-2.2,radius:1.8,prompt:"Inspect Bento & Onigiri Shelf",onInteract:()=>{i.show("Spicy salmon onigiri, tuna mayo rice ball, and hot tonkatsu bento lunchbox ready to eat.")}});const U=3.6,zt=1.05,Rt=.98,Dt=new T(zt,Rt,U),It=new R({map:mg(),roughness:.25,metalness:.05}),Qt=new p(Dt,It);Qt.position.set(t.x-2.2,.15+Rt/2,t.z-3.4),w.add(Qt);const Tt=new T(zt+.08,.06,U+.08),I=new R({color:2040616,roughness:.25,metalness:.15}),b=new p(Tt,I);b.position.set(t.x-2.2,.15+Rt+.03,t.z-3.4),w.add(b),n.add({minX:t.x-2.2-zt/2-.1,minY:0,minZ:t.z-3.4-U/2,maxX:t.x-2.2+zt/2+.1,maxY:1.5,maxZ:t.z-3.4+U/2});const V=new p(new Y(.04,.04,.2,8),Ht);V.position.set(t.x-2.2,.15+Rt+.16,t.z-3.8);const it=new p(new T(.36,.26,.04),new Wt({color:1740620}));it.position.set(t.x-2.2,.15+Rt+.3,t.z-3.8),it.rotateX(-.2),w.add(V,it);const nt=new p(new T(.14,.06,.2),new R({color:1118481,roughness:.3}));nt.position.set(t.x-1.85,.15+Rt+.09,t.z-3.6),nt.rotateX(.15),w.add(nt);const et=new T(.18,.02,.14),vt=new R({color:30668,roughness:.3}),gt=new p(et,vt);gt.position.set(t.x-1.85,.15+Rt+.07,t.z-4),w.add(gt);const ht=.95,Ut=.65,ct=.55,At=new Lt;At.position.set(t.x-2,.15+Rt+.06,t.z-2.3);const Yt=new p(new T(ct,Ut,ht),Ht);Yt.position.set(0,Ut/2,0),At.add(Yt);const le=new Wt({map:wg(),toneMapped:!1}),Ft=new p(new Xt(ht*.95,.22),le);Ft.rotateY(Math.PI/2),Ft.position.set(ct/2+.01,Ut-.12,0),At.add(Ft);const te=new p(new Xt(ht*.95,Ut*.55),qe);te.rotateY(Math.PI/2),te.position.set(ct/2+.01,Ut*.38,0),At.add(te);const Bt=new T(.08,.035,.14),re=new R({color:14254616,roughness:.85});for(let Me=0;Me<3;Me++){const Te=new p(Bt,re);Te.position.set(0,.18,-.28+Me*.28),At.add(Te)}const z=new Re(.055,10,8);z.scale(1,.6,1);const xt=new R({color:16776437,roughness:.9});for(let Me=0;Me<3;Me++){const Te=new p(z,xt);Te.position.set(0,.36,-.28+Me*.28),At.add(Te)}const j=new me(16742161,2.2,4.5);j.position.set(0,Ut-.1,0),l?l.register({x:t.x-2,y:.15+Rt+.06+Ut-.1,z:t.z-2.3,color:16742161,intensity:2.2,distance:4.5,zone:"Konbini"}):At.add(j),w.add(At);const st=new T(.52,.45,.48),wt=new p(st,Ht);wt.position.set(t.x-2.8,.15+Rt+.28,t.z-4.5),w.add(wt);const _t=new T(.42,.62,.42),Zt=new R({color:2040616,roughness:.3,metalness:.6}),fe=new p(_t,Zt);fe.position.set(t.x-2.8,.15+Rt+.36,t.z-1.8),w.add(fe);const be=new T(.35,1.25,2.6),ce=new R({color:4015182,metalness:.6,roughness:.3}),Le=new p(be,ce);Le.position.set(t.x-9.8/2+.65,.15+.65,t.z+3.4),w.add(Le);const Ne=[14231064,1599700,2066488,15902298,9055202,16738740];for(let Me=0;Me<8;Me++){const Te=new p(new T(.06,.24,.28),new R({color:Ne[Me%Ne.length],roughness:.4}));Te.position.set(t.x-9.8/2+.68,.15+.85,t.z+2.3+Me*.3),Te.rotateZ(.2),w.add(Te)}const Ve=new T(.75,1.95,.68),Fe=new R({color:1005876,roughness:.35}),Ce=new p(Ve,Fe);Ce.position.set(t.x-9.8/2+.55,.15+.98,t.z-4.6),w.add(Ce);const ee=new p(new Xt(.44,.32),new Wt({color:3728798}));ee.rotateY(Math.PI/2),ee.position.set(t.x-9.8/2+.94,.15+1.35,t.z-4.6),w.add(ee),e.add({id:"konbini-famichiki",x:t.x-2,z:t.z-2.3,radius:1.8,prompt:"Buy Hot FamiChiki Fried Chicken [¥220]",onInteract:()=>{i.show("*Warm & Crispy!* You received piping hot FamiChiki in its tear-open paper pouch.")}}),e.add({id:"konbini-pay",x:t.x-1.8,z:t.z-3.6,radius:1.8,prompt:"Pay at Register with Suica / Cash [¥420]",onInteract:()=>{i.show('*Pii-rin!* "Arigatou gozaimashita!" Suica card accepted.')}});const $t=new me(16777215,2.8,18,1.1);$t.position.set(t.x,3.2-.35,t.z);const ve=new me(16774634,2,9,1.2);ve.position.set(t.x-2,3.2-.35,t.z-3.2);const de=new me(15792383,2,14,1.2);de.position.set(t.x+1.8,3.2-.35,t.z),l?(l.register({x:t.x,y:3.2-.35,z:t.z,color:16777215,intensity:2.8,distance:18,decay:1.1,zone:"Konbini"}),l.register({x:t.x-2,y:3.2-.35,z:t.z-3.2,color:16774634,intensity:2,distance:9,decay:1.2,zone:"Konbini"}),l.register({x:t.x+1.8,y:3.2-.35,z:t.z,color:15792383,intensity:2,distance:14,decay:1.2,zone:"Konbini"})):(o.add($t),o.add(ve),o.add(de));for(let Me=-3.2;Me<=3.2;Me+=2.2){const Te=new Lt;Te.position.set(t.x,3.2-.08,t.z+Me);const ne=new p(new T(4.2,.08,.35),Ht);Te.add(ne);const ie=new p(new T(4,.03,.08),ti);ie.position.set(0,-.04,-.08);const E=new p(new T(4,.03,.08),ti);E.position.set(0,-.04,.08),Te.add(ie,E),w.add(Te)}let kt=0,Be=!1;return{light:$t,update:(Me,Te)=>{const ne=(Te.x-t.x)**2+(Te.z-t.z)**2;w.visible=Rn.isHigh()||ne<784;const E=Math.hypot(Te.x-(t.x-9.8/2),Te.z-t.z)<2.8?1:0;E>.5&&!Be?(a==null||a.playFamilyMartChime(),a==null||a.playSlidingDoorSound(),Be=!0):E<.5&&(Be=!1),kt+=(E-kt)*Math.min(1,Me*5),Et.position.z=t.z+.6+kt*.7,yt.position.z=t.z-.6-kt*.7}}}function bf(o,t,n,e,i){const l=new T(.95,.16,4.8),c=new R({color:15265008,roughness:.35,metalness:.4}),f=new p(l,c);f.position.set(t,n+.08,e),f.castShadow=!0,o.add(f);const d=new T(.04,1.55,4.8),u=new R({color:16777215,roughness:.4}),h=new p(d,u);h.position.set(t,n+1.55/2,e),o.add(h);const x=new R({color:883270,roughness:.35}),w=new T(.95+.04,1.55,.08),g=new p(w,x);g.position.set(t,n+1.55/2,e-4.8/2);const m=new p(w,x);m.position.set(t,n+1.55/2,e+4.8/2),o.add(g,m);const v=As("新発売 NEW","#ffaa00","#221100","RECOMMENDED",256,128),y=new p(new Xt(.7,.35),v);y.position.set(t,n+1.55-.25,e-4.8/2-.05);const _=new p(new Xt(.7,.35),v);_.position.set(t,n+1.55-.25,e+4.8/2+.05),_.rotateY(Math.PI),o.add(y,_);const P=new R({color:16119802,roughness:.3,metalness:.2}),C=new Wt({color:14231064}),A=new Wt({color:32972}),D=new R({color:14231064,roughness:.4}),S=new R({color:1599700,roughness:.4}),M=new R({color:14264358,roughness:.3,metalness:.4}),L=new R({color:2066488,roughness:.4}),F=new R({color:15887133,roughness:.4}),B=new R({color:1579032,roughness:.8}),Q=new R({color:16316664,roughness:.5});for(let q=0;q<4;q++){const G=n+.22+q*.38;for(const J of[-1,1]){const X=new T(.42,.03,4.7),lt=new p(X,P);lt.position.set(t+J*.24,G,e),o.add(lt);const dt=new T(.02,.04,4.8-.1),pt=new p(dt,q%2===0?C:A);if(pt.position.set(t+J*.45,G,e),o.add(pt),q===3){const Et=new Y(.055,.042,.12,10),yt=14;for(let H=0;H<yt;H++){const W=e-2.4+.35+H*.3,Z=H%3===0?D:H%3===1?S:M,ot=new p(Et,Z);ot.position.set(t+J*.26,G+.075,W);const ut=new ln(.057,10);ut.rotateX(-Math.PI/2);const Pt=new p(ut,Q);Pt.position.set(t+J*.26,G+.136,W),o.add(ot,Pt)}}else if(q===2){const Et=new T(.04,.16,.09),yt=16;for(let H=0;H<yt;H++){const W=e-2.4+.3+H*.26,Z=H%4===0?D:H%4===1?L:H%4===2?F:S,ot=new p(Et,Z);ot.position.set(t+J*.26,G+.095,W),o.add(ot)}}else if(q===1){const Et=new Xe(.055,.09,3),yt=new T(.22,.05,.16);for(let H=0;H<10;H++){const W=e-2.4+.4+H*.42;if(H%2===0){const Z=new p(Et,B);Z.position.set(t+J*.26,G+.06,W),o.add(Z)}else{const Z=new p(yt,B);Z.position.set(t+J*.26,G+.04,W);const ot=new p(new T(.18,.02,.12),Q);ot.position.set(t+J*.26,G+.066,W);const ut=new p(new T(.08,.025,.06),M);ut.position.set(t+J*.26,G+.08,W),o.add(Z,ot,ut)}}}else{const Et=new Y(.04,.04,.14,8);for(let yt=0;yt<14;yt++){const H=e-2.4+.35+yt*.3,W=yt%3===0?L:yt%3===1?S:M,Z=new p(Et,W);Z.position.set(t+J*.26,G+.08,H),o.add(Z)}}}}i.add({minX:t-.95/2-.1,minY:n,minZ:e-4.8/2,maxX:t+.95/2+.1,maxY:n+1.55,maxZ:e+4.8/2})}function xx(o,t,n,e,i,s,r,a,l){const h=3.0500000000000003,x=.35,w=new Lt;w.name="ramen-interior-props",o.add(w);const g=new R({map:Ig(),roughness:.45,metalness:.08}),m=new T(5.8,.05,7.4),v=new p(m,g);v.position.set(t.x,.15+.025,t.z),v.receiveShadow=!0,o.add(v);const y=new R({color:2364940,roughness:.7}),_=new T(5.8,.2,7.4),P=new p(_,y);P.position.set(t.x,3.2-.1,t.z),o.add(P);const C=new R({color:4006932,roughness:.6});for(const rt of[-1.8,0,1.8]){const St=new p(new T(5.8,.16,.18),C);St.position.set(t.x,3.2-.16,t.z+rt),o.add(St)}const A=new R({map:Pg(),roughness:.6,metalness:.02}),D=new T(5.8,h,x),S=new p(D,A);S.position.set(t.x,.15+h/2,t.z+7.4/2-x/2),o.add(S),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z+7.4/2-x,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const M=new T(x,h,7.4),L=new p(M,A);L.position.set(t.x-5.8/2+x/2,.15+h/2,t.z),o.add(L),n.add({minX:t.x-t.w/2-1,minY:0,minZ:t.z-7.4/2,maxX:t.x-5.8/2+x,maxY:3.2,maxZ:t.z+7.4/2});const F=new T(x,h,7.4),B=new p(F,A);B.position.set(t.x+5.8/2-x/2,.15+h/2,t.z),o.add(B),n.add({minX:t.x+5.8/2-x,minY:0,minZ:t.z-7.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+7.4/2});const Q=2,q=(5.8-Q)/2,G=new R({color:1840915,roughness:.85}),J=new T(q,h,x),X=new p(J,G);X.position.set(t.x-5.8/2+q/2,.15+h/2,t.z-7.4/2+x/2),o.add(X),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z-7.4/2,maxX:t.x-Q/2,maxY:3.2,maxZ:t.z-7.4/2+x});const lt=new T(q,h,x),dt=new p(lt,G);dt.position.set(t.x+5.8/2-q/2,.15+h/2,t.z-7.4/2+x/2),o.add(dt),n.add({minX:t.x+Q/2,minY:0,minZ:t.z-7.4/2,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z-7.4/2+x});const pt=new p(new T(Q,.45,x),r);pt.position.set(t.x,3.2-.225,t.z-7.4/2+x/2),o.add(pt);const Et=4.8,yt=.65,H=new T(Et,.08,yt),W=new R({color:2237997,roughness:.5,metalness:.2}),Z=new p(H,W);Z.rotateX(.18),Z.position.set(t.x,3.2+.05,t.z-7.4/2-.25),o.add(Z);for(const rt of[-1.9,-.6,.6,1.9]){const St=new p(new T(.08,.22,.35),C);St.position.set(t.x+rt,3.2-.12,t.z-7.4/2-.15),o.add(St)}const ot=new R({map:Eg(),roughness:.4,metalness:.05}),ut=new p(new T(4.4,.82,.1),ot);ut.position.set(t.x,3.2-.45,t.z-7.4/2-.08),o.add(ut);for(const rt of[-1.3,1.3]){const St=new p(new Y(.012,.012,.25,8),Ht);St.rotateX(Math.PI/4),St.position.set(t.x+rt,3.2-.05,t.z-7.4/2-.18);const qt=new p(new Xe(.06,.08,10),Ht);qt.rotateX(-Math.PI/3),qt.position.set(t.x+rt,3.2-.12,t.z-7.4/2-.26),o.add(St,qt);const Jt=new me(16775904,1.2,2.5);Jt.position.set(t.x+rt,3.2-.16,t.z-7.4/2-.25),l?l.register({x:t.x+rt,y:3.2-.16,z:t.z-7.4/2-.25,color:16775904,intensity:1.2,distance:2.5,zone:"Street"}):o.add(Jt)}const Pt=3.2-1.25,Vt=t.z-7.4/2-.38,bt=(rt,St)=>{const qt=new Lt;qt.position.set(rt,Pt,Vt);const Jt=new p(new Y(.014,.014,.38,8),Oe);Jt.rotateX(Math.PI/2),Jt.position.set(0,.38,.18);const pe=new p(new Je(.025,.006,6,12),Oe);pe.position.set(0,.38,0),qt.add(Jt,pe);const he=new p(new Y(.005,.005,.14,6),Ht);he.position.set(0,.31,0),qt.add(he);const Ot=new p(new Y(.12,.16,.05,16),Oe);Ot.position.set(0,.22,0),qt.add(Ot);const Ze=new R({map:Ag(St),roughness:.5,metalness:.05,emissive:new _e(14165528),emissiveIntensity:.35}),ye=new Y(.18,.18,.44,16),je=new p(ye,Ze);qt.add(je);const Mn=new p(new Y(.16,.12,.05,16),Oe);Mn.position.set(0,-.22,0),qt.add(Mn);const Ge=new me(16733474,1.4,4.2);return Ge.position.set(0,0,0),l?l.register({x:rt,y:Pt,z:Vt,color:16733474,intensity:1.4,distance:4.2,zone:"Street"}):qt.add(Ge),qt},mt=bt(t.x-1.45,"らーめん"),oe=bt(t.x+1.45,"味自慢");o.add(mt,oe);const U=new Y(.016,.016,Q+.15,8);U.rotateZ(Math.PI/2);const zt=new p(U,C);zt.position.set(t.x,3.2-.72,t.z-7.4/2-.06),o.add(zt);const Rt=new R({map:Rg(),roughness:.85,side:pn}),Dt=new p(new Xt(Q*.96,.72),Rt);Dt.position.set(t.x,3.2-1.1,t.z-7.4/2-.07),o.add(Dt);const It=.68,Qt=1.62,Tt=.52,I=t.x-1.78,b=t.z-7.4/2-.28,V=new p(new T(It,Qt,Tt),new R({color:14210252,roughness:.4,metalness:.2}));V.position.set(I,.15+Qt/2,b),o.add(V);const it=new R({map:Cg(),roughness:.35,metalness:.1}),nt=new p(new Xt(It*.95,Qt*.95),it);nt.position.set(I,.15+Qt/2,b-Tt/2-.005),nt.rotateY(Math.PI),o.add(nt),n.add({minX:I-It/2-.05,minY:0,minZ:b-Tt/2,maxX:I+It/2+.05,maxY:Qt,maxZ:b+Tt/2+.1}),e.add({id:"ramen-kenbaiki",x:I,z:b-.6,radius:1.8,prompt:"Buy Ramen Ticket at Kenbaiki [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),i.show("*Chink! Zzzzt!* Purchased [Special Tonkotsu Ramen ¥980]. Step inside and hand your ticket to Master at the counter!")}});const et=4.2,vt=.98,gt=.72,ht=t.x,Ut=t.z+.1,ct=new T(et,vt,gt),At=new R({color:2825234,roughness:.6}),Yt=new p(ct,At);Yt.position.set(ht,.15+vt/2,Ut),w.add(Yt);const le=new T(et+.12,.06,gt+.08),Ft=new R({color:11367746,roughness:.28,metalness:.05}),te=new p(le,Ft);te.position.set(ht,.15+vt+.03,Ut),w.add(te);const Bt=new T(et+.12,.18,.24),re=new R({color:9065514,roughness:.35}),z=new p(Bt,re);z.position.set(ht,.15+vt+.12,Ut+gt/2-.12),w.add(z);const xt=new R({color:1579036,roughness:.5}),j=new R({color:4006932,roughness:.5});for(let rt=0;rt<4;rt++){const St=t.x-1.5+rt*1,qt=Ut-gt/2-.38,Jt=new p(new Y(.18,.18,.03,12),Ht);Jt.position.set(St,.15+.015,qt);const pe=new p(new Y(.025,.025,.48,8),j);pe.position.set(St,.15+.255,qt);const he=new p(new Je(.12,.01,6,12),Ht);he.rotateX(Math.PI/2),he.position.set(St,.15+.18,qt);const Ot=new p(new Y(.19,.19,.08,14),xt);Ot.position.set(St,.15+.53,qt),w.add(Jt,pe,he,Ot)}const st=.28,wt=.14,_t=t.x-.5,Zt=Ut-.08,fe=.15+vt+.06,be=new p(new Y(st/2,st*.28,wt,16,1,!0),new R({color:1579032,roughness:.15,side:pn}));be.position.set(_t,fe+wt/2,Zt),w.add(be);const ce=new p(new ln(st*.46,16),new R({color:13934677,roughness:.25}));ce.rotateX(-Math.PI/2),ce.position.set(_t,fe+wt-.015,Zt),w.add(ce);const Le=new p(new Je(.065,.012,6,12),new R({color:16109665,roughness:.6}));Le.rotateX(Math.PI/2),Le.position.set(_t+.02,fe+wt-.008,Zt),w.add(Le);for(let rt=0;rt<2;rt++){const St=new p(new Y(.038,.038,.01,10),new R({color:10176037,roughness:.7}));St.position.set(_t-.04+rt*.05,fe+wt,Zt-.03+rt*.04),w.add(St)}const Ne=new p(new Y(.03,.03,.01,10),new R({color:16514038,roughness:.5}));Ne.position.set(_t+.05,fe+wt,Zt-.04);const Ve=new p(new Y(.018,.018,.012,8),new R({color:16753920,roughness:.3}));Ve.position.set(_t+.05,fe+wt+.002,Zt-.04),w.add(Ne,Ve);const Fe=new p(new Xt(.065,.09),new R({color:1316884,roughness:.9,side:pn}));Fe.rotateY(-.3),Fe.position.set(_t-.07,fe+wt+.04,Zt-.05),w.add(Fe);const Ce=new p(new Y(.025,.025,.008,8),new R({color:2263842,roughness:.8}));Ce.position.set(_t,fe+wt+.002,Zt+.04),w.add(Ce);const ee=[];for(let rt=0;rt<4;rt++){const St=new p(new Xt(.22,.22),yf);St.position.set(_t+(Math.random()-.5)*.08,fe+.12+rt*.16,Zt),w.add(St),ee.push(St)}const $t=new Y(.035,.035,.12,10),ve=new p($t,new R({color:1119773,roughness:.2,metalness:.1}));ve.position.set(t.x+.9,fe+.06,Ut);const de=new p($t,new R({color:12853266,roughness:.3}));de.position.set(t.x+1.05,fe+.06,Ut);const kt=new p(new Y(.025,.025,.09,8),Ht);kt.position.set(t.x+1.18,fe+.045,Ut),w.add(ve,de,kt);const Be=new p(new T(.12,.18,.14),new R({color:5911582,roughness:.6}));Be.position.set(t.x+1.4,fe+.09,Ut);const Ye=new p(new T(.08,.08,.1),new R({color:16119278,roughness:.8}));Ye.position.set(t.x+1.4,fe+.2,Ut),w.add(Be,Ye);const Me=new p(new Y(.06,.07,.22,10),new R({color:14213352,roughness:.2,metalness:.8}));Me.position.set(t.x-1.4,fe+.11,Ut);const Te=new p(new Y(.032,.028,.09,8),qe);Te.position.set(t.x-1.22,fe+.045,Ut),w.add(Me,Te);const ne=t.z+1.7,ie=4.2,E=.92,k=new p(new T(ie,E,.85),new R({color:9081500,roughness:.35,metalness:.75}));k.position.set(t.x,.15+E/2,ne),w.add(k);const K=new p(new T(ie*.9,.45,.95),new R({color:7239298,roughness:.3,metalness:.8}));K.position.set(t.x,3.2-.45,ne),w.add(K);const $=new me(16773341,2.2,5.5);$.position.set(t.x,3.2-.65,ne),l?l.register({x:t.x,y:3.2-.65,z:ne,color:16773341,intensity:2.2,distance:5.5,zone:"Ramen"}):w.add($);const O=new Y(.24,.24,.48,14);for(let rt=0;rt<2;rt++){const St=t.x-.9+rt*.58,qt=new p(O,Ht);qt.position.set(St,.15+E+.24,ne-.05);const Jt=new p(new ln(.22,12),new R({color:13143874,roughness:.4}));Jt.rotateX(-Math.PI/2),Jt.position.set(St,.15+E+.46,ne-.05);const pe=new p(new Je(.04,.008,4,8),Ht);pe.position.set(St-.25,.15+E+.4,ne-.05);const he=new p(new Je(.04,.008,4,8),Ht);he.position.set(St+.25,.15+E+.4,ne-.05),w.add(qt,Jt,pe,he);for(let Ot=0;Ot<3;Ot++){const Ze=new p(new Xt(.35,.35),yf);Ze.position.set(St+(Math.random()-.5)*.1,.15+E+.55+Ot*.25,ne-.05),w.add(Ze),ee.push(Ze)}}const at=new T(.55,.35,.48),Mt=new p(at,Ht);Mt.position.set(t.x+.7,.15+E+.18,ne-.05),w.add(Mt);for(let rt=0;rt<2;rt++){const St=new p(new Y(.012,.012,.24,6),new R({color:5911582}));St.rotateX(.3),St.position.set(t.x+.6+rt*.18,.15+E+.42,ne-.2),w.add(St)}for(let rt=0;rt<4;rt++){const St=new p(new Y(.14,.08,.08,12,1,!0),new R({color:rt%2===0?14165528:16316664,roughness:.2}));St.position.set(t.x+1.5,.15+E+.04+rt*.05,ne),w.add(St)}["特製豚骨 ¥980","チャーシュー麺 ¥1100","濃厚魚介味噌 ¥950","辛味噌らーめん ¥920","替玉(一玉) ¥150","博多一口餃子 ¥380"].forEach((rt,St)=>{const qt=As(rt,"#e2caa0","#1c1208",void 0,256,64),Jt=new p(new Xt(.38,.85),qt);Jt.position.set(t.x-1.6+St*.64,.15+2.05,t.z+7.4/2-x-.02),w.add(Jt)}),n.add({minX:ht-et/2-.1,minY:0,minZ:Ut-gt/2,maxX:ht+et/2+.1,maxY:1.5,maxZ:t.z+7.4/2}),e.add({id:"ramen-counter",x:t.x-.5,z:Ut-.8,radius:1.8,prompt:"Sit at Ramen Bar & Order Special Chashu Tonkotsu [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),i.show('"Hai, irasshai!" Master presents a steaming bowl of rich garlic tonkotsu ramen with tender chashu, soft-boiled ajitama, and wavy handmade noodles. It smells incredible!')}});for(const rt of[-1,1]){const St=new p(new Y(.004,.004,.75,6),Oe);St.position.set(t.x+rt,3.2-.45,Ut);const qt=new p(new Xe(.18,.14,12,1,!0),new R({color:1582106,roughness:.4}));qt.position.set(t.x+rt,3.2-.82,Ut),w.add(St,qt);const Jt=new me(16753988,1.8,6.5,1.2);Jt.position.set(t.x+rt,3.2-.9,Ut),l?l.register({x:t.x+rt,y:3.2-.9,z:Ut,color:16753988,intensity:1.8,distance:6.5,decay:1.2,zone:"Ramen"}):w.add(Jt)}const Nt=new me(16750916,2.2,14,1.1);Nt.position.set(t.x,3.2-.35,t.z),l?l.register({x:t.x,y:3.2-.35,z:t.z,color:16750916,intensity:2.2,distance:14,decay:1.1,zone:"Ramen"}):o.add(Nt);let Kt=0;return{light:Nt,update:(rt,St)=>{const qt=(St.x-t.x)**2+(St.z-t.z)**2;w.visible=Rn.isHigh()||qt<784,Kt+=rt;const Jt=Math.sin(Kt*2)*.05;mt.rotation.z=Jt,oe.rotation.z=-Jt,w.visible&&ee.forEach((pe,he)=>{const Ot=(Kt*.55+he*.18)%1;pe.position.y+=rt*.25,pe.scale.setScalar(.75+Ot*.85),pe.rotation.z+=rt*.15})}}}function bo(o){const t=new Lt,n=.92,e=.5,i=.16,s=new Y(.012,.012,n,6),r=o==="izakaya"||o==="cafe"||o==="bookstore"?new R({color:4007706,roughness:.7}):Oe;for(const _ of[-1,1]){const P=_*e/2,C=new p(s,r);C.position.set(P,n/2,.07),C.rotation.x=-i,t.add(C);const A=new p(s,r);A.position.set(P,n/2,-.07),A.rotation.x=i,t.add(A)}const a=new Y(.012,.012,e+.04,6);a.rotateZ(Math.PI/2);const l=new p(a,Ht);l.position.set(0,n-.02,0),t.add(l);const c=new Y(.008,.008,e,6);c.rotateZ(Math.PI/2);const f=new p(c,Ht);f.position.set(0,.15,0),t.add(f);const d=new R({color:o==="dental"||o==="cleaners"?2381982:3818062,roughness:.55}),u=new T(e*.78,.09,.2),h=new p(u,d);h.position.set(0,.16,0),t.add(h);const x=new Y(.02,.02,.02,8),w=new p(x,Ht);w.position.set(.12,.21,0),t.add(w);const g=new Wt({map:Wg(o),toneMapped:!1}),m=new Xt(e-.04,.68),v=new p(m,g);v.position.set(0,.46,.075),v.rotation.x=-i,t.add(v);const y=new p(m,g);return y.position.set(0,.46,-.075),y.rotation.x=i,y.rotation.y=Math.PI,t.add(y),t}function fs(){const o=new Lt,t=.38,n=.55,e=.22,i=new T(t,n,e),s=new R({color:9082016,metalness:.85,roughness:.25,wireframe:!0}),r=new p(i,s);r.position.set(0,n/2,0),o.add(r);const a=new R({color:2237997,roughness:.6,metalness:.4}),l=new p(new T(t+.02,.04,e+.02),a);l.position.set(0,.02,0),o.add(l);const c=new R({color:14544632,roughness:.15,transparent:!0,opacity:.6}),f=new R({color:1711136,roughness:.3});return[{x:-.1,z:-.04,rx:.06,rz:-.08},{x:.08,z:.03,rx:-.05,rz:.09},{x:-.02,z:.05,rx:.08,rz:.04}].forEach(u=>{const h=new Lt;h.position.set(u.x,.1,u.z),h.rotation.x=u.rx,h.rotation.z=u.rz;const x=new p(new Y(.006,.006,.72,6),Ht);x.position.set(0,.36,0);const w=new p(new Xe(.032,.48,8),c);w.position.set(0,.28,0);const g=new p(new Je(.032,.009,6,12,Math.PI),f);g.position.set(.032,.72,0),g.rotation.z=Math.PI/2,h.add(x,w,g),o.add(h)}),o}function wx(){const o=new Lt,t=new R({color:4336925,roughness:.75}),n=new p(new T(.56,.04,.46),t);n.position.set(0,.2,0),o.add(n);for(const d of[-.22,.22])for(const u of[-.18,.18]){const h=new p(new T(.05,.2,.05),t);h.position.set(d,.1,u),o.add(h)}const e=new R({color:12886895,roughness:.88}),i=new Y(.24,.24,.48,16),s=new p(i,e);s.position.set(0,.46,0),o.add(s);const r=new R({color:5913892,roughness:.8});for(const d of[.32,.6]){const u=new p(new Je(.245,.014,6,16),r);u.position.set(0,d,0),u.rotation.x=Math.PI/2,o.add(u)}const a=new R({color:16777215,roughness:.5}),l=new p(new ln(.12,16),a);l.position.set(0,.46,.245),o.add(l);const c=new Wt({color:13379869,toneMapped:!1}),f=new p(new Xt(.07,.07),c);return f.position.set(0,.46,.248),o.add(f),o}function Tf(o,t=!1){const n=new Lt,e=new Y(.012,.012,.44,6);e.rotateX(Math.PI/2);const i=new p(e,Oe);i.position.set(0,.35,.22);const s=new p(e,Oe);s.position.set(0,-.35,.22),n.add(i,s);const r=.12,a=.88,l=.42,c=new R({color:2238512,roughness:.4,metalness:.6}),f=new p(new T(r,a,l),c);f.position.set(0,0,.42),n.add(f);const d=new Wt({color:o==="dental"?14218746:14220014,toneMapped:!1}),u=new Xt(l-.04,a-.04);for(const h of[-1,1]){const x=new p(u,d);if(x.position.set(h*(r/2+.005),0,.42),x.rotation.y=h*Math.PI/2,n.add(x),o==="pharmacy"){const w=new Wt({color:43115,toneMapped:!1}),g=new p(new Xt(.07,.24),w);g.position.set(h*(r/2+.008),.08,.42),g.rotation.y=h*Math.PI/2;const m=new p(new Xt(.24,.07),w);m.position.set(h*(r/2+.008),.08,.42),m.rotation.y=h*Math.PI/2,n.add(g,m)}else{const w=new Wt({color:2062988,toneMapped:!1}),g=new p(new ln(.12,16),w);g.position.set(h*(r/2+.008),.08,.42),g.rotation.y=h*Math.PI/2,n.add(g)}}if(!t){const h=new me(o==="dental"?10217717:9369039,.8,3.5);h.position.set(0,0,.45),n.add(h)}return n}function _x(){const o=new Lt,t=.82,n=.85,e=.48,i=new R({color:4014922,roughness:.5,metalness:.6}),s=new p(new T(t,n-.12,e),i);s.position.set(0,n/2,0),o.add(s);const r=new Y(.04,.04,.02,8);r.rotateZ(Math.PI/2);for(const f of[-.34,.34])for(const d of[-.18,.18]){const u=new p(r,Oe);u.position.set(f,.04,d),o.add(u)}const a=[10365483,2381982,1996869,14251812,5976714,1975344];for(let f=-.32;f<.34;f+=.075){const d=a[Math.floor(Math.random()*a.length)],u=new R({color:d,roughness:.7}),h=new p(new T(.065,.18,.36),u);h.position.set(f,n+.08,0),h.rotation.y=(Math.random()-.5)*.15,o.add(h)}const l=new Wt({color:16765243,toneMapped:!1}),c=new p(new Xt(.32,.14),l);return c.position.set(0,n-.08,e/2+.01),o.add(c),o}function yx(o,t,n,e,i,s,r){const l=t.w/2,c=t.d/2,f=t.front==="s"||t.front==="n"?t.w:t.d,d=new Lt;let u=0,h=t.x,x=t.z;t.front==="s"?(u=Math.PI,h=t.x,x=t.z-c):t.front==="n"?(u=0,h=t.x,x=t.z+c):t.front==="w"?(u=-Math.PI/2,h=t.x-l,x=t.z):t.front==="e"&&(u=Math.PI/2,h=t.x+l,x=t.z),d.position.set(h,0,x),d.rotation.y=u,o.add(d);function w(q,G){return t.front==="s"?{x:t.x-q,z:t.z-c-G}:t.front==="n"?{x:t.x+q,z:t.z+c+G}:t.front==="w"?{x:t.x-l-G,z:t.z-q}:{x:t.x+l+G,z:t.z+q}}let g="residential";t.id==="b-se-mansion"?g="dental":t.id==="b-nw-mansion"?g="cleaners":t.id==="b-sw-commercial"?g="izakaya":t.id==="b-ne-apartments"?g="pharmacy":t.id==="b-fe-north"?g="bookstore":t.id==="b-cafe"&&(g="cafe");const m=new R({color:1975340,roughness:.35,metalness:.7});if(g==="dental"){const G=new R({color:14542571,roughness:.45,metalness:.1}),J=new p(new T(10.8+.4,3.2,.08),G);J.position.set(0,3.2/2,-.02),d.add(J);const X=5.6,lt=2.25,dt=-2,pt=new Wt({map:Lg(),toneMapped:!1}),Et=new p(new Xt(X,lt),pt);Et.position.set(dt,1.25,.04),d.add(Et);const yt=new p(new T(X+.1,.06,.08),m);yt.position.set(dt,1.25+lt/2,.05);const H=new p(new T(X+.1,.12,.08),m);H.position.set(dt,.06,.05),d.add(yt,H);for(const ht of[-X/6,X/6]){const Ut=new p(new T(.04,lt,.06),m);Ut.position.set(dt+ht,1.25,.05),d.add(Ut)}const W=2.4,Z=2.4,ot=new p(new T(W+.16,2.3,.12),m);ot.position.set(Z,1.2,.02),d.add(ot);const ut=new T(W*.48,2.18,.04),Pt=new p(ut,qe);Pt.position.set(Z-W*.24,1.18,.03);const Vt=new p(ut,qe);Vt.position.set(Z+W*.24,1.18,.05),d.add(Pt,Vt);const bt=new p(new T(.04,.18,.02),Ht);bt.position.set(Z-.06,1.15,.07),d.add(bt);const mt=new T(W+.6,.06,.9),oe=new p(mt,Ht);if(oe.position.set(Z,2.45,.45),d.add(oe),r){const ht=w(Z,.45);r.register({x:ht.x,y:2.38,z:ht.z,color:15924223,intensity:1.4,distance:4,decay:1.2,zone:"Street"})}else{const ht=new me(15924223,1.4,4,1.2);ht.position.set(Z,2.38,.45),d.add(ht)}const U=new R({color:1914429,roughness:.95}),zt=new p(new T(W*.9,.02,.95),U);zt.position.set(Z,.012,.55),d.add(zt);const Rt=7.6,Dt=.82,It=new Wt({map:Dg(),toneMapped:!1}),Qt=new p(new T(Rt,Dt,.15),It);Qt.position.set(0,2.76,.12),d.add(Qt);const Tt=new p(new T(Rt+.12,Dt+.1,.18),m);Tt.position.set(0,2.76,.1),d.add(Tt);for(const ht of[-2.4,2.4]){const Ut=new p(new Y(.012,.012,.35,6),Ht);Ut.rotation.x=Math.PI/3,Ut.position.set(ht,3.22,.25);const ct=new p(new T(.18,.08,.12),Ht);ct.position.set(ht,3.28,.38),d.add(Ut,ct)}if(r){const ht=w(0,.5);r.register({x:ht.x,y:3.15,z:ht.z,color:14481146,intensity:1.9,distance:7.5,decay:1.2,zone:"Street"})}else{const ht=new me(14481146,1.9,7.5,1.2);ht.position.set(0,3.15,.5),d.add(ht)}const I=Tf("dental",!!r);I.position.set(10.8/2+.1,2.4,.25),d.add(I);const b=bo("dental");b.position.set(-3.8,0,.85),b.rotation.y=.14,d.add(b);const V=fs();V.position.set(Z+W/2+.35,0,.35),d.add(V);const it=new R({color:15724006,roughness:.5}),nt=new p(new Y(.18,.14,.45,12),it);nt.position.set(.9,.225,.35);const et=new R({color:2250032,roughness:.6}),vt=new p(new Re(.24,10,10),et);vt.position.set(.9,.55,.35),d.add(nt,vt);const gt=w(Z,1.1);e.add({id:"sf-dental-clinic",x:gt.x,z:gt.z,radius:2.2,prompt:"Inspect Dental Clinic & Reception",onInteract:()=>{s&&s.playDeskBellSound(),i.show("パークサイド歯科: 『本日は予約優先制となっております。歯のクリーニング、定期検診、急患の診療は随時受付中（TEL 03-3456-7890）』")}});return}if(g==="cleaners"){const G=new R({color:1917824,roughness:.85}),J=new T(10.8*.92,.08,1.25);J.rotateX(.18);const X=new p(J,G);X.position.set(0,2.45,.6);const lt=new p(new T(10.8*.92,.22,.03),G);lt.position.set(0,2.24,1.18),d.add(X,lt);const dt=5.6,pt=2.25,Et=-2,yt=new Wt({map:Ug(),toneMapped:!1}),H=new p(new Xt(dt,pt),yt);H.position.set(Et,1.25,.04),d.add(H);const W=2.4,Z=2.4,ot=new p(new T(W+.16,2.3,.12),m);ot.position.set(Z,1.2,.02),d.add(ot);const ut=new T(W*.48,2.18,.04),Pt=new p(ut,qe);Pt.position.set(Z-W*.24,1.18,.03);const Vt=new p(ut,qe);Vt.position.set(Z+W*.24,1.18,.05),d.add(Pt,Vt);const bt=new R({color:1519967,roughness:.95}),mt=new p(new T(W*.9,.02,.95),bt);mt.position.set(Z,.012,.55),d.add(mt);const oe=7.6,U=.82,zt=new Wt({map:Ng(),toneMapped:!1}),Rt=new p(new T(oe,U,.15),zt);if(Rt.position.set(0,2.78,.12),d.add(Rt),r){const Tt=w(0,.6);r.register({x:Tt.x,y:3.15,z:Tt.z,color:15266559,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const Tt=new me(15266559,2,7.5,1.2);Tt.position.set(0,3.15,.6),d.add(Tt)}const Dt=bo("cleaners");Dt.position.set(-3.8,0,.85),Dt.rotation.y=-.12,d.add(Dt);const It=fs();It.position.set(Z+W/2+.35,0,.35),d.add(It);const Qt=w(Z,1.1);e.add({id:"sf-dry-cleaners",x:Qt.x,z:Qt.z,radius:2.2,prompt:"Check Dry Cleaners Rates",onInteract:()=>{s&&s.playDeskBellSound(),i.show("白金クリーニング: 『朝10時までのお預かりで夕方5時お渡し！ワイシャツ立体仕上 ¥220、スーツ上下 ¥1,280。24Hコインランドリーも併設稼働中です！』")}});return}if(g==="izakaya"){const G=new R({color:2234900,roughness:.9}),J=new p(new T(9.2+.3,3.2,.08),G);J.position.set(0,3.2/2,-.02),d.add(J);const X=new T(9.2*.96,.12,1.2);X.rotateX(.2);const lt=new p(X,new R({color:2040617,roughness:.6}));lt.position.set(0,2.5,.6),d.add(lt);const dt=5.2,pt=2.25,Et=-1.6,yt=new Wt({map:zg(),toneMapped:!1}),H=new p(new Xt(dt,pt),yt);H.position.set(Et,1.25,.04),d.add(H);const W=2,Z=2.4,ot=new p(new T(W+.12,2.2,.1),G);ot.position.set(Z,1.15,.02),d.add(ot);const ut=new T(W*.95,.55,.03),Pt=new R({color:1582139,roughness:.85}),Vt=new p(ut,Pt);Vt.position.set(Z,2.05,.09),d.add(Vt);const bt=new R({color:4014664,roughness:.8}),mt=new p(new T(W*1.1,.04,.8),bt);mt.position.set(Z,.02,.45),d.add(mt);const oe=wx();oe.position.set(-3.4,0,.55),d.add(oe);const U=new Lt;U.position.set(1.1,2.3,.5);const zt=new p(new Y(.008,.008,.48,6),Oe);zt.rotation.x=Math.PI/2,zt.position.set(0,.15,-.24),U.add(zt);const Rt=new Wt({color:14235689,toneMapped:!1}),Dt=new p(new Y(.16,.16,.38,12),Rt),It=new p(new Y(.12,.16,.04,12),Oe);It.position.set(0,.2,0);const Qt=new p(new Y(.16,.12,.04,12),Oe);if(Qt.position.set(0,-.2,0),Dt.add(It,Qt),U.add(Dt),r){const vt=w(1.1,.5);r.register({x:vt.x,y:2.3,z:vt.z,color:16742178,intensity:1.8,distance:5,decay:1.2,zone:"Street"})}else{const vt=new me(16742178,1.8,5,1.2);vt.position.set(0,0,0),U.add(vt)}d.add(U);const Tt=6.8,I=.82,b=new Wt({map:Fg(),toneMapped:!1}),V=new p(new T(Tt,I,.15),b);if(V.position.set(0,2.82,.12),d.add(V),r){const vt=w(0,.55);r.register({x:vt.x,y:3.1,z:vt.z,color:16750899,intensity:2.2,distance:8,decay:1.2,zone:"Street"})}else{const vt=new me(16750899,2.2,8,1.2);vt.position.set(0,3.1,.55),d.add(vt)}const it=bo("izakaya");it.position.set(3.4,0,.85),it.rotation.y=.15,d.add(it);const nt=w(Z,1.1);e.add({id:"sf-izakaya",x:nt.x,z:nt.z,radius:2.2,prompt:"Look at Izakaya Specials",onInteract:()=>{s&&s.playDeskBellSound(),i.show("和食・酒処 魚河岸: 『いらっしゃい！今夜のイチオシは豊洲直送の刺身三種盛り(¥980)と、じっくり煮込んだ特製もつ煮込み(¥480)だよ！晩酌セットも大人気！』")}});let et=0;return{update(vt){et+=vt,Dt.rotation.z=Math.sin(et*2.2)*.06,Dt.rotation.x=Math.cos(et*1.8)*.04}}}if(g==="pharmacy"){const G=new R({color:14151399,roughness:.45,metalness:.1}),J=new p(new T(8.8+.3,3.2,.08),G);J.position.set(0,3.2/2,-.02),d.add(J);const X=4.8,lt=2.25,dt=-1.6,pt=new Wt({map:kg(),toneMapped:!1}),Et=new p(new Xt(X,lt),pt);Et.position.set(dt,1.25,.04),d.add(Et);const yt=2.2,H=2.2,W=new p(new T(yt+.16,2.3,.12),m);W.position.set(H,1.2,.02),d.add(W);const Z=new T(yt*.48,2.18,.04),ot=new p(Z,qe);ot.position.set(H-yt*.24,1.18,.03);const ut=new p(Z,qe);ut.position.set(H+yt*.24,1.18,.05),d.add(ot,ut);const Pt=new R({color:1331780,roughness:.95}),Vt=new p(new T(yt*.9,.02,.95),Pt);Vt.position.set(H,.012,.55),d.add(Vt);const bt=6.6,mt=.82,oe=new Wt({map:Og(),toneMapped:!1}),U=new p(new T(bt,mt,.15),oe);U.position.set(0,2.76,.12),d.add(U);const zt=Tf("pharmacy",!!r);if(zt.position.set(8.8/2+.1,2.4,.25),d.add(zt),r){const Qt=w(0,.5);r.register({x:Qt.x,y:3.15,z:Qt.z,color:14350576,intensity:1.9,distance:7,decay:1.1,zone:"Street"})}else{const Qt=new me(14350576,1.9,7,1.1);Qt.position.set(0,3.15,.5),d.add(Qt)}const Rt=bo("pharmacy");Rt.position.set(-3.2,0,.85),Rt.rotation.y=.12,d.add(Rt);const Dt=fs();Dt.position.set(H+yt/2+.35,0,.35),d.add(Dt);const It=w(H,1.1);e.add({id:"sf-pharmacy",x:It.x,z:It.z,radius:2.2,prompt:"Consult Pharmacy Counter",onInteract:()=>{s&&s.playDeskBellSound(),i.show("森クリニック・森薬局: 『全国どちらの医療機関の処方せんも受け付けております。お薬の相談、在宅医療、各種健康診断もお気軽にどうぞ。』")}});return}if(g==="bookstore"){const G=new R({color:3875350,roughness:.65}),J=new p(new T(9.8+.3,3.2,.08),G);J.position.set(0,3.2/2,-.02),d.add(J);const X=5.4,lt=2.25,dt=-1.8,pt=new Wt({map:Bg(),toneMapped:!1}),Et=new p(new Xt(X,lt),pt);Et.position.set(dt,1.25,.04),d.add(Et);const yt=2.2,H=2.2,W=new p(new T(yt+.16,2.3,.12),m);W.position.set(H,1.2,.02),d.add(W);const Z=new T(yt*.48,2.18,.04),ot=new p(Z,qe);ot.position.set(H-yt*.24,1.18,.03);const ut=new p(Z,qe);ut.position.set(H+yt*.24,1.18,.05),d.add(ot,ut);const Pt=7,Vt=.82,bt=new Wt({map:Gg(),toneMapped:!1}),mt=new p(new T(Pt,Vt,.15),bt);if(mt.position.set(0,2.76,.12),d.add(mt),r){const Dt=w(0,.5);r.register({x:Dt.x,y:3.15,z:Dt.z,color:16770756,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const Dt=new me(16770756,2,7.5,1.2);Dt.position.set(0,3.15,.5),d.add(Dt)}const oe=_x();oe.position.set(-3.2,0,.65),d.add(oe);const U=bo("bookstore");U.position.set(3.4,0,.85),U.rotation.y=-.15,d.add(U);const zt=fs();zt.position.set(1,0,.35),d.add(zt);const Rt=w(H,1.1);e.add({id:"sf-bookstore",x:Rt.x,z:Rt.z,radius:2.2,prompt:"Browse Bookstore Display",onInteract:()=>{s&&s.playDeskBellSound(),i.show("東書店: 『話題の直木賞・芥川賞受賞作、今週発売のジャンプ系コミックス最新巻が平積みされています！図書カードNEXT取扱店です。』")}});return}if(g==="cafe"){const G=new R({color:2759186,roughness:.7}),J=new p(new T(8.2+.3,3.2,.08),G);J.position.set(0,3.2/2,-.02),d.add(J);const X=new R({color:3547155,roughness:.85}),lt=new T(8.2*.92,.08,1.15);lt.rotateX(.18);const dt=new p(lt,X);dt.position.set(0,2.45,.55),d.add(dt);const pt=4.6,Et=2.25,yt=-1.4,H=new Wt({map:Hg(),toneMapped:!1}),W=new p(new Xt(pt,Et),H);W.position.set(yt,1.25,.04),d.add(W);const Z=2,ot=2,ut=new p(new T(Z+.14,2.25,.12),G);ut.position.set(ot,1.18,.02),d.add(ut);const Pt=new p(new T(Z*.9,2.15,.04),qe);Pt.position.set(ot,1.18,.04),d.add(Pt);const Vt=new R({color:13936723,metalness:.85,roughness:.25}),bt=new p(new Y(.015,.015,.7,8),Vt);bt.rotation.z=Math.PI/2,bt.position.set(ot,1.15,.08),d.add(bt);const mt=6.2,oe=.82,U=new Wt({map:Vg(),toneMapped:!1}),zt=new p(new T(mt,oe,.15),U);if(zt.position.set(0,2.76,.12),d.add(zt),r){const Tt=w(0,.5);r.register({x:Tt.x,y:3.15,z:Tt.z,color:16755268,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const Tt=new me(16755268,2,7.5,1.2);Tt.position.set(0,3.15,.5),d.add(Tt)}const Rt=bo("cafe");Rt.position.set(-2.8,0,.85),Rt.rotation.y=.15,d.add(Rt);const Dt=new R({color:4862496,roughness:.7}),It=new p(new T(1.4,.45,.42),Dt);It.position.set(2.8,.225,.55),d.add(It);const Qt=w(ot,1.1);e.add({id:"sf-cafe",x:Qt.x,z:Qt.z,radius:2.2,prompt:"Read Cafe Chalkboard",onInteract:()=>{s&&s.playDeskBellSound(),i.show("Cafe Mame: 『本日のおすすめ：エチオピア・イルガチェフェ G1（浅煎り ¥550）。華やかな香りと柑橘の酸味が楽しめます。テイクアウトも可能です。』")}});return}const v=Math.min(f*.55,5.8),y=new R({color:1909290,roughness:.35,metalness:.2}),_=new p(new T(v,3.2,.12),y);_.position.set(0,3.2/2,-.02),d.add(_);const P=2.4,C=new p(new T(P+.16,2.3,.14),m);C.position.set(-.5,1.2,.02),d.add(C);const A=new T(P*.48,2.18,.04),D=new p(A,qe);D.position.set(-.5-P*.24,1.18,.03);const S=new p(A,qe);S.position.set(-.5+P*.24,1.18,.05),d.add(D,S);const M=new Wt({map:Xg(),toneMapped:!1}),L=new p(new Xt(.55,.55),M);L.position.set(1.4,1.35,.05),d.add(L);const F=new p(new T(v*.85,.08,.85),Ht);if(F.position.set(0,2.5,.4),d.add(F),r){const q=w(0,.4);r.register({x:q.x,y:2.42,z:q.z,color:16773339,intensity:1.4,distance:5.5,decay:1.2,zone:"Street"})}else{const q=new me(16773339,1.4,5.5,1.2);q.position.set(0,2.42,.4),d.add(q)}const B=fs();B.position.set(-2,0,.35),d.add(B);const Q=w(1.4,1);e.add({id:`sf-intercom-${t.id}`,x:Q.x,z:Q.z,radius:2,prompt:"Examine Residence Intercom",onInteract:()=>{s&&s.playDeskBellSound(),i.show("オートロック操作盤: 『居住者専用エントランスです。訪問先の部屋番号を押して「呼出」を押してください。』")}})}function _r(o,t,n,e,i){const r=t.w/2,a=t.d/2,l=new R({color:16769690,emissive:16758852,emissiveIntensity:.85,roughness:.3}),c=new R({color:13954303,emissive:7779560,emissiveIntensity:.7,roughness:.3}),f=new R({color:1580582,roughness:.1,metalness:.7}),d=(n>0,1);for(let u=d;u<t.floors;u++){const h=u*3.2;if(t.balconies.includes(u))for(const m of t.balconyFaces)vx(o,t,m,h,i);const w=t.bay,g=(t.w-1.6)/w;for(let m=0;m<w;m++){const v=-r+.8+m*g+g/2,y=(t.seed+u*17+m*31)%100,_=y<55?l:y<80?c:f;if(t.front==="s")yr(o,t.x+v,h+1.45,t.z-a,1.4,1.6,"s",_,e);else if(t.front==="n")yr(o,t.x+v,h+1.45,t.z+a,1.4,1.6,"n",_,e);else if(t.front==="w"){const P=-a+.8+m*((t.d-1.6)/w)+(t.d-1.6)/w/2;yr(o,t.x-r,h+1.45,t.z+P,1.4,1.6,"w",_,e)}else{const P=-a+.8+m*((t.d-1.6)/w)+(t.d-1.6)/w/2;yr(o,t.x+r,h+1.45,t.z+P,1.4,1.6,"e",_,e)}}}}function yr(o,t,n,e,i,s,r,a,l){const d=r==="s"||r==="n"?new T(i,s,.18):new T(.18,s,i),u=new p(d,l);u.position.set(t,n,e),o.add(u);const h=r==="s"||r==="n"?new T(i-.08*2,s-.08*2,.04):new T(.04,s-.08*2,i-.08*2),x=new p(h,a),w=r==="s"?-.02:r==="n"?.02:0,g=r==="w"?-.02:r==="e"?.02:0;x.position.set(t+g,n,e+w),o.add(x)}function vx(o,t,n,e,i){const s=t.w/2,r=t.d/2,a=1.15,l=1.05;if(n==="s"){const c=new T(t.w*.85,.18,a),f=new p(c,i);f.position.set(t.x,e+.09,t.z-r-a/2),o.add(f);const d=new T(t.w*.85,l,.06),u=new p(d,Ht);u.position.set(t.x,e+l/2+.18,t.z-r-a),o.add(u),Aa(o,t.x+t.w*.3,e+.5,t.z-r-a*.5,0)}else if(n==="n"){const c=new T(t.w*.85,.18,a),f=new p(c,i);f.position.set(t.x,e+.09,t.z+r+a/2),o.add(f);const d=new T(t.w*.85,l,.06),u=new p(d,Ht);u.position.set(t.x,e+l/2+.18,t.z+r+a),o.add(u),Aa(o,t.x-t.w*.3,e+.5,t.z+r+a*.5,Math.PI)}else if(n==="w"){const c=new T(a,.18,t.d*.85),f=new p(c,i);f.position.set(t.x-s-a/2,e+.09,t.z),o.add(f);const d=new T(.06,l,t.d*.85),u=new p(d,Ht);u.position.set(t.x-s-a,e+l/2+.18,t.z),o.add(u),Aa(o,t.x-s-a*.5,e+.5,t.z+t.d*.3,-Math.PI/2)}}function Aa(o,t,n,e,i){const s=new Lt,r=new T(.72,.52,.32),a=new p(r,G1);s.add(a);const l=new Y(.2,.2,.02,16);l.rotateX(Math.PI/2);const c=new Wt({color:4473924}),f=new p(l,c);f.position.set(.12,0,.165),s.add(f),s.position.set(t,n,e),s.rotateY(i),o.add(s)}function Mx(o,t,n){const e=t.w/2,i=t.d/2,s=new Y(.06,.06,n,8),r=new p(s,Oe);r.position.set(t.x-e+.2,n/2,t.z-i-.08),o.add(r)}function Sx(o,t,n,e){const i=t.w/2,s=t.d/2,r=.9,a=new p(new T(t.w,r,.3),e);a.position.set(t.x,n+r/2,t.z+s-.15);const l=new p(new T(t.w,r,.3),e);l.position.set(t.x,n+r/2,t.z-s+.15);const c=new p(new T(.3,r,t.d),e);c.position.set(t.x-i+.15,n+r/2,t.z);const f=new p(new T(.3,r,t.d),e);f.position.set(t.x+i-.15,n+r/2,t.z),o.add(a,l,c,f);const d=new T(3.2,2.4,3.2),u=new p(d,e);if(u.position.set(t.x,n+1.2,t.z),o.add(u),t.floors>=4){const w=new Lt,g=new Y(.05,.05,1.2,6);for(const _ of[-.6,.6])for(const P of[-.6,.6]){const C=new p(g,Ht);C.position.set(_,.6,P),w.add(C)}const m=new Y(.9,.9,1.6,16),v=new R({color:10008776,roughness:.3,metalness:.4}),y=new p(m,v);y.position.set(0,1.8,0),w.add(y),w.position.set(t.x+i*.5,n,t.z+s*.4),o.add(w)}const h=new Y(.03,.04,3.6,6),x=new p(h,Ht);x.position.set(t.x-i*.4,n+1.8,t.z-s*.4),o.add(x)}function bx(o,t,n,e,i,s,r){const a=new Lt;a.name="urban_props";const l=[],c=[],f=[{x:-36,z:4.8},{x:-14,z:4.8},{x:8,z:4.8},{x:32,z:4.8},{x:-36,z:-4.8},{x:8,z:-4.8},{x:32,z:-4.8},{x:12.2,z:16},{x:12.2,z:32},{x:19.8,z:24},{x:-17.8,z:-18},{x:-17.8,z:-32},{x:-9.8,z:-20}];for(const _ of f){const P=Tx(_.x,_.z,l,r);a.add(P),t.add({minX:_.x-.25,minY:0,minZ:_.z-.25,maxX:_.x+.25,maxY:10,maxZ:_.z+.25})}Ex(a,f);const d=[{x:-4.2,z:8.8,rotY:0,variant:0,drink:"hot Boss Coffee [缶コーヒー ¥140]"},{x:20.4,z:9.8,rotY:-Math.PI/2,variant:1,drink:"cold Pocari Sweat [ポカリスエット ¥160]"},{x:5.2,z:22.1,rotY:Math.PI,variant:2,drink:"warm Green Tea [お〜いお茶 ¥130]"},{x:-9.6,z:-10.8,rotY:Math.PI/2,variant:0,drink:"cold Royal Milk Tea [ミルクティー ¥150]"}];for(let _=0;_<d.length;_++){const P=d[_],C=Ad(P.x,P.z,P.rotY,P.variant,P.drink,n,e,t,r);a.add(C)}const u=Ax(a,t,n,e,i,s,l,r);c.push(u.update);const h=[{x:2.4,z:6.8,rotY:.15,color:2046808,id:"bike-ramen"},{x:-3.5,z:8.2,rotY:-.1,color:1984032,id:"bike-sunheights"},{x:21.5,z:12,rotY:Math.PI/2,color:9050148,id:"bike-konbini-1"},{x:21.5,z:13.5,rotY:Math.PI/2,color:11056320,id:"bike-konbini-2"},{x:8.5,z:27.5,rotY:-Math.PI/2,color:2367002,id:"bike-cafe"},{x:10.8,z:20.5,rotY:Math.PI/2,color:2046808,id:"bike-alley"},{x:2.2,z:23.8,rotY:Math.PI,color:1984032,id:"bike-north"},{x:-18.2,z:-10.5,rotY:-Math.PI/2,color:9050148,id:"bike-residential"}];for(const _ of h){const P=Rd(_.x,_.z,_.rotY,_.color,_.id,n,e,s);a.add(P),t.add({minX:_.x-.75,minY:0,minZ:_.z-.35,maxX:_.x+.75,maxY:1.2,maxZ:_.z+.35})}const x=[{x:-2.8,z:8.2,type:"bush"},{x:-2.2,z:8.2,type:"fern"},{x:2,z:8.2,type:"tall"},{x:6.8,z:21,type:"bonsai"},{x:7.4,z:21,type:"hydrangea"},{x:8,z:21,type:"trough"},{x:8.6,z:21,type:"tall"},{x:1.5,z:23.6,type:"fern"},{x:-1.2,z:23.6,type:"bush"}];for(const _ of x){const P=Yx(_.x,_.z,_.type);a.add(P)}a.add(Zx(7.1,20.9));const w=qx(-20.5,.15,-16.5,Math.PI/2,t);a.add(w);const g=If(-16.8,-4.2,Math.PI/4,t),m=If(13.2,4.2,-Math.PI/4,t);a.add(g,m);const v=$x(9.6,20.4);a.add(v),a.add(Cd(4.25,22.1,n,e,s)),a.add(Kx(6.2,22.3,l,r)),Jx(a,t,n,e);const y=jx(a,n,e,i,s);return c.push(y.update),o.add(a),{group:a,streetLights:l,update(_){for(const P of c)P(_)}}}function Tx(o,t,n,e){const i=new Lt;i.position.set(o,0,t);const s=9.2,r=new Y(.18,.24,s,12),a=new R({color:5922662,roughness:.88,metalness:.05}),l=new p(r,a);l.position.set(0,s/2,0),l.castShadow=!0,i.add(l);const c=new T(2.2,.1,.1),f=new p(c,Oe);f.position.set(0,s-.6,0),i.add(f);const d=new T(1.6,.1,.1),u=new p(d,Oe);u.position.set(0,s-1.4,0),i.add(u);const h=new Y(.04,.04,.14,8),x=new R({color:15658734,roughness:.2});for(const L of[-.95,-.45,.45,.95]){const F=new p(h,x);F.position.set(L,s-.5,0),i.add(F)}const w=new Y(.32,.32,1.1,12),g=new R({color:4739160,roughness:.5,metalness:.4}),m=new p(w,g);m.position.set(.35,s-2.2,0),i.add(m);const v=new Y(.015,.015,.28,6);v.rotateZ(Math.PI/2);for(let L=1.8;L<s-2.5;L+=.55){const F=new p(v,Ht),B=Math.sin(L*4)>0?.2:-.2;F.position.set(B,L,0),i.add(F)}const y=new Y(.03,.03,1.1,8);y.rotateZ(Math.PI/3);const _=new p(y,Oe);_.position.set(.45,5.2,0),i.add(_);const P=new Xe(.25,.15,12),C=new p(P,Oe);C.position.set(.85,4.8,0),i.add(C);const A=new Re(.1,12,12),D=new p(A,ti);D.position.set(.85,4.72,0),i.add(D);const S=new Xe(2.4,4.6,16,1,!0);S.translate(0,-2.3,0);const M=new p(S,fg);if(M.position.set(.85,4.7,0),i.add(M),e)e.register({x:o+.85,y:4.65,z:t,color:16770229,intensity:1.6,distance:16,decay:1.5,zone:"Street"});else{const L=new me(16770229,1.6,16,1.5);L.position.set(.85,4.65,0),n.push(L),i.add(L)}return i}function Ex(o,t){const n=new ud({color:1711652,linewidth:1.5});for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){const s=t[e],r=t[i],a=Math.hypot(r.x-s.x,r.z-s.z);if(a<26)for(const l of[-.45,0,.45]){const c=8.6+l*.4,f=8.6+l*.4,d=(s.x+r.x)/2,u=(s.z+r.z)/2,h=Math.min(1.2,a*.045),w=new xd(new N(s.x,c,s.z),new N(d,(c+f)/2-h,u),new N(r.x,f,r.z)).getPoints(12),g=new mn().setFromPoints(w),m=new q2(g,n);o.add(m)}}}function Ad(o,t,n,e,i,s,r,a,l){const c=new Lt,f=1.05,d=1.95,u=.82,h=new T(f,d,u),x=new R({color:e===0?1784632:e===1?5904420:1715796,roughness:.35,metalness:.65}),w=new p(h,x);w.position.set(0,d/2,0),w.castShadow=!0,c.add(w);const g=new Xt(.92,1.75),m=hg(e),v=new Wt({map:m,toneMapped:!1}),y=new p(g,v);y.position.set(0,d/2+.04,u/2+.01),c.add(y);const _=e===0?8060884:e===1?16746649:8965375;if(l){const F=u/2+.45;l.register({x:o+Math.sin(n)*F,y:.15+1.2,z:t+Math.cos(n)*F,color:_,intensity:.9,distance:4,decay:1.2,zone:"Street"})}else{const F=new me(_,.9,4);F.position.set(0,1.2,u/2+.45),c.add(F)}const P=new T(.42,.85,.42),C=new R({color:4015181,roughness:.4}),A=new p(P,C);A.position.set(f/2+.32,.425,0),c.add(A);const D=new Y(.08,.08,.02,12),S=new Wt({color:1118481}),M=new p(D,S);M.position.set(f/2+.24,.86,0);const L=new p(D,S);return L.position.set(f/2+.4,.86,0),c.add(M,L),c.position.set(o,.15,t),c.rotateY(n),a.add({minX:o-.9,minY:0,minZ:t-.7,maxX:o+.9,maxY:2.2,maxZ:t+.7}),s.add({id:`vending-${o}-${t}`,x:o,z:t,radius:1.8,prompt:`Buy ${i}`,onInteract:()=>{r.show(`*Clink-clatter-thump!* You bought a ${i}. It feels warm and soothing in your hands.`)}}),c}function Ax(o,t,n,e,i,s,r,a){const l=[];Rx(o,t,n,e),Cx(o,t),Ef(o,1.8,-18.5,r??[],a),Ef(o,-.5,-31,r??[],a);const c=Px(-2.5,-17.5,a);o.add(c.group),l.push(c.update),t.add({minX:-2.9,minY:0,minZ:-17.9,maxX:-2.1,maxY:2.2,maxZ:-17.1}),Ix(o,2.8,-8.5,t,n,e),Lx(o,-2.8,-8.5,t,n,e),Dx(o,3.6,-10.2,t),Ux(o,6.2,-32.5,t),Nx(o,3.6,-26,t);const f=Ad(-7.5,-9.2,-Math.PI/2,1,"cold Pocari Sweat & Calpis Soda [¥160]",n,e,t,a);o.add(f),o.add(Cd(-7.5,-10.4,n,e,s));const d=Rd(-5.8,-8.8,.25,1920312,"bike-park-entrance",n,e,s);o.add(d),t.add({minX:-6.5,minY:0,minZ:-9.2,maxX:-5.1,maxY:1.2,maxZ:-8.4}),zx(o,-.5,-23.8,t,n,e,i);const u=xl(3.4,-18.2,-Math.PI/2);o.add(u),t.add({minX:3,minY:0,minZ:-19.2,maxX:3.8,maxY:1.2,maxZ:-17.2}),n.add({id:"bench-sakura",x:2.6,z:-18.2,radius:1.8,prompt:()=>i.seated?"Stand up from Bench":"Sit on Sakura Bench",onInteract:()=>{i.seated=!i.seated,i.seated?e.show("You sit beneath the grand sakura tree. Pink petals drift down gently in the quiet midnight breeze."):e.show("You stand back up, refreshed.")}});const h=xl(3.5,-28.5,-Math.PI/2);o.add(h),t.add({minX:3.1,minY:0,minZ:-29.5,maxX:3.9,maxY:1.2,maxZ:-27.5}),n.add({id:"bench-playground",x:2.7,z:-28.5,radius:1.8,prompt:()=>i.seated?"Stand up from Bench":"Sit on Park Bench",onInteract:()=>{i.seated=!i.seated,i.seated?e.show("You sit down facing the playground. The quiet night air of Tokyo surrounds you."):e.show("You stand back up.")}}),Fx(o,2.4,-22.5,t),kx(o,-2.2,-20.5,t,n,e,s);const x=Ox(o,-3.8,-27.5,t,n,e,i,s);l.push(x.update);const w=Bx(o,-1.5,-29.2,t,n,e,s);l.push(w.update),Gx(o,-4.8,-33.6,Math.PI,t,n,e,s),Hx(o,-2.5,-33.5,t);const g=Af(5.2,-15.5,1.25);o.add(g),t.add({minX:4.6,minY:0,minZ:-16.1,maxX:5.8,maxY:6.5,maxZ:-14.9});const m=new Lt;o.add(m);const v=Xx(5.2,-15.5);m.add(v.group);const y=Af(-2.8,-12.5,.85);o.add(y),t.add({minX:-3.3,minY:0,minZ:-13,maxX:-2.3,maxY:5.5,maxZ:-12});const _=Vx(-5,-14);o.add(_),t.add({minX:-5.5,minY:0,minZ:-14.5,maxX:-4.5,maxY:5.5,maxZ:-13.5});const P=Rf(-5.5,-17.5,1);o.add(P),t.add({minX:-6,minY:0,minZ:-18,maxX:-5,maxY:5.5,maxZ:-17});const C=Rf(-6.8,-34.8,1.05);o.add(C),t.add({minX:-7.3,minY:0,minZ:-35.3,maxX:-6.3,maxY:5.5,maxZ:-34.3});for(const S of[{x:8.5,z:-28},{x:8.5,z:-31.5},{x:8.5,z:-35}]){const M=Wx(S.x,S.z);o.add(M),t.add({minX:S.x-.4,minY:0,minZ:S.z-.4,maxX:S.x+.4,maxY:6,maxZ:S.z+.4})}Cf(o,7.6,-14,1.4,3.2,"azalea",t),Cf(o,-7.2,-13.5,1.4,2.6,"hydrangea",t),Pf(m,5.2,-15.5,3.2,40),Pf(m,-2.8,-12.5,2.2,20);let A=0,D=!0;return{update(S){Rn.isHigh()?(m.visible=!0,v.update(S)):(A+=S,A>.1&&(A=0,D=(i.x-0)*(i.x-0)+(i.z- -22.5)*(i.z- -22.5)<1764,m.visible=D),D&&v.update(S));for(const M of l)M(S)}}}function Rx(o,t,n,e){const i=new R({color:4738904,roughness:.85,metalness:.05}),s=new R({color:3554372,roughness:.8}),r=new Lt;r.position.set(-2.2,.15,-7.6);const a=new p(new T(.55,1.25,.55),i);a.position.set(0,.625,0),a.castShadow=!0;const l=new p(new T(.65,.1,.65),s);l.position.set(0,1.3,0),r.add(a,l),o.add(r),t.add({minX:-2.5,minY:0,minZ:-7.9,maxX:-1.9,maxY:1.5,maxZ:-7.3});const c=new Lt;c.position.set(2.2,.15,-7.6);const f=new p(new T(.55,1.25,.55),i);f.position.set(0,.625,0),f.castShadow=!0;const d=new p(new T(.65,.1,.65),s);d.position.set(0,1.3,0),c.add(f,d);const u=new Wt({map:Kg()}),h=new Xt(.42,.22),x=new p(h,u);x.position.set(0,.85,.28),c.add(x),o.add(c),t.add({minX:1.9,minY:0,minZ:-7.9,maxX:2.5,maxY:1.5,maxZ:-7.3}),n.add({id:"park-nameplate",x:2.2,z:-7,radius:1.6,prompt:"Read Park Plaque",onInteract:()=>{e.show(`Bronze Park Plaque: "Sakura-cho Children's Park (桜町児童遊園) — Minato Ward, Tokyo".`)}});const w=new R({color:2236962,roughness:.5,metalness:.7}),g=new R({color:13938487,roughness:.4}),m=[{x:-.75,z:-7.6},{x:.75,z:-7.6},{x:-8.5,z:-22.6},{x:-8.5,z:-21.4}];for(const v of m){const y=new Lt;y.position.set(v.x,.15,v.z);const _=new p(new Y(.08,.08,.8,12),w);_.position.set(0,.4,0),_.castShadow=!0;const P=new p(new Re(.09,12,8),w);P.position.set(0,.8,0);const C=new p(new Y(.085,.085,.16,12),g);C.position.set(0,.58,0),y.add(_,P,C),o.add(y),t.add({minX:v.x-.12,minY:0,minZ:v.z-.12,maxX:v.x+.12,maxY:.9,maxZ:v.z+.12})}}function Cx(o,t){const n=new R({color:4080716,roughness:.9}),e=new R({color:1779744,roughness:.4,metalness:.7}),i=[{x1:-8.5,z1:-7.6,x2:-2.5,z2:-7.6,w:6,d:.35,cx:-5.5,cz:-7.6},{x1:2.5,z1:-7.6,x2:9.5,z2:-7.6,w:7,d:.35,cx:6,cz:-7.6},{x1:-8.5,z1:-20.6,x2:-8.5,z2:-7.6,w:.35,d:13,cx:-8.5,cz:-14.1},{x1:-8.5,z1:-36.5,x2:-8.5,z2:-23.4,w:.35,d:13.1,cx:-8.5,cz:-29.95},{x1:-8.5,z1:-36.5,x2:9.5,z2:-36.5,w:18,d:.35,cx:.5,cz:-36.5},{x1:9.5,z1:-36.5,x2:9.5,z2:-7.6,w:.35,d:28.9,cx:9.5,cz:-22.05}];for(const s of i){const r=new T(s.w,.35,s.d),a=new p(r,n);a.position.set(s.cx,.15+.175,s.cz),a.castShadow=!0,o.add(a);const l=.75,c=s.w>s.d,f=new T(s.w,.05,s.d),d=new p(f,e);d.position.set(s.cx,.15+.35+l,s.cz),o.add(d);const u=c?s.w:s.d,h=Math.floor(u/.45);for(let y=0;y<=h;y++){const _=h>0?y/h-.5:0,P=c?s.cx+_*u:s.cx,C=c?s.cz:s.cz+_*u,A=new p(new Y(.018,.018,l,6),e);A.position.set(P,.15+.35+l/2,C),o.add(A)}const x=c?s.cz<-20?.35:-.35:s.cx>0?-.35:.35,w=c?s.w-.2:.5,g=c?.5:s.d-.2,m=new T(w,.95,g),v=new p(m,gl);v.position.set(c?s.cx:s.cx+x,.15+.475,c?s.cz+x:s.cz),v.castShadow=!0,o.add(v),t.add({minX:s.cx-s.w/2-.1,minY:0,minZ:s.cz-s.d/2-.1,maxX:s.cx+s.w/2+.1,maxY:1.5,maxZ:s.cz+s.d/2+.1})}}function Ef(o,t,n,e,i){const s=new Lt;s.position.set(t,.15,n);const r=new Y(.08,.12,3.6,12),a=new R({color:1781026,roughness:.5,metalness:.6}),l=new p(r,a);l.position.set(0,1.8,0),l.castShadow=!0,s.add(l);const c=new p(new Y(.18,.24,.4,12),a);c.position.set(0,.2,0),s.add(c);const f=new p(new Y(.14,.07,.15,12),a);f.position.set(0,3.65,0),s.add(f);const d=new Re(.24,16,16),u=new p(d,ti);if(u.position.set(0,3.85,0),s.add(u),i)i.register({x:t,y:4,z:n,color:16772290,intensity:1.6,distance:13,decay:1.2,zone:"Park"});else{const h=new me(16772290,1.6,13);h.position.set(0,3.85,0),s.add(h),e.push(h)}o.add(s)}function Px(o,t,n){const e=new Lt;e.position.set(o,.15,t);const i=new R({color:5922920,roughness:.9}),s=new p(new Y(.42,.48,.35,6),i);s.position.set(0,.175,0),s.castShadow=!0,e.add(s);const r=new p(new Y(.22,.25,.8,6),i);r.position.set(0,.75,0),e.add(r);const a=new p(new T(.55,.45,.55),i);a.position.set(0,1.35,0),e.add(a);let l=1.3,c=null;n?n.register({x:o,y:1.5,z:t,color:16754756,intensity:1.4,distance:6,decay:1.2,zone:"Park",dynamicIntensity:()=>l}):(c=new me(16754756,1.4,6),c.position.set(0,1.35,0),e.add(c));const f=new p(new Xe(.75,.35,6),i);f.position.set(0,1.75,0),e.add(f);let d=0;return{group:e,update:h=>{d+=h,l=1.3+Math.sin(d*8.5)*.15+(Math.random()-.5)*.08,c&&(c.intensity=l)}}}function Ix(o,t,n,e,i,s){const r=new Lt;r.position.set(t,.15,n);const a=new R({color:4739160,roughness:.4,metalness:.7}),l=new p(new Y(.03,.03,1.6,8),a);l.position.set(-.55,.8,0);const c=new p(new Y(.03,.03,1.6,8),a);c.position.set(.55,.8,0),r.add(l,c);const f=new Wt({map:Jg()}),d=new Xt(1.35,.85),u=new p(d,f);u.position.set(0,1.1,.015);const h=new p(d,f);h.position.set(0,1.1,-.015),h.rotateY(Math.PI);const x=new p(new T(1.4,.9,.025),a);x.position.set(0,1.1,0),r.add(l,c,x,u,h),o.add(r),e.add({minX:t-.75,minY:0,minZ:n-.15,maxX:t+.75,maxY:1.6,maxZ:n+.15}),i.add({id:"park-rules-sign",x:t,z:n+.6,radius:1.8,prompt:"Read Park Regulations",onInteract:()=>{s.show("Park Rules: Please take your litter home, no fireworks or open flames, keep dogs on leash, and keep noise down at night.")}})}function Lx(o,t,n,e,i,s){const r=new Lt;r.position.set(t,.15,n);const a=new R({color:4008216,roughness:.85}),l=new p(new T(.08,1.7,.08),a);l.position.set(-.75,.85,0);const c=new p(new T(.08,1.7,.08),a);c.position.set(.75,.85,0);const f=new Wt({map:jg()}),d=new p(new Xt(1.5,.9),f);d.position.set(0,1.25,.02);const u=new p(new Xt(1.5,.9),qe);u.position.set(0,1.25,.035);const h=new p(new T(1.56,.96,.05),a);h.position.set(0,1.25,-.01);const x=new p(new T(1.7,.04,.25),a);x.position.set(0,1.75,.05),x.rotateX(.2),r.add(l,c,h,d,u,x),o.add(r),e.add({minX:t-.85,minY:0,minZ:n-.2,maxX:t+.85,maxY:1.8,maxZ:n+.2}),i.add({id:"community-board",x:t,z:n+.7,radius:1.8,prompt:"Read Community Bulletin",onInteract:()=>{s.show('Sakura-cho Bulletin: Spring night festival next week, disaster evacuation meeting point, and a lost calico cat flyer: "Answers to Mike, wearing a red bell collar"!')}})}function Dx(o,t,n,e){const i=new Lt;i.position.set(t,.15,n);const s=new R({color:2044967,roughness:.5,metalness:.5}),r=new p(new Y(.22,.3,.6,8),s);r.position.set(0,.3,0),r.castShadow=!0;const a=new p(new Y(.12,.16,3.4,8),s);a.position.set(0,2,0),a.castShadow=!0;const l=new Y(.48,.48,.24,24);l.rotateX(Math.PI/2);const c=new p(l,s);c.position.set(0,3.8,0);const f=new Wt({map:Qg(),toneMapped:!1}),d=new ln(.42,24),u=new p(d,f);u.position.set(0,3.8,.125);const h=new p(d,f);h.position.set(0,3.8,-.125),h.rotateY(Math.PI);const x=new p(new Xe(.08,.45,8),s);x.position.set(0,4.45,0),i.add(r,a,c,u,h,x),o.add(i),e.add({minX:t-.35,minY:0,minZ:n-.35,maxX:t+.35,maxY:4.5,maxZ:n+.35})}function Ux(o,t,n,e){const i=new Lt;i.position.set(t,.15,n);const s=new R({color:14671576,roughness:.65,metalness:.05}),r=new R({color:2632754,roughness:.7,metalness:.3}),a=new R({color:8029069,roughness:.3,metalness:.7}),l=new p(new T(4.2,2.7,3.2),s);l.position.set(0,1.35,0),l.castShadow=!0,i.add(l);const c=new p(new T(4.6,.18,3.6),r);c.position.set(0,2.75,0),i.add(c);const f=new p(new T(.85,2.05,.04),a);f.position.set(-1.1,1.025,1.62);const d=new p(new T(.85,2.05,.04),a);d.position.set(1.1,1.025,1.62),i.add(f,d);const u=new Wt({color:16769700,toneMapped:!1}),h=new p(new Xt(3.6,.32),u);h.position.set(0,2.35,1.62),i.add(h);const x=new Wt({map:tx()}),w=new p(new Xt(.75,.36),x);w.position.set(0,1.9,1.62),i.add(w);const g=new p(new T(2.4,1.8,.12),s);g.position.set(0,.9,2.35),i.add(g),o.add(i),e.add({minX:t-2.2,minY:0,minZ:n-1.7,maxX:t+2.2,maxY:3,maxZ:n+1.7}),e.add({minX:t-1.3,minY:0,minZ:n+2.2,maxX:t+1.3,maxY:2,maxZ:n+2.5})}function Nx(o,t,n,e){const i=new Lt;i.position.set(t,.15,n);const s=new R({color:1984032,roughness:.5,metalness:.5}),r=new p(new Y(.24,.22,.72,16),s);r.position.set(0,.36,0),r.castShadow=!0;const a=new p(new Je(.24,.02,8,16),s);a.position.set(0,.72,0),a.rotateX(Math.PI/2),i.add(r,a),o.add(i),e.add({minX:t-.3,minY:0,minZ:n-.3,maxX:t+.3,maxY:.8,maxZ:n+.3})}function zx(o,t,n,e,i,s,r){const a=new Lt;a.position.set(t,.15,n);const l=new R({color:4862494,roughness:.88,metalness:.02}),c=new T(.16,2.6,.16),f=1.6,d=1,u=[{px:-f,pz:-d},{px:f,pz:-d},{px:-f,pz:d},{px:f,pz:d}];for(const y of u){const _=new p(c,l);_.position.set(y.px,1.3,y.pz),_.castShadow=!0,a.add(_)}const h=new T(3.6,.18,.1),x=new p(h,l);x.position.set(0,2.65,-d);const w=new p(h,l);w.position.set(0,2.65,d),a.add(x,w);const g=new T(.08,.14,2.4);for(let y=-f+.3;y<=f-.3;y+=.5){const _=new p(g,l);_.position.set(y,2.78,0),a.add(_)}const m=new Zn(.42,1);for(let y=-f;y<=f;y+=.8){const _=new p(m,Es);_.position.set(y+(Math.random()-.5)*.3,2.9,(Math.random()-.5)*1.4),_.scale.set(1.4,.6,1.2),a.add(_)}const v=xl(0,0,0);a.add(v),o.add(a),e.add({minX:t-f-.15,minY:0,minZ:n-d-.15,maxX:t-f+.15,maxY:2.6,maxZ:n-d+.15}),e.add({minX:t+f-.15,minY:0,minZ:n-d-.15,maxX:t+f+.15,maxY:2.6,maxZ:n-d+.15}),e.add({minX:t-f-.15,minY:0,minZ:n+d-.15,maxX:t-f+.15,maxY:2.6,maxZ:n+d+.15}),e.add({minX:t+f-.15,minY:0,minZ:n+d-.15,maxX:t+f+.15,maxY:2.6,maxZ:n+d+.15}),e.add({minX:t-1.1,minY:0,minZ:n-.6,maxX:t+1.1,maxY:1.2,maxZ:n+.6}),i.add({id:"bench-pergola",x:t,z:n+.8,radius:1.8,prompt:()=>r.seated?"Stand up from Pergola":"Sit under Pergola",onInteract:()=>{r.seated=!r.seated,r.seated?s.show("You sit under the wisteria pergola. The climbing foliage filters the gentle streetlights above."):s.show("You stand back up.")}})}function xl(o,t,n){const e=new Lt;e.position.set(o,.15,t),e.rotateY(n);const i=new T(1.8,.08,.55),s=new p(i,pi);s.position.set(0,.44,0),s.castShadow=!0,e.add(s);const r=new T(1.8,.45,.08),a=new p(r,pi);a.position.set(0,.78,-.24),e.add(a);const l=new T(.08,.45,.5),c=new p(l,Ht);c.position.set(-.75,.22,0);const f=new p(l,Ht);return f.position.set(.75,.22,0),e.add(c,f),e}function Fx(o,t,n,e){const i=new Lt;i.position.set(t,.15,n);const s=new R({color:5922920,roughness:.9}),r=new p(new Y(.65,.65,.08,18),s);r.position.set(0,.74,0),r.castShadow=!0;const a=new p(new Y(.18,.24,.7,12),s);a.position.set(0,.35,0),i.add(r,a);for(let l=0;l<3;l++){const c=l*Math.PI*2/3,f=Math.cos(c)*1.05,d=Math.sin(c)*1.05,u=new p(new Y(.24,.24,.08,12),s);u.position.set(f,.42,d);const h=new p(new Y(.1,.14,.4,10),s);h.position.set(f,.2,d),i.add(u,h)}o.add(i),e.add({minX:t-1.3,minY:0,minZ:n-1.3,maxX:t+1.3,maxY:.85,maxZ:n+1.3})}function kx(o,t,n,e,i,s,r){const a=new Lt;a.position.set(t,.15,n);const l=new R({color:7238780,roughness:.82}),c=new p(new T(.5,.78,.5),l);c.position.set(0,.39,0),c.castShadow=!0;const f=new p(new Y(.18,.18,.08,14),Ht);f.position.set(0,.82,0);const d=new p(new Y(.015,.015,.09,8),Ht);d.position.set(0,.88,.06),d.rotateX(-.3);const u=new p(new Y(.018,.018,.12,8),Ht);u.position.set(.26,.38,0),u.rotateZ(Math.PI/2);const h=new R({color:3355443,roughness:.6,metalness:.8}),x=new p(new T(.75,.02,.75),h);x.position.set(0,.01,0),a.add(c,f,d,u,x),o.add(a),e.add({minX:t-.4,minY:0,minZ:n-.4,maxX:t+.4,maxY:1.2,maxZ:n+.4}),i.add({id:"park-fountain",x:t,z:n+.6,radius:1.6,prompt:"Drink Cold Park Water",onInteract:()=>{r==null||r.playFountainDrinkSound(),s.show("Cold, crisp water bubbles from the fountain nozzle. Very refreshing!")}})}function Ox(o,t,n,e,i,s,r,a){const l=new Lt;l.position.set(t,.15,n);const c=3.4,f=2.8,d=new Y(.06,.06,c+.4,12);d.rotateZ(Math.PI/2);const u=new p(d,Nl);u.position.set(0,f,0),u.castShadow=!0,l.add(u);const h=new Y(.05,.05,3,10);for(const m of[-1,1]){const v=c/2*m,y=new p(h,Io);y.position.set(v,f/2,.5),y.rotateX(.32*m),y.castShadow=!0;const _=new p(h,Io);_.position.set(v,f/2,-.5),_.rotateX(-.32*m),_.castShadow=!0;const P=new p(new Y(.03,.03,.85,8),Io);P.position.set(v,1,0),P.rotateX(Math.PI/2),l.add(y,_,P)}const x=[];for(const m of[-.85,.85]){const v=new Lt;v.position.set(m,f-.05,0);const y=Ht,_=2.05;for(const C of[-.25,.25]){const A=new p(new Y(.012,.012,_,6),y);A.position.set(C,-_/2,0),v.add(A)}const P=new p(new T(.55,.05,.26),ig);P.position.set(0,-_,0),P.castShadow=!0,v.add(P),l.add(v),x.push(v)}o.add(l),e.add({minX:t-c/2-.25,minY:0,minZ:n-.9,maxX:t-c/2+.25,maxY:2.8,maxZ:n+.9}),e.add({minX:t+c/2-.25,minY:0,minZ:n-.9,maxX:t+c/2+.25,maxY:2.8,maxZ:n+.9}),i.add({id:"park-swing",x:t,z:n+.7,radius:2,prompt:()=>r.seated?"Stand up from Swing":"Sit on Park Swing",onInteract:()=>{r.seated=!r.seated,r.seated?(a==null||a.playSwingCreakSound(),s.show("You sit on the park swing. The chains creak softly as you sway under the midnight sky.")):s.show("You hop off the swing.")}});let w=0;return{update:m=>{w+=m,x[0].rotation.x=Math.sin(w*1.5)*.12,x[1].rotation.x=Math.sin(w*1.7+1.2)*.1}}}function Bx(o,t,n,e,i,s,r){const a=new Lt;a.position.set(t,.15,n);const l=new p(new Y(.24,.24,.05,12),Ht);l.position.set(0,.025,0),a.add(l);const c=new p(new Y(.08,.08,.42,12),rg);c.position.set(0,.25,0),a.add(c);const f=new Lt;f.position.set(0,.46,0);const d=new R({color:15790320,roughness:.6}),u=new R({color:1710618,roughness:.7}),h=new p(new T(.38,.36,.65),d);h.position.set(0,.18,0),h.castShadow=!0;const x=new p(new T(.32,.04,.34),u);x.position.set(0,.38,-.05);const w=new p(new Re(.22,12,12),d);w.position.set(0,.35,.38);const g=new p(new Re(.07,8,8),u);g.position.set(-.16,.52,.34);const m=new p(new Re(.07,8,8),u);m.position.set(.16,.52,.34),m.position.set(.16,.52,.34);const v=new p(new Y(.018,.018,.44,8),us);v.position.set(0,.52,.28),v.rotateZ(Math.PI/2);const y=new p(new Y(.016,.016,.48,8),Ht);y.position.set(0,.08,.18),y.rotateZ(Math.PI/2),f.add(h,x,w,g,m,v,y),a.add(f),o.add(a),e.add({minX:t-.4,minY:0,minZ:n-.45,maxX:t+.4,maxY:1.1,maxZ:n+.45});let _=0;i.add({id:"spring-rocker",x:t,z:n+.5,radius:1.5,prompt:"Ride Panda Spring Rocker",onInteract:()=>{r==null||r.playSpringRockerSound(),_=2.5,s.show("You bounce on the little panda rocker! Boing boing!")}});let P=0;return{update:A=>{P+=A,_>0?(_-=A,f.rotation.x=Math.sin(P*16)*(_*.12),f.rotation.z=Math.cos(P*12)*(_*.05)):(f.rotation.x=Math.sin(P*2.2)*.02,f.rotation.z=0)}}}function Gx(o,t,n,e=Math.PI,i,s,r,a){const l=new Lt;l.position.set(t,.15,n),l.rotation.y=e;const c=2.1,f=new Y(.035,.035,2.3,8),d=new p(f,us);d.position.set(-.35,c/2,.4),d.rotateX(.25);const u=new p(f,us);u.position.set(.35,c/2,.4),u.rotateX(.25),l.add(d,u);for(let _=.35;_<c;_+=.35){const P=new p(new Y(.02,.02,.7,8),Nl);P.position.set(0,_,.4-_/c*.4),P.rotateZ(Math.PI/2),l.add(P)}const h=new p(new T(.8,.06,.8),us);h.position.set(0,c,0);const x=new p(new Je(.4,.03,8,16,Math.PI),us);x.position.set(0,c+.4,0),l.add(h,x);const w=3.6,g=new T(.65,.06,w),m=new p(g,og);m.position.set(0,c/2+.1,-w/2+.2),m.rotateX(-.52),m.castShadow=!0;const v=new p(new T(.05,.22,w),Io);v.position.set(-.32,c/2+.2,-w/2+.2),v.rotateX(-.52);const y=new p(new T(.05,.22,w),Io);if(y.position.set(.32,c/2+.2,-w/2+.2),y.rotateX(-.52),l.add(m,v,y),o.add(l),i&&(Math.abs(e-Math.PI)<.2?i.add({minX:t-.55,minY:0,minZ:n-.6,maxX:t+.55,maxY:2.4,maxZ:n+w-.2}):i.add({minX:t-.55,minY:0,minZ:n-w+.2,maxX:t+.55,maxY:2.4,maxZ:n+.6})),s&&r){const _=Math.abs(e-Math.PI)<.2?n+1.6:n-1.6;s.add({id:"playground-slide",x:t,z:_,radius:2.2,prompt:"Ride Playground Slide [すべり台]",onInteract:()=>{a&&a.playSlideSound(),r.show("You climb the ladder to the red platform and whoosh down the stainless steel slide into the park grass! Wheee!")}})}}function Hx(o,t,n,e){const i=new Lt;i.position.set(t,.15,n);const s=2.4,r=new p(new T(s,.24,.16),Ea),a=r.clone();a.position.set(0,.12,-s/2);const l=r.clone();l.position.set(0,.12,s/2);const c=new p(new T(.16,.24,s),Ea);c.position.set(-s/2,.12,0);const f=new p(new T(.16,.24,s),Ea);f.position.set(s/2,.12,0);const d=new p(new T(s-.1,.18,s-.1),sg);d.position.set(0,.09,0),d.receiveShadow=!0;const u=new p(new Y(.1,.07,.14,12),Nl);u.position.set(.4,.24,.3);const h=new p(new T(.06,.015,.22),Io);h.position.set(.55,.19,.35),h.rotateY(.4),i.add(a,l,c,f,d,u,h),o.add(i),e.add({minX:t-s/2,minY:0,minZ:n-s/2,maxX:t+s/2,maxY:.3,maxZ:n+s/2})}function Af(o,t,n=1){const e=new Lt;e.position.set(o,.15,t),e.scale.set(n,n,n);const i=new Y(.32,.45,3.4,8),s=new p(i,pi);s.position.set(0,1.7,0),s.castShadow=!0,e.add(s);const r=new Y(.18,.24,2.2,6);r.rotateZ(.55);const a=new p(r,pi);a.position.set(.7,3.2,0),e.add(a);const l=new Y(.18,.24,2.2,6);l.rotateZ(-.55);const c=new p(l,pi);c.position.set(-.7,3.2,0),e.add(c);const f=[{x:0,y:4.8,z:0,r:2.4},{x:1.8,y:4.2,z:.6,r:1.8},{x:-1.8,y:4.2,z:-.6,r:1.8},{x:.8,y:4,z:-1.6,r:1.7},{x:-.8,y:4,z:1.6,r:1.7},{x:0,y:5.6,z:0,r:1.5}];for(const d of f){const u=new Zn(d.r,1),h=new p(u,zl);h.position.set(d.x,d.y,d.z),h.castShadow=!0,e.add(h)}return e}function Vx(o,t){const n=new Lt;n.position.set(o,.15,t);const e=new p(new Y(.28,.38,2,8),pi);e.position.set(0,1,0),e.rotateZ(-.15),e.castShadow=!0;const i=new p(new Y(.18,.28,1.8,8),pi);i.position.set(.25,2.6,.1),i.rotateZ(.22),i.castShadow=!0,n.add(e,i);const s=[{x:.6,y:2.8,z:.3,sx:1.6,sy:.45,sz:1.3},{x:-.8,y:3.3,z:-.2,sx:1.8,sy:.48,sz:1.4},{x:.4,y:3.9,z:.1,sx:1.5,sy:.45,sz:1.3},{x:0,y:4.5,z:0,sx:1.3,sy:.42,sz:1.1}];for(const r of s){const a=new Zn(1,1),l=new p(a,tg);l.position.set(r.x,r.y,r.z),l.scale.set(r.sx,r.sy,r.sz),l.castShadow=!0,n.add(l)}return n}function Rf(o,t,n=1){const e=new Lt;e.position.set(o,.15,t),e.scale.set(n,n,n);const i=new Y(.28,.38,3.2,8),s=new p(i,pi);s.position.set(0,1.6,0),s.castShadow=!0,e.add(s);const r=[{x:0,y:4.5,z:0,r:2},{x:1.4,y:3.8,z:.5,r:1.5},{x:-1.4,y:3.8,z:-.5,r:1.5},{x:0,y:5.2,z:0,r:1.2}];for(const a of r){const l=new Zn(a.r,1),c=new p(l,Es);c.position.set(a.x,a.y,a.z),c.castShadow=!0,e.add(c)}return e}function Wx(o,t){const n=new Lt;n.position.set(o,.15,t);const e=new p(new Y(.18,.24,2,8),pi);e.position.set(0,1,0),n.add(e);const i=new p(new Xe(1.1,2.5,8),gl);i.position.set(0,2.8,0);const s=new p(new Xe(.85,2.2,8),gl);return s.position.set(0,4.2,0),n.add(i,s),n}function Cf(o,t,n,e,i,s,r){const a=new Lt;a.position.set(t,.15,n);const l=new R({color:5922920,roughness:.9}),c=new p(new T(e,.22,i),l);c.position.set(0,.11,0),a.add(c);const f=new R({color:2234898,roughness:.95}),d=new p(new T(e-.2,.24,i-.2),f);d.position.set(0,.12,0),a.add(d);const u=Math.max(3,Math.floor(e*i*1.5));for(let h=0;h<u;h++){const x=(Math.random()-.5)*(e-.4),w=(Math.random()-.5)*(i-.4),g=.28+Math.random()*.15,m=new p(new Re(g,8,8),Es);m.position.set(x,.24+g*.6,w),a.add(m);const v=s==="azalea"?Math.random()>.4?eg:xf:Math.random()>.4?ng:xf,y=new p(new Zn(g*.65,0),v);y.position.set(x,.28+g*.9,w),a.add(y)}o.add(a),r.add({minX:t-e/2,minY:0,minZ:n-i/2,maxX:t+e/2,maxY:.6,maxZ:n+i/2})}function Pf(o,t,n,e,i){const s=new Xt(.12,.08);s.rotateX(-Math.PI/2);for(let r=0;r<i;r++){const a=Math.sqrt(Math.random())*e,l=Math.random()*Math.PI*2,c=t+Math.cos(l)*a,f=n+Math.sin(l)*a,d=new p(s,zl);d.position.set(c,.158,f),d.rotateY(Math.random()*Math.PI),o.add(d)}}function Xx(o,t){const n=new Lt;n.position.set(o,.15,t);const e=38,i=[],s=new Xt(.08,.05);for(let l=0;l<e;l++){const c=new p(s,zl),f=(Math.random()-.5)*9,d=(Math.random()-.5)*9,u=.5+Math.random()*4.8;c.position.set(f,u,d),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),n.add(c),i.push({mesh:c,x0:f,z0:d,speed:.28+Math.random()*.35,phase:Math.random()*Math.PI*2})}let r=0;return{group:n,update:l=>{r+=l;for(const c of i)c.mesh.position.y-=l*c.speed,c.mesh.position.x=c.x0+Math.sin(r*1.5+c.phase)*.4,c.mesh.position.z=c.z0+Math.cos(r*1.2+c.phase)*.4,c.mesh.rotation.z+=l*1.2,c.mesh.rotation.y+=l*.8,c.mesh.position.y<.1&&(c.mesh.position.y=4.8+Math.random()*.5)}}}function Rd(o,t,n,e=2046808,i="bike",s,r,a){const l=new Lt;l.position.set(o,.15,t),l.rotateY(n),l.rotateZ(-.06);const c=new R({color:1579036,roughness:.9}),f=new R({color:e,roughness:.35,metalness:.4}),d=new R({color:2365458,roughness:.5}),u=new R({color:1315860,roughness:.85}),h=new R({color:13938487,roughness:.2,metalness:.85}),x=new Wt({color:14489624}),w=new Wt({color:16096779}),g=.32,m=[{x:.55,isFront:!0},{x:-.55,isFront:!1}];for(const W of m){const Z=new Lt;Z.position.set(W.x,g,0);const ot=new p(new Je(g,.024,8,24),c);Z.add(ot);const ut=new p(new Je(g-.02,.012,6,24),Ht);Z.add(ut);const Pt=new p(new Y(.022,.022,.07,8),Ht);Pt.rotateX(Math.PI/2),Z.add(Pt);for(let mt=0;mt<4;mt++){const oe=new p(new Y(.003,.003,(g-.02)*2,4),Ht);oe.rotateZ(mt*Math.PI/4),Z.add(oe)}const Vt=new Je(g+.022,.016,6,18,Math.PI*(W.isFront?.72:.85)),bt=new p(Vt,f);if(bt.rotateZ(W.isFront?-Math.PI*.58:-Math.PI*.42),Z.add(bt),!W.isFront){const mt=new p(new Y(.012,.012,.01,8),x);mt.position.set(-g-.015,-.05,0),mt.rotateZ(Math.PI/2),Z.add(mt)}l.add(Z)}const v=new p(new Y(.025,.025,.08,8),f);v.rotateX(Math.PI/2),v.position.set(-.06,.28,0),l.add(v);const y=new p(new Y(.02,.02,.2,8),f);y.position.set(.42,.7,0),y.rotateZ(-.28),l.add(y);for(const W of[-.018,.018]){const Z=new p(new Y(.014,.014,.65,8),f);Z.position.set(.18,.46,W),Z.rotateZ(.72),l.add(Z)}const _=new p(new Y(.016,.016,.46,8),f);_.position.set(-.16,.48,0),_.rotateZ(-.25),l.add(_);for(const W of[-.038,.038]){const Z=new p(new Y(.011,.009,.45,8),Ht);Z.position.set(.48,.51,W),Z.rotateZ(-.28),l.add(Z)}for(const W of[-.038,.038]){const Z=new p(new Y(.01,.01,.52,6),f);Z.position.set(-.31,.3,W),Z.rotateZ(-.09),l.add(Z)}for(const W of[-.038,.038]){const Z=new p(new Y(.01,.01,.55,6),f);Z.position.set(-.38,.52,W),Z.rotateZ(.78),l.add(Z)}const P=new p(new Y(.013,.013,.22,8),Ht);P.position.set(.44,.82,0),l.add(P);const C=new p(new Je(.24,.011,6,16,Math.PI*.8),Ht);C.rotateX(Math.PI/2),C.rotateZ(Math.PI*.6),C.position.set(.4,.92,0),l.add(C);for(const W of[-.22,.22]){const Z=new p(new Y(.016,.016,.09,8),u);Z.position.set(.29,.91,W),Z.rotateZ(Math.PI/6),l.add(Z)}const A=new p(new Re(.024,10,6,0,Math.PI*2,0,Math.PI/2),h);A.position.set(.35,.94,-.16);const D=new p(new T(.015,.005,.012),Ht);D.position.set(.33,.94,-.18),l.add(A,D);const S=.32,M=.22,L=.2,F=.58,B=.76,Q=new p(new T(M,.016,S),Ht);Q.position.set(F,B+L/2,0);const q=new p(new T(M-.02,.012,S-.02),Ht);q.position.set(F,B-L/2,0),l.add(Q,q);for(const W of[-M/2+.01,M/2-.01])for(const Z of[-S/2+.01,S/2-.01]){const ot=new p(new Y(.005,.005,L,4),Ht);ot.position.set(F+W,B,Z),l.add(ot)}const G=new p(new T(M*.75,L*.65,S*.75),new R({color:16120058,roughness:.8}));G.position.set(F,B-.02,0),l.add(G);const J=new p(new Y(.024,.018,.06,10),Ht);J.rotateZ(-Math.PI/2),J.position.set(.66,.62,0);const X=new p(new ln(.022,10),ti);X.rotateY(Math.PI/2),X.position.set(.691,.62,0),l.add(J,X);const lt=new p(new Y(.013,.013,.16,8),Ht);lt.position.set(-.19,.73,0),lt.rotateZ(-.25);const dt=new p(new T(.24,.055,.17),d);dt.position.set(-.2,.81,0);for(const W of[-.045,.045]){const Z=new p(new Y(.016,.016,.04,8),Ht);Z.position.set(-.26,.77,W),l.add(Z)}l.add(lt,dt);const pt=new p(new T(.44,.02,.14),Ht);pt.position.set(-.5,.73,0),l.add(pt);for(const W of[-.05,.05]){const Z=new p(new Y(.007,.007,.44,4),Ht);Z.position.set(-.52,.52,W),Z.rotateZ(.2),l.add(Z)}const Et=new p(new T(.48,.11,.03),f);Et.position.set(-.28,.28,.04),l.add(Et);for(const W of[-1,1]){const Z=new p(new Y(.008,.008,.14,6),Ht);Z.position.set(-.06,.28+W*.06,W*.07);const ot=new p(new T(.08,.02,.06),u);ot.position.set(-.06,.28+W*.12,W*.1);const ut=new p(new T(.06,.01,.01),w);ut.position.set(-.06,.28+W*.12,W*.13),l.add(Z,ot,ut)}const yt=new p(new Y(.008,.008,.32,6),Ht);yt.position.set(-.46,.16,-.1),yt.rotateX(.38),l.add(yt);const H=new p(new Y(.017,.017,.03,8),w);return H.position.set(-.16,.52,0),l.add(H),s&&s.add({id:`${i}-bell`,x:o,z:t,radius:1.8,prompt:"Ring Bicycle Bell",onInteract:()=>{a==null||a.playBikeBellSound(),r==null||r.show("*Riing-riing!* Japanese city commuter bicycle (Mamachari) with front grocery basket.")}}),l}function Yx(o,t,n){const e=new Lt;if(e.position.set(o,.15,t),n==="bonsai"){const i=new R({color:2047064,roughness:.35,metalness:.15}),s=new p(new Y(.24,.2,.08,14),i);s.position.set(0,.04,0),s.scale.set(1.3,1,.9);const r=new R({color:2243869,roughness:.9}),a=new p(new Y(.22,.18,.04,12),r);a.position.set(0,.08,0),a.scale.set(1.25,1,.85),e.add(s,a);const l=new R({color:4007448,roughness:.9}),c=new p(new Y(.025,.04,.22,7),l);c.position.set(0,.18,0),c.rotation.z=-.18;const f=new p(new Y(.018,.025,.2,6),l);f.position.set(.04,.34,0),f.rotation.z=.28,e.add(c,f);const d=new R({color:1325858,roughness:.85});[{x:-.12,y:.28,z:.02,rx:.14,rz:.06},{x:.14,y:.38,z:-.04,rx:.16,rz:.07},{x:.02,y:.48,z:.02,rx:.2,rz:.08}].forEach(h=>{const x=new p(new Y(h.rx,h.rx*.9,h.rz,10),d);x.position.set(h.x,h.y,h.z),e.add(x)})}else if(n==="hydrangea"){const i=new R({color:9063219,roughness:.8}),s=new p(new Y(.22,.16,.38,12),i);s.position.set(0,.19,0),e.add(s);const r=new R({color:2055211,roughness:.7});for(let c=0;c<5;c++){const f=c*Math.PI*2/5,d=new p(new Re(.14,6,6),r);d.scale.set(1.4,.3,.8),d.position.set(Math.cos(f)*.18,.38,Math.sin(f)*.18),d.rotation.y=-f,d.rotation.z=.35,e.add(d)}const a=[8162552,10980346,6333946];[{x:-.08,y:.52,z:.06,c:a[0]},{x:.09,y:.54,z:-.05,c:a[1]},{x:0,y:.62,z:0,c:a[2]}].forEach(c=>{const f=new R({color:c.c,roughness:.85}),d=new p(new Zn(.14,1),f);d.position.set(c.x,c.y,c.z),e.add(d)})}else if(n==="trough"){const i=new R({color:4862498,roughness:.85}),s=new p(new T(.65,.22,.25),i);s.position.set(0,.11,0),e.add(s);const r=new p(new T(.61,.04,.21),new R({color:2234384}));r.position.set(0,.21,0),e.add(r);const a=[16436245,16007006,16777215,11032055,16347926];for(let l=-.24;l<=.25;l+=.12){const c=a[Math.floor(Math.random()*a.length)],f=new p(new Zn(.06,1),new R({color:c}));f.position.set(l,.27,(Math.random()-.5)*.1),e.add(f)}}else if(n==="tall"){const i=new R({color:7226156,roughness:.8}),s=new p(new Y(.18,.14,.42,10),i);s.position.set(0,.21,0),e.add(s);const r=new R({color:4028990,roughness:.5});for(const a of[-.06,.05]){const l=new p(new Y(.015,.018,.9,6),r);l.position.set(a,.65,a*2*.03);const c=new p(new Xe(.16,.45,6),Es);c.position.set(a,1.05,0),e.add(l,c)}}else{const i=new R({color:8146486,roughness:.85}),s=new p(new Y(.2,.15,.35,10),i);s.position.set(0,.175,0);const r=new p(new Zn(.28,1),Es);r.position.set(0,.45,0),e.add(s,r)}return e}function Zx(o,t){const n=new Lt;n.position.set(o,.15,t);const e=new R({color:1409085,roughness:.5}),i=new p(new Y(.09,.1,.18,10),e);i.position.set(0,.09,0);const s=new Je(.08,.012,6,12,Math.PI),r=new p(s,e);r.position.set(0,.2,0),r.rotation.z=Math.PI/2;const a=new Y(.01,.015,.22,6);a.rotateZ(-Math.PI/3);const l=new p(a,e);l.position.set(.12,.16,0);const c=new p(new Y(.025,.015,.025,8),e);c.position.set(.21,.24,0),c.rotation.z=-Math.PI/3,n.add(i,r,l,c);const f=new R({color:366185,roughness:.6}),d=new p(new Y(.16,.16,.12,12),f);d.rotation.x=Math.PI/2,d.position.set(-.35,.55,.28);const u=new R({color:1467700,roughness:.4}),h=new p(new Je(.14,.025,6,16),u);h.position.set(-.35,.55,.28);const x=new R({color:14251782,metalness:.8,roughness:.3}),w=new p(new Y(.012,.012,.14,6),x);return w.position.set(-.24,.42,.28),n.add(d,h,w),n}function qx(o,t,n,e,i){const s=new Lt;s.position.set(o,t,n),s.rotateY(e);const r=1.48,a=3.35,l=1.62,c=new T(r,.75,a),f=new p(c,wf);f.position.set(0,.55,0),f.castShadow=!0,s.add(f);const d=new T(r-.08,.72,a*.72),u=new p(d,wf);u.position.set(0,1.25,-.15),s.add(u);const h=new T(r-.04,.62,.06);h.rotateX(.2);const x=new p(h,_f);x.position.set(0,1.22,a*.72/2-.12),s.add(x);const w=new T(r-.04,.58,.06),g=new p(w,_f);g.position.set(0,1.25,-a*.72/2-.16),s.add(g);const m=new Y(.26,.26,.18,12);m.rotateZ(Math.PI/2);const v=new R({color:1776411,roughness:.9});for(const Q of[-r/2,r/2])for(const q of[-a*.32,a*.32]){const G=new p(m,v);G.position.set(Q,.26,q),s.add(G)}const y=new T(.25,.18,.06),_=new Wt({color:16775912}),P=new p(y,_);P.position.set(-r/2+.24,.65,a/2+.01);const C=new p(y,_);C.position.set(r/2-.24,.65,a/2+.01),s.add(P,C);const A=new T(.2,.24,.06),D=new Wt({color:14489624}),S=new p(A,D);S.position.set(-r/2+.2,.75,-a/2-.01);const M=new p(A,D);M.position.set(r/2-.2,.75,-a/2-.01),s.add(S,M);const L=new T(.35,.18,.02),F=new p(L,ko);F.position.set(0,.38,a/2+.02);const B=new p(L,ko);return B.position.set(0,.42,-a/2-.02),s.add(F,B),i.add({minX:o-a/2-.1,minY:t,minZ:n-r/2-.1,maxX:o+a/2+.1,maxY:t+l,maxZ:n+r/2+.1}),s}function If(o,t,n,e){const i=new Lt;i.position.set(o,.15,t),i.rotateY(n);const s=3.4,r=new p(new Y(.06,.06,s,10),Oe);r.position.set(0,s/2,0),i.add(r);const a=new Y(.48,.52,.12,24);a.rotateX(Math.PI/2);const l=new p(a,lg);l.position.set(.35,s-.2,0),i.add(l);const c=new Re(.44,24,12,0,Math.PI*2,0,Math.PI/3);c.rotateX(Math.PI/2);const f=new p(c,cg);return f.position.set(.35,s-.2,.04),i.add(f),e.add({minX:o-.25,minY:0,minZ:t-.25,maxX:o+.25,maxY:3.8,maxZ:t+.25}),i}function $x(o,t){const n=new Lt;n.position.set(o,.15,t);const e=new Xt(.72,.72),i=new Wt({map:Zg(),toneMapped:!1}),s=new p(e,i);s.position.set(0,1.4,.65),s.rotation.y=Math.PI,n.add(s);const r=new p(new T(.76,.76,.02),Ht);r.position.set(0,1.4,.66),n.add(r);const a=new R({color:15381256,roughness:.6}),l=new p(new T(.55,.32,.38),a);l.position.set(-.38,.16,.15),n.add(l);const c=[7877903,417606,1332013,9584654];for(let A=-.2;A<=.2;A+=.1){const D=c[Math.floor(Math.random()*c.length)],S=new R({color:D,roughness:.1,metalness:.1,transparent:!0,opacity:.85}),M=new p(new Y(.03,.03,.22,8),S);M.position.set(-.38+A,.22,.15+(Math.random()-.5)*.1),n.add(M)}const f=new R({color:2450411,roughness:.6}),d=new p(new T(.55,.32,.38),f);d.position.set(.28,.16,.15),n.add(d);const u=[14251782,14427686,2450411,366185];for(let A=-.18;A<=.18;A+=.09){const D=u[Math.floor(Math.random()*u.length)],S=new p(new Y(.028,.028,.14,8),new R({color:D,metalness:.6,roughness:.3}));S.position.set(.28+A,.18,.15+(Math.random()-.5)*.1),n.add(S)}const h=new R({color:16710083,roughness:.5,metalness:.05,transparent:!0,opacity:.85});[{x:-.25,y:.24,z:-.22,s:.24},{x:.22,y:.26,z:-.2,s:.26},{x:0,y:.22,z:-.28,s:.22}].forEach(A=>{const D=new Lt;D.position.set(A.x,A.y,A.z);const S=new p(new Zn(A.s,1),h);S.scale.set(1.1,.9,1.05);const M=new p(new Xe(.045,.09,6),h);M.position.set(0,A.s*.9,0),D.add(S,M),n.add(D)});const w=new R({map:$g(),roughness:.8,transparent:!0,opacity:.85,side:pn}),g=new Re(.78,16,12,0,Math.PI*2,0,Math.PI*.55);g.scale(1.3,.75,1.05);const m=new p(g,w);m.position.set(-.04,.08,-.04),n.add(m);const v=new R({color:413243,roughness:.9}),y=new p(new Je(.85,.022,6,24),v);y.rotation.x=Math.PI/2,y.scale.set(1.3,1.05,1),y.position.set(-.04,.02,-.04),n.add(y);const _=new Lt;_.position.set(.85,0,.45),_.rotation.z=-.15;const P=new p(new Y(.012,.012,1.35,6),new R({color:10576391,roughness:.8}));P.position.set(0,.7,0);const C=new p(new Xe(.08,.35,8),new R({color:7877903,roughness:.9}));return C.position.set(0,.18,0),_.add(P,C),n.add(_),n}function Cd(o,t,n,e,i){const s=new Lt;s.position.set(o,.15,t);const r=.46,a=.95,l=.4,c=new R({map:qg(),roughness:.4,metalness:.2}),f=new p(new T(r,a,l),c);f.position.set(0,a/2,0),s.add(f);const d=new R({color:1516884,roughness:.4}),u=new p(new T(r+.03,.06,l+.03),d);u.position.set(0,a+.03,0),s.add(u);const h=new R({color:132631,roughness:.8});for(const x of[-.12,.12]){const w=new p(new Y(.05,.05,.02,12),h);w.position.set(x,a+.065,0),s.add(w)}return n.add({id:"alley-can-recycle",x:o,z:t,radius:1.8,prompt:"Recycle Can / Bottle [空き缶・ボトル回収]",onInteract:()=>{i&&i.playDeskBellSound(),e.show("空き缶・ペットボトル回収BOX: You recycle an empty canned drink with a satisfying *Clatter-clink!*")}}),s}function Kx(o,t,n,e){const i=new Lt;i.position.set(o,3.1,t);const s=new p(new Y(.012,.012,.45,6),Oe);s.rotation.x=Math.PI/2,s.position.set(0,0,-.22),i.add(s);const r=new R({color:1259559,roughness:.35}),a=new p(new Xe(.24,.12,12,1,!0),r);a.position.set(0,-.06,0),i.add(a);const l=new p(new Re(.045,8,8),ti);if(l.position.set(0,-.09,0),i.add(l),e)e.register({x:o,y:2.95,z:t,color:16753988,intensity:2.2,distance:8.5,decay:1.2,zone:"Street"});else{const c=new me(16753988,2.2,8.5,1.2);c.position.set(0,-.15,0),i.add(c),n.push(c)}return i}function Jx(o,t,n,e){const i=[{x:13.8,z:3.8},{x:18.2,z:-3.8}];for(const s of i){const r=new Lt;r.position.set(s.x,.15,s.z);const a=new p(new Y(.06,.06,3.2,8),Oe);a.position.set(0,1.6,0),r.add(a);const l=new p(new T(.2,.28,.14),ko);l.position.set(0,1.25,.08),r.add(l);const c=new p(new Y(.04,.04,.03,10),Ht);c.rotateX(Math.PI/2),c.position.set(0,1.25,.16),r.add(c);const f=new p(new T(.32,.65,.22),Oe);f.position.set(0,2.8,0),r.add(f);const d=new p(new ln(.1,12),new Wt({color:4521898}));d.position.set(0,2.65,.12),r.add(d),o.add(r),t.add({minX:s.x-.2,minY:0,minZ:s.z-.2,maxX:s.x+.2,maxY:3.5,maxZ:s.z+.2}),n.add({id:`signal-${s.x}`,x:s.x,z:s.z+.4,radius:1.6,prompt:"Push Pedestrian Crossing Button [押ボタン式]",onInteract:()=>{e.show('*Beep-Boop* "Omachi kudasai" (Please wait). Signal chime activates: *Piyo-piyo*')}})}}function jx(o,t,n,e,i){const l=new Lt;l.position.set(6,.15,21.2);const c=new Lt,f=.52,d=.2,u=.4,h=.015,x=new R({map:Yg(),roughness:.88}),w=new R({color:13147500,roughness:.9}),g=new p(new T(f,h,u),x);g.position.set(0,h/2,0),c.add(g);const m=new p(new T(f,d,h),x);m.position.set(0,d/2,u/2-h/2);const v=new p(new T(f,d,h),x);v.position.set(0,d/2,-u/2+h/2);const y=new p(new T(h,d,u-h*2),x);y.position.set(-f/2+h/2,d/2,0);const _=new p(new T(h,d,u-h*2),x);_.position.set(f/2-h/2,d/2,0),c.add(m,v,y,_);const P=.08,C=new p(new T(f,h,P),w);C.position.set(0,d+.01,u/2+P*.4),C.rotation.x=.45;const A=new p(new T(f,h,P),w);A.position.set(0,d+.01,-u/2-P*.4),A.rotation.x=-.45;const D=new p(new T(P,h,u),w);D.position.set(-f/2-P*.4,d+.01,0),D.rotation.z=-.45;const S=new p(new T(P,h,u),w);S.position.set(f/2+P*.4,d+.01,0),S.rotation.z=.45,c.add(C,A,D,S);const M=new R({color:16643810,roughness:.95}),L=new p(new T(f-.06,.08,u-.06),M);L.position.set(0,.05,0),c.add(L),l.add(c);const F=new R({color:16317180,roughness:.25}),B=new p(new Y(.1,.08,.035,16),F);B.position.set(-.42,.018,.06);const Q=new R({color:7160611,roughness:.9}),q=new p(new Y(.085,.085,.02,12),Q);q.position.set(-.42,.032,.06),l.add(B,q);const G=new R({color:14742270,roughness:.25}),J=new p(new Y(.09,.07,.045,16),G);J.position.set(-.42,.0225,-.16);const X=new p(new ln(.08,16),new R({color:3718648,roughness:.1,metalness:.4,transparent:!0,opacity:.85}));X.rotation.x=-Math.PI/2,X.position.set(-.42,.04,-.16),l.add(J,X);const lt=new R({color:13935475,roughness:.9}),dt=new p(new T(.12,.035,.32),lt);dt.position.set(.38,.018,0),l.add(dt);const pt=new Lt;pt.position.set(0,.08,0);const Et=new R({color:1579035,roughness:.82}),yt=new R({color:16317180,roughness:.85}),H=new R({color:16020150,roughness:.5}),W=new p(new Re(.14,16,12),Et);W.scale.set(.95,.76,1.25),W.position.set(0,.1,-.02),pt.add(W);const Z=new p(new Re(.09,12,8),yt);Z.scale.set(.72,.72,.35),Z.position.set(0,.11,.11),pt.add(Z);const ot=new Re(.038,10,8);ot.scale(.85,.55,1.25);const ut=new p(ot,yt);ut.position.set(-.065,.03,.12);const Pt=new p(ot,yt);Pt.position.set(.065,.03,.12),pt.add(ut,Pt);const Vt=new Re(.007,6,6);Vt.scale(1,.6,1);for(const ne of[-.065,.065])for(let ie=-1;ie<=1;ie++){const E=new p(Vt,H);E.position.set(ne+ie*.012,.032,.16),pt.add(E)}const bt=new R({color:14427686,roughness:.4}),mt=new p(new Je(.08,.011,6,16),bt);mt.position.set(0,.17,.09),mt.rotation.x=.35,pt.add(mt);const oe=new R({color:16436245,metalness:.85,roughness:.2}),U=new p(new Re(.02,10,10),oe);U.position.set(0,.14,.16),pt.add(U);const zt=new Lt;zt.position.set(0,.22,.1);const Rt=new p(new Re(.115,16,14),Et);Rt.scale.set(1.05,.95,.98),zt.add(Rt);const Dt=new Re(.036,10,8),It=new p(Dt,yt);It.position.set(-.032,-.026,.092);const Qt=new p(Dt,yt);Qt.position.set(.032,-.026,.092),zt.add(It,Qt);const Tt=new Xe(.013,.014,3);Tt.rotateZ(Math.PI);const I=new p(Tt,H);I.position.set(0,-.014,.118),zt.add(I);const b=new Wt({color:16777215}),V=new Y(.0015,.0015,.11,4);V.rotateZ(Math.PI/2);for(const ne of[-1,1])for(let ie=-1;ie<=1;ie++){const E=new p(V,b);E.position.set(ne*.075,-.024+ie*.009,.095),E.rotation.z=ne*(.15+ie*.18),E.rotation.y=ne*.35,zt.add(E)}const it=new Lt;it.position.set(-.065,.085,.01);const nt=new Lt;nt.position.set(.065,.085,.01);const et=Et,vt=new R({color:16361684,roughness:.65}),gt=new Xe(.038,.078,4),ht=new Xe(.026,.056,4),Ut=new p(gt,et);Ut.rotation.y=Math.PI/4;const ct=new p(ht,vt);ct.rotation.y=Math.PI/4,ct.position.set(0,-.004,.008),it.add(Ut,ct);const At=new p(gt,et);At.rotation.y=-Math.PI/4;const Yt=new p(ht,vt);Yt.rotation.y=-Math.PI/4,Yt.position.set(0,-.004,.008),nt.add(At,Yt),zt.add(it,nt);const le=new R({color:1096065,roughness:.2,emissive:366185,emissiveIntensity:.45}),Ft=new Wt({color:0}),te=new Wt({color:16777215}),Bt=[];for(const ne of[-.044,.044]){const ie=new Lt;ie.position.set(ne,.016,.098);const E=new p(new Re(.024,12,10),le);ie.add(E);const k=new p(new T(.007,.032,.005),Ft);k.position.set(0,0,.022),ie.add(k);const K=new p(new Re(.005,6,6),te);K.position.set(-.007,.008,.023);const $=new p(new Re(.0028,6,6),te);$.position.set(.005,-.006,.023),ie.add(K,$);const O=new Re(.026,10,8,0,Math.PI*2,0,Math.PI*.52),at=new p(O,Et);at.rotation.x=Math.PI/2,at.position.set(0,.004,0),at.scale.set(1.02,.01,1.02),ie.add(at),Bt.push(at),zt.add(ie)}pt.add(zt);const re=new Lt;re.position.set(0,.12,-.16);const z=Et,xt=new Y(.022,.026,.11,8);xt.translate(0,.055,0);const j=new p(xt,z);j.rotation.x=-.7,re.add(j);const st=new Lt;st.position.set(0,.09,-.065);const wt=new Y(.018,.022,.11,8);wt.translate(0,.055,0);const _t=new p(wt,z);_t.rotation.x=.5,st.add(_t);const Zt=new Lt;Zt.position.set(0,.09,.055);const fe=new Y(.012,.018,.1,8);fe.translate(0,.05,0);const be=new p(fe,yt);be.rotation.x=.8,Zt.add(be),st.add(Zt),re.add(st),pt.add(re),l.add(pt);const ce=new _d;ce.moveTo(.025,.025),ce.bezierCurveTo(.025,.025,.02,0,0,0),ce.bezierCurveTo(-.03,0,-.03,.035,-.03,.035),ce.bezierCurveTo(-.03,.055,-.01,.077,.025,.1),ce.bezierCurveTo(.06,.077,.08,.055,.08,.035),ce.bezierCurveTo(.08,.035,.08,0,.05,0),ce.bezierCurveTo(.035,0,.025,.025,.025,.025);const Le=new Dl(ce);Le.scale(.8,-.8,.8);const Ne=new Wt({color:16007006,side:pn,transparent:!0,opacity:0}),Ve=[];for(let ne=0;ne<3;ne++){const ie=new p(Le,Ne.clone());ie.visible=!1,l.add(ie),Ve.push({mesh:ie,vy:.35+ne*.08,life:0,maxLife:1.6,baseX:(ne-1)*.12,baseZ:ne%2===0?.08:-.08})}const Fe=()=>{Ve.forEach((ne,ie)=>{ne.life=ne.maxLife,ne.mesh.visible=!0,ne.mesh.position.set(ne.baseX,.38+ie*.05,ne.baseZ);const E=ne.mesh.material;E.opacity=1})};o.add(l);let Ce=0,ee=0;const $t=['Kuro-chan (クロちゃん) leans gently into your hand, closes its emerald eyes, and lets out a warm, rumbling purr: "Nyaaa~~ ฅ(≈>ܫ<≈)ฅ"','You scratch Kuro-chan under its chin! The tiny brass bell tinkles softly as it purrs: "*Purrrrrr... Purrrrrr...*"','Kuro-chan rolls slightly onto its side on the warm fleece blanket, happily kneading its little white paws: "Mew! <3"','Kuro-chan nudges its nose against your fingers, completely relaxed in its Ehime Mikan box: "Purr-purr... Nyaa~"'];t.add({id:"stray-cat",x:6,z:21.2,radius:2,prompt:"Pet Kuro-chan the Alley Kitten [クロちゃんを撫でる]",onInteract:()=>{ee=2.4,Fe(),i&&(i.playCatMeow(),setTimeout(()=>{i&&i.playCatPurr()},320));const ne=$t[Ce%$t.length];Ce++,n.show(ne)}});let ve=0,de=2.5,kt=!1,Be=0,Ye=4,Me=0;return{update:ne=>{if(ve+=ne,W.scale.y=.76+Math.sin(ve*2.2)*.024,W.position.y=.1+Math.sin(ve*2.2)*.003,re.rotation.y=Math.sin(ve*1.8)*.22,st.rotation.y=Math.sin(ve*1.8-.4)*.26,Zt.rotation.y=Math.sin(ve*1.8-.8)*.32,de-=ne,de<=0&&!kt&&(kt=!0,Be=0),kt)if(Be+=ne*8,Be>=Math.PI)kt=!1,de=3+Math.random()*4,Bt.forEach(ie=>ie.scale.set(1.02,.01,1.02));else{const ie=Math.sin(Be)*.98+.01;Bt.forEach(E=>E.scale.set(1.02,ie,1.02))}if(Ye-=ne,Ye<=0&&Me<=0&&(Me=Math.PI*2,Ye=3.5+Math.random()*5),Me>0){Me-=ne*14;const ie=Math.sin(Me)*.22;it.rotation.z=Math.max(0,ie),nt.rotation.z=Math.min(0,-ie*.7)}else it.rotation.z=0,nt.rotation.z=0;if(ee>0)ee-=ne,zt.rotation.x=-.22,zt.rotation.z=.06*Math.sin(ve*3),Bt.forEach(ie=>ie.scale.set(1.02,.85,1.02));else if(zt.rotation.x=0,e){const ie=e.x-6,E=e.z-21.2;if(Math.hypot(ie,E)<4.2){const K=Math.atan2(ie,E),$=Math.max(-1.3,Math.min(1.3,K));zt.rotation.y=Xr.lerp(zt.rotation.y,$,ne*3.5),zt.rotation.z=Math.sin(ve*1.5)*.06}else zt.rotation.y=Xr.lerp(zt.rotation.y,0,ne*2),zt.rotation.z=Xr.lerp(zt.rotation.z,0,ne*2)}for(const ie of Ve)if(ie.life>0){ie.life-=ne,ie.mesh.position.y+=ie.vy*ne,ie.mesh.position.x=ie.baseX+Math.sin(ie.life*4)*.03;const E=ie.life/ie.maxLife,k=ie.mesh.material;k.opacity=Math.max(0,Math.min(1,E*1.5)),ie.life<=0&&(ie.mesh.visible=!1)}}}}class Qx{constructor(t,n="low"){ue(this,"scene");ue(this,"defs",[]);ue(this,"lowPool",[]);ue(this,"highLights",[]);ue(this,"POOL_SIZE",7);ue(this,"quality","low");ue(this,"updateTimer",0);ue(this,"lastUpdatePos",new N(-9999,-9999,-9999));this.scene=t,this.quality=n;for(let e=0;e<this.POOL_SIZE;e++){const i=new me(16777215,0,10,1.2);i.position.set(0,-999,0),i.visible=this.quality==="low",t.add(i),this.lowPool.push(i)}}getQuality(){return this.quality}setQuality(t){if(this.quality!==t)if(this.quality=t,t==="high"){for(const n of this.lowPool)n.intensity=0,n.visible=!1,n.position.set(0,-999,0);for(const n of this.highLights)n.light.visible=!0,n.light.position.set(n.def.x,n.def.y,n.def.z),n.light.color.setHex(n.def.color),n.light.distance=n.def.distance,n.light.decay=n.def.decay??1.2,n.light.intensity=n.def.dynamicIntensity?n.def.dynamicIntensity():n.def.intensity}else{for(const n of this.highLights)n.light.visible=!1;for(const n of this.lowPool)n.visible=!0;this.lastUpdatePos.set(-9999,-9999,-9999)}}register(t){this.defs.push(t);const n=new me(t.color,t.intensity,t.distance,t.decay??1.2);return n.position.set(t.x,t.y,t.z),n.visible=this.quality==="high",this.scene.add(n),this.highLights.push({def:t,light:n}),t}update(t,n,e,i=!1){if(this.quality==="high"){for(let a=0;a<this.highLights.length;a++){const l=this.highLights[a];l.def.dynamicIntensity&&(l.light.intensity=l.def.dynamicIntensity())}return}this.updateTimer+=t;const s=n.distanceToSquared(this.lastUpdatePos)>.16;if(!i&&!s&&this.updateTimer<.035)return;this.updateTimer=0,this.lastUpdatePos.copy(n);const r=[];for(let a=0;a<this.defs.length;a++){const l=this.defs[a],c=l.x-n.x,f=l.y-n.y,d=l.z-n.z,u=c*c+f*f+d*d,h=l.distance*1.55;if(u>h*h)continue;const x=Math.sqrt(u),w=l.dynamicIntensity?l.dynamicIntensity():l.intensity;if(w<=.01)continue;const g=1/(1+(x/l.distance)**2);let m=w*(1-x/h)*g;l.zone&&e.includes(l.zone)&&(m*=3),r.push({def:l,score:m,curIntensity:w})}r.sort((a,l)=>l.score-a.score);for(let a=0;a<this.POOL_SIZE;a++){const l=this.lowPool[a];if(a<r.length&&r[a].score>.005){const c=r[a];l.position.set(c.def.x,c.def.y,c.def.z),l.color.setHex(c.def.color),l.intensity=c.curIntensity,l.distance=c.def.distance,l.decay=c.def.decay??1.2}else l.intensity=0,l.position.set(0,-999,0)}}}class tw{constructor(){ue(this,"ctx",null);ue(this,"ambientNode",null);ue(this,"stepTimer",0);ue(this,"stepInterval",.44)}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.startAmbience())}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startAmbience(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),e=n.getChannelData(0);let i=0;for(let a=0;a<t;a++){const l=Math.random()*2-1;e[a]=(i+.02*l)/1.02,i=e[a],e[a]*=3.5}const s=this.ctx.createBufferSource();s.buffer=n,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(140,this.ctx.currentTime),this.ambientNode=this.ctx.createGain(),this.ambientNode.gain.setValueAtTime(.18,this.ctx.currentTime),s.connect(r),r.connect(this.ambientNode),this.ambientNode.connect(this.ctx.destination),s.start()}updateFootsteps(t,n,e){if(!n){this.stepTimer=this.stepInterval*.75;return}this.stepTimer+=t,this.stepTimer>=this.stepInterval&&(this.stepTimer=0,this.playFootstep(e))}playFootstep(t){if(!this.ctx)return;const n=this.ctx.createOscillator(),e=this.ctx.createGain(),i=this.ctx.currentTime;t==="tile"?(n.frequency.setValueAtTime(320,i),n.frequency.exponentialRampToValueAtTime(80,i+.045),e.gain.setValueAtTime(.08,i),e.gain.exponentialRampToValueAtTime(.001,i+.045)):t==="walk"?(n.frequency.setValueAtTime(240,i),n.frequency.exponentialRampToValueAtTime(60,i+.055),e.gain.setValueAtTime(.1,i),e.gain.exponentialRampToValueAtTime(.001,i+.055)):t==="road"?(n.frequency.setValueAtTime(180,i),n.frequency.exponentialRampToValueAtTime(45,i+.065),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.065)):(n.frequency.setValueAtTime(140,i),n.frequency.exponentialRampToValueAtTime(50,i+.05),e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.05)),n.connect(e),e.connect(this.ctx.destination),n.start(i),n.stop(i+.07)}playVendingSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(2400,t),n.frequency.exponentialRampToValueAtTime(800,t+.03),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.04);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(280,t+.08),i.frequency.linearRampToValueAtTime(320,t+.25),s.gain.setValueAtTime(.08,t+.08),s.gain.linearRampToValueAtTime(.001,t+.28),i.connect(s),s.connect(this.ctx.destination),i.start(t+.08),i.stop(t+.29);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.frequency.setValueAtTime(180,t+.32),r.frequency.exponentialRampToValueAtTime(40,t+.45),a.gain.setValueAtTime(.35,t+.32),a.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(a),a.connect(this.ctx.destination),r.start(t+.32),r.stop(t+.46)}playElevatorChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(880,t),e.gain.setValueAtTime(.2,t),e.gain.exponentialRampToValueAtTime(.001,t+.6),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.65);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(659.25,t+.22),s.gain.setValueAtTime(.25,t+.22),s.gain.exponentialRampToValueAtTime(.001,t+.95),i.connect(s),s.connect(this.ctx.destination),i.start(t+.22),i.stop(t+1)}playCatMeow(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(550,t),n.frequency.linearRampToValueAtTime(820,t+.18),n.frequency.linearRampToValueAtTime(620,t+.42),e.gain.setValueAtTime(.01,t),e.gain.linearRampToValueAtTime(.18,t+.08),e.gain.linearRampToValueAtTime(.12,t+.28),e.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.46)}playCatPurr(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(85,t);const e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(26,t);const i=this.ctx.createGain();i.gain.setValueAtTime(35,t);const s=this.ctx.createGain();s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.22,t+.15),s.gain.setValueAtTime(.22,t+1.2),s.gain.exponentialRampToValueAtTime(.001,t+1.6),e.connect(i),i.connect(n.frequency),n.connect(s),s.connect(this.ctx.destination),e.start(t),n.start(t),e.stop(t+1.65),n.stop(t+1.65)}playCrosswalkChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(1800,t),n.frequency.exponentialRampToValueAtTime(1400,t+.12),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playFamilyMartChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=[{f:739.99,t:0,d:.18},{f:587.33,t:.18,d:.18},{f:440,t:.36,d:.18},{f:587.33,t:.54,d:.18},{f:659.25,t:.72,d:.18},{f:880,t:.9,d:.4},{f:659.25,t:1.35,d:.18},{f:739.99,t:1.53,d:.18},{f:659.25,t:1.71,d:.18},{f:440,t:1.89,d:.18},{f:587.33,t:2.07,d:.45}];for(const e of n){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e.f,t+e.t),s.gain.setValueAtTime(.16,t+e.t),s.gain.exponentialRampToValueAtTime(.001,t+e.t+e.d),i.connect(s),s.connect(this.ctx.destination),i.start(t+e.t),i.stop(t+e.t+e.d+.05)}}playSlidingDoorSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=Math.floor(this.ctx.sampleRate*.4),e=this.ctx.createBuffer(1,n,this.ctx.sampleRate),i=e.getChannelData(0);for(let l=0;l<n;l++)i[l]=(Math.random()*2-1)*(1-l/n);const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(800,t),r.Q.setValueAtTime(2,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.08,t),a.gain.linearRampToValueAtTime(.001,t+.38),s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(t)}playSipWaterSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(240,t+.14),e.gain.setValueAtTime(.12,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playDeskBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(2093,t),e.type="sine",e.frequency.setValueAtTime(3135,t),i.gain.setValueAtTime(.22,t),i.gain.exponentialRampToValueAtTime(.001,t+1.1),n.connect(i),e.connect(i),i.connect(this.ctx.destination),n.start(t),e.start(t),n.stop(t+1.1),e.stop(t+1.1)}playRamenTicketSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(587.33,t),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.12);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(880,t+.1),s.gain.setValueAtTime(.18,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(this.ctx.destination),i.start(t+.1),i.stop(t+.35);const r=Math.floor(this.ctx.sampleRate*.25),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),l=a.getChannelData(0);for(let u=0;u<r;u++)l[u]=(Math.random()*2-1)*Math.sin(u/r*Math.PI*40);const c=this.ctx.createBufferSource();c.buffer=a;const f=this.ctx.createBiquadFilter();f.type="bandpass",f.frequency.setValueAtTime(1400,t+.25);const d=this.ctx.createGain();d.gain.setValueAtTime(.08,t+.25),d.gain.linearRampToValueAtTime(.001,t+.5),c.connect(f),f.connect(d),d.connect(this.ctx.destination),c.start(t+.25)}playBikeBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let n=0;n<2;n++){const e=t+n*.12,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(2637,e),s.type="sine",s.frequency.setValueAtTime(4186,e),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),i.connect(r),s.connect(r),r.connect(this.ctx.destination),i.start(e),s.start(e),i.stop(e+.36),s.stop(e+.36)}}playFountainDrinkSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let i=0;i<4;i++){const s=t+i*.08,r=this.ctx.createOscillator(),a=this.ctx.createGain(),l=600+Math.random()*400;r.type="sine",r.frequency.setValueAtTime(l,s),r.frequency.exponentialRampToValueAtTime(l+250,s+.06),a.gain.setValueAtTime(.08,s),a.gain.exponentialRampToValueAtTime(.001,s+.06),r.connect(a),a.connect(this.ctx.destination),r.start(s),r.stop(s+.07)}const n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(260,t+.35),n.frequency.exponentialRampToValueAtTime(110,t+.5),e.gain.setValueAtTime(.12,t+.35),e.gain.exponentialRampToValueAtTime(.001,t+.52),n.connect(e),e.connect(this.ctx.destination),n.start(t+.35),n.stop(t+.53)}playSwingCreakSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(980,t),n.frequency.linearRampToValueAtTime(1420,t+.08),n.frequency.exponentialRampToValueAtTime(650,t+.22),e.gain.setValueAtTime(.05,t),e.gain.linearRampToValueAtTime(.08,t+.08),e.gain.exponentialRampToValueAtTime(.001,t+.24),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.25)}playSpringRockerSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(180,t),n.frequency.linearRampToValueAtTime(320,t+.06),n.frequency.exponentialRampToValueAtTime(90,t+.38),e.gain.setValueAtTime(.16,t),e.gain.exponentialRampToValueAtTime(.001,t+.4),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.42)}playSlideSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(420,t),n.frequency.exponentialRampToValueAtTime(140,t+.45),e.gain.setValueAtTime(.12,t),e.gain.linearRampToValueAtTime(.18,t+.1),e.gain.exponentialRampToValueAtTime(.001,t+.48),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.5)}}class ew{constructor(t){ue(this,"canvas");ue(this,"ctx");ue(this,"scale",3.2);ue(this,"lastX",-9999);ue(this,"lastZ",-9999);ue(this,"lastYaw",-9999);ue(this,"lastTime",0);this.canvas=t,this.canvas.width=256,this.canvas.height=256,this.ctx=t.getContext("2d")}update(t,n=!1){const e=performance.now();if(!n&&e-this.lastTime<50||!n&&Math.abs(t.x-this.lastX)<.04&&Math.abs(t.z-this.lastZ)<.04&&Math.abs(t.yaw-this.lastYaw)<.02)return;this.lastTime=e,this.lastX=t.x,this.lastZ=t.z,this.lastYaw=t.yaw;const i=this.ctx,s=this.canvas.width,r=this.canvas.height,a=s/2,l=r/2;i.fillStyle="#0a0e14",i.fillRect(0,0,s,r),i.save(),i.translate(a,l);const c=h=>(h-t.x)*this.scale,f=h=>(h-t.z)*this.scale;i.fillStyle="#181e28",i.fillRect(c(-55),f(-3.5),110*this.scale,7*this.scale),i.fillRect(c(13.5),f(3.5),5*this.scale,38.5*this.scale),i.fillRect(c(-16.5),f(-42),5*this.scale,38.5*this.scale),i.fillStyle="#222834",i.fillRect(c(-55),f(3.5),110*this.scale,4*this.scale),i.fillRect(c(-55),f(-7.5),110*this.scale,4*this.scale),i.fillRect(c(10.5),f(3.5),3*this.scale,38.5*this.scale),i.fillRect(c(18.5),f(3.5),3*this.scale,38.5*this.scale),i.fillRect(c(-19.5),f(-42),3*this.scale,38.5*this.scale),i.fillRect(c(-11.5),f(-42),3*this.scale,38.5*this.scale),i.fillRect(c(4),f(19.5),9.5*this.scale,3*this.scale),i.fillRect(c(-4),f(21.5),8*this.scale,3*this.scale),i.fillStyle="#222920",i.fillRect(c(-8.5),f(-36.5),18*this.scale,29*this.scale),i.strokeStyle="#2d5a3c",i.lineWidth=1.5,i.strokeRect(c(-8.5),f(-36.5),18*this.scale,29*this.scale),i.fillStyle="#343836",i.fillRect(c(-1.6),f(-18.6),3.2*this.scale,11.1*this.scale),i.fillRect(c(-3.1),f(-24.4),6.2*this.scale,5.8*this.scale),i.fillRect(c(-8.5),f(-23.3),5.4*this.scale,2.6*this.scale),i.fillRect(c(-.5),f(-30.7),3*this.scale,6.5*this.scale),i.fillStyle="#1a3d24",i.fillRect(c(2.3),f(-19.6),5.8*this.scale,7.2*this.scale),i.fillRect(c(-7.4),f(-17.6),4.8*this.scale,6.2*this.scale),i.fillStyle="#475569",i.strokeStyle="#94a3b8",i.lineWidth=1,i.fillRect(c(4.1),f(-34.1),4.2*this.scale,3.2*this.scale),i.strokeRect(c(4.1),f(-34.1),4.2*this.scale,3.2*this.scale),i.fillStyle="#ffffff";const d=[{x:16,z:0,w:4,d:7},{x:-14,z:0,w:4,d:7},{x:0,z:0,w:3.5,d:7},{x:16,z:5.5,w:5,d:3},{x:-14,z:-5.5,w:5,d:3}];for(const h of d)i.globalAlpha=.4,i.fillRect(c(h.x-h.w/2),f(h.z-h.d/2),h.w*this.scale,h.d*this.scale),i.globalAlpha=1;for(const h of Td){const x=c(h.x-h.w/2),w=f(h.z-h.d/2),g=h.w*this.scale,m=h.d*this.scale;h.id==="b-sunheights"?(i.fillStyle="#1e384d",i.strokeStyle="#4da2d6"):h.id==="b-konbini"?(i.fillStyle="#14422e",i.strokeStyle="#32b87a"):h.id==="b-ramen"?(i.fillStyle="#4a201c",i.strokeStyle="#e04c3e"):h.id==="b-cafe"?(i.fillStyle="#3d2b1c",i.strokeStyle="#c4894d"):(i.fillStyle="#262d38",i.strokeStyle="#3d485a"),i.lineWidth=1.5,i.fillRect(x,w,g,m),i.strokeRect(x,w,g,m),i.font='10px "Yu Gothic UI", sans-serif',i.textAlign="center",i.textBaseline="middle",h.id==="b-sunheights"?(i.fillStyle="#78c6f7",i.fillText("🏠 サンハイツ",c(h.x),f(h.z))):h.id==="b-konbini"?(i.fillStyle="#5ee6a2",i.fillText("🏪 コンビニ",c(h.x),f(h.z))):h.id==="b-ramen"?(i.fillStyle="#ff8878",i.fillText("🍜 麺処",c(h.x),f(h.z))):h.id==="b-cafe"&&(i.fillStyle="#f0b878",i.fillText("☕ 喫茶",c(h.x),f(h.z)))}i.font='10px "Yu Gothic UI", sans-serif',i.fillStyle="#f472b6",i.fillText("🌸 桜公園",c(.5),f(-19)),i.fillStyle="#38bdf8",i.fillText("🛝 遊具",c(-2.5),f(-29)),i.fillStyle="#94a3b8",i.font='8px "Yu Gothic UI", sans-serif',i.fillText("🚻",c(6.2),f(-32.5)),i.restore(),i.save(),i.translate(a,l),i.rotate(-t.yaw);const u=i.createRadialGradient(0,0,2,0,0,36);u.addColorStop(0,"rgba(80, 210, 255, 0.45)"),u.addColorStop(1,"rgba(80, 210, 255, 0.0)"),i.beginPath(),i.moveTo(0,0),i.arc(0,0,36,-Math.PI/2-.45,-Math.PI/2+.45),i.closePath(),i.fillStyle=u,i.fill(),i.beginPath(),i.moveTo(0,-9),i.lineTo(6,6),i.lineTo(0,3),i.lineTo(-6,6),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.strokeStyle="#00aaff",i.lineWidth=1.5,i.stroke(),i.restore(),i.fillStyle="rgba(15, 20, 28, 0.75)",i.fillRect(s-28,6,22,22),i.strokeStyle="rgba(255, 255, 255, 0.2)",i.strokeRect(s-28,6,22,22),i.font="bold 11px sans-serif",i.fillStyle="#e85d4d",i.textAlign="center",i.textBaseline="middle",i.fillText("N",s-17,17)}}class nw{constructor(){ue(this,"locEl");ue(this,"crosshairEl");ue(this,"promptEl");ue(this,"toastEl");ue(this,"overlayEl");ue(this,"lastPrompt","");ue(this,"lastToast","");this.locEl=document.getElementById("location"),this.crosshairEl=document.getElementById("crosshair"),this.promptEl=document.getElementById("prompt"),this.toastEl=document.getElementById("toast"),this.overlayEl=document.getElementById("overlay")}update(t,n,e){var i,s;this.locEl&&this.locEl.textContent!==t&&(this.locEl.textContent=t),this.promptEl&&this.lastPrompt!==n&&(this.lastPrompt=n,n?(this.promptEl.innerHTML=`<kbd>E</kbd> ${n}`,(i=this.crosshairEl)==null||i.classList.add("active")):(this.promptEl.innerHTML="",(s=this.crosshairEl)==null||s.classList.remove("active"))),this.toastEl&&this.lastToast!==e&&(this.lastToast=e,this.toastEl.textContent=e)}showOverlay(){var t;(t=this.overlayEl)==null||t.classList.remove("hidden")}hideOverlay(){var t;(t=this.overlayEl)==null||t.classList.add("hidden")}isOverlayVisible(){var t;return!((t=this.overlayEl)!=null&&t.classList.contains("hidden"))}}async function iw(){const o=new Z2;o.background=new _e(790551),o.fog=new Rl(790551,.022);const t=new Nn(74,window.innerWidth/window.innerHeight,.1,Rn.isHigh()?180:90),n=new Y2({antialias:!0,powerPreference:"high-performance"});n.setSize(window.innerWidth,window.innerHeight);const e=()=>Rn.isHigh()?Math.min(window.devicePixelRatio||1,1.5):Math.min(window.devicePixelRatio||1,1);let i=e();n.setPixelRatio(i),n.toneMapping=Nf,n.toneMappingExposure=1.15,n.shadowMap.enabled=!0,n.shadowMap.type=Df,n.shadowMap.autoUpdate=!1;const s=document.getElementById("app");s?s.appendChild(n.domElement):document.body.appendChild(n.domElement);const r=new T1(2635856,658708,.75);o.add(r);const a=new R1(8561876,.55);a.position.set(24,45,18),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=.5,a.shadow.camera.far=120,a.shadow.camera.left=-50,a.shadow.camera.right=50,a.shadow.camera.top=50,a.shadow.camera.bottom=-50,a.shadow.bias=-6e-4,o.add(a);let l=!0;I1();const c=new L1,f=new D1,d=new U1,u=new tw,h=new nw,x=new URLSearchParams(window.location.search),w=x.get("room")==="1"||x.get("spawn")==="room",g=x.get("lounge")==="1"||x.get("spawn")==="lounge";let m=0,v=18.2,y=Math.PI;w?(m=1.2,v=85.2,y=-Math.PI/2):g&&(m=-1.15,v=63.6,y=0);const _=new O1(m,v,y);_.applyCamera(t);const P=new Qx(o,Rn.getQuality());cx(o,c);const C=px(o,c,f,d,u,P,_),A=bx(o,c,f,d,_,u,P),D=document.getElementById("minimap"),S=D?new ew(D):null;let M=!1;const L=()=>{document.pointerLockElement===document.body?(M=!0,h.hideOverlay(),u.init(),u.resume()):(M=!1,h.showOverlay())};document.addEventListener("pointerlockchange",L);const F=()=>{u.init(),u.resume(),document.body.requestPointerLock()};let B=1,Q=0,q=0;const G=document.getElementById("quality-btn"),J=document.getElementById("overlay-quality-btn"),X=()=>{const bt=Rn.isHigh();G&&(G.textContent=bt?"✨ Graphics: High":"⚡ Graphics: Low",G.classList.toggle("high",bt)),J&&(J.textContent=bt?"✨ High (Full Distance & Lighting)":"⚡ Low (Optimized for Laptops)",J.classList.toggle("high",bt))},lt=()=>{const bt=Rn.isHigh();t.far=bt?180:90,t.updateProjectionMatrix(),i=e(),B=1,n.setPixelRatio(i),P.setQuality(Rn.getQuality()),l=!0},dt=()=>{const bt=Rn.toggleQuality();d.show(bt==="high"?"Graphics: High (Ultra) — Full lighting, extended draw distance & unculled interiors enabled!":"Graphics: Low (Performance) — Light pooling & interior distance culling enabled.",4)};G&&G.addEventListener("click",bt=>{bt.stopPropagation(),dt()}),J&&J.addEventListener("click",bt=>{bt.stopPropagation(),dt()}),Rn.onChange(()=>{lt(),X()}),X();const pt=document.getElementById("overlay");pt&&pt.addEventListener("click",bt=>{bt.target.closest("#overlay-quality-btn, #quality-btn, #exit-btn")||F()}),window.addEventListener("click",bt=>{if(!M){if(bt.target.closest("#overlay-quality-btn, #quality-btn, #exit-btn"))return;F()}}),window.addEventListener("mousemove",bt=>{M&&_.applyMouse(bt.movementX,bt.movementY)}),window.addEventListener("keydown",bt=>{if(bt.code==="KeyG"){dt();return}if(bt.code==="KeyR"){const mt=hf(_.x,_.z);u.init(),u.resume(),u.playElevatorChime(),mt.includes("Suite 402")?(d.show("Leaving Suite 402. Stepping out to 4F Lounge..."),setTimeout(()=>{_.teleport(-5.8,65,0),d.show("Sun Heights 4F Elevator Lounge. Dual lifts and emergency stairs ahead.",5)},350)):mt.includes("4F Elevator Lounge")?(d.show("*Ding* Taking elevator down to 1F Entrance Lobby..."),setTimeout(()=>{_.teleport(0,18.2,Math.PI),d.show("1F Entrance Lobby. Step out to explore midnight Tokyo.",5)},400)):(d.show("*Ding* Taking elevator up to 4F Lounge..."),setTimeout(()=>{_.teleport(-1.15,63.6,0),d.show("Sun Heights 4F Elevator Lounge. Suite 402 is down the hall to the left.",5)},400));return}if(bt.code==="KeyE"){const mt=f.prompt().toLowerCase();mt.includes("buy")||mt.includes("coffee")||mt.includes("tea")||mt.includes("famichiki")||mt.includes("chicken")?u.playVendingSound():mt.includes("water")||mt.includes("drink park")?u.playSipWaterSound():mt.includes("elevator")?u.playElevatorChime():mt.includes("cat")||mt.includes("pet")?u.playCatMeow():mt.includes("signal")||mt.includes("crossing")||mt.includes("button")?u.playCrosswalkChime():mt.includes("slide")&&u.playSlideSound(),f.use()}}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(i*B),l=!0}),w?d.show("Welcome home to Suite 402. Explore your room, check the cyber workstation, or gaze off the balcony.",6):g?d.show("Sun Heights — 4F Elevator Lounge. Suite 402 is down the hall to the left.",6):d.show("Welcome home to Tokyo. Walk through the front glass doors to explore, or take the elevator to 4F Lounge.",6);const Et=new C1,H=1e3/120;let W=performance.now(),Z=0,ot=performance.now(),ut=120;const Pt=document.getElementById("fps-badge");function Vt(bt){if(requestAnimationFrame(Vt),document.hidden)return;const mt=M?H:1e3/30,oe=bt-W;if(oe<mt-1)return;W=bt-oe%mt,Z++,bt-ot>=1e3&&(ut=Math.round(Z*1e3/(bt-ot)),Z=0,ot=bt,Pt&&(Pt.textContent=`${ut} FPS`),Rn.isHigh()||(ut<22?(Q++,q=0,Q>=2&&B>.82&&(B=.82,n.setPixelRatio(i*B))):ut>=48?(q++,Q=0,q>=3&&B<1&&(B=1,n.setPixelRatio(i*B))):(Q=0,q=0)));const U=Math.min(Et.getDelta(),.05);_.update(U,M,c),_.applyCamera(t),C.update(U,_),A.update(U),f.update(_,c),d.update(U);const zt=M&&!_.seated&&_.moving();let Rt="walk";const Dt=hf(_.x,_.z);P.update(U,t.position,Dt),Dt.includes("Lobby")||Dt.includes("Store")||Dt.includes("Ramen")?Rt="tile":Dt.includes("Park")?Rt="park":bd(_.x,_.z)&&(Rt="road"),u.updateFootsteps(U,zt,Rt),h.update(Dt,f.prompt(),d.text),S&&S.update(_),l&&(n.shadowMap.needsUpdate=!0,l=!1),n.render(o,t)}requestAnimationFrame(Vt)}window.addEventListener("DOMContentLoaded",()=>{iw().catch(o=>console.error("Initialization error:",o))});
