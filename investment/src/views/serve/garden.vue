<template>
    <div class="garden">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">招引服务</el-breadcrumb-item>
            <el-breadcrumb-item>深圳产业园招商</el-breadcrumb-item>
            <el-breadcrumb-item>深圳产业园</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="big-img img-box-d">
            <img v-lazy="detailsData.coverImage" alt="">
        </div>
        <div class="details">
            <div class="img-box-d">
                <img v-lazy="detailsData.parkCoverImage" alt="">
            </div>
            <div class="text">
                <h3 class="title">园区概况</h3>
                <p v-html="detailsData.parkContent">
                </p>
                <router-link class="btn" to="">查看详情>></router-link>
            </div>
        </div>
        <div class="facility">
            <div class="item cleafix">
                <el-button type="primary">区位优势</el-button>
                <div class="img-box-d">
                    <img :src="detailsData.regionalCoverImage " alt="">
                </div>
                <p v-html="detailsData.regionalContent">
                    
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
             <div class="item cleafix">
                <el-button type="primary">地理交通</el-button>
                <div class="img-box-d">
                    <img v-lazy="detailsData.geographyCoverImage" alt="">
                </div>
                <p v-html="detailsData.geographyContent">
                   
                    
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
             <div class="item cleafix">
                <el-button type="primary">配套设施</el-button>
                <div class="img-box-d">
                    <img v-lazy="detailsData.matchingCoverImage" alt="">
                </div>
                <p v-html="detailsData.matchingContent">
                    
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
            
        </div>
        <div class="swiper">
            <h3 class="title">园区概览</h3>
            <el-carousel :interval="5000" arrow="always" height="240px">
                <el-carousel-item >
                    <div class="swiper-wrap">
                        <div class="box">
                            <div class="img-box-d">
                                <img src="../../assets/activity1.png" alt="">
                            </div>
                            <p>深圳198设计创意园</p>
                        </div>
                        <div class="box">
                            <div class="img-box-d">
                                <img src="../../assets/activity2.png" alt="">
                            </div>
                            <p>深圳198设计创意园</p>
                        </div>
                        <div class="box">
                            <div class="img-box-d">
                                <img src="../../assets/activity3.png" alt="">
                            </div>
                            <p>深圳198设计创意园</p>
                        </div>
                        <div class="box">
                            <div class="img-box-d">
                                <img src="../../assets/activity4.png" alt="">
                            </div>
                            <p>深圳198设计创意园</p>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item >
                    <div class="swiper-wrap">
                        <div class="box">
                            <div class="img-box-d">
                                <img src="../../assets/activity1.png" alt="">
                            </div>
                            <p>深圳198设计创意园</p>
                        </div>
                        <div class="box">
                            <div class="img-box-d">
                                <img src="../../assets/activity2.png" alt="">
                            </div>
                            <p>深圳198设计创意园</p>
                        </div>
                        <div class="box">
                            <div class="img-box-d">
                                <img src="../../assets/activity3.png" alt="">
                            </div>
                            <p>深圳198设计创意园</p>
                        </div>
                        <div class="box">
                            <div class="img-box-d">
                                <img src="../../assets/activity4.png" alt="">
                            </div>
                            <p>深圳198设计创意园</p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="enterprise">
            <div class="item">
                <h3 class="title">入驻企业代表</h3>
                <div class="img-box-d">
                    <img v-lazy="detailsData.enterpriseCoverImage" alt="">
                </div>
                <p v-html="detailsData.enterpriseContent">
                    
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
            <div class="item">
                <h3 class="title">文化产业</h3>
                <div class="img-box-d">
                    <img v-lazy="detailsData.cultureCoverImage" alt="">
                </div>
                <p v-html="detailsData.cultureContent">
                    
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
        </div>
        <div class="recommend">
            <h3 class="title">园区推荐</h3>
            <ul>
                <li 
                    v-for="(item,index) in projectList"
                    :key="index"
                >
                    <router-link to="">
                        <div class="img-box-d">
                            <img v-lazy="item.coverImage" alt="">
                        </div>
                        <p>{{item.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import api from '@/api'
    export default {
        data (){
            return{
                id:null,
                detailsData:{},
                projectList:[]
            }
        },
        methods:{
            //详情
            getAttractServeByIdFun (){
                api.getAttractServeById({
                    id:this.id,

                }).then((result) => {
                    this.detailsData = result;
                }).catch((err) => {
                    
                });
            },
            //园区推荐列表
            getParkOrProjectList (){
                api.parkOrProjectList({
                    page:0,
                    size:5
                }).then((result) => {
                    if(result.list.length){
                        this.projectList = result.list;
                    }
                }).catch((err) => {
                    
                });
            }
        },
        created (){
            this.id = this.$route.params.id;
            this.getAttractServeByIdFun();
            this.getParkOrProjectList()
        }
    }
</script>
<style lang="less" >
    .garden{
        .big-img{
            width: 100%;
            height: 440px;
        }
        .details{
            padding: 25px 20px;
            border-radius: 8px;
            border: 1px solid #c2c2c2;
            display: flex;
            margin-top: 30px;
            .img-box-d{
                width: 400px;
                height: 340px;
            }
            .text{
                flex: 1;
                padding: 0 20px;
                display: flex;
                flex-direction: column;

                .title{
                    font-size: 20px;
                    text-align: left;
                }
                >p{
                    flex: 1;
                    max-height: 293px;
                    overflow: hidden;
                    font-size: 14px;
                    line-height: 30px;
                }
                .btn{
                    text-align: right;
                    color: #c81207;
                }
            }
        }
        .facility{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 40px 0 46px 0;
            .item{
                // flex: 1;
                 width: 380px;
                .img-box-d{
                    width: 380px;
                    height: 300px;
                    margin-top: 15px;
                }
                .el-button--primary{
                    padding: 7px 10px;
                }
                >p{
                    height: 120px;
                    font-size: 14px;
                    line-height: 30px;
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp:4;
                    -webkit-box-orient:vertical;

                }
                
            }
        }
        .swiper{
            >.title{
                font-size: 20px;
                line-height: 34px;
            }
            .swiper-wrap{
                display: flex;
                // justify-content: space-around;
                
                .box{
                    margin: 0 20px;
                    .img-box-d{
                        width: 260px;
                        height: 210px;
                    }
                    >p{
                        line-height: 34px;
                        color: #565656;
                    }
                }
                
            }
            .el-carousel__arrow{
                background-color: #9a9a9a;
            }
        }
        .enterprise{
            display: flex;
            margin-top: 70px;
            justify-content: space-between;
            .item{
                width: 580px;
                .title{
                    font-size: 20px;
                    line-height: 34px;
                }
                .img-box-d{
                    width: 580px;
                    height: 440px;
                    margin-bottom: 20px;
                    margin-top: 20px;
                }
                >p{
                    line-height: 34px;
                    color: #323232;
                    text-align: left;
                    height: 102px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp:3;
                    -webkit-box-orient: vertical;
                }
            }
            
        }
        .recommend{
            .title{
                font-size: 20px;
                margin: 54px 0 34px 0;
            }
            >ul{
                display: flex;
                justify-content: space-between;
                >li{
                    .img-box-d{
                        width: 220px;
                        height: 190px;
                    }
                    p{
                        margin-top: 10px !important;
                    }
                }
            }
        }
        .el-button--danger.is-plain{
            float: left;
            color: #c81207;
            background: #fff;
            border-color: #c81207;
            padding: 11px 20px;
            border-radius: 10px;
        }
        .el-button--danger.is-plain:hover{
            color: #fff;
            background: #c81207;
        }
    }
</style>
