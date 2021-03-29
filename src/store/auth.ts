export default {
  namespaced: true,
  state: {
    isAuth: false,
    email: null,
    expiresIn: null,
    idToken: null,
    kind: null,
    localId: null,
    refreshToken: null,
  },
  mutations: {
    setUser(state:any, payload:any) {
      state.email = payload.email;
      state.expiresIn = payload.expiresIn;
      state.idToken = payload.idToken;
      state.kind = payload.kind;
      state.localId = payload.localId;
      state.refreshToken = payload.refreshToken;
    }
  },
  actions: {
    login() {
      // действия с логином
    },
    registration(_:any, payload: any) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDhoyyMUnReE0Mej8TeAV7oRUtGaREtyxE', {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .catch(err => console.log('Ошибка ', err))
    }
  },
  getters: {
    getAuthStatus: (state: any):boolean => {
      return state.isAuth
    }
  }
}
