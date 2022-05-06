<template lang="pug">
div.Auth
    div.AuthGrid
        div.AuthGridInputs
            div.titleReg
                div.titleRegUIbtn(@click="authComp()")
                    img(src="@/assets/svg/left_alignment.svg").backSvg
                    span Назад
                div.titleRegUI
                    img(src="@/assets/svg/add_account.svg").regSvg
                    span.spnStyleH1 Регистрация
            div.regSpanFrame
                div.spanGrid
                    div.spanGridItem
                        span.spnStyleH2.regSpan Имя:
                        input.inpStyle.regInput(v-model="reg.name")
                    div.spanGridItem
                        span.spnStyleH2.regSpan Фамилия:
                        input.inpStyle.regInput(v-model="reg.surname")
                div.regItem
                    div.spanGridItem
                        span.spnStyleH2.regSpan Дата рождения:
                        input.inpStyle.regInput(v-model="reg.birthday" type="date" style="")
                    div.spanGridItemCheckbox
                        span.spnStyleH3.regH3 Мужчина
                        input.regCheckbox(@click="gender('MALE')" type="checkbox")
                        span.spnStyleH3.regH3 Женщина
                        input.regCheckbox(@click="gender('FEMALE')" type="checkbox")
                div.spanGrid(style="grid-template-columns: 100%;")
                    div.spanGridItem
                        span.spnStyleH2.regSpan E-mail:
                        input.inpStyle(v-model="reg.login" type="email" style="width: 100%;")
                div.spanGrid(style="grid-template-columns: 100%;")
                    div.spanGridItem
                        span.spnStyleH2.regSpan Пароль:
                        input(type="password" v-model="reg.password" default="" style="width: 100%;").inpStyle.inpPswdStyle
                div.regAccept
                    div.regAcceptFlex
                        input.regCheckbox(type="checkbox" v-model="reg.politAndConfAccept")
                        span.regH3Accept Я принимаю клиентское соглашение и политика конфиденциальности.
                    div.regAcceptFlex
                        input.regCheckbox(type="checkbox" v-model="reg.userDataAccept")
                        span.regH3Accept Согласие на обработку персональных данных
                div.checkboxGrid()
                    div.regAcceptFlex
                        div.CapchaDiv капча
                        img.CapchaSVG(src="@/assets/svg/Reload.svg")
                        input.inpStyle.CapchaInput(v-model="reg.capcha" type="" style="clamp(100px, 14vw, 500px);")
                div.spanGrid(style="grid-template-columns: 100%; justify-items: center; ")
                    button.RegButton(@click="regAccept()") Зарегистрироватся 
        div.GridGradient
            img(src="@/assets/svg/local-fire-department-round-24px.svg").imgStyleGradient
            span.spnStyleH1 Добро пожаловать
            span.spnStyleH3 Lo
