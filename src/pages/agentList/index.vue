<template>
  <div class="indexstyle">
    <!-- 经纪人列表开始 -->
    <div class="jjr">
      <div class="guwen">
        <div class="guwen_list" v-for="(item, index) in agentList" :key="index">
            <div class="left_g">
              <image :src="domain+item.headpic" class="slide-image" mode="scaleToFill"/>
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
              <p class="wxl"><image :src="img9" class="slide-image" mode="scaleToFill" /></p>
              <p class="dhr"><image :src="img10s" class="slide-image" mode="scaleToFill" /></p>
            </div>
        </div>
      </div>
    </div>
    <!-- 经纪人列表结束 -->
    
     


    






   
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      domain:null,
      company:"",
      storename:"",
      agentList: [],
      img9: app.globalData.imgurl +"wx.png",
      img10s: app.globalData.imgurl +"dh.png",
    }
  },
  onLoad(option) {
    const that = this;
    var id=option.id;
    that.domain=app.globalData.domain;
    console.log(option);
    that.company=option.company;
    that.storename=option.storename;
    wx.request({
      // url: app.globalData.url +"Agent/BandAgentList?sessionKey=" +app.globalData.sessionKey,
      url: app.globalData.url +"Agent/BandAgentList?sessionKey=" +app.globalData.sessionKey+"&company="+that.company+"&store="+that.storename,
      // method:"POST",
      // data: {
      //   company: that.company,
      //   storename: that.storename,
      // },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data);
        that.agentList = res.data.Context.agentList;

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

/* 经纪人列表开始  */
.jjr{width: 140%; height: 500rpx; position: absolute; left: -20%; top: 0; z-index: -1; content: ''; border-radius: 0 0 50% 50%; background: linear-gradient(#3bb1f5, #2e72f1); }
.guwen{ width:58%; margin-left:18%; margin-right:18%; padding-left:3%; padding-right:3%; padding-top:4%; background:#fff; border-radius:3%; margin-top:10%; padding-bottom:7%; }
/* 去掉横向滚动条 */
::-webkit-scrollbar {width: 0;height: 0;color: transparent;}

/* .guwen{ width:90%; margin-left: 5%; margin-right: 5%; margin-top:5%;} */
.guwen_list{ width: 100%; margin-top:2%; overflow: hidden; margin-bottom:30rpx;}

.left_g{ float: left; width:75%;}
.left_g image{ float: left; width:110rpx; height:110rpx; border-radius: 50%; margin-right: 2%;}
.neirong{ float: left; width:70%; margin-top: 2%; }
.neirong div h1{float: left; font-size:32rpx; font-weight: bold; margin-right:10rpx; }
.neirong div span{ float: left; font-size: 22rpx; padding:1rpx 2rpx 1rpx 2rpx; border:2rpx #f86577 solid; color: #f86577; text-align: center; border-radius:6rpx; }
.neirong p{ font-size: 27rpx; color: #969ca8; margin-top:2%;}

.right_g{ float: right; margin-top:20rpx; width: 25%; overflow: hidden;}
.right_g p.wxl{ float: left;}
.right_g p.dhr{ float: right ;}
.right_g image{ width:60rpx; height:60rpx;}


</style>
