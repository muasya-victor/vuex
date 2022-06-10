<template>
  <div >
    <div class="h-fit flex flex-col items-center justify-center m-0 -z-10">
      <blog-image />

      <sidebar class="-mt-8 z-30"/>



    </div>
  </div>

</template>

<script>
// import category_dropdown from "@/components/category_dropdown";
import blogImage from "@/components/includes/BlogWelcomeSection";
import sidebar from "@/components/BlogFilter/BlogFilter";

export default {
  name: "blogs",
  components : {
    blogImage,
    sidebar
  },


}
</script>

<style scoped>

</style>