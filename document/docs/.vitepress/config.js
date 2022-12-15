import { defineConfig } from "vitepress";

const ogDescription = "Next Generation Frontend Tooling";
const ogImage = "https://vitejs.dev/og-image.png";
const ogTitle = "Vite";
const ogUrl = "https://vitejs.dev";

export default defineConfig({
  title: "组件库",
  description: "",
  lang: "zh-CN",
  appearance: true, // 关闭主题切换
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
    logo: "/logo.png",

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
        text: "技术分享库",
        items: [
          {
            text: "GIS之路",
            activeMatch: "/docs/datav/v1/",
            link: "/docs/datav/v1/",
          },
          {
            text: "三维世界",
            activeMatch: "/docs/datav/v1/",
            link: "/docs/datav/v1/",
          },
          {
            text: "NodeJS",
            activeMatch: "/docs/datav/v1/",
            link: "/docs/datav/v1/",
          },
          {
            text: "展示效果库",
            activeMatch: "/docs/datav/v1/",
            link: "/docs/datav/v1/",
          },
        ],
      },
    ],

    sidebar: {
      "/": [
        {
          text: "组件库",
          collapsible: true,
          collapsed: true,
          items: [
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
            {
              text: "单选框",
              link: "/markdown/radio/radio.md",
            },
          ],
        },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
    anchor: {},
  },
});
