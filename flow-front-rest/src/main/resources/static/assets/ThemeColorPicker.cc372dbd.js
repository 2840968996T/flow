import{c as e}from"./index.b41e2c0e.js";import{b as i}from"./index.8a474d13.js";import{y as t,bE as s,Z as r,B as n,F as o,a6 as a,an as p,v as c}from"./vendor.3dc066e5.js";import"./index.09a08b5b.js";import"./index.791263c3.js";import"./useWindowSizeFn.308e6090.js";import"./useContentViewHeight.16e0f08b.js";/* empty css              */import"./useSortable.be81b66a.js";import"./lock.db666668.js";/* empty css              */var l=t({name:"ThemeColorPicker",components:{CheckOutlined:s},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(t){const{prefixCls:s}=e("setting-theme-picker");return{prefixCls:s,handleClick:function(e){t.event&&i(t.event,e)}}}});l.render=function(e,i,t,s,l,d){const m=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,p(e.colorList||[],(i=>(n(),o("span",{key:i,onClick:t=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[c(m)],14,["onClick"])))),128))],2)};export default l;
