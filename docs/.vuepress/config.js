module.exports = {
    title: '大李编程',
    description: 'bigbigli_大李',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: 'C++教程', link: '/accumulate/' },
        {text: 'Python教程', link: '/algorithm/'},
        {text: 'Scratch教程', link: 'https://baidu.com'}
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 3, // 侧边栏显示2级
    }
  };
