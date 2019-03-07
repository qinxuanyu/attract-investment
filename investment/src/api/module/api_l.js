import fetch from '@/utils/fetch'


export default{
    homeAttractNews (){
        return fetch({
            url:'/home/homeAttractNews',
            method:'get'
        })
    },
}