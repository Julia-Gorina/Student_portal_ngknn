<template>
  <BlockDay :title="day.title"></BlockDay>
  <BlockSchedule :lessons="lessons"></BlockSchedule>
</template>

<script>
import BlockSchedule from "@/components/Layout/BlockSchedule";
import BlockDay from "@/components/Layout/BlockDay";

export default {
  name: "DayLesson",
  components: {BlockSchedule, BlockDay},
  props: {
    day: Object,
    lessons: Array
  }
}
</script>

<style scoped>

</style>