<template>
  <div>
    <table class="w-full break-words divide-y-2 shadow-sm">
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
        <tr class="grid text-center grid-cols-12 p-2 " v-for="items in tbData" :key="items.id"> <!-- Отрисовка элементов таблицы -->
          <td class="my-auto p-2">{{items.id}}</td>
          <td class="my-auto p-2 col-span-3">{{items.name}}</td>
          <td class="my-auto p-2 col-span-2">{{items.count}}</td>
          <td class="my-auto p-2 col-span-2">{{items.price}}</td>
          <td class="my-auto p-2 col-span-2">{{items.amount}}</td>
          <td class="grid grid-cols-3 col-span-2 gap-1 "> <!-- Кнопки -->
            <button class="p-2 w-full col-span-2 my-auto shadow-sm rounded-lg bg-green-400 text-white">Редактировать</button>
            <button @click="del(items.id)" class="p-1 w-full  my-auto shadow-sm rounded-lg bg-red-500 text-white">Удалить</button>
          </td>
        </tr> <!-- Пункт добавления -->
        <tr class="grid text-center grid-cols-12  " >
          <td class="my-auto">№</td>
          <td class="my-auto col-span-3 w-full h-4/5"><input v-model="name" class="text-center w-full h-full" placeholder="Название"></td>
          <td class="my-auto col-span-2 w-full h-4/5"><input v-model="count" class="text-center w-full h-full" placeholder="Колличество"></td>
          <td class="my-auto col-span-2 w-full h-4/5"><input v-model="price" class="text-center w-full h-full" placeholder="Цена"></td>
          <td class="my-auto col-span-2 w-full h-4/5"><input v-model="amount" class="text-center w-full h-full" placeholder="Сумма"></td>
          <td class="flex grid-cols-3 col-span-2">
            <button @click="add" class="w-full text-center col-span-3 m-2 p-2 mt-2 mb-2 shadow-sm rounded-lg my-auto bg-green-400 text-white" >Добавить</button>
          </td>
        </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        name:"",
        count:"",
        price:"",
        amount:"",
       
         tbData: [ // Массив строк
            { id: 1, name: 'афафыафыафыаasdasdaasdasdasdadsdadasdasdasdsa', count: 1, price: 1, amount: 1 },
            { id: 2, name: 'фыафафыаф', count: 2, price: 1, amount: 1 },
            { id: 3, name: 'афыафафы', count: 1, price: 1, amount: 1 }
        ]
      }
    },
    methods:{
      add(){
        this.tbData.push({id: this.tbData.length+1,name: this.name, count: this.count, price: this.count, amount: this.amount})
      },
      del(index){
        this.tbData.splice(index-1,1)
      }
    },
    

  }
</script>

<style lang="scss" scoped>

</style>