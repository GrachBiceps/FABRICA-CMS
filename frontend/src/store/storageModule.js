export const storageModule = {
    state: () => ({
      jobList: {type: Array}
    }),
    mutations: {
      jobListPush(state, list){
          state.jobList = list
      }
    },
    namespaced: true

}