import{d1 as o,d2 as a,d3 as s}from"./index.7c3c7418.js";function d(e){return o.post({url:"/front/flow/complete",params:e})}function g(e){return o.post({url:"/front/flow/getAppingTaskCont",params:e})}function f(e){return o.post({url:"/front/flow/stopProcess",params:e})}function c(e){return o.post({url:"/front/flow/startFormFlow",params:e})}function i(e){return o.get({url:"/front/flow/loadBpmnXmlByModelKey/"+e.modelKey,params:{}})}function u(e){return o.get({url:"/front/flow/getFormInfoByModelKey/"+e.modelKey,params:{}})}function p(e){return o.get({url:"/front/flow/getFormDataInfoByProcessInstanceId/"+e.procInstId})}function y(e){return o.get({url:"/front/flow/getStartorBaseInfoVoByProcessInstanceId/"+e.procInstId})}function I(e){return o.get({url:"/front/flow/getModelInfoByModelKey/"+e.modelKey,params:{}})}function m(e){return o.get({url:"/front/flow/getCommentInfosByProcessInstanceId/"+e.procInstId,params:{}})}function P(e){return o.get({url:"/front/flow/getHighLightedNodeVoByProcessInstanceId/"+e.procInstId,params:{}})}function B(e){return o.get({url:"/front/flow/getOneActivityVoByProcessInstanceIdAndActivityId/"+e.procInstId+"/"+e.elementId,params:{}})}const w=e=>o.get({url:"/front/flow/getApps",params:e}).then(r=>(r.forEach(t=>{t.label=t.name,t.value=t.sn}),Promise.resolve(r)));function M(e){const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let t=e||{};t.dateRange&&(t.startTime=e.dateRange[0],t.endTime=e.dateRange[1]),t&&(delete t.pageNum,delete t.pageSize,delete t.dateRange);const n={query:r,entity:t};return o.post({url:"/front/flow/findMyProcessinstancesPagerModel",params:n})}function h(e){const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let t=e||{};t.dateRange&&(t.startTime=e.dateRange[0],t.endTime=e.dateRange[1]),t&&(delete t.pageNum,delete t.pageSize,delete t.dateRange);const n={query:r,entity:t};return o.post({url:"/front/flow/getAppingTasksPagerModel",params:n})}function A(e){const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let t=e||{};t.dateRange&&(t.startTime=e.dateRange[0],t.endTime=e.dateRange[1]),t&&(delete t.pageNum,delete t.pageSize,delete t.dateRange);const n={query:r,entity:t};return o.post({url:"/front/flow/getApplyedTasksPagerModel",params:n})}const N=e=>{const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let t=e||{};t&&(delete t.pageNum,delete t.pageSize);const n={query:r,entity:t};return o.post({url:"/front/flow/getModelInfoVoByPagerModel",params:n})},S=()=>{const e=o.get({url:"/front/flow/getCategories"});return Promise.resolve(e).then(r=>{r.forEach(n=>{n.key=n.code,n.value=n.code,n.title=n.name,n.label=n.name});const t=a(r,{id:"id",children:"children",pid:"pid"});return s(t,n=>{n.children.length===0&&delete n.children},{id:"id",children:"children",pid:"pid"}),t})};export{h as a,A as b,I as c,y as d,u as e,p as f,g,d as h,m as i,P as j,B as k,i as l,c as m,w as n,S as o,N as p,M as q,f as s};
