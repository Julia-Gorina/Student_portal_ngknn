<template>
  <div class="schedule grad">
    <div class="header">
      <Arrow></Arrow>
      <title-schedule class="title" v-if="$route.fullPath.includes('fullschedule_teacher')">Расписание занятий <br>{{ teacher }}</title-schedule>
      <title-schedule class="title" v-else>Расписание занятий группы {{ group }}</title-schedule>
    </div>
    <div class="v-btn">
      <nav-button v-for="day in days"
                  :key="day.title"
                  :active="currentDay.id === day.id"
                  @selectDay="selectDay"
                  :title="day.subTitle"
                  :idDay="day.id"></nav-button>
    </div>
<div class="status_week">
  <nav-button @selectDay="isTop=true" :active="isTop" title="Верхняя"></nav-button>
  <nav-button @selectDay="isTop=false" :active="!isTop" title="Нижняя"></nav-button>
</div>
    <div class="schedule" v-if="currentDay.id === 0">
      <div class="day" v-for="day in days" :key="'sched' + day.id">
        <DayLesson v-if="day.id !== 0"  :day="day" :lessons="lessons.filter(el => el.week_day === day.id && (el.is_top === isTop || el.is_top === null))"/>
      </div>

    </div>
    <div class="schedule" v-else>
      <DayLesson :day="currentDay" :lessons="currentLessons"/>
    </div>
  </div>
</template>

<script>
import Arrow from "@/components/Layout/Arrow";
import TitleSchedule from "@/components/Layout/TitleSchedule";
import NavButton from "@/components/Layout/NavButton";
import DayLesson from '@/components/Schedule/DayLesson';
import axios from "axios";

export default {
  name: "FullSchedule",
  components: {NavButton, TitleSchedule, Arrow, DayLesson},
  props: {
    id: String
  },
  methods: {
    selectDay(id) {
      this.currentDay = this.days.find(el => el.id === id);
    },
    async getScheule() {
      let lessons
      if( this.$route.fullPath.includes('fullschedule_teacher')){
         lessons = (await axios.get(this.$store.getters.getServer + '/api/lessons_t/' + this.id + '/')).data;
        this.teacher = (await axios.get(this.$store.getters.getServer + '/api/teachers/' + this.$route.params.id + '/')).data.teacher[0].name;
      }
      else {
         lessons = (await axios.get(this.$store.getters.getServer + '/api/lessons/' + this.id + '/')).data;
        this.group = (await axios.get(this.$store.getters.getServer + '/api/groups/' + this.$route.params.id + '/')).data[0].name;
      }

      let newLesson = [];
      lessons.forEach(element => {
        let index = newLesson.findIndex(el => el.time == element.start_time && el.week_day === element.week_day && (el.is_top === element.is_top || el.is_top === null))
        if (index === -1) {
          newLesson.push({
            time: element.start_time,
            duration: element.duration,
            week_day: element.week_day,
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
      this.lessons  = newLesson.sort((a,b) => {
        if(a.week_day > b.week_day) return 1;
        if(a.week_day < b.week_day) return -1;
        if(a.week_day == b.week_day) {
          if(a.time > b.time) return 1;
          if(a.time < b.time) return -1;
          if(a.time == b.time) return 0;
        }
      });
    },
    week(){
      this.date=new Date();
      let year = this.date.getFullYear();
      let begin = this.date.getMonth() > 8 ? new Date(`${year}-09-01T00:00`) : new Date(`${year}-01-01T00:00`)
      let dayWeek = begin.getDay();
      let week = Math.ceil((((this.date - begin) / 1000 / 60 / 60 / 24 + dayWeek-1  ) / 7));
      week = week%2 !== 0 ? 0 : 1;
      return week
    }
  },
  computed: {
    currentLessons(){
      return this.lessons.filter(element => element.week_day === this.currentDay.id && (element.is_top === this.isTop || element.is_top === null))
    }
  },
  mounted() {
    this.getScheule();
    this.isTop= Boolean(this.week())
  },
  data() {
    return {
      path: this.$store.getters.getServer+'/api/lessons/',
      currentDay: {
        id: 0,
        title: 'Общее',
        subTitle: 'Общее'
      },
      isTop: null,
      group: null,
      teacher: null,
      lessons: [],
      date: null,
      days: [
        {
          id: 0,
          title: 'Общее',
          subTitle: 'Общее'
        },
        {
          id: 1,
          title: 'Понедельник',
          subTitle: 'Пн'
        },
        {
          id: 2,
          title: 'Вторник',
          subTitle: 'Вт'
        },
        {
          id: 3,
          title: 'Среда',
          subTitle: 'Ср'
        },
        {
          id: 4,
          title: 'Четверг',
          subTitle: 'Чт'
        },
        {
          id: 5,
          title: 'Пятница',
          subTitle: 'Пт'
        }, {
          id: 6,
          title: 'Суббота',
          subTitle: 'Сб'
        }
      ]
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  padding-top: 20px;
}

.v-btn {
  display: flex;
  justify-content: center;
}

.title {
  flex-grow: 1;
  width: 100%;
}
.status_week{
  display: flex;
  justify-content: center;
}


</style>