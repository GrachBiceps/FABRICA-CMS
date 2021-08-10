<template>
  <div class="col-lg-6">
    <div class="p-5">
        <div class="text-center">
            <h4 class="text-dark mb-4">Добавить в склад</h4>
        </div>
        <form >
            <div class="mb-3"><input v-model="data.name" required class="form-control form-control-user" type="text" id="exampleInputEmail"  placeholder="Введите название" name="email"></div>
            <div class="mb-3"><input v-model="data.amount" required class="form-control form-control-user" type="number" id="exampleInputPassword" placeholder="Количество" name="password"></div>
            <button v-on:click.prevent="addDataToDb" class="btn btn-primary d-block btn-user w-100" type="submit">Внести данные</button>
            
            
        </form>
        
    </div>
</div>
</template>

<script>

export default {
   data(){
       return {
        data: {
            name: "",
            amount: "", 
        },
     }
   },
    
   methods:{
     clearForm(){
         this.data.name = ""
         this.data.amount = ""   
     },
     addDataToDb(){        
         if(this.data.name == "" || this.data.amount == "") {
             this.$notify({
            type: "alert",
            title: "Ошибка!",
            text: "Все поля должны быть заполены ",
        })}
         else if(this.data.amount <= 0){
            this.$notify({
            type: "alert",
            title: "Ошибка!",
            text: "Количество не может быть 0 и меньше ",
        })
         }else{
        this.axios.post("api/create", this.data 
            )
            .then(response => {
                  if(response.status == 200){
                        this.clearForm()
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
    },
   },
   
  
   
   
   
}
</script>

<style>

</style>