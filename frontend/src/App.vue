<template lang="pug">
div
  div(v-if="authed").flex-wrap
    div
      Navbar.z-20.mx-12.mt-10.BG69BG
      Sidebar.fixed.z-10.BG69BG
    div.my-16.ml-24.mr-24.BG69BG.rounded-xl
      router-view
    notifications(position="bottom right")
  div(v-else).w-full.h-screen.grid.grid-cols-1.mt-8
    div.mx-auto.my-auto.BG69BG.p-12.text-center.grid.grid-cols-1.gap-4(v-show='data.logined')
      div.p-4.neoismflat.m-2 АВТОРИЗАЦИЯ
      div.p-4.gap-4.grid.grid-cols-4
        span.text-left.mr-2.self-center Login
        input.bg-current.inputlog.col-span-3.p-1.border-red-500(v-model='data.login'  :class='{ border: validation.valerror }')
        span.text-left.mr-2.self-center  Password
        input.bg-current.inputlog.col-span-3.p-1.border-red-500(v-model='data.password' type='password'  :class='{ border: validation.valerror}' )
      p.text-red-500(v-show='validation.valerror') Неверные данные
      button.py-4.mx-auto.neoism.m-2.px-8(@click='signin()') ВОЙТИ
      button.text-gray-700(@click='this.data.logined = !this.data.logined') Зарегистрироваться
    div.mx-auto.my-auto.BG69BG.p-12.text-center.grid.grid-cols-1.gap-2(v-show='!data.logined')
      div.p-4.neoismflat.m-2 Регистрация
      div.p-6.gap-4.grid.grid-cols-4
        div.col-span-4.gap-4
          div.grid.grid-cols-4
            span.text-left.m-3.self-center Имя
            input.bg-current.inputlog.col-span-3.p-2.m-2(v-model="registration.regName")
          div.grid.grid-cols-4
            span.text-left.m-3.self-center Фамилия
            input.bg-current.inputlog.col-span-3.p-2.m-2(v-model="registration.regSurname")
        div.col-span-4.gap-4
          div.m-2
            span.text-left.m-3.self-center Мужчина
            input.bg-current.inputlog.col-span-3.p-2.m-2(type="checkbox"  @click="regGenderMethod(0)" v-model='registration.switchRegGenderMale')
            input.bg-current.inputlog.col-span-3.p-2.m-2(type="checkbox"  @click="regGenderMethod(1)" v-model='registration.switchRegGenderFeMale')
            span.text-left.m-3.self-center Женщина
          span.text-left.m-2.self-center Дата рождения
          input.bg-current.inputlog.col-span-3.p-1.m-2(type="date" v-model='registration.regBirthday')
        div.col-span-4
          div.grid.grid-cols-4.m-3.gap-4
            span.text-left.mr-2.self-center Логин
            input.bg-current.inputlog.col-span-3.p-2(v-model='registration.regUsername' :class='{ border: validation.autherror }')
          div.grid.grid-cols-4.m-3.gap-4
            span.text-left.mr-2.self-center  Пароль
            input.bg-current.inputlog.col-span-3.p-2(v-model='registration.regPassword' type='password'  :class='{ border: validation.autherror }')
      button.py-4.mx-auto.neoism.m-2.px-8(@click='signupfg()') Зарегистрироваться
      button.text-gray-700(@click='this.data.logined = !this.data.logined') Назад
    notifications(position='bottom right')
