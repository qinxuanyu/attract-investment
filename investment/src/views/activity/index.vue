<template>
  <section class="activity">
    <h3 class="title">招商峰会</h3>
    <div class="top">

      <router-link :to="'/Attracting-activities/'+summit[0].id" class="big">
        <img v-lazy="summit[0].image || ''" alt>
        <p>{{summit[0].title || ''}}</p>
      </router-link>
      <div class="list">
        <router-link to="/summit" class="title">更多</router-link>
        <ul class="box">
          <li v-for="(item,index) in summit" :key="index">
            <router-link :to="'/Attracting-activities/'+item.id">{{item.title }}</router-link>
          </li>

        </ul>
      </div>
    </div>
    <!-- 招引访谈 -->
    <div class="interview">
      <div class="title">招引访谈</div>
      <div class="wrap">
        <div class="item">
          <ul class="text-list">
            <li v-for="(item,index) in interview[0]" :key="index">
              <router-link :to="'/Attracting-activities/'+item.id">{{item.title}}</router-link>
            </li>
          </ul>
          <ol class="img-wrap">
            <li class="img-box-d" v-for="(item,index) in interview[0]" :key="index" v-if="index < 2" @click.stop="$router.push('/Attracting-activities/'+item.id)">
              <img v-lazy="item.image" alt>
            </li>

          </ol>
        </div>
        <div class="item">
          <ul class="text-list">
            <li v-for="(item,index) in interview[1]" :key="index">
              <router-link :to="'/Attracting-activities/'+item.id">{{item.title}}</router-link>
            </li>

          </ul>
          <ol class="img-wrap">
            <li class="img-box-d" v-for="(item,index) in interview[1]" :key="index" v-if="index < 2" @click.stop="$router.push('/Attracting-activities/'+item.id)">
              <img v-lazy="item.image" alt>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <!-- //实地访谈 -->
    <div class="interview">
      <div class="title">实地考察</div>
      <div class="wrap">
        <div class="item">
          <ol class="img-wrap">
            <li class="img-box-d" v-for="(item,index) in fieldVisit[0]" :key="index" v-if="index < 2" @click.stop="$router.push('/Attracting-activities/'+item.id)">
              <img v-lazy="item.image" alt>
            </li>
          </ol>
          <ul class="text-list">
            <li v-for="(item,index) in fieldVisit[0]" :key="index">
              <router-link :to="'/Attracting-activities/'+item.id">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item">
          <ol class="img-wrap">
            <li class="img-box-d" v-for="(item,index) in fieldVisit[1]" :key="index" v-if="index < 2" @click.stop="$router.push('/Attracting-activities/'+item.id)">
              <img v-lazy="item.image" alt>
            </li>
          </ol>
          <ul class="text-list">
            <li v-for="(item,index) in fieldVisit[1]" :key="index">
              <router-link :to="'/Attracting-activities/'+item.id">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import api from "@/api/index.js";
  import {
    setTimeout
  } from 'timers';
  // import { type } from 'os';
  export default {
    data() {
      return {
        summit: [], //招商峰会,
        interview: {
          0: [],
          1: []
        }, //招引访谈
        fieldVisit: {
          0: [],
          1: []
        } //实地考察

      };
    },
    methods: {
      getinvestmentActivityList(type, page) {
        api.investmentActivityList({
          type: type, //0招商峰会1招引访谈2实地考察 
          page: page,
          size: 10
        }).then((result) => {
          if (type === 0) {
            this.summit = result;
          } else if (type === 1) {
            this.interview[page] = result;
          } else if (type === 2) {
            this.fieldVisit[page] = result;
          }
        }).catch((err) => {

        });
      }
    },
    created() {
      this.getinvestmentActivityList(0, 0);
      this.getinvestmentActivityList(1, 0);
      this.getinvestmentActivityList(1, 1);
      this.getinvestmentActivityList(2, 0);
      this.getinvestmentActivityList(2, 1);
    }
  };

</script>
<style lang="less" scoped>
  .activity {
    >.title {
      font-size: 20px;
      color: #323232;
      margin: 40px 0 27px 0;
      text-align: left;
      padding-left: 27%;
    }
    .top {
      display: flex;
      .big {
        width: 737px;
        height: 412px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        >img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        >p {
          width: 100%;
          padding-left: 5px;
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 18px;
          color: #fff;
          background-color: #c81207;
          line-height: 46px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .list {
        width: 463px;
        padding-left: 30px;
        box-sizing: border-box;
        .title {
          display: block;
          text-align: right;
          font-size: 18px;
          padding-bottom: 20px;
          color: #878787;
          border-bottom: 1px solid #00238c;
        }
        .box {
          text-align: left;
          font-size: 18px;
          line-height: 34px;
          li {
            cursor: pointer;
          }
        }
      }
    }
    .interview {
      >.title {
        font-size: 20px;
        color: #323232;
        margin: 40px 0 27px 0;
        text-align: left;
      }
      .wrap {
        display: flex;
        justify-content: space-between;
        .item {
          display: flex;
          width: 580px;
          justify-content: space-between;
          .text-list {
            // padding-right: 18px;
            width: 290px;
            font-size: 16px;
            color: #565656;
            line-height: 34px;
            text-align: left;
            li {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
            }
          }
          .img-wrap {
            .img-box-d {
              width: 270px;
              height: 180px;
              margin-bottom: 20px;
            }
            li {
              cursor: pointer;
            }
          }
        }
      }
    }
  }

</style>
