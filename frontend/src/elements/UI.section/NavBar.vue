<template lang="pug">
div(class="rounded-xl navBG flex justify-center")
  div.p-2.mx-auto.my-2.my-auto.text-white.justify-self-start LOGO
  div.justify-self-center.flex
    div.text-black.font-semibold(v-for="item in items[accessRole]" :key="item.id")
      button.cursor-pointer.m-2.my-2.p-4( @click="activeItem(item.id)" :class="{neoout: item.active}" ) {{item.title}}
  div.neoout.my-auto.mx-auto.rounded-lg.flex.gap-1.justify-self-end(v-if="authed")
    div.rounded-full.p-3
      img(:src="require('@/assets/avatars/'+ profile.profileAvatar +'.png')" width="32" height="32" )
    h1.my-auto.mx-2 {{profile.profileName}}
    button(@click="exit(false)").p-2 ВЫХОД
  div.my-auto.mx-auto.rounded-lg.flex.gap-1.justify-self-end(v-else)
</template>

<script>
import { mapState} from 'vuex'
export default {
  data() {
    return {
        whoactive: 0,
    };
  },
  methods:{
    exit(Boolean){
      var exit = Boolean
      this.$store.commit('auth/authexit', exit)
      this.$router.push("/")
    },
   activeItem(Number)
        {   
            var itid = null;
            var pathid = "";
            
            if(Number !== this.whoactive){
                itid = this.whoactive
                if(this.accessRole == "ADMIN"){
                  this.items.ADMIN[Number].active = true
                  this.items.ADMIN[itid].active = false
                  this.whoactive = Number
                  this.$store.commit('navbar/setallwhoactive', Number)
                  pathid = this.items.ADMIN[Number].path
                  this.$router.push(pathid)
                }
                if(this.accessRole == "USER"){
                  this.items.USER[Number].active = true
                  this.items.USER[itid].active = false
                  this.whoactive = Number
                  this.$store.commit('navbar/setallwhoactive', 0)
                  pathid = this.items.USER[Number].path
                  this.$router.push(pathid)
                }
                if(this.accessRole == "STORAGER"){
                  this.items.USER[Number].active = true
                  this.items.USER[itid].active = false
                  this.whoactive = Number
                  this.$store.commit('navbar/setallwhoactive', 1)
                  pathid = this.items.USER[Number].path
                  this.$router.push(pathid)
                }
                if(this.accessRole == "ACCOUNTANT"){
                  this.items.USER[Number].active = true
                  this.items.USER[itid].active = false
                  this.whoactive = Number
                  this.$store.commit('navbar/setallwhoactive', 2)
                  pathid = this.items.USER[Number].path
                  this.$router.push(pathid)
                }
                if(this.accessRole == "PRODACCOUNTANT"){
                  this.items.USER[Number].active = true
                  this.items.USER[itid].active = false
                  this.whoactive = Number
                  this.$store.commit('navbar/setallwhoactive', 3)
                  pathid = this.items.USER[Number].path
                  this.$router.push(pathid)
                }
                if(this.accessRole == "DELIVERY"){
                  this.items.USER[Number].active = true
                  this.items.USER[itid].active = false
                  this.whoactive = Number
                  this.$store.commit('navbar/setallwhoactive', 4)
                  pathid = this.items.USER[Number].path
                  this.$router.push(pathid)
                }
              }
        }
  },
  computed:{
   ...mapState({
      authed: state => state.auth.authed,
      profile: state => state.navbar.profile,
      items: state => state.navbar.items,
      allwhoactive: state => state.navbar.allwhoactive,
      accessRole: state => state.navbar.accessRole
   }),
  },
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
.neoout{
border-radius: 10px;
background: #e0e0e0;
box-shadow: inset 5px 5px 15px #c1c1c1,
            inset -5px -5px 15px #ffffff;
}
</style>
