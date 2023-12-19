import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Lshbosheth's Miscellany",
  description: "Lshbosheth的杂类记录",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico', type: 'image/png' }]
  ],
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '上次更新于',
    logo: '/logo.jpg',
    editLink: {
      pattern:
          'https://github.com/Lshbosheth/LshboshethMiscellany',
      text: '去 GitHub 上编辑内容'
    },
    nav: [
      {
        text: '首页',
        link: '/'
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lshbosheth' }
    ],
    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧',
    }
  }
})
