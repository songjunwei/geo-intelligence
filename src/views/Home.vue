<template>
  <div class="home">
    <p>{{name}}</p>

    <hello-world msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/helloWorld.vue'

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
