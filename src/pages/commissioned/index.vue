<template>

  <div class="indexstyle">
    <!-- 图片开始 -->
    <div class="tu_img">
      <image :src="img1" />
    </div>
    <!-- 图片结束 -->

    <!-- 委托按钮开始 -->
    <div class="weituo">
      <!-- 委托咨询开始 -->
      <button class="wtzx1" @click="eConsultation">委托咨询</button>
      <!-- 委托咨询结束 -->

      <!-- 在线委托开始 -->
      <button class="wtzx2" @click="zxEntrust">在线委托</button>
      <!-- 在线委托结束 -->
    </div>
    <!-- 委托按钮结束 -->

    <!-- 线上售楼部开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />线上售楼部</div>
        <div class="xiangxi" @click="onlineUrl">点击查看</div>
      </div>
      <div class="neirong">微信生态下云售楼，多元服务应有尽有，“易房通线上售楼处”是基于微信而开发的小程序，在承载实体售楼部所能展示的全部内容之外，更能借助微信生态提升留存沟通效率，
让客户随时随地看房，不受时间和空间的制约。</div>
    </div>
    <!-- 线上售楼部结束 -->

    <!-- 置业小助手开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />置业小助手</div>
        <div class="xiangxi" @click="assistantUrl">点击查看</div>
      </div>
      <div class="neirong">易房通多年致力于地产营销，依托行业最佳实践及前沿技术自主研发数字化创新方案与产品，提供企业级整体解决方案聚焦数据和技术优势，赋能企业智慧化运营和数字化创新能力，
提高管理效能，解决中小房企案场营销过程中经常遇到的问题。</div>
    </div>
    <!-- 置业小助手结束 -->

    <!-- 电子开盘开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />电子开盘</div>
        <div class="xiangxi" @click="electronicsUrl">点击查看</div>
      </div>
      <div class="neirong">易房通电子开盘系统是专门为房地产项目提供线下全方位全流程的开盘摇号及电子签约活动解决方案。
        通过易房通电子开盘系统，将开盘现场全流程从“摇号→大屏公示→叫号排队付款→电子签约→打印协议”进行管控。
        有效帮助房地产实现数字信息化全流程管控，从而降低人工成本，提高效率，排除隐患风险，最终实现销售总业绩目标。</div>
    </div>
    <!-- 电子开盘结束 -->

    <!-- 数据报告开始 -->
    <div class="sszg">
      <div class="ss_biaoti">
        <div class="zoub"><image :src="img2" />数据报告</div>
        <div class="xiangxi" @click="reportUrl">点击查看</div>
      </div>
      <div class="neirong">易房通大数据研究中心整合易房通房产网、大数据中心市场调研组等众多资源，由多位资深市场分析和数据研究人员组成，建立了较为完善的房地产市场监测体系，
目前已成为服务客户最多的本土房产研究中心，是安康市房地产业协会唯一指定房地产市场数据研究机构，是中国人民银行安康市中心支行经济监测定点单位。</div>
    </div>
    <!-- 数据报告结束 -->


    <!-- 加入我们开始 -->
    <div class="join">
        <p>委托热线:400-6800-869</p>
    </div>
    <!-- 加入我们结束 -->


    
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
      img1:app.globalData.imgurl +"wt1.jpg",
      img2:app.globalData.imgurl +"quan.png",
      maskHid:false,
      telHid:false, 
 


    }
  },
   

   methods: {
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
                    that.zxEntrust();

                  
                  }
                }
              })
          }
        })
      }
    },
    //在线委托
    zxEntrust:function(){
      const that = this; 
      wx.request({
        url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          if(data.data==true){
            that.telHid=false;
            that.maskHid=false;
            //显示TabBar
            wx.showTabBar({
              animation: true
            })
            wx.navigateTo({ url: "/pages/zxcommissioned/main"});
          }else{
            that.telHid=true;
            that.maskHid=true;
            //隐藏TabBar
            wx.hideTabBar({
              animation: true
            })
          }
        }
      })
      // wx.navigateTo({ url: "/pages/zxcommissioned/main"});
    },
    //委托咨询
    eConsultation:function(){
      wx.makePhoneCall({
        phoneNumber: '4006800869' 
      })
    },
    //线上售楼部
    onlineUrl:function(){
      const that = this; 
      wx.navigateTo({ url: "/pages/url/main?chating=1"});
    },
    //置业小助手
    assistantUrl:function(){
      const that = this;
      wx.navigateTo({ url: "/pages/url/main?chating=2"});
    },
    //电子开盘
    electronicsUrl:function(){
      const that = this;
      wx.navigateTo({ url: "/pages/url/main?chating=3"});
    },
    //数据报告
    reportUrl:function(){
      const that = this;
      wx.navigateTo({ url: "/pages/url/main?chating=4"});
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
/* 图片开始 */
.tu_img{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top: 5%;}
.tu_img image{ width: 100%; height:450rpx; border-radius:20rpx;box-shadow:3px 8px 1px #ebebeb;}
/* 委托开始 */
.weituo{ width: 94%; margin-left:3%; margin-right:3%; display: flex; flex-direction: row; margin-top:7%;}
.weituo button{ width:46%; height:90rpx; background: #ffc543; font-size: 30rpx; text-align: center; line-height: 90rpx; margin-left: 2%; margin-right: 2%;box-shadow:3px 3px 6px #ffd67c; color: #fff;}
.weituo button::after{border: none;}
.weituo button.wtzx2{ background: #4681f6; box-shadow:3px 3px 6px #5288f5;}
/* 甩手掌柜开始 */
.sszg{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:5%;}
.ss_biaoti{ margin-top:10%; overflow: hidden; }
.zoub{ font-size: 38rpx; font-weight: bold; float: left; width:75%;}
.zoub image{ width:30rpx; height: 30rpx; margin-right: 3%;}
.xiangxi{ font-size:28rpx; float: right; color: rgb(170, 170, 170); margin-top:5rpx;} 
.neirong{ margin-top:3%; line-height:50rpx; font-size:28rpx; color: rgb(139, 139, 139);}
/* 加入我们 */
.join{ margin-top:10%; margin-bottom: 10%;}
.join button{ width:400rpx; height:100rpx; line-height: 100rpx; border-radius:50rpx;background-image: linear-gradient(to right, #64e4cc, #45c8cd); color: #fff;}
.join p{ color: #999999; font-size:28rpx; text-align: center; margin-top:3%;}


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
