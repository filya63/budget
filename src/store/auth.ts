export default {
  namespaced: true,
  state: {
    isAuth: null
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getAuthStatus: (state: any): Boolean => {
      return state.isAuth
    }
  }
}
