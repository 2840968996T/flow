import{f as e,g as a}from"./useForm.2f2fe7b8.js";import{ac as o,aw as t}from"./index.21cfc268.js";import{k as n,ac as i,r,K as s,o as l,n as d,P as p,q as c,W as u,X as m}from"./vendor.59fe1062.js";import{_ as f}from"./PageWrapper.01f0bc61.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ac1f5740.js";import"./useModal.7ee8a690.js";import"./useWindowSizeFn.cd99a382.js";/* empty css              */import"./download.a7e72615.js";import"./StrengthMeter.aa8057ae.js";import"./usePageContext.557e08ad.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.932ae6a7.js";var b=n({components:{BasicForm:e,CollapseContainer:o,PageWrapper:f,[i.name]:i,Button:t},setup(){const[e,{appendSchemaByField:o,removeSchemaByFiled:t,validate:n}]=a({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const i=r(1);return{register:e,handleSubmit:function(){return e=this,a=null,o=function*(){try{yield n()}catch(e){}},new Promise(((t,n)=>{var i=e=>{try{s(o.next(e))}catch(a){n(a)}},r=e=>{try{s(o.throw(e))}catch(a){n(a)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,r);s((o=o.apply(e,a)).next())}));var e,a,o},add:function(){o({field:`field${i.value}a`,component:"Input",label:"字段"+i.value,colProps:{span:8},required:!0},""),o({field:`field${i.value}b`,component:"Input",label:"字段"+i.value,colProps:{span:8},required:!0},""),o({field:`${i.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),i.value++},del:function(e){t([`field${e}a`,`field${e}b`,`${e}`]),i.value--}}}});const j=m("+"),v=m("-");b.render=function(e,a,o,t,n,i){const r=s("Button"),m=s("BasicForm"),f=s("CollapseContainer"),b=s("PageWrapper");return l(),d(b,{title:"表单增删示例"},{default:p((()=>[c(f,{title:"表单增删"},{default:p((()=>[c(m,{onRegister:e.register,onSubmit:e.handleSubmit},{add:p((({field:a})=>[0===Number(a)?(l(),d(r,{key:0,onClick:e.add},{default:p((()=>[j])),_:1},8,["onClick"])):u("",!0),a>0?(l(),d(r,{key:1,onClick:o=>e.del(a)},{default:p((()=>[v])),_:2},1032,["onClick"])):u("",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default b;
