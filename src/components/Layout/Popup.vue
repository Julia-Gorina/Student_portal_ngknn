<template>
<div id="popup" class="popup">
  <div class="popup_body">
    <div class="popup_content">
      <a href="" class="popup_close"><img src="/img/Popup/popUp.svg"></a>
      <div class="popup_title">Спасибо, ваша заявка принята</div>
      <button class="popup_button">Вернуться на форму</button>
    </div>
  </div>
</div>
</template>

<script>

export default {
name: "Popup"

}
</script>

<style scoped>
.popup{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(149, 148, 148, 0.58);
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
.popup_content{
  background-color: #F4D2B2;
  border-radius: 7px;
  color: #000000;
  max-width: 800px;
  padding: 30px;
  position: relative;
  text-align: center;
}
.popup_title{
  font-size: 25px;
  margin: 7px 0px 1em 0px;
  text-align: center;
}
.popup_close{
  position: absolute;
  right: 13px;
  top:15px;
  color: #000000;
  text-decoration: none;
}
.popup_button{
  background: #F2A35A;
  border-radius: 10px;
  border: none;
  padding: .7em 1.5em;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 12px;
  font-family: 'Comfortaa';
  text-transform: uppercase;
  color: #FFFFFF;
}
</style>