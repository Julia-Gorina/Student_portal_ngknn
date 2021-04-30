<template>
  <label :for="id">{{title}}</label>
<input :type="type" :id="id">
</template>

<script>
export default {
name: "PageInput",
  components: {},
  props:{
  title: String,
    id: String,
    type: String
  }
}
</script>

<style scoped lang="less">
label{
  font-size:13px;
  line-height: 14px;
  color: #000000;

  margin-top: 20px;

  display: flex;
  flex-direction: column;
}
input{
  margin-top: 10px;
  height: 35px;
  border: 1px solid #F2A35A;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  text-indent: 7px;
}
[type="date"]{
  font-family: 'Comfortaa';
  font-size: 13px;




}


</style>