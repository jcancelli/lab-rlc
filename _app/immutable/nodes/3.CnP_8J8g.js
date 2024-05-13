var fn=Object.defineProperty;var _n=(n,e,t)=>e in n?fn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var be=(n,e,t)=>(_n(n,typeof e!="symbol"?e+"":e,t),t);import{Q as dn,R as hn,K as xe,E as gn,s as Ae,e as p,t as te,a as K,c as b,b as M,d as re,f as E,g as W,o as w,i as ce,h as u,S as J,T as Ee,j as qe,U as Qe,n as ue,C as en,z as N,m as ne,H as Ke,V as Te,W as z,X as pn,Y as We,k as bn,Z as qn,v as Xe,_ as vn}from"../chunks/scheduler.8s9BB04S.js";import{g as yn,a as _e,c as Cn,t as de,S as Se,i as He,f as A,b as ve,d as ye,m as Ce,e as Re}from"../chunks/index.CdYjX3oY.js";import{w as Rn}from"../chunks/index.CDisA07u.js";function Ye(n,e){const t=e.token={};function r(s,a,o,c){if(e.token!==t)return;e.resolved=c;let f=e.ctx;o!==void 0&&(f=f.slice(),f[o]=c);const y=s&&(e.current=s)(f);let d=!1;e.block&&(e.blocks?e.blocks.forEach((x,h)=>{h!==a&&x&&(yn(),_e(x,1,1,()=>{e.blocks[h]===x&&(e.blocks[h]=null)}),Cn())}):e.block.d(1),y.c(),de(y,1),y.m(e.mount(),e.anchor),d=!0),e.block=y,e.blocks&&(e.blocks[a]=y),d&&gn()}if(dn(n)){const s=hn();if(n.then(a=>{xe(s),r(e.then,1,e.value,a),xe(null)},a=>{if(xe(s),r(e.catch,2,e.error,a),xe(null),!e.hasCatch)throw a}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Fn(n,e,t){const r=e.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,t)}function Ze(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const En=()=>({resistors:[10,15,22,33,47,68,100,150,180,220,270,330,390,470,560,680,820,1e3,1200,1500,1800,2200,2700,3300,3900,4700,5600,6800,8200,1e4,12e3,15e3,18e3,22e3,27e3,33e3,39e3,47e3,56e3,68e3,82e3,1e5,15e4,22e4,33e4,47e4,68e4,1e6],capacitors:[.47,1,1.5,2.2,2.7,3.3,3.9,4.7,5.6,6.8,10,15,22,27,33,47,56,68,100,150,220,330,470,680,1e3],inductors:[.047,.47,1,1.5,4.7,10,47]}),Un=Object.freeze(Object.defineProperty({__proto__:null,load:En},Symbol.toStringTag,{value:"Module"}));class Ln{constructor(e,t,r,s,a){be(this,"r");be(this,"l");be(this,"c");be(this,"qualityFactor");be(this,"resonanceFrequency");this.r=e,this.l=t,this.c=r,this.qualityFactor=s,this.resonanceFrequency=a}}function xn(n,e,t){return 1/n*Math.sqrt(e/t)}const Tn=Math.PI*2;function Qn(n,e){return kn(n,e)/Tn}function kn(n,e){return Math.sqrt(1/(n*e))}function On(n){let e,t,r,s,a,o,c,f,y,d,x,h,Q,v;return{c(){e=p("div"),t=p("div"),r=te(n[2]),s=K(),a=p("div"),o=p("label"),c=te(`Min
			`),f=p("input"),y=K(),d=p("label"),x=te(`Max
			`),h=p("input"),this.h()},l(g){e=b(g,"DIV",{class:!0});var C=M(e);t=b(C,"DIV",{class:!0});var I=M(t);r=re(I,n[2]),I.forEach(E),s=W(C),a=b(C,"DIV",{});var T=M(a);o=b(T,"LABEL",{});var S=M(o);c=re(S,`Min
			`),f=b(S,"INPUT",{type:!0,class:!0}),S.forEach(E),y=W(T),d=b(T,"LABEL",{});var P=M(d);x=re(P,`Max
			`),h=b(P,"INPUT",{type:!0,class:!0}),P.forEach(E),T.forEach(E),C.forEach(E),this.h()},h(){w(t,"class","font-bold text-center"),w(f,"type","number"),w(f,"class","border border-gray-400 w-24 px-1 rounded-md"),w(h,"type","number"),w(h,"class","border border-gray-400 w-24 px-1 rounded-md"),w(e,"class","w-fit flex flex-col p-2 gap-1")},m(g,C){ce(g,e,C),u(e,t),u(t,r),u(e,s),u(e,a),u(a,o),u(o,c),u(o,f),J(f,n[0]),u(a,y),u(a,d),u(d,x),u(d,h),J(h,n[1]),Q||(v=[Ee(f,"input",n[3]),Ee(h,"input",n[4])],Q=!0)},p(g,[C]){C&4&&qe(r,g[2]),C&1&&Qe(f.value)!==g[0]&&J(f,g[0]),C&2&&Qe(h.value)!==g[1]&&J(h,g[1])},i:ue,o:ue,d(g){g&&E(e),Q=!1,en(v)}}}function In(n,e,t){let{title:r}=e,{min:s}=e,{max:a}=e;function o(){s=Qe(this.value),t(0,s)}function c(){a=Qe(this.value),t(1,a)}return n.$$set=f=>{"title"in f&&t(2,r=f.title),"min"in f&&t(0,s=f.min),"max"in f&&t(1,a=f.max)},[s,a,r,o,c]}class Fe extends Se{constructor(e){super(),He(this,e,In,On,Ae,{title:2,min:0,max:1})}}function Mn(n){let e,t,r,s,a,o,c,f,y,d,x,h,Q,v,g,C,I,T,S,P,B,H,V,Z="Sort by",G,j,L,R,m="Resistor",X,ae="Inductor",Y,se="Capacitor",O,l="Resonance frequency",i,q="Quality factor",F,U,D,he,ie,Oe,Ie,ge,le,Ve="Query",Le,Me,je;function nn(_){n[13](_)}function tn(_){n[14](_)}let we={title:"Resistor (ohm)"};n[0]!==void 0&&(we.min=n[0]),n[1]!==void 0&&(we.max=n[1]),t=new Fe({props:we}),N.push(()=>A(t,"min",nn)),N.push(()=>A(t,"max",tn));function rn(_){n[15](_)}function an(_){n[16](_)}let De={title:"Inductor (mH)"};n[2]!==void 0&&(De.min=n[2]),n[3]!==void 0&&(De.max=n[3]),o=new Fe({props:De}),N.push(()=>A(o,"min",rn)),N.push(()=>A(o,"max",an));function sn(_){n[17](_)}function un(_){n[18](_)}let Pe={title:"Capacitor (nF)"};n[4]!==void 0&&(Pe.min=n[4]),n[5]!==void 0&&(Pe.max=n[5]),d=new Fe({props:Pe}),N.push(()=>A(d,"min",sn)),N.push(()=>A(d,"max",un));function ln(_){n[19](_)}function on(_){n[20](_)}let Ne={title:"Resonance frequency (Hz)"};n[6]!==void 0&&(Ne.min=n[6]),n[7]!==void 0&&(Ne.max=n[7]),v=new Fe({props:Ne}),N.push(()=>A(v,"min",ln)),N.push(()=>A(v,"max",on));function mn(_){n[21](_)}function cn(_){n[22](_)}let ze={title:"Quality Factor"};return n[8]!==void 0&&(ze.min=n[8]),n[9]!==void 0&&(ze.max=n[9]),T=new Fe({props:ze}),N.push(()=>A(T,"min",mn)),N.push(()=>A(T,"max",cn)),{c(){e=p("div"),ve(t.$$.fragment),a=K(),ve(o.$$.fragment),y=K(),ve(d.$$.fragment),Q=K(),ve(v.$$.fragment),I=K(),ve(T.$$.fragment),B=K(),H=p("div"),V=p("div"),V.textContent=Z,G=K(),j=p("div"),L=p("select"),R=p("option"),R.textContent=m,X=p("option"),X.textContent=ae,Y=p("option"),Y.textContent=se,O=p("option"),O.textContent=l,i=p("option"),i.textContent=q,F=K(),U=p("select"),D=p("option"),he=te("Ascending"),ie=p("option"),Oe=te("Descending"),Ie=K(),ge=p("div"),le=p("button"),le.textContent=Ve,this.h()},l(_){e=b(_,"DIV",{class:!0});var k=M(e);ye(t.$$.fragment,k),a=W(k),ye(o.$$.fragment,k),y=W(k),ye(d.$$.fragment,k),Q=W(k),ye(v.$$.fragment,k),I=W(k),ye(T.$$.fragment,k),B=W(k),H=b(k,"DIV",{class:!0});var oe=M(H);V=b(oe,"DIV",{class:!0,"data-svelte-h":!0}),ne(V)!=="svelte-ld0rnu"&&(V.textContent=Z),G=W(oe),j=b(oe,"DIV",{class:!0});var me=M(j);L=b(me,"SELECT",{class:!0});var $=M(L);R=b($,"OPTION",{"data-svelte-h":!0}),ne(R)!=="svelte-kkperx"&&(R.textContent=m),X=b($,"OPTION",{"data-svelte-h":!0}),ne(X)!=="svelte-2hidky"&&(X.textContent=ae),Y=b($,"OPTION",{"data-svelte-h":!0}),ne(Y)!=="svelte-1vs232j"&&(Y.textContent=se),O=b($,"OPTION",{"data-svelte-h":!0}),ne(O)!=="svelte-15078xw"&&(O.textContent=l),i=b($,"OPTION",{"data-svelte-h":!0}),ne(i)!=="svelte-eh2qv5"&&(i.textContent=q),$.forEach(E),F=W(me),U=b(me,"SELECT",{class:!0});var fe=M(U);D=b(fe,"OPTION",{});var pe=M(D);he=re(pe,"Ascending"),pe.forEach(E),ie=b(fe,"OPTION",{});var Be=M(ie);Oe=re(Be,"Descending"),Be.forEach(E),fe.forEach(E),me.forEach(E),oe.forEach(E),Ie=W(k),ge=b(k,"DIV",{class:!0});var Ue=M(ge);le=b(Ue,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(le)!=="svelte-1p5ta7q"&&(le.textContent=Ve),Ue.forEach(E),k.forEach(E),this.h()},h(){w(V,"class","font-bold text-center"),R.__value="r",J(R,R.__value),X.__value="l",J(X,X.__value),Y.__value="c",J(Y,Y.__value),O.__value="resonanceFrequency",J(O,O.__value),i.__value="qualityFactor",J(i,i.__value),i.selected=!0,w(L,"class","border border-gray-400 px-1 rounded-md"),n[10]===void 0&&Ke(()=>n[23].call(L)),D.__value=ke.Ascending,J(D,D.__value),ie.__value=ke.Descending,J(ie,ie.__value),ie.selected=!0,w(U,"class","border border-gray-400 px-1 rounded-md"),n[11]===void 0&&Ke(()=>n[24].call(U)),w(j,"class","flex gap-1"),w(H,"class","w-fit flex flex-col p-2 gap-1"),w(le,"class","border border-gray-400 p-2 rounded-md cursor-pointer"),w(ge,"class","flex items-center justify-center p-2"),w(e,"class","flex flex-wrap p-3 bg-white shadow-md")},m(_,k){ce(_,e,k),Ce(t,e,null),u(e,a),Ce(o,e,null),u(e,y),Ce(d,e,null),u(e,Q),Ce(v,e,null),u(e,I),Ce(T,e,null),u(e,B),u(e,H),u(H,V),u(H,G),u(H,j),u(j,L),u(L,R),u(L,X),u(L,Y),u(L,O),u(L,i),Te(L,n[10],!0),u(j,F),u(j,U),u(U,D),u(D,he),u(U,ie),u(ie,Oe),Te(U,n[11],!0),u(e,Ie),u(e,ge),u(ge,le),Le=!0,Me||(je=[Ee(L,"change",n[23]),Ee(U,"change",n[24]),Ee(le,"click",n[25])],Me=!0)},p(_,[k]){const oe={};!r&&k&1&&(r=!0,oe.min=_[0],z(()=>r=!1)),!s&&k&2&&(s=!0,oe.max=_[1],z(()=>s=!1)),t.$set(oe);const me={};!c&&k&4&&(c=!0,me.min=_[2],z(()=>c=!1)),!f&&k&8&&(f=!0,me.max=_[3],z(()=>f=!1)),o.$set(me);const $={};!x&&k&16&&(x=!0,$.min=_[4],z(()=>x=!1)),!h&&k&32&&(h=!0,$.max=_[5],z(()=>h=!1)),d.$set($);const fe={};!g&&k&64&&(g=!0,fe.min=_[6],z(()=>g=!1)),!C&&k&128&&(C=!0,fe.max=_[7],z(()=>C=!1)),v.$set(fe);const pe={};!S&&k&256&&(S=!0,pe.min=_[8],z(()=>S=!1)),!P&&k&512&&(P=!0,pe.max=_[9],z(()=>P=!1)),T.$set(pe),k&1024&&Te(L,_[10]),k&2048&&Te(U,_[11])},i(_){Le||(de(t.$$.fragment,_),de(o.$$.fragment,_),de(d.$$.fragment,_),de(v.$$.fragment,_),de(T.$$.fragment,_),Le=!0)},o(_){_e(t.$$.fragment,_),_e(o.$$.fragment,_),_e(d.$$.fragment,_),_e(v.$$.fragment,_),_e(T.$$.fragment,_),Le=!1},d(_){_&&E(e),Re(t),Re(o),Re(d),Re(v),Re(T),Me=!1,en(je)}}}var ke=(n=>(n[n.Ascending=0]="Ascending",n[n.Descending=1]="Descending",n))(ke||{});function wn(n,e,t){let{minR:r}=e,{maxR:s}=e,{minL:a}=e,{maxL:o}=e,{minC:c}=e,{maxC:f}=e,{minResFreq:y}=e,{maxResFreq:d}=e,{minQ:x}=e,{maxQ:h}=e,{sortField:Q}=e,{sortOrder:v}=e;const g=pn();function C(m){r=m,t(0,r)}function I(m){s=m,t(1,s)}function T(m){a=m,t(2,a)}function S(m){o=m,t(3,o)}function P(m){c=m,t(4,c)}function B(m){f=m,t(5,f)}function H(m){y=m,t(6,y)}function V(m){d=m,t(7,d)}function Z(m){x=m,t(8,x)}function G(m){h=m,t(9,h)}function j(){Q=We(this),t(10,Q)}function L(){v=We(this),t(11,v)}const R=()=>g("query");return n.$$set=m=>{"minR"in m&&t(0,r=m.minR),"maxR"in m&&t(1,s=m.maxR),"minL"in m&&t(2,a=m.minL),"maxL"in m&&t(3,o=m.maxL),"minC"in m&&t(4,c=m.minC),"maxC"in m&&t(5,f=m.maxC),"minResFreq"in m&&t(6,y=m.minResFreq),"maxResFreq"in m&&t(7,d=m.maxResFreq),"minQ"in m&&t(8,x=m.minQ),"maxQ"in m&&t(9,h=m.maxQ),"sortField"in m&&t(10,Q=m.sortField),"sortOrder"in m&&t(11,v=m.sortOrder)},[r,s,a,o,c,f,y,d,x,h,Q,v,g,C,I,T,S,P,B,H,V,Z,G,j,L,R]}class Dn extends Se{constructor(e){super(),He(this,e,wn,Mn,Ae,{minR:0,maxR:1,minL:2,maxL:3,minC:4,maxC:5,minResFreq:6,maxResFreq:7,minQ:8,maxQ:9,sortField:10,sortOrder:11})}}function Ge(n,e,t){const r=n.slice();return r[34]=e[t].r,r[35]=e[t].l,r[36]=e[t].c,r[37]=e[t].qualityFactor,r[38]=e[t].resonanceFrequency,r}function Pn(n){return{c:ue,l:ue,m:ue,p:ue,d:ue}}function Nn(n){let e,t=Ze(n[33]),r=[];for(let a=0;a<t.length;a+=1)r[a]=$e(Ge(n,t,a));let s=null;return t.length||(s=Je()),{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=Xe(),s&&s.c()},l(a){for(let o=0;o<r.length;o+=1)r[o].l(a);e=Xe(),s&&s.l(a)},m(a,o){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(a,o);ce(a,e,o),s&&s.m(a,o)},p(a,o){if(o[0]&4096){t=Ze(a[33]);let c;for(c=0;c<t.length;c+=1){const f=Ge(a,t,c);r[c]?r[c].p(f,o):(r[c]=$e(f),r[c].c(),r[c].m(e.parentNode,e))}for(;c<r.length;c+=1)r[c].d(1);r.length=t.length,!t.length&&s?s.p(a,o):t.length?s&&(s.d(1),s=null):(s=Je(),s.c(),s.m(e.parentNode,e))}},d(a){a&&E(e),vn(r,a),s&&s.d(a)}}}function Je(n){let e,t='<td colspan="5" class="text-center p-10 font-semibold svelte-d8nz9m">No results</td> ';return{c(){e=p("tr"),e.innerHTML=t},l(r){e=b(r,"TR",{"data-svelte-h":!0}),ne(e)!=="svelte-1npr15s"&&(e.innerHTML=t)},m(r,s){ce(r,e,s)},p:ue,d(r){r&&E(e)}}}function $e(n){let e,t,r,s=ee(n[34],0,2)+"",a,o,c,f,y=ee(n[35],0,2)+"",d,x,h,Q,v=ee(n[36],0,2)+"",g,C,I,T,S=ee(n[38],0,0)+"",P,B,H,V,Z=ee(n[37],2,2)+"",G,j;return{c(){e=p("tr"),t=p("td"),r=p("span"),a=te(s),o=K(),c=p("td"),f=p("span"),d=te(y),x=K(),h=p("td"),Q=p("span"),g=te(v),C=K(),I=p("td"),T=p("span"),P=te(S),B=K(),H=p("td"),V=p("span"),G=te(Z),j=K(),this.h()},l(L){e=b(L,"TR",{});var R=M(e);t=b(R,"TD",{class:!0});var m=M(t);r=b(m,"SPAN",{class:!0});var X=M(r);a=re(X,s),X.forEach(E),m.forEach(E),o=W(R),c=b(R,"TD",{class:!0});var ae=M(c);f=b(ae,"SPAN",{class:!0});var Y=M(f);d=re(Y,y),Y.forEach(E),ae.forEach(E),x=W(R),h=b(R,"TD",{class:!0});var se=M(h);Q=b(se,"SPAN",{class:!0});var O=M(Q);g=re(O,v),O.forEach(E),se.forEach(E),C=W(R),I=b(R,"TD",{class:!0});var l=M(I);T=b(l,"SPAN",{class:!0});var i=M(T);P=re(i,S),i.forEach(E),l.forEach(E),B=W(R),H=b(R,"TD",{class:!0});var q=M(H);V=b(q,"SPAN",{});var F=M(V);G=re(F,Z),F.forEach(E),q.forEach(E),j=W(R),R.forEach(E),this.h()},h(){w(r,"class",""),w(t,"class","svelte-d8nz9m"),w(f,"class",""),w(c,"class","svelte-d8nz9m"),w(Q,"class",""),w(h,"class","svelte-d8nz9m"),w(T,"class",""),w(I,"class","svelte-d8nz9m"),w(H,"class","svelte-d8nz9m")},m(L,R){ce(L,e,R),u(e,t),u(t,r),u(r,a),u(e,o),u(e,c),u(c,f),u(f,d),u(e,x),u(e,h),u(h,Q),u(Q,g),u(e,C),u(e,I),u(I,T),u(T,P),u(e,B),u(e,H),u(H,V),u(V,G),u(e,j)},p(L,R){R[0]&4096&&s!==(s=ee(L[34],0,2)+"")&&qe(a,s),R[0]&4096&&y!==(y=ee(L[35],0,2)+"")&&qe(d,y),R[0]&4096&&v!==(v=ee(L[36],0,2)+"")&&qe(g,v),R[0]&4096&&S!==(S=ee(L[38],0,0)+"")&&qe(P,S),R[0]&4096&&Z!==(Z=ee(L[37],2,2)+"")&&qe(G,Z)},d(L){L&&E(e)}}}function zn(n){let e,t='<td colspan="5" class="text-center p-10 font-semibold svelte-d8nz9m">Calculating...</td>';return{c(){e=p("tr"),e.innerHTML=t},l(r){e=b(r,"TR",{"data-svelte-h":!0}),ne(e)!=="svelte-1tzstos"&&(e.innerHTML=t)},m(r,s){ce(r,e,s)},p:ue,d(r){r&&E(e)}}}function An(n){let e,t,r,s,a,o,c,f,y,d,x,h,Q,v,g,C,I,T='<th class="svelte-d8nz9m">Resistor (ohm)</th> <th class="svelte-d8nz9m">Inductor (mH)</th> <th class="svelte-d8nz9m">Capacitor (nF)</th> <th class="svelte-d8nz9m">Resonance Frequency (Hz)</th> <th class="svelte-d8nz9m">Quality Factor</th>',S,P,B;function H(i){n[16](i)}function V(i){n[17](i)}function Z(i){n[18](i)}function G(i){n[19](i)}function j(i){n[20](i)}function L(i){n[21](i)}function R(i){n[22](i)}function m(i){n[23](i)}function X(i){n[24](i)}function ae(i){n[25](i)}function Y(i){n[26](i)}function se(i){n[27](i)}let O={};n[0]!==void 0&&(O.minR=n[0]),n[1]!==void 0&&(O.maxR=n[1]),n[2]!==void 0&&(O.minL=n[2]),n[3]!==void 0&&(O.maxL=n[3]),n[4]!==void 0&&(O.minC=n[4]),n[5]!==void 0&&(O.maxC=n[5]),n[6]!==void 0&&(O.minResFreq=n[6]),n[7]!==void 0&&(O.maxResFreq=n[7]),n[8]!==void 0&&(O.minQ=n[8]),n[9]!==void 0&&(O.maxQ=n[9]),n[10]!==void 0&&(O.sortField=n[10]),n[11]!==void 0&&(O.sortOrder=n[11]),e=new Dn({props:O}),N.push(()=>A(e,"minR",H)),N.push(()=>A(e,"maxR",V)),N.push(()=>A(e,"minL",Z)),N.push(()=>A(e,"maxL",G)),N.push(()=>A(e,"minC",j)),N.push(()=>A(e,"maxC",L)),N.push(()=>A(e,"minResFreq",R)),N.push(()=>A(e,"maxResFreq",m)),N.push(()=>A(e,"minQ",X)),N.push(()=>A(e,"maxQ",ae)),N.push(()=>A(e,"sortField",Y)),N.push(()=>A(e,"sortOrder",se)),e.$on("query",n[14]);let l={ctx:n,current:null,token:null,hasCatch:!1,pending:zn,then:Nn,catch:Pn,value:33};return Ye(P=n[12],l),{c(){ve(e.$$.fragment),v=K(),g=p("div"),C=p("table"),I=p("tr"),I.innerHTML=T,S=K(),l.block.c(),this.h()},l(i){ye(e.$$.fragment,i),v=W(i),g=b(i,"DIV",{class:!0});var q=M(g);C=b(q,"TABLE",{class:!0});var F=M(C);I=b(F,"TR",{"data-svelte-h":!0}),ne(I)!=="svelte-uyy02c"&&(I.innerHTML=T),S=W(F),l.block.l(F),F.forEach(E),q.forEach(E),this.h()},h(){w(C,"class","text-right"),w(g,"class","w-fit bg-white p-4 mt-2 shadow-md mx-auto rounded-lg")},m(i,q){Ce(e,i,q),ce(i,v,q),ce(i,g,q),u(g,C),u(C,I),u(C,S),l.block.m(C,l.anchor=null),l.mount=()=>C,l.anchor=null,B=!0},p(i,q){n=i;const F={};!t&&q[0]&1&&(t=!0,F.minR=n[0],z(()=>t=!1)),!r&&q[0]&2&&(r=!0,F.maxR=n[1],z(()=>r=!1)),!s&&q[0]&4&&(s=!0,F.minL=n[2],z(()=>s=!1)),!a&&q[0]&8&&(a=!0,F.maxL=n[3],z(()=>a=!1)),!o&&q[0]&16&&(o=!0,F.minC=n[4],z(()=>o=!1)),!c&&q[0]&32&&(c=!0,F.maxC=n[5],z(()=>c=!1)),!f&&q[0]&64&&(f=!0,F.minResFreq=n[6],z(()=>f=!1)),!y&&q[0]&128&&(y=!0,F.maxResFreq=n[7],z(()=>y=!1)),!d&&q[0]&256&&(d=!0,F.minQ=n[8],z(()=>d=!1)),!x&&q[0]&512&&(x=!0,F.maxQ=n[9],z(()=>x=!1)),!h&&q[0]&1024&&(h=!0,F.sortField=n[10],z(()=>h=!1)),!Q&&q[0]&2048&&(Q=!0,F.sortOrder=n[11],z(()=>Q=!1)),e.$set(F),l.ctx=n,q[0]&4096&&P!==(P=n[12])&&Ye(P,l)||Fn(l,n,q)},i(i){B||(de(e.$$.fragment,i),B=!0)},o(i){_e(e.$$.fragment,i),B=!1},d(i){i&&(E(v),E(g)),Re(e,i),l.block.d(),l.token=null,l=null}}}function ee(n,e,t){return n.toLocaleString(void 0,{minimumFractionDigits:e,maximumFractionDigits:t})}function Sn(n,e,t){let r,{data:s}=e,a=9999999,o=0,c=9999999,f=0,y=9999999,d=0,x=9999999,h=0,Q=9999999,v=0,g,C;const I=[],T=Rn(S().then(P).then(B));bn(n,T,l=>t(12,r=l));async function S(){for(const l of s.resistors)for(const i of s.inductors){const q=i*.001;for(const F of s.capacitors){const U=F*1e-9,D=new Ln(l,i,F,xn(l,q,U),Qn(q,U));I.push(D),t(0,a=Math.min(a,D.r)),t(1,o=Math.max(o,D.r)),t(2,c=Math.min(c,D.l)),t(3,f=Math.max(f,D.l)),t(4,y=Math.min(y,D.c)),t(5,d=Math.max(d,D.c)),t(6,x=Math.min(x,D.resonanceFrequency)),t(7,h=Math.max(h,D.resonanceFrequency)),t(8,Q=Math.min(Q,D.qualityFactor)),t(9,v=Math.max(v,D.qualityFactor))}}return I}async function P(l){let i;return C===ke.Ascending?i=(q,F)=>q[g]-F[g]:i=(q,F)=>F[g]-q[g],l.filter(({r:q,l:F,c:U,resonanceFrequency:D,qualityFactor:he})=>q>a&&q<o&&F>c&&F<f&&U>y&&U<d&&D>x&&D<h&&he>Q&&he<v).sort(i)}async function B(l){return l}function H(){qn(T,r=P(I).then(B),r)}function V(l){a=l,t(0,a)}function Z(l){o=l,t(1,o)}function G(l){c=l,t(2,c)}function j(l){f=l,t(3,f)}function L(l){y=l,t(4,y)}function R(l){d=l,t(5,d)}function m(l){x=l,t(6,x)}function X(l){h=l,t(7,h)}function ae(l){Q=l,t(8,Q)}function Y(l){v=l,t(9,v)}function se(l){g=l,t(10,g)}function O(l){C=l,t(11,C)}return n.$$set=l=>{"data"in l&&t(15,s=l.data)},[a,o,c,f,y,d,x,h,Q,v,g,C,r,T,H,s,V,Z,G,j,L,R,m,X,ae,Y,se,O]}class Kn extends Se{constructor(e){super(),He(this,e,Sn,An,Ae,{data:15},null,[-1,-1])}}export{Kn as component,Un as universal};