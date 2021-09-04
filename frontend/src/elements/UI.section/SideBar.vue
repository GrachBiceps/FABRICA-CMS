<template lang="pug">
div(class=" bg-mode-colors roundedMY grid grid-cols-1 gap-1 size my-24 navBG")
  div.p-2.mx-auto
  div.p-2.m-1.flex.mode-text(v-for="item in items[allwhoactive].id" :key="item.id" :class="{neoout: item.active}")
    div.mx-auto.navicon.blur-xl
      img(:src="require('@/assets/icons/sidebar/'+ item.icon +'.svg')" height="30" width="30") 
    button.navName.mx-auto( @click=" activeItem(item.id)" ) {{item.title}}
  div.p-2.mx-auto.navName
  div.p-2.mx-auto
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      whoactive: 0,
    }
  },
  methods:{
    activeItem(Number)
        {
            var itid = null;
            if(Number !== this.whoactive){
                itid = this.whoactive
                this.items[this.allwhoactive].id[Number].active = true
                this.items[this.allwhoactive].id[itid].active = false
                this.$store.commit('sidebar/show', this.items[this.allwhoactive].id[Number].path)
                this.whoactive = Number
            }
        }
  },
  computed:{
   ...mapState({
      allwhoactive: state => state.navbar.allwhoactive,
      items: state => state.sidebar.items
   }),
  }
  }

</script>

<style lang="postcss">
.mode-text {
  @apply text-black;
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
.neoout{
border-radius: 10px;
background: #e0e0e0;
box-shadow: inset 5px 5px 15px #c1c1c1,
            inset -5px -5px 15px #ffffff;
}
</style>


