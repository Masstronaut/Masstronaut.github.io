import{s as je,C as he,a5 as De,f as o,a as s,g as a,u as l,c as r,j as Se,i,A as Ee,d as n}from"./scheduler.7131e7f1.js";import{S as Ne,i as We,b as $e,d as Oe,m as Xe,a as Ze,t as Ge,e as Re}from"./index.9e889c2d.js";import{g as Ye,a as Ve}from"./spread.8a54911c.js";import{M as Be}from"./MDSveXNoteLayout.8e92fbc6.js";function Fe(E){let h,p="I’ve been writing code in various capacities for nearly twenty years now, though only seriously for around the past 10 years. Despite getting into Arch linux as a hobby in my early teens, I never really put a lot of thought into my text editor & IDE setup. Notepad++, followed by Sublime text, then Visual Studio, and finally VS Code have always felt sufficient to me. While I’ve been aware of vim for years, I’ve long held the opinion that the steep learning curve isn’t worth it. Most of my time programming isn’t spent text editing problems. I spend a lot more time on problems like:",c,d,u="<li>What’s the best approach to implement this?</li> <li>How can I configure X to do Y?</li> <li>How should I architect this system?</li> <li>Which API design is going to be the most intuitive for consumers?</li> <li>What’s the best way to communicate these trade-offs in a spec to ensure we have a valuable discussion about this work?</li> <li>Which edge cases do I need to consider and test for?</li>",m,f,ue="I have spent comparably little time on text <em>editing</em> problems such as:",N,y,me="<li>How can I delete this code I’m not using?</li> <li>What’s the fastest way to refactor this hacky testing code into a proper unit/integration test?</li> <li>How can I quickly reshape this series of function calls in object property k:v pairs?</li>",W,w,de="Learning vim to optimize my text editing skills - which only take up about 25% of my time “programming” - is something I’ve always concluded is not worth it.",$,b,ce="Additionally, VS Code has incredibly broad adoption across technology stacks today. It’s excellent plugin architecture has produced a thriving ecosystem of 3rd-party add-ons that means in-editor support for every technology is just a couple clicks away. Plus, Microsoft has done something that seemed impossible in the past: established industry standards for integrating an editor with both programming language tools (via Language Server Protocol, or LSP) and debuggers (via the Debug Adapter Protocol, or DAP). It almost feels ridiculous to consider another editor right now…",O,x,fe='As it turns out, Microsoft’s fantastic success establishing industry standards with LSP and DAP has been great for the rest of the editor ecosystem. Thanks to the standardized APIs, <a href="https://www.cursor.com/" rel="nofollow">other</a> <a href="https://zed.dev/" rel="nofollow">editors</a> have tapped into the incredible work. There are now many editors with modern features (or plugins) built leveraging these standards, such as:',X,k,pe='<li><a href="https://github.com/nvim-treesitter/nvim-treesitter" rel="nofollow">Language-aware semantic syntax highlighting</a></li> <li><a href="https://github.com/hrsh7th/cmp-nvim-lsp" rel="nofollow">Language-specific text completion suggestions</a></li> <li><a href="https://github.com/mfussenegger/nvim-dap" rel="nofollow">Integrated debugger support</a></li>',Z,I,ge="The reality is that while VS Code is perhaps the most dominant text editor been, the quality of alternatives is also better than ever. Recently, I’ve been doing more and more tinkering with my text editors. I tried out Zed, set up a custom <code>launch.json</code> to debug a Deno project, and even customized my VS Code UI to look more minimal:",G,T,ve='<source media="(prefers-color-scheme: dark)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/19525a9cd3427d47b8c3200c472c7610.png"/> <source media="(prefers-color-scheme: light )" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/3a7f36c483eb758c7241f2ef73818415.png"/> <img alt="A code block on allandeutsch.com rendered to show the filename in a tab along the top bar of the code block"/>',R,_,ye='Meanwhile, the YouTube algorithm has been recommending me videos from <a href="https://www.youtube.com/@typecraft_dev" rel="nofollow">TypeCraft</a>, a dev YouTuber who makes content about configuring your dev environment using linux, tmux, and neovim. I’ve been in the mood for learning recently, so <em>on Sunday afternoon</em> I decided to go through TypeCraft’s free course on setting up Neovim as an IDE. Note that the course is on setting up the IDE, not on vim motions and keybindings. I went into this with extremely basic vim skills - I could change between normal and insert mode, save a file, exit vim, and not much more.',Y,g,we='<a aria-hidden="true" tabindex="-1" href="#configuring-neovim"><span class="icon icon-link"></span></a><a href="#configuring-neovim" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring Neovim',B,C,be="Despite my near-complete incompetence, I was able to get through the whole course. That fact says a lot about Chris (TypeCraft)‘s course quality. Neovim aside, I learned a lot about the workings of modern IDEs. If I end up going back to using VS Code as my daily driver, it still feels like time well spent.",F,L,xe='Something I particularly liked was the approach to configuring Neovim. All the extensions are written as lua scripts (with terrible completions, unfortunately) in <code>~/.config/nvim/</code>. He set it up so that the <a href="https://github.com/folke/lazy.nvim/" rel="nofollow">plugin manager, Lazy</a> is loaded first, and it will auto-load any other plugins that are included when Neovim is launched. These factors mean that:',K,H,ke='<li>the config folder can be <a href="https://github.com/Masstronaut/nvim-config" rel="nofollow">version controlled via git</a></li> <li>cloning the config repo into <code>~/.config/nvim/</code> then opening neovim is all it takes to set up a new machine with my IDE</li> <li>To try someone else’s config is as simple as cloning their config</li>',Q,M,Ie="Another detail I like about the Neovim config is that it is extremely minimal by default, and I only pay the cost of loading in features that I want. As the name implies, the Lazy package manager will lazy load packages by default. This means I only have to wait for my debugging plugins to load when I start to use debugging features! The result is an extremely snappy editor that opens in <strong>milli</strong>seconds with a minimal UI.",J,P,Te="This approach of being minimal by default hearkens back to my time with Arch Linux, another environment where nearly all functionality is opt-in. The main drawback is quite obvious - some assembly is required. The benefits are plentiful though, and make a good case for why it’s worth the effort:",ee,z,_e="<li>It provides the opportunity to customize things to my own preferences</li> <li>Configuring all the features I want helps me learn a bit more about how they work</li> <li>I don’t have to pay a performance costs for things I’m not going to use</li> <li>🌶️ take: it demonstrates to me and others that I take pride in my tools and my work.</li>",te,v,Ce='<a aria-hidden="true" tabindex="-1" href="#why-i-changed-my-mind-about-vim"><span class="icon icon-link"></span></a><a href="#why-i-changed-my-mind-about-vim" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Why I changed my mind about Vim',ie,q,Le="While I’ve historically felt that vim wasn’t worth the effort, a few things have come together to change my mind. These factors really changed how I evaluate the ROI on learning vim. I’m now of the opinion that it’s",ne,A,He="I’m ashamed to admit it, but the biggest one was putting in some effort to learn vim. I incorrectly believed that it would be akin to learning an alternative keyboard layout like Dvorak: something I tried and decided wasn’t worth it after a couple weeks. The thing is, to have the same productivity with vim only requires knowing three vim hot keys:",oe,D,Me=`<li><code>:wq</code> - to save the current file and quit vim</li> <li><code>i</code> - Enters “insert mode”, which is basically identical to how every other text editor works - move the cursor with arrow keys, and typing a key adds it at the cursor.</li> <li><code>Esc</code> - exits insert mode, which is necessary to save and quit.
After learning those three commands, I was surprised to find I’m roughly as productive in vim as without it. It turns out everything I thought was required to match my existing productivity in vim is pure upside. 🤯</li>`,ae,S,Pe='Another big factor is the IDE experience. Coming from my background building games, I can’t imagine trying to debug code using only print statements; a life choice I’ve found shockingly common among web developers. I’m also quite fond of GitHub Copilot and language-specific completions, and wouldn’t want to give them up by changing IDE. This seemed like a huge barrier, but largely thanks to Microsoft these are widely available features now. I spent a few hours getting them setup, but now my config is <a href="https://github.com/Masstronaut/neovim-config" rel="nofollow">on GitHub</a>, so it’ll be extremely fast in the future.',le,V,ze='<p>Vim transforms text-editing into a <a href="https://vim-adventures.com" rel="nofollow">puzzle game</a>-like experience</p>',se,U,qe='The final reason, and one that caught me by surprise, is that using vim is fun! It has really changed the text editing experience. I think of text editing as the necessary labor that shapes and molds text like clay until it matches the picture in my mind of what the code should do. With a basic editor, this is laborious and menial work. It’s akin to sculpting using only a fine chisel. Vim transforms text-editing into a <a href="https://vim-adventures.com" rel="nofollow">puzzle game</a>-like experience that makes text editing a lot more fun. Look at <a href="https://youtube.com/shorts/VWihUa8mUKI?si=h3vZqiXXFAM3axX5" rel="nofollow">Primeagen’s enthusiasm</a> for <a href="https://youtube.com/shorts/mV8ffOGWZCs?si=vAHndCDFfh-OUyjJ" rel="nofollow">nailing a macro</a>! I have <em>never</em> seen anyone that excited about typing using a regular text editor.',re,j,Ae='The fun alone makes vim worth learning. I love coding, and I’m thrilled to still be finding new ways to add joy to the experience. Given the recent <a href="https://survey.stackoverflow.co/2024/professional-developers/#3-satisfied-at-current-job" rel="nofollow">2024 Stack Overflow developer survey showed only 20% of developers are happy at work</a>, I’m hoping that we can all get a little better at <a href="https://www.youtube.com/live/o2VQXBI_yk8?si=OCXL34vH51MVR9f5&amp;t=26974" rel="nofollow">putting the fun into development</a>.';return{c(){h=o("p"),h.textContent=p,c=s(),d=o("ul"),d.innerHTML=u,m=s(),f=o("p"),f.innerHTML=ue,N=s(),y=o("ul"),y.innerHTML=me,W=s(),w=o("p"),w.textContent=de,$=s(),b=o("p"),b.textContent=ce,O=s(),x=o("p"),x.innerHTML=fe,X=s(),k=o("ul"),k.innerHTML=pe,Z=s(),I=o("p"),I.innerHTML=ge,G=s(),T=o("picture"),T.innerHTML=ve,R=s(),_=o("p"),_.innerHTML=ye,Y=s(),g=o("h2"),g.innerHTML=we,B=s(),C=o("p"),C.textContent=be,F=s(),L=o("p"),L.innerHTML=xe,K=s(),H=o("ol"),H.innerHTML=ke,Q=s(),M=o("p"),M.innerHTML=Ie,J=s(),P=o("p"),P.textContent=Te,ee=s(),z=o("ul"),z.innerHTML=_e,te=s(),v=o("h2"),v.innerHTML=Ce,ie=s(),q=o("p"),q.textContent=Le,ne=s(),A=o("p"),A.textContent=He,oe=s(),D=o("ul"),D.innerHTML=Me,ae=s(),S=o("p"),S.innerHTML=Pe,le=s(),V=o("blockquote"),V.innerHTML=ze,se=s(),U=o("p"),U.innerHTML=qe,re=s(),j=o("p"),j.innerHTML=Ae,this.h()},l(e){h=a(e,"P",{"data-svelte-h":!0}),l(h)!=="svelte-18tebrd"&&(h.textContent=p),c=r(e),d=a(e,"UL",{"data-svelte-h":!0}),l(d)!=="svelte-ftd1k9"&&(d.innerHTML=u),m=r(e),f=a(e,"P",{"data-svelte-h":!0}),l(f)!=="svelte-196tzfe"&&(f.innerHTML=ue),N=r(e),y=a(e,"UL",{"data-svelte-h":!0}),l(y)!=="svelte-yefy1y"&&(y.innerHTML=me),W=r(e),w=a(e,"P",{"data-svelte-h":!0}),l(w)!=="svelte-1spvs30"&&(w.textContent=de),$=r(e),b=a(e,"P",{"data-svelte-h":!0}),l(b)!=="svelte-ltcwr0"&&(b.textContent=ce),O=r(e),x=a(e,"P",{"data-svelte-h":!0}),l(x)!=="svelte-1i9zznc"&&(x.innerHTML=fe),X=r(e),k=a(e,"UL",{"data-svelte-h":!0}),l(k)!=="svelte-tr1jrt"&&(k.innerHTML=pe),Z=r(e),I=a(e,"P",{"data-svelte-h":!0}),l(I)!=="svelte-1lfkkt1"&&(I.innerHTML=ge),G=r(e),T=a(e,"PICTURE",{"data-svelte-h":!0}),l(T)!=="svelte-1yxtx4e"&&(T.innerHTML=ve),R=r(e),_=a(e,"P",{"data-svelte-h":!0}),l(_)!=="svelte-lergl6"&&(_.innerHTML=ye),Y=r(e),g=a(e,"H2",{id:!0,"data-svelte-h":!0}),l(g)!=="svelte-1szpcgd"&&(g.innerHTML=we),B=r(e),C=a(e,"P",{"data-svelte-h":!0}),l(C)!=="svelte-1nkyewk"&&(C.textContent=be),F=r(e),L=a(e,"P",{"data-svelte-h":!0}),l(L)!=="svelte-1tzq6qx"&&(L.innerHTML=xe),K=r(e),H=a(e,"OL",{"data-svelte-h":!0}),l(H)!=="svelte-hhsid6"&&(H.innerHTML=ke),Q=r(e),M=a(e,"P",{"data-svelte-h":!0}),l(M)!=="svelte-4iuswv"&&(M.innerHTML=Ie),J=r(e),P=a(e,"P",{"data-svelte-h":!0}),l(P)!=="svelte-19thoi1"&&(P.textContent=Te),ee=r(e),z=a(e,"UL",{"data-svelte-h":!0}),l(z)!=="svelte-1vg8q72"&&(z.innerHTML=_e),te=r(e),v=a(e,"H2",{id:!0,"data-svelte-h":!0}),l(v)!=="svelte-1ot9t4k"&&(v.innerHTML=Ce),ie=r(e),q=a(e,"P",{"data-svelte-h":!0}),l(q)!=="svelte-1xip6ng"&&(q.textContent=Le),ne=r(e),A=a(e,"P",{"data-svelte-h":!0}),l(A)!=="svelte-10694c4"&&(A.textContent=He),oe=r(e),D=a(e,"UL",{"data-svelte-h":!0}),l(D)!=="svelte-1c976pa"&&(D.innerHTML=Me),ae=r(e),S=a(e,"P",{"data-svelte-h":!0}),l(S)!=="svelte-1w0kg62"&&(S.innerHTML=Pe),le=r(e),V=a(e,"BLOCKQUOTE",{"data-svelte-h":!0}),l(V)!=="svelte-1fx5cjq"&&(V.innerHTML=ze),se=r(e),U=a(e,"P",{"data-svelte-h":!0}),l(U)!=="svelte-b94g"&&(U.innerHTML=qe),re=r(e),j=a(e,"P",{"data-svelte-h":!0}),l(j)!=="svelte-1y30bl5"&&(j.innerHTML=Ae),this.h()},h(){Se(g,"id","configuring-neovim"),Se(v,"id","why-i-changed-my-mind-about-vim")},m(e,t){i(e,h,t),i(e,c,t),i(e,d,t),i(e,m,t),i(e,f,t),i(e,N,t),i(e,y,t),i(e,W,t),i(e,w,t),i(e,$,t),i(e,b,t),i(e,O,t),i(e,x,t),i(e,X,t),i(e,k,t),i(e,Z,t),i(e,I,t),i(e,G,t),i(e,T,t),i(e,R,t),i(e,_,t),i(e,Y,t),i(e,g,t),i(e,B,t),i(e,C,t),i(e,F,t),i(e,L,t),i(e,K,t),i(e,H,t),i(e,Q,t),i(e,M,t),i(e,J,t),i(e,P,t),i(e,ee,t),i(e,z,t),i(e,te,t),i(e,v,t),i(e,ie,t),i(e,q,t),i(e,ne,t),i(e,A,t),i(e,oe,t),i(e,D,t),i(e,ae,t),i(e,S,t),i(e,le,t),i(e,V,t),i(e,se,t),i(e,U,t),i(e,re,t),i(e,j,t)},p:Ee,d(e){e&&(n(h),n(c),n(d),n(m),n(f),n(N),n(y),n(W),n(w),n($),n(b),n(O),n(x),n(X),n(k),n(Z),n(I),n(G),n(T),n(R),n(_),n(Y),n(g),n(B),n(C),n(F),n(L),n(K),n(H),n(Q),n(M),n(J),n(P),n(ee),n(z),n(te),n(v),n(ie),n(q),n(ne),n(A),n(oe),n(D),n(ae),n(S),n(le),n(V),n(se),n(U),n(re),n(j))}}}function Ke(E){let h,p;const c=[E[0],Ue];let d={$$slots:{default:[Fe]},$$scope:{ctx:E}};for(let u=0;u<c.length;u+=1)d=he(d,c[u]);return h=new Be({props:d}),{c(){$e(h.$$.fragment)},l(u){Oe(h.$$.fragment,u)},m(u,m){Xe(h,u,m),p=!0},p(u,[m]){const f=m&1?Ye(c,[m&1&&Ve(u[0]),m&0&&Ve(Ue)]):{};m&2&&(f.$$scope={dirty:m,ctx:u}),h.$set(f)},i(u){p||(Ze(h.$$.fragment,u),p=!0)},o(u){Ge(h.$$.fragment,u),p=!1},d(u){Re(h,u)}}}const Ue={title:"I use Neovim btw",description:"Imagine a world where something as simple as editing text becomes a fun and challenging puzzle to be solved.",slug:"notes/use-neovim",publish:!0,lastmod:"2024-07-30T00:00:00.000Z",date:"2024-07-30T00:00:00.000Z",aliases:null,tags:["status/seedling"],readTime:12,internalLinks:[],flashcards:[]};function Qe(E,h,p){return E.$$set=c=>{p(0,h=he(he({},h),De(c)))},h=De(h),[h]}class nt extends Ne{constructor(h){super(),We(this,h,Qe,Ke,je,{})}}export{nt as default,Ue as metadata};
