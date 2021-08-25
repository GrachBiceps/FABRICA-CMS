<template lang="pug">
div.flex-wrap
  div
    Navbar.z-20.mx-12.mt-2.BG69BG
    Sidebar.fixed.z-10.BG69BG
  div.my-12.ml-24.mr-24.BG69BG.rounded-xl
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
background-image: url("./assets/fancy-pants.jpg");
backdrop-filter: blur(10px);
height: 100%;
width: 100%;
}
body{
  background: rgba(0, 0, 0, 0.123);
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 2.0px );
-webkit-backdrop-filter: blur( 2.0px );
height: 100%;
width: 100%;
}
.grassmor{
background: rgba(255, 255, 255, 0.158);
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
}
.grassmorli{
background: rgb(223, 222, 222);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
backdrop-filter: blur( 5.0px );
-webkit-backdrop-filter: blur( 5.0px );
border-radius: 10px;

}.BG69BG{
  /* background: #e0e0e0; */
  background: rgba(255, 255, 255, 0.363);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
backdrop-filter: blur( 5.0px );
-webkit-backdrop-filter: blur( 5.0px );
border-radius: 10px;
}
</style>