<template>
  <div class = "Sprav grad">
    <div class="sp">
      <SpravTitle>Оформление справки учащиегося</SpravTitle>
      <p class="sp__subtitle">Чтобы заказать справку учащиегося, заполните пожалуйста поля, которые представлены ниже</p>
    </div>
  </div>

</template>

<script>

import SpravTitle from "@/components/Layout/SpravTitle";
export default {
  name: "reference",
  components: {SpravTitle}
}
</script>

<style lang="less" scoped>

.Sprav{
  padding-top: 60px;
}
.sp{
  background: #FFFFFF;
  width: 100%;
  min-height: 603px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  text-align: center;
  &__subtitle{
    padding-top: 5px;
    font-size: 12px;
    line-height: 13px;
  }
}

</style>