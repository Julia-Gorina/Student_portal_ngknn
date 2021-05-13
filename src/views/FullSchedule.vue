<template>
<div class="schedule grad">
  <div class="header">
    <Arrow></Arrow>
    <title-schedule class="title">Расписание занятий группы 41П</title-schedule>
  </div>
  <div class="v-btn">
  <nav-button title="Общее" id="General"></nav-button>
  <nav-button title="Пн" id="Monday"></nav-button>
  <nav-button title="Вт" id="Tuesday"></nav-button>
  <nav-button title="Ср" id="Wednesday"></nav-button>
  <nav-button title="Чт" id="Thursday"></nav-button>
  <nav-button title="Пт" id="Friday"></nav-button>
  <nav-button title="Сб" id="Saturday"></nav-button>
  </div>
  <BlockDay title="Понедельник"></BlockDay>
  <BlockSchedule></BlockSchedule>
  <BlockDay title="Вторник"></BlockDay>
  <BlockSchedule></BlockSchedule>
  <BlockDay title="Среда"></BlockDay>
  <BlockSchedule></BlockSchedule>
  <BlockDay title="Четверг"></BlockDay>
  <BlockSchedule></BlockSchedule>
  <BlockDay title="Пятница"></BlockDay>
  <BlockSchedule></BlockSchedule>
  <BlockDay title="Суббота"></BlockDay>
  <BlockSchedule></BlockSchedule>
</div>
</template>

<script>
import Arrow from "@/components/Layout/Arrow";
import TitleSchedule from "@/components/Layout/TitleSchedule";
import NavButton from "@/components/Layout/NavButton";
import BlockDay from "@/components/Layout/BlockDay";
import BlockSchedule from "@/components/Layout/BlockSchedule";
export default {
name: "FullSchedule",
  components: {BlockSchedule, BlockDay, NavButton, TitleSchedule, Arrow}
}
</script>

<style scoped>
.header{
  display: flex;
}
.v-btn{
  display: flex;
  justify-content: center;
}
.title{
  flex-grow: 1;
  width: 100%;
}

</style>