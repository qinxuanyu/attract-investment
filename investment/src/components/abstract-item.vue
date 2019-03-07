<template>
    <div class="abstract-item">
        <h1 class="title">{{title}}</h1>
        <p class="content">
            <span>摘要</span>
            {{content}}
        </p>
    </div>
</template>
<script>
    export default {
        props:{
            title:String,
            content:String
        }
    }
</script>
<style lang="less" scoped>
    .abstract-item{
        padding: 24px 0;
        border-bottom: 2px solid #c2c2c2;
        overflow: hidden;
        cursor: pointer;
        .title{
            font-size: 25px;
        }
        .content{
            text-align: left;
            line-height: 36px;
            background-color: #f3f3f3;
            padding: 0 23px;
            border-radius: 6px;
            margin-top: 18px;
            span{
                background-color: #00238c;
                border-radius: 4px;
                color: #fff;
                padding: 2px 5px;
                margin-right: 5px;
                position: relative;
            }
            span:before{
                content:'';
                // display: inline-block;
                position: absolute;
                right: -15px;
                top: 4px;
                border-left: 8px solid #00238c;
                border-top: 8px solid transparent;
                border-right: 8px solid transparent;
                border-bottom: 8px solid transparent;
            }
        }
    }
</style>
