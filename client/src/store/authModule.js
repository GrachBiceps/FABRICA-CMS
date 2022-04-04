export const authModule = {
    state: () => ({
      authed: null,
      token: ""
    }),
    mutations: {
      authExit(state, exit){
          state.authed = exit;
      },
      newToken(state, token){
          state.token = token;
      }
    },
    getters: {
      gettoken(state){
        return state.token
      }
    },
    namespaced: true
}