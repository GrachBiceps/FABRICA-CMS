import { createStore } from 'vuex';
import { navbarModule } from "./navbarModule.js";

export default createStore({
  state: {
    
  },
  
  modules: {
    navbar: navbarModule
  }
})