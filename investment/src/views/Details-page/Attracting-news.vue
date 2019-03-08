<template>
  <div class="zw">

    <tab :yi="yi" :er="er"></tab>
    <h1 class="bt">{{detailsData.title}}</h1>
    <div style="text-align: left;font-size: 13px;">
      <span>发布时间：{{detailsData.releaseTime}}</span>
      <span class="zy">文章来源：{{detailsData.articleSource}}</span>
    </div>
    <div class="node" v-html="detailsData.content">

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
        er: '招引新闻',
        title: '2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!',
        id: null,
        detailsData: {}
      }
    },
    methods: {
      getAttractNewsByIdFun() {
        api.getAttractNewsById({
          id: this.$route.params.id
        }).then(res => {
          this.detailsData = res;
        }, err => {

        })
      }

    },

    computed: {

    },
    created() {

      this.getAttractNewsByIdFun()

    }
  }

</script>
<style scoped>
  .zw {
    margin-bottom: 80px;
  }

  .bt {
    text-align: left;
    margin: 20px 0;
    font-size: 24px;
    font-weight: normal;
  }

  .zy {
    padding-left: 35px;
  }

  span {
    color: #575757
  }

  p {
    line-height: 33px;
    text-indent: 30px;
    margin-top: 12px !important;
    color: #555555;
    text-align: left;
  }

</style>
