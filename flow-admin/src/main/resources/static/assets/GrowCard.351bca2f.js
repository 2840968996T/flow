import{C as t}from"./index.c86e9754.js";import{j as e}from"./index.10276049.js";import{k as o,b2 as a,b3 as l,K as n,o as s,n as i,V as r,ah as c,Q as d,q as u,Y as p,s as m}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./createAsyncComponent.516e1800.js";const f=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var x=o({components:{CountTo:t,Tag:a,Card:l,Icon:e},setup:()=>({growCardList:f})});const v={class:"md:flex"},g={class:"py-4 px-4 flex justify-between"},j={class:"p-2 px-4 flex justify-between"};x.render=function(t,e,o,a,l,f){const x=n("Tag"),b=n("CountTo"),C=n("Icon"),w=n("Card");return s(),i("div",v,[(s(!0),i(r,null,c(t.growCardList,((e,o)=>(s(),i(w,{key:e.title,size:"small",loading:t.$attrs.loading,title:e.title,class:["md:w-1/4 w-full !md:mt-0 !mt-4",[o+1<4&&"!md:mr-4"]],canExpan:!1},{extra:d((()=>[u(x,{color:e.color},{default:d((()=>[p(m(e.action),1)])),_:2},1032,["color"])])),default:d((()=>[u("div",g,[u(b,{prefix:"$",startVal:1,endVal:e.value,class:"text-2xl"},null,8,["endVal"]),u(C,{icon:e.icon,size:40},null,8,["icon"])]),u("div",j,[u("span",null,"总"+m(e.title),1),u(b,{prefix:"$",startVal:1,endVal:e.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export default x;
