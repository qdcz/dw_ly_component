import { defineConfig } from 'vitepress'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

export default defineConfig({
    title: '可视化开发技术文档库',
    description: '',
    lang: 'zh-CN',
    appearance: true, // 关闭主题切换
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@vite_js' }],
        ['meta', { name: 'theme-color', content: '#646cff' }],
    ],

    vue: {
        reactivityTransform: true
    },

    themeConfig: {
        logo: '/logo.svg',


        algolia: {
            appId: '7H67QR5P0A',
            apiKey: 'deaab78bcdfe96b599497d25acc6460e',
            indexName: 'vitejs',
            searchParameters: {
                facetFilters: ['tags:cn']
            }
        },

        carbonAds: {
            code: 'CEBIEK3N',
            placement: 'vitejsdev'
        },



        footer: {
            copyright:
                'Copyright © 2022-厦门盛迅信息技术股份有限公司'
        },

        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'DataV组件库',
                items: [
                    {
                        text: 'V1',
                        activeMatch: '/docs/datav/v1/',
                        link: '/docs/datav/v1/'
                    },
                    {
                        text: 'V2',
                        activeMatch: '/docs/datav/v2/',
                        link: '/docs/datav/v2/vi-button'
                    }
                ]
            },
            {
                text: '开发标准约定',
                items: [
                    {
                        text: 'Hook开发结构',
                        activeMatch: '/docs/visix/index',
                        link: '/docs/visix/hook'
                    },
                    {
                        text: '跨屏通信方案',
                        activeMatch: '/docs/visix/socket',
                        link: '/docs/visix/socket'
                    },
                ]
            },
            {
                text: '团队协作',
                items: [
                    {
                        text: '前端&&TA',
                        activeMatch: '/docs/team/dev&ta',
                        link: '/docs/team/dev&ta'
                    }
                ]
            },
            {
                text: '技术文档',
                items: [
                    {
                        text: '可视化数据标准文档',
                        activeMatch: '/docs/doc/可视化数据标准',
                        link: '/docs/doc/可视化数据标准'
                    },
                    {
                        text: '可视化数据需求表',
                        activeMatch: '/docs/datav/v1/',
                        link: '/docs/datav/v1/'
                    }
                ]
            },
            {
                text: '技术分享库',
                items: [
                    {
                        text: 'GIS之路',
                        activeMatch: '/docs/datav/v1/',
                        link: '/docs/datav/v1/'
                    },
                    {
                        text: '三维世界',
                        activeMatch: '/docs/datav/v1/',
                        link: '/docs/datav/v1/'
                    },
                    {
                        text: 'NodeJS',
                        activeMatch: '/docs/datav/v1/',
                        link: '/docs/datav/v1/'
                    },
                    {
                        text: '展示效果库',
                        activeMatch: '/docs/datav/v1/',
                        link: '/docs/datav/v1/'
                    },
                ]
            },

        ],

        sidebar: {
            '/docs/visix/': [
                {
                    text: '可视化前端',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            text: 'Hook开发结构',
                            link: '/docs/visix/hook'
                        },
                        {
                            text: '跨屏通信方案',
                            link: '/docs/visix/socket'
                        }]
                }
            ],
            '/docs/datav/v1/': [
                {
                    text: '基础组件',
                    items: [
                        {
                            text: '项目开发助手',
                            link: '/docs/datav/v1/项目开发助手'
                        }
                    ]
                },
                {
                    text: '控制交互',
                    items: []
                },
                {
                    text: '三维展示',
                    items: []
                },
                {
                    text: '音频媒体',
                    items: []
                },
                {
                    text: '相关产业',
                    items: []
                }
            ],
            '/docs/datav/v2/': [
                {
                    text: '基础组件',
                    items: [
                        {
                            text: '按钮组件',
                            link: '/docs/datav/v2/vi-button'
                        },
                        {
                            text: '复选框',
                            link: '/docs/datav/v2/vi-checkbox'
                        },
                        {
                            text: '复选框组',
                            link: '/docs/datav/v2/vi-checkbox-group'
                        },
                        {
                            text: '图片组件',
                            link: '/docs/datav/v2/vi-image'
                        },{
                            text: '单选框',
                            link: '/docs/datav/v2/vi-radio'
                        },
                    ]
                },
                {
                    text: '交互控件',
                    items: [
                        {
                            text: 'TAB选项卡',
                            link: '/docs/datav/v2/vi-tab'
                        },
                    ]
                },
                {
                    text: '复合控件',
                    items: [{
                        text: '数字翻牌器',
                        link: '/docs/datav/v2/vi-count-to'
                    }, {
                        text: '数据趋势器',
                        link: '/docs/datav/v2/vi-trend'
                    }, {
                        text: '复合表格',
                        link: '/docs/datav/v2/vi-table'
                    }, {
                        text: '下拉选择器',
                        link: '/docs/datav/v2/vi-select'
                    }, {
                        text: '分页器',
                        link: '/docs/datav/v2/vi-pagination'
                    }, {
                        text: '时间选择器',
                        link: '/docs/datav/v2/vi-time-picker'
                    }]
                },
                {
                    text: '多媒体组件',
                    items: [{
                        text: 'to do',
                        link: '/docs/datav/v2/'
                    },]
                },
            ]

        }
    },
    markdown: {
        lineNumbers: true,
        anchor: {
        }
    }
})
