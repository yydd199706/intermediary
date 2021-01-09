<template>
  <div class="indexstyle">

    <div class="xinwenlist">
      <div class="top_s">
        <h1>发现</h1>
        <image :src="img1" class="slide-image" mode="scaleToFill" />
      </div>
      <div class="news_list">
        <ul>
          <li v-for="(item, xwlb) in newlist" :key="xwlb">
            <div class="xw_lelf">
              <h2>{{item.title}}<p></p></h2>
              <p><span class="m1">{{item.name}}</span><span class="m2">{{item.time}}</span></p>
            </div>
            <div class="xw_right">
              <image :src="item.img2" class="slide-image" mode="scaleToFill" />
              <div class="remen">
                <image :src="item.img3" class="slide-image" mode="scaleToFill" />
                <p>{{item.num}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>


    </div>
  
  

  </div>
</template>

<script>
export default {
  data () {
    xianshi:false;
    return {
      img1:"/static/images/ss.png",
      newlist:[
        {
          title:'小程序实现样式绑定小程序实现样式绑定点击切换样式',
          name:'家居严选师',
          time:'2020-12-4',
          img2:'http://vip.yijienet.com/tt/img1.jpg',
          img3:'/static/images/an1.png',
          num:1130
        }
      ]
 


    }
  },


 

   

}
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
 

.xinwenlist{width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 8%;;}
.top_s{ width: 100%; overflow: hidden; padding-top:3%; }
.top_s h1{ float: left; font-size: 36rpx; font-weight: bold; padding-bottom: 3%;}
.top_s image{ float: right; width: 23px; height: 23px;}
.news_list{ width: 100%; }
.news_list ul li{overflow: hidden; padding-top: 5%; border-bottom: 1px rgb(240, 240, 240) solid; }
.news_list ul li .xw_lelf{ float: left; width: 65%;}
.news_list ul li .xw_lelf h2{ font-size: 34rpx; font-weight: bold; height: 130rpx; margin-top: 2%;}
.news_list ul li .xw_lelf h2 p{ width:15px; height: 4px; border-radius: 10px; background: rgb(18, 168, 255); position:absolute; left: 8%; top:5%;}
.news_list ul li .xw_lelf p{  margin-top:3%; color: rgb(104, 104, 104); font-size:27rpx;}
.news_list ul li .xw_lelf p span.m1{ margin-right: 3%;}
.news_list ul li .xw_right{ float: right; width: 33%;}
.news_list ul li .xw_right image{ width: 100%; height:200rpx; border-radius:3px;}
.news_list ul li .xw_right .remen{ width:100rpx; height:35rpx;  background: rgba(110, 110, 110, 0.904); position: relative; left: 50%; top: -27px; border-radius: 10px;}
.news_list ul li .xw_right .remen image{ width:14px; height:14px; margin-top: 3px; margin-left:5px;}
.news_list ul li .xw_right .remen p{font-size: 20rpx; color: rgb(255, 255, 255);position: relative; top: -18px; left:20px; } 



</style>
