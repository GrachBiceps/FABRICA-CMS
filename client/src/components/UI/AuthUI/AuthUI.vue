<template lang="pug">
div.Auth
    div.AuthGrid
        div.AuthGridInputs
            img(src="@/assets/svg/home-repair-service-round-24px.svg").imgStyle
            span.spnStyleH1 АВТОРИЗАЦИЯ
            div.spanFrame
                span.spnStyleH2 Логин:
                input.inpStyle(v-model="auth.login" :class="{inpStyleERR: validation.dataErr}")
            div.spanFrame
                span.spnStyleH2 Пароль:
                input(type="password" v-model="auth.password" :class="{inpStyleERR: validation.dataErr}").inpStyle.inpPswdStyle
            span.spanERR(v-show="validation.dataErr == true") Неправильный пароль или логин
            div.spanFrameH3
                span.spnStyleH3 Запомнить меня
                label(class="switch")
                  input(type="checkbox" v-model="auth.saveMeBox")
                  span(class="slider round")
            button.AuthButton(@click="authUp") ВОЙТИ
            div.spanFrameH3
                button.spnStyleH3.helpButtons() Забыл пароль?
                button.spnStyleH3.helpButtons(style="font-weight: bold;" @click="regComp()") Регистрация
        div.GridGradient
            img(src="@/assets/svg/local-fire-department-round-24px.svg").imgStyleGradient
            span.spnStyleH1 Добро пожаловать
            span.spnStyleH3 Lorem ipsum lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
</template>

<script>
import SwitchCSS from "@/components/UI/AuthUI/SwitchRound.scss";
import MediaW1024Plus from "@/components/UI/AuthUI/MediaW1024Plus.scss";
import MediaW1024_720 from "@/components/UI/AuthUI/MediaW1024_720.scss";
import MediaW720Minus from "@/components/UI/AuthUI/MediaW720Minus.scss";
import { mapState } from "vuex";
export default {
  data() {
    return {
      validation: {
        dataErr: false,
      },
      auth: {
        login: "",
        password: "",
        saveMeBox: false,
      },
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      authed: (state) => state.auth.authed,
    }),
  },
  methods: {
    regComp() {
      this.$emit("regComp", true);
    },
    async authUp() {
      const response = await fetch("auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.auth.login,
          password: this.auth.password,
        }),
      });
      if (response.status == 400) {
        this.validation.dataErr = true;
      } else {
        const resJson = await response.json();
        const token = resJson.token;
        this.$store.commit("auth/newToken", token);
        this.$store.commit("auth/authExit", true);
        this.$store.commit("auth/editProfile", resJson.profile);
        this.$store.commit("auth/editRoles", resJson.userRoleOut);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.helpButtons {
  margin-top: 1vw;
  margin-left: 0vw;
  margin-right: 0vw;
}
.AuthButton {
  cursor: pointer;
}
.inpStyleERR {
  border: 3vw;
  border: red;
  background: rgba(232, 115, 115, 0.28);
  box-shadow: 0px 0px 0.08vw 0.08vw #f46a6a;
}
.spanERR {
  color: red;
  font-size: clamp(15px, 1vw, 20px);
}
.AuthButton:focus {
  transform: scale(0.9, 0.9);
  -o-transform: scale(0.9, 0.9);
  -webkit-transform: scale(0.9, 0.9);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
</style>
