<template>
  <div class="indexstyle">
    <!-- 经纪人介绍开始 -->
    <div class="jjr">
      <div class="jjr_kuang">
        <div class="agent_img"><image :src="bjtu" /></div>

        <div class="nrjieshao">
          <div class="top_js">
            <div class="lelf_jj">
              <div>
                <h1>{{realname}}</h1>
                <span>{{typename}}</span>
              </div>
              <div class="youshis"><p>自我评价：{{evaluation==""||evaluation==0?'暂无':evaluation}}</p></div>
            </div>
            <div class="right_jj">
              <image v-if="domain" :src="domain+headpic" />
              <div>{{companyname}}</div>
            </div>
          </div>
          
          <div class="pingjia">
            <ul>
              <li>
                <h2>{{zonename==""||zonename==0?'暂无':zonename}}</h2>
                <p>区域名称</p>
              </li>
              <li>
                <h2>{{count==""||count==0?'暂无':count}}</h2>
                <p>成交房源</p>
              </li>
              <li>
                <h2>{{overallscore==""||overallscore==0?'暂无':overallscore}}</h2>
                <p>客户评分</p>
              </li>
              <li>
                <h2>{{evaluatesum==""||evaluatesum==0?'暂无':evaluatesum}}</h2>
                <p>评价条数</p>
              </li>
            </ul>
          </div>
        </div>
         
      </div>
    </div>
    <!-- 经纪人介绍结束 -->

    <!-- 更多推荐开始 -->
    <div class="tuijian">
      <!-- 标题 -->
      <div class="tj_bt">
        <div class="bt_lelf">更多推荐</div>
      </div>
      <!-- 内容切换开始 -->
      <div class="nr_list">
        <!-- 租房开始 -->
        <div class="Renthouse">
          <div v-if="more_rent.length>0?true:false">
          <div class="h-mt" v-for="(item, index) in more_rent" :key="index" @click="SameDistrictclick(index,$event)" :data-id="item.id">
            <image v-if="domain" :src="domain+item.Imgurl" class="new-image" mode="scaleToFill"/>
            <div class="r_wz">
              <div class="bt_s">{{item.title}}</div>
              <div class="jieshao">
                <span>{{item.apirlroom}}室{{item.apirloffice}}室{{item.apirltoilet}}室</span>/
                <span>{{item.area}}m²</span>/
                <span>{{item.Towardname}}</span>
              </div>
              <div class="youshiesf">
                <div class="youshiesf1">{{item.Propertyname}}</div>
                <div class="youshiesf1">{{item.Decorationname}}</div>
                <div class="youshiesf1">{{item.Zonename}}</div>
              </div>
              <div class="clear"></div>
              <div class="m-x"><p class="money">{{item.rent==""||item.rent==null?'价格待定':item.rent+'元/月'}}</p></div>
            </div>
            <div class="clear"></div>
          </div>
          </div>

        </div>
        <!-- 租房结束 -->
      </div>
      <!-- 内容切换结束 -->

    </div>    
    <!-- 更多推荐结束 -->

    <!-- 暂无内容 -->
    <div class="tj_none" v-if="noneimgHid">
      <image :src="noneimg" class="new-image" mode="scaleToFill" />
      <div class="NoContent">暂无内容哟~</div>
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
        <div class="zixun" @click="chatClick(index,$event)">在线咨询</div>
        <div class="dianhua" @click="clickService">电话咨询</div>
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
      companyname:"",
      agentid:"",
      realname:"",
      typename:"",
      headpic:'',
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
    that.agentid=option.agentid;
    wx.request({
      url: app.globalData.url +"Agent/BandAgentInfo?sessionKey=" +app.globalData.sessionKey+"&agentid="+that.agentid,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        that.realname = res.data.Context.agentInfo.realname;
        that.typename = res.data.Context.agentInfo.typename;
        that.headpic = res.data.Context.agentInfo.headpic;
        that.companyname = res.data.Context.agentInfo.companyname;

        that.count = res.data.Context.count;
        that.zonename = res.data.Context.agentInfo.zonename;
        that.evaluation = res.data.Context.agentInfo.evaluation;
        that.overallscore = res.data.Context.agentInfo.overallscore;
        that.evaluatesum = res.data.Context.agentInfo.evaluatesum;
        that.mobile = res.data.Context.agentInfo.mobile
        
         
        //推荐租房
        that.more_rent = res.data.Context.more_rent;
        if(that.more_rent.length<=0){
          that.noneimgHid=true;
        }else{
          that.noneimgHid=false;
        }
        
        
       }
    })
  },

