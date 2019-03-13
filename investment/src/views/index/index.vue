<template>
  <div>
    <div class="zhong">
      <div class="dw">{{wz}}</div>
      <div class="img-box-d">
        <img :src="currimg.coverImage" alt="" class="yi" :class="{'active':dh}" @click=dj(currimg.id)>
      </div>
      <div class="er">

        <img v-lazy="item.coverImage" alt="" :class="{'active':index==curr}" v-for="(item, index) in AttractingPhoto" :key="index"
          class="potor" @mouseenter="jing(index)" @click="tz(item.id)">

      </div>
      <div class="san">
        <div class="li">
          <div class="Journalism">
            <span class="span1">招引新闻</span>
            <router-link class="span2" to="/news">更多</router-link>
          </div>
          <div class="p" v-for="(item, index) in AttractingNews" :key="index">
            <router-link :to="'/Attracting-news/'+item.id"> {{item.title}} </router-link>
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/advertising1.png" alt="">
    <!--第一个-->
    <div class="xia">
      <div class="z">
        <div class="Journalism">
          <span class="span1">招商活动</span>
          <router-link class="span2" to="activity">更多</router-link>
        </div>
        <div class="flex">
          <router-link class="lm activity-item" v-for="(item, index) in  homeInvestmentActivity" :key="index" :to="'/Attracting-activities/'+item.id">
            <div class="img-box-d">
              <img v-lazy="item.image" alt="">
            </div>  
            <h3 class="h5">
              <p >{{item.title}}</p>
            </h3>
          </router-link>


        </div>
      </div>
      <div class="y">
        <div class="yy">
          <div class="Journalism">
            <span class="span1" style="color:#001F84">招引服务</span>
            <router-link class="span2" to="/serve">更多</router-link>
          </div>
          <div class="p" v-for="(item, index) in homeAttractServe" :key="index">
            <router-link :to="'/Attracting-news/'+item.id">{{item.title}}</router-link>
          </div>

        </div>
      </div>

    </div>
    <!--第二个-->
    <div class="xia">
      <div class="z">
        <div class="Journalism">
          <span class="span1">党建工作</span>
          <router-link class="span2" to="/party-building">更多</router-link>
        </div>
        <div class="flex">
          <div class="zf">
            <h3 style="text-align: left;padding-bottom: 5px;">商务局2019年建党工作要点</h3>
            <span class="span" v-for="(item, index) in homePartyBuilding1" :key="index">
              <router-link :to="'/Attracting-party/'+item.id">{{item.title}}</router-link>
              </span>

          </div>
          <div class="yf">
            <router-link class="lm" v-for="(item, index) in homePartyBuilding2" :key="index" :to="'/Attracting-party/'+item.id">
              <img v-lazy="item.coverImage" alt="" style="width:225px;height:139px;">
              <h3 class="h5">
                <p to="path">{{item.title}}</p>
              </h3>
            </router-link>
          </div>
        </div>
      </div>
      <div class="y">
        <div class="yy">
          <div class="Journalism">
            <span class="span1" style="color:#001F84">三圈动态</span>
            <router-link class="span2" to="/dynamic">更多</router-link>
          </div>
          <div class="p" v-for="(item, index) in homeDynamic" :key="index">
            <router-link :to="'/Attracting-dynamic/'+item.id">{{item.title}}</router-link>
          </div>

        </div>
      </div>

    </div>
    <img src="../../assets/advertising2.png" alt="" class="hh">
  </div>
