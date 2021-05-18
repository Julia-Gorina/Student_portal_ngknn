<template>
  <div class="progress">
    <div class="progress-value" ref="progressvalue">
      <div class="progress-title">
        <template v-if="pauseProgress < 0 || pauseProgress == false">
          Перерыв {{ calcMinutes() }} мин.
        </template>
        <template v-else>
          Осталось {{ pauseProgress.toFixed(0) }} мин.
        </template>

      </div>
    </div>
    {{ }}
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      status: '',
      now: null,
      startLessonOne: null,
      endLessonOne: null,
      startLessonTwo: null,
      timer: null
    }
  },
  props: {
    lesson: Array
  },
  computed: {
    pauseProgress(){
      if (this.now < this.endLessonOne) {
        return false
      }
      return this.startLessonTwo - this.now
    }
  },
  watch:{
    now(){
      if (this.pauseProgress){
        this.$refs['progressvalue'].style.width = (100 -  100 / (this.calcMinutes() / this.pauseProgress.toFixed(0)) ) + '%'
      }
    }
  },
  methods: {
    calcMinutes() {
      return this.startLessonTwo - this.endLessonOne;
    },
    nowTime(){
      this.timer = setInterval(() => {
        this.now = this.getMinut(new Date().toLocaleTimeString());
      }, 1000)
    },
    getMinut(stringTime){
      let times = stringTime.split(':')
      let minutes = +times[0] * 60 + +times[1];
      return minutes;
    }

  },
  mounted() {

    this.startLessonOne = this.getMinut(this.lesson[0].time)

    this.endLessonOne = this.getMinut(this.lesson[0].time) + +this.lesson[0].duration;

    this.startLessonTwo = this.getMinut(this.lesson[1].time);
    this.now = this.getMinut(new Date().toLocaleTimeString());

    if (this.startLessonTwo > this.now){
      this.nowTime()
    } else {
      this.now = this.getMinut(new Date().toLocaleTimeString());
    }

  }
}
</script>

<style lang="less" scoped>
.pause {
  height: 30px;
  background-color: #fff;
  border: 1px solid #C2C1C1;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
}

.progress {
  background: rgba(255,255,255,0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  display: flex;
  height: 30px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #C2C1C1;
  overflow: hidden;
}

.progress-value {
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px #C2C1C1;
  border-radius: 100px;
  background: #D13918;
  height: 30px;
  width: 0;
  transition: 1s;
}

.progress-title{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

</style>
