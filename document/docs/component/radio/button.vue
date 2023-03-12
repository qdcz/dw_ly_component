<template>
  <div>
    <p>
      你可以让单选框看起来像一个按钮一样。
    </p>
    <p>
      只需要把 <span>dw-radio</span> 元素换成 <span>dw-radio-button</span> 元素即可。
    </p>
    <dw-radio-group v-model="data.currentSelect" @change="change">
      <dw-radio-button label="低预警" :value="1"></dw-radio-button>
      <dw-radio-button label="中预警" :value="2"></dw-radio-button>
      <dw-radio-button label="高预警" :value="3"></dw-radio-button>
      <dw-radio-button label="正常" :value="4"></dw-radio-button>
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
