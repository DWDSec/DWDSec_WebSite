import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope';

export default defineUserConfig({
    port: 80,
    lang: 'zh-CN',
    title: 'DWDSec网络安全协会',
    description: 'Defend With Determination',
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
    theme: hopeTheme({
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
                    },
                ],
            },
        ],
        repo: 'https://github.com/DWDSec/dwdsec.github.io',
        sidebar: {
            '/members/': [
                {
                    text: '协会成员',
                    link: '/members/'
                },
                {
                    text: '破阵',
                    collapsible: true,
                    children: [
                        '/members/MatrixBreaker/TXPH.md',
                        '/members/MatrixBreaker/XCES.md',
                        '/members/MatrixBreaker/Diyun.md',
                        '/members/MatrixBreaker/nLesxw.md',
                        '/members/MatrixBreaker/HeyAspirin.md',
                        '/members/MatrixBreaker/Van.md',
                        '/members/MatrixBreaker/Gilgamesh.md',
                    ],
                },
                {
                    text: '逆锋',
                    collapsible: true,
                    children: [
                        '/members/ReverseBlade/Juana_2u.md',
                        '/members/ReverseBlade/XIAO.md',
                    ],
                },
                {
                    text: '智鉴',
                    collapsible: true,
                    children: [
                        '/members/WisdomGuardian/SNA001.md',
                        '/members/WisdomGuardian/808.md',
                        '/members/WisdomGuardian/Yaoisss.md',
                        '/members/WisdomGuardian/QingNiao.md',
                        '/members/WisdomGuardian/Link.md',
                        '/members/WisdomGuardian/L0ve5elf.md'
                    ],
                },
                {
                    text: '铸安',
                    collapsible: true,
                    children: [
                        '/members/ShieldForge/Crazy4Tech.md',
                        '/members/ShieldForge/SmallL_U.md',
                        '/members/ShieldForge/Ralasg.md',
                    ],
                },
                {
                    text: '其他成员',
                    collapsible: true,
                    children: [
                        '/members/others/KRISS-HDB.md',
                        '/members/others/brown.md',
                        '/members/others/Mercury.md',
                        '/members/others/33.md',
                        '/members/others/Ymhs.md',
                        '/members/others/TerryTao.md',
                        '/members/others/XFAN.md',
                        '/members/others/dreamer.md',
                        '/members/others/@.md',
                    ],
                },
            ],
        },
        plugins: {
            search: true,
        },
        docsDir: 'docs',
        lastUpdated: false,
        contributors: false,
    }),
})