import{s as xt,C as He,a3 as it,f as a,a as o,a4 as ct,g as n,u as i,c as p,a5 as yt,j as pt,k as d,i as s,A as ft,d as l}from"./scheduler.5beeadad.js";import{S as ut,i as vt,b as wt,d as gt,m as mt,a as bt,t as _t,e as Ct}from"./index.bfd99307.js";import{g as Ft,a as rt}from"./spread.8a54911c.js";import{M as Et}from"./MDSveXNoteLayout.2a006cba.js";function Tt(B){let r,g="The purpose of shadows in user interfaces (UIs) is to create an illusion of depth. UI shadows convince users that some elements are elevated further off the page than others. To make an effective illusion, imitate reality. Imitate these 3 principles from real-world lighting when making UI shadows:",y,c,h="<li>Shadows are cast by objects obstructing lights</li> <li>The further an object is from its shadow the larger and softer the shadow is</li> <li>The color of a surface changes the color of shadows cast onto it</li>",x,f,Ae="The following sections will detail some tactical tips for designing shadows that imitate reality, and how you can implement those designs in CSS.",J,F,Le='<a aria-hidden="true" tabindex="-1" href="#shadows-are-cast-by-obstructing-lights"><span class="icon icon-link"></span></a><a href="#shadows-are-cast-by-obstructing-lights" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Shadows are cast by obstructing lights',K,T,Me="All shadows are created by 3 points that form straight a line:",Q,k,Ie="<li>A light source (such as the sun or a lamp)</li> <li>The shadow itself</li> <li>An object between the light source and the shadow</li>",ee,H,je="Imitating real shadows being cast by a real light source - such as a lamp or the sun - creates a more consistent look. Choose a fixed position where the imaginary light source is. All shadows should be cast on the side of elements opposite the light source. This will result in consistent and realistic UI shadows.",te,A,Pe="On the web, it’s popular for the light source to be above and a bit to the left of the page. This means shadows are cast below and slightly to the right of elements. This can be imitated in CSS using the x and y offset values of the <code>box-shadow</code> property.",se,L,Ue="An easy way to keep a consistent angle for UI shadows is to have a consistent ratio for scaling the  x and y offset of shadows.",le,M,Se="For a light source above and a little to the left of the UI, having an x:y offset ratio of 1:2 works well.",ae,E,$e='<a aria-hidden="true" tabindex="-1" href="#further-objects-cast-bigger-and-softer-shadows"><span class="icon icon-link"></span></a><a href="#further-objects-cast-bigger-and-softer-shadows" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Further objects cast bigger and softer shadows',oe,I,ze="This is an easy property to observe. Put your hand on a desk or other flat surface and look at the shadow it casts. It will be very close to the size of your hand, and quite dark.",ne,j,De="Slowly lift your hand while watching the shadow. The shadow will quickly grow larger, but it will also soften as light bouncing off other surfaces hit the shadow.",ie,P,Ve="In UI design, compared to shadows cast for objects closer to the page, objects elevated further off the page should have shadows that are larger and softer.",pe,U,qe="To emulate this behavior in CSS, I use two tricks:",re,S,Oe="<li>Increasing the blur with the size of the shadow</li> <li>Layering multiple shadows to simulate more realistic depth</li>",he,$,Ge="Increasing blur is easy - it’s an attribute of the <code>box-shadow</code> property! When using the 1:2 ratio for shadow offsets, an easy way to keep shadow softness consistent is by matching the blur to the <code>y offset</code>.",de,z,Ne="A shadow cast by an element close to the page would be something like <code>box-shadow: 2px 4px 4px</code>. For something elevated much further off the page, it could instead be <code>box-shadow: 16px 32px 32px</code>.",xe,D,Re="Having a single soft shadow can look a little flat and unrealistic.",ce,m,We='<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.2);text-align: center; line-height: 150px">4x8px offset</div><div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.2); text-align: center; line-height: 150px;">8x16px offset</div>',ye,V,Ze="To create a more realistic illusion of depth, layer multiple shadows. I like to start with shadows offset by 1:2, and layer on additional shadows with double the previous offset (ie 2:4, 4:8, 8:16, etc.) until I’ve reached the desired elevation.",fe,b,Be='<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.2);text-align: center; line-height: 150px">Flat shadow</div><div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.2), 2px 4px 4px hsl(0deg 0% 0% / 0.2), 4px 8px 8px hsl(0deg 0% 0% / 0.2), 8px 16px 16px hsl(0deg 0% 0% / 0.2); text-align: center; line-height: 150px;">4 layer shadow</div>',ue,q,Xe="Notice that the layered shadow is much darker. Since each shadow is <em>added</em> to the previous ones, you must <em>reduce</em> the opacity of all the shadows when layering on additional shadows. Here’s the code for a layered shadow:",ve,O,Ye="Here’s the code for the layered shadow:",we,X,dt=`<pre class="shiki" style="background-color: #ffffff; color: #24292f" css="true"><div class="language-id">css</div><div class='code-container'><code><div class='line'><span style="color: #0550AE">.shadow</span><span style="color: #24292F"> &#123; </span></div><div class='line'><span style="color: #24292F">	</span><span style="color: #0550AE">box-shadow</span><span style="color: #24292F">: </span></div><div class='line'><span style="color: #24292F">		</span><span style="color: #0550AE">1</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">2</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">2</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">hsl</span><span style="color: #24292F">(</span><span style="color: #0550AE">0</span><span style="color: #CF222E">deg</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #CF222E">%</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #CF222E">%</span><span style="color: #24292F"> / </span><span style="color: #0550AE">0.075</span><span style="color: #24292F">),</span></div><div class='line'><span style="color: #24292F">		</span><span style="color: #0550AE">2</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">4</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">4</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">hsl</span><span style="color: #24292F">(</span><span style="color: #0550AE">0</span><span style="color: #CF222E">deg</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #CF222E">%</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #CF222E">%</span><span style="color: #24292F"> / </span><span style="color: #0550AE">0.075</span><span style="color: #24292F">), </span></div><div class='line'><span style="color: #24292F">		</span><span style="color: #0550AE">4</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">8</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">8</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">hsl</span><span style="color: #24292F">(</span><span style="color: #0550AE">0</span><span style="color: #CF222E">deg</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #CF222E">%</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #CF222E">%</span><span style="color: #24292F"> / </span><span style="color: #0550AE">0.075</span><span style="color: #24292F">), </span></div><div class='line'><span style="color: #24292F">		</span><span style="color: #0550AE">8</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">16</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">16</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">hsl</span><span style="color: #24292F">(</span><span style="color: #0550AE">0</span><span style="color: #CF222E">deg</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #CF222E">%</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #CF222E">%</span><span style="color: #24292F"> / </span><span style="color: #0550AE">0.075</span><span style="color: #24292F">);</span></div><div class='line'><span style="color: #24292F">&#125;</span></div></code></div></pre>`,Y,G,Je="Check out how it looks:",ge,_,Ke='<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.2), 2px 4px 4px hsl(0deg 0% 0% / 0.2), 4px 8px 8px hsl(0deg 0% 0% / 0.2), 8px 16px 16px hsl(0deg 0% 0% / 0.2); text-align: center; line-height: 150px;">20% opacity</div> <div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; line-height: 150px;">7.5% opacity</div>',me,N,Qe="Here’s how the layered shadow looks compared to a flat one of the same size. Notice that the layered shadow is stronger close to the element, and has a smoother transition to the outer edges of the shadow.",be,C,et='<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.2);text-align: center; line-height: 150px">Flat shadow</div> <div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; line-height: 150px;">Layered shadow</div>',_e,R,tt="These shadows work great with basic boxes. Boxes with rounded borders also get rounded shadows. Perfect!",Ce,u,st='<div style="border-radius: 50%; display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; line-height: 150px;">Circle</div> <div style="border-radius: 25px; display: inline-block; margin: 20px; width:150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; line-height: 150px;">Rounded box</div>',Fe,W,lt="Unfortunately <code>box-shadow</code> can’t handle more complex shapes like images with transparency, letters, or this tooltip made using a box and the css <code>::after</code> pseudo-element.",Ee,v,at=`<div class="tooltip-box" style="position: relative; margin: 20px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; padding: 20px">tooltip box</div> <style>.tooltip-box::before {
	  content: ' ';
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 30px;
	  height: 20px;
	  background: hsl(var(--color-white));
	  -webkit-clip-path: polygon(
		0% 0%,
		50% 100%,
		100% 0%
 	 );
	          clip-path: polygon(
		0% 0%,
		50% 100%,
		100% 0%
 	 );
  	transform: translateY(calc(+100% ));
}</style>`,Te,Z,ot="Instead, complex shapes should be shadowed using the <code>filter: drop-shadow()</code>. It uses a different blurring algorithm, and it’s shaped to the element.",ke,w,nt='<div class="tooltip-box" style="display: block; padding: 20px; position: relative; margin: 20px; filter: drop-shadow(1px 2px 2px hsl(0deg 0% 0% / 0.075)) drop-shadow(2px 4px 4px hsl(0deg 0% 0% / 0.075)) drop-shadow(4px 8px 8px hsl(0deg 0% 0% / 0.075)) drop-shadow(8px 16px 16px hsl(0deg 0% 0% / 0.075)); text-align: center; ">tooltip box</div>';return{c(){r=a("p"),r.textContent=g,y=o(),c=a("ol"),c.innerHTML=h,x=o(),f=a("p"),f.textContent=Ae,J=o(),F=a("h2"),F.innerHTML=Le,K=o(),T=a("p"),T.textContent=Me,Q=o(),k=a("ol"),k.innerHTML=Ie,ee=o(),H=a("p"),H.textContent=je,te=o(),A=a("p"),A.innerHTML=Pe,se=o(),L=a("p"),L.textContent=Ue,le=o(),M=a("p"),M.textContent=Se,ae=o(),E=a("h2"),E.innerHTML=$e,oe=o(),I=a("p"),I.textContent=ze,ne=o(),j=a("p"),j.textContent=De,ie=o(),P=a("p"),P.textContent=Ve,pe=o(),U=a("p"),U.textContent=qe,re=o(),S=a("ol"),S.innerHTML=Oe,he=o(),$=a("p"),$.innerHTML=Ge,de=o(),z=a("p"),z.innerHTML=Ne,xe=o(),D=a("p"),D.textContent=Re,ce=o(),m=a("div"),m.innerHTML=We,ye=o(),V=a("p"),V.textContent=Ze,fe=o(),b=a("div"),b.innerHTML=Be,ue=o(),q=a("p"),q.innerHTML=Xe,ve=o(),O=a("p"),O.textContent=Ye,we=o(),X=new ct(!1),Y=o(),G=a("p"),G.textContent=Je,ge=o(),_=a("div"),_.innerHTML=Ke,me=o(),N=a("p"),N.textContent=Qe,be=o(),C=a("div"),C.innerHTML=et,_e=o(),R=a("p"),R.textContent=tt,Ce=o(),u=a("div"),u.innerHTML=st,Fe=o(),W=a("p"),W.innerHTML=lt,Ee=o(),v=a("div"),v.innerHTML=at,Te=o(),Z=a("p"),Z.innerHTML=ot,ke=o(),w=a("div"),w.innerHTML=nt,this.h()},l(e){r=n(e,"P",{["data-svelte-h"]:!0}),i(r)!=="svelte-1cy131j"&&(r.textContent=g),y=p(e),c=n(e,"OL",{["data-svelte-h"]:!0}),i(c)!=="svelte-ll9laz"&&(c.innerHTML=h),x=p(e),f=n(e,"P",{["data-svelte-h"]:!0}),i(f)!=="svelte-16if34l"&&(f.textContent=Ae),J=p(e),F=n(e,"H2",{id:!0,["data-svelte-h"]:!0}),i(F)!=="svelte-urkf7d"&&(F.innerHTML=Le),K=p(e),T=n(e,"P",{["data-svelte-h"]:!0}),i(T)!=="svelte-yq3j8t"&&(T.textContent=Me),Q=p(e),k=n(e,"OL",{["data-svelte-h"]:!0}),i(k)!=="svelte-sk07k4"&&(k.innerHTML=Ie),ee=p(e),H=n(e,"P",{["data-svelte-h"]:!0}),i(H)!=="svelte-2jcsy9"&&(H.textContent=je),te=p(e),A=n(e,"P",{["data-svelte-h"]:!0}),i(A)!=="svelte-1da2mn6"&&(A.innerHTML=Pe),se=p(e),L=n(e,"P",{["data-svelte-h"]:!0}),i(L)!=="svelte-1lvstui"&&(L.textContent=Ue),le=p(e),M=n(e,"P",{["data-svelte-h"]:!0}),i(M)!=="svelte-1k281tc"&&(M.textContent=Se),ae=p(e),E=n(e,"H2",{id:!0,["data-svelte-h"]:!0}),i(E)!=="svelte-1ma9xm2"&&(E.innerHTML=$e),oe=p(e),I=n(e,"P",{["data-svelte-h"]:!0}),i(I)!=="svelte-1vmletw"&&(I.textContent=ze),ne=p(e),j=n(e,"P",{["data-svelte-h"]:!0}),i(j)!=="svelte-1y2l37n"&&(j.textContent=De),ie=p(e),P=n(e,"P",{["data-svelte-h"]:!0}),i(P)!=="svelte-yro2lp"&&(P.textContent=Ve),pe=p(e),U=n(e,"P",{["data-svelte-h"]:!0}),i(U)!=="svelte-aiql16"&&(U.textContent=qe),re=p(e),S=n(e,"OL",{["data-svelte-h"]:!0}),i(S)!=="svelte-elt97s"&&(S.innerHTML=Oe),he=p(e),$=n(e,"P",{["data-svelte-h"]:!0}),i($)!=="svelte-11vefhh"&&($.innerHTML=Ge),de=p(e),z=n(e,"P",{["data-svelte-h"]:!0}),i(z)!=="svelte-x0669z"&&(z.innerHTML=Ne),xe=p(e),D=n(e,"P",{["data-svelte-h"]:!0}),i(D)!=="svelte-3dpy27"&&(D.textContent=Re),ce=p(e),m=n(e,"DIV",{style:!0,["data-svelte-h"]:!0}),i(m)!=="svelte-l9xgf5"&&(m.innerHTML=We),ye=p(e),V=n(e,"P",{["data-svelte-h"]:!0}),i(V)!=="svelte-186co4f"&&(V.textContent=Ze),fe=p(e),b=n(e,"DIV",{style:!0,["data-svelte-h"]:!0}),i(b)!=="svelte-clk0ge"&&(b.innerHTML=Be),ue=p(e),q=n(e,"P",{["data-svelte-h"]:!0}),i(q)!=="svelte-lkpt0l"&&(q.innerHTML=Xe),ve=p(e),O=n(e,"P",{["data-svelte-h"]:!0}),i(O)!=="svelte-1l1mxu0"&&(O.textContent=Ye),we=p(e),X=yt(e,!1),Y=p(e),G=n(e,"P",{["data-svelte-h"]:!0}),i(G)!=="svelte-2bawzj"&&(G.textContent=Je),ge=p(e),_=n(e,"DIV",{style:!0,["data-svelte-h"]:!0}),i(_)!=="svelte-1n4j3b5"&&(_.innerHTML=Ke),me=p(e),N=n(e,"P",{["data-svelte-h"]:!0}),i(N)!=="svelte-5hwfzl"&&(N.textContent=Qe),be=p(e),C=n(e,"DIV",{style:!0,["data-svelte-h"]:!0}),i(C)!=="svelte-1kh6z1j"&&(C.innerHTML=et),_e=p(e),R=n(e,"P",{["data-svelte-h"]:!0}),i(R)!=="svelte-o9vxp9"&&(R.textContent=tt),Ce=p(e),u=n(e,"DIV",{style:!0,["data-svelte-h"]:!0}),i(u)!=="svelte-d2cro5"&&(u.innerHTML=st),Fe=p(e),W=n(e,"P",{["data-svelte-h"]:!0}),i(W)!=="svelte-4igjj5"&&(W.innerHTML=lt),Ee=p(e),v=n(e,"DIV",{style:!0,["data-svelte-h"]:!0}),i(v)!=="svelte-1uhjqjn"&&(v.innerHTML=at),Te=p(e),Z=n(e,"P",{["data-svelte-h"]:!0}),i(Z)!=="svelte-1msbtro"&&(Z.innerHTML=ot),ke=p(e),w=n(e,"DIV",{style:!0,["data-svelte-h"]:!0}),i(w)!=="svelte-wxthvi"&&(w.innerHTML=nt),this.h()},h(){pt(F,"id","shadows-are-cast-by-obstructing-lights"),pt(E,"id","further-objects-cast-bigger-and-softer-shadows"),d(m,"display","flex"),d(m,"justify-content","center"),d(b,"display","flex"),d(b,"justify-content","center"),X.a=Y,d(_,"display","flex"),d(_,"justify-content","center"),d(C,"display","flex"),d(C,"justify-content","center"),d(u,"display","flex"),d(u,"justify-content","center"),d(u,"align-items","center"),d(v,"display","flex"),d(v,"justify-content","center"),d(v,"align-items","center"),d(w,"display","flex"),d(w,"justify-content","center"),d(w,"align-items","center")},m(e,t){s(e,r,t),s(e,y,t),s(e,c,t),s(e,x,t),s(e,f,t),s(e,J,t),s(e,F,t),s(e,K,t),s(e,T,t),s(e,Q,t),s(e,k,t),s(e,ee,t),s(e,H,t),s(e,te,t),s(e,A,t),s(e,se,t),s(e,L,t),s(e,le,t),s(e,M,t),s(e,ae,t),s(e,E,t),s(e,oe,t),s(e,I,t),s(e,ne,t),s(e,j,t),s(e,ie,t),s(e,P,t),s(e,pe,t),s(e,U,t),s(e,re,t),s(e,S,t),s(e,he,t),s(e,$,t),s(e,de,t),s(e,z,t),s(e,xe,t),s(e,D,t),s(e,ce,t),s(e,m,t),s(e,ye,t),s(e,V,t),s(e,fe,t),s(e,b,t),s(e,ue,t),s(e,q,t),s(e,ve,t),s(e,O,t),s(e,we,t),X.m(dt,e,t),s(e,Y,t),s(e,G,t),s(e,ge,t),s(e,_,t),s(e,me,t),s(e,N,t),s(e,be,t),s(e,C,t),s(e,_e,t),s(e,R,t),s(e,Ce,t),s(e,u,t),s(e,Fe,t),s(e,W,t),s(e,Ee,t),s(e,v,t),s(e,Te,t),s(e,Z,t),s(e,ke,t),s(e,w,t)},p:ft,d(e){e&&(l(r),l(y),l(c),l(x),l(f),l(J),l(F),l(K),l(T),l(Q),l(k),l(ee),l(H),l(te),l(A),l(se),l(L),l(le),l(M),l(ae),l(E),l(oe),l(I),l(ne),l(j),l(ie),l(P),l(pe),l(U),l(re),l(S),l(he),l($),l(de),l(z),l(xe),l(D),l(ce),l(m),l(ye),l(V),l(fe),l(b),l(ue),l(q),l(ve),l(O),l(we),X.d(),l(Y),l(G),l(ge),l(_),l(me),l(N),l(be),l(C),l(_e),l(R),l(Ce),l(u),l(Fe),l(W),l(Ee),l(v),l(Te),l(Z),l(ke),l(w))}}}function kt(B){let r,g;const y=[B[0],ht];let c={$$slots:{default:[Tt]},$$scope:{ctx:B}};for(let h=0;h<y.length;h+=1)c=He(c,y[h]);return r=new Et({props:c}),{c(){wt(r.$$.fragment)},l(h){gt(r.$$.fragment,h)},m(h,x){mt(r,h,x),g=!0},p(h,[x]){const f=x&1?Ft(y,[x&1&&rt(h[0]),x&0&&rt(ht)]):{};x&2&&(f.$$scope={dirty:x,ctx:h}),r.$set(f)},i(h){g||(bt(r.$$.fragment,h),g=!0)},o(h){_t(r.$$.fragment,h),g=!1},d(h){Ct(r,h)}}}const ht={title:"Great UI shadows imitate real shadows",description:"UI shadows should create an illusion of depth. For the best illusion, imitate reality.",slug:"ui-shadows",publish:!0,lastmod:"2021-12-21T00:00:00.000Z",date:"2021-10-21T00:00:00.000Z",aliases:["Great UI shadows imitate real shadows","Great UI shadows"],tags:["status/seedling","flashcards/design","taxonomy/artifact"],timeToRead:5,internalLinks:[],flashcards:[{prompt:"Imitating real shadows being cast by a real light source - such as a lamp or the sun - creates a more consistent look. Choose a fixed position where the imaginary light source is. All shadows should be cast on the side of elements opposite the light source. This will result in __________?",answer:"consistent and realistic UI shadows. "},{prompt:"On the web, it’s popular for the light source to be above and a bit to the left of the page. This means shadows are cast below and slightly to the right of elements. This can be imitated in CSS using the __________?",answer:"x and y offset values of the  property. "},{prompt:"An easy way to keep a consistent angle for UI shadows is to have a consistent ratio for scaling the  __________?",answer:"x and y offset of shadows. "},{prompt:"In UI design, compared to shadows cast for objects closer to the page, objects elevated further off the page should have shadows that are __________?",answer:"larger and softer. "},{prompt:"Increasing blur is easy - it’s an attribute of the  property! When using the 1:2 ratio for shadow offsets, an easy way to keep shadow softness consistent is by matching the blur to the __________?",answer:". "}]};function Ht(B,r,g){return B.$$set=y=>{g(0,r=He(He({},r),it(y)))},r=it(r),[r]}class jt extends ut{constructor(r){super(),vt(this,r,Ht,kt,xt,{})}}export{jt as default,ht as metadata};
