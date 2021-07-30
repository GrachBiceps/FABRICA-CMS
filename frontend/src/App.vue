<template>
  <div class="app" style="display:flex">
      <Navbar></Navbar>
      <div style="width:100%">
        <MyTopBar></MyTopBar>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar";
import MyTopBar from "@/components/MyTopBar";

export default {
    components: {
      Navbar, MyTopBar
    }
}
</script>

<style>
        @import "./assets/bootstrap/css/bootstrap.min.css";
        @import "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i";
        @import "./assets/fonts/fontawesome-all.min.css";
        @import "./assets/fonts/font-awesome.min.css";
        @import "./assets/fonts/fontawesome5-overrides.min.css"; 
</style>