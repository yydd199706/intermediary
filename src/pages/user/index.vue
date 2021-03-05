<template>
  <div class="indexstyle">
    <!-- 客户信息开始 -->
    <div class="bjtu"><image :src="beijing" /></div>
    <div class="user">
      <!-- <button class="kehuxx" :open-type="openType" @getphonenumber="getPhoneNumber">
        <image :src="img1" />
        <span>{{purePhoneNumber}}</span>
      </button> -->

      <!-- <button open-type="getUserInfo">获取昵称</button> -->
      <div class="userLeft">
        <button
          class="kehuxx"
          :open-type="openType"
          @getphonenumber="getPhoneNumber"
        >
          <image :src="member != null ? domain+member.headpic : img1" />
        </button>
      </div>
      <div class="userRight">
        <button :open-type="openType" @getphonenumber="getPhoneNumber">
          {{ member != null ? member.mobile : "请登录" }}
          <span v-if="member != null ? true : false">{{
            member.type == 1 ? "(普通用户)" : "(经纪人)"
          }}</span>
        </button>
        <button>{{ member != null ? member.nickname : "" }}</button>
      </div>
      <div
        class="outLogin"
        v-if="member != null ? true : false"
        @click="OutLogin"
      >
        退出登录
      </div>
    </div>
    <!-- 客户信息结束 -->

    <div class="anniu_h">
      <button class="l_xiaoxi" @click="messageList" :open-type="openType"
          @getphonenumber="getPhoneNumber">
        <image :src="img2" />
        <p>消息</p>
      </button>

      <button class="l_xiaoxi" @click="FocusOnList" :open-type="openType"
          @getphonenumber="getPhoneNumber">
        <image :src="img3" />
        <p>关注</p>
      </button>

      <!-- <button class="l_xiaoxi">
        <image :src="img4" />
        <p>收藏</p>
      </button> -->
    </div>

    <div class="anniu2">
      <button class="liulan1" @click="browsingList" v-if="member != null&&member.type == 1 ? true : false">
        <div class="wzan_lelf">
          <image :src="img5" />
          <span>浏览记录</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1" @click="releaseList" v-if="member != null&&member.type == 2 ? true : false" 
      :open-type="openType"@getphonenumber="getPhoneNumber">
        <div class="wzan_lelf">
          <image :src="img10" />
          <span>发布记录</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1" @click="serviceNoList">
        <div class="wzan_lelf">
          <image :src="img7" />
          <span>关注服务号</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1" @click="telClick">
        <div class="wzan_lelf">
          <image :src="img8" />
          <span>客服电话</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1" @click="aboutUsList">
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
  data() {
    xianshi: false;
    return {
      img1:app.globalData.imgurl + "ren.png",
      purePhoneNumber: "请登录",
      img2:app.globalData.imgurl + "xx1_u.png",
      img3:app.globalData.imgurl + "xx2.png",
      img4:app.globalData.imgurl + "xx3.png",
      img5:app.globalData.imgurl + "l1.png",
      img6:app.globalData.imgurl + "jts.png",
      img7:app.globalData.imgurl + "l3.png",
      img8:app.globalData.imgurl + "l4.png",
      img9:app.globalData.imgurl + "l5.png",
      img10:app.globalData.imgurl + "l2.png",
      beijing:app.globalData.imgurl +"grbj.jpg",
      openType: "getPhoneNumber",
      member: null,
      domain:null
    };
  },
  onShow() {
    const that = this;
    that.domain=app.globalData.domain;
    wx.request({
      url:
        app.globalData.url +
        "Percenter/BandUserInfo" +
        "?sessionKey=" +
        app.globalData.sessionKey,
      success: function (data) {
        if (data.data.Code == 0) {
          app.globalData.member = data.data.Context.member;
          console.log("member",app.globalData.member.id);
          that.member = app.globalData.member;
          that.openType = "";
        } else {
          that.purePhoneNumber = "请登录";
          that.openType = "getPhoneNumber";
        }
      },
    });
  },
  methods: {
    authSetUser(res) {
      console.log(res);
    },
    //点击获取手机号
    getPhoneNumber(e) {
      const that = this;
      //获取手机号时点击允许
      if (e.mp.detail.errMsg == "getPhoneNumber:ok") {
        //调用获取手机号接口传参
        wx.request({
          url:
            app.globalData.url +
            "WxLogin/getPhoneNumber?sessionKey=" +
            app.globalData.sessionKey,
          method: "POST",
          data: {
            encryptedData: e.mp.detail.encryptedData,
            iv: e.mp.detail.iv,
          },
          header: {
            "content-type": "application/json", // 默认值
          },
          //成功获取到手机号，转换手机号类型
          success(res) {
            var obj = JSON.parse(res.data.Context.phoneNumber.trim());
            that.purePhoneNumber = obj;
            //获取到手机号后登录接口给后台传参
            wx.request({
              url:
                app.globalData.url +
                "WxLogin/RegisterLogin" +
                "?sessionKey=" +
                app.globalData.sessionKey,
              method: "POST",
              data: {
                mobile: that.purePhoneNumber,
              },
              header: {
                "content-type": "application/json", // 默认值
              },
              //成功拿到个人中心数据
              success(data) {
                console.log("data", data);
                //如果code后台返回状态为0的话，已授权
                if (data.data.Code == 0) {
                  that.openType = "";
                  app.globalData.member = data.data.Context.member;
                  that.member = app.globalData.member;
                }
              },
            });
          },
        });
      }
    },
    //退出登录
    OutLogin: function () {
      const that = this;
      wx.request({
        url:
          app.globalData.url +
          "WxLogin/OutLogin" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        //成功拿到个人中心数据
        success(data) {
          that.member = null;
          app.globalData.member = null;
          that.openType = "getPhoneNumber";
        },
      });
    },

    //点击跳转消息页面
    messageList:function(){
      const that = this;
      if(that.openType==""){
      wx.navigateTo({ url: "/pages/message/main"});
      }
    },
    //点击跳转关注列表页面
    FocusOnList:function(){
      const that = this;
      if(that.openType==""){
        wx.navigateTo({ url: "/pages/userguanzhu/main"});
      } 
      
    },
    //点击跳转浏览记录列表页面
    browsingList:function(){
      wx.navigateTo({ url: "/pages/userbrowsing/main"});
    },
    //点击跳转发布记录列表页面
    releaseList:function(){
      wx.navigateTo({ url: "/pages/userRelease/main"});
    },
    //点击跳转关注服务号页面
    serviceNoList:function(){
      wx.navigateTo({ url: "/pages/userService/main"});
    },
    //点击跳转关于我们页面
    aboutUsList:function(){
      wx.navigateTo({ url: "/pages/aboutUs/main"});
    },
    //点击客服电话
    telClick:function(){
      wx.makePhoneCall({
        phoneNumber: "0915-8889993"
      })
    }


  },
};
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;
}
.hsxian {
  width: 100%;
  height: 10px;
  background: #f8f8fa;
}
.indexstyle {
  width: 100%;
  margin: 0 auto;
  background: #fff;
}

