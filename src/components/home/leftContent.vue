<template>
  <div class="left-content">
    <layer-control></layer-control>
    <todo-work></todo-work>
  </div>
</template>

<script>

  import LayerControl from '@/components/home/layerControl.vue'
  import TodoWork from '@/components/home/todoWork.vue'

  export default {
    name:'leftContent',
    components: {
      LayerControl,
      TodoWork
    }
  }
</script>

<style lang="less" scoped>
  .left-content {
    width: 15%;
    height: 100%;
  }
</style>