</template>
<script>
export default {
  data() {
    return {
      reg: {
        name: "",
        surname: "",
        login: "",
        password: "",
        gender: "",
        birthday: "",
        politAndConfAccept: false,
        userDataAccept: false,
        capcha: "",
      },
    };
  },
  methods: {
    authComp() {
      this.$emit("authComp", true);
    },
    gender(genderValue){
        this.reg.gender = genderValue
    },
    async regAccept() {
        const response = await fetch("auth/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.reg.name,
          surname: this.reg.surname,
          gender: this.reg.gender,
          username: this.reg.login,
          password: this.reg.password,
        }),
      });
      if (response.status == 400) {
        this.validation.dataErr = true;
      } else {
        const resJson = await response.json();
        const token = resJson.token;
        this.$store.commit("auth/newToken", token);
        this.$store.commit("auth/authExit", true);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 720px){
.checkboxGrid {
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  width: 100%;
  gap: 1vw;
}
.CapchaSVG {
  width: clamp(20px, 2vw, 46px);
  height: clamp(20px, 2vw, 46px);
}
.CapchaInput {
  width: clamp(60px, 9vw, 210px);
}
.CapchaDiv {
  background: #b5b5b5;
  width: 15vw;
  aspect-ratio: 19/6;
}
.RegButton {
  margin: 0.4vw 0 0 0;
  color: white;
  background: #141414 76%;
  border: none;
  border-radius: 1vw;
  width: 32vw;
  aspect-ratio: 18/5;
  font-family: "Cera Pro Bold";
  font-size: clamp(10px, 1.7vw, 40px);
  text-align: center;
  transition: 0.4s;
}
.regH3Accept {
  margin: 0;
  font-family: "Cera Pro Regular";
  font-size: 2vw;
}
.regAcceptFlex {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.regAccept {
  display: grid;
  flex-direction: column;
  grid-template-columns: 90%;
  align-items: start;
  justify-items: start;
  justify-content: center;
}
.regCheckbox {
  width: clamp(14px, 1.4vw, 30px);
  height: clamp(14px, 1.4vw, 30px);
  background: #eeeeee;
  box-shadow: inset 0px 0px 0.08vw 0.08vw rgb(0 0 0 / 25%);
  border: rgb(171, 168, 168);
  color: black;
}
.regItem {
  grid-template-columns: 58% 42%;
  display: grid;
  gap: 1vw;
}
.regH3 {
  margin: 0.2vw;
}
.regInput {
  padding: 0 0.6vw 0 0.6vw;
}
.spanGridItemCheckbox {
  display: grid;
  flex-direction: column;
  grid-template-columns: 60% 22%;
  align-items: end;
  justify-items: end;
}
.spanGridItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.regSpan {
  margin-left: 0.8vw;
}
.spanGrid {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  gap: 1vw;
}
.regSpanFrame {
  display: grid;
  grid-template-columns: 100%;
  gap: 4.9vw;
  width: 90%;
}
.AuthGridInputs {
  width: 95%;
  height: 97%;
  justify-content: center;
}
.titleRegUI {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleRegUIbtn {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  gap: 0.5vw;
  align-items: center;
  font-family: "Cera Pro Light";
  font-size: 3.5vw;
}
.titleRegUIbtn:hover {
  cursor: pointer;
}
.titleReg {
  display: grid;
  grid-template-columns: 10% 70% 10%;
  width: 100%;
  height: 14%;

  justify-content: space-between;
}
.regSvg {
  width: 5.4vw;
  aspect-ratio: 1/1;
}
.backSvg {
  width: 4.8vw;
  aspect-ratio: 1/1;
}
.inpStyle{
      width: clamp(145px, 29vw, 500px);
    height: clamp(31px, 5.8vw, 200px);
    font-size: 2.5vw;
}
}
@media (max-width: 1024px) and (min-width: 720px){
.checkboxGrid {
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  width: 100%;
  gap: 1vw;
}
.CapchaSVG {
  width: clamp(20px, 2vw, 46px);
  height: clamp(20px, 2vw, 46px);
}
.CapchaInput {
  width: clamp(60px, 9vw, 210px);
}
.CapchaDiv {
  background: #b5b5b5;
  width: 10vw;
  aspect-ratio: 19/6;
}
.RegButton {
  margin: 0.4vw 0 0 0;
  color: white;
  background: #141414 76%;
  border: none;
  border-radius: 1vw;
  width: 22vw;
  aspect-ratio: 18/5;
  font-family: "Cera Pro Bold";
  font-size: clamp(10px, 1.7vw, 40px);
  text-align: center;
  transition: 0.4s;
}
.regH3Accept {
  margin: 0;
  font-family: "Cera Pro Regular";
  font-size: 1.5vw;
}
.regAcceptFlex {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.regAccept {
  display: grid;
  flex-direction: column;
  grid-template-columns: 90%;
  align-items: start;
  justify-items: start;
  justify-content: center;
}
.regCheckbox {
  width: clamp(14px, 1.4vw, 30px);
  height: clamp(14px, 1.4vw, 30px);
  background: #eeeeee;
  box-shadow: inset 0px 0px 0.08vw 0.08vw rgb(0 0 0 / 25%);
  border: rgb(171, 168, 168);
  color: black;
}
.regItem {
  grid-template-columns: 58% 42%;
  display: grid;
  gap: 1vw;
}
.regH3 {
  margin: 0.2vw;
}
.regInput {
  padding: 0 0.6vw 0 0.6vw;
}
.spanGridItemCheckbox {
  display: grid;
  flex-direction: column;
  grid-template-columns: 60% 22%;
  align-items: end;
  justify-items: end;
}
.spanGridItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.regSpan {
  margin-left: 0.8vw;
}
.spanGrid {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  gap: 1vw;
}
.regSpanFrame {
  display: grid;
  grid-template-columns: 100%;
  gap: 1.9vw;
}
.AuthGridInputs {
  width: 87%;
  height: 91%;
}
.titleRegUI {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleRegUIbtn {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  gap: 0.5vw;
  align-items: center;
  font-family: "Cera Pro Light";
  font-size: 2.5vw;
}
.titleRegUIbtn:hover {
  cursor: pointer;
}
.titleReg {
  display: grid;
  grid-template-columns: 10% 70% 10%;
  width: 100%;
  height: 14%;

  justify-content: space-between;
}
.regSvg {
  width: 5.4vw;
  aspect-ratio: 1/1;
}
.backSvg {
  width: 2.8vw;
  aspect-ratio: 1/1;
}
.inpStyle{
      width: clamp(160px, 29vw, 500px);
    height: clamp(31px, 5.8vw, 200px);
    font-size: 2.5vw;
}
}
@media (min-width: 1024px){
.checkboxGrid {
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  width: 100%;
  gap: 1vw;
}
.CapchaSVG {
  width: clamp(20px, 2vw, 46px);
  height: clamp(20px, 2vw, 46px);
}
.CapchaInput {
  width: clamp(60px, 9vw, 210px);
}
.CapchaDiv {
  background: #b5b5b5;
  width: 10vw;
  aspect-ratio: 19/6;
}
.RegButton {
  margin: 0.4vw 0 0 0;
  color: white;
  background: #141414 76%;
  border: none;
  border-radius: 1vw;
  width: 18vw;
  aspect-ratio: 18/5;
  font-family: "Cera Pro Bold";
  font-size: clamp(10px, 1.7vw, 40px);
  text-align: center;
  transition: 0.4s;
}
.regH3Accept {
  margin: 0;
  font-family: "Cera Pro Regular";
  font-size: 0.8vw;
}
.regAcceptFlex {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.regAccept {
  display: grid;
  flex-direction: column;
  grid-template-columns: 90%;
  align-items: start;
  justify-items: start;
  justify-content: center;
}
.regCheckbox {
  width: clamp(14px, 1.4vw, 30px);
  height: clamp(14px, 1.4vw, 30px);
  background: #eeeeee;
  box-shadow: inset 0px 0px 0.08vw 0.08vw rgb(0 0 0 / 25%);
  border: rgb(171, 168, 168);
  color: black;
}
.regItem {
  grid-template-columns: 58% 42%;
  display: grid;
  gap: 1vw;
}
.regH3 {
  margin: 0.2vw;
}
.regInput {
  padding: 0 0.6vw 0 0.6vw;
}
.spanGridItemCheckbox {
  display: grid;
  flex-direction: column;
  grid-template-columns: 60% 22%;
  align-items: end;
  justify-items: end;
}
.spanGridItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.regSpan {
  margin-left: 0.8vw;
}
.spanGrid {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  gap: 1vw;
}
.regSpanFrame {
  display: grid;
  grid-template-columns: 100%;
  gap: 0.7vw;
}
.AuthGridInputs {
  width: 87%;
  height: 91%;
}
.titleRegUI {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleRegUIbtn {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  gap: 0.5vw;
  align-items: center;
  font-family: "Cera Pro Light";
  font-size: 1.5vw;
}
.titleRegUIbtn:hover {
  cursor: pointer;
}
.titleReg {
  display: grid;
  grid-template-columns: 10% 70% 10%;
  width: 100%;
  height: 19%;

  justify-content: space-between;
}
.regSvg {
  width: 5.4vw;
  aspect-ratio: 1/1;
}
.backSvg {
  width: 1.8vw;
  aspect-ratio: 1/1;
}
}
</style>
