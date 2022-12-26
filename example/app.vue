<template>
  <div class="container">
    <div>
      <dw-scroll-bar height="100px" :dynamicCss="{}">
        <div v-for="i in aaa">
          {{ i }}
        </div>
      </dw-scroll-bar>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "demo",
  data() {
    return {
      selectData_current: "zhangzhou",
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
      selectData_dynamicCss: {

      },
      aaa: 9
    };
  },
  mounted() {
    setInterval(() => {
      this.aaa = this.aaa + 10
    }, 5000)
  },
  methods: {
    /**
     * select
     */
    handleSelected(v) {
      console.log("handleSelected", v);
    },
    handleClear() {
      console.log("handleClear");
    },
  },
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
