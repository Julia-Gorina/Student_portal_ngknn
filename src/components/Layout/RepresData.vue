<template>
  <div id="btnContainer">
    <button v-on:click="ListView()"><img src="/img/Otdel/lin.png" alt="" class="firstImage"></button>
    <button><img src="/img/Otdel/square.png" alt="" class="firstImage"></button>
  </div>
</template>

<script>

export default {
  name: "RepresData",

  methods: {
    async ListView() {

    }
  }
}
</script>

<style scoped>
.pokaz{
  margin-top: 18px;
  background: #000;
}
button{
  background: transparent;
  border: 0;
  outline: none;
}
</style>