<template>
  <div class="indexstyle">
    <div class="chat">
      <scroll-view scroll-y="true" class='padding20' id="x_chat" :style="{height:clientHeight+'px'}"> 
        <block> 
          <!-- 当前页面卡片开始 -->
          <div class="card_list" v-if="showCard">
            <!-- 时间 -->
            <div class="timetop">
              <div class="time_chat">{{time}}</div>
            </div>
            <!-- 我发出的卡片 -->
            <div class="meIssue righttype">
              <div class="meIssueCard_list" @click="likeDetail(index,$event)" :data-id="projectInfo.id">
                <image :src="domain+projectInfo.ImgUrl" class="me_img" />
                <div class="title_c">{{projectInfo.name}}</div>
                <div class="labels">
                  <span>{{projectInfo.Decorationname}}</span>/
                  <span>{{projectInfo.salestatename}}</span>/
                  <span>{{projectInfo.zonename}}</span>
                </div>
                <div class="price">{{projectInfo.averageprice==""||projectInfo.averageprice==null?'价格待定':'均价'+projectInfo.averageprice+'元/m²'}}</div>
              </div>
              <image :src="domain+headpic" class="tx" />
            </div>          
          </div>
          <!-- 当前页面卡片结束 -->

          <div v-for="(item, index) in socketMsgQueue" :key="index">
            <!-- 时间 -->
            <div class="timetop" v-if="item.showtime">
              <div class="time_chat">{{item.time}}</div>
            </div>

            <!-- 内容开始 -->
            <div class="content_chat">
              <!-- 对方发出的内容 -->
              <div class="meIssue lelftype" v-if="item.type=='friend'?true:false">
                <image :src="item.headpic" class="tx" />
                <div class="chat_list">
                  <div class="me_text">{{item.msg}}</div>
                  <div class="clear"></div>
                </div>
              </div>

              <!-- 我发出的内容 -->
              <div class="meIssue righttype" v-if="item.type=='self'?true:false">
                <div class="chat_list">
                  <div class="me_text">{{item.msg}}</div>
                  <div class="clear"></div>
                </div>
                <image :src="item.headpic" class="tx" />
              </div>
            </div>
            <!-- 内容结束-->
          </div>

        </block>
      </scroll-view> 
    </div>

    <!-- 占位 -->
    <div class="f_bk" style="height:200rpx;"></div>


    <div class="botom-in">
      <input class="inputcss" type="text" :value="Message" @input="sendinput($event)" />
      <div class="send" @click="sendSocketMessage">发送</div>
    </div>
  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data() {
    return {
      domain: null,
      clientHeight: 0,
      domain: null,
      hxid: "",
      headpic: "",
      chatType:"",
      projectInfo: null,
      socketMsgQueue: [],
      Message: "",
      isshow: true,
      showCard :false,
      msg: null,
      time:"",
      
    };
  },

  onLoad(option) {
    const that = this;
    that.domain = app.globalData.domain;
    that.Message = "";
    that.socketMsgQueue = [];
    that.hxid = option.hxid;
    that.chatType = option.chatType;
    console.log("that.chatType",that.chatType)
    // that.projectInfo = wx.getStorageSync("projectInfo");
    // console.log("that.projectInfo",that.projectInfo)
    that.houserid = option.houserid;
    console.log("that.houserid",that.houserid)
    // that.headpic = "";
    // that.time = "";
    that.msg = null;

    //获取动态高度
    that.clientHeight = wx.getSystemInfoSync().windowHeight-100;
    console.log("that.clientHeight",that.clientHeight)

    
    // 新房详情
    wx.request({
          url:app.globalData.url +"Project/BandProjectInfo" +"?sessionKey=" +app.globalData.sessionKey+'&projectId=' + that.houserid,
          success: function (res) {
            console.log('详情',res)
            that.projectInfo = res.data.Context.projectInfo;
            console.log("that.projectInfo",that.projectInfo)
          }
    })





  
  },

  onShow(){
    const that = this;
    
    common.initApp(function(userInfo) {
      that.connectSocket();
    });
  },

  onReady(){
    const that = this;
    // that.pageScrollToBottom();
  },


  onUnload() {
    console.log("dddd")
    wx.closeSocket({
      
    })
  },

  methods: {
    // 获取输入内容
    sendinput: function(e) {
      const that = this;
      that.Message = e.mp.detail.value;
    },
    formatDate:function(date){
      
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let h = date.getHours();
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        return MM + "-" + d + " " + h + ":" + m;
    },
    connectSocket: function() {
      var that = this;
      //注册信息
      var data = { user: app.globalData.member.hxid };

      //建立连接
      wx.connectSocket({
        url:
          "wss://wss.e-fangtong.com/Message.ashx?code=Iamfromchina&user=" +
          data.user
      });

      wx.onSocketOpen(function(res) {
        console.log("WebSocket连接已打开！");
        that.socketOpen = true;
        that.time = that.formatDate(new Date());
        that.headpic = app.globalData.member.headpic;
        that.msg = JSON.stringify({
          user: that.hxid,
          msg: that.projectInfo
        });
        wx.sendSocketMessage({
          data: that.msg,
          success(){
            that.showCard = true;
          }
        });
      });

      wx.onSocketError(function(res) {
        console.log("WebSocket连接打开失败，请检查！");
      });
      //接收的
      wx.onSocketMessage(function(res) {
        var info = JSON.parse(res.data);
        info.type = "friend";
        that.socketMsgQueue.push(info);
        that.hxid = info.aimid;
      });
    },

    //发送的
    sendSocketMessage: function() {
      var that = this;
      //判断是否为空
      if (that.Message == "") {
        wx.showToast({
          title: "不能为空",
          icon: "none",
          duration: 2000
        });
        return false;
      }

      if (that.socketOpen) {
        var temptime = new Date();
        var info = {
          headpic: that.domain + app.globalData.member.headpic,
          msg: that.Message,
          type: "self",
          aimid: app.globalData.member.hxid,
          timesj: temptime.getTime(),
          time:that.formatDate(temptime),
          showtime: true
        };

        if (that.socketMsgQueue.length > 0) {
          var obj = that.socketMsgQueue[that.socketMsgQueue.length - 1];
          var diff = new Date().getTime() - obj.timesj;
          info.showtime = diff < 60000 ? false : true;
        }

        that.socketMsgQueue.push(info);
        that.msg = JSON.stringify({
          user: that.hxid,
          msg: info
        });

        wx.sendSocketMessage({
          data: that.msg,
          success(){
            wx.request({
              url:app.globalData.url +"Msn/AddMsgRecord" +"?sessionKey=" +app.globalData.sessionKey,
              method:"POST",
              data: {
                msg:that.Message,
                type:that.chatType,
                userid:app.globalData.member.hxid,
                aimid:that.hxid,
                houseid:that.projectInfo.id,
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success: function (res) {
                console.log("消息记录",res)
                
              }
            })

          }
        });
        that.Message = "";
      }
      console.log("that.hxid",that.hxid)
      




    },

    // 点击卡片跳转到详情页
    likeDetail:function(index,e){
      wx.navigateTo({ url: "/pages/newhousedetails/main?id=" + e.mp.currentTarget.dataset.id});
    },


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
  background: #ebebeb;
}

.chat {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20rpx;
  overflow: hidden;
}
.timetop {
  width: 180rpx;
  height: 55rpx;
  line-height: 55rpx;
  background: #dadada;
  border-radius: 6rpx;
  margin: 0 auto;
  margin-top: 30rpx;
}
.time_chat {
  text-align: center;
  color: #fff;
  font-size: 26rpx;
}
.content_chat {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  overflow: hidden;
}
.lelftype {
  float: left;
}
.righttype {
  float: right;
  display: flex;
  justify-content: flex-end;
  /* padding: 5vw 2vw 2vw 11vw; */
  padding: 30rpx 10rpx 20rpx 20rpx;
}
.meIssue {
  width:85%;
  overflow: hidden;
}
.meIssue image.tx {
  width: 65rpx;
  height: 65rpx;
  float: left;
  border-radius: 10rpx;
}
.meIssue .me_text {
  max-width:100%;
  background: #fff;
  padding: 20rpx;
  border-radius: 10rpx;
  /* margin-right: 20rpx;
  margin-left: 20rpx; */
  float: left;
}
.lelftype .me_text {
  max-width:100%;
  background: #fff;
  padding: 20rpx;
  border-radius: 10rpx;
  /* margin-right: 20rpx;
  margin-left: 20rpx; */
  float: left;
}
.righttype .me_text {
  max-width:100%;
  background: #9eea6a;
  padding: 20rpx;
  border-radius: 10rpx;
  /* margin-right: 20rpx;
  margin-left: 20rpx; */
  float: left;
}


.chat_list{
   max-width: 80%; /*background: #fff;*/ border-radius:4rpx; margin-right:4%; margin-left:4%; float: left; 
}

/* 底部按钮 */
.botom-in {
  width: 90%;
  overflow: hidden;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 30rpx;
  bottom: 0;
  background: #f5f4f6;
  border-top: 2rpx solid #eaeaea;
  position: fixed;
  z-index: 1000;
  height: 130rpx;
}
.botom-in input {
  float: left;
  width: 60%;
  height: 70rpx;
  line-height: 70rpx;
  border-radius: 6rpx;
  padding: 0 3%;
  border: 2rpx solid #dddcdd;
  background: #fcfcfc;
}
.send {
  width: 30%;
  height: 74rpx;
  line-height: 74rpx;
  text-align: center;
  background: #28a781;
  color: #fff;
  float: right;
  border-radius: 6rpx;
}

/* 卡片 */
.card_list {width: 90%;margin-left: 5%;margin-right: 5%;overflow: hidden;}
.meIssueCard_list{width:80%; background: #fff; border-radius:4rpx; margin-right:5%; margin-left:5%; float: left;}
.meIssueCard_list image.me_img{ width: 100%; height: 260rpx;border-radius:4rpx; margin-bottom: 20rpx;}
.meIssueCard_list .title_c{ width:90%; margin-left: 5%; margin-right: 5%; font-size: 32rpx; font-weight: bold; }
.labels{ margin-top:10rpx; font-size:26rpx; color: rgb(175, 175, 175);width:90%; margin-left: 5%; margin-right: 5%; }
.price{ font-size: 36rpx; font-weight: bold; color: rgb(228, 68, 68);margin-top:10rpx;width:90%; margin-left: 5%; margin-right: 5%; padding-bottom: 30rpx;}




</style>
