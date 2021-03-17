export default {
  namespaced: true,
  state: {
    isAuth: false,
    userId: null,
    idToken: null,
    refreshToken: null,
    expiresIn: null
  },
  mutations: {
  },
  actions: {
    login() {
      // действия с логином
    },
    async registration(_:any, payload: any) { // https://firebase.google.com/docs/reference/rest/auth
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDhoyyMUnReE0Mej8TeAV7oRUtGaREtyxE', {
        method: 'POST',
        body: JSON.stringify({
          token: payload.token, // Это нужно уточнять, что за токен должен передаваться
          returnSecureToken: true
        })
      })
    }
  },
  getters: {
    getAuthStatus: (state: any):boolean => {
      return state.isAuth
    }
  }
}
