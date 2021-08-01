<template>
  <div>
    <div>
    <AddItem></AddItem>
    </div>
    <button v-on:click="show = !show">
    Переключить
    </button>
    
  <MyTable v-if="show"></MyTable>
    
 
   
    
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

</style>