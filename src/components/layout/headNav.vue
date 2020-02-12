<template>
  <div class="head-nav">
    <el-row>
      <el-col :span="4">
        <img src="../../assets/img/logo.png"/>
      </el-col>
      <el-col :span="16"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'head-nav'
  }
</script>

<style lang="less" scoped>
  .head-nav {
    height: 50px;
  }
</style>