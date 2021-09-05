export const authModule = {
    state: () => ({
      authed: null,
      token: ""
    }),
    mutations: {
      authexit(state, exit){
          state.authed = exit;
      }
    },
    namespaced: true

}