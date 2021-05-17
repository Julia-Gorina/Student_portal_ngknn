<template>
  <div class="number_of_pairs">
    Сегодня {{ count() }} пары
  </div>
</template>

<script>
export default {
  name: "NumberOfPairs",
  props:{
    lessons: Array
  },
  methods: {
    count(){
        return this.lessons.length
    }
  }
}
</script>

<style scoped>
  .number_of_pairs{
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 5px;
    font-family: 'Comfortaa';
    font-weight: normal;
    padding-top: 0;



  }
  @media screen and (min-width: 750px){
    .number_of_pairs{
      font-size: 20px;

    }
  }
  @media screen and (min-width: 1000px){
    .number_of_pairs{
      font-size: 26px;
      padding-top: 9px;

    }
  }
</style>