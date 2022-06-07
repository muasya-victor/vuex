<template>
<div>

  <div>
    <select>
      <option>category</option>
      <option v-for="(blog, index) in $store.state.blogs " :key="index" @click="$store.dispatch('getSameCategoryBlogs'); getCategory(blog.category)">
        <h6>
          {{blog.category}}
        </h6>
      </option>
    </select>
  </div>

  <!------------------------------------------------------display same category blogs ---------------------------------------------------------------------->

  <div class="rounded-xl ring-1 w-11/12 mb-1 py-4 mx-auto"
  v-if="show_blogs === true">
      <div v-for="(similar_blog, index) in $store.state.similar_blogs "
           :key="index"
           class="ring-1 w-11/12 mb-1 rounded-xl mx-auto"
      >
          <h1>{{similar_blog.title}}</h1>
          <h1>{{similar_blog.body}}</h1>
      </div>
  </div>





  </div>

</template>

<script>
export default {
  name: "blogs",
  data(){
    return {
      show_blogs : false
    }
  },
  methods : {
    getCategory(value){
      this.show_blogs = !this.show_blogs
      this.category= value
      this.$store.dispatch('getSameCategoryBlogs',value)
      console.log(value, "here")
    }
  }

}
</script>

<style scoped>

</style>