<template>
  <div class="serve-info">
    <!-- <tab :yi="yi" :er="er"></tab> -->
    <div class="main">
      <div class="info-list">
        <abstract-item
			v-for="(item,index) in left.list"
			:key="index"
			:title="item.title"
			:content="item.summary"
			@click.native.stop="$router.push('/Attracting-dynamic/'+item.id)"
		></abstract-item>
        <el-pagination 
			background 
			layout="prev, pager, next" 
			:total="left.total"
			@current-change="pageChange"
			>
        </el-pagination>
      </div>
      <div class="news-list">
        <div class="img">
          <h3 class="title">图片新闻</h3>
          <div class="item-wrap">
            <router-link 
              class="item" 
              v-for="(item,index) in right[1]" 
              :key="index"
              :to="'/Attracting-dynamic/'+item.id"
              >
                <div class="img-box-d">
                <img :src="item.coverImage" alt="">
                </div>
              <p>{{item.title}}</p>
            </router-link>
          </div>
			
          
        </div>
        <div class="img clearfix">
          <h3 class="title">视频新闻</h3>
          <div class="item-wrap">
            <router-link class="item" v-for="(item,index) in right[2]" :key="index" :to="'/Attracting-dynamic/'+item.id">
            <div class="img-box-d">
              <img :src="item.coverImage" alt="">
            </div>
            <p>{{item.title}}</p>
          </router-link>
          </div>
          
         
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
  import abstractItem from '@/components/abstract-item'
  import tab from '../../components/table.vue'
  import api from '@/api'
  export default {
    data() {
		return {
			yi: '招引服务',
			er: '深圳产业园招商',
			left:{
				list:[],
				total:0,
				page:0
			},
			right:{
				1:[],
				2:[]
			}
		}
    },
    components: {
      abstractItem,
      tab
    },
    methods:{
		//左边新闻列表
		getDynamicListFun (){
			api.getDynamicList({
				page:this.left.page,
				size:7	
			}).then((result) => {
				this.left.list = result.list;
				this.left.total = result.total
			}).catch((err) => {
			
			});
		},
		pageChange (val){
			this.left.page = val;
			this.getDynamicListFun()
		},
		//右边新闻
		getImgOrVideoListFun (type){
			api.getImgOrVideoList({
				page:0,
				size:4,
				type:type //类型1图片新闻2视频新闻 默认1
			}).then((result) => {
				this.right[type] = result;
			}).catch((err) => {
				
			});
		}
	},
	created (){
		this.getDynamicListFun();
		this.getImgOrVideoListFun(1);
		this.getImgOrVideoListFun(2)
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
        width: 330px;
        padding-left: 18px;
        text-align: left;
        line-height: 28px;
        box-sizing: border-box;
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
      width: 100%;
          .item-wrap{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .item {
            width: 147px;
            cursor: pointer;
            // margin-right: 8px;
            overflow: hidden;
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
