<template>
  <router-link :to="'/department/' + teachers.name" class="teachers">
  <div class="teach">
    <button>Преподаватели</button>
  </div>
  </router-link>
</template>

<script>

export default {
name: "Teachers"
}
</script>

<style scoped>
.teach{
  display: flex;
  align-items: center;
  background: #F2A35A;
  border-radius: 10px;
  border: none;
  padding: 0 1.5em;
  margin-right: .5em;
  font-size: 12px;
  line-height: 12px;
  font-family: 'Comfortaa';
  text-transform: uppercase;
  color: #FFFFFF;
  text-decoration: none;
}

</style>