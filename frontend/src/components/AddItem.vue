<template>
  <div class="col-lg-6">
    <div class="p-5">
        <div class="text-center">
            <h4 class="text-dark mb-4">Добавить в склад</h4>
        </div>
        <form >
            <div class="mb-3"><input class="form-control form-control-user" type="text" id="exampleInputEmail"  placeholder="Введите название" name="email"></div>
            <div class="mb-3"><input  class="form-control form-control-user" type="text" id="exampleInputPassword" placeholder="Количество" name="password"></div>
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
        name: "f",
        amount: "2",
        added: false },
       }

   },
   methods:{
     addDataToDb(){ 
        const params = new URLSearchParams();
        params.append('firstName', 'paul');
        params.append('lastName', 'fred');
        try {
         this.axios.post("api/create", JSON.stringify(this.data )
         
            )
            .then(function(response) {
               
            })
            .catch(function (error) {
                console.log(error);
            });
        
      }finally {this.$notify({
                title: "Успех!",
                text: "Данные добавлены на сервер",
                });
}


        

        

        
    
    }
   },
   
  
   
   
   
}
</script>

<style>

</style>