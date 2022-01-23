<template lang="pug">
div.Auth
    div.AuthGrid
        div.AuthGridInputs
            span Логин
            input
            span Пароль
            input
            button.AuthButton
        div.GridGradient
            span.GradientText Ииииииууууу
</template>

<script>
    export default {
        
    }
</script>

<style lang="css">
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
        margin-left: 10px;
        margin-right: 10px;
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
        position: absolute;
        /* padding: 5vmin; */
        width: clamp(300px, 55vw, 1000px);
        height: clamp(300px, 50vw, 800px);
        transform: translate(-50%, -50%);
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
        grid-template-columns: 50% 50%;
    }
    .AuthButton{
        grid-column-start: 1 2;
        
    }
}
</style>