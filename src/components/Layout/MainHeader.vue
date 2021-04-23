<template>
  <h1>
    <slot>
      {{ title }}
    </slot>
  </h1>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    title: String,

  }
}
</script>

<style scoped lang="less">
  h1{
    font-weight: bold;
    font-size: 20px;
    text-align: left;
    font-family: 'Comfortaa';
    line-height: 22px;
    margin-bottom: 5px;
    &::after{
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #D13918;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-top: 5px;
    }
  }
</style>