<template>
  <div class="nav">
    <NavItem to="/" img="img/layout/nav/house.svg" title="Главная" class="menu"/>
    <NavItem to="/schedule" img="img/layout/nav/raspi.svg" title="Расписание" class="menu" />
    <NavItem to="/sections" img="img/layout/nav/section.svg" title="Кружки и секции" class="menu" />
    <NavItem to="/reference" img="img/layout/nav/sprav.svg" title="Заказ справки" class="menu"/>
  </div>
</template>

<script>
import NavItem from "./NavItem";
export default {
  name: "Nav.vue",
  components:{
    NavItem
  }
}
</script>

<style scoped lang="less">
.nav{
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding-top: 5px;
  padding-bottom: env(safe-area-inset-bottom, 10px);
  bottom: 0;
  left: 0;
  width: 100%;
}
.menu{
  font-size:9px;
  color: #000000;
  text-decoration: none;
}
</style>