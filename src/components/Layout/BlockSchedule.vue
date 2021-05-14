<template>
<div class="block">
<blockLesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson"></blockLesson>
</div>
</template>

<script>
import BlockLesson from "@/components/Layout/BLockLesson";
export default {
name: "BlockSchedule",
  components: {BlockLesson},
  props: {
    lessons: Array
  }
}
</script>

<style scoped>
.block{
  background: #000000;
  border-radius: 6px;
  width: 100%;

  margin-top: 15px;
}
</style>