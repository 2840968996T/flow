import{aQ as M,aR as O,aS as _,a9 as l,aT as P,aU as g,aV as y,aW as C,aX as I,aY as L}from"./index.7c3c7418.js";import{g as d}from"./get.71cc21ff.js";function D(n){return function(r){return r==null?void 0:r[n]}}var G=1,m=2;function w(n,r,e,t){var i=e.length,a=i,o=!t;if(n==null)return!a;for(n=Object(n);i--;){var f=e[i];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<a;){f=e[i];var u=f[0],s=n[u],A=f[1];if(o&&f[2]){if(s===void 0&&!(u in n))return!1}else{var R=new M;if(t)var E=t(s,A,u,n,r,R);if(!(E===void 0?O(A,s,G|m,t,R):E))return!1}}return!0}function h(n){return n===n&&!_(n)}function F(n){for(var r=l(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,h(i)]}return r}function p(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function S(n){var r=F(n);return r.length==1&&r[0][2]?p(r[0][0],r[0][1]):function(e){return e===n||w(e,n,r)}}var c=1,T=2;function U(n,r){return P(n)&&h(r)?p(g(n),r):function(e){var t=d(e,n);return t===void 0&&t===r?y(e,n):O(r,t,c|T)}}function x(n){return function(r){return C(r,n)}}function K(n){return P(n)?D(g(n)):x(n)}function b(n){return typeof n=="function"?n:n==null?I:typeof n=="object"?L(n)?U(n[0],n[1]):S(n):K(n)}export{b};
