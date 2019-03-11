<template>
  <div class="zw">
    <tab :yi="yi" :er="er" :san="san"></tab>
    <img :src="this.listContent.coverImage" alt="" style="margin-top: 22px;">
    <div class="tx">
      <div class="er" v-for="(item, index) in list" :class="{'active':index==cu}" ref="ss" @click="change(index)">{{item}}</div>
    </div>
    <div v-if="cu==0">
      <p class="p" v-html="this.listContent.parkContent">
      </p>
    </div>
    <div v-if="cu==1">
      <p class="p" v-html="this.listContent.enterpriseContent">
      </p>
    </div>

    <div v-if="cu==2">
      <p class="p">滨鸿创业园/滨旅产业园两大产业园区由天津滨海旅游区投资控股有限公司全资子公司天津滨海旅游区建设开发有限公司开发。 滨鸿创业园销售面积为5.2万平方米，包括六栋二层式厂房、三栋六层式研发楼。园内1-6号楼为标准工业厂房，二层式设计，首层高6.9m、二层高6m。7-9号楼为六层到顶的研发楼，研发楼为六层式设计，首层高4.8m、二层至五层3.6m、顶层3.9m。园区已全面开启整体租(售)服务，全部厂房和研发楼均按照国际化标准提供多行业、多业态生产模式的全功能服务体系，可以为来此发展的企业提供多元化和全方位的优质服务。
        滨旅产业园则由14栋标准厂房组成，总建筑面积15万平方米，园区以科技为主导力量，打造了一个以科技产业为核心和动力的城市新概念工业园区，并承载着中新天津生态城快速发展的“启动器”和聚集资源的“吸附器”的重要使命2222222222222222。
      </p>
    </div>

    <div v-if="cu==3">
      <p class="p" v-html="this.listContent.geographyContent">
      </p>
    </div>


    <div v-if="cu==4">
      <p class="p">滨鸿创业园/滨旅产业园两大产业园区由天津滨海旅游区投资控股有限公司全资子公司天津滨海旅游区建设开发有限公司开发。 滨鸿创业园销售面积为5.2万平方米，包括六栋二层式厂房、三栋六层式研发楼。园内1-6号楼为标准工业厂房，二层式设计，首层高6.9m、二层高6m。7-9号楼为六层到顶的研发楼，研发楼为六层式设计，首层高4.8m、二层至五层3.6m、顶层3.9m。园区已全面开启整体租(售)服务，全部厂房和研发楼均按照国际化标准提供多行业、多业态生产模式的全功能服务体系，可以为来此发展的企业提供多元化和全方位的优质服务。
        滨旅产业园则由14栋标准厂房组成，总建筑面积15万平方米，园区以科技为主导力量，打造了一个以科技产业为核心和动力的城市新概念工业园区，并承载着中新天津生态城快速发展的“启动器”和聚集资源的“吸附器”的重要使命4444444444444。
      </p>
    </div>

    <div v-if="cu==5">
      <p class="p" v-html="this.listContent.cultureContent">
      </p>
    </div>
  </div>

</template>
<script>
  import tab from '../../components/table.vue'
  import api from '@/api'
  export default {

    components: {
      tab,

    },
    data() {
      return {
        yi: '首页',
        er: '新闻',
        san: '大湾区政府阿斯达四大',
        cu: 0,
        list: ['园区概况', '区位优势', '地理交通', '配套设施', '入驻代表', '文化产业'],
        listContent:''

      }
    },

    methods: {
      change(index) {
        this.cu = index
      },
      getAttractServeById() {
        api.AttractServeById({
          id: 2
        }).then(res => {
          this.listContent=res
        },err=>{

        })
      }
    },
    created() {
      this.getAttractServeById()
    },
  }

</script>
<style lang="less" scoped>
  .zw {
    margin-bottom: 80px;
    .tx {
      display: flex;
      padding: 0 60px;
      margin-top: 35px;
      .er {
        width: 130px;
        height: 48px;
        /*background-color: #C81207;*/
        border-radius: 4px;
        color: black;
        flex: 1;
        margin: 0 10px;
        font-size: 23px;
        line-height: 45px;
        cursor: pointer;
      }
      .er.active {
        background-color: #C81207;
        color: white;
      }
      .er:hover {
        background-color: #C81207;
        color: white;
      }
    }
    .p {
      text-align: left;
      text-indent: 65px;
      line-height: 35px;
      font-size: 20px;
      margin-top: 35px !important;
    }
  }

</style>
