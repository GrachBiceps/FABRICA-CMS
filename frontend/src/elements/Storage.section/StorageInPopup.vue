<template>
    <div class="flex overflow-x-auto">
        <div v-show="popupshow"  class="flex  gap-4 m-6 ">
            <div v-if="nonJob" class="p-4 flex" >
                <button class="m-4 flex neoismflat p-8" @click="getOrderList()">
                    <span class="my-auto">ОБНОВИТЬ</span>
                    <svg viewBox="0 0 24 24" width="1.5vw" height="1.5vw" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0Z"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4 -3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"/></svg>
                </button>
                <span class="m-8 my-auto">{{nonJob}}</span>
            </div>
            <div class="flex" v-if="!nonJob">
                <button @click="showinn(index)" v-for="(item, index) in responsedata.arrayLi" :key="index" class="transform popupsize hover:scale-105 rounded-xl glassmor cursor-pointer shadow-lg flex flex-col ml-4 mr-4">
                    <div class="w-full h-10 "><div class="w-full neoouts h-full p-2">ОТКРЫТЬ</div></div>
                    <div class="w-full p-6 my-6 "><h1 class="w-full text-center">{{item.orderMethod}} от {{item.orderInCreateDate}}</h1></div> 
                </button>
            </div>
        </div>
        <div v-show="StorageShow" v-if="dataid != null" class="flex flex-col w-full">
            <StorageIN v-show="StorageShow" class="" v-bind:propsIn="responsedata.arrayLi[dataid]" :key="dataid"></StorageIN>
            <div class="flex justify-center ">
                <button class="p-2 m-4 rounded-lg bg-red-500 text-white mx-auto px-8" @click="back(dataid)" v-if="StorageShow">Назад</button>
                <button class="p-2 m-4 rounded-lg bg-green-500 text-white mx-auto px-8" @click="acceptOrderList(dataid)" v-if="StorageShow">Подтвердить</button>
            </div>
        </div>
    </div>
</template>
 
<script>
import StorageIN from '@/elements/Storage.section/StorageIN-OUTpage.vue'
import { mapState} from 'vuex'

export default {
        components: {
            StorageIN,
        },
        data(){
        return {
            responsedata: {type: Object},
            StorageShow: false,
            dataid: null,
            popupshow: true,
            nonJob: false
        }
        },
    
    mounted() {
      this.getOrderList()
    },
    
    computed:{
      ...mapState({
         token: state => state.auth.token
      })
    },

    methods: {
        showinn(index) {
            this.dataid = index      
            this.popupshow = false
            this.StorageShow = !this.StorageShow
        },
        back(dataid){
            this.StorageShow = !this.StorageShow
            this.popupshow = true
        },
        async acceptOrderList(){
            try{
                const itemid = this.dataid
                const response = await fetch("auth/storage/acceptOrderInList", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    whatAcceptId: this.responsedata.arrayLi[itemid]._id,
                    acceptDate: new Date().toLocaleString(),
                    acceptAction: this.responsedata.arrayLi[itemid].orderMethod
                })
            });
                this.StorageShow = false
                this.popupshow = true
                this.getOrderList()
               const  jsonresponse = await response.json();
                alert(jsonresponse.message)
            }catch(e){
                alert(e)
            }
        },
        async getOrderList(){
            try{
           const response = await fetch("auth/storage/getAllOrderInList", {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
              "Authorization": `Bearer ${this.token}`
            },
            });
           const jsonres = await response.json();
           if(jsonres.message != null){
               this.nonJob = jsonres.message
               this.dataid = null
               this.responsedata = null
           }else{
               this.responsedata = jsonres
                this.nonJob = null
           }
            }
            catch(error){
                alert(error)
            }
      }
    },
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

}
.popupsize{
    height: 11rem;
    width: 11rem;
}
</style>