<template>
  <div class="indexstyle">
  
   <!-- 栏目切换开始 -->
   <div class="liulan">
      <div :class="{'houses1':tab === 0}" class="ll_top" @click="lldj(0)">二手房</div>
      <div :class="{'houses1':tab === 1}" class="ll_top" @click="lldj(1)">租房</div>
   </div>
   <!-- 栏目切换结束 -->
   <div class="ll_xmnr">
     
     <!-- 二手房开始 -->
     <div class="secondary" v-if="tab===0">
       <div class="esf-house">
        <div class="h-mt" v-for="(item, index) in oldBrowse" :key="index" @click="oldDetail(index,$event)" :data-id="item.id">
          <image v-if="domain" :src="domain+item.Imgurl" class="new-image" mode="scaleToFill" />
          <div class="r_wz">
            <div class="bt_s">{{ item.title}}</div>
            <div class="jieshao">
              <span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirloffice}}卫</span>/<span>{{item.area}}m²</span>/
              <span>{{item.Towardname}}</span>
            </div>
            <div class="youshi">
              <div class="youshi1">{{item.Decorationname}}</div>
              <div class="youshi1">{{item.Propertyname}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x">
              <p class="money">{{item.price==""||item.price==null?'总价：暂无':item.price+'万'}}</p>
              <p class="average">{{item.averageprice==""||item.averageprice==null?'价格待定':item.averageprice+'元/平'}}</p>
            </div>
          </div>
        </div>
      </div>
     </div>
     <!-- 二手房结束 -->



     <!-- 租房开始 -->
     <div class="Renthouse" v-else>
       <div class="nr-house">
        <div class="h-mt" v-for="(item, index) in rentBrowse" :key="index" @click="rentDetail(index,$event)" :data-id="item.id">
          <image v-if="domain" :src="domain+item.Imgurl" class="new-image" mode="scaleToFill" />
          <div class="r_wz">
            <div class="bt_s">{{item.title}}</div>
            <div class="jieshaot">
              <span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirloffice}}卫</span>/<span>{{item.area}}m²</span>/
              <span>{{item.Towardname}}</span>
            </div>
            <div class="youshi">
              <div class="youshi1">{{item.Decorationname}}</div>
              <div class="youshi1">{{item.Propertyname}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x">
              <p class="money">{{item.rent==""||item.rent==null?'价格待定':item.rent+'元/月'}}</p>
            </div>
          </div>
        </div>
      </div>
     </div>
     <!-- 租房结束 -->

   </div>

   <div class="none" v-if="arrList[tab]==0">
      <image :src="img" class="new-image" mode="scaleToFill" />
      <div>您还没有发布的房源~</div>
   </div>

  
  
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      tab:0,
      oldBrowse:[],
      rentBrowse:[],
      newList:[],
      domain:null,
      img:app.globalData.imgurl +"null_data.png",
      yigz:0,
      pageNumber:1,
      pageRecord:5,
      noneHid:false,
      overHid:false,
      allPage:0,
      arrList:[],
       



    }
  },
  onLoad(){
    const that = this;
    that.domain=app.globalData.domain;
    that.pageNumber=1;
    that.noneHid=false;
    that.overHid=false;
    that.esfList();


  },

  methods: {
    lldj(index){
      this.tab = index;
    },
    guanzhudj(){
      if(this.yigz==1){
        this.yigz=0
      }else{
        this.yigz=1
      }
    },


  //获取发布记录列表
  esfList(){
    const that = this;
      wx.request({
      url: app.globalData.url +"Percenter/BandPerReleaseList" +"?sessionKey=" +app.globalData.sessionKey,
      method:"POST",
      data: {
        pageNumber:that.pageNumber,
        pageRecord:that.pageRecord
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log("ssss",res.data.Context.rentList)
        if (res.data.Context.esfList.length > 0||res.data.Context.rentList.length > 0) {
          that.oldBrowse = res.data.Context.esfList;
          that.rentBrowse = res.data.Context.rentList;
        } else {
          that.oldBrowse=[];
          that.rentBrowse=[];
          that.noneHid = true;
        }
        if (res.data.Context.recordCountEsf == 0||res.data.Context.recordCountRent == 0) {
        } else {
          that.allPage = res.data.Context.recordCountEsf;
          that.allPage = res.data.Context.recordCountRent;
        }

        that.oldBrowse = res.data.Context.esfList;
        that.rentBrowse = res.data.Context.rentList;
        that.arrList[0] = that.oldBrowse;
        that.arrList[1] = that.rentBrowse

        // 二手房
        // if (res.data.Context.esfList.length > 0) {
        //   that.oldBrowse = res.data.Context.esfList;
        // } else {
        //   that.oldBrowse=[];
        //   that.noneHid = true;
        // }
        // if (res.data.Context.recordCountEsf == 0) {
        // } else {
        //   that.allPage = res.data.Context.recordCountEsf;
        // }

        // 租房
        // if (res.data.Context.rentList.length > 0) {
        //   that.rentBrowse = res.data.Context.rentList;
        // } else {
        //   that.rentBrowse=[];
        //   that.noneHid = true;
        // }
        // if (res.data.Context.recordCountRent == 0) {
        // } else {
        //   that.allPage = res.data.Context.recordCountRent;
        // }




        }
      });
  },

  //点击跳转二手房详情
  oldDetail:function(index,e){
    wx.navigateTo({ url: "/pages/oldhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
  },
  rentDetail:function(index,e){
    wx.navigateTo({ url: "/pages/Rentaldetails/main?id=" + e.mp.currentTarget.dataset.id });
  },

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
 

.liulan{ display: flex; flex-direction: row; width:55%; padding-left:25%; padding-right:20%; padding-bottom: 3%; border-bottom:2rpx #f0f0f0 solid;}
 .liulan .ll_top{ font-size: 35rpx; line-height:65rpx; /*width:30%;*/ margin-left:10%; margin-right:10%; text-align: center;} 
.houses1{ border-bottom:4rpx #3072f6 solid; color:#3072f6; font-weight: bold; }

/* 二手房开始 */
.secondary{ width:100%; }
 
.esf-house{width:90%; padding-left: 5%; padding-right: 5%;  margin-top:30rpx; }
.esf-house .h-mt {overflow: hidden;margin-bottom:15rpx;}
.esf-house image {float: left;width: 40%;height: 200rpx;border-radius: 10rpx;}
.esf-house .r_wz {float: right;width: 57%;}
.esf-house .bt_s {font-size: 30rpx;font-weight: bold;margin-right: 10rpx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.esf-house .jieshao {font-size: 25rpx;color: #333;margin-top: 10rpx;}
.esf-house .youshi1 {float: left;padding: 0 10rpx;height: 40rpx;line-height: 40rpx;border-radius: 3px;background: #edf0f3;color: #849aae;font-size: 25rpx;text-align: center;margin-top: 10rpx;margin-right: 10rpx;}
.esf-house .m-x {margin-top: 10rpx;overflow: hidden;}
.esf-house .m-x p {float: left; font-size: 30rpx;}
.esf-house .m-x p.money {font-size: 30rpx;color: #fa5741;font-weight: 900;margin-right: 5rpx;}
.esf-house .money1 {font-size:30rpx;color: #fa5741;font-weight: 900;}
.esf-house .more-house {width: 94%;height: 70rpx;background: #e8edf3;border-radius: 5px;text-align: center;line-height: 70rpx;font-size: 28rpx;font-weight: bold;margin-left: 3%;margin-right: 3%;margin-top: 30rpx;color: #3072f6;}


/* 租房 */
.nr-house{width:90%; padding-left: 5%; padding-right: 5%;  margin-top:30rpx; }
.nr-house .h-mt {overflow: hidden;margin-bottom:15rpx;}
.nr-house image {float: left;width: 40%;height: 200rpx;border-radius: 10rpx;}
.nr-house .r_wz {float: right;width: 57%;}
.nr-house .bt_s {font-size: 30rpx;font-weight: bold;margin-right: 10rpx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.nr-house .jieshaot {font-size: 25rpx;color: #333;margin-top: 10rpx;}
.nr-house .youshi1 {float: left;padding: 0 10rpx;height: 40rpx;line-height: 40rpx;border-radius: 3px;background: #edf0f3;color: #849aae;font-size: 25rpx;text-align: center;margin-top: 10rpx;margin-right: 10rpx;}
.nr-house .m-x {margin-top: 10rpx;overflow: hidden;}
.nr-house .m-x p {float: left; font-size: 32rpx;}
.nr-house .m-x p.money {font-size: 30rpx;color: #fa5741;font-weight: 900;margin-right: 5rpx;}
.nr-house .money1 {font-size:30rpx;color: #fa5741;font-weight: 900;}
.nr-house .more-house {width: 94%;height: 70rpx;background: #e8edf3;border-radius: 5px;text-align: center;line-height: 70rpx;font-size: 28rpx;font-weight: bold;margin-left: 3%;margin-right: 3%;margin-top: 30rpx;color: #3072f6;}




 
.none{width: 100%;margin-top: 150rpx;text-align: center;}
.none>image{width: 200rpx;height: 200rpx;}
.none>div{font-size: 28rpx;margin-top: 20rpx;color: #A1A1A1;}
.over{font-size: 28rpx;color: #A1A1A1;text-align: center;padding-bottom: 30rpx;}
</style>
