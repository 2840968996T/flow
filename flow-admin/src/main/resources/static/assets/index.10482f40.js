import{_ as e,a as t}from"./useModal.8b30048f.js";import{_ as o}from"./TableImg.8375efce.js";import{f as s}from"./BasicForm.d46fdf93.js";import{u as a}from"./useTable.035abbde.js";import{g as n}from"./personal.d97dde42.js";import{_ as r}from"./PageWrapper.fad7568d.js";import i from"./OrgTree.13f0d616.js";import{a1 as l,b2 as d,k as c,r as m,f as p,K as u,o as f,n as b,Q as g,q as x,V as h,ah as j,Y as w,s as S,N as v}from"./vendor.9d9efc92.js";/* empty css              */import"./index.10276049.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./useForm.02d3ecdf.js";/* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.477f53a7.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";/* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";import"./usePageContext.d3e060c8.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.3cec66ad.js";import"./useContextMenu.7703cf03.js";import"./dept.afc3dd7b.js";const y=[{title:"姓名",dataIndex:"name",width:80,align:"left"},{title:"工号",dataIndex:"code",width:80,align:"left"},{title:"性别",dataIndex:"sex",width:50,customRender:({record:e})=>{const t=1==~~e.sex,o=t?"男":"女";return l(d,{color:t?"green":"red"},(()=>o))}},{title:"公司",dataIndex:"companyName",width:120,align:"left"},{title:"部门",dataIndex:"deptName",width:120,align:"left"}],C=[{field:"keyword",label:"关键字",component:"Input",labelWidth:60,colProps:{span:12,lg:{span:12,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}},componentProps:{}}];var T=c({props:{title:{type:String,default:"人员选择"}},name:"PersonalSelector",components:{BasicModal:e,BasicTable:o,PageWrapper:r,OrgTree:i,TableAction:s,Tag:d},setup(e,{emit:o}){const s=m([]),r=m(!1),[i,{setModalProps:l,closeModal:d}]=t((e=>{return t=this,o=null,a=function*(){const{selectorProps:t}=e;s.value=t.selectedList,r.value=t.multiSelect,g(s.value.map((e=>e.code))),f({rowSelection:{type:t.multiSelect?"checkbox":"radio",columnWidth:30}}),l({wrapClassName:"selector-content"}),u()},new Promise(((e,s)=>{var n=e=>{try{i(a.next(e))}catch(t){s(t)}},r=e=>{try{i(a.throw(e))}catch(t){s(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,r);i((a=a.apply(t,o)).next())}));var t,o,a}));C.forEach((e=>{e&&(e.componentProps.onkeypress=e=>{13===e.keyCode&&u()})}));const[c,{reload:u,setProps:f,getSelectRows:b,setSelectedRowKeys:g}]=a({title:"",api:n,columns:y,immediate:!1,rowSelection:{type:"checkbox",columnWidth:30},formConfig:{labelWidth:60,schemas:C,showResetButton:!1,showAdvancedButton:!1,autoSubmitOnEnter:!0},clickToRowSelect:!0,rowKey:"code",size:"small",canResize:!1,useSearchForm:!0,showTableSetting:!1,showIndexColumn:!1,bordered:!0,scroll:{y:280}});function x({rows:e}){s.value=e.map((e=>({id:e.id,code:e.code,name:e.name})))}return{registerTable:c,registerModal:i,getTitle:p((()=>"选择人员")),selectedList:s,removeSelectedItem:function(e){s.value.splice(s.value.findIndex((t=>t.code===e)),1),g(s.value.map((e=>e.code)))},rowClick:function(){x({rows:b()})},selectionChanged:x,handleSubmit:function(){const e=b();o("success",e),d()},handleSuccess:function(){u()},handleSelect:function(e){let t={};e&&"1"===e.sourceType?t={companyId:e.id}:e&&"2"===e.sourceType&&(t={deptId:e.id}),u({searchInfo:t})}}}});const I={class:"selected-items"};T.render=function(e,t,o,s,a,n){const r=u("Tag"),i=u("OrgTree"),l=u("BasicTable"),d=u("PageWrapper"),c=u("BasicModal");return f(),b(c,v({wrapClassName:"selector-body"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:g((()=>[x("div",I,[(f(!0),b(h,null,j(e.selectedList,(t=>(f(),b(r,{color:"processing",closable:"",onClose:o=>e.removeSelectedItem(t.code)},{default:g((()=>[w(S(t.name),1)])),_:2},1032,["onClose"])))),256))]),x(d,{dense:"",contentClass:"flex"},{default:g((()=>[x(i,{class:"w-1/4 xl:w-3/10",onSelect:e.handleSelect},null,8,["onSelect"]),x(l,{onRegister:e.registerTable,onSelectionChange:e.selectionChanged,onRowClick:e.rowClick,class:"w-3/4 xl:w-7/10"},null,8,["onRegister","onSelectionChange","onRowClick"])])),_:1})])),_:1},16,["onRegister","title","onOk"])};export default T;
