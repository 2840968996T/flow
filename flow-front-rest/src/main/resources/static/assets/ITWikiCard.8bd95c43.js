import{L as I,a as B,b1 as E,I as r,v as F,aF as u,o as f,i as h,z as e,m as s,B as C,l as p,t as v,aG as A}from"./index.7c3c7418.js";import{C as L}from"./index.28eba525.js";import"./index.cdeb296b.js";import"./index.c937913e.js";import{L as n}from"./index.93ca4f77.js";import"./index.d65bd331.js";import"./index.a55e8a2f.js";import"./useRefs.79553119.js";import"./useFlexGapSupport.e2f556e1.js";import"./eagerComputed.9e7b49de.js";const S=[{id:"1",title:"\u90AE\u4EF6\u670D\u52A1\u5668\u5B95\u673A",url:"#"},{id:"2",title:"\u767B\u9646\u9519\u8BEF\u2014\u2014\u767B\u9646\u4E00\u76F4\u663E\u793A\u767B\u5F55\u4E2D\u72B6\u6001",url:"#"},{id:"3",title:"\u89C6\u9891\u4F1A\u8BAE-\u670D\u52A1\u8FDE\u63A5\u5931\u8D25-\u68C0\u67E5\u8F6F\u4EF6\u8BBE\u7F6E\u662F\u5426\u6B63\u786E\u3001\u5916\u7F51\u8FDE\u63A5\u662F\u5426\u6B63\u5E38",url:"#"}],k=B({components:{Card:L,List:n,ListItem:n.Item,ListItemMeta:n.Item.Meta,Icon:E,Input:r,InputSearch:r.Search},setup(t){const o=F("");function i(){}return{items:S,wikiInput:o,onSearch:i}}}),y={class:"content"},D=["title"];function w(t,o,i,$,b,g){const l=u("a-button"),c=u("InputSearch"),m=u("ListItem"),d=u("List"),_=u("Card");return f(),h(_,A({title:"IT\u77E5\u8BC6\u5E93"},t.$attrs,{"body-style":"padding-top:16px"}),{extra:e(()=>[s(l,{type:"link",size:"small"},{default:e(()=>[C("\u66F4\u591A")]),_:1})]),default:e(()=>[s(c,{value:t.wikiInput,"onUpdate:value":o[0]||(o[0]=a=>t.wikiInput=a),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57",style:{width:"100%"},onSearch:t.onSearch},null,8,["value","onSearch"]),s(d,{split:!1,"item-layout":"horizontal","data-source":t.items},{renderItem:e(({item:a})=>[s(m,{class:"custom-list-item"},{default:e(()=>[p("div",y,[p("a",{href:"/",title:a.title},v(a.title),9,D)])]),_:2},1024)]),_:1},8,["data-source"])]),_:1},16)}var j=I(k,[["render",w]]);export{j as default};
