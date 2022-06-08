<template>
 <div>
   <div class="hello flex flex-wrap p-2 justify-center ">
     <div v-for="(blog, index) in $store.state.blogs " :key="index"
          class="ring-1 m-1 rounded-2xl w-11/12 md:w-2/5 " >
       <div class="flex justify-between md:px-5 px-2 items-center underline text-blue-500" >
         <div class="flex flex-col items-start md:px-5 px-2 tracking-wider">
           <h3 class="text-xl text-blue-400 capitalize">{{blog.category}}</h3>
           <h3 class="text-xl text-blue-400 capitalize">{{blog.title}}</h3>
           <p class="tracking-wide">{{ blog.body }}</p>
         </div>
       </div>
       <!--      {{$store.state.blogs }}-->
     </div>
   </div>

<!--   ------------------------------------------------------------------------------------------------------------->
   <PostBlog/>
<!--   ------------------------------------------------------------------------------------------------------------->

 </div>

</template>

<script>
import PostBlog from "@/components/PostBlog";

export default {
  name: 'HelloWorld',
  components : {
    PostBlog
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
