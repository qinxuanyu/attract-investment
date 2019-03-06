<template>
    <div class="news">
        <div class="left">
            <div class="forthwith">
                <h3 class="title">即时新闻</h3>
                <ul>
                    <li>
                        <p>苏州外贸进口首月“开门红”！苏州外贸进口首月“开门红”！苏州外贸进口首月“开门红”！</p>
                    </li>
                    <li>
                        <p>苏州外贸进口首月“开门红”！</p>
                    </li>
                    <li>
                        <p>苏州外贸进口首月“开门红”！</p>
                    </li>
                    <li>
                        <p>苏州外贸进口首月“开门红”！</p>
                    </li>
                    
                </ul>
            </div>
            <div class="img-news">
                <h3 class="title">图片新闻</h3>
                <div class="box">
                    <div class="item">
                        <img src="http://img0.imgtn.bdimg.com/it/u=3862008110,2473046816&fm=26&gp=0.jpg" alt="">
                        <p>
                            G60科创走廊落户色谱分离材料制造企业
                        </p>
                    </div>
                    <div class="item">
                        <img src="http://img0.imgtn.bdimg.com/it/u=3862008110,2473046816&fm=26&gp=0.jpg" alt="">
                        <p>
                            G60科创走廊落户色谱分离材料制造企业
                        </p>
                    </div>
                </div>
            </div>
            <div class="rank">
                <h3 class="title">一周新闻排行榜</h3>
                <ul>
                    <li>
                        上海“2019年优化营商环境、促进经济发展”大会正式举行...
                        <span class="num">210</span>
                    </li>
                    <li>
                        上海“2019年优化营商环境、促进经济发展”大会正式举行...
                        <span class="num">210</span>
                    </li>
                    <li>
                        上海“2019年优化营商环境、促进经济发展”大会正式举行...
                        <span class="num">210</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right">
            <ul>
                <li>
                   <abstract-item></abstract-item>
                </li>
            </ul>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import abstractItem from '@/components/abstract-item'
    export default {
        components:{
            abstractItem
        }
    }
</script>
<style lang="less">
    .news{
        display: flex;

        .left{
            width: 330px;
            padding-right: 18px;
            box-sizing: border-box;
            font-size: 16px;
            text-align: left;
            .title{
                font-size: 20px;
                margin: 25px 0;
                color: #323232;
            }
            .forthwith{
                li{
                    cursor: pointer;
                    list-style-type: disc;
                    font-size: 16px;
                    p{
                        line-height: 24px;
                    }
                }
                ul{
                    padding-left: 20px;
                }
            }
            .img-news{
                .box{
                    display: flex;
                    justify-content: space-between;
                    .item{
                        width: 147px;
                        cursor: pointer;
                        img{
                            width: 100%;
                            height: 110px;
                        }
                        p{
                            font-size: 16px;
                            line-height: 24px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }
                }
            }
            .rank{
                .title{
                    color: #c81207;
                }
                li{
                    cursor: pointer;
                    list-style-type: disc;
                    font-size: 16px;
                    line-height: 24px;
                    span{
                        padding-left: 20px;
                        // text-align: right;
                        float: right;
                        color: #868686;
                    }
                    
                }
                ul{
                    padding-left: 20px;
                }
            }
        }
        .right{
            width: 870px;
            box-sizing: border-box;
            border-radius: 6px;
            border: solid 1px #c2c2c2;
            padding: 0 23px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            >ul{
                >li{
                    
                }
            }
            
        }
    }
</style>
