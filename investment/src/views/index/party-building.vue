<template>
  <div class="building">
    <div class="zhong">
      <div class="dw">{{dynamic[activeImg].title}}</div>
      <div class="img-box-d">
        <img :src="dynamic[activeImg].coverImage" alt class="yi" @click.stop="$router.push('/Attracting-party/'+dynamic[activeImg].id)">
      </div>
      <div class="er">
        <img :src="item.coverImage" alt :class="{'active':index == activeImg}" v-for="(item,index) in dynamic" :key="index" class="potor"
          v-if="index < 4" @click.stop="$router.push('/Attracting-party/'+item.id)" @mouseenter="hoverChuange(index)">
      </div>
      <div class="san" style="font-size:18px">
        <div class="li">
          <div class="Journalism">
            <span class="span1">党建动态</span>
            <router-link to="/party-building-more/0" class="span2">更多</router-link>
          </div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(item,index) in dynamic" :key="index" :title="item.title" :name="index" @click.native.stop="$router.push('/Attracting-party/'+item.id)">
              <div>
                <router-link :to="'/Attracting-party/'+item.id">{{item.summary}}</router-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <div class="Journalism">
      <span class="span1">党建学习</span>
      <router-link to="/party-building-more/1" class="span2">更多</router-link>
    </div>
    <div class="xia">
      <div class="ffz">
        <ul>
          <li v-for="(item,index) in study" :key="index">
            <p>
              <router-link :to="'/Attracting-party/'+item.id">{{item.title}}</router-link>
            </p>
          </li>
        </ul>
      </div>

      <div class="ffy">
        <router-link class="lm" v-for="(item,index) in study" :key="index" v-if="index < 4" :to="'/Attracting-party/'+item.id">
          <div class="img-box-d">
            <img :src="item.coverImage" alt>
          </div>
          <h3 class="h5">{{item.title}}</h3>
        </router-link>

      </div>
    </div>
  </div>
</template>
<script>
  import api from "@/api";
  export default {
    components: {},
    data() {
      return {
        activeImg:0,
        xinwen: [
          "阿斯顿撒所大所多",
          "特瑞特瑞特瑞特惹我",
          "阿斯达四大所大所多",
          "阿斯达四大大多所"
        ],
        title: "2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!",
        dynamic:[{
          title:'',
          coverImage:''
        }], //党建动态列表
        study: [], //党建学习列表
        activeName: 1,

      };
    },
    methods: {
      hoverChuange(index) {
        this.activeImg = index;


      },
      getPartyBuildingListFun(type) {
        api
          .getPartyBuildingList({
            page: 0,
            size: 8,
            type: type //0党建动态1党建学习
          })
          .then(result => {
            // console.log(result)
            if (type === 0) {
              this.dynamic = result;
            } else if (type === 1) {
              this.study = result;
            }

          })
          .catch(err => {});
      }
    },
    computed: {
 
     
    },
    created() {
      this.getPartyBuildingListFun(0);
      this.getPartyBuildingListFun(1);
    }
  };

</script>
<style lang="less">
  @import "../../assets/tou.css";

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .float-left {
    float: left;
    margin-right: 45px;
  }

  .span1 {
    color: #012188;
  }

  .Journalism {
    border-color: #012188;
    margin-bottom: 20px;
  }

  .xia {
    height: 400px;
    display: flex;
    margin-bottom: 85px;
  }

  .ffz {
    flex: 3;
    text-align: left;
  }

  .ffy {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    padding-left: 42px;
    .img-box-d {
      width: 230px;
      height: 140px;
    }
  }

  .ffy .lm {
    flex: 0 0 50%;
    text-align: left;
  }

  .ffy .lm:nth-child(2n) {
    text-align: right;
  }

  .lm {
    flex: 0 0 50%;
    text-align: left;
  }

  .lm:nth-child(2n) {
    text-align: right;
  }

  .h5 {
    font-size: 15px;
    padding: 8px 0;
    font-weight: normal;
  }

  .building {
    .zhong {
      .img-box-d {
        width: 400px;
        height: 500px;
      }
    }
    .xia {
      .ffz {
        font-size: 18px;
        line-height: 34px;
      }
    }
    .el-collapse {
      border: 0;
    }
    .el-collapse-item__header {
      font-size: 18px;
      border-bottom: 0;
    }
    .el-collapse-item__arrow {
      display: none;
    }
    .el-collapse-item__wrap {
      border: 0;
    }
  }

</style>
