<template>
  <div class="indexstyle">

    <!-- 关注开始 -->
    <div class="guanzhu">
       <!-- 上面部分开始 -->
       <div class="gz_lan">
         <!-- 栏目切换 -->
         <div class="qh_l">
           <div :class="{'houses1':tab === 0}" class="buy" @click="fangdj(0)">二手房</div>
           <div :class="{'houses1':tab === 1}" class="buy" @click="fangdj(1)">新房</div>
           <div :class="{'houses1':tab === 2}" class="buy" @click="fangdj(2)">租房</div>
         </div>

       </div>
       <!-- 上面部分结束 -->

       <!-- 下面内容开始 -->
       <div class="gz_list">
         <!-- 二手房内容开始 -->
         <div class="maifang" v-if="tab===0">
           <!-- 关注的房源显示开始 -->
           <div class="fang_list">
              <div class="h-mt" v-for="(item, index) in oldList" :key="index" :data-id="item.id" @click="esfDetail(index,$event)">
                <image :src="domain+item.Imgurl" class="new-image" mode="scaleToFill" />
                <div class="r_wz">
                  <div class="bt_s">{{ item.title}}</div>
                  <div class="jieshao">
                    <span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirloffice}}卫</span>/<span>{{item.area}}m²</span>/
                    <span>{{item.Towardname}}</span>
                  </div>
                  <div class="youshi">
                    <div>{{item.Decorationname}}</div>
                    <div>{{item.Propertyname}}</div>
                  </div>
                  
                  <div class="m-x">
                    <p class="money">{{item.price==""||item.price==null?'总价：暂无':item.price+'万'}}</p>
                    <p class="average">{{item.averageprice==""||item.averageprice==null?'价格待定':item.averageprice+'元/平'}}</p>
                  </div>
                </div>
              </div>
           </div>
           <!-- 关注的房源显示结束 -->
           
         </div>
         <!-- 二手房内容结束 -->

         <!-- 新房内容开始 -->
         <div class="zufang" v-else-if="tab===1">
           <!-- 关注的房源显示开始 -->
           <div class="fang_list">
            <div class="intention-mt" v-for="(item, index) in newList" :key="index" :data-id="item.id" @click="newDetail(index,$event)" >
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
                    <div class="youshi2">{{item.Decorationname==""||item.Decorationname==null?'暂无':item.Decorationname}}</div>
                    <div class="youshi2">{{item.existingname==""||item.existingname==null?'暂无':item.existingname}}</div> 
                  </div>

                  <div class="m-x">
                    <p class="money">{{item.averageprice==""||item.averageprice==null?'价格待定':'均价'+item.averageprice+'元/m²'}}</p>
                  </div>
                </div>
            </div>
           </div>
           <!-- 关注的房源显示结束 -->
         </div>
         <!-- 新房内容开始 -->

         <!-- 租房内容开始 -->
         <div class="xiaoqu" v-else>
           <!-- 关注的房源显示开始 -->
           <div class="fang_list">
              <div class="h-mt" v-for="(item, index) in rentList" :key="index" :data-id="item.id" @click="rentDetail(index,$event)">
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
           <!-- 关注的房源显示结束 -->
         </div>
         <!-- 租房内容开始 -->
       </div>
       <!-- 下面内容结束 -->



    </div>
    <!-- -->
    <div v-if="overHid" class="over">加载完毕~</div>
    <div class="none" v-if="listarr[tab]==0">
      <image :src="img" class="new-image" mode="scaleToFill" />
      <div>您还没有关注的房源~</div>
    </div>
    <!-- 关注结束 -->

  <!-- 没有关注的房源开始 -->
           <!-- <div class="fang_bxs">
             <image :src="img2" />
             <h1></h1>
             <p></p>
           </div> -->
           <!-- 没有关注的房源结束 -->
  
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      domain:null,
      tab:0,
      noneHid:false,
      overHid:false,
      allPage:0,
      pageNumber:1,
      pageRecord:6,
       
      currentimg: 0,
      img:app.globalData.imgurl +"null_data.png",
      oldList:[],
      newList:[],
      rentList:[],
      listarr:[],
  


    }
  },
  onLoad(){
    const that = this;
    that.domain=app.globalData.domain;
    that.pageNumber=1;
    that.overHid=false;
    that.esfList();
  },
  methods: {
    fangdj(index){
      this.tab = index;
    },
    //  djimg(e) {
    //     this.currentimg = e.target.current;
    //   },
    //获取关注列表
    esfList(){
      const that = this;
      wx.request({
        url: app.globalData.url +"Percenter/BandPerFollowList" +"?sessionKey=" +app.globalData.sessionKey,
        method:"POST",
        data: {
          pageNumber:that.pageNumber,
          pageRecord:that.pageRecord
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log('关注',res)
          if(res.data.Code==0){
            that.oldList=res.data.Context.mmcListesf;
            that.newList=res.data.Context.projectList;
            that.rentList=res.data.Context.mmcListrent;
            that.listarr[0]=that.oldList.length;
            that.listarr[1]=that.newList.length;
            that.listarr[2]=that.rentList.length;
          }
          
          // 二手房关注
          // if(res.data.Code==0){
          //   if (res.data.Context.mmcListesf.length > 0) {
          //     that.oldList=res.data.Context.mmcListesf;
          //   }else{
          //     that.noneHid = true;
          //   }
          //   if (res.data.Context.recordcuntEsf == 0) {
          //   } else {
          //     that.allPage = res.data.Context.recordcuntEsf;
          //   }
          // }else if(res.data.Code==1&&that.pageNumber==1){
          //   that.noneHid = true;
          // }else{
          //   that.noneHid = false;
          // }




        }
      });
    },
    //点击跳转二手房详情
    esfDetail:function(index,e){
      wx.navigateTo({ url: "/pages/oldhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
    //点击跳转新房详情
    newDetail:function(index,e){
      wx.navigateTo({ url: "/pages/newhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
    //点击跳转租房详情
    rentDetail:function(index,e){
      wx.navigateTo({ url: "/pages/Rentaldetails/main?id=" + e.mp.currentTarget.dataset.id });
    }



  },

  // 上拉加载，拉到底部触发
  onReachBottom: function() {
    const that = this;
    that.pageNumber = that.pageNumber + 1;
    if (that.pageNumber <= that.allPage) {
      that.esfList();
      that.overHid=false;
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
 

/* .guanzhu{ width: 90%; margin-left: 5%; margin-right: 5%;} */
 .gz_lan{/* margin-top:5%;*/ overflow: hidden;} 
.qh_l{ display: flex; flex-direction: row; width:100%; border-bottom: 1px #e4e4e4 solid; padding-bottom: 16rpx;}
.qh_l .buy{ font-size: 35rpx; font-weight: bold; margin-left:10%; margin-right: 10%; text-align: center; line-height:80rpx;}
.houses1{ font-size: 35rpx !important; border-bottom:4rpx #3072f6 solid; color: #3072f6; font-weight: bold; line-height:80rpx;}

/* 关注的房源显示开始 */
.fang_list{ width:90%; margin-top:40rpx; margin-left: 5%; margin-right: 5%; }
.h-mt {overflow: hidden;margin-bottom:15rpx; margin-bottom:40rpx;}
.h-mt image {
  float: left;
  width: 40%;
  height: 200rpx;
  border-radius: 10rpx;
}
.r_wz {float: right;width: 57%;}
.bt_s{
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
.youshi{overflow:hidden;}
.youshi>div {
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
.m-x p{ float: left;}
.money {
  color: #fa5741;
  font-weight: 900;
  margin-right: 5rpx;
  font-size: 32rpx;
}
.average{color: #A1A1A1;margin-left:10rpx;font-size:26rpx; margin-top:4rpx;}
/* 租房 */
.nr-house{ width:100%;  margin-top:30rpx; padding-bottom: 110rpx;}
.h-mt {overflow: hidden;margin-bottom:15rpx;}
.nr-house image {float: left;width: 40%;height: 200rpx;border-radius: 10rpx;}
.nr-house .r_wz {float: right;width: 57%;}
.bt_s {font-size: 30rpx;font-weight: bold;margin-right: 10rpx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.jieshaot {font-size: 25rpx;color: #333;margin-top: 10rpx;}
.youshi1 {float: left;padding: 0 10rpx;height: 40rpx;line-height: 40rpx;border-radius: 3px;background: #edf0f3;color: #849aae;font-size: 25rpx;text-align: center;margin-top: 10rpx;margin-right: 10rpx;}
.m-x {margin-top: 10rpx;overflow: hidden;}
.m-x p {float: left; font-size: 32rpx;}
.m-x p.money {font-size: 30rpx;color: #fa5741;font-weight: 900;margin-right: 5rpx;}
.money1 {font-size:30rpx;color: #fa5741;font-weight: 900;}
.more-house {width: 94%;height: 70rpx;background: #e8edf3;border-radius: 5px;text-align: center;line-height: 70rpx;font-size: 28rpx;font-weight: bold;margin-left: 3%;margin-right: 3%;margin-top: 30rpx;color: #3072f6;}




/* 新房 */
.intention-mt {
  overflow: hidden;
  margin-bottom: 15rpx;
}
.intention-mt image {
  float: left;
  width: 40%;
  height: 190rpx;
  border-radius: 10rpx;
}
.intention-mt .intention-right {
  float: right;
  width: 57%;
  /* margin-top: 20rpx; */
}
.intention-mt .intention-right .bt_ri {
  overflow: hidden;
}
.intention-mt .intention-right .bt_ri h1 {
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
.proNew{overflow: hidden;margin-left: 3%;margin-right: 3%;margin-top: 20rpx;}
.proNew>div{float: left;width: 66%;font-size: 30rpx;margin-top: 10rpx;}
.proNew>image{float: left;width: 32%;height: 160rpx;margin-right: 2%;border-radius: 10rpx;}

 


/* 没有关注的房源开始 */
.fang_bxs{ width: 100%;margin-top: 15%;}
.fang_bxs image{ width:400rpx; height: 296rpx; margin: 0 auto; display: block;}
.fang_bxs h1{ font-size:34rpx; font-weight: bold; text-align: center; margin-top: 5%;}
.fang_bxs p{ font-size: 30rpx; text-align: center; margin-top: 3%;}



.bj_r{ float: right; width:10%;}
.none{width: 100%;margin-top: 150rpx;text-align: center;}
.none>image{width: 200rpx;height: 200rpx;}
.none>div{font-size: 28rpx;margin-top: 20rpx;color: #A1A1A1;}
.over{font-size: 28rpx;color: #A1A1A1;text-align: center;padding-bottom: 30rpx;}


.moredj{float: right;font-size: 22rpx; }
.moredj image{ width:33rpx; height:37rpx; margin-right:10rpx;}
.moredj span{ position: relative; top: -10rpx;}



</style>
