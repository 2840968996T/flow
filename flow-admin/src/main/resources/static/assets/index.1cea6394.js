import{_ as e}from"./TableImg.8375efce.js";import{f as o}from"./BasicForm.d46fdf93.js";import{u as i}from"./useTable.035abbde.js";import{d as t}from"./system.92083dee.js";import{u as n}from"./useDrawer.fa2d3808.js";import{_ as r,c as s,s as a}from"./MenuDrawer.6dcf0579.js";import{k as d,K as c,o as m,n as l,q as p,Q as u,Y as f}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.02d3ecdf.js";import"./index.10276049.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.8b30048f.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.477f53a7.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";/* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";/* empty css              */var b=d({name:"MenuManagement",components:{BasicTable:e,MenuDrawer:r,TableAction:o},setup(){const[e,{openDrawer:o}]=n(),[r,{reload:d}]=i({title:"菜单列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:a},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=f(" 新增菜单 ");b.render=function(e,o,i,t,n,r){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),f=c("MenuDrawer");return m(),l("div",null,[p(d,{onRegister:e.registerTable},{toolbar:u((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:u((()=>[j])),_:1},8,["onClick"])])),action:u((({record:o})=>[p(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;
