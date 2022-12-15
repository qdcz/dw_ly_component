<template>
  <div>
    <p>多选模式下 当文字过长被超出隐藏的时候 可开启 tooltip 属性 即可达到悬浮展示全部文本(或者将 tag-max-width 调到很大比如1000px)</p>
    <vi-select-v2
      v-model="data.currentSelect"
      :list="data.dropDownList"
      clearable
      tooltip
      mode="multiple"
      :dynamicCss="data.dynamicCss"
      placeholder="选择您需要的市区"
      @handleSelected="handleSelected"
      @handleClear="handleClear"
    >
      <vi-select-v2-option
        v-for="i in data.dropDownList"
        :key="i.value"
        :label="i.label"
        :value="i.value"
      >
      </vi-select-v2-option>
    </vi-select-v2>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import {
  VISelectV2,
  VISelectV2Option,
} from "../../../../dist/component/all/index.full.min.mjs";
export default defineComponent({
  components: {
    "vi-select-v2": VISelectV2,
    "vi-select-v2-option": VISelectV2Option,
  },
  setup() {
    const data = reactive({
      currentSelect:[],
      dynamicCss:{},
      dropDownList: [
        { value: "xiamen", label: "厦门" },
        { value: "fuzhou", label: "福州" },
        { value: "zhangzhou", label: "漳州" },
        { value: "sanming", label: "三明" },
        { value: "longyan", label: "龙岩" },
        { value: "putian", label: "莆田" },
        { value: "quanzhou", label: "泉州" },
        { value: "nanping", label: "南平" },
        { value: "ningde", label: "宁德" },
      ],
    });
    const handleSelected = function (v) {
      console.log("handleSelected", v);
    };
    const handleClear = function (v) {
      console.log("handleClear", v);
    };
    return {
      data,
      handleSelected,
      handleClear,
    };
  },
});
</script>
<style lang="sass" scoped></style>
