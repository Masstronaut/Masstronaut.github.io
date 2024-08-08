import{s as Xe,p as ce,q as Ne,e as o,a as s,c as a,u as l,g as r,o as We,i,n as Ze,f as n}from"./scheduler.DG9R8YhD.js";import{S as Ge,i as Re,c as Ye,a as Be,m as Fe,t as Ke,b as Qe,d as Je}from"./index.DXoakw9j.js";import{g as et,a as $e}from"./spread.CgU5AtxT.js";import{M as tt}from"./MDSveXNoteLayout.jyYVGmCw.js";function it(W){let h,p="I’ve been writing code in various capacities for nearly twenty years now, though only seriously for around the past 10 years. Despite getting into Arch linux as a hobby in my early teens, I never really put a lot of thought into my text editor & IDE setup. Notepad++, followed by Sublime text, then Visual Studio, and finally VS Code have always felt sufficient to me.",c,d,u="While I’ve been aware of vim for years, I’ve long held the opinion that the steep learning curve isn’t worth it. Most of my time programming isn’t spent text editing problems. I spend a lot more time on problems like:",m,f,fe="<li>What’s the best approach to implement this?</li> <li>How can I configure X to do Y?</li> <li>How should I architect this system?</li> <li>Which API design is going to be the most intuitive for consumers?</li> <li>What’s the best way to communicate these trade-offs in a spec to ensure we have a valuable discussion about this work?</li> <li>Which edge cases do I need to consider and test for?</li>",$,y,pe="I have spent comparably little time on text <em>editing</em> problems such as:",O,w,ve="<li>How can I delete this code I’m not using?</li> <li>What’s the fastest way to refactor this hacky testing code into a proper unit/integration test?</li> <li>How can I quickly reshape this series of function calls in object property k:v pairs?</li>",X,b,ge="Learning vim to optimize my text editing skills - which only take up about 25% of my time “programming” - is something I’ve always concluded is not worth it.",Z,x,ye="Additionally, VS Code has incredibly broad adoption across technology stacks today. It’s excellent plugin architecture has produced a thriving ecosystem of 3rd-party add-ons that means in-editor support for every technology is just a couple clicks away. Plus, Microsoft has done something that seemed impossible in the past: established industry standards for integrating an editor with both programming language tools (via Language Server Protocol, or LSP) and debuggers (via the Debug Adapter Protocol, or DAP). It almost feels ridiculous to consider another editor right now…",G,k,we='As it turns out, Microsoft’s fantastic success establishing industry standards with LSP and DAP has been great for the rest of the editor ecosystem. Thanks to the standardized APIs, <a href="https://www.cursor.com/" rel="nofollow">other</a> <a href="https://zed.dev/" rel="nofollow">editors</a> have tapped into the incredible work. There are now many editors with modern features (or plugins) built leveraging these standards, such as:',R,I,be='<li><a href="https://github.com/nvim-treesitter/nvim-treesitter" rel="nofollow">Language-aware semantic syntax highlighting</a></li> <li><a href="https://github.com/hrsh7th/cmp-nvim-lsp" rel="nofollow">Language-specific text completion suggestions</a></li> <li><a href="https://github.com/mfussenegger/nvim-dap" rel="nofollow">Integrated debugger support</a></li>',Y,C,xe="The reality is that while VS Code is perhaps the most dominant a text editor has ever been, the quality of alternatives is also better than ever. Recently, I’ve been doing more and more tinkering with my text editors. I tried out Zed, set up a custom <code>launch.json</code> to debug a Deno project, and even customized my VS Code UI to look more minimal:",B,T,ke='<source media="(prefers-color-scheme: dark)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/19525a9cd3427d47b8c3200c472c7610.png"/> <source media="(prefers-color-scheme: light )" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/3a7f36c483eb758c7241f2ef73818415.png"/> <img alt="A code block on allandeutsch.com rendered to show the filename in a tab along the top bar of the code block"/>',F,_,Ie='Meanwhile, the YouTube algorithm has been recommending me videos from <a href="https://www.youtube.com/@typecraft_dev" rel="nofollow">TypeCraft</a>, a dev YouTuber who makes content about configuring your dev environment using linux, tmux, and neovim. I’ve been in the mood for learning recently, so <em>on Sunday afternoon</em> I decided to go through TypeCraft’s free course on setting up Neovim as an IDE. Note that the course is on setting up the IDE, not on vim motions and keybindings. I went into this with extremely basic vim skills - I could change between normal and insert mode, save a file, exit vim, and not much more.',K,v,Ce='<a aria-hidden="true" tabindex="-1" href="#configuring-neovim"><span class="icon icon-link"></span></a><a href="#configuring-neovim" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring Neovim',Q,L,Te="Despite my near-complete incompetence, I was able to get through the whole course. That fact says a lot about Chris (TypeCraft)‘s course quality. Neovim aside, I learned a lot about the workings of modern IDEs. If I end up going back to using VS Code as my daily driver, it still feels like time well spent.",J,H,_e='Something I particularly liked was the approach to configuring Neovim. All the extensions are written as lua scripts (and naturally there is <a href="https://github.com/folke/lazydev.nvim" rel="nofollow">a plugin to get better completions in your nvim config files</a>) in <code>~/.config/nvim/</code>. He set it up so that the <a href="https://github.com/folke/lazy.nvim/" rel="nofollow">plugin manager, Lazy</a> is loaded first, and it will auto-load any other plugins that are included when Neovim is launched. These factors mean that:',ee,M,Le='<li>the config folder can be <a href="https://github.com/Masstronaut/nvim-config" rel="nofollow">version controlled via git</a></li> <li>cloning the config repo into <code>~/.config/nvim/</code> then opening neovim is all it takes to set up a new machine with my IDE</li> <li>To try someone else’s config is as simple as cloning their config</li>',te,P,He="Another detail I like about the Neovim config is that it is extremely minimal by default, and I only pay the cost of loading in features that I want. As the name implies, the Lazy package manager will lazy load packages by default. This means I only have to wait for my debugging plugins to load when I start to use debugging features! The result is an extremely snappy editor that opens in <strong>milli</strong>seconds with a minimal UI.",ie,z,Me="This approach of being minimal by default hearkens back to my time with Arch Linux, another environment where nearly all functionality is opt-in. The main drawback is quite obvious - some assembly is required. The benefits are plentiful though, and make a good case for why it’s worth the effort:",ne,q,Pe="<li>It provides the opportunity to customize things to my own preferences</li> <li>Configuring all the features I want helps me learn a bit more about how they work</li> <li>I don’t have to pay a performance costs for things I’m not going to use</li> <li>🌶️ take: it demonstrates to me and others that I take pride in my tools and my work.</li>",oe,g,ze='<a aria-hidden="true" tabindex="-1" href="#why-i-changed-my-mind-about-vim"><span class="icon icon-link"></span></a><a href="#why-i-changed-my-mind-about-vim" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Why I changed my mind about Vim',ae,A,qe="While I’ve historically felt that vim wasn’t worth the effort, a few things have come together to change my mind. These factors really changed how I evaluate the ROI on learning vim. I’m now of the opinion that it’s",le,D,Ae="I’m ashamed to admit it, but the biggest one was putting in some effort to learn vim. I incorrectly believed that it would be akin to learning an alternative keyboard layout like Dvorak: something I tried and decided wasn’t worth it after a couple weeks. The thing is, to have the same productivity with vim only requires knowing three vim hot keys:",se,S,De="<li><code>:wq</code> - to save the current file and quit vim</li> <li><code>i</code> - Enters “insert mode”, which is basically identical to how every other text editor works - move the cursor with arrow keys, and typing a key adds it at the cursor.</li> <li><code>Esc</code> - exits insert mode, which is necessary to save and quit.</li>",re,V,Se="After learning those three commands, I was surprised to find I’m roughly as productive in vim as without it. It turns out everything I thought was required to match my existing productivity in vim is pure upside. 🤯",he,U,Ve='Another big factor is the IDE experience. Coming from my background building games, I can’t imagine trying to debug code using only print statements; a life choice I’ve found shockingly common among web developers. I’m also quite fond of GitHub Copilot and language-specific completions, and wouldn’t want to give them up by changing IDE. This seemed like a huge barrier, but largely thanks to Microsoft these are widely available features now. I spent a few hours getting them setup, but now my config is <a href="https://github.com/Masstronaut/neovim-config" rel="nofollow">on GitHub</a>, so it’ll be extremely fast in the future.',ue,j,Ue='<p>Vim transforms text-editing into a <a href="https://vim-adventures.com" rel="nofollow">puzzle game</a>-like experience</p>',me,E,je='The final reason, and one that caught me by surprise, is that using vim is fun! It has really changed the text editing experience. I think of text editing as the necessary labor that shapes and molds text like clay until it matches the picture in my mind of what the code should do. With a basic editor, this is laborious and menial work. It’s akin to sculpting using only a fine chisel. Vim transforms text-editing into a <a href="https://vim-adventures.com" rel="nofollow">puzzle game</a>-like experience that makes text editing a lot more fun. Look at <a href="https://youtube.com/shorts/VWihUa8mUKI?si=h3vZqiXXFAM3axX5" rel="nofollow">Primeagen’s enthusiasm</a> for <a href="https://youtube.com/shorts/mV8ffOGWZCs?si=vAHndCDFfh-OUyjJ" rel="nofollow">nailing a macro</a>! I have <em>never</em> seen anyone that excited about typing using a regular text editor.',de,N,Ee='The fun alone makes vim worth learning. I love coding, and I’m thrilled to still be finding new ways to add joy to the experience. Given the recent <a href="https://survey.stackoverflow.co/2024/professional-developers/#3-satisfied-at-current-job" rel="nofollow">2024 Stack Overflow developer survey showed only 20% of developers are happy at work</a>, I’m hoping that we can all get a little better at <a href="https://www.youtube.com/live/o2VQXBI_yk8?si=OCXL34vH51MVR9f5&amp;t=26974" rel="nofollow">putting the fun into development</a>.';return{c(){h=o("p"),h.textContent=p,c=s(),d=o("p"),d.textContent=u,m=s(),f=o("ul"),f.innerHTML=fe,$=s(),y=o("p"),y.innerHTML=pe,O=s(),w=o("ul"),w.innerHTML=ve,X=s(),b=o("p"),b.textContent=ge,Z=s(),x=o("p"),x.textContent=ye,G=s(),k=o("p"),k.innerHTML=we,R=s(),I=o("ul"),I.innerHTML=be,Y=s(),C=o("p"),C.innerHTML=xe,B=s(),T=o("picture"),T.innerHTML=ke,F=s(),_=o("p"),_.innerHTML=Ie,K=s(),v=o("h2"),v.innerHTML=Ce,Q=s(),L=o("p"),L.textContent=Te,J=s(),H=o("p"),H.innerHTML=_e,ee=s(),M=o("ol"),M.innerHTML=Le,te=s(),P=o("p"),P.innerHTML=He,ie=s(),z=o("p"),z.textContent=Me,ne=s(),q=o("ul"),q.innerHTML=Pe,oe=s(),g=o("h2"),g.innerHTML=ze,ae=s(),A=o("p"),A.textContent=qe,le=s(),D=o("p"),D.textContent=Ae,se=s(),S=o("ul"),S.innerHTML=De,re=s(),V=o("p"),V.textContent=Se,he=s(),U=o("p"),U.innerHTML=Ve,ue=s(),j=o("blockquote"),j.innerHTML=Ue,me=s(),E=o("p"),E.innerHTML=je,de=s(),N=o("p"),N.innerHTML=Ee,this.h()},l(e){h=a(e,"P",{"data-svelte-h":!0}),l(h)!=="svelte-zkivtz"&&(h.textContent=p),c=r(e),d=a(e,"P",{"data-svelte-h":!0}),l(d)!=="svelte-1bbkmym"&&(d.textContent=u),m=r(e),f=a(e,"UL",{"data-svelte-h":!0}),l(f)!=="svelte-ftd1k9"&&(f.innerHTML=fe),$=r(e),y=a(e,"P",{"data-svelte-h":!0}),l(y)!=="svelte-196tzfe"&&(y.innerHTML=pe),O=r(e),w=a(e,"UL",{"data-svelte-h":!0}),l(w)!=="svelte-yefy1y"&&(w.innerHTML=ve),X=r(e),b=a(e,"P",{"data-svelte-h":!0}),l(b)!=="svelte-1spvs30"&&(b.textContent=ge),Z=r(e),x=a(e,"P",{"data-svelte-h":!0}),l(x)!=="svelte-ltcwr0"&&(x.textContent=ye),G=r(e),k=a(e,"P",{"data-svelte-h":!0}),l(k)!=="svelte-1i9zznc"&&(k.innerHTML=we),R=r(e),I=a(e,"UL",{"data-svelte-h":!0}),l(I)!=="svelte-tr1jrt"&&(I.innerHTML=be),Y=r(e),C=a(e,"P",{"data-svelte-h":!0}),l(C)!=="svelte-1rznajm"&&(C.innerHTML=xe),B=r(e),T=a(e,"PICTURE",{"data-svelte-h":!0}),l(T)!=="svelte-1yxtx4e"&&(T.innerHTML=ke),F=r(e),_=a(e,"P",{"data-svelte-h":!0}),l(_)!=="svelte-lergl6"&&(_.innerHTML=Ie),K=r(e),v=a(e,"H2",{id:!0,"data-svelte-h":!0}),l(v)!=="svelte-1szpcgd"&&(v.innerHTML=Ce),Q=r(e),L=a(e,"P",{"data-svelte-h":!0}),l(L)!=="svelte-1nkyewk"&&(L.textContent=Te),J=r(e),H=a(e,"P",{"data-svelte-h":!0}),l(H)!=="svelte-bkt5fd"&&(H.innerHTML=_e),ee=r(e),M=a(e,"OL",{"data-svelte-h":!0}),l(M)!=="svelte-hhsid6"&&(M.innerHTML=Le),te=r(e),P=a(e,"P",{"data-svelte-h":!0}),l(P)!=="svelte-4iuswv"&&(P.innerHTML=He),ie=r(e),z=a(e,"P",{"data-svelte-h":!0}),l(z)!=="svelte-19thoi1"&&(z.textContent=Me),ne=r(e),q=a(e,"UL",{"data-svelte-h":!0}),l(q)!=="svelte-1vg8q72"&&(q.innerHTML=Pe),oe=r(e),g=a(e,"H2",{id:!0,"data-svelte-h":!0}),l(g)!=="svelte-1ot9t4k"&&(g.innerHTML=ze),ae=r(e),A=a(e,"P",{"data-svelte-h":!0}),l(A)!=="svelte-1xip6ng"&&(A.textContent=qe),le=r(e),D=a(e,"P",{"data-svelte-h":!0}),l(D)!=="svelte-10694c4"&&(D.textContent=Ae),se=r(e),S=a(e,"UL",{"data-svelte-h":!0}),l(S)!=="svelte-1f5wht3"&&(S.innerHTML=De),re=r(e),V=a(e,"P",{"data-svelte-h":!0}),l(V)!=="svelte-1c4tfgf"&&(V.textContent=Se),he=r(e),U=a(e,"P",{"data-svelte-h":!0}),l(U)!=="svelte-1w0kg62"&&(U.innerHTML=Ve),ue=r(e),j=a(e,"BLOCKQUOTE",{"data-svelte-h":!0}),l(j)!=="svelte-1fx5cjq"&&(j.innerHTML=Ue),me=r(e),E=a(e,"P",{"data-svelte-h":!0}),l(E)!=="svelte-b94g"&&(E.innerHTML=je),de=r(e),N=a(e,"P",{"data-svelte-h":!0}),l(N)!=="svelte-1y30bl5"&&(N.innerHTML=Ee),this.h()},h(){We(v,"id","configuring-neovim"),We(g,"id","why-i-changed-my-mind-about-vim")},m(e,t){i(e,h,t),i(e,c,t),i(e,d,t),i(e,m,t),i(e,f,t),i(e,$,t),i(e,y,t),i(e,O,t),i(e,w,t),i(e,X,t),i(e,b,t),i(e,Z,t),i(e,x,t),i(e,G,t),i(e,k,t),i(e,R,t),i(e,I,t),i(e,Y,t),i(e,C,t),i(e,B,t),i(e,T,t),i(e,F,t),i(e,_,t),i(e,K,t),i(e,v,t),i(e,Q,t),i(e,L,t),i(e,J,t),i(e,H,t),i(e,ee,t),i(e,M,t),i(e,te,t),i(e,P,t),i(e,ie,t),i(e,z,t),i(e,ne,t),i(e,q,t),i(e,oe,t),i(e,g,t),i(e,ae,t),i(e,A,t),i(e,le,t),i(e,D,t),i(e,se,t),i(e,S,t),i(e,re,t),i(e,V,t),i(e,he,t),i(e,U,t),i(e,ue,t),i(e,j,t),i(e,me,t),i(e,E,t),i(e,de,t),i(e,N,t)},p:Ze,d(e){e&&(n(h),n(c),n(d),n(m),n(f),n($),n(y),n(O),n(w),n(X),n(b),n(Z),n(x),n(G),n(k),n(R),n(I),n(Y),n(C),n(B),n(T),n(F),n(_),n(K),n(v),n(Q),n(L),n(J),n(H),n(ee),n(M),n(te),n(P),n(ie),n(z),n(ne),n(q),n(oe),n(g),n(ae),n(A),n(le),n(D),n(se),n(S),n(re),n(V),n(he),n(U),n(ue),n(j),n(me),n(E),n(de),n(N))}}}function nt(W){let h,p;const c=[W[0],Oe];let d={$$slots:{default:[it]},$$scope:{ctx:W}};for(let u=0;u<c.length;u+=1)d=ce(d,c[u]);return h=new tt({props:d}),{c(){Ye(h.$$.fragment)},l(u){Be(h.$$.fragment,u)},m(u,m){Fe(h,u,m),p=!0},p(u,[m]){const f=m&1?et(c,[m&1&&$e(u[0]),m&0&&$e(Oe)]):{};m&2&&(f.$$scope={dirty:m,ctx:u}),h.$set(f)},i(u){p||(Ke(h.$$.fragment,u),p=!0)},o(u){Qe(h.$$.fragment,u),p=!1},d(u){Je(h,u)}}}const Oe={title:"I use Neovim btw",description:"Imagine a world where something as simple as editing text becomes a fun and challenging puzzle to be solved.",slug:"notes/use-neovim",publish:!0,lastmod:"2024-07-30T00:00:00.000Z",date:"2024-07-30T00:00:00.000Z",aliases:null,tags:["status/seedling"],readTime:12,internalLinks:[],flashcards:[]};function ot(W,h,p){return W.$$set=c=>{p(0,h=ce(ce({},h),Ne(c)))},h=Ne(h),[h]}class ht extends Ge{constructor(h){super(),Re(this,h,ot,nt,Xe,{})}}export{ht as default,Oe as metadata};
