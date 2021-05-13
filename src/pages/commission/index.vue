<template>
  <div class="indexstyle">

    <div class="zyj"><image :src="zyj" mode="widthFix" /></div>

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      zyj:app.globalData.imgurl +"zyj.png",
 

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
/* 图片开始 */
.tu_img{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top: 5%;}
.tu_img image{ width: 100%; height:450rpx; border-radius:20rpx;box-shadow:3px 8px 1px #ebebeb;}
/* 委托开始 */
.weituo{ width: 94%; margin-left:3%; margin-right:3%; display: flex; flex-direction: row; margin-top:7%;}
.weituo button{ width:46%; height:90rpx; background: #ffc543; font-size: 30rpx; text-align: center; line-height: 90rpx; margin-left: 2%; margin-right: 2%;box-shadow:3px 3px 6px #ffd67c; color: #fff;}
.weituo button::after{border: none;}
.weituo button.wtzx2{ background: #4681f6; box-shadow:3px 3px 6px #5288f5;}
/* 甩手掌柜开始 */
.sszg{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:5%;}
.ss_biaoti{ margin-top:10%; overflow: hidden; }
.zoub{ font-size: 38rpx; font-weight: bold; float: left; width:75%;}
.zoub image{ width:30rpx; height: 30rpx; margin-right: 3%;}
.xiangxi{ font-size:28rpx; float: right; color: rgb(170, 170, 170); margin-top:5rpx;} 
.neirong{ margin-top:3%; line-height:50rpx; font-size:28rpx; color: rgb(139, 139, 139);}
/* 加入我们 */
.join{ margin-top:10%; margin-bottom: 10%;}
.join button{ width:400rpx; height:100rpx; line-height: 100rpx; border-radius:50rpx;background-image: linear-gradient(to right, #64e4cc, #45c8cd); color: #fff;}
.join p{ color: #999999; font-size:28rpx; text-align: center; margin-top:3%;}

.zyj{ width: 100%;}
.zyj image{ width: 100%;}


/* 提醒授权开始 */
.authorization{width: 80%;margin: 0 auto;position: fixed;top: 390rpx;left: 10%;z-index:999999999;
background: #fff;padding: 30rpx 30rpx 60rpx 30rpx;box-sizing: border-box;border-radius: 10rpx;}
.authorization_title{font-size: 32rpx;color: #040404;font-weight: 700;padding-bottom: 30rpx;
text-align: center;}
.authorization_text{font-size: 28rpx;}
.authorization_btn{justify-content: center;display: flex;margin-top: 30rpx;}
.authorization_btn>button:first-child{background: #EEEEEE;color: #2F2F2F;}
.authorization_btn>button:nth-child(2){margin-right: 0;background: #2e72f1;color: #fff;}
.authorization_btn>button{margin-right: 10%;margin-left: 0;padding: 0;width: 45%;font-size: 28rpx;}
.authorization_btn>button::after{border: none;}
/* 提醒授权结束 */
/* 遮罩层开始 */
.modalMask {
  width: 100% !important;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: #000 !important;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
/* 遮罩层结束 */

</style>
