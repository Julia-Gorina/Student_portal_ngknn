<template>
  <router-link :to="to" class="nav-item"><img :src="img" alt=""> {{ title }} </router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: String,
    img: String,
    title: String
  }
}
</script>

<style scoped lang="less">
.nav-item{
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
  flex-direction: column;


  &.router-link-exact-active{
    border-bottom: 2px solid #D13918;
  }
}

</style>