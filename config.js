// 配置
window.Config = {

  // 站点名
  SiteName: 'Wybus网站状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur912507-8258182cfa5e7c2c21902bb9'
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 7,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://www.wybus.xyz/'
    },
    {
      text: '五邑交通维基',
      url: 'https://w.wybus.xyz'
    }
  ]
};
