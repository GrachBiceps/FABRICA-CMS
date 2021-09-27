
export const navbarModule = {
    state: () => ({
      
      allwhoactive: 0,
      profile: {},
      accessRole: "",
      items: {
        USER: [
          {id: 0, title: "Инфографики", icon: 0, path: "/myinfo" , active: true, inactive: false},
              ],
        STORAGER: [
          {id: 0, title: "Склад", icon: 1, path: "/storage", active: true, inactive: false},
              ],
        ACCOUNTANT: [
          {id: 0, title: "Бухгалтерия", icon: 2, path: "/", active: true, inactive: false},
              ],
        PRODACCOUNTANT: [
          {id: 0, title: "Производственный учет", icon: 3, path: "/orders", active: true, inactive: true},
              ],
        DELIVERY: [
          {id: 0, title: "Доставка", icon: 4, path: "/", active: true, inactive: true}
              ],
        ADMIN: [
          {id: 0, title: "Инфографики", icon: 0, path: "/myinfo" , active: true, inactive: false},
          {id: 1, title: "Склад", icon: 1, path: "/storage", active: false, inactive: true},
          {id: 2, title: "Бухгалтерия", icon: 2, path: "/", active: false, inactive: true},
          {id: 3, title: "Производственный учет", icon: 3, path: "/orders", active: false, inactive: true},
          {id: 4, title: "Доставка", icon: 4, path: "/", active: false, inactive: true}
              ] 
            },
    }),
    mutations: {
      setallwhoactive(state, Number){
        state.allwhoactive = Number;
      },
      setProfileIn(state, profileIn){
        state.profile = profileIn
      },
      setAccessRoleIn(state, accessRoleIn){
        state.accessRole = accessRoleIn
      }
    },
    namespaced: true

}