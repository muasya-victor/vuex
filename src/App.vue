<template>
  <div class="bg-white">
    <topnav/>
    <router-view/>
  </div>
</template>


<script>
import topnav from "@/components/headers/TheHeader";
export default {
  mounted() {
    this.$store.dispatch("getAllBlogs")
  },
  components : {
    topnav
  }
}
</script>

<style>

</style>