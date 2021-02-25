<template>
  <div class="indexstyle">

    <!-- 客户信息开始 -->
    <div class="user">
      <!-- <button class="kehuxx" :open-type="openType" @getphonenumber="getPhoneNumber">
        <image :src="img1" />
        <span>{{purePhoneNumber}}</span>
      </button> -->
      
        <!-- <button open-type="getUserInfo">获取昵称</button> -->
        <div class="userLeft">
          <button class="kehuxx" :open-type="openType" @getphonenumber="getPhoneNumber"><image :src="img1" /></button>
        </div>
        <div class="userRight">
          <button :open-type="openType" @getphonenumber="getPhoneNumber">{{purePhoneNumber}}
            <span v-if="openType==''?true:false">{{type==1?'(普通用户)':'(经纪人)'}}</span></button>
          <button>{{nickname}}</button>
        </div>
    </div>
    <!-- 客户信息结束 -->

    <div class="anniu_h">
      <button class="l_xiaoxi">
        <image :src="img2" /> 
        <p>消息</p>
      </button>

      <button class="l_xiaoxi">
        <image :src="img3" /> 
        <p>关注</p>
      </button>

      <button class="l_xiaoxi">
        <image :src="img4" /> 
        <p>收藏</p>
      </button>
    </div>


    <div class="anniu2">

      <button class="liulan1">
        <div class="wzan_lelf">
          <image :src="img5" />
          <span>浏览记录</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1">
        <div class="wzan_lelf">
          <image :src="img7" />
          <span>关注服务号</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1">
        <div class="wzan_lelf">
          <image :src="img8" />
          <span>客服电话</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1">
        <div class="wzan_lelf">
          <image :src="img9" />
          <span>关于我们</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>


    </div>
    <div class="company">
      <div>技术支持：易房通网络科技有限公司</div>
      <div>0915-8885557</div>
    </div>
 
  
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    xianshi:false;
    return {
      img1:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2435093970,3292456683&fm=26&gp=0.jpg',
      purePhoneNumber:'请登录',
      img2:app.globalData.imgurl +"xx.png",
      img3:app.globalData.imgurl +"gz2.png",
      img4:app.globalData.imgurl +"gz1.png",
      img5:app.globalData.imgurl +"ll.png",
      img6:app.globalData.imgurl +"jt1.jpg",
      img7:app.globalData.imgurl +"guan.png",
      img8:app.globalData.imgurl +"dh1.png",
      img9:app.globalData.imgurl +"gy.png",
      openType:"getPhoneNumber",
      nickname :"",
      type:1
 


    }
  },
  onShow(){
    const that = this;
    wx.request({
        url:app.globalData.url +"WxLogin/CheckSessionKey" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (res) {
          
          if(res.data==true && wx.getStorageSync('member') !=""){
            that.openType="";
            wx.request({
        url:app.globalData.url +"Percenter/BandUserInfo" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          console.log("data",res);
          wx.setStorageSync('member',data.data.Context.member);
          app.globalData.member=data.data.Context.member;
          that.purePhoneNumber=app.globalData.member.mobile;
          that.img1=app.globalData.domain+app.globalData.member.headpic;
          that.nickname=app.globalData.member.nickname;
          that.type=app.globalData.member.type;
        }
        })
            }else{
            that.purePhoneNumber="请登录";
            that.openType="getPhoneNumber";
          }
        }
    });
    
  },
  methods:{
    authSetUser(res){
      console.log(res);

    },
       //点击获取手机号
    getPhoneNumber(e){
      const that = this;      
      console.log('手机号',e.mp);
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
        console.log('res',res.data.Context.phoneNumber);
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
        console.log('data',data);
        if(data.data.Code==0){
          wx.setStorageSync('member',data.data.Context.member);
          console.log('已授权');
          that.openType="";
          app.globalData.member=data.data.Context.member;
          that.purePhoneNumber=app.globalData.member.mobile;
          that.img1=app.globalData.member.headpic;
          that.nickname=app.globalData.member.nickname;
          that.type=app.globalData.member.type;
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
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
 

.user{width:100%;margin: 0 auto;overflow: hidden; box-sizing: border-box;height:310rpx;background-image: linear-gradient(to right, #14affd, #016dfe); }
.kehuxx{ width:100%; padding-left: 5%; padding-right: 5%; overflow: hidden; padding-top:6%; }
.kehuxx image{ float: left; width: 120rpx; height: 120rpx; border-radius: 50%; margin-right: 5%;width: 100%;height: 100%;} 
.kehuxx span{ float: left; font-size:42rpx; margin-top:2%; color: #fff;}
/* .user button{ color: #fff;border-radius:0; font-size: 28rpx; background: none;}
.user button::after{border: none;} */
.userLeft{float: left;padding-left: 5%;padding-top:6%;width: 120rpx;height: 120rpx;}
.userLeft>button{background: none;width: 100%;height: 100%;}
.userLeft>button::after{border: none;}
.userRight{float: left;padding-top: 8%;}
.userRight>button{background: none;height: 50rpx;line-height: 50rpx;color: #fff;font-size: 28rpx;text-align: left;}
.userRight>button::after{border: none;}
 
/* .anniu_h{width:82%; margin-left: 5%; margin-right: 5%; padding-left:3%; padding-right: 5%; margin-top:7%; padding-bottom:6%;  border-bottom: 10px #ececec solid; overflow: hidden; position: relative; top: -30rpx;  } */
.anniu_h{ width: 90%; margin-left: 5%; margin-right: 5%; padding-top: 30rpx; padding-bottom: 30rpx; position: absolute; top:220rpx; z-index: 999; background: #fff !important; border-radius: 30rpx;}

.anniu_h .l_xiaoxi{ float: left; width:33.3%;  }
.anniu_h .l_xiaoxi image{ width: 60rpx; height: 60rpx; margin: 0 auto; display: block;}
.anniu_h .l_xiaoxi p{ font-size: 28rpx; text-align: center; margin-top:5%;}
.anniu_h button{ color: #000;border-radius:0; font-size: 28rpx; background: none; border: 0;}
.anniu_h button::after{border: none;}


.anniu2{width: 90%; padding-left: 5%; padding-right: 5%; margin-top:100rpx; padding-bottom: 8%; overflow: hidden;}
.liulan1{ border-bottom: 1px rgb(241, 241, 241) solid; overflow: hidden; height:120rpx; line-height: 80rpx; padding-top: 5%; padding-right: 5%;}
.liulan1 .wzan_lelf{ float: left; width: 70%;} 
.liulan1 .wzan_lelf image{float: left; width:48rpx; height:48rpx; margin-top:5%; margin-right: 5%; display: block;}
.liulan1 .wzan_lelf span{ font-size:32rpx; float: left; margin-top: 4px;}
.liulan1 .jt_right{ float: right;}
.liulan1 .jt_right image{ width:20rpx; height:20rpx;}
.anniu2 button{ border-radius:0; background: none; border: 0;}
.anniu2 button::after{border: none;}
.company{text-align: center;color: #8b919a;font-size: 26rpx !important;}
.company>div{font-size: 26rpx !important;margin-top: 15rpx;}
</style>
