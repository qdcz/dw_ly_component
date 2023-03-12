import{_ as n,c as h,d as r,a as t,e,b as i,o as c,r as l}from"./app.63122589.js";const L=JSON.parse('{"title":"dw-scroll-bar V0.0.1","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"横向滚动","slug":"横向滚动","link":"#横向滚动","children":[]},{"level":2,"title":"设置滚动条厚度","slug":"设置滚动条厚度","link":"#设置滚动条厚度","children":[]},{"level":2,"title":"方法控制滚动","slug":"方法控制滚动","link":"#方法控制滚动","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]}],"relativePath":"markdown/scroll-bar/scroll-bar.md"}'),g={name:"markdown/scroll-bar/scroll-bar.md"},_=t("h1",{id:"dw-scroll-bar-v0-0-1",tabindex:"-1"},[e("dw-scroll-bar "),t("code",null,"V0.0.1"),e(),t("a",{class:"header-anchor",href:"#dw-scroll-bar-v0-0-1","aria-hidden":"true"},"#")],-1),b=t("p",null,"用于替换浏览器原生的高性能自定义滚动条",-1),u=t("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),f=t("h2",{id:"横向滚动",tabindex:"-1"},[e("横向滚动 "),t("a",{class:"header-anchor",href:"#横向滚动","aria-hidden":"true"},"#")],-1),x=t("h2",{id:"设置滚动条厚度",tabindex:"-1"},[e("设置滚动条厚度 "),t("a",{class:"header-anchor",href:"#设置滚动条厚度","aria-hidden":"true"},"#")],-1),p=t("h2",{id:"方法控制滚动",tabindex:"-1"},[e("方法控制滚动 "),t("a",{class:"header-anchor",href:"#方法控制滚动","aria-hidden":"true"},"#")],-1),m=i('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;"><strong>属性名</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th><th><strong>可选值</strong></th><th><strong>默认值</strong></th></tr></thead><tbody><tr><td style="text-align:left;">height</td><td>容器高度</td><td>[String, Boolean]</td><td>{n}px、auto</td><td>300px</td></tr><tr><td style="text-align:left;">width</td><td>容器宽度</td><td>[String, Boolean]</td><td>{n}px、auto</td><td>auto</td></tr><tr><td style="text-align:left;">thumbWidth</td><td>滚动条的厚度</td><td>String</td><td>—</td><td>6px</td></tr><tr><td style="text-align:left;">noResize</td><td>容器尺寸变化是否动态计算改变，如果容器尺寸不会发生变化，最好设置它可以优化性能</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td style="text-align:left;">dynamicCss</td><td>覆盖组件内置的css变量</td><td>Object</td><td>—</td><td>见自定义配置属性</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;"><strong>事件名</strong></th><th><strong>说明</strong></th><th><strong>回调参数</strong></th></tr></thead><tbody><tr><td style="text-align:left;">@scroll</td><td>滚动事件触发时，返回滚动的距离</td><td>(scrollLeft,scrollTop)</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;"><strong>方法名</strong></th><th><strong>说明</strong></th><th><strong>入参</strong></th></tr></thead><tbody><tr><td style="text-align:left;">setScrollTop</td><td>设置Y轴的滚动位置</td><td>(scrollTop: number):void=&gt;()</td></tr><tr><td style="text-align:left;">setScrollLeft</td><td>设置X轴的滚动位置</td><td>(scrollLeft: number):void=&gt;()</td></tr><tr><td style="text-align:left;">scrollTo</td><td>滚动到指定的X、Y位置</td><td>(scrollTop: number，scrollLeft: number):void=&gt;()</td></tr></tbody></table><h2 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-hidden="true">#</a></h2>',7);function y(v,B,T,k,S,V){const d=l("scrollBar-base"),a=l("scrollBar-horizontal"),o=l("scrollBar-thumbHW"),s=l("scrollBar-setScrollTL");return c(),h("div",null,[_,b,u,r(d),f,r(a),x,r(o),p,r(s),m])}const N=n(g,[["render",y]]);export{L as __pageData,N as default};
