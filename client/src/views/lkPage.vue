<template lang="pug">
div.flex-centre
    div.main-lk-div
        div.first-div
            div.first-div-items1
                div.flex-column
                    span.btn(@click="clickSection(0)") Главное
                    transition.line(v-show="activeBtn == 0" name="fade")
                        div
                div.flex-column
                    span.btn(@click="clickSection(1)") Безопасность
                    transition.line(v-show="activeBtn == 1" name="fade")
                        div
            div.first-div-items2.flex-column
                img.setting-img(src="@/assets/svg/Setting.svg" @click="clickSection(99)")
        div.scnd-div
            div.logo-div
                div.img-frame
                    img.img(src="@/assets/8063-1.jpg")
            div.info-div
                span.fio Akobyan Grach Kamoevich
                div.roles-div
                    div.role-div ADMINsdsad
                    div.role-div ADMINsdsad
                    div.role-div ADMINsdsad
                    div.role-div ADMINsdsad
                    div.role-div ADMINsdsad
                    div.role-div ADMINsdsad
            div.personal-data
                div.flex-column.firs-data.flex-end
                    span Дата рождения:
                    span Пол:
                    span Email:
                    span Телефон:
                div.flex-column.scnd-data
                    span.flex-row Дата рождения
                    span.flex-row Дата рождения
                    div.flex-row
                        span Дата рождения
                        div.flex-row.indiv-width
                            div.vert-line-red
                                div
                            span Подтвердите почту
                    div.flex-row
                        span Дата рождения
                        div.flex-row.indiv-yellow
                            div.vert-line-yellow
                                div
                            span Рекомендуем привязать номер телефона
</template>

<script>
export default {
    data(){
        return{
            activeBtn: 0,
            emailAprove: true,
            mobileReco: true,
        }
    },
    methods: {
        clickSection(index){
            this.activeBtn = index
        }
    }
}
</script>

<style lang="scss" scoped>
.vert-line-red{
    height: 90%;
    width: 2%;
    background: red;
}
.vert-line-yellow{
    height: 90%;
    width: 1%;
    background: rgb(223, 223, 72);
}
.indiv-yellow{
    width: 67%;
    color: rgb(203, 203, 61);
    font-family: "Cera Pro";
    font-size: 0.8vw;
}
.fio{
    font-family: "Cera Pro Black";
    font-size: 1.8vw;
}
.indiv-width{
    width: 35%;
    color: red;
    font-family: "Cera Pro";
    font-size: 0.8vw;
}
.flex-end{
    align-items: flex-end;
}
.flex-row{
    display: flex;
    gap: 1vw;
    align-items: stretch;
    user-select:text;
}
.firs-data{
    width: 20%;
}
.scnd-data{
    width: 80%;
}
.roles-div{
    display: flex;
    flex-wrap: wrap;
    width: 55%;
    gap: 0.4vw;
    justify-content: center;
}
.role-div{
    font-family: "Cera Pro Black";
    font-size: 0.8vw;
    color: white;
    padding: 0.5vw;
    padding-top: 0.3vw;
    padding-bottom: 0.3vw;
    background: black;
}
.scnd-div{
    display: flex;
    flex-direction: column;
    width: 94%;
    height: 88%;
    margin: 3%;
    align-items: center;
    gap: 0.4vw;
}
.logo-div{
    display: flex;
    width: 100%;
    height: 55%;
    align-items: center;
    justify-content: center;
}
.btn{
    cursor: pointer;
}
.personal-data{
    display: flex;
    width: 100%;
    font-family: "Cera Pro";
    font-size: 1.1vw;
    height: 27%;
    gap: 0.8vw;
    align-items: center;
}
.setting-img{
    width: 1.5vw;
}
.img-frame{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    outline-style: solid;
    outline-width: 0.2vw;
    overflow: hidden;
    z-index: 1;
    width: 19vw;
    aspect-ratio: 1/1;
    background: gray;
}
.img{
    width: 101%;
    z-index: 0;
    position: relative;
    object-fit: cover;
    background: gray;
}
.info-div{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.4vw;
}
.main-lk-div{
    margin-top: 2%;
    width: 55%;
    height: 50vw;
    border-radius: 2vw;
    background: white;
}
.flex-centre{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 4%;
}
.first-div{
    display: flex;
    width: 94%;
    height: 4%;
    margin: 3%;
    align-items: center;
}
.first-div-items1{
    display: flex;
    width: 95%;
    gap: 1vw;
    font-family: "Cera Pro Medium";
    font-size: 1.1vw;
    align-items: center;
}
.first-div-items2{
    display: flex;
    width: 5%;
    justify-content: flex-end;
}
.line{
    width: 100%;
    height: 0.15vw;
    border-radius: 2vw;
    background: black;
}
.flex-column{
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 0.1vw;
    user-select: none;
    justify-content: space-evenly;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>