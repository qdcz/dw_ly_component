<template>
  <div>
    <p>
      当选项过多时 可配置 search 属性 将在下拉框中出现搜索框
      可对想要的结果进行搜索过滤
    </p>
    <p>searchImg 属性为输入框的左icon图标 不传默认使用内置的svg图片</p>
    <dw-select-v2 v-model="data.currentSelect" :list="data.dropDownList" search clearable :dynamicCss="data.dynamicCss"
      placeholder="选择您需要的市区" @handleSelected="handleSelected" @handleClear="handleClear">
      <dw-select-v2-option v-for="i in data.dropDownList" :key="i.value" :label="i.label" :value="i.value">
      </dw-select-v2-option>
    </dw-select-v2>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({
      currentSelect: "",
      dynamicCss: {
        "popper-search-bg-color": "#fff",
        "ani-transition": "1",
      },
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
<style  scoped>
.vp-doc li+li {
  margin: 0;
}
</style>
