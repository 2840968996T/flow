var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,s=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&r(e,l,t[l]);if(n)for(var l of n(t))a.call(t,l)&&r(e,l,t[l]);return e},i=(e,n)=>t(e,l(n)),c=(e,t,l)=>new Promise(((n,o)=>{var a=e=>{try{s(l.next(e))}catch(t){o(t)}},r=e=>{try{s(l.throw(e))}catch(t){o(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,r);s((l=l.apply(e,t)).next())}));import{e as u,m as d,ae as p,ax as f,D as g,C as h,V as m,c as b,ay as y,i as v,av as C,ah as H,au as M,w as F}from"./index.e99064e4.js";import{ai as S,u as O,y as k,T as B,v as P,M as w,bq as x,r as T,bN as j,j as N,Q as W,X as $,ae as R,Y as E,Z as A,au as _,B as V,F as D,a2 as I,G as L,a4 as q,a5 as z,bf as X,bg as Y,bO as G,a7 as J,a8 as Q,a0 as Z,a9 as K,J as U,ad as ee,aj as te,o as le,aA as ne,ao as oe,N as ae,t as re,b4 as se,ab as ie}from"./vendor.880b4c6c.js";import{u as ce}from"./useWindowSizeFn.564cf32e.js";const{t:ue}=u(),de={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ue("common.cancelText")},okText:{type:String,default:ue("common.okText")},closeFunc:Function},pe=Object.assign({},de,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function fe(e){const t=(e,t)=>getComputedStyle(e)[t],l=l=>{if(!l)return;l.setAttribute("data-drag",O(e.draggable));const n=l.querySelector(".ant-modal-header"),o=l.querySelector(".ant-modal");n&&o&&O(e.draggable)&&(n.style.cursor="move",n.onmousedown=e=>{if(!e)return;const l=e.clientX,n=e.clientY,a=document.body.clientWidth,r=document.documentElement.clientHeight,s=o.offsetWidth,i=o.offsetHeight,c=o.offsetLeft,u=a-o.offsetLeft-s,d=o.offsetTop,p=r-o.offsetTop-i,f=t(o,"left"),g=t(o,"top");let h=+f,m=+g;f.includes("%")?(h=+document.body.clientWidth*(+f.replace(/%/g,"")/100),m=+document.body.clientHeight*(+g.replace(/%/g,"")/100)):(h=+f.replace(/px/g,""),m=+g.replace(/px/g,"")),document.onmousemove=function(e){let t=e.clientX-l,a=e.clientY-n;-t>c?t=-c:t>u&&(t=u),-a>d?a=-d:a>p&&(a=p),o.style.cssText+=`;left:${t+h}px;top:${a+m}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})};S((()=>{O(e.visible)&&O(e.draggable)&&d((()=>{(()=>{const n=document.querySelectorAll(".ant-modal-wrap");for(const o of Array.from(n)){if(!o)continue;const n=t(o,"display"),a=o.getAttribute("data-drag");"none"!==n&&(null===a||O(e.destroyOnClose))&&l(o)}})()}),30)}))}var ge=k({name:"Modal",inheritAttrs:!1,props:pe,setup(e,{slots:t}){const{visible:l,draggable:n,destroyOnClose:o}=B(e),a=p();return fe({visible:l,destroyOnClose:o,draggable:n}),()=>{let l;const n=s(s({},O(a)),e);return P(w,n,"function"==typeof(o=l=f(t))||"[object Object]"===Object.prototype.toString.call(o)&&!x(o)?l:{default:()=>[l]});var o}}});const he=Symbol();function me(){return g(he)}var be=k({name:"ModalWrapper",components:{ScrollContainer:m},inheritAttrs:!1,props:{loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},emits:["height-change","ext-height"],setup(e,{emit:t}){const l=T(null),n=T(null),o=T(0),a=T(0);let r=0;ce(i.bind(null,!1)),j(n,(()=>{i()}),{attributes:!0,subtree:!0}),h({redoModalHeight:i},he);const s=N((()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${O(o)}px`})));function i(){return c(this,null,(function*(){if(!e.visible)return;const a=O(l);if(!a)return;const s=a.$el.parentElement;if(s){s.style.padding="0",yield E();try{const l=s.parentElement&&s.parentElement.parentElement;if(!l)return;const a=getComputedStyle(l).top,i=Number.parseInt(a);let c=window.innerHeight-2*i+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;i<40&&(c-=26),yield E();const u=O(n);if(!u)return;yield E(),r=u.scrollHeight,e.fullScreen?o.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:o.value=e.height?e.height:r>c?c:r,t("height-change",O(o))}catch(i){}}}))}return S((()=>{e.useWrapper&&i()})),W((()=>e.fullScreen),(e=>{i(),e?a.value=o.value:o.value=a.value})),$((()=>{const{modalHeaderHeight:l,modalFooterHeight:n}=e;t("ext-height",l+n)})),R((()=>{})),{wrapperRef:l,spinRef:n,spinStyle:s,scrollTop:function(){return c(this,null,(function*(){E((()=>{var e;const t=O(l);t&&(null==(e=null==t?void 0:t.scrollTo)||e.call(t,0))}))}))},setModalHeight:i}}});be.render=function(e,t,l,n,o,a){const r=A("ScrollContainer"),s=_("loading");return V(),D(r,{ref:"wrapperRef"},{default:I((()=>[L(P("div",{ref:"spinRef",style:e.spinStyle,"loading-tip":e.loadingTip},[q(e.$slots,"default")],12,["loading-tip"]),[[s,e.loading]])])),_:3},512)};var ye=k({name:"ModalClose",components:{Tooltip:z,FullscreenExitOutlined:X,FullscreenOutlined:Y,CloseOutlined:G},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:t}){const{prefixCls:l}=b("basic-modal-close"),{t:n}=u();return{t:n,getClass:N((()=>[l,`${l}--custom`,{[`${l}--can-full`]:e.canFullscreen}])),prefixCls:l,handleCancel:function(e){t("cancel",e)},handleFullScreen:function(e){null==e||e.stopPropagation(),null==e||e.preventDefault(),t("fullscreen")}}}});ye.render=function(e,t,l,n,o,a){const r=A("FullscreenExitOutlined"),s=A("Tooltip"),i=A("FullscreenOutlined"),c=A("CloseOutlined");return V(),D("div",{class:e.getClass},[e.canFullscreen?(V(),D(J,{key:0},[e.fullScreen?(V(),D(s,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:I((()=>[P(r,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])])),_:1},8,["title"])):(V(),D(s,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:I((()=>[P(i,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])])),_:1},8,["title"]))],64)):Q("",!0),P(s,{title:e.t("component.modal.close"),placement:"bottom"},{default:I((()=>[P(c,{onClick:e.handleCancel},null,8,["onClick"])])),_:1},8,["title"])],2)};var ve=k({name:"BasicModalFooter",props:pe,emits:["ok","cancel"],setup:(e,{emit:t})=>({handleOk:function(e){t("ok",e)},handleCancel:function(e){t("cancel",e)}})});ve.render=function(e,t,l,n,o,a){const r=A("a-button");return V(),D("div",null,[q(e.$slots,"insertFooter"),e.showCancelBtn?(V(),D(r,Z({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:I((()=>[K(U(e.cancelText),1)])),_:1},16,["onClick"])):Q("",!0),q(e.$slots,"centerFooter"),e.showOkBtn?(V(),D(r,Z({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:I((()=>[K(U(e.okText),1)])),_:1},16,["type","onClick","loading"])):Q("",!0),q(e.$slots,"appendFooter")])};var Ce=k({name:"BasicModalHeader",components:{BasicTitle:y},props:{helpMessage:{type:[String,Array]},title:{type:String}}});Ce.render=function(e,t,l,n,o,a){const r=A("BasicTitle");return V(),D(r,{helpMessage:e.helpMessage},{default:I((()=>[K(U(e.title),1)])),_:1},8,["helpMessage"])};var He=k({name:"BasicModal",components:{Modal:ge,ModalWrapper:be,ModalClose:ye,ModalFooter:ve,ModalHeader:Ce},inheritAttrs:!1,props:pe,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:t,attrs:l}){const n=T(!1),o=T(null),a=T(null),r=T(0),u={setModalProps:function(e){o.value=C(O(o)||{},e),Reflect.has(e,"visible")&&(n.value=!!e.visible);Reflect.has(e,"defaultFullscreen")&&(h.value=!!e.defaultFullscreen)},emitVisible:void 0,redoModalHeight:()=>{E((()=>{O(a)&&O(a).setModalHeight()}))}},d=ee();d&&t("register",u,d.uid);const p=N((()=>s(s({},e),O(o)))),{handleFullScreen:f,getWrapClassName:g,fullScreenRef:h}=function(e){const t=T(!1);return{getWrapClassName:N((()=>{const l=O(e.wrapClassName)||"";return O(t)?`fullscreen-modal ${l} `:O(l)})),handleFullScreen:function(e){e&&e.stopPropagation(),t.value=!O(t)},fullScreenRef:t}}({modalWrapperRef:a,extHeightRef:r,wrapClassName:te(p.value,"wrapClassName")}),m=N((()=>{const e=i(s({},O(p)),{visible:O(n),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return i(s({},e),{wrapClassName:O(g)})})),b=N((()=>{const e=i(s(s({},l),O(p)),{visible:O(n),wrapClassName:O(g)});return O(h)?le(e,"height"):e})),y=N((()=>{if(!O(h))return O(m).height}));return S((()=>{n.value=!!e.visible,h.value=!!e.defaultFullscreen})),W((()=>O(n)),(l=>{var n;t("visible-change",l),t("update:visible",l),d&&(null==(n=u.emitVisible)||n.call(u,l,d.uid)),E((()=>{e.scrollTop&&l&&O(a)&&O(a).scrollTop()}))}),{immediate:!1}),{handleCancel:function(l){return c(this,null,(function*(){if(null==l||l.stopPropagation(),e.closeFunc&&v(e.closeFunc)){const t=yield e.closeFunc();n.value=!t}else n.value=!1,t("cancel",l)}))},getBindValue:b,getProps:m,handleFullScreen:f,fullScreenRef:h,getMergeProps:p,handleOk:function(e){t("ok",e)},visibleRef:n,omit:le,modalWrapperRef:a,handleExtHeight:function(e){r.value=e},handleHeightChange:function(e){t("height-change",e)},handleTitleDbClick:function(t){e.canFullscreen&&(t.stopPropagation(),f(t))},getWrapperHeight:y}}});He.render=function(e,t,l,n,o,a){const r=A("ModalClose"),s=A("ModalHeader"),i=A("ModalFooter"),c=A("ModalWrapper"),u=A("Modal");return V(),D(u,Z(e.getBindValue,{onCancel:e.handleCancel}),ne({default:I((()=>[P(c,Z({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:void 0===e.footer||e.footer?void 0:0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:I((()=>[q(e.$slots,"default")])),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])])),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:I((()=>[P(r,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]))},e.$slots.title?void 0:{name:"title",fn:I((()=>[P(s,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]))},e.$slots.footer?void 0:{name:"footer",fn:I((()=>[P(i,Z(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),ne({_:2},[oe(Object.keys(e.$slots),(t=>({name:t,fn:I((l=>[q(e.$slots,t,l)]))})))]),1040,["onOk","onCancel"])]))},oe(Object.keys(e.omit(e.$slots,"default")),(t=>({name:t,fn:I((l=>[q(e.$slots,t,l)]))})))]),1040,["onCancel"])};const Me=ae({}),Fe=ae({});function Se(){const e=T(null),t=T(!1),l=T("");const n=()=>{const t=O(e);return t||M("useModal instance is undefined!"),t};return[function(n,o){if(!ee())throw new Error("useModal() can only be used inside setup() or functional components!");l.value=o,R((()=>{e.value=null,t.value=!1,Me[O(l)]=null})),O(t)&&H()&&n===O(e)||(e.value=n,n.emitVisible=(e,t)=>{Fe[t]=e})},{setModalProps:e=>{var t;null==(t=n())||t.setModalProps(e)},getVisible:N((()=>Fe[~~O(l)])),redoModalHeight:()=>{var e,t;null==(t=null==(e=n())?void 0:e.redoModalHeight)||t.call(e)},openModal:(e=!0,t,o=!0)=>{var a;if(null==(a=n())||a.setModalProps({visible:e}),!t)return;const r=O(l);if(o)return Me[r]=null,void(Me[r]=re(t));se(re(Me[r]),re(t))||(Me[r]=re(t))},closeModal:()=>{var e;null==(e=n())||e.setModalProps({visible:!1})}}]}const Oe=e=>{const t=T(null),l=ee(),n=T(""),o=()=>{const e=O(t);return e||M("useModalInner instance is undefined!"),e};return S((()=>{const t=Me[O(n)];t&&e&&v(e)&&E((()=>{e(t)}))})),[(e,o)=>{ie((()=>{t.value=null})),n.value=o,t.value=e,null==l||l.emit("register",e,o)},{changeLoading:(e=!0)=>{var t;null==(t=o())||t.setModalProps({loading:e})},getVisible:N((()=>Fe[~~O(n)])),changeOkLoading:(e=!0)=>{var t;null==(t=o())||t.setModalProps({confirmLoading:e})},closeModal:()=>{var e;null==(e=o())||e.setModalProps({visible:!1})},setModalProps:e=>{var t;null==(t=o())||t.setModalProps(e)},redoModalHeight:()=>{var e;const t=null==(e=o())?void 0:e.redoModalHeight;t&&t()}}]},ke=F(He);export{ke as B,Oe as a,Se as b,me as u};
