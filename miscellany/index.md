---
layout: home
home: true
title: Lshbosheth's Miscellany
titleTemplate: Lshbosheth
editLink: true
lastUpdate: true

hero: 
    image:
        src: /logo.jpg
    actions:
      - theme: brand
        text: 进入主页
        link: /
      - theme: alt
        text: 个人成长
        link: /
features:
  - icon: 🤹
    title: Web前端
    details: 111。
    link: /column/views/guide
  - icon: 🤹
    title: Web前端
    details: 111。
    link: /column/views/guide
  - icon: 🤹
    title: Web前端
    details: 111。
    link: /column/views/guide
---
<home v-if="isShow" @sendToFather="childEvent"></home>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import home from './.vitepress/theme/view/home.vue';
let isShow = ref(true);
const childEvent = () => {
    isShow.value = false
}

// const documentTitle = ref<string>(document.title);
// let timerID: NodeJS.Timeout | null = null;
// const newDocumentTitle = () => {
//   clearTimeout(timerID as NodeJS.Timeout)
//     document.title = document.title.substring(1, documentTitle.value.length) + documentTitle.value.substring(0, 1);
//     documentTitle.value = document.title.substring(0, documentTitle.value.length);
//     timerID = setTimeout(() => newDocumentTitle(), 100);
// }
//
// onMounted(() => {
//   timerID = setTimeout(() => newDocumentTitle(), 100);
// });
</script>
