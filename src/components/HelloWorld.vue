<template>
  <div class="hello">
    <p>全局style测试</p>
    <el-tag v-for="title in titles" :key="title">{{title}}</el-tag>
    <el-button type="primary" @click="handleClick">主要按钮</el-button> 
  </div>
</template>

<script>

  import {getTitles} from '@/api'

export default {
  name: 'HelloWorld',
  data(){
    return {
      titles: []
    }
  },
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      alert(this.msg)
    }
  },
  async mounted() {

    const res = await getTitles()
    debugger
    this.titles = res.data
  }
}
</script>


<style scoped lang="less">


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
