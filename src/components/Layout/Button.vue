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
  margin-top: 15px;
  font-size: 12px;
  font-family: 'Comfortaa';
  text-transform: uppercase;
  color: #FFFFFF;

}
@media screen and (min-width: 750px){
button{
  font-size: 15px;
}
}
</style>