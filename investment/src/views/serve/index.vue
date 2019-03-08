<template>
  <section class="serve">
    <div class="wrap">
      <div class="red">
        <div class="title">
          <span class="name">深圳产业园区招商</span>
          <span class="btn">
                      <router-link to="/zyfu-zs/0">更多</router-link>
                      </span>
        </div>
        <div class="main">
          <ul>
            <li>
              <div class="img-box-d">
                <img src="../../assets/activity1.png" alt="">
              </div>
              <p>2019全球企业家论坛</p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="blue">
        <div class="title">
          <span class="name">服务资讯</span>
          <span class="btn">更多</span>
        </div>
        <ul class="list">
          <li>省商务厅张梁小康率队来鹰调研指导农村假冒伪劣食品专项调查....</li>
          <li>省商务厅张梁小康率队来鹰调研指导农村假冒伪劣食品专项调查....</li>
          <li>省商务厅张梁小康率队来鹰调研指导农村假冒伪劣食品专项调查....</li>
        </ul>
      </div>
    </div>
    <div class="wrap">
      <div class="red">
        <div class="title">
          <span class="name">深圳大湾区招商引资项目</span>
          <span class="btn">更多</span>
        </div>
        <div class="main">
          <ul>
            <li>
              <div class="img-box-d">
                <img src="../../assets/activity1.png" alt="">
              </div>
              <p>2019全球企业家论坛</p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="blue">
        <div class="title">
          <span class="name">最新投资项目</span>
          <span class="btn">更多</span>
        </div>
        <ul class="list">
          <li>省商务厅张梁小康率队来鹰调研指导农村假冒伪劣食品专项调查....</li>
          <li>省商务厅张梁小康率队来鹰调研指导农村假冒伪劣食品专项调查....</li>
          <li>省商务厅张梁小康率队来鹰调研指导农村假冒伪劣食品专项调查....</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  import api from '../../api/index.js'
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.getServeList()
      this.getProjectList()
    },
    methods: {
      //获取招引服务列表
      getServeList() {
        api.getattractServeList({
          page: 0,
          size: 10,
        }).then(res => {
          console.log(res);
        }, err => {

        })
      },
      //获取产品园区招商列表
      getProjectList() {
        api.getparkOrProjectList({
          page: 0,
          size: 10,
        }).then(res => {
          console.log(res);
        }, err => {

        })
      }
    },


  }

</script>
<style lang="less" scoped>
  .serve {
    .wrap {
      display: flex;
      justify-content: space-between;
      .red {
        width: 705px;
        .main {
          ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
              width: 226px;
              margin-top: 24px;
              .img-box-d {
                width: 226px;
                height: 140px;
              }
              p {
                font-size: 14px;
                margin-top: 14px;
                color: #565656;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: left;
              }
            }
          }
        }
      }
      .blue {
        width: 460px;
        .list {
          font-size: 18px;
          line-height: 34px;
          text-align: left;
          li {
            cursor: pointer;
          }
        }
      }
    }
    >.wrap .title {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #c81207;
      padding: 20px 0;
      .name {
        font-size: 20px;
        color: #c81207;
      }
      .btn {
        font-size: 18px;
        color: #878787;
        cursor: pointer;
      }
    }
    >.wrap .blue .title {
      border-bottom-color: #00238c;
      .name {
        color: #00238c;
      }
    }
  }

</style>
