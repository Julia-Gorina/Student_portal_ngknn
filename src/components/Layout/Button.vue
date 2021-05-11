<template>
<button class="vvod" :id="id">{{title}}</button>
</template>

<script>
export default {
name: "Button",
  props: {
  title: String,
    id: String
  }
}
</script>

<style scoped>
button{
  background: #F2A35A;
  border-radius: 10px;
  border: none;
  padding: .7em 1.5em;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: 15px;
  font-size: 12px;
  font-family: 'Comfortaa';
  text-transform: uppercase;
  color: #FFFFFF;
}
.vvod {

}
</style>