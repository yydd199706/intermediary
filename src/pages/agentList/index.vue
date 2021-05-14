<template>
  <div class="indexstyle">
    <!-- 经纪人列表开始 -->
    <div class="jjnr_list">
      <div class="jjr">
        <div class="jjlist">
          <image :src="jjimg" />
        </div>
        <div class="meiy"></div>
        <div class="guwen">
          <div class="guwen_list" v-for="(item, index) in agentList" :key="index">
            <div class="left_g" @click="agentInfo(index,$event)" :data-id="item.id">
              <image :src="domain+item.headpic" class="slide-image" mode="scaleToFill" />
              <div class="neirong">
                <div>
                  <h1>{{item.realname}}</h1>
                  <span>{{item.companyname}}</span>
                  <div class="clear"></div>
                </div>
                <p>{{item.evaluation}}</p>
              </div>
            </div>
            <div class="right_g">
              <!-- <p class="wxl"><image :src="img9" class="slide-image" mode="scaleToFill" :data-hxid="item.hxid" @click="chatClick(index,$event)" /></p> -->
              <p class="wxl"><image :src="img9" class="slide-image" mode="scaleToFill" :data-hxid="item.hxid" :data-src="domain+item.headpic" @click="chatClick(index,$event)" /></p>
              
              <p class="dhr">
                <image
                  :src="img10s"
                  class="slide-image"
                  mode="scaleToFill"
                  :data-telphone="item.mobile"
                  @click="telphoneClick(index,$event)"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 经纪人列表结束 -->


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
  data() {
    return {
      domain: null,
      company: "",
      store: "",
      agentList: [],
      img9: app.globalData.imgurl + "wx.png",
      img10s: app.globalData.imgurl + "dh.png",
      jjimg:app.globalData.imgurl + "jjlist.png",
      maskHid:false,
      telHid:false,
      // projectInfo:null,
    };
  },
  onLoad(option) {
    const that = this;
    that.domain = app.globalData.domain;
    that.company = option.company;
    that.store = option.store;
    wx.request({
      url:
        app.globalData.url +
        "Agent/BandAgentList?sessionKey=" +
        app.globalData.sessionKey +
        "&company=" +
        that.company +
        "&store=" +
        that.store,
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        that.agentList = res.data.Context.agentList;
      }
    });
  },
  methods: {
    //点击跳转经纪人名片
    agentInfo: function(index, e) {
      wx.navigateTo({
        url: "/pages/agentDetails/main?agentid=" + e.mp.currentTarget.dataset.id
      });
    },
    //拨打经纪人电话
    telphoneClick: function(index, e) {
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.telphone
      });
    },
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
                }
              }
            })
          }
        })
      }
    },
    //点击在线咨询进入聊天
    chatClick:function(index,e){
      const that = this;
      console.log("即时通讯id",e.mp.target.dataset.hxid)
      console.log("头像",e.mp.target.dataset.src)
      wx.request({
          url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
          success: function (data) {
            console.log("data",data)
            if(data.data==true){
              that.telHid=false;
              that.maskHid=false;
              wx.navigateTo({ url: "/pages/chatOld/main?hxid=" + e.mp.target.dataset.hxid + "&headpic=" + e.mp.target.dataset.src + "&projectInfo=" + that.projectInfo + "&chatType=1"});
            }else{
              that.telHid=true;
              that.maskHid=true;
            }
          }
      })
    },
    //点击复制微信号
    copy: function(index, e) {
      const that = this;
      wx.setClipboardData({
        data: e.mp.currentTarget.dataset.wxid,
        success: function (res) {
          wx.showToast({
            title: '复制成功'
          })
        }
      })
    }
  }
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
  height: 20rpx;
  background: #f8f8fa;
}
.indexstyle {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  width: 100%;
  overflow-x: hidden;
}

/* 经纪人列表开始  */
/* .jjr{width: 140%; height: 500rpx; position: absolute; left: -20%; top: 0; z-index: -1; content: ''; border-radius: 0 0 50% 50%; background: linear-gradient(#3bb1f5, #2e72f1); } */
.jjnr_list {
  width: 100%;
}
.jjr {
  width: 100%;
  height: 100%;
  position: relative;
}
.jjlist {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.jjlist > image {
  width: 100%;
  /* height: 560rpx; */
}
.meiy {
  height: 100rpx;
  width: 100%;
}
.guwen {
  width: 84%;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 4%;
  background: #fff;
  /* border-radius: 3%; */
  border-top-left-radius: 20rpx; border-top-right-radius: 20rpx;
  padding-bottom: 7%;
  position: relative;
  z-index: 999;
}
/* 去掉横向滚动条 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
  overflow-x: hidden;
}

/* .guwen{ width:90%; margin-left: 5%; margin-right: 5%; margin-top:5%;} */
.guwen_list {
  width: 100%;
  margin-top: 2%;
  overflow: hidden;
  margin-bottom: 30rpx;
}

.left_g {
  float: left;
  width: 75%;
}
.left_g image {
  float: left;
  width: 110rpx;
  height: 110rpx;
  border-radius: 50%;
  margin-right: 2%;
}
.neirong {
  float: left;
  width: 70%;
  margin-top: 2%;
}
.neirong div h1 {
  float: left;
  font-size: 32rpx;
  font-weight: bold;
  margin-right: 10rpx;
}
.neirong div span {
  float: left;
  font-size: 22rpx;
  padding: 1rpx 2rpx 1rpx 2rpx;
  border: 2rpx #f86577 solid;
  color: #f86577;
  text-align: center;
  border-radius: 6rpx;
}
.neirong p {
  font-size: 27rpx;
  color: #969ca8;
  margin-top: 2%;    
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.right_g {
  float: right;
  margin-top: 20rpx;
  width: 25%;
  overflow: hidden;
}
.right_g p.wxl {
  float: left;
}
.right_g p.dhr {
  float: right;
}
.right_g image {
  width: 60rpx;
  height: 60rpx;
}

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
