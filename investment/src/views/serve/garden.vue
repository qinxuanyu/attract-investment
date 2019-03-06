<template>
    <div class="garden">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">招引服务</el-breadcrumb-item>
            <el-breadcrumb-item>深圳产业园招商</el-breadcrumb-item>
            <el-breadcrumb-item>深圳产业园</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="big-img img-box-d">
            <img src="../../assets/activity3.png" alt="">
        </div>
        <div class="details">
            <div class="img-box-d">
                <img src="../../assets/activity4.png" alt="">
            </div>
            <div class="text">
                <h3 class="title">园区概况</h3>
                <p>
                    滨鸿创业园/滨旅产业园两大产业园区由天津滨海旅游区投资控股有限公司全资子公司天津滨海旅游区建设开发有限公
                    司开发。
                    滨鸿创业园销售面积为5.2万平方米，包括六栋二层式厂房、三栋六层式研发楼。园内1-6号楼为标准工业厂房，二层
                    式设计，首层高6.9m、二层高6m。7-9号楼为六层到顶的研发楼，研发楼为六层式设计，首层高4.8m、二层至五层
                    3.6m、顶层3.9m。
                    园区已全面开启整体租(售)服务，全部厂房和研发楼均按照国际化标准提供多行业、多业态生产模式的全功能服务体系
                    ，可以为来此发展的企业提供多元化和全方位的优质服务。滨旅产业园则由14栋标准厂房组成，总建筑面积15万平方
                    米，园区以科技为主导力量，打造了一个以科技产业为核心和动力的城市新概念工业园区，并承载着中新天津生态城快
                    速发展的“启动器”和聚集资源的“吸附器”的重要使命
                </p>
                <router-link class="btn" to="">查看详情>></router-link>
            </div>
        </div>
        <div class="facility">
            <div class="item cleafix">
                <el-button type="primary">区位优势</el-button>
                <div class="img-box-d">
                    <img src="../../assets/activity1.png" alt="">
                </div>
                <p>
                    中新天津生态城地处国家级新区——天津市滨海新区北部，
                    滨海新区作为国务院批准的第一个国家综合改革创新区，一
                    直致力于发展经济产业。中新天津生态城是中国、新加坡两
                    国政府战略性合作项目，生态城的建设显示
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
             <div class="item cleafix">
                <el-button type="primary">地理交通</el-button>
                <div class="img-box-d">
                    <img src="../../assets/activity1.png" alt="">
                </div>
                <p>
                    中新天津生态城地处国家级新区——天津市滨海新区北部，
                    滨海新区作为国务院批准的第一个国家综合改革创新区，一
                    直致力于发展经济产业。中新天津生态城是中国、新加坡两
                    
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
             <div class="item cleafix">
                <el-button type="primary">配套设施</el-button>
                <div class="img-box-d">
                    <img src="../../assets/activity1.png" alt="">
                </div>
                <p>
                    中新天津生态城地处国家级新区——天津市滨海新区北部，
                    滨海新区作为国务院批准的第一个国家综合改革创新区，一
                    直致力于发展经济产业。中新天津生态城是中国、新加坡两
                    国政府战略性合作项目，生态城的建设显示
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
                    <img src="http://img1.imgtn.bdimg.com/it/u=3056033225,1015569392&fm=26&gp=0.jpg" alt="">
                </div>
                <p>
                    深圳市腾讯计算机系统有限公司成立于1998年11月 ，由马化腾、张志东、许晨
                    晔、陈一丹、曾李青五位创始人共同创立。 是中国最大的互联网综合服务提供商
                    之一，也是中国服务用户最多的互联网企业之一
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
            <div class="item">
                <h3 class="title">文化产业</h3>
                <div class="img-box-d">
                    <img src="http://img1.imgtn.bdimg.com/it/u=3056033225,1015569392&fm=26&gp=0.jpg" alt="">
                </div>
                <p>
                    深圳市腾讯计算机系统有限公司成立于1998年11月 ，由马化腾、张志东、许晨
                    晔、陈一丹、曾李青五位创始人共同创立。 是中国最大的互联网综合服务提供商
                    之一，也是中国服务用户最多的互联网企业之一
                </p>
                <el-button plain type="danger">查看详情</el-button>
            </div>
        </div>
        <div class="recommend">
            <h3 class="title">园区推荐</h3>
            <ul>
                <li>
                    <div class="img-box-d">
                        <img src="../../assets/activity1.png" alt="">
                    </div>
                    <p>深圳产业园</p>
                </li>
                <li>
                    <div class="img-box-d">
                        <img src="../../assets/activity2.png" alt="">
                    </div>
                    <p>深圳产业园</p>
                </li>
                <li>
                    <div class="img-box-d">
                        <img src="../../assets/activity2.png" alt="">
                    </div>
                    <p>深圳产业园</p>
                </li>
                <li>
                    <div class="img-box-d">
                        <img src="../../assets/activity2.png" alt="">
                    </div>
                    <p>深圳产业园</p>
                </li>
                <li>
                    <div class="img-box-d">
                        <img src="../../assets/activity2.png" alt="">
                    </div>
                    <p>深圳产业园</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        
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
