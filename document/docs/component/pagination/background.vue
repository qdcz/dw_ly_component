<template>
  <div>
    <p>
      设置 background 属性可以为分页按钮添加背景色。
    </p>
    <vi-pagination
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      :pager-count="7"
      :total="1200"
      background
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-size="[50, 100, 200, 500, 1000]"
      layout="total, size,prev, pager, next,jump"
    ></vi-pagination>
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

    const sizeChange = (e) => {
      console.log("event:sizeChange", e);
    };
    const currentChange = (e) => {
      console.log("event:currentChange", e);
    };
    return {
      data,
      sizeChange,
      currentChange,
    };
  },
});
</script>
