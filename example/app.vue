<template>
  <div class="container">
    <!-- <div>
      <dw-select-v2
        v-model="selectData_current"
        :dynamicCss="selectData_dynamicCss"
        :list="selectData_dropDownList"
        mode="single"
        clearable
        showMore
        search
        @handleSelected="handleSelected"
        @handleClear="handleClear"
      >
        <dw-select-v2-option
          v-for="i in selectData_dropDownList"
          :key="i.value"
          :label="i.label"
          :value="i.value"
        >
        </dw-select-v2-option>
      </dw-select-v2>
    </div> -->


    <div>
      <dw-scroll-bar height="100px">
        <div v-for="i in 30">
          {{ i }}
        </div>        
      </dw-scroll-bar>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "demo",
  data() {
    return {
      selectData_current: "zhangzhou",
      selectData_dropDownList: [
        { value: "xiamen", label: "厦门阿斯顿撒旦" },
        { value: "fuzhou", label: "福州" },
        { value: "zhangzhou", label: "漳州" },
        { value: "sanming", label: "三明" },
        { value: "longyan", label: "龙岩" },
        { value: "putian", label: "莆田" },
        { value: "quanzhou", label: "泉州" },
        { value: "nanping", label: "南平" },
        { value: "ningde", label: "宁德" },
      ],
      selectData_dynamicCss: {
		
	  },
    };
  },
  mounted() {

  },
  methods: {
    /**
     * select
     */
    handleSelected(v) {
      console.log("handleSelected", v);
    },
    handleClear() {
      console.log("handleClear");
    },
  },
};
</script>
<style lang="scss">
html,
body {
  padding: 0px;
  margin: 0px;
}

.container {
  padding: 10px 6px;
}
</style>
