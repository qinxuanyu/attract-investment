import fetch from '@/utils/fetch'


export default {
  //首页招引新闻
  homeAttractNews(data) {
    return fetch({
      url: '/home/homeAttractNews',
      method: 'get',
      data
    })
  },
  //首页招引服务
     homeAttractServe(data) {
    return fetch({
      url: '/home/homeAttractServe',
      method: 'get',
      data
    })
  },


  //首页三圈动态
     homeDynamic(data) {
    return fetch({
      url: '/home/homeDynamic',
      method: 'get',
      data
    })
  },

 //首页招商活动
     homeInvestmentActivity(data) {
    return fetch({
      url: '/home/homeInvestmentActivity',
      method: 'get',
      data
    })
  },

 //首页党建工作
     homePartyBuilding(data) {
    return fetch({
      url: '/home/homePartyBuilding',
      method: 'get',
      data
    })
  },

 //首页公告
     notice(data) {
    return fetch({
      url: '/home/notice',
      method: 'get',
      data
    })
  },

  // 轮播图接口
  getAttractphoto() {
    return fetch({
      url: '/home/picture',
      method: 'get',

    })
  },
}
