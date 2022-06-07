<template>
  <div>
    <select>
      <option>category</option>
      <option v-for="(blog, index) in $store.state.blogs " :key="index" @click="$store.dispatch('getSameCategoryBlogs')"
      @getCategory="blog.category">
        <h6>
          {{blog.category}}
        </h6>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "category_dropdown",
  methods : {
    getCategory(category) {
      this.$emit('getCategory',category)
      console.log('sth done')
    }
  }
}
</script>

<style scoped>

</style>