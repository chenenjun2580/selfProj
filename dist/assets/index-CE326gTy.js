(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const me={},$s=[],$n=()=>{},Yf=()=>!1,fo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ho=n=>n.startsWith("onUpdate:"),Re=Object.assign,zc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},fm=Object.prototype.hasOwnProperty,re=(n,t)=>fm.call(n,t),zt=Array.isArray,Ks=n=>pr(n)==="[object Map]",$f=n=>pr(n)==="[object Set]",Fu=n=>pr(n)==="[object Date]",hm=n=>pr(n)==="[object RegExp]",Wt=n=>typeof n=="function",_e=n=>typeof n=="string",Zn=n=>typeof n=="symbol",ae=n=>n!==null&&typeof n=="object",Kf=n=>(ae(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),Zf=Object.prototype.toString,pr=n=>Zf.call(n),pm=n=>pr(n).slice(8,-1),Jf=n=>pr(n)==="[object Object]",Hc=n=>_e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),po=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},mm=/-\w/g,nn=po(n=>n.replace(mm,t=>t.slice(1).toUpperCase())),gm=/\B([A-Z])/g,$i=po(n=>n.replace(gm,"-$1").toLowerCase()),mo=po(n=>n.charAt(0).toUpperCase()+n.slice(1)),Io=po(n=>n?`on${mo(n)}`:""),jn=(n,t)=>!Object.is(n,t),Zs=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Qf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Vc=n=>{const t=parseFloat(n);return isNaN(t)?n:t},vm=n=>{const t=_e(n)?Number(n):NaN;return isNaN(t)?n:t};let Nu;const go=()=>Nu||(Nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function he(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=_e(i)?Mm(i):he(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(_e(n)||ae(n))return n}const _m=/;(?![^(]*\))/g,xm=/:([^]+)/,ym=/\/\*[^]*?\*\//g;function Mm(n){const t={};return n.replace(ym,"").split(_m).forEach(e=>{if(e){const i=e.split(xm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ke(n){let t="";if(_e(n))t=n;else if(zt(n))for(let e=0;e<n.length;e++){const i=ke(n[e]);i&&(t+=i+" ")}else if(ae(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Sm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Em=kc(Sm);function th(n){return!!n||n===""}function bm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Gc(n[i],t[i]);return e}function Gc(n,t){if(n===t)return!0;let e=Fu(n),i=Fu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Zn(n),i=Zn(t),e||i)return n===t;if(e=zt(n),i=zt(t),e||i)return e&&i?bm(n,t):!1;if(e=ae(n),i=ae(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Gc(n[a],t[a]))return!1}}return String(n)===String(t)}const eh=n=>!!(n&&n.__v_isRef===!0),Se=n=>_e(n)?n:n==null?"":zt(n)||ae(n)&&(n.toString===Zf||!Wt(n.toString))?eh(n)?Se(n.value):JSON.stringify(n,nh,2):String(n),nh=(n,t)=>eh(t)?nh(n,t.value):Ks(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Uo(i,r)+" =>"]=s,e),{})}:$f(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Uo(e))}:Zn(t)?Uo(t):ae(t)&&!zt(t)&&!Jf(t)?String(t):t,Uo=(n,t="")=>{var e;return Zn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class ih{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&He&&(He.active?(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=He;try{return He=this,t()}finally{He=e}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){if(this._on>0&&--this._on===0){if(He===this)He=this.prevScope;else{let t=He;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Tm(n){return new ih(n)}function Am(){return He}let ve;const Fo=new WeakSet;class sh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&(He.active?He.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fo.has(this)&&(Fo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),oh(this);const t=ve,e=Un;ve=this,Un=!0;try{return this.fn()}finally{lh(this),ve=t,Un=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)jc(t);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rl(this)&&this.run()}get dirty(){return Rl(this)}}let rh=0,zr,Hr;function ah(n,t=!1){if(n.flags|=8,t){n.next=Hr,Hr=n;return}n.next=zr,zr=n}function Wc(){rh++}function Xc(){if(--rh>0)return;if(Hr){let t=Hr;for(Hr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;zr;){let t=zr;for(zr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function oh(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function lh(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),jc(i),wm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Rl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ch(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function ch(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===qr)||(n.globalVersion=qr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rl(n))))return;n.flags|=2;const t=n.dep,e=ve,i=Un;ve=n,Un=!0;try{oh(n);const s=n.fn(n._value);(t.version===0||jn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ve=e,Un=i,lh(n),n.flags&=-3}}function jc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)jc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function wm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Un=!0;const uh=[];function vi(){uh.push(Un),Un=!1}function _i(){const n=uh.pop();Un=n===void 0?!0:n}function Ou(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ve;ve=void 0;try{t()}finally{ve=e}}}let qr=0;class Cm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!Un||ve===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ve)e=this.activeLink=new Cm(ve,this),ve.deps?(e.prevDep=ve.depsTail,ve.depsTail.nextDep=e,ve.depsTail=e):ve.deps=ve.depsTail=e,dh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ve.depsTail,e.nextDep=void 0,ve.depsTail.nextDep=e,ve.depsTail=e,ve.deps===e&&(ve.deps=i)}return e}trigger(t){this.version++,qr++,this.notify(t)}notify(t){Wc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Xc()}}}function dh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)dh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Pl=new WeakMap,ps=Symbol(""),Dl=Symbol(""),Yr=Symbol("");function je(n,t,e){if(Un&&ve){let i=Pl.get(n);i||Pl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new qc),s.map=i,s.key=e),s.track()}}function fi(n,t,e,i,s,r){const a=Pl.get(n);if(!a){qr++;return}const o=l=>{l&&l.trigger()};if(Wc(),t==="clear")a.forEach(o);else{const l=zt(n),c=l&&Hc(e);if(l&&e==="length"){const u=Number(i);a.forEach((d,f)=>{(f==="length"||f===Yr||!Zn(f)&&f>=u)&&o(d)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),c&&o(a.get(Yr)),t){case"add":l?c&&o(a.get("length")):(o(a.get(ps)),Ks(n)&&o(a.get(Dl)));break;case"delete":l||(o(a.get(ps)),Ks(n)&&o(a.get(Dl)));break;case"set":Ks(n)&&o(a.get(ps));break}}Xc()}function Ts(n){const t=ee(n);return t===n?t:(je(t,"iterate",Yr),bn(n)?t:t.map(Bn))}function vo(n){return je(n=ee(n),"iterate",Yr),n}function Gn(n,t){return xi(n)?sr(ms(n)?Bn(t):t):Bn(t)}const Rm={__proto__:null,[Symbol.iterator](){return No(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return Ts(this).concat(...n.map(t=>zt(t)?Ts(t):t))},entries(){return No(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,t){return ni(this,"every",n,t,void 0,arguments)},filter(n,t){return ni(this,"filter",n,t,e=>e.map(i=>Gn(this,i)),arguments)},find(n,t){return ni(this,"find",n,t,e=>Gn(this,e),arguments)},findIndex(n,t){return ni(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ni(this,"findLast",n,t,e=>Gn(this,e),arguments)},findLastIndex(n,t){return ni(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ni(this,"forEach",n,t,void 0,arguments)},includes(...n){return Oo(this,"includes",n)},indexOf(...n){return Oo(this,"indexOf",n)},join(n){return Ts(this).join(n)},lastIndexOf(...n){return Oo(this,"lastIndexOf",n)},map(n,t){return ni(this,"map",n,t,void 0,arguments)},pop(){return yr(this,"pop")},push(...n){return yr(this,"push",n)},reduce(n,...t){return Bu(this,"reduce",n,t)},reduceRight(n,...t){return Bu(this,"reduceRight",n,t)},shift(){return yr(this,"shift")},some(n,t){return ni(this,"some",n,t,void 0,arguments)},splice(...n){return yr(this,"splice",n)},toReversed(){return Ts(this).toReversed()},toSorted(n){return Ts(this).toSorted(n)},toSpliced(...n){return Ts(this).toSpliced(...n)},unshift(...n){return yr(this,"unshift",n)},values(){return No(this,"values",n=>Gn(this,n))}};function No(n,t,e){const i=vo(n),s=i[t]();return i!==n&&!bn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Pm=Array.prototype;function ni(n,t,e,i,s,r){const a=vo(n),o=a!==n&&!bn(n),l=a[t];if(l!==Pm[t]){const d=l.apply(n,r);return o?Bn(d):d}let c=e;a!==n&&(o?c=function(d,f){return e.call(this,Gn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Bu(n,t,e,i){const s=vo(n),r=s!==n&&!bn(n);let a=e,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,d){return o&&(o=!1,c=Gn(n,c)),e.call(this,c,Gn(n,u),d,n)}):e.length>3&&(a=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](a,...i);return o?Gn(n,l):l}function Oo(n,t,e){const i=ee(n);je(i,"iterate",Yr);const s=i[t](...e);return(s===-1||s===!1)&&Kc(e[0])?(e[0]=ee(e[0]),i[t](...e)):s}function yr(n,t,e=[]){vi(),Wc();const i=ee(n)[t].apply(n,e);return Xc(),_i(),i}const Dm=kc("__proto__,__v_isRef,__isVue"),fh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function Lm(n){Zn(n)||(n=String(n));const t=ee(this);return je(t,"has",n),t.hasOwnProperty(n)}class hh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Vm:vh:r?gh:mh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=zt(t);if(!s){let l;if(a&&(l=Rm[e]))return l;if(e==="hasOwnProperty")return Lm}const o=Reflect.get(t,e,$e(t)?t:i);if((Zn(e)?fh.has(e):Dm(e))||(s||je(t,"get",e),r))return o;if($e(o)){const l=a&&Hc(e)?o:o.value;return s&&ae(l)?Il(l):l}return ae(o)?s?Il(o):_o(o):o}}class ph extends hh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const a=zt(t)&&Hc(e);if(!this._isShallow){const c=xi(r);if(!bn(i)&&!xi(i)&&(r=ee(r),i=ee(i)),!a&&$e(r)&&!$e(i))return c||(r.value=i),!0}const o=a?Number(e)<t.length:re(t,e),l=Reflect.set(t,e,i,$e(t)?t:s);return t===ee(s)&&(o?jn(i,r)&&fi(t,"set",e,i):fi(t,"add",e,i)),l}deleteProperty(t,e){const i=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&fi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Zn(e)||!fh.has(e))&&je(t,"has",e),i}ownKeys(t){return je(t,"iterate",zt(t)?"length":ps),Reflect.ownKeys(t)}}class Im extends hh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Um=new ph,Fm=new Im,Nm=new ph(!0);const Ll=n=>n,ua=n=>Reflect.getPrototypeOf(n);function Om(n,t,e){return function(...i){const s=this.__v_raw,r=ee(s),a=Ks(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=e?Ll:t?sr:Bn;return!t&&je(r,"iterate",l?Dl:ps),Re(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function da(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Bm(n,t){const e={get(s){const r=this.__v_raw,a=ee(r),o=ee(s);n||(jn(s,o)&&je(a,"get",s),je(a,"get",o));const{has:l}=ua(a),c=t?Ll:n?sr:Bn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&je(ee(s),"iterate",ps),s.size},has(s){const r=this.__v_raw,a=ee(r),o=ee(s);return n||(jn(s,o)&&je(a,"has",s),je(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=ee(o),c=t?Ll:n?sr:Bn;return!n&&je(l,"iterate",ps),o.forEach((u,d)=>s.call(r,c(u),c(d),a))}};return Re(e,n?{add:da("add"),set:da("set"),delete:da("delete"),clear:da("clear")}:{add(s){const r=ee(this),a=ua(r),o=ee(s),l=!t&&!bn(s)&&!xi(s)?o:s;return a.has.call(r,l)||jn(s,l)&&a.has.call(r,s)||jn(o,l)&&a.has.call(r,o)||(r.add(l),fi(r,"add",l,l)),this},set(s,r){!t&&!bn(r)&&!xi(r)&&(r=ee(r));const a=ee(this),{has:o,get:l}=ua(a);let c=o.call(a,s);c||(s=ee(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?jn(r,u)&&fi(a,"set",s,r):fi(a,"add",s,r),this},delete(s){const r=ee(this),{has:a,get:o}=ua(r);let l=a.call(r,s);l||(s=ee(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=ee(this),r=s.size!==0,a=s.clear();return r&&fi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Om(s,n,t)}),e}function Yc(n,t){const e=Bm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(re(e,s)&&s in i?e:i,s,r)}const km={get:Yc(!1,!1)},zm={get:Yc(!1,!0)},Hm={get:Yc(!0,!1)};const mh=new WeakMap,gh=new WeakMap,vh=new WeakMap,Vm=new WeakMap;function Gm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _o(n){return xi(n)?n:$c(n,!1,Um,km,mh)}function _h(n){return $c(n,!1,Nm,zm,gh)}function Il(n){return $c(n,!0,Fm,Hm,vh)}function $c(n,t,e,i,s){if(!ae(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Gm(pm(n));if(a===0)return n;const o=new Proxy(n,a===2?i:e);return s.set(n,o),o}function ms(n){return xi(n)?ms(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function bn(n){return!!(n&&n.__v_isShallow)}function Kc(n){return n?!!n.__v_raw:!1}function ee(n){const t=n&&n.__v_raw;return t?ee(t):n}function xh(n){return!re(n,"__v_skip")&&Object.isExtensible(n)&&Qf(n,"__v_skip",!0),n}const Bn=n=>ae(n)?_o(n):n,sr=n=>ae(n)?Il(n):n;function $e(n){return n?n.__v_isRef===!0:!1}function Pt(n){return yh(n,!1)}function Wm(n){return yh(n,!0)}function yh(n,t){return $e(n)?n:new Xm(n,t)}class Xm{constructor(t,e){this.dep=new qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ee(t),this._value=e?t:Bn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||bn(t)||xi(t);t=i?t:ee(t),jn(t,e)&&(this._rawValue=t,this._value=i?t:Bn(t),this.dep.trigger())}}function gs(n){return $e(n)?n.value:n}const jm={get:(n,t,e)=>t==="__v_raw"?n:gs(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return $e(s)&&!$e(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Mh(n){return ms(n)?n:new Proxy(n,jm)}class qm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return ah(this,!0),!0}get value(){const t=this.dep.track();return ch(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ym(n,t,e=!1){let i,s;return Wt(n)?i=n:(i=n.get,s=n.set),new qm(i,s,e)}const fa={},Za=new WeakMap;let as;function $m(n,t=!1,e=as){if(e){let i=Za.get(e);i||Za.set(e,i=[]),i.push(n)}}function Km(n,t,e=me){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,c=_=>s?_:bn(_)||s===!1||s===0?hi(_,1):hi(_);let u,d,f,h,g=!1,v=!1;if($e(n)?(d=()=>n.value,g=bn(n)):ms(n)?(d=()=>c(n),g=!0):zt(n)?(v=!0,g=n.some(_=>ms(_)||bn(_)),d=()=>n.map(_=>{if($e(_))return _.value;if(ms(_))return c(_);if(Wt(_))return l?l(_,2):_()})):Wt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){vi();try{f()}finally{_i()}}const _=as;as=u;try{return l?l(n,3,[h]):n(h)}finally{as=_}}:d=$n,t&&s){const _=d,U=s===!0?1/0:s;d=()=>hi(_(),U)}const m=Am(),p=()=>{u.stop(),m&&m.active&&zc(m.effects,u)};if(r&&t){const _=t;t=(...U)=>{const P=_(...U);return p(),P}}let T=v?new Array(n.length).fill(fa):fa;const A=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(t){const U=u.run();if(_||s||g||(v?U.some((P,y)=>jn(P,T[y])):jn(U,T))){f&&f();const P=as;as=u;try{const y=[U,T===fa?void 0:v&&T[0]===fa?[]:T,h];T=U,l?l(t,3,y):t(...y)}finally{as=P}}}else u.run()};return o&&o(A),u=new sh(d),u.scheduler=a?()=>a(A,!1):A,h=_=>$m(_,!1,u),f=u.onStop=()=>{const _=Za.get(u);if(_){if(l)l(_,4);else for(const U of _)U();Za.delete(u)}},t?i?A(!0):T=u.run():a?a(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function hi(n,t=1/0,e){if(t<=0||!ae(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,$e(n))hi(n.value,t,e);else if(zt(n))for(let i=0;i<n.length;i++)hi(n[i],t,e);else if($f(n)||Ks(n))n.forEach(i=>{hi(i,t,e)});else if(Jf(n)){for(const i in n)hi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function na(n,t,e,i){try{return i?n(...i):n()}catch(s){xo(s,t,e)}}function Tn(n,t,e,i){if(Wt(n)){const s=na(n,t,e,i);return s&&Kf(s)&&s.catch(r=>{xo(r,t,e)}),s}if(zt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Tn(n[r],t,e,i));return s}}function xo(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||me;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}o=o.parent}if(r){vi(),na(r,null,10,[n,l,c]),_i();return}}Zm(n,e,s,i,a)}function Zm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const tn=[];let Vn=-1;const Js=[];let Ni=null,Ws=0;const Sh=Promise.resolve();let Ja=null;function _s(n){const t=Ja||Sh;return n?t.then(this?n.bind(this):n):t}function Jm(n){let t=Vn+1,e=tn.length;for(;t<e;){const i=t+e>>>1,s=tn[i],r=$r(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Zc(n){if(!(n.flags&1)){const t=$r(n),e=tn[tn.length-1];!e||!(n.flags&2)&&t>=$r(e)?tn.push(n):tn.splice(Jm(t),0,n),n.flags|=1,Eh()}}function Eh(){Ja||(Ja=Sh.then(Th))}function Qm(n){zt(n)?Js.push(...n):Ni&&n.id===-1?Ni.splice(Ws+1,0,n):n.flags&1||(Js.push(n),n.flags|=1),Eh()}function ku(n,t,e=Vn+1){for(;e<tn.length;e++){const i=tn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;tn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function bh(n){if(Js.length){const t=[...new Set(Js)].sort((e,i)=>$r(e)-$r(i));if(Js.length=0,Ni){Ni.push(...t);return}for(Ni=t,Ws=0;Ws<Ni.length;Ws++){const e=Ni[Ws];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Ni=null,Ws=0}}const $r=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Th(n){try{for(Vn=0;Vn<tn.length;Vn++){const t=tn[Vn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),na(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Vn<tn.length;Vn++){const t=tn[Vn];t&&(t.flags&=-2)}Vn=-1,tn.length=0,bh(),Ja=null,(tn.length||Js.length)&&Th()}}let fn=null,Ah=null;function Qa(n){const t=fn;return fn=n,Ah=n&&n.type.__scopeId||null,t}function Mn(n,t=fn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&so(-1);const r=Qa(t);let a;try{a=n(...s)}finally{Qa(r),i._d&&so(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Jc(n,t){if(fn===null)return n;const e=Ao(fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,o,l=me]=t[s];r&&(Wt(r)&&(r={mounted:r,updated:r}),r.deep&&hi(a),i.push({dir:r,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Zi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(vi(),Tn(l,e,8,[n.el,o,n,t]),_i())}}function Ha(n,t){if(Ye){let e=Ye.provides;const i=Ye.parent&&Ye.parent.provides;i===e&&(e=Ye.provides=Object.create(i)),e[n]=t}}function Fn(n,t,e=!1){const i=To();if(i||Qs){let s=Qs?Qs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}const tg=Symbol.for("v-scx"),eg=()=>Fn(tg);function Vr(n,t,e){return wh(n,t,e)}function wh(n,t,e=me){const{immediate:i,deep:s,flush:r,once:a}=e,o=Re({},e),l=t&&i||!t&&r!=="post";let c;if(Qr){if(r==="sync"){const h=eg();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=$n,h.resume=$n,h.pause=$n,h}}const u=Ye;o.call=(h,g,v)=>Tn(h,u,g,v);let d=!1;r==="post"?o.scheduler=h=>{Le(h,u&&u.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(h,g)=>{g?h():Zc(h)}),o.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Km(n,t,o);return Qr&&(c?c.push(f):l&&f()),f}function ng(n,t,e){const i=this.proxy,s=_e(n)?n.includes(".")?Ch(i,n):()=>i[n]:n.bind(i,i);let r;Wt(t)?r=t:(r=t.handler,e=t);const a=ia(this),o=wh(s,r.bind(i),e);return a(),o}function Ch(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Ui=new WeakMap,Rh=Symbol("_vte"),Ph=n=>n.__isTeleport,ls=n=>n&&(n.disabled||n.disabled===""),ig=n=>n&&(n.defer||n.defer===""),zu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Hu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Ul=(n,t)=>{const e=n&&n.to;return _e(e)?t?t(e):null:e},sg={name:"Teleport",__isTeleport:!0,process(n,t,e,i,s,r,a,o,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:v,createComment:m,parentNode:p}}=c,T=ls(t.props);let{dynamicChildren:A}=t;const _=(y,I,M)=>{y.shapeFlag&16&&u(y.children,I,M,s,r,a,o,l)},U=(y=t)=>{const I=ls(y.props),M=y.target=Ul(y.props,g),S=Fl(M,y,v,h);M&&(a!=="svg"&&zu(M)?a="svg":a!=="mathml"&&Hu(M)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(M),I||(_(y,M,S),Ir(y,!1)))},P=y=>{const I=()=>{if(Ui.get(y)===I){if(Ui.delete(y),ls(y.props)){const M=p(y.el)||e;_(y,M,y.anchor),Ir(y,!0)}U(y)}};Ui.set(y,I),Le(I,r)};if(n==null){const y=t.el=v(""),I=t.anchor=v("");if(h(y,e,i),h(I,e,i),ig(t.props)||r&&r.pendingBranch){P(t);return}T&&(_(t,e,I),Ir(t,!0)),U()}else{t.el=n.el;const y=t.anchor=n.anchor,I=Ui.get(n);if(I){I.flags|=8,Ui.delete(n),P(t);return}t.targetStart=n.targetStart;const M=t.target=n.target,S=t.targetAnchor=n.targetAnchor,D=ls(n.props),B=D?e:M,k=D?y:S;if(a==="svg"||zu(M)?a="svg":(a==="mathml"||Hu(M))&&(a="mathml"),A?(f(n.dynamicChildren,A,B,s,r,a,o),ru(n,t,!0)):l||d(n,t,B,k,s,r,a,o,!1),T)D?t.props&&n.props&&t.props.to!==n.props.to&&(t.props.to=n.props.to):ha(t,e,y,c,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const nt=t.target=Ul(t.props,g);nt&&ha(t,nt,null,c,0)}else D&&ha(t,M,S,c,1);Ir(t,T)}},remove(n,t,e,{um:i,o:{remove:s}},r){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n,h=r||!ls(f),g=Ui.get(n);if(g&&(g.flags|=8,Ui.delete(n)),d&&(s(c),s(u)),r&&s(l),!g&&a&16)for(let v=0;v<o.length;v++){const m=o[v];i(m,t,e,h,!!m.dynamicChildren)}},move:ha,hydrate:rg};function ha(n,t,e,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,t,e);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=n,d=r===2;if(d&&i(a,t,e),!Ui.has(n)&&(!d||ls(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],t,e,2);d&&i(o,t,e)}function rg(n,t,e,i,s,r,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:u}},d){function f(m,p){let T=p;for(;T;){if(T&&T.nodeType===8){if(T.data==="teleport start anchor")t.targetStart=T;else if(T.data==="teleport anchor"){t.targetAnchor=T,m._lpa=t.targetAnchor&&a(t.targetAnchor);break}}T=a(T)}}function h(m,p){p.anchor=d(a(m),p,o(m),e,i,s,r)}const g=t.target=Ul(t.props,l),v=ls(t.props);if(g){const m=g._lpa||g.firstChild;t.shapeFlag&16&&(v?(h(n,t),f(g,m),t.targetAnchor||Fl(g,t,u,c,o(n)===g?n:null)):(t.anchor=a(n),f(g,m),t.targetAnchor||Fl(g,t,u,c),d(m&&a(m),t,g,e,i,s,r))),Ir(t,v)}else v&&t.shapeFlag&16&&(h(n,t),t.targetStart=n,t.targetAnchor=a(n));return t.anchor&&a(t.anchor)}const yo=sg;function Ir(n,t){const e=n.ctx;if(e&&e.ut){let i,s;for(t?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",e.uid),i=i.nextSibling;e.ut()}}function Fl(n,t,e,i,s=null){const r=t.targetStart=e(""),a=t.targetAnchor=e("");return r[Rh]=a,n&&(i(r,n,s),i(a,n,s)),a}const _n=Symbol("_leaveCb"),Mr=Symbol("_enterCb");function Dh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return An(()=>{n.isMounted=!0}),nu(()=>{n.isUnmounting=!0}),n}const mn=[Function,Array],Lh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},Ih=n=>{const t=n.subTree;return t.component?Ih(t.component):t},ag={name:"BaseTransition",props:Lh,setup(n,{slots:t}){const e=To(),i=Dh();return()=>{const s=t.default&&Qc(t.default(),!0),r=s&&s.length?Uh(s):e.subTree?Zt():void 0;if(!r)return;const a=ee(n),{mode:o}=a;if(i.isLeaving)return Bo(r);const l=Vu(r);if(!l)return Bo(r);let c=Kr(l,a,i,e,d=>c=d);l.type!==qe&&Xi(l,c);let u=e.subTree&&Vu(e.subTree);if(u&&u.type!==qe&&!ki(u,l)&&Ih(e).type!==qe){let d=Kr(u,a,i,e);if(Xi(u,d),o==="out-in"&&l.type!==qe)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete d.afterLeave,u=void 0},Bo(r);o==="in-out"&&l.type!==qe?d.delayLeave=(f,h,g)=>{const v=Fh(i,u);v[String(u.key)]=u,f[_n]=()=>{h(),f[_n]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Uh(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==qe){t=e;break}}return t}const og=ag;function Fh(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Kr(n,t,e,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:T,onAppearCancelled:A}=t,_=String(n.key),U=Fh(e,n),P=(M,S)=>{M&&Tn(M,i,9,S)},y=(M,S)=>{const D=S[1];P(M,S),zt(M)?M.every(B=>B.length<=1)&&D():M.length<=1&&D()},I={mode:a,persisted:o,beforeEnter(M){let S=l;if(!e.isMounted)if(r)S=m||l;else return;M[_n]&&M[_n](!0);const D=U[_];D&&ki(n,D)&&D.el[_n]&&D.el[_n](),P(S,[M])},enter(M){if(U[_]===n)return;let S=c,D=u,B=d;if(!e.isMounted)if(r)S=p||c,D=T||u,B=A||d;else return;let k=!1;M[Mr]=ct=>{k||(k=!0,ct?P(B,[M]):P(D,[M]),I.delayedLeave&&I.delayedLeave(),M[Mr]=void 0)};const nt=M[Mr].bind(null,!1);S?y(S,[M,nt]):nt()},leave(M,S){const D=String(n.key);if(M[Mr]&&M[Mr](!0),e.isUnmounting)return S();P(f,[M]);let B=!1;M[_n]=nt=>{B||(B=!0,S(),nt?P(v,[M]):P(g,[M]),M[_n]=void 0,U[D]===n&&delete U[D])};const k=M[_n].bind(null,!1);U[D]=n,h?y(h,[M,k]):k()},clone(M){const S=Kr(M,t,e,i,s);return s&&s(S),S}};return I}function Bo(n){if(Mo(n))return n=yi(n),n.children=null,n}function Vu(n){if(!Mo(n))return Ph(n.type)&&n.children?Uh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Wt(e.default))return e.default()}}function Xi(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Xi(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Qc(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===ce?(a.patchFlag&128&&s++,i=i.concat(Qc(a.children,t,o))):(t||a.type!==qe)&&i.push(o!=null?yi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function xe(n,t){return Wt(n)?Re({name:n.name},t,{setup:n}):n}function Nh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Gu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const to=new WeakMap;function Gr(n,t,e,i,s=!1){if(zt(n)){n.forEach((v,m)=>Gr(v,t&&(zt(t)?t[m]:t),e,i,s));return}if(vs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Gr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ao(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=t&&t.r,u=o.refs===me?o.refs={}:o.refs,d=o.setupState,f=ee(d),h=d===me?Yf:v=>Gu(u,v)?!1:re(f,v),g=(v,m)=>!(m&&Gu(u,m));if(c!=null&&c!==l){if(Wu(t),_e(c))u[c]=null,h(c)&&(d[c]=null);else if($e(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Wt(l))na(l,o,12,[a,u]);else{const v=_e(l),m=$e(l);if(v||m){const p=()=>{if(n.f){const T=v?h(l)?d[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)zt(T)&&zc(T,r);else if(zt(T))T.includes(r)||T.push(r);else if(v)u[l]=[r],h(l)&&(d[l]=u[l]);else{const A=[r];g(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else v?(u[l]=a,h(l)&&(d[l]=a)):m&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const T=()=>{p(),to.delete(n)};T.id=-1,to.set(n,T),Le(T,e)}else Wu(n),p()}}}function Wu(n){const t=to.get(n);t&&(t.flags|=8,to.delete(n))}go().requestIdleCallback;go().cancelIdleCallback;const vs=n=>!!n.type.__asyncLoader,Mo=n=>n.type.__isKeepAlive,lg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const e=To(),i=e.ctx;if(!i.renderer)return()=>{const T=t.default&&t.default();return T&&T.length===1?T[0]:T};const s=new Map,r=new Set;let a=null;const o=e.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=i,f=d("div");i.activate=(T,A,_,U,P)=>{const y=T.component;c(T,A,_,0,o),l(y.vnode,T,A,_,y,o,U,T.slotScopeIds,P),Le(()=>{y.isDeactivated=!1,y.a&&Zs(y.a);const I=T.props&&T.props.onVnodeMounted;I&&vn(I,y.parent,T)},o)},i.deactivate=T=>{const A=T.component;no(A.m),no(A.a),c(T,f,null,1,o),Le(()=>{A.da&&Zs(A.da);const _=T.props&&T.props.onVnodeUnmounted;_&&vn(_,A.parent,T),A.isDeactivated=!0},o)};function h(T){ko(T),u(T,e,o,!0)}function g(T){s.forEach((A,_)=>{const U=Hl(vs(A)?A.type.__asyncResolved||{}:A.type);U&&!T(U)&&v(_)})}function v(T){const A=s.get(T);A&&(!a||!ki(A,a))?h(A):a&&ko(a),s.delete(T),r.delete(T)}Vr(()=>[n.include,n.exclude],([T,A])=>{T&&g(_=>Ur(T,_)),A&&g(_=>!Ur(A,_))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(io(e.subTree.type)?Le(()=>{s.set(m,pa(e.subTree))},e.subTree.suspense):s.set(m,pa(e.subTree)))};return An(p),eu(p),nu(()=>{s.forEach(T=>{const{subTree:A,suspense:_}=e,U=pa(A);if(T.type===U.type&&T.key===U.key){ko(U);const P=U.component.da;P&&Le(P,_);return}h(T)})}),()=>{if(m=null,!t.default)return a=null;const T=t.default(),A=T[0];if(T.length>1)return a=null,T;if(!Jr(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return a=null,A;let _=pa(A);if(_.type===qe)return a=null,_;const U=_.type,P=Hl(vs(_)?_.type.__asyncResolved||{}:U),{include:y,exclude:I,max:M}=n;if(y&&(!P||!Ur(y,P))||I&&P&&Ur(I,P))return _.shapeFlag&=-257,a=_,A;const S=_.key==null?U:_.key,D=s.get(S);return _.el&&(_=yi(_),A.shapeFlag&128&&(A.ssContent=_)),m=S,D?(_.el=D.el,_.component=D.component,_.transition&&Xi(_,_.transition),_.shapeFlag|=512,r.delete(S),r.add(S)):(r.add(S),M&&r.size>parseInt(M,10)&&v(r.values().next().value)),_.shapeFlag|=256,a=_,io(A.type)?A:_}}},cg=lg;function Ur(n,t){return zt(n)?n.some(e=>Ur(e,t)):_e(n)?n.split(",").includes(t):hm(n)?(n.lastIndex=0,n.test(t)):!1}function tu(n,t){Bh(n,"a",t)}function Oh(n,t){Bh(n,"da",t)}function Bh(n,t,e=Ye){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(So(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Mo(s.parent.vnode)&&ug(i,t,e,s),s=s.parent}}function ug(n,t,e,i){const s=So(t,n,i,!0);Ss(()=>{zc(i[t],s)},e)}function ko(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function pa(n){return n.shapeFlag&128?n.ssContent:n}function So(n,t,e=Ye,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{vi();const o=ia(e),l=Tn(t,e,n,a);return o(),_i(),l});return i?s.unshift(r):s.push(r),r}}const Si=n=>(t,e=Ye)=>{(!Qr||n==="sp")&&So(n,(...i)=>t(...i),e)},dg=Si("bm"),An=Si("m"),fg=Si("bu"),eu=Si("u"),nu=Si("bum"),Ss=Si("um"),hg=Si("sp"),pg=Si("rtg"),mg=Si("rtc");function gg(n,t=Ye){So("ec",n,t)}const vg="components",kh=Symbol.for("v-ndc");function _g(n){return _e(n)?xg(vg,n,!1)||n:n||kh}function xg(n,t,e=!0,i=!1){const s=fn||Ye;if(s){const r=s.type;{const o=Hl(r,!1);if(o&&(o===t||o===nn(t)||o===mo(nn(t))))return r}const a=Xu(s[n]||r[n],t)||Xu(s.appContext[n],t);return!a&&i?r:a}}function Xu(n,t){return n&&(n[t]||n[nn(t)]||n[mo(nn(t))])}function Be(n,t,e,i){let s;const r=e,a=zt(n);if(a||_e(n)){const o=a&&ms(n);let l=!1,c=!1;o&&(l=!bn(n),c=xi(n),n=vo(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?sr(Bn(n[u])):Bn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r)}else if(ae(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>t(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Nl=n=>n?ip(n)?Ao(n):Nl(n.parent):null,Wr=Re(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Nl(n.parent),$root:n=>Nl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Hh(n),$forceUpdate:n=>n.f||(n.f=()=>{Zc(n.update)}),$nextTick:n=>n.n||(n.n=_s.bind(n.proxy)),$watch:n=>ng.bind(n)}),zo=(n,t)=>n!==me&&!n.__isScriptSetup&&re(n,t),yg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const f=a[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(zo(i,t))return a[t]=1,i[t];if(s!==me&&re(s,t))return a[t]=2,s[t];if(re(r,t))return a[t]=3,r[t];if(e!==me&&re(e,t))return a[t]=4,e[t];Ol&&(a[t]=0)}}const c=Wr[t];let u,d;if(c)return t==="$attrs"&&je(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[t]))return u;if(e!==me&&re(e,t))return a[t]=4,e[t];if(d=l.config.globalProperties,re(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return zo(s,t)?(s[t]=e,!0):i!==me&&re(i,t)?(i[t]=e,!0):re(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(e[o]||n!==me&&o[0]!=="$"&&re(n,o)||zo(t,o)||re(r,o)||re(i,o)||re(Wr,o)||re(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:re(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function ju(n){return zt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ol=!0;function Mg(n){const t=Hh(n),e=n.proxy,i=n.ctx;Ol=!1,t.beforeCreate&&qu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:A,unmounted:_,render:U,renderTracked:P,renderTriggered:y,errorCaptured:I,serverPrefetch:M,expose:S,inheritAttrs:D,components:B,directives:k,filters:nt}=t;if(c&&Sg(c,i,null),a)for(const rt in a){const q=a[rt];Wt(q)&&(i[rt]=q.bind(e))}if(s){const rt=s.call(e,e);ae(rt)&&(n.data=_o(rt))}if(Ol=!0,r)for(const rt in r){const q=r[rt],xt=Wt(q)?q.bind(e,e):Wt(q.get)?q.get.bind(e,e):$n,St=!Wt(q)&&Wt(q.set)?q.set.bind(e):$n,Dt=Ln({get:xt,set:St});Object.defineProperty(i,rt,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Nt=>Dt.value=Nt})}if(o)for(const rt in o)zh(o[rt],i,e,rt);if(l){const rt=Wt(l)?l.call(e):l;Reflect.ownKeys(rt).forEach(q=>{Ha(q,rt[q])})}u&&qu(u,n,"c");function st(rt,q){zt(q)?q.forEach(xt=>rt(xt.bind(e))):q&&rt(q.bind(e))}if(st(dg,d),st(An,f),st(fg,h),st(eu,g),st(tu,v),st(Oh,m),st(gg,I),st(mg,P),st(pg,y),st(nu,T),st(Ss,_),st(hg,M),zt(S))if(S.length){const rt=n.exposed||(n.exposed={});S.forEach(q=>{Object.defineProperty(rt,q,{get:()=>e[q],set:xt=>e[q]=xt,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===$n&&(n.render=U),D!=null&&(n.inheritAttrs=D),B&&(n.components=B),k&&(n.directives=k),M&&Nh(n)}function Sg(n,t,e=$n){zt(n)&&(n=Bl(n));for(const i in n){const s=n[i];let r;ae(s)?"default"in s?r=Fn(s.from||i,s.default,!0):r=Fn(s.from||i):r=Fn(s),$e(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function qu(n,t,e){Tn(zt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function zh(n,t,e,i){let s=i.includes(".")?Ch(e,i):()=>e[i];if(_e(n)){const r=t[n];Wt(r)&&Vr(s,r)}else if(Wt(n))Vr(s,n.bind(e));else if(ae(n))if(zt(n))n.forEach(r=>zh(r,t,e,i));else{const r=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(r)&&Vr(s,r,n)}}function Hh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>eo(l,c,a,!0)),eo(l,t,a)),ae(t)&&r.set(t,l),l}function eo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&eo(n,r,e,!0),s&&s.forEach(a=>eo(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=Eg[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const Eg={data:Yu,props:$u,emits:$u,methods:Fr,computed:Fr,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Fr,directives:Fr,watch:Tg,provide:Yu,inject:bg};function Yu(n,t){return t?n?function(){return Re(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function bg(n,t){return Fr(Bl(n),Bl(t))}function Bl(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ze(n,t){return n?[...new Set([].concat(n,t))]:t}function Fr(n,t){return n?Re(Object.create(null),n,t):t}function $u(n,t){return n?zt(n)&&zt(t)?[...new Set([...n,...t])]:Re(Object.create(null),ju(n),ju(t??{})):t}function Tg(n,t){if(!n)return t;if(!t)return n;const e=Re(Object.create(null),n);for(const i in t)e[i]=Ze(n[i],t[i]);return e}function Vh(){return{app:null,config:{isNativeTag:Yf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ag=0;function wg(n,t){return function(i,s=null){Wt(i)||(i=Re({},i)),s!=null&&!ae(s)&&(s=null);const r=Vh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Ag++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sv,get config(){return r.config},set config(u){},use(u,...d){return a.has(u)||(u&&Wt(u.install)?(a.add(u),u.install(c,...d)):Wt(u)&&(a.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||pe(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Ao(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Tn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Qs;Qs=c;try{return u()}finally{Qs=d}}};return c}}let Qs=null;const Cg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${nn(t)}Modifiers`]||n[`${$i(t)}Modifiers`];function Rg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||me;let s=e;const r=t.startsWith("update:"),a=r&&Cg(i,t.slice(7));a&&(a.trim&&(s=e.map(u=>_e(u)?u.trim():u)),a.number&&(s=e.map(Vc)));let o,l=i[o=Io(t)]||i[o=Io(nn(t))];!l&&r&&(l=i[o=Io($i(t))]),l&&Tn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Tn(c,n,6,s)}}const Pg=new WeakMap;function Gh(n,t,e=!1){const i=e?Pg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Wt(n)){const l=c=>{const u=Gh(c,t,!0);u&&(o=!0,Re(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(ae(n)&&i.set(n,null),null):(zt(r)?r.forEach(l=>a[l]=null):Re(a,r),ae(n)&&i.set(n,a),a)}function Eo(n,t){return!n||!fo(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(n,t[0].toLowerCase()+t.slice(1))||re(n,$i(t))||re(n,t))}function Ku(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:v}=n,m=Qa(n);let p,T;try{if(e.shapeFlag&4){const _=s||i,U=_;p=Wn(c.call(U,_,u,d,h,f,g)),T=o}else{const _=t;p=Wn(_.length>1?_(d,{attrs:o,slots:a,emit:l}):_(d,null)),T=t.props?o:Dg(o)}}catch(_){Xr.length=0,xo(_,n,1),p=pe(qe)}let A=p;if(T&&v!==!1){const _=Object.keys(T),{shapeFlag:U}=A;_.length&&U&7&&(r&&_.some(ho)&&(T=Lg(T,r)),A=yi(A,T,!1,!0))}return e.dirs&&(A=yi(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&Xi(A,e.transition),p=A,Qa(m),p}const Dg=n=>{let t;for(const e in n)(e==="class"||e==="style"||fo(e))&&((t||(t={}))[e]=n[e]);return t},Lg=(n,t)=>{const e={};for(const i in n)(!ho(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Ig(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Zu(i,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Wh(a,i,f)&&!Eo(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Zu(i,a,c):!0:!!a;return!1}function Zu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Wh(t,n,r)&&!Eo(e,r))return!0}return!1}function Wh(n,t,e){const i=n[e],s=t[e];return e==="style"&&ae(i)&&ae(s)?!Gc(i,s):i!==s}function Ug({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Xh={},jh=()=>Object.create(Xh),qh=n=>Object.getPrototypeOf(n)===Xh;function Fg(n,t,e,i=!1){const s={},r=jh();n.propsDefaults=Object.create(null),Yh(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:_h(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Ng(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=ee(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Eo(n.emitsOptions,f))continue;const h=t[f];if(l)if(re(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const g=nn(f);s[g]=kl(l,o,g,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Yh(n,t,s,r)&&(c=!0);let u;for(const d in o)(!t||!re(t,d)&&((u=$i(d))===d||!re(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=kl(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!t||!re(t,d))&&(delete r[d],c=!0)}c&&fi(n.attrs,"set","")}function Yh(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(kr(l))continue;const c=t[l];let u;s&&re(s,u=nn(l))?!r||!r.includes(u)?e[u]=c:(o||(o={}))[u]=c:Eo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=ee(e),c=o||me;for(let u=0;u<r.length;u++){const d=r[u];e[d]=kl(s,l,d,c[d],n,!re(c,d))}}return a}function kl(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=re(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Wt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=ia(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===$i(e))&&(i=!0))}return i}const Og=new WeakMap;function $h(n,t,e=!1){const i=e?Og:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Wt(n)){const u=d=>{l=!0;const[f,h]=$h(d,t,!0);Re(a,f),h&&o.push(...h)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ae(n)&&i.set(n,$s),$s;if(zt(r))for(let u=0;u<r.length;u++){const d=nn(r[u]);Ju(d)&&(a[d]=me)}else if(r)for(const u in r){const d=nn(u);if(Ju(d)){const f=r[u],h=a[d]=zt(f)||Wt(f)?{type:f}:Re({},f),g=h.type;let v=!1,m=!0;if(zt(g))for(let p=0;p<g.length;++p){const T=g[p],A=Wt(T)&&T.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=Wt(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||re(h,"default"))&&o.push(d)}}const c=[a,o];return ae(n)&&i.set(n,c),c}function Ju(n){return n[0]!=="$"&&!kr(n)}const iu=n=>n==="_"||n==="_ctx"||n==="$stable",su=n=>zt(n)?n.map(Wn):[Wn(n)],Bg=(n,t,e)=>{if(t._n)return t;const i=Mn((...s)=>su(t(...s)),e);return i._c=!1,i},Kh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(iu(s))continue;const r=n[s];if(Wt(r))t[s]=Bg(s,r,i);else if(r!=null){const a=su(r);t[s]=()=>a}}},Zh=(n,t)=>{const e=su(t);n.slots.default=()=>e},Jh=(n,t,e)=>{for(const i in t)(e||!iu(i))&&(n[i]=t[i])},kg=(n,t,e)=>{const i=n.slots=jh();if(n.vnode.shapeFlag&32){const s=t._;s?(Jh(i,t,e),e&&Qf(i,"_",s,!0)):Kh(t,i)}else t&&Zh(n,t)},zg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=me;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:Jh(s,t,e):(r=!t.$stable,Kh(t,s)),a=t}else t&&(Zh(n,t),a={default:1});if(r)for(const o in s)!iu(o)&&a[o]==null&&delete s[o]},Le=Xg;function Hg(n){return Vg(n)}function Vg(n,t){const e=go();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=$n,insertStaticContent:g}=n,v=(C,L,E,G=null,$=null,X=null,it=void 0,ut=null,K=!!L.dynamicChildren)=>{if(C===L)return;C&&!ki(C,L)&&(G=N(C),Nt(C,$,X,!0),C=null),L.patchFlag===-2&&(K=!1,L.dynamicChildren=null);const{type:b,ref:x,shapeFlag:O}=L;switch(b){case bo:m(C,L,E,G);break;case qe:p(C,L,E,G);break;case Va:C==null&&T(L,E,G,it);break;case ce:B(C,L,E,G,$,X,it,ut,K);break;default:O&1?U(C,L,E,G,$,X,it,ut,K):O&6?k(C,L,E,G,$,X,it,ut,K):(O&64||O&128)&&b.process(C,L,E,G,$,X,it,ut,K,Q)}x!=null&&$?Gr(x,C&&C.ref,X,L||C,!L):x==null&&C&&C.ref!=null&&Gr(C.ref,null,X,C,!0)},m=(C,L,E,G)=>{if(C==null)i(L.el=o(L.children),E,G);else{const $=L.el=C.el;L.children!==C.children&&c($,L.children)}},p=(C,L,E,G)=>{C==null?i(L.el=l(L.children||""),E,G):L.el=C.el},T=(C,L,E,G)=>{[C.el,C.anchor]=g(C.children,L,E,G,C.el,C.anchor)},A=({el:C,anchor:L},E,G)=>{let $;for(;C&&C!==L;)$=f(C),i(C,E,G),C=$;i(L,E,G)},_=({el:C,anchor:L})=>{let E;for(;C&&C!==L;)E=f(C),s(C),C=E;s(L)},U=(C,L,E,G,$,X,it,ut,K)=>{if(L.type==="svg"?it="svg":L.type==="math"&&(it="mathml"),C==null)P(L,E,G,$,X,it,ut,K);else{const b=C.el&&C.el._isVueCE?C.el:null;try{b&&b._beginPatch(),M(C,L,$,X,it,ut,K)}finally{b&&b._endPatch()}}},P=(C,L,E,G,$,X,it,ut)=>{let K,b;const{props:x,shapeFlag:O,transition:j,dirs:J}=C;if(K=C.el=a(C.type,X,x&&x.is,x),O&8?u(K,C.children):O&16&&I(C.children,K,null,G,$,Ho(C,X),it,ut),J&&Zi(C,null,G,"created"),y(K,C,C.scopeId,it,G),x){for(const yt in x)yt!=="value"&&!kr(yt)&&r(K,yt,null,x[yt],X,G);"value"in x&&r(K,"value",null,x.value,X),(b=x.onVnodeBeforeMount)&&vn(b,G,C)}J&&Zi(C,null,G,"beforeMount");const Z=Gg($,j);Z&&j.beforeEnter(K),i(K,L,E),((b=x&&x.onVnodeMounted)||Z||J)&&Le(()=>{try{b&&vn(b,G,C),Z&&j.enter(K),J&&Zi(C,null,G,"mounted")}finally{}},$)},y=(C,L,E,G,$)=>{if(E&&h(C,E),G)for(let X=0;X<G.length;X++)h(C,G[X]);if($){let X=$.subTree;if(L===X||io(X.type)&&(X.ssContent===L||X.ssFallback===L)){const it=$.vnode;y(C,it,it.scopeId,it.slotScopeIds,$.parent)}}},I=(C,L,E,G,$,X,it,ut,K=0)=>{for(let b=K;b<C.length;b++){const x=C[b]=ut?di(C[b]):Wn(C[b]);v(null,x,L,E,G,$,X,it,ut)}},M=(C,L,E,G,$,X,it)=>{const ut=L.el=C.el;let{patchFlag:K,dynamicChildren:b,dirs:x}=L;K|=C.patchFlag&16;const O=C.props||me,j=L.props||me;let J;if(E&&Ji(E,!1),(J=j.onVnodeBeforeUpdate)&&vn(J,E,L,C),x&&Zi(L,C,E,"beforeUpdate"),E&&Ji(E,!0),(O.innerHTML&&j.innerHTML==null||O.textContent&&j.textContent==null)&&u(ut,""),b?S(C.dynamicChildren,b,ut,E,G,Ho(L,$),X):it||q(C,L,ut,null,E,G,Ho(L,$),X,!1),K>0){if(K&16)D(ut,O,j,E,$);else if(K&2&&O.class!==j.class&&r(ut,"class",null,j.class,$),K&4&&r(ut,"style",O.style,j.style,$),K&8){const Z=L.dynamicProps;for(let yt=0;yt<Z.length;yt++){const ft=Z[yt],vt=O[ft],Bt=j[ft];(Bt!==vt||ft==="value")&&r(ut,ft,vt,Bt,$,E)}}K&1&&C.children!==L.children&&u(ut,L.children)}else!it&&b==null&&D(ut,O,j,E,$);((J=j.onVnodeUpdated)||x)&&Le(()=>{J&&vn(J,E,L,C),x&&Zi(L,C,E,"updated")},G)},S=(C,L,E,G,$,X,it)=>{for(let ut=0;ut<L.length;ut++){const K=C[ut],b=L[ut],x=K.el&&(K.type===ce||!ki(K,b)||K.shapeFlag&198)?d(K.el):E;v(K,b,x,null,G,$,X,it,!0)}},D=(C,L,E,G,$)=>{if(L!==E){if(L!==me)for(const X in L)!kr(X)&&!(X in E)&&r(C,X,L[X],null,$,G);for(const X in E){if(kr(X))continue;const it=E[X],ut=L[X];it!==ut&&X!=="value"&&r(C,X,ut,it,$,G)}"value"in E&&r(C,"value",L.value,E.value,$)}},B=(C,L,E,G,$,X,it,ut,K)=>{const b=L.el=C?C.el:o(""),x=L.anchor=C?C.anchor:o("");let{patchFlag:O,dynamicChildren:j,slotScopeIds:J}=L;J&&(ut=ut?ut.concat(J):J),C==null?(i(b,E,G),i(x,E,G),I(L.children||[],E,x,$,X,it,ut,K)):O>0&&O&64&&j&&C.dynamicChildren&&C.dynamicChildren.length===j.length?(S(C.dynamicChildren,j,E,$,X,it,ut),(L.key!=null||$&&L===$.subTree)&&ru(C,L,!0)):q(C,L,E,x,$,X,it,ut,K)},k=(C,L,E,G,$,X,it,ut,K)=>{L.slotScopeIds=ut,C==null?L.shapeFlag&512?$.ctx.activate(L,E,G,it,K):nt(L,E,G,$,X,it,K):ct(C,L,K)},nt=(C,L,E,G,$,X,it)=>{const ut=C.component=Jg(C,G,$);if(Mo(C)&&(ut.ctx.renderer=Q),Qg(ut,!1,it),ut.asyncDep){if($&&$.registerDep(ut,st,it),!C.el){const K=ut.subTree=pe(qe);p(null,K,L,E),C.placeholder=K.el}}else st(ut,C,L,E,$,X,it)},ct=(C,L,E)=>{const G=L.component=C.component;if(Ig(C,L,E))if(G.asyncDep&&!G.asyncResolved){rt(G,L,E);return}else G.next=L,G.update();else L.el=C.el,G.vnode=L},st=(C,L,E,G,$,X,it)=>{const ut=()=>{if(C.isMounted){let{next:O,bu:j,u:J,parent:Z,vnode:yt}=C;{const bt=Qh(C);if(bt){O&&(O.el=yt.el,rt(C,O,it)),bt.asyncDep.then(()=>{Le(()=>{C.isUnmounted||b()},$)});return}}let ft=O,vt;Ji(C,!1),O?(O.el=yt.el,rt(C,O,it)):O=yt,j&&Zs(j),(vt=O.props&&O.props.onVnodeBeforeUpdate)&&vn(vt,Z,O,yt),Ji(C,!0);const Bt=Ku(C),ht=C.subTree;C.subTree=Bt,v(ht,Bt,d(ht.el),N(ht),C,$,X),O.el=Bt.el,ft===null&&Ug(C,Bt.el),J&&Le(J,$),(vt=O.props&&O.props.onVnodeUpdated)&&Le(()=>vn(vt,Z,O,yt),$)}else{let O;const{el:j,props:J}=L,{bm:Z,m:yt,parent:ft,root:vt,type:Bt}=C,ht=vs(L);Ji(C,!1),Z&&Zs(Z),!ht&&(O=J&&J.onVnodeBeforeMount)&&vn(O,ft,L),Ji(C,!0);{vt.ce&&vt.ce._hasShadowRoot()&&vt.ce._injectChildStyle(Bt,C.parent?C.parent.type:void 0);const bt=C.subTree=Ku(C);v(null,bt,E,G,C,$,X),L.el=bt.el}if(yt&&Le(yt,$),!ht&&(O=J&&J.onVnodeMounted)){const bt=L;Le(()=>vn(O,ft,bt),$)}(L.shapeFlag&256||ft&&vs(ft.vnode)&&ft.vnode.shapeFlag&256)&&C.a&&Le(C.a,$),C.isMounted=!0,L=E=G=null}};C.scope.on();const K=C.effect=new sh(ut);C.scope.off();const b=C.update=K.run.bind(K),x=C.job=K.runIfDirty.bind(K);x.i=C,x.id=C.uid,K.scheduler=()=>Zc(x),Ji(C,!0),b()},rt=(C,L,E)=>{L.component=C;const G=C.vnode.props;C.vnode=L,C.next=null,Ng(C,L.props,G,E),zg(C,L.children,E),vi(),ku(C),_i()},q=(C,L,E,G,$,X,it,ut,K=!1)=>{const b=C&&C.children,x=C?C.shapeFlag:0,O=L.children,{patchFlag:j,shapeFlag:J}=L;if(j>0){if(j&128){St(b,O,E,G,$,X,it,ut,K);return}else if(j&256){xt(b,O,E,G,$,X,it,ut,K);return}}J&8?(x&16&&lt(b,$,X),O!==b&&u(E,O)):x&16?J&16?St(b,O,E,G,$,X,it,ut,K):lt(b,$,X,!0):(x&8&&u(E,""),J&16&&I(O,E,G,$,X,it,ut,K))},xt=(C,L,E,G,$,X,it,ut,K)=>{C=C||$s,L=L||$s;const b=C.length,x=L.length,O=Math.min(b,x);let j;for(j=0;j<O;j++){const J=L[j]=K?di(L[j]):Wn(L[j]);v(C[j],J,E,null,$,X,it,ut,K)}b>x?lt(C,$,X,!0,!1,O):I(L,E,G,$,X,it,ut,K,O)},St=(C,L,E,G,$,X,it,ut,K)=>{let b=0;const x=L.length;let O=C.length-1,j=x-1;for(;b<=O&&b<=j;){const J=C[b],Z=L[b]=K?di(L[b]):Wn(L[b]);if(ki(J,Z))v(J,Z,E,null,$,X,it,ut,K);else break;b++}for(;b<=O&&b<=j;){const J=C[O],Z=L[j]=K?di(L[j]):Wn(L[j]);if(ki(J,Z))v(J,Z,E,null,$,X,it,ut,K);else break;O--,j--}if(b>O){if(b<=j){const J=j+1,Z=J<x?L[J].el:G;for(;b<=j;)v(null,L[b]=K?di(L[b]):Wn(L[b]),E,Z,$,X,it,ut,K),b++}}else if(b>j)for(;b<=O;)Nt(C[b],$,X,!0),b++;else{const J=b,Z=b,yt=new Map;for(b=Z;b<=j;b++){const Mt=L[b]=K?di(L[b]):Wn(L[b]);Mt.key!=null&&yt.set(Mt.key,b)}let ft,vt=0;const Bt=j-Z+1;let ht=!1,bt=0;const Ot=new Array(Bt);for(b=0;b<Bt;b++)Ot[b]=0;for(b=J;b<=O;b++){const Mt=C[b];if(vt>=Bt){Nt(Mt,$,X,!0);continue}let Vt;if(Mt.key!=null)Vt=yt.get(Mt.key);else for(ft=Z;ft<=j;ft++)if(Ot[ft-Z]===0&&ki(Mt,L[ft])){Vt=ft;break}Vt===void 0?Nt(Mt,$,X,!0):(Ot[Vt-Z]=b+1,Vt>=bt?bt=Vt:ht=!0,v(Mt,L[Vt],E,null,$,X,it,ut,K),vt++)}const Ht=ht?Wg(Ot):$s;for(ft=Ht.length-1,b=Bt-1;b>=0;b--){const Mt=Z+b,Vt=L[Mt],Xt=L[Mt+1],oe=Mt+1<x?Xt.el||tp(Xt):G;Ot[b]===0?v(null,Vt,E,oe,$,X,it,ut,K):ht&&(ft<0||b!==Ht[ft]?Dt(Vt,E,oe,2):ft--)}}},Dt=(C,L,E,G,$=null)=>{const{el:X,type:it,transition:ut,children:K,shapeFlag:b}=C;if(b&6){Dt(C.component.subTree,L,E,G);return}if(b&128){C.suspense.move(L,E,G);return}if(b&64){it.move(C,L,E,Q);return}if(it===ce){i(X,L,E);for(let O=0;O<K.length;O++)Dt(K[O],L,E,G);i(C.anchor,L,E);return}if(it===Va){A(C,L,E);return}if(G!==2&&b&1&&ut)if(G===0)ut.persisted&&!X[_n]?i(X,L,E):(ut.beforeEnter(X),i(X,L,E),Le(()=>ut.enter(X),$));else{const{leave:O,delayLeave:j,afterLeave:J}=ut,Z=()=>{C.ctx.isUnmounted?s(X):i(X,L,E)},yt=()=>{const ft=X._isLeaving||!!X[_n];X._isLeaving&&X[_n](!0),ut.persisted&&!ft?Z():O(X,()=>{Z(),J&&J()})};j?j(X,Z,yt):yt()}else i(X,L,E)},Nt=(C,L,E,G=!1,$=!1)=>{const{type:X,props:it,ref:ut,children:K,dynamicChildren:b,shapeFlag:x,patchFlag:O,dirs:j,cacheIndex:J,memo:Z}=C;if(O===-2&&($=!1),ut!=null&&(vi(),Gr(ut,null,E,C,!0),_i()),J!=null&&(L.renderCache[J]=void 0),x&256){L.ctx.deactivate(C);return}const yt=x&1&&j,ft=!vs(C);let vt;if(ft&&(vt=it&&it.onVnodeBeforeUnmount)&&vn(vt,L,C),x&6)pt(C.component,E,G);else{if(x&128){C.suspense.unmount(E,G);return}yt&&Zi(C,null,L,"beforeUnmount"),x&64?C.type.remove(C,L,E,Q,G):b&&!b.hasOnce&&(X!==ce||O>0&&O&64)?lt(b,L,E,!1,!0):(X===ce&&O&384||!$&&x&16)&&lt(K,L,E),G&&Kt(C)}const Bt=Z!=null&&J==null;(ft&&(vt=it&&it.onVnodeUnmounted)||yt||Bt)&&Le(()=>{vt&&vn(vt,L,C),yt&&Zi(C,null,L,"unmounted"),Bt&&(C.el=null)},E)},Kt=C=>{const{type:L,el:E,anchor:G,transition:$}=C;if(L===ce){ot(E,G);return}if(L===Va){_(C);return}const X=()=>{s(E),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(C.shapeFlag&1&&$&&!$.persisted){const{leave:it,delayLeave:ut}=$,K=()=>it(E,X);ut?ut(C.el,X,K):K()}else X()},ot=(C,L)=>{let E;for(;C!==L;)E=f(C),s(C),C=E;s(L)},pt=(C,L,E)=>{const{bum:G,scope:$,job:X,subTree:it,um:ut,m:K,a:b}=C;no(K),no(b),G&&Zs(G),$.stop(),X&&(X.flags|=8,Nt(it,C,L,E)),ut&&Le(ut,L),Le(()=>{C.isUnmounted=!0},L)},lt=(C,L,E,G=!1,$=!1,X=0)=>{for(let it=X;it<C.length;it++)Nt(C[it],L,E,G,$)},N=C=>{if(C.shapeFlag&6)return N(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const L=f(C.anchor||C.el),E=L&&L[Rh];return E?f(E):L};let Y=!1;const F=(C,L,E)=>{let G;C==null?L._vnode&&(Nt(L._vnode,null,null,!0),G=L._vnode.component):v(L._vnode||null,C,L,null,null,null,E),L._vnode=C,Y||(Y=!0,ku(G),bh(),Y=!1)},Q={p:v,um:Nt,m:Dt,r:Kt,mt:nt,mc:I,pc:q,pbc:S,n:N,o:n};return{render:F,hydrate:void 0,createApp:wg(F)}}function Ho({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ji({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Gg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function ru(n,t,e=!1){const i=n.children,s=t.children;if(zt(i)&&zt(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=di(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&ru(a,o)),o.type===bo&&(o.patchFlag===-1&&(o=s[r]=di(o)),o.el=a.el),o.type===qe&&!o.el&&(o.el=a.el)}}function Wg(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<c?r=o+1:a=o;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function Qh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qh(t)}function no(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function tp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?tp(t.subTree):null}const io=n=>n.__isSuspense;function Xg(n,t){t&&t.pendingBranch?zt(n)?t.effects.push(...n):t.effects.push(n):Qm(n)}const ce=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),Va=Symbol.for("v-stc"),Xr=[];let hn=null;function mt(n=!1){Xr.push(hn=n?null:[])}function jg(){Xr.pop(),hn=Xr[Xr.length-1]||null}let Zr=1;function so(n,t=!1){Zr+=n,n<0&&hn&&t&&(hn.hasOnce=!0)}function ep(n){return n.dynamicChildren=Zr>0?hn||$s:null,jg(),Zr>0&&hn&&hn.push(n),n}function At(n,t,e,i,s,r){return ep(w(n,t,e,i,s,r,!0))}function Oe(n,t,e,i,s){return ep(pe(n,t,e,i,s,!0))}function Jr(n){return n?n.__v_isVNode===!0:!1}function ki(n,t){return n.type===t.type&&n.key===t.key}const np=({key:n})=>n??null,Ga=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?_e(n)||$e(n)||Wt(n)?{i:fn,r:n,k:t,f:!!e}:n:null);function w(n,t=null,e=null,i=0,s=null,r=n===ce?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&np(t),ref:t&&Ga(t),scopeId:Ah,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return o?(au(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=_e(e)?8:16),Zr>0&&!a&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const pe=qg;function qg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===kh)&&(n=qe),Jr(n)){const o=yi(n,t,!0);return e&&au(o,e),Zr>0&&!r&&hn&&(o.shapeFlag&6?hn[hn.indexOf(n)]=o:hn.push(o)),o.patchFlag=-2,o}if(iv(n)&&(n=n.__vccOpts),t){t=Yg(t);let{class:o,style:l}=t;o&&!_e(o)&&(t.class=ke(o)),ae(l)&&(Kc(l)&&!zt(l)&&(l=Re({},l)),t.style=he(l))}const a=_e(n)?1:io(n)?128:Ph(n)?64:ae(n)?4:Wt(n)?2:0;return w(n,t,e,i,s,a,r,!0)}function Yg(n){return n?Kc(n)||qh(n)?Re({},n):n:null}function yi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=t?$g(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&np(c),ref:t&&t.ref?e&&r?zt(r)?r.concat(Ga(t)):[r,Ga(t)]:Ga(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ce?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yi(n.ssContent),ssFallback:n.ssFallback&&yi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Xi(u,l.clone(u)),u}function Hi(n=" ",t=0){return pe(bo,null,n,t)}function Ie(n,t){const e=pe(Va,null,n);return e.staticCount=t,e}function Zt(n="",t=!1){return t?(mt(),Oe(qe,null,n)):pe(qe,null,n)}function Wn(n){return n==null||typeof n=="boolean"?pe(qe):zt(n)?pe(ce,null,n.slice()):Jr(n)?di(n):pe(bo,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yi(n)}function au(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(zt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),au(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!qh(t)?t._ctx=fn:s===3&&fn&&(fn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Wt(t)?(t={default:t,_ctx:fn},e=32):(t=String(t),i&64?(e=16,t=[Hi(t)]):e=8);n.children=t,n.shapeFlag|=e}function $g(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ke([t.class,i.class]));else if(s==="style")t.style=he([t.style,i.style]);else if(fo(s)){const r=t[s],a=i[s];a&&r!==a&&!(zt(r)&&r.includes(a))?t[s]=r?[].concat(r,a):a:a==null&&r==null&&!ho(s)&&(t[s]=a)}else s!==""&&(t[s]=i[s])}return t}function vn(n,t,e,i=null){Tn(n,t,7,[e,i])}const Kg=Vh();let Zg=0;function Jg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Kg,r={uid:Zg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ih(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$h(i,s),emitsOptions:Gh(i,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:i.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Rg.bind(null,r),n.ce&&n.ce(r),r}let Ye=null;const To=()=>Ye||fn;let ro,zl;{const n=go(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};ro=t("__VUE_INSTANCE_SETTERS__",e=>Ye=e),zl=t("__VUE_SSR_SETTERS__",e=>Qr=e)}const ia=n=>{const t=Ye;return ro(n),n.scope.on(),()=>{n.scope.off(),ro(t)}},Qu=()=>{Ye&&Ye.scope.off(),ro(null)};function ip(n){return n.vnode.shapeFlag&4}let Qr=!1;function Qg(n,t=!1,e=!1){t&&zl(t);const{props:i,children:s}=n.vnode,r=ip(n);Fg(n,i,r,t),kg(n,s,e||t);const a=r?tv(n,t):void 0;return t&&zl(!1),a}function tv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,yg);const{setup:i}=e;if(i){vi();const s=n.setupContext=i.length>1?nv(n):null,r=ia(n),a=na(i,n,0,[n.props,s]),o=Kf(a);if(_i(),r(),(o||n.sp)&&!vs(n)&&Nh(n),o){if(a.then(Qu,Qu),t)return a.then(l=>{td(n,l)}).catch(l=>{xo(l,n,0)});n.asyncDep=a}else td(n,a)}else sp(n)}function td(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ae(t)&&(n.setupState=Mh(t)),sp(n)}function sp(n,t,e){const i=n.type;n.render||(n.render=i.render||$n);{const s=ia(n);vi();try{Mg(n)}finally{_i(),s()}}}const ev={get(n,t){return je(n,"get",""),n[t]}};function nv(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,ev),slots:n.slots,emit:n.emit,expose:t}}function Ao(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mh(xh(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Wr)return Wr[e](n)},has(t,e){return e in t||e in Wr}})):n.proxy}function Hl(n,t=!0){return Wt(n)?n.displayName||n.name:n.name||t&&n.__name}function iv(n){return Wt(n)&&"__vccOpts"in n}const Ln=(n,t)=>Ym(n,t,Qr);function ou(n,t,e){try{so(-1);const i=arguments.length;return i===2?ae(t)&&!zt(t)?Jr(t)?pe(n,null,[t]):pe(n,t):pe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Jr(e)&&(e=[e]),pe(n,t,e))}finally{so(1)}}const sv="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vl;const ed=typeof window<"u"&&window.trustedTypes;if(ed)try{Vl=ed.createPolicy("vue",{createHTML:n=>n})}catch{}const rp=Vl?n=>Vl.createHTML(n):n=>n,rv="http://www.w3.org/2000/svg",av="http://www.w3.org/1998/Math/MathML",ui=typeof document<"u"?document:null,nd=ui&&ui.createElement("template"),ov={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ui.createElementNS(rv,n):t==="mathml"?ui.createElementNS(av,n):e?ui.createElement(n,{is:e}):ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ui.createTextNode(n),createComment:n=>ui.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ui.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{nd.innerHTML=rp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=nd.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Ai="transition",Sr="animation",rr=Symbol("_vtc"),ap={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},op=Re({},Lh,ap),lv=n=>(n.displayName="Transition",n.props=op,n),xs=lv((n,{slots:t})=>ou(og,lp(n),t)),Qi=(n,t=[])=>{zt(n)?n.forEach(e=>e(...t)):n&&n(...t)},id=n=>n?zt(n)?n.some(t=>t.length>1):n.length>1:!1;function lp(n){const t={};for(const B in n)B in ap||(t[B]=n[B]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:h=`${e}-leave-to`}=n,g=cv(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:A,onLeave:_,onLeaveCancelled:U,onBeforeAppear:P=p,onAppear:y=T,onAppearCancelled:I=A}=t,M=(B,k,nt,ct)=>{B._enterCancelled=ct,Fi(B,k?u:o),Fi(B,k?c:a),nt&&nt()},S=(B,k)=>{B._isLeaving=!1,Fi(B,d),Fi(B,h),Fi(B,f),k&&k()},D=B=>(k,nt)=>{const ct=B?y:T,st=()=>M(k,B,nt);Qi(ct,[k,st]),sd(()=>{Fi(k,B?l:r),Hn(k,B?u:o),id(ct)||rd(k,i,v,st)})};return Re(t,{onBeforeEnter(B){Qi(p,[B]),Hn(B,r),Hn(B,a)},onBeforeAppear(B){Qi(P,[B]),Hn(B,l),Hn(B,c)},onEnter:D(!1),onAppear:D(!0),onLeave(B,k){B._isLeaving=!0;const nt=()=>S(B,k);Hn(B,d),B._enterCancelled?(Hn(B,f),Gl(B)):(Gl(B),Hn(B,f)),sd(()=>{B._isLeaving&&(Fi(B,d),Hn(B,h),id(_)||rd(B,i,m,nt))}),Qi(_,[B,nt])},onEnterCancelled(B){M(B,!1,void 0,!0),Qi(A,[B])},onAppearCancelled(B){M(B,!0,void 0,!0),Qi(I,[B])},onLeaveCancelled(B){S(B),Qi(U,[B])}})}function cv(n){if(n==null)return null;if(ae(n))return[Vo(n.enter),Vo(n.leave)];{const t=Vo(n);return[t,t]}}function Vo(n){return vm(n)}function Hn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[rr]||(n[rr]=new Set)).add(t)}function Fi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[rr];e&&(e.delete(t),e.size||(n[rr]=void 0))}function sd(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let uv=0;function rd(n,t,e,i){const s=n._endId=++uv,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:a,timeout:o,propCount:l}=cp(n,t);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,f),r()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,f)}function cp(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${Ai}Delay`),r=i(`${Ai}Duration`),a=ad(s,r),o=i(`${Sr}Delay`),l=i(`${Sr}Duration`),c=ad(o,l);let u=null,d=0,f=0;t===Ai?a>0&&(u=Ai,d=a,f=r.length):t===Sr?c>0&&(u=Sr,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?Ai:Sr:null,f=u?u===Ai?r.length:l.length:0);const h=u===Ai&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ai}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function ad(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>od(e)+od(n[i])))}function od(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Gl(n){return(n?n.ownerDocument:document).body.offsetHeight}function dv(n,t,e){const i=n[rr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ao=Symbol("_vod"),lu=Symbol("_vsh"),fv={name:"show",beforeMount(n,{value:t},{transition:e}){n[ao]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Er(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Er(n,!0),i.enter(n)):i.leave(n,()=>{Er(n,!1)}):Er(n,t))},beforeUnmount(n,{value:t}){Er(n,t)}};function Er(n,t){n.style.display=t?n[ao]:"none",n[lu]=!t}const hv=Symbol(""),pv=/(?:^|;)\s*display\s*:/;function mv(n,t,e){const i=n.style,s=_e(e);let r=!1;if(e&&!s){if(t)if(_e(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&Nr(i,o,"")}else for(const a in t)e[a]==null&&Nr(i,a,"");for(const a in e){a==="display"&&(r=!0);const o=e[a];o!=null?vv(n,a,!_e(t)&&t?t[a]:void 0,o)||Nr(i,a,o):Nr(i,a,"")}}else if(s){if(t!==e){const a=i[hv];a&&(e+=";"+a),i.cssText=e,r=pv.test(e)}}else t&&n.removeAttribute("style");ao in n&&(n[ao]=r?i.display:"",n[lu]&&(i.display="none"))}const ld=/\s*!important$/;function Nr(n,t,e){if(zt(e))e.forEach(i=>Nr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=gv(n,t);ld.test(e)?n.setProperty($i(i),e.replace(ld,""),"important"):n[i]=e}}const cd=["Webkit","Moz","ms"],Go={};function gv(n,t){const e=Go[t];if(e)return e;let i=nn(t);if(i!=="filter"&&i in n)return Go[t]=i;i=mo(i);for(let s=0;s<cd.length;s++){const r=cd[s]+i;if(r in n)return Go[t]=r}return t}function vv(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&_e(i)&&e===i}const ud="http://www.w3.org/1999/xlink";function dd(n,t,e,i,s,r=Em(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ud,t.slice(6,t.length)):n.setAttributeNS(ud,t,e):e==null||r&&!th(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Zn(e)?String(e):e)}function fd(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?rp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=th(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function Xs(n,t,e,i){n.addEventListener(t,e,i)}function _v(n,t,e,i){n.removeEventListener(t,e,i)}const hd=Symbol("_vei");function xv(n,t,e,i,s=null){const r=n[hd]||(n[hd]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=yv(t);if(i){const c=r[t]=Ev(i,s);Xs(n,o,c,l)}else a&&(_v(n,o,a,l),r[t]=void 0)}}const pd=/(?:Once|Passive|Capture)$/;function yv(n){let t;if(pd.test(n)){t={};let i;for(;i=n.match(pd);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$i(n.slice(2)),t]}let Wo=0;const Mv=Promise.resolve(),Sv=()=>Wo||(Mv.then(()=>Wo=0),Wo=Date.now());function Ev(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(zt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Tn(c,t,5,o)}}else Tn(s,t,5,[i])};return e.value=n,e.attached=Sv(),e}const md=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,bv=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?dv(n,i,a):t==="style"?mv(n,e,i):fo(t)?ho(t)||xv(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tv(n,t,i,a))?(fd(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&dd(n,t,i,a,r,t!=="value")):n._isVueCE&&(Av(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!_e(i)))?fd(n,nn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),dd(n,t,i,a))};function Tv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&md(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return md(t)&&_e(e)?!1:t in n}function Av(n,t){const e=n._def.props;if(!e)return!1;const i=nn(t);return Array.isArray(e)?e.some(s=>nn(s)===i):Object.keys(e).some(s=>nn(s)===i)}const up=new WeakMap,dp=new WeakMap,oo=Symbol("_moveCb"),gd=Symbol("_enterCb"),wv=n=>(delete n.props.mode,n),Cv=wv({name:"TransitionGroup",props:Re({},op,{tag:String,moveClass:String}),setup(n,{slots:t}){const e=To(),i=Dh();let s,r;return eu(()=>{if(!s.length)return;const a=n.moveClass||`${n.name||"v"}-move`;if(!Lv(s[0].el,e.vnode.el,a)){s=[];return}s.forEach(Rv),s.forEach(Pv);const o=s.filter(Dv);Gl(e.vnode.el),o.forEach(l=>{const c=l.el,u=c.style;Hn(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[oo]=f=>{f&&f.target!==c||(!f||f.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",d),c[oo]=null,Fi(c,a))};c.addEventListener("transitionend",d)}),s=[]}),()=>{const a=ee(n),o=lp(a);let l=a.tag||ce;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&!u.el[lu]&&(s.push(u),Xi(u,Kr(u,o,i,e)),up.set(u,fp(u.el)))}r=t.default?Qc(t.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Xi(u,Kr(u,o,i,e))}return pe(l,null,r)}}}),Wl=Cv;function Rv(n){const t=n.el;t[oo]&&t[oo](),t[gd]&&t[gd]()}function Pv(n){dp.set(n,fp(n.el))}function Dv(n){const t=up.get(n),e=dp.get(n),i=t.left-e.left,s=t.top-e.top;if(i||s){const r=n.el,a=r.style,o=r.getBoundingClientRect();let l=1,c=1;return r.offsetWidth&&(l=o.width/r.offsetWidth),r.offsetHeight&&(c=o.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),a.transform=a.webkitTransform=`translate(${i/l}px,${s/c}px)`,a.transitionDuration="0s",n}}function fp(n){const t=n.getBoundingClientRect();return{left:t.left,top:t.top}}function Lv(n,t,e){const i=n.cloneNode(),s=n[rr];s&&s.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),e.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(i);const{hasTransform:a}=cp(i);return r.removeChild(i),a}const vd=n=>{const t=n.props["onUpdate:modelValue"]||!1;return zt(t)?e=>Zs(t,e):t};function Iv(n){n.target.composing=!0}function _d(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xo=Symbol("_assign");function xd(n,t,e){return t&&(n=n.trim()),e&&(n=Vc(n)),n}const hp={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[Xo]=vd(s);const r=i||s.props&&s.props.type==="number";Xs(n,t?"change":"input",a=>{a.target.composing||n[Xo](xd(n.value,e,r))}),(e||r)&&Xs(n,"change",()=>{n.value=xd(n.value,e,r)}),t||(Xs(n,"compositionstart",Iv),Xs(n,"compositionend",_d),Xs(n,"change",_d))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Xo]=vd(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Vc(n.value):n.value,l=t??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Uv=["ctrl","shift","alt","meta"],Fv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Uv.some(e=>n[`${e}Key`]&&!t.includes(e))},Ve=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let a=0;a<t.length;a++){const o=Fv[t[a]];if(o&&o(s,t))return}return n(s,...r)}))},Nv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ov=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=(s=>{if(!("key"in s))return;const r=$i(s.key);if(t.some(a=>a===r||Nv[a]===r))return n(s)}))},Bv=Re({patchProp:bv},ov);let yd;function kv(){return yd||(yd=Hg(Bv))}const zv=((...n)=>{const t=kv().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Vv(i);if(!s)return;const r=t._component;!Wt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Hv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Hv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Vv(n){return _e(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Gv=Symbol();var Md;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Md||(Md={}));function Wv(){const n=Tm(!0),t=n.run(()=>Pt({}));let e=[],i=[];const s=xh({install(r){s._a=r,r.provide(Gv,s),r.config.globalProperties.$pinia=s,i.forEach(a=>e.push(a)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const js=typeof document<"u";function pp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Xv(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&pp(n.default)}const se=Object.assign;function jo(n,t){const e={};for(const i in t){const s=t[i];e[i]=kn(s)?s.map(n):n(s)}return e}const jr=()=>{},kn=Array.isArray;function Sd(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const mp=/#/g,jv=/&/g,qv=/\//g,Yv=/=/g,$v=/\?/g,gp=/\+/g,Kv=/%5B/g,Zv=/%5D/g,vp=/%5E/g,Jv=/%60/g,_p=/%7B/g,Qv=/%7C/g,xp=/%7D/g,t_=/%20/g;function cu(n){return n==null?"":encodeURI(""+n).replace(Qv,"|").replace(Kv,"[").replace(Zv,"]")}function e_(n){return cu(n).replace(_p,"{").replace(xp,"}").replace(vp,"^")}function Xl(n){return cu(n).replace(gp,"%2B").replace(t_,"+").replace(mp,"%23").replace(jv,"%26").replace(Jv,"`").replace(_p,"{").replace(xp,"}").replace(vp,"^")}function n_(n){return Xl(n).replace(Yv,"%3D")}function i_(n){return cu(n).replace(mp,"%23").replace($v,"%3F")}function s_(n){return i_(n).replace(qv,"%2F")}function ta(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const r_=/\/$/,a_=n=>n.replace(r_,"");function qo(n,t,e="/"){let i,s={},r="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,o>0?o:t.length),s=n(r.slice(1))),o>=0&&(i=i||t.slice(0,o),a=t.slice(o,t.length)),i=u_(i??t,e),{fullPath:i+r+a,path:i,query:s,hash:ta(a)}}function o_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Ed(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function l_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&ar(t.matched[i],e.matched[s])&&yp(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function ar(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function yp(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!c_(n[e],t[e]))return!1;return!0}function c_(n,t){return kn(n)?bd(n,t):kn(t)?bd(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function bd(n,t){return kn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function u_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const wi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let jl=(function(n){return n.pop="pop",n.push="push",n})({}),Yo=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function d_(n){if(!n)if(js){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),a_(n)}const f_=/^[^#]+#/;function h_(n,t){return n.replace(f_,"#")+t}function p_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const wo=()=>({left:window.scrollX,top:window.scrollY});function m_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=p_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Td(n,t){return(history.state?history.state.position-t:-1)+n}const ql=new Map;function g_(n,t){ql.set(n,t)}function v_(n){const t=ql.get(n);return ql.delete(n),t}function __(n){return typeof n=="string"||n&&typeof n=="object"}function Mp(n){return typeof n=="string"||typeof n=="symbol"}let Ae=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Sp=Symbol("");Ae.MATCHER_NOT_FOUND+"",Ae.NAVIGATION_GUARD_REDIRECT+"",Ae.NAVIGATION_ABORTED+"",Ae.NAVIGATION_CANCELLED+"",Ae.NAVIGATION_DUPLICATED+"";function or(n,t){return se(new Error,{type:n,[Sp]:!0},t)}function ii(n,t){return n instanceof Error&&Sp in n&&(t==null||!!(n.type&t))}const x_=["params","query","hash"];function y_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of x_)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function M_(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(gp," "),r=s.indexOf("="),a=ta(r<0?s:s.slice(0,r)),o=r<0?null:ta(s.slice(r+1));if(a in t){let l=t[a];kn(l)||(l=t[a]=[l]),l.push(o)}else t[a]=o}return t}function Ad(n){let t="";for(let e in n){const i=n[e];if(e=n_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(kn(i)?i.map(s=>s&&Xl(s)):[i&&Xl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function S_(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=kn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const E_=Symbol(""),wd=Symbol(""),Co=Symbol(""),uu=Symbol(""),Yl=Symbol("");function br(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Oi(n,t,e,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=f=>{f===!1?l(or(Ae.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):__(f)?l(or(Ae.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(a&&i.enterCallbacks[s]===a&&typeof f=="function"&&a.push(f),o())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function $o(n,t,e,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(pp(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Oi(c,e,i,a,o,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const d=Xv(u)?u.default:u;a.mods[o]=u,a.components[o]=d;const f=(d.__vccOpts||d)[t];return f&&Oi(f,e,i,a,o,s)()}))}}return r}function b_(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=t.matched[a];o&&(n.matched.find(c=>ar(c,o))?i.push(o):e.push(o));const l=n.matched[a];l&&(t.matched.find(c=>ar(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let T_=()=>location.protocol+"//"+location.host;function Ep(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,o=s.slice(a);return o[0]!=="/"&&(o="/"+o),Ed(o,"")}return Ed(e,n)+i+s}function A_(n,t,e,i){let s=[],r=[],a=null;const o=({state:f})=>{const h=Ep(n,location),g=e.value,v=t.value;let m=0;if(f){if(e.value=h,t.value=f,a&&a===g){a=null;return}m=v?f.position-v.position:0}else i(h);s.forEach(p=>{p(e.value,g,{delta:m,type:jl.pop,direction:m?m>0?Yo.forward:Yo.back:Yo.unknown})})};function l(){a=e.value}function c(f){s.push(f);const h=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(se({},f.state,{scroll:wo()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function Cd(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?wo():null}}function w_(n){const{history:t,location:e}=window,i={value:Ep(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:T_()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),e[u?"replace":"assign"](f)}}function a(l,c){r(l,se({},t.state,Cd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function o(l,c){const u=se({},s.value,t.state,{forward:l,scroll:wo()});r(u.current,u,!0),r(l,se({},Cd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function C_(n){n=d_(n);const t=w_(n),e=A_(n,t.state,t.location,t.replace);function i(r,a=!0){a||e.pauseListeners(),history.go(r)}const s=se({location:"",base:n,go:i,createHref:h_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let ds=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var De=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(De||{});const R_={type:ds.Static,value:""},P_=/[a-zA-Z0-9_]/;function D_(n){if(!n)return[[]];if(n==="/")return[[R_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(h){throw new Error(`ERR (${e})/"${c}": ${h}`)}let e=De.Static,i=e;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function d(){c&&(e===De.Static?r.push({type:ds.Static,value:c}):e===De.Param||e===De.ParamRegExp||e===De.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ds.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&e!==De.ParamRegExp){i=e,e=De.EscapeNext;continue}switch(e){case De.Static:l==="/"?(c&&d(),a()):l===":"?(d(),e=De.Param):f();break;case De.EscapeNext:f(),e=i;break;case De.Param:l==="("?e=De.ParamRegExp:P_.test(l)?f():(d(),e=De.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case De.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=De.ParamRegExpEnd:u+=l;break;case De.ParamRegExpEnd:d(),e=De.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return e===De.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),a(),s}const Rd="[^/]+?",L_={sensitive:!1,strict:!1,start:!0,end:!0};var Qe=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Qe||{});const I_=/[.+*?^${}()[\]/\\]/g;function U_(n,t){const e=se({},L_,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Qe.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Qe.Segment+(e.sensitive?Qe.BonusCaseSensitive:0);if(f.type===ds.Static)d||(s+="/"),s+=f.value.replace(I_,"\\$&"),h+=Qe.Static;else if(f.type===ds.Param){const{value:g,repeatable:v,optional:m,regexp:p}=f;r.push({name:g,repeatable:v,optional:m});const T=p||Rd;if(T!==Rd){h+=Qe.BonusCustomRegExp;try{`${T}`}catch(_){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+_.message)}}let A=v?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),s+=A,h+=Qe.Dynamic,m&&(h+=Qe.BonusOptional),v&&(h+=Qe.BonusRepeatable),T===".*"&&(h+=Qe.BonusWildcard)}u.push(h)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Qe.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,e.sensitive?"":"i");function o(c){const u=c.match(a),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=r[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===ds.Static)u+=h.value;else if(h.type===ds.Param){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(kn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=kn(p)?p.join("/"):p;if(!T)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function F_(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Qe.Static+Qe.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Qe.Static+Qe.Segment?1:-1:0}function bp(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=F_(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(Pd(i))return 1;if(Pd(s))return-1}return s.length-i.length}function Pd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const N_={strict:!1,end:!0,sensitive:!1};function O_(n,t,e){const i=U_(D_(n.path),e),s=se(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function B_(n,t){const e=[],i=new Map;t=Sd(N_,t);function s(d){return i.get(d)}function r(d,f,h){const g=!h,v=Ld(d);v.aliasOf=h&&h.record;const m=Sd(t,d),p=[v];if("alias"in d){const _=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of _)p.push(Ld(se({},v,{components:h?h.record.components:v.components,path:U,aliasOf:h?h.record:v})))}let T,A;for(const _ of p){const{path:U}=_;if(f&&U[0]!=="/"){const P=f.record.path,y=P[P.length-1]==="/"?"":"/";_.path=f.record.path+(U&&y+U)}if(T=O_(_,f,m),h?h.alias.push(T):(A=A||T,A!==T&&A.alias.push(T),g&&d.name&&!Id(T)&&a(d.name)),Tp(T)&&l(T),v.children){const P=v.children;for(let y=0;y<P.length;y++)r(P[y],T,h&&h.children[y])}h=h||T}return A?()=>{a(A)}:jr}function a(d){if(Mp(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function o(){return e}function l(d){const f=H_(d,e);e.splice(f,0,d),d.record.name&&!Id(d)&&i.set(d.record.name,d)}function c(d,f){let h,g={},v,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw or(Ae.MATCHER_NOT_FOUND,{location:d});m=h.record.name,g=se(Dd(f.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&Dd(d.params,h.keys.map(A=>A.name))),v=h.stringify(g)}else if(d.path!=null)v=d.path,h=e.find(A=>A.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=f.name?i.get(f.name):e.find(A=>A.re.test(f.path)),!h)throw or(Ae.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,g=se({},f.params,d.params),v=h.stringify(g)}const p=[];let T=h;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:v,params:g,matched:p,meta:z_(p)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:s}}function Dd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Ld(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:k_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function k_(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Id(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function z_(n){return n.reduce((t,e)=>se(t,e.meta),{})}function H_(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;bp(n,t[r])<0?i=r:e=r+1}const s=V_(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function V_(n){let t=n;for(;t=t.parent;)if(Tp(t)&&bp(n,t)===0)return t}function Tp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Ud(n){const t=Fn(Co),e=Fn(uu),i=Ln(()=>{const l=gs(n.to);return t.resolve(l)}),s=Ln(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(ar.bind(null,u));if(f>-1)return f;const h=Fd(l[c-2]);return c>1&&Fd(u)===h&&d[d.length-1].path!==h?d.findIndex(ar.bind(null,l[c-2])):f}),r=Ln(()=>s.value>-1&&q_(e.params,i.value.params)),a=Ln(()=>s.value>-1&&s.value===e.matched.length-1&&yp(e.params,i.value.params));function o(l={}){if(j_(l)){const c=t[gs(n.replace)?"replace":"push"](gs(n.to)).catch(jr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ln(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function G_(n){return n.length===1?n[0]:n}const W_=xe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ud,setup(n,{slots:t}){const e=_o(Ud(n)),{options:i}=Fn(Co),s=Ln(()=>({[Nd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Nd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&G_(t.default(e));return n.custom?r:ou("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),X_=W_;function j_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function q_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!kn(s)||s.length!==i.length||i.some((r,a)=>r.valueOf()!==s[a].valueOf()))return!1}return!0}function Fd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Nd=(n,t,e)=>n??t??e,Y_=xe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Fn(Yl),s=Ln(()=>n.route||i.value),r=Fn(wd,0),a=Ln(()=>{let c=gs(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),o=Ln(()=>s.value.matched[a.value]);Ha(wd,Ln(()=>a.value+1)),Ha(E_,o),Ha(Yl,s);const l=Pt();return Vr(()=>[l.value,o.value,n.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!ar(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=o.value,f=d&&d.components[u];if(!f)return Od(e.default,{Component:f,route:c});const h=d.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=ou(f,se({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Od(e.default,{Component:m,route:c})||m}}});function Od(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Ap=Y_;function $_(n){const t=B_(n.routes,n),e=n.parseQuery||M_,i=n.stringifyQuery||Ad,s=n.history,r=br(),a=br(),o=br(),l=Wm(wi);let c=wi;js&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jo.bind(null,N=>""+N),d=jo.bind(null,s_),f=jo.bind(null,ta);function h(N,Y){let F,Q;return Mp(N)?(F=t.getRecordMatcher(N),Q=Y):Q=N,t.addRoute(Q,F)}function g(N){const Y=t.getRecordMatcher(N);Y&&t.removeRoute(Y)}function v(){return t.getRoutes().map(N=>N.record)}function m(N){return!!t.getRecordMatcher(N)}function p(N,Y){if(Y=se({},Y||l.value),typeof N=="string"){const E=qo(e,N,Y.path),G=t.resolve({path:E.path},Y),$=s.createHref(E.fullPath);return se(E,G,{params:f(G.params),hash:ta(E.hash),redirectedFrom:void 0,href:$})}let F;if(N.path!=null)F=se({},N,{path:qo(e,N.path,Y.path).path});else{const E=se({},N.params);for(const G in E)E[G]==null&&delete E[G];F=se({},N,{params:d(E)}),Y.params=d(Y.params)}const Q=t.resolve(F,Y),gt=N.hash||"";Q.params=u(f(Q.params));const C=o_(i,se({},N,{hash:e_(gt),path:Q.path})),L=s.createHref(C);return se({fullPath:C,hash:gt,query:i===Ad?S_(N.query):N.query||{}},Q,{redirectedFrom:void 0,href:L})}function T(N){return typeof N=="string"?qo(e,N,l.value.path):se({},N)}function A(N,Y){if(c!==N)return or(Ae.NAVIGATION_CANCELLED,{from:Y,to:N})}function _(N){return y(N)}function U(N){return _(se(T(N),{replace:!0}))}function P(N,Y){const F=N.matched[N.matched.length-1];if(F&&F.redirect){const{redirect:Q}=F;let gt=typeof Q=="function"?Q(N,Y):Q;return typeof gt=="string"&&(gt=gt.includes("?")||gt.includes("#")?gt=T(gt):{path:gt},gt.params={}),se({query:N.query,hash:N.hash,params:gt.path!=null?{}:N.params},gt)}}function y(N,Y){const F=c=p(N),Q=l.value,gt=N.state,C=N.force,L=N.replace===!0,E=P(F,Q);if(E)return y(se(T(E),{state:typeof E=="object"?se({},gt,E.state):gt,force:C,replace:L}),Y||F);const G=F;G.redirectedFrom=Y;let $;return!C&&l_(i,Q,F)&&($=or(Ae.NAVIGATION_DUPLICATED,{to:G,from:Q}),Dt(Q,Q,!0,!1)),($?Promise.resolve($):S(G,Q)).catch(X=>ii(X)?ii(X,Ae.NAVIGATION_GUARD_REDIRECT)?X:St(X):q(X,G,Q)).then(X=>{if(X){if(ii(X,Ae.NAVIGATION_GUARD_REDIRECT))return y(se({replace:L},T(X.to),{state:typeof X.to=="object"?se({},gt,X.to.state):gt,force:C}),Y||G)}else X=B(G,Q,!0,L,gt);return D(G,Q,X),X})}function I(N,Y){const F=A(N,Y);return F?Promise.reject(F):Promise.resolve()}function M(N){const Y=ot.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function S(N,Y){let F;const[Q,gt,C]=b_(N,Y);F=$o(Q.reverse(),"beforeRouteLeave",N,Y);for(const E of Q)E.leaveGuards.forEach(G=>{F.push(Oi(G,N,Y))});const L=I.bind(null,N,Y);return F.push(L),lt(F).then(()=>{F=[];for(const E of r.list())F.push(Oi(E,N,Y));return F.push(L),lt(F)}).then(()=>{F=$o(gt,"beforeRouteUpdate",N,Y);for(const E of gt)E.updateGuards.forEach(G=>{F.push(Oi(G,N,Y))});return F.push(L),lt(F)}).then(()=>{F=[];for(const E of C)if(E.beforeEnter)if(kn(E.beforeEnter))for(const G of E.beforeEnter)F.push(Oi(G,N,Y));else F.push(Oi(E.beforeEnter,N,Y));return F.push(L),lt(F)}).then(()=>(N.matched.forEach(E=>E.enterCallbacks={}),F=$o(C,"beforeRouteEnter",N,Y,M),F.push(L),lt(F))).then(()=>{F=[];for(const E of a.list())F.push(Oi(E,N,Y));return F.push(L),lt(F)}).catch(E=>ii(E,Ae.NAVIGATION_CANCELLED)?E:Promise.reject(E))}function D(N,Y,F){o.list().forEach(Q=>M(()=>Q(N,Y,F)))}function B(N,Y,F,Q,gt){const C=A(N,Y);if(C)return C;const L=Y===wi,E=js?history.state:{};F&&(Q||L?s.replace(N.fullPath,se({scroll:L&&E&&E.scroll},gt)):s.push(N.fullPath,gt)),l.value=N,Dt(N,Y,F,L),St()}let k;function nt(){k||(k=s.listen((N,Y,F)=>{if(!pt.listening)return;const Q=p(N),gt=P(Q,pt.currentRoute.value);if(gt){y(se(gt,{replace:!0,force:!0}),Q).catch(jr);return}c=Q;const C=l.value;js&&g_(Td(C.fullPath,F.delta),wo()),S(Q,C).catch(L=>ii(L,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_CANCELLED)?L:ii(L,Ae.NAVIGATION_GUARD_REDIRECT)?(y(se(T(L.to),{force:!0}),Q).then(E=>{ii(E,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&!F.delta&&F.type===jl.pop&&s.go(-1,!1)}).catch(jr),Promise.reject()):(F.delta&&s.go(-F.delta,!1),q(L,Q,C))).then(L=>{L=L||B(Q,C,!1),L&&(F.delta&&!ii(L,Ae.NAVIGATION_CANCELLED)?s.go(-F.delta,!1):F.type===jl.pop&&ii(L,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),D(Q,C,L)}).catch(jr)}))}let ct=br(),st=br(),rt;function q(N,Y,F){St(N);const Q=st.list();return Q.length?Q.forEach(gt=>gt(N,Y,F)):console.error(N),Promise.reject(N)}function xt(){return rt&&l.value!==wi?Promise.resolve():new Promise((N,Y)=>{ct.add([N,Y])})}function St(N){return rt||(rt=!N,nt(),ct.list().forEach(([Y,F])=>N?F(N):Y()),ct.reset()),N}function Dt(N,Y,F,Q){const{scrollBehavior:gt}=n;if(!js||!gt)return Promise.resolve();const C=!F&&v_(Td(N.fullPath,0))||(Q||!F)&&history.state&&history.state.scroll||null;return _s().then(()=>gt(N,Y,C)).then(L=>L&&m_(L)).catch(L=>q(L,N,Y))}const Nt=N=>s.go(N);let Kt;const ot=new Set,pt={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:_,replace:U,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:st.add,isReady:xt,install(N){N.component("RouterLink",X_),N.component("RouterView",Ap),N.config.globalProperties.$router=pt,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),js&&!Kt&&l.value===wi&&(Kt=!0,_(s.location).catch(Q=>{}));const Y={};for(const Q in wi)Object.defineProperty(Y,Q,{get:()=>l.value[Q],enumerable:!0});N.provide(Co,pt),N.provide(uu,_h(Y)),N.provide(Yl,l);const F=N.unmount;ot.add(N),N.unmount=function(){ot.delete(N),ot.size<1&&(c=wi,k&&k(),k=null,l.value=wi,Kt=!1,rt=!1),F()}}};function lt(N){return N.reduce((Y,F)=>Y.then(()=>M(F)),Promise.resolve())}return pt}function Qn(){return Fn(Co)}function K_(n){return Fn(uu)}const Z_=xe({__name:"App",setup(n){return(t,e)=>(mt(),Oe(gs(Ap),null,{default:Mn(({Component:i})=>[(mt(),Oe(cg,{include:["home"]},[(mt(),Oe(_g(i)))],1024))]),_:1}))}}),J_=xe({__name:"DeepSpaceBackground",setup(n){const t=Pt();let e,i,s=0,r=0;const a=[];function o(){a.length=0;const P=["rgba(138, 120, 180, ","rgba(100, 160, 200, ","rgba(200, 170, 140, ","rgba(160, 140, 200, ","rgba(120, 180, 210, "];for(let y=0;y<8;y++)a.push({x:Math.random()*s,y:Math.random()*r,radiusX:200+Math.random()*500,radiusY:150+Math.random()*350,color:P[Math.floor(Math.random()*P.length)],alpha:.03+Math.random()*.06,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.12,phase:Math.random()*Math.PI*2})}const l=[];function c(){l.length=0;const P=Math.floor(s*r/600),y=Math.min(P,4e3);for(let I=0;I<y;I++){const M=Math.random();let S,D,B,k;M<.7?(S="tiny",D=.3+Math.random()*.6,B=.2+Math.random()*.4,k=Math.random()<.9?"#d0e0ff":"#ffe8c0"):M<.95?(S="medium",D=.8+Math.random()*1.2,B=.4+Math.random()*.5,k=Math.random()<.85?"#c8dcff":"#ffe8c0"):(S="large",D=1.5+Math.random()*2,B=.6+Math.random()*.4,k=Math.random()<.8?"#b8d0ff":"#fff0d0"),l.push({x:Math.random()*s,y:Math.random()*r,radius:D,baseAlpha:B,alpha:B,twinkleSpeed:.3+Math.random()*1.5,twinkleOffset:Math.random()*Math.PI*2,color:k,type:S})}}const u=[];let d=0,f=0;function h(){const P=Math.random();let y,I;P<.4?(y=Math.random()*s,I=-20):P<.7?(y=-20,I=Math.random()*r*.6):(y=s+20,I=Math.random()*r*.6);const M=-Math.PI/6+Math.random()*(Math.PI/2),S=1.5+Math.random()*3.5,D=Math.cos(M)*S,B=Math.sin(M)*S;u.push({x:y,y:I,vx:D,vy:B,life:0,maxLife:60+Math.random()*120,tailLength:40+Math.random()*80,headAlpha:.7+Math.random()*.3,color:Math.random()<.7?"#a0d8ff":"#c8e8ff"})}function g(P){for(const y of a){const I=y.x+Math.sin(P*1e-4+y.phase)*30,M=y.y+Math.cos(P*13e-5+y.phase)*25,S=i.createRadialGradient(I,M,0,I,M,y.radiusX),D=y.alpha+Math.sin(P*5e-4+y.phase)*.015;S.addColorStop(0,y.color+String(D)+")"),S.addColorStop(.4,y.color+String(D*.6)+")"),S.addColorStop(.7,y.color+String(D*.2)+")"),S.addColorStop(1,y.color+"0)"),i.save(),i.fillStyle=S,i.beginPath(),i.ellipse(I,M,y.radiusX,y.radiusY,y.phase*.3,0,Math.PI*2),i.fill(),i.restore()}}function v(P){for(const y of l){y.alpha=y.baseAlpha+Math.sin(P*.001*y.twinkleSpeed+y.twinkleOffset)*y.baseAlpha*.4;const I=Math.max(.05,y.alpha),M=y.radius;i.save(),i.globalAlpha=I;const S=i.createRadialGradient(y.x,y.y,0,y.x,y.y,M*2);S.addColorStop(0,y.color),S.addColorStop(.3,y.color),S.addColorStop(1,"transparent"),i.fillStyle=S,i.beginPath(),i.arc(y.x,y.y,M*2.5,0,Math.PI*2),i.fill(),y.type==="large"&&I>.4&&m(y.x,y.y,M,I*.4,y.color),i.restore()}}function m(P,y,I,M,S){const D=I*6,B=I*10;i.save(),i.globalAlpha=M;for(let k=0;k<Math.PI*2;k+=Math.PI/2){const nt=i.createLinearGradient(P,y,P+Math.cos(k)*B,y+Math.sin(k)*B);nt.addColorStop(0,S),nt.addColorStop(1,"transparent"),i.strokeStyle=nt,i.lineWidth=.5,i.beginPath(),i.moveTo(P+Math.cos(k)*I*.8,y+Math.sin(k)*I*.8),i.lineTo(P+Math.cos(k)*D,y+Math.sin(k)*D),i.stroke()}for(let k=Math.PI/4;k<Math.PI*2;k+=Math.PI/2){const nt=i.createLinearGradient(P,y,P+Math.cos(k)*B*.6,y+Math.sin(k)*B*.6);nt.addColorStop(0,S),nt.addColorStop(1,"transparent"),i.strokeStyle=nt,i.lineWidth=.3,i.beginPath(),i.moveTo(P+Math.cos(k)*I*.6,y+Math.sin(k)*I*.6),i.lineTo(P+Math.cos(k)*D*.6,y+Math.sin(k)*D*.6),i.stroke()}i.restore()}function p(){for(let P=u.length-1;P>=0;P--){const y=u[P],I=i.createRadialGradient(y.x,y.y,0,y.x,y.y,4);I.addColorStop(0,`rgba(255,255,255,${y.headAlpha})`),I.addColorStop(.4,`rgba(255,255,255,${y.headAlpha*.6})`),I.addColorStop(1,"rgba(255,255,255,0)"),i.save(),i.fillStyle=I,i.beginPath(),i.arc(y.x,y.y,4,0,Math.PI*2),i.fill(),i.restore();const M=i.createLinearGradient(y.x,y.y,y.x-y.vx*y.tailLength*.05,y.y-y.vy*y.tailLength*.05),S=y.headAlpha*.5;M.addColorStop(0,`rgba(200,230,255,${S})`),M.addColorStop(.3,`rgba(160,210,255,${S*.5})`),M.addColorStop(.6,`rgba(120,180,240,${S*.2})`),M.addColorStop(1,"rgba(100,160,220,0)"),i.save(),i.strokeStyle=M,i.lineWidth=1.2,i.lineCap="round",i.beginPath(),i.moveTo(y.x,y.y);const D=30;for(let B=1;B<=D;B++){const k=B/D,nt=y.x-y.vx*k*y.tailLength*.05,ct=y.y-y.vy*k*y.tailLength*.05;i.lineTo(nt,ct)}i.stroke(),i.restore()}}function T(){for(let P=u.length-1;P>=0;P--){const y=u[P];if(y.x+=y.vx,y.y+=y.vy,y.life++,y.life>y.maxLife*.7){const I=(y.life-y.maxLife*.7)/(y.maxLife*.3);y.headAlpha=(.7+Math.random()*.3)*(1-I)}(y.life>=y.maxLife||y.x<-100||y.x>s+100||y.y<-100||y.y>r+100)&&u.splice(P,1)}d++,d>=f&&(h(),d=0,f=180+Math.floor(Math.random()*300),Math.random()<.15&&setTimeout(()=>{u.length<2&&h()},200+Math.random()*600))}function A(){const P=i.createLinearGradient(0,0,0,r);P.addColorStop(0,"#0a0e1a"),P.addColorStop(.25,"#0f1428"),P.addColorStop(.5,"#111830"),P.addColorStop(.75,"#0d1225"),P.addColorStop(1,"#080c18"),i.fillStyle=P,i.fillRect(0,0,s,r)}function _(P){i.clearRect(0,0,s,r),A(),g(P),v(P),T(),p(),e=requestAnimationFrame(_)}function U(){t.value&&(s=window.innerWidth,r=window.innerHeight,t.value.width=s,t.value.height=r,o(),c())}return An(()=>{_s(()=>{t.value&&(i=t.value.getContext("2d"),U(),e=requestAnimationFrame(_))}),window.addEventListener("resize",U)}),Ss(()=>{e&&cancelAnimationFrame(e),window.removeEventListener("resize",U)}),(P,y)=>(mt(),At("canvas",{ref_key:"canvasRef",ref:t,class:"deep-space-canvas"},null,512))}}),be=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Q_=be(J_,[["__scopeId","data-v-eb462066"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const du="170",tr={ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t0=0,Bd=1,e0=2,wp=1,n0=2,ci=3,ji=0,on=1,qn=2,Vi=0,er=1,$l=2,kd=3,zd=4,i0=5,cs=100,s0=101,r0=102,a0=103,o0=104,l0=200,c0=201,u0=202,d0=203,Kl=204,Zl=205,f0=206,h0=207,p0=208,m0=209,g0=210,v0=211,_0=212,x0=213,y0=214,Jl=0,Ql=1,tc=2,lr=3,ec=4,nc=5,ic=6,sc=7,Cp=0,M0=1,S0=2,Gi=0,E0=1,b0=2,T0=3,Rp=4,A0=5,w0=6,C0=7,Pp=300,cr=301,ur=302,rc=303,ac=304,Ro=306,oc=1e3,fs=1001,lc=1002,Nn=1003,R0=1004,ma=1005,Sn=1006,Ko=1007,hs=1008,Mi=1009,Dp=1010,Lp=1011,ea=1012,fu=1013,ys=1014,pi=1015,sa=1016,hu=1017,pu=1018,dr=1020,Ip=35902,Up=1021,Fp=1022,In=1023,Np=1024,Op=1025,nr=1026,fr=1027,Bp=1028,mu=1029,kp=1030,gu=1031,vu=1033,Wa=33776,Xa=33777,ja=33778,qa=33779,cc=35840,uc=35841,dc=35842,fc=35843,hc=36196,pc=37492,mc=37496,gc=37808,vc=37809,_c=37810,xc=37811,yc=37812,Mc=37813,Sc=37814,Ec=37815,bc=37816,Tc=37817,Ac=37818,wc=37819,Cc=37820,Rc=37821,Ya=36492,Pc=36494,Dc=36495,zp=36283,Lc=36284,Ic=36285,Uc=36286,P0=3200,D0=3201,Hp=0,L0=1,zi="",dn="srgb",mr="srgb-linear",Po="linear",ue="srgb",As=7680,Hd=519,I0=512,U0=513,F0=514,Vp=515,N0=516,O0=517,B0=518,k0=519,Fc=35044,Vd="300 es",mi=2e3,lo=2001;class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,Nc=180/Math.PI;function Wi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function en(n,t,e){return Math.max(t,Math.min(e,n))}function z0(n,t){return(n%t+t)%t}function Zo(n,t,e){return(1-e)*n+e*t}function Yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function de(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const H0={DEG2RAD:$a};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,s,r,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=s[0],m=s[3],p=s[6],T=s[1],A=s[4],_=s[7],U=s[2],P=s[5],y=s[8];return r[0]=a*v+o*T+l*U,r[3]=a*m+o*A+l*P,r[6]=a*p+o*_+l*y,r[1]=c*v+u*T+d*U,r[4]=c*m+u*A+d*P,r[7]=c*p+u*_+d*y,r[2]=f*v+h*T+g*U,r[5]=f*m+h*A+g*P,r[8]=f*p+h*_+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,h=c*r-a*l,g=e*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=h*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new Yt;function Gp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function V0(){const n=co("canvas");return n.style.display="block",n}const Gd={};function Or(n){n in Gd||(Gd[n]=!0,console.warn(n))}function G0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function W0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function X0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(n.r=gi(n.r),n.g=gi(n.g),n.b=gi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(n.r=ir(n.r),n.g=ir(n.g),n.b=ir(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===zi?Po:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Wd=[.64,.33,.3,.6,.15,.06],Xd=[.2126,.7152,.0722],jd=[.3127,.329],qd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[mr]:{primaries:Wd,whitePoint:jd,transfer:Po,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:Xd,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:Wd,whitePoint:jd,transfer:ue,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:Xd,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}});let ws;class j0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=co("canvas")),ws.width=t.width,ws.height=t.height;const i=ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=co("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gi(e[i]/255)*255):e[i]=gi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let q0=0;class Wp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qo(s[a].image)):r.push(Qo(s[a]))}else r=Qo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?j0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y0=0;class sn extends Es{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=fs,s=fs,r=Sn,a=hs,o=In,l=Mi,c=sn.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Wi(),this.name="",this.source=new Wp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oc:t.x=t.x-Math.floor(t.x);break;case fs:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oc:t.y=t.y-Math.floor(t.y);break;case fs:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Pp;sn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,i=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,_=(h+1)/2,U=(p+1)/2,P=(u+f)/4,y=(d+v)/4,I=(g+m)/4;return A>_&&A>U?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=P/i,r=y/i):_>U?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=P/s,r=I/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=y/r,s=I/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $0 extends Es{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends $0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Xp extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class K0 extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[a+0],h=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=h,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==h||u!==g){let m=1-o;const p=l*f+c*h+u*g+d*v,T=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const U=Math.sqrt(A),P=Math.atan2(U,p*T);m=Math.sin(m*P)/U,o=Math.sin(o*P)/U}const _=o*T;if(l=l*m+f*_,c=c*m+h*_,u=u*m+g*_,d=d*m+v*_,m===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],f=r[a+1],h=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*h-c*f,t[e+1]=l*g+u*f+c*d-o*h,t[e+2]=c*g+u*h+o*f-l*d,t[e+3]=u*g-o*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),f=l(i/2),h=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-e;return this._w=h*a+e*this._w,this._x=h*i+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,i=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($d.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($d.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new W,$d=new qi;class ra{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),va.subVectors(this.max,Tr),Cs.subVectors(t.a,Tr),Rs.subVectors(t.b,Tr),Ps.subVectors(t.c,Tr),Ci.subVectors(Rs,Cs),Ri.subVectors(Ps,Rs),ts.subVectors(Cs,Ps);let e=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-ts.z,ts.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,ts.z,0,-ts.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-ts.y,ts.x,0];return!el(e,Cs,Rs,Ps,va)||(e=[1,0,0,0,1,0,0,0,1],!el(e,Cs,Rs,Ps,va))?!1:(_a.crossVectors(Ci,Ri),e=[_a.x,_a.y,_a.z],el(e,Cs,Rs,Ps,va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new W,new W,new W,new W,new W,new W,new W,new W],Rn=new W,ga=new ra,Cs=new W,Rs=new W,Ps=new W,Ci=new W,Ri=new W,ts=new W,Tr=new W,va=new W,_a=new W,es=new W;function el(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){es.fromArray(n,r);const o=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=i.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Z0=new ra,Ar=new W,nl=new W;class _u{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Z0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(nl)),this.expandByPoint(Ar.copy(t.center).sub(nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new W,il=new W,xa=new W,Pi=new W,sl=new W,ya=new W,rl=new W;class xu{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){il.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(il);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xa),o=Pi.dot(this.direction),l=-Pi.dot(xa),c=Pi.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(il).addScaledVector(xa,f),h}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,i,s,r){sl.subVectors(e,t),ya.subVectors(i,t),rl.crossVectors(sl,ya);let a=this.direction.dot(rl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,t);const l=o*this.direction.dot(ya.crossVectors(Pi,ya));if(l<0)return null;const c=o*this.direction.dot(sl.cross(Pi));if(c<0||l+c>a)return null;const u=-o*Pi.dot(rl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,i,s,r,a,o,l,c,u,d,f,h,g,v,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,f,h,g,v,m)}set(t,e,i,s,r,a,o,l,c,u,d,f,h,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),a=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*u,h=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+h*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,h=l*d,g=c*u,v=c*d;e[0]=f+v*o,e[4]=g*o-h,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=h*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,h=l*d,g=c*u,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+h*o,e[1]=h+g*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,h=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=g*c-h,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=h*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,h=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-f*d,e[8]=g*d+h,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=h*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*l,h=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=a*u,e[9]=h*d-g,e[2]=g*d-h,e[6]=o*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(J0,t,Q0)}lookAt(t,e,i){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Di.crossVectors(i,cn),Di.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Di.crossVectors(i,cn)),Di.normalize(),Ma.crossVectors(cn,Di),s[0]=Di.x,s[4]=Ma.x,s[8]=cn.x,s[1]=Di.y,s[5]=Ma.y,s[9]=cn.y,s[2]=Di.z,s[6]=Ma.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],A=i[7],_=i[11],U=i[15],P=s[0],y=s[4],I=s[8],M=s[12],S=s[1],D=s[5],B=s[9],k=s[13],nt=s[2],ct=s[6],st=s[10],rt=s[14],q=s[3],xt=s[7],St=s[11],Dt=s[15];return r[0]=a*P+o*S+l*nt+c*q,r[4]=a*y+o*D+l*ct+c*xt,r[8]=a*I+o*B+l*st+c*St,r[12]=a*M+o*k+l*rt+c*Dt,r[1]=u*P+d*S+f*nt+h*q,r[5]=u*y+d*D+f*ct+h*xt,r[9]=u*I+d*B+f*st+h*St,r[13]=u*M+d*k+f*rt+h*Dt,r[2]=g*P+v*S+m*nt+p*q,r[6]=g*y+v*D+m*ct+p*xt,r[10]=g*I+v*B+m*st+p*St,r[14]=g*M+v*k+m*rt+p*Dt,r[3]=T*P+A*S+_*nt+U*q,r[7]=T*y+A*D+_*ct+U*xt,r[11]=T*I+A*B+_*st+U*St,r[15]=T*M+A*k+_*rt+U*Dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*h-i*l*h)+v*(+e*l*h-e*c*f+r*a*f-s*a*h+s*c*u-r*l*u)+m*(+e*c*d-e*o*h-r*a*d+i*a*h+r*o*u-i*c*u)+p*(-s*o*u-e*l*d+e*o*f+s*a*d-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=d*m*c-v*f*c+v*l*h-o*m*h-d*l*p+o*f*p,A=g*f*c-u*m*c-g*l*h+a*m*h+u*l*p-a*f*p,_=u*v*c-g*d*c+g*o*h-a*v*h-u*o*p+a*d*p,U=g*d*l-u*v*l-g*o*f+a*v*f+u*o*m-a*d*m,P=e*T+i*A+s*_+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/P;return t[0]=T*y,t[1]=(v*f*r-d*m*r-v*s*h+i*m*h+d*s*p-i*f*p)*y,t[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*y,t[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*h-i*l*h)*y,t[4]=A*y,t[5]=(u*m*r-g*f*r+g*s*h-e*m*h-u*s*p+e*f*p)*y,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*y,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*h+e*l*h)*y,t[8]=_*y,t[9]=(g*d*r-u*v*r-g*i*h+e*v*h+u*i*p-e*d*p)*y,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*p+e*o*p)*y,t[11]=(u*o*r-a*d*r-u*i*c+e*d*c+a*i*h-e*o*h)*y,t[12]=U*y,t[13]=(u*v*s-g*d*s+g*i*f-e*v*f-u*i*m+e*d*m)*y,t[14]=(g*o*s-a*v*s-g*i*l+e*v*l+a*i*m-e*o*m)*y,t[15]=(a*d*s-u*o*s+u*i*l-e*d*l-a*i*f+e*o*f)*y,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,h=r*u,g=r*d,v=a*u,m=a*d,p=o*d,T=l*c,A=l*u,_=l*d,U=i.x,P=i.y,y=i.z;return s[0]=(1-(v+p))*U,s[1]=(h+_)*U,s[2]=(g-A)*U,s[3]=0,s[4]=(h-_)*P,s[5]=(1-(f+p))*P,s[6]=(m+T)*P,s[7]=0,s[8]=(g+A)*y,s[9]=(m-T)*y,s[10]=(1-(f+v))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const a=Ds.set(s[4],s[5],s[6]).length(),o=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,u=1/a,d=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=mi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let h,g;if(o===mi)h=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===lo)h=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=mi){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(a-r),f=(e+t)*c,h=(i+s)*u;let g,v;if(o===mi)g=(a+r)*d,v=-2*d;else if(o===lo)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ds=new W,Pn=new Ee,J0=new W(0,0,0),Q0=new W(1,1,1),Di=new W,Ma=new W,cn=new W,Kd=new Ee,Zd=new qi;class Jn{constructor(t=0,e=0,i=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tx=0;const Jd=new W,Ls=new qi,ai=new Ee,Sa=new W,wr=new W,ex=new W,nx=new qi,Qd=new W(1,0,0),tf=new W(0,1,0),ef=new W(0,0,1),nf={type:"added"},ix={type:"removed"},Is={type:"childadded",child:null},al={type:"childremoved",child:null};class ze extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new W,e=new Jn,i=new qi,s=new W(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Yt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Qd,t)}rotateY(t){return this.rotateOnAxis(tf,t)}rotateZ(t){return this.rotateOnAxis(ef,t)}translateOnAxis(t,e){return Jd.copy(t).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qd,t)}translateY(t){return this.translateOnAxis(tf,t)}translateZ(t){return this.translateOnAxis(ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Sa.copy(t):Sa.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(wr,Sa,this.up):ai.lookAt(Sa,wr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ai),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nf),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ix),al.child=t,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nf),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,ex),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,nx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),h=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ze.DEFAULT_UP=new W(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new W,oi=new W,ol=new W,li=new W,Us=new W,Fs=new W,sf=new W,ll=new W,cl=new W,ul=new W,dl=new we,fl=new we,hl=new we;class yn{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Dn.subVectors(s,e),oi.subVectors(i,e),ol.subVectors(t,e);const a=Dn.dot(Dn),o=Dn.dot(oi),l=Dn.dot(ol),c=oi.dot(oi),u=oi.dot(ol),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-h-g,g,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return dl.setScalar(0),fl.setScalar(0),hl.setScalar(0),dl.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,i),hl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dl,r.x),a.addScaledVector(fl,r.y),a.addScaledVector(hl,r.z),a}static isFrontFacing(t,e,i,s){return Dn.subVectors(i,e),oi.subVectors(t,e),Dn.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Us.subVectors(s,i),Fs.subVectors(r,i),ll.subVectors(t,i);const l=Us.dot(ll),c=Fs.dot(ll);if(l<=0&&c<=0)return e.copy(i);cl.subVectors(t,s);const u=Us.dot(cl),d=Fs.dot(cl);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Us,a);ul.subVectors(t,r);const h=Us.dot(ul),g=Fs.dot(ul);if(g>=0&&h<=g)return e.copy(r);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Fs,o);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return sf.subVectors(r,s),o=(d-u)/(d-u+(h-g)),e.copy(s).addScaledVector(sf,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(i).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function pl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=z0(t,1),e=en(e,0,1),i=en(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=pl(a,r,t+1/3),this.g=pl(a,r,t),this.b=pl(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=dn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const i=jp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Jt.fromWorkingColorSpace(Xe.copy(this),t),Math.round(en(Xe.r*255,0,255))*65536+Math.round(en(Xe.g*255,0,255))*256+Math.round(en(Xe.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Xe.copy(this),e);const i=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=dn){Jt.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,s=Xe.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Ea);const i=Zo(Li.h,Ea.h,e),s=Zo(Li.s,Ea.s,e),r=Zo(Li.l,Ea.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Qt;Qt.NAMES=jp;let sx=0;class gr extends Es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Wi(),this.name="",this.blending=er,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Zl,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qp extends gr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new W,ba=new kt;class On{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fc,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class Yp extends On{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $p extends On{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Kn extends On{constructor(t,e,i){super(new Float32Array(t),e,i)}}let rx=0;const gn=new Ee,ml=new ze,Ns=new W,un=new ra,Cr=new ra,Ne=new W;class Ei extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?$p:Yp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _u);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(un.min,Cr.min),un.expandByPoint(Ne),Ne.addVectors(un.max,Cr.max),un.expandByPoint(Ne)):(un.expandByPoint(Cr.min),un.expandByPoint(Cr.max))}un.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ne.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(t,c),Ne.add(Ns)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new W,l[I]=new W;const c=new W,u=new W,d=new W,f=new kt,h=new kt,g=new kt,v=new W,m=new W;function p(I,M,S){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),f.fromBufferAttribute(r,I),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),o[I].add(v),o[M].add(v),o[S].add(v),l[I].add(m),l[M].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let I=0,M=T.length;I<M;++I){const S=T[I],D=S.start,B=S.count;for(let k=D,nt=D+B;k<nt;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const A=new W,_=new W,U=new W,P=new W;function y(I){U.fromBufferAttribute(s,I),P.copy(U);const M=o[I];A.copy(M),A.sub(U.multiplyScalar(U.dot(M))).normalize(),_.crossVectors(P,M);const D=_.dot(l[I])<0?-1:1;a.setXYZW(I,A.x,A.y,A.z,D)}for(let I=0,M=T.length;I<M;++I){const S=T[I],D=S.start,B=S.count;for(let k=D,nt=D+B;k<nt;k+=3)y(t.getX(k+0)),y(t.getX(k+1)),y(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(t)for(let f=0,h=t.count;f<h;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new On(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ei,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rf=new Ee,ns=new xu,Ta=new _u,af=new W,Aa=new W,wa=new W,Ca=new W,gl=new W,Ra=new W,of=new W,Pa=new W;class En extends ze{constructor(t=new Ei,e=new qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(gl.fromBufferAttribute(d,t),a?Ra.addScaledVector(gl,u):Ra.addScaledVector(gl.sub(e),u))}e.add(Ra)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Ta.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ta,af)===null||ns.origin.distanceToSquared(af)>(t.far-t.near)**2))&&(rf.copy(r).invert(),ns.copy(t.ray).applyMatrix4(rf),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let _=T,U=A;_<U;_+=3){const P=o.getX(_),y=o.getX(_+1),I=o.getX(_+2);s=Da(this,p,t,i,c,u,d,P,y,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const T=o.getX(m),A=o.getX(m+1),_=o.getX(m+2);s=Da(this,a,t,i,c,u,d,T,A,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=T,U=A;_<U;_+=3){const P=_,y=_+1,I=_+2;s=Da(this,p,t,i,c,u,d,P,y,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const T=m,A=m+1,_=m+2;s=Da(this,a,t,i,c,u,d,T,A,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ax(n,t,e,i,s,r,a,o){let l;if(t.side===on?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ji,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pa);return c<e.near||c>e.far?null:{distance:c,point:Pa.clone(),object:n}}function Da(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Aa),n.getVertexPosition(l,wa),n.getVertexPosition(c,Ca);const u=ax(n,t,e,i,Aa,wa,Ca,of);if(u){const d=new W;yn.getBarycoord(of,Aa,wa,Ca,d),s&&(u.uv=yn.getInterpolatedAttribute(s,o,l,c,d,new kt)),r&&(u.uv1=yn.getInterpolatedAttribute(r,o,l,c,d,new kt)),a&&(u.normal=yn.getInterpolatedAttribute(a,o,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};yn.getNormal(Aa,wa,Ca,f.normal),u.face=f,u.barycoord=d}return u}class aa extends Ei{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(u,3)),this.setAttribute("uv",new Kn(d,2));function g(v,m,p,T,A,_,U,P,y,I,M){const S=_/y,D=U/I,B=_/2,k=U/2,nt=P/2,ct=y+1,st=I+1;let rt=0,q=0;const xt=new W;for(let St=0;St<st;St++){const Dt=St*D-k;for(let Nt=0;Nt<ct;Nt++){const Kt=Nt*S-B;xt[v]=Kt*T,xt[m]=Dt*A,xt[p]=nt,c.push(xt.x,xt.y,xt.z),xt[v]=0,xt[m]=0,xt[p]=P>0?1:-1,u.push(xt.x,xt.y,xt.z),d.push(Nt/y),d.push(1-St/I),rt+=1}}for(let St=0;St<I;St++)for(let Dt=0;Dt<y;Dt++){const Nt=f+Dt+ct*St,Kt=f+Dt+ct*(St+1),ot=f+(Dt+1)+ct*(St+1),pt=f+(Dt+1)+ct*St;l.push(Nt,Kt,pt),l.push(Kt,ot,pt),q+=6}o.addGroup(h,q,M),h+=q,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=hr(n[e]);for(const s in i)t[s]=i[s]}return t}function ox(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Kp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const lx={clone:hr,merge:Je};var cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends gr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=ox(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Zp extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new W,lf=new kt,cf=new kt;class xn extends Zp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nc*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,lf,cf),e.subVectors(cf,lf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($a*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Os=-90,Bs=1;class dx extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Os,Bs,t,e);s.layers=this.layers,this.add(s);const r=new xn(Os,Bs,t,e);r.layers=this.layers,this.add(r);const a=new xn(Os,Bs,t,e);a.layers=this.layers,this.add(a);const o=new xn(Os,Bs,t,e);o.layers=this.layers,this.add(o);const l=new xn(Os,Bs,t,e);l.layers=this.layers,this.add(l);const c=new xn(Os,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jp extends sn{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fx extends Ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new aa(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Vi});r.uniforms.tEquirect.value=e;const a=new En(s,r),o=e.minFilter;return e.minFilter===hs&&(e.minFilter=Sn),new dx(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const vl=new W,hx=new W,px=new Yt;class Bi{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=vl.subVectors(i,e).cross(hx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||px.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new _u,La=new W;class Mu{constructor(t=new Bi,e=new Bi,i=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],A=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,m-h,_-p).normalize(),i[1].setComponents(l+r,f+c,m+h,_+p).normalize(),i[2].setComponents(l+a,f+u,m+g,_+T).normalize(),i[3].setComponents(l-a,f-u,m-g,_-T).normalize(),i[4].setComponents(l-o,f-d,m-v,_-A).normalize(),e===mi)i[5].setComponents(l+o,f+d,m+v,_+A).normalize();else if(e===lo)i[5].setComponents(o,d,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(La.x=s.normal.x>0?t.max.x:t.min.x,La.y=s.normal.y>0?t.max.y:t.min.y,La.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qp(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function mx(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class oa extends Ei{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*f-a;for(let A=0;A<c;A++){const _=A*d-r;g.push(_,-T,0),v.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const A=T+c*p,_=T+c*(p+1),U=T+1+c*(p+1),P=T+1+c*p;h.push(A,_,P),h.push(_,U,P)}this.setIndex(h),this.setAttribute("position",new Kn(g,3)),this.setAttribute("normal",new Kn(v,3)),this.setAttribute("uv",new Kn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.width,t.height,t.widthSegments,t.heightSegments)}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
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
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
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
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Px=`#ifdef USE_BUMPMAP
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kx=`#define PI 3.141592653589793
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
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hx=`vec3 transformedNormal = objectNormal;
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
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iy=`#ifdef USE_GRADIENTMAP
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
}`,sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oy=`uniform bool receiveShadow;
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
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#endif`,py=`struct PhysicalMaterial {
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
}`,my=`
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ty=`#if defined( USE_POINTS_UV )
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
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,By=`#ifdef USE_NORMALMAP
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
#endif`,ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tM=`float getShadowMask() {
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
}`,eM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sM=`#ifdef USE_SKINNING
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
#endif`,rM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cM=`#ifdef USE_TRANSMISSION
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
#endif`,uM=`#ifdef USE_TRANSMISSION
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gM=`uniform sampler2D t2D;
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
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`#include <common>
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
}`,SM=`#if DEPTH_PACKING == 3200
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
}`,EM=`#define DISTANCE
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
}`,bM=`#define DISTANCE
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
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`uniform float scale;
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,PM=`uniform vec3 diffuse;
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
}`,DM=`#define LAMBERT
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
}`,LM=`#define LAMBERT
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
}`,IM=`#define MATCAP
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
}`,UM=`#define MATCAP
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
}`,FM=`#define NORMAL
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
}`,NM=`#define NORMAL
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
}`,OM=`#define PHONG
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
}`,BM=`#define PHONG
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
}`,kM=`#define STANDARD
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
}`,zM=`#define STANDARD
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
}`,HM=`#define TOON
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
}`,VM=`#define TOON
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
}`,GM=`uniform float size;
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
}`,WM=`uniform vec3 diffuse;
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
}`,XM=`#include <common>
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
}`,jM=`uniform vec3 color;
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
}`,qM=`uniform float rotation;
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
}`,YM=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:gx,alphahash_pars_fragment:vx,alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:yx,alphatest_pars_fragment:Mx,aomap_fragment:Sx,aomap_pars_fragment:Ex,batching_pars_vertex:bx,batching_vertex:Tx,begin_vertex:Ax,beginnormal_vertex:wx,bsdfs:Cx,iridescence_fragment:Rx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Ux,color_fragment:Fx,color_pars_fragment:Nx,color_pars_vertex:Ox,color_vertex:Bx,common:kx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Gx,emissivemap_fragment:Wx,emissivemap_pars_fragment:Xx,colorspace_fragment:jx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:$x,envmap_pars_fragment:Kx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:ly,envmap_vertex:Jx,fog_vertex:Qx,fog_pars_vertex:ty,fog_fragment:ey,fog_pars_fragment:ny,gradientmap_pars_fragment:iy,lightmap_pars_fragment:sy,lights_lambert_fragment:ry,lights_lambert_pars_fragment:ay,lights_pars_begin:oy,lights_toon_fragment:cy,lights_toon_pars_fragment:uy,lights_phong_fragment:dy,lights_phong_pars_fragment:fy,lights_physical_fragment:hy,lights_physical_pars_fragment:py,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:vy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:yy,logdepthbuf_vertex:My,map_fragment:Sy,map_pars_fragment:Ey,map_particle_fragment:by,map_particle_pars_fragment:Ty,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:wy,morphinstance_vertex:Cy,morphcolor_vertex:Ry,morphnormal_vertex:Py,morphtarget_pars_vertex:Dy,morphtarget_vertex:Ly,normal_fragment_begin:Iy,normal_fragment_maps:Uy,normal_pars_fragment:Fy,normal_pars_vertex:Ny,normal_vertex:Oy,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:ky,clearcoat_normal_fragment_maps:zy,clearcoat_pars_fragment:Hy,iridescence_pars_fragment:Vy,opaque_fragment:Gy,packing:Wy,premultiplied_alpha_fragment:Xy,project_vertex:jy,dithering_fragment:qy,dithering_pars_fragment:Yy,roughnessmap_fragment:$y,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:Jy,shadowmap_vertex:Qy,shadowmask_pars_fragment:tM,skinbase_vertex:eM,skinning_pars_vertex:nM,skinning_vertex:iM,skinnormal_vertex:sM,specularmap_fragment:rM,specularmap_pars_fragment:aM,tonemapping_fragment:oM,tonemapping_pars_fragment:lM,transmission_fragment:cM,transmission_pars_fragment:uM,uv_pars_fragment:dM,uv_pars_vertex:fM,uv_vertex:hM,worldpos_vertex:pM,background_vert:mM,background_frag:gM,backgroundCube_vert:vM,backgroundCube_frag:_M,cube_vert:xM,cube_frag:yM,depth_vert:MM,depth_frag:SM,distanceRGBA_vert:EM,distanceRGBA_frag:bM,equirect_vert:TM,equirect_frag:AM,linedashed_vert:wM,linedashed_frag:CM,meshbasic_vert:RM,meshbasic_frag:PM,meshlambert_vert:DM,meshlambert_frag:LM,meshmatcap_vert:IM,meshmatcap_frag:UM,meshnormal_vert:FM,meshnormal_frag:NM,meshphong_vert:OM,meshphong_frag:BM,meshphysical_vert:kM,meshphysical_frag:zM,meshtoon_vert:HM,meshtoon_frag:VM,points_vert:GM,points_frag:WM,shadow_vert:XM,shadow_frag:jM,sprite_vert:qM,sprite_frag:YM},Et={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Xn={basic:{uniforms:Je([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Je([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Je([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Je([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Je([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Je([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Je([Et.points,Et.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Je([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Je([Et.common,Et.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Je([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Je([Et.sprite,Et.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Je([Et.common,Et.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Je([Et.lights,Et.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Xn.physical={uniforms:Je([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ia={r:0,b:0,g:0},ss=new Jn,$M=new Ee;function KM(n,t,e,i,s,r,a){const o=new Qt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function g(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?e:t).get(A)),A}function v(T){let A=!1;const _=g(T);_===null?p(o,l):_&&_.isColor&&(p(_,1),A=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,A){const _=g(A);_&&(_.isCubeTexture||_.mapping===Ro)?(u===void 0&&(u=new En(new aa(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:hr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(A.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($M.makeRotationFromEuler(ss)),u.material.toneMapped=Jt.getTransfer(_.colorSpace)!==ue,(d!==_||f!==_.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,h=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new En(new oa(2,2),new Yi({name:"BackgroundMaterial",uniforms:hr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,A){T.getRGB(Ia,Kp(n)),i.buffers.color.setClear(Ia.r,Ia.g,Ia.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),l=A,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:v,addToRenderList:m}}function ZM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(S,D,B,k,nt){let ct=!1;const st=d(k,B,D);r!==st&&(r=st,c(r.object)),ct=h(S,k,B,nt),ct&&g(S,k,B,nt),nt!==null&&t.update(nt,n.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,_(S,D,B,k),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,D,B){const k=B.wireframe===!0;let nt=i[S.id];nt===void 0&&(nt={},i[S.id]=nt);let ct=nt[D.id];ct===void 0&&(ct={},nt[D.id]=ct);let st=ct[k];return st===void 0&&(st=f(l()),ct[k]=st),st}function f(S){const D=[],B=[],k=[];for(let nt=0;nt<e;nt++)D[nt]=0,B[nt]=0,k[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function h(S,D,B,k){const nt=r.attributes,ct=D.attributes;let st=0;const rt=B.getAttributes();for(const q in rt)if(rt[q].location>=0){const St=nt[q];let Dt=ct[q];if(Dt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Dt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Dt=S.instanceColor)),St===void 0||St.attribute!==Dt||Dt&&St.data!==Dt.data)return!0;st++}return r.attributesNum!==st||r.index!==k}function g(S,D,B,k){const nt={},ct=D.attributes;let st=0;const rt=B.getAttributes();for(const q in rt)if(rt[q].location>=0){let St=ct[q];St===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(St=S.instanceColor));const Dt={};Dt.attribute=St,St&&St.data&&(Dt.data=St.data),nt[q]=Dt,st++}r.attributes=nt,r.attributesNum=st,r.index=k}function v(){const S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const B=r.newAttributes,k=r.enabledAttributes,nt=r.attributeDivisors;B[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),nt[S]!==D&&(n.vertexAttribDivisor(S,D),nt[S]=D)}function T(){const S=r.newAttributes,D=r.enabledAttributes;for(let B=0,k=D.length;B<k;B++)D[B]!==S[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function A(S,D,B,k,nt,ct,st){st===!0?n.vertexAttribIPointer(S,D,B,nt,ct):n.vertexAttribPointer(S,D,B,k,nt,ct)}function _(S,D,B,k){v();const nt=k.attributes,ct=B.getAttributes(),st=D.defaultAttributeValues;for(const rt in ct){const q=ct[rt];if(q.location>=0){let xt=nt[rt];if(xt===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),xt!==void 0){const St=xt.normalized,Dt=xt.itemSize,Nt=t.get(xt);if(Nt===void 0)continue;const Kt=Nt.buffer,ot=Nt.type,pt=Nt.bytesPerElement,lt=ot===n.INT||ot===n.UNSIGNED_INT||xt.gpuType===fu;if(xt.isInterleavedBufferAttribute){const N=xt.data,Y=N.stride,F=xt.offset;if(N.isInstancedInterleavedBuffer){for(let Q=0;Q<q.locationSize;Q++)p(q.location+Q,N.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let Q=0;Q<q.locationSize;Q++)A(q.location+Q,Dt/q.locationSize,ot,St,Y*pt,(F+Dt/q.locationSize*Q)*pt,lt)}else{if(xt.isInstancedBufferAttribute){for(let N=0;N<q.locationSize;N++)p(q.location+N,xt.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let N=0;N<q.locationSize;N++)m(q.location+N);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let N=0;N<q.locationSize;N++)A(q.location+N,Dt/q.locationSize,ot,St,Dt*pt,Dt/q.locationSize*N*pt,lt)}}else if(st!==void 0){const St=st[rt];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(q.location,St);break;case 3:n.vertexAttrib3fv(q.location,St);break;case 4:n.vertexAttrib4fv(q.location,St);break;default:n.vertexAttrib1fv(q.location,St)}}}}T()}function U(){I();for(const S in i){const D=i[S];for(const B in D){const k=D[B];for(const nt in k)u(k[nt].object),delete k[nt];delete D[B]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const k=D[B];for(const nt in k)u(k[nt].object),delete k[nt];delete D[B]}delete i[S.id]}function y(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const k=B[S.id];for(const nt in k)u(k[nt].object),delete k[nt];delete B[S.id]}}function I(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function JM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];e.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function QM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==In&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const I=y===sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Mi&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==pi&&!I)}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:_,vertexTextures:U,maxSamples:P}}function tS(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Bi,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,A=T*4;let _=p.clippingState||null;l.value=_,_=u(g,f,A,h);for(let U=0;U!==A;++U)_[U]=e[U];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,_=h;A!==v;++A,_+=4)a.copy(d[A]).applyMatrix4(T,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function eS(n){let t=new WeakMap;function e(a,o){return o===rc?a.mapping=cr:o===ac&&(a.mapping=ur),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===rc||o===ac)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fx(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class tm extends Zp{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,uf=[.125,.215,.35,.446,.526,.582],us=20,_l=new tm,df=new Qt;let xl=null,yl=0,Ml=0,Sl=!1;const os=(1+Math.sqrt(5))/2,ks=1/os,ff=[new W(-os,ks,0),new W(os,ks,0),new W(-ks,0,os),new W(ks,0,os),new W(0,os,-ks),new W(0,os,ks),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class hf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,yl,Ml),this._renderer.xr.enabled=Sl,t.scissorTest=!1,Ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:sa,format:In,colorSpace:mr,depthBuffer:!1},s=pf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nS(r)),this._blurMaterial=iS(r,t,e)}return s}_compileMaterial(t){const e=new En(this._lodPlanes[0],t);this._renderer.compile(e,_l)}_sceneToCubeUV(t,e,i,s){const o=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(df),u.toneMapping=Gi,u.autoClear=!1;const h=new qp({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new En(new aa,h);let v=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,v=!0):(h.color.copy(df),v=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):T===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const A=this._cubeSize;Ua(s,T*A,p>2?A:0,A,A),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===cr||t.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new En(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ua(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,_l)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ff[(s-r-1)%ff.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new En(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*us-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const p=[];let T=0;for(let y=0;y<us;++y){const I=y/v,M=Math.exp(-I*I/2);p.push(M),y===0?T+=M:y<m&&(T+=2*M)}for(let y=0;y<p.length;y++)p[y]=p[y]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const _=this._sizeLods[s],U=3*_*(s>A-Ys?s-A+Ys:0),P=4*(this._cubeSize-_);Ua(e,U,P,3*_,2*_),l.setRenderTarget(e),l.render(d,_l)}}function nS(n){const t=[],e=[],i=[];let s=n;const r=n-Ys+1+uf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Ys?l=uf[a-n+Ys-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*h),A=new Float32Array(m*g*h),_=new Float32Array(p*g*h);for(let P=0;P<h;P++){const y=P%3*2/3-1,I=P>2?0:-1,M=[y,I,0,y+2/3,I,0,y+2/3,I+1,0,y,I,0,y+2/3,I+1,0,y,I+1,0];T.set(M,v*g*P),A.set(f,m*g*P);const S=[P,P,P,P,P,P];_.set(S,p*g*P)}const U=new Ei;U.setAttribute("position",new On(T,v)),U.setAttribute("uv",new On(A,m)),U.setAttribute("faceIndex",new On(_,p)),t.push(U),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function pf(n,t,e){const i=new Ms(n,t,e);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function iS(n,t,e){const i=new Float32Array(us),s=new W(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function mf(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gf(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function sS(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===rc||l===ac,u=l===cr||l===ur;if(c||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new hf(n)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new hf(n)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function rS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Or("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function aS(n,t,e,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const v=h[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(h!==null){const T=h.array;v=h.version;for(let A=0,_=T.length;A<_;A+=3){const U=T[A+0],P=T[A+1],y=T[A+2];f.push(U,P,P,y,y,U)}}else if(g!==void 0){const T=g.array;v=g.version;for(let A=0,_=T.length/3-1;A<_;A+=3){const U=A+0,P=A+1,y=A+2;f.push(U,P,P,y,y,U)}}else return;const m=new(Gp(f)?$p:Yp)(f,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function oS(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),e.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,f*a,g),e.update(h,i,g))}function u(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,i,1)}function d(f,h,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=h[T]*v[T];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function lS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function cS(n,t,e){const i=new WeakMap,s=new we;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var h=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let U=o.attributes.position.count*_,P=1;U>t.maxTextureSize&&(P=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const y=new Float32Array(U*P*4*d),I=new Xp(y,U,P,d);I.type=pi,I.needsUpdate=!0;const M=_*4;for(let D=0;D<d;D++){const B=p[D],k=T[D],nt=A[D],ct=U*P*4*D;for(let st=0;st<B.count;st++){const rt=st*M;g===!0&&(s.fromBufferAttribute(B,st),y[ct+rt+0]=s.x,y[ct+rt+1]=s.y,y[ct+rt+2]=s.z,y[ct+rt+3]=0),v===!0&&(s.fromBufferAttribute(k,st),y[ct+rt+4]=s.x,y[ct+rt+5]=s.y,y[ct+rt+6]=s.z,y[ct+rt+7]=0),m===!0&&(s.fromBufferAttribute(nt,st),y[ct+rt+8]=s.x,y[ct+rt+9]=s.y,y[ct+rt+10]=s.z,y[ct+rt+11]=nt.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new kt(U,P)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function uS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class em extends sn{constructor(t,e,i,s,r,a,o,l,c,u=nr){if(u!==nr&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===nr&&(i=ys),i===void 0&&u===fr&&(i=dr),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nm=new sn,vf=new em(1,1),im=new Xp,sm=new K0,rm=new Jp,_f=[],xf=[],yf=new Float32Array(16),Mf=new Float32Array(9),Sf=new Float32Array(4);function vr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=_f[s];if(r===void 0&&(r=new Float32Array(s),_f[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Do(n,t){let e=xf[t];e===void 0&&(e=new Int32Array(t),xf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function hS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function pS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function mS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;Sf.set(i),n.uniformMatrix2fv(this.addr,!1,Sf),Fe(e,i)}}function gS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;Mf.set(i),n.uniformMatrix3fv(this.addr,!1,Mf),Fe(e,i)}}function vS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;yf.set(i),n.uniformMatrix4fv(this.addr,!1,yf),Fe(e,i)}}function _S(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function xS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function yS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function MS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function SS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ES(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function bS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function TS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function AS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vf.compareFunction=Vp,r=vf):r=nm,e.setTexture2D(t||r,s)}function wS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||sm,s)}function CS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||rm,s)}function RS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||im,s)}function PS(n){switch(n){case 5126:return dS;case 35664:return fS;case 35665:return hS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return vS;case 5124:case 35670:return _S;case 35667:case 35671:return xS;case 35668:case 35672:return yS;case 35669:case 35673:return MS;case 5125:return SS;case 36294:return ES;case 36295:return bS;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return RS}}function DS(n,t){n.uniform1fv(this.addr,t)}function LS(n,t){const e=vr(t,this.size,2);n.uniform2fv(this.addr,e)}function IS(n,t){const e=vr(t,this.size,3);n.uniform3fv(this.addr,e)}function US(n,t){const e=vr(t,this.size,4);n.uniform4fv(this.addr,e)}function FS(n,t){const e=vr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function NS(n,t){const e=vr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function OS(n,t){const e=vr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function BS(n,t){n.uniform1iv(this.addr,t)}function kS(n,t){n.uniform2iv(this.addr,t)}function zS(n,t){n.uniform3iv(this.addr,t)}function HS(n,t){n.uniform4iv(this.addr,t)}function VS(n,t){n.uniform1uiv(this.addr,t)}function GS(n,t){n.uniform2uiv(this.addr,t)}function WS(n,t){n.uniform3uiv(this.addr,t)}function XS(n,t){n.uniform4uiv(this.addr,t)}function jS(n,t,e){const i=this.cache,s=t.length,r=Do(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nm,r[a])}function qS(n,t,e){const i=this.cache,s=t.length,r=Do(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sm,r[a])}function YS(n,t,e){const i=this.cache,s=t.length,r=Do(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rm,r[a])}function $S(n,t,e){const i=this.cache,s=t.length,r=Do(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||im,r[a])}function KS(n){switch(n){case 5126:return DS;case 35664:return LS;case 35665:return IS;case 35666:return US;case 35674:return FS;case 35675:return NS;case 35676:return OS;case 5124:case 35670:return BS;case 35667:case 35671:return kS;case 35668:case 35672:return zS;case 35669:case 35673:return HS;case 5125:return VS;case 36294:return GS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return $S}}class ZS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=PS(e.type)}}class JS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=KS(e.type)}}class QS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const El=/(\w+)(\])?(\[|\.)?/g;function Ef(n,t){n.seq.push(t),n.map[t.id]=t}function tE(n,t,e){const i=n.name,s=i.length;for(El.lastIndex=0;;){const r=El.exec(i),a=El.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ef(e,c===void 0?new ZS(o,n,t):new JS(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new QS(o),Ef(e,d)),e=d}}}class Ka{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);tE(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function bf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const eE=37297;let nE=0;function iE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Tf=new Yt;function sE(n){Jt._getMatrix(Tf,Jt.workingColorSpace,n);const t=`mat3( ${Tf.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case Po:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Af(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+iE(n.getShaderSource(t),a)}else return s}function rE(n,t){const e=sE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function aE(n,t){let e;switch(t){case E0:e="Linear";break;case b0:e="Reinhard";break;case T0:e="Cineon";break;case Rp:e="ACESFilmic";break;case w0:e="AgX";break;case C0:e="Neutral";break;case A0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fa=new W;function oE(){Jt.getLuminanceCoefficients(Fa);const n=Fa.x.toFixed(4),t=Fa.y.toFixed(4),e=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function cE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Br(n){return n!==""}function wf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(n){return n.replace(dE,hE)}const fE=new Map;function hE(n,t){let e=$t[t];if(e===void 0){const i=fE.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Oc(e)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(n){return n.replace(pE,mE)}function mE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===n0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function vE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case ur:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _E(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function xE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cp:t="ENVMAP_BLENDING_MULTIPLY";break;case M0:t="ENVMAP_BLENDING_MIX";break;case S0:t="ENVMAP_BLENDING_ADD";break}return t}function yE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ME(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gE(e),c=vE(e),u=_E(e),d=xE(e),f=yE(e),h=lE(e),g=cE(r),v=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?$t.tonemapping_pars_fragment:"",e.toneMapping!==Gi?aE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,rE("linearToOutputTexel",e.outputColorSpace),oE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),a=Oc(a),a=wf(a,e),a=Cf(a,e),o=Oc(o),o=wf(o,e),o=Cf(o,e),a=Rf(a),o=Rf(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+m+a,_=T+p+o,U=bf(s,s.VERTEX_SHADER,A),P=bf(s,s.FRAGMENT_SHADER,_);s.attachShader(v,U),s.attachShader(v,P),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function y(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(U).trim(),nt=s.getShaderInfoLog(P).trim();let ct=!0,st=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ct=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,U,P);else{const rt=Af(s,U,"vertex"),q=Af(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+rt+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||nt==="")&&(st=!1);st&&(D.diagnostics={runnable:ct,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(U),s.deleteShader(P),I=new Ka(s,v),M=uE(s,v)}let I;this.getUniforms=function(){return I===void 0&&y(this),I};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,eE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nE++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=P,this}let SE=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new bE(t),e.set(t,i)),i}}class bE{constructor(t){this.id=SE++,this.code=t,this.usedTimes=0}}function TE(n,t,e,i,s,r,a){const o=new yu,l=new EE,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,B,k){const nt=B.fog,ct=k.geometry,st=M.isMeshStandardMaterial?B.environment:null,rt=(M.isMeshStandardMaterial?e:t).get(M.envMap||st),q=rt&&rt.mapping===Ro?rt.image.height:null,xt=g[M.type];M.precision!==null&&(h=s.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const St=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Dt=St!==void 0?St.length:0;let Nt=0;ct.morphAttributes.position!==void 0&&(Nt=1),ct.morphAttributes.normal!==void 0&&(Nt=2),ct.morphAttributes.color!==void 0&&(Nt=3);let Kt,ot,pt,lt;if(xt){const le=Xn[xt];Kt=le.vertexShader,ot=le.fragmentShader}else Kt=M.vertexShader,ot=M.fragmentShader,l.update(M),pt=l.getVertexShaderID(M),lt=l.getFragmentShaderID(M);const N=n.getRenderTarget(),Y=n.state.buffers.depth.getReversed(),F=k.isInstancedMesh===!0,Q=k.isBatchedMesh===!0,gt=!!M.map,C=!!M.matcap,L=!!rt,E=!!M.aoMap,G=!!M.lightMap,$=!!M.bumpMap,X=!!M.normalMap,it=!!M.displacementMap,ut=!!M.emissiveMap,K=!!M.metalnessMap,b=!!M.roughnessMap,x=M.anisotropy>0,O=M.clearcoat>0,j=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,yt=M.transmission>0,ft=x&&!!M.anisotropyMap,vt=O&&!!M.clearcoatMap,Bt=O&&!!M.clearcoatNormalMap,ht=O&&!!M.clearcoatRoughnessMap,bt=J&&!!M.iridescenceMap,Ot=J&&!!M.iridescenceThicknessMap,Ht=Z&&!!M.sheenColorMap,Mt=Z&&!!M.sheenRoughnessMap,Vt=!!M.specularMap,Xt=!!M.specularColorMap,oe=!!M.specularIntensityMap,z=yt&&!!M.transmissionMap,Tt=yt&&!!M.thicknessMap,at=!!M.gradientMap,dt=!!M.alphaMap,Rt=M.alphaTest>0,wt=!!M.alphaHash,jt=!!M.extensions;let Te=Gi;M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Te=n.toneMapping);const Ge={shaderID:xt,shaderType:M.type,shaderName:M.name,vertexShader:Kt,fragmentShader:ot,defines:M.defines,customVertexShaderID:pt,customFragmentShaderID:lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Q,batchingColor:Q&&k._colorsTexture!==null,instancing:F,instancingColor:F&&k.instanceColor!==null,instancingMorph:F&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:mr,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:C,envMap:L,envMapMode:L&&rt.mapping,envMapCubeUVHeight:q,aoMap:E,lightMap:G,bumpMap:$,normalMap:X,displacementMap:f&&it,emissiveMap:ut,normalMapObjectSpace:X&&M.normalMapType===L0,normalMapTangentSpace:X&&M.normalMapType===Hp,metalnessMap:K,roughnessMap:b,anisotropy:x,anisotropyMap:ft,clearcoat:O,clearcoatMap:vt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:ht,dispersion:j,iridescence:J,iridescenceMap:bt,iridescenceThicknessMap:Ot,sheen:Z,sheenColorMap:Ht,sheenRoughnessMap:Mt,specularMap:Vt,specularColorMap:Xt,specularIntensityMap:oe,transmission:yt,transmissionMap:z,thicknessMap:Tt,gradientMap:at,opaque:M.transparent===!1&&M.blending===er&&M.alphaToCoverage===!1,alphaMap:dt,alphaTest:Rt,alphaHash:wt,combine:M.combine,mapUv:gt&&v(M.map.channel),aoMapUv:E&&v(M.aoMap.channel),lightMapUv:G&&v(M.lightMap.channel),bumpMapUv:$&&v(M.bumpMap.channel),normalMapUv:X&&v(M.normalMap.channel),displacementMapUv:it&&v(M.displacementMap.channel),emissiveMapUv:ut&&v(M.emissiveMap.channel),metalnessMapUv:K&&v(M.metalnessMap.channel),roughnessMapUv:b&&v(M.roughnessMap.channel),anisotropyMapUv:ft&&v(M.anisotropyMap.channel),clearcoatMapUv:vt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(M.sheenRoughnessMap.channel),specularMapUv:Vt&&v(M.specularMap.channel),specularColorMapUv:Xt&&v(M.specularColorMap.channel),specularIntensityMapUv:oe&&v(M.specularIntensityMap.channel),transmissionMapUv:z&&v(M.transmissionMap.channel),thicknessMapUv:Tt&&v(M.thicknessMap.channel),alphaMapUv:dt&&v(M.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(X||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ct.attributes.uv&&(gt||dt),fog:!!nt,useFog:M.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Y,skinning:k.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===ue,decodeVideoTextureEmissive:ut&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===ue,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qn,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:jt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&M.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(T(S,M),A(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function A(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const S=g[M.type];let D;if(S){const B=Xn[S];D=lx.clone(B.uniforms)}else D=M.uniforms;return D}function U(M,S){let D;for(let B=0,k=u.length;B<k;B++){const nt=u[B];if(nt.cacheKey===S){D=nt,++D.usedTimes;break}}return D===void 0&&(D=new ME(n,S,M,r),u.push(D)),D}function P(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function y(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:U,releaseProgram:P,releaseShaderCache:y,programs:u,dispose:I}}function AE(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function wE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Df(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d,f,h,g,v,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,f,h,g,v,m){const p=a(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):e.push(p)}function l(d,f,h,g,v,m){const p=a(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||wE),i.length>1&&i.sort(f||Df),s.length>1&&s.sort(f||Df)}function u(){for(let d=t,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function CE(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Lf,n.set(i,[a])):s>=r.length?(a=new Lf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function RE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Qt};break;case"SpotLight":e={position:new W,direction:new W,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function PE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let DE=0;function LE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function IE(n){const t=new RE,e=PE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new Ee,a=new Ee;function o(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,T=0,A=0,_=0,U=0,P=0,y=0;c.sort(LE);for(let M=0,S=c.length;M<S;M++){const D=c[M],B=D.color,k=D.intensity,nt=D.distance,ct=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*k,d+=B.g*k,f+=B.b*k;else if(D.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(D.sh.coefficients[st],k);y++}else if(D.isDirectionalLight){const st=t.get(D);if(st.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const rt=D.shadow,q=e.get(D);q.shadowIntensity=rt.intensity,q.shadowBias=rt.bias,q.shadowNormalBias=rt.normalBias,q.shadowRadius=rt.radius,q.shadowMapSize=rt.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=ct,i.directionalShadowMatrix[h]=D.shadow.matrix,T++}i.directional[h]=st,h++}else if(D.isSpotLight){const st=t.get(D);st.position.setFromMatrixPosition(D.matrixWorld),st.color.copy(B).multiplyScalar(k),st.distance=nt,st.coneCos=Math.cos(D.angle),st.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),st.decay=D.decay,i.spot[v]=st;const rt=D.shadow;if(D.map&&(i.spotLightMap[U]=D.map,U++,rt.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[v]=rt.matrix,D.castShadow){const q=e.get(D);q.shadowIntensity=rt.intensity,q.shadowBias=rt.bias,q.shadowNormalBias=rt.normalBias,q.shadowRadius=rt.radius,q.shadowMapSize=rt.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=ct,_++}v++}else if(D.isRectAreaLight){const st=t.get(D);st.color.copy(B).multiplyScalar(k),st.halfWidth.set(D.width*.5,0,0),st.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=st,m++}else if(D.isPointLight){const st=t.get(D);if(st.color.copy(D.color).multiplyScalar(D.intensity),st.distance=D.distance,st.decay=D.decay,D.castShadow){const rt=D.shadow,q=e.get(D);q.shadowIntensity=rt.intensity,q.shadowBias=rt.bias,q.shadowNormalBias=rt.normalBias,q.shadowRadius=rt.radius,q.shadowMapSize=rt.mapSize,q.shadowCameraNear=rt.camera.near,q.shadowCameraFar=rt.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=ct,i.pointShadowMatrix[g]=D.shadow.matrix,A++}i.point[g]=st,g++}else if(D.isHemisphereLight){const st=t.get(D);st.skyColor.copy(D.color).multiplyScalar(k),st.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=st,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==h||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==A||I.numSpotShadows!==_||I.numSpotMaps!==U||I.numLightProbes!==y)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=_+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=y,I.directionalLength=h,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=A,I.numSpotShadows=_,I.numSpotMaps=U,I.numLightProbes=y,i.version=DE++)}function l(c,u){let d=0,f=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const A=c[p];if(A.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(A.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(A.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(A.width*.5,0,0),_.halfHeight.set(0,A.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(A.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function If(n){const t=new IE(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function UE(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new If(n),t.set(s,[o])):r>=a.length?(o=new If(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class FE extends gr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NE extends gr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BE=`uniform sampler2D shadow_pass;
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
}`;function kE(n,t,e){let i=new Mu;const s=new kt,r=new kt,a=new we,o=new FE({depthPacking:D0}),l=new NE,c={},u=e.maxTextureSize,d={[ji]:on,[on]:ji,[qn]:qn},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:OE,fragmentShader:BE}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ei;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new En(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wp;let p=this.type;this.render=function(P,y,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Vi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==ci&&this.type===ci,nt=p===ci&&this.type!==ci;for(let ct=0,st=P.length;ct<st;ct++){const rt=P[ct],q=rt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const xt=q.getFrameExtents();if(s.multiply(xt),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xt.x),s.x=r.x*xt.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xt.y),s.y=r.y*xt.y,q.mapSize.y=r.y)),q.map===null||k===!0||nt===!0){const Dt=this.type!==ci?{minFilter:Nn,magFilter:Nn}:{};q.map!==null&&q.map.dispose(),q.map=new Ms(s.x,s.y,Dt),q.map.texture.name=rt.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const St=q.getViewportCount();for(let Dt=0;Dt<St;Dt++){const Nt=q.getViewport(Dt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),B.viewport(a),q.updateMatrices(rt,Dt),i=q.getFrustum(),_(y,I,q.camera,rt,this.type)}q.isPointLightShadow!==!0&&this.type===ci&&T(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,D)};function T(P,y){const I=t.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ms(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(y,null,I,f,v,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(y,null,I,h,v,null)}function A(P,y,I,M){let S=null;const D=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=I.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const B=S.uuid,k=y.uuid;let nt=c[B];nt===void 0&&(nt={},c[B]=nt);let ct=nt[k];ct===void 0&&(ct=S.clone(),nt[k]=ct,y.addEventListener("dispose",U)),S=ct}if(S.visible=y.visible,S.wireframe=y.wireframe,M===ci?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:d[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=I}return S}function _(P,y,I,M,S){if(P.visible===!1)return;if(P.layers.test(y.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ci)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const k=t.update(P),nt=P.material;if(Array.isArray(nt)){const ct=k.groups;for(let st=0,rt=ct.length;st<rt;st++){const q=ct[st],xt=nt[q.materialIndex];if(xt&&xt.visible){const St=A(P,xt,M,S);P.onBeforeShadow(n,P,y,I,k,St,q),n.renderBufferDirect(I,null,k,St,P,q),P.onAfterShadow(n,P,y,I,k,St,q)}}}else if(nt.visible){const ct=A(P,nt,M,S);P.onBeforeShadow(n,P,y,I,k,ct,null),n.renderBufferDirect(I,null,k,ct,P,null),P.onAfterShadow(n,P,y,I,k,ct,null)}}const B=P.children;for(let k=0,nt=B.length;k<nt;k++)_(B[k],y,I,M,S)}function U(P){P.target.removeEventListener("dispose",U);for(const I in c){const M=c[I],S=P.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const zE={[Jl]:Ql,[tc]:ic,[ec]:sc,[lr]:nc,[Ql]:Jl,[ic]:tc,[sc]:ec,[nc]:lr};function HE(n,t){function e(){let z=!1;const Tt=new we;let at=null;const dt=new we(0,0,0,0);return{setMask:function(Rt){at!==Rt&&!z&&(n.colorMask(Rt,Rt,Rt,Rt),at=Rt)},setLocked:function(Rt){z=Rt},setClear:function(Rt,wt,jt,Te,Ge){Ge===!0&&(Rt*=Te,wt*=Te,jt*=Te),Tt.set(Rt,wt,jt,Te),dt.equals(Tt)===!1&&(n.clearColor(Rt,wt,jt,Te),dt.copy(Tt))},reset:function(){z=!1,at=null,dt.set(-1,0,0,0)}}}function i(){let z=!1,Tt=!1,at=null,dt=null,Rt=null;return{setReversed:function(wt){if(Tt!==wt){const jt=t.get("EXT_clip_control");Tt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Te=Rt;Rt=null,this.setClear(Te)}Tt=wt},getReversed:function(){return Tt},setTest:function(wt){wt?N(n.DEPTH_TEST):Y(n.DEPTH_TEST)},setMask:function(wt){at!==wt&&!z&&(n.depthMask(wt),at=wt)},setFunc:function(wt){if(Tt&&(wt=zE[wt]),dt!==wt){switch(wt){case Jl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case tc:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case ec:n.depthFunc(n.EQUAL);break;case nc:n.depthFunc(n.GEQUAL);break;case ic:n.depthFunc(n.GREATER);break;case sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=wt}},setLocked:function(wt){z=wt},setClear:function(wt){Rt!==wt&&(Tt&&(wt=1-wt),n.clearDepth(wt),Rt=wt)},reset:function(){z=!1,at=null,dt=null,Rt=null,Tt=!1}}}function s(){let z=!1,Tt=null,at=null,dt=null,Rt=null,wt=null,jt=null,Te=null,Ge=null;return{setTest:function(le){z||(le?N(n.STENCIL_TEST):Y(n.STENCIL_TEST))},setMask:function(le){Tt!==le&&!z&&(n.stencilMask(le),Tt=le)},setFunc:function(le,wn,ti){(at!==le||dt!==wn||Rt!==ti)&&(n.stencilFunc(le,wn,ti),at=le,dt=wn,Rt=ti)},setOp:function(le,wn,ti){(wt!==le||jt!==wn||Te!==ti)&&(n.stencilOp(le,wn,ti),wt=le,jt=wn,Te=ti)},setLocked:function(le){z=le},setClear:function(le){Ge!==le&&(n.clearStencil(le),Ge=le)},reset:function(){z=!1,Tt=null,at=null,dt=null,Rt=null,wt=null,jt=null,Te=null,Ge=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,A=null,_=null,U=null,P=null,y=new Qt(0,0,0),I=0,M=!1,S=null,D=null,B=null,k=null,nt=null;const ct=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,rt=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(q)[1]),st=rt>=1):q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),st=rt>=2);let xt=null,St={};const Dt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),Kt=new we().fromArray(Dt),ot=new we().fromArray(Nt);function pt(z,Tt,at,dt){const Rt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(z,wt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<at;jt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Tt+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return wt}const lt={};lt[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(n.DEPTH_TEST),a.setFunc(lr),$(!1),X(Bd),N(n.CULL_FACE),E(Vi);function N(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function Y(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function F(z,Tt){return d[z]!==Tt?(n.bindFramebuffer(z,Tt),d[z]=Tt,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Tt),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Q(z,Tt){let at=h,dt=!1;if(z){at=f.get(Tt),at===void 0&&(at=[],f.set(Tt,at));const Rt=z.textures;if(at.length!==Rt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,jt=Rt.length;wt<jt;wt++)at[wt]=n.COLOR_ATTACHMENT0+wt;at.length=Rt.length,dt=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,dt=!0);dt&&n.drawBuffers(at)}function gt(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const C={[cs]:n.FUNC_ADD,[s0]:n.FUNC_SUBTRACT,[r0]:n.FUNC_REVERSE_SUBTRACT};C[a0]=n.MIN,C[o0]=n.MAX;const L={[l0]:n.ZERO,[c0]:n.ONE,[u0]:n.SRC_COLOR,[Kl]:n.SRC_ALPHA,[g0]:n.SRC_ALPHA_SATURATE,[p0]:n.DST_COLOR,[f0]:n.DST_ALPHA,[d0]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[m0]:n.ONE_MINUS_DST_COLOR,[h0]:n.ONE_MINUS_DST_ALPHA,[v0]:n.CONSTANT_COLOR,[_0]:n.ONE_MINUS_CONSTANT_COLOR,[x0]:n.CONSTANT_ALPHA,[y0]:n.ONE_MINUS_CONSTANT_ALPHA};function E(z,Tt,at,dt,Rt,wt,jt,Te,Ge,le){if(z===Vi){v===!0&&(Y(n.BLEND),v=!1);return}if(v===!1&&(N(n.BLEND),v=!0),z!==i0){if(z!==m||le!==M){if((p!==cs||_!==cs)&&(n.blendEquation(n.FUNC_ADD),p=cs,_=cs),le)switch(z){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.ONE,n.ONE);break;case kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,A=null,U=null,P=null,y.set(0,0,0),I=0,m=z,M=le}return}Rt=Rt||Tt,wt=wt||at,jt=jt||dt,(Tt!==p||Rt!==_)&&(n.blendEquationSeparate(C[Tt],C[Rt]),p=Tt,_=Rt),(at!==T||dt!==A||wt!==U||jt!==P)&&(n.blendFuncSeparate(L[at],L[dt],L[wt],L[jt]),T=at,A=dt,U=wt,P=jt),(Te.equals(y)===!1||Ge!==I)&&(n.blendColor(Te.r,Te.g,Te.b,Ge),y.copy(Te),I=Ge),m=z,M=!1}function G(z,Tt){z.side===qn?Y(n.CULL_FACE):N(n.CULL_FACE);let at=z.side===on;Tt&&(at=!at),$(at),z.blending===er&&z.transparent===!1?E(Vi):E(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const dt=z.stencilWrite;o.setTest(dt),dt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ut(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):Y(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(z){S!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),S=z)}function X(z){z!==t0?(N(n.CULL_FACE),z!==D&&(z===Bd?n.cullFace(n.BACK):z===e0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Y(n.CULL_FACE),D=z}function it(z){z!==B&&(st&&n.lineWidth(z),B=z)}function ut(z,Tt,at){z?(N(n.POLYGON_OFFSET_FILL),(k!==Tt||nt!==at)&&(n.polygonOffset(Tt,at),k=Tt,nt=at)):Y(n.POLYGON_OFFSET_FILL)}function K(z){z?N(n.SCISSOR_TEST):Y(n.SCISSOR_TEST)}function b(z){z===void 0&&(z=n.TEXTURE0+ct-1),xt!==z&&(n.activeTexture(z),xt=z)}function x(z,Tt,at){at===void 0&&(xt===null?at=n.TEXTURE0+ct-1:at=xt);let dt=St[at];dt===void 0&&(dt={type:void 0,texture:void 0},St[at]=dt),(dt.type!==z||dt.texture!==Tt)&&(xt!==at&&(n.activeTexture(at),xt=at),n.bindTexture(z,Tt||lt[z]),dt.type=z,dt.texture=Tt)}function O(){const z=St[xt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(z){Kt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Kt.copy(z))}function Mt(z){ot.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ot.copy(z))}function Vt(z,Tt){let at=c.get(Tt);at===void 0&&(at=new WeakMap,c.set(Tt,at));let dt=at.get(z);dt===void 0&&(dt=n.getUniformBlockIndex(Tt,z.name),at.set(z,dt))}function Xt(z,Tt){const dt=c.get(Tt).get(z);l.get(Tt)!==dt&&(n.uniformBlockBinding(Tt,dt,z.__bindingPointIndex),l.set(Tt,dt))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},xt=null,St={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,A=null,_=null,U=null,P=null,y=new Qt(0,0,0),I=0,M=!1,S=null,D=null,B=null,k=null,nt=null,Kt.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:Y,bindFramebuffer:F,drawBuffers:Q,useProgram:gt,setBlending:E,setMaterial:G,setFlipSided:$,setCullFace:X,setLineWidth:it,setPolygonOffset:ut,setScissorTest:K,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:bt,texImage3D:Ot,updateUBOMapping:Vt,uniformBlockBinding:Xt,texStorage2D:Bt,texStorage3D:ht,texSubImage2D:Z,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:vt,scissor:Ht,viewport:Mt,reset:oe}}function Uf(n,t,e,i){const s=VE(i);switch(e){case Up:return n*t;case Np:return n*t;case Op:return n*t*2;case Bp:return n*t/s.components*s.byteLength;case mu:return n*t/s.components*s.byteLength;case kp:return n*t*2/s.components*s.byteLength;case gu:return n*t*2/s.components*s.byteLength;case Fp:return n*t*3/s.components*s.byteLength;case In:return n*t*4/s.components*s.byteLength;case vu:return n*t*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ja:case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:case fc:return Math.max(n,16)*Math.max(t,8)/4;case cc:case dc:return Math.max(n,8)*Math.max(t,8)/2;case hc:case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ya:case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zp:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ic:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function VE(n){switch(n){case Mi:case Dp:return{byteLength:1,components:1};case ea:case Lp:case sa:return{byteLength:2,components:1};case hu:case pu:return{byteLength:2,components:4};case ys:case fu:case pi:return{byteLength:4,components:1};case Ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function GE(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return h?new OffscreenCanvas(b,x):co("canvas")}function v(b,x,O){let j=1;const J=K(b);if((J.width>O||J.height>O)&&(j=O/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(j*J.width),yt=Math.floor(j*J.height);d===void 0&&(d=g(Z,yt));const ft=x?g(Z,yt):d;return ft.width=Z,ft.height=yt,ft.getContext("2d").drawImage(b,0,0,Z,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+yt+")."),ft}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(b,x,O,j,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),x===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){const yt=J?Po:Jt.getTransfer(j);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=yt===ue?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(b,x){let O;return b?x===null||x===ys||x===dr?O=n.DEPTH24_STENCIL8:x===pi?O=n.DEPTH32F_STENCIL8:x===ea&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ys||x===dr?O=n.DEPTH_COMPONENT24:x===pi?O=n.DEPTH_COMPONENT32F:x===ea&&(O=n.DEPTH_COMPONENT16),O}function U(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Nn&&b.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function P(b){const x=b.target;x.removeEventListener("dispose",P),I(x),x.isVideoTexture&&u.delete(x)}function y(b){const x=b.target;x.removeEventListener("dispose",y),S(x)}function I(b){const x=i.get(b);if(x.__webglInit===void 0)return;const O=b.source,j=f.get(O);if(j){const J=j[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(b),Object.keys(j).length===0&&f.delete(O)}i.remove(b)}function M(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const O=b.source,j=f.get(O);delete j[x.__cacheKey],a.memory.textures--}function S(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let J=0;J<x.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[j][J]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let j=0,J=O.length;j<J;j++){const Z=i.get(O[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(O[j])}i.remove(b)}let D=0;function B(){D=0}function k(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function nt(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function ct(b,x){const O=i.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(O,b,x);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function st(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){ot(O,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function rt(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){ot(O,b,x);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function q(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){pt(O,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const xt={[oc]:n.REPEAT,[fs]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},St={[Nn]:n.NEAREST,[R0]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Ko]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},Dt={[I0]:n.NEVER,[k0]:n.ALWAYS,[U0]:n.LESS,[Vp]:n.LEQUAL,[F0]:n.EQUAL,[B0]:n.GEQUAL,[N0]:n.GREATER,[O0]:n.NOTEQUAL};function Nt(b,x){if(x.type===pi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===Ko||x.magFilter===ma||x.magFilter===hs||x.minFilter===Sn||x.minFilter===Ko||x.minFilter===ma||x.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,xt[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,xt[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,xt[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,St[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,St[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Dt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nn||x.minFilter!==ma&&x.minFilter!==hs||x.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Kt(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",P));const j=x.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const Z=nt(x);if(Z!==b.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[Z].usedTimes++;const yt=J[b.__cacheKey];yt!==void 0&&(J[b.__cacheKey].usedTimes--,yt.usedTimes===0&&M(x)),b.__cacheKey=Z,b.__webglTexture=J[Z].texture}return O}function ot(b,x,O){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const J=Kt(b,x),Z=x.source;e.bindTexture(j,b.__webglTexture,n.TEXTURE0+O);const yt=i.get(Z);if(Z.version!==yt.__version||J===!0){e.activeTexture(n.TEXTURE0+O);const ft=Jt.getPrimaries(Jt.workingColorSpace),vt=x.colorSpace===zi?null:Jt.getPrimaries(x.colorSpace),Bt=x.colorSpace===zi||ft===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let ht=v(x.image,!1,s.maxTextureSize);ht=ut(x,ht);const bt=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type);let Ht=A(x.internalFormat,bt,Ot,x.colorSpace,x.isVideoTexture);Nt(j,x);let Mt;const Vt=x.mipmaps,Xt=x.isVideoTexture!==!0,oe=yt.__version===void 0||J===!0,z=Z.dataReady,Tt=U(x,ht);if(x.isDepthTexture)Ht=_(x.format===fr,x.type),oe&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,Ht,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Ht,ht.width,ht.height,0,bt,Ot,null));else if(x.isDataTexture)if(Vt.length>0){Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,Tt,Ht,Vt[0].width,Vt[0].height);for(let at=0,dt=Vt.length;at<dt;at++)Mt=Vt[at],Xt?z&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Mt.width,Mt.height,bt,Ot,Mt.data):e.texImage2D(n.TEXTURE_2D,at,Ht,Mt.width,Mt.height,0,bt,Ot,Mt.data);x.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(n.TEXTURE_2D,Tt,Ht,ht.width,ht.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,bt,Ot,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,ht.width,ht.height,0,bt,Ot,ht.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,Ht,Vt[0].width,Vt[0].height,ht.depth);for(let at=0,dt=Vt.length;at<dt;at++)if(Mt=Vt[at],x.format!==In)if(bt!==null)if(Xt){if(z)if(x.layerUpdates.size>0){const Rt=Uf(Mt.width,Mt.height,x.format,x.type);for(const wt of x.layerUpdates){const jt=Mt.data.subarray(wt*Rt/Mt.data.BYTES_PER_ELEMENT,(wt+1)*Rt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,wt,Mt.width,Mt.height,1,bt,jt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Mt.width,Mt.height,ht.depth,bt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,Ht,Mt.width,Mt.height,ht.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Mt.width,Mt.height,ht.depth,bt,Ot,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,Ht,Mt.width,Mt.height,ht.depth,0,bt,Ot,Mt.data)}else{Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,Tt,Ht,Vt[0].width,Vt[0].height);for(let at=0,dt=Vt.length;at<dt;at++)Mt=Vt[at],x.format!==In?bt!==null?Xt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,Ht,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?z&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Mt.width,Mt.height,bt,Ot,Mt.data):e.texImage2D(n.TEXTURE_2D,at,Ht,Mt.width,Mt.height,0,bt,Ot,Mt.data)}else if(x.isDataArrayTexture)if(Xt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,Ht,ht.width,ht.height,ht.depth),z)if(x.layerUpdates.size>0){const at=Uf(ht.width,ht.height,x.format,x.type);for(const dt of x.layerUpdates){const Rt=ht.data.subarray(dt*at/ht.data.BYTES_PER_ELEMENT,(dt+1)*at/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,dt,ht.width,ht.height,1,bt,Ot,Rt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,bt,Ot,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,ht.width,ht.height,ht.depth,0,bt,Ot,ht.data);else if(x.isData3DTexture)Xt?(oe&&e.texStorage3D(n.TEXTURE_3D,Tt,Ht,ht.width,ht.height,ht.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,bt,Ot,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,ht.width,ht.height,ht.depth,0,bt,Ot,ht.data);else if(x.isFramebufferTexture){if(oe)if(Xt)e.texStorage2D(n.TEXTURE_2D,Tt,Ht,ht.width,ht.height);else{let at=ht.width,dt=ht.height;for(let Rt=0;Rt<Tt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Ht,at,dt,0,bt,Ot,null),at>>=1,dt>>=1}}else if(Vt.length>0){if(Xt&&oe){const at=K(Vt[0]);e.texStorage2D(n.TEXTURE_2D,Tt,Ht,at.width,at.height)}for(let at=0,dt=Vt.length;at<dt;at++)Mt=Vt[at],Xt?z&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,bt,Ot,Mt):e.texImage2D(n.TEXTURE_2D,at,Ht,bt,Ot,Mt);x.generateMipmaps=!1}else if(Xt){if(oe){const at=K(ht);e.texStorage2D(n.TEXTURE_2D,Tt,Ht,at.width,at.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Ot,ht)}else e.texImage2D(n.TEXTURE_2D,0,Ht,bt,Ot,ht);m(x)&&p(j),yt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function pt(b,x,O){if(x.image.length!==6)return;const j=Kt(b,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const Z=i.get(J);if(J.version!==Z.__version||j===!0){e.activeTexture(n.TEXTURE0+O);const yt=Jt.getPrimaries(Jt.workingColorSpace),ft=x.colorSpace===zi?null:Jt.getPrimaries(x.colorSpace),vt=x.colorSpace===zi||yt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Bt=x.isCompressedTexture||x.image[0].isCompressedTexture,ht=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let dt=0;dt<6;dt++)!Bt&&!ht?bt[dt]=v(x.image[dt],!0,s.maxCubemapSize):bt[dt]=ht?x.image[dt].image:x.image[dt],bt[dt]=ut(x,bt[dt]);const Ot=bt[0],Ht=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),Vt=A(x.internalFormat,Ht,Mt,x.colorSpace),Xt=x.isVideoTexture!==!0,oe=Z.__version===void 0||j===!0,z=J.dataReady;let Tt=U(x,Ot);Nt(n.TEXTURE_CUBE_MAP,x);let at;if(Bt){Xt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Vt,Ot.width,Ot.height);for(let dt=0;dt<6;dt++){at=bt[dt].mipmaps;for(let Rt=0;Rt<at.length;Rt++){const wt=at[Rt];x.format!==In?Ht!==null?Xt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,0,0,wt.width,wt.height,Ht,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,Vt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,0,0,wt.width,wt.height,Ht,Mt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,Vt,wt.width,wt.height,0,Ht,Mt,wt.data)}}}else{if(at=x.mipmaps,Xt&&oe){at.length>0&&Tt++;const dt=K(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Vt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(ht){Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,bt[dt].width,bt[dt].height,Ht,Mt,bt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Vt,bt[dt].width,bt[dt].height,0,Ht,Mt,bt[dt].data);for(let Rt=0;Rt<at.length;Rt++){const jt=at[Rt].image[dt].image;Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,0,0,jt.width,jt.height,Ht,Mt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,Vt,jt.width,jt.height,0,Ht,Mt,jt.data)}}else{Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ht,Mt,bt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Vt,Ht,Mt,bt[dt]);for(let Rt=0;Rt<at.length;Rt++){const wt=at[Rt];Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,0,0,Ht,Mt,wt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,Vt,Ht,Mt,wt.image[dt])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Z.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function lt(b,x,O,j,J,Z){const yt=r.convert(O.format,O.colorSpace),ft=r.convert(O.type),vt=A(O.internalFormat,yt,ft,O.colorSpace),Bt=i.get(x),ht=i.get(O);if(ht.__renderTarget=x,!Bt.__hasExternalTextures){const bt=Math.max(1,x.width>>Z),Ot=Math.max(1,x.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,vt,bt,Ot,x.depth,0,yt,ft,null):e.texImage2D(J,Z,vt,bt,Ot,0,yt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),X(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,ht.__webglTexture,0,$(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,ht.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function N(b,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const j=x.depthTexture,J=j&&j.isDepthTexture?j.type:null,Z=_(x.stencilBuffer,J),yt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=$(x);X(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,Z,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,b)}else{const j=x.textures;for(let J=0;J<j.length;J++){const Z=j[J],yt=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),vt=A(Z.internalFormat,yt,ft,Z.colorSpace),Bt=$(x);O&&X(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,vt,x.width,x.height):X(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt,vt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,vt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Y(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ct(x.depthTexture,0);const J=j.__webglTexture,Z=$(x);if(x.depthTexture.format===nr)X(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===fr)X(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function F(b){const x=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=j}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Y(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),N(x.__webglDepthbuffer[j],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),N(x.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(b,x,O){const j=i.get(b);x!==void 0&&lt(j.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&F(b)}function gt(b){const x=b.texture,O=i.get(b),j=i.get(x);b.addEventListener("dispose",y);const J=b.textures,Z=b.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,a.memory.textures++),Z){O.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ft]=[];for(let vt=0;vt<x.mipmaps.length;vt++)O.__webglFramebuffer[ft][vt]=n.createFramebuffer()}else O.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ft=0;ft<x.mipmaps.length;ft++)O.__webglFramebuffer[ft]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ft=0,vt=J.length;ft<vt;ft++){const Bt=i.get(J[ft]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&X(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ft=0;ft<J.length;ft++){const vt=J[ft];O.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ft]);const Bt=r.convert(vt.format,vt.colorSpace),ht=r.convert(vt.type),bt=A(vt.internalFormat,Bt,ht,vt.colorSpace,b.isXRRenderTarget===!0),Ot=$(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,bt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,O.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),N(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,x);for(let ft=0;ft<6;ft++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)lt(O.__webglFramebuffer[ft][vt],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else lt(O.__webglFramebuffer[ft],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ft=0,vt=J.length;ft<vt;ft++){const Bt=J[ft],ht=i.get(Bt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),Nt(n.TEXTURE_2D,Bt),lt(O.__webglFramebuffer,b,Bt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),m(Bt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ft=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,j.__webglTexture),Nt(ft,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)lt(O.__webglFramebuffer[vt],b,x,n.COLOR_ATTACHMENT0,ft,vt);else lt(O.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ft,0);m(x)&&p(ft),e.unbindTexture()}b.depthBuffer&&F(b)}function C(b){const x=b.textures;for(let O=0,j=x.length;O<j;O++){const J=x[O];if(m(J)){const Z=T(b),yt=i.get(J).__webglTexture;e.bindTexture(Z,yt),p(Z),e.unbindTexture()}}}const L=[],E=[];function G(b){if(b.samples>0){if(X(b)===!1){const x=b.textures,O=b.width,j=b.height;let J=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(b),ft=x.length>1;if(ft)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const Bt=i.get(x[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,J,n.NEAREST),l===!0&&(L.length=0,E.length=0,L.push(n.COLOR_ATTACHMENT0+vt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(L.push(Z),E.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const Bt=i.get(x[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function $(b){return Math.min(s.maxSamples,b.samples)}function X(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function it(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ut(b,x){const O=b.colorSpace,j=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==mr&&O!==zi&&(Jt.getTransfer(O)===ue?(j!==In||J!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function K(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=ct,this.setTexture2DArray=st,this.setTexture3D=rt,this.setTextureCube=q,this.rebindTextures=Q,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=X}function WE(n,t){function e(i,s=zi){let r;const a=Jt.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===hu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ip)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dp)return n.BYTE;if(i===Lp)return n.SHORT;if(i===ea)return n.UNSIGNED_SHORT;if(i===fu)return n.INT;if(i===ys)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===sa)return n.HALF_FLOAT;if(i===Up)return n.ALPHA;if(i===Fp)return n.RGB;if(i===In)return n.RGBA;if(i===Np)return n.LUMINANCE;if(i===Op)return n.LUMINANCE_ALPHA;if(i===nr)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===Bp)return n.RED;if(i===mu)return n.RED_INTEGER;if(i===kp)return n.RG;if(i===gu)return n.RG_INTEGER;if(i===vu)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===ja||i===qa)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===dc||i===fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hc||i===pc)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===vc||i===_c||i===xc||i===yc||i===Mc||i===Sc||i===Ec||i===bc||i===Tc||i===Ac||i===wc||i===Cc||i===Rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_c)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ac)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===Pc||i===Dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ya)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zp||i===Lc||i===Ic||i===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class XE extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Na extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jE={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const qE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YE=`
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

}`;class $E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Yi({vertexShader:qE,fragmentShader:YE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new En(new oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KE extends Es{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const v=new $E,m=e.getContextAttributes();let p=null,T=null;const A=[],_=[],U=new kt;let P=null;const y=new xn;y.viewport=new we;const I=new xn;I.viewport=new we;const M=[y,I],S=new XE;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let pt=A[ot];return pt===void 0&&(pt=new bl,A[ot]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(ot){let pt=A[ot];return pt===void 0&&(pt=new bl,A[ot]=pt),pt.getGripSpace()},this.getHand=function(ot){let pt=A[ot];return pt===void 0&&(pt=new bl,A[ot]=pt),pt.getHandSpace()};function k(ot){const pt=_.indexOf(ot.inputSource);if(pt===-1)return;const lt=A[pt];lt!==void 0&&(lt.update(ot.inputSource,ot.frame,c||a),lt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function nt(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",ct);for(let ot=0;ot<A.length;ot++){const pt=_[ot];pt!==null&&(_[ot]=null,A[ot].disconnect(pt))}D=null,B=null,v.reset(),t.setRenderTarget(p),h=null,f=null,d=null,s=null,T=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){o=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",ct),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const pt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Ms(h.framebufferWidth,h.framebufferHeight,{format:In,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let pt=null,lt=null,N=null;m.depth&&(N=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=m.stencil?fr:nr,lt=m.stencil?dr:ys);const Y={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Y),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Ms(f.textureWidth,f.textureHeight,{format:In,type:Mi,depthTexture:new em(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ct(ot){for(let pt=0;pt<ot.removed.length;pt++){const lt=ot.removed[pt],N=_.indexOf(lt);N>=0&&(_[N]=null,A[N].disconnect(lt))}for(let pt=0;pt<ot.added.length;pt++){const lt=ot.added[pt];let N=_.indexOf(lt);if(N===-1){for(let F=0;F<A.length;F++)if(F>=_.length){_.push(lt),N=F;break}else if(_[F]===null){_[F]=lt,N=F;break}if(N===-1)break}const Y=A[N];Y&&Y.connect(lt)}}const st=new W,rt=new W;function q(ot,pt,lt){st.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(lt.matrixWorld);const N=st.distanceTo(rt),Y=pt.projectionMatrix.elements,F=lt.projectionMatrix.elements,Q=Y[14]/(Y[10]-1),gt=Y[14]/(Y[10]+1),C=(Y[9]+1)/Y[5],L=(Y[9]-1)/Y[5],E=(Y[8]-1)/Y[0],G=(F[8]+1)/F[0],$=Q*E,X=Q*G,it=N/(-E+G),ut=it*-E;if(pt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(ut),ot.translateZ(it),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Y[10]===-1)ot.projectionMatrix.copy(pt.projectionMatrix),ot.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const K=Q+it,b=gt+it,x=$-ut,O=X+(N-ut),j=C*gt/b*K,J=L*gt/b*K;ot.projectionMatrix.makePerspective(x,O,j,J,K,b),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function xt(ot,pt){pt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(pt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let pt=ot.near,lt=ot.far;v.texture!==null&&(v.depthNear>0&&(pt=v.depthNear),v.depthFar>0&&(lt=v.depthFar)),S.near=I.near=y.near=pt,S.far=I.far=y.far=lt,(D!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far),y.layers.mask=ot.layers.mask|2,I.layers.mask=ot.layers.mask|4,S.layers.mask=y.layers.mask|I.layers.mask;const N=ot.parent,Y=S.cameras;xt(S,N);for(let F=0;F<Y.length;F++)xt(Y[F],N);Y.length===2?q(S,y,I):S.projectionMatrix.copy(y.projectionMatrix),St(ot,S,N)};function St(ot,pt,lt){lt===null?ot.matrix.copy(pt.matrixWorld):(ot.matrix.copy(lt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(pt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(pt.projectionMatrix),ot.projectionMatrixInverse.copy(pt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Nc*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ot){l=ot,f!==null&&(f.fixedFoveation=ot),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ot)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Dt=null;function Nt(ot,pt){if(u=pt.getViewerPose(c||a),g=pt,u!==null){const lt=u.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let N=!1;lt.length!==S.cameras.length&&(S.cameras.length=0,N=!0);for(let F=0;F<lt.length;F++){const Q=lt[F];let gt=null;if(h!==null)gt=h.getViewport(Q);else{const L=d.getViewSubImage(f,Q);gt=L.viewport,F===0&&(t.setRenderTargetTextures(T,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(T))}let C=M[F];C===void 0&&(C=new xn,C.layers.enable(F),C.viewport=new we,M[F]=C),C.matrix.fromArray(Q.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Q.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(gt.x,gt.y,gt.width,gt.height),F===0&&(S.matrix.copy(C.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),N===!0&&S.cameras.push(C)}const Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const F=d.getDepthInformation(lt[0]);F&&F.isValid&&F.texture&&v.init(t,F,s.renderState)}}for(let lt=0;lt<A.length;lt++){const N=_[lt],Y=A[lt];N!==null&&Y!==void 0&&Y.update(N,pt,c||a)}Dt&&Dt(ot,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),g=null}const Kt=new Qp;Kt.setAnimationLoop(Nt),this.setAnimationLoop=function(ot){Dt=ot},this.dispose=function(){}}}const rs=new Jn,ZE=new Ee;function JE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Kp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,A,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),A=T.envMap,_=T.envMapRotation;A&&(m.envMap.value=A,rs.copy(_),rs.x*=-1,rs.y*=-1,rs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(rs)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QE(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const _=A.program;i.uniformBlockBinding(T,_)}function c(T,A){let _=s[T.id];_===void 0&&(g(T),_=u(T),s[T.id]=_,T.addEventListener("dispose",m));const U=A.program;i.updateUBOMapping(T,U);const P=t.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function u(T){const A=d();T.__bindingPointIndex=A;const _=n.createBuffer(),U=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,_),_}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const A=s[T.id],_=T.uniforms,U=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let P=0,y=_.length;P<y;P++){const I=Array.isArray(_[P])?_[P]:[_[P]];for(let M=0,S=I.length;M<S;M++){const D=I[M];if(h(D,P,M,U)===!0){const B=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let nt=0;for(let ct=0;ct<k.length;ct++){const st=k[ct],rt=v(st);typeof st=="number"||typeof st=="boolean"?(D.__data[0]=st,n.bufferSubData(n.UNIFORM_BUFFER,B+nt,D.__data)):st.isMatrix3?(D.__data[0]=st.elements[0],D.__data[1]=st.elements[1],D.__data[2]=st.elements[2],D.__data[3]=0,D.__data[4]=st.elements[3],D.__data[5]=st.elements[4],D.__data[6]=st.elements[5],D.__data[7]=0,D.__data[8]=st.elements[6],D.__data[9]=st.elements[7],D.__data[10]=st.elements[8],D.__data[11]=0):(st.toArray(D.__data,nt),nt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,A,_,U){const P=T.value,y=A+"_"+_;if(U[y]===void 0)return typeof P=="number"||typeof P=="boolean"?U[y]=P:U[y]=P.clone(),!0;{const I=U[y];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return U[y]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(T){const A=T.uniforms;let _=0;const U=16;for(let y=0,I=A.length;y<I;y++){const M=Array.isArray(A[y])?A[y]:[A[y]];for(let S=0,D=M.length;S<D;S++){const B=M[S],k=Array.isArray(B.value)?B.value:[B.value];for(let nt=0,ct=k.length;nt<ct;nt++){const st=k[nt],rt=v(st),q=_%U,xt=q%rt.boundary,St=q+xt;_+=xt,St!==0&&U-St<rt.storage&&(_+=U-St),B.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=rt.storage}}}const P=_%U;return P>0&&(_+=U-P),T.__size=_,T.__cache={},this}function v(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const _=a.indexOf(A.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class tb{constructor(t={}){const{canvas:e=V0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Gi,this.toneMappingExposure=1;const _=this;let U=!1,P=0,y=0,I=null,M=-1,S=null;const D=new we,B=new we;let k=null;const nt=new Qt(0);let ct=0,st=e.width,rt=e.height,q=1,xt=null,St=null;const Dt=new we(0,0,st,rt),Nt=new we(0,0,st,rt);let Kt=!1;const ot=new Mu;let pt=!1,lt=!1;const N=new Ee,Y=new Ee,F=new W,Q=new we,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function L(){return I===null?q:1}let E=i;function G(R,H){return e.getContext(R,H)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${du}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),E===null){const H="webgl2";if(E=G(H,R),E===null)throw G(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $,X,it,ut,K,b,x,O,j,J,Z,yt,ft,vt,Bt,ht,bt,Ot,Ht,Mt,Vt,Xt,oe,z;function Tt(){$=new rS(E),$.init(),Xt=new WE(E,$),X=new QM(E,$,t,Xt),it=new HE(E,$),X.reverseDepthBuffer&&f&&it.buffers.depth.setReversed(!0),ut=new lS(E),K=new AE,b=new GE(E,$,it,K,X,Xt,ut),x=new eS(_),O=new sS(_),j=new mx(E),oe=new ZM(E,j),J=new aS(E,j,ut,oe),Z=new uS(E,J,j,ut),Ht=new cS(E,X,b),ht=new tS(K),yt=new TE(_,x,O,$,X,oe,ht),ft=new JE(_,K),vt=new CE,Bt=new UE($),Ot=new KM(_,x,O,it,Z,h,l),bt=new kE(_,Z,X),z=new QE(E,ut,X,it),Mt=new JM(E,$,ut),Vt=new oS(E,$,ut),ut.programs=yt.programs,_.capabilities=X,_.extensions=$,_.properties=K,_.renderLists=vt,_.shadowMap=bt,_.state=it,_.info=ut}Tt();const at=new KE(_,E);this.xr=at,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const R=$.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(st,rt,!1))},this.getSize=function(R){return R.set(st,rt)},this.setSize=function(R,H,tt=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=R,rt=H,e.width=Math.floor(R*q),e.height=Math.floor(H*q),tt===!0&&(e.style.width=R+"px",e.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(st*q,rt*q).floor()},this.setDrawingBufferSize=function(R,H,tt){st=R,rt=H,q=tt,e.width=Math.floor(R*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Dt)},this.setViewport=function(R,H,tt,et){R.isVector4?Dt.set(R.x,R.y,R.z,R.w):Dt.set(R,H,tt,et),it.viewport(D.copy(Dt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(Nt)},this.setScissor=function(R,H,tt,et){R.isVector4?Nt.set(R.x,R.y,R.z,R.w):Nt.set(R,H,tt,et),it.scissor(B.copy(Nt).multiplyScalar(q).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(R){it.setScissorTest(Kt=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(R=!0,H=!0,tt=!0){let et=0;if(R){let V=!1;if(I!==null){const _t=I.texture.format;V=_t===vu||_t===gu||_t===mu}if(V){const _t=I.texture.type,Ct=_t===Mi||_t===ys||_t===ea||_t===dr||_t===hu||_t===pu,Lt=Ot.getClearColor(),It=Ot.getClearAlpha(),Gt=Lt.r,qt=Lt.g,Ut=Lt.b;Ct?(g[0]=Gt,g[1]=qt,g[2]=Ut,g[3]=It,E.clearBufferuiv(E.COLOR,0,g)):(v[0]=Gt,v[1]=qt,v[2]=Ut,v[3]=It,E.clearBufferiv(E.COLOR,0,v))}else et|=E.COLOR_BUFFER_BIT}H&&(et|=E.DEPTH_BUFFER_BIT),tt&&(et|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),vt.dispose(),Bt.dispose(),K.dispose(),x.dispose(),O.dispose(),Z.dispose(),oe.dispose(),z.dispose(),yt.dispose(),at.dispose(),at.removeEventListener("sessionstart",wu),at.removeEventListener("sessionend",Cu),Ki.stop()};function dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=ut.autoReset,H=bt.enabled,tt=bt.autoUpdate,et=bt.needsUpdate,V=bt.type;Tt(),ut.autoReset=R,bt.enabled=H,bt.autoUpdate=tt,bt.needsUpdate=et,bt.type=V}function wt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function jt(R){const H=R.target;H.removeEventListener("dispose",jt),Te(H)}function Te(R){Ge(R),K.remove(R)}function Ge(R){const H=K.get(R).programs;H!==void 0&&(H.forEach(function(tt){yt.releaseProgram(tt)}),R.isShaderMaterial&&yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,tt,et,V,_t){H===null&&(H=gt);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,Lt=cm(R,H,tt,et,V);it.setMaterial(et,Ct);let It=tt.index,Gt=1;if(et.wireframe===!0){if(It=J.getWireframeAttribute(tt),It===void 0)return;Gt=2}const qt=tt.drawRange,Ut=tt.attributes.position;let te=qt.start*Gt,ge=(qt.start+qt.count)*Gt;_t!==null&&(te=Math.max(te,_t.start*Gt),ge=Math.min(ge,(_t.start+_t.count)*Gt)),It!==null?(te=Math.max(te,0),ge=Math.min(ge,It.count)):Ut!=null&&(te=Math.max(te,0),ge=Math.min(ge,Ut.count));const ye=ge-te;if(ye<0||ye===1/0)return;oe.setup(V,et,Lt,tt,It);let rn,ne=Mt;if(It!==null&&(rn=j.get(It),ne=Vt,ne.setIndex(rn)),V.isMesh)et.wireframe===!0?(it.setLineWidth(et.wireframeLinewidth*L()),ne.setMode(E.LINES)):ne.setMode(E.TRIANGLES);else if(V.isLine){let Ft=et.linewidth;Ft===void 0&&(Ft=1),it.setLineWidth(Ft*L()),V.isLineSegments?ne.setMode(E.LINES):V.isLineLoop?ne.setMode(E.LINE_LOOP):ne.setMode(E.LINE_STRIP)}else V.isPoints?ne.setMode(E.POINTS):V.isSprite&&ne.setMode(E.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ne.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ft=V._multiDrawStarts,ei=V._multiDrawCounts,ie=V._multiDrawCount,Cn=It?j.get(It).bytesPerElement:1,bs=K.get(et).currentProgram.getUniforms();for(let ln=0;ln<ie;ln++)bs.setValue(E,"_gl_DrawID",ln),ne.render(Ft[ln]/Cn,ei[ln])}else if(V.isInstancedMesh)ne.renderInstances(te,ye,V.count);else if(tt.isInstancedBufferGeometry){const Ft=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,ei=Math.min(tt.instanceCount,Ft);ne.renderInstances(te,ye,ei)}else ne.render(te,ye)};function le(R,H,tt){R.transparent===!0&&R.side===qn&&R.forceSinglePass===!1?(R.side=on,R.needsUpdate=!0,ca(R,H,tt),R.side=ji,R.needsUpdate=!0,ca(R,H,tt),R.side=qn):ca(R,H,tt)}this.compile=function(R,H,tt=null){tt===null&&(tt=R),p=Bt.get(tt),p.init(H),A.push(p),tt.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),R!==tt&&R.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const et=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _t=V.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){const Lt=_t[Ct];le(Lt,tt,V),et.add(Lt)}else le(_t,tt,V),et.add(_t)}),A.pop(),p=null,et},this.compileAsync=function(R,H,tt=null){const et=this.compile(R,H,tt);return new Promise(V=>{function _t(){if(et.forEach(function(Ct){K.get(Ct).currentProgram.isReady()&&et.delete(Ct)}),et.size===0){V(R);return}setTimeout(_t,10)}$.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let wn=null;function ti(R){wn&&wn(R)}function wu(){Ki.stop()}function Cu(){Ki.start()}const Ki=new Qp;Ki.setAnimationLoop(ti),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(R){wn=R,at.setAnimationLoop(R),R===null?Ki.stop():Ki.start()},at.addEventListener("sessionstart",wu),at.addEventListener("sessionend",Cu),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(H),H=at.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,H,I),p=Bt.get(R,A.length),p.init(H),A.push(p),Y.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ot.setFromProjectionMatrix(Y),lt=this.localClippingEnabled,pt=ht.init(this.clippingPlanes,lt),m=vt.get(R,T.length),m.init(),T.push(m),at.enabled===!0&&at.isPresenting===!0){const _t=_.xr.getDepthSensingMesh();_t!==null&&Lo(_t,H,-1/0,_.sortObjects)}Lo(R,H,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(xt,St),C=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,C&&Ot.addToRenderList(m,R),this.info.render.frame++,pt===!0&&ht.beginShadows();const tt=p.state.shadowsArray;bt.render(tt,R,H),pt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const _t=H.cameras;if(V.length>0)for(let Ct=0,Lt=_t.length;Ct<Lt;Ct++){const It=_t[Ct];Pu(et,V,R,It)}C&&Ot.render(R);for(let Ct=0,Lt=_t.length;Ct<Lt;Ct++){const It=_t[Ct];Ru(m,R,It,It.viewport)}}else V.length>0&&Pu(et,V,R,H),C&&Ot.render(R),Ru(m,R,H);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(_,R,H),oe.resetDefaultState(),M=-1,S=null,A.pop(),A.length>0?(p=A[A.length-1],pt===!0&&ht.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Lo(R,H,tt,et){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ot.intersectsSprite(R)){et&&Q.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Y);const Ct=Z.update(R),Lt=R.material;Lt.visible&&m.push(R,Ct,Lt,tt,Q.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ot.intersectsObject(R))){const Ct=Z.update(R),Lt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Q.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Q.copy(Ct.boundingSphere.center)),Q.applyMatrix4(R.matrixWorld).applyMatrix4(Y)),Array.isArray(Lt)){const It=Ct.groups;for(let Gt=0,qt=It.length;Gt<qt;Gt++){const Ut=It[Gt],te=Lt[Ut.materialIndex];te&&te.visible&&m.push(R,Ct,te,tt,Q.z,Ut)}}else Lt.visible&&m.push(R,Ct,Lt,tt,Q.z,null)}}const _t=R.children;for(let Ct=0,Lt=_t.length;Ct<Lt;Ct++)Lo(_t[Ct],H,tt,et)}function Ru(R,H,tt,et){const V=R.opaque,_t=R.transmissive,Ct=R.transparent;p.setupLightsView(tt),pt===!0&&ht.setGlobalState(_.clippingPlanes,tt),et&&it.viewport(D.copy(et)),V.length>0&&la(V,H,tt),_t.length>0&&la(_t,H,tt),Ct.length>0&&la(Ct,H,tt),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Pu(R,H,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new Ms(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?sa:Mi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const _t=p.state.transmissionRenderTarget[et.id],Ct=et.viewport||D;_t.setSize(Ct.z,Ct.w);const Lt=_.getRenderTarget();_.setRenderTarget(_t),_.getClearColor(nt),ct=_.getClearAlpha(),ct<1&&_.setClearColor(16777215,.5),_.clear(),C&&Ot.render(tt);const It=_.toneMapping;_.toneMapping=Gi;const Gt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),pt===!0&&ht.setGlobalState(_.clippingPlanes,et),la(R,tt,et),b.updateMultisampleRenderTarget(_t),b.updateRenderTargetMipmap(_t),$.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ut=0,te=H.length;Ut<te;Ut++){const ge=H[Ut],ye=ge.object,rn=ge.geometry,ne=ge.material,Ft=ge.group;if(ne.side===qn&&ye.layers.test(et.layers)){const ei=ne.side;ne.side=on,ne.needsUpdate=!0,Du(ye,tt,et,rn,ne,Ft),ne.side=ei,ne.needsUpdate=!0,qt=!0}}qt===!0&&(b.updateMultisampleRenderTarget(_t),b.updateRenderTargetMipmap(_t))}_.setRenderTarget(Lt),_.setClearColor(nt,ct),Gt!==void 0&&(et.viewport=Gt),_.toneMapping=It}function la(R,H,tt){const et=H.isScene===!0?H.overrideMaterial:null;for(let V=0,_t=R.length;V<_t;V++){const Ct=R[V],Lt=Ct.object,It=Ct.geometry,Gt=et===null?Ct.material:et,qt=Ct.group;Lt.layers.test(tt.layers)&&Du(Lt,H,tt,It,Gt,qt)}}function Du(R,H,tt,et,V,_t){R.onBeforeRender(_,H,tt,et,V,_t),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(_,H,tt,et,R,_t),V.transparent===!0&&V.side===qn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,_.renderBufferDirect(tt,H,et,V,R,_t),V.side=ji,V.needsUpdate=!0,_.renderBufferDirect(tt,H,et,V,R,_t),V.side=qn):_.renderBufferDirect(tt,H,et,V,R,_t),R.onAfterRender(_,H,tt,et,V,_t)}function ca(R,H,tt){H.isScene!==!0&&(H=gt);const et=K.get(R),V=p.state.lights,_t=p.state.shadowsArray,Ct=V.state.version,Lt=yt.getParameters(R,V.state,_t,H,tt),It=yt.getProgramCacheKey(Lt);let Gt=et.programs;et.environment=R.isMeshStandardMaterial?H.environment:null,et.fog=H.fog,et.envMap=(R.isMeshStandardMaterial?O:x).get(R.envMap||et.environment),et.envMapRotation=et.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Gt===void 0&&(R.addEventListener("dispose",jt),Gt=new Map,et.programs=Gt);let qt=Gt.get(It);if(qt!==void 0){if(et.currentProgram===qt&&et.lightsStateVersion===Ct)return Iu(R,Lt),qt}else Lt.uniforms=yt.getUniforms(R),R.onBeforeCompile(Lt,_),qt=yt.acquireProgram(Lt,It),Gt.set(It,qt),et.uniforms=Lt.uniforms;const Ut=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),Iu(R,Lt),et.needsLights=dm(R),et.lightsStateVersion=Ct,et.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMap.value=V.state.directionalShadowMap,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotShadowMap.value=V.state.spotShadowMap,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMap.value=V.state.pointShadowMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),et.currentProgram=qt,et.uniformsList=null,qt}function Lu(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Ka.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Iu(R,H){const tt=K.get(R);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function cm(R,H,tt,et,V){H.isScene!==!0&&(H=gt),b.resetTextureUnits();const _t=H.fog,Ct=et.isMeshStandardMaterial?H.environment:null,Lt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:mr,It=(et.isMeshStandardMaterial?O:x).get(et.envMap||Ct),Gt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,qt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ut=!!tt.morphAttributes.position,te=!!tt.morphAttributes.normal,ge=!!tt.morphAttributes.color;let ye=Gi;et.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=_.toneMapping);const rn=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ne=rn!==void 0?rn.length:0,Ft=K.get(et),ei=p.state.lights;if(pt===!0&&(lt===!0||R!==S)){const pn=R===S&&et.id===M;ht.setState(et,R,pn)}let ie=!1;et.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ei.state.version||Ft.outputColorSpace!==Lt||V.isBatchedMesh&&Ft.batching===!1||!V.isBatchedMesh&&Ft.batching===!0||V.isBatchedMesh&&Ft.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ft.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ft.instancing===!1||!V.isInstancedMesh&&Ft.instancing===!0||V.isSkinnedMesh&&Ft.skinning===!1||!V.isSkinnedMesh&&Ft.skinning===!0||V.isInstancedMesh&&Ft.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ft.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ft.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ft.instancingMorph===!1&&V.morphTexture!==null||Ft.envMap!==It||et.fog===!0&&Ft.fog!==_t||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==qt||Ft.morphTargets!==Ut||Ft.morphNormals!==te||Ft.morphColors!==ge||Ft.toneMapping!==ye||Ft.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Ft.__version=et.version);let Cn=Ft.currentProgram;ie===!0&&(Cn=ca(et,H,V));let bs=!1,ln=!1,_r=!1;const Me=Cn.getUniforms(),zn=Ft.uniforms;if(it.useProgram(Cn.program)&&(bs=!0,ln=!0,_r=!0),et.id!==M&&(M=et.id,ln=!0),bs||S!==R){it.buffers.depth.getReversed()?(N.copy(R.projectionMatrix),W0(N),X0(N),Me.setValue(E,"projectionMatrix",N)):Me.setValue(E,"projectionMatrix",R.projectionMatrix),Me.setValue(E,"viewMatrix",R.matrixWorldInverse);const bi=Me.map.cameraPosition;bi!==void 0&&bi.setValue(E,F.setFromMatrixPosition(R.matrixWorld)),X.logarithmicDepthBuffer&&Me.setValue(E,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Me.setValue(E,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,ln=!0,_r=!0)}if(V.isSkinnedMesh){Me.setOptional(E,V,"bindMatrix"),Me.setOptional(E,V,"bindMatrixInverse");const pn=V.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Me.setValue(E,"boneTexture",pn.boneTexture,b))}V.isBatchedMesh&&(Me.setOptional(E,V,"batchingTexture"),Me.setValue(E,"batchingTexture",V._matricesTexture,b),Me.setOptional(E,V,"batchingIdTexture"),Me.setValue(E,"batchingIdTexture",V._indirectTexture,b),Me.setOptional(E,V,"batchingColorTexture"),V._colorsTexture!==null&&Me.setValue(E,"batchingColorTexture",V._colorsTexture,b));const xr=tt.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Ht.update(V,tt,Cn),(ln||Ft.receiveShadow!==V.receiveShadow)&&(Ft.receiveShadow=V.receiveShadow,Me.setValue(E,"receiveShadow",V.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(zn.envMap.value=It,zn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&H.environment!==null&&(zn.envMapIntensity.value=H.environmentIntensity),ln&&(Me.setValue(E,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&um(zn,_r),_t&&et.fog===!0&&ft.refreshFogUniforms(zn,_t),ft.refreshMaterialUniforms(zn,et,q,rt,p.state.transmissionRenderTarget[R.id]),Ka.upload(E,Lu(Ft),zn,b)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ka.upload(E,Lu(Ft),zn,b),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Me.setValue(E,"center",V.center),Me.setValue(E,"modelViewMatrix",V.modelViewMatrix),Me.setValue(E,"normalMatrix",V.normalMatrix),Me.setValue(E,"modelMatrix",V.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const pn=et.uniformsGroups;for(let bi=0,Ti=pn.length;bi<Ti;bi++){const Uu=pn[bi];z.update(Uu,Cn),z.bind(Uu,Cn)}}return Cn}function um(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function dm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,H,tt){K.get(R.texture).__webglTexture=H,K.get(R.depthTexture).__webglTexture=tt;const et=K.get(R);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){const tt=K.get(R);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,tt=0){I=R,P=H,y=tt;let et=!0,V=null,_t=!1,Ct=!1;if(R){const It=K.get(R);if(It.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(E.FRAMEBUFFER,null),et=!1;else if(It.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(It.__hasExternalTextures)b.rebindTextures(R,K.get(R.texture).__webglTexture,K.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ut=R.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&K.has(Ut)&&(R.width!==Ut.image.width||R.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ct=!0);const qt=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[H])?V=qt[H][tt]:V=qt[H],_t=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?V=K.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?V=qt[tt]:V=qt,D.copy(R.viewport),B.copy(R.scissor),k=R.scissorTest}else D.copy(Dt).multiplyScalar(q).floor(),B.copy(Nt).multiplyScalar(q).floor(),k=Kt;if(it.bindFramebuffer(E.FRAMEBUFFER,V)&&et&&it.drawBuffers(R,V),it.viewport(D),it.scissor(B),it.setScissorTest(k),_t){const It=K.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+H,It.__webglTexture,tt)}else if(Ct){const It=K.get(R.texture),Gt=H||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,It.__webglTexture,tt||0,Gt)}M=-1},this.readRenderTargetPixels=function(R,H,tt,et,V,_t,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){it.bindFramebuffer(E.FRAMEBUFFER,Lt);try{const It=R.texture,Gt=It.format,qt=It.type;if(!X.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-et&&tt>=0&&tt<=R.height-V&&E.readPixels(H,tt,et,V,Xt.convert(Gt),Xt.convert(qt),_t)}finally{const It=I!==null?K.get(I).__webglFramebuffer:null;it.bindFramebuffer(E.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(R,H,tt,et,V,_t,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){const It=R.texture,Gt=It.format,qt=It.type;if(!X.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-et&&tt>=0&&tt<=R.height-V){it.bindFramebuffer(E.FRAMEBUFFER,Lt);const Ut=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ut),E.bufferData(E.PIXEL_PACK_BUFFER,_t.byteLength,E.STREAM_READ),E.readPixels(H,tt,et,V,Xt.convert(Gt),Xt.convert(qt),0);const te=I!==null?K.get(I).__webglFramebuffer:null;it.bindFramebuffer(E.FRAMEBUFFER,te);const ge=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await G0(E,ge,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ut),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,_t),E.deleteBuffer(Ut),E.deleteSync(ge),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,tt=0){R.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);const et=Math.pow(2,-tt),V=Math.floor(R.image.width*et),_t=Math.floor(R.image.height*et),Ct=H!==null?H.x:0,Lt=H!==null?H.y:0;b.setTexture2D(R,0),E.copyTexSubImage2D(E.TEXTURE_2D,tt,0,0,Ct,Lt,V,_t),it.unbindTexture()},this.copyTextureToTexture=function(R,H,tt=null,et=null,V=0){R.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,R=arguments[1],H=arguments[2],V=arguments[3]||0,tt=null);let _t,Ct,Lt,It,Gt,qt,Ut,te,ge;const ye=R.isCompressedTexture?R.mipmaps[V]:R.image;tt!==null?(_t=tt.max.x-tt.min.x,Ct=tt.max.y-tt.min.y,Lt=tt.isBox3?tt.max.z-tt.min.z:1,It=tt.min.x,Gt=tt.min.y,qt=tt.isBox3?tt.min.z:0):(_t=ye.width,Ct=ye.height,Lt=ye.depth||1,It=0,Gt=0,qt=0),et!==null?(Ut=et.x,te=et.y,ge=et.z):(Ut=0,te=0,ge=0);const rn=Xt.convert(H.format),ne=Xt.convert(H.type);let Ft;H.isData3DTexture?(b.setTexture3D(H,0),Ft=E.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(b.setTexture2DArray(H,0),Ft=E.TEXTURE_2D_ARRAY):(b.setTexture2D(H,0),Ft=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,H.unpackAlignment);const ei=E.getParameter(E.UNPACK_ROW_LENGTH),ie=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Cn=E.getParameter(E.UNPACK_SKIP_PIXELS),bs=E.getParameter(E.UNPACK_SKIP_ROWS),ln=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ye.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ye.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,It),E.pixelStorei(E.UNPACK_SKIP_ROWS,Gt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,qt);const _r=R.isDataArrayTexture||R.isData3DTexture,Me=H.isDataArrayTexture||H.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const zn=K.get(R),xr=K.get(H),pn=K.get(zn.__renderTarget),bi=K.get(xr.__renderTarget);it.bindFramebuffer(E.READ_FRAMEBUFFER,pn.__webglFramebuffer),it.bindFramebuffer(E.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ti=0;Ti<Lt;Ti++)_r&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,K.get(R).__webglTexture,V,qt+Ti),R.isDepthTexture?(Me&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,K.get(H).__webglTexture,V,ge+Ti),E.blitFramebuffer(It,Gt,_t,Ct,Ut,te,_t,Ct,E.DEPTH_BUFFER_BIT,E.NEAREST)):Me?E.copyTexSubImage3D(Ft,V,Ut,te,ge+Ti,It,Gt,_t,Ct):E.copyTexSubImage2D(Ft,V,Ut,te,ge+Ti,It,Gt,_t,Ct);it.bindFramebuffer(E.READ_FRAMEBUFFER,null),it.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Me?R.isDataTexture||R.isData3DTexture?E.texSubImage3D(Ft,V,Ut,te,ge,_t,Ct,Lt,rn,ne,ye.data):H.isCompressedArrayTexture?E.compressedTexSubImage3D(Ft,V,Ut,te,ge,_t,Ct,Lt,rn,ye.data):E.texSubImage3D(Ft,V,Ut,te,ge,_t,Ct,Lt,rn,ne,ye):R.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,V,Ut,te,_t,Ct,rn,ne,ye.data):R.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,V,Ut,te,ye.width,ye.height,rn,ye.data):E.texSubImage2D(E.TEXTURE_2D,V,Ut,te,_t,Ct,rn,ne,ye);E.pixelStorei(E.UNPACK_ROW_LENGTH,ei),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ie),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Cn),E.pixelStorei(E.UNPACK_SKIP_ROWS,bs),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ln),V===0&&H.generateMipmaps&&E.generateMipmap(Ft),it.unbindTexture()},this.copyTextureToTexture3D=function(R,H,tt=null,et=null,V=0){return R.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,et=arguments[1]||null,R=arguments[2],H=arguments[3],V=arguments[4]||0),Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,H,tt,et,V)},this.initRenderTarget=function(R){K.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),it.unbindTexture()},this.resetState=function(){P=0,y=0,I=null,it.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class eb extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fc,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new W;class uo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new On(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class am extends gr{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zs;const Rr=new W,Hs=new W,Vs=new W,Gs=new kt,Pr=new kt,om=new Ee,Oa=new W,Dr=new W,Ba=new W,Ff=new kt,Tl=new kt,Nf=new kt;class ib extends ze{constructor(t=new am){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Ei;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nb(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new uo(i,3,0,!1)),zs.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=zs,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),om.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ka(Oa.set(-.5,-.5,0),Vs,a,Hs,s,r),ka(Dr.set(.5,-.5,0),Vs,a,Hs,s,r),ka(Ba.set(.5,.5,0),Vs,a,Hs,s,r),Ff.set(0,0),Tl.set(1,0),Nf.set(1,1);let o=t.ray.intersectTriangle(Oa,Dr,Ba,!1,Rr);if(o===null&&(ka(Dr.set(-.5,.5,0),Vs,a,Hs,s,r),Tl.set(0,1),o=t.ray.intersectTriangle(Oa,Ba,Dr,!1,Rr),o===null))return;const l=t.ray.origin.distanceTo(Rr);l<t.near||l>t.far||e.push({distance:l,point:Rr.clone(),uv:yn.getInterpolation(Rr,Oa,Dr,Ba,Ff,Tl,Nf,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ka(n,t,e,i,s,r){Gs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Pr.x=r*Gs.x-s*Gs.y,Pr.y=s*Gs.x+r*Gs.y):Pr.copy(Gs),n.copy(t),n.x+=Pr.x,n.y+=Pr.y,n.applyMatrix4(om)}class Of extends sn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eu extends Ei{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new W,d=new W,f=new W;for(let h=0;h<=i;h++)for(let g=0;g<=s;g++){const v=g/s*r,m=h/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=s;g++){const v=(s+1)*h+g-1,m=(s+1)*(h-1)+g-1,p=(s+1)*(h-1)+g,T=(s+1)*h+g;a.push(v,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new Kn(o,3)),this.setAttribute("normal",new Kn(l,3)),this.setAttribute("uv",new Kn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bf extends gr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hp,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bu extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sb extends bu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Al=new Ee,kf=new W,zf=new W;class rb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mu,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;kf.setFromMatrixPosition(t.matrixWorld),e.position.copy(kf),zf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zf),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ab extends rb{constructor(){super(new tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wl extends bu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new ab}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ob extends bu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hf(){return performance.now()}const Vf=new Ee;class cb{constructor(t,e,i=0,s=1/0){this.ray=new xu(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new yu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vf),this}intersectObject(t,e=!0,i=[]){return Bc(t,this,i,e),i.sort(Gf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Bc(t[s],this,i,e);return i.sort(Gf),i}}function Gf(n,t){return n.distance-t.distance}function Bc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Bc(r[a],t,e,!0)}}class Wf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ub extends Es{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);const Xf={type:"change"},Tu={type:"start"},lm={type:"end"},za=new xu,jf=new Bi,db=Math.cos(70*H0.DEG2RAD),Pe=new W,an=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cl=1e-6;class fb extends ub{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new qi,this._lastTargetPosition=new W,this._quat=new qi().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wf,this._sphericalDelta=new Wf,this._scale=1,this._panOffset=new W,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new W,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pb.bind(this),this._onPointerDown=hb.bind(this),this._onPointerUp=mb.bind(this),this._onContextMenu=Sb.bind(this),this._onMouseWheel=_b.bind(this),this._onKeyDown=xb.bind(this),this._onTouchStart=yb.bind(this),this._onTouchMove=Mb.bind(this),this._onMouseDown=gb.bind(this),this._onMouseMove=vb.bind(this),this._interceptControlDown=Eb.bind(this),this._interceptControlUp=bb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xf),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(za.origin.copy(this.object.position),za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(za.direction))<db?this.object.lookAt(this.target):(jf.setFromNormalAndCoplanarPoint(this.object.up,this.target),za.intersectPlane(jf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cl||this._lastTargetPosition.distanceToSquared(this.target)>Cl?(this.dispatchEvent(Xf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function pb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function mb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lm),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=fe.DOLLY;break;case tr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}break;case tr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Tu)}function vb(n){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _b(n){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(n.preventDefault(),this.dispatchEvent(Tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lm))}function xb(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function yb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=fe.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=fe.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Tu)}function Mb(n){switch(this._trackPointer(n),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=fe.NONE}}function Sb(n){this.enabled!==!1&&n.preventDefault()}function Eb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qf=[{id:"birthday-1",text:"生日快乐",category:"生日",color:"#FFF3CD",emoji:"🎂",tagColor:"#FFD166"},{id:"birthday-2",text:"周岁纪念",category:"生日",color:"#FFF8E1",emoji:"👶",tagColor:"#FFB347"},{id:"birthday-3",text:"生日贺卡",category:"生日",color:"#FFF3CD",emoji:"💌",tagColor:"#FFD166"},{id:"birthday-4",text:"寿星专属",category:"生日",color:"#FFF8E1",emoji:"🌟",tagColor:"#FFB347"},{id:"birthday-5",text:"生日祝福",category:"生日",color:"#FFF3CD",emoji:"🎉",tagColor:"#FFD166"},{id:"birthday-6",text:"生日搞怪",category:"生日",color:"#FFF8E1",emoji:"🤪",tagColor:"#FFB347"},{id:"birthday-7",text:"生日配图",category:"生日",color:"#FFF3CD",emoji:"📸",tagColor:"#FFD166"},{id:"birthday-8",text:"礼物文案",category:"生日",color:"#FFF8E1",emoji:"🎁",tagColor:"#FFB347"},{id:"birthday-9",text:"寿星头像",category:"生日",color:"#FFF3CD",emoji:"👑",tagColor:"#FFD166"},{id:"bless-1",text:"新婚祝福",category:"祝福",color:"#FFE4E1",emoji:"💒",tagColor:"#FF9AA2"},{id:"bless-2",text:"升学祝福",category:"祝福",color:"#FFD1DC",emoji:"🎓",tagColor:"#FF9AA2"},{id:"bless-3",text:"乔迁贺词",category:"祝福",color:"#FFE4E1",emoji:"🏠",tagColor:"#FF9AA2"},{id:"bless-4",text:"升职加薪",category:"祝福",color:"#FFD1DC",emoji:"💰",tagColor:"#FF9AA2"},{id:"bless-5",text:"平安喜乐",category:"祝福",color:"#FFE4E1",emoji:"🕊️",tagColor:"#FF9AA2"},{id:"bless-6",text:"岁岁安康",category:"祝福",color:"#FFD1DC",emoji:"🍀",tagColor:"#FF9AA2"},{id:"bless-7",text:"万事顺意",category:"祝福",color:"#FFE4E1",emoji:"✨",tagColor:"#FF9AA2"},{id:"bless-8",text:"开工大吉",category:"祝福",color:"#FFD1DC",emoji:"🧧",tagColor:"#FF9AA2"},{id:"bless-9",text:"节日祝福",category:"祝福",color:"#FFE4E1",emoji:"🎊",tagColor:"#FF9AA2"},{id:"bless-10",text:"长辈问候",category:"祝福",color:"#FFD1DC",emoji:"👴",tagColor:"#FF9AA2"},{id:"bless-11",text:"暖心寄语",category:"祝福",color:"#FFE4E1",emoji:"💕",tagColor:"#FF9AA2"},{id:"bless-12",text:"毕业祝福",category:"祝福",color:"#FFD1DC",emoji:"🎓",tagColor:"#FF9AA2"},{id:"fun-1",text:"沙雕文案",category:"搞怪",color:"#D4F1C5",emoji:"🤣",tagColor:"#7EC8A0"},{id:"fun-2",text:"表情包配文",category:"搞怪",color:"#C8E6C9",emoji:"😜",tagColor:"#7EC8A0"},{id:"fun-3",text:"摆烂语录",category:"搞怪",color:"#D4F1C5",emoji:"🛌",tagColor:"#7EC8A0"},{id:"fun-4",text:"发疯文学",category:"搞怪",color:"#C8E6C9",emoji:"🤯",tagColor:"#7EC8A0"},{id:"fun-5",text:"趣味整活",category:"搞怪",color:"#D4F1C5",emoji:"🎭",tagColor:"#7EC8A0"},{id:"fun-6",text:"自嘲段子",category:"搞怪",color:"#C8E6C9",emoji:"😅",tagColor:"#7EC8A0"},{id:"fun-7",text:"损友专属",category:"搞怪",color:"#D4F1C5",emoji:"👯",tagColor:"#7EC8A0"},{id:"fun-8",text:"脑洞短句",category:"搞怪",color:"#C8E6C9",emoji:"💡",tagColor:"#7EC8A0"},{id:"fun-9",text:"搞笑朋友圈",category:"搞怪",color:"#D4F1C5",emoji:"😂",tagColor:"#7EC8A0"},{id:"fest-1",text:"春节文案",category:"节日",color:"#D4E6F1",emoji:"🧨",tagColor:"#85C1E9"},{id:"fest-2",text:"中秋祝福",category:"节日",color:"#BBDEFB",emoji:"🌕",tagColor:"#85C1E9"},{id:"fest-3",text:"端午安康",category:"节日",color:"#D4E6F1",emoji:"🐲",tagColor:"#85C1E9"},{id:"fest-4",text:"七夕文案",category:"节日",color:"#BBDEFB",emoji:"🌌",tagColor:"#85C1E9"},{id:"fest-5",text:"圣诞快乐",category:"节日",color:"#D4E6F1",emoji:"🎄",tagColor:"#85C1E9"},{id:"fest-6",text:"元旦文案",category:"节日",color:"#BBDEFB",emoji:"🎆",tagColor:"#85C1E9"},{id:"fest-7",text:"五一文案",category:"节日",color:"#D4E6F1",emoji:"🛠️",tagColor:"#85C1E9"},{id:"fest-8",text:"六一文案",category:"节日",color:"#BBDEFB",emoji:"🧸",tagColor:"#85C1E9"},{id:"fest-9",text:"元宵文案",category:"节日",color:"#D4E6F1",emoji:"🏮",tagColor:"#85C1E9"},{id:"emo-1",text:"温柔治愈",category:"情感",color:"#E8DAEF",emoji:"🌸",tagColor:"#BB8FCE"},{id:"emo-2",text:"伤感短句",category:"情感",color:"#D7BDE2",emoji:"🌧️",tagColor:"#BB8FCE"},{id:"emo-3",text:"告白情话",category:"情感",color:"#E8DAEF",emoji:"💗",tagColor:"#BB8FCE"},{id:"emo-4",text:"暗恋文案",category:"情感",color:"#D7BDE2",emoji:"👀",tagColor:"#BB8FCE"},{id:"emo-5",text:"闺蜜文案",category:"情感",color:"#E8DAEF",emoji:"👭",tagColor:"#BB8FCE"},{id:"emo-6",text:"兄弟文案",category:"情感",color:"#D7BDE2",emoji:"👬",tagColor:"#BB8FCE"},{id:"emo-7",text:"亲子语录",category:"情感",color:"#E8DAEF",emoji:"👨‍👩‍👧",tagColor:"#BB8FCE"},{id:"util-1",text:"短视频配文",category:"素材",color:"#FFE5CC",emoji:"🎬",tagColor:"#F0A07C"},{id:"util-2",text:"朋友圈文案",category:"素材",color:"#FFDAB9",emoji:"📱",tagColor:"#F0A07C"},{id:"util-3",text:"海报短句",category:"素材",color:"#FFE5CC",emoji:"🖼️",tagColor:"#F0A07C"},{id:"util-4",text:"短视频标题",category:"素材",color:"#FFDAB9",emoji:"📹",tagColor:"#F0A07C"},{id:"util-5",text:"签名文案",category:"素材",color:"#FFE5CC",emoji:"✍️",tagColor:"#F0A07C"},{id:"util-6",text:"走心短句",category:"素材",color:"#FFDAB9",emoji:"💫",tagColor:"#F0A07C"},{id:"beautiful-1",text:"好看的",category:"好看的",color:"#FFDAB9",emoji:"✅",tagColor:"#F0A07C"}],Tb={class:"globe-wrapper"},Ab={class:"tooltip-emoji"},wb={class:"tooltip-text"},Cb={class:"tooltip-category"},Lr=4.5,Rb=.7,Pb=.9,Db=xe({__name:"StickerGlobe",emits:["zoom","sticker-click"],setup(n,{expose:t,emit:e}){const i=Pt(),s=Pt(!1),r=Pt(null),a=Pt({x:0,y:0}),o=e;let l,c,u,d,f=[],h,g,v,m=new kt,p=null,T=null,A=0,_=null,U="idle",P=0,y=null,I=null,M=null,S=null,D=null;function B(lt){const N=[],Y=Math.PI*(3-Math.sqrt(5));for(let F=0;F<lt;F++){const Q=1-F/(lt-1)*2,gt=Math.sqrt(1-Q*Q),C=Y*F;N.push(new W(Math.cos(C)*gt*Lr,Q*Lr,Math.sin(C)*gt*Lr))}return N}function k(lt){const N=document.createElement("canvas"),Y=128;N.width=Y,N.height=Y;const F=N.getContext("2d"),Q=12,gt=3,C=Y-gt*2,L=Y-gt*2,E=gt,G=gt;F.shadowColor="rgba(0,0,0,0.08)",F.shadowBlur=6,F.shadowOffsetX=1,F.shadowOffsetY=2,F.beginPath(),F.moveTo(E+Q,G),F.lineTo(E+C-Q,G),F.quadraticCurveTo(E+C,G,E+C,G+Q),F.lineTo(E+C,G+L-Q),F.quadraticCurveTo(E+C,G+L,E+C-Q,G+L),F.lineTo(E+Q,G+L),F.quadraticCurveTo(E,G+L,E,G+L-Q),F.lineTo(E,G+Q),F.quadraticCurveTo(E,G,E+Q,G),F.closePath(),F.fillStyle=lt.color,F.fill(),F.shadowColor="transparent",F.shadowBlur=0,F.shadowOffsetX=0,F.shadowOffsetY=0;const $=F.getImageData(0,0,Y,Y),X=$.data;for(let x=0;x<X.length;x+=4){const O=(Math.random()-.5)*12;X[x]=Math.min(255,Math.max(0,X[x]+O)),X[x+1]=Math.min(255,Math.max(0,X[x+1]+O)),X[x+2]=Math.min(255,Math.max(0,X[x+2]+O))}F.putImageData($,0,0);const it=11,ut=60,K=(Y-ut)/2;F.beginPath(),F.moveTo(K+4,5),F.lineTo(K+ut-4,5),F.quadraticCurveTo(K+ut,5,K+ut,9),F.lineTo(K+ut,5+it-4),F.quadraticCurveTo(K+ut,5+it,K+ut-4,5+it),F.lineTo(K+4,5+it),F.quadraticCurveTo(K,5+it,K,5+it-4),F.lineTo(K,9),F.quadraticCurveTo(K,5,K+4,5),F.closePath(),F.fillStyle=lt.tagColor,F.globalAlpha=.65,F.fill(),F.globalAlpha=1,F.font='18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif',F.textAlign="center",F.textBaseline="middle",F.fillText(lt.emoji,Y/2,40),F.font='bold 7.5px "PingFang SC", "Microsoft YaHei", sans-serif',F.fillStyle="black",F.textAlign="center",F.textBaseline="middle",F.fillText(lt.category,Y/2,59),F.font='bold 10px "PingFang SC", "Microsoft YaHei", sans-serif',F.fillStyle="black",F.textAlign="center",F.textBaseline="middle",F.fillText(lt.text,Y/2,76),F.beginPath(),F.moveTo(E+Q,G),F.lineTo(E+C-Q,G),F.quadraticCurveTo(E+C,G,E+C,G+Q),F.lineTo(E+C,G+L-Q),F.quadraticCurveTo(E+C,G+L,E+C-Q,G+L),F.lineTo(E+Q,G+L),F.quadraticCurveTo(E,G+L,E,G+L-Q),F.lineTo(E,G+Q),F.quadraticCurveTo(E,G,E+Q,G),F.closePath(),F.strokeStyle="rgba(180,160,140,0.35)",F.lineWidth=1.5,F.stroke();const b=new Of(N);return b.minFilter=Sn,b.magFilter=Sn,b.colorSpace=dn,b.generateMipmaps=!1,b}function nt(lt,N){const Y=k(lt),F=new Bf({map:Y,side:qn,roughness:.55,metalness:.02,transparent:!1,depthWrite:!0}),Q=new oa(Rb,Pb),gt=new En(Q,F);gt.position.copy(N);const C=N.clone().normalize(),L=new qi,E=new W(0,1,0),G=new Ee;if(Math.abs(C.dot(E))>.999){const $=new W(1,0,0);G.lookAt(N.clone().add(C),N,$)}else G.lookAt(N.clone().add(C),N,E);return L.setFromRotationMatrix(G),gt.quaternion.copy(L),gt.rotateZ((Math.random()-.5)*.3),gt.rotateY((Math.random()-.5)*.3),gt.position.add(C.clone().multiplyScalar(.12+Math.random()*.06)),gt.userData={stickerData:lt,originalPosition:gt.position.clone(),originalRotation:gt.rotation.clone(),normal:C},gt}function ct(){const lt=document.createElement("canvas");lt.width=64,lt.height=64;const N=lt.getContext("2d"),Y=N.createRadialGradient(32,32,0,32,32,32);Y.addColorStop(0,"rgba(255,255,255,0.15)"),Y.addColorStop(.4,"rgba(255,255,255,0.06)"),Y.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=Y,N.fillRect(0,0,64,64);const F=new Of(lt),Q=new am({map:F,blending:$l,depthWrite:!1,transparent:!0,opacity:.5}),gt=new ib(Q);return gt.scale.set(1.8,1.8,1),gt}function st(){if(!i.value)return;l=new eb,c=new xn(50,i.value.clientWidth/i.value.clientHeight,.1,100),c.position.set(0,.5,11),c.lookAt(0,0,0),u=new tb({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(i.value.clientWidth,i.value.clientHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),u.shadowMap.enabled=!1,u.toneMapping=Rp,u.toneMappingExposure=1,i.value.appendChild(u.domElement),d=new fb(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.08,d.autoRotate=!0,d.autoRotateSpeed=.4,d.minDistance=6,d.maxDistance=18,d.maxPolarAngle=Math.PI*.8,d.target.set(0,0,0),d.update(),v=new cb,v.params.Points.threshold=.5,v.params.Line.threshold=.5;const lt=new ob("#ffffff",3.5);l.add(lt);const N=new sb("#dcefff","#f0e6d3",1.8);l.add(N);const Y=new wl("#ffffff",2.5);Y.position.set(8,6,8),l.add(Y);const F=new wl("#c8d6ff",1.5);F.position.set(-5,-2,-3),l.add(F);const Q=new wl("#ffe8d6",1.2);Q.position.set(0,-4,2),l.add(Q);const gt=B(qf.length);qf.forEach(($,X)=>{const it=nt($,gt[X]),ut=ct();it.add(ut),l.add(it),f.push(it)});const C=new Eu(Lr+.05,.03,64,128),L=new Bf({color:"#c8e0f0",roughness:.3,metalness:.1,transparent:!0,opacity:.3,depthWrite:!1}),E=new En(C,L);E.rotation.x=Math.PI/2,l.add(E);const G=new En(C.clone(),L.clone());G.rotation.x=Math.PI/3,G.rotation.y=Math.PI/4,G.material=L.clone(),G.material.opacity=.15,l.add(G),g=new lb,u.domElement.addEventListener("mousemove",rt),u.domElement.addEventListener("click",St),u.domElement.addEventListener("touchmove",q,{passive:!1}),window.addEventListener("resize",pt),ot()}function rt(lt){if(!i.value||!u)return;const N=i.value.getBoundingClientRect();m.x=(lt.clientX-N.left)/N.width*2-1,m.y=-((lt.clientY-N.top)/N.height)*2+1,xt(lt.clientX,lt.clientY)}function q(lt){if(!(!i.value||!u)&&lt.touches.length===1){const N=lt.touches[0],Y=i.value.getBoundingClientRect();m.x=(N.clientX-Y.left)/Y.width*2-1,m.y=-((N.clientY-Y.top)/Y.height)*2+1,xt(N.clientX,N.clientY)}}function xt(lt,N){if(!c||!l)return;v.setFromCamera(m,c);const Y=v.intersectObjects(f,!1);if(p&&(!Y.length||Y[0].object!==p)){const F=p.userData;F.originalPosition&&(p.position.copy(F.originalPosition),p.scale.set(1,1,1),p.material.emissive.set("#000000")),p=null,T&&clearTimeout(T),T=setTimeout(()=>{s.value=!1},150)}if(Y.length>0){const F=Y[0].object;if(F!==p&&f.includes(F)){p=F;const Q=F.userData;Q.originalPosition&&Q.normal&&(F.position.copy(Q.originalPosition).add(Q.normal.clone().multiplyScalar(.25)),F.scale.set(1.25,1.25,1.25)),F.material.emissive.set("#ffffff"),F.material.emissiveIntensity=.3,T&&clearTimeout(T),r.value=Q.stickerData,a.value={x:lt,y:N},s.value=!0}}}function St(lt){if(!i.value||!u||!c||!l)return;const N=i.value.getBoundingClientRect(),Y=(lt.clientX-N.left)/N.width*2-1,F=-((lt.clientY-N.top)/N.height)*2+1;v.setFromCamera(new kt(Y,F),c);const Q=v.intersectObjects(f,!1);if(Q.length>0){const C=Q[0].object.userData;C.stickerData&&o("sticker-click",C.stickerData)}}function Dt(lt){if(!lt.trim())return;Nt();const N=lt.trim().toLowerCase();let Y=null;for(const G of f)if(G.userData.stickerData.text.toLowerCase().includes(N)){Y=G;break}if(!Y){console.log("未找到匹配的便签:",lt);return}const Q=Y.userData.normal,gt=Y.position.clone(),C=new W(0,0,1);C.applyQuaternion(Y.quaternion).normalize();const E=Q.clone().multiplyScalar(Lr).clone().add(C.clone().multiplyScalar(11));_=Y,U="rotating",P=performance.now(),y=c.position.clone(),I=E,M=gt.clone(),S=Q.clone(),D=Y.scale.clone(),d.autoRotate=!1}function Nt(){if(_){const lt=_.userData;_.scale.copy(D||new W(1,1,1)),lt.originalPosition&&_.position.copy(lt.originalPosition),_.material.emissive.set("#000000"),_.material.emissiveIntensity=0,_=null}U="idle",y=null,I=null,M=null,S=null,D=null}function Kt(lt){if(!_||U==="idle"||!y||!I||!S)return;const N=(lt-P)/1e3;if(U==="rotating"){let F=Math.min(N/1.2,1);F=F<.5?4*F*F*F:1-Math.pow(-2*F+2,3)/2,c.position.lerpVectors(y,I,F),c.lookAt(0,0,0),d.target.set(0,0,0),d.update();const Q=_.material;Q.emissive.set("#ffffff"),Q.emissiveIntensity=.15+F*.3,F>=1&&(U="zooming",P=lt,D=_.scale.clone(),M&&S&&_.position.copy(M.clone().add(S.clone().multiplyScalar(.15))))}else if(U==="zooming"){let F=Math.min(N/.8,1);const Q=1.70158;F=1+(Q+1)*Math.pow(F-1,3)+Q*Math.pow(F-1,2);const C=(D==null?void 0:D.x)||1,E=C+(1.6-C)*F;_.scale.set(E,E,E);const G=_.material;G.emissiveIntensity=.45,F>=1&&(U="holding",P=lt)}else if(U==="holding")N>2&&(U="reversing",P=lt,D=_.scale.clone());else if(U==="reversing"){let F=Math.min(N/.6,1);F=F*F*F;const Q=(D==null?void 0:D.x)||1.6,C=Q+(1-Q)*F;_.scale.set(C,C,C);const L=_.material;L.emissiveIntensity=.45*(1-F),M&&_.position.lerpVectors(_.position.clone(),M,F*3),F>=1&&(M&&_.position.copy(M),_.scale.set(1,1,1),L.emissive.set("#000000"),L.emissiveIntensity=0,d.autoRotate=!0,_=null,U="idle",y=null,I=null,M=null,S=null,D=null)}}t({searchSticker:Dt});function ot(){h=requestAnimationFrame(ot),g.getDelta(),d.update(),Kt(performance.now());const lt=performance.now();lt-A>200&&(A=lt,o("zoom",c.position.distanceTo(d.target))),u.render(l,c)}function pt(){if(!i.value||!c||!u)return;const lt=i.value.clientWidth,N=i.value.clientHeight;c.aspect=lt/N,c.updateProjectionMatrix(),u.setSize(lt,N)}return An(()=>{_s(()=>{st()})}),Oh(()=>{h&&(cancelAnimationFrame(h),h=0)}),tu(()=>{h||ot()}),Ss(()=>{h&&cancelAnimationFrame(h),u&&(u.domElement.removeEventListener("mousemove",rt),u.domElement.removeEventListener("click",St),u.domElement.removeEventListener("touchmove",q),u.dispose()),window.removeEventListener("resize",pt),T&&clearTimeout(T)}),(lt,N)=>(mt(),At("div",Tb,[w("div",{ref_key:"containerRef",ref:i,class:"globe-container"},null,512),pe(xs,{name:"tooltip-fade"},{default:Mn(()=>[s.value&&r.value?(mt(),At("div",{key:0,class:"sticker-tooltip",style:he({left:a.value.x+"px",top:a.value.y+"px"})},[w("span",Ab,Se(r.value.emoji),1),w("span",wb,Se(r.value.text),1),w("span",Cb,Se(r.value.category)+"系列",1)],4)):Zt("",!0)]),_:1})]))}}),Lb=be(Db,[["__scopeId","data-v-06673026"]]),Ib={id:"poda"},Ub={id:"main"},Fb=xe({__name:"SearchBar",emits:["search"],setup(n,{emit:t}){const e=Pt(""),i=t;function s(){i("search",e.value)}return(r,a)=>(mt(),At("div",Ib,[a[2]||(a[2]=Ie('<div class="glow" data-v-1da1dff6></div><div class="darkBorderBg" data-v-1da1dff6></div><div class="darkBorderBg" data-v-1da1dff6></div><div class="darkBorderBg" data-v-1da1dff6></div><div class="white" data-v-1da1dff6></div><div class="border" data-v-1da1dff6></div>',6)),w("div",Ub,[Jc(w("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),placeholder:"搜索便利贴...",type:"text",name:"text",class:"input",onInput:s},null,544),[[hp,e.value]]),a[1]||(a[1]=Ie('<div id="input-mask" data-v-1da1dff6></div><div id="pink-mask" data-v-1da1dff6></div><div class="filterBorder" data-v-1da1dff6></div><div id="filter-icon" data-v-1da1dff6><svg preserveAspectRatio="none" height="27" width="27" viewBox="4.8 4.56 14.832 15.408" fill="none" data-v-1da1dff6><path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="#d6d6e6" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-v-1da1dff6></path></svg></div><div id="search-icon" data-v-1da1dff6><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" height="24" fill="none" class="feather feather-search" data-v-1da1dff6><circle stroke="url(#search)" r="8" cy="11" cx="11" data-v-1da1dff6></circle><line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22" data-v-1da1dff6></line><defs data-v-1da1dff6><linearGradient gradientTransform="rotate(50)" id="search" data-v-1da1dff6><stop stop-color="#f8e7f8" offset="0%" data-v-1da1dff6></stop><stop stop-color="#b6a9b7" offset="50%" data-v-1da1dff6></stop></linearGradient><linearGradient id="searchl" data-v-1da1dff6><stop stop-color="#b6a9b7" offset="0%" data-v-1da1dff6></stop><stop stop-color="#837484" offset="50%" data-v-1da1dff6></stop></linearGradient></defs></svg></div>',5))])]))}}),Nb=be(Fb,[["__scopeId","data-v-1da1dff6"]]),Ob={class:"home-page"},Bb={class:"expand-emoji"},kb={class:"expand-text"},zb=xe({__name:"HomeView",setup(n){const t=Qn(),e=Pt(0),i=Pt(null),s=Pt(!1),r=Pt(null),a=Pt({x:0,y:0});function o(u){e.value=u<11?1:0}function l(u){var d;(d=i.value)==null||d.searchSticker(u)}function c(u){r.value=u,a.value={x:window.innerWidth/2,y:window.innerHeight/2},requestAnimationFrame(()=>{s.value=!0}),setTimeout(()=>{const d=encodeURIComponent(JSON.stringify(u));t.push({path:"/sticker",query:{data:d}})},700)}return tu(()=>{s.value=!1,r.value=null}),(u,d)=>(mt(),At("div",Ob,[pe(Q_),w("div",{class:"search-wrapper",style:he({left:e.value===0?"50%":"",right:e.value>0?"40px":"",transform:e.value===0?"translateX(-50%)":"none"})},[pe(Nb,{onSearch:l})],4),pe(Lb,{ref_key:"globeRef",ref:i,onZoom:o,onStickerClick:c},null,512),r.value?(mt(),At("div",{key:0,class:ke(["expand-overlay",{active:s.value}])},[w("div",{class:"expand-card",style:he({background:r.value.color,left:a.value.x+"px",top:a.value.y+"px"})},[w("div",{class:"expand-tape",style:he({background:r.value.tagColor})},null,4),w("div",Bb,Se(r.value.emoji),1),w("div",{class:"expand-category",style:he({color:r.value.tagColor})},Se(r.value.category)+"系列 ",5),w("div",kb,Se(r.value.text),1)],4)],2)):Zt("",!0)]))}}),Hb=be(zb,[["__scopeId","data-v-3e1aea4c"]]),Vb={key:0,class:"detail-page"},Gb={class:"sticker-emoji"},Wb={class:"heading"},Xb={class:"icons"},jb=xe({__name:"StickerDetail",setup(n){const t=K_(),e=Qn(),i=Pt(null),s=Pt(!1),r=Pt(!1),a=Pt(!1),o=Pt(!1),l=Pt(!1),c=Pt(!1),u=Pt(!1),d=Pt(!1),f=Pt(!1);An(()=>{var p;const v=t.query.data;if(v)try{i.value=JSON.parse(decodeURIComponent(v))}catch{e.replace("/");return}else{e.replace("/");return}const m=((p=i.value)==null?void 0:p.id)||"";m==="emo-3"&&(r.value=!0),m==="birthday-3"&&(o.value=!0),m==="birthday-6"&&(l.value=!0),(m==="birthday-2"||m==="birthday-8")&&(c.value=!0),m.startsWith("birthday-")&&m!=="birthday-3"&&m!=="birthday-6"&&m!=="birthday-2"&&m!=="birthday-8"&&(a.value=!0),m==="bless-9"&&(u.value=!0),m==="fun-3"&&(d.value=!0),m.startsWith("beautiful-")&&(f.value=!0),requestAnimationFrame(()=>{s.value=!0})});function h(){s.value=!1,setTimeout(()=>{e.replace("/")},300)}function g(){r.value?e.push("/confession"):o.value?e.push("/birthday-card"):l.value?e.push("/birthday-prank"):c.value?e.push("/gift-box"):u.value?e.push("/firework"):d.value?e.push("/lazy-down"):a.value?e.push("/birthday-cake"):f.value&&e.push("/beautiful")}return(v,m)=>i.value?(mt(),At("div",Vb,[m[2]||(m[2]=w("div",{class:"stars-container"},[w("div",{id:"stars"}),w("div",{id:"stars2"}),w("div",{id:"stars3"})],-1)),w("button",{class:ke(["back-btn",{visible:s.value}]),onClick:h},[...m[0]||(m[0]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回",-1)])],2),w("div",{class:ke(["card",{active:s.value}])},[w("div",Gb,Se(i.value.emoji),1),w("div",Wb,Se(i.value.text),1),w("div",{class:"category-tag",style:he({borderColor:i.value.tagColor,color:i.value.tagColor})},Se(i.value.category)+"系列 ",5),w("div",Xb,[w("button",{class:ke(["play-btn",{"confession-btn":r.value,"birthday-btn":a.value||o.value||l.value||c.value,"beautiful-btn":f.value,"firework-btn":u.value,"lazy-btn":d.value}]),onClick:g},[...m[1]||(m[1]=[Ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36px" height="36px" data-v-402e339a><rect width="36" height="36" x="0" y="0" fill="#fdd835" data-v-402e339a></rect><path fill="#e53935" d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z" data-v-402e339a></path><path fill="#b71c1c" d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z" data-v-402e339a></path><path fill="#212121" d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z" data-v-402e339a></path><path fill="#01579b" d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z" data-v-402e339a></path><path fill="#212121" d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z" data-v-402e339a></path><path fill="#81d4fa" d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z" data-v-402e339a></path><path fill="#212121" d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z" data-v-402e339a></path><path fill="#e1f5fe" d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z" data-v-402e339a></path></svg><span class="now" data-v-402e339a>click!</span><span class="play" data-v-402e339a>me</span>',3)])],2)])],2)])):Zt("",!0)}}),qb=be(jb,[["__scopeId","data-v-402e339a"]]),Yb={class:"confession-page"},$b={class:"floating-particles"},Kb={key:0,class:"modal-overlay"},Zb={class:"confession-modal"},Jb={key:0,class:"modal-subtitle"},Qb={class:"modal-actions"},t1={key:0,class:"celebrate-stage"},e1=["onClick"],n1={class:"card-emoji"},i1={class:"card-text"},s1=xe({__name:"ConfessionView",setup(n){const t=Qn(),e=Pt("initial"),i=Pt({position:"static"}),s=Pt(""),r=["真的吗？再想想~","你确定？💔","不要这样嘛...","给你一次反悔的机会！","我的心要碎了 🥺","再给你一次机会哦~","你忍心吗？😢","快说你喜欢我！"],a=Pt([]);let o=null,l=0;const c=[{emoji:"💕",text:"遇见你，是我最美丽的意外"},{emoji:"🌹",text:"你是我余生所有的欢喜"},{emoji:"✨",text:"星光不问赶路人，时光不负有心人"},{emoji:"💖",text:"世界很大，我的心却很小，只装得下你"},{emoji:"🎀",text:"愿你的每一天都如糖果般甜蜜"},{emoji:"🌸",text:"春风十里，不如你"},{emoji:"🌙",text:"今晚月色真美，你也一样"},{emoji:"🍀",text:"幸运是遇见你，幸福是拥有你"},{emoji:"💍",text:"执子之手，与子偕老"},{emoji:"🏠",text:"一屋两人，三餐四季"},{emoji:"🎵",text:"你是我的单曲循环"},{emoji:"🌈",text:"风雨同舟，余生共度"},{emoji:"🔥",text:"愿你三冬暖，愿你春不寒"},{emoji:"⭐",text:"愿你天黑有灯，下雨有伞"},{emoji:"🎂",text:"愿你此生尽兴，赤诚善良"},{emoji:"💫",text:"愿你所求皆如愿，所行化坦途"},{emoji:"🐱",text:"做我的猫，我养你呀"},{emoji:"🍭",text:"你是我的半截的诗，不许别人更改一个字"},{emoji:"🎈",text:"偷偷告诉你，我喜欢你很久了"},{emoji:"💌",text:"这是第520封情书，请查收"},{emoji:"☀️",text:"早安晚安，都不如有你心安"},{emoji:"📖",text:"你是我翻山越岭也要见到的人"},{emoji:"🎬",text:"我们的故事，未完待续"},{emoji:"💓",text:"每次见到你，心跳都会漏一拍"},{emoji:"🌅",text:"想和你看每一天的日出日落"},{emoji:"🌊",text:"对你的喜欢，像海一样深"},{emoji:"🧸",text:"你愿意做我的小熊软糖吗"},{emoji:"🦋",text:"你一笑，我整颗心都化了"},{emoji:"💎",text:"你是我平淡生活里的璀璨星辰"},{emoji:"🗝️",text:"你打开了我的心门，就别想走了"},{emoji:"🌌",text:"银河滚烫，你是人间理想"},{emoji:"🚀",text:"想和你一起去探索整个世界"},{emoji:"📸",text:"往后余生，所有的风景都想和你分享"}],u=["#FF9AA2","#FFB7B2","#FFDAC1","#E2F0CB","#B5EAD7","#C7CEEA","#F0B5D2","#D4A5D4"];function d(){return u[Math.floor(Math.random()*u.length)]}function f(){e.value="celebrating",p(),T()}function h(){if(e.value!=="initial"&&e.value!=="rejecting")return;e.value="rejecting";const U=window.innerWidth,P=window.innerHeight,y=200,I=52,M=U-y-40,S=P-I-40,D=20+Math.random()*M,B=20+Math.random()*S;i.value={position:"fixed",left:D+"px",top:B+"px",transform:"none"},s.value=r[Math.floor(Math.random()*r.length)]}function g(U){U.preventDefault(),history.pushState(null,"",window.location.href)}function v(U){return U.preventDefault(),U.returnValue="",""}function m(){history.pushState(null,"",window.location.href),window.addEventListener("popstate",g),window.addEventListener("beforeunload",v)}function p(){window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",v)}function T(){let U=0;const P=2;function y(){if(U>=c.length){o&&clearInterval(o),o=null;return}const I=Math.min(U+P,c.length);for(let M=U;M<I;M++){const S=c[M],D={id:l++,emoji:S.emoji,text:S.text,x:20+Math.random()*60,y:15+Math.random()*70,rotate:(Math.random()-.5)*30,color:d(),delay:Math.random()*.3};a.value.push(D)}U=I}y(),o=setInterval(y,500)}function A(U){a.value=a.value.filter(P=>P.id!==U)}function _(){p(),o&&clearInterval(o),t.replace("/")}return An(()=>{m()}),Ss(()=>{p(),o&&clearInterval(o)}),(U,P)=>(mt(),At("div",Yb,[P[5]||(P[5]=w("div",{class:"stars-bg"},[w("div",{class:"stars-layer stars-1"}),w("div",{class:"stars-layer stars-2"}),w("div",{class:"stars-layer stars-3"})],-1)),w("div",$b,[(mt(),At(ce,null,Be(20,y=>w("span",{key:y,class:"particle",style:he({left:Math.random()*100+"%",animationDelay:Math.random()*8+"s",animationDuration:6+Math.random()*8+"s",fontSize:10+Math.random()*20+"px",opacity:.15+Math.random()*.3})},"❤️",4)),64))]),pe(xs,{name:"modal-fade"},{default:Mn(()=>[e.value==="initial"||e.value==="rejecting"?(mt(),At("div",Kb,[w("div",Zb,[P[2]||(P[2]=w("div",{class:"modal-emoji"},"💗",-1)),P[3]||(P[3]=w("h2",{class:"modal-title"},"我喜欢你",-1)),e.value==="rejecting"&&s.value?(mt(),At("p",Jb,Se(s.value),1)):Zt("",!0),w("div",Qb,[w("button",{class:"btn-accept",onClick:f},[...P[0]||(P[0]=[w("span",null,"💕",-1),Hi(" 我也喜欢你 ",-1)])]),w("button",{class:"btn-reject",style:he(i.value),onClick:Ve(h,["prevent"]),onMouseenter:h,onTouchstart:Ve(h,["prevent"])},[...P[1]||(P[1]=[w("span",null,"😢",-1),Hi(" 我不喜欢你 ",-1)])],36)])])])):Zt("",!0)]),_:1}),e.value==="celebrating"?(mt(),At("div",t1,[pe(Wl,{name:"confetti-pop"},{default:Mn(()=>[(mt(!0),At(ce,null,Be(a.value,y=>(mt(),At("div",{key:y.id,class:"confetti-card",style:he({left:y.x+"%",top:y.y+"%",transform:`translate(-50%, -50%) rotate(${y.rotate}deg)`,"--card-color":y.color,animationDelay:y.delay+"s"}),onClick:I=>A(y.id)},[w("span",n1,Se(y.emoji),1),w("p",i1,Se(y.text),1)],12,e1))),128))]),_:1}),w("button",{class:"home-btn",onClick:_},[...P[4]||(P[4]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回首页",-1)])])])):Zt("",!0)]))}}),r1=be(s1,[["__scopeId","data-v-cbc4b45b"]]),a1={class:"birthday-page"},o1={class:"content"},l1={class:"cake"},c1={class:"cake-layer top-layer"},u1=xe({__name:"BirthdayCakeView",setup(n){const t=Qn(),e=Pt("idle"),i=Pt(!0),s=Pt(!1),r=Pt(1),a=Pt([]),o=Pt([]),l=Pt("对着麦克风吹气，或点击蜡烛吹灭它 🎂"),c=Pt(0),u=Pt(0);let d=null,f=null,h=null,g=0,v=null;const m=["#FF6B6B","#FFD93D","#6BCB77","#4D96FF","#FF8E53","#C06FF5","#FF5E9C","#00E5FF"];async function p(){try{d=new AudioContext,h=await navigator.mediaDevices.getUserMedia({audio:!0});const y=d.createMediaStreamSource(h);f=d.createAnalyser(),f.fftSize=256,y.connect(f),T()}catch{l.value="点击蜡烛吹灭它吧 🎂"}}function T(){if(!f)return;const y=new Uint8Array(f.frequencyBinCount);function I(){if(e.value!=="idle"){g=requestAnimationFrame(I);return}f.getByteFrequencyData(y);let M=0;for(let D=0;D<64;D++)M+=y[D];const S=M/64;if(c.value=S,S>40){if(u.value++,s.value=!0,r.value=Math.max(.2,1-S/150),S>70||u.value>30){A();return}}else s.value=!1,r.value=1,u.value>0&&(u.value=Math.max(0,u.value-.5));g=requestAnimationFrame(I)}g=requestAnimationFrame(I)}function A(){e.value==="idle"&&(e.value="blowing",i.value=!1,c.value=0,l.value="🎉 蜡烛熄灭啦！",setTimeout(()=>{e.value="fireworks",_()},800))}function _(){const I=[];for(let D=0;D<60;D++)I.push({id:D,x:10+Math.random()*80,y:5+Math.random()*80,color:m[Math.floor(Math.random()*m.length)],size:3+Math.random()*6,delay:Math.random()*2,duration:.8+Math.random()*1.5});a.value=I;const M=30,S=[];for(let D=0;D<M;D++)S.push({id:D+1e3,x:Math.random()*100,y:Math.random()*100,color:m[Math.floor(Math.random()*m.length)],size:2+Math.random()*4,delay:Math.random()*3});o.value=S,l.value="🎂 生日快乐！愿你岁岁平安，万事顺意！🎉",v=setInterval(()=>{const D=[],B=40+Math.floor(Math.random()*30),k=Date.now();for(let nt=0;nt<B;nt++)D.push({id:k+nt,x:10+Math.random()*80,y:5+Math.random()*80,color:m[Math.floor(Math.random()*m.length)],size:3+Math.random()*6,delay:Math.random()*1.5,duration:.8+Math.random()*1.5});a.value=[...a.value.slice(-120),...D]},1500),setTimeout(()=>{e.value="done",l.value="点击下方按钮重新点燃蜡烛 🔥"},5e3)}function U(){v&&(clearInterval(v),v=null),e.value="idle",i.value=!0,s.value=!1,r.value=1,u.value=0,c.value=0,a.value=[],o.value=[],l.value="对着麦克风吹气，或点击蜡烛吹灭它 🎂"}function P(){v&&clearInterval(v),t.replace("/")}return An(()=>{_s(()=>{p()})}),Ss(()=>{g&&cancelAnimationFrame(g),v&&clearInterval(v),h&&h.getTracks().forEach(y=>y.stop()),d&&d.close()}),(y,I)=>(mt(),At("div",a1,[I[7]||(I[7]=w("div",{class:"bg-gradient"},null,-1)),(mt(!0),At(ce,null,Be(o.value,M=>(mt(),At("div",{key:M.id,class:"sparkle-star",style:he({left:M.x+"%",top:M.y+"%",width:M.size+"px",height:M.size+"px",backgroundColor:M.color,animationDelay:M.delay+"s"})},null,4))),128)),(mt(!0),At(ce,null,Be(a.value,M=>(mt(),At("div",{key:M.id,class:"firework-particle",style:he({left:M.x+"%",top:M.y+"%",width:M.size+"px",height:M.size+"px",backgroundColor:M.color,animationDelay:M.delay+"s",animationDuration:M.duration+"s"})},null,4))),128)),w("button",{class:"back-btn",onClick:P},[...I[0]||(I[0]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回",-1)])]),w("div",o1,[w("div",{class:"cake-container",onClick:A},[w("div",l1,[w("div",c1,[(mt(),At(ce,null,Be(8,M=>w("div",{class:"icing-drip",key:M,style:he({left:M*12.5-6+"%"})},null,4)),64))]),I[1]||(I[1]=w("div",{class:"cake-layer middle-layer"},null,-1)),I[2]||(I[2]=w("div",{class:"cake-layer bottom-layer"},null,-1)),I[3]||(I[3]=w("div",{class:"cake-plate"},null,-1))]),w("div",{class:ke(["candle",{"candle-out":!i.value}])},[I[5]||(I[5]=w("div",{class:"candle-body"},null,-1)),I[6]||(I[6]=w("div",{class:"candle-wick"},null,-1)),w("div",{class:ke(["flame",{flicker:s.value,out:!i.value}]),style:he({transform:`scaleY(${r.value})`})},[...I[4]||(I[4]=[w("div",{class:"flame-inner"},null,-1),w("div",{class:"flame-outer"},null,-1)])],6)],2)]),w("p",{class:ke(["tip",{celebrating:e.value==="fireworks"||e.value==="done"}])},Se(l.value),3),e.value==="done"?(mt(),At("button",{key:0,class:"relight-btn",onClick:U}," 🔥 再来一次 ")):Zt("",!0)])]))}}),d1=be(u1,[["__scopeId","data-v-a74df6b9"]]),f1={class:"card-page"},h1={class:"hint-text"},p1={class:"card-face card-back"},m1={class:"back-content"},g1=xe({__name:"BirthdayCardView",setup(n){const t=Qn(),e=Pt(!1),i=Pt(!1),s=Pt(!1),r=Pt(!1),a=["愿你的每一天都如阳光般灿烂","愿所有美好如期而至","愿你被世界温柔以待","愿你眼里有星辰，心中有山海","愿你所求皆如愿，所行皆坦途","愿你笑靥如花，一生不减芳华","愿你历尽千帆，归来仍是少年","愿你前程似锦，未来可期","愿岁岁常欢愉，年年皆胜意","愿时光能缓，故人不散"],o=Pt(""),l=Pt([]),c=["#FFD700","#FF6B6B","#FF8E53","#FFD93D","#6BCB77","#FF5E9C","#FFB347"];function u(){i.value||(i.value=!0,e.value=!e.value,e.value?setTimeout(()=>{r.value=!0,o.value=a[Math.floor(Math.random()*a.length)],d(),s.value=!0,i.value=!1},600):(s.value=!1,r.value=!1,setTimeout(()=>{i.value=!1},600)))}function d(){const h=[];for(let g=0;g<25;g++)h.push({id:g,x:15+Math.random()*70,y:10+Math.random()*80,color:c[Math.floor(Math.random()*c.length)],size:3+Math.random()*6,delay:Math.random()*1.5});l.value=h}function f(){t.replace("/")}return An(()=>{setTimeout(()=>{},300)}),(h,g)=>(mt(),At("div",f1,[g[10]||(g[10]=Ie('<div class="bg-layer" data-v-aa4aefdf><div class="bg-gradient" data-v-aa4aefdf></div><div class="floating-decor decor-1" data-v-aa4aefdf>🎈</div><div class="floating-decor decor-2" data-v-aa4aefdf>🎀</div><div class="floating-decor decor-3" data-v-aa4aefdf>⭐</div><div class="floating-decor decor-4" data-v-aa4aefdf>🎁</div><div class="floating-decor decor-5" data-v-aa4aefdf>🌟</div><div class="floating-decor decor-6" data-v-aa4aefdf>💝</div></div>',1)),w("button",{class:"back-btn",onClick:f},[...g[0]||(g[0]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回",-1)])]),w("p",h1,Se(e.value?"点击贺卡合上 📬":"点击贺卡翻开 💌"),1),w("div",{class:"card-wrapper",onClick:u},[w("div",{class:ke(["card-3d",{flipped:e.value}])},[g[9]||(g[9]=Ie('<div class="card-face card-front" data-v-aa4aefdf><div class="front-pattern" data-v-aa4aefdf></div><div class="front-content" data-v-aa4aefdf><div class="front-emoji" data-v-aa4aefdf>💌</div><h2 class="front-title" data-v-aa4aefdf>生日贺卡</h2><div class="front-subtitle" data-v-aa4aefdf>Happy Birthday</div><div class="front-ribbon" data-v-aa4aefdf><div class="ribbon-left" data-v-aa4aefdf></div><div class="ribbon-center" data-v-aa4aefdf>🎂</div><div class="ribbon-right" data-v-aa4aefdf></div></div><p class="front-tip" data-v-aa4aefdf>点击翻开 →</p></div></div>',1)),w("div",p1,[w("div",m1,[g[1]||(g[1]=Ie('<div class="back-header" data-v-aa4aefdf><span class="back-emoji" data-v-aa4aefdf>🎉</span><span class="back-title" data-v-aa4aefdf>生日快乐</span><span class="back-emoji" data-v-aa4aefdf>🎉</span></div><div class="back-divider" data-v-aa4aefdf></div>',2)),w("div",{class:ke(["back-blessing",{show:r.value}])},Se(o.value),3),g[2]||(g[2]=w("div",{class:"back-divider"},null,-1)),g[3]||(g[3]=w("p",{class:"back-footer"},[Hi(" 愿你每一天"),w("br"),Hi("都充满欢笑与幸福 ")],-1)),g[4]||(g[4]=w("div",{class:"back-signature"},"💗 来自你的好友",-1))]),g[5]||(g[5]=w("div",{class:"back-corner-tl"},null,-1)),g[6]||(g[6]=w("div",{class:"back-corner-tr"},null,-1)),g[7]||(g[7]=w("div",{class:"back-corner-bl"},null,-1)),g[8]||(g[8]=w("div",{class:"back-corner-br"},null,-1))])],2)]),(mt(!0),At(ce,null,Be(l.value,v=>Jc((mt(),At("div",{key:v.id,class:"sparkle-dot",style:he({left:v.x+"%",top:v.y+"%",width:v.size+"px",height:v.size+"px",backgroundColor:v.color,animationDelay:v.delay+"s"})},null,4)),[[fv,s.value]])),128))]))}}),v1=be(g1,[["__scopeId","data-v-aa4aefdf"]]),_1={class:"truck-card"},x1={class:"truck"},y1={class:"truck__wheel truck__wheel--front"},M1={class:"truck-wheel"},S1={class:"truck-wheel__rim"},E1={class:"truck__wheel truck__wheel--rear"},b1={class:"truck-wheel"},T1={class:"truck-wheel__rim"},A1=xe({__name:"TruckPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n,{emit:t}){const e=t;return(i,s)=>(mt(),Oe(yo,{to:"body"},[n.visible?(mt(),At("div",{key:0,class:"truck-overlay",onClick:s[1]||(s[1]=Ve(r=>e("close"),["self"]))},[w("div",_1,[w("div",x1,[s[10]||(s[10]=w("div",{class:"truck__body"},[w("div",{class:"truck__body truck__body--top"},[w("div",{class:"truck__window"},[w("div",{class:"truck__window-glass"})])]),w("div",{class:"truck__body truck__body--mid"},[w("div",{class:"truck__mid-body"})]),w("div",{class:"truck__body truck__body--bottom"},[w("div",{class:"truck__underpanel"}),w("div",{class:"truck__rear-bumper"}),w("div",{class:"truck__side-skirt"})])],-1)),w("div",y1,[s[2]||(s[2]=w("div",{class:"truck__wheel-arch"},null,-1)),s[3]||(s[3]=w("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--top"},null,-1)),s[4]||(s[4]=w("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--left"},null,-1)),s[5]||(s[5]=w("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--right"},null,-1)),w("div",M1,[w("div",S1,[(mt(),At(ce,null,Be(7,r=>w("div",{key:r,style:he({"--index":r-1}),class:"truck-wheel__spoke"},null,4)),64))])])]),w("div",E1,[s[6]||(s[6]=w("div",{class:"truck__wheel-arch"},null,-1)),s[7]||(s[7]=w("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--top"},null,-1)),s[8]||(s[8]=w("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--left"},null,-1)),s[9]||(s[9]=w("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--right"},null,-1)),w("div",b1,[w("div",T1,[(mt(),At(ce,null,Be(7,r=>w("div",{key:r,style:he({"--index":r-1}),class:"truck-wheel__spoke"},null,4)),64))])])]),s[11]||(s[11]=w("div",{class:"truck__headlight"},null,-1)),s[12]||(s[12]=w("div",{class:"truck__taillight"},null,-1)),s[13]||(s[13]=w("div",{class:"truck__indicator"},null,-1)),s[14]||(s[14]=w("div",{class:"truck__foglight"},null,-1))]),w("button",{class:"truck-close-btn",onClick:s[0]||(s[0]=r=>e("close"))},"关闭")])])):Zt("",!0)]))}}),w1=be(A1,[["__scopeId","data-v-9f046297"]]),C1={class:"keyboard-card"},R1=xe({__name:"KeyboardPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n,{emit:t}){const e=t;return(i,s)=>(mt(),Oe(yo,{to:"body"},[n.visible?(mt(),At("div",{key:0,class:"keyboard-overlay",onClick:s[1]||(s[1]=Ve(r=>e("close"),["self"]))},[w("div",C1,[s[2]||(s[2]=w("div",{class:"keyboard"},[w("div",{class:"row"},[w("div",{class:"key function-key"},"esc"),w("div",{class:"key function-key"},"F1"),w("div",{class:"key function-key"},"F2"),w("div",{class:"key function-key"},"F3"),w("div",{class:"key function-key"},"F4"),w("div",{class:"key function-key"},"F5"),w("div",{class:"key function-key"},"F6"),w("div",{class:"key function-key"},"F7"),w("div",{class:"key function-key"},"F8"),w("div",{class:"key function-key"},"F9"),w("div",{class:"key function-key"},"F10"),w("div",{class:"key function-key"},"F11"),w("div",{class:"key function-key"},"F12"),w("div",{class:"key eject-key"},"⏏")]),w("div",{class:"row"},[w("div",{class:"key"},"`"),w("div",{class:"key"},"1"),w("div",{class:"key"},"2"),w("div",{class:"key"},"3"),w("div",{class:"key"},"4"),w("div",{class:"key"},"5"),w("div",{class:"key"},"6"),w("div",{class:"key"},"7"),w("div",{class:"key"},"8"),w("div",{class:"key"},"9"),w("div",{class:"key"},"0"),w("div",{class:"key"},"-"),w("div",{class:"key"},"="),w("div",{class:"key delete-key"},"delete")]),w("div",{class:"row"},[w("div",{class:"key tab-key"},"tab"),w("div",{class:"key"},"Q"),w("div",{class:"key"},"W"),w("div",{class:"key"},"E"),w("div",{class:"key"},"R"),w("div",{class:"key"},"T"),w("div",{class:"key"},"Y"),w("div",{class:"key"},"U"),w("div",{class:"key"},"I"),w("div",{class:"key"},"O"),w("div",{class:"key"},"P"),w("div",{class:"key"},"["),w("div",{class:"key"},"]"),w("div",{class:"key backslash-key"},"\\")]),w("div",{class:"row"},[w("div",{class:"key caps-lock-key"},"caps lock"),w("div",{class:"key"},"A"),w("div",{class:"key"},"S"),w("div",{class:"key"},"D"),w("div",{class:"key"},"F"),w("div",{class:"key"},"G"),w("div",{class:"key"},"H"),w("div",{class:"key"},"J"),w("div",{class:"key"},"K"),w("div",{class:"key"},"L"),w("div",{class:"key"},";"),w("div",{class:"key"},"'"),w("div",{class:"key return-key"},"return")]),w("div",{class:"row"},[w("div",{class:"key shift-key"},"shift"),w("div",{class:"key"},"Z"),w("div",{class:"key"},"X"),w("div",{class:"key"},"C"),w("div",{class:"key"},"V"),w("div",{class:"key"},"B"),w("div",{class:"key"},"N"),w("div",{class:"key"},"M"),w("div",{class:"key"},","),w("div",{class:"key"},"."),w("div",{class:"key"},"/"),w("div",{class:"key shift-key"},"shift")]),w("div",{class:"row"},[w("div",{class:"key"},"fn"),w("div",{class:"key ctrl-key"},"ctrl"),w("div",{class:"key alt-key"},"⌥"),w("div",{class:"key command-key"},"⌘"),w("div",{class:"key space-key"}),w("div",{class:"key command-key"},"⌘"),w("div",{class:"key alt-key"},"⌥"),w("div",{class:"key arrow-key"},"◀"),w("div",{class:"key arrow-key"},"▼"),w("div",{class:"key arrow-key"},"▲"),w("div",{class:"key arrow-key"},"▶")])],-1)),w("button",{class:"keyboard-close-btn",onClick:s[0]||(s[0]=r=>e("close"))},"关闭")])])):Zt("",!0)]))}}),P1=be(R1,[["__scopeId","data-v-a6216935"]]),D1={class:"cube-popup-card"},L1=xe({__name:"CubePopup",props:{visible:{type:Boolean}},emits:["close"],setup(n){return(t,e)=>(mt(),At("div",{class:"cube-popup-wrapper",onClick:e[1]||(e[1]=Ve(i=>t.$emit("close"),["self"]))},[w("div",D1,[e[2]||(e[2]=Ie('<div class="container" data-v-c18c3449><div class="cube" data-v-c18c3449><div style="--x:-1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:0;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div></div><div class="cube" data-v-c18c3449><div style="--x:-1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:0;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div></div><div class="cube" data-v-c18c3449><div style="--x:-1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:0;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div></div></div>',1)),w("button",{class:"cube-close-btn",onClick:e[0]||(e[0]=i=>t.$emit("close"))},"关闭")])]))}}),I1=be(L1,[["__scopeId","data-v-c18c3449"]]),U1={class:"sun-popup-card"},F1=xe({__name:"SunPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n){return(t,e)=>(mt(),At("div",{class:"sun-popup-wrapper",onClick:e[1]||(e[1]=Ve(i=>t.$emit("close"),["self"]))},[w("div",U1,[e[2]||(e[2]=Ie('<div class="section-banner-sun" data-v-a78e0292><div id="star-1" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-2" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-3" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-4" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-5" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-6" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-7" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div></div>',1)),w("button",{class:"sun-close-btn",onClick:e[0]||(e[0]=i=>t.$emit("close"))},"关闭")])]))}}),N1=be(F1,[["__scopeId","data-v-a78e0292"]]),O1={class:"bear-popup-card"},B1=xe({__name:"BearPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n){return(t,e)=>(mt(),At("div",{class:"bear-popup-wrapper",onClick:e[1]||(e[1]=Ve(i=>t.$emit("close"),["self"]))},[w("div",O1,[e[2]||(e[2]=Ie('<div class="bo" data-v-78750aeb><div class="face" data-v-78750aeb><div class="earL" data-v-78750aeb></div><div class="earR" data-v-78750aeb></div><div class="eyeL" data-v-78750aeb></div><div class="eyeR" data-v-78750aeb></div><div class="hairs" data-v-78750aeb></div><div class="nose" data-v-78750aeb></div><div class="mouth" data-v-78750aeb></div><div class="smileL" data-v-78750aeb><svg xml:space="preserve" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg" data-v-78750aeb><filter id="blurMe" data-v-78750aeb><feGaussianBlur in="SourceGraphic" stdDeviation="2" data-v-78750aeb></feGaussianBlur></filter><path d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)" data-v-78750aeb></path><path d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)" data-v-78750aeb></path><path d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)" data-v-78750aeb></path></svg></div><div class="smileR" data-v-78750aeb><svg xml:space="preserve" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg" data-v-78750aeb><filter id="blurMe" data-v-78750aeb><feGaussianBlur in="SourceGraphic" stdDeviation="2" data-v-78750aeb></feGaussianBlur></filter><path d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)" data-v-78750aeb></path><path d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)" data-v-78750aeb></path><path d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)" data-v-78750aeb></path></svg></div><div class="snow" data-v-78750aeb><div class="mountain-cap-1" data-v-78750aeb></div><div class="mountain-cap-2" data-v-78750aeb></div><div class="mountain-cap-3" data-v-78750aeb></div><div class="mountain-cap-4" data-v-78750aeb></div></div></div></div>',1)),w("button",{class:"bear-close-btn",onClick:e[0]||(e[0]=i=>t.$emit("close"))},"关闭")])]))}}),k1=be(B1,[["__scopeId","data-v-78750aeb"]]),z1={class:"coffee-popup-card"},H1=xe({__name:"CoffeePopup",props:{visible:{type:Boolean}},emits:["close"],setup(n){return(t,e)=>(mt(),At("div",{class:"coffee-popup-wrapper",onClick:e[1]||(e[1]=Ve(i=>t.$emit("close"),["self"]))},[w("div",z1,[e[2]||(e[2]=Ie('<div class="container" data-v-b5ea98c9><div class="coffee-header" data-v-b5ea98c9><div class="coffee-header__buttons coffee-header__button-one" data-v-b5ea98c9></div><div class="coffee-header__buttons coffee-header__button-two" data-v-b5ea98c9></div><div class="coffee-header__display" data-v-b5ea98c9></div><div class="coffee-header__details" data-v-b5ea98c9></div></div><div class="coffee-medium" data-v-b5ea98c9><div class="coffe-medium__exit" data-v-b5ea98c9></div><div class="coffee-medium__arm" data-v-b5ea98c9></div><div class="coffee-medium__liquid" data-v-b5ea98c9></div><div class="coffee-medium__smoke coffee-medium__smoke-one" data-v-b5ea98c9></div><div class="coffee-medium__smoke coffee-medium__smoke-two" data-v-b5ea98c9></div><div class="coffee-medium__smoke coffee-medium__smoke-three" data-v-b5ea98c9></div><div class="coffee-medium__smoke coffee-medium__smoke-for" data-v-b5ea98c9></div><div class="coffee-medium__cup" data-v-b5ea98c9></div></div><div class="coffee-footer" data-v-b5ea98c9></div></div>',1)),w("button",{class:"coffee-close-btn",onClick:e[0]||(e[0]=i=>t.$emit("close"))},"关闭")])]))}}),V1=be(H1,[["__scopeId","data-v-b5ea98c9"]]),G1={class:"switch-popup-card"},W1=xe({__name:"SwitchPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n){return(t,e)=>(mt(),At("div",{class:"switch-popup-wrapper",onClick:e[1]||(e[1]=Ve(i=>t.$emit("close"),["self"]))},[w("div",G1,[e[2]||(e[2]=Ie('<div class="switch-card" data-v-a5ad140f><div class="joy-con left" data-v-a5ad140f><div class="minus button" data-v-a5ad140f></div><div class="joystick" data-v-a5ad140f><div class="joystick-inner-border" data-v-a5ad140f><div class="joystick-inner" data-v-a5ad140f></div></div><div class="joystick-edge" data-v-a5ad140f></div><div class="joystick-edge" data-v-a5ad140f></div><div class="joystick-edge" data-v-a5ad140f></div><div class="joystick-edge" data-v-a5ad140f></div></div><div class="numpad-container" data-v-a5ad140f><div class="numpad-part numpad-top" data-v-a5ad140f><div class="numpad-button" data-v-a5ad140f>▲</div></div><div class="numpad-part numpad-middle" data-v-a5ad140f><div class="numpad-button" data-v-a5ad140f>◀</div><div class="numpad-button" data-v-a5ad140f>▶</div></div><div class="numpad-part numpad-bottom" data-v-a5ad140f><div class="numpad-button" data-v-a5ad140f>▼</div></div></div><div class="record-button" data-v-a5ad140f><div class="record-button-inner" data-v-a5ad140f></div></div></div><div class="screen-outline" data-v-a5ad140f><div class="screen-border" data-v-a5ad140f><div class="screen" data-v-a5ad140f></div></div></div><div class="joy-con right" data-v-a5ad140f><div class="plus-symbol" data-v-a5ad140f><div class="plus-symbol-overlap-fixer" data-v-a5ad140f></div></div><div class="joystick" data-v-a5ad140f><div class="joystick-inner-border" data-v-a5ad140f><div class="joystick-inner" data-v-a5ad140f></div></div><div class="joystick-edge" data-v-a5ad140f></div><div class="joystick-edge" data-v-a5ad140f></div><div class="joystick-edge" data-v-a5ad140f></div><div class="joystick-edge" data-v-a5ad140f></div></div><div class="numpad-container" data-v-a5ad140f><div class="numpad-part numpad-top" data-v-a5ad140f><div class="numpad-button" data-v-a5ad140f>X</div></div><div class="numpad-part numpad-middle" data-v-a5ad140f><div class="numpad-button button" data-v-a5ad140f>Y</div><div class="numpad-button button" data-v-a5ad140f>A</div></div><div class="numpad-part numpad-bottom" data-v-a5ad140f><div class="numpad-button button" data-v-a5ad140f>B</div></div></div><div class="home-button-border" data-v-a5ad140f><div class="home-button" data-v-a5ad140f>⌂</div></div></div></div>',1)),w("button",{class:"switch-close-btn",onClick:e[0]||(e[0]=i=>t.$emit("close"))},"关闭")])]))}}),X1=be(W1,[["__scopeId","data-v-a5ad140f"]]),j1={class:"camera-popup-card"},q1={class:"container"},Y1={class:"camera-wrapper"},$1=["checked"],K1=xe({__name:"CameraPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n){const t=Pt(!1);function e(){t.value=!t.value,t.value&&setTimeout(()=>{t.value=!1},5e3)}return(i,s)=>(mt(),At("div",{class:"camera-popup-wrapper",onClick:s[1]||(s[1]=Ve(r=>i.$emit("close"),["self"]))},[w("div",j1,[w("div",q1,[w("div",Y1,[w("input",{type:"checkbox",id:"snap",class:"shutter-input",checked:t.value},null,8,$1),s[4]||(s[4]=w("div",{class:"flash-overlay"},null,-1)),w("div",{class:"camera-body"},[s[2]||(s[2]=Ie('<div class="rainbow-stripe" data-v-05d1e14c></div><div class="viewfinder" data-v-05d1e14c></div><div class="flash-unit" data-v-05d1e14c></div><div class="lens-housing" data-v-05d1e14c><div class="lens-ring" data-v-05d1e14c></div><div class="lens-glass" data-v-05d1e14c><div class="aperture" data-v-05d1e14c></div></div></div><div class="label-plate" data-v-05d1e14c>ONE-STEP</div>',5)),w("div",{class:"shutter-btn"},[w("label",{for:"snap",class:"shutter-label",onClick:e})]),s[3]||(s[3]=w("div",{class:"bottom-lip"},null,-1))]),s[5]||(s[5]=w("div",{class:"film-slot"},[w("div",{class:"film-image"},[w("div",{class:"film-content"})])],-1))])]),w("button",{class:"camera-close-btn",onClick:s[0]||(s[0]=r=>i.$emit("close"))},"关闭")])]))}}),Z1=be(K1,[["__scopeId","data-v-05d1e14c"]]),J1={class:"neon-popup-card"},Q1=xe({__name:"NeonPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n,{emit:t}){const e=t;return(i,s)=>n.visible?(mt(),At("div",{key:0,class:"neon-popup-overlay",onClick:s[1]||(s[1]=Ve(r=>e("close"),["self"]))},[w("div",J1,[s[2]||(s[2]=Ie('<div class="card" data-v-564d9004><div class="lc cavity" data-v-564d9004></div><div class="lc line" data-v-564d9004></div><div class="led" data-v-564d9004></div><div class="text" data-v-564d9004>不知道要写什么</div></div>',1)),w("button",{class:"neon-close-btn",onClick:s[0]||(s[0]=r=>e("close"))},"关闭")])])):Zt("",!0)}}),tT=be(Q1,[["__scopeId","data-v-564d9004"]]),eT={class:"cube-rotate-card"},nT=xe({__name:"CubeRotatePopup",props:{visible:{type:Boolean}},emits:["close"],setup(n,{emit:t}){const e=t;return(i,s)=>n.visible?(mt(),At("div",{key:0,class:"cube-rotate-overlay",onClick:s[1]||(s[1]=Ve(r=>e("close"),["self"]))},[w("div",eT,[s[2]||(s[2]=Ie('<div class="cube-container" data-v-336befae><div class="cube" data-v-336befae><div class="face front" data-v-336befae></div><div class="face back" data-v-336befae></div><div class="face right" data-v-336befae></div><div class="face left" data-v-336befae></div><div class="face top" data-v-336befae></div><div class="face bottom" data-v-336befae></div></div></div>',1)),w("button",{class:"cube-close-btn",onClick:s[0]||(s[0]=r=>e("close"))},"关闭")])])):Zt("",!0)}}),iT=be(nT,[["__scopeId","data-v-336befae"]]),sT={class:"beautiful-page"},rT={class:"bg-layer"},aT={class:"body-wrapper"},oT={class:"comic-panel"},lT={class:"container-items"},cT=["data-name","onClick"],uT=xe({__name:"BeautifulView",setup(n){const t=Qn(),e=[{hex:"#e11d48",name:"小车",desc:"热情似火的玫瑰红"},{hex:"#f472b6",name:"键盘",desc:"少女心爆棚的樱花粉"},{hex:"#fb923c",name:"方块",desc:"温暖活力的日落橙"},{hex:"#facc15",name:"太阳",desc:"明亮欢快的阳光黄"},{hex:"#84cc16",name:"小熊",desc:"生机盎然的青草绿"},{hex:"#10b981",name:"咖啡",desc:"清新自然的翡翠青"},{hex:"#0ea5e9",name:"手柄",desc:"广阔自由的天空蓝"},{hex:"#3b82f6",name:"相机",desc:"深邃沉稳的宝石靛"},{hex:"#8b5cf6",name:"卡片",desc:"神秘优雅的薰衣草紫"},{hex:"#a78bfa",name:"立方体",desc:"温柔梦幻的薄雾雪"}],i=Pt(!1),s=Pt(null),r=Pt([]);for(let c=0;c<50;c++)r.value.push({id:c,x:Math.random()*100,y:Math.random()*100,size:1+Math.random()*2,delay:Math.random()*3});function a(c){s.value=c,i.value=!0}function o(){i.value=!1}function l(){t.replace("/")}return An(()=>{}),(c,u)=>(mt(),At("div",sT,[w("div",rT,[u[0]||(u[0]=w("div",{class:"bg-gradient"},null,-1)),(mt(!0),At(ce,null,Be(r.value,d=>(mt(),At("div",{key:d.id,class:"star",style:he({left:d.x+"%",top:d.y+"%",width:d.size+"px",height:d.size+"px",animationDelay:d.delay+"s"})},null,4))),128))]),w("button",{class:"back-btn",onClick:l},[...u[1]||(u[1]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回",-1)])]),w("div",aT,[w("div",oT,[w("div",lT,[(mt(),At(ce,null,Be(e,d=>w("button",{key:d.hex,class:"item-color",style:he({"--color":d.hex}),"data-name":d.name,onClick:f=>a(d)},null,12,cT)),64))])])]),(mt(),Oe(yo,{to:"body"},[i.value?(mt(),At("div",{key:0,class:"popup-overlay",onClick:Ve(o,["self"])},[s.value&&s.value.hex==="#e11d48"?(mt(),Oe(w1,{key:0,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#f472b6"?(mt(),Oe(P1,{key:1,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#fb923c"?(mt(),Oe(I1,{key:2,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#facc15"?(mt(),Oe(N1,{key:3,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#84cc16"?(mt(),Oe(k1,{key:4,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#10b981"?(mt(),Oe(V1,{key:5,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#0ea5e9"?(mt(),Oe(X1,{key:6,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#3b82f6"?(mt(),Oe(Z1,{key:7,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#8b5cf6"?(mt(),Oe(tT,{key:8,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0),s.value&&s.value.hex==="#a78bfa"?(mt(),Oe(iT,{key:9,visible:i.value,onClose:o},null,8,["visible"])):Zt("",!0)])):Zt("",!0)]))]))}}),dT=be(uT,[["__scopeId","data-v-f4972a5b"]]),fT={class:"prank-page"},hT={class:"bg-layer"},pT={class:"main-content"},mT={key:0,class:"modal-body"},gT={key:0,class:"error-msg"},vT={key:0,class:"attempt-hint"},_T={key:1,class:"modal-body revealed-body"},xT={class:"sparkle-container"},yT={key:2,class:"modal-footer"},MT=xe({__name:"BirthdayPrankView",setup(n){const t=Qn(),e=Pt(!1),i=Pt(""),s=Pt(""),r=Pt(0),a=Pt("idle"),o=Pt(),l=Pt(!1),c=Pt(!1),u=["密码错误，请重试","验证失败，再试一次？","权限不足，无法解密","系统繁忙，请稍后重试","解密失败，密钥不匹配","数据已加密，请输入正确密码","认证失败，你确定记得自己的年龄？","安全校验未通过，请重新输入"];function d(){e.value=!0,a.value="typing",i.value="",s.value="",r.value=0,l.value=!1,_s(()=>{var v;(v=o.value)==null||v.focus()})}function f(){if(!i.value.trim())return;r.value++,l.value=!0,c.value=!0;const v=(r.value-1)%u.length;s.value=u[v],setTimeout(()=>{c.value=!1},500),r.value>=5?setTimeout(()=>{a.value="revealed",l.value=!1},1200):(i.value="",_s(()=>{var m;(m=o.value)==null||m.focus()}))}function h(){e.value=!1,a.value="idle"}function g(){t.replace("/")}return(v,m)=>(mt(),At("div",fT,[w("div",hT,[m[1]||(m[1]=w("div",{class:"bg-gradient"},null,-1)),(mt(),At(ce,null,Be(20,p=>w("div",{class:"confetti",key:p,style:he({left:Math.random()*100+"%",animationDelay:Math.random()*3+"s",animationDuration:2+Math.random()*4+"s",backgroundColor:["#FF6B6B","#FFE66D","#4ECDC4","#A78BFA","#F472B6","#60A5FA"][p%6]})},null,4)),64))]),w("button",{class:"back-btn",onClick:g},[...m[2]||(m[2]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回",-1)])]),w("div",pT,[e.value?Zt("",!0):(mt(),At("button",{key:0,class:"trigger-btn",onClick:d},[...m[3]||(m[3]=[w("span",{class:"trigger-icon"},"🔒",-1),w("span",{class:"trigger-text"},"查看我的年龄",-1),w("span",{class:"trigger-sub"},"点击解密",-1)])])),(mt(),Oe(yo,{to:"body"},[e.value?(mt(),At("div",{key:0,class:"modal-overlay",onClick:Ve(h,["self"])},[w("div",{class:ke(["modal-card",{reveal:a.value==="revealed"}])},[w("div",{class:"modal-header"},[m[4]||(m[4]=w("div",{class:"header-dots"},[w("span",{class:"dot red"}),w("span",{class:"dot yellow"}),w("span",{class:"dot green"})],-1)),m[5]||(m[5]=w("span",{class:"header-title"},"年龄解密系统",-1)),w("button",{class:"header-close",onClick:h},"✕")]),a.value!=="revealed"?(mt(),At("div",mT,[m[6]||(m[6]=w("div",{class:"lock-icon"},"🔐",-1)),m[7]||(m[7]=w("p",{class:"encrypt-text"},[w("span",{class:"warning-icon"},"⚠️"),Hi(" 你的年龄已被加密 ")],-1)),m[8]||(m[8]=w("p",{class:"encrypt-sub"},"请输入密码查看真实年龄",-1)),w("div",{class:ke(["input-group",{shake:c.value}])},[Jc(w("input",{ref_key:"inputRef",ref:o,"onUpdate:modelValue":m[0]||(m[0]=p=>i.value=p),type:"password",class:"password-input",placeholder:"请输入6位密码",maxlength:"20",onKeyup:Ov(f,["enter"])},null,544),[[hp,i.value]]),w("button",{class:"submit-btn",onClick:f}," 解密 ")],2),pe(xs,{name:"error-fade"},{default:Mn(()=>[l.value?(mt(),At("p",gT,Se(s.value),1)):Zt("",!0)]),_:1}),r.value>0?(mt(),At("p",vT," 已尝试 "+Se(r.value)+" 次 ",1)):Zt("",!0)])):(mt(),At("div",_T,[w("div",xT,[(mt(),At(ce,null,Be(8,p=>w("span",{class:"sparkle",key:p,style:he({left:10+Math.random()*80+"%",top:10+Math.random()*80+"%",animationDelay:Math.random()*.5+"s"})},"✨",4)),64))]),m[9]||(m[9]=w("div",{class:"party-popper"},"🎉",-1)),m[10]||(m[10]=w("p",{class:"reveal-main"}," 骗你的！ ",-1)),m[11]||(m[11]=w("p",{class:"reveal-sub"},[Hi(" 永远"),w("span",{class:"highlight"},"18"),Hi("岁！ ")],-1)),m[12]||(m[12]=w("p",{class:"reveal-desc"}," 年龄只是数字，快乐才是永恒 😎 ",-1)),w("button",{class:"again-btn",onClick:d}," 再来一次 ")])),a.value==="typing"?(mt(),At("div",yT,[...m[13]||(m[13]=[w("span",{class:"footer-hint"},"💡 提示：答案就在你心中",-1)])])):Zt("",!0)],2)])):Zt("",!0)]))])]))}}),ST=be(MT,[["__scopeId","data-v-9eb827da"]]),ET={class:"bg-layer"},bT={key:0,class:"hint-text"},TT={class:"card-emoji"},AT={class:"card-title"},wT={class:"card-desc"},CT={key:0,class:"sparkles"},RT=xe({__name:"GiftBoxView",setup(n){const t=Qn(),e=[{emoji:"🎂",title:"生日快乐",desc:"愿你的每一天都如蛋糕般甜蜜，每一岁都闪耀光芒！",color:"#FFD166"},{emoji:"🌟",title:"前程似锦",desc:"愿你像星星一样，在属于自己的轨道上闪闪发光。",color:"#FFB347"},{emoji:"💖",title:"永远被爱",desc:"无论走到哪里，都有人爱你，有人懂你，有人陪你。",color:"#FF9AA2"},{emoji:"🎉",title:"天天开心",desc:"希望你的笑容比今天的烟花还灿烂！",color:"#FF6B6B"},{emoji:"🍀",title:"好运连连",desc:"幸运之神永远站在你这边，好事接二连三！",color:"#4ECDC4"},{emoji:"🌈",title:"梦想成真",desc:"所有美好的愿望，都会在合适的时机一一实现。",color:"#A78BFA"},{emoji:"🦋",title:"自由飞翔",desc:"愿你拥有破茧成蝶的勇气，飞向更广阔的天空。",color:"#60A5FA"},{emoji:"🌻",title:"向阳而生",desc:"做一朵向日葵，永远面朝阳光，把阴影甩在身后。",color:"#FBBF24"},{emoji:"🏆",title:"万事胜意",desc:"愿你所有的努力都不被辜负，所有的期待都如约而至。",color:"#F59E0B"},{emoji:"💎",title:"独一无二",desc:"你是这世界上独一无二的宝藏，请永远珍视自己。",color:"#8B5CF6"},{emoji:"🎀",title:"美好永驻",desc:"愿美好的事物永远围绕着你，像礼物上的蝴蝶结一样精致。",color:"#F472B6"},{emoji:"✨",title:"光芒万丈",desc:"你的存在本身就是一束光，照亮自己也温暖他人。",color:"#FACC15"}],i=Pt("idle"),s=Pt(null),r=Pt(!1),a=Pt(!1),o=Pt(!1);function l(){i.value==="idle"&&(i.value="opening",r.value=!0,setTimeout(()=>{r.value=!1,a.value=!0,o.value=!0;const d=Math.floor(Math.random()*e.length);s.value=e[d]},800),setTimeout(()=>{i.value="revealed"},1400))}function c(){i.value="idle",a.value=!1,o.value=!1,s.value=null}function u(){t.replace("/")}return(d,f)=>(mt(),At("div",{class:"gift-page",onClick:f[3]||(f[3]=h=>i.value==="revealed"&&c())},[w("div",ET,[f[4]||(f[4]=w("div",{class:"bg-gradient"},null,-1)),(mt(),At(ce,null,Be(15,h=>w("div",{class:"floating-item",key:h,style:he({left:Math.random()*100+"%",animationDelay:Math.random()*8+"s",animationDuration:8+Math.random()*10+"s",fontSize:12+Math.random()*20+"px",opacity:.3+Math.random()*.3})},Se(["🎀","🎁","💝","🎈","🎊","🌟"][h%6]),5)),64))]),w("button",{class:"back-btn",onClick:u},[...f[5]||(f[5]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回",-1)])]),w("div",{class:"main-content",onClick:f[2]||(f[2]=Ve(()=>{},["stop"]))},[i.value==="idle"?(mt(),At("p",bT,"🎀 点击礼物盒拆开惊喜 🎀")):Zt("",!0),w("div",{class:ke(["gift-container",{clickable:i.value==="idle"||i.value==="revealed"}]),onClick:f[1]||(f[1]=Ve(h=>i.value==="idle"?l():i.value==="revealed"?c():null,["stop"]))},[w("div",{class:ke(["gift-box",{shake:r.value}])},[w("div",{class:ke(["box-lid",{open:a.value}])},[...f[6]||(f[6]=[Ie('<div class="lid-top" data-v-20049204></div><div class="lid-front" data-v-20049204></div><div class="bow" data-v-20049204><div class="bow-loop left" data-v-20049204></div><div class="bow-loop right" data-v-20049204></div><div class="bow-center" data-v-20049204></div><div class="bow-tail left" data-v-20049204></div><div class="bow-tail right" data-v-20049204></div></div>',3)])],2),f[7]||(f[7]=w("div",{class:"box-body"},[w("div",{class:"box-ribbon-v"}),w("div",{class:"box-ribbon-h"})],-1))],2),pe(xs,{name:"card-pop"},{default:Mn(()=>[i.value==="revealed"&&s.value?(mt(),At("div",{key:0,class:"blessing-card",style:he({"--card-color":s.value.color}),onClick:f[0]||(f[0]=Ve(()=>{},["stop"]))},[f[8]||(f[8]=w("div",{class:"card-tape"},null,-1)),w("div",TT,Se(s.value.emoji),1),w("div",AT,Se(s.value.title),1),w("div",wT,Se(s.value.desc),1),f[9]||(f[9]=w("p",{class:"card-hint"},"点击空白处再拆一次",-1))],4)):Zt("",!0)]),_:1}),pe(xs,{name:"sparkle-fade"},{default:Mn(()=>[o.value?(mt(),At("div",CT,[(mt(),At(ce,null,Be(12,h=>w("span",{key:h,class:"sparkle-star",style:he({left:10+Math.random()*80+"%",top:10+Math.random()*80+"%",animationDelay:Math.random()*.8+"s",fontSize:14+Math.random()*16+"px"})},"✨",4)),64))])):Zt("",!0)]),_:1})],2)])]))}}),PT=be(RT,[["__scopeId","data-v-20049204"]]),DT={class:"firework-page"},LT=xe({__name:"FireworkView",setup(n){const t=Qn(),e=Pt([]),i=Pt(null);let s=null;const r=["#FF6B6B","#FFD93D","#6BCB77","#4D96FF","#FF8E53","#C471ED","#12D8FA","#FF4081","#00E676","#FFEA00","#FF3D00","#2979FF","#AA00FF","#00E5FF","#FF1744","#76FF03"];function a(h,g){const v=60+Math.floor(Math.random()*80),m=r[Math.floor(Math.random()*r.length)],p=[],T=Math.random();let A=[];if(T<.4)for(let _=0;_<v;_++)A.push(_/v*Math.PI*2);else if(T<.7)for(let _=0;_<v;_++)A.push(Math.random()*Math.PI*2);else{const _=5+Math.floor(Math.random()*4);for(let U=0;U<v;U++){const P=U/v*Math.PI*2*_,y=(Math.random()-.5)*.3;A.push(P+y)}}for(let _=0;_<v;_++){const U=1.5+Math.random()*5,P=A[_],y=Math.random()<.3?r[Math.floor(Math.random()*r.length)]:m;p.push({x:h,y:g,vx:Math.cos(P)*U,vy:Math.sin(P)*U,life:1,maxLife:.6+Math.random()*.8,color:y,size:1.5+Math.random()*3,type:["circle","circle","circle","star","spark"][Math.floor(Math.random()*5)]})}return{x:h,y:g,particles:p,time:0}}function o(h,g){const v=g.life/g.maxLife;h.globalAlpha=v*.9,g.type==="circle"?(h.beginPath(),h.arc(g.x,g.y,g.size,0,Math.PI*2),h.fillStyle=g.color,h.fill(),h.beginPath(),h.arc(g.x,g.y,g.size*2,0,Math.PI*2),h.fillStyle=g.color,h.globalAlpha=v*.15,h.fill()):g.type==="star"?(l(h,g.x,g.y,g.size*2,g.size,5,g.color),h.globalAlpha=v*.2,l(h,g.x,g.y,g.size*3.5,g.size*1.5,5,g.color)):g.type==="spark"&&(h.beginPath(),h.moveTo(g.x,g.y-g.size*2),h.lineTo(g.x-g.size*.7,g.y+g.size),h.lineTo(g.x+g.size*1.5,g.y-g.size*.4),h.lineTo(g.x-g.size*1.5,g.y-g.size*.4),h.lineTo(g.x+g.size*.7,g.y+g.size),h.closePath(),h.fillStyle=g.color,h.fill()),h.globalAlpha=1}function l(h,g,v,m,p,T,A){h.beginPath();for(let _=0;_<T*2;_++){const U=_%2===0?m:p,P=_*Math.PI/T-Math.PI/2,y=g+Math.cos(P)*U,I=v+Math.sin(P)*U;_===0?h.moveTo(y,I):h.lineTo(y,I)}h.closePath(),h.fillStyle=A,h.fill()}function c(){if(!(!s||!i.value)){s.clearRect(0,0,i.value.width,i.value.height),s.fillStyle="rgba(0, 0, 0, 0.15)",s.fillRect(0,0,i.value.width,i.value.height);for(let h=e.value.length-1;h>=0;h--){const g=e.value[h];g.time+=1/60;let v=!0;for(let m=g.particles.length-1;m>=0;m--){const p=g.particles[m];p.x+=p.vx,p.y+=p.vy,p.vy+=.05,p.vx*=.99,p.vy*=.99,p.life-=1/60,p.life<=0?g.particles.splice(m,1):(v=!1,o(s,p))}(v||g.time>3)&&e.value.splice(h,1)}requestAnimationFrame(c)}}function u(h){const g=i.value.getBoundingClientRect(),v=h.clientX-g.left,m=h.clientY-g.top;e.value.push(a(v,m)),Math.random()<.4&&setTimeout(()=>{e.value.push(a(v+(Math.random()-.5)*100,m+(Math.random()-.5)*80))},80+Math.random()*120)}function d(){i.value&&(i.value.width=window.innerWidth,i.value.height=window.innerHeight)}function f(){t.replace("/")}return An(()=>{if(!i.value)return;s=i.value.getContext("2d"),d(),window.addEventListener("resize",d),c();const h=()=>{if(!i.value)return;const g=i.value.width,v=i.value.height;e.value.push(a(g*.2+Math.random()*g*.6,v*.2+Math.random()*v*.4))};h(),setTimeout(h,400),setTimeout(h,900)}),(h,g)=>(mt(),At("div",DT,[w("canvas",{ref_key:"canvasRef",ref:i,class:"firework-canvas",onClick:u},null,512),w("button",{class:"back-btn",onClick:f},[...g[0]||(g[0]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回",-1)])]),g[1]||(g[1]=w("div",{class:"hint"},[w("span",{class:"hint-icon"},"🎆"),w("span",null,"点击屏幕任意位置 绽放烟花")],-1))]))}}),IT=be(LT,[["__scopeId","data-v-11ee9ef1"]]),UT={class:"lazy-page"},FT={class:"float-layer"},NT={key:0,class:"click-reaction"},OT={key:0,class:"character standing"},BT={key:1,class:"character laying"},kT={key:0,class:"tap-hint"},zT=xe({__name:"LazyDownView",setup(n){const t=Qn(),e=Pt(!1),i=Pt([]),s=Pt([]),r=Pt(""),a=Pt([]),o=Pt(!1);let l=0,c=0,u=0,d=null,f=null,h=null;const g=["不想动...","明天再说吧","躺平真舒服",`努力不一定成功
但不努力一定很轻松`,`世上无难事
只要肯放弃`,"躺平是一种态度",`咸鱼翻身
还是咸鱼`,"不卷了不卷了","摆烂使我快乐",`人生苦短
及时躺平`],v=["别戳了，起不来","哎呀，别烦我","Zzz...别闹","翻个身继续躺","你戳任你戳","我自岿然不动","躺平中，勿扰","努力？明天再说","戳我也没用~"],m=["🍃","🌿","🌸","💤","🦋","☁️","🫧"];function p(){e.value||(e.value=!0,d=setInterval(()=>{i.value.push({id:++l,x:50+(Math.random()-.5)*80,y:-15-Math.random()*25,scale:.8+Math.random()*1,delay:0}),i.value.length>8&&(i.value=i.value.slice(-8))},1500),f=setInterval(()=>{const _=g[Math.floor(Math.random()*g.length)];s.value.push({id:++c,text:_,delay:0}),s.value.length>3&&(s.value=s.value.slice(-3))},3e3),setInterval(()=>{a.value.push({id:++u,emoji:m[Math.floor(Math.random()*m.length)],x:Math.random()*100,delay:0,duration:8+Math.random()*12}),a.value.length>15&&(a.value=a.value.slice(-15))},2e3),setTimeout(()=>{i.value.push({id:++l,x:48,y:-15,scale:1.2,delay:0}),s.value.push({id:++c,text:"我躺了，你随意",delay:0})},300))}function T(){o.value=!0,setTimeout(()=>{o.value=!1},400),h&&clearTimeout(h);const _=v[Math.floor(Math.random()*v.length)];r.value=_,h=setTimeout(()=>{r.value=""},1800)}function A(){d&&clearInterval(d),f&&clearInterval(f),h&&clearTimeout(h),t.replace("/")}return An(()=>{setTimeout(p,600)}),Ss(()=>{d&&clearInterval(d),f&&clearInterval(f),h&&clearTimeout(h)}),(_,U)=>(mt(),At("div",UT,[U[6]||(U[6]=Ie('<div class="bg-layer" data-v-47959aec><div class="sky" data-v-47959aec></div><div class="sun" data-v-47959aec><div class="sun-core" data-v-47959aec></div><div class="sun-ray r0" data-v-47959aec></div><div class="sun-ray r1" data-v-47959aec></div><div class="sun-ray r2" data-v-47959aec></div><div class="sun-ray r3" data-v-47959aec></div><div class="sun-ray r4" data-v-47959aec></div><div class="sun-ray r5" data-v-47959aec></div><div class="sun-ray r6" data-v-47959aec></div><div class="sun-ray r7" data-v-47959aec></div></div><div class="cloud c1" data-v-47959aec></div><div class="cloud c2" data-v-47959aec></div><div class="cloud c3" data-v-47959aec></div><div class="tree t1" data-v-47959aec><div class="tree-top" data-v-47959aec></div><div class="tree-trunk" data-v-47959aec></div></div><div class="tree t2" data-v-47959aec><div class="tree-top" data-v-47959aec></div><div class="tree-trunk" data-v-47959aec></div></div><div class="floor" data-v-47959aec><div class="floor-grass" data-v-47959aec></div></div><div class="grass-deco g1" data-v-47959aec>🌱</div><div class="grass-deco g2" data-v-47959aec>🌿</div><div class="grass-deco g3" data-v-47959aec>🌾</div><div class="grass-deco g4" data-v-47959aec>🌼</div><div class="grass-deco g5" data-v-47959aec>🌻</div><div class="grass-deco g6" data-v-47959aec>🍀</div><div class="grass-deco g7" data-v-47959aec>🪷</div><div class="mushroom m1" data-v-47959aec><div class="mush-cap" data-v-47959aec></div><div class="mush-stem" data-v-47959aec></div></div><div class="mushroom m2" data-v-47959aec><div class="mush-cap" data-v-47959aec></div><div class="mush-stem" data-v-47959aec></div></div></div>',1)),w("div",FT,[(mt(!0),At(ce,null,Be(a.value,P=>(mt(),At("div",{key:P.id,class:"float-item",style:he({left:P.x+"%",animationDuration:P.duration+"s"})},Se(P.emoji),5))),128))]),U[7]||(U[7]=w("div",{class:"top-title"},[w("span",{class:"title-emoji"},"🛌"),w("span",{class:"title-text"},"躺平模拟器")],-1)),w("button",{class:"back-btn",onClick:A},[...U[0]||(U[0]=[w("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[w("polyline",{points:"15 18 9 12 15 6"})],-1),w("span",null,"返回",-1)])]),w("div",{class:"scene",onClick:T},[pe(xs,{name:"reaction-pop"},{default:Mn(()=>[r.value?(mt(),At("div",NT,Se(r.value),1)):Zt("",!0)]),_:1}),U[5]||(U[5]=Ie('<div class="props-layer" data-v-47959aec><div class="prop chips" data-v-47959aec>🍟</div><div class="prop cola" data-v-47959aec>🥤</div><div class="prop phone" data-v-47959aec>📱</div><div class="prop remote" data-v-47959aec>🎮</div><div class="prop candy" data-v-47959aec>🍬</div></div>',1)),w("div",{class:ke(["character-area",{bounce:o.value}])},[e.value?Zt("",!0):(mt(),At("div",OT,[...U[1]||(U[1]=[Ie('<div class="stand-head" data-v-47959aec><div class="hair" data-v-47959aec></div><div class="face" data-v-47959aec><div class="eyebrow left" data-v-47959aec></div><div class="eyebrow right" data-v-47959aec></div><div class="eye left" data-v-47959aec></div><div class="eye right" data-v-47959aec></div><div class="mouth tired" data-v-47959aec></div></div></div><div class="stand-neck" data-v-47959aec></div><div class="stand-body" data-v-47959aec><div class="shirt-collar" data-v-47959aec></div></div><div class="stand-arm left" data-v-47959aec><div class="hand" data-v-47959aec></div></div><div class="stand-arm right" data-v-47959aec><div class="hand" data-v-47959aec></div></div><div class="stand-leg left" data-v-47959aec><div class="shoe" data-v-47959aec></div></div><div class="stand-leg right" data-v-47959aec><div class="shoe" data-v-47959aec></div></div>',7)])])),e.value?(mt(),At("div",BT,[...U[2]||(U[2]=[Ie('<div class="laying-whole" data-v-47959aec><div class="laying-legs" data-v-47959aec><div class="laying-shoe left" data-v-47959aec></div><div class="laying-shoe right" data-v-47959aec></div></div><div class="laying-torso" data-v-47959aec><div class="laying-belly" data-v-47959aec></div></div><div class="laying-head-area" data-v-47959aec><div class="pillow" data-v-47959aec></div><div class="laying-head" data-v-47959aec><div class="hair" data-v-47959aec></div><div class="face relaxed" data-v-47959aec><div class="eye-closed left" data-v-47959aec></div><div class="eye-closed right" data-v-47959aec></div><div class="blush left" data-v-47959aec></div><div class="blush right" data-v-47959aec></div><div class="mouth smile" data-v-47959aec></div></div></div><div class="laying-arm under-head" data-v-47959aec></div></div><div class="laying-arm relaxed" data-v-47959aec></div></div>',1)])])):Zt("",!0)],2),pe(Wl,{name:"zzz-fly",tag:"div",class:"zzz-layer"},{default:Mn(()=>[(mt(!0),At(ce,null,Be(i.value,P=>(mt(),At("div",{key:P.id,class:"zzz",style:he({left:P.x+"%",top:P.y+"%",transform:`scale(${P.scale})`})},[...U[3]||(U[3]=[w("span",null,"Z",-1),w("span",{class:"z2"},"z",-1),w("span",{class:"z3"},"z",-1)])],4))),128))]),_:1}),pe(Wl,{name:"bubble-fly",tag:"div",class:"bubble-layer"},{default:Mn(()=>[(mt(!0),At(ce,null,Be(s.value,P=>(mt(),At("div",{key:P.id,class:"speech-bubble"},[(mt(!0),At(ce,null,Be(P.text.split(`
`),(y,I)=>(mt(),At("p",{key:I},Se(y),1))),128))]))),128))]),_:1}),pe(xs,{name:"fade"},{default:Mn(()=>[e.value&&!r.value?(mt(),At("div",kT,[...U[4]||(U[4]=[w("span",null,"👆 戳戳这个摆烂小人",-1)])])):Zt("",!0)]),_:1})])]))}}),HT=be(zT,[["__scopeId","data-v-47959aec"]]),VT=$_({history:C_("/"),routes:[{path:"/",name:"home",component:Hb},{path:"/sticker",name:"sticker-detail",component:qb},{path:"/confession",name:"confession",component:r1},{path:"/birthday-cake",name:"birthday-cake",component:d1},{path:"/birthday-card",name:"birthday-card",component:v1},{path:"/beautiful",name:"beautiful",component:dT},{path:"/birthday-prank",name:"birthday-prank",component:ST},{path:"/gift-box",name:"gift-box",component:PT},{path:"/firework",name:"firework",component:IT},{path:"/lazy-down",name:"lazy-down",component:HT}]}),Au=zv(Z_);Au.use(Wv());Au.use(VT);Au.mount("#app");
