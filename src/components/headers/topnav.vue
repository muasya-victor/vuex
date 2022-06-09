<template>
  <div class="w-screen px-4 py-6 ">
    <nav class=" lg:flex gap-8 px-8 items-center justify-around hidden">




      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blogs">Blog</router-link>
    </nav>


<!--mobile view -->
    <div class="lg:hidden flex items-center text-gray-800 mb-0 py-4 outline-0 justify-around">

      <svg  @click="toggle_nav_bar" xmlns="http://www.w3.org/2000/svg" class="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>

      <h1 class="capitalize font-bold italic text-2xl font-mono">gracieblog</h1>

      <h1 class="capitalize font-mono italic text-xl">Sign in</h1>
    </div>

    <!--      links-->
    <div v-if="toggle_nav === true" class="lg:hidden flex flex-col" @mouseleave="toggle_nav_bar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blogs">Blog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "topnav",
  data  (){
    return {
      toggle_nav : false
    }
  },
  methods : {
    toggle_nav_bar (){
      this.toggle_nav = !this.toggle_nav
    }
  }
}
</script>

<style scoped>



nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
