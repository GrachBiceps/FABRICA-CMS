<template>

    <div class="flex">
        <div v-show="popupshow" class="flex gap-4 m-6 ">
            <button @click="showinn(item)" v-for="item in data" :key="item" class="transform hover:scale-105 rounded-xl glassmor cursor-pointer shadow-lg flex flex-col ml-4 mr-4">
                <div class="w-full h-10 "><div class="w-full neoouts h-full p-2">ПРИХОД</div></div>
                <div class="w-full p-12 my-auto"><h1 class="w-full text-center">ОТКРЫТЬ</h1></div> 
            </button>
        </div>
        <div class="flex flex-col w-full">
            <StorageIN v-show="StorageShow" class="" v-bind:data="data[dataid]"></StorageIN>
            <button @click="back(dataid)" v-if="StorageShow">Назад</button>
        </div>
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
            dataid: Number,
            popupshow: true
        }
    },
    methods: {
        showinn(item) {
            this.StorageShow = !this.StorageShow
            this.dataid = item
            this.popupshow = false
        },
        back(dataid){
            this.StorageShow = !this.StorageShow
            this.popupshow = true
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

.neoouts{
border-radius: 10px 10px 0px 0px;
background: #e0e0e0;
/* box-shadow: inset 5px 5px 15px #c1c1c1,
            inset -5px -5px 15px #ffffff; */
}.glassmor{
    background: rgba(223, 222, 222, 0.247);
box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.37);
backdrop-filter: blur( 5.0px );
-webkit-backdrop-filter: blur( 5.0px );
border-radius: 10px;

.dialog{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
}
</style>