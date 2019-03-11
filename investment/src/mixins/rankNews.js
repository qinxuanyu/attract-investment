import api from '@/api'
export default {
    data() {
        return {
            rankNewsList:[]
        }
    },
    methods: {
        getInstantNewsFun (){
            api.getInstantNews().then((result) => {
                if(result.length){
                    this.rankNewsList = result;
                }
            }).catch((err) => {
                
            });
        }
    },
    created() {
       this.getInstantNewsFun() 
    },
}