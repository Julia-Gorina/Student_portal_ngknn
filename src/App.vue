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
  },
  methods:{

  },
  mounted() {
    let group = localStorage.getItem('group_id');
    let teacher = localStorage.getItem('teacher_id');
    if (!group && !teacher){
      this.$router.push('/schedule')
    }
  }
}
</script>

<style lang="less">

.add-button {
  position: absolute;
  top: 1px;
  left: 1px;
}

body{
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}
  .body{
    padding:
        env(safe-area-inset-top, 20px)
        env(safe-area-inset-right, 20px)
        env(safe-area-inset-bottom, 66px)
        env(safe-area-inset-left, 20px);
    &::after{
      display: block;
      content: "";
      height: 66px;
    }
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
