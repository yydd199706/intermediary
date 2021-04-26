<template>
  <div class="indexstyle">

    <div class="chat">
      <scroll-view scroll-y="true" class='padding20' style="height:1000rpx;width:auto;"> 
        <block v-for="(item, index) in socketMsgQueue" :key="index">
          <!-- 时间 -->
          <div class="timetop">
            <div class="time_chat">14:48</div>
          </div>

          <!-- 内容开始 -->
          <div class="content_chat">
            <!-- 我发出的内容 -->
            <div :class="[type=='self'?'righttype':'lelftype']" class="meIssue">
              <image :src="item.url" class="me_img" />
              <div class="chat_list">
                <div class="me_text">{{item.msg}}</div>
                <image :src="item.img2" class="me_img" />
              </div>
            </div>
            

          </div>
          <!-- 内容结束-->

        </block>
      </scroll-view>
    </div>


    <div class="botom-in">
      <input class="inputcss" id="name" type="text" :value="Message" @input="sendinput($event)"/>
      <div class="send" @click="sendSocketMessage">发送</div>
    </div>

     





     
   
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      socketMsgQueue:[
        // {img1:"/static/images/meimg.png",text:"您好",img2:"/static/images/sj.png"}
      ],
      Message:"",
     


    }
  },
  onLoad() {
    const that = this;
    common.initApp(function (userInfo) {
      that.connectSocket();

    })
    console.log("socketMsgQueue",that.socketMsgQueue)

  },




  methods: {
    // 获取预约描述
    sendinput:function(e){
      const that = this;
      that.Message = e.mp.detail.value;
    },



    connectSocket:function(){
      
      var that = this;
      //注册信息
      var data = { user: "WS" +app.globalData.sessionKey}
      
      //建立连接
      wx.connectSocket({
        url: "ws://3903e60h76.qicp.vip/Message.ashx?code=Iamfromchina&user="+data.user,
      })

      wx.onSocketOpen(function (res) {
        console.log('WebSocket连接已打开！')
        that.socketOpen = true
         
      })
      
      wx.onSocketError(function (res) {
        console.log('WebSocket连接打开失败，请检查！')
      })
      //接收的
      wx.onSocketMessage(function (res) {
        console.log('收到服务器内容：' + JSON.stringify(res))
        var info = { user: "WS" +app.globalData.sessionKey, msg: res.data,url:"/static/images/meimg.png",type:"friend"}
        that.socketMsgQueue.push(info)
      })
    },
    
    //发送的
    sendSocketMessage:function(){
      var that = this;
      
      if (that.socketOpen) {
          var info = { user: "WS" +app.globalData.sessionKey, msg:that.Message,url:"/static/images/meimg.png",type:"self"}
          wx.sendSocketMessage({
            data: JSON.stringify(info)
          })
          that.socketMsgQueue.push(info)
        } 
        // else {
        //   that.socketMsgQueue.push(info)
        // }
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
.indexstyle{width: 100%; margin: 0 auto; background: #f1f1f1;}

.chat{ width: 100%; margin: 0 auto;}
.timetop{ width: 100rpx; height: 60rpx; line-height: 60rpx; background: #dadada; border-radius:6rpx; margin: 0 auto; margin-top: 30rpx;}
.time_chat{ text-align: center; color: #fff; font-size: 28rpx;}
.content_chat{ width: 90%; margin-left: 5%; margin-right: 5%;}
.lelftype{ float: left;}
.righttype{ float:right; }
.meIssue image{ width: 65rpx; height: 65rpx;} 
.meIssue .me_text{max-width: 70%; background: #fff; padding: 20rpx; border-radius: 10rpx; margin-right:20rpx;}
.chat_list image{ width:14rpx; height:22rpx;}

/* 底部按钮 */
.botom-in{ width:90%; overflow: hidden; margin-left: 5%; margin-right: 5%;position:fixed ; bottom:0px;}
.botom-in input{ float: left; width:68%; height: 70rpx; line-height: 70rpx; background: #ccc; border-radius: 6rpx;}
.send{ width: 30%; height: 70rpx; line-height: 70rpx; text-align: center; background: #28a781; color: #fff; float: right;}


</style>
