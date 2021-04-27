<template>
  <div class="indexstyle">

    <div class="chat">
      <scroll-view scroll-y="true" class='padding20' :style="{height:clientHeight+'px'}"> 
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
                <div class="clear"></div>
              </div>
            </div>
            

          </div>
          <!-- 内容结束-->

        </block>
      </scroll-view>
    </div>


    <div class="botom-in">
      <input class="inputcss" type="text" :value="Message" @input="sendinput($event)"/>
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
      clientHeight:0,
      hxid:"",
      domain:null,
      headpic:"",
     


    }
  },
  onLoad(option) {
    const that = this;
    that.domain=app.globalData.domain;
    that.Message="";
    that.hxid=option.hxid;
    that.headpic=option.headpic;

    //获取动态高度
    wx.getSystemInfo({
      success: function (res) {
        // 获取可使用窗口宽度
        that.clientHeight = res.windowHeight;
        console.log("that.clientHeight",that.clientHeight)
      }
    });



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
      var data = { user:app.globalData.member.hxid}
      
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
        var info = { user:that.hxid, msg: res.data, url:that.domain+that.headpic,type:"friend"}
        that.socketMsgQueue.push(info)
      })
    },
    
    //发送的
    sendSocketMessage:function(){
      var that = this;
      //判断是否为空
      if(that.Message==""){
        wx.showToast({
          title: '不能为空',
          icon: 'none',
          duration: 2000
        });
        return false;
      }
      
      
      if (that.socketOpen) {
          var info = { user:that.hxid, msg:that.Message, url:that.domain+app.globalData.member.headpic,type:"self"}
          wx.sendSocketMessage({
            data: JSON.stringify(info)
          })
          that.socketMsgQueue.push(info)
        } 
        // else {
        //   that.socketMsgQueue.push(info)
        // }
        that.Message="";
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
.indexstyle{width: 100%; margin: 0 auto; background: #ebebeb;}

.chat{ width: 100%; margin: 0 auto; margin-bottom:20rpx; overflow: hidden;}
.timetop{ width: 100rpx; height:55rpx; line-height:55rpx; background: #dadada; border-radius:6rpx; margin: 0 auto; margin-top: 30rpx;}
.time_chat{ text-align: center; color: #fff; font-size: 28rpx;}
.content_chat{ width: 90%; margin-left: 5%; margin-right: 5%; overflow: hidden;}
.lelftype{ float: left;}
.righttype{ float:right; }
.meIssue{ width: 100%; overflow: hidden;}
.meIssue image{ width: 65rpx; height: 65rpx; float: left; margin-right: 20rpx;} 
.meIssue .me_text{max-width: 70%; background: #fff; padding: 20rpx; border-radius: 10rpx; margin-right:20rpx; float: left;}
.chat_list image{ width:14rpx; height:22rpx; }

/* 底部按钮 */
.botom-in{ width:90%; overflow: hidden; padding-left:5%; padding-right:5%; padding-top:20rpx; bottom: 0; background: #f5f4f6;
border-top: 2rpx solid #eaeaea; position: fixed; z-index: 1000; height:90rpx;}
.botom-in input{ float: left; width:60%; height: 70rpx; line-height: 70rpx;border-radius: 6rpx;
    padding: 0 3%;
    border: 2rpx solid #dddcdd;
    background: #fcfcfc;
}
.send{ width: 30%; height: 74rpx; line-height: 74rpx; text-align: center; background: #28a781; color: #fff; float: right; border-radius: 6rpx;}


</style>
