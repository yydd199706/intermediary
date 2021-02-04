<template>
  <div class="indexstyle">

    <!-- 图片轮播 -->
    <div class="lunbo">
      <swiper class="swiper" @change="djimg" >
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="domain+item.imgurl" class="slide-image" mode="scaleToFill"/>
          </swiper-item>
        </block>
      </swiper>
      <div class="imageCount">{{current+1}}/{{movies.length}}</div>
    </div>
    <!-- 图片轮播 -->

    <!-- 小区名称开始 -->
    <div class="community">
      <div class="lelf_c">
         <h1>{{name}}</h1>
         <p>{{address}}</p>
      </div>
      <div class="right_c">
        <div>
          <!-- 上新提醒开始 -->
          <div class="tixing">
            <button>
              <image :src="img2" />
              <p>上新提醒</p>
            </button>
          </div>
          <!-- 上新提醒结束 -->
          <!-- 关注开始 -->
          <div class="guanzhu">
            <!-- 未关注 -->
            <button class="wgz" @click="gzdianji" v-if="gzxianshi==0">
              <image :src="img3" />
              <p>关注</p>
            </button>
            <!-- 已关注 -->
            <button class="ygz" @click="gzdianji" v-else>
              <image :src="img4" />
              <p>已关注</p>
            </button>
          </div>
          <!-- 关注结束 -->
        </div>
      </div>
    </div>
    <!-- 小区名称结束 -->

    <!-- 小区简介开始 -->
    <div class="jianjie">
      <h3>小区简介</h3>
      <div>
        <p>土地使用年限：<span>{{landyear}}年</span></p>
        <p>总套数：<span>{{housecount }}套</span></p>
        <p>车位数：<span>{{parknumber}}个</span></p>
        <p>物业费：<span>{{propertycost}}元/m²</span></p>
        <p>绿化率：<span>{{greenrate}}%</span></p>
        <p>占地面积：<span>{{landarea}}平方米</span></p>
        <p>建筑面积：<span>{{buildarea}}平方米</span></p>
        <p>物业公司：<span>{{propertycorp}}</span></p>
        <p>装修情况：<span>{{Decorationname}}</span></p>
        <p>供水情况：<span>{{BS_Watername}}</span></p>
        <p>供热情况：<span>{{BS_HotGasname}}</span></p>
        <p>安防情况：<span>{{BS_Securityname}}</span></p>
      </div>
      
    </div>
    <!-- 小区简介结束 -->

    <!-- 小区房源开始 -->
    <div class="fangyuan">
      <div class="hx_bt1">
        <p>小区房源</p>
        <span>查看更多</span>
      </div>
      <div class="fangyuan_list">
        <scroll-view scroll-x="true" style="width: 100%;" class="image-group">
          <div class="fang_list" v-for="(item, index) in houseInfo" :key="index">
            <image :src="domain+item.Imgurl" class="slide-image" />
            <h3><span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirltoilet}}卫</span>/<span>{{item.area}}m²</span>/<span>{{item.Towardname}}</span></h3>
            <p><span class="dj1">{{item.price}}万元</span><span class="dj2">{{item.averageprice}}元/平</span></p>
          </div>
        </scroll-view>
      </div>
    </div>
    <!-- 小区房源结束 -->







   
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    //xianshi:false;
    return {
      domain:null,
      movies: [],
      current: 0,
      name:"",
      address:"",
      img2: app.globalData.imgurl +"tx.png",
      img3: app.globalData.imgurl +"gz.png",
      img4: app.globalData.imgurl +"xin.png",
      landyear:"",
      housecount:"",
      parknumber:"",
      propertycost:"",
      greenrate:"",
      landarea:"",
      buildarea:"",
      propertycorp:"",
      Decorationname:"",
      BS_Watername:"",
      BS_HotGasname:"",
      BS_Securityname:"",
      houseInfo:[],
      gzxianshi:0,

 
 


    }
  },
  onLoad(option) {
    const that = this;
    var id=option.id;
    that.domain=app.globalData.domain;
    console.log(option);
    // wx.setStorageSync('id');
    //var id=wx.getStorageSync('id');
    //console.log('id==',id);
    //获取详情
      wx.request({
        url:app.globalData.url +"Project/BandProjectInfo" +"?sessionKey=" +app.globalData.sessionKey+'&projectid=' + option.id,
        success: function (res) {
          // let patient = res.data
          console.log('详情',res);
          that.name = res.data.Context.projectInfo.name;
          that.address = res.data.Context.projectInfo.address;

          that.landyear = res.data.Context.projectInfo.landyear;
          that.housecount = res.data.Context.projectInfo.housecount;
          that.parknumber = res.data.Context.projectInfo.parknumber;
          that.propertycost = res.data.Context.projectInfo.propertycost;
          that.greenrate = res.data.Context.projectInfo.greenrate;
          that.landarea = res.data.Context.projectInfo.landarea;
          that.buildarea = res.data.Context.projectInfo.buildarea;
          that.propertycorp = res.data.Context.projectInfo.propertycorp;
          that.Decorationname = res.data.Context.projectInfo.Decorationname;
          that.BS_Watername = res.data.Context.projectInfo.BS_Watername;
          that.BS_HotGasname = res.data.Context.projectInfo.BS_HotGasname;
          that.BS_Securityname = res.data.Context.projectInfo.BS_Securityname;
          //轮播图
          that.movies = res.data.Context.pictureInfo;
          //小区房源
          that.houseInfo = res.data.Context.houseInfo;




        },
        fail: function (res) {},
      });

  },


  methods: {
    clickTab(e) {
      this.currentTab = e;
    },
    changeTab(e) {
      this.currentTab = e.mp.detail.current;
    },
    djimg(e) {
      this.current = e.target.current;
    },
    gzdianji(){
      if(this.gzxianshi==1){
        this.gzxianshi=0;
      }else{
        this.gzxianshi=1;
      }
  }
 

 
},
 


 

   

}
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}

