<template>
  <div class ="Section grad">
    <PageTitle>Расписание секций и кружков</PageTitle>
    <div class="sections" v-if="sections.length !== 0">
      <SectionItem v-for="section in sections" :key="section.id" :section="section" />
    </div>
  </div>
</template>

<script>

import SectionItem from "@/components/Schedule/SectionItem";
import axios from "axios";
import PageTitle from "@/components/Layout/PageTitle";


export default {
  name: "Section",
  components: {
    PageTitle,
  SectionItem
},
  data(){
    return{
      sections: []
    }
  },
  methods:{
    async getSection(){
      this.sections = (await axios.get(this.$store.getters.getServer+'/Section')).data;
    }
  },
  mounted(){
    this.getSection()
  }
}
</script>

<style lang="less" scoped>
.sections{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>