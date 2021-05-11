<template>
  <div class="indexstyle">
    
    <div class="newschat">
      <div class="chatlist" v-for="(item, index) in chatlistarr" :key="index">
        <div class="chat_lelf">
          <div class="num">{{item.num}}</div>
          <image :src="item.img1" />
        </div>
        <div class="chat_right">
          <div>
            <div class="title_bt">{{item.title}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="content_nr">{{item.content}}</div>
        </div>
      </div>
    </div>



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
      chatlistarr:[
        {img1:"/static/images/meimg.png",num:2,title:"杨女士",time:"2021-4-27",content:"您好"},
        {img1:"/static/images/meimg.png",num:2,title:"杨女士",time:"2021-4-27",content:"您好"},
        {img1:"/static/images/meimg.png",num:2,title:"杨女士",time:"2021-4-27",content:"您好"}
      ],
      maskHid:true,
      telHid:true, 

     


    }
  },
  onLoad(option) {
    const that = this;
    that.domain=app.globalData.domain;
    
    






  }, 
  onShow(){
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






    // wx.request({
    //   url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
    //   success: function (data) {
    //     console.log("检查",data)
    //     if(data.data==true){
    //       //显示TabBar
    //       wx.showTabBar({
    //         animation: true
    //       })
    //       if(that.telHid==false){
    //         //显示TabBar
    //       wx.showTabBar({
    //         animation: true
    //       })

    //       }
    //     }else{
    //       //隐藏TabBar
    //       wx.hideTabBar({
    //         animation: true
    //       })
    //     }
    //   }
    // })
    // if(that.telHid==true){
    //   // that.telHid=true;
    //   // that.maskHid=true;
    //   //隐藏TabBar
    //   wx.hideTabBar({
    //     animation: true
    //   })
      
      
    // }else if(that.telHid==false){
    //   // that.telHid=false;
    //   // that.maskHid=false;
    //   //显示TabBar
    //   wx.showTabBar({
    //     animation: true
    //   })
      
    // }

  },




  methods: {
    //点击取消授权
    quxiao:function(){
      const that = this;
      that.telHid=false;
      that.maskHid=false;
      //显示TabBar
      wx.showTabBar({
        animation: true
      })
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
                    //显示TabBar
                    wx.showTabBar({
                      animation: true
                    })
                    // that.zxEntrust();
                    //获取聊天列表
                    wx.request({
                      url:app.globalData.url +"Msn/BandHouseEntrus" +"?sessionKey=" +app.globalData.sessionKey,
                      success: function (res) {
                        console.log("聊天列表",res)
                      }
                    })

                  
                  }
                }
              })
          }
        })
      }
    },
    
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

.newschat{ width: 90%; margin-left: 5%; margin-right: 5%;}
.chatlist{ overflow: hidden; margin-bottom: 10rpx;}
.chat_lelf{ float: left; width:22%;}
.chat_lelf image{ width: 120rpx; height: 120rpx; border-radius: 50%;}
.chat_lelf .num{ width:30rpx; height:30rpx; text-align: center; line-height:30rpx;  border-radius: 50%; background: rgb(247, 1, 1);
 color: #fff; position: relative; top:40rpx; left:90rpx; z-index: 99; font-size: 24rpx;}
 .chat_right{ float: left; border-bottom: 1rpx rgb(241, 241, 241) solid; width:78%; margin-top:35rpx;}
 .chat_right>div{ overflow: hidden;}
 .title_bt{ float: left; font-size: 34rpx; font-weight: bold;}
 .time{ float: right; font-size: 24rpx; color: #b7b9bb;}
 .content_nr{ margin-top: 15rpx; margin-bottom:15rpx; font-size: 30rpx; color: #b3b3b3;}

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