/* 图片轮播 */
.lunbo{ width: 100%; height: 500rpx;}
.swiper{ width: 100%; height: 100%;}
.lunbo image{ width: 100%; height: 100%;}
.imageCount {
  width:100rpx;
  height:45rpx;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius:40rpx;
  line-height:50rpx;
  color:#fff;
  text-align:center;
  font-size:24rpx;
  position:relative;
  left:83%;
  bottom:70rpx;
}

/* 小区名称开始 */
.community{ width: 90%; padding-left: 5%; padding-right: 5%; overflow: hidden; padding-top: 5%;border-bottom:20rpx #efefef solid; height:140rpx;}
.lelf_c{ float: left;}
.lelf_c h1{ font-size: 36rpx; font-weight: bold; margin-bottom: 5%;}
.lelf_c p{ font-size: 26rpx; color: #999999;}
.right_c{ float: right; width:35%;}
.right_c div{ display: flex; flex-direction: row; width: 100%;}
.tixing{ margin-right: 3%; width:50%; }
.tixing image{ width: 36rpx; height: 41rpx;}
.tixing p{ font-size: 28rpx; position: relative; top: -40rpx;}
.right_c button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; width:120rpx; background: none; }
.right_c button::after{border: none; padding: 0 !important; background: none !important;}

.guanzhu{ margin-right: 3%; width:100%;}
.guanzhu image{ width:40rpx; height:40rpx; position: relative; top:-2rpx;}
.guanzhu p{ font-size: 28rpx; position: relative; top: -41rpx;}
.ygz{ position: relative; }

/* 小区简介开始 */
.jianjie{ width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:7%;border-bottom:20rpx #efefef solid; }
.jianjie h3{ font-size:40rpx; font-weight: bold; padding-bottom:3%; border-bottom:2rpx rgb(233, 233, 233) solid;}
.jianjie div{ margin-top: 4%;}
.jianjie div p{ line-height:66rpx; color: #999999; font-size: 34rpx;}
.jianjie div p span{ color: #000;}
.wzjj{ margin-top: 5%; width:330rpx; height:85rpx; line-height:85rpx; margin-bottom: 5%; font-size:30rpx;}

/* 小区房源开始 */
.fangyuan{ width: 90%; padding-left: 5%; padding-right: 5%; overflow: hidden; padding-top: 5%; padding-bottom: 80rpx;}
.fangyuan_list{ width: 100%; }
.fang_list{ overflow: hidden; margin-right:6%; width:58%; margin-right: 5%; height:380rpx;display: inline-block;}
.fang_list image{ width: 100%; height: 260rpx;}
.fang_list h3{ font-size: 30rpx; margin-top: 3%;}
.fang_list p{ font-size: 26rpx; margin-top: 3%;}
.fang_list p span.dj1{ font-size: 30rpx; font-weight: bold; color: rgb(253, 27, 27); margin-right: 2%;}
.fang_list p span.dj2{ font-size: 27rpx; color: rgb(146, 146, 146);}
.image-group {
  display: flex;
  white-space: nowrap;
  margin-top:10rpx;
}
.hx_bt1{ width:100%; overflow: hidden; margin-bottom: 5%;}
.hx_bt1 p{ float: left; font-size:34rpx; font-weight: bold; }
.hx_bt1 span{ float: right; font-size:24rpx;}




</style>
