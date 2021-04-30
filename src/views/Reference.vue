<template>
  <div class = "Sprav grad">
    <div class="sp">
      <SpravTitle>Оформление справки учащиегося</SpravTitle>
      <p class="sp__subtitle">Чтобы заказать справку учащиегося, заполните пожалуйста поля, которые представлены ниже</p>
      <PageInput title="Введите группу:" id="firstName" type="text"/>
      <PageInput title="Введите ФИО:" id="twoName" type="text"/>
      <PageInput title="Введите дату рождения:" id="threeName" type="date"  />
      <PageInput title="Введите количество справок:" id="fourName" type="number"  />
      <Select title="Выберите место требования:" id="fiveName" :options="options"/>
      <Button title="Оформить заявку" id="sprav"/>

    </div>
  </div>

</template>

<script>

import SpravTitle from "@/components/Layout/SpravTitle";
import PageInput from "@/components/Layout/PageInput";
import Select from "@/components/Layout/Select";
import Button from "@/components/Layout/Button";


export default {
  name: "reference",
  components: { Button, Select, PageInput, SpravTitle},
  data(){
    return{
      options: [
          "Пенсионный фонд", "Военкомат","По месту требования"
      ],
      date: ''

    }
  }
}
</script>

<style lang="less" scoped>

.Sprav{
  padding-top: 60px;

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