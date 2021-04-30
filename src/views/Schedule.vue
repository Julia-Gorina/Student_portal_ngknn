<template>
<div class = "Zag gradient">
<PageTitle>Расписание занятий</PageTitle>
  <div class="specials" v-if="specials.length !== 0">
    <SpecialItem v-for="special in specials" :key="special.id" :special="special" />
  </div>
</div>

</template>

<script>
import PageTitle from '@/components/Layout/PageTitle.vue'
import SpecialItem from "@/components/Schedule/SpecialItem";

import axios from "axios";

export default {
name: "Schedule",
  components:{
    PageTitle, SpecialItem
  },
  data(){
  return{
    specials: []
  }
  },
  methods:{
    async getSpecial() {
      this.specials = (await axios.get(this.$store.getters.getServer+'/Special/')).data;
    }
  },
  mounted(){
  this.getSpecial()
  }

}
</script>

<style lang="less" scoped>
.specials{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
.Zag{

}



</style>