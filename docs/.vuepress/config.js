module.exports = {
    //端口
    port: '80',
    // 站点配置
    lang: 'zh-CN',
    title: 'DWDSec网络安全实验室',
    description: 'Defend With Determination',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/member_avatar/DWDSEC_LOGO.png',
      nav: [
        { text: '实验室文章', link: '/articles/' },
        { text: '实验室项目', link: '/projects/' },
        { text: '实验室成员', link: '/members/' }
      ], 
      sidebar: {
        "/members/":[
          '/members/',
          'Yaoisss',
          'TXPH',
          'SmallL_U',
          'Juana_2u',
          'nLesxw',
          '808',
          'KRISS-HDB',
          'HeyAspirin',
          'QingNiao',
          'XIAO'
        ]
      }, 
      sidebarDepth: 2
    }
  }