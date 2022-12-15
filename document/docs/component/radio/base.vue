<template>
  <div>
    <p>
      配置了全部 <span class="label">total, prev, size, pager, next, jump</span>
    </p>
    <vi-radio-group v-model="data.currentSelect" @change="change">
      <vi-radio label="预警-低" :value="1" disabled=""></vi-radio>
      <vi-radio label="预警-中" :value="2" :disabled="0"></vi-radio>
      <vi-radio label="预警-高" :value="3" :disabled="true"></vi-radio>
      <vi-radio label="正常" :value="4" :disabled="false"></vi-radio>
    </vi-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import {
  VIRadio,
  VIRadioGroup,
  VIRadioButton,
} from "../../public/componentDist/all/index.full.min.mjs";
export default defineComponent({
  components: {
    "vi-radio": VIRadio,
    "vi-radio-group": VIRadioGroup,
    "vi-radio-button": VIRadioButton,
  },
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
.label {
  background-color: #f1f1f1;
  margin: 0 4px 4px 0;
  border-radius: 4px;
  padding: 0 8px;
  color: #476582;
  display: inline-flex;
  font-size: 12px;
}
</style>
