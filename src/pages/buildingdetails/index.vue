<template>
  <div class="indexstyle">

    <div class="building">
      <div class="lp_beijing"><image :src="loubj" /></div>
      <!-- 内容开始 -->
      <div class="bd_neirong1" v-if="projectInfo">
        <!-- 基础信息 -->
        <div class="basic">
          <h1>基础信息</h1>
          <div class="b_js">
            <div v-if="projectInfo.name!=''?true:false"><span>楼盘别名</span>{{projectInfo.name}}</div> 
            <div v-if="projectInfo.averageprice!=''?true:false"><span>楼盘均价</span>{{projectInfo.averageprice}}元/㎡</div> 
            <div v-if="projectInfo.opendate!=''?true:false"><span>最新开盘</span>{{projectInfo.opendate}}</div> 
            <div v-if="projectInfo.Decorationname!=''?true:false"><span>装修情况</span>{{projectInfo.Decorationname}}</div> 
            <div v-if="projectInfo.saletelephone!=''?true:false"><span>售楼电话</span>{{projectInfo.saletelephone}}</div> 
            <div v-if="projectInfo.existingname!=''?true:false"><span>期房现房类型</span>{{projectInfo.existingname }}</div> 
            <div v-if="projectInfo.address!=''?true:false"><span>项目地址</span>{{projectInfo.address}}</div>
          </div>
        </div>
        <!-- 小区概况 -->
        <div class="basic">
          <h1>小区概况</h1>
          <div class="b_js">
            <div v-if="projectInfo.landyear!=''?true:false"><span>土地使用年限</span>{{projectInfo.landyear}}年</div> 
            <div v-if="projectInfo.maxdistance!=''?true:false"><span>最大栋距</span>{{projectInfo.maxdistance}}米</div> 
            <div v-if="projectInfo.mindistance!=''?true:false"><span>最小栋距</span>{{projectInfo.mindistance}}米</div> 
            <div v-if="projectInfo.landarea!=''?true:false"><span>占地面积</span>{{projectInfo.landarea}}㎡</div> 
            <div v-if="projectInfo.buildarea!=''?true:false"><span>建筑面积</span>{{projectInfo.buildarea}}㎡</div> 
            <div v-if="projectInfo.parknumber!=''?true:false"><span>车位个数</span>{{projectInfo.parknumber}}</div> 
            <div v-if="projectInfo.plotrate!=''?true:false"><span>容积率</span>{{projectInfo.plotrate}}</div> 
            <div v-if="projectInfo.housecount!=''?true:false"><span>总套数</span>{{projectInfo.housecount}}套</div> 
            <div v-if="projectInfo.greenrate!=''?true:false"><span>绿化率</span>{{projectInfo.greenrate}}%</div> 
            <div v-if="projectInfo.propertycost!=''?true:false"><span>物业费</span>{{projectInfo.propertycost}}元/㎡</div> 
          </div>
        </div>
        <!-- 周边配套 -->
        <div class="basic paddbj">
          <h1>周边配套</h1>
          <div class="b_js">
            <div v-if="projectInfo.sp_education!=''?true:false"><span>教育</span>{{projectInfo.sp_education}}</div> 
            <div v-if="projectInfo.sp_traffic!=''?true:false"><span>交通</span>{{projectInfo.sp_traffic}}</div> 
            <div v-if="projectInfo.sp_business!=''?true:false"><span>商业</span>{{projectInfo.sp_business}}</div> 
            <div v-if="projectInfo.sp_shopping!=''?true:false"><span>购物</span>{{projectInfo.sp_shopping}}</div> 
            <div v-if="projectInfo.sp_bank!=''?true:false"><span>银行</span>{{projectInfo.sp_bank}}</div> 
            <div v-if="projectInfo.sp_catering!=''?true:false"><span>餐饮</span>{{projectInfo.sp_catering}}</div> 
            <div v-if="projectInfo.sp_hospital!=''?true:false"><span>医疗</span>{{projectInfo.sp_hospital}}</div> 
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
       projectInfo:null,
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
        url:app.globalData.url +"Project/BandProjectInfo" +"?sessionKey=" +app.globalData.sessionKey+'&projectId=' + option.id,
        success: function (res) {
          console.log('楼盘详情',res)
          //房源基本信息详情
          that.projectInfo = res.data.Context.projectInfo;
        },
        fail: function (res) {},
      });

      
         
  },
  onShareAppMessage: function(res) {
    return {
      title: "楼盘信息详情页",
      path: "/pages/buildingdetails/main",
      imageUrl: "",
    };
  },
  methods:{
    rjldj(){
      this.rjxs = !this.rjxs;
    },
    rjyc(){
      this.rjxs = false;
    },
    costdj(){
      this.costxs = !this.costxs;
    },
    costyc(){
      this.costxs = false;
    },
    gsdj(){
      this.gsxs = !this.gsxs;
    },
    gsyc(){
      this.gsxs = false;
    },
    gddj(){
      this.gdxs = !this.gsxs;
    },
    gdyc(){
      this.gdxs = false;
    },
    lett(l) {
        this.toView = l;
        this.currentTab = l; 
        console.log(this.toView)
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
