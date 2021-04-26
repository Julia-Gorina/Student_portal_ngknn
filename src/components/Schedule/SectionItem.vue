<template>
  <div class = "section">
    <div class = "section__image">
      <img :src="section.image" alt="">
    </div>
    <div class = "section__name">
      {{ section.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionItem",
  props: {
    section: Object
  }
}
</script>

<style scoped>
.section{
  width: 50%;
  text-align: center;
}
.section__image{
  margin-top: 22px;
}
.section__name{
  margin-top: 7px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 22px;
  color: #FFFFFF;
}

</style>