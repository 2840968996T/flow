import{y as e,aL as t,r as a,X as r,Y as n,u as s,Z as i,au as l,G as o,B as c,F as d,v as u}from"./vendor.880b4c6c.js";import{_ as m}from"./Tree.vue_vue&type=style&index=0&lang.8179a1d2.js";import{a as p}from"./dept.56a002d4.js";import{b9 as v}from"./index.e99064e4.js";import"./useContextMenu.91732dca.js";/* empty css              */var f=e({name:"OrgTree",components:{BasicTree:m,Spin:t},emits:["select"],setup(e,{emit:t}){const i=a([]),l=a(!1),o=a(null);function c(){return e=this,t=null,a=function*(){l.value=!0,p().then((e=>{i.value=e,n((()=>{var e;s(i).length<10&&(null==(e=s(o))||e.filterByLevel(1))}))})).finally((()=>{l.value=!1}))},new Promise(((r,n)=>{var s=e=>{try{l(a.next(e))}catch(t){n(t)}},i=e=>{try{l(a.throw(e))}catch(t){n(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,i);l((a=a.apply(e,t)).next())}));var e,t,a}return r((()=>{c()})),{treeData:i,treeLoading:l,basicTreeRef:o,handleSelect:function(e,a){const r=v(i.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",r)}}}});const h={class:"org-tree bg-white m-4 mr-0 overflow-hidden"};f.render=function(e,t,a,r,n,s){const m=i("BasicTree"),p=l("loading");return o((c(),d("div",h,[u(m,{title:"组织",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"shortName"},onSelect:e.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])],512)),[[p,e.treeLoading]])};export default f;
