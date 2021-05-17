<template>
  <div class = "Sprav grad">
    <div class="sp">
      <loading-popup v-if="loading"></loading-popup>
      <PopupError @close="error=false" v-if="error"></PopupError>
      <popup @close="popup=false" v-if="popup"></popup>
      <SpravTitle>Оформление справки учащиегося</SpravTitle>
      <p class="sp__subtitle">Чтобы заказать справку учащиегося, заполните пожалуйста поля, которые представлены ниже</p>
      <PageInput  title="Введите группу:"  id="firstName" type="text" v-model.trim="reference.group"/>
      <span v-if="errorReference.group">Поле оформлено не верно</span>
      <PageInput title="Введите ФИО:" id="twoName" type="text" v-model.trim="reference.fullName"/>
      <span v-if="errorReference.fullName">Поле оформлено не верно</span>
      <PageInput title="Введите дату рождения:" id="threeName" type="date" v-model="reference.birthday" />
      <span v-if="errorReference.birthday">Поле оформлено не верно</span>
      <PageInput title="Введите количество справок:" id="fourName"  type="number" v-model.number.trim="reference.count" />
      <span v-if="errorReference.count">Поле оформлено не верно</span>
      <Select title="Выберите место требования:"
              id="fiveName"
              :options="options"
              v-model="reference.place"
              defaultText="Выберите место требования"
      />
      <span v-if="errorReference.place">Поле оформлено не верно</span>
      <PageInput title="Введите название района:" v-if="reference.place === 'Военкомат'" id="dopInfo" v-model.trim="reference.dopInfo"></PageInput>
      <div class="text-center" >
        <Button title="Оформить заявку" id="sprav" @click="postReference"/>
      </div>


    </div>
  </div>

</template>

<script>


import SpravTitle from "@/components/Layout/SpravTitle";
import PageInput from "@/components/Layout/PageInput";
import Select from "@/components/Layout/Select";
import Button from "@/components/Layout/Button";
import axios from "axios";
import Popup from "@/components/Layout/Popup";
import PopupError from "../components/Layout/PopupError";
import LoadingPopup from "../components/Layout/loadingPopup";


export default {
  name: "reference",
  components: {LoadingPopup, PopupError, Popup, Button, Select, PageInput, SpravTitle},
  data(){
    return{
      options: [
          "Пенсионный фонд", "Военкомат","По месту требования"
      ],
      date: '',
      popup: false,
      error: false,
      errorReference: {
        group: false,
        fullName: false,
        birthday: false,
        count: false,
        place: false,
        dopInfo: false,
      },
      reference: {
        group: '',
        fullName: '',
        birthday: '',
        count: 1,
        place: '',
        dopInfo: ''
      },
      responce: null,
      loading: false

    }
  },
  methods: {
    validate(){
      let countErrors = 0;
      this.errorReference =  {
        group: false,
        fullName: false,
        birthday: false,
        count: false,
        place: false,
      }
      if (this.reference.group.length < 3) {
        this.errorReference.group = true;
        countErrors++;
      }
      if (this.reference.fullName.length<1 ) {
        this.errorReference.fullName = true;
        countErrors++;
      }
      if (this.reference.birthday.length < 1) {
        this.errorReference.birthday = true;
        countErrors++;
      }
      if (+this.reference.count < 1) {
        this.errorReference.count = true;
        countErrors++;
      }
      if (this.reference.place.length < 1) {
        this.errorReference.place = true;
        countErrors++;
      }



      if (countErrors > 0 ){
        return true
      } else  {
        return false
      }


    },
    async postReference() {
      {
        if (this.validate()){
          return false
        }

        this.loading = true;
        try {
          this.responce = (await axios.post(this.$store.getters.getServer + '/Reference', this.reference));
          if (this.responce.status === 201){
            this.popup = true;
            this.loading = false;
            this.reference= {
              group: '',
                  fullName: '',
                  birthday: '',
                  count: 1,
                  place: ''
            }
          }
        }
        catch (e) {

          this.loading = false
          if (e.message == "Network Error") {
            this.error = true;
          }
        }

      }
    }
  }
}
</script>

<style lang="less" scoped>

.Sprav{
  padding-top: 60px;

}

.text-center{
  text-align: center;
}

.sp{
  background: #FFFFFF;
  width: 100%;
  min-height: 500px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;

  &__subtitle{
    padding-top: 5px;
    font-size: 13px;
    line-height: 1.25em;
    text-align: center;
    padding-right: 10px;
    @media screen and (min-width: 750px){
      font-size: 17px;
    }
  }
}
span{
  font-size: 12px;
  color: #D13918;
}


</style>