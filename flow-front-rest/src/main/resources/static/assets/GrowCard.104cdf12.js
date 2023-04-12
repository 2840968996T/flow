var k=Object.defineProperty;var C=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var b=(t,a,e)=>a in t?k(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,w=(t,a)=>{for(var e in a||(a={}))L.call(a,e)&&b(t,e,a[e]);if(C)for(var e of C(a))D.call(a,e)&&b(t,e,a[e]);return t};import{a as E,v as T,aZ as B,e as j,h as A,X as G,K as J,J as K,a_ as M,a$ as P,L as N,o as d,f as V,t as $,b0 as X,N as Z,b1 as q,aF as u,F as H,aI as O,i as Q,z as x,m as c,B as R,l as y,p as U}from"./index.920900a8.js";import{T as W}from"./index.0451feda.js";import{C as Y}from"./index.7d514037.js";import"./index.3323ca74.js";import"./index.d02f570d.js";import"./index.404e3930.js";import"./index.088b2d5a.js";import"./useRefs.26d797c9.js";import"./useFlexGapSupport.e39df451.js";const tt={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},et=E({name:"CountTo",props:tt,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=T(t.startVal),f=T(!1);let s=B(e);const p=j(()=>m(A(s)));G(()=>{e.value=t.startVal}),J([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&n()}),K(()=>{t.autoplay&&n()});function n(){r(),e.value=t.endVal}function l(){e.value=t.startVal,r()}function r(){s=B(e,w({disabled:f,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:M[t.transition]}:{}))}function m(o){if(!o&&o!==0)return"";const{decimals:_,decimal:S,separator:g,suffix:F,prefix:z}=t;o=Number(o).toFixed(_),o+="";const v=o.split(".");let i=v[0];const I=v.length>1?S+v[1]:"",h=/(\d+)(\d{3})/;if(g&&!P(g))for(;h.test(i);)i=i.replace(h,"$1"+g+"$2");return z+i+I+F}return{value:p,start:n,reset:l}}});function at(t,a,e,f,s,p){return d(),V("span",{style:X({color:t.color})},$(t.value),5)}var ot=N(et,[["render",at]]);const nt=Z(ot),st=[{title:"\u8BBF\u95EE\u6570",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"\u6708"},{title:"\u6210\u4EA4\u989D",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"\u6708"},{title:"\u4E0B\u8F7D\u6570",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"\u5468"},{title:"\u6210\u4EA4\u6570",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"\u5E74"}],lt=E({components:{CountTo:nt,Tag:W,Card:Y,Icon:q},setup(){return{growCardList:st}}}),rt={class:"md:flex"},it={class:"py-4 px-4 flex justify-between"},ut={class:"p-2 px-4 flex justify-between"};function ct(t,a,e,f,s,p){const n=u("Tag"),l=u("CountTo"),r=u("Icon"),m=u("Card");return d(),V("div",rt,[(d(!0),V(H,null,O(t.growCardList,(o,_)=>(d(),Q(m,{key:o.title,size:"small",loading:t.$attrs.loading,title:o.title,class:U(["md:w-1/4 w-full md:!mt-0 !mt-4",[_+1<4&&"md:!mr-4"]]),canExpan:!1},{extra:x(()=>[c(n,{color:o.color},{default:x(()=>[R($(o.action),1)]),_:2},1032,["color"])]),default:x(()=>[y("div",it,[c(l,{prefix:"$",startVal:1,endVal:o.value,class:"text-2xl"},null,8,["endVal"]),c(r,{icon:o.icon,size:40},null,8,["icon"])]),y("div",ut,[y("span",null,"\u603B"+$(o.title),1),c(l,{prefix:"$",startVal:1,endVal:o.total},null,8,["endVal"])])]),_:2},1032,["loading","title","class"]))),128))])}var $t=N(lt,[["render",ct]]);export{$t as default};
