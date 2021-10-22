export const sidebarModule = {
    state: () => ({
        OrderInShow: true,
        OrderOutShow: false,
        ShowStorageTable: false,
        ShowStoragePopup: true,
        items: [
            { 
                id:[
                    {id: 0, title: "Производственный учет", icon: 0, path: "/orders", active: true},
                ]
            },
            { 
                id:[
                    {id: 0, title: "Работа", icon: 11, path: "ShowStoragePopup", active: true},
                    {id: 1, title: "Склад", icon: 10, path: "ShowStorageTable", active: false},
                ]
            },
            { 
                id: [
                    {id: 0, title: "Доходы ", icon: 20, path: "/orders", active: true},
                    {id: 1, title: "Расходы ", icon: 21, path: "/orders", active: false},
                ]
            },
            { 
                id: [
                    {id: 0, title: "Заказы", icon: 30, path: 'OrderInShow', active: true},
                    {id: 1, title: "Расходы", icon: 31, path: 'OrderOutShow', active: false},
                ]
            },
            { 
                id: [
                    {id: 0, title: "Производственный ", icon: 30, path: "/orders", active: true},
                    {id: 1, title: "Производственный ", icon: 30, path: "/orders", active: false},
                ]
            }
          ]
    }),

    getters: {
        
    },
    
    mutations: {
          show(state, path) {
            if(path == 'OrderInShow')
            { state.OrderInShow = true, state.OrderOutShow = false}
            if(path == 'OrderOutShow')
            { state.OrderInShow = false, state.OrderOutShow = true}
            if(path == 'ShowStorageTable')
            { state.ShowStorageTable = true, state.ShowStoragePopup = false}
            if(path == 'ShowStoragePopup')
            { state.ShowStoragePopup = true, state.ShowStorageTable = false}
        },
    },
    namespaced: true
}