<template lang="pug">
div.app.flex
  Navbar
  div(style="width:100%")
    MyTopBar
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
@import 'assets/styles/tailwind.postcss'
</style>