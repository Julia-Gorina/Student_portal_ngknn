<template>
  <button @click.prevent="back"><img src="/img/Otdel/arrow.png" class="first"></button>
</template>

<script>

export default {
  name: "Arrow",
  methods: {
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.first{
height: 25px;
}
button{
  background: transparent;
  outline: none;
  border: 0;
}
</style>