<template>
  <div>
    <div class="top">
      <div class="zflex">
        <h2 style="margin-bottom: 14px;font-size: 20px;font-weight: normal;color:#323232; text-align:center;">第一财经金融峰会</h2>
        <img src="../../assets/zz.png" alt="">
      </div>
      <div class="yflex">
        <div class="xx">更多</div>
        <h3 class="h3" v-for="i in 10">2019北京国际数字经济博览会</h3>
      </div>
    </div>

    <h2 class="h2">招引访谈</h2>

    <div class="zhong">
      <div class="zz">
        <div class="zz1">
          <div class="zz11">
            <h3 class="h3" style="font-size:16px" v-for="i in 5">2019北京国际数字经济博览会</h3>
          </div>
          <div class="zz11">
            <h3 class="h3" style="font-size:16px" v-for="i in 5">2019北京国际数字经济博览会</h3>
          </div>
        </div>
        <div class="zz2">
          <img src="../../assets/2e0ba8589ac29b8d0d34d3075858841.png" alt="">
          <img src="../../assets/2e0ba8589ac29b8d0d34d3075858841.png" style="margin-top: 20px;" alt="">
        </div>
      </div>
      <div class="yy">
        <div class="zz1">
          <div class="zz11">
            <h3 class="h3" style="font-size:16px" v-for="i in 5">2019北京国际数字经济博览会</h3>
          </div>
          <div class="zz11">
            <h3 class="h3" style="font-size:16px" v-for="i in 5">2019北京国际数字经济博览会</h3>
          </div>
        </div>
        <div class="zz2">
          <img src="../../assets/2e0ba8589ac29b8d0d34d3075858841.png" alt="">
          <img src="../../assets/2e0ba8589ac29b8d0d34d3075858841.png" style="margin-top: 20px;" alt="">
        </div>
      </div>
    </div>

    <h2 class="h2">实地考察</h2>


    <div class="zhong">
      <div class="zz">

        <div class="zz2">
          <img src="../../assets/2e0ba8589ac29b8d0d34d3075858841.png" alt="">
          <img src="../../assets/2e0ba8589ac29b8d0d34d3075858841.png" style="margin-top: 20px;" alt="">
        </div>

        <div class="zz1">
          <div class="zz11">
            <h3 class="h3" style="font-size:16px" v-for="i in 5">2019北京国际数字经济博览会</h3>
          </div>
          <div class="zz11">
            <h3 class="h3" style="font-size:16px" v-for="i in 5">2019北京国际数字经济博览会</h3>
          </div>
        </div>
      </div>
      <div class="yy">

        <div class="zz2">
          <img src="../../assets/2e0ba8589ac29b8d0d34d3075858841.png" alt="">
          <img src="../../assets/2e0ba8589ac29b8d0d34d3075858841.png" style="margin-top: 20px;" alt="">
        </div>
        <div class="zz1">
          <div class="zz11">
            <h3 class="h3" style="font-size:16px" v-for="i in 5">2019北京国际数字经济博览会</h3>
          </div>
          <div class="zz11">
            <h3 class="h3" style="font-size:16px" v-for="i in 5">2019北京国际数字经济博览会</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="kong" style="height: 80px;"></div>
  </div>
</template>
<script>

 import api from '../../api/index.js'

  export default {
    components: {
    
    },
    data() {
      return {

      }
    },
    created() {
       this.getActivityList()
    },
    methods: {
      //获取活动列表
      getActivityList(){
       api.investmentActivityList({
          page:0,
          size:10,
          type:0
       }).then(res=>{
        //  console.log(res);
       },err=>{

       })
      }
    }

  }

</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .top {
    height: 490px;
    display: flex;
  }

  .zflex {
    flex: 1.8;
    text-align: left;
  }

  .yflex {
    flex: 1;
  }

  .xx {
    border-bottom: 1px solid #012188;
    text-align: right;
    height: 42px;
    font-size: 20px;
    line-height: 34px;
  }

  .h3 {
    font-size: 18px;
    font-weight: normal;
    text-align: left;
    margin-top: 17px;
  }

  .h2 {
    text-align: left;
    margin-bottom: 28px;
    font-size: 20px;
    color: #323232;

  }

  .zhong {
    display: flex;
    height: 400px;
  }

  .zz {
    flex: 1;
    display: flex;
    margin-right: 10px;
  }

  .yy {
    flex: 1;
    display: flex;
    margin-left: 10px;
  }

  .zz1 {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .zz2 {
    flex: 1;
    text-align: left;

  }

  .zz11 .h3:nth-child(1) {
    margin-top: 0;
  }

  .zz11 {
    flex: 1;
  }

</style>
