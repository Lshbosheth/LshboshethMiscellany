import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Lshbosheth's Miscellany",
  description: "Lshbosheth的杂类记录",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico', type: 'image/png' }]
  ],
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: '67IERLLQ9S',
        apiKey: 'f1fad1237d370f769f0195d22661e0da',
        indexName: 'lshbosheth',
      },
    },
    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
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
      {
        text: 'test',
        items: [
          { text: 'index', link: '/test/index' },
          { text: 'index1', link: '/test/index1' },
          { text: 'index2', link: '/test/index2' }
        ]
      },
    ],
    sidebar: {
      '/test/': [
        { text: 'index', link: '/test/index' },
        { text: 'index1', link: '/test/index1' },
        { text: 'index2', link: '/test/index2' }
      ]
    },
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lshbosheth' }
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2020-present Lshbosheth',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    }
  }
})
