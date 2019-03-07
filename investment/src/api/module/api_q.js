import fetch from '@/utils/fetch'

export default{
    homeAttractNews (){
        return fetch({
            url:'/home/homeAttractNews',
            method:'get'
        })
    },
    //招引新闻右边列表
    getNewsListRight (data){
        return fetch({
            url:'/attractNews/newsList',
            method:'get',
            data
        })
    },
    //招引新闻右边列表
    getNewsListLeft (data){
        return fetch({
            url:'/attractNews/attractNewsList',
            method:'get',
            data
        })
    }
}