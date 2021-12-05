<template>
  <div>
    <div class="mx-4 neoismflat my-2 grid grid-cols-3 p-2">
      <input v-model="contractor"  type=text class="text-center p-2 bg-transparent placeholder-gray-700 w-full h-full" placeholder="Поставщик">
      <input v-model="ourPricePercentA"  type=number class="text-center p-2 bg-transparent placeholder-gray-700 w-full h-full" placeholder="Процент наценки %">
      <input v-model="date"  type=date class="text-center p-2 bg-transparent placeholder-gray-700 w-full h-full" placeholder="Дата прихода">
    </div>
    <table class="w-full grassmor-li rounded-lg break-words ">
        <thead class="">
          <tr class="w-full h-10 grid p-2 rounded-lg grid-cols-12 text-center ">
            <th class="my-auto">№</th>
            <th class="my-auto col-span-3">Наименование</th>
            <th class="my-auto col-span-1">Количество</th>
            <th class="my-auto col-span-1">Ед.измер</th>
            <th class="my-auto col-span-1">Ценна</th>
            <th class="my-auto col-span-1">Сумма</th>
            <th class="my-auto col-span-2">Срок годности</th>
            <th class="my-auto col-span-2">Опции</th>
          </tr>
        </thead>
        <tr class="grid text-center grid-cols-12 p-2 " v-for="items in orderInList" :key="items.formId"> <!-- Отрисовка элементов таблицы -->
          <td class="my-auto p-2">{{items.formId}}</td>
          <td class="my-auto p-2 col-span-3">{{items.name}}</td>
          <td class="my-auto p-2 col-span-1">{{items.amount}}</td>
          <td class="my-auto p-2 col-span-1">{{items.amountUnit}}</td>
          <td class="my-auto p-2 col-span-1">{{items.price}}</td>
          <td class="my-auto p-2 col-span-1">{{items.count}}</td>
          <td class="my-auto p-2 col-span-2">{{items.storageLife}}</td>
          <td class="grid grid-cols-3 col-span-2 gap-1 "> <!-- Кнопки -->
            <button @click="editpos(items.formId)" class="p-2 w-full col-span-2 my-auto  rounded-lg grassmor-green text-white">Редактировать</button>
            <button @click="del(items.formId)"  class="p-1 w-full  my-auto  rounded-lg bg-red-500 text-white">Удалить</button>
          </td>
        </tr> <!-- Пункт добавления -->
        <tr class="grid text-center grid-cols-12 " >
          <td class="my-auto">№</td>
          <td class="my-auto col-span-3 w-full h-4/5"><input v-model="name" @submit.prevent="checkform" type=text class="text-center bg-transparent placeholder-gray-700 w-full h-full" placeholder="Название"></td>
          <td class="my-auto col-span-1 w-full h-4/5"><input v-model="count" type=number class="text-center  bg-transparent placeholder-gray-700 w-full h-full" placeholder="Колличество"></td>
          <td class="my-auto col-span-1 w-full h-4/5"><input v-model="countUnit" type=text class="text-center bg-transparent placeholder-gray-700 w-full h-full" placeholder="Ед.изм"></td>
          <td class="my-auto col-span-1 w-full h-4/5"><input v-model="price" type=number class="text-center bg-transparent placeholder-gray-700 w-full h-full" placeholder="Цена"></td>
          <td class="my-auto col-span-1 w-full h-4/5"><p>{{count*price}}</p></td>
          <td class="my-auto col-span-2 w-full h-4/5"><input v-model="storageLife" type=date class="text-center bg-transparent placeholder-gray-700 w-full h-full" placeholder="Срок годности"></td>
          <td class="flex grid-cols-3 col-span-2">
            <button @click="add" class="w-full text-center col-span-3 m-2 p-2 mt-2 mb-2 rounded-lg my-auto grassmor-green text-white" >Добавить</button>
          </td>
        </tr>
      </table>
    <div class="dialog backdrop-filter backdrop-blur-lg " v-show="editModal">
        <div class="BG69BG shadow-lg rounded-lg mx-auto my-auto p-4" >
          <div class="flex neoismflat bg-black text-black m-2 p-2 h-9"><div class="w-full my-auto text-center">Редактирование</div></div>
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
      <button @click="createOrderInList()" class="bg-green-600 m-3 justify-self-end rounded-xl p-3 text-white ">Отправить</button>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex"
  export default {
    
    data() {
      return{
        formId:"",
        name:"",
        count:"",
        countUnit: "",
        price:"",
        amount: "",
        contractor: "",
        date: {type: Date},
        ourPricePercentA: "",
        storageLife:{type: Date},
        formIdModal:"",
        nameModal:"",
        countModal:"",
        priceModal:"",
        amountModal:"",

        editModal: false, 
        orderInList: []
      }
    },
    computed:{
      ...mapState({
         token: state => state.auth.token,
         profileName: state => state.navbar.profile.profileName
      })
    },
    methods:{
      add(){
        let amount = this.price * this.count
        let ourprice = (this.price * (this.ourPricePercentA*2))/100
        this.orderInList.push({formId: this.orderInList.length+1,contractor: this.contractor, amountUnit: this.countUnit,date: this.date,storageLife: this.storageLife, ourPricePercent: this.ourPricePercentA, ourPrice: ourprice, name: this.name, amount: this.count, price: this.price, count: amount, })
        this.name = ''
        this.count = ''
        this.price = ''
        this.amount = ''       
      },
      del(number){       
        this.orderInList.splice(number-1,1)
        this.orderInList.forEach(function(item, i, orderInList) {
        item.formId = i+1
      })
      },
      editpos(string){
        this.editModal = string
        this.formIdModal = this.orderInList[string-1].formId
        this.nameModal = this.orderInList[string-1].name
        this.countModal = this.orderInList[string-1].count
        this.priceModal = this.orderInList[string-1].price
        this.amountModal = this.orderInList[string-1].amount
      },
      saveModal(){        
        this.orderInList[this.formIdModal-1].name = this.nameModal 
        this.orderInList[this.formIdModal-1].count = this.countModal 
        this.orderInList[this.formIdModal-1].price =  this.priceModal 
        this.orderInList[this.formIdModal-1].amount = this.amountModal 
        this.nameModal = ""
        this.countModal  = ""
        this.priceModal = ""
        this.amountModal = ""
        this.editModal = false
      },
      async createOrderInList(){
            try{
                const response = await fetch("/auth/prodacc/createOrderInList", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    body: JSON.stringify({
                      orderInCreator: this.profileName,
                      orderInCreateDate: this.date,
                      orderMethod: "Приход",
                      orderInList: this.orderInList
                    })
                });
                 const resJson = await response.json()
                 alert(resJson.message)
            }catch(e){
                alert(e)
            }
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
.grassmor-green{
  background: rgba(4, 190, 35, 0.616);
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
}
</style>