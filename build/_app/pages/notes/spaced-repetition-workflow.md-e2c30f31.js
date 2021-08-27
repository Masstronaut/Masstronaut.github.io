import{S as e,i as a,s as t,B as n,j as o,m as i,o as s,p as r,q as h,x as l,u as c,v as d,P as f,e as p,t as u,k as m,c as g,a as E,d as v,g as y,n as b,b as w,f as k,G as O,H as I}from"../../chunks/vendor-ccfa631e.js";import{B as x}from"../../chunks/blog-post-f481a484.js";function S(e){let a,t,n,o,i,s,r,h,l,c,d,f,x,S,C,D,L,A,T,P,H,$,F,R,M,N,q,j,B,W,G,_,z,V,Y,U,J,K,Q,X,Z,ee,ae,te,ne,oe,ie,se,re,he,le,ce,de,fe,pe,ue,me,ge,Ee,ve,ye,be,we,ke,Oe,Ie,xe,Se,Ce,De,Le,Ae,Te,Pe,He,$e,Fe,Re,Me,Ne,qe,je,Be,We,Ge,_e,ze,Ve,Ye,Ue,Je,Ke,Qe,Xe,Ze,ea,aa,ta,na,oa,ia,sa,ra,ha,la,ca,da,fa,pa,ua,ma,ga,Ea,va,ya,ba,wa,ka,Oa,Ia,xa,Sa,Ca,Da,La,Aa,Ta,Pa,Ha,$a,Fa,Ra,Ma,Na,qa,ja,Ba,Wa,Ga,_a,za,Va,Ya,Ua,Ja,Ka,Qa,Xa,Za,et,at,tt,nt,ot,it,st,rt,ht,lt,ct,dt,ft,pt,ut,mt,gt,Et,vt,yt,bt,wt,kt,Ot,It,xt,St,Ct,Dt,Lt,At,Tt,Pt,Ht,$t,Ft,Rt,Mt,Nt,qt,jt,Bt,Wt,Gt,_t,zt,Vt,Yt,Ut,Jt;return{c(){a=p("h2"),t=p("a"),n=p("span"),o=u("Prerequisites"),i=m(),s=p("ol"),r=p("li"),h=u("Have Obsidian.md installed and set up."),l=m(),c=p("h2"),d=p("a"),f=p("span"),x=u("Setup"),S=m(),C=p("ol"),D=p("li"),L=u("Open the Obsidian settings"),A=m(),T=p("li"),P=u("Select the "),H=p("code"),$=u("Community plugins"),F=u(" option from the left navigation pane"),R=m(),M=p("li"),N=u("Ensure "),q=p("code"),j=u("Safe mode"),B=u(" is turned off"),W=m(),G=p("li"),_=u("Click the "),z=p("code"),V=u("Browse"),Y=u(" button"),U=m(),J=p("li"),K=u("Find and install the "),Q=p("code"),X=u("Spaced Repetition"),Z=u(" plugin from the list of community plugins"),ee=m(),ae=p("li"),te=u("In the "),ne=p("code"),oe=u("Community plugins"),ie=u(" page, under "),se=p("code"),re=u("Installed plugins"),he=u(" find and enable "),le=p("code"),ce=u("Spaced repetition"),de=m(),fe=p("h3"),pe=p("a"),ue=p("span"),me=u("Recommended Spaced Repetition configuration settings"),ge=m(),Ee=p("ol"),ve=p("li"),ye=u("In the left navigation pane, under "),be=p("code"),we=u("Plugin options"),ke=u(" select "),Oe=p("code"),Ie=u("Spaced Repetition"),xe=m(),Se=p("li"),Ce=u("Enable the option to "),De=p("code"),Le=u("Save scheduling comment on the same line as the flashcard's last line"),Ae=u(". This ensures flashcards in markdown lists are rendered correctly."),Te=m(),Pe=p("li"),He=u("Enable the option to "),$e=p("code"),Fe=u("Bury related cards until the next day"),Re=u(". This prevents two deletion cards from the same block of text being shown on the same day."),Me=m(),Ne=p("li"),qe=u("Change the "),je=p("code"),Be=u("Separator for inline flashcards"),We=u(" to "),Ge=p("code"),_e=u(":-:"),ze=u(". This improves compatibility with code blocks, as the default option ("),Ve=p("code"),Ye=u("::"),Ue=u(") is commonly used in programming languages as a namespace separator."),Je=m(),Ke=p("li"),Qe=u("Change the "),Xe=p("code"),Ze=u("Separator for multiline flashcards"),ea=u(" to "),aa=p("code"),ta=u(":_:"),na=u(". This improves compatibility with code blocks, as sometimes the default option ("),oa=p("code"),ia=u("?"),sa=u(") is used as part of a ternary operator on its own line to respect line length settings."),ra=m(),ha=p("h2"),la=p("a"),ca=p("span"),da=u("Authoring notes"),fa=m(),pa=p("h3"),ua=p("a"),ma=p("span"),ga=u("Setting up a note to contain flashcards"),Ea=m(),va=p("p"),ya=u("To indicate that a note contains flashcards, it must contain one of your flashcard tags. By default, the flashcard tag is "),ba=p("code"),wa=u("flashcards"),ka=u(". Tags can be inserted into the body of the note using "),Oa=p("code"),Ia=u("#flashcards"),xa=u(". Since the fact that a note contains flashcards is metadata, I prefer to put it in the [[YAML Frontmatter]] of a note. Frontmatter must be at the start of a markdown file, and is started and ended by "),Sa=p("code"),Ca=u("---"),Da=u(" on its own line. Here’s a basic example with no other metadata:"),La=m(),Aa=p("pre"),Ta=m(),Pa=p("p"),Ha=u("Flashcards can be separated into multiple decks. This can be helpful if you want to sort them by topic (such as biology, physics, CS, etc.), type (vocab, concepts, ideas, etc.) or some other method meaningful to you. Doing so is very simple - just append them to the end of the "),$a=p("code"),Fa=u("flashcards"),Ra=u(" tag and use "),Ma=p("code"),Na=u("/"),qa=u(" to separate the hierarchy of the decks. For example:"),ja=m(),Ba=p("pre"),Wa=m(),Ga=p("p"),_a=u("Would put notes in that file into a "),za=p("code"),Va=u("math"),Ya=u(" deck that exists within a larger "),Ua=p("code"),Ja=u("subjects"),Ka=u(" deck."),Qa=m(),Xa=p("h3"),Za=p("a"),et=p("span"),at=u("Authoring notes that contain flashcards"),tt=m(),nt=p("p"),ot=u("When authoring notes, insert flashcards whenever writing the key details of a topic that you wish to retain. One easy example is in a list with definitions or explanations. In these cases, I’ll typically "),it=p("strong"),st=u("bold"),rt=u(" the term, add a colon, the inline flashcard separator, and then the definition, like this:"),ht=m(),lt=p("ul"),ct=p("li"),dt=p("strong"),ft=u("Inline flashcard"),pt=u(":  Flashcards with both sides of the card defined on a single line, like this one."),ut=m(),mt=p("p"),gt=u("Also use inline flashcards in small paragraphs that contain key information. The benefit of this is quickly apparent when it fills your flashcard deck with key information you want to retain."),Et=m(),vt=p("p"),yt=u("Make sure to continue writing ==on a new line== after using inline flashcards! Doing so ensures that extra content doesn’t get added to the back of the card. ==Highlighting== text in a flashcard note creates a ==cloze deletion==. This type of flashcard will show all the surround context, with just the highlighted bit removed for you to recall. Very helpful for learning terms that are used in a sentence or for key info written in the middle of a sentence."),bt=m(),wt=p("h4"),kt=p("a"),Ot=p("span"),It=u("Multi-line flashcards"),xt=m(),St=p("p"),Ct=u("Sometimes the answer to a question is longer than a single line. I find this is often the case for lists I want to retain (such as Cialdini’s principles of persuasion, Maslow’s Hierarchy of Needs, or Bloom’s taxonomy). For those, particularly the ordered ones, I like to note them as ordered lists. When reviewing a flashcard on them, I want the back side of my flashcard to be the list of all the items. This requires multi-line flashcards."),Dt=m(),Lt=p("p"),At=u("How do I author multi-line flashcards?"),Tt=m(),Pt=p("ol"),Ht=p("li"),$t=u("Write the prompt that goes on the front of the card"),Ft=m(),Rt=p("li"),Mt=u("On a new line, add the multi-line flashcard separator :_:"),Nt=m(),qt=p("li"),jt=u("On a new line below the separator, write multiple lines of answer"),Bt=p("ol"),Wt=p("li"),Gt=u("Avoid adding any blank lines within the content that belongs on the back of the flashcard"),_t=m(),zt=p("li"),Vt=u("Add a blank line at the "),Yt=p("strong"),Ut=u("end"),Jt=u(" of the flashcard."),this.h()},l(e){a=g(e,"H2",{id:!0});var p=E(a);t=g(p,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var u=E(t);n=g(u,"SPAN",{class:!0}),E(n).forEach(v),u.forEach(v),o=y(p,"Prerequisites"),p.forEach(v),i=b(e),s=g(e,"OL",{});var m=E(s);r=g(m,"LI",{});var w=E(r);h=y(w,"Have Obsidian.md installed and set up."),w.forEach(v),m.forEach(v),l=b(e),c=g(e,"H2",{id:!0});var k=E(c);d=g(k,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var O=E(d);f=g(O,"SPAN",{class:!0}),E(f).forEach(v),O.forEach(v),x=y(k,"Setup"),k.forEach(v),S=b(e),C=g(e,"OL",{});var I=E(C);D=g(I,"LI",{});var Kt=E(D);L=y(Kt,"Open the Obsidian settings"),Kt.forEach(v),A=b(I),T=g(I,"LI",{});var Qt=E(T);P=y(Qt,"Select the "),H=g(Qt,"CODE",{});var Xt=E(H);$=y(Xt,"Community plugins"),Xt.forEach(v),F=y(Qt," option from the left navigation pane"),Qt.forEach(v),R=b(I),M=g(I,"LI",{});var Zt=E(M);N=y(Zt,"Ensure "),q=g(Zt,"CODE",{});var en=E(q);j=y(en,"Safe mode"),en.forEach(v),B=y(Zt," is turned off"),Zt.forEach(v),W=b(I),G=g(I,"LI",{});var an=E(G);_=y(an,"Click the "),z=g(an,"CODE",{});var tn=E(z);V=y(tn,"Browse"),tn.forEach(v),Y=y(an," button"),an.forEach(v),U=b(I),J=g(I,"LI",{});var nn=E(J);K=y(nn,"Find and install the "),Q=g(nn,"CODE",{});var on=E(Q);X=y(on,"Spaced Repetition"),on.forEach(v),Z=y(nn," plugin from the list of community plugins"),nn.forEach(v),ee=b(I),ae=g(I,"LI",{});var sn=E(ae);te=y(sn,"In the "),ne=g(sn,"CODE",{});var rn=E(ne);oe=y(rn,"Community plugins"),rn.forEach(v),ie=y(sn," page, under "),se=g(sn,"CODE",{});var hn=E(se);re=y(hn,"Installed plugins"),hn.forEach(v),he=y(sn," find and enable "),le=g(sn,"CODE",{});var ln=E(le);ce=y(ln,"Spaced repetition"),ln.forEach(v),sn.forEach(v),I.forEach(v),de=b(e),fe=g(e,"H3",{id:!0});var cn=E(fe);pe=g(cn,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var dn=E(pe);ue=g(dn,"SPAN",{class:!0}),E(ue).forEach(v),dn.forEach(v),me=y(cn,"Recommended Spaced Repetition configuration settings"),cn.forEach(v),ge=b(e),Ee=g(e,"OL",{});var fn=E(Ee);ve=g(fn,"LI",{});var pn=E(ve);ye=y(pn,"In the left navigation pane, under "),be=g(pn,"CODE",{});var un=E(be);we=y(un,"Plugin options"),un.forEach(v),ke=y(pn," select "),Oe=g(pn,"CODE",{});var mn=E(Oe);Ie=y(mn,"Spaced Repetition"),mn.forEach(v),pn.forEach(v),xe=b(fn),Se=g(fn,"LI",{});var gn=E(Se);Ce=y(gn,"Enable the option to "),De=g(gn,"CODE",{});var En=E(De);Le=y(En,"Save scheduling comment on the same line as the flashcard's last line"),En.forEach(v),Ae=y(gn,". This ensures flashcards in markdown lists are rendered correctly."),gn.forEach(v),Te=b(fn),Pe=g(fn,"LI",{});var vn=E(Pe);He=y(vn,"Enable the option to "),$e=g(vn,"CODE",{});var yn=E($e);Fe=y(yn,"Bury related cards until the next day"),yn.forEach(v),Re=y(vn,". This prevents two deletion cards from the same block of text being shown on the same day."),vn.forEach(v),Me=b(fn),Ne=g(fn,"LI",{});var bn=E(Ne);qe=y(bn,"Change the "),je=g(bn,"CODE",{});var wn=E(je);Be=y(wn,"Separator for inline flashcards"),wn.forEach(v),We=y(bn," to "),Ge=g(bn,"CODE",{});var kn=E(Ge);_e=y(kn,":-:"),kn.forEach(v),ze=y(bn,". This improves compatibility with code blocks, as the default option ("),Ve=g(bn,"CODE",{});var On=E(Ve);Ye=y(On,"::"),On.forEach(v),Ue=y(bn,") is commonly used in programming languages as a namespace separator."),bn.forEach(v),Je=b(fn),Ke=g(fn,"LI",{});var In=E(Ke);Qe=y(In,"Change the "),Xe=g(In,"CODE",{});var xn=E(Xe);Ze=y(xn,"Separator for multiline flashcards"),xn.forEach(v),ea=y(In," to "),aa=g(In,"CODE",{});var Sn=E(aa);ta=y(Sn,":_:"),Sn.forEach(v),na=y(In,". This improves compatibility with code blocks, as sometimes the default option ("),oa=g(In,"CODE",{});var Cn=E(oa);ia=y(Cn,"?"),Cn.forEach(v),sa=y(In,") is used as part of a ternary operator on its own line to respect line length settings."),In.forEach(v),fn.forEach(v),ra=b(e),ha=g(e,"H2",{id:!0});var Dn=E(ha);la=g(Dn,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Ln=E(la);ca=g(Ln,"SPAN",{class:!0}),E(ca).forEach(v),Ln.forEach(v),da=y(Dn,"Authoring notes"),Dn.forEach(v),fa=b(e),pa=g(e,"H3",{id:!0});var An=E(pa);ua=g(An,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Tn=E(ua);ma=g(Tn,"SPAN",{class:!0}),E(ma).forEach(v),Tn.forEach(v),ga=y(An,"Setting up a note to contain flashcards"),An.forEach(v),Ea=b(e),va=g(e,"P",{});var Pn=E(va);ya=y(Pn,"To indicate that a note contains flashcards, it must contain one of your flashcard tags. By default, the flashcard tag is "),ba=g(Pn,"CODE",{});var Hn=E(ba);wa=y(Hn,"flashcards"),Hn.forEach(v),ka=y(Pn,". Tags can be inserted into the body of the note using "),Oa=g(Pn,"CODE",{});var $n=E(Oa);Ia=y($n,"#flashcards"),$n.forEach(v),xa=y(Pn,". Since the fact that a note contains flashcards is metadata, I prefer to put it in the [[YAML Frontmatter]] of a note. Frontmatter must be at the start of a markdown file, and is started and ended by "),Sa=g(Pn,"CODE",{});var Fn=E(Sa);Ca=y(Fn,"---"),Fn.forEach(v),Da=y(Pn," on its own line. Here’s a basic example with no other metadata:"),Pn.forEach(v),La=b(e),Aa=g(e,"PRE",{class:!0}),E(Aa).forEach(v),Ta=b(e),Pa=g(e,"P",{});var Rn=E(Pa);Ha=y(Rn,"Flashcards can be separated into multiple decks. This can be helpful if you want to sort them by topic (such as biology, physics, CS, etc.), type (vocab, concepts, ideas, etc.) or some other method meaningful to you. Doing so is very simple - just append them to the end of the "),$a=g(Rn,"CODE",{});var Mn=E($a);Fa=y(Mn,"flashcards"),Mn.forEach(v),Ra=y(Rn," tag and use "),Ma=g(Rn,"CODE",{});var Nn=E(Ma);Na=y(Nn,"/"),Nn.forEach(v),qa=y(Rn," to separate the hierarchy of the decks. For example:"),Rn.forEach(v),ja=b(e),Ba=g(e,"PRE",{class:!0}),E(Ba).forEach(v),Wa=b(e),Ga=g(e,"P",{});var qn=E(Ga);_a=y(qn,"Would put notes in that file into a "),za=g(qn,"CODE",{});var jn=E(za);Va=y(jn,"math"),jn.forEach(v),Ya=y(qn," deck that exists within a larger "),Ua=g(qn,"CODE",{});var Bn=E(Ua);Ja=y(Bn,"subjects"),Bn.forEach(v),Ka=y(qn," deck."),qn.forEach(v),Qa=b(e),Xa=g(e,"H3",{id:!0});var Wn=E(Xa);Za=g(Wn,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Gn=E(Za);et=g(Gn,"SPAN",{class:!0}),E(et).forEach(v),Gn.forEach(v),at=y(Wn,"Authoring notes that contain flashcards"),Wn.forEach(v),tt=b(e),nt=g(e,"P",{});var _n=E(nt);ot=y(_n,"When authoring notes, insert flashcards whenever writing the key details of a topic that you wish to retain. One easy example is in a list with definitions or explanations. In these cases, I’ll typically "),it=g(_n,"STRONG",{});var zn=E(it);st=y(zn,"bold"),zn.forEach(v),rt=y(_n," the term, add a colon, the inline flashcard separator, and then the definition, like this:"),_n.forEach(v),ht=b(e),lt=g(e,"UL",{});var Vn=E(lt);ct=g(Vn,"LI",{});var Yn=E(ct);dt=g(Yn,"STRONG",{});var Un=E(dt);ft=y(Un,"Inline flashcard"),Un.forEach(v),pt=y(Yn,":  Flashcards with both sides of the card defined on a single line, like this one."),Yn.forEach(v),Vn.forEach(v),ut=b(e),mt=g(e,"P",{});var Jn=E(mt);gt=y(Jn,"Also use inline flashcards in small paragraphs that contain key information. The benefit of this is quickly apparent when it fills your flashcard deck with key information you want to retain."),Jn.forEach(v),Et=b(e),vt=g(e,"P",{});var Kn=E(vt);yt=y(Kn,"Make sure to continue writing ==on a new line== after using inline flashcards! Doing so ensures that extra content doesn’t get added to the back of the card. ==Highlighting== text in a flashcard note creates a ==cloze deletion==. This type of flashcard will show all the surround context, with just the highlighted bit removed for you to recall. Very helpful for learning terms that are used in a sentence or for key info written in the middle of a sentence."),Kn.forEach(v),bt=b(e),wt=g(e,"H4",{id:!0});var Qn=E(wt);kt=g(Qn,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Xn=E(kt);Ot=g(Xn,"SPAN",{class:!0}),E(Ot).forEach(v),Xn.forEach(v),It=y(Qn,"Multi-line flashcards"),Qn.forEach(v),xt=b(e),St=g(e,"P",{});var Zn=E(St);Ct=y(Zn,"Sometimes the answer to a question is longer than a single line. I find this is often the case for lists I want to retain (such as Cialdini’s principles of persuasion, Maslow’s Hierarchy of Needs, or Bloom’s taxonomy). For those, particularly the ordered ones, I like to note them as ordered lists. When reviewing a flashcard on them, I want the back side of my flashcard to be the list of all the items. This requires multi-line flashcards."),Zn.forEach(v),Dt=b(e),Lt=g(e,"P",{});var eo=E(Lt);At=y(eo,"How do I author multi-line flashcards?"),eo.forEach(v),Tt=b(e),Pt=g(e,"OL",{});var ao=E(Pt);Ht=g(ao,"LI",{});var to=E(Ht);$t=y(to,"Write the prompt that goes on the front of the card"),to.forEach(v),Ft=b(ao),Rt=g(ao,"LI",{});var no=E(Rt);Mt=y(no,"On a new line, add the multi-line flashcard separator :_:"),no.forEach(v),Nt=b(ao),qt=g(ao,"LI",{});var oo=E(qt);jt=y(oo,"On a new line below the separator, write multiple lines of answer"),Bt=g(oo,"OL",{});var io=E(Bt);Wt=g(io,"LI",{});var so=E(Wt);Gt=y(so,"Avoid adding any blank lines within the content that belongs on the back of the flashcard"),so.forEach(v),io.forEach(v),oo.forEach(v),_t=b(ao),zt=g(ao,"LI",{});var ro=E(zt);Vt=y(ro,"Add a blank line at the "),Yt=g(ro,"STRONG",{});var ho=E(Yt);Ut=y(ho,"end"),ho.forEach(v),Jt=y(ro," of the flashcard."),ro.forEach(v),ao.forEach(v),this.h()},h(){w(n,"class","icon icon-link"),w(t,"href","#prerequisites"),w(t,"aria-hidden","true"),w(t,"tabindex","-1"),w(a,"id","prerequisites"),w(f,"class","icon icon-link"),w(d,"href","#setup"),w(d,"aria-hidden","true"),w(d,"tabindex","-1"),w(c,"id","setup"),w(ue,"class","icon icon-link"),w(pe,"href","#recommended-spaced-repetition-configuration-settings"),w(pe,"aria-hidden","true"),w(pe,"tabindex","-1"),w(fe,"id","recommended-spaced-repetition-configuration-settings"),w(ca,"class","icon icon-link"),w(la,"href","#authoring-notes"),w(la,"aria-hidden","true"),w(la,"tabindex","-1"),w(ha,"id","authoring-notes"),w(ma,"class","icon icon-link"),w(ua,"href","#setting-up-a-note-to-contain-flashcards"),w(ua,"aria-hidden","true"),w(ua,"tabindex","-1"),w(pa,"id","setting-up-a-note-to-contain-flashcards"),w(Aa,"class","language-yaml"),w(Ba,"class","language-undefined"),w(et,"class","icon icon-link"),w(Za,"href","#authoring-notes-that-contain-flashcards"),w(Za,"aria-hidden","true"),w(Za,"tabindex","-1"),w(Xa,"id","authoring-notes-that-contain-flashcards"),w(Ot,"class","icon icon-link"),w(kt,"href","#multi-line-flashcards"),w(kt,"aria-hidden","true"),w(kt,"tabindex","-1"),w(wt,"id","multi-line-flashcards")},m(e,p){k(e,a,p),O(a,t),O(t,n),O(a,o),k(e,i,p),k(e,s,p),O(s,r),O(r,h),k(e,l,p),k(e,c,p),O(c,d),O(d,f),O(c,x),k(e,S,p),k(e,C,p),O(C,D),O(D,L),O(C,A),O(C,T),O(T,P),O(T,H),O(H,$),O(T,F),O(C,R),O(C,M),O(M,N),O(M,q),O(q,j),O(M,B),O(C,W),O(C,G),O(G,_),O(G,z),O(z,V),O(G,Y),O(C,U),O(C,J),O(J,K),O(J,Q),O(Q,X),O(J,Z),O(C,ee),O(C,ae),O(ae,te),O(ae,ne),O(ne,oe),O(ae,ie),O(ae,se),O(se,re),O(ae,he),O(ae,le),O(le,ce),k(e,de,p),k(e,fe,p),O(fe,pe),O(pe,ue),O(fe,me),k(e,ge,p),k(e,Ee,p),O(Ee,ve),O(ve,ye),O(ve,be),O(be,we),O(ve,ke),O(ve,Oe),O(Oe,Ie),O(Ee,xe),O(Ee,Se),O(Se,Ce),O(Se,De),O(De,Le),O(Se,Ae),O(Ee,Te),O(Ee,Pe),O(Pe,He),O(Pe,$e),O($e,Fe),O(Pe,Re),O(Ee,Me),O(Ee,Ne),O(Ne,qe),O(Ne,je),O(je,Be),O(Ne,We),O(Ne,Ge),O(Ge,_e),O(Ne,ze),O(Ne,Ve),O(Ve,Ye),O(Ne,Ue),O(Ee,Je),O(Ee,Ke),O(Ke,Qe),O(Ke,Xe),O(Xe,Ze),O(Ke,ea),O(Ke,aa),O(aa,ta),O(Ke,na),O(Ke,oa),O(oa,ia),O(Ke,sa),k(e,ra,p),k(e,ha,p),O(ha,la),O(la,ca),O(ha,da),k(e,fa,p),k(e,pa,p),O(pa,ua),O(ua,ma),O(pa,ga),k(e,Ea,p),k(e,va,p),O(va,ya),O(va,ba),O(ba,wa),O(va,ka),O(va,Oa),O(Oa,Ia),O(va,xa),O(va,Sa),O(Sa,Ca),O(va,Da),k(e,La,p),k(e,Aa,p),Aa.innerHTML='<code class="language-yaml"><span class="token punctuation">---</span>\n<span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>flashcards<span class="token punctuation">]</span>\n<span class="token punctuation">---</span></code>',k(e,Ta,p),k(e,Pa,p),O(Pa,Ha),O(Pa,$a),O($a,Fa),O(Pa,Ra),O(Pa,Ma),O(Ma,Na),O(Pa,qa),k(e,ja,p),k(e,Ba,p),Ba.innerHTML='<code class="language-undefined">tags: [flashcards/subjects/math]</code>',k(e,Wa,p),k(e,Ga,p),O(Ga,_a),O(Ga,za),O(za,Va),O(Ga,Ya),O(Ga,Ua),O(Ua,Ja),O(Ga,Ka),k(e,Qa,p),k(e,Xa,p),O(Xa,Za),O(Za,et),O(Xa,at),k(e,tt,p),k(e,nt,p),O(nt,ot),O(nt,it),O(it,st),O(nt,rt),k(e,ht,p),k(e,lt,p),O(lt,ct),O(ct,dt),O(dt,ft),O(ct,pt),k(e,ut,p),k(e,mt,p),O(mt,gt),k(e,Et,p),k(e,vt,p),O(vt,yt),k(e,bt,p),k(e,wt,p),O(wt,kt),O(kt,Ot),O(wt,It),k(e,xt,p),k(e,St,p),O(St,Ct),k(e,Dt,p),k(e,Lt,p),O(Lt,At),k(e,Tt,p),k(e,Pt,p),O(Pt,Ht),O(Ht,$t),O(Pt,Ft),O(Pt,Rt),O(Rt,Mt),O(Pt,Nt),O(Pt,qt),O(qt,jt),O(qt,Bt),O(Bt,Wt),O(Wt,Gt),O(Pt,_t),O(Pt,zt),O(zt,Vt),O(zt,Yt),O(Yt,Ut),O(zt,Jt)},p:I,d(e){e&&v(a),e&&v(i),e&&v(s),e&&v(l),e&&v(c),e&&v(S),e&&v(C),e&&v(de),e&&v(fe),e&&v(ge),e&&v(Ee),e&&v(ra),e&&v(ha),e&&v(fa),e&&v(pa),e&&v(Ea),e&&v(va),e&&v(La),e&&v(Aa),e&&v(Ta),e&&v(Pa),e&&v(ja),e&&v(Ba),e&&v(Wa),e&&v(Ga),e&&v(Qa),e&&v(Xa),e&&v(tt),e&&v(nt),e&&v(ht),e&&v(lt),e&&v(ut),e&&v(mt),e&&v(Et),e&&v(vt),e&&v(bt),e&&v(wt),e&&v(xt),e&&v(St),e&&v(Dt),e&&v(Lt),e&&v(Tt),e&&v(Pt)}}}function C(e){let a,t;const f=[e[0],D];let p={$$slots:{default:[S]},$$scope:{ctx:e}};for(let o=0;o<f.length;o+=1)p=n(p,f[o]);return a=new x({props:p}),{c(){o(a.$$.fragment)},l(e){i(a.$$.fragment,e)},m(e,n){s(a,e,n),t=!0},p(e,[t]){const n=1&t?r(f,[1&t&&h(e[0]),0&t&&h(D)]):{};2&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){t||(l(a.$$.fragment,e),t=!0)},o(e){c(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}const D={title:"My spaced repetition workflow",description:"",slug:"spaced-repetition-workflow",publish:!0,lastmod:"2021-06-25",date:"2021-06-25",aliases:["My spaced repetition workflow"],tags:["status/evergreen"]};function L(e,a,t){return e.$$set=e=>{t(0,a=n(n({},a),f(e)))},[a=f(a)]}class A extends e{constructor(e){super(),a(this,e,L,C,t,{})}}export{A as default,D as metadata};
