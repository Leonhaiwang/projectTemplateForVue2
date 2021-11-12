<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {apiTest} from '../request/api'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  create(){
    this.onload()
  },
  methods:{
    onload(){
      apiTest().then(res=>{
        //处理数据操作
      })
    }
  }
}
</script>