</template>
<script>
import Navbar from "@/elements/UI.section/NavBar" 
import Sidebar from "@/elements/UI.section/SideBar"
import { mapState} from 'vuex'
export default {
  data(){
       return {
        data: {
            autheddd: true,
            login: "",
            password: "",
            logined: true
        },
        validation:{
          autherror: false,
          valerror: false
        },
        registration:{
          regUsername:"",
          regPassword: "",
          regName: "",
          regSurname: "",
          switchRegGenderMale: false,
          switchRegGenderFeMale: false,
          regGender: "",
          regBirthday: ""
        }
     }
   },
    components: {
      Navbar, Sidebar
    },
    methods: {
      regGenderMethod(id){
        if(id == 0){
          this.registration.switchRegGenderFeMale = false
          this.registration.regGender = "MALE"
        }else{
          this.registration.switchRegGenderMale = false
          this.registration.regGender = "FEMALE"
        }
      },
      async signin(){
        var exit = null
      const response = await fetch("auth/login", {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
           username: this.data.login,
           password: this.data.password,
         }),
       });
        if ( response.status == 400){  
          this.validation.valerror = true 
        }else{
         exit = true;
         const responsein = await response.json();
          const token = responsein.token
          const profileIn = responsein.profile
          const accessRoleIn = responsein.userRoleOut[0]
          this.$store.commit('navbar/setAccessRoleIn', accessRoleIn)
          this.$store.commit('navbar/setProfileIn', profileIn)
          this.$store.commit('auth/tokenin', token)
          this.$store.commit('auth/authexit', exit)
          this.data.login = null
          this.data.password = null
          this.validation.valerror = false
          if(accessRoleIn == "ADMIN"){
            this.$router.push('/myinfo')
          }
          if(accessRoleIn == "USER"){
            this.$store.commit('navbar/setallwhoactive', 0)
            this.$router.push('/myinfo')
          }
          if(accessRoleIn == "STORAGER"){
            this.$store.commit('navbar/setallwhoactive', 1)
            this.$router.push('/storage')
          }
          if(accessRoleIn == "ACCOUNTANT"){
            this.$store.commit('navbar/setallwhoactive', 2)
            this.$router.push('/')
          }
          if(accessRoleIn == "PRODACCOUNTANT"){
            this.$store.commit('navbar/setallwhoactive', 3)
            this.$router.push('/orders')
          }
          if(accessRoleIn == "DELIVERY"){
            this.$store.commit('navbar/setallwhoactive', 4)
            this.$router.push('/')
          }
          
       }
      },
      async signupfg(){
      if(this.registration.regGender != "" && this.registration.regName != "" && this.registration.regSurname != "" && this.registration.regBirthday != "")  { const response = await fetch("auth/registration", {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
           username: this.registration.regUsername,
           password: this.registration.regPassword,
           name: this.registration.regName,
           surname: this.registration.regSurname,
           gender: this.registration.regGender,
           birthday: this.registration.regBirthday
         }),
       })
       this.registration.regName = null
       this.registration.regSurname = null
       this.registration.regGender = null
       this.registration.regUsername = null
       this.registration.regPassword = null
       this.registration.regBirthday = null
       if( response.status == 491){
           this.$notify({
           title: "Ошибка!",
           text: "Ошибка при регистрации",})
      
      }if( response.status == 490){
           this.$notify({
           title: "Ошибка!",
           text: "Такой пользователь уже есть",})
      
      }if( this.registration.regUsername === "йцукенгшщзхъфывапролджэёячсмитьбюйцукенгшщзхъфывапролджэёячсмитьбю"){
           this.$notify({
         title: "Ошибка!",
         text: "Пароль пустой",})
      
      }if( response.status == 492){
           this.$notify({
         title: "Ошибка!",
         text: "Пароль не должен быть пустым, больше 6 и меньше 16",})
      
      }if( response.status == 200){
        this.registration.regUsername = null
        this.registration.regPassword = null
           this.$notify({
         title: "Успех!",
         text: "Пользователь зарегистрирован",})
      
        }
      }else{
        this.$notify({
           title: "Ошибка!",
           text: "Заполните все поля",})
      }
    },
},
  computed: {
   ...mapState({
      token: state => state.auth.token,
      authed: state => state.auth.authed
   }),
  }
};
</script>

<style lang="postcss">
@import 'assets/styles/tailwind.postcss';
html{
/* background-image: url("./assets/fancy-pants.jpg"); */
background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
backdrop-filter: blur(20px);
height: 100%;
width: 100%; 
}
.inputerror{
 color: red;
}
body{
  background: rgba(0, 0, 0, 0.123);
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
height: 100%;
width: 100%;
margin-top: -2rem;
}
button{
  @apply transform;
}button:hover{
  @apply scale-105;
}
.grassmor{
background: rgba(255, 254, 254, 0.158);
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
}
.grassmorli{
background: rgb(223, 222, 222);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
border-radius: 10px;

}.BG69BG{
  /* background: #e0e0e0; */
  background: rgba(255, 255, 255, 0.363);
box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.192);
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
border-radius: 10px;
}
.inputlog{
  /* background: #e0e0e0; */
  background: rgba(255, 255, 255, 0.363);
box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.062);
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
border-radius: 10px;
}
.neoism{
border-radius: 10px;
background: #e0e0e0;
box-shadow: inset 5px 5px 15px #c1c1c1,
            inset -5px -5px 15px #ffffff;
}
.neoismflat{
border-radius: 10px;
background: #e0e0e0;
}
</style>