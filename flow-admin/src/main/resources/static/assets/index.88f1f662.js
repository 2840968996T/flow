import{_ as e}from"./TableImg.8375efce.js";import{f as o}from"./BasicForm.d46fdf93.js";import{u as t}from"./useTable.035abbde.js";import{a as n,d as i}from"./group.51c53844.js";import{c as s,s as r}from"./group.data.b3444ccf.js";import a from"./GroupModal.84db9fa4.js";import c from"./SetAccountModal.81d33864.js";import d from"./SetAclModal.5383f59c.js";import{b as l}from"./useModal.8b30048f.js";import{_ as u}from"./Authority.vue_vue&type=script&lang.124668b3.js";import{P as m}from"./perEnum.9a5ef72f.js";import{k as p,K as f,o as b,n as h,q as j,Q as S,Y as g}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.02d3ecdf.js";import"./index.10276049.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.477f53a7.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";/* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";import"./account.725d3a85.js";import"./AclCheckboxGroup.663fbd5c.js";var A=p({name:"Group",components:{BasicTable:e,TableAction:o,GroupModal:a,SetAccountModal:c,SetAclModal:d,Authority:u},setup(){const[e,{openModal:o}]=l(),[a,{openModal:c}]=l(),[d,{openModal:u,setModalProps:p}]=l(),[f,{reload:b}]=t({title:"列表",api:n,columns:s,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,rowSelection:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:m,registerTable:f,registerModal:e,registerSetAccountModal:a,registerSetAclModal:d,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleAcl:function(e){u(!0,{record:e,isUpdate:!0}),p({bodyStyle:{padding:"0px",margin:"0px"},width:800,height:400,showOkBtn:!1,cancelText:"关闭"})},handleAddUser:function(e){c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i([e.id]).then((e=>{b()}))},handleSuccess:function(){b()},handleSetAccountSuccess:function(){b()},handleSetAclSuccess:function(){b()}}}});const M=g(" 新增");A.render=function(e,o,t,n,i,s){const r=f("a-button"),a=f("Authority"),c=f("TableAction"),d=f("BasicTable"),l=f("GroupModal"),u=f("SetAccountModal"),m=f("SetAclModal");return b(),h("div",null,[j(d,{onRegister:e.registerTable},{toolbar:S((()=>[j(a,{value:this.$options.name+":"+e.PerEnum.ADD},{default:S((()=>[j(r,{type:"primary",onClick:e.handleCreate},{default:S((()=>[M])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:S((({record:o})=>[j(c,{actions:[{auth:this.$options.name+":"+e.PerEnum.AUTH,title:"分配权限",icon:"ant-design:safety",onClick:e.handleAcl.bind(null,o)},{auth:this.$options.name+":"+e.PerEnum.AUTH,title:"分配用户",icon:"ant-design:user-add",onClick:e.handleAddUser.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),j(u,{onRegister:e.registerSetAccountModal,onSuccess:e.handleSetAccountSuccess},null,8,["onRegister","onSuccess"]),j(m,{onRegister:e.registerSetAclModal,onSuccess:e.handleSetAclSuccess},null,8,["onRegister","onSuccess"])])};export default A;
