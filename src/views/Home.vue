<template>
  <div class="home">
    <MainHeader>Доброе утро!</MainHeader>
    <NumberOfPairs :lessons="lessons" />

    <img src="img/layout/header/glav.jpg" alt="" class="home-img">
    <DateAndWeek />
    <template v-for="(lesson, index) in lessons" :key="lesson.id">
      <Lesson :lesson="lesson" :prevLesson="lessons[index-1]"/>
      <Pause v-if="index !== lessons.length - 1" :lesson="[lesson ,lessons[index+1]]"/>
    </template>
    <transition name="fade">
      <Loading v-show="loading"/>
    </transition>
  </div>
</template>

<script>
import MainHeader from '@/components/Layout/MainHeader.vue'
import DateAndWeek from '@/components/Layout/DateAndWeek.vue'
import NumberOfPairs from '@/components/Layout/NumberOfPairs.vue'
import Lesson from '@/components/Schedule/Lesson.vue'
import Pause from '@/components/Schedule/Pause.vue'
import Loading from '@/components/Layout/Loading.vue'

import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      lessons: [],
      loading: true,
      isTop: null
    }
  },
  components: {
    Lesson, Pause, Loading, MainHeader, NumberOfPairs, DateAndWeek
  },
  methods: {
    async getLesson(day = '') {
      let lessons = (await axios.get(this.$store.getters.getServer+'/api/lessons/' + day )).data;
      let newLesson = [];
      lessons = lessons.filter(el=> el.is_top === this.isTop || el.is_top === null);
      lessons.forEach(element => {
        let index = newLesson.findIndex(el=> el.time == element.start_time && (el.is_top === element.is_top || el.is_top === null)  )
        if(index === -1){
          newLesson.push({
            time: element.start_time,
            duration: element.duration,
            lessons: [
              {
                id: element.id,
                subject: element.subject,
                teacher: element.teacher,
                classroom: element.classroom,
                change: element.change
              }
            ]
          })
        } else {
          newLesson[index].lessons.push({
            id: element.id,
            subject: element.subject,
            teacher: element.teacher,
            classroom: element.classroom,
            change: element.change
          })
        }
      });
      this.lessons = newLesson;
        this.loading = false;
    },
    week(){
      this.date=new Date();
      let year = this.date.getFullYear();
      let begin = this.date.getMonth() > 8 ? new Date(`${year}-09-01T00:00`) : new Date(`${year}-01-01T00:00`)
      let dayWeek = begin.getDay();
      let week = Math.ceil((((this.date - begin) / 1000 / 60 / 60 / 24 + dayWeek-1  ) / 7));
      week = week%2 !== 0 ? 0 : 1;
      return Boolean(week)
    }
  },

  mounted() {
    this.getLesson();
    this.isTop = this.week()
  }
}
</script>

<style scoped>
.home {
  padding: 5px;
}

.home-img{
  max-width: 100%;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}
</style>