<template>
    <div class="flex ml-2 mr-2 ">
        <button @click="$router.push('/storage/innout')" v-for="item in data" v-bind:key="item.id" class="transform hover:scale-105 mywindow cursor-pointer shadow-lg flex flex-col h-56 w-64 ml-4 mr-4">
            <div class="w-full h-10 head_lenta"><div class="h-full p-2 text-white">ПРИХОД</div></div>
            <div class="w-full my-auto"><h1 class="w-full text-center">ОТКРЫТЬ</h1></div>
            
        </button>
    </div>
</template>

<script>
    export default {
        data(){
        return {
            data: ""
        }
    },
        mounted() {
    
        this.axios
        .get('/api/fetchitems')
        .then(response => (this.data = response.data))
    
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
</style>