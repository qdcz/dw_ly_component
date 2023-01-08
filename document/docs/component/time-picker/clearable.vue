<template>
  <div>
    <p>
      配置 clearable 属性 可清除当前的选中的时间
    </p>
    <dw-time-picker
      clearable
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
