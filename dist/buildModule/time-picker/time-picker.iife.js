this.dw=this.dw||{};this.dw["uitime-picker"]=function($,e){"use strict";const G=(o,n)=>(o.install=function(f){if(o){const s=o.name||o.__name;if(s||n){const p=n?`dw-${n}`:"dw-"+s.replace(/dw/gi,"").toLowerCase();f.component(p,o)}else console.error(o,n,!n)}},o),ue=o=>Array.isArray(o);function T(o){const n=`vi-${o}`;return{n:p=>p?p.startsWith("-")?`${n}${p}`:`${n}_${p}`:n,classes:(...p)=>p.map(g=>{if(ue(g)){const[M,S,r=null]=g;return M?S:r}return g})}}const Q={clearable:{type:[String,Boolean],default:!1},isRange:{type:[String,Boolean],default:!1},disabledHours:{type:Array,default:[]},disabledMinutes:{type:Array,default:[]},disabledSeconds:{type:Array,default:[]},arrowControl:{type:[String,Boolean],default:""},placeholder:{type:String,default:"Arbitrary time"},startPlaceholder:String,endPlaceholder:String,modelValue:{type:[String,Number,Boolean],default:""},dynamicCss:{type:Object,default:()=>({"input-box-shadow-x":"0","input-box-shadow-y":"0","input-box-shadow-blur":"0","input-box-shadow-spread":"1","input-box-shadow-color":"#dcdfe6","input-hover-box-shadow-x":"0","input-hover-box-shadow-y":"0","input-hover-box-shadow-blur":"0","input-hover-box-shadow-spread":"1","input-hover-box-shadow-color":"#85a2dd","input-active-box-shadow-x":"0","input-active-box-shadow-y":"0","input-active-box-shadow-blur":"0","input-active-box-shadow-spread":"1","input-active-box-shadow-color":"rgb(0, 94, 255)","input-border-radius":"4","input-line-padding-t":"0","input-line-padding-r":"28","input-line-padding-b":"0","input-line-padding-l":"8","input-bg-color":"rgba(255,255,255)","input-fo-color":"#606266","input-fo-size":"12","input-fo-weight":"600","input-line-height":"30","input-width":"200","input-text-alight":"start","input-icon-width":"12","input-icon-color":"#000","input-icon-hover-color":"#008cc8","input-placeholder-fo-color":"gray","popper-bg-color":"#fff","popper-height":"228","popper-border-radius":"8","popper-z-index":"999","popper-box-shadow-x":"0","popper-box-shadow-y":"0","popper-box-shadow-blur":"12","popper-box-shadow-spread":"0","popper-box-shadow-color":"rgba(0, 0, 0, 0.12)","popper-arrow-height":"5","popper-panel-padding-t":"8","popper-panel-padding-r":"4","popper-panel-padding-b":"0","popper-panel-padding-l":"4","popper-footer-height":"36","popper-footer-fo-size":"12","popper-footer-border-top-width":"1","popper-footer-border-top-style":"solid","popper-footer-border-top-color":"rgb(228, 231, 237)","popper-footer-cancel-fo-color":"#303133","popper-footer-ok-fo-color":"skyblue","popper-footer-ok-fo-weight":"800","popper-footer-ok-margin-t":"0","popper-footer-ok-margin-r":"5","popper-footer-ok-margin-b":"0","popper-footer-ok-margin-l":"5","popper-footer-ok-padding-t":"0","popper-footer-ok-padding-r":"5","popper-footer-ok-padding-b":"0","popper-footer-ok-padding-l":"5","popper-spinner-pitch-box-border-top-width":"1","popper-spinner-pitch-box-border-top-style":"solid","popper-spinner-pitch-box-border-top-color":"#e4e7ed","popper-spinner-pitch-box-border-bottom-width":"1","popper-spinner-pitch-box-border-bottom-style":"solid","popper-spinner-pitch-box-border-bottom-color":"#e4e7ed","popper-spinner-number-height":"32","popper-spinner-number-fo-color":"#606266","popper-spinner-number-fo-size":"12","popper-spinner-number-hover-bg-color":"#e0e0e0","popper-spinner-number-active-fo-color":"#000","popper-spinner-number-active-fo-weight":"700","popper-spinner-number-active-hover-bg-color":"rgba($color: #e0e0e0, $alpha: 0)","popper-spinner-number-disabled-fo-color":"rgb(223, 223, 223)","popper-spinner-number-disabled-hover-bg-color":"rgba($color: #e0e0e0, $alpha: 0)","scroll-bar-thumb-width":"8",scrollBarHeight:"60",scrollBarBgColor:"rgb(218, 218, 218)",scrollBarBgColorHover:"skyblue"})}},ee=Symbol("time-picker"),te=function(o,n){for(let[f,s]of Object.entries(n.value))o.style.setProperty("--"+f,s)},K={mounted(o,n){te(o,n)},updated(o,n){te(o,n)},install(o){o.directive("Css",this)}},{n:pe,classes:de}=T("input-svg-icon"),me=e.defineComponent({name:"VIInputSvgIcon",emits:["click"],props:{path:{type:String,default:`M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
            764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
            45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`},height:{type:[String,Number],default:"12px"},width:{type:[String,Number],default:"12px"},modelValue:{type:[String,Number,Boolean],default:""}},setup(o,n){const f=function(s){n.emit("click",s)};return()=>e.createVNode("svg",{class:[de(pe()),"icon"],height:o.height,width:o.width,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",onClick:f},[e.createVNode("path",{fill:"currentColor",d:o.path},null)])}}),oe={modelValue:{type:[String,Number,Array],default:""},showPassword:{type:[String,Boolean],default:!1},disabled:{type:[String,Boolean],default:!1},readonly:{type:[String,Boolean],default:!1},clearable:{type:[String,Boolean],default:!1},placeholder:{type:String,default:"请选择您需要的内容o(*￣▽￣*)ブ"},dynamicCss:{type:Object,default:()=>({"input-box-shadow-x":"0","input-box-shadow-y":"0","input-box-shadow-blur":"0","input-box-shadow-spread":"1","input-box-shadow-color":"#dcdfe6","input-hover-box-shadow-x":"0","input-hover-box-shadow-y":"0","input-hover-box-shadow-blur":"0","input-hover-box-shadow-spread":"1","input-hover-box-shadow-color":"#85a2dd","input-active-box-shadow-x":"0","input-active-box-shadow-y":"0","input-active-box-shadow-blur":"0","input-active-box-shadow-spread":"1","input-active-box-shadow-color":"rgb(0, 94, 255)","input-border-radius":"4","input-line-padding-t":"0","input-line-padding-r":"28","input-line-padding-b":"0","input-line-padding-l":"8","input-bg-color":"rgba(255,255,255)","input-fo-color":"#606266","input-fo-size":"12","input-fo-weight":"600","input-line-height":"30","input-width":"200","input-text-alight":"start","input-icon-width":"12","input-icon-color":"#000","input-icon-hover-color":"#008cc8","input-placeholder-fo-color":"gray"})}},{n:re,classes:he}=T("timePickerInput"),be=e.defineComponent({name:"VITimePickerInput",emits:["focus","blur","click","update:modelValue","close"],directives:{css:K},props:oe,components:{"vi-input-svg-icon":me},setup(o,n){const f="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z",s=e.reactive({softFocus:!1,isHover:!1}),p=function(h){m.value||n.emit("click",h)},g=function(h){m.value||(n.emit("update:modelValue",h.target.value),n.emit("close"),h.stopPropagation())},M=function(h){m.value||(n.emit("focus",h),s.softFocus=!0)},S=function(h){m.value||(n.emit("blur",h),s.softFocus=!1)},r=function(h){m.value||(s.isHover=!0)},N=function(h){m.value||(s.isHover=!1)},x=function(h){m.value||n.emit("update:modelValue",h.target.value)},i=function(h){m.value||n.emit("update:modelValue",h.target.value)},d=e.computed(()=>Object.assign(oe.dynamicCss.default(),o.dynamicCss)),y=e.computed(()=>typeof o.readonly=="string"?!0:o.readonly),V=e.computed(()=>typeof o.clearable=="string"?!0:o.clearable),C=e.computed(()=>typeof o.showPassword=="string"?!0:o.showPassword),m=e.computed(()=>typeof o.disabled=="string"?!0:o.disabled),P=e.computed(()=>s.softFocus?"active":"");return()=>e.withDirectives(e.createVNode("div",{class:[he(re()),P.value,m.value?"disabled":""],onClick:p,onMouseenter:r,onMouseleave:N},[e.createVNode("input",{class:[re("_inner")],placeholder:o.placeholder,onFocus:M,onBlur:S,readonly:y.value||m.value,value:o.modelValue,onChange:x,onInput:i,type:C.value?"password":"text"},null),o.modelValue&&V.value&&s.isHover?e.createVNode(e.resolveComponent("vi-input-svg-icon"),{class:"icon",height:d.value["input-icon-width"],width:d.value["input-icon-width"],path:f,onClick:g},null):""]),[[e.resolveDirective("css"),d.value||{}]])}}),{n:O,classes:ne}=T("popper"),fe=e.defineComponent({name:"VITimePickerPopper",emits:["focus","blur","click"],props:["active"],setup(o,n){let{timePickerRef:f}=e.inject(ee);const s=e.reactive({parentRect:{x:0,y:0,height:0,width:0},dropdownTop:"0"}),p=e.ref(null),g=e.ref(null),M=()=>{e.nextTick(()=>{s.parentRect=f.value.getBoundingClientRect(),s.dropdownTop=s.parentRect.height+10+"px"})};return e.onMounted(()=>M()),()=>{var S,r;return e.createVNode("div",{class:[O(""),o.active?"active":""],style:{top:s.dropdownTop}},[e.createVNode("div",{ref:p,class:[O("_arrow")]},[o.active]),e.createVNode("div",{ref:g,class:[ne(O("_content"))]},[e.createVNode("div",{class:[ne(O("_inner"))]},[(r=(S=n.slots).default)==null?void 0:r.call(S)])])])}}}),ie={height:{type:[String,Boolean],default:"300px"},width:{type:[String,Boolean],default:"auto"},thumbWidth:{type:String,default:"6px"},noResize:Boolean,dynamicCss:{type:Object,default:()=>({"thumb-bg-color":"#d9dfe3"})}};var L=(o=>(o.HORIZONTAL="horizontal",o.VERTICAL="vertical",o))(L||{});const ge={type:{type:[String||L],default:"vertical"},height:{type:String,default:"100px"},width:{type:String,default:"6px"},ratioX:{type:String,default:"0px"},ratioY:{type:String,default:"0px"}},ae=Symbol("scroll-bar"),{n:ve}=T("scroll-bar__thumb"),we=e.defineComponent({name:"ScrollBar",emits:["update:height","update:width"],props:ge,setup(o,n){const{thumbRatioY:f,thumbRatioX:s,thumbRatioYMaxRange:p,thumbRatioXMaxRange:g,wrapperInnerMaxiMoveProportionY:M,wrapperInnerMaxiMoveProportionX:S,scrollBarRef:r}=e.inject(ae),N=e.ref(),x=e.reactive({mouseMoving:!1});let i=0,d=0,y=0,V=0,C=0,m=0;const P=e.computed({get(){return o.height},set(v){n.emit&&n.emit("update:height",v)}}),h=e.computed({get(){return o.width},set(v){n.emit&&n.emit("update:width",v)}}),H=function(v){if(v=="vertical"){let b=0;const k=C;b=y<0?k+Math.abs(y):k-Math.abs(y),b<0&&(b=0),b>p.value&&(b=p.value),r.value.scrollTop=Math.abs(M.value*b)}else if(v=="horizontal"){let b=0;const k=m;b=V<0?k+Math.abs(V):k-Math.abs(V),b<0&&(b=0),b>g.value&&(b=g.value),r.value.scrollLeft=Math.abs(S.value*b)}},B=function(v){x.mouseMoving=!0,C=Number(f.value.slice(11,-3)),m=Number(s.value.slice(11,-3)),i=Number(v.clientY),d=Number(v.clientX)},_=function(v){y=i-v.clientY,V=d-v.clientX,H(o.type)};document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mousedown",B),i=0,d=0,y=0,V=0,C=0,m=0,x.mouseMoving=!1});const W=v=>{document.addEventListener("mousedown",B),document.addEventListener("mousemove",_)};return()=>e.createVNode("div",{class:ve(),ref:N,style:{height:P.value,width:h.value,transform:o.type=="vertical"?o.ratioY:o.ratioX},onMousedown:W},null)}}),{n:X}=T("scroll-bar"),Re=G(e.defineComponent({name:"ScrollBar",emits:["update:width","scroll"],directives:{css:K},props:ie,components:{"scroll-bar-thumb":we},setup(o,n){let s=null;const p=l=>{A()},g=e.ref(),M=e.ref(),S=e.ref(),r=e.reactive({wrapperInnerRealHeight:0,wrapperInnerRealWidth:0,wrapperInnerMaxiMoveRangeY:0,wrapperInnerMaxiMoveRangeX:0,wrapperInnerMaxiMoveProportionY:0,wrapperInnerMaxiMoveProportionX:0,thumbHeightProportion:0,thumbWidthProportion:0,thumbHeight:"",thumbWidth:"",thumbRatioX:"",thumbRatioY:"",thumbRatioYMaxRange:0,thumbRatioXMaxRange:0,thumbRatioYProportion:0,thumbRatioXProportion:0,cacheContainerWidth:""});let N=e.ref(!1);e.watch(()=>o.noResize,l=>{l?s==null||s.disconnect():(s=new MutationObserver(p),e.nextTick(()=>{s.observe(M.value,{attributes:!0,childList:!0,subtree:!0})}))},{immediate:!0});const x=e.computed(()=>Object.assign(ie.dynamicCss.default(),o.dynamicCss)),i=e.computed(()=>o.height),d=e.computed({get(){return r.cacheContainerWidth},set(l){r.cacheContainerWidth=l}}),y=e.computed({get(){return r.thumbHeight},set(l){r.thumbHeight=l}}),V=e.computed({get(){return r.thumbWidth},set(l){r.thumbWidth=l}}),C=e.computed({get(){return r.thumbRatioX},set(l){r.thumbRatioX=l}}),m=e.computed({get(){return r.thumbRatioY},set(l){r.thumbRatioY=l}}),P=e.computed(()=>r.thumbRatioYMaxRange),h=e.computed(()=>r.thumbRatioXMaxRange),H=e.computed(()=>r.wrapperInnerMaxiMoveProportionY),B=e.computed(()=>r.wrapperInnerMaxiMoveProportionX),_=l=>{r.thumbRatioY=`translateY(${String(r.thumbRatioYProportion*l)+"px"})`},W=l=>{r.thumbRatioX=`translateX(${String(r.thumbRatioXProportion*l)+"px"})`},v=l=>{g.value.scrollTop=l},b=l=>{g.value.scrollLeft=l},k=(l,c)=>{v(l),b(c)},A=l=>{var c,I;r.wrapperInnerRealHeight=Number((c=M.value)==null?void 0:c.scrollHeight),r.wrapperInnerRealWidth=Number((I=M.value)==null?void 0:I.scrollWidth),r.wrapperInnerMaxiMoveRangeY=r.wrapperInnerRealHeight-Number(i.value.replace("px","")),r.wrapperInnerMaxiMoveRangeX=r.wrapperInnerRealWidth-Number(d.value.replace("px","")),r.thumbHeightProportion=Number(i.value.replace("px",""))/r.wrapperInnerRealHeight,r.thumbWidthProportion=Number(d.value.replace("px",""))/r.wrapperInnerRealWidth,r.thumbHeight=String(r.thumbHeightProportion*Number(i.value.replace("px","")))+"px",r.thumbWidth=String(r.thumbWidthProportion*Number(d.value.replace("px","")))+"px",r.thumbRatioYMaxRange=Number(i.value.replace("px",""))-Number(r.thumbHeight.replace("px","")),r.thumbRatioXMaxRange=Number(d.value.replace("px",""))-Number(r.thumbWidth.replace("px","")),r.thumbRatioYProportion=r.thumbRatioYMaxRange/r.wrapperInnerMaxiMoveRangeY,r.thumbRatioXProportion=r.thumbRatioXMaxRange/r.wrapperInnerMaxiMoveRangeX,r.wrapperInnerMaxiMoveProportionY=r.wrapperInnerMaxiMoveRangeY/r.thumbRatioYMaxRange,r.wrapperInnerMaxiMoveProportionX=r.wrapperInnerMaxiMoveRangeX/r.thumbRatioXMaxRange};e.onMounted(()=>{r.cacheContainerWidth=o.width,A()});const U=l=>{const c=l.target.scrollTop,I=l.target.scrollLeft;_(c),W(I),n.emit&&n.emit("scroll",I,c)},J=()=>{N.value=!0},z=()=>{N.value=!1};e.provide(ae,{height:i,thumbRatioY:m,thumbRatioX:C,thumbRatioYMaxRange:P,thumbRatioXMaxRange:h,wrapperInnerMaxiMoveProportionY:H,wrapperInnerMaxiMoveProportionX:B,scrollBarRef:g}),n.expose({setScrollTop:v,setScrollLeft:b,setScrollTo:k});const F=(l=L.VERTICAL)=>{if(o.width===!1||o.height===!1)return"";const c=r.wrapperInnerRealHeight,I=Number(o.height.replace("px","")),j=r.wrapperInnerRealWidth;if(l=="vertical")return I<c?e.createVNode(e.resolveComponent("scroll-bar-thumb"),{ref:S,type:l,height:y.value,width:o.thumbWidth,ratioX:C.value,ratioY:m.value,class:N.value?"show":"hide"},null):"";if(l=="horizontal"){let D=Number(d.value.replace("px",""));if(d.value=="auto"){const Y=()=>{d.value="auto",e.nextTick(()=>{var E;D=Number((E=M.value)==null?void 0:E.clientWidth),d.value=D+"px",A()})};Y(),window.onresize=()=>Y()}else if(d.value)return D<j?e.createVNode(e.resolveComponent("scroll-bar-thumb"),{ref:S,type:l,height:o.thumbWidth,width:V.value,ratioX:C.value,ratioY:m.value,class:N.value?"show":"hide"},null):""}};return()=>{var l,c;return e.withDirectives(e.createVNode("div",{class:X(),style:{width:d.value},onMouseenter:J,onMouseleave:z},[e.createVNode("div",{class:X("_wrapper"),ref:g,style:{height:i.value,width:d.value},onScroll:U},[e.createVNode("div",{class:X("_view"),ref:M},[(c=(l=n.slots).default)==null?void 0:c.call(l)])]),e.createVNode("div",{class:[X("_bar"),"horizontal"]},[F(L.HORIZONTAL)]),e.createVNode("div",{class:[X("_bar"),"vertical"]},[F(L.VERTICAL)])]),[[e.resolveDirective("css"),x.value||{}]])}}}),"scroll-bar"),{n:Me,classes:Se}=T("time-picker"),le=G(e.defineComponent({name:"VITimePicker",emits:["click","inputClick","closeClick","cancelClick","okClick","update:modelValue","focus","blur"],directives:{css:K},props:Q,components:{"vi-time-picker-input":be,"vi-time-picker-popper":fe,"vi-scroll-bar":Re},setup(o,n){const f=[null,null,null];let s="";const p=t=>t<10?"0"+t:t+"",g=t=>{const a=t.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);return a||console.warn("初始化数据格式不符合规范,已被清空！"),a},M=()=>"xxxxxxxx".replace(/[xy]/g,function(t){var a=0|16*Math.random(),u=t=="x"?a:8|3&a;return u.toString(16)}),S=e.ref();let r=e.ref(),N=e.ref(),x=e.ref();const i=e.reactive({uuid:M(),popperVisible:!1,softFocus:!1,isSubmit:!1,hourList:[],minuteList:[],secondList:[],currentSelect:["","",""]}),d=function(){i.popperVisible=!1,i.softFocus=!1},y=function(t){let a=!1;const u=t.path||t.composedPath&&t.composedPath();for(let R=0;R<u.length;R++){const w=u[R];if(w.classList&&w.classList.value&&w.getAttribute("class").includes("-time-picker")&&w.dataset.id==i.uuid){a=!0;break}}a||(d(),i.isSubmit=!0)};document.addEventListener("mousedown",y);const V=function(t){n.emit&&n.emit("focus")},C=function(t){n.emit&&n.emit("blur")},m=function(){n.emit&&n.emit("click")},P=function(t){i.popperVisible=!i.popperVisible,i.isSubmit=!1,o.modelValue||F(),n.emit&&n.emit("inputClick")},h=function(){i.popperVisible=!1,n.emit&&n.emit("closeClick")},H=function(t){const{type:a}=t.target.dataset;i.popperVisible=!1,a=="cancel"?(i.isSubmit=!1,n.emit&&n.emit("update:modelValue",s),n.emit&&n.emit("cancelClick"),z()):a=="ok"&&(i.isSubmit=!0,n.emit&&n.emit("okClick",i.currentSelect))},B=function(t,a){const u={index:{hour:"0",minute:"1",second:"2"},ref:{hour:r,minute:N,second:x}},{num:R,disabled:w}=a.dataset;if(R){if(w=="true")return;i.currentSelect[u.index[t]]=R;const Z=Number(i.currentSelect[u.index[t]])*Number(c.value["popper-spinner-number-height"]);u.ref[t].value.setScrollTop(Z)}},_=function(t){B("hour",t.target)},W=function(t){B("minute",t.target)},v=function(t){B("second",t.target)},b=function(t,a){const u={timers:{hour:0,minute:1,second:2},ableRange:{hour:"disabledHours",minute:"disabledMinutes",second:"disabledSeconds"}};let w=Math.round(t/Number(c.value["popper-spinner-number-height"]));if(o[u.ableRange[a]].filter(Ne=>Ne==w).length>0)return;i.currentSelect[u.timers[a]]=p(w);let q=w*Number(c.value["popper-spinner-number-height"]);f[u.timers[a]]&&(clearTimeout(f[u.timers[a]]),f[u.timers[a]]=null),f[u.timers[a]]=setTimeout(()=>{a=="hour"&&r.value.setScrollTop(q),a=="minute"&&N.value.setScrollTop(q),a=="second"&&x.value.setScrollTop(q)},200)},k=function(t,a){b(a,"hour")},A=function(t,a){b(a,"minute")},U=function(t,a){b(a,"second")},J=()=>{i.hourList=new Array(24).fill(0).map((t,a)=>a<10?"0"+a:a+""),i.minuteList=new Array(60).fill(0).map((t,a)=>a<10?"0"+a:a+""),i.secondList=new Array(60).fill(0).map((t,a)=>a<10?"0"+a:a+"")},z=function(){s&&(r.value.setScrollTop(Number(s.slice(0,2))*Number(c.value["popper-spinner-number-height"])),N.value.setScrollTop(Number(s.slice(3,5))*Number(c.value["popper-spinner-number-height"])),x.value.setScrollTop(Number(s.slice(6,8))*Number(c.value["popper-spinner-number-height"])))},F=()=>{const t=new Date,a=t.getHours(),u=t.getMinutes(),R=t.getSeconds();i.currentSelect[0]=p(a),i.currentSelect[1]=p(u),i.currentSelect[2]=p(R),r.value.setScrollTop(Number(i.currentSelect[0])*Number(c.value["popper-spinner-number-height"])),N.value.setScrollTop(Number(i.currentSelect[1])*Number(c.value["popper-spinner-number-height"])),x.value.setScrollTop(Number(i.currentSelect[2])*Number(c.value["popper-spinner-number-height"])),n.emit&&n.emit("update:modelValue",i.currentSelect[0]+":"+i.currentSelect[1]+":"+i.currentSelect[2])},l=function(){if(o.modelValue&&g(o.modelValue)){const t=o.modelValue.split(":"),a=o.disabledHours.findIndex(w=>w==t[0])!=-1,u=o.disabledMinutes.findIndex(w=>w==t[1])!=-1,R=o.disabledSeconds.findIndex(w=>w==t[2])!=-1;if(a||u||R)return console.warn("输入的值包含禁用项,已被清空"),n.emit&&n.emit("update:modelValue",""),!0}return!1};e.onBeforeMount(()=>{if(o.modelValue&&g(o.modelValue)&&!l()){const t=o.modelValue.split(":");i.currentSelect[0]=t[0],i.currentSelect[1]=t[1],i.currentSelect[2]=t[2],s=o.modelValue}}),e.onMounted(()=>{J(),e.nextTick(()=>{z()})});const c=e.computed(()=>Object.assign(Q.dynamicCss.default(),o.dynamicCss)),I=e.computed(()=>{const t={};for(const a in c.value)a.includes("input")&&(t[a]=c.value[a]);return t}),j=e.computed({get(){return l(),o.modelValue},set(t){n.emit&&n.emit("update:modelValue",t)}}),D=e.computed(()=>o.clearable),Y=function(t,a){const u={hour:"disabledHours",minute:"disabledMinutes",second:"disabledSeconds"};let R=!1;return o[u[t]].forEach(w=>w==a?R=!0:""),R},E=e.computed(()=>function(t){return Y("hour",t)}),se=e.computed(()=>function(t){return Y("minute",t)}),ce=e.computed(()=>function(t){return Y("second",t)});return e.watchEffect(()=>{const t=i.currentSelect[0],a=i.currentSelect[1],u=i.currentSelect[2];if(!t&&!a&&!u){n.emit&&n.emit("update:modelValue","");return}const R=t+":"+a+":"+u;n.emit&&n.emit("update:modelValue",R)}),e.watchEffect(()=>{i.isSubmit&&(s=o.modelValue,n.emit&&n.emit("update:modelValue",s))}),e.provide(ee,{timePickerRef:S}),()=>e.withDirectives(e.createVNode("div",{ref:S,"data-id":i.uuid,class:[Se(Me())],onClick:m},[e.createVNode(e.resolveComponent("vi-time-picker-input"),{placeholder:o.placeholder,modelValue:j.value,"onUpdate:modelValue":t=>j.value=t,onFocus:V,onBlur:C,onClose:h,dynamicCss:I.value||{},clearable:D.value,readonly:!0,onClick:P},null),e.createVNode(e.resolveComponent("vi-time-picker-popper"),{active:i.popperVisible},{default:()=>[e.createVNode("div",{class:"time-panel"},[e.createVNode("div",{class:"time-panel__content"},[e.createVNode(e.resolveComponent("vi-scroll-bar"),{ref:r,class:"time-panel__spinner time-panel__popper-spinner--hour",onScroll:k,height:Number(c.value["popper-spinner-number-height"])*6+"px"},{default:()=>[e.createVNode("ul",{onClick:_},[i.hourList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":E.value(Number(t)),class:[i.currentSelect[0]==t?"active":"",E.value(Number(t))?"disabled":""]},[t]))])]}),e.createVNode(e.resolveComponent("vi-scroll-bar"),{ref:N,class:"time-panel__spinner time-panel__popper-spinner--minutes",onScroll:A,height:Number(c.value["popper-spinner-number-height"])*6+"px"},{default:()=>[e.createVNode("ul",{onClick:W},[i.minuteList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":se.value(Number(t)),class:[i.currentSelect[1]==t?"active":"",se.value(Number(t))?"disabled":""]},[t]))])]}),e.createVNode(e.resolveComponent("vi-scroll-bar"),{ref:x,class:"time-panel__spinner time-panel__popper-spinner--second",onScroll:U,height:Number(c.value["popper-spinner-number-height"])*6+"px"},{default:()=>[e.createVNode("ul",{onClick:v},[i.secondList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":ce.value(Number(t)),class:[i.currentSelect[2]==t?"active":"",ce.value(Number(t))?"disabled":""]},[t]))])]})]),e.createVNode("div",{class:"time-panel__footer",onClick:H},[e.createVNode("div",{"data-type":"cancel",class:"time-panel__footer_cancel"},[e.createTextVNode("取消")]),e.createVNode("div",{"data-type":"ok",class:"time-panel__footer_ok"},[e.createTextVNode("确认")])])])]})]),[[e.resolveDirective("css"),c.value||{}]])}}),"time-picker");return $.TimePicker=le,$.default=le,Object.defineProperties($,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),$}({},Vue);
