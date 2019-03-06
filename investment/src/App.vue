<template>
  <div id="app">
    <d-header></d-header>
    <div id="main">
      <router-view></router-view>
    </div>
    <d-footer></d-footer>
  </div>
</template>

<script>
  import DHeader from "@/components/header"
  import DFooter from '@/components/footer'
  export default {
    name: 'app',
    components: {
      DHeader,
      DFooter
    }
  }

</script>

<style lang="less">
  @import './style/commin.less';
  a {
    text-decoration: none;
  }

  #app {
    font-family: '微软雅黑';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50; //   margin-top: 60px;
    #main {
      width: 1200px;
      margin: 0 auto;

    }
    p {
      margin: 0;
      padding: 0;
    }
    .img-box-d{
      position: relative;
      overflow: hidden;
      >img{
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
      }
    }
  }

</style>
