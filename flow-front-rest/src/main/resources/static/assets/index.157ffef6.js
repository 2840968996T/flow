import{L as d,a as p,v as l,aF as n,o as f,i as I,z as _,l as t,m as a}from"./index.7c3c7418.js";import{C as u}from"./index.28eba525.js";import"./index.cdeb296b.js";import"./index.c937913e.js";import{P as g}from"./index.78bea4d0.js";import C from"./DynamicInfo.c95a3eca.js";import h from"./BannerInfo.d990e0af.js";import v from"./NoticeInfo.66ed1fbe.js";import y from"./ITWikiCard.efe9d63c.js";import w from"./ITContactCard.7bb1dbd0.js";import B from"./CommonDownCard.12db684c.js";import{dynamicInfoItems as D,bannerList as S,noticeInfoItems as N}from"./data.fb9e5330.js";import"./index.d65bd331.js";import"./index.a55e8a2f.js";import"./useRefs.79553119.js";import"./useFlexGapSupport.e2f556e1.js";import"./index.9623b7f0.js";import"./index.e6f7ae27.js";import"./useSize.c6c1e83b.js";import"./eagerComputed.9e7b49de.js";import"./useWindowSizeFn.b0ac0c42.js";import"./useContentViewHeight.228662ab.js";import"./ArrowLeftOutlined.0e68ce24.js";import"./index.16dce873.js";import"./transButton.bf02d691.js";import"./index.93ca4f77.js";import"./index.56b80f7d.js";import"./index.3f776dc4.js";const T=p({components:{PageWrapper:g,DynamicInfo:C,BannerInfo:h,NoticeInfo:v,ITWikiCard:y,ITContactCard:w,CommonDownCard:B,Card:u},setup(){const o=l(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:D,bannerInfoItems:S,noticeInfoItems:N}}}),P={class:"flex mt-4"},W={class:"w-2/3"},$={class:"w-1/3 pl-4"},b={class:"flex mt-4"},k={class:"w-1/4 mr-4"},L={class:"w-3/4"};function V(o,z,F,j,q,A){const e=n("BannerInfo"),r=n("NoticeInfo"),i=n("ITContactCard"),s=n("DynamicInfo"),m=n("CommonDownCard"),c=n("PageWrapper");return f(),I(c,null,{default:_(()=>[t("div",P,[t("div",W,[a(e,{dataSource:o.bannerInfoItems,height:"270",class:"enter-y",loading:o.loading},null,8,["dataSource","loading"])]),t("div",$,[a(r,{dataSource:o.noticeInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),t("div",b,[t("div",k,[a(i,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),t("div",L,[a(s,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"]),a(m,{loading:o.loading,class:"enter-y !mt-4"},null,8,["loading"])])])]),_:1})}var _o=d(T,[["render",V]]);export{_o as default};
