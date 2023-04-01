<template>
    <div>
        <p>综合用法:</p>
        <dw-roll-list
            :header="data.header"
            v-model="data.list"
            @rowClick="rowClick"
            :dynamicCss="data.dynamicCss"
        >
        </dw-roll-list>
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
                "pin-dire-b":"40", // 距离底部距离
                "pin-bg-color-style": "double", // single 是使用单色 double 是使用渐变色
                "pin-bg-color-to": "#00DEFF",
                "pin-bg-color-from": "#FFFFFF",
                "pin-bg-color-angle": "135",
                "pin-bg-color-value": "#49a3cb",
            },
            header: [
                {
                    label: "姓名",
                    prop: "name",
                    basis: "25",
                    type: "text",
                    fo: {
                        color: "green",
                        size: "12",
                        weight: "900",
                    }
                },
                {
                    label: "面试岗位",
                    prop: "facePost",
                    basis: "25",
                    type: "text",
                    fo: {
                        color: "rgb(90, 99, 110)",
                        size: "12",
                        weight: "600",
                    },
                },
                {
                    label: "技能",
                    prop: "skill",
                    // 目前只支持百分比
                    basis: "25",
                    type: "longText",
                    // 字体配置
                    fo: {
                        color: "rgb(90, 99, 110)",
                        size: "12",
                        weight: "600",
                    },
                    // 选了 longText不传 使用默认配置
                    longText: {
                        speed: 20,
                        GPUSpeed: false,
                        txtGap:60

                    },
                },
                {
                    label: "年龄",
                    prop: "age",
                    basis: "25",
                    type: "number",
                    fo: {
                        color: "green",
                        size: "20",
                        weight: "100",
                    },
                },
            ],
            list: [
                {
                    name: "刘一",
                    facePost: "前端",
                    skill: "html,css,js,ts,vue,uniapp,node[express,koa,egg,nest],mysql,mongodb,docker,nginx,rust",
                    age: 26,
                },
                {
                    name: "陈二",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 32,
                },
                {
                    name: "张三",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    name: "李四",
                    facePost: "前端",
                    skill: "html,css,js,ts,vue,uniapp,node[express,koa,egg,nest],mysql,mongodb,docker,nginx,rust",
                    age: 27,
                },
                {
                    name: "王五",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    name: "赵六",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    name: "孙七",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    name: "周八",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    name: "吴九",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    name: "郑十",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
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
</style>
