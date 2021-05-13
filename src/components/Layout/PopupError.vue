<template>
  <div  id="popup" class="popup">
    <div class="popup_body">
      <div class="popup_content">
        <button class="popup_close" @click="closeModal" ><img src="/img/Popup/popUp.svg"></button>
        <div><img src="/img/Popup/sleeping.svg" class="popUpimg"></div>
        <div class="popup_title">Кажется сервер пока спит,ваша заявка будет обработана позднее</div>
        <button @click="closeModal" class="popup_button">Вернуться на форму</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupError",
  data(){
    return{

    }
  },
  methods: {
    closeModal() {
      this.$emit('close')

    }
  }
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
  font-size: 15px;
  margin: 7px 0px 1em 0px;
  text-align: center;
}
.popup_close{
  position: absolute;
  right: 13px;
  top:15px;
  background: transparent;
  outline: none;
  border: 0;

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
.popUpimg{
  height: 50px;
}

</style>