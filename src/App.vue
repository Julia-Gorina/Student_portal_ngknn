<template>
  <div class="body">
    <router-view/>
  </div>
  <Nav/>
</template>

<script>

import Nav from '@/components/Layout/Nav/Nav.vue'
export default {
  name: "App",
  components: {
    Nav
  }
}
</script>

<style lang="less">
  .body{
    padding-bottom: 66px;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .gradient{
    background: linear-gradient(180deg, #F2A35A 0%, rgba(209, 57, 24, 0.505208) 49.48%, rgba(196, 196, 196, 0) 80%);
    padding-right: 10px;
    padding-left: 10px;
    min-height: 100vh;
    background-attachment: fixed;
    padding-bottom: 66px;
  }
  .grad{
    background: linear-gradient(180deg, #F2A35A 0%, #D13918 47.4%, #480E06 100%);
    background-attachment: fixed;
    padding-right: 10px;
    padding-left: 10px;
    min-height: 100vh;
    padding-bottom: 66px;
  }
</style>
