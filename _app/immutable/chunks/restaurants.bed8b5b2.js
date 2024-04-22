import{s as K,C,N as L,f as m,a as $,g as u,u as g,c as w,i,d as h,A as F}from"./scheduler.e9e6880c.js";import{S as q,i as I,b as S,d as y,m as T,a as v,t as B,e as x}from"./index.ebf47752.js";import{g as Q,a as D}from"./spread.8a54911c.js";import{M as U}from"./MDSveXNoteLayout.236652f2.js";import{T as P}from"./Table.7508c68b.js";function j(c){let t,l="<tr><th>Restaurant (A-Z)</th> <th>Type of food</th> <th>Price</th> <th>Location</th> <th>Highlights/notes</th></tr>",r,a,o='<tr><td><a href="https://g.page/afghancuisinebellevue?share" rel="nofollow">Afghan Cuisine</a></td> <td>Afghan</td> <td><code>$$</code></td> <td>Overlake</td> <td>Qabili pallow</td></tr> <tr><td><a href="https://goo.gl/maps/QLS7oMSUmEBjdqAc6" rel="nofollow">Altura</a></td> <td>Italian, fine dining</td> <td><code>$$$$$</code></td> <td>Capital Hill</td> <td>Tasting menu</td></tr> <tr><td><a href="https://goo.gl/maps/kKiHHHGvbRfn2Zi56" rel="nofollow">Bottle and Bull</a></td> <td>Tapas, cocktails</td> <td><code>$$$$</code></td> <td>Kirkland</td> <td>Cocktails &amp; tapas</td></tr> <tr><td><a href="https://goo.gl/maps/tEsYF9QpqK4Lhfxu8" rel="nofollow">Box &amp; Burgers Eatery, the</a></td> <td>Asian fusion</td> <td><code>$</code></td> <td>Totem Lake</td> <td>Chicken plates w/ salad</td></tr> <tr><td><a href="https://g.page/communion-restaurant-bar?share" rel="nofollow">COMMUNION</a></td> <td>Southern</td> <td><code>$$$</code></td> <td>Central District</td> <td>Cocktails, banana pudding, fritters</td></tr> <tr><td><a href="https://g.page/carrello?share" rel="nofollow">Carello</a></td> <td>Italian</td> <td><code>$$$$</code></td> <td>Capital Hill</td> <td>Small bites cart</td></tr> <tr><td><a href="https://goo.gl/maps/uzGwafwtDn3qsg34A" rel="nofollow">Chicken Supply, the</a></td> <td>Filipino</td> <td><code>$</code></td> <td>Phinney Ridge</td> <td>Fried chicken thigh &amp; side dishes</td></tr> <tr><td><a href="https://goo.gl/maps/hWVwNz4H3W2V6Zpy7" rel="nofollow">China Harbor restaurant</a></td> <td>Dim Sum</td> <td><code>$</code></td> <td>Westlake</td> <td>Dim sum is great, esp truffle pork siu mai</td></tr> <tr><td><a href="https://goo.gl/maps/JukD7TykUDko2FyAA" rel="nofollow">Dreamland Bar</a></td> <td>American Brunch</td> <td><code>$$</code></td> <td>Fremont</td> <td>Disco ball hallway</td></tr> <tr><td><a href="https://goo.gl/maps/zSbPF3VR52WtZTXT8" rel="nofollow">Facing East</a></td> <td>Taiwanese</td> <td><code>$$</code></td> <td>Bellevue</td> <td>Pork belly</td></tr> <tr><td><a href="https://goo.gl/maps/B23GYU8QpaoCarXJ9" rel="nofollow">Farine Bakery &amp; Cafe</a></td> <td>Bakery</td> <td><code>$</code></td> <td>Redmond</td> <td>Fresh bread &amp; pastries</td></tr> <tr><td><a href="https://goo.gl/maps/t2ikZm83sDYkC3K17" rel="nofollow">Flint Creek Cattle Co.</a></td> <td>PNW Farm to Table</td> <td><code>$$$</code></td> <td>Phinney Ridge</td> <td>Great food &amp; cocktails. Lively, upscale vibe</td></tr> <tr><td><a href="https://goo.gl/maps/pYQ5jLS4CdQZrSSh7" rel="nofollow">Harbor City Restaurant</a></td> <td>Dim Sum</td> <td><code>$</code></td> <td>International District</td> <td>Coconut buns</td></tr> <tr><td><a href="https://g.page/isarnkitchen?share" rel="nofollow">Isarn Thai Soul Kitchen</a></td> <td>Northern Thai</td> <td><code>$$</code></td> <td>Kirkland</td> <td>Go for the curries &amp; Khao Soi</td></tr> <tr><td><a href="https://goo.gl/maps/LNaShsn3mMxhTnC8A" rel="nofollow">Junebaby</a></td> <td>Southern</td> <td><code>$$$</code></td> <td>Ravenna</td> <td>Deep Southern culinary immersion</td></tr> <tr><td><a href="https://goo.gl/maps/7Gsq8cT72ghU262h9" rel="nofollow">Kamonegi</a></td> <td>Soba</td> <td><code>$</code></td> <td>Fremont</td> <td>Handmade buckwheat soba</td></tr> <tr><td><a href="https://goo.gl/maps/MBbQXvesnqnug2Sh7" rel="nofollow">La Carta De Oaxaca</a></td> <td>Mexican</td> <td><code>$$</code></td> <td>Ballard</td> <td>Authentic Oaxacan cuisine</td></tr> <tr><td><a href="https://goo.gl/maps/sY7R9qEvNH4xxUrW7" rel="nofollow">Meet Korean BBQ</a></td> <td>Korean</td> <td><code>$$$$</code></td> <td>Capital Hill</td> <td>High end KBBQ meats including A5 Wagyu</td></tr> <tr><td><a href="https://goo.gl/maps/QrF21nVA6DYrUSTt8" rel="nofollow">Musashi’s Sushi</a></td> <td>Sushi</td> <td><code>$</code></td> <td>Factoria</td> <td>Chirashi bowl. Cash only</td></tr> <tr><td><a href="https://g.page/nirmalseattle?share" rel="nofollow">NIRMAL’S</a></td> <td>Indian</td> <td><code>$$$</code></td> <td>Pioneer Square</td> <td>Great drinks &amp; curries</td></tr> <tr><td><a href="https://goo.gl/maps/ZzXmeVZQwMUKMqUp8" rel="nofollow">Paju</a></td> <td>Korean</td> <td><code>$$</code></td> <td>Queen Anne</td> <td>Premium takes on Korean classics</td></tr> <tr><td><a href="https://goo.gl/maps/qifmLEPGfqNUqgkr8" rel="nofollow">Pasta Casalinga</a></td> <td>Italian</td> <td><code>$$</code></td> <td>Pike Place</td> <td>Seasonal fresh pasta, weekly menu</td></tr> <tr><td><a href="https://goo.gl/maps/i2xoD2JXCLYqjeeR7" rel="nofollow">Pho Bac Sup Shop</a></td> <td>Vietnamese</td> <td><code>$</code></td> <td>International District</td> <td>Fantastic pho broth, rare beef</td></tr> <tr><td><a href="https://goo.gl/maps/os69it747Hcys2pW9" rel="nofollow">Rasai</a></td> <td>Modern Indian</td> <td><code>$$$$</code></td> <td>Fremont</td> <td>All of the food is delicious</td></tr> <tr><td><a href="https://g.page/rupeebar?share" rel="nofollow">Rupee Bar</a></td> <td>Sri Lankan &amp; Indian</td> <td><code>$$$</code></td> <td>Ballard</td> <td>Tapas &amp; cocktails</td></tr> <tr><td><a href="https://g.page/StatesideSEA?share" rel="nofollow">Stateside</a></td> <td>Vietnamese/French</td> <td><code>$$$</code></td> <td>Capital Hill</td> <td>Brunch</td></tr> <tr><td><a href="https://goo.gl/maps/SoiSPx2wPbrcX8SX9" rel="nofollow">Sushi Kashiba</a></td> <td>Sushi</td> <td><code>$$$$$</code></td> <td>Pike Place</td> <td>Omakase. Try the “kama toro”</td></tr> <tr><td><a href="https://maps.app.goo.gl/w5qTtMjBJMpCbJuH8" rel="nofollow">Umi Sake House</a></td> <td>Sushi</td> <td><code>$$$</code></td> <td>Belltown</td> <td>Black cod is amazing. Great happy hour</td></tr>';return{c(){t=m("thead"),t.innerHTML=l,r=$(),a=m("tbody"),a.innerHTML=o},l(e){t=u(e,"THEAD",{["data-svelte-h"]:!0}),g(t)!=="svelte-1k1ch2w"&&(t.innerHTML=l),r=w(e),a=u(e,"TBODY",{["data-svelte-h"]:!0}),g(a)!=="svelte-m0i37n"&&(a.innerHTML=o)},m(e,s){i(e,t,s),i(e,r,s),i(e,a,s)},p:F,d(e){e&&(h(t),h(r),h(a))}}}function N(c){let t,l="<tr><th>Restaurant</th> <th>Type of food</th> <th>Location</th> <th>notes</th></tr>",r,a,o='<tr><td><a href="https://g.page/Kawon?share" rel="nofollow">Ka Won</a></td> <td>KBBQ</td> <td>Lynnwood</td> <td>Recommended by multiple Korean friends. 1st visit was good.</td></tr> <tr><td>Phin coffee</td> <td>international district</td> <td>coffee shop/cafe</td> <td>try the pandan waffle</td></tr> <tr><td>Fuji bakery</td> <td>bakery</td> <td>Seattle</td> <td>Ube malasadas and chicken sandwiches</td></tr> <tr><td>Takai</td> <td>Sushi Omakase</td> <td>Bellevue</td> <td>Opened by Shiro &amp; his student. Great reviews</td></tr> <tr><td>the butchers table</td> <td>Steakhouse</td> <td></td> <td></td></tr> <tr><td>Cafe Canuc</td> <td>Pastries</td> <td>U District</td> <td>Very aesthetic. Bring camera</td></tr> <tr><td>How to Cook a Wolf</td> <td>Fine dining</td> <td>Queen Anne</td> <td>Multiple recommendations</td></tr>';return{c(){t=m("thead"),t.innerHTML=l,r=$(),a=m("tbody"),a.innerHTML=o},l(e){t=u(e,"THEAD",{["data-svelte-h"]:!0}),g(t)!=="svelte-1n3ajrx"&&(t.innerHTML=l),r=w(e),a=u(e,"TBODY",{["data-svelte-h"]:!0}),g(a)!=="svelte-wzk9wr"&&(a.innerHTML=o)},m(e,s){i(e,t,s),i(e,r,s),i(e,a,s)},p:F,d(e){e&&(h(t),h(r),h(a))}}}function G(c){let t,l="There are many great restaurants in the Seattle area. These are some of the ones I enjoy.",r,a,o,e,s="At most places, pricing varies by what you order, especially in the mid to high price ranges (~$30-$100 per person). Think of the pricing as a rough grouping - prices with the same number of dollar signs are in the same ballpark. Depending on the order, the price could go up or down by a group. You’re unlikely to eat so much or so little that a restaurant jumps more than 1 dollar sign in either direction.",k,f,H="Restaurants I want to try:",b,p,_;return a=new P({props:{$$slots:{default:[j]},$$scope:{ctx:c}}}),p=new P({props:{$$slots:{default:[N]},$$scope:{ctx:c}}}),{c(){t=m("p"),t.textContent=l,r=$(),S(a.$$.fragment),o=$(),e=m("p"),e.textContent=s,k=$(),f=m("p"),f.textContent=H,b=$(),S(p.$$.fragment)},l(d){t=u(d,"P",{["data-svelte-h"]:!0}),g(t)!=="svelte-8tqlfd"&&(t.textContent=l),r=w(d),y(a.$$.fragment,d),o=w(d),e=u(d,"P",{["data-svelte-h"]:!0}),g(e)!=="svelte-qs41d7"&&(e.textContent=s),k=w(d),f=u(d,"P",{["data-svelte-h"]:!0}),g(f)!=="svelte-1lh6jf"&&(f.textContent=H),b=w(d),y(p.$$.fragment,d)},m(d,n){i(d,t,n),i(d,r,n),T(a,d,n),i(d,o,n),i(d,e,n),i(d,k,n),i(d,f,n),i(d,b,n),T(p,d,n),_=!0},p(d,n){const M={};n&2&&(M.$$scope={dirty:n,ctx:d}),a.$set(M);const A={};n&2&&(A.$$scope={dirty:n,ctx:d}),p.$set(A)},i(d){_||(v(a.$$.fragment,d),v(p.$$.fragment,d),_=!0)},o(d){B(a.$$.fragment,d),B(p.$$.fragment,d),_=!1},d(d){d&&(h(t),h(r),h(o),h(e),h(k),h(f),h(b)),x(a,d),x(p,d)}}}function O(c){let t,l;const r=[c[0],R];let a={$$slots:{default:[G]},$$scope:{ctx:c}};for(let o=0;o<r.length;o+=1)a=C(a,r[o]);return t=new U({props:a}),{c(){S(t.$$.fragment)},l(o){y(t.$$.fragment,o)},m(o,e){T(t,o,e),l=!0},p(o,[e]){const s=e&1?Q(r,[e&1&&D(o[0]),e&0&&D(R)]):{};e&2&&(s.$$scope={dirty:e,ctx:o}),t.$set(s)},i(o){l||(v(t.$$.fragment,o),l=!0)},o(o){B(t.$$.fragment,o),l=!1},d(o){x(t,o)}}}const R={title:"Restaurants I like",description:"A list of some of my favorite places to get a meal in the Seattle area.",slug:"restaurants",publish:!0,lastmod:"2023-08-19T00:00:00.000Z",date:"2021-06-13T00:00:00.000Z",aliases:["Restaurants I like"],tags:["status/evergreen"],timeToRead:2,internalLinks:[],flashcards:[]};function W(c,t,l){return c.$$set=r=>{l(0,t=C(C({},t),L(r)))},t=L(t),[t]}class z extends q{constructor(t){super(),I(this,t,W,O,K,{})}}export{z as default,R as metadata};
