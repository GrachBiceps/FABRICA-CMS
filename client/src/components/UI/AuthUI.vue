<template lang="pug">
div.Auth
    div.AuthGrid
        div.AuthGridInputs
            img(src="@/assets/svg/home-repair-service-round-24px.svg").imgStyle
            span.spnStyleH1 АВТОРИЗАЦИЯ
            div.spanFrame
                span.spnStyleH2 Логин:
                input.inpStyle
            div.spanFrame
                span.spnStyleH2 Пароль:
                input(type="password").inpStyle.inpPswdStyle
            div.spanFrameH3
                span.spnStyleH3 Запомнить меня
                label(class="switch")
                  input(type="checkbox")
                  span(class="slider round")
            button.AuthButton Войти
            div.spanFrameH3
                span.spnStyleH3 Забыл пароль?
                span.spnStyleH3 Регистрация
        div.GridGradient
            span.GradientText Ииииииууууу
</template>

<script>
import switchCSS from "@/components/UI/SwitchRound.css"
    export default {
        
    }
</script>

<style lang="css" scoped>
/* Для компов */
@media (min-width: 1024px){
    .Auth{
        width: clamp(300px, 80vw, 2000px);
    }
    .AuthGrid{
        background: white;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 2vw;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-items: center;
        align-items: center;
        aspect-ratio: 16/10;
        height: 100%;
    }
    .GridGradient{
        background: linear-gradient(to right bottom, #948cd9 3.31%, #BD5DAE 94.52%) ;
        background-repeat: no-repeat;
        /* position: relative; */
        border-radius: 4vh;
        height: 95%;
        width: 93%; 
    }
    .GradientText{
        display: grid;
        align-items: center;
        justify-items: center;
        height: 100%;
    }
    .AuthGridInputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        justify-content: center;
        width: 72%;
        height: 86%;  
    }
    .AuthButton{
        grid-column: 1/ span 2;
        grid-row: 4;
        color: white;
        background: #000 76%;
        border: none;
        border-radius: 0.5vw;
        width: 10vw;
        aspect-ratio: 16/7;
        font-family: "Cera Pro Bold";
        font-size: clamp(10px, 2vw, 40px);
        text-align: center;
    }
    .spnStyleH2{
        font-family: "Cera Pro Medium";
        font-size: 1.7vw;
        text-align: end;
        margin: 1vw;
    }
    .spnStyleH1{
        font-family: "Cera Pro Bold";
        font-size: 2.7vw;
        text-align: end;
        margin: 1vw;
    }
    .spnStyleH3{
        font-family: "Cera Pro";
        font-size: 1.2vw;
        text-align: end;
        margin: 1vw;
    }
    .inpStyle{
        width: clamp(180px, 19vw, 600px);
        height: clamp(31px, 2.7vw, 500px);
        font-family: "Cera Pro";
        font-size: 1.8vw;
        border-radius: 0.5vw;
        background: rgba(196, 191, 191, 0.28);
        box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
        border: white;
        color: black;
        justify-self: center;
        padding-left: 0.4vw;
    }
    .inpPswdStyle{
        font-family: sans-serif;
    }
    .imgStyle{
        width: 7vw;
        aspect-ratio: 1/1;
    }
    .spanFrame{
        width: 100%;
        display: grid;
        grid-template-columns: 28% 72%;
        align-items: center;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    .spanFrameH3{
        display: flex;
        align-items: center;
    }
}
</style>