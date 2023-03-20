(function(h,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(h=typeof globalThis<"u"?globalThis:h||self,e((h.dw=h.dw||{},h.dw["uiroll-list"]={}),h.Vue))})(this,function(h,e){"use strict";const Q=(t,n)=>(t.install=function(s){if(t){const a=t.name||t.__name;if(a||n){const o=n?`dw-${n}`:"dw-"+a.replace(/dw/gi,"").toLowerCase();s.component(o,t)}else console.error(t,n,!n)}},t),X=t=>Array.isArray(t);function N(t){const n=`vi-${t}`;return{n:o=>o?o.startsWith("-")?`${n}${o}`:`${n}_${o}`:n,classes:(...o)=>o.map(c=>{if(X(c)){const[u,m,g=null]=c;return u?m:g}return c})}}var _=(t=>(t.AUTHROLL="autoRoll",t.HANDMOVE="handRoll",t))(_||{});const F={header:{type:Array,default:[]},showHeader:{type:Boolean,default:!0},itemHeight:{type:[String],default:"40px"},showCount:{type:[Number],default:8},rollCount:{type:[Number],default:1},attractShowCount:{type:Array,default:[3,4]},rollType:{type:String,default:"autoRoll",validator:function(t){return Object.values(_).includes(t)}},loopTime:{type:Number,default:1e3*2},scrollTransition:{type:Number,default:1e3*1},tmp_scaleRule:{type:Array,default:[1.3,1]},scaleRule:{type:[Number,Array],default:[1.5,1,.8]},modelValue:{type:Array,default:[]},dynamicCss:{type:Object,default:()=>({"box-width":"800","th-pad-tb":"10","th-bg-color":"rgb(179, 210, 224)","th-fo-color":"rgb(90, 99, 110)","th-fo-size":"16","th-fo-weight":"900","th-radius-lt":"8","th-radius-rt":"8","th-radius-lb":"0","th-radius-rb":"0","tr-hover-bg-color":"rgb(132 176 212 / 80%)","tr-hover-transition":"0.3","tr-attract-bg-color-style":"single","tr-attract-bg-color-to":"#00DEFF","tr-attract-bg-color-from":"#FFFFFF","tr-attract-bg-color-angle":"135","tr-attract-bg-color-value":"rgb(211, 228, 242)","tr-un-attract-bg-color":"rgb(235, 235, 235)","td-pad-lr":"20","td-pad-tb":"0","longText-txt-gap":"30","longText-sco-ani-name":"longTextScrollAnimation","longText-sco-ani-dura":"15"})}},R=function(t,n){for(let[s,a]of Object.entries(n.value))t.style.setProperty("--"+s,a)},$={mounted(t,n){R(t,n)},updated(t,n){R(t,n)},install(t){t.directive("Css",this)}},{n:Y}=N(""),Z=(t=Y())=>t+"xxxxxxxx".replace(/[xy]/g,function(n){var s=0|16*Math.random(),a=n=="x"?s:8|3&s;return a.toString(16)});class D{constructor(n=[],s=7){this.list=n,this.severalGroups=s,this.windowSliding=new Array(this.severalGroups).fill(0).map((a,o)=>o)}take(n){return this.Sliding(n),this.show()}show(){return this.windowSliding.map(n=>this.list[n])}Sliding(n){this.windowSliding=this.windowSliding.map(s=>{const a=this.list.length,o=s+n;return o<=a-1?o:o-a})}}const I=function(t){const n=t instanceof Array?[]:{};for(let s in t)n[s]=typeof t[s]=="object"?I(t[s]):t[s];return n};function tt(t,n="top",s,a,o){const c=n=="top"?t.scrollTop:n=="left"?t.scrollLeft:0,u=s-c,m=performance.now();function g(){const i=performance.now()-m,p=A(i,c,u,a);n=="top"?t.scrollTop=p:n=="left"&&(t.scrollLeft=p),i<a?requestAnimationFrame(g):o&&o()}function A(f,i,p,S){return f/=S/2,f<1?p/2*f*f+i:(f--,-p/2*(f*(f-2)-1)+i)}requestAnimationFrame(g)}function et(){let t=new Date().getTime();return typeof performance<"u"&&typeof performance.now=="function"&&(t+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,s=>{const a=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(s==="x"?a:a&3|8).toString(16)})}function nt(t){const n={};return t.map(s=>{const{__id:a,...o}=s,c=JSON.stringify(o);if(!n[c])return n[c]=!0,s;const u=et();return{...s,__id:u}})}const{n:M}=N("long-text"),E={text:{type:String,default:"这是一个默认文本"},speed:{type:Number,default:1e3},dynamicCss:{type:Object,default:()=>({"txt-gap":"22","sco-ani-name":"longTextScrollAnimation","sco-ani-dura":"10"})}},H=e.defineComponent({name:"LongText",emits:["update:text"],props:E,directives:{css:$},setup(t,n){var i;const a="onUpdate:modelValue"in(((i=e.getCurrentInstance())==null?void 0:i.vnode.props)||{}),o=e.ref(null),c=e.ref(null),u=e.ref(null),m=e.ref(null),g=e.reactive({isScroll:!0,toolTip_x:0,toolTip_y:0,toolTip_content:"盎司附近拉萨解放了卡JFK垃圾地方"}),A=e.computed(()=>Object.assign(E.dynamicCss.default(),t.dynamicCss)),f=e.computed({get(){return g.isScroll=!0,t.text},set(p){a&&n.emit("update:text",p)}});return e.onMounted(()=>{e.watchEffect(()=>{if(o.value&&u.value){const p=o.value.clientWidth,k=u.value.offsetWidth;p>=k&&(g.isScroll=!1)}})}),()=>e.withDirectives(e.createVNode("div",{class:[M(""),"tooltip"],"data-tooltip":"这是一个 tooltip",ref:o},[e.createVNode("div",{class:M("_scroll"),ref:c},[e.createVNode("span",{ref:u,class:g.isScroll?"startAnimation":""},[f.value]),g.isScroll?e.createVNode("span",null,[e.createVNode("span",{class:"seizeASeat"},null),e.createVNode("span",{ref:m,class:"startAnimation"},[f.value]),e.createVNode("span",{class:"seizeASeat"},null)]):""])]),[[e.resolveDirective("css"),A.value||{}]])}}),{n:C}=N("roll-list"),O=Q(e.defineComponent({name:"RollList",emits:["update:modelValue","rowClick"],directives:{css:$},props:F,components:{LongText:H},setup(t,n){var q;const a="onUpdate:modelValue"in(((q=e.getCurrentInstance())==null?void 0:q.vnode.props)||{}),o=e.reactive({uuid:Z(C("-")),takeFlag:!1,rotationTimer:null,getInventedListDataBridgeInit:!1}),c=e.ref(null),u=e.ref();let m=0,g=null;const A={longText:"longText"},f=r=>{r.preventDefault()},i=e.computed(()=>Object.assign(F.dynamicCss.default(),t.dynamicCss)),p=e.computed(()=>{let r={};for(let l in i.value)l.includes("longText")&&(r[l.replace("longText-","")]=i.value[l]);return r}),S=e.computed(()=>t.header),k=()=>{var r;for(let l=0;l<((r=u.value)==null?void 0:r.children.length);l++){const d=u.value.children[l],{attractShowCount:w,header:y,tmp_scaleRule:x}=t;w.includes(l)?(i.value["tr-attract-bg-color-style"]=="double"?d.style.background=`linear-gradient(${i.value["tr-attract-bg-color-angle"]}deg,${i.value["tr-attract-bg-color-from"]},${i.value["tr-attract-bg-color-to"]})`:d.style.background=i.value["tr-attract-bg-color-value"],Array.from(d.children).forEach((T,v)=>{T.style.transform=`scale(${x[0]})`,T.style.flexBasis=y[v].basis+"%"})):(d.style.background=i.value["tr-un-attract-bg-color"],Array.from(d.children).forEach((T,v)=>{T.style.transform=`scale(${x[1]})`,T.style.flexBasis=y[v].basis+"%"}))}},B=e.computed({get(){return g=new D(I(t.modelValue),t.showCount*2),e.nextTick(()=>{k()}),t.modelValue},set(r){a&&n.emit("update:modelValue",r)}}),ot=e.computed(()=>{if(o.takeFlag=!o.takeFlag,t.modelValue.length>t.showCount){const r=o.getInventedListDataBridgeInit?t.rollCount:(o.getInventedListDataBridgeInit=!0)&&0;return nt(g.take(r))}else return new Array(t.modelValue.length).fill(0).map((r,l)=>B.value[l])}),lt=e.computed(()=>{let r=B.value.length;const l=Number(t.itemHeight.replace("px","")),d=r<=t.showCount?r:t.showCount;return l*d+"px"}),U=function(){clearInterval(o.rotationTimer)},W=function(){o.rotationTimer&&(clearInterval(o.rotationTimer),o.rotationTimer=null)};window.addEventListener("blur",U),window.addEventListener("focus",W),e.onMounted(()=>{e.watchEffect(()=>{o.rotationTimer&&(clearInterval(o.rotationTimer),o.rotationTimer=null),t.rollType==_.AUTHROLL&&(o.rotationTimer=B.value.length>t.showCount&&setInterval(()=>{rt()},t.loopTime))})}),e.onUnmounted(()=>{document.removeEventListener("blur",U),document.removeEventListener("focus",W)});const rt=()=>{var w;const r=c==null?void 0:c.value,l=t.rollCount<=t.showCount?t.rollCount:t.showCount,d=r.scrollHeight-r.clientHeight;m=m+d/t.showCount*l;for(let y=0;y<((w=u.value)==null?void 0:w.children.length);y++){const x=u.value.children[y],{rollCount:T,attractShowCount:v,header:L}=t;v.map(b=>b+T).includes(y)?(i.value["tr-attract-bg-color-style"]=="double"?x.style.background=`linear-gradient(${i.value["tr-attract-bg-color-angle"]}deg,${i.value["tr-attract-bg-color-from"]},${i.value["tr-attract-bg-color-to"]})`:x.style.background=i.value["tr-attract-bg-color-value"],Array.from(x.children).forEach((b,V)=>{b.style.flexBasis=L[V].basis+"%",b.style.transform=`scale(${t.tmp_scaleRule[0]})`})):(x.style.background=i.value["tr-un-attract-bg-color"],Array.from(x.children).forEach((b,V)=>{b.style.flexBasis=L[V].basis+"%",b.style.transform=`scale(${t.tmp_scaleRule[1]})`}))}tt(r,"top",m,t.scrollTransition,()=>{o.takeFlag=!o.takeFlag,r.scrollTop=0,m=0})},P=()=>{o.rotationTimer&&clearInterval(o.rotationTimer)},st=()=>{o.rotationTimer=null},it=function(r){n.emit&&n.emit("rowClick",r)};e.onUnmounted(()=>{P(),o.rotationTimer=null});const at=()=>t.showHeader?e.createVNode("div",{class:C("_th")},[S.value.map(r=>e.createVNode("div",{class:C("_td"),style:{flexBasis:r.basis+"%"}},[r.label]))]):"",ct=()=>e.createVNode("div",{ref:c,onWheel:f,class:C("_scroll"),style:{height:lt.value}},[e.createVNode("ul",{ref:u,class:C("_wrapper")},[ot.value.map(r=>ut(r))])]),ut=r=>e.createVNode("li",{key:r.__id,style:{height:t.itemHeight},onClick:it.bind(this,r)},[t.header.map((l,d)=>dt(r,l,d))]),dt=(r,l,d)=>{var y,x,T,v,L,b,V,j,G,z,J,K;let w={};return l.longText&&((y=l==null?void 0:l.longText)!=null&&y.speed&&(w["sco-ani-dura"]=l.longText.speed),(x=l.longText)!=null&&x.GPUSpee&&(w["sco-ani-name"]=((T=l==null?void 0:l.longText)==null?void 0:T.GPUSpee)==!0?"longTextScrollxAnimation3d":"longTextScrollxAnimation"),((v=l.longText)!=null&&v.txtGap||Number(l.longText.txtGap)==0)&&(w["txt-gap"]=l.longText.txtGap)),e.createVNode("div",{class:[C("_td")]},[e.createVNode("div",{class:[A[(L=S.value[d])==null?void 0:L.type]],style:{color:r[l.prop]?(b=l.fo)==null?void 0:b.color:"none",fontSize:r[l.prop]?((V=l.fo)==null?void 0:V.size)+"px":"auto",fontWeight:r[l.prop]?(j=l.fo)==null?void 0:j.weight:"0",fontFamily:r[l.prop]?(G=l.fo)==null?void 0:G.style:"none"}},[(z=S.value[d])!=null&&z.type&&((J=S.value[d])==null?void 0:J.type)=="longText"?e.createVNode(H,{text:r[l.prop]||"undefined",speed:r[l.prop]?(K=l.longText)==null?void 0:K.speed:!1,dynamicCss:Object.assign(I(p.value),w)},null):r[l.prop]||"undefined"])])};return()=>e.withDirectives(e.createVNode("div",{class:C(),onMouseenter:P,onMouseleave:st},[at(),ct()]),[[e.resolveDirective("css"),i.value||{}]])}}),"roll-list");h.RollList=O,h.default=O,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
