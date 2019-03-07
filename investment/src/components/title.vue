<template>

  <div class="title-comp">
    <img src="../assets/trumpet.png" alt="" class="float-left clearfix"> {{title || '2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!'}}
  </div>

</template>
<script>
  export default {
    props: ['title'],
    data() {
      return {

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

  .title-comp {
    width: 900px;
    height: 50px;
    margin: auto;
    background-color: #FCEAEA;
    border-radius: 25px;
    display: flex;
    line-height: 50px;
    font-size: 19px;
    margin-bottom: 22px;
    margin-top: 25px;
  }

</style>
