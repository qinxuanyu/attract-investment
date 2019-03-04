<template>
	<div id="app">
		<d-header></d-header>
		<div id="main">
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
import DHeader from "@/components/header"

export default {
  name: 'app',
  components: {
    DHeader
  }
}
</script>

<style  lang="less" >

@import './style/commin.less';
#app {
	font-family: '微软雅黑';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	//   margin-top: 60px;
	#main{
		width: 1200px;
		margin: 0 auto;
		
	}
	p{
		margin: 0;
		padding: 0;
	}
	
}
</style>

