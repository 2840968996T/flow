import{y as e,ak as a,a as n,r as t,j as l,u as r,Z as s,B as u,F as o,a2 as i,a9 as p,J as c,v as m}from"./vendor.880b4c6c.js";import{P as d}from"./index.16a907f1.js";import"./index.e99064e4.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.c21e2e51.js";var f=e({name:"TestMenu",components:{PageWrapper:d,Input:a},setup(){const{currentRoute:e,replace:a}=n(),s=t("");return{value:s,handleClickGo:()=>{const{name:n}=r(e);a({name:n,params:{id:r(s)}})},params:l((()=>r(e).params))}}});const v=m("br",null,null,-1),j=p(" 输入参数切换路由： "),b=p("切换路由"),k=m("br",null,null,-1),x=p(" 切换路由后 "),C=m("ul",null,[m("li",null,"可刷新页面测试路由参数情况是否正常。"),m("li",null,"可于左侧菜单中展开子菜单，点击测试参数是否携带正常。")],-1);f.render=function(e,a,n,t,l,r){const d=s("Input"),f=s("a-button"),h=s("PageWrapper");return u(),o(h,{title:"带参数菜单（路由）",content:"支持多级参数"},{default:i((()=>[p(" 当前参数："+c(e.params)+" ",1),v,j,m(d,{value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"建议为url标准字符，输入后点击切换"},null,8,["value"]),m(f,{type:"primary",onClick:e.handleClickGo},{default:i((()=>[b])),_:1},8,["onClick"]),k,x,C])),_:1})};export default f;
