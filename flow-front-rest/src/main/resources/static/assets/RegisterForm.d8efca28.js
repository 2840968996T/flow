var w=(x,n,i)=>new Promise((t,c)=>{var p=s=>{try{m(i.next(s))}catch(u){c(u)}},d=s=>{try{m(i.throw(s))}catch(u){c(u)}},m=s=>s.done?t(s.value):Promise.resolve(s.value).then(p,d);m((i=i.apply(x,n)).next())});import{u as z,a as I,L as S,_ as R,b as P}from"./LoginFormTitle.2aad91eb.js";import{a as B,I as g,q as U,v as k,w as L,e as E,h as e,o as N,f as V,m as a,z as r,B as v,t as y,C,F as T,j as D}from"./index.7c3c7418.js";import{F as b}from"./index.c0e58213.js";import"./index.c937913e.js";import{C as j}from"./index.fd4506c3.js";import{S as q}from"./index.62ad1baf.js";import{C as G}from"./index.71e1a327.js";import"./_baseIteratee.ec76e356.js";import"./get.71cc21ff.js";import"./useSize.c6c1e83b.js";import"./useFlexGapSupport.e2f556e1.js";const ee=B({__name:"RegisterForm",setup(x){const n=b.Item,i=g.Password,{t}=U(),{handleBackLogin:c,getLoginState:p}=z(),d=k(),m=k(!1),s=L({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:u}=I(s),{validForm:F}=P(d),_=E(()=>e(p)===S.REGISTER);function h(){return w(this,null,function*(){const f=yield F()})}return(f,o)=>e(_)?(N(),V(T,{key:0},[a(R,{class:"enter-x"}),a(e(b),{class:"p-4 enter-x",model:s,rules:e(u),ref_key:"formRef",ref:d},{default:r(()=>[a(e(n),{name:"account",class:"enter-x"},{default:r(()=>[a(e(g),{class:"fix-auto-fill",size:"large",value:s.account,"onUpdate:value":o[0]||(o[0]=l=>s.account=l),placeholder:e(t)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"mobile",class:"enter-x"},{default:r(()=>[a(e(g),{size:"large",value:s.mobile,"onUpdate:value":o[1]||(o[1]=l=>s.mobile=l),placeholder:e(t)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"sms",class:"enter-x"},{default:r(()=>[a(e(G),{size:"large",class:"fix-auto-fill",value:s.sms,"onUpdate:value":o[2]||(o[2]=l=>s.sms=l),placeholder:e(t)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"password",class:"enter-x"},{default:r(()=>[a(e(q),{size:"large",value:s.password,"onUpdate:value":o[3]||(o[3]=l=>s.password=l),placeholder:e(t)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"confirmPassword",class:"enter-x"},{default:r(()=>[a(e(i),{size:"large",visibilityToggle:"",value:s.confirmPassword,"onUpdate:value":o[4]||(o[4]=l=>s.confirmPassword=l),placeholder:e(t)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),a(e(n),{class:"enter-x",name:"policy"},{default:r(()=>[a(e(j),{checked:s.policy,"onUpdate:checked":o[5]||(o[5]=l=>s.policy=l),size:"small"},{default:r(()=>[v(y(e(t)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),a(e(C),{type:"primary",class:"enter-x",size:"large",block:"",onClick:h,loading:m.value},{default:r(()=>[v(y(e(t)("sys.login.registerButton")),1)]),_:1},8,["loading"]),a(e(C),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(c)},{default:r(()=>[v(y(e(t)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])],64)):D("",!0)}});export{ee as default};
