export const navbarModule = {
    state: () => ({
      notificatinNavbar: 1,
      loader: false,
      navbarBtn: {
          Array: [
              {name: "Склад"},
              {name: "G"},
              {name: "AA"},
          ]
      }
    }),
    mutations: {
      notifNavbarEdit(state, res){
          state.notificatinNavbar = res
      },
      navbarBtnEdit(state, res){
          state.navbarBtn.Array = res
      },
      goLoading(state, res){
          state.loader =  !state.loader
      }
    },
    getters: {
      
    },
    namespaced: true
}