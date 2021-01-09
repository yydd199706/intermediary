<template>
  <div class="indexstyle">

      <!-- 图片栏目滚动开始 -->
      <scroll-view class="tui-city-scroll" scroll-x="true" :scroll-into-view="status" scroll-with-animation="true">
        <text @click="getStatus" id="index" :class="{'tui-nav-li':index === status}" data-index="index" v-for="(item, index) in navList" :key="index" >{{item}}</text>
      </scroll-view>
      <!-- 图片栏目滚动结束 -->

      <!-- 图片内容开始 -->
      <div class="tui-fixed-y">
      <scroll-view class="tui-city-scroll-y" style="height:100%" scroll-y="true" :scroll-into-view="status" scroll-with-animation="true">
        <div v-for="(item, index) in navList" :key="index" >
          <div id="index" class="tui-list-head">{{item}}</div>
          <div class="tui-list-li">{{item}} 列表 {{index}}</div>
        </div>
      </scroll-view>
    </div>
      <!-- 图片内容结束 -->
   
  

  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: ['今日特惠', '烟灶推荐', '净水饮水推荐', '洗碗机推荐', '电热推荐', '燃热推荐', '消毒柜推荐', '嵌入式推荐', '商用电器', '活动说明'],
       
   
 


    }
  },
 

methods:{
  getStatus(e){
    this.setData({ status: e.currentTarget.dataset.index})
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
 
.tui-fixed-x{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.tui-city-scroll{
  height: 220rpx;
  line-height: 80rpx;
  width: 100%;
  white-space: nowrap;
}
.tui-city-scroll text{
  height: 120rpx;
  line-height: 80rpx;
  width: 100%;
  white-space: nowrap;
}
.tui-nav-li{
  font-size: 33rpx;
  padding: 0 10rpx;
}
.tui-nav-li:first-child{padding-left: 16rpx;}
.tui-nav-li:last-child{padding-right: 16rpx;}
.tui-nav-active{
  color: red;
  border-bottom: 3rpx solid red;
}
.tui-fixed-y{
  width: 100%;
  height: calc(100% - 80rpx);
  position: fixed;
  bottom: 0;
  left: 0;
}
.tui-city-scroll-y{
  padding: 0 20rpx;
  height: 100%;
  box-sizing: border-box;
}
.tui-list-head{
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 30rpx;
  color: blue;
}
.tui-list-li{
  height: 400px;
  padding: 10rpx;
  color: #fff;
  font-size: 50rpx;
  background-color: #2EB3FF;
}


</style>
