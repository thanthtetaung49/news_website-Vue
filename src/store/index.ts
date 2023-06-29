import { createStore } from 'vuex'

export default createStore({
  state: {
    token: "",
    userData: ""
  },
  getters: {
    // get data 
    storeToken: (state) => state.token,
    storeUserData: (state) => state.userData
  },
  mutations: {
  },
  actions: {
    // set data
    setToken: ({ state }, value) => state.token = value,
    setUserData: ({ state }, value) => state.userData = value
  },
  modules: {
  }
})
