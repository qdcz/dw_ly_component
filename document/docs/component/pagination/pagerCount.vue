<template>
  <div>
    <p>
      默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过 pager-count 属性可以设置最大页码按钮数，最多为29个
    </p>
    <dw-pagination
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      :pager-count="9"
      :total="1200"
      background
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-size="[50, 100, 200, 500, 1000]"
      layout="total, size,prev, pager, next,jump"
    ></dw-pagination>
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
