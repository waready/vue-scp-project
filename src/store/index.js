import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
    SetUserDetails(state,payload){
      console.log(payload)
      state.user = payload.email
    },
    salir(state){
      state.user = null
    }
  },
  actions: {
    loginUser({commit},payload){
      commit('SetUserDetails',{
        email:payload
      })
    },
    logout({commit}){
      commit('salir')
    }

  },
  modules: {
  }
})
