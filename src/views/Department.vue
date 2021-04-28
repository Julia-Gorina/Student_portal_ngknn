<template>
<GroupItem v-for="group in groups" :key="group.id" :group="group"/>

</template>

<script>
import axios from "axios";
import GroupItem from "@/components/Layout/GroupItem";

export default {
name: "Department",
  components: {GroupItem},
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

</style>