import{S as N,au as z,av as Z,T as P,aw as F,N as b,a4 as v,a7 as w,ax as O,L as H,ay as J,ar as V,i as Q,af as K,R as C,az as W,aa as X,aA as M,aB as E,a8 as G,aC as k,O as ee,aD as re,ah as j,e as q,d as ne,aE as ie,aF as $,aG as ue,aH as se,aI as te,aJ as fe}from"./BOCtfefK.js";import{s as ae,g as le}from"./CMufJmNh.js";function m(e,r=null,u){if(typeof e!="object"||e===null||N in e)return e;const i=V(e);if(i!==z&&i!==Z)return e;var s=new Map,d=Q(e),g=P(0);d&&s.set("length",P(e.length));var h;return new Proxy(e,{defineProperty(l,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&J();var a=s.get(n);return a===void 0?(a=P(t.value),s.set(n,a)):w(a,m(t.value,h)),!0},deleteProperty(l,n){var t=s.get(n);if(t===void 0)n in l&&s.set(n,P(v));else{if(d&&typeof n=="string"){var a=s.get("length"),f=Number(n);Number.isInteger(f)&&f<a.v&&w(a,f)}w(t,v),Y(g)}return!0},get(l,n,t){var _;if(n===N)return e;var a=s.get(n),f=n in l;if(a===void 0&&(!f||(_=O(l,n))!=null&&_.writable)&&(a=P(m(f?l[n]:v,h)),s.set(n,a)),a!==void 0){var o=b(a);return o===v?void 0:o}return Reflect.get(l,n,t)},getOwnPropertyDescriptor(l,n){var t=Reflect.getOwnPropertyDescriptor(l,n);if(t&&"value"in t){var a=s.get(n);a&&(t.value=b(a))}else if(t===void 0){var f=s.get(n),o=f==null?void 0:f.v;if(f!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return t},has(l,n){var o;if(n===N)return!0;var t=s.get(n),a=t!==void 0&&t.v!==v||Reflect.has(l,n);if(t!==void 0||H!==null&&(!a||(o=O(l,n))!=null&&o.writable)){t===void 0&&(t=P(a?m(l[n],h):v),s.set(n,t));var f=b(t);if(f===v)return!1}return a},set(l,n,t,a){var x;var f=s.get(n),o=n in l;if(d&&n==="length")for(var _=t;_<f.v;_+=1){var y=s.get(_+"");y!==void 0?w(y,v):_ in l&&(y=P(v),s.set(_+"",y))}f===void 0?(!o||(x=O(l,n))!=null&&x.writable)&&(f=P(void 0),w(f,m(t,h)),s.set(n,f)):(o=f.v!==v,w(f,m(t,h)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(a,t),!o){if(d&&typeof n=="string"){var R=s.get("length"),S=Number(n);Number.isInteger(S)&&S>=R.v&&w(R,S+1)}Y(g)}return!0},ownKeys(l){b(g);var n=Reflect.ownKeys(l).filter(f=>{var o=s.get(f);return o===void 0||o.v!==v});for(var[t,a]of s)a.v!==v&&!(t in l)&&n.push(t);return n},setPrototypeOf(){F()}})}function Y(e,r=1){w(e,e.v+r)}let A=!1,U=Symbol();function we(e,r,u){const i=u[r]??(u[r]={store:null,source:C(void 0),unsubscribe:K});if(i.store!==e&&!(U in u))if(i.unsubscribe(),i.store=e??null,e==null)i.source.v=void 0,i.unsubscribe=K;else{var s=!0;i.unsubscribe=ae(e,d=>{s?i.source.v=d:w(i.source,d)}),s=!1}return e&&U in u?le(e):b(i.source)}function Pe(e,r,u){let i=u[r];return i&&i.store!==e&&(i.unsubscribe(),i.unsubscribe=K),e}function ge(){const e={};function r(){W(()=>{for(var u in e)e[u].unsubscribe();X(e,U,{enumerable:!1,value:!0})})}return[e,r]}function oe(e){var r=A;try{return A=!1,[e(),A]}finally{A=r}}const ce={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function he(e,r,u){return new Proxy({props:e,exclude:r},ce)}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=_e({get[r](){return e.props[r]}},r,$)),e.special[r](u),M(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),M(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ye(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},de)}const ve={get(e,r){let u=e.props.length;for(;u--;){let i=e.props[u];if(E(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,u){let i=e.props.length;for(;i--;){let s=e.props[i];E(s)&&(s=s());const d=O(s,r);if(d&&d.set)return d.set(u),!0}return!1},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let i=e.props[u];if(E(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const s=O(i,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){if(r===N||r===G)return!1;for(let u of e.props)if(E(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){E(u)&&(u=u());for(const i in u)r.includes(i)||r.push(i)}return r}};function xe(...e){return new Proxy({props:e},ve)}function _e(e,r,u,i){var B;var s=(u&te)!==0,d=!ne||(u&ie)!==0,g=(u&se)!==0,h=(u&fe)!==0,l=!1,n;g?[n,l]=oe(()=>e[r]):n=e[r];var t=N in e||G in e,a=g&&(((B=O(e,r))==null?void 0:B.set)??(t&&r in e&&(c=>e[r]=c)))||void 0,f=i,o=!0,_=!1,y=()=>(_=!0,o&&(o=!1,h?f=q(i):f=i),f);n===void 0&&i!==void 0&&(a&&d&&ue(),n=y(),a&&a(n));var p;if(d)p=()=>{var c=e[r];return c===void 0?y():(o=!0,_=!1,c)};else{var R=(s?j:ee)(()=>e[r]);R.f|=k,p=()=>{var c=b(R);return c!==void 0&&(f=void 0),c===void 0?f:c}}if(!(u&$))return p;if(a){var S=e.$$legacy;return function(c,I){return arguments.length>0?((!d||!I||S||l)&&a(I?p():c),c):p()}}var x=!1,L=C(n),D=j(()=>{var c=p(),I=b(L);return x?(x=!1,I):L.v=c});return s||(D.equals=re),function(c,I){if(arguments.length>0){const T=I?b(D):d&&g?m(c):c;return D.equals(T)||(x=!0,w(L,T),_&&f!==void 0&&(f=T),q(()=>b(D))),c}return b(D)}}export{m as a,we as b,Pe as c,ge as d,ye as l,_e as p,he as r,xe as s};
