<template>
  <div class="zw">
    <tab :yi="yi" :er="er"></tab>

    <h2
      style="font-size: 21px;font-weight: normal;text-align: left;margin: 15px 0;"
    >{{detailsData.title}}</h2>
    <div class="g"></div>
    <div style="text-align: left;font-size: 13px;">
      <span>发布时间 :{{detailsData.releaseTime}}</span>
      <span class="zy">文章来源 : {{detailsData.articleSource}}</span>
    </div>
    <div class="zz" v-if="detailsData.summary">
      <div class="zz1">
         
         <p>
            <span class="zz2">摘要</span>
            {{detailsData.summary}}
         </p>
         <p v-if="detailsData.title">峰会主题：{{detailsData.title}}</p>
        <p v-if="detailsData.time">峰会时间：{{detailsData.time }}</p>
        <p v-if="detailsData.address">峰会地点：{{detailsData.address}}</p>
        <p v-if="detailsData.sponsorUnit">主办单位：{{detailsData.sponsorUnit}}</p>
        <p v-if="detailsData.coOrganizer">协办单位：{{detailsData.coOrganizer }}</p>
        <p v-if="detailsData.text">峰会内容：{{detailsData.text}}</p>
        </div>
     
    </div>
	<div class="node" v-html="detailsData.content">
		
	</div>
  </div>
</template>
<script>
import tab from "../../components/table.vue";
import tit from "../../components/title.vue";
import api from '@/api'
export default {
	components: {
		tab,
		tit
	},
	data() {
		return {
			yi: "首页",
			er: "建党工作",
			title: "2019年我盟As的阿打算都是该款新车注册，共同促进大城市发展!",
			id:null,
			detailsData:{}
		};
	},
	methods: {
		getInvestmentActivityByIdFun (){
			api.getInvestmentActivityById({
				id:this.id
			}).then((result) => {
				this.detailsData = result;
			}).catch((err) => {
				
			});
		}
	},
	computed: {},
	created (){
		this.id = this.$route.params.id;
		this.getInvestmentActivityByIdFun()
	}
};
</script>
<style scoped>
.zw {
  margin-bottom: 80px;
}

.zy {
  padding-left: 35px;
}

.zz {
  position: relative;
  left: 0;
  top: 0;
}

.zz1 {
  background-color: #f7f7ff;
  margin: 25px 0px;
  text-align: left;
  padding: 10px 40px 14px 40px;
  /* text-indent: 57px; */
  line-height: 31px;
}

.zz2 {
  width: 50px;
  height: 24px;
  background-color: #608faf;
  color: white;
  /* position: absolute;
  left: 42px;
  top: 14px; */
  border-radius: 3px;
}
</style>
