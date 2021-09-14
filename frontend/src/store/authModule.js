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
    namespaced: true
}