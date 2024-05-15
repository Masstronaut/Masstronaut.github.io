import{s as x,C as h,a5 as g,f as m,a as v,g as p,u as f,c as b,i as u,A as T,d as c}from"./scheduler.7131e7f1.js";import{S as w,i as L,b as S,d as $,m as C,a as M,t as I,e as H}from"./index.9e889c2d.js";import{g as U,a as k}from"./spread.8a54911c.js";import{M as j}from"./MDSveXNoteLayout.8313d040.js";function P(r){let e,i="A “slug” is how a page title is encoded as a URL. Unfortunately, many special characters, include spaces, aren’t valid in a URL and need to be encoded. Spaces get encoded as <code>%20</code>, which is hard to read. If I had used this page’s title as its slug, it would be encoded as <code>slugs%20make%20links%20readable</code>. Gross!",l,n,t="Instead, I define a custom slug for my published notes that doesn’t use characters requiring encoding. No apostrophes, accents, or spaces for me! This page for example has the slug <code>slugs-make-links-readable</code>. It’s not perfect, but it’s a lot easier on the eyes than the version gunked up with a bunch of <code>%20</code>s in it!",s,o,_="This is why sites and publishers online will typically use a hyphen or underscore in the slug; it’s more readable! That readability isn’t just for humans, either. Search engines prefer content that they think will be easier for a human to read too.";return{c(){e=m("p"),e.innerHTML=i,l=v(),n=m("p"),n.innerHTML=t,s=v(),o=m("p"),o.textContent=_},l(a){e=p(a,"P",{"data-svelte-h":!0}),f(e)!=="svelte-vmhtpc"&&(e.innerHTML=i),l=b(a),n=p(a,"P",{"data-svelte-h":!0}),f(n)!=="svelte-dpfyjg"&&(n.innerHTML=t),s=b(a),o=p(a,"P",{"data-svelte-h":!0}),f(o)!=="svelte-1knz7c1"&&(o.textContent=_)},m(a,d){u(a,e,d),u(a,l,d),u(a,n,d),u(a,s,d),u(a,o,d)},p:T,d(a){a&&(c(e),c(l),c(n),c(s),c(o))}}}function R(r){let e,i;const l=[r[0],y];let n={$$slots:{default:[P]},$$scope:{ctx:r}};for(let t=0;t<l.length;t+=1)n=h(n,l[t]);return e=new j({props:n}),{c(){S(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,s){C(e,t,s),i=!0},p(t,[s]){const o=s&1?U(l,[s&1&&k(t[0]),s&0&&k(y)]):{};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){I(e.$$.fragment,t),i=!1},d(t){H(e,t)}}}const y={title:"Slugs make links readable",description:"Special characters aren't valid in URLs, so custom slugs are used to make links easier to read.",slug:"notes/slugs-make-links-readable",publish:!0,lastmod:"2024-02-04T00:00:00.000Z",date:"2024-02-04T00:00:00.000Z",aliases:null,tags:["status/seedling","topic/webdev","topic/SEO"],readTime:2,internalLinks:[],flashcards:[]};function q(r,e,i){return r.$$set=l=>{i(0,e=h(h({},e),g(l)))},e=g(e),[e]}class D extends w{constructor(e){super(),L(this,e,q,R,x,{})}}export{D as default,y as metadata};
