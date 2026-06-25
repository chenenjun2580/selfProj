(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const fe={},Gs=[],Wn=()=>{},Xh=()=>!1,fa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ha=n=>n.startsWith("onUpdate:"),Te=Object.assign,Oc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},um=Object.prototype.hasOwnProperty,se=(n,t)=>um.call(n,t),Ot=Array.isArray,Ws=n=>lr(n)==="[object Map]",jh=n=>lr(n)==="[object Set]",Lu=n=>lr(n)==="[object Date]",fm=n=>lr(n)==="[object RegExp]",Vt=n=>typeof n=="function",pe=n=>typeof n=="string",qn=n=>typeof n=="symbol",re=n=>n!==null&&typeof n=="object",qh=n=>(re(n)||Vt(n))&&Vt(n.then)&&Vt(n.catch),Yh=Object.prototype.toString,lr=n=>Yh.call(n),hm=n=>lr(n).slice(8,-1),$h=n=>lr(n)==="[object Object]",Bc=n=>pe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Nr=Fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},dm=/-\w/g,Ke=da(n=>n.replace(dm,t=>t.slice(1).toUpperCase())),pm=/\B([A-Z])/g,gs=da(n=>n.replace(pm,"-$1").toLowerCase()),pa=da(n=>n.charAt(0).toUpperCase()+n.slice(1)),Da=da(n=>n?`on${pa(n)}`:""),Hn=(n,t)=>!Object.is(n,t),Xs=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Kh=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},kc=n=>{const t=parseFloat(n);return isNaN(t)?n:t},mm=n=>{const t=pe(n)?Number(n):NaN;return isNaN(t)?n:t};let Iu;const ma=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Se(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=pe(i)?xm(i):Se(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(pe(n)||re(n))return n}const gm=/;(?![^(]*\))/g,_m=/:([^]+)/,vm=/\/\*[^]*?\*\//g;function xm(n){const t={};return n.replace(vm,"").split(gm).forEach(e=>{if(e){const i=e.split(_m);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function vn(n){let t="";if(pe(n))t=n;else if(Ot(n))for(let e=0;e<n.length;e++){const i=vn(n[e]);i&&(t+=i+" ")}else if(re(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const ym="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mm=Fc(ym);function Zh(n){return!!n||n===""}function Sm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=zc(n[i],t[i]);return e}function zc(n,t){if(n===t)return!0;let e=Lu(n),i=Lu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=qn(n),i=qn(t),e||i)return n===t;if(e=Ot(n),i=Ot(t),e||i)return e&&i?Sm(n,t):!1;if(e=re(n),i=re(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!zc(n[o],t[o]))return!1}}return String(n)===String(t)}const Jh=n=>!!(n&&n.__v_isRef===!0),ze=n=>pe(n)?n:n==null?"":Ot(n)||re(n)&&(n.toString===Yh||!Vt(n.toString))?Jh(n)?ze(n.value):JSON.stringify(n,Qh,2):String(n),Qh=(n,t)=>Jh(t)?Qh(n,t.value):Ws(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[La(i,r)+" =>"]=s,e),{})}:jh(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>La(e))}:qn(t)?La(t):re(t)&&!Ot(t)&&!$h(t)?String(t):t,La=(n,t="")=>{var e;return qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class td{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ie&&(Ie.active?(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ie;try{return Ie=this,t()}finally{Ie=e}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){if(this._on>0&&--this._on===0){if(Ie===this)Ie=this.prevScope;else{let t=Ie;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Em(n){return new td(n)}function bm(){return Ie}let de;const Ia=new WeakSet;class ed{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&(Ie.active?Ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ia.has(this)&&(Ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uu(this),sd(this);const t=de,e=Rn;de=this,Rn=!0;try{return this.fn()}finally{rd(this),de=t,Rn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Gc(t);this.deps=this.depsTail=void 0,Uu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wl(this)&&this.run()}get dirty(){return wl(this)}}let nd=0,Fr,Or;function id(n,t=!1){if(n.flags|=8,t){n.next=Or,Or=n;return}n.next=Fr,Fr=n}function Hc(){nd++}function Vc(){if(--nd>0)return;if(Or){let t=Or;for(Or=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Fr;){let t=Fr;for(Fr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function sd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function rd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Gc(i),Tm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function wl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(od(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function od(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!wl(n))))return;n.flags|=2;const t=n.dep,e=de,i=Rn;de=n,Rn=!0;try{sd(n);const s=n.fn(n._value);(t.version===0||Hn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{de=e,Rn=i,rd(n),n.flags&=-3}}function Gc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Gc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Tm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Rn=!0;const ad=[];function di(){ad.push(Rn),Rn=!1}function pi(){const n=ad.pop();Rn=n===void 0?!0:n}function Uu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=de;de=void 0;try{t()}finally{de=e}}}let Gr=0;class Am{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!Rn||de===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==de)e=this.activeLink=new Am(de,this),de.deps?(e.prevDep=de.depsTail,de.depsTail.nextDep=e,de.depsTail=e):de.deps=de.depsTail=e,ld(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=de.depsTail,e.nextDep=void 0,de.depsTail.nextDep=e,de.depsTail=e,de.deps===e&&(de.deps=i)}return e}trigger(t){this.version++,Gr++,this.notify(t)}notify(t){Hc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Vc()}}}function ld(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)ld(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Cl=new WeakMap,cs=Symbol(""),Rl=Symbol(""),Wr=Symbol("");function Oe(n,t,e){if(Rn&&de){let i=Cl.get(n);i||Cl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Wc),s.map=i,s.key=e),s.track()}}function li(n,t,e,i,s,r){const o=Cl.get(n);if(!o){Gr++;return}const a=l=>{l&&l.trigger()};if(Hc(),t==="clear")o.forEach(a);else{const l=Ot(n),c=l&&Bc(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Wr||!qn(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Wr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(cs)),Ws(n)&&a(o.get(Rl)));break;case"delete":l||(a(o.get(cs)),Ws(n)&&a(o.get(Rl)));break;case"set":Ws(n)&&a(o.get(cs));break}}Vc()}function xs(n){const t=te(n);return t===n?t:(Oe(t,"iterate",Wr),xn(n)?t:t.map(In))}function ga(n){return Oe(n=te(n),"iterate",Wr),n}function Bn(n,t){return mi(n)?Js(us(n)?In(t):t):In(t)}const wm={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,n=>Bn(this,n))},concat(...n){return xs(this).concat(...n.map(t=>Ot(t)?xs(t):t))},entries(){return Ua(this,"entries",n=>(n[1]=Bn(this,n[1]),n))},every(n,t){return Jn(this,"every",n,t,void 0,arguments)},filter(n,t){return Jn(this,"filter",n,t,e=>e.map(i=>Bn(this,i)),arguments)},find(n,t){return Jn(this,"find",n,t,e=>Bn(this,e),arguments)},findIndex(n,t){return Jn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Jn(this,"findLast",n,t,e=>Bn(this,e),arguments)},findLastIndex(n,t){return Jn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Jn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Na(this,"includes",n)},indexOf(...n){return Na(this,"indexOf",n)},join(n){return xs(this).join(n)},lastIndexOf(...n){return Na(this,"lastIndexOf",n)},map(n,t){return Jn(this,"map",n,t,void 0,arguments)},pop(){return gr(this,"pop")},push(...n){return gr(this,"push",n)},reduce(n,...t){return Nu(this,"reduce",n,t)},reduceRight(n,...t){return Nu(this,"reduceRight",n,t)},shift(){return gr(this,"shift")},some(n,t){return Jn(this,"some",n,t,void 0,arguments)},splice(...n){return gr(this,"splice",n)},toReversed(){return xs(this).toReversed()},toSorted(n){return xs(this).toSorted(n)},toSpliced(...n){return xs(this).toSpliced(...n)},unshift(...n){return gr(this,"unshift",n)},values(){return Ua(this,"values",n=>Bn(this,n))}};function Ua(n,t,e){const i=ga(n),s=i[t]();return i!==n&&!xn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Cm=Array.prototype;function Jn(n,t,e,i,s,r){const o=ga(n),a=o!==n&&!xn(n),l=o[t];if(l!==Cm[t]){const f=l.apply(n,r);return a?In(f):f}let c=e;o!==n&&(a?c=function(f,h){return e.call(this,Bn(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Nu(n,t,e,i){const s=ga(n),r=s!==n&&!xn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Bn(n,c)),e.call(this,c,Bn(n,u),f,n)}):e.length>3&&(o=function(c,u,f){return e.call(this,c,u,f,n)}));const l=s[t](o,...i);return a?Bn(n,l):l}function Na(n,t,e){const i=te(n);Oe(i,"iterate",Wr);const s=i[t](...e);return(s===-1||s===!1)&&qc(e[0])?(e[0]=te(e[0]),i[t](...e)):s}function gr(n,t,e=[]){di(),Hc();const i=te(n)[t].apply(n,e);return Vc(),pi(),i}const Rm=Fc("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qn));function Pm(n){qn(n)||(n=String(n));const t=te(this);return Oe(t,"has",n),t.hasOwnProperty(n)}class ud{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?zm:pd:r?dd:hd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ot(t);if(!s){let l;if(o&&(l=wm[e]))return l;if(e==="hasOwnProperty")return Pm}const a=Reflect.get(t,e,He(t)?t:i);if((qn(e)?cd.has(e):Rm(e))||(s||Oe(t,"get",e),r))return a;if(He(a)){const l=o&&Bc(e)?a:a.value;return s&&re(l)?Dl(l):l}return re(a)?s?Dl(a):_a(a):a}}class fd extends ud{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ot(t)&&Bc(e);if(!this._isShallow){const c=mi(r);if(!xn(i)&&!mi(i)&&(r=te(r),i=te(i)),!o&&He(r)&&!He(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:se(t,e),l=Reflect.set(t,e,i,He(t)?t:s);return t===te(s)&&(a?Hn(i,r)&&li(t,"set",e,i):li(t,"add",e,i)),l}deleteProperty(t,e){const i=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&li(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!qn(e)||!cd.has(e))&&Oe(t,"has",e),i}ownKeys(t){return Oe(t,"iterate",Ot(t)?"length":cs),Reflect.ownKeys(t)}}class Dm extends ud{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Lm=new fd,Im=new Dm,Um=new fd(!0);const Pl=n=>n,co=n=>Reflect.getPrototypeOf(n);function Nm(n,t,e){return function(...i){const s=this.__v_raw,r=te(s),o=Ws(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Pl:t?Js:In;return!t&&Oe(r,"iterate",l?Rl:cs),Te(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function uo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Fm(n,t){const e={get(s){const r=this.__v_raw,o=te(r),a=te(s);n||(Hn(s,a)&&Oe(o,"get",s),Oe(o,"get",a));const{has:l}=co(o),c=t?Pl:n?Js:In;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Oe(te(s),"iterate",cs),s.size},has(s){const r=this.__v_raw,o=te(r),a=te(s);return n||(Hn(s,a)&&Oe(o,"has",s),Oe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=te(a),c=t?Pl:n?Js:In;return!n&&Oe(l,"iterate",cs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Te(e,n?{add:uo("add"),set:uo("set"),delete:uo("delete"),clear:uo("clear")}:{add(s){const r=te(this),o=co(r),a=te(s),l=!t&&!xn(s)&&!mi(s)?a:s;return o.has.call(r,l)||Hn(s,l)&&o.has.call(r,s)||Hn(a,l)&&o.has.call(r,a)||(r.add(l),li(r,"add",l,l)),this},set(s,r){!t&&!xn(r)&&!mi(r)&&(r=te(r));const o=te(this),{has:a,get:l}=co(o);let c=a.call(o,s);c||(s=te(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Hn(r,u)&&li(o,"set",s,r):li(o,"add",s,r),this},delete(s){const r=te(this),{has:o,get:a}=co(r);let l=o.call(r,s);l||(s=te(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&li(r,"delete",s,void 0),c},clear(){const s=te(this),r=s.size!==0,o=s.clear();return r&&li(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Nm(s,n,t)}),e}function Xc(n,t){const e=Fm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(se(e,s)&&s in i?e:i,s,r)}const Om={get:Xc(!1,!1)},Bm={get:Xc(!1,!0)},km={get:Xc(!0,!1)};const hd=new WeakMap,dd=new WeakMap,pd=new WeakMap,zm=new WeakMap;function Hm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _a(n){return mi(n)?n:jc(n,!1,Lm,Om,hd)}function md(n){return jc(n,!1,Um,Bm,dd)}function Dl(n){return jc(n,!0,Im,km,pd)}function jc(n,t,e,i,s){if(!re(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Hm(hm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function us(n){return mi(n)?us(n.__v_raw):!!(n&&n.__v_isReactive)}function mi(n){return!!(n&&n.__v_isReadonly)}function xn(n){return!!(n&&n.__v_isShallow)}function qc(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function gd(n){return!se(n,"__v_skip")&&Object.isExtensible(n)&&Kh(n,"__v_skip",!0),n}const In=n=>re(n)?_a(n):n,Js=n=>re(n)?Dl(n):n;function He(n){return n?n.__v_isRef===!0:!1}function qt(n){return _d(n,!1)}function Vm(n){return _d(n,!0)}function _d(n,t){return He(n)?n:new Gm(n,t)}class Gm{constructor(t,e){this.dep=new Wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:In(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||xn(t)||mi(t);t=i?t:te(t),Hn(t,e)&&(this._rawValue=t,this._value=i?t:In(t),this.dep.trigger())}}function fs(n){return He(n)?n.value:n}const Wm={get:(n,t,e)=>t==="__v_raw"?n:fs(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return He(s)&&!He(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function vd(n){return us(n)?n:new Proxy(n,Wm)}class Xm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return id(this,!0),!0}get value(){const t=this.dep.track();return od(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jm(n,t,e=!1){let i,s;return Vt(n)?i=n:(i=n.get,s=n.set),new Xm(i,s,e)}const fo={},Zo=new WeakMap;let es;function qm(n,t=!1,e=es){if(e){let i=Zo.get(e);i||Zo.set(e,i=[]),i.push(n)}}function Ym(n,t,e=fe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=x=>s?x:xn(x)||s===!1||s===0?ci(x,1):ci(x);let u,f,h,d,g=!1,_=!1;if(He(n)?(f=()=>n.value,g=xn(n)):us(n)?(f=()=>c(n),g=!0):Ot(n)?(_=!0,g=n.some(x=>us(x)||xn(x)),f=()=>n.map(x=>{if(He(x))return x.value;if(us(x))return c(x);if(Vt(x))return l?l(x,2):x()})):Vt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){di();try{h()}finally{pi()}}const x=es;es=u;try{return l?l(n,3,[d]):n(d)}finally{es=x}}:f=Wn,t&&s){const x=f,F=s===!0?1/0:s;f=()=>ci(x(),F)}const m=bm(),p=()=>{u.stop(),m&&m.active&&Oc(m.effects,u)};if(r&&t){const x=t;t=(...F)=>{const R=x(...F);return p(),R}}let T=_?new Array(n.length).fill(fo):fo;const A=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const F=u.run();if(x||s||g||(_?F.some((R,M)=>Hn(R,T[M])):Hn(F,T))){h&&h();const R=es;es=u;try{const M=[F,T===fo?void 0:_&&T[0]===fo?[]:T,d];T=F,l?l(t,3,M):t(...M)}finally{es=R}}}else u.run()};return a&&a(A),u=new ed(f),u.scheduler=o?()=>o(A,!1):A,d=x=>qm(x,!1,u),h=u.onStop=()=>{const x=Zo.get(u);if(x){if(l)l(x,4);else for(const F of x)F();Zo.delete(u)}},t?i?A(!0):T=u.run():o?o(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ci(n,t=1/0,e){if(t<=0||!re(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,He(n))ci(n.value,t,e);else if(Ot(n))for(let i=0;i<n.length;i++)ci(n[i],t,e);else if(jh(n)||Ws(n))n.forEach(i=>{ci(i,t,e)});else if($h(n)){for(const i in n)ci(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ci(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(n,t,e,i){try{return i?n(...i):n()}catch(s){va(s,t,e)}}function yn(n,t,e,i){if(Vt(n)){const s=to(n,t,e,i);return s&&qh(s)&&s.catch(r=>{va(r,t,e)}),s}if(Ot(n)){const s=[];for(let r=0;r<n.length;r++)s.push(yn(n[r],t,e,i));return s}}function va(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||fe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){di(),to(r,null,10,[n,l,c]),pi();return}}$m(n,e,s,i,o)}function $m(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const qe=[];let On=-1;const js=[];let Li=null,Bs=0;const xd=Promise.resolve();let Jo=null;function eo(n){const t=Jo||xd;return n?t.then(this?n.bind(this):n):t}function Km(n){let t=On+1,e=qe.length;for(;t<e;){const i=t+e>>>1,s=qe[i],r=Xr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Yc(n){if(!(n.flags&1)){const t=Xr(n),e=qe[qe.length-1];!e||!(n.flags&2)&&t>=Xr(e)?qe.push(n):qe.splice(Km(t),0,n),n.flags|=1,yd()}}function yd(){Jo||(Jo=xd.then(Sd))}function Zm(n){Ot(n)?js.push(...n):Li&&n.id===-1?Li.splice(Bs+1,0,n):n.flags&1||(js.push(n),n.flags|=1),yd()}function Fu(n,t,e=On+1){for(;e<qe.length;e++){const i=qe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Md(n){if(js.length){const t=[...new Set(js)].sort((e,i)=>Xr(e)-Xr(i));if(js.length=0,Li){Li.push(...t);return}for(Li=t,Bs=0;Bs<Li.length;Bs++){const e=Li[Bs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Li=null,Bs=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Sd(n){try{for(On=0;On<qe.length;On++){const t=qe[On];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),to(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;On<qe.length;On++){const t=qe[On];t&&(t.flags&=-2)}On=-1,qe.length=0,Md(),Jo=null,(qe.length||js.length)&&Sd()}}let on=null,Ed=null;function Qo(n){const t=on;return on=n,Ed=n&&n.type.__scopeId||null,t}function jr(n,t=on,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&sa(-1);const r=Qo(t);let o;try{o=n(...s)}finally{Qo(r),i._d&&sa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function bd(n,t){if(on===null)return n;const e=ba(on),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=fe]=t[s];r&&(Vt(r)&&(r={mounted:r,updated:r}),r.deep&&ci(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ji(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(di(),yn(l,e,8,[n.el,a,n,t]),pi())}}function Ho(n,t){if(ke){let e=ke.provides;const i=ke.parent&&ke.parent.provides;i===e&&(e=ke.provides=Object.create(i)),e[n]=t}}function Pn(n,t,e=!1){const i=Ea();if(i||qs){let s=qs?qs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Vt(t)?t.call(i&&i.proxy):t}}const Jm=Symbol.for("v-scx"),Qm=()=>Pn(Jm);function Br(n,t,e){return Td(n,t,e)}function Td(n,t,e=fe){const{immediate:i,deep:s,flush:r,once:o}=e,a=Te({},e),l=t&&i||!t&&r!=="post";let c;if(Zr){if(r==="sync"){const d=Qm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Wn,d.resume=Wn,d.pause=Wn,d}}const u=ke;a.call=(d,g,_)=>yn(d,u,g,_);let f=!1;r==="post"?a.scheduler=d=>{Ce(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Yc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Ym(n,t,a);return Zr&&(c?c.push(h):l&&h()),h}function tg(n,t,e){const i=this.proxy,s=pe(n)?n.includes(".")?Ad(i,n):()=>i[n]:n.bind(i,i);let r;Vt(t)?r=t:(r=t.handler,e=t);const o=no(this),a=Td(s,r.bind(i),e);return o(),a}function Ad(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Pi=new WeakMap,wd=Symbol("_vte"),Cd=n=>n.__isTeleport,is=n=>n&&(n.disabled||n.disabled===""),eg=n=>n&&(n.defer||n.defer===""),Ou=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Bu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Ll=(n,t)=>{const e=n&&n.to;return pe(e)?t?t(e):null:e},ng={name:"Teleport",__isTeleport:!0,process(n,t,e,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:g,createText:_,createComment:m,parentNode:p}}=c,T=is(t.props);let{dynamicChildren:A}=t;const x=(M,L,y)=>{M.shapeFlag&16&&u(M.children,L,y,s,r,o,a,l)},F=(M=t)=>{const L=is(M.props),y=M.target=Ll(M.props,g),S=Il(y,M,_,d);y&&(o!=="svg"&&Ou(y)?o="svg":o!=="mathml"&&Bu(y)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),L||(x(M,y,S),Rr(M,!1)))},R=M=>{const L=()=>{if(Pi.get(M)===L){if(Pi.delete(M),is(M.props)){const y=p(M.el)||e;x(M,y,M.anchor),Rr(M,!0)}F(M)}};Pi.set(M,L),Ce(L,r)};if(n==null){const M=t.el=_(""),L=t.anchor=_("");if(d(M,e,i),d(L,e,i),eg(t.props)||r&&r.pendingBranch){R(t);return}T&&(x(t,e,L),Rr(t,!0)),F()}else{t.el=n.el;const M=t.anchor=n.anchor,L=Pi.get(n);if(L){L.flags|=8,Pi.delete(n),R(t);return}t.targetStart=n.targetStart;const y=t.target=n.target,S=t.targetAnchor=n.targetAnchor,D=is(n.props),B=D?e:y,k=D?M:S;if(o==="svg"||Ou(y)?o="svg":(o==="mathml"||Bu(y))&&(o="mathml"),A?(h(n.dynamicChildren,A,B,s,r,o,a),nu(n,t,!0)):l||f(n,t,B,k,s,r,o,a,!1),T)D?t.props&&n.props&&t.props.to!==n.props.to&&(t.props.to=n.props.to):ho(t,e,M,c,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const nt=t.target=Ll(t.props,g);nt&&ho(t,nt,null,c,0)}else D&&ho(t,y,S,c,1);Rr(t,T)}},remove(n,t,e,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:h}=n,d=r||!is(h),g=Pi.get(n);if(g&&(g.flags|=8,Pi.delete(n)),f&&(s(c),s(u)),r&&s(l),!g&&o&16)for(let _=0;_<a.length;_++){const m=a[_];i(m,t,e,d,!!m.dynamicChildren)}},move:ho,hydrate:ig};function ho(n,t,e,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,t,e);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=r===2;if(f&&i(o,t,e),!Pi.has(n)&&(!f||is(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],t,e,2);f&&i(a,t,e)}function ig(n,t,e,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function h(m,p){let T=p;for(;T;){if(T&&T.nodeType===8){if(T.data==="teleport start anchor")t.targetStart=T;else if(T.data==="teleport anchor"){t.targetAnchor=T,m._lpa=t.targetAnchor&&o(t.targetAnchor);break}}T=o(T)}}function d(m,p){p.anchor=f(o(m),p,a(m),e,i,s,r)}const g=t.target=Ll(t.props,l),_=is(t.props);if(g){const m=g._lpa||g.firstChild;t.shapeFlag&16&&(_?(d(n,t),h(g,m),t.targetAnchor||Il(g,t,u,c,a(n)===g?n:null)):(t.anchor=o(n),h(g,m),t.targetAnchor||Il(g,t,u,c),f(m&&o(m),t,g,e,i,s,r))),Rr(t,_)}else _&&t.shapeFlag&16&&(d(n,t),t.targetStart=n,t.targetAnchor=o(n));return t.anchor&&o(t.anchor)}const $c=ng;function Rr(n,t){const e=n.ctx;if(e&&e.ut){let i,s;for(t?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",e.uid),i=i.nextSibling;e.ut()}}function Il(n,t,e,i,s=null){const r=t.targetStart=e(""),o=t.targetAnchor=e("");return r[wd]=o,n&&(i(r,n,s),i(o,n,s)),o}const dn=Symbol("_leaveCb"),_r=Symbol("_enterCb");function Rd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $n(()=>{n.isMounted=!0}),Qc(()=>{n.isUnmounting=!0}),n}const un=[Function,Array],Pd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},Dd=n=>{const t=n.subTree;return t.component?Dd(t.component):t},sg={name:"BaseTransition",props:Pd,setup(n,{slots:t}){const e=Ea(),i=Rd();return()=>{const s=t.default&&Kc(t.default(),!0),r=s&&s.length?Ld(s):e.subTree?$e():void 0;if(!r)return;const o=te(n),{mode:a}=o;if(i.isLeaving)return Fa(r);const l=ku(r);if(!l)return Fa(r);let c=qr(l,o,i,e,f=>c=f);l.type!==Be&&zi(l,c);let u=e.subTree&&ku(e.subTree);if(u&&u.type!==Be&&!Ni(u,l)&&Dd(e).type!==Be){let f=qr(u,o,i,e);if(zi(u,f),a==="out-in"&&l.type!==Be)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},Fa(r);a==="in-out"&&l.type!==Be?f.delayLeave=(h,d,g)=>{const _=Id(i,u);_[String(u.key)]=u,h[dn]=()=>{d(),h[dn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Ld(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Be){t=e;break}}return t}const rg=sg;function Id(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function qr(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:T,onAppearCancelled:A}=t,x=String(n.key),F=Id(e,n),R=(y,S)=>{y&&yn(y,i,9,S)},M=(y,S)=>{const D=S[1];R(y,S),Ot(y)?y.every(B=>B.length<=1)&&D():y.length<=1&&D()},L={mode:o,persisted:a,beforeEnter(y){let S=l;if(!e.isMounted)if(r)S=m||l;else return;y[dn]&&y[dn](!0);const D=F[x];D&&Ni(n,D)&&D.el[dn]&&D.el[dn](),R(S,[y])},enter(y){if(F[x]===n)return;let S=c,D=u,B=f;if(!e.isMounted)if(r)S=p||c,D=T||u,B=A||f;else return;let k=!1;y[_r]=lt=>{k||(k=!0,lt?R(B,[y]):R(D,[y]),L.delayedLeave&&L.delayedLeave(),y[_r]=void 0)};const nt=y[_r].bind(null,!1);S?M(S,[y,nt]):nt()},leave(y,S){const D=String(n.key);if(y[_r]&&y[_r](!0),e.isUnmounting)return S();R(h,[y]);let B=!1;y[dn]=nt=>{B||(B=!0,S(),nt?R(_,[y]):R(g,[y]),y[dn]=void 0,F[D]===n&&delete F[D])};const k=y[dn].bind(null,!1);F[D]=n,d?M(d,[y,k]):k()},clone(y){const S=qr(y,t,e,i,s);return s&&s(S),S}};return L}function Fa(n){if(xa(n))return n=gi(n),n.children=null,n}function ku(n){if(!xa(n))return Cd(n.type)&&n.children?Ld(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Vt(e.default))return e.default()}}function zi(n,t){n.shapeFlag&6&&n.component?(n.transition=t,zi(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Kc(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===Me?(o.patchFlag&128&&s++,i=i.concat(Kc(o.children,t,a))):(t||o.type!==Be)&&i.push(a!=null?gi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ve(n,t){return Vt(n)?Te({name:n.name},t,{setup:n}):n}function Ud(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ta=new WeakMap;function kr(n,t,e,i,s=!1){if(Ot(n)){n.forEach((_,m)=>kr(_,t&&(Ot(t)?t[m]:t),e,i,s));return}if(hs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&kr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?ba(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===fe?a.refs={}:a.refs,f=a.setupState,h=te(f),d=f===fe?Xh:_=>zu(u,_)?!1:se(h,_),g=(_,m)=>!(m&&zu(u,m));if(c!=null&&c!==l){if(Hu(t),pe(c))u[c]=null,d(c)&&(f[c]=null);else if(He(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Vt(l))to(l,a,12,[o,u]);else{const _=pe(l),m=He(l);if(_||m){const p=()=>{if(n.f){const T=_?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ot(T)&&Oc(T,r);else if(Ot(T))T.includes(r)||T.push(r);else if(_)u[l]=[r],d(l)&&(f[l]=u[l]);else{const A=[r];g(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{p(),ta.delete(n)};T.id=-1,ta.set(n,T),Ce(T,e)}else Hu(n),p()}}}function Hu(n){const t=ta.get(n);t&&(t.flags|=8,ta.delete(n))}ma().requestIdleCallback;ma().cancelIdleCallback;const hs=n=>!!n.type.__asyncLoader,xa=n=>n.type.__isKeepAlive,og={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const e=Ea(),i=e.ctx;if(!i.renderer)return()=>{const T=t.default&&t.default();return T&&T.length===1?T[0]:T};const s=new Map,r=new Set;let o=null;const a=e.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(T,A,x,F,R)=>{const M=T.component;c(T,A,x,0,a),l(M.vnode,T,A,x,M,a,F,T.slotScopeIds,R),Ce(()=>{M.isDeactivated=!1,M.a&&Xs(M.a);const L=T.props&&T.props.onVnodeMounted;L&&hn(L,M.parent,T)},a)},i.deactivate=T=>{const A=T.component;na(A.m),na(A.a),c(T,h,null,1,a),Ce(()=>{A.da&&Xs(A.da);const x=T.props&&T.props.onVnodeUnmounted;x&&hn(x,A.parent,T),A.isDeactivated=!0},a)};function d(T){Oa(T),u(T,e,a,!0)}function g(T){s.forEach((A,x)=>{const F=kl(hs(A)?A.type.__asyncResolved||{}:A.type);F&&!T(F)&&_(x)})}function _(T){const A=s.get(T);A&&(!o||!Ni(A,o))?d(A):o&&Oa(o),s.delete(T),r.delete(T)}Br(()=>[n.include,n.exclude],([T,A])=>{T&&g(x=>Pr(T,x)),A&&g(x=>!Pr(A,x))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(ia(e.subTree.type)?Ce(()=>{s.set(m,po(e.subTree))},e.subTree.suspense):s.set(m,po(e.subTree)))};return $n(p),Jc(p),Qc(()=>{s.forEach(T=>{const{subTree:A,suspense:x}=e,F=po(A);if(T.type===F.type&&T.key===F.key){Oa(F);const R=F.component.da;R&&Ce(R,x);return}d(T)})}),()=>{if(m=null,!t.default)return o=null;const T=t.default(),A=T[0];if(T.length>1)return o=null,T;if(!$r(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return o=null,A;let x=po(A);if(x.type===Be)return o=null,x;const F=x.type,R=kl(hs(x)?x.type.__asyncResolved||{}:F),{include:M,exclude:L,max:y}=n;if(M&&(!R||!Pr(M,R))||L&&R&&Pr(L,R))return x.shapeFlag&=-257,o=x,A;const S=x.key==null?F:x.key,D=s.get(S);return x.el&&(x=gi(x),A.shapeFlag&128&&(A.ssContent=x)),m=S,D?(x.el=D.el,x.component=D.component,x.transition&&zi(x,x.transition),x.shapeFlag|=512,r.delete(S),r.add(S)):(r.add(S),y&&r.size>parseInt(y,10)&&_(r.values().next().value)),x.shapeFlag|=256,o=x,ia(A.type)?A:x}}},ag=og;function Pr(n,t){return Ot(n)?n.some(e=>Pr(e,t)):pe(n)?n.split(",").includes(t):fm(n)?(n.lastIndex=0,n.test(t)):!1}function Zc(n,t){Fd(n,"a",t)}function Nd(n,t){Fd(n,"da",t)}function Fd(n,t,e=ke){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ya(t,i,e),e){let s=e.parent;for(;s&&s.parent;)xa(s.parent.vnode)&&lg(i,t,e,s),s=s.parent}}function lg(n,t,e,i){const s=ya(t,n,i,!0);cr(()=>{Oc(i[t],s)},e)}function Oa(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function po(n){return n.shapeFlag&128?n.ssContent:n}function ya(n,t,e=ke,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{di();const a=no(e),l=yn(t,e,n,o);return a(),pi(),l});return i?s.unshift(r):s.push(r),r}}const vi=n=>(t,e=ke)=>{(!Zr||n==="sp")&&ya(n,(...i)=>t(...i),e)},cg=vi("bm"),$n=vi("m"),ug=vi("bu"),Jc=vi("u"),Qc=vi("bum"),cr=vi("um"),fg=vi("sp"),hg=vi("rtg"),dg=vi("rtc");function pg(n,t=ke){ya("ec",n,t)}const mg="components",Od=Symbol.for("v-ndc");function gg(n){return pe(n)?_g(mg,n,!1)||n:n||Od}function _g(n,t,e=!0,i=!1){const s=on||ke;if(s){const r=s.type;{const a=kl(r,!1);if(a&&(a===t||a===Ke(t)||a===pa(Ke(t))))return r}const o=Vu(s[n]||r[n],t)||Vu(s.appContext[n],t);return!o&&i?r:o}}function Vu(n,t){return n&&(n[t]||n[Ke(t)]||n[pa(Ke(t))])}function Xn(n,t,e,i){let s;const r=e,o=Ot(n);if(o||pe(n)){const a=o&&us(n);let l=!1,c=!1;a&&(l=!xn(n),c=mi(n),n=ga(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=t(l?c?Js(In(n[u])):In(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(re(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Ul=n=>n?ep(n)?ba(n):Ul(n.parent):null,zr=Te(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ul(n.parent),$root:n=>Ul(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>kd(n),$forceUpdate:n=>n.f||(n.f=()=>{Yc(n.update)}),$nextTick:n=>n.n||(n.n=eo.bind(n.proxy)),$watch:n=>tg.bind(n)}),Ba=(n,t)=>n!==fe&&!n.__isScriptSetup&&se(n,t),vg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ba(i,t))return o[t]=1,i[t];if(s!==fe&&se(s,t))return o[t]=2,s[t];if(se(r,t))return o[t]=3,r[t];if(e!==fe&&se(e,t))return o[t]=4,e[t];Nl&&(o[t]=0)}}const c=zr[t];let u,f;if(c)return t==="$attrs"&&Oe(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==fe&&se(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,se(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ba(s,t)?(s[t]=e,!0):i!==fe&&se(i,t)?(i[t]=e,!0):se(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==fe&&a[0]!=="$"&&se(n,a)||Ba(t,a)||se(r,a)||se(i,a)||se(zr,a)||se(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:se(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Gu(n){return Ot(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Nl=!0;function xg(n){const t=kd(n),e=n.proxy,i=n.ctx;Nl=!1,t.beforeCreate&&Wu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:A,unmounted:x,render:F,renderTracked:R,renderTriggered:M,errorCaptured:L,serverPrefetch:y,expose:S,inheritAttrs:D,components:B,directives:k,filters:nt}=t;if(c&&yg(c,i,null),o)for(const rt in o){const K=o[rt];Vt(K)&&(i[rt]=K.bind(e))}if(s){const rt=s.call(e,e);re(rt)&&(n.data=_a(rt))}if(Nl=!0,r)for(const rt in r){const K=r[rt],_t=Vt(K)?K.bind(e,e):Vt(K.get)?K.get.bind(e,e):Wn,yt=!Vt(K)&&Vt(K.set)?K.set.bind(e):Wn,Ct=wn({get:_t,set:yt});Object.defineProperty(i,rt,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:It=>Ct.value=It})}if(a)for(const rt in a)Bd(a[rt],i,e,rt);if(l){const rt=Vt(l)?l.call(e):l;Reflect.ownKeys(rt).forEach(K=>{Ho(K,rt[K])})}u&&Wu(u,n,"c");function st(rt,K){Ot(K)?K.forEach(_t=>rt(_t.bind(e))):K&&rt(K.bind(e))}if(st(cg,f),st($n,h),st(ug,d),st(Jc,g),st(Zc,_),st(Nd,m),st(pg,L),st(dg,R),st(hg,M),st(Qc,T),st(cr,x),st(fg,y),Ot(S))if(S.length){const rt=n.exposed||(n.exposed={});S.forEach(K=>{Object.defineProperty(rt,K,{get:()=>e[K],set:_t=>e[K]=_t,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===Wn&&(n.render=F),D!=null&&(n.inheritAttrs=D),B&&(n.components=B),k&&(n.directives=k),y&&Ud(n)}function yg(n,t,e=Wn){Ot(n)&&(n=Fl(n));for(const i in n){const s=n[i];let r;re(s)?"default"in s?r=Pn(s.from||i,s.default,!0):r=Pn(s.from||i):r=Pn(s),He(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Wu(n,t,e){yn(Ot(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Bd(n,t,e,i){let s=i.includes(".")?Ad(e,i):()=>e[i];if(pe(n)){const r=t[n];Vt(r)&&Br(s,r)}else if(Vt(n))Br(s,n.bind(e));else if(re(n))if(Ot(n))n.forEach(r=>Bd(r,t,e,i));else{const r=Vt(n.handler)?n.handler.bind(e):t[n.handler];Vt(r)&&Br(s,r,n)}}function kd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ea(l,c,o,!0)),ea(l,t,o)),re(t)&&r.set(t,l),l}function ea(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ea(n,r,e,!0),s&&s.forEach(o=>ea(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Mg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Mg={data:Xu,props:ju,emits:ju,methods:Dr,computed:Dr,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Dr,directives:Dr,watch:Eg,provide:Xu,inject:Sg};function Xu(n,t){return t?n?function(){return Te(Vt(n)?n.call(this,this):n,Vt(t)?t.call(this,this):t)}:t:n}function Sg(n,t){return Dr(Fl(n),Fl(t))}function Fl(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function We(n,t){return n?[...new Set([].concat(n,t))]:t}function Dr(n,t){return n?Te(Object.create(null),n,t):t}function ju(n,t){return n?Ot(n)&&Ot(t)?[...new Set([...n,...t])]:Te(Object.create(null),Gu(n),Gu(t??{})):t}function Eg(n,t){if(!n)return t;if(!t)return n;const e=Te(Object.create(null),n);for(const i in t)e[i]=We(n[i],t[i]);return e}function zd(){return{app:null,config:{isNativeTag:Xh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bg=0;function Tg(n,t){return function(i,s=null){Vt(i)||(i=Te({},i)),s!=null&&!re(s)&&(s=null);const r=zd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:bg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:n_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Vt(u.install)?(o.add(u),u.install(c,...f)):Vt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ee(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ba(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(yn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=qs;qs=c;try{return u()}finally{qs=f}}};return c}}let qs=null;const Ag=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Ke(t)}Modifiers`]||n[`${gs(t)}Modifiers`];function wg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||fe;let s=e;const r=t.startsWith("update:"),o=r&&Ag(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>pe(u)?u.trim():u)),o.number&&(s=e.map(kc)));let a,l=i[a=Da(t)]||i[a=Da(Ke(t))];!l&&r&&(l=i[a=Da(gs(t))]),l&&yn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,yn(c,n,6,s)}}const Cg=new WeakMap;function Hd(n,t,e=!1){const i=e?Cg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Vt(n)){const l=c=>{const u=Hd(c,t,!0);u&&(a=!0,Te(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(re(n)&&i.set(n,null),null):(Ot(r)?r.forEach(l=>o[l]=null):Te(o,r),re(n)&&i.set(n,o),o)}function Ma(n,t){return!n||!fa(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(n,t[0].toLowerCase()+t.slice(1))||se(n,gs(t))||se(n,t))}function qu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Qo(n);let p,T;try{if(e.shapeFlag&4){const x=s||i,F=x;p=kn(c.call(F,x,u,f,d,h,g)),T=a}else{const x=t;p=kn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),T=t.props?a:Rg(a)}}catch(x){Hr.length=0,va(x,n,1),p=Ee(Be)}let A=p;if(T&&_!==!1){const x=Object.keys(T),{shapeFlag:F}=A;x.length&&F&7&&(r&&x.some(ha)&&(T=Pg(T,r)),A=gi(A,T,!1,!0))}return e.dirs&&(A=gi(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&zi(A,e.transition),p=A,Qo(m),p}const Rg=n=>{let t;for(const e in n)(e==="class"||e==="style"||fa(e))&&((t||(t={}))[e]=n[e]);return t},Pg=(n,t)=>{const e={};for(const i in n)(!ha(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Dg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Yu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Vd(o,i,h)&&!Ma(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yu(i,o,c):!0:!!o;return!1}function Yu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Vd(t,n,r)&&!Ma(e,r))return!0}return!1}function Vd(n,t,e){const i=n[e],s=t[e];return e==="style"&&re(i)&&re(s)?!zc(i,s):i!==s}function Lg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Gd={},Wd=()=>Object.create(Gd),Xd=n=>Object.getPrototypeOf(n)===Gd;function Ig(n,t,e,i=!1){const s={},r=Wd();n.propsDefaults=Object.create(null),jd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:md(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Ug(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=te(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ma(n.emitsOptions,h))continue;const d=t[h];if(l)if(se(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Ke(h);s[g]=Ol(l,a,g,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{jd(n,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!se(t,f)&&((u=gs(f))===f||!se(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Ol(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!se(t,f))&&(delete r[f],c=!0)}c&&li(n.attrs,"set","")}function jd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Nr(l))continue;const c=t[l];let u;s&&se(s,u=Ke(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ma(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=te(e),c=a||fe;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Ol(s,l,f,c[f],n,!se(c,f))}}return o}function Ol(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Vt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=no(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===gs(e))&&(i=!0))}return i}const Ng=new WeakMap;function qd(n,t,e=!1){const i=e?Ng:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Vt(n)){const u=f=>{l=!0;const[h,d]=qd(f,t,!0);Te(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return re(n)&&i.set(n,Gs),Gs;if(Ot(r))for(let u=0;u<r.length;u++){const f=Ke(r[u]);$u(f)&&(o[f]=fe)}else if(r)for(const u in r){const f=Ke(u);if($u(f)){const h=r[u],d=o[f]=Ot(h)||Vt(h)?{type:h}:Te({},h),g=d.type;let _=!1,m=!0;if(Ot(g))for(let p=0;p<g.length;++p){const T=g[p],A=Vt(T)&&T.name;if(A==="Boolean"){_=!0;break}else A==="String"&&(m=!1)}else _=Vt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||se(d,"default"))&&a.push(f)}}const c=[o,a];return re(n)&&i.set(n,c),c}function $u(n){return n[0]!=="$"&&!Nr(n)}const tu=n=>n==="_"||n==="_ctx"||n==="$stable",eu=n=>Ot(n)?n.map(kn):[kn(n)],Fg=(n,t,e)=>{if(t._n)return t;const i=jr((...s)=>eu(t(...s)),e);return i._c=!1,i},Yd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(tu(s))continue;const r=n[s];if(Vt(r))t[s]=Fg(s,r,i);else if(r!=null){const o=eu(r);t[s]=()=>o}}},$d=(n,t)=>{const e=eu(t);n.slots.default=()=>e},Kd=(n,t,e)=>{for(const i in t)(e||!tu(i))&&(n[i]=t[i])},Og=(n,t,e)=>{const i=n.slots=Wd();if(n.vnode.shapeFlag&32){const s=t._;s?(Kd(i,t,e),e&&Kh(i,"_",s,!0)):Yd(t,i)}else t&&$d(n,t)},Bg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=fe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Kd(s,t,e):(r=!t.$stable,Yd(t,s)),o=t}else t&&($d(n,t),o={default:1});if(r)for(const a in s)!tu(a)&&o[a]==null&&delete s[a]},Ce=Gg;function kg(n){return zg(n)}function zg(n,t){const e=ma();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Wn,insertStaticContent:g}=n,_=(C,P,b,W=null,z=null,q=null,it=void 0,ct=null,Q=!!P.dynamicChildren)=>{if(C===P)return;C&&!Ni(C,P)&&(W=I(C),It(C,z,q,!0),C=null),P.patchFlag===-2&&(Q=!1,P.dynamicChildren=null);const{type:E,ref:v,shapeFlag:U}=P;switch(E){case Sa:m(C,P,b,W);break;case Be:p(C,P,b,W);break;case Vo:C==null&&T(P,b,W,it);break;case Me:B(C,P,b,W,z,q,it,ct,Q);break;default:U&1?F(C,P,b,W,z,q,it,ct,Q):U&6?k(C,P,b,W,z,q,it,ct,Q):(U&64||U&128)&&E.process(C,P,b,W,z,q,it,ct,Q,O)}v!=null&&z?kr(v,C&&C.ref,q,P||C,!P):v==null&&C&&C.ref!=null&&kr(C.ref,null,q,C,!0)},m=(C,P,b,W)=>{if(C==null)i(P.el=a(P.children),b,W);else{const z=P.el=C.el;P.children!==C.children&&c(z,P.children)}},p=(C,P,b,W)=>{C==null?i(P.el=l(P.children||""),b,W):P.el=C.el},T=(C,P,b,W)=>{[C.el,C.anchor]=g(C.children,P,b,W,C.el,C.anchor)},A=({el:C,anchor:P},b,W)=>{let z;for(;C&&C!==P;)z=h(C),i(C,b,W),C=z;i(P,b,W)},x=({el:C,anchor:P})=>{let b;for(;C&&C!==P;)b=h(C),s(C),C=b;s(P)},F=(C,P,b,W,z,q,it,ct,Q)=>{if(P.type==="svg"?it="svg":P.type==="math"&&(it="mathml"),C==null)R(P,b,W,z,q,it,ct,Q);else{const E=C.el&&C.el._isVueCE?C.el:null;try{E&&E._beginPatch(),y(C,P,z,q,it,ct,Q)}finally{E&&E._endPatch()}}},R=(C,P,b,W,z,q,it,ct)=>{let Q,E;const{props:v,shapeFlag:U,transition:X,dirs:J}=C;if(Q=C.el=o(C.type,q,v&&v.is,v),U&8?u(Q,C.children):U&16&&L(C.children,Q,null,W,z,ka(C,q),it,ct),J&&ji(C,null,W,"created"),M(Q,C,C.scopeId,it,W),v){for(const vt in v)vt!=="value"&&!Nr(vt)&&r(Q,vt,null,v[vt],q,W);"value"in v&&r(Q,"value",null,v.value,q),(E=v.onVnodeBeforeMount)&&hn(E,W,C)}J&&ji(C,null,W,"beforeMount");const Z=Hg(z,X);Z&&X.beforeEnter(Q),i(Q,P,b),((E=v&&v.onVnodeMounted)||Z||J)&&Ce(()=>{try{E&&hn(E,W,C),Z&&X.enter(Q),J&&ji(C,null,W,"mounted")}finally{}},z)},M=(C,P,b,W,z)=>{if(b&&d(C,b),W)for(let q=0;q<W.length;q++)d(C,W[q]);if(z){let q=z.subTree;if(P===q||ia(q.type)&&(q.ssContent===P||q.ssFallback===P)){const it=z.vnode;M(C,it,it.scopeId,it.slotScopeIds,z.parent)}}},L=(C,P,b,W,z,q,it,ct,Q=0)=>{for(let E=Q;E<C.length;E++){const v=C[E]=ct?ai(C[E]):kn(C[E]);_(null,v,P,b,W,z,q,it,ct)}},y=(C,P,b,W,z,q,it)=>{const ct=P.el=C.el;let{patchFlag:Q,dynamicChildren:E,dirs:v}=P;Q|=C.patchFlag&16;const U=C.props||fe,X=P.props||fe;let J;if(b&&qi(b,!1),(J=X.onVnodeBeforeUpdate)&&hn(J,b,P,C),v&&ji(P,C,b,"beforeUpdate"),b&&qi(b,!0),(U.innerHTML&&X.innerHTML==null||U.textContent&&X.textContent==null)&&u(ct,""),E?S(C.dynamicChildren,E,ct,b,W,ka(P,z),q):it||K(C,P,ct,null,b,W,ka(P,z),q,!1),Q>0){if(Q&16)D(ct,U,X,b,z);else if(Q&2&&U.class!==X.class&&r(ct,"class",null,X.class,z),Q&4&&r(ct,"style",U.style,X.style,z),Q&8){const Z=P.dynamicProps;for(let vt=0;vt<Z.length;vt++){const ht=Z[vt],mt=U[ht],Nt=X[ht];(Nt!==mt||ht==="value")&&r(ct,ht,mt,Nt,z,b)}}Q&1&&C.children!==P.children&&u(ct,P.children)}else!it&&E==null&&D(ct,U,X,b,z);((J=X.onVnodeUpdated)||v)&&Ce(()=>{J&&hn(J,b,P,C),v&&ji(P,C,b,"updated")},W)},S=(C,P,b,W,z,q,it)=>{for(let ct=0;ct<P.length;ct++){const Q=C[ct],E=P[ct],v=Q.el&&(Q.type===Me||!Ni(Q,E)||Q.shapeFlag&198)?f(Q.el):b;_(Q,E,v,null,W,z,q,it,!0)}},D=(C,P,b,W,z)=>{if(P!==b){if(P!==fe)for(const q in P)!Nr(q)&&!(q in b)&&r(C,q,P[q],null,z,W);for(const q in b){if(Nr(q))continue;const it=b[q],ct=P[q];it!==ct&&q!=="value"&&r(C,q,ct,it,z,W)}"value"in b&&r(C,"value",P.value,b.value,z)}},B=(C,P,b,W,z,q,it,ct,Q)=>{const E=P.el=C?C.el:a(""),v=P.anchor=C?C.anchor:a("");let{patchFlag:U,dynamicChildren:X,slotScopeIds:J}=P;J&&(ct=ct?ct.concat(J):J),C==null?(i(E,b,W),i(v,b,W),L(P.children||[],b,v,z,q,it,ct,Q)):U>0&&U&64&&X&&C.dynamicChildren&&C.dynamicChildren.length===X.length?(S(C.dynamicChildren,X,b,z,q,it,ct),(P.key!=null||z&&P===z.subTree)&&nu(C,P,!0)):K(C,P,b,v,z,q,it,ct,Q)},k=(C,P,b,W,z,q,it,ct,Q)=>{P.slotScopeIds=ct,C==null?P.shapeFlag&512?z.ctx.activate(P,b,W,it,Q):nt(P,b,W,z,q,it,Q):lt(C,P,Q)},nt=(C,P,b,W,z,q,it)=>{const ct=C.component=Kg(C,W,z);if(xa(C)&&(ct.ctx.renderer=O),Zg(ct,!1,it),ct.asyncDep){if(z&&z.registerDep(ct,st,it),!C.el){const Q=ct.subTree=Ee(Be);p(null,Q,P,b),C.placeholder=Q.el}}else st(ct,C,P,b,z,q,it)},lt=(C,P,b)=>{const W=P.component=C.component;if(Dg(C,P,b))if(W.asyncDep&&!W.asyncResolved){rt(W,P,b);return}else W.next=P,W.update();else P.el=C.el,W.vnode=P},st=(C,P,b,W,z,q,it)=>{const ct=()=>{if(C.isMounted){let{next:U,bu:X,u:J,parent:Z,vnode:vt}=C;{const St=Zd(C);if(St){U&&(U.el=vt.el,rt(C,U,it)),St.asyncDep.then(()=>{Ce(()=>{C.isUnmounted||E()},z)});return}}let ht=U,mt;qi(C,!1),U?(U.el=vt.el,rt(C,U,it)):U=vt,X&&Xs(X),(mt=U.props&&U.props.onVnodeBeforeUpdate)&&hn(mt,Z,U,vt),qi(C,!0);const Nt=qu(C),dt=C.subTree;C.subTree=Nt,_(dt,Nt,f(dt.el),I(dt),C,z,q),U.el=Nt.el,ht===null&&Lg(C,Nt.el),J&&Ce(J,z),(mt=U.props&&U.props.onVnodeUpdated)&&Ce(()=>hn(mt,Z,U,vt),z)}else{let U;const{el:X,props:J}=P,{bm:Z,m:vt,parent:ht,root:mt,type:Nt}=C,dt=hs(P);qi(C,!1),Z&&Xs(Z),!dt&&(U=J&&J.onVnodeBeforeMount)&&hn(U,ht,P),qi(C,!0);{mt.ce&&mt.ce._hasShadowRoot()&&mt.ce._injectChildStyle(Nt,C.parent?C.parent.type:void 0);const St=C.subTree=qu(C);_(null,St,b,W,C,z,q),P.el=St.el}if(vt&&Ce(vt,z),!dt&&(U=J&&J.onVnodeMounted)){const St=P;Ce(()=>hn(U,ht,St),z)}(P.shapeFlag&256||ht&&hs(ht.vnode)&&ht.vnode.shapeFlag&256)&&C.a&&Ce(C.a,z),C.isMounted=!0,P=b=W=null}};C.scope.on();const Q=C.effect=new ed(ct);C.scope.off();const E=C.update=Q.run.bind(Q),v=C.job=Q.runIfDirty.bind(Q);v.i=C,v.id=C.uid,Q.scheduler=()=>Yc(v),qi(C,!0),E()},rt=(C,P,b)=>{P.component=C;const W=C.vnode.props;C.vnode=P,C.next=null,Ug(C,P.props,W,b),Bg(C,P.children,b),di(),Fu(C),pi()},K=(C,P,b,W,z,q,it,ct,Q=!1)=>{const E=C&&C.children,v=C?C.shapeFlag:0,U=P.children,{patchFlag:X,shapeFlag:J}=P;if(X>0){if(X&128){yt(E,U,b,W,z,q,it,ct,Q);return}else if(X&256){_t(E,U,b,W,z,q,it,ct,Q);return}}J&8?(v&16&&Et(E,z,q),U!==E&&u(b,U)):v&16?J&16?yt(E,U,b,W,z,q,it,ct,Q):Et(E,z,q,!0):(v&8&&u(b,""),J&16&&L(U,b,W,z,q,it,ct,Q))},_t=(C,P,b,W,z,q,it,ct,Q)=>{C=C||Gs,P=P||Gs;const E=C.length,v=P.length,U=Math.min(E,v);let X;for(X=0;X<U;X++){const J=P[X]=Q?ai(P[X]):kn(P[X]);_(C[X],J,b,null,z,q,it,ct,Q)}E>v?Et(C,z,q,!0,!1,U):L(P,b,W,z,q,it,ct,Q,U)},yt=(C,P,b,W,z,q,it,ct,Q)=>{let E=0;const v=P.length;let U=C.length-1,X=v-1;for(;E<=U&&E<=X;){const J=C[E],Z=P[E]=Q?ai(P[E]):kn(P[E]);if(Ni(J,Z))_(J,Z,b,null,z,q,it,ct,Q);else break;E++}for(;E<=U&&E<=X;){const J=C[U],Z=P[X]=Q?ai(P[X]):kn(P[X]);if(Ni(J,Z))_(J,Z,b,null,z,q,it,ct,Q);else break;U--,X--}if(E>U){if(E<=X){const J=X+1,Z=J<v?P[J].el:W;for(;E<=X;)_(null,P[E]=Q?ai(P[E]):kn(P[E]),b,Z,z,q,it,ct,Q),E++}}else if(E>X)for(;E<=U;)It(C[E],z,q,!0),E++;else{const J=E,Z=E,vt=new Map;for(E=Z;E<=X;E++){const xt=P[E]=Q?ai(P[E]):kn(P[E]);xt.key!=null&&vt.set(xt.key,E)}let ht,mt=0;const Nt=X-Z+1;let dt=!1,St=0;const Ut=new Array(Nt);for(E=0;E<Nt;E++)Ut[E]=0;for(E=J;E<=U;E++){const xt=C[E];if(mt>=Nt){It(xt,z,q,!0);continue}let zt;if(xt.key!=null)zt=vt.get(xt.key);else for(ht=Z;ht<=X;ht++)if(Ut[ht-Z]===0&&Ni(xt,P[ht])){zt=ht;break}zt===void 0?It(xt,z,q,!0):(Ut[zt-Z]=E+1,zt>=St?St=zt:dt=!0,_(xt,P[zt],b,null,z,q,it,ct,Q),mt++)}const Bt=dt?Vg(Ut):Gs;for(ht=Bt.length-1,E=Nt-1;E>=0;E--){const xt=Z+E,zt=P[xt],Gt=P[xt+1],oe=xt+1<v?Gt.el||Jd(Gt):W;Ut[E]===0?_(null,zt,b,oe,z,q,it,ct,Q):dt&&(ht<0||E!==Bt[ht]?Ct(zt,b,oe,2):ht--)}}},Ct=(C,P,b,W,z=null)=>{const{el:q,type:it,transition:ct,children:Q,shapeFlag:E}=C;if(E&6){Ct(C.component.subTree,P,b,W);return}if(E&128){C.suspense.move(P,b,W);return}if(E&64){it.move(C,P,b,O);return}if(it===Me){i(q,P,b);for(let U=0;U<Q.length;U++)Ct(Q[U],P,b,W);i(C.anchor,P,b);return}if(it===Vo){A(C,P,b);return}if(W!==2&&E&1&&ct)if(W===0)ct.persisted&&!q[dn]?i(q,P,b):(ct.beforeEnter(q),i(q,P,b),Ce(()=>ct.enter(q),z));else{const{leave:U,delayLeave:X,afterLeave:J}=ct,Z=()=>{C.ctx.isUnmounted?s(q):i(q,P,b)},vt=()=>{const ht=q._isLeaving||!!q[dn];q._isLeaving&&q[dn](!0),ct.persisted&&!ht?Z():U(q,()=>{Z(),J&&J()})};X?X(q,Z,vt):vt()}else i(q,P,b)},It=(C,P,b,W=!1,z=!1)=>{const{type:q,props:it,ref:ct,children:Q,dynamicChildren:E,shapeFlag:v,patchFlag:U,dirs:X,cacheIndex:J,memo:Z}=C;if(U===-2&&(z=!1),ct!=null&&(di(),kr(ct,null,b,C,!0),pi()),J!=null&&(P.renderCache[J]=void 0),v&256){P.ctx.deactivate(C);return}const vt=v&1&&X,ht=!hs(C);let mt;if(ht&&(mt=it&&it.onVnodeBeforeUnmount)&&hn(mt,P,C),v&6)pt(C.component,b,W);else{if(v&128){C.suspense.unmount(b,W);return}vt&&ji(C,null,P,"beforeUnmount"),v&64?C.type.remove(C,P,b,O,W):E&&!E.hasOnce&&(q!==Me||U>0&&U&64)?Et(E,P,b,!1,!0):(q===Me&&U&384||!z&&v&16)&&Et(Q,P,b),W&&$t(C)}const Nt=Z!=null&&J==null;(ht&&(mt=it&&it.onVnodeUnmounted)||vt||Nt)&&Ce(()=>{mt&&hn(mt,P,C),vt&&ji(C,null,P,"unmounted"),Nt&&(C.el=null)},b)},$t=C=>{const{type:P,el:b,anchor:W,transition:z}=C;if(P===Me){at(b,W);return}if(P===Vo){x(C);return}const q=()=>{s(b),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(C.shapeFlag&1&&z&&!z.persisted){const{leave:it,delayLeave:ct}=z,Q=()=>it(b,q);ct?ct(C.el,q,Q):Q()}else q()},at=(C,P)=>{let b;for(;C!==P;)b=h(C),s(C),C=b;s(P)},pt=(C,P,b)=>{const{bum:W,scope:z,job:q,subTree:it,um:ct,m:Q,a:E}=C;na(Q),na(E),W&&Xs(W),z.stop(),q&&(q.flags|=8,It(it,C,P,b)),ct&&Ce(ct,P),Ce(()=>{C.isUnmounted=!0},P)},Et=(C,P,b,W=!1,z=!1,q=0)=>{for(let it=q;it<C.length;it++)It(C[it],P,b,W,z)},I=C=>{if(C.shapeFlag&6)return I(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const P=h(C.anchor||C.el),b=P&&P[wd];return b?h(b):P};let Y=!1;const $=(C,P,b)=>{let W;C==null?P._vnode&&(It(P._vnode,null,null,!0),W=P._vnode.component):_(P._vnode||null,C,P,null,null,null,b),P._vnode=C,Y||(Y=!0,Fu(W),Md(),Y=!1)},O={p:_,um:It,m:Ct,r:$t,mt:nt,mc:L,pc:K,pbc:S,n:I,o:n};return{render:$,hydrate:void 0,createApp:Tg($)}}function ka({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function qi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Hg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function nu(n,t,e=!1){const i=n.children,s=t.children;if(Ot(i)&&Ot(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ai(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&nu(o,a)),a.type===Sa&&(a.patchFlag===-1&&(a=s[r]=ai(a)),a.el=o.el),a.type===Be&&!a.el&&(a.el=o.el)}}function Vg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Zd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zd(t)}function na(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Jd(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Jd(t.subTree):null}const ia=n=>n.__isSuspense;function Gg(n,t){t&&t.pendingBranch?Ot(n)?t.effects.push(...n):t.effects.push(n):Zm(n)}const Me=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Be=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),Hr=[];let an=null;function kt(n=!1){Hr.push(an=n?null:[])}function Wg(){Hr.pop(),an=Hr[Hr.length-1]||null}let Yr=1;function sa(n,t=!1){Yr+=n,n<0&&an&&t&&(an.hasOnce=!0)}function Qd(n){return n.dynamicChildren=Yr>0?an||Gs:null,Wg(),Yr>0&&an&&an.push(n),n}function Kt(n,t,e,i,s,r){return Qd(N(n,t,e,i,s,r,!0))}function An(n,t,e,i,s){return Qd(Ee(n,t,e,i,s,!0))}function $r(n){return n?n.__v_isVNode===!0:!1}function Ni(n,t){return n.type===t.type&&n.key===t.key}const tp=({key:n})=>n??null,Go=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?pe(n)||He(n)||Vt(n)?{i:on,r:n,k:t,f:!!e}:n:null);function N(n,t=null,e=null,i=0,s=null,r=n===Me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&tp(t),ref:t&&Go(t),scopeId:Ed,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:on};return a?(iu(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=pe(e)?8:16),Yr>0&&!o&&an&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&an.push(l),l}const Ee=Xg;function Xg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Od)&&(n=Be),$r(n)){const a=gi(n,t,!0);return e&&iu(a,e),Yr>0&&!r&&an&&(a.shapeFlag&6?an[an.indexOf(n)]=a:an.push(a)),a.patchFlag=-2,a}if(e_(n)&&(n=n.__vccOpts),t){t=jg(t);let{class:a,style:l}=t;a&&!pe(a)&&(t.class=vn(a)),re(l)&&(qc(l)&&!Ot(l)&&(l=Te({},l)),t.style=Se(l))}const o=pe(n)?1:ia(n)?128:Cd(n)?64:re(n)?4:Vt(n)?2:0;return N(n,t,e,i,s,o,r,!0)}function jg(n){return n?qc(n)||Xd(n)?Te({},n):n:null}function gi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?qg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&tp(c),ref:t&&t.ref?e&&r?Ot(r)?r.concat(Go(t)):[r,Go(t)]:Go(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Me?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gi(n.ssContent),ssFallback:n.ssFallback&&gi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&zi(u,l.clone(u)),u}function Kr(n=" ",t=0){return Ee(Sa,null,n,t)}function ds(n,t){const e=Ee(Vo,null,n);return e.staticCount=t,e}function $e(n="",t=!1){return t?(kt(),An(Be,null,n)):Ee(Be,null,n)}function kn(n){return n==null||typeof n=="boolean"?Ee(Be):Ot(n)?Ee(Me,null,n.slice()):$r(n)?ai(n):Ee(Sa,null,String(n))}function ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gi(n)}function iu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ot(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),iu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Xd(t)?t._ctx=on:s===3&&on&&(on.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Vt(t)?(t={default:t,_ctx:on},e=32):(t=String(t),i&64?(e=16,t=[Kr(t)]):e=8);n.children=t,n.shapeFlag|=e}function qg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=vn([t.class,i.class]));else if(s==="style")t.style=Se([t.style,i.style]);else if(fa(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ot(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ha(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function hn(n,t,e,i=null){yn(n,t,7,[e,i])}const Yg=zd();let $g=0;function Kg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Yg,r={uid:$g++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qd(i,s),emitsOptions:Hd(i,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=wg.bind(null,r),n.ce&&n.ce(r),r}let ke=null;const Ea=()=>ke||on;let ra,Bl;{const n=ma(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ra=t("__VUE_INSTANCE_SETTERS__",e=>ke=e),Bl=t("__VUE_SSR_SETTERS__",e=>Zr=e)}const no=n=>{const t=ke;return ra(n),n.scope.on(),()=>{n.scope.off(),ra(t)}},Ku=()=>{ke&&ke.scope.off(),ra(null)};function ep(n){return n.vnode.shapeFlag&4}let Zr=!1;function Zg(n,t=!1,e=!1){t&&Bl(t);const{props:i,children:s}=n.vnode,r=ep(n);Ig(n,i,r,t),Og(n,s,e||t);const o=r?Jg(n,t):void 0;return t&&Bl(!1),o}function Jg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vg);const{setup:i}=e;if(i){di();const s=n.setupContext=i.length>1?t_(n):null,r=no(n),o=to(i,n,0,[n.props,s]),a=qh(o);if(pi(),r(),(a||n.sp)&&!hs(n)&&Ud(n),a){if(o.then(Ku,Ku),t)return o.then(l=>{Zu(n,l)}).catch(l=>{va(l,n,0)});n.asyncDep=o}else Zu(n,o)}else np(n)}function Zu(n,t,e){Vt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:re(t)&&(n.setupState=vd(t)),np(n)}function np(n,t,e){const i=n.type;n.render||(n.render=i.render||Wn);{const s=no(n);di();try{xg(n)}finally{pi(),s()}}}const Qg={get(n,t){return Oe(n,"get",""),n[t]}};function t_(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Qg),slots:n.slots,emit:n.emit,expose:t}}function ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(vd(gd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in zr)return zr[e](n)},has(t,e){return e in t||e in zr}})):n.proxy}function kl(n,t=!0){return Vt(n)?n.displayName||n.name:n.name||t&&n.__name}function e_(n){return Vt(n)&&"__vccOpts"in n}const wn=(n,t)=>jm(n,t,Zr);function su(n,t,e){try{sa(-1);const i=arguments.length;return i===2?re(t)&&!Ot(t)?$r(t)?Ee(n,null,[t]):Ee(n,t):Ee(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&$r(e)&&(e=[e]),Ee(n,t,e))}finally{sa(1)}}const n_="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zl;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{zl=Ju.createPolicy("vue",{createHTML:n=>n})}catch{}const ip=zl?n=>zl.createHTML(n):n=>n,i_="http://www.w3.org/2000/svg",s_="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Qu=oi&&oi.createElement("template"),r_={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?oi.createElementNS(i_,n):t==="mathml"?oi.createElementNS(s_,n):e?oi.createElement(n,{is:e}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Qu.innerHTML=ip(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Si="transition",vr="animation",Qs=Symbol("_vtc"),sp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rp=Te({},Pd,sp),o_=n=>(n.displayName="Transition",n.props=rp,n),op=o_((n,{slots:t})=>su(rg,ap(n),t)),Yi=(n,t=[])=>{Ot(n)?n.forEach(e=>e(...t)):n&&n(...t)},tf=n=>n?Ot(n)?n.some(t=>t.length>1):n.length>1:!1;function ap(n){const t={};for(const B in n)B in sp||(t[B]=n[B]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=a_(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:A,onLeave:x,onLeaveCancelled:F,onBeforeAppear:R=p,onAppear:M=T,onAppearCancelled:L=A}=t,y=(B,k,nt,lt)=>{B._enterCancelled=lt,Di(B,k?u:a),Di(B,k?c:o),nt&&nt()},S=(B,k)=>{B._isLeaving=!1,Di(B,f),Di(B,d),Di(B,h),k&&k()},D=B=>(k,nt)=>{const lt=B?M:T,st=()=>y(k,B,nt);Yi(lt,[k,st]),ef(()=>{Di(k,B?l:r),Fn(k,B?u:a),tf(lt)||nf(k,i,_,st)})};return Te(t,{onBeforeEnter(B){Yi(p,[B]),Fn(B,r),Fn(B,o)},onBeforeAppear(B){Yi(R,[B]),Fn(B,l),Fn(B,c)},onEnter:D(!1),onAppear:D(!0),onLeave(B,k){B._isLeaving=!0;const nt=()=>S(B,k);Fn(B,f),B._enterCancelled?(Fn(B,h),Hl(B)):(Hl(B),Fn(B,h)),ef(()=>{B._isLeaving&&(Di(B,f),Fn(B,d),tf(x)||nf(B,i,m,nt))}),Yi(x,[B,nt])},onEnterCancelled(B){y(B,!1,void 0,!0),Yi(A,[B])},onAppearCancelled(B){y(B,!0,void 0,!0),Yi(L,[B])},onLeaveCancelled(B){S(B),Yi(F,[B])}})}function a_(n){if(n==null)return null;if(re(n))return[za(n.enter),za(n.leave)];{const t=za(n);return[t,t]}}function za(n){return mm(n)}function Fn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Qs]||(n[Qs]=new Set)).add(t)}function Di(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Qs];e&&(e.delete(t),e.size||(n[Qs]=void 0))}function ef(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let l_=0;function nf(n,t,e,i){const s=n._endId=++l_,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=lp(n,t);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function lp(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${Si}Delay`),r=i(`${Si}Duration`),o=sf(s,r),a=i(`${vr}Delay`),l=i(`${vr}Duration`),c=sf(a,l);let u=null,f=0,h=0;t===Si?o>0&&(u=Si,f=o,h=r.length):t===vr?c>0&&(u=vr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Si:vr:null,h=u?u===Si?r.length:l.length:0);const d=u===Si&&/\b(?:transform|all)(?:,|$)/.test(i(`${Si}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function sf(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>rf(e)+rf(n[i])))}function rf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Hl(n){return(n?n.ownerDocument:document).body.offsetHeight}function c_(n,t,e){const i=n[Qs];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const oa=Symbol("_vod"),ru=Symbol("_vsh"),u_={name:"show",beforeMount(n,{value:t},{transition:e}){n[oa]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):xr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),xr(n,!0),i.enter(n)):i.leave(n,()=>{xr(n,!1)}):xr(n,t))},beforeUnmount(n,{value:t}){xr(n,t)}};function xr(n,t){n.style.display=t?n[oa]:"none",n[ru]=!t}const f_=Symbol(""),h_=/(?:^|;)\s*display\s*:/;function d_(n,t,e){const i=n.style,s=pe(e);let r=!1;if(e&&!s){if(t)if(pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Lr(i,a,"")}else for(const o in t)e[o]==null&&Lr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?m_(n,o,!pe(t)&&t?t[o]:void 0,a)||Lr(i,o,a):Lr(i,o,"")}}else if(s){if(t!==e){const o=i[f_];o&&(e+=";"+o),i.cssText=e,r=h_.test(e)}}else t&&n.removeAttribute("style");oa in n&&(n[oa]=r?i.display:"",n[ru]&&(i.display="none"))}const of=/\s*!important$/;function Lr(n,t,e){if(Ot(e))e.forEach(i=>Lr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=p_(n,t);of.test(e)?n.setProperty(gs(i),e.replace(of,""),"important"):n[i]=e}}const af=["Webkit","Moz","ms"],Ha={};function p_(n,t){const e=Ha[t];if(e)return e;let i=Ke(t);if(i!=="filter"&&i in n)return Ha[t]=i;i=pa(i);for(let s=0;s<af.length;s++){const r=af[s]+i;if(r in n)return Ha[t]=r}return t}function m_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&pe(i)&&e===i}const lf="http://www.w3.org/1999/xlink";function cf(n,t,e,i,s,r=Mm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(lf,t.slice(6,t.length)):n.setAttributeNS(lf,t,e):e==null||r&&!Zh(e)?n.removeAttribute(t):n.setAttribute(t,r?"":qn(e)?String(e):e)}function uf(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?ip(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Zh(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function ks(n,t,e,i){n.addEventListener(t,e,i)}function g_(n,t,e,i){n.removeEventListener(t,e,i)}const ff=Symbol("_vei");function __(n,t,e,i,s=null){const r=n[ff]||(n[ff]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=v_(t);if(i){const c=r[t]=M_(i,s);ks(n,a,c,l)}else o&&(g_(n,a,o,l),r[t]=void 0)}}const hf=/(?:Once|Passive|Capture)$/;function v_(n){let t;if(hf.test(n)){t={};let i;for(;i=n.match(hf);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):gs(n.slice(2)),t]}let Va=0;const x_=Promise.resolve(),y_=()=>Va||(x_.then(()=>Va=0),Va=Date.now());function M_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ot(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&yn(c,t,5,a)}}else yn(s,t,5,[i])};return e.value=n,e.attached=y_(),e}const df=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,S_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?c_(n,i,o):t==="style"?d_(n,e,i):fa(t)?ha(t)||__(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):E_(n,t,i,o))?(uf(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&cf(n,t,i,o,r,t!=="value")):n._isVueCE&&(b_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!pe(i)))?uf(n,Ke(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),cf(n,t,i,o))};function E_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&df(t)&&Vt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return df(t)&&pe(e)?!1:t in n}function b_(n,t){const e=n._def.props;if(!e)return!1;const i=Ke(t);return Array.isArray(e)?e.some(s=>Ke(s)===i):Object.keys(e).some(s=>Ke(s)===i)}const cp=new WeakMap,up=new WeakMap,aa=Symbol("_moveCb"),pf=Symbol("_enterCb"),T_=n=>(delete n.props.mode,n),A_=T_({name:"TransitionGroup",props:Te({},rp,{tag:String,moveClass:String}),setup(n,{slots:t}){const e=Ea(),i=Rd();let s,r;return Jc(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!D_(s[0].el,e.vnode.el,o)){s=[];return}s.forEach(C_),s.forEach(R_);const a=s.filter(P_);Hl(e.vnode.el),a.forEach(l=>{const c=l.el,u=c.style;Fn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[aa]=h=>{h&&h.target!==c||(!h||h.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",f),c[aa]=null,Di(c,o))};c.addEventListener("transitionend",f)}),s=[]}),()=>{const o=te(n),a=ap(o);let l=o.tag||Me;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&!u.el[ru]&&(s.push(u),zi(u,qr(u,a,i,e)),cp.set(u,fp(u.el)))}r=t.default?Kc(t.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&zi(u,qr(u,a,i,e))}return Ee(l,null,r)}}}),w_=A_;function C_(n){const t=n.el;t[aa]&&t[aa](),t[pf]&&t[pf]()}function R_(n){up.set(n,fp(n.el))}function P_(n){const t=cp.get(n),e=up.get(n),i=t.left-e.left,s=t.top-e.top;if(i||s){const r=n.el,o=r.style,a=r.getBoundingClientRect();let l=1,c=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(c=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/c}px)`,o.transitionDuration="0s",n}}function fp(n){const t=n.getBoundingClientRect();return{left:t.left,top:t.top}}function D_(n,t,e){const i=n.cloneNode(),s=n[Qs];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),e.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(i);const{hasTransform:o}=lp(i);return r.removeChild(i),o}const mf=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ot(t)?e=>Xs(t,e):t};function L_(n){n.target.composing=!0}function gf(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ga=Symbol("_assign");function _f(n,t,e){return t&&(n=n.trim()),e&&(n=kc(n)),n}const I_={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[Ga]=mf(s);const r=i||s.props&&s.props.type==="number";ks(n,t?"change":"input",o=>{o.target.composing||n[Ga](_f(n.value,e,r))}),(e||r)&&ks(n,"change",()=>{n.value=_f(n.value,e,r)}),t||(ks(n,"compositionstart",L_),ks(n,"compositionend",gf),ks(n,"change",gf))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ga]=mf(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?kc(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},U_=["ctrl","shift","alt","meta"],N_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>U_.some(e=>n[`${e}Key`]&&!t.includes(e))},Hi=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=N_[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},F_=Te({patchProp:S_},r_);let vf;function O_(){return vf||(vf=kg(F_))}const B_=((...n)=>{const t=O_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=z_(i);if(!s)return;const r=t._component;!Vt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,k_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function k_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function z_(n){return pe(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const H_=Symbol();var xf;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(xf||(xf={}));function V_(){const n=Em(!0),t=n.run(()=>qt({}));let e=[],i=[];const s=gd({install(r){s._a=r,r.provide(H_,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const zs=typeof document<"u";function hp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function G_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&hp(n.default)}const ie=Object.assign;function Wa(n,t){const e={};for(const i in t){const s=t[i];e[i]=Un(s)?s.map(n):n(s)}return e}const Vr=()=>{},Un=Array.isArray;function yf(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const dp=/#/g,W_=/&/g,X_=/\//g,j_=/=/g,q_=/\?/g,pp=/\+/g,Y_=/%5B/g,$_=/%5D/g,mp=/%5E/g,K_=/%60/g,gp=/%7B/g,Z_=/%7C/g,_p=/%7D/g,J_=/%20/g;function ou(n){return n==null?"":encodeURI(""+n).replace(Z_,"|").replace(Y_,"[").replace($_,"]")}function Q_(n){return ou(n).replace(gp,"{").replace(_p,"}").replace(mp,"^")}function Vl(n){return ou(n).replace(pp,"%2B").replace(J_,"+").replace(dp,"%23").replace(W_,"%26").replace(K_,"`").replace(gp,"{").replace(_p,"}").replace(mp,"^")}function tv(n){return Vl(n).replace(j_,"%3D")}function ev(n){return ou(n).replace(dp,"%23").replace(q_,"%3F")}function nv(n){return ev(n).replace(X_,"%2F")}function Jr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const iv=/\/$/,sv=n=>n.replace(iv,"");function Xa(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=lv(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Jr(o)}}function rv(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Mf(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function ov(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&tr(t.matched[i],e.matched[s])&&vp(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function tr(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function vp(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!av(n[e],t[e]))return!1;return!0}function av(n,t){return Un(n)?Sf(n,t):Un(t)?Sf(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function Sf(n,t){return Un(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function lv(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Gl=(function(n){return n.pop="pop",n.push="push",n})({}),ja=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function cv(n){if(!n)if(zs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),sv(n)}const uv=/^[^#]+#/;function fv(n,t){return n.replace(uv,"#")+t}function hv(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ta=()=>({left:window.scrollX,top:window.scrollY});function dv(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=hv(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ef(n,t){return(history.state?history.state.position-t:-1)+n}const Wl=new Map;function pv(n,t){Wl.set(n,t)}function mv(n){const t=Wl.get(n);return Wl.delete(n),t}function gv(n){return typeof n=="string"||n&&typeof n=="object"}function xp(n){return typeof n=="string"||typeof n=="symbol"}let xe=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const yp=Symbol("");xe.MATCHER_NOT_FOUND+"",xe.NAVIGATION_GUARD_REDIRECT+"",xe.NAVIGATION_ABORTED+"",xe.NAVIGATION_CANCELLED+"",xe.NAVIGATION_DUPLICATED+"";function er(n,t){return ie(new Error,{type:n,[yp]:!0},t)}function Qn(n,t){return n instanceof Error&&yp in n&&(t==null||!!(n.type&t))}const _v=["params","query","hash"];function vv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of _v)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function xv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(pp," "),r=s.indexOf("="),o=Jr(r<0?s:s.slice(0,r)),a=r<0?null:Jr(s.slice(r+1));if(o in t){let l=t[o];Un(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function bf(n){let t="";for(let e in n){const i=n[e];if(e=tv(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Un(i)?i.map(s=>s&&Vl(s)):[i&&Vl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function yv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Un(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Mv=Symbol(""),Tf=Symbol(""),Aa=Symbol(""),au=Symbol(""),Xl=Symbol("");function yr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Ii(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(er(xe.NAVIGATION_ABORTED,{from:e,to:t})):h instanceof Error?l(h):gv(h)?l(er(xe.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function qa(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(hp(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Ii(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=G_(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&Ii(h,e,i,o,a,s)()}))}}return r}function Sv(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>tr(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>tr(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ev=()=>location.protocol+"//"+location.host;function Mp(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Mf(a,"")}return Mf(e,n)+i+s}function bv(n,t,e,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=Mp(n,location),g=e.value,_=t.value;let m=0;if(h){if(e.value=d,t.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);s.forEach(p=>{p(e.value,g,{delta:m,type:Gl.pop,direction:m?m>0?ja.forward:ja.back:ja.unknown})})};function l(){o=e.value}function c(h){s.push(h);const d=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ie({},h.state,{scroll:Ta()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Af(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ta():null}}function Tv(n){const{history:t,location:e}=window,i={value:Mp(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(e.host&&document.querySelector("base")?n:n.slice(f))+l:Ev()+n+l;try{t[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),e[u?"replace":"assign"](h)}}function o(l,c){r(l,ie({},t.state,Af(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=ie({},s.value,t.state,{forward:l,scroll:Ta()});r(u.current,u,!0),r(l,ie({},Af(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Av(n){n=cv(n);const t=Tv(n),e=bv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=ie({location:"",base:n,go:i,createHref:fv.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let os=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var we=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(we||{});const wv={type:os.Static,value:""},Cv=/[a-zA-Z0-9_]/;function Rv(n){if(!n)return[[]];if(n==="/")return[[wv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=we.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(e===we.Static?r.push({type:os.Static,value:c}):e===we.Param||e===we.ParamRegExp||e===we.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:os.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==we.ParamRegExp){i=e,e=we.EscapeNext;continue}switch(e){case we.Static:l==="/"?(c&&f(),o()):l===":"?(f(),e=we.Param):h();break;case we.EscapeNext:h(),e=i;break;case we.Param:l==="("?e=we.ParamRegExp:Cv.test(l)?h():(f(),e=we.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case we.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=we.ParamRegExpEnd:u+=l;break;case we.ParamRegExpEnd:f(),e=we.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===we.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const wf="[^/]+?",Pv={sensitive:!1,strict:!1,start:!0,end:!0};var je=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(je||{});const Dv=/[.+*?^${}()[\]/\\]/g;function Lv(n,t){const e=ie({},Pv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[je.Root];e.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=je.Segment+(e.sensitive?je.BonusCaseSensitive:0);if(h.type===os.Static)f||(s+="/"),s+=h.value.replace(Dv,"\\$&"),d+=je.Static;else if(h.type===os.Param){const{value:g,repeatable:_,optional:m,regexp:p}=h;r.push({name:g,repeatable:_,optional:m});const T=p||wf;if(T!==wf){d+=je.BonusCustomRegExp;try{`${T}`}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+x.message)}}let A=_?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),s+=A,d+=je.Dynamic,m&&(d+=je.BonusOptional),_&&(d+=je.BonusRepeatable),T===".*"&&(d+=je.BonusWildcard)}u.push(d)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=je.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===os.Static)u+=d.value;else if(d.type===os.Param){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Un(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=Un(p)?p.join("/"):p;if(!T)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Iv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===je.Static+je.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===je.Static+je.Segment?1:-1:0}function Sp(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=Iv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(Cf(i))return 1;if(Cf(s))return-1}return s.length-i.length}function Cf(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Uv={strict:!1,end:!0,sensitive:!1};function Nv(n,t,e){const i=Lv(Rv(n.path),e),s=ie(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Fv(n,t){const e=[],i=new Map;t=yf(Uv,t);function s(f){return i.get(f)}function r(f,h,d){const g=!d,_=Pf(f);_.aliasOf=d&&d.record;const m=yf(t,f),p=[_];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of x)p.push(Pf(ie({},_,{components:d?d.record.components:_.components,path:F,aliasOf:d?d.record:_})))}let T,A;for(const x of p){const{path:F}=x;if(h&&F[0]!=="/"){const R=h.record.path,M=R[R.length-1]==="/"?"":"/";x.path=h.record.path+(F&&M+F)}if(T=Nv(x,h,m),d?d.alias.push(T):(A=A||T,A!==T&&A.alias.push(T),g&&f.name&&!Df(T)&&o(f.name)),Ep(T)&&l(T),_.children){const R=_.children;for(let M=0;M<R.length;M++)r(R[M],T,d&&d.children[M])}d=d||T}return A?()=>{o(A)}:Vr}function o(f){if(xp(f)){const h=i.get(f);h&&(i.delete(f),e.splice(e.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=e.indexOf(f);h>-1&&(e.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return e}function l(f){const h=kv(f,e);e.splice(h,0,f),f.record.name&&!Df(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw er(xe.MATCHER_NOT_FOUND,{location:f});m=d.record.name,g=ie(Rf(h.params,d.keys.filter(A=>!A.optional).concat(d.parent?d.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&Rf(f.params,d.keys.map(A=>A.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=e.find(A=>A.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):e.find(A=>A.re.test(h.path)),!d)throw er(xe.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=d.record.name,g=ie({},h.params,f.params),_=d.stringify(g)}const p=[];let T=d;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:_,params:g,matched:p,meta:Bv(p)}}n.forEach(f=>r(f));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Rf(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Pf(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Ov(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ov(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Df(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Bv(n){return n.reduce((t,e)=>ie(t,e.meta),{})}function kv(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;Sp(n,t[r])<0?i=r:e=r+1}const s=zv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function zv(n){let t=n;for(;t=t.parent;)if(Ep(t)&&Sp(n,t)===0)return t}function Ep({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Lf(n){const t=Pn(Aa),e=Pn(au),i=wn(()=>{const l=fs(n.to);return t.resolve(l)}),s=wn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=e.matched;if(!u||!f.length)return-1;const h=f.findIndex(tr.bind(null,u));if(h>-1)return h;const d=If(l[c-2]);return c>1&&If(u)===d&&f[f.length-1].path!==d?f.findIndex(tr.bind(null,l[c-2])):h}),r=wn(()=>s.value>-1&&Xv(e.params,i.value.params)),o=wn(()=>s.value>-1&&s.value===e.matched.length-1&&vp(e.params,i.value.params));function a(l={}){if(Wv(l)){const c=t[fs(n.replace)?"replace":"push"](fs(n.to)).catch(Vr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:wn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Hv(n){return n.length===1?n[0]:n}const Vv=Ve({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Lf,setup(n,{slots:t}){const e=_a(Lf(n)),{options:i}=Pn(Aa),s=wn(()=>({[Uf(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Uf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&Hv(t.default(e));return n.custom?r:su("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Gv=Vv;function Wv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Xv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Un(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function If(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Uf=(n,t,e)=>n??t??e,jv=Ve({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Pn(Xl),s=wn(()=>n.route||i.value),r=Pn(Tf,0),o=wn(()=>{let c=fs(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=wn(()=>s.value.matched[o.value]);Ho(Tf,wn(()=>o.value+1)),Ho(Mv,a),Ho(Xl,s);const l=qt();return Br(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!tr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Nf(e.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=su(h,ie({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Nf(e.default,{Component:m,route:c})||m}}});function Nf(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const bp=jv;function qv(n){const t=Fv(n.routes,n),e=n.parseQuery||xv,i=n.stringifyQuery||bf,s=n.history,r=yr(),o=yr(),a=yr(),l=Vm(Ei);let c=Ei;zs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wa.bind(null,I=>""+I),f=Wa.bind(null,nv),h=Wa.bind(null,Jr);function d(I,Y){let $,O;return xp(I)?($=t.getRecordMatcher(I),O=Y):O=I,t.addRoute(O,$)}function g(I){const Y=t.getRecordMatcher(I);Y&&t.removeRoute(Y)}function _(){return t.getRoutes().map(I=>I.record)}function m(I){return!!t.getRecordMatcher(I)}function p(I,Y){if(Y=ie({},Y||l.value),typeof I=="string"){const b=Xa(e,I,Y.path),W=t.resolve({path:b.path},Y),z=s.createHref(b.fullPath);return ie(b,W,{params:h(W.params),hash:Jr(b.hash),redirectedFrom:void 0,href:z})}let $;if(I.path!=null)$=ie({},I,{path:Xa(e,I.path,Y.path).path});else{const b=ie({},I.params);for(const W in b)b[W]==null&&delete b[W];$=ie({},I,{params:f(b)}),Y.params=f(Y.params)}const O=t.resolve($,Y),ut=I.hash||"";O.params=u(h(O.params));const C=rv(i,ie({},I,{hash:Q_(ut),path:O.path})),P=s.createHref(C);return ie({fullPath:C,hash:ut,query:i===bf?yv(I.query):I.query||{}},O,{redirectedFrom:void 0,href:P})}function T(I){return typeof I=="string"?Xa(e,I,l.value.path):ie({},I)}function A(I,Y){if(c!==I)return er(xe.NAVIGATION_CANCELLED,{from:Y,to:I})}function x(I){return M(I)}function F(I){return x(ie(T(I),{replace:!0}))}function R(I,Y){const $=I.matched[I.matched.length-1];if($&&$.redirect){const{redirect:O}=$;let ut=typeof O=="function"?O(I,Y):O;return typeof ut=="string"&&(ut=ut.includes("?")||ut.includes("#")?ut=T(ut):{path:ut},ut.params={}),ie({query:I.query,hash:I.hash,params:ut.path!=null?{}:I.params},ut)}}function M(I,Y){const $=c=p(I),O=l.value,ut=I.state,C=I.force,P=I.replace===!0,b=R($,O);if(b)return M(ie(T(b),{state:typeof b=="object"?ie({},ut,b.state):ut,force:C,replace:P}),Y||$);const W=$;W.redirectedFrom=Y;let z;return!C&&ov(i,O,$)&&(z=er(xe.NAVIGATION_DUPLICATED,{to:W,from:O}),Ct(O,O,!0,!1)),(z?Promise.resolve(z):S(W,O)).catch(q=>Qn(q)?Qn(q,xe.NAVIGATION_GUARD_REDIRECT)?q:yt(q):K(q,W,O)).then(q=>{if(q){if(Qn(q,xe.NAVIGATION_GUARD_REDIRECT))return M(ie({replace:P},T(q.to),{state:typeof q.to=="object"?ie({},ut,q.to.state):ut,force:C}),Y||W)}else q=B(W,O,!0,P,ut);return D(W,O,q),q})}function L(I,Y){const $=A(I,Y);return $?Promise.reject($):Promise.resolve()}function y(I){const Y=at.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(I):I()}function S(I,Y){let $;const[O,ut,C]=Sv(I,Y);$=qa(O.reverse(),"beforeRouteLeave",I,Y);for(const b of O)b.leaveGuards.forEach(W=>{$.push(Ii(W,I,Y))});const P=L.bind(null,I,Y);return $.push(P),Et($).then(()=>{$=[];for(const b of r.list())$.push(Ii(b,I,Y));return $.push(P),Et($)}).then(()=>{$=qa(ut,"beforeRouteUpdate",I,Y);for(const b of ut)b.updateGuards.forEach(W=>{$.push(Ii(W,I,Y))});return $.push(P),Et($)}).then(()=>{$=[];for(const b of C)if(b.beforeEnter)if(Un(b.beforeEnter))for(const W of b.beforeEnter)$.push(Ii(W,I,Y));else $.push(Ii(b.beforeEnter,I,Y));return $.push(P),Et($)}).then(()=>(I.matched.forEach(b=>b.enterCallbacks={}),$=qa(C,"beforeRouteEnter",I,Y,y),$.push(P),Et($))).then(()=>{$=[];for(const b of o.list())$.push(Ii(b,I,Y));return $.push(P),Et($)}).catch(b=>Qn(b,xe.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function D(I,Y,$){a.list().forEach(O=>y(()=>O(I,Y,$)))}function B(I,Y,$,O,ut){const C=A(I,Y);if(C)return C;const P=Y===Ei,b=zs?history.state:{};$&&(O||P?s.replace(I.fullPath,ie({scroll:P&&b&&b.scroll},ut)):s.push(I.fullPath,ut)),l.value=I,Ct(I,Y,$,P),yt()}let k;function nt(){k||(k=s.listen((I,Y,$)=>{if(!pt.listening)return;const O=p(I),ut=R(O,pt.currentRoute.value);if(ut){M(ie(ut,{replace:!0,force:!0}),O).catch(Vr);return}c=O;const C=l.value;zs&&pv(Ef(C.fullPath,$.delta),Ta()),S(O,C).catch(P=>Qn(P,xe.NAVIGATION_ABORTED|xe.NAVIGATION_CANCELLED)?P:Qn(P,xe.NAVIGATION_GUARD_REDIRECT)?(M(ie(T(P.to),{force:!0}),O).then(b=>{Qn(b,xe.NAVIGATION_ABORTED|xe.NAVIGATION_DUPLICATED)&&!$.delta&&$.type===Gl.pop&&s.go(-1,!1)}).catch(Vr),Promise.reject()):($.delta&&s.go(-$.delta,!1),K(P,O,C))).then(P=>{P=P||B(O,C,!1),P&&($.delta&&!Qn(P,xe.NAVIGATION_CANCELLED)?s.go(-$.delta,!1):$.type===Gl.pop&&Qn(P,xe.NAVIGATION_ABORTED|xe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),D(O,C,P)}).catch(Vr)}))}let lt=yr(),st=yr(),rt;function K(I,Y,$){yt(I);const O=st.list();return O.length?O.forEach(ut=>ut(I,Y,$)):console.error(I),Promise.reject(I)}function _t(){return rt&&l.value!==Ei?Promise.resolve():new Promise((I,Y)=>{lt.add([I,Y])})}function yt(I){return rt||(rt=!I,nt(),lt.list().forEach(([Y,$])=>I?$(I):Y()),lt.reset()),I}function Ct(I,Y,$,O){const{scrollBehavior:ut}=n;if(!zs||!ut)return Promise.resolve();const C=!$&&mv(Ef(I.fullPath,0))||(O||!$)&&history.state&&history.state.scroll||null;return eo().then(()=>ut(I,Y,C)).then(P=>P&&dv(P)).catch(P=>K(P,I,Y))}const It=I=>s.go(I);let $t;const at=new Set,pt={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:x,replace:F,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:st.add,isReady:_t,install(I){I.component("RouterLink",Gv),I.component("RouterView",bp),I.config.globalProperties.$router=pt,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>fs(l)}),zs&&!$t&&l.value===Ei&&($t=!0,x(s.location).catch(O=>{}));const Y={};for(const O in Ei)Object.defineProperty(Y,O,{get:()=>l.value[O],enumerable:!0});I.provide(Aa,pt),I.provide(au,md(Y)),I.provide(Xl,l);const $=I.unmount;at.add(I),I.unmount=function(){at.delete(I),at.size<1&&(c=Ei,k&&k(),k=null,l.value=Ei,$t=!1,rt=!1),$()}}};function Et(I){return I.reduce((Y,$)=>Y.then(()=>y($)),Promise.resolve())}return pt}function ur(){return Pn(Aa)}function Yv(n){return Pn(au)}const $v=Ve({__name:"App",setup(n){return(t,e)=>(kt(),An(fs(bp),null,{default:jr(({Component:i})=>[(kt(),An(ag,{include:["home"]},[(kt(),An(gg(i)))],1024))]),_:1}))}}),Kv=Ve({__name:"DeepSpaceBackground",setup(n){const t=qt();let e,i,s=0,r=0;const o=[];function a(){o.length=0;const R=["rgba(138, 120, 180, ","rgba(100, 160, 200, ","rgba(200, 170, 140, ","rgba(160, 140, 200, ","rgba(120, 180, 210, "];for(let M=0;M<8;M++)o.push({x:Math.random()*s,y:Math.random()*r,radiusX:200+Math.random()*500,radiusY:150+Math.random()*350,color:R[Math.floor(Math.random()*R.length)],alpha:.03+Math.random()*.06,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.12,phase:Math.random()*Math.PI*2})}const l=[];function c(){l.length=0;const R=Math.floor(s*r/600),M=Math.min(R,4e3);for(let L=0;L<M;L++){const y=Math.random();let S,D,B,k;y<.7?(S="tiny",D=.3+Math.random()*.6,B=.2+Math.random()*.4,k=Math.random()<.9?"#d0e0ff":"#ffe8c0"):y<.95?(S="medium",D=.8+Math.random()*1.2,B=.4+Math.random()*.5,k=Math.random()<.85?"#c8dcff":"#ffe8c0"):(S="large",D=1.5+Math.random()*2,B=.6+Math.random()*.4,k=Math.random()<.8?"#b8d0ff":"#fff0d0"),l.push({x:Math.random()*s,y:Math.random()*r,radius:D,baseAlpha:B,alpha:B,twinkleSpeed:.3+Math.random()*1.5,twinkleOffset:Math.random()*Math.PI*2,color:k,type:S})}}const u=[];let f=0,h=0;function d(){const R=Math.random();let M,L;R<.4?(M=Math.random()*s,L=-20):R<.7?(M=-20,L=Math.random()*r*.6):(M=s+20,L=Math.random()*r*.6);const y=-Math.PI/6+Math.random()*(Math.PI/2),S=1.5+Math.random()*3.5,D=Math.cos(y)*S,B=Math.sin(y)*S;u.push({x:M,y:L,vx:D,vy:B,life:0,maxLife:60+Math.random()*120,tailLength:40+Math.random()*80,headAlpha:.7+Math.random()*.3,color:Math.random()<.7?"#a0d8ff":"#c8e8ff"})}function g(R){for(const M of o){const L=M.x+Math.sin(R*1e-4+M.phase)*30,y=M.y+Math.cos(R*13e-5+M.phase)*25,S=i.createRadialGradient(L,y,0,L,y,M.radiusX),D=M.alpha+Math.sin(R*5e-4+M.phase)*.015;S.addColorStop(0,M.color+String(D)+")"),S.addColorStop(.4,M.color+String(D*.6)+")"),S.addColorStop(.7,M.color+String(D*.2)+")"),S.addColorStop(1,M.color+"0)"),i.save(),i.fillStyle=S,i.beginPath(),i.ellipse(L,y,M.radiusX,M.radiusY,M.phase*.3,0,Math.PI*2),i.fill(),i.restore()}}function _(R){for(const M of l){M.alpha=M.baseAlpha+Math.sin(R*.001*M.twinkleSpeed+M.twinkleOffset)*M.baseAlpha*.4;const L=Math.max(.05,M.alpha),y=M.radius;i.save(),i.globalAlpha=L;const S=i.createRadialGradient(M.x,M.y,0,M.x,M.y,y*2);S.addColorStop(0,M.color),S.addColorStop(.3,M.color),S.addColorStop(1,"transparent"),i.fillStyle=S,i.beginPath(),i.arc(M.x,M.y,y*2.5,0,Math.PI*2),i.fill(),M.type==="large"&&L>.4&&m(M.x,M.y,y,L*.4,M.color),i.restore()}}function m(R,M,L,y,S){const D=L*6,B=L*10;i.save(),i.globalAlpha=y;for(let k=0;k<Math.PI*2;k+=Math.PI/2){const nt=i.createLinearGradient(R,M,R+Math.cos(k)*B,M+Math.sin(k)*B);nt.addColorStop(0,S),nt.addColorStop(1,"transparent"),i.strokeStyle=nt,i.lineWidth=.5,i.beginPath(),i.moveTo(R+Math.cos(k)*L*.8,M+Math.sin(k)*L*.8),i.lineTo(R+Math.cos(k)*D,M+Math.sin(k)*D),i.stroke()}for(let k=Math.PI/4;k<Math.PI*2;k+=Math.PI/2){const nt=i.createLinearGradient(R,M,R+Math.cos(k)*B*.6,M+Math.sin(k)*B*.6);nt.addColorStop(0,S),nt.addColorStop(1,"transparent"),i.strokeStyle=nt,i.lineWidth=.3,i.beginPath(),i.moveTo(R+Math.cos(k)*L*.6,M+Math.sin(k)*L*.6),i.lineTo(R+Math.cos(k)*D*.6,M+Math.sin(k)*D*.6),i.stroke()}i.restore()}function p(){for(let R=u.length-1;R>=0;R--){const M=u[R],L=i.createRadialGradient(M.x,M.y,0,M.x,M.y,4);L.addColorStop(0,`rgba(255,255,255,${M.headAlpha})`),L.addColorStop(.4,`rgba(255,255,255,${M.headAlpha*.6})`),L.addColorStop(1,"rgba(255,255,255,0)"),i.save(),i.fillStyle=L,i.beginPath(),i.arc(M.x,M.y,4,0,Math.PI*2),i.fill(),i.restore();const y=i.createLinearGradient(M.x,M.y,M.x-M.vx*M.tailLength*.05,M.y-M.vy*M.tailLength*.05),S=M.headAlpha*.5;y.addColorStop(0,`rgba(200,230,255,${S})`),y.addColorStop(.3,`rgba(160,210,255,${S*.5})`),y.addColorStop(.6,`rgba(120,180,240,${S*.2})`),y.addColorStop(1,"rgba(100,160,220,0)"),i.save(),i.strokeStyle=y,i.lineWidth=1.2,i.lineCap="round",i.beginPath(),i.moveTo(M.x,M.y);const D=30;for(let B=1;B<=D;B++){const k=B/D,nt=M.x-M.vx*k*M.tailLength*.05,lt=M.y-M.vy*k*M.tailLength*.05;i.lineTo(nt,lt)}i.stroke(),i.restore()}}function T(){for(let R=u.length-1;R>=0;R--){const M=u[R];if(M.x+=M.vx,M.y+=M.vy,M.life++,M.life>M.maxLife*.7){const L=(M.life-M.maxLife*.7)/(M.maxLife*.3);M.headAlpha=(.7+Math.random()*.3)*(1-L)}(M.life>=M.maxLife||M.x<-100||M.x>s+100||M.y<-100||M.y>r+100)&&u.splice(R,1)}f++,f>=h&&(d(),f=0,h=180+Math.floor(Math.random()*300),Math.random()<.15&&setTimeout(()=>{u.length<2&&d()},200+Math.random()*600))}function A(){const R=i.createLinearGradient(0,0,0,r);R.addColorStop(0,"#0a0e1a"),R.addColorStop(.25,"#0f1428"),R.addColorStop(.5,"#111830"),R.addColorStop(.75,"#0d1225"),R.addColorStop(1,"#080c18"),i.fillStyle=R,i.fillRect(0,0,s,r)}function x(R){i.clearRect(0,0,s,r),A(),g(R),_(R),T(),p(),e=requestAnimationFrame(x)}function F(){t.value&&(s=window.innerWidth,r=window.innerHeight,t.value.width=s,t.value.height=r,a(),c())}return $n(()=>{eo(()=>{t.value&&(i=t.value.getContext("2d"),F(),e=requestAnimationFrame(x))}),window.addEventListener("resize",F)}),cr(()=>{e&&cancelAnimationFrame(e),window.removeEventListener("resize",F)}),(R,M)=>(kt(),Kt("canvas",{ref_key:"canvasRef",ref:t,class:"deep-space-canvas"},null,512))}}),ln=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Zv=ln(Kv,[["__scopeId","data-v-eb462066"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="170",Ys={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jv=0,Ff=1,Qv=2,Tp=1,t0=2,ri=3,Vi=0,tn=1,Vn=2,Oi=0,$s=1,jl=2,Of=3,Bf=4,e0=5,ss=100,n0=101,i0=102,s0=103,r0=104,o0=200,a0=201,l0=202,c0=203,ql=204,Yl=205,u0=206,f0=207,h0=208,d0=209,p0=210,m0=211,g0=212,_0=213,v0=214,$l=0,Kl=1,Zl=2,nr=3,Jl=4,Ql=5,tc=6,ec=7,Ap=0,x0=1,y0=2,Bi=0,M0=1,S0=2,E0=3,wp=4,b0=5,T0=6,A0=7,Cp=300,ir=301,sr=302,nc=303,ic=304,wa=306,sc=1e3,as=1001,rc=1002,Dn=1003,w0=1004,mo=1005,gn=1006,Ya=1007,ls=1008,_i=1009,Rp=1010,Pp=1011,Qr=1012,cu=1013,ps=1014,ui=1015,io=1016,uu=1017,fu=1018,rr=1020,Dp=35902,Lp=1021,Ip=1022,Cn=1023,Up=1024,Np=1025,Ks=1026,or=1027,Fp=1028,hu=1029,Op=1030,du=1031,pu=1033,Wo=33776,Xo=33777,jo=33778,qo=33779,oc=35840,ac=35841,lc=35842,cc=35843,uc=36196,fc=37492,hc=37496,dc=37808,pc=37809,mc=37810,gc=37811,_c=37812,vc=37813,xc=37814,yc=37815,Mc=37816,Sc=37817,Ec=37818,bc=37819,Tc=37820,Ac=37821,Yo=36492,wc=36494,Cc=36495,Bp=36283,Rc=36284,Pc=36285,Dc=36286,C0=3200,R0=3201,kp=0,P0=1,Fi="",rn="srgb",fr="srgb-linear",Ca="linear",le="srgb",ys=7680,kf=519,D0=512,L0=513,I0=514,zp=515,U0=516,N0=517,F0=518,O0=519,Lc=35044,zf="300 es",fi=2e3,la=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$o=Math.PI/180,Ic=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Ye(n,t,e){return Math.max(t,Math.min(e,n))}function B0(n,t){return(n%t+t)%t}function $a(n,t,e){return(1-e)*n+e*t}function Gn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const k0={DEG2RAD:$o};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,s,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],A=s[4],x=s[7],F=s[2],R=s[5],M=s[8];return r[0]=o*_+a*T+l*F,r[3]=o*m+a*A+l*R,r[6]=o*p+a*x+l*M,r[1]=c*_+u*T+f*F,r[4]=c*m+u*A+f*R,r[7]=c*p+u*x+f*M,r[2]=h*_+d*T+g*F,r[5]=h*m+d*A+g*R,r[8]=h*p+d*x+g*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new jt;function Hp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function z0(){const n=ca("canvas");return n.style.display="block",n}const Hf={};function Ir(n){n in Hf||(Hf[n]=!0,console.warn(n))}function H0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function V0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function G0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(n.r=hi(n.r),n.g=hi(n.g),n.b=hi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(n.r=Zs(n.r),n.g=Zs(n.g),n.b=Zs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Fi?Ca:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Vf=[.64,.33,.3,.6,.15,.06],Gf=[.2126,.7152,.0722],Wf=[.3127,.329],Xf=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[fr]:{primaries:Vf,whitePoint:Wf,transfer:Ca,toXYZ:Xf,fromXYZ:jf,luminanceCoefficients:Gf,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Vf,whitePoint:Wf,transfer:le,toXYZ:Xf,fromXYZ:jf,luminanceCoefficients:Gf,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Ms;class W0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=ca("canvas")),Ms.width=t.width,Ms.height=t.height;const i=Ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hi(e[i]/255)*255):e[i]=hi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let X0=0;class Vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?W0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let j0=0;class Ze extends _s{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,i=as,s=as,r=gn,o=ls,a=Cn,l=_i,c=Ze.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=ki(),this.name="",this.source=new Vp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sc:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sc:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Cp;Ze.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,x=(d+1)/2,F=(p+1)/2,R=(u+h)/4,M=(f+_)/4,L=(g+m)/4;return A>x&&A>F?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=R/i,r=M/i):x>F?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=L/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=M/r,s=L/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q0 extends _s{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends q0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Gp extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y0 extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,T=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const F=Math.sqrt(A),R=Math.atan2(F,p*T);m=Math.sin(m*R)/F,a=Math.sin(a*R)/F}const x=a*T;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=F,c*=F,u*=F,f*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,i=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new j,qf=new Gi;class so{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),_o.subVectors(this.max,Mr),Ss.subVectors(t.a,Mr),Es.subVectors(t.b,Mr),bs.subVectors(t.c,Mr),bi.subVectors(Es,Ss),Ti.subVectors(bs,Es),$i.subVectors(Ss,bs);let e=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-$i.z,$i.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,$i.z,0,-$i.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-$i.y,$i.x,0];return!Qa(e,Ss,Es,bs,_o)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,Ss,Es,bs,_o))?!1:(vo.crossVectors(bi,Ti),e=[vo.x,vo.y,vo.z],Qa(e,Ss,Es,bs,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new j,new j,new j,new j,new j,new j,new j,new j],En=new j,go=new so,Ss=new j,Es=new j,bs=new j,bi=new j,Ti=new j,$i=new j,Mr=new j,_o=new j,vo=new j,Ki=new j;function Qa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $0=new so,Sr=new j,tl=new j;class mu{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(tl)),this.expandByPoint(Sr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new j,el=new j,xo=new j,Ai=new j,nl=new j,yo=new j,il=new j;class gu{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){el.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(el);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xo),a=Ai.dot(this.direction),l=-Ai.dot(xo),c=Ai.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(el).addScaledVector(xo,h),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,s,r){nl.subVectors(e,t),yo.subVectors(i,t),il.crossVectors(nl,yo);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const l=a*this.direction.dot(yo.crossVectors(Ai,yo));if(l<0)return null;const c=a*this.direction.dot(nl.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,s,r,o,a,l,c,u,f,h,d,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K0,t,Z0)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),wi.crossVectors(i,nn),wi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),wi.crossVectors(i,nn)),wi.normalize(),Mo.crossVectors(nn,wi),s[0]=wi.x,s[4]=Mo.x,s[8]=nn.x,s[1]=wi.y,s[5]=Mo.y,s[9]=nn.y,s[2]=wi.z,s[6]=Mo.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],A=i[7],x=i[11],F=i[15],R=s[0],M=s[4],L=s[8],y=s[12],S=s[1],D=s[5],B=s[9],k=s[13],nt=s[2],lt=s[6],st=s[10],rt=s[14],K=s[3],_t=s[7],yt=s[11],Ct=s[15];return r[0]=o*R+a*S+l*nt+c*K,r[4]=o*M+a*D+l*lt+c*_t,r[8]=o*L+a*B+l*st+c*yt,r[12]=o*y+a*k+l*rt+c*Ct,r[1]=u*R+f*S+h*nt+d*K,r[5]=u*M+f*D+h*lt+d*_t,r[9]=u*L+f*B+h*st+d*yt,r[13]=u*y+f*k+h*rt+d*Ct,r[2]=g*R+_*S+m*nt+p*K,r[6]=g*M+_*D+m*lt+p*_t,r[10]=g*L+_*B+m*st+p*yt,r[14]=g*y+_*k+m*rt+p*Ct,r[3]=T*R+A*S+x*nt+F*K,r[7]=T*M+A*D+x*lt+F*_t,r[11]=T*L+A*B+x*st+F*yt,r[15]=T*y+A*k+x*rt+F*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+_*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+e*c*f-e*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*f+e*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,A=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,F=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=e*T+i*A+s*x+r*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/R;return t[0]=T*M,t[1]=(_*h*r-f*m*r-_*s*d+i*m*d+f*s*p-i*h*p)*M,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*M,t[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*M,t[4]=A*M,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*M,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*M,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*M,t[8]=x*M,t[9]=(g*f*r-u*_*r-g*i*d+e*_*d+u*i*p-e*f*p)*M,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*M,t[11]=(u*a*r-o*f*r-u*i*c+e*f*c+o*i*d-e*a*d)*M,t[12]=F*M,t[13]=(u*_*s-g*f*s+g*i*h-e*_*h-u*i*m+e*f*m)*M,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*M,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*h+e*a*h)*M,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,T=l*c,A=l*u,x=l*f,F=i.x,R=i.y,M=i.z;return s[0]=(1-(_+p))*F,s[1]=(d+x)*F,s[2]=(g-A)*F,s[3]=0,s[4]=(d-x)*R,s[5]=(1-(h+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+A)*M,s[9]=(m-T)*M,s[10]=(1-(h+_))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const c=1/r,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=fi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let d,g;if(a===fi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===la)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fi){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(o-r),h=(e+t)*c,d=(i+s)*u;let g,_;if(a===fi)g=(o+r)*f,_=-2*f;else if(a===la)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ts=new j,bn=new _e,K0=new j(0,0,0),Z0=new j(1,1,1),wi=new j,Mo=new j,nn=new j,Yf=new _e,$f=new Gi;class Yn{constructor(t=0,e=0,i=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $f.setFromEuler(this),this.setFromQuaternion($f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J0=0;const Kf=new j,As=new Gi,ni=new _e,So=new j,Er=new j,Q0=new j,tx=new Gi,Zf=new j(1,0,0),Jf=new j(0,1,0),Qf=new j(0,0,1),th={type:"added"},ex={type:"removed"},ws={type:"childadded",child:null},sl={type:"childremoved",child:null};class Le extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new j,e=new Yn,i=new Gi,s=new j(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Zf,t)}rotateY(t){return this.rotateOnAxis(Jf,t)}rotateZ(t){return this.rotateOnAxis(Qf,t)}translateOnAxis(t,e){return Kf.copy(t).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zf,t)}translateY(t){return this.translateOnAxis(Jf,t)}translateZ(t){return this.translateOnAxis(Qf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?So.copy(t):So.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Er,So,this.up):ni.lookAt(So,Er,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ni),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(th),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ex),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(th),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,tx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Le.DEFAULT_UP=new j(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new j,ii=new j,rl=new j,si=new j,Cs=new j,Rs=new j,eh=new j,ol=new j,al=new j,ll=new j,cl=new ye,ul=new ye,fl=new ye;class mn{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Tn.subVectors(s,e),ii.subVectors(i,e),rl.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(ii),l=Tn.dot(rl),c=ii.dot(ii),u=ii.dot(rl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return cl.setScalar(0),ul.setScalar(0),fl.setScalar(0),cl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,i),fl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(fl,r.z),o}static isFrontFacing(t,e,i,s){return Tn.subVectors(i,e),ii.subVectors(t,e),Tn.cross(ii).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Tn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Cs.subVectors(s,i),Rs.subVectors(r,i),ol.subVectors(t,i);const l=Cs.dot(ol),c=Rs.dot(ol);if(l<=0&&c<=0)return e.copy(i);al.subVectors(t,s);const u=Cs.dot(al),f=Rs.dot(al);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Cs,o);ll.subVectors(t,r);const d=Cs.dot(ll),g=Rs.dot(ll);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Rs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return eh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(eh,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function hl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=B0(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=hl(o,r,t+1/3),this.g=hl(o,r,t),this.b=hl(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const i=Wp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Zt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ye(Fe.r*255,0,255))*65536+Math.round(Ye(Fe.g*255,0,255))*256+Math.round(Ye(Fe.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Fe.copy(this),e);const i=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=rn){Zt.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,s=Fe.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Eo);const i=$a(Ci.h,Eo.h,e),s=$a(Ci.s,Eo.s,e),r=$a(Ci.l,Eo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Jt;Jt.NAMES=Wp;let nx=0;class hr extends _s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ki(),this.name="",this.blending=$s,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ql&&(i.blendSrc=this.blendSrc),this.blendDst!==Yl&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xp extends hr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new j,bo=new Ft;class Ln{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lc,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}}class jp extends Ln{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class qp extends Ln{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class jn extends Ln{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ix=0;const fn=new _e,dl=new Le,Ps=new j,sn=new so,br=new so,De=new j;class xi extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hp(t)?qp:jp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(sn.min,br.min),sn.expandByPoint(De),De.addVectors(sn.max,br.max),sn.expandByPoint(De)):(sn.expandByPoint(br.min),sn.expandByPoint(br.max))}sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)De.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),De.add(Ps)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new j,l[L]=new j;const c=new j,u=new j,f=new j,h=new Ft,d=new Ft,g=new Ft,_=new j,m=new j;function p(L,y,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,S),h.fromBufferAttribute(r,L),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(_),a[y].add(_),a[S].add(_),l[L].add(m),l[y].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,y=T.length;L<y;++L){const S=T[L],D=S.start,B=S.count;for(let k=D,nt=D+B;k<nt;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const A=new j,x=new j,F=new j,R=new j;function M(L){F.fromBufferAttribute(s,L),R.copy(F);const y=a[L];A.copy(y),A.sub(F.multiplyScalar(F.dot(y))).normalize(),x.crossVectors(R,y);const D=x.dot(l[L])<0?-1:1;o.setXYZW(L,A.x,A.y,A.z,D)}for(let L=0,y=T.length;L<y;++L){const S=T[L],D=S.start,B=S.count;for(let k=D,nt=D+B;k<nt;k+=3)M(t.getX(k+0)),M(t.getX(k+1)),M(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Ln(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new _e,Zi=new gu,To=new mu,ih=new j,Ao=new j,wo=new j,Co=new j,pl=new j,Ro=new j,sh=new j,Po=new j;class _n extends Le{constructor(t=new xi,e=new Xp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(pl.fromBufferAttribute(f,t),o?Ro.addScaledVector(pl,u):Ro.addScaledVector(pl.sub(e),u))}e.add(Ro)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(To.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(To,ih)===null||Zi.origin.distanceToSquared(ih)>(t.far-t.near)**2))&&(nh.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(nh),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,F=A;x<F;x+=3){const R=a.getX(x),M=a.getX(x+1),L=a.getX(x+2);s=Do(this,p,t,i,c,u,f,R,M,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),A=a.getX(m+1),x=a.getX(m+2);s=Do(this,o,t,i,c,u,f,T,A,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,F=A;x<F;x+=3){const R=x,M=x+1,L=x+2;s=Do(this,p,t,i,c,u,f,R,M,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,A=m+1,x=m+2;s=Do(this,o,t,i,c,u,f,T,A,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sx(n,t,e,i,s,r,o,a){let l;if(t.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Vi,a),l===null)return null;Po.copy(a),Po.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Po);return c<e.near||c>e.far?null:{distance:c,point:Po.clone(),object:n}}function Do(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ao),n.getVertexPosition(l,wo),n.getVertexPosition(c,Co);const u=sx(n,t,e,i,Ao,wo,Co,sh);if(u){const f=new j;mn.getBarycoord(sh,Ao,wo,Co,f),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,c,f,new Ft)),r&&(u.uv1=mn.getInterpolatedAttribute(r,a,l,c,f,new Ft)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};mn.getNormal(Ao,wo,Co,h.normal),u.face=h,u.barycoord=f}return u}class ro extends xi{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(f,2));function g(_,m,p,T,A,x,F,R,M,L,y){const S=x/M,D=F/L,B=x/2,k=F/2,nt=R/2,lt=M+1,st=L+1;let rt=0,K=0;const _t=new j;for(let yt=0;yt<st;yt++){const Ct=yt*D-k;for(let It=0;It<lt;It++){const $t=It*S-B;_t[_]=$t*T,_t[m]=Ct*A,_t[p]=nt,c.push(_t.x,_t.y,_t.z),_t[_]=0,_t[m]=0,_t[p]=R>0?1:-1,u.push(_t.x,_t.y,_t.z),f.push(It/M),f.push(1-yt/L),rt+=1}}for(let yt=0;yt<L;yt++)for(let Ct=0;Ct<M;Ct++){const It=h+Ct+lt*yt,$t=h+Ct+lt*(yt+1),at=h+(Ct+1)+lt*(yt+1),pt=h+(Ct+1)+lt*yt;l.push(It,$t,pt),l.push($t,at,pt),K+=6}a.addGroup(d,K,y),d+=K,h+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Xe(n){const t={};for(let e=0;e<n.length;e++){const i=ar(n[e]);for(const s in i)t[s]=i[s]}return t}function rx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const ox={clone:ar,merge:Xe};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends hr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class $p extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new j,rh=new Ft,oh=new Ft;class pn extends $p{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,rh,oh),e.subVectors(oh,rh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($o*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ds=-90,Ls=1;class cx extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Ds,Ls,t,e);s.layers=this.layers,this.add(s);const r=new pn(Ds,Ls,t,e);r.layers=this.layers,this.add(r);const o=new pn(Ds,Ls,t,e);o.layers=this.layers,this.add(o);const a=new pn(Ds,Ls,t,e);a.layers=this.layers,this.add(a);const l=new pn(Ds,Ls,t,e);l.layers=this.layers,this.add(l);const c=new pn(Ds,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kp extends Ze{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ux extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Kp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ro(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Oi});r.uniforms.tEquirect.value=e;const o=new _n(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=gn),new cx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ml=new j,fx=new j,hx=new jt;class Ui{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ml.subVectors(i,e).cross(fx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||hx.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new mu,Lo=new j;class vu{constructor(t=new Ui,e=new Ui,i=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],A=s[14],x=s[15];if(i[0].setComponents(l-r,h-c,m-d,x-p).normalize(),i[1].setComponents(l+r,h+c,m+d,x+p).normalize(),i[2].setComponents(l+o,h+u,m+g,x+T).normalize(),i[3].setComponents(l-o,h-u,m-g,x-T).normalize(),i[4].setComponents(l-a,h-f,m-_,x-A).normalize(),e===fi)i[5].setComponents(l+a,h+f,m+_,x+A).normalize();else if(e===la)i[5].setComponents(a,f,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function dx(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class oo extends xi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*h-o;for(let A=0;A<c;A++){const x=A*f-r;g.push(x,-T,0),_.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const A=T+c*p,x=T+c*(p+1),F=T+1+c*(p+1),R=T+1+c*p;d.push(A,x,R),d.push(x,F,R)}this.setIndex(d),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.width,t.height,t.widthSegments,t.heightSegments)}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kx=`vec3 transformedNormal = objectNormal;
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
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ey=`#ifdef USE_GRADIENTMAP
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
}`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ry=`uniform bool receiveShadow;
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
#endif`,oy=`#ifdef USE_ENVMAP
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
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fy=`PhysicalMaterial material;
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
#endif`,hy=`struct PhysicalMaterial {
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
}`,dy=`
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ey=`#if defined( USE_POINTS_UV )
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
#endif`,by=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
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
#endif`,Py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
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
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jy=`float getShadowMask() {
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
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
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
}`,yM=`#if DEPTH_PACKING == 3200
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
}`,MM=`#define DISTANCE
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
}`,SM=`#define DISTANCE
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
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
}`,AM=`uniform vec3 diffuse;
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
}`,wM=`#include <common>
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,DM=`#define MATCAP
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
}`,LM=`#define MATCAP
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
}`,IM=`#define NORMAL
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
}`,UM=`#define NORMAL
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
}`,NM=`#define PHONG
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
}`,FM=`#define PHONG
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
}`,OM=`#define STANDARD
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
}`,BM=`#define STANDARD
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
}`,kM=`#define TOON
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
}`,zM=`#define TOON
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
}`,HM=`uniform float size;
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
}`,VM=`uniform vec3 diffuse;
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
}`,GM=`#include <common>
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
}`,WM=`uniform vec3 color;
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
}`,XM=`uniform float rotation;
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
}`,jM=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:_x,alphatest_fragment:vx,alphatest_pars_fragment:xx,aomap_fragment:yx,aomap_pars_fragment:Mx,batching_pars_vertex:Sx,batching_vertex:Ex,begin_vertex:bx,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:wx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Lx,color_fragment:Ix,color_pars_fragment:Ux,color_pars_vertex:Nx,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:kx,displacementmap_pars_vertex:zx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:jx,envmap_common_pars_fragment:qx,envmap_pars_fragment:Yx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:oy,envmap_vertex:Kx,fog_vertex:Zx,fog_pars_vertex:Jx,fog_fragment:Qx,fog_pars_fragment:ty,gradientmap_pars_fragment:ey,lightmap_pars_fragment:ny,lights_lambert_fragment:iy,lights_lambert_pars_fragment:sy,lights_pars_begin:ry,lights_toon_fragment:ay,lights_toon_pars_fragment:ly,lights_phong_fragment:cy,lights_phong_pars_fragment:uy,lights_physical_fragment:fy,lights_physical_pars_fragment:hy,lights_fragment_begin:dy,lights_fragment_maps:py,lights_fragment_end:my,logdepthbuf_fragment:gy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:vy,logdepthbuf_vertex:xy,map_fragment:yy,map_pars_fragment:My,map_particle_fragment:Sy,map_particle_pars_fragment:Ey,metalnessmap_fragment:by,metalnessmap_pars_fragment:Ty,morphinstance_vertex:Ay,morphcolor_vertex:wy,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ry,morphtarget_vertex:Py,normal_fragment_begin:Dy,normal_fragment_maps:Ly,normal_pars_fragment:Iy,normal_pars_vertex:Uy,normal_vertex:Ny,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:ky,iridescence_pars_fragment:zy,opaque_fragment:Hy,packing:Vy,premultiplied_alpha_fragment:Gy,project_vertex:Wy,dithering_fragment:Xy,dithering_pars_fragment:jy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:Ky,shadowmap_vertex:Zy,shadowmask_pars_fragment:Jy,skinbase_vertex:Qy,skinning_pars_vertex:tM,skinning_vertex:eM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:sM,tonemapping_fragment:rM,tonemapping_pars_fragment:oM,transmission_fragment:aM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:uM,uv_vertex:fM,worldpos_vertex:hM,background_vert:dM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:_M,cube_frag:vM,depth_vert:xM,depth_frag:yM,distanceRGBA_vert:MM,distanceRGBA_frag:SM,equirect_vert:EM,equirect_frag:bM,linedashed_vert:TM,linedashed_frag:AM,meshbasic_vert:wM,meshbasic_frag:CM,meshlambert_vert:RM,meshlambert_frag:PM,meshmatcap_vert:DM,meshmatcap_frag:LM,meshnormal_vert:IM,meshnormal_frag:UM,meshphong_vert:NM,meshphong_frag:FM,meshphysical_vert:OM,meshphysical_frag:BM,meshtoon_vert:kM,meshtoon_frag:zM,points_vert:HM,points_frag:VM,shadow_vert:GM,shadow_frag:WM,sprite_vert:XM,sprite_frag:jM},Mt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},zn={basic:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Xe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Xe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Xe([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Xe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Xe([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Xe([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Xe([Mt.common,Mt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Xe([Mt.lights,Mt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};zn.physical={uniforms:Xe([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Io={r:0,b:0,g:0},Qi=new Yn,qM=new _e;function YM(n,t,e,i,s,r,o){const a=new Jt(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?e:t).get(A)),A}function _(T){let A=!1;const x=g(T);x===null?p(a,l):x&&x.isColor&&(p(x,1),A=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,A){const x=g(A);x&&(x.isCubeTexture||x.mapping===wa)?(u===void 0&&(u=new _n(new ro(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:ar(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(A.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Qi)),u.material.toneMapped=Zt.getTransfer(x.colorSpace)!==le,(f!==x||h!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new oo(2,2),new Wi({name:"BackgroundMaterial",uniforms:ar(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,A){T.getRGB(Io,Yp(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m}}function $M(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(S,D,B,k,nt){let lt=!1;const st=f(k,B,D);r!==st&&(r=st,c(r.object)),lt=d(S,k,B,nt),lt&&g(S,k,B,nt),nt!==null&&t.update(nt,n.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,x(S,D,B,k),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,D,B){const k=B.wireframe===!0;let nt=i[S.id];nt===void 0&&(nt={},i[S.id]=nt);let lt=nt[D.id];lt===void 0&&(lt={},nt[D.id]=lt);let st=lt[k];return st===void 0&&(st=h(l()),lt[k]=st),st}function h(S){const D=[],B=[],k=[];for(let nt=0;nt<e;nt++)D[nt]=0,B[nt]=0,k[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function d(S,D,B,k){const nt=r.attributes,lt=D.attributes;let st=0;const rt=B.getAttributes();for(const K in rt)if(rt[K].location>=0){const yt=nt[K];let Ct=lt[K];if(Ct===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(Ct=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(Ct=S.instanceColor)),yt===void 0||yt.attribute!==Ct||Ct&&yt.data!==Ct.data)return!0;st++}return r.attributesNum!==st||r.index!==k}function g(S,D,B,k){const nt={},lt=D.attributes;let st=0;const rt=B.getAttributes();for(const K in rt)if(rt[K].location>=0){let yt=lt[K];yt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor));const Ct={};Ct.attribute=yt,yt&&yt.data&&(Ct.data=yt.data),nt[K]=Ct,st++}r.attributes=nt,r.attributesNum=st,r.index=k}function _(){const S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const B=r.newAttributes,k=r.enabledAttributes,nt=r.attributeDivisors;B[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),nt[S]!==D&&(n.vertexAttribDivisor(S,D),nt[S]=D)}function T(){const S=r.newAttributes,D=r.enabledAttributes;for(let B=0,k=D.length;B<k;B++)D[B]!==S[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function A(S,D,B,k,nt,lt,st){st===!0?n.vertexAttribIPointer(S,D,B,nt,lt):n.vertexAttribPointer(S,D,B,k,nt,lt)}function x(S,D,B,k){_();const nt=k.attributes,lt=B.getAttributes(),st=D.defaultAttributeValues;for(const rt in lt){const K=lt[rt];if(K.location>=0){let _t=nt[rt];if(_t===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),_t!==void 0){const yt=_t.normalized,Ct=_t.itemSize,It=t.get(_t);if(It===void 0)continue;const $t=It.buffer,at=It.type,pt=It.bytesPerElement,Et=at===n.INT||at===n.UNSIGNED_INT||_t.gpuType===cu;if(_t.isInterleavedBufferAttribute){const I=_t.data,Y=I.stride,$=_t.offset;if(I.isInstancedInterleavedBuffer){for(let O=0;O<K.locationSize;O++)p(K.location+O,I.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let O=0;O<K.locationSize;O++)m(K.location+O);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let O=0;O<K.locationSize;O++)A(K.location+O,Ct/K.locationSize,at,yt,Y*pt,($+Ct/K.locationSize*O)*pt,Et)}else{if(_t.isInstancedBufferAttribute){for(let I=0;I<K.locationSize;I++)p(K.location+I,_t.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let I=0;I<K.locationSize;I++)m(K.location+I);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let I=0;I<K.locationSize;I++)A(K.location+I,Ct/K.locationSize,at,yt,Ct*pt,Ct/K.locationSize*I*pt,Et)}}else if(st!==void 0){const yt=st[rt];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(K.location,yt);break;case 3:n.vertexAttrib3fv(K.location,yt);break;case 4:n.vertexAttrib4fv(K.location,yt);break;default:n.vertexAttrib1fv(K.location,yt)}}}}T()}function F(){L();for(const S in i){const D=i[S];for(const B in D){const k=D[B];for(const nt in k)u(k[nt].object),delete k[nt];delete D[B]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const k=D[B];for(const nt in k)u(k[nt].object),delete k[nt];delete D[B]}delete i[S.id]}function M(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const k=B[S.id];for(const nt in k)u(k[nt].object),delete k[nt];delete B[S.id]}}function L(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function KM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ZM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==Cn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const L=M===io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==_i&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ui&&!L)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:x,vertexTextures:F,maxSamples:R}}function JM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ui,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,A=T*4;let x=p.clippingState||null;l.value=x,x=u(g,h,A,d);for(let F=0;F!==A;++F)x[F]=e[F];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,x=d;A!==_;++A,x+=4)o.copy(f[A]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function QM(n){let t=new WeakMap;function e(o,a){return a===nc?o.mapping=ir:a===ic&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nc||a===ic)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ux(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Jp extends $p{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vs=4,ah=[.125,.215,.35,.446,.526,.582],rs=20,gl=new Jp,lh=new Jt;let _l=null,vl=0,xl=0,yl=!1;const ns=(1+Math.sqrt(5))/2,Is=1/ns,ch=[new j(-ns,Is,0),new j(ns,Is,0),new j(-Is,0,ns),new j(Is,0,ns),new j(0,ns,-Is),new j(0,ns,Is),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=yl,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:io,format:Cn,colorSpace:fr,depthBuffer:!1},s=fh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tS(r)),this._blurMaterial=eS(r,t,e)}return s}_compileMaterial(t){const e=new _n(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,i,s){const a=new pn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(lh),u.toneMapping=Bi,u.autoClear=!1;const d=new Xp({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new _n(new ro,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(lh),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const A=this._cubeSize;Uo(s,T*A,p>2?A:0,A,A),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ir||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Uo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,gl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ch[(s-r-1)%ch.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let T=0;for(let M=0;M<rs;++M){const L=M/_,y=Math.exp(-L*L/2);p.push(y),M===0?T+=y:M<m&&(T+=2*y)}for(let M=0;M<p.length;M++)p[M]=p[M]/T;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const x=this._sizeLods[s],F=3*x*(s>A-Vs?s-A+Vs:0),R=4*(this._cubeSize-x);Uo(e,F,R,3*x,2*x),l.setRenderTarget(e),l.render(f,gl)}}function tS(n){const t=[],e=[],i=[];let s=n;const r=n-Vs+1+ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Vs?l=ah[o-n+Vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),A=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let R=0;R<d;R++){const M=R%3*2/3-1,L=R>2?0:-1,y=[M,L,0,M+2/3,L,0,M+2/3,L+1,0,M,L,0,M+2/3,L+1,0,M,L+1,0];T.set(y,_*g*R),A.set(h,m*g*R);const S=[R,R,R,R,R,R];x.set(S,p*g*R)}const F=new xi;F.setAttribute("position",new Ln(T,_)),F.setAttribute("uv",new Ln(A,m)),F.setAttribute("faceIndex",new Ln(x,p)),t.push(F),s>Vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fh(n,t,e){const i=new ms(n,t,e);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function eS(n,t,e){const i=new Float32Array(rs),s=new j(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hh(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function dh(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function nS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nc||l===ic,u=l===ir||l===sr;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new uh(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new uh(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function iS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sS(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let A=0,x=T.length;A<x;A+=3){const F=T[A+0],R=T[A+1],M=T[A+2];h.push(F,R,R,M,M,F)}}else if(g!==void 0){const T=g.array;_=g.version;for(let A=0,x=T.length/3-1;A<x;A+=3){const F=A+0,R=A+1,M=A+2;h.push(F,R,R,M,M,F)}}else return;const m=new(Hp(h)?qp:jp)(h,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function rS(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),e.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,h*o,g),e.update(d,i,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function oS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function aS(n,t,e){const i=new WeakMap,s=new ye;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let F=a.attributes.position.count*x,R=1;F>t.maxTextureSize&&(R=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const M=new Float32Array(F*R*4*f),L=new Gp(M,F,R,f);L.type=ui,L.needsUpdate=!0;const y=x*4;for(let D=0;D<f;D++){const B=p[D],k=T[D],nt=A[D],lt=F*R*4*D;for(let st=0;st<B.count;st++){const rt=st*y;g===!0&&(s.fromBufferAttribute(B,st),M[lt+rt+0]=s.x,M[lt+rt+1]=s.y,M[lt+rt+2]=s.z,M[lt+rt+3]=0),_===!0&&(s.fromBufferAttribute(k,st),M[lt+rt+4]=s.x,M[lt+rt+5]=s.y,M[lt+rt+6]=s.z,M[lt+rt+7]=0),m===!0&&(s.fromBufferAttribute(nt,st),M[lt+rt+8]=s.x,M[lt+rt+9]=s.y,M[lt+rt+10]=s.z,M[lt+rt+11]=nt.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new Ft(F,R)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function lS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Qp extends Ze{constructor(t,e,i,s,r,o,a,l,c,u=Ks){if(u!==Ks&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ks&&(i=ps),i===void 0&&u===or&&(i=rr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tm=new Ze,ph=new Qp(1,1),em=new Gp,nm=new Y0,im=new Kp,mh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function dr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ra(n,t){let e=gh[t];e===void 0&&(e=new Int32Array(t),gh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function cS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function uS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function fS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function hS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function dS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;xh.set(i),n.uniformMatrix2fv(this.addr,!1,xh),Pe(e,i)}}function pS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;vh.set(i),n.uniformMatrix3fv(this.addr,!1,vh),Pe(e,i)}}function mS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;_h.set(i),n.uniformMatrix4fv(this.addr,!1,_h),Pe(e,i)}}function gS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _S(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function vS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function xS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function yS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function MS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function SS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function ES(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function bS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ph.compareFunction=zp,r=ph):r=tm,e.setTexture2D(t||r,s)}function TS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||nm,s)}function AS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||im,s)}function wS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||em,s)}function CS(n){switch(n){case 5126:return cS;case 35664:return uS;case 35665:return fS;case 35666:return hS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return vS;case 35669:case 35673:return xS;case 5125:return yS;case 36294:return MS;case 36295:return SS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return wS}}function RS(n,t){n.uniform1fv(this.addr,t)}function PS(n,t){const e=dr(t,this.size,2);n.uniform2fv(this.addr,e)}function DS(n,t){const e=dr(t,this.size,3);n.uniform3fv(this.addr,e)}function LS(n,t){const e=dr(t,this.size,4);n.uniform4fv(this.addr,e)}function IS(n,t){const e=dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function US(n,t){const e=dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function NS(n,t){const e=dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function FS(n,t){n.uniform1iv(this.addr,t)}function OS(n,t){n.uniform2iv(this.addr,t)}function BS(n,t){n.uniform3iv(this.addr,t)}function kS(n,t){n.uniform4iv(this.addr,t)}function zS(n,t){n.uniform1uiv(this.addr,t)}function HS(n,t){n.uniform2uiv(this.addr,t)}function VS(n,t){n.uniform3uiv(this.addr,t)}function GS(n,t){n.uniform4uiv(this.addr,t)}function WS(n,t,e){const i=this.cache,s=t.length,r=Ra(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||tm,r[o])}function XS(n,t,e){const i=this.cache,s=t.length,r=Ra(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nm,r[o])}function jS(n,t,e){const i=this.cache,s=t.length,r=Ra(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||im,r[o])}function qS(n,t,e){const i=this.cache,s=t.length,r=Ra(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||em,r[o])}function YS(n){switch(n){case 5126:return RS;case 35664:return PS;case 35665:return DS;case 35666:return LS;case 35674:return IS;case 35675:return US;case 35676:return NS;case 5124:case 35670:return FS;case 35667:case 35671:return OS;case 35668:case 35672:return BS;case 35669:case 35673:return kS;case 5125:return zS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return qS}}class $S{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=CS(e.type)}}class KS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YS(e.type)}}class ZS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function yh(n,t){n.seq.push(t),n.map[t.id]=t}function JS(n,t,e){const i=n.name,s=i.length;for(Ml.lastIndex=0;;){const r=Ml.exec(i),o=Ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yh(e,c===void 0?new $S(a,n,t):new KS(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new ZS(a),yh(e,f)),e=f}}}class Ko{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);JS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Mh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const QS=37297;let tE=0;function eE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Sh=new jt;function nE(n){Zt._getMatrix(Sh,Zt.workingColorSpace,n);const t=`mat3( ${Sh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case Ca:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+eE(n.getShaderSource(t),o)}else return s}function iE(n,t){const e=nE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sE(n,t){let e;switch(t){case M0:e="Linear";break;case S0:e="Reinhard";break;case E0:e="Cineon";break;case wp:e="ACESFilmic";break;case T0:e="AgX";break;case A0:e="Neutral";break;case b0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const No=new j;function rE(){Zt.getLuminanceCoefficients(No);const n=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function aE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ur(n){return n!==""}function bh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(n){return n.replace(cE,fE)}const uE=new Map;function fE(n,t){let e=Yt[t];if(e===void 0){const i=uE.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uc(e)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(n){return n.replace(hE,dE)}function dE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function pE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===t0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function mE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function _E(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ap:t="ENVMAP_BLENDING_MULTIPLY";break;case x0:t="ENVMAP_BLENDING_MIX";break;case y0:t="ENVMAP_BLENDING_ADD";break}return t}function vE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function xE(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pE(e),c=mE(e),u=gE(e),f=_E(e),h=vE(e),d=oE(e),g=aE(r),_=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?sE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,iE("linearToOutputTexel",e.outputColorSpace),rE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=Uc(o),o=bh(o,e),o=Th(o,e),a=Uc(a),a=bh(a,e),a=Th(a,e),o=Ah(o),a=Ah(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+m+o,x=T+p+a,F=Mh(s,s.VERTEX_SHADER,A),R=Mh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,F),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function M(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(F).trim(),nt=s.getShaderInfoLog(R).trim();let lt=!0,st=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,F,R);else{const rt=Eh(s,F,"vertex"),K=Eh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+rt+`
`+K)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||nt==="")&&(st=!1);st&&(D.diagnostics={runnable:lt,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(F),s.deleteShader(R),L=new Ko(s,_),y=lE(s,_)}let L;this.getUniforms=function(){return L===void 0&&M(this),L};let y;this.getAttributes=function(){return y===void 0&&M(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,QS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=R,this}let yE=0;class ME{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new SE(t),e.set(t,i)),i}}class SE{constructor(t){this.id=yE++,this.code=t,this.usedTimes=0}}function EE(n,t,e,i,s,r,o){const a=new _u,l=new ME,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,D,B,k){const nt=B.fog,lt=k.geometry,st=y.isMeshStandardMaterial?B.environment:null,rt=(y.isMeshStandardMaterial?e:t).get(y.envMap||st),K=rt&&rt.mapping===wa?rt.image.height:null,_t=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const yt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ct=yt!==void 0?yt.length:0;let It=0;lt.morphAttributes.position!==void 0&&(It=1),lt.morphAttributes.normal!==void 0&&(It=2),lt.morphAttributes.color!==void 0&&(It=3);let $t,at,pt,Et;if(_t){const ae=zn[_t];$t=ae.vertexShader,at=ae.fragmentShader}else $t=y.vertexShader,at=y.fragmentShader,l.update(y),pt=l.getVertexShaderID(y),Et=l.getFragmentShaderID(y);const I=n.getRenderTarget(),Y=n.state.buffers.depth.getReversed(),$=k.isInstancedMesh===!0,O=k.isBatchedMesh===!0,ut=!!y.map,C=!!y.matcap,P=!!rt,b=!!y.aoMap,W=!!y.lightMap,z=!!y.bumpMap,q=!!y.normalMap,it=!!y.displacementMap,ct=!!y.emissiveMap,Q=!!y.metalnessMap,E=!!y.roughnessMap,v=y.anisotropy>0,U=y.clearcoat>0,X=y.dispersion>0,J=y.iridescence>0,Z=y.sheen>0,vt=y.transmission>0,ht=v&&!!y.anisotropyMap,mt=U&&!!y.clearcoatMap,Nt=U&&!!y.clearcoatNormalMap,dt=U&&!!y.clearcoatRoughnessMap,St=J&&!!y.iridescenceMap,Ut=J&&!!y.iridescenceThicknessMap,Bt=Z&&!!y.sheenColorMap,xt=Z&&!!y.sheenRoughnessMap,zt=!!y.specularMap,Gt=!!y.specularColorMap,oe=!!y.specularIntensityMap,H=vt&&!!y.transmissionMap,bt=vt&&!!y.thicknessMap,ot=!!y.gradientMap,ft=!!y.alphaMap,wt=y.alphaTest>0,Tt=!!y.alphaHash,Wt=!!y.extensions;let ve=Bi;y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Ue={shaderID:_t,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:at,defines:y.defines,customVertexShaderID:pt,customFragmentShaderID:Et,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:O,batchingColor:O&&k._colorsTexture!==null,instancing:$,instancingColor:$&&k.instanceColor!==null,instancingMorph:$&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:I===null?n.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fr,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:C,envMap:P,envMapMode:P&&rt.mapping,envMapCubeUVHeight:K,aoMap:b,lightMap:W,bumpMap:z,normalMap:q,displacementMap:h&&it,emissiveMap:ct,normalMapObjectSpace:q&&y.normalMapType===P0,normalMapTangentSpace:q&&y.normalMapType===kp,metalnessMap:Q,roughnessMap:E,anisotropy:v,anisotropyMap:ht,clearcoat:U,clearcoatMap:mt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:dt,dispersion:X,iridescence:J,iridescenceMap:St,iridescenceThicknessMap:Ut,sheen:Z,sheenColorMap:Bt,sheenRoughnessMap:xt,specularMap:zt,specularColorMap:Gt,specularIntensityMap:oe,transmission:vt,transmissionMap:H,thicknessMap:bt,gradientMap:ot,opaque:y.transparent===!1&&y.blending===$s&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:wt,alphaHash:Tt,combine:y.combine,mapUv:ut&&_(y.map.channel),aoMapUv:b&&_(y.aoMap.channel),lightMapUv:W&&_(y.lightMap.channel),bumpMapUv:z&&_(y.bumpMap.channel),normalMapUv:q&&_(y.normalMap.channel),displacementMapUv:it&&_(y.displacementMap.channel),emissiveMapUv:ct&&_(y.emissiveMap.channel),metalnessMapUv:Q&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(y.sheenRoughnessMap.channel),specularMapUv:zt&&_(y.specularMap.channel),specularColorMapUv:Gt&&_(y.specularColorMap.channel),specularIntensityMapUv:oe&&_(y.specularIntensityMap.channel),transmissionMapUv:H&&_(y.transmissionMap.channel),thicknessMapUv:bt&&_(y.thicknessMap.channel),alphaMapUv:ft&&_(y.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(q||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!lt.attributes.uv&&(ut||ft),fog:!!nt,useFog:y.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Y,skinning:k.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:It,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===le,decodeVideoTextureEmissive:ct&&y.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(y.emissiveMap.colorSpace)===le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vn,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Wt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&y.extensions.multiDraw===!0||O)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)S.push(D),S.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(T(S,y),A(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function A(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const S=g[y.type];let D;if(S){const B=zn[S];D=ox.clone(B.uniforms)}else D=y.uniforms;return D}function F(y,S){let D;for(let B=0,k=u.length;B<k;B++){const nt=u[B];if(nt.cacheKey===S){D=nt,++D.usedTimes;break}}return D===void 0&&(D=new xE(n,S,y,r),u.push(D)),D}function R(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function M(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:F,releaseProgram:R,releaseShaderCache:M,programs:u,dispose:L}}function bE(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function TE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ch(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Rh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,h,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||TE),i.length>1&&i.sort(h||Ch),s.length>1&&s.sort(h||Ch)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function AE(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Rh,n.set(i,[o])):s>=r.length?(o=new Rh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function wE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new Jt};break;case"SpotLight":e={position:new j,direction:new j,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[t.id]=e,e}}}function CE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let RE=0;function PE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function DE(n){const t=new wE,e=CE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const s=new j,r=new _e,o=new _e;function a(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,A=0,x=0,F=0,R=0,M=0;c.sort(PE);for(let y=0,S=c.length;y<S;y++){const D=c[y],B=D.color,k=D.intensity,nt=D.distance,lt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*k,f+=B.g*k,h+=B.b*k;else if(D.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(D.sh.coefficients[st],k);M++}else if(D.isDirectionalLight){const st=t.get(D);if(st.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const rt=D.shadow,K=e.get(D);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,i.directionalShadow[d]=K,i.directionalShadowMap[d]=lt,i.directionalShadowMatrix[d]=D.shadow.matrix,T++}i.directional[d]=st,d++}else if(D.isSpotLight){const st=t.get(D);st.position.setFromMatrixPosition(D.matrixWorld),st.color.copy(B).multiplyScalar(k),st.distance=nt,st.coneCos=Math.cos(D.angle),st.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),st.decay=D.decay,i.spot[_]=st;const rt=D.shadow;if(D.map&&(i.spotLightMap[F]=D.map,F++,rt.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[_]=rt.matrix,D.castShadow){const K=e.get(D);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=lt,x++}_++}else if(D.isRectAreaLight){const st=t.get(D);st.color.copy(B).multiplyScalar(k),st.halfWidth.set(D.width*.5,0,0),st.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=st,m++}else if(D.isPointLight){const st=t.get(D);if(st.color.copy(D.color).multiplyScalar(D.intensity),st.distance=D.distance,st.decay=D.decay,D.castShadow){const rt=D.shadow,K=e.get(D);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,K.shadowCameraNear=rt.camera.near,K.shadowCameraFar=rt.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=lt,i.pointShadowMatrix[g]=D.shadow.matrix,A++}i.point[g]=st,g++}else if(D.isHemisphereLight){const st=t.get(D);st.skyColor.copy(D.color).multiplyScalar(k),st.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=st,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==A||L.numSpotShadows!==x||L.numSpotMaps!==F||L.numLightProbes!==M)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=x+F-R,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=M,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=A,L.numSpotShadows=x,L.numSpotMaps=F,L.numLightProbes=M,i.version=RE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const A=c[p];if(A.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(A.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(A.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ph(n){const t=new DE(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LE(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ph(n),t.set(s,[a])):r>=o.length?(a=new Ph(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class IE extends hr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class UE extends hr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
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
}`;function OE(n,t,e){let i=new vu;const s=new Ft,r=new Ft,o=new ye,a=new IE({depthPacking:R0}),l=new UE,c={},u=e.maxTextureSize,f={[Vi]:tn,[tn]:Vi,[Vn]:Vn},h=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:NE,fragmentShader:FE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new xi;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tp;let p=this.type;this.render=function(R,M,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Oi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==ri&&this.type===ri,nt=p===ri&&this.type!==ri;for(let lt=0,st=R.length;lt<st;lt++){const rt=R[lt],K=rt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const _t=K.getFrameExtents();if(s.multiply(_t),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_t.x),s.x=r.x*_t.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_t.y),s.y=r.y*_t.y,K.mapSize.y=r.y)),K.map===null||k===!0||nt===!0){const Ct=this.type!==ri?{minFilter:Dn,magFilter:Dn}:{};K.map!==null&&K.map.dispose(),K.map=new ms(s.x,s.y,Ct),K.map.texture.name=rt.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const yt=K.getViewportCount();for(let Ct=0;Ct<yt;Ct++){const It=K.getViewport(Ct);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),B.viewport(o),K.updateMatrices(rt,Ct),i=K.getFrustum(),x(M,L,K.camera,rt,this.type)}K.isPointLightShadow!==!0&&this.type===ri&&T(K,L),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,S,D)};function T(R,M){const L=t.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ms(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(M,null,L,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(M,null,L,d,_,null)}function A(R,M,L,y){let S=null;const D=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const B=S.uuid,k=M.uuid;let nt=c[B];nt===void 0&&(nt={},c[B]=nt);let lt=nt[k];lt===void 0&&(lt=S.clone(),nt[k]=lt,M.addEventListener("dispose",F)),S=lt}if(S.visible=M.visible,S.wireframe=M.wireframe,y===ri?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:f[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=L}return S}function x(R,M,L,y,S){if(R.visible===!1)return;if(R.layers.test(M.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ri)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=t.update(R),nt=R.material;if(Array.isArray(nt)){const lt=k.groups;for(let st=0,rt=lt.length;st<rt;st++){const K=lt[st],_t=nt[K.materialIndex];if(_t&&_t.visible){const yt=A(R,_t,y,S);R.onBeforeShadow(n,R,M,L,k,yt,K),n.renderBufferDirect(L,null,k,yt,R,K),R.onAfterShadow(n,R,M,L,k,yt,K)}}}else if(nt.visible){const lt=A(R,nt,y,S);R.onBeforeShadow(n,R,M,L,k,lt,null),n.renderBufferDirect(L,null,k,lt,R,null),R.onAfterShadow(n,R,M,L,k,lt,null)}}const B=R.children;for(let k=0,nt=B.length;k<nt;k++)x(B[k],M,L,y,S)}function F(R){R.target.removeEventListener("dispose",F);for(const L in c){const y=c[L],S=R.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const BE={[$l]:Kl,[Zl]:tc,[Jl]:ec,[nr]:Ql,[Kl]:$l,[tc]:Zl,[ec]:Jl,[Ql]:nr};function kE(n,t){function e(){let H=!1;const bt=new ye;let ot=null;const ft=new ye(0,0,0,0);return{setMask:function(wt){ot!==wt&&!H&&(n.colorMask(wt,wt,wt,wt),ot=wt)},setLocked:function(wt){H=wt},setClear:function(wt,Tt,Wt,ve,Ue){Ue===!0&&(wt*=ve,Tt*=ve,Wt*=ve),bt.set(wt,Tt,Wt,ve),ft.equals(bt)===!1&&(n.clearColor(wt,Tt,Wt,ve),ft.copy(bt))},reset:function(){H=!1,ot=null,ft.set(-1,0,0,0)}}}function i(){let H=!1,bt=!1,ot=null,ft=null,wt=null;return{setReversed:function(Tt){if(bt!==Tt){const Wt=t.get("EXT_clip_control");bt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ve=wt;wt=null,this.setClear(ve)}bt=Tt},getReversed:function(){return bt},setTest:function(Tt){Tt?I(n.DEPTH_TEST):Y(n.DEPTH_TEST)},setMask:function(Tt){ot!==Tt&&!H&&(n.depthMask(Tt),ot=Tt)},setFunc:function(Tt){if(bt&&(Tt=BE[Tt]),ft!==Tt){switch(Tt){case $l:n.depthFunc(n.NEVER);break;case Kl:n.depthFunc(n.ALWAYS);break;case Zl:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case Ql:n.depthFunc(n.GEQUAL);break;case tc:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=Tt}},setLocked:function(Tt){H=Tt},setClear:function(Tt){wt!==Tt&&(bt&&(Tt=1-Tt),n.clearDepth(Tt),wt=Tt)},reset:function(){H=!1,ot=null,ft=null,wt=null,bt=!1}}}function s(){let H=!1,bt=null,ot=null,ft=null,wt=null,Tt=null,Wt=null,ve=null,Ue=null;return{setTest:function(ae){H||(ae?I(n.STENCIL_TEST):Y(n.STENCIL_TEST))},setMask:function(ae){bt!==ae&&!H&&(n.stencilMask(ae),bt=ae)},setFunc:function(ae,Mn,Kn){(ot!==ae||ft!==Mn||wt!==Kn)&&(n.stencilFunc(ae,Mn,Kn),ot=ae,ft=Mn,wt=Kn)},setOp:function(ae,Mn,Kn){(Tt!==ae||Wt!==Mn||ve!==Kn)&&(n.stencilOp(ae,Mn,Kn),Tt=ae,Wt=Mn,ve=Kn)},setLocked:function(ae){H=ae},setClear:function(ae){Ue!==ae&&(n.clearStencil(ae),Ue=ae)},reset:function(){H=!1,bt=null,ot=null,ft=null,wt=null,Tt=null,Wt=null,ve=null,Ue=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,A=null,x=null,F=null,R=null,M=new Jt(0,0,0),L=0,y=!1,S=null,D=null,B=null,k=null,nt=null;const lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,rt=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),st=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),st=rt>=2);let _t=null,yt={};const Ct=n.getParameter(n.SCISSOR_BOX),It=n.getParameter(n.VIEWPORT),$t=new ye().fromArray(Ct),at=new ye().fromArray(It);function pt(H,bt,ot,ft){const wt=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(H,Tt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<ot;Wt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(bt+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return Tt}const Et={};Et[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(n.DEPTH_TEST),o.setFunc(nr),z(!1),q(Ff),I(n.CULL_FACE),b(Oi);function I(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function Y(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function $(H,bt){return f[H]!==bt?(n.bindFramebuffer(H,bt),f[H]=bt,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=bt),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function O(H,bt){let ot=d,ft=!1;if(H){ot=h.get(bt),ot===void 0&&(ot=[],h.set(bt,ot));const wt=H.textures;if(ot.length!==wt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Wt=wt.length;Tt<Wt;Tt++)ot[Tt]=n.COLOR_ATTACHMENT0+Tt;ot.length=wt.length,ft=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,ft=!0);ft&&n.drawBuffers(ot)}function ut(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const C={[ss]:n.FUNC_ADD,[n0]:n.FUNC_SUBTRACT,[i0]:n.FUNC_REVERSE_SUBTRACT};C[s0]=n.MIN,C[r0]=n.MAX;const P={[o0]:n.ZERO,[a0]:n.ONE,[l0]:n.SRC_COLOR,[ql]:n.SRC_ALPHA,[p0]:n.SRC_ALPHA_SATURATE,[h0]:n.DST_COLOR,[u0]:n.DST_ALPHA,[c0]:n.ONE_MINUS_SRC_COLOR,[Yl]:n.ONE_MINUS_SRC_ALPHA,[d0]:n.ONE_MINUS_DST_COLOR,[f0]:n.ONE_MINUS_DST_ALPHA,[m0]:n.CONSTANT_COLOR,[g0]:n.ONE_MINUS_CONSTANT_COLOR,[_0]:n.CONSTANT_ALPHA,[v0]:n.ONE_MINUS_CONSTANT_ALPHA};function b(H,bt,ot,ft,wt,Tt,Wt,ve,Ue,ae){if(H===Oi){_===!0&&(Y(n.BLEND),_=!1);return}if(_===!1&&(I(n.BLEND),_=!0),H!==e0){if(H!==m||ae!==y){if((p!==ss||x!==ss)&&(n.blendEquation(n.FUNC_ADD),p=ss,x=ss),ae)switch(H){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.ONE,n.ONE);break;case Of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}T=null,A=null,F=null,R=null,M.set(0,0,0),L=0,m=H,y=ae}return}wt=wt||bt,Tt=Tt||ot,Wt=Wt||ft,(bt!==p||wt!==x)&&(n.blendEquationSeparate(C[bt],C[wt]),p=bt,x=wt),(ot!==T||ft!==A||Tt!==F||Wt!==R)&&(n.blendFuncSeparate(P[ot],P[ft],P[Tt],P[Wt]),T=ot,A=ft,F=Tt,R=Wt),(ve.equals(M)===!1||Ue!==L)&&(n.blendColor(ve.r,ve.g,ve.b,Ue),M.copy(ve),L=Ue),m=H,y=!1}function W(H,bt){H.side===Vn?Y(n.CULL_FACE):I(n.CULL_FACE);let ot=H.side===tn;bt&&(ot=!ot),z(ot),H.blending===$s&&H.transparent===!1?b(Oi):b(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const ft=H.stencilWrite;a.setTest(ft),ft&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ct(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?I(n.SAMPLE_ALPHA_TO_COVERAGE):Y(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(H){S!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),S=H)}function q(H){H!==Jv?(I(n.CULL_FACE),H!==D&&(H===Ff?n.cullFace(n.BACK):H===Qv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Y(n.CULL_FACE),D=H}function it(H){H!==B&&(st&&n.lineWidth(H),B=H)}function ct(H,bt,ot){H?(I(n.POLYGON_OFFSET_FILL),(k!==bt||nt!==ot)&&(n.polygonOffset(bt,ot),k=bt,nt=ot)):Y(n.POLYGON_OFFSET_FILL)}function Q(H){H?I(n.SCISSOR_TEST):Y(n.SCISSOR_TEST)}function E(H){H===void 0&&(H=n.TEXTURE0+lt-1),_t!==H&&(n.activeTexture(H),_t=H)}function v(H,bt,ot){ot===void 0&&(_t===null?ot=n.TEXTURE0+lt-1:ot=_t);let ft=yt[ot];ft===void 0&&(ft={type:void 0,texture:void 0},yt[ot]=ft),(ft.type!==H||ft.texture!==bt)&&(_t!==ot&&(n.activeTexture(ot),_t=ot),n.bindTexture(H,bt||Et[H]),ft.type=H,ft.texture=bt)}function U(){const H=yt[_t];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Bt(H){$t.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),$t.copy(H))}function xt(H){at.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),at.copy(H))}function zt(H,bt){let ot=c.get(bt);ot===void 0&&(ot=new WeakMap,c.set(bt,ot));let ft=ot.get(H);ft===void 0&&(ft=n.getUniformBlockIndex(bt,H.name),ot.set(H,ft))}function Gt(H,bt){const ft=c.get(bt).get(H);l.get(bt)!==ft&&(n.uniformBlockBinding(bt,ft,H.__bindingPointIndex),l.set(bt,ft))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},_t=null,yt={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,A=null,x=null,F=null,R=null,M=new Jt(0,0,0),L=0,y=!1,S=null,D=null,B=null,k=null,nt=null,$t.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:I,disable:Y,bindFramebuffer:$,drawBuffers:O,useProgram:ut,setBlending:b,setMaterial:W,setFlipSided:z,setCullFace:q,setLineWidth:it,setPolygonOffset:ct,setScissorTest:Q,activeTexture:E,bindTexture:v,unbindTexture:U,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:St,texImage3D:Ut,updateUBOMapping:zt,uniformBlockBinding:Gt,texStorage2D:Nt,texStorage3D:dt,texSubImage2D:Z,texSubImage3D:vt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Bt,viewport:xt,reset:oe}}function Dh(n,t,e,i){const s=zE(i);switch(e){case Lp:return n*t;case Up:return n*t;case Np:return n*t*2;case Fp:return n*t/s.components*s.byteLength;case hu:return n*t/s.components*s.byteLength;case Op:return n*t*2/s.components*s.byteLength;case du:return n*t*2/s.components*s.byteLength;case Ip:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case pu:return n*t*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jo:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ac:case cc:return Math.max(n,16)*Math.max(t,8)/4;case oc:case lc:return Math.max(n,8)*Math.max(t,8)/2;case uc:case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yo:case wc:case Cc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bp:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zE(n){switch(n){case _i:case Rp:return{byteLength:1,components:1};case Qr:case Pp:case io:return{byteLength:2,components:1};case uu:case fu:return{byteLength:2,components:4};case ps:case cu:case ui:return{byteLength:4,components:1};case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function HE(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return d?new OffscreenCanvas(E,v):ca("canvas")}function _(E,v,U){let X=1;const J=Q(E);if((J.width>U||J.height>U)&&(X=U/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(X*J.width),vt=Math.floor(X*J.height);f===void 0&&(f=g(Z,vt));const ht=v?g(Z,vt):f;return ht.width=Z,ht.height=vt,ht.getContext("2d").drawImage(E,0,0,Z,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+vt+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(E,v,U,X,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=v;if(v===n.RED&&(U===n.FLOAT&&(Z=n.R32F),U===n.HALF_FLOAT&&(Z=n.R16F),U===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.R8UI),U===n.UNSIGNED_SHORT&&(Z=n.R16UI),U===n.UNSIGNED_INT&&(Z=n.R32UI),U===n.BYTE&&(Z=n.R8I),U===n.SHORT&&(Z=n.R16I),U===n.INT&&(Z=n.R32I)),v===n.RG&&(U===n.FLOAT&&(Z=n.RG32F),U===n.HALF_FLOAT&&(Z=n.RG16F),U===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RG8UI),U===n.UNSIGNED_SHORT&&(Z=n.RG16UI),U===n.UNSIGNED_INT&&(Z=n.RG32UI),U===n.BYTE&&(Z=n.RG8I),U===n.SHORT&&(Z=n.RG16I),U===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),U===n.UNSIGNED_INT&&(Z=n.RGB32UI),U===n.BYTE&&(Z=n.RGB8I),U===n.SHORT&&(Z=n.RGB16I),U===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),U===n.UNSIGNED_INT&&(Z=n.RGBA32UI),U===n.BYTE&&(Z=n.RGBA8I),U===n.SHORT&&(Z=n.RGBA16I),U===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){const vt=J?Ca:Zt.getTransfer(X);U===n.FLOAT&&(Z=n.RGBA32F),U===n.HALF_FLOAT&&(Z=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Z=vt===le?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(E,v){let U;return E?v===null||v===ps||v===rr?U=n.DEPTH24_STENCIL8:v===ui?U=n.DEPTH32F_STENCIL8:v===Qr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ps||v===rr?U=n.DEPTH_COMPONENT24:v===ui?U=n.DEPTH_COMPONENT32F:v===Qr&&(U=n.DEPTH_COMPONENT16),U}function F(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Dn&&E.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){const v=E.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&u.delete(v)}function M(E){const v=E.target;v.removeEventListener("dispose",M),S(v)}function L(E){const v=i.get(E);if(v.__webglInit===void 0)return;const U=E.source,X=h.get(U);if(X){const J=X[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(E),Object.keys(X).length===0&&h.delete(U)}i.remove(E)}function y(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const U=E.source,X=h.get(U);delete X[v.__cacheKey],o.memory.textures--}function S(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let J=0;J<v.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[X][J]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=E.textures;for(let X=0,J=U.length;X<J;X++){const Z=i.get(U[X]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(U[X])}i.remove(E)}let D=0;function B(){D=0}function k(){const E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function nt(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function lt(E,v){const U=i.get(E);if(E.isVideoTexture&&it(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(U,E,v);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function st(E,v){const U=i.get(E);if(E.version>0&&U.__version!==E.version){at(U,E,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function rt(E,v){const U=i.get(E);if(E.version>0&&U.__version!==E.version){at(U,E,v);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function K(E,v){const U=i.get(E);if(E.version>0&&U.__version!==E.version){pt(U,E,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const _t={[sc]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},yt={[Dn]:n.NEAREST,[w0]:n.NEAREST_MIPMAP_NEAREST,[mo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},Ct={[D0]:n.NEVER,[O0]:n.ALWAYS,[L0]:n.LESS,[zp]:n.LEQUAL,[I0]:n.EQUAL,[F0]:n.GEQUAL,[U0]:n.GREATER,[N0]:n.NOTEQUAL};function It(E,v){if(v.type===ui&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===Ya||v.magFilter===mo||v.magFilter===ls||v.minFilter===gn||v.minFilter===Ya||v.minFilter===mo||v.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,_t[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,_t[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,_t[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,yt[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dn||v.minFilter!==mo&&v.minFilter!==ls||v.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $t(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const X=v.source;let J=h.get(X);J===void 0&&(J={},h.set(X,J));const Z=nt(v);if(Z!==E.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[Z].usedTimes++;const vt=J[E.__cacheKey];vt!==void 0&&(J[E.__cacheKey].usedTimes--,vt.usedTimes===0&&y(v)),E.__cacheKey=Z,E.__webglTexture=J[Z].texture}return U}function at(E,v,U){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const J=$t(E,v),Z=v.source;e.bindTexture(X,E.__webglTexture,n.TEXTURE0+U);const vt=i.get(Z);if(Z.version!==vt.__version||J===!0){e.activeTexture(n.TEXTURE0+U);const ht=Zt.getPrimaries(Zt.workingColorSpace),mt=v.colorSpace===Fi?null:Zt.getPrimaries(v.colorSpace),Nt=v.colorSpace===Fi||ht===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let dt=_(v.image,!1,s.maxTextureSize);dt=ct(v,dt);const St=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type);let Bt=A(v.internalFormat,St,Ut,v.colorSpace,v.isVideoTexture);It(X,v);let xt;const zt=v.mipmaps,Gt=v.isVideoTexture!==!0,oe=vt.__version===void 0||J===!0,H=Z.dataReady,bt=F(v,dt);if(v.isDepthTexture)Bt=x(v.format===or,v.type),oe&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Bt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Bt,dt.width,dt.height,0,St,Ut,null));else if(v.isDataTexture)if(zt.length>0){Gt&&oe&&e.texStorage2D(n.TEXTURE_2D,bt,Bt,zt[0].width,zt[0].height);for(let ot=0,ft=zt.length;ot<ft;ot++)xt=zt[ot],Gt?H&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,xt.width,xt.height,St,Ut,xt.data):e.texImage2D(n.TEXTURE_2D,ot,Bt,xt.width,xt.height,0,St,Ut,xt.data);v.generateMipmaps=!1}else Gt?(oe&&e.texStorage2D(n.TEXTURE_2D,bt,Bt,dt.width,dt.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,St,Ut,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Bt,dt.width,dt.height,0,St,Ut,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Gt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Bt,zt[0].width,zt[0].height,dt.depth);for(let ot=0,ft=zt.length;ot<ft;ot++)if(xt=zt[ot],v.format!==Cn)if(St!==null)if(Gt){if(H)if(v.layerUpdates.size>0){const wt=Dh(xt.width,xt.height,v.format,v.type);for(const Tt of v.layerUpdates){const Wt=xt.data.subarray(Tt*wt/xt.data.BYTES_PER_ELEMENT,(Tt+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,Tt,xt.width,xt.height,1,St,Wt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,dt.depth,St,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,Bt,xt.width,xt.height,dt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,dt.depth,St,Ut,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,Bt,xt.width,xt.height,dt.depth,0,St,Ut,xt.data)}else{Gt&&oe&&e.texStorage2D(n.TEXTURE_2D,bt,Bt,zt[0].width,zt[0].height);for(let ot=0,ft=zt.length;ot<ft;ot++)xt=zt[ot],v.format!==Cn?St!==null?Gt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,xt.width,xt.height,St,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,Bt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?H&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,xt.width,xt.height,St,Ut,xt.data):e.texImage2D(n.TEXTURE_2D,ot,Bt,xt.width,xt.height,0,St,Ut,xt.data)}else if(v.isDataArrayTexture)if(Gt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Bt,dt.width,dt.height,dt.depth),H)if(v.layerUpdates.size>0){const ot=Dh(dt.width,dt.height,v.format,v.type);for(const ft of v.layerUpdates){const wt=dt.data.subarray(ft*ot/dt.data.BYTES_PER_ELEMENT,(ft+1)*ot/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,dt.width,dt.height,1,St,Ut,wt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,St,Ut,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,dt.width,dt.height,dt.depth,0,St,Ut,dt.data);else if(v.isData3DTexture)Gt?(oe&&e.texStorage3D(n.TEXTURE_3D,bt,Bt,dt.width,dt.height,dt.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,St,Ut,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,dt.width,dt.height,dt.depth,0,St,Ut,dt.data);else if(v.isFramebufferTexture){if(oe)if(Gt)e.texStorage2D(n.TEXTURE_2D,bt,Bt,dt.width,dt.height);else{let ot=dt.width,ft=dt.height;for(let wt=0;wt<bt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Bt,ot,ft,0,St,Ut,null),ot>>=1,ft>>=1}}else if(zt.length>0){if(Gt&&oe){const ot=Q(zt[0]);e.texStorage2D(n.TEXTURE_2D,bt,Bt,ot.width,ot.height)}for(let ot=0,ft=zt.length;ot<ft;ot++)xt=zt[ot],Gt?H&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,St,Ut,xt):e.texImage2D(n.TEXTURE_2D,ot,Bt,St,Ut,xt);v.generateMipmaps=!1}else if(Gt){if(oe){const ot=Q(dt);e.texStorage2D(n.TEXTURE_2D,bt,Bt,ot.width,ot.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Ut,dt)}else e.texImage2D(n.TEXTURE_2D,0,Bt,St,Ut,dt);m(v)&&p(X),vt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function pt(E,v,U){if(v.image.length!==6)return;const X=$t(E,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const Z=i.get(J);if(J.version!==Z.__version||X===!0){e.activeTexture(n.TEXTURE0+U);const vt=Zt.getPrimaries(Zt.workingColorSpace),ht=v.colorSpace===Fi?null:Zt.getPrimaries(v.colorSpace),mt=v.colorSpace===Fi||vt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Nt=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,St=[];for(let ft=0;ft<6;ft++)!Nt&&!dt?St[ft]=_(v.image[ft],!0,s.maxCubemapSize):St[ft]=dt?v.image[ft].image:v.image[ft],St[ft]=ct(v,St[ft]);const Ut=St[0],Bt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),zt=A(v.internalFormat,Bt,xt,v.colorSpace),Gt=v.isVideoTexture!==!0,oe=Z.__version===void 0||X===!0,H=J.dataReady;let bt=F(v,Ut);It(n.TEXTURE_CUBE_MAP,v);let ot;if(Nt){Gt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,zt,Ut.width,Ut.height);for(let ft=0;ft<6;ft++){ot=St[ft].mipmaps;for(let wt=0;wt<ot.length;wt++){const Tt=ot[wt];v.format!==Cn?Bt!==null?Gt?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,0,0,Tt.width,Tt.height,Bt,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,zt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,0,0,Tt.width,Tt.height,Bt,xt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,zt,Tt.width,Tt.height,0,Bt,xt,Tt.data)}}}else{if(ot=v.mipmaps,Gt&&oe){ot.length>0&&bt++;const ft=Q(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,zt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(dt){Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,St[ft].width,St[ft].height,Bt,xt,St[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,zt,St[ft].width,St[ft].height,0,Bt,xt,St[ft].data);for(let wt=0;wt<ot.length;wt++){const Wt=ot[wt].image[ft].image;Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,0,0,Wt.width,Wt.height,Bt,xt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,zt,Wt.width,Wt.height,0,Bt,xt,Wt.data)}}else{Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Bt,xt,St[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,zt,Bt,xt,St[ft]);for(let wt=0;wt<ot.length;wt++){const Tt=ot[wt];Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,0,0,Bt,xt,Tt.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,zt,Bt,xt,Tt.image[ft])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),Z.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Et(E,v,U,X,J,Z){const vt=r.convert(U.format,U.colorSpace),ht=r.convert(U.type),mt=A(U.internalFormat,vt,ht,U.colorSpace),Nt=i.get(v),dt=i.get(U);if(dt.__renderTarget=v,!Nt.__hasExternalTextures){const St=Math.max(1,v.width>>Z),Ut=Math.max(1,v.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,mt,St,Ut,v.depth,0,vt,ht,null):e.texImage2D(J,Z,mt,St,Ut,0,vt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,dt.__webglTexture,0,z(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,dt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function I(E,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const X=v.depthTexture,J=X&&X.isDepthTexture?X.type:null,Z=x(v.stencilBuffer,J),vt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=z(v);q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Z,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,E)}else{const X=v.textures;for(let J=0;J<X.length;J++){const Z=X[J],vt=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),mt=A(Z.internalFormat,vt,ht,Z.colorSpace),Nt=z(v);U&&q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,mt,v.width,v.height):q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Y(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),lt(v.depthTexture,0);const J=X.__webglTexture,Z=z(v);if(v.depthTexture.format===Ks)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===or)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function $(E){const v=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=X}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Y(v.__webglFramebuffer,E)}else if(U){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),I(v.__webglDepthbuffer[X],E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),I(v.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function O(E,v,U){const X=i.get(E);v!==void 0&&Et(X.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&$(E)}function ut(E){const v=E.texture,U=i.get(E),X=i.get(v);E.addEventListener("dispose",M);const J=E.textures,Z=E.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ht]=[];for(let mt=0;mt<v.mipmaps.length;mt++)U.__webglFramebuffer[ht][mt]=n.createFramebuffer()}else U.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)U.__webglFramebuffer[ht]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(vt)for(let ht=0,mt=J.length;ht<mt;ht++){const Nt=i.get(J[ht]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&q(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ht=0;ht<J.length;ht++){const mt=J[ht];U.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ht]);const Nt=r.convert(mt.format,mt.colorSpace),dt=r.convert(mt.type),St=A(mt.internalFormat,Nt,dt,mt.colorSpace,E.isXRRenderTarget===!0),Ut=z(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,St,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,U.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),I(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),It(n.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)Et(U.__webglFramebuffer[ht][mt],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else Et(U.__webglFramebuffer[ht],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ht=0,mt=J.length;ht<mt;ht++){const Nt=J[ht],dt=i.get(Nt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),It(n.TEXTURE_2D,Nt),Et(U.__webglFramebuffer,E,Nt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(Nt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,X.__webglTexture),It(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)Et(U.__webglFramebuffer[mt],E,v,n.COLOR_ATTACHMENT0,ht,mt);else Et(U.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,ht,0);m(v)&&p(ht),e.unbindTexture()}E.depthBuffer&&$(E)}function C(E){const v=E.textures;for(let U=0,X=v.length;U<X;U++){const J=v[U];if(m(J)){const Z=T(E),vt=i.get(J).__webglTexture;e.bindTexture(Z,vt),p(Z),e.unbindTexture()}}}const P=[],b=[];function W(E){if(E.samples>0){if(q(E)===!1){const v=E.textures,U=E.width,X=E.height;let J=n.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(E),ht=v.length>1;if(ht)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[mt]);const Nt=i.get(v[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,U,X,0,0,U,X,J,n.NEAREST),l===!0&&(P.length=0,b.length=0,P.push(n.COLOR_ATTACHMENT0+mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(P.push(Z),b.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[mt]);const Nt=i.get(v[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function z(E){return Math.min(s.maxSamples,E.samples)}function q(E){const v=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function ct(E,v){const U=E.colorSpace,X=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==fr&&U!==Fi&&(Zt.getTransfer(U)===le?(X!==Cn||J!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Q(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=lt,this.setTexture2DArray=st,this.setTexture3D=rt,this.setTextureCube=K,this.rebindTextures=O,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=q}function VE(n,t){function e(i,s=Fi){let r;const o=Zt.getTransfer(s);if(i===_i)return n.UNSIGNED_BYTE;if(i===uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rp)return n.BYTE;if(i===Pp)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===cu)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===io)return n.HALF_FLOAT;if(i===Lp)return n.ALPHA;if(i===Ip)return n.RGB;if(i===Cn)return n.RGBA;if(i===Up)return n.LUMINANCE;if(i===Np)return n.LUMINANCE_ALPHA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===or)return n.DEPTH_STENCIL;if(i===Fp)return n.RED;if(i===hu)return n.RED_INTEGER;if(i===Op)return n.RG;if(i===du)return n.RG_INTEGER;if(i===pu)return n.RGBA_INTEGER;if(i===Wo||i===Xo||i===jo||i===qo)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uc||i===fc||i===hc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===uc||i===fc)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc||i===Ec||i===bc||i===Tc||i===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_c)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===wc||i===Cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yo)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bp||i===Rc||i===Pc||i===Dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class GE extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fo extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Fo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const XE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jE=`
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

}`;class qE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wi({vertexShader:XE,fragmentShader:jE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _n(new oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YE extends _s{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new qE,m=e.getContextAttributes();let p=null,T=null;const A=[],x=[],F=new Ft;let R=null;const M=new pn;M.viewport=new ye;const L=new pn;L.viewport=new ye;const y=[M,L],S=new GE;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let pt=A[at];return pt===void 0&&(pt=new Sl,A[at]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(at){let pt=A[at];return pt===void 0&&(pt=new Sl,A[at]=pt),pt.getGripSpace()},this.getHand=function(at){let pt=A[at];return pt===void 0&&(pt=new Sl,A[at]=pt),pt.getHandSpace()};function k(at){const pt=x.indexOf(at.inputSource);if(pt===-1)return;const Et=A[pt];Et!==void 0&&(Et.update(at.inputSource,at.frame,c||o),Et.dispatchEvent({type:at.type,data:at.inputSource}))}function nt(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",lt);for(let at=0;at<A.length;at++){const pt=x[at];pt!==null&&(x[at]=null,A[at].disconnect(pt))}D=null,B=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,s=null,T=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const pt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new ms(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let pt=null,Et=null,I=null;m.depth&&(I=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=m.stencil?or:Ks,Et=m.stencil?rr:ps);const Y={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Y),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new ms(h.textureWidth,h.textureHeight,{format:Cn,type:_i,depthTexture:new Qp(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function lt(at){for(let pt=0;pt<at.removed.length;pt++){const Et=at.removed[pt],I=x.indexOf(Et);I>=0&&(x[I]=null,A[I].disconnect(Et))}for(let pt=0;pt<at.added.length;pt++){const Et=at.added[pt];let I=x.indexOf(Et);if(I===-1){for(let $=0;$<A.length;$++)if($>=x.length){x.push(Et),I=$;break}else if(x[$]===null){x[$]=Et,I=$;break}if(I===-1)break}const Y=A[I];Y&&Y.connect(Et)}}const st=new j,rt=new j;function K(at,pt,Et){st.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(Et.matrixWorld);const I=st.distanceTo(rt),Y=pt.projectionMatrix.elements,$=Et.projectionMatrix.elements,O=Y[14]/(Y[10]-1),ut=Y[14]/(Y[10]+1),C=(Y[9]+1)/Y[5],P=(Y[9]-1)/Y[5],b=(Y[8]-1)/Y[0],W=($[8]+1)/$[0],z=O*b,q=O*W,it=I/(-b+W),ct=it*-b;if(pt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(ct),at.translateZ(it),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Y[10]===-1)at.projectionMatrix.copy(pt.projectionMatrix),at.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Q=O+it,E=ut+it,v=z-ct,U=q+(I-ct),X=C*ut/E*Q,J=P*ut/E*Q;at.projectionMatrix.makePerspective(v,U,X,J,Q,E),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function _t(at,pt){pt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(pt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let pt=at.near,Et=at.far;_.texture!==null&&(_.depthNear>0&&(pt=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),S.near=L.near=M.near=pt,S.far=L.far=M.far=Et,(D!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far),M.layers.mask=at.layers.mask|2,L.layers.mask=at.layers.mask|4,S.layers.mask=M.layers.mask|L.layers.mask;const I=at.parent,Y=S.cameras;_t(S,I);for(let $=0;$<Y.length;$++)_t(Y[$],I);Y.length===2?K(S,M,L):S.projectionMatrix.copy(M.projectionMatrix),yt(at,S,I)};function yt(at,pt,Et){Et===null?at.matrix.copy(pt.matrixWorld):(at.matrix.copy(Et.matrixWorld),at.matrix.invert(),at.matrix.multiply(pt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(pt.projectionMatrix),at.projectionMatrixInverse.copy(pt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Ic*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(at){l=at,h!==null&&(h.fixedFoveation=at),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=at)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Ct=null;function It(at,pt){if(u=pt.getViewerPose(c||o),g=pt,u!==null){const Et=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let I=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,I=!0);for(let $=0;$<Et.length;$++){const O=Et[$];let ut=null;if(d!==null)ut=d.getViewport(O);else{const P=f.getViewSubImage(h,O);ut=P.viewport,$===0&&(t.setRenderTargetTextures(T,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(T))}let C=y[$];C===void 0&&(C=new pn,C.layers.enable($),C.viewport=new ye,y[$]=C),C.matrix.fromArray(O.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(O.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(ut.x,ut.y,ut.width,ut.height),$===0&&(S.matrix.copy(C.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),I===!0&&S.cameras.push(C)}const Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const $=f.getDepthInformation(Et[0]);$&&$.isValid&&$.texture&&_.init(t,$,s.renderState)}}for(let Et=0;Et<A.length;Et++){const I=x[Et],Y=A[Et];I!==null&&Y!==void 0&&Y.update(I,pt,c||o)}Ct&&Ct(at,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),g=null}const $t=new Zp;$t.setAnimationLoop(It),this.setAnimationLoop=function(at){Ct=at},this.dispose=function(){}}}const ts=new Yn,$E=new _e;function KE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,A,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),A=T.envMap,x=T.envMapRotation;A&&(m.envMap.value=A,ts.copy(x),ts.x*=-1,ts.y*=-1,ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler(ts)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZE(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const x=A.program;i.uniformBlockBinding(T,x)}function c(T,A){let x=s[T.id];x===void 0&&(g(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const F=A.program;i.updateUBOMapping(T,F);const R=t.render.frame;r[T.id]!==R&&(h(T),r[T.id]=R)}function u(T){const A=f();T.__bindingPointIndex=A;const x=n.createBuffer(),F=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,F,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,x),x}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const A=s[T.id],x=T.uniforms,F=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,M=x.length;R<M;R++){const L=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,S=L.length;y<S;y++){const D=L[y];if(d(D,R,y,F)===!0){const B=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let nt=0;for(let lt=0;lt<k.length;lt++){const st=k[lt],rt=_(st);typeof st=="number"||typeof st=="boolean"?(D.__data[0]=st,n.bufferSubData(n.UNIFORM_BUFFER,B+nt,D.__data)):st.isMatrix3?(D.__data[0]=st.elements[0],D.__data[1]=st.elements[1],D.__data[2]=st.elements[2],D.__data[3]=0,D.__data[4]=st.elements[3],D.__data[5]=st.elements[4],D.__data[6]=st.elements[5],D.__data[7]=0,D.__data[8]=st.elements[6],D.__data[9]=st.elements[7],D.__data[10]=st.elements[8],D.__data[11]=0):(st.toArray(D.__data,nt),nt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,A,x,F){const R=T.value,M=A+"_"+x;if(F[M]===void 0)return typeof R=="number"||typeof R=="boolean"?F[M]=R:F[M]=R.clone(),!0;{const L=F[M];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return F[M]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(T){const A=T.uniforms;let x=0;const F=16;for(let M=0,L=A.length;M<L;M++){const y=Array.isArray(A[M])?A[M]:[A[M]];for(let S=0,D=y.length;S<D;S++){const B=y[S],k=Array.isArray(B.value)?B.value:[B.value];for(let nt=0,lt=k.length;nt<lt;nt++){const st=k[nt],rt=_(st),K=x%F,_t=K%rt.boundary,yt=K+_t;x+=_t,yt!==0&&F-yt<rt.storage&&(x+=F-yt),B.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=rt.storage}}}const R=x%F;return R>0&&(x+=F-R),T.__size=x,T.__cache={},this}function _(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const x=o.indexOf(A.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class JE{constructor(t={}){const{canvas:e=z0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Bi,this.toneMappingExposure=1;const x=this;let F=!1,R=0,M=0,L=null,y=-1,S=null;const D=new ye,B=new ye;let k=null;const nt=new Jt(0);let lt=0,st=e.width,rt=e.height,K=1,_t=null,yt=null;const Ct=new ye(0,0,st,rt),It=new ye(0,0,st,rt);let $t=!1;const at=new vu;let pt=!1,Et=!1;const I=new _e,Y=new _e,$=new j,O=new ye,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function P(){return L===null?K:1}let b=i;function W(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lu}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),b===null){const V="webgl2";if(b=W(V,w),b===null)throw W(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let z,q,it,ct,Q,E,v,U,X,J,Z,vt,ht,mt,Nt,dt,St,Ut,Bt,xt,zt,Gt,oe,H;function bt(){z=new iS(b),z.init(),Gt=new VE(b,z),q=new ZM(b,z,t,Gt),it=new kE(b,z),q.reverseDepthBuffer&&h&&it.buffers.depth.setReversed(!0),ct=new oS(b),Q=new bE,E=new HE(b,z,it,Q,q,Gt,ct),v=new QM(x),U=new nS(x),X=new dx(b),oe=new $M(b,X),J=new sS(b,X,ct,oe),Z=new lS(b,J,X,ct),Bt=new aS(b,q,E),dt=new JM(Q),vt=new EE(x,v,U,z,q,oe,dt),ht=new KE(x,Q),mt=new AE,Nt=new LE(z),Ut=new YM(x,v,U,it,Z,d,l),St=new OE(x,Z,q),H=new ZE(b,ct,q,it),xt=new KM(b,z,ct),zt=new rS(b,z,ct),ct.programs=vt.programs,x.capabilities=q,x.extensions=z,x.properties=Q,x.renderLists=mt,x.shadowMap=St,x.state=it,x.info=ct}bt();const ot=new YE(x,b);this.xr=ot,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(st,rt,!1))},this.getSize=function(w){return w.set(st,rt)},this.setSize=function(w,V,tt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=w,rt=V,e.width=Math.floor(w*K),e.height=Math.floor(V*K),tt===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(st*K,rt*K).floor()},this.setDrawingBufferSize=function(w,V,tt){st=w,rt=V,K=tt,e.width=Math.floor(w*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,V,tt,et){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,V,tt,et),it.viewport(D.copy(Ct).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(It)},this.setScissor=function(w,V,tt,et){w.isVector4?It.set(w.x,w.y,w.z,w.w):It.set(w,V,tt,et),it.scissor(B.copy(It).multiplyScalar(K).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(w){it.setScissorTest($t=w)},this.setOpaqueSort=function(w){_t=w},this.setTransparentSort=function(w){yt=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,V=!0,tt=!0){let et=0;if(w){let G=!1;if(L!==null){const gt=L.texture.format;G=gt===pu||gt===du||gt===hu}if(G){const gt=L.texture.type,At=gt===_i||gt===ps||gt===Qr||gt===rr||gt===uu||gt===fu,Rt=Ut.getClearColor(),Pt=Ut.getClearAlpha(),Ht=Rt.r,Xt=Rt.g,Dt=Rt.b;At?(g[0]=Ht,g[1]=Xt,g[2]=Dt,g[3]=Pt,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Ht,_[1]=Xt,_[2]=Dt,_[3]=Pt,b.clearBufferiv(b.COLOR,0,_))}else et|=b.COLOR_BUFFER_BIT}V&&(et|=b.DEPTH_BUFFER_BIT),tt&&(et|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),mt.dispose(),Nt.dispose(),Q.dispose(),v.dispose(),U.dispose(),Z.dispose(),oe.dispose(),H.dispose(),vt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",bu),ot.removeEventListener("sessionend",Tu),Xi.stop()};function ft(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const w=ct.autoReset,V=St.enabled,tt=St.autoUpdate,et=St.needsUpdate,G=St.type;bt(),ct.autoReset=w,St.enabled=V,St.autoUpdate=tt,St.needsUpdate=et,St.type=G}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wt(w){const V=w.target;V.removeEventListener("dispose",Wt),ve(V)}function ve(w){Ue(w),Q.remove(w)}function Ue(w){const V=Q.get(w).programs;V!==void 0&&(V.forEach(function(tt){vt.releaseProgram(tt)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,tt,et,G,gt){V===null&&(V=ut);const At=G.isMesh&&G.matrixWorld.determinant()<0,Rt=am(w,V,tt,et,G);it.setMaterial(et,At);let Pt=tt.index,Ht=1;if(et.wireframe===!0){if(Pt=J.getWireframeAttribute(tt),Pt===void 0)return;Ht=2}const Xt=tt.drawRange,Dt=tt.attributes.position;let Qt=Xt.start*Ht,he=(Xt.start+Xt.count)*Ht;gt!==null&&(Qt=Math.max(Qt,gt.start*Ht),he=Math.min(he,(gt.start+gt.count)*Ht)),Pt!==null?(Qt=Math.max(Qt,0),he=Math.min(he,Pt.count)):Dt!=null&&(Qt=Math.max(Qt,0),he=Math.min(he,Dt.count));const me=he-Qt;if(me<0||me===1/0)return;oe.setup(G,et,Rt,tt,Pt);let Je,ee=xt;if(Pt!==null&&(Je=X.get(Pt),ee=zt,ee.setIndex(Je)),G.isMesh)et.wireframe===!0?(it.setLineWidth(et.wireframeLinewidth*P()),ee.setMode(b.LINES)):ee.setMode(b.TRIANGLES);else if(G.isLine){let Lt=et.linewidth;Lt===void 0&&(Lt=1),it.setLineWidth(Lt*P()),G.isLineSegments?ee.setMode(b.LINES):G.isLineLoop?ee.setMode(b.LINE_LOOP):ee.setMode(b.LINE_STRIP)}else G.isPoints?ee.setMode(b.POINTS):G.isSprite&&ee.setMode(b.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ee.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))ee.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,Zn=G._multiDrawCounts,ne=G._multiDrawCount,Sn=Pt?X.get(Pt).bytesPerElement:1,vs=Q.get(et).currentProgram.getUniforms();for(let en=0;en<ne;en++)vs.setValue(b,"_gl_DrawID",en),ee.render(Lt[en]/Sn,Zn[en])}else if(G.isInstancedMesh)ee.renderInstances(Qt,me,G.count);else if(tt.isInstancedBufferGeometry){const Lt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Zn=Math.min(tt.instanceCount,Lt);ee.renderInstances(Qt,me,Zn)}else ee.render(Qt,me)};function ae(w,V,tt){w.transparent===!0&&w.side===Vn&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,lo(w,V,tt),w.side=Vi,w.needsUpdate=!0,lo(w,V,tt),w.side=Vn):lo(w,V,tt)}this.compile=function(w,V,tt=null){tt===null&&(tt=w),p=Nt.get(tt),p.init(V),A.push(p),tt.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==tt&&w.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const et=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){const Rt=gt[At];ae(Rt,tt,G),et.add(Rt)}else ae(gt,tt,G),et.add(gt)}),A.pop(),p=null,et},this.compileAsync=function(w,V,tt=null){const et=this.compile(w,V,tt);return new Promise(G=>{function gt(){if(et.forEach(function(At){Q.get(At).currentProgram.isReady()&&et.delete(At)}),et.size===0){G(w);return}setTimeout(gt,10)}z.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Mn=null;function Kn(w){Mn&&Mn(w)}function bu(){Xi.stop()}function Tu(){Xi.start()}const Xi=new Zp;Xi.setAnimationLoop(Kn),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(w){Mn=w,ot.setAnimationLoop(w),w===null?Xi.stop():Xi.start()},ot.addEventListener("sessionstart",bu),ot.addEventListener("sessionend",Tu),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(V),V=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,V,L),p=Nt.get(w,A.length),p.init(V),A.push(p),Y.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),at.setFromProjectionMatrix(Y),Et=this.localClippingEnabled,pt=dt.init(this.clippingPlanes,Et),m=mt.get(w,T.length),m.init(),T.push(m),ot.enabled===!0&&ot.isPresenting===!0){const gt=x.xr.getDepthSensingMesh();gt!==null&&Pa(gt,V,-1/0,x.sortObjects)}Pa(w,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(_t,yt),C=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,C&&Ut.addToRenderList(m,w),this.info.render.frame++,pt===!0&&dt.beginShadows();const tt=p.state.shadowsArray;St.render(tt,w,V),pt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){const gt=V.cameras;if(G.length>0)for(let At=0,Rt=gt.length;At<Rt;At++){const Pt=gt[At];wu(et,G,w,Pt)}C&&Ut.render(w);for(let At=0,Rt=gt.length;At<Rt;At++){const Pt=gt[At];Au(m,w,Pt,Pt.viewport)}}else G.length>0&&wu(et,G,w,V),C&&Ut.render(w),Au(m,w,V);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,V),oe.resetDefaultState(),y=-1,S=null,A.pop(),A.length>0?(p=A[A.length-1],pt===!0&&dt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Pa(w,V,tt,et){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||at.intersectsSprite(w)){et&&O.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Y);const At=Z.update(w),Rt=w.material;Rt.visible&&m.push(w,At,Rt,tt,O.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||at.intersectsObject(w))){const At=Z.update(w),Rt=w.material;if(et&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),O.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),O.copy(At.boundingSphere.center)),O.applyMatrix4(w.matrixWorld).applyMatrix4(Y)),Array.isArray(Rt)){const Pt=At.groups;for(let Ht=0,Xt=Pt.length;Ht<Xt;Ht++){const Dt=Pt[Ht],Qt=Rt[Dt.materialIndex];Qt&&Qt.visible&&m.push(w,At,Qt,tt,O.z,Dt)}}else Rt.visible&&m.push(w,At,Rt,tt,O.z,null)}}const gt=w.children;for(let At=0,Rt=gt.length;At<Rt;At++)Pa(gt[At],V,tt,et)}function Au(w,V,tt,et){const G=w.opaque,gt=w.transmissive,At=w.transparent;p.setupLightsView(tt),pt===!0&&dt.setGlobalState(x.clippingPlanes,tt),et&&it.viewport(D.copy(et)),G.length>0&&ao(G,V,tt),gt.length>0&&ao(gt,V,tt),At.length>0&&ao(At,V,tt),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function wu(w,V,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new ms(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?io:_i,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const gt=p.state.transmissionRenderTarget[et.id],At=et.viewport||D;gt.setSize(At.z,At.w);const Rt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(nt),lt=x.getClearAlpha(),lt<1&&x.setClearColor(16777215,.5),x.clear(),C&&Ut.render(tt);const Pt=x.toneMapping;x.toneMapping=Bi;const Ht=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),pt===!0&&dt.setGlobalState(x.clippingPlanes,et),ao(w,tt,et),E.updateMultisampleRenderTarget(gt),E.updateRenderTargetMipmap(gt),z.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Dt=0,Qt=V.length;Dt<Qt;Dt++){const he=V[Dt],me=he.object,Je=he.geometry,ee=he.material,Lt=he.group;if(ee.side===Vn&&me.layers.test(et.layers)){const Zn=ee.side;ee.side=tn,ee.needsUpdate=!0,Cu(me,tt,et,Je,ee,Lt),ee.side=Zn,ee.needsUpdate=!0,Xt=!0}}Xt===!0&&(E.updateMultisampleRenderTarget(gt),E.updateRenderTargetMipmap(gt))}x.setRenderTarget(Rt),x.setClearColor(nt,lt),Ht!==void 0&&(et.viewport=Ht),x.toneMapping=Pt}function ao(w,V,tt){const et=V.isScene===!0?V.overrideMaterial:null;for(let G=0,gt=w.length;G<gt;G++){const At=w[G],Rt=At.object,Pt=At.geometry,Ht=et===null?At.material:et,Xt=At.group;Rt.layers.test(tt.layers)&&Cu(Rt,V,tt,Pt,Ht,Xt)}}function Cu(w,V,tt,et,G,gt){w.onBeforeRender(x,V,tt,et,G,gt),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(x,V,tt,et,w,gt),G.transparent===!0&&G.side===Vn&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,x.renderBufferDirect(tt,V,et,G,w,gt),G.side=Vi,G.needsUpdate=!0,x.renderBufferDirect(tt,V,et,G,w,gt),G.side=Vn):x.renderBufferDirect(tt,V,et,G,w,gt),w.onAfterRender(x,V,tt,et,G,gt)}function lo(w,V,tt){V.isScene!==!0&&(V=ut);const et=Q.get(w),G=p.state.lights,gt=p.state.shadowsArray,At=G.state.version,Rt=vt.getParameters(w,G.state,gt,V,tt),Pt=vt.getProgramCacheKey(Rt);let Ht=et.programs;et.environment=w.isMeshStandardMaterial?V.environment:null,et.fog=V.fog,et.envMap=(w.isMeshStandardMaterial?U:v).get(w.envMap||et.environment),et.envMapRotation=et.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",Wt),Ht=new Map,et.programs=Ht);let Xt=Ht.get(Pt);if(Xt!==void 0){if(et.currentProgram===Xt&&et.lightsStateVersion===At)return Pu(w,Rt),Xt}else Rt.uniforms=vt.getUniforms(w),w.onBeforeCompile(Rt,x),Xt=vt.acquireProgram(Rt,Pt),Ht.set(Pt,Xt),et.uniforms=Rt.uniforms;const Dt=et.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=dt.uniform),Pu(w,Rt),et.needsLights=cm(w),et.lightsStateVersion=At,et.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.directionalShadowMap.value=G.state.directionalShadowMap,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotShadowMap.value=G.state.spotShadowMap,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMap.value=G.state.pointShadowMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),et.currentProgram=Xt,et.uniformsList=null,Xt}function Ru(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Ko.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Pu(w,V){const tt=Q.get(w);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function am(w,V,tt,et,G){V.isScene!==!0&&(V=ut),E.resetTextureUnits();const gt=V.fog,At=et.isMeshStandardMaterial?V.environment:null,Rt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fr,Pt=(et.isMeshStandardMaterial?U:v).get(et.envMap||At),Ht=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Xt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Dt=!!tt.morphAttributes.position,Qt=!!tt.morphAttributes.normal,he=!!tt.morphAttributes.color;let me=Bi;et.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(me=x.toneMapping);const Je=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ee=Je!==void 0?Je.length:0,Lt=Q.get(et),Zn=p.state.lights;if(pt===!0&&(Et===!0||w!==S)){const cn=w===S&&et.id===y;dt.setState(et,w,cn)}let ne=!1;et.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Zn.state.version||Lt.outputColorSpace!==Rt||G.isBatchedMesh&&Lt.batching===!1||!G.isBatchedMesh&&Lt.batching===!0||G.isBatchedMesh&&Lt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Lt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Lt.instancing===!1||!G.isInstancedMesh&&Lt.instancing===!0||G.isSkinnedMesh&&Lt.skinning===!1||!G.isSkinnedMesh&&Lt.skinning===!0||G.isInstancedMesh&&Lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Lt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Lt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Lt.instancingMorph===!1&&G.morphTexture!==null||Lt.envMap!==Pt||et.fog===!0&&Lt.fog!==gt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==dt.numPlanes||Lt.numIntersection!==dt.numIntersection)||Lt.vertexAlphas!==Ht||Lt.vertexTangents!==Xt||Lt.morphTargets!==Dt||Lt.morphNormals!==Qt||Lt.morphColors!==he||Lt.toneMapping!==me||Lt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Lt.__version=et.version);let Sn=Lt.currentProgram;ne===!0&&(Sn=lo(et,V,G));let vs=!1,en=!1,pr=!1;const ge=Sn.getUniforms(),Nn=Lt.uniforms;if(it.useProgram(Sn.program)&&(vs=!0,en=!0,pr=!0),et.id!==y&&(y=et.id,en=!0),vs||S!==w){it.buffers.depth.getReversed()?(I.copy(w.projectionMatrix),V0(I),G0(I),ge.setValue(b,"projectionMatrix",I)):ge.setValue(b,"projectionMatrix",w.projectionMatrix),ge.setValue(b,"viewMatrix",w.matrixWorldInverse);const yi=ge.map.cameraPosition;yi!==void 0&&yi.setValue(b,$.setFromMatrixPosition(w.matrixWorld)),q.logarithmicDepthBuffer&&ge.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ge.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,en=!0,pr=!0)}if(G.isSkinnedMesh){ge.setOptional(b,G,"bindMatrix"),ge.setOptional(b,G,"bindMatrixInverse");const cn=G.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),ge.setValue(b,"boneTexture",cn.boneTexture,E))}G.isBatchedMesh&&(ge.setOptional(b,G,"batchingTexture"),ge.setValue(b,"batchingTexture",G._matricesTexture,E),ge.setOptional(b,G,"batchingIdTexture"),ge.setValue(b,"batchingIdTexture",G._indirectTexture,E),ge.setOptional(b,G,"batchingColorTexture"),G._colorsTexture!==null&&ge.setValue(b,"batchingColorTexture",G._colorsTexture,E));const mr=tt.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&Bt.update(G,tt,Sn),(en||Lt.receiveShadow!==G.receiveShadow)&&(Lt.receiveShadow=G.receiveShadow,ge.setValue(b,"receiveShadow",G.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Nn.envMap.value=Pt,Nn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&V.environment!==null&&(Nn.envMapIntensity.value=V.environmentIntensity),en&&(ge.setValue(b,"toneMappingExposure",x.toneMappingExposure),Lt.needsLights&&lm(Nn,pr),gt&&et.fog===!0&&ht.refreshFogUniforms(Nn,gt),ht.refreshMaterialUniforms(Nn,et,K,rt,p.state.transmissionRenderTarget[w.id]),Ko.upload(b,Ru(Lt),Nn,E)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ko.upload(b,Ru(Lt),Nn,E),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ge.setValue(b,"center",G.center),ge.setValue(b,"modelViewMatrix",G.modelViewMatrix),ge.setValue(b,"normalMatrix",G.normalMatrix),ge.setValue(b,"modelMatrix",G.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const cn=et.uniformsGroups;for(let yi=0,Mi=cn.length;yi<Mi;yi++){const Du=cn[yi];H.update(Du,Sn),H.bind(Du,Sn)}}return Sn}function lm(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function cm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,V,tt){Q.get(w.texture).__webglTexture=V,Q.get(w.depthTexture).__webglTexture=tt;const et=Q.get(w);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const tt=Q.get(w);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,tt=0){L=w,R=V,M=tt;let et=!0,G=null,gt=!1,At=!1;if(w){const Pt=Q.get(w);if(Pt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(b.FRAMEBUFFER,null),et=!1;else if(Pt.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Pt.__hasExternalTextures)E.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Dt=w.depthTexture;if(Pt.__boundDepthTexture!==Dt){if(Dt!==null&&Q.has(Dt)&&(w.width!==Dt.image.width||w.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Xt=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[V])?G=Xt[V][tt]:G=Xt[V],gt=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?G=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?G=Xt[tt]:G=Xt,D.copy(w.viewport),B.copy(w.scissor),k=w.scissorTest}else D.copy(Ct).multiplyScalar(K).floor(),B.copy(It).multiplyScalar(K).floor(),k=$t;if(it.bindFramebuffer(b.FRAMEBUFFER,G)&&et&&it.drawBuffers(w,G),it.viewport(D),it.scissor(B),it.setScissorTest(k),gt){const Pt=Q.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pt.__webglTexture,tt)}else if(At){const Pt=Q.get(w.texture),Ht=V||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Pt.__webglTexture,tt||0,Ht)}y=-1},this.readRenderTargetPixels=function(w,V,tt,et,G,gt,At){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt){it.bindFramebuffer(b.FRAMEBUFFER,Rt);try{const Pt=w.texture,Ht=Pt.format,Xt=Pt.type;if(!q.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-et&&tt>=0&&tt<=w.height-G&&b.readPixels(V,tt,et,G,Gt.convert(Ht),Gt.convert(Xt),gt)}finally{const Pt=L!==null?Q.get(L).__webglFramebuffer:null;it.bindFramebuffer(b.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,V,tt,et,G,gt,At){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt){const Pt=w.texture,Ht=Pt.format,Xt=Pt.type;if(!q.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-et&&tt>=0&&tt<=w.height-G){it.bindFramebuffer(b.FRAMEBUFFER,Rt);const Dt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Dt),b.bufferData(b.PIXEL_PACK_BUFFER,gt.byteLength,b.STREAM_READ),b.readPixels(V,tt,et,G,Gt.convert(Ht),Gt.convert(Xt),0);const Qt=L!==null?Q.get(L).__webglFramebuffer:null;it.bindFramebuffer(b.FRAMEBUFFER,Qt);const he=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await H0(b,he,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Dt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,gt),b.deleteBuffer(Dt),b.deleteSync(he),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,tt=0){w.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);const et=Math.pow(2,-tt),G=Math.floor(w.image.width*et),gt=Math.floor(w.image.height*et),At=V!==null?V.x:0,Rt=V!==null?V.y:0;E.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,tt,0,0,At,Rt,G,gt),it.unbindTexture()},this.copyTextureToTexture=function(w,V,tt=null,et=null,G=0){w.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,w=arguments[1],V=arguments[2],G=arguments[3]||0,tt=null);let gt,At,Rt,Pt,Ht,Xt,Dt,Qt,he;const me=w.isCompressedTexture?w.mipmaps[G]:w.image;tt!==null?(gt=tt.max.x-tt.min.x,At=tt.max.y-tt.min.y,Rt=tt.isBox3?tt.max.z-tt.min.z:1,Pt=tt.min.x,Ht=tt.min.y,Xt=tt.isBox3?tt.min.z:0):(gt=me.width,At=me.height,Rt=me.depth||1,Pt=0,Ht=0,Xt=0),et!==null?(Dt=et.x,Qt=et.y,he=et.z):(Dt=0,Qt=0,he=0);const Je=Gt.convert(V.format),ee=Gt.convert(V.type);let Lt;V.isData3DTexture?(E.setTexture3D(V,0),Lt=b.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(E.setTexture2DArray(V,0),Lt=b.TEXTURE_2D_ARRAY):(E.setTexture2D(V,0),Lt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,V.unpackAlignment);const Zn=b.getParameter(b.UNPACK_ROW_LENGTH),ne=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Sn=b.getParameter(b.UNPACK_SKIP_PIXELS),vs=b.getParameter(b.UNPACK_SKIP_ROWS),en=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,me.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,me.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Pt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ht),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Xt);const pr=w.isDataArrayTexture||w.isData3DTexture,ge=V.isDataArrayTexture||V.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Nn=Q.get(w),mr=Q.get(V),cn=Q.get(Nn.__renderTarget),yi=Q.get(mr.__renderTarget);it.bindFramebuffer(b.READ_FRAMEBUFFER,cn.__webglFramebuffer),it.bindFramebuffer(b.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Mi=0;Mi<Rt;Mi++)pr&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,G,Xt+Mi),w.isDepthTexture?(ge&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Q.get(V).__webglTexture,G,he+Mi),b.blitFramebuffer(Pt,Ht,gt,At,Dt,Qt,gt,At,b.DEPTH_BUFFER_BIT,b.NEAREST)):ge?b.copyTexSubImage3D(Lt,G,Dt,Qt,he+Mi,Pt,Ht,gt,At):b.copyTexSubImage2D(Lt,G,Dt,Qt,he+Mi,Pt,Ht,gt,At);it.bindFramebuffer(b.READ_FRAMEBUFFER,null),it.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ge?w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Lt,G,Dt,Qt,he,gt,At,Rt,Je,ee,me.data):V.isCompressedArrayTexture?b.compressedTexSubImage3D(Lt,G,Dt,Qt,he,gt,At,Rt,Je,me.data):b.texSubImage3D(Lt,G,Dt,Qt,he,gt,At,Rt,Je,ee,me):w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,G,Dt,Qt,gt,At,Je,ee,me.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,G,Dt,Qt,me.width,me.height,Je,me.data):b.texSubImage2D(b.TEXTURE_2D,G,Dt,Qt,gt,At,Je,ee,me);b.pixelStorei(b.UNPACK_ROW_LENGTH,Zn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ne),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Sn),b.pixelStorei(b.UNPACK_SKIP_ROWS,vs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,en),G===0&&V.generateMipmaps&&b.generateMipmap(Lt),it.unbindTexture()},this.copyTextureToTexture3D=function(w,V,tt=null,et=null,G=0){return w.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,et=arguments[1]||null,w=arguments[2],V=arguments[3],G=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,tt,et,G)},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),it.unbindTexture()},this.resetState=function(){R=0,M=0,L=null,it.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class QE extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new j;class ua{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sm extends hr{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Us;const Tr=new j,Ns=new j,Fs=new j,Os=new Ft,Ar=new Ft,rm=new _e,Oo=new j,wr=new j,Bo=new j,Lh=new Ft,El=new Ft,Ih=new Ft;class eb extends Le{constructor(t=new sm){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new xi;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tb(e,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new ua(i,3,0,!1)),Us.setAttribute("uv",new ua(i,2,3,!1))}this.geometry=Us,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),rm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Fs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ko(Oo.set(-.5,-.5,0),Fs,o,Ns,s,r),ko(wr.set(.5,-.5,0),Fs,o,Ns,s,r),ko(Bo.set(.5,.5,0),Fs,o,Ns,s,r),Lh.set(0,0),El.set(1,0),Ih.set(1,1);let a=t.ray.intersectTriangle(Oo,wr,Bo,!1,Tr);if(a===null&&(ko(wr.set(-.5,.5,0),Fs,o,Ns,s,r),El.set(0,1),a=t.ray.intersectTriangle(Oo,Bo,wr,!1,Tr),a===null))return;const l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:mn.getInterpolation(Tr,Oo,wr,Bo,Lh,El,Ih,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ko(n,t,e,i,s,r){Os.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ar.x=r*Os.x-s*Os.y,Ar.y=s*Os.x+r*Os.y):Ar.copy(Os),n.copy(t),n.x+=Ar.x,n.y+=Ar.y,n.applyMatrix4(rm)}class Uh extends Ze{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yu extends xi{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new j,f=new j,h=new j;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new jn(a,3)),this.setAttribute("normal",new jn(l,3)),this.setAttribute("uv",new jn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nh extends hr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kp,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mu extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nb extends Mu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const bl=new _e,Fh=new j,Oh=new j;class ib{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vu,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sb extends ib{constructor(){super(new Jp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tl extends Mu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new sb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rb extends Mu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ob{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bh(){return performance.now()}const kh=new _e;class ab{constructor(t,e,i=0,s=1/0){this.ray=new gu(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new _u,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kh),this}intersectObject(t,e=!0,i=[]){return Nc(t,this,i,e),i.sort(zh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Nc(t[s],this,i,e);return i.sort(zh),i}}function zh(n,t){return n.distance-t.distance}function Nc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],t,e,!0)}}class Hh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lb extends _s{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);const Vh={type:"change"},Su={type:"start"},om={type:"end"},zo=new gu,Gh=new Ui,cb=Math.cos(70*k0.DEG2RAD),Ae=new j,Qe=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Al=1e-6;class ub extends lb{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Gi,this._lastTargetPosition=new j,this._quat=new Gi().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hh,this._sphericalDelta=new Hh,this._scale=1,this._panOffset=new j,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new j,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hb.bind(this),this._onPointerDown=fb.bind(this),this._onPointerUp=db.bind(this),this._onContextMenu=yb.bind(this),this._onMouseWheel=gb.bind(this),this._onKeyDown=_b.bind(this),this._onTouchStart=vb.bind(this),this._onTouchMove=xb.bind(this),this._onMouseDown=pb.bind(this),this._onMouseMove=mb.bind(this),this._interceptControlDown=Mb.bind(this),this._interceptControlUp=Sb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vh),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Qe:i>Math.PI&&(i-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ae.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new j(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zo.origin.copy(this.object.position),zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zo.direction))<cb?this.object.lookAt(this.target):(Gh.setFromNormalAndCoplanarPoint(this.object.up,this.target),zo.intersectPlane(Gh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Al||this._lastTargetPosition.distanceToSquared(this.target)>Al?(this.dispatchEvent(Vh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function fb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function db(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(om),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case Ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case Ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Su)}function mb(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function gb(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(Su),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(om))}function _b(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function vb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Su)}function xb(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function yb(n){this.enabled!==!1&&n.preventDefault()}function Mb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Wh=[{id:"birthday-1",text:"生日快乐",category:"生日",color:"#FFF3CD",emoji:"🎂",tagColor:"#FFD166"},{id:"birthday-2",text:"周岁纪念",category:"生日",color:"#FFF8E1",emoji:"👶",tagColor:"#FFB347"},{id:"birthday-3",text:"生日贺卡",category:"生日",color:"#FFF3CD",emoji:"💌",tagColor:"#FFD166"},{id:"birthday-4",text:"寿星专属",category:"生日",color:"#FFF8E1",emoji:"🌟",tagColor:"#FFB347"},{id:"birthday-5",text:"生日祝福",category:"生日",color:"#FFF3CD",emoji:"🎉",tagColor:"#FFD166"},{id:"birthday-6",text:"生日搞怪",category:"生日",color:"#FFF8E1",emoji:"🤪",tagColor:"#FFB347"},{id:"birthday-7",text:"生日配图",category:"生日",color:"#FFF3CD",emoji:"📸",tagColor:"#FFD166"},{id:"birthday-8",text:"礼物文案",category:"生日",color:"#FFF8E1",emoji:"🎁",tagColor:"#FFB347"},{id:"birthday-9",text:"寿星头像",category:"生日",color:"#FFF3CD",emoji:"👑",tagColor:"#FFD166"},{id:"bless-1",text:"新婚祝福",category:"祝福",color:"#FFE4E1",emoji:"💒",tagColor:"#FF9AA2"},{id:"bless-2",text:"升学祝福",category:"祝福",color:"#FFD1DC",emoji:"🎓",tagColor:"#FF9AA2"},{id:"bless-3",text:"乔迁贺词",category:"祝福",color:"#FFE4E1",emoji:"🏠",tagColor:"#FF9AA2"},{id:"bless-4",text:"升职加薪",category:"祝福",color:"#FFD1DC",emoji:"💰",tagColor:"#FF9AA2"},{id:"bless-5",text:"平安喜乐",category:"祝福",color:"#FFE4E1",emoji:"🕊️",tagColor:"#FF9AA2"},{id:"bless-6",text:"岁岁安康",category:"祝福",color:"#FFD1DC",emoji:"🍀",tagColor:"#FF9AA2"},{id:"bless-7",text:"万事顺意",category:"祝福",color:"#FFE4E1",emoji:"✨",tagColor:"#FF9AA2"},{id:"bless-8",text:"开工大吉",category:"祝福",color:"#FFD1DC",emoji:"🧧",tagColor:"#FF9AA2"},{id:"bless-9",text:"节日祝福",category:"祝福",color:"#FFE4E1",emoji:"🎊",tagColor:"#FF9AA2"},{id:"bless-10",text:"长辈问候",category:"祝福",color:"#FFD1DC",emoji:"👴",tagColor:"#FF9AA2"},{id:"bless-11",text:"暖心寄语",category:"祝福",color:"#FFE4E1",emoji:"💕",tagColor:"#FF9AA2"},{id:"bless-12",text:"毕业祝福",category:"祝福",color:"#FFD1DC",emoji:"🎓",tagColor:"#FF9AA2"},{id:"fun-1",text:"沙雕文案",category:"搞怪",color:"#D4F1C5",emoji:"🤣",tagColor:"#7EC8A0"},{id:"fun-2",text:"表情包配文",category:"搞怪",color:"#C8E6C9",emoji:"😜",tagColor:"#7EC8A0"},{id:"fun-3",text:"摆烂语录",category:"搞怪",color:"#D4F1C5",emoji:"🛌",tagColor:"#7EC8A0"},{id:"fun-4",text:"发疯文学",category:"搞怪",color:"#C8E6C9",emoji:"🤯",tagColor:"#7EC8A0"},{id:"fun-5",text:"趣味整活",category:"搞怪",color:"#D4F1C5",emoji:"🎭",tagColor:"#7EC8A0"},{id:"fun-6",text:"自嘲段子",category:"搞怪",color:"#C8E6C9",emoji:"😅",tagColor:"#7EC8A0"},{id:"fun-7",text:"损友专属",category:"搞怪",color:"#D4F1C5",emoji:"👯",tagColor:"#7EC8A0"},{id:"fun-8",text:"脑洞短句",category:"搞怪",color:"#C8E6C9",emoji:"💡",tagColor:"#7EC8A0"},{id:"fun-9",text:"搞笑朋友圈",category:"搞怪",color:"#D4F1C5",emoji:"😂",tagColor:"#7EC8A0"},{id:"fest-1",text:"春节文案",category:"节日",color:"#D4E6F1",emoji:"🧨",tagColor:"#85C1E9"},{id:"fest-2",text:"中秋祝福",category:"节日",color:"#BBDEFB",emoji:"🌕",tagColor:"#85C1E9"},{id:"fest-3",text:"端午安康",category:"节日",color:"#D4E6F1",emoji:"🐲",tagColor:"#85C1E9"},{id:"fest-4",text:"七夕文案",category:"节日",color:"#BBDEFB",emoji:"🌌",tagColor:"#85C1E9"},{id:"fest-5",text:"圣诞快乐",category:"节日",color:"#D4E6F1",emoji:"🎄",tagColor:"#85C1E9"},{id:"fest-6",text:"元旦文案",category:"节日",color:"#BBDEFB",emoji:"🎆",tagColor:"#85C1E9"},{id:"fest-7",text:"五一文案",category:"节日",color:"#D4E6F1",emoji:"🛠️",tagColor:"#85C1E9"},{id:"fest-8",text:"六一文案",category:"节日",color:"#BBDEFB",emoji:"🧸",tagColor:"#85C1E9"},{id:"fest-9",text:"元宵文案",category:"节日",color:"#D4E6F1",emoji:"🏮",tagColor:"#85C1E9"},{id:"emo-1",text:"温柔治愈",category:"情感",color:"#E8DAEF",emoji:"🌸",tagColor:"#BB8FCE"},{id:"emo-2",text:"伤感短句",category:"情感",color:"#D7BDE2",emoji:"🌧️",tagColor:"#BB8FCE"},{id:"emo-3",text:"告白情话",category:"情感",color:"#E8DAEF",emoji:"💗",tagColor:"#BB8FCE"},{id:"emo-4",text:"暗恋文案",category:"情感",color:"#D7BDE2",emoji:"👀",tagColor:"#BB8FCE"},{id:"emo-5",text:"闺蜜文案",category:"情感",color:"#E8DAEF",emoji:"👭",tagColor:"#BB8FCE"},{id:"emo-6",text:"兄弟文案",category:"情感",color:"#D7BDE2",emoji:"👬",tagColor:"#BB8FCE"},{id:"emo-7",text:"亲子语录",category:"情感",color:"#E8DAEF",emoji:"👨‍👩‍👧",tagColor:"#BB8FCE"},{id:"util-1",text:"短视频配文",category:"素材",color:"#FFE5CC",emoji:"🎬",tagColor:"#F0A07C"},{id:"util-2",text:"朋友圈文案",category:"素材",color:"#FFDAB9",emoji:"📱",tagColor:"#F0A07C"},{id:"util-3",text:"海报短句",category:"素材",color:"#FFE5CC",emoji:"🖼️",tagColor:"#F0A07C"},{id:"util-4",text:"短视频标题",category:"素材",color:"#FFDAB9",emoji:"📹",tagColor:"#F0A07C"},{id:"util-5",text:"签名文案",category:"素材",color:"#FFE5CC",emoji:"✍️",tagColor:"#F0A07C"},{id:"util-6",text:"走心短句",category:"素材",color:"#FFDAB9",emoji:"💫",tagColor:"#F0A07C"},{id:"beautiful-1",text:"好看的",category:"好看的",color:"#FFDAB9",emoji:"✅",tagColor:"#F0A07C"}],Eb={class:"globe-wrapper"},bb={class:"tooltip-emoji"},Tb={class:"tooltip-text"},Ab={class:"tooltip-category"},Cr=4.5,wb=.7,Cb=.9,Rb=Ve({__name:"StickerGlobe",emits:["zoom","sticker-click"],setup(n,{expose:t,emit:e}){const i=qt(),s=qt(!1),r=qt(null),o=qt({x:0,y:0}),a=e;let l,c,u,f,h=[],d,g,_,m=new Ft,p=null,T=null,A=0,x=null,F="idle",R=0,M=null,L=null,y=null,S=null,D=null,B=0;function k(I){const Y=[],$=Math.PI*(3-Math.sqrt(5));for(let O=0;O<I;O++){const ut=1-O/(I-1)*2,C=Math.sqrt(1-ut*ut),P=$*O;Y.push(new j(Math.cos(P)*C*Cr,ut*Cr,Math.sin(P)*C*Cr))}return Y}function nt(I){const Y=document.createElement("canvas"),$=128;Y.width=$,Y.height=$;const O=Y.getContext("2d"),ut=12,C=3,P=$-C*2,b=$-C*2,W=C,z=C;O.shadowColor="rgba(0,0,0,0.08)",O.shadowBlur=6,O.shadowOffsetX=1,O.shadowOffsetY=2,O.beginPath(),O.moveTo(W+ut,z),O.lineTo(W+P-ut,z),O.quadraticCurveTo(W+P,z,W+P,z+ut),O.lineTo(W+P,z+b-ut),O.quadraticCurveTo(W+P,z+b,W+P-ut,z+b),O.lineTo(W+ut,z+b),O.quadraticCurveTo(W,z+b,W,z+b-ut),O.lineTo(W,z+ut),O.quadraticCurveTo(W,z,W+ut,z),O.closePath(),O.fillStyle=I.color,O.fill(),O.shadowColor="transparent",O.shadowBlur=0,O.shadowOffsetX=0,O.shadowOffsetY=0;const q=O.getImageData(0,0,$,$),it=q.data;for(let U=0;U<it.length;U+=4){const X=(Math.random()-.5)*12;it[U]=Math.min(255,Math.max(0,it[U]+X)),it[U+1]=Math.min(255,Math.max(0,it[U+1]+X)),it[U+2]=Math.min(255,Math.max(0,it[U+2]+X))}O.putImageData(q,0,0);const ct=11,Q=60,E=($-Q)/2;O.beginPath(),O.moveTo(E+4,5),O.lineTo(E+Q-4,5),O.quadraticCurveTo(E+Q,5,E+Q,9),O.lineTo(E+Q,5+ct-4),O.quadraticCurveTo(E+Q,5+ct,E+Q-4,5+ct),O.lineTo(E+4,5+ct),O.quadraticCurveTo(E,5+ct,E,5+ct-4),O.lineTo(E,9),O.quadraticCurveTo(E,5,E+4,5),O.closePath(),O.fillStyle=I.tagColor,O.globalAlpha=.65,O.fill(),O.globalAlpha=1,O.font='18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif',O.textAlign="center",O.textBaseline="middle",O.fillText(I.emoji,$/2,40),O.font='bold 7.5px "PingFang SC", "Microsoft YaHei", sans-serif',O.fillStyle="black",O.textAlign="center",O.textBaseline="middle",O.fillText(I.category,$/2,59),O.font='bold 10px "PingFang SC", "Microsoft YaHei", sans-serif',O.fillStyle="black",O.textAlign="center",O.textBaseline="middle",O.fillText(I.text,$/2,76),O.beginPath(),O.moveTo(W+ut,z),O.lineTo(W+P-ut,z),O.quadraticCurveTo(W+P,z,W+P,z+ut),O.lineTo(W+P,z+b-ut),O.quadraticCurveTo(W+P,z+b,W+P-ut,z+b),O.lineTo(W+ut,z+b),O.quadraticCurveTo(W,z+b,W,z+b-ut),O.lineTo(W,z+ut),O.quadraticCurveTo(W,z,W+ut,z),O.closePath(),O.strokeStyle="rgba(180,160,140,0.35)",O.lineWidth=1.5,O.stroke();const v=new Uh(Y);return v.minFilter=gn,v.magFilter=gn,v.colorSpace=rn,v.generateMipmaps=!1,v}function lt(I,Y){const $=nt(I),O=.82+Math.random()*.16,ut=new Nh({map:$,side:Vn,roughness:.55,metalness:.02,transparent:!0,opacity:O,depthWrite:!0}),C=new oo(wb,Cb),P=new _n(C,ut);P.position.copy(Y);const b=Y.clone().normalize(),W=new Gi,z=new j(0,1,0),q=new _e;if(Math.abs(b.dot(z))>.999){const it=new j(1,0,0);q.lookAt(Y.clone().add(b),Y,it)}else q.lookAt(Y.clone().add(b),Y,z);return W.setFromRotationMatrix(q),P.quaternion.copy(W),P.rotateZ((Math.random()-.5)*.3),P.rotateY((Math.random()-.5)*.3),P.position.add(b.clone().multiplyScalar(.12+Math.random()*.06)),P.userData={stickerData:I,originalPosition:P.position.clone(),originalRotation:P.rotation.clone(),normal:b},P}function st(){const I=document.createElement("canvas");I.width=64,I.height=64;const Y=I.getContext("2d"),$=Y.createRadialGradient(32,32,0,32,32,32);$.addColorStop(0,"rgba(255,255,255,0.15)"),$.addColorStop(.4,"rgba(255,255,255,0.06)"),$.addColorStop(1,"rgba(255,255,255,0)"),Y.fillStyle=$,Y.fillRect(0,0,64,64);const O=new Uh(I),ut=new sm({map:O,blending:jl,depthWrite:!1,transparent:!0,opacity:.5}),C=new eb(ut);return C.scale.set(1.8,1.8,1),C}function rt(){if(!i.value)return;l=new QE,c=new pn(50,i.value.clientWidth/i.value.clientHeight,.1,100),c.position.set(0,.5,11),c.lookAt(0,0,0),u=new JE({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(i.value.clientWidth,i.value.clientHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),u.shadowMap.enabled=!1,u.toneMapping=wp,u.toneMappingExposure=1,i.value.appendChild(u.domElement),f=new ub(c,u.domElement),f.enableDamping=!0,f.dampingFactor=.08,f.autoRotate=!0,f.autoRotateSpeed=.4,f.minDistance=6,f.maxDistance=18,f.maxPolarAngle=Math.PI*.8,f.target.set(0,0,0),f.update(),_=new ab,_.params.Points.threshold=.5,_.params.Line.threshold=.5;const I=new rb("#ffffff",3.5);l.add(I);const Y=new nb("#dcefff","#f0e6d3",1.8);l.add(Y);const $=new Tl("#ffffff",2.5);$.position.set(8,6,8),l.add($);const O=new Tl("#c8d6ff",1.5);O.position.set(-5,-2,-3),l.add(O);const ut=new Tl("#ffe8d6",1.2);ut.position.set(0,-4,2),l.add(ut);const C=k(Wh.length);Wh.forEach((q,it)=>{const ct=lt(q,C[it]),Q=st();ct.add(Q),l.add(ct),h.push(ct)});const P=new yu(Cr+.05,.03,64,128),b=new Nh({color:"#c8e0f0",roughness:.3,metalness:.1,transparent:!0,opacity:.3,depthWrite:!1}),W=new _n(P,b);W.rotation.x=Math.PI/2,l.add(W);const z=new _n(P.clone(),b.clone());z.rotation.x=Math.PI/3,z.rotation.y=Math.PI/4,z.material=b.clone(),z.material.opacity=.15,l.add(z),g=new ob,u.domElement.addEventListener("mousemove",K),u.domElement.addEventListener("click",Ct),u.domElement.addEventListener("touchmove",_t,{passive:!1}),window.addEventListener("resize",Et),pt()}function K(I){if(!i.value||!u)return;const Y=i.value.getBoundingClientRect();m.x=(I.clientX-Y.left)/Y.width*2-1,m.y=-((I.clientY-Y.top)/Y.height)*2+1,yt(I.clientX,I.clientY)}function _t(I){if(!(!i.value||!u)&&I.touches.length===1){const Y=I.touches[0],$=i.value.getBoundingClientRect();m.x=(Y.clientX-$.left)/$.width*2-1,m.y=-((Y.clientY-$.top)/$.height)*2+1,yt(Y.clientX,Y.clientY)}}function yt(I,Y){if(!c||!l)return;_.setFromCamera(m,c);const $=_.intersectObjects(h,!1);if(p&&(!$.length||$[0].object!==p)){const O=p.userData;O.originalPosition&&(p.position.copy(O.originalPosition),p.scale.set(1,1,1),p.material.emissive.set("#000000")),p=null,T&&clearTimeout(T),T=setTimeout(()=>{s.value=!1},150)}if($.length>0){const O=$[0].object;if(O!==p&&h.includes(O)){p=O;const ut=O.userData;ut.originalPosition&&ut.normal&&(O.position.copy(ut.originalPosition).add(ut.normal.clone().multiplyScalar(.25)),O.scale.set(1.25,1.25,1.25)),O.material.emissive.set("#ffffff"),O.material.emissiveIntensity=.3,T&&clearTimeout(T),r.value=ut.stickerData,o.value={x:I,y:Y},s.value=!0}}}function Ct(I){if(!i.value||!u||!c||!l)return;const Y=i.value.getBoundingClientRect(),$=(I.clientX-Y.left)/Y.width*2-1,O=-((I.clientY-Y.top)/Y.height)*2+1;_.setFromCamera(new Ft($,O),c);const ut=_.intersectObjects(h,!1);if(ut.length>0){const P=ut[0].object.userData;P.stickerData&&a("sticker-click",P.stickerData)}}function It(I){if(!I.trim())return;$t();const Y=I.trim().toLowerCase();let $=null;for(const z of h)if(z.userData.stickerData.text.toLowerCase().includes(Y)){$=z;break}if(!$){console.log("未找到匹配的便签:",I);return}const ut=$.userData.normal,C=$.position.clone(),P=new j(0,0,1);P.applyQuaternion($.quaternion).normalize();const W=ut.clone().multiplyScalar(Cr).clone().add(P.clone().multiplyScalar(11));x=$,F="rotating",R=performance.now(),M=c.position.clone(),L=W,y=C.clone(),S=ut.clone(),D=$.scale.clone(),B=$.material.opacity,f.autoRotate=!1}function $t(){if(x){const I=x.userData;x.scale.copy(D||new j(1,1,1)),I.originalPosition&&x.position.copy(I.originalPosition),x.material.opacity=B||1,x.material.emissive.set("#000000"),x.material.emissiveIntensity=0,x=null}F="idle",M=null,L=null,y=null,S=null,D=null}function at(I){if(!x||F==="idle"||!M||!L||!S)return;const Y=(I-R)/1e3;if(F==="rotating"){let O=Math.min(Y/1.2,1);O=O<.5?4*O*O*O:1-Math.pow(-2*O+2,3)/2,c.position.lerpVectors(M,L,O),c.lookAt(0,0,0),f.target.set(0,0,0),f.update();const ut=x.material;ut.emissive.set("#ffffff"),ut.emissiveIntensity=.15+O*.3,O>=1&&(F="zooming",R=I,D=x.scale.clone(),y&&S&&x.position.copy(y.clone().add(S.clone().multiplyScalar(.15))))}else if(F==="zooming"){let O=Math.min(Y/.8,1);const ut=1.70158;O=1+(ut+1)*Math.pow(O-1,3)+ut*Math.pow(O-1,2);const P=(D==null?void 0:D.x)||1,W=P+(1.6-P)*O;x.scale.set(W,W,W);const z=x.material;z.opacity=Math.min(1,(B||.9)+O*.15),z.emissiveIntensity=.45,O>=1&&(F="holding",R=I)}else if(F==="holding")Y>2&&(F="reversing",R=I,D=x.scale.clone());else if(F==="reversing"){let O=Math.min(Y/.6,1);O=O*O*O;const ut=(D==null?void 0:D.x)||1.6,P=ut+(1-ut)*O;x.scale.set(P,P,P);const b=x.material;b.opacity=(B||.9)+(1-O)*.1,b.emissiveIntensity=.45*(1-O),y&&x.position.lerpVectors(x.position.clone(),y,O*3),O>=1&&(y&&x.position.copy(y),x.scale.set(1,1,1),b.opacity=B||.9,b.emissive.set("#000000"),b.emissiveIntensity=0,f.autoRotate=!0,x=null,F="idle",M=null,L=null,y=null,S=null,D=null)}}t({searchSticker:It});function pt(){d=requestAnimationFrame(pt),g.getDelta(),f.update(),at(performance.now());const I=performance.now();I-A>200&&(A=I,a("zoom",c.position.distanceTo(f.target))),u.render(l,c)}function Et(){if(!i.value||!c||!u)return;const I=i.value.clientWidth,Y=i.value.clientHeight;c.aspect=I/Y,c.updateProjectionMatrix(),u.setSize(I,Y)}return $n(()=>{eo(()=>{rt()})}),Nd(()=>{d&&(cancelAnimationFrame(d),d=0)}),Zc(()=>{d||pt()}),cr(()=>{d&&cancelAnimationFrame(d),u&&(u.domElement.removeEventListener("mousemove",K),u.domElement.removeEventListener("click",Ct),u.domElement.removeEventListener("touchmove",_t),u.dispose()),window.removeEventListener("resize",Et),T&&clearTimeout(T)}),(I,Y)=>(kt(),Kt("div",Eb,[N("div",{ref_key:"containerRef",ref:i,class:"globe-container"},null,512),Ee(op,{name:"tooltip-fade"},{default:jr(()=>[s.value&&r.value?(kt(),Kt("div",{key:0,class:"sticker-tooltip",style:Se({left:o.value.x+"px",top:o.value.y+"px"})},[N("span",bb,ze(r.value.emoji),1),N("span",Tb,ze(r.value.text),1),N("span",Ab,ze(r.value.category)+"系列",1)],4)):$e("",!0)]),_:1})]))}}),Pb=ln(Rb,[["__scopeId","data-v-7b8c6306"]]),Db={id:"poda"},Lb={id:"main"},Ib=Ve({__name:"SearchBar",emits:["search"],setup(n,{emit:t}){const e=qt(""),i=t;function s(){i("search",e.value)}return(r,o)=>(kt(),Kt("div",Db,[o[2]||(o[2]=ds('<div class="glow" data-v-1da1dff6></div><div class="darkBorderBg" data-v-1da1dff6></div><div class="darkBorderBg" data-v-1da1dff6></div><div class="darkBorderBg" data-v-1da1dff6></div><div class="white" data-v-1da1dff6></div><div class="border" data-v-1da1dff6></div>',6)),N("div",Lb,[bd(N("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),placeholder:"搜索便利贴...",type:"text",name:"text",class:"input",onInput:s},null,544),[[I_,e.value]]),o[1]||(o[1]=ds('<div id="input-mask" data-v-1da1dff6></div><div id="pink-mask" data-v-1da1dff6></div><div class="filterBorder" data-v-1da1dff6></div><div id="filter-icon" data-v-1da1dff6><svg preserveAspectRatio="none" height="27" width="27" viewBox="4.8 4.56 14.832 15.408" fill="none" data-v-1da1dff6><path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="#d6d6e6" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-v-1da1dff6></path></svg></div><div id="search-icon" data-v-1da1dff6><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" height="24" fill="none" class="feather feather-search" data-v-1da1dff6><circle stroke="url(#search)" r="8" cy="11" cx="11" data-v-1da1dff6></circle><line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22" data-v-1da1dff6></line><defs data-v-1da1dff6><linearGradient gradientTransform="rotate(50)" id="search" data-v-1da1dff6><stop stop-color="#f8e7f8" offset="0%" data-v-1da1dff6></stop><stop stop-color="#b6a9b7" offset="50%" data-v-1da1dff6></stop></linearGradient><linearGradient id="searchl" data-v-1da1dff6><stop stop-color="#b6a9b7" offset="0%" data-v-1da1dff6></stop><stop stop-color="#837484" offset="50%" data-v-1da1dff6></stop></linearGradient></defs></svg></div>',5))])]))}}),Ub=ln(Ib,[["__scopeId","data-v-1da1dff6"]]),Nb={class:"home-page"},Fb={class:"expand-emoji"},Ob={class:"expand-text"},Bb=Ve({__name:"HomeView",setup(n){const t=ur(),e=qt(0),i=qt(null),s=qt(!1),r=qt(null),o=qt({x:0,y:0});function a(u){e.value=u<11?1:0}function l(u){var f;(f=i.value)==null||f.searchSticker(u)}function c(u){r.value=u,o.value={x:window.innerWidth/2,y:window.innerHeight/2},requestAnimationFrame(()=>{s.value=!0}),setTimeout(()=>{const f=encodeURIComponent(JSON.stringify(u));t.push({path:"/sticker",query:{data:f}})},700)}return Zc(()=>{s.value=!1,r.value=null}),(u,f)=>(kt(),Kt("div",Nb,[Ee(Zv),N("div",{class:"search-wrapper",style:Se({left:e.value===0?"50%":"",right:e.value>0?"40px":"",transform:e.value===0?"translateX(-50%)":"none"})},[Ee(Ub,{onSearch:l})],4),Ee(Pb,{ref_key:"globeRef",ref:i,onZoom:a,onStickerClick:c},null,512),r.value?(kt(),Kt("div",{key:0,class:vn(["expand-overlay",{active:s.value}])},[N("div",{class:"expand-card",style:Se({background:r.value.color,left:o.value.x+"px",top:o.value.y+"px"})},[N("div",{class:"expand-tape",style:Se({background:r.value.tagColor})},null,4),N("div",Fb,ze(r.value.emoji),1),N("div",{class:"expand-category",style:Se({color:r.value.tagColor})},ze(r.value.category)+"系列 ",5),N("div",Ob,ze(r.value.text),1)],4)],2)):$e("",!0)]))}}),kb=ln(Bb,[["__scopeId","data-v-3e1aea4c"]]),zb={key:0,class:"detail-page"},Hb={class:"sticker-emoji"},Vb={class:"heading"},Gb={class:"icons"},Wb=Ve({__name:"StickerDetail",setup(n){const t=Yv(),e=ur(),i=qt(null),s=qt(!1),r=qt(!1),o=qt(!1),a=qt(!1),l=qt(!1);$n(()=>{var d;const f=t.query.data;if(f)try{i.value=JSON.parse(decodeURIComponent(f))}catch{e.replace("/");return}else{e.replace("/");return}const h=((d=i.value)==null?void 0:d.id)||"";h==="emo-3"&&(r.value=!0),h==="birthday-3"&&(a.value=!0),h.startsWith("birthday-")&&h!=="birthday-3"&&(o.value=!0),h.startsWith("beautiful-")&&(l.value=!0),requestAnimationFrame(()=>{s.value=!0})});function c(){s.value=!1,setTimeout(()=>{e.replace("/")},300)}function u(){r.value?e.push("/confession"):a.value?e.push("/birthday-card"):o.value?e.push("/birthday-cake"):l.value&&e.push("/beautiful")}return(f,h)=>i.value?(kt(),Kt("div",zb,[h[2]||(h[2]=N("div",{class:"stars-container"},[N("div",{id:"stars"}),N("div",{id:"stars2"}),N("div",{id:"stars3"})],-1)),N("button",{class:vn(["back-btn",{visible:s.value}]),onClick:c},[...h[0]||(h[0]=[N("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[N("polyline",{points:"15 18 9 12 15 6"})],-1),N("span",null,"返回",-1)])],2),N("div",{class:vn(["card",{active:s.value}])},[N("div",Hb,ze(i.value.emoji),1),N("div",Vb,ze(i.value.text),1),N("div",{class:"category-tag",style:Se({borderColor:i.value.tagColor,color:i.value.tagColor})},ze(i.value.category)+"系列 ",5),N("div",Gb,[N("a",{href:"#",class:vn(["icon-btn save-btn",{"confession-btn":r.value,"birthday-btn":o.value||a.value,"beautiful-btn":l.value}]),onClick:Hi(u,["prevent"])},[...h[1]||(h[1]=[N("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[N("path",{d:"M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)])],2)])):$e("",!0)}}),Xb=ln(Wb,[["__scopeId","data-v-8d1203a3"]]),jb={class:"confession-page"},qb={class:"floating-particles"},Yb={key:0,class:"modal-overlay"},$b={class:"confession-modal"},Kb={key:0,class:"modal-subtitle"},Zb={class:"modal-actions"},Jb={key:0,class:"celebrate-stage"},Qb=["onClick"],tT={class:"card-emoji"},eT={class:"card-text"},nT=Ve({__name:"ConfessionView",setup(n){const t=ur(),e=qt("initial"),i=qt({position:"static"}),s=qt(""),r=["真的吗？再想想~","你确定？💔","不要这样嘛...","给你一次反悔的机会！","我的心要碎了 🥺","再给你一次机会哦~","你忍心吗？😢","快说你喜欢我！"],o=qt([]);let a=null,l=0;const c=[{emoji:"💕",text:"遇见你，是我最美丽的意外"},{emoji:"🌹",text:"你是我余生所有的欢喜"},{emoji:"✨",text:"星光不问赶路人，时光不负有心人"},{emoji:"💖",text:"世界很大，我的心却很小，只装得下你"},{emoji:"🎀",text:"愿你的每一天都如糖果般甜蜜"},{emoji:"🌸",text:"春风十里，不如你"},{emoji:"🌙",text:"今晚月色真美，你也一样"},{emoji:"🍀",text:"幸运是遇见你，幸福是拥有你"},{emoji:"💍",text:"执子之手，与子偕老"},{emoji:"🏠",text:"一屋两人，三餐四季"},{emoji:"🎵",text:"你是我的单曲循环"},{emoji:"🌈",text:"风雨同舟，余生共度"},{emoji:"🔥",text:"愿你三冬暖，愿你春不寒"},{emoji:"⭐",text:"愿你天黑有灯，下雨有伞"},{emoji:"🎂",text:"愿你此生尽兴，赤诚善良"},{emoji:"💫",text:"愿你所求皆如愿，所行化坦途"},{emoji:"🐱",text:"做我的猫，我养你呀"},{emoji:"🍭",text:"你是我的半截的诗，不许别人更改一个字"},{emoji:"🎈",text:"偷偷告诉你，我喜欢你很久了"},{emoji:"💌",text:"这是第520封情书，请查收"},{emoji:"☀️",text:"早安晚安，都不如有你心安"},{emoji:"🍰",text:"想和你一起吃遍全世界的甜品"},{emoji:"📖",text:"你是我翻山越岭也要见到的人"},{emoji:"🎬",text:"我们的故事，未完待续"},{emoji:"💓",text:"每次见到你，心跳都会漏一拍"},{emoji:"🌅",text:"想和你看每一天的日出日落"},{emoji:"🎧",text:"耳机分你一半，心跳分你全部"},{emoji:"🌊",text:"对你的喜欢，像海一样深"},{emoji:"🐰",text:"我可能是盐吃多了，不然怎么闲得老想你"},{emoji:"🧸",text:"你愿意做我的小熊软糖吗"},{emoji:"🦋",text:"你一笑，我整颗心都化了"},{emoji:"🌻",text:"做你的向日葵，永远朝着你的方向"},{emoji:"💎",text:"你是我平淡生活里的璀璨星辰"},{emoji:"🗝️",text:"你打开了我的心门，就别想走了"},{emoji:"🌌",text:"银河滚烫，你是人间理想"},{emoji:"🕯️",text:"你是灯火，照亮我的整个宇宙"},{emoji:"🚀",text:"想和你一起去探索整个世界"},{emoji:"📸",text:"往后余生，所有的风景都想和你分享"},{emoji:"🎪",text:"生活是一场马戏，有你才精彩"},{emoji:"🏰",text:"我会为你建一座城堡，里面装满爱"}],u=["#FF9AA2","#FFB7B2","#FFDAC1","#E2F0CB","#B5EAD7","#C7CEEA","#F0B5D2","#D4A5D4"];function f(){return u[Math.floor(Math.random()*u.length)]}function h(){e.value="celebrating",p(),T()}function d(){if(e.value!=="initial"&&e.value!=="rejecting")return;e.value="rejecting";const F=window.innerWidth,R=window.innerHeight,M=200,L=52,y=F-M-40,S=R-L-40,D=20+Math.random()*y,B=20+Math.random()*S;i.value={position:"fixed",left:D+"px",top:B+"px",transform:"none"},s.value=r[Math.floor(Math.random()*r.length)]}function g(F){F.preventDefault(),history.pushState(null,"",window.location.href)}function _(F){return F.preventDefault(),F.returnValue="",""}function m(){history.pushState(null,"",window.location.href),window.addEventListener("popstate",g),window.addEventListener("beforeunload",_)}function p(){window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",_)}function T(){let F=0;const R=2;function M(){if(F>=c.length){a&&clearInterval(a),a=null;return}const L=Math.min(F+R,c.length);for(let y=F;y<L;y++){const S=c[y],D={id:l++,emoji:S.emoji,text:S.text,x:20+Math.random()*60,y:15+Math.random()*70,rotate:(Math.random()-.5)*30,color:f(),delay:Math.random()*.3};o.value.push(D)}F=L}M(),a=setInterval(M,500)}function A(F){o.value=o.value.filter(R=>R.id!==F)}function x(){p(),a&&clearInterval(a),t.replace("/")}return $n(()=>{m()}),cr(()=>{p(),a&&clearInterval(a)}),(F,R)=>(kt(),Kt("div",jb,[R[5]||(R[5]=N("div",{class:"stars-bg"},[N("div",{class:"stars-layer stars-1"}),N("div",{class:"stars-layer stars-2"}),N("div",{class:"stars-layer stars-3"})],-1)),N("div",qb,[(kt(),Kt(Me,null,Xn(20,M=>N("span",{key:M,class:"particle",style:Se({left:Math.random()*100+"%",animationDelay:Math.random()*8+"s",animationDuration:6+Math.random()*8+"s",fontSize:10+Math.random()*20+"px",opacity:.15+Math.random()*.3})},"❤️",4)),64))]),Ee(op,{name:"modal-fade"},{default:jr(()=>[e.value==="initial"||e.value==="rejecting"?(kt(),Kt("div",Yb,[N("div",$b,[R[2]||(R[2]=N("div",{class:"modal-emoji"},"💗",-1)),R[3]||(R[3]=N("h2",{class:"modal-title"},"我喜欢你",-1)),e.value==="rejecting"&&s.value?(kt(),Kt("p",Kb,ze(s.value),1)):$e("",!0),N("div",Zb,[N("button",{class:"btn-accept",onClick:h},[...R[0]||(R[0]=[N("span",null,"💕",-1),Kr(" 我也喜欢你 ",-1)])]),N("button",{class:"btn-reject",style:Se(i.value),onClick:Hi(d,["prevent"]),onMouseenter:d,onTouchstart:Hi(d,["prevent"])},[...R[1]||(R[1]=[N("span",null,"😢",-1),Kr(" 我不喜欢你 ",-1)])],36)])])])):$e("",!0)]),_:1}),e.value==="celebrating"?(kt(),Kt("div",Jb,[Ee(w_,{name:"confetti-pop"},{default:jr(()=>[(kt(!0),Kt(Me,null,Xn(o.value,M=>(kt(),Kt("div",{key:M.id,class:"confetti-card",style:Se({left:M.x+"%",top:M.y+"%",transform:`translate(-50%, -50%) rotate(${M.rotate}deg)`,"--card-color":M.color,animationDelay:M.delay+"s"}),onClick:L=>A(M.id)},[N("span",tT,ze(M.emoji),1),N("p",eT,ze(M.text),1)],12,Qb))),128))]),_:1}),N("button",{class:"home-btn",onClick:x},[...R[4]||(R[4]=[N("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[N("polyline",{points:"15 18 9 12 15 6"})],-1),N("span",null,"返回首页",-1)])])])):$e("",!0)]))}}),iT=ln(nT,[["__scopeId","data-v-ad263703"]]),sT={class:"birthday-page"},rT={class:"content"},oT={class:"cake"},aT={class:"cake-layer top-layer"},lT=Ve({__name:"BirthdayCakeView",setup(n){const t=ur(),e=qt("idle"),i=qt(!0),s=qt(!1),r=qt(1),o=qt([]),a=qt([]),l=qt("对着麦克风吹气，或点击蜡烛吹灭它 🎂"),c=qt(0),u=qt(0);let f=null,h=null,d=null,g=0,_=null;const m=["#FF6B6B","#FFD93D","#6BCB77","#4D96FF","#FF8E53","#C06FF5","#FF5E9C","#00E5FF"];async function p(){try{f=new AudioContext,d=await navigator.mediaDevices.getUserMedia({audio:!0});const M=f.createMediaStreamSource(d);h=f.createAnalyser(),h.fftSize=256,M.connect(h),T()}catch{l.value="点击蜡烛吹灭它吧 🎂"}}function T(){if(!h)return;const M=new Uint8Array(h.frequencyBinCount);function L(){if(e.value!=="idle"){g=requestAnimationFrame(L);return}h.getByteFrequencyData(M);let y=0;for(let D=0;D<64;D++)y+=M[D];const S=y/64;if(c.value=S,S>40){if(u.value++,s.value=!0,r.value=Math.max(.2,1-S/150),S>70||u.value>30){A();return}}else s.value=!1,r.value=1,u.value>0&&(u.value=Math.max(0,u.value-.5));g=requestAnimationFrame(L)}g=requestAnimationFrame(L)}function A(){e.value==="idle"&&(e.value="blowing",i.value=!1,c.value=0,l.value="🎉 蜡烛熄灭啦！",setTimeout(()=>{e.value="fireworks",x()},800))}function x(){const L=[];for(let D=0;D<60;D++)L.push({id:D,x:10+Math.random()*80,y:5+Math.random()*80,color:m[Math.floor(Math.random()*m.length)],size:3+Math.random()*6,delay:Math.random()*2,duration:.8+Math.random()*1.5});o.value=L;const y=30,S=[];for(let D=0;D<y;D++)S.push({id:D+1e3,x:Math.random()*100,y:Math.random()*100,color:m[Math.floor(Math.random()*m.length)],size:2+Math.random()*4,delay:Math.random()*3});a.value=S,l.value="🎂 生日快乐！愿你岁岁平安，万事顺意！🎉",_=setInterval(()=>{const D=[],B=40+Math.floor(Math.random()*30),k=Date.now();for(let nt=0;nt<B;nt++)D.push({id:k+nt,x:10+Math.random()*80,y:5+Math.random()*80,color:m[Math.floor(Math.random()*m.length)],size:3+Math.random()*6,delay:Math.random()*1.5,duration:.8+Math.random()*1.5});o.value=[...o.value.slice(-120),...D]},1500),setTimeout(()=>{e.value="done",l.value="点击下方按钮重新点燃蜡烛 🔥"},5e3)}function F(){_&&(clearInterval(_),_=null),e.value="idle",i.value=!0,s.value=!1,r.value=1,u.value=0,c.value=0,o.value=[],a.value=[],l.value="对着麦克风吹气，或点击蜡烛吹灭它 🎂"}function R(){_&&clearInterval(_),t.replace("/")}return $n(()=>{eo(()=>{p()})}),cr(()=>{g&&cancelAnimationFrame(g),_&&clearInterval(_),d&&d.getTracks().forEach(M=>M.stop()),f&&f.close()}),(M,L)=>(kt(),Kt("div",sT,[L[7]||(L[7]=N("div",{class:"bg-gradient"},null,-1)),(kt(!0),Kt(Me,null,Xn(a.value,y=>(kt(),Kt("div",{key:y.id,class:"sparkle-star",style:Se({left:y.x+"%",top:y.y+"%",width:y.size+"px",height:y.size+"px",backgroundColor:y.color,animationDelay:y.delay+"s"})},null,4))),128)),(kt(!0),Kt(Me,null,Xn(o.value,y=>(kt(),Kt("div",{key:y.id,class:"firework-particle",style:Se({left:y.x+"%",top:y.y+"%",width:y.size+"px",height:y.size+"px",backgroundColor:y.color,animationDelay:y.delay+"s",animationDuration:y.duration+"s"})},null,4))),128)),N("button",{class:"back-btn",onClick:R},[...L[0]||(L[0]=[N("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[N("polyline",{points:"15 18 9 12 15 6"})],-1),N("span",null,"返回",-1)])]),N("div",rT,[N("div",{class:"cake-container",onClick:A},[N("div",oT,[N("div",aT,[(kt(),Kt(Me,null,Xn(8,y=>N("div",{class:"icing-drip",key:y,style:Se({left:y*12.5-6+"%"})},null,4)),64))]),L[1]||(L[1]=N("div",{class:"cake-layer middle-layer"},null,-1)),L[2]||(L[2]=N("div",{class:"cake-layer bottom-layer"},null,-1)),L[3]||(L[3]=N("div",{class:"cake-plate"},null,-1))]),N("div",{class:vn(["candle",{"candle-out":!i.value}])},[L[5]||(L[5]=N("div",{class:"candle-body"},null,-1)),L[6]||(L[6]=N("div",{class:"candle-wick"},null,-1)),N("div",{class:vn(["flame",{flicker:s.value,out:!i.value}]),style:Se({transform:`scaleY(${r.value})`})},[...L[4]||(L[4]=[N("div",{class:"flame-inner"},null,-1),N("div",{class:"flame-outer"},null,-1)])],6)],2)]),N("p",{class:vn(["tip",{celebrating:e.value==="fireworks"||e.value==="done"}])},ze(l.value),3),e.value==="done"?(kt(),Kt("button",{key:0,class:"relight-btn",onClick:F}," 🔥 再来一次 ")):$e("",!0)])]))}}),cT=ln(lT,[["__scopeId","data-v-a74df6b9"]]),uT={class:"card-page"},fT={class:"hint-text"},hT={class:"card-face card-back"},dT={class:"back-content"},pT=Ve({__name:"BirthdayCardView",setup(n){const t=ur(),e=qt(!1),i=qt(!1),s=qt(!1),r=qt(!1),o=["愿你的每一天都如阳光般灿烂","愿所有美好如期而至","愿你被世界温柔以待","愿你眼里有星辰，心中有山海","愿你所求皆如愿，所行皆坦途","愿你笑靥如花，一生不减芳华","愿你历尽千帆，归来仍是少年","愿你前程似锦，未来可期","愿岁岁常欢愉，年年皆胜意","愿时光能缓，故人不散"],a=qt(""),l=qt([]),c=["#FFD700","#FF6B6B","#FF8E53","#FFD93D","#6BCB77","#FF5E9C","#FFB347"];function u(){i.value||(i.value=!0,e.value=!e.value,e.value?setTimeout(()=>{r.value=!0,a.value=o[Math.floor(Math.random()*o.length)],f(),s.value=!0,i.value=!1},600):(s.value=!1,r.value=!1,setTimeout(()=>{i.value=!1},600)))}function f(){const d=[];for(let g=0;g<25;g++)d.push({id:g,x:15+Math.random()*70,y:10+Math.random()*80,color:c[Math.floor(Math.random()*c.length)],size:3+Math.random()*6,delay:Math.random()*1.5});l.value=d}function h(){t.replace("/")}return $n(()=>{setTimeout(()=>{},300)}),(d,g)=>(kt(),Kt("div",uT,[g[10]||(g[10]=ds('<div class="bg-layer" data-v-aa4aefdf><div class="bg-gradient" data-v-aa4aefdf></div><div class="floating-decor decor-1" data-v-aa4aefdf>🎈</div><div class="floating-decor decor-2" data-v-aa4aefdf>🎀</div><div class="floating-decor decor-3" data-v-aa4aefdf>⭐</div><div class="floating-decor decor-4" data-v-aa4aefdf>🎁</div><div class="floating-decor decor-5" data-v-aa4aefdf>🌟</div><div class="floating-decor decor-6" data-v-aa4aefdf>💝</div></div>',1)),N("button",{class:"back-btn",onClick:h},[...g[0]||(g[0]=[N("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[N("polyline",{points:"15 18 9 12 15 6"})],-1),N("span",null,"返回",-1)])]),N("p",fT,ze(e.value?"点击贺卡合上 📬":"点击贺卡翻开 💌"),1),N("div",{class:"card-wrapper",onClick:u},[N("div",{class:vn(["card-3d",{flipped:e.value}])},[g[9]||(g[9]=ds('<div class="card-face card-front" data-v-aa4aefdf><div class="front-pattern" data-v-aa4aefdf></div><div class="front-content" data-v-aa4aefdf><div class="front-emoji" data-v-aa4aefdf>💌</div><h2 class="front-title" data-v-aa4aefdf>生日贺卡</h2><div class="front-subtitle" data-v-aa4aefdf>Happy Birthday</div><div class="front-ribbon" data-v-aa4aefdf><div class="ribbon-left" data-v-aa4aefdf></div><div class="ribbon-center" data-v-aa4aefdf>🎂</div><div class="ribbon-right" data-v-aa4aefdf></div></div><p class="front-tip" data-v-aa4aefdf>点击翻开 →</p></div></div>',1)),N("div",hT,[N("div",dT,[g[1]||(g[1]=ds('<div class="back-header" data-v-aa4aefdf><span class="back-emoji" data-v-aa4aefdf>🎉</span><span class="back-title" data-v-aa4aefdf>生日快乐</span><span class="back-emoji" data-v-aa4aefdf>🎉</span></div><div class="back-divider" data-v-aa4aefdf></div>',2)),N("div",{class:vn(["back-blessing",{show:r.value}])},ze(a.value),3),g[2]||(g[2]=N("div",{class:"back-divider"},null,-1)),g[3]||(g[3]=N("p",{class:"back-footer"},[Kr(" 愿你每一天"),N("br"),Kr("都充满欢笑与幸福 ")],-1)),g[4]||(g[4]=N("div",{class:"back-signature"},"💗 来自你的好友",-1))]),g[5]||(g[5]=N("div",{class:"back-corner-tl"},null,-1)),g[6]||(g[6]=N("div",{class:"back-corner-tr"},null,-1)),g[7]||(g[7]=N("div",{class:"back-corner-bl"},null,-1)),g[8]||(g[8]=N("div",{class:"back-corner-br"},null,-1))])],2)]),(kt(!0),Kt(Me,null,Xn(l.value,_=>bd((kt(),Kt("div",{key:_.id,class:"sparkle-dot",style:Se({left:_.x+"%",top:_.y+"%",width:_.size+"px",height:_.size+"px",backgroundColor:_.color,animationDelay:_.delay+"s"})},null,4)),[[u_,s.value]])),128))]))}}),mT=ln(pT,[["__scopeId","data-v-aa4aefdf"]]),gT={class:"truck-card"},_T={class:"truck"},vT={class:"truck__wheel truck__wheel--front"},xT={class:"truck-wheel"},yT={class:"truck-wheel__rim"},MT={class:"truck__wheel truck__wheel--rear"},ST={class:"truck-wheel"},ET={class:"truck-wheel__rim"},bT=Ve({__name:"TruckPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n,{emit:t}){const e=t;return(i,s)=>(kt(),An($c,{to:"body"},[n.visible?(kt(),Kt("div",{key:0,class:"truck-overlay",onClick:s[1]||(s[1]=Hi(r=>e("close"),["self"]))},[N("div",gT,[N("div",_T,[s[10]||(s[10]=N("div",{class:"truck__body"},[N("div",{class:"truck__body truck__body--top"},[N("div",{class:"truck__window"},[N("div",{class:"truck__window-glass"})])]),N("div",{class:"truck__body truck__body--mid"},[N("div",{class:"truck__mid-body"})]),N("div",{class:"truck__body truck__body--bottom"},[N("div",{class:"truck__underpanel"}),N("div",{class:"truck__rear-bumper"}),N("div",{class:"truck__side-skirt"})])],-1)),N("div",vT,[s[2]||(s[2]=N("div",{class:"truck__wheel-arch"},null,-1)),s[3]||(s[3]=N("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--top"},null,-1)),s[4]||(s[4]=N("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--left"},null,-1)),s[5]||(s[5]=N("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--right"},null,-1)),N("div",xT,[N("div",yT,[(kt(),Kt(Me,null,Xn(7,r=>N("div",{key:r,style:Se({"--index":r-1}),class:"truck-wheel__spoke"},null,4)),64))])])]),N("div",MT,[s[6]||(s[6]=N("div",{class:"truck__wheel-arch"},null,-1)),s[7]||(s[7]=N("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--top"},null,-1)),s[8]||(s[8]=N("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--left"},null,-1)),s[9]||(s[9]=N("div",{class:"truck__wheel-arch-trim truck__wheel-arch-trim--right"},null,-1)),N("div",ST,[N("div",ET,[(kt(),Kt(Me,null,Xn(7,r=>N("div",{key:r,style:Se({"--index":r-1}),class:"truck-wheel__spoke"},null,4)),64))])])]),s[11]||(s[11]=N("div",{class:"truck__headlight"},null,-1)),s[12]||(s[12]=N("div",{class:"truck__taillight"},null,-1)),s[13]||(s[13]=N("div",{class:"truck__indicator"},null,-1)),s[14]||(s[14]=N("div",{class:"truck__foglight"},null,-1))]),N("button",{class:"truck-close-btn",onClick:s[0]||(s[0]=r=>e("close"))},"关闭")])])):$e("",!0)]))}}),TT=ln(bT,[["__scopeId","data-v-9f046297"]]),AT={class:"keyboard-card"},wT=Ve({__name:"KeyboardPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n,{emit:t}){const e=t;return(i,s)=>(kt(),An($c,{to:"body"},[n.visible?(kt(),Kt("div",{key:0,class:"keyboard-overlay",onClick:s[1]||(s[1]=Hi(r=>e("close"),["self"]))},[N("div",AT,[s[2]||(s[2]=N("div",{class:"keyboard"},[N("div",{class:"row"},[N("div",{class:"key function-key"},"esc"),N("div",{class:"key function-key"},"F1"),N("div",{class:"key function-key"},"F2"),N("div",{class:"key function-key"},"F3"),N("div",{class:"key function-key"},"F4"),N("div",{class:"key function-key"},"F5"),N("div",{class:"key function-key"},"F6"),N("div",{class:"key function-key"},"F7"),N("div",{class:"key function-key"},"F8"),N("div",{class:"key function-key"},"F9"),N("div",{class:"key function-key"},"F10"),N("div",{class:"key function-key"},"F11"),N("div",{class:"key function-key"},"F12"),N("div",{class:"key eject-key"},"⏏")]),N("div",{class:"row"},[N("div",{class:"key"},"`"),N("div",{class:"key"},"1"),N("div",{class:"key"},"2"),N("div",{class:"key"},"3"),N("div",{class:"key"},"4"),N("div",{class:"key"},"5"),N("div",{class:"key"},"6"),N("div",{class:"key"},"7"),N("div",{class:"key"},"8"),N("div",{class:"key"},"9"),N("div",{class:"key"},"0"),N("div",{class:"key"},"-"),N("div",{class:"key"},"="),N("div",{class:"key delete-key"},"delete")]),N("div",{class:"row"},[N("div",{class:"key tab-key"},"tab"),N("div",{class:"key"},"Q"),N("div",{class:"key"},"W"),N("div",{class:"key"},"E"),N("div",{class:"key"},"R"),N("div",{class:"key"},"T"),N("div",{class:"key"},"Y"),N("div",{class:"key"},"U"),N("div",{class:"key"},"I"),N("div",{class:"key"},"O"),N("div",{class:"key"},"P"),N("div",{class:"key"},"["),N("div",{class:"key"},"]"),N("div",{class:"key backslash-key"},"\\")]),N("div",{class:"row"},[N("div",{class:"key caps-lock-key"},"caps lock"),N("div",{class:"key"},"A"),N("div",{class:"key"},"S"),N("div",{class:"key"},"D"),N("div",{class:"key"},"F"),N("div",{class:"key"},"G"),N("div",{class:"key"},"H"),N("div",{class:"key"},"J"),N("div",{class:"key"},"K"),N("div",{class:"key"},"L"),N("div",{class:"key"},";"),N("div",{class:"key"},"'"),N("div",{class:"key return-key"},"return")]),N("div",{class:"row"},[N("div",{class:"key shift-key"},"shift"),N("div",{class:"key"},"Z"),N("div",{class:"key"},"X"),N("div",{class:"key"},"C"),N("div",{class:"key"},"V"),N("div",{class:"key"},"B"),N("div",{class:"key"},"N"),N("div",{class:"key"},"M"),N("div",{class:"key"},","),N("div",{class:"key"},"."),N("div",{class:"key"},"/"),N("div",{class:"key shift-key"},"shift")]),N("div",{class:"row"},[N("div",{class:"key"},"fn"),N("div",{class:"key ctrl-key"},"ctrl"),N("div",{class:"key alt-key"},"⌥"),N("div",{class:"key command-key"},"⌘"),N("div",{class:"key space-key"}),N("div",{class:"key command-key"},"⌘"),N("div",{class:"key alt-key"},"⌥"),N("div",{class:"key arrow-key"},"◀"),N("div",{class:"key arrow-key"},"▼"),N("div",{class:"key arrow-key"},"▲"),N("div",{class:"key arrow-key"},"▶")])],-1)),N("button",{class:"keyboard-close-btn",onClick:s[0]||(s[0]=r=>e("close"))},"关闭")])])):$e("",!0)]))}}),CT=ln(wT,[["__scopeId","data-v-a6216935"]]),RT={class:"cube-popup-card"},PT=Ve({__name:"CubePopup",props:{visible:{type:Boolean}},emits:["close"],setup(n){return(t,e)=>(kt(),Kt("div",{class:"cube-popup-wrapper",onClick:e[1]||(e[1]=Hi(i=>t.$emit("close"),["self"]))},[N("div",RT,[e[2]||(e[2]=ds('<div class="container" data-v-c18c3449><div class="cube" data-v-c18c3449><div style="--x:-1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:0;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div></div><div class="cube" data-v-c18c3449><div style="--x:-1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:0;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div></div><div class="cube" data-v-c18c3449><div style="--x:-1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:0;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div><div style="--x:1;--y:0;" data-v-c18c3449><span style="--i:3;" data-v-c18c3449></span><span style="--i:2;" data-v-c18c3449></span><span style="--i:1;" data-v-c18c3449></span></div></div></div>',1)),N("button",{class:"cube-close-btn",onClick:e[0]||(e[0]=i=>t.$emit("close"))},"关闭")])]))}}),DT=ln(PT,[["__scopeId","data-v-c18c3449"]]),LT={class:"sun-popup-card"},IT=Ve({__name:"SunPopup",props:{visible:{type:Boolean}},emits:["close"],setup(n){return(t,e)=>(kt(),Kt("div",{class:"sun-popup-wrapper",onClick:e[1]||(e[1]=Hi(i=>t.$emit("close"),["self"]))},[N("div",LT,[e[2]||(e[2]=ds('<div class="section-banner-sun" data-v-a78e0292><div id="star-1" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-2" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-3" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-4" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-5" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-6" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div><div id="star-7" data-v-a78e0292><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-bottomright" data-v-a78e0292></div><div id="curved-corner-bottomleft" data-v-a78e0292></div></div><div class="curved-corner-star" data-v-a78e0292><div id="curved-corner-topright" data-v-a78e0292></div><div id="curved-corner-topleft" data-v-a78e0292></div></div></div></div>',1)),N("button",{class:"sun-close-btn",onClick:e[0]||(e[0]=i=>t.$emit("close"))},"关闭")])]))}}),UT=ln(IT,[["__scopeId","data-v-a78e0292"]]),NT={class:"beautiful-page"},FT={class:"bg-layer"},OT={class:"body-wrapper"},BT={class:"comic-panel"},kT={class:"container-items"},zT=["data-name","onClick"],HT=Ve({__name:"BeautifulView",setup(n){const t=ur(),e=[{hex:"#e11d48",name:"小车",desc:"热情似火的玫瑰红"},{hex:"#f472b6",name:"键盘",desc:"少女心爆棚的樱花粉"},{hex:"#fb923c",name:"方块",desc:"温暖活力的日落橙"},{hex:"#facc15",name:"太阳",desc:"明亮欢快的阳光黄"},{hex:"#84cc16",name:"绿",desc:"生机盎然的青草绿"},{hex:"#10b981",name:"青",desc:"清新自然的翡翠青"},{hex:"#0ea5e9",name:"蓝",desc:"广阔自由的天空蓝"},{hex:"#3b82f6",name:"靛",desc:"深邃沉稳的宝石靛"},{hex:"#8b5cf6",name:"紫",desc:"神秘优雅的薰衣草紫"},{hex:"#a78bfa",name:"雪",desc:"温柔梦幻的薄雾雪"}],i=qt(!1),s=qt(null),r=qt([]);for(let c=0;c<50;c++)r.value.push({id:c,x:Math.random()*100,y:Math.random()*100,size:1+Math.random()*2,delay:Math.random()*3});function o(c){s.value=c,i.value=!0}function a(){i.value=!1}function l(){t.replace("/")}return $n(()=>{}),(c,u)=>(kt(),Kt("div",NT,[N("div",FT,[u[0]||(u[0]=N("div",{class:"bg-gradient"},null,-1)),(kt(!0),Kt(Me,null,Xn(r.value,f=>(kt(),Kt("div",{key:f.id,class:"star",style:Se({left:f.x+"%",top:f.y+"%",width:f.size+"px",height:f.size+"px",animationDelay:f.delay+"s"})},null,4))),128))]),N("button",{class:"back-btn",onClick:l},[...u[1]||(u[1]=[N("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[N("polyline",{points:"15 18 9 12 15 6"})],-1),N("span",null,"返回",-1)])]),N("div",OT,[N("div",BT,[N("div",kT,[(kt(),Kt(Me,null,Xn(e,f=>N("button",{key:f.hex,class:"item-color",style:Se({"--color":f.hex}),"data-name":f.name,onClick:h=>o(f)},null,12,zT)),64))])])]),(kt(),An($c,{to:"body"},[i.value?(kt(),Kt("div",{key:0,class:"popup-overlay",onClick:Hi(a,["self"])},[s.value&&s.value.hex==="#e11d48"?(kt(),An(TT,{key:0,visible:i.value,onClose:a},null,8,["visible"])):$e("",!0),s.value&&s.value.hex==="#f472b6"?(kt(),An(CT,{key:1,visible:i.value,onClose:a},null,8,["visible"])):$e("",!0),s.value&&s.value.hex==="#fb923c"?(kt(),An(DT,{key:2,visible:i.value,onClose:a},null,8,["visible"])):$e("",!0),s.value&&s.value.hex==="#facc15"?(kt(),An(UT,{key:3,visible:i.value,onClose:a},null,8,["visible"])):$e("",!0)])):$e("",!0)]))]))}}),VT=ln(HT,[["__scopeId","data-v-1927d85e"]]),GT=qv({history:Av("/"),routes:[{path:"/",name:"home",component:kb},{path:"/sticker",name:"sticker-detail",component:Xb},{path:"/confession",name:"confession",component:iT},{path:"/birthday-cake",name:"birthday-cake",component:cT},{path:"/birthday-card",name:"birthday-card",component:mT},{path:"/beautiful",name:"beautiful",component:VT}]}),Eu=B_($v);Eu.use(V_());Eu.use(GT);Eu.mount("#app");
