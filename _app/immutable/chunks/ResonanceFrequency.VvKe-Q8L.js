import{a as x,t as A}from"./index.CCexug9z.js";import{v as j}from"./scheduler.BWqT3otp.js";function E(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function G(e,c){x(e,1,1,()=>{c.delete(e.key)})}function H(e,c,d,B,P,p,o,F,M,I,l,S){let i=e.length,f=p.length,a=i;const w={};for(;a--;)w[e[a].key]=a;const u=[],m=new Map,y=new Map,q=[];for(a=f;a--;){const n=S(P,p,a),t=d(n);let s=o.get(t);s?q.push(()=>s.p(n,c)):(s=I(t,n),s.c()),m.set(t,u[a]=s),t in w&&y.set(t,Math.abs(a-w[t]))}const r=new Set,v=new Set;function g(n){A(n,1),n.m(F,l),o.set(n.key,n),l=n.first,f--}for(;i&&f;){const n=u[f-1],t=e[i-1],s=n.key,h=t.key;n===t?(l=n.first,i--,f--):m.has(h)?!o.has(s)||r.has(s)?g(n):v.has(h)?i--:y.get(s)>y.get(h)?(v.add(s),g(n)):(r.add(h),i--):(M(t,o),i--)}for(;i--;){const n=e[i];m.has(n.key)||M(n,o)}for(;f;)g(u[f-1]);return j(q),u}function J(e,c,d){return 1/e*Math.sqrt(c/d)}const k=Math.PI*2;function K(e,c){return z(e,c)/k}function z(e,c){return Math.sqrt(1/(e*c))}export{E as e,G as o,J as q,K as r,H as u};