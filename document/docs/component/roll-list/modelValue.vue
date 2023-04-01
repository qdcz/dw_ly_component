<template>
    <div>
        <dw-roll-list
            :header="data.header"
            v-model="data.list"
            @rowClick="rowClick"
            :dynamicCss="data.dynamicCss"
            :showCount="5"
            :attractShowCount="[2]"
            :itemHeight="'40px'"
        >
        </dw-roll-list>

        <p>要创建一个表格要先定义头部数据传入<span>header</span></p>
        <p>再定义数据传入<span>v-model</span></p>
        <p>使用<span>showCount</span>来控制当前表格可视区域展示几条数据</p>
        <p>使用<span>itemHeight</span>来设置每行的固定高度</p>
        <p>使用<span>attractShowCount</span>来控制缩放聚焦的row的固定位置</p>
        <p>使用<span>@rowClick="rowClick"</span>来监听单行点击返回的数据</p>
        <p>使用<span>loopTime</span>来控制自动滚动的间隔时长</p>
        <p>使用<span>scrollTransition</span>来设置滚动整体动画的过渡时长</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
    setup() {
        const data = reactive({
            dynamicCss: {
                "box-wid": "700", // 或者auto

                // 钉在表格上的列表
                "pin-hei":"40",
                "pin-radius":"4",
                "pin-dire-b":"80", // 距离底部距离
                "pin-bg-color-style": "double", // single 是使用单色 double 是使用渐变色
                "pin-bg-color-to": "#00DEFF",
                "pin-bg-color-from": "#FFFFFF",
                "pin-bg-color-angle": "135",
                "pin-bg-color-value": "#49a3cb",

                // 激活的背景颜色
                "tr-focus-bg-color-style": "single", // single 是使用单色 double 是使用渐变色
                "tr-focus-bg-color-value": "rgb(235, 235, 235)",
                // 其余未激活的背景颜色
                "tr-un-focus-bg-color": "rgb(235, 235, 235)",
            },
            header: [
                {
                    label: "名称",
                    prop: "name",
                    basis: "30",
                    type: "text",
                    fo: {
                        color: "green",
                        size: "18",
                        weight: "900",
                    }
                },
                {
                    label: "简介",
                    prop: "introduce",
                    basis: "70",
                    type: "longText",
                    fo: {
                        color: "rgb(90, 99, 110)",
                        size: "12",
                        weight: "600",
                    },
                }
            ],
            list: [
                {
                    name: "aibrain",
                    introduce: "aibrain是一家位于美国加利福尼亚州的人工智能公司，专门为智能手机和机器人应用提供ai解决方案，拥有自己的人工智能平台irsp，并专注人工智能的开发。",
                },
                {
                    name: "亚马逊",
                    introduce: "这家全球商品品种最多的在线零售巨头如今已经通过服务和产品进入了人工智能领域，它们的亚马逊机器人已经开始学习使用数据预测和查找模式的能力。目前亚马逊的人工智能服务机器人alexa已经面世。",
                },
                {
                    name: "anki",
                    introduce: "anki是一家获得了银行业巨头摩根投资的玩具机器人公司，总部位于旧金山。anki的旗舰机器人是cozmo，该机器人由于出色的情感反应被称为是迄今为止最先进的消费机器人之一，它有表情、有情绪，没电了还能自己充电。",
                },
                {
                    name: "苹果",
                    introduce: "苹果公司在过去的里收购了四家人工智能创业公司，预示着它们迈入人工智能领域的决心。多年来，苹果公司的虚拟助理siri从一个简单的语音助手变成了成熟的语音机器人。",
                },
                {
                    name: "banjo",
                    introduce: "banjo是一家社交网络公司，在获得了日本软银集团美元的融资，它们利用人工智能对社交媒体进行数据整合，将地理定位和社交软件结合，用户可以查看自己周围的活动，也可以查看某个地址周边发生的事情。",
                },
                {
                    name: "达闼科技",
                    introduce: "达闼科技正在开发它称为基于云智能的机器人系统。ci与ai不同，它将机器与人类相结合，而不是将它们作为单独的实体来对待，但允许机器人由人控制。",
                },
                {
                    name: "facebook",
                    introduce: "这家为全球用户服务的公司，在对人工智能的战略投资商是舍得的，迄今为止，脸书已经开设了三家人工智能实验室，并且还收购了两家ai公司，即masquerade和zurich eye。",
                },
                {
                    name: "google",
                    introduce: "在所有互联网企业当中，谷歌是高居最具品牌价值企业榜首的人工智能领域领导者，它们早就已经开始大规模布局人工智能，并且投入很大。在四年内，谷歌收购了ai创业公司，它们研究的重点是推荐语言翻译、视觉处理以及排名和预测能力。",
                },
                {
                    name: "英特尔",
                    introduce: "英特尔已经认识到人工智能的重要性，并希望通过支持和投资人工智能技术保持领先地位。除了众多收购之外，英特尔还单独向微软投资了几家ai初创公司。该公司通过优化的机器学习框架和库宣传其对开源的承诺，以及他们对nervana系统的收购，使他们能够利用他们的机器学习专家。",
                },
            ],
        });

        const rowClick = (data) => {
            console.log("event:rowClick", data);
        };
        return {
            data,
            rowClick,
        };
    },
});
</script>
<style scoped>
span {
    background-color: #f1f1f1;
    margin: 0 4px 4px 0;
    border-radius: 4px;
    padding: 2px 8px;
    color: #476582;
    font-size: 12px;
}

pre {
  background-color: #2d2d2d;
  color: #f8f8f8;
  font-size: 14px;
  line-height: 1.5em;
  padding: 10px;
}

pre code {
    display:block; 
    width:auto; 
    white-space: pre-wrap; /* 允许单词换行 */
}
</style>
