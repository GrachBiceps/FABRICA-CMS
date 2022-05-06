import { createStore } from 'vuex';
import { authModule } from './authModule.js';
import { navbarModule } from './navbarModule.js';
export default createStore({
  modules: {
    auth: authModule,
    navbar: navbarModule
  }
})