<template>
  <div>
    <p>
      设置layout,表示需要显示的内容,用逗号分隔,布局元素会依次显示。
      <br />
      prev表示上一页,next为下一页,pager表示页码列表,jumpe表示快速跳转,total表示总条目数,size表示设置每页显示的页码数量
    </p>

    <p>只配置了 "prev, pager, next"</p>
    <vi-pagination
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      :page-size="10"
      :pager-count="7"
      :total="1200"
      @size-change="sizeChange"
      @current-change="currentChange"
      layout="prev, pager, next"
    ></vi-pagination>

    <p>配置了 "total, prev, pager, next, jump"</p>
    <vi-pagination
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      :pager-count="7"
      :total="1200"
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-size="10"
      layout="total,prev, pager, next,jump"
    ></vi-pagination>

    <p>配置了全部 "total, prev, size, pager, next, jump"</p>
    <p>注意：配置了size 之后 page-size 属性应该为数组 如：:page-size="[50, 100, 200, 500, 1000]"</p>
    <vi-pagination
      v-model="data.currentSelect1"
      :dynamicCss="data.dynamicCss"
      :pager-count="7"
      :total="1200"
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-size="[50, 100, 200, 500, 1000]"
      layout="total, size,prev, pager, next,jump"
    ></vi-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { VIpagination } from "../../../../dist/component/all/index.full.min.mjs";
export default defineComponent({
  components: {
    "vi-pagination": VIpagination,
  },
  setup() {
    const data = reactive({
      currentSelect: "",
      currentSelect1: "",
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
