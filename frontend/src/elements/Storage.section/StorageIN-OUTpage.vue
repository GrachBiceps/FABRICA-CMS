<template>
    <div class="m-4 grid grid-cols-1 ">
        <div class="text-center p-3 neoismflat text-lg text-black">{{propsIn.orderMethod}} от {{propsIn.orderInCreateDate}}</div>
            <div class="grid mt-4">
             <thead class="">
                    <tr class="w-full h-10 grid grid-cols-10 text-center neoismflat ">
                        <th class="my-auto">№</th>
                        <th class="my-auto p-2 col-span-3">Наименование</th>
                        <th class="my-auto p-2 col-span-1">Количество</th>
                        <th class="my-auto p-2 col-span-1">Ед.изм</th>
                        <th class="my-auto p-2 col-span-1">Цена</th>
                        <th class="my-auto p-2 col-span-1">Наша цена</th>
                        <th class="my-auto p-2 col-span-1">Сумма</th>
                        <th class="my-auto p-2 col-span-1">Годен до</th>
                    </tr>
                </thead>
                    <tr class="grid text-center grid-cols-10 p-2 " v-for="(item, id) in propsIn.orderInList" :key="item"> <!-- Отрисовка элементов таблицы -->
                        <td class="my-auto p-2">{{id+1}}</td>
                        <td class="my-auto p-2 col-span-3">{{item.name}}</td>
                        <td class="my-auto p-2 col-span-1">{{item.amount}}</td>
                        <td class="my-auto p-2 col-span-1">{{item.amountUnit}}</td>
                        <td class="my-auto p-2 col-span-1">{{item.price}}</td>
                        <td class="my-auto p-2 col-span-1">{{item.ourPrice}}</td>
                        <td class="my-auto p-2 col-span-1">{{item.count}}</td>
                        <td class="my-auto p-2 col-span-1">{{item.storageLife}}</td>
                    </tr> <!-- Пункт добавления -->
                </div>
        <div class="mt-4 neoismflat p-2">Создано {{propsIn.orderInCreator}}</div>
    </div>
</template>

<script>
import {mapState} from "vuex"
    export default {
        props: {
            propsIn: {type: Object}
        },
        data(){
        return {
            
        }
        },
        mounted () {
            
        },
        computed: {
            ...mapState({
                token: state => state.auth.token
            }),
        }
    }
        
    
</script>

<style lang="scss" scoped>

</style>