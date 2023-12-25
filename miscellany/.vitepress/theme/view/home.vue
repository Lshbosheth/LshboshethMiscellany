<template>
  <div class="container" @click.self="clickContainer"><div class="containerText">昨夜西风凋敝树</div></div>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['sendToFather']);

const clickContainer = () => {
  emit('sendToFather')
}
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background: url("/back.jpg");
  background-size: cover;
  display: flex;
  padding-top: 130px;
  justify-content: center;
  font-size: 30px;
}

.containerText {
  user-select: none;
  background: -webkit-linear-gradient(
      315deg,
      rgb(210, 86, 53) 10%,
      #647eff 50%,
      rgb(238, 224, 112) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
