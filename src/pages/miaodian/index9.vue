<template>
  <div class="indexstyle">

<!-- <div class="body">
  <div class="nav bc_white">
    <div :class="[selected?'red':'default']" @blur="selected">待付款</div>
    <div :class="[selected1?'red':'default']" @blur="selected1">待发货</div>
    <div :class="[selected2?'red':'default']" @blur="selected2">待收货</div>
    <div :class="[selected3?'red':'default']" @blur="selected3">待评价</div>
    <div :class="[selected4?'red':'default']" @blur="selected4">退换货</div>
  </div>
  <div :class="[selected?'show':'hidden']">for system</div>
  <div :class="[selected1?'show':'hidden']">for activity1</div>
  <div :class="[selected2?'show':'hidden']">for activity2</div>
  <div :class="[selected3?'show':'hidden']">for activity3</div>
  <div :class="[selected4?'show':'hidden']">for activity4</div>
</div> -->

<div class="anniu">
    <scroll-view scroll-x class="top_jj">
        <div :class="{'selected':tab === 1,'title':true}" class="jj_default" @click="changTab(1)">
          <div v-if="tab===1"><image :src="img2" class="slide-image" mode="scaleToFill"/></div>
          <div v-else><image :src="img1" class="slide-image" mode="scaleToFill"/></div>
          <p>核心卖点</p>
        </div>
        <div :class="{'selected':tab === 2,'title':true}" class="jj_default" @click="changTab(2)">
          <div v-if="tab===2"><image :src="img4" class="slide-image" mode="scaleToFill"/></div>
          <div v-else><image :src="img3" class="slide-image" mode="scaleToFill"/></div>
          <p>小区介绍</p>
        </div>
        <div :class="{'selected':tab === 3,'title':true}" class="jj_default" @click="changTab(3)">
          <div v-if="tab===3"><image :src="img6" class="slide-image" mode="scaleToFill"/></div>
          <div v-else><image :src="img5" class="slide-image" mode="scaleToFill"/></div>
          <p>适宜人群</p>
        </div>
        <div :class="{'selected':tab === 4,'title':true}" class="jj_default" @click="changTab(4)">
          <div v-if="tab===4"><image :src="img8" class="slide-image" mode="scaleToFill"/></div>
          <div v-else><image :src="img7" class="slide-image" mode="scaleToFill"/></div>
          <p>周边配套</p>
        </div>
        <div :class="{'selected':tab === 5,'title':true}" class="jj_default" @click="changTab(5)">
          <div v-if="tab===5"><image :src="img10" class="slide-image" mode="scaleToFill"/></div>
          <div v-else><image :src="img9" class="slide-image" mode="scaleToFill"/></div>
          <p>费用介绍</p>
        </div>
        <div :class="{'selected':tab === 6,'title':true}" class="jj_default" @click="changTab(6)">
          <div v-if="tab===6"><image :src="img12" class="slide-image" mode="scaleToFill"/></div>
          <div v-else><image :src="img11" class="slide-image" mode="scaleToFill"/></div>
          <p>交通出行</p>
        </div>
    </scroll-view>

    <div class="diakuand1">
      <div class="neir" v-if="tab===1">11</div>
      <div class="neir" v-else-if="tab===2">22</div>
      <div class="neir" v-else-if="tab===3">33</div>
      <div class="neir" v-else-if="tab===4">44</div>
      <div class="neir" v-else-if="tab===5">55</div>
      <div class="neir" v-else>66</div>
    </div>
    
</div>
 
    
 

  </div>
</template>

<script>
export default {
  data () {
     return {
       tab: 1,
       bai:0,
       img1:"/static/images/an1.png",
       img2:"/static/images/an1s.png",
       img3:"/static/images/an2.png",
       img4:"/static/images/an2s.png",
       img5:"/static/images/an3.png",
       img6:"/static/images/an3s.png",
       img7:"/static/images/an4.png",
       img8:"/static/images/an4s.png",
       img9:"/static/images/an5.png",
       img10:"/static/images/an5s.png",
       img11:"/static/images/an6.png",
       img12:"/static/images/an6s.png",
     // selected: true,
    // selected1: false,
    // selected2:false,
    // selected3:false,
    // selected4: false

 
     }
  },
  methods:{
    changTab(index) {
        this.tab = index;
      },
     //点击切换
  // selected: function (e) {
  //   this.setData({
  //     selected1: false,
  //     selected2: false,
  //     selected3: false,
  //     selected4: false,
  //     selected: true
  //   })
  // },
  // selected1: function (e) {
  //   this.setData({
  //     selected: false,
  //     selected2: false,
  //     selected3: false,
  //     selected4: false,
  //     selected1: true
  //   })
  // },
  // selected2: function (e) {
  //   this.setData({
  //     selected: false,
  //     selected2: true,
  //     selected3: false,
  //     selected4: false,
  //     selected1: false
  //   })
  // },
  // selected3: function (e) {
  //   this.setData({
  //     selected: false,
  //     selected2: false,
  //     selected3: true,
  //     selected4: false,
  //     selected1: false
  //   })
  // },
  // selected4: function (e) {
  //   this.setData({
  //     selected: false,
  //     selected2: false,
  //     selected3: false,
  //     selected4: true,
  //     selected1: false
  //   })
  // }, 
    
 

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
 

.anniu{ width: 100%; margin-top:20rpx;}
.top_jj{width: 100%; line-height:84rpx;white-space: nowrap;position: relative;background: #fff; overflow: hidden; }
.jj_default{ width:180rpx; height:160rpx; background: rgb(231, 231, 231);color: #000; display: inline-block; margin-right:20rpx; border-radius:10rpx;}
.jj_default image{width:50rpx; height:50rpx; margin: 0 auto; display: block; margin-top:18%;}
.jj_default p{font-size:26rpx; line-height:60rpx; text-align: center;}
.selected { width:180rpx; height:160rpx; background:#2e72f1;color: #fff;}
.diakuand1{ margin-top: 20rpx;}
</style>
