<template lang="pug">
div.flex-centre(v-if="IngredientShow == false")
    table.main-storage-div
        div.search-div
            span Поиск
            input(type="text" list="stationList" v-model="search").search-input
            datalist(id="stationList" )
                option(v-for="(item,index) in filteredData" @click="goToIngredient(0)").optrion-list {{item.name}}
        tr.th-style
            th №
            th Наименование
            th Количество
            th Последнее изменение
            th Ближайшая просрочка
        tr.item-block(v-for="(item, index) in filteredData" :key="index" @click="goToIngredient(index)")
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
        div.ingredient-block-column
            div(v-for="(item, index) in responseData[IngredientID].history" @click="this.actionview = true, this.actionID = index").history-div
                span {{index+1}}
                div
                    span Последнее действие - 
                    span {{responseData[IngredientID].whoUpdated[index].updateAction}}
                div    
                    span Дата действия - 
                    span {{dateTime(responseData[IngredientID].whoUpdated[index].updateDate)}}
                div
                    span Сотрудник - 
                    span {{responseData[IngredientID].whoUpdated[index].updateUsername}}
            div(v-if="this.actionview == true").div-double
                div().modal-div
                    div.flex-div-main
                        img(src="@/assets/svg/left_alignment.svg" style="width: 1.4vw;" @click="this.actionview = !this.actionview").backSvg
                        span.span-text-black {{responseData[IngredientID].whoUpdated[actionID].updateAction}}
                        div
                    div.flex-flex-2
                        span Сотрудник - 
                        span {{responseData[IngredientID].whoUpdated[actionID].updateUsername}}
                        span Дата действия - 
                        span {{dateTime(responseData[IngredientID].whoUpdated[actionID].updateDate)}}
                    table
                        tr
                            th Поставщик
                            th Дата
                            th Количество
                            th Цена
                            th Сумма
                        tr
                            td {{responseData[IngredientID].history[actionID].contractor}}
                            td {{dateTime(responseData[IngredientID].history[actionID].date)}}
                            td 
                                span {{responseData[IngredientID].history[actionID].amount}} 
                                span {{responseData[IngredientID].amountUnit}}
                            td {{responseData[IngredientID].history[actionID].price}} руб.
                            td {{responseData[IngredientID].history[actionID].count}} руб.
                    div.flex-div-3
                        div.div-div-div
                            span Наша цена
                            span {{responseData[IngredientID].history[actionID].ourPrice}} руб.
                        div.div-div-div
                            span Процент накрутки
                            span {{responseData[IngredientID].history[actionID].ourPricePercent}}%
                        div.div-div-div
                            div Срок годности
                            span {{dateTime(responseData[IngredientID].history[actionID].storageLife)}}
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
        actionview: false,
        actionID: null,
        search: "",
        searched: [],
      responseData: "",
      IngredientShow: false,
      IngredientID: null,
    };
  },
  methods: {
    goToIngredient(index) {
      this.IngredientID = index;
      this.IngredientShow = !this.IngredientShow;
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
            Authorization: `Bearer ${this.token}`,
          },
        });
        const resJson = await response.json();
        this.responseData = resJson;
        this.$store.commit("navbar/goLoading", 0);
        this.$store.commit("navbar/goLoading", 1);
        this.$store.commit("navbar/goLoading", 1);
      } catch (e) {
        alert(e);
      }
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      loadind: (state) => state.navbar.loader,
      sucsess: (state) => state.navbar.sucsess,
      error: (state) => state.navbar.error,
    }),
    filteredData() {
        return [...this.responseData].filter(({ name }) =>
        [name].some((val) => val.includes(this.search))
      );
    },
  },
  mounted() {
    this.getIngredientList();
  },
};
</script>

<style lang="scss">
.flex-flex-2{
        display: flex;
    gap: 1vw;
    justify-content: flex-end;
}
.span-text-black{
    font-family: "Cera Pro Medium";
    font-size: 1.4vw;
}
.div-div-div{
    display: flex;
    gap: 1vw;
}
.flex-div-3{
    display: flex;
    width: 100%;
    justify-content: space-around;
}
.flex-div-main{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}
.modal-div{
    background: white;
    width: 52%;
    height: 32%;
    border-radius: 2vw;
    display: flex;
    gap: 2.5vw;
    flex-direction: column;
    padding: 1.5vw;
}
.div-double{
    display: flex;
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    background: #0000007c;
    justify-content: space-around;
    align-items: center;
    font-family: "Cera Pro";
    font-size: 1vw;
}
.history-div{
    width: 100%;
    display: grid;
    grid-template-columns: 10% 30% 30% 30%;
    font-family: "Cera Pro";
    height: 3vw;
    border-radius: 1vw;
    background: #e9e9e9;
    font-size: 1vw;
    align-items: center;
}
.optrion-list{
    font-family: "Cera Pro";
    font-size: 1vw;
}
.search-input{
    height: 90%;
    border-radius: 0.5vw;
    border: 0.1vw solid #9f9f9f;
}
.search-div{
    display: flex;
    gap: 1vw;
    width: 91%;
    height: 2vw;
    justify-content: flex-end;
    font-family: "Cera Pro";
    font-size: 1vw;
    align-items: center;
}
.ingredient-span-div-style {
  display: flex;
  gap: 0.5vw;
}
.ingredient-block-column{
     display: flex;
     flex-direction: column;
  gap: 1vw;
  width: 90%;
  border-radius: 1vw;
  font-family: "Cera Pro";
  font-size: 1.5vw;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
}
.ingredient-block {
  display: flex;
  gap: 1vw;
  width: 90%;
  height: 4vw;
  border-radius: 1vw;
  font-family: "Cera Pro";
  font-size: 1.5vw;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
}
.item-btn {
  font-family: "Cera Pro";
  font-size: 1vw;
  background: #e9e9e9;
}
.line {
  width: 100%;
  height: 0.15vw;
  border-radius: 2vw;
  background: black;
}
.th-style {
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
  gap: 0.3vw;
}
.item-block {
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
.main-storage-div:nth-child(2) {
  border-bottom: solid 2px black;
}
</style>
