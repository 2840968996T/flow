import{_ as e}from"./PageWrapper.fad7568d.js";import{b as t}from"./useModal.8b30048f.js";import{k as o,ad as s,r as n,K as r,o as i,n as d,q as a,Q as l,V as c,Y as p}from"./vendor.9d9efc92.js";import m from"./index.10482f40.js";import u from"./index.08747d42.js";import"./index.10276049.js";import"./usePageContext.d3e060c8.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";import"./useWindowSizeFn.0534066c.js";import"./TableImg.8375efce.js";/* empty css              *//* empty css              */import"./BasicForm.d46fdf93.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";import"./useForm.02d3ecdf.js";import"./useSortable.477f53a7.js";import"./useExpose.0886c4eb.js";import"./useTable.035abbde.js";import"./personal.d97dde42.js";import"./OrgTree.13f0d616.js";import"./Tree.vue_vue&type=style&index=0&lang.3cec66ad.js";import"./useContextMenu.7703cf03.js";import"./dept.afc3dd7b.js";var f=o({name:"Menu2Demo",components:{Input:s,PageWrapper:e,PersonalSelector:m,OrgSelector:u},setup(){const[e,{openModal:o,setModalProps:s}]=t(),[r,{openModal:i,setModalProps:d}]=t();return n([]),{registerPersonalModal:e,registerOrgModal:r,handleSelectPersonal:function(e){o(!0,{selectorProps:{multiSelect:!0,selectedList:[]}}),s({title:`设置角色【${e.name}】下的人员`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSelectOrgMultiSelect:function(e){i(!0,{selectorProps:{multiSelect:!0,selectedList:[{id:"12ae3090e3e15810a9d7ebc0d291ad7e",name:"研发部"}]}}),d({title:"选择组织",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSelectOrg:function(e){i(!0,{selectorProps:{multiSelect:!1,selectedList:[{id:"12ae3090e3e15810a9d7ebc0d291ad7e",name:"研发部"}]}}),d({title:"选择组织",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSettingPersonalSuccess:function(e){},handleSettingOrgSuccess:function(e){},handleSelect:function(){}}}});const g={class:"p-4"},j=p(" 人员选择 "),S=p(" 组织选择-多选 "),h=p(" 组织选择-单选 ");f.render=function(e,t,o,s,n,p){const m=r("a-button"),u=r("PageWrapper"),f=r("PersonalSelector"),x=r("OrgSelector");return i(),d(c,null,[a(u,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:l((()=>[a("div",g,[a(m,{type:"primary",onClick:e.handleSelectPersonal},{default:l((()=>[j])),_:1},8,["onClick"]),a(m,{type:"primary",onClick:e.handleSelectOrgMultiSelect},{default:l((()=>[S])),_:1},8,["onClick"]),a(m,{type:"primary",onClick:e.handleSelectOrg},{default:l((()=>[h])),_:1},8,["onClick"])])])),_:1}),a(f,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingPersonalSuccess},null,8,["onRegister","onSuccess"]),a(x,{onRegister:e.registerOrgModal,onSuccess:e.handleSettingOrgSuccess},null,8,["onRegister","onSuccess"])],64)};export default f;
