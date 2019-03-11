<template>

  <div class="title-comp" >
    <img src="../assets/trumpet.png" alt="" class="float-left clearfix"> {{content[0].content || ''}}
  </div>

</template>
<script>
  import api from '@/api'
  export default {
    // props: ['title'],
    data() {
      return {
        content:[{
          content:''
        }]
      }
    },
    methods:{
      getNotice (){
        api.notice({
          type:0
        }).then((result) => {
            if(result.length){
              this.content = result;
            }
        }).catch((err) => {
          
        });
      }
    },
    created (){
      this.getNotice()
    }
  }

</script>


<style scoped>
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

  .title-comp {
    width: 900px;
    height: 50px;
    margin: auto;
    background-color: #FCEAEA;
    border-radius: 25px;
    display: flex;
    line-height: 50px;
    font-size: 19px;
    margin-bottom: 22px;
    margin-top: 25px;
  }

</style>
