<template>
    <div class="container">
        <div>
            <!-- <dw-time-picker
                v-model="currentSelect"
                :dynamicCss="dynamicCss"
            ></dw-time-picker> -->
            <!-- <div style="margin-top: 100px"></div> -->
            <!-- <dw-scroll-block v-model="scrollBlock">
            </dw-scroll-block> -->

            <!-- <dw-roll-list :header="header" v-model="list" @rowClick="rowClick" rollType="autoRoll">
            </dw-roll-list> -->

            <!-- <div style="margin-top: 100px"></div> -->
            <!-- <dw-sankey-diagram></dw-sankey-diagram>
            <dw-sankey-diagram></dw-sankey-diagram> -->
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "demo",
    data() {
        return {
            header: [
                {
                    label: "编号",
                    prop: "id",
                    basis: "24", // 只支持百分比
                    type: "longText",
                    fo: {
                        color: "rgb(90, 99, 110)",
                        size: "12",
                        weight: "600"
                    },
                    longText: {
                        speed: 10,
                        GPUSpeed: false,
                        txtGap: 50
                    },
                },
                {
                    label: "姓名",
                    prop: "name",
                    basis: "24",
                    type: "longText",
                    fo: {
                        color: "green",
                        size: "12",
                        weight: "900",
                        textAlign: "right"
                    },
                },
                {
                    label: "面试岗位",
                    prop: "facePost",
                    basis: "24",
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
                    basis: "24",
                    type: "longText",
                    fo: {
                        color: "rgb(90, 99, 110)",
                        size: "12",
                        weight: "600",
                    },
                    longText: {
                        speed: 5,
                        GPUSpeed: true,
                        txtGap: 50,
                    },
                },
                {
                    label: "年龄",
                    prop: "age",
                    basis: "24",
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
                    id: "bef2d311-c75d-4064-a627-9bd9ef5a44d8",
                    name: "刘一",
                    facePost: "前端",
                    skill: "html,css,js,ts,vue,uniapp,node[express,koa,egg,nest],mysql,mongodb,docker,nginx,rust",
                    age: 26,
                },
                {
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "陈二",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 32,
                },
                {
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "张三",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    id: "bef2d311-c75d-4064-a627-9bd9ef5a44d8",
                    name: "李四",
                    facePost: "前端",
                    skill: "只是一个切图仔",
                    age: 27,
                },
                {
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "王五",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "赵六",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "孙七",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "周八",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "吴九",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
                {
                    id: "6bd5e110-1bd2-a642-7781-7083c09dcf0a",
                    name: "郑十",
                    facePost: "后端",
                    skill: "java,mybatis,springboot,spring,springClould,redis,mq,go,python,",
                    age: 26,
                },
            ],
            scrollBlock: [
                "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
                "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
                "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
                "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
                // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
                // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png",
            ]
        };
    },
    mounted() {

    },
    methods: {
        rowClick(data) {
            console.log("rowClick", data);
        },
    },
};
</script>
<style lang="scss">
html,
body {
    padding: 0px;
    margin: 0px;
    background: rgba(13, 42, 67, 0) !important;
}

.container {
    padding: 10px 6px;
    background: rgba(13, 42, 67, 0) !important;
}
</style>
