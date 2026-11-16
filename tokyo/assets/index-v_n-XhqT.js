var Xf=Object.defineProperty;var Yf=(o,t,n)=>t in o?Xf(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var ce=(o,t,n)=>Yf(o,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="170",Zf=0,tl=1,qf=2,Uc=1,Nc=2,Zn=3,fi=0,dn=1,nn=2,li=0,$i=1,br=2,el=3,nl=4,$f=5,Mi=100,Kf=101,Jf=102,jf=103,Qf=104,td=200,ed=201,nd=202,id=203,Tr=204,Er=205,od=206,sd=207,rd=208,ad=209,ld=210,cd=211,fd=212,dd=213,hd=214,Ar=0,Rr=1,Cr=2,Qi=3,Pr=4,Ir=5,Lr=6,Dr=7,zc=0,ud=1,pd=2,ci=0,md=1,gd=2,xd=3,Fc=4,_d=5,wd=6,vd=7,Oc=300,to=301,eo=302,Ur=303,Nr=304,Cs=306,Ce=1e3,bi=1001,zr=1002,Pn=1003,yd=1004,Ho=1005,On=1006,Gs=1007,Ti=1008,jn=1009,kc=1010,Bc=1011,Po=1012,ma=1013,Ei=1014,qn=1015,Fo=1016,ga=1017,xa=1018,no=1020,Gc=35902,Hc=1021,Vc=1022,Cn=1023,Wc=1024,Xc=1025,Ki=1026,io=1027,Yc=1028,_a=1029,Zc=1030,wa=1031,va=1033,ws=33776,vs=33777,ys=33778,Ms=33779,Fr=35840,Or=35841,kr=35842,Br=35843,Gr=36196,Hr=37492,Vr=37496,Wr=37808,Xr=37809,Yr=37810,Zr=37811,qr=37812,$r=37813,Kr=37814,Jr=37815,jr=37816,Qr=37817,ta=37818,ea=37819,na=37820,ia=37821,Ss=36492,oa=36494,sa=36495,qc=36283,ra=36284,aa=36285,la=36286,Md=3200,Sd=3201,$c=0,bd=1,ai="",he="srgb",ro="srgb-linear",Ps="linear",Se="srgb",Ii=7680,il=519,Td=512,Ed=513,Ad=514,Kc=515,Rd=516,Cd=517,Pd=518,Id=519,ol=35044,sl="300 es",$n=2e3,Ts=2001;class ao{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(n)===-1&&e[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const i=e.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const So=Math.PI/180,Io=180/Math.PI;function Ci(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(tn[o&255]+tn[o>>8&255]+tn[o>>16&255]+tn[o>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[e&255]+tn[e>>8&255]+tn[e>>16&255]+tn[e>>24&255]).toLowerCase()}function Je(o,t,n){return Math.max(t,Math.min(n,o))}function ya(o,t){return(o%t+t)%t}function Ld(o,t,n,e,i){return e+(o-t)*(i-e)/(n-t)}function Dd(o,t,n){return o!==t?(n-o)/(t-o):0}function bo(o,t,n){return(1-n)*o+n*t}function Ud(o,t,n,e){return bo(o,t,1-Math.exp(-n*e))}function Nd(o,t=1){return t-Math.abs(ya(o,t*2)-t)}function zd(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*(3-2*o))}function Fd(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*o*(o*(o*6-15)+10))}function Od(o,t){return o+Math.floor(Math.random()*(t-o+1))}function kd(o,t){return o+Math.random()*(t-o)}function Bd(o){return o*(.5-Math.random())}function Gd(o){o!==void 0&&(rl=o);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(o){return o*So}function Vd(o){return o*Io}function Wd(o){return(o&o-1)===0&&o!==0}function Xd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Yd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zd(o,t,n,e,i){const s=Math.cos,r=Math.sin,a=s(n/2),l=r(n/2),c=s((t+e)/2),d=r((t+e)/2),f=s((t-e)/2),u=r((t-e)/2),h=s((e-t)/2),m=r((e-t)/2);switch(i){case"XYX":o.set(a*d,l*f,l*u,a*c);break;case"YZY":o.set(l*u,a*d,l*f,a*c);break;case"ZXZ":o.set(l*f,l*u,a*d,a*c);break;case"XZX":o.set(a*d,l*m,l*h,a*c);break;case"YXY":o.set(l*h,a*d,l*m,a*c);break;case"ZYZ":o.set(l*m,l*h,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function an(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Hs={DEG2RAD:So,RAD2DEG:Io,generateUUID:Ci,clamp:Je,euclideanModulo:ya,mapLinear:Ld,inverseLerp:Dd,lerp:bo,damp:Ud,pingpong:Nd,smoothstep:zd,smootherstep:Fd,randInt:Od,randFloat:kd,randFloatSpread:Bd,seededRandom:Gd,degToRad:Hd,radToDeg:Vd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:Zd,normalize:an,denormalize:Yi};class Bt{constructor(t=0,n=0){Bt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,e=this.y,i=t.elements;return this.x=i[0]*n+i[3]*e+i[6],this.y=i[1]*n+i[4]*e+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(Je(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y;return n*n+e*e}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const e=Math.cos(n),i=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*e-r*i+t.x,this.y=s*i+r*e+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,n,e,i,s,r,a,l,c){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,e,i,s,r,a,l,c)}set(t,n,e,i,s,r,a,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=e,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],this}extractBasis(t,n,e){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,i=n.elements,s=this.elements,r=e[0],a=e[3],l=e[6],c=e[1],d=e[4],f=e[7],u=e[2],h=e[5],m=e[8],_=i[0],x=i[3],p=i[6],M=i[1],v=i[4],w=i[7],P=i[2],R=i[5],E=i[8];return s[0]=r*_+a*M+l*P,s[3]=r*x+a*v+l*R,s[6]=r*p+a*w+l*E,s[1]=c*_+d*M+f*P,s[4]=c*x+d*v+f*R,s[7]=c*p+d*w+f*E,s[2]=u*_+h*M+m*P,s[5]=u*x+h*v+m*R,s[8]=u*p+h*w+m*E,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*a*c-e*s*d+e*a*l+i*s*c-i*r*l}invert(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=d*r-a*c,u=a*l-d*s,h=c*s-r*l,m=n*f+e*u+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(i*c-d*e)*_,t[2]=(a*e-i*r)*_,t[3]=u*_,t[4]=(d*n-i*l)*_,t[5]=(i*s-a*n)*_,t[6]=h*_,t[7]=(e*l-c*n)*_,t[8]=(r*n-e*s)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,e,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(e*l,e*c,-e*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Vs.makeScale(t,n)),this}rotate(t){return this.premultiply(Vs.makeRotation(-t)),this}translate(t,n){return this.premultiply(Vs.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,e,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,e=t.elements;for(let i=0;i<9;i++)if(n[i]!==e[i])return!1;return!0}fromArray(t,n=0){for(let e=0;e<9;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new de;function Jc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Es(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qd(){const o=Es("canvas");return o.style.display="block",o}const al={};function vo(o){o in al||(al[o]=!0,console.warn(o))}function $d(o,t,n){return new Promise(function(e,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:e()}}setTimeout(s,n)})}function Kd(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jd(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _e={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(o,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===Se&&(o.r=Kn(o.r),o.g=Kn(o.g),o.b=Kn(o.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Se&&(o.r=Ji(o.r),o.g=Ji(o.g),o.b=Ji(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ai?Ps:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,n){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Kn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ji(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ll=[.64,.33,.3,.6,.15,.06],cl=[.2126,.7152,.0722],fl=[.3127,.329],dl=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_e.define({[ro]:{primaries:ll,whitePoint:fl,transfer:Ps,toXYZ:dl,fromXYZ:hl,luminanceCoefficients:cl,workingColorSpaceConfig:{unpackColorSpace:he},outputColorSpaceConfig:{drawingBufferColorSpace:he}},[he]:{primaries:ll,whitePoint:fl,transfer:Se,toXYZ:dl,fromXYZ:hl,luminanceCoefficients:cl,outputColorSpaceConfig:{drawingBufferColorSpace:he}}});let Li;class jd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Li===void 0&&(Li=Es("canvas")),Li.width=t.width,Li.height=t.height;const e=Li.getContext("2d");t instanceof ImageData?e.putImageData(t,0,0):e.drawImage(t,0,0,t.width,t.height),n=Li}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Es("canvas");n.width=t.width,n.height=t.height;const e=n.getContext("2d");e.drawImage(t,0,0,t.width,t.height);const i=e.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Kn(s[r]/255)*255;return e.putImageData(i,0,0),n}else if(t.data){const n=t.data.slice(0);for(let e=0;e<n.length;e++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[e]=Math.floor(Kn(n[e]/255)*255):n[e]=Kn(n[e]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qd=0;class jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const e={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Ws(i[r].image)):s.push(Ws(i[r]))}else s=Ws(i);e.url=s}return n||(t.images[this.uuid]=e),e}}function Ws(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class cn extends ao{constructor(t=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,e=bi,i=bi,s=On,r=Ti,a=Cn,l=jn,c=cn.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Ci(),this.name="",this.source=new jc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=e,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const e={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),n||(t.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ce:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ce:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Oc;cn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,n=0,e=0,i=1){Te.prototype.isVector4=!0,this.x=t,this.y=n,this.z=e,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,e,i){return this.x=t,this.y=n,this.z=e,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,e=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*e+r[8]*i+r[12]*s,this.y=r[1]*n+r[5]*e+r[9]*i+r[13]*s,this.z=r[2]*n+r[6]*e+r[10]*i+r[14]*s,this.w=r[3]*n+r[7]*e+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,e,i,s;const l=t.elements,c=l[0],d=l[4],f=l[8],u=l[1],h=l[5],m=l[9],_=l[2],x=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-x)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+x)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,w=(h+1)/2,P=(p+1)/2,R=(d+u)/4,E=(f+_)/4,I=(m+x)/4;return v>w&&v>P?v<.01?(e=0,i=.707106781,s=.707106781):(e=Math.sqrt(v),i=R/e,s=E/e):w>P?w<.01?(e=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),e=R/i,s=I/i):P<.01?(e=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),e=E/s,i=I/s),this.set(e,i,s,n),this}let M=Math.sqrt((x-m)*(x-m)+(f-_)*(f-_)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(x-m)/M,this.y=(f-_)/M,this.z=(u-d)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this.w=t.w+(n.w-t.w)*e,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends ao{constructor(t=1,n=1,e={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Te(0,0,t,n),this.scissorTest=!1,this.viewport=new Te(0,0,t,n);const i={width:t,height:n,depth:1};e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},e);const s=new cn(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace);s.flipY=!1,s.generateMipmaps=e.generateMipmaps,s.internalFormat=e.internalFormat,this.textures=[];const r=e.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.depthTexture=e.depthTexture,this.samples=e.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,e=1){if(this.width!==t||this.height!==n||this.depth!==e){this.width=t,this.height=n,this.depth=e;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=n,this.textures[i].image.depth=e;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++)this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new jc(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends eh{constructor(t=1,n=1,e={}){super(t,n,e),this.isWebGLRenderTarget=!0}}class Qc extends cn{constructor(t=null,n=1,e=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:e,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends cn{constructor(t=null,n=1,e=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:e,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lo{constructor(t=0,n=0,e=0,i=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=e,this._w=i}static slerpFlat(t,n,e,i,s,r,a){let l=e[i+0],c=e[i+1],d=e[i+2],f=e[i+3];const u=s[r+0],h=s[r+1],m=s[r+2],_=s[r+3];if(a===0){t[n+0]=l,t[n+1]=c,t[n+2]=d,t[n+3]=f;return}if(a===1){t[n+0]=u,t[n+1]=h,t[n+2]=m,t[n+3]=_;return}if(f!==_||l!==u||c!==h||d!==m){let x=1-a;const p=l*u+c*h+d*m+f*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,p*M);x=Math.sin(x*R)/P,a=Math.sin(a*R)/P}const w=a*M;if(l=l*x+u*w,c=c*x+h*w,d=d*x+m*w,f=f*x+_*w,x===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=f}static multiplyQuaternionsFlat(t,n,e,i,s,r){const a=e[i],l=e[i+1],c=e[i+2],d=e[i+3],f=s[r],u=s[r+1],h=s[r+2],m=s[r+3];return t[n]=a*m+d*f+l*h-c*u,t[n+1]=l*m+d*u+c*f-a*h,t[n+2]=c*m+d*h+a*u-l*f,t[n+3]=d*m-a*f-l*u-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,e,i){return this._x=t,this._y=n,this._z=e,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const e=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(e/2),d=a(i/2),f=a(s/2),u=l(e/2),h=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=u*d*f+c*h*m,this._y=c*h*f-u*d*m,this._z=c*d*m+u*h*f,this._w=c*d*f-u*h*m;break;case"YXZ":this._x=u*d*f+c*h*m,this._y=c*h*f-u*d*m,this._z=c*d*m-u*h*f,this._w=c*d*f+u*h*m;break;case"ZXY":this._x=u*d*f-c*h*m,this._y=c*h*f+u*d*m,this._z=c*d*m+u*h*f,this._w=c*d*f-u*h*m;break;case"ZYX":this._x=u*d*f-c*h*m,this._y=c*h*f+u*d*m,this._z=c*d*m-u*h*f,this._w=c*d*f+u*h*m;break;case"YZX":this._x=u*d*f+c*h*m,this._y=c*h*f+u*d*m,this._z=c*d*m-u*h*f,this._w=c*d*f-u*h*m;break;case"XZY":this._x=u*d*f-c*h*m,this._y=c*h*f-u*d*m,this._z=c*d*m+u*h*f,this._w=c*d*f+u*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const e=n/2,i=Math.sin(e);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,e=n[0],i=n[4],s=n[8],r=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=e+a+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(r-i)*h}else if(e>a&&e>f){const h=2*Math.sqrt(1+e-a-f);this._w=(d-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-e-f);this._w=(s-c)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-e-a);this._w=(r-i)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let e=t.dot(n)+1;return e<Number.EPSILON?(e=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=e):(this._x=0,this._y=-t.z,this._z=t.y,this._w=e)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=e),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,n){const e=this.angleTo(t);if(e===0)return this;const i=Math.min(1,n/e);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const e=t._x,i=t._y,s=t._z,r=t._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=e*d+r*a+i*c-s*l,this._y=i*d+r*l+s*a-e*c,this._z=s*d+r*c+e*l-i*a,this._w=r*d-e*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const e=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+e*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=e,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*r+n*this._w,this._x=h*e+n*this._x,this._y=h*i+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,u=Math.sin(n*d)/c;return this._w=r*f+this._w*u,this._x=e*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,n,e){return this.copy(t).slerp(n,e)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,e=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=e}set(t,n,e){return e===void 0&&(e=this.z),this.x=t,this.y=n,this.z=e,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ul.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,e=this.y,i=this.z,s=t.elements;return this.x=s[0]*n+s[3]*e+s[6]*i,this.y=s[1]*n+s[4]*e+s[7]*i,this.z=s[2]*n+s[5]*e+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,e=this.y,i=this.z,s=t.elements,r=1/(s[3]*n+s[7]*e+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*e+s[8]*i+s[12])*r,this.y=(s[1]*n+s[5]*e+s[9]*i+s[13])*r,this.z=(s[2]*n+s[6]*e+s[10]*i+s[14])*r,this}applyQuaternion(t){const n=this.x,e=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*e),d=2*(a*n-s*i),f=2*(s*e-r*n);return this.x=n+l*c+r*f-a*d,this.y=e+l*d+a*c-s*f,this.z=i+l*f+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,e=this.y,i=this.z,s=t.elements;return this.x=s[0]*n+s[4]*e+s[8]*i,this.y=s[1]*n+s[5]*e+s[9]*i,this.z=s[2]*n+s[6]*e+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(n,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,e){return this.x=t.x+(n.x-t.x)*e,this.y=t.y+(n.y-t.y)*e,this.z=t.z+(n.z-t.z)*e,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const e=t.x,i=t.y,s=t.z,r=n.x,a=n.y,l=n.z;return this.x=i*l-s*a,this.y=s*r-e*l,this.z=e*a-i*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const e=t.dot(this)/n;return this.copy(t).multiplyScalar(e)}projectOnPlane(t){return Xs.copy(this).projectOnVector(t),this.sub(Xs)}reflect(t){return this.sub(Xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const e=this.dot(t)/n;return Math.acos(Je(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,e=this.y-t.y,i=this.z-t.z;return n*n+e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,e){const i=Math.sin(n)*t;return this.x=i*Math.sin(e),this.y=Math.cos(n)*t,this.z=i*Math.cos(e),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,e){return this.x=t*Math.sin(n),this.y=e,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),e=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=e,this.z=i,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,e=Math.sqrt(1-n*n);return this.x=e*Math.cos(t),this.y=n,this.z=e*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new N,ul=new lo;class Oo{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n+=3)this.expandByPoint(Tn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,e=t.count;n<e;n++)this.expandByPoint(Tn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,e=t.length;n<e;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const e=Tn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(e),this.max.copy(t).add(e),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const e=t.geometry;if(e!==void 0){const s=e.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Tn):Tn.fromBufferAttribute(s,r),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,e;return t.normal.x>0?(n=t.normal.x*this.min.x,e=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,e=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,e+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,e+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,e+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,e+=t.normal.z*this.min.z),n<=-t.constant&&e>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uo),Wo.subVectors(this.max,uo),Di.subVectors(t.a,uo),Ui.subVectors(t.b,uo),Ni.subVectors(t.c,uo),ei.subVectors(Ui,Di),ni.subVectors(Ni,Ui),pi.subVectors(Di,Ni);let n=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-pi.z,pi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,pi.z,0,-pi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-pi.y,pi.x,0];return!Ys(n,Di,Ui,Ni,Wo)||(n=[1,0,0,0,1,0,0,0,1],!Ys(n,Di,Ui,Ni,Wo))?!1:(Xo.crossVectors(ei,ni),n=[Xo.x,Xo.y,Xo.z],Ys(n,Di,Ui,Ni,Wo))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new N,new N,new N,new N,new N,new N,new N,new N],Tn=new N,Vo=new Oo,Di=new N,Ui=new N,Ni=new N,ei=new N,ni=new N,pi=new N,uo=new N,Wo=new N,Xo=new N,mi=new N;function Ys(o,t,n,e,i){for(let s=0,r=o.length-3;s<=r;s+=3){mi.fromArray(o,s);const a=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=t.dot(mi),c=n.dot(mi),d=e.dot(mi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const ih=new Oo,po=new N,Zs=new N;class Is{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const e=this.center;n!==void 0?e.copy(n):ih.setFromPoints(t).getCenter(e);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,e.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const e=this.center.distanceToSquared(t);return n.copy(t),e>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;po.subVectors(t,this.center);const n=po.lengthSq();if(n>this.radius*this.radius){const e=Math.sqrt(n),i=(e-this.radius)*.5;this.center.addScaledVector(po,i/e),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(po.copy(t.center).add(Zs)),this.expandByPoint(po.copy(t.center).sub(Zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new N,qs=new N,Yo=new N,ii=new N,$s=new N,Zo=new N,Ks=new N;class tf{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const e=n.dot(this.direction);return e<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Vn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,n),Vn.distanceToSquared(t))}distanceSqToSegment(t,n,e,i){qs.copy(t).add(n).multiplyScalar(.5),Yo.copy(n).sub(t).normalize(),ii.copy(this.origin).sub(qs);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Yo),a=ii.dot(this.direction),l=-ii.dot(Yo),c=ii.lengthSq(),d=Math.abs(1-r*r);let f,u,h,m;if(d>0)if(f=r*l-a,u=r*a-l,m=s*d,f>=0)if(u>=-m)if(u<=m){const _=1/d;f*=_,u*=_,h=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=s,f=Math.max(0,-(r*u+a)),h=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(r*u+a)),h=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-r*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(f=Math.max(0,-(r*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+u*(u+2*l)+c);else u=r>0?-s:s,f=Math.max(0,-(r*u+a)),h=-f*f+u*(u+2*l)+c;return e&&e.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(qs).addScaledVector(Yo,u),h}intersectSphere(t,n){Vn.subVectors(t.center,this.origin);const e=Vn.dot(this.direction),i=Vn.dot(Vn)-e*e,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=e-r,l=e+r;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const e=-(this.origin.dot(t.normal)+t.constant)/n;return e>=0?e:null}intersectPlane(t,n){const e=this.distanceToPlane(t);return e===null?null:this.at(e,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let e,i,s,r,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(e=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(e=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),e>r||s>i||((s>e||isNaN(e))&&(e=s),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),e>l||a>i)||((a>e||e!==e)&&(e=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(e>=0?e:i,n)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,n,e,i,s){$s.subVectors(n,t),Zo.subVectors(e,t),Ks.crossVectors($s,Zo);let r=this.direction.dot(Ks),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(Zo.crossVectors(ii,Zo));if(l<0)return null;const c=a*this.direction.dot($s.cross(ii));if(c<0||l+c>r)return null;const d=-a*ii.dot(Ks);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,n,e,i,s,r,a,l,c,d,f,u,h,m,_,x){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,e,i,s,r,a,l,c,d,f,u,h,m,_,x)}set(t,n,e,i,s,r,a,l,c,d,f,u,h,m,_,x){const p=this.elements;return p[0]=t,p[4]=n,p[8]=e,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=f,p[14]=u,p[3]=h,p[7]=m,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const n=this.elements,e=t.elements;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],this}copyPosition(t){const n=this.elements,e=t.elements;return n[12]=e[12],n[13]=e[13],n[14]=e[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,e){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(t,n,e){return this.set(t.x,n.x,e.x,0,t.y,n.y,e.y,0,t.z,n.z,e.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,e=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),r=1/zi.setFromMatrixColumn(t,2).length();return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=0,n[4]=e[4]*s,n[5]=e[5]*s,n[6]=e[6]*s,n[7]=0,n[8]=e[8]*r,n[9]=e[9]*r,n[10]=e[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,e=t.x,i=t.y,s=t.z,r=Math.cos(e),a=Math.sin(e),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=r*d,h=r*f,m=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=h+m*c,n[5]=u-_*c,n[9]=-a*l,n[2]=_-u*c,n[6]=m+h*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*d,h=l*f,m=c*d,_=c*f;n[0]=u+_*a,n[4]=m*a-h,n[8]=r*c,n[1]=r*f,n[5]=r*d,n[9]=-a,n[2]=h*a-m,n[6]=_+u*a,n[10]=r*l}else if(t.order==="ZXY"){const u=l*d,h=l*f,m=c*d,_=c*f;n[0]=u-_*a,n[4]=-r*f,n[8]=m+h*a,n[1]=h+m*a,n[5]=r*d,n[9]=_-u*a,n[2]=-r*c,n[6]=a,n[10]=r*l}else if(t.order==="ZYX"){const u=r*d,h=r*f,m=a*d,_=a*f;n[0]=l*d,n[4]=m*c-h,n[8]=u*c+_,n[1]=l*f,n[5]=_*c+u,n[9]=h*c-m,n[2]=-c,n[6]=a*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,h=r*c,m=a*l,_=a*c;n[0]=l*d,n[4]=_-u*f,n[8]=m*f+h,n[1]=f,n[5]=r*d,n[9]=-a*d,n[2]=-c*d,n[6]=h*f+m,n[10]=u-_*f}else if(t.order==="XZY"){const u=r*l,h=r*c,m=a*l,_=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+_,n[5]=r*d,n[9]=h*f-m,n[2]=m*f-h,n[6]=a*d,n[10]=_*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oh,t,sh)}lookAt(t,n,e){const i=this.elements;return _n.subVectors(t,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),oi.crossVectors(e,_n),oi.lengthSq()===0&&(Math.abs(e.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),oi.crossVectors(e,_n)),oi.normalize(),qo.crossVectors(_n,oi),i[0]=oi.x,i[4]=qo.x,i[8]=_n.x,i[1]=oi.y,i[5]=qo.y,i[9]=_n.y,i[2]=oi.z,i[6]=qo.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const e=t.elements,i=n.elements,s=this.elements,r=e[0],a=e[4],l=e[8],c=e[12],d=e[1],f=e[5],u=e[9],h=e[13],m=e[2],_=e[6],x=e[10],p=e[14],M=e[3],v=e[7],w=e[11],P=e[15],R=i[0],E=i[4],I=i[8],S=i[12],y=i[1],D=i[5],k=i[9],H=i[13],J=i[2],q=i[6],V=i[10],Q=i[14],X=i[3],rt=i[7],at=i[11],dt=i[15];return s[0]=r*R+a*y+l*J+c*X,s[4]=r*E+a*D+l*q+c*rt,s[8]=r*I+a*k+l*V+c*at,s[12]=r*S+a*H+l*Q+c*dt,s[1]=d*R+f*y+u*J+h*X,s[5]=d*E+f*D+u*q+h*rt,s[9]=d*I+f*k+u*V+h*at,s[13]=d*S+f*H+u*Q+h*dt,s[2]=m*R+_*y+x*J+p*X,s[6]=m*E+_*D+x*q+p*rt,s[10]=m*I+_*k+x*V+p*at,s[14]=m*S+_*H+x*Q+p*dt,s[3]=M*R+v*y+w*J+P*X,s[7]=M*E+v*D+w*q+P*rt,s[11]=M*I+v*k+w*V+P*at,s[15]=M*S+v*H+w*Q+P*dt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],e=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],d=t[2],f=t[6],u=t[10],h=t[14],m=t[3],_=t[7],x=t[11],p=t[15];return m*(+s*l*f-i*c*f-s*a*u+e*c*u+i*a*h-e*l*h)+_*(+n*l*h-n*c*u+s*r*u-i*r*h+i*c*d-s*l*d)+x*(+n*c*f-n*a*h-s*r*f+e*r*h+s*a*d-e*c*d)+p*(-i*a*d-n*l*f+n*a*u+i*r*f-e*r*u+e*l*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,e){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=n,i[14]=e),this}invert(){const t=this.elements,n=t[0],e=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=t[9],u=t[10],h=t[11],m=t[12],_=t[13],x=t[14],p=t[15],M=f*x*c-_*u*c+_*l*h-a*x*h-f*l*p+a*u*p,v=m*u*c-d*x*c-m*l*h+r*x*h+d*l*p-r*u*p,w=d*_*c-m*f*c+m*a*h-r*_*h-d*a*p+r*f*p,P=m*f*l-d*_*l-m*a*u+r*_*u+d*a*x-r*f*x,R=n*M+e*v+i*w+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=M*E,t[1]=(_*u*s-f*x*s-_*i*h+e*x*h+f*i*p-e*u*p)*E,t[2]=(a*x*s-_*l*s+_*i*c-e*x*c-a*i*p+e*l*p)*E,t[3]=(f*l*s-a*u*s-f*i*c+e*u*c+a*i*h-e*l*h)*E,t[4]=v*E,t[5]=(d*x*s-m*u*s+m*i*h-n*x*h-d*i*p+n*u*p)*E,t[6]=(m*l*s-r*x*s-m*i*c+n*x*c+r*i*p-n*l*p)*E,t[7]=(r*u*s-d*l*s+d*i*c-n*u*c-r*i*h+n*l*h)*E,t[8]=w*E,t[9]=(m*f*s-d*_*s-m*e*h+n*_*h+d*e*p-n*f*p)*E,t[10]=(r*_*s-m*a*s+m*e*c-n*_*c-r*e*p+n*a*p)*E,t[11]=(d*a*s-r*f*s-d*e*c+n*f*c+r*e*h-n*a*h)*E,t[12]=P*E,t[13]=(d*_*i-m*f*i+m*e*u-n*_*u-d*e*x+n*f*x)*E,t[14]=(m*a*i-r*_*i-m*e*l+n*_*l+r*e*x-n*a*x)*E,t[15]=(r*f*i-d*a*i+d*e*l-n*f*l-r*e*u+n*a*u)*E,this}scale(t){const n=this.elements,e=t.x,i=t.y,s=t.z;return n[0]*=e,n[4]*=i,n[8]*=s,n[1]*=e,n[5]*=i,n[9]*=s,n[2]*=e,n[6]*=i,n[10]*=s,n[3]*=e,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,e,i))}makeTranslation(t,n,e){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,e,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),e=Math.sin(t);return this.set(1,0,0,0,0,n,-e,0,0,e,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,0,e,0,0,1,0,0,-e,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),e=Math.sin(t);return this.set(n,-e,0,0,e,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const e=Math.cos(n),i=Math.sin(n),s=1-e,r=t.x,a=t.y,l=t.z,c=s*r,d=s*a;return this.set(c*r+e,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+e,d*l-i*r,0,c*l-i*a,d*l+i*r,s*l*l+e,0,0,0,0,1),this}makeScale(t,n,e){return this.set(t,0,0,0,0,n,0,0,0,0,e,0,0,0,0,1),this}makeShear(t,n,e,i,s,r){return this.set(1,e,s,0,t,1,r,0,n,i,1,0,0,0,0,1),this}compose(t,n,e){const i=this.elements,s=n._x,r=n._y,a=n._z,l=n._w,c=s+s,d=r+r,f=a+a,u=s*c,h=s*d,m=s*f,_=r*d,x=r*f,p=a*f,M=l*c,v=l*d,w=l*f,P=e.x,R=e.y,E=e.z;return i[0]=(1-(_+p))*P,i[1]=(h+w)*P,i[2]=(m-v)*P,i[3]=0,i[4]=(h-w)*R,i[5]=(1-(u+p))*R,i[6]=(x+M)*R,i[7]=0,i[8]=(m+v)*E,i[9]=(x-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,n,e){const i=this.elements;let s=zi.set(i[0],i[1],i[2]).length();const r=zi.set(i[4],i[5],i[6]).length(),a=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);const c=1/s,d=1/r,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,n.setFromRotationMatrix(En),e.x=s,e.y=r,e.z=a,this}makePerspective(t,n,e,i,s,r,a=$n){const l=this.elements,c=2*s/(n-t),d=2*s/(e-i),f=(n+t)/(n-t),u=(e+i)/(e-i);let h,m;if(a===$n)h=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===Ts)h=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,e,i,s,r,a=$n){const l=this.elements,c=1/(n-t),d=1/(e-i),f=1/(r-s),u=(n+t)*c,h=(e+i)*d;let m,_;if(a===$n)m=(r+s)*f,_=-2*f;else if(a===Ts)m=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,e=t.elements;for(let i=0;i<16;i++)if(n[i]!==e[i])return!1;return!0}fromArray(t,n=0){for(let e=0;e<16;e++)this.elements[e]=t[e+n];return this}toArray(t=[],n=0){const e=this.elements;return t[n]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t[n+9]=e[9],t[n+10]=e[10],t[n+11]=e[11],t[n+12]=e[12],t[n+13]=e[13],t[n+14]=e[14],t[n+15]=e[15],t}}const zi=new N,En=new Ie,oh=new N(0,0,0),sh=new N(1,1,1),oi=new N,qo=new N,_n=new N,pl=new Ie,ml=new lo;class Dn{constructor(t=0,n=0,e=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=e,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,e,i=this._order){return this._x=t,this._y=n,this._z=e,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,e=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],d=i[9],f=i[2],u=i[6],h=i[10];switch(n){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,e===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,e){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,n,e)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class ef{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rh=0;const gl=new N,Fi=new lo,Wn=new Ie,$o=new N,mo=new N,ah=new N,lh=new lo,xl=new N(1,0,0),_l=new N(0,1,0),wl=new N(0,0,1),vl={type:"added"},ch={type:"removed"},Oi={type:"childadded",child:null},Js={type:"childremoved",child:null};class Ke extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new N,n=new Dn,e=new lo,i=new N(1,1,1);function s(){e.setFromEuler(n,!1)}function r(){n.setFromQuaternion(e,void 0,!1)}n._onChange(s),e._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new de}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Fi.setFromAxisAngle(t,n),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,n){return Fi.setFromAxisAngle(t,n),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,n){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,n,e){t.isVector3?$o.copy(t):$o.set(t,n,e);const i=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(mo,$o,this.up):Wn.lookAt($o,mo,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ch),Js.child=t,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let e=0,i=this.children.length;e<i;e++){const r=this.children[e].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,e=[]){this[t]===n&&e.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,n,e);return e}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,t,ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let e=0,i=n.length;e<i;e++)n[e].updateMatrixWorld(t)}updateWorldMatrix(t,n){const e=this.parent;if(t===!0&&e!==null&&e.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",e={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(n){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),f=r(t.shapes),u=r(t.skeletons),h=r(t.animations),m=r(t.nodes);a.length>0&&(e.geometries=a),l.length>0&&(e.materials=l),c.length>0&&(e.textures=c),d.length>0&&(e.images=d),f.length>0&&(e.shapes=f),u.length>0&&(e.skeletons=u),h.length>0&&(e.animations=h),m.length>0&&(e.nodes=m)}return e.object=i,e;function r(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let e=0;e<t.children.length;e++){const i=t.children[e];this.add(i.clone())}return this}}Ke.DEFAULT_UP=new N(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new N,Xn=new N,js=new N,Yn=new N,ki=new N,Bi=new N,yl=new N,Qs=new N,tr=new N,er=new N,nr=new Te,ir=new Te,or=new Te;class Rn{constructor(t=new N,n=new N,e=new N){this.a=t,this.b=n,this.c=e}static getNormal(t,n,e,i){i.subVectors(e,n),An.subVectors(t,n),i.cross(An);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,n,e,i,s){An.subVectors(i,n),Xn.subVectors(e,n),js.subVectors(t,n);const r=An.dot(An),a=An.dot(Xn),l=An.dot(js),c=Xn.dot(Xn),d=Xn.dot(js),f=r*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,h=(c*l-a*d)*u,m=(r*d-a*l)*u;return s.set(1-h-m,m,h)}static containsPoint(t,n,e,i){return this.getBarycoord(t,n,e,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,n,e,i,s,r,a,l){return this.getBarycoord(t,n,e,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(r,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,n,e,i,s,r){return nr.setScalar(0),ir.setScalar(0),or.setScalar(0),nr.fromBufferAttribute(t,n),ir.fromBufferAttribute(t,e),or.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(nr,s.x),r.addScaledVector(ir,s.y),r.addScaledVector(or,s.z),r}static isFrontFacing(t,n,e,i){return An.subVectors(e,n),Xn.subVectors(t,n),An.cross(Xn).dot(i)<0}set(t,n,e){return this.a.copy(t),this.b.copy(n),this.c.copy(e),this}setFromPointsAndIndices(t,n,e,i){return this.a.copy(t[n]),this.b.copy(t[e]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,n,e,i){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,e),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),An.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Rn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,e,i,s){return Rn.getInterpolation(t,this.a,this.b,this.c,n,e,i,s)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const e=this.a,i=this.b,s=this.c;let r,a;ki.subVectors(i,e),Bi.subVectors(s,e),Qs.subVectors(t,e);const l=ki.dot(Qs),c=Bi.dot(Qs);if(l<=0&&c<=0)return n.copy(e);tr.subVectors(t,i);const d=ki.dot(tr),f=Bi.dot(tr);if(d>=0&&f<=d)return n.copy(i);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(e).addScaledVector(ki,r);er.subVectors(t,s);const h=ki.dot(er),m=Bi.dot(er);if(m>=0&&h<=m)return n.copy(s);const _=h*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(e).addScaledVector(Bi,a);const x=d*m-h*f;if(x<=0&&f-d>=0&&h-m>=0)return yl.subVectors(s,i),a=(f-d)/(f-d+(h-m)),n.copy(i).addScaledVector(yl,a);const p=1/(x+_+u);return r=_*p,a=u*p,n.copy(e).addScaledVector(ki,r).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function sr(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class me{constructor(t,n,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,e)}set(t,n,e){if(n===void 0&&e===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,n,e);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,n),this}setRGB(t,n,e,i=_e.workingColorSpace){return this.r=t,this.g=n,this.b=e,_e.toWorkingColorSpace(this,i),this}setHSL(t,n,e,i=_e.workingColorSpace){if(t=ya(t,1),n=Je(n,0,1),e=Je(e,0,1),n===0)this.r=this.g=this.b=e;else{const s=e<=.5?e*(1+n):e+n-e*n,r=2*e-s;this.r=sr(r,s,t+1/3),this.g=sr(r,s,t),this.b=sr(r,s,t-1/3)}return _e.toWorkingColorSpace(this,i),this}setStyle(t,n=he){function e(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return e(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=he){const e=nf[t.toLowerCase()];return e!==void 0?this.setHex(e,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return _e.fromWorkingColorSpace(en.copy(this),t),Math.round(Je(en.r*255,0,255))*65536+Math.round(Je(en.g*255,0,255))*256+Math.round(Je(en.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=_e.workingColorSpace){_e.fromWorkingColorSpace(en.copy(this),n);const e=en.r,i=en.g,s=en.b,r=Math.max(e,i,s),a=Math.min(e,i,s);let l,c;const d=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=d<=.5?f/(r+a):f/(2-r-a),r){case e:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-e)/f+2;break;case s:l=(e-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=_e.workingColorSpace){return _e.fromWorkingColorSpace(en.copy(this),n),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=he){_e.fromWorkingColorSpace(en.copy(this),t);const n=en.r,e=en.g,i=en.b;return t!==he?`color(${t} ${n.toFixed(3)} ${e.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(e*255)},${Math.round(i*255)})`}offsetHSL(t,n,e){return this.getHSL(si),this.setHSL(si.h+t,si.s+n,si.l+e)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,e){return this.r=t.r+(n.r-t.r)*e,this.g=t.g+(n.g-t.g)*e,this.b=t.b+(n.b-t.b)*e,this}lerpHSL(t,n){this.getHSL(si),t.getHSL(Ko);const e=bo(si.h,Ko.h,n),i=bo(si.s,Ko.s,n),s=bo(si.l,Ko.l,n);return this.setHSL(e,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,e=this.g,i=this.b,s=t.elements;return this.r=s[0]*n+s[3]*e+s[6]*i,this.g=s[1]*n+s[4]*e+s[7]*i,this.b=s[2]*n+s[5]*e+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new me;me.NAMES=nf;let fh=0;class co extends ao{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Ci(),this.name="",this.blending=$i,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tr,this.blendDst=Er,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const e=t[n];if(e===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(e):i&&i.isVector3&&e&&e.isVector3?i.copy(e):this[n]=e}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const e={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(e.dispersion=this.dispersion),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(t).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(t).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(t).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(t).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(t).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapRotation!==void 0&&(e.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(e.blending=this.blending),this.side!==fi&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==Tr&&(e.blendSrc=this.blendSrc),this.blendDst!==Er&&(e.blendDst=this.blendDst),this.blendEquation!==Mi&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(e.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(n){const s=i(t.textures),r=i(t.images);s.length>0&&(e.textures=s),r.length>0&&(e.images=r)}return e}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let e=null;if(n!==null){const i=n.length;e=new Array(i);for(let s=0;s!==i;++s)e[s]=n[s].clone()}return this.clippingPlanes=e,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qt extends co{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new N,Jo=new Bt;class In{constructor(t,n,e=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=e,this.usage=ol,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,e){t*=this.itemSize,e*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=n.array[e+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,e=this.count;n<e;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(t),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,e=this.count;n<e;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,e=this.count;n<e;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,e=this.count;n<e;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,e=this.count;n<e;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let e=this.array[t*this.itemSize+n];return this.normalized&&(e=Yi(e,this.array)),e}setComponent(t,n,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+n]=e,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yi(n,this.array)),n}setX(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yi(n,this.array)),n}setY(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yi(n,this.array)),n}setW(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,e){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),e=an(e,this.array)),this.array[t+0]=n,this.array[t+1]=e,this}setXYZ(t,n,e,i){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),e=an(e,this.array),i=an(i,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=i,this}setXYZW(t,n,e,i,s){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),e=an(e,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[t+0]=n,this.array[t+1]=e,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ol&&(t.usage=this.usage),t}}class of extends In{constructor(t,n,e){super(new Uint16Array(t),n,e)}}class sf extends In{constructor(t,n,e){super(new Uint32Array(t),n,e)}}class Pe extends In{constructor(t,n,e){super(new Float32Array(t),n,e)}}let dh=0;const bn=new Ie,rr=new Ke,Gi=new N,wn=new Oo,go=new Oo,$e=new N;class on extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jc(t)?sf:of)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,e=0){this.groups.push({start:t,count:n,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const e=this.attributes.normal;if(e!==void 0){const s=new de().getNormalMatrix(t);e.applyNormalMatrix(s),e.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,n,e){return bn.makeTranslation(t,n,e),this.applyMatrix4(bn),this}scale(t,n,e){return bn.makeScale(t,n,e),this.applyMatrix4(bn),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Pe(e,3))}else{for(let e=0,i=n.count;e<i;e++){const s=t[e];n.setXYZ(e,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,i=n.length;e<i;e++){const s=n[e];wn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const e=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const a=n[s];go.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(wn.min,go.min),wn.expandByPoint($e),$e.addVectors(wn.max,go.max),wn.expandByPoint($e)):(wn.expandByPoint(go.min),wn.expandByPoint(go.max))}wn.getCenter(e);let i=0;for(let s=0,r=t.count;s<r;s++)$e.fromBufferAttribute(t,s),i=Math.max(i,e.distanceToSquared($e));if(n)for(let s=0,r=n.length;s<r;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)$e.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),$e.add(Gi)),i=Math.max(i,e.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const e=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*e.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<e.count;I++)a[I]=new N,l[I]=new N;const c=new N,d=new N,f=new N,u=new Bt,h=new Bt,m=new Bt,_=new N,x=new N;function p(I,S,y){c.fromBufferAttribute(e,I),d.fromBufferAttribute(e,S),f.fromBufferAttribute(e,y),u.fromBufferAttribute(s,I),h.fromBufferAttribute(s,S),m.fromBufferAttribute(s,y),d.sub(c),f.sub(c),h.sub(u),m.sub(u);const D=1/(h.x*m.y-m.x*h.y);isFinite(D)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(D),x.copy(f).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(D),a[I].add(_),a[S].add(_),a[y].add(_),l[I].add(x),l[S].add(x),l[y].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,S=M.length;I<S;++I){const y=M[I],D=y.start,k=y.count;for(let H=D,J=D+k;H<J;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const v=new N,w=new N,P=new N,R=new N;function E(I){P.fromBufferAttribute(i,I),R.copy(P);const S=a[I];v.copy(S),v.sub(P.multiplyScalar(P.dot(S))).normalize(),w.crossVectors(R,S);const D=w.dot(l[I])<0?-1:1;r.setXYZW(I,v.x,v.y,v.z,D)}for(let I=0,S=M.length;I<S;++I){const y=M[I],D=y.start,k=y.count;for(let H=D,J=D+k;H<J;H+=3)E(t.getX(H+0)),E(t.getX(H+1)),E(t.getX(H+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let e=this.getAttribute("normal");if(e===void 0)e=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",e);else for(let u=0,h=e.count;u<h;u++)e.setXYZ(u,0,0,0);const i=new N,s=new N,r=new N,a=new N,l=new N,c=new N,d=new N,f=new N;if(t)for(let u=0,h=t.count;u<h;u+=3){const m=t.getX(u+0),_=t.getX(u+1),x=t.getX(u+2);i.fromBufferAttribute(n,m),s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),d.subVectors(r,s),f.subVectors(i,s),d.cross(f),a.fromBufferAttribute(e,m),l.fromBufferAttribute(e,_),c.fromBufferAttribute(e,x),a.add(d),l.add(d),c.add(d),e.setXYZ(m,a.x,a.y,a.z),e.setXYZ(_,l.x,l.y,l.z),e.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)i.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),f.subVectors(i,s),d.cross(f),e.setXYZ(u+0,d.x,d.y,d.z),e.setXYZ(u+1,d.x,d.y,d.z),e.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,e=t.count;n<e;n++)$e.fromBufferAttribute(t,n),$e.normalize(),t.setXYZ(n,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let h=0,m=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*d;for(let p=0;p<d;p++)u[m++]=c[h++]}return new In(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new on,e=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,e);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],h=t(u,e);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const e=this.attributes;for(const l in e){const c=e[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const h=c[f];d.push(h.toJSON(t.data))}d.length>0&&(i[l]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const e=t.index;e!==null&&this.setIndex(e.clone(n));const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(n))}const s=t.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new Ie,gi=new tf,jo=new Is,Sl=new N,Qo=new N,ts=new N,es=new N,ar=new N,ns=new N,bl=new N,is=new N;class g extends Ke{constructor(t=new on,n=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const i=n[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const e=this.geometry,i=e.attributes.position,s=e.morphAttributes.position,r=e.morphTargetsRelative;n.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(ar.fromBufferAttribute(f,t),r?ns.addScaledVector(ar,d):ns.addScaledVector(ar.sub(n),d))}n.add(ns)}return n}raycast(t,n){const e=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),jo.copy(e.boundingSphere),jo.applyMatrix4(s),gi.copy(t.ray).recast(t.near),!(jo.containsPoint(gi.origin)===!1&&(gi.intersectSphere(jo,Sl)===null||gi.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(Ml.copy(s).invert(),gi.copy(t.ray).applyMatrix4(Ml),!(e.boundingBox!==null&&gi.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(t,n,gi)))}_computeIntersections(t,n,e){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const x=u[m],p=r[x.materialIndex],M=Math.max(x.start,h.start),v=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let w=M,P=v;w<P;w+=3){const R=a.getX(w),E=a.getX(w+1),I=a.getX(w+2);i=os(this,p,t,e,c,d,f,R,E,I),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,n.push(i))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let x=m,p=_;x<p;x+=3){const M=a.getX(x),v=a.getX(x+1),w=a.getX(x+2);i=os(this,r,t,e,c,d,f,M,v,w),i&&(i.faceIndex=Math.floor(x/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const x=u[m],p=r[x.materialIndex],M=Math.max(x.start,h.start),v=Math.min(l.count,Math.min(x.start+x.count,h.start+h.count));for(let w=M,P=v;w<P;w+=3){const R=w,E=w+1,I=w+2;i=os(this,p,t,e,c,d,f,R,E,I),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,n.push(i))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let x=m,p=_;x<p;x+=3){const M=x,v=x+1,w=x+2;i=os(this,r,t,e,c,d,f,M,v,w),i&&(i.faceIndex=Math.floor(x/3),n.push(i))}}}}function hh(o,t,n,e,i,s,r,a){let l;if(t.side===dn?l=e.intersectTriangle(r,s,i,!0,a):l=e.intersectTriangle(i,s,r,t.side===fi,a),l===null)return null;is.copy(a),is.applyMatrix4(o.matrixWorld);const c=n.ray.origin.distanceTo(is);return c<n.near||c>n.far?null:{distance:c,point:is.clone(),object:o}}function os(o,t,n,e,i,s,r,a,l,c){o.getVertexPosition(a,Qo),o.getVertexPosition(l,ts),o.getVertexPosition(c,es);const d=hh(o,t,n,e,Qo,ts,es,bl);if(d){const f=new N;Rn.getBarycoord(bl,Qo,ts,es,f),i&&(d.uv=Rn.getInterpolatedAttribute(i,a,l,c,f,new Bt)),s&&(d.uv1=Rn.getInterpolatedAttribute(s,a,l,c,f,new Bt)),r&&(d.normal=Rn.getInterpolatedAttribute(r,a,l,c,f,new N),d.normal.dot(e.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};Rn.getNormal(Qo,ts,es,u.normal),d.face=u,d.barycoord=f}return d}class C extends on{constructor(t=1,n=1,e=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:e,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],f=[];let u=0,h=0;m("z","y","x",-1,-1,e,n,t,r,s,0),m("z","y","x",1,-1,e,n,-t,r,s,1),m("x","z","y",1,1,t,e,n,i,r,2),m("x","z","y",1,-1,t,e,-n,i,r,3),m("x","y","z",1,-1,t,n,e,i,s,4),m("x","y","z",-1,-1,t,n,-e,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function m(_,x,p,M,v,w,P,R,E,I,S){const y=w/E,D=P/I,k=w/2,H=P/2,J=R/2,q=E+1,V=I+1;let Q=0,X=0;const rt=new N;for(let at=0;at<V;at++){const dt=at*D-H;for(let wt=0;wt<q;wt++){const vt=wt*y-k;rt[_]=vt*M,rt[x]=dt*v,rt[p]=J,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[x]=0,rt[p]=R>0?1:-1,d.push(rt.x,rt.y,rt.z),f.push(wt/E),f.push(1-at/I),Q+=1}}for(let at=0;at<I;at++)for(let dt=0;dt<E;dt++){const wt=u+dt+q*at,vt=u+dt+q*(at+1),B=u+(dt+1)+q*(at+1),G=u+(dt+1)+q*at;l.push(wt,vt,G),l.push(vt,B,G),X+=6}a.addGroup(h,X,S),h+=X,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new C(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function oo(o){const t={};for(const n in o){t[n]={};for(const e in o[n]){const i=o[n][e];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][e]=null):t[n][e]=i.clone():Array.isArray(i)?t[n][e]=i.slice():t[n][e]=i}}return t}function ln(o){const t={};for(let n=0;n<o.length;n++){const e=oo(o[n]);for(const i in e)t[i]=e[i]}return t}function uh(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function rf(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const ph={clone:oo,merge:ln};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends co{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oo(t.uniforms),this.uniformsGroups=uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?n.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[i]={type:"m4",value:r.toArray()}:n.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const e={};for(const i in this.extensions)this.extensions[i]===!0&&(e[i]=!0);return Object.keys(e).length>0&&(n.extensions=e),n}}class af extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=$n}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new N,Tl=new Bt,El=new Bt;class vn extends af{constructor(t=50,n=1,e=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=e,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,e){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,n){return this.getViewBounds(t,Tl,El),n.subVectors(El,Tl)}setViewOffset(t,n,e,i,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(So*.5*this.fov)/this.zoom,e=2*n,i=this.aspect*e,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,n-=r.offsetY*e/c,i*=r.width/l,e*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-e,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hi=-90,Vi=1;class xh extends Ke{constructor(t,n,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(Hi,Vi,t,n);i.layers=this.layers,this.add(i);const s=new vn(Hi,Vi,t,n);s.layers=this.layers,this.add(s);const r=new vn(Hi,Vi,t,n);r.layers=this.layers,this.add(r);const a=new vn(Hi,Vi,t,n);a.layers=this.layers,this.add(a);const l=new vn(Hi,Vi,t,n);l.layers=this.layers,this.add(l);const c=new vn(Hi,Vi,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[e,i,s,r,a,l]=n;for(const c of n)this.remove(c);if(t===$n)e.up.set(0,1,0),e.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)e.up.set(0,-1,0),e.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:e,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,d]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=e.texture.generateMipmaps;e.texture.generateMipmaps=!1,t.setRenderTarget(e,0,i),t.render(n,s),t.setRenderTarget(e,1,i),t.render(n,r),t.setRenderTarget(e,2,i),t.render(n,a),t.setRenderTarget(e,3,i),t.render(n,l),t.setRenderTarget(e,4,i),t.render(n,c),e.texture.generateMipmaps=_,t.setRenderTarget(e,5,i),t.render(n,d),t.setRenderTarget(f,u,h),t.xr.enabled=m,e.texture.needsPMREMUpdate=!0}}class lf extends cn{constructor(t,n,e,i,s,r,a,l,c,d){t=t!==void 0?t:[],n=n!==void 0?n:to,super(t,n,e,i,s,r,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _h extends Ai{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const e={width:t,height:t,depth:1},i=[e,e,e,e,e,e];this.texture=new lf(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const e={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new C(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:oo(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:dn,blending:li});s.uniforms.tEquirect.value=n;const r=new g(i,s),a=n.minFilter;return n.minFilter===Ti&&(n.minFilter=On),new xh(1,10,this).update(t,r),n.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,e,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,e,i);t.setRenderTarget(s)}}const lr=new N,wh=new N,vh=new de;class vi{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,e,i){return this.normal.set(t,n,e),this.constant=i,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,e){const i=lr.subVectors(e,n).cross(wh.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const e=t.delta(lr),i=this.normal.dot(e);if(i===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(t.start).addScaledVector(e,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),e=this.distanceToPoint(t.end);return n<0&&e>0||e<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const e=n||vh.getNormalMatrix(t),i=this.coplanarPoint(lr).applyMatrix4(t),s=this.normal.applyMatrix3(e).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Is,ss=new N;class Ma{constructor(t=new vi,n=new vi,e=new vi,i=new vi,s=new vi,r=new vi){this.planes=[t,n,e,i,s,r]}set(t,n,e,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(e),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const n=this.planes;for(let e=0;e<6;e++)n[e].copy(t.planes[e]);return this}setFromProjectionMatrix(t,n=$n){const e=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],d=i[5],f=i[6],u=i[7],h=i[8],m=i[9],_=i[10],x=i[11],p=i[12],M=i[13],v=i[14],w=i[15];if(e[0].setComponents(l-s,u-c,x-h,w-p).normalize(),e[1].setComponents(l+s,u+c,x+h,w+p).normalize(),e[2].setComponents(l+r,u+d,x+m,w+M).normalize(),e[3].setComponents(l-r,u-d,x-m,w-M).normalize(),e[4].setComponents(l-a,u-f,x-_,w-v).normalize(),n===$n)e[5].setComponents(l+a,u+f,x+_,w+v).normalize();else if(n===Ts)e[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const n=this.planes,e=t.center,i=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<i)return!1;return!0}intersectsBox(t){const n=this.planes;for(let e=0;e<6;e++){const i=n[e];if(ss.x=i.normal.x>0?t.max.x:t.min.x,ss.y=i.normal.y>0?t.max.y:t.min.y,ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let e=0;e<6;e++)if(n[e].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cf(){let o=null,t=!1,n=null,e=null;function i(s,r){n(s,r),e=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(e=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(e),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){o=s}}}function yh(o){const t=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,u=o.createBuffer();o.bindBuffer(l,u),o.bufferData(l,c,d),a.onUploadCallback();let h;if(c instanceof Float32Array)h=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=o.HALF_FLOAT:h=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=o.SHORT;else if(c instanceof Uint32Array)h=o.UNSIGNED_INT;else if(c instanceof Int32Array)h=o.INT;else if(c instanceof Int8Array)h=o.BYTE;else if(c instanceof Uint8Array)h=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function e(a,l,c){const d=l.array,f=l.updateRanges;if(o.bindBuffer(c,a),f.length===0)o.bufferSubData(c,0,d);else{f.sort((h,m)=>h.start-m.start);let u=0;for(let h=1;h<f.length;h++){const m=f[u],_=f[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let h=0,m=f.length;h<m;h++){const _=f[h];o.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");e(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class $t extends on{constructor(t=1,n=1,e=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:e,heightSegments:i};const s=t/2,r=n/2,a=Math.floor(e),l=Math.floor(i),c=a+1,d=l+1,f=t/a,u=n/l,h=[],m=[],_=[],x=[];for(let p=0;p<d;p++){const M=p*u-r;for(let v=0;v<c;v++){const w=v*f-s;m.push(w,-M,0),_.push(0,0,1),x.push(v/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,w=M+c*(p+1),P=M+1+c*(p+1),R=M+1+c*p;h.push(v,w,R),h.push(w,P,R)}this.setIndex(h),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sh=`#ifdef USE_ALPHAHASH
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
#endif`,bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
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
#endif`,Ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
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
#endif`,Ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
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
#endif`,zh=`#ifdef USE_BUMPMAP
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
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xh=`#define PI 3.141592653589793
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
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zh=`vec3 transformedNormal = objectNormal;
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
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
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
}`,fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uu=`uniform bool receiveShadow;
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
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wu=`PhysicalMaterial material;
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
#endif`,vu=`struct PhysicalMaterial {
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
}`,yu=`
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iu=`#if defined( USE_POINTS_UV )
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
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
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
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,F0=`#define LAMBERT
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
}`,O0=`#define LAMBERT
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
}`,k0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,G0=`#define NORMAL
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
}`,H0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,Y0=`#define STANDARD
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
}`,Z0=`#define TOON
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
}`,q0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,K0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,j0=`uniform vec3 color;
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
}`,Q0=`uniform float rotation;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Mh,alphahash_pars_fragment:Sh,alphamap_fragment:bh,alphamap_pars_fragment:Th,alphatest_fragment:Eh,alphatest_pars_fragment:Ah,aomap_fragment:Rh,aomap_pars_fragment:Ch,batching_pars_vertex:Ph,batching_vertex:Ih,begin_vertex:Lh,beginnormal_vertex:Dh,bsdfs:Uh,iridescence_fragment:Nh,bumpmap_pars_fragment:zh,clipping_planes_fragment:Fh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Bh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:Vh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:qh,displacementmap_vertex:$h,emissivemap_fragment:Kh,emissivemap_pars_fragment:Jh,colorspace_fragment:jh,colorspace_pars_fragment:Qh,envmap_fragment:tu,envmap_common_pars_fragment:eu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:pu,envmap_vertex:ou,fog_vertex:su,fog_pars_vertex:ru,fog_fragment:au,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_pars_fragment:fu,lights_lambert_fragment:du,lights_lambert_pars_fragment:hu,lights_pars_begin:uu,lights_toon_fragment:mu,lights_toon_pars_fragment:gu,lights_phong_fragment:xu,lights_phong_pars_fragment:_u,lights_physical_fragment:wu,lights_physical_pars_fragment:vu,lights_fragment_begin:yu,lights_fragment_maps:Mu,lights_fragment_end:Su,logdepthbuf_fragment:bu,logdepthbuf_pars_fragment:Tu,logdepthbuf_pars_vertex:Eu,logdepthbuf_vertex:Au,map_fragment:Ru,map_pars_fragment:Cu,map_particle_fragment:Pu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Du,morphinstance_vertex:Uu,morphcolor_vertex:Nu,morphnormal_vertex:zu,morphtarget_pars_vertex:Fu,morphtarget_vertex:Ou,normal_fragment_begin:ku,normal_fragment_maps:Bu,normal_pars_fragment:Gu,normal_pars_vertex:Hu,normal_vertex:Vu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:Zu,iridescence_pars_fragment:qu,opaque_fragment:$u,packing:Ku,premultiplied_alpha_fragment:Ju,project_vertex:ju,dithering_fragment:Qu,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:o0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:a0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:f0,specularmap_fragment:d0,specularmap_pars_fragment:h0,tonemapping_fragment:u0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:x0,uv_pars_vertex:_0,uv_vertex:w0,worldpos_vertex:v0,background_vert:y0,background_frag:M0,backgroundCube_vert:S0,backgroundCube_frag:b0,cube_vert:T0,cube_frag:E0,depth_vert:A0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:I0,equirect_frag:L0,linedashed_vert:D0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:z0,meshlambert_vert:F0,meshlambert_frag:O0,meshmatcap_vert:k0,meshmatcap_frag:B0,meshnormal_vert:G0,meshnormal_frag:H0,meshphong_vert:V0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:Y0,meshtoon_vert:Z0,meshtoon_frag:q0,points_vert:$0,points_frag:K0,shadow_vert:J0,shadow_frag:j0,sprite_vert:Q0,sprite_frag:tp},Rt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Fn={basic:{uniforms:ln([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:ln([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new me(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:ln([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:ln([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:ln([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new me(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:ln([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:ln([Rt.points,Rt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:ln([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:ln([Rt.common,Rt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:ln([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:ln([Rt.sprite,Rt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:ln([Rt.common,Rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:ln([Rt.lights,Rt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Fn.physical={uniforms:ln([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const rs={r:0,b:0,g:0},_i=new Dn,ep=new Ie;function np(o,t,n,e,i,s,r){const a=new me(0);let l=s===!0?0:1,c,d,f=null,u=0,h=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?n:t).get(v)),v}function _(M){let v=!1;const w=m(M);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(o.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(M,v){const w=m(v);w&&(w.isCubeTexture||w.mapping===Cs)?(d===void 0&&(d=new g(new C(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:oo(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),_i.copy(v.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(_i)),d.material.toneMapped=_e.getTransfer(w.colorSpace)!==Se,(f!==w||u!==w.version||h!==o.toneMapping)&&(d.material.needsUpdate=!0,f=w,u=w.version,h=o.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new g(new $t(2,2),new di({name:"BackgroundMaterial",uniforms:oo(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_e.getTransfer(w.colorSpace)!==Se,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||u!==w.version||h!==o.toneMapping)&&(c.material.needsUpdate=!0,f=w,u=w.version,h=o.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(rs,rf(o)),e.buffers.color.setClear(rs.r,rs.g,rs.b,v,r)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:x}}function ip(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),e={},i=u(null);let s=i,r=!1;function a(y,D,k,H,J){let q=!1;const V=f(H,k,D);s!==V&&(s=V,c(s.object)),q=h(y,H,k,J),q&&m(y,H,k,J),J!==null&&t.update(J,o.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,w(y,D,k,H),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return o.createVertexArray()}function c(y){return o.bindVertexArray(y)}function d(y){return o.deleteVertexArray(y)}function f(y,D,k){const H=k.wireframe===!0;let J=e[y.id];J===void 0&&(J={},e[y.id]=J);let q=J[D.id];q===void 0&&(q={},J[D.id]=q);let V=q[H];return V===void 0&&(V=u(l()),q[H]=V),V}function u(y){const D=[],k=[],H=[];for(let J=0;J<n;J++)D[J]=0,k[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:H,object:y,attributes:{},index:null}}function h(y,D,k,H){const J=s.attributes,q=D.attributes;let V=0;const Q=k.getAttributes();for(const X in Q)if(Q[X].location>=0){const at=J[X];let dt=q[X];if(dt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),at===void 0||at.attribute!==dt||dt&&at.data!==dt.data)return!0;V++}return s.attributesNum!==V||s.index!==H}function m(y,D,k,H){const J={},q=D.attributes;let V=0;const Q=k.getAttributes();for(const X in Q)if(Q[X].location>=0){let at=q[X];at===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const dt={};dt.attribute=at,at&&at.data&&(dt.data=at.data),J[X]=dt,V++}s.attributes=J,s.attributesNum=V,s.index=H}function _(){const y=s.newAttributes;for(let D=0,k=y.length;D<k;D++)y[D]=0}function x(y){p(y,0)}function p(y,D){const k=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;k[y]=1,H[y]===0&&(o.enableVertexAttribArray(y),H[y]=1),J[y]!==D&&(o.vertexAttribDivisor(y,D),J[y]=D)}function M(){const y=s.newAttributes,D=s.enabledAttributes;for(let k=0,H=D.length;k<H;k++)D[k]!==y[k]&&(o.disableVertexAttribArray(k),D[k]=0)}function v(y,D,k,H,J,q,V){V===!0?o.vertexAttribIPointer(y,D,k,J,q):o.vertexAttribPointer(y,D,k,H,J,q)}function w(y,D,k,H){_();const J=H.attributes,q=k.getAttributes(),V=D.defaultAttributeValues;for(const Q in q){const X=q[Q];if(X.location>=0){let rt=J[Q];if(rt===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const at=rt.normalized,dt=rt.itemSize,wt=t.get(rt);if(wt===void 0)continue;const vt=wt.buffer,B=wt.type,G=wt.bytesPerElement,Z=B===o.INT||B===o.UNSIGNED_INT||rt.gpuType===ma;if(rt.isInterleavedBufferAttribute){const st=rt.data,pt=st.stride,Pt=rt.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<X.locationSize;Ft++)p(X.location+Ft,st.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<X.locationSize;Ft++)x(X.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Ft=0;Ft<X.locationSize;Ft++)v(X.location+Ft,dt/X.locationSize,B,at,pt*G,(Pt+dt/X.locationSize*Ft)*G,Z)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<X.locationSize;st++)p(X.location+st,rt.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<X.locationSize;st++)x(X.location+st);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let st=0;st<X.locationSize;st++)v(X.location+st,dt/X.locationSize,B,at,dt*G,dt/X.locationSize*st*G,Z)}}else if(V!==void 0){const at=V[Q];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv(X.location,at);break;case 3:o.vertexAttrib3fv(X.location,at);break;case 4:o.vertexAttrib4fv(X.location,at);break;default:o.vertexAttrib1fv(X.location,at)}}}}M()}function P(){I();for(const y in e){const D=e[y];for(const k in D){const H=D[k];for(const J in H)d(H[J].object),delete H[J];delete D[k]}delete e[y]}}function R(y){if(e[y.id]===void 0)return;const D=e[y.id];for(const k in D){const H=D[k];for(const J in H)d(H[J].object),delete H[J];delete D[k]}delete e[y.id]}function E(y){for(const D in e){const k=e[D];if(k[y.id]===void 0)continue;const H=k[y.id];for(const J in H)d(H[J].object),delete H[J];delete k[y.id]}}function I(){S(),r=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:x,disableUnusedAttributes:M}}function op(o,t,n){let e;function i(c){e=c}function s(c,d){o.drawArrays(e,c,d),n.update(d,e,1)}function r(c,d,f){f!==0&&(o.drawArraysInstanced(e,c,d,f),n.update(d,e,f))}function a(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(e,c,0,d,0,f);let h=0;for(let m=0;m<f;m++)h+=d[m];n.update(h,e,1)}function l(c,d,f,u){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)r(c[m],d[m],u[m]);else{h.multiDrawArraysInstancedWEBGL(e,c,0,d,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_]*u[_];n.update(m,e,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sp(o,t,n,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){return!(E!==Cn&&e.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const I=E===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==jn&&e.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==qn&&!I)}function l(E){if(E==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),M=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,R=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:P,maxSamples:R}}function rp(o){const t=this;let n=null,e=0,i=!1,s=!1;const r=new vi,a=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||e!==0||i;return i=u,e=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,h){const m=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,p=o.get(f);if(!i||m===null||m.length===0||s&&!x)s?d(null):c();else{const M=s?0:e,v=M*4;let w=p.clippingState||null;l.value=w,w=d(m,u,v,h);for(let P=0;P!==v;++P)w[P]=n[P];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=e>0),t.numPlanes=e,t.numIntersection=0}function d(f,u,h,m){const _=f!==null?f.length:0;let x=null;if(_!==0){if(x=l.value,m!==!0||x===null){const p=h+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<p)&&(x=new Float32Array(p));for(let v=0,w=h;v!==_;++v,w+=4)r.copy(f[v]).applyMatrix4(M,a),r.normal.toArray(x,w),x[w+3]=r.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}function ap(o){let t=new WeakMap;function n(r,a){return a===Ur?r.mapping=to:a===Nr&&(r.mapping=eo),r}function e(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ur||a===Nr)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new _h(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),n(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:e,dispose:s}}class ff extends af{constructor(t=-1,n=1,e=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=e,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,e,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=e,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=e-t,r=e+t,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zi=4,Al=[.125,.215,.35,.446,.526,.582],Si=20,cr=new ff,Rl=new me;let fr=null,dr=0,hr=0,ur=!1;const yi=(1+Math.sqrt(5))/2,Wi=1/yi,Cl=[new N(-yi,Wi,0),new N(yi,Wi,0),new N(-Wi,0,yi),new N(Wi,0,yi),new N(0,yi,-Wi),new N(0,yi,Wi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,e=.1,i=100){fr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,e,i,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fr,dr,hr),this._renderer.xr.enabled=ur,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===to||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const e=n||this._allocateTargets();return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,e={magFilter:On,minFilter:On,generateMipmaps:!1,type:Fo,format:Cn,colorSpace:ro,depthBuffer:!1},i=Il(t,n,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,n,e);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,t,n)}return i}_compileMaterial(t){const n=new g(this._lodPlanes[0],t);this._renderer.compile(n,cr)}_sceneToCubeUV(t,n,e,i){const a=new vn(90,1,n,e),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Rl),d.toneMapping=ci,d.autoClear=!1;const h=new qt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new g(new C,h);let _=!1;const x=t.background;x?x.isColor&&(h.color.copy(x),t.background=null,_=!0):(h.color.copy(Rl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;as(i,M*v,p>2?v:0,v,v),d.setRenderTarget(i),_&&d.render(m,a),d.render(t,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=f,t.background=x}_textureToCubeUV(t,n){const e=this._renderer,i=t.mapping===to||t.mapping===eo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new g(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;as(n,0,0,3*l,2*l),e.setRenderTarget(n),e.render(r,cr)}_applyPMREM(t){const n=this._renderer,e=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cl[(i-s-1)%Cl.length];this._blur(t,s-1,s,r,a)}n.autoClear=e}_blur(t,n,e,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,e,i,"latitudinal",s),this._halfBlur(r,t,e,e,i,"longitudinal",s)}_halfBlur(t,n,e,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new g(this._lodPlanes[i],c),u=c.uniforms,h=this._sizeLods[e]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Si-1),_=s/m,x=isFinite(s)?1+Math.floor(d*_):Si;x>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Si}`);const p=[];let M=0;for(let E=0;E<Si;++E){const I=E/_,S=Math.exp(-I*I/2);p.push(S),E===0?M+=S:E<x&&(M+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;u.envMap.value=t.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-e;const w=this._sizeLods[i],P=3*w*(i>v-Zi?i-v+Zi:0),R=4*(this._cubeSize-w);as(n,P,R,3*w,2*w),l.setRenderTarget(n),l.render(f,cr)}}function lp(o){const t=[],n=[],e=[];let i=o;const s=o-Zi+1+Al.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);n.push(a);let l=1/a;r>o-Zi?l=Al[r-o+Zi-1]:r===0&&(l=0),e.push(l);const c=1/(a-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,m=6,_=3,x=2,p=1,M=new Float32Array(_*m*h),v=new Float32Array(x*m*h),w=new Float32Array(p*m*h);for(let R=0;R<h;R++){const E=R%3*2/3-1,I=R>2?0:-1,S=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];M.set(S,_*m*R),v.set(u,x*m*R);const y=[R,R,R,R,R,R];w.set(y,p*m*R)}const P=new on;P.setAttribute("position",new In(M,_)),P.setAttribute("uv",new In(v,x)),P.setAttribute("faceIndex",new In(w,p)),t.push(P),i>Zi&&i--}return{lodPlanes:t,sizeLods:n,sigmas:e}}function Il(o,t,n){const e=new Ai(o,t,n);return e.texture.mapping=Cs,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function as(o,t,n,e,i){o.viewport.set(t,n,e,i),o.scissor.set(t,n,e,i)}function cp(o,t,n){const e=new Float32Array(Si),i=new N(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ll(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Dl(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}function fp(o){let t=new WeakMap,n=null;function e(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ur||l===Nr,d=l===to||l===eo;if(c||d){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new Pl(o)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||d&&h&&i(h)?(n===null&&(n=new Pl(o)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:e,dispose:r}}function dp(o){const t={};function n(e){if(t[e]!==void 0)return t[e];let i;switch(e){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(e)}return t[e]=i,i}return{has:function(e){return n(e)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(e){const i=n(e);return i===null&&vo("THREE.WebGLRenderer: "+e+" extension not supported."),i}}}function hp(o,t,n,e){const i={},s=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let x=0,p=_.length;x<p;x++)t.remove(_[x])}u.removeEventListener("dispose",r),delete i[u.id];const h=s.get(u);h&&(t.remove(h),s.delete(u)),e.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)t.update(u[m],o.ARRAY_BUFFER);const h=f.morphAttributes;for(const m in h){const _=h[m];for(let x=0,p=_.length;x<p;x++)t.update(_[x],o.ARRAY_BUFFER)}}function c(f){const u=[],h=f.index,m=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let v=0,w=M.length;v<w;v+=3){const P=M[v+0],R=M[v+1],E=M[v+2];u.push(P,R,R,E,E,P)}}else if(m!==void 0){const M=m.array;_=m.version;for(let v=0,w=M.length/3-1;v<w;v+=3){const P=v+0,R=v+1,E=v+2;u.push(P,R,R,E,E,P)}}else return;const x=new(Jc(u)?sf:of)(u,1);x.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,x)}function d(f){const u=s.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function up(o,t,n){let e;function i(u){e=u}let s,r;function a(u){s=u.type,r=u.bytesPerElement}function l(u,h){o.drawElements(e,h,s,u*r),n.update(h,e,1)}function c(u,h,m){m!==0&&(o.drawElementsInstanced(e,h,s,u*r,m),n.update(h,e,m))}function d(u,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(e,h,0,s,u,0,m);let x=0;for(let p=0;p<m;p++)x+=h[p];n.update(x,e,1)}function f(u,h,m,_){if(m===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<u.length;p++)c(u[p]/r,h[p],_[p]);else{x.multiDrawElementsInstancedWEBGL(e,h,0,s,u,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=h[M]*_[M];n.update(p,e,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function pp(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function e(s,r,a){switch(n.calls++,r){case o.TRIANGLES:n.triangles+=a*(s/3);break;case o.LINES:n.lines+=a*(s/2);break;case o.LINE_STRIP:n.lines+=a*(s-1);break;case o.LINE_LOOP:n.lines+=a*s;break;case o.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:e}}function mp(o,t,n){const e=new WeakMap,i=new Te;function s(r,a,l){const c=r.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=e.get(a);if(u===void 0||u.count!==f){let y=function(){I.dispose(),e.delete(a),a.removeEventListener("dispose",y)};var h=y;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let w=0;m===!0&&(w=1),_===!0&&(w=2),x===!0&&(w=3);let P=a.attributes.position.count*w,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const E=new Float32Array(P*R*4*f),I=new Qc(E,P,R,f);I.type=qn,I.needsUpdate=!0;const S=w*4;for(let D=0;D<f;D++){const k=p[D],H=M[D],J=v[D],q=P*R*4*D;for(let V=0;V<k.count;V++){const Q=V*S;m===!0&&(i.fromBufferAttribute(k,V),E[q+Q+0]=i.x,E[q+Q+1]=i.y,E[q+Q+2]=i.z,E[q+Q+3]=0),_===!0&&(i.fromBufferAttribute(H,V),E[q+Q+4]=i.x,E[q+Q+5]=i.y,E[q+Q+6]=i.z,E[q+Q+7]=0),x===!0&&(i.fromBufferAttribute(J,V),E[q+Q+8]=i.x,E[q+Q+9]=i.y,E[q+Q+10]=i.z,E[q+Q+11]=J.itemSize===4?i.w:1)}}u={count:f,texture:I,size:new Bt(P,R)},e.set(a,u),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,n);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(o,"morphTargetBaseInfluence",_),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(o,"morphTargetsTextureSize",u.size)}return{update:s}}function gp(o,t,n,e){let i=new WeakMap;function s(l){const c=e.render.frame,d=l.geometry,f=t.get(l,d);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}class df extends cn{constructor(t,n,e,i,s,r,a,l,c,d=Ki){if(d!==Ki&&d!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");e===void 0&&d===Ki&&(e=Ei),e===void 0&&d===io&&(e=no),super(null,i,s,r,a,l,d,e,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const hf=new cn,Ul=new df(1,1),uf=new Qc,pf=new nh,mf=new lf,Nl=[],zl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),kl=new Float32Array(4);function fo(o,t,n){const e=o[0];if(e<=0||e>0)return o;const i=t*n;let s=Nl[i];if(s===void 0&&(s=new Float32Array(i),Nl[i]=s),t!==0){e.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=n,o[r].toArray(s,a)}return s}function Xe(o,t){if(o.length!==t.length)return!1;for(let n=0,e=o.length;n<e;n++)if(o[n]!==t[n])return!1;return!0}function Ye(o,t){for(let n=0,e=t.length;n<e;n++)o[n]=t[n]}function Ls(o,t){let n=zl[t];n===void 0&&(n=new Int32Array(t),zl[t]=n);for(let e=0;e!==t;++e)n[e]=o.allocateTextureUnit();return n}function xp(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function _p(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;o.uniform2fv(this.addr,t),Ye(n,t)}}function wp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xe(n,t))return;o.uniform3fv(this.addr,t),Ye(n,t)}}function vp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;o.uniform4fv(this.addr,t),Ye(n,t)}}function yp(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Xe(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ye(n,t)}else{if(Xe(n,e))return;kl.set(e),o.uniformMatrix2fv(this.addr,!1,kl),Ye(n,e)}}function Mp(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Xe(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ye(n,t)}else{if(Xe(n,e))return;Ol.set(e),o.uniformMatrix3fv(this.addr,!1,Ol),Ye(n,e)}}function Sp(o,t){const n=this.cache,e=t.elements;if(e===void 0){if(Xe(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ye(n,t)}else{if(Xe(n,e))return;Fl.set(e),o.uniformMatrix4fv(this.addr,!1,Fl),Ye(n,e)}}function bp(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function Tp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;o.uniform2iv(this.addr,t),Ye(n,t)}}function Ep(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;o.uniform3iv(this.addr,t),Ye(n,t)}}function Ap(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;o.uniform4iv(this.addr,t),Ye(n,t)}}function Rp(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function Cp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;o.uniform2uiv(this.addr,t),Ye(n,t)}}function Pp(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;o.uniform3uiv(this.addr,t),Ye(n,t)}}function Ip(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;o.uniform4uiv(this.addr,t),Ye(n,t)}}function Lp(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Ul.compareFunction=Kc,s=Ul):s=hf,n.setTexture2D(t||s,i)}function Dp(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTexture3D(t||pf,i)}function Up(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTextureCube(t||mf,i)}function Np(o,t,n){const e=this.cache,i=n.allocateTextureUnit();e[0]!==i&&(o.uniform1i(this.addr,i),e[0]=i),n.setTexture2DArray(t||uf,i)}function zp(o){switch(o){case 5126:return xp;case 35664:return _p;case 35665:return wp;case 35666:return vp;case 35674:return yp;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return bp;case 35667:case 35671:return Tp;case 35668:case 35672:return Ep;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Np}}function Fp(o,t){o.uniform1fv(this.addr,t)}function Op(o,t){const n=fo(t,this.size,2);o.uniform2fv(this.addr,n)}function kp(o,t){const n=fo(t,this.size,3);o.uniform3fv(this.addr,n)}function Bp(o,t){const n=fo(t,this.size,4);o.uniform4fv(this.addr,n)}function Gp(o,t){const n=fo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Hp(o,t){const n=fo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Vp(o,t){const n=fo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Wp(o,t){o.uniform1iv(this.addr,t)}function Xp(o,t){o.uniform2iv(this.addr,t)}function Yp(o,t){o.uniform3iv(this.addr,t)}function Zp(o,t){o.uniform4iv(this.addr,t)}function qp(o,t){o.uniform1uiv(this.addr,t)}function $p(o,t){o.uniform2uiv(this.addr,t)}function Kp(o,t){o.uniform3uiv(this.addr,t)}function Jp(o,t){o.uniform4uiv(this.addr,t)}function jp(o,t,n){const e=this.cache,i=t.length,s=Ls(n,i);Xe(e,s)||(o.uniform1iv(this.addr,s),Ye(e,s));for(let r=0;r!==i;++r)n.setTexture2D(t[r]||hf,s[r])}function Qp(o,t,n){const e=this.cache,i=t.length,s=Ls(n,i);Xe(e,s)||(o.uniform1iv(this.addr,s),Ye(e,s));for(let r=0;r!==i;++r)n.setTexture3D(t[r]||pf,s[r])}function tm(o,t,n){const e=this.cache,i=t.length,s=Ls(n,i);Xe(e,s)||(o.uniform1iv(this.addr,s),Ye(e,s));for(let r=0;r!==i;++r)n.setTextureCube(t[r]||mf,s[r])}function em(o,t,n){const e=this.cache,i=t.length,s=Ls(n,i);Xe(e,s)||(o.uniform1iv(this.addr,s),Ye(e,s));for(let r=0;r!==i;++r)n.setTexture2DArray(t[r]||uf,s[r])}function nm(o){switch(o){case 5126:return Fp;case 35664:return Op;case 35665:return kp;case 35666:return Bp;case 35674:return Gp;case 35675:return Hp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return Yp;case 35669:case 35673:return Zp;case 5125:return qp;case 36294:return $p;case 36295:return Kp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}class im{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.setValue=zp(n.type)}}class om{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nm(n.type)}}class sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,e){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,n[a.id],e)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Bl(o,t){o.seq.push(t),o.map[t.id]=t}function rm(o,t,n){const e=o.name,i=e.length;for(pr.lastIndex=0;;){const s=pr.exec(e),r=pr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Bl(n,c===void 0?new im(a,o,t):new om(a,o,t));break}else{let f=n.map[a];f===void 0&&(f=new sm(a),Bl(n,f)),n=f}}}class bs{constructor(t,n){this.seq=[],this.map={};const e=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<e;++i){const s=t.getActiveUniform(n,i),r=t.getUniformLocation(n,s.name);rm(s,r,this)}}setValue(t,n,e,i){const s=this.map[n];s!==void 0&&s.setValue(t,e,i)}setOptional(t,n,e){const i=n[e];i!==void 0&&this.setValue(t,e,i)}static upload(t,n,e,i){for(let s=0,r=n.length;s!==r;++s){const a=n[s],l=e[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,n){const e=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in n&&e.push(r)}return e}}function Gl(o,t,n){const e=o.createShader(t);return o.shaderSource(e,n),o.compileShader(e),e}const am=37297;let lm=0;function cm(o,t){const n=o.split(`
`),e=[],i=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=i;r<s;r++){const a=r+1;e.push(`${a===t?">":" "} ${a}: ${n[r]}`)}return e.join(`
`)}const Hl=new de;function fm(o){_e._getMatrix(Hl,_e.workingColorSpace,o);const t=`mat3( ${Hl.elements.map(n=>n.toFixed(4))} )`;switch(_e.getTransfer(o)){case Ps:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Vl(o,t,n){const e=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(e&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+cm(o.getShaderSource(t),r)}else return i}function dm(o,t){const n=fm(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function hm(o,t){let n;switch(t){case md:n="Linear";break;case gd:n="Reinhard";break;case xd:n="Cineon";break;case Fc:n="ACESFilmic";break;case wd:n="AgX";break;case vd:n="Neutral";break;case _d:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ls=new N;function um(){_e.getLuminanceCoefficients(ls);const o=ls.x.toFixed(4),t=ls.y.toFixed(4),n=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function mm(o){const t=[];for(const n in o){const e=o[n];e!==!1&&t.push("#define "+n+" "+e)}return t.join(`
`)}function gm(o,t){const n={},e=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<e;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),n[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return n}function yo(o){return o!==""}function Wl(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(o){return o.replace(xm,wm)}const _m=new Map;function wm(o,t){let n=ue[t];if(n===void 0){const e=_m.get(t);if(e!==void 0)n=ue[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return ca(n)}const vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(o){return o.replace(vm,ym)}function ym(o,t,n,e){let i="";for(let s=parseInt(t);s<parseInt(n);s++)i+=e.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zl(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Mm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sm(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case to:case eo:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bm(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case eo:t="ENVMAP_MODE_REFRACTION";break}return t}function Tm(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case zc:t="ENVMAP_BLENDING_MULTIPLY";break;case ud:t="ENVMAP_BLENDING_MIX";break;case pd:t="ENVMAP_BLENDING_ADD";break}return t}function Em(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,e=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:e,maxMip:n}}function Am(o,t,n,e){const i=o.getContext(),s=n.defines;let r=n.vertexShader,a=n.fragmentShader;const l=Mm(n),c=Sm(n),d=bm(n),f=Tm(n),u=Em(n),h=pm(n),m=mm(s),_=i.createProgram();let x,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(yo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(x=[Zl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[Zl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?ue.tonemapping_pars_fragment:"",n.toneMapping!==ci?hm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,dm("linearToOutputTexel",n.outputColorSpace),um(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),r=ca(r),r=Wl(r,n),r=Xl(r,n),a=ca(a),a=Wl(a,n),a=Xl(a,n),r=Yl(r),a=Yl(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",n.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+x+r,w=M+p+a,P=Gl(i,i.VERTEX_SHADER,v),R=Gl(i,i.FRAGMENT_SHADER,w);i.attachShader(_,P),i.attachShader(_,R),n.index0AttributeName!==void 0?i.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(o.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(P).trim(),J=i.getShaderInfoLog(R).trim();let q=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,P,R);else{const Q=Vl(i,P,"vertex"),X=Vl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+Q+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||J==="")&&(V=!1);V&&(D.diagnostics={runnable:q,programLog:k,vertexShader:{log:H,prefix:x},fragmentShader:{log:J,prefix:p}})}i.deleteShader(P),i.deleteShader(R),I=new bs(i,_),S=gm(i,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,am)),y},this.destroy=function(){e.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,e=t.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(e),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const e of n)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let e=n.get(t);return e===void 0&&(e=new Set,n.set(t,e)),e}_getShaderStage(t){const n=this.shaderCache;let e=n.get(t);return e===void 0&&(e=new Pm(t),n.set(t,e)),e}}class Pm{constructor(t){this.id=Rm++,this.code=t,this.usedTimes=0}}function Im(o,t,n,e,i,s,r){const a=new ef,l=new Cm,c=new Set,d=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function x(S,y,D,k,H){const J=k.fog,q=H.geometry,V=S.isMeshStandardMaterial?k.environment:null,Q=(S.isMeshStandardMaterial?n:t).get(S.envMap||V),X=Q&&Q.mapping===Cs?Q.image.height:null,rt=m[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=at!==void 0?at.length:0;let wt=0;q.morphAttributes.position!==void 0&&(wt=1),q.morphAttributes.normal!==void 0&&(wt=2),q.morphAttributes.color!==void 0&&(wt=3);let vt,B,G,Z;if(rt){const re=Fn[rt];vt=re.vertexShader,B=re.fragmentShader}else vt=S.vertexShader,B=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const st=o.getRenderTarget(),pt=o.state.buffers.depth.getReversed(),Pt=H.isInstancedMesh===!0,Ft=H.isBatchedMesh===!0,Jt=!!S.map,Nt=!!S.matcap,jt=!!Q,U=!!S.aoMap,Vt=!!S.lightMap,It=!!S.bumpMap,zt=!!S.normalMap,Tt=!!S.displacementMap,Wt=!!S.emissiveMap,St=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,W=S.clearcoat>0,nt=S.dispersion>0,it=S.iridescence>0,et=S.sheen>0,xt=S.transmission>0,mt=b&&!!S.anisotropyMap,ft=W&&!!S.clearcoatMap,Lt=W&&!!S.clearcoatNormalMap,ct=W&&!!S.clearcoatRoughnessMap,bt=it&&!!S.iridescenceMap,Ht=it&&!!S.iridescenceThicknessMap,Kt=et&&!!S.sheenColorMap,Dt=et&&!!S.sheenRoughnessMap,oe=!!S.specularMap,Qt=!!S.specularColorMap,pe=!!S.specularIntensityMap,z=xt&&!!S.transmissionMap,yt=xt&&!!S.thicknessMap,tt=!!S.gradientMap,ot=!!S.alphaMap,gt=S.alphaTest>0,ut=!!S.alphaHash,Gt=!!S.extensions;let se=ci;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(se=o.toneMapping);const Ee={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:vt,fragmentShader:B,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Ft,batchingColor:Ft&&H._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&H.instanceColor!==null,instancingMorph:Pt&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?o.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ro,alphaToCoverage:!!S.alphaToCoverage,map:Jt,matcap:Nt,envMap:jt,envMapMode:jt&&Q.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:Vt,bumpMap:It,normalMap:zt,displacementMap:u&&Tt,emissiveMap:Wt,normalMapObjectSpace:zt&&S.normalMapType===bd,normalMapTangentSpace:zt&&S.normalMapType===$c,metalnessMap:St,roughnessMap:A,anisotropy:b,anisotropyMap:mt,clearcoat:W,clearcoatMap:ft,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ct,dispersion:nt,iridescence:it,iridescenceMap:bt,iridescenceThicknessMap:Ht,sheen:et,sheenColorMap:Kt,sheenRoughnessMap:Dt,specularMap:oe,specularColorMap:Qt,specularIntensityMap:pe,transmission:xt,transmissionMap:z,thicknessMap:yt,gradientMap:tt,opaque:S.transparent===!1&&S.blending===$i&&S.alphaToCoverage===!1,alphaMap:ot,alphaTest:gt,alphaHash:ut,combine:S.combine,mapUv:Jt&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Vt&&_(S.lightMap.channel),bumpMapUv:It&&_(S.bumpMap.channel),normalMapUv:zt&&_(S.normalMap.channel),displacementMapUv:Tt&&_(S.displacementMap.channel),emissiveMapUv:Wt&&_(S.emissiveMap.channel),metalnessMapUv:St&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:mt&&_(S.anisotropyMap.channel),clearcoatMapUv:ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(S.sheenRoughnessMap.channel),specularMapUv:oe&&_(S.specularMap.channel),specularColorMapUv:Qt&&_(S.specularColorMap.channel),specularIntensityMapUv:pe&&_(S.specularIntensityMap.channel),transmissionMapUv:z&&_(S.transmissionMap.channel),thicknessMapUv:yt&&_(S.thicknessMap.channel),alphaMapUv:ot&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(zt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(Jt||ot),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:pt,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:Jt&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===Se,decodeVideoTextureEmissive:Wt&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===Se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(y,S),v(y,S),y.push(o.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function w(S){const y=m[S.type];let D;if(y){const k=Fn[y];D=ph.clone(k.uniforms)}else D=S.uniforms;return D}function P(S,y){let D;for(let k=0,H=d.length;k<H;k++){const J=d[k];if(J.cacheKey===y){D=J,++D.usedTimes;break}}return D===void 0&&(D=new Am(o,y,S,s),d.push(D)),D}function R(S){if(--S.usedTimes===0){const y=d.indexOf(S);d[y]=d[d.length-1],d.pop(),S.destroy()}}function E(S){l.remove(S)}function I(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:w,acquireProgram:P,releaseProgram:R,releaseShaderCache:E,programs:d,dispose:I}}function Lm(){let o=new WeakMap;function t(r){return o.has(r)}function n(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:t,get:n,remove:e,update:i,dispose:s}}function Dm(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ql(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function $l(){const o=[];let t=0;const n=[],e=[],i=[];function s(){t=0,n.length=0,e.length=0,i.length=0}function r(f,u,h,m,_,x){let p=o[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:h,groupOrder:m,renderOrder:f.renderOrder,z:_,group:x},o[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=h,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=x),t++,p}function a(f,u,h,m,_,x){const p=r(f,u,h,m,_,x);h.transmission>0?e.push(p):h.transparent===!0?i.push(p):n.push(p)}function l(f,u,h,m,_,x){const p=r(f,u,h,m,_,x);h.transmission>0?e.unshift(p):h.transparent===!0?i.unshift(p):n.unshift(p)}function c(f,u){n.length>1&&n.sort(f||Dm),e.length>1&&e.sort(u||ql),i.length>1&&i.sort(u||ql)}function d(){for(let f=t,u=o.length;f<u;f++){const h=o[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:e,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function Um(){let o=new WeakMap;function t(e,i){const s=o.get(e);let r;return s===void 0?(r=new $l,o.set(e,[r])):i>=s.length?(r=new $l,s.push(r)):r=s[i],r}function n(){o=new WeakMap}return{get:t,dispose:n}}function Nm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new me};break;case"SpotLight":n={position:new N,direction:new N,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new me,groundColor:new me};break;case"RectAreaLight":n={color:new me,position:new N,halfWidth:new N,halfHeight:new N};break}return o[t.id]=n,n}}}function zm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let Fm=0;function Om(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function km(o){const t=new Nm,n=zm(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)e.probe.push(new N);const i=new N,s=new Ie,r=new Ie;function a(c){let d=0,f=0,u=0;for(let S=0;S<9;S++)e.probe[S].set(0,0,0);let h=0,m=0,_=0,x=0,p=0,M=0,v=0,w=0,P=0,R=0,E=0;c.sort(Om);for(let S=0,y=c.length;S<y;S++){const D=c[S],k=D.color,H=D.intensity,J=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*H,f+=k.g*H,u+=k.b*H;else if(D.isLightProbe){for(let V=0;V<9;V++)e.probe[V].addScaledVector(D.sh.coefficients[V],H);E++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,X=n.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,e.directionalShadow[h]=X,e.directionalShadowMap[h]=q,e.directionalShadowMatrix[h]=D.shadow.matrix,M++}e.directional[h]=V,h++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(k).multiplyScalar(H),V.distance=J,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,e.spot[_]=V;const Q=D.shadow;if(D.map&&(e.spotLightMap[P]=D.map,P++,Q.updateMatrices(D),D.castShadow&&R++),e.spotLightMatrix[_]=Q.matrix,D.castShadow){const X=n.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,e.spotShadow[_]=X,e.spotShadowMap[_]=q,w++}_++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(k).multiplyScalar(H),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),e.rectArea[x]=V,x++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Q=D.shadow,X=n.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,e.pointShadow[m]=X,e.pointShadowMap[m]=q,e.pointShadowMatrix[m]=D.shadow.matrix,v++}e.point[m]=V,m++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(H),V.groundColor.copy(D.groundColor).multiplyScalar(H),e.hemi[p]=V,p++}}x>0&&(o.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=Rt.LTC_FLOAT_1,e.rectAreaLTC2=Rt.LTC_FLOAT_2):(e.rectAreaLTC1=Rt.LTC_HALF_1,e.rectAreaLTC2=Rt.LTC_HALF_2)),e.ambient[0]=d,e.ambient[1]=f,e.ambient[2]=u;const I=e.hash;(I.directionalLength!==h||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==x||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==v||I.numSpotShadows!==w||I.numSpotMaps!==P||I.numLightProbes!==E)&&(e.directional.length=h,e.spot.length=_,e.rectArea.length=x,e.point.length=m,e.hemi.length=p,e.directionalShadow.length=M,e.directionalShadowMap.length=M,e.pointShadow.length=v,e.pointShadowMap.length=v,e.spotShadow.length=w,e.spotShadowMap.length=w,e.directionalShadowMatrix.length=M,e.pointShadowMatrix.length=v,e.spotLightMatrix.length=w+P-R,e.spotLightMap.length=P,e.numSpotLightShadowsWithMaps=R,e.numLightProbes=E,I.directionalLength=h,I.pointLength=m,I.spotLength=_,I.rectAreaLength=x,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=v,I.numSpotShadows=w,I.numSpotMaps=P,I.numLightProbes=E,e.version=Fm++)}function l(c,d){let f=0,u=0,h=0,m=0,_=0;const x=d.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const w=e.directional[f];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),f++}else if(v.isSpotLight){const w=e.spot[h];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),h++}else if(v.isRectAreaLight){const w=e.rectArea[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(x),r.identity(),s.copy(v.matrixWorld),s.premultiply(x),r.extractRotation(s),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),m++}else if(v.isPointLight){const w=e.point[u];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(x),u++}else if(v.isHemisphereLight){const w=e.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(x),_++}}}return{setup:a,setupView:l,state:e}}function Kl(o){const t=new km(o),n=[],e=[];function i(d){c.camera=d,n.length=0,e.length=0}function s(d){n.push(d)}function r(d){e.push(d)}function a(){t.setup(n)}function l(d){t.setupView(n,d)}const c={lightsArray:n,shadowsArray:e,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Bm(o){let t=new WeakMap;function n(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new Kl(o),t.set(i,[a])):s>=r.length?(a=new Kl(o),r.push(a)):a=r[s],a}function e(){t=new WeakMap}return{get:n,dispose:e}}class Gm extends co{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hm extends co{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(o,t,n){let e=new Ma;const i=new Bt,s=new Bt,r=new Te,a=new Gm({depthPacking:Sd}),l=new Hm,c={},d=n.maxTextureSize,f={[fi]:dn,[dn]:fi,[nn]:nn},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const m=new on;m.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new g(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let p=this.type;this.render=function(R,E,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;const S=o.getRenderTarget(),y=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),k=o.state;k.setBlending(li),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==Zn&&this.type===Zn,J=p===Zn&&this.type!==Zn;for(let q=0,V=R.length;q<V;q++){const Q=R[q],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const rt=X.getFrameExtents();if(i.multiply(rt),s.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/rt.x),i.x=s.x*rt.x,X.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/rt.y),i.y=s.y*rt.y,X.mapSize.y=s.y)),X.map===null||H===!0||J===!0){const dt=this.type!==Zn?{minFilter:Pn,magFilter:Pn}:{};X.map!==null&&X.map.dispose(),X.map=new Ai(i.x,i.y,dt),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const at=X.getViewportCount();for(let dt=0;dt<at;dt++){const wt=X.getViewport(dt);r.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),k.viewport(r),X.updateMatrices(Q,dt),e=X.getFrustum(),w(E,I,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Zn&&M(X,I),X.needsUpdate=!1}p=this.type,x.needsUpdate=!1,o.setRenderTarget(S,y,D)};function M(R,E){const I=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ai(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,o.setRenderTarget(R.mapPass),o.clear(),o.renderBufferDirect(E,null,I,u,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,o.setRenderTarget(R.map),o.clear(),o.renderBufferDirect(E,null,I,h,_,null)}function v(R,E,I,S){let y=null;const D=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:a,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=y.uuid,H=E.uuid;let J=c[k];J===void 0&&(J={},c[k]=J);let q=J[H];q===void 0&&(q=y.clone(),J[H]=q,E.addEventListener("dispose",P)),y=q}if(y.visible=E.visible,y.wireframe=E.wireframe,S===Zn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=o.properties.get(y);k.light=I}return y}function w(R,E,I,S,y){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Zn)&&(!R.frustumCulled||e.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const H=t.update(R),J=R.material;if(Array.isArray(J)){const q=H.groups;for(let V=0,Q=q.length;V<Q;V++){const X=q[V],rt=J[X.materialIndex];if(rt&&rt.visible){const at=v(R,rt,S,y);R.onBeforeShadow(o,R,E,I,H,at,X),o.renderBufferDirect(I,null,H,at,R,X),R.onAfterShadow(o,R,E,I,H,at,X)}}}else if(J.visible){const q=v(R,J,S,y);R.onBeforeShadow(o,R,E,I,H,q,null),o.renderBufferDirect(I,null,H,q,R,null),R.onAfterShadow(o,R,E,I,H,q,null)}}const k=R.children;for(let H=0,J=k.length;H<J;H++)w(k[H],E,I,S,y)}function P(R){R.target.removeEventListener("dispose",P);for(const I in c){const S=c[I],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Ym={[Ar]:Rr,[Cr]:Lr,[Pr]:Dr,[Qi]:Ir,[Rr]:Ar,[Lr]:Cr,[Dr]:Pr,[Ir]:Qi};function Zm(o,t){function n(){let z=!1;const yt=new Te;let tt=null;const ot=new Te(0,0,0,0);return{setMask:function(gt){tt!==gt&&!z&&(o.colorMask(gt,gt,gt,gt),tt=gt)},setLocked:function(gt){z=gt},setClear:function(gt,ut,Gt,se,Ee){Ee===!0&&(gt*=se,ut*=se,Gt*=se),yt.set(gt,ut,Gt,se),ot.equals(yt)===!1&&(o.clearColor(gt,ut,Gt,se),ot.copy(yt))},reset:function(){z=!1,tt=null,ot.set(-1,0,0,0)}}}function e(){let z=!1,yt=!1,tt=null,ot=null,gt=null;return{setReversed:function(ut){if(yt!==ut){const Gt=t.get("EXT_clip_control");yt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const se=gt;gt=null,this.setClear(se)}yt=ut},getReversed:function(){return yt},setTest:function(ut){ut?st(o.DEPTH_TEST):pt(o.DEPTH_TEST)},setMask:function(ut){tt!==ut&&!z&&(o.depthMask(ut),tt=ut)},setFunc:function(ut){if(yt&&(ut=Ym[ut]),ot!==ut){switch(ut){case Ar:o.depthFunc(o.NEVER);break;case Rr:o.depthFunc(o.ALWAYS);break;case Cr:o.depthFunc(o.LESS);break;case Qi:o.depthFunc(o.LEQUAL);break;case Pr:o.depthFunc(o.EQUAL);break;case Ir:o.depthFunc(o.GEQUAL);break;case Lr:o.depthFunc(o.GREATER);break;case Dr:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ot=ut}},setLocked:function(ut){z=ut},setClear:function(ut){gt!==ut&&(yt&&(ut=1-ut),o.clearDepth(ut),gt=ut)},reset:function(){z=!1,tt=null,ot=null,gt=null,yt=!1}}}function i(){let z=!1,yt=null,tt=null,ot=null,gt=null,ut=null,Gt=null,se=null,Ee=null;return{setTest:function(re){z||(re?st(o.STENCIL_TEST):pt(o.STENCIL_TEST))},setMask:function(re){yt!==re&&!z&&(o.stencilMask(re),yt=re)},setFunc:function(re,De,ze){(tt!==re||ot!==De||gt!==ze)&&(o.stencilFunc(re,De,ze),tt=re,ot=De,gt=ze)},setOp:function(re,De,ze){(ut!==re||Gt!==De||se!==ze)&&(o.stencilOp(re,De,ze),ut=re,Gt=De,se=ze)},setLocked:function(re){z=re},setClear:function(re){Ee!==re&&(o.clearStencil(re),Ee=re)},reset:function(){z=!1,yt=null,tt=null,ot=null,gt=null,ut=null,Gt=null,se=null,Ee=null}}}const s=new n,r=new e,a=new i,l=new WeakMap,c=new WeakMap;let d={},f={},u=new WeakMap,h=[],m=null,_=!1,x=null,p=null,M=null,v=null,w=null,P=null,R=null,E=new me(0,0,0),I=0,S=!1,y=null,D=null,k=null,H=null,J=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=Q>=2);let rt=null,at={};const dt=o.getParameter(o.SCISSOR_BOX),wt=o.getParameter(o.VIEWPORT),vt=new Te().fromArray(dt),B=new Te().fromArray(wt);function G(z,yt,tt,ot){const gt=new Uint8Array(4),ut=o.createTexture();o.bindTexture(z,ut),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<tt;Gt++)z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY?o.texImage3D(yt,0,o.RGBA,1,1,ot,0,o.RGBA,o.UNSIGNED_BYTE,gt):o.texImage2D(yt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,gt);return ut}const Z={};Z[o.TEXTURE_2D]=G(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=G(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=G(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=G(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),st(o.DEPTH_TEST),r.setFunc(Qi),It(!1),zt(tl),st(o.CULL_FACE),U(li);function st(z){d[z]!==!0&&(o.enable(z),d[z]=!0)}function pt(z){d[z]!==!1&&(o.disable(z),d[z]=!1)}function Pt(z,yt){return f[z]!==yt?(o.bindFramebuffer(z,yt),f[z]=yt,z===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=yt),z===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=yt),!0):!1}function Ft(z,yt){let tt=h,ot=!1;if(z){tt=u.get(yt),tt===void 0&&(tt=[],u.set(yt,tt));const gt=z.textures;if(tt.length!==gt.length||tt[0]!==o.COLOR_ATTACHMENT0){for(let ut=0,Gt=gt.length;ut<Gt;ut++)tt[ut]=o.COLOR_ATTACHMENT0+ut;tt.length=gt.length,ot=!0}}else tt[0]!==o.BACK&&(tt[0]=o.BACK,ot=!0);ot&&o.drawBuffers(tt)}function Jt(z){return m!==z?(o.useProgram(z),m=z,!0):!1}const Nt={[Mi]:o.FUNC_ADD,[Kf]:o.FUNC_SUBTRACT,[Jf]:o.FUNC_REVERSE_SUBTRACT};Nt[jf]=o.MIN,Nt[Qf]=o.MAX;const jt={[td]:o.ZERO,[ed]:o.ONE,[nd]:o.SRC_COLOR,[Tr]:o.SRC_ALPHA,[ld]:o.SRC_ALPHA_SATURATE,[rd]:o.DST_COLOR,[od]:o.DST_ALPHA,[id]:o.ONE_MINUS_SRC_COLOR,[Er]:o.ONE_MINUS_SRC_ALPHA,[ad]:o.ONE_MINUS_DST_COLOR,[sd]:o.ONE_MINUS_DST_ALPHA,[cd]:o.CONSTANT_COLOR,[fd]:o.ONE_MINUS_CONSTANT_COLOR,[dd]:o.CONSTANT_ALPHA,[hd]:o.ONE_MINUS_CONSTANT_ALPHA};function U(z,yt,tt,ot,gt,ut,Gt,se,Ee,re){if(z===li){_===!0&&(pt(o.BLEND),_=!1);return}if(_===!1&&(st(o.BLEND),_=!0),z!==$f){if(z!==x||re!==S){if((p!==Mi||w!==Mi)&&(o.blendEquation(o.FUNC_ADD),p=Mi,w=Mi),re)switch(z){case $i:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case br:o.blendFunc(o.ONE,o.ONE);break;case el:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nl:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case $i:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case br:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case el:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nl:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,v=null,P=null,R=null,E.set(0,0,0),I=0,x=z,S=re}return}gt=gt||yt,ut=ut||tt,Gt=Gt||ot,(yt!==p||gt!==w)&&(o.blendEquationSeparate(Nt[yt],Nt[gt]),p=yt,w=gt),(tt!==M||ot!==v||ut!==P||Gt!==R)&&(o.blendFuncSeparate(jt[tt],jt[ot],jt[ut],jt[Gt]),M=tt,v=ot,P=ut,R=Gt),(se.equals(E)===!1||Ee!==I)&&(o.blendColor(se.r,se.g,se.b,Ee),E.copy(se),I=Ee),x=z,S=!1}function Vt(z,yt){z.side===nn?pt(o.CULL_FACE):st(o.CULL_FACE);let tt=z.side===dn;yt&&(tt=!tt),It(tt),z.blending===$i&&z.transparent===!1?U(li):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const ot=z.stencilWrite;a.setTest(ot),ot&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?st(o.SAMPLE_ALPHA_TO_COVERAGE):pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function It(z){y!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),y=z)}function zt(z){z!==Zf?(st(o.CULL_FACE),z!==D&&(z===tl?o.cullFace(o.BACK):z===qf?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):pt(o.CULL_FACE),D=z}function Tt(z){z!==k&&(V&&o.lineWidth(z),k=z)}function Wt(z,yt,tt){z?(st(o.POLYGON_OFFSET_FILL),(H!==yt||J!==tt)&&(o.polygonOffset(yt,tt),H=yt,J=tt)):pt(o.POLYGON_OFFSET_FILL)}function St(z){z?st(o.SCISSOR_TEST):pt(o.SCISSOR_TEST)}function A(z){z===void 0&&(z=o.TEXTURE0+q-1),rt!==z&&(o.activeTexture(z),rt=z)}function b(z,yt,tt){tt===void 0&&(rt===null?tt=o.TEXTURE0+q-1:tt=rt);let ot=at[tt];ot===void 0&&(ot={type:void 0,texture:void 0},at[tt]=ot),(ot.type!==z||ot.texture!==yt)&&(rt!==tt&&(o.activeTexture(tt),rt=tt),o.bindTexture(z,yt||Z[z]),ot.type=z,ot.texture=yt)}function W(){const z=at[rt];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function nt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{o.compressedTexImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{o.texSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{o.texSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{o.texStorage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{o.texStorage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{o.texImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(){try{o.texImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Kt(z){vt.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),vt.copy(z))}function Dt(z){B.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),B.copy(z))}function oe(z,yt){let tt=c.get(yt);tt===void 0&&(tt=new WeakMap,c.set(yt,tt));let ot=tt.get(z);ot===void 0&&(ot=o.getUniformBlockIndex(yt,z.name),tt.set(z,ot))}function Qt(z,yt){const ot=c.get(yt).get(z);l.get(yt)!==ot&&(o.uniformBlockBinding(yt,ot,z.__bindingPointIndex),l.set(yt,ot))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},rt=null,at={},f={},u=new WeakMap,h=[],m=null,_=!1,x=null,p=null,M=null,v=null,w=null,P=null,R=null,E=new me(0,0,0),I=0,S=!1,y=null,D=null,k=null,H=null,J=null,vt.set(0,0,o.canvas.width,o.canvas.height),B.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:st,disable:pt,bindFramebuffer:Pt,drawBuffers:Ft,useProgram:Jt,setBlending:U,setMaterial:Vt,setFlipSided:It,setCullFace:zt,setLineWidth:Tt,setPolygonOffset:Wt,setScissorTest:St,activeTexture:A,bindTexture:b,unbindTexture:W,compressedTexImage2D:nt,compressedTexImage3D:it,texImage2D:bt,texImage3D:Ht,updateUBOMapping:oe,uniformBlockBinding:Qt,texStorage2D:Lt,texStorage3D:ct,texSubImage2D:et,texSubImage3D:xt,compressedTexSubImage2D:mt,compressedTexSubImage3D:ft,scissor:Kt,viewport:Dt,reset:pe}}function Jl(o,t,n,e){const i=qm(e);switch(n){case Hc:return o*t;case Wc:return o*t;case Xc:return o*t*2;case Yc:return o*t/i.components*i.byteLength;case _a:return o*t/i.components*i.byteLength;case Zc:return o*t*2/i.components*i.byteLength;case wa:return o*t*2/i.components*i.byteLength;case Vc:return o*t*3/i.components*i.byteLength;case Cn:return o*t*4/i.components*i.byteLength;case va:return o*t*4/i.components*i.byteLength;case ws:case vs:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ys:case Ms:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Or:case Br:return Math.max(o,16)*Math.max(t,8)/4;case Fr:case kr:return Math.max(o,8)*Math.max(t,8)/2;case Gr:case Hr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case qr:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case $r:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case jr:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ta:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ea:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ss:case oa:case sa:return Math.ceil(o/4)*Math.ceil(t/4)*16;case qc:case ra:return Math.ceil(o/4)*Math.ceil(t/4)*8;case aa:case la:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qm(o){switch(o){case jn:case kc:return{byteLength:1,components:1};case Po:case Bc:case Fo:return{byteLength:2,components:1};case ga:case xa:return{byteLength:2,components:4};case Ei:case ma:case qn:return{byteLength:4,components:1};case Gc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function $m(o,t,n,e,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,d=new WeakMap;let f;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return h?new OffscreenCanvas(A,b):Es("canvas")}function _(A,b,W){let nt=1;const it=St(A);if((it.width>W||it.height>W)&&(nt=W/Math.max(it.width,it.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const et=Math.floor(nt*it.width),xt=Math.floor(nt*it.height);f===void 0&&(f=m(et,xt));const mt=b?m(et,xt):f;return mt.width=et,mt.height=xt,mt.getContext("2d").drawImage(A,0,0,et,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+et+"x"+xt+")."),mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function x(A){return A.generateMipmaps}function p(A){o.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?o.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function v(A,b,W,nt,it=!1){if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=b;if(b===o.RED&&(W===o.FLOAT&&(et=o.R32F),W===o.HALF_FLOAT&&(et=o.R16F),W===o.UNSIGNED_BYTE&&(et=o.R8)),b===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(et=o.R8UI),W===o.UNSIGNED_SHORT&&(et=o.R16UI),W===o.UNSIGNED_INT&&(et=o.R32UI),W===o.BYTE&&(et=o.R8I),W===o.SHORT&&(et=o.R16I),W===o.INT&&(et=o.R32I)),b===o.RG&&(W===o.FLOAT&&(et=o.RG32F),W===o.HALF_FLOAT&&(et=o.RG16F),W===o.UNSIGNED_BYTE&&(et=o.RG8)),b===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(et=o.RG8UI),W===o.UNSIGNED_SHORT&&(et=o.RG16UI),W===o.UNSIGNED_INT&&(et=o.RG32UI),W===o.BYTE&&(et=o.RG8I),W===o.SHORT&&(et=o.RG16I),W===o.INT&&(et=o.RG32I)),b===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(et=o.RGB8UI),W===o.UNSIGNED_SHORT&&(et=o.RGB16UI),W===o.UNSIGNED_INT&&(et=o.RGB32UI),W===o.BYTE&&(et=o.RGB8I),W===o.SHORT&&(et=o.RGB16I),W===o.INT&&(et=o.RGB32I)),b===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(et=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(et=o.RGBA16UI),W===o.UNSIGNED_INT&&(et=o.RGBA32UI),W===o.BYTE&&(et=o.RGBA8I),W===o.SHORT&&(et=o.RGBA16I),W===o.INT&&(et=o.RGBA32I)),b===o.RGB&&W===o.UNSIGNED_INT_5_9_9_9_REV&&(et=o.RGB9_E5),b===o.RGBA){const xt=it?Ps:_e.getTransfer(nt);W===o.FLOAT&&(et=o.RGBA32F),W===o.HALF_FLOAT&&(et=o.RGBA16F),W===o.UNSIGNED_BYTE&&(et=xt===Se?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(et=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(et=o.RGB5_A1)}return(et===o.R16F||et===o.R32F||et===o.RG16F||et===o.RG32F||et===o.RGBA16F||et===o.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function w(A,b){let W;return A?b===null||b===Ei||b===no?W=o.DEPTH24_STENCIL8:b===qn?W=o.DEPTH32F_STENCIL8:b===Po&&(W=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ei||b===no?W=o.DEPTH_COMPONENT24:b===qn?W=o.DEPTH_COMPONENT32F:b===Po&&(W=o.DEPTH_COMPONENT16),W}function P(A,b){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pn&&A.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){const b=A.target;b.removeEventListener("dispose",R),I(b),b.isVideoTexture&&d.delete(b)}function E(A){const b=A.target;b.removeEventListener("dispose",E),y(b)}function I(A){const b=e.get(A);if(b.__webglInit===void 0)return;const W=A.source,nt=u.get(W);if(nt){const it=nt[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(A),Object.keys(nt).length===0&&u.delete(W)}e.remove(A)}function S(A){const b=e.get(A);o.deleteTexture(b.__webglTexture);const W=A.source,nt=u.get(W);delete nt[b.__cacheKey],r.memory.textures--}function y(A){const b=e.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),e.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let it=0;it<b.__webglFramebuffer[nt].length;it++)o.deleteFramebuffer(b.__webglFramebuffer[nt][it]);else o.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)o.deleteFramebuffer(b.__webglFramebuffer[nt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=A.textures;for(let nt=0,it=W.length;nt<it;nt++){const et=e.get(W[nt]);et.__webglTexture&&(o.deleteTexture(et.__webglTexture),r.memory.textures--),e.remove(W[nt])}e.remove(A)}let D=0;function k(){D=0}function H(){const A=D;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function J(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){const W=e.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(W,A,b);return}}n.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+b)}function V(A,b){const W=e.get(A);if(A.version>0&&W.__version!==A.version){B(W,A,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+b)}function Q(A,b){const W=e.get(A);if(A.version>0&&W.__version!==A.version){B(W,A,b);return}n.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+b)}function X(A,b){const W=e.get(A);if(A.version>0&&W.__version!==A.version){G(W,A,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+b)}const rt={[Ce]:o.REPEAT,[bi]:o.CLAMP_TO_EDGE,[zr]:o.MIRRORED_REPEAT},at={[Pn]:o.NEAREST,[yd]:o.NEAREST_MIPMAP_NEAREST,[Ho]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[Gs]:o.LINEAR_MIPMAP_NEAREST,[Ti]:o.LINEAR_MIPMAP_LINEAR},dt={[Td]:o.NEVER,[Id]:o.ALWAYS,[Ed]:o.LESS,[Kc]:o.LEQUAL,[Ad]:o.EQUAL,[Pd]:o.GEQUAL,[Rd]:o.GREATER,[Cd]:o.NOTEQUAL};function wt(A,b){if(b.type===qn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Gs||b.magFilter===Ho||b.magFilter===Ti||b.minFilter===On||b.minFilter===Gs||b.minFilter===Ho||b.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(A,o.TEXTURE_WRAP_S,rt[b.wrapS]),o.texParameteri(A,o.TEXTURE_WRAP_T,rt[b.wrapT]),(A===o.TEXTURE_3D||A===o.TEXTURE_2D_ARRAY)&&o.texParameteri(A,o.TEXTURE_WRAP_R,rt[b.wrapR]),o.texParameteri(A,o.TEXTURE_MAG_FILTER,at[b.magFilter]),o.texParameteri(A,o.TEXTURE_MIN_FILTER,at[b.minFilter]),b.compareFunction&&(o.texParameteri(A,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(A,o.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pn||b.minFilter!==Ho&&b.minFilter!==Ti||b.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||e.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),e.get(b).__currentAnisotropy=b.anisotropy}}}function vt(A,b){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));const nt=b.source;let it=u.get(nt);it===void 0&&(it={},u.set(nt,it));const et=J(b);if(et!==A.__cacheKey){it[et]===void 0&&(it[et]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,W=!0),it[et].usedTimes++;const xt=it[A.__cacheKey];xt!==void 0&&(it[A.__cacheKey].usedTimes--,xt.usedTimes===0&&S(b)),A.__cacheKey=et,A.__webglTexture=it[et].texture}return W}function B(A,b,W){let nt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=o.TEXTURE_3D);const it=vt(A,b),et=b.source;n.bindTexture(nt,A.__webglTexture,o.TEXTURE0+W);const xt=e.get(et);if(et.version!==xt.__version||it===!0){n.activeTexture(o.TEXTURE0+W);const mt=_e.getPrimaries(_e.workingColorSpace),ft=b.colorSpace===ai?null:_e.getPrimaries(b.colorSpace),Lt=b.colorSpace===ai||mt===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ct=_(b.image,!1,i.maxTextureSize);ct=Wt(b,ct);const bt=s.convert(b.format,b.colorSpace),Ht=s.convert(b.type);let Kt=v(b.internalFormat,bt,Ht,b.colorSpace,b.isVideoTexture);wt(nt,b);let Dt;const oe=b.mipmaps,Qt=b.isVideoTexture!==!0,pe=xt.__version===void 0||it===!0,z=et.dataReady,yt=P(b,ct);if(b.isDepthTexture)Kt=w(b.format===io,b.type),pe&&(Qt?n.texStorage2D(o.TEXTURE_2D,1,Kt,ct.width,ct.height):n.texImage2D(o.TEXTURE_2D,0,Kt,ct.width,ct.height,0,bt,Ht,null));else if(b.isDataTexture)if(oe.length>0){Qt&&pe&&n.texStorage2D(o.TEXTURE_2D,yt,Kt,oe[0].width,oe[0].height);for(let tt=0,ot=oe.length;tt<ot;tt++)Dt=oe[tt],Qt?z&&n.texSubImage2D(o.TEXTURE_2D,tt,0,0,Dt.width,Dt.height,bt,Ht,Dt.data):n.texImage2D(o.TEXTURE_2D,tt,Kt,Dt.width,Dt.height,0,bt,Ht,Dt.data);b.generateMipmaps=!1}else Qt?(pe&&n.texStorage2D(o.TEXTURE_2D,yt,Kt,ct.width,ct.height),z&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ct.width,ct.height,bt,Ht,ct.data)):n.texImage2D(o.TEXTURE_2D,0,Kt,ct.width,ct.height,0,bt,Ht,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&pe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,yt,Kt,oe[0].width,oe[0].height,ct.depth);for(let tt=0,ot=oe.length;tt<ot;tt++)if(Dt=oe[tt],b.format!==Cn)if(bt!==null)if(Qt){if(z)if(b.layerUpdates.size>0){const gt=Jl(Dt.width,Dt.height,b.format,b.type);for(const ut of b.layerUpdates){const Gt=Dt.data.subarray(ut*gt/Dt.data.BYTES_PER_ELEMENT,(ut+1)*gt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,ut,Dt.width,Dt.height,1,bt,Gt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,0,Dt.width,Dt.height,ct.depth,bt,Dt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,tt,Kt,Dt.width,Dt.height,ct.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?z&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,0,Dt.width,Dt.height,ct.depth,bt,Ht,Dt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,tt,Kt,Dt.width,Dt.height,ct.depth,0,bt,Ht,Dt.data)}else{Qt&&pe&&n.texStorage2D(o.TEXTURE_2D,yt,Kt,oe[0].width,oe[0].height);for(let tt=0,ot=oe.length;tt<ot;tt++)Dt=oe[tt],b.format!==Cn?bt!==null?Qt?z&&n.compressedTexSubImage2D(o.TEXTURE_2D,tt,0,0,Dt.width,Dt.height,bt,Dt.data):n.compressedTexImage2D(o.TEXTURE_2D,tt,Kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?z&&n.texSubImage2D(o.TEXTURE_2D,tt,0,0,Dt.width,Dt.height,bt,Ht,Dt.data):n.texImage2D(o.TEXTURE_2D,tt,Kt,Dt.width,Dt.height,0,bt,Ht,Dt.data)}else if(b.isDataArrayTexture)if(Qt){if(pe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,yt,Kt,ct.width,ct.height,ct.depth),z)if(b.layerUpdates.size>0){const tt=Jl(ct.width,ct.height,b.format,b.type);for(const ot of b.layerUpdates){const gt=ct.data.subarray(ot*tt/ct.data.BYTES_PER_ELEMENT,(ot+1)*tt/ct.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ot,ct.width,ct.height,1,bt,Ht,gt)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,bt,Ht,ct.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,ct.width,ct.height,ct.depth,0,bt,Ht,ct.data);else if(b.isData3DTexture)Qt?(pe&&n.texStorage3D(o.TEXTURE_3D,yt,Kt,ct.width,ct.height,ct.depth),z&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,bt,Ht,ct.data)):n.texImage3D(o.TEXTURE_3D,0,Kt,ct.width,ct.height,ct.depth,0,bt,Ht,ct.data);else if(b.isFramebufferTexture){if(pe)if(Qt)n.texStorage2D(o.TEXTURE_2D,yt,Kt,ct.width,ct.height);else{let tt=ct.width,ot=ct.height;for(let gt=0;gt<yt;gt++)n.texImage2D(o.TEXTURE_2D,gt,Kt,tt,ot,0,bt,Ht,null),tt>>=1,ot>>=1}}else if(oe.length>0){if(Qt&&pe){const tt=St(oe[0]);n.texStorage2D(o.TEXTURE_2D,yt,Kt,tt.width,tt.height)}for(let tt=0,ot=oe.length;tt<ot;tt++)Dt=oe[tt],Qt?z&&n.texSubImage2D(o.TEXTURE_2D,tt,0,0,bt,Ht,Dt):n.texImage2D(o.TEXTURE_2D,tt,Kt,bt,Ht,Dt);b.generateMipmaps=!1}else if(Qt){if(pe){const tt=St(ct);n.texStorage2D(o.TEXTURE_2D,yt,Kt,tt.width,tt.height)}z&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Ht,ct)}else n.texImage2D(o.TEXTURE_2D,0,Kt,bt,Ht,ct);x(b)&&p(nt),xt.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function G(A,b,W){if(b.image.length!==6)return;const nt=vt(A,b),it=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,A.__webglTexture,o.TEXTURE0+W);const et=e.get(it);if(it.version!==et.__version||nt===!0){n.activeTexture(o.TEXTURE0+W);const xt=_e.getPrimaries(_e.workingColorSpace),mt=b.colorSpace===ai?null:_e.getPrimaries(b.colorSpace),ft=b.colorSpace===ai||xt===mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let ot=0;ot<6;ot++)!Lt&&!ct?bt[ot]=_(b.image[ot],!0,i.maxCubemapSize):bt[ot]=ct?b.image[ot].image:b.image[ot],bt[ot]=Wt(b,bt[ot]);const Ht=bt[0],Kt=s.convert(b.format,b.colorSpace),Dt=s.convert(b.type),oe=v(b.internalFormat,Kt,Dt,b.colorSpace),Qt=b.isVideoTexture!==!0,pe=et.__version===void 0||nt===!0,z=it.dataReady;let yt=P(b,Ht);wt(o.TEXTURE_CUBE_MAP,b);let tt;if(Lt){Qt&&pe&&n.texStorage2D(o.TEXTURE_CUBE_MAP,yt,oe,Ht.width,Ht.height);for(let ot=0;ot<6;ot++){tt=bt[ot].mipmaps;for(let gt=0;gt<tt.length;gt++){const ut=tt[gt];b.format!==Cn?Kt!==null?Qt?z&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt,0,0,ut.width,ut.height,Kt,ut.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt,oe,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt,0,0,ut.width,ut.height,Kt,Dt,ut.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt,oe,ut.width,ut.height,0,Kt,Dt,ut.data)}}}else{if(tt=b.mipmaps,Qt&&pe){tt.length>0&&yt++;const ot=St(bt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,yt,oe,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ct){Qt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,bt[ot].width,bt[ot].height,Kt,Dt,bt[ot].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,oe,bt[ot].width,bt[ot].height,0,Kt,Dt,bt[ot].data);for(let gt=0;gt<tt.length;gt++){const Gt=tt[gt].image[ot].image;Qt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt+1,0,0,Gt.width,Gt.height,Kt,Dt,Gt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt+1,oe,Gt.width,Gt.height,0,Kt,Dt,Gt.data)}}else{Qt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Kt,Dt,bt[ot]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,oe,Kt,Dt,bt[ot]);for(let gt=0;gt<tt.length;gt++){const ut=tt[gt];Qt?z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt+1,0,0,Kt,Dt,ut.image[ot]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt+1,oe,Kt,Dt,ut.image[ot])}}}x(b)&&p(o.TEXTURE_CUBE_MAP),et.__version=it.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Z(A,b,W,nt,it,et){const xt=s.convert(W.format,W.colorSpace),mt=s.convert(W.type),ft=v(W.internalFormat,xt,mt,W.colorSpace),Lt=e.get(b),ct=e.get(W);if(ct.__renderTarget=b,!Lt.__hasExternalTextures){const bt=Math.max(1,b.width>>et),Ht=Math.max(1,b.height>>et);it===o.TEXTURE_3D||it===o.TEXTURE_2D_ARRAY?n.texImage3D(it,et,ft,bt,Ht,b.depth,0,xt,mt,null):n.texImage2D(it,et,ft,bt,Ht,0,xt,mt,null)}n.bindFramebuffer(o.FRAMEBUFFER,A),zt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,nt,it,ct.__webglTexture,0,It(b)):(it===o.TEXTURE_2D||it>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,nt,it,ct.__webglTexture,et),n.bindFramebuffer(o.FRAMEBUFFER,null)}function st(A,b,W){if(o.bindRenderbuffer(o.RENDERBUFFER,A),b.depthBuffer){const nt=b.depthTexture,it=nt&&nt.isDepthTexture?nt.type:null,et=w(b.stencilBuffer,it),xt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=It(b);zt(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt,et,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,et,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,et,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,A)}else{const nt=b.textures;for(let it=0;it<nt.length;it++){const et=nt[it],xt=s.convert(et.format,et.colorSpace),mt=s.convert(et.type),ft=v(et.internalFormat,xt,mt,et.colorSpace),Lt=It(b);W&&zt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,ft,b.width,b.height):zt(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function pt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=e.get(b.depthTexture);nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const it=nt.__webglTexture,et=It(b);if(b.depthTexture.format===Ki)zt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,it,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,it,0);else if(b.depthTexture.format===io)zt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,it,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Pt(A){const b=e.get(A),W=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const nt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){const it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",it)};nt.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=nt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");pt(b.__webglFramebuffer,A)}else if(W){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=o.createRenderbuffer(),st(b.__webglDepthbuffer[nt],A,!1);else{const it=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[nt];o.bindRenderbuffer(o.RENDERBUFFER,et),o.framebufferRenderbuffer(o.FRAMEBUFFER,it,o.RENDERBUFFER,et)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),st(b.__webglDepthbuffer,A,!1);else{const nt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,it),o.framebufferRenderbuffer(o.FRAMEBUFFER,nt,o.RENDERBUFFER,it)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(A,b,W){const nt=e.get(A);b!==void 0&&Z(nt.__webglFramebuffer,A,A.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&Pt(A)}function Jt(A){const b=A.texture,W=e.get(A),nt=e.get(b);A.addEventListener("dispose",E);const it=A.textures,et=A.isWebGLCubeRenderTarget===!0,xt=it.length>1;if(xt||(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=b.version,r.memory.textures++),et){W.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[mt]=[];for(let ft=0;ft<b.mipmaps.length;ft++)W.__webglFramebuffer[mt][ft]=o.createFramebuffer()}else W.__webglFramebuffer[mt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)W.__webglFramebuffer[mt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(xt)for(let mt=0,ft=it.length;mt<ft;mt++){const Lt=e.get(it[mt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture(),r.memory.textures++)}if(A.samples>0&&zt(A)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){const ft=it[mt];W.__webglColorRenderbuffer[mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[mt]);const Lt=s.convert(ft.format,ft.colorSpace),ct=s.convert(ft.type),bt=v(ft.internalFormat,Lt,ct,ft.colorSpace,A.isXRRenderTarget===!0),Ht=It(A);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,bt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+mt,o.RENDERBUFFER,W.__webglColorRenderbuffer[mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),st(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(et){n.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture),wt(o.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)Z(W.__webglFramebuffer[mt][ft],A,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ft);else Z(W.__webglFramebuffer[mt],A,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);x(b)&&p(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xt){for(let mt=0,ft=it.length;mt<ft;mt++){const Lt=it[mt],ct=e.get(Lt);n.bindTexture(o.TEXTURE_2D,ct.__webglTexture),wt(o.TEXTURE_2D,Lt),Z(W.__webglFramebuffer,A,Lt,o.COLOR_ATTACHMENT0+mt,o.TEXTURE_2D,0),x(Lt)&&p(o.TEXTURE_2D)}n.unbindTexture()}else{let mt=o.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(mt=A.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(mt,nt.__webglTexture),wt(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)Z(W.__webglFramebuffer[ft],A,b,o.COLOR_ATTACHMENT0,mt,ft);else Z(W.__webglFramebuffer,A,b,o.COLOR_ATTACHMENT0,mt,0);x(b)&&p(mt),n.unbindTexture()}A.depthBuffer&&Pt(A)}function Nt(A){const b=A.textures;for(let W=0,nt=b.length;W<nt;W++){const it=b[W];if(x(it)){const et=M(A),xt=e.get(it).__webglTexture;n.bindTexture(et,xt),p(et),n.unbindTexture()}}}const jt=[],U=[];function Vt(A){if(A.samples>0){if(zt(A)===!1){const b=A.textures,W=A.width,nt=A.height;let it=o.COLOR_BUFFER_BIT;const et=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=e.get(A),mt=b.length>1;if(mt)for(let ft=0;ft<b.length;ft++)n.bindFramebuffer(o.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=o.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=o.STENCIL_BUFFER_BIT)),mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Lt=e.get(b[ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Lt,0)}o.blitFramebuffer(0,0,W,nt,0,0,W,nt,it,o.NEAREST),l===!0&&(jt.length=0,U.length=0,jt.push(o.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(jt.push(et),U.push(et),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,U)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),mt)for(let ft=0;ft<b.length;ft++){n.bindFramebuffer(o.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Lt=e.get(b[ft]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,Lt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function It(A){return Math.min(i.maxSamples,A.samples)}function zt(A){const b=e.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(A){const b=r.render.frame;d.get(A)!==b&&(d.set(A,b),A.update())}function Wt(A,b){const W=A.colorSpace,nt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==ro&&W!==ai&&(_e.getTransfer(W)===Se?(nt!==Cn||it!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=Ft,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=zt}function Km(o,t){function n(e,i=ai){let s;const r=_e.getTransfer(i);if(e===jn)return o.UNSIGNED_BYTE;if(e===ga)return o.UNSIGNED_SHORT_4_4_4_4;if(e===xa)return o.UNSIGNED_SHORT_5_5_5_1;if(e===Gc)return o.UNSIGNED_INT_5_9_9_9_REV;if(e===kc)return o.BYTE;if(e===Bc)return o.SHORT;if(e===Po)return o.UNSIGNED_SHORT;if(e===ma)return o.INT;if(e===Ei)return o.UNSIGNED_INT;if(e===qn)return o.FLOAT;if(e===Fo)return o.HALF_FLOAT;if(e===Hc)return o.ALPHA;if(e===Vc)return o.RGB;if(e===Cn)return o.RGBA;if(e===Wc)return o.LUMINANCE;if(e===Xc)return o.LUMINANCE_ALPHA;if(e===Ki)return o.DEPTH_COMPONENT;if(e===io)return o.DEPTH_STENCIL;if(e===Yc)return o.RED;if(e===_a)return o.RED_INTEGER;if(e===Zc)return o.RG;if(e===wa)return o.RG_INTEGER;if(e===va)return o.RGBA_INTEGER;if(e===ws||e===vs||e===ys||e===Ms)if(r===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(e===ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(e===ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(e===Fr||e===Or||e===kr||e===Br)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(e===Fr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===Or)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===kr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===Br)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(e===Gr||e===Hr||e===Vr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(e===Gr||e===Hr)return r===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(e===Vr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(e===Wr||e===Xr||e===Yr||e===Zr||e===qr||e===$r||e===Kr||e===Jr||e===jr||e===Qr||e===ta||e===ea||e===na||e===ia)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(e===Wr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===Xr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===Yr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===Zr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===qr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===$r)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===Kr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===Jr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===jr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===Qr)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===ta)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===ea)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===na)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===ia)return r===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(e===Ss||e===oa||e===sa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(e===Ss)return r===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===sa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(e===qc||e===ra||e===aa||e===la)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(e===Ss)return s.COMPRESSED_RED_RGTC1_EXT;if(e===ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===la)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return e===no?o.UNSIGNED_INT_24_8:o[e]!==void 0?o[e]:null}return{convert:n}}class Jm extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const e of t.hand.values())this._getHandJoint(n,e)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,e){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const x=n.getJointPose(_,e),p=this._getHandJoint(c,_);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,m=.005;c.inputState.pinching&&u>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,e),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(t.targetRaySpace,e),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const e=new At;e.matrixAutoUpdate=!1,e.visible=!1,t.joints[n.jointName]=e,t.add(e)}return t.joints[n.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,e){if(this.texture===null){const i=new cn,s=t.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!=e.depthNear||n.depthFar!=e.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,e=new di({vertexShader:Qm,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new g(new $t(20,20),e)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n2 extends ao{constructor(t,n){super();const e=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,d=null,f=null,u=null,h=null,m=null;const _=new e2,x=n.getContextAttributes();let p=null,M=null;const v=[],w=[],P=new Bt;let R=null;const E=new vn;E.viewport=new Te;const I=new vn;I.viewport=new Te;const S=[E,I],y=new Jm;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let G=v[B];return G===void 0&&(G=new mr,v[B]=G),G.getTargetRaySpace()},this.getControllerGrip=function(B){let G=v[B];return G===void 0&&(G=new mr,v[B]=G),G.getGripSpace()},this.getHand=function(B){let G=v[B];return G===void 0&&(G=new mr,v[B]=G),G.getHandSpace()};function H(B){const G=w.indexOf(B.inputSource);if(G===-1)return;const Z=v[G];Z!==void 0&&(Z.update(B.inputSource,B.frame,c||r),Z.dispatchEvent({type:B.type,data:B.inputSource}))}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",q);for(let B=0;B<v.length;B++){const G=w[B];G!==null&&(w[B]=null,v[B].disconnect(G))}D=null,k=null,_.reset(),t.setRenderTarget(p),h=null,u=null,f=null,i=null,M=null,vt.stop(),e.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const G={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,n,G),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Ai(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let G=null,Z=null,st=null;x.depth&&(st=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,G=x.stencil?io:Ki,Z=x.stencil?no:Ei);const pt={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:s};f=new XRWebGLBinding(i,n),u=f.createProjectionLayer(pt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ai(u.textureWidth,u.textureHeight,{format:Cn,type:jn,depthTexture:new df(u.textureWidth,u.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),vt.setContext(i),vt.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(B){for(let G=0;G<B.removed.length;G++){const Z=B.removed[G],st=w.indexOf(Z);st>=0&&(w[st]=null,v[st].disconnect(Z))}for(let G=0;G<B.added.length;G++){const Z=B.added[G];let st=w.indexOf(Z);if(st===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=w.length){w.push(Z),st=Pt;break}else if(w[Pt]===null){w[Pt]=Z,st=Pt;break}if(st===-1)break}const pt=v[st];pt&&pt.connect(Z)}}const V=new N,Q=new N;function X(B,G,Z){V.setFromMatrixPosition(G.matrixWorld),Q.setFromMatrixPosition(Z.matrixWorld);const st=V.distanceTo(Q),pt=G.projectionMatrix.elements,Pt=Z.projectionMatrix.elements,Ft=pt[14]/(pt[10]-1),Jt=pt[14]/(pt[10]+1),Nt=(pt[9]+1)/pt[5],jt=(pt[9]-1)/pt[5],U=(pt[8]-1)/pt[0],Vt=(Pt[8]+1)/Pt[0],It=Ft*U,zt=Ft*Vt,Tt=st/(-U+Vt),Wt=Tt*-U;if(G.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Wt),B.translateZ(Tt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),pt[10]===-1)B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const St=Ft+Tt,A=Jt+Tt,b=It-Wt,W=zt+(st-Wt),nt=Nt*Jt/A*St,it=jt*Jt/A*St;B.projectionMatrix.makePerspective(b,W,nt,it,St,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function rt(B,G){G===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(G.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let G=B.near,Z=B.far;_.texture!==null&&(_.depthNear>0&&(G=_.depthNear),_.depthFar>0&&(Z=_.depthFar)),y.near=I.near=E.near=G,y.far=I.far=E.far=Z,(D!==y.near||k!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,k=y.far),E.layers.mask=B.layers.mask|2,I.layers.mask=B.layers.mask|4,y.layers.mask=E.layers.mask|I.layers.mask;const st=B.parent,pt=y.cameras;rt(y,st);for(let Pt=0;Pt<pt.length;Pt++)rt(pt[Pt],st);pt.length===2?X(y,E,I):y.projectionMatrix.copy(E.projectionMatrix),at(B,y,st)};function at(B,G,Z){Z===null?B.matrix.copy(G.matrixWorld):(B.matrix.copy(Z.matrixWorld),B.matrix.invert(),B.matrix.multiply(G.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Io*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let dt=null;function wt(B,G){if(d=G.getViewerPose(c||r),m=G,d!==null){const Z=d.views;h!==null&&(t.setRenderTargetFramebuffer(M,h.framebuffer),t.setRenderTarget(M));let st=!1;Z.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let Pt=0;Pt<Z.length;Pt++){const Ft=Z[Pt];let Jt=null;if(h!==null)Jt=h.getViewport(Ft);else{const jt=f.getViewSubImage(u,Ft);Jt=jt.viewport,Pt===0&&(t.setRenderTargetTextures(M,jt.colorTexture,u.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(M))}let Nt=S[Pt];Nt===void 0&&(Nt=new vn,Nt.layers.enable(Pt),Nt.viewport=new Te,S[Pt]=Nt),Nt.matrix.fromArray(Ft.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ft.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Pt===0&&(y.matrix.copy(Nt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(Nt)}const pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const Pt=f.getDepthInformation(Z[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let Z=0;Z<v.length;Z++){const st=w[Z],pt=v[Z];st!==null&&pt!==void 0&&pt.update(st,G,c||r)}dt&&dt(B,G),G.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:G}),m=null}const vt=new cf;vt.setAnimationLoop(wt),this.setAnimationLoop=function(B){dt=B},this.dispose=function(){}}}const wi=new Dn,i2=new Ie;function o2(o,t){function n(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function e(x,p){p.color.getRGB(x.fogColor.value,rf(o)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,M,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(x,p):p.isMeshToonMaterial?(s(x,p),f(x,p)):p.isMeshPhongMaterial?(s(x,p),d(x,p)):p.isMeshStandardMaterial?(s(x,p),u(x,p),p.isMeshPhysicalMaterial&&h(x,p,w)):p.isMeshMatcapMaterial?(s(x,p),m(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),_(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(r(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,M,v):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,n(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===dn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,n(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===dn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,n(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,n(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,w=M.envMapRotation;v&&(x.envMap.value=v,wi.copy(w),wi.x*=-1,wi.y*=-1,wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),x.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(wi)),x.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,x.aoMapTransform))}function r(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,M,v){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*M,x.scale.value=v*.5,p.map&&(x.map.value=p.map,n(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function d(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function u(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function h(x,p,M){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function _(x,p){const M=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function s2(o,t,n,e){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const w=v.program;e.uniformBlockBinding(M,w)}function c(M,v){let w=i[M.id];w===void 0&&(m(M),w=d(M),i[M.id]=w,M.addEventListener("dispose",x));const P=v.program;e.updateUBOMapping(M,P);const R=t.render.frame;s[M.id]!==R&&(u(M),s[M.id]=R)}function d(M){const v=f();M.__bindingPointIndex=v;const w=o.createBuffer(),P=M.__size,R=M.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,P,R),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,v,w),w}function f(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=i[M.id],w=M.uniforms,P=M.__cache;o.bindBuffer(o.UNIFORM_BUFFER,v);for(let R=0,E=w.length;R<E;R++){const I=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,y=I.length;S<y;S++){const D=I[S];if(h(D,R,S,P)===!0){const k=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let q=0;q<H.length;q++){const V=H[q],Q=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,k+J,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,D.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function h(M,v,w,P){const R=M.value,E=v+"_"+w;if(P[E]===void 0)return typeof R=="number"||typeof R=="boolean"?P[E]=R:P[E]=R.clone(),!0;{const I=P[E];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[E]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function m(M){const v=M.uniforms;let w=0;const P=16;for(let E=0,I=v.length;E<I;E++){const S=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,D=S.length;y<D;y++){const k=S[y],H=Array.isArray(k.value)?k.value:[k.value];for(let J=0,q=H.length;J<q;J++){const V=H[J],Q=_(V),X=w%P,rt=X%Q.boundary,at=X+rt;w+=rt,at!==0&&P-at<Q.storage&&(w+=P-at),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=Q.storage}}}const R=w%P;return R>0&&(w+=P-R),M.__size=w,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function x(M){const v=M.target;v.removeEventListener("dispose",x);const w=r.indexOf(v.__bindingPointIndex);r.splice(w,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const M in i)o.deleteBuffer(i[M]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class r2{constructor(t={}){const{canvas:n=qd(),context:e=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let h;if(e!==null){if(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=e.getContextAttributes().alpha}else h=r;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const M=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this.toneMapping=ci,this.toneMappingExposure=1;const w=this;let P=!1,R=0,E=0,I=null,S=-1,y=null;const D=new Te,k=new Te;let H=null;const J=new me(0);let q=0,V=n.width,Q=n.height,X=1,rt=null,at=null;const dt=new Te(0,0,V,Q),wt=new Te(0,0,V,Q);let vt=!1;const B=new Ma;let G=!1,Z=!1;const st=new Ie,pt=new Ie,Pt=new N,Ft=new Te,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function jt(){return I===null?X:1}let U=e;function Vt(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pa}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",gt,!1),n.addEventListener("webglcontextcreationerror",ut,!1),U===null){const F="webgl2";if(U=Vt(F,T),U===null)throw Vt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let It,zt,Tt,Wt,St,A,b,W,nt,it,et,xt,mt,ft,Lt,ct,bt,Ht,Kt,Dt,oe,Qt,pe,z;function yt(){It=new dp(U),It.init(),Qt=new Km(U,It),zt=new sp(U,It,t,Qt),Tt=new Zm(U,It),zt.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),Wt=new pp(U),St=new Lm,A=new $m(U,It,Tt,St,zt,Qt,Wt),b=new ap(w),W=new fp(w),nt=new yh(U),pe=new ip(U,nt),it=new hp(U,nt,Wt,pe),et=new gp(U,it,nt,Wt),Kt=new mp(U,zt,A),ct=new rp(St),xt=new Im(w,b,W,It,zt,pe,ct),mt=new o2(w,St),ft=new Um,Lt=new Bm(It),Ht=new np(w,b,W,Tt,et,h,l),bt=new Xm(w,et,zt),z=new s2(U,Wt,zt,Tt),Dt=new op(U,It,Wt),oe=new up(U,It,Wt),Wt.programs=xt.programs,w.capabilities=zt,w.extensions=It,w.properties=St,w.renderLists=ft,w.shadowMap=bt,w.state=Tt,w.info=Wt}yt();const tt=new n2(w,U);this.xr=tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=It.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=It.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(V,Q,!1))},this.getSize=function(T){return T.set(V,Q)},this.setSize=function(T,F,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,Q=F,n.width=Math.floor(T*X),n.height=Math.floor(F*X),$===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(V*X,Q*X).floor()},this.setDrawingBufferSize=function(T,F,$){V=T,Q=F,X=$,n.width=Math.floor(T*$),n.height=Math.floor(F*$),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,F,$,K){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,F,$,K),Tt.viewport(D.copy(dt).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(wt)},this.setScissor=function(T,F,$,K){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,F,$,K),Tt.scissor(k.copy(wt).multiplyScalar(X).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(T){Tt.setScissorTest(vt=T)},this.setOpaqueSort=function(T){rt=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(T=!0,F=!0,$=!0){let K=0;if(T){let O=!1;if(I!==null){const ht=I.texture.format;O=ht===va||ht===wa||ht===_a}if(O){const ht=I.texture.type,Et=ht===jn||ht===Ei||ht===Po||ht===no||ht===ga||ht===xa,kt=Ht.getClearColor(),Ot=Ht.getClearAlpha(),ee=kt.r,ae=kt.g,lt=kt.b;Et?(m[0]=ee,m[1]=ae,m[2]=lt,m[3]=Ot,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=ee,_[1]=ae,_[2]=lt,_[3]=Ot,U.clearBufferiv(U.COLOR,0,_))}else K|=U.COLOR_BUFFER_BIT}F&&(K|=U.DEPTH_BUFFER_BIT),$&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",gt,!1),n.removeEventListener("webglcontextcreationerror",ut,!1),ft.dispose(),Lt.dispose(),St.dispose(),b.dispose(),W.dispose(),et.dispose(),pe.dispose(),z.dispose(),xt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Oe),tt.removeEventListener("sessionend",Ae),ge.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=Wt.autoReset,F=bt.enabled,$=bt.autoUpdate,K=bt.needsUpdate,O=bt.type;yt(),Wt.autoReset=T,bt.enabled=F,bt.autoUpdate=$,bt.needsUpdate=K,bt.type=O}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){const F=T.target;F.removeEventListener("dispose",Gt),se(F)}function se(T){Ee(T),St.remove(T)}function Ee(T){const F=St.get(T).programs;F!==void 0&&(F.forEach(function($){xt.releaseProgram($)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,$,K,O,ht){F===null&&(F=Jt);const Et=O.isMesh&&O.matrixWorld.determinant()<0,kt=Re(T,F,$,K,O);Tt.setMaterial(K,Et);let Ot=$.index,ee=1;if(K.wireframe===!0){if(Ot=it.getWireframeAttribute($),Ot===void 0)return;ee=2}const ae=$.drawRange,lt=$.attributes.position;let Mt=ae.start*ee,Zt=(ae.start+ae.count)*ee;ht!==null&&(Mt=Math.max(Mt,ht.start*ee),Zt=Math.min(Zt,(ht.start+ht.count)*ee)),Ot!==null?(Mt=Math.max(Mt,0),Zt=Math.min(Zt,Ot.count)):lt!=null&&(Mt=Math.max(Mt,0),Zt=Math.min(Zt,lt.count));const ne=Zt-Mt;if(ne<0||ne===1/0)return;pe.setup(O,K,kt,$,Ot);let ye,le=Dt;if(Ot!==null&&(ye=nt.get(Ot),le=oe,le.setIndex(ye)),O.isMesh)K.wireframe===!0?(Tt.setLineWidth(K.wireframeLinewidth*jt()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(O.isLine){let Ut=K.linewidth;Ut===void 0&&(Ut=1),Tt.setLineWidth(Ut*jt()),O.isLineSegments?le.setMode(U.LINES):O.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else O.isPoints?le.setMode(U.POINTS):O.isSprite&&le.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)le.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))le.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ut=O._multiDrawStarts,qe=O._multiDrawCounts,xe=O._multiDrawCount,Qe=Ot?nt.get(Ot).bytesPerElement:1,Mn=St.get(K).currentProgram.getUniforms();for(let ke=0;ke<xe;ke++)Mn.setValue(U,"_gl_DrawID",ke),le.render(Ut[ke]/Qe,qe[ke])}else if(O.isInstancedMesh)le.renderInstances(Mt,ne,O.count);else if($.isInstancedBufferGeometry){const Ut=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,qe=Math.min($.instanceCount,Ut);le.renderInstances(Mt,ne,qe)}else le.render(Mt,ne)};function re(T,F,$){T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,Ze(T,F,$),T.side=fi,T.needsUpdate=!0,Ze(T,F,$),T.side=nn):Ze(T,F,$)}this.compile=function(T,F,$=null){$===null&&($=T),p=Lt.get($),p.init(F),v.push(p),$.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==$&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const K=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ht=O.material;if(ht)if(Array.isArray(ht))for(let Et=0;Et<ht.length;Et++){const kt=ht[Et];re(kt,$,O),K.add(kt)}else re(ht,$,O),K.add(ht)}),v.pop(),p=null,K},this.compileAsync=function(T,F,$=null){const K=this.compile(T,F,$);return new Promise(O=>{function ht(){if(K.forEach(function(Et){St.get(Et).currentProgram.isReady()&&K.delete(Et)}),K.size===0){O(T);return}setTimeout(ht,10)}It.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let De=null;function ze(T){De&&De(T)}function Oe(){ge.stop()}function Ae(){ge.start()}const ge=new cf;ge.setAnimationLoop(ze),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(T){De=T,tt.setAnimationLoop(T),T===null?ge.stop():ge.start()},tt.addEventListener("sessionstart",Oe),tt.addEventListener("sessionend",Ae),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(F),F=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,F,I),p=Lt.get(T,v.length),p.init(F),v.push(p),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(pt),Z=this.localClippingEnabled,G=ct.init(this.clippingPlanes,Z),x=ft.get(T,M.length),x.init(),M.push(x),tt.enabled===!0&&tt.isPresenting===!0){const ht=w.xr.getDepthSensingMesh();ht!==null&&Ne(ht,F,-1/0,w.sortObjects)}Ne(T,F,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(rt,at),Nt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Nt&&Ht.addToRenderList(x,T),this.info.render.frame++,G===!0&&ct.beginShadows();const $=p.state.shadowsArray;bt.render($,T,F),G===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,O=x.transmissive;if(p.setupLights(),F.isArrayCamera){const ht=F.cameras;if(O.length>0)for(let Et=0,kt=ht.length;Et<kt;Et++){const Ot=ht[Et];te(K,O,T,Ot)}Nt&&Ht.render(T);for(let Et=0,kt=ht.length;Et<kt;Et++){const Ot=ht[Et];fe(x,T,Ot,Ot.viewport)}}else O.length>0&&te(K,O,T,F),Nt&&Ht.render(T),fe(x,T,F);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(w,T,F),pe.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],G===!0&&ct.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function Ne(T,F,$,K){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){K&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pt);const Et=et.update(T),kt=T.material;kt.visible&&x.push(T,Et,kt,$,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){const Et=et.update(T),kt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ft.copy(Et.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(pt)),Array.isArray(kt)){const Ot=Et.groups;for(let ee=0,ae=Ot.length;ee<ae;ee++){const lt=Ot[ee],Mt=kt[lt.materialIndex];Mt&&Mt.visible&&x.push(T,Et,Mt,$,Ft.z,lt)}}else kt.visible&&x.push(T,Et,kt,$,Ft.z,null)}}const ht=T.children;for(let Et=0,kt=ht.length;Et<kt;Et++)Ne(ht[Et],F,$,K)}function fe(T,F,$,K){const O=T.opaque,ht=T.transmissive,Et=T.transparent;p.setupLightsView($),G===!0&&ct.setGlobalState(w.clippingPlanes,$),K&&Tt.viewport(D.copy(K)),O.length>0&&je(O,F,$),ht.length>0&&je(ht,F,$),Et.length>0&&je(Et,F,$),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function te(T,F,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ai(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Fo:jn,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const ht=p.state.transmissionRenderTarget[K.id],Et=K.viewport||D;ht.setSize(Et.z,Et.w);const kt=w.getRenderTarget();w.setRenderTarget(ht),w.getClearColor(J),q=w.getClearAlpha(),q<1&&w.setClearColor(16777215,.5),w.clear(),Nt&&Ht.render($);const Ot=w.toneMapping;w.toneMapping=ci;const ee=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),G===!0&&ct.setGlobalState(w.clippingPlanes,K),je(T,$,K),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht),It.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let lt=0,Mt=F.length;lt<Mt;lt++){const Zt=F[lt],ne=Zt.object,ye=Zt.geometry,le=Zt.material,Ut=Zt.group;if(le.side===nn&&ne.layers.test(K.layers)){const qe=le.side;le.side=dn,le.needsUpdate=!0,Ve(ne,$,K,ye,le,Ut),le.side=qe,le.needsUpdate=!0,ae=!0}}ae===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht))}w.setRenderTarget(kt),w.setClearColor(J,q),ee!==void 0&&(K.viewport=ee),w.toneMapping=Ot}function je(T,F,$){const K=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ht=T.length;O<ht;O++){const Et=T[O],kt=Et.object,Ot=Et.geometry,ee=K===null?Et.material:K,ae=Et.group;kt.layers.test($.layers)&&Ve(kt,F,$,Ot,ee,ae)}}function Ve(T,F,$,K,O,ht){T.onBeforeRender(w,F,$,K,O,ht),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(w,F,$,K,T,ht),O.transparent===!0&&O.side===nn&&O.forceSinglePass===!1?(O.side=dn,O.needsUpdate=!0,w.renderBufferDirect($,F,K,O,T,ht),O.side=fi,O.needsUpdate=!0,w.renderBufferDirect($,F,K,O,T,ht),O.side=nn):w.renderBufferDirect($,F,K,O,T,ht),T.onAfterRender(w,F,$,K,O,ht)}function Ze(T,F,$){F.isScene!==!0&&(F=Jt);const K=St.get(T),O=p.state.lights,ht=p.state.shadowsArray,Et=O.state.version,kt=xt.getParameters(T,O.state,ht,F,$),Ot=xt.getProgramCacheKey(kt);let ee=K.programs;K.environment=T.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(T.isMeshStandardMaterial?W:b).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,ee===void 0&&(T.addEventListener("dispose",Gt),ee=new Map,K.programs=ee);let ae=ee.get(Ot);if(ae!==void 0){if(K.currentProgram===ae&&K.lightsStateVersion===Et)return ve(T,kt),ae}else kt.uniforms=xt.getUniforms(T),T.onBeforeCompile(kt,w),ae=xt.acquireProgram(kt,Ot),ee.set(Ot,ae),K.uniforms=kt.uniforms;const lt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(lt.clippingPlanes=ct.uniform),ve(T,kt),K.needsLights=Yt(T),K.lightsStateVersion=Et,K.needsLights&&(lt.ambientLightColor.value=O.state.ambient,lt.lightProbe.value=O.state.probe,lt.directionalLights.value=O.state.directional,lt.directionalLightShadows.value=O.state.directionalShadow,lt.spotLights.value=O.state.spot,lt.spotLightShadows.value=O.state.spotShadow,lt.rectAreaLights.value=O.state.rectArea,lt.ltc_1.value=O.state.rectAreaLTC1,lt.ltc_2.value=O.state.rectAreaLTC2,lt.pointLights.value=O.state.point,lt.pointLightShadows.value=O.state.pointShadow,lt.hemisphereLights.value=O.state.hemi,lt.directionalShadowMap.value=O.state.directionalShadowMap,lt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,lt.spotShadowMap.value=O.state.spotShadowMap,lt.spotLightMatrix.value=O.state.spotLightMatrix,lt.spotLightMap.value=O.state.spotLightMap,lt.pointShadowMap.value=O.state.pointShadowMap,lt.pointShadowMatrix.value=O.state.pointShadowMatrix),K.currentProgram=ae,K.uniformsList=null,ae}function hn(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=bs.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ve(T,F){const $=St.get(T);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Re(T,F,$,K,O){F.isScene!==!0&&(F=Jt),A.resetTextureUnits();const ht=F.fog,Et=K.isMeshStandardMaterial?F.environment:null,kt=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ro,Ot=(K.isMeshStandardMaterial?W:b).get(K.envMap||Et),ee=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ae=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),lt=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,Zt=!!$.morphAttributes.color;let ne=ci;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ne=w.toneMapping);const ye=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,le=ye!==void 0?ye.length:0,Ut=St.get(K),qe=p.state.lights;if(G===!0&&(Z===!0||T!==y)){const We=T===y&&K.id===S;ct.setState(K,T,We)}let xe=!1;K.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==qe.state.version||Ut.outputColorSpace!==kt||O.isBatchedMesh&&Ut.batching===!1||!O.isBatchedMesh&&Ut.batching===!0||O.isBatchedMesh&&Ut.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ut.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ut.instancing===!1||!O.isInstancedMesh&&Ut.instancing===!0||O.isSkinnedMesh&&Ut.skinning===!1||!O.isSkinnedMesh&&Ut.skinning===!0||O.isInstancedMesh&&Ut.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ut.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ut.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ut.instancingMorph===!1&&O.morphTexture!==null||Ut.envMap!==Ot||K.fog===!0&&Ut.fog!==ht||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ct.numPlanes||Ut.numIntersection!==ct.numIntersection)||Ut.vertexAlphas!==ee||Ut.vertexTangents!==ae||Ut.morphTargets!==lt||Ut.morphNormals!==Mt||Ut.morphColors!==Zt||Ut.toneMapping!==ne||Ut.morphTargetsCount!==le)&&(xe=!0):(xe=!0,Ut.__version=K.version);let Qe=Ut.currentProgram;xe===!0&&(Qe=Ze(K,F,O));let Mn=!1,ke=!1,hi=!1;const Me=Qe.getUniforms(),Sn=Ut.uniforms;if(Tt.useProgram(Qe.program)&&(Mn=!0,ke=!0,hi=!0),K.id!==S&&(S=K.id,ke=!0),Mn||y!==T){Tt.buffers.depth.getReversed()?(st.copy(T.projectionMatrix),Kd(st),Jd(st),Me.setValue(U,"projectionMatrix",st)):Me.setValue(U,"projectionMatrix",T.projectionMatrix),Me.setValue(U,"viewMatrix",T.matrixWorldInverse);const sn=Me.map.cameraPosition;sn!==void 0&&sn.setValue(U,Pt.setFromMatrixPosition(T.matrixWorld)),zt.logarithmicDepthBuffer&&Me.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Me.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,ke=!0,hi=!0)}if(O.isSkinnedMesh){Me.setOptional(U,O,"bindMatrix"),Me.setOptional(U,O,"bindMatrixInverse");const We=O.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Me.setValue(U,"boneTexture",We.boneTexture,A))}O.isBatchedMesh&&(Me.setOptional(U,O,"batchingTexture"),Me.setValue(U,"batchingTexture",O._matricesTexture,A),Me.setOptional(U,O,"batchingIdTexture"),Me.setValue(U,"batchingIdTexture",O._indirectTexture,A),Me.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Me.setValue(U,"batchingColorTexture",O._colorsTexture,A));const Gn=$.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Kt.update(O,$,Qe),(ke||Ut.receiveShadow!==O.receiveShadow)&&(Ut.receiveShadow=O.receiveShadow,Me.setValue(U,"receiveShadow",O.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Sn.envMap.value=Ot,Sn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(Sn.envMapIntensity.value=F.environmentIntensity),ke&&(Me.setValue(U,"toneMappingExposure",w.toneMappingExposure),Ut.needsLights&&Xt(Sn,hi),ht&&K.fog===!0&&mt.refreshFogUniforms(Sn,ht),mt.refreshMaterialUniforms(Sn,K,X,Q,p.state.transmissionRenderTarget[T.id]),bs.upload(U,hn(Ut),Sn,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(bs.upload(U,hn(Ut),Sn,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Me.setValue(U,"center",O.center),Me.setValue(U,"modelViewMatrix",O.modelViewMatrix),Me.setValue(U,"normalMatrix",O.normalMatrix),Me.setValue(U,"modelMatrix",O.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const We=K.uniformsGroups;for(let sn=0,un=We.length;sn<un;sn++){const Qn=We[sn];z.update(Qn,Qe),z.bind(Qn,Qe)}}return Qe}function Xt(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Yt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,F,$){St.get(T.texture).__webglTexture=F,St.get(T.depthTexture).__webglTexture=$;const K=St.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const $=St.get(T);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,$=0){I=T,R=F,E=$;let K=!0,O=null,ht=!1,Et=!1;if(T){const Ot=St.get(T);if(Ot.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(Ot.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ot.__hasExternalTextures)A.rebindTextures(T,St.get(T.texture).__webglTexture,St.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const lt=T.depthTexture;if(Ot.__boundDepthTexture!==lt){if(lt!==null&&St.has(lt)&&(T.width!==lt.image.width||T.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const ee=T.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Et=!0);const ae=St.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ae[F])?O=ae[F][$]:O=ae[F],ht=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?O=St.get(T).__webglMultisampledFramebuffer:Array.isArray(ae)?O=ae[$]:O=ae,D.copy(T.viewport),k.copy(T.scissor),H=T.scissorTest}else D.copy(dt).multiplyScalar(X).floor(),k.copy(wt).multiplyScalar(X).floor(),H=vt;if(Tt.bindFramebuffer(U.FRAMEBUFFER,O)&&K&&Tt.drawBuffers(T,O),Tt.viewport(D),Tt.scissor(k),Tt.setScissorTest(H),ht){const Ot=St.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ot.__webglTexture,$)}else if(Et){const Ot=St.get(T.texture),ee=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,$||0,ee)}S=-1},this.readRenderTargetPixels=function(T,F,$,K,O,ht,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(kt=kt[Et]),kt){Tt.bindFramebuffer(U.FRAMEBUFFER,kt);try{const Ot=T.texture,ee=Ot.format,ae=Ot.type;if(!zt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-K&&$>=0&&$<=T.height-O&&U.readPixels(F,$,K,O,Qt.convert(ee),Qt.convert(ae),ht)}finally{const Ot=I!==null?St.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,F,$,K,O,ht,Et){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(kt=kt[Et]),kt){const Ot=T.texture,ee=Ot.format,ae=Ot.type;if(!zt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-K&&$>=0&&$<=T.height-O){Tt.bindFramebuffer(U.FRAMEBUFFER,kt);const lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.bufferData(U.PIXEL_PACK_BUFFER,ht.byteLength,U.STREAM_READ),U.readPixels(F,$,K,O,Qt.convert(ee),Qt.convert(ae),0);const Mt=I!==null?St.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Mt);const Zt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $d(U,Zt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ht),U.deleteBuffer(lt),U.deleteSync(Zt),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,$=0){T.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-$),O=Math.floor(T.image.width*K),ht=Math.floor(T.image.height*K),Et=F!==null?F.x:0,kt=F!==null?F.y:0;A.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Et,kt,O,ht),Tt.unbindTexture()},this.copyTextureToTexture=function(T,F,$=null,K=null,O=0){T.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,$=null);let ht,Et,kt,Ot,ee,ae,lt,Mt,Zt;const ne=T.isCompressedTexture?T.mipmaps[O]:T.image;$!==null?(ht=$.max.x-$.min.x,Et=$.max.y-$.min.y,kt=$.isBox3?$.max.z-$.min.z:1,Ot=$.min.x,ee=$.min.y,ae=$.isBox3?$.min.z:0):(ht=ne.width,Et=ne.height,kt=ne.depth||1,Ot=0,ee=0,ae=0),K!==null?(lt=K.x,Mt=K.y,Zt=K.z):(lt=0,Mt=0,Zt=0);const ye=Qt.convert(F.format),le=Qt.convert(F.type);let Ut;F.isData3DTexture?(A.setTexture3D(F,0),Ut=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Ut=U.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Ut=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const qe=U.getParameter(U.UNPACK_ROW_LENGTH),xe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Qe=U.getParameter(U.UNPACK_SKIP_PIXELS),Mn=U.getParameter(U.UNPACK_SKIP_ROWS),ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ne.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),U.pixelStorei(U.UNPACK_SKIP_ROWS,ee),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ae);const hi=T.isDataArrayTexture||T.isData3DTexture,Me=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Sn=St.get(T),Gn=St.get(F),We=St.get(Sn.__renderTarget),sn=St.get(Gn.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,We.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let un=0;un<kt;un++)hi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(T).__webglTexture,O,ae+un),T.isDepthTexture?(Me&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(F).__webglTexture,O,Zt+un),U.blitFramebuffer(Ot,ee,ht,Et,lt,Mt,ht,Et,U.DEPTH_BUFFER_BIT,U.NEAREST)):Me?U.copyTexSubImage3D(Ut,O,lt,Mt,Zt+un,Ot,ee,ht,Et):U.copyTexSubImage2D(Ut,O,lt,Mt,Zt+un,Ot,ee,ht,Et);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Me?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ut,O,lt,Mt,Zt,ht,Et,kt,ye,le,ne.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ut,O,lt,Mt,Zt,ht,Et,kt,ye,ne.data):U.texSubImage3D(Ut,O,lt,Mt,Zt,ht,Et,kt,ye,le,ne):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,lt,Mt,ht,Et,ye,le,ne.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,lt,Mt,ne.width,ne.height,ye,ne.data):U.texSubImage2D(U.TEXTURE_2D,O,lt,Mt,ht,Et,ye,le,ne);U.pixelStorei(U.UNPACK_ROW_LENGTH,qe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke),O===0&&F.generateMipmaps&&U.generateMipmap(Ut),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,$=null,K=null,O=0){return T.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,$,K,O)},this.initRenderTarget=function(T){St.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){R=0,E=0,I=null,Tt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=_e._getDrawingBufferColorSpace(t),n.unpackColorSpace=_e._getUnpackColorSpace()}}class ba{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(t),this.density=n}clone(){return new ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class a2 extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gf extends co{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const As=new N,Rs=new N,jl=new Ie,xo=new tf,cs=new Is,gr=new N,Ql=new N;class l2 extends Ke{constructor(t=new on,n=new gf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,e=[0];for(let i=1,s=n.count;i<s;i++)As.fromBufferAttribute(n,i-1),Rs.fromBufferAttribute(n,i),e[i]=e[i-1],e[i]+=As.distanceTo(Rs);t.setAttribute("lineDistance",new Pe(e,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const e=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=e.drawRange;if(e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere),cs.applyMatrix4(i),cs.radius+=s,t.ray.intersectsSphere(cs)===!1)return;jl.copy(i).invert(),xo.copy(t.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=e.index,u=e.attributes.position;if(d!==null){const h=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=h,x=m-1;_<x;_+=c){const p=d.getX(_),M=d.getX(_+1),v=fs(this,t,xo,l,p,M);v&&n.push(v)}if(this.isLineLoop){const _=d.getX(m-1),x=d.getX(h),p=fs(this,t,xo,l,_,x);p&&n.push(p)}}else{const h=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let _=h,x=m-1;_<x;_+=c){const p=fs(this,t,xo,l,_,_+1);p&&n.push(p)}if(this.isLineLoop){const _=fs(this,t,xo,l,m-1,h);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){const i=n[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fs(o,t,n,e,i,s){const r=o.geometry.attributes.position;if(As.fromBufferAttribute(r,i),Rs.fromBufferAttribute(r,s),n.distanceSqToSegment(As,Rs,gr,Ql)>e)return;gr.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(gr);if(!(l<t.near||l>t.far))return{distance:l,point:Ql.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}class ie extends cn{constructor(t,n,e,i,s,r,a,l,c){super(t,n,e,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const e=this.getUtoTmapping(t);return this.getPoint(e,n)}getPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return n}getSpacedPoints(t=5){const n=[];for(let e=0;e<=t;e++)n.push(this.getPointAt(e/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let e,i=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)e=this.getPoint(r/t),s+=e.distanceTo(i),n.push(s),i=e;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const e=this.getLengths();let i=0;const s=e.length;let r;n?r=n:r=t*e[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=e[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,e[i]===r)return i/(s-1);const d=e[i],u=e[i+1]-d,h=(r-d)/u;return(i+h)/(s-1)}getTangent(t,n){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=n||(r.isVector2?new Bt:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,n){const e=this.getUtoTmapping(t);return this.getTangent(e,n)}computeFrenetFrames(t,n){const e=new N,i=[],s=[],r=[],a=new N,l=new Ie;for(let h=0;h<=t;h++){const m=h/t;i[h]=this.getTangentAt(m,new N)}s[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=c&&(c=d,e.set(1,0,0)),f<=c&&(c=f,e.set(0,1,0)),u<=c&&e.set(0,0,1),a.crossVectors(i[0],e).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Je(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,m))}r[h].crossVectors(i[h],s[h])}if(n===!0){let h=Math.acos(Je(s[0].dot(s[t]),-1,1));h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],h*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ta extends Bn{constructor(t=0,n=0,e=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=e,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,n=new Bt){const e=n,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,h=c-this.aY;l=u*d-h*f+this.aX,c=u*f+h*d+this.aY}return e.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class c2 extends Ta{constructor(t,n,e,i,s,r){super(t,n,e,e,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ea(){let o=0,t=0,n=0,e=0;function i(s,r,a,l){o=s,t=a,n=-3*s+3*r-2*a-l,e=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,d,f){let u=(r-s)/c-(a-s)/(c+d)+(a-r)/d,h=(a-r)/d-(l-r)/(d+f)+(l-a)/f;u*=d,h*=d,i(r,a,u,h)},calc:function(s){const r=s*s,a=r*s;return o+t*s+n*r+e*a}}}const ds=new N,xr=new Ea,_r=new Ea,wr=new Ea;class f2 extends Bn{constructor(t=[],n=!1,e="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=e,this.tension=i}getPoint(t,n=new N){const e=n,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=i[(a-1)%s]:(ds.subVectors(i[0],i[1]).add(i[0]),c=ds);const f=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?d=i[(a+2)%s]:(ds.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=ds),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),h),_=Math.pow(f.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(d),h);_<1e-4&&(_=1),m<1e-4&&(m=_),x<1e-4&&(x=_),xr.initNonuniformCatmullRom(c.x,f.x,u.x,d.x,m,_,x),_r.initNonuniformCatmullRom(c.y,f.y,u.y,d.y,m,_,x),wr.initNonuniformCatmullRom(c.z,f.z,u.z,d.z,m,_,x)}else this.curveType==="catmullrom"&&(xr.initCatmullRom(c.x,f.x,u.x,d.x,this.tension),_r.initCatmullRom(c.y,f.y,u.y,d.y,this.tension),wr.initCatmullRom(c.z,f.z,u.z,d.z,this.tension));return e.set(xr.calc(l),_r.calc(l),wr.calc(l)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const i=this.points[n];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(o,t,n,e,i){const s=(e-t)*.5,r=(i-n)*.5,a=o*o,l=o*a;return(2*n-2*e+s+r)*l+(-3*n+3*e-2*s-r)*a+s*o+n}function d2(o,t){const n=1-o;return n*n*t}function h2(o,t){return 2*(1-o)*o*t}function u2(o,t){return o*o*t}function To(o,t,n,e){return d2(o,t)+h2(o,n)+u2(o,e)}function p2(o,t){const n=1-o;return n*n*n*t}function m2(o,t){const n=1-o;return 3*n*n*o*t}function g2(o,t){return 3*(1-o)*o*o*t}function x2(o,t){return o*o*o*t}function Eo(o,t,n,e,i){return p2(o,t)+m2(o,n)+g2(o,e)+x2(o,i)}class xf extends Bn{constructor(t=new Bt,n=new Bt,e=new Bt,i=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=e,this.v3=i}getPoint(t,n=new Bt){const e=n,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(Eo(t,i.x,s.x,r.x,a.x),Eo(t,i.y,s.y,r.y,a.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _2 extends Bn{constructor(t=new N,n=new N,e=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=e,this.v3=i}getPoint(t,n=new N){const e=n,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return e.set(Eo(t,i.x,s.x,r.x,a.x),Eo(t,i.y,s.y,r.y,a.y),Eo(t,i.z,s.z,r.z,a.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _f extends Bn{constructor(t=new Bt,n=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Bt){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Bt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w2 extends Bn{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){const e=n;return t===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(t).add(this.v1)),e}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends Bn{constructor(t=new Bt,n=new Bt,e=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new Bt){const e=n,i=this.v0,s=this.v1,r=this.v2;return e.set(To(t,i.x,s.x,r.x),To(t,i.y,s.y,r.y)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends Bn{constructor(t=new N,n=new N,e=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=e}getPoint(t,n=new N){const e=n,i=this.v0,s=this.v1,r=this.v2;return e.set(To(t,i.x,s.x,r.x),To(t,i.y,s.y,r.y),To(t,i.z,s.z,r.z)),e}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Bt){const e=n,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],d=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return e.set(tc(a,l.x,c.x,d.x,f.x),tc(a,l.y,c.y,d.y,f.y)),e}copy(t){super.copy(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,e=this.points.length;n<e;n++){const i=this.points[n];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,e=t.points.length;n<e;n++){const i=t.points[n];this.points.push(new Bt().fromArray(i))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:c2,CatmullRomCurve3:f2,CubicBezierCurve:xf,CubicBezierCurve3:_2,EllipseCurve:Ta,LineCurve:_f,LineCurve3:w2,QuadraticBezierCurve:wf,QuadraticBezierCurve3:vf,SplineCurve:yf});class v2 extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const e=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[e](n,t))}return this}getPoint(t,n){const e=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=e){const r=i[s]-e,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let e=0,i=this.curves.length;e<i;e++)n+=this.curves[e].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let e=0;e<=t;e++)n.push(this.getPoint(e/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let e;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];e&&e.equals(d)||(n.push(d),e=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const i=t.curves[n];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,e=this.curves.length;n<e;n++){const i=this.curves[n];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,e=t.curves.length;n<e;n++){const i=t.curves[n];this.curves.push(new ec[i.type]().fromJSON(i))}return this}}class nc extends v2{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,e=t.length;n<e;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const e=new _f(this.currentPoint.clone(),new Bt(t,n));return this.curves.push(e),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,e,i){const s=new wf(this.currentPoint.clone(),new Bt(t,n),new Bt(e,i));return this.curves.push(s),this.currentPoint.set(e,i),this}bezierCurveTo(t,n,e,i,s,r){const a=new xf(this.currentPoint.clone(),new Bt(t,n),new Bt(e,i),new Bt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),e=new yf(n);return this.curves.push(e),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,e,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,n+l,e,i,s,r),this}absarc(t,n,e,i,s,r){return this.absellipse(t,n,e,e,i,s,r),this}ellipse(t,n,e,i,s,r,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,n+d,e,i,s,r,a,l),this}absellipse(t,n,e,i,s,r,a,l){const c=new Ta(t,n,e,i,s,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yn extends on{constructor(t=1,n=32,e=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:e,thetaLength:i},n=Math.max(3,n);const s=[],r=[],a=[],l=[],c=new N,d=new Bt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=n;f++,u+=3){const h=e+f/n*i;c.x=t*Math.cos(h),c.y=t*Math.sin(h),r.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(r[u]/t+1)/2,d.y=(r[u+1]/t+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Y extends on{constructor(t=1,n=1,e=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],f=[],u=[],h=[];let m=0;const _=[],x=e/2;let p=0;M(),r===!1&&(t>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(h,2));function M(){const w=new N,P=new N;let R=0;const E=(n-t)/e;for(let I=0;I<=s;I++){const S=[],y=I/s,D=y*(n-t)+t;for(let k=0;k<=i;k++){const H=k/i,J=H*l+a,q=Math.sin(J),V=Math.cos(J);P.x=D*q,P.y=-y*e+x,P.z=D*V,f.push(P.x,P.y,P.z),w.set(q,E,V).normalize(),u.push(w.x,w.y,w.z),h.push(H,1-y),S.push(m++)}_.push(S)}for(let I=0;I<i;I++)for(let S=0;S<s;S++){const y=_[S][I],D=_[S+1][I],k=_[S+1][I+1],H=_[S][I+1];(t>0||S!==0)&&(d.push(y,D,H),R+=3),(n>0||S!==s-1)&&(d.push(D,k,H),R+=3)}c.addGroup(p,R,0),p+=R}function v(w){const P=m,R=new Bt,E=new N;let I=0;const S=w===!0?t:n,y=w===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,x*y,0),u.push(0,y,0),h.push(.5,.5),m++;const D=m;for(let k=0;k<=i;k++){const J=k/i*l+a,q=Math.cos(J),V=Math.sin(J);E.x=S*V,E.y=x*y,E.z=S*q,f.push(E.x,E.y,E.z),u.push(0,y,0),R.x=q*.5+.5,R.y=V*.5*y+.5,h.push(R.x,R.y),m++}for(let k=0;k<i;k++){const H=P+k,J=D+k;w===!0?d.push(J,J+1,H):d.push(J+1,J,H),I+=3}c.addGroup(p,I,w===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class He extends Y{constructor(t=1,n=1,e=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,n,e,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:e,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new He(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Aa extends on{constructor(t=[],n=[],e=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:e,detail:i};const s=[],r=[];a(i),c(e),d(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new N,w=new N,P=new N;for(let R=0;R<n.length;R+=3)h(n[R+0],v),h(n[R+1],w),h(n[R+2],P),l(v,w,P,M)}function l(M,v,w,P){const R=P+1,E=[];for(let I=0;I<=R;I++){E[I]=[];const S=M.clone().lerp(w,I/R),y=v.clone().lerp(w,I/R),D=R-I;for(let k=0;k<=D;k++)k===0&&I===R?E[I][k]=S:E[I][k]=S.clone().lerp(y,k/D)}for(let I=0;I<R;I++)for(let S=0;S<2*(R-I)-1;S++){const y=Math.floor(S/2);S%2===0?(u(E[I][y+1]),u(E[I+1][y]),u(E[I][y])):(u(E[I][y+1]),u(E[I+1][y+1]),u(E[I+1][y]))}}function c(M){const v=new N;for(let w=0;w<s.length;w+=3)v.x=s[w+0],v.y=s[w+1],v.z=s[w+2],v.normalize().multiplyScalar(M),s[w+0]=v.x,s[w+1]=v.y,s[w+2]=v.z}function d(){const M=new N;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];const w=x(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;r.push(w,1-P)}m(),f()}function f(){for(let M=0;M<r.length;M+=6){const v=r[M+0],w=r[M+2],P=r[M+4],R=Math.max(v,w,P),E=Math.min(v,w,P);R>.9&&E<.1&&(v<.2&&(r[M+0]+=1),w<.2&&(r[M+2]+=1),P<.2&&(r[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function h(M,v){const w=M*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function m(){const M=new N,v=new N,w=new N,P=new N,R=new Bt,E=new Bt,I=new Bt;for(let S=0,y=0;S<s.length;S+=9,y+=6){M.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),w.set(s[S+6],s[S+7],s[S+8]),R.set(r[y+0],r[y+1]),E.set(r[y+2],r[y+3]),I.set(r[y+4],r[y+5]),P.copy(M).add(v).add(w).divideScalar(3);const D=x(P);_(R,y+0,M,D),_(E,y+2,v,D),_(I,y+4,w,D)}}function _(M,v,w,P){P<0&&M.x===1&&(r[v]=M.x-1),w.x===0&&w.z===0&&(r[v]=P/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.vertices,t.indices,t.radius,t.details)}}class Ln extends Aa{constructor(t=1,n=0){const e=(1+Math.sqrt(5))/2,i=1/e,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-e,0,-i,e,0,i,-e,0,i,e,-i,-e,0,-i,e,0,i,-e,0,i,e,0,-e,0,-i,e,0,-i,-e,0,i,e,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Ln(t.radius,t.detail)}}class Mf extends nc{constructor(t){super(t),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let e=0,i=this.holes.length;e<i;e++)n[e]=this.holes[e].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const i=t.holes[n];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,e=this.holes.length;n<e;n++){const i=this.holes[n];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,e=t.holes.length;n<e;n++){const i=t.holes[n];this.holes.push(new nc().fromJSON(i))}return this}}const y2={triangulate:function(o,t,n=2){const e=t&&t.length,i=e?t[0]*n:o.length;let s=Sf(o,0,i,n,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,d,f,u,h;if(e&&(s=E2(o,t,s,n)),o.length>80*n){a=c=o[0],l=d=o[1];for(let m=n;m<i;m+=n)f=o[m],u=o[m+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>d&&(d=u);h=Math.max(c-a,d-l),h=h!==0?32767/h:0}return Lo(s,r,n,a,l,h,0),r}};function Sf(o,t,n,e,i){let s,r;if(i===F2(o,t,n,e)>0)for(s=t;s<n;s+=e)r=ic(s,o[s],o[s+1],r);else for(s=n-e;s>=t;s-=e)r=ic(s,o[s],o[s+1],r);return r&&Ds(r,r.next)&&(Uo(r),r=r.next),r}function Ri(o,t){if(!o)return o;t||(t=o);let n=o,e;do if(e=!1,!n.steiner&&(Ds(n,n.next)||Ue(n.prev,n,n.next)===0)){if(Uo(n),n=t=n.prev,n===n.next)break;e=!0}else n=n.next;while(e||n!==t);return t}function Lo(o,t,n,e,i,s,r){if(!o)return;!r&&s&&I2(o,e,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?S2(o,e,i,s):M2(o)){t.push(l.i/n|0),t.push(o.i/n|0),t.push(c.i/n|0),Uo(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=b2(Ri(o),t,n),Lo(o,t,n,e,i,s,2)):r===2&&T2(o,t,n,e,i,s):Lo(Ri(o),t,n,e,i,s,1);break}}}function M2(o){const t=o.prev,n=o,e=o.next;if(Ue(t,n,e)>=0)return!1;const i=t.x,s=n.x,r=e.x,a=t.y,l=n.y,c=e.y,d=i<s?i<r?i:r:s<r?s:r,f=a<l?a<c?a:c:l<c?l:c,u=i>s?i>r?i:r:s>r?s:r,h=a>l?a>c?a:c:l>c?l:c;let m=e.next;for(;m!==t;){if(m.x>=d&&m.x<=u&&m.y>=f&&m.y<=h&&qi(i,a,s,l,r,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function S2(o,t,n,e){const i=o.prev,s=o,r=o.next;if(Ue(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,d=i.y,f=s.y,u=r.y,h=a<l?a<c?a:c:l<c?l:c,m=d<f?d<u?d:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,x=d>f?d>u?d:u:f>u?f:u,p=fa(h,m,t,n,e),M=fa(_,x,t,n,e);let v=o.prevZ,w=o.nextZ;for(;v&&v.z>=p&&w&&w.z<=M;){if(v.x>=h&&v.x<=_&&v.y>=m&&v.y<=x&&v!==i&&v!==r&&qi(a,d,l,f,c,u,v.x,v.y)&&Ue(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=h&&w.x<=_&&w.y>=m&&w.y<=x&&w!==i&&w!==r&&qi(a,d,l,f,c,u,w.x,w.y)&&Ue(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=p;){if(v.x>=h&&v.x<=_&&v.y>=m&&v.y<=x&&v!==i&&v!==r&&qi(a,d,l,f,c,u,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=M;){if(w.x>=h&&w.x<=_&&w.y>=m&&w.y<=x&&w!==i&&w!==r&&qi(a,d,l,f,c,u,w.x,w.y)&&Ue(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function b2(o,t,n){let e=o;do{const i=e.prev,s=e.next.next;!Ds(i,s)&&bf(i,e,e.next,s)&&Do(i,s)&&Do(s,i)&&(t.push(i.i/n|0),t.push(e.i/n|0),t.push(s.i/n|0),Uo(e),Uo(e.next),e=o=s),e=e.next}while(e!==o);return Ri(e)}function T2(o,t,n,e,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&U2(r,a)){let l=Tf(r,a);r=Ri(r,r.next),l=Ri(l,l.next),Lo(r,t,n,e,i,s,0),Lo(l,t,n,e,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function E2(o,t,n,e){const i=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*e,l=s<r-1?t[s+1]*e:o.length,c=Sf(o,a,l,e,!1),c===c.next&&(c.steiner=!0),i.push(D2(c));for(i.sort(A2),s=0;s<i.length;s++)n=R2(i[s],n);return n}function A2(o,t){return o.x-t.x}function R2(o,t){const n=C2(o,t);if(!n)return t;const e=Tf(n,o);return Ri(e,e.next),Ri(n,n.next)}function C2(o,t){let n=t,e=-1/0,i;const s=o.x,r=o.y;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const u=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=s&&u>e&&(e=u,i=n.x<n.next.x?n:n.next,u===s))return i}n=n.next}while(n!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let d=1/0,f;n=i;do s>=n.x&&n.x>=l&&s!==n.x&&qi(r<c?s:e,r,l,c,r<c?e:s,r,n.x,n.y)&&(f=Math.abs(r-n.y)/(s-n.x),Do(n,o)&&(f<d||f===d&&(n.x>i.x||n.x===i.x&&P2(i,n)))&&(i=n,d=f)),n=n.next;while(n!==a);return i}function P2(o,t){return Ue(o.prev,o,t.prev)<0&&Ue(t.next,o,o.next)<0}function I2(o,t,n,e){let i=o;do i.z===0&&(i.z=fa(i.x,i.y,t,n,e)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,L2(i)}function L2(o){let t,n,e,i,s,r,a,l,c=1;do{for(n=o,o=null,s=null,r=0;n;){for(r++,e=n,a=0,t=0;t<c&&(a++,e=e.nextZ,!!e);t++);for(l=c;a>0||l>0&&e;)a!==0&&(l===0||!e||n.z<=e.z)?(i=n,n=n.nextZ,a--):(i=e,e=e.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;n=e}s.nextZ=null,c*=2}while(r>1);return o}function fa(o,t,n,e,i){return o=(o-n)*i|0,t=(t-e)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function D2(o){let t=o,n=o;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==o);return n}function qi(o,t,n,e,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(e-a)>=(n-r)*(t-a)&&(n-r)*(s-a)>=(i-r)*(e-a)}function U2(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!N2(o,t)&&(Do(o,t)&&Do(t,o)&&z2(o,t)&&(Ue(o.prev,o,t.prev)||Ue(o,t.prev,t))||Ds(o,t)&&Ue(o.prev,o,o.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(o,t,n){return(t.y-o.y)*(n.x-t.x)-(t.x-o.x)*(n.y-t.y)}function Ds(o,t){return o.x===t.x&&o.y===t.y}function bf(o,t,n,e){const i=us(Ue(o,t,n)),s=us(Ue(o,t,e)),r=us(Ue(n,e,o)),a=us(Ue(n,e,t));return!!(i!==s&&r!==a||i===0&&hs(o,n,t)||s===0&&hs(o,e,t)||r===0&&hs(n,o,e)||a===0&&hs(n,t,e))}function hs(o,t,n){return t.x<=Math.max(o.x,n.x)&&t.x>=Math.min(o.x,n.x)&&t.y<=Math.max(o.y,n.y)&&t.y>=Math.min(o.y,n.y)}function us(o){return o>0?1:o<0?-1:0}function N2(o,t){let n=o;do{if(n.i!==o.i&&n.next.i!==o.i&&n.i!==t.i&&n.next.i!==t.i&&bf(n,n.next,o,t))return!0;n=n.next}while(n!==o);return!1}function Do(o,t){return Ue(o.prev,o,o.next)<0?Ue(o,t,o.next)>=0&&Ue(o,o.prev,t)>=0:Ue(o,t,o.prev)<0||Ue(o,o.next,t)<0}function z2(o,t){let n=o,e=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&i<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(e=!e),n=n.next;while(n!==o);return e}function Tf(o,t){const n=new da(o.i,o.x,o.y),e=new da(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,n.next=i,i.prev=n,e.next=n,n.prev=e,s.next=e,e.prev=s,e}function ic(o,t,n,e){const i=new da(o,t,n);return e?(i.next=e.next,i.prev=e,e.next.prev=i,e.next=i):(i.prev=i,i.next=i),i}function Uo(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function da(o,t,n){this.i=o,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F2(o,t,n,e){let i=0;for(let s=t,r=n-e;s<n;s+=e)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class Ao{static area(t){const n=t.length;let e=0;for(let i=n-1,s=0;s<n;i=s++)e+=t[i].x*t[s].y-t[s].x*t[i].y;return e*.5}static isClockWise(t){return Ao.area(t)<0}static triangulateShape(t,n){const e=[],i=[],s=[];oc(t),sc(e,t);let r=t.length;n.forEach(oc);for(let l=0;l<n.length;l++)i.push(r),r+=n[l].length,sc(e,n[l]);const a=y2.triangulate(e,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function oc(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function sc(o,t){for(let n=0;n<t.length;n++)o.push(t[n].x),o.push(t[n].y)}class Ra extends on{constructor(t=new Mf([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const e=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let d=0;d<t.length;d++)c(t[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(e),this.setAttribute("position",new Pe(i,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2));function c(d){const f=i.length/3,u=d.extractPoints(n);let h=u.shape;const m=u.holes;Ao.isClockWise(h)===!1&&(h=h.reverse());for(let x=0,p=m.length;x<p;x++){const M=m[x];Ao.isClockWise(M)===!0&&(m[x]=M.reverse())}const _=Ao.triangulateShape(h,m);for(let x=0,p=m.length;x<p;x++){const M=m[x];h=h.concat(M)}for(let x=0,p=h.length;x<p;x++){const M=h[x];i.push(M.x,M.y,0),s.push(0,0,1),r.push(M.x,M.y)}for(let x=0,p=_.length;x<p;x++){const M=_[x],v=M[0]+f,w=M[1]+f,P=M[2]+f;e.push(v,w,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return O2(n,t)}static fromJSON(t,n){const e=[];for(let i=0,s=t.shapes.length;i<s;i++){const r=n[t.shapes[i]];e.push(r)}return new Ra(e,t.curveSegments)}}function O2(o,t){if(t.shapes=[],Array.isArray(o))for(let n=0,e=o.length;n<e;n++){const i=o[n];t.shapes.push(i.uuid)}else t.shapes.push(o.uuid);return t}class be extends on{constructor(t=1,n=32,e=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:e,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},n=Math.max(3,Math.floor(n)),e=Math.max(2,Math.floor(e));const l=Math.min(r+a,Math.PI);let c=0;const d=[],f=new N,u=new N,h=[],m=[],_=[],x=[];for(let p=0;p<=e;p++){const M=[],v=p/e;let w=0;p===0&&r===0?w=.5/n:p===e&&l===Math.PI&&(w=-.5/n);for(let P=0;P<=n;P++){const R=P/n;f.x=-t*Math.cos(i+R*s)*Math.sin(r+v*a),f.y=t*Math.cos(r+v*a),f.z=t*Math.sin(i+R*s)*Math.sin(r+v*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),x.push(R+w,1-v),M.push(c++)}d.push(M)}for(let p=0;p<e;p++)for(let M=0;M<n;M++){const v=d[p][M+1],w=d[p][M],P=d[p+1][M],R=d[p+1][M+1];(p!==0||r>0)&&h.push(v,w,R),(p!==e-1||l<Math.PI)&&h.push(w,P,R)}this.setIndex(h),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ge extends on{constructor(t=1,n=.4,e=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:e,tubularSegments:i,arc:s},e=Math.floor(e),i=Math.floor(i);const r=[],a=[],l=[],c=[],d=new N,f=new N,u=new N;for(let h=0;h<=e;h++)for(let m=0;m<=i;m++){const _=m/i*s,x=h/e*Math.PI*2;f.x=(t+n*Math.cos(x))*Math.cos(_),f.y=(t+n*Math.cos(x))*Math.sin(_),f.z=n*Math.sin(x),a.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),u.subVectors(f,d).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(h/e)}for(let h=1;h<=e;h++)for(let m=1;m<=i;m++){const _=(i+1)*h+m-1,x=(i+1)*(h-1)+m-1,p=(i+1)*(h-1)+m,M=(i+1)*h+m;r.push(_,x,M),r.push(x,p,M)}this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class L extends co{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ca extends Ke{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class k2 extends Ca{constructor(t,n,e){super(t,e),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const vr=new Ie,rc=new N,ac=new N;class Ef{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,e=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),n.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(ac),n.updateMatrixWorld(),vr.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vr),e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lc=new Ie,_o=new N,yr=new N;class B2 extends Ef{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,n=0){const e=this.camera,i=this.matrix,s=t.distance||e.far;s!==e.far&&(e.far=s,e.updateProjectionMatrix()),_o.setFromMatrixPosition(t.matrixWorld),e.position.copy(_o),yr.copy(e.position),yr.add(this._cubeDirections[n]),e.up.copy(this._cubeUps[n]),e.lookAt(yr),e.updateMatrixWorld(),i.makeTranslation(-_o.x,-_o.y,-_o.z),lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc)}}class we extends Ca{constructor(t,n,e=0,i=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=e,this.decay=i,this.shadow=new B2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class G2 extends Ef{constructor(){super(new ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H2 extends Ca{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new G2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class V2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=cc();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function cc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);const Ro=new Set,W2=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);function X2(){window.addEventListener("keydown",o=>{Ro.add(o.code),W2.has(o.code)&&o.preventDefault()}),window.addEventListener("keyup",o=>{Ro.delete(o.code)}),window.addEventListener("blur",()=>Ro.clear())}function fc(o,t){let n=0;for(const e of o)Ro.has(e)&&(n-=1);for(const e of t)Ro.has(e)&&(n+=1);return Math.max(-1,Math.min(1,n))}const zn=.28,dc=1.75,hc=.24,ps=.015;class Y2{constructor(){ce(this,"boxes",[])}add(t){return this.boxes.push(t),t}remove(t){const n=this.boxes.indexOf(t);n>=0&&this.boxes.splice(n,1)}move(t,n,e,i,s){const r=this.pushOut(t,n,s);t=r.x,n=r.z;const a=t+e;this.blocked(a,n,s)||(t=a);const l=n+i;return this.blocked(t,l,s)||(n=l),{x:t,z:n}}blocked(t,n,e){return this.hits(t,n,e,zn)}hits(t,n,e,i){const s=e+dc;for(const r of this.boxes)if(!(r.maxY<=e+.04)&&!(r.minY>=s)&&!(r.maxY<=e+hc)&&uc(t,n,i,r))return!0;return!1}pushOut(t,n,e){const i=e+dc;for(let s=0;s<4;s++){let r=!1;for(const a of this.boxes){if(a.maxY<=e+.04||a.minY>=i||a.maxY<=e+hc||!uc(t,n,zn,a))continue;r=!0;const l=t+zn-a.minX,c=a.maxX-(t-zn),d=n+zn-a.minZ,f=a.maxZ-(n-zn),u=Math.min(l,c,d,f);u>.6||(u===l?t=a.minX-zn-ps:u===c?t=a.maxX+zn+ps:u===d?n=a.minZ-zn-ps:n=a.maxZ+zn+ps)}if(!r)break}return{x:t,z:n}}}function uc(o,t,n,e){const i=mc(o,e.minX,e.maxX),s=mc(t,e.minZ,e.maxZ),r=o-i,a=t-s;return r*r+a*a<n*n}function pc(o,t,n,e=0){return o>=n.minX-e&&o<=n.maxX+e&&t>=n.minZ-e&&t<=n.maxZ+e}function mc(o,t,n){return Math.max(t,Math.min(n,o))}const ms={x:0,z:0};class Z2{constructor(){ce(this,"items",[]);ce(this,"current",null)}add(t){return this.items.push(t),t}update(t,n){const e=t.lookFlat();ms.x=e.x,ms.z=e.z;let i=null,s=1/0;for(const r of this.items){const a=r.x-t.x,l=r.z-t.z,c=Math.hypot(a,l);c>r.radius||c>=s||(c<.001?1:(a*ms.x+l*ms.z)/c)<.2||this.occluded(t.x,t.z,r.x,r.z,n)||(i=r,s=c)}this.current=i}prompt(){if(!this.current)return"";const t=this.current.prompt;return typeof t=="function"?t():t}use(){var t;(t=this.current)==null||t.onInteract()}occluded(t,n,e,i,s){const r=[[t*.65+e*.35,n*.65+i*.35],[t*.35+e*.65,n*.35+i*.65]];for(const a of s.boxes)if(!(a.maxY<1.1)&&!pc(e,i,a,.05)){for(const[l,c]of r)if(pc(l,c,a))return!0}return!1}}class q2{constructor(){ce(this,"text","");ce(this,"timer",0)}show(t,n=3.6){this.text=t,this.timer=n}update(t){this.timer<=0||(this.timer-=t,this.timer<=0&&(this.text=""))}}const $2=0,K2=.15;function Af(o,t){return t>=-3.5&&t<=3.5&&o>=-55&&o<=55||o>=13.5&&o<=18.5&&t>=3.5&&t<=40||o>=-16.5&&o<=-11.5&&t>=-40&&t<=-3.5}function gc(o,t){return Af(o,t)?$2:K2}function J2(o,t){return o>=-4.5&&o<=4.5&&t>=12.8&&t<=22?"Sun Heights — Entrance Lobby":o>=21.8&&o<=33&&t>=9&&t<=22?"FamilyKonbini — Store":o>=1.5&&o<=10.5&&t>=7.5&&t<=18?"Menya Tokyo — Ramen Bar":o>=-3&&o<=10.5&&t>=24&&t<=36?"Kissaten Mame — Cafe":o>=-8.5&&o<=9.5&&t>=-36.5&&t<=-7.5?"Sakura Pocket Park (桜公園)":o>=4.5&&o<=13.5&&t>=16&&t<=24||o>=-5&&o<=13.5&&t>=21&&t<=24?"Rojiura — Residential Alley":o>=10.5&&o<=21.5&&t>=3.5&&t<=42?"Kita-gai — Shopping Street":o>=-19.5&&o<=-8.5&&t>=-42&&t<=-3.5?"Minami-dori — Residential St":Math.abs(t)<=5?o>=11&&o<=21?"Chuo-dori — North Crosswalk":o>=-19&&o<=-9?"Chuo-dori — South Crosswalk":"Chuo-dori — Central Avenue":"Tokyo — Residential District"}const Rf=[{id:"b-sunheights",name:"Sun Heights Mansion",x:0,z:17.5,w:9,d:10,floors:4,wall:"#262d38",trim:"#3a4454",balcony:"#404c5e",bay:3,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"lobby",enterable:!0,doorFace:"s",doorAlong:0,seed:101},{id:"b-ramen",name:"Menya Tokyo (Ramen)",x:6,z:12.5,w:7,d:9,floors:3,wall:"#2b2622",trim:"#423a32",balcony:"#383028",bay:2,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2],ground:"ramen",enterable:!0,doorFace:"s",doorAlong:.2,sign:{text:"らーめん 麺処",sub:"MENYA TOKYO",bg:"#8a1f18",fg:"#ffebc4"},awning:"#8a1f18",seed:202},{id:"b-konbini",name:"FamilyKonbini Store",x:27,z:15.5,w:11,d:13,floors:3,wall:"#282d34",trim:"#3c4550",balcony:"#333b47",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2],ground:"konbini",enterable:!0,doorFace:"w",doorAlong:0,sign:{text:"CONVENIENCE STORE",sub:"24H コンビニエンス",bg:"#0d6b42",fg:"#ffffff"},awning:"#0d6b42",seed:303},{id:"b-cafe",name:"Cafe Mame",x:3.5,z:30,w:11,d:10,floors:3,wall:"#2a2723",trim:"#453c33",balcony:"#3e352b",bay:3,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"cafe",enterable:!0,doorFace:"e",doorAlong:0,sign:{text:"喫茶 TOKYO CAFE",sub:"ROASTERY & BEANS",bg:"#4a2f1c",fg:"#f4ebd8"},awning:"#4a2f1c",seed:404},{id:"b-ne-apartments",name:"Mori Building",x:27,z:32,w:11,d:14,floors:5,wall:"#232a35",trim:"#384355",balcony:"#2e3848",bay:3,front:"w",open:["w"],balconyFaces:["w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"w",doorAlong:0,sign:{text:"森クリニック / 薬局",sub:"PHARMACY & CLINIC",bg:"#1c4a5c",fg:"#e8f4f8"},seed:505},{id:"b-nw-mansion",name:"Chuo Grand Residence",x:-24,z:15.5,w:22,d:13,floors:5,wall:"#222830",trim:"#343e4c",balcony:"#2b3340",bay:6,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"s",doorAlong:-.3,sign:{text:"白金クリーニング",sub:"DRY CLEANERS & LAUNDRY",bg:"#25447a",fg:"#eef4ff"},awning:"#25447a",seed:606},{id:"b-fe-north",name:"Higashi Heights",x:43,z:15.5,w:15,d:13,floors:4,wall:"#26292e",trim:"#3a3f47",balcony:"#31363e",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,sign:{text:"書店 本屋",sub:"BOOKSTORE & CAFE",bg:"#6b301e",fg:"#fbece2"},seed:707},{id:"b-sw-commercial",name:"Minami Square",x:-27,z:-15.5,w:15,d:13,floors:4,wall:"#2c2925",trim:"#443f38",balcony:"#37322c",bay:4,front:"n",open:["n","e"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,sign:{text:"和食 酒処 居酒屋",sub:"TRADITIONAL IZAKAYA",bg:"#8a331a",fg:"#ffeeda"},awning:"#8a331a",seed:808},{id:"b-sw-houses",name:"Minami Residences",x:-27,z:-32,w:15,d:14,floors:3,wall:"#282b2d",trim:"#3c4145",balcony:"#32363a",bay:4,front:"e",open:["e"],balconyFaces:["e"],balconies:[1,2],ground:"home",enterable:!1,doorFace:"e",doorAlong:0,seed:909},{id:"b-se-mansion",name:"Parkside Court",x:23,z:-15.5,w:22,d:13,floors:5,wall:"#212630",trim:"#323a48",balcony:"#29303c",bay:6,front:"n",open:["n"],balconyFaces:["n","w"],balconies:[1,2,3,4],ground:"home",enterable:!1,doorFace:"n",doorAlong:.2,sign:{text:"パークサイド歯科",sub:"DENTAL CLINIC",bg:"#1f5263",fg:"#e8f7fa"},seed:1010},{id:"b-fe-south",name:"Taito Mansion",x:43,z:-15.5,w:15,d:13,floors:4,wall:"#27292c",trim:"#3d4045",balcony:"#33363a",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1111},{id:"b-fw-north",name:"Nishi Heights",x:-44,z:15.5,w:14,d:13,floors:4,wall:"#242a32",trim:"#363f4b",balcony:"#2d3540",bay:4,front:"s",open:["s"],balconyFaces:["s"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"s",doorAlong:0,seed:1212},{id:"b-fw-south",name:"Nishi Court",x:-44,z:-15.5,w:14,d:13,floors:4,wall:"#2a2725",trim:"#403b38",balcony:"#35312e",bay:4,front:"n",open:["n"],balconyFaces:["n"],balconies:[1,2,3],ground:"home",enterable:!1,doorFace:"n",doorAlong:0,seed:1313}],xc=3.65,j2=18,Q2=24,_c=.0022;class t1{constructor(t,n,e){ce(this,"x");ce(this,"z");ce(this,"yaw");ce(this,"pitch",0);ce(this,"feetY");ce(this,"eye",1.62);ce(this,"seated",!1);ce(this,"vx",0);ce(this,"vz",0);ce(this,"forward",new N);ce(this,"right",new N);ce(this,"euler",new Dn(0,0,0,"YXZ"));ce(this,"quat",new lo);this.x=t,this.z=n,this.yaw=e,this.feetY=gc(t,n)}applyMouse(t,n){this.yaw-=t*_c,this.pitch-=n*_c,this.pitch=Math.max(-1.25,Math.min(1.25,this.pitch))}update(t,n,e){this.forward.set(0,0,-1),this.euler.set(0,this.yaw,0,"YXZ"),this.forward.applyEuler(this.euler),this.forward.y=0,this.forward.lengthSq()>1e-6&&this.forward.normalize(),this.right.set(-this.forward.z,0,this.forward.x);const i=n&&!this.seated?fc(["KeyS","ArrowDown"],["KeyW","ArrowUp"]):0,s=n&&!this.seated?fc(["KeyA","ArrowLeft"],["KeyD","ArrowRight"]):0;let r=this.forward.x*i+this.right.x*s,a=this.forward.z*i+this.right.z*s;const l=Math.hypot(r,a);l>1&&(r/=l,a/=l);const c=r*xc,d=a*xc,f=Math.hypot(c,d),u=Math.hypot(this.vx,this.vz),m=(f>u?j2:Q2)*t,_=c-this.vx,x=d-this.vz,p=Math.hypot(_,x);p<=m?(this.vx=c,this.vz=d):(this.vx+=_/p*m,this.vz+=x/p*m),(!n||this.seated)&&(this.vx=0,this.vz=0);const M=this.vx*t,v=this.vz*t;if(Math.abs(M)>1e-5||Math.abs(v)>1e-5){const E=e.move(this.x,this.z,M,v,this.feetY);this.x=E.x,this.z=E.z}const w=gc(this.x,this.z),P=1-Math.exp(-14*t);this.feetY+=(w-this.feetY)*P;const R=this.seated?1.05:1.62;this.eye+=(R-this.eye)*(1-Math.exp(-8*t))}moving(){return Math.hypot(this.vx,this.vz)>.15}applyCamera(t){t.position.set(this.x,this.feetY+this.eye,this.z),t.rotation.order="YXZ",t.rotation.y=this.yaw,t.rotation.x=this.pitch,t.rotation.z=0}look(t){return this.euler.set(0,this.yaw,0,"YXZ"),this.quat.setFromEuler(this.euler),t.set(0,0,-1).applyQuaternion(this.quat)}lookFlat(){const t=this.look(this.forward);return{x:t.x,z:t.z}}}new L({vertexColors:!0,roughness:.86,metalness:.04});new qt({vertexColors:!0,toneMapped:!1});new L({color:1054752,roughness:.08,metalness:.45,transparent:!0,opacity:.55,depthWrite:!1});const Fe=new L({color:12044756,roughness:.06,metalness:.05,transparent:!0,opacity:.16,depthWrite:!1,side:nn}),e1=new L({color:16777215,roughness:.42,metalness:.62}),Le=new L({color:2764339,roughness:.4,metalness:.72}),kn=new qt({color:16769712,toneMapped:!1});function n1(){const o=document.createElement("canvas");o.width=512,o.height=512;const t=o.getContext("2d"),n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");t.fillStyle="#161920",t.fillRect(0,0,512,512),e.fillStyle="#b8b8b8",e.fillRect(0,0,512,512);const i=t.getImageData(0,0,512,512),s=e.getImageData(0,0,512,512),r=i.data,a=s.data;for(let f=0;f<r.length;f+=4){const u=(Math.random()-.5)*18;r[f]=Math.max(10,Math.min(45,r[f]+u)),r[f+1]=Math.max(12,Math.min(48,r[f+1]+u)),r[f+2]=Math.max(16,Math.min(54,r[f+2]+u));const h=(Math.random()-.5)*25;a[f]=Math.max(120,Math.min(230,a[f]+h)),a[f+1]=a[f],a[f+2]=a[f]}t.putImageData(i,0,0),e.putImageData(s,0,0),t.fillStyle="rgba(8, 10, 14, 0.65)",e.fillStyle="rgb(24, 24, 24)";const l=[{x:140,y:160,rx:90,ry:45,rot:.2},{x:380,y:340,rx:110,ry:55,rot:-.3},{x:260,y:440,rx:70,ry:35,rot:.1},{x:100,y:420,rx:60,ry:30,rot:-.2},{x:420,y:120,rx:80,ry:40,rot:.4}];for(const f of l)t.beginPath(),t.ellipse(f.x,f.y,f.rx,f.ry,f.rot,0,Math.PI*2),t.fill(),e.beginPath(),e.ellipse(f.x,f.y,f.rx,f.ry,f.rot,0,Math.PI*2),e.fill();const c=new ie(o);c.wrapS=Ce,c.wrapT=Ce,c.repeat.set(12,1.5),c.colorSpace=he;const d=new ie(n);return d.wrapS=Ce,d.wrapT=Ce,d.repeat.set(12,1.5),{map:c,roughnessMap:d}}const wc=n1(),i1=new L({map:wc.map,roughnessMap:wc.roughnessMap,roughness:.65,metalness:.22});function o1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#2b3038",t.fillRect(0,0,256,256);const n=64;t.strokeStyle="#1b1e24",t.lineWidth=3;for(let i=0;i<256;i+=n)for(let s=0;s<256;s+=n){const r=Math.floor((Math.random()-.5)*12);t.fillStyle=`rgb(${43+r}, ${48+r}, ${56+r})`,t.fillRect(s+1.5,i+1.5,n-3,n-3),t.strokeRect(s,i,n,n)}const e=new ie(o);return e.wrapS=Ce,e.wrapT=Ce,e.repeat.set(8,2),e.colorSpace=he,e}const s1=o1(),r1=new L({map:s1,color:13159892,roughness:.88,metalness:.04}),vc=new L({color:2368029,roughness:.92,metalness:.03});function a1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#2c271f",t.fillRect(0,0,256,256);const n=t.getImageData(0,0,256,256),e=n.data;for(let s=0;s<e.length;s+=4){const r=(Math.random()-.5)*22;e[s]=Math.max(25,Math.min(65,e[s]+r)),e[s+1]=Math.max(22,Math.min(58,e[s+1]+r*.9)),e[s+2]=Math.max(16,Math.min(48,e[s+2]+r*.75))}t.putImageData(n,0,0);for(let s=0;s<90;s++){const r=Math.random()*256,a=Math.random()*256,l=.8+Math.random()*1.6;t.fillStyle=Math.random()>.4?"rgba(78, 70, 58, 0.6)":"rgba(28, 24, 18, 0.7)",t.beginPath(),t.arc(r,a,l,0,Math.PI*2),t.fill()}const i=new ie(o);return i.wrapS=Ce,i.wrapT=Ce,i.repeat.set(10,10),i.colorSpace=he,i}function l1(){const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#1c1b18",t.fillRect(0,0,256,256);const n=8,e=256/n,i=64;t.strokeStyle="#141310",t.lineWidth=2;for(let r=0;r<n;r++){const a=r*e,l=r%2*(i/2);for(let c=-i;c<256+i;c+=i){const d=c+l,f=Math.floor((Math.random()-.5)*16);t.fillStyle=`rgb(${54+f}, ${50+f}, ${44+f})`,t.fillRect(d+1,a+1,i-2,e-2),t.strokeRect(d,a,i,e)}}const s=new ie(o);return s.wrapS=Ce,s.wrapT=Ce,s.repeat.set(4,4),s.colorSpace=he,s}const c1=a1(),f1=l1(),d1=new L({map:c1,color:12893359,roughness:.94,metalness:.02}),h1=new L({map:f1,color:13485497,roughness:.88,metalness:.04}),u1=new L({color:1914401,roughness:.92,metalness:.01}),ha=new L({color:1453850,roughness:.95,metalness:0}),p1=new L({color:1255191,roughness:.95,metalness:0}),m1=new L({color:15232662,roughness:.72,metalness:0}),yc=new L({color:16118766,roughness:.72,metalness:0}),g1=new L({color:9069252,roughness:.72,metalness:0}),ji=new L({color:1942932,roughness:.35,metalness:.35}),Pa=new L({color:15054884,roughness:.32,metalness:.25}),Mo=new L({color:14038054,roughness:.35,metalness:.25}),x1=new L({color:1842722,roughness:.95,metalness:.04}),_1=new L({color:14212841,roughness:.16,metalness:.88}),Mr=new L({color:5520422,roughness:.88,metalness:.02}),w1=new L({color:10390636,roughness:.96,metalness:.01}),v1=new L({color:3027770,roughness:.3,metalness:.85}),Co=new L({color:14475496,roughness:.42,metalness:.02}),so=new L({color:13214539,roughness:.65,metalness:.05,emissive:4010002,emissiveIntensity:.2}),Jn=new L({color:4009245,roughness:.9,metalness:.02}),No=new L({color:3033648,roughness:.85,metalness:0}),Ia=new L({color:14257826,roughness:.8,metalness:0});new L({color:14235689,emissive:12395541,emissiveIntensity:.85,roughness:.45});const y1=new L({color:15263455,roughness:.22,metalness:.12}),Ct=new L({color:8555158,roughness:.28,metalness:.78}),Mc=new L({color:3557470,roughness:.2,metalness:.85}),Sc=new L({color:1318440,roughness:.05,metalness:.9,transparent:!0,opacity:.7}),M1=new L({color:16079390,roughness:.35,metalness:.1}),S1=new L({color:15660282,roughness:.05,metalness:.95}),b1=new qt({color:16770736,transparent:!0,opacity:.07,side:nn,depthWrite:!1,blending:br}),bc=new qt({color:14540253,transparent:!0,opacity:.25,depthWrite:!1}),_t=new Map;function T1(o,t,n,e,i=512,s=160){const r=`${o}|${t}|${n}|${e??""}|${i}|${s}`,a=_t.get(r);if(a)return a;const l=document.createElement("canvas");l.width=i,l.height=s;const c=l.getContext("2d");c.fillStyle=t,c.fillRect(0,0,i,s),c.fillStyle=n,c.textAlign="center",c.textBaseline="middle";const d='"Yu Gothic UI", "Yu Gothic", Meiryo, "MS PGothic", sans-serif';e?(c.font=`700 ${Math.floor(s*.36)}px ${d}`,c.fillText(o,i/2,s*.38),c.font=`500 ${Math.floor(s*.2)}px ${d}`,c.fillText(e,i/2,s*.72)):(c.font=`700 ${Math.floor(s*.42)}px ${d}`,c.fillText(o,i/2,s/2));const f=new ie(l);return f.colorSpace=he,f.anisotropy=4,_t.set(r,f),f}function zo(o,t,n,e,i=512,s=160){const r=T1(o,t,n,e,i,s);return new qt({map:r,toneMapped:!1})}function E1(o){const t=`vend-${o}`,n=_t.get(t);if(n)return n;const e=[{bg:"#0e3d3a",head:"#f2a65a",a:"#d84a3a",b:"#2f6fed",c:"#f2d15a",label:"BOSS COFFEE"},{bg:"#3a1420",head:"#ff5a6a",a:"#7ad0c8",b:"#f2e27a",c:"#ffffff",label:"POCARI SWEAT"},{bg:"#14243f",head:"#7eb6ff",a:"#ff7a45",b:"#6d8",c:"#ffe08a",label:"GREEN TEA"}],i=e[o%e.length],s=document.createElement("canvas");s.width=256,s.height=512;const r=s.getContext("2d");r.fillStyle=i.bg,r.fillRect(0,0,256,512),r.fillStyle=i.head,r.fillRect(16,18,224,64),r.fillStyle="#102028",r.font='700 32px "Yu Gothic UI", Meiryo, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i.label,128,50),[i.a,i.b,i.c].forEach((c,d)=>{const f=110+d*96;r.fillStyle="#071016",r.fillRect(28,f,200,78),r.fillStyle=c,r.fillRect(40,f+12,36,54),r.fillRect(86,f+12,36,54),r.fillRect(132,f+12,36,54),r.fillRect(178,f+12,36,54)}),r.fillStyle="#05070a",r.fillRect(48,430,160,48),r.strokeStyle="rgba(255,255,255,0.35)",r.strokeRect(48,430,160,48);const l=new ie(s);return l.colorSpace=he,_t.set(t,l),l}function A1(){const o="emergency-exit",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#0a7844",e.fillRect(0,0,256,128),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(8,8,240,112),e.fillStyle="#ffffff",e.font='bold 36px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("非常口 EXIT",128,74);const i=new ie(n);return i.colorSpace=he,_t.set(o,i),i}function R1(){const o="manhole-cover",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22262c",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill(),e.strokeStyle="#3d444e",e.lineWidth=6,e.stroke(),e.strokeStyle="#485260",e.lineWidth=3,e.beginPath(),e.arc(128,128,96,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(128,128,54,0,Math.PI*2),e.stroke();for(let s=0;s<Math.PI*2;s+=Math.PI/4)e.save(),e.translate(128,128),e.rotate(s),e.fillStyle="#3a424e",e.beginPath(),e.ellipse(0,75,12,18,0,0,Math.PI*2),e.fill(),e.restore();e.fillStyle="#505a68",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("下水",128,128);const i=new ie(n);return i.colorSpace=he,_t.set(o,i),i}function C1(){const o="konbini-counter-front",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#f8f9fa",e.fillRect(0,0,512,256),e.fillStyle="#0d7a46",e.fillRect(0,48,512,28),e.fillStyle="#ffffff",e.fillRect(0,76,512,8),e.fillStyle="#0080cc",e.fillRect(0,84,512,16),e.strokeStyle="#e2e6ea",e.lineWidth=2;for(let s=128;s<512;s+=128)e.beginPath(),e.moveTo(s,100),e.lineTo(s,230),e.stroke();e.fillStyle="#3a3f47",e.fillRect(0,230,512,26);const i=new ie(n);return i.colorSpace=he,_t.set(o,i),i}function P1(){const o="konbini-wall-stripes",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#f4f6f9",e.fillRect(0,0,512,512),e.strokeStyle="#e1e5eb",e.lineWidth=2,e.strokeRect(0,0,512,512),e.fillStyle="#0d7a46",e.fillRect(0,18,512,36),e.fillStyle="#ffffff",e.fillRect(0,54,512,8),e.fillStyle="#0080cc",e.fillRect(0,62,512,22);const i=new ie(n);return i.wrapS=Ce,i.wrapT=Ce,i.repeat.set(4,1),i.colorSpace=he,_t.set(o,i),i}function I1(){const o="konbini-cooler-doors",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#0a1016",e.fillRect(0,0,1024,512);const i=256,s=[[{color:"#2b7835",label:"お〜いお茶"},{color:"#388a44",label:"生茶"},{color:"#1f5e28",label:"伊右衛門"},{color:"#665522",label:"烏龍茶"}],[{color:"#0088dd",label:"POCARI"},{color:"#00b4d8",label:"AQUARIUS"},{color:"#e8f4ff",label:"いろはす"},{color:"#0066aa",label:"DAKARA"}],[{color:"#d4af37",label:"BOSS GOLD"},{color:"#1c1c1c",label:"BLACK COFFEE"},{color:"#8b0000",label:"GEORGIA"},{color:"#f5deb3",label:"MILK TEA"}],[{color:"#cc0000",label:"COCA-COLA"},{color:"#ffd700",label:"C.C.LEMON"},{color:"#00aa55",label:"MELON SODA"},{color:"#ffffff",label:"CALPIS"}]];for(let a=0;a<4;a++){const l=a*i,c=s[a];for(let d=0;d<5;d++){const f=30+d*95;e.fillStyle="#e8f4fa",e.fillRect(l+12,f+68,i-24,6),e.fillStyle="#ff4444",e.fillRect(l+12,f+74,i-24,12),e.fillStyle="#ffffff",e.font="bold 9px sans-serif",e.textAlign="center",e.fillText("¥140 ~ ¥160",l+i/2,f+83);const u=5;for(let h=0;h<u;h++){const m=l+24+h*44,_=c[h%c.length];e.fillStyle="rgba(255, 255, 255, 0.15)",e.fillRect(m-2,f+8,32,58),e.fillStyle=_.color,e.fillRect(m,f+10,28,56),e.fillStyle="#ffffff",e.fillRect(m+6,f+4,16,6),e.fillStyle="#ffffff",e.fillRect(m+2,f+26,24,22),e.fillStyle="#111111",e.font="bold 8px sans-serif",e.fillText(_.label.substring(0,4),m+14,f+38)}}e.strokeStyle="#8a929c",e.lineWidth=8,e.strokeRect(l+4,8,i-8,496),e.fillStyle="#cfd4dc",e.fillRect(l+i-22,180,10,150),e.fillStyle="#222222",e.fillRect(l+i-20,182,6,146)}const r=new ie(n);return r.colorSpace=he,_t.set(o,r),r}function L1(){const o="hot-snacks-display",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#d92c18",e.fillRect(0,0,256,128),e.fillStyle="#ff7700",e.fillRect(4,4,248,42),e.fillStyle="#ffffff",e.font='bold 22px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("HOT SNACKS",128,30),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.fillText("ファミチキ ¥220 / 肉まん ¥160",128,76),e.font='12px "Yu Gothic UI", sans-serif',e.fillText("できたて あつあつ！揚げたて",128,104);const i=new ie(n);return i.colorSpace=he,_t.set(o,i),i}function D1(){const o="apt-lobby-wall",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#eee9e0",e.fillRect(0,0,512,512);const i=64;for(let r=0;r<512;r+=i){const a=r/i%2===0?0:128;for(let l=-128;l<640;l+=256){const c=Math.floor((Math.sin(l*12.3+r*4.5)+1)*6),d=238+c,f=233+c,u=224+c;e.fillStyle=`rgb(${d},${f},${u})`,e.fillRect(l+a+2,r+2,252,i-4);for(let h=0;h<12;h++)e.fillStyle="rgba(160, 150, 135, 0.15)",e.fillRect(l+a+Math.random()*240,r+Math.random()*(i-6),2,2)}e.fillStyle="#cfc6b8",e.fillRect(0,r,512,2)}const s=new ie(n);return s.wrapS=Ce,s.wrapT=Ce,s.repeat.set(3,2),_t.set(o,s),s}function U1(){const o="apt-lobby-floor",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ded7cc",e.fillRect(0,0,512,512);for(let s=0;s<2;s++)for(let r=0;r<2;r++){const a=s*256,l=r*256;e.fillStyle=(s+r)%2===0?"#e4ded4":"#dfd9cf",e.fillRect(a+2,l+2,252,252),e.strokeStyle="rgba(255, 255, 255, 0.45)",e.lineWidth=3,e.beginPath(),e.moveTo(a+20,l+220),e.bezierCurveTo(a+90,l+160,a+140,l+200,a+230,l+40),e.stroke(),e.strokeStyle="rgba(160, 145, 130, 0.22)",e.lineWidth=2,e.beginPath(),e.moveTo(a+40,l+240),e.bezierCurveTo(a+120,l+170,a+170,l+120,a+240,l+80),e.stroke()}e.strokeStyle="#b8ad9e",e.lineWidth=3,e.strokeRect(0,0,512,512),e.beginPath(),e.moveTo(256,0),e.lineTo(256,512),e.moveTo(0,256),e.lineTo(512,256),e.stroke();const i=new ie(n);return i.wrapS=Ce,i.wrapT=Ce,i.repeat.set(4,4),_t.set(o,i),i}function N1(){const o="wood-slats",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#22150c",e.fillRect(0,0,256,256);const i=24,r=i+8;for(let l=0;l<256;l+=r){e.fillStyle="#b8834a",e.fillRect(l,0,i,256),e.strokeStyle="rgba(120, 70, 30, 0.25)",e.lineWidth=1.5;for(let c=0;c<3;c++){const d=l+4+c*7;e.beginPath(),e.moveTo(d,0),e.bezierCurveTo(d+2,80,d-2,160,d+1,256),e.stroke()}e.fillStyle="rgba(255, 230, 190, 0.35)",e.fillRect(l,0,2,256),e.fillStyle="rgba(40, 20, 10, 0.45)",e.fillRect(l+i-2,0,2,256)}const a=new ie(n);return a.wrapS=Ce,a.wrapT=Ce,a.repeat.set(3,1),_t.set(o,a),a}function z1(){const o="apt-mailboxes",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#8f96a0",e.fillRect(0,0,1024,512);for(let u=0;u<512;u+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,u,1024,2);e.fillStyle="#222830",e.fillRect(16,12,992,44),e.fillStyle="#d4af37",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("SUN HEIGHTS  |  集合郵便受箱 (MAIL BOXES)",36,41),e.textAlign="right",e.font="15px sans-serif",e.fillStyle="#a0aec0",e.fillText("ROOMS 101 - 406",988,41);const i=6,s=4,r=20,a=68,l=Math.floor(984/i),c=Math.floor(432/s),d=[["401","402","403","404","405","406"],["301","302","303","304","305","306"],["201","202","203","204","205","206"],["101","102","103","104","105","106"]];for(let u=0;u<s;u++)for(let h=0;h<i;h++){const m=r+h*l,_=a+u*c;e.fillStyle="#a8b0ba",e.fillRect(m+3,_+3,l-6,c-6),e.strokeStyle="#4e5560",e.lineWidth=2,e.strokeRect(m+3,_+3,l-6,c-6),e.fillStyle="#68707a",e.fillRect(m+12,_+12,l-24,18),e.fillStyle="#242a32",e.fillRect(m+16,_+27,l-32,3);const x=d[u][h];e.fillStyle="#11161d",e.fillRect(m+14,_+40,56,26),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(m+14,_+40,56,26),e.fillStyle="#ffffff",e.font='bold 16px "Yu Gothic UI", monospace',e.textAlign="center",e.fillText(x,m+42,_+59);const p=m+l-34,M=_+53;e.fillStyle="#1a1f26",e.beginPath(),e.arc(p,M,15,0,Math.PI*2),e.fill(),e.strokeStyle="#c5ccd6",e.lineWidth=2,e.stroke(),e.fillStyle="#ffffff";for(let v=0;v<8;v++){const w=v*Math.PI/4;e.fillRect(p+Math.cos(w)*11-1,M+Math.sin(w)*11-1,2,2)}e.fillStyle="#e8ecf0",e.fillRect(m+14,_+72,l-28,14),e.strokeStyle="#7c8694",e.lineWidth=1,e.strokeRect(m+14,_+72,l-28,14),e.fillStyle="#44505f",e.font="10px sans-serif",e.textAlign="left",e.fillText(x==="304"?"RELZZY (304)":"RESIDENT",m+20,_+83)}const f=new ie(n);return _t.set(o,f),f}function F1(){const o="apt-delivery-lockers",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#262d36",e.fillRect(0,0,512,512),e.fillStyle="#151a22",e.fillRect(10,10,492,42),e.fillStyle="#38e59e",e.font='bold 18px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText("宅配ロッカー TAKUHAIBOX",26,37),e.fillStyle="#a0aec0",e.font="12px sans-serif",e.textAlign="right",e.fillText("24H PARCEL SYSTEM",486,37),e.fillStyle="#1a202c",e.fillRect(160,68,192,210),e.strokeStyle="#4a5568",e.lineWidth=2,e.strokeRect(160,68,192,210),e.fillStyle="#0f2942",e.fillRect(172,80,168,90),e.fillStyle="#38bdf8",e.font='bold 13px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("荷物のお受け取り",256,106),e.fillStyle="#e2e8f0",e.font="11px sans-serif",e.fillText("部屋番号を入力してください",256,128),e.fillStyle="#22c55e",e.fillText("[304: 1個のお届け物]",256,150);for(let r=0;r<4;r++)for(let a=0;a<3;a++){const l=184+a*48,c=182+r*22;e.fillStyle="#334155",e.fillRect(l,c,40,18),e.fillStyle="#f8fafc",e.font="bold 10px monospace",e.fillText(`${r*3+a+1}`,l+20,c+13)}const i=[{x:16,y:68,w:132,h:64,label:"BOX 01",inUse:!1},{x:16,y:140,w:132,h:64,label:"BOX 02",inUse:!0},{x:16,y:212,w:132,h:64,label:"BOX 03",inUse:!0},{x:364,y:68,w:132,h:96,label:"BOX 04",inUse:!1},{x:364,y:172,w:132,h:104,label:"BOX 05",inUse:!1},{x:16,y:288,w:236,h:208,label:"LARGE BOX 06",inUse:!1},{x:260,y:288,w:236,h:208,label:"LARGE BOX 07",inUse:!1}];for(const r of i)e.fillStyle="#3a4454",e.fillRect(r.x,r.y,r.w,r.h),e.strokeStyle="#1a222e",e.lineWidth=2,e.strokeRect(r.x,r.y,r.w,r.h),e.fillStyle="#8a94a4",e.fillRect(r.x+r.w-18,r.y+r.h/2-16,8,32),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText(r.label,r.x+10,r.y+22),e.fillStyle=r.inUse?"#f59e0b":"#10b981",e.beginPath(),e.arc(r.x+r.w-14,r.y+16,5,0,Math.PI*2),e.fill();const s=new ie(n);return _t.set(o,s),s}function O1(){const o="reception-notice-board",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#c8955a",e.fillRect(0,0,512,256);for(let s=0;s<400;s++)e.fillStyle=Math.random()>.5?"rgba(90, 50, 20, 0.15)":"rgba(255, 230, 180, 0.15)",e.fillRect(Math.random()*512,Math.random()*256,3,3);e.strokeStyle="#6b401e",e.lineWidth=10,e.strokeRect(5,5,502,246),e.fillStyle="#2d1e12",e.fillRect(16,14,480,28),e.fillStyle="#ffffff",e.font='bold 15px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("サンハイツ管理組合 掲示板 (RESIDENTS NOTICE)",256,34),e.fillStyle="#ffffff",e.fillRect(24,52,140,186),e.strokeStyle="#d4d4d4",e.lineWidth=1,e.strokeRect(24,52,140,186),e.fillStyle="#dc2626",e.fillRect(28,56,132,22),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.fillText("ゴミ収集日程",94,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・可燃ゴミ: 月・木",32,98),e.fillText("・資源ゴミ: 水曜日",32,116),e.fillText("・不燃ゴミ: 第2火曜",32,134),e.fillText("※朝8時までに排出",32,158),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.fillRect(182,52,150,186),e.strokeRect(182,52,150,186),e.fillStyle="#2563eb",e.fillRect(186,56,142,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("消防設備定期点検",257,72),e.fillStyle="#1e293b",e.font="10px sans-serif",e.textAlign="left",e.fillText("今週土曜日 10:00~",190,98),e.fillText("各戸火災報知器テスト",190,116),e.fillText("インターホン点検実施",190,134),e.fillText("ご在宅をお願いします",190,158),e.fillStyle="#3b82f6",e.beginPath(),e.arc(257,56,5,0,Math.PI*2),e.fill(),e.fillStyle="#fffbeb",e.fillRect(350,52,138,186),e.strokeRect(350,52,138,186),e.fillStyle="#059669",e.fillRect(354,56,130,22),e.fillStyle="#ffffff",e.textAlign="center",e.font="bold 11px sans-serif",e.fillText("共用部利用マナー",419,72),e.fillStyle="#1f2937",e.font="10px sans-serif",e.textAlign="left",e.fillText("・駐輪場シール貼付",358,98),e.fillText("・共用廊下置配禁止",358,116),e.fillText("・夜間静粛のお願い",358,134),e.strokeStyle="#dc2626",e.lineWidth=2,e.strokeRect(436,180,42,42),e.fillStyle="#dc2626",e.font="bold 9px serif",e.textAlign="center",e.fillText("管理",457,198),e.fillText("組合印",457,214),e.fillStyle="#10b981",e.beginPath(),e.arc(419,56,5,0,Math.PI*2),e.fill();const i=new ie(n);return _t.set(o,i),i}function k1(){const o="apt-directory-board",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=384;const e=n.getContext("2d");e.fillStyle="#161d26",e.fillRect(0,0,512,384),e.strokeStyle="#d4af37",e.lineWidth=6,e.strokeRect(6,6,500,372),e.strokeStyle="#4a5568",e.lineWidth=1.5,e.strokeRect(16,16,480,352),e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", serif',e.textAlign="center",e.fillText("SUN HEIGHTS KANAMECHO",256,54),e.font='14px "Yu Gothic UI", sans-serif',e.fillStyle="#e2e8f0",e.fillText("サンハイツ要町 総合案内",256,78),e.fillStyle="#d4af37",e.fillRect(40,92,432,2);const i=[{floor:"4F",desc:"401 - 406  RESIDENCE / ルーフバルコニー"},{floor:"3F",desc:"301 - 306  RESIDENCE (Relzzy #304)"},{floor:"2F",desc:"201 - 206  RESIDENCE"},{floor:"1F",desc:"管理事務室 / エントランス / 集合受箱 / 宅配BOX"}];for(let r=0;r<i.length;r++){const a=138+r*50;e.fillStyle="#2a3442",e.fillRect(44,a-24,60,34),e.strokeStyle="#d4af37",e.lineWidth=1.5,e.strokeRect(44,a-24,60,34),e.fillStyle="#d4af37",e.font="bold 18px monospace",e.textAlign="center",e.fillText(i[r].floor,74,a),e.fillStyle="#ffffff",e.font='14px "Yu Gothic UI", sans-serif',e.textAlign="left",e.fillText(i[r].desc,120,a),r<3&&(e.fillStyle="rgba(255, 255, 255, 0.12)",e.fillRect(44,a+20,424,1))}e.fillStyle="#718096",e.font="11px sans-serif",e.textAlign="center",e.fillText("管理人常駐: 平日 9:00 ~ 17:00 | 管理会社コールセンター 24H",256,346);const s=new ie(n);return _t.set(o,s),s}function B1(){const o="ramen-shop-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#1c1510",e.fillRect(0,0,512,256);for(let s=0;s<256;s+=4)e.fillStyle=Math.random()>.5?"rgba(70, 45, 25, 0.25)":"rgba(10, 8, 6, 0.35)",e.fillRect(0,s,512,3);e.strokeStyle="#3d2616",e.lineWidth=12,e.strokeRect(6,6,500,244),e.strokeStyle="#5a3820",e.lineWidth=3,e.strokeRect(14,14,484,228),e.fillStyle="#e2c595",e.font='bold 16px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("自家製麺・濃厚豚骨スープ",256,48),e.fillStyle="#f8e4b8",e.font="bold 52px serif",e.shadowColor="#000000",e.shadowBlur=6,e.shadowOffsetX=3,e.shadowOffsetY=3,e.fillText("らーめん 麺処",256,116),e.shadowColor="transparent",e.fillStyle="#d4af37",e.font='bold 22px "Yu Gothic UI", sans-serif',e.fillText("MENYA TOKYO",256,160),e.fillStyle="#b89d78",e.font="14px sans-serif",e.fillText("創業 昭和六十二年  |  特製チャーシュー・煮玉子",256,196),e.strokeStyle="#c42012",e.lineWidth=2.5,e.strokeRect(38,92,42,42),e.fillStyle="#c42012",e.font="bold 11px serif",e.textAlign="center",e.fillText("味",59,110),e.fillText("自慢",59,126),e.strokeStyle="#c42012",e.strokeRect(432,92,42,42),e.fillText("秘",453,110),e.fillText("伝",453,126);const i=new ie(n);return _t.set(o,i),i}function G1(o){const t=`ramen-lantern-${o}`,n=_t.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,512,0);s.addColorStop(0,"#9a160c"),s.addColorStop(.3,"#d8281a"),s.addColorStop(.5,"#f03a28"),s.addColorStop(.7,"#d8281a"),s.addColorStop(1,"#9a160c"),i.fillStyle=s,i.fillRect(0,0,512,512);for(let c=40;c<470;c+=22)i.fillStyle="rgba(70, 8, 4, 0.4)",i.fillRect(0,c,512,3),i.fillStyle="rgba(255, 180, 160, 0.25)",i.fillRect(0,c+3,512,1.5);i.fillStyle="#141416",i.fillRect(0,0,512,42),i.fillRect(0,470,512,42),i.fillStyle="#d4af37",i.fillRect(0,38,512,4),i.fillRect(0,470,512,4),i.fillStyle="#101012",i.font="900 84px serif",i.textAlign="center";const r=o.split(""),a=256-(r.length-1)*90/2;r.forEach((c,d)=>{i.shadowColor="rgba(0, 0, 0, 0.6)",i.shadowBlur=4,i.shadowOffsetX=2,i.shadowOffsetY=2,i.fillText(c,256,a+d*95)}),i.shadowColor="transparent";const l=new ie(e);return _t.set(t,l),l}function H1(){const o="ramen-noren",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#162234",e.fillRect(0,0,512,256);for(let a=0;a<256;a+=3)e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.08)",e.fillRect(0,a,512,2);const i=512/4;for(let a=1;a<4;a++){const l=a*i;e.fillStyle="#080c14",e.fillRect(l-3,40,6,216)}e.fillStyle="#0f1722",e.fillRect(0,0,512,38),e.strokeStyle="#2d3b4e",e.lineWidth=2,e.strokeRect(0,0,512,38);for(let a=0;a<8;a++){const l=28+a*64;e.fillStyle="#223044",e.fillRect(l,2,24,34)}const s=["ら","ー","め","ん"];e.fillStyle="#f8fafc",e.font='bold 64px "Yu Gothic UI", serif',e.textAlign="center";for(let a=0;a<4;a++){const l=a*i+i/2;e.fillText(s[a],l,155)}e.strokeStyle="#f8fafc",e.lineWidth=3,e.beginPath(),e.arc(256,75,22,0,Math.PI*2),e.stroke(),e.font="bold 22px serif",e.fillText("麺",256,83),e.fillStyle="#f8fafc",e.font="bold 13px sans-serif",e.fillText("営 業 中",450,220);const r=new ie(n);return _t.set(o,r),r}function V1(){const o="ramen-kenbaiki",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8e2d8",e.fillRect(0,0,512,512),e.fillStyle="#262d36",e.fillRect(16,16,480,480),e.strokeStyle="#4a5568",e.lineWidth=3,e.strokeRect(16,16,480,480),e.fillStyle="#111822",e.fillRect(28,28,456,48),e.fillStyle="#f59e0b",e.font='bold 20px "Yu Gothic UI", sans-serif',e.textAlign="center",e.fillText("食券をお買い求めください",256,56),e.font="11px sans-serif",e.fillStyle="#94a3b8",e.fillText("PLEASE PURCHASE TICKET FIRST  |  千円札・二千円札・硬貨対応",256,70),e.fillStyle="#06101a",e.fillRect(320,88,160,36),e.strokeStyle="#1e293b",e.strokeRect(320,88,160,36),e.fillStyle="#22c55e",e.font="bold 18px monospace",e.textAlign="right",e.fillText("¥1,000",470,113),e.fillStyle="#dc2626",e.fillRect(28,92,280,28),e.fillStyle="#ffffff",e.font="bold 13px sans-serif",e.textAlign="center",e.fillText("★ 当店おすすめ 定番らーめん ★",168,111);const i=[{title:"特製豚骨らーめん",price:"¥980",color:"#f59e0b"},{title:"チャーシュー麺",price:"¥1,100",color:"#ef4444"},{title:"濃厚魚介味噌",price:"¥950",color:"#d97706"},{title:"味玉豚骨らーめん",price:"¥880",color:"#f59e0b"},{title:"辛味噌らーめん",price:"¥920",color:"#dc2626"},{title:"あっさり魚介醤油",price:"¥850",color:"#3b82f6"},{title:"替玉 (一玉)",price:"¥150",color:"#10b981"},{title:"博多一口餃子(5個)",price:"¥380",color:"#10b981"},{title:"炙りチャーシュー丼",price:"¥350",color:"#f97316"},{title:"追加トッピング 煮玉子",price:"¥120",color:"#64748b"},{title:"追加 メンマ/白ネギ",price:"¥120",color:"#64748b"},{title:"アサヒ スーパードライ",price:"¥550",color:"#eab308"}],s=144,r=58,a=28,l=132;for(let d=0;d<i.length;d++){const f=d%3,u=Math.floor(d/3),h=a+f*156,m=l+u*66,_=i[d];e.fillStyle="#1e2632",e.fillRect(h,m,s,r),e.strokeStyle=_.color,e.lineWidth=2,e.strokeRect(h,m,s,r),e.fillStyle=_.color,e.fillRect(h+4,m+4,s-8,16),e.fillStyle="#ffffff",e.font="bold 9.5px sans-serif",e.textAlign="center",e.fillText(_.title,h+s/2,m+16),e.fillStyle="#ffffff",e.font="bold 15px monospace",e.fillText(_.price,h+s/2,m+42),e.fillStyle="#22c55e",e.beginPath(),e.arc(h+12,m+47,3.5,0,Math.PI*2),e.fill()}e.fillStyle="#111822",e.fillRect(28,404,210,42),e.strokeStyle="#334155",e.strokeRect(28,404,210,42),e.fillStyle="#38bdf8",e.font="bold 11px sans-serif",e.textAlign="left",e.fillText("紙幣投入口 (1000/2000円)",42,428),e.fillStyle="#0284c7",e.fillRect(170,418,56,12),e.fillStyle="#111822",e.fillRect(256,404,228,42),e.strokeStyle="#334155",e.strokeRect(256,404,228,42),e.fillStyle="#f59e0b",e.fillText("硬貨投入口 (500/100/50/10)",270,428),e.fillStyle="#d97706",e.fillRect(432,416,38,16),e.fillStyle="#0b0f14",e.fillRect(28,454,456,36),e.strokeStyle="#22c55e",e.lineWidth=1.5,e.strokeRect(28,454,456,36),e.fillStyle="#22c55e",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("▼ おつり・食券 口 (TICKET / CHANGE)",256,477);const c=new ie(n);return _t.set(o,c),c}function W1(){const o="ramen-shop-wall",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#e8dcc8",e.fillRect(0,0,512,320);for(let a=0;a<600;a++)e.fillStyle=Math.random()>.5?"rgba(180, 160, 130, 0.18)":"rgba(255, 245, 230, 0.25)",e.fillRect(Math.random()*512,Math.random()*320,2,2);const i=20;for(let a=0;a<512;a+=128)e.fillStyle="#3a2416",e.fillRect(a,0,i,320),e.fillStyle="#543622",e.fillRect(a+2,0,i-4,320);e.fillStyle="#3a2416",e.fillRect(0,312,512,16),e.fillStyle="#543622",e.fillRect(0,314,512,12),e.fillStyle="#2a1a10",e.fillRect(0,328,512,184);const s=42;for(let a=0;a<512;a+=s)e.fillStyle=a%(s*2)===0?"#382216":"#2e1c12",e.fillRect(a+2,328,s-4,184),e.fillStyle="#160d08",e.fillRect(a,328,2,184);const r=new ie(n);return r.wrapS=Ce,r.wrapT=Ce,r.repeat.set(3,1),_t.set(o,r),r}function X1(){const o="ramen-shop-floor",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#22262c",e.fillRect(0,0,512,512);const i=128;for(let r=0;r<512;r+=i)for(let a=0;a<512;a+=i){const l=Math.floor((Math.sin(r*3+a*7)+1)*8);e.fillStyle=`rgb(${34+l},${38+l},${44+l})`,e.fillRect(r+3,a+3,i-6,i-6);for(let c=0;c<8;c++)e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(r+Math.random()*(i-6),a+Math.random()*(i-6),2,2)}e.strokeStyle="#121519",e.lineWidth=4,e.strokeRect(0,0,512,512);for(let r=i;r<512;r+=i)e.beginPath(),e.moveTo(r,0),e.lineTo(r,512),e.stroke();for(let r=i;r<512;r+=i)e.beginPath(),e.moveTo(0,r),e.lineTo(512,r),e.stroke();const s=new ie(n);return s.wrapS=Ce,s.wrapT=Ce,s.repeat.set(3,3),_t.set(o,s),s}const j='"Yu Gothic UI", "Yu Gothic", Meiryo, "Hiragino Kaku Gothic ProN", "MS PGothic", sans-serif';function Y1(){const o="storefront-dental-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#eaf5f7"),i.addColorStop(.55,"#dbeff2"),i.addColorStop(1,"#cde6ea"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=e.getImageData(0,0,1024,512),r=s.data;for(let h=0;h<r.length;h+=4){const m=(Math.random()-.5)*8;r[h]=Math.min(255,Math.max(0,r[h]+m)),r[h+1]=Math.min(255,Math.max(0,r[h+1]+m)),r[h+2]=Math.min(255,Math.max(0,r[h+2]+m))}e.putImageData(s,0,0),e.fillStyle="#175261",e.fillRect(0,0,1024,88),e.fillStyle="#2db8aa",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(60,32),e.bezierCurveTo(54,24,68,22,68,34),e.bezierCurveTo(68,22,82,24,76,32),e.bezierCurveTo(82,48,76,60,72,60),e.bezierCurveTo(69,60,68,46,68,46),e.bezierCurveTo(68,46,67,60,64,60),e.bezierCurveTo(60,60,54,48,60,32),e.fill(),e.fillStyle="#ffffff",e.font=`700 36px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",114,34),e.fillStyle="#a6e2ec",e.font=`500 17px ${j}`,e.fillText("PARKSIDE DENTAL CLINIC",116,64),e.fillStyle="#e2f7fa",e.font=`600 18px ${j}`,e.textAlign="right",e.fillText("一般歯科 ・ 小児歯科 ・ 矯正歯科 ・ 口腔外科 ・ 予防定期検診",990,44),e.fillStyle="rgba(255, 255, 255, 0.92)",e.strokeStyle="#bedee3",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${j}`,e.textAlign="left",e.fillText("【 診療時間のご案内 】",56,138);const a=56,l=165,c=48,d=["月","火","水","木","金","土","日/祝"];e.fillStyle="#edf7f9",e.fillRect(a+90,l,c*7,28),e.fillStyle="#175261",e.font=`700 15px ${j}`,e.textAlign="center",d.forEach((h,m)=>{h==="木"||h.includes("日")?e.fillStyle="#d94b4b":e.fillStyle="#175261",e.fillText(h,a+90+m*c+c/2,l+14)}),[{label:"09:30 - 13:00",marks:["●","●","●","休","●","●","休"]},{label:"14:30 - 19:30",marks:["●","●","●","休","●","▲","休"]}].forEach((h,m)=>{const _=l+28+m*34;e.fillStyle=m%2===0?"#ffffff":"#f8fcfd",e.fillRect(a,_,90+c*7,34),e.strokeStyle="#d7eaee",e.strokeRect(a,_,90+c*7,34),e.fillStyle="#2a3b40",e.font=`600 13px ${j}`,e.textAlign="center",e.fillText(h.label,a+45,_+17),h.marks.forEach((x,p)=>{x==="休"?(e.fillStyle="#b84242",e.font=`700 14px ${j}`):x==="▲"?(e.fillStyle="#e07d10",e.font=`700 15px ${j}`):(e.fillStyle="#1d788a",e.font=`700 16px ${j}`),e.fillText(x,a+90+p*c+c/2,_+17)})}),e.fillStyle="#57727a",e.font=`500 13px ${j}`,e.textAlign="left",e.fillText("▲ 土曜午後は 14:30〜17:00 まで診療",56,290),e.fillText("休診日：木曜日・日曜日・祝祭日",56,312),e.fillStyle="#1e7587",e.font=`600 13px ${j}`,e.fillText("各種健康保険取扱 ・ 労災保険指定医療機関",56,345),e.fillStyle="rgba(255, 255, 255, 0.92)",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`700 20px ${j}`,e.textAlign="left",e.fillText("【 ご予約・急患随時受付 】",546,138),e.fillStyle="#41575f",e.font=`500 15px ${j}`,e.fillText("当院は患者様をお待たせしない予約優先制です。",546,172),e.fillText("急な歯の痛み・詰め物の脱落は当日診療いたします。",546,198),e.fillStyle="#edf8fa",e.strokeStyle="#3296a6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,222,420,72,6),e.fill(),e.stroke(),e.fillStyle="#175261",e.font=`600 14px ${j}`,e.fillText("ご予約・お問い合わせダイヤル",566,242),e.fillStyle="#134e5c",e.font=`800 32px ${j}`,e.fillText("TEL 03-3456-7890",566,274),e.fillStyle="#4a6870",e.font=`500 14px ${j}`,e.fillText("● 痛みの少ない麻酔治療　● デジタルCT完備　● 完全滅菌対応",546,326),e.fillText("● 院内バリアフリー設計　● ベビーカー・車椅子そのまま入室可",546,352),e.fillStyle="rgba(255, 255, 255, 0.55)",e.fillRect(0,400,1024,112),e.fillStyle="rgba(255, 255, 255, 0.65)";for(let h=0;h<1024;h+=16)e.fillRect(h,405,8,95);e.fillStyle="#1c783c",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${j}`,e.fillText("TOUCH 押してください",512,465);const u=new ie(n);return u.colorSpace=he,u.anisotropy=4,_t.set(o,u),u}function Z1(){const o="storefront-dental-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#154a57"),i.addColorStop(.5,"#1b5969"),i.addColorStop(1,"#113e4a"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#47a8bc",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(110,128,64,0,Math.PI*2),e.fill(),e.fillStyle="#1b5969",e.beginPath(),e.moveTo(96,100),e.bezierCurveTo(84,82,110,78,110,104),e.bezierCurveTo(110,78,136,82,124,100),e.bezierCurveTo(138,134,126,158,118,158),e.bezierCurveTo(112,158,110,130,110,130),e.bezierCurveTo(110,130,108,158,102,158),e.bezierCurveTo(94,158,82,134,96,100),e.fill(),e.fillStyle="#ffffff",e.font=`800 68px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("パークサイド歯科",205,105),e.fillStyle="#9fe1ee",e.font=`600 24px ${j}`,e.fillText("PARKSIDE DENTAL CLINIC  ・  TEL 03-3456-7890",210,172),e.fillStyle="#2db8aa",e.beginPath(),e.roundRect(790,80,190,96,12),e.fill(),e.fillStyle="#ffffff",e.font=`700 20px ${j}`,e.textAlign="center",e.fillText("夜7時半まで",885,115),e.font=`600 16px ${j}`,e.fillText("急患随時受付",885,146);const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function q1(){const o="storefront-cleaners-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f0f5fb"),i.addColorStop(1,"#dfeaf5"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#1e3f7a",e.fillRect(0,0,1024,88),e.strokeStyle="#ffd84d",e.lineWidth=4,e.beginPath(),e.arc(68,30,12,0,Math.PI,!0),e.moveTo(40,58),e.lineTo(68,42),e.lineTo(96,58),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 38px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",120,36),e.fillStyle="#ffd84d",e.font=`600 17px ${j}`,e.fillText("SHIROKANE DRY CLEANING & LAUNDRY",122,66),e.fillStyle="#ffffff",e.font=`700 18px ${j}`,e.textAlign="right",e.fillText("朝10時お預かり ➡ 夕方5時お渡し！ スピード即日仕上げ",990,44),e.fillStyle="#ffffff",e.strokeStyle="#bed1e8",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 20px ${j}`,e.textAlign="left",e.fillText("【 白金クリーニング 料金表 】",56,138),[{name:"ワイシャツ (立体抗菌消臭仕上)",price:"¥220〜"},{name:"スーツ上下 (汗抜きプレス付)",price:"¥1,280〜"},{name:"ジャケット・ブレザー",price:"¥780〜"},{name:"スラックス・スカート",price:"¥550〜"},{name:"ダウンジャケット・コート",price:"¥1,980〜"},{name:"毛布・羽毛ふとん丸洗い",price:"¥1,800〜"}].forEach((l,c)=>{const d=172+c*32;e.fillStyle="#2d3b4d",e.font=`600 15px ${j}`,e.textAlign="left",e.fillText(l.name,56,d),e.fillStyle="#a0b3cb";for(let f=295;f<400;f+=8)e.fillRect(f,d-2,3,3);e.fillStyle="#d63429",e.font=`800 17px ${j}`,e.textAlign="right",e.fillText(l.price,470,d)}),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#3a4b60",e.fillRect(550,130,412,6),["#1d2430","#3b4352","#263347","#4b5563","#1e2838"].forEach((l,c)=>{const d=560+c*80;e.strokeStyle="#8d99ae",e.lineWidth=2,e.beginPath(),e.moveTo(d+35,136),e.lineTo(d+15,155),e.lineTo(d+55,155),e.closePath(),e.stroke(),e.fillStyle=l,e.fillRect(d+15,155,40,75),e.fillStyle="rgba(255, 255, 255, 0.45)",e.fillRect(d+10,150,50,95),e.strokeStyle="rgba(180, 210, 240, 0.7)",e.strokeRect(d+10,150,50,95),e.fillStyle=c%2===0?"#ff4d4d":"#3385ff",e.fillRect(d+42,160,14,20)}),e.fillStyle="#eef5fc",e.strokeStyle="#296ed6",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,260,420,100,6),e.fill(),e.stroke(),e.fillStyle="#1e3f7a",e.font=`800 18px ${j}`,e.textAlign="left",e.fillText("★ 24時間コインランドリー併設 ★",566,285),e.fillStyle="#3f536e",e.font=`500 14px ${j}`,e.fillText("大型洗濯乾燥機・スニーカーウォッシャー完備！",566,312),e.fillText("営業時間: 本店 8:00〜20:00 (水曜定休) / コインランドリー 24時間",566,338),e.fillStyle="rgba(235, 243, 252, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#1e3f7a",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${j}`,e.fillText("TOUCH 押してください",512,465);const a=new ie(n);return a.colorSpace=he,a.anisotropy=4,_t.set(o,a),a}function $1(){const o="storefront-cleaners-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#1c3e78"),i.addColorStop(.5,"#255099"),i.addColorStop(1,"#173466"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#ffd84d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#1c3e78",e.lineWidth=5,e.beginPath(),e.arc(105,105,15,0,Math.PI,!0),e.moveTo(75,142),e.lineTo(105,120),e.lineTo(135,142),e.closePath(),e.stroke(),e.fillStyle="#ffffff",e.font=`800 68px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("白金クリーニング",200,102),e.fillStyle="#ffd84d",e.font=`700 24px ${j}`,e.fillText("SHIROKANE DRY CLEANING  ・  24H コインランドリー併設",205,168),e.fillStyle="#e63946",e.beginPath(),e.roundRect(790,75,190,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${j}`,e.textAlign="center",e.fillText("即日仕上げ",885,114),e.font=`600 15px ${j}`,e.fillText("朝10時➡夕方5時",885,150);const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function K1(){const o="storefront-izakaya-facade",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d");e.fillStyle="#261e19",e.fillRect(0,0,1024,512);for(let p=0;p<1024;p+=32)e.fillStyle=p%64===0?"#1f1814":"#2d231d",e.fillRect(p,0,31,512),e.fillStyle="#140f0c",e.fillRect(p+31,0,1,512);const i=600,s=212,r=150,a=5,l=i/a;for(let p=0;p<a;p++){const M=s+p*l;e.fillStyle="#1c283f",e.fillRect(M+2,0,l-4,r),e.fillStyle="#141e30",e.fillRect(M+2,r-12,l-4,12)}const c=s+i/2;e.strokeStyle="#f4eedb",e.lineWidth=4,e.beginPath(),e.arc(c,65,34,0,Math.PI*2),e.stroke(),e.fillStyle="#f4eedb",e.font='800 48px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("魚",c,64),e.font='800 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText("和",s+l*.5,75),e.fillText("食",s+l*1.5,75),e.fillText("酒",s+l*3.5,75),e.fillText("処",s+l*4.5,75);const d=40,f=175,u=440,h=290,m=e.createRadialGradient(d+u/2,f+h/2,40,d+u/2,f+h/2,280);m.addColorStop(0,"#ffe49e"),m.addColorStop(.7,"#ffaa44"),m.addColorStop(1,"#c96a1a"),e.fillStyle=m,e.fillRect(d,f,u,h),e.fillStyle="#261b14",e.lineWidth=6,e.strokeRect(d,f,u,h);for(let p=d;p<d+u;p+=36)e.fillRect(p,f,6,h);for(let p=f;p<f+h;p+=42)e.fillRect(d,p,u,6);[{title:"名物 もつ煮込み",price:"四八〇円"},{title:"本日のお造り盛合",price:"一二八〇円"},{title:"炭火串焼き盛合せ",price:"八五〇円"},{title:"旬魚 塩焼き各種",price:"六八〇円"},{title:"全国厳選 地酒一合",price:"七五〇円"}].forEach((p,M)=>{const v=530+M*92,w=175;e.fillStyle="#9e6e43",e.fillRect(v,w,76,285),e.strokeStyle="#5a3d24",e.lineWidth=3,e.strokeRect(v,w,76,285),e.fillStyle="#170e08",e.font='700 17px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",p.title.split("").forEach((R,E)=>{e.fillText(R,v+38,w+30+E*24)}),e.fillStyle="#9e241b",e.fillRect(v+26,w+215,24,24),e.fillStyle="#ffffff",e.font="700 12px serif",e.fillText("極",v+38,w+231),e.fillStyle="#2a1a10",e.font='600 13px "Hiragino Mincho ProN", "Yu Mincho", serif',e.fillText(p.price,v+38,w+265)});const x=new ie(n);return x.colorSpace=he,x.anisotropy=4,_t.set(o,x),x}function J1(){const o="storefront-izakaya-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#5a1910"),i.addColorStop(.5,"#7a2016"),i.addColorStop(1,"#4a120b"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#dfa84a",e.lineWidth=6,e.strokeRect(6,6,1012,244),e.fillStyle="#d93829",e.beginPath(),e.ellipse(110,128,48,62,0,0,Math.PI*2),e.fill(),e.strokeStyle="#220805",e.lineWidth=3,e.stroke(),e.fillStyle="#ffffff",e.font='900 36px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="center",e.textBaseline="middle",e.fillText("酒",110,128),e.fillStyle="#ffeed0",e.font='900 72px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("和食 酒処 魚河岸",200,104),e.fillStyle="#dfa84a",e.font=`700 24px ${j}`,e.fillText("TRADITIONAL IZAKAYA UOGASHI  ・  旬魚 炭火串焼 厳選銘酒",205,172),e.fillStyle="#b32215",e.fillRect(860,80,96,96),e.strokeStyle="#ffd875",e.lineWidth=2,e.strokeRect(862,82,92,92),e.fillStyle="#ffffff",e.font="700 20px serif",e.textAlign="center",e.fillText("商売",908,114),e.fillText("繁盛",908,148);const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function j1(){const o="storefront-pharmacy-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f2faf8"),i.addColorStop(1,"#ddf1ec"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#0f6150",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.beginPath(),e.arc(68,44,28,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(60,26,16,36),e.fillRect(50,36,36,16),e.fillStyle="#ffffff",e.font=`800 36px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 森薬局",114,34),e.fillStyle="#9ee8d7",e.font=`600 17px ${j}`,e.fillText("MORI CLINIC & DISPENSING PHARMACY",116,64),e.fillStyle="#ffffff",e.font=`700 20px ${j}`,e.textAlign="right",e.fillText("【保険調剤】 全国の処方せん受け付けます",990,44),e.fillStyle="#ffffff",e.strokeStyle="#b6e0d5",e.lineWidth=2,e.beginPath(),e.roundRect(36,110,460,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${j}`,e.textAlign="left",e.fillText("【 森クリニック 診療時間 】",56,138),e.fillStyle="#2e4741",e.font=`600 15px ${j}`,e.fillText("診療科目：内科 ・ 消化器科 ・ 呼吸器科 ・ 小児科",56,172),e.fillText("午前診療：09:00 〜 12:30 （月・火・木・金・土）",56,206),e.fillText("午後診療：15:00 〜 18:30 （月・火・木・金）",56,238),e.fillStyle="#b83b3b",e.fillText("休診日：水曜午後・土曜午後・日曜・祝祭日",56,272),e.fillStyle="#376b5f",e.font=`500 14px ${j}`,e.fillText("● 各種健康診断・予防接種 随時受付",56,316),e.fillText("● 在宅医療・訪問診療対応クリニック",56,344),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(524,110,464,270,8),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 20px ${j}`,e.textAlign="left",e.fillText("【 調剤薬局 サービス案内 】",546,138),e.fillStyle="#e8f7f3",e.strokeStyle="#28a687",e.lineWidth=1.5,e.beginPath(),e.roundRect(546,160,420,85,6),e.fill(),e.stroke(),e.fillStyle="#0f6150",e.font=`800 22px ${j}`,e.fillText("処方せん受付中",566,188),e.fillStyle="#31544c",e.font=`500 14px ${j}`,e.fillText("大学病院・総合病院・地域の診療所すべての処方せん調剤可",566,222),e.fillStyle="#2f4b44",e.font=`500 14px ${j}`,e.fillText("● 電子お薬手帳アプリ対応",546,276),e.fillText("● お薬の飲み合わせ・健康相談 随時受付",546,304),e.fillText("● 一般用医薬品(OTC)・衛生材料・マスク・消毒液完備",546,332),e.fillText("● 各種クレジットカード・電子マネー対応",546,360),e.fillStyle="rgba(230, 245, 240, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#0f6150",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${j}`,e.fillText("TOUCH 押してください",512,465);const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function Q1(){const o="storefront-pharmacy-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#0c4d40"),i.addColorStop(.5,"#136b58"),i.addColorStop(1,"#093a30"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#43d9b5",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#00a86b",e.fillRect(90,88,30,80),e.fillRect(65,113,80,30),e.fillStyle="#ffffff",e.font=`800 66px ${j}`,e.textAlign="left",e.textBaseline="middle",e.fillText("森クリニック / 薬局",195,102),e.fillStyle="#9fe9d8",e.font=`600 24px ${j}`,e.fillText("MORI CLINIC & PHARMACY  ・  処方せん受付・内科・小児科",200,168),e.fillStyle="#00a86b",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 22px ${j}`,e.textAlign="center",e.fillText("保険調剤",897,114),e.font=`600 16px ${j}`,e.fillText("処方せん受付",897,150);const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function tg(){const o="storefront-bookstore-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#f9f5ed"),i.addColorStop(1,"#ecdfcd"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="#542617",e.fillRect(0,0,1024,88),e.fillStyle="#ffffff",e.font='800 38px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("東書店 本屋",48,36),e.fillStyle="#e8c9b5",e.font=`600 18px ${j}`,e.fillText("HIGASHI BOOKSTORE & COMICS",50,66),e.fillStyle="#ffffff",e.font=`700 18px ${j}`,e.textAlign="right",e.fillText("話題のベストセラー・新刊コミック・文庫・雑誌 豊富に取り揃えております",990,44);const s=115,r=250,a=["#b83328","#254b85","#247a46","#87428f","#d97d21","#1f2937","#b5832a","#326b78","#a82c4e","#4f46e5","#0d9488","#ea580c","#15803d","#4338ca","#be185d","#b45309","#1e40af","#065f46","#831843","#701a75","#1e3a8a"];e.fillStyle="#402619",e.fillRect(36,s+95,952,10);for(let c=45;c<970;c+=18){const d=a[c*7%a.length],f=75+c*13%20;e.fillStyle=d,e.fillRect(c,s+95-f,15,f)}e.fillStyle="#402619",e.fillRect(36,r+105,952,10);for(let c=45;c<970;c+=22){const d=a[c*11%a.length],f=85+c*17%20;e.fillStyle=d,e.fillRect(c,r+105-f,18,f)}e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#c9542a",e.lineWidth=3,e.beginPath(),e.roundRect(80,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#c9542a",e.font=`800 20px ${j}`,e.textAlign="center",e.fillText("【 今週のベストセラー 】",210,185),e.fillStyle="#261b16",e.font=`700 15px ${j}`,e.fillText("1位 直木賞受賞 話題の巨編",210,222),e.fillText("2位 週刊少年コミック 最新巻",210,254),e.fillText("3位 ビジネス実践名著",210,286),e.fillText("4位 東京下町 街歩きガイド",210,318),e.fillStyle="rgba(255, 255, 255, 0.94)",e.strokeStyle="#2b63ab",e.lineWidth=3,e.beginPath(),e.roundRect(680,150,260,210,6),e.fill(),e.stroke(),e.fillStyle="#2b63ab",e.font=`800 20px ${j}`,e.textAlign="center",e.fillText("★ コミック新刊 入荷 ★",810,185),e.fillStyle="#1c2838",e.font=`700 15px ${j}`,e.fillText("週刊ジャンプ系 コミックス",810,222),e.fillText("少年マガジン系 コミックス",810,254),e.fillText("青年コミック・名作復刻版",810,286),e.fillText("図書カードNEXT 取扱店",810,318),e.fillStyle="rgba(240, 230, 218, 0.75)",e.fillRect(0,400,1024,112),e.fillStyle="#542617",e.beginPath(),e.roundRect(420,425,184,52,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("自動ドア / AUTOMATIC",512,446),e.font=`600 12px ${j}`,e.fillText("東書店 入口",512,465);const l=new ie(n);return l.colorSpace=he,l.anisotropy=4,_t.set(o,l),l}function eg(){const o="storefront-bookstore-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#4a2013"),i.addColorStop(.5,"#632e1c"),i.addColorStop(1,"#3b180d"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#e0a96d",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.strokeStyle="#4a2013",e.lineWidth=4,e.beginPath(),e.moveTo(75,110),e.quadraticCurveTo(105,120,105,150),e.quadraticCurveTo(105,120,135,110),e.lineTo(135,145),e.quadraticCurveTo(105,155,105,155),e.quadraticCurveTo(105,155,75,145),e.closePath(),e.stroke(),e.fillStyle="#ffeedb",e.font='900 74px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("書店 本屋",195,102),e.fillStyle="#dfaf85",e.font=`700 24px ${j}`,e.fillText("HIGASHI BOOKSTORE & COMICS  ・  本・雑誌・コミック・文具",200,168),e.fillStyle="#8f3c20",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("本・コミック",897,114),e.font=`600 16px ${j}`,e.fillText("新刊続々入荷",897,150);const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function ng(){const o="storefront-cafe-window",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#2d1f18"),i.addColorStop(1,"#1b120d"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=e.createRadialGradient(720,220,40,720,220,320);s.addColorStop(0,"#ffbf66"),s.addColorStop(.7,"#d47d22"),s.addColorStop(1,"#5e2e05"),e.fillStyle=s,e.fillRect(480,80,500,320),e.fillStyle="#8c5e37",e.beginPath(),e.roundRect(520,250,100,140,10),e.roundRect(640,260,100,130,10),e.roundRect(760,240,110,150,10),e.fill(),e.fillStyle="#26150b",e.font=`800 15px ${j}`,e.textAlign="center",e.fillText("BRAZIL",570,310),e.fillText("ETHIOPIA",690,320),e.fillText("COLOMBIA",815,305);for(const l of[600,740,870])e.strokeStyle="#2b1b11",e.lineWidth=2,e.beginPath(),e.moveTo(l,80),e.lineTo(l,140),e.stroke(),e.fillStyle="#fff4cc",e.beginPath(),e.arc(l,145,12,0,Math.PI*2),e.fill();e.fillStyle="#212726",e.strokeStyle="#855938",e.lineWidth=6,e.beginPath(),e.roundRect(40,50,400,370,8),e.fill(),e.stroke(),e.fillStyle="#fceecb",e.font='800 24px "Hiragino Mincho ProN", serif',e.textAlign="center",e.fillText("CAFE MAME  珈琲豆",240,90),e.strokeStyle="#e0c99f",e.lineWidth=1.5,e.beginPath(),e.moveTo(100,105),e.lineTo(380,105),e.stroke(),[{name:"Tokyo Blend (深煎り)",price:"¥480"},{name:"Ethiopia Yirgacheffe (浅煎り)",price:"¥550"},{name:"Cafe Latte (Hot/Iced)",price:"¥520"},{name:"Cold Brew Nitro Coffee",price:"¥550"},{name:"自家製 バスクチーズケーキ",price:"¥500"},{name:"クラシック カスタードプリン",price:"¥450"}].forEach((l,c)=>{const d=145+c*36;e.fillStyle="#ffffff",e.font=`600 15px ${j}`,e.textAlign="left",e.fillText(l.name,65,d),e.fillStyle="#ffd680",e.font=`700 16px ${j}`,e.textAlign="right",e.fillText(l.price,415,d)}),e.fillStyle="#dfba87",e.font=`500 13px ${j}`,e.textAlign="center",e.fillText("自家焙煎 厳選シングルオリジン豆販売 100g〜",240,385),e.fillStyle="rgba(40, 26, 18, 0.85)",e.fillRect(0,430,1024,82),e.fillStyle="#e8be8b",e.font=`700 16px ${j}`,e.textAlign="center",e.fillText("OPEN 8:30 〜 19:30  /  TAKE OUT OK",512,475);const a=new ie(n);return a.colorSpace=he,a.anisotropy=4,_t.set(o,a),a}function ig(){const o="storefront-cafe-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=1024,n.height=256;const e=n.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#361e12"),i.addColorStop(.5,"#4a2b1b"),i.addColorStop(1,"#2a160c"),e.fillStyle=i,e.fillRect(0,0,1024,256),e.strokeStyle="#d4a36a",e.lineWidth=5,e.strokeRect(6,6,1012,244),e.fillStyle="#ffffff",e.beginPath(),e.arc(105,128,62,0,Math.PI*2),e.fill(),e.fillStyle="#361e12",e.beginPath(),e.roundRect(82,110,46,38,4),e.fill(),e.strokeStyle="#361e12",e.lineWidth=4,e.beginPath(),e.arc(130,126,10,-Math.PI/2,Math.PI/2),e.stroke(),e.fillStyle="#ffeed9",e.font='900 70px "Hiragino Mincho ProN", serif',e.textAlign="left",e.textBaseline="middle",e.fillText("喫茶 TOKYO CAFE",195,102),e.fillStyle="#d4a36a",e.font=`700 24px ${j}`,e.fillText("CAFE MAME  ・  ROASTERY & SPECIALTY BEANS",200,168),e.fillStyle="#6e3c23",e.beginPath(),e.roundRect(810,75,175,105,10),e.fill(),e.fillStyle="#ffffff",e.font=`800 24px ${j}`,e.textAlign="center",e.fillText("自家焙煎",897,114),e.font=`600 16px ${j}`,e.fillText("珈琲豆販売",897,150);const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function og(o){const t=`aframe-sign-${o}`,n=_t.get(t);if(n)return n;const e=document.createElement("canvas");e.width=512,e.height=768;const i=e.getContext("2d");o==="dental"?(i.fillStyle="#f0f8fa",i.fillRect(0,0,512,768),i.strokeStyle="#1b5b6b",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#1b5b6b",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${j}`,i.textAlign="center",i.fillText("パークサイド歯科",256,75),i.font=`600 20px ${j}`,i.fillText("PARKSIDE DENTAL",256,120),i.fillStyle="#1b5b6b",i.font=`800 32px ${j}`,i.fillText("【 本日診療中 】",256,210),i.fillStyle="#2a444c",i.font=`600 24px ${j}`,i.fillText("午前  09:30 〜 13:00",256,270),i.fillText("午後  14:30 〜 19:30",256,320),i.fillStyle="#d94b4b",i.font=`700 22px ${j}`,i.fillText("初診・急患 随時受付",256,390),i.fillStyle="#32707e",i.font=`600 21px ${j}`,i.fillText("歯のクリーニング・定期検診",256,445),i.fillText("ホワイトニング・小児歯科",256,485),i.fillText("保険証をご持参ください",256,540),i.fillStyle="#134754",i.font=`800 32px ${j}`,i.fillText("TEL 03-3456-7890",256,620),i.fillStyle="#e85d04",i.fillRect(40,670,432,50),i.fillStyle="#ffffff",i.font=`700 22px ${j}`,i.fillText("お気軽にご来院ください",256,702)):o==="cleaners"?(i.fillStyle="#f0f5fc",i.fillRect(0,0,512,768),i.strokeStyle="#1e3f7a",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#1e3f7a",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${j}`,i.textAlign="center",i.fillText("白金クリーニング",256,75),i.fillStyle="#ffd84d",i.font=`700 20px ${j}`,i.fillText("SHIROKANE CLEANING",256,120),i.fillStyle="#e63946",i.fillRect(30,180,452,65),i.fillStyle="#ffffff",i.font=`800 32px ${j}`,i.fillText("★ 本日ポイント2倍DAY ★",256,224),i.fillStyle="#1e3f7a",i.font=`800 26px ${j}`,i.fillText("ワイシャツ 抗菌仕上  ¥220",256,300),i.fillText("スーツ上下 汗抜き付  ¥1,280",256,350),i.fillText("ダウン・コート類   ¥1,980",256,400),i.fillStyle="#324a6d",i.font=`600 22px ${j}`,i.fillText("朝10時お預かり ➡ 夕方5時お渡し",256,475),i.fillText("スピード即日仕上げ可能！",256,520),i.fillStyle="#1e3f7a",i.fillRect(30,570,452,130),i.fillStyle="#ffd84d",i.font=`800 26px ${j}`,i.fillText("24時間コインランドリー",256,615),i.fillStyle="#ffffff",i.font=`600 20px ${j}`,i.fillText("大型洗濯乾燥機 好評稼働中！",256,660)):o==="izakaya"?(i.fillStyle="#211c19",i.fillRect(0,0,512,768),i.strokeStyle="#85512b",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#94291e",i.fillRect(14,14,484,130),i.fillStyle="#fff0d9",i.font='900 44px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("和食・酒処 魚河岸",256,75),i.fillStyle="#ffd580",i.font=`700 22px ${j}`,i.fillText("元気に営業中！",256,120),i.fillStyle="#ffd875",i.font='800 28px "Hiragino Mincho ProN", serif',i.fillText("〜 本日のおすすめ 〜",256,195),i.fillStyle="#ffffff",i.font='700 24px "Hiragino Mincho ProN", serif',i.fillText("● 本日の刺身三種盛り   九八〇円",256,255),i.fillText("● 特製 名物もつ煮込み   四八〇円",256,310),i.fillText("● 備長炭 串焼き五本盛   八五〇円",256,365),i.fillText("● 本日の地酒 純米大吟醸 七五〇円",256,420),i.fillStyle="#94291e",i.fillRect(30,480,452,100),i.fillStyle="#fff4de",i.font=`800 26px ${j}`,i.fillText("【 晩酌セット 1,000円 】",256,522),i.font=`600 18px ${j}`,i.fillText("生ビール ＋ 小鉢 ＋ 串焼き3本！",256,558),i.fillStyle="#e8a84a",i.font=`700 22px ${j}`,i.fillText("お一人様大歓迎！ カウンター席有",256,650),i.fillText("いらっしゃいませ！",256,695)):o==="pharmacy"?(i.fillStyle="#f0faf6",i.fillRect(0,0,512,768),i.strokeStyle="#0f6150",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#0f6150",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font=`800 42px ${j}`,i.textAlign="center",i.fillText("森クリニック / 薬局",256,75),i.fillStyle="#9fe8d7",i.font=`600 20px ${j}`,i.fillText("PHARMACY & CLINIC",256,120),i.fillStyle="#00a86b",i.fillRect(30,180,452,70),i.fillStyle="#ffffff",i.font=`800 28px ${j}`,i.fillText("【 保険調剤 処方せん受付 】",256,225),i.fillStyle="#21423a",i.font=`600 22px ${j}`,i.fillText("全国どちらの医療機関の処方せんも",256,300),i.fillText("受け付けております",256,335),i.fillStyle="#0f6150",i.font=`700 24px ${j}`,i.fillText("森クリニック 診療時間",256,410),i.fillStyle="#31544c",i.font=`600 21px ${j}`,i.fillText("午前 9:00〜12:30 / 午後 15:00〜18:30",256,450),i.fillText("内科・小児科・呼吸器科",256,490),i.fillStyle="#0f6150",i.fillRect(30,560,452,140),i.fillStyle="#ffffff",i.font=`700 22px ${j}`,i.fillText("お薬のご相談・在宅医療対応",256,605),i.fillText("電子お薬手帳アプリ対応",256,645),i.fillText("各種キャッシュレス決済可",256,680)):o==="bookstore"?(i.fillStyle="#faf4ec",i.fillRect(0,0,512,768),i.strokeStyle="#542617",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#542617",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font='900 44px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("東書店 本屋",256,75),i.fillStyle="#dfaf85",i.font=`600 20px ${j}`,i.fillText("HIGASHI BOOKSTORE",256,120),i.fillStyle="#c94a28",i.fillRect(30,180,452,65),i.fillStyle="#ffffff",i.font=`800 28px ${j}`,i.fillText("★ 今週のコミック新刊 入荷！ ★",256,224),i.fillStyle="#261b16",i.font=`700 24px ${j}`,i.fillText("話題の直木賞・芥川賞 受賞作",256,300),i.fillText("週刊・月刊 雑誌最新号 発売中",256,350),i.fillText("文庫・新書・文具・万年筆",256,400),i.fillStyle="#542617",i.fillRect(30,470,452,110),i.fillStyle="#ffd8a8",i.font=`800 26px ${j}`,i.fillText("図書カード NEXT 取扱店",256,515),i.fillStyle="#ffffff",i.font=`600 20px ${j}`,i.fillText("全国共通 図書カードご贈答にどうぞ",256,555),i.fillStyle="#542617",i.font=`700 22px ${j}`,i.fillText("営業時間 10:00 〜 21:00",256,640),i.fillText("どうぞお気軽にお立ち寄りください",256,685)):(i.fillStyle="#1f1a17",i.fillRect(0,0,512,768),i.strokeStyle="#6e3c23",i.lineWidth=14,i.strokeRect(7,7,498,754),i.fillStyle="#4a2b1b",i.fillRect(14,14,484,140),i.fillStyle="#ffffff",i.font='900 42px "Hiragino Mincho ProN", serif',i.textAlign="center",i.fillText("CAFE MAME 喫茶",256,75),i.fillStyle="#e0a96d",i.font=`700 20px ${j}`,i.fillText("SPECIALTY COFFEE ROASTERY",256,120),i.fillStyle="#ffd875",i.font=`800 28px ${j}`,i.fillText("〜 TODAY’S DRIP 〜",256,195),i.fillStyle="#ffffff",i.font=`700 23px ${j}`,i.fillText("Ethiopia Yirgacheffe G1",256,245),i.fillStyle="#d4a36a",i.font=`500 18px ${j}`,i.fillText("フローラルな香りと華やかな柑橘の酸味",256,278),i.fillStyle="#ffffff",i.font=`700 22px ${j}`,i.fillText("自家製バスクチーズケーキ  ¥500",256,340),i.fillText("クラシックカスタードプリン  ¥450",256,385),i.fillStyle="#4a2b1b",i.fillRect(30,450,452,100),i.fillStyle="#ffd875",i.font=`800 26px ${j}`,i.fillText("自家焙煎 珈琲豆販売",256,492),i.fillStyle="#ffffff",i.font=`600 18px ${j}`,i.fillText("お好みに合わせてお挽きいたします",256,528),i.fillStyle="#e0a96d",i.font=`700 24px ${j}`,i.fillText("テイクアウト OK！",256,610),i.fillStyle="#ffffff",i.font=`600 20px ${j}`,i.fillText("OPEN 8:30 〜 19:30",256,660));const s=new ie(e);return s.colorSpace=he,s.anisotropy=4,_t.set(t,s),s}function sg(){const o="storefront-residential-foyer",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1c2026",e.fillRect(0,0,512,512),e.strokeStyle="#434b57",e.lineWidth=4,e.strokeRect(10,10,492,492),e.fillStyle="#2a313d",e.fillRect(30,30,452,70),e.fillStyle="#d4dbe6",e.font=`700 26px ${j}`,e.textAlign="center",e.fillText("RESIDENCE ENTRANCE",256,65),e.font=`500 16px ${j}`,e.fillText("居住者専用 ・ オートロックシステム",256,88),e.fillStyle="#10141a",e.beginPath(),e.roundRect(136,130,240,320,10),e.fill(),e.strokeStyle="#5a6575",e.lineWidth=3,e.stroke(),e.fillStyle="#06090c",e.beginPath(),e.arc(256,175,24,0,Math.PI*2),e.fill(),e.strokeStyle="#404c5c",e.stroke(),e.fillStyle="#3a86ff",e.beginPath(),e.arc(256,175,8,0,Math.PI*2),e.fill(),e.fillStyle="#1d3328",e.fillRect(176,215,160,40),e.fillStyle="#4ade80",e.font="700 16px monospace",e.textAlign="center",e.fillText("ROOM No. _ _ _",256,240),["1","2","3","4","5","6","7","8","9","消","0","呼"].forEach((r,a)=>{const l=a%3,c=Math.floor(a/3),d=180+l*52,f=275+c*40;e.fillStyle=r==="呼"?"#2563eb":r==="消"?"#dc2626":"#2b3340",e.beginPath(),e.roundRect(d,f,44,32,4),e.fill(),e.fillStyle="#ffffff",e.font=`700 15px ${j}`,e.fillText(r,d+22,f+21)});const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function rg(){const o="cardboard-mikan-box",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#c79862",e.fillRect(0,0,512,512);const i=e.getImageData(0,0,512,512),s=i.data;for(let l=0;l<s.length;l+=4){const c=(Math.random()-.5)*14;s[l]=Math.min(255,Math.max(0,s[l]+c)),s[l+1]=Math.min(255,Math.max(0,s[l+1]+c)),s[l+2]=Math.min(255,Math.max(0,s[l+2]+c))}e.putImageData(i,0,0),e.fillStyle="#b3834e",e.fillRect(0,0,512,28),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fillRect(0,26,512,2),e.fillStyle="#f97316",e.beginPath(),e.arc(120,160,56,0,Math.PI*2),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.ellipse(120,96,26,12,Math.PI/4,0,Math.PI*2),e.ellipse(135,98,22,10,-Math.PI/4,0,Math.PI*2),e.fill(),e.fillStyle="#1e140a",e.font='900 52px "Hiragino Mincho ProN", "Yu Mincho", serif',e.textAlign="left",e.fillText("愛媛みかん",195,145),e.fillStyle="#85200c",e.font=`800 22px ${j}`,e.fillText("極上特選  完熟太陽のめぐみ",198,185),e.fillStyle="#2b1b0d",e.font="700 18px monospace",e.fillText("EHIME MIKAN  L SIZE  10KG",198,215),e.strokeStyle="#c2291d",e.lineWidth=3,e.beginPath(),e.arc(80,310,38,0,Math.PI*2),e.stroke(),e.fillStyle="#c2291d",e.font="800 20px serif",e.textAlign="center",e.fillText("特選",80,305),e.font="700 13px serif",e.fillText("農協保証",80,325),e.fillStyle="#1f1309",e.textAlign="left",e.font="800 32px monospace",e.fillText("↑↑",150,320),e.font=`700 16px ${j}`,e.fillText("取扱注意  水濡厳禁",205,315),e.fillStyle="#1e140a";const r=350;for(let l=r;l<r+120;l+=4)Math.sin(l*9)>-.2&&e.fillRect(l,280,2.5,45);e.font="600 10px monospace",e.fillText("4 901234 567890",r,338);const a=new ie(n);return a.colorSpace=he,a.anisotropy=4,_t.set(o,a),a}function ag(){const o="tokyo-trash-notice-sign",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,512,512),e.strokeStyle="#15803d",e.lineWidth=10,e.strokeRect(5,5,502,502),e.fillStyle="#15803d",e.fillRect(10,10,492,100),e.fillStyle="#ffffff",e.font=`900 38px ${j}`,e.textAlign="center",e.fillText("家庭ごみ集積所",256,58),e.font=`700 16px ${j}`,e.fillText("RESIDENTIAL WASTE COLLECTION POINT",256,92),[{type:"燃やすごみ",days:"毎週  月・木曜日",color:"#dc2626"},{type:"燃やさないごみ",days:"第２・第４水曜日",color:"#2563eb"},{type:"資源ごみ (缶・瓶・PET)",days:"毎週  火曜日",color:"#16a34a"}].forEach((r,a)=>{const l=135+a*62;e.fillStyle=r.color,e.beginPath(),e.roundRect(30,l,165,48,6),e.fill(),e.fillStyle="#ffffff",e.font=`800 17px ${j}`,e.textAlign="center",e.fillText(r.type,112,l+30),e.fillStyle="#1e293b",e.font=`800 24px ${j}`,e.textAlign="left",e.fillText(r.days,215,l+34),e.strokeStyle="#e2e8f0",e.lineWidth=1.5,e.beginPath(),e.moveTo(30,l+55),e.lineTo(482,l+55),e.stroke()}),e.fillStyle="#fefce8",e.strokeStyle="#eab308",e.lineWidth=2,e.beginPath(),e.roundRect(30,330,452,125,8),e.fill(),e.stroke(),e.fillStyle="#854d0e",e.font=`800 18px ${j}`,e.textAlign="left",e.fillText("【 ごみ出しのルールとマナー 】",45,358),e.fillStyle="#334155",e.font=`600 15px ${j}`,e.fillText("● ごみは収集日当日の朝8時までに出してください。",45,388),e.fillText("● カラス被害防止のため、ネットは隙間なく掛けてください。",45,414),e.fillText("● 粗大ごみ・家電リサイクル品は集積所に出せません。",45,440),e.fillStyle="#64748b",e.font=`700 14px ${j}`,e.textAlign="center",e.fillText("東京都 清掃環境事務所  /  町内自治会",256,485);const s=new ie(n);return s.colorSpace=he,s.anisotropy=4,_t.set(o,s),s}function lg(){const o="can-recycle-box-texture",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#1d4ed8",e.fillRect(0,0,512,512),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(12,12,488,488),e.fillStyle="#ffffff",e.font=`900 42px ${j}`,e.textAlign="center",e.fillText("空き缶 ・ ペットボトル",256,85),e.fillStyle="#bfdbfe",e.font=`700 20px ${j}`,e.fillText("CANS & PLASTIC BOTTLES ONLY",256,125),e.strokeStyle="#22c55e",e.lineWidth=14,e.beginPath(),e.arc(256,235,65,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`900 36px ${j}`,e.fillText("リサイクル",256,246),e.fillStyle="#0f172a",e.beginPath(),e.arc(140,360,48,0,Math.PI*2),e.arc(372,360,48,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font=`800 26px ${j}`,e.fillText("缶",140,368),e.fillText("ボトル",372,368),e.fillStyle="#fef08a",e.font=`700 16px ${j}`,e.fillText("※ タバコ・一般ゴミの投げ入れ厳禁",256,455);const i=new ie(n);return i.colorSpace=he,i.anisotropy=4,_t.set(o,i),i}function cg(){const o="crow-net-fine-texture",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="rgba(14, 76, 52, 0.45)",e.fillRect(0,0,256,256),e.strokeStyle="#10b981",e.lineWidth=2.5;const i=16;for(let r=-256;r<512;r+=i)e.beginPath(),e.moveTo(r,0),e.lineTo(r+256,256),e.stroke(),e.beginPath(),e.moveTo(r,256),e.lineTo(r+256,0),e.stroke();e.strokeStyle="#047857",e.lineWidth=8,e.strokeRect(0,0,256,256);const s=new ie(n);return s.wrapS=Ce,s.wrapT=Ce,s.repeat.set(4,4),_t.set(o,s),s}function fg(){const o="park-nameplate-stone",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#22252a",e.fillRect(0,0,256,128);for(let s=0;s<180;s++){const r=Math.random()*256,a=Math.random()*128;e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.25)",e.fillRect(r,a,2,2)}e.strokeStyle="#c5a059",e.lineWidth=4,e.strokeRect(8,8,240,112),e.strokeStyle="#8c6f36",e.lineWidth=1.5,e.strokeRect(14,14,228,100),e.fillStyle="#f0d8a0",e.font=`900 28px ${j}`,e.textAlign="center",e.textBaseline="middle",e.fillText("桜町児童遊園",128,52),e.fillStyle="#c5a059",e.font="600 12px monospace",e.fillText("SAKURA POCKET PARK",128,86);const i=new ie(n);return _t.set(o,i),i}function dg(){const o="park-rules-board",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=320;const e=n.getContext("2d");e.fillStyle="#eaedf1",e.fillRect(0,0,512,320),e.fillStyle="#105238",e.fillRect(0,0,512,64),e.strokeStyle="#ffffff",e.lineWidth=3,e.beginPath(),e.arc(42,32,18,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.font=`800 24px ${j}`,e.textAlign="left",e.fillText("公園の利用案内",72,36),e.font="600 13px sans-serif",e.fillText("PARK REGULATIONS & MANNER",72,54);const i=[{kanji:"ゴミは持ち帰りましょう",sub:"Please take your litter home with you",icon:"🗑️"},{kanji:"たき火・花火など火気厳禁",sub:"No fireworks or open flames permitted",icon:"🔥"},{kanji:"犬の散歩はリード着用・フン始末",sub:"Keep dogs on leash and clean up after pets",icon:"🐕"},{kanji:"夜間はお静かに願いします",sub:"Please be considerate and quiet at night",icon:"🌙"}];let s=100;for(const a of i)e.fillStyle="#105238",e.beginPath(),e.arc(36,s-6,12,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="bold 12px sans-serif",e.textAlign="center",e.fillText("!",36,s-2),e.fillStyle="#1a202c",e.font=`700 18px ${j}`,e.textAlign="left",e.fillText(a.kanji,60,s-4),e.fillStyle="#4a5568",e.font="500 12px sans-serif",e.fillText(a.sub,60,s+14),e.fillStyle="rgba(0,0,0,0.08)",e.fillRect(20,s+24,472,1),s+=50;e.fillStyle="#718096",e.font=`600 12px ${j}`,e.textAlign="right",e.fillText("東京都港区土木部公園緑地課　TEL 03-3578-2111",492,305),e.strokeStyle="#2d3748",e.lineWidth=6,e.strokeRect(0,0,512,320);const r=new ie(n);return _t.set(o,r),r}function hg(){const o="park-community-notice",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=512,n.height=300;const e=n.getContext("2d");e.fillStyle="#9b764d",e.fillRect(0,0,512,300);for(let s=0;s<400;s++){const r=Math.random()*512,a=Math.random()*300;e.fillStyle=Math.random()>.5?"rgba(74, 50, 26, 0.2)":"rgba(180, 145, 100, 0.25)",e.fillRect(r,a,3,3)}e.fillStyle="#fce7f3",e.fillRect(24,25,140,190),e.strokeStyle="#f472b6",e.lineWidth=2,e.strokeRect(24,25,140,190),e.fillStyle="#db2777",e.font=`800 16px ${j}`,e.textAlign="center",e.fillText("桜まつり",94,58),e.font=`600 10px ${j}`,e.fillText("春の夜桜ライトアップ",94,78),e.fillStyle="#4a044e",e.font=`500 9px ${j}`,e.fillText("日時: 4月上旬 18:00~",94,110),e.fillText("場所: 桜町児童遊園",94,130),e.fillText("主催: 桜町自治会",94,150),e.fillStyle="#f43f5e",e.fillText("🌸🏮🌸",94,185),e.fillStyle="#ef4444",e.beginPath(),e.arc(94,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#fef9c3",e.fillRect(184,25,140,190),e.strokeStyle="#eab308",e.lineWidth=2,e.strokeRect(184,25,140,190),e.fillStyle="#854d0e",e.font=`800 15px ${j}`,e.fillText("広域避難場所",254,58),e.font=`600 10px ${j}`,e.fillText("防災・安全マップ",254,78),e.fillStyle="#1c1917",e.font=`500 9px ${j}`,e.fillText("一時集合場所:",254,108),e.fillText("当公園グラウンド",254,126),e.fillText("AED設置: 管理所横",254,146),e.fillText("給水拠点指定場所",254,166),e.fillStyle="#eab308",e.fillText("🔰 非常口 ⛑️",254,192),e.fillStyle="#3b82f6",e.beginPath(),e.arc(254,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(344,25,144,190),e.strokeStyle="#94a3b8",e.lineWidth=1.5,e.strokeRect(344,25,144,190),e.fillStyle="#dc2626",e.font=`800 15px ${j}`,e.fillText("迷子ねこ",416,54),e.font=`600 10px ${j}`,e.fillStyle="#334155",e.fillText("探しています！",416,72),e.fillStyle="#1e293b",e.beginPath(),e.arc(416,110,18,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(402,98),e.lineTo(396,82),e.lineTo(410,93),e.fill(),e.beginPath(),e.moveTo(430,98),e.lineTo(436,82),e.lineTo(422,93),e.fill(),e.fillStyle="#ef4444",e.fillRect(408,124,16,4),e.fillStyle="#475569",e.font=`500 9px ${j}`,e.fillText("名前: ミケ (黒多め)",416,146),e.fillText("赤い首輪・鈴付き",416,162),e.fillText("見かけた方はご連絡を",416,178),e.fillStyle="#10b981",e.beginPath(),e.arc(416,28,4,0,Math.PI*2),e.fill(),e.fillStyle="#3b2716",e.fillRect(0,0,512,18),e.fillStyle="#fef08a",e.font=`800 12px ${j}`,e.textAlign="center",e.fillText("桜町町内会　広報掲示板",256,14),e.strokeStyle="#475569",e.lineWidth=8,e.strokeRect(0,0,512,300);const i=new ie(n);return _t.set(o,i),i}function ug(){const o="park-analog-clock-face",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#faf8f2",e.fillRect(0,0,256,256),e.strokeStyle="#1e242b",e.lineWidth=8,e.beginPath(),e.arc(128,128,120,0,Math.PI*2),e.stroke(),e.strokeStyle="#64748b",e.lineWidth=1.5,e.beginPath(),e.arc(128,128,114,0,Math.PI*2),e.stroke();for(let l=0;l<60;l++){const c=l*Math.PI/30,d=l%5===0,f=d?14:6,u=114,h=u-f;e.strokeStyle=d?"#0f172a":"#94a3b8",e.lineWidth=d?3.5:1.5,e.beginPath(),e.moveTo(128+Math.cos(c)*u,128+Math.sin(c)*u),e.lineTo(128+Math.cos(c)*h,128+Math.sin(c)*h),e.stroke()}e.fillStyle="#0f172a",e.font='bold 22px "Plus Jakarta Sans", sans-serif',e.textAlign="center",e.textBaseline="middle";for(let l=1;l<=12;l++){const c=l*Math.PI/6-Math.PI/2,d=86;e.fillText(l.toString(),128+Math.cos(c)*d,128+Math.sin(c)*d)}e.fillStyle="#64748b",e.font="600 9px monospace",e.fillText("TOKYO PARKS",128,160);const i=(11+50/60)*Math.PI/6-Math.PI/2;e.strokeStyle="#0f172a",e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(i)*52,128+Math.sin(i)*52),e.stroke();const s=50*Math.PI/30-Math.PI/2;e.lineWidth=3.5,e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(s)*78,128+Math.sin(s)*78),e.stroke();const r=22*Math.PI/30-Math.PI/2;e.strokeStyle="#dc2626",e.lineWidth=1.5,e.beginPath(),e.moveTo(128-Math.cos(r)*16,128-Math.sin(r)*16),e.lineTo(128+Math.cos(r)*88,128+Math.sin(r)*88),e.stroke(),e.fillStyle="#0f172a",e.beginPath(),e.arc(128,128,6,0,Math.PI*2),e.fill();const a=new ie(n);return _t.set(o,a),a}function pg(){const o="park-toilet-sign-picto",t=_t.get(o);if(t)return t;const n=document.createElement("canvas");n.width=256,n.height=128;const e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,256,128),e.strokeStyle="#cbd5e1",e.lineWidth=3,e.strokeRect(4,4,248,120),e.fillStyle="#0284c7",e.beginPath(),e.arc(56,36,10,0,Math.PI*2),e.fill(),e.fillRect(46,50,20,28),e.fillRect(48,80,7,24),e.fillRect(57,80,7,24),e.fillStyle="#e11d48",e.beginPath(),e.arc(128,36,10,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(128,50),e.lineTo(142,78),e.lineTo(114,78),e.closePath(),e.fill(),e.fillRect(121,80,6,24),e.fillRect(129,80,6,24),e.fillStyle="#16a34a",e.beginPath(),e.arc(200,36,10,0,Math.PI*2),e.fill(),e.strokeStyle="#16a34a",e.lineWidth=4,e.beginPath(),e.arc(196,76,14,0,Math.PI*2),e.stroke(),e.fillRect(194,52,6,22),e.fillRect(194,66,16,5),e.fillStyle="#334155",e.font=`bold 12px ${j}`,e.textAlign="center",e.fillText("公衆トイレ  TOILETS",128,118);const i=new ie(n);return _t.set(o,i),i}function mg(o,t){const n=new At;n.name="streets_and_terrain";const e=[],i=new $t(110,7);i.rotateX(-Math.PI/2),i.translate(0,.002,0),e.push(i);const s=new $t(5,38.5);s.rotateX(-Math.PI/2),s.translate(16,.002,22.75),e.push(s);const r=new $t(5,38.5);r.rotateX(-Math.PI/2),r.translate(-14,.002,-22.75),e.push(r);for(const p of e){const M=new g(p,i1);M.receiveShadow=!0,n.add(M)}const a=[{w:68.5,d:4,x:-20.75,z:5.5},{w:33.5,d:4,x:35.25,z:5.5},{w:10,d:6,x:0,z:10.5},{w:38.5,d:4,x:-35.75,z:-5.5},{w:63.5,d:4,x:20.25,z:-5.5},{w:3,d:38.5,x:12,z:22.75},{w:3,d:38.5,x:20,z:22.75},{w:3,d:38.5,x:-18,z:-22.75},{w:3,d:38.5,x:-10,z:-22.75}];for(const p of a){const M=new C(p.w,.15,p.d),v=new g(M,r1);v.position.set(p.x,.075,p.z),v.receiveShadow=!0,n.add(v)}const l=new C(9.5,.15,3),c=new g(l,vc);c.position.set(8.75,.075,21),c.receiveShadow=!0,n.add(c);const d=new C(9,.15,3),f=new g(d,vc);f.position.set(0,.075,23.5),f.receiveShadow=!0,n.add(f);const u=new C(18,.15,29),h=new g(u,d1);h.position.set(.5,.075,-22),h.receiveShadow=!0,n.add(h);const m=[{x:0,z:-9.5,w:5.6,d:4},{x:-7.2,z:-22,w:2.8,d:3.6},{x:0,z:-21.5,w:6.2,d:5.8},{x:0,z:-15,w:3.2,d:7.2},{x:-4.2,z:-22,w:3.4,d:2.6},{x:1,z:-27.5,w:3,d:6.5},{x:6,z:-32,w:4.5,d:3.8}];for(const p of m){const M=new C(p.w,.012,p.d),v=new g(M,h1);v.position.set(p.x,.156,p.z),v.receiveShadow=!0,n.add(v)}const _=[{x:5.2,z:-16,w:5.8,d:7.2},{x:-5,z:-14.5,w:4.8,d:6.2},{x:-3.5,z:-33.2,w:7.4,d:4.2}],x=new L({color:5922920,roughness:.9});for(const p of _){const M=new C(p.w+.3,.06,p.d+.3),v=new g(M,x);v.position.set(p.x,.17,p.z),v.receiveShadow=!0,n.add(v);const w=new C(p.w,.065,p.d),P=new g(w,u1);P.position.set(p.x,.18,p.z),P.receiveShadow=!0,n.add(P)}return gg(n),t.add({minX:-55,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:-41.5}),t.add({minX:-55,minY:0,minZ:41.5,maxX:55,maxY:10,maxZ:45}),t.add({minX:-55,minY:0,minZ:-45,maxX:-51.5,maxY:10,maxZ:45}),t.add({minX:51.5,minY:0,minZ:-45,maxX:55,maxY:10,maxZ:45}),gs(n,-51,0,0,!1),gs(n,51,0,0,!1),gs(n,16,0,40,!0),gs(n,-14,0,-40,!0),o.add(n),n}function gg(o){const t=[{x:16,z:0,w:4.2,d:6.8,rotY:0},{x:-14,z:0,w:4.2,d:6.8,rotY:0},{x:0,z:0,w:3.6,d:6.8,rotY:0},{x:16,z:5.5,w:4.8,d:3.2,rotY:Math.PI/2},{x:-14,z:-5.5,w:4.8,d:3.2,rotY:Math.PI/2}];for(const r of t){const l=r.rotY===0?r.w/15:r.d/15,c=r.rotY===0?r.d:r.w;for(let d=0;d<8;d++){const f=new $t(r.rotY===0?l:c,r.rotY===0?c:l);f.rotateX(-Math.PI/2);const u=new g(f,Co);if(r.rotY===0){const h=-r.w/2+d*l*2+l/2;u.position.set(r.x+h,.005,r.z)}else{const h=-r.d/2+d*l*2+l/2;u.position.set(r.x,.005,r.z+h)}o.add(u)}}const n=2.4,e=2.4;for(let r=-50;r<=50;r+=n+e){if(Math.abs(r-16)<3.5||Math.abs(r- -14)<3.5||Math.abs(r)<2.5)continue;const a=new $t(n,.18);a.rotateX(-Math.PI/2);const l=new g(a,Co);l.position.set(r+n/2,.004,0),o.add(l)}const i=[{z:-3.2,x1:-52,x2:-17},{z:-3.2,x1:-11,x2:52},{z:3.2,x1:-52,x2:13},{z:3.2,x1:19,x2:52}];for(const r of i){const a=r.x2-r.x1,l=new $t(a,.15);l.rotateX(-Math.PI/2);const c=new g(l,Co);c.position.set(r.x1+a/2,.004,r.z),o.add(c)}const s=[{x:16,z:3.6,w:4,d:.6},{x:16,z:-3.6,w:4,d:.6},{x:-14,z:3.6,w:4,d:.6},{x:-14,z:-3.6,w:4,d:.6},{x:0,z:3.6,w:3.6,d:.6},{x:0,z:-3.6,w:3.6,d:.6},{x:13.6,z:5.5,w:.6,d:3},{x:18.4,z:5.5,w:.6,d:3}];for(const r of s){const a=new C(r.w,.015,r.d),l=new g(a,so);l.position.set(r.x,.155,r.z),l.receiveShadow=!0,o.add(l)}Tc(o,16,7.5,Math.PI),Tc(o,-14,-7.5,0),xg(o)}function xg(o){const t=new L({map:R1(),roughness:.55,metalness:.8}),n=[{x:-6,z:1.2},{x:16,z:14},{x:-14,z:-14},{x:28,z:-1.2},{x:-30,z:1.4}],e=new yn(.44,24);e.rotateX(-Math.PI/2);for(const a of n){const l=new g(e,t);l.position.set(a.x,.005,a.z),l.receiveShadow=!0,o.add(l)}const i=new $t(.4,.9);i.rotateX(-Math.PI/2);const s=new L({color:2237996,roughness:.4,metalness:.85}),r=[{x:-22,z:3.25},{x:-8,z:3.25},{x:8,z:3.25},{x:26,z:3.25},{x:-22,z:-3.25},{x:-8,z:-3.25},{x:8,z:-3.25},{x:26,z:-3.25},{x:13.75,z:12},{x:18.25,z:12},{x:13.75,z:28},{x:18.25,z:28}];for(const a of r){const l=new g(i,s);l.position.set(a.x,.005,a.z),o.add(l)}}function Tc(o,t,n,e){const i=new $t(3.6,.45);i.rotateX(-Math.PI/2),i.rotateY(e);const s=new g(i,Co);s.position.set(t,.006,n),o.add(s);const r=new on,a=new Float32Array([-.9,.006,-.6,.9,.006,-.6,0,.006,1.2]);r.setAttribute("position",new In(a,3)),r.computeVertexNormals();const l=new g(r,Co);l.position.set(t,0,n+(e===0?-1.8:1.8)),e!==0&&l.rotateY(e),o.add(l)}function gs(o,t,n,e,i){const s=new At,r=new Y(.06,.06,1.1,8),a=new C(4.8,.18,.06),l=new g(r,Le);l.position.set(-2.2,.55,0);const c=new g(r,Le);c.position.set(2.2,.55,0),s.add(l,c);const d=new g(a,so);d.position.set(0,.8,0);const f=new g(a,so);f.position.set(0,.45,0),s.add(d,f),s.position.set(t,n,e),i&&s.rotateY(Math.PI/2),o.add(s)}function _g(o,t,n,e,i,s){const r=new At;r.name="buildings";let a=null,l=null,c=null;const d=[];for(const f of Rf){const u=new At;u.name=`building-${f.id}`;const h=3.2,m=f.floors*h,_=f.w/2,x=f.d/2,p=new me(f.wall),M=new me(f.trim),v=new me(f.balcony),w=new L({color:p,roughness:.82,metalness:.08}),P=new L({color:M,roughness:.65,metalness:.12}),R=new L({color:v,roughness:.75,metalness:.15});if(f.id==="b-sunheights"){const E=wg(u,f,t,n,e,w,P,i,s);a=E.light,d.push(E.update);const I=(f.floors-1)*h,S=new C(f.w,I,f.d),y=new g(S,w);y.position.set(f.x,h+I/2,f.z),y.castShadow=!0,y.receiveShadow=!0,u.add(y),xs(u,f,h,P,R)}else if(f.id==="b-konbini"){const E=vg(u,f,t,n,e,w,P,i,s);l=E.light,d.push(E.update);const I=(f.floors-1)*h,S=new C(f.w,I,f.d),y=new g(S,w);y.position.set(f.x,h+I/2,f.z),y.castShadow=!0,y.receiveShadow=!0,u.add(y),xs(u,f,h,P,R)}else if(f.id==="b-ramen"){const E=yg(u,f,t,n,e,w,P,i,s);c=E.light,d.push(E.update);const I=(f.floors-1)*h,S=new C(f.w,I,f.d),y=new g(S,w);y.position.set(f.x,h+I/2,f.z),y.castShadow=!0,y.receiveShadow=!0,u.add(y),xs(u,f,h,P,R)}else{const E=new C(f.w,m,f.d),I=new g(E,w);I.position.set(f.x,m/2,f.z),I.castShadow=!0,I.receiveShadow=!0,u.add(I),t.add({minX:f.x-_,minY:0,minZ:f.z-x,maxX:f.x+_,maxY:m+2,maxZ:f.z+x});const S=bg(u,f,P,n,e,i,s);S!=null&&S.update&&d.push(S.update),xs(u,f,0,P,R)}Ag(u,f,m,P),Eg(u,f,m),r.add(u)}return o.add(r),{group:r,lobbyLight:a??new we(16769712,1,10),konbiniLight:l??new we(16777215,1,12),ramenLight:c??new we(16750916,1,10),update(f,u){for(const h of d)h(f,u)}}}function wg(o,t,n,e,i,s,r,a,l){const d=t.w/2,f=new At;f.name="lobby-interior-props",o.add(f);const u=7.6,h=8.4,m=.15,_=.35,x=3.2-m,p=new L({map:U1(),roughness:.22,metalness:.08}),M=new C(u,.05,h),v=new g(M,p);v.position.set(t.x,m+.025,t.z),v.receiveShadow=!0,o.add(v);const w=new L({color:16184559,roughness:.5}),P=new C(u,.2,h),R=new g(P,w);R.position.set(t.x,3.2-.1,t.z),o.add(R);const E=4.8,I=5.6,S=new C(E,.08,I),y=new L({color:15789282,roughness:.6}),D=new g(S,y);D.position.set(t.x,3.2-.04,t.z),f.add(D);const k=new C(E+.12,.02,I+.12),H=new g(k,kn);H.position.set(t.x,3.2-.07,t.z),f.add(H);for(const rn of[-1.8,1.8])for(const fn of[-2,2]){const xn=new Y(.12,.12,.04,12),Bs=new g(xn,Ct);Bs.position.set(t.x+rn,3.2-.02,t.z+fn);const ui=new g(new yn(.09,12),kn);ui.rotateX(Math.PI/2),ui.position.set(t.x+rn,3.2-.041,t.z+fn),f.add(Bs,ui)}const J=new L({map:D1(),roughness:.55,metalness:.02}),q=new C(u,x,_),V=new g(q,J);V.position.set(t.x,m+x/2,t.z+h/2-_/2),o.add(V),n.add({minX:t.x-u/2,minY:0,minZ:t.z+h/2-_,maxX:t.x+u/2,maxY:3.2,maxZ:t.z+h/2+1});const Q=new C(_,x,h),X=new g(Q,J);X.position.set(t.x-u/2+_/2,m+x/2,t.z),o.add(X),n.add({minX:t.x-d-.5,minY:0,minZ:t.z-h/2,maxX:t.x-u/2+_,maxY:3.2,maxZ:t.z+h/2});const rt=new C(_,x,h),at=new g(rt,J);at.position.set(t.x+u/2-_/2,m+x/2,t.z),o.add(at),n.add({minX:t.x+u/2-_,minY:0,minZ:t.z-h/2,maxX:t.x+d+.5,maxY:3.2,maxZ:t.z+h/2});const dt=2.4,wt=(u-dt)/2,vt=new C(wt,x,_),B=new g(vt,J);B.position.set(t.x-u/2+wt/2,m+x/2,t.z-h/2+_/2),o.add(B),n.add({minX:t.x-u/2,minY:0,minZ:t.z-h/2,maxX:t.x-dt/2,maxY:3.2,maxZ:t.z-h/2+_});const G=new C(wt,x,_),Z=new g(G,J);Z.position.set(t.x+u/2-wt/2,m+x/2,t.z-h/2+_/2),o.add(Z),n.add({minX:t.x+dt/2,minY:0,minZ:t.z-h/2,maxX:t.x+u/2,maxY:3.2,maxZ:t.z-h/2+_});const st=new C(dt,.7,_),pt=new g(st,r);pt.position.set(t.x,3.2-.35,t.z-h/2+_/2),o.add(pt);const Pt=new qt({map:A1(),toneMapped:!1}),Ft=new g(new C(.8,.35,.08),Pt);Ft.position.set(t.x,3.2-.55,t.z-h/2+_+.02),o.add(Ft);const Jt=new C(1.15,2.3,.06),Nt=new g(Jt,Fe);Nt.position.set(t.x-.65,m+1.15,t.z-h/2+_/2);const jt=new g(Jt,Fe);jt.position.set(t.x+.65,m+1.15,t.z-h/2+_/2),o.add(Nt,jt);const U=new C(2.4,.015,1.4),Vt=new L({color:2955812,roughness:.95}),It=new g(U,Vt);It.position.set(t.x,m+.035,t.z-h/2+1.2),o.add(It);const zt=new Y(.18,.16,.65,12),Tt=new g(zt,Ct);Tt.position.set(t.x+1.5,m+.325,t.z-h/2+.6),o.add(Tt);for(let rn=0;rn<3;rn++){const fn=new Ge(.04,.012,6,12,Math.PI),xn=new g(fn,Le);xn.position.set(t.x+1.45+rn*.05,m+.72,t.z-h/2+.6),o.add(xn)}const Wt=new Y(.08,.08,.42,10),St=new L({color:14231064,roughness:.3,metalness:.2}),A=new g(Wt,St);A.position.set(t.x-1.5,m+.28,t.z-h/2+.5),o.add(A);const b=new C(.35,.5,.06),W=new g(b,Ct);W.position.set(t.x+dt/2+.4,m+1.35,t.z-h/2-.05),o.add(W);const nt=zo("サンハイツ SUN HEIGHTS","#1d2530","#e2ebf5","RESIDENCE 1-24",512,128),it=new g(new C(2.6,.65,.12),nt);it.position.set(t.x,3.2-.25,t.z-h/2-.08),o.add(it);const et=t.x-u/2+_,xt=.28,mt=1.35,ft=2.6,Lt=et+xt/2+.01,ct=t.z-.5,bt=new C(xt,mt,ft),Ht=new L({color:4870749,roughness:.3,metalness:.6}),Kt=new g(bt,Ht);Kt.position.set(Lt,m+1.25,ct),f.add(Kt);const Dt=new L({map:z1(),roughness:.25,metalness:.5}),oe=new g(new $t(ft,mt),Dt);oe.rotateY(Math.PI/2),oe.position.set(Lt+xt/2+.005,m+1.25,ct),f.add(oe);const Qt=new C(.38,.04,ft+.1),pe=new g(Qt,Ct);pe.position.set(et+.19,m+.56,ct),f.add(pe);const z=new C(.32,.45,.45),yt=new L({color:2250043,roughness:.4}),tt=new g(z,yt);tt.position.set(et+.18,m+.23,ct+ft/2-.3),f.add(tt);const ot=new g(new C(.24,.03,.06),Ct);ot.position.set(et+.18,m+.46,ct+ft/2-.3),f.add(ot);const gt=.44,ut=1.95,Gt=1.6,se=et+gt/2+.01,Ee=t.z+2.1,re=new g(new C(gt,ut,Gt),new L({color:2041392,roughness:.35,metalness:.5}));re.position.set(se,m+ut/2,Ee),f.add(re);const De=new L({map:F1(),roughness:.3,metalness:.4}),ze=new g(new $t(Gt,ut),De);ze.rotateY(Math.PI/2),ze.position.set(se+gt/2+.005,m+ut/2,Ee),f.add(ze),n.add({minX:t.x-u/2,minY:0,minZ:t.z-2,maxX:t.x-u/2+.85,maxY:2.4,maxZ:t.z+3.1}),e.add({id:"apt-mailboxes",x:et+.95,z:t.z+.6,radius:2.2,prompt:"Check Mail & Parcel Lockers",onInteract:()=>{i.show("Apartment #304 (Relzzy): Tokyo Gas statement, local izakaya coupon, and a notification: Delivery Locker #3 is holding your Amazon parcel!")}});const Oe=t.x+u/2-_,Ae=1.15,ge=1.05,Ne=2.4,fe=Oe-Ae/2-.2,te=t.z+.9,je=new L({map:N1(),roughness:.4,metalness:.05}),Ve=new g(new C(Ae,ge,Ne),je);Ve.position.set(fe,m+ge/2,te),Ve.castShadow=!0,f.add(Ve);const Ze=new C(.04,.02,Ne-.04),hn=new g(Ze,kn);hn.position.set(fe-Ae/2-.01,m+ge-.02,te),f.add(hn);const ve=new C(Ae+.08,.06,Ne+.08),Re=new L({color:16119803,roughness:.18,metalness:.08}),Xt=new g(ve,Re);Xt.position.set(fe,m+ge+.03,te),f.add(Xt);const Yt=new C(.02,.45,Ne*.75),T=new g(Yt,Fe);T.position.set(fe-Ae/2+.05,m+ge+.28,te+.2),f.add(T);const F=new g(new Y(.05,.06,.02,12),Ct),$=new g(new be(.045,12,8,0,Math.PI*2,0,Math.PI/2),new L({color:13938487,roughness:.2,metalness:.8})),K=new g(new Y(.008,.008,.03,8),Ct);F.position.set(fe-Ae/4,m+ge+.07,te-.5),$.position.set(fe-Ae/4,m+ge+.08,te-.5),K.position.set(fe-Ae/4,m+ge+.125,te-.5),f.add(F,$,K);const O=new g(new C(.28,.015,.22),new L({color:2367002,roughness:.8})),ht=new g(new C(.26,.016,.2),new L({color:16514040,roughness:.5}));O.position.set(fe-Ae/4,m+ge+.065,te-.1),ht.position.set(fe-Ae/4,m+ge+.075,te-.1),f.add(O,ht);const Et=new g(new Y(.015,.02,.03,8),Ct);Et.position.set(fe-Ae/4+.18,m+ge+.075,te-.1);const kt=new g(new Y(.004,.004,.14,6),Ct);kt.position.set(fe-Ae/4+.18,m+ge+.14,te-.1),kt.rotateZ(.15),f.add(Et,kt);const Ot=new g(new C(.2,.05,.18),new L({color:2040616,roughness:.4}));Ot.position.set(fe+.05,m+ge+.08,te+.6);const ee=new g(new C(.06,.04,.2),new L({color:1119773,roughness:.3}));ee.position.set(fe+.02,m+ge+.11,te+.6),f.add(Ot,ee);const ae=new g(new Y(.06,.07,.02,10),Ct);ae.position.set(fe+.15,m+ge+.07,te-.6);const lt=new g(new Y(.012,.012,.28,8),Ct);lt.position.set(fe+.15,m+ge+.21,te-.6);const Mt=new g(new C(.18,.08,.1),new L({color:674347,roughness:.3,metalness:.2}));Mt.position.set(fe+.12,m+ge+.33,te-.6),f.add(ae,lt,Mt);const Zt=new we(16768928,1.2,3.5);Zt.position.set(fe+.12,m+ge+.3,te-.6),l?l.register({x:fe+.12,y:m+ge+.3,z:te-.6,color:16768928,intensity:1.2,distance:3.5,zone:"Lobby"}):f.add(Zt);const ne=zo("管理事務室","#18202c","#d4af37","CONCIERGE & MGMT",256,128),ye=new g(new $t(.24,.12),ne);ye.rotateY(-Math.PI/2),ye.position.set(fe-Ae/2-.005,m+ge+.08,te-.8),f.add(ye);const le=new g(new Y(.25,.25,.04,6),Ct);le.position.set(fe+.45,m+.06,te+.1);const Ut=new g(new Y(.025,.025,.45,8),Ct);Ut.position.set(fe+.45,m+.28,te+.1);const qe=new g(new C(.44,.06,.42),new L({color:1580582,roughness:.7}));qe.position.set(fe+.45,m+.52,te+.1);const xe=new g(new C(.05,.44,.4),new L({color:2239030,roughness:.6}));xe.position.set(fe+.64,m+.74,te+.1),f.add(le,Ut,qe,xe);const Qe=new g(new C(.08,.6,.45),new L({color:4007959,roughness:.6}));Qe.position.set(Oe-.05,m+1.5,te-.6),f.add(Qe);const Mn=new g(new C(.06,.55,.85),new L({color:1119773,roughness:.3}));Mn.position.set(Oe-.04,m+1.65,te+.6);const ke=new g(new $t(.8,.5),new qt({color:2245717}));ke.rotateY(-Math.PI/2),ke.position.set(Oe-.075,m+1.65,te+.6),f.add(Mn,ke);const hi=new L({map:O1(),roughness:.6}),Me=new g(new $t(1.6,.8),hi);Me.rotateY(-Math.PI/2),Me.position.set(Oe-.015,m+1.65,te-.2),f.add(Me),n.add({minX:fe-Ae/2-.1,minY:0,minZ:te-Ne/2-.1,maxX:t.x+u/2,maxY:2.2,maxZ:te+Ne/2+.2}),e.add({id:"apt-reception-bell",x:fe-Ae/2-.4,z:te-.5,radius:1.8,prompt:"Ring Concierge Desk Bell",onInteract:()=>{a==null||a.playDeskBellSound(),i.show('*Ting!* Resident Manager: "Konnichiwa! Welcome back to Sun Heights. All parcel lockers and facilities are operational."')}}),e.add({id:"apt-notice-board",x:fe-Ae/2-.4,z:te-.1,radius:1.8,prompt:"Read Resident Notices",onInteract:()=>{i.show("[Lobby Notices] ① Trash: Burnable Mon/Thu, Recyclable Wed. ② Annual fire equipment check this Saturday. ③ Please collapse Amazon cardboard boxes.")}});const Sn=new L({map:k1(),roughness:.35,metalness:.2}),Gn=new g(new $t(1.4,1.05),Sn);Gn.rotateY(-Math.PI/2),Gn.position.set(Oe-.015,m+1.6,t.z-2.2),f.add(Gn);const We=1.4,sn=.55,un=Oe-sn/2-.25,Qn=t.z-1.2,Lf=new C(sn,.06,We),Df=new L({color:2825492,roughness:.7}),La=new g(Lf,Df);La.position.set(un,m+.22,Qn);const Uf=new C(sn-.04,.18,We-.04),Nf=new L({color:8143650,roughness:.5}),Da=new g(Uf,Nf);Da.position.set(un,m+.33,Qn);for(const rn of[-sn/2+.08,sn/2-.08])for(const fn of[-We/2+.08,We/2-.08]){const xn=new g(new Y(.02,.015,.22,8),Ct);xn.position.set(un+rn,m+.11,Qn+fn),f.add(xn)}f.add(La,Da),n.add({minX:un-sn/2,minY:0,minZ:Qn-We/2,maxX:Oe,maxY:1,maxZ:Qn+We/2});const zf=new Y(.24,.18,.55,12),Ff=new L({color:16119285,roughness:.3}),Ua=new g(zf,Ff),Na=t.x-u/2+.8,za=t.z-h/2+.9;Ua.position.set(Na,m+.275,za),f.add(Ua);const Of=new L({color:3043136,roughness:.4});for(let rn=0;rn<7;rn++){const fn=new He(.18,.65,5);fn.rotateX(.4);const xn=new g(fn,Of);xn.position.set(Na,m+.55,za),xn.rotateY(rn*Math.PI*2/7),f.add(xn)}const Pi=2,Un=2.4,pn=t.z+h/2-_-.05,Us=new L({color:8153418,roughness:.25,metalness:.7}),Fa=new g(new C(.12,Un+.06,.08),Us);Fa.position.set(t.x-Pi/2-.06,m+Un/2,pn);const Oa=new g(new C(.12,Un+.06,.08),Us);Oa.position.set(t.x+Pi/2+.06,m+Un/2,pn);const ka=new g(new C(Pi+.24,.12,.08),Us);ka.position.set(t.x,m+Un+.06,pn),f.add(Fa,Oa,ka);const kf=new C(.98,Un,.06),Bf=new C(.98,Un,.06),ko=new L({color:9081501,roughness:.25,metalness:.75}),Ns=new g(kf,ko),zs=new g(Bf,ko);Ns.position.set(t.x-.5,m+Un/2,pn),zs.position.set(t.x+.5,m+Un/2,pn),f.add(Ns,zs);const Gf=new $t(.45,.22),Hf=new qt({color:16755234}),Ba=new g(Gf,Hf);Ba.position.set(t.x,m+Un+.22,pn+.05),f.add(Ba);const Ga=new g(new C(.12,.28,.03),Ct);Ga.position.set(t.x+Pi/2+.35,m+1.25,pn+.03);const Fs=new g(new Y(.025,.025,.02,10),kn);Fs.rotateX(Math.PI/2),Fs.position.set(t.x+Pi/2+.35,m+1.28,pn+.05),f.add(Ga,Fs);const mn=2,Nn=1.8,ti=2.5,gn=pn+Nn/2+.05,Ha=new g(new C(mn,.04,Nn),p);Ha.position.set(t.x,m+.02,gn),f.add(Ha);const Va=new g(new C(mn,.08,Nn),Ct);Va.position.set(t.x,m+ti,gn),f.add(Va);const Vf=new C(mn-.1,ti-.2,.04),Wf=new L({color:13424352,roughness:.05,metalness:.9}),Wa=new g(Vf,Wf);Wa.position.set(t.x,m+ti/2,gn+Nn/2-.02),f.add(Wa);const Xa=new C(.04,ti,Nn),Ya=new g(Xa,ko);Ya.position.set(t.x-mn/2+.02,m+ti/2,gn);const Za=new g(Xa,ko);Za.position.set(t.x+mn/2-.02,m+ti/2,gn),f.add(Ya,Za);const qa=new Y(.02,.02,mn-.2,8);qa.rotateZ(Math.PI/2);const $a=new g(qa,Ct);$a.position.set(t.x,m+.9,gn+Nn/2-.1),f.add($a);const Ka=new g(new C(.08,.7,.14),Ct);Ka.position.set(t.x+mn/2-.06,m+1.25,gn-.2),f.add(Ka);const Ja=new we(16775904,2,5.5);Ja.position.set(t.x,m+ti-.15,gn),l?l.register({x:t.x,y:m+ti-.15,z:gn,color:16775904,intensity:2,distance:5.5,zone:"Lobby"}):f.add(Ja),n.add({minX:t.x-mn/2-.2,minY:0,minZ:gn+Nn/2-.1,maxX:t.x+mn/2+.2,maxY:3.2,maxZ:gn+Nn/2+.3}),n.add({minX:t.x-mn/2-.2,minY:0,minZ:pn,maxX:t.x-mn/2+.1,maxY:3.2,maxZ:gn+Nn/2}),n.add({minX:t.x+mn/2-.1,minY:0,minZ:pn,maxX:t.x+mn/2+.2,maxY:3.2,maxZ:gn+Nn/2});let ho=!1;e.add({id:"apt-elevator",x:t.x+Pi/2+.35,z:t.z+h/2-.8,radius:1.8,prompt:()=>ho?"Step into Elevator":"Call Elevator [Floor 1]",onInteract:()=>{ho=!ho,ho?(a==null||a.playElevatorChime(),i.show("*Ding* Elevator arrives at 1F. The champagne steel doors slide open.")):i.show("The elevator doors glide shut softly.")}});const Os=new we(16771279,2.2,16,1.1);Os.position.set(t.x,3.2-.25,t.z);const ja=new we(16769200,1.8,8,1.2);ja.position.set(fe,3.2-.25,te);const Qa=new we(16770760,1.8,8,1.2);Qa.position.set(t.x,3.2-.25,pn-1.2),l?(l.register({x:t.x,y:3.2-.25,z:t.z,color:16771279,intensity:2.2,distance:16,decay:1.1,zone:"Lobby"}),l.register({x:fe,y:3.2-.25,z:te,color:16769200,intensity:1.8,distance:8,decay:1.2,zone:"Lobby"}),l.register({x:t.x,y:3.2-.25,z:pn-1.2,color:16770760,intensity:1.8,distance:8,decay:1.2,zone:"Lobby"})):(o.add(Os),o.add(ja),o.add(Qa));let Bo=0,Go=0,ks=!1;return{light:Os,update:(rn,fn)=>{const xn=(fn.x-t.x)**2+(fn.z-t.z)**2;f.visible=xn<784;const ui=Math.hypot(fn.x-t.x,fn.z-(t.z-h/2))<2.6?1:0;ui>.5&&!ks?(a==null||a.playSlidingDoorSound(),ks=!0):ui<.5&&(ks=!1),Bo+=(ui-Bo)*Math.min(1,rn*5),Nt.position.x=t.x-.65-Bo*.75,jt.position.x=t.x+.65+Bo*.75,f.visible&&(Go+=((ho?1:0)-Go)*Math.min(1,rn*4),Ns.position.x=t.x-.5-Go*.75,zs.position.x=t.x+.5+Go*.75)}}}function vg(o,t,n,e,i,s,r,a,l){const h=3.0500000000000003,m=.35,_=new At;_.name="konbini-interior-props",o.add(_);const x=new C(9.8,.05,11.4),p=new g(x,y1);p.position.set(t.x,.15+.025,t.z),p.receiveShadow=!0,o.add(p);const M=new C(9.8,.2,11.4),v=new L({color:16120058,roughness:.5}),w=new g(M,v);w.position.set(t.x,3.2-.1,t.z),o.add(w);const P=new L({map:P1(),roughness:.3,metalness:.05}),R=new C(m,h,11.4),E=new g(R,s);E.position.set(t.x+9.8/2-m/2,.15+h/2,t.z),o.add(E),n.add({minX:t.x+9.8/2-m,minY:0,minZ:t.z-11.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+11.4/2});const I=new g(new C(9.8,h,.04),P);I.position.set(t.x,.15+h/2,t.z+11.4/2-.02);const S=new g(new C(t.w,3.2,m),s);S.position.set(t.x,3.2/2,t.z+t.d/2-m/2),o.add(I,S);const y=new L({color:3818062,roughness:.6,metalness:.4}),D=new g(new C(1,2.1,.06),y);D.position.set(t.x-2.5,1.05,t.z+t.d/2+.01);const k=new g(new C(.5,.6,.22),Ct);k.position.set(t.x+2,1.5,t.z+t.d/2+.08),o.add(D,k),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z+11.4/2-m,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const H=new g(new C(9.8,h,.04),P);H.position.set(t.x,.15+h/2,t.z-11.4/2+.02);const J=new g(new C(t.w,3.2,m),s);J.position.set(t.x,3.2/2,t.z-t.d/2+m/2),o.add(H,J),n.add({minX:t.x-9.8/2,minY:0,minZ:t.z-t.d/2-1,maxX:t.x+9.8/2,maxY:3.2,maxZ:t.z-11.4/2+m});const q=2.4,V=(11.4-q)/2,Q=new C(.1,2.4,V),X=new g(Q,Fe);X.position.set(t.x-9.8/2+.05,.15+1.2,t.z+11.4/2-V/2);const rt=new C(.1,2.4,V),at=new g(rt,Fe);at.position.set(t.x-9.8/2+.05,.15+1.2,t.z-11.4/2+V/2),o.add(X,at),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z+q/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z+11.4/2}),n.add({minX:t.x-9.8/2-.2,minY:0,minZ:t.z-11.4/2,maxX:t.x-9.8/2+.3,maxY:3.2,maxZ:t.z-q/2});const dt=new C(.06,2.3,1.15),wt=new g(dt,Fe),vt=new g(dt,Fe);wt.position.set(t.x-9.8/2+.05,.15+1.15,t.z+.6),vt.position.set(t.x-9.8/2+.05,.15+1.15,t.z-.6),o.add(wt,vt);const B=new C(.4,.8,11.4),G=new g(B,r);G.position.set(t.x-9.8/2+.2,3.2-.4,t.z),o.add(G);const Z=zo("CONVENIENCE 24H","#0c6c44","#ffffff","FAMILY STORE",512,160),st=new g(new $t(7.5,.95),Z);st.rotateY(-Math.PI/2),st.position.set(t.x-9.8/2-.05,3.2-.4,t.z),o.add(st);const pt=8.6,Pt=new C(.65,2.4,pt),Ft=new L({color:1317410,roughness:.3,metalness:.5}),Jt=new g(Pt,Ft);Jt.position.set(t.x+9.8/2-.5,.15+1.2,t.z),_.add(Jt);const Nt=new qt({map:I1(),toneMapped:!1}),jt=new g(new $t(pt,2.2),Nt);jt.rotateY(-Math.PI/2),jt.position.set(t.x+9.8/2-.84,.15+1.2,t.z),_.add(jt),n.add({minX:t.x+9.8/2-1.1,minY:0,minZ:t.z-pt/2,maxX:t.x+9.8/2,maxY:2.6,maxZ:t.z+pt/2}),e.add({id:"konbini-drinks",x:t.x+9.8/2-1.4,z:t.z,radius:2,prompt:"Open Beverage Chiller & Grab Drink",onInteract:()=>{i.show("Cold blast of air! Grabbed an ice-cold Pocari Sweat and Melty Blend Green Tea.")}}),Ec(_,t.x+.8,.15,t.z+1.8,n),Ec(_,t.x+.8,.15,t.z-2.2,n),e.add({id:"konbini-shelf-noodles",x:t.x+.8,z:t.z+1.8,radius:1.8,prompt:"Browse Cup Noodles & Snacks",onInteract:()=>{i.show("Nissin Seafood Cup Noodles, Curry Ramen, Calbee Seaweed Chips, and Matcha Pocky in stock.")}}),e.add({id:"konbini-shelf-bento",x:t.x+.8,z:t.z-2.2,radius:1.8,prompt:"Inspect Bento & Onigiri Shelf",onInteract:()=>{i.show("Spicy salmon onigiri, tuna mayo rice ball, and hot tonkatsu bento lunchbox ready to eat.")}});const U=3.6,Vt=1.05,It=.98,zt=new C(Vt,It,U),Tt=new L({map:C1(),roughness:.25,metalness:.05}),Wt=new g(zt,Tt);Wt.position.set(t.x-2.2,.15+It/2,t.z-3.4),_.add(Wt);const St=new C(Vt+.08,.06,U+.08),A=new L({color:2040616,roughness:.25,metalness:.15}),b=new g(St,A);b.position.set(t.x-2.2,.15+It+.03,t.z-3.4),_.add(b),n.add({minX:t.x-2.2-Vt/2-.1,minY:0,minZ:t.z-3.4-U/2,maxX:t.x-2.2+Vt/2+.1,maxY:1.5,maxZ:t.z-3.4+U/2});const W=new g(new Y(.04,.04,.2,8),Ct);W.position.set(t.x-2.2,.15+It+.16,t.z-3.8);const nt=new g(new C(.36,.26,.04),new qt({color:1740620}));nt.position.set(t.x-2.2,.15+It+.3,t.z-3.8),nt.rotateX(-.2),_.add(W,nt);const it=new g(new C(.14,.06,.2),new L({color:1118481,roughness:.3}));it.position.set(t.x-1.85,.15+It+.09,t.z-3.6),it.rotateX(.15),_.add(it);const et=new C(.18,.02,.14),xt=new L({color:30668,roughness:.3}),mt=new g(et,xt);mt.position.set(t.x-1.85,.15+It+.07,t.z-4),_.add(mt);const ft=.95,Lt=.65,ct=.55,bt=new At;bt.position.set(t.x-2,.15+It+.06,t.z-2.3);const Ht=new g(new C(ct,Lt,ft),Ct);Ht.position.set(0,Lt/2,0),bt.add(Ht);const Kt=new qt({map:L1(),toneMapped:!1}),Dt=new g(new $t(ft*.95,.22),Kt);Dt.rotateY(Math.PI/2),Dt.position.set(ct/2+.01,Lt-.12,0),bt.add(Dt);const oe=new g(new $t(ft*.95,Lt*.55),Fe);oe.rotateY(Math.PI/2),oe.position.set(ct/2+.01,Lt*.38,0),bt.add(oe);const Qt=new C(.08,.035,.14),pe=new L({color:14254616,roughness:.85});for(let ve=0;ve<3;ve++){const Re=new g(Qt,pe);Re.position.set(0,.18,-.28+ve*.28),bt.add(Re)}const z=new be(.055,10,8);z.scale(1,.6,1);const yt=new L({color:16776437,roughness:.9});for(let ve=0;ve<3;ve++){const Re=new g(z,yt);Re.position.set(0,.36,-.28+ve*.28),bt.add(Re)}const tt=new we(16742161,2.2,4.5);tt.position.set(0,Lt-.1,0),l?l.register({x:t.x-2,y:.15+It+.06+Lt-.1,z:t.z-2.3,color:16742161,intensity:2.2,distance:4.5,zone:"Konbini"}):bt.add(tt),_.add(bt);const ot=new C(.52,.45,.48),gt=new g(ot,Ct);gt.position.set(t.x-2.8,.15+It+.28,t.z-4.5),_.add(gt);const ut=new C(.42,.62,.42),Gt=new L({color:2040616,roughness:.3,metalness:.6}),se=new g(ut,Gt);se.position.set(t.x-2.8,.15+It+.36,t.z-1.8),_.add(se);const Ee=new C(.35,1.25,2.6),re=new L({color:4015182,metalness:.6,roughness:.3}),De=new g(Ee,re);De.position.set(t.x-9.8/2+.65,.15+.65,t.z+3.4),_.add(De);const ze=[14231064,1599700,2066488,15902298,9055202,16738740];for(let ve=0;ve<8;ve++){const Re=new g(new C(.06,.24,.28),new L({color:ze[ve%ze.length],roughness:.4}));Re.position.set(t.x-9.8/2+.68,.15+.85,t.z+2.3+ve*.3),Re.rotateZ(.2),_.add(Re)}const Oe=new C(.75,1.95,.68),Ae=new L({color:1005876,roughness:.35}),ge=new g(Oe,Ae);ge.position.set(t.x-9.8/2+.55,.15+.98,t.z-4.6),_.add(ge);const Ne=new g(new $t(.44,.32),new qt({color:3728798}));Ne.rotateY(Math.PI/2),Ne.position.set(t.x-9.8/2+.94,.15+1.35,t.z-4.6),_.add(Ne),e.add({id:"konbini-famichiki",x:t.x-2,z:t.z-2.3,radius:1.8,prompt:"Buy Hot FamiChiki Fried Chicken [¥220]",onInteract:()=>{i.show("*Warm & Crispy!* You received piping hot FamiChiki in its tear-open paper pouch.")}}),e.add({id:"konbini-pay",x:t.x-1.8,z:t.z-3.6,radius:1.8,prompt:"Pay at Register with Suica / Cash [¥420]",onInteract:()=>{i.show('*Pii-rin!* "Arigatou gozaimashita!" Suica card accepted.')}});const fe=new we(16777215,2.8,18,1.1);fe.position.set(t.x,3.2-.35,t.z);const te=new we(16774634,2,9,1.2);te.position.set(t.x-2,3.2-.35,t.z-3.2);const je=new we(15792383,2,14,1.2);je.position.set(t.x+1.8,3.2-.35,t.z),l?(l.register({x:t.x,y:3.2-.35,z:t.z,color:16777215,intensity:2.8,distance:18,decay:1.1,zone:"Konbini"}),l.register({x:t.x-2,y:3.2-.35,z:t.z-3.2,color:16774634,intensity:2,distance:9,decay:1.2,zone:"Konbini"}),l.register({x:t.x+1.8,y:3.2-.35,z:t.z,color:15792383,intensity:2,distance:14,decay:1.2,zone:"Konbini"})):(o.add(fe),o.add(te),o.add(je));for(let ve=-3.2;ve<=3.2;ve+=2.2){const Re=new At;Re.position.set(t.x,3.2-.08,t.z+ve);const Xt=new g(new C(4.2,.08,.35),Ct);Re.add(Xt);const Yt=new g(new C(4,.03,.08),kn);Yt.position.set(0,-.04,-.08);const T=new g(new C(4,.03,.08),kn);T.position.set(0,-.04,.08),Re.add(Yt,T),_.add(Re)}let Ve=0,Ze=!1;return{light:fe,update:(ve,Re)=>{const Xt=(Re.x-t.x)**2+(Re.z-t.z)**2;_.visible=Xt<784;const T=Math.hypot(Re.x-(t.x-9.8/2),Re.z-t.z)<2.8?1:0;T>.5&&!Ze?(a==null||a.playFamilyMartChime(),a==null||a.playSlidingDoorSound(),Ze=!0):T<.5&&(Ze=!1),Ve+=(T-Ve)*Math.min(1,ve*5),wt.position.z=t.z+.6+Ve*.7,vt.position.z=t.z-.6-Ve*.7}}}function Ec(o,t,n,e,i){const l=new C(.95,.16,4.8),c=new L({color:15265008,roughness:.35,metalness:.4}),d=new g(l,c);d.position.set(t,n+.08,e),d.castShadow=!0,o.add(d);const f=new C(.04,1.55,4.8),u=new L({color:16777215,roughness:.4}),h=new g(f,u);h.position.set(t,n+1.55/2,e),o.add(h);const m=new L({color:883270,roughness:.35}),_=new C(.95+.04,1.55,.08),x=new g(_,m);x.position.set(t,n+1.55/2,e-4.8/2);const p=new g(_,m);p.position.set(t,n+1.55/2,e+4.8/2),o.add(x,p);const M=zo("新発売 NEW","#ffaa00","#221100","RECOMMENDED",256,128),v=new g(new $t(.7,.35),M);v.position.set(t,n+1.55-.25,e-4.8/2-.05);const w=new g(new $t(.7,.35),M);w.position.set(t,n+1.55-.25,e+4.8/2+.05),w.rotateY(Math.PI),o.add(v,w);const P=new L({color:16119802,roughness:.3,metalness:.2}),R=new qt({color:14231064}),E=new qt({color:32972}),I=new L({color:14231064,roughness:.4}),S=new L({color:1599700,roughness:.4}),y=new L({color:14264358,roughness:.3,metalness:.4}),D=new L({color:2066488,roughness:.4}),k=new L({color:15887133,roughness:.4}),H=new L({color:1579032,roughness:.8}),J=new L({color:16316664,roughness:.5});for(let q=0;q<4;q++){const V=n+.22+q*.38;for(const Q of[-1,1]){const X=new C(.42,.03,4.7),rt=new g(X,P);rt.position.set(t+Q*.24,V,e),o.add(rt);const at=new C(.02,.04,4.8-.1),dt=new g(at,q%2===0?R:E);if(dt.position.set(t+Q*.45,V,e),o.add(dt),q===3){const wt=new Y(.055,.042,.12,10),vt=14;for(let B=0;B<vt;B++){const G=e-2.4+.35+B*.3,Z=B%3===0?I:B%3===1?S:y,st=new g(wt,Z);st.position.set(t+Q*.26,V+.075,G);const pt=new yn(.057,10);pt.rotateX(-Math.PI/2);const Pt=new g(pt,J);Pt.position.set(t+Q*.26,V+.136,G),o.add(st,Pt)}}else if(q===2){const wt=new C(.04,.16,.09),vt=16;for(let B=0;B<vt;B++){const G=e-2.4+.3+B*.26,Z=B%4===0?I:B%4===1?D:B%4===2?k:S,st=new g(wt,Z);st.position.set(t+Q*.26,V+.095,G),o.add(st)}}else if(q===1){const wt=new He(.055,.09,3),vt=new C(.22,.05,.16);for(let B=0;B<10;B++){const G=e-2.4+.4+B*.42;if(B%2===0){const Z=new g(wt,H);Z.position.set(t+Q*.26,V+.06,G),o.add(Z)}else{const Z=new g(vt,H);Z.position.set(t+Q*.26,V+.04,G);const st=new g(new C(.18,.02,.12),J);st.position.set(t+Q*.26,V+.066,G);const pt=new g(new C(.08,.025,.06),y);pt.position.set(t+Q*.26,V+.08,G),o.add(Z,st,pt)}}}else{const wt=new Y(.04,.04,.14,8);for(let vt=0;vt<14;vt++){const B=e-2.4+.35+vt*.3,G=vt%3===0?D:vt%3===1?S:y,Z=new g(wt,G);Z.position.set(t+Q*.26,V+.08,B),o.add(Z)}}}}i.add({minX:t-.95/2-.1,minY:n,minZ:e-4.8/2,maxX:t+.95/2+.1,maxY:n+1.55,maxZ:e+4.8/2})}function yg(o,t,n,e,i,s,r,a,l){const h=3.0500000000000003,m=.35,_=new At;_.name="ramen-interior-props",o.add(_);const x=new L({map:X1(),roughness:.45,metalness:.08}),p=new C(5.8,.05,7.4),M=new g(p,x);M.position.set(t.x,.15+.025,t.z),M.receiveShadow=!0,o.add(M);const v=new L({color:2364940,roughness:.7}),w=new C(5.8,.2,7.4),P=new g(w,v);P.position.set(t.x,3.2-.1,t.z),o.add(P);const R=new L({color:4006932,roughness:.6});for(const lt of[-1.8,0,1.8]){const Mt=new g(new C(5.8,.16,.18),R);Mt.position.set(t.x,3.2-.16,t.z+lt),o.add(Mt)}const E=new L({map:W1(),roughness:.6,metalness:.02}),I=new C(5.8,h,m),S=new g(I,E);S.position.set(t.x,.15+h/2,t.z+7.4/2-m/2),o.add(S),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z+7.4/2-m,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z+t.d/2+1});const y=new C(m,h,7.4),D=new g(y,E);D.position.set(t.x-5.8/2+m/2,.15+h/2,t.z),o.add(D),n.add({minX:t.x-t.w/2-1,minY:0,minZ:t.z-7.4/2,maxX:t.x-5.8/2+m,maxY:3.2,maxZ:t.z+7.4/2});const k=new C(m,h,7.4),H=new g(k,E);H.position.set(t.x+5.8/2-m/2,.15+h/2,t.z),o.add(H),n.add({minX:t.x+5.8/2-m,minY:0,minZ:t.z-7.4/2,maxX:t.x+t.w/2+1,maxY:3.2,maxZ:t.z+7.4/2});const J=2,q=(5.8-J)/2,V=new L({color:1840915,roughness:.85}),Q=new C(q,h,m),X=new g(Q,V);X.position.set(t.x-5.8/2+q/2,.15+h/2,t.z-7.4/2+m/2),o.add(X),n.add({minX:t.x-5.8/2,minY:0,minZ:t.z-7.4/2,maxX:t.x-J/2,maxY:3.2,maxZ:t.z-7.4/2+m});const rt=new C(q,h,m),at=new g(rt,V);at.position.set(t.x+5.8/2-q/2,.15+h/2,t.z-7.4/2+m/2),o.add(at),n.add({minX:t.x+J/2,minY:0,minZ:t.z-7.4/2,maxX:t.x+5.8/2,maxY:3.2,maxZ:t.z-7.4/2+m});const dt=new g(new C(J,.45,m),r);dt.position.set(t.x,3.2-.225,t.z-7.4/2+m/2),o.add(dt);const wt=4.8,vt=.65,B=new C(wt,.08,vt),G=new L({color:2237997,roughness:.5,metalness:.2}),Z=new g(B,G);Z.rotateX(.18),Z.position.set(t.x,3.2+.05,t.z-7.4/2-.25),o.add(Z);for(const lt of[-1.9,-.6,.6,1.9]){const Mt=new g(new C(.08,.22,.35),R);Mt.position.set(t.x+lt,3.2-.12,t.z-7.4/2-.15),o.add(Mt)}const st=new L({map:B1(),roughness:.4,metalness:.05}),pt=new g(new C(4.4,.82,.1),st);pt.position.set(t.x,3.2-.45,t.z-7.4/2-.08),o.add(pt);for(const lt of[-1.3,1.3]){const Mt=new g(new Y(.012,.012,.25,8),Ct);Mt.rotateX(Math.PI/4),Mt.position.set(t.x+lt,3.2-.05,t.z-7.4/2-.18);const Zt=new g(new He(.06,.08,10),Ct);Zt.rotateX(-Math.PI/3),Zt.position.set(t.x+lt,3.2-.12,t.z-7.4/2-.26),o.add(Mt,Zt);const ne=new we(16775904,1.2,2.5);ne.position.set(t.x+lt,3.2-.16,t.z-7.4/2-.25),l?l.register({x:t.x+lt,y:3.2-.16,z:t.z-7.4/2-.25,color:16775904,intensity:1.2,distance:2.5,zone:"Street"}):o.add(ne)}const Pt=3.2-1.25,Ft=t.z-7.4/2-.38,Jt=(lt,Mt)=>{const Zt=new At;Zt.position.set(lt,Pt,Ft);const ne=new g(new Y(.014,.014,.38,8),Le);ne.rotateX(Math.PI/2),ne.position.set(0,.38,.18);const ye=new g(new Ge(.025,.006,6,12),Le);ye.position.set(0,.38,0),Zt.add(ne,ye);const le=new g(new Y(.005,.005,.14,6),Ct);le.position.set(0,.31,0),Zt.add(le);const Ut=new g(new Y(.12,.16,.05,16),Le);Ut.position.set(0,.22,0),Zt.add(Ut);const qe=new L({map:G1(Mt),roughness:.5,metalness:.05,emissive:new me(14165528),emissiveIntensity:.35}),xe=new Y(.18,.18,.44,16),Qe=new g(xe,qe);Zt.add(Qe);const Mn=new g(new Y(.16,.12,.05,16),Le);Mn.position.set(0,-.22,0),Zt.add(Mn);const ke=new we(16733474,1.4,4.2);return ke.position.set(0,0,0),l?l.register({x:lt,y:Pt,z:Ft,color:16733474,intensity:1.4,distance:4.2,zone:"Street"}):Zt.add(ke),Zt},Nt=Jt(t.x-1.45,"らーめん"),jt=Jt(t.x+1.45,"味自慢");o.add(Nt,jt);const U=new Y(.016,.016,J+.15,8);U.rotateZ(Math.PI/2);const Vt=new g(U,R);Vt.position.set(t.x,3.2-.72,t.z-7.4/2-.06),o.add(Vt);const It=new L({map:H1(),roughness:.85,side:nn}),zt=new g(new $t(J*.96,.72),It);zt.position.set(t.x,3.2-1.1,t.z-7.4/2-.07),o.add(zt);const Tt=.68,Wt=1.62,St=.52,A=t.x-1.78,b=t.z-7.4/2-.28,W=new g(new C(Tt,Wt,St),new L({color:14210252,roughness:.4,metalness:.2}));W.position.set(A,.15+Wt/2,b),o.add(W);const nt=new L({map:V1(),roughness:.35,metalness:.1}),it=new g(new $t(Tt*.95,Wt*.95),nt);it.position.set(A,.15+Wt/2,b-St/2-.005),it.rotateY(Math.PI),o.add(it),n.add({minX:A-Tt/2-.05,minY:0,minZ:b-St/2,maxX:A+Tt/2+.05,maxY:Wt,maxZ:b+St/2+.1}),e.add({id:"ramen-kenbaiki",x:A,z:b-.6,radius:1.8,prompt:"Buy Ramen Ticket at Kenbaiki [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),i.show("*Chink! Zzzzt!* Purchased [Special Tonkotsu Ramen ¥980]. Step inside and hand your ticket to Master at the counter!")}});const et=4.2,xt=.98,mt=.72,ft=t.x,Lt=t.z+.1,ct=new C(et,xt,mt),bt=new L({color:2825234,roughness:.6}),Ht=new g(ct,bt);Ht.position.set(ft,.15+xt/2,Lt),_.add(Ht);const Kt=new C(et+.12,.06,mt+.08),Dt=new L({color:11367746,roughness:.28,metalness:.05}),oe=new g(Kt,Dt);oe.position.set(ft,.15+xt+.03,Lt),_.add(oe);const Qt=new C(et+.12,.18,.24),pe=new L({color:9065514,roughness:.35}),z=new g(Qt,pe);z.position.set(ft,.15+xt+.12,Lt+mt/2-.12),_.add(z);const yt=new L({color:1579036,roughness:.5}),tt=new L({color:4006932,roughness:.5});for(let lt=0;lt<4;lt++){const Mt=t.x-1.5+lt*1,Zt=Lt-mt/2-.38,ne=new g(new Y(.18,.18,.03,12),Ct);ne.position.set(Mt,.15+.015,Zt);const ye=new g(new Y(.025,.025,.48,8),tt);ye.position.set(Mt,.15+.255,Zt);const le=new g(new Ge(.12,.01,6,12),Ct);le.rotateX(Math.PI/2),le.position.set(Mt,.15+.18,Zt);const Ut=new g(new Y(.19,.19,.08,14),yt);Ut.position.set(Mt,.15+.53,Zt),_.add(ne,ye,le,Ut)}const ot=.28,gt=.14,ut=t.x-.5,Gt=Lt-.08,se=.15+xt+.06,Ee=new g(new Y(ot/2,ot*.28,gt,16,1,!0),new L({color:1579032,roughness:.15,side:nn}));Ee.position.set(ut,se+gt/2,Gt),_.add(Ee);const re=new g(new yn(ot*.46,16),new L({color:13934677,roughness:.25}));re.rotateX(-Math.PI/2),re.position.set(ut,se+gt-.015,Gt),_.add(re);const De=new g(new Ge(.065,.012,6,12),new L({color:16109665,roughness:.6}));De.rotateX(Math.PI/2),De.position.set(ut+.02,se+gt-.008,Gt),_.add(De);for(let lt=0;lt<2;lt++){const Mt=new g(new Y(.038,.038,.01,10),new L({color:10176037,roughness:.7}));Mt.position.set(ut-.04+lt*.05,se+gt,Gt-.03+lt*.04),_.add(Mt)}const ze=new g(new Y(.03,.03,.01,10),new L({color:16514038,roughness:.5}));ze.position.set(ut+.05,se+gt,Gt-.04);const Oe=new g(new Y(.018,.018,.012,8),new L({color:16753920,roughness:.3}));Oe.position.set(ut+.05,se+gt+.002,Gt-.04),_.add(ze,Oe);const Ae=new g(new $t(.065,.09),new L({color:1316884,roughness:.9,side:nn}));Ae.rotateY(-.3),Ae.position.set(ut-.07,se+gt+.04,Gt-.05),_.add(Ae);const ge=new g(new Y(.025,.025,.008,8),new L({color:2263842,roughness:.8}));ge.position.set(ut,se+gt+.002,Gt+.04),_.add(ge);const Ne=[];for(let lt=0;lt<4;lt++){const Mt=new g(new $t(.22,.22),bc);Mt.position.set(ut+(Math.random()-.5)*.08,se+.12+lt*.16,Gt),_.add(Mt),Ne.push(Mt)}const fe=new Y(.035,.035,.12,10),te=new g(fe,new L({color:1119773,roughness:.2,metalness:.1}));te.position.set(t.x+.9,se+.06,Lt);const je=new g(fe,new L({color:12853266,roughness:.3}));je.position.set(t.x+1.05,se+.06,Lt);const Ve=new g(new Y(.025,.025,.09,8),Ct);Ve.position.set(t.x+1.18,se+.045,Lt),_.add(te,je,Ve);const Ze=new g(new C(.12,.18,.14),new L({color:5911582,roughness:.6}));Ze.position.set(t.x+1.4,se+.09,Lt);const hn=new g(new C(.08,.08,.1),new L({color:16119278,roughness:.8}));hn.position.set(t.x+1.4,se+.2,Lt),_.add(Ze,hn);const ve=new g(new Y(.06,.07,.22,10),new L({color:14213352,roughness:.2,metalness:.8}));ve.position.set(t.x-1.4,se+.11,Lt);const Re=new g(new Y(.032,.028,.09,8),Fe);Re.position.set(t.x-1.22,se+.045,Lt),_.add(ve,Re);const Xt=t.z+1.7,Yt=4.2,T=.92,F=new g(new C(Yt,T,.85),new L({color:9081500,roughness:.35,metalness:.75}));F.position.set(t.x,.15+T/2,Xt),_.add(F);const $=new g(new C(Yt*.9,.45,.95),new L({color:7239298,roughness:.3,metalness:.8}));$.position.set(t.x,3.2-.45,Xt),_.add($);const K=new we(16773341,2.2,5.5);K.position.set(t.x,3.2-.65,Xt),l?l.register({x:t.x,y:3.2-.65,z:Xt,color:16773341,intensity:2.2,distance:5.5,zone:"Ramen"}):_.add(K);const O=new Y(.24,.24,.48,14);for(let lt=0;lt<2;lt++){const Mt=t.x-.9+lt*.58,Zt=new g(O,Ct);Zt.position.set(Mt,.15+T+.24,Xt-.05);const ne=new g(new yn(.22,12),new L({color:13143874,roughness:.4}));ne.rotateX(-Math.PI/2),ne.position.set(Mt,.15+T+.46,Xt-.05);const ye=new g(new Ge(.04,.008,4,8),Ct);ye.position.set(Mt-.25,.15+T+.4,Xt-.05);const le=new g(new Ge(.04,.008,4,8),Ct);le.position.set(Mt+.25,.15+T+.4,Xt-.05),_.add(Zt,ne,ye,le);for(let Ut=0;Ut<3;Ut++){const qe=new g(new $t(.35,.35),bc);qe.position.set(Mt+(Math.random()-.5)*.1,.15+T+.55+Ut*.25,Xt-.05),_.add(qe),Ne.push(qe)}}const ht=new C(.55,.35,.48),Et=new g(ht,Ct);Et.position.set(t.x+.7,.15+T+.18,Xt-.05),_.add(Et);for(let lt=0;lt<2;lt++){const Mt=new g(new Y(.012,.012,.24,6),new L({color:5911582}));Mt.rotateX(.3),Mt.position.set(t.x+.6+lt*.18,.15+T+.42,Xt-.2),_.add(Mt)}for(let lt=0;lt<4;lt++){const Mt=new g(new Y(.14,.08,.08,12,1,!0),new L({color:lt%2===0?14165528:16316664,roughness:.2}));Mt.position.set(t.x+1.5,.15+T+.04+lt*.05,Xt),_.add(Mt)}["特製豚骨 ¥980","チャーシュー麺 ¥1100","濃厚魚介味噌 ¥950","辛味噌らーめん ¥920","替玉(一玉) ¥150","博多一口餃子 ¥380"].forEach((lt,Mt)=>{const Zt=zo(lt,"#e2caa0","#1c1208",void 0,256,64),ne=new g(new $t(.38,.85),Zt);ne.position.set(t.x-1.6+Mt*.64,.15+2.05,t.z+7.4/2-m-.02),_.add(ne)}),n.add({minX:ft-et/2-.1,minY:0,minZ:Lt-mt/2,maxX:ft+et/2+.1,maxY:1.5,maxZ:t.z+7.4/2}),e.add({id:"ramen-counter",x:t.x-.5,z:Lt-.8,radius:1.8,prompt:"Sit at Ramen Bar & Order Special Chashu Tonkotsu [¥980]",onInteract:()=>{a==null||a.playRamenTicketSound(),i.show('"Hai, irasshai!" Master presents a steaming bowl of rich garlic tonkotsu ramen with tender chashu, soft-boiled ajitama, and wavy handmade noodles. It smells incredible!')}});for(const lt of[-1,1]){const Mt=new g(new Y(.004,.004,.75,6),Le);Mt.position.set(t.x+lt,3.2-.45,Lt);const Zt=new g(new He(.18,.14,12,1,!0),new L({color:1582106,roughness:.4}));Zt.position.set(t.x+lt,3.2-.82,Lt),_.add(Mt,Zt);const ne=new we(16753988,1.8,6.5,1.2);ne.position.set(t.x+lt,3.2-.9,Lt),l?l.register({x:t.x+lt,y:3.2-.9,z:Lt,color:16753988,intensity:1.8,distance:6.5,decay:1.2,zone:"Ramen"}):_.add(ne)}const Ot=new we(16750916,2.2,14,1.1);Ot.position.set(t.x,3.2-.35,t.z),l?l.register({x:t.x,y:3.2-.35,z:t.z,color:16750916,intensity:2.2,distance:14,decay:1.1,zone:"Ramen"}):o.add(Ot);let ee=0;return{light:Ot,update:(lt,Mt)=>{const Zt=(Mt.x-t.x)**2+(Mt.z-t.z)**2;_.visible=Zt<784,ee+=lt;const ne=Math.sin(ee*2)*.05;Nt.rotation.z=ne,jt.rotation.z=-ne,_.visible&&Ne.forEach((ye,le)=>{const Ut=(ee*.55+le*.18)%1;ye.position.y+=lt*.25,ye.scale.setScalar(.75+Ut*.85),ye.rotation.z+=lt*.15})}}}function Xi(o){const t=new At,n=.92,e=.5,i=.16,s=new Y(.012,.012,n,6),r=o==="izakaya"||o==="cafe"||o==="bookstore"?new L({color:4007706,roughness:.7}):Le;for(const w of[-1,1]){const P=w*e/2,R=new g(s,r);R.position.set(P,n/2,.07),R.rotation.x=-i,t.add(R);const E=new g(s,r);E.position.set(P,n/2,-.07),E.rotation.x=i,t.add(E)}const a=new Y(.012,.012,e+.04,6);a.rotateZ(Math.PI/2);const l=new g(a,Ct);l.position.set(0,n-.02,0),t.add(l);const c=new Y(.008,.008,e,6);c.rotateZ(Math.PI/2);const d=new g(c,Ct);d.position.set(0,.15,0),t.add(d);const f=new L({color:o==="dental"||o==="cleaners"?2381982:3818062,roughness:.55}),u=new C(e*.78,.09,.2),h=new g(u,f);h.position.set(0,.16,0),t.add(h);const m=new Y(.02,.02,.02,8),_=new g(m,Ct);_.position.set(.12,.21,0),t.add(_);const x=new qt({map:og(o),toneMapped:!1}),p=new $t(e-.04,.68),M=new g(p,x);M.position.set(0,.46,.075),M.rotation.x=-i,t.add(M);const v=new g(p,x);return v.position.set(0,.46,-.075),v.rotation.x=i,v.rotation.y=Math.PI,t.add(v),t}function wo(){const o=new At,t=.38,n=.55,e=.22,i=new C(t,n,e),s=new L({color:9082016,metalness:.85,roughness:.25,wireframe:!0}),r=new g(i,s);r.position.set(0,n/2,0),o.add(r);const a=new L({color:2237997,roughness:.6,metalness:.4}),l=new g(new C(t+.02,.04,e+.02),a);l.position.set(0,.02,0),o.add(l);const c=new L({color:14544632,roughness:.15,transparent:!0,opacity:.6}),d=new L({color:1711136,roughness:.3});return[{x:-.1,z:-.04,rx:.06,rz:-.08},{x:.08,z:.03,rx:-.05,rz:.09},{x:-.02,z:.05,rx:.08,rz:.04}].forEach(u=>{const h=new At;h.position.set(u.x,.1,u.z),h.rotation.x=u.rx,h.rotation.z=u.rz;const m=new g(new Y(.006,.006,.72,6),Ct);m.position.set(0,.36,0);const _=new g(new He(.032,.48,8),c);_.position.set(0,.28,0);const x=new g(new Ge(.032,.009,6,12,Math.PI),d);x.position.set(.032,.72,0),x.rotation.z=Math.PI/2,h.add(m,_,x),o.add(h)}),o}function Mg(){const o=new At,t=new L({color:4336925,roughness:.75}),n=new g(new C(.56,.04,.46),t);n.position.set(0,.2,0),o.add(n);for(const f of[-.22,.22])for(const u of[-.18,.18]){const h=new g(new C(.05,.2,.05),t);h.position.set(f,.1,u),o.add(h)}const e=new L({color:12886895,roughness:.88}),i=new Y(.24,.24,.48,16),s=new g(i,e);s.position.set(0,.46,0),o.add(s);const r=new L({color:5913892,roughness:.8});for(const f of[.32,.6]){const u=new g(new Ge(.245,.014,6,16),r);u.position.set(0,f,0),u.rotation.x=Math.PI/2,o.add(u)}const a=new L({color:16777215,roughness:.5}),l=new g(new yn(.12,16),a);l.position.set(0,.46,.245),o.add(l);const c=new qt({color:13379869,toneMapped:!1}),d=new g(new $t(.07,.07),c);return d.position.set(0,.46,.248),o.add(d),o}function Ac(o,t=!1){const n=new At,e=new Y(.012,.012,.44,6);e.rotateX(Math.PI/2);const i=new g(e,Le);i.position.set(0,.35,.22);const s=new g(e,Le);s.position.set(0,-.35,.22),n.add(i,s);const r=.12,a=.88,l=.42,c=new L({color:2238512,roughness:.4,metalness:.6}),d=new g(new C(r,a,l),c);d.position.set(0,0,.42),n.add(d);const f=new qt({color:o==="dental"?14218746:14220014,toneMapped:!1}),u=new $t(l-.04,a-.04);for(const h of[-1,1]){const m=new g(u,f);if(m.position.set(h*(r/2+.005),0,.42),m.rotation.y=h*Math.PI/2,n.add(m),o==="pharmacy"){const _=new qt({color:43115,toneMapped:!1}),x=new g(new $t(.07,.24),_);x.position.set(h*(r/2+.008),.08,.42),x.rotation.y=h*Math.PI/2;const p=new g(new $t(.24,.07),_);p.position.set(h*(r/2+.008),.08,.42),p.rotation.y=h*Math.PI/2,n.add(x,p)}else{const _=new qt({color:2062988,toneMapped:!1}),x=new g(new yn(.12,16),_);x.position.set(h*(r/2+.008),.08,.42),x.rotation.y=h*Math.PI/2,n.add(x)}}if(!t){const h=new we(o==="dental"?10217717:9369039,.8,3.5);h.position.set(0,0,.45),n.add(h)}return n}function Sg(){const o=new At,t=.82,n=.85,e=.48,i=new L({color:4014922,roughness:.5,metalness:.6}),s=new g(new C(t,n-.12,e),i);s.position.set(0,n/2,0),o.add(s);const r=new Y(.04,.04,.02,8);r.rotateZ(Math.PI/2);for(const d of[-.34,.34])for(const f of[-.18,.18]){const u=new g(r,Le);u.position.set(d,.04,f),o.add(u)}const a=[10365483,2381982,1996869,14251812,5976714,1975344];for(let d=-.32;d<.34;d+=.075){const f=a[Math.floor(Math.random()*a.length)],u=new L({color:f,roughness:.7}),h=new g(new C(.065,.18,.36),u);h.position.set(d,n+.08,0),h.rotation.y=(Math.random()-.5)*.15,o.add(h)}const l=new qt({color:16765243,toneMapped:!1}),c=new g(new $t(.32,.14),l);return c.position.set(0,n-.08,e/2+.01),o.add(c),o}function bg(o,t,n,e,i,s,r){const l=t.w/2,c=t.d/2,d=t.front==="s"||t.front==="n"?t.w:t.d,f=new At;let u=0,h=t.x,m=t.z;t.front==="s"?(u=Math.PI,h=t.x,m=t.z-c):t.front==="n"?(u=0,h=t.x,m=t.z+c):t.front==="w"?(u=-Math.PI/2,h=t.x-l,m=t.z):t.front==="e"&&(u=Math.PI/2,h=t.x+l,m=t.z),f.position.set(h,0,m),f.rotation.y=u,o.add(f);function _(q,V){return t.front==="s"?{x:t.x-q,z:t.z-c-V}:t.front==="n"?{x:t.x+q,z:t.z+c+V}:t.front==="w"?{x:t.x-l-V,z:t.z-q}:{x:t.x+l+V,z:t.z+q}}let x="residential";t.id==="b-se-mansion"?x="dental":t.id==="b-nw-mansion"?x="cleaners":t.id==="b-sw-commercial"?x="izakaya":t.id==="b-ne-apartments"?x="pharmacy":t.id==="b-fe-north"?x="bookstore":t.id==="b-cafe"&&(x="cafe");const p=new L({color:1975340,roughness:.35,metalness:.7});if(x==="dental"){const V=new L({color:14542571,roughness:.45,metalness:.1}),Q=new g(new C(10.8+.4,3.2,.08),V);Q.position.set(0,3.2/2,-.02),f.add(Q);const X=5.6,rt=2.25,at=-2,dt=new qt({map:Y1(),toneMapped:!1}),wt=new g(new $t(X,rt),dt);wt.position.set(at,1.25,.04),f.add(wt);const vt=new g(new C(X+.1,.06,.08),p);vt.position.set(at,1.25+rt/2,.05);const B=new g(new C(X+.1,.12,.08),p);B.position.set(at,.06,.05),f.add(vt,B);for(const ft of[-X/6,X/6]){const Lt=new g(new C(.04,rt,.06),p);Lt.position.set(at+ft,1.25,.05),f.add(Lt)}const G=2.4,Z=2.4,st=new g(new C(G+.16,2.3,.12),p);st.position.set(Z,1.2,.02),f.add(st);const pt=new C(G*.48,2.18,.04),Pt=new g(pt,Fe);Pt.position.set(Z-G*.24,1.18,.03);const Ft=new g(pt,Fe);Ft.position.set(Z+G*.24,1.18,.05),f.add(Pt,Ft);const Jt=new g(new C(.04,.18,.02),Ct);Jt.position.set(Z-.06,1.15,.07),f.add(Jt);const Nt=new C(G+.6,.06,.9),jt=new g(Nt,Ct);if(jt.position.set(Z,2.45,.45),f.add(jt),r){const ft=_(Z,.45);r.register({x:ft.x,y:2.38,z:ft.z,color:15924223,intensity:1.4,distance:4,decay:1.2,zone:"Street"})}else{const ft=new we(15924223,1.4,4,1.2);ft.position.set(Z,2.38,.45),f.add(ft)}const U=new L({color:1914429,roughness:.95}),Vt=new g(new C(G*.9,.02,.95),U);Vt.position.set(Z,.012,.55),f.add(Vt);const It=7.6,zt=.82,Tt=new qt({map:Z1(),toneMapped:!1}),Wt=new g(new C(It,zt,.15),Tt);Wt.position.set(0,2.76,.12),f.add(Wt);const St=new g(new C(It+.12,zt+.1,.18),p);St.position.set(0,2.76,.1),f.add(St);for(const ft of[-2.4,2.4]){const Lt=new g(new Y(.012,.012,.35,6),Ct);Lt.rotation.x=Math.PI/3,Lt.position.set(ft,3.22,.25);const ct=new g(new C(.18,.08,.12),Ct);ct.position.set(ft,3.28,.38),f.add(Lt,ct)}if(r){const ft=_(0,.5);r.register({x:ft.x,y:3.15,z:ft.z,color:14481146,intensity:1.9,distance:7.5,decay:1.2,zone:"Street"})}else{const ft=new we(14481146,1.9,7.5,1.2);ft.position.set(0,3.15,.5),f.add(ft)}const A=Ac("dental",!!r);A.position.set(10.8/2+.1,2.4,.25),f.add(A);const b=Xi("dental");b.position.set(-3.8,0,.85),b.rotation.y=.14,f.add(b);const W=wo();W.position.set(Z+G/2+.35,0,.35),f.add(W);const nt=new L({color:15724006,roughness:.5}),it=new g(new Y(.18,.14,.45,12),nt);it.position.set(.9,.225,.35);const et=new L({color:2250032,roughness:.6}),xt=new g(new be(.24,10,10),et);xt.position.set(.9,.55,.35),f.add(it,xt);const mt=_(Z,1.1);e.add({id:"sf-dental-clinic",x:mt.x,z:mt.z,radius:2.2,prompt:"Inspect Dental Clinic & Reception",onInteract:()=>{s&&s.playDeskBellSound(),i.show("パークサイド歯科: 『本日は予約優先制となっております。歯のクリーニング、定期検診、急患の診療は随時受付中（TEL 03-3456-7890）』")}});return}if(x==="cleaners"){const V=new L({color:1917824,roughness:.85}),Q=new C(10.8*.92,.08,1.25);Q.rotateX(.18);const X=new g(Q,V);X.position.set(0,2.45,.6);const rt=new g(new C(10.8*.92,.22,.03),V);rt.position.set(0,2.24,1.18),f.add(X,rt);const at=5.6,dt=2.25,wt=-2,vt=new qt({map:q1(),toneMapped:!1}),B=new g(new $t(at,dt),vt);B.position.set(wt,1.25,.04),f.add(B);const G=2.4,Z=2.4,st=new g(new C(G+.16,2.3,.12),p);st.position.set(Z,1.2,.02),f.add(st);const pt=new C(G*.48,2.18,.04),Pt=new g(pt,Fe);Pt.position.set(Z-G*.24,1.18,.03);const Ft=new g(pt,Fe);Ft.position.set(Z+G*.24,1.18,.05),f.add(Pt,Ft);const Jt=new L({color:1519967,roughness:.95}),Nt=new g(new C(G*.9,.02,.95),Jt);Nt.position.set(Z,.012,.55),f.add(Nt);const jt=7.6,U=.82,Vt=new qt({map:$1(),toneMapped:!1}),It=new g(new C(jt,U,.15),Vt);if(It.position.set(0,2.78,.12),f.add(It),r){const St=_(0,.6);r.register({x:St.x,y:3.15,z:St.z,color:15266559,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const St=new we(15266559,2,7.5,1.2);St.position.set(0,3.15,.6),f.add(St)}const zt=Xi("cleaners");zt.position.set(-3.8,0,.85),zt.rotation.y=-.12,f.add(zt);const Tt=wo();Tt.position.set(Z+G/2+.35,0,.35),f.add(Tt);const Wt=_(Z,1.1);e.add({id:"sf-dry-cleaners",x:Wt.x,z:Wt.z,radius:2.2,prompt:"Check Dry Cleaners Rates",onInteract:()=>{s&&s.playDeskBellSound(),i.show("白金クリーニング: 『朝10時までのお預かりで夕方5時お渡し！ワイシャツ立体仕上 ¥220、スーツ上下 ¥1,280。24Hコインランドリーも併設稼働中です！』")}});return}if(x==="izakaya"){const V=new L({color:2234900,roughness:.9}),Q=new g(new C(9.2+.3,3.2,.08),V);Q.position.set(0,3.2/2,-.02),f.add(Q);const X=new C(9.2*.96,.12,1.2);X.rotateX(.2);const rt=new g(X,new L({color:2040617,roughness:.6}));rt.position.set(0,2.5,.6),f.add(rt);const at=5.2,dt=2.25,wt=-1.6,vt=new qt({map:K1(),toneMapped:!1}),B=new g(new $t(at,dt),vt);B.position.set(wt,1.25,.04),f.add(B);const G=2,Z=2.4,st=new g(new C(G+.12,2.2,.1),V);st.position.set(Z,1.15,.02),f.add(st);const pt=new C(G*.95,.55,.03),Pt=new L({color:1582139,roughness:.85}),Ft=new g(pt,Pt);Ft.position.set(Z,2.05,.09),f.add(Ft);const Jt=new L({color:4014664,roughness:.8}),Nt=new g(new C(G*1.1,.04,.8),Jt);Nt.position.set(Z,.02,.45),f.add(Nt);const jt=Mg();jt.position.set(-3.4,0,.55),f.add(jt);const U=new At;U.position.set(1.1,2.3,.5);const Vt=new g(new Y(.008,.008,.48,6),Le);Vt.rotation.x=Math.PI/2,Vt.position.set(0,.15,-.24),U.add(Vt);const It=new qt({color:14235689,toneMapped:!1}),zt=new g(new Y(.16,.16,.38,12),It),Tt=new g(new Y(.12,.16,.04,12),Le);Tt.position.set(0,.2,0);const Wt=new g(new Y(.16,.12,.04,12),Le);if(Wt.position.set(0,-.2,0),zt.add(Tt,Wt),U.add(zt),r){const xt=_(1.1,.5);r.register({x:xt.x,y:2.3,z:xt.z,color:16742178,intensity:1.8,distance:5,decay:1.2,zone:"Street"})}else{const xt=new we(16742178,1.8,5,1.2);xt.position.set(0,0,0),U.add(xt)}f.add(U);const St=6.8,A=.82,b=new qt({map:J1(),toneMapped:!1}),W=new g(new C(St,A,.15),b);if(W.position.set(0,2.82,.12),f.add(W),r){const xt=_(0,.55);r.register({x:xt.x,y:3.1,z:xt.z,color:16750899,intensity:2.2,distance:8,decay:1.2,zone:"Street"})}else{const xt=new we(16750899,2.2,8,1.2);xt.position.set(0,3.1,.55),f.add(xt)}const nt=Xi("izakaya");nt.position.set(3.4,0,.85),nt.rotation.y=.15,f.add(nt);const it=_(Z,1.1);e.add({id:"sf-izakaya",x:it.x,z:it.z,radius:2.2,prompt:"Look at Izakaya Specials",onInteract:()=>{s&&s.playDeskBellSound(),i.show("和食・酒処 魚河岸: 『いらっしゃい！今夜のイチオシは豊洲直送の刺身三種盛り(¥980)と、じっくり煮込んだ特製もつ煮込み(¥480)だよ！晩酌セットも大人気！』")}});let et=0;return{update(xt){et+=xt,zt.rotation.z=Math.sin(et*2.2)*.06,zt.rotation.x=Math.cos(et*1.8)*.04}}}if(x==="pharmacy"){const V=new L({color:14151399,roughness:.45,metalness:.1}),Q=new g(new C(8.8+.3,3.2,.08),V);Q.position.set(0,3.2/2,-.02),f.add(Q);const X=4.8,rt=2.25,at=-1.6,dt=new qt({map:j1(),toneMapped:!1}),wt=new g(new $t(X,rt),dt);wt.position.set(at,1.25,.04),f.add(wt);const vt=2.2,B=2.2,G=new g(new C(vt+.16,2.3,.12),p);G.position.set(B,1.2,.02),f.add(G);const Z=new C(vt*.48,2.18,.04),st=new g(Z,Fe);st.position.set(B-vt*.24,1.18,.03);const pt=new g(Z,Fe);pt.position.set(B+vt*.24,1.18,.05),f.add(st,pt);const Pt=new L({color:1331780,roughness:.95}),Ft=new g(new C(vt*.9,.02,.95),Pt);Ft.position.set(B,.012,.55),f.add(Ft);const Jt=6.6,Nt=.82,jt=new qt({map:Q1(),toneMapped:!1}),U=new g(new C(Jt,Nt,.15),jt);U.position.set(0,2.76,.12),f.add(U);const Vt=Ac("pharmacy",!!r);if(Vt.position.set(8.8/2+.1,2.4,.25),f.add(Vt),r){const Wt=_(0,.5);r.register({x:Wt.x,y:3.15,z:Wt.z,color:14350576,intensity:1.9,distance:7,decay:1.1,zone:"Street"})}else{const Wt=new we(14350576,1.9,7,1.1);Wt.position.set(0,3.15,.5),f.add(Wt)}const It=Xi("pharmacy");It.position.set(-3.2,0,.85),It.rotation.y=.12,f.add(It);const zt=wo();zt.position.set(B+vt/2+.35,0,.35),f.add(zt);const Tt=_(B,1.1);e.add({id:"sf-pharmacy",x:Tt.x,z:Tt.z,radius:2.2,prompt:"Consult Pharmacy Counter",onInteract:()=>{s&&s.playDeskBellSound(),i.show("森クリニック・森薬局: 『全国どちらの医療機関の処方せんも受け付けております。お薬の相談、在宅医療、各種健康診断もお気軽にどうぞ。』")}});return}if(x==="bookstore"){const V=new L({color:3875350,roughness:.65}),Q=new g(new C(9.8+.3,3.2,.08),V);Q.position.set(0,3.2/2,-.02),f.add(Q);const X=5.4,rt=2.25,at=-1.8,dt=new qt({map:tg(),toneMapped:!1}),wt=new g(new $t(X,rt),dt);wt.position.set(at,1.25,.04),f.add(wt);const vt=2.2,B=2.2,G=new g(new C(vt+.16,2.3,.12),p);G.position.set(B,1.2,.02),f.add(G);const Z=new C(vt*.48,2.18,.04),st=new g(Z,Fe);st.position.set(B-vt*.24,1.18,.03);const pt=new g(Z,Fe);pt.position.set(B+vt*.24,1.18,.05),f.add(st,pt);const Pt=7,Ft=.82,Jt=new qt({map:eg(),toneMapped:!1}),Nt=new g(new C(Pt,Ft,.15),Jt);if(Nt.position.set(0,2.76,.12),f.add(Nt),r){const zt=_(0,.5);r.register({x:zt.x,y:3.15,z:zt.z,color:16770756,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const zt=new we(16770756,2,7.5,1.2);zt.position.set(0,3.15,.5),f.add(zt)}const jt=Sg();jt.position.set(-3.2,0,.65),f.add(jt);const U=Xi("bookstore");U.position.set(3.4,0,.85),U.rotation.y=-.15,f.add(U);const Vt=wo();Vt.position.set(1,0,.35),f.add(Vt);const It=_(B,1.1);e.add({id:"sf-bookstore",x:It.x,z:It.z,radius:2.2,prompt:"Browse Bookstore Display",onInteract:()=>{s&&s.playDeskBellSound(),i.show("東書店: 『話題の直木賞・芥川賞受賞作、今週発売のジャンプ系コミックス最新巻が平積みされています！図書カードNEXT取扱店です。』")}});return}if(x==="cafe"){const V=new L({color:2759186,roughness:.7}),Q=new g(new C(8.2+.3,3.2,.08),V);Q.position.set(0,3.2/2,-.02),f.add(Q);const X=new L({color:3547155,roughness:.85}),rt=new C(8.2*.92,.08,1.15);rt.rotateX(.18);const at=new g(rt,X);at.position.set(0,2.45,.55),f.add(at);const dt=4.6,wt=2.25,vt=-1.4,B=new qt({map:ng(),toneMapped:!1}),G=new g(new $t(dt,wt),B);G.position.set(vt,1.25,.04),f.add(G);const Z=2,st=2,pt=new g(new C(Z+.14,2.25,.12),V);pt.position.set(st,1.18,.02),f.add(pt);const Pt=new g(new C(Z*.9,2.15,.04),Fe);Pt.position.set(st,1.18,.04),f.add(Pt);const Ft=new L({color:13936723,metalness:.85,roughness:.25}),Jt=new g(new Y(.015,.015,.7,8),Ft);Jt.rotation.z=Math.PI/2,Jt.position.set(st,1.15,.08),f.add(Jt);const Nt=6.2,jt=.82,U=new qt({map:ig(),toneMapped:!1}),Vt=new g(new C(Nt,jt,.15),U);if(Vt.position.set(0,2.76,.12),f.add(Vt),r){const St=_(0,.5);r.register({x:St.x,y:3.15,z:St.z,color:16755268,intensity:2,distance:7.5,decay:1.2,zone:"Street"})}else{const St=new we(16755268,2,7.5,1.2);St.position.set(0,3.15,.5),f.add(St)}const It=Xi("cafe");It.position.set(-2.8,0,.85),It.rotation.y=.15,f.add(It);const zt=new L({color:4862496,roughness:.7}),Tt=new g(new C(1.4,.45,.42),zt);Tt.position.set(2.8,.225,.55),f.add(Tt);const Wt=_(st,1.1);e.add({id:"sf-cafe",x:Wt.x,z:Wt.z,radius:2.2,prompt:"Read Cafe Chalkboard",onInteract:()=>{s&&s.playDeskBellSound(),i.show("Cafe Mame: 『本日のおすすめ：エチオピア・イルガチェフェ G1（浅煎り ¥550）。華やかな香りと柑橘の酸味が楽しめます。テイクアウトも可能です。』")}});return}const M=Math.min(d*.55,5.8),v=new L({color:1909290,roughness:.35,metalness:.2}),w=new g(new C(M,3.2,.12),v);w.position.set(0,3.2/2,-.02),f.add(w);const P=2.4,R=new g(new C(P+.16,2.3,.14),p);R.position.set(-.5,1.2,.02),f.add(R);const E=new C(P*.48,2.18,.04),I=new g(E,Fe);I.position.set(-.5-P*.24,1.18,.03);const S=new g(E,Fe);S.position.set(-.5+P*.24,1.18,.05),f.add(I,S);const y=new qt({map:sg(),toneMapped:!1}),D=new g(new $t(.55,.55),y);D.position.set(1.4,1.35,.05),f.add(D);const k=new g(new C(M*.85,.08,.85),Ct);if(k.position.set(0,2.5,.4),f.add(k),r){const q=_(0,.4);r.register({x:q.x,y:2.42,z:q.z,color:16773339,intensity:1.4,distance:5.5,decay:1.2,zone:"Street"})}else{const q=new we(16773339,1.4,5.5,1.2);q.position.set(0,2.42,.4),f.add(q)}const H=wo();H.position.set(-2,0,.35),f.add(H);const J=_(1.4,1);e.add({id:`sf-intercom-${t.id}`,x:J.x,z:J.z,radius:2,prompt:"Examine Residence Intercom",onInteract:()=>{s&&s.playDeskBellSound(),i.show("オートロック操作盤: 『居住者専用エントランスです。訪問先の部屋番号を押して「呼出」を押してください。』")}})}function xs(o,t,n,e,i){const r=t.w/2,a=t.d/2,l=new L({color:16769690,emissive:16758852,emissiveIntensity:.85,roughness:.3}),c=new L({color:13954303,emissive:7779560,emissiveIntensity:.7,roughness:.3}),d=new L({color:1580582,roughness:.1,metalness:.7}),f=(n>0,1);for(let u=f;u<t.floors;u++){const h=u*3.2;if(t.balconies.includes(u))for(const p of t.balconyFaces)Tg(o,t,p,h,i);const _=t.bay,x=(t.w-1.6)/_;for(let p=0;p<_;p++){const M=-r+.8+p*x+x/2,v=(t.seed+u*17+p*31)%100,w=v<55?l:v<80?c:d;if(t.front==="s")_s(o,t.x+M,h+1.45,t.z-a,1.4,1.6,"s",w,e);else if(t.front==="n")_s(o,t.x+M,h+1.45,t.z+a,1.4,1.6,"n",w,e);else if(t.front==="w"){const P=-a+.8+p*((t.d-1.6)/_)+(t.d-1.6)/_/2;_s(o,t.x-r,h+1.45,t.z+P,1.4,1.6,"w",w,e)}else{const P=-a+.8+p*((t.d-1.6)/_)+(t.d-1.6)/_/2;_s(o,t.x+r,h+1.45,t.z+P,1.4,1.6,"e",w,e)}}}}function _s(o,t,n,e,i,s,r,a,l){const f=r==="s"||r==="n"?new C(i,s,.18):new C(.18,s,i),u=new g(f,l);u.position.set(t,n,e),o.add(u);const h=r==="s"||r==="n"?new C(i-.08*2,s-.08*2,.04):new C(.04,s-.08*2,i-.08*2),m=new g(h,a),_=r==="s"?-.02:r==="n"?.02:0,x=r==="w"?-.02:r==="e"?.02:0;m.position.set(t+x,n,e+_),o.add(m)}function Tg(o,t,n,e,i){const s=t.w/2,r=t.d/2,a=1.15,l=1.05;if(n==="s"){const c=new C(t.w*.85,.18,a),d=new g(c,i);d.position.set(t.x,e+.09,t.z-r-a/2),o.add(d);const f=new C(t.w*.85,l,.06),u=new g(f,Ct);u.position.set(t.x,e+l/2+.18,t.z-r-a),o.add(u),Sr(o,t.x+t.w*.3,e+.5,t.z-r-a*.5,0)}else if(n==="n"){const c=new C(t.w*.85,.18,a),d=new g(c,i);d.position.set(t.x,e+.09,t.z+r+a/2),o.add(d);const f=new C(t.w*.85,l,.06),u=new g(f,Ct);u.position.set(t.x,e+l/2+.18,t.z+r+a),o.add(u),Sr(o,t.x-t.w*.3,e+.5,t.z+r+a*.5,Math.PI)}else if(n==="w"){const c=new C(a,.18,t.d*.85),d=new g(c,i);d.position.set(t.x-s-a/2,e+.09,t.z),o.add(d);const f=new C(.06,l,t.d*.85),u=new g(f,Ct);u.position.set(t.x-s-a,e+l/2+.18,t.z),o.add(u),Sr(o,t.x-s-a*.5,e+.5,t.z+t.d*.3,-Math.PI/2)}}function Sr(o,t,n,e,i){const s=new At,r=new C(.72,.52,.32),a=new g(r,e1);s.add(a);const l=new Y(.2,.2,.02,16);l.rotateX(Math.PI/2);const c=new qt({color:4473924}),d=new g(l,c);d.position.set(.12,0,.165),s.add(d),s.position.set(t,n,e),s.rotateY(i),o.add(s)}function Eg(o,t,n){const e=t.w/2,i=t.d/2,s=new Y(.06,.06,n,8),r=new g(s,Le);r.position.set(t.x-e+.2,n/2,t.z-i-.08),o.add(r)}function Ag(o,t,n,e){const i=t.w/2,s=t.d/2,r=.9,a=new g(new C(t.w,r,.3),e);a.position.set(t.x,n+r/2,t.z+s-.15);const l=new g(new C(t.w,r,.3),e);l.position.set(t.x,n+r/2,t.z-s+.15);const c=new g(new C(.3,r,t.d),e);c.position.set(t.x-i+.15,n+r/2,t.z);const d=new g(new C(.3,r,t.d),e);d.position.set(t.x+i-.15,n+r/2,t.z),o.add(a,l,c,d);const f=new C(3.2,2.4,3.2),u=new g(f,e);if(u.position.set(t.x,n+1.2,t.z),o.add(u),t.floors>=4){const _=new At,x=new Y(.05,.05,1.2,6);for(const w of[-.6,.6])for(const P of[-.6,.6]){const R=new g(x,Ct);R.position.set(w,.6,P),_.add(R)}const p=new Y(.9,.9,1.6,16),M=new L({color:10008776,roughness:.3,metalness:.4}),v=new g(p,M);v.position.set(0,1.8,0),_.add(v),_.position.set(t.x+i*.5,n,t.z+s*.4),o.add(_)}const h=new Y(.03,.04,3.6,6),m=new g(h,Ct);m.position.set(t.x-i*.4,n+1.8,t.z-s*.4),o.add(m)}function Rg(o,t,n,e,i,s,r){const a=new At;a.name="urban_props";const l=[],c=[],d=[{x:-36,z:4.8},{x:-14,z:4.8},{x:8,z:4.8},{x:32,z:4.8},{x:-36,z:-4.8},{x:8,z:-4.8},{x:32,z:-4.8},{x:12.2,z:16},{x:12.2,z:32},{x:19.8,z:24},{x:-17.8,z:-18},{x:-17.8,z:-32},{x:-9.8,z:-20}];for(const w of d){const P=Cg(w.x,w.z,l,r);a.add(P),t.add({minX:w.x-.25,minY:0,minZ:w.z-.25,maxX:w.x+.25,maxY:10,maxZ:w.z+.25})}Pg(a,d);const f=[{x:-4.2,z:8.8,rotY:0,variant:0,drink:"hot Boss Coffee [缶コーヒー ¥140]"},{x:20.4,z:9.8,rotY:-Math.PI/2,variant:1,drink:"cold Pocari Sweat [ポカリスエット ¥160]"},{x:5.2,z:22.1,rotY:Math.PI,variant:2,drink:"warm Green Tea [お〜いお茶 ¥130]"},{x:-9.6,z:-10.8,rotY:Math.PI/2,variant:0,drink:"cold Royal Milk Tea [ミルクティー ¥150]"}];for(let w=0;w<f.length;w++){const P=f[w],R=Cf(P.x,P.z,P.rotY,P.variant,P.drink,n,e,t,r);a.add(R)}const u=Ig(a,t,n,e,i,s,l,r);c.push(u.update);const h=[{x:2.4,z:6.8,rotY:.15,color:2046808,id:"bike-ramen"},{x:-3.5,z:8.2,rotY:-.1,color:1984032,id:"bike-sunheights"},{x:21.5,z:12,rotY:Math.PI/2,color:9050148,id:"bike-konbini-1"},{x:21.5,z:13.5,rotY:Math.PI/2,color:11056320,id:"bike-konbini-2"},{x:8.5,z:27.5,rotY:-Math.PI/2,color:2367002,id:"bike-cafe"},{x:10.8,z:20.5,rotY:Math.PI/2,color:2046808,id:"bike-alley"},{x:2.2,z:23.8,rotY:Math.PI,color:1984032,id:"bike-north"},{x:-18.2,z:-10.5,rotY:-Math.PI/2,color:9050148,id:"bike-residential"}];for(const w of h){const P=Pf(w.x,w.z,w.rotY,w.color,w.id,n,e,s);a.add(P),t.add({minX:w.x-.75,minY:0,minZ:w.z-.35,maxX:w.x+.75,maxY:1.2,maxZ:w.z+.35})}const m=[{x:-2.8,z:8.2,type:"bush"},{x:-2.2,z:8.2,type:"fern"},{x:2,z:8.2,type:"tall"},{x:6.8,z:21,type:"bonsai"},{x:7.4,z:21,type:"hydrangea"},{x:8,z:21,type:"trough"},{x:8.6,z:21,type:"tall"},{x:1.5,z:23.6,type:"fern"},{x:-1.2,z:23.6,type:"bush"}];for(const w of m){const P=Kg(w.x,w.z,w.type);a.add(P)}a.add(Jg(7.1,20.9));const _=jg(-20.5,.15,-16.5,Math.PI/2,t);a.add(_);const x=Dc(-16.8,-4.2,Math.PI/4,t),p=Dc(13.2,4.2,-Math.PI/4,t);a.add(x,p);const M=Qg(9.6,20.4);a.add(M),a.add(If(4.25,22.1,n,e,s)),a.add(tx(6.2,22.3,l,r)),ex(a,t,n,e);const v=nx(a,n,e,i,s);return c.push(v.update),o.add(a),{group:a,streetLights:l,update(w){for(const P of c)P(w)}}}function Cg(o,t,n,e){const i=new At;i.position.set(o,0,t);const s=9.2,r=new Y(.18,.24,s,12),a=new L({color:5922662,roughness:.88,metalness:.05}),l=new g(r,a);l.position.set(0,s/2,0),l.castShadow=!0,i.add(l);const c=new C(2.2,.1,.1),d=new g(c,Le);d.position.set(0,s-.6,0),i.add(d);const f=new C(1.6,.1,.1),u=new g(f,Le);u.position.set(0,s-1.4,0),i.add(u);const h=new Y(.04,.04,.14,8),m=new L({color:15658734,roughness:.2});for(const D of[-.95,-.45,.45,.95]){const k=new g(h,m);k.position.set(D,s-.5,0),i.add(k)}const _=new Y(.32,.32,1.1,12),x=new L({color:4739160,roughness:.5,metalness:.4}),p=new g(_,x);p.position.set(.35,s-2.2,0),i.add(p);const M=new Y(.015,.015,.28,6);M.rotateZ(Math.PI/2);for(let D=1.8;D<s-2.5;D+=.55){const k=new g(M,Ct),H=Math.sin(D*4)>0?.2:-.2;k.position.set(H,D,0),i.add(k)}const v=new Y(.03,.03,1.1,8);v.rotateZ(Math.PI/3);const w=new g(v,Le);w.position.set(.45,5.2,0),i.add(w);const P=new He(.25,.15,12),R=new g(P,Le);R.position.set(.85,4.8,0),i.add(R);const E=new be(.1,12,12),I=new g(E,kn);I.position.set(.85,4.72,0),i.add(I);const S=new He(2.4,4.6,16,1,!0);S.translate(0,-2.3,0);const y=new g(S,b1);if(y.position.set(.85,4.7,0),i.add(y),e)e.register({x:o+.85,y:4.65,z:t,color:16770229,intensity:1.6,distance:16,decay:1.5,zone:"Street"});else{const D=new we(16770229,1.6,16,1.5);D.position.set(.85,4.65,0),n.push(D),i.add(D)}return i}function Pg(o,t){const n=new gf({color:1711652,linewidth:1.5});for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){const s=t[e],r=t[i],a=Math.hypot(r.x-s.x,r.z-s.z);if(a<26)for(const l of[-.45,0,.45]){const c=8.6+l*.4,d=8.6+l*.4,f=(s.x+r.x)/2,u=(s.z+r.z)/2,h=Math.min(1.2,a*.045),_=new vf(new N(s.x,c,s.z),new N(f,(c+d)/2-h,u),new N(r.x,d,r.z)).getPoints(12),x=new on().setFromPoints(_),p=new l2(x,n);o.add(p)}}}function Cf(o,t,n,e,i,s,r,a,l){const c=new At,d=1.05,f=1.95,u=.82,h=new C(d,f,u),m=new L({color:e===0?1784632:e===1?5904420:1715796,roughness:.35,metalness:.65}),_=new g(h,m);_.position.set(0,f/2,0),_.castShadow=!0,c.add(_);const x=new $t(.92,1.75),p=E1(e),M=new qt({map:p,toneMapped:!1}),v=new g(x,M);v.position.set(0,f/2+.04,u/2+.01),c.add(v);const w=e===0?8060884:e===1?16746649:8965375;if(l){const k=u/2+.45;l.register({x:o+Math.sin(n)*k,y:.15+1.2,z:t+Math.cos(n)*k,color:w,intensity:.9,distance:4,decay:1.2,zone:"Street"})}else{const k=new we(w,.9,4);k.position.set(0,1.2,u/2+.45),c.add(k)}const P=new C(.42,.85,.42),R=new L({color:4015181,roughness:.4}),E=new g(P,R);E.position.set(d/2+.32,.425,0),c.add(E);const I=new Y(.08,.08,.02,12),S=new qt({color:1118481}),y=new g(I,S);y.position.set(d/2+.24,.86,0);const D=new g(I,S);return D.position.set(d/2+.4,.86,0),c.add(y,D),c.position.set(o,.15,t),c.rotateY(n),a.add({minX:o-.9,minY:0,minZ:t-.7,maxX:o+.9,maxY:2.2,maxZ:t+.7}),s.add({id:`vending-${o}-${t}`,x:o,z:t,radius:1.8,prompt:`Buy ${i}`,onInteract:()=>{r.show(`*Clink-clatter-thump!* You bought a ${i}. It feels warm and soothing in your hands.`)}}),c}function Ig(o,t,n,e,i,s,r,a){const l=[];Lg(o,t,n,e),Dg(o,t),Rc(o,1.8,-18.5,r??[],a),Rc(o,-.5,-31,r??[],a);const c=Ug(-2.5,-17.5,a);o.add(c.group),l.push(c.update),t.add({minX:-2.9,minY:0,minZ:-17.9,maxX:-2.1,maxY:2.2,maxZ:-17.1}),Ng(o,2.8,-8.5,t,n,e),zg(o,-2.8,-8.5,t,n,e),Fg(o,3.6,-10.2,t),Og(o,6.2,-32.5,t),kg(o,3.6,-26,t);const d=Cf(-7.5,-9.2,-Math.PI/2,1,"cold Pocari Sweat & Calpis Soda [¥160]",n,e,t,a);o.add(d),o.add(If(-7.5,-10.4,n,e,s));const f=Pf(-5.8,-8.8,.25,1920312,"bike-park-entrance",n,e,s);o.add(f),t.add({minX:-6.5,minY:0,minZ:-9.2,maxX:-5.1,maxY:1.2,maxZ:-8.4}),Bg(o,-.5,-23.8,t,n,e,i);const u=ua(3.4,-18.2,-Math.PI/2);o.add(u),t.add({minX:3,minY:0,minZ:-19.2,maxX:3.8,maxY:1.2,maxZ:-17.2}),n.add({id:"bench-sakura",x:2.6,z:-18.2,radius:1.8,prompt:()=>i.seated?"Stand up from Bench":"Sit on Sakura Bench",onInteract:()=>{i.seated=!i.seated,i.seated?e.show("You sit beneath the grand sakura tree. Pink petals drift down gently in the quiet midnight breeze."):e.show("You stand back up, refreshed.")}});const h=ua(3.5,-28.5,-Math.PI/2);o.add(h),t.add({minX:3.1,minY:0,minZ:-29.5,maxX:3.9,maxY:1.2,maxZ:-27.5}),n.add({id:"bench-playground",x:2.7,z:-28.5,radius:1.8,prompt:()=>i.seated?"Stand up from Bench":"Sit on Park Bench",onInteract:()=>{i.seated=!i.seated,i.seated?e.show("You sit down facing the playground. The quiet night air of Tokyo surrounds you."):e.show("You stand back up.")}}),Gg(o,2.4,-22.5,t),Hg(o,-2.2,-20.5,t,n,e,s);const m=Vg(o,-3.8,-27.5,t,n,e,i,s);l.push(m.update);const _=Wg(o,-1.5,-29.2,t,n,e,s);l.push(_.update),Xg(o,-5.5,-32.5,t),Yg(o,-2.5,-33.5,t);const x=Cc(5.2,-15.5,1.25);o.add(x),t.add({minX:4.6,minY:0,minZ:-16.1,maxX:5.8,maxY:6.5,maxZ:-14.9});const p=new At;o.add(p);const M=$g(5.2,-15.5);p.add(M.group);const v=Cc(-2.8,-12.5,.85);o.add(v),t.add({minX:-3.3,minY:0,minZ:-13,maxX:-2.3,maxY:5.5,maxZ:-12});const w=Zg(-5,-14);o.add(w),t.add({minX:-5.5,minY:0,minZ:-14.5,maxX:-4.5,maxY:5.5,maxZ:-13.5});const P=Pc(-5.5,-17.5,1);o.add(P),t.add({minX:-6,minY:0,minZ:-18,maxX:-5,maxY:5.5,maxZ:-17});const R=Pc(-6.5,-34,1.1);o.add(R),t.add({minX:-7,minY:0,minZ:-34.5,maxX:-6,maxY:5.5,maxZ:-33.5});for(const S of[{x:8.5,z:-28},{x:8.5,z:-31.5},{x:8.5,z:-35}]){const y=qg(S.x,S.z);o.add(y),t.add({minX:S.x-.4,minY:0,minZ:S.z-.4,maxX:S.x+.4,maxY:6,maxZ:S.z+.4})}Ic(o,7.6,-14,1.4,3.2,"azalea",t),Ic(o,-7.2,-13.5,1.4,2.6,"hydrangea",t),Lc(p,5.2,-15.5,3.2,40),Lc(p,-2.8,-12.5,2.2,20);let E=0,I=!0;return{update(S){E+=S,E>.1&&(E=0,I=(i.x-0)*(i.x-0)+(i.z- -22.5)*(i.z- -22.5)<1764,p.visible=I),I&&M.update(S);for(const y of l)y(S)}}}function Lg(o,t,n,e){const i=new L({color:4738904,roughness:.85,metalness:.05}),s=new L({color:3554372,roughness:.8}),r=new At;r.position.set(-2.2,.15,-7.6);const a=new g(new C(.55,1.25,.55),i);a.position.set(0,.625,0),a.castShadow=!0;const l=new g(new C(.65,.1,.65),s);l.position.set(0,1.3,0),r.add(a,l),o.add(r),t.add({minX:-2.5,minY:0,minZ:-7.9,maxX:-1.9,maxY:1.5,maxZ:-7.3});const c=new At;c.position.set(2.2,.15,-7.6);const d=new g(new C(.55,1.25,.55),i);d.position.set(0,.625,0),d.castShadow=!0;const f=new g(new C(.65,.1,.65),s);f.position.set(0,1.3,0),c.add(d,f);const u=new qt({map:fg()}),h=new $t(.42,.22),m=new g(h,u);m.position.set(0,.85,.28),c.add(m),o.add(c),t.add({minX:1.9,minY:0,minZ:-7.9,maxX:2.5,maxY:1.5,maxZ:-7.3}),n.add({id:"park-nameplate",x:2.2,z:-7,radius:1.6,prompt:"Read Park Plaque",onInteract:()=>{e.show(`Bronze Park Plaque: "Sakura-cho Children's Park (桜町児童遊園) — Minato Ward, Tokyo".`)}});const _=new L({color:2236962,roughness:.5,metalness:.7}),x=new L({color:13938487,roughness:.4}),p=[{x:-.75,z:-7.6},{x:.75,z:-7.6},{x:-8.5,z:-22.6},{x:-8.5,z:-21.4}];for(const M of p){const v=new At;v.position.set(M.x,.15,M.z);const w=new g(new Y(.08,.08,.8,12),_);w.position.set(0,.4,0),w.castShadow=!0;const P=new g(new be(.09,12,8),_);P.position.set(0,.8,0);const R=new g(new Y(.085,.085,.16,12),x);R.position.set(0,.58,0),v.add(w,P,R),o.add(v),t.add({minX:M.x-.12,minY:0,minZ:M.z-.12,maxX:M.x+.12,maxY:.9,maxZ:M.z+.12})}}function Dg(o,t){const n=new L({color:4080716,roughness:.9}),e=new L({color:1779744,roughness:.4,metalness:.7}),i=[{x1:-8.5,z1:-7.6,x2:-2.5,z2:-7.6,w:6,d:.35,cx:-5.5,cz:-7.6},{x1:2.5,z1:-7.6,x2:9.5,z2:-7.6,w:7,d:.35,cx:6,cz:-7.6},{x1:-8.5,z1:-20.6,x2:-8.5,z2:-7.6,w:.35,d:13,cx:-8.5,cz:-14.1},{x1:-8.5,z1:-36.5,x2:-8.5,z2:-23.4,w:.35,d:13.1,cx:-8.5,cz:-29.95},{x1:-8.5,z1:-36.5,x2:9.5,z2:-36.5,w:18,d:.35,cx:.5,cz:-36.5},{x1:9.5,z1:-36.5,x2:9.5,z2:-7.6,w:.35,d:28.9,cx:9.5,cz:-22.05}];for(const s of i){const r=new C(s.w,.35,s.d),a=new g(r,n);a.position.set(s.cx,.15+.175,s.cz),a.castShadow=!0,o.add(a);const l=.75,c=s.w>s.d,d=new C(s.w,.05,s.d),f=new g(d,e);f.position.set(s.cx,.15+.35+l,s.cz),o.add(f);const u=c?s.w:s.d,h=Math.floor(u/.45);for(let v=0;v<=h;v++){const w=h>0?v/h-.5:0,P=c?s.cx+w*u:s.cx,R=c?s.cz:s.cz+w*u,E=new g(new Y(.018,.018,l,6),e);E.position.set(P,.15+.35+l/2,R),o.add(E)}const m=c?s.cz<-20?.35:-.35:s.cx>0?-.35:.35,_=c?s.w-.2:.5,x=c?.5:s.d-.2,p=new C(_,.95,x),M=new g(p,ha);M.position.set(c?s.cx:s.cx+m,.15+.475,c?s.cz+m:s.cz),M.castShadow=!0,o.add(M),t.add({minX:s.cx-s.w/2-.1,minY:0,minZ:s.cz-s.d/2-.1,maxX:s.cx+s.w/2+.1,maxY:1.5,maxZ:s.cz+s.d/2+.1})}}function Rc(o,t,n,e,i){const s=new At;s.position.set(t,.15,n);const r=new Y(.08,.12,3.6,12),a=new L({color:1781026,roughness:.5,metalness:.6}),l=new g(r,a);l.position.set(0,1.8,0),l.castShadow=!0,s.add(l);const c=new g(new Y(.18,.24,.4,12),a);c.position.set(0,.2,0),s.add(c);const d=new g(new Y(.14,.07,.15,12),a);d.position.set(0,3.65,0),s.add(d);const f=new be(.24,16,16),u=new g(f,kn);if(u.position.set(0,3.85,0),s.add(u),i)i.register({x:t,y:4,z:n,color:16772290,intensity:1.6,distance:13,decay:1.2,zone:"Park"});else{const h=new we(16772290,1.6,13);h.position.set(0,3.85,0),s.add(h),e.push(h)}o.add(s)}function Ug(o,t,n){const e=new At;e.position.set(o,.15,t);const i=new L({color:5922920,roughness:.9}),s=new g(new Y(.42,.48,.35,6),i);s.position.set(0,.175,0),s.castShadow=!0,e.add(s);const r=new g(new Y(.22,.25,.8,6),i);r.position.set(0,.75,0),e.add(r);const a=new g(new C(.55,.45,.55),i);a.position.set(0,1.35,0),e.add(a);let l=1.3,c=null;n?n.register({x:o,y:1.5,z:t,color:16754756,intensity:1.4,distance:6,decay:1.2,zone:"Park",dynamicIntensity:()=>l}):(c=new we(16754756,1.4,6),c.position.set(0,1.35,0),e.add(c));const d=new g(new He(.75,.35,6),i);d.position.set(0,1.75,0),e.add(d);let f=0;return{group:e,update:h=>{f+=h,l=1.3+Math.sin(f*8.5)*.15+(Math.random()-.5)*.08,c&&(c.intensity=l)}}}function Ng(o,t,n,e,i,s){const r=new At;r.position.set(t,.15,n);const a=new L({color:4739160,roughness:.4,metalness:.7}),l=new g(new Y(.03,.03,1.6,8),a);l.position.set(-.55,.8,0);const c=new g(new Y(.03,.03,1.6,8),a);c.position.set(.55,.8,0),r.add(l,c);const d=new qt({map:dg()}),f=new $t(1.35,.85),u=new g(f,d);u.position.set(0,1.1,.015);const h=new g(f,d);h.position.set(0,1.1,-.015),h.rotateY(Math.PI);const m=new g(new C(1.4,.9,.025),a);m.position.set(0,1.1,0),r.add(l,c,m,u,h),o.add(r),e.add({minX:t-.75,minY:0,minZ:n-.15,maxX:t+.75,maxY:1.6,maxZ:n+.15}),i.add({id:"park-rules-sign",x:t,z:n+.6,radius:1.8,prompt:"Read Park Regulations",onInteract:()=>{s.show("Park Rules: Please take your litter home, no fireworks or open flames, keep dogs on leash, and keep noise down at night.")}})}function zg(o,t,n,e,i,s){const r=new At;r.position.set(t,.15,n);const a=new L({color:4008216,roughness:.85}),l=new g(new C(.08,1.7,.08),a);l.position.set(-.75,.85,0);const c=new g(new C(.08,1.7,.08),a);c.position.set(.75,.85,0);const d=new qt({map:hg()}),f=new g(new $t(1.5,.9),d);f.position.set(0,1.25,.02);const u=new g(new $t(1.5,.9),Fe);u.position.set(0,1.25,.035);const h=new g(new C(1.56,.96,.05),a);h.position.set(0,1.25,-.01);const m=new g(new C(1.7,.04,.25),a);m.position.set(0,1.75,.05),m.rotateX(.2),r.add(l,c,h,f,u,m),o.add(r),e.add({minX:t-.85,minY:0,minZ:n-.2,maxX:t+.85,maxY:1.8,maxZ:n+.2}),i.add({id:"community-board",x:t,z:n+.7,radius:1.8,prompt:"Read Community Bulletin",onInteract:()=>{s.show('Sakura-cho Bulletin: Spring night festival next week, disaster evacuation meeting point, and a lost calico cat flyer: "Answers to Mike, wearing a red bell collar"!')}})}function Fg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=new L({color:2044967,roughness:.5,metalness:.5}),r=new g(new Y(.22,.3,.6,8),s);r.position.set(0,.3,0),r.castShadow=!0;const a=new g(new Y(.12,.16,3.4,8),s);a.position.set(0,2,0),a.castShadow=!0;const l=new Y(.48,.48,.24,24);l.rotateX(Math.PI/2);const c=new g(l,s);c.position.set(0,3.8,0);const d=new qt({map:ug(),toneMapped:!1}),f=new yn(.42,24),u=new g(f,d);u.position.set(0,3.8,.125);const h=new g(f,d);h.position.set(0,3.8,-.125),h.rotateY(Math.PI);const m=new g(new He(.08,.45,8),s);m.position.set(0,4.45,0),i.add(r,a,c,u,h,m),o.add(i),e.add({minX:t-.35,minY:0,minZ:n-.35,maxX:t+.35,maxY:4.5,maxZ:n+.35})}function Og(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=new L({color:14671576,roughness:.65,metalness:.05}),r=new L({color:2632754,roughness:.7,metalness:.3}),a=new L({color:8029069,roughness:.3,metalness:.7}),l=new g(new C(4.2,2.7,3.2),s);l.position.set(0,1.35,0),l.castShadow=!0,i.add(l);const c=new g(new C(4.6,.18,3.6),r);c.position.set(0,2.75,0),i.add(c);const d=new g(new C(.85,2.05,.04),a);d.position.set(-1.1,1.025,1.62);const f=new g(new C(.85,2.05,.04),a);f.position.set(1.1,1.025,1.62),i.add(d,f);const u=new qt({color:16769700,toneMapped:!1}),h=new g(new $t(3.6,.32),u);h.position.set(0,2.35,1.62),i.add(h);const m=new qt({map:pg()}),_=new g(new $t(.75,.36),m);_.position.set(0,1.9,1.62),i.add(_);const x=new g(new C(2.4,1.8,.12),s);x.position.set(0,.9,2.35),i.add(x),o.add(i),e.add({minX:t-2.2,minY:0,minZ:n-1.7,maxX:t+2.2,maxY:3,maxZ:n+1.7}),e.add({minX:t-1.3,minY:0,minZ:n+2.2,maxX:t+1.3,maxY:2,maxZ:n+2.5})}function kg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=new L({color:1984032,roughness:.5,metalness:.5}),r=new g(new Y(.24,.22,.72,16),s);r.position.set(0,.36,0),r.castShadow=!0;const a=new g(new Ge(.24,.02,8,16),s);a.position.set(0,.72,0),a.rotateX(Math.PI/2),i.add(r,a),o.add(i),e.add({minX:t-.3,minY:0,minZ:n-.3,maxX:t+.3,maxY:.8,maxZ:n+.3})}function Bg(o,t,n,e,i,s,r){const a=new At;a.position.set(t,.15,n);const l=new L({color:4862494,roughness:.88,metalness:.02}),c=new C(.16,2.6,.16),d=1.6,f=1,u=[{px:-d,pz:-f},{px:d,pz:-f},{px:-d,pz:f},{px:d,pz:f}];for(const v of u){const w=new g(c,l);w.position.set(v.px,1.3,v.pz),w.castShadow=!0,a.add(w)}const h=new C(3.6,.18,.1),m=new g(h,l);m.position.set(0,2.65,-f);const _=new g(h,l);_.position.set(0,2.65,f),a.add(m,_);const x=new C(.08,.14,2.4);for(let v=-d+.3;v<=d-.3;v+=.5){const w=new g(x,l);w.position.set(v,2.78,0),a.add(w)}const p=new Ln(.42,1);for(let v=-d;v<=d;v+=.8){const w=new g(p,No);w.position.set(v+(Math.random()-.5)*.3,2.9,(Math.random()-.5)*1.4),w.scale.set(1.4,.6,1.2),a.add(w)}const M=ua(0,0,0);a.add(M),o.add(a),e.add({minX:t-d-.15,minY:0,minZ:n-f-.15,maxX:t-d+.15,maxY:2.6,maxZ:n-f+.15}),e.add({minX:t+d-.15,minY:0,minZ:n-f-.15,maxX:t+d+.15,maxY:2.6,maxZ:n-f+.15}),e.add({minX:t-d-.15,minY:0,minZ:n+f-.15,maxX:t-d+.15,maxY:2.6,maxZ:n+f+.15}),e.add({minX:t+d-.15,minY:0,minZ:n+f-.15,maxX:t+d+.15,maxY:2.6,maxZ:n+f+.15}),e.add({minX:t-1.1,minY:0,minZ:n-.6,maxX:t+1.1,maxY:1.2,maxZ:n+.6}),i.add({id:"bench-pergola",x:t,z:n+.8,radius:1.8,prompt:()=>r.seated?"Stand up from Pergola":"Sit under Pergola",onInteract:()=>{r.seated=!r.seated,r.seated?s.show("You sit under the wisteria pergola. The climbing foliage filters the gentle streetlights above."):s.show("You stand back up.")}})}function ua(o,t,n){const e=new At;e.position.set(o,.15,t),e.rotateY(n);const i=new C(1.8,.08,.55),s=new g(i,Jn);s.position.set(0,.44,0),s.castShadow=!0,e.add(s);const r=new C(1.8,.45,.08),a=new g(r,Jn);a.position.set(0,.78,-.24),e.add(a);const l=new C(.08,.45,.5),c=new g(l,Ct);c.position.set(-.75,.22,0);const d=new g(l,Ct);return d.position.set(.75,.22,0),e.add(c,d),e}function Gg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=new L({color:5922920,roughness:.9}),r=new g(new Y(.65,.65,.08,18),s);r.position.set(0,.74,0),r.castShadow=!0;const a=new g(new Y(.18,.24,.7,12),s);a.position.set(0,.35,0),i.add(r,a);for(let l=0;l<3;l++){const c=l*Math.PI*2/3,d=Math.cos(c)*1.05,f=Math.sin(c)*1.05,u=new g(new Y(.24,.24,.08,12),s);u.position.set(d,.42,f);const h=new g(new Y(.1,.14,.4,10),s);h.position.set(d,.2,f),i.add(u,h)}o.add(i),e.add({minX:t-1.3,minY:0,minZ:n-1.3,maxX:t+1.3,maxY:.85,maxZ:n+1.3})}function Hg(o,t,n,e,i,s,r){const a=new At;a.position.set(t,.15,n);const l=new L({color:7238780,roughness:.82}),c=new g(new C(.5,.78,.5),l);c.position.set(0,.39,0),c.castShadow=!0;const d=new g(new Y(.18,.18,.08,14),Ct);d.position.set(0,.82,0);const f=new g(new Y(.015,.015,.09,8),Ct);f.position.set(0,.88,.06),f.rotateX(-.3);const u=new g(new Y(.018,.018,.12,8),Ct);u.position.set(.26,.38,0),u.rotateZ(Math.PI/2);const h=new L({color:3355443,roughness:.6,metalness:.8}),m=new g(new C(.75,.02,.75),h);m.position.set(0,.01,0),a.add(c,d,f,u,m),o.add(a),e.add({minX:t-.4,minY:0,minZ:n-.4,maxX:t+.4,maxY:1.2,maxZ:n+.4}),i.add({id:"park-fountain",x:t,z:n+.6,radius:1.6,prompt:"Drink Cold Park Water",onInteract:()=>{r==null||r.playFountainDrinkSound(),s.show("Cold, crisp water bubbles from the fountain nozzle. Very refreshing!")}})}function Vg(o,t,n,e,i,s,r,a){const l=new At;l.position.set(t,.15,n);const c=3.4,d=2.8,f=new Y(.06,.06,c+.4,12);f.rotateZ(Math.PI/2);const u=new g(f,Pa);u.position.set(0,d,0),u.castShadow=!0,l.add(u);const h=new Y(.05,.05,3,10);for(const p of[-1,1]){const M=c/2*p,v=new g(h,ji);v.position.set(M,d/2,.5),v.rotateX(.32*p),v.castShadow=!0;const w=new g(h,ji);w.position.set(M,d/2,-.5),w.rotateX(-.32*p),w.castShadow=!0;const P=new g(new Y(.03,.03,.85,8),ji);P.position.set(M,1,0),P.rotateX(Math.PI/2),l.add(v,w,P)}const m=[];for(const p of[-.85,.85]){const M=new At;M.position.set(p,d-.05,0);const v=Ct,w=2.05;for(const R of[-.25,.25]){const E=new g(new Y(.012,.012,w,6),v);E.position.set(R,-w/2,0),M.add(E)}const P=new g(new C(.55,.05,.26),x1);P.position.set(0,-w,0),P.castShadow=!0,M.add(P),l.add(M),m.push(M)}o.add(l),e.add({minX:t-c/2-.25,minY:0,minZ:n-.9,maxX:t-c/2+.25,maxY:2.8,maxZ:n+.9}),e.add({minX:t+c/2-.25,minY:0,minZ:n-.9,maxX:t+c/2+.25,maxY:2.8,maxZ:n+.9}),i.add({id:"park-swing",x:t,z:n+.7,radius:2,prompt:()=>r.seated?"Stand up from Swing":"Sit on Park Swing",onInteract:()=>{r.seated=!r.seated,r.seated?(a==null||a.playSwingCreakSound(),s.show("You sit on the park swing. The chains creak softly as you sway under the midnight sky.")):s.show("You hop off the swing.")}});let _=0;return{update:p=>{_+=p,m[0].rotation.x=Math.sin(_*1.5)*.12,m[1].rotation.x=Math.sin(_*1.7+1.2)*.1}}}function Wg(o,t,n,e,i,s,r){const a=new At;a.position.set(t,.15,n);const l=new g(new Y(.24,.24,.05,12),Ct);l.position.set(0,.025,0),a.add(l);const c=new g(new Y(.08,.08,.42,12),v1);c.position.set(0,.25,0),a.add(c);const d=new At;d.position.set(0,.46,0);const f=new L({color:15790320,roughness:.6}),u=new L({color:1710618,roughness:.7}),h=new g(new C(.38,.36,.65),f);h.position.set(0,.18,0),h.castShadow=!0;const m=new g(new C(.32,.04,.34),u);m.position.set(0,.38,-.05);const _=new g(new be(.22,12,12),f);_.position.set(0,.35,.38);const x=new g(new be(.07,8,8),u);x.position.set(-.16,.52,.34);const p=new g(new be(.07,8,8),u);p.position.set(.16,.52,.34),p.position.set(.16,.52,.34);const M=new g(new Y(.018,.018,.44,8),Mo);M.position.set(0,.52,.28),M.rotateZ(Math.PI/2);const v=new g(new Y(.016,.016,.48,8),Ct);v.position.set(0,.08,.18),v.rotateZ(Math.PI/2),d.add(h,m,_,x,p,M,v),a.add(d),o.add(a),e.add({minX:t-.4,minY:0,minZ:n-.45,maxX:t+.4,maxY:1.1,maxZ:n+.45});let w=0;i.add({id:"spring-rocker",x:t,z:n+.5,radius:1.5,prompt:"Ride Panda Spring Rocker",onInteract:()=>{r==null||r.playSpringRockerSound(),w=2.5,s.show("You bounce on the little panda rocker! Boing boing!")}});let P=0;return{update:E=>{P+=E,w>0?(w-=E,d.rotation.x=Math.sin(P*16)*(w*.12),d.rotation.z=Math.cos(P*12)*(w*.05)):(d.rotation.x=Math.sin(P*2.2)*.02,d.rotation.z=0)}}}function Xg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=2.1,r=new Y(.035,.035,2.3,8),a=new g(r,Mo);a.position.set(-.35,s/2,.4),a.rotateX(.25);const l=new g(r,Mo);l.position.set(.35,s/2,.4),l.rotateX(.25),i.add(a,l);for(let x=.35;x<s;x+=.35){const p=new g(new Y(.02,.02,.7,8),Pa);p.position.set(0,x,.4-x/s*.4),p.rotateZ(Math.PI/2),i.add(p)}const c=new g(new C(.8,.06,.8),Mo);c.position.set(0,s,0);const d=new g(new Ge(.4,.03,8,16,Math.PI),Mo);d.position.set(0,s+.4,0),i.add(c,d);const f=3.6,u=new C(.65,.06,f),h=new g(u,_1);h.position.set(0,s/2+.1,-f/2+.2),h.rotateX(-.52),h.castShadow=!0;const m=new g(new C(.05,.22,f),ji);m.position.set(-.32,s/2+.2,-f/2+.2),m.rotateX(-.52);const _=new g(new C(.05,.22,f),ji);_.position.set(.32,s/2+.2,-f/2+.2),_.rotateX(-.52),i.add(h,m,_),o.add(i),e.add({minX:t-.6,minY:0,minZ:n-f+.2,maxX:t+.6,maxY:2.4,maxZ:n+.6})}function Yg(o,t,n,e){const i=new At;i.position.set(t,.15,n);const s=2.4,r=new g(new C(s,.24,.16),Mr),a=r.clone();a.position.set(0,.12,-s/2);const l=r.clone();l.position.set(0,.12,s/2);const c=new g(new C(.16,.24,s),Mr);c.position.set(-s/2,.12,0);const d=new g(new C(.16,.24,s),Mr);d.position.set(s/2,.12,0);const f=new g(new C(s-.1,.18,s-.1),w1);f.position.set(0,.09,0),f.receiveShadow=!0;const u=new g(new Y(.1,.07,.14,12),Pa);u.position.set(.4,.24,.3);const h=new g(new C(.06,.015,.22),ji);h.position.set(.55,.19,.35),h.rotateY(.4),i.add(a,l,c,d,f,u,h),o.add(i),e.add({minX:t-s/2,minY:0,minZ:n-s/2,maxX:t+s/2,maxY:.3,maxZ:n+s/2})}function Cc(o,t,n=1){const e=new At;e.position.set(o,.15,t),e.scale.set(n,n,n);const i=new Y(.32,.45,3.4,8),s=new g(i,Jn);s.position.set(0,1.7,0),s.castShadow=!0,e.add(s);const r=new Y(.18,.24,2.2,6);r.rotateZ(.55);const a=new g(r,Jn);a.position.set(.7,3.2,0),e.add(a);const l=new Y(.18,.24,2.2,6);l.rotateZ(-.55);const c=new g(l,Jn);c.position.set(-.7,3.2,0),e.add(c);const d=[{x:0,y:4.8,z:0,r:2.4},{x:1.8,y:4.2,z:.6,r:1.8},{x:-1.8,y:4.2,z:-.6,r:1.8},{x:.8,y:4,z:-1.6,r:1.7},{x:-.8,y:4,z:1.6,r:1.7},{x:0,y:5.6,z:0,r:1.5}];for(const f of d){const u=new Ln(f.r,1),h=new g(u,Ia);h.position.set(f.x,f.y,f.z),h.castShadow=!0,e.add(h)}return e}function Zg(o,t){const n=new At;n.position.set(o,.15,t);const e=new g(new Y(.28,.38,2,8),Jn);e.position.set(0,1,0),e.rotateZ(-.15),e.castShadow=!0;const i=new g(new Y(.18,.28,1.8,8),Jn);i.position.set(.25,2.6,.1),i.rotateZ(.22),i.castShadow=!0,n.add(e,i);const s=[{x:.6,y:2.8,z:.3,sx:1.6,sy:.45,sz:1.3},{x:-.8,y:3.3,z:-.2,sx:1.8,sy:.48,sz:1.4},{x:.4,y:3.9,z:.1,sx:1.5,sy:.45,sz:1.3},{x:0,y:4.5,z:0,sx:1.3,sy:.42,sz:1.1}];for(const r of s){const a=new Ln(1,1),l=new g(a,p1);l.position.set(r.x,r.y,r.z),l.scale.set(r.sx,r.sy,r.sz),l.castShadow=!0,n.add(l)}return n}function Pc(o,t,n=1){const e=new At;e.position.set(o,.15,t),e.scale.set(n,n,n);const i=new Y(.28,.38,3.2,8),s=new g(i,Jn);s.position.set(0,1.6,0),s.castShadow=!0,e.add(s);const r=[{x:0,y:4.5,z:0,r:2},{x:1.4,y:3.8,z:.5,r:1.5},{x:-1.4,y:3.8,z:-.5,r:1.5},{x:0,y:5.2,z:0,r:1.2}];for(const a of r){const l=new Ln(a.r,1),c=new g(l,No);c.position.set(a.x,a.y,a.z),c.castShadow=!0,e.add(c)}return e}function qg(o,t){const n=new At;n.position.set(o,.15,t);const e=new g(new Y(.18,.24,2,8),Jn);e.position.set(0,1,0),n.add(e);const i=new g(new He(1.1,2.5,8),ha);i.position.set(0,2.8,0);const s=new g(new He(.85,2.2,8),ha);return s.position.set(0,4.2,0),n.add(i,s),n}function Ic(o,t,n,e,i,s,r){const a=new At;a.position.set(t,.15,n);const l=new L({color:5922920,roughness:.9}),c=new g(new C(e,.22,i),l);c.position.set(0,.11,0),a.add(c);const d=new L({color:2234898,roughness:.95}),f=new g(new C(e-.2,.24,i-.2),d);f.position.set(0,.12,0),a.add(f);const u=Math.max(3,Math.floor(e*i*1.5));for(let h=0;h<u;h++){const m=(Math.random()-.5)*(e-.4),_=(Math.random()-.5)*(i-.4),x=.28+Math.random()*.15,p=new g(new be(x,8,8),No);p.position.set(m,.24+x*.6,_),a.add(p);const M=s==="azalea"?Math.random()>.4?m1:yc:Math.random()>.4?g1:yc,v=new g(new Ln(x*.65,0),M);v.position.set(m,.28+x*.9,_),a.add(v)}o.add(a),r.add({minX:t-e/2,minY:0,minZ:n-i/2,maxX:t+e/2,maxY:.6,maxZ:n+i/2})}function Lc(o,t,n,e,i){const s=new $t(.12,.08);s.rotateX(-Math.PI/2);for(let r=0;r<i;r++){const a=Math.sqrt(Math.random())*e,l=Math.random()*Math.PI*2,c=t+Math.cos(l)*a,d=n+Math.sin(l)*a,f=new g(s,Ia);f.position.set(c,.158,d),f.rotateY(Math.random()*Math.PI),o.add(f)}}function $g(o,t){const n=new At;n.position.set(o,.15,t);const e=38,i=[],s=new $t(.08,.05);for(let l=0;l<e;l++){const c=new g(s,Ia),d=(Math.random()-.5)*9,f=(Math.random()-.5)*9,u=.5+Math.random()*4.8;c.position.set(d,u,f),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),n.add(c),i.push({mesh:c,x0:d,z0:f,speed:.28+Math.random()*.35,phase:Math.random()*Math.PI*2})}let r=0;return{group:n,update:l=>{r+=l;for(const c of i)c.mesh.position.y-=l*c.speed,c.mesh.position.x=c.x0+Math.sin(r*1.5+c.phase)*.4,c.mesh.position.z=c.z0+Math.cos(r*1.2+c.phase)*.4,c.mesh.rotation.z+=l*1.2,c.mesh.rotation.y+=l*.8,c.mesh.position.y<.1&&(c.mesh.position.y=4.8+Math.random()*.5)}}}function Pf(o,t,n,e=2046808,i="bike",s,r,a){const l=new At;l.position.set(o,.15,t),l.rotateY(n),l.rotateZ(-.06);const c=new L({color:1579036,roughness:.9}),d=new L({color:e,roughness:.35,metalness:.4}),f=new L({color:2365458,roughness:.5}),u=new L({color:1315860,roughness:.85}),h=new L({color:13938487,roughness:.2,metalness:.85}),m=new qt({color:14489624}),_=new qt({color:16096779}),x=.32,p=[{x:.55,isFront:!0},{x:-.55,isFront:!1}];for(const G of p){const Z=new At;Z.position.set(G.x,x,0);const st=new g(new Ge(x,.024,8,24),c);Z.add(st);const pt=new g(new Ge(x-.02,.012,6,24),Ct);Z.add(pt);const Pt=new g(new Y(.022,.022,.07,8),Ct);Pt.rotateX(Math.PI/2),Z.add(Pt);for(let Nt=0;Nt<4;Nt++){const jt=new g(new Y(.003,.003,(x-.02)*2,4),Ct);jt.rotateZ(Nt*Math.PI/4),Z.add(jt)}const Ft=new Ge(x+.022,.016,6,18,Math.PI*(G.isFront?.72:.85)),Jt=new g(Ft,d);if(Jt.rotateZ(G.isFront?-Math.PI*.58:-Math.PI*.42),Z.add(Jt),!G.isFront){const Nt=new g(new Y(.012,.012,.01,8),m);Nt.position.set(-x-.015,-.05,0),Nt.rotateZ(Math.PI/2),Z.add(Nt)}l.add(Z)}const M=new g(new Y(.025,.025,.08,8),d);M.rotateX(Math.PI/2),M.position.set(-.06,.28,0),l.add(M);const v=new g(new Y(.02,.02,.2,8),d);v.position.set(.42,.7,0),v.rotateZ(-.28),l.add(v);for(const G of[-.018,.018]){const Z=new g(new Y(.014,.014,.65,8),d);Z.position.set(.18,.46,G),Z.rotateZ(.72),l.add(Z)}const w=new g(new Y(.016,.016,.46,8),d);w.position.set(-.16,.48,0),w.rotateZ(-.25),l.add(w);for(const G of[-.038,.038]){const Z=new g(new Y(.011,.009,.45,8),Ct);Z.position.set(.48,.51,G),Z.rotateZ(-.28),l.add(Z)}for(const G of[-.038,.038]){const Z=new g(new Y(.01,.01,.52,6),d);Z.position.set(-.31,.3,G),Z.rotateZ(-.09),l.add(Z)}for(const G of[-.038,.038]){const Z=new g(new Y(.01,.01,.55,6),d);Z.position.set(-.38,.52,G),Z.rotateZ(.78),l.add(Z)}const P=new g(new Y(.013,.013,.22,8),Ct);P.position.set(.44,.82,0),l.add(P);const R=new g(new Ge(.24,.011,6,16,Math.PI*.8),Ct);R.rotateX(Math.PI/2),R.rotateZ(Math.PI*.6),R.position.set(.4,.92,0),l.add(R);for(const G of[-.22,.22]){const Z=new g(new Y(.016,.016,.09,8),u);Z.position.set(.29,.91,G),Z.rotateZ(Math.PI/6),l.add(Z)}const E=new g(new be(.024,10,6,0,Math.PI*2,0,Math.PI/2),h);E.position.set(.35,.94,-.16);const I=new g(new C(.015,.005,.012),Ct);I.position.set(.33,.94,-.18),l.add(E,I);const S=.32,y=.22,D=.2,k=.58,H=.76,J=new g(new C(y,.016,S),Ct);J.position.set(k,H+D/2,0);const q=new g(new C(y-.02,.012,S-.02),Ct);q.position.set(k,H-D/2,0),l.add(J,q);for(const G of[-y/2+.01,y/2-.01])for(const Z of[-S/2+.01,S/2-.01]){const st=new g(new Y(.005,.005,D,4),Ct);st.position.set(k+G,H,Z),l.add(st)}const V=new g(new C(y*.75,D*.65,S*.75),new L({color:16120058,roughness:.8}));V.position.set(k,H-.02,0),l.add(V);const Q=new g(new Y(.024,.018,.06,10),Ct);Q.rotateZ(-Math.PI/2),Q.position.set(.66,.62,0);const X=new g(new yn(.022,10),kn);X.rotateY(Math.PI/2),X.position.set(.691,.62,0),l.add(Q,X);const rt=new g(new Y(.013,.013,.16,8),Ct);rt.position.set(-.19,.73,0),rt.rotateZ(-.25);const at=new g(new C(.24,.055,.17),f);at.position.set(-.2,.81,0);for(const G of[-.045,.045]){const Z=new g(new Y(.016,.016,.04,8),Ct);Z.position.set(-.26,.77,G),l.add(Z)}l.add(rt,at);const dt=new g(new C(.44,.02,.14),Ct);dt.position.set(-.5,.73,0),l.add(dt);for(const G of[-.05,.05]){const Z=new g(new Y(.007,.007,.44,4),Ct);Z.position.set(-.52,.52,G),Z.rotateZ(.2),l.add(Z)}const wt=new g(new C(.48,.11,.03),d);wt.position.set(-.28,.28,.04),l.add(wt);for(const G of[-1,1]){const Z=new g(new Y(.008,.008,.14,6),Ct);Z.position.set(-.06,.28+G*.06,G*.07);const st=new g(new C(.08,.02,.06),u);st.position.set(-.06,.28+G*.12,G*.1);const pt=new g(new C(.06,.01,.01),_);pt.position.set(-.06,.28+G*.12,G*.13),l.add(Z,st,pt)}const vt=new g(new Y(.008,.008,.32,6),Ct);vt.position.set(-.46,.16,-.1),vt.rotateX(.38),l.add(vt);const B=new g(new Y(.017,.017,.03,8),_);return B.position.set(-.16,.52,0),l.add(B),s&&s.add({id:`${i}-bell`,x:o,z:t,radius:1.8,prompt:"Ring Bicycle Bell",onInteract:()=>{a==null||a.playBikeBellSound(),r==null||r.show("*Riing-riing!* Japanese city commuter bicycle (Mamachari) with front grocery basket.")}}),l}function Kg(o,t,n){const e=new At;if(e.position.set(o,.15,t),n==="bonsai"){const i=new L({color:2047064,roughness:.35,metalness:.15}),s=new g(new Y(.24,.2,.08,14),i);s.position.set(0,.04,0),s.scale.set(1.3,1,.9);const r=new L({color:2243869,roughness:.9}),a=new g(new Y(.22,.18,.04,12),r);a.position.set(0,.08,0),a.scale.set(1.25,1,.85),e.add(s,a);const l=new L({color:4007448,roughness:.9}),c=new g(new Y(.025,.04,.22,7),l);c.position.set(0,.18,0),c.rotation.z=-.18;const d=new g(new Y(.018,.025,.2,6),l);d.position.set(.04,.34,0),d.rotation.z=.28,e.add(c,d);const f=new L({color:1325858,roughness:.85});[{x:-.12,y:.28,z:.02,rx:.14,rz:.06},{x:.14,y:.38,z:-.04,rx:.16,rz:.07},{x:.02,y:.48,z:.02,rx:.2,rz:.08}].forEach(h=>{const m=new g(new Y(h.rx,h.rx*.9,h.rz,10),f);m.position.set(h.x,h.y,h.z),e.add(m)})}else if(n==="hydrangea"){const i=new L({color:9063219,roughness:.8}),s=new g(new Y(.22,.16,.38,12),i);s.position.set(0,.19,0),e.add(s);const r=new L({color:2055211,roughness:.7});for(let c=0;c<5;c++){const d=c*Math.PI*2/5,f=new g(new be(.14,6,6),r);f.scale.set(1.4,.3,.8),f.position.set(Math.cos(d)*.18,.38,Math.sin(d)*.18),f.rotation.y=-d,f.rotation.z=.35,e.add(f)}const a=[8162552,10980346,6333946];[{x:-.08,y:.52,z:.06,c:a[0]},{x:.09,y:.54,z:-.05,c:a[1]},{x:0,y:.62,z:0,c:a[2]}].forEach(c=>{const d=new L({color:c.c,roughness:.85}),f=new g(new Ln(.14,1),d);f.position.set(c.x,c.y,c.z),e.add(f)})}else if(n==="trough"){const i=new L({color:4862498,roughness:.85}),s=new g(new C(.65,.22,.25),i);s.position.set(0,.11,0),e.add(s);const r=new g(new C(.61,.04,.21),new L({color:2234384}));r.position.set(0,.21,0),e.add(r);const a=[16436245,16007006,16777215,11032055,16347926];for(let l=-.24;l<=.25;l+=.12){const c=a[Math.floor(Math.random()*a.length)],d=new g(new Ln(.06,1),new L({color:c}));d.position.set(l,.27,(Math.random()-.5)*.1),e.add(d)}}else if(n==="tall"){const i=new L({color:7226156,roughness:.8}),s=new g(new Y(.18,.14,.42,10),i);s.position.set(0,.21,0),e.add(s);const r=new L({color:4028990,roughness:.5});for(const a of[-.06,.05]){const l=new g(new Y(.015,.018,.9,6),r);l.position.set(a,.65,a*2*.03);const c=new g(new He(.16,.45,6),No);c.position.set(a,1.05,0),e.add(l,c)}}else{const i=new L({color:8146486,roughness:.85}),s=new g(new Y(.2,.15,.35,10),i);s.position.set(0,.175,0);const r=new g(new Ln(.28,1),No);r.position.set(0,.45,0),e.add(s,r)}return e}function Jg(o,t){const n=new At;n.position.set(o,.15,t);const e=new L({color:1409085,roughness:.5}),i=new g(new Y(.09,.1,.18,10),e);i.position.set(0,.09,0);const s=new Ge(.08,.012,6,12,Math.PI),r=new g(s,e);r.position.set(0,.2,0),r.rotation.z=Math.PI/2;const a=new Y(.01,.015,.22,6);a.rotateZ(-Math.PI/3);const l=new g(a,e);l.position.set(.12,.16,0);const c=new g(new Y(.025,.015,.025,8),e);c.position.set(.21,.24,0),c.rotation.z=-Math.PI/3,n.add(i,r,l,c);const d=new L({color:366185,roughness:.6}),f=new g(new Y(.16,.16,.12,12),d);f.rotation.x=Math.PI/2,f.position.set(-.35,.55,.28);const u=new L({color:1467700,roughness:.4}),h=new g(new Ge(.14,.025,6,16),u);h.position.set(-.35,.55,.28);const m=new L({color:14251782,metalness:.8,roughness:.3}),_=new g(new Y(.012,.012,.14,6),m);return _.position.set(-.24,.42,.28),n.add(f,h,_),n}function jg(o,t,n,e,i){const s=new At;s.position.set(o,t,n),s.rotateY(e);const r=1.48,a=3.35,l=1.62,c=new C(r,.75,a),d=new g(c,Mc);d.position.set(0,.55,0),d.castShadow=!0,s.add(d);const f=new C(r-.08,.72,a*.72),u=new g(f,Mc);u.position.set(0,1.25,-.15),s.add(u);const h=new C(r-.04,.62,.06);h.rotateX(.2);const m=new g(h,Sc);m.position.set(0,1.22,a*.72/2-.12),s.add(m);const _=new C(r-.04,.58,.06),x=new g(_,Sc);x.position.set(0,1.25,-a*.72/2-.16),s.add(x);const p=new Y(.26,.26,.18,12);p.rotateZ(Math.PI/2);const M=new L({color:1776411,roughness:.9});for(const J of[-r/2,r/2])for(const q of[-a*.32,a*.32]){const V=new g(p,M);V.position.set(J,.26,q),s.add(V)}const v=new C(.25,.18,.06),w=new qt({color:16775912}),P=new g(v,w);P.position.set(-r/2+.24,.65,a/2+.01);const R=new g(v,w);R.position.set(r/2-.24,.65,a/2+.01),s.add(P,R);const E=new C(.2,.24,.06),I=new qt({color:14489624}),S=new g(E,I);S.position.set(-r/2+.2,.75,-a/2-.01);const y=new g(E,I);y.position.set(r/2-.2,.75,-a/2-.01),s.add(S,y);const D=new C(.35,.18,.02),k=new g(D,so);k.position.set(0,.38,a/2+.02);const H=new g(D,so);return H.position.set(0,.42,-a/2-.02),s.add(k,H),i.add({minX:o-a/2-.1,minY:t,minZ:n-r/2-.1,maxX:o+a/2+.1,maxY:t+l,maxZ:n+r/2+.1}),s}function Dc(o,t,n,e){const i=new At;i.position.set(o,.15,t),i.rotateY(n);const s=3.4,r=new g(new Y(.06,.06,s,10),Le);r.position.set(0,s/2,0),i.add(r);const a=new Y(.48,.52,.12,24);a.rotateX(Math.PI/2);const l=new g(a,M1);l.position.set(.35,s-.2,0),i.add(l);const c=new be(.44,24,12,0,Math.PI*2,0,Math.PI/3);c.rotateX(Math.PI/2);const d=new g(c,S1);return d.position.set(.35,s-.2,.04),i.add(d),e.add({minX:o-.25,minY:0,minZ:t-.25,maxX:o+.25,maxY:3.8,maxZ:t+.25}),i}function Qg(o,t){const n=new At;n.position.set(o,.15,t);const e=new $t(.72,.72),i=new qt({map:ag(),toneMapped:!1}),s=new g(e,i);s.position.set(0,1.4,.65),s.rotation.y=Math.PI,n.add(s);const r=new g(new C(.76,.76,.02),Ct);r.position.set(0,1.4,.66),n.add(r);const a=new L({color:15381256,roughness:.6}),l=new g(new C(.55,.32,.38),a);l.position.set(-.38,.16,.15),n.add(l);const c=[7877903,417606,1332013,9584654];for(let E=-.2;E<=.2;E+=.1){const I=c[Math.floor(Math.random()*c.length)],S=new L({color:I,roughness:.1,metalness:.1,transparent:!0,opacity:.85}),y=new g(new Y(.03,.03,.22,8),S);y.position.set(-.38+E,.22,.15+(Math.random()-.5)*.1),n.add(y)}const d=new L({color:2450411,roughness:.6}),f=new g(new C(.55,.32,.38),d);f.position.set(.28,.16,.15),n.add(f);const u=[14251782,14427686,2450411,366185];for(let E=-.18;E<=.18;E+=.09){const I=u[Math.floor(Math.random()*u.length)],S=new g(new Y(.028,.028,.14,8),new L({color:I,metalness:.6,roughness:.3}));S.position.set(.28+E,.18,.15+(Math.random()-.5)*.1),n.add(S)}const h=new L({color:16710083,roughness:.5,metalness:.05,transparent:!0,opacity:.85});[{x:-.25,y:.24,z:-.22,s:.24},{x:.22,y:.26,z:-.2,s:.26},{x:0,y:.22,z:-.28,s:.22}].forEach(E=>{const I=new At;I.position.set(E.x,E.y,E.z);const S=new g(new Ln(E.s,1),h);S.scale.set(1.1,.9,1.05);const y=new g(new He(.045,.09,6),h);y.position.set(0,E.s*.9,0),I.add(S,y),n.add(I)});const _=new L({map:cg(),roughness:.8,transparent:!0,opacity:.85,side:nn}),x=new be(.78,16,12,0,Math.PI*2,0,Math.PI*.55);x.scale(1.3,.75,1.05);const p=new g(x,_);p.position.set(-.04,.08,-.04),n.add(p);const M=new L({color:413243,roughness:.9}),v=new g(new Ge(.85,.022,6,24),M);v.rotation.x=Math.PI/2,v.scale.set(1.3,1.05,1),v.position.set(-.04,.02,-.04),n.add(v);const w=new At;w.position.set(.85,0,.45),w.rotation.z=-.15;const P=new g(new Y(.012,.012,1.35,6),new L({color:10576391,roughness:.8}));P.position.set(0,.7,0);const R=new g(new He(.08,.35,8),new L({color:7877903,roughness:.9}));return R.position.set(0,.18,0),w.add(P,R),n.add(w),n}function If(o,t,n,e,i){const s=new At;s.position.set(o,.15,t);const r=.46,a=.95,l=.4,c=new L({map:lg(),roughness:.4,metalness:.2}),d=new g(new C(r,a,l),c);d.position.set(0,a/2,0),s.add(d);const f=new L({color:1516884,roughness:.4}),u=new g(new C(r+.03,.06,l+.03),f);u.position.set(0,a+.03,0),s.add(u);const h=new L({color:132631,roughness:.8});for(const m of[-.12,.12]){const _=new g(new Y(.05,.05,.02,12),h);_.position.set(m,a+.065,0),s.add(_)}return n.add({id:"alley-can-recycle",x:o,z:t,radius:1.8,prompt:"Recycle Can / Bottle [空き缶・ボトル回収]",onInteract:()=>{i&&i.playDeskBellSound(),e.show("空き缶・ペットボトル回収BOX: You recycle an empty canned drink with a satisfying *Clatter-clink!*")}}),s}function tx(o,t,n,e){const i=new At;i.position.set(o,3.1,t);const s=new g(new Y(.012,.012,.45,6),Le);s.rotation.x=Math.PI/2,s.position.set(0,0,-.22),i.add(s);const r=new L({color:1259559,roughness:.35}),a=new g(new He(.24,.12,12,1,!0),r);a.position.set(0,-.06,0),i.add(a);const l=new g(new be(.045,8,8),kn);if(l.position.set(0,-.09,0),i.add(l),e)e.register({x:o,y:2.95,z:t,color:16753988,intensity:2.2,distance:8.5,decay:1.2,zone:"Street"});else{const c=new we(16753988,2.2,8.5,1.2);c.position.set(0,-.15,0),i.add(c),n.push(c)}return i}function ex(o,t,n,e){const i=[{x:13.8,z:3.8},{x:18.2,z:-3.8}];for(const s of i){const r=new At;r.position.set(s.x,.15,s.z);const a=new g(new Y(.06,.06,3.2,8),Le);a.position.set(0,1.6,0),r.add(a);const l=new g(new C(.2,.28,.14),so);l.position.set(0,1.25,.08),r.add(l);const c=new g(new Y(.04,.04,.03,10),Ct);c.rotateX(Math.PI/2),c.position.set(0,1.25,.16),r.add(c);const d=new g(new C(.32,.65,.22),Le);d.position.set(0,2.8,0),r.add(d);const f=new g(new yn(.1,12),new qt({color:4521898}));f.position.set(0,2.65,.12),r.add(f),o.add(r),t.add({minX:s.x-.2,minY:0,minZ:s.z-.2,maxX:s.x+.2,maxY:3.5,maxZ:s.z+.2}),n.add({id:`signal-${s.x}`,x:s.x,z:s.z+.4,radius:1.6,prompt:"Push Pedestrian Crossing Button [押ボタン式]",onInteract:()=>{e.show('*Beep-Boop* "Omachi kudasai" (Please wait). Signal chime activates: *Piyo-piyo*')}})}}function nx(o,t,n,e,i){const l=new At;l.position.set(6,.15,21.2);const c=new At,d=.52,f=.2,u=.4,h=.015,m=new L({map:rg(),roughness:.88}),_=new L({color:13147500,roughness:.9}),x=new g(new C(d,h,u),m);x.position.set(0,h/2,0),c.add(x);const p=new g(new C(d,f,h),m);p.position.set(0,f/2,u/2-h/2);const M=new g(new C(d,f,h),m);M.position.set(0,f/2,-u/2+h/2);const v=new g(new C(h,f,u-h*2),m);v.position.set(-d/2+h/2,f/2,0);const w=new g(new C(h,f,u-h*2),m);w.position.set(d/2-h/2,f/2,0),c.add(p,M,v,w);const P=.08,R=new g(new C(d,h,P),_);R.position.set(0,f+.01,u/2+P*.4),R.rotation.x=.45;const E=new g(new C(d,h,P),_);E.position.set(0,f+.01,-u/2-P*.4),E.rotation.x=-.45;const I=new g(new C(P,h,u),_);I.position.set(-d/2-P*.4,f+.01,0),I.rotation.z=-.45;const S=new g(new C(P,h,u),_);S.position.set(d/2+P*.4,f+.01,0),S.rotation.z=.45,c.add(R,E,I,S);const y=new L({color:16643810,roughness:.95}),D=new g(new C(d-.06,.08,u-.06),y);D.position.set(0,.05,0),c.add(D),l.add(c);const k=new L({color:16317180,roughness:.25}),H=new g(new Y(.1,.08,.035,16),k);H.position.set(-.42,.018,.06);const J=new L({color:7160611,roughness:.9}),q=new g(new Y(.085,.085,.02,12),J);q.position.set(-.42,.032,.06),l.add(H,q);const V=new L({color:14742270,roughness:.25}),Q=new g(new Y(.09,.07,.045,16),V);Q.position.set(-.42,.0225,-.16);const X=new g(new yn(.08,16),new L({color:3718648,roughness:.1,metalness:.4,transparent:!0,opacity:.85}));X.rotation.x=-Math.PI/2,X.position.set(-.42,.04,-.16),l.add(Q,X);const rt=new L({color:13935475,roughness:.9}),at=new g(new C(.12,.035,.32),rt);at.position.set(.38,.018,0),l.add(at);const dt=new At;dt.position.set(0,.08,0);const wt=new L({color:1579035,roughness:.82}),vt=new L({color:16317180,roughness:.85}),B=new L({color:16020150,roughness:.5}),G=new g(new be(.14,16,12),wt);G.scale.set(.95,.76,1.25),G.position.set(0,.1,-.02),dt.add(G);const Z=new g(new be(.09,12,8),vt);Z.scale.set(.72,.72,.35),Z.position.set(0,.11,.11),dt.add(Z);const st=new be(.038,10,8);st.scale(.85,.55,1.25);const pt=new g(st,vt);pt.position.set(-.065,.03,.12);const Pt=new g(st,vt);Pt.position.set(.065,.03,.12),dt.add(pt,Pt);const Ft=new be(.007,6,6);Ft.scale(1,.6,1);for(const Xt of[-.065,.065])for(let Yt=-1;Yt<=1;Yt++){const T=new g(Ft,B);T.position.set(Xt+Yt*.012,.032,.16),dt.add(T)}const Jt=new L({color:14427686,roughness:.4}),Nt=new g(new Ge(.08,.011,6,16),Jt);Nt.position.set(0,.17,.09),Nt.rotation.x=.35,dt.add(Nt);const jt=new L({color:16436245,metalness:.85,roughness:.2}),U=new g(new be(.02,10,10),jt);U.position.set(0,.14,.16),dt.add(U);const Vt=new At;Vt.position.set(0,.22,.1);const It=new g(new be(.115,16,14),wt);It.scale.set(1.05,.95,.98),Vt.add(It);const zt=new be(.036,10,8),Tt=new g(zt,vt);Tt.position.set(-.032,-.026,.092);const Wt=new g(zt,vt);Wt.position.set(.032,-.026,.092),Vt.add(Tt,Wt);const St=new He(.013,.014,3);St.rotateZ(Math.PI);const A=new g(St,B);A.position.set(0,-.014,.118),Vt.add(A);const b=new qt({color:16777215}),W=new Y(.0015,.0015,.11,4);W.rotateZ(Math.PI/2);for(const Xt of[-1,1])for(let Yt=-1;Yt<=1;Yt++){const T=new g(W,b);T.position.set(Xt*.075,-.024+Yt*.009,.095),T.rotation.z=Xt*(.15+Yt*.18),T.rotation.y=Xt*.35,Vt.add(T)}const nt=new At;nt.position.set(-.065,.085,.01);const it=new At;it.position.set(.065,.085,.01);const et=wt,xt=new L({color:16361684,roughness:.65}),mt=new He(.038,.078,4),ft=new He(.026,.056,4),Lt=new g(mt,et);Lt.rotation.y=Math.PI/4;const ct=new g(ft,xt);ct.rotation.y=Math.PI/4,ct.position.set(0,-.004,.008),nt.add(Lt,ct);const bt=new g(mt,et);bt.rotation.y=-Math.PI/4;const Ht=new g(ft,xt);Ht.rotation.y=-Math.PI/4,Ht.position.set(0,-.004,.008),it.add(bt,Ht),Vt.add(nt,it);const Kt=new L({color:1096065,roughness:.2,emissive:366185,emissiveIntensity:.45}),Dt=new qt({color:0}),oe=new qt({color:16777215}),Qt=[];for(const Xt of[-.044,.044]){const Yt=new At;Yt.position.set(Xt,.016,.098);const T=new g(new be(.024,12,10),Kt);Yt.add(T);const F=new g(new C(.007,.032,.005),Dt);F.position.set(0,0,.022),Yt.add(F);const $=new g(new be(.005,6,6),oe);$.position.set(-.007,.008,.023);const K=new g(new be(.0028,6,6),oe);K.position.set(.005,-.006,.023),Yt.add($,K);const O=new be(.026,10,8,0,Math.PI*2,0,Math.PI*.52),ht=new g(O,wt);ht.rotation.x=Math.PI/2,ht.position.set(0,.004,0),ht.scale.set(1.02,.01,1.02),Yt.add(ht),Qt.push(ht),Vt.add(Yt)}dt.add(Vt);const pe=new At;pe.position.set(0,.12,-.16);const z=wt,yt=new Y(.022,.026,.11,8);yt.translate(0,.055,0);const tt=new g(yt,z);tt.rotation.x=-.7,pe.add(tt);const ot=new At;ot.position.set(0,.09,-.065);const gt=new Y(.018,.022,.11,8);gt.translate(0,.055,0);const ut=new g(gt,z);ut.rotation.x=.5,ot.add(ut);const Gt=new At;Gt.position.set(0,.09,.055);const se=new Y(.012,.018,.1,8);se.translate(0,.05,0);const Ee=new g(se,vt);Ee.rotation.x=.8,Gt.add(Ee),ot.add(Gt),pe.add(ot),dt.add(pe),l.add(dt);const re=new Mf;re.moveTo(.025,.025),re.bezierCurveTo(.025,.025,.02,0,0,0),re.bezierCurveTo(-.03,0,-.03,.035,-.03,.035),re.bezierCurveTo(-.03,.055,-.01,.077,.025,.1),re.bezierCurveTo(.06,.077,.08,.055,.08,.035),re.bezierCurveTo(.08,.035,.08,0,.05,0),re.bezierCurveTo(.035,0,.025,.025,.025,.025);const De=new Ra(re);De.scale(.8,-.8,.8);const ze=new qt({color:16007006,side:nn,transparent:!0,opacity:0}),Oe=[];for(let Xt=0;Xt<3;Xt++){const Yt=new g(De,ze.clone());Yt.visible=!1,l.add(Yt),Oe.push({mesh:Yt,vy:.35+Xt*.08,life:0,maxLife:1.6,baseX:(Xt-1)*.12,baseZ:Xt%2===0?.08:-.08})}const Ae=()=>{Oe.forEach((Xt,Yt)=>{Xt.life=Xt.maxLife,Xt.mesh.visible=!0,Xt.mesh.position.set(Xt.baseX,.38+Yt*.05,Xt.baseZ);const T=Xt.mesh.material;T.opacity=1})};o.add(l);let ge=0,Ne=0;const fe=['Kuro-chan (クロちゃん) leans gently into your hand, closes its emerald eyes, and lets out a warm, rumbling purr: "Nyaaa~~ ฅ(≈>ܫ<≈)ฅ"','You scratch Kuro-chan under its chin! The tiny brass bell tinkles softly as it purrs: "*Purrrrrr... Purrrrrr...*"','Kuro-chan rolls slightly onto its side on the warm fleece blanket, happily kneading its little white paws: "Mew! <3"','Kuro-chan nudges its nose against your fingers, completely relaxed in its Ehime Mikan box: "Purr-purr... Nyaa~"'];t.add({id:"stray-cat",x:6,z:21.2,radius:2,prompt:"Pet Kuro-chan the Alley Kitten [クロちゃんを撫でる]",onInteract:()=>{Ne=2.4,Ae(),i&&(i.playCatMeow(),setTimeout(()=>{i&&i.playCatPurr()},320));const Xt=fe[ge%fe.length];ge++,n.show(Xt)}});let te=0,je=2.5,Ve=!1,Ze=0,hn=4,ve=0;return{update:Xt=>{if(te+=Xt,G.scale.y=.76+Math.sin(te*2.2)*.024,G.position.y=.1+Math.sin(te*2.2)*.003,pe.rotation.y=Math.sin(te*1.8)*.22,ot.rotation.y=Math.sin(te*1.8-.4)*.26,Gt.rotation.y=Math.sin(te*1.8-.8)*.32,je-=Xt,je<=0&&!Ve&&(Ve=!0,Ze=0),Ve)if(Ze+=Xt*8,Ze>=Math.PI)Ve=!1,je=3+Math.random()*4,Qt.forEach(Yt=>Yt.scale.set(1.02,.01,1.02));else{const Yt=Math.sin(Ze)*.98+.01;Qt.forEach(T=>T.scale.set(1.02,Yt,1.02))}if(hn-=Xt,hn<=0&&ve<=0&&(ve=Math.PI*2,hn=3.5+Math.random()*5),ve>0){ve-=Xt*14;const Yt=Math.sin(ve)*.22;nt.rotation.z=Math.max(0,Yt),it.rotation.z=Math.min(0,-Yt*.7)}else nt.rotation.z=0,it.rotation.z=0;if(Ne>0)Ne-=Xt,Vt.rotation.x=-.22,Vt.rotation.z=.06*Math.sin(te*3),Qt.forEach(Yt=>Yt.scale.set(1.02,.85,1.02));else if(Vt.rotation.x=0,e){const Yt=e.x-6,T=e.z-21.2;if(Math.hypot(Yt,T)<4.2){const $=Math.atan2(Yt,T),K=Math.max(-1.3,Math.min(1.3,$));Vt.rotation.y=Hs.lerp(Vt.rotation.y,K,Xt*3.5),Vt.rotation.z=Math.sin(te*1.5)*.06}else Vt.rotation.y=Hs.lerp(Vt.rotation.y,0,Xt*2),Vt.rotation.z=Hs.lerp(Vt.rotation.z,0,Xt*2)}for(const Yt of Oe)if(Yt.life>0){Yt.life-=Xt,Yt.mesh.position.y+=Yt.vy*Xt,Yt.mesh.position.x=Yt.baseX+Math.sin(Yt.life*4)*.03;const T=Yt.life/Yt.maxLife,F=Yt.mesh.material;F.opacity=Math.max(0,Math.min(1,T*1.5)),Yt.life<=0&&(Yt.mesh.visible=!1)}}}}class ix{constructor(t){ce(this,"defs",[]);ce(this,"pool",[]);ce(this,"POOL_SIZE",7);ce(this,"updateTimer",0);ce(this,"lastUpdatePos",new N(-9999,-9999,-9999));for(let n=0;n<this.POOL_SIZE;n++){const e=new we(16777215,0,10,1.2);e.position.set(0,-999,0),t.add(e),this.pool.push(e)}}register(t){return this.defs.push(t),t}update(t,n,e,i=!1){this.updateTimer+=t;const s=n.distanceToSquared(this.lastUpdatePos)>.16;if(!i&&!s&&this.updateTimer<.035)return;this.updateTimer=0,this.lastUpdatePos.copy(n);const r=[];for(let a=0;a<this.defs.length;a++){const l=this.defs[a],c=l.x-n.x,d=l.y-n.y,f=l.z-n.z,u=c*c+d*d+f*f,h=l.distance*1.55;if(u>h*h)continue;const m=Math.sqrt(u),_=l.dynamicIntensity?l.dynamicIntensity():l.intensity;if(_<=.01)continue;const x=1/(1+(m/l.distance)**2);let p=_*(1-m/h)*x;l.zone&&e.includes(l.zone)&&(p*=3),r.push({def:l,score:p,curIntensity:_})}r.sort((a,l)=>l.score-a.score);for(let a=0;a<this.POOL_SIZE;a++){const l=this.pool[a];if(a<r.length&&r[a].score>.005){const c=r[a];l.position.set(c.def.x,c.def.y,c.def.z),l.color.setHex(c.def.color),l.intensity=c.curIntensity,l.distance=c.def.distance,l.decay=c.def.decay??1.2}else l.intensity=0,l.position.set(0,-999,0)}}}class ox{constructor(){ce(this,"ctx",null);ce(this,"ambientNode",null);ce(this,"stepTimer",0);ce(this,"stepInterval",.44)}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.startAmbience())}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startAmbience(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),e=n.getChannelData(0);let i=0;for(let a=0;a<t;a++){const l=Math.random()*2-1;e[a]=(i+.02*l)/1.02,i=e[a],e[a]*=3.5}const s=this.ctx.createBufferSource();s.buffer=n,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(140,this.ctx.currentTime),this.ambientNode=this.ctx.createGain(),this.ambientNode.gain.setValueAtTime(.18,this.ctx.currentTime),s.connect(r),r.connect(this.ambientNode),this.ambientNode.connect(this.ctx.destination),s.start()}updateFootsteps(t,n,e){if(!n){this.stepTimer=this.stepInterval*.75;return}this.stepTimer+=t,this.stepTimer>=this.stepInterval&&(this.stepTimer=0,this.playFootstep(e))}playFootstep(t){if(!this.ctx)return;const n=this.ctx.createOscillator(),e=this.ctx.createGain(),i=this.ctx.currentTime;t==="tile"?(n.frequency.setValueAtTime(320,i),n.frequency.exponentialRampToValueAtTime(80,i+.045),e.gain.setValueAtTime(.08,i),e.gain.exponentialRampToValueAtTime(.001,i+.045)):t==="walk"?(n.frequency.setValueAtTime(240,i),n.frequency.exponentialRampToValueAtTime(60,i+.055),e.gain.setValueAtTime(.1,i),e.gain.exponentialRampToValueAtTime(.001,i+.055)):t==="road"?(n.frequency.setValueAtTime(180,i),n.frequency.exponentialRampToValueAtTime(45,i+.065),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.065)):(n.frequency.setValueAtTime(140,i),n.frequency.exponentialRampToValueAtTime(50,i+.05),e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.05)),n.connect(e),e.connect(this.ctx.destination),n.start(i),n.stop(i+.07)}playVendingSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(2400,t),n.frequency.exponentialRampToValueAtTime(800,t+.03),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.04);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(280,t+.08),i.frequency.linearRampToValueAtTime(320,t+.25),s.gain.setValueAtTime(.08,t+.08),s.gain.linearRampToValueAtTime(.001,t+.28),i.connect(s),s.connect(this.ctx.destination),i.start(t+.08),i.stop(t+.29);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.frequency.setValueAtTime(180,t+.32),r.frequency.exponentialRampToValueAtTime(40,t+.45),a.gain.setValueAtTime(.35,t+.32),a.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(a),a.connect(this.ctx.destination),r.start(t+.32),r.stop(t+.46)}playElevatorChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(880,t),e.gain.setValueAtTime(.2,t),e.gain.exponentialRampToValueAtTime(.001,t+.6),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.65);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(659.25,t+.22),s.gain.setValueAtTime(.25,t+.22),s.gain.exponentialRampToValueAtTime(.001,t+.95),i.connect(s),s.connect(this.ctx.destination),i.start(t+.22),i.stop(t+1)}playCatMeow(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(550,t),n.frequency.linearRampToValueAtTime(820,t+.18),n.frequency.linearRampToValueAtTime(620,t+.42),e.gain.setValueAtTime(.01,t),e.gain.linearRampToValueAtTime(.18,t+.08),e.gain.linearRampToValueAtTime(.12,t+.28),e.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.46)}playCatPurr(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(85,t);const e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(26,t);const i=this.ctx.createGain();i.gain.setValueAtTime(35,t);const s=this.ctx.createGain();s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.22,t+.15),s.gain.setValueAtTime(.22,t+1.2),s.gain.exponentialRampToValueAtTime(.001,t+1.6),e.connect(i),i.connect(n.frequency),n.connect(s),s.connect(this.ctx.destination),e.start(t),n.start(t),e.stop(t+1.65),n.stop(t+1.65)}playCrosswalkChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(1800,t),n.frequency.exponentialRampToValueAtTime(1400,t+.12),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playFamilyMartChime(){if(!this.ctx)return;const t=this.ctx.currentTime,n=[{f:739.99,t:0,d:.18},{f:587.33,t:.18,d:.18},{f:440,t:.36,d:.18},{f:587.33,t:.54,d:.18},{f:659.25,t:.72,d:.18},{f:880,t:.9,d:.4},{f:659.25,t:1.35,d:.18},{f:739.99,t:1.53,d:.18},{f:659.25,t:1.71,d:.18},{f:440,t:1.89,d:.18},{f:587.33,t:2.07,d:.45}];for(const e of n){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e.f,t+e.t),s.gain.setValueAtTime(.16,t+e.t),s.gain.exponentialRampToValueAtTime(.001,t+e.t+e.d),i.connect(s),s.connect(this.ctx.destination),i.start(t+e.t),i.stop(t+e.t+e.d+.05)}}playSlidingDoorSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=Math.floor(this.ctx.sampleRate*.4),e=this.ctx.createBuffer(1,n,this.ctx.sampleRate),i=e.getChannelData(0);for(let l=0;l<n;l++)i[l]=(Math.random()*2-1)*(1-l/n);const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(800,t),r.Q.setValueAtTime(2,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.08,t),a.gain.linearRampToValueAtTime(.001,t+.38),s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(t)}playSipWaterSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(240,t+.14),e.gain.setValueAtTime(.12,t),e.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.15)}playDeskBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(2093,t),e.type="sine",e.frequency.setValueAtTime(3135,t),i.gain.setValueAtTime(.22,t),i.gain.exponentialRampToValueAtTime(.001,t+1.1),n.connect(i),e.connect(i),i.connect(this.ctx.destination),n.start(t),e.start(t),n.stop(t+1.1),e.stop(t+1.1)}playRamenTicketSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(587.33,t),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.12);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(880,t+.1),s.gain.setValueAtTime(.18,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(this.ctx.destination),i.start(t+.1),i.stop(t+.35);const r=Math.floor(this.ctx.sampleRate*.25),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),l=a.getChannelData(0);for(let u=0;u<r;u++)l[u]=(Math.random()*2-1)*Math.sin(u/r*Math.PI*40);const c=this.ctx.createBufferSource();c.buffer=a;const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(1400,t+.25);const f=this.ctx.createGain();f.gain.setValueAtTime(.08,t+.25),f.gain.linearRampToValueAtTime(.001,t+.5),c.connect(d),d.connect(f),f.connect(this.ctx.destination),c.start(t+.25)}playBikeBellSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let n=0;n<2;n++){const e=t+n*.12,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(2637,e),s.type="sine",s.frequency.setValueAtTime(4186,e),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),i.connect(r),s.connect(r),r.connect(this.ctx.destination),i.start(e),s.start(e),i.stop(e+.36),s.stop(e+.36)}}playFountainDrinkSound(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let i=0;i<4;i++){const s=t+i*.08,r=this.ctx.createOscillator(),a=this.ctx.createGain(),l=600+Math.random()*400;r.type="sine",r.frequency.setValueAtTime(l,s),r.frequency.exponentialRampToValueAtTime(l+250,s+.06),a.gain.setValueAtTime(.08,s),a.gain.exponentialRampToValueAtTime(.001,s+.06),r.connect(a),a.connect(this.ctx.destination),r.start(s),r.stop(s+.07)}const n=this.ctx.createOscillator(),e=this.ctx.createGain();n.frequency.setValueAtTime(260,t+.35),n.frequency.exponentialRampToValueAtTime(110,t+.5),e.gain.setValueAtTime(.12,t+.35),e.gain.exponentialRampToValueAtTime(.001,t+.52),n.connect(e),e.connect(this.ctx.destination),n.start(t+.35),n.stop(t+.53)}playSwingCreakSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(980,t),n.frequency.linearRampToValueAtTime(1420,t+.08),n.frequency.exponentialRampToValueAtTime(650,t+.22),e.gain.setValueAtTime(.05,t),e.gain.linearRampToValueAtTime(.08,t+.08),e.gain.exponentialRampToValueAtTime(.001,t+.24),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.25)}playSpringRockerSound(){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),e=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(180,t),n.frequency.linearRampToValueAtTime(320,t+.06),n.frequency.exponentialRampToValueAtTime(90,t+.38),e.gain.setValueAtTime(.16,t),e.gain.exponentialRampToValueAtTime(.001,t+.4),n.connect(e),e.connect(this.ctx.destination),n.start(t),n.stop(t+.42)}}class sx{constructor(t){ce(this,"canvas");ce(this,"ctx");ce(this,"scale",3.2);ce(this,"lastX",-9999);ce(this,"lastZ",-9999);ce(this,"lastYaw",-9999);ce(this,"lastTime",0);this.canvas=t,this.canvas.width=256,this.canvas.height=256,this.ctx=t.getContext("2d")}update(t,n=!1){const e=performance.now();if(!n&&e-this.lastTime<50||!n&&Math.abs(t.x-this.lastX)<.04&&Math.abs(t.z-this.lastZ)<.04&&Math.abs(t.yaw-this.lastYaw)<.02)return;this.lastTime=e,this.lastX=t.x,this.lastZ=t.z,this.lastYaw=t.yaw;const i=this.ctx,s=this.canvas.width,r=this.canvas.height,a=s/2,l=r/2;i.fillStyle="#0a0e14",i.fillRect(0,0,s,r),i.save(),i.translate(a,l);const c=h=>(h-t.x)*this.scale,d=h=>(h-t.z)*this.scale;i.fillStyle="#181e28",i.fillRect(c(-55),d(-3.5),110*this.scale,7*this.scale),i.fillRect(c(13.5),d(3.5),5*this.scale,38.5*this.scale),i.fillRect(c(-16.5),d(-42),5*this.scale,38.5*this.scale),i.fillStyle="#222834",i.fillRect(c(-55),d(3.5),110*this.scale,4*this.scale),i.fillRect(c(-55),d(-7.5),110*this.scale,4*this.scale),i.fillRect(c(10.5),d(3.5),3*this.scale,38.5*this.scale),i.fillRect(c(18.5),d(3.5),3*this.scale,38.5*this.scale),i.fillRect(c(-19.5),d(-42),3*this.scale,38.5*this.scale),i.fillRect(c(-11.5),d(-42),3*this.scale,38.5*this.scale),i.fillRect(c(4),d(19.5),9.5*this.scale,3*this.scale),i.fillRect(c(-4),d(21.5),8*this.scale,3*this.scale),i.fillStyle="#222920",i.fillRect(c(-8.5),d(-36.5),18*this.scale,29*this.scale),i.strokeStyle="#2d5a3c",i.lineWidth=1.5,i.strokeRect(c(-8.5),d(-36.5),18*this.scale,29*this.scale),i.fillStyle="#343836",i.fillRect(c(-1.6),d(-18.6),3.2*this.scale,11.1*this.scale),i.fillRect(c(-3.1),d(-24.4),6.2*this.scale,5.8*this.scale),i.fillRect(c(-8.5),d(-23.3),5.4*this.scale,2.6*this.scale),i.fillRect(c(-.5),d(-30.7),3*this.scale,6.5*this.scale),i.fillStyle="#1a3d24",i.fillRect(c(2.3),d(-19.6),5.8*this.scale,7.2*this.scale),i.fillRect(c(-7.4),d(-17.6),4.8*this.scale,6.2*this.scale),i.fillStyle="#475569",i.strokeStyle="#94a3b8",i.lineWidth=1,i.fillRect(c(4.1),d(-34.1),4.2*this.scale,3.2*this.scale),i.strokeRect(c(4.1),d(-34.1),4.2*this.scale,3.2*this.scale),i.fillStyle="#ffffff";const f=[{x:16,z:0,w:4,d:7},{x:-14,z:0,w:4,d:7},{x:0,z:0,w:3.5,d:7},{x:16,z:5.5,w:5,d:3},{x:-14,z:-5.5,w:5,d:3}];for(const h of f)i.globalAlpha=.4,i.fillRect(c(h.x-h.w/2),d(h.z-h.d/2),h.w*this.scale,h.d*this.scale),i.globalAlpha=1;for(const h of Rf){const m=c(h.x-h.w/2),_=d(h.z-h.d/2),x=h.w*this.scale,p=h.d*this.scale;h.id==="b-sunheights"?(i.fillStyle="#1e384d",i.strokeStyle="#4da2d6"):h.id==="b-konbini"?(i.fillStyle="#14422e",i.strokeStyle="#32b87a"):h.id==="b-ramen"?(i.fillStyle="#4a201c",i.strokeStyle="#e04c3e"):h.id==="b-cafe"?(i.fillStyle="#3d2b1c",i.strokeStyle="#c4894d"):(i.fillStyle="#262d38",i.strokeStyle="#3d485a"),i.lineWidth=1.5,i.fillRect(m,_,x,p),i.strokeRect(m,_,x,p),i.font='10px "Yu Gothic UI", sans-serif',i.textAlign="center",i.textBaseline="middle",h.id==="b-sunheights"?(i.fillStyle="#78c6f7",i.fillText("🏠 サンハイツ",c(h.x),d(h.z))):h.id==="b-konbini"?(i.fillStyle="#5ee6a2",i.fillText("🏪 コンビニ",c(h.x),d(h.z))):h.id==="b-ramen"?(i.fillStyle="#ff8878",i.fillText("🍜 麺処",c(h.x),d(h.z))):h.id==="b-cafe"&&(i.fillStyle="#f0b878",i.fillText("☕ 喫茶",c(h.x),d(h.z)))}i.font='10px "Yu Gothic UI", sans-serif',i.fillStyle="#f472b6",i.fillText("🌸 桜公園",c(.5),d(-19)),i.fillStyle="#38bdf8",i.fillText("🛝 遊具",c(-2.5),d(-29)),i.fillStyle="#94a3b8",i.font='8px "Yu Gothic UI", sans-serif',i.fillText("🚻",c(6.2),d(-32.5)),i.restore(),i.save(),i.translate(a,l),i.rotate(-t.yaw);const u=i.createRadialGradient(0,0,2,0,0,36);u.addColorStop(0,"rgba(80, 210, 255, 0.45)"),u.addColorStop(1,"rgba(80, 210, 255, 0.0)"),i.beginPath(),i.moveTo(0,0),i.arc(0,0,36,-Math.PI/2-.45,-Math.PI/2+.45),i.closePath(),i.fillStyle=u,i.fill(),i.beginPath(),i.moveTo(0,-9),i.lineTo(6,6),i.lineTo(0,3),i.lineTo(-6,6),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.strokeStyle="#00aaff",i.lineWidth=1.5,i.stroke(),i.restore(),i.fillStyle="rgba(15, 20, 28, 0.75)",i.fillRect(s-28,6,22,22),i.strokeStyle="rgba(255, 255, 255, 0.2)",i.strokeRect(s-28,6,22,22),i.font="bold 11px sans-serif",i.fillStyle="#e85d4d",i.textAlign="center",i.textBaseline="middle",i.fillText("N",s-17,17)}}class rx{constructor(){ce(this,"locEl");ce(this,"crosshairEl");ce(this,"promptEl");ce(this,"toastEl");ce(this,"overlayEl");ce(this,"lastPrompt","");ce(this,"lastToast","");this.locEl=document.getElementById("location"),this.crosshairEl=document.getElementById("crosshair"),this.promptEl=document.getElementById("prompt"),this.toastEl=document.getElementById("toast"),this.overlayEl=document.getElementById("overlay")}update(t,n,e){var i,s;this.locEl&&this.locEl.textContent!==t&&(this.locEl.textContent=t),this.promptEl&&this.lastPrompt!==n&&(this.lastPrompt=n,n?(this.promptEl.innerHTML=`<kbd>E</kbd> ${n}`,(i=this.crosshairEl)==null||i.classList.add("active")):(this.promptEl.innerHTML="",(s=this.crosshairEl)==null||s.classList.remove("active"))),this.toastEl&&this.lastToast!==e&&(this.lastToast=e,this.toastEl.textContent=e)}showOverlay(){var t;(t=this.overlayEl)==null||t.classList.remove("hidden")}hideOverlay(){var t;(t=this.overlayEl)==null||t.classList.add("hidden")}isOverlayVisible(){var t;return!((t=this.overlayEl)!=null&&t.classList.contains("hidden"))}}async function ax(){const o=new a2;o.background=new me(790551),o.fog=new ba(790551,.022);const t=new vn(74,window.innerWidth/window.innerHeight,.1,90),n=new r2({antialias:!0,powerPreference:"high-performance"});n.setSize(window.innerWidth,window.innerHeight);const e=Math.min(window.devicePixelRatio||1,1);n.setPixelRatio(e),n.toneMapping=Fc,n.toneMappingExposure=1.15,n.shadowMap.enabled=!0,n.shadowMap.type=Nc,n.shadowMap.autoUpdate=!1;const i=document.getElementById("app");i?i.appendChild(n.domElement):document.body.appendChild(n.domElement);const s=new k2(2635856,658708,.75);o.add(s);const r=new H2(8561876,.55);r.position.set(24,45,18),r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.near=.5,r.shadow.camera.far=120,r.shadow.camera.left=-50,r.shadow.camera.right=50,r.shadow.camera.top=50,r.shadow.camera.bottom=-50,r.shadow.bias=-6e-4,o.add(r);let a=!0;X2();const l=new Y2,c=new Z2,d=new q2,f=new ox,u=new rx,h=new t1(0,18.2,Math.PI);h.applyCamera(t);const m=new ix(o);mg(o,l);const _=_g(o,l,c,d,f,m),x=Rg(o,l,c,d,h,f,m),p=document.getElementById("minimap"),M=p?new sx(p):null;let v=!1;const w=()=>{document.pointerLockElement===document.body?(v=!0,u.hideOverlay(),f.init(),f.resume()):(v=!1,u.showOverlay())};document.addEventListener("pointerlockchange",w);const P=()=>{f.init(),f.resume(),document.body.requestPointerLock()},R=document.getElementById("overlay");R&&R.addEventListener("click",P),window.addEventListener("click",()=>{v||P()}),window.addEventListener("mousemove",rt=>{v&&h.applyMouse(rt.movementX,rt.movementY)}),window.addEventListener("keydown",rt=>{if(rt.code==="KeyE"){const at=c.prompt().toLowerCase();at.includes("buy")||at.includes("coffee")||at.includes("tea")||at.includes("famichiki")||at.includes("chicken")?f.playVendingSound():at.includes("water")||at.includes("drink park")?f.playSipWaterSound():at.includes("elevator")?f.playElevatorChime():at.includes("cat")||at.includes("pet")?f.playCatMeow():(at.includes("signal")||at.includes("crossing")||at.includes("button"))&&f.playCrosswalkChime(),c.use()}});let E=1,I=0,S=0;window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(e*E),a=!0}),d.show("Welcome home to Tokyo. Walk through the front glass doors to explore the neighbourhood.",6);const y=new V2,k=1e3/120;let H=performance.now(),J=0,q=performance.now(),V=120;const Q=document.getElementById("fps-badge");function X(rt){if(requestAnimationFrame(X),document.hidden)return;const at=v?k:1e3/30,dt=rt-H;if(dt<at-1)return;H=rt-dt%at,J++,rt-q>=1e3&&(V=Math.round(J*1e3/(rt-q)),J=0,q=rt,Q&&(Q.textContent=`${V} FPS`),V<22?(I++,S=0,I>=2&&E>.82&&(E=.82,n.setPixelRatio(e*E))):V>=48?(S++,I=0,S>=3&&E<1&&(E=1,n.setPixelRatio(e*E))):(I=0,S=0));const wt=Math.min(y.getDelta(),.05);h.update(wt,v,l),h.applyCamera(t),_.update(wt,h),x.update(wt),c.update(h,l),d.update(wt);const vt=v&&!h.seated&&h.moving();let B="walk";const G=J2(h.x,h.z);m.update(wt,t.position,G),G.includes("Lobby")||G.includes("Store")||G.includes("Ramen")?B="tile":G.includes("Park")?B="park":Af(h.x,h.z)&&(B="road"),f.updateFootsteps(wt,vt,B),u.update(G,c.prompt(),d.text),M&&M.update(h),a&&(n.shadowMap.needsUpdate=!0,a=!1),n.render(o,t)}requestAnimationFrame(X)}window.addEventListener("DOMContentLoaded",()=>{ax().catch(o=>console.error("Initialization error:",o))});
