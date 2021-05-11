<template>
  <div class="btnContainer">
    <button @click="changeView('list')"  ref="list" ><img src="/img/Otdel/line.svg"  alt="" class="firstImage" :class="view =='list'? 'active': ''"></button>
    <button @click="changeView('grid')" ref="grid"  ><img src="/img/Otdel/sq.svg" alt="" class="firstImage" :class="view =='grid'? 'active': ''"></button>
  </div>
</template>

<script>


export default {
  name: "RepresData",
  data() {
    return{
      view: null
    }
  },
  emits: ['changeView'],
  mounted() {
    this.view = this.$store.getters.getViewStatus
  },
  methods: {
    changeView(view) {
      this.$store.commit('changeView', view);
      this.view = this.$store.getters.getViewStatus;
      this.$emit('changeView', this.view)
    },
  }
}
</script>

<style scoped>
button{
  background: transparent;
  border: 0;
  outline: none;
  text-align: center;
  padding-top: 2px;
  padding-right: 1px;
  padding-left: 1px;
}
.btnContainer{

}

.active{
  background-color: #D13918;
}

.firstImage{
  height: 30px;
}

</style>