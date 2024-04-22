module.exports = {
    port: '80',
    lang: 'zh-CN',
    title: 'DWDSec网络安全实验室',
    description: 'Defend With Determination',
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/member_avatar/DWDSEC_LOGO.jpg',
        nav: [
            { text: '实验室文章', link: '/articles/' },
            { text: '实验室项目', link: '/projects/' },
            { text: '实验室成员', link: '/members/' },
        ],
        sidebar: {
            '/members/': [
                '', {
                    title: 'Web成员',
                    collapsable: true,
                    children: [
                        'TXPH',
                        'SmallL_U',
                        'nLesxw',
                        'HeyAspirin',
                        'KRISS-HDB',
                        'brown',
                        'XCES',
                        'Mercury',
                        '33',
                        'Ymhs',
                    ]
                }, {
                    title: 'Misc成员',
                    collapsable: true,
                    children: [
                        '808',
                        'QingNiao',
                        'TerryTao',
                        'XFAN',
                        'dreamer',
                    ]
                }, {
                    title: 'Binary成员',
                    collapsable: true,
                    children: [
                        'Yaoisss',
                        'Juana_2u',
                        'XIAO',
                        'Crazy4Tech',
                        '@',
                        'diyun',
                    ]
                },
            ],
        },
        sidebarDepth: 2
    }
}