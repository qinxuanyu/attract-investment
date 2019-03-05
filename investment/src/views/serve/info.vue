<template>
    <div class="serve-info">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">招引服务</el-breadcrumb-item>
            <el-breadcrumb-item>服务咨询</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="main">
            <div class="info-list">
                <abstract-item></abstract-item>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
            <div class="news-list">
                <div class="now">
                    <h3 class="title">即时新闻</h3>
                    <ul>
                        <li>为缓解企业职工后顾之忧，松江区产业园内办起小儿托育园</li>
                        <li>为缓解企业职工后顾之忧，松江区产业园内办起小儿托育园</li>
                        <li>为缓解企业职工后顾之忧，松江区产业园内办起小儿托育园</li>
                    </ul>
                </div>
                <div class="img clearfix">
                    <h3 class="title">图片新闻</h3>
                    <div class="item">
                        <div class="img-box-d">
                            <img src="../../assets/activity1.png" alt="">
                        </div>
                        <p>G60科创走廊落户色谱分离材料制造企业</p>
                    </div>
                     <div class="item" style="margin-left:16px">
                        <div class="img-box-d">
                            <img src="../../assets/activity1.png" alt="">
                        </div>
                        <p>G60科创走廊落户色谱分离材料制造企业</p>
                    </div>
                </div>
                <div class="rank">
                    <h3 class="title">一周新闻排行榜</h3>
                    <ul>
                        <li>
                            <p>为缓解企业职工后顾之忧，松江区产业园内办起小儿托育园<span>654</span></p>
                        </li>
                        <li>
                            <p>为缓解企业职工后顾之忧，松江区产业园内办起小儿托育园<span>654</span></p>
                            
                        </li>
                        <li>
                            <p>为缓解企业职工后顾之忧，松江区产业园内办起小儿托育园<span>654</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import abstractItem from '@/components/abstract-item'
    export default {
        data (){
            return{

            }
        },
        components:{abstractItem}
    }
</script>
<style lang="less" scoped>
    .serve-info{
        .main{
            display: flex;
            .info-list{
                width: 870px;
                border-radius: 6px;
                padding: 0 22px;
                border: solid 1px #c2c2c2;
                box-sizing: border-box;
            }
            .news-list{
                width: 310px;
                padding-left: 18px;
                text-align: left;
                line-height: 28px;
                .title{
                    font-size: 20px;
                    margin: 40px 0 28px 0;
                }
                ul{
                    padding-left: 20px;
                    li{
                        list-style: disc;
                        cursor: pointer;
                        color: #323232;
                    }
                }
                .img{
                    .item{
                        width: 147px;
                        float: left;
                        cursor: pointer;
                        .img-box-d{
                            width: 147px;
                            height: 110px;
                        }
                        p{
                            font-size: 14px;
                            line-height: 24px;
                            color: #565656;
                        }
                    }
                }
                .rank{
                    .title{
                        color: #c81207;
                    }
                    >ul{
                        >li{
                            p{
                                span{
                                    float: right;
                                    color: #868686;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
