<template>
  <div class="lesson" :class="className">
    <header class="lesson__header">
      <div class="lesson__time">
        {{ timeLesson() }}
      </div>
    </header>
    <div v-for="(item, index) in lesson.lessons" :key="item.id">
      <hr v-if="index">
      <strong>{{ item.change ? 'Замена' : ''}}</strong>
      <div class="lesson__title">
        {{ item.subject }}
      </div>
      <div class="lesson__teacher">
        <span v-if="teacher">
              Группа: {{item.group}}
          </span>
        <span v-else>
             {{ item.teacher }}
          </span>
      </div>
      <div class="lesson__office">
       Аудитория: {{ item.classroom }}
      </div>
      <div v-if="item.subject === ''">
        Урок отменен
      </div>

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
    prevLesson: Object,
    today: Boolean,
    teacher: String
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
      let str = `${this.lesson.time.split(':').splice(0,2).join(':')} - ${hEnd < 10 ? '0' + hEnd : hEnd }:${mEnd}`
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
    if (this.today) {
      this.checkActive();
    }
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
    height: 100% - 5%;
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
    line-height: 1.25em;
    color: #000000;
    padding: 5px 0;
    @media screen and (min-width: 700px){
      font-size: 24px;
    }


  }
  &__time{
    font-size: 17px;
    line-height: 1.25em;
    color: #000000;
    font-weight: bold;
    @media screen and (min-width: 1000px){
      font-size: 24px;
    }
    @media screen and (min-width: 700px){
      font-size: 24px;
    }

  }
  &__teacher{
    font-size: 12px;
    line-height: 1.25em;
    margin:  0 0 6px;
    @media screen and (min-width: 1000px){
      font-size: 22px;
    }
    @media screen and (min-width: 700px){
      font-size: 19px;
    }
  }

  &__office{
    font-size: 12px;
    line-height: 1.25em;
    @media screen and (min-width: 1000px){
      font-size: 24px;
    }
    @media screen and (min-width: 700px){
      font-size: 20px;
    }
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
hr{
  border: 1px solid #D13918;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 5px;
  margin-bottom: 5px;
}
strong{
  color: #d13918;
  text-transform: uppercase;
  font-size: 14px;
 text-decoration: underline;
  @media screen and (min-width: 1000px){
    font-size: 20px;
  }
  @media screen and (min-width: 700px){
    font-size: 18px;
  }

}


</style>
