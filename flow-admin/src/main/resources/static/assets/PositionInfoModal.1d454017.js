var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,s=(e,t,o)=>new Promise(((r,a)=>{var s=e=>{try{l(o.next(e))}catch(t){a(t)}},i=e=>{try{l(o.throw(e))}catch(t){a(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,i);l((o=o.apply(e,t)).next())}));import{_ as i,a as l}from"./useModal.c70d8b8c.js";import{_ as n}from"./BasicForm.4961b69c.js";import{u as d}from"./useForm.4f4a10e2.js";import{a1 as c,b2 as u,k as m,r as f,u as p,f as h,K as g,o as b,n as w,Q as y,q as v,N as I}from"./vendor.9d9efc92.js";/* empty css              */import{c as P,s as j}from"./positionInfo.67a2e7c7.js";import{az as x}from"./index.f36f9bca.js";const q=[{title:"岗位名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",align:"left"},{title:"排序编号",dataIndex:"orderNo",width:100,align:"left"},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,o=t?"启用":"停用";return c(u,{color:t?"green":"red"},(()=>o))}},{title:"成立日期",dataIndex:"startDate",width:100,align:"left"}],M=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],O=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"岗位名称",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"岗位名称不能为空！"},{max:80,message:"字符长度不能大于80！"}]},{field:"code",label:"编码",required:!0,component:"Input",show:!0},{field:"positionSeqId",label:"岗位序列ID",required:!1,component:"Input",show:!1},{field:"positionSeqCode",label:"岗位序列编码",required:!1,component:"Input",show:!1},{field:"startDate",label:"成立日期",required:!1,component:"DatePicker",show:!0},{field:"orderNo",label:"排序编号",required:!1,component:"InputNumber",show:!0},{field:"status",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"启用",unCheckedChildren:"停用"}}];var S=m({name:"PositionInfoModal",components:{BasicModal:i,BasicForm:n},emits:["success","register"],setup(e,{emit:i}){const n=f(!0),[c,{resetFields:u,updateSchema:m,setFieldsValue:g,validate:b}]=d({labelWidth:100,schemas:O,showActionButtonGroup:!1}),[w,{setModalProps:y,closeModal:v}]=l((e=>s(this,null,(function*(){yield u(),y({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield m([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:40,message:"字符长度不能大于40！"},...(e={id:p(n)&&s&&s.id||"",field:"code",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(t,o)=>o?P({id:e.id,field:e.field,fieldValue:o,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),p(n)&&g(((e,s)=>{for(var i in s||(s={}))o.call(s,i)&&a(e,i,s[i]);if(t)for(var i of t(s))r.call(s,i)&&a(e,i,s[i]);return e})({},e.record))}))));return{registerModal:w,registerForm:c,getTitle:h((()=>p(n)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{y({confirmLoading:!0});const e=yield b();e.status=e.status?1:0,e.startDate&&(e.startDate=x(e.startDate)),yield j(e),v(),i("success")}finally{y({confirmLoading:!1})}}))}}}});S.render=function(e,t,o,r,a,s){const i=g("BasicForm"),l=g("BasicModal");return b(),w(l,I(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[v(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});export{_ as P,S as _,q as c,M as s};
