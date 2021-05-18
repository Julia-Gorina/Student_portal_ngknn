<template>
  <div class="date-and-week">
    <div class="date-and-week__date">
      {{ date.getDate() }} {{ month[date.getMonth()] }}
    </div>
    <div class="date-and-week__week">
      {{ week() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DateAndWeek",
  props: {
    day: Boolean
  },
  data() {
    return {
      date: new Date(),
      month: ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Сентября','Октября', 'Ноября','Декабря'],
      WeekText: ['Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
    }
  },
  watch: {
    day(){
      if (this.day) {
        this.date = new Date()
      } else {
        this.date = new Date();
        this.date.setDate(new Date().getDate()+1);
      }
    }
  },
  methods:{
    week(){
      let year = this.date.getFullYear();
      let begin = this.date.getMonth() > 8 ? new Date(`${year}-09-01T00:00`) : new Date(`${year}-01-01T00:00`)
      let dayWeek = begin.getDay();
      let week = Math.ceil((((this.date - begin) / 1000 / 60 / 60 / 24 + dayWeek-1  ) / 7));
      week = week%2 !== 0 ? 'Нижняя' : 'Верхняя'
      let str = `${this.WeekText[this.date.getDay()-1]}, ${week} неделя`;
      return str
    }
  },
  mounted() {
    if (this.day) {
      this.date = new Date()
    } else {
      this.date = new Date('2021-05-17')
    }
  }
}
</script>

<style scoped lang="less">
.date-and-week{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 18px;
  line-height: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Comfortaa';
  font-weight: bold;
  padding-left: 7px;

  &__week{
    font-size: 11px;
    font-family: 'Comfortaa';
    line-height: 12px;
    text-transform: uppercase;
    padding-right: 11px ;
    @media screen and (min-width: 750px){
      font-size: 17px;
    }
    @media screen and (min-width: 1000px){
        font-size: 24px;

    }

  }
}
@media screen and (max-width: 280px){
  .date-and-week{
    font-size: 11px;
  }
}
@media screen and (min-width: 750px){
  .date-and-week{
    font-size: 24px;

  }
}
@media screen and (min-width: 1000px){
  .date-and-week{
    font-size: 37px;
    margin-top: 10px;

  }
}
</style>