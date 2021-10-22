import{y as e,bE as s,aZ as t,j as a,z as o,A as l,Z as r,au as u,B as n,F as i,v as m,J as c,a9 as d,a8 as p,G as f,K as E}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import R from"./CurrentPermissionMode.7b3d5e43.js";import{al as S,f as _,b6 as y}from"./index.e99064e4.js";import{A as P}from"./index.5ccd1c5f.js";import{P as T}from"./index.16a907f1.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.c21e2e51.js";var x=e({components:{Alert:s,PageWrapper:T,CurrentPermissionMode:R,Divider:t,Authority:P},setup(){const{changeRole:e,hasPermission:s}=S(),t=_();return{userStore:t,RoleEnum:y,isSuper:a((()=>t.getRoleList.includes(y.SUPER))),isTest:a((()=>t.getRoleList.includes(y.TEST))),changeRole:e,hasPermission:s}}});const v=E("data-v-95aee818");o("data-v-95aee818");const h=d(" 当前角色: "),g={class:"mt-4"},j=d(" 权限切换(请先切换权限模式为前端角色权限模式): "),U=d("组件方式判断权限(有需要可以自行全局注册)"),b=d(" 拥有super角色权限可见 "),A=d(" 拥有test角色权限可见 "),C=d(" 拥有[test,super]角色权限可见 "),k=d("函数方式方式判断权限(适用于函数内部过滤)"),M=d(" 拥有super角色权限可见 "),w=d(" 拥有test角色权限可见 "),L=d(" 拥有[test,super]角色权限可见 "),W=d("指令方式方式判断权限(该方式不能动态修改权限.)"),z=d(" 拥有super角色权限可见 "),B=d(" 拥有test角色权限可见 "),D=d(" 拥有[test,super]角色权限可见 ");l();const F=v(((e,s,t,a,o,l)=>{const E=r("CurrentPermissionMode"),R=r("Alert"),S=r("a-button"),_=r("a-button-group"),y=r("Divider"),P=r("Authority"),T=r("PageWrapper"),x=u("auth");return n(),i(T,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:v((()=>[m(E),m("p",null,[h,m("a",null,c(e.userStore.getRoleList),1)]),m(R,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),m("div",g,[j,m(_,null,{default:v((()=>[m(S,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:v((()=>[d(c(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),m(S,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:v((()=>[d(c(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),m(y,null,{default:v((()=>[U])),_:1}),m(P,{value:e.RoleEnum.SUPER},{default:v((()=>[m(S,{type:"primary",class:"mx-4"},{default:v((()=>[b])),_:1})])),_:1},8,["value"]),m(P,{value:e.RoleEnum.TEST},{default:v((()=>[m(S,{color:"success",class:"mx-4"},{default:v((()=>[A])),_:1})])),_:1},8,["value"]),m(P,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:v((()=>[m(S,{color:"error",class:"mx-4"},{default:v((()=>[C])),_:1})])),_:1},8,["value"]),m(y,null,{default:v((()=>[k])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(n(),i(S,{key:0,type:"primary",class:"mx-4"},{default:v((()=>[M])),_:1})):p("",!0),e.hasPermission(e.RoleEnum.TEST)?(n(),i(S,{key:1,color:"success",class:"mx-4"},{default:v((()=>[w])),_:1})):p("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(n(),i(S,{key:2,color:"error",class:"mx-4"},{default:v((()=>[L])),_:1})):p("",!0),m(y,null,{default:v((()=>[W])),_:1}),f(m(S,{type:"primary",class:"mx-4"},{default:v((()=>[z])),_:1},512),[[x,e.RoleEnum.SUPER]]),f(m(S,{color:"success",class:"mx-4"},{default:v((()=>[B])),_:1},512),[[x,e.RoleEnum.TEST]]),f(m(S,{color:"error",class:"mx-4"},{default:v((()=>[D])),_:1},512),[[x,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])),_:1})}));x.render=F,x.__scopeId="data-v-95aee818";export default x;
