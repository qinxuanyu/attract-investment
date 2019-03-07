<template>
  <div>
    <div class="zhong">
      <div class="dw">{{wz}}</div>
      <img :src="currimg" alt="" class="yi" :class="{'active':dh}">
      <div class="er">

        <img v-lazy="item" alt="" :class="{'active':index==curr}" v-for="(item, index) in imglist" :key="index" class="potor" @mouseenter="jing(index)">

      </div>
      <div class="san">
        <div class="li">
          <div class="Journalism">
            <span class="span1">招引新闻</span>
            <span class="span2">更多</span>
          </div>
          <div class="p" v-for="(item, index) in 11" :key="index">
            <router-link to="/zyxw"> 驾驶的烦恼啊大大群发萨达所大所 </router-link>
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
          <span class="span2">更多</span>
        </div>
        <div class="flex">
          <div class="lm" v-for="(item, index) in 6" :key="index">
            <img src="../../assets/activity1.png" alt="">
            <h3 class="h3">
              <router-link to="/zshd">首届阿联酋(2019)中国品牌博览会</router-link>
            </h3>
          </div>


        </div>
      </div>
      <div class="y">
        <div class="yy">
          <div class="Journalism">
            <span class="span1" style="color:#001F84">招引服务</span>
            <span class="span2">更多</span>
          </div>
          <div class="p" v-for="(item, index) in 8" :key="index">
            <router-link to="/zyxw">驾驶的烦恼啊大大群发萨给</router-link>
          </div>

        </div>
      </div>

    </div>
    <!--第二个-->
    <div class="xia">
      <div class="z">
        <div class="Journalism">
          <span class="span1">建党工作</span>
          <span class="span2">更多</span>
        </div>
        <div class="flex">
          <div class="zf">
            <h3 style="text-align: left;padding-bottom: 5px;">商务局2019年建党工作要点</h3>
            <span class="span" v-for="(item, index) in 7" :key="index">
              <router-link to="/zshd">事务局关于开展'党建模范建设'</router-link>
              </span>

          </div>
          <div class="yf">
            <div class="lm" v-for="(item, index) in 4" :key="index">
              <img src="../../assets/activity1.png" alt="">
              <h3 class="h3">
                <router-link to="path">首届阿联酋(2019)中国品牌博览会</router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="y">
        <div class="yy">
          <div class="Journalism">
            <span class="span1" style="color:#001F84">三圈动态</span>
            <span class="span2">更多</span>
          </div>
          <div class="p" v-for="(item, index) in 9" :key="index">
            <router-link to="/zshd">驾驶的烦恼啊大大群发萨给</router-link>
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
		components: {
		},
		data() {
			return {
				imglist: [require('../../assets/activity2.png'), require('../../assets/activity3.png'), require(
				'../../assets/activity4.png'), require('../../assets/activity2.png'), ],
				curr: 0,
				currimg: require('../../assets/activity4.png'),
				dh: false,
				xinwen: ['阿斯顿撒所大所多', '特瑞特瑞特瑞特惹我', '阿斯达四大所大所多', '阿斯达四大大多所'],
				ss: 0,
				title: '2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!'
			}
		},
		methods: {
			jing(index) {
				this.curr = index
				this.ss = index
				this.currimg = this.imglist[index]
				this.dh = true
				setTimeout(() => {
				this.dh = false
				}, 200);
			},
			getHomeData (){
				api.homeAttractNews().then((result) => {
					console.log(result)
				}).catch((err) => {
					
				});
			}
		},
		computed: {
			wz() {
				let ss = ''
				ss = this.xinwen[this.ss]
				return ss
			}
		},
		created (){
			this.getHomeData()
		}

	}

</script>
<style scoped>
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
  }

  .yi {
    flex: 2;
    transition: 500ms;
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
  }

  .potor.active {
    border: 3px red solid;
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
    line-height: 28px;
    margin: 10px 0;
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

  .h3 {
    font-size: 15px;
    padding: 8px 0;
    font-weight: normal;
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
    width: 396px;
    color: white;
    height: 36px;
    text-align: left;
    line-height: 36px;
    font-size: 20px;
    text-indent: 10px;
    z-index: 999;
  }

  .li .p:nth-child(2) {
    margin: 20px 0 10px 0;
  }

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
    text-decoration: underline;
  }

</style>
