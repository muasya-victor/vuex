<template>
  <div class="home">
    <Home/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
// import Home from "@/components/Home";

export default {
  name: 'HomeView',
  components: {
    Home
  }
}
</script>
