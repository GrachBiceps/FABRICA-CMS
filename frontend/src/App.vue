<template lang="pug">
div.app.flex
  Navbar.fixed.z-10
  div.ml-20.mt-24.z-0(style="width: 100%;")
    router-view
    notifications(position="bottom right")
</template>

<script>
import Navbar from "@/components/NavBar"
export default {
    components: {
      Navbar
    }
}
</script>

<style lang="postcss" scoped>
@import 'assets/styles/tailwind.postcss';
.mybg{
  background: rgb(133, 229, 233);
}
</style>