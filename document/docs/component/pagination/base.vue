<template>
  <div>
    <p>
      设置layout,表示需要显示的内容,用逗号分隔,布局元素会依次显示。
      <br />
      <span class="label">prev表示上一页</span>
      <span class="label">next为下一页</span>
      <span class="label">pager表示页码列表</span>
      <span class="label">jump表示快速跳转</span>
      <span class="label">total表示总条目数</span>
      <span class="label">size表示设置每页显示的页码数量</span>
    </p>

    <p>只配置了 <span class="label">prev、pager、next</span></p>
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

    <p>配置了 <span class="label">total, prev, pager, next, jump</span></p>
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

    <p>
      配置了全部 <span class="label">total, prev, size, pager, next, jump</span>
    </p>
    <p>
      注意：配置了size 之后 page-size 属性应该为数组 如：:page-size="[50, 100,
      200, 500, 1000]"
    </p>
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
import { VIpagination } from "../../public/componentDist/all/index.full.min.mjs";
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
