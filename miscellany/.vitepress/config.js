module.exports = {
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
                text: '关于我',
                link: '/aboutme'
            },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Lshbosheth' }
        ]
    }

}
