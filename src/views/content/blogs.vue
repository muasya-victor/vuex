<template>
<div>

<!--  <category_dropdown/>-->
  <div>

    <select class="ring-1">
      <option>category</option>
      <option v-for="(blog, index) in $store.state.blog_categories " :key="index" @click="getCategory(blog)">
        <h6>
          {{blog}}
        </h6>
      </option>
    </select>
  </div>

  <!------------------------------------------------------display same category blogs ---------------------------------------------------------------------->


  <div class="rounded-xl ring-1 w-11/12 mb-1 py-4 mx-auto"
  v-if="show_blogs === true">


    <div v-show="$store.state.similar_blogs.length == 0">
      <img src="@/assets/loader.gif" class="mx-auto">

    </div>

      <div v-for="(blog, index) in $store.state.similar_blogs "
           v-show="$store.state.similar_blogs.length != 0"
           :key="index"
           class="ring-1 w-11/12 mb-1 rounded-xl mx-auto"
      >

          <h1>{{blog.title}}</h1>
          <h1>{{blog.body}}</h1>

      </div>
  </div>





  </div>

</template>

<script>
// import category_dropdown from "@/components/category_dropdown";

export default {
  name: "blogs",
  data(){
    return {
      show_blogs : false
    }
  },
  methods : {
    getCategory(value){
      this.show_blogs = true
      this.$store.dispatch('getSameCategoryBlogs', value)
      console.log(value, "alaaa")
    }
  }

}
</script>

<style scoped>

</style>