onShareAppMessage: function(res) {
    return {
      title: "经纪人名片",
      path: "/pages/agentDetails/main",
      imageUrl: "",
    };
},

 methods: {

  //同小区房源
  SameDistrictclick:function(index,e){ 
    wx.navigateTo({ url: "/pages/Rentaldetails/main?id=" + e.mp.currentTarget.dataset.id});
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
          wx.navigateTo({ url: "/pages/chatRental/main?hxid=" + that.hxid + "&headpic=" + that.headpic + "&projectInfo=" + that.projectInfo});
        }else{
          that.telHid=true;
          that.maskHid=true;
        }
      }
    })
  },
  //拨打当前经纪人电话咨询
  clickService:function(){
      if(this.reservedtelphone!=""){  
        wx.makePhoneCall({
        phoneNumber: this.mobile,
      })
      }else{
        wx.showToast({
          title: '请先添加电话！',
          icon: 'none',
          duration: 2000
        })
      }
      
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
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
/* 暂无内容 */
.tj_none{width:70%;text-align: center;height:450rpx; margin: 0 auto; margin-top:50rpx;}
.tj_none>image{width:200rpx;height:200rpx;}
.tj_none>div{ font-size: 28rpx; color: rgb(187, 187, 187); margin-top:20rpx;}
/* 经纪人开始 */
/* .jjr{width: 140%; height: 500rpx; position: absolute; left: -20%; top: 0; z-index: -1; content: ''; border-radius: 0 0 50% 50%; background: linear-gradient(#3b4671, #293359); } */
/* .jjr_kuang{ width:64%; margin-left:18%; margin-right:18%; background: linear-gradient(#fef1d9, #f2ddb5); border-radius:3%; margin-top:10%; padding-bottom:7%; } */
.jjr{ width: 100%;height: 560rpx;}
.jjr_kuang{width: 100%;height: 100%;position: relative;}
.agent_img{width: 100%;height: 100%;position: absolute;top: 0;left: 0;}
.agent_img>image{width: 100%;height: 100%;}

.nrjieshao{width:80%; position: absolute;top:80rpx;margin-left:10%; margin-right:10%;}
.top_js{ width: 100%; overflow: hidden;  padding-top:10%;} 
.lelf_jj{ float: left;width:70%; margin-top:4%;}
.lelf_jj>div{ display: flex; flex-direction: row;}
.lelf_jj>div h1{ font-size:45rpx; font-weight: bold;}
.lelf_jj>div span{ font-size:30rpx; margin-left: 3%; margin-top: 3%;}

.right_jj{ float: right; position: relative; padding-left: 12rpx; padding-right: 12rpx;display: table; }
.right_jj image{ width: 150rpx; height: 150rpx; border-radius: 50%;}
.right_jj>div{ width: 145rpx; padding:3rpx 0px 3rpx 0rpx; text-align: center; 
background: linear-gradient(#fff4d9, #ffe7b1); border:2rpx #deca99 solid; color: #91783d;
 font-size: 22rpx;border-radius:150rpx; position: absolute; top:75%; overflow:hidden;
text-overflow:ellipsis;white-space:nowrap;}

.youshis{ width: 100%; margin-top:30rpx; height: 88rpx;}
.youshis p{ font-size: 27rpx; color: #6d5c3c;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;
-webkit-box-orient:vertical;-webkit-line-clamp:2; line-height:45rpx;}

.pingjia{width: 100%; margin-top:9%;}
.pingjia ul{ overflow: hidden;}
.pingjia ul li{ width:20%; float: left; margin-left:3%; margin-right:2%; text-align: center; }
.pingjia ul li h2{ font-size:38rpx; font-weight: bold; color: #372b17; text-align: center;}
.pingjia ul li h2 span{ font-size: 24rpx; }
.pingjia ul li p{ font-size: 26rpx; color: #877e67; margin-top:15rpx;}

/* 更多推荐开始 */
.tuijian{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:40rpx; }
.tj_bt{ margin-top: 2%; overflow: hidden;}
.bt_lelf{ float: left; font-size: 37rpx; font-weight: bold;}
.bt_right{ float: right; font-size:30rpx; display: flex; flex-direction: row; width:45%;}
.fang{ margin-left:8%;}
.fz{ color: rgb(15, 133, 230);}

/* 内容切换开始 */
.nr_list{ width: 100%;}
/* 二手房 */
.secondary{ width: 100%;}
.h-mt{ width:100%;  margin-top:30rpx; padding-bottom: 5%; border-bottom: 2rpx #e9e9e9 solid;}
.h-mt image{ float: left; width:32%; height:210rpx; border-radius: 10rpx;}
.h-mt .r_wz{ float:right; width:65%;}
.h-mt .r_wz .bt_s{font-size: 32rpx; font-weight: bold; margin-right:10rpx; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.jieshao{ font-size: 26rpx; color: #000; margin-top:10rpx;}
 .youshiesf1{ float: left; /*width:90rpx;*/ padding-left: 10rpx; padding-right: 10rpx; height:40rpx; line-height: 40rpx; border-radius:6rpx; background: #edf0f3; color:#849aae; font-size: 25rpx; text-align: center; margin-top:10rpx; margin-right: 10rpx;} 
.m-x{ margin-top: 10rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color: #fa5741; font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:#a4a4a4; margin-top: 10rpx; }

/* 新房 */
.intention-mt{ padding-bottom:30rpx; border-bottom:2rpx rgb(236, 236, 236) solid; margin-top:30rpx;}
.intention-mt image{ float: left; width:35%; height:180rpx; border-radius:10rpx;}
.intention-mt .intention-right{ float:right; width:62%; }
.intention-mt .intention-right .bt_ri h1{ float: left; font-size: 34rpx; font-weight: bold; margin-right:4rpx;}
.intention-mt .intention-right .bt_ri p{ float: right; width:60rpx; height:35rpx; line-height: 35rpx; background: #0a8de4; text-align: center; font-size: 24rpx;  margin-right:10rpx; color: #fff; border-radius:6rpx; margin-top:1%;}
.youshi2{ float: left; padding: 3rpx 8rpx 3rpx 8rpx; border-radius:6rpx; border:2rpx #dbdbdb solid; color:#8b8b8b; font-size: 26rpx; text-align: center; margin-top:25rpx; margin-right: 10rpx;}
.m-xq{ margin-top:25rpx; }
.m-xq p{ float: left;}
.m-xq p.money{ font-size: 32rpx; color:#fa5741; font-weight: 900; margin-right: 5rpx;}
 
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
