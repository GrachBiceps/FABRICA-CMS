<template lang="pug">
AuthCompUI(v-show="auth == false")
div(v-show="auth == true")
  MainNavbarUI
  router-view
</template>
<script>
import MainNavbarUI from "../src/components/UI/MainNavbarUI.vue";
import AuthCompUI from "../src/components/UI/AuthCompUI.vue";
export default {
  data(){
    return{
      auth: false,
    }
  },
  components: {
    MainNavbarUI,AuthCompUI
  },
};
</script>
<style lang="scss">
html {
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to right bottom, #74A7F4 3.31%, #BD5DAE 94.52%) ;
  background-repeat: no-repeat;
}
</style>
