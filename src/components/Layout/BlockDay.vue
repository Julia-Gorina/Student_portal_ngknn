<template>
<div class="day">
  <div class="head">
    <h1>
      {{title}}
    </h1>
  </div>

</div>
</template>

<script>
export default {
name: "BlockDay",
  props: {
  title: String
  }
}
</script>

<style scoped>
h1{
  font-family: Comfortaa;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  padding: 8px 18px 8px 18px;
  color: #FFFFFF;
}
.head{
  background: #000000;
  border-radius: 19px;
  width: 800px;

}
.day{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
}
.day::after, .day::before{
  content: "";
  width: 100%;
  height: 1px;
  background-color: #000000;
  display: block;
  position: relative;
  margin-right: 5px;
  margin-left: 5px;
}
</style>