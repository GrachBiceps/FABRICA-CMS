<template lang="pug">
div
  div(v-if='authed').flex-wrap
    div
      Navbar.z-20.mx-12.mt-10.BG69BG
      Sidebar.fixed.z-10.BG69BG
    div.my-16.ml-24.mr-24.BG69BG.rounded-xl
      router-view
    notifications(position="bottom right")
  div(v-else).w-full.h-screen.grid.mt-8
    div.mx-auto.my-auto.BG69BG.p-8.text-center.grid.grid-cols-1.gap-2(v-show='data.logined')
      div.p-4.neoismflat.m-2 АВТОРИЗАЦИЯ
      div.p-4.gap-2.grid.grid-cols-4
        span.text-left.mr-2.self-center Login
        input.bg-current.inputlog.col-span-3.p-1.border-red-500(v-model='data.login'  :class='{ border: validation.valerror }')
        span.text-left.mr-2.self-center  Password
        input.bg-current.inputlog.col-span-3.p-1.border-red-500(v-model='data.password' type='password'  :class='{ border: validation.valerror}' )
      p.text-red-500(v-show='validation.autherror') Неверные данные
      button.py-4.mx-auto.neoism.m-2.px-8(@click='signin()') ВОЙТИ
      button.text-gray-700(@click='this.data.logined = !this.data.logined') Зарегистрироваться
    div.mx-auto.my-auto.BG69BG.p-8.text-center.grid.grid-cols-1.gap-2(v-show='!data.logined')
      div.p-4.neoismflat.m-2 Регистрация
      div.p-4.gap-2.grid.grid-cols-4
        span.text-left.mr-2.self-center Nickname
        input.bg-current.inputlog.col-span-3.p-1(v-model='registration.regname')
        span.text-left.mr-2.self-center Login
        input.bg-current.inputlog.col-span-3.p-1(v-model='registration.reglog')
        span.text-left.mr-2.self-center  Password
        input.bg-current.inputlog.col-span-3.p-1(v-model='registration.regpass' type='password')
      button.py-4.mx-auto.neoism.m-2.px-8(@click='signupfg()') Зарегистрироваться
      button.text-gray-700(@click='this.data.logined = !this.data.logined') Назад
    notifications(position='bottom right')
</template>

<script>
import Navbar from "@/components/NavBar"
import Sidebar from "@/components/SideBar"
import { mapState} from 'vuex'
export default {
  data(){
       return {
        data: {
            login: "",
            password: "",
            logined: true,
            usersdata: ''
        },
        auth: {

        },
        validation:{
          autherror: false,
          valerror: false
        },
        registration:{
          reglog:"",
          regpass: "",
          regname: "",
        }
     }
   },
    components: {
      Navbar, Sidebar
    },
    methods: {
      signin(){
        var exit = null;
        if(this.data.login == this.data.usersdata[0].array.reglog && this.data.password == this.data.usersdata[0].array.regpass )
        {
          exit = true
          this.$store.commit('auth/authexit', exit)
          this.$router.push('/myinfo')
          this.validation.autherror = false
          this.validation.valerror = false
        }else{
          this.validation.autherror = true
          this.validation.valerror = true
        }
      },
      signupfg(){
        var regdata = {}
        regdata.regname = this.registration.regname
        regdata.reglog = this.registration.reglog
        regdata.regpass = this.registration.regpass
      if(regdata.reglog !== '' && regdata.regpass !== '' && regdata.regname !== ''){
          this.axios.post("api/users", regdata)
          .then(response => {
            console.log("yes")
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
              })
        }
        else if(regdata.regname == '' ){
            this.$notify({
                        title: "Ошибка!",
                        text: "Имя не может быть пустым или меньше 5 символов",
                    })
        }
        else if(regdata.reglog == ''){
           this.$notify({
                        title: "Ошибка!",
                        text: "Логин не может быть пустым или меньше 6 символов",
                    })
        }
        else if(regdata.regpass == '' ){
            this.$notify({
                        title: "Ошибка!",
                        text: "Пароль не может быть пустым или меньше 8 символов",
                    })
        }
      }
    },
    computed:{
   ...mapState({
      authed: state => state.auth.authed,
   }),
  },
  mounted () {
    this.axios
        .get('api/users')
        .then(response => (this.data.usersdata = response.data))
  }
}
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