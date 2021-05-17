<template>
  <label :for="id">{{ title }}</label>
  <select name="" :id="id" @change="$emit('update:modelValue', $event.target.value)">
    <option value="" v-show="false">{{ defaultText }}</option>
    <option :value="option" v-for="option in options" :key="option">{{ option }}</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {}
  },
  props: {
    defaultText: String,
    options: Array,
    title: String,
    id: String,
    modelValue: String
  }
}

</script>

<style scoped lang="less">
select {
  border: 1px solid #F2A35A;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  margin-top: 10px;
  height: 27px;
  color: #000000;
  @media screen and (min-width: 700px){
      font-size:18px;
    height: 35px;
    }
}


label {
  font-size: 13px;
  line-height: 14px;
  color: #000000;
  text-align: left;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 700px){
    font-size:18px;
  }
}

</style>