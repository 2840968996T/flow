import{_ as e}from"./TableImg.2c9119a6.js";import{g as o}from"./BasicForm.19c32012.js";import{u as i}from"./useTable.d6fddac6.js";import{b as t}from"./index.bf73380f.js";import{_ as n,c as a,s as r}from"./JobGradeTypeModal.29f72c04.js";import{a as s,d}from"./jobGradeType.93a5858e.js";import{y as c,Z as l,B as m,F as p,v as f,a2 as b,a9 as u}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.e45ae65c.js";import"./index.e99064e4.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.56c740a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";var j=c({name:"JobGradeType",components:{BasicTable:e,TableAction:o,JobGradeTypeModal:n},setup(){const[e,{openModal:o}]=t(),[n,{reload:c}]=i({title:"列表",api:s,columns:a,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d(e.id).then((()=>{c()}))},handleSuccess:function(){c()}}}});const x=u(" 新增 ");j.render=function(e,o,i,t,n,a){const r=l("a-button"),s=l("TableAction"),d=l("BasicTable"),c=l("JobGradeTypeModal");return m(),p("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(s,{actions:[{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
