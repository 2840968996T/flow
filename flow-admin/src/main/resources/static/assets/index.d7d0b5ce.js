import{k as e,$ as t,K as a,o,n,Q as r,q as s}from"./vendor.9d9efc92.js";import d from"./TargetContent.23b1e7ae.js";import{aS as i}from"./index.10276049.js";import{_ as p}from"./PageWrapper.fad7568d.js";/* empty css              *//* empty css              *//* empty css              */import"./usePageContext.d3e060c8.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var m=e({components:{LazyContainer:i,PageWrapper:p,TargetContent:d,Skeleton:t}});const l={class:"lazy-base-demo-wrap"},c=s("h1",null,"向下滚动",-1),f={class:"lazy-base-demo-box"};m.render=function(e,t,d,i,p,m){const j=a("TargetContent"),b=a("Skeleton"),u=a("LazyContainer"),x=a("PageWrapper");return o(),n(x,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:r((()=>[s("div",l,[c,s("div",f,[s(u,null,{skeleton:r((()=>[s(b,{rows:10})])),default:r((()=>[s(j)])),_:1})])])])),_:1})};export default m;
