import{c as e}from"./index.f77a0916.js";import{b as i}from"./index.853bb089.js";import{y as t,bE as s,Z as r,B as n,F as o,a6 as a,an as f,v as p}from"./vendor.3dc066e5.js";import"./index.878d338f.js";import"./index.feffbaff.js";import"./useWindowSizeFn.308e6090.js";import"./useContentViewHeight.0ff5ff24.js";/* empty css              */import"./useSortable.121e2df4.js";import"./lock.e85a3e5c.js";/* empty css              */var l=t({name:"ThemeColorPicker",components:{CheckOutlined:s},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(t){const{prefixCls:s}=e("setting-theme-picker");return{prefixCls:s,handleClick:function(e){t.event&&i(t.event,e)}}}});l.render=function(e,i,t,s,l,c){const d=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,f(e.colorList||[],(i=>(n(),o("span",{key:i,onClick:t=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[p(d)],14,["onClick"])))),128))],2)};export default l;
