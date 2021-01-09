<template>
  <div class="indexstyle">

    <!-- 图片轮播 -->
    <div class="lunbo">
      <swiper class="swiper" @change="djimg" >
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="item.img1" class="slide-image" mode="scaleToFill"/>
          </swiper-item>
        </block>
      </swiper>
      <div class="imageCount">{{current+1}}/{{movies.length}}</div>
    </div>
    <!-- 图片轮播 -->

    <!-- 小区名称开始 -->
    <div class="community">
      <div class="lelf_c">
         <h1>{{title}}</h1>
         <p>{{dizhi}}</p>
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
        <p>建筑类型：<span>{{construction}}</span></p>
        <p>建筑年代：<span>{{years}}</span></p>
        <p>楼栋总数：<span>{{storiedBuilding}}</span></p>
        <p>房屋总数：<span>{{housing}}</span></p>
        <p>车位数：<span>{{parkingSpace}}</span></p>
        <p>车位配比：<span>{{ratio}}</span></p>
        <p>停车费：<span>{{parkingfei}}</span></p>
        <p>物业公司：<span>{{propertygs}}</span></p>
        <p>物业费用：<span>{{wycost}}</span></p>
        <p>开发商：<span>{{developers}}</span></p>
        <p>小区别名：<span>{{communityAlias}}</span></p>
      </div>
      
    </div>
    <!-- 小区简介结束 -->

    <!-- 小区房源开始 -->
    <div class="fangyuan">
      <div class="hx_bt1">
        <p>同小区房源</p>
        <span>查看更多</span>
      </div>
      <div class="fangyuan_list">
          <scroll-view scroll-x="true" style="width: 100%" class="image-group">
            <div class="fang_list" v-for="(item, fy) in fangyuan" :key="fy">
              <image :src="item.img11" class="slide-image" />
              <h3><span>{{item.fangy1}}</span>/<span>{{item.fangy2}}m²</span>/<span>{{item.fangy3}}</span></h3>
              <p><span class="dj1">{{item.fangy4}}万元</span><span class="dj2">{{item.fangy5}}元/平</span></p>
            </div>
          </scroll-view>
      </div>
    </div>
    <!-- 小区房源结束 -->







   
  

  </div>
</template>

<script>
export default {
  data () {
    xianshi:false;
    return {
      movies: [
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'}
      ],
      current: 0,
      title:"兴安府",
      dizhi:"翠屏路和欢喜岭路交汇处",
      img2:"/static/images/tx.png",
      img3:"/static/images/gz.png",
      img4:"/static/images/xin.png",
      gzxianshi:0,
      construction:"板楼",
      years:"2012~2020年",
      storiedBuilding:"5栋",
      housing:"508户",
      parkingSpace:560,
      ratio:"1:1.2",
      parkingfei:550,
      propertygs:"",
      wycost:"1.14元/平米/月",
      developers:"",
      communityAlias:"兴安府",
      fangyuan:[
        {img11:'http://vip.yijienet.com/tt/img1.jpg',fangy1:'2室一厅',fangy2:80.5,fangy3:'北',fangy4:130,fangy5:6500.5},
        {img11:'http://vip.yijienet.com/tt/img1.jpg',fangy1:'2室一厅',fangy2:80.5,fangy3:'北',fangy4:130,fangy5:6500.5},
        {img11:'http://vip.yijienet.com/tt/img1.jpg',fangy1:'2室一厅',fangy2:80.5,fangy3:'北',fangy4:130,fangy5:6500.5}
      ],

 
 


    }
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
 

 
  }
 


 

   

}
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
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
.community{ width: 90%; padding-left: 5%; padding-right: 5%; overflow: hidden; padding-top: 5%;border-bottom: 10px #efefef solid; height:140rpx;}
.lelf_c{ float: left;}
.lelf_c h1{ font-size: 36rpx; font-weight: bold; margin-bottom: 5%;}
.lelf_c p{ font-size: 26rpx; color: #999999;}
.right_c{ float: right; width:35%;}
.right_c div{ display: flex; flex-direction: row; width: 100%;}
.tixing{ margin-right: 3%; width:50%; }
.tixing image{ width: 36rpx; height: 41rpx;}
.tixing p{ font-size: 26rpx; position: relative; top: -40rpx;}
.right_c button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; width:120rpx; }
.right_c button::after{border: none; padding: 0 !important; background: none !important;}

.guanzhu{ margin-right: 3%; width:100%;}
.guanzhu image{ width:40rpx; height:40rpx;}
.guanzhu p{ font-size: 28rpx; position: relative; top: -40rpx;}
.ygz{ position: relative; }

/* 小区简介开始 */
.jianjie{ width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:7%;border-bottom: 10px #efefef solid; }
.jianjie h3{ font-size:40rpx; font-weight: bold; padding-bottom:3%; border-bottom: 1px rgb(233, 233, 233) solid;}
.jianjie div{ margin-top: 4%;}
.jianjie div p{ line-height:65rpx; color: #999999;}
.jianjie div p span{ color: #000;}
.wzjj{ margin-top: 5%; width:330rpx; height:85rpx; line-height:85rpx; margin-bottom: 5%; font-size:30rpx;}

/* 小区房源开始 */
.fangyuan{ width: 90%; padding-left: 5%; padding-right: 5%; overflow: hidden; padding-top: 5%; margin-bottom: 5%;}
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
