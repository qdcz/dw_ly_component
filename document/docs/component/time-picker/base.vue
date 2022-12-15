<template>
  <div>
    <p>
      适用广泛的基础单选 v-model 的值为当前被选中的 vi-option 的 value 属性值
    </p>
    <vi-time-picker
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      placeholder="Arbitrary time"
      clearable
      :disabledHours="[1, 2, 3, 4, 5, 6]"
      :disabledMinutes="[5, 12, 13, 18]"
      :disabledSeconds="[10, 11, 15]"
    ></vi-time-picker>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { VITimePicker } from "../../../../dist/component/all/index.full.min.mjs";
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
<style scoped>
.vp-doc li + li {
  margin: 0;
}
</style>
