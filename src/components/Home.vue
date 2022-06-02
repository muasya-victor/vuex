<template>
  <div class="hello">
    <h1 class="bg-gray-100">this is home</h1>
        <div v-for="(blog, index) in $store.state.blogs " :key="index">
          <h1 class="text-2xl text-gray-700 capitalize">{{blog.title}}</h1>
          <h3 class="text-xl text-gray-700 capitalize">{{blog.title}}</h3>
          <p class="tracking-wide">{{ blog.body }}</p>
        </div>

<!--    {{ $store.state.blogs }}-->

    <button class="bg-amber-500 rounded-2xl px-4 py-2" @click="$store.dispatch('getAllBlogs')">click me</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },


}
</script>



















<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
