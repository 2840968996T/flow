import{m as S,r as Ue,eK as Ce,eL as Me,S as p,a as pe,v as D,Y as Be,bp as qe,R as P,_ as N,am as He,bb as Ie,a3 as ze,e as ue,ad as je,K as Y,Q as Ve,bc as le,as as Le,U as Ge,V as Ke,cO as We,bn as Xe,bm as Ye,T as ve}from"./index.7c3c7418.js";var Qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},Je=Qe;function xe(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),l.forEach(function(o){Ze(a,o,t[o])})}return a}function Ze(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var be=function(e,t){var l=xe({},e,t.attrs);return S(Ue,xe({},l,{icon:Je}),null)};be.displayName="UpOutlined";be.inheritAttrs=!1;var et=be;function me(){return typeof BigInt=="function"}function Q(a){var e=a.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var l=e||"0",o=l.split("."),c=o[0]||"0",g=o[1]||"0";c==="0"&&g==="0"&&(t=!1);var v=t?"-":"";return{negative:t,negativeStr:v,trimStr:l,integerStr:c,decimalStr:g,fullStr:"".concat(v).concat(l)}}function he(a){var e=String(a);return!Number.isNaN(Number(e))&&e.includes("e")}function J(a){var e=String(a);if(he(a)){var t=Number(e.slice(e.indexOf("e-")+2)),l=e.match(/\.(\d+)/);return l!=null&&l[1]&&(t+=l[1].length),t}return e.includes(".")&&ye(e)?e.length-e.indexOf(".")-1:0}function Se(a){var e=String(a);if(he(a)){if(a>Number.MAX_SAFE_INTEGER)return String(me()?BigInt(a).toString():Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return String(me()?BigInt(a).toString():Number.MIN_SAFE_INTEGER);e=a.toFixed(J(e))}return Q(e).fullStr}function ye(a){return typeof a=="number"?!Number.isNaN(a):a?/^\s*-?\d+(\.\d+)?\s*$/.test(a)||/^\s*-?\d+\.\s*$/.test(a)||/^\s*-?\.\d+\s*$/.test(a):!1}function Ae(a){return!a&&a!==0&&!Number.isNaN(a)||!String(a).trim()}var tt=function(){function a(e){if(Me(this,a),p(this,"origin",""),Ae(e)){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Ce(a,[{key:"negate",value:function(){return new a(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new a(t);var l=Number(t);if(Number.isNaN(l))return this;var o=this.number+l;if(o>Number.MAX_SAFE_INTEGER)return new a(Number.MAX_SAFE_INTEGER);if(o<Number.MIN_SAFE_INTEGER)return new a(Number.MIN_SAFE_INTEGER);var c=Math.max(J(this.number),J(l));return new a(o.toFixed(c))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Se(this.number):this.origin}}]),a}(),nt=function(){function a(e){if(Me(this,a),p(this,"origin",""),Ae(e)){this.empty=!0;return}if(this.origin=String(e),e==="-"||Number.isNaN(e)){this.nan=!0;return}var t=e;if(he(t)&&(t=Number(t)),t=typeof t=="string"?t:Se(t),ye(t)){var l=Q(t);this.negative=l.negative;var o=l.trimStr.split(".");this.integer=BigInt(o[0]);var c=o[1]||"0";this.decimal=BigInt(c),this.decimalLen=c.length}else this.nan=!0}return Ce(a,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var l="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(l)}},{key:"negate",value:function(){var t=new a(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new a(t);var l=new a(t);if(l.isInvalidate())return this;var o=Math.max(this.getDecimalStr().length,l.getDecimalStr().length),c=this.alignDecimal(o),g=l.alignDecimal(o),v=(c+g).toString(),d=Q(v),f=d.negativeStr,m=d.trimStr,i="".concat(f).concat(m.padStart(o+1,"0"));return new a("".concat(i.slice(0,-o),".").concat(i.slice(-o)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Q("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),a}();function F(a){return me()?new nt(a):new tt(a)}function ge(a,e,t){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(a==="")return"";var o=Q(a),c=o.negativeStr,g=o.integerStr,v=o.decimalStr,d="".concat(e).concat(v),f="".concat(c).concat(g);if(t>=0){var m=Number(v[t]);if(m>=5&&!l){var i=F(a).add("".concat(c,"0.").concat("0".repeat(t)).concat(10-m));return ge(i.toString(),e,t,l)}return t===0?f:"".concat(f).concat(e).concat(v.padEnd(t,"0").slice(0,t))}return d===".0"?f:"".concat(f).concat(d)}var at=200,rt=600,it=pe({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var l=t.slots,o=t.emit,c=D(),g=function(f,m){f.preventDefault(),o("step",m);function i(){o("step",m),c.value=setTimeout(i,at)}c.value=setTimeout(i,rt)},v=function(){clearTimeout(c.value)};return Be(function(){v()}),function(){if(qe())return null;var d=e.prefixCls,f=e.upDisabled,m=e.downDisabled,i="".concat(d,"-handler"),V=P(i,"".concat(i,"-up"),p({},"".concat(i,"-up-disabled"),f)),A=P(i,"".concat(i,"-down"),p({},"".concat(i,"-down-disabled"),m)),C={unselectable:"on",role:"button",onMouseup:v,onMouseleave:v},x=l.upNode,$=l.downNode;return S("div",{class:"".concat(i,"-wrap")},[S("span",N(N({},C),{},{onMousedown:function(M){g(M,!0)},"aria-label":"Increase Value","aria-disabled":f,class:V}),[(x==null?void 0:x())||S("span",{unselectable:"on",class:"".concat(d,"-handler-up-inner")},null)]),S("span",N(N({},C),{},{onMousedown:function(M){g(M,!1)},"aria-label":"Decrease Value","aria-disabled":m,class:A}),[($==null?void 0:$())||S("span",{unselectable:"on",class:"".concat(d,"-handler-down-inner")},null)])])}}});function ut(a,e){var t=D(null);function l(){try{var c=a.value,g=c.selectionStart,v=c.selectionEnd,d=c.value,f=d.substring(0,g),m=d.substring(v);t.value={start:g,end:v,value:d,beforeTxt:f,afterTxt:m}}catch(i){}}function o(){if(a.value&&t.value&&e.value)try{var c=a.value.value,g=t.value,v=g.beforeTxt,d=g.afterTxt,f=g.start,m=c.length;if(c.endsWith(d))m=c.length-t.value.afterTxt.length;else if(c.startsWith(v))m=v.length;else{var i=v[f-1],V=c.indexOf(i,f-1);V!==-1&&(m=V+1)}a.value.setSelectionRange(m,m)}catch(A){He(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(A.message))}}return[l,o]}var lt=function(){var a=D(0),e=function(){Ie.cancel(a.value)};return Be(function(){e()}),function(t){e(),a.value=Ie(function(){t()})}},ot=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],Ee=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},we=function(e){var t=F(e);return t.isInvalidate()?null:t},Fe=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}},st=pe({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:N(N({},Fe()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var l=t.attrs,o=t.slots,c=t.emit,g=t.expose,v=D(),d=D(!1),f=D(!1),m=D(!1),i=D(F(e.value));function V(u){e.value===void 0&&(i.value=u)}var A=function(n,s){if(!s)return e.precision>=0?e.precision:Math.max(J(n),J(e.step))},C=function(n){var s=String(n);if(e.parser)return e.parser(s);var r=s;return e.decimalSeparator&&(r=r.replace(e.decimalSeparator,".")),r.replace(/[^\w.-]+/g,"")},x=D(""),$=function(n,s){if(e.formatter)return e.formatter(n,{userTyping:s,input:String(x.value)});var r=typeof n=="number"?Se(n):n;if(!s){var I=A(r,s);if(ye(r)&&(e.decimalSeparator||I>=0)){var y=e.decimalSeparator||".";r=ge(r,y,I)}}return r},j=function(){var u=e.value;return i.value.isInvalidate()&&["string","number"].includes(ze(u))?Number.isNaN(u)?"":u:$(i.value.toString(),!1)}();x.value=j;function M(u,n){x.value=$(u.isInvalidate()?u.toString(!1):u.toString(!n),n)}var O=ue(function(){return we(e.max)}),E=ue(function(){return we(e.min)}),h=ue(function(){return!O.value||!i.value||i.value.isInvalidate()?!1:O.value.lessEquals(i.value)}),R=ue(function(){return!E.value||!i.value||i.value.isInvalidate()?!1:i.value.lessEquals(E.value)}),_=ut(v,d),w=je(_,2),T=w[0],Z=w[1],U=function(n){return O.value&&!n.lessEquals(O.value)?O.value:E.value&&!E.value.lessEquals(n)?E.value:null},q=function(n){return!U(n)},H=function(n,s){var r=n,I=q(r)||r.isEmpty();if(!r.isEmpty()&&!s&&(r=U(r)||r,I=!0),!e.readonly&&!e.disabled&&I){var y=r.toString(),B=A(y,s);if(B>=0&&(r=F(ge(y,".",B))),!r.equals(i.value)){var k;V(r),(k=e.onChange)===null||k===void 0||k.call(e,r.isEmpty()?null:Ee(e.stringMode,r)),e.value===void 0&&M(r,s)}return r}return i.value},L=lt(),G=function u(n){var s;if(T(),x.value=n,!m.value){var r=C(n),I=F(r);I.isNaN()||H(I,!0)}(s=e.onInput)===null||s===void 0||s.call(e,n),L(function(){var y=n;e.parser||(y=n.replace(/。/g,".")),y!==n&&u(y)})},K=function(){m.value=!0},ee=function(){m.value=!1,G(v.value.value)},W=function(n){G(n.target.value)},X=function(n){var s,r;if(!(n&&h.value||!n&&R.value)){f.value=!1;var I=F(e.step);n||(I=I.negate());var y=(i.value||F(0)).add(I.toString()),B=H(y,!1);(s=e.onStep)===null||s===void 0||s.call(e,Ee(e.stringMode,B),{offset:e.step,type:n?"up":"down"}),(r=v.value)===null||r===void 0||r.focus()}},te=function(n){var s=F(C(x.value)),r=s;s.isNaN()?r=i.value:r=H(s,n),e.value!==void 0?M(i.value,!1):r.isNaN()||M(r,!1)},oe=function(n){var s=n.which;if(f.value=!0,s===le.ENTER){var r;m.value||(f.value=!1),te(!1),(r=e.onPressEnter)===null||r===void 0||r.call(e,n)}e.keyboard!==!1&&!m.value&&[le.UP,le.DOWN].includes(s)&&(X(le.UP===s),n.preventDefault())},b=function(){f.value=!1},z=function(n){te(!1),d.value=!1,f.value=!1,c("blur",n)};return Y(function(){return e.precision},function(){i.value.isInvalidate()||M(i.value,!1)},{flush:"post"}),Y(function(){return e.value},function(){var u=F(e.value);i.value=u;var n=F(C(x.value));(!u.equals(n)||!f.value||e.formatter)&&M(u,f.value)},{flush:"post"}),Y(x,function(){e.formatter&&Z()},{flush:"post"}),Y(function(){return e.disabled},function(u){u&&(d.value=!1)}),g({focus:function(){var n;(n=v.value)===null||n===void 0||n.focus()},blur:function(){var n;(n=v.value)===null||n===void 0||n.blur()}}),function(){var u,n=N(N({},l),e),s=n.prefixCls,r=s===void 0?"rc-input-number":s,I=n.min,y=n.max,B=n.step,k=B===void 0?1:B;n.defaultValue,n.value;var ne=n.disabled,ae=n.readonly;n.keyboard;var re=n.controls,se=re===void 0?!0:re,ie=n.autofocus;n.stringMode,n.parser,n.formatter,n.precision,n.decimalSeparator,n.onChange,n.onInput,n.onPressEnter,n.onStep;var _e=n.lazy,$e=n.class,ke=n.style,Oe=Ve(n,ot),Pe=o.upHandler,Re=o.downHandler,Ne="".concat(r,"-input"),ce={};return _e?ce.onChange=W:ce.onInput=W,S("div",{class:P(r,$e,(u={},p(u,"".concat(r,"-focused"),d.value),p(u,"".concat(r,"-disabled"),ne),p(u,"".concat(r,"-readonly"),ae),p(u,"".concat(r,"-not-a-number"),i.value.isNaN()),p(u,"".concat(r,"-out-of-range"),!i.value.isInvalidate()&&!q(i.value)),u)),style:ke,onKeydown:oe,onKeyup:b},[se&&S(it,{prefixCls:r,upDisabled:h.value,downDisabled:R.value,onStep:X},{upNode:Pe,downNode:Re}),S("div",{class:"".concat(Ne,"-wrap")},[S("input",N(N(N({autofocus:ie,autocomplete:"off",role:"spinbutton","aria-valuemin":I,"aria-valuemax":y,"aria-valuenow":i.value.isInvalidate()?null:i.value.toString(),step:k},Oe),{},{ref:v,class:Ne,value:x.value,disabled:ne,readonly:ae,onFocus:function(Te){d.value=!0,c("focus",Te)}},ce),{},{onBlur:z,onCompositionstart:K,onCompositionend:ee}),null)])])}}});function de(a){return a!=null}var ct=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],De=Fe(),vt=function(){return N(N({},De),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:ve.any,addonAfter:ve.any,prefix:ve.any,"onUpdate:value":De.onChange,valueModifiers:Object})},fe=pe({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:vt(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var l=t.emit,o=t.expose,c=t.attrs,g=t.slots,v=Ge(),d=Ke("input-number",e),f=d.prefixCls,m=d.size,i=d.direction,V=D(e.value===void 0?e.defaultValue:e.value),A=D(!1);Y(function(){return e.value},function(){V.value=e.value});var C=D(null),x=function(){var h;(h=C.value)===null||h===void 0||h.focus()},$=function(){var h;(h=C.value)===null||h===void 0||h.blur()};o({focus:x,blur:$});var j=function(h){e.value===void 0&&(V.value=h),l("update:value",h),l("change",h),v.onFieldChange()},M=function(h){A.value=!1,l("blur",h),v.onFieldBlur()},O=function(h){A.value=!0,l("focus",h)};return function(){var E,h,R,_,w=N(N({},c),e),T=w.class,Z=w.bordered,U=w.readonly,q=w.style,H=w.addonBefore,L=H===void 0?(E=g.addonBefore)===null||E===void 0?void 0:E.call(g):H,G=w.addonAfter,K=G===void 0?(h=g.addonAfter)===null||h===void 0?void 0:h.call(g):G,ee=w.prefix,W=ee===void 0?(R=g.prefix)===null||R===void 0?void 0:R.call(g):ee,X=w.valueModifiers,te=X===void 0?{}:X,oe=Ve(w,ct),b=f.value,z=m.value,u=P((_={},p(_,"".concat(b,"-lg"),z==="large"),p(_,"".concat(b,"-sm"),z==="small"),p(_,"".concat(b,"-rtl"),i.value==="rtl"),p(_,"".concat(b,"-readonly"),U),p(_,"".concat(b,"-borderless"),!Z),_),T),n=S(st,N(N({},Xe(oe,["size","defaultValue"])),{},{ref:C,lazy:!!te.lazy,value:V.value,class:u,prefixCls:b,readonly:U,onChange:j,onBlur:M,onFocus:O}),{upHandler:function(){return S(et,{class:"".concat(b,"-handler-up-inner")},null)},downHandler:function(){return S(We,{class:"".concat(b,"-handler-down-inner")},null)}}),s=de(L)||de(K);if(de(W)){var r,I=P("".concat(b,"-affix-wrapper"),(r={},p(r,"".concat(b,"-affix-wrapper-focused"),A.value),p(r,"".concat(b,"-affix-wrapper-disabled"),e.disabled),p(r,"".concat(b,"-affix-wrapper-rtl"),i.value==="rtl"),p(r,"".concat(b,"-affix-wrapper-readonly"),U),p(r,"".concat(b,"-affix-wrapper-borderless"),!Z),p(r,"".concat(T),!s&&T),r));n=S("div",{class:I,style:q,onMouseup:function(){return C.value.focus()}},[S("span",{class:"".concat(b,"-prefix")},[W]),n])}if(s){var y,B="".concat(b,"-group"),k="".concat(B,"-addon"),ne=L?S("div",{class:k},[L]):null,ae=K?S("div",{class:k},[K]):null,re=P("".concat(b,"-wrapper"),B,p({},"".concat(B,"-rtl"),i.value==="rtl")),se=P("".concat(b,"-group-wrapper"),(y={},p(y,"".concat(b,"-group-wrapper-sm"),z==="small"),p(y,"".concat(b,"-group-wrapper-lg"),z==="large"),p(y,"".concat(b,"-group-wrapper-rtl"),i.value==="rtl"),y),T);n=S("div",{class:se,style:q},[S("div",{class:re},[ne,n,ae])])}return Ye(n,{style:q})}}}),mt=Le(fe,{install:function(e){return e.component(fe.name,fe),e}});export{mt as I};
