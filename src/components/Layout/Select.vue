<template>
  <label :for="id">{{title}}</label>
  <select name="" :id="id">
    <option  :value="option" v-for="option in options" :key="option">{{option}}</option>
  </select>
</template>

<script>
export default {
name: "Select",
  data(){
  return {

  }
  },
  props: {
    options: Array,
    title: String,
    id: String
  }
}

</script>

<style scoped lang="less">
select{
  border: 1px solid #F2A35A;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  width: 90%;
  margin-top: 10px;
  height: 27px;
  color: #000000;
}


label{
  font-size:13px;
  line-height: 14px;
  color: #000000;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

</style>