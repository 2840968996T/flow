import{L as d,a as l,v as f,aF as n,o as u,i as I,z as r,m as e,l as t}from"./index.920900a8.js";import{C as _}from"./index.7d514037.js";import"./index.3323ca74.js";import"./index.d02f570d.js";import{P as g}from"./index.ee154098.js";import y from"./WorkbenchHeader.99da915f.js";import S from"./SystemListCard.5e53ef60.js";import h from"./QuickNav.284dba5e.js";import C from"./DynamicInfo.f284db01.js";import v from"./NoticeInfo.57207226.js";import b from"./BannerInfo.f38c7842.js";import k from"./SaleRadar.a825fcb4.js";import{d as B,n as N,b as W}from"./data.93390901.js";import"./index.404e3930.js";import"./index.088b2d5a.js";import"./useRefs.26d797c9.js";import"./useFlexGapSupport.e39df451.js";import"./index.2b40a07e.js";import"./index.f2433f6d.js";import"./useSize.131e5482.js";import"./eagerComputed.a81da0b0.js";import"./useWindowSizeFn.f80f3edd.js";import"./useContentViewHeight.00736559.js";import"./ArrowLeftOutlined.bccff98d.js";import"./index.f453fed9.js";import"./transButton.381aadd1.js";import"./header.d801b988.js";import"./index.64aacba7.js";import"./index.dc08e764.js";import"./process.2827318c.js";import"./index.cd11fa98.js";import"./useECharts.a37b4929.js";const L=l({components:{PageWrapper:g,WorkbenchHeader:y,SystemListCard:S,NoticeInfo:v,BannerInfo:b,QuickNav:h,DynamicInfo:C,SaleRadar:k,Card:_},setup(){const o=f(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:B,noticeInfoItems:N,bannerInfoItems:W}}}),w={class:"md:flex w-full enter-y"},P={class:"w-2/3"},$={class:"md:w-1/3 pl-4"};function D(o,H,V,z,F,Q){const a=n("WorkbenchHeader"),m=n("NoticeInfo"),i=n("SystemListCard"),s=n("BannerInfo"),p=n("DynamicInfo"),c=n("PageWrapper");return u(),I(c,{class:"!mt-4"},{headerContent:r(()=>[e(a)]),default:r(()=>[t("div",w,[t("div",P,[e(m,{dataSource:o.noticeInfoItems,loading:o.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"]),e(i,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),t("div",$,[e(s,{dataSource:o.bannerInfoItems,class:"!my-4",loading:o.loading},null,8,["dataSource","loading"]),e(p,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])])]),_:1})}var go=d(L,[["render",D]]);export{go as default};
