<template>
  <div>
    <p>
      单选框不应该有太多的可选项，
      如果你有很多的可选项你应该使用选择框而不是单选框。
    </p>
    <p>
      要使用 Radio 组件，只需要设置<span>v-model</span>绑定变量，
      选中意味着变量的值为相应
      <span>value</span>属性的值，
      <span>value</span>可以是<span>String</span>、<span>Number</span> 或
      <span>Boolean</span>，<span>label</span>对应的是显示的文案信息。
    </p>
    <dw-radio-group v-model="data.currentSelect" @change="change">
      <dw-radio label="低预警" :value="1"></dw-radio>
      <dw-radio label="中预警" :value="2"></dw-radio>
      <dw-radio label="高预警" :value="3"></dw-radio>
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
