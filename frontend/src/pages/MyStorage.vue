<template>
  <div>
    <div>
    <AddItem></AddItem>
    </div>
    <button class="mybtn d-block btn-user w-100" v-on:click="show = !show">
    <div class="fas fa-angle-down">
    </div>
      Список товаров 
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
.mybtn{
  background-color: #5779df;
  text-align:start;
  border-radius: 0;
  color: rgba(255, 255, 255, 0.76);
  height: 50px;
}.mybtn:hover{
  color: white; 
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>