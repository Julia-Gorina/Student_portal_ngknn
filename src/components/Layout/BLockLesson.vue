<template>
  <div class="lesson">
    <div class="lesson_time">
      {{ lesson.time }}
    </div>
    <div class="lesson_info">
      <div class="lesson_item" v-for="item in lesson.lessons" :key="item.id">
        <div class="lesson_title">
          {{ item.subject }}
        </div>
        <div class="lesson_teacher">
          {{ item.teacher }} {{ item.classroom }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
name: "BLockLesson",
  components: {},
  props: {
    lesson: Object
  }
}
</script>

<style scoped lang="less">

.lesson{
  color: white;
  display: flex;
  padding-top: 10px;
  margin-left: 7px;
  margin-right: 7px;
  border-bottom: 1px solid white;
  padding-bottom: 5px;


  &_time{
    flex: 0 0 18%;
    text-align: center;
    border-right: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  &_item{
    margin-left: 10px;
    &:not(:first-child){
      .lesson_title{
        padding-top: 7px;
      }
    }
    &:not(:last-child){
      border-bottom: 1px solid white;

    }
  }

  &_title{
    font-size: 1em;
    font-weight: bold;
  }

  &_teacher{
    font-size: 0.80em;
    padding: 4px 0;
    color: #C4C4C4;
  }
}


</style>