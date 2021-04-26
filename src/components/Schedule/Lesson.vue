<template>
  <div class="lesson" :class="className">
    <header class="lesson__header">
      <div class="lesson__time">
        {{ timeLesson() }}
      </div>
    </header>
    <div class="lesson__title">
      {{ lesson.subject }}
    </div>
    <div class="lesson__teacher">
      {{ lesson.teacher }}
    </div>
    <div class="lesson__office">
      {{ lesson.classroom }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'lesson',
  data() {
    return {
      timer: null,
      className: '',
      startLesson: null,
      endLesson: null,
      endPrevLesson: null,
      now: null
    }
  },
  props: {
    lesson: Object,
    prevLesson: Object
  },
  methods: {
    checkActive() {

      this.timer = setInterval(()=>{
        this.now = this.getMinut(new Date().toLocaleTimeString());

        if (this.endLesson < this.now ) {
          this.className = 'lesson_ended';
          clearInterval(this.timer);
        }

        if (this.endLesson > this.now && this.startLesson > this.now) {
          this.className = '';
        }

        if (this.endLesson > this.now && this.startLesson < this.now ) {
          this.className = 'lesson_active';
        }

        if (this.endPrevLesson < this.now && this.startLesson > this.endLesson ){
          this.className = 'lesson_active';
        }



      },1000)


    },
    timeLesson(){
      // this.startLesson должна быть датой с временм this.lesson.time

      //this.startLesson = new Date(`${this.lesson.date}T${this.lesson.time }`);
      //this.endLesson = new Date(+(this.startLesson) + this.lesson.duration*60*1000);
      // return `${this.trueTime(this.startLesson)} - ${this.trueTime(this.endLesson)}`;

      this.endLesson = this.getMinut(this.lesson.time) + +this.lesson.duration;
      let hEnd =  Math.floor(this.endLesson / 60)
      let mEnd = Math.abs(this.endLesson - hEnd * 60);
      let str = `${this.lesson.time} - ${hEnd < 10 ? '0' + hEnd : hEnd }:${mEnd}`
      return str

    },
    getMinut(stringTime){
      let times = stringTime.split(':')
      let minutes = +times[0] * 60 + +times[1];
      return minutes;
    }
    // trueTime(dateTime){
    //   return dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    // }

  },
  mounted() {
    //this.endPrevLesson = new Date(+(this.prevLesson.startLessonOne) + this.lesson[0].duration * 60 * 1000);
    if (this.prevLesson){
      this.endPrevLesson = this.getMinut(this.prevLesson.time);
    } else{
      this.endPrevLesson = 0
    }

    this.startLesson = this.getMinut(this.lesson.time);
    this.checkActive();
  }
}
</script>

<style lang="less" scoped>
.lesson {
  background:  rgba(242, 163, 90, 0.4);
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
    font-size: 16px;
    line-height: 17px;
    color: #000000;
    padding: 5px 0;

  }
  &__time{
    font-size: 17px;
    line-height: 17px;
    color: #000000;
    font-weight: bold;
  }
  &__teacher{
    font-size: 12px;
    line-height: 12px;
    margin:  0 0 6px;
  }

  &__office{
    font-size: 12px;
    line-height: 13px;
  }

  &_active{
    position: relative;
    font-size: 11px;
    background: rgba(242, 163, 90, 0.4);
    &::before{
      background-color: #D13918;
    }
  }

  &_ended{
    position: relative;
    background-color:  #D8D5D5;

  }
}

</style>
