<template>
  <div class="indexstyle">
    <div class="sybeij"><image :src="beijing" mode="scaleToFill" /></div>

    <!-- 搜索开始 -->
    <div class="search">
      <div class="searchCon">
        <input type="text" placeholder="您想住在哪里？" @click="searchUrl" class="searchinput" placeholder-style="font-size:14px; color: #fff;"/>
        <image :src="img2" mode="scaleToFill" />
      </div>
    </div>
    <!-- 搜索结束 -->

    <!-- 轮播图开始 -->
    <div class="bannar">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000" easing-function="easeInOutCubic">
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="domain+item.imgurl" class="slide-lbimage" mode="scaleToFill" @click="bannerClick(index, $event)" :data-linkurl="item.linkurl"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 轮播图结束 -->
    
 

    <!-- 二级导航开始 -->
    <div class="nav">
      <div class="navigation" v-for="(item, index) in navs" :key="index" @click="navList(index,$event)"
      :data-url="item.url">
        <image :src="item.img3" mode="scaleToFill" />
        <div class="biaoti">{{item.title}}</div>
      </div>
    </div>
    <!-- 二级导航结束 -->

    <!-- 销售动态开始 -->
    <div class="news-s" v-if="news.length > 0 ? true : false">
      <div class="biaoti-new">
        <div class="wz-bt"><span></span>销售动态</div>
        <div class="more" @click="lpdongtaiClick">查看更多</div>
      </div>
      <div class="proNew" v-for="(item, index) in news" :key="index" @click="salesNewsClick(index,$event)" :data-id="item.id">
        <image :src="domain+item.imgurl" class="new-image" mode="scaleToFill" />
        <div>{{item.title}}</div>
      </div>
    </div>
    <!-- 销售动态结束 -->

    <!-- 优惠信息开始 -->
    <div class="news-s" v-if="activity.length > 0 ? true : false">
      <div class="biaoti-new">
        <div class="wz-bt"><span></span>优惠信息</div>
        <div class="more" @click="discountClick">查看更多</div>
      </div>
      <div class="proNew" v-for="(item, index) in activity" :key="index" @click="newListClick(index,$event)" :data-id="item.id">
        <image :src="domain+item.imgurl" class="new-image" mode="scaleToFill" />
        <div>{{item.title}}</div>
      </div>
    </div>
    <!-- 优惠信息结束 -->

    <!-- 热门楼盘开始 -->
    <div class="hot-s" v-if="hot.length > 0 ? true : false">
      <div class="biaoti-new">
        <div class="wz-bt"><span></span>热门楼盘</div>
        <div class="more" @click="hotPropertyList">查看更多</div>
      </div>
      <div class="hot-nr">
        <scroll-view scroll-x="true" style="width: 100%" class="image-group">
          <div class="loupanlist" v-for="(item, index) in hot" :key="index" :data-id="item.id" 
          @click="newDetail(index,$event)">
            <div class="loupanlist_top">
              <image :src="domain+item.ImgUrl" class="hot-image" mode="scaleToFill" />
              <div class="location">{{ item.zonename }}</div>
            </div>
            <div class="goodTitle">{{ item.name }}</div>
            <p>面积：{{item.arearange==""||item.arearange==null?'暂无':item.arearange+'m²'}}</p>
            <h3>{{item.averageprice==""||item.averageprice==null?'价格待定':'均价'+item.averageprice+'元/m²'}}</h3>
          </div>  
        </scroll-view>
      </div>
    </div>
    <!-- 热门楼盘结束 -->

    <!-- 必看好房开始 -->
    <div class="hot-s" v-if="goodroom.length > 0 ? true : false">
      <div class="biaoti-new">
        <div class="wz-bt"><span></span>必看好房</div>
        <div class="more" @click="goodHouseList">查看更多</div>
      </div>
      <div class="hot-nr">
        <scroll-view scroll-x="true" style="width: 100%" class="image-group">
          <div class="loupanlist" v-for="(item, index) in goodroom" :key="index" :data-id="item.id" 
          @click="esfDetail(index,$event)">
            <div class="loupanlist_top"> 
              <image :src="domain+item.Imgurl" class="hot-image" mode="scaleToFill" />
              <div class="location">{{ item.Zonename }}</div>
            </div>
            
            <div class="goodTitle">{{ item.title }}</div>
            <p>面积：{{item.area==""||item.area==null?'暂无':item.area+'m²'}}</p>
            <h3>{{item.averageprice==""||item.averageprice==null?'价格待定':'均价'+item.averageprice+'元/m²'}}</h3>
          </div>
        </scroll-view>
      </div>
    </div>
    <!-- 必看好房结束 -->

    <!-- 想住靓房开始 -->
    <div class="house-s" v-if="house.length > 0 ? true : false">
      <div class="biaoti-new">
        <div class="wz-bt"><span></span>想住靓房</div>     
        <div class="more" @click="rentList">查看更多</div>
      </div>

      <div class="nr-house">
        <div class="h-mt" v-for="(item, index) in house" :key="index" @click="rentClick(index,$event)" :data-id="item.id">
          <image :src="domain+item.Imgurl" class="new-image" mode="scaleToFill" />
          <div class="r_wz">
            <div class="bt_s">{{ item.title }}</div>
            <div class="jieshao">
              <span>{{ item.apirlroom }}室{{ item.apirloffice }}厅{{ item.apirltoilet }}卫</span>/
              <span>{{ item.area }}m²</span>/
              <span>{{ item.Towardname }}</span>
            </div>
            <div class="youshi">
              <div class="youshi1" v-if="item.Decorationname==''?false:true">{{ item.Decorationname }}</div>
              <div class="youshi1" v-if="item.Termname==''?false:true">{{ item.Termname }}</div>
            </div>
            <div class="m-x">
              <div class="money1">{{item.rent==""||item.rent==null?'价格待定':item.rent+'元/月'}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="more-house" @click="rentList">查看更多</div>
    </div>
    <!-- 想住靓房结束 -->

    <!-- 猜你意向的新房开始 -->
    <div class="intention-house" v-if="newHouse.length > 0 ? true : false">
      <div class="biaoti-new">
        <div class="wz-bt"><span></span>猜你意向的新房</div>
        <div class="more" @click="hotPropertyList">查看更多</div>
      </div>

      <div class="intention-nr">
        <div class="intention-mt" v-for="(item, index) in newHouse" :key="index" :data-id="item.id" 
          @click="newDetail(index,$event)">
          <image :src="domain+item.ImgUrl" class="new-image" mode="scaleToFill" />
          <div class="intention-right">
            <div class="bt_ri">
              <div class="bt_s newHouse_name" v-if="item.name==''?false:true">{{item.name}}</div>
              <div class="salestatename" v-if="item.salestatename==''?false:true">{{item.salestatename}} </div>
            </div>
             <div class="zonename">
              {{item.zonename}}
            </div>
            <div class="youshi">
              <div class="youshi2" v-if="item.PropertyTypeName==''?false:true">{{item.PropertyTypeName}}</div>
              <div class="youshi2" v-if="item.Decorationname==''?false:true">{{item.Decorationname}}</div>
              <div class="youshi2" v-if="item.existingname==''?false:true">{{item.existingname}}</div>
            </div>

            <div class="m-x">
              <p class="money">{{item.averageprice==""||item.averageprice==null?'价格待定':'均价'+item.averageprice+'元/m²'}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="more-house" @click="hotPropertyList"><span></span>查看更多</div>
    </div>
    <!-- 猜你意向的新房结束 -->

    <!-- 猜你想买的二手房开始 -->
    <div class="house-s">
      <div class="biaoti-new">
        <div class="wz-bt"><span></span>猜你想买的二手房</div>
        <div class="more" @click="oldHose">查看更多</div>
      </div>

      <div class="nr-house">
        <div class="h-mt" v-for="(item, index) in esf" :key="index" :data-id="item.id" @click="esfDetail(index,$event)">
          <image :src="item.Imgurl =='' ? lisImgurl : domain+item.Imgurl" class="new-image" mode="scaleToFill" />
          <div class="r_wz">
            <div class="bt_s">{{ item.title}}</div>
            <div class="jieshao">
              <span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirloffice}}卫</span>/<span>{{item.area}}m²</span>/
              <span>{{item.Towardname}}</span>
            </div>
            <div class="youshi">
              <div class="youshi1" v-if="item.Decorationname==''?false:true">{{item.Decorationname}}</div>
              <div class="youshi1" v-if="item.looktime==''?false:true">{{item.looktime}}</div>
            </div>
            <!-- <div class="clear"></div> -->
            <div class="m-x">
              <p class="money">{{item.price==""||item.price==null?'总价：暂无':item.price+'万'}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="more-house" @click="oldHose">查看更多</div>
    </div>
    <!-- 猜你想买的二手房结束 -->

    <!-- 猜你想租的房源开始 -->
    <div class="intention-house">
      <div class="biaoti-new">
        <div class="wz-bt"><span></span>猜你想租的房源</div>
        <div class="more" @click="rentList"  >查看更多</div>
      </div>

      <div class="intention-nr">
        <div class="intention-mt" v-for="(item, index) in renting" :key="index" @click="rentClick(index,$event)" :data-id="item.id">
          <image :src="domain+item.Imgurl" class="new-image" mode="scaleToFill" />
          <div class="intention-right">
            <div class="bt_s">
              {{ item.title }}
            </div>
            <div class="jieshao">
              <span>{{ item.apirlroom }}室{{ item.apirloffice }}厅{{ item.apirltoilet }}卫</span>/
              <span>{{ item.area }}m²</span>/
              <span>{{ item.Towardname }}</span>
              
            </div>
            <div class="youshi">
              <div class="youshi1" v-if="item.Decorationname==''?false:true">{{ item.Decorationname }}</div>
              <div class="youshi1" v-if="item.Termname==''?false:true">{{ item.Termname }}</div>
            </div>
            <div class="m-x">
              <p class="money">{{ item.rent }}元/月</p>
            </div>
          </div>
        </div>
      </div> 

      <div class="more-house" @click="rentList">查看更多</div>
    </div>
    <!-- 猜你想租的房源结束 -->
  </div>
</template>


<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data() {
    return {
      domain:null,
      beijing:app.globalData.imgurl + "sybj.png",
      movies: [],
      img2:app.globalData.imgurl + "ssou.png",
      // navs: [
      //   {img3: app.globalData.imgurl + "n1.png",title: "二手房",url: "/pages/oldhouse/main"},
      //   { img3: app.globalData.imgurl +"n2.png", title: "新房" ,url: "/pages/newhouse/main"},
      //   { img3: app.globalData.imgurl +"n3.png", title: "租房" ,url: "/pages/Rental/main"},
      //   { img3: app.globalData.imgurl +"n4.png", title: "房贷计算器",url: "/pages/syloans/main" },
      // ],
      navs: [
        {img3:app.globalData.imgurl + "meun1.png",title: "二手房",url: "/pages/oldhouse/main"},
        { img3:app.globalData.imgurl + "meun2.png", title: "新房" ,url: "/pages/newhouse/main"},
        { img3:app.globalData.imgurl + "meun3.png", title: "租房" ,url: "/pages/Rental/main"},
        { img3:app.globalData.imgurl + "meun4.png", title: "计算器",url: "/pages/syloans/main" },
        { img3:app.globalData.imgurl + "meun5.png", title: "赚佣金",url: "/pages/commission/main" },
      ],
      news: [],
      activity: [],
      hot: [],
      goodroom: [],
      newHouse:[],
      esf:[],
      renting:[],
      house: [],
      house1: [],
      lisImgurl:app.globalData.imgurl +"zanwutup.jpg",
    };
  },
  onLoad() {
    const that = this;

    that.domain=app.globalData.domain;
    
    common.initApp(function (userInfo) { 
      //获取轮播图
      wx.request({
        url:
          app.globalData.url +
          "Index/BandBanner" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          that.movies = res.data.Context.banner;
        },
        fail: function (res) {},
      });
      //获取楼盘动态和活动
      wx.request({
        url:
          app.globalData.url +
          "Index/BandDT_HD" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) { 
          that.news = res.data.Context.dynamic;
          that.activity = res.data.Context.activity;
        },
        fail: function (res) {},
      });
      //获取热门楼盘
      wx.request({
        url:
          app.globalData.url +
          "Index/BandHotProject" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          that.hot = res.data.Context.hot;
        },
        fail: function (res) {},
      });
      //获取必看好房
      wx.request({
        url:
          app.globalData.url +
          "Index/BandGoodRoom" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          that.goodroom = res.data.Context.goodroom;
        },
        fail: function (res) {},
      });
      //获取想住靓房
      wx.request({
        url:
          app.globalData.url +
          "Index/BandBeautifulRoom" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          that.house=res.data.Context.beautiful;
        },
        fail: function (res) {},
      });
      //获取猜你意向的新房
      wx.request({
        url:
          app.globalData.url +
          "Index/BandNewHouse" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          that.newHouse=res.data.Context.newhouse;
        },
        fail: function (res) {},
      });
      //获取猜你想买的二手房
      wx.request({
        url:
          app.globalData.url +
          "Index/BandEsf" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          that.esf=res.data.Context.esf;
        },
        fail: function (res) {},
      });
      //获取猜你想租的房源
      wx.request({
        url:
          app.globalData.url +
          "Index/BandRenting" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          that.renting=res.data.Context.esf;
        },
        fail: function (res) {},
      });
    });
  },
  
  methods: {
    //点击跳转banner
    // bannerClick: function (index, e) {
    // },
    //点击查看更多楼盘动态
    // bannerClick: function () {
    //   wx.switchtab({ url: "/pages/articlelist/main" });
    // },
    navList:function(index,e){
      wx.navigateTo({ url: e.mp.currentTarget.dataset.url });
    },
    //点击跳转新房详情页
    newDetail:function(index,e){
      console.log("cc",e)
      wx.navigateTo({ url: "/pages/newhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
    //点击跳转二手房详情页
    esfDetail:function(index,e){
      wx.navigateTo({ url: "/pages/oldhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
    //点击猜你想买的二手房查看更多
    oldHose:function(){
      wx.navigateTo({ url: "/pages/oldhouse/main"});
    },
    //点击跳转必看好房
    goodHouseList:function(){
      wx.navigateTo({ url: "/pages/oldhouse/main"});
    },
    //点击跳转搜索页
    searchUrl:function(){
       wx.navigateTo({url:"/pages/searchList/main"});
    },
    //点击热门楼盘跳转列表页
    hotPropertyList:function(){
      wx.navigateTo({ url: "/pages/newhouse/main"});
    },
    // 点击跳转想看靓房
    rentClick:function(index,e){
      wx.navigateTo({ url: "/pages/Rentaldetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
    // 点击想看靓房的的查看更多
    rentList:function(){
      wx.navigateTo({ url: "/pages/Rental/main"});
    },
    // 点击销售动态跳转文章页
    salesNewsClick(index,e){
      wx.navigateTo({ url: "/pages/articledetails/main?id=" + e.mp.currentTarget.dataset.id + "&page=index&newType=2"});
    },
    // 点击优惠信息跳转文章页
    newListClick(index,e){
      wx.navigateTo({ url: "/pages/articledetails/main?id=" + e.mp.currentTarget.dataset.id + "&page=index&newType=2"});
    },
    //销售动态跳转
    lpdongtaiClick:function(){
      app.globalData.tab = 3;
      wx.reLaunch({ url: "/pages/articleList/main"});
      // wx.reLaunch({ url: "/pages/articleList/main?tab=" +3});
    },
    //优惠信息跳转
    discountClick:function(){
      app.globalData.tab = 2;
      wx.switchTab({ url: "/pages/articleList/main"});
    },


  },
    onShareAppMessage: function(res) {
    return {
      title: "易房通房产网",
      path: "/pages/tel/main",
      imageUrl: "",
      success: function(shareTickets) {
        console.info(shareTickets + "成功");
        // 转发成功
      },
      fail: function(res) {
        console.log(res + "失败");
        // 转发失败
      },
      complete: function(res) {
        // 不管成功失败都会执行
      }
    };
  },
};
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;
}

.indexstyle {
  width: 100%;
  margin: 0 auto;
  background: #fff;
}





.sybeij{ width: 100%; height:350rpx; }
.sybeij image{ width: 100%; height: 100%;}
.bannar {
  width:92%; position: absolute;top:160rpx;left:4%;
  /* box-shadow: 1rpx 1rpx 30rpx #7f90a77a; */
  box-shadow: 1rpx 1rpx 30rpx rgba(6, 40, 85, 0.3);
  margin: 0 auto;
  height:280rpx; border-radius: 20rpx;
}
.bannar > swiper {
  height: 100%; border-radius: 20rpx;
}
.banner image {
  width: 100%;
  height: 100%; border-radius: 20rpx;
}
.slide-lbimage {
  width: 100%;
  height: 100%; border-radius: 20rpx;
}

/* 搜索框开始 */
.search {
  width:90%; 
  position: absolute;
  z-index: 9999;
  top: 40rpx;
  margin: 0 auto;
  margin-left:5%;
}
.searchCon {
  /* overflow: hidden; */
  position: relative;
}
.searchCon>div{position: absolute;top: 53rpx; width: 100%;text-align: center;}
.searchCon > input {
  float: left;
  background:rgba(255, 255, 255, 0.5);
  width:90%; 
  border-radius: 10rpx;
  height:70rpx;
  line-height:70rpx; 
  font-size: 13px; 
}
 .searchCon > image {
  position: absolute;top: 17rpx;left: 25rpx; 
  float: left;
  width: 35rpx;
  height: 35rpx;
}
.searchinput{padding-left:10%;

}

/* 搜索框结束 */



/* 导航 */
.nav {
  width:98%; margin-left: 1%; margin-right: 1%; position: relative;top:110rpx; margin-bottom: 180rpx;
  margin-top: 5%;
  /* padding-bottom:3%;
  border-bottom: 20rpx #efefef solid; */
  overflow: hidden;
}
.navigation {
  float: left;
  width: 20%;
  margin: 0 auto;
}
.navigation image {
  width: 95rpx;
  height: 95rpx;
  text-align: center;
  margin: 0 auto;
  display: block;
}
.navigation .biaoti {
  font-size: 30rpx;
  text-align: center;
  margin-top: 5%;
}

/* 资讯 */
.image-group {
  display: flex;
  white-space: nowrap;
  margin-top: 10rpx;
}
.news-s {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 5%;
  padding-bottom: 3%;
  border-bottom: 20rpx #efefef solid;
}
.biaoti-new {
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
  overflow: hidden;
  /* line-height: 33rpx; */
}
.biaoti-new .wz-bt {
  float: left;
  /*padding-left: 10px; border-left: 5px #0a8de4 solid; border-top-left-radius:8rpx; border-top-right-radius:8rpx; border-bottom-left-radius:8rpx; border-bottom-right-radius: 8rpx; */
   font-size: 34rpx; line-height:38rpx;
  font-weight: bold;
}

.biaoti-new .wz-bt span{float: left; width: 10rpx; height: 30rpx; background:#0a8de4; border-radius: 10rpx; display: block; margin-top:4rpx; margin-right: 15rpx;}

.biaoti-new .more {
  float: right;
  font-size: 28rpx;
  color: rgb(167, 167, 167);
}

.swiper-news {
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 3%;
  height: 170rpx;
  overflow: hidden;
}
.swiper-news p {
  width: 65%;
  float: left;
  margin-top: 5px;
  line-height:27px;
  font-size:30rpx;
}
.swiper-news image {
  width: 32%;
  float: right;
  height: 160rpx;
  border-radius: 3px;
}

/* 热门楼盘 */
.hot-s {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 5%;
  padding-bottom: 3%;
  border-bottom: 20rpx #efefef solid;
}
.hot-nr {
  width: 96%;
  margin-top: 10px;
  margin-left: 2%;
  margin-right: 2%;
}
.hot-nr .loupanlist {
  height: 290rpx;
  display: inline-block;
  width: 31.3%;
  margin-left: 1%;
  margin-right: 1%;
}
.loupanlist_top{position: relative;}
.hot-nr .loupanlist image {
  width: 100%;
  height:170rpx;
  border-radius: 5px;
}
.hot-nr .loupanlist .location {
  width: 65rpx;
  height: 35rpx; padding:0 6rpx;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.76);
  position: absolute;
  bottom: 25rpx;
  right: 10rpx;
  font-size: 22rpx;
  line-height: 35rpx;
  text-align: center;
}
.goodTitle {
  /* position: relative;
  top: -30rpx; */
  width: 200rpx;
  font-size: 29rpx;
  font-weight: bold;text-overflow:ellipsis;word-break:break-all;overflow: hidden;
}
.hot-nr .loupanlist p {
  font-size: 22rpx;
  color: #a2a2a2; margin-top: 5rpx;
  /* position: relative;
  top: -25rpx; */
}
.hot-nr .loupanlist h3 {
  font-size: 25rpx;
  font-weight: 900;
  color:#fa5741; margin-top: 5rpx;
  /* position: relative;
  top: -20rpx; */
}

/* 想住靓房 */
.house-s {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 5%;
  padding-bottom: 5%;
  border-bottom: 20rpx #efefef solid;
}
.nr-house {
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 15px;
}
.h-mt {
  overflow: hidden;margin-bottom:15rpx;
}
.nr-house image {
  float: left;
  width: 40%;
  height: 200rpx;
  border-radius: 10rpx;
}
.nr-house .r_wz {
  float: right;
  width: 57%;
}
.bt_s {
  font-size: 30rpx;
  font-weight: bold;
  margin-right: 10rpx;
  white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}
.jieshao {
  font-size: 25rpx;
  color: #333;
  margin-top: 10rpx;
}
.youshi1 {
  float: left;padding: 0 10rpx;
  height: 40rpx;
  line-height: 40rpx;
  border-radius: 3px;
  background: #edf0f3;
  color: #849aae;
  font-size: 25rpx;
  text-align: center;
  margin-top: 10rpx;
  margin-right: 10rpx;
}
.m-x {
  margin-top: 10rpx;
  overflow: hidden;
}
.m-x p {
  float: left; font-size: 32rpx;
}
.m-x p.money {
  font-size: 30rpx;
  color: #fa5741;
  font-weight: 900;
  margin-right: 5rpx;
}
.money1 {
  font-size:30rpx;
  color: #fa5741;
  font-weight: 900;
}
.more-house {
  width: 94%;
  height: 70rpx;
  background: #e8edf3;
  border-radius: 5px;
  text-align: center;
  line-height: 70rpx;
  font-size: 28rpx;
  font-weight: bold;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 30rpx;
  color: #3072f6;
}

/* 猜你意向的新房 */
.intention-house {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 5%;
  padding-bottom: 5%;
  border-bottom: 20rpx #efefef solid;
}
.intention-nr {
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 15px;
}
.intention-mt {
  overflow: hidden;
  margin-bottom: 15rpx;
}
.intention-nr image {
  float: left;
  width: 40%;
  height: 190rpx;
  border-radius: 10rpx;
}
.intention-nr .intention-right {
  float: right;
  width: 57%;
  /* margin-top: 20rpx; */
}
.intention-nr .intention-right .bt_ri {
  overflow: hidden;
}
.intention-nr .intention-right .bt_ri h1 {
  float: left;
  font-size: 34rpx;
  font-weight: bold;
  margin-right: 4rpx;
}
.salestatename {
  float: right;
  width: 115rpx;
  height: 40rpx;
  line-height: 40rpx;
  background: #0a8de4;
  text-align: center;
  font-size: 25rpx;
  margin-right: 10rpx;
  color: #fff;
  border-radius: 3px;
}
.youshi{overflow:hidden;}
.youshi2 {
  float: left;
  padding-left: 10rpx;
  padding-right: 10rpx;
  height: 40rpx;
  line-height: 40rpx;
  border-radius: 3px;
  border: 1rpx #efefef solid;
  color: #6b7072;
  font-size: 25rpx;
  text-align: center;
  margin-top: 15rpx;
  margin-right: 10rpx;
}
.m-x image {
  float: right;
  width: 14px;
  height: 8px;
  margin-top: 5rpx;
}
.newHouse_name{float: left;}
.zonename{color: #333;font-size: 25rpx;margin-top: 10rpx;}
.average{color: #A1A1A1;margin-left: 20rpx;font-size: 28rpx;}
.proNew{overflow: hidden;margin-left: 3%;margin-right: 3%;margin-top: 20rpx;}
.proNew>div{float: left;width: 66%;font-size: 30rpx;margin-top: 10rpx;}
.proNew>image{float: left;width: 32%;height: 160rpx;margin-right: 2%;border-radius: 10rpx;}
</style>
