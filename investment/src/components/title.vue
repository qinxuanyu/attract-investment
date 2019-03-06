<template>

  <div class="title">
    <img src="../assets/trumpet.png" alt="" class="float-left clearfix"> {{title}}
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
    margin-top: 25px;
  }

</style>
