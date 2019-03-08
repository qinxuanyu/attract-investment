import fetch from '@/utils/fetch'

console.log(fetch);
export default {
  //首页接口
  homeAttractNews(data) {
    return fetch({
      url: '/home/homeAttractNews',
      method: 'get',
      data
    })
  },

  // homeAttractNew(data) {
  //   return axios.get('/home/homeAttractNews',{data})
  // },



  // 轮播图接口
  getAttractphoto() {
    return fetch({
      url: '/home/picture',
      method: 'get',

    })
  },
}
