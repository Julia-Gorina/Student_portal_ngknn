<template>
  <div class="lesson" :class="className">
    <header class="lesson__header">
      <div class="lesson__time">
        {{ timeLesson() }}
      </div>
      <div class="lesson__type">
        {{ lesson.type }}
      </div>
    </header>
    <div class="lesson__title">
      {{ lesson.title }}
    </div>
    <div class="lesson__teacher">
      {{ lesson.teacher }}
    </div>
    <div class="lesson__office">
      {{ lesson.office }}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      timer: null,
      className: '',
      startLesson: null,
      endLesson: null
    }
  },
  props: {
    lesson: Object
  },
  methods: {
    checkActive() {

      this.timer = setInterval(()=>{
        let now = Date.now();
        if (this.endLesson < now ) {
          this.className = 'lesson_ended';
          clearInterval(this.timer);
        }
        if (this.endLesson > now && this.startLesson < now) {
          this.className = 'lesson_active'
        }
      },1000)


    },
    timeLesson(){
      this.startLesson = new Date(`${this.lesson.date}T${this.lesson.time }`);
      this.endLesson = new Date(+(this.startLesson) + this.lesson.duration*60*1000);
      return `${this.trueTime(this.startLesson)} - ${this.trueTime(this.endLesson)}`;
    },
    trueTime(dateTime){
      return dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }

  },
  mounted() {
    this.checkActive();
  }
}
</script>

<style lang="less" scoped>
.lesson {
  background: #ffffff;
  border: 1px solid #C9C9C9;
  border-radius: 8px;
  text-align: left;
  padding: 10px;
  transition: .5s;
  &::before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100% - 10px;
    transform: translate(-2.5px, 5px);
    background-color: transparent;
    border-radius: 10px;
    transition: .5s;
  }
  &__header{
    display: flex;
    align-items: baseline;
  }
  &__title{
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    padding: 5px 0;
  }
  &__time{
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
  &__type{
    font-size: 15px;
    line-height: 18px;
    color: #534993;
    padding: 0 5px;
  }
  &__teacher{
    font-size: 11px;
    line-height: 13px;
    margin: 5px 0;
  }

  &__office{
    font-size: 11px;
    line-height: 13px;
  }

  &_active{
    position: relative;
    background-color: #EEF2FF;
    &::before{
      background-color: #424FC5;
    }
  }

  &_ended{
    position: relative;
    background-color: #e0ffe0;
    &::before{
      background-color: #1c8e00;
    }
  }
}

</style>
