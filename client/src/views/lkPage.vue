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
                img.setting-img(src="@/assets/svg/Setting.svg" @click="clickSection(0,editProfile())")
        div.scnd-div(v-show="activeBtn == 0")
            div.logo-div
                div.img-frame
                    img.img(v-show="editMode == false" loading="lazy" v-if="token != '' " :src="`http://localhost:49001/uploads/${profile.profileAvatar.filename}`")
                    input.editInputFile(v-show="editMode == true" type="file" ref="file" accept="image/*")
            div.info-div
                span.fio {{profile.surname}} {{profile.name}}
                div.roles-div
                    div(v-for="(item, index) in roles")
                        div.role-div {{item}}
            div.personal-data
                div.flex-column.firs-data.flex-end
                    span Дата рождения:
                    span Пол:
                    span Телефон:
                div.flex-column.scnd-data
                    span.flex-row(v-show="editMode == false") {{dateTime()}}
                    input.editInput(v-show="editMode == true" v-model="editData.birthday" v-maska="{mask: '#### ## ##'}")
                    span.flex-row(v-show="editMode == false") {{profile.gender}}
                    div.flex-row(v-if="editMode == true")
                        span Мужчина
                        input.editInputBox( type="checkbox" id="0" @click="genderSet('Мужчина')")
                        span Женщина
                        input.editInputBox( type="checkbox" id="1" @click="genderSet('Женщина')")
                    div.flex-row
                        span(v-show="editMode == false") +{{profile.mobileNumber}}
                        input.editInput(v-show="editMode == true" placeholder="+7 XXX XXX XXXX" v-maska="{mask: '+7##########'}" maxlength="15" v-model="editData.mobileNumber")
                        div.flex-row.indiv-yellow(v-if="editMode == false")
                            div.vert-line-yellow(v-show="profile.mobileNumber == ''")
                                div
                            span(v-show="profile.mobileNumber == ''") Рекомендуем привязать номер телефона
            button(v-show="editMode == true" @click="saveEditData()").saveBtn Сохранить
        div.scnd-div(v-show="activeBtn == 1")
            div.info-div
                span.fio {{profile.surname}} {{profile.name}}
                div.roles-div
                    div(v-for="(item, index) in roles")
                        div.role-div {{item}}
            div.personal-data
                div.flex-column.firs-data.flex-end
                    span Email:
                div.flex-column.scnd-data
                    div.flex-row
                        span {{profile.email}}
                        div.flex-row.indiv-width
                            div.vert-line-red
                                div
                            span Подтвердите почту
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import { ref} from "vue"

export default {
    setup(){
        {
        const file = ref(null)

        const handleFileUpload = async() => {
           // debugger;
            console.log("selected file",file.value.files)
        }

        return {
          handleFileUpload,
          file
       }
        }
    },
  data() {
    return {
      activeBtn: 0,
      emailAprove: true,
      mobileReco: true,
      editMode: true,
      editData: {
        name: "",
        surname: "",
        gender: "",
        birthday: "",
        mobileNumber: "",
      },
      avatar: null,
    };
  },
  methods: {
    async saveEditData() {
      this.$store.commit("navbar/goLoading", true);
      const formData = new FormData()
      console.log('boundary:', formData._boundary)
      formData.append('name', this.editData.name)
      formData.append('surname',this.editData.surname)
      formData.append('gender',this.editData.gender)
      formData.append('birthday',this.editData.birthday)
      formData.append('mobileNumber',this.editData.mobileNumber)
      formData.append('avatar', this.$refs.file.files[0])
      const response = await fetch("auth/edituserdata", {
        method: "POST",
        headers: { 
            //'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${this.token}`
            
        },
        body: formData,
      })
      this.$store.commit("navbar/goLoading", true);
    },
    genderSet(genderValue) {
      this.editData.gender = genderValue;
    },
    clickSection(index) {
      this.activeBtn = index;
    },
    editProfile() {
        this.editMode = !this.editMode
    },
    dateTime() {
      return moment(this.profile.birthday).format("DD.MM.YYYY");
    },
    defaultDate(){
        this.editData.name = this.profile.name
        this.editData.surname =  this.profile.surname
        this.editData.gender =  this.profile.gender
        this.editData.birthday =  this.profile.birthday
        this.editData.mobileNumber = this.profile.mobileNumber
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      profile: (state) => state.auth.profile,
      roles: (state) => state.auth.rolesArray,
    }),
  },
  mounted(){
      this.defaultDate()
  }
};
</script>

