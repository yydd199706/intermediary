<template>
  <div class="indexstyle">
    
    <div class="newschat" v-if="newsHid">
      <div class="chatlist" v-for="(item, index) in chatlistarr" :key="index" @click="messageBox(item.type)">
        <div class="chat_lelf">
          <div class="num" v-if="item.userid==member.hxid ? false : true">{{item.replynum}}</div>
          <div v-if="item.userid==member.hxid ? true : false"><image v-if="domain" :src="item.headpic =='' ? magImgurl : domain+item.headpic" class="slide-image" /></div>
          <div v-if="item.userid!=member.hxid ? true : false"><image v-if="domain" :src="member.headpic =='' ? magImgurl : domain+member.headpic" class="slide-image" /></div>
        </div>
        <div class="chat_right">
          <div>
            <div class="title_bt">{{item.nickname==""||item.nickname==null ? item.realname: item.nickname}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="content_nr">{{item.msg}}</div>
        </div>
      </div>
    </div>

    <!-- 暂未登录开始 -->
    <div class="notLogged" v-if="LoggedHid">
      <image :src="zanwu" />
      <div class="textzw">您尚未登录，无法查看消息</div>
      <!-- <button>立即登录</button> -->
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" hover-class="none">立即登录</button>

    </div>
    <!-- 暂未登录结束 -->






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
      chatlistarr:[],
      magImgurl:app.globalData.imgurl +"meimg.png",
      // telHid:false, 
      maskHid:false,
      newsHid:false,
      LoggedHid:true,
      zanwu:app.globalData.imgurl +"zaw.png",
      domain:null,
      member: null,

     


    }
  },
  onLoad(option) {
    const that = this;
    
  }, 
  onShow(){
    const that = this;
    that.domain=app.globalData.domain;
    that.member=app.globalData.member;
    wx.request({
      url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
      success: function (data) {
        if(data.data==true){
          that.maskHid=false;
          that.newsHid=true;
          that.LoggedHid=false;
          that.MailingList();
        }else{
          that.maskHid=false;
          that.newsHid=false;
          that.LoggedHid=true;
        }

      }
    })
    

 

  },




  methods: {
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
                  console.log("dengll",data)
                  if(data.data.Code==0){
                    that.maskHid=false;
                    wx.setStorageSync('member',data.data.Context.member);
                    that.openType="";
                    app.globalData.member=data.data.Context.member; 
                    that.member = data.data.Context.member; 
                    that.newsHid=true;
                    that.LoggedHid=false;
                    //调用聊天列表
                    that.MailingList();

                    wx.showTabBarRedDot({
                      index: 3,
                      success() {},
                      fail() {},
                    })
                    
                    
                    
                     

                  
                  }
                }
              })
          }
        })
      }
    },

    // 获取即时通讯列表接口
    MailingList(){
      const that = this;
      //获取聊天列表
      wx.request({
        url:app.globalData.url +"Msn/BandHouseEntrusList" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (res) {
          console.log("聊天列表",res)
          that.chatlistarr = res.data.Context.msnList;
          for(var i = 0;i<that.chatlistarr.length;i++){
              that.chatlistarr[i].time = that.chatlistarr[i].time.substring(0, 10);;
            }
        }
      })

    },

    // 点击聊天消息进入聊天消息框
    messageBox:function(type){
      if(type==1){
        wx.navigateTo({ url: "/pages/chatOld/main"});
      } else if(type==2){
        wx.navigateTo({ url: "/pages/chatNew/main"});
      } else if(type==3){
        wx.navigateTo({ url: "/pages/chatRental/main"});
      }
      
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
 .content_nr{ margin-top: 15rpx; margin-bottom:15rpx; font-size: 30rpx; height: 40rpx; line-height: 40rpx; color: #b3b3b3;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

/* 暂无登录 */
.notLogged{ width: 100%;}
.notLogged image{ width:370rpx; height:368rpx; display: block; margin: 0 auto; margin-top:180rpx;}
.notLogged .textzw{ font-size: 34rpx; color: #9399a5; text-align: center; margin-top:50rpx; margin-bottom:130rpx;}
.notLogged button{ width: 80%; height:90rpx; line-height: 90rpx; text-align: center; background:#3072f7; font-size: 32rpx; color: #fff; border-radius: 10rpx;}


 
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
