<template>
  <div class="zw">

    <tab :yi="yi" :er="er"></tab>

    <h2 style="font-size: 21px;font-weight: normal;text-align: left;margin: 15px 0;">2019华南国际无线充电技术及应用展览会</h2>
    <div class="g"></div>
    <div style="text-align: left;font-size: 13px;">
      <span>发布时间 : 2019-2-3 09:03</span>
      <span class="zy">文章来源 : 中华人民共和国商务部</span>
    </div>
    <div class="zz">
      <div class="zz1"> 网讯 2018年11月19日上午，河北省张家口市塞北管理区发展改革局局长王丽军、科长屈彦春一行2人莅临中国市县招商网(以下简称“本网”)北京总部，洽谈招商引资深入合作事宜。</div>

      <span class="zz2">摘要</span>
    </div>

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
        er: '建党工作',
         title:'2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!'
      }
    },
    methods: {

    },
    computed: {

    }
  }

</script>
<style scoped>
  .zw {
    margin-bottom: 80px;
  }


  .zy {
    padding-left: 35px;
  }

  .zz {

    position: relative;
    left: 0;
    top: 0;
  }

  .zz1 {
    height: 86px;
    background-color: #F7F7FF;
    margin: 25px 0px;
    text-align: left;
    padding: 10px 40px 14px 40px;
    text-indent: 57px;
    line-height: 31px;
  }

  .zz2 {

    width: 50px;
    height: 24px;
    background-color: #608FAF;
    color: white;
    position: absolute;
    left: 42px;
    top: 14px;
    border-radius: 3px;
  }

</style>
