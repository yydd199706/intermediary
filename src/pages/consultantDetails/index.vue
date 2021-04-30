<template>
  <div class="indexstyle">
    <!-- 经纪人介绍开始 -->
    <div class="jjr" v-if="managerInfo">
      <div class="jjr_kuang"> 

          <!-- 置业顾问名片开始 -->
          <div class="lelf_card"><image v-if="domain" :src="domain+managerInfo.imghead_url" /></div>
          <div class="cardDetails">
            <div>
              
              <div class="right_card">
                <div class="name1">{{managerInfo.realname==""?'暂无':managerInfo.realname}}</div>
                <div class="post1">{{managerInfo.jobtitle==""?'暂无':managerInfo.jobtitle}}</div>
              </div>
            </div>
            <div class="information">
              <div><image :src="phone" />{{managerInfo.telphone==""?'暂无':managerInfo.telphone}}</div>
              <div><image :src="years" />从业年限：{{managerInfo.workyear==""?'暂无':managerInfo.workyear+'年'}}</div>
              <!-- <div><image :src="Focuson" />42个客户关注</div> -->
            </div> 
          </div>
          <!-- <div class="cardDetails">
            <div class="card_lelf">
              <div class="name1">杨女士</div>
              <div class="post1">置业顾问</div>
              <div class="information">
                <div><image :src="phone" />18729956325</div>
                <div><image :src="years" />5年专业经验</div>
                <div><image :src="Focuson" />42个客户关注</div>
              </div>  
            </div>
            <div class="card_right"><image :src="img2" /></div>     
          </div> -->
          <!-- 置业顾问名片结束 -->
         
      </div>
    </div>
    <!-- 经纪人介绍结束 -->
    
    <!-- 我的个人简介开始 -->
      <div class="briefIntroduction" v-if="managerInfo">
        <div class="title">我的个人简介</div>
        <div class="advantage">
          <div><image :src="img5" />问题解答</div>
          <div><image :src="img6" />邀约陪同</div>
          <div><image :src="img7" />专业分析</div>
          <div><image :src="img8" />优惠便利</div>
        </div>
        <div class="neirong">{{managerInfo.resume==""?'暂无':managerInfo.resume}}</div>
      </div>
      <!-- 我的个人简介结束 -->


      <!-- 更多推荐开始 -->
      <div class="project">
        <div class="title">更多推荐</div>
        <!-- 文章列表开始 -->
        <div class="intention-nr">
            <div class="intention-mt" v-for="(item, index) in newRecommendations" :key="index" :data-id="item.id" @click="newDetail(index,$event)">
              <image :src="domain+item.ImgUrl" class="new-image" mode="scaleToFill" />
              <div class="intention-right">
                <div class="bt_ri">
                  <div class="bt_s newHouse_name">{{item.name}}</div>
                  <div class="salestatename">{{item.salestatename}} </div>
                </div>
                <div class="zonename">
                  {{item.zonename}}
                </div>
                <div class="youshi">
                  <div class="youshi2">{{item.Decorationname==""?'暂无':item.Decorationname}}</div>
                  <div class="youshi2">{{item.existingname==""?'暂无':item.existingname}}</div> 
                </div>

                <div class="m-x">
                  <p class="money">{{item.averageprice==""||item.averageprice==null?'价格待定':'均价'+item.averageprice+'元/m²'}}</p>
                </div>
              </div>
            </div>
          </div>
        <!-- 文章列表结束 -->
         
        
      </div>
      <!-- 更多推荐结束 -->


    <!-- 底部按钮开始 -->
    <div class="foot-an" v-if="managerInfo">
      <div class="lelf_foot">
        <button open-type="share" >
          <image :src="footimg1" class="slide-image" />
          <p>分享</p>
        </button>
      </div>
      <div class="right_foot">
        <div class="zixun" @click="chatClick(index,$event)">在线咨询</div>
        <div class="dianhua" @click="clickService(index,$event)" :data-telphone="managerInfo.telphone">电话咨询</div>
      </div>
    </div>
    <!-- 底部按钮结束 -->

 
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
export default {
  data () {
    return {
      domain:null,
      img2: app.globalData.imgurl +"lou.png",
      phone: app.globalData.imgurl +"dh1.png",
      years: app.globalData.imgurl +"zy1.png",
      Focuson: app.globalData.imgurl +"gz1.png", 
      img5: app.globalData.imgurl +"jj1.png",
      img6: app.globalData.imgurl +"jj2.png",
      img7: app.globalData.imgurl +"jj3.png",
      img8: app.globalData.imgurl +"jj4.png",
      mid:"",
      domain:null,
      managerInfo:null,
      telphone:"",
      newRecommendations:"",

      tab:1,
      more_esf: [],
      more_new: [],
      more_rent: [],
      footimg1: app.globalData.imgurl +"fx.png",
      noneimg: app.globalData.imgurl +"null_data.png",
      count:"",
      zonename:"",
      evaluation:"",
      overallscore:"",
      evaluatesum:"",
      noneimgHid:false,
      bjtu:app.globalData.imgurl +"jjrbj.png",
      mobile:"",
      maskHid:false,
      telHid:false,
 
    }
  },

onLoad(option) {
    const that = this;
    that.domain=app.globalData.domain;
    that.mid=option.mid;
      //获取置业顾问名片
      wx.request({
        url:app.globalData.url +"Project/BandB_P_ManagerInfo" +"?sessionKey=" +app.globalData.sessionKey+'&mid=' + that.mid,
        success: function (res) {
          that.managerInfo = res.data.Context.managerInfo;
          //更多推荐
          that.newRecommendations = res.data.Context.moreList
        }
      })
},
 
onShareAppMessage: function(res) {
    return {
      title: "置业顾问名片",
      path: "/pages/consultantDetails/main",
      imageUrl: "",
    };
},

 methods: {
    //点击跳转新房详情页
    newDetail:function(index,e){
      wx.navigateTo({ url: "/pages/newhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
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
                console.log("deng",data)
                if(data.data.Code==0){
                  that.telHid=false;
                  that.maskHid=false;
                  wx.setStorageSync('member',data.data.Context.member);
                  that.openType="";
                  app.globalData.member=data.data.Context.member; 
                }
              }
            })
          }
        })
      }
    },
    //点击在线咨询进入聊天
    chatClick:function(index,e){
      const that = this;
      wx.request({
        url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          console.log("data",data)
          if(data.data==true){
            that.telHid=false;
            that.maskHid=false;
            wx.navigateTo({ url: "/pages/chatNew/main?hxid=" + that.hxid + "&headpic=" + that.headpic + "&projectInfo=" + that.projectInfo});
          }else{
            that.telHid=true;
            that.maskHid=true;
          }
        }
      })
    },
    // 点击电话咨询
    clickService:function(index,e){
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.telphone
      })
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
/* 暂无内容 */
.tj_none{width:70%;text-align: center;height:450rpx; margin: 0 auto; margin-top:50rpx;}
.tj_none>image{width:200rpx;height:200rpx;}
.tj_none>div{ font-size: 28rpx; color: rgb(187, 187, 187); margin-top:20rpx;}
/* 经纪人开始 */
.jjr{ width: 100%;height:360rpx; background: #39446f;}
.jjr_kuang{width: 100%;height: 100%; } 
.cardDetails{ width:94%;  margin-left:3%; margin-right:3%;background: linear-gradient(to top,#f3deb6,#fef1d9);border-radius: 20rpx; height:400rpx; overflow: hidden; position: absolute; top: 160rpx;}
 .lelf_card{ position: relative; top:60rpx;/* left:35%;*/ z-index: 999;  } 
.lelf_card image{ width:220rpx; height: 220rpx; margin: 0 auto; display: block; border-radius: 50%; border:6rpx #fef1d9 solid;}

.right_card{margin-top:30rpx; width: 300rpx; height:70rpx;background: linear-gradient(#fff4d9, #ffe7b1);border:2rpx #deca99 solid; color: #91783d;position: relative; top:80rpx; left:28%;z-index: 999; border-radius:40rpx; }
.right_card .name1{ float: left; font-size:36rpx; font-weight: bold; line-height: 70rpx; margin-left:30rpx;}
.right_card .post1{float: left; font-size:28rpx; line-height:70rpx;margin-left:20rpx; }
.information{ margin-top:140rpx; padding-bottom:20rpx; margin-left: 5%; margin-right: 5%; width: 90%;}
.information>div{ font-size: 27rpx; color: #9a7a2c; font-size: 28rpx; margin-bottom: 16rpx; float: left; width: 46%; margin-left: 2%; margin-right:2%; background: #fef1d9; height:90rpx; line-height: 90rpx; border-radius: 10rpx;box-shadow: 1px 1px 15px #e7e5dd6e;}
.information>div image{ width: 28rpx; height:28rpx; margin-left: 30rpx;margin-right: 10rpx; position: relative; top: 5rpx;}


/* .card_lelf{ float: left; width: 58%; margin-right: 2%;}
.name1{ margin-top: 30rpx; margin-left:30rpx; font-size: 38rpx; font-weight: bold;}
.post1{margin-left: 30rpx; font-size:26rpx; margin-top: 10rpx;}
.information{ margin-top:70rpx; padding-bottom:20rpx;}
.information>div{ font-size: 26rpx; color: #9a7a2c; font-size: 28rpx; margin-bottom: 16rpx;}
.information>div image{ width: 28rpx; height:28rpx; margin-left: 30rpx;margin-right: 10rpx; position: relative; top: 5rpx;}

.card_right{ float: right; width: 40%; height:400rpx;  }
.card_right image{ width: 100%; height:400rpx; border-top-right-radius: 20rpx; border-bottom-right-radius: 20rpx; border-left:8rpx #deca99 solid; } */

/* 我的个人简介开始 */
.briefIntroduction{ width:94%; margin-left:3%; margin-right:3%; background: rgb(249, 249, 249); border-radius: 20rpx; padding-bottom:20rpx; position: absolute; top:590rpx; }
.briefIntroduction .title{ font-size: 38rpx; font-weight: bold; padding-left: 20rpx; padding-top:30rpx;}
.advantage{ width:94%; margin-left:3%; margin-right:3%; margin-top:40rpx; overflow: hidden;}
.advantage>div{ float: left; width: 25%; font-size: 26rpx;}
.advantage>div image{ width: 30rpx; height: 30rpx; position: relative; top: 5rpx; margin-right:8rpx;}
.neirong{ margin-top:30rpx; width: 91%; margin-left: 3%; margin-right: 3%; height:100rpx; line-height:100rpx; font-size:28rpx; 
background: #fff; border-radius: 20rpx; margin-bottom:30rpx; padding-left:3%;}


 

/* 更多推荐开始 */
.project{width:94%; margin-left:3%; margin-right:3%;position: absolute; top:950rpx; background: rgb(249, 249, 249); border-radius: 20rpx; 
padding-bottom:20rpx; }
.project .title{ font-size: 38rpx; font-weight: bold; padding-left: 20rpx; padding-top: 30rpx;}
.intention-nr {
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 15px;
}
.intention-mt {
  overflow: hidden;
  width:100%;
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
.bt_s{
  width: 60%;
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
.m-x {
  margin-top: 10rpx;
  overflow: hidden;height: 50rpx;line-height: 50rpx;
}
.money {
  font-size: 30rpx;
  color: #fa5741;
  font-weight: 900;
  margin-right: 5rpx;
}


 
/* 底部按钮开始 */
.foot-an{ width: 96%; height: 100rpx; padding-top:15rpx; padding-bottom: 15rpx; padding-left:2%; padding-right:2%;background:#fff;position: fixed;bottom: 0; z-index: 999; overflow: hidden;}
.lelf_foot{ float: left; width:19%; margin-top:6rpx;}
.lelf_foot button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; background:none; line-height: normal;}
.lelf_foot button::after{border: none; padding: 0 !important;}
.lelf_foot image{ width:45rpx; height: 45rpx; }
 .lelf_foot p{ font-size:28rpx; position: relative;top: -5rpx;} 
.right_foot{ float: right; width:81%; display: flex; flex-direction: row;}
.zixun{ width: 46%; margin-left:2%; margin-right:2%; background: #3bc48b; color: #fff; height:80rpx; line-height: 80rpx; text-align: center; border-radius: 10rpx; margin-top: 10rpx;}
.dianhua{ width: 46%; margin-left:4%; margin-right:4%; background: #3072f6; color: #fff; height: 80rpx; line-height: 80rpx; text-align: center; border-radius: 10rpx; margin-top: 10rpx;}


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
