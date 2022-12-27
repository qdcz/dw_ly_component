<template>
  <div>
    <p>
      设置
      <span>thumbWidth="20px"</span>
      属性可设置滚动条的厚度
    </p>
    <div class="componentWrapper">
      <dw-scroll-bar
        height="300px"
        width="600px"
        thumbWidth="20px"
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
