import fetch from '@/utils/fetch'


export default {
  //首页
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

  //招商活动

  //查询活动列表
  investmentActivityList(data) {
    return fetch({
      url: '/investmentActivity/investmentActivityList',
      method: 'get',
      data
    })
  },

  //根据id查询招商活动
  getInvestmentActivityById(data) {
    return fetch({
      url: '/investmentActivity/getInvestmentActivityById',
      method: 'get',
      data
    })
  },


  //招引服务
  //获得招引服务列表
  getattractServeList(data) {
    return fetch({
      url: '/attractServe/attractServeList',
      method: 'get',
      data
    })
  },
  //根据id查找招引服务
  getAttractServeById(data) {
    return fetch({
      url: '/attractServe/getAttractServeById',
      method: 'get',
      data
    })
  },
//获取产品园区招商列表
   getparkOrProjectList(data) {
    return fetch({
      url: '/attractServe/parkOrProjectList',
      method: 'get',
      data
    })
  },
//服务咨询列表
   getserveList(data) {
    return fetch({
      url: '/attractServe/serveList',
      method: 'get',
      data
    })
  },
//根据id查找招引服务
   AttractServeById(data) {
    return fetch({
      url: '/attractServe/getAttractServeById',
      method: 'get',
      data
    })
  },

}
