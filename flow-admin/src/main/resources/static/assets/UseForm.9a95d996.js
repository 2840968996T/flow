import{_ as e}from"./BasicForm.d46fdf93.js";import{u as s}from"./useForm.02d3ecdf.js";import{ae as o,g as t}from"./index.10276049.js";import{_ as l}from"./PageWrapper.fad7568d.js";import{k as a,K as i,o as r,n,Q as p,q as c,Y as d}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.8b30048f.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";import"./usePageContext.d3e060c8.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=a({components:{BasicForm:e,CollapseContainer:o,PageWrapper:l},setup(){const{createMessage:e}=t(),[o,{setProps:l}]=s({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:l}}});const f={class:"mb-4"},b=d(" 更改labelWidth "),P=d(" 还原labelWidth "),C=d(" 更改Size "),j=d(" 还原Size "),k=d(" 禁用表单 "),h=d(" 解除禁用 "),_=d(" 紧凑表单 "),x=d(" 还原正常间距 "),g=d(" 操作按钮位置 "),v={class:"mb-4"},S=d(" 隐藏操作按钮 "),B=d(" 显示操作按钮 "),w=d(" 隐藏重置按钮 "),W=d(" 显示重置按钮 "),F=d(" 隐藏查询按钮 "),O=d(" 显示查询按钮 "),z=d(" 修改重置按钮 "),R=d(" 修改查询按钮 ");u.render=function(e,s,o,t,l,a){const d=i("a-button"),m=i("BasicForm"),u=i("CollapseContainer"),G=i("PageWrapper");return r(),n(G,{title:"UseForm操作示例"},{default:p((()=>[c("div",f,[c(d,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:p((()=>[b])),_:1}),c(d,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:p((()=>[P])),_:1}),c(d,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:p((()=>[C])),_:1}),c(d,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:p((()=>[j])),_:1}),c(d,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:p((()=>[k])),_:1}),c(d,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:p((()=>[h])),_:1}),c(d,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:p((()=>[_])),_:1}),c(d,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:p((()=>[x])),_:1}),c(d,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:p((()=>[g])),_:1})]),c("div",v,[c(d,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:p((()=>[S])),_:1}),c(d,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:p((()=>[B])),_:1}),c(d,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:p((()=>[w])),_:1}),c(d,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:p((()=>[W])),_:1}),c(d,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:p((()=>[F])),_:1}),c(d,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:p((()=>[O])),_:1}),c(d,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:p((()=>[z])),_:1}),c(d,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:p((()=>[R])),_:1})]),c(u,{title:"useForm示例"},{default:p((()=>[c(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;
