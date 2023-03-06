<template>
    <div class="container">
        <div>
            <!-- <dw-time-picker
                v-model="currentSelect"
                :dynamicCss="dynamicCss"
            ></dw-time-picker> -->

            <div style="margin-top: 10px;"></div>
            <dw-roll-list></dw-roll-list>
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
            currentSelect: "",
            selectData_dropDownList: [
                { value: "xiamen", label: "厦门阿斯顿撒旦" },
                { value: "fuzhou", label: "福州" },
                { value: "zhangzhou", label: "漳州" },
                { value: "sanming", label: "三明" },
                { value: "longyan", label: "龙岩" },
                { value: "putian", label: "莆田" },
                { value: "quanzhou", label: "泉州" },
                { value: "nanping", label: "南平" },
                { value: "ningde", label: "宁德" },
            ],
            dynamicCss: {},
            aaa: 100,
            noResize: false,
            refs: "",
        };
    },
    mounted() {
        this.$nextTick(() => {});
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
