<template lang="pug" >
div(v-show="authed == false")
  AuthPage()
div(v-show="authed == true") 
  MainNavbarUI adsds
  router-view
</template>
<script>
import AuthPage from "@/views/AuthPage.vue";
import {mapState} from "vuex"
import Fonts from "@/assets/fonts/fonts.scss"
export default {
  data() {
    return {
      auth: false,
    };
  },
  computed: {
        ...mapState({
            token: state => state.auth.token,
            authed: state => state.auth.authed
        }),
        },
  components: {
    AuthPage,
  },
};
</script>
<style lang="scss">
$bgGradient: linear-gradient(to right bottom, #74A7F4 3.31%, #BD5DAE 94.52%);
#app{
  font-family: 'Cera Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.noActive{
  display: none;
}
button{
    border: none;
    background: white;
    cursor: pointer;
}
html {
  width: 100vw;
  height: 100vh;
  background: $bgGradient;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
</style>
