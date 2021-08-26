import { ref } from 'vue'
export const navbarModule = {
    state: () => ({
      authed: true,
      allwhoactive: 0,
      profile: {id:0, profileName: "Grach", profileAvatar: 0},
      items: [
        {id: 0, title: "Инфографики", icon: 0, path: "/myinfo" , active: true, inactive: false},
        {id: 1, title: "Склад", icon: 1, path: "/storage", active: false, inactive: true},
        {id: 2, title: "Бухгалтерия", icon: 2, path: "/", active: false, inactive: true},
        {id: 3, title: "Производственный учет", icon: 3, path: "/orders", active: false, inactive: true},
        {id: 4, title: "Доставка", icon: 4, path: "/", active: false, inactive: true}
        ],
    }),
    mutations: {
      setallwhoactive(state, Number){
        state.allwhoactive = Number;
      }
    },
    namespaced: true

}