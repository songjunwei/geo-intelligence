<template>
  <div class="home">
    <p>{{name}}</p>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      name: this.$store.getters.name
    }
  },
  components: {
    HelloWorld
  }
}
</script>
