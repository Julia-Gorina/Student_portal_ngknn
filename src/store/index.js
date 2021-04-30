import { createStore } from 'vuex'

export default createStore({
  state: {
    server: "http://192.168.100.20:8000"

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
