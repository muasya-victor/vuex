import { createStore } from 'vuex'
import axios from "axios";


const url = 'https://gracieblog.herokuapp.com/posts'
const headers = {Accept : 'application/json'}

export default createStore({
  state: {
    blogs : '',
    blog_categories : [],
    similar_blogs : []

  },
  getters: {
    async getAllBlogs(state, payload){
     return this.state.blogs
    }
  },
  mutations: {
    addBlogs(state, payload){
    },
    getAllBlogs(state, payload){
      this.state.blogs = payload
      (payload.map(blog => {
        if (!this.state.blog_categories.includes(blog.category)){
          this.state.blog_categories.push(blog.category)
          return this.state.blog_categories
        }

      }))

    },
    getSpecificBlog(){

    },
    deleteBlog(){

    },
    updateBlogBody(){

    },
    getSameCategoryBlogs(state, payload){
      this.state.similar_blogs = payload
      // console.log('same category blogs', payload)
      return this.state.similar_blogs
    }
  },
  actions: {
    addBlogs(state, payload){
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
    getSameCategoryBlogs({commit}, category){
        axios.get(url + '/category/' + category, {headers}).then(response =>{
          commit('getSameCategoryBlogs', response.data)
        })
    }
  },
  modules: {
  }
})
