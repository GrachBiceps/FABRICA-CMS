<template>
    <div class="container-my">
        <div v-for="item in data" v-bind:key="item.id" class="allwindow">
            <div><h1>Приход</h1></div>
            <div class="buttonmy"><button class="mybutton">ВЫПОЛНИТЬ</button></div>
        </div>
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
h1{
    text-align: center;
    color: white;
    margin-top: 20px;
}
.buttonmy{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    text-align:center;
    transform: translate(-50%, -50%);
}
.mybutton{
    background: white;
    border-radius: 10px;
    padding: 15px;
}
.allwindow{
    position: relative;
    border-radius: 20px;
    width: 30%;
    height: 100%;
    background: #df5757;
}
.container-my{
    justify-content: space-around;
    align-items: center;
    display: flex;
    height: 300px;
    margin: 10px;
}
</style>