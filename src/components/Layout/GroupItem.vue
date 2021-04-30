<template>
<div class="group">
  {{group.title}}
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
 top: 100px;
}
</style>