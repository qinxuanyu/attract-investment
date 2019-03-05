<template>
    <section class="activity">
        <div class="top">
            <div class="big">
                <img src="https://f11.baidu.com/it/u=3485965900,273505215&fm=72" alt="">
                <p>2018第一财经金融峰会，首席经济学家展望20192018年12月5日举行</p>
            </div>            
            <div class="list">
                <div class="title">更多</div>
                <ul class="box">
                    <li>
                        2019北京国际数字经济博览会
                    </li>
                    <li>
                        2019第八届上海国际制冷、空调和新风系列发布会
                    </li>
                    <li>
                        2019第八届上海国际制冷、空调和新风系列发布会
                    </li>
                </ul>
            </div>
        </div>
        <!-- 招引访谈 -->
        <div class="interview">
            <div class="title">招引访谈</div>
            <div class="wrap">
                <div class="item">
                    <ul class="text-list">
                        <li>
                            河南驻马店现场采访实录：招商岗位上河南驻马店现场采访实录：招商岗位上...
                        </li>
                        <li>
                            河南驻马店现场采访实录：招商岗位上...
                        </li>
                        <li>
                            河南驻马店现场采访实录：招商岗位上...
                        </li>
                    </ul>
                    <ol class="img-wrap">
                        <li class="img-box-d">
                            <img src="http://img1.imgtn.bdimg.com/it/u=1486776903,1853515222&fm=26&gp=0.jpg" alt="">
                        </li>
                        <li class="img-box-d">
                            <img src="http://img1.imgtn.bdimg.com/it/u=1486776903,1853515222&fm=26&gp=0.jpg" alt="">
                        </li>
                    </ol>
                </div>
                <div class="item">
                    <ul class="text-list">
                        <li>
                            河南驻马店现场采访实录：招商岗位上河南驻马店现场采访实录：招商岗位上...
                        </li>
                        <li>
                            河南驻马店现场采访实录：招商岗位上...
                        </li>
                        <li>
                            河南驻马店现场采访实录：招商岗位上...
                        </li>
                    </ul>
                    <ol class="img-wrap">
                        <li class="img-box-d">
                            <img src="http://img1.imgtn.bdimg.com/it/u=1486776903,1853515222&fm=26&gp=0.jpg" alt="">
                        </li>
                        <li class="img-box-d">
                            <img src="http://img1.imgtn.bdimg.com/it/u=1486776903,1853515222&fm=26&gp=0.jpg" alt="">
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <!-- //实地访谈 -->
        <div class="interview">
            <div class="title">招引访谈</div>
            <div class="wrap">
                <div class="item">
                    <ol class="img-wrap">
                        <li class="img-box-d">
                            <img src="http://img1.imgtn.bdimg.com/it/u=1486776903,1853515222&fm=26&gp=0.jpg" alt="">
                        </li>
                        <li class="img-box-d">
                            <img src="http://img1.imgtn.bdimg.com/it/u=1486776903,1853515222&fm=26&gp=0.jpg" alt="">
                        </li>
                    </ol>
                    <ul class="text-list">
                        <li>
                            河南驻马店现场采访实录：招商岗位上河南驻马店现场采访实录：招商岗位上...
                        </li>
                        <li>
                            河南驻马店现场采访实录：招商岗位上...
                        </li>
                        <li>
                            河南驻马店现场采访实录：招商岗位上...
                        </li>
                    </ul>
                    
                </div>
                <div class="item">
                    
                    <ol class="img-wrap">
                        <li class="img-box-d">
                            <img src="http://img1.imgtn.bdimg.com/it/u=1486776903,1853515222&fm=26&gp=0.jpg" alt="">
                        </li>
                        <li class="img-box-d">
                            <img src="http://img1.imgtn.bdimg.com/it/u=1486776903,1853515222&fm=26&gp=0.jpg" alt="">
                        </li>
                    </ol>
                    <ul class="text-list">
                        <li>
                            河南驻马店现场采访实录：招商岗位上河南驻马店现场采访实录：招商岗位上...
                        </li>
                        <li>
                            河南驻马店现场采访实录：招商岗位上...
                        </li>
                        <li>
                            河南驻马店现场采访实录：招商岗位上...
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
    .activity{
        .top{
            display: flex;
            .big{
                width: 737px;
                height: 412px;
                position: relative;
                overflow: hidden;
                cursor: pointer;
                >img{
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
                >p{
                    width: 100%;
                    padding-left: 5px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    font-size: 18px;
                    color: #fff;
                    background-color: #c81207;
                    line-height: 46px;
                    text-align: left;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .list{
                width: 463px;
                padding-left: 30px;
                box-sizing: border-box;
                .title{
                    text-align: right;
                    font-size: 18px;
                    padding-bottom: 20px;
                    color: #878787;
                    border-bottom: 1px solid #00238c;
                }
                .box{
                    text-align: left;
                    font-size: 18px;
                    line-height: 34px;
                    li{
                        cursor: pointer;
                    }
                }
            }
        }
        .interview{
            >.title{
                font-size: 20px;
                color: #323232;
                margin: 40px 0 27px 0;
                text-align: left;
            }
            .wrap{
                display: flex;
                justify-content: space-between;
                .item{
                    display: flex;
                    width: 580px;
                    justify-content: space-between;
                    .text-list{
                        // padding-right: 18px;
                        width: 290px;
                        font-size: 16px;
                        color: #565656;
                        line-height: 34px;
                        text-align: left;
                        li{
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            cursor: pointer;
                        }
                    }
                    .img-wrap{
                        .img-box-d{
                            width: 270px;
                            height: 180px;
                        }
                        li{
                            cursor: pointer;
                        }
                    }
                }
                
            }
        }
    }
</style>
