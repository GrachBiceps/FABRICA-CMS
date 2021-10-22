<template>
    <div class="m-4 grid grid-cols-1 ">
        <div class="text-center p-3 neoismflat text-lg text-black">Приход №212313</div>
            <div class="grid mt-4">
             <thead class="">
                    <tr class="w-full h-10 grid p-2 grid-cols-12 text-center bg-gray-400 ">
                        <th class="my-auto">№</th>
                        <th class="my-auto col-span-3">Наименование</th>
                        <th class="my-auto col-span-2">Количество</th>
                        <th class="my-auto col-span-2">Цена</th>
                        <th class="my-auto col-span-2">Сумма</th>
                        <th class="my-auto col-span-2">Опции</th>
                    </tr>
                </thead>
                    <tr class="grid text-center grid-cols-12 p-2 " v-for="item in data" :key="item._id"> <!-- Отрисовка элементов таблицы -->
                        <td class="my-auto p-2">{{}}</td>
                        <td class="my-auto p-2 col-span-3">{{data.name}}</td>
                        <td class="my-auto p-2 col-span-2">{{data.count}}</td>
                        <td class="my-auto p-2 col-span-2">{{data.price}}</td>
                        <td class="my-auto p-2 col-span-2">{{data.amount}}</td>
                        <td class="grid grid-cols-3 col-span-2 gap-1 "> <!-- Кнопки -->
                            <button @click="editpos()" class="p-2 w-full col-span-2 my-auto shadow-sm rounded-lg bg-green-400 text-white">Редактировать</button>
                            <button   class="p-1 w-full  my-auto shadow-sm rounded-lg bg-red-500 text-white">Удалить</button>
                        </td>
                    </tr> <!-- Пункт добавления -->
                </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
    export default {
        // mounted: {
        //     async getIngridients(){
        //         const response = await fetch("auth/login", {
        //         method: "GET",
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify({
        //             token: token
        //                 }),
        //             });
                
        //     }
        // },
        computed: {
            ...mapState({
                token: state => state.auth.token
            }),
        }
    }
        
    
</script>

<style lang="scss" scoped>

</style>