<template>
<div class = "Zag gradient">
<PageTitle>Расписание занятий</PageTitle>
  <div class="specials" v-if="specials.length !== 0">
    <SpecialItem v-for="special in specials" :key="special.id" :special="special" />

    <router-link to="/teachers" class="special teach">
      <div class = "special__image">
        <img  src="/img/Schedule/teacher.png" class="picture">
      </div>
      <div class = "special__name">
        Преподаватели
      </div>
    </router-link>

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
      this.specials = (await axios.get(this.$store.getters.getServer+'/api/specialties/')).data;
    }
  },
  mounted(){
  this.getSpecial()
  }

}
</script>

<style lang="less" scoped>
.special__image{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 8px;
}
.special__name{
  text-align: center;
  font-size: 12px;
  line-height: 1.25em;

}
@media screen and (min-width: 750px) {
  .special__name {
    font-size: 18px;
  }
}
.picture{
  width: 52px;
}
.specials{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
.teach{
  text-decoration: none;
  font-size: 0.8em;
  color: black;
}
.special {
  width: 33%;
  display: flex;
  flex-direction: column;
}


</style>