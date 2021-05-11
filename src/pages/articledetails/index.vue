<template>
  <div class="indexstyle">

    <!-- 文章详情开始 -->
    <div class="wenzhang" v-if="newsModel">
      <div class="bt_title">{{newsModel.title}}</div>

      <div class="fabu">
          <h1>{{newsModel.source}}</h1><span>{{newsModel.publishdate}}</span>
      </div>

      <div class="articleContent"><wxParse :imageProp="{mode:'widthFix'}" :content="newsModel.content" @preview="preview" @navigate="navigate" /></div>

     


    </div>
    <!-- 文章详情结束 -->

    <!-- 更多推荐开始 -->
    <div class="more_list">
      <h2>更多推荐</h2>

      <div class="moretj" v-for="(item, index) in moretjlist" :key="index" @click="newsListclick(index,$event)" :data-id="item.id" :data-typeList="typeList" :data-page="page">
        <div class="tj_lelf">
          <h3>{{item.title}}</h3>
          <p>{{item.intro}}</p>
          <div class="sjmz"><span>{{item.publishdate}}</span></div>
        </div>
        <div class="tj_right">
          <image :src="item.imgurl =='' ? lisImgurl : domain+item.imgurl" class="slide-image" /> 
        </div>
      </div>

     </div>
    <!-- 更多推荐开始 -->


    <!--推荐项目开始 -->
    <div class="more_lists">
      <h2>推荐项目</h2>

      <div class="intention-nr">
        <div class="intention-mt" v-for="(item, index) in moreProject" :key="index" :data-id="item.id" @click="newDetail(index,$event)">
          <image :src="domain+item.ImgUrl" class="new-image" mode="scaleToFill" />
          <div class="intention-right">
            <div class="bt_ri">
              <div class="bt_s newHouse_name">{{item.name }}</div>
              <div class="salestatename">{{item.salestatename}} </div>
            </div>
             <div class="zonename">
              {{item.zonename}}
            </div>
            <div class="youshi">
              <div class="youshi2" v-if="item.Decorationname==''?false:true">{{item.Decorationname}}</div>
              <div class="youshi2" v-if="item.existingname==''?false:true">{{item.existingname}}</div>
            </div>

            <div class="m-x">
              <p class="money">{{item.averageprice==""||item.averageprice==null?'价格待定':'均价'+item.averageprice+'元/m²'}}</p>
            </div>
          </div>
        </div>
      </div>

     </div>
    <!-- 推荐项目开始 -->



    <!-- 底部按钮开始 -->
    <div class="footer">
      <button class="left_foot" @click="collection">
        <div class="Report">收藏</div>
      </button>
      <button  open-type="share" class="right_foot">
        <div class="Telephone">分享</div>
      </button>
    </div>
    <!-- 底部按钮开始 -->



    <!-- 提醒授权开始 -->
    <div class="authorization" v-if="telHid">
      <div class="authorization_title">授权提示</div>
      <div class="authorization_text">为了更好的为您提供服务，我们请求获取您的电话号码</div>
      <div class="authorization_btn">
        <button @click="quxiao">取消</button>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" hover-class="none">允许</button>
      </div>
    </div>
    <!-- 提醒授权结束 -->
    <!-- 遮罩层开始 -->
     <!--x --> 
    <div class="modalMask" v-if="maskHid"></div>
    <!-- 遮罩层结束 -->



    





 
  
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
import wxParse from 'mpvue-wxparse';
export default {
  components: {
    wxParse
  },
  
  data () {
    return {
      domain:null,
      newId:"",
      newsModel:null,
      moretjlist:[],
      moreProject: [],
      page:"",
      maskHid:false,
      telHid:false,
      newType:null,
      typeList:"",
      lisImgurl:app.globalData.imgurl +"zanwutup.jpg",

 
 


    }
  },

  onLoad(option) {
    const that = this;
    that.newsModel="";
    
    that.domain=app.globalData.domain;
    that.newId=option.id;
    that.page=option.page;
    that.newType = option.newType;
    that.typeList = option.typeList;
    if(that.page=="list"){
      if(that.typeList=='1'){
        wx.request({
          url:app.globalData.url +"News/BandNewsInfo" +"?sessionKey=" +app.globalData.sessionKey+'&newId=' + option.id,
          success: function (res) {
            console.log('新闻文章',res)
            that.newsModel = res.data.Context.newsModel;
            that.moretjlist = res.data.Context.moreNews;
            for(var i = 0;i<that.moretjlist.length;i++){
              that.moretjlist[i].publishdate = that.moretjlist[i].publishdate.substring(0, 10);;
            }

            that.moreProject = res.data.Context.moreProject;
          }
        })
      }else if(that.typeList=='2'){
        wx.request({
          url:app.globalData.url +"News/BandProjectNewsInfo" +"?sessionKey=" +app.globalData.sessionKey+'&newId=' + option.id,
          success: function (res) {
            that.newsModel = res.data.Context.newsModel;
            that.moretjlist = res.data.Context.moreNews;
            for(var i = 0;i<that.moretjlist.length;i++){
              that.moretjlist[i].publishdate = that.moretjlist[i].publishdate.substring(0, 10);;
            }

            that.moreProject = res.data.Context.moreProject;
          }
        })

      }
      
    }else{
      wx.request({
          url:app.globalData.url +"News/BandProjectNewsInfo" +"?sessionKey=" +app.globalData.sessionKey+'&newId=' + option.id,
          success: function (res) {
            console.log('新闻文章',res)
            that.newsModel = res.data.Context.newsModel;
            that.moretjlist = res.data.Context.moreNews;
            for(var i = 0;i<that.moretjlist.length;i++){
              that.moretjlist[i].publishdate = that.moretjlist[i].publishdate.substring(0, 10);;
            }
            
            that.moreProject = res.data.Context.moreProject;
          }
      })

    }
  },
  onShareAppMessage: function(res) {
    return {
      title: "文章页",
      path: "/pages/articledetails/main",
      imageUrl: "",
    };
  },

  methods: {
    newsListclick:function(index,e){
      wx.navigateTo({ url: "/pages/articledetails/main?id=" + e.mp.currentTarget.dataset.id + "&typeList="+ e.mp.currentTarget.dataset.typelist+"&page="+e.mp.currentTarget.dataset.page});
    },
    //点击跳转新房详情页
    newDetail:function(index,e){
      wx.navigateTo({ url: "/pages/newhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
    },


    
    //点击收藏
    collection:function(){
      const that = this;
      wx.request({
        url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          if(data.data==true){
            that.telHid=false;
            that.maskHid=false;
            wx.request({
              url:app.globalData.url +"Percenter/BandUserRelationNews" +"?sessionKey=" +app.globalData.sessionKey+'&newId=' + that.newId + "&newType=" +that.newType,
              success: function (res) {
                if(res.data.Context.isguanzhu>0){
                  wx.showToast({
                    title: '您已收藏',
                    icon: 'none',
                    duration: 1000,
                  })
                }else{
                  wx.request({
                    url: app.globalData.url +"News/BandNewsFollow?sessionKey=" +app.globalData.sessionKey+'&newId=' + that.newId +'&newType=' + that.newType,
                    success (res) {
                      if(res.data.Code==0){
                        that.telHid=false;
                        that.maskHid=false;
                        wx.showToast({
                          title: '收藏成功',
                          icon: 'success',
                          duration: 2000
                        });
                      } 

                    }
                  })
                
                }
              }
            })
          }else{
            that.telHid=true;
            that.maskHid=true;
          }
        }
      })
      
      
      
      

    },

    //点击取消授权
    quxiao:function(){
      const that = this;
      that.telHid=false;
      that.maskHid=false;
    },
    //点击获取手机号
    getPhoneNumber(e){
      const that = this;    
      if (e.mp.detail.errMsg == "getPhoneNumber:ok") {
        wx.request({
          url: app.globalData.url +"WxLogin/getPhoneNumber?sessionKey="+app.globalData.sessionKey,
          method:"POST",
          data: {
            encryptedData:e.mp.detail.encryptedData,
            iv:e.mp.detail.iv
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            var obj = JSON.parse(res.data.Context.phoneNumber.trim());
            that.purePhoneNumber=obj;
              wx.request({
                url: app.globalData.url +"WxLogin/RegisterLogin" +"?sessionKey=" +app.globalData.sessionKey,
                method:"POST",
                data: {
                  nickname:that.nickname,
                  headpic:that.headpic,
                  mobile:that.purePhoneNumber
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success (data) {
                  if(data.data.Code==0){
                    that.telHid=false;
                    that.maskHid=false;
                    wx.setStorageSync('member',data.data.Context.member);
                    that.openType="";
                    app.globalData.member=data.data.Context.member; 
                    that.collection();

                  
                  }
                }
              })
          }
        })
      }
    },








  }


 

   

}
</script>

<style scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
 
.wenzhang{width:90%; margin-top: 5%;  padding-left:5%; padding-right:5%;padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.bt_title{ font-size: 38rpx; font-weight: bold;}

.fabu{margin-top:1%; width: 100%; display: flex; flex-direction: row; margin-bottom:40rpx;}
.fabu h1{ font-size:32rpx; margin-top:16rpx; margin-right:1%;}
.fabu span{ font-size:28rpx; color: rgb(165, 165, 165);margin-top:20rpx;}
.articleContent{  width:100% !important; margin: 0 auto; } 

.more_list{width:90%; margin-top: 5%;  padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom: 20rpx #efefef solid; }
.more_list h2{ font-size:38rpx; font-weight: bold;}

.more_lists{width:90%; margin-top: 5%;  padding-left: 5%; padding-right: 5%; padding-bottom:130rpx; border-bottom: 20rpx #efefef solid; }
.more_lists h2{ font-size:38rpx; font-weight: bold;}

.moretj{ margin-top:5%; overflow: hidden; padding-bottom:3%; border-bottom:2rpx rgb(240, 240, 240)solid;}
.moretj .tj_lelf{ float: left; width: 60%;}
.moretj .tj_lelf .sjmz{ font-size: 27rpx; margin-top: 20rpx; color: #63411d; width: 100%;}
.moretj .tj_lelf h3{ font-size: 33rpx;color: #000; font-weight: bold; margin-top: 3%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis; }
.moretj .tj_lelf p{ color: #000; margin-top:20rpx; font-size: 28rpx;     display: -webkit-box;
    -webkit-box-orient: vertical;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;}
.moretj .tj_right{ float: right; width:35%;}
.moretj .tj_right image{ width:100%; height:210rpx; border-radius:6rpx;}
.moretj .tj_right .redu{ color: #b4b4b4; font-size: 26rpx; text-align: right; margin-top: 2%;}



.intention-nr {
  width:100%;
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
.newHouse_name{float: left;width: 60%;
    font-size: 30rpx;
    font-weight: bold;
    margin-right: 10rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;}
.zonename{color: #333;font-size: 25rpx;margin-top: 10rpx;}
.average{color: #A1A1A1;margin-left: 20rpx;font-size: 28rpx;}
.proNew{overflow: hidden;margin-left: 3%;margin-right: 3%;margin-top: 20rpx;}
.proNew>div{float: left;width: 66%;font-size: 30rpx;margin-top: 10rpx;}
.proNew>image{float: left;width: 32%;height: 160rpx;margin-right: 2%;border-radius: 10rpx;}


/* 底部按钮 */
.footer{ width:94%;  padding-left: 3%; padding-right: 3%; padding-top: 3%; height: 120rpx; background: #fff;position: fixed;bottom: 0; overflow: hidden;}
.footer button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; background:none; line-height: normal;}
.footer button::after{border: none; padding: 0 !important;}
.left_foot{ float: left; width:44%;height: 120rpx; margin-left: 3%; margin-right: 3%;}
.Report{width:100%; background: #3dc28e; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}

.right_foot{ float: right; width:44%;height: 120rpx; margin-left: 3%; margin-right: 3%;}
.Telephone{width:100%; background: #2e72f1; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}


/* 提醒授权开始 */
.authorization{width: 80%;margin: 0 auto;position: fixed;top: 390rpx;left: 10%;z-index:999999999;
background: #fff;padding: 30rpx 30rpx 60rpx 30rpx;box-sizing: border-box;border-radius: 10rpx;}
.authorization_title{font-size: 32rpx;color: #040404;font-weight: 700;padding-bottom: 30rpx;
text-align: center;}
.authorization_text{font-size: 28rpx;}
.authorization_btn{justify-content: center;display: flex;margin-top: 30rpx;}
.authorization_btn>button:first-child{background: #EEEEEE;color: #2F2F2F;}
.authorization_btn>button:nth-child(2){margin-right: 0;background: #2e72f1;color: #fff;}
.authorization_btn>button{margin-right: 10%;margin-left: 0;padding: 0;width: 45%;font-size: 28rpx;}
.authorization_btn>button::after{border: none;}
/* 提醒授权结束 */
/* 遮罩层开始 */
.modalMask {
  width: 100% !important;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: #000 !important;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
/* 遮罩层结束 */




</style>
