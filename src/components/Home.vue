<template>
  <div class="hello flex flex-wrap p-2 justify-center ">
        <div v-for="(blog, index) in $store.state.blogs " :key="index" class="ring-1 m-1 rounded-2xl w-11/12 md:w-2/5 " >







          <div class="flex justify-between md:px-5 px-2 items-center underline text-blue-500" >


<!--            <h1 class="text-2xl  capitalize" >{{blog.title}}</h1>-->
            <h1 v-if="blog.title !== '' " class="text-2xl  capitalize" >{{blog.title}}</h1>
            <h1 v-else class="text-2xl  capitalize" >No title found</h1>

            <h1>{{index}}</h1>
          </div>
<!--          <div v-else>-->
<!--            <h1 class="text-2xl  capitalize">No category found</h1>-->
<!--          </div>-->

          <div class="flex flex-col items-start md:px-5 px-2 tracking-wider">
            <h3 class="text-xl text-blue-400 capitalize">{{blog.title}}</h3>
            <p class="tracking-wide">{{ blog.body }}</p>
          </div>

        </div>
  </div>
<!--    {{ $store.state.blogs }}-->

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      category : ''
    }
  },
  methods : {
    getCategory(value){
      this.category= value
      this.$store.dispatch('getSameCategoryBlogs',value)
      console.log(value, "here")
    }
  }


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
