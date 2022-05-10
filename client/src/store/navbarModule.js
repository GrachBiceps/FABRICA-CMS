export const navbarModule = {
    state: () => ({
      notificatinNavbar: 1,
      loader: false,
      sucsess: false,
      error: false,
      navbarBtn: {
          Array: [
              {name: "Склад", path:"storage"},
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
          switch(res){
            case 0: {
                state.loader =  !state.loader
                break;
            }
            case 1: {
                state.sucsess = !state.sucsess
                break;
            }
            case 2: {
                state.error = !state.error
                break;
            }
          }
      },
    },
    getters: {
      
    },
    namespaced: true
}