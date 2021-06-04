<template>
  <div class="home">
    <MainHeader :title="timeDay ? 'Добрый день' : 'Доброе утро' " ></MainHeader>
    <a href="https://forms.gle/zuMx5xg4ghAA1Dgz9" id="Opros">Опрос</a>
    <div class="navBar">
    <NumberOfPairs :lessons="lessons" :day="today" />
    <next-day  @click="toggleDay" :title="today ? 'Завтра': 'Сегодня'"></next-day>
    </div>
    <img src="img/layout/header/123.jpg" alt="" class="home-img">
    <DateAndWeek :day="today" />
    <div v-if="lessons.length !== 0">
        <LessonAndPause :teacher="teacher" v-for="(lesson, index) in lessons" :key="lesson.id" :today="today" :lesson="lesson" :lessons="lessons" :index="index" />
    </div>
    <div v-else class="dont-lesson">
      <h2>Сегодня нет уроков, или у Вас не работает интернет</h2>
    </div>
    <transition name="fade">
      <Loading v-show="loading"/>
    </transition>
  </div>
</template>

<script>
import MainHeader from '@/components/Layout/MainHeader.vue'
import DateAndWeek from '@/components/Layout/DateAndWeek.vue'
import NumberOfPairs from '@/components/Layout/NumberOfPairs.vue'
import Loading from '@/components/Layout/Loading.vue'
import LessonAndPause from '@/components/Layout/LessonAndPause.vue'

import axios from 'axios'
import NextDay from "@/components/Layout/NextDay";

export default {
  name: 'Home',
  data() {
    return {
      lessons: [],
      loading: true,
      isTop: null,
      today: true,
      date: null,
      now: null,
      group: null,
      teacher: null,
    }
  },
  props: {
    day: String
  },
  components: {
    NextDay, Loading, MainHeader, NumberOfPairs, DateAndWeek, LessonAndPause
  },
  methods: {
    toggleDay(){
       this.today = !this.today;
       if (this.today){
         this.date = new Date();
       } else {
         this.date.setDate(new Date().getDate()+1);
       }
       this.getLesson(this.date);
    },
    getDateString(date){
      let dateArray =  date.toLocaleDateString().split('.'); // 18.05.2021
      date = [].concat(dateArray[2], dateArray[1], dateArray[0]).join('-');
      return date;
    },
    async getLesson(date) {
      date = this.getDateString(date);
      let data
      if (this.teacher) {
        data = (await axios.get(this.$store.getters.getServer+ '/api/lessons_with_changes_t/' +this.teacher+ '/' + date + '/')).data;
      } else {
        data = (await axios.get(this.$store.getters.getServer+ '/api/lessons_with_changes/' +this.group+ '/' + date + '/')).data;
      }


      let lessons = data.lessons;
      let changes = data.changes;
      // let change = data.change;


      let newLesson = [];
      lessons = lessons.filter(el=> el.is_top === this.isTop || el.is_top === null);
      lessons.forEach(element => {
        let index = newLesson.findIndex(el=> el.time == element.start_time && (el.is_top === element.is_top || el.is_top === null)  )
        if(index === -1){
          newLesson.push({
            id: element.id,
            time: element.start_time,
            duration: element.duration,
            is_top: element.is_top,
            lessons: [
              {
                id: element.id,
                subject: element.subject,
                teacher: element.teacher,
                classroom: element.classroom,
                change: element.change,
                group: element.group,
              }
            ]
          })
        } else {
          newLesson[index].lessons.push({
            id: element.id,
            subject: element.subject,
            teacher: element.teacher,
            classroom: element.classroom,
            change: element.change,
            group: element.group,
          })
        }
      });

      changes.forEach(change => {
        if (change.lesson) {
          newLesson.forEach(element => {
            let index =  element.lessons.findIndex(lesson => lesson.id === change.lesson);
            if(index !== -1) {
              change.change = true;
              element.lessons[index] = change
            }
          })
        }
      //  ToDO: Дописать новые пары которых небыло
      })


      this.lessons = newLesson.sort((a,b) => {
        if(a.week_day > b.week_day) return 1;
        if(a.week_day < b.week_day) return -1;
        if(a.week_day == b.week_day) {
          if(a.time > b.time) return 1;
          if(a.time < b.time) return -1;
          if(a.time == b.time) return 0;
        }
      });
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
  computed: {
    timeDay(){
      if (this.date && this.date.toLocaleTimeString() > '12:00:00'){
        return true;
      }
      return false
    }
  },
  mounted() {
    this.group = localStorage.getItem('group_id');
    this.teacher = localStorage.getItem('teacher_id');
    if (!this.group && !this.teacher) {
      this.$router.push('/schedule')
    }
    this.date = new Date();
    this.getLesson(this.date);
    this.isTop = this.week()
  },
}
</script>

<style scoped>
.home {
  padding: 5px;
}

.home-img{
width: 100%;
  padding-top: 4px;
}

.dont-lesson{
  padding: 20px;
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}
@media screen and (min-width: 1000px){
  template{
    font-size: 24px;
  }
}
.navBar{
  display: flex;
  justify-content: space-between;
}
#Opros{
  position: absolute;
  top: 14px;
  right: 5px;
}
</style>