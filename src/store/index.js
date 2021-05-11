import { createStore } from 'vuex'

export default createStore({
  state: {
    server: "http://localhost:3000",
    viewStatus: 'list'
  },
  mutations: {
    changeView(state, view){
      state.viewStatus = view
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getServer: (state) => {
      return state.server
    },
    getViewStatus: state => {
      return state.viewStatus
    }
  }
})
