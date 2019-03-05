<template>
  <div>
    <div class="title">
      <img src="../../assets/trumpet.png" alt="" class="float-left clearfix"> 2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!
    </div>
    <div class="zhong">
      <img src="../../assets/activity1.png" alt="" class="yi">
      <div class="er">
        <img :src="item" alt="" v-for="(item, index) in imglist" :key="index" class="potor">
      </div>
      <div class="san"></div>
    </div>


  </div>
</template>
<script>
  export default {

    data() {
      return {
       imglist:[require('../../assets/activity2.png'),require('../../assets/activity2.png'),require('../../assets/activity2.png'),require('../../assets/activity2.png'),]
      }
    },
    methods: {

    }

  }

</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .clearfix:before,
  .clearfix:after {
    content: ' ';
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .float-left {
    float: left;
    margin-right: 45px;
  }

  .title {
    width: 900px;
    height: 50px;
    margin: auto;
    background-color: #FCEAEA;
    border-radius: 25px;
    display: flex;
    line-height: 50px;
    font-size: 19px;
    margin-bottom: 22px;
  }

  .zhong {
    height: 490px;
    display: flex;
  }

  .yi {
    flex: 2;
  }

  .er {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .san {
    flex: 3;
  }
  .er:nth-child(2){

  margin:0 5px 0px 5px;
  }
.potor{
  flex: 1;
  height: 115px;
  width: 200px;
  }
</style>
