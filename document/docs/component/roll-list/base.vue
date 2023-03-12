<template>
    <div>
        <p>base:</p>
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
                "box-width": "700", // 或者auto
            },
            header: [
                {
                    label: "编号",
                    prop: "id",
                    basis: "25", // 只支持百分比
                    type: "longText",
                    fo: {
                        color: "rgb(90, 99, 110)",
                        size: "12",
                        weight: "600",
                    },
                },
                {
                    label: "姓名",
                    prop: "name",
                    basis: "25",
                    type: "longText",
                    fo: {
                        color: "green",
                        size: "12",
                        weight: "900",
                    },
                    longText: {
                        speed: 5000,
                    },
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
                    basis: "25",
                    type: "longText",
                    fo: {
                        color: "rgb(90, 99, 110)",
                        size: "12",
                        weight: "600",
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
                    __id:'必传且不能重复001',
                    id: "bef2d311-c75d-4064-a627-9bd9ef5a44d8",
                    name: "刘一",
                    facePost: "前端",
                    skill: "html,css,js,ts,vue,uniapp,node[express,koa,egg,nest],mysql,mongodb,docker,nginx,rust",
                    age: 26,
                },
                {
                    __id:'必传且不能重复002',
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "陈二",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 32,
                },
                {
                    __id:'必传且不能重复003',
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "张三",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {   
                    __id:'必传且不能重复004',
                    id: "bef2d311-c75d-4064-a627-9bd9ef5a44d8",
                    name: "李四",
                    facePost: "前端",
                    skill: "html,css,js,ts,vue,uniapp,node[express,koa,egg,nest],mysql,mongodb,docker,nginx,rust",
                    age: 27,
                },
                {
                    __id:'必传且不能重复005',
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "王五",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    __id:'必传且不能重复006',
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "赵六",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    __id:'必传且不能重复007',
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "孙七",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {   
                    __id:'必传且不能重复008',
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "周八",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {   
                    __id:'必传且不能重复009',
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "吴九",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    __id:'必传且不能重复010',
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
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
