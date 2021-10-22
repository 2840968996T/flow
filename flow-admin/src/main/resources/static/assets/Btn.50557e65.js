import{y as e,bE as s,aZ as a,j as o,z as r,A as t,Z as i,au as n,B as c,F as d,v as l,J as m,a7 as u,a8 as f,G as p,K as y,a9 as P}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import _ from"./CurrentPermissionMode.7b3d5e43.js";import{al as h,N as x,X as k,f as v,b7 as b}from"./index.e99064e4.js";import{A as j}from"./index.5ccd1c5f.js";import{P as C}from"./index.16a907f1.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.c21e2e51.js";var g=e({components:{Alert:s,PageWrapper:C,CurrentPermissionMode:_,Divider:a,Authority:j},setup(){const{hasPermission:e}=h(),s=x(),a=k(),r=v(),t=o((()=>a.getProjectConfig.permissionMode===b.BACK));return{hasPermission:e,permissionStore:s,switchToken:function(e){return a=this,o=null,t=function*(){const a="fakeToken"+e;r.setToken(a),r.getUserInfoAction(),s.changePermissionCode()},new Promise(((e,s)=>{var r=e=>{try{n(t.next(e))}catch(a){s(a)}},i=e=>{try{n(t.throw(e))}catch(a){s(a)}},n=s=>s.done?e(s.value):Promise.resolve(s.value).then(r,i);n((t=t.apply(a,o)).next())}));var a,o,t},isBackPremissionMode:t}}});const A=y("data-v-3cba4497");r("data-v-3cba4497");const M=P(" 当前拥有的code列表: "),w=P(" 点击切换按钮权限(用户id为2) "),B=P(" 点击切换按钮权限(用户id为1,默认) "),T=P("组件方式判断权限"),S=P(" 拥有code ['1000']权限可见 "),W=P(" 拥有code ['2000']权限可见 "),z=P(" 拥有code ['1000','2000']角色权限可见 "),D=P("函数方式方式判断权限"),F=P(" 拥有code ['1000']权限可见 "),I=P(" 拥有code ['2000']权限可见 "),K=P(" 拥有code ['1000','2000']角色权限可见 "),Z=P("指令方式方式判断权限(该方式不能动态修改权限.)"),E=P(" 拥有code ['1000']权限可见 "),G=P(" 拥有code ['2000']权限可见 "),H=P(" 拥有code ['1000','2000']角色权限可见 ");t();const J=A(((e,s,a,o,r,t)=>{const y=i("CurrentPermissionMode"),P=i("Divider"),_=i("Alert"),h=i("a-button"),x=i("Authority"),k=i("PageWrapper"),v=n("auth");return c(),d(k,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:A((()=>[l(y),l("p",null,[M,l("a",null,m(e.permissionStore.getPermCodeList),1)]),l(P),l(_,{class:"mt-4",type:"info",message:"点击后请查看按钮变化(必须处于后台权限模式才可测试此页面所展示的功能)","show-icon":""}),l(P),l(h,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.switchToken(2)),disabled:!e.isBackPremissionMode},{default:A((()=>[w])),_:1},8,["disabled"]),l(h,{type:"primary",onClick:s[2]||(s[2]=s=>e.switchToken(1)),disabled:!e.isBackPremissionMode},{default:A((()=>[B])),_:1},8,["disabled"]),e.isBackPremissionMode?(c(),d(u,{key:0},[l(P,null,{default:A((()=>[T])),_:1}),l(x,{value:"1000"},{default:A((()=>[l(h,{type:"primary",class:"mx-4"},{default:A((()=>[S])),_:1})])),_:1}),l(x,{value:"2000"},{default:A((()=>[l(h,{color:"success",class:"mx-4"},{default:A((()=>[W])),_:1})])),_:1}),l(x,{value:["1000","2000"]},{default:A((()=>[l(h,{color:"error",class:"mx-4"},{default:A((()=>[z])),_:1})])),_:1}),l(P,null,{default:A((()=>[D])),_:1}),e.hasPermission("1000")?(c(),d(h,{key:0,type:"primary",class:"mx-4"},{default:A((()=>[F])),_:1})):f("",!0),e.hasPermission("2000")?(c(),d(h,{key:1,color:"success",class:"mx-4"},{default:A((()=>[I])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),d(h,{key:2,color:"error",class:"mx-4"},{default:A((()=>[K])),_:1})):f("",!0),l(P,null,{default:A((()=>[Z])),_:1}),p(l(h,{type:"primary",class:"mx-4"},{default:A((()=>[E])),_:1},512),[[v,"1000"]]),p(l(h,{color:"success",class:"mx-4"},{default:A((()=>[G])),_:1},512),[[v,"2000"]]),p(l(h,{color:"error",class:"mx-4"},{default:A((()=>[H])),_:1},512),[[v,["1000","2000"]]])],64)):f("",!0)])),_:1})}));g.render=J,g.__scopeId="data-v-3cba4497";export default g;
