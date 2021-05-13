<template>
  <div class="bg">
    <TimeLesson>13:20</TimeLesson>
    <div class="mainText">
      <h1>МДК.05 Конфигурирование в среде 1С</h1>
      <h2>Канакова Анна Евгеньевна 409 каб.</h2>
    </div>
  </div>
  <hr>
  <div class="bg">
    <TimeLesson>13:20</TimeLesson>
    <div class="mainText">
      <h1>МДК.05 Конфигурирование в среде 1С</h1>
      <h2>Канакова Анна Евгеньевна 409 каб.</h2>
    </div>
  </div>

</template>

<script>
import TimeLesson from "@/components/Layout/TimeLesson";
export default {
name: "BLockLesson",
  components: {TimeLesson}
}
</script>

<style scoped>
.bg{
  display: flex;

}

.mainText{
  padding-top: 16px;

}
h1{
  color: #FFFFFF;
  font-size: 16px;
}
h2{
  color: #FFFFFF;
  font-size: 14px;
  font-weight: normal;
  margin-top: 5px;
  margin-bottom: 7px;
}
hr{
  margin-left: 10px;
  margin-right: 10px;
}



</style>