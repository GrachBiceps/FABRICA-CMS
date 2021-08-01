<template>
  <div>
    <div>
    <AddItem></AddItem>
    </div>
    <button v-on:click="show = !show">
    Переключить
    </button>
     <transition name="fade">
  <MyTable v-show="show"></MyTable>
      </transition>

  

   
    
  </div>
</template>

<script>
import MyTable from "@/components/MyTable";
import AddItem from "@/components/AddItem";
    export default {
    components: {
      MyTable, AddItem
    },
    data(){
      return{
      show: true
      }
    }
    }
    
    
  
        
    
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>