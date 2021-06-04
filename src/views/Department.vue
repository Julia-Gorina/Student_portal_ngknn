<template>
  <div class="otdel gradient">
    <div class="stroka">
      <Arrow></Arrow>
      <RepresData @changeView="changeView"  ></RepresData>
    </div>
    <NewTitle > {{ teacher ? 'Преподаватели' : name }}</NewTitle>
    <PageInput type="search" placeholder="Поиск" v-model="search"></PageInput>
    <div class="groups-list">
      <GroupItem :teacher="teacher" v-for="(group, index) in filterGroups" :index="index" :key="group.id" :group="group" :class="statusView" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GroupItem from "@/components/Layout/GroupItem";
import RepresData from "../components/Layout/RepresData";
import Arrow from "../components/Layout/Arrow";
import NewTitle from "../components/Layout/NewTitle";
import PageInput from "@/components/Layout/PageInput";

export default {
name: "Department",
  components: {PageInput, NewTitle, Arrow, GroupItem, RepresData},
  data(){
  return{
    groups: [],
    name: '',
    statusView: null,
    path: null,
    teacher: false,
    search: '',
  }
  },
  methods: {
    async getGroups() {
      //Prod version
      // let data = (await axios.get(this.$store.getters.getServer+'/Special/' + this.$route.params.id + '/')).data;
      //Dev version
      let data = [];
      if (this.path.includes('teachers')) {
        this.teacher = true
         data = (await axios.get(this.$store.getters.getServer+'/api/teachers/')).data;
        this.groups = data;
      } else {
         data = (await axios.get(this.$store.getters.getServer+'/api/specialties/' + this.$route.params.id + '/')).data;
        this.groups = data.groups;
        this.name = data.name;
      }


    },
    changeView(view){
      this.statusView = view
    }
  },
computed: {
  filterGroups(){
    return this.groups.filter(el =>  el.name.includes(this.search)).sort((a,b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      if (a.name == b.name) return 0
    })
  }
},
  mounted() {
    this.path = this.$route.fullPath;
    this.getGroups()
    this.statusView = this.$store.getters.getViewStatus;
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