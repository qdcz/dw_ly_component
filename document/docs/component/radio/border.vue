<template>
  <div>
    <p>设置 <span>border</span> 属性为 true 可以渲染为带有边框的单选框。</p>
    <vi-radio-group v-model="data.currentSelect" @change="change">
      <vi-radio label="低预警" :value="1" border></vi-radio>
      <vi-radio label="中预警" :value="2" border></vi-radio>
      <vi-radio label="高预警" :value="3" disabled="111" border></vi-radio>
      <vi-radio label="正常" :value="4" border></vi-radio>
    </vi-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({
      currentSelect: "",
      currentSelect1: "",
      dynamicCss: {
        margin: "10px",
      },
    });

    const change = (e) => {
      console.log("event:change", e);
    };
    return {
      data,
      change,
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
