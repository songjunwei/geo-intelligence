<template>
  <div 
    v-loading="loading"
    element-loading-text="拼命加载中..."
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style scoped>

</style>