function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a;function u(t,n){return a||(a=document.createElement("a")),a.href=n,t===a.href}function l(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function h(t,n,e,o,r,i){if(r){const c=f(n,e,o,i);t.p(c,r)}}function _(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}let m,p=!1;function g(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function $(t,n){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const t=n[u].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:g(1,r,(t=>n[e[t]].claim_order),t))-1;o[u]=e[i]+1;const c=i+1;e[c]=u,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let u=e[r]+1;0!=u;u=o[u-1]){for(i.push(n[u-1]);a>=u;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let u=0,l=0;u<c.length;u++){for(;l<i.length&&c[u].claim_order>=i[l].claim_order;)l++;const n=l<i.length?i[l]:null;t.insertBefore(c[u],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function b(t,n,e){p&&!e?$(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function y(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function v(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function A(){return E(" ")}function N(){return E("")}function S(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t){return Array.from(t.childNodes)}function j(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function z(t,n,e,o){return j(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}function B(t,n,e){return z(t,n,e,v)}function C(t,n,e){return z(t,n,e,w)}function M(t,n){return j(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>E(n)),!0)}function O(t){return M(t," ")}function T(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function q(t,n,e){t.classList[e?"add":"remove"](n)}function I(t,n=document.body){return Array.from(n.querySelectorAll(t))}function D(t){m=t}function F(){if(!m)throw new Error("Function called outside component initialization");return m}function H(t){F().$$.on_mount.push(t)}function L(t){F().$$.after_update.push(t)}function P(t,n){F().$$.context.set(t,n)}function G(t){return F().$$.context.get(t)}const J=[],K=[],Q=[],W=[],R=Promise.resolve();let U=!1;function V(t){Q.push(t)}let X=!1;const Y=new Set;function Z(){if(!X){X=!0;do{for(let t=0;t<J.length;t+=1){const n=J[t];D(n),tt(n.$$)}for(D(null),J.length=0;K.length;)K.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];Y.has(n)||(Y.add(n),n())}Q.length=0}while(J.length);for(;W.length;)W.pop()();U=!1,X=!1,Y.clear()}}function tt(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(V)}}const nt=new Set;let et;function ot(){et={r:0,c:[],p:et}}function rt(){et.r||r(et.c),et=et.p}function it(t,n){t&&t.i&&(nt.delete(t),t.i(n))}function ct(t,n,e,o){if(t&&t.o){if(nt.has(t))return;nt.add(t),et.c.push((()=>{nt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function at(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function ut(t){return"object"==typeof t&&null!==t?t:{}}function lt(t){t&&t.c()}function st(t,n){t&&t.l(n)}function ft(t,n,o,c){const{fragment:a,on_mount:u,on_destroy:l,after_update:s}=t.$$;a&&a.m(n,o),c||V((()=>{const n=u.map(e).filter(i);l?l.push(...n):r(n),t.$$.on_mount=[]})),s.forEach(V)}function dt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ht(t,n){-1===t.$$.dirty[0]&&(J.push(t),U||(U=!0,R.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function _t(n,e,i,c,a,u,l,s=[-1]){const f=m;D(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:s,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&ht(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){p=!0;const t=k(e.target);d.fragment&&d.fragment.l(t),t.forEach(x)}else d.fragment&&d.fragment.c();e.intro&&it(n.$$.fragment),ft(n,e.target,e.anchor,e.customElement),p=!1,Z()}D(f)}class mt{$destroy(){dt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pt=[];function gt(n,e=t){let o;const r=new Set;function i(t){if(c(n,t)&&(n=t,o)){const t=!pt.length;for(const e of r)e[1](),pt.push(e,n);if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const u=[c,a];return r.add(u),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}export{H as A,n as B,gt as C,G as D,w as E,C as F,q as G,$ as H,t as I,l as J,s as K,h as L,_ as M,d as N,I as O,y as P,u as Q,mt as S,k as a,S as b,B as c,x as d,v as e,b as f,M as g,T as h,_t as i,lt as j,A as k,N as l,st as m,O as n,ft as o,at as p,ut as q,ot as r,c as s,E as t,ct as u,dt as v,rt as w,it as x,P as y,L as z};
