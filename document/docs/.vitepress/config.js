import { defineConfig } from "vitepress";

const ogDescription = "Next Generation Frontend Tooling";
const ogImage = "https://vitejs.dev/og-image.png";
const ogTitle = "Vite";
const ogUrl = "https://vitejs.dev";

export default defineConfig({
  title: "DW组件库",
  description: "这是一个组件库",
  lang: "zh-CN",
  appearance: false, // 关闭主题切换
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

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: "/logo.jpeg",

    algolia: {
      appId: "7H67QR5P0A",
      apiKey: "deaab78bcdfe96b599497d25acc6460e",
      indexName: "vitejs",
      searchParameters: {
        facetFilters: ["tags:cn"],
      },
    },

    carbonAds: {
      code: "CEBIEK3N",
      placement: "vitejsdev",
    },

    footer: {
      copyright: "Copyright © 2022-dw_ly",
    },

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
        link: "/markdown/radio/radio",
      }
    ],

    sidebar: {
      "/markdown": [
        {
          text: "基础组件",
          collapsible: true,
          collapsed: true,
          items: [],
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
            }
          ],
        },
        {
          text: "图表组件",
          collapsible: true,
          collapsed: true,
          items: [],
        },
        {
          text: "其他组件",
          collapsible: true,
          collapsed: true,
          items: [],
        },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
    anchor: {},
  },
});
