<template>
  <div class = "special">
    <div class = "special__image">
      <img :src="special.image" alt="">
    </div>
    <div class = "special__name">
      {{ special.name }}
    </div>
  </div>
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
  line-height: 13px;

}

</style>