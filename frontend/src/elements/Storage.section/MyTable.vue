<template lang="pug">
div.mx-auto.p-8
    div.m-4.grid.grid-cols-1(v-if="IngredientShow" v-for="(item, index) in responseData" :key="index")
        button.neoismflat.my-auto.p-4.grid.grid-cols-5(@click="IngredientShowMethod(index)")
            span.my-auto {{item.name}}
            span.my-auto.grid.grid-cols-1 Последнее изменение: 
                span {{item.lastUpdate}} 
            span.my-auto Количество: {{item.realAmount}}
            span.my-auto Единица измерения: {{item.amountUnit}}
            span.m-2.p-2.grid.grid-cols-1 Ближайшая просрочка: 
                span {{item.storageLifeDedline}}
    Ingredient(v-if="!IngredientShow" v-bind:propsIn="responseData[IngredientID]")
    button.p-2.mt-4.rounded-lg.bg-red-500.text-white.px-8(v-if="!IngredientShow" @click="IngredientShowMethod()" ) Назад
</template>


<script>
import { mapState} from 'vuex'
import Ingredient from '@/elements/Storage.section/Ingredient'

export default {
    data(){
        return {
            responseData: {type: Object},
            IngredientShow: {type: Boolean, default: true},
            IngredientID: {type: Number, default: null}
        }
    },
    components: {
        Ingredient
    },
    methods: {
        IngredientShowMethod(index){
            this.IngredientShow = !this.IngredientShow
            if(index != null ){this.IngredientID = index}
        },
        async getIngredientList(){
            try{
                const response = await fetch("auth/storage/getIngredientList", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                });
                 const resJson = await response.json()
                 this.responseData = resJson
            }catch(e){
                alert(e)
            }
        }
        
    },
    mounted() {
        this.getIngredientList()
    },
    computed:{
      ...mapState({
         token: state => state.auth.token
      })
    },
}
</script>

<style>

</style>