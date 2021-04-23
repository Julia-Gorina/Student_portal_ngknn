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
    padding-bottom: 52px;
  }
</style>
