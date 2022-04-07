<template lang="pug">
div.Auth
    div.AuthGrid
        div.AuthGridInputs
            div.titleReg
                div.titleRegUIbtn
                    img(src="@/assets/svg/left_alignment.svg").backSvg
                    span Назад
                div.titleRegUI
                    img(src="@/assets/svg/add_account.svg").regSvg
                    span.spnStyleH1 Регистрация
            div.regSpanFrame
                div.spanGrid
                    div.spanGridItem
                        span.spnStyleH2.regSpan Имя:
                        input.inpStyle(v-model="reg.login")
                    div.spanGridItem
                        span.spnStyleH2.regSpan Фамилия:
                        input.inpStyle(v-model="reg.login")
                div.spanGrid
                    div.
                    span.spnStyleH2.regSpan Дата рождения:
                    input.inpStyle(v-model="reg.login" type="date")
                div.spanGrid
                    span.spnStyleH2.regSpan E-mail:
                    input.inpStyle(v-model="reg.login" type="email")
                div.spanGrid
                    span.spnStyleH2.regSpan Пароль:
                    input(type="password" v-model="reg.password" default="").inpStyle.inpPswdStyle
                div.switchRegUI
                    span.spnStyleH3 Мужчина
                    span.spnStyleH3 Женщина
            button.AuthButton(@click="authUp") Зарегистрироватся 
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
.spanGridItem{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.regSpan{
    margin-left: 0.8vw ;
}
.spanGrid{
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    gap: 1vw;
}
.regSpanFrame{
    display: grid;
    grid-template-columns: 100%;
    gap: 1vw;
}
.AuthGridInputs{
    width: 87%;
    height: 91%;
}
.titleRegUI{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.titleRegUIbtn{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 25% 25% 25% 25%;
    gap: 0.5vw;
    align-items: center;
    font-family: "Cera Pro Light";
    font-size: 1.5vw;
}
.titleReg{
    display: grid;
    grid-template-columns: 10% 70% 10%;
    width: 100%;
    height: 23%;
    
    justify-content: space-between;
}
.regSvg{
    width: 6.7vw ;
    aspect-ratio: 1/1;
}
.backSvg{
    width: 1.8vw;
    aspect-ratio: 1/1;
}
</style>