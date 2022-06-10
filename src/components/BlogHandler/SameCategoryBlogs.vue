<template>
  <div>




    hereeee
    <!------------------------------------------------------display same category blogs ---------------------------------------------------------------------->

    <div class=" flex justify-center">
      <blog-image/>
    </div>

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
import blogImage from "@/components/includes/BlogWelcomeSection";

export default {
  name: "blogs",
  components : {
    blogImage
  },
  data(){
    return {
      show_blogs : false
    }
  },


}
</script>

<style scoped>

</style>