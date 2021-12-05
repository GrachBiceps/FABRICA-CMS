<template lang="pug">
div.grid.grid-cols-1.gap-4
    div.neoismflatIN.p-4.grid.grid-cols-5.text-center.text-white
        span.m-2.p-2.my-auto {{propsIn.name}}
        span.m-2.p-2.my-auto.grid.grid-cols-1 Последнее изменение: 
            span {{propsIn.lastUpdate}}
        span.m-2.p-2.my-auto Единица измерения: {{propsIn.amountUnit}}
        span.m-2.p-2.my-auto Количество: {{propsIn.realAmount}}
        span.m-2.p-2.grid.grid-cols-1 Ближайшая просрочка: 
            span {{propsIn.storageLifeDedline}}
    div.grid.grid-cols-3.mx-2(v-if="!historyShowB").neoismflat
        span.m-2.p-2.my-auto.mx-auto  № {{historyID}}
        span.m-2.p-2.my-auto.grid.grid-cols-1.mx-auto Поставщик:
            span {{propsIn.history[historyID].contractor}} 
        span.m-2.p-2.my-auto.grid.grid-cols-1.mx-auto Дата закупки:
            span {{propsIn.history[historyID].date}}
        span.m-2.p-2.my-auto.grid.grid-cols-1.mx-auto Дата просрочки:
            span {{propsIn.history[historyID].storageLife}}
        span.m-2.p-2.my-auto.mx-auto Количество: {{propsIn.history[historyID].amount}}
        span.m-2.p-2.my-auto.mx-auto Закупочная цена: {{propsIn.history[historyID].price}} руб.
        span.m-2.p-2.my-auto.mx-auto Наша цена: {{propsIn.history[historyID].ourPrice}} руб.
        span.m-2.p-2.my-auto.mx-auto.grid.grid-cols-1 Итоговая сумма: 
            span {{propsIn.history[historyID].count}} руб.
        span.m-2.p-2.my-auto.mx-auto Выручка: {{ourCount}}
    button.neoismflat.p-4.mx-10.grid.grid-cols-1.text-center(v-for="(item, index) in propsIn.whoUpdated" :key="index" @click="historyShow(index)")
        div.grid.grid-cols-4
            span.m-2.p-2.my-auto.mx-auto  № {{index}}
            span.m-2.p-2.my-auto.grid.grid-cols-1 Дата: 
                span {{item.updateDate}}
            span.m-2.p-2.my-auto Кем: {{item.updateUsername}}
            span.m-2.p-2.my-auto Тип: {{item.updateAction}}
</template> 

<script>
    export default {
        data () {
            return {
                historyID: {type: Number, default: 0},
                historyShowB: {type: Boolean, default: false},
                ourCount: {type: Number}    
            }
        },
        props: {
            propsIn: {type: Object}
        },
        methods: {
             historyShow(index){
                this.historyID = index
                const summ = (this.propsIn.history[this.historyID].ourPrice * this.propsIn.history[this.historyID].amount)-this.propsIn.history[this.historyID].count
                this.ourCount = summ
                this.historyShowB = false
            }
        }
    }
</script>

<style lang="postcss" scoped>
.neoismflatIN{
border-radius: 10px;
background: #727272;
}
</style>