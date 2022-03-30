<template lang="pug">
div.Auth
    div.AuthGrid
        div.AuthGridInputs
            img(src="@/assets/svg/home-repair-service-round-24px.svg").imgStyle
            span.spnStyle Логин:
            input.inpStyle
            span.spnStyle Пароль:
            input(type="password").inpStyle.inpPswdStyle
            button.AuthButton Войти
        div.GridGradient
            span.GradientText Ииииииууууу
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
@media (min-width: 0px) {
    .Auth{
    background: white;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    /* padding: 5vmin; */
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    
    }
}
/* Для для телефонов и меньше */
@media (min-width: 450px){
    .Auth{
    background: white;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 30px;
    position: absolute;
    /* padding: 5vmin; */
    width: clamp(300px, 70vw, 600px);
    height: clamp(400px, 85vw, 650px);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    }
}
/* Для планшетов */
@media (min-width: 820px){
    .Auth{
        background: white;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 30px;
        position: absolute;
        /* padding: 5vmin; */
        width: clamp(300px, 70vw, 700px);
        height: clamp(400px, 85vw, 800px);
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    }
}
/* Для компов */
@media (min-width: 1024px){
    .Auth{
        background: white;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 30px;
        position: fixed;
        /* padding: 5vmin; */
        width: clamp(300px, 90vw, 1000px);
        height: clamp(300px, 65vw, 800px);
        
        top: 50%;
        left: 50%;
    }
    .AuthGrid{
        display: grid;
        grid-template-columns: 50% 50%;
        justify-items: center;
        align-items: center;
        height: 100%;
    }
    .GridGradient{
        background: linear-gradient(to right bottom, #948cd9 3.31%, #BD5DAE 94.52%) ;
        background-repeat: no-repeat;
        /* position: relative; */
        border-radius: 4vh;
        height: 96%;
        width: 94%; 
    }
    .GradientText{
        display: grid;
        align-items: center;
        justify-items: center;
        height: 100%;
    }
    .AuthGridInputs{
        display: grid;
        grid-template-columns: 20% 80%;
        gap: 0.4vw;
        align-items: center;
        justify-items: center;
        justify-content: center;
        
    }
    .AuthButton{
        grid-column: 1/ span 2;
        grid-row: 4;
        color: white;
        background: #000 76%;
        border: none;
        border-radius: 0.5vw;
        width: clamp(180px, 10vw, 300px);
        height: clamp(100px, 3vw, 200px);
        font-family: "Cera Pro Bold";
        font-size: clamp(10px, 2vw, 40px);
        text-align: center;
        margin-top: 2vw;
    }
    .spnStyle{
        font-family: "Cera Pro Bold";
        font-size: 0.7vw;
        text-align: end;
    }
    .inpStyle{
        width: clamp(180px, 8vw, 300px);
        height: clamp(100px, 3vw, 500px);
       font-family: "Cera Pro";
       font-size: 0.8vw;
    }
    .inpPswdStyle{
        font-family: sans-serif;
    }
    .imgStyle{
        grid-column:  span 2;
        grid-row: 1;
        margin-bottom: 5vw;
    }
}
</style>