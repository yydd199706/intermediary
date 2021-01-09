<template>
  <div class="indexstyle">

    <!-- 关注开始 -->
    <div class="guanzhu">
       <!-- 上面部分开始 -->
       <div class="gz_lan">
         <!-- 左边栏目切换 -->
         <div class="qh_l">
           <div :class="{'houses1':tab === 1}" class="buy" @click="fangdj(1)">买房</div>
           <div :class="{'houses1':tab === 2}" class="buy" @click="fangdj(2)">租房</div>
           <div :class="{'houses1':tab === 3}" class="buy" @click="fangdj(3)">小区</div>
         </div>
         <!-- 右边编辑 -->
         <div class="bj_r">编辑</div>
       </div>
       <!-- 上面部分结束 -->

       <!-- 下面内容开始 -->
       <div class="gz_list">
         <!-- 买房内容开始 -->
         <div class="maifang" v-if="tab===1">
           <!-- 关注的房源显示开始 -->
           <div class="fang_list">

             <div class="xiangmu" v-for="(item, index) in xmxslist" :key="index">
                <!-- 图片轮播 -->
                <div class="lunbo">
                  <swiper class="swiper" @change="djimg">
                    <block v-for="(item, ind) in item.movies" :key="ind">
                      <swiper-item>
                        <image :src="item.img1" class="slide-image" mode="scaleToFill"/>
                      </swiper-item>
                    </block>
                  </swiper>
                  <div class="imageCount">{{currentimg+1}}/{{item.movies.length}}</div>
                </div>
                <!-- 图片轮播 -->
                <!-- 关注开始 -->
                <div class="focuson">
                  <button class="fanniu"  >
                    <image :src="item.img3" /> 
                    <span>{{num}}</span>关注
                  </button>
                </div> 
                <!-- 关注结束 -->
                <!-- 项目介绍开始 -->
                <div class="xm_introduce">
                  <h3><span>{{item.title}}</span><span>{{item.size}}</span></h3>
                  <div class="fxs">
                    <span>{{item.square}}m²</span>|
                    <span>{{item.direction}}</span>|
                    <span>{{item.web}}</span>
                  </div>
                  <div class="xm_money">{{item.money}}元/月</div>
                </div>
                <!-- 项目介绍结束 -->
             </div>
             
           </div>
           <!-- 关注的房源显示结束 -->
           <!-- 没有关注的房源开始 -->
           <div class="fang_bxs">
             <image :src="img2" />
             <h1>您还没有关注的房源</h1>
             <p>关注之后能获得更多的房源动态信息</p>
           </div>
           <!-- 没有关注的房源结束 -->
         </div>
         <!-- 买房内容结束 -->

         <!-- 租房内容开始 -->
         <div class="zufang" v-else-if="tab===2">
           <!-- 关注的房源显示开始 -->
           <div class="fang_list">

             <div class="xiangmu" v-for="(item, index) in xmxslist" :key="index">
                <!-- 图片轮播 -->
                <div class="lunbo">
                  <swiper class="swiper" @change="djimg">
                    <block v-for="(item, ind) in item.movies" :key="ind">
                      <swiper-item>
                        <image :src="item.img1" class="slide-image" mode="scaleToFill"/>
                      </swiper-item>
                    </block>
                  </swiper>
                  <div class="imageCount">{{currentimg+1}}/{{item.movies.length}}</div>
                </div>
                <!-- 图片轮播 -->
                <!-- 关注开始 -->
                <div class="focuson">
                  <button class="fanniu"  >
                    <image :src="item.img3" /> 
                    <span>{{num}}</span>关注
                  </button>
                </div> 
                <!-- 关注结束 -->
                <!-- 项目介绍开始 -->
                <div class="xm_introduce">
                  <h3><span>{{item.title}}</span><span>{{item.size}}</span></h3>
                  <div class="fxs">
                    <span>{{item.square}}m²</span>|
                    <span>{{item.direction}}</span>|
                    <span>{{item.web}}</span>
                  </div>
                  <div class="xm_money">{{item.money}}元/月</div>
                </div>
                <!-- 项目介绍结束 -->
             </div>
             
           </div>
           <!-- 关注的房源显示结束 -->
         </div>
         <!-- 租房内容开始 -->

         <!-- 小区内容开始 -->
         <div class="xiaoqu" v-else>
           <!-- 关注的房源显示开始 -->
           <div class="fang_list">

             <div class="xiangmu" v-for="(item, index) in xmxslist" :key="index">
                <!-- 图片轮播 -->
                <div class="lunbo">
                  <swiper class="swiper" @change="djimg">
                    <block v-for="(item, ind) in item.movies" :key="ind">
                      <swiper-item>
                        <image :src="item.img1" class="slide-image" mode="scaleToFill"/>
                      </swiper-item>
                    </block>
                  </swiper>
                  <div class="imageCount">{{currentimg+1}}/{{item.movies.length}}</div>
                </div>
                <!-- 图片轮播 -->
                <!-- 关注开始 -->
                <div class="focuson">
                  <button class="fanniu"  >
                    <image :src="item.img3" /> 
                    <span>{{num}}</span>关注
                  </button>
                </div> 
                <!-- 关注结束 -->
                <!-- 项目介绍开始 -->
                <div class="xm_introduce">
                  <h3><span>{{item.title}}</span><span>{{item.size}}</span></h3>
                  <div class="fxs">
                    <span>{{item.square}}m²</span>|
                    <span>{{item.direction}}</span>|
                    <span>{{item.web}}</span>
                  </div>
                  <div class="xm_money">{{item.money}}元/月</div>
                </div>
                <!-- 项目介绍结束 -->
             </div>
             
           </div>
           <!-- 关注的房源显示结束 -->
         </div>
         <!-- 小区内容开始 -->
       </div>
       <!-- 下面内容结束 -->



    </div>
    <!-- 关注结束 -->

  
  
  

  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 1,
      currentimg: 0,
      img2:"/static/images/gz.jpg",
      xmxslist: [
        {
          movies:[
            {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
            {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
            {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
            {img1: 'http://vip.yijienet.com/tt/img1.jpg'}
          ],
          img3:"/static/images/xin.png",
          num:5,
          title:'整租▪兴安府',
          size:'2室1厅1卫',
          square:90,
          direction:'南北',
          web:'链家',
          money:5600
        }
      ]
  


    }
  },
  methods: {
   fangdj(index){
     this.tab = index;
   },
   djimg(e) {
      this.currentimg = e.target.current;
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
 

.guanzhu{ width: 90%; margin-left: 5%; margin-right: 5%;}
.gz_lan{ margin-top:5%; overflow: hidden;}
.qh_l{ float: left; display: flex; flex-direction: row; width:90%;}
.qh_l .buy{ font-size: 32rpx; font-weight: bold; margin-right:10%; line-height:65rpx;}
.houses1{ font-size: 40rpx !important; border-bottom:4rpx rgb(43, 186, 243) solid; line-height:45rpx;}

/* 关注的房源显示开始 */
.fang_list{ width: 100%; margin-top:5%;}
.xiangmu{ margin-top: 3%; width: 100%; background:#fff;box-shadow: 1px 1px 5px #e6e6e6; border-radius:2%; margin-bottom: 5%;}
.lunbo{ width: 100%; height:300rpx;}
.swiper{ width: 100%; height: 100%;}
.lunbo image{ width: 100%; height: 100%; border-radius:2%;}
.imageCount {width:90rpx; height:45rpx; background-color: rgba(0, 0, 0, 0.4); border-radius:40rpx; line-height:50rpx; color:#fff; text-align:center; font-size:24rpx; position:relative; left:82%; bottom:60rpx;}
/* 关注开始 */
.focuson{ color: #000; position: absolute; top:13%; right:7%; border-radius:8rpx;background: #fff; }
.focuson button{ width:120rpx; height:50rpx; padding: 0; line-height:50rpx; font-size: 28rpx;}
.focuson button::after{border: none;}
.fanniu image{ width:30rpx; height:30rpx; margin-right: 5%; position: relative; top:3%;}
/* 项目介绍开始 */
.xm_introduce{ width:92%; margin-left:4%; margin-right:4%; margin-top:3%; padding-bottom:5%;}
.xm_introduce h3{ font-size: 32rpx; font-weight: bold;}
.xm_introduce h3 span{ margin-right: 3%;}
.fxs{ font-size: 26rpx !important; margin-top:1%; }
.fxs span{ margin-right: 3%;}
.xm_money{ font-size: 32rpx; color:#fa5741; margin-top:2%; font-weight: bold;}



/* 没有关注的房源开始 */
.fang_bxs{ width: 100%;margin-top: 15%;}
.fang_bxs image{ width:400rpx; height: 296rpx; margin: 0 auto; display: block;}
.fang_bxs h1{ font-size:34rpx; font-weight: bold; text-align: center; margin-top: 5%;}
.fang_bxs p{ font-size: 30rpx; text-align: center; margin-top: 3%;}



.bj_r{ float: right; width:10%;}




 

</style>
