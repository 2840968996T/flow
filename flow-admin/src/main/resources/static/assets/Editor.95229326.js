import{B as s}from"./BasicForm.d2fa120b.js";import{az as u,a as l,cF as c,aB as r,o as d,k as f,B as i,p,bU as _,G as C}from"./index.0280002f.js";import{M as h}from"./index.428f8f2c.js";import{P as b}from"./index.432b4215.js";/* empty css              *//* empty css               */import"./index.498da238.js";import"./index.5c81bb10.js";import"./Checkbox.61b53ada.js";import"./index.c68c747e.js";import"./index.3486105d.js";import"./index.6db63b77.js";import"./index.81d6e7a6.js";import"./index.46b96662.js";import"./get.742319ba.js";import"./index.86a12b41.js";import"./eagerComputed.832d624f.js";import"./index.9aa048a5.js";import"./_baseIteratee.9e690663.js";import"./DeleteOutlined.1c34c6c1.js";import"./index.a1c94158.js";import"./useRefs.f68e97c5.js";import"./Form.227e5499.js";import"./Col.32e8fee0.js";import"./useFlexGapSupport.f92812e7.js";import"./useSize.71621680.js";import"./transButton.fa31f1ed.js";import"./index.85e9aa1e.js";import"./index.0e48118d.js";import"./useWindowSizeFn.c0eea5f2.js";import"./FullscreenOutlined.d5490f36.js";import"./index.1d3f95d6.js";import"./index.3dcb35e5.js";import"./uuid.2b29000c.js";import"./download.f8a78464.js";import"./base64Conver.08b9f4ec.js";import"./index.e42b0536.js";import"./index.619bca12.js";import"./uniqBy.facde3d1.js";import"./index.4266ca8e.js";import"./index.02c8bfe1.js";import"./useContentViewHeight.084217e3.js";import"./ArrowLeftOutlined.e9ea5e65.js";import"./index.e0f520b3.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>_(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:s,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=C();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function B(o,t,e,F,w,M){const a=r("BasicForm"),m=r("CollapseContainer"),n=r("PageWrapper");return d(),f(n,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:i(()=>[p(m,{title:"MarkDown\u8868\u5355"},{default:i(()=>[p(a,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Co=u(k,[["render",B]]);export{Co as default};
