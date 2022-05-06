<template lang="pug">
div.center(:class="{notcentr: authed}")
  div(v-show="authed == false")
    AuthPage()
  div(v-show="authed == true")
    Navbar
    router-view
</template>
<script>
import AuthPage from "@/views/AuthPage.vue";
import Navbar from "@/components/UI/NavbarUI/NavbarUI.vue"
import { mapState } from "vuex";
import Fonts from "@/assets/fonts/fonts.scss";
export default {
  data() {
    return {
      align: "center",
      auth: false,
    }
  },
  methods:{
    centreHTML(){
      let align = ""
      if(this.authed == false){
        align = "center"
      }
      else{
        align = "flex-start"
      }
    }
  },
  mounted(){
    this.centreHTML()
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      authed: (state) => state.auth.authed,
    }),
  },
  components: {
    AuthPage, Navbar
  },
};
</script>
<style lang="scss">
$bgGradient: linear-gradient(to right bottom, #74a7f4 3.31%, #bd5dae 94.52%);
$a: center;
$allfadeTransition: 1s;
#app {
  font-family: "Cera Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.noActive {
  display: none;
}
button {
  border: none;
  background: white;
  cursor: pointer;
}
body{
  margin: 0;
}
.center{
  display: flex;
  align-items: $a;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.notcentr{
  align-items: flex-start;
}
html {
  background: $bgGradient;
  background-repeat: no-repeat;
  width: 98vw;
  height: 100vh;
  background-attachment: fixed;
  display: flex;
  justify-content: center;

}
</style>
