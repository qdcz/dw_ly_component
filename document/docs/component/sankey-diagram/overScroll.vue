<template>
    <div>
        <p>自带了超出滚动容器，只需要配置 <span>heightScroll</span>为true,且设置<span>height</span>为你自己想要的固定高度即可</p>
        <dw-sankey-diagram :heightScroll="true" :height="'200'" :width="'700'"></dw-sankey-diagram>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    setup() {

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
</style>