<template>
  <div class="otdel gradient">
    <div class="stroka">
      <Arrow></Arrow>
      <RepresData ></RepresData>
    </div>
    <PageTitle />
    <div class="square">
    <GroupItem v-for="group in groups" :key="group.id" :group="group" class="GroupItem"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GroupItem from "@/components/Layout/GroupItem";
import RepresData from "../components/Layout/RepresData";
import Arrow from "../components/Layout/Arrow";
import PageTitle from "../components/Layout/PageTitle";

export default {
name: "Department",
  components: {PageTitle, Arrow, GroupItem, RepresData},
  data(){
  return{
    groups: []
  }
  },
  methods: {
    async getGroups() {
      this.groups = (await axios.get(this.$store.getters.getServer+'/groups/' + this.$route.params.id)).data.groups;
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
}
.square{
  margin-top: 20px;
}
.GroupItem {
  text-align: center;
  margin-top: 10px;
  background: #F9C474;
  border-radius: 3px;
  font-size: 20px;
  height: 150px;
  width: 150px;

}
</style>