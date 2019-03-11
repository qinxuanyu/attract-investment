<template>
    <div class="news-list">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">招商活动</el-breadcrumb-item>
            <el-breadcrumb-item>招商峰会</el-breadcrumb-item>
        </el-breadcrumb>
        <ul class="wrap">
            <li class="item" v-for="(item,index) in listData" :key="index">
                
                <div class="img-box-d">
                    <img :src="item.image" alt="">
                </div>
                <div class="text">
                    <div class="content">
                        <p>峰会主题：{{item.title}}</p>
                        <p>峰会时间：{{item.time }}</p>
                        <p>峰会地点：{{item.address}}</p>
                        <p>主办单位：{{item.sponsorUnit}}</p>
                        <p>协办单位：{{item.coOrganizer }}</p>
                        <p>峰会内容：{{item.text}}</p>
                    </div>
                    <div class="bottom">
                        <el-button plain type="danger" @click.native.stop="$router.push('/Attracting-activities/' + item.id)">查看详情</el-button>
                        <div class="time">
                            <span>{{item.articleSource }}</span><span>{{item.time}}</span>
                        </div>
                    </div>
                </div>
            </li>
           
        </ul>
        <el-pagination background layout="prev, pager, next" @current-change="handleSizeChange" :total="total">
        </el-pagination>
    </div>
</template>
<script>
    import api from '@/api'
    export default {
        data (){
            return{
                listData:[],
                total:0
            }
        },
        methods:{
            getSummitList (){
                api.summitList({
                    page:0,
                    size:4
                }).then((result) => {
                    this.listData = result.list;
                    this.total = Math.ceil(result.total/4)
                }).catch((err) => {
                    
                });
            },
            handleSizeChange (){

            }
        },
        created (){
            this.getSummitList()
        }
    }
</script>
<style lang="less" scoped>
    .news-list{
        .wrap{
            .item{
                display: flex;
                border-bottom: 1px solid #c2c2c2;
                padding: 30px 0;
                .img-box-d{
                    width: 400px;
                    height: 290px;
                }
                .text{
                    flex: 1;
                    padding-left: 48px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .content{
                        text-align: left;
                        font-size: 18px;
                        line-height: 34px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .bottom{
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        >div{
                            span{
                                color: #868686;
                                font-size: 18px;
                                padding: 0 13px;
                                line-height: 1;
                            }
                            span:nth-child(1){
                                border-right: 1px solid #868686;

                            }
                        }
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
