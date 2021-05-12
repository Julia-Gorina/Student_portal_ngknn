<template>
  <div id="popup" class="popup">
    <div class="popup_body">
      <div class="popup_content">
        <div class="popup_title">Подождите, идет загрузка...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loadingPopup"
}
</script>

<style scoped>
.popup{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  top:0;
  left:0;

}
.popup:target{
  opacity: 1;
  visibility: visible;
}
.popup_body{
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px ;
}
.popup_title{
  font-size: 30px;
  margin: 7px 0px 1em 0px;
  text-align: center;
  font-weight: bold;
}


</style>