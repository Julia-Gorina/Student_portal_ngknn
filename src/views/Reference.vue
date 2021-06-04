<template>
  <div class = "Sprav grad">
    <div class="sp">
      <loading-popup v-if="loading"></loading-popup>
      <PopupError @close="error=false" v-if="error"></PopupError>
      <popup @close="popup=false" v-if="popup"></popup>
      <SpravTitle>Оформление справки учащегося</SpravTitle>
      <p class="sp__subtitle">Чтобы заказать справку учащиегося, заполните пожалуйста поля, которые представлены ниже</p>
      <PageInput  title="Введите группу:"  id="firstName" type="text" v-model.trim="reference.group"/>
      <span v-if="errorReference.group">Поле оформлено не верно</span>
      <PageInput title="Введите ФИО:" id="twoName" type="text" v-model.trim="reference.student"/>
      <span v-if="errorReference.student">Поле оформлено не верно</span>
      <PageInput title="Введите дату рождения:" id="threeName" type="date" v-model="reference.birthday" />
      <span v-if="errorReference.birthday">Поле оформлено не верно</span>
      <PageInput title="Введите количество справок:" id="fourName"  type="number"   v-model.number.trim="reference.quantity" />
      <span v-if="errorReference.quantity">Доступное количество справок от 1 до 6</span>
      <Select title="Выберите место требования:"
              id="fiveName"
              :options="options"
              v-model="reference.where"
              defaultText="Выберите место требования"
      />
      <span v-if="errorReference.where">Поле оформлено не верно</span>
      <PageInput title="Введите название района:" v-if="reference.where === 'Военкомат'" id="dopInfo" v-model.trim="reference.military_commissariat"></PageInput>
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
        student: false,
        birthday: false,
        quantity: false,
        where: false,
        military_commissariat: false,
      },
      reference: {
        group: '',
        student: '',
        birthday: '',
        quantity: 1,
        where: '',
        military_commissariat: ''
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
        student: false,
        birthday: false,
        quantity: false,
        where: false,
      }
      if (this.reference.group.length < 3) {
        this.errorReference.group = true;
        countErrors++;
      }
      if (this.reference.student.length<1 ) {
        this.errorReference.student = true;
        countErrors++;
      }
      if (this.reference.birthday.length < 1) {
        this.errorReference.birthday = true;
        countErrors++;
      }
      if (+this.reference.quantity < 1 || +this.reference.quantity > 6) {
        this.errorReference.quantity = true;
        countErrors++;
      }
      if (this.reference.where.length < 1) {
        this.errorReference.where = true;
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
          this.responce = (await axios.post(this.$store.getters.getServer + '/api/receipts/', this.reference));
          if (this.responce.status === 201){
            this.popup = true;
            this.loading = false;
            this.reference= {
              group: '',
                  student: '',
                  birthday: '',
                  quantity: 1,
                  where: ''
            }
          }

        }
        catch (e) {
          this.loading = false;
          this.error = true;
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