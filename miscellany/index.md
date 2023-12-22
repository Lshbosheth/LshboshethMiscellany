---
layout: home
home: true
title: Lshbosheth's Miscellany
titleTemplate: Lshbosheth
editLink: true
lastUpdate: true

hero: 
    name: Lshbosheth
    text: 呵呵
    tagline: 呵呵
    image:
        src: /logo.jpg
        alt: haha
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
import { ref } from "vue";
import home from './.vitepress/theme/view/home.vue';
let isShow = ref(true);
const childEvent = () => {
    isShow.value = false
}
</script>
