this.dw=this.dw||{};this.dw["uiscroll-bar"]=function(X,t){"use strict";const z=(r,a)=>(r.install=function(u){if(r){const m=r.name||r.__name;if(m||a){const n=a?`dw-${a}`:"dw-"+m.replace(/dw/gi,"").toLowerCase();u.component(n,r)}else console.error(r,a,!a)}},r),j=r=>Array.isArray(r);function H(r){const a=`vi-${r}`;return{n:n=>n?n.startsWith("-")?`${a}${n}`:`${a}_${n}`:a,classes:(...n)=>n.map(c=>{if(j(c)){const[w,e,d=null]=c;return w?e:d}return c})}}const _={height:{type:[String,Boolean],default:"300px"},width:{type:[String,Boolean],default:"auto"},thumbWidth:{type:String,default:"6px"},noResize:Boolean,dynamicCss:{type:Object,default:()=>({"thumb-bg-color":"#d9dfe3"})}};var f=(r=>(r.HORIZONTAL="horizontal",r.VERTICAL="vertical",r))(f||{});const D={type:{type:[String||f],default:"vertical"},height:{type:String,default:"100px"},width:{type:String,default:"6px"},ratioX:{type:String,default:"0px"},ratioY:{type:String,default:"0px"}},T=function(r,a){for(let[u,m]of Object.entries(a.value))r.style.setProperty("--"+u,m)},k={mounted(r,a){T(r,a)},updated(r,a){T(r,a)},install(r){r.directive("Css",this)}},V=Symbol("scroll-bar"),{n:Z}=H("scroll-bar__thumb"),F=t.defineComponent({name:"ScrollBar",emits:["update:height","update:width"],props:D,setup(r,a){const{thumbRatioY:u,thumbRatioX:m,thumbRatioYMaxRange:n,thumbRatioXMaxRange:c,wrapperInnerMaxiMoveProportionY:w,wrapperInnerMaxiMoveProportionX:e,scrollBarRef:d}=t.inject(V),y=t.ref(),p=t.reactive({mouseMoving:!1});let l=0,I=0,R=0,b=0,M=0,Y=0;const W=t.computed({get(){return r.height},set(i){a.emit&&a.emit("update:height",i)}}),S=t.computed({get(){return r.width},set(i){a.emit&&a.emit("update:width",i)}}),C=function(i){if(i=="vertical"){let s=0;const g=M;s=R<0?g+Math.abs(R):g-Math.abs(R),s<0&&(s=0),s>n.value&&(s=n.value),d.value.scrollTop=Math.abs(w.value*s)}else if(i=="horizontal"){let s=0;const g=Y;s=b<0?g+Math.abs(b):g-Math.abs(b),s<0&&(s=0),s>c.value&&(s=c.value),d.value.scrollLeft=Math.abs(e.value*s)}},B=function(i){p.mouseMoving=!0,M=Number(u.value.slice(11,-3)),Y=Number(m.value.slice(11,-3)),l=Number(i.clientY),I=Number(i.clientX)},N=function(i){R=l-i.clientY,b=I-i.clientX,C(r.type)};document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mousedown",B),l=0,I=0,R=0,b=0,M=0,Y=0,p.mouseMoving=!1});const P=i=>{document.addEventListener("mousedown",B),document.addEventListener("mousemove",N)};return()=>t.createVNode("div",{class:Z(),ref:y,style:{height:W.value,width:S.value,transform:r.type=="vertical"?r.ratioY:r.ratioX},onMousedown:P},null)}}),{n:x}=H("scroll-bar"),E=z(t.defineComponent({name:"ScrollBar",emits:["update:width","scroll"],directives:{css:k},props:_,components:{"scroll-bar-thumb":F},setup(r,a){let u=null;const m=o=>{g()},n=t.ref(),c=t.ref(),w=t.ref(),e=t.reactive({wrapperInnerRealHeight:0,wrapperInnerRealWidth:0,wrapperInnerMaxiMoveRangeY:0,wrapperInnerMaxiMoveRangeX:0,wrapperInnerMaxiMoveProportionY:0,wrapperInnerMaxiMoveProportionX:0,thumbHeightProportion:0,thumbWidthProportion:0,thumbHeight:"",thumbWidth:"",thumbRatioX:"",thumbRatioY:"",thumbRatioYMaxRange:0,thumbRatioXMaxRange:0,thumbRatioYProportion:0,thumbRatioXProportion:0,cacheContainerWidth:""});let d=t.ref(!1);t.watch(()=>r.noResize,o=>{o?u==null||u.disconnect():(u=new MutationObserver(m),t.nextTick(()=>{u.observe(c.value,{attributes:!0,childList:!0,subtree:!0})}))},{immediate:!0});const y=t.computed(()=>Object.assign(_.dynamicCss.default(),r.dynamicCss)),p=t.computed(()=>r.height),l=t.computed({get(){return e.cacheContainerWidth},set(o){e.cacheContainerWidth=o}}),I=t.computed({get(){return e.thumbHeight},set(o){e.thumbHeight=o}}),R=t.computed({get(){return e.thumbWidth},set(o){e.thumbWidth=o}}),b=t.computed({get(){return e.thumbRatioX},set(o){e.thumbRatioX=o}}),M=t.computed({get(){return e.thumbRatioY},set(o){e.thumbRatioY=o}}),Y=t.computed(()=>e.thumbRatioYMaxRange),W=t.computed(()=>e.thumbRatioXMaxRange),S=t.computed(()=>e.wrapperInnerMaxiMoveProportionY),C=t.computed(()=>e.wrapperInnerMaxiMoveProportionX),B=o=>{e.thumbRatioY=`translateY(${String(e.thumbRatioYProportion*o)+"px"})`},N=o=>{e.thumbRatioX=`translateX(${String(e.thumbRatioXProportion*o)+"px"})`},P=o=>{n.value.scrollTop=o},i=o=>{n.value.scrollLeft=o},s=(o,h)=>{P(o),i(h)},g=o=>{var h,v;e.wrapperInnerRealHeight=Number((h=c.value)==null?void 0:h.scrollHeight),e.wrapperInnerRealWidth=Number((v=c.value)==null?void 0:v.scrollWidth),e.wrapperInnerMaxiMoveRangeY=e.wrapperInnerRealHeight-Number(p.value.replace("px","")),e.wrapperInnerMaxiMoveRangeX=e.wrapperInnerRealWidth-Number(l.value.replace("px","")),e.thumbHeightProportion=Number(p.value.replace("px",""))/e.wrapperInnerRealHeight,e.thumbWidthProportion=Number(l.value.replace("px",""))/e.wrapperInnerRealWidth,e.thumbHeight=String(e.thumbHeightProportion*Number(p.value.replace("px","")))+"px",e.thumbWidth=String(e.thumbWidthProportion*Number(l.value.replace("px","")))+"px",e.thumbRatioYMaxRange=Number(p.value.replace("px",""))-Number(e.thumbHeight.replace("px","")),e.thumbRatioXMaxRange=Number(l.value.replace("px",""))-Number(e.thumbWidth.replace("px","")),e.thumbRatioYProportion=e.thumbRatioYMaxRange/e.wrapperInnerMaxiMoveRangeY,e.thumbRatioXProportion=e.thumbRatioXMaxRange/e.wrapperInnerMaxiMoveRangeX,e.wrapperInnerMaxiMoveProportionY=e.wrapperInnerMaxiMoveRangeY/e.thumbRatioYMaxRange,e.wrapperInnerMaxiMoveProportionX=e.wrapperInnerMaxiMoveRangeX/e.thumbRatioXMaxRange};t.onMounted(()=>{e.cacheContainerWidth=r.width,g()});const J=o=>{const h=o.target.scrollTop,v=o.target.scrollLeft;B(h),N(v),a.emit&&a.emit("scroll",v,h)},K=()=>{d.value=!0},q=()=>{d.value=!1};t.provide(V,{height:p,thumbRatioY:M,thumbRatioX:b,thumbRatioYMaxRange:Y,thumbRatioXMaxRange:W,wrapperInnerMaxiMoveProportionY:S,wrapperInnerMaxiMoveProportionX:C,scrollBarRef:n}),a.expose({setScrollTop:P,setScrollLeft:i,setScrollTo:s});const O=(o=f.VERTICAL)=>{if(r.width===!1||r.height===!1)return"";const h=e.wrapperInnerRealHeight,v=Number(r.height.replace("px","")),G=e.wrapperInnerRealWidth;if(o=="vertical")return v<h?t.createVNode(t.resolveComponent("scroll-bar-thumb"),{ref:w,type:o,height:I.value,width:r.thumbWidth,ratioX:b.value,ratioY:M.value,class:d.value?"show":"hide"},null):"";if(o=="horizontal"){let L=Number(l.value.replace("px",""));if(l.value=="auto"){const A=()=>{l.value="auto",t.nextTick(()=>{var $;L=Number(($=c.value)==null?void 0:$.clientWidth),l.value=L+"px",g()})};A(),window.onresize=()=>A()}else if(l.value)return L<G?t.createVNode(t.resolveComponent("scroll-bar-thumb"),{ref:w,type:o,height:r.thumbWidth,width:R.value,ratioX:b.value,ratioY:M.value,class:d.value?"show":"hide"},null):""}};return()=>{var o,h;return t.withDirectives(t.createVNode("div",{class:x(),style:{width:l.value},onMouseenter:K,onMouseleave:q},[t.createVNode("div",{class:x("_wrapper"),ref:n,style:{height:p.value,width:l.value},onScroll:J},[t.createVNode("div",{class:x("_view"),ref:c},[(h=(o=a.slots).default)==null?void 0:h.call(o)])]),t.createVNode("div",{class:[x("_bar"),"horizontal"]},[O(f.HORIZONTAL)]),t.createVNode("div",{class:[x("_bar"),"vertical"]},[O(f.VERTICAL)])]),[[t.resolveDirective("css"),y.value||{}]])}}}),"scroll-bar");return X.ScrollBar=E,X.default=E,Object.defineProperties(X,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),X}({},Vue);
