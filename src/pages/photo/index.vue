<template>
  <div class="indexstyle">

    <div class="img_qiehuan">
      <!-- 图片栏目滚动开始 -->
      <scroll-view scroll-x class="top_img">
        <div class="lanmu_s" :class="{'tabbar-bottom':currentTab==index}" v-for="(item, index) in imglist" :key="index" @click="clickTab(index)">{{item.name}}（{{item.num}}）</div>
      </scroll-view>
      <!-- 图片栏目滚动结束 -->

      <!-- 图片内容开始 -->
      <div class="tupian_nr" v-for="(item, index) in tulist" :key="index">
        <swiper class="imgnr" :current="currentTab" @change="changeTab">
          <block v-for="(item, ind) in item.movies" :key="ind">
            <swiper-item>
              <image :src="item.img1" class="slide-image" mode="scaleToFill"/>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <!-- 图片内容结束 -->
    </div>


 
 
  
  

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 0,
      imglist:[
        {name:'样板间',num:'7'},
        {name:'户型图',num:'17'},
        {name:'实景图',num:'6'},
        {name:'小区配套',num:'10'}
      ],
      
      tulist:[
        {
          movies:[
            {img1:'http://vip.yijienet.com/tt/img1.jpg'},
            {img1:'http://vip.yijienet.com/tt/img1.jpg'},
            {img1:'http://vip.yijienet.com/tt/img1.jpg'},
            {img1:'http://vip.yijienet.com/tt/img1.jpg'}        
          ]
        },
        {
          movies:[
            {img1:'http://vip.yijienet.com/tt/img1.jpg'},
            {img1:'http://vip.yijienet.com/tt/img1.jpg'},
            {img1:'http://vip.yijienet.com/tt/img1.jpg'},
            {img1:'http://vip.yijienet.com/tt/img1.jpg'}        
          ]
        }
        
      ]
      
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
.indexstyle{width: 100%; margin: 0 auto; background: #000;}
 
.img_qiehuan{ width: 100%;}
.top_img{width:94%; line-height:84rpx; position: relative; overflow: hidden; white-space: nowrap; margin-right:3%; margin-left:3%; padding-top:4%;  }
.lanmu_s{ color: rgb(187, 187, 187); display: inline-block; margin-right:3%; margin-left:3%; font-size: 30rpx; }
.tabbar-bottom { border-bottom:6rpx rgb(32, 162, 238) solid; color: #fff;}

.tupian_nr{ margin-top: 20%; padding-bottom: 45%; }
.imgnr{ height:600rpx;}
.tupian_nr image{ width: 100%; height: 100%;}


</style>
