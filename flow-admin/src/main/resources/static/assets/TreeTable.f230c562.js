import{_ as e}from"./TableImg.28dd5cba.js";import"./BasicForm.4961b69c.js";import{u as o}from"./useTable.f161cb20.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,K as r,o as a,n,q as p,Q as d,Y as l}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";import"./index.f36f9bca.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.c70d8b8c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";var c=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:r}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:r}}});const m={class:"p-4"},b=l("展开全部"),j=l("折叠全部");c.render=function(e,o,t,s,i,l){const c=r("a-button"),f=r("BasicTable");return a(),n("div",m,[p(f,{onRegister:e.register},{toolbar:d((()=>[p(c,{type:"primary",onClick:e.expandAll},{default:d((()=>[b])),_:1},8,["onClick"]),p(c,{type:"primary",onClick:e.collapseAll},{default:d((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default c;
