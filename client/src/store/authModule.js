export const authModule = {
    state: () => ({
      authed: false,
      token: "",
      profile: {type: Object}
    }),
    actions:{
      SIGN_UP_API(authData){      
      }      
    },
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