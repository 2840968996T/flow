import{_ as e}from"./TableImg.2c9119a6.js";import"./BasicForm.19c32012.js";import"./index.3d608905.js";import{c as o,d as i,a,b as t,e as s}from"./data.9f247e25.js";import{P as r}from"./index.16a907f1.js";import{y as n,Z as d,B as m,F as c,a2 as p,v as j,a9 as f}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.e45ae65c.js";import"./index.e99064e4.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.bf73380f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.56c740a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c21e2e51.js";var x=n({components:{BasicTable:e,PageWrapper:r},setup:()=>({aoaToExcel:function(){a({data:t,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:i})});const b=f(" 导出 ");x.render=function(e,o,i,a,t,s){const r=d("a-button"),n=d("BasicTable"),f=d("PageWrapper");return m(),c(f,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:p((()=>[j(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:p((()=>[j(r,{onClick:e.aoaToExcel},{default:p((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default x;
