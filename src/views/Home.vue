<template>
  <div class="home">
    <!-- <p>{{name}}</p>
    <hello-world msg="Welcome to Your Vue.js App"/> -->
    <left-content></left-content>
    <Map></Map>
    <right-content></right-content>
  </div>
</template>

<script>
import LeftContent from '@/components/home/leftContent.vue'
import RightContent from '@/components/home/rightContent.vue'
import Map from '@/views/map'

export default {
  name: 'Home',
  data() {
    return {
      name: this.$store.getters.name
    }
  },
  components: {
    LeftContent,
    RightContent,
    Map
  }
}
</script>

<style lang="less" scoped>
  .home {
    display: flex;
    height: calc(~"100% - 5px");
  }
</style>
