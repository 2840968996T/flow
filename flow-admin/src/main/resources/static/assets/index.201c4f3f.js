import{B as e}from"./index.44af7b04.js";import{g as s}from"./index.10276049.js";import{_ as c}from"./PageWrapper.fad7568d.js";import{k as l,c0 as t,bM as n,r as a,l as r,m as i,K as u,o,n as d,q as f,x as p,Y as m}from"./vendor.9d9efc92.js";import"./createAsyncComponent.516e1800.js";import"./usePageContext.d3e060c8.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var y=l({components:{BasicDragVerify:e,BugOutlined:t,RightOutlined:n,PageWrapper:c},setup(){const{createMessage:e}=s();return{handleSuccess:function(s){const{time:c}=s;e.success(`校验成功,耗时${c}秒`)},el1:a(null),el2:a(null),el3:a(null),el4:a(null),el5:a(null),handleBtnClick:function(e){e&&e.resume()}}}});const g=p();r("data-v-a0470878");const k={class:"flex justify-center p-4 items-center bg-gray-700"},S=m(" 还原 "),x={class:"flex justify-center p-4 items-center bg-gray-700"},b=m(" 还原 "),h={class:"flex justify-center p-4 items-center bg-gray-700"},j=m(" 还原 "),C={class:"flex justify-center p-4 items-center bg-gray-700"},v=m(" 还原 "),B={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=m(" 成功 "),P={key:1},M=m(" 拖动 "),W=m(" 还原 ");i();const A=g(((e,s,c,l,t,n)=>{const a=u("BasicDragVerify"),r=u("a-button"),i=u("BugOutlined"),p=u("RightOutlined"),m=u("PageWrapper");return o(),d(m,{title:"拖动校验示例"},{default:g((()=>[f("div",k,[f(a,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),f(r,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:g((()=>[S])),_:1})]),f("div",x,[f(a,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),f(r,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:g((()=>[b])),_:1})]),f("div",h,[f(a,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{backgroundColor:"#018ffb"}},null,8,["onSuccess"]),f(r,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:g((()=>[j])),_:1})]),f("div",C,[f(a,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:g((e=>[e?(o(),d(i,{key:0})):(o(),d(p,{key:1}))])),_:1},8,["onSuccess"]),f(r,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:g((()=>[v])),_:1})]),f("div",B,[f(a,{ref:"el5",onSuccess:e.handleSuccess},{text:g((e=>[e?(o(),d("div",_,[f(i),O])):(o(),d("div",P,[M,f(p)]))])),_:1},8,["onSuccess"]),f(r,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:g((()=>[W])),_:1})])])),_:1})}));y.render=A,y.__scopeId="data-v-a0470878";export default y;
