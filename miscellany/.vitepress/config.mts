import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: "Lshbosheth's Miscellany",
  description: "Lshbosheth的杂类记录",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico', type: 'image/png' }]
  ],
  lastUpdated: true,
  mermaid: {},
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
      text: '上次更新时间'
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
      {icon: 'github', link: 'https://github.com/Lshbosheth'},
      {
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1704336339407" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5117" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><title>文件管理(图床)</title><path d="M870.4 217.6c14.1 0 25.6 11.5 25.6 25.6v537.6c0 14.1-11.5 25.6-25.6 25.6H153.6c-14.1 0-25.6-11.5-25.6-25.6v-448c0-14.1 11.5-25.6 25.6-25.6h384.9l18.7-18.7 70.9-70.9h242.3m0-64H620.2c-11.9 0-23.3 4.7-31.7 13.1L512 243.2H153.6c-49.5 0-89.6 40.1-89.6 89.6v448c0 49.5 40.1 89.6 89.6 89.6h716.8c49.5 0 89.6-40.1 89.6-89.6V243.2c0-49.5-40.1-89.6-89.6-89.6z" p-id="5118"></path><path d="M768 741.4H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32z" p-id="5119"></path></svg>'
        },
        link: 'https://file.lshbosheth.cn'
      },
      {
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1704336694628" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6154" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><title>API文档</title><path d="M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1 0.8-5.7 2.3l-76.1 76.1c-33.7-22.9-72.9-34.3-112.1-34.3-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7c-3.1 3.1-3.1 8.2 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-0.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zM578.9 546.7c-3.1-3.1-8.2-3.1-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6c-3.1-3.1-8.2-3.1-11.3 0L363 475.3l-43-43c-1.6-1.6-3.6-2.3-5.7-2.3-2 0-4.1 0.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-0.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1c-24.9 24.9-58.1 38.7-93.4 38.7-35.3 0-68.4-13.7-93.4-38.7-24.9-24.9-38.7-58.1-38.7-93.4 0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z" p-id="6155"></path></svg>'
        },
        link: 'https://api.lshbosheth.cn/api/swagger'
      }
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
