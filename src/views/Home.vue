<template>
  <div class="home">
    <MainHeader>Доброе утро!</MainHeader>
    <NumberOfPairs :lessons="lessons" />

    <img src="img/layout/header/header.jpg" alt="" class="home-img">
    <DateAndWeek />
    <template v-for="(lesson, index) in lessons" :key="lesson.id">
      <Lesson :lesson="lesson"/>
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
    }
  },
  components: {
    Lesson, Pause, Loading, MainHeader, NumberOfPairs, DateAndWeek
  },
  methods: {
    async getLesson() {
      this.lessons = (await axios.get('http://localhost:3000/lesson/')).data;
      // //ToDo: Убрать задержку на продакшене
      setTimeout(()=>{
        this.loading = false;
      },2000)
    }
  },
  mounted() {
    this.getLesson()
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