import{_ as e}from"./TableImg.28dd5cba.js";import{f as o}from"./BasicForm.4961b69c.js";import{u as t}from"./useTable.f161cb20.js";import{a as i,d as n}from"./positionInfo.67a2e7c7.js";import{_ as s}from"./PageWrapper.5df89cd8.js";import a from"./PositionSeqTree.b3d02e63.js";import{b as r}from"./useModal.c70d8b8c.js";import{_ as d,c,s as l}from"./PositionInfoModal.1d454017.js";import{k as m,aw as p,r as f,u,K as b,o as j,n as x,Q as g,q as h,Y as S}from"./vendor.9d9efc92.js";import{g as C}from"./index.f36f9bca.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.93b9c797.js";import"./useContextMenu.e6e614fe.js";import"./positionSeq.6ece47de.js";const{createMessage:w}=C();var P=m({name:"PositionInfo",components:{BasicTable:e,PageWrapper:s,PositionSeqTree:a,PositionInfoModal:d,TableAction:o,Popconfirm:p},setup(){const[e,{openModal:o,setModalProps:s}]=r(),a=f({}),[d,{reload:m}]=t({title:"列表",api:i,columns:c,formConfig:{labelWidth:120,schemas:l,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function p(e){a.value=e;let o={positionSeqId:e?e.id:""};m({searchInfo:o})}return{registerTable:d,registerModal:e,handleCreate:function(){u(a).id?(s({title:"新增岗位"}),o(!0,{record:{positionSeqId:u(a).id,positionSeqCode:u(a).code},isUpdate:!0})):w.warning("请选择岗位序列！",2)},handleEdit:function(e){s({title:"修改岗位"}),o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n(e.id).then((()=>{m()}))},handleSuccess:function(){p(a.value)},handleSelect:p}}});const I=S("新增");P.render=function(e,o,t,i,n,s){const a=b("PositionSeqTree"),r=b("a-button"),d=b("TableAction"),c=b("BasicTable"),l=b("PositionInfoModal"),m=b("PageWrapper");return j(),x(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:g((()=>[h(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),h(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:g((()=>[h(r,{type:"primary",onClick:e.handleCreate},{default:g((()=>[I])),_:1},8,["onClick"])])),action:g((({record:o})=>[h(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default P;
