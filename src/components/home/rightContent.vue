<template>
  <div class="right-content">
    <geo-class-chart></geo-class-chart>
    <system-notice></system-notice>
  </div>
</template>

<script>
 import GeoClassChart from '@/components/home/geoClassChart.vue'
 import SystemNotice from '@/components/home/systemNotice.vue'

  export default {
    name:'rightContent',
    components: {
      GeoClassChart,
      SystemNotice
    }
  }
</script>

<style lang="less" scoped>
  .right-content {
    width: 15%;
    height: 100%;
  }
</style>