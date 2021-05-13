<template>
<div class="spisok">
 <button :id="id" class="btn">{{title}}</button>
</div>
</template>

<script>
export default {
name: "NavButton",
  props:{
    title: String,
    id: String,
    modelValue: String
  }
}
</script>

<style scoped>
.spisok{
  margin-top: 20px;

}
.btn{

  background: transparent;
  outline: none;
  border: 1.5px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 3px;
  font-style: normal;
  font-family: Comfortaa;
  font-weight: bold;
  font-size: 17px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  padding: 4px 4px 2px 4px;
  margin: 0px 2px 0px 2px;
}


</style>