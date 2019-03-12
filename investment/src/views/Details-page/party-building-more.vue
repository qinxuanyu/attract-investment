<template>
  <div>

<tab :yi="yi" :er="er"></tab>

  <div class="news">
    <div class="right">
      <ul>
        <li>
          <abstract-item v-for="(item,index) in rigthNews.list" :key="index" :title="item.title" :content="item.summary" @click.native.stop="$router.push('/Attracting-party/'+item.id)"></abstract-item>
        </li>

      </ul>
      <el-pagination background layout="prev, pager, next" @current-change="handleSizeChange" :total="rigthNews.total">
      </el-pagination>
    </div>

    <div class="left">
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
      <div class="img-news">
        <h3 class="title">图片新闻</h3>
        <div class="box">
          <router-link :to="'/Attracting-news/'+item.id" class="item" v-for="(item,index) in leftNews[1]" :key="index">
            <img :src="item.coverImage" alt="">
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
        yi: '党建工作',
        er: '更多',
        rigthNews: {
          total: 0,
          list: [],
          page: 0,
          size: 7
        },
        leftNews: {
          0: [],
          1: [],
        }
      }
    },
    components: {
      abstractItem,
        tab,
    },
    mixins:[rankNews],
    methods: {
      //右边新闻
      getNewsListRightFun() {
        api.getBuildingVOList({
          page: this.rigthNews.page,
          size: this.rigthNews.size,
          type:this.$route.params.id   //0党建动态1党建学习
        }).then((result) => {
          
          this.rigthNews.total = result.total
          this.rigthNews.list = result.list
        })
      },
      handleSizeChange(val) {
        // console.log(val)
        this.rigthNews.page = val - 1;
        this.getNewsListRightFun()
      },

      //左边新闻
      getNewsListLeftFun(type) {
        api.getNewsListLeft({
          page: 0,
          size: type === 0 ? 7 : 2,
          type: type //类型0即时新闻1图片新闻 默认查找全部
        }).then((result) => {
          this.leftNews[type] = result;
        }).catch((err) => {

        });
      }
    },
    created() {
// console.log(this.$route.params.id);
      this.getNewsListRightFun();
      this.getNewsListLeftFun(0);
      this.getNewsListLeftFun(1)
    }
  }

</script>
<style lang="less">
  .news {
    display: flex;

    .left {
      width: 330px;
      padding-left: 26px;

      box-sizing: border-box;
      font-size: 16px;
      text-align: left;
      .title {
        font-size: 20px;
        margin: 25px 0;
        color: #323232;
      }
      .forthwith {
        li {
          cursor: pointer;
          list-style-type: disc;
          font-size: 16px;
          p {
            line-height: 24px;
          }
        }
        ul {
          padding-left: 20px;
        }
      }
      .img-news {
        .box {
          display: flex;
          justify-content: space-between;
          .item {
            width: 147px;
            cursor: pointer;
            img {
              width: 100%;
              height: 110px;
            }
            p {
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
      .rank {
        .title {
          color: #c81207;
        }
        li {
          cursor: pointer;
          list-style-type: disc;
          font-size: 16px;
          line-height: 24px;
          span {
            padding-left: 20px; // text-align: right;
            float: right;
            color: #868686;
          }

        }
        ul {
          padding-left: 20px;
        }
      }
    }
    .right {
      width: 870px;
      box-sizing: border-box;
      border-radius: 6px;
      border: solid 1px #c2c2c2;
      padding: 0 23px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      >ul {
        >li {}
      }

    }
  }

</style>
