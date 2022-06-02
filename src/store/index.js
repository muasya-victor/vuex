import { createStore } from 'vuex'
import axios from "axios";
import blogs from "@/views/content/blogs";


const url = 'https://gracieblog.herokuapp.com/posts'
const headers = {Accept : 'application/json'}

export default createStore({
  state: {
    blogs : ''

  },
  getters: {
    async getAllBlogs(state, payload){
     return blogs
    }
  },
  mutations: {
    addBlogs(state, payload){
      // this.state.blogs.push(payload)
    },
    getAllBlogs(state, payload){
      this.state.blogs = payload
      console.log('payload', payload)
    },
    getSpecificBlog(){

    },
    deleteBlog(){

    },
    updateBlogBody(){

    },
    getSameCategoryBlogs(){

    }
  },
  actions: {
  //  asynchronous functions
    addBlogs(state, payload){
      // this.state.blogs.push(payload)
    },
    getAllBlogs({commit}){
      axios.get(url, {headers}).then(response =>{
        commit('getAllBlogs',response.data)
      })
    },
    getSpecificBlog(){

    },
    deleteBlog(){

    },
    updateBlogBody(){

    },
    getSameCategoryBlogs(){

    }
  },
  modules: {
  }
})
