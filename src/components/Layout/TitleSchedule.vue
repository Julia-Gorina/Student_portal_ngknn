<template>
  <div class="headers">
  <h1>
    <slot>
      {{ title }}
    </slot>
  </h1>
  </div>
</template>

<script>
export default {
name: "TitleSchedule"
}
</script>

<style scoped>
h1 {
  font-size: 23px;
  font-family: 'Comfortaa';
  text-align: center;
  line-height: 22px;
  margin-bottom: 5px;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.headers{
width: 100%;
}
</style>