<template lang="pug">
div(class=" bg-mode-colors roundedMY grid grid-cols-1 gap-1 size my-32 navBG")
  div.p-2.mx-auto
  div.p-2.mx-auto.text-white LOGO
  div.p-2.mx-auto
  div.p-2.m-1.flex.mode-text(v-for="item in items" :key="item.id" :class="{active: item.active}")
    div.mx-auto.navicon.blur-xl
      img(:src="require('../assets/icons/navbaricons/'+ item.icon +'.png')" width="36" height="36")
    button.navName.mx-auto( @click=" activeItem(item.id)" ) {{item.title}}
  div.p-2.mx-auto.navName
  div.p-2.my-4.bg-white.mx-auto.rounded-lg.flex.gap-4.opacity-75(v-if="authed")
    div.rounded-full.p-1.my-auto
      img(:src="require('../assets/avatars/'+ profile.profileAvatar +'.png')" width="32" height="32" )
    div.my-auto.navName {{profile.profileName}}
    button.my-auto.navName ВЫХОД
  div.p-2.mx-auto.text-gray-400(v-else)
    button.m-2(class="hover:text-white") Войти
</template>

<script>
export default {
  data() {
    return {
      whoactive: 0,
      authed: true,
      profile: {id:0, profileName: "FAFA", profileAvatar: 0},
      items: [
        {id: 0, title: "Инфографики", icon: 0, path: "/myinfo" , active: true},
        {id: 1, title: "Склад", icon: 1, path: "/storage", active: false},
        {id: 2, title: "Бухгалтерия", icon: 2, path: "/", active: false},
        {id: 3, title: "Производственный учет", icon: 3, path: "/orders", active: false},
        {id: 4, title: "Доставка", icon: 4, path: "/", active: false}
        ],
    };
  },
  methods:{
    activeItem(Number){
      var itid = 0;
      var pathid = "";
      if(Number !== this.whoactive)
      {
          itid = this.whoactive
          this.items[itid].active = false
          this.items[Number].active = true
          this.whoactive = Number
          pathid = this.items[Number].path
          this.$router.push(pathid)
      }
        
    }
  }
};
</script>

<style lang="postcss">
.mode-text {
  @apply text-white;
}
.roundedMY {
  border-radius: 0px 20px 20px 0px;
}
.size {
  width: 5rem;
  transition-duration: 200ms;
}
.size:hover {
  width: 13rem;
  transition-duration: 200ms;
}
.navName {
  @apply hidden;
}
.navBG:hover .navName {
  @apply block;
  transition-duration: 200ms;
}
.navBG:hover .navicon {
  @apply hidden;
  transition-duration: 200ms;
}
.active {
  @apply bg-white opacity-75 rounded-lg shadow-lg text-black;
}
</style>


