import{y as e,aL as t,r as a,X as r,Y as n,u as l,Z as s,au as i,G as o,B as c,F as d,v as u}from"./vendor.880b4c6c.js";import{_ as m}from"./Tree.vue_vue&type=style&index=0&lang.8179a1d2.js";import{g as v}from"./category.3c97680d.js";import{b9 as p}from"./index.e99064e4.js";import"./useContextMenu.91732dca.js";/* empty css              */var f=e({name:"FlowCategoryTree",components:{BasicTree:m,Spin:t},emits:["select"],setup(e,{emit:t}){const s=a([]),i=a(!1),o=a(null);function c(){return e=this,t=null,a=function*(){i.value=!0,v().then((e=>{s.value=e,n((()=>{var e;l(s).length<10&&(null==(e=l(o))||e.filterByLevel(1))}))})).finally((()=>{i.value=!1}))},new Promise(((r,n)=>{var l=e=>{try{i(a.next(e))}catch(t){n(t)}},s=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,s);i((a=a.apply(e,t)).next())}));var e,t,a}return r((()=>{c()})),{treeData:s,treeLoading:i,basicTreeRef:o,handleSelect:function(e,a){const r=p(s.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",r)}}}});const h={class:"bg-white m-4 mr-0 overflow-hidden"};f.render=function(e,t,a,r,n,l){const m=s("BasicTree"),v=i("loading");return o((c(),d("div",h,[u(m,{title:"流程分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])],512)),[[v,e.treeLoading]])};export default f;
