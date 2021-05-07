<template>
  <div class="indexstyle">
    <!-- 跳转线上售楼部 -->
    <web-view :src="linkurl"></web-view>
  </div>

</template>

<script>
const app = getApp();
 const common = require("@/utils/index");
  export default {
    data() {
      return {
        linkurl:"",
        chating:"",
      }
    },
    onLoad(option){
      const that = this;
      that.chating=option.chating;

      if(that.chating=="1"){
        that.linkurl = 'https://mp.weixin.qq.com/s/0zX1UVKryZLdQUrvjBll3A';
        console.log("路径",that.linkurl)
      }
      else if(that.chating=="2"){
        that.linkurl = 'https://mp.weixin.qq.com/s/lL3OPPt2oCkkmwzK6yTyWg';
      }
      else if(that.chating=="3"){
        that.linkurl = 'https://mp.weixin.qq.com/s/ohROPRHc24onrn6dCi3SUg';
      }
      else if(that.chating=="4"){
        that.linkurl = 'https://mp.weixin.qq.com/s/ACEM2b_QrTQLyYWYSHQgfQ';
      }
      


    },
    onShow(){
      const that = this;
 
    },
    methods: {
 



    }



  }

</script>



<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.fl{ float: left;}
.fr{ float: right;}
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}

/* 搜索 */
.sousuo{ width: 90%;  margin: 0 auto; margin-left: 5%;position: relative;background: #f2f2f2;border-radius:60rpx;}
.sousuo input{ height:80rpx; line-height:80rpx; width:80%;margin-left: 80rpx;font-size: 26rpx;}
.sousuo image{ width:40rpx; height:40rpx; position: absolute; top:20rpx; left:3%; }
 
.hotsousuo{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:6%; }
.hotsousuo h1{ font-size: 40rpx; font-weight: bold;}
.ssci{ margin-top:1%; width: 100%; }
.xmss{ margin-top:6%; padding-left:5%; padding-right:10%;float: left; display: flex; flex-direction: row; }
.xmss p{ font-size:31rpx;  }
.xmss image{ width: 24rpx; height:30rpx; position: relative; left:15rpx; }
.esfList{width: 90%;margin: 0 auto;}
.esfList>div{width: 100%;border-bottom: 2rpx solid #E4E6F0;overflow: hidden;height: 85rpx;line-height: 85rpx;font-size: 26rpx;
}
.esfList>div>div:first-child{float: left;}
.esfList>div>div:nth-child(2){float: right;}
</style>
