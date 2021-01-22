<template>
  <div class="indexstyle">

    <!-- 客户信息开始 -->
    <div class="user">
      <button class="kehuxx" open-type="getUserInfo" @getUserInfo="authSetUser">
        <image :src="img1" />
        <span>{{title}}</span>
      </button>
    </div>
    <!-- 客户信息结束 -->

    <div class="anniu_h">
      <button class="l_xiaoxi">
        <image :src="img2" /> 
        <p>消息</p>
      </button>

      <button class="l_xiaoxi">
        <image :src="img3" /> 
        <p>关注</p>
      </button>

      <button class="l_xiaoxi">
        <image :src="img4" /> 
        <p>收藏</p>
      </button>
    </div>


    <div class="anniu2">

      <button class="liulan1">
        <div class="wzan_lelf">
          <image :src="img5" />
          <span>浏览记录</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1">
        <div class="wzan_lelf">
          <image :src="img7" />
          <span>关注服务号</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1">
        <div class="wzan_lelf">
          <image :src="img8" />
          <span>客服电话</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>

      <button class="liulan1">
        <div class="wzan_lelf">
          <image :src="img9" />
          <span>关于我们</span>
        </div>
        <div class="jt_right"><image :src="img6" /></div>
      </button>


    </div>
 
 
  
  

  </div>
</template>

<script>
export default {
  data () {
    xianshi:false;
    return {
      img1:'http://vip.yijienet.com/tt/img1.jpg',
      title:'请登录',
      img2:'/static/images/xx.png',
      img3:'/static/images/gz2.png',
      img4:'/static/images/gz1.png',
      img5:'/static/images/ll.png',
      img6:'/static/images/jt1.jpg',
      img7:'/static/images/guan.png',
      img8:'/static/images/dh1.png',
      img9:'/static/images/gy.png',
 
 


    }
  },

  methods:{
    authSetUser(res){
      console.log(res);

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
 

.user{width:100%;margin: 0 auto;overflow: hidden; box-sizing: border-box;height:310rpx;background-image: linear-gradient(to right, #14affd, #016dfe); }
.kehuxx{ width:100%; padding-left: 5%; padding-right: 5%; overflow: hidden; padding-top:6%; }
.kehuxx image{ float: left; width: 120rpx; height: 120rpx; border-radius: 50%; margin-right: 5%;} 
.kehuxx span{ float: left; font-size:42rpx; margin-top:2%; color: #fff;}
.user button{ color: #fff;border-radius:0; font-size: 28rpx; background: none;}
.user button::after{border: none;}


 
/* .anniu_h{width:82%; margin-left: 5%; margin-right: 5%; padding-left:3%; padding-right: 5%; margin-top:7%; padding-bottom:6%;  border-bottom: 10px #ececec solid; overflow: hidden; position: relative; top: -30rpx;  } */
.anniu_h{ width: 90%; margin-left: 5%; margin-right: 5%; padding-top: 30rpx; padding-bottom: 30rpx; position: absolute; top:220rpx; z-index: 999; background: #fff !important; border-radius: 30rpx;}

.anniu_h .l_xiaoxi{ float: left; width:33.3%;  }
.anniu_h .l_xiaoxi image{ width: 60rpx; height: 60rpx; margin: 0 auto; display: block;}
.anniu_h .l_xiaoxi p{ font-size: 28rpx; text-align: center; margin-top:5%;}
.anniu_h button{ color: #000;border-radius:0; font-size: 28rpx; background: none; border: 0;}
.anniu_h button::after{border: none;}


.anniu2{width: 90%; padding-left: 5%; padding-right: 5%; margin-top:100rpx; padding-bottom: 8%; overflow: hidden;}
.liulan1{ border-bottom: 1px rgb(241, 241, 241) solid; overflow: hidden; height:120rpx; line-height: 80rpx; padding-top: 5%; padding-right: 5%;}
.liulan1 .wzan_lelf{ float: left; width: 70%;} 
.liulan1 .wzan_lelf image{float: left; width:48rpx; height:48rpx; margin-top:5%; margin-right: 5%; display: block;}
.liulan1 .wzan_lelf span{ font-size:32rpx; float: left; margin-top: 4px;}
.liulan1 .jt_right{ float: right;}
.liulan1 .jt_right image{ width:20rpx; height:20rpx;}
.anniu2 button{ border-radius:0; background: none; border: 0;}
.anniu2 button::after{border: none;}

</style>
