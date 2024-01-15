<template>
  <iframe :src="src" width="100%" height="500px"></iframe>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  codeId: {
    type: String,
    default: ''
  }
})
const src = computed(() => `https://code.juejin.cn/pen/${props.codeId}`);

</script>
<style scoped>

</style>
