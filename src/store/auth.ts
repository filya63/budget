export default {
  namespaced: true,
  state: {
    isAuth: false
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getAuthStatus: (state: any):boolean => {
      return state.isAuth
    }
  }
}
