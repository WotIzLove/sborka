<template>
  <div class="lds-ring">
    <di class="lds-ring__item"></di>
    <div class="lds-ring__item"></div>
    <div class="lds-ring__item"></div>
    <div class="lds-ring__item"></div>
  </div>
</template>

<style lang="scss">
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring__item {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #3366ff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #3366ff transparent transparent transparent;
}
.lds-ring__item:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring__item:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring__item:nth-child(3) {
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