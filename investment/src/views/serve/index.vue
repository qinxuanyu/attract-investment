<template>
  <section class="serve">
    <div class="wrap">
      <div class="red">
        <div class="title">
          <span class="name">深圳产业园区招商</span>
          <span class="btn">
                      <router-link to="/zyfu-zs">更多</router-link>
                      </span>
        </div>
        <div class="main">
          <ul>
            <li v-for="(item, index) in ServeList.IndustrialPark">
              <div class="img-box-d">
                <img :src="item.coverImage" alt="">
              </div>
              <p>{{item.title}}</p>
            </li>

          </ul>
        </div>
      </div>
      <div class="blue">
        <div class="title">
          <span class="name">服务资讯</span>
          <span class="btn">更多</span>
        </div>
        <ul class="list">
          <li v-for="(item, index) in ServeList.ConsultingList">{{item.title}}</li>

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
            <li v-for="(item, index) in ServeList.InvitationProjects">
              <div class="img-box-d">
                <img :src="item.coverImage" alt="">
              </div>
              <p>{{item.title}}</p>
            </li>
   <li v-for="(item, index) in ServeList.InvitationProjects">
              <div class="img-box-d">
                <img :src="item.coverImage" alt="">
              </div>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="blue">
        <div class="title">
          <span class="name">最新投资项目</span>
          <span class="btn">更多</span>
        </div>
        <ul class="list">
          <li v-for="(item, index) in ServeList.ServiceConsultation">{{item.title}}</li>
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
        //招引服务列表
        ServeList: {
          //产业园区招商
          IndustrialPark: [],
          //招商引资项目
          InvitationProjects: [],
          //服务咨询
          ServiceConsultation: [],

          ConsultingList: []
        }
      }
    },

    methods: {
      //获取招引服务列表
      getServeList(id, callback) {
        api.getattractServeList({
          page: 0,
          size: 10,
          type: id
        }).then(res => {
          callback(res)
        })
      },
      //获取产品园区招商列表
      getProjectList() {
        api.getparkOrProjectList({
          page: 0,
          size: 10,
        }).then(res => {
          // console.log(res);
        }, err => {

        })
      },
      //获取服务咨询列表
      getProject() {
        api.getserveList({
          page: 0,
          size: 10,
        }).then(res => {
          this.ServeList.ConsultingList=res.list
        }, err => {

        })
      }

    },
    created() {
      //产业园区招商
      this.getServeList(0, (data) => {
        // console.log(data);
        this.ServeList.IndustrialPark = data
      })
      // //招商引资项目
      this.getServeList(1, (data) => {
        this.ServeList.InvitationProjects = data
      })
      // //招商引资项目
      this.getServeList(2, (data) => {
        this.ServeList.ServiceConsultation = data
      })
      this.getProject()
      this.getProjectList()
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
            flex-wrap: wrap;
            li {
              flex: 0 0 33.33%;
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
