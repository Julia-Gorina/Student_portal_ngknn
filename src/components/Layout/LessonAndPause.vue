<template>
  <Lesson :teacher="teacher" :today="today" :lesson="lesson" :prevLesson="lessons[index-1]"/>
  <Pause :today="today" v-if="index !== lessons.length - 1" :lesson="[lesson ,lessons[index+1]]"/>
</template>

<script>
import Lesson from '@/components/Schedule/Lesson.vue'
import Pause from '@/components/Schedule/Pause.vue'

export default {
  name: "LessonAndPause",
  components: {
    Lesson, Pause
  },
  props: {
    lesson: Object,
    lessons: Array,
    today: Boolean,
    index: Number,
    teacher: String
  }
}

</script>

<style scoped>

</style>