import{aw as e,b8 as t,aS as a}from"./index.e99064e4.js";var r,s;(s=r||(r={})).CompanyList="/flow/org/company/getCompanies",s.SaveOrUpdate="/flow/org/company/saveOrUpdate",s.Delete="/flow/org/company/delete",s.CheckEntityExist="/flow/org/company/checkEntityExist";const o=s=>{const o=e.post({url:r.CompanyList,params:s});return Promise.resolve(o).then((e=>{const r=t(e,{id:"id",children:"children",pid:"pid"});return a(r,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),r}))},i=t=>e.post({url:r.SaveOrUpdate,params:t}),n=t=>e.post({url:r.Delete,params:t}),p=t=>e.post({url:r.CheckEntityExist,params:t});export{p as c,n as d,o as g,i as s};
