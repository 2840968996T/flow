import{_ as e,a as s}from"./useDrawer.fa2d3808.js";import{_ as i}from"./BasicForm.d46fdf93.js";import{u as o}from"./useForm.02d3ecdf.js";import{k as r,K as t,o as n,n as a,Q as d,q as m,N as p}from"./vendor.9d9efc92.js";/* empty css              */import"./index.10276049.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.8b30048f.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";const f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=r({components:{BasicDrawer:e,BasicForm:i},setup(){const[e,{setFieldsValue:i}]=o({labelWidth:120,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=s((e=>{i({field2:e.data,field1:e.info})}));return{register:r,schemas:f,registerForm:e}}});c.render=function(e,s,i,o,r,f){const c=t("BasicForm"),l=t("BasicDrawer");return n(),a(l,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:d((()=>[m("div",null,[m(c,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default c;
