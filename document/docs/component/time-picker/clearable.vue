<template>
  <div>
    <p>
      配置 clearable 属性 可清除当前的选中的时间
    </p>
    <vi-time-picker
      clearable
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      placeholder="Arbitrary time"
    ></vi-time-picker>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { VITimePicker } from "../../public/componentDist/all/index.full.min.mjs";
export default defineComponent({
  components: {
    "vi-time-picker": VITimePicker,
  },
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
