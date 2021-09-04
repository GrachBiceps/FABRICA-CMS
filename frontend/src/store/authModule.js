export const authModule = {
    state: () => ({
      authed: null
    }),
    mutations: {
      authexit(state, exit){
          state.authed = exit;
      }
    },
    namespaced: true

}