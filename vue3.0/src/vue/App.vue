<script setup lang="ts">
import { reactive } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld1 from './components/HelloWorld.vue'
import HelloWorld2 from '../package/button/button.vue'
// import aaa from '../../es/test.mjs'

import aaa from '../package/button/index'
console.log(aaa)


let data = reactive({
  selectData:new Array(50).fill(0).map(i=>{
				return {id:Math.random(),name:"我是列表"+Math.random()}
			}),
  curSelect: {
    name: "我是一个默认数据",
    id: 1000
  },
  curSelect1: "",
  curSelect2: [{ name: "我是选中数据", id: 1000 }],
  curSelect3: [],
})
</script>

<template>
  <!-- <HelloWorld1 msg="Vite + Vue" /> -->
  <!-- <HelloWorld2 msg="Vite + Vue" /> -->
  <MyComponent msg="Vite + Vue" mode="mutilate" :drowdownList="data.selectData"  v-model:curSelect="data.curSelect" >1</MyComponent>
  <!-- <MyComponent msg="Vite + Vue" /> -->
  <!-- <aaa type="primary">
    <i class="vi-icon-paperplane-fill"></i>
    默认按钮
  </aaa> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
