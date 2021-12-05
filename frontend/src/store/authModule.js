export const authModule = {
    state: () => ({
      authed: null,
      token: ""
    }),
    mutations: {
      authexit(state, exit){
          state.authed = exit;
      },
      tokenin(state, token){
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