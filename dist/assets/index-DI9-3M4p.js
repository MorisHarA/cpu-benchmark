var q_=Object.defineProperty;var $_=(t,e,n)=>e in t?q_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var au=(t,e,n)=>$_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var H0={exports:{}},zc={},V0={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),K_=Symbol.for("react.portal"),J_=Symbol.for("react.fragment"),Q_=Symbol.for("react.strict_mode"),ex=Symbol.for("react.profiler"),tx=Symbol.for("react.provider"),nx=Symbol.for("react.context"),ix=Symbol.for("react.forward_ref"),rx=Symbol.for("react.suspense"),sx=Symbol.for("react.memo"),ox=Symbol.for("react.lazy"),hp=Symbol.iterator;function ax(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}var G0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W0=Object.assign,X0={};function Io(t,e,n){this.props=t,this.context=e,this.refs=X0,this.updater=n||G0}Io.prototype.isReactComponent={};Io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j0(){}j0.prototype=Io.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=X0,this.updater=n||G0}var Jd=Kd.prototype=new j0;Jd.constructor=Kd;W0(Jd,Io.prototype);Jd.isPureReactComponent=!0;var dp=Array.isArray,Y0=Object.prototype.hasOwnProperty,Qd={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Y0.call(e,i)&&!q0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xa,type:t,key:s,ref:o,props:r,_owner:Qd.current}}function lx(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function cx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fp=/\/+/g;function lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cx(""+t.key):e.toString(36)}function Xl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xa:case K_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+lu(o,0):i,dp(r)?(n="",t!=null&&(n=t.replace(fp,"$&/")+"/"),Xl(r,e,n,"",function(c){return c})):r!=null&&(ef(r)&&(r=lx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+lu(s,a);o+=Xl(s,e,n,l,r)}else if(l=ax(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+lu(s,a++),o+=Xl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return Xl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ux(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Un={current:null},jl={transition:null},hx={ReactCurrentDispatcher:Un,ReactCurrentBatchConfig:jl,ReactCurrentOwner:Qd};function Z0(){throw Error("act(...) is not supported in production builds of React.")}ft.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ft.Component=Io;ft.Fragment=J_;ft.Profiler=ex;ft.PureComponent=Kd;ft.StrictMode=Q_;ft.Suspense=rx;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hx;ft.act=Z0;ft.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=W0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Y0.call(e,l)&&!q0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:o}};ft.createContext=function(t){return t={$$typeof:nx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tx,_context:t},t.Consumer=t};ft.createElement=$0;ft.createFactory=function(t){var e=$0.bind(null,t);return e.type=t,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(t){return{$$typeof:ix,render:t}};ft.isValidElement=ef;ft.lazy=function(t){return{$$typeof:ox,_payload:{_status:-1,_result:t},_init:ux}};ft.memo=function(t,e){return{$$typeof:sx,type:t,compare:e===void 0?null:e}};ft.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};ft.unstable_act=Z0;ft.useCallback=function(t,e){return Un.current.useCallback(t,e)};ft.useContext=function(t){return Un.current.useContext(t)};ft.useDebugValue=function(){};ft.useDeferredValue=function(t){return Un.current.useDeferredValue(t)};ft.useEffect=function(t,e){return Un.current.useEffect(t,e)};ft.useId=function(){return Un.current.useId()};ft.useImperativeHandle=function(t,e,n){return Un.current.useImperativeHandle(t,e,n)};ft.useInsertionEffect=function(t,e){return Un.current.useInsertionEffect(t,e)};ft.useLayoutEffect=function(t,e){return Un.current.useLayoutEffect(t,e)};ft.useMemo=function(t,e){return Un.current.useMemo(t,e)};ft.useReducer=function(t,e,n){return Un.current.useReducer(t,e,n)};ft.useRef=function(t){return Un.current.useRef(t)};ft.useState=function(t){return Un.current.useState(t)};ft.useSyncExternalStore=function(t,e,n){return Un.current.useSyncExternalStore(t,e,n)};ft.useTransition=function(){return Un.current.useTransition()};ft.version="18.3.1";V0.exports=ft;var Et=V0.exports;const dx=Z_(Et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx=Et,px=Symbol.for("react.element"),mx=Symbol.for("react.fragment"),gx=Object.prototype.hasOwnProperty,vx=fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_x={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gx.call(e,i)&&!_x.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:px,type:t,key:s,ref:o,props:r,_owner:vx.current}}zc.Fragment=mx;zc.jsx=K0;zc.jsxs=K0;H0.exports=zc;var Pe=H0.exports,mh={},J0={exports:{}},ni={},Q0={exports:{}},eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,Z){var J=N.length;N.push(Z);e:for(;0<J;){var pe=J-1>>>1,ye=N[pe];if(0<r(ye,Z))N[pe]=Z,N[J]=ye,J=pe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Z=N[0],J=N.pop();if(J!==Z){N[0]=J;e:for(var pe=0,ye=N.length,et=ye>>>1;pe<et;){var j=2*(pe+1)-1,ae=N[j],Me=j+1,le=N[Me];if(0>r(ae,J))Me<ye&&0>r(le,ae)?(N[pe]=le,N[Me]=J,pe=Me):(N[pe]=ae,N[j]=J,pe=j);else if(Me<ye&&0>r(le,J))N[pe]=le,N[Me]=J,pe=Me;else break e}}return Z}function r(N,Z){var J=N.sortIndex-Z.sortIndex;return J!==0?J:N.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,d=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=N)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function x(N){if(y=!1,v(N),!_)if(n(l)!==null)_=!0,G(P);else{var Z=n(c);Z!==null&&te(x,Z.startTime-N)}}function P(N,Z){_=!1,y&&(y=!1,u(R),R=-1),p=!0;var J=d;try{for(v(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||N&&!D());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,d=f.priorityLevel;var ye=pe(f.expirationTime<=Z);Z=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&i(l),v(Z)}else i(l);f=n(l)}if(f!==null)var et=!0;else{var j=n(c);j!==null&&te(x,j.startTime-Z),et=!1}return et}finally{f=null,d=J,p=!1}}var b=!1,w=null,R=-1,E=5,S=-1;function D(){return!(t.unstable_now()-S<E)}function B(){if(w!==null){var N=t.unstable_now();S=N;var Z=!0;try{Z=w(!0,N)}finally{Z?k():(b=!1,w=null)}}else b=!1}var k;if(typeof m=="function")k=function(){m(B)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,q=X.port2;X.port1.onmessage=B,k=function(){q.postMessage(null)}}else k=function(){g(B,0)};function G(N){w=N,b||(b=!0,k())}function te(N,Z){R=g(function(){N(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,G(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var Z=3;break;default:Z=d}var J=d;d=Z;try{return N()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=d;d=N;try{return Z()}finally{d=J}},t.unstable_scheduleCallback=function(N,Z,J){var pe=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=J+ye,N={id:h++,callback:Z,priorityLevel:N,startTime:J,expirationTime:ye,sortIndex:-1},J>pe?(N.sortIndex=J,e(c,N),n(l)===null&&N===n(c)&&(y?(u(R),R=-1):y=!0,te(x,J-pe))):(N.sortIndex=ye,e(l,N),_||p||(_=!0,G(P))),N},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(N){var Z=d;return function(){var J=d;d=Z;try{return N.apply(this,arguments)}finally{d=J}}}})(eg);Q0.exports=eg;var xx=Q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=Et,ti=xx;function ve(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tg=new Set,wa={};function Ms(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(wa[t]=e,t=0;t<e.length;t++)tg.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gh=Object.prototype.hasOwnProperty,Mx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp={},mp={};function Sx(t){return gh.call(mp,t)?!0:gh.call(pp,t)?!1:Mx.test(t)?mp[t]=!0:(pp[t]=!0,!1)}function wx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ex(t,e,n,i){if(e===null||typeof e>"u"||wx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xn[t]=new Fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xn[e]=new Fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xn[t]=new Fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xn[t]=new Fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xn[t]=new Fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xn[t]=new Fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xn[t]=new Fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xn[t]=new Fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xn[t]=new Fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);xn[e]=new Fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);xn[e]=new Fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);xn[e]=new Fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xn[t]=new Fn(t,1,!1,t.toLowerCase(),null,!1,!1)});xn.xlinkHref=new Fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xn[t]=new Fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,i){var r=xn.hasOwnProperty(e)?xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ex(e,n,r,i)&&(n=null),i||r===null?Sx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fr=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),js=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),ig=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),xh=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),gp=Symbol.iterator;function Ho(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var Xt=Object.assign,cu;function na(t){if(cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cu=e&&e[1]||""}return`
`+cu+t}var uu=!1;function hu(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function Tx(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=hu(t.type,!1),t;case 11:return t=hu(t.type.render,!1),t;case 1:return t=hu(t.type,!0),t;default:return""}}function yh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ys:return"Fragment";case js:return"Portal";case vh:return"Profiler";case sf:return"StrictMode";case _h:return"Suspense";case xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ig:return(t.displayName||"Context")+".Consumer";case ng:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:yh(t.type)||"Memo";case Mr:e=t._payload,t=t._init;try{return yh(t(e))}catch{}}return null}function Ax(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yh(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cx(t){var e=sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=Cx(t))}function og(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=sg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mh(t,e){var n=e.checked;return Xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ag(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Sh(t,e){ag(t,e);var n=Br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function ao(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ve(91));return Xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ve(92));if(ia(n)){if(1<n.length)throw Error(ve(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Br(n)}}function lg(t,e){var n=Br(e.value),i=Br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,ug=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bx=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){bx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Rx=Xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ah(t,e){if(e){if(Rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ve(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ve(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ve(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ve(62))}}function Ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rh=null,lo=null,co=null;function Mp(t){if(t=qa(t)){if(typeof Rh!="function")throw Error(ve(280));var e=t.stateNode;e&&(e=Wc(e),Rh(t.stateNode,t.type,e))}}function fg(t){lo?co?co.push(t):co=[t]:lo=t}function pg(){if(lo){var t=lo,e=co;if(co=lo=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function mg(t,e){return t(e)}function gg(){}var du=!1;function vg(t,e,n){if(du)return t(e,n);du=!0;try{return mg(t,e,n)}finally{du=!1,(lo!==null||co!==null)&&(gg(),pg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Wc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ve(231,e,typeof n));return n}var Ph=!1;if(ar)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Ph=!1}function Px(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ua=!1,uc=null,hc=!1,Lh=null,Lx={onError:function(t){ua=!0,uc=t}};function Dx(t,e,n,i,r,s,o,a,l){ua=!1,uc=null,Px.apply(Lx,arguments)}function Ix(t,e,n,i,r,s,o,a,l){if(Dx.apply(this,arguments),ua){if(ua){var c=uc;ua=!1,uc=null}else throw Error(ve(198));hc||(hc=!0,Lh=c)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(Ss(t)!==t)throw Error(ve(188))}function Nx(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(ve(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sp(r),t;if(s===i)return Sp(r),e;s=s.sibling}throw Error(ve(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ve(189))}}if(n.alternate!==i)throw Error(ve(190))}if(n.tag!==3)throw Error(ve(188));return n.stateNode.current===n?t:e}function xg(t){return t=Nx(t),t!==null?yg(t):null}function yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yg(t);if(e!==null)return e;t=t.sibling}return null}var Mg=ti.unstable_scheduleCallback,wp=ti.unstable_cancelCallback,Ux=ti.unstable_shouldYield,Fx=ti.unstable_requestPaint,Jt=ti.unstable_now,Ox=ti.unstable_getCurrentPriorityLevel,cf=ti.unstable_ImmediatePriority,Sg=ti.unstable_UserBlockingPriority,dc=ti.unstable_NormalPriority,kx=ti.unstable_LowPriority,wg=ti.unstable_IdlePriority,Bc=null,zi=null;function zx(t){if(zi&&typeof zi.onCommitFiberRoot=="function")try{zi.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ai=Math.clz32?Math.clz32:Vx,Bx=Math.log,Hx=Math.LN2;function Vx(t){return t>>>=0,t===0?32:31-(Bx(t)/Hx|0)|0}var nl=64,il=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ra(a):(s&=o,s!==0&&(i=ra(s)))}else o=n&~r,o!==0?i=ra(o):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ai(e),r=1<<n,i|=t[n],e&=~r;return i}function Gx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Gx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eg(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ai(e),t[e]=n}function Xx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Pt=0;function Tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ag,hf,Cg,bg,Rg,Ih=!1,rl=[],Rr=null,Pr=null,Lr=null,Aa=new Map,Ca=new Map,Er=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Go(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qa(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Yx(t,e,n,i,r){switch(e){case"focusin":return Rr=Go(Rr,t,e,n,i,r),!0;case"dragenter":return Pr=Go(Pr,t,e,n,i,r),!0;case"mouseover":return Lr=Go(Lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Aa.set(s,Go(Aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,Go(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function Pg(t){var e=ss(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=_g(n),e!==null){t.blockedOn=e,Rg(t.priority,function(){Cg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bh=i,n.target.dispatchEvent(i),bh=null}else return e=qa(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Tp(t,e,n){Yl(t)&&n.delete(e)}function qx(){Ih=!1,Rr!==null&&Yl(Rr)&&(Rr=null),Pr!==null&&Yl(Pr)&&(Pr=null),Lr!==null&&Yl(Lr)&&(Lr=null),Aa.forEach(Tp),Ca.forEach(Tp)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ih||(Ih=!0,ti.unstable_scheduleCallback(ti.unstable_NormalPriority,qx)))}function ba(t){function e(r){return Wo(r,t)}if(0<rl.length){Wo(rl[0],t);for(var n=1;n<rl.length;n++){var i=rl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Rr!==null&&Wo(Rr,t),Pr!==null&&Wo(Pr,t),Lr!==null&&Wo(Lr,t),Aa.forEach(e),Ca.forEach(e),n=0;n<Er.length;n++)i=Er[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Er.length&&(n=Er[0],n.blockedOn===null);)Pg(n),n.blockedOn===null&&Er.shift()}var uo=fr.ReactCurrentBatchConfig,pc=!0;function $x(t,e,n,i){var r=Pt,s=uo.transition;uo.transition=null;try{Pt=1,df(t,e,n,i)}finally{Pt=r,uo.transition=s}}function Zx(t,e,n,i){var r=Pt,s=uo.transition;uo.transition=null;try{Pt=4,df(t,e,n,i)}finally{Pt=r,uo.transition=s}}function df(t,e,n,i){if(pc){var r=Nh(t,e,n,i);if(r===null)wu(t,e,i,mc,n),Ep(t,i);else if(Yx(r,t,e,n,i))i.stopPropagation();else if(Ep(t,i),e&4&&-1<jx.indexOf(t)){for(;r!==null;){var s=qa(r);if(s!==null&&Ag(s),s=Nh(t,e,n,i),s===null&&wu(t,e,i,mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wu(t,e,i,null,n)}}var mc=null;function Nh(t,e,n,i){if(mc=null,t=lf(i),t=ss(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function Lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ox()){case cf:return 1;case Sg:return 4;case dc:case kx:return 16;case wg:return 536870912;default:return 16}default:return 16}}var Cr=null,ff=null,ql=null;function Dg(){if(ql)return ql;var t,e=ff,n=e.length,i,r="value"in Cr?Cr.value:Cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ql=r.slice(t,1<i?1-i:void 0)}function $l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function Ap(){return!1}function ii(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:Ap,this.isPropagationStopped=Ap,this}return Xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=ii(No),Ya=Xt({},No,{view:0,detail:0}),Kx=ii(Ya),pu,mu,Xo,Hc=Xt({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(pu=t.screenX-Xo.screenX,mu=t.screenY-Xo.screenY):mu=pu=0,Xo=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),Cp=ii(Hc),Jx=Xt({},Hc,{dataTransfer:0}),Qx=ii(Jx),ey=Xt({},Ya,{relatedTarget:0}),gu=ii(ey),ty=Xt({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=ii(ty),iy=Xt({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ry=ii(iy),sy=Xt({},No,{data:0}),bp=ii(sy),oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ly[t])?!!e[t]:!1}function mf(){return cy}var uy=Xt({},Ya,{key:function(t){if(t.key){var e=oy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hy=ii(uy),dy=Xt({},Hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=ii(dy),fy=Xt({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),py=ii(fy),my=Xt({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=ii(my),vy=Xt({},Hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=ii(vy),xy=[9,13,27,32],gf=ar&&"CompositionEvent"in window,ha=null;ar&&"documentMode"in document&&(ha=document.documentMode);var yy=ar&&"TextEvent"in window&&!ha,Ig=ar&&(!gf||ha&&8<ha&&11>=ha),Pp=" ",Lp=!1;function Ng(t,e){switch(t){case"keyup":return xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function My(t,e){switch(t){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:(Lp=!0,Pp);case"textInput":return t=e.data,t===Pp&&Lp?null:t;default:return null}}function Sy(t,e){if(qs)return t==="compositionend"||!gf&&Ng(t,e)?(t=Dg(),ql=ff=Cr=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ig&&e.locale!=="ko"?null:e.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wy[t.type]:e==="textarea"}function Fg(t,e,n,i){fg(i),e=gc(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var da=null,Ra=null;function Ey(t){Yg(t,0)}function Vc(t){var e=Ks(t);if(og(e))return t}function Ty(t,e){if(t==="change")return e}var Og=!1;if(ar){var vu;if(ar){var _u="oninput"in document;if(!_u){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),_u=typeof Ip.oninput=="function"}vu=_u}else vu=!1;Og=vu&&(!document.documentMode||9<document.documentMode)}function Np(){da&&(da.detachEvent("onpropertychange",kg),Ra=da=null)}function kg(t){if(t.propertyName==="value"&&Vc(Ra)){var e=[];Fg(e,Ra,t,lf(t)),vg(Ey,e)}}function Ay(t,e,n){t==="focusin"?(Np(),da=e,Ra=n,da.attachEvent("onpropertychange",kg)):t==="focusout"&&Np()}function Cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vc(Ra)}function by(t,e){if(t==="click")return Vc(e)}function Ry(t,e){if(t==="input"||t==="change")return Vc(e)}function Py(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bi=typeof Object.is=="function"?Object.is:Py;function Pa(t,e){if(bi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gh.call(e,r)||!bi(t[r],e[r]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,e){var n=Up(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var t=window,e=cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cc(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ly(t){var e=Bg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(i!==null&&vf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fp(n,s);var o=Fp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dy=ar&&"documentMode"in document&&11>=document.documentMode,$s=null,Uh=null,fa=null,Fh=!1;function Op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fh||$s==null||$s!==cc(i)||(i=$s,"selectionStart"in i&&vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&Pa(fa,i)||(fa=i,i=gc(Uh,"onSelect"),0<i.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$s)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},xu={},Hg={};ar&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Gc(t){if(xu[t])return xu[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hg)return xu[t]=e[n];return t}var Vg=Gc("animationend"),Gg=Gc("animationiteration"),Wg=Gc("animationstart"),Xg=Gc("transitionend"),jg=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){jg.set(t,e),Ms(e,[t])}for(var yu=0;yu<kp.length;yu++){var Mu=kp[yu],Iy=Mu.toLowerCase(),Ny=Mu[0].toUpperCase()+Mu.slice(1);Gr(Iy,"on"+Ny)}Gr(Vg,"onAnimationEnd");Gr(Gg,"onAnimationIteration");Gr(Wg,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(Xg,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function zp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ix(i,e,void 0,t),t.currentTarget=null}function Yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zp(r,a,c),s=l}}}if(hc)throw t=Lh,hc=!1,Lh=null,t}function Ot(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var i=t+"__bubble";n.has(i)||(qg(e,t,2,!1),n.add(i))}function Su(t,e,n){var i=0;e&&(i|=4),qg(n,t,i,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[al]){t[al]=!0,tg.forEach(function(n){n!=="selectionchange"&&(Uy.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Su("selectionchange",!1,e))}}function qg(t,e,n,i){switch(Lg(e)){case 1:var r=$x;break;case 4:r=Zx;break;default:r=df}n=r.bind(null,e,n,t),r=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ss(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}vg(function(){var c=s,h=lf(n),f=[];e:{var d=jg.get(t);if(d!==void 0){var p=pf,_=t;switch(t){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":p=hy;break;case"focusin":_="focus",p=gu;break;case"focusout":_="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Qx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=py;break;case Vg:case Gg:case Wg:p=ny;break;case Xg:p=gy;break;case"scroll":p=Kx;break;case"wheel":p=_y;break;case"copy":case"cut":case"paste":p=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rp}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,u!==null&&(x=Ta(m,u),x!=null&&y.push(Da(m,x,v)))),g)break;m=m.return}0<y.length&&(d=new p(d,_,null,n,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==bh&&(_=n.relatedTarget||n.fromElement)&&(ss(_)||_[lr]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ss(_):null,_!==null&&(g=Ss(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Cp,x="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Rp,x="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?d:Ks(p),v=_==null?d:Ks(_),d=new y(x,m+"leave",p,n,h),d.target=g,d.relatedTarget=v,x=null,ss(h)===c&&(y=new y(u,m+"enter",_,n,h),y.target=v,y.relatedTarget=g,x=y),g=x,p&&_)t:{for(y=p,u=_,m=0,v=y;v;v=Cs(v))m++;for(v=0,x=u;x;x=Cs(x))v++;for(;0<m-v;)y=Cs(y),m--;for(;0<v-m;)u=Cs(u),v--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=Cs(y),u=Cs(u)}y=null}else y=null;p!==null&&Bp(f,d,p,y,!1),_!==null&&g!==null&&Bp(f,g,_,y,!0)}}e:{if(d=c?Ks(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=Ty;else if(Dp(d))if(Og)P=Ry;else{P=Cy;var b=Ay}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=by);if(P&&(P=P(t,c))){Fg(f,P,n,h);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&wh(d,"number",d.value)}switch(b=c?Ks(c):window,t){case"focusin":(Dp(b)||b.contentEditable==="true")&&($s=b,Uh=c,fa=null);break;case"focusout":fa=Uh=$s=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Op(f,n,h);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":Op(f,n,h)}var w;if(gf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else qs?Ng(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ig&&n.locale!=="ko"&&(qs||R!=="onCompositionStart"?R==="onCompositionEnd"&&qs&&(w=Dg()):(Cr=h,ff="value"in Cr?Cr.value:Cr.textContent,qs=!0)),b=gc(c,R),0<b.length&&(R=new bp(R,t,null,n,h),f.push({event:R,listeners:b}),w?R.data=w:(w=Ug(n),w!==null&&(R.data=w)))),(w=yy?My(t,n):Sy(t,n))&&(c=gc(c,"onBeforeInput"),0<c.length&&(h=new bp("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}Yg(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(Da(t,s,r)),s=Ta(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function Cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ta(n,s),l!=null&&o.unshift(Da(n,l,a))):r||(l=Ta(n,s),l!=null&&o.push(Da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fy=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function Hp(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(Oy,"")}function ll(t,e,n){if(e=Hp(e),Hp(t)!==e&&n)throw Error(ve(425))}function vc(){}var Oh=null,kh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bh=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(t){return Vp.resolve(null).then(t).catch(By)}:Bh;function By(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Uo,Ia="__reactProps$"+Uo,lr="__reactContainer$"+Uo,Hh="__reactEvents$"+Uo,Hy="__reactListeners$"+Uo,Vy="__reactHandles$"+Uo;function ss(t){var e=t[Ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[Ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gp(t);t!==null;){if(n=t[Ui])return n;t=Gp(t)}return e}t=n,n=t.parentNode}return null}function qa(t){return t=t[Ui]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ve(33))}function Wc(t){return t[Ia]||null}var Vh=[],Js=-1;function Wr(t){return{current:t}}function kt(t){0>Js||(t.current=Vh[Js],Vh[Js]=null,Js--)}function Ft(t,e){Js++,Vh[Js]=t.current,t.current=e}var Hr={},Rn=Wr(Hr),Gn=Wr(!1),ds=Hr;function yo(t,e){var n=t.type.contextTypes;if(!n)return Hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Wn(t){return t=t.childContextTypes,t!=null}function _c(){kt(Gn),kt(Rn)}function Wp(t,e,n){if(Rn.current!==Hr)throw Error(ve(168));Ft(Rn,e),Ft(Gn,n)}function $g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ve(108,Ax(t)||"Unknown",r));return Xt({},n,i)}function xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,ds=Rn.current,Ft(Rn,t),Ft(Gn,Gn.current),!0}function Xp(t,e,n){var i=t.stateNode;if(!i)throw Error(ve(169));n?(t=$g(t,e,ds),i.__reactInternalMemoizedMergedChildContext=t,kt(Gn),kt(Rn),Ft(Rn,t)):kt(Gn),Ft(Gn,n)}var Qi=null,Xc=!1,Tu=!1;function Zg(t){Qi===null?Qi=[t]:Qi.push(t)}function Gy(t){Xc=!0,Zg(t)}function Xr(){if(!Tu&&Qi!==null){Tu=!0;var t=0,e=Pt;try{var n=Qi;for(Pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Qi=null,Xc=!1}catch(r){throw Qi!==null&&(Qi=Qi.slice(t+1)),Mg(cf,Xr),r}finally{Pt=e,Tu=!1}}return null}var Qs=[],eo=0,yc=null,Mc=0,ci=[],ui=0,fs=null,er=1,tr="";function Qr(t,e){Qs[eo++]=Mc,Qs[eo++]=yc,yc=t,Mc=e}function Kg(t,e,n){ci[ui++]=er,ci[ui++]=tr,ci[ui++]=fs,fs=t;var i=er;t=tr;var r=32-Ai(i)-1;i&=~(1<<r),n+=1;var s=32-Ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,er=1<<32-Ai(e)+r|n<<r|i,tr=s+t}else er=1<<s|n<<r|i,tr=t}function _f(t){t.return!==null&&(Qr(t,1),Kg(t,1,0))}function xf(t){for(;t===yc;)yc=Qs[--eo],Qs[eo]=null,Mc=Qs[--eo],Qs[eo]=null;for(;t===fs;)fs=ci[--ui],ci[ui]=null,tr=ci[--ui],ci[ui]=null,er=ci[--ui],ci[ui]=null}var Qn=null,Kn=null,Ht=!1,wi=null;function Jg(t,e){var n=hi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qn=t,Kn=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qn=t,Kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qn=t,Kn=null,!0):!1;default:return!1}}function Gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wh(t){if(Ht){var e=Kn;if(e){var n=e;if(!jp(t,e)){if(Gh(t))throw Error(ve(418));e=Dr(n.nextSibling);var i=Qn;e&&jp(t,e)?Jg(i,n):(t.flags=t.flags&-4097|2,Ht=!1,Qn=t)}}else{if(Gh(t))throw Error(ve(418));t.flags=t.flags&-4097|2,Ht=!1,Qn=t}}}function Yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function cl(t){if(t!==Qn)return!1;if(!Ht)return Yp(t),Ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=Kn)){if(Gh(t))throw Qg(),Error(ve(418));for(;e;)Jg(t,e),e=Dr(e.nextSibling)}if(Yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ve(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kn=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kn=null}}else Kn=Qn?Dr(t.stateNode.nextSibling):null;return!0}function Qg(){for(var t=Kn;t;)t=Dr(t.nextSibling)}function Mo(){Kn=Qn=null,Ht=!1}function yf(t){wi===null?wi=[t]:wi.push(t)}var Wy=fr.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ve(309));var i=n.stateNode}if(!i)throw Error(ve(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ve(284));if(!n._owner)throw Error(ve(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(ve(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qp(t){var e=t._init;return e(t._payload)}function ev(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Fr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,x){return m===null||m.tag!==6?(m=Du(v,u.mode,x),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,x){var P=v.type;return P===Ys?h(u,m,v.props.children,x,v.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Mr&&qp(P)===m.type)?(x=r(m,v.props),x.ref=jo(u,m,v),x.return=u,x):(x=nc(v.type,v.key,v.props,null,u.mode,x),x.ref=jo(u,m,v),x.return=u,x)}function c(u,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Iu(v,u.mode,x),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function h(u,m,v,x,P){return m===null||m.tag!==7?(m=us(v,u.mode,x,P),m.return=u,m):(m=r(m,v),m.return=u,m)}function f(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Du(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qa:return v=nc(m.type,m.key,m.props,null,u.mode,v),v.ref=jo(u,null,m),v.return=u,v;case js:return m=Iu(m,u.mode,v),m.return=u,m;case Mr:var x=m._init;return f(u,x(m._payload),v)}if(ia(m)||Ho(m))return m=us(m,u.mode,v,null),m.return=u,m;ul(u,m)}return null}function d(u,m,v,x){var P=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return v.key===P?l(u,m,v,x):null;case js:return v.key===P?c(u,m,v,x):null;case Mr:return P=v._init,d(u,m,P(v._payload),x)}if(ia(v)||Ho(v))return P!==null?null:h(u,m,v,x,null);ul(u,v)}return null}function p(u,m,v,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(v)||null,a(m,u,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qa:return u=u.get(x.key===null?v:x.key)||null,l(m,u,x,P);case js:return u=u.get(x.key===null?v:x.key)||null,c(m,u,x,P);case Mr:var b=x._init;return p(u,m,v,b(x._payload),P)}if(ia(x)||Ho(x))return u=u.get(v)||null,h(m,u,x,P,null);ul(m,x)}return null}function _(u,m,v,x){for(var P=null,b=null,w=m,R=m=0,E=null;w!==null&&R<v.length;R++){w.index>R?(E=w,w=null):E=w.sibling;var S=d(u,w,v[R],x);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(u,w),m=s(S,m,R),b===null?P=S:b.sibling=S,b=S,w=E}if(R===v.length)return n(u,w),Ht&&Qr(u,R),P;if(w===null){for(;R<v.length;R++)w=f(u,v[R],x),w!==null&&(m=s(w,m,R),b===null?P=w:b.sibling=w,b=w);return Ht&&Qr(u,R),P}for(w=i(u,w);R<v.length;R++)E=p(w,u,R,v[R],x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?R:E.key),m=s(E,m,R),b===null?P=E:b.sibling=E,b=E);return t&&w.forEach(function(D){return e(u,D)}),Ht&&Qr(u,R),P}function y(u,m,v,x){var P=Ho(v);if(typeof P!="function")throw Error(ve(150));if(v=P.call(v),v==null)throw Error(ve(151));for(var b=P=null,w=m,R=m=0,E=null,S=v.next();w!==null&&!S.done;R++,S=v.next()){w.index>R?(E=w,w=null):E=w.sibling;var D=d(u,w,S.value,x);if(D===null){w===null&&(w=E);break}t&&w&&D.alternate===null&&e(u,w),m=s(D,m,R),b===null?P=D:b.sibling=D,b=D,w=E}if(S.done)return n(u,w),Ht&&Qr(u,R),P;if(w===null){for(;!S.done;R++,S=v.next())S=f(u,S.value,x),S!==null&&(m=s(S,m,R),b===null?P=S:b.sibling=S,b=S);return Ht&&Qr(u,R),P}for(w=i(u,w);!S.done;R++,S=v.next())S=p(w,u,R,S.value,x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?R:S.key),m=s(S,m,R),b===null?P=S:b.sibling=S,b=S);return t&&w.forEach(function(B){return e(u,B)}),Ht&&Qr(u,R),P}function g(u,m,v,x){if(typeof v=="object"&&v!==null&&v.type===Ys&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:e:{for(var P=v.key,b=m;b!==null;){if(b.key===P){if(P=v.type,P===Ys){if(b.tag===7){n(u,b.sibling),m=r(b,v.props.children),m.return=u,u=m;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Mr&&qp(P)===b.type){n(u,b.sibling),m=r(b,v.props),m.ref=jo(u,b,v),m.return=u,u=m;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===Ys?(m=us(v.props.children,u.mode,x,v.key),m.return=u,u=m):(x=nc(v.type,v.key,v.props,null,u.mode,x),x.ref=jo(u,m,v),x.return=u,u=x)}return o(u);case js:e:{for(b=v.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Iu(v,u.mode,x),m.return=u,u=m}return o(u);case Mr:return b=v._init,g(u,m,b(v._payload),x)}if(ia(v))return _(u,m,v,x);if(Ho(v))return y(u,m,v,x);ul(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=Du(v,u.mode,x),m.return=u,u=m),o(u)):n(u,m)}return g}var So=ev(!0),tv=ev(!1),Sc=Wr(null),wc=null,to=null,Mf=null;function Sf(){Mf=to=wc=null}function wf(t){var e=Sc.current;kt(Sc),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){wc=t,Mf=to=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vn=!0),t.firstContext=null)}function fi(t){var e=t._currentValue;if(Mf!==t)if(t={context:t,memoizedValue:e,next:null},to===null){if(wc===null)throw Error(ve(308));to=t,wc.dependencies={lanes:0,firstContext:t}}else to=to.next=t;return e}var os=null;function Ef(t){os===null?os=[t]:os.push(t)}function nv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ef(e)):(n.next=r.next,r.next=n),e.interleaved=n,cr(t,i)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,xt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,cr(t,n)}return r=i.interleaved,r===null?(e.next=e,Ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,cr(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uf(t,n)}}function $p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,i){var r=t.updateQueue;Sr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=Xt({},f,d);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ms|=o,t.lanes=o,t.memoizedState=f}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ve(191,r));r.call(i)}}}var $a={},Bi=Wr($a),Na=Wr($a),Ua=Wr($a);function as(t){if(t===$a)throw Error(ve(174));return t}function Af(t,e){switch(Ft(Ua,e),Ft(Na,t),Ft(Bi,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Th(e,t)}kt(Bi),Ft(Bi,e)}function wo(){kt(Bi),kt(Na),kt(Ua)}function rv(t){as(Ua.current);var e=as(Bi.current),n=Th(e,t.type);e!==n&&(Ft(Na,t),Ft(Bi,n))}function Cf(t){Na.current===t&&(kt(Bi),kt(Na))}var Vt=Wr(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function bf(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var Kl=fr.ReactCurrentDispatcher,Cu=fr.ReactCurrentBatchConfig,ps=0,Wt=null,on=null,dn=null,Ac=!1,pa=!1,Fa=0,Xy=0;function Mn(){throw Error(ve(321))}function Rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bi(t[n],e[n]))return!1;return!0}function Pf(t,e,n,i,r,s){if(ps=s,Wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?$y:Zy,t=n(i,r),pa){s=0;do{if(pa=!1,Fa=0,25<=s)throw Error(ve(301));s+=1,dn=on=null,e.updateQueue=null,Kl.current=Ky,t=n(i,r)}while(pa)}if(Kl.current=Cc,e=on!==null&&on.next!==null,ps=0,dn=on=Wt=null,Ac=!1,e)throw Error(ve(300));return t}function Lf(){var t=Fa!==0;return Fa=0,t}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Wt.memoizedState=dn=t:dn=dn.next=t,dn}function pi(){if(on===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var e=dn===null?Wt.memoizedState:dn.next;if(e!==null)dn=e,on=t;else{if(t===null)throw Error(ve(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?Wt.memoizedState=dn=t:dn=dn.next=t}return dn}function Oa(t,e){return typeof e=="function"?e(t):e}function bu(t){var e=pi(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=on,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ps&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Wt.lanes|=h,ms|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,bi(i,e.memoizedState)||(Vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Wt.lanes|=s,ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=pi(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);bi(s,e.memoizedState)||(Vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function sv(){}function ov(t,e){var n=Wt,i=pi(),r=e(),s=!bi(i.memoizedState,r);if(s&&(i.memoizedState=r,Vn=!0),i=i.queue,Df(cv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(n.flags|=2048,ka(9,lv.bind(null,n,i,r,e),void 0,null),fn===null)throw Error(ve(349));ps&30||av(n,e,r)}return r}function av(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lv(t,e,n,i){e.value=n,e.getSnapshot=i,uv(e)&&hv(t)}function cv(t,e,n){return n(function(){uv(e)&&hv(t)})}function uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bi(t,n)}catch{return!0}}function hv(t){var e=cr(t,1);e!==null&&Ci(e,t,1,-1)}function Kp(t){var e=Di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=qy.bind(null,Wt,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dv(){return pi().memoizedState}function Jl(t,e,n,i){var r=Di();Wt.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function jc(t,e,n,i){var r=pi();i=i===void 0?null:i;var s=void 0;if(on!==null){var o=on.memoizedState;if(s=o.destroy,i!==null&&Rf(i,o.deps)){r.memoizedState=ka(e,n,s,i);return}}Wt.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function Jp(t,e){return Jl(8390656,8,t,e)}function Df(t,e){return jc(2048,8,t,e)}function fv(t,e){return jc(4,2,t,e)}function pv(t,e){return jc(4,4,t,e)}function mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gv(t,e,n){return n=n!=null?n.concat([t]):null,jc(4,4,mv.bind(null,e,t),n)}function If(){}function vv(t,e){var n=pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _v(t,e){var n=pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function xv(t,e,n){return ps&21?(bi(n,e)||(n=Eg(),Wt.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vn=!0),t.memoizedState=n)}function jy(t,e){var n=Pt;Pt=n!==0&&4>n?n:4,t(!0);var i=Cu.transition;Cu.transition={};try{t(!1),e()}finally{Pt=n,Cu.transition=i}}function yv(){return pi().memoizedState}function Yy(t,e,n){var i=Ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Mv(t))Sv(e,n);else if(n=nv(t,e,n,i),n!==null){var r=Nn();Ci(n,t,i,r),wv(n,e,i)}}function qy(t,e,n){var i=Ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mv(t))Sv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,bi(a,o)){var l=e.interleaved;l===null?(r.next=r,Ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=nv(t,e,r,i),n!==null&&(r=Nn(),Ci(n,t,i,r),wv(n,e,i))}}function Mv(t){var e=t.alternate;return t===Wt||e!==null&&e===Wt}function Sv(t,e){pa=Ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uf(t,n)}}var Cc={readContext:fi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},$y={readContext:fi,useCallback:function(t,e){return Di().memoizedState=[t,e===void 0?null:e],t},useContext:fi,useEffect:Jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=Di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Yy.bind(null,Wt,t),[i.memoizedState,t]},useRef:function(t){var e=Di();return t={current:t},e.memoizedState=t},useState:Kp,useDebugValue:If,useDeferredValue:function(t){return Di().memoizedState=t},useTransition:function(){var t=Kp(!1),e=t[0];return t=jy.bind(null,t[1]),Di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Wt,r=Di();if(Ht){if(n===void 0)throw Error(ve(407));n=n()}else{if(n=e(),fn===null)throw Error(ve(349));ps&30||av(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jp(cv.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,lv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Di(),e=fn.identifierPrefix;if(Ht){var n=tr,i=er;n=(i&~(1<<32-Ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zy={readContext:fi,useCallback:vv,useContext:fi,useEffect:Df,useImperativeHandle:gv,useInsertionEffect:fv,useLayoutEffect:pv,useMemo:_v,useReducer:bu,useRef:dv,useState:function(){return bu(Oa)},useDebugValue:If,useDeferredValue:function(t){var e=pi();return xv(e,on.memoizedState,t)},useTransition:function(){var t=bu(Oa)[0],e=pi().memoizedState;return[t,e]},useMutableSource:sv,useSyncExternalStore:ov,useId:yv,unstable_isNewReconciler:!1},Ky={readContext:fi,useCallback:vv,useContext:fi,useEffect:Df,useImperativeHandle:gv,useInsertionEffect:fv,useLayoutEffect:pv,useMemo:_v,useReducer:Ru,useRef:dv,useState:function(){return Ru(Oa)},useDebugValue:If,useDeferredValue:function(t){var e=pi();return on===null?e.memoizedState=t:xv(e,on.memoizedState,t)},useTransition:function(){var t=Ru(Oa)[0],e=pi().memoizedState;return[t,e]},useMutableSource:sv,useSyncExternalStore:ov,useId:yv,unstable_isNewReconciler:!1};function Mi(t,e){if(t&&t.defaultProps){e=Xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Nn(),r=Ur(t),s=rr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,r),e!==null&&(Ci(e,t,r,i),Zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Nn(),r=Ur(t),s=rr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,r),e!==null&&(Ci(e,t,r,i),Zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nn(),i=Ur(t),r=rr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ir(t,r,i),e!==null&&(Ci(e,t,i,n),Zl(e,t,i))}};function Qp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function Ev(t,e,n){var i=!1,r=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=fi(s):(r=Wn(e)?ds:Rn.current,i=e.contextTypes,s=(i=i!=null)?yo(t,r):Hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function em(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function Yh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Tf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fi(s):(s=Wn(e)?ds:Rn.current,r.context=yo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yc.enqueueReplaceState(r,r.state,null),Ec(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var n="",i=e;do n+=Tx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Jy=typeof WeakMap=="function"?WeakMap:Map;function Tv(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rc||(Rc=!0,rd=i),qh(t,e)},n}function Av(t,e,n){n=rr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qh(t,e),typeof i!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=d1.bind(null,t,e,n),e.then(t,t))}function nm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function im(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var Qy=fr.ReactCurrentOwner,Vn=!1;function Dn(t,e,n,i){e.child=t===null?tv(e,null,n,i):So(e,t.child,n,i)}function rm(t,e,n,i,r){n=n.render;var s=e.ref;return ho(e,r),i=Pf(t,e,n,i,s,r),n=Lf(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ur(t,e,r)):(Ht&&n&&_f(e),e.flags|=1,Dn(t,e,i,r),e.child)}function sm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cv(t,e,s,i,r)):(t=nc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(o,i)&&t.ref===e.ref)return ur(t,e,r)}return e.flags|=1,t=Fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Cv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(Vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Vn=!0);else return e.lanes=t.lanes,ur(t,e,r)}return $h(t,e,n,i,r)}function bv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(io,$n),$n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ft(io,$n),$n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ft(io,$n),$n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ft(io,$n),$n|=i;return Dn(t,e,r,n),e.child}function Rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $h(t,e,n,i,r){var s=Wn(n)?ds:Rn.current;return s=yo(e,s),ho(e,r),n=Pf(t,e,n,i,s,r),i=Lf(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ur(t,e,r)):(Ht&&i&&_f(e),e.flags|=1,Dn(t,e,n,r),e.child)}function om(t,e,n,i,r){if(Wn(n)){var s=!0;xc(e)}else s=!1;if(ho(e,r),e.stateNode===null)Ql(t,e),Ev(e,n,i),Yh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=fi(c):(c=Wn(n)?ds:Rn.current,c=yo(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&em(e,o,i,c),Sr=!1;var d=e.memoizedState;o.state=d,Ec(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Gn.current||Sr?(typeof h=="function"&&(jh(e,n,h,i),l=e.memoizedState),(a=Sr||Qp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,iv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mi(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=fi(l):(l=Wn(n)?ds:Rn.current,l=yo(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&em(e,o,i,l),Sr=!1,d=e.memoizedState,o.state=d,Ec(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||Gn.current||Sr?(typeof p=="function"&&(jh(e,n,p,i),_=e.memoizedState),(c=Sr||Qp(e,n,c,i,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Zh(t,e,n,i,s,r)}function Zh(t,e,n,i,r,s){Rv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xp(e,n,!1),ur(t,e,s);i=e.stateNode,Qy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,s),e.child=So(e,null,a,s)):Dn(t,e,a,s),e.memoizedState=i.state,r&&Xp(e,n,!0),e.child}function Pv(t){var e=t.stateNode;e.pendingContext?Wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wp(t,e.context,!1),Af(t,e.containerInfo)}function am(t,e,n,i,r){return Mo(),yf(r),e.flags|=256,Dn(t,e,n,i),e.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lv(t,e,n){var i=e.pendingProps,r=Vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ft(Vt,r&1),t===null)return Wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zc(o,i,0,null),t=us(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jh(n),e.memoizedState=Kh,t):Nf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return e1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kh,i}return s=t.child,t=s.sibling,i=Fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nf(t,e){return e=Zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,i){return i!==null&&yf(i),So(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function e1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(ve(422))),hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Zc({mode:"visible",children:i.children},r,0,null),s=us(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=Jh(o),e.memoizedState=Kh,s);if(!(e.mode&1))return hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ve(419)),i=Pu(s,i,void 0),hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Vn||a){if(i=fn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,cr(t,r),Ci(i,t,r,-1))}return Bf(),i=Pu(Error(ve(421))),hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=f1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Kn=Dr(r.nextSibling),Qn=e,Ht=!0,wi=null,t!==null&&(ci[ui++]=er,ci[ui++]=tr,ci[ui++]=fs,er=t.id,tr=t.overflow,fs=e),e=Nf(e,i.children),e.flags|=4096,e)}function lm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xh(t.return,e,n)}function Lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Dv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Dn(t,e,i.children,n),i=Vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lm(t,n,e);else if(t.tag===19)lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ft(Vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ve(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function t1(t,e,n){switch(e.tag){case 3:Pv(e),Mo();break;case 5:rv(e);break;case 1:Wn(e.type)&&xc(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ft(Sc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ft(Vt,Vt.current&1),e.flags|=128,null):n&e.child.childLanes?Lv(t,e,n):(Ft(Vt,Vt.current&1),t=ur(t,e,n),t!==null?t.sibling:null);Ft(Vt,Vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Dv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ft(Vt,Vt.current),i)break;return null;case 22:case 23:return e.lanes=0,bv(t,e,n)}return ur(t,e,n)}var Iv,Qh,Nv,Uv;Iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qh=function(){};Nv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,as(Bi.current);var s=null;switch(n){case"input":r=Mh(t,r),i=Mh(t,i),s=[];break;case"select":r=Xt({},r,{value:void 0}),i=Xt({},i,{value:void 0}),s=[];break;case"textarea":r=Eh(t,r),i=Eh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vc)}Ah(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Yo(t,e){if(!Ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function n1(t,e,n){var i=e.pendingProps;switch(xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return Wn(e.type)&&_c(),Sn(e),null;case 3:return i=e.stateNode,wo(),kt(Gn),kt(Rn),bf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wi!==null&&(ad(wi),wi=null))),Qh(t,e),Sn(e),null;case 5:Cf(e);var r=as(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Nv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ve(166));return Sn(e),null}if(t=as(Bi.current),cl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ui]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":Ot("cancel",i),Ot("close",i);break;case"iframe":case"object":case"embed":Ot("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)Ot(sa[r],i);break;case"source":Ot("error",i);break;case"img":case"image":case"link":Ot("error",i),Ot("load",i);break;case"details":Ot("toggle",i);break;case"input":vp(i,s),Ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ot("invalid",i);break;case"textarea":xp(i,s),Ot("invalid",i)}Ah(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",""+a]):wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ot("scroll",i)}switch(n){case"input":el(i),_p(i,s,!0);break;case"textarea":el(i),yp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ui]=e,t[Ia]=i,Iv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ch(n,i),n){case"dialog":Ot("cancel",t),Ot("close",t),r=i;break;case"iframe":case"object":case"embed":Ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)Ot(sa[r],t);r=i;break;case"source":Ot("error",t),r=i;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),r=i;break;case"details":Ot("toggle",t),r=i;break;case"input":vp(t,i),r=Mh(t,i),Ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Xt({},i,{value:void 0}),Ot("invalid",t);break;case"textarea":xp(t,i),r=Eh(t,i),Ot("invalid",t);break;default:r=i}Ah(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ug(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ot("scroll",t):l!=null&&rf(t,s,l,o))}switch(n){case"input":el(t),_p(t,i,!1);break;case"textarea":el(t),yp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ao(t,!!i.multiple,s,!1):i.defaultValue!=null&&ao(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(t&&e.stateNode!=null)Uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ve(166));if(n=as(Ua.current),as(Bi.current),cl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ui]=e,(s=i.nodeValue!==n)&&(t=Qn,t!==null))switch(t.tag){case 3:ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ui]=e,e.stateNode=i}return Sn(e),null;case 13:if(kt(Vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Kn!==null&&e.mode&1&&!(e.flags&128))Qg(),Mo(),e.flags|=98560,s=!1;else if(s=cl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ve(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ve(317));s[Ui]=e}else Mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else wi!==null&&(ad(wi),wi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Vt.current&1?an===0&&(an=3):Bf())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return wo(),Qh(t,e),t===null&&La(e.stateNode.containerInfo),Sn(e),null;case 10:return wf(e.type._context),Sn(e),null;case 17:return Wn(e.type)&&_c(),Sn(e),null;case 19:if(kt(Vt),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Yo(s,!1);else{if(an!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,Yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ft(Vt,Vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Jt()>To&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ht)return Sn(e),null}else 2*Jt()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Jt(),e.sibling=null,n=Vt.current,Ft(Vt,i?n&1|2:n&1),e):(Sn(e),null);case 22:case 23:return zf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?$n&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(ve(156,e.tag))}function i1(t,e){switch(xf(e),e.tag){case 1:return Wn(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wo(),kt(Gn),kt(Rn),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cf(e),null;case 13:if(kt(Vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ve(340));Mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return kt(Vt),null;case 4:return wo(),null;case 10:return wf(e.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var dl=!1,An=!1,r1=typeof WeakSet=="function"?WeakSet:Set,Be=null;function no(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Yt(t,e,i)}else n.current=null}function ed(t,e,n){try{n()}catch(i){Yt(t,e,i)}}var cm=!1;function s1(t,e){if(Oh=pc,t=Bg(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kh={focusedElem:t,selectionRange:n},pc=!1,Be=e;Be!==null;)if(e=Be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Be=t;else for(;Be!==null;){e=Be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Mi(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ve(163))}}catch(x){Yt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Be=t;break}Be=e.return}return _=cm,cm=!1,_}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ed(e,n,s)}r=r.next}while(r!==i)}}function qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fv(t){var e=t.alternate;e!==null&&(t.alternate=null,Fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ui],delete e[Ia],delete e[Hh],delete e[Hy],delete e[Vy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ov(t){return t.tag===5||t.tag===3||t.tag===4}function um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ov(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var mn=null,Si=!1;function pr(t,e,n){for(n=n.child;n!==null;)kv(t,e,n),n=n.sibling}function kv(t,e,n){if(zi&&typeof zi.onCommitFiberUnmount=="function")try{zi.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:An||no(n,e);case 6:var i=mn,r=Si;mn=null,pr(t,e,n),mn=i,Si=r,mn!==null&&(Si?(t=mn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mn.removeChild(n.stateNode));break;case 18:mn!==null&&(Si?(t=mn,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),ba(t)):Eu(mn,n.stateNode));break;case 4:i=mn,r=Si,mn=n.stateNode.containerInfo,Si=!0,pr(t,e,n),mn=i,Si=r;break;case 0:case 11:case 14:case 15:if(!An&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ed(n,e,o),r=r.next}while(r!==i)}pr(t,e,n);break;case 1:if(!An&&(no(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Yt(n,e,a)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(An=(i=An)||n.memoizedState!==null,pr(t,e,n),An=i):pr(t,e,n);break;default:pr(t,e,n)}}function hm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new r1),e.forEach(function(i){var r=p1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function vi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,Si=!1;break e;case 3:mn=a.stateNode.containerInfo,Si=!0;break e;case 4:mn=a.stateNode.containerInfo,Si=!0;break e}a=a.return}if(mn===null)throw Error(ve(160));kv(s,o,r),mn=null,Si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zv(e,t),e=e.sibling}function zv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(e,t),Li(t),i&4){try{ma(3,t,t.return),qc(3,t)}catch(y){Yt(t,t.return,y)}try{ma(5,t,t.return)}catch(y){Yt(t,t.return,y)}}break;case 1:vi(e,t),Li(t),i&512&&n!==null&&no(n,n.return);break;case 5:if(vi(e,t),Li(t),i&512&&n!==null&&no(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(y){Yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ag(r,s),Ch(a,o);var c=Ch(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?dg(r,f):h==="dangerouslySetInnerHTML"?ug(r,f):h==="children"?Ea(r,f):rf(r,h,f,c)}switch(a){case"input":Sh(r,s);break;case"textarea":lg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ao(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ao(r,!!s.multiple,s.defaultValue,!0):ao(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(y){Yt(t,t.return,y)}}break;case 6:if(vi(e,t),Li(t),i&4){if(t.stateNode===null)throw Error(ve(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Yt(t,t.return,y)}}break;case 3:if(vi(e,t),Li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(y){Yt(t,t.return,y)}break;case 4:vi(e,t),Li(t);break;case 13:vi(e,t),Li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Of=Jt())),i&4&&hm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(An=(c=An)||h,vi(e,t),An=c):vi(e,t),Li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Be=t,h=t.child;h!==null;){for(f=Be=h;Be!==null;){switch(d=Be,p=d.child,d.tag){case 0:case 11:case 14:case 15:ma(4,d,d.return);break;case 1:no(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Yt(i,n,y)}}break;case 5:no(d,d.return);break;case 22:if(d.memoizedState!==null){fm(f);continue}}p!==null?(p.return=d,Be=p):fm(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hg("display",o))}catch(y){Yt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Yt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vi(e,t),Li(t),i&4&&hm(t);break;case 21:break;default:vi(e,t),Li(t)}}function Li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ov(n)){var i=n;break e}n=n.return}throw Error(ve(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=um(t);id(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=um(t);nd(t,a,o);break;default:throw Error(ve(161))}}catch(l){Yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function o1(t,e,n){Be=t,Bv(t)}function Bv(t,e,n){for(var i=(t.mode&1)!==0;Be!==null;){var r=Be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||An;a=dl;var c=An;if(dl=o,(An=l)&&!c)for(Be=r;Be!==null;)o=Be,l=o.child,o.tag===22&&o.memoizedState!==null?pm(r):l!==null?(l.return=o,Be=l):pm(r);for(;s!==null;)Be=s,Bv(s),s=s.sibling;Be=r,dl=a,An=c}dm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Be=s):dm(t)}}function dm(t){for(;Be!==null;){var e=Be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:An||qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!An)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Mi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ba(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ve(163))}An||e.flags&512&&td(e)}catch(d){Yt(e,e.return,d)}}if(e===t){Be=null;break}if(n=e.sibling,n!==null){n.return=e.return,Be=n;break}Be=e.return}}function fm(t){for(;Be!==null;){var e=Be;if(e===t){Be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Be=n;break}Be=e.return}}function pm(t){for(;Be!==null;){var e=Be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qc(4,e)}catch(l){Yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Yt(e,r,l)}}var s=e.return;try{td(e)}catch(l){Yt(e,s,l)}break;case 5:var o=e.return;try{td(e)}catch(l){Yt(e,o,l)}}}catch(l){Yt(e,e.return,l)}if(e===t){Be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Be=a;break}Be=e.return}}var a1=Math.ceil,bc=fr.ReactCurrentDispatcher,Uf=fr.ReactCurrentOwner,di=fr.ReactCurrentBatchConfig,xt=0,fn=null,nn=null,_n=0,$n=0,io=Wr(0),an=0,za=null,ms=0,$c=0,Ff=0,ga=null,Hn=null,Of=0,To=1/0,Ki=null,Rc=!1,rd=null,Nr=null,fl=!1,br=null,Pc=0,va=0,sd=null,ec=-1,tc=0;function Nn(){return xt&6?Jt():ec!==-1?ec:ec=Jt()}function Ur(t){return t.mode&1?xt&2&&_n!==0?_n&-_n:Wy.transition!==null?(tc===0&&(tc=Eg()),tc):(t=Pt,t!==0||(t=window.event,t=t===void 0?16:Lg(t.type)),t):1}function Ci(t,e,n,i){if(50<va)throw va=0,sd=null,Error(ve(185));ja(t,n,i),(!(xt&2)||t!==fn)&&(t===fn&&(!(xt&2)&&($c|=n),an===4&&Tr(t,_n)),Xn(t,i),n===1&&xt===0&&!(e.mode&1)&&(To=Jt()+500,Xc&&Xr()))}function Xn(t,e){var n=t.callbackNode;Wx(t,e);var i=fc(t,t===fn?_n:0);if(i===0)n!==null&&wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&wp(n),e===1)t.tag===0?Gy(mm.bind(null,t)):Zg(mm.bind(null,t)),zy(function(){!(xt&6)&&Xr()}),n=null;else{switch(Tg(i)){case 1:n=cf;break;case 4:n=Sg;break;case 16:n=dc;break;case 536870912:n=wg;break;default:n=dc}n=qv(n,Hv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hv(t,e){if(ec=-1,tc=0,xt&6)throw Error(ve(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var i=fc(t,t===fn?_n:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Lc(t,i);else{e=i;var r=xt;xt|=2;var s=Gv();(fn!==t||_n!==e)&&(Ki=null,To=Jt()+500,cs(t,e));do try{u1();break}catch(a){Vv(t,a)}while(!0);Sf(),bc.current=s,xt=r,nn!==null?e=0:(fn=null,_n=0,e=an)}if(e!==0){if(e===2&&(r=Dh(t),r!==0&&(i=r,e=od(t,r))),e===1)throw n=za,cs(t,0),Tr(t,i),Xn(t,Jt()),n;if(e===6)Tr(t,i);else{if(r=t.current.alternate,!(i&30)&&!l1(r)&&(e=Lc(t,i),e===2&&(s=Dh(t),s!==0&&(i=s,e=od(t,s))),e===1))throw n=za,cs(t,0),Tr(t,i),Xn(t,Jt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ve(345));case 2:es(t,Hn,Ki);break;case 3:if(Tr(t,i),(i&130023424)===i&&(e=Of+500-Jt(),10<e)){if(fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bh(es.bind(null,t,Hn,Ki),e);break}es(t,Hn,Ki);break;case 4:if(Tr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*a1(i/1960))-i,10<i){t.timeoutHandle=Bh(es.bind(null,t,Hn,Ki),i);break}es(t,Hn,Ki);break;case 5:es(t,Hn,Ki);break;default:throw Error(ve(329))}}}return Xn(t,Jt()),t.callbackNode===n?Hv.bind(null,t):null}function od(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(cs(t,e).flags|=256),t=Lc(t,e),t!==2&&(e=Hn,Hn=n,e!==null&&ad(e)),t}function ad(t){Hn===null?Hn=t:Hn.push.apply(Hn,t)}function l1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!bi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tr(t,e){for(e&=~Ff,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ai(e),i=1<<n;t[n]=-1,e&=~i}}function mm(t){if(xt&6)throw Error(ve(327));fo();var e=fc(t,0);if(!(e&1))return Xn(t,Jt()),null;var n=Lc(t,e);if(t.tag!==0&&n===2){var i=Dh(t);i!==0&&(e=i,n=od(t,i))}if(n===1)throw n=za,cs(t,0),Tr(t,e),Xn(t,Jt()),n;if(n===6)throw Error(ve(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Hn,Ki),Xn(t,Jt()),null}function kf(t,e){var n=xt;xt|=1;try{return t(e)}finally{xt=n,xt===0&&(To=Jt()+500,Xc&&Xr())}}function gs(t){br!==null&&br.tag===0&&!(xt&6)&&fo();var e=xt;xt|=1;var n=di.transition,i=Pt;try{if(di.transition=null,Pt=1,t)return t()}finally{Pt=i,di.transition=n,xt=e,!(xt&6)&&Xr()}}function zf(){$n=io.current,kt(io)}function cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ky(n)),nn!==null)for(n=nn.return;n!==null;){var i=n;switch(xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_c();break;case 3:wo(),kt(Gn),kt(Rn),bf();break;case 5:Cf(i);break;case 4:wo();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:wf(i.type._context);break;case 22:case 23:zf()}n=n.return}if(fn=t,nn=t=Fr(t.current,null),_n=$n=e,an=0,za=null,Ff=$c=ms=0,Hn=ga=null,os!==null){for(e=0;e<os.length;e++)if(n=os[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}os=null}return t}function Vv(t,e){do{var n=nn;try{if(Sf(),Kl.current=Cc,Ac){for(var i=Wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ac=!1}if(ps=0,dn=on=Wt=null,pa=!1,Fa=0,Uf.current=null,n===null||n.return===null){an=1,za=e,nn=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=nm(o);if(p!==null){p.flags&=-257,im(p,o,a,s,e),p.mode&1&&tm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){tm(s,c,e),Bf();break e}l=Error(ve(426))}}else if(Ht&&a.mode&1){var g=nm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),im(g,o,a,s,e),yf(Eo(l,a));break e}}s=l=Eo(l,a),an!==4&&(an=2),ga===null?ga=[s]:ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Tv(s,l,e);$p(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nr===null||!Nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Av(s,a,e);$p(s,x);break e}}s=s.return}while(s!==null)}Xv(n)}catch(P){e=P,nn===n&&n!==null&&(nn=n=n.return);continue}break}while(!0)}function Gv(){var t=bc.current;return bc.current=Cc,t===null?Cc:t}function Bf(){(an===0||an===3||an===2)&&(an=4),fn===null||!(ms&268435455)&&!($c&268435455)||Tr(fn,_n)}function Lc(t,e){var n=xt;xt|=2;var i=Gv();(fn!==t||_n!==e)&&(Ki=null,cs(t,e));do try{c1();break}catch(r){Vv(t,r)}while(!0);if(Sf(),xt=n,bc.current=i,nn!==null)throw Error(ve(261));return fn=null,_n=0,an}function c1(){for(;nn!==null;)Wv(nn)}function u1(){for(;nn!==null&&!Ux();)Wv(nn)}function Wv(t){var e=Yv(t.alternate,t,$n);t.memoizedProps=t.pendingProps,e===null?Xv(t):nn=e,Uf.current=null}function Xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=i1(n,e),n!==null){n.flags&=32767,nn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{an=6,nn=null;return}}else if(n=n1(n,e,$n),n!==null){nn=n;return}if(e=e.sibling,e!==null){nn=e;return}nn=e=t}while(e!==null);an===0&&(an=5)}function es(t,e,n){var i=Pt,r=di.transition;try{di.transition=null,Pt=1,h1(t,e,n,i)}finally{di.transition=r,Pt=i}return null}function h1(t,e,n,i){do fo();while(br!==null);if(xt&6)throw Error(ve(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ve(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xx(t,s),t===fn&&(nn=fn=null,_n=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,qv(dc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=di.transition,di.transition=null;var o=Pt;Pt=1;var a=xt;xt|=4,Uf.current=null,s1(t,n),zv(n,t),Ly(kh),pc=!!Oh,kh=Oh=null,t.current=n,o1(n),Fx(),xt=a,Pt=o,di.transition=s}else t.current=n;if(fl&&(fl=!1,br=t,Pc=r),s=t.pendingLanes,s===0&&(Nr=null),zx(n.stateNode),Xn(t,Jt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rc)throw Rc=!1,t=rd,rd=null,t;return Pc&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===sd?va++:(va=0,sd=t):va=0,Xr(),null}function fo(){if(br!==null){var t=Tg(Pc),e=di.transition,n=Pt;try{if(di.transition=null,Pt=16>t?16:t,br===null)var i=!1;else{if(t=br,br=null,Pc=0,xt&6)throw Error(ve(331));var r=xt;for(xt|=4,Be=t.current;Be!==null;){var s=Be,o=s.child;if(Be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Be=c;Be!==null;){var h=Be;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var f=h.child;if(f!==null)f.return=h,Be=f;else for(;Be!==null;){h=Be;var d=h.sibling,p=h.return;if(Fv(h),h===c){Be=null;break}if(d!==null){d.return=p,Be=d;break}Be=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Be=o;else e:for(;Be!==null;){if(s=Be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Be=u;break e}Be=s.return}}var m=t.current;for(Be=m;Be!==null;){o=Be;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Be=v;else e:for(o=m;Be!==null;){if(a=Be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qc(9,a)}}catch(P){Yt(a,a.return,P)}if(a===o){Be=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Be=x;break e}Be=a.return}}if(xt=r,Xr(),zi&&typeof zi.onPostCommitFiberRoot=="function")try{zi.onPostCommitFiberRoot(Bc,t)}catch{}i=!0}return i}finally{Pt=n,di.transition=e}}return!1}function gm(t,e,n){e=Eo(n,e),e=Tv(t,e,1),t=Ir(t,e,1),e=Nn(),t!==null&&(ja(t,1,e),Xn(t,e))}function Yt(t,e,n){if(t.tag===3)gm(t,t,n);else for(;e!==null;){if(e.tag===3){gm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Nr===null||!Nr.has(i))){t=Eo(n,t),t=Av(e,t,1),e=Ir(e,t,1),t=Nn(),e!==null&&(ja(e,1,t),Xn(e,t));break}}e=e.return}}function d1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Nn(),t.pingedLanes|=t.suspendedLanes&n,fn===t&&(_n&n)===n&&(an===4||an===3&&(_n&130023424)===_n&&500>Jt()-Of?cs(t,0):Ff|=n),Xn(t,e)}function jv(t,e){e===0&&(t.mode&1?(e=il,il<<=1,!(il&130023424)&&(il=4194304)):e=1);var n=Nn();t=cr(t,e),t!==null&&(ja(t,e,n),Xn(t,n))}function f1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jv(t,n)}function p1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ve(314))}i!==null&&i.delete(e),jv(t,n)}var Yv;Yv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gn.current)Vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vn=!1,t1(t,e,n);Vn=!!(t.flags&131072)}else Vn=!1,Ht&&e.flags&1048576&&Kg(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ql(t,e),t=e.pendingProps;var r=yo(e,Rn.current);ho(e,n),r=Pf(null,e,i,t,r,n);var s=Lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wn(i)?(s=!0,xc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tf(e),r.updater=Yc,e.stateNode=r,r._reactInternals=e,Yh(e,i,t,n),e=Zh(null,e,i,!0,s,n)):(e.tag=0,Ht&&s&&_f(e),Dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ql(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=g1(i),t=Mi(i,t),r){case 0:e=$h(null,e,i,t,n);break e;case 1:e=om(null,e,i,t,n);break e;case 11:e=rm(null,e,i,t,n);break e;case 14:e=sm(null,e,i,Mi(i.type,t),n);break e}throw Error(ve(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),$h(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),om(t,e,i,r,n);case 3:e:{if(Pv(e),t===null)throw Error(ve(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iv(t,e),Ec(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Eo(Error(ve(423)),e),e=am(t,e,i,n,r);break e}else if(i!==r){r=Eo(Error(ve(424)),e),e=am(t,e,i,n,r);break e}else for(Kn=Dr(e.stateNode.containerInfo.firstChild),Qn=e,Ht=!0,wi=null,n=tv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),i===r){e=ur(t,e,n);break e}Dn(t,e,i,n)}e=e.child}return e;case 5:return rv(e),t===null&&Wh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,zh(i,r)?o=null:s!==null&&zh(i,s)&&(e.flags|=32),Rv(t,e),Dn(t,e,o,n),e.child;case 6:return t===null&&Wh(e),null;case 13:return Lv(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=So(e,null,i,n):Dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),rm(t,e,i,r,n);case 7:return Dn(t,e,e.pendingProps,n),e.child;case 8:return Dn(t,e,e.pendingProps.children,n),e.child;case 12:return Dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ft(Sc,i._currentValue),i._currentValue=o,s!==null)if(bi(s.value,o)){if(s.children===r.children&&!Gn.current){e=ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=rr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ve(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,n),r=fi(r),i=i(r),e.flags|=1,Dn(t,e,i,n),e.child;case 14:return i=e.type,r=Mi(i,e.pendingProps),r=Mi(i.type,r),sm(t,e,i,r,n);case 15:return Cv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mi(i,r),Ql(t,e),e.tag=1,Wn(i)?(t=!0,xc(e)):t=!1,ho(e,n),Ev(e,i,r),Yh(e,i,r,n),Zh(null,e,i,!0,t,n);case 19:return Dv(t,e,n);case 22:return bv(t,e,n)}throw Error(ve(156,e.tag))};function qv(t,e){return Mg(t,e)}function m1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,e,n,i){return new m1(t,e,n,i)}function Hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function g1(t){if(typeof t=="function")return Hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=hi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ys:return us(n.children,r,s,e);case sf:o=8,r|=8;break;case vh:return t=hi(12,n,e,r|2),t.elementType=vh,t.lanes=s,t;case _h:return t=hi(13,n,e,r),t.elementType=_h,t.lanes=s,t;case xh:return t=hi(19,n,e,r),t.elementType=xh,t.lanes=s,t;case rg:return Zc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ng:o=10;break e;case ig:o=9;break e;case of:o=11;break e;case af:o=14;break e;case Mr:o=16,i=null;break e}throw Error(ve(130,t==null?t:typeof t,""))}return e=hi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function us(t,e,n,i){return t=hi(7,t,i,e),t.lanes=n,t}function Zc(t,e,n,i){return t=hi(22,t,i,e),t.elementType=rg,t.lanes=n,t.stateNode={isHidden:!1},t}function Du(t,e,n){return t=hi(6,t,null,e),t.lanes=n,t}function Iu(t,e,n){return e=hi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function v1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fu(0),this.expirationTimes=fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,i,r,s,o,a,l){return t=new v1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(s),t}function _1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $v(t){if(!t)return Hr;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(ve(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ve(171))}if(t.tag===1){var n=t.type;if(Wn(n))return $g(t,n,e)}return e}function Zv(t,e,n,i,r,s,o,a,l){return t=Vf(n,i,!0,t,r,s,o,a,l),t.context=$v(null),n=t.current,i=Nn(),r=Ur(n),s=rr(i,r),s.callback=e??null,Ir(n,s,r),t.current.lanes=r,ja(t,r,i),Xn(t,i),t}function Kc(t,e,n,i){var r=e.current,s=Nn(),o=Ur(r);return n=$v(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ir(r,e,o),t!==null&&(Ci(t,r,o,s),Zl(t,r,o)),o}function Dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gf(t,e){vm(t,e),(t=t.alternate)&&vm(t,e)}function x1(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wf(t){this._internalRoot=t}Jc.prototype.render=Wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ve(409));Kc(t,e,null,null)};Jc.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){Kc(null,t,null,null)}),e[lr]=null}};function Jc(t){this._internalRoot=t}Jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Er.length&&e!==0&&e<Er[n].priority;n++);Er.splice(n,0,t),n===0&&Pg(t)}};function Xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _m(){}function y1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Dc(o);s.call(c)}}var o=Zv(e,i,t,0,null,!1,!1,"",_m);return t._reactRootContainer=o,t[lr]=o.current,La(t.nodeType===8?t.parentNode:t),gs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Dc(l);a.call(c)}}var l=Vf(t,0,!1,null,null,!1,!1,"",_m);return t._reactRootContainer=l,t[lr]=l.current,La(t.nodeType===8?t.parentNode:t),gs(function(){Kc(e,l,n,i)}),l}function eu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Dc(o);a.call(l)}}Kc(e,o,t,r)}else o=y1(n,e,t,r,i);return Dc(o)}Ag=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(uf(e,n|1),Xn(e,Jt()),!(xt&6)&&(To=Jt()+500,Xr()))}break;case 13:gs(function(){var i=cr(t,1);if(i!==null){var r=Nn();Ci(i,t,1,r)}}),Gf(t,1)}};hf=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=Nn();Ci(e,t,134217728,n)}Gf(t,134217728)}};Cg=function(t){if(t.tag===13){var e=Ur(t),n=cr(t,e);if(n!==null){var i=Nn();Ci(n,t,e,i)}Gf(t,e)}};bg=function(){return Pt};Rg=function(t,e){var n=Pt;try{return Pt=t,e()}finally{Pt=n}};Rh=function(t,e,n){switch(e){case"input":if(Sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wc(i);if(!r)throw Error(ve(90));og(i),Sh(i,r)}}}break;case"textarea":lg(t,n);break;case"select":e=n.value,e!=null&&ao(t,!!n.multiple,e,!1)}};mg=kf;gg=gs;var M1={usingClientEntryPoint:!1,Events:[qa,Ks,Wc,fg,pg,kf]},qo={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S1={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xg(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||x1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Bc=pl.inject(S1),zi=pl}catch{}}ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M1;ni.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(e))throw Error(ve(200));return _1(t,e,null,n)};ni.createRoot=function(t,e){if(!Xf(t))throw Error(ve(299));var n=!1,i="",r=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,i,r),t[lr]=e.current,La(t.nodeType===8?t.parentNode:t),new Wf(e)};ni.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ve(188)):(t=Object.keys(t).join(","),Error(ve(268,t)));return t=xg(e),t=t===null?null:t.stateNode,t};ni.flushSync=function(t){return gs(t)};ni.hydrate=function(t,e,n){if(!Qc(e))throw Error(ve(200));return eu(null,t,e,!0,n)};ni.hydrateRoot=function(t,e,n){if(!Xf(t))throw Error(ve(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zv(e,null,t,1,n??null,r,!1,s,o),t[lr]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Jc(e)};ni.render=function(t,e,n){if(!Qc(e))throw Error(ve(200));return eu(null,t,e,!1,n)};ni.unmountComponentAtNode=function(t){if(!Qc(t))throw Error(ve(40));return t._reactRootContainer?(gs(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};ni.unstable_batchedUpdates=kf;ni.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Qc(n))throw Error(ve(200));if(t==null||t._reactInternals===void 0)throw Error(ve(38));return eu(t,e,n,!1,i)};ni.version="18.3.1-next-f1338f8080-20240426";function Jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jv)}catch(t){console.error(t)}}Jv(),J0.exports=ni;var w1=J0.exports,xm=w1;mh.createRoot=xm.createRoot,mh.hydrateRoot=xm.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qv=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Et.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Et.createElement("svg",{ref:l,...T1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Qv("lucide",r),...a},[...o.map(([c,h])=>Et.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=(t,e)=>{const n=Et.forwardRef(({className:i,...r},s)=>Et.createElement(A1,{ref:s,iconNode:e,className:Qv(`lucide-${E1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=gi("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=gi("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=gi("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=gi("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=gi("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=gi("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=gi("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=gi("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=gi("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=gi("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=gi("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=gi("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="170",po={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},z1=0,ym=1,B1=2,e_=1,t_=2,Zi=3,Vr=0,Cn=1,In=2,Or=0,mo=1,Ic=2,Mm=3,Sm=4,H1=5,ns=100,V1=101,G1=102,W1=103,X1=104,j1=200,Y1=201,q1=202,$1=203,ld=204,cd=205,Z1=206,K1=207,J1=208,Q1=209,eM=210,tM=211,nM=212,iM=213,rM=214,ud=0,hd=1,dd=2,Ao=3,fd=4,pd=5,md=6,gd=7,n_=0,sM=1,oM=2,kr=0,aM=1,lM=2,cM=3,i_=4,uM=5,hM=6,dM=7,r_=300,Co=301,bo=302,vd=303,_d=304,tu=306,vn=1e3,nr=1001,xd=1002,ei=1003,fM=1004,ml=1005,Fi=1006,Nu=1007,ls=1008,hr=1009,s_=1010,o_=1011,Ba=1012,Yf=1013,vs=1014,Oi=1015,Za=1016,qf=1017,$f=1018,Ro=1020,a_=35902,l_=1021,c_=1022,Ti=1023,u_=1024,h_=1025,go=1026,Po=1027,Zf=1028,Kf=1029,d_=1030,Jf=1031,Qf=1033,ic=33776,rc=33777,sc=33778,oc=33779,yd=35840,Md=35841,Sd=35842,wd=35843,Ed=36196,Td=37492,Ad=37496,Cd=37808,bd=37809,Rd=37810,Pd=37811,Ld=37812,Dd=37813,Id=37814,Nd=37815,Ud=37816,Fd=37817,Od=37818,kd=37819,zd=37820,Bd=37821,ac=36492,Hd=36494,Vd=36495,f_=36283,Gd=36284,Wd=36285,Xd=36286,pM=3200,mM=3201,p_=0,gM=1,Ar="",gn="srgb",Fo="srgb-linear",nu="linear",It="srgb",bs=7680,wm=519,vM=512,_M=513,xM=514,m_=515,yM=516,MM=517,SM=518,wM=519,Em=35044,Tm="300 es",ir=2e3,Nc=2001;class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Am=1234567;const _a=Math.PI/180,Lo=180/Math.PI;function Es(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[t&255]+wn[t>>8&255]+wn[t>>16&255]+wn[t>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function ep(t,e){return(t%e+e)%e}function EM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function TM(t,e,n){return t!==e?(n-t)/(e-t):0}function xa(t,e,n){return(1-n)*t+n*e}function AM(t,e,n,i){return xa(t,e,1-Math.exp(-n*i))}function CM(t,e=1){return e-Math.abs(ep(t,e*2)-e)}function bM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function RM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function PM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function LM(t,e){return t+Math.random()*(e-t)}function DM(t){return t*(.5-Math.random())}function IM(t){t!==void 0&&(Am=t);let e=Am+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function NM(t){return t*_a}function UM(t){return t*Lo}function FM(t){return(t&t-1)===0&&t!==0}function OM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function kM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:_a,RAD2DEG:Lo,generateUUID:Es,clamp:tn,euclideanModulo:ep,mapLinear:EM,inverseLerp:TM,lerp:xa,damp:AM,pingpong:CM,smoothstep:bM,smootherstep:RM,randInt:PM,randFloat:LM,randFloatSpread:DM,seededRandom:IM,degToRad:NM,radToDeg:UM,isPowerOfTwo:FM,ceilPowerOfTwo:OM,floorPowerOfTwo:kM,setQuaternionFromProperEuler:zM,normalize:Pn,denormalize:Xs};class de{constructor(e=0,n=0){de.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,n,i,r,s,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],g=r[3],u=r[6],m=r[1],v=r[4],x=r[7],P=r[2],b=r[5],w=r[8];return s[0]=o*y+a*m+l*P,s[3]=o*g+a*v+l*b,s[6]=o*u+a*x+l*w,s[1]=c*y+h*m+f*P,s[4]=c*g+h*v+f*b,s[7]=c*u+h*x+f*w,s[2]=d*y+p*m+_*P,s[5]=d*g+p*v+_*b,s[8]=d*u+p*x+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Uu.makeScale(e,n)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new lt;function g_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function BM(){const t=Uc("canvas");return t.style.display="block",t}const Cm={};function oa(t){t in Cm||(Cm[t]=!0,console.warn(t))}function HM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function VM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function GM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:Fo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===It&&(t.r=sr(t.r),t.g=sr(t.g),t.b=sr(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===It&&(t.r=vo(t.r),t.g=vo(t.g),t.b=vo(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ar?nu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function sr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const bm=[.64,.33,.3,.6,.15,.06],Rm=[.2126,.7152,.0722],Pm=[.3127,.329],Lm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[Fo]:{primaries:bm,whitePoint:Pm,transfer:nu,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:Rm,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:bm,whitePoint:Pm,transfer:It,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:Rm,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let Rs;class WM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rs===void 0&&(Rs=Uc("canvas")),Rs.width=e.width,Rs.height=e.height;const i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(sr(n[i]/255)*255):n[i]=sr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XM=0;class v_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fu(r[o].image)):s.push(Fu(r[o]))}else s=Fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?WM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jM=0;class bn extends ws{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,i=nr,r=nr,s=Fi,o=ls,a=Ti,l=hr,c=bn.DEFAULT_ANISOTROPY,h=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Es(),this.name="",this.source=new v_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=r_;bn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(p+1)/2,P=(u+1)/2,b=(h+d)/4,w=(f+y)/4,R=(_+g)/4;return v>x&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=w/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=R/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-y)/m,this.z=(d-h)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YM extends ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new bn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new v_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends YM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class __ extends bn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qM extends bn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||c!==p||h!==_){let g=1-a;const u=l*d+c*p+h*_+f*y,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),b=Math.atan2(P,u*m);g=Math.sin(g*b)/P,a=Math.sin(a*b)/P}const x=a*m;if(l=l*g+d*x,c=c*g+p*x,h=h*g+_*x,f=f*g+y*x,g===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+h*f+l*p-c*d,e[n+1]=l*_+h*d+c*f-a*p,e[n+2]=c*_+h*p+a*d-l*f,e[n+3]=h*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"YZX":this._x=d*h*f+c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f-d*p*_;break;case"XZY":this._x=d*h*f-c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,n=0,i=0){A.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new A,Im=new xs;class Ts{constructor(e=new A(1/0,1/0,1/0),n=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(_i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(_i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),vl.subVectors(this.max,$o),Ps.subVectors(e.a,$o),Ls.subVectors(e.b,$o),Ds.subVectors(e.c,$o),mr.subVectors(Ls,Ps),gr.subVectors(Ds,Ls),jr.subVectors(Ps,Ds);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-jr.z,jr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,jr.z,0,-jr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-jr.y,jr.x,0];return!ku(n,Ps,Ls,Ds,vl)||(n=[1,0,0,0,1,0,0,0,1],!ku(n,Ps,Ls,Ds,vl))?!1:(_l.crossVectors(mr,gr),n=[_l.x,_l.y,_l.z],ku(n,Ps,Ls,Ds,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new A,new A,new A,new A,new A,new A,new A,new A],_i=new A,gl=new Ts,Ps=new A,Ls=new A,Ds=new A,mr=new A,gr=new A,jr=new A,$o=new A,vl=new A,_l=new A,Yr=new A;function ku(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Yr.fromArray(t,s);const a=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),c=n.dot(Yr),h=i.dot(Yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $M=new Ts,Zo=new A,zu=new A;class Oo{constructor(e=new A,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$M.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(zu)),this.expandByPoint(Zo.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new A,Bu=new A,xl=new A,vr=new A,Hu=new A,yl=new A,Vu=new A;class tp{constructor(e=new A,n=new A(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bu.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Bu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xl),a=vr.dot(this.direction),l=-vr.dot(xl),c=vr.lengthSq(),h=Math.abs(1-o*o);let f,d,p,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const y=1/h;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bu).addScaledVector(xl,d),p}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),r=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,i,r,s){Hu.subVectors(n,e),yl.subVectors(i,e),Vu.crossVectors(Hu,yl);let o=this.direction.dot(Vu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vr.subVectors(this.origin,e);const l=a*this.direction.dot(yl.crossVectors(vr,yl));if(l<0)return null;const c=a*this.direction.dot(Hu.cross(vr));if(c<0||l+c>o)return null;const h=-a*vr.dot(Vu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,o,a,l,c,h,f,d,p,_,y,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,p,_,y,g)}set(e,n,i,r,s,o,a,l,c,h,f,d,p,_,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=_,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,_=a*h,y=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,_=c*h,y=c*f;n[0]=d+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,_=c*h,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*h,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,_=a*h,y=a*f;n[0]=l*h,n[4]=_*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+y,n[5]=o*h,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*h,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZM,e,KM)}lookAt(e,n,i){const r=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),_r.crossVectors(i,Yn),_r.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),_r.crossVectors(i,Yn)),_r.normalize(),Ml.crossVectors(Yn,_r),r[0]=_r.x,r[4]=Ml.x,r[8]=Yn.x,r[1]=_r.y,r[5]=Ml.y,r[9]=Yn.y,r[2]=_r.z,r[6]=Ml.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],g=i[10],u=i[14],m=i[3],v=i[7],x=i[11],P=i[15],b=r[0],w=r[4],R=r[8],E=r[12],S=r[1],D=r[5],B=r[9],k=r[13],X=r[2],q=r[6],G=r[10],te=r[14],N=r[3],Z=r[7],J=r[11],pe=r[15];return s[0]=o*b+a*S+l*X+c*N,s[4]=o*w+a*D+l*q+c*Z,s[8]=o*R+a*B+l*G+c*J,s[12]=o*E+a*k+l*te+c*pe,s[1]=h*b+f*S+d*X+p*N,s[5]=h*w+f*D+d*q+p*Z,s[9]=h*R+f*B+d*G+p*J,s[13]=h*E+f*k+d*te+p*pe,s[2]=_*b+y*S+g*X+u*N,s[6]=_*w+y*D+g*q+u*Z,s[10]=_*R+y*B+g*G+u*J,s[14]=_*E+y*k+g*te+u*pe,s[3]=m*b+v*S+x*X+P*N,s[7]=m*w+v*D+x*q+P*Z,s[11]=m*R+v*B+x*G+P*J,s[15]=m*E+v*k+x*te+P*pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],g=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],g=e[14],u=e[15],m=f*g*c-y*d*c+y*l*p-a*g*p-f*l*u+a*d*u,v=_*d*c-h*g*c-_*l*p+o*g*p+h*l*u-o*d*u,x=h*y*c-_*f*c+_*a*p-o*y*p-h*a*u+o*f*u,P=_*f*l-h*y*l-_*a*d+o*y*d+h*a*g-o*f*g,b=n*m+i*v+r*x+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=m*w,e[1]=(y*d*s-f*g*s-y*r*p+i*g*p+f*r*u-i*d*u)*w,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*u+i*l*u)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=v*w,e[5]=(h*g*s-_*d*s+_*r*p-n*g*p-h*r*u+n*d*u)*w,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*u-n*l*u)*w,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(_*f*s-h*y*s-_*i*p+n*y*p+h*i*u-n*f*u)*w,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*w,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=P*w,e[13]=(h*y*r-_*f*r+_*i*d-n*y*d-h*i*g+n*f*g)*w,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*w,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,_=s*f,y=o*h,g=o*f,u=a*f,m=l*c,v=l*h,x=l*f,P=i.x,b=i.y,w=i.z;return r[0]=(1-(y+u))*P,r[1]=(p+x)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(p-x)*b,r[5]=(1-(d+u))*b,r[6]=(g+m)*b,r[7]=0,r[8]=(_+v)*w,r[9]=(g-m)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Is.set(r[0],r[1],r[2]).length();const o=Is.set(r[4],r[5],r[6]).length(),a=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xi.copy(this);const c=1/s,h=1/o,f=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=f,xi.elements[9]*=f,xi.elements[10]*=f,n.setFromRotationMatrix(xi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ir){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===ir)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Nc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ir){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*h;let _,y;if(a===ir)_=(o+s)*f,y=-2*f;else if(a===Nc)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Is=new A,xi=new Lt,ZM=new A(0,0,0),KM=new A(1,1,1),_r=new A,Ml=new A,Yn=new A,Nm=new Lt,Um=new xs;class Vi{constructor(e=0,n=0,i=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class x_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JM=0;const Fm=new A,Ns=new xs,ji=new Lt,Sl=new A,Ko=new A,QM=new A,eS=new xs,Om=new A(1,0,0),km=new A(0,1,0),zm=new A(0,0,1),Bm={type:"added"},tS={type:"removed"},Us={type:"childadded",child:null},Gu={type:"childremoved",child:null};class zt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new A,n=new Vi,i=new xs,r=new A(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new lt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,n){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sl.copy(e):Sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Ko,Sl,this.up):ji.lookAt(Sl,Ko,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),Ns.setFromRotationMatrix(ji),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tS),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,QM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,eS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new A(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new A,Yi=new A,Wu=new A,qi=new A,Fs=new A,Os=new A,Hm=new A,Xu=new A,ju=new A,Yu=new A,qu=new qt,$u=new qt,Zu=new qt;class Ei{constructor(e=new A,n=new A,i=new A){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yi.subVectors(e,n),r.cross(yi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yi.subVectors(r,n),Yi.subVectors(i,n),Wu.subVectors(e,n);const o=yi.dot(yi),a=yi.dot(Yi),l=yi.dot(Wu),c=Yi.dot(Yi),h=Yi.dot(Wu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return qu.setScalar(0),$u.setScalar(0),Zu.setScalar(0),qu.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,i),Zu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qu,s.x),o.addScaledVector($u,s.y),o.addScaledVector(Zu,s.z),o}static isFrontFacing(e,n,i,r){return yi.subVectors(i,n),Yi.subVectors(e,n),yi.cross(Yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),yi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Fs.subVectors(r,i),Os.subVectors(s,i),Xu.subVectors(e,i);const l=Fs.dot(Xu),c=Os.dot(Xu);if(l<=0&&c<=0)return n.copy(i);ju.subVectors(e,r);const h=Fs.dot(ju),f=Os.dot(ju);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Fs,o);Yu.subVectors(e,s);const p=Fs.dot(Yu),_=Os.dot(Yu);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Os,a);const g=h*_-p*f;if(g<=0&&f-h>=0&&p-_>=0)return Hm.subVectors(s,r),a=(f-h)/(f-h+(p-_)),n.copy(r).addScaledVector(Hm,a);const u=1/(g+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ee{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=_t.workingColorSpace){return this.r=e,this.g=n,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=_t.workingColorSpace){if(e=ep(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ku(o,s,e+1/3),this.g=Ku(o,s,e),this.b=Ku(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,n=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){const i=y_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return _t.fromWorkingColorSpace(En.copy(this),e),Math.round(tn(En.r*255,0,255))*65536+Math.round(tn(En.g*255,0,255))*256+Math.round(tn(En.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.fromWorkingColorSpace(En.copy(this),n);const i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=_t.workingColorSpace){return _t.fromWorkingColorSpace(En.copy(this),n),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=gn){_t.fromWorkingColorSpace(En.copy(this),e);const n=En.r,i=En.g,r=En.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(wl);const i=xa(xr.h,wl.h,n),r=xa(xr.s,wl.s,n),s=xa(xr.l,wl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ee;ee.NAMES=y_;let nS=0;class ko extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Es(),this.name="",this.blending=mo,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==cd&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hi extends ko{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=n_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new A,El=new de;class jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Em,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix3(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),r=Pn(r,this.array),s=Pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Em&&(e.usage=this.usage),e}}class M_ extends jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S_ extends jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ct extends jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iS=0;const ai=new Lt,Ju=new zt,ks=new A,qn=new Ts,Jo=new Ts,un=new A;class rn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?S_:M_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,n,i){return ai.makeTranslation(e,n,i),this.applyMatrix4(ai),this}scale(e,n,i){return ai.makeScale(e,n,i),this.applyMatrix4(ai),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(qn.min,Jo.min),qn.expandByPoint(un),un.addVectors(qn.max,Jo.max),qn.expandByPoint(un)):(qn.expandByPoint(Jo.min),qn.expandByPoint(Jo.max))}qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),un.add(ks)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new A,l[R]=new A;const c=new A,h=new A,f=new A,d=new de,p=new de,_=new de,y=new A,g=new A;function u(R,E,S){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),h.sub(c),f.sub(c),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(D),a[R].add(y),a[E].add(y),a[S].add(y),l[R].add(g),l[E].add(g),l[S].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let R=0,E=m.length;R<E;++R){const S=m[R],D=S.start,B=S.count;for(let k=D,X=D+B;k<X;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new A,x=new A,P=new A,b=new A;function w(R){P.fromBufferAttribute(r,R),b.copy(P);const E=a[R];v.copy(E),v.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(b,E);const D=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,D)}for(let R=0,E=m.length;R<E;++R){const S=m[R],D=S.start,B=S.count;for(let k=D,X=D+B;k<X;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A,f=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let u=0;u<h;u++)d[_++]=c[p++]}return new jn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vm=new Lt,qr=new tp,Tl=new Oo,Gm=new A,Al=new A,Cl=new A,bl=new A,Qu=new A,Rl=new A,Wm=new A,Pl=new A;class re extends zt{constructor(e=new rn,n=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Qu.fromBufferAttribute(f,e),o?Rl.addScaledVector(Qu,h):Rl.addScaledVector(Qu.sub(n),h))}n.add(Rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Tl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Tl,Gm)===null||qr.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Vm.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Vm),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const g=d[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,P=v;x<P;x+=3){const b=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);r=Ll(this,u,e,i,c,h,f,b,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,u=y;g<u;g+=3){const m=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);r=Ll(this,o,e,i,c,h,f,m,v,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const g=d[_],u=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,P=v;x<P;x+=3){const b=x,w=x+1,R=x+2;r=Ll(this,u,e,i,c,h,f,b,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,u=y;g<u;g+=3){const m=g,v=g+1,x=g+2;r=Ll(this,o,e,i,c,h,f,m,v,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function rS(t,e,n,i,r,s,o,a){let l;if(e.side===Cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vr,a),l===null)return null;Pl.copy(a),Pl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Pl);return c<n.near||c>n.far?null:{distance:c,point:Pl.clone(),object:t}}function Ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Al),t.getVertexPosition(l,Cl),t.getVertexPosition(c,bl);const h=rS(t,e,n,i,Al,Cl,bl,Wm);if(h){const f=new A;Ei.getBarycoord(Wm,Al,Cl,bl,f),r&&(h.uv=Ei.getInterpolatedAttribute(r,a,l,c,f,new de)),s&&(h.uv1=Ei.getInterpolatedAttribute(s,a,l,c,f,new de)),o&&(h.normal=Ei.getInterpolatedAttribute(o,a,l,c,f,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};Ei.getNormal(Al,Cl,bl,d.normal),h.face=d,h.barycoord=f}return h}class Jn extends rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function _(y,g,u,m,v,x,P,b,w,R,E){const S=x/w,D=P/R,B=x/2,k=P/2,X=b/2,q=w+1,G=R+1;let te=0,N=0;const Z=new A;for(let J=0;J<G;J++){const pe=J*D-k;for(let ye=0;ye<q;ye++){const et=ye*S-B;Z[y]=et*m,Z[g]=pe*v,Z[u]=X,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[g]=0,Z[u]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(ye/w),f.push(1-J/R),te+=1}}for(let J=0;J<R;J++)for(let pe=0;pe<w;pe++){const ye=d+pe+q*J,et=d+pe+q*(J+1),j=d+(pe+1)+q*(J+1),ae=d+(pe+1)+q*J;l.push(ye,et,ae),l.push(et,j,ae),N+=6}a.addGroup(p,N,E),p+=N,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ln(t){const e={};for(let n=0;n<t.length;n++){const i=Do(t[n]);for(const r in i)e[r]=i[r]}return e}function sS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function w_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const oS={clone:Do,merge:Ln};var aS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends ko{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aS,this.fragmentShader=lS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=sS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class E_ extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ir}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new A,Xm=new de,jm=new de;class Zn extends E_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,Xm,jm),n.subVectors(jm,Xm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,Bs=1;class cS extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(zs,Bs,e,n);r.layers=this.layers,this.add(r);const s=new Zn(zs,Bs,e,n);s.layers=this.layers,this.add(s);const o=new Zn(zs,Bs,e,n);o.layers=this.layers,this.add(o);const a=new Zn(zs,Bs,e,n);a.layers=this.layers,this.add(a);const l=new Zn(zs,Bs,e,n);l.layers=this.layers,this.add(l);const c=new Zn(zs,Bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ir)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class T_ extends bn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Co,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uS extends _s{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new T_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jn(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Or});s.uniforms.tEquirect.value=n;const o=new re(r,s),a=n.minFilter;return n.minFilter===ls&&(n.minFilter=Fi),new cS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const eh=new A,hS=new A,dS=new lt;class wr{constructor(e=new A(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=eh.subVectors(i,n).cross(hS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(eh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dS.getNormalMatrix(e),r=this.coplanarPoint(eh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Oo,Dl=new A;class np{constructor(e=new wr,n=new wr,i=new wr,r=new wr,s=new wr,o=new wr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ir){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],g=r[11],u=r[12],m=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,g-p,x-u).normalize(),i[1].setComponents(l+s,d+c,g+p,x+u).normalize(),i[2].setComponents(l+o,d+h,g+_,x+m).normalize(),i[3].setComponents(l-o,d-h,g-_,x-m).normalize(),i[4].setComponents(l-a,d-f,g-y,x-v).normalize(),n===ir)i[5].setComponents(l+a,d+f,g+y,x+v).normalize();else if(n===Nc)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Dl.x=r.normal.x>0?e.max.x:e.min.x,Dl.y=r.normal.y>0?e.max.y:e.min.y,Dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function fS(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class or extends rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,p=[],_=[],y=[],g=[];for(let u=0;u<h;u++){const m=u*d-o;for(let v=0;v<c;v++){const x=v*f-s;_.push(x,-m,0),y.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,x=m+c*(u+1),P=m+1+c*(u+1),b=m+1+c*u;p.push(v,x,b),p.push(x,P,b)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
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
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
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
#endif`,MS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SS=`#ifdef USE_BATCHING
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
#endif`,wS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CS=`#ifdef USE_IRIDESCENCE
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
#endif`,bS=`#ifdef USE_BUMPMAP
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,OS=`#define PI 3.141592653589793
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
} // validated`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zS=`vec3 transformedNormal = objectNormal;
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
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jS=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ew=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tw=`#ifdef USE_GRADIENTMAP
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
}`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sw=`uniform bool receiveShadow;
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
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hw=`PhysicalMaterial material;
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
#endif`,dw=`struct PhysicalMaterial {
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
}`,fw=`
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
#endif`,pw=`#if defined( RE_IndirectDiffuse )
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
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ww=`#if defined( USE_POINTS_UV )
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
#endif`,Ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Aw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rw=`#ifdef USE_MORPHTARGETS
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
#endif`,Pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fw=`#ifdef USE_NORMALMAP
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
#endif`,Ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jw=`float getShadowMask() {
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
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
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
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#ifdef USE_TRANSMISSION
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
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
}`,yE=`#if DEPTH_PACKING == 3200
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
}`,ME=`#define DISTANCE
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
}`,SE=`#define DISTANCE
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
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
}`,AE=`uniform vec3 diffuse;
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
}`,CE=`#include <common>
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
}`,bE=`uniform vec3 diffuse;
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
}`,RE=`#define LAMBERT
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
}`,PE=`#define LAMBERT
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
}`,LE=`#define MATCAP
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
}`,DE=`#define MATCAP
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
}`,IE=`#define NORMAL
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
}`,NE=`#define NORMAL
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
}`,UE=`#define PHONG
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
}`,FE=`#define PHONG
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
}`,OE=`#define STANDARD
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
}`,kE=`#define STANDARD
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
}`,zE=`#define TOON
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
}`,BE=`#define TOON
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
}`,HE=`uniform float size;
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
}`,VE=`uniform vec3 diffuse;
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
}`,GE=`#include <common>
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
}`,WE=`uniform vec3 color;
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
}`,XE=`uniform float rotation;
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
}`,jE=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:vS,alphatest_fragment:_S,alphatest_pars_fragment:xS,aomap_fragment:yS,aomap_pars_fragment:MS,batching_pars_vertex:SS,batching_vertex:wS,begin_vertex:ES,beginnormal_vertex:TS,bsdfs:AS,iridescence_fragment:CS,bumpmap_pars_fragment:bS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:LS,clipping_planes_vertex:DS,color_fragment:IS,color_pars_fragment:NS,color_pars_vertex:US,color_vertex:FS,common:OS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:zS,displacementmap_pars_vertex:BS,displacementmap_vertex:HS,emissivemap_fragment:VS,emissivemap_pars_fragment:GS,colorspace_fragment:WS,colorspace_pars_fragment:XS,envmap_fragment:jS,envmap_common_pars_fragment:YS,envmap_pars_fragment:qS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:ow,envmap_vertex:ZS,fog_vertex:KS,fog_pars_vertex:JS,fog_fragment:QS,fog_pars_fragment:ew,gradientmap_pars_fragment:tw,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:rw,lights_pars_begin:sw,lights_toon_fragment:aw,lights_toon_pars_fragment:lw,lights_phong_fragment:cw,lights_phong_pars_fragment:uw,lights_physical_fragment:hw,lights_physical_pars_fragment:dw,lights_fragment_begin:fw,lights_fragment_maps:pw,lights_fragment_end:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:vw,logdepthbuf_pars_vertex:_w,logdepthbuf_vertex:xw,map_fragment:yw,map_pars_fragment:Mw,map_particle_fragment:Sw,map_particle_pars_fragment:ww,metalnessmap_fragment:Ew,metalnessmap_pars_fragment:Tw,morphinstance_vertex:Aw,morphcolor_vertex:Cw,morphnormal_vertex:bw,morphtarget_pars_vertex:Rw,morphtarget_vertex:Pw,normal_fragment_begin:Lw,normal_fragment_maps:Dw,normal_pars_fragment:Iw,normal_pars_vertex:Nw,normal_vertex:Uw,normalmap_pars_fragment:Fw,clearcoat_normal_fragment_begin:Ow,clearcoat_normal_fragment_maps:kw,clearcoat_pars_fragment:zw,iridescence_pars_fragment:Bw,opaque_fragment:Hw,packing:Vw,premultiplied_alpha_fragment:Gw,project_vertex:Ww,dithering_fragment:Xw,dithering_pars_fragment:jw,roughnessmap_fragment:Yw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:$w,shadowmap_pars_vertex:Zw,shadowmap_vertex:Kw,shadowmask_pars_fragment:Jw,skinbase_vertex:Qw,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:rE,tonemapping_fragment:sE,tonemapping_pars_fragment:oE,transmission_fragment:aE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:hE,worldpos_vertex:dE,background_vert:fE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:vE,cube_frag:_E,depth_vert:xE,depth_frag:yE,distanceRGBA_vert:ME,distanceRGBA_frag:SE,equirect_vert:wE,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:CE,meshbasic_frag:bE,meshlambert_vert:RE,meshlambert_frag:PE,meshmatcap_vert:LE,meshmatcap_frag:DE,meshnormal_vert:IE,meshnormal_frag:NE,meshphong_vert:UE,meshphong_frag:FE,meshphysical_vert:OE,meshphysical_frag:kE,meshtoon_vert:zE,meshtoon_frag:BE,points_vert:HE,points_frag:VE,shadow_vert:GE,shadow_frag:WE,sprite_vert:XE,sprite_frag:jE},De={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ni={basic:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ee(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Ln([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Ln([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ee(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Ln([De.points,De.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Ln([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Ln([De.common,De.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Ln([De.sprite,De.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Ln([De.common,De.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Ln([De.lights,De.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ni.physical={uniforms:Ln([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Il={r:0,b:0,g:0},Zr=new Vi,YE=new Lt;function qE(t,e,n,i,r,s,o){const a=new ee(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function _(m){let v=m.isScene===!0?m.background:null;return v&&v.isTexture&&(v=(m.backgroundBlurriness>0?n:e).get(v)),v}function y(m){let v=!1;const x=_(m);x===null?u(a,l):x&&x.isColor&&(u(x,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(m,v){const x=_(v);x&&(x.isCubeTexture||x.mapping===tu)?(h===void 0&&(h=new re(new Jn(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Do(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Zr.copy(v.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(Zr)),h.material.toneMapped=_t.getTransfer(x.colorSpace)!==It,(f!==x||d!==x.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new re(new or(2,2),new dr({name:"BackgroundMaterial",uniforms:Do(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_t.getTransfer(x.colorSpace)!==It,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function u(m,v){m.getRGB(Il,w_(t)),i.buffers.color.setClear(Il.r,Il.g,Il.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,u(a,l)},render:y,addToRenderList:g}}function $E(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,D,B,k,X){let q=!1;const G=f(k,B,D);s!==G&&(s=G,c(s.object)),q=p(S,k,B,X),q&&_(S,k,B,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(S,D,B,k),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function f(S,D,B){const k=B.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let q=X[D.id];q===void 0&&(q={},X[D.id]=q);let G=q[k];return G===void 0&&(G=d(l()),q[k]=G),G}function d(S){const D=[],B=[],k=[];for(let X=0;X<n;X++)D[X]=0,B[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,D,B,k){const X=s.attributes,q=D.attributes;let G=0;const te=B.getAttributes();for(const N in te)if(te[N].location>=0){const J=X[N];let pe=q[N];if(pe===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),J===void 0||J.attribute!==pe||pe&&J.data!==pe.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function _(S,D,B,k){const X={},q=D.attributes;let G=0;const te=B.getAttributes();for(const N in te)if(te[N].location>=0){let J=q[N];J===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const pe={};pe.attribute=J,J&&J.data&&(pe.data=J.data),X[N]=pe,G++}s.attributes=X,s.attributesNum=G,s.index=k}function y(){const S=s.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function g(S){u(S,0)}function u(S,D){const B=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;B[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),X[S]!==D&&(t.vertexAttribDivisor(S,D),X[S]=D)}function m(){const S=s.newAttributes,D=s.enabledAttributes;for(let B=0,k=D.length;B<k;B++)D[B]!==S[B]&&(t.disableVertexAttribArray(B),D[B]=0)}function v(S,D,B,k,X,q,G){G===!0?t.vertexAttribIPointer(S,D,B,X,q):t.vertexAttribPointer(S,D,B,k,X,q)}function x(S,D,B,k){y();const X=k.attributes,q=B.getAttributes(),G=D.defaultAttributeValues;for(const te in q){const N=q[te];if(N.location>=0){let Z=X[te];if(Z===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const J=Z.normalized,pe=Z.itemSize,ye=e.get(Z);if(ye===void 0)continue;const et=ye.buffer,j=ye.type,ae=ye.bytesPerElement,Me=j===t.INT||j===t.UNSIGNED_INT||Z.gpuType===Yf;if(Z.isInterleavedBufferAttribute){const le=Z.data,Ie=le.stride,We=Z.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<N.locationSize;Oe++)u(N.location+Oe,le.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<N.locationSize;Oe++)g(N.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,et);for(let Oe=0;Oe<N.locationSize;Oe++)v(N.location+Oe,pe/N.locationSize,j,J,Ie*ae,(We+pe/N.locationSize*Oe)*ae,Me)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)u(N.location+le,Z.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<N.locationSize;le++)g(N.location+le);t.bindBuffer(t.ARRAY_BUFFER,et);for(let le=0;le<N.locationSize;le++)v(N.location+le,pe/N.locationSize,j,J,pe*ae,pe/N.locationSize*le*ae,Me)}}else if(G!==void 0){const J=G[te];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(N.location,J);break;case 3:t.vertexAttrib3fv(N.location,J);break;case 4:t.vertexAttrib4fv(N.location,J);break;default:t.vertexAttrib1fv(N.location,J)}}}}m()}function P(){R();for(const S in i){const D=i[S];for(const B in D){const k=D[B];for(const X in k)h(k[X].object),delete k[X];delete D[B]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const k=D[B];for(const X in k)h(k[X].object),delete k[X];delete D[B]}delete i[S.id]}function w(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const k=B[S.id];for(const X in k)h(k[X].object),delete k[X];delete B[S.id]}}function R(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function ZE(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=h[y]*d[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Ti&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==hr&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Oi&&!R)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:P,maxSamples:b}}function JE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wr,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?h(null):c();else{const m=s?0:i,v=m*4;let x=u.clippingState||null;l.value=x,x=h(_,d,v,p);for(let P=0;P!==v;++P)x[P]=n[P];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,_){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const u=p+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(f[v]).applyMatrix4(m,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function QE(t){let e=new WeakMap;function n(o,a){return a===vd?o.mapping=Co:a===_d&&(o.mapping=bo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vd||a===_d)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class C_ extends E_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const so=4,Ym=[.125,.215,.35,.446,.526,.582],is=20,th=new C_,qm=new ee;let nh=null,ih=0,rh=0,sh=!1;const ts=(1+Math.sqrt(5))/2,Hs=1/ts,$m=[new A(-ts,Hs,0),new A(ts,Hs,0),new A(-Hs,0,ts),new A(Hs,0,ts),new A(0,ts,-Hs),new A(0,ts,Hs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,rh),this._renderer.xr.enabled=sh,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Co||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Za,format:Ti,colorSpace:Fo,depthBuffer:!1},r=Zm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e2(s)),this._blurMaterial=t2(s,e,n)}return r}_compileMaterial(e){const n=new re(this._lodPlanes[0],e);this._renderer.compile(n,th)}_sceneToCubeUV(e,n,i,r){const a=new Zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(qm),h.toneMapping=kr,h.autoClear=!1;const p=new Hi({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),_=new re(new Jn,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(qm),y=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Nl(r,m*v,u>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Co||e.mapping===bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,th)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$m[(r-s-1)%$m.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new re(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*is-1),y=s/_,g=isFinite(s)?1+Math.floor(h*y):is;g>is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);const u=[];let m=0;for(let w=0;w<is;++w){const R=w/y,E=Math.exp(-R*R/2);u.push(E),w===0?m+=E:w<g&&(m+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/m;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const x=this._sizeLods[r],P=3*x*(r>v-so?r-v+so:0),b=4*(this._cubeSize-x);Nl(n,P,b,3*x,2*x),l.setRenderTarget(n),l.render(f,th)}}function e2(t){const e=[],n=[],i=[];let r=t;const s=t-so+1+Ym.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-so?l=Ym[o-t+so-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,y=3,g=2,u=1,m=new Float32Array(y*_*p),v=new Float32Array(g*_*p),x=new Float32Array(u*_*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,R=b>2?0:-1,E=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];m.set(E,y*_*b),v.set(d,g*_*b);const S=[b,b,b,b,b,b];x.set(S,u*_*b)}const P=new rn;P.setAttribute("position",new jn(m,y)),P.setAttribute("uv",new jn(v,g)),P.setAttribute("faceIndex",new jn(x,u)),e.push(P),r>so&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zm(t,e,n){const i=new _s(t,e,n);return i.texture.mapping=tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function t2(t,e,n){const i=new Float32Array(is),r=new A(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ip(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Km(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ip(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Jm(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function ip(){return`

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
	`}function n2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vd||l===_d,h=l===Co||l===bo;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new jd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new jd(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function i2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r2(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let v=0,x=m.length;v<x;v+=3){const P=m[v+0],b=m[v+1],w=m[v+2];d.push(P,b,b,w,w,P)}}else if(_!==void 0){const m=_.array;y=_.version;for(let v=0,x=m.length/3-1;v<x;v+=3){const P=v+0,b=v+1,w=v+2;d.push(P,b,b,w,w,P)}}else return;const g=new(g_(d)?S_:M_)(d,1);g.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function s2(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let g=0;for(let u=0;u<_;u++)g+=p[u];n.update(g,i,1)}function f(d,p,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,_);let u=0;for(let m=0;m<_;m++)u+=p[m]*y[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function o2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function a2(t,e,n){const i=new WeakMap,r=new qt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),g===!0&&(x=3);let P=a.attributes.position.count*x,b=1;P>e.maxTextureSize&&(b=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*b*4*f),R=new __(w,P,b,f);R.type=Oi,R.needsUpdate=!0;const E=x*4;for(let D=0;D<f;D++){const B=u[D],k=m[D],X=v[D],q=P*b*4*D;for(let G=0;G<B.count;G++){const te=G*E;_===!0&&(r.fromBufferAttribute(B,G),w[q+te+0]=r.x,w[q+te+1]=r.y,w[q+te+2]=r.z,w[q+te+3]=0),y===!0&&(r.fromBufferAttribute(k,G),w[q+te+4]=r.x,w[q+te+5]=r.y,w[q+te+6]=r.z,w[q+te+7]=0),g===!0&&(r.fromBufferAttribute(X,G),w[q+te+8]=r.x,w[q+te+9]=r.y,w[q+te+10]=r.z,w[q+te+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new de(P,b)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function l2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class b_ extends bn{constructor(e,n,i,r,s,o,a,l,c,h=go){if(h!==go&&h!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===go&&(i=vs),i===void 0&&h===Po&&(i=Ro),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const R_=new bn,Qm=new b_(1,1),P_=new __,L_=new qM,D_=new T_,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),r0=new Float32Array(4);function zo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=e0[r];if(s===void 0&&(s=new Float32Array(r),e0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function ln(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function cn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=t0[e];n===void 0&&(n=new Int32Array(e),t0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function c2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2fv(this.addr,e),cn(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ln(n,e))return;t.uniform3fv(this.addr,e),cn(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4fv(this.addr,e),cn(n,e)}}function f2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;r0.set(i),t.uniformMatrix2fv(this.addr,!1,r0),cn(n,i)}}function p2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;i0.set(i),t.uniformMatrix3fv(this.addr,!1,i0),cn(n,i)}}function m2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;n0.set(i),t.uniformMatrix4fv(this.addr,!1,n0),cn(n,i)}}function g2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function v2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2iv(this.addr,e),cn(n,e)}}function _2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ln(n,e))return;t.uniform3iv(this.addr,e),cn(n,e)}}function x2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4iv(this.addr,e),cn(n,e)}}function y2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function M2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2uiv(this.addr,e),cn(n,e)}}function S2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ln(n,e))return;t.uniform3uiv(this.addr,e),cn(n,e)}}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4uiv(this.addr,e),cn(n,e)}}function E2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qm.compareFunction=m_,s=Qm):s=R_,n.setTexture2D(e||s,r)}function T2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||L_,r)}function A2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||D_,r)}function C2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||P_,r)}function b2(t){switch(t){case 5126:return c2;case 35664:return u2;case 35665:return h2;case 35666:return d2;case 35674:return f2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return g2;case 35667:case 35671:return v2;case 35668:case 35672:return _2;case 35669:case 35673:return x2;case 5125:return y2;case 36294:return M2;case 36295:return S2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return C2}}function R2(t,e){t.uniform1fv(this.addr,e)}function P2(t,e){const n=zo(e,this.size,2);t.uniform2fv(this.addr,n)}function L2(t,e){const n=zo(e,this.size,3);t.uniform3fv(this.addr,n)}function D2(t,e){const n=zo(e,this.size,4);t.uniform4fv(this.addr,n)}function I2(t,e){const n=zo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function N2(t,e){const n=zo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function U2(t,e){const n=zo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function F2(t,e){t.uniform1iv(this.addr,e)}function O2(t,e){t.uniform2iv(this.addr,e)}function k2(t,e){t.uniform3iv(this.addr,e)}function z2(t,e){t.uniform4iv(this.addr,e)}function B2(t,e){t.uniform1uiv(this.addr,e)}function H2(t,e){t.uniform2uiv(this.addr,e)}function V2(t,e){t.uniform3uiv(this.addr,e)}function G2(t,e){t.uniform4uiv(this.addr,e)}function W2(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);ln(i,s)||(t.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||R_,s[o])}function X2(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);ln(i,s)||(t.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||L_,s[o])}function j2(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);ln(i,s)||(t.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||D_,s[o])}function Y2(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);ln(i,s)||(t.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||P_,s[o])}function q2(t){switch(t){case 5126:return R2;case 35664:return P2;case 35665:return L2;case 35666:return D2;case 35674:return I2;case 35675:return N2;case 35676:return U2;case 5124:case 35670:return F2;case 35667:case 35671:return O2;case 35668:case 35672:return k2;case 35669:case 35673:return z2;case 5125:return B2;case 36294:return H2;case 36295:return V2;case 36296:return G2;case 35678:case 36198:case 36298:case 36306:case 35682:return W2;case 35679:case 36299:case 36307:return X2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return Y2}}class $2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=b2(n.type)}}class Z2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=q2(n.type)}}class K2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function s0(t,e){t.seq.push(e),t.map[e.id]=e}function J2(t,e,n){const i=t.name,r=i.length;for(oh.lastIndex=0;;){const s=oh.exec(i),o=oh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){s0(n,c===void 0?new $2(a,t,e):new Z2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new K2(a),s0(n,f)),n=f}}}class lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);J2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function o0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Q2=37297;let eT=0;function tT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const a0=new lt;function nT(t){_t._getMatrix(a0,_t.workingColorSpace,t);const e=`mat3( ${a0.elements.map(n=>n.toFixed(4))} )`;switch(_t.getTransfer(t)){case nu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function l0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tT(t.getShaderSource(e),o)}else return r}function iT(t,e){const n=nT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rT(t,e){let n;switch(e){case aM:n="Linear";break;case lM:n="Reinhard";break;case cM:n="Cineon";break;case i_:n="ACESFilmic";break;case hM:n="AgX";break;case dM:n="Neutral";break;case uM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new A;function sT(){_t.getLuminanceCoefficients(Ul);const t=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function aT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function aa(t){return t!==""}function c0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(t){return t.replace(cT,hT)}const uT=new Map;function hT(t,e){let n=ut[e];if(n===void 0){const i=uT.get(e);if(i!==void 0)n=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yd(n)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(t){return t.replace(dT,fT)}function fT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function d0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function mT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Co:case bo:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bo:e="ENVMAP_MODE_REFRACTION";break}return e}function vT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case n_:e="ENVMAP_BLENDING_MULTIPLY";break;case sM:e="ENVMAP_BLENDING_MIX";break;case oM:e="ENVMAP_BLENDING_ADD";break}return e}function _T(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=pT(n),c=mT(n),h=gT(n),f=vT(n),d=_T(n),p=oT(n),_=aT(s),y=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(aa).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(aa).join(`
`),u.length>0&&(u+=`
`)):(g=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),u=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==kr?"#define TONE_MAPPING":"",n.toneMapping!==kr?ut.tonemapping_pars_fragment:"",n.toneMapping!==kr?rT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,iT("linearToOutputTexel",n.outputColorSpace),sT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(aa).join(`
`)),o=Yd(o),o=c0(o,n),o=u0(o,n),a=Yd(a),a=c0(a,n),a=u0(a,n),o=h0(o),a=h0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+g+o,x=m+u+a,P=o0(r,r.VERTEX_SHADER,v),b=o0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,P),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(b).trim();let q=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,b);else{const te=l0(r,P,"vertex"),N=l0(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+te+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||X==="")&&(G=!1);G&&(D.diagnostics={runnable:q,programLog:B,vertexShader:{log:k,prefix:g},fragmentShader:{log:X,prefix:u}})}r.deleteShader(P),r.deleteShader(b),R=new lc(r,y),E=lT(r,y)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Q2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=b,this}let yT=0;class MT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ST(e),n.set(e,i)),i}}class ST{constructor(e){this.id=yT++,this.code=e,this.usedTimes=0}}function wT(t,e,n,i,r,s,o){const a=new x_,l=new MT,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,D,B,k){const X=B.fog,q=k.geometry,G=E.isMeshStandardMaterial?B.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),N=te&&te.mapping===tu?te.image.height:null,Z=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const J=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=J!==void 0?J.length:0;let ye=0;q.morphAttributes.position!==void 0&&(ye=1),q.morphAttributes.normal!==void 0&&(ye=2),q.morphAttributes.color!==void 0&&(ye=3);let et,j,ae,Me;if(Z){const ht=Ni[Z];et=ht.vertexShader,j=ht.fragmentShader}else et=E.vertexShader,j=E.fragmentShader,l.update(E),ae=l.getVertexShaderID(E),Me=l.getFragmentShaderID(E);const le=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),We=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,Ze=!!E.map,Q=!!E.matcap,ie=!!te,L=!!E.aoMap,Ne=!!E.lightMap,se=!!E.bumpMap,Se=!!E.normalMap,me=!!E.displacementMap,ke=!!E.emissiveMap,be=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,O=E.clearcoat>0,H=E.dispersion>0,K=E.iridescence>0,W=E.sheen>0,_e=E.transmission>0,ue=M&&!!E.anisotropyMap,we=O&&!!E.clearcoatMap,qe=O&&!!E.clearcoatNormalMap,ce=O&&!!E.clearcoatRoughnessMap,Te=K&&!!E.iridescenceMap,Ve=K&&!!E.iridescenceThicknessMap,He=W&&!!E.sheenColorMap,Ue=W&&!!E.sheenRoughnessMap,nt=!!E.specularMap,$e=!!E.specularColorMap,mt=!!E.specularIntensityMap,F=_e&&!!E.transmissionMap,Ae=_e&&!!E.thicknessMap,$=!!E.gradientMap,ne=!!E.alphaMap,Ce=E.alphaTest>0,Re=!!E.alphaHash,Je=!!E.extensions;let gt=kr;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Mt={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:j,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:We,instancingColor:We&&k.instanceColor!==null,instancingMorph:We&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Fo,alphaToCoverage:!!E.alphaToCoverage,map:Ze,matcap:Q,envMap:ie,envMapMode:ie&&te.mapping,envMapCubeUVHeight:N,aoMap:L,lightMap:Ne,bumpMap:se,normalMap:Se,displacementMap:d&&me,emissiveMap:ke,normalMapObjectSpace:Se&&E.normalMapType===gM,normalMapTangentSpace:Se&&E.normalMapType===p_,metalnessMap:be,roughnessMap:T,anisotropy:M,anisotropyMap:ue,clearcoat:O,clearcoatMap:we,clearcoatNormalMap:qe,clearcoatRoughnessMap:ce,dispersion:H,iridescence:K,iridescenceMap:Te,iridescenceThicknessMap:Ve,sheen:W,sheenColorMap:He,sheenRoughnessMap:Ue,specularMap:nt,specularColorMap:$e,specularIntensityMap:mt,transmission:_e,transmissionMap:F,thicknessMap:Ae,gradientMap:$,opaque:E.transparent===!1&&E.blending===mo&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:Ce,alphaHash:Re,combine:E.combine,mapUv:Ze&&y(E.map.channel),aoMapUv:L&&y(E.aoMap.channel),lightMapUv:Ne&&y(E.lightMap.channel),bumpMapUv:se&&y(E.bumpMap.channel),normalMapUv:Se&&y(E.normalMap.channel),displacementMapUv:me&&y(E.displacementMap.channel),emissiveMapUv:ke&&y(E.emissiveMap.channel),metalnessMapUv:be&&y(E.metalnessMap.channel),roughnessMapUv:T&&y(E.roughnessMap.channel),anisotropyMapUv:ue&&y(E.anisotropyMap.channel),clearcoatMapUv:we&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:He&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&y(E.sheenRoughnessMap.channel),specularMapUv:nt&&y(E.specularMap.channel),specularColorMapUv:$e&&y(E.specularColorMap.channel),specularIntensityMapUv:mt&&y(E.specularIntensityMap.channel),transmissionMapUv:F&&y(E.transmissionMap.channel),thicknessMapUv:Ae&&y(E.thicknessMap.channel),alphaMapUv:ne&&y(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Se||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ze||ne),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ie,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ze&&E.map.isVideoTexture===!0&&_t.getTransfer(E.map.colorSpace)===It,decodeVideoTextureEmissive:ke&&E.emissiveMap.isVideoTexture===!0&&_t.getTransfer(E.emissiveMap.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===In,flipSided:E.side===Cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(m(S,E),v(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function m(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=_[E.type];let D;if(S){const B=Ni[S];D=oS.clone(B.uniforms)}else D=E.uniforms;return D}function P(E,S){let D;for(let B=0,k=h.length;B<k;B++){const X=h[B];if(X.cacheKey===S){D=X,++D.usedTimes;break}}return D===void 0&&(D=new xT(t,S,E,s),h.push(D)),D}function b(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:x,acquireProgram:P,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:R}}function ET(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function TT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function f0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function p0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,y,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=g),e++,u}function a(f,d,p,_,y,g){const u=o(f,d,p,_,y,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,_,y,g){const u=o(f,d,p,_,y,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||TT),i.length>1&&i.sort(d||f0),r.length>1&&r.sort(d||f0)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function AT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new p0,t.set(i,[o])):r>=s.length?(o=new p0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function CT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new A,color:new ee};break;case"SpotLight":n={position:new A,direction:new A,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new A,color:new ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new A,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":n={color:new ee,position:new A,halfWidth:new A,halfHeight:new A};break}return t[e.id]=n,n}}}function bT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RT=0;function PT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LT(t){const e=new CT,n=bT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);const r=new A,s=new Lt,o=new Lt;function a(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,y=0,g=0,u=0,m=0,v=0,x=0,P=0,b=0,w=0;c.sort(PT);for(let E=0,S=c.length;E<S;E++){const D=c[E],B=D.color,k=D.intensity,X=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*k,f+=B.g*k,d+=B.b*k;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],k);w++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,N=n.get(D);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(k),G.distance=X,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[y]=G;const te=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,te.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[y]=te.matrix,D.castShadow){const N=n.get(D);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=q,x++}y++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(B).multiplyScalar(k),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=G,g++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const te=D.shadow,N=n.get(D);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,N.shadowCameraNear=te.camera.near,N.shadowCameraFar=te.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=G,_++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(k),G.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[u]=G,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==g||R.hemiLength!==u||R.numDirectionalShadows!==m||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=g,R.hemiLength=u,R.numDirectionalShadows=m,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=w,i.version=RT++)}function l(c,h){let f=0,d=0,p=0,_=0,y=0;const g=h.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function m0(t){const e=new LT(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function DT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new m0(t),e.set(r,[a])):s>=o.length?(a=new m0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class IT extends ko{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NT extends ko{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
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
}`;function OT(t,e,n){let i=new np;const r=new de,s=new de,o=new qt,a=new IT({depthPacking:mM}),l=new NT,c={},h=n.maxTextureSize,f={[Vr]:Cn,[Cn]:Vr,[In]:In},d=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:UT,fragmentShader:FT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new rn;_.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new re(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e_;let u=this.type;this.render=function(b,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Or),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=u!==Zi&&this.type===Zi,X=u===Zi&&this.type!==Zi;for(let q=0,G=b.length;q<G;q++){const te=b[q],N=te.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Z=N.getFrameExtents();if(r.multiply(Z),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,N.mapSize.y=s.y)),N.map===null||k===!0||X===!0){const pe=this.type!==Zi?{minFilter:ei,magFilter:ei}:{};N.map!==null&&N.map.dispose(),N.map=new _s(r.x,r.y,pe),N.map.texture.name=te.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const J=N.getViewportCount();for(let pe=0;pe<J;pe++){const ye=N.getViewport(pe);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),B.viewport(o),N.updateMatrices(te,pe),i=N.getFrustum(),x(w,R,N.camera,te,this.type)}N.isPointLightShadow!==!0&&this.type===Zi&&m(N,R),N.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,S,D)};function m(b,w){const R=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _s(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,R,d,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,R,p,y,null)}function v(b,w,R,E){let S=null;const D=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=S.uuid,k=w.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let q=X[k];q===void 0&&(q=S.clone(),X[k]=q,w.addEventListener("dispose",P)),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,E===Zi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=R}return S}function x(b,w,R,E,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Zi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const k=e.update(b),X=b.material;if(Array.isArray(X)){const q=k.groups;for(let G=0,te=q.length;G<te;G++){const N=q[G],Z=X[N.materialIndex];if(Z&&Z.visible){const J=v(b,Z,E,S);b.onBeforeShadow(t,b,w,R,k,J,N),t.renderBufferDirect(R,null,k,J,b,N),b.onAfterShadow(t,b,w,R,k,J,N)}}}else if(X.visible){const q=v(b,X,E,S);b.onBeforeShadow(t,b,w,R,k,q,null),t.renderBufferDirect(R,null,k,q,b,null),b.onAfterShadow(t,b,w,R,k,q,null)}}const B=b.children;for(let k=0,X=B.length;k<X;k++)x(B[k],w,R,E,S)}function P(b){b.target.removeEventListener("dispose",P);for(const R in c){const E=c[R],S=b.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const kT={[ud]:hd,[dd]:md,[fd]:gd,[Ao]:pd,[hd]:ud,[md]:dd,[gd]:fd,[pd]:Ao};function zT(t,e){function n(){let F=!1;const Ae=new qt;let $=null;const ne=new qt(0,0,0,0);return{setMask:function(Ce){$!==Ce&&!F&&(t.colorMask(Ce,Ce,Ce,Ce),$=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,Re,Je,gt,Mt){Mt===!0&&(Ce*=gt,Re*=gt,Je*=gt),Ae.set(Ce,Re,Je,gt),ne.equals(Ae)===!1&&(t.clearColor(Ce,Re,Je,gt),ne.copy(Ae))},reset:function(){F=!1,$=null,ne.set(-1,0,0,0)}}}function i(){let F=!1,Ae=!1,$=null,ne=null,Ce=null;return{setReversed:function(Re){if(Ae!==Re){const Je=e.get("EXT_clip_control");Ae?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const gt=Ce;Ce=null,this.setClear(gt)}Ae=Re},getReversed:function(){return Ae},setTest:function(Re){Re?le(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(Re){$!==Re&&!F&&(t.depthMask(Re),$=Re)},setFunc:function(Re){if(Ae&&(Re=kT[Re]),ne!==Re){switch(Re){case ud:t.depthFunc(t.NEVER);break;case hd:t.depthFunc(t.ALWAYS);break;case dd:t.depthFunc(t.LESS);break;case Ao:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case pd:t.depthFunc(t.GEQUAL);break;case md:t.depthFunc(t.GREATER);break;case gd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=Re}},setLocked:function(Re){F=Re},setClear:function(Re){Ce!==Re&&(Ae&&(Re=1-Re),t.clearDepth(Re),Ce=Re)},reset:function(){F=!1,$=null,ne=null,Ce=null,Ae=!1}}}function r(){let F=!1,Ae=null,$=null,ne=null,Ce=null,Re=null,Je=null,gt=null,Mt=null;return{setTest:function(ht){F||(ht?le(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(ht){Ae!==ht&&!F&&(t.stencilMask(ht),Ae=ht)},setFunc:function(ht,$t,Zt){($!==ht||ne!==$t||Ce!==Zt)&&(t.stencilFunc(ht,$t,Zt),$=ht,ne=$t,Ce=Zt)},setOp:function(ht,$t,Zt){(Re!==ht||Je!==$t||gt!==Zt)&&(t.stencilOp(ht,$t,Zt),Re=ht,Je=$t,gt=Zt)},setLocked:function(ht){F=ht},setClear:function(ht){Mt!==ht&&(t.clearStencil(ht),Mt=ht)},reset:function(){F=!1,Ae=null,$=null,ne=null,Ce=null,Re=null,Je=null,gt=null,Mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],_=null,y=!1,g=null,u=null,m=null,v=null,x=null,P=null,b=null,w=new ee(0,0,0),R=0,E=!1,S=null,D=null,B=null,k=null,X=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=te>=1):N.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=te>=2);let Z=null,J={};const pe=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),et=new qt().fromArray(pe),j=new qt().fromArray(ye);function ae(F,Ae,$,ne){const Ce=new Uint8Array(4),Re=t.createTexture();t.bindTexture(F,Re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<$;Je++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(Ae+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return Re}const Me={};Me[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Ao),se(!1),Se(ym),le(t.CULL_FACE),L(Or);function le(F){h[F]!==!0&&(t.enable(F),h[F]=!0)}function Ie(F){h[F]!==!1&&(t.disable(F),h[F]=!1)}function We(F,Ae){return f[F]!==Ae?(t.bindFramebuffer(F,Ae),f[F]=Ae,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ae),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Oe(F,Ae){let $=p,ne=!1;if(F){$=d.get(Ae),$===void 0&&($=[],d.set(Ae,$));const Ce=F.textures;if($.length!==Ce.length||$[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Je=Ce.length;Re<Je;Re++)$[Re]=t.COLOR_ATTACHMENT0+Re;$.length=Ce.length,ne=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ne=!0);ne&&t.drawBuffers($)}function Ze(F){return _!==F?(t.useProgram(F),_=F,!0):!1}const Q={[ns]:t.FUNC_ADD,[V1]:t.FUNC_SUBTRACT,[G1]:t.FUNC_REVERSE_SUBTRACT};Q[W1]=t.MIN,Q[X1]=t.MAX;const ie={[j1]:t.ZERO,[Y1]:t.ONE,[q1]:t.SRC_COLOR,[ld]:t.SRC_ALPHA,[eM]:t.SRC_ALPHA_SATURATE,[J1]:t.DST_COLOR,[Z1]:t.DST_ALPHA,[$1]:t.ONE_MINUS_SRC_COLOR,[cd]:t.ONE_MINUS_SRC_ALPHA,[Q1]:t.ONE_MINUS_DST_COLOR,[K1]:t.ONE_MINUS_DST_ALPHA,[tM]:t.CONSTANT_COLOR,[nM]:t.ONE_MINUS_CONSTANT_COLOR,[iM]:t.CONSTANT_ALPHA,[rM]:t.ONE_MINUS_CONSTANT_ALPHA};function L(F,Ae,$,ne,Ce,Re,Je,gt,Mt,ht){if(F===Or){y===!0&&(Ie(t.BLEND),y=!1);return}if(y===!1&&(le(t.BLEND),y=!0),F!==H1){if(F!==g||ht!==E){if((u!==ns||x!==ns)&&(t.blendEquation(t.FUNC_ADD),u=ns,x=ns),ht)switch(F){case mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ic:t.blendFunc(t.ONE,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ic:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,v=null,P=null,b=null,w.set(0,0,0),R=0,g=F,E=ht}return}Ce=Ce||Ae,Re=Re||$,Je=Je||ne,(Ae!==u||Ce!==x)&&(t.blendEquationSeparate(Q[Ae],Q[Ce]),u=Ae,x=Ce),($!==m||ne!==v||Re!==P||Je!==b)&&(t.blendFuncSeparate(ie[$],ie[ne],ie[Re],ie[Je]),m=$,v=ne,P=Re,b=Je),(gt.equals(w)===!1||Mt!==R)&&(t.blendColor(gt.r,gt.g,gt.b,Mt),w.copy(gt),R=Mt),g=F,E=!1}function Ne(F,Ae){F.side===In?Ie(t.CULL_FACE):le(t.CULL_FACE);let $=F.side===Cn;Ae&&($=!$),se($),F.blending===mo&&F.transparent===!1?L(Or):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ne=F.stencilWrite;a.setTest(ne),ne&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function Se(F){F!==z1?(le(t.CULL_FACE),F!==D&&(F===ym?t.cullFace(t.BACK):F===B1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),D=F}function me(F){F!==B&&(G&&t.lineWidth(F),B=F)}function ke(F,Ae,$){F?(le(t.POLYGON_OFFSET_FILL),(k!==Ae||X!==$)&&(t.polygonOffset(Ae,$),k=Ae,X=$)):Ie(t.POLYGON_OFFSET_FILL)}function be(F){F?le(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function T(F){F===void 0&&(F=t.TEXTURE0+q-1),Z!==F&&(t.activeTexture(F),Z=F)}function M(F,Ae,$){$===void 0&&(Z===null?$=t.TEXTURE0+q-1:$=Z);let ne=J[$];ne===void 0&&(ne={type:void 0,texture:void 0},J[$]=ne),(ne.type!==F||ne.texture!==Ae)&&(Z!==$&&(t.activeTexture($),Z=$),t.bindTexture(F,Ae||Me[F]),ne.type=F,ne.texture=Ae)}function O(){const F=J[Z];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(F){et.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),et.copy(F))}function Ue(F){j.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function nt(F,Ae){let $=c.get(Ae);$===void 0&&($=new WeakMap,c.set(Ae,$));let ne=$.get(F);ne===void 0&&(ne=t.getUniformBlockIndex(Ae,F.name),$.set(F,ne))}function $e(F,Ae){const ne=c.get(Ae).get(F);l.get(Ae)!==ne&&(t.uniformBlockBinding(Ae,ne,F.__bindingPointIndex),l.set(Ae,ne))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Z=null,J={},f={},d=new WeakMap,p=[],_=null,y=!1,g=null,u=null,m=null,v=null,x=null,P=null,b=null,w=new ee(0,0,0),R=0,E=!1,S=null,D=null,B=null,k=null,X=null,et.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Ie,bindFramebuffer:We,drawBuffers:Oe,useProgram:Ze,setBlending:L,setMaterial:Ne,setFlipSided:se,setCullFace:Se,setLineWidth:me,setPolygonOffset:ke,setScissorTest:be,activeTexture:T,bindTexture:M,unbindTexture:O,compressedTexImage2D:H,compressedTexImage3D:K,texImage2D:Te,texImage3D:Ve,updateUBOMapping:nt,uniformBlockBinding:$e,texStorage2D:qe,texStorage3D:ce,texSubImage2D:W,texSubImage3D:_e,compressedTexSubImage2D:ue,compressedTexSubImage3D:we,scissor:He,viewport:Ue,reset:mt}}function g0(t,e,n,i){const r=BT(i);switch(n){case l_:return t*e;case u_:return t*e;case h_:return t*e*2;case Zf:return t*e/r.components*r.byteLength;case Kf:return t*e/r.components*r.byteLength;case d_:return t*e*2/r.components*r.byteLength;case Jf:return t*e*2/r.components*r.byteLength;case c_:return t*e*3/r.components*r.byteLength;case Ti:return t*e*4/r.components*r.byteLength;case Qf:return t*e*4/r.components*r.byteLength;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Md:case wd:return Math.max(t,16)*Math.max(e,8)/4;case yd:case Sd:return Math.max(t,8)*Math.max(e,8)/2;case Ed:case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ac:case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case f_:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wd:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BT(t){switch(t){case hr:case s_:return{byteLength:1,components:1};case Ba:case o_:case Za:return{byteLength:2,components:1};case qf:case $f:return{byteLength:2,components:4};case vs:case Yf:case Oi:return{byteLength:4,components:1};case a_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function HT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,M){return p?new OffscreenCanvas(T,M):Uc("canvas")}function y(T,M,O){let H=1;const K=be(T);if((K.width>O||K.height>O)&&(H=O/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(H*K.width),_e=Math.floor(H*K.height);f===void 0&&(f=_(W,_e));const ue=M?_(W,_e):f;return ue.width=W,ue.height=_e,ue.getContext("2d").drawImage(T,0,0,W,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+_e+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function g(T){return T.generateMipmaps}function u(T){t.generateMipmap(T)}function m(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(T,M,O,H,K=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=M;if(M===t.RED&&(O===t.FLOAT&&(W=t.R32F),O===t.HALF_FLOAT&&(W=t.R16F),O===t.UNSIGNED_BYTE&&(W=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.R8UI),O===t.UNSIGNED_SHORT&&(W=t.R16UI),O===t.UNSIGNED_INT&&(W=t.R32UI),O===t.BYTE&&(W=t.R8I),O===t.SHORT&&(W=t.R16I),O===t.INT&&(W=t.R32I)),M===t.RG&&(O===t.FLOAT&&(W=t.RG32F),O===t.HALF_FLOAT&&(W=t.RG16F),O===t.UNSIGNED_BYTE&&(W=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RG8UI),O===t.UNSIGNED_SHORT&&(W=t.RG16UI),O===t.UNSIGNED_INT&&(W=t.RG32UI),O===t.BYTE&&(W=t.RG8I),O===t.SHORT&&(W=t.RG16I),O===t.INT&&(W=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RGB8UI),O===t.UNSIGNED_SHORT&&(W=t.RGB16UI),O===t.UNSIGNED_INT&&(W=t.RGB32UI),O===t.BYTE&&(W=t.RGB8I),O===t.SHORT&&(W=t.RGB16I),O===t.INT&&(W=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),O===t.UNSIGNED_INT&&(W=t.RGBA32UI),O===t.BYTE&&(W=t.RGBA8I),O===t.SHORT&&(W=t.RGBA16I),O===t.INT&&(W=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),M===t.RGBA){const _e=K?nu:_t.getTransfer(H);O===t.FLOAT&&(W=t.RGBA32F),O===t.HALF_FLOAT&&(W=t.RGBA16F),O===t.UNSIGNED_BYTE&&(W=_e===It?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(T,M){let O;return T?M===null||M===vs||M===Ro?O=t.DEPTH24_STENCIL8:M===Oi?O=t.DEPTH32F_STENCIL8:M===Ba&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vs||M===Ro?O=t.DEPTH_COMPONENT24:M===Oi?O=t.DEPTH_COMPONENT32F:M===Ba&&(O=t.DEPTH_COMPONENT16),O}function P(T,M){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==ei&&T.minFilter!==Fi?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function b(T){const M=T.target;M.removeEventListener("dispose",b),R(M),M.isVideoTexture&&h.delete(M)}function w(T){const M=T.target;M.removeEventListener("dispose",w),S(M)}function R(T){const M=i.get(T);if(M.__webglInit===void 0)return;const O=T.source,H=d.get(O);if(H){const K=H[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(T),Object.keys(H).length===0&&d.delete(O)}i.remove(T)}function E(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const O=T.source,H=d.get(O);delete H[M.__cacheKey],o.memory.textures--}function S(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let K=0;K<M.__webglFramebuffer[H].length;K++)t.deleteFramebuffer(M.__webglFramebuffer[H][K]);else t.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)t.deleteFramebuffer(M.__webglFramebuffer[H]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=T.textures;for(let H=0,K=O.length;H<K;H++){const W=i.get(O[H]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[H])}i.remove(T)}let D=0;function B(){D=0}function k(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function X(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function q(T,M){const O=i.get(T);if(T.isVideoTexture&&me(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const H=T.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,T,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function G(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function te(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function N(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){ae(O,T,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const Z={[vn]:t.REPEAT,[nr]:t.CLAMP_TO_EDGE,[xd]:t.MIRRORED_REPEAT},J={[ei]:t.NEAREST,[fM]:t.NEAREST_MIPMAP_NEAREST,[ml]:t.NEAREST_MIPMAP_LINEAR,[Fi]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[ls]:t.LINEAR_MIPMAP_LINEAR},pe={[vM]:t.NEVER,[wM]:t.ALWAYS,[_M]:t.LESS,[m_]:t.LEQUAL,[xM]:t.EQUAL,[SM]:t.GEQUAL,[yM]:t.GREATER,[MM]:t.NOTEQUAL};function ye(T,M){if(M.type===Oi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fi||M.magFilter===Nu||M.magFilter===ml||M.magFilter===ls||M.minFilter===Fi||M.minFilter===Nu||M.minFilter===ml||M.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,Z[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,Z[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,Z[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,J[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,J[M.minFilter]),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ei||M.minFilter!==ml&&M.minFilter!==ls||M.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function et(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",b));const H=M.source;let K=d.get(H);K===void 0&&(K={},d.set(H,K));const W=X(M);if(W!==T.__cacheKey){K[W]===void 0&&(K[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[W].usedTimes++;const _e=K[T.__cacheKey];_e!==void 0&&(K[T.__cacheKey].usedTimes--,_e.usedTimes===0&&E(M)),T.__cacheKey=W,T.__webglTexture=K[W].texture}return O}function j(T,M,O){let H=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=t.TEXTURE_3D);const K=et(T,M),W=M.source;n.bindTexture(H,T.__webglTexture,t.TEXTURE0+O);const _e=i.get(W);if(W.version!==_e.__version||K===!0){n.activeTexture(t.TEXTURE0+O);const ue=_t.getPrimaries(_t.workingColorSpace),we=M.colorSpace===Ar?null:_t.getPrimaries(M.colorSpace),qe=M.colorSpace===Ar||ue===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ce=y(M.image,!1,r.maxTextureSize);ce=ke(M,ce);const Te=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type);let He=v(M.internalFormat,Te,Ve,M.colorSpace,M.isVideoTexture);ye(H,M);let Ue;const nt=M.mipmaps,$e=M.isVideoTexture!==!0,mt=_e.__version===void 0||K===!0,F=W.dataReady,Ae=P(M,ce);if(M.isDepthTexture)He=x(M.format===Po,M.type),mt&&($e?n.texStorage2D(t.TEXTURE_2D,1,He,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,He,ce.width,ce.height,0,Te,Ve,null));else if(M.isDataTexture)if(nt.length>0){$e&&mt&&n.texStorage2D(t.TEXTURE_2D,Ae,He,nt[0].width,nt[0].height);for(let $=0,ne=nt.length;$<ne;$++)Ue=nt[$],$e?F&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Te,Ve,Ue.data):n.texImage2D(t.TEXTURE_2D,$,He,Ue.width,Ue.height,0,Te,Ve,Ue.data);M.generateMipmaps=!1}else $e?(mt&&n.texStorage2D(t.TEXTURE_2D,Ae,He,ce.width,ce.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Te,Ve,ce.data)):n.texImage2D(t.TEXTURE_2D,0,He,ce.width,ce.height,0,Te,Ve,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,He,nt[0].width,nt[0].height,ce.depth);for(let $=0,ne=nt.length;$<ne;$++)if(Ue=nt[$],M.format!==Ti)if(Te!==null)if($e){if(F)if(M.layerUpdates.size>0){const Ce=g0(Ue.width,Ue.height,M.format,M.type);for(const Re of M.layerUpdates){const Je=Ue.data.subarray(Re*Ce/Ue.data.BYTES_PER_ELEMENT,(Re+1)*Ce/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Re,Ue.width,Ue.height,1,Te,Je)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,Ue.width,Ue.height,ce.depth,Te,Ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,He,Ue.width,Ue.height,ce.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,Ue.width,Ue.height,ce.depth,Te,Ve,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,He,Ue.width,Ue.height,ce.depth,0,Te,Ve,Ue.data)}else{$e&&mt&&n.texStorage2D(t.TEXTURE_2D,Ae,He,nt[0].width,nt[0].height);for(let $=0,ne=nt.length;$<ne;$++)Ue=nt[$],M.format!==Ti?Te!==null?$e?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Te,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,$,He,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?F&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Te,Ve,Ue.data):n.texImage2D(t.TEXTURE_2D,$,He,Ue.width,Ue.height,0,Te,Ve,Ue.data)}else if(M.isDataArrayTexture)if($e){if(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,He,ce.width,ce.height,ce.depth),F)if(M.layerUpdates.size>0){const $=g0(ce.width,ce.height,M.format,M.type);for(const ne of M.layerUpdates){const Ce=ce.data.subarray(ne*$/ce.data.BYTES_PER_ELEMENT,(ne+1)*$/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,ce.width,ce.height,1,Te,Ve,Ce)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,Ve,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,He,ce.width,ce.height,ce.depth,0,Te,Ve,ce.data);else if(M.isData3DTexture)$e?(mt&&n.texStorage3D(t.TEXTURE_3D,Ae,He,ce.width,ce.height,ce.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,Ve,ce.data)):n.texImage3D(t.TEXTURE_3D,0,He,ce.width,ce.height,ce.depth,0,Te,Ve,ce.data);else if(M.isFramebufferTexture){if(mt)if($e)n.texStorage2D(t.TEXTURE_2D,Ae,He,ce.width,ce.height);else{let $=ce.width,ne=ce.height;for(let Ce=0;Ce<Ae;Ce++)n.texImage2D(t.TEXTURE_2D,Ce,He,$,ne,0,Te,Ve,null),$>>=1,ne>>=1}}else if(nt.length>0){if($e&&mt){const $=be(nt[0]);n.texStorage2D(t.TEXTURE_2D,Ae,He,$.width,$.height)}for(let $=0,ne=nt.length;$<ne;$++)Ue=nt[$],$e?F&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Te,Ve,Ue):n.texImage2D(t.TEXTURE_2D,$,He,Te,Ve,Ue);M.generateMipmaps=!1}else if($e){if(mt){const $=be(ce);n.texStorage2D(t.TEXTURE_2D,Ae,He,$.width,$.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Ve,ce)}else n.texImage2D(t.TEXTURE_2D,0,He,Te,Ve,ce);g(M)&&u(H),_e.__version=W.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ae(T,M,O){if(M.image.length!==6)return;const H=et(T,M),K=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+O);const W=i.get(K);if(K.version!==W.__version||H===!0){n.activeTexture(t.TEXTURE0+O);const _e=_t.getPrimaries(_t.workingColorSpace),ue=M.colorSpace===Ar?null:_t.getPrimaries(M.colorSpace),we=M.colorSpace===Ar||_e===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let ne=0;ne<6;ne++)!qe&&!ce?Te[ne]=y(M.image[ne],!0,r.maxCubemapSize):Te[ne]=ce?M.image[ne].image:M.image[ne],Te[ne]=ke(M,Te[ne]);const Ve=Te[0],He=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),nt=v(M.internalFormat,He,Ue,M.colorSpace),$e=M.isVideoTexture!==!0,mt=W.__version===void 0||H===!0,F=K.dataReady;let Ae=P(M,Ve);ye(t.TEXTURE_CUBE_MAP,M);let $;if(qe){$e&&mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,nt,Ve.width,Ve.height);for(let ne=0;ne<6;ne++){$=Te[ne].mipmaps;for(let Ce=0;Ce<$.length;Ce++){const Re=$[Ce];M.format!==Ti?He!==null?$e?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Re.width,Re.height,He,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,nt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Re.width,Re.height,He,Ue,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,nt,Re.width,Re.height,0,He,Ue,Re.data)}}}else{if($=M.mipmaps,$e&&mt){$.length>0&&Ae++;const ne=be(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,nt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ce){$e?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te[ne].width,Te[ne].height,He,Ue,Te[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,nt,Te[ne].width,Te[ne].height,0,He,Ue,Te[ne].data);for(let Ce=0;Ce<$.length;Ce++){const Je=$[Ce].image[ne].image;$e?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Je.width,Je.height,He,Ue,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,nt,Je.width,Je.height,0,He,Ue,Je.data)}}else{$e?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,He,Ue,Te[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,nt,He,Ue,Te[ne]);for(let Ce=0;Ce<$.length;Ce++){const Re=$[Ce];$e?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,He,Ue,Re.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,nt,He,Ue,Re.image[ne])}}}g(M)&&u(t.TEXTURE_CUBE_MAP),W.__version=K.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Me(T,M,O,H,K,W){const _e=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),we=v(O.internalFormat,_e,ue,O.colorSpace),qe=i.get(M),ce=i.get(O);if(ce.__renderTarget=M,!qe.__hasExternalTextures){const Te=Math.max(1,M.width>>W),Ve=Math.max(1,M.height>>W);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,W,we,Te,Ve,M.depth,0,_e,ue,null):n.texImage2D(K,W,we,Te,Ve,0,_e,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,K,ce.__webglTexture,0,se(M)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,K,ce.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(T,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer){const H=M.depthTexture,K=H&&H.isDepthTexture?H.type:null,W=x(M.stencilBuffer,K),_e=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=se(M);Se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,W,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,W,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,W,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,T)}else{const H=M.textures;for(let K=0;K<H.length;K++){const W=H[K],_e=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),we=v(W.internalFormat,_e,ue,W.colorSpace),qe=se(M);O&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,we,M.width,M.height):Se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,we,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,we,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(M.depthTexture);H.__renderTarget=M,(!H.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const K=H.__webglTexture,W=se(M);if(M.depthTexture.format===go)Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(M.depthTexture.format===Po)Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function We(T){const M=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const H=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=H}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=t.createRenderbuffer(),le(M.__webglDepthbuffer[H],T,!1);else{const K=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,W)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),le(M.__webglDepthbuffer,T,!1);else{const H=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,K)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(T,M,O){const H=i.get(T);M!==void 0&&Me(H.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&We(T)}function Ze(T){const M=T.texture,O=i.get(T),H=i.get(M);T.addEventListener("dispose",w);const K=T.textures,W=T.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=M.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let we=0;we<M.mipmaps.length;we++)O.__webglFramebuffer[ue][we]=t.createFramebuffer()}else O.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)O.__webglFramebuffer[ue]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(_e)for(let ue=0,we=K.length;ue<we;ue++){const qe=i.get(K[ue]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&Se(T)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<K.length;ue++){const we=K[ue];O.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const qe=s.convert(we.format,we.colorSpace),ce=s.convert(we.type),Te=v(we.internalFormat,qe,ce,we.colorSpace,T.isXRRenderTarget===!0),Ve=se(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Te,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),le(O.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),ye(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)Me(O.__webglFramebuffer[ue][we],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we);else Me(O.__webglFramebuffer[ue],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let ue=0,we=K.length;ue<we;ue++){const qe=K[ue],ce=i.get(qe);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),ye(t.TEXTURE_2D,qe),Me(O.__webglFramebuffer,T,qe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(qe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,H.__webglTexture),ye(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)Me(O.__webglFramebuffer[we],T,M,t.COLOR_ATTACHMENT0,ue,we);else Me(O.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,ue,0);g(M)&&u(ue),n.unbindTexture()}T.depthBuffer&&We(T)}function Q(T){const M=T.textures;for(let O=0,H=M.length;O<H;O++){const K=M[O];if(g(K)){const W=m(T),_e=i.get(K).__webglTexture;n.bindTexture(W,_e),u(W),n.unbindTexture()}}}const ie=[],L=[];function Ne(T){if(T.samples>0){if(Se(T)===!1){const M=T.textures,O=T.width,H=T.height;let K=t.COLOR_BUFFER_BIT;const W=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(T),ue=M.length>1;if(ue)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let we=0;we<M.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);const qe=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,O,H,0,0,O,H,K,t.NEAREST),l===!0&&(ie.length=0,L.length=0,ie.push(t.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(W),L.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);const qe=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function se(T){return Math.min(r.maxSamples,T.samples)}function Se(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function ke(T,M){const O=T.colorSpace,H=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Fo&&O!==Ar&&(_t.getTransfer(O)===It?(H!==Ti||K!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=te,this.setTextureCube=N,this.rebindTextures=Oe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Se}function VT(t,e){function n(i,r=Ar){let s;const o=_t.getTransfer(r);if(i===hr)return t.UNSIGNED_BYTE;if(i===qf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$f)return t.UNSIGNED_SHORT_5_5_5_1;if(i===a_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===s_)return t.BYTE;if(i===o_)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===Yf)return t.INT;if(i===vs)return t.UNSIGNED_INT;if(i===Oi)return t.FLOAT;if(i===Za)return t.HALF_FLOAT;if(i===l_)return t.ALPHA;if(i===c_)return t.RGB;if(i===Ti)return t.RGBA;if(i===u_)return t.LUMINANCE;if(i===h_)return t.LUMINANCE_ALPHA;if(i===go)return t.DEPTH_COMPONENT;if(i===Po)return t.DEPTH_STENCIL;if(i===Zf)return t.RED;if(i===Kf)return t.RED_INTEGER;if(i===d_)return t.RG;if(i===Jf)return t.RG_INTEGER;if(i===Qf)return t.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===oc)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===Md||i===Sd||i===wd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===Td||i===Ad)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ed||i===Td)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ad)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cd||i===bd||i===Rd||i===Pd||i===Ld||i===Dd||i===Id||i===Nd||i===Ud||i===Fd||i===Od||i===kd||i===zd||i===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===Hd||i===Vd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ac)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===f_||i===Gd||i===Wd||i===Xd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class GT extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ot extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WT={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jT=`
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

}`;class YT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new bn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new dr({vertexShader:XT,fragmentShader:jT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new re(new or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qT extends ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,_=null;const y=new YT,g=n.getContextAttributes();let u=null,m=null;const v=[],x=[],P=new de;let b=null;const w=new Zn;w.viewport=new qt;const R=new Zn;R.viewport=new qt;const E=[w,R],S=new GT;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=v[j];return ae===void 0&&(ae=new ah,v[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=v[j];return ae===void 0&&(ae=new ah,v[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=v[j];return ae===void 0&&(ae=new ah,v[j]=ae),ae.getHandSpace()};function k(j){const ae=x.indexOf(j.inputSource);if(ae===-1)return;const Me=v[ae];Me!==void 0&&(Me.update(j.inputSource,j.frame,c||o),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",q);for(let j=0;j<v.length;j++){const ae=x[j];ae!==null&&(x[j]=null,v[j].disconnect(ae))}D=null,B=null,y.reset(),e.setRenderTarget(u),p=null,d=null,f=null,r=null,m=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new _s(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,Me=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=g.stencil?Po:go,Me=g.stencil?Ro:vs);const Ie={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new _s(d.textureWidth,d.textureHeight,{format:Ti,type:hr,depthTexture:new b_(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(j){for(let ae=0;ae<j.removed.length;ae++){const Me=j.removed[ae],le=x.indexOf(Me);le>=0&&(x[le]=null,v[le].disconnect(Me))}for(let ae=0;ae<j.added.length;ae++){const Me=j.added[ae];let le=x.indexOf(Me);if(le===-1){for(let We=0;We<v.length;We++)if(We>=x.length){x.push(Me),le=We;break}else if(x[We]===null){x[We]=Me,le=We;break}if(le===-1)break}const Ie=v[le];Ie&&Ie.connect(Me)}}const G=new A,te=new A;function N(j,ae,Me){G.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(Me.matrixWorld);const le=G.distanceTo(te),Ie=ae.projectionMatrix.elements,We=Me.projectionMatrix.elements,Oe=Ie[14]/(Ie[10]-1),Ze=Ie[14]/(Ie[10]+1),Q=(Ie[9]+1)/Ie[5],ie=(Ie[9]-1)/Ie[5],L=(Ie[8]-1)/Ie[0],Ne=(We[8]+1)/We[0],se=Oe*L,Se=Oe*Ne,me=le/(-L+Ne),ke=me*-L;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const be=Oe+me,T=Ze+me,M=se-ke,O=Se+(le-ke),H=Q*Ze/T*be,K=ie*Ze/T*be;j.projectionMatrix.makePerspective(M,O,H,K,be,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Z(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ae=j.near,Me=j.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),S.near=R.near=w.near=ae,S.far=R.far=w.far=Me,(D!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far),w.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,S.layers.mask=w.layers.mask|R.layers.mask;const le=j.parent,Ie=S.cameras;Z(S,le);for(let We=0;We<Ie.length;We++)Z(Ie[We],le);Ie.length===2?N(S,w,R):S.projectionMatrix.copy(w.projectionMatrix),J(j,S,le)};function J(j,ae,Me){Me===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let pe=null;function ye(j,ae){if(h=ae.getViewerPose(c||o),_=ae,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let le=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let We=0;We<Me.length;We++){const Oe=Me[We];let Ze=null;if(p!==null)Ze=p.getViewport(Oe);else{const ie=f.getViewSubImage(d,Oe);Ze=ie.viewport,We===0&&(e.setRenderTargetTextures(m,ie.colorTexture,d.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(m))}let Q=E[We];Q===void 0&&(Q=new Zn,Q.layers.enable(We),Q.viewport=new qt,E[We]=Q),Q.matrix.fromArray(Oe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Oe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),We===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Q)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const We=f.getDepthInformation(Me[0]);We&&We.isValid&&We.texture&&y.init(e,We,r.renderState)}}for(let Me=0;Me<v.length;Me++){const le=x[Me],Ie=v[Me];le!==null&&Ie!==void 0&&Ie.update(le,ae,c||o)}pe&&pe(j,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const et=new A_;et.setAnimationLoop(ye),this.setAnimationLoop=function(j){pe=j},this.dispose=function(){}}}const Kr=new Vi,$T=new Lt;function ZT(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,w_(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&p(g,u,x)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Cn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Cn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,x=m.envMapRotation;v&&(g.envMap.value=v,Kr.copy(x),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(Kr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Cn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const x=v.program;i.uniformBlockBinding(m,x)}function c(m,v){let x=r[m.id];x===void 0&&(_(m),x=h(m),r[m.id]=x,m.addEventListener("dispose",g));const P=v.program;i.updateUBOMapping(m,P);const b=e.render.frame;s[m.id]!==b&&(d(m),s[m.id]=b)}function h(m){const v=f();m.__bindingPointIndex=v;const x=t.createBuffer(),P=m.__size,b=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const v=r[m.id],x=m.uniforms,P=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,w=x.length;b<w;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,S=R.length;E<S;E++){const D=R[E];if(p(D,b,E,P)===!0){const B=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let q=0;q<k.length;q++){const G=k[q],te=y(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,B+X,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,x,P){const b=m.value,w=v+"_"+x;if(P[w]===void 0)return typeof b=="number"||typeof b=="boolean"?P[w]=b:P[w]=b.clone(),!0;{const R=P[w];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return P[w]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function _(m){const v=m.uniforms;let x=0;const P=16;for(let w=0,R=v.length;w<R;w++){const E=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,D=E.length;S<D;S++){const B=E[S],k=Array.isArray(B.value)?B.value:[B.value];for(let X=0,q=k.length;X<q;X++){const G=k[X],te=y(G),N=x%P,Z=N%te.boundary,J=N+Z;x+=Z,J!==0&&P-J<te.storage&&(x+=P-J),B.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=te.storage}}}const b=x%P;return b>0&&(x+=P-b),m.__size=x,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class JT{constructor(e={}){const{canvas:n=BM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),y=new Int32Array(4);let g=null,u=null;const m=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=kr,this.toneMappingExposure=1;const x=this;let P=!1,b=0,w=0,R=null,E=-1,S=null;const D=new qt,B=new qt;let k=null;const X=new ee(0);let q=0,G=n.width,te=n.height,N=1,Z=null,J=null;const pe=new qt(0,0,G,te),ye=new qt(0,0,G,te);let et=!1;const j=new np;let ae=!1,Me=!1;const le=new Lt,Ie=new Lt,We=new A,Oe=new qt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ie(){return R===null?N:1}let L=i;function Ne(C,U){return n.getContext(C,U)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",Re,!1),L===null){const U="webgl2";if(L=Ne(U,C),L===null)throw Ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let se,Se,me,ke,be,T,M,O,H,K,W,_e,ue,we,qe,ce,Te,Ve,He,Ue,nt,$e,mt,F;function Ae(){se=new i2(L),se.init(),$e=new VT(L,se),Se=new KE(L,se,e,$e),me=new zT(L,se),Se.reverseDepthBuffer&&d&&me.buffers.depth.setReversed(!0),ke=new o2(L),be=new ET,T=new HT(L,se,me,be,Se,$e,ke),M=new QE(x),O=new n2(x),H=new fS(L),mt=new $E(L,H),K=new r2(L,H,ke,mt),W=new l2(L,K,H,ke),He=new a2(L,Se,T),ce=new JE(be),_e=new wT(x,M,O,se,Se,mt,ce),ue=new ZT(x,be),we=new AT,qe=new DT(se),Ve=new qE(x,M,O,me,W,p,l),Te=new OT(x,W,Se),F=new KT(L,ke,Se,me),Ue=new ZE(L,se,ke),nt=new s2(L,se,ke),ke.programs=_e.programs,x.capabilities=Se,x.extensions=se,x.properties=be,x.renderLists=we,x.shadowMap=Te,x.state=me,x.info=ke}Ae();const $=new qT(x,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(G,te,!1))},this.getSize=function(C){return C.set(G,te)},this.setSize=function(C,U,z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,te=U,n.width=Math.floor(C*N),n.height=Math.floor(U*N),z===!0&&(n.style.width=C+"px",n.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(G*N,te*N).floor()},this.setDrawingBufferSize=function(C,U,z){G=C,te=U,N=z,n.width=Math.floor(C*z),n.height=Math.floor(U*z),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,U,z,V){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,U,z,V),me.viewport(D.copy(pe).multiplyScalar(N).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,U,z,V){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,U,z,V),me.scissor(B.copy(ye).multiplyScalar(N).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(C){me.setScissorTest(et=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(C=!0,U=!0,z=!0){let V=0;if(C){let I=!1;if(R!==null){const fe=R.texture.format;I=fe===Qf||fe===Jf||fe===Kf}if(I){const fe=R.texture.type,Ee=fe===hr||fe===vs||fe===Ba||fe===Ro||fe===qf||fe===$f,Xe=Ve.getClearColor(),ze=Ve.getClearAlpha(),tt=Xe.r,st=Xe.g,Ge=Xe.b;Ee?(_[0]=tt,_[1]=st,_[2]=Ge,_[3]=ze,L.clearBufferuiv(L.COLOR,0,_)):(y[0]=tt,y[1]=st,y[2]=Ge,y[3]=ze,L.clearBufferiv(L.COLOR,0,y))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT),z&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),we.dispose(),qe.dispose(),be.dispose(),M.dispose(),O.dispose(),W.dispose(),mt.dispose(),F.dispose(),_e.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ri),$.removeEventListener("sessionend",On),dt.stop()};function ne(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=ke.autoReset,U=Te.enabled,z=Te.autoUpdate,V=Te.needsUpdate,I=Te.type;Ae(),ke.autoReset=C,Te.enabled=U,Te.autoUpdate=z,Te.needsUpdate=V,Te.type=I}function Re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Je(C){const U=C.target;U.removeEventListener("dispose",Je),gt(U)}function gt(C){Mt(C),be.remove(C)}function Mt(C){const U=be.get(C).programs;U!==void 0&&(U.forEach(function(z){_e.releaseProgram(z)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,z,V,I,fe){U===null&&(U=Ze);const Ee=I.isMesh&&I.matrixWorld.determinant()<0,Xe=As(C,U,z,V,I);me.setMaterial(V,Ee);let ze=z.index,tt=1;if(V.wireframe===!0){if(ze=K.getWireframeAttribute(z),ze===void 0)return;tt=2}const st=z.drawRange,Ge=z.attributes.position;let pt=st.start*tt,At=(st.start+st.count)*tt;fe!==null&&(pt=Math.max(pt,fe.start*tt),At=Math.min(At,(fe.start+fe.count)*tt)),ze!==null?(pt=Math.max(pt,0),At=Math.min(At,ze.count)):Ge!=null&&(pt=Math.max(pt,0),At=Math.min(At,Ge.count));const Dt=At-pt;if(Dt<0||Dt===1/0)return;mt.setup(I,V,Xe,z,ze);let pn,yt=Ue;if(ze!==null&&(pn=H.get(ze),yt=nt,yt.setIndex(pn)),I.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*ie()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(I.isLine){let je=V.linewidth;je===void 0&&(je=1),me.setLineWidth(je*ie()),I.isLineSegments?yt.setMode(L.LINES):I.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else I.isPoints?yt.setMode(L.POINTS):I.isSprite&&yt.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)yt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))yt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const je=I._multiDrawStarts,oi=I._multiDrawCounts,St=I._multiDrawCount,Y=ze?H.get(ze).bytesPerElement:1,ge=be.get(V).currentProgram.getUniforms();for(let xe=0;xe<St;xe++)ge.setValue(L,"_gl_DrawID",xe),yt.render(je[xe]/Y,oi[xe])}else if(I.isInstancedMesh)yt.renderInstances(pt,Dt,I.count);else if(z.isInstancedBufferGeometry){const je=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,oi=Math.min(z.instanceCount,je);yt.renderInstances(pt,Dt,oi)}else yt.render(pt,Dt)};function ht(C,U,z){C.transparent===!0&&C.side===In&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,si(C,U,z),C.side=Vr,C.needsUpdate=!0,si(C,U,z),C.side=In):si(C,U,z)}this.compile=function(C,U,z=null){z===null&&(z=C),u=qe.get(z),u.init(U),v.push(u),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),C!==z&&C.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const V=new Set;return C.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const fe=I.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){const Xe=fe[Ee];ht(Xe,z,I),V.add(Xe)}else ht(fe,z,I),V.add(fe)}),v.pop(),u=null,V},this.compileAsync=function(C,U,z=null){const V=this.compile(C,U,z);return new Promise(I=>{function fe(){if(V.forEach(function(Ee){be.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){I(C);return}setTimeout(fe,10)}se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let $t=null;function Zt(C){$t&&$t(C)}function Ri(){dt.stop()}function On(){dt.start()}const dt=new A_;dt.setAnimationLoop(Zt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(C){$t=C,$.setAnimationLoop(C),C===null?dt.stop():dt.start()},$.addEventListener("sessionstart",Ri),$.addEventListener("sessionend",On),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,U,R),u=qe.get(C,v.length),u.init(U),v.push(u),Ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,ae=ce.init(this.clippingPlanes,Me),g=we.get(C,m.length),g.init(),m.push(g),$.enabled===!0&&$.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&jt(fe,U,-1/0,x.sortObjects)}jt(C,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(Z,J),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&Ve.addToRenderList(g,C),this.info.render.frame++,ae===!0&&ce.beginShadows();const z=u.state.shadowsArray;Te.render(z,C,U),ae===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,I=g.transmissive;if(u.setupLights(),U.isArrayCamera){const fe=U.cameras;if(I.length>0)for(let Ee=0,Xe=fe.length;Ee<Xe;Ee++){const ze=fe[Ee];Kt(V,I,C,ze)}Q&&Ve.render(C);for(let Ee=0,Xe=fe.length;Ee<Xe;Ee++){const ze=fe[Ee];Bt(g,C,ze,ze.viewport)}}else I.length>0&&Kt(V,I,C,U),Q&&Ve.render(C),Bt(g,C,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(x,C,U),mt.resetDefaultState(),E=-1,S=null,v.pop(),v.length>0?(u=v[v.length-1],ae===!0&&ce.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function jt(C,U,z,V){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){V&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ie);const Ee=W.update(C),Xe=C.material;Xe.visible&&g.push(C,Ee,Xe,z,Oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const Ee=W.update(C),Xe=C.material;if(V&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(Ie)),Array.isArray(Xe)){const ze=Ee.groups;for(let tt=0,st=ze.length;tt<st;tt++){const Ge=ze[tt],pt=Xe[Ge.materialIndex];pt&&pt.visible&&g.push(C,Ee,pt,z,Oe.z,Ge)}}else Xe.visible&&g.push(C,Ee,Xe,z,Oe.z,null)}}const fe=C.children;for(let Ee=0,Xe=fe.length;Ee<Xe;Ee++)jt(fe[Ee],U,z,V)}function Bt(C,U,z,V){const I=C.opaque,fe=C.transmissive,Ee=C.transparent;u.setupLightsView(z),ae===!0&&ce.setGlobalState(x.clippingPlanes,z),V&&me.viewport(D.copy(V)),I.length>0&&Qt(I,U,z),fe.length>0&&Qt(fe,U,z),Ee.length>0&&Qt(Ee,U,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Kt(C,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new _s(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Za:hr,minFilter:ls,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const fe=u.state.transmissionRenderTarget[V.id],Ee=V.viewport||D;fe.setSize(Ee.z,Ee.w);const Xe=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(X),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ve.render(z);const ze=x.toneMapping;x.toneMapping=kr;const tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),ae===!0&&ce.setGlobalState(x.clippingPlanes,V),Qt(C,z,V),T.updateMultisampleRenderTarget(fe),T.updateRenderTargetMipmap(fe),se.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ge=0,pt=U.length;Ge<pt;Ge++){const At=U[Ge],Dt=At.object,pn=At.geometry,yt=At.material,je=At.group;if(yt.side===In&&Dt.layers.test(V.layers)){const oi=yt.side;yt.side=Cn,yt.needsUpdate=!0,ri(Dt,z,V,pn,yt,je),yt.side=oi,yt.needsUpdate=!0,st=!0}}st===!0&&(T.updateMultisampleRenderTarget(fe),T.updateRenderTargetMipmap(fe))}x.setRenderTarget(Xe),x.setClearColor(X,q),tt!==void 0&&(V.viewport=tt),x.toneMapping=ze}function Qt(C,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let I=0,fe=C.length;I<fe;I++){const Ee=C[I],Xe=Ee.object,ze=Ee.geometry,tt=V===null?Ee.material:V,st=Ee.group;Xe.layers.test(z.layers)&&ri(Xe,U,z,ze,tt,st)}}function ri(C,U,z,V,I,fe){C.onBeforeRender(x,U,z,V,I,fe),C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),I.onBeforeRender(x,U,z,V,C,fe),I.transparent===!0&&I.side===In&&I.forceSinglePass===!1?(I.side=Cn,I.needsUpdate=!0,x.renderBufferDirect(z,U,V,I,C,fe),I.side=Vr,I.needsUpdate=!0,x.renderBufferDirect(z,U,V,I,C,fe),I.side=In):x.renderBufferDirect(z,U,V,I,C,fe),C.onAfterRender(x,U,z,V,I,fe)}function si(C,U,z){U.isScene!==!0&&(U=Ze);const V=be.get(C),I=u.state.lights,fe=u.state.shadowsArray,Ee=I.state.version,Xe=_e.getParameters(C,I.state,fe,U,z),ze=_e.getProgramCacheKey(Xe);let tt=V.programs;V.environment=C.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(C.isMeshStandardMaterial?O:M).get(C.envMap||V.environment),V.envMapRotation=V.environment!==null&&C.envMap===null?U.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",Je),tt=new Map,V.programs=tt);let st=tt.get(ze);if(st!==void 0){if(V.currentProgram===st&&V.lightsStateVersion===Ee)return Pi(C,Xe),st}else Xe.uniforms=_e.getUniforms(C),C.onBeforeCompile(Xe,x),st=_e.acquireProgram(Xe,ze),tt.set(ze,st),V.uniforms=Xe.uniforms;const Ge=V.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=ce.uniform),Pi(C,Xe),V.needsLights=rt(C),V.lightsStateVersion=Ee,V.needsLights&&(Ge.ambientLightColor.value=I.state.ambient,Ge.lightProbe.value=I.state.probe,Ge.directionalLights.value=I.state.directional,Ge.directionalLightShadows.value=I.state.directionalShadow,Ge.spotLights.value=I.state.spot,Ge.spotLightShadows.value=I.state.spotShadow,Ge.rectAreaLights.value=I.state.rectArea,Ge.ltc_1.value=I.state.rectAreaLTC1,Ge.ltc_2.value=I.state.rectAreaLTC2,Ge.pointLights.value=I.state.point,Ge.pointLightShadows.value=I.state.pointShadow,Ge.hemisphereLights.value=I.state.hemi,Ge.directionalShadowMap.value=I.state.directionalShadowMap,Ge.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ge.spotShadowMap.value=I.state.spotShadowMap,Ge.spotLightMatrix.value=I.state.spotLightMatrix,Ge.spotLightMap.value=I.state.spotLightMap,Ge.pointShadowMap.value=I.state.pointShadowMap,Ge.pointShadowMatrix.value=I.state.pointShadowMatrix),V.currentProgram=st,V.uniformsList=null,st}function yn(C){if(C.uniformsList===null){const U=C.currentProgram.getUniforms();C.uniformsList=lc.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function Pi(C,U){const z=be.get(C);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function As(C,U,z,V,I){U.isScene!==!0&&(U=Ze),T.resetTextureUnits();const fe=U.fog,Ee=V.isMeshStandardMaterial?U.environment:null,Xe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fo,ze=(V.isMeshStandardMaterial?O:M).get(V.envMap||Ee),tt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,st=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ge=!!z.morphAttributes.position,pt=!!z.morphAttributes.normal,At=!!z.morphAttributes.color;let Dt=kr;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const pn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,yt=pn!==void 0?pn.length:0,je=be.get(V),oi=u.state.lights;if(ae===!0&&(Me===!0||C!==S)){const Qe=C===S&&V.id===E;ce.setState(V,C,Qe)}let St=!1;V.version===je.__version?(je.needsLights&&je.lightsStateVersion!==oi.state.version||je.outputColorSpace!==Xe||I.isBatchedMesh&&je.batching===!1||!I.isBatchedMesh&&je.batching===!0||I.isBatchedMesh&&je.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&je.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&je.instancing===!1||!I.isInstancedMesh&&je.instancing===!0||I.isSkinnedMesh&&je.skinning===!1||!I.isSkinnedMesh&&je.skinning===!0||I.isInstancedMesh&&je.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&je.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&je.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&je.instancingMorph===!1&&I.morphTexture!==null||je.envMap!==ze||V.fog===!0&&je.fog!==fe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ce.numPlanes||je.numIntersection!==ce.numIntersection)||je.vertexAlphas!==tt||je.vertexTangents!==st||je.morphTargets!==Ge||je.morphNormals!==pt||je.morphColors!==At||je.toneMapping!==Dt||je.morphTargetsCount!==yt)&&(St=!0):(St=!0,je.__version=V.version);let Y=je.currentProgram;St===!0&&(Y=si(V,U,I));let ge=!1,xe=!1,Le=!1;const oe=Y.getUniforms(),he=je.uniforms;if(me.useProgram(Y.program)&&(ge=!0,xe=!0,Le=!0),V.id!==E&&(E=V.id,xe=!0),ge||S!==C){me.buffers.depth.getReversed()?(le.copy(C.projectionMatrix),VM(le),GM(le),oe.setValue(L,"projectionMatrix",le)):oe.setValue(L,"projectionMatrix",C.projectionMatrix),oe.setValue(L,"viewMatrix",C.matrixWorldInverse);const Ke=oe.map.cameraPosition;Ke!==void 0&&Ke.setValue(L,We.setFromMatrixPosition(C.matrixWorld)),Se.logarithmicDepthBuffer&&oe.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,xe=!0,Le=!0)}if(I.isSkinnedMesh){oe.setOptional(L,I,"bindMatrix"),oe.setOptional(L,I,"bindMatrixInverse");const Qe=I.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),oe.setValue(L,"boneTexture",Qe.boneTexture,T))}I.isBatchedMesh&&(oe.setOptional(L,I,"batchingTexture"),oe.setValue(L,"batchingTexture",I._matricesTexture,T),oe.setOptional(L,I,"batchingIdTexture"),oe.setValue(L,"batchingIdTexture",I._indirectTexture,T),oe.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&oe.setValue(L,"batchingColorTexture",I._colorsTexture,T));const Ye=z.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&He.update(I,z,Y),(xe||je.receiveShadow!==I.receiveShadow)&&(je.receiveShadow=I.receiveShadow,oe.setValue(L,"receiveShadow",I.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(he.envMap.value=ze,he.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(he.envMapIntensity.value=U.environmentIntensity),xe&&(oe.setValue(L,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&it(he,Le),fe&&V.fog===!0&&ue.refreshFogUniforms(he,fe),ue.refreshMaterialUniforms(he,V,N,te,u.state.transmissionRenderTarget[C.id]),lc.upload(L,yn(je),he,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(lc.upload(L,yn(je),he,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(L,"center",I.center),oe.setValue(L,"modelViewMatrix",I.modelViewMatrix),oe.setValue(L,"normalMatrix",I.normalMatrix),oe.setValue(L,"modelMatrix",I.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qe=V.uniformsGroups;for(let Ke=0,Fe=Qe.length;Ke<Fe;Ke++){const at=Qe[Ke];F.update(at,Y),F.bind(at,Y)}}return Y}function it(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function rt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,U,z){be.get(C.texture).__webglTexture=U,be.get(C.depthTexture).__webglTexture=z;const V=be.get(C);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,U){const z=be.get(C);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,z=0){R=C,b=U,w=z;let V=!0,I=null,fe=!1,Ee=!1;if(C){const ze=be.get(C);if(ze.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(ze.__webglFramebuffer===void 0)T.setupRenderTarget(C);else if(ze.__hasExternalTextures)T.rebindTextures(C,be.get(C.texture).__webglTexture,be.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(ze.__boundDepthTexture!==Ge){if(Ge!==null&&be.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ee=!0);const st=be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[U])?I=st[U][z]:I=st[U],fe=!0):C.samples>0&&T.useMultisampledRTT(C)===!1?I=be.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?I=st[z]:I=st,D.copy(C.viewport),B.copy(C.scissor),k=C.scissorTest}else D.copy(pe).multiplyScalar(N).floor(),B.copy(ye).multiplyScalar(N).floor(),k=et;if(me.bindFramebuffer(L.FRAMEBUFFER,I)&&V&&me.drawBuffers(C,I),me.viewport(D),me.scissor(B),me.setScissorTest(k),fe){const ze=be.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ze.__webglTexture,z)}else if(Ee){const ze=be.get(C.texture),tt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,z||0,tt)}E=-1},this.readRenderTargetPixels=function(C,U,z,V,I,fe,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Xe=Xe[Ee]),Xe){me.bindFramebuffer(L.FRAMEBUFFER,Xe);try{const ze=C.texture,tt=ze.format,st=ze.type;if(!Se.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-V&&z>=0&&z<=C.height-I&&L.readPixels(U,z,V,I,$e.convert(tt),$e.convert(st),fe)}finally{const ze=R!==null?be.get(R).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,U,z,V,I,fe,Ee){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Xe=Xe[Ee]),Xe){const ze=C.texture,tt=ze.format,st=ze.type;if(!Se.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=C.width-V&&z>=0&&z<=C.height-I){me.bindFramebuffer(L.FRAMEBUFFER,Xe);const Ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(U,z,V,I,$e.convert(tt),$e.convert(st),0);const pt=R!==null?be.get(R).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,pt);const At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await HM(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.deleteBuffer(Ge),L.deleteSync(At),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,U=null,z=0){C.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,C=arguments[1]);const V=Math.pow(2,-z),I=Math.floor(C.image.width*V),fe=Math.floor(C.image.height*V),Ee=U!==null?U.x:0,Xe=U!==null?U.y:0;T.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,Ee,Xe,I,fe),me.unbindTexture()},this.copyTextureToTexture=function(C,U,z=null,V=null,I=0){C.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1],U=arguments[2],I=arguments[3]||0,z=null);let fe,Ee,Xe,ze,tt,st,Ge,pt,At;const Dt=C.isCompressedTexture?C.mipmaps[I]:C.image;z!==null?(fe=z.max.x-z.min.x,Ee=z.max.y-z.min.y,Xe=z.isBox3?z.max.z-z.min.z:1,ze=z.min.x,tt=z.min.y,st=z.isBox3?z.min.z:0):(fe=Dt.width,Ee=Dt.height,Xe=Dt.depth||1,ze=0,tt=0,st=0),V!==null?(Ge=V.x,pt=V.y,At=V.z):(Ge=0,pt=0,At=0);const pn=$e.convert(U.format),yt=$e.convert(U.type);let je;U.isData3DTexture?(T.setTexture3D(U,0),je=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),je=L.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),je=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const oi=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Y=L.getParameter(L.UNPACK_SKIP_PIXELS),ge=L.getParameter(L.UNPACK_SKIP_ROWS),xe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,st);const Le=C.isDataArrayTexture||C.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const he=be.get(C),Ye=be.get(U),Qe=be.get(he.__renderTarget),Ke=be.get(Ye.__renderTarget);me.bindFramebuffer(L.READ_FRAMEBUFFER,Qe.__webglFramebuffer),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Fe=0;Fe<Xe;Fe++)Le&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(C).__webglTexture,I,st+Fe),C.isDepthTexture?(oe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(U).__webglTexture,I,At+Fe),L.blitFramebuffer(ze,tt,fe,Ee,Ge,pt,fe,Ee,L.DEPTH_BUFFER_BIT,L.NEAREST)):oe?L.copyTexSubImage3D(je,I,Ge,pt,At+Fe,ze,tt,fe,Ee):L.copyTexSubImage2D(je,I,Ge,pt,At+Fe,ze,tt,fe,Ee);me.bindFramebuffer(L.READ_FRAMEBUFFER,null),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else oe?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(je,I,Ge,pt,At,fe,Ee,Xe,pn,yt,Dt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(je,I,Ge,pt,At,fe,Ee,Xe,pn,Dt.data):L.texSubImage3D(je,I,Ge,pt,At,fe,Ee,Xe,pn,yt,Dt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,Ge,pt,fe,Ee,pn,yt,Dt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,Ge,pt,Dt.width,Dt.height,pn,Dt.data):L.texSubImage2D(L.TEXTURE_2D,I,Ge,pt,fe,Ee,pn,yt,Dt);L.pixelStorei(L.UNPACK_ROW_LENGTH,oi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Y),L.pixelStorei(L.UNPACK_SKIP_ROWS,ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xe),I===0&&U.generateMipmaps&&L.generateMipmap(je),me.unbindTexture()},this.copyTextureToTexture3D=function(C,U,z=null,V=null,I=0){return C.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,C=arguments[2],U=arguments[3],I=arguments[4]||0),oa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,U,z,V,I)},this.initRenderTarget=function(C){be.get(C).__webglFramebuffer===void 0&&T.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),me.unbindTexture()},this.resetState=function(){b=0,w=0,R=null,me.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),n.unpackColorSpace=_t._getUnpackColorSpace()}}class Fc{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(e),this.density=n}clone(){return new Fc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class I_ extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class QT extends bn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=ei,h=ei,f,d){super(null,o,a,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v0 extends jn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vs=new Lt,_0=new Lt,Fl=[],x0=new Ts,eA=new Lt,Qo=new re,ea=new Oo;class la extends re{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new v0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,eA)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Vs),x0.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(x0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Vs),ea.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(ea)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(i),e.ray.intersectsSphere(ea)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vs),_0.multiplyMatrices(i,Vs),Qo.matrixWorld=_0,Qo.raycast(e,Fl);for(let o=0,a=Fl.length;o<a;o++){const l=Fl[o];l.instanceId=s,l.object=this,n.push(l)}Fl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new v0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new QT(new Float32Array(r*this.count),r,this.count,Zf,Oi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class N_ extends ko{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y0=new Lt,qd=new tp,Ol=new Oo,kl=new A;class tA extends zt{constructor(e=new rn,n=new N_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(r),Ol.radius+=s,e.ray.intersectsSphere(Ol)===!1)return;y0.copy(r).invert(),qd.copy(e.ray).applyMatrix4(y0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,y=p;_<y;_++){const g=c.getX(_);kl.fromBufferAttribute(f,g),M0(kl,g,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,y=p;_<y;_++)kl.fromBufferAttribute(f,_),M0(kl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function M0(t,e,n,i,r,s,o){const a=qd.distanceSqToPoint(t);if(a<n){const l=new A;qd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class mi extends bn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new de:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new A,r=[],s=[],o=[],a=new A,l=new Lt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(tn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(tn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rp extends Gi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new de){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nA extends rp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const zl=new A,lh=new sp,ch=new sp,uh=new sp;class Ii extends Gi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new A){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(zl.subVectors(r[0],r[1]).add(r[0]),c=zl);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(zl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),lh.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,y,g),ch.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,y,g),uh.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,y,g)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),ch.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),uh.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(lh.calc(l),ch.calc(l),uh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function S0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function iA(t,e){const n=1-t;return n*n*e}function rA(t,e){return 2*(1-t)*t*e}function sA(t,e){return t*t*e}function ya(t,e,n,i){return iA(t,e)+rA(t,n)+sA(t,i)}function oA(t,e){const n=1-t;return n*n*n*e}function aA(t,e){const n=1-t;return 3*n*n*t*e}function lA(t,e){return 3*(1-t)*t*t*e}function cA(t,e){return t*t*t*e}function Ma(t,e,n,i,r){return oA(t,e)+aA(t,n)+lA(t,i)+cA(t,r)}class U_ extends Gi{constructor(e=new de,n=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ma(e,r.x,s.x,o.x,a.x),Ma(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uA extends Gi{constructor(e=new A,n=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new A){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ma(e,r.x,s.x,o.x,a.x),Ma(e,r.y,s.y,o.y,a.y),Ma(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class F_ extends Gi{constructor(e=new de,n=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new de){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new de){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hA extends Gi{constructor(e=new A,n=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new A){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new A){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O_ extends Gi{constructor(e=new de,n=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ya(e,r.x,s.x,o.x),ya(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k_ extends Gi{constructor(e=new A,n=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new A){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ya(e,r.x,s.x,o.x),ya(e,r.y,s.y,o.y),ya(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z_ extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new de){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(S0(a,l.x,c.x,h.x,f.x),S0(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new de().fromArray(r))}return this}}var Oc=Object.freeze({__proto__:null,ArcCurve:nA,CatmullRomCurve3:Ii,CubicBezierCurve:U_,CubicBezierCurve3:uA,EllipseCurve:rp,LineCurve:F_,LineCurve3:hA,QuadraticBezierCurve:O_,QuadraticBezierCurve3:k_,SplineCurve:z_});class dA extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oc[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Oc[r.type]().fromJSON(r))}return this}}class Ha extends dA{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new F_(this.currentPoint.clone(),new de(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new O_(this.currentPoint.clone(),new de(e,n),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new U_(this.currentPoint.clone(),new de(e,n),new de(i,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new z_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new rp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class op extends rn{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=tn(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/n,f=new A,d=new de,p=new A,_=new A,y=new A;let g=0,u=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:g=e[m+1].x-e[m].x,u=e[m+1].y-e[m].y,p.x=u*1,p.y=-g,p.z=u*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[m+1].x-e[m].x,u=e[m+1].y-e[m].y,p.x=u*1,p.y=-g,p.z=u*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let m=0;m<=n;m++){const v=i+m*h*r,x=Math.sin(v),P=Math.cos(v);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*x,f.y=e[b].y,f.z=e[b].x*P,o.push(f.x,f.y,f.z),d.x=m/n,d.y=b/(e.length-1),a.push(d.x,d.y);const w=l[3*b+0]*x,R=l[3*b+1],E=l[3*b+0]*P;c.push(w,R,E)}}for(let m=0;m<n;m++)for(let v=0;v<e.length-1;v++){const x=v+m*e.length,P=x,b=x+e.length,w=x+e.length+1,R=x+1;s.push(P,b,R),s.push(w,R,b)}this.setIndex(s),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.points,e.segments,e.phiStart,e.phiLength)}}class ap extends op{constructor(e=1,n=1,i=4,r=8){const s=new Ha;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new ap(e.radius,e.length,e.capSegments,e.radialSegments)}}class lp extends rn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new A,h=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rt extends rn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let _=0;const y=[],g=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function m(){const x=new A,P=new A;let b=0;const w=(n-e)/i;for(let R=0;R<=s;R++){const E=[],S=R/s,D=S*(n-e)+e;for(let B=0;B<=r;B++){const k=B/r,X=k*l+a,q=Math.sin(X),G=Math.cos(X);P.x=D*q,P.y=-S*i+g,P.z=D*G,f.push(P.x,P.y,P.z),x.set(q,w,G).normalize(),d.push(x.x,x.y,x.z),p.push(k,1-S),E.push(_++)}y.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){const S=y[E][R],D=y[E+1][R],B=y[E+1][R+1],k=y[E][R+1];(e>0||E!==0)&&(h.push(S,D,k),b+=3),(n>0||E!==s-1)&&(h.push(D,B,k),b+=3)}c.addGroup(u,b,0),u+=b}function v(x){const P=_,b=new de,w=new A;let R=0;const E=x===!0?e:n,S=x===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,g*S,0),d.push(0,S,0),p.push(.5,.5),_++;const D=_;for(let B=0;B<=r;B++){const X=B/r*l+a,q=Math.cos(X),G=Math.sin(X);w.x=E*G,w.y=g*S,w.z=E*q,f.push(w.x,w.y,w.z),d.push(0,S,0),b.x=q*.5+.5,b.y=G*.5*S+.5,p.push(b.x,b.y),_++}for(let B=0;B<r;B++){const k=P+B,X=D+B;x===!0?h.push(X,X+1,k):h.push(X+1,X,k),R+=3}c.addGroup(u,R,x===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends Rt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ru extends rn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(s.slice(),3)),this.setAttribute("uv",new ct(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new A,x=new A,P=new A;for(let b=0;b<n.length;b+=3)p(n[b+0],v),p(n[b+1],x),p(n[b+2],P),l(v,x,P,m)}function l(m,v,x,P){const b=P+1,w=[];for(let R=0;R<=b;R++){w[R]=[];const E=m.clone().lerp(x,R/b),S=v.clone().lerp(x,R/b),D=b-R;for(let B=0;B<=D;B++)B===0&&R===b?w[R][B]=E:w[R][B]=E.clone().lerp(S,B/D)}for(let R=0;R<b;R++)for(let E=0;E<2*(b-R)-1;E++){const S=Math.floor(E/2);E%2===0?(d(w[R][S+1]),d(w[R+1][S]),d(w[R][S])):(d(w[R][S+1]),d(w[R+1][S+1]),d(w[R+1][S]))}}function c(m){const v=new A;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(m),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function h(){const m=new A;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const x=g(m)/2/Math.PI+.5,P=u(m)/Math.PI+.5;o.push(x,1-P)}_(),f()}function f(){for(let m=0;m<o.length;m+=6){const v=o[m+0],x=o[m+2],P=o[m+4],b=Math.max(v,x,P),w=Math.min(v,x,P);b>.9&&w<.1&&(v<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),P<.2&&(o[m+4]+=1))}}function d(m){s.push(m.x,m.y,m.z)}function p(m,v){const x=m*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function _(){const m=new A,v=new A,x=new A,P=new A,b=new de,w=new de,R=new de;for(let E=0,S=0;E<s.length;E+=9,S+=6){m.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),b.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),P.copy(m).add(v).add(x).divideScalar(3);const D=g(P);y(b,S+0,m,D),y(w,S+2,v,D),y(R,S+4,x,D)}}function y(m,v,x,P){P<0&&m.x===1&&(o[v]=m.x-1),x.x===0&&x.z===0&&(o[v]=P/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.vertices,e.indices,e.radius,e.details)}}class rs extends ru{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new rs(e.radius,e.detail)}}class Bo extends Ha{constructor(e){super(e),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Ha().fromJSON(r))}return this}}const fA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=B_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,d,p;if(i&&(s=_A(t,e,s,n)),t.length>80*n){a=c=t[0],l=h=t[1];for(let _=n;_<r;_+=n)f=t[_],d=t[_+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Va(s,o,n,a,l,p,0),o}};function B_(t,e,n,i,r){let s,o;if(r===RA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=w0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=w0(s,t[s],t[s+1],o);return o&&su(o,o.next)&&(Wa(o),o=o.next),o}function ys(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(su(n,n.next)||Gt(n.prev,n,n.next)===0)){if(Wa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Va(t,e,n,i,r,s,o){if(!t)return;!o&&s&&wA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?mA(t,i,r,s):pA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Wa(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=gA(ys(t),e,n),Va(t,e,n,i,r,s,2)):o===2&&vA(t,e,n,i,r,s):Va(ys(t),e,n,i,r,s,1);break}}}function pA(t){const e=t.prev,n=t,i=t.next;if(Gt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=p&&oo(r,a,s,l,o,c,_.x,_.y)&&Gt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function mA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,_=h<f?h<d?h:d:f<d?f:d,y=a>l?a>c?a:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,u=$d(p,_,e,n,i),m=$d(y,g,e,n,i);let v=t.prevZ,x=t.nextZ;for(;v&&v.z>=u&&x&&x.z<=m;){if(v.x>=p&&v.x<=y&&v.y>=_&&v.y<=g&&v!==r&&v!==o&&oo(a,h,l,f,c,d,v.x,v.y)&&Gt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=y&&x.y>=_&&x.y<=g&&x!==r&&x!==o&&oo(a,h,l,f,c,d,x.x,x.y)&&Gt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=u;){if(v.x>=p&&v.x<=y&&v.y>=_&&v.y<=g&&v!==r&&v!==o&&oo(a,h,l,f,c,d,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=m;){if(x.x>=p&&x.x<=y&&x.y>=_&&x.y<=g&&x!==r&&x!==o&&oo(a,h,l,f,c,d,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!su(r,s)&&H_(r,i,i.next,s)&&Ga(r,s)&&Ga(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Wa(i),Wa(i.next),i=t=s),i=i.next}while(i!==t);return ys(i)}function vA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&AA(o,a)){let l=V_(o,a);o=ys(o,o.next),l=ys(l,l.next),Va(o,e,n,i,r,s,0),Va(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function _A(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=B_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(TA(c));for(r.sort(xA),s=0;s<r.length;s++)n=yA(r[s],n);return n}function xA(t,e){return t.x-e.x}function yA(t,e){const n=MA(t,e);if(!n)return e;const i=V_(n,t);return ys(i,i.next),ys(n,n.next)}function MA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&oo(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),Ga(n,t)&&(f<h||f===h&&(n.x>r.x||n.x===r.x&&SA(r,n)))&&(r=n,h=f)),n=n.next;while(n!==a);return r}function SA(t,e){return Gt(t.prev,t,e.prev)<0&&Gt(e.next,t,t.next)<0}function wA(t,e,n,i){let r=t;do r.z===0&&(r.z=$d(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,EA(r)}function EA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function $d(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function TA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function oo(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function AA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!CA(t,e)&&(Ga(t,e)&&Ga(e,t)&&bA(t,e)&&(Gt(t.prev,t,e.prev)||Gt(t,e.prev,e))||su(t,e)&&Gt(t.prev,t,t.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function su(t,e){return t.x===e.x&&t.y===e.y}function H_(t,e,n,i){const r=Hl(Gt(t,e,n)),s=Hl(Gt(t,e,i)),o=Hl(Gt(n,i,t)),a=Hl(Gt(n,i,e));return!!(r!==s&&o!==a||r===0&&Bl(t,n,e)||s===0&&Bl(t,i,e)||o===0&&Bl(n,t,i)||a===0&&Bl(n,e,i))}function Bl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Hl(t){return t>0?1:t<0?-1:0}function CA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&H_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ga(t,e){return Gt(t.prev,t,t.next)<0?Gt(t,e,t.next)>=0&&Gt(t,t.prev,e)>=0:Gt(t,e,t.prev)<0||Gt(t,t.next,e)<0}function bA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function V_(t,e){const n=new Zd(t.i,t.x,t.y),i=new Zd(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function w0(t,e,n,i){const r=new Zd(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Wa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Zd(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function RA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class zr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return zr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];E0(e),T0(i,e);let o=e.length;n.forEach(E0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,T0(i,n[l]);const a=fA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function E0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function T0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ka extends rn{constructor(e=new Bo([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const u=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:PA;let v,x=!1,P,b,w,R;u&&(v=u.getSpacedPoints(h),x=!0,d=!1,P=u.computeFrenetFrames(h,!1),b=new A,w=new A,R=new A),d||(g=0,p=0,_=0,y=0);const E=a.extractPoints(c);let S=E.shape;const D=E.holes;if(!zr.isClockWise(S)){S=S.reverse();for(let Q=0,ie=D.length;Q<ie;Q++){const L=D[Q];zr.isClockWise(L)&&(D[Q]=L.reverse())}}const k=zr.triangulateShape(S,D),X=S;for(let Q=0,ie=D.length;Q<ie;Q++){const L=D[Q];S=S.concat(L)}function q(Q,ie,L){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ie,L)}const G=S.length,te=k.length;function N(Q,ie,L){let Ne,se,Se;const me=Q.x-ie.x,ke=Q.y-ie.y,be=L.x-Q.x,T=L.y-Q.y,M=me*me+ke*ke,O=me*T-ke*be;if(Math.abs(O)>Number.EPSILON){const H=Math.sqrt(M),K=Math.sqrt(be*be+T*T),W=ie.x-ke/H,_e=ie.y+me/H,ue=L.x-T/K,we=L.y+be/K,qe=((ue-W)*T-(we-_e)*be)/(me*T-ke*be);Ne=W+me*qe-Q.x,se=_e+ke*qe-Q.y;const ce=Ne*Ne+se*se;if(ce<=2)return new de(Ne,se);Se=Math.sqrt(ce/2)}else{let H=!1;me>Number.EPSILON?be>Number.EPSILON&&(H=!0):me<-Number.EPSILON?be<-Number.EPSILON&&(H=!0):Math.sign(ke)===Math.sign(T)&&(H=!0),H?(Ne=-ke,se=me,Se=Math.sqrt(M)):(Ne=me,se=ke,Se=Math.sqrt(M/2))}return new de(Ne/Se,se/Se)}const Z=[];for(let Q=0,ie=X.length,L=ie-1,Ne=Q+1;Q<ie;Q++,L++,Ne++)L===ie&&(L=0),Ne===ie&&(Ne=0),Z[Q]=N(X[Q],X[L],X[Ne]);const J=[];let pe,ye=Z.concat();for(let Q=0,ie=D.length;Q<ie;Q++){const L=D[Q];pe=[];for(let Ne=0,se=L.length,Se=se-1,me=Ne+1;Ne<se;Ne++,Se++,me++)Se===se&&(Se=0),me===se&&(me=0),pe[Ne]=N(L[Ne],L[Se],L[me]);J.push(pe),ye=ye.concat(pe)}for(let Q=0;Q<g;Q++){const ie=Q/g,L=p*Math.cos(ie*Math.PI/2),Ne=_*Math.sin(ie*Math.PI/2)+y;for(let se=0,Se=X.length;se<Se;se++){const me=q(X[se],Z[se],Ne);le(me.x,me.y,-L)}for(let se=0,Se=D.length;se<Se;se++){const me=D[se];pe=J[se];for(let ke=0,be=me.length;ke<be;ke++){const T=q(me[ke],pe[ke],Ne);le(T.x,T.y,-L)}}}const et=_+y;for(let Q=0;Q<G;Q++){const ie=d?q(S[Q],ye[Q],et):S[Q];x?(w.copy(P.normals[0]).multiplyScalar(ie.x),b.copy(P.binormals[0]).multiplyScalar(ie.y),R.copy(v[0]).add(w).add(b),le(R.x,R.y,R.z)):le(ie.x,ie.y,0)}for(let Q=1;Q<=h;Q++)for(let ie=0;ie<G;ie++){const L=d?q(S[ie],ye[ie],et):S[ie];x?(w.copy(P.normals[Q]).multiplyScalar(L.x),b.copy(P.binormals[Q]).multiplyScalar(L.y),R.copy(v[Q]).add(w).add(b),le(R.x,R.y,R.z)):le(L.x,L.y,f/h*Q)}for(let Q=g-1;Q>=0;Q--){const ie=Q/g,L=p*Math.cos(ie*Math.PI/2),Ne=_*Math.sin(ie*Math.PI/2)+y;for(let se=0,Se=X.length;se<Se;se++){const me=q(X[se],Z[se],Ne);le(me.x,me.y,f+L)}for(let se=0,Se=D.length;se<Se;se++){const me=D[se];pe=J[se];for(let ke=0,be=me.length;ke<be;ke++){const T=q(me[ke],pe[ke],Ne);x?le(T.x,T.y+v[h-1].y,v[h-1].x+L):le(T.x,T.y,f+L)}}}j(),ae();function j(){const Q=r.length/3;if(d){let ie=0,L=G*ie;for(let Ne=0;Ne<te;Ne++){const se=k[Ne];Ie(se[2]+L,se[1]+L,se[0]+L)}ie=h+g*2,L=G*ie;for(let Ne=0;Ne<te;Ne++){const se=k[Ne];Ie(se[0]+L,se[1]+L,se[2]+L)}}else{for(let ie=0;ie<te;ie++){const L=k[ie];Ie(L[2],L[1],L[0])}for(let ie=0;ie<te;ie++){const L=k[ie];Ie(L[0]+G*h,L[1]+G*h,L[2]+G*h)}}i.addGroup(Q,r.length/3-Q,0)}function ae(){const Q=r.length/3;let ie=0;Me(X,ie),ie+=X.length;for(let L=0,Ne=D.length;L<Ne;L++){const se=D[L];Me(se,ie),ie+=se.length}i.addGroup(Q,r.length/3-Q,1)}function Me(Q,ie){let L=Q.length;for(;--L>=0;){const Ne=L;let se=L-1;se<0&&(se=Q.length-1);for(let Se=0,me=h+g*2;Se<me;Se++){const ke=G*Se,be=G*(Se+1),T=ie+Ne+ke,M=ie+se+ke,O=ie+se+be,H=ie+Ne+be;We(T,M,O,H)}}}function le(Q,ie,L){l.push(Q),l.push(ie),l.push(L)}function Ie(Q,ie,L){Oe(Q),Oe(ie),Oe(L);const Ne=r.length/3,se=m.generateTopUV(i,r,Ne-3,Ne-2,Ne-1);Ze(se[0]),Ze(se[1]),Ze(se[2])}function We(Q,ie,L,Ne){Oe(Q),Oe(ie),Oe(Ne),Oe(ie),Oe(L),Oe(Ne);const se=r.length/3,Se=m.generateSideWallUV(i,r,se-6,se-3,se-2,se-1);Ze(Se[0]),Ze(Se[1]),Ze(Se[3]),Ze(Se[1]),Ze(Se[2]),Ze(Se[3])}function Oe(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function Ze(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return LA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Oc[r.type]().fromJSON(r)),new Ka(i,e.options)}}const PA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],d=e[r*3],p=e[r*3+1],_=e[r*3+2],y=e[s*3],g=e[s*3+1],u=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-f),new de(d,1-_),new de(y,1-u)]:[new de(a,1-l),new de(h,1-f),new de(p,1-_),new de(g,1-u)]}};function LA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class kc extends ru{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new kc(e.radius,e.detail)}}class cp extends rn{constructor(e=new Bo([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(s,3)),this.setAttribute("uv",new ct(o,2));function c(h){const f=r.length/3,d=h.extractPoints(n);let p=d.shape;const _=d.holes;zr.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,u=_.length;g<u;g++){const m=_[g];zr.isClockWise(m)===!0&&(_[g]=m.reverse())}const y=zr.triangulateShape(p,_);for(let g=0,u=_.length;g<u;g++){const m=_[g];p=p.concat(m)}for(let g=0,u=p.length;g<u;g++){const m=p[g];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let g=0,u=y.length;g<u;g++){const m=y[g],v=m[0]+f,x=m[1]+f,P=m[2]+f;i.push(v,x,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return DA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new cp(i,e.curveSegments)}}function DA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class bt extends rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new A,d=new A,p=[],_=[],y=[],g=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let P=0;P<=n;P++){const b=P/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),g.push(b+x,1-v),m.push(c++)}h.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=h[u][m+1],x=h[u][m],P=h[u+1][m],b=h[u+1][m+1];(u!==0||o>0)&&p.push(v,x,b),(u!==i-1||l<Math.PI)&&p.push(x,P,b)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hs extends rn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new A,f=new A,d=new A;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const y=_/r*s,g=p/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(y),f.y=(e+n*Math.cos(g))*Math.sin(y),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const y=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(y,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ji extends rn{constructor(e=new k_(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new de;let h=new A;const f=[],d=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function y(){for(let v=0;v<n;v++)g(v);g(s===!1?n:0),m(),u()}function g(v){h=e.getPointAt(v/n,h);const x=o.normals[v],P=o.binormals[v];for(let b=0;b<=r;b++){const w=b/r*Math.PI*2,R=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+R*P.x,l.y=E*x.y+R*P.y,l.z=E*x.z+R*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let x=1;x<=r;x++){const P=(r+1)*(v-1)+(x-1),b=(r+1)*v+(x-1),w=(r+1)*v+x,R=(r+1)*(v-1)+x;_.push(P,b,R),_.push(b,w,R)}}function m(){for(let v=0;v<=n;v++)for(let x=0;x<=r;x++)c.x=v/n,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ji(new Oc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class wt extends ko{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=p_,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends wt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ou extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class IA extends ou{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const hh=new Lt,A0=new A,C0=new A;class G_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;A0.setFromMatrixPosition(e.matrixWorld),n.position.copy(A0),C0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(C0),n.updateMatrixWorld(),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class NA extends G_{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Lo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class UA extends ou{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new NA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class FA extends G_{constructor(){super(new C_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b0 extends ou{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new FA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class OA extends ou{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class R0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kA extends ws{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);const P0={type:"change"},up={type:"start"},W_={type:"end"},Vl=new tp,L0=new wr,zA=Math.cos(70*vt.DEG2RAD),sn=new A,Bn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dh=1e-6;class BA extends kA{constructor(e,n=null){super(e,n),this.state=Nt.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:po.ROTATE,MIDDLE:po.DOLLY,RIGHT:po.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new xs,this._lastTargetPosition=new A,this._quat=new xs().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new R0,this._sphericalDelta=new R0,this._scale=1,this._panOffset=new A,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new A,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VA.bind(this),this._onPointerDown=HA.bind(this),this._onPointerUp=GA.bind(this),this._onContextMenu=ZA.bind(this),this._onMouseWheel=jA.bind(this),this._onKeyDown=YA.bind(this),this._onTouchStart=qA.bind(this),this._onTouchMove=$A.bind(this),this._onMouseDown=WA.bind(this),this._onMouseMove=XA.bind(this),this._interceptControlDown=KA.bind(this),this._interceptControlUp=JA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(P0),this.update(),this.state=Nt.NONE}update(e=null){const n=this.object.position;sn.copy(n).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Bn:i>Math.PI&&(i-=Bn),r<-Math.PI?r+=Bn:r>Math.PI&&(r-=Bn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),n.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=sn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<zA?this.object.lookAt(this.target):(L0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(L0,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dh||this._lastTargetPosition.distanceToSquared(this.target)>dh?(this.dispatchEvent(P0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){sn.setFromMatrixColumn(n,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,n){this.screenSpacePanning===!0?sn.setFromMatrixColumn(n,1):(sn.setFromMatrixColumn(n,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;sn.copy(r).sub(this.target);let s=sn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new de,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function HA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function VA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function GA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W_),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function WA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case po.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Nt.DOLLY;break;case po.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Nt.ROTATE}break;case po.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(up)}function XA(t){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function jA(t){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(t.preventDefault(),this.dispatchEvent(up),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(W_))}function YA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function qA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Nt.TOUCH_ROTATE;break;case ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Nt.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(up)}function $A(t){switch(this._trackPointer(t),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Nt.NONE}}function ZA(t){this.enabled!==!1&&t.preventDefault()}function KA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function JA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const X_={teal:1342082,crimson:11019296,mustard:13927186,sage:4617548};function QA(t){const e=new jd(t);e.compileCubemapShader();const n=new I_,i=new bt(50,32,24),r=i.attributes.position,s=new Float32Array(r.count*3),o=new ee(6071528),a=new ee(16773332),l=new ee(5601854),c=new ee;for(let p=0;p<r.count;p++){const _=r.getY(p)/50;_>=0?c.lerpColors(a,o,Math.pow(_,.55)):c.lerpColors(a,l,Math.min(1,-_*2.5)),s[p*3]=c.r,s[p*3+1]=c.g,s[p*3+2]=c.b}i.setAttribute("color",new jn(s,3));const h=new Hi({vertexColors:!0,side:Cn});n.add(new re(i,h));const f=new re(new bt(4.5,16,12),new Hi({color:new ee(16775399).multiplyScalar(2.2)}));f.position.set(22,26,18),n.add(f);const d=e.fromScene(n,.035);return e.dispose(),i.dispose(),h.dispose(),d.texture}function eC(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.clearRect(0,0,256,256);const n=e.createRadialGradient(128,128,6,128,128,124);return n.addColorStop(0,"rgba(15, 22, 12, 0.78)"),n.addColorStop(.35,"rgba(18, 26, 14, 0.48)"),n.addColorStop(.7,"rgba(20, 28, 15, 0.14)"),n.addColorStop(1,"rgba(20, 28, 15, 0.0)"),e.fillStyle=n,e.fillRect(0,0,256,256),new mi(t)}function tC(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,512,512),i.fillStyle="#fcfaf4",i.fillRect(0,0,512,512);const r=20,s=14,o=512/s,a=512/r;for(let h=-1;h<r+2;h++)for(let f=-1;f<s+2;f++){const d=(f+h%2*.5)*o,p=h*a,_=e.createRadialGradient(d,p-a*.18,2,d,p,o*.72);_.addColorStop(0,"#f2f2f2"),_.addColorStop(.68,"#9e9e9e"),_.addColorStop(1,"#5c5c5c"),e.fillStyle=_,e.beginPath(),e.ellipse(d,p,o*.54,a*.68,0,0,Math.PI*2),e.fill();const y=i.createRadialGradient(d,p-a*.15,2,d,p,o*.72);y.addColorStop(0,"#ffffff"),y.addColorStop(.75,"#f9f5eb"),y.addColorStop(1,"#ede5d2"),i.fillStyle=y,i.beginPath(),i.ellipse(d,p,o*.54,a*.68,0,0,Math.PI*2),i.fill(),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=1,e.beginPath(),e.moveTo(d,p-a*.45),e.lineTo(d,p+a*.48),e.stroke()}const l=new mi(t);l.wrapS=vn,l.wrapT=vn,l.repeat.set(3,3);const c=new mi(n);return c.colorSpace=gn,c.wrapS=vn,c.wrapT=vn,c.repeat.set(3,3),{albedo:c,bump:l}}function nC(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#f77f1e"),n.addColorStop(.45,"#ff9d33"),n.addColorStop(.82,"#f2781b"),n.addColorStop(1,"#d95811"),e.fillStyle=n,e.fillRect(0,0,512,512);const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,512,512);const s=32;for(let l=0;l<s;l++){const c=l/s*512,h=512/s,f=e.createLinearGradient(c,0,c+h,0);f.addColorStop(0,"rgba(135, 38, 0, 0.14)"),f.addColorStop(.5,"rgba(255, 228, 168, 0.20)"),f.addColorStop(1,"rgba(135, 38, 0, 0.14)"),e.fillStyle=f,e.fillRect(c,0,h,512);const d=r.createLinearGradient(c,0,c+h,0);d.addColorStop(0,"#555555"),d.addColorStop(.5,"#d8d8d8"),d.addColorStop(1,"#555555"),r.fillStyle=d,r.fillRect(c,0,h,512)}const o=new mi(t);o.colorSpace=gn,o.wrapS=vn,o.wrapT=vn;const a=new mi(i);return a.wrapS=vn,a.wrapT=vn,{map:o,bump:a}}function iC(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(128,128,16,128,128,150);n.addColorStop(0,"#8c4922"),n.addColorStop(.7,"#6e3616"),n.addColorStop(1,"#4f240c"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,256,256);let s=91;const o=()=>(s=s*16807%2147483647,(s-1)/2147483646);for(let c=0;c<900;c++){const h=o()*256,f=o()*256,d=1.5+o()*2.5;e.fillStyle=o()>.5?"rgba(255,210,170,0.05)":"rgba(30,10,0,0.08)",e.beginPath(),e.arc(h,f,d,0,Math.PI*2),e.fill(),r.fillStyle=o()>.5?"#9c9c9c":"#666666",r.beginPath(),r.arc(h,f,d,0,Math.PI*2),r.fill()}const a=new mi(t);a.colorSpace=gn;const l=new mi(i);return{map:a,bump:l}}function rC(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#505050",e.fillRect(0,0,256,256),e.strokeStyle="#d8d8d8",e.lineWidth=5;for(let i=0;i<256;i+=14)e.beginPath(),e.moveTo(28,i),e.lineTo(128,i+9),e.lineTo(228,i),e.stroke();const n=new mi(t);return n.wrapS=vn,n.wrapT=vn,n.repeat.set(28,2),n}function sC(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=32;for(let r=0;r<256;r+=n){const s=r/n%2===0;e.fillStyle=s?"#c93227":"#f7EFE0",e.fillRect(0,r,256,n),e.fillStyle="#e59b18",e.fillRect(0,r+n-4,256,3)}e.fillStyle="rgba(0,0,0,0.07)";for(let r=0;r<256;r+=5)e.fillRect(r,0,2,256);const i=new mi(t);return i.colorSpace=gn,i.wrapS=vn,i.wrapT=vn,i.repeat.set(2,2),i}function oC(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d"),n=document.createElement("canvas");n.width=1024,n.height=1024;const i=n.getContext("2d");i.fillStyle="#808080",i.fillRect(0,0,1024,1024);const r=e.createLinearGradient(0,0,1024,0);r.addColorStop(0,"#6a8744"),r.addColorStop(.07,"#997a54"),r.addColorStop(.16,"#c7a980"),r.addColorStop(.28,"#d4b892"),r.addColorStop(.5,"#CAAE87"),r.addColorStop(.72,"#d4b892"),r.addColorStop(.84,"#c7a980"),r.addColorStop(.93,"#997a54"),r.addColorStop(1,"#6a8744"),e.fillStyle=r,e.fillRect(0,0,1024,1024);let s=42;const o=()=>(s=s*16807%2147483647,(s-1)/2147483646);for(let c=0;c<90;c++){const h=110+o()*804,f=8+o()*28;e.fillStyle=o()>.5?"rgba(255, 246, 228, 0.05)":"rgba(105, 76, 44, 0.06)",e.fillRect(h,0,f,1024)}for(let c=0;c<2800;c++){const h=o()*1024,f=o()*1024,d=Math.abs(h-512)/512,p=(1.5+o()*5.5)*(d>.72?1.45:.9),_=o()*Math.PI,y=o();y<.35?e.fillStyle="rgba(252, 244, 228, 0.25)":y<.7?e.fillStyle="rgba(130, 98, 64, 0.22)":e.fillStyle="rgba(92, 74, 52, 0.18)",e.beginPath(),e.ellipse(h,f,p*1.25,p*.85,_,0,Math.PI*2),e.fill(),i.fillStyle=y<.5?"#ababab":"#5e5e5e",i.beginPath(),i.ellipse(h,f,p*1.2,p*.85,_,0,Math.PI*2),i.fill()}const a=new mi(t);a.colorSpace=gn,a.wrapS=nr,a.wrapT=vn,a.repeat.set(1,36);const l=new mi(n);return l.wrapS=nr,l.wrapT=vn,l.repeat.set(1,36),{map:a,bump:l}}function aC(t="teal"){const e=tC(),n=nC(),i=iC(),r=rC(),s=sC(),o=oC();return{pelicanFeatherWhite:new li({map:e.albedo,color:16776696,roughness:.62,metalness:.01,sheen:.78,sheenRoughness:.42,sheenColor:new ee(16774364),bumpMap:e.bump,bumpScale:.009}),pelicanFeatherCream:new li({map:e.albedo,color:16182228,roughness:.65,metalness:.01,sheen:.65,sheenRoughness:.48,sheenColor:new ee(16771262),bumpMap:e.bump,bumpScale:.008}),pelicanWingTipSlate:new wt({color:3489869,roughness:.62,metalness:.04,bumpMap:e.bump,bumpScale:.007}),pelicanBeakUpper:new li({color:16751144,roughness:.34,metalness:.02,clearcoat:.38,clearcoatRoughness:.26,sheen:.25,sheenColor:new ee(16765568)}),pelicanBeakTip:new li({color:15224374,roughness:.26,clearcoat:.55,clearcoatRoughness:.2}),pelicanPouch:new li({map:n.map,color:16751406,roughness:.52,metalness:0,emissive:new ee(4330752),emissiveIntensity:.14,sheen:.35,sheenColor:new ee(16763256),bumpMap:n.bump,bumpScale:.007,side:In}),pelicanLegOrange:new wt({color:15558178,roughness:.48,metalness:.03,bumpMap:i.bump,bumpScale:.004}),eyeSclera:new li({color:16777215,roughness:.08,clearcoat:1,clearcoatRoughness:.05}),eyeIris:new li({color:2060195,roughness:.12,clearcoat:1}),eyePupil:new Hi({color:527380}),eyeHighlight:new Hi({color:16777215}),scarfCloth:new wt({map:s,roughness:.82,metalness:0,bumpMap:s,bumpScale:.004,side:In}),capFabric:new wt({color:2511492,roughness:.76,metalness:.04}),bikeFramePaint:new li({color:X_[t],roughness:.18,metalness:.42,clearcoat:.92,clearcoatRoughness:.1}),bikeChrome:new wt({color:16120060,roughness:.11,metalness:.94}),bikeBrushedSteel:new wt({color:13160664,roughness:.26,metalness:.85}),bikeBrass:new wt({color:15776316,roughness:.18,metalness:.9}),bikeDarkMetal:new wt({color:2501427,roughness:.38,metalness:.76}),bikeTireRubber:new wt({color:1974566,roughness:.76,metalness:.04,bumpMap:r,bumpScale:.014}),bikeWhitewall:new wt({color:16051418,roughness:.68,metalness:.02}),bikeLeatherSaddle:new li({map:i.map,color:8733727,roughness:.44,metalness:.04,clearcoat:.25,clearcoatRoughness:.38,bumpMap:i.bump,bumpScale:.006}),bikeHeadlampGlow:new wt({color:16775388,emissive:new ee(16765545),emissiveIntensity:.6,roughness:.1}),bikeReflectorRed:new li({color:14229016,emissive:new ee(9440264),emissiveIntensity:.5,roughness:.15,clearcoat:.9}),bikeReflectorAmber:new li({color:16096779,emissive:new ee(11817737),emissiveIntensity:.4,roughness:.2}),roadSurface:new wt({map:o.map,bumpMap:o.bump,bumpScale:.015,roughness:.88,metalness:.01,vertexColors:!0})}}const Tn={WHEEL_RADIUS:.37,TIRE_TUBE_RADIUS:.036,REAR_AXLE:new A(0,.37,-.56),FRONT_AXLE:new A(0,.37,.58),BB_POS:new A(0,.34,-.08),SEAT_CLUSTER:new A(0,.77,-.24),SADDLE_REST_POS:new A(0,.89,-.27),HEAD_BOTTOM:new A(0,.67,.44),HEAD_TOP:new A(0,.84,.37),CRANK_RADIUS:.165,PEDAL_OFFSET_X:.138,GEAR_RATIO:2.15};function hn(t,e,n,i,r,s=16){const o=new A().subVectors(e,t),a=o.length(),l=new Rt(n,i,a,s),c=new re(l,r),h=new A().addVectors(t,e).multiplyScalar(.5);return c.position.copy(h),c.quaternion.setFromUnitVectors(new A(0,1,0),o.normalize()),c.castShadow=!0,c.receiveShadow=!0,c}function D0(t,e,n,i,r,s=!0){const o=new Bo,a=t*.1,l=t-a;for(let d=0;d<n;d++){const p=d/n*Math.PI*2,_=(d+.25)/n*Math.PI*2,y=(d+.48)/n*Math.PI*2,g=(d+.72)/n*Math.PI*2,u=Math.cos(p)*l,m=Math.sin(p)*l,v=Math.cos(_)*t,x=Math.sin(_)*t,P=Math.cos(y)*t,b=Math.sin(y)*t,w=Math.cos(g)*l,R=Math.sin(g)*l;d===0?o.moveTo(u,m):o.lineTo(u,m),o.lineTo(v,x),o.lineTo(P,b),o.lineTo(w,R)}if(o.closePath(),s&&t>.07)for(let p=0;p<5;p++){const _=new Ha,y=p/5*Math.PI*2+.2,g=(l+e)*.52,u=(l-e)*.28;_.absarc(Math.cos(y)*g,Math.sin(y)*g,u,0,Math.PI*2,!0),o.holes.push(_)}const c=new Ha;c.absarc(0,0,e,0,Math.PI*2,!0),o.holes.push(c);const h=new Ka(o,{depth:i,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:2});h.center(),h.rotateY(Math.PI/2);const f=new re(h,r);return f.castShadow=!0,f.receiveShadow=!0,f}function I0(t){const e=new ot,n=Tn.WHEEL_RADIUS-Tn.TIRE_TUBE_RADIUS,i=Tn.TIRE_TUBE_RADIUS,r=new hs(n,i,20,56);r.rotateY(Math.PI/2);const s=new re(r,t.bikeTireRubber);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new hs(n-.004,i*.56,12,56);o.rotateY(Math.PI/2);const a=new re(o,t.bikeWhitewall);a.position.x=.017;const l=new re(o,t.bikeWhitewall);l.position.x=-.017,e.add(a,l);const c=new hs(n-.022,.016,12,48);c.rotateY(Math.PI/2);const h=new re(c,t.bikeChrome);h.castShadow=!0,e.add(h);const f=new Rt(.018,.018,.095,16);f.rotateZ(Math.PI/2);const d=new re(f,t.bikeChrome);e.add(d);const p=new Rt(.032,.032,.006,20);p.rotateZ(Math.PI/2);const _=new re(p,t.bikeChrome);_.position.x=.034;const y=new re(p,t.bikeChrome);y.position.x=-.034,e.add(_,y);const g=hn(new A(0,-.312,0),new A(0,-.272,0),.004,.004,t.bikeBrass,8);e.add(g);const u=28,m=n-.022,v=.027;for(let x=0;x<u;x++){const P=x%2===0,b=P?.034:-.034,w=x%4<2?1:-1,R=x/u*Math.PI*2,E=R+w*.42,S=new A(b,Math.cos(E)*v,Math.sin(E)*v),D=new A((P?1:-1)*.004,Math.cos(R)*m,Math.sin(R)*m),B=hn(S,D,.0022,.0022,t.bikeBrushedSteel,6);e.add(B)}return e}function lC(t){const e=new ot,n=I0(t);n.position.copy(Tn.REAR_AXLE),e.add(n);const i=I0(t),r=D0(.048,.016,15,.008,t.bikeBrushedSteel,!1);r.position.set(-.056,0,0),n.add(r);const s=new ot;e.add(s);const{REAR_AXLE:o,BB_POS:a,SEAT_CLUSTER:l,HEAD_BOTTOM:c,HEAD_TOP:h}=Tn;s.add(hn(a,l,.019,.019,t.bikeFramePaint));const f=new Ii([a.clone(),new A(0,.46,.16),c.clone()]),d=new re(new Ji(f,24,.02,16,!1),t.bikeFramePaint);d.castShadow=!0,d.receiveShadow=!0,s.add(d);const p=new Ii([l.clone(),new A(0,.815,.07),h.clone().add(new A(0,-.025,.01))]),_=new re(new Ji(p,24,.018,16,!1),t.bikeFramePaint);_.castShadow=!0,_.receiveShadow=!0,s.add(_);const y=a.clone().lerp(l,.78),g=c.clone().lerp(h,.35);s.add(hn(y,g,.012,.012,t.bikeFramePaint)),s.add(hn(c,h,.024,.024,t.bikeFramePaint));const u=hn(h.clone().add(new A(0,-.01,.004)),h.clone().add(new A(0,.015,-.006)),.027,.027,t.bikeChrome),m=hn(c.clone().add(new A(0,-.015,.006)),c.clone().add(new A(0,.01,-.004)),.027,.027,t.bikeChrome);s.add(u,m);const v=new Rt(.032,.032,.11,20);v.rotateZ(Math.PI/2);const x=new re(v,t.bikeFramePaint);x.position.copy(a),x.castShadow=!0,s.add(x),[-1,1].forEach(it=>{const rt=it*.056,C=new A(rt,o.y,o.z),U=new Ii([new A(it*.038,a.y,a.z),new A(it*.068,.355,-.3),C]),z=new re(new Ji(U,20,.012,12,!1),t.bikeFramePaint);z.castShadow=!0,s.add(z);const V=new Ii([new A(it*.018,l.y-.02,l.z),new A(it*.058,.58,-.4),C]),I=new re(new Ji(V,18,.011,12,!1),t.bikeFramePaint);I.castShadow=!0,s.add(I);const fe=new re(new Rt(.026,.026,.01,16),t.bikeChrome);fe.rotation.z=Math.PI/2,fe.position.copy(C),s.add(fe)});const P=Tn.WHEEL_RADIUS+.018,b=[];for(let it=0;it<=24;it++){const rt=-.25+it/24*1.95;b.push(new A(0,o.y+Math.sin(rt)*P,o.z-Math.cos(rt)*P))}const w=new Ii(b),R=new Ji(w,28,.042,14,!1),E=new re(R,t.bikeFramePaint);E.scale.set(1,1,1),E.castShadow=!0,s.add(E);const S=.35,D=new re(new Rt(.018,.02,.016,16),t.bikeChrome);D.rotation.x=Math.PI/2-S,D.position.set(0,o.y+Math.sin(S)*(P+.022),o.z-Math.cos(S)*(P+.022));const B=new re(new bt(.015,16,12),t.bikeReflectorRed);B.scale.set(1,.5,1),B.position.y=-.007,D.add(B),s.add(D);const k=new ot;k.position.copy(Tn.SADDLE_REST_POS),e.add(k);const X=hn(l.clone().add(new A(0,-.02,.01)),Tn.SADDLE_REST_POS.clone().add(new A(0,-.03,0)),.014,.014,t.bikeChrome);s.add(X);const q=new Bo;q.moveTo(0,.13),q.bezierCurveTo(.032,.12,.042,.03,.105,-.06),q.bezierCurveTo(.115,-.12,.06,-.145,0,-.14),q.bezierCurveTo(-.06,-.145,-.115,-.12,-.105,-.06),q.bezierCurveTo(-.042,.03,-.032,.12,0,.13);const G=new Ka(q,{depth:.026,bevelEnabled:!0,bevelThickness:.014,bevelSize:.012,bevelSegments:4});G.rotateX(Math.PI/2),G.center();const te=new re(G,t.bikeLeatherSaddle);te.castShadow=!0,te.receiveShadow=!0,k.add(te),[-.055,.055].forEach(it=>{const rt=new re(new Rt(.018,.014,.045,14),t.bikeBrass);rt.position.set(it,-.03,-.075),k.add(rt)});const N=new A().subVectors(h,c).normalize(),Z=new ot;Z.position.copy(h),Z.quaternion.setFromUnitVectors(new A(0,1,0),N),e.add(Z);const J=new ot;Z.add(J);const pe=Z.quaternion.clone().invert(),ye=it=>it.clone().sub(h).applyQuaternion(pe),et=ye(Tn.FRONT_AXLE),j=ye(c);i.position.copy(et),J.add(i);const ae=j.clone().add(new A(0,-.02,0)),Me=hn(ae.clone().add(new A(-.052,0,0)),ae.clone().add(new A(.052,0,0)),.018,.018,t.bikeChrome);J.add(Me),[-1,1].forEach(it=>{const rt=ae.clone().add(new A(it*.048,0,0)),C=et.clone().add(new A(it*.052,0,0)),U=rt.clone().lerp(C,.55).add(new A(0,-.02,-.025)),z=new Ii([rt,U,C]),V=new re(new Ji(z,18,.013,12,!1),t.bikeFramePaint);V.castShadow=!0,J.add(V)});const le=ae.clone().add(new A(0,.055,.065));J.add(hn(ae,le,.006,.006,t.bikeChrome,8));const Ie=new re(new ki(.038,.075,20,1,!1),t.bikeChrome);Ie.rotation.x=-Math.PI/2+.52,Ie.position.copy(le),Ie.castShadow=!0,J.add(Ie);const We=new re(new bt(.035,16,12),t.bikeHeadlampGlow);We.scale.set(1,.35,1),We.position.y=-.036,Ie.add(We);const Oe=new ki(.32,1.85,28,1,!0);Oe.translate(0,-.925,0);const Ze=Oe.attributes.position,Q=[];for(let it=0;it<Ze.count;it++){const rt=Ze.getY(it),C=vt.clamp(1+rt/1.85,0,1),U=C*C*C;Q.push(U,U*.92,U*.68)}Oe.setAttribute("color",new ct(Q,3));const ie=new Hi({color:16771230,vertexColors:!0,transparent:!0,opacity:0,side:In,depthWrite:!1,blending:Ic}),L=new re(Oe,ie);Ie.add(L);const Ne=new UA(16770196,0,11,Math.PI/5.5,.85,1.5);Ne.position.set(0,-.04,0);const se=new zt;se.position.set(0,-3.2,0),Ie.add(Ne),Ie.add(se),Ne.target=se;const Se=new A(0,.125,.035);J.add(hn(new A(0,-.02,0),new A(0,.12,0),.014,.014,t.bikeChrome),hn(new A(0,.115,0),Se,.015,.015,t.bikeChrome));const me=ye(new A(.28,.99,.25)),ke=ye(new A(-.28,.99,.25)),be=ye(new A(.18,.985,.39)),T=ye(new A(-.18,.985,.39)),M=new Ii([me.clone().add(new A(.01,-.005,-.05)),me,be,Se,T,ke,ke.clone().add(new A(-.01,-.005,-.05))]),O=new re(new Ji(M,44,.0125,14,!1),t.bikeChrome);O.castShadow=!0,J.add(O);const H=new zt;H.position.copy(me),J.add(H);const K=new zt;K.position.copy(ke),J.add(K),[me,ke].forEach((it,rt)=>{const C=rt===0?1:-1,U=it.clone().add(new A(-C*.02,.004,.045)),z=it.clone().add(new A(C*.02,-.006,-.055)),V=hn(U,z,.0175,.0175,t.bikeLeatherSaddle,16);J.add(V)});const W=new re(new bt(.026,20,14,0,Math.PI*2,0,Math.PI*.65),t.bikeBrass);W.position.copy(be).add(new A(-.03,.022,-.01)),W.castShadow=!0,J.add(W);const _e=new re(new Jn(.012,.005,.028),t.bikeChrome);_e.position.set(.018,-.004,-.015),W.add(_e);const ue=new ot;ue.position.copy(a),e.add(ue);const we=.104,qe=D0(we,.022,32,.007,t.bikeChrome,!0);qe.position.set(-.056,0,0),ue.add(qe);for(let it=0;it<5;it++){const rt=it/5*Math.PI*2,C=new A(-.056,Math.cos(rt)*.068,Math.sin(rt)*.068);ue.add(hn(new A(-.056,0,0),C,.007,.009,t.bikeChrome,8))}const ce=hn(new A(-.088,0,0),new A(.088,0,0),.012,.012,t.bikeBrushedSteel,12);ue.add(ce);const Te=Tn.CRANK_RADIUS,Ve=hn(new A(.082,0,0),new A(.095,Te,0),.011,.015,t.bikeChrome,12),He=hn(new A(-.082,0,0),new A(-.095,-Te,0),.011,.015,t.bikeChrome,12);ue.add(Ve,He);const Ue=it=>{const rt=new ot,C=hn(new A(-it*.042,0,0),new A(it*.035,0,0),.006,.006,t.bikeChrome,10);rt.add(C);const U=new re(new Jn(.092,.022,.105),t.bikeDarkMetal);return U.castShadow=!0,U.receiveShadow=!0,rt.add(U),[-.053,.053].forEach(z=>{const V=new re(new Jn(.056,.012,.004),t.bikeReflectorAmber);V.position.set(0,0,z),rt.add(V)}),rt},nt=Ue(1);nt.position.set(Tn.PEDAL_OFFSET_X,Te,0),ue.add(nt);const $e=Ue(-1);$e.position.set(-.138,-Te,0),ue.add($e);const mt=-.056,F=we,Ae=.048,$=[],ne=16;for(let it=0;it<=ne;it++){const rt=-Math.PI*.45+it/ne*Math.PI*.9;$.push(new A(mt,a.y+Math.sin(rt)*F,a.z+Math.cos(rt)*F))}for(let it=0;it<=ne;it++){const rt=Math.PI*.55+it/ne*Math.PI*.9;$.push(new A(mt,o.y+Math.sin(rt)*Ae,o.z+Math.cos(rt)*Ae))}const Ce=new Ii($,!0),Re=46,Je=new Jn(.011,.011,.022),gt=new la(Je,t.bikeDarkMetal,Re);gt.castShadow=!0,e.add(gt);const Mt=eC(),ht=new Hi({map:Mt,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),$t=new re(new or(.32,.62),ht);$t.rotation.x=-Math.PI/2,$t.position.set(0,.006,o.z),e.add($t);const Zt=new re(new or(.32,.62),ht);Zt.rotation.x=-Math.PI/2,Zt.position.set(0,.006,Tn.FRONT_AXLE.z),e.add(Zt);const Ri=new Hi({map:Mt,transparent:!0,opacity:.44,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),On=new re(new or(.95,1.65),Ri);On.rotation.x=-Math.PI/2,On.position.set(0,.005,-.04),e.add(On);const dt=new A,jt=new A,Bt=new A(0,0,1),Kt=new zt,Qt=new A,ri=new A,si=new A,yn=new A,Pi=it=>{const rt=Ce.getLength(),C=it*F/rt;for(let U=0;U<Re;U++){let z=(U/Re-C)%1;z<0&&(z+=1),Ce.getPointAt(z,dt),Ce.getTangentAt(z,jt),Kt.position.copy(dt);const V=U%2===0?1:.78;Kt.scale.set(U%2===0?1.15:.85,V,1),Kt.quaternion.setFromUnitVectors(Bt,jt),Kt.updateMatrix(),gt.setMatrixAt(U,Kt.matrix)}gt.instanceMatrix.needsUpdate=!0};return Pi(0),{root:e,rearWheel:n,frontWheel:i,steeringPivot:Z,steeringGroup:J,crankGroup:ue,leftPedal:nt,rightPedal:$e,rearCog:r,saddleGroup:k,bellLever:_e,headlampLight:Ne,headlampBeam:L,leftGripLocal:H,rightGripLocal:K,updateKinematics:(it,rt,C,U,z)=>{const V=it/Tn.WHEEL_RADIUS;n.rotation.x=V,i.rotation.x=V;const I=V/Tn.GEAR_RATIO;ue.rotation.x=I;const fe=.14*Math.sin(I),Ee=.14*Math.sin(I+Math.PI);return nt.rotation.x=-I+fe,$e.rotation.x=-I+Ee,Pi(I),J.rotation.y=rt,Zt.rotation.z=rt,k.position.y=Tn.SADDLE_REST_POS.y+C*.25,_e.rotation.y=U>0?Math.sin(U*45)*.35:0,Ne.intensity=z?14:0,ie.opacity=z?.045:0,t.bikeHeadlampGlow.emissiveIntensity=z?2.2:.45,si.set(Tn.PEDAL_OFFSET_X,a.y+Te*Math.cos(I)+.014,a.z+Te*Math.sin(I)),yn.set(-.138,a.y+Te*Math.cos(I+Math.PI)+.014,a.z+Te*Math.sin(I+Math.PI)),Z.updateMatrixWorld(!0),Qt.setFromMatrixPosition(H.matrixWorld),ri.setFromMatrixPosition(K.matrixWorld),e.worldToLocal(Qt),e.worldToLocal(ri),{wheelAngle:V,crankAngle:I,leftPedalBikePos:si,rightPedalBikePos:yn,leftPedalPitch:fe,rightPedalPitch:Ee,leftGripBikePos:Qt,rightGripBikePos:ri}}}}const $i=new A,Jr=new A,cC=new A(0,0,1),Gs=new A,Ws=new A,N0=new A,U0=new Lt;function F0(t,e,n,i,r,s){const o={rootPos:new A,midPos:new A,endPos:new A};o.rootPos.copy(t),$i.subVectors(e,t);const a=$i.length(),l=Math.abs(n-i)+.005,c=(n+i)*.996,h=vt.clamp(a,l,c);a<1e-5?$i.set(0,-1,0):$i.divideScalar(a);const f=r.dot($i);Jr.copy(r).addScaledVector($i,-f),Jr.lengthSq()<1e-6&&(Jr.crossVectors($i,cC),Jr.lengthSq()<1e-6&&Jr.set(1,0,0)),Jr.normalize();const d=vt.clamp((n*n+h*h-i*i)/(2*n*h),-1,1),p=Math.sqrt(Math.max(0,1-d*d));return o.midPos.copy(t).addScaledVector($i,n*d).addScaledVector(Jr,n*p),o.endPos.copy(t).addScaledVector($i,h),o}function Gl(t,e,n,i){t.position.copy(e),Gs.subVectors(n,e);const r=Gs.length();r<1e-5||(Gs.divideScalar(r),Ws.crossVectors(Gs,i),Ws.lengthSq()<1e-6?Ws.set(1,0,0):Ws.normalize(),N0.crossVectors(Ws,Gs).normalize(),U0.makeBasis(Ws,Gs,N0),t.quaternion.setFromRotationMatrix(U0))}const ta=.39,fh=.39,Sa=.034,O0=.31,k0=.33;function _o(t,e,n,i){const r=new bt(.5,12,10);r.translate(0,.5,0),r.scale(e,t,n);const s=new re(r,i);return s.castShadow=!0,s.receiveShadow=!0,s}function uC(t,e){const n=new ot,i=new re(new bt(.022,14,12),t.pelicanLegOrange);i.position.set(0,Sa,-.01),i.castShadow=!0,n.add(i);const r=new re(new Rt(.017,.022,Sa,12),t.pelicanLegOrange);r.position.set(0,Sa*.5,-.01),n.add(r);const s=new Bo;s.moveTo(0,-.025),s.lineTo(.048,.075),s.quadraticCurveTo(.022,.062,0,.088),s.quadraticCurveTo(-.022,.062,-.048,.075),s.closePath();const o=new Ka(s,{depth:.006,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:2});o.rotateX(Math.PI/2);const a=new re(o,t.pelicanLegOrange);a.position.set(e*.003,.007,0),a.castShadow=!0,a.receiveShadow=!0,n.add(a);const l=[-.42,0,.42],c=[.088,.102,.088];return l.forEach((h,f)=>{const d=new ot;d.position.set(0,.009,-.015),d.rotation.y=h;const p=c[f],_=new re(new Rt(.0075,.011,p,10),t.pelicanLegOrange);_.rotation.x=Math.PI/2,_.position.z=p*.5,_.castShadow=!0,d.add(_);const y=new re(new ki(.0065,.018,8),t.pelicanFeatherCream);y.rotation.x=Math.PI*.62,y.position.set(0,-.002,p+.006),d.add(y),n.add(d)}),n}function z0(t,e,n,i){const r=new ot,s=new Rt(e?.022:.042,e?.038:.056,t,14);s.translate(0,t*.5,0),s.scale(.75,1,1.25);const o=new re(s,i.pelicanFeatherWhite);o.castShadow=!0,o.receiveShadow=!0,r.add(o);const a=e?9:7;for(let l=0;l<a;l++){const c=(l+.5)/a,h=e?.12+(1-c)*.05:.11+c*.04,f=e&&l>=a-4,d=_o(h,.038,.014,f?i.pelicanWingTipSlate:i.pelicanFeatherCream);d.position.set(n*.006,c*t*.92,-.012),d.rotation.x=e?Math.PI*.84-(1-c)*.14:-Math.PI*.18-c*.12,d.rotation.z=-n*.08,r.add(d);const p=_o(h*.68,.04,.016,i.pelicanFeatherWhite);p.position.set(n*.014,c*t*.9,-.006),p.rotation.x=e?Math.PI*.86-(1-c)*.12:-Math.PI*.15-c*.1,p.rotation.z=-n*.06,r.add(p)}if(e){const l=new ot;l.position.set(0,t,0);for(let c=-1;c<=1;c++){const h=_o(.075,.028,.014,i.pelicanFeatherWhite);h.position.set(c*.014,-.025,.008),h.rotation.x=.25,h.rotation.z=c*.18,l.add(h)}r.add(l)}return r}function hC(t){const e=new ot,n=new A(0,.96,-.25),i=new ot;i.position.copy(n),e.add(i);const r=new ot;r.rotation.x=.26,i.add(r);const s=new bt(.22,32,28),o=s.attributes.position,a=new A;for(let T=0;T<o.count;T++){a.fromBufferAttribute(o,T);const M=a.y/.22,O=.92-Math.max(0,M)*.18,H=1.18+(M<0?.12:-.08*M);a.x*=O,a.y*=1.38,a.z*=H,a.z>0&&(a.z+=Math.cos(M*Math.PI*.5)*.035),o.setXYZ(T,a.x,a.y,a.z)}s.computeVertexNormals();const l=new re(s,t.pelicanFeatherWhite);l.position.set(0,.14,.02),l.castShadow=!0,l.receiveShadow=!0,r.add(l);const c=new bt(.175,24,20);c.scale(.82,1.22,.65);const h=new re(c,t.pelicanFeatherCream);h.position.set(0,.12,.165),r.add(h);for(let T=0;T<3;T++){const M=5-T;for(let O=0;O<M;O++){const H=(O/(M-1||1)-.5)*.95,K=_o(.095,.048,.018,t.pelicanFeatherWhite),W=.24-T*.065,_e=.195+T*.012;K.position.set(Math.sin(H)*_e*.85,W,Math.cos(H)*_e+.03),K.rotation.x=2.65,K.rotation.z=-H*.5,r.add(K)}}const f=new ot;f.position.set(0,.03,-.22),r.add(f);for(let T=-3;T<=3;T++){const M=_o(.16-Math.abs(T)*.012,.042,.012,T%2===0?t.pelicanFeatherWhite:t.pelicanFeatherCream);M.rotation.x=-Math.PI*.48+Math.abs(T)*.04,M.rotation.y=-T*.16,M.position.set(T*.02,0,0),f.add(M)}const d=new ot;d.position.set(0,.38,.05),d.rotation.x=-.15,r.add(d);const p=new re(new hs(.115,.034,14,28),t.scarfCloth);p.rotation.x=Math.PI/2,p.scale.set(1,1.12,.95),p.castShadow=!0,d.add(p);const _=[];let y=d;for(let T=0;T<5;T++){const M=new ot;T===0?M.position.set(.095,-.01,-.09):M.position.set(0,0,-.068);const O=new re(new Jn(.062-T*.004,.012,.074),t.scarfCloth);O.position.z=-.034,O.castShadow=!0,M.add(O),y.add(M),_.push(M),y=M}const g=new ot;g.position.set(0,.4,.06),r.add(g);const u=new ot;u.position.set(0,.13,-.035),g.add(u);const m=new re(new Rt(.068,.092,.16,18),t.pelicanFeatherWhite);m.position.set(0,.065,-.015),m.rotation.x=-.22,m.castShadow=!0,g.add(m);const v=new re(new bt(.069,18,14),t.pelicanFeatherWhite);v.position.set(0,.005,0),v.castShadow=!0,u.add(v);const x=new re(new Rt(.064,.068,.16,18),t.pelicanFeatherWhite);x.position.set(0,.075,.02),x.rotation.x=.24,x.castShadow=!0,u.add(x);const P=new ot;P.position.set(0,.145,.045),P.rotation.x=-.26,u.add(P);const b=new re(new bt(.098,24,20),t.pelicanFeatherWhite);b.scale.set(.92,.96,1.12),b.castShadow=!0,P.add(b);for(let T=0;T<4;T++){const M=_o(.075-T*.01,.022,.01,t.pelicanFeatherCream);M.position.set(0,.075-T*.012,-.055-T*.015),M.rotation.x=-Math.PI*.58-T*.12,P.add(M)}const w=new ot;w.position.set(0,.078,-.005),w.rotation.set(-.12,0,-.08),P.add(w);const R=new re(new bt(.074,20,14,0,Math.PI*2,0,Math.PI*.55),t.capFabric);R.scale.set(1,.68,1.12),R.castShadow=!0,w.add(R);const E=new re(new Rt(.068,.072,.008,18,1,!1,-Math.PI*.4,Math.PI*.8),t.pelicanBeakUpper);E.position.set(0,.008,.048),E.rotation.x=-.28,w.add(E);const S=new re(new bt(.01,10,8),t.pelicanFeatherCream);S.position.set(0,.05,0),w.add(S);const D=[],B=[],k=[];[-1,1].forEach(T=>{const M=new ot;M.position.set(T*.068,.024,.062),M.rotation.y=T*.42,P.add(M);const O=new re(new hs(.032,.0055,10,24),t.pelicanBeakUpper);M.add(O);const H=new re(new bt(.031,20,16),t.eyeSclera);H.scale.set(1,1.08,.85),M.add(H);const K=new re(new bt(.0185,16,12),t.eyeIris);K.scale.set(1,1.08,.35),K.position.set(-T*.003,.002,.023),M.add(K);const W=new re(new bt(.0115,14,10),t.eyePupil);W.scale.set(1,1.08,.3),W.position.set(-T*.003,.002,.027),M.add(W);const _e=new re(new bt(.0052,10,8),t.eyeHighlight);_e.position.set(.005,.009,.03),M.add(_e);const ue=new re(new bt(.0028,8,6),t.eyeHighlight);ue.position.set(-.006,-.006,.029),M.add(ue);const we=new bt(.0335,18,12,0,Math.PI*2,0,Math.PI*.52),qe=new re(we,t.pelicanFeatherCream);qe.scale.set(1.02,1.08,.9),qe.rotation.x=-Math.PI*.42,M.add(qe),D.push(qe);const ce=new bt(.0332,18,12,0,Math.PI*2,Math.PI*.5,Math.PI*.5),Te=new re(ce,t.pelicanFeatherCream);Te.scale.set(1.02,1.08,.9),Te.rotation.x=Math.PI*.38,M.add(Te),B.push(Te);const Ve=new re(new ap(.007,.034,6,10),t.pelicanFeatherWhite);Ve.rotation.z=Math.PI/2-T*.14,Ve.position.set(0,.034,.015),M.add(Ve),k.push(Ve)});const X=new ot;X.position.set(0,-.005,.075),P.add(X);const q=.42,G=new ki(.056,q,24,16);G.rotateX(Math.PI/2),G.translate(0,0,q*.5);const te=G.attributes.position;for(let T=0;T<te.count;T++){a.fromBufferAttribute(te,T);const M=vt.clamp(a.z/q,0,1);a.y<0?a.y*=.22:a.y*=.65+(1-M)*.25;const O=1-M*.55+Math.sin(M*Math.PI)*.14;a.x*=O,a.y+=Math.sin(M*Math.PI)*.012-M*M*.018,te.setXYZ(T,a.x,a.y,a.z)}G.computeVertexNormals();const N=new re(G,t.pelicanBeakUpper);N.position.y=.012,N.castShadow=!0,X.add(N);const Z=new bt(.011,14,12);Z.scale(.72,1.35,1.15);const J=new re(Z,t.pelicanBeakTip);J.position.set(0,-.006,q-.012),J.rotation.x=.42,X.add(J);const pe=new ot;pe.position.set(0,.006,0),X.add(pe);const ye=new bt(1,32,24),et=ye.attributes.position;for(let T=0;T<et.count;T++){a.fromBufferAttribute(et,T);const M=(a.z+1)*.5,O=M*(q*.94);if(.052*Math.pow(1-M*.72,.65)*Math.sin(Math.acos(vt.clamp(a.z,-1,1))),a.x=Math.sign(a.x)*Math.abs(a.x)*(.056*(1-M*.62)),a.y>0)a.y*=.008;else{const K=.145*Math.sin(Math.pow(M,.68)*Math.PI)*(1-M*.35);a.y=a.y*K}a.z=O,et.setXYZ(T,a.x,a.y,a.z)}ye.computeVertexNormals();const j=new re(ye,t.pelicanPouch);j.castShadow=!0,j.receiveShadow=!0,pe.add(j);const ae={};[-1,1].forEach(T=>{const M=T>0,O=new A(T*.125,-.025,.045),H=new ot,K=new re(new Rt(.054,.036,ta*.56,14),t.pelicanFeatherWhite);K.position.y=ta*.26,K.castShadow=!0,H.add(K);const W=new re(new Rt(.022,.017,ta,12),t.pelicanLegOrange);W.position.y=ta*.5,W.castShadow=!0,H.add(W),e.add(H);const _e=new re(new bt(.021,14,12),t.pelicanLegOrange);_e.castShadow=!0,e.add(_e);const ue=new ot,we=new re(new Rt(.018,.015,fh,12),t.pelicanLegOrange);we.position.y=fh*.5,we.castShadow=!0,ue.add(we),e.add(ue);const qe=uC(t,T);e.add(qe);const ce={hipSocketLocal:O,thighGroup:H,kneeMesh:_e,shinGroup:ue,footGroup:qe};M?ae.left=ce:ae.right=ce});const Me={};[-1,1].forEach(T=>{const M=T>0,O=new A(T*.175,.25,.06),H=new re(new bt(.048,14,12),t.pelicanFeatherWhite);H.castShadow=!0,e.add(H);const K=z0(O0,!1,T,t);e.add(K);const W=new re(new bt(.036,12,10),t.pelicanFeatherWhite);W.castShadow=!0,e.add(W);const _e=z0(k0,!0,T,t);e.add(_e);const ue={shoulderLocal:O,shoulderCap:H,upperWingGroup:K,elbowCap:W,forearmGroup:_e};M?Me.left=ue:Me.right=ue});let le=2.4,Ie=.16,We=-1,Oe=0;const Ze=new A,Q=new A,ie=new A,L=new A(0,0,1),Ne=new A,se=new A,Se=new A,me=new A(0,1,0);return{root:e,pelvisGroup:i,headGroup:P,triggerWave:()=>{Oe=1.65},updateAnimation:({time:T,dt:M,speedNormalized:O,crankAngle:H,steerAngle:K,bankAngle:W,bellRingPhase:_e,leftPedalBikePos:ue,rightPedalBikePos:we,leftPedalPitch:qe,rightPedalPitch:ce,leftGripBikePos:Te,rightGripBikePos:Ve})=>{const He=vt.clamp(O*1.15,0,1),Ue=Math.sin(T*2.4)*.006,$e=Math.sin(H*2-.3)*.022*He+Ue,mt=-Math.cos(H)*.018*He,F=-Math.cos(H)*.055*He-W*.25,Ae=Math.sin(H)*.045*He+K*.25,$=.26+Math.cos(H*2)*.025*He+He*.06;i.position.set(n.x+mt,n.y+$e,n.z),i.rotation.set(0,Ae,F),r.rotation.x=$,f.rotation.x=Math.sin(H*2+.8)*.09*He+Math.sin(T*3)*.03,f.rotation.y=Math.cos(H)*.07*He;const ne=3.5+O*14;_.forEach((dt,jt)=>{const Bt=T*ne-jt*.75,Kt=jt===0?-.42+O*.22:.06;dt.rotation.x=Kt+Math.sin(Bt)*(.07+O*.11),dt.rotation.y=Math.cos(Bt*.8)*(.05+O*.08)});const Ce=-Math.sin(H*2)*.045*He,Re=K*.65+Math.sin(T*.75)*.14+Math.sin(T*1.9)*.05,Je=-K*.3+Math.cos(T*1.1)*.04;g.rotation.x=Math.sin(H*2)*.035*He,u.rotation.x=-Math.sin(H*2)*.04*He+Math.sin(T*2.4)*.02,P.rotation.set(-$+.04+Ce,Re,Je);const gt=_e>0?Math.abs(Math.sin(_e*22))*.18:0,Mt=1+Math.sin(H*2-.9)*.085*He+Math.sin(T*2.4)*.04+gt;j.scale.set(1+(Mt-1)*.45,Mt,1),pe.rotation.x=Math.max(0,Math.sin(H*2-.6)*.035*He)+gt*.35,Oe>0&&(Oe=Math.max(0,Oe-M)),le-=M,le<=0&&We<0&&(We=0,Ie=Math.random()<.25?.32:.16,le=2.2+Math.random()*3.4);let ht=0;if(We>=0)if(We+=M,We>=Ie)We=-1;else{const dt=We/Ie;ht=Ie>.22?Math.abs(Math.sin(dt*Math.PI*2)):Math.sin(dt*Math.PI)}const $t=_e>0||Oe>0?.38:0,Zt=Math.max(ht,$t);D.forEach(dt=>{dt.rotation.x=vt.lerp(-Math.PI*.42,.06,Zt)}),B.forEach(dt=>{dt.rotation.x=vt.lerp(Math.PI*.38,-.05,Zt*.75)}),k.forEach((dt,jt)=>{const Bt=jt===0?-1:1;dt.position.y=.034+(_e>0||Oe>0?.005:0),dt.rotation.z=Math.PI/2-Bt*(.14-Zt*.1)}),i.updateMatrixWorld(!0);const Ri=(dt,jt,Bt,Kt)=>{Ze.copy(dt.hipSocketLocal),i.localToWorld(Ze),e.worldToLocal(Ze),dt.footGroup.position.copy(jt),dt.footGroup.rotation.set(Bt,Kt*.04,0),Q.set(jt.x,jt.y+Math.cos(Bt)*Sa-Math.sin(Bt)*-.01,jt.z+Math.sin(Bt)*Sa+Math.cos(Bt)*-.01),ie.set(Kt*.16,.15,1).normalize();const Qt=F0(Ze,Q,ta,fh,ie);Gl(dt.thighGroup,Qt.rootPos,Qt.midPos,L),dt.kneeMesh.position.copy(Qt.midPos),Gl(dt.shinGroup,Qt.midPos,Qt.endPos,L)};Ri(ae.left,ue,qe,1),Ri(ae.right,we,ce,-1);const On=(dt,jt,Bt,Kt)=>{Ne.copy(dt.shoulderLocal),r.localToWorld(Ne),e.worldToLocal(Ne),dt.shoulderCap.position.copy(Ne);const ri=Bt<0&&Oe>0?Math.sin(vt.clamp(Oe/1.65,0,1)*Math.PI):0;if(ri>.001){const Pi=Math.sin(T*16);se.set(-.46-Pi*.06,1.34+Math.cos(T*16)*.08,.12),se.lerpVectors(jt,se,Math.min(1,ri*1.4))}else se.copy(jt);const si=.55+Math.sin(T*2.1+Kt)*.08+Math.sin(H+Kt)*.07*He+Bt*W*.85;Se.set(Bt*vt.clamp(si,.32,.95),-.28+Math.cos(T*1.7+Kt)*.09+ri*.4,-.38).normalize();const yn=F0(Ne,se,O0,k0,Se);Gl(dt.upperWingGroup,yn.rootPos,yn.midPos,me),dt.elbowCap.position.copy(yn.midPos),Gl(dt.forearmGroup,yn.midPos,yn.endPos,me)};return On(Me.left,Te,1,0),On(Me.right,Ve,-1,Math.PI),{saddleBounce:$e}}}}const dC=`
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,fC=`
  uniform vec3 uTopColor;
  uniform vec3 uMidColor;
  uniform vec3 uHorizonColor;
  uniform vec3 uBottomColor;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform float uStarIntensity;
  varying vec3 vWorldPosition;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  void main() {
    vec3 dir = normalize(vWorldPosition);
    float h = clamp(dir.y, 0.0, 1.0);

    // Multi-stop atmospheric sky gradient
    vec3 col = mix(uHorizonColor, uMidColor, smoothstep(0.0, 0.28, h));
    col = mix(col, uTopColor, smoothstep(0.22, 0.88, h));

    // Subtle atmospheric horizon haze glow
    float horizonBand = exp(-abs(dir.y) * 9.5);
    col = mix(col, uHorizonColor * 1.06, horizonBand * 0.35);

    if (dir.y < 0.0) {
      col = mix(uHorizonColor, uBottomColor, clamp(-dir.y * 3.2, 0.0, 1.0));
    }

    // Solar / Lunar aureole & disc
    vec3 sDir = normalize(uSunDir);
    float sunAmt = max(dot(dir, sDir), 0.0);
    col += uSunColor * pow(sunAmt, 8.0) * 0.22;
    col += uSunColor * pow(sunAmt, 42.0) * 0.38;
    col += uSunColor * smoothstep(0.9975, 0.9994, sunAmt) * 0.95;

    // Subtle circular anti-aliased stars at night
    if (uStarIntensity > 0.01 && dir.y > 0.04) {
      vec3 scaled = dir * 270.0;
      vec3 starGrid = floor(scaled);
      vec3 cellOffset = fract(scaled) - 0.5;
      float n = hash(starGrid);
      if (n > 0.9942) {
        float brightness = (n - 0.9942) / 0.0058;
        float roundDot = smoothstep(0.36, 0.05, length(cellOffset));
        float fade = smoothstep(0.04, 0.30, dir.y);
        col += vec3(0.88, 0.94, 1.0) * brightness * roundDot * uStarIntensity * fade;
      }
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;function pC(t,e=480,n=1.32){const i=[],r=[],s=[],o=[],a=[],l=[-1.18,-.96,-.74,0,.74,.96,1.18],c=[-.028,-.004,.016,.026,.016,-.004,-.028],h=[new ee(7248966),new ee(11571816),new ee(16446696),new ee(16777215),new ee(16446696),new ee(11571816),new ee(7248966)],f=l.length,d=new A,p=new A,_=new A,y=new A(0,1,0);for(let u=0;u<=e;u++){const m=u/e,v=m*Math.PI*2;t.getPointAt(m%1,d),t.getTangentAt(m%1,p),_.crossVectors(p,y).normalize();const x=1+Math.sin(v*19)*.055+Math.cos(v*37+1.1)*.035,P=1+Math.cos(v*23+.5)*.055+Math.sin(v*41)*.035;for(let b=0;b<f;b++){const w=l[b],R=Math.abs(w)>.5?w<0?x:P:1,E=w*n*R,S=d.x+_.x*E,D=d.y+c[b],B=d.z+_.z*E;i.push(S,D,B),r.push(0,1,0),s.push((w/1.18+1)*.5,m);const k=h[b];o.push(k.r,k.g,k.b)}}for(let u=0;u<e;u++)for(let m=0;m<f-1;m++){const v=u*f+m,x=(u+1)*f+m,P=(u+1)*f+(m+1),b=u*f+(m+1);a.push(v,x,P),a.push(v,P,b)}const g=new rn;return g.setAttribute("position",new ct(i,3)),g.setAttribute("normal",new ct(r,3)),g.setAttribute("uv",new ct(s,2)),g.setAttribute("color",new ct(o,3)),g.setIndex(a),g.computeVertexNormals(),g}function mC(){const t=[],e=[],n=[],i=[],s=new ee(2974502),o=new ee(5676090),a=new ee(10013769);for(let c=0;c<5;c++){const h=c/5*Math.PI*2+c%2*.35,f=c===0?0:.045+c%2*.025,d=Math.cos(h)*f,p=Math.sin(h)*f,_=.06+c%3*.035,y=Math.cos(h)*_,g=Math.sin(h)*_,u=.24+c%3*.065,m=.026,v=-Math.sin(h)*m,x=Math.cos(h)*m,P=t.length/3;t.push(d-v,0,p-x,d+v,0,p+x,d-v*.65+y*.45,u*.52,p-x*.65+g*.45,d+v*.65+y*.45,u*.52,p+x*.65+g*.45,d+y,u,p+g);for(let b=0;b<5;b++)e.push(0,.85,.52);n.push(s.r,s.g,s.b,s.r,s.g,s.b,o.r,o.g,o.b,o.r,o.g,o.b,a.r,a.g,a.b),i.push(P+0,P+1,P+3,P+0,P+3,P+2,P+2,P+3,P+4)}const l=new rn;return l.setAttribute("position",new ct(t,3)),l.setAttribute("normal",new ct(e,3)),l.setAttribute("color",new ct(n,3)),l.setIndex(i),l.computeVertexNormals(),l}function gC(t,e,n,i,r,s){const o=new or(1,1,r,14),a=o.attributes.position;for(let l=0;l<a.count;l++){const c=a.getX(l)+.5,h=a.getY(l)+.5,f=c*Math.PI*2,d=vt.lerp(t,e,h),p=Math.cos(f)*d,_=Math.sin(f)*d,y=Math.sin(h*Math.PI),g=.5+.25*Math.sin(f*4+s)+.15*Math.cos(f*7-s*1.4)+.1*Math.sin(f*11+.8),u=-1.2+y*vt.lerp(n,i,g);a.setXYZ(l,p,u,_)}return o.computeVertexNormals(),o}function vC(t,e){const n=new ot;t.add(n);const i=24,r=[];for(let Y=0;Y<i;Y++){const ge=Y/i*Math.PI*2,xe=24.5+Math.sin(ge*2)*4.8+Math.cos(ge*3-.6)*3.4+Math.sin(ge*5+.4)*1.25,Le=Math.cos(ge)*xe,oe=Math.sin(ge)*xe,he=.85+Math.sin(ge*2+.3)*.65+Math.cos(ge*3-.5)*.35;r.push(new A(Le,he,oe))}const s=new Ii(r,!0,"centripetal",.5),o=s.getLength(),a=400,l=[];for(let Y=0;Y<a;Y++)l.push(s.getPointAt(Y/a));const c=(Y,ge)=>{let xe=1/0,Le=0,oe=0;for(let he=0;he<a;he++){const Ye=l[he],Qe=Y-Ye.x,Ke=ge-Ye.z,Fe=Qe*Qe+Ke*Ke;Fe<xe&&(xe=Fe,Le=Ye.y,oe=he)}return{dist:Math.sqrt(xe),roadY:Le,sampleIdx:oe}},h=new de(-10.5,5.5),f=6.2,d=new de(10.5,-6.5),p=(Y,ge)=>{const{dist:xe,roadY:Le}=c(Y,ge);let oe=.85+Math.sin(Y*.055)*Math.cos(ge*.055)*1.55+Math.sin(Y*.11+ge*.08)*.6+Math.cos(Y*.035-ge*.045)*.9;const he=Math.hypot(Y-d.x,ge-d.y);if(he<11.5){const Fe=Math.cos(he/11.5*Math.PI*.5);oe+=Fe*Fe*2.25}const Ye=Math.hypot(Y,ge);if(Ye>33){const Fe=vt.clamp((Ye-33)/56,0,1),at=Math.atan2(ge,Y);oe+=Fe*Fe*(10.5+Math.sin(at*5)*3.4+Math.cos(at*3+.7)*2.8)}const Qe=Math.hypot(Y-h.x,ge-h.y);if(Qe<f+3.2){const Fe=vt.smoothstep(Qe,f-1.5,f+3.2);oe=vt.lerp(-.48,oe,Fe)}const Ke=vt.smoothstep(xe,1.15,8.6);return vt.lerp(Le-.008,oe,Ke)},_=pC(s,480,1.34),y=new re(_,e.roadSurface);y.receiveShadow=!0,n.add(y);let g=1337;const u=()=>(g=g*16807%2147483647,(g-1)/2147483646),m=new zt,v=new A,x=new A,P=new A,b=new A(0,1,0),w=380,R=new rs(.085,1),E=new wt({roughness:.88,metalness:.02}),S=new la(R,E,w);S.castShadow=!0,S.receiveShadow=!0;const D=[new ee(12957861),new ee(11050382),new ee(9340539),new ee(13944496)];for(let Y=0;Y<w;Y++){const ge=((Y>>2)/(w>>2)+u()*.018)%1;s.getPointAt(ge,v),s.getTangentAt(ge,x),P.crossVectors(x,b).normalize();const Le=((Y>>1)%2===0?1:-1)*(1.12+u()*.55),oe=v.x+P.x*Le+(u()-.5)*.28,he=v.z+P.z*Le+(u()-.5)*.28,Ye=p(oe,he);m.position.set(oe,Ye+.015,he),m.rotation.set(u()*Math.PI,u()*Math.PI,u()*Math.PI);const Qe=.65+u()*1.15,Ke=.35+u()*.45,Fe=.65+u()*1.05;m.scale.set(Qe,Ke,Fe),m.updateMatrix(),S.setMatrixAt(Y,m.matrix),S.setColorAt(Y,D[Y%D.length])}S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),n.add(S);const B=220,k=180,X=new or(B,B,k,k);X.rotateX(-Math.PI/2);const q=X.attributes.position,G=new Float32Array(q.count*3),te=new ee(5413180),N=new ee(8368192),Z=new ee(3831089),J=new ee(12098674),pe=new ee(13283974),ye=new ee;for(let Y=0;Y<q.count;Y++){const ge=q.getX(Y),xe=q.getZ(Y),Le=p(ge,xe);q.setY(Y,Le);const{dist:oe}=c(ge,xe),he=Math.hypot(ge-h.x,xe-h.y),Ye=Math.sin(ge*.09)*Math.cos(xe*.09)*.5+.5,Qe=Math.sin(ge*.27+xe*.19)*.5+.5;if(ye.lerpColors(te,N,Ye*.72+Qe*.28),Le>2&&ye.lerp(Z,vt.clamp((Le-2)*.14,0,.58)),oe<2.35){const Ke=1-vt.smoothstep(oe,1.12,2.35);ye.lerp(J,Ke*.78)}if(he<f+1.6){const Ke=1-vt.smoothstep(he,f-.4,f+1.6);ye.lerp(pe,Ke*.86)}G[Y*3]=ye.r,G[Y*3+1]=ye.g,G[Y*3+2]=ye.b}X.setAttribute("color",new jn(G,3)),X.computeVertexNormals();const et=new wt({vertexColors:!0,roughness:.92,metalness:0}),j=new re(X,et);j.receiveShadow=!0,n.add(j);const ae=[{innerR:88,outerR:145,minH:7.5,maxH:21,phase:.4,dayColor:new ee(5409865),sunsetColor:new ee(7164747),nightColor:new ee(1452349)},{innerR:132,outerR:198,minH:14,maxH:34,phase:2.1,dayColor:new ee(7118456),sunsetColor:new ee(9198940),nightColor:new ee(1319995)},{innerR:182,outerR:265,minH:22,maxH:48,phase:4.2,dayColor:new ee(9222312),sunsetColor:new ee(11890024),nightColor:new ee(1187896)}],Me=[];ae.forEach(Y=>{const ge=gC(Y.innerR,Y.outerR,Y.minH,Y.maxH,96,Y.phase),xe=new wt({color:Y.dayColor.clone(),roughness:.95,metalness:0}),Le=new re(ge,xe);Le.receiveShadow=!1,n.add(Le),Me.push(xe)});const le=.22,Ie=new lp(f+.35,48);Ie.rotateX(-Math.PI/2);const We=new li({color:2397882,roughness:.09,metalness:.12,clearcoat:1,clearcoatRoughness:.06,transparent:!0,opacity:.9}),Oe=new re(Ie,We);Oe.position.set(h.x,le,h.y),Oe.receiveShadow=!0,n.add(Oe);const Ze=new wt({color:4097330,roughness:.72}),Q=new wt({color:16224179,roughness:.4});for(let Y=0;Y<14;Y++){const ge=1.1+Y/14*(f-1.8),xe=Y*2.15,Le=h.x+Math.cos(xe)*ge,oe=h.y+Math.sin(xe)*ge,he=new re(new Rt(.32,.32,.015,16,1,!1,0,Math.PI*1.85),Ze);if(he.position.set(Le,le+.01,oe),he.rotation.y=xe,n.add(he),Y%2===0){const Ye=new re(new rs(.1,0),Q);Ye.position.set(Le,le+.055,oe),n.add(Ye)}}const ie=new ot,L=p(d.x,d.y);ie.position.set(d.x,L-.1,d.y),ie.lookAt(0,L,0),n.add(ie);const Ne=new wt({color:16051425,roughness:.85}),se=new wt({color:11222823,roughness:.72}),Se=new wt({color:7227174,roughness:.82}),me=new re(new Rt(1.15,1.65,4.6,18),Ne);me.position.y=2.3,me.castShadow=!0,me.receiveShadow=!0,ie.add(me);const ke=new re(new ki(1.42,1.55,18),se);ke.position.y=5.25,ke.castShadow=!0,ie.add(ke);const be=new ot;be.position.set(0,4.1,1.35),ie.add(be);const T=new re(new Rt(.22,.22,.5,12),Se);T.rotation.x=Math.PI/2,be.add(T);const M=new wt({color:16446435,roughness:.75,side:In});for(let Y=0;Y<4;Y++){const ge=new ot;ge.rotation.z=Y/4*Math.PI*2,be.add(ge);const xe=new re(new Jn(.11,2.75,.08),Se);xe.position.y=1.4,xe.castShadow=!0,ge.add(xe);const Le=new re(new Jn(.55,2.1,.02),M);Le.position.set(.3,1.6,.02),Le.rotation.y=.18,Le.castShadow=!0,ge.add(Le)}const H=[4558644,6531128,8568130,3370539,14063140,15108717].map(Y=>new wt({color:Y,roughness:.8,metalness:.01})),K=new wt({color:14274496,roughness:.82}),W=new wt({color:9275261,roughness:.88}),_e=(Y,ge,xe,Le)=>{const oe=p(Y,ge),he=new ot;he.position.set(Y,oe-.06,ge),he.rotation.y=u()*Math.PI*2,he.scale.setScalar(xe);const Ye=Le==="cypress",Qe=Le==="blossom",Ke=Qe?K:Se,Fe=Ye?1.35:1.85,at=new re(new Rt(.13,.28,Fe,10),Ke);if(at.position.y=Fe*.5,at.castShadow=!0,at.receiveShadow=!0,he.add(at),Ye)[{y:1.85,r:.72,h:1.8},{y:2.75,r:.56,h:1.6},{y:3.55,r:.36,h:1.3}].forEach((Ut,kn)=>{const Ct=new re(new ki(Ut.r,Ut.h,12),H[kn===2?0:3]);Ct.position.y=Ut.y,Ct.castShadow=!0,Ct.receiveShadow=!0,he.add(Ct)});else{[-1,1].forEach(Ct=>{const zn=new re(new Rt(.06,.11,.75,8),Ke);zn.position.set(Ct*.22,Fe-.15,(Ct>0?1:-1)*.08),zn.rotation.z=-Ct*.52,zn.castShadow=!0,he.add(zn)});const Tt=Qe?H[u()>.45?4:5]:H[Math.floor(u()*3)],Ut=Qe?H[4]:H[2];[{pos:[0,2.25,0],r:1.08,hi:!1},{pos:[.64,1.92,.36],r:.78,hi:!1},{pos:[-.62,1.95,-.34],r:.82,hi:!1},{pos:[-.36,2.42,.52],r:.74,hi:!0},{pos:[.42,2.48,-.44],r:.72,hi:!0},{pos:[.05,2.78,.08],r:.68,hi:!0}].forEach(Ct=>{const zn=new re(new kc(Ct.r,2),Ct.hi?Ut:Tt);zn.position.set(Ct.pos[0],Ct.pos[1],Ct.pos[2]),zn.scale.set(1.05,.84,1.02),zn.castShadow=!0,zn.receiveShadow=!0,he.add(zn)})}n.add(he)};[{u:.08,side:1,count:5,spread:4.5},{u:.19,side:-1,count:4,spread:4},{u:.32,side:1,count:6,spread:5.2},{u:.46,side:-1,count:4,spread:3.8},{u:.61,side:1,count:5,spread:4.8},{u:.74,side:-1,count:5,spread:4.4},{u:.88,side:1,count:6,spread:5}].forEach((Y,ge)=>{s.getPointAt(Y.u,v),s.getTangentAt(Y.u,x),P.crossVectors(x,b).normalize();const xe=Y.side*(4.2+ge%2*1.8),Le=v.x+P.x*xe,oe=v.z+P.z*xe;for(let he=0;he<Y.count;he++){const Ye=u()*Math.PI*2,Qe=u()*Y.spread,Ke=Le+Math.cos(Ye)*Qe,Fe=oe+Math.sin(Ye)*Qe,{dist:at}=c(Ke,Fe),Tt=Math.hypot(Ke-h.x,Fe-h.y),Ut=Math.hypot(Ke-d.x,Fe-d.y);if(at<2.85||Tt<f+1.5||Ut<4.4)continue;const kn=.68+u()*.65,Ct=u(),zn=Ct<.22?"cypress":Ct<.38?"blossom":"oak";_e(Ke,Fe,kn,zn)}});for(let Y=0;Y<58;Y++){const ge=u()*Math.PI*2,xe=Y<14?5.5+u()*13.5:31+u()*42,Le=Math.cos(ge)*xe,oe=Math.sin(ge)*xe,{dist:he}=c(Le,oe),Ye=Math.hypot(Le-h.x,oe-h.y),Qe=Math.hypot(Le-d.x,oe-d.y);if(he<3.1||Ye<f+1.8||Qe<4.6)continue;const Ke=.78+u()*.78,Fe=u(),at=Fe<.28?"cypress":Fe<.42?"blossom":"oak";_e(Le,oe,Ke,at)}for(let Y=0;Y<38;Y++){const ge=(Y/38+u()*.015)%1;s.getPointAt(ge,v),s.getTangentAt(ge,x),P.crossVectors(x,b).normalize();const Le=(u()>.5?1:-1)*(1.85+u()*3.6),oe=v.x+P.x*Le,he=v.z+P.z*Le,{dist:Ye}=c(oe,he),Qe=Math.hypot(oe-h.x,he-h.y);if(Ye<1.65||Qe<f+1)continue;const Ke=p(oe,he);if(Y%4===0){const Fe=new ot;Fe.position.set(oe,Ke-.02,he);const at=.32+u()*.22,Tt=new re(new rs(at,1),W);Tt.scale.set(1.25,.68,1.05),Tt.position.y=at*.35,Tt.rotation.y=u()*Math.PI,Tt.castShadow=!0,Tt.receiveShadow=!0,Fe.add(Tt);const Ut=new re(new rs(at*.58,1),W);Ut.scale.set(1.1,.65,.95),Ut.position.set(at*.85,at*.2,at*.3),Ut.castShadow=!0,Ut.receiveShadow=!0,Fe.add(Ut),n.add(Fe)}else{const Fe=new ot;Fe.position.set(oe,Ke-.02,he);const at=H[Y%3],Tt=2+Y%2;for(let Ut=0;Ut<Tt;Ut++){const kn=(Ut===0?.38:.26)+u()*.14,Ct=new re(new kc(kn,2),at);Ct.position.set((Ut-.5)*.32,kn*.58,(u()-.5)*.24),Ct.scale.set(1.18,.76,1.12),Ct.castShadow=!0,Ct.receiveShadow=!0,Fe.add(Ct)}n.add(Fe)}}const we=[.14,.48,.82],qe=new wt({color:14204564,roughness:.78});we.forEach((Y,ge)=>{s.getPointAt(Y,v),s.getTangentAt(Y,x),P.crossVectors(x,b).normalize();const xe=ge%2===0?1:-1,Le=v.x+P.x*xe*2.15,oe=v.z+P.z*xe*2.15,he=p(Le,oe),Ye=new ot;Ye.position.set(Le,he,oe),Ye.rotation.y=Math.atan2(x.x,x.z)+xe*.4;const Qe=new re(new Rt(.055,.068,1.45,8),Se);Qe.position.y=.72,Qe.castShadow=!0,Ye.add(Qe);const Ke=new re(new ki(.08,.1,8),se);Ke.position.y=1.48,Ye.add(Ke),[1.22,1.02].forEach((Fe,at)=>{const Tt=new re(new Jn(.56,.13,.028),qe);Tt.position.set((at===0?1:-1)*.16,Fe,0),Tt.rotation.y=at===0?.25:-.45,Tt.castShadow=!0,Ye.add(Tt)}),n.add(Ye)});const ce=new wt({color:16774084,emissive:new ee(16758578),emissiveIntensity:.3,roughness:.2});[{startU:.01,count:9,side:-1},{startU:.18,count:8,side:1},{startU:.34,count:9,side:-1},{startU:.54,count:8,side:1},{startU:.76,count:9,side:-1}].forEach(Y=>{const ge=[];for(let xe=0;xe<Y.count;xe++){const Le=(Y.startU+xe*.014)%1;s.getPointAt(Le,v),s.getTangentAt(Le,x),P.crossVectors(x,b).normalize();const oe=v.clone().addScaledVector(P,Y.side*2.08);oe.y=p(oe.x,oe.z),ge.push(oe);const he=new re(new Rt(.06,.07,.82,8),Se);if(he.position.copy(oe).add(new A(0,.38,0)),he.castShadow=!0,n.add(he),xe===0||xe===Y.count-1){const Ye=new re(new Rt(.08,.065,.18,8),ce);Ye.position.copy(oe).add(new A(0,.88,0));const Qe=new re(new ki(.11,.09,8),e.bikeDarkMetal);Qe.position.y=.11,Ye.add(Qe),n.add(Ye)}}for(let xe=0;xe<ge.length-1;xe++){const Le=ge[xe],oe=ge[xe+1];[.32,.62].forEach(he=>{const Ye=Le.clone().add(new A(0,he,0)),Qe=oe.clone().add(new A(0,he,0)),Ke=new A().subVectors(Qe,Ye),Fe=new re(new Rt(.032,.032,Ke.length(),6),Se);Fe.position.copy(Ye).addScaledVector(Ke,.5),Fe.quaternion.setFromUnitVectors(new A(0,1,0),Ke.normalize()),Fe.castShadow=!0,n.add(Fe)})}});const Ve=2200,He=mC(),Ue=new wt({vertexColors:!0,roughness:.78,metalness:0,side:In}),nt=new la(He,Ue,Ve);nt.receiveShadow=!0;let $e=0;for(let Y=0;Y<900&&$e<Ve;Y++){const ge=(Y/900+(u()-.5)*.01)%1;s.getPointAt(ge<0?ge+1:ge,v),s.getTangentAt(ge<0?ge+1:ge,x),P.crossVectors(x,b).normalize();const Le=(Y%2===0?1:-1)*(1.28+Math.pow(u(),1.4)*2.2),oe=v.x+P.x*Le+(u()-.5)*.35,he=v.z+P.z*Le+(u()-.5)*.35,{dist:Ye}=c(oe,he);if(Ye<1.22)continue;const Qe=p(oe,he);m.position.set(oe,Qe-.01,he),m.rotation.set(0,u()*Math.PI*2,0);const Ke=.68+u()*.78;m.scale.set(Ke,Ke*(.8+u()*.45),Ke),m.updateMatrix(),nt.setMatrixAt($e++,m.matrix)}const mt=28;for(let Y=0;Y<mt&&$e<Ve;Y++){const ge=Y/mt*Math.PI*2+u()*.25,xe=Y<10?6.5+u()*14:22+u()*34,Le=Math.cos(ge)*xe,oe=Math.sin(ge)*xe,he=Math.floor((Ve-$e)/(mt-Y));for(let Ye=0;Ye<he&&$e<Ve;Ye++){const Qe=u()*Math.PI*2,Ke=Math.pow(u(),.75)*5.8,Fe=Le+Math.cos(Qe)*Ke,at=oe+Math.sin(Qe)*Ke,{dist:Tt}=c(Fe,at),Ut=Math.hypot(Fe-h.x,at-h.y);if(Tt<1.3||Ut<f+.4)continue;const kn=p(Fe,at);m.position.set(Fe,kn-.01,at),m.rotation.set(0,u()*Math.PI*2,0);const Ct=.75+u()*.85;m.scale.set(Ct,Ct*(.85+u()*.5),Ct),m.updateMatrix(),nt.setMatrixAt($e++,m.matrix)}}nt.count=$e,nt.instanceMatrix.needsUpdate=!0,n.add(nt);const F=720,Ae=new Rt(.012,.018,.22,5);Ae.translate(0,.11,0);const $=new wt({color:3901233,roughness:.8}),ne=new la(Ae,$,F),Ce=new rs(.068,0);Ce.scale(1.05,.52,1.05),Ce.translate(0,.23,0);const Re=new wt({roughness:.48}),Je=new la(Ce,Re,F),gt=[new ee(16769126),new ee(16742764),new ee(16776695),new ee(12946408),new ee(16755008),new ee(8176895)];let Mt=0;const ht=24;for(let Y=0;Y<ht&&Mt<F;Y++){const ge=(Y/ht+u()*.03)%1;s.getPointAt(ge,v),s.getTangentAt(ge,x),P.crossVectors(x,b).normalize();const xe=Y%2===0?1:-1,Le=2+u()*9.5,oe=v.x+P.x*xe*Le,he=v.z+P.z*xe*Le,Ye=gt[Y%gt.length],Qe=gt[(Y+2)%gt.length],Ke=Math.floor(F/ht);for(let Fe=0;Fe<Ke&&Mt<F;Fe++){const at=u()*Math.PI*2,Tt=Math.pow(u(),.8)*3.4,Ut=oe+Math.cos(at)*Tt,kn=he+Math.sin(at)*Tt,{dist:Ct}=c(Ut,kn),zn=Math.hypot(Ut-h.x,kn-h.y);if(Ct<1.48||zn<f+.8)continue;const j_=p(Ut,kn);m.position.set(Ut,j_-.01,kn),m.rotation.set((u()-.5)*.24,u()*Math.PI*2,(u()-.5)*.24);const Y_=.68+u()*.72;m.scale.setScalar(Y_),m.updateMatrix(),ne.setMatrixAt(Mt,m.matrix),Je.setMatrixAt(Mt,m.matrix),Je.setColorAt(Mt,u()<.8?Ye:Qe),Mt++}}ne.count=Mt,Je.count=Mt,ne.instanceMatrix.needsUpdate=!0,Je.instanceMatrix.needsUpdate=!0,Je.instanceColor&&(Je.instanceColor.needsUpdate=!0),n.add(ne,Je);const $t=new ot;n.add($t);const Zt=new wt({color:16777215,roughness:.92,metalness:0,emissive:new ee(16774885),emissiveIntensity:.18});for(let Y=0;Y<22;Y++){const ge=new ot,xe=Y/22*Math.PI*2+u()*.22,Le=52+u()*48;ge.position.set(Math.cos(xe)*Le,13+u()*12,Math.sin(xe)*Le),ge.lookAt(0,ge.position.y,0);const oe=5+Math.floor(u()*3);for(let he=0;he<oe;he++){const Ye=he===2||he===3,Qe=(Ye?3.1:2.1)+u()*.7,Ke=new re(new bt(Qe,14,12),Zt);Ke.position.set((he-oe*.5)*2.1,(Ye?.45:-.15)+(u()-.5)*.4,(u()-.5)*.9),Ke.scale.set(1.25,.68,.92),ge.add(Ke)}$t.add(ge)}const Ri=[],On=new Bo;On.moveTo(0,0),On.quadraticCurveTo(.06,.06,.04,0),On.quadraticCurveTo(.05,-.05,0,0);const dt=new cp(On),jt=new Hi({color:16757504,side:In});for(let Y=0;Y<12;Y++){const ge=Y/12*Math.PI*2,xe=s.getPointAt(Y/12),Le=new ot,oe=new re(dt,jt),he=new re(dt,jt);he.scale.x=-1,Le.add(oe,he),n.add(Le),Ri.push({group:Le,leftWing:oe,rightWing:he,center:xe.clone().add(new A(Math.cos(ge)*2.2,1.1,Math.sin(ge)*2.2)),phase:Y*1.7,speed:1.4+Y%3*.35})}const Bt=document.createElement("canvas");Bt.width=64,Bt.height=64;const Kt=Bt.getContext("2d"),Qt=Kt.createRadialGradient(32,32,2,32,32,30);Qt.addColorStop(0,"rgba(255, 255, 255, 1.0)"),Qt.addColorStop(.45,"rgba(255, 255, 255, 0.55)"),Qt.addColorStop(1,"rgba(255, 255, 255, 0.0)"),Kt.fillStyle=Qt,Kt.fillRect(0,0,64,64);const ri=new mi(Bt),si=150,yn=new Float32Array(si*3);for(let Y=0;Y<si;Y++){const ge=u()*Math.PI*2,xe=8+u()*34;yn[Y*3]=Math.cos(ge)*xe,yn[Y*3+1]=.8+u()*4.5,yn[Y*3+2]=Math.sin(ge)*xe}const Pi=new rn;Pi.setAttribute("position",new jn(yn,3));const As=new N_({map:ri,color:16770431,size:.22,transparent:!0,opacity:.82,blending:Ic,depthWrite:!1}),it=new tA(Pi,As);n.add(it);const rt={uTopColor:{value:new ee(2323143)},uMidColor:{value:new ee(7255794)},uHorizonColor:{value:new ee(13823231)},uBottomColor:{value:new ee(7183956)},uSunDir:{value:new A(.55,.54,.42).normalize()},uSunColor:{value:new ee(16774097)},uStarIntensity:{value:0}},C=new dr({vertexShader:dC,fragmentShader:fC,uniforms:rt,side:Cn,depthWrite:!1}),U=new re(new bt(285,32,24),C);n.add(U);const z=new IA(14676735,6063937,.92);t.add(z);const V=new OA(16774628,.28);t.add(V);const I=new b0(16774105,2.55);I.castShadow=!0,I.shadow.mapSize.set(4096,4096);const fe=11.5;I.shadow.camera.left=-fe,I.shadow.camera.right=fe,I.shadow.camera.top=fe,I.shadow.camera.bottom=-fe,I.shadow.camera.near=1,I.shadow.camera.far=62,I.shadow.bias=-18e-5,I.shadow.normalBias=.014,I.shadow.radius=2.2,t.add(I),t.add(I.target);const Ee=new b0(16770229,.72);Ee.position.set(-18,12,-16),t.add(Ee),t.fog=new Fc(13232383,.0052);const Xe=new A,ze=new A,tt=new A,st=new A,Ge=new A,pt=new A,At=new A,Dt=new A(0,1,0),pn=new A,yt=Y=>{let ge=Y%o/o;ge<0&&(ge+=1);const xe=(Y+1.85)%o/o;s.getPointAt(ge,Xe),s.getTangentAt(ge,ze),s.getTangentAt(xe<0?xe+1:xe,tt),st.set(ze.x,0,ze.z).normalize(),Ge.set(tt.x,0,tt.z).normalize();const Le=st.z*Ge.x-st.x*Ge.z,oe=vt.clamp(Le*2.2,-.65,.65),he=ze.y*100;return pt.crossVectors(Dt,ze).normalize(),At.crossVectors(ze,pt).normalize(),pn.copy(Xe).addScaledVector(Dt,.025),{position:pn,tangent:ze,right:pt,up:At,curvature:oe,gradePercent:he}},je={day:{top:new ee(2191044),mid:new ee(6861552),horizon:new ee(13954559),bottom:new ee(6921294),sunColor:new ee(16774100),sunDir:new A(.55,.56,.42).normalize(),sunIntensity:2.55,rimColor:new ee(16771258),rimIntensity:.72,hemiSky:new ee(14676735),hemiGround:new ee(6064449),hemiIntensity:.92,fogColor:new ee(13363455),fogDensity:.0048,starIntensity:0,cloudEmissive:new ee(16775403)},sunset:{top:new ee(2435432),mid:new ee(12081509),horizon:new ee(16750172),bottom:new ee(5191987),sunColor:new ee(16750664),sunDir:new A(.74,.21,.44).normalize(),sunIntensity:2.25,rimColor:new ee(16744007),rimIntensity:.95,hemiSky:new ee(16757374),hemiGround:new ee(4666928),hemiIntensity:.76,fogColor:new ee(15899760),fogDensity:.0056,starIntensity:0,cloudEmissive:new ee(16748124)},night:{top:new ee(330264),mid:new ee(924984),horizon:new ee(1782360),bottom:new ee(594722),sunColor:new ee(10931199),sunDir:new A(-.48,.62,-.35).normalize(),sunIntensity:1.05,rimColor:new ee(7317759),rimIntensity:.65,hemiSky:new ee(3297925),hemiGround:new ee(1253422),hemiIntensity:.62,fogColor:new ee(1254464),fogDensity:.0052,starIntensity:1,cloudEmissive:new ee(2044498)}},oi=new A;return{root:n,pathCurve:s,pathLength:o,sunLight:I,rimLight:Ee,hemiLight:z,ambientLight:V,getPathPoseAtDistance:yt,updateEnvironment:(Y,ge,xe,Le)=>{be.rotation.z=-Y*.48,$t.rotation.y=Y*.01,Ri.forEach(Fe=>{const at=Y*Fe.speed+Fe.phase;Fe.group.position.set(Fe.center.x+Math.cos(at)*1.1,Fe.center.y+Math.sin(at*2.3)*.28,Fe.center.z+Math.sin(at)*1.1),Fe.group.rotation.y=-at+Math.PI;const Tt=Math.sin(Y*22+Fe.phase)*.85;Fe.leftWing.rotation.z=Tt,Fe.rightWing.rotation.z=-Tt}),it.rotation.y=Y*.018,As.color.setHex(Le==="night"?11730777:16770431),As.size=Le==="night"?.26:.2;const oe=je[Le],he=Math.min(1,ge*3.5);rt.uTopColor.value.lerp(oe.top,he),rt.uMidColor.value.lerp(oe.mid,he),rt.uHorizonColor.value.lerp(oe.horizon,he),rt.uBottomColor.value.lerp(oe.bottom,he),rt.uSunColor.value.lerp(oe.sunColor,he),rt.uSunDir.value.lerp(oe.sunDir,he).normalize(),rt.uStarIntensity.value=vt.lerp(rt.uStarIntensity.value,oe.starIntensity,he),Me.forEach((Fe,at)=>{const Tt=ae[at],Ut=Le==="day"?Tt.dayColor:Le==="sunset"?Tt.sunsetColor:Tt.nightColor;Fe.color.lerp(Ut,he)}),I.color.lerp(oe.sunColor,he),I.intensity=vt.lerp(I.intensity,oe.sunIntensity,he),Ee.color.lerp(oe.rimColor,he),Ee.intensity=vt.lerp(Ee.intensity,oe.rimIntensity,he),Ee.position.copy(xe).addScaledVector(rt.uSunDir.value,-22).add(new A(0,14,0)),z.color.lerp(oe.hemiSky,he),z.groundColor.lerp(oe.hemiGround,he),z.intensity=vt.lerp(z.intensity,oe.hemiIntensity,he),Zt.emissive.lerp(oe.cloudEmissive,he),ce.emissiveIntensity=Le==="day"?.15:2.2,t.fog instanceof Fc&&(t.fog.color.lerp(oe.fogColor,he),t.fog.density=vt.lerp(t.fog.density,oe.fogDensity,he));const Ye=.2,Qe=Math.round(xe.x/Ye)*Ye,Ke=Math.round(xe.z/Ye)*Ye;I.target.position.set(Qe,xe.y,Ke),oi.copy(rt.uSunDir.value).multiplyScalar(28),I.position.copy(I.target.position).add(oi)}}}const B0=[{name:"Hero 3/4 Tracking Shot",offset:new A(2.35,.92,1.95),lookOffset:new A(0,1.04,.12),orbitSpeed:.08},{name:"Drivetrain & Pedal Close-Up",offset:new A(-1.55,.48,-.18),lookOffset:new A(0,.56,0),orbitSpeed:-.05},{name:"Expressive Portrait & Beak",offset:new A(1.18,1.18,1.48),lookOffset:new A(0,1.28,.22),orbitSpeed:.04},{name:"Countryside Sweeping Vista",offset:new A(4.2,1.65,-3.2),lookOffset:new A(0,1.25,1.2),orbitSpeed:.12},{name:"Dynamic Over-Shoulder Chase",offset:new A(.68,1.26,-2.65),lookOffset:new A(0,1.16,1.6),orbitSpeed:-.04}],_C=({controls:t,onTelemetryUpdate:e,bellTriggerCount:n,waveTriggerCount:i,resetCamTriggerCount:r})=>{const s=Et.useRef(null),o=Et.useRef(t);o.current=t;const a=Et.useRef(null);return Et.useEffect(()=>{var l;n>0&&((l=a.current)==null||l.ringBell())},[n]),Et.useEffect(()=>{var l;i>0&&((l=a.current)==null||l.waveWing())},[i]),Et.useEffect(()=>{var l;r>0&&((l=a.current)==null||l.resetCamera())},[r]),Et.useEffect(()=>{var l;(l=a.current)==null||l.setBikePaint(X_[t.bikeColor])},[t.bikeColor]),Et.useEffect(()=>{const l=s.current;if(!l)return;const c=new I_,h=l.clientWidth<l.clientHeight,f=new Zn(h?54:43,l.clientWidth/l.clientHeight,.1,420),d=new JT({antialias:!0,powerPreference:"high-performance"});d.setSize(l.clientWidth,l.clientHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,d.shadowMap.type=t_,d.toneMapping=i_,d.toneMappingExposure=1.05,l.appendChild(d.domElement);const p=QA(d);c.environment=p,c.environmentIntensity=.68;const _=new BA(f,d.domElement);_.enableDamping=!0,_.dampingFactor=.065,_.enablePan=!1,_.minDistance=1.25,_.maxDistance=14,_.maxPolarAngle=Math.PI*.485,_.minPolarAngle=.08;const y=aC(o.current.bikeColor),g=vC(c,y),u=new ot;c.add(u);const m=new ot;u.add(m);const v=lC(y);m.add(v.root);const x=hC(y);m.add(x.root);const P=g.getPathPoseAtDistance(0);u.position.copy(P.position);const b=new Lt;b.makeBasis(P.right,P.up,P.tangent),u.quaternion.setFromRotationMatrix(b);const w=()=>{const Ze=new A(2.12,.88,1.82).applyQuaternion(u.quaternion),Q=u.position.clone().add(new A(0,.82,0));_.target.copy(Q),f.position.copy(u.position).add(Ze),_.update()};w();let R=0,E=3.2;const S=6.2;let D=0,B=0,k=0,X="orbit";i>0&&x.triggerWave(),a.current={ringBell:()=>{k=.85},waveWing:()=>{x.triggerWave()},resetCamera:()=>{w()},setBikePaint:Ze=>{y.bikeFramePaint.color.setHex(Ze)}};let q=0,G=0,te=60,N=0;const Z=u.position.clone(),J=new A,pe=new A,ye=new A,et=new A,j=new A,ae=new A(0,1,0);let Me=performance.now(),le=0,Ie=0;const We=Ze=>{Ie=requestAnimationFrame(We);const Q=Math.max(0,(Ze-Me)/1e3);Me=Ze;const ie=Math.min(Q,.05);le+=ie,q++,G+=Q,G>=.5&&(te=Math.round(q/G),q=0,G=0);const L=o.current,Ne=L.timeOfDay==="day"?.68:L.timeOfDay==="sunset"?.54:.34;c.environmentIntensity=vt.lerp(c.environmentIntensity,Ne,Math.min(1,ie*4));const Se=(L.isPlaying?L.speedPercent/100:0)*S;E=vt.lerp(E,Se,Math.min(1,ie*4.5)),E<.002&&Se===0&&(E=0);const me=E/S;R+=E*ie;const ke=g.getPathPoseAtDistance(R);Z.copy(u.position),u.position.copy(ke.position),b.makeBasis(ke.right,ke.up,ke.tangent),u.quaternion.setFromRotationMatrix(b);const be=vt.clamp(ke.curvature*.72,-.42,.42),T=Math.sin(R/.37/2.15)*.038*me;D=vt.lerp(D,be+T,Math.min(1,ie*8));const M=vt.clamp(ke.curvature*me*.48,-.28,.28);B=vt.lerp(B,M,Math.min(1,ie*6)),m.rotation.z=B,k>0&&(k=Math.max(0,k-ie));const O=v.updateKinematics(R,D,0,k,L.timeOfDay==="night"),H=x.updateAnimation({time:le,dt:ie,speedNormalized:me,crankAngle:O.crankAngle,steerAngle:D,bankAngle:B,bellRingPhase:k,leftPedalBikePos:O.leftPedalBikePos,rightPedalBikePos:O.rightPedalBikePos,leftPedalPitch:O.leftPedalPitch,rightPedalPitch:O.rightPedalPitch,leftGripBikePos:O.leftGripBikePos,rightGripBikePos:O.rightGripBikePos});v.saddleGroup.position.y=.89+H.saddleBounce*.28,g.updateEnvironment(le,ie,u.position,L.timeOfDay),J.subVectors(u.position,Z);let K;if(L.cameraMode==="orbit")f.position.add(J),_.target.set(u.position.x,u.position.y+.82,u.position.z),_.update();else{if(j.set(0,1.02,.15),L.cameraMode==="chase")et.set(0,1.24,-3.15),j.set(0,1.15,1.5);else if(L.cameraMode==="profile")et.set(-2.55,.78,-.05),j.set(0,.88,-.05);else if(L.cameraMode==="front")et.set(.65,1.02,2.35),j.set(0,1.14,.1);else if(L.cameraMode==="cinematic"){const ue=Math.floor(le/6.5)%B0.length,we=le%6.5/6.5,qe=B0[ue];K=qe.name;const ce=(we-.5)*qe.orbitSpeed*2.5;et.copy(qe.offset).applyAxisAngle(ae,ce),j.copy(qe.lookOffset)}pe.copy(et).applyQuaternion(u.quaternion).add(u.position),ye.copy(j).applyQuaternion(u.quaternion).add(u.position);const W=X!==L.cameraMode?1:Math.min(1,ie*5.5);f.position.lerp(pe,W),_.target.lerp(ye,W),_.update()}if(X=L.cameraMode,d.render(c,f),N+=Q,N>=.08){N=0;const _e=E/(2*Math.PI*.37)*60/2.15;e({speedKmh:E*3.6,cadenceRpm:Math.round(_e),distanceMeters:R,fps:te,gradePercent:Math.round(ke.gradePercent),activeCinematicShot:K})}};Ie=requestAnimationFrame(We);const Oe=()=>{if(!l)return;const Ze=l.clientWidth,Q=l.clientHeight;f.fov=Ze<Q?54:43,f.aspect=Ze/Q,f.updateProjectionMatrix(),d.setSize(Ze,Q)};return window.addEventListener("resize",Oe),()=>{window.removeEventListener("resize",Oe),cancelAnimationFrame(Ie),_.dispose(),p.dispose(),d.dispose(),d.domElement.parentNode===l&&l.removeChild(d.domElement)}},[]),Pe.jsx("div",{ref:s,className:"relative w-full h-full cursor-grab active:cursor-grabbing"})};class xC{constructor(){au(this,"ctx",null);au(this,"enabled",!0)}setEnabled(e){this.enabled=e}ensureContext(){if(!this.enabled||typeof window>"u")return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}playBikeBell(){const e=this.ensureContext();if(!e)return;const n=e.currentTime,i=[0,.055,.11,.24,.295],r=[2180,3420,4890];i.forEach((s,o)=>{const a=o===2||o===4,l=a?.95:.16,c=a?.11:.05;r.forEach((h,f)=>{const d=e.createOscillator(),p=e.createGain();d.type=f===0?"sine":"triangle",d.frequency.setValueAtTime(h*(1+o%2*.008),n+s),p.gain.setValueAtTime(1e-4,n+s),p.gain.linearRampToValueAtTime(c/(f+1),n+s+.006),p.gain.exponentialRampToValueAtTime(1e-4,n+s+l),d.connect(p),p.connect(e.destination),d.start(n+s),d.stop(n+s+l+.02)})})}playPelicanChuckle(){const e=this.ensureContext();if(!e)return;const n=e.currentTime;[{t:0,f1:310,f2:440,d:.13},{t:.16,f1:360,f2:520,d:.18}].forEach(r=>{const s=e.createOscillator(),o=e.createBiquadFilter(),a=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(r.f1,n+r.t),s.frequency.exponentialRampToValueAtTime(r.f2,n+r.t+r.d*.65),s.frequency.exponentialRampToValueAtTime(r.f1*.9,n+r.t+r.d),o.type="bandpass",o.frequency.setValueAtTime(850,n+r.t),o.Q.setValueAtTime(3.2,n+r.t),a.gain.setValueAtTime(.001,n+r.t),a.gain.linearRampToValueAtTime(.065,n+r.t+.025),a.gain.exponentialRampToValueAtTime(8e-4,n+r.t+r.d),s.connect(o),o.connect(a),a.connect(e.destination),s.start(n+r.t),s.stop(n+r.t+r.d+.02)})}}const ph=new xC,Wl=[{id:"orbit",label:"Free Orbit Follow",shortLabel:"Orbit"},{id:"chase",label:"Chase Cam",shortLabel:"Chase"},{id:"profile",label:"Side Profile (IK)",shortLabel:"Profile"},{id:"front",label:"Front Portrait",shortLabel:"Front"},{id:"cinematic",label:"Cinematic Auto",shortLabel:"Auto"}],yC=[{id:"teal",name:"Riviera Teal",hex:"#147a82"},{id:"crimson",name:"Vintage Ruby",hex:"#a82420"},{id:"mustard",name:"Honey Ochre",hex:"#d48312"},{id:"sage",name:"Meadow Sage",hex:"#46754c"}],MC=()=>{const[t,e]=Et.useState(()=>{const w=new URLSearchParams(window.location.search),R=w.get("cam"),E=w.get("time"),S=w.get("color"),D=w.get("speed");return{isPlaying:D!=="0",speedPercent:D?Math.max(0,Math.min(100,Number(D))):62,cameraMode:R&&["orbit","chase","profile","front","cinematic"].includes(R)?R:"orbit",timeOfDay:E&&["day","sunset","night"].includes(E)?E:"day",bikeColor:S&&["teal","crimson","mustard","sage"].includes(S)?S:"teal",soundEnabled:!0}}),[n,i]=Et.useState({speedKmh:13.8,cadenceRpm:58,distanceMeters:0,fps:60,gradePercent:0}),[r,s]=Et.useState(0),[o,a]=Et.useState(()=>new URLSearchParams(window.location.search).get("wave")==="1"?1:0),[l,c]=Et.useState(0),[h,f]=Et.useState(!1),d=Et.useCallback(()=>{e(w=>({...w,isPlaying:!w.isPlaying,speedPercent:!w.isPlaying&&w.speedPercent===0?55:w.speedPercent}))},[]),p=Et.useCallback(w=>{const R=Math.max(0,Math.min(100,w));e(E=>({...E,speedPercent:R,isPlaying:R>0}))},[]),_=Et.useCallback(w=>{e(R=>({...R,cameraMode:w}))},[]),y=Et.useCallback(w=>{e(R=>{if(w)return{...R,timeOfDay:w};const E=["day","sunset","night"],S=E[(E.indexOf(R.timeOfDay)+1)%E.length];return{...R,timeOfDay:S}})},[]),g=Et.useCallback(()=>{ph.playBikeBell(),s(w=>w+1),f(!0),setTimeout(()=>f(!1),850)},[]),u=Et.useCallback(()=>{ph.playPelicanChuckle(),a(w=>w+1)},[]),m=Et.useCallback(()=>{e(w=>({...w,cameraMode:"orbit"})),c(w=>w+1)},[]),v=Et.useCallback(()=>{e(w=>{const R=!w.soundEnabled;return ph.setEnabled(R),{...w,soundEnabled:R}})},[]);Et.useEffect(()=>{const w=R=>{R.target instanceof HTMLInputElement||(R.code==="Space"?(R.preventDefault(),d()):R.key==="b"||R.key==="B"?g():R.key==="w"||R.key==="W"?u():R.key==="r"||R.key==="R"?m():R.key==="n"||R.key==="N"?y():(R.key==="c"||R.key==="C")&&e(E=>{const S=Wl.findIndex(B=>B.id===E.cameraMode),D=Wl[(S+1)%Wl.length].id;return{...E,cameraMode:D}}))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[d,g,u,m,y]);const x=Math.max(0,n.distanceMeters),P=x>=1e3?(x/1e3).toFixed(2):Math.floor(x).toString(),b=x>=1e3?"km":"m";return Pe.jsxs("div",{className:"relative w-full h-full overflow-hidden select-none font-sans",children:[Pe.jsx(_C,{controls:t,onTelemetryUpdate:i,bellTriggerCount:r,waveTriggerCount:o,resetCamTriggerCount:l}),Pe.jsxs("header",{className:"pointer-events-none fixed top-0 left-0 right-0 z-20 flex flex-wrap items-start justify-between gap-2 p-2.5 sm:px-6 sm:py-5",children:[Pe.jsxs("div",{className:"pointer-events-auto glass-capsule flex items-center gap-2.5 sm:gap-3 rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 transition-all duration-300 hover:border-white/20",children:[Pe.jsx("div",{className:"flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20",children:Pe.jsx(I1,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.2]"})}),Pe.jsxs("div",{className:"pr-0.5",children:[Pe.jsxs("div",{className:"flex items-center gap-2",children:[Pe.jsx("h1",{className:"font-display text-xs font-bold tracking-tight text-white sm:text-sm",children:"Barnaby's Countryside Ride"}),Pe.jsxs("span",{className:"hidden items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-300 border border-emerald-400/25 sm:inline-flex",children:[Pe.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),Math.max(30,n.fps)," FPS"]})]}),Pe.jsx("p",{className:"hidden text-[10.5px] font-normal tracking-wide text-slate-300/75 sm:block",children:"Interactive 3D Character • Analytical IK • Synchronized Mechanics"})]})]}),Pe.jsxs("div",{className:"pointer-events-auto flex flex-wrap items-center justify-between sm:justify-end gap-1.5 sm:gap-2 w-full sm:w-auto",children:[Pe.jsxs("div",{className:"glass-capsule flex items-center divide-x divide-white/10 rounded-2xl px-1 py-1 sm:px-1.5 sm:py-1.5",children:[Pe.jsxs("div",{className:"px-2 sm:px-3 py-0.5",children:[Pe.jsx("div",{className:"text-[8.5px] sm:text-[9px] font-semibold uppercase tracking-widest text-slate-400",children:"Speed"}),Pe.jsxs("div",{className:"font-mono text-[11px] font-semibold text-white tabular-nums sm:text-sm",children:[n.speedKmh.toFixed(1),Pe.jsx("span",{className:"ml-0.5 sm:ml-1 font-sans text-[9.5px] sm:text-[10px] font-normal text-slate-400",children:"km/h"})]})]}),Pe.jsxs("div",{className:"hidden px-3 py-0.5 sm:block",children:[Pe.jsx("div",{className:"text-[9px] font-semibold uppercase tracking-widest text-slate-400",children:"Cadence"}),Pe.jsxs("div",{className:"font-mono text-xs font-semibold text-white tabular-nums sm:text-sm",children:[n.cadenceRpm,Pe.jsx("span",{className:"ml-1 font-sans text-[10px] font-normal text-slate-400",children:"rpm"})]})]}),Pe.jsxs("div",{className:"px-2 sm:px-3 py-0.5",children:[Pe.jsx("div",{className:"text-[8.5px] sm:text-[9px] font-semibold uppercase tracking-widest text-slate-400",children:"Distance"}),Pe.jsxs("div",{className:"font-mono text-[11px] font-semibold text-white tabular-nums sm:text-sm",children:[P,Pe.jsx("span",{className:"ml-0.5 sm:ml-1 font-sans text-[9.5px] sm:text-[10px] font-normal text-slate-400",children:b})]})]})]}),Pe.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[Pe.jsx("div",{className:"glass-capsule flex items-center rounded-2xl p-1",children:[{id:"day",icon:N1,label:"Day"},{id:"sunset",icon:U1,label:"Sunset"},{id:"night",icon:R1,label:"Night"}].map(w=>{const R=w.icon,E=t.timeOfDay===w.id;return Pe.jsxs("button",{onClick:()=>y(w.id),title:`${w.label} Lighting (Shortcut: N)`,className:`flex items-center gap-1.5 rounded-xl px-2 py-1 sm:px-2.5 sm:py-1.5 text-[11px] font-semibold transition-all duration-200 ${E?"bg-gradient-to-b from-amber-300 to-amber-500 text-slate-950 shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:[Pe.jsx(R,{className:"h-3.5 w-3.5 stroke-[2.1]"}),Pe.jsx("span",{className:"hidden md:inline",children:w.label})]},w.id)})}),Pe.jsxs("div",{className:"glass-capsule flex items-center gap-0.5 sm:gap-1 rounded-2xl p-1",children:[Pe.jsxs("button",{onClick:g,title:"Ring Bicycle Bell (Shortcut: B)",className:`group flex items-center gap-1.5 rounded-xl px-2 py-1 sm:px-2.5 sm:py-1.5 text-[11px] font-semibold text-slate-100 transition-all duration-150 hover:bg-white/10 active:scale-95 ${h?"bg-amber-400/25 text-amber-200":""}`,children:[Pe.jsx(C1,{className:`h-3.5 w-3.5 text-amber-300 transition-transform ${h?"animate-bounce":"group-hover:rotate-12"}`}),Pe.jsx("span",{className:"hidden lg:inline",children:"Bell"})]}),Pe.jsxs("button",{onClick:u,title:"Wave Wing (Shortcut: W)",className:"group flex items-center gap-1.5 rounded-xl px-2 py-1 sm:px-2.5 sm:py-1.5 text-[11px] font-semibold text-slate-100 transition-all duration-150 hover:bg-white/10 active:scale-95",children:[Pe.jsx(b1,{className:"h-3.5 w-3.5 text-sky-300 transition-transform group-hover:rotate-12"}),Pe.jsx("span",{className:"hidden lg:inline",children:"Wave"})]}),Pe.jsx("button",{onClick:v,title:t.soundEnabled?"Mute Audio":"Unmute Audio",className:"flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white active:scale-95",children:t.soundEnabled?Pe.jsx(O1,{className:"h-3.5 w-3.5 text-emerald-300"}):Pe.jsx(k1,{className:"h-3.5 w-3.5 text-slate-400"})}),Pe.jsx("button",{onClick:m,title:"Reset Camera View (Shortcut: R)",className:"flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white active:scale-95",children:Pe.jsx(D1,{className:"h-3.5 w-3.5 text-amber-300"})})]})]})]})]}),t.cameraMode==="cinematic"&&n.activeCinematicShot&&Pe.jsx("div",{className:"pointer-events-none fixed top-24 sm:top-20 left-1/2 -translate-x-1/2 z-20",children:Pe.jsxs("div",{className:"glass-capsule flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-medium text-amber-200 border border-amber-400/30",children:[Pe.jsx(F1,{className:"h-3 w-3 text-amber-400 animate-pulse"}),Pe.jsx("span",{className:"text-slate-300",children:"Director Angle:"}),Pe.jsx("span",{className:"font-semibold text-white",children:n.activeCinematicShot})]})}),Pe.jsx("footer",{className:"pointer-events-none fixed bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-end p-2.5 sm:p-3 sm:pb-5",children:Pe.jsx("div",{className:"pointer-events-auto glass-dock w-full max-w-2xl rounded-3xl px-3.5 py-2.5 sm:px-5 sm:py-3.5 transition-all duration-300",children:Pe.jsxs("div",{className:"flex flex-col gap-2.5 sm:gap-3 sm:flex-row sm:items-center sm:justify-between",children:[Pe.jsxs("div",{className:"flex flex-1 items-center gap-3 sm:gap-3.5",children:[Pe.jsx("button",{onClick:d,title:t.isPlaying?"Pause Ride (Space)":"Resume Ride (Space)",className:`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl transition-all duration-200 active:scale-95 ${t.isPlaying?"bg-gradient-to-b from-amber-300 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20 hover:brightness-105":"bg-white/10 text-white border border-white/15 hover:bg-white/15"}`,children:t.isPlaying?Pe.jsx(P1,{className:"h-4 w-4 fill-current"}):Pe.jsx(L1,{className:"h-4 w-4 fill-current ml-0.5"})}),Pe.jsxs("div",{className:"flex-1 min-w-0",children:[Pe.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[Pe.jsxs("div",{className:"flex items-center gap-2",children:[Pe.jsx("span",{className:"text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider text-slate-300",children:"Pace"}),Pe.jsx("div",{className:"hidden items-center gap-1 sm:flex",children:[{label:"Stroll",val:28},{label:"Cruise",val:62},{label:"Sprint",val:100}].map(w=>{const R=t.isPlaying&&Math.abs(t.speedPercent-w.val)<6;return Pe.jsx("button",{onClick:()=>p(w.val),className:`rounded-md px-1.5 py-0.5 text-[9.5px] font-semibold transition ${R?"bg-amber-400/20 text-amber-300 border border-amber-400/35":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:w.label},w.label)})})]}),Pe.jsx("span",{className:"font-mono text-[11px] font-semibold text-amber-300 tabular-nums",children:t.isPlaying?`${t.speedPercent}%`:"Paused"})]}),Pe.jsxs("div",{className:"relative flex items-center",children:[Pe.jsx("div",{className:"pointer-events-none absolute inset-x-0 h-1.5 rounded-full bg-slate-800/90 overflow-hidden border border-white/10",children:Pe.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-500 transition-all duration-75",style:{width:`${t.isPlaying?t.speedPercent:0}%`}})}),Pe.jsx("input",{type:"range",min:0,max:100,value:t.isPlaying?t.speedPercent:0,onChange:w=>p(Number(w.target.value)),"aria-label":"Cycling Speed",className:"speed-slider relative z-10 w-full"})]})]})]}),Pe.jsx("div",{className:"hidden h-8 w-px bg-white/10 sm:block"}),Pe.jsxs("div",{className:"flex flex-col gap-1.5",children:[Pe.jsxs("div",{className:"flex items-center justify-between px-0.5",children:[Pe.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-wider text-slate-400",children:"Camera"}),Pe.jsxs("div",{className:"flex items-center gap-1.5",title:"Bicycle Frame Enamel",children:[Pe.jsx("span",{className:"text-[9.5px] text-slate-400",children:"Finish"}),yC.map(w=>Pe.jsx("button",{onClick:()=>e(R=>({...R,bikeColor:w.id})),title:w.name,className:`h-3 w-3 rounded-full transition-transform ${t.bikeColor===w.id?"scale-125 ring-1.5 ring-white ring-offset-1 ring-offset-slate-950":"opacity-65 hover:opacity-100 hover:scale-110"}`,style:{backgroundColor:w.hex}},w.id))]})]}),Pe.jsx("div",{className:"grid grid-cols-5 gap-0.5 rounded-2xl bg-slate-950/60 p-1 border border-white/10",children:Wl.map(w=>{const R=t.cameraMode===w.id;return Pe.jsx("button",{onClick:()=>_(w.id),title:w.label,className:`flex items-center justify-center rounded-xl px-1.5 sm:px-2.5 py-1 text-[10.5px] sm:text-[11px] font-semibold transition-all duration-150 ${R?"bg-white text-slate-950 shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:w.shortLabel},w.id)})})]})]})})})]})};mh.createRoot(document.getElementById("root")).render(Pe.jsx(dx.StrictMode,{children:Pe.jsx(MC,{})}));
