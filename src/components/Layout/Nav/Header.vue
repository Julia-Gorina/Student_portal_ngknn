<template>
<h1>
  <slot>
    {{ title }}
  </slot>
</h1>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,

  }
}
</script>

<style lang ='less' scoped>
h1{

}

</style>