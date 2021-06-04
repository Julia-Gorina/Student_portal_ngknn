<template>
  <div class="group">
    <span class="link" @click="toLink" :class="bg">
      {{ group.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "GroupItem",
  props: {
    group: Object,
    teacher: Boolean,
    index: Number
  },
  data(){
    return{
      bg: ''
    }
  },
  methods: {
    toLink(){
      if (this.teacher) {
        localStorage.setItem('teacher_id', this.group.id);
        localStorage.removeItem('group_id')
        this.$router.push('/fullschedule_teacher/' + this.group.id)
      } else {
        localStorage.setItem('group_id', this.group.id);
        localStorage.removeItem('teacher_id')
        this.$router.push('/fullschedule/' + this.group.id)
      }

    }
  },
  mounted() {

    switch (this.index % 4 ) {
      case 0:
        this.bg = 'blue';
        break;
      case 1:
        this.bg = 'green';
        break;
      case 2:
        this.bg = 'red';
        break;
      case 3:
        this.bg = 'black';
        break;
    }

  }
}
</script>

<style scoped lang="less">
.group {
  /*top: 100px;*/
}

.list {
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  border-radius: 3px;
  font-size: 20px;
  width: 100%;
  padding: 5px;
}

.grid {
  height: 120px;
  width: 16.666666%;
  margin-bottom: 30px;
  padding-right: 15px;
  padding-left: 15px;
}

#square {
  width: 100px;
  height: 100px;
}

.link{
  background-color: #F9C474;
  &.red{
    background-color: #B94F4F;
  }

  &.green {
    background-color: #D13918;
  }

  &.blue{
    background-color: #F9C474;
  }
  &.black{
    background-color: #FF7A00;
  }


}



.grid .link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  text-align: center;
  margin-top: 10px;
  border-radius: 15px;
  font-size: 20px;
  width: 100%;
  height: 100%;
}

.list .link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  width: 100%;
  padding: 10px;

}


@media screen and  (max-width: 1170px) {
  .grid {
    width: 25%;
    font-size: 16px;
  }
}

@media screen and  (max-width: 768px) {
  .grid {
    width: 33%;
  }
}

@media screen and  (max-width: 520px) {
  .grid {
    width: 50%;
    .link{
      font-size: 1rem;
    }
  }
}


</style>