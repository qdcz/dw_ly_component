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
import { log } from "console";
import { nextTick } from "process";
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
                },
                {
                    label: "字段2",
                    prop: "field2",
                    basis: "16.6",
                    type: "longText",
                },
                {
                    label: "字段3",
                    prop: "field3",
                    basis: "16.6",
                    type: "text",
                },
                {
                    label: "字段4",
                    prop: "field4",
                    basis: "16.6",
                    type: "text",
                },
                {
                    label: "字段5",
                    prop: "field5",
                    basis: "16.6",
                    type: "text",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务a4s65d46a5s4df65as4f65ad4s65f",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务a4s65d46a5s4df65as4f65ad4s65f",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {});

        setTimeout(() => {
            this.list = [
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务a4s65d46a5s4df65as4f65ad4s65f",
                    field3: "深圳市互联网...",
                    field4: "河南九天遥感科技",
                    field5: "安全预警",
                    field6: "157.76",
                },
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务a4s65d46a5s4df65as4f65ad4s65f",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
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
                {
                    field1: "DP000037",
                    field2: "工商信息数据服务",
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
