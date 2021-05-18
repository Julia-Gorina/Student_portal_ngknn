<template>
    <button class="vvod">{{title}}</button>
</template>

<script>

export default {
name: "NextDay",
  props: {
    title: String,
to: String,
  },
  methods:{

  }
}
</script>

<style scoped>
.vvod{
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