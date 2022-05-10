<template lang="pug">
div.flex-centre
    div.main-todos-div
        span {{nonJob}}
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
      return{
        dataid: "",
        nonJob: "",
        responsedata: ""
      }
  },
  methods: {
    async getOrderList() {
      try {
        const response = await fetch("auth/storage/getAllOrderInList", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
        });
        const jsonres = await response.json();
        if (jsonres.message != null) {
          this.nonJob = jsonres.message;
          this.dataid = null;
          this.responsedata = null;
        } else {
          this.responsedata = jsonres.arrayLi;
          this.nonJob = null;
        }
      } catch (error) {
        alert(error);
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
  },
  mounted(){
      this.getOrderList()
  }
};
</script>

<style lang="scss">
.main-todos-div {
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
.flex-centre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 4%;
}
</style>
