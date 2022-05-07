<template lang="pug">
div.MainDiv
    div.div-flogo
        div.logo-div
            img(src="@/assets/svg/FK.svg" style="width: 60%" @click="this.$router.push('/')")
        div.div-flex.font-style.main-btn
            div.flex-column
                button.font-style(@click="clickSection(0)") Инфографика
                transition.line(v-show="activeBtn == 0" name="fade")
                    div
            div.flex-column
                button.font-style(@click="clickSection(1)") Контакты
                transition.line(v-show="activeBtn == 1" name="fade")
                    div
    div.scnd-btn.div-flex
        div(v-for="(item,index) in navbarBtn.Array")
            div.flex-column
                button.font-style(@click="clickSection(index+3)") {{item.name}}
                transition.line(v-show="activeBtn == index+3" name="fade")
                    div
    div.div-flex.lk-btn
        div.div-flex
            div.flex-column
                button.font-style(@click="clickSection(2)") Задачи
                transition.line(v-show="activeBtn == 2" name="fade")
                        div
            span.notif(v-show="notification > 0") {{notification}}
        div.div-lk    
            div.lk-style(@click="dropMenu=!dropMenu")
                span.font-style Акобян.Г.К
                img.lk-avatar(v-if="authed == true" loading="lazy" :src="`http://localhost:49001/uploads/${profile.profileAvatar.filename}`")
            div.drop-menu(v-show="dropMenu == true")
                span.btn-mergin.lk-drop-font(@click="goToPage('lk')") Личный кабинет
                span.lk-drop-font(@click="goToPage('message')") Сообщения
                span.lk-drop-font(@click="goToPage('jobs')") Работа
                span.lk-drop-font(@click="goToPage('settings')") Настройки
                span.lk-drop-font.exit-btn(@click="exit()") Выход
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            activeBtn: 0,
            dropMenu: false,
        }
    },
    methods:{
        exit(){
            this.$store.commit("auth/newToken", '');
            this.$store.commit("auth/editProfile", '');
            this.$store.commit("auth/editRoles", '');
            this.$store.commit("auth/authExit", false);
            this.$router.push(`/`)
        },
        goToPage(Page){
            this.$router.push(`/${Page}`)
            this.dropMenu = !this.dropMenu
        },
        clickSection(index){
            this.activeBtn = index
        }
    },
    computed: {
        ...mapState({
            notification: (state) => state.navbar.notificatinNavbar,
            navbarBtn: (state) => state.navbar.navbarBtn,
            profile: (state) => state.auth.profile,
            authed: (state) => state.auth.authed,
        }),
    },
}
</script>

<style lang="scss" scoped>
.div-flogo{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2vw;
    width: 30%;
}
.div-flex{
    display: flex;
    gap: 2vw;
    justify-content: center;
    align-items: center;
}
.logo-div{
    width: 30%;
}
.main-btn{
    
}
.exit-btn{
    background: #c53737;
    width: 50%;
    height: 1.2vw;
    border-radius: 1vw;
    color: white;
    margin-bottom: 0.5vw;
}
.scnd-btn{

}
.lk-btn{
    width: 20%;
}
.notif{
    position: absolute;
    background: #c53737;
    color: white;
    border-radius: 1vw;
    aspect-ratio: 7/5;
    width: 1vw;
    font-size: 0.6vw;
    margin-left: 5%;
    margin-bottom: 1%;

}
.drop-menu{
    background: rgb(255, 255, 255);
    position: absolute;
    width: 9%;
    color: black;
    border-radius: 1vw;
    z-index: 0;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 0.3vw;
    align-items: center;
}
.div-lk{
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.btn-mergin{
    margin-top: 30%;
}
.lk-drop-font{
    font-family: "Cera Pro";
    font-size: 0.8vw;
    cursor: pointer;
}
.MainDiv{
    display: flex;
    margin-top: 1vw;
    background: white;
    width: 85vw;
    height: 5vw;
    border-radius: 1.5vw;
    justify-content: space-between;
    align-items: center;
}
.font-style{
    font-family: "Cera Pro Medium";
    font-size: 1vw;
    cursor: pointer;
    user-select: none;
}
.lk-style{
    display: flex;
    background: #97FF95;
    border: 0.12vw solid;
    box-sizing: border-box;
    border-color: #000000;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25), inset 0px 0px 2px rgba(0, 0, 0, 0.25);
    width: 9vw;
    border-radius: 0.7vw;
    aspect-ratio: 4/1;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
}
.lk-avatar{
    width: 1.5vw;
    background: #908f8f;
    border-radius: 100%;
    aspect-ratio: 1/1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.line{
    width: 100%;
    height: 0.15vw;
    border-radius: 2vw;
    background: black;
}
.flex-column{
    display: flex;
    flex-direction: column;
    gap: 0.1vw
}
</style>