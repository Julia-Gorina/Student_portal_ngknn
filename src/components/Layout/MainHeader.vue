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
    &::after{
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #534993;
      margin-top: 5px;
    }
  }
</style>