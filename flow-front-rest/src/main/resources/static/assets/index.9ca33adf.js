import{k as o,b8 as e,aU as t,u as s,f as a,a as r,l as n,m as i,K as l,o as c,n as d,q as p,s as u,W as m,x as f}from"./vendor.59fe1062.js";import"./index.e0b2acc4.js";import{D as b,G as C,S as _}from"./siteSetting.136c2269.js";import{d as x,K as j,c as F,o as v}from"./index.21cfc268.js";import"./createAsyncComponent.d3666b4e.js";import"./index.d051c4cb.js";import"./useWindowSizeFn.cd99a382.js";import"./usePageContext.557e08ad.js";/* empty css              */import"./useSortable.782c794d.js";import"./lock.6cbd06ab.js";var w=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:t},setup(){const{t:o}=x(),{getShowFooter:e}=j(),{currentRoute:t}=s(),{prefixCls:n}=F("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return r(e)&&!(null==(o=r(t).meta)?void 0:o.hiddenFooter)})),prefixCls:n,t:o,DOC_URL:b,GITHUB_URL:C,SITE_URL:_,openWindow:v}}});const y=f();n("data-v-12bf09b6");const L=p("div",null,"Copyright ©2021 企业数智化门户",-1);i();const S=y(((o,e,t,s,a,r)=>{const n=l("GithubFilled"),i=l("Footer");return o.getShowLayoutFooter?(c(),d(i,{key:0,class:o.prefixCls},{default:y((()=>[p("div",{class:`${o.prefixCls}__links`},[p("a",{onClick:e[1]||(e[1]=e=>o.openWindow(o.SITE_URL))},u(o.t("layout.footer.onlinePreview")),1),p(n,{onClick:e[2]||(e[2]=e=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),p("a",{onClick:e[3]||(e[3]=e=>o.openWindow(o.DOC_URL))},u(o.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):m("",!0)}));w.render=S,w.__scopeId="data-v-12bf09b6";export default w;
