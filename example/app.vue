<template>
    <div class="container">
        <div>
            <!-- <dw-time-picker
                v-model="currentSelect"
                :dynamicCss="dynamicCss"
            ></dw-time-picker> -->

            <div style="margin-top: 10px"></div>
            <dw-roll-list :header="header" v-model="list"> </dw-roll-list>
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
                    label: "字段1",
                    prop: "field1",
                    basis: "16.6",  // 只支持百分比
                    type: "text",
                    fo: {
                        color: "white",
                        size: "12",
                        weight: "600",
                    },
                },
                {
                    label: "字段2",
                    prop: "field2",
                    basis: "16.6",
                    type: "longText",
                    fo: {
                        color: "green",
                        size: "12",
                        weight: "900",
                    },
                    longText:{
                        speed:5000
                    }
                },
                {
                    label: "字段3",
                    prop: "field3",
                    basis: "16.6",
                    type: "text",
                    fo: {
                        color: "white",
                        size: "12",
                        weight: "600",
                    },
                },
                {
                    label: "字段4",
                    prop: "field4",
                    basis: "16.6",
                    type: "text",
                    fo: {
                        color: "white",
                        size: "12",
                        weight: "600",
                    },
                },
                {
                    label: "字段5",
                    prop: "field5",
                    basis: "16.6",
                    type: "text",
                    fo: {
                        color: "white",
                        size: "12",
                        weight: "600",
                    },
                },
                {
                    label: "字段6",
                    prop: "field6",
                    basis: "16.6",
                    type: "number",
                    fo: {
                        color: "green",
                        size: "20",
                        weight: "100",
                    },
                },
            ],
            list: [
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {});

        setTimeout(() => {
            this.list = [
                {
                    field1: "DP000037",
                    field2: "测试",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "中国捐款保障乌核设施安全,中方回应",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "中国女性的互联网之路",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "夫妻200万造别墅找陌生人抱团养老",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "90后老师自制班级“热搜榜”",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "白宫：不希望冲突 尊重一个中国政策热",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "中动协：已派专家在美照料丫丫",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "主妇起诉离婚才知丈夫年薪300万",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "云南“健身猪”走红一头最高卖8万",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "男子无儿女8名亲戚争房产",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "街访理想工作：有人想捡垃圾",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
            ];
        }, 2000);
    },
    methods: {},
};
</script>
<style lang="scss">
html,
body {
    padding: 0px;
    margin: 0px;
}

.container {
    padding: 10px 6px;
}
</style>
