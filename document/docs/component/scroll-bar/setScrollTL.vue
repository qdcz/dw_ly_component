<template>
    <div>
      <p>使用实例的方法可 动态控制滚动条的位置</p>
      <p>
        使用
        <span>setScrollTop</span>或者
        <span>setScrollLeft</span>方法 可以控制滚动条的位置
      </p>

      <p>TODO 待开发滑块组件</p>
      <div class="componentWrapper">
        <dw-scroll-bar
          height="300px"
          :dynamicCss="data.dynamicCss"
          :noResize="data.noResize"
        >
          <div v-for="i in 20" class="item">
            <div>{{ i }}</div>
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
  .item {
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    background-color: #e9f4ff;
  }
  .item:first-child,
  .item:last-child {
    margin: 0;
  }
  </style>
  