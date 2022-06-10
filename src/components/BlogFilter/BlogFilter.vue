<template>
  <div>
    <div class=" rounded-xl shadow shadow-xl shadow-gray-500 bg-white text-black font-bold text-xl min-w-fit px-8 py-4 flex flex-col justify-around gap-8 items-center">
      <div class="flex justify-between items-center gap-8">

        <!--  title drop down-->
<!--        <label for="select" class="font-mono text-gray-600">Title</label>-->
        <div>
          <select class="bg-white" name="select">
            <option>Title</option>
            <option v-for="(blog, index) in $store.state.blog_categories " :key="index" @click="getCategory(blog)">
              {{blog}}
            </option>
          </select>
        </div> |

        <!--  category drop down-->
        <div>
<!--          <label for="select" class="font-mono text-gray-600">Category</label>-->
          <select class="bg-white px-2" name="select" >
            <option>Category</option>
              <option class="hover:bg-gray-300"
                  v-for="(blog, index) in $store.state.blog_categories " :key="index" @click="getCategory(blog)">
                  {{blog}}
              </option>
          </select>
        </div>

      </div>





    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
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