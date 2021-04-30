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
      <button class="wtzx1" @click="eConsultation">委托咨询</button>
      <!-- 委托咨询结束 -->

      <!-- 在线委托开始 -->
      <button class="wtzx2" @click="zxEntrust">在线委托</button>
      <!-- 在线委托结束 -->
    </div>
    <!-- 委托按钮结束 -->

    <!-- 甩手掌柜开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />甩手掌柜</div>
      </div>
      <div class="neirong">易房通专家打理，房屋升级改造，配置全新家具家电，省心省力，坐享收益；</div>
    </div>
    <!-- 甩手掌柜结束 -->

    <!-- 安心无忧开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />安心无忧</div>
      </div>
      <div class="neirong">出租人群严格把控，品质租户，保证房屋完善及优质保洁；</div>
    </div>
    <!-- 安心无忧结束 -->

    <!-- 品牌有保障开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />品牌有保障</div>
      </div>
      <div class="neirong">易房通已入驻全国13大主流城市，越来越多的业主加入我们；</div>
    </div>
    <!-- 品牌有保障结束 -->

    <!-- 加入我们开始 -->
    <div class="join">
        <p>委托热线:400-6800-869</p>
    </div>
    <!-- 加入我们结束 -->


    
    <!-- 提醒授权开始 -->
    <div class="authorization" v-if="telHid">
      <div class="authorization_title">授权提示</div>
      <div class="authorization_text">为了更好的为您提供服务，我们请求获取您的电话号码</div>
      <div class="authorization_btn">
        <button @click="quxiao">取消</button>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" hover-class="none">允许</button>
      </div>
    </div>
    <!-- 提醒授权结束 -->
    <!-- 遮罩层开始 -->
     <!--x --> 
    <div class="modalMask" v-if="maskHid"></div>
    <!-- 遮罩层结束 -->
   
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      img1:"/static/images/wt1.jpg",
      img2:app.globalData.imgurl +"quan.png",
      maskHid:false,
      telHid:false,
 


    }
  },
   methods: {
    //点击取消授权
    quxiao:function(){
      const that = this;
      that.telHid=false;
      that.maskHid=false;
    },
    //点击获取手机号
    getPhoneNumber(e){
      const that = this;    
      if (e.mp.detail.errMsg == "getPhoneNumber:ok") {
        wx.request({
          url: app.globalData.url +"WxLogin/getPhoneNumber?sessionKey="+app.globalData.sessionKey,
          method:"POST",
          data: {
            encryptedData:e.mp.detail.encryptedData,
            iv:e.mp.detail.iv
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            var obj = JSON.parse(res.data.Context.phoneNumber.trim());
            that.purePhoneNumber=obj;
              wx.request({
                url: app.globalData.url +"WxLogin/RegisterLogin" +"?sessionKey=" +app.globalData.sessionKey,
                method:"POST",
                data: {
                  nickname:that.nickname,
                  headpic:that.headpic,
                  mobile:that.purePhoneNumber
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success (data) {
                  console.log("deng",data)
                  if(data.data.Code==0){
                    that.telHid=false;
                    that.maskHid=false;
                    wx.setStorageSync('member',data.data.Context.member);
                    that.openType="";
                    app.globalData.member=data.data.Context.member; 
                    that.zxEntrust();

                  
                  }
                }
              })
          }
        })
      }
    },
    //在线委托
    zxEntrust:function(){
      const that = this; 
      wx.request({
        url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          if(data.data==true){
            that.telHid=false;
            that.maskHid=false;
            //显示TabBar
            wx.showTabBar({
              animation: true
            })
            wx.navigateTo({ url: "/pages/zxcommissioned/main"});
          }else{
            that.telHid=true;
            that.maskHid=true;
            //隐藏TabBar
            wx.hideTabBar({
              animation: true
            })
          }
        }
      })
      // wx.navigateTo({ url: "/pages/zxcommissioned/main"});
    },
    eConsultation:function(){
      wx.makePhoneCall({
        phoneNumber: '4006800869' 
      })
    }


 

 
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
.zoub{ font-size: 38rpx; font-weight: bold; float: left; width:85%;}
.zoub image{ width:30rpx; height: 30rpx; margin-right: 3%;}
.xiangxi{ font-size:28rpx; float: right; color: rgb(170, 170, 170); margin-top:1%;} 
.neirong{ margin-top:3%; line-height:50rpx; font-size:28rpx; color: rgb(139, 139, 139);}
/* 加入我们 */
.join{ margin-top:10%; margin-bottom: 10%;}
.join button{ width:400rpx; height:100rpx; line-height: 100rpx; border-radius:50rpx;background-image: linear-gradient(to right, #64e4cc, #45c8cd); color: #fff;}
.join p{ color: #999999; font-size:28rpx; text-align: center; margin-top:3%;}


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
