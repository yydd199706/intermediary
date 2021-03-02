<template>
  <div class="indexstyle">
    <!-- 消息开始 -->
    <div class="message">
      <div class="messageList" v-for="(item ,index) in message" :key="index">
        <div class="lelf_m">
          <div class="title">{{item.title}}</div>
          <div class="abstract">{{item.abstract}}</div>
        </div>
        <div class="right_m">{{item.time}}</div>
      </div>
    </div>
    <!-- 消息结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      img1:"/static/images/zx.jpg",
      img2:"/static/images/ewm.jpg",
      img3:"/static/images/lc.jpg",
      message:[
        {title:'房价通知',abstract:'兴安府房价降价低价出售',time:'15：23'},
        {title:'房价降价通知',abstract:'兴安府房价降价低价出售',time:'15：23'}
      ]
 


    }
  },
  methods: {
 
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

/* 消息 */
.message{ width: 100%; margin-top: 20rpx;}
.messageList{ width: 90%; margin-left: 5%; margin-right: 5%; border-bottom: 1px rgb(240, 240, 240) solid; height:105rpx; overflow: hidden; margin-top:20rpx; }
.lelf_m{ float: left;}
.title{ font-size: 30rpx; font-weight: bold;} 
.abstract{ font-size:26rpx; color: rgb(143, 143, 143); margin-top:5rpx;}
.right_m{ float: right; font-size: 24rpx; color: rgb(143, 143, 143);}
 

</style>
