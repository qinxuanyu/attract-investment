<template>
  <div class="zf">
    <span>{{yi}}>{{er}}>{{san}}</span>
  </div>
</template>
<script>
  export default {
       props:['yi','er','san'],
    data() {
      return {

      }
    }
  }

</script>
<style scoped>
.zf{
  text-align: left;
}
span{
  color: #575757;
      font-size: 15px;
}
</style>
