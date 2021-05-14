import { createStore } from 'vuex'

export default createStore({
  state: {
    server: "http://abna.ngknn.ru:8001",
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
