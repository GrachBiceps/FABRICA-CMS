<template lang="pug">
div.flex-wrap
  div
    Navbar.z-20.mx-20.mt-4.BG69BG
    Sidebar.fixed.z-10.BG69BG
  div.my-12.ml-24.mr-12.grassmor.rounded-xl
    router-view
    notifications(position="bottom right")
</template>

<script>
import Navbar from "@/components/NavBar"
import Sidebar from "@/components/SideBar"

export default {
    components: {
      Navbar, Sidebar
    }
}
</script>

<style lang="postcss" scoped>
@import 'assets/styles/tailwind.postcss';
.full{
 width: 90%;
}
</style>

<style>
html{
background-color: #3397f5;
/* background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); */
height: 100%;
width: 100%;
}
.grassmor{
background: rgba(255, 255, 255, 0.158);
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 200.0px );
-webkit-backdrop-filter: blur( 200.0px );
}
.grassmor-li{
background: rgba(255, 255, 255, 0.514);
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );

}.BG69BG{
  /* background: rgb(69, 69, 69); */
  background: rgba(69, 69, 69, 0.69);
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
}
</style>