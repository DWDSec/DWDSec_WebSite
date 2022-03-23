module.exports = {
    //端口
    port: '80',
    // 站点配置
    lang: 'zh-CN',
    title: 'DWDSEC网络安全实验室',
    description: '这里是DWDSEC网络安全实验室的自留地。',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      sidebar: {
        "/Members/":[
          '/Members/',
          'Yaoisss',
          'TXPH',
          'SmallL_U',
          'Juana_2u'
        ]
      },
      sidebarDepth: 2
    }
  }