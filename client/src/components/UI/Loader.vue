<template lang="pug">
div.loader-main-frame
    div.lds-ring
        div
    span.text Загрузка...
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.text{
    color: white;
    opacity: 100%;
    font-family: "Cera Pro";
    font-size: 2vw;
    margin-left: 0.4vw;
}
.loader-main-frame{
    position: absolute;
    background: rgba(0, 0, 0, 0.47);
    opacity: 100%;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    display: flex;
    gap: 3vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 10vw;
  height: 10vw;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 10vw;
  height: 10vw;
  margin: 8px;
  border: 0.8vw solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>