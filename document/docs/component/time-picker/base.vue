<template>
  <div>
    <p>可以选择任意时间</p>
    <p>
      提供了两种交互方式：一种是通过鼠标滚轮进行选择，第二种是通过点击指定的数字进行选择。
    </p>
    <p>点击取消可返回原来选择的值，失去焦点或者点击确定视为确定</p>
    <dw-time-picker
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      placeholder="Arbitrary time"
    ></dw-time-picker>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({
      currentSelect: "",
      dynamicCss: {
        margin: "10px",
      },
    });
    return {
      data,
    };
  },
});
</script>