<style lang="postcss" scoped>
.editInputFile{
    width: 10vw;
}
.saveBtn {
  height: 2vw;
  width: 23%;
  background: #57e754;
  color: white;
  border-radius: 0.5vw;
  -webkit-box-shadow: 0px 0px 0.4vw 0.1vw rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 0.4vw 0.1vw rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 0.4vw 0.1vw rgba(0, 0, 0, 0.2);
  font-family: "Cera Pro Medium";
  font-size: 1vw;
}
.saveBtn:focus {
  transform: scale(98%);
}
.editInputBox {
  width: 10%;
  height: 1.34vw;
  border-radius: 0.3vw;
  font-family: "Cera Pro";
  font-size: 1vw;
}
.editInput {
  width: 60%;
  height: 1.34vw;
  border-radius: 0.3vw;
  font-family: "Cera Pro";
  font-size: 1vw;
  border: none;
}
.vert-line-red {
  height: 90%;
  width: 2%;
  background: red;
}
.vert-line-yellow {
  height: 90%;
  width: 1%;
  background: rgb(223, 223, 72);
}
.indiv-yellow {
  width: 67%;
  color: rgb(203, 203, 61);
  font-family: "Cera Pro";
  font-size: 0.8vw;
}
.fio {
  font-family: "Cera Pro Black";
  font-size: 1.8vw;
}
.indiv-width {
  width: 35%;
  color: red;
  font-family: "Cera Pro";
  font-size: 0.8vw;
}
.flex-end {
  align-items: flex-end;
}
.flex-row {
  display: flex;
  gap: 1vw;
  align-items: stretch;
  user-select: text;
}
.firs-data {
  width: 20%;
}
.scnd-data {
  width: 80%;
}
.roles-div {
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  gap: 0.4vw;
  justify-content: center;
}
.role-div {
  font-family: "Cera Pro Black";
  font-size: 0.8vw;
  color: white;
  padding: 0.5vw;
  padding-top: 0.3vw;
  padding-bottom: 0.3vw;
  background: black;
}
.scnd-div {
  display: flex;
  flex-direction: column;
  width: 94%;
  height: 88%;
  margin: 3%;
  align-items: center;
  gap: 0.4vw;
}
.logo-div {
  display: flex;
  width: 100%;
  height: 55%;
  align-items: center;
  justify-content: center;
}
.btn {
  cursor: pointer;
}
.personal-data {
  display: flex;
  width: 100%;
  font-family: "Cera Pro";
  font-size: 1.1vw;
  height: 27%;
  gap: 0.8vw;
  align-items: center;
}
.setting-img {
  width: 1.5vw;
}
.img-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100vw;
  outline-style: solid;
  outline-width: 0.2vw;
  overflow: hidden;
  z-index: 1;
  width: 19vw;
  aspect-ratio: 1/1;
  background: gray;
}
.img {
  width: 101%;
  z-index: 0;
  position: relative;
  object-fit: cover;
  background: gray;
}
.info-div {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.4vw;
}
.main-lk-div {
  margin-top: 2%;
  width: 55%;
  height: 50vw;
  border-radius: 2vw;
  background: white;
}
.flex-centre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 4%;
}
.first-div {
  display: flex;
  width: 94%;
  height: 4%;
  margin: 3%;
  align-items: center;
}
.first-div-items1 {
  display: flex;
  width: 95%;
  gap: 1vw;
  font-family: "Cera Pro Medium";
  font-size: 1.1vw;
  align-items: center;
}
.first-div-items2 {
  display: flex;
  width: 5%;
  justify-content: flex-end;
}
.line {
  width: 100%;
  height: 0.15vw;
  border-radius: 2vw;
  background: black;
}
.flex-column {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 0.1vw;
  user-select: none;
  justify-content: space-evenly;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
