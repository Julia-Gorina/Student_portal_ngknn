<template>
  <div class="otdel gradient">
    <div class="stroka">
      <Arrow></Arrow>
      <RepresData @changeView="changeView"  ></RepresData>
    </div>
    <NewTitle > {{ name }}</NewTitle>
    <div class="groups-list">
      <GroupItem v-for="group in groups" :key="group.id" :group="group" :class="statusView"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GroupItem from "@/components/Layout/GroupItem";
import RepresData from "../components/Layout/RepresData";
import Arrow from "../components/Layout/Arrow";
import NewTitle from "../components/Layout/NewTitle";

export default {
name: "Department",
  components: {NewTitle, Arrow, GroupItem, RepresData},
  data(){
  return{
    groups: [],
    name: '',
    statusView: 'list'
  }
  },
  methods: {
    async getGroups() {
      let data = (await axios.get(this.$store.getters.getServer+'/api/specialties/' + this.$route.params.id + '/')).data;
      this.groups = data.groups;
      this.name = data.name;
    },
    changeView(view){
      this.statusView = view
    }
  },
  mounted() {
    this.getGroups()
  }
}
</script>

<style scoped>
.stroka{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.groups-list{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

</style>