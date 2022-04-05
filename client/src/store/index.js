import { createStore } from 'vuex';
import { authModule } from './authModule.js';
import axios from "axios"

export default createStore({
  state: {
    
  },
  
  modules: {
    auth: authModule
  }
})