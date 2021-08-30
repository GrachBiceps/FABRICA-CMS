<template>
  <div class="flex-none">
    <!-- <AddItem></AddItem> -->
    <StorageInPopup v-show="ShowStoragePopup" ></StorageInPopup>
    <MyTable v-show="ShowStorageTable"></MyTable>
  <div>
    <div class="mb-4">
      <!-- <AddItem></AddItem> -->
      <StorageInPopup v-bind:dataStorage="dataStorage"></StorageInPopup>
    </div>
    <button class="mybtn d-block btn-user w-100" v-on:click="show = !show">
      <div class="fas fa-angle-down"></div>
      Список товаров
    </button>

    <transition name="fade">
      <MyTable v-show="show"></MyTable>
    </transition>
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
=======
import MyTable from '@/components/Storage/MyTable';
import AddItem from '@/components/AddItem';
import StorageInPopup from '@/components/Storage/StorageInPopup';

export default {
  components: {
    MyTable,
    AddItem,
    StorageInPopup,
  },
  data() {
    return {
      dataStorage: "",
      show: true
    };
  },
  mounted() {
        this.axios
        .get('/api/getorderin')
        .then(response => (this.dataStorage = response.data))
  },
};

</script>

<style>
.mybtn {
  background-color: #5779df;
  text-align: start;
  border-radius: 0;
  color: rgba(255, 255, 255, 0.76);
  height: 50px;
}


</style>

.mybtn:hover {
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
