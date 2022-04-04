<template lang="pug">
div.Auth
    div.AuthGrid
        div.AuthGridInputs
            img(src="@/assets/svg/home-repair-service-round-24px.svg").imgStyle
            span.spnStyleH1 АВТОРИЗАЦИЯ
            div.spanFrame
                span.spnStyleH2 Логин:
                input.inpStyle(v-model="auth.login")
            div.spanFrame
                span.spnStyleH2 Пароль:
                input(type="password" v-model="auth.password").inpStyle.inpPswdStyle
            div.spanFrameH3
                span.spnStyleH3 Запомнить меня
                label(class="switch")
                  input(type="checkbox" v-model="auth.saveMeBox")
                  span(class="slider round")
            button.AuthButton(@click="authUp") ВОЙТИ
            div.spanFrameH3
                button.spnStyleH3.helpButtons() Забыл пароль?
                button.spnStyleH3.helpButtons(style="font-weight: bold;" ) Регистрация
        div.GridGradient
            img(src="@/assets/svg/local-fire-department-round-24px.svg").imgStyleGradient
            span.spnStyleH1 Добро пожаловать
            span.spnStyleH3 Lorem ipsum lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
</template>

<script>
import SwitchCSS from "@/components/UI/AuthUI/SwitchRound.scss"
import MediaW1024Plus from "@/components/UI/AuthUI/MediaW1024Plus.scss"
import MediaW1024_720 from "@/components/UI/AuthUI/MediaW1024_720.scss"
import MediaW720Minus from "@/components/UI/AuthUI/MediaW720Minus.scss"
    export default {
        data(){
            return{
                auth: {
                    login: "",
                    password: "",
                    saveMeBox: false,
                }
            }
        },
        methods: {
           async authUp(){
               
           }
        }
    }
</script>

<style lang="scss" scoped>
.helpButtons{
    margin-top: 1vw;
    margin-left: 0vw;
    margin-right: 0vw;
}
.AuthButton{
    cursor: pointer;
}
.AuthButton:focus{
    transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -webkit-transform: scale(0.9, 0.9);
    -webkit-transition: .4s;
    transition: .4s;
}
</style>