<template>
  <h1>
    <slot>
      {{ title }}
    </slot>
  </h1>
</template>

<script>
export default {
name: "TimeLesson",
  props: {
    title: String,

  }
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  text-align: left;
  font-family: 'Comfortaa';
  line-height: 22px;
  margin-bottom: 5px;
  color: #FFFFFF;
  padding: 37px 5px 10px 15px;
}
h1::after{
  content: "";
  height: 100%;
  width: 1px;
 color: #FFFFFF;
  position: absolute;
  display: block;
  top: 0;
  right: -15%;
  bottom: 0;
  margin: auto;
}
</style>