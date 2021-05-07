<template>
  <div class="indexstyle">
    <!-- 关于我们开始 -->
    <div class="aboutusLogo">
      <image :src="logo" />
      <div class="title1">易房通</div>
      <!-- <div class="title2">找易房通平台</div> -->
    </div>
    <div class="aboutusBottom">
      <div class="text">顺应“互联网+”时代需求，旨在打造一个新型的房地产线上服务平台，为房地产开发企业、经纪机构和购房者群体构建更为完善互惠的服务渠道，让房产交易更加精准、快捷、便利，提高服务品质，降低交易成本。</div>
      <div class="website">官方网站：http://www.e-fangtong.com/index.aspx</div>
      <div class="Telephone">客服电话：400-680-0869</div>
    </div>
    <!-- 关于我们结束 -->
 
   
 
   
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      logo: app.globalData.imgurl +"logo.png"
 
 


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
 
/* .AboutUs{ width:86%; margin-left:7%; margin-right:7%;}
.AboutUs .ab_bt{ text-align: center; font-size: 35rpx; margin-top: 5%; margin-bottom: 5%; font-weight: bold; color: #535353; }
.AboutUs .ab_jj{ font-size: 30rpx; line-height:58rpx; text-indent: 2em; color: #7b7b7b;  } */
.aboutusLogo{ width: 100%;}
.aboutusLogo image{ width:200rpx; height:200rpx; margin: 0 auto; display: inherit; margin-top:240rpx;}
.aboutusLogo .title1{ font-size:36rpx; color: #3a424c; text-align: center; font-weight: 700; margin-top: 20rpx;}
.aboutusLogo .title2{ font-size:30rpx; text-align: center; margin-top: 10rpx; }
.aboutusBottom{ width: 90%; margin-left:5%; margin-right:5%; margin-top:300rpx;}
.text{ font-size:29rpx; line-height: 45rpx; color: #3a424c;}
.website{ font-size:29rpx; margin-top:24rpx; color: #a6a6a6;}
.Telephone{ font-size:29rpx; margin-top: 10rpx; color: #a6a6a6;}


</style>
