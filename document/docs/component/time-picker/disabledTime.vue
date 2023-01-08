<template>
  <div>
    <p>可以禁用指定的数值，使其为不可选状态</p>
    <p>
      disabledHours 为禁用的小时数
      <span>:disabledHours="[1, 2, 3, 4, 5, 6]"</span>
    </p>
    <p>
      disabledMinutes 为禁用的分钟数
      <span>:disabledMinutes="[5, 12, 13, 18]"</span>
    </p>
    <p>
      disabledSeconds 为禁用的秒数
      <span>:disabledSeconds="[10, 11, 15]"</span>
    </p>
    <dw-time-picker
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      placeholder="Arbitrary time"
      clearable
      :disabledHours="[1, 2, 3, 4, 5, 6]"
      :disabledMinutes="[5, 12, 13, 18]"
      :disabledSeconds="[10, 11, 15]"
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