.user {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
    position: absolute; top:20rpx;
  /* background-image: linear-gradient(to right, #14affd, #016dfe); */
}
.bjtu{ width: 100%; height:330rpx;}
.bjtu image{ width: 100%; height: 100%;}

.kehuxx {
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  overflow: hidden;
  padding-top: 6%;
}
.kehuxx image {
  float: left;
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  margin-right: 5%;
  width: 100%;
  height: 100%;
}
.kehuxx span {
  float: left;
  font-size: 42rpx;
  margin-top: 2%;
  color: #fff;
}
/* .user button{ color: #fff;border-radius:0; font-size: 28rpx; background: none;}
.user button::after{border: none;} */
.userLeft {
  float: left;
  padding-left: 5%;
  padding-top: 6%;
  width: 120rpx;
  height: 120rpx;
}
.userLeft > button {
  background: none;
  width: 100%;
  height: 100%;
}
.userLeft > button::after {
  border: none;
}
.userRight {
  float: left;
  padding-top: 8%;
}
.userRight > button {
  background: none;
  height: 50rpx;
  line-height: 50rpx;
  color: #fff;
  font-size: 28rpx;
  text-align: left;
}
.userRight > button::after {
  border: none;
}

/* .anniu_h{width:82%; margin-left: 5%; margin-right: 5%; padding-left:3%; padding-right: 5%; margin-top:7%; padding-bottom:6%;  border-bottom: 10px #ececec solid; overflow: hidden; position: relative; top: -30rpx;  } */
.anniu_h {
  width:100%;
  padding-top:10rpx; height: 160rpx;
  border-bottom: 10px #f0f0f0 solid;
  /* position: absolute;
  top: 220rpx;
  z-index: 999;
  background: #fff !important;
  border-radius:15rpx;box-shadow: 1px 1px 15px #8f8f8f83;*/
}

.anniu_h .l_xiaoxi {
  float: left;
  width: 33.3%;
}
.anniu_h .l_xiaoxi image {
  width: 60rpx;
  height: 60rpx;
  margin: 0 auto;
  display: block;
}
.anniu_h .l_xiaoxi p {
  font-size: 28rpx;
  text-align: center;
  margin-top: 5%;
}
.anniu_h button {
  color: #000;
  border-radius: 0;
  font-size: 28rpx;
  background: none;
  border: 0;
}
.anniu_h button::after {
  border: none;
}

.anniu2 {
  width:86%;
  padding-left:7%;
  padding-right:7%;
  padding-bottom: 8%;
  overflow: hidden;
}
.liulan1 {
  border-bottom:1rpx rgb(241, 241, 241) solid;
  overflow: hidden;
  height: 120rpx;
  line-height: 120rpx;
  padding-top: 5%;
  /* padding-right: 5%; */
}
.liulan1 .wzan_lelf {
  float: left;
  width: 70%;
}
.liulan1 .wzan_lelf image {
  float: left;
  width: 43rpx;
  height: 43rpx;
  margin-top:47rpx;
  margin-right: 5%;
  display: block;
}
.liulan1 .wzan_lelf span {
  font-size: 32rpx;
  float: left;
  margin-top: 4px;
}
.liulan1 .jt_right {
  float: right;
}
.liulan1 .jt_right image {
  width:30rpx;
  height:30rpx; margin-top:9rpx;
}
.anniu2 button {
  border-radius: 0;
  background: none; padding: 0;
}
.anniu2 button::after {
  border: none; padding: 0;
}
.company {
  text-align: center;
  color: #8b919a;
  font-size: 26rpx !important;
}
.company > div {
  font-size: 26rpx !important;
  margin-top: 15rpx;
}
.outLogin {
  float: right;
  margin-top: 8%;
  color: #fff;
  font-size: 28rpx;
  margin-right: 5%;
}
</style>
