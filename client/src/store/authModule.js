export const authModule = {
    state: () => ({
      authed: false,
      token: "",
      profile: {type: Object},
      rolesArray: []
    }),
    mutations: {
      authExit(state, exit){
          state.authed = exit;
      },
      newToken(state, token){
          state.token = token;
      },
      editProfile(state, profile){
        state.profile = profile;
      },
      editRoles(state, roles){
        state.rolesArray = roles
      }
    },
    getters: {
      gettoken(state){
        return state.token
      }
    },
    namespaced: true
}