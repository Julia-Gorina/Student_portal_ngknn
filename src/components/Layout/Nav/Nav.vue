<template>
  <div class="nav">
    <NavItem to="/" img="img/layout/nav/home.svg" />
    <NavItem to="/about" img="img/layout/nav/home.svg" />
    <NavItem to="/about" img="img/layout/nav/3.svg" />
    <NavItem to="/about" img="img/layout/nav/home.svg" />
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

<style scoped>
.nav{
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>