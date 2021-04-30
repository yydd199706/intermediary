<template>
  <div class="indexstyle">

    <div class="newslist">
      <!-- 栏目切换开始 -->
      <div class="lanmunews">
        <div class="juz">
          <div :class="{'selected':tab == 1,'title':true}" class="newxw" @click="changTab(1)">新闻资讯</div>
          <div :class="{'selected':tab == 2,'title':true}" class="newxw" @click="changTab(2)">优惠信息</div>
          <div :class="{'selected':tab == 3,'title':true}" class="newxw" @click="changTab(3)">销售动态</div>
        </div>
      </div>

      <!-- 列表内容开始 -->
      <div class="xinwennr">
        <!-- 新闻资讯开始 -->
        <div class="xwzxs" v-if="tab==1">
          <div class="news_list">
            <ul>
              <li v-for="(item, index) in newList" :key="index" @click="zxnewListClick(index,$event)" :data-id="item.id">
                <div class="xw_lelf">
                  <h2>{{item.title}}</h2>
                  <div class="zhaiyao">{{item.intro}}</div>
                  <p><span class="m2">{{item.publishdate}}</span></p>
                </div>
                <div class="xw_right">
                  <image :src="domain+item.imgurl" class="slide-image" mode="scaleToFill" />             
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 优惠项目开始 -->
        <div class="xwzxs" v-if="tab==2">
          <div class="news_list">
            <ul>
              <li v-for="(item, index) in offerinfoList" :key="index" @click="newListClick(index,$event)" :data-id="item.id">
                <div class="xw_lelf">
                  <h2>{{item.title}}</h2>
                  <div class="zhaiyao">{{item.intro}}</div>
                  <p><span class="m2">{{item.publishdate}}</span></p>
                </div>
                <div class="xw_right">
                  <image :src="domain+item.imgurlStr" class="slide-image" mode="scaleToFill" />             
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 销售动态开始 -->
        <div class="xwzxs" v-if="tab==3">
          <div class="news_list">
            <ul>
              <li v-for="(item, index) in salesnewsList" :key="index" @click="newListClick(index,$event)" :data-id="item.id">
                <div class="xw_lelf">
                  <h2>{{item.title}}</h2>
                  <div class="zhaiyao">{{item.intro}}</div>
                  <p><span class="m2">{{item.publishdate}}</span></p>
                </div>
                <div class="xw_right">
                  <image :src="domain+item.imgurlStr" class="slide-image" mode="scaleToFill" />             
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>
  
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      domain:null,
      tab: 1,
      pageNumber:1,
      pageRecord:6,
      newList:[],
      offerinfoList:[],
      salesnewsList:[],
      allPagenew:null,
      allPageoffer:null,
      allPagesales:null,
 


    }
  },

  onLoad(option) {
    const that = this;
    

    that.domain=app.globalData.domain;
    that.tab = app.globalData.tab;
    wx.request({
        url: app.globalData.url +"News/BandNewsList" +"?sessionKey=" +app.globalData.sessionKey,
        method:"POST",
        data: {
          pageNumber:that.pageNumber,
          pageRecord:that.pageRecord
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log('新闻',res)
          
          that.newList = res.data.Context.newList;
          that.offerinfoList = res.data.Context.offerinfoList.ds;
          that.salesnewsList = res.data.Context.salesnewsList.ds;
          if (res.data.Context.recordNewCount == 0) {
          } else {
            that.allPagenew = res.data.Context.recordNewCount;
          }
          if (res.data.Context.recordOfferCount == 0) {
          } else {
            that.allPageoffer = res.data.Context.recordOfferCount;
          }
          if (res.data.Context.recordSalesCount == 0) {
          } else {
            that.allPagesales = res.data.Context.recordSalesCount;
          }
          console.log("条数",that.allPagesales)


        }
    })


  },
  onShow(){
  const that = this;
  //解决微信小程序使用 switchTab 跳转页面时页面不更新问题
  wx.switchTab({  
      url: "/pages/articleList/main",  
      success: function (e) {  
      console.log("tiaozhuan",e)
        var page = getCurrentPages().pop();  
        if (page == undefined || page == null) return;  
        page.onLoad();  
      }  
    })
  },





  methods: {
    changTab(index) {
      this.tab = index;
    },
    newListClick(index,e){
      wx.navigateTo({ url: "/pages/articledetails/main?id=" + e.mp.currentTarget.dataset.id+ "&page=list&newType=2"});
    },
    zxnewListClick(index,e){
      wx.navigateTo({ url: "/pages/articledetails/main?id=" + e.mp.currentTarget.dataset.id+ "&page=list&newType=1"});
    }
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
 

.newslist{ width:100%; }
.lanmunews{ display: flex; flex-direction: row; margin-top: 20rpx; border-bottom: 1rpx #efefef solid; }
.juz{ width:95%; margin: 0 auto;}
.newxw{ font-size: 32rpx; margin-left:7%; margin-right:7%; float: left;}
.selected { border-bottom:6rpx #4487eb solid; padding-bottom:10rpx; font-size: 35rpx; font-weight: bold;}


.xinwennr{ margin-top:10rpx; width:90%; margin-left: 5%; margin-right: 5%;}
.news_list{ width: 100%; }
.news_list ul li{overflow: hidden; padding-top: 5%; padding-bottom: 3%; border-bottom:2rpx rgb(240, 240, 240) solid; }
.news_list ul li .xw_lelf{ float: left; width: 65%;}
.news_list ul li .xw_lelf h2{ font-size: 32rpx; font-weight: bold; margin-top: 2%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.news_list ul li .xw_lelf .zhaiyao{ font-size: 28rpx; margin-top:20rpx; display: -webkit-box;-webkit-box-orient: vertical;width: 100%;
text-overflow: ellipsis;overflow: hidden;-webkit-line-clamp: 2;}
.news_list ul li .xw_lelf h2 p{ width:30rpx; height:8rpx; border-radius:20rpx; background: rgb(18, 168, 255); position:absolute; left: 8%; top:5%;}
.news_list ul li .xw_lelf p{  margin-top:20rpx; color: rgb(104, 104, 104); font-size:27rpx;}
.news_list ul li .xw_lelf p span.m1{ margin-right: 3%;}
.news_list ul li .xw_right{ float: right; width: 33%;}
.news_list ul li .xw_right image{ width: 100%; height:200rpx; border-radius:12rpx;}

 

</style>
