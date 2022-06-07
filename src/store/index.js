import { createStore } from 'vuex'
import axios from "axios";


const url = 'https://gracieblog.herokuapp.com/posts'
const same_category_url = 'https://gracieblog.herokuapp.com/category'
const headers = {Accept : 'application/json'}

export default createStore({
  state: {
    blogs : '',
    similar_blogs : ''

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
      console.log('payload', payload)
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
          console.log('category this ', response.data, url )
        })
    }
  },
  modules: {
  }
})
