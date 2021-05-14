<template>
<div class="spisok">
 <button :idDay="idDay"  @click="selectDay(idDay)" class="btn " :class="{active:active}">{{title}}</button>
</div>
</template>

<script>
export default {
name: "NavButton",
  props:{
    title: String,
    idDay: Number,
    modelValue: String,
    active: Boolean
  },
  methods:{
  selectDay(id){
    this.$emit("selectDay",id)
  }
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
@media screen and  (max-width: 320px){
.btn{
  font-size: 14px;
}
}
.active{
  background-color: white;
  color: #D13918;
}

</style>