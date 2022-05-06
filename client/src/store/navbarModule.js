export const navbarModule = {
    state: () => ({
      notificatinNavbar: 1,
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
      }
    },
    getters: {
      
    },
    namespaced: true
}