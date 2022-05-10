<template lang="pug">
div.flex-centre(v-if="IngredientShow == false")
    table.main-storage-div
        tr.th-style
            th №
            th Наименование
            th Количество
            th Последнее изменение
            th Ближайшая просрочка
        tr.item-block(v-for="(item, index) in responseData" :key="index" @click="goToIngredient(index)")
            td {{index+1}}
            td {{item.name}}
            td.amount-style 
                span {{item.realAmount}}
                span {{item.amountUnit}}
            td {{dateTime(item.lastUpdate)}}
            td {{dateTime(item.storageLifeDedline)}}
div(v-if="IngredientShow == true")
    table.main-storage-div
        div.ingredient-block
            img(src="@/assets/svg/left_alignment.svg" style="width: 1.4vw;" @click="IngredientShow = !IngredientShow").backSvg
            span {{responseData[IngredientID].name}}
            div
                div
        div.ingredient-block
            div.ingredient-span-div-style
                span Количество
                span {{responseData[IngredientID].realAmount}}
                span {{responseData[IngredientID].amountUnit}}
            div.ingredient-span-div-style
                span Ближайшая просрочка
                span {{dateTime(responseData[IngredientID].storageLifeDedline)}}
        div.ingredient-block
            span История изменений
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
    data() {
        return {
            responseData: "",
            IngredientShow: false,
            IngredientID: null
        };
    },
    methods: {
        goToIngredient(index){
            this.IngredientID = index
            this.IngredientShow = !this.IngredientShow
        },
        dateTime(date) {
            return moment(date).format("DD.MM.YYYY HH:mm");
        },
        IngredientShowMethod(index) {
            this.IngredientShow = !this.IngredientShow;
            if (index != null) {
                this.IngredientID = index;
            }
        },
        async getIngredientList() {
            try {
                this.$store.commit("navbar/goLoading", 0);
                const response = await fetch("auth/storage/getIngredientList", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                });
                const resJson = await response.json();
                this.responseData = resJson;
                this.$store.commit("navbar/goLoading", 0);
                this.$store.commit("navbar/goLoading", 1);
                this.$store.commit("navbar/goLoading", 1);
            }
            catch (e) {
                alert(e);
            }
        }
    },
    computed: {
        ...mapState({
            token: (state) => state.auth.token,
            loadind: (state) => state.navbar.loader,
            sucsess: (state) => state.navbar.sucsess,
            error: (state) => state.navbar.error
        }),
    },
    mounted() {
        this.getIngredientList();
    },
}
</script>

<style lang="scss">
.ingredient-span-div-style{
    display: flex;
    gap: 0.5vw
}
.ingredient-block{
    display: flex;
    gap: 1vw;
    width: 90%;
    height: 4vw;
    border-radius: 1vw;
    font-family: "Cera Pro";
    font-size: 1.5vw;
    align-items: center;
    justify-items: center;
    justify-content:  space-between;
}
.item-btn{
    font-family: "Cera Pro";
    font-size: 1vw;
    background: #e9e9e9;
}
.line{
    width: 100%;
    height: 0.15vw;
    border-radius: 2vw;
    background: black;
}
.th-style{
    display: grid;
    grid-template-columns: 5% 35% 10% 22% 23%;
    gap: 1vw;
    width: 90%;
    height: 4vw;
    border-radius: 1vw;
    font-family: "Cera Pro";
    font-size: 1.2vw;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
.amount-style {
    display: flex;
    gap: 0.3vw
}
.item-block{
    display: grid;
    grid-template-columns: 5% 35% 10% 22% 23%;
    gap: 1vw;
    width: 90%;
    height: 4vw;
    border-radius: 1vw;
    font-family: "Cera Pro";
    font-size: 1vw;
    align-items: center;
    justify-items: center;
    justify-content: center;
    background: #e9e9e9;
    -webkit-box-shadow: 0px 0px 0.45vw 0.2vw rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 0.45vw 0.2vw rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 0.45vw 0.2vw rgba(0, 0, 0, 0.15);
}
.flex-centre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 4%;
}
.main-storage-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2vw;
    padding-bottom: 2vw;
    gap: 1vw;
  margin-top: 2%;
  width: 100%;
  border-radius: 2vw;
  background: white;
  -webkit-box-shadow: 0px 0px 1.4vw 0.4vw rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 1.4vw 0.4vw rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 1.4vw 0.4vw rgba(0, 0, 0, 0.2);
}
.main-storage-div:nth-child(2){
    border-bottom: solid 2px black;
}
</style>