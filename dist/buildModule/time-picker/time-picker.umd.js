(function(k,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(k=typeof globalThis<"u"?globalThis:k||self,e((k.dw=k.dw||{},k.dw["uitime-picker"]={}),k.Vue))})(this,function(k,e){"use strict";const q=(o,n)=>(o.install=function(d){if(o){const s=o.name||o.__name;if(s||n){const p=n?`dw-${n}`:"dw-"+s.replace(/dw/gi,"").toLowerCase();d.component(p,o)}else console.error(o,n,!n)}},o),ue=o=>Array.isArray(o);function _(o){const n=`vi-${o}`;return{n:p=>p?p.startsWith("-")?`${n}${p}`:`${n}_${p}`:n,classes:(...p)=>p.map(g=>{if(ue(g)){const[M,R,r=null]=g;return M?R:r}return g})}}const G={clearable:{type:[String,Boolean],default:!1},isRange:{type:[String,Boolean],default:!1},disabledHours:{type:Array,default:[]},disabledMinutes:{type:Array,default:[]},disabledSeconds:{type:Array,default:[]},arrowControl:{type:[String,Boolean],default:""},placeholder:{type:String,default:"Arbitrary time"},startPlaceholder:String,endPlaceholder:String,modelValue:{type:[String,Number,Boolean],default:""},dynamicCss:{type:Object,default:()=>({"input-box-shadow-x":"0","input-box-shadow-y":"0","input-box-shadow-blur":"0","input-box-shadow-spread":"1","input-box-shadow-color":"#dcdfe6","input-hover-box-shadow-x":"0","input-hover-box-shadow-y":"0","input-hover-box-shadow-blur":"0","input-hover-box-shadow-spread":"1","input-hover-box-shadow-color":"#85a2dd","input-active-box-shadow-x":"0","input-active-box-shadow-y":"0","input-active-box-shadow-blur":"0","input-active-box-shadow-spread":"1","input-active-box-shadow-color":"rgb(0, 94, 255)","input-border-radius":"4","input-line-padding-t":"0","input-line-padding-r":"28","input-line-padding-b":"0","input-line-padding-l":"8","input-bg-color":"rgba(255,255,255)","input-fo-color":"#606266","input-fo-size":"12","input-fo-weight":"600","input-line-height":"30","input-width":"200","input-text-alight":"start","input-icon-width":"12","input-icon-color":"#000","input-icon-hover-color":"#008cc8","input-placeholder-fo-color":"gray","popper-bg-color":"#fff","popper-height":"228","popper-border-radius":"8","popper-z-index":"999","popper-box-shadow-x":"0","popper-box-shadow-y":"0","popper-box-shadow-blur":"12","popper-box-shadow-spread":"0","popper-box-shadow-color":"rgba(0, 0, 0, 0.12)","popper-arrow-height":"5","popper-panel-padding-t":"8","popper-panel-padding-r":"4","popper-panel-padding-b":"0","popper-panel-padding-l":"4","popper-footer-height":"36","popper-footer-fo-size":"12","popper-footer-border-top-width":"1","popper-footer-border-top-style":"solid","popper-footer-border-top-color":"rgb(228, 231, 237)","popper-footer-cancel-fo-color":"#303133","popper-footer-ok-fo-color":"skyblue","popper-footer-ok-fo-weight":"800","popper-footer-ok-margin-t":"0","popper-footer-ok-margin-r":"5","popper-footer-ok-margin-b":"0","popper-footer-ok-margin-l":"5","popper-footer-ok-padding-t":"0","popper-footer-ok-padding-r":"5","popper-footer-ok-padding-b":"0","popper-footer-ok-padding-l":"5","popper-spinner-pitch-box-border-top-width":"1","popper-spinner-pitch-box-border-top-style":"solid","popper-spinner-pitch-box-border-top-color":"#e4e7ed","popper-spinner-pitch-box-border-bottom-width":"1","popper-spinner-pitch-box-border-bottom-style":"solid","popper-spinner-pitch-box-border-bottom-color":"#e4e7ed","popper-spinner-number-height":"32","popper-spinner-number-fo-color":"#606266","popper-spinner-number-fo-size":"12","popper-spinner-number-hover-bg-color":"#e0e0e0","popper-spinner-number-active-fo-color":"#000","popper-spinner-number-active-fo-weight":"700","popper-spinner-number-active-hover-bg-color":"rgba($color: #e0e0e0, $alpha: 0)","popper-spinner-number-disabled-fo-color":"rgb(223, 223, 223)","popper-spinner-number-disabled-hover-bg-color":"rgba($color: #e0e0e0, $alpha: 0)","scroll-bar-thumb-width":"8",scrollBarHeight:"60",scrollBarBgColor:"rgb(218, 218, 218)",scrollBarBgColorHover:"skyblue"})}},Q=Symbol("time-picker"),ee=function(o,n){for(let[d,s]of Object.entries(n.value))o.style.setProperty("--"+d,s)},K={mounted(o,n){ee(o,n)},updated(o,n){ee(o,n)},install(o){o.directive("Css",this)}},{n:pe,classes:de}=_("input-svg-icon"),me=e.defineComponent({name:"VIInputSvgIcon",emits:["click"],props:{path:{type:String,default:`M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
            764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
            45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`},height:{type:[String,Number],default:"12px"},width:{type:[String,Number],default:"12px"},modelValue:{type:[String,Number,Boolean],default:""}},setup(o,n){const d=function(s){n.emit("click",s)};return()=>e.createVNode("svg",{class:[de(pe()),"icon"],height:o.height,width:o.width,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",onClick:d},[e.createVNode("path",{fill:"currentColor",d:o.path},null)])}}),te={modelValue:{type:[String,Number,Array],default:""},showPassword:{type:[String,Boolean],default:!1},disabled:{type:[String,Boolean],default:!1},readonly:{type:[String,Boolean],default:!1},clearable:{type:[String,Boolean],default:!1},placeholder:{type:String,default:"请选择您需要的内容o(*￣▽￣*)ブ"},dynamicCss:{type:Object,default:()=>({"input-box-shadow-x":"0","input-box-shadow-y":"0","input-box-shadow-blur":"0","input-box-shadow-spread":"1","input-box-shadow-color":"#dcdfe6","input-hover-box-shadow-x":"0","input-hover-box-shadow-y":"0","input-hover-box-shadow-blur":"0","input-hover-box-shadow-spread":"1","input-hover-box-shadow-color":"#85a2dd","input-active-box-shadow-x":"0","input-active-box-shadow-y":"0","input-active-box-shadow-blur":"0","input-active-box-shadow-spread":"1","input-active-box-shadow-color":"rgb(0, 94, 255)","input-border-radius":"4","input-line-padding-t":"0","input-line-padding-r":"28","input-line-padding-b":"0","input-line-padding-l":"8","input-bg-color":"rgba(255,255,255)","input-fo-color":"#606266","input-fo-size":"12","input-fo-weight":"600","input-line-height":"30","input-width":"200","input-text-alight":"start","input-icon-width":"12","input-icon-color":"#000","input-icon-hover-color":"#008cc8","input-placeholder-fo-color":"gray"})}},{n:oe,classes:he}=_("timePickerInput"),be=e.defineComponent({name:"VITimePickerInput",emits:["focus","blur","click","update:modelValue","close"],directives:{css:K},props:te,components:{"vi-input-svg-icon":me},setup(o,n){const d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z",s=e.reactive({softFocus:!1,isHover:!1}),p=function(b){h.value||n.emit("click",b)},g=function(b){h.value||(n.emit("update:modelValue",b.target.value),n.emit("close"),b.stopPropagation())},M=function(b){h.value||(n.emit("focus",b),s.softFocus=!0)},R=function(b){h.value||(n.emit("blur",b),s.softFocus=!1)},r=function(b){h.value||(s.isHover=!0)},S=function(b){h.value||(s.isHover=!1)},y=function(b){h.value||n.emit("update:modelValue",b.target.value)},i=function(b){h.value||n.emit("update:modelValue",b.target.value)},m=e.computed(()=>Object.assign(te.dynamicCss.default(),o.dynamicCss)),N=e.computed(()=>typeof o.readonly=="string"?!0:o.readonly),V=e.computed(()=>typeof o.clearable=="string"?!0:o.clearable),C=e.computed(()=>typeof o.showPassword=="string"?!0:o.showPassword),h=e.computed(()=>typeof o.disabled=="string"?!0:o.disabled),T=e.computed(()=>s.softFocus?"active":"");return()=>e.withDirectives(e.createVNode("div",{class:[he(oe()),T.value,h.value?"disabled":""],onClick:p,onMouseenter:r,onMouseleave:S},[e.createVNode("input",{class:[oe("_inner")],placeholder:o.placeholder,onFocus:M,onBlur:R,readonly:N.value||h.value,value:o.modelValue,onChange:y,onInput:i,type:C.value?"password":"text"},null),o.modelValue&&V.value&&s.isHover?e.createVNode(e.resolveComponent("vi-input-svg-icon"),{class:"icon",height:m.value["input-icon-width"],width:m.value["input-icon-width"],path:d,onClick:g},null):""]),[[e.resolveDirective("css"),m.value||{}]])}}),{n:O,classes:re}=_("popper"),fe=e.defineComponent({name:"VITimePickerPopper",emits:["focus","blur","click"],props:["active"],setup(o,n){let{timePickerRef:d}=e.inject(Q);const s=e.reactive({parentRect:{x:0,y:0,height:0,width:0},dropdownTop:"0"}),p=e.ref(null),g=e.ref(null),M=()=>{e.nextTick(()=>{s.parentRect=d.value.getBoundingClientRect(),s.dropdownTop=s.parentRect.height+10+"px"})};return e.onMounted(()=>M()),()=>{var R,r;return e.createVNode("div",{class:[O(""),o.active?"active":""],style:{top:s.dropdownTop}},[e.createVNode("div",{ref:p,class:[O("_arrow")]},[o.active]),e.createVNode("div",{ref:g,class:[re(O("_content"))]},[e.createVNode("div",{class:[re(O("_inner"))]},[(r=(R=n.slots).default)==null?void 0:r.call(R)])])])}}}),ne={height:{type:[String,Boolean],default:"300px"},width:{type:[String,Boolean],default:"auto"},thumbWidth:{type:String,default:"6px"},noResize:Boolean,dynamicCss:{type:Object,default:()=>({"thumb-bg-color":"#d9dfe3"})}};var X=(o=>(o.HORIZONTAL="horizontal",o.VERTICAL="vertical",o))(X||{});const ge={type:{type:[String||X],default:"vertical"},height:{type:String,default:"100px"},width:{type:String,default:"6px"},ratioX:{type:String,default:"0px"},ratioY:{type:String,default:"0px"}},ie=Symbol("scroll-bar"),{n:ve}=_("scroll-bar__thumb"),we=e.defineComponent({name:"ScrollBar",emits:["update:height","update:width"],props:ge,setup(o,n){const{thumbRatioY:d,thumbRatioX:s,thumbRatioYMaxRange:p,thumbRatioXMaxRange:g,wrapperInnerMaxiMoveProportionY:M,wrapperInnerMaxiMoveProportionX:R,scrollBarRef:r}=e.inject(ie),S=e.ref(),y=e.reactive({mouseMoving:!1});let i=0,m=0,N=0,V=0,C=0,h=0;const T=e.computed({get(){return o.height},set(v){n.emit&&n.emit("update:height",v)}}),b=e.computed({get(){return o.width},set(v){n.emit&&n.emit("update:width",v)}}),W=function(v){if(v=="vertical"){let f=0;const I=C;f=N<0?I+Math.abs(N):I-Math.abs(N),f<0&&(f=0),f>p.value&&(f=p.value),r.value.scrollTop=Math.abs(M.value*f)}else if(v=="horizontal"){let f=0;const I=h;f=V<0?I+Math.abs(V):I-Math.abs(V),f<0&&(f=0),f>g.value&&(f=g.value),r.value.scrollLeft=Math.abs(R.value*f)}},P=function(v){y.mouseMoving=!0,C=Number(d.value.slice(11,-3)),h=Number(s.value.slice(11,-3)),i=Number(v.clientY),m=Number(v.clientX)},Y=function(v){N=i-v.clientY,V=m-v.clientX,W(o.type)};document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mousedown",P),i=0,m=0,N=0,V=0,C=0,h=0,y.mouseMoving=!1});const A=v=>{document.addEventListener("mousedown",P),document.addEventListener("mousemove",Y)};return()=>e.createVNode("div",{class:ve(),ref:S,style:{height:T.value,width:b.value,transform:o.type=="vertical"?o.ratioY:o.ratioX},onMousedown:A},null)}}),{n:H}=_("scroll-bar"),Me=q(e.defineComponent({name:"ScrollBar",emits:["update:width","scroll"],directives:{css:K},props:ne,components:{"scroll-bar-thumb":we},setup(o,n){let d,s=null;const p=l=>{D()},g=e.ref(),M=e.ref(),R=e.ref(),r=e.reactive({wrapperInnerRealHeight:0,wrapperInnerRealWidth:0,wrapperInnerMaxiMoveRangeY:0,wrapperInnerMaxiMoveRangeX:0,wrapperInnerMaxiMoveProportionY:0,wrapperInnerMaxiMoveProportionX:0,thumbHeightProportion:0,thumbWidthProportion:0,thumbHeight:"",thumbWidth:"",thumbRatioX:"",thumbRatioY:"",thumbRatioYMaxRange:0,thumbRatioXMaxRange:0,thumbRatioYProportion:0,thumbRatioXProportion:0,cacheContainerWidth:""});let S=e.ref(!1);e.watch(()=>o.noResize,l=>{l?(d==null||d(),s==null||s.disconnect()):(s=new MutationObserver(p),e.nextTick(()=>{s.observe(M.value,{attributes:!0,childList:!0,subtree:!0})}))},{immediate:!0});const y=e.computed(()=>Object.assign(ne.dynamicCss.default(),o.dynamicCss)),i=e.computed(()=>o.height),m=e.computed({get(){return r.cacheContainerWidth},set(l){r.cacheContainerWidth=l}}),N=e.computed({get(){return r.thumbHeight},set(l){r.thumbHeight=l}}),V=e.computed({get(){return r.thumbWidth},set(l){r.thumbWidth=l}}),C=e.computed({get(){return r.thumbRatioX},set(l){r.thumbRatioX=l}}),h=e.computed({get(){return r.thumbRatioY},set(l){r.thumbRatioY=l}}),T=e.computed(()=>r.thumbRatioYMaxRange),b=e.computed(()=>r.thumbRatioXMaxRange),W=e.computed(()=>r.wrapperInnerMaxiMoveProportionY),P=e.computed(()=>r.wrapperInnerMaxiMoveProportionX),Y=l=>{r.thumbRatioY=`translateY(${String(r.thumbRatioYProportion*l)+"px"})`},A=l=>{r.thumbRatioX=`translateX(${String(r.thumbRatioXProportion*l)+"px"})`},v=l=>{g.value.scrollTop=l},f=l=>{g.value.scrollLeft=l},I=(l,c)=>{v(l),f(c)},D=l=>{var c,B;r.wrapperInnerRealHeight=Number((c=M.value)==null?void 0:c.scrollHeight),r.wrapperInnerRealWidth=Number((B=M.value)==null?void 0:B.scrollWidth),r.wrapperInnerMaxiMoveRangeY=r.wrapperInnerRealHeight-Number(i.value.replace("px","")),r.wrapperInnerMaxiMoveRangeX=r.wrapperInnerRealWidth-Number(m.value.replace("px","")),r.thumbHeightProportion=Number(i.value.replace("px",""))/r.wrapperInnerRealHeight,r.thumbWidthProportion=Number(m.value.replace("px",""))/r.wrapperInnerRealWidth,r.thumbHeight=String(r.thumbHeightProportion*Number(i.value.replace("px","")))+"px",r.thumbWidth=String(r.thumbWidthProportion*Number(m.value.replace("px","")))+"px",r.thumbRatioYMaxRange=Number(i.value.replace("px",""))-Number(r.thumbHeight.replace("px","")),r.thumbRatioXMaxRange=Number(m.value.replace("px",""))-Number(r.thumbWidth.replace("px","")),r.thumbRatioYProportion=r.thumbRatioYMaxRange/r.wrapperInnerMaxiMoveRangeY,r.thumbRatioXProportion=r.thumbRatioXMaxRange/r.wrapperInnerMaxiMoveRangeX,r.wrapperInnerMaxiMoveProportionY=r.wrapperInnerMaxiMoveRangeY/r.thumbRatioYMaxRange,r.wrapperInnerMaxiMoveProportionX=r.wrapperInnerMaxiMoveRangeX/r.thumbRatioXMaxRange};e.onMounted(()=>{r.cacheContainerWidth=o.width,D()});const U=l=>{const c=l.target.scrollTop,B=l.target.scrollLeft;Y(c),A(B),n.emit&&n.emit("scroll",B,c)},J=l=>{S.value=!0},z=l=>{S.value=!1};e.provide(ie,{height:i,thumbRatioY:h,thumbRatioX:C,thumbRatioYMaxRange:T,thumbRatioXMaxRange:b,wrapperInnerMaxiMoveProportionY:W,wrapperInnerMaxiMoveProportionX:P,scrollBarRef:g}),n.expose({setScrollTop:v,setScrollLeft:f,setScrollTo:I});const j=(l=X.VERTICAL)=>{if(o.width===!1||o.height===!1)return"";const c=r.wrapperInnerRealHeight,B=Number(o.height.replace("px","")),F=r.wrapperInnerRealWidth;if(l=="vertical")return B<c?e.createVNode(e.resolveComponent("scroll-bar-thumb"),{ref:R,type:l,height:N.value,width:o.thumbWidth,ratioX:C.value,ratioY:h.value,class:S.value?"show":"hide"},null):"";if(l=="horizontal"){let E=Number(m.value.replace("px",""));if(m.value=="auto"){const L=()=>{m.value="auto",e.nextTick(()=>{var $;E=Number(($=M.value)==null?void 0:$.clientWidth),m.value=E+"px",D()})};L(),window.onresize=()=>L()}else if(m.value)return E<F?e.createVNode(e.resolveComponent("scroll-bar-thumb"),{ref:R,type:l,height:o.thumbWidth,width:V.value,ratioX:C.value,ratioY:h.value,class:S.value?"show":"hide"},null):""}};return()=>{var l,c;return e.withDirectives(e.createVNode("div",{class:H(),style:{width:m.value},onMouseenter:J,onMouseleave:z},[e.createVNode("div",{class:H("_wrapper"),ref:g,style:{height:i.value,width:m.value},onScroll:U},[e.createVNode("div",{class:H("_view"),ref:M},[(c=(l=n.slots).default)==null?void 0:c.call(l)])]),e.createVNode("div",{class:[H("_bar"),"horizontal"]},[j(X.HORIZONTAL)]),e.createVNode("div",{class:[H("_bar"),"vertical"]},[j(X.VERTICAL)])]),[[e.resolveDirective("css"),y.value||{}]])}}}),"scroll-bar"),{n:Re,classes:Se}=_("time-picker"),ae=q(e.defineComponent({name:"VITimePicker",emits:["click","inputClick","closeClick","cancelClick","okClick","update:modelValue","focus","blur"],directives:{css:K},props:G,components:{"vi-time-picker-input":be,"vi-time-picker-popper":fe,"vi-scroll-bar":Me},setup(o,n){const d=[null,null,null];let s="";const p=t=>t<10?"0"+t:t+"",g=t=>{const a=t.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);return a||console.warn("初始化数据格式不符合规范,已被清空！"),a},M=()=>"xxxxxxxx".replace(/[xy]/g,function(t){var a=0|16*Math.random(),u=t=="x"?a:8|3&a;return u.toString(16)}),R=e.ref();let r=e.ref(),S=e.ref(),y=e.ref();const i=e.reactive({uuid:M(),popperVisible:!1,softFocus:!1,isSubmit:!1,hourList:[],minuteList:[],secondList:[],currentSelect:["","",""]}),m=function(){i.popperVisible=!1,i.softFocus=!1},N=function(t){let a=!1;for(let u=0;u<t.path.length;u++){const w=t.path[u];if(w.classList&&w.classList.value&&w.getAttribute("class").includes("-time-picker")&&w.dataset.id==i.uuid){a=!0;break}}a||(m(),i.isSubmit=!0)};document.addEventListener("mousedown",N);const V=function(t){n.emit&&n.emit("focus")},C=function(t){n.emit&&n.emit("blur")},h=function(){n.emit&&n.emit("click")},T=function(t){i.popperVisible=!i.popperVisible,i.isSubmit=!1,o.modelValue||j(),n.emit&&n.emit("inputClick")},b=function(){i.popperVisible=!1,n.emit&&n.emit("closeClick")},W=function(t){const{type:a}=t.target.dataset;i.popperVisible=!1,a=="cancel"?(i.isSubmit=!1,n.emit&&n.emit("update:modelValue",s),n.emit&&n.emit("cancelClick"),z()):a=="ok"&&(i.isSubmit=!0,n.emit&&n.emit("okClick",i.currentSelect))},P=function(t,a){const u={index:{hour:"0",minute:"1",second:"2"},ref:{hour:r,minute:S,second:y}},{num:w,disabled:x}=a.dataset;if(w){if(x=="true")return;i.currentSelect[u.index[t]]=w;const ce=Number(i.currentSelect[u.index[t]])*Number(c.value["popper-spinner-number-height"]);u.ref[t].value.setScrollTop(ce)}},Y=function(t){P("hour",t.target)},A=function(t){P("minute",t.target)},v=function(t){P("second",t.target)},f=function(t,a){const u={timers:{hour:0,minute:1,second:2},ableRange:{hour:"disabledHours",minute:"disabledMinutes",second:"disabledSeconds"}};let x=Math.round(t/Number(c.value["popper-spinner-number-height"]));if(o[u.ableRange[a]].filter(xe=>xe==x).length>0)return;i.currentSelect[u.timers[a]]=p(x);let Z=x*Number(c.value["popper-spinner-number-height"]);d[u.timers[a]]&&(clearTimeout(d[u.timers[a]]),d[u.timers[a]]=null),d[u.timers[a]]=setTimeout(()=>{a=="hour"&&r.value.setScrollTop(Z),a=="minute"&&S.value.setScrollTop(Z),a=="second"&&y.value.setScrollTop(Z)},200)},I=function(t,a){f(a,"hour")},D=function(t,a){f(a,"minute")},U=function(t,a){f(a,"second")},J=()=>{i.hourList=new Array(24).fill(0).map((t,a)=>a<10?"0"+a:a+""),i.minuteList=new Array(60).fill(0).map((t,a)=>a<10?"0"+a:a+""),i.secondList=new Array(60).fill(0).map((t,a)=>a<10?"0"+a:a+"")},z=function(){s&&(r.value.setScrollTop(Number(s.slice(0,2))*Number(c.value["popper-spinner-number-height"])),S.value.setScrollTop(Number(s.slice(3,5))*Number(c.value["popper-spinner-number-height"])),y.value.setScrollTop(Number(s.slice(6,8))*Number(c.value["popper-spinner-number-height"])))},j=()=>{const t=new Date,a=t.getHours(),u=t.getMinutes(),w=t.getSeconds();i.currentSelect[0]=p(a),i.currentSelect[1]=p(u),i.currentSelect[2]=p(w),r.value.setScrollTop(Number(i.currentSelect[0])*Number(c.value["popper-spinner-number-height"])),S.value.setScrollTop(Number(i.currentSelect[1])*Number(c.value["popper-spinner-number-height"])),y.value.setScrollTop(Number(i.currentSelect[2])*Number(c.value["popper-spinner-number-height"])),n.emit&&n.emit("update:modelValue",i.currentSelect[0]+":"+i.currentSelect[1]+":"+i.currentSelect[2])},l=function(){if(o.modelValue&&g(o.modelValue)){const t=o.modelValue.split(":"),a=o.disabledHours.findIndex(x=>x==t[0])!=-1,u=o.disabledMinutes.findIndex(x=>x==t[1])!=-1,w=o.disabledSeconds.findIndex(x=>x==t[2])!=-1;if(a||u||w)return console.warn("输入的值包含禁用项,已被清空"),n.emit&&n.emit("update:modelValue",""),!0}return!1};e.onBeforeMount(()=>{if(o.modelValue&&g(o.modelValue)&&!l()){const t=o.modelValue.split(":");i.currentSelect[0]=t[0],i.currentSelect[1]=t[1],i.currentSelect[2]=t[2],s=o.modelValue}}),e.onMounted(()=>{J(),e.nextTick(()=>{z()})});const c=e.computed(()=>Object.assign(G.dynamicCss.default(),o.dynamicCss)),B=e.computed(()=>{const t={};for(const a in c.value)a.includes("input")&&(t[a]=c.value[a]);return t}),F=e.computed({get(){return l(),o.modelValue},set(t){n.emit&&n.emit("update:modelValue",t)}}),E=e.computed(()=>o.clearable),L=function(t,a){const u={hour:"disabledHours",minute:"disabledMinutes",second:"disabledSeconds"};let w=!1;return o[u[t]].forEach(x=>x==a?w=!0:""),w},$=e.computed(()=>function(t){return L("hour",t)}),le=e.computed(()=>function(t){return L("minute",t)}),se=e.computed(()=>function(t){return L("second",t)});return e.watchEffect(()=>{const t=i.currentSelect[0],a=i.currentSelect[1],u=i.currentSelect[2];if(!t&&!a&&!u){n.emit&&n.emit("update:modelValue","");return}const w=t+":"+a+":"+u;n.emit&&n.emit("update:modelValue",w)}),e.watchEffect(()=>{i.isSubmit&&(s=o.modelValue,n.emit&&n.emit("update:modelValue",s))}),e.provide(Q,{timePickerRef:R}),()=>e.withDirectives(e.createVNode("div",{ref:R,"data-id":i.uuid,class:[Se(Re())],onClick:h},[e.createVNode(e.resolveComponent("vi-time-picker-input"),{placeholder:o.placeholder,modelValue:F.value,"onUpdate:modelValue":t=>F.value=t,onFocus:V,onBlur:C,onClose:b,dynamicCss:B.value||{},clearable:E.value,readonly:!0,onClick:T},null),e.createVNode(e.resolveComponent("vi-time-picker-popper"),{active:i.popperVisible},{default:()=>[e.createVNode("div",{class:"time-panel"},[e.createVNode("div",{class:"time-panel__content"},[e.createVNode(e.resolveComponent("vi-scroll-bar"),{ref:r,class:"time-panel__spinner time-panel__popper-spinner--hour",onScroll:I,height:Number(c.value["popper-spinner-number-height"])*6+"px"},{default:()=>[e.createVNode("ul",{onClick:Y},[i.hourList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":$.value(t),class:[i.currentSelect[0]==t?"active":"",$.value(t)?"disabled":""]},[t]))])]}),e.createVNode(e.resolveComponent("vi-scroll-bar"),{ref:S,class:"time-panel__spinner time-panel__popper-spinner--minutes",onScroll:D,height:Number(c.value["popper-spinner-number-height"])*6+"px"},{default:()=>[e.createVNode("ul",{onClick:A},[i.minuteList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":le.value(t),class:[i.currentSelect[1]==t?"active":"",le.value(t)?"disabled":""]},[t]))])]}),e.createVNode(e.resolveComponent("vi-scroll-bar"),{ref:y,class:"time-panel__spinner time-panel__popper-spinner--second",onScroll:U,height:Number(c.value["popper-spinner-number-height"])*6+"px"},{default:()=>[e.createVNode("ul",{onClick:v},[i.secondList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":se.value(t),class:[i.currentSelect[2]==t?"active":"",se.value(t)?"disabled":""]},[t]))])]})]),e.createVNode("div",{class:"time-panel__footer",onClick:W},[e.createVNode("div",{"data-type":"cancel",class:"time-panel__footer_cancel"},[e.createTextVNode("取消")]),e.createVNode("div",{"data-type":"ok",class:"time-panel__footer_ok"},[e.createTextVNode("确认")])])])]})]),[[e.resolveDirective("css"),c.value||{}]])}}),"time-picker");k.TimePicker=ae,k.default=ae,Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
