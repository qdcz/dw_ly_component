"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),ot=(t,n)=>(t.install=function(s){if(t){const a=t.name||t.__name;if(a||n){const r=n?`dw-${n}`:"dw-"+a.replace(/dw/gi,"").toLowerCase();s.component(r,t)}else console.error(t,n,!n)}},t),lt=t=>Array.isArray(t);function $(t){const n=`vi-${t}`;return{n:r=>r?r.startsWith("-")?`${n}${r}`:`${n}_${r}`:n,classes:(...r)=>r.map(c=>{if(lt(c)){const[u,m,g=null]=c;return u?m:g}return c})}}var B=(t=>(t.AUTHROLL="autoRoll",t.HANDMOVE="handRoll",t))(B||{});const G={header:{type:Array,default:[]},showHeader:{type:Boolean,default:!0},itemHeight:{type:[String],default:"40px"},showCount:{type:[Number],default:8},rollCount:{type:[Number],default:1},attractShowCount:{type:Array,default:[3,4]},rollType:{type:String,default:"autoRoll",validator:function(t){return Object.values(B).includes(t)}},loopTime:{type:Number,default:1e3*2},scrollTransition:{type:Number,default:1e3*.8},tmp_scaleRule:{type:Array,default:[1.3,1]},scaleRule:{type:[Number,Array],default:[1.5,1,.8]},modelValue:{type:Array,default:[]},dynamicCss:{type:Object,default:()=>({"box-width":"800","th-pad-tb":"10","th-bg-color":"rgb(179, 210, 224)","th-fo-color":"rgb(90, 99, 110)","th-fo-size":"16","th-fo-weight":"900","th-radius-lt":"8","th-radius-rt":"8","th-radius-lb":"0","th-radius-rb":"0","tr-hover-bg-color":"rgb(132 176 212 / 80%)","tr-hover-transition":"0.3","tr-attract-bg-color-style":"single","tr-attract-bg-color-to":"#00DEFF","tr-attract-bg-color-from":"#FFFFFF","tr-attract-bg-color-angle":"135","tr-attract-bg-color-value":"rgb(211, 228, 242)","tr-un-attract-bg-color":"rgb(235, 235, 235)","td-pad-lr":"20","td-pad-tb":"0","longText-txt-gap":"30","longText-sco-ani-name":"longTextScrollAnimation","longText-sco-ani-dura":"15"})}},P=function(t,n){for(let[s,a]of Object.entries(n.value))t.style.setProperty("--"+s,a)},z={mounted(t,n){P(t,n)},updated(t,n){P(t,n)},install(t){t.directive("Css",this)}},{n:rt}=$(""),st=(t=rt())=>t+"xxxxxxxx".replace(/[xy]/g,function(n){var s=0|16*Math.random(),a=n=="x"?s:8|3&s;return a.toString(16)});class it{constructor(n=[],s=7){this.list=n,this.severalGroups=s,this.windowSliding=new Array(this.severalGroups).fill(0).map((a,r)=>r)}take(n){return this.Sliding(n),this.show()}show(){return this.windowSliding.map(n=>this.list[n])}Sliding(n){this.windowSliding=this.windowSliding.map(s=>{const a=this.list.length,r=s+n;return r<=a-1?r:r-a})}}const M=function(t){const n=t instanceof Array?[]:{};for(let s in t)n[s]=typeof t[s]=="object"?M(t[s]):t[s];return n};function at(t,n="top",s,a,r){const c=n=="top"?t.scrollTop:n=="left"?t.scrollLeft:0,u=s-c,m=performance.now();function g(){const v=performance.now()-m,i=S(v,c,u,a);n=="top"?t.scrollTop=i:n=="left"&&(t.scrollLeft=i),v<a?requestAnimationFrame(g):r&&r()}function S(f,v,i,L){return f/=L/2,f<1?i/2*f*f+v:(f--,-i/2*(f*(f-2)-1)+v)}requestAnimationFrame(g)}function ct(){let t=new Date().getTime();return typeof performance<"u"&&typeof performance.now=="function"&&(t+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,s=>{const a=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(s==="x"?a:a&3|8).toString(16)})}function ut(t){const n={};return t.map(s=>{const{__id:a,...r}=s,c=JSON.stringify(r);if(!n[c])return n[c]=!0,s;const u=ct();return{...s,__id:u}})}const{n:q}=$("long-text"),E={text:{type:String,default:"这是一个默认文本"},speed:{type:Number,default:1e3},dynamicCss:{type:Object,default:()=>({"txt-gap":"22","sco-ani-name":"longTextScrollAnimation","sco-ani-dura":"10"})}},j=e.defineComponent({name:"LongText",emits:["update:text"],props:E,directives:{css:z},setup(t,n){var v;const a="onUpdate:modelValue"in(((v=e.getCurrentInstance())==null?void 0:v.vnode.props)||{}),r=e.ref(null),c=e.ref(null),u=e.ref(null),m=e.ref(null),g=e.reactive({isScroll:!0,toolTip_x:0,toolTip_y:0,toolTip_content:"盎司附近拉萨解放了卡JFK垃圾地方"}),S=e.computed(()=>Object.assign(E.dynamicCss.default(),t.dynamicCss)),f=e.computed({get(){return g.isScroll=!0,t.text},set(i){a&&n.emit("update:text",i)}});return e.onMounted(()=>{e.watchEffect(()=>{e.nextTick(()=>{const i=r.value.clientWidth,V=u.value.offsetWidth;i>=V&&(g.isScroll=!1)})})}),()=>e.withDirectives(e.createVNode("div",{class:[q(""),"tooltip"],"data-tooltip":"这是一个 tooltip",ref:r},[e.createVNode("div",{class:q("_scroll"),ref:c},[e.createVNode("span",{ref:u,class:g.isScroll?"startAnimation":""},[f.value]),g.isScroll?e.createVNode("span",null,[e.createVNode("span",{class:"seizeASeat"},null),e.createVNode("span",{ref:m,class:"startAnimation"},[f.value]),e.createVNode("span",{class:"seizeASeat"},null)]):""])]),[[e.resolveDirective("css"),S.value||{}]])}}),{n:C}=$("roll-list"),dt=e.defineComponent({name:"RollList",emits:["update:modelValue","rowClick"],directives:{css:z},props:G,components:{LongText:j},setup(t,n){var O;const a="onUpdate:modelValue"in(((O=e.getCurrentInstance())==null?void 0:O.vnode.props)||{}),r=e.reactive({uuid:st(C("-")),takeFlag:!1,rotationTimer:null,getInventedListDataBridgeInit:!1}),c=e.ref(null),u=e.ref();let m=0,g=!1,S=null;const f={longText:"longText"},v=l=>{l.preventDefault()},i=e.computed(()=>Object.assign(G.dynamicCss.default(),t.dynamicCss)),L=e.computed(()=>{let l={};for(let o in i.value)o.includes("longText")&&(l[o.replace("longText-","")]=i.value[o]);return l}),V=e.computed(()=>t.header),R=()=>{var l;for(let o=0;o<((l=u.value)==null?void 0:l.children.length);o++){const d=u.value.children[o],{attractShowCount:x,header:h,tmp_scaleRule:y}=t;if(x.includes(o))if(i.value["tr-attract-bg-color-style"]=="double"){const b=i.value["tr-attract-bg-color-angle"],w=i.value["tr-attract-bg-color-from"],p=i.value["tr-attract-bg-color-to"];d.style.background=`linear-gradient(${b}deg,${w},${p})`}else d.style.background=i.value["tr-attract-bg-color-value"];else d.style.background=i.value["tr-un-attract-bg-color"];Array.from(d.children).forEach((T,b)=>{T.style.flexBasis=h[b].basis+"%",x.includes(o)?T.style.transform=`scale(${y[0]})`:T.style.transform=`scale(${y[1]})`})}},A=()=>{if(r.rotationTimer&&(clearInterval(r.rotationTimer),r.rotationTimer=null),t.rollType==B.AUTHROLL){if(g)return;r.rotationTimer=k.value.length>t.showCount&&setInterval(()=>{e.nextTick(()=>{X()})},t.loopTime)}},k=e.computed({get(){return S=new it(M(t.modelValue),t.showCount*2),e.nextTick(()=>{R()}),t.modelValue},set(l){a&&n.emit("update:modelValue",l)}}),K=e.computed(()=>{if(r.takeFlag=!r.takeFlag,t.modelValue.length>t.showCount){const l=r.getInventedListDataBridgeInit?t.rollCount:(r.getInventedListDataBridgeInit=!0)&&0;return ut(S.take(l))}else return new Array(t.modelValue.length).fill(0).map((l,o)=>k.value[o])}),Q=e.computed(()=>{let l=k.value.length;const o=Number(t.itemHeight.replace("px","")),d=l<=t.showCount?l:t.showCount;return o*d+"px"});e.onMounted(()=>{A(),e.watch(()=>t.rollType,()=>A()),e.watch(()=>t.loopTime,()=>A()),e.watch(()=>k.value,()=>{A()})}),e.onUnmounted(()=>{});const X=()=>{var x;const l=c==null?void 0:c.value,o=t.rollCount<=t.showCount?t.rollCount:t.showCount,d=l.scrollHeight-l.clientHeight;m=m+d/t.showCount*o;for(let h=0;h<((x=u.value)==null?void 0:x.children.length);h++){const y=u.value.children[h],{attractShowCount:N,header:T,tmp_scaleRule:b}=t,w=N.map(p=>p+o).includes(h);if(w)if(i.value["tr-attract-bg-color-style"]=="double"){const _=i.value["tr-attract-bg-color-angle"],I=i.value["tr-attract-bg-color-from"],F=i.value["tr-attract-bg-color-to"];y.style.background=`linear-gradient(${_}deg,${I},${F})`}else y.style.background=i.value["tr-attract-bg-color-value"];else y.style.background=i.value["tr-un-attract-bg-color"];Array.from(y.children).forEach((p,_)=>{p.style.flexBasis=T[_].basis+"%",w?p.style.transform=`scale(${b[0]})`:p.style.transform=`scale(${b[1]})`})}at(l,"top",m,t.scrollTransition,()=>{r.takeFlag=!r.takeFlag,l.scrollTop=0,m=0,e.nextTick(()=>{R()})})},H=()=>{g=!0,r.rotationTimer&&(clearInterval(r.rotationTimer),r.rotationTimer=null)},Y=()=>{g=!1,A()},Z=function(l){n.emit&&n.emit("rowClick",l)};e.onUnmounted(()=>{H(),r.rotationTimer=null});const D=()=>t.showHeader?e.createVNode("div",{class:C("_th")},[V.value.map(l=>e.createVNode("div",{class:C("_td"),style:{flexBasis:l.basis+"%"}},[l.label]))]):"",tt=()=>e.createVNode("div",{ref:c,onWheel:v,class:C("_scroll"),style:{height:Q.value}},[e.createVNode("ul",{ref:u,class:C("_wrapper")},[K.value.map(l=>et(l))])]),et=l=>e.createVNode("li",{key:l.__id,style:{height:t.itemHeight},onClick:Z.bind(this,l)},[t.header.map((o,d)=>nt(l,o,d))]),nt=(l,o,d)=>{var h,y,N,T,b,w,p,_,I,F,U,W;let x={};return o.longText&&((h=o==null?void 0:o.longText)!=null&&h.speed&&(x["sco-ani-dura"]=o.longText.speed),(y=o.longText)!=null&&y.GPUSpee&&(x["sco-ani-name"]=((N=o==null?void 0:o.longText)==null?void 0:N.GPUSpee)==!0?"longTextScrollxAnimation3d":"longTextScrollxAnimation"),((T=o.longText)!=null&&T.txtGap||Number(o.longText.txtGap)==0)&&(x["txt-gap"]=o.longText.txtGap)),e.createVNode("div",{class:[C("_td")]},[e.createVNode("div",{class:[f[(b=V.value[d])==null?void 0:b.type]],style:{color:l[o.prop]?(w=o.fo)==null?void 0:w.color:"none",fontSize:l[o.prop]?((p=o.fo)==null?void 0:p.size)+"px":"auto",fontWeight:l[o.prop]?(_=o.fo)==null?void 0:_.weight:"0",fontFamily:l[o.prop]?(I=o.fo)==null?void 0:I.style:"none"}},[(F=V.value[d])!=null&&F.type&&((U=V.value[d])==null?void 0:U.type)=="longText"?e.createVNode(j,{style:{padding:"0 1px"},text:l[o.prop]||"undefined",speed:l[o.prop]?(W=o.longText)==null?void 0:W.speed:!1,dynamicCss:Object.assign(M(L.value),x)},null):l[o.prop]||"undefined"])])};return()=>e.withDirectives(e.createVNode("div",{class:C(),onMouseenter:H,onMouseleave:Y},[D(),tt()]),[[e.resolveDirective("css"),i.value||{}]])}}),J=ot(dt,"roll-list");exports.RollList=J;exports.default=J;
