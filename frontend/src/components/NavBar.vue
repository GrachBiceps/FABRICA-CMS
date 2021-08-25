<template lang="pug">
div(class="rounded-xl navBG flex justify-center")
  div.p-2.mx-auto.my-2.my-auto.text-white.justify-self-start LOGO
  div.justify-self-center.flex
    div.text-black.font-semibold.m-2.my-2.p-4(v-for="item in items" :key="item.id" :class="{neoout: item.active}")
      button.cursor-pointer( @click="activeItem(item.id)" ) {{item.title}}
  div.neoout.my-auto.mx-auto.rounded-lg.flex.gap-1.opacity-75.justify-self-end(v-if="authed")
    div.rounded-full.p-2
      img(:src="require('../assets/avatars/'+ profile.profileAvatar +'.png')" width="32" height="32" )
    h1.my-auto.mx-2 {{profile.profileName}}
    button.p-2 ВЫХОД
  div.p-2.mx-auto.my-auto.text-black(v-else)
    button.m-2(class="hover:text-white text-lg") Войти
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
        whoactive: 0,
    };
  },
  methods:{
   activeItem(Number)
        {
            var itid = null;
            var pathid = "";
            
            if(Number !== this.whoactive){
                itid = this.whoactive
                this.items[Number].active = true
                this.items[itid].active = false
                this.whoactive = Number
                pathid = this.items[Number].path
                this.$router.push(pathid)
            }
        }
  },
  computed:{
   ...mapState({
      authed: state => state.navbar.authed,
      profile: state => state.navbar.profile,
      items: state => state.navbar.items,

   })
  }
};
</script>

<style lang="postcss" scoped>
.navName {
  @apply hidden;
}
.navicon:hover .navName {
  @apply block;
  transition-duration: 300ms;
}
.navBG:hover .navicon {
  @apply hidden;
  transition-duration: 300ms;
}
.active {
  @apply bg-white opacity-75 rounded-lg shadow-lg text-black;
}
.neoout{
border-radius: 10px;
background: #e0e0e0;
box-shadow: inset 5px 5px 15px #c1c1c1,
            inset -5px -5px 15px #ffffff;
}
</style>
