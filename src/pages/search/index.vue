<template>
  <div class="indexstyle">
    <!-- 搜索开始 -->
    <div class="sousuo">
      <input type="text" placeholder="请输入楼盘名或区域" placeholder-style="font-size:14px; padding-left:35px;">
      <image :src="img2" mode="scaleToFill"/>
    </div>
    <!-- 搜索结束 -->

    <!-- 热门搜索开始 -->
    <div class="hotsousuo">
      <h1>热门搜索</h1>
      <div class="ssci" v-for="(item, index) in search" :key="index">
        <div class="xmss"><p>{{item.title}}</p><span><image :src="item.img1" /></span></div>
      </div>
    </div>
    <!-- 热门搜索结束 -->
 
 
 

  
  </div>
</template>

<script>
 
  export default {
 
    data() {
      return {
        img2: "/static/images/ss.png",
        search:[
          {title:'天一城市之光',img1: "/static/images/sshot.png"},
          {title:'兴安府',img1: "/static/images/sshot.png"},
          {title:'天一城市之光',img1: "/static/images/sshot.png"},
          {title:'天一城市之光'},
          {title:'天一城市之光'}
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
.fl{ float: left;}
.fr{ float: right;}
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}

/* 搜索 */
.sousuo{ width: 90%;  margin: 0 auto; margin-left: 5%; }
.sousuo input{ height:80rpx; line-height:80rpx; width:100%; border-radius:60rpx; margin: 0 auto; background: #f2f2f2;  }
.sousuo image{ width:40rpx; height:40rpx; position: absolute; top:1.5%; left:8%; }
 
.hotsousuo{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:6%; }
.hotsousuo h1{ font-size: 40rpx; font-weight: bold;}
.ssci{ margin-top:1%; width: 100%; }
.xmss{ margin-top:6%; padding-left:5%; padding-right:10%;float: left; display: flex; flex-direction: row; }
.xmss p{ font-size:31rpx;  }
.xmss image{ width: 24rpx; height:30rpx; position: relative; left:15rpx; }

</style>
