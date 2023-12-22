<template>
  <div class="container" @click.self="clickContainer">昨夜西风凋敝树</div>
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
  user-select: none;
}
</style>
