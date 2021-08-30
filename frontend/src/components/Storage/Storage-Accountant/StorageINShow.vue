<template>
  <div>
    <div></div>
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
        <tr class="grid text-center grid-cols-12 p-2 " v-for="items in tbData" :key="items.formId"> <!-- Отрисовка элементов таблицы -->
          <td class="my-auto p-2">{{items.formId}}</td>
          <td class="my-auto p-2 col-span-3">{{items.name}}</td>
          <td class="my-auto p-2 col-span-2">{{items.count}}</td>
          <td class="my-auto p-2 col-span-2">{{items.price}}</td>
          <td class="my-auto p-2 col-span-2">{{items.amount}}</td>
          <td class="grid grid-cols-3 col-span-2 gap-1 "> <!-- Кнопки -->
            <button @click="editpos(items.formId)" class="p-2 w-full col-span-2 my-auto shadow-sm rounded-lg bg-green-400 text-white">Редактировать</button>
            <button @click="del(items.formId)"  class="p-1 w-full  my-auto shadow-sm rounded-lg bg-red-500 text-white">Удалить</button>
          </td>
        </tr> <!-- Пункт добавления -->
        <tr class="grid text-center grid-cols-12 " >
          <td class="my-auto">№</td>
          <td class="my-auto col-span-3 w-full h-4/5"><input v-model="name" @submit.prevent="checkform" type=text class="text-center w-full h-full" placeholder="Название"></td>
          <td class="my-auto col-span-2 w-full h-4/5"><input v-model="count" type=number class="text-center w-full h-full" placeholder="Колличество"></td>
          <td class="my-auto col-span-2 w-full h-4/5"><input v-model="price" type=number class="text-center w-full h-full" placeholder="Цена"></td>
          <td class="my-auto col-span-2 w-full h-4/5"><input v-model="amount" type=number class="text-center w-full h-full" placeholder="Сумма"></td>
          <td class="flex grid-cols-3 col-span-2">
            <button @click="add" class="w-full text-center col-span-3 m-2 p-2 mt-2 mb-2 shadow-sm rounded-lg my-auto bg-green-400 text-white" >Добавить</button>
          </td>
        </tr>
      </table>
    <div class="dialog bg-black bg-opacity-20 " v-show="editModal">
        <div class="bg-white shadow-lg rounded-lg mx-auto my-auto" >
          <div class="head_lenta flex text-white h-9"><div class="w-full my-auto text-center">Редактирование</div></div>
          <tr class="grid grid-cols-12 gap-1 m-4">
            <td class="my-auto col-span-3 w-full h-4/5"><input v-model="nameModal"  type=text class="text-center w-full h-full" placeholder="Название"></td>
            <td class="my-auto col-span-2 w-full h-4/5"><input v-model="countModal" type=number class="text-center w-full h-full" placeholder="Колличество"></td>
            <td class="my-auto col-span-2 w-full h-4/5"><input v-model="priceModal" type=number class="text-center w-full h-full" placeholder="Цена"></td>
            <td class="my-auto col-span-2 w-full h-4/5"><input v-model="amountModal" type=number class="text-center w-full h-full" placeholder="Сумма"></td>
            <td class="flex grid-cols-4 gap-1 col-span-3">
              <button @click="saveModal()" class="p-2 w-full col-span-3 my-auto shadow-sm rounded-lg bg-green-400 text-white">Сохранить</button>
              <button @click="editpos(false)" class="p-2 w-full  my-auto shadow-sm rounded-lg bg-red-400 text-white">Отмена</button>
            </td>
          </tr> 
        </div>
    </div>
    <div class="grid justify-items-stretch ">
      <button @click="sendForm()" class="bg-green-600 m-3 justify-self-end rounded-xl p-3 text-white ">Отправить</button>
    </div>
  </div>
</template>

<script>
  export default {
    
    data() {
      return{
        formId:"",
        name:"",
        count:"",
        price:"",
        amount:"",

        formIdModal:"",
        nameModal:"",
        countModal:"",
        priceModal:"",
        amountModal:"",

        editModal: false, 
        tbData: []
      }
    },
    methods:{
      add(){
        this.tbData.push({formId: this.tbData.length+1,name: this.name, count: this.count, price: this.price, amount: this.amount})
        this.name = ''
        this.count = ''
        this.price = ''
        this.amount = ''       
      },
      del(number){       
        this.tbData.splice(number-1,1)
        this.tbData.forEach(function(item, i, tbData) {
        item.formId = i+1
      })
      },
      editpos(string){
        this.editModal = string
        this.formIdModal = this.tbData[string-1].formId
        this.nameModal = this.tbData[string-1].name
        this.countModal = this.tbData[string-1].count
        this.priceModal = this.tbData[string-1].price
        this.amountModal = this.tbData[string-1].amount
      },
      saveModal(){        
        this.tbData[this.formIdModal-1].name = this.nameModal 
        this.tbData[this.formIdModal-1].count = this.countModal 
        this.tbData[this.formIdModal-1].price =  this.priceModal 
        this.tbData[this.formIdModal-1].amount = this.amountModal 
        this.nameModal = ""
        this.countModal  = ""
        this.priceModal = ""
        this.amountModal = ""
        this.editModal = false
      },
      sendForm(){
        this.axios.post("/api/addorderin", this.tbData 
            )
            .then(response => {
                  if(response.status == 200){
                        
                        this.$notify({
                        title: "Успех!",
                        text: "Данные добавлены на сервер",
                    })
                  }                              
            })
            .catch(error => {
                 this.$notify({
                        type: "alert",
                        title: "Ошибка!",
                        text: "Данные не добавлены на сервер: "+ error,
                    })
            });

      }
    }
    
    }
</script>

<style>
.dialog{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
}
.head_lenta {
    background: #4b70df;
    border-radius: 10px 10px 0px 0px;
}
</style>