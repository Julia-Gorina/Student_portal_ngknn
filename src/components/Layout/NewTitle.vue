<template>
  <h1>
    <slot>
      {{ title }}
    </slot>
  </h1>
</template>

<script>
export default {
  name: "NewTitle"
}
</script>

<style scoped lang="less">
h1{

  font-size: 23px;
  text-align: center;
  font-family: 'Comfortaa';
  line-height: 22px;
  margin-bottom: 5px;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &::after{
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #D13918;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
    margin-top: 5px;
  }
}
</style>