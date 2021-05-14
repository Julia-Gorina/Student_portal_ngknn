<template>
  <h1>
    <slot>
      {{ title }}
    </slot>
  </h1>
</template>

<script>
export default {
name: "SpravTitle"
}
</script>

<style scoped lang="less">
h1{

  font-size: 20px;
  font-weight: bold;
  text-align: center;
  font-family: 'Comfortaa';
  line-height: 22px;
  margin-bottom: 5px;
  padding-top: 30px;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &::after{
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    text-align: center;
    background-color: #D13918;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
    margin-top: 5px;




  }
}
</style>