<template>
  <div class="bg-white ">
    <TheHeader class="absolute top-0 sticky bg-white z-50 shadow p-0 "/>
    <router-view/>
  </div>
</template>


<script>
import TheHeader from "@/components/headers/TheHeader";
export default {
  mounted() {
    this.$store.dispatch("getAllBlogs")
  },
  components : {
    TheHeader
  }
}
</script>

<style>

</style>