import{k as e,bz as t,f as s,l as o,m as a,K as n,o as r,n as i,x as l,q as u,s as c,Y as d}from"./vendor.9d9efc92.js";/* empty css              */import p from"./CurrentPermissionMode.9181b68a.js";import{ai as m,f,b0 as R}from"./index.f36f9bca.js";import{_ as g}from"./PageWrapper.5df89cd8.js";/* empty css              */import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var b=e({components:{Alert:t,CurrentPermissionMode:p,PageWrapper:g},setup(){const{changeRole:e}=m(),t=f();return{userStore:t,RoleEnum:R,isSuper:s((()=>t.getRoleList.includes(R.SUPER))),isTest:s((()=>t.getRoleList.includes(R.TEST))),changeRole:e}}});const E=l();o("data-v-024b4668");const j=d(" 当前角色: "),P={class:"mt-4"},S=d(" 权限切换(请先切换权限模式为前端角色权限模式): ");a();const x=E(((e,t,s,o,a,l)=>{const p=n("CurrentPermissionMode"),m=n("Alert"),f=n("a-button"),R=n("a-button-group"),g=n("PageWrapper");return r(),i(g,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:E((()=>[u(p),u("p",null,[j,u("a",null,c(e.userStore.getRoleList),1)]),u(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",P,[S,u(R,null,{default:E((()=>[u(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:E((()=>[d(c(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:E((()=>[d(c(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));b.render=x,b.__scopeId="data-v-024b4668";export default b;
