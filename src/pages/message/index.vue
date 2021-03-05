<template>
  <div class="indexstyle">
    <!-- 消息开始 -->
    <div class="message">
      <div class="messageList" v-for="(item ,index) in message" :key="index">
        <div class="lelf_m">
          <div class="title">{{item.title}}</div>
          <div class="abstract">最新售价为{{item.newprice}}元/平</div>
        </div>
        <div class="right_m">{{item.createdate}}</div>
      </div>
    </div>
    <!-- 消息结束 -->
    <div class="none" v-if="noneHid">
      <image :src="img" class="new-image" mode="scaleToFill" />
      <div>暂时还没有消息哦~</div>
    </div>
  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      noneHid:false,
      img:app.globalData.imgurl +"null_data.png",
      message:[
        {title:'房价通知',abstract:'最新售价为6500',time:'15：23'},
        {title:'房价降价',abstract:'兴安府房价降价低价出售',time:'15：23'}
      ]
 


    }
  },
  onLoad(){
    const that = this;
     wx.request({
        url:app.globalData.url +"Percenter/GetPriceChangeList" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (res) {
          console.log('变价通知',res);
          if(res.data.Context==null){
            that.message=[];
            that.noneHid=true;
          }else{
            that.message=res.data.Context.mpcList;
            that.noneHid=true;
          }
        }
        })
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

/* 消息 */
.message{ width: 100%; margin-top: 20rpx;}
.messageList{ width: 90%; margin-left: 5%; margin-right: 5%; border-bottom: 1px rgb(240, 240, 240) solid; height:105rpx; overflow: hidden; margin-top:20rpx; }
.lelf_m{ float: left;}
.title{ font-size: 30rpx; font-weight: bold;} 
.abstract{ font-size:26rpx; color: rgb(143, 143, 143); margin-top:5rpx;}
.right_m{ float: right; font-size: 24rpx; color: rgb(143, 143, 143);}
 .none{width: 100%;margin-top: 150rpx;text-align: center;}
.none>image{width: 200rpx;height: 200rpx;}
.none>div{font-size: 28rpx;margin-top: 20rpx;color: #A1A1A1;}

</style>
