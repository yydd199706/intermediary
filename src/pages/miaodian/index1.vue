

<template>
  <div class="wrap">
    <div class="btn" style=" position: fixed; right: 0; top: 100px;">
      <div v-for="i in letters" :key="i" @click="lett(i)">{{i}}</div>
    </div>
    <scroll-view scroll-y  :scroll-into-view='toView' style="height:50px">
      <div :id="i" v-for="i in letters1" :key="i">{{i}}</div>
    </scroll-view>
  </div>
</template>
   
  
 

<script>
  export default {
    data() {
      return {
        toView: '',

        letters: ['A1', 'B2', 'C3', 'D4', 'E5'],
        letters1: ['A111', 'B222', 'C333', 'D444', 'E555']
      }
    },
    methods: {
      lett(l) {
        this.toView = l
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
