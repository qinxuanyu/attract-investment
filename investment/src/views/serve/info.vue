<template>
  <div class="serve-info">
    <tab :yi="yi" :er="er"></tab>
    <div class="main">
      <div class="info-list">
        <abstract-item 
			v-for="(item,index) in infoList"
			:key="index"
			:title="item.title"
			:content="item.summary"
			@click.native.stop="$router.push('')"
		></abstract-item>
        <el-pagination background layout="prev, pager, next" @current-change="pageChange" :total="total">
        </el-pagination>
      </div>
      <!-- <div class="news-list">
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
      </div> -->
	<div class="news-list">
      <div class="forthwith">
        <h3 class="title">即时新闻</h3>
        <ul>
          <li v-for="(item,index) in leftNews[0]" :key="index">
            <p>
              <router-link :to="'/Attracting-news/'+item.id">{{item.title}}</router-link>
            </p>
          </li>


        </ul>
      </div>
      <div class="img">
        <h3 class="title">图片新闻</h3>
        <div class="box">
          <router-link :to="'/Attracting-news/'+item.id" class="item" v-for="(item,index) in leftNews[1]" :key="index">
		  	<div class="img-box-d">
            	<img :src="item.coverImage" alt="">
			</div>
            <p>
              {{item.title}}
            </p>
          </router-link>

        </div>
      </div>
      <div class="rank">
        <h3 class="title">一周新闻排行榜</h3>
        <ul>
         <li v-for="(item,index) in rankNewsList" :key="index" @click.stop="$router.push('/Attracting-news/'+item.id)">
              {{item.title}}
              <span class="num">{{item.uniqueVisitor}}</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
	import abstractItem from '@/components/abstract-item'
	import tab from '../../components/table.vue'
	import api from '@/api'
	import rankNews from '@/mixins/rankNews'
	export default {
		data() {
			return {
				yi: '招引服务',
				er: '深圳产业园招商',
				leftNews: {
					0: [],
					1: [],
				},
				infoList:[],
				total:0,
				page:0
			}
		},
		mixins:[rankNews],
		components: {
			abstractItem,
			tab
		},methods:{
			 //新闻
			getNewsListLeftFun(type) {
				api.getNewsListLeft({
					page: 0,
					size: type === 0 ? 7 : 2,
					type: type //类型0即时新闻1图片新闻 默认查找全部
				}).then((result) => {
					this.leftNews[type] = result;
				}).catch((err) => {

				});
			},
			//服务资讯
			getAttractServeListFun (){
				api.getserveList({
					page:0,
					size:8,
				}).then((result) => {
					this.infoList = result.list;
					this.total = result.total 
				}).catch((err) => {
					
				});
			},
			pageChange (val){
				this.page = val;
				this.getAttractServeListFun()
			}
		},
		created (){
			this.getAttractServeListFun();
      		this.getNewsListLeftFun(0);
      		this.getNewsListLeftFun(1)
		}

	}

</script>
<style lang="less" scoped>
  .serve-info {
    .main {
      display: flex;
      .info-list {
        width: 870px;
        border-radius: 6px;
        padding: 0 22px;
        border: solid 1px #c2c2c2;
        box-sizing: border-box;
      }
      .news-list {
        width: 310px;
        padding-left: 18px;
        text-align: left;
        line-height: 28px;
        .title {
          font-size: 20px;
          margin: 40px 0 28px 0;
        }
        ul {
          padding-left: 20px;
          li {
            list-style: disc;
            cursor: pointer;
            color: #323232;
          }
        }
        .img {
			.box{
				display: flex;
				justify-content: space-between;
			}
          .item {
            width: 147px;
            // float: left;
            cursor: pointer;
            .img-box-d {
              width: 147px;
              height: 110px;
            }
            p {
              font-size: 14px;
              line-height: 24px;
			  color: #565656;
			  overflow: hidden;
			  text-overflow: ellipsis;
			  white-space: nowrap;
            }
          }
		}
		
        .rank {
          .title {
            color: #c81207;
          }
          >ul {
            >li {
              p {
                span {
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
