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
    },
    //三圈动态左边新闻
    getDynamicList (data){
        return fetch({
            url:'/dynamic/getDynamicList',
            method:'get',
            data
        })
    },
     //三圈动态右边新闻
     getImgOrVideoList (data){
        return fetch({
            url:'/dynamic/getImgOrVideoList',
            method:'get',
            data
        })
    },
     //党建工作
     getPartyBuildingList (data){
        return fetch({
            url:'/partyBuilding/getPartyBuildingList',
            method:'get',
            data
        })
    },
}