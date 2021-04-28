import { createStore } from 'vuex'

export default createStore({
  state: {
    server: "http://localhost:3000"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getServer: (state) => {
      return state.server
    }
  }
})
