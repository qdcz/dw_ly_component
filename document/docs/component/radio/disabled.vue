<template>
  <div>
    <p>
      <span>disabled</span> 属性可以用来控制单选框的禁用状态。
      你只需要为单选框设置
      <span>disabled</span> 属性就能控制其禁用状态。以下三种写法都可：
    </p>
    <p>
      <span>disabled="随意值，只要不是空字符"</span><br />
      <span>:disabled="1"</span><br />
      <span>:disabled="true"</span><br />
    </p>
    <dw-radio-group v-model="data.currentSelect" @change="change">
      <dw-radio label="低预警" :value="1" disabled="exit"></dw-radio>
      <dw-radio label="中预警" :value="2" :disabled="1"></dw-radio>
      <dw-radio label="高预警" :value="3" :disabled="true"></dw-radio>
      <dw-radio label="正常" :value="4"></dw-radio>
    </dw-radio-group>
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
