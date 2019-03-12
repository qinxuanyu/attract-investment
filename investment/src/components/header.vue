<template>
  <header id="header">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
      <div class="text">
        <p class="name">大湾区招引服务平台</p>
        <!-- <p class="en">xiaoyouhuizhaoshangyinzifuwupingtai</p> -->
      </div>
    </div>

    <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item v-for="(item,index) in bannerItem" :key="index">
        <!-- <h3>{{ item }}</h3> -->
        <!-- <img :src="'../assets/banner'+ key +'.png'" alt=""> -->
        <img :src="item.image" alt="">
      </el-carousel-item>
    </el-carousel>

    <div class="tabs">
      <el-tabs v-model="active" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="招引新闻" name="news"></el-tab-pane>
        <el-tab-pane label="招商活动" name="third"></el-tab-pane>
        <el-tab-pane label="招引服务" name="fourth"></el-tab-pane>
        <el-tab-pane label="三圈动态" name="dynamic"></el-tab-pane>
        <el-tab-pane label="党建工作" name="six"></el-tab-pane>
        <el-tab-pane label="联系我们" name="about"></el-tab-pane>
      </el-tabs>
    </div>
    <d-title></d-title>
  </header>
</template>
<script>
  import DTitle from './title'
  import api from '@/api/index.js'
  export default {
    components: {
      DTitle
    },
    data() {
      return {
        bannerItem: [],
        path: '/',
        active:'first'
      }
    },

    created() {
      this.getpooto()
    },


    methods: {
      handleClick(tab) {
        localStorage.setItem('lj',tab.name) 
        if (tab.name == 'first') {
          this.$router.push('/')
        } else if (tab.name == 'third') {
          this.$router.push('/activity')
        } else if (tab.name == 'six') {
          this.$router.push('/party-building')
        } else if (tab.name == 'fourth') {
          this.$router.push('/serve')
        } else if (tab.name === 'news') {
          this.$router.push('/news')
        } else if (tab.name === 'dynamic') {
          this.$router.push('/dynamic')
        } else if (tab.name === 'about') {
          this.$router.push('/about')
        }

      },

      //获取轮播图
      getpooto() {
        api.getAttractphoto().then(res => {
          console.log(res)
          this.bannerItem = res;
        }, err => {})
      }
    },

    computed: {
      returnPath() {
        console.log(this.$route)
      },
   
    },
    watch: {
      '$route.path' (newVal,oldVal){
         
      }
    },
    created() {
      this.getpooto()
       if(localStorage.getItem('lj')){
         this.active=localStorage.getItem('lj')
       }
    }
  }

</script>
<style lang="less">
  #header {
    .logo {
      width: 1200px;
      margin: 0 auto;
      padding: 10px 0 17px 0;
      display: flex;
      align-items: center;
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
          color: #ec1b24;
          margin-left: 10px;
        }
        .en {
          font-size: 21px;
          color: #00238c;
        }
      }
    }
    .carousel {
      min-width: 1200px;
      .img-box-d {
        width: 100%;
        min-width: 1200px;
        height: 600px;
      }

      .el-carousel__container {
        // width: 1200px;
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
