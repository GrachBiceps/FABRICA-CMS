<template>
    <div>
        <div class="flex ml-2 mr-2 ">
            <button @click="showinn(item)" v-for="item in dataStorage" :key="item" class="transform hover:scale-105 mywindow cursor-pointer shadow-lg flex flex-col h-56 w-64 ml-4 mr-4">
                <div class="w-full h-10 head_lenta"><div class="h-full p-2 text-white">ПРИХОД</div></div>
                <div class="w-full my-auto"><h1 class="w-full text-center">ОТКРЫТЬ</h1></div> 
            </button>
        </div>
        
            <StorageIN v-show="StorageShow" v-bind:data="dataid"></StorageIN>
       
    </div>
</template>
 
<script>
import StorageIN from '@/pages/Storage/StorageIN-OUTpage.vue'
    export default {
        props:{
            dataStorage:{
                type: Array,
                required: true
            }
        },
        components: {
            StorageIN,
        },
        data(){
        return {
            data: "",
            StorageShow: false,
            dataid: Number
        }
    },
    methods: {
        showinn(item) {
            this.StorageShow = !this.StorageShow
            this.dataid = item;
        }
    }
    }
</script>

<style>
.head_lenta {
    background: #4b70df;
    border-radius: 10px 10px 0px 0px;
}
.mywindow{
    width: 200px;
    height: 200px;
    background: white;
    color: Black;
    border-radius: 10px;
}
.dialog{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
}
</style>