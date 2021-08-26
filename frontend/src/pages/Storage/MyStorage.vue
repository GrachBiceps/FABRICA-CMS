<template>
  <div class="flex-none">
    <!-- <AddItem></AddItem> -->
    <StorageInPopup v-show="ShowStoragePopup" ></StorageInPopup>
    <MyTable v-show="ShowStorageTable"></MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/Storage/MyTable";
import AddItem from "@/components/AddItem";
import StorageInPopup from "@/components/Storage/StorageInPopup";
import {mapState} from 'vuex'
    export default {
      data(){
        return{
        data: "",
        dataid: Number,
        popupshow: true
        }
      },
    components: {
      MyTable, AddItem, StorageInPopup
    },
    mounted() {
    
        this.axios
        .get('/api/getorderin')
        .then(response => (this.data = response.data))
    
    },
    computed:{
      ...mapState({
         ShowStorageTable: state => state.sidebar.ShowStorageTable,
         ShowStoragePopup: state => state.sidebar.ShowStoragePopup
      })
    },
    methods:{
       back(dataid){
            this.StorageShow = !this.StorageShow
            this.popupshow = true
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

</style>