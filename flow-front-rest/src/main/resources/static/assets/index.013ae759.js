import{_ as e}from"./PageWrapper.01f0bc61.js";import{k as a,aT as o,bm as r,af as t,bi as s,r as n,u as i,a as p,K as d,aq as l,w as c,o as m,n as u,P as f,q as b}from"./vendor.59fe1062.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{f as j,g as v}from"./useForm.2f2fe7b8.js";import{ai as x,ac as y,g as h,f as P}from"./index.21cfc268.js";import g from"./ProcessHeader.eb457392.js";import"./usePageContext.557e08ad.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.932ae6a7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ac1f5740.js";import"./useModal.7ee8a690.js";import"./useWindowSizeFn.cd99a382.js";import"./download.a7e72615.js";import"./StrengthMeter.aa8057ae.js";/* empty css              */import"./process.b37f0197.js";const I=[{field:"applyerCode",component:"Input",label:"申请人",colProps:{span:8},show:!1},{field:"type",component:"Select",label:"类型",required:!0,colProps:{style:"width: 300px",span:20},componentProps:{options:[{label:"调休",value:"1",key:"1"},{label:"事假",value:"2",key:"2"},{label:"年假",value:"3",key:"3"}]}},{field:"startTime",component:"DatePicker",label:"开始时间",required:!0,colProps:{span:6}},{field:"endTime",component:"DatePicker",label:"结束时间",required:!0,colProps:{span:6}},{field:"days",component:"InputNumber",label:"请假天数",required:!0,colProps:{span:24}},{field:"note",component:"InputTextArea",label:"说明",required:!0,colProps:{span:13}}];var w,C;(C=w||(w={})).GetLeaveById="/front/hr/attendance/getLeaveById",C.AddLeave="/front/hr/attendance/addLeave";var F=a({components:{ProcessHeader:g,PageWrapper:e,[o.name]:o,[r.name]:r,AEmpty:t,[s.name]:s,[s.Item.name]:s.Item,BasicForm:j,CollapseContainer:y,PageWrapper:e},setup(){const e=n(null),a=n(!1),{createMessage:o}=h(),{currentRoute:r}=i(),{path:t,params:{modelKey:s}}=p(r),[d,{setProps:l,resetFields:c,updateSchema:m,setFieldsValue:u,validate:f}]=v({labelWidth:100,schemas:I,showActionButtonGroup:!1,actionColOptions:{span:24}});return{registerForm:d,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e,doSubmit:function(){return e=this,o=null,r=function*(){const e=yield f(),o=P(),{getUserInfo:r}=o;e.applyerCode=r.code;try{a.value=!0,yield(t=e,x.post({url:w.AddLeave,params:t}))}finally{a.value=!1}var t},new Promise(((a,t)=>{var s=e=>{try{i(r.next(e))}catch(a){t(a)}},n=e=>{try{i(r.throw(e))}catch(a){t(a)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,n);i((r=r.apply(e,o)).next())}));var e,o,r},initProcessForm:function(e){var a;e&&(a=e,x.get({url:w.GetLeaveById+"/"+a,params:{}})).then((e=>{u(e)})),-1===t.indexOf("/process/launch")&&l({disabled:!0})}}}});const k=b("div",{class:"font-bold"},"基本信息",-1);F.render=function(e,a,o,r,t,s){const n=d("BasicForm"),i=d("CollapseContainer"),p=l("loading");return c((m(),u(i,{canExpan:!1},{title:f((()=>[k])),default:f((()=>[b(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},512)),[[p,e.formLoading]])};export default F;
