<template>
  <div class="indexstyle">
    <!-- 顶部服务号开始 -->
    <div class="fuwh">
      <div class="beijing"><image :src="img1" /></div>
      <div class="ewm">
        <image :src="img2" />
        <h2>关注<span>易房通</span>公众号</h2>
        <p>【点击保存二维码图片】</p>
      </div>
    </div>
    <!-- 顶部服务号结束 -->
    <!-- 关注流程开始 -->
    <div class="liucheng">
       <div><span>/ /</span><h3>关注流程</h3><span>/ /</span></div>
       <image :src="img3" />
    </div>
    <!-- 关注流程结束 -->



    

  
  
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      img1: app.globalData.imgurl + "gzfwh.png", 
      img2: app.globalData.imgurl + "gzh.jpg", 
      img3: app.globalData.imgurl + "lc.jpg",
 


    }
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
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}

.beijing image{width: 100%; height:450rpx; }
.ewm{ position: absolute; top:20%; z-index: 999;}
.ewm image{ width:300rpx; height:300rpx; display: block; margin-left:70%;box-shadow: 1px 1px 5px #d6d6d6;}
.ewm h2{ font-size: 35rpx; margin-top: 10%; margin-left:75%; width: 100%; font-weight: bold;}
.ewm h2 span{ color: rgb(40, 158, 255);}
.ewm p{ font-size: 28rpx; margin-top: 5%; margin-left:68%; width: 100%;}

.liucheng{ width:86%; margin-left:7%; height:15rpx; margin-right:7%; border-bottom:2rpx dashed #ccdbff; position: absolute; top:60%; margin-bottom: 10%;}
.liucheng div{ width:207rpx; padding-left:3%; padding-right:3%; margin: 0 auto; display: flex; flex-direction: row; background: #fff; position: absolute; top:-30%; left:30%;} 
.liucheng div h3{ font-size: 32rpx; margin-left: 5%; margin-right: 5%; font-weight: bold; }
.liucheng div span{ font-size: 20rpx; margin-top:3%; color: #98b7fc; font-weight: bold; }
.liucheng image{ width: 100%; margin-top:8%; height:400rpx;}

</style>
