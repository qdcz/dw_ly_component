<template>
  <div>
    <p>当容器内部元素的宽度大于容器宽度时，会显示横向滚动条。</p>
    <p>
      设置
      <span>width="600px"</span>
      属性设置容器的宽度，若不设置则根据父容器宽度自适应（默认值是auto）。
    </p>

    <p>
      设置
      <span>width="auto"</span>
      属性时，用户拖动视框的大小会动态计算横向滚动条的宽度及容器宽度
    </p>
    <div class="componentWrapper">
      <dw-scroll-bar
        height="300px"
        width="600px"
        :dynamicCss="data.dynamicCss"
        :noResize="data.noResize"
      >
        <div class="wrapper" v-for="j in 20">
          <div v-for="i in 20" class="item">
            <div>{{ i }}</div>
          </div>
        </div>
      </dw-scroll-bar>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({
      noResize: false,
      dynamicCss: {
        "thumb-bg-color": "#d9dfe3",
      },
    });
    return {
      data,
    };
  },
});
</script>
<style scoped>
span {
  background-color: #f1f1f1;
  margin: 0 4px 4px 0;
  border-radius: 4px;
  padding: 2px 8px;
  color: #476582;
  font-size: 12px;
}
.componentWrapper {
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 24px;
}

.wrapper {
  display: flex;
  flex-wrap: nowrap;
}
.item {
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: #e9f4ff;
  border-radius: 4px;
}
.item:first-child {
  margin: 10px 10px 10px 0;
}

.item:last-child {
  margin: 10px 0px 10px 10px;
}
</style>
