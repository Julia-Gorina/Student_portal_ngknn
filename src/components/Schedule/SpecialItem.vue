<template>
  <router-link :to="'/department/'+special.id" class = "special">
    <div class = "special__image">
      <img :src="special.image" alt="">
    </div>
    <div class = "special__name">
      {{ special.name }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SpecialItem",
  props: {
    special: Object
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}

.special{
  width: 33%;
  display: flex;
  flex-direction: column;
}
.special__image{
  text-align: center;
  margin-top: 30px;
}
.special__name{
  text-align: center;
  font-size: 12px;
  line-height: 1.25em;

}
@media screen and (min-width: 750px) {
.special__name{
  font-size: 18px;
}
}
</style>