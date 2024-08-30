import { defineConfig } from "vitepress";

import renderPermaLink from "./render-perma-link";
import MarkDownItCustomAnchor from "./markdown-it-custom-anchor";

const ogDescription = "Next Generation Frontend Tooling";
const ogImage = "https://vitejs.dev/og-image.png";
const ogTitle = "Vite";
const ogUrl = "https://vitejs.dev";

export default defineConfig({
    base: "/componentLib/",
    title: "DW组件库",
    description: "这是一个组件库",
    lang: "zh-CN",
    appearance: true, // 主题切换
    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:title", content: ogTitle }],
        ["meta", { property: "og:image", content: ogImage }],
        ["meta", { property: "og:url", content: ogUrl }],
        ["meta", { property: "og:description", content: ogDescription }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        ["meta", { name: "twitter:site", content: "@vite_js" }],
        ["meta", { name: "theme-color", content: "#646cff" }],
    ],

    // vue: {
    //   reactivityTransform: true,
    // },

    themeConfig: {
        logo: "/logo2.png",

        // algolia: {
        //   appId: "7H67QR5P0A",
        //   apiKey: "deaab78bcdfe96b599497d25acc6460e",
        //   indexName: "vitejs",
        //   searchParameters: {
        //     facetFilters: ["tags:cn"],
        //   },
        // },

        // 广告
        carbonAds: {
            code: "CEBIEK3N",
            placement: "vitejsdev",
        },

        docFooter: {
            prev: "Pagina prior",
            next: "Proxima pagina",
        },

        lastUpdatedText: "last update",

        // 顶部栏-社交链接
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/qdcz/dw_ly_component-demo",
            },
            // { icon: "twitter", link: "..." },
            // { icon: "discord", link: "..." },
            // { icon: "facebook", link: "..." },
            // { icon: "instagram", link: "..." },
            // { icon: "linkedin", link: "..." },
            // { icon: "slack", link: "..." },
            // { icon: "youtube", link: "..." },
            // You can also add custom icons by passing SVG as string:
        ],

        // 导航链接
        nav: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: "指南",
                link: "/guide/index",
            },
            {
                text: "组件",
                link: "/markdown/scroll-bar/scroll-bar",
            },
            {
                text: "Dropdown Menu",
                items: [
                    { text: "Item A", link: "/item-1" },
                    { text: "Item B", link: "/item-2" },
                    {
                        // Title for the section.
                        text: "Section A Title",
                        items: [
                            { text: "Section A Item A", link: "..." },
                            {
                                text: "Section B Item B",
                                link: "...",
                                activeMatch: "/config/",
                            },
                        ],
                    },
                ],
            },
        ],

        sidebar: {
            "/markdown": [
                {
                    text: "基础组件",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            text: "滚动条",
                            link: "/markdown/scroll-bar/scroll-bar.md",
                        },
                    ],
                },
                {
                    text: "表单组件",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            text: "单选框",
                            link: "/markdown/radio/radio.md",
                        },
                        {
                            text: "下拉选择器",
                            link: "/markdown/select/select-v2.md",
                        },
                        {
                            text: "时间选择器",
                            link: "/markdown/time-picker/time-picker.md",
                        },
                        {
                            text: "分页器",
                            link: "/markdown/pagination/pagination.md",
                        },
                    ],
                },
                {
                    text: "图表组件",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            text: "滚动列表",
                            link: "/markdown/roll-list/roll-list.md",
                        },
                        {
                            text: "人员系统关系图",
                            link: "/markdown/sankey-diagram/sankey-diagram.md",
                        },
                    ],
                },
                {
                    text: "其他组件",
                    collapsible: true,
                    collapsed: true,
                    items: [],
                },
            ],
        },

        // 页脚
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-dw_ly",
        },

        // 每个页面的左下角 放置一个超链接
        // editLink: {
        //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //   text: 'Edit this page on GitHub'
        // }
    },
    markdown: {
        lineNumbers: true,
        anchor: {
            // permalink: renderPermaLink,
        },
        config: (md) => {
            md.use(MarkDownItCustomAnchor);
        },
    },
    vite: {
        base: "/componentLib/",
    },
});
