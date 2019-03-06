<template>
  <div class="zf">
    <span style="color:black" @click="dj">{{yi}}</span> > <span @click="add">{{er}}</span><span v-if="san"> > </span> <span>{{san}}</span>
  </div>
</template>
<script>
  export default {
    props: ['yi', 'er', 'san'],
    data() {
      return {

      }
    },
      mounted() {
      // console.log(this.er);
    },
    methods: {
      dj() {
          if(this.er&&this.san){
             this.$router.go(-2)
          }else{
           this.$router.go(-1)
          }
      },
      add(){
        if(this.er&&this.yi&&this.san){
        this.$router.go(-1)
        }
      }
    },
  }

</script>
<style scoped>
  .zf {
    text-align: left;
  }

  span {
    color: #575757;
    font-size: 15px;
    cursor: pointer;
  }

</style>
