import{h as U,w as R}from"./singletons.ca223331.js";import{O as w}from"./scheduler.7131e7f1.js";function j(e,u,r,i){var s,f,o=!1,v="withOld"in r,k=(a,n)=>{if(s=n,v&&(f=a),!o){let t=u(a,n);if(u.length<2)n(t);else return t}o=!1},y=U(e,k,i),P=!Array.isArray(e),g=a=>{P?(o=!0,e.set(a)):a.forEach((n,t)=>{o=!0,e[t].set(n)}),o=!1};v&&(r=r.withOld);var Q=r.length>=(v?3:2),b=null;function _(a){if(b&&(b(),b=null),v)var n=r(a,f,g);else var n=r(a,g);Q?typeof n=="function"&&(b=n):g(n)}var h=!1;function p(a){var n,t,A,l;if(h){l=a(w(y)),s(l);return}var x=y.subscribe(E=>{h?n?t=!0:n=!0:A=E});l=a(A),h=!0,s(l),x(),h=!1,t&&(l=w(y)),n&&_(l)}return{subscribe:y.subscribe,set(a){p(()=>a)},update:p}}const B=20,c=R([]),D=R(null),T=new Map,S=e=>{if(T.has(e))return;const u=setTimeout(()=>{T.delete(e),V(e)},1e3);T.set(e,u)},H=e=>{const u=T.get(e);u&&clearTimeout(u)};function L(e){e.id&&H(e.id),c.update(u=>u.map(r=>r.id===e.id?{...r,...e}:r))}function N(e){c.update(u=>[e,...u].slice(0,B))}function q(e){w(c).find(u=>u.id===e.id)?L(e):N(e)}function z(e){c.update(u=>(e?S(e):u.forEach(r=>{S(r.id)}),u.map(r=>r.id===e||e===void 0?{...r,visible:!1}:r)))}function V(e){c.update(u=>e===void 0?[]:u.filter(r=>r.id!==e))}function Y(e){D.set(e)}function Z(e){let u;D.update(r=>(u=e-(r||0),null)),c.update(r=>r.map(i=>({...i,pauseDuration:i.pauseDuration+u})))}const C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3};function $(e={}){return{toasts:j(c,r=>r.map(i=>{var s,f;return{...e,...e[i.type],...i,duration:i.duration||((s=e[i.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||C[i.type],style:[e.style,(f=e[i.type])==null?void 0:f.style,i.style].join(";")}}),r=>r),pausedAt:D}}const F=e=>typeof e=="function",M=(e,u)=>F(e)?e(u):e,G=(()=>{let e=0;return()=>(e+=1,e.toString())})(),W=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){const u=matchMedia("(prefers-reduced-motion: reduce)");e=!u||u.matches}return e}})(),J=(e,u="blank",r)=>({createdAt:Date.now(),visible:!0,type:u,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||G()}),m=e=>(u,r)=>{const i=J(u,e,r);return q(i),i.id},d=(e,u)=>m("blank")(e,u);d.error=m("error");d.success=m("success");d.loading=m("loading");d.custom=m("custom");d.dismiss=e=>{z(e)};d.remove=e=>V(e);d.promise=(e,u,r)=>{const i=d.loading(u.loading,{...r,...r==null?void 0:r.loading});return e.then(s=>(d.success(M(u.success,s),{id:i,...r,...r==null?void 0:r.success}),s)).catch(s=>{d.error(M(u.error,s),{id:i,...r,...r==null?void 0:r.error})}),e};const I=d;export{L as a,Z as e,W as p,Y as s,I as t,$ as u};