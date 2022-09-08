<template>
  <div class="container">
    <div>{{ msg }}</div>
    <div>{{ propData }}</div>
  </div>
</template>

<script>
import * as VUE from 'vue'
export default {
  name: 'yyl-npm-practice',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    propData: {
      type: String,
      default: '我是默认值'
    }
  },
  setup(){
    
  },
  VUE
}
</script>

<style >
.container {
  text-align: center;
}
</style>