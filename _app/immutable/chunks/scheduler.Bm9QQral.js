function S(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function J(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function P(t){return t()}function K(){return Object.create(null)}function q(t){t.forEach(P)}function Q(t){return typeof t=="function"}function R(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function V(t){return Object.keys(t).length===0}function B(t,...n){if(t==null){for(const i of n)i(void 0);return S}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function X(t,n,e){t.$$.on_destroy.push(B(n,e))}function Y(t,n,e,i){if(t){const c=w(t,n,e,i);return t[0](c)}}function w(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function Z(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],r=Math.max(n.dirty.length,c.length);for(let o=0;o<r;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function $(t,n,e,i,c,s){if(c){const r=w(n,e,i,s);t.p(r,c)}}function tt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function nt(t,n,e){return t.set(e),n}let m=!1;function et(){m=!0}function it(){m=!1}function I(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function L(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:I(1,c,A=>n[e[A]].claim_order,u))-1;i[l]=e[a]+1;const k=a+1;e[k]=l,c=Math.max(k,c)}const s=[],r=[];let o=n.length-1;for(let l=e[c]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);o>=l;o--)r.push(n[o]);o--}for(;o>=0;o--)r.push(n[o]);s.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<s.length&&r[l].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(r[l],a)}}function M(t,n){if(m){for(L(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ct(t,n,e){m&&!e?M(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function lt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function O(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function ot(){return x(" ")}function st(){return x("")}function ut(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function at(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ft(t){return t.dataset.svelteH}function _t(t){return t===""?null:+t}function dt(t){return Array.from(t.childNodes)}function T(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,n,e,i,c=!1){T(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(n(o)){const l=e(o);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(n(o)){const l=e(o);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function D(t,n,e,i){return N(t,c=>c.nodeName===n,c=>{const s=[];for(let r=0;r<c.attributes.length;r++){const o=c.attributes[r];e[o.name]||s.push(o.name)}s.forEach(r=>c.removeAttribute(r))},()=>i(n))}function ht(t,n,e){return D(t,n,e,O)}function H(t,n){return N(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>x(n),!0)}function mt(t){return H(t," ")}function pt(t,n){n=""+n,t.data!==n&&(t.data=n)}function bt(t,n){t.value=n??""}function yt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function gt(t,n,e){for(let i=0;i<t.options.length;i+=1){const c=t.options[i];if(c.__value===n){c.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function xt(t){const n=t.querySelector(":checked");return n&&n.__value}function vt(t,n,e){t.classList.toggle(n,!!e)}function z(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function kt(t,n){return new t(n)}let h;function p(t){h=t}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function Et(t){v().$$.on_mount.push(t)}function wt(t){v().$$.after_update.push(t)}function Nt(){const t=v();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const s=z(n,e,{cancelable:i});return c.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],E=[];let _=[];const y=[],j=Promise.resolve();let g=!1;function F(){g||(g=!0,j.then(W))}function jt(){return F(),j}function U(t){_.push(t)}function At(t){y.push(t)}const b=new Set;let f=0;function W(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),G(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;y.length;)y.pop()();g=!1,b.clear(),p(t)}function G(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}function St(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{E as A,kt as B,jt as C,K as D,W as E,Q as F,V as G,U as H,St as I,h as J,p as K,P as L,d as M,F as N,et as O,it as P,J as Q,v as R,bt as S,ut as T,_t as U,gt as V,At as W,Nt as X,xt as Y,nt as Z,lt as _,ot as a,dt as b,ht as c,H as d,O as e,rt as f,mt as g,M as h,ct as i,pt as j,X as k,Y as l,ft as m,S as n,at as o,vt as p,tt as q,q as r,R as s,x as t,$ as u,Z as v,st as w,wt as x,Et as y,yt as z};
