<template>
  <router-link :to="to" class="nav-item"><img :src="img" alt=""></router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: String,
    img: String
  }
}
</script>

<style scoped lang="less">
.nav-item{
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  &.router-link-exact-active{
    border-bottom: 2px solid #534993;
  }
}

</style>