<template>
  <div class="zw">
    <tit :title="title"></tit>
    <tab :yi="yi" :er="er"></tab>
    <div class="flex">
      <div class="tx" v-for="(item, index) in 8" :key="index">
        <div class="zt">
          <router-link to="/zyfu-index">
             <img src="../../assets/zs-s.png" alt="">
            </router-link>         
        </div>
        <div class="yt">
          <h2 class="h2">深圳高新区</h2>
          <h3 class="h3">园区类别 : 高薪技术</h3>
          <h3 class="h3">园区级别 : 国家级</h3>
          <div style="display:flex;margin-top: 12px;">
            <span style="flex:1.1">园区地址 : </span>
            <span style="flex:3">深圳市罗湖区高新区软件大厦18楼</span>
          </div>
          <div style="display:flex;margin-top: 12px;">
            <span style="flex:1.1">园区地址 : </span>
            <span style="flex:3">深圳市罗湖区高新区软件大厦18楼</span>
          </div>
          <div class="time">2019-2-4</div>
        </div>
      </div>

    </div>

 
        <el-pagination prev-text="上一页" next-text="下一页" background layout="prev, pager, next" :total="1000">
        </el-pagination>
  </div>

</template>
<script>
  import tab from '../../components/table.vue'
  import tit from '../../components/title.vue'
  export default {

    components: {
      tab,
      tit
    },
    data() {
      return {
        yi: '首页',
        er: '新闻',
        title: '2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!'

      }
    },
    methods: {

    },
    computed: {

    }
  }

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
          margin-top: 12px;
        }
        .time {
          margin-top: 12px;
          font-size: 17px;

        }
        div>span{
            font-size: 17px;
        }
      }
    }
  }

</style>
