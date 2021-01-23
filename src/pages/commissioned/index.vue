<template>
  <div class="indexstyle">
    <!-- 图片开始 -->
    <div class="tu_img">
      <image :src="img1" />
    </div>
    <!-- 图片结束 -->

    <!-- 委托按钮开始 -->
    <div class="weituo">
      <!-- 委托咨询开始 -->
      <button class="wtzx1">委托咨询</button>
      <!-- 委托咨询结束 -->

      <!-- 在线委托开始 -->
      <button class="wtzx2">在线委托</button>
      <!-- 在线委托结束 -->
    </div>
    <!-- 委托按钮结束 -->

    <!-- 甩手掌柜开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />甩手掌柜</div>
        <div class="xiangxi">详细 ></div>
      </div>
      <div class="neirong">易房通专家打理，房屋升级改造，配置全新家具家电，省心省力，坐享收益；</div>
    </div>
    <!-- 甩手掌柜结束 -->

    <!-- 安心无忧开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />安心无忧</div>
        <div class="xiangxi">详细 ></div>
      </div>
      <div class="neirong">出租人群严格把控，品质租户，保证房屋完善及优质保洁；</div>
    </div>
    <!-- 安心无忧结束 -->

    <!-- 品牌有保障开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />品牌有保障</div>
        <div class="xiangxi">详细 ></div>
      </div>
      <div class="neirong">易房通已入驻全国13大主流城市，越来越多的业主加入我们；</div>
    </div>
    <!-- 品牌有保障结束 -->

    <!-- 加入我们开始 -->
    <div class="join">
        <button>加入我们</button>
        <p>委托热线:0915-0000-000</p>
    </div>
    <!-- 加入我们结束 -->


    






   
  

  </div>
</template>

<script>
export default {
  data () {
    return {
      img1:"http://vip.yijienet.com/tt/img1.jpg",
      img2:"/static/images/quan.png",
 


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
.tu_img image{ width: 100%; height: 500rpx; border-radius:20rpx;box-shadow:3px 8px 1px #ebebeb;}
/* 委托开始 */
.weituo{ width: 94%; margin-left:3%; margin-right:3%; display: flex; flex-direction: row; margin-top:7%;}
.weituo button{ width:46%; height:90rpx; background: #ffc543; font-size: 30rpx; text-align: center; line-height: 90rpx; margin-left: 2%; margin-right: 2%;box-shadow:3px 3px 6px #ffd67c; color: #fff;}
.weituo button::after{border: none;}
.weituo button.wtzx2{ background: #4681f6; box-shadow:3px 3px 6px #5288f5;}
/* 甩手掌柜开始 */
.sszg{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:5%;}
.ss_biaoti{ margin-top:10%; overflow: hidden; }
.zoub{ font-size: 38rpx; font-weight: bold; float: left; width:85%;}
.zoub image{ width:30rpx; height: 30rpx; margin-right: 3%;}
.xiangxi{ font-size:28rpx; float: right; color: rgb(170, 170, 170); margin-top:1%;} 
.neirong{ margin-top:3%; line-height:50rpx; font-size:28rpx; color: rgb(139, 139, 139);}
/* 加入我们 */
.join{ margin-top:10%; margin-bottom: 10%;}
.join button{ width:400rpx; height:100rpx; line-height: 100rpx; border-radius:50rpx;background-image: linear-gradient(to right, #64e4cc, #45c8cd); color: #fff;}
.join p{ color: #999999; font-size:28rpx; text-align: center; margin-top:3%;}



</style>
