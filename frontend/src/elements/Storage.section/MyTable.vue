<template lang="pug">
div.flex
    div.mx-auto adsadad
    div.mx-auto adsadasda
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

</style>