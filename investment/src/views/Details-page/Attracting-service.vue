<template>
  <div class="zw">
    <tab :yi="yi" :er="er"></tab>
    <div class="flex">
      <div class="tx" v-for="(item, index) in listData" :key="index">
        <div class="zt">
          <router-link :to="type == 0 ?  '/garden/' + item.id: '/zyfu-index/' +item.id">
            <div class="img-box-d">
              <img v-lazy="item.coverImage " alt>
            </div>
          </router-link>
        </div>
        <div class="yt">
          <h2 class="h2">{{item.title}}</h2>
          <h3 class="h3">园区类别:{{item.parkType }}</h3>
          <h3 class="h3">园区级别:{{item.parkLevel}}</h3>
          <h3 class="h3">园区地址:{{item.parkAddress}}</h3>
          <h3 class="h3">园区单位:{{item.investmentUnit}}</h3>
          <!--<div style="display:flex;margin-top: 12px;">
            <span style="flex:1.1">园区地址：</span>
            <span style="flex:3">{{item.parkAddress }}</span>
          </div>-->
          <!--<div style="display:flex;margin-top: 12px;">
            <span style="flex:1.1">园区单位：</span>
            <span style="flex:3">{{item.investmentUnit }}</span>
          </div>-->
          <div class="time">{{item.investmentTime }}</div>
        </div>
      </div>
    </div>

    <el-pagination prev-text="上一页" next-text="下一页" background layout="prev, pager, next" @current-change="pageChange" :total="total"></el-pagination>
  </div>
</template>
<script>
  import tab from "../../components/table.vue";
  import api from '@/api'
  export default {
    components: {
      tab
    },
    data() {
      return {
        yi: "首页",
        er: "新闻",
        title: "2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!",
        type: null, //0产业园区招商1招商引资项目 
        page: 0,
        listData: [],
        total: 0
      };
    },
    methods: {
      getParkOrProjectList() {
        api.parkOrProjectList({
          type: this.type,
          size: 8,
          page: this.page
        }).then((result) => {
          // console.log(result);
          this.listData = result.list;
          this.total = result.total
        }).catch((err) => {

        });
      },
      pageChange(val) {
        this.page = val;
        this.getParkOrProjectList()
      }
    },
    computed: {},
    created() {
      this.type = this.$route.params.type;
      this.getParkOrProjectList()
    }
  };

</script>
<style lang="less" scoped>
  .zw {
    margin-bottom: 80px;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    margin-top: 45px;

    .tx {
      flex: 0 0 50%;
      height: 265px;
      display: flex;
      .zt {
        flex: 0.95;
        height: 100%;
        text-align: left;
        .img-box-d {
          width: 280px;
          height: 234px;
        }
      }
      .yt {
        flex: 1;
        height: 100%;
        text-align: left;
        .h2 {
          font-size: 20px;
        }
        .h3 {
          font-weight: normal;
          font-size: 17px;
          margin-top: 20px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 305px;
        }
        .time {
          margin-top: 12px;
          font-size: 17px;
        }
        div>span {
          font-size: 17px;
        }
      }
    }
  }

</style>
