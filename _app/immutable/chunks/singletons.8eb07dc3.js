import{A as p,s as S,N as I,G as x,O}from"./scheduler.95003110.js";import{a as T}from"./paths.1c9b3f60.js";const f=[];function N(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const r=new Set;function o(s){if(S(e,s)&&(e=s,n)){const l=!f.length;for(const i of r)i[1](),f.push(i,e);if(l){for(let i=0;i<f.length;i+=2)f[i][0](f[i+1]);f.length=0}}}function c(s){o(s(e))}function a(s,l=p){const i=[s,l];return r.add(i),r.size===1&&(n=t(o,c)||p),s(e),()=>{r.delete(i),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:a}}function j(e,t,n){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return N(n,(a,s)=>{let l=!1;const i=[];let _=0,g=p;const m=()=>{if(_)return;g();const u=t(r?i[0]:i,a,s);c?a(u):g=O(u)?u:p},E=o.map((u,h)=>I(u,R=>{i[h]=R,_&=~(1<<h),l&&m()},()=>{_|=1<<h}));return l=!0,m(),function(){x(E),g(),l=!1}})}const U="1698033969674",q="sveltekit:snapshot",G="sveltekit:scroll",K="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function $(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function z(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...v,"":v.hover};function w(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function B(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=w(e)}}function C(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!r||P(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:o,target:r,download:c}}function D(e){let t=null,n=null,r=null,o=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),o===null&&(o=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),a===null&&(a=d(s,"replacestate")),s=w(s);function l(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[r??"off"],preload_data:y[o??"off"],keep_focus:l(t),noscroll:l(n),reload:l(c),replace_state:l(a)}}function k(e){const t=b(e);let n=!0;function r(){n=!0,t.update(a=>a)}function o(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(l=>{(s===void 0||n&&l!==s)&&a(s=l)})}return{notify:r,set:o,subscribe:c}}function L(){const{set:e,subscribe:t}=b(!1);let n;async function r(){clearTimeout(n);try{const o=await fetch(`${T}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==U;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:r}}function P(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let A;function X(e){A=e.client}function H(e){return(...t)=>A[e](...t)}const W={url:k({}),page:k({}),navigating:b(null),updated:L()};export{K as I,v as P,G as S,q as a,C as b,D as c,W as d,X as e,B as f,$ as g,j as h,P as i,A as j,H as k,z as s,b as w};
