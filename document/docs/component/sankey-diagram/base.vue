<template>
  <div>
    <p>
      这是一个简单展示人员与系统之间的关系，选中指定的人或者系统能激活他们之间的联系。
    </p>

    <dw-sankey-diagram ref="sankeyDiagramRef" @select="getCurrentSelect"></dw-sankey-diagram>

    <p>当我们调用<span>clearAllActive</span>方法可清除当前激活的状态</p>
    尝试下👉:<button class="clear" @click="clear">清空选中效果</button>
    <p>当我们监听<span>@select</span>事件时可获取到当前选中的信息及关联信息</p>

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({
      dynamicCss: {

      },
    });

    const sankeyDiagramRef = ref(null)

    const clear = () => {
      sankeyDiagramRef.value.clearAllActive()
    };

    const getCurrentSelect = (data) => {
      console.log("event:getCurrentSelect", data);
    };
    return {
      data,
      sankeyDiagramRef,
      clear,
      getCurrentSelect
    };
  },
});
</script>
<style scoped>
.clear {
  margin-bottom: 10px;
  padding: 4px 10px;
  cursor: pointer;
  font-weight: 900;
  transition: 0.7s;
  border: solid 1px rgb(222, 227, 228);
  border-radius: 4px;
}

.clear:hover {
  color: rgb(7, 102, 255);
  border: solid 1px rgb(7, 102, 255);
  background: rgb(201, 244, 252);
}


span {
  background-color: #f1f1f1;
  margin: 0 4px 4px 0;
  border-radius: 4px;
  padding: 2px 8px;
  color: #476582;
  font-size: 12px;
}
</style>
