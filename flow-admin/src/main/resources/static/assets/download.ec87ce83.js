import{o as t}from"./index.10276049.js";function e(t,e,o,a){(function(t,e){return new Promise(((n,o)=>{let a=document.createElement("CANVAS");const i=a.getContext("2d"),r=new Image;r.crossOrigin="",r.onload=function(){if(!a||!i)return o();a.height=r.height,a.width=r.width,i.drawImage(r,0,0);const t=a.toDataURL(e||"image/png");a=null,n(t)},r.src=t}))})(t).then((t=>{n(t,e,o,a)}))}function n(t,e,n,a){o(function(t){const e=t.split(","),n=e[0].match(/:(.*?);/)[1],o=atob(e[1]);let a=o.length;const i=new Uint8Array(a);for(;a--;)i[a]=o.charCodeAt(a);return new Blob([i],{type:n})}(t),e,n,a)}function o(t,e,n,o){const a=new Blob(void 0!==o?[o,t]:[t],{type:n||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,e);else{const t=window.URL.createObjectURL(a),n=document.createElement("a");n.style.display="none",n.href=t,n.setAttribute("download",e),void 0===n.download&&n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(t)}}function a({url:e,target:n="_blank",fileName:o}){const a=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,i=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return!1;if(a||i){const t=document.createElement("a");if(t.href=e,t.target=n,void 0!==t.download&&(t.download=o||e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){const e=document.createEvent("MouseEvents");return e.initEvent("click",!0,!0),t.dispatchEvent(e),!0}}return-1===e.indexOf("?")&&(e+="?download"),t(e,{target:n}),!0}export{o as a,n as b,e as c,a as d};
