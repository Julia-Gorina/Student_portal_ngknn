<template>
<div class="group">
  <router-link to="#" class="link">
    {{group.name}}
  </router-link>
</div>
</template>

<script>
export default {
name: "GroupItem",
  props: {
  group: Object
  }
}
</script>

<style scoped>
.group{
 /*top: 100px;*/
}

.list{
  text-align: center;
  margin-top: 10px;
  background: #F9C474;
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
#square{
  width: 100px;
  height: 100px;
}

.grid .link{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  text-align: center;
  margin-top: 10px;
  background: #F9C474;
  border-radius: 15px;
  font-size: 20px;
  width: 100%;
  height: 100%;
}
.list .link{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  text-align: center;
  background: #F9C474;
  border-radius: 15px;
  font-size: 20px;
  width: 100%;
  height: 100%;
}
@media screen and  (max-width: 1170px){
  .grid{
    width: 25%;
  }
}

@media screen and  (max-width: 768px){
  .grid{
    width: 33%;
  }
}

@media screen and  (max-width: 520px){
  .grid{
    width: 50%;
  }
}


</style>