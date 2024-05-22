import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    port: 80,
    lang: 'zh-CN',
    title: 'DWDSec网络安全协会',
    description: 'Defend With Determination',
    theme: hopeTheme({
        favicon: '/logos/DWDSEC_LOGO.png',
        logo: '/logos/DWDSEC_LOGO.png',
        navbar: [
            { text: '协会简介', link: '/intro/' },
            { text: '协会战队', link: '/teams/' },
            { text: '协会成员', link: '/members/' },
            {
                text: '相关平台',
                children: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/DWDSec'
                    },
                    {
                        text: '校园内部CTF平台',
                        link: 'http://ctf.hyit.edu.cn/'
                    },
                    {
                        text: '攻防世界',
                        link: 'https://adworld.xctf.org.cn/teams/details?team_id=221500666&added=true'
                    }
                ]
            }
        ],
        repo: 'https://github.com/DWDSec/DWDSec_WebSite',
        sidebar: {
            '/members/': [
                {
                    text: '协会成员',
                    link: '/members/'
                },
                {
                    text: '破阵',
                    prefix: '/members/MatrixBreaker/',
                    collapsible: true,
                    children: [
                        'TXPH',
                        'XCES',
                        'Diyun',
                        'nLesxw',
                        'HeyAspirin',
                        'Van',
                        'Gilgamesh',
                        'Nai',
                    ]
                },
                {
                    text: '逆锋',
                    prefix: '/members/ReverseBlade/',
                    collapsible: true,
                    children: [
                        'Juana_2u',
                        'XIAO',
                    ]
                },
                {
                    text: '智鉴',
                    prefix: '/members/WisdomGuardian/',
                    collapsible: true,
                    children: [
                        'Yaoisss',
                        'SNA001',
                        '808',
                        'QingNiao',
                        'Link',
                        'L0ve5elf',
                    ]
                },
                {
                    text: '铸安',
                    prefix: '/members/ShieldForge/',
                    collapsible: true,
                    children: [
                        'Crazy4Tech',
                        'SmallL_U',
                        'Ralasg',
                    ]
                },
                {
                    text: '其他成员',
                    prefix: '/members/others/',
                    collapsible: true,
                    children: [
                        'KRISS-HDB',
                        'brown',
                        'Mercury',
                        '33',
                        'Ymhs',
                        'TerryTao',
                        'XFAN',
                        'dreamer',
                        '@',
                    ]
                }
            ]
        },
        breadcrumb: false,
        pageInfo: false,
        lastUpdated: false,
        contributors: false,
        prevLink: false,
        nextLink: false,
        docsDir: 'docs',
        plugins: {
            search: true
        }
    }),
    bundler: viteBundler()
})