import { createStore } from 'vuex';
import { navbarModule } from "./navbarModule.js";
import { sidebarModule } from './sidebarModule.js';
import { storageModule } from './storageModule.js';
import { authModule } from './authModule.js';

export default createStore({
  state: {
    
  },
  
  modules: {
    navbar: navbarModule,
    sidebar: sidebarModule,
    storage: storageModule,
    auth: authModule
  }
})