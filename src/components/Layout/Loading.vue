<template>
  <div class="wrap">
    <h1>Нижегородский Губернский колледж</h1>
    <p>Все авторские права защищены</p>
    <img src="/img/layout/zastavka/1.svg" alt="" class="stars stars_1">
    <img src="/img/layout/zastavka/2.svg" alt="" class="stars stars_2">
    <img src="/img/layout/zastavka/3.svg" alt="" class="stars stars_3">
    <img src="/img/layout/zastavka/4.svg" alt="" class="stars stars_4">
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">

.wrap{
  background: linear-gradient(180deg, #F2A35A 0%, #D13918 51.56%, #480E06 100%);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  font-size: 1.25rem;
  line-height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  h1{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;
    text-align: center;
    font-weight: normal;
    font-style: normal;
    font-family: 'Comfortaa';
  }
  p{
    font-family: 'Comfortaa';
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);

  }
}

.stars{
  position: absolute;
  &_1{
    top: 5%;
    left: 10%;
  }
  &_2{
    bottom: 10%;
    right: 3%;
  }
  &_3{
    bottom: 20%;
    left: 5%;
  }
  &_4{
    top: 15%;
    right: 5%;
  }
}

</style>