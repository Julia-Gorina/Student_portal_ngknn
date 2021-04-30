<template>
  <div class="btnContainer">
    <button @click="changeView('list')"  ref="list" ><img src="/img/Otdel/line.svg"  alt="" class="firstImage"></button>
    <button @click="changeView('grid')" ref="grid"  ><img src="/img/Otdel/sq.svg" alt="" class="firstImage"></button>
  </div>
</template>

<script>


export default {
  name: "RepresData",
  data() {
    return{

    }
  },
  emits: ['changeView'],
  methods: {
    changeView(view) {
      this.$refs['grid' ].style.backgroundColor = 'transparent'
      this.$refs['list' ].style.backgroundColor = 'transparent'
      this.$refs[view].style.backgroundColor = '#D13918'
      this.$emit('changeView', view);

      // if (view !== 'list') {
      //   this.CSSStyleSheet("button").backgroundColor(black);
      // }
      // else {
      //   this.CSSStyleSheet("button").backgroundColor(red);
      // }
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
.firstImage{
  height: 30px;
}

</style>