</template>
<script>
  import api from '@/api'
  export default {
    components: {},
    data() {
      return {
        curr: 0,
        currimg: {},
        dh: false,
        Photoxinwen: [],
        ss: 0,
        title: '2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!',
        //招引新闻
        AttractingNews: [],
        //图片新闻
        AttractingPhoto: [],
        //三圈动态
        homeDynamic: [],
        //招引服务
        homeAttractServe: [],
        //招商活动
        homeInvestmentActivity: [],
        //建党工作1
        homePartyBuilding1: [],
        //建党工作2
        homePartyBuilding2: [],
      }
    },

    methods: {
      //点击banner跳转
      dj(id) {
        this.$router.push('/Attracting-news/' + id)
      },
      //点击轮播图跳转
      tz(id) {
        this.$router.push('/Attracting-news/' + id)
      },
      jing(index) {
        this.curr = index
        this.ss = index
        this.currimg = this.AttractingPhoto[index]
        this.dh = true
        setTimeout(() => {
          this.dh = false
        }, 200);

      },


      //获得招引新闻
      getHomeData() {
        api.homeAttractNews({
          pages: 0,
          size: 10,
          type: 0
        }).then((result) => {
          // console.log(result);
          this.AttractingNews = result
          //  console.log(this.AttractingNews);
        }).catch((err) => {

        });
      },
      //获得图片新闻
      getHomePhoto() {
        api.homeAttractNews({
          pages: 0,
          size: 10,
          type: 1
        }).then((result) => {
          this.AttractingPhoto = result.slice(0, 4)
          // console.log(result);
          this.currimg = this.AttractingPhoto[0]
          this.AttractingPhoto.forEach(item => {
            this.Photoxinwen.push(item.title)
          })
          //  console.log(this.currimg);
          // console.log(this.Photoxinwen);
        }).catch((err) => {

        });
      },
      //获得招商活动
      getInvestmentActivity() {
        api.homeInvestmentActivity({
          page: 0,
          size: 6,
        }).then(res => {
          this.homeInvestmentActivity = res
          // console.log(res);
        }, error => {})
      },
      //获得招引服务
      getAttractServe() {
        api.homeAttractServe({
          page: 0,
          size: 10,
        }).then(res => {
          this.homeAttractServe = res
          // console.log(res);
        }, err => {})
      },

      //获得党建工作
      getPartyBuilding() {
        api.homePartyBuilding({
          page: 0,
          size: 10
        }).then(res => {
          this.homePartyBuilding1 = res.slice(0, 5)
          this.homePartyBuilding2 = res.slice(0, 4)
        }, err => {

        })
      },
      //获得三圈动态
      getDynamic() {
        api.homeDynamic({
          page: 0,
          size: 10
        }).then(res => {
          this.homeDynamic = res
        }, err => {})
      }


    },
    computed: {
      wz() {
        let ss = ''
        ss = this.Photoxinwen[this.ss]
        // console.log(this.AttractingPhoto[this.ss]);
        return ss
      }
    },
    created() {
      this.getHomeData()
      this.getHomePhoto()
      this.getInvestmentActivity()
      this.getAttractServe()
      this.getPartyBuilding()
      this.getDynamic();
      
    }

  }

</script>
<style scoped lang="less">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  .zhong {
    height: 490px;
    display: flex;
    margin-bottom: 35px;
    position: relative;
    left: 0;
    top: 0;
    .img-box-d{
       width: 450px !important;
      .yi {
        transition: 500ms;
      }
    }
  }
  .activity-item{
    .img-box-d{
      width: 225px;
      height: 140px;
    }
    
  }
  

  .er {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .san {
    flex: 3;
  }

  .potor:nth-child(1) {
    margin: 0 5px 3px 5px;
  }

  .potor:nth-child(2) {
    margin: 3px 5px 3px 5px;
  }

  .potor:nth-child(3) {
    margin: 3px 5px 3px 5px;
  }

  .potor:nth-child(4) {
    margin: 3px 5px 0px 5px;
  }

  .potor {
    flex: 1;
    height: 115px;
    width: 200px;
    border: 3px #FFFFFF solid;
  }

  .potor.active {
    border-color: red;
  }

  .yi.active {
    opacity: 0.5;
  }

  .Journalism {
    height: 48px;
    border-bottom: 1px #C71106 solid;
    display: flex;
    justify-content: space-between;
  }

  .span1 {
    color: red;
    font-size: 22px;
  }

  .span2 {
    color: #828282;
    font-size: 19px;
  }

  .li {
    padding: 0 23px;
    text-align: left;
  }

  .p {
    font-size: 17px;
    color: #2D2D2D;
    // line-height: 28px;
    // margin: 10px 0;
    line-height: 34px;
  }


  .xia {
    display: flex;
    height: 470px;
    margin-top: 25px;
  }

  .z {
    flex: 3;
  }

  .y {
    flex: 2;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: calc(100% - 48px);
    padding: 27px 0 3px 0;
  }

  .lm {
    flex: 0 0 33.33%;
    text-align: left;
    /*margin: 23px 0 0px 0;*/
  }

  .flex .lm:nth-child(3n) {
    text-align: right
  }

  .flex .lm:nth-child(2) {
    text-align: center
  }

  .flex .lm:nth-child(5) {
    text-align: center;
  }

  .h5 {
    font-size: 15px;
    padding: 8px 0;
    font-weight: normal;
    text-align: left;
    width: 224px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .yy {
    padding: 0 29px;
    text-align: left;
    color: #303030;
  }

  .zf {
    flex: 1;
  }

  .yf {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
  }

  .flex .yf .lm {
    flex: 0 0 50%;
    text-align: left;
  }

  .flex .yf .lm:nth-child(2n) {
    text-align: right;
  }

  .span {
    display: block;
    text-align: left;
    padding: 11px 0;
    color: #808080;
  }




  .hh {
    margin: 20px 0 60px 0;
  }

  .dw {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #C81207;
    width: 450px;
    color: white;
    height: 36px;
    text-align: left;
    line-height: 36px;
    font-size: 20px;
    text-indent: 10px;
    z-index: 999;
  }

  // .li .p:nth-child(2) {
  //   margin: 20px 0 10px 0;
  // }

  .li .p:nth-child(3) a {
    font-size: 15px;
    color: #919191;
  }

  .yy .p:nth-child(2) {
    margin-top: 20px;
  }

  a {
    color: #2D2D2D;
  }

  a:hover {
    text-decoration: none;
  }

</style>
