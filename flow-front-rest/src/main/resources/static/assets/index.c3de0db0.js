import{k as e,bm as a,r as o,K as n,o as r,n as s,P as t,q as i}from"./vendor.59fe1062.js";/* empty css              *//* empty css              *//* empty css              */import{_ as d}from"./PageWrapper.01f0bc61.js";import m from"./WorkbenchHeader.190bb7ef.js";import c from"./SystemListCard.cd28fc70.js";import f from"./QuickNav.04e9a855.js";import l from"./DynamicInfo.a5e99dd7.js";import p from"./NoticeInfo.1f06e4b0.js";import j from"./BannerInfo.7c8a7077.js";import u from"./SaleRadar.29829b3b.js";import{d as I,n as g,b}from"./data.93390901.js";import"./index.21cfc268.js";import"./usePageContext.557e08ad.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.932ae6a7.js";import"./header.d801b988.js";/* empty css              *//* empty css              */import"./process.b37f0197.js";/* empty css              */import"./useECharts.dc6a463c.js";var y=e({components:{PageWrapper:d,WorkbenchHeader:m,SystemListCard:c,NoticeInfo:p,BannerInfo:j,QuickNav:f,DynamicInfo:l,SaleRadar:u,Card:a},setup(){const e=o(!0);return setTimeout((()=>{e.value=!1}),1500),{loading:e,dynamicInfoItems:I,noticeInfoItems:g,bannerInfoItems:b}}});const x={class:"lg:flex"},S={class:"lg:w-7/10 w-full enter-y"},v={class:"lg:w-3/10 !pl-4"};y.render=function(e,a,o,d,m,c){const f=n("WorkbenchHeader"),l=n("NoticeInfo"),p=n("SystemListCard"),j=n("BannerInfo"),u=n("DynamicInfo"),I=n("PageWrapper");return r(),s(I,{class:"!mt-4"},{headerContent:t((()=>[i(f)])),default:t((()=>[i("div",x,[i("div",S,[i(l,{dataSource:e.noticeInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"]),i(p,{loading:e.loading,class:"enter-y"},null,8,["loading"])]),i("div",v,[i(j,{dataSource:e.bannerInfoItems,class:"!my-4 enter-y",loading:e.loading},null,8,["dataSource","loading"]),i(u,{dataSource:e.dynamicInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])])])),_:1})};export default y;
