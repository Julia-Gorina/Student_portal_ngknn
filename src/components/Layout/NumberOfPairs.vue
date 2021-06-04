<template>
  <div class="number_of_pairs">
    {{ day ? 'Сегодня' : 'Завтра'}} {{ count ? count : 'нет' }} {{ pairText }}
  </div>
</template>

<script>
export default {
  name: "NumberOfPairs",
  props:{
    lessons: Array,
    day: Boolean
  },
  methods: {

  },
  computed: {
    count(){
      return this.lessons.length
    },
    pairText(){
      switch (this.count){
        case 1 :
          return 'пара'
        case 2,3,4:
          return 'пары'
        default:
          return 'пар'
      }



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
    padding-top: .2em;



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