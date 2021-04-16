<template>
  <div class="indexstyle">

    <div class="building">
      <div class="lp_beijing"><image :src="loubj" /></div>
      <!-- 内容开始 -->
      <div class="bd_neirong1" v-if="houseInfo">
        <!-- 小区概况 -->
        <div class="basic">
          <h1>小区概况</h1>
          <div class="b_js">
            <div v-if="houseInfo.apirlroom&&houseInfo.apirloffice&&houseInfo.apirltoilet!=''?true:false"><span>房屋户型</span>{{houseInfo.apirlroom}}室{{houseInfo.apirloffice}}厅{{houseInfo.apirltoilet}}卫</div> 
            <div v-if="houseInfo.floor!=''?true:false"><span>楼层</span>{{houseInfo.floor}}层</div> 
            <div v-if="houseInfo.area!=''?true:false"><span>面积</span>{{houseInfo.area}}㎡</div> 
            <div v-if="houseInfo.buildyear!=''?true:false"><span>建筑年代</span>{{houseInfo.buildyear}}年</div> 
            <div v-if="houseInfo.Towardname!=''?true:false"><span>房屋朝向</span>{{houseInfo.Towardname}}</div> 
            <div v-if="houseInfo.Propertyname!=''?true:false"><span>建筑类型</span>{{houseInfo.Propertyname}}</div> 
            <div v-if="houseInfo.Decorationname!=''?true:false"><span>装修情况</span>{{houseInfo.Decorationname}}</div> 
            <div v-if="houseInfo.Specialname!=''?true:false"><span>房源特色</span>{{houseInfo.Specialname}}</div>
          </div>
        </div>
       
      </div>
      <!-- 内容结束 -->
    </div>



    <!-- 底部按钮开始 -->
    <div class="foot-an">
      <div class="lelf_foot">
        <button open-type="share" >
          <image :src="footimg1" class="slide-image" />
          <p>分享</p>
        </button>
      </div>
      <div class="right_foot">
        <div class="zixun">在线咨询</div>
        <div class="dianhua" @click="clickService">电话咨询</div>
      </div>
    </div>
    <!-- 底部按钮结束 -->

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
     return {
       scrollTop: 0,
       toView: '',
       currentTab:"A",
       houseInfo:null,
       extnumber:"",
       footimg1: app.globalData.imgurl +"fx.png",
       loubj: app.globalData.imgurl +"lou.png",
    }
  },
  onLoad(option) {
    const that = this;
    that.domain=app.globalData.domain;
    that.houserid=option.id; 
    //获取详情
      wx.request({
        url:app.globalData.url +"OldHouse/BandEsfInfo" +"?sessionKey=" +app.globalData.sessionKey+'&houseId=' + option.id,
        success: function (res) {
          console.log('楼盘详情',res)
          //房源基本信息详情
          that.houseInfo = res.data.Context.houseInfo;
          that.extnumber = res.data.Context.houseInfo.telephone;   //分机号
        },
        fail: function (res) {},
      });

      
         
  },
  // 分享
  onShareAppMessage: function(res) {
    return {
      title: "更多详情",
      path: "/pages/rentmoreDetails/main",
      imageUrl: "",
    };
  },
  methods:{
    // 拨打400电话
    clickService(){
      const that = this;
      wx.makePhoneCall({
        phoneNumber:that.extnumber //仅为示例，并非真实的电话号码
      })
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
.indexstyle{width: 100%; margin: 0 auto; background: #258bff;}
 
 
.building{ width: 100%;}
.bd_neirong1{ width:100%; }
.lp_beijing{ width: 100%;}
.lp_beijing image{ width: 100%;}
.bd_neirong1{ width:100%; position: absolute; top:180rpx;} 
.basic{ width:86%; padding-left:4%; padding-right:4%; margin-left:3%; margin-right:3%; padding-bottom: 5%; margin-bottom: 30rpx; background: #fff; border-radius:20rpx; /*border-bottom:20rpx #efefef solid; */padding-top:5%;box-shadow: 2px 2px 10px rgba(11, 52, 114, 0.164);}
.basic h1{ font-size: 36rpx; color: #000; font-weight: bold;}
.b_js div{ margin-top:4%; font-size: 30rpx; line-height: 55rpx;}
.b_js div span{ color: #9399a5; margin-right: 3%;}
.b_js div p{ float: right; color: #a3a6a8; }
.b_js div p.youzj{ position: relative; top: -7%; font-size: 26rpx; width:30%;}
.youzj image{ width:32rpx; height:32rpx; margin-right:4%; margin-top:2%;}

.sales{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid; margin-top: 3%;}
.sales h1{ font-size: 36rpx; color: #000; font-weight: bold;}

.community{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid; margin-top: 3%;}
.community h1{ font-size: 36rpx; color: #000; font-weight: bold;}
.community .b_js div image{ width: 30rpx; height: 30rpx; margin-left:2%;}
/* 中间弹框 */
.rj_kuang{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.rj_kuang div{ width:80%; margin-left: 5%; margin-right: 5%; padding: 5%; background: rgb(255, 255, 255); border-radius:2%; position: relative; bottom:35%;}
.rj_kuang h2{ font-size: 30rpx; margin-bottom: 5%;}
.rj_kuang p{font-size: 28rpx;  margin-bottom: 5%;}
.rj_kuang button{ width: 90%; background: #07c160; color: #fff;}


.license{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid; margin-top: 3%;}
.license h1{ font-size: 36rpx; color: #000; font-weight: bold;}
.paddbj{ margin-bottom: 20%;}

.tabbar-bottom {color: rgb(0, 148, 247); font-weight: bold;}

/* 底部按钮开始 */
.foot-an{ width: 96%; height: 100rpx; padding-top:15rpx; padding-bottom: 15rpx; padding-left:2%; padding-right:2%;background:#fff;position: fixed;bottom: 0; z-index: 9999; overflow: hidden;}
.lelf_foot{ float: left; width:19%; margin-top:6rpx;}
.lelf_foot button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; background:none; line-height: normal;}
.lelf_foot button::after{border: none; padding: 0 !important;}
.lelf_foot image{ width:45rpx; height: 45rpx; }
 .lelf_foot p{ font-size:28rpx; position: relative;top: -5rpx;} 
.right_foot{ float: right; width:81%; display: flex; flex-direction: row;}
.zixun{ width: 46%; margin-left:2%; margin-right:2%; background: #3bc48b; color: #fff; height:80rpx; line-height: 80rpx; text-align: center; border-radius: 10rpx; margin-top: 10rpx;}
.dianhua{ width: 46%; margin-left:4%; margin-right:4%; background: #3072f6; color: #fff; height: 80rpx; line-height: 80rpx; text-align: center; border-radius: 10rpx; margin-top: 10rpx;}



</style>
