<template lang="pug">
div.Auth
    div.AuthGrid
        div.AuthGridInputs
            span.spnStyleH1 Регистрация
            div.spanFrame
                span.spnStyleH2 Имя:
                input.inpStyle(v-model="reg.login")
                span.spnStyleH2 Фамилия:
                input.inpStyle(v-model="reg.login")
                span.spnStyleH2 E-mail:
                input.inpStyle(v-model="reg.login")
                span.spnStyleH2 Телефон:
                input.inpStyle(v-model="reg.login")
                span.spnStyleH2 Пароль:
                input(type="password" v-model="reg.password").inpStyle.inpPswdStyle
                div.switchRegUI
                    span.spnStyleH3 Мужчина
                    label(class="switch")
                        input(type="checkbox" v-model="reg.saveMeBox")
                        span(class="slider round")
                    span.spnStyleH3 Женщина
            button.AuthButton(@click="authUp") Зарегистрироватся 
            div.spanFrameH3
                button.spnStyleH3.helpButtons() Назад
        div.GridGradient
            img(src="@/assets/svg/local-fire-department-round-24px.svg").imgStyleGradient
            span.spnStyleH1 Добро пожаловать
            span.spnStyleH3 Lo
</template>
<script>
export default {
    data(){
            return{
                reg: {
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
@media (max-width: 720px){
    .AuthButton{
    cursor: pointer;
    font-size: 4vw;
    width: 50vw;
    }
    .AuthGridInputs{
        width: 95%;
        height: 89%;  
    }
}
@media (min-width: 720px){
    .AuthButton{
    cursor: pointer;
    font-size: 1vw;
    width: 12vw;
    }
}
@media (min-width: 1024px){
    .Auth{
        width: 55vw;
        
    }
    .AuthButton{
    cursor: pointer;
    font-size: 1vw;
    width: 12vw;
    }
    .AuthGrid{
        grid-template-columns: 100%;
        aspect-ratio: 14/10;
    }
    .AuthGridInputs{
        width: 85%;
        height: 99%;  
        justify-content: space-evenly;
    }
    .GridGradient{
        background-repeat: no-repeat;
        border-radius: 4vh;
        height: 98%;
        width: 93%; 
        display: none;
        visibility: hidden;
        align-items: center;
        flex-direction: column;
    }
    .GradientText{
        display: grid;
        align-items: center;
        justify-items: center;
    }
    .spanFrame{
        display: grid;
        grid-template-columns: 12% 35% 14% 35%;
        justify-content: center;
        gap: 1vw;
        margin-top: 2vw;
        margin-bottom: 2vw;
    }
    .regFrame{
        display: flex;
        gap: 1vw;
        align-items: center;
        justify-content: center;
    }
    .switchRegUI{
        display: grid;
        grid-column: span 2;
        grid-template-columns: 25% 20% 26%;
        justify-items: center;
        align-items: center;
        justify-content: center;
    }
}
</style>