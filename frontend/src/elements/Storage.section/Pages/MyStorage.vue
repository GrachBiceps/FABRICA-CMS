<template>
  <div class="flex-none">
    <StorageInPopup v-show="ShowStoragePopup" ></StorageInPopup>
    <MyTable v-show="ShowStorageTable"></MyTable>
  </div>
</template>

<script>
import MyTable from "@/elements/Storage.section/MyTable";

import StorageInPopup from "@/elements/Storage.section/StorageInPopup";
import {mapState} from 'vuex'

    export default {
      data(){
        return{
        
        }
      },
    components: {
      MyTable,  StorageInPopup
    },
    
    computed:{
      ...mapState({
         ShowStorageTable: state => state.sidebar.ShowStorageTable,
         ShowStoragePopup: state => state.sidebar.ShowStoragePopup,
         token: state => state.auth.token
      })
    },
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

</style>