<template>
  <header id="header">
    <div class="logo">
      <img src="http://www.jituwang.com/uploads/allimg/151208/258057-15120R3593535.jpg" alt="">
      <div class="text">
        <p class="name">校友会招商引资服务平台</p>
        <p class="en">xiaoyouhuizhaoshangyinzifuwupingtai</p>
      </div>
    </div>
    <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item v-for="(key,item) in bannerItem" :key="item">
        <!-- <h3>{{ item }}</h3> -->
        <!-- <img :src="'../assets/banner'+ key +'.png'" alt=""> -->
        <img src="../assets/banner1.png" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="招引新闻" name="second"></el-tab-pane>
        <el-tab-pane label="招商活动" name="third"></el-tab-pane>
        <el-tab-pane label="招引服务" name="fourth"></el-tab-pane>
        <el-tab-pane label="三圈动态" name="five"></el-tab-pane>
        <el-tab-pane label="党建工作" name="six"></el-tab-pane>
        <el-tab-pane label="联系我们" name="seven"></el-tab-pane>
      </el-tabs>
    </div>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        bannerItem: ['../assets/banner1.png', '../assets/banner2.png', '../assets/banner3.png'],
        activeName:'first'
      }
    },
    methods: {
      handleClick(tab) {
        if (tab.name == 'first') {
          this.$router.push('/')
        } else if (tab.name == 'third') {
          this.$router.push('/hd')
        } else if (tab.name == 'six') {
          this.$router.push('/dj')
        }

      }
    },
  }

</script>
<style lang="less">
  #header {
    .logo {
      width: 1200px;
      margin: 0 auto;
      padding: 10px 0 17px 0;
      display: flex;
      >img {
        width: 73px;
        height: 73px;
        border-radius: 20px;
      }
      .text {
        // display: flex;
        // flex-direction: column;
        text-align: left;
        .name {
          font-size: 32px;
          color: #00238c;
        }
        .en {
          font-size: 21px;
          color: #00238c;
        }
      }
    }
    .tabs {
      width: 1200px;
      margin: 0 auto;
      .el-tabs__item {
        padding: 0 50px;
        line-height: 50px;
      }

    }
    .el-carousel__indicators--outside {
      position: absolute;
      bottom: 0;
    }
  }

</style>
