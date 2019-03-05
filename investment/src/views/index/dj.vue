<template>
  <div>
    <div class="title">
      <img src="../../assets/trumpet.png" alt="" class="float-left clearfix"> 2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!
    </div>
    <div class="zhong">
      <div class="dw">{{wz}}</div>
      <img :src="currimg" alt="" class="yi" :class="{'active':dh}">
      <div class="er">
        <img :src="item" alt="" :class="{'active':index==curr}" v-for="(item, index) in imglist" :key="index" class="potor" @mouseenter="jing(index)">
      </div>
      <div class="san">
        <div class="li">
          <div class="Journalism">
            <span class="span1">招引新闻</span>
            <span class="span2">更多</span>
          </div>
          <div class="p gg">驾驶的烦恼啊大大群发萨达所大所大所多动奥术大师大所多,机是的分公司的过分发给</div>
          <div class="p g">驾驶的烦恼啊As的大大缩短都是发鬼地方个大概a阿斯达四大大范甘迪郭德纲沃尔沃若翁人徐晓晨</div>
          <div class="p">驾驶的烦恼啊大大群发萨给</div>
          <div class="p">驾驶的烦恼师大所多,机是的分公司的过分发给</div>
          <div class="p">驾驶的烦恼啊大大群发萨给</div>
          <div class="p">驾驶的烦恼师大所多,机是的分公司的过分发给</div>
          <div class="p">驾驶的烦恼啊大大群发萨给</div>
          <div class="p">驾驶的烦恼师大所多,机是的分公司的过分发给</div>
          <div class="p">驾驶的烦恼啊大大群发萨给</div>
          <div class="p">123132123123132,机是的分公司的过分发给</div>
        </div>
      </div>
    </div>
    <div class="Journalism">
      <span class="span1">招引新闻</span>
      <span class="span2">更多</span>
    </div>
    <div class="xia">
      <div class="ffz">
        <h2 style="font-weight: normal;font-size: 20px;">商务局2019工作要点！！！</h2>
        <p style="line-height: 33px;margin-top: 10px;text-indent: -15px;">　阿姨说，女人一定要出去工作，不管钱赚得多或是少，工作就是自己人生价值的体现。你一直在家男人有机会在你面前说“是我在养你阿姨说你在外面工作，家里的事情再忙也要做，不然花自己的钱请个钟点工。家里的事情一定要好好做，小孩也要好好教阿姨说他为你做了意想不到的事情，你可以感动，可以夸奖，千万不要嘲讽地说“太阳从西边出来了啊”，如果这样，也许以后他不会为你做任何事情。
        </p>
        <p style="line-height: 33px;margin-top: 10px;">阿姨说谁都不是谁的另一半你的想法不说出来谁会了解？需要什么感受，讨厌什么事情，你告诉别人，别人才会懂。阿姨说他的父母也是你的父母，就算他的父母对不是很好，你也要对他们好。因为他们是他的父母。阿姨说决定和什么人在一起了，就不要去埋怨苦日子，既然你选择了他，就不要去埋怨他。阿姨说那么有钱有什么用</p>

      </div>

      <div class="ffy">
        <div class="lm">
          <img src="../../assets/activity1.png" alt="">
          <h3 class="h3">首届阿联酋(2019)中国品牌博览会</h3>
        </div>
        <div class="lm">
          <img src="../../assets/activity1.png" alt="">
          <h3 class="h3">首届阿联酋(2019)中国品牌博览会</h3>
        </div>
        <div class="lm">
          <img src="../../assets/activity1.png" alt="">
          <h3 class="h3">首届阿联酋(2019)中国品牌博览会</h3>
        </div>
        <div class="lm">
          <img src="../../assets/activity1.png" alt="">
          <h3 class="h3">首届阿联酋(2019)中国品牌博览会</h3>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {

    data() {
      return {
        imglist: [require('../../assets/activity2.png'), require('../../assets/activity3.png'), require(
          '../../assets/activity4.png'), require('../../assets/activity2.png'), ],
        curr: 0,
        currimg: require('../../assets/activity4.png'),
        dh: false,
        xinwen: ['阿斯顿撒所大所多', '特瑞特瑞特瑞特惹我', '阿斯达四大所大所多', '阿斯达四大大多所'],
        ss: 0
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
      }
    },
    computed: {
      wz() {
        let ss = ''
        ss = this.xinwen[this.ss]
        return ss
      }
    }
  }

</script>
<style>
  @import'../../assets/tou.css';

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

  .span1 {
    color: #012188;
  }

  .Journalism {
    border-color: #012188;
    margin-bottom: 20px;
  }

  .xia {
    height: 400px;
    display: flex;
    margin-bottom: 85px;
  }

  .ffz {
    flex: 3;
    text-align: left;
  }

  .ffy {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    padding-left: 42px;
  }

  .ffy .lm {
    flex: 0 0 50%;
    text-align: left;
  }

  .ffy .lm:nth-child(2n) {
    text-align: right;
  }

  .lm {
    flex: 0 0 50%;
    text-align: left;
  }

  .lm:nth-child(2n) {
    text-align: right;
  }

  .h3 {
    font-size: 15px;
    padding: 8px 0;
    font-weight: normal;
  }

</style>
