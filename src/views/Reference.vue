<template>
  <div class = "Sprav grad">
    <popup v-if="popup"></popup>
    <div class="sp">
      <SpravTitle>Оформление справки учащиегося</SpravTitle>
      <p class="sp__subtitle">Чтобы заказать справку учащиегося, заполните пожалуйста поля, которые представлены ниже</p>
      <PageInput  title="Введите группу:"  id="firstName" type="text" v-model="reference.group"/>
      <span v-if="errorReference.group">Поле с ошибкой</span>
      <PageInput title="Введите ФИО:" id="twoName" type="text" v-model="reference.fullName"/>
      <PageInput title="Введите дату рождения:" id="threeName" type="date" v-model="reference.birthday" />
      <PageInput title="Введите количество справок:" id="fourName" type="number" v-model="reference.count" />
      <Select title="Выберите место требования:"
              id="fiveName"
              :options="options"
              v-model="reference.place"
              defaultText="Выберите место требования"
      />
      <div class="text-center" >
        <Button title="Оформить заявку" id="sprav" @click="postReference"/>
      </div>
      <div v-if="loading">Загрузка</div>
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


export default {
  name: "reference",
  components: {Popup, Button, Select, PageInput, SpravTitle},
  data(){
    return{
      options: [
          "Пенсионный фонд", "Военкомат","По месту требования"
      ],
      date: '',
      popup: false,
      error: null,
      errorReference: {
        group: false,
        fullName: false,
        birthday: false,
        count: false,
        place: false,
      },
      reference: {
        group: '',
        fullName: '',
        birthday: '',
        count: 1,
        place: ''
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
            this.loading = false
          }
        }
        catch (e) {
          this.popup = true;
          this.loading = false
          if (e.message == "Network Error") {
            this.error = "В данный момент у Вас нет Интернета";
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
    line-height: 14px;
    text-align: center;
    padding-right: 10px;
  }
}


</style>