<template>
  <div class="indexstyle">
    <!-- 收藏页开始 -->
    <div class="news_list">
        <ul>
          <li v-for="(item, xwlb) in newlist" :key="xwlb">
            <div class="xw_lelf">
              <h2>{{item.title}}<p></p></h2>
              <div class="zhaiyao">{{item.article}}</div>
              <p><span class="m1">{{item.name}}</span><span class="m2">{{item.time}}</span></p>
            </div>
            <div class="xw_right">
              <image :src="item.img2" class="slide-image" mode="scaleToFill" />             
            </div>
          </li>
        </ul>
      </div>
      <!-- 收藏页结束 -->
     
  </div>
</template>

<script>
export default {
  data () {
     return {
       newlist:[
        {
          title:'小程序实现样式绑定小程',
          article:'小程序实现样式绑定小程序实现样式绑定点击切换样式',
          name:'家居严选师',
          time:'2020-12-4',
          img2:'http://vip.yijienet.com/tt/img1.jpg',
          img3:'/static/images/an1.png',
          num:1130
        }
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
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}

/* 收藏页 */
.news_list{ width:90%; margin-left: 5%; margin-right: 5%; }
.news_list ul li{overflow: hidden; padding-top: 5%; padding-bottom: 3%; border-bottom: 1px rgb(240, 240, 240) solid; }
.news_list ul li .xw_lelf{ float: left; width: 65%;}
.news_list ul li .xw_lelf h2{ font-size: 34rpx; font-weight: bold; margin-top: 2%;}
.news_list ul li .xw_lelf .zhaiyao{ font-size: 28rpx; margin-top:20rpx;}
/* .news_list ul li .xw_lelf h2 p{ width:15px; height: 4px; border-radius: 10px; background: rgb(18, 168, 255); position:absolute; left: 8%; top:5%;} */
.news_list ul li .xw_lelf p{  margin-top:20rpx; color: rgb(104, 104, 104); font-size:27rpx;}
.news_list ul li .xw_lelf p span.m1{ margin-right: 3%;}
.news_list ul li .xw_right{ float: right; width: 33%;}
.news_list ul li .xw_right image{ width: 100%; height:200rpx; border-radius:3px;}



</style>
