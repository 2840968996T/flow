import{y as e,bE as o,bY as a,aO as r,Y as i,Z as s,B as n,F as t,a2 as d,v as l,ah as p,a9 as m}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import{b as c}from"./index.bf73380f.js";import f from"./Modal1.7d82bc10.js";import u from"./Modal2.390d27b6.js";import g from"./Modal3.67487ef6.js";import M from"./Modal4.2eb28f4c.js";import{P as j}from"./index.16a907f1.js";import"./index.e99064e4.js";import"./useWindowSizeFn.564cf32e.js";import"./BasicForm.19c32012.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";import"./useForm.e45ae65c.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.c21e2e51.js";var b=e({components:{Alert:o,Modal1:f,Modal2:u,Modal3:g,Modal4:M,PageWrapper:j,ASpace:a},setup(){const e=r(null),[o,{openModal:a}]=c(),[s,{openModal:n}]=c(),[t,{openModal:d}]=c(),[l,{openModal:p}]=c(),[m,{openModal:j}]=c();return{register1:o,openModal1:a,register2:s,openModal2:n,register3:t,openModal3:d,register4:l,openModal4:p,register:m,openTargetModal:function(o){switch(o){case 1:e.value=f;break;case 2:e.value=u;break;case 3:e.value=g;break;default:e.value=M}i((()=>{j(!0,{data:"content",info:"Info"})}))},send:function(){p(!0,{data:"content",info:"Info"})},currentModal:e,openModalLoading:function(){a(!0)}}}});const y=m(" 打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏) "),x=m(" 打开弹窗 "),k=m(" 打开弹窗 "),C=m(" 打开弹窗并传递数据 "),R=m(" 打开弹窗1 "),_=m(" 打开弹窗2 "),h=m(" 打开弹窗3 "),v=m(" 打开弹窗4 ");b.render=function(e,o,a,r,i,m){const c=s("Alert"),f=s("a-button"),u=s("a-space"),g=s("Modal1"),M=s("Modal2"),j=s("Modal3"),b=s("Modal4"),w=s("PageWrapper");return n(),t(w,{title:"modal组件使用示例"},{default:d((()=>[l(c,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\r\n    参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度","show-icon":""}),l(f,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:d((()=>[y])),_:1},8,["onClick"]),l(c,{message:"内外同时同时显示隐藏","show-icon":""}),l(f,{type:"primary",class:"my-4",onClick:e.openModal2},{default:d((()=>[x])),_:1},8,["onClick"]),l(c,{message:"自适应高度","show-icon":""}),l(f,{type:"primary",class:"my-4",onClick:e.openModal3},{default:d((()=>[k])),_:1},8,["onClick"]),l(c,{message:"内外数据交互","show-icon":""}),l(f,{type:"primary",class:"my-4",onClick:e.send},{default:d((()=>[C])),_:1},8,["onClick"]),l(c,{message:"使用动态组件的方式在页面内使用多个弹窗","show-icon":""}),l(u,null,{default:d((()=>[l(f,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=o=>e.openTargetModal(1))},{default:d((()=>[R])),_:1}),l(f,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=o=>e.openTargetModal(2))},{default:d((()=>[_])),_:1}),l(f,{type:"primary",class:"my-4",onClick:o[3]||(o[3]=o=>e.openTargetModal(3))},{default:d((()=>[h])),_:1}),l(f,{type:"primary",class:"my-4",onClick:o[4]||(o[4]=o=>e.openTargetModal(4))},{default:d((()=>[v])),_:1})])),_:1}),(n(),t(p(e.currentModal),{onRegister:e.register},null,8,["onRegister"])),l(g,{onRegister:e.register1,minHeight:100},null,8,["onRegister"]),l(M,{onRegister:e.register2},null,8,["onRegister"]),l(j,{onRegister:e.register3},null,8,["onRegister"]),l(b,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default b;
