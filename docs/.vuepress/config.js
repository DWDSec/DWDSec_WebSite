module.exports = {
    //端口
    port: '80',
    // 站点配置
    lang: 'zh-CN',
    title: 'DWDSEC网络安全实验室',
    description: 'Defend With Determination',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'http://172.16.4.131:3000/avatars/36bb2f2583d6a92e0c33b9485a5e31b8?size=420',
      sidebar: {
        "/Members/":[
          '/Members/',
          'Yaoisss',
          'TXPH',
          'SmallL_U',
          'Juana_2u',
          'nLesxw'
        ]
      },
      sidebarDepth: 2
    }
  }