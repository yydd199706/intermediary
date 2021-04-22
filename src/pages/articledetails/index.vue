<template>
  <div class="indexstyle">

    <!-- 文章详情开始 -->
    <div class="wenzhang" v-if="newsModel">
      <div class="bt_title">{{newsModel.title}}</div>

      <div class="fabu">
          <h1>{{newsModel.source}}</h1><span>{{newsModel.publishdate}}</span>
      </div>

      <div class="articleContent"><wxParse :content="newsModel.content" @preview="preview" @navigate="navigate" /></div>

     


    </div>
    <!-- 文章详情结束 -->

    <!-- 更多推荐开始 -->
    <div class="more_list">
      <h2>更多推荐</h2>

      <div class="moretj" v-for="(item, wenzhang) in moretjlist" :key="wenzhang">
        <div class="tj_lelf">
          <div class="sjmz">{{item.name}}<span>{{item.tj_time}}</span></div>
          <h3>{{item.titletj}}</h3>
          <p>{{item.neirong}}</p>
        </div>
        <div class="tj_right">
          <image :src="item.img2" class="slide-image" /> 
          <div class="redu">热度{{item.hottj}}</div>
        </div>
      </div>

     </div>
    <!-- 更多推荐开始 -->


    <!--推荐项目开始 -->
    <div class="more_list">
      <h2>推荐项目</h2>

      <div class="nr-house">
        <div class="h-mt" v-for="(item, index) in house" :key="index">
          <image :src="item.img6" class="new-image" mode="scaleToFill"/>
          <div class="r_wz">
            <div class="bt_s">{{item.title}}</div>
            <div class="jieshao" v-for="(w, ind) in item.area" :key="ind">
              <span>{{w.model}}</span>/
              <span>{{w.size}}m²</span>/
              <span>{{w.direction}}</span>/
              <span>{{w.name}}</span>
            </div>
            <div class="youshi" v-for="(f, inds) in item.advantage" :key="inds">
              <div class="youshi1" v-if="inds<2">{{f.id}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x"><p class="money">{{item.price}}万</p><p class="money1">{{item.price1}}元/平</p></div>
          </div>
         </div>
      </div>

     </div>
    <!-- 推荐项目开始 -->



    <!-- 底部按钮开始 -->
    <div class="footer">
      <button class="left_foot">
        <div class="Report">收藏</div>
      </button>
      <button  open-type="share" class="right_foot">
        <div class="Telephone">分享</div>
      </button>
    </div>
    <!-- 底部按钮开始 -->



    





 
  
  

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
      newId:"",
      newsModel:null,
      moretjlist:[
        {
        name:'装修网',
        tj_time:'2020-12-6',
        titletj:'深圳房价均价为什么比北京高20%？',
        neirong:'深圳房价均价为什么比北京高深圳房价均价为什么比北京高深圳...',
        img2:'http://vip.yijienet.com/tt/img1.jpg',
        hottj:1800
        }
      ],
      house: [
        { 
          img6:'http://vip.yijienet.com/tt/img1.jpg', title:'城投佳境',
          area: [
            { model:'2室1厅', size:90, direction:'西北', name:'城投佳境'}
          ],
          advantage: [
            { id:'满五年'},
            { id:'满五年'},
            { id:'满五年'}
          ],
          price:555, price1:6500,
        }
      ],

 
 


    }
  },

  onLoad(option) {
    const that = this;
    that.domain=app.globalData.domain;
    that.newId=option.id;
    wx.request({
        url:app.globalData.url +"News/BandNewsInfo" +"?sessionKey=" +app.globalData.sessionKey+'&newId=' + option.id,
        success: function (res) {
          console.log('新闻文章',res)
          that.newsModel = res.data.Context.newsModel
        }
    })
  },
  onShareAppMessage: function(res) {
    return {
      title: "文章页",
      path: "/pages/articledetails/main",
      imageUrl: "",
    };
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
 
.wenzhang{width:90%; margin-top: 5%;  padding-left: 5%; padding-right: 5%;padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.bt_title{ font-size: 38rpx; font-weight: bold;}

.fabu{margin-top:1%; width: 100%; display: flex; flex-direction: row;}
.fabu h1{ font-size:32rpx; margin-top:16rpx; margin-right:1%;}
.fabu span{ font-size:28rpx; color: rgb(165, 165, 165);margin-top:20rpx;}
.articleContent{ margin-top: 50rpx; }

.more_list{width:90%; margin-top: 5%;  padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom: 20rpx #efefef solid; }
.more_list h2{ font-size:38rpx; font-weight: bold;}
.moretj{ margin-top:5%; overflow: hidden; padding-bottom:3%; border-bottom:2rpx rgb(240, 240, 240)solid;}
.moretj .tj_lelf{ float: left; width: 60%;}
.moretj .tj_lelf .sjmz{ font-size: 26rpx; color: #63411d; width: 100%;}
.moretj .tj_lelf h3{ font-size: 33rpx;color: #000; font-weight: bold; margin-top: 3%; }
.moretj .tj_lelf p{ font-size: 26rpx;color: #000; margin-top: 3%; }
.moretj .tj_right{ float: right; width:35%;}
.moretj .tj_right image{ width:100%; height:210rpx; border-radius:6rpx;}
.moretj .tj_right .redu{ color: #b4b4b4; font-size: 26rpx; text-align: right; margin-top: 2%;}



.nr-house{ width:100%;  margin-top:30rpx; overflow: hidden;}
.nr-house image{ float: left; width: 40%; height: 180rpx;}
.nr-house .r_wz{ float:right; width: 57%;}
.nr-house .r_wz .bt_s{font-size: 34rpx; font-weight: bold; margin-right:10rpx;}
.jieshao{ font-size: 26rpx; color: #000; margin-top:10rpx;}
.youshi1{ float: left; width:90rpx; height:40rpx; line-height: 40rpx; border-radius:6rpx; background: #edf0f3; color:#849aae; font-size: 25rpx; text-align: center; margin-top:10rpx; margin-right: 10rpx;}
.m-x{ margin-top: 10rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color: rgb(192, 0, 0); font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:#ccc; margin-top: 10rpx; }


/* 底部按钮 */
.footer{ width:94%;  padding-left: 3%; padding-right: 3%; padding-top: 3%; height: 120rpx; background: #fff;position: fixed;bottom: 0; overflow: hidden;}
.footer button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; background:none; line-height: normal;}
.footer button::after{border: none; padding: 0 !important;}
.left_foot{ float: left; width:44%;height: 120rpx; margin-left: 3%; margin-right: 3%;}
.Report{width:100%; background: #3dc28e; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}

.right_foot{ float: right; width:44%;height: 120rpx; margin-left: 3%; margin-right: 3%;}
.Telephone{width:100%; background: #2e72f1; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}






</style>
