var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,s=(e,r,t)=>new Promise(((i,o)=>{var s=e=>{try{n(t.next(e))}catch(r){o(r)}},a=e=>{try{n(t.throw(e))}catch(r){o(r)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(s,a);n((t=t.apply(e,r)).next())}));import{_ as a,a as n}from"./useModal.8b30048f.js";import{_ as d}from"./BasicForm.d46fdf93.js";import{u as l}from"./useForm.02d3ecdf.js";import{f as m,a as c,b as u}from"./module.data.cd092ba3.js";import{k as f,r as p,u as g,f as b,K as j,o as h,n as y,Q as v,q as w,N as x}from"./vendor.9d9efc92.js";import"./index.10276049.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";var M=f({name:"ModuleModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=p(!0),[f,{resetFields:j,setFieldsValue:h,updateSchema:y,validate:v}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[w,{setModalProps:x,closeModal:M}]=n((e=>s(this,null,(function*(){yield j(),x({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield y([{field:"sn",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{trigger:["change","blur"],pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{trigger:["change","blur"],max:64,message:"字符长度不能大于64！"},...(e={id:g(d)&&s&&s.id||"",field:"sn",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(r,t)=>t?c({id:e.id,field:e.field,fieldValue:t,fieldName:e.fieldName}).then((r=>r?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),g(d)&&h(((e,s)=>{for(var a in s||(s={}))t.call(s,a)&&o(e,a,s[a]);if(r)for(var a of r(s))i.call(s,a)&&o(e,a,s[a]);return e})({},e.record)),e.record.id?y([{field:"component",show:!1},{field:"url",show:!1}]):y([{field:"component",show:!0},{field:"url",show:!0}])}))));return{registerModal:w,registerForm:f,getTitle:b((()=>g(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{x({confirmLoading:!0});const e=yield v();e.status=e.status?1:0,e.showStatus=e.showStatus?1:0,yield u(e),M(),a("success")}finally{x({confirmLoading:!1})}}))}}}});M.render=function(e,r,t,i,o,s){const a=j("BasicForm"),n=j("BasicModal");return h(),y(n,x(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[w(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default M;
