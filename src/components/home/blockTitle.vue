/* 首页头部组件 */
<template>
  <div class="block-title">
    {{titleName}}
  </div>
</template>

<script>
  export default {
    name: "blockTitle",
    props: {
      titleName: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .block-title {
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-bottom: 1px solid;
  }
</style>