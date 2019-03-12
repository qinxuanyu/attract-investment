<template>
  <div class="zw">
    <tab :yi="yi" :er="er" :san="san"></tab>
    <img :src="this.listContent.coverImage" alt="" style="margin-top: 22px;width: 1200px;height: 440px;">
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
      <p class="p" v-html="listContent.geographyContent">
      </p>
    </div>

    <div v-if="cu==3">
      <p class="p" v-html="this.listContent.geographyContent">
      </p>
    </div>


    <div v-if="cu==4">
      <p class="p" v-html="listContent.enterpriseContent">
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
        listContent:{},
        id:null

      }
    },

    methods: {
      change(index) {
        this.cu = index
      },
      getAttractServeById() {
        api.AttractServeById({
          id: this.id
        }).then(res => {
          this.listContent=res
        },err=>{

        })
      }
    },
    created() {
      this.id = this.$route.params.id;
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
