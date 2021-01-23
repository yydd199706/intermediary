<template>
  <div class="indexstyle">

    <div class="newslist">
      <!-- 栏目切换开始 -->
      <div class="lanmunews">
        <div :class="{'selected':tab === 1,'title':true}" class="newxw" @click="changTab(1)">新闻资讯</div>
        <div :class="{'selected':tab === 2,'title':true}" class="newxw" @click="changTab(2)">项目活动</div>
        <div :class="{'selected':tab === 3,'title':true}" class="newxw" @click="changTab(3)">楼盘动态</div>
        
      </div>
      <!-- 列表内容开始 -->
      <div class="xinwennr">
        <!-- 新闻资讯开始 -->
        <div class="xwzxs" v-if="tab===1">
          <div class="news_list">
            <ul>
              <li v-for="(item, xwlb) in newlist" :key="xwlb">
                <div class="xw_lelf">
                  <h2>{{item.title}}</h2>
                  <div class="zhaiyao">{{item.article}}</div>
                  <p><span class="m1">{{item.name}}</span><span class="m2">{{item.time}}</span></p>
                </div>
                <div class="xw_right">
                  <image :src="item.img2" class="slide-image" mode="scaleToFill" />             
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 项目活动开始 -->
        <div class="xwzxs" v-else-if="tab===2">
          <div class="news_list">
            <ul>
              <li v-for="(item, xwlb) in xmhd" :key="xwlb">
                <div class="xw_lelf">
                  <h2>{{item.title}}</h2>
                  <div class="zhaiyao">{{item.article}}</div>
                  <p><span class="m1">{{item.name}}</span><span class="m2">{{item.time}}</span></p>
                </div>
                <div class="xw_right">
                  <image :src="item.img2" class="slide-image" mode="scaleToFill" />             
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 楼盘动态开始 -->
        <div class="xwzxs" v-else>
          <div class="news_list">
            <ul>
              <li v-for="(item, xwlb) in lpdt" :key="xwlb">
                <div class="xw_lelf">
                  <h2>{{item.title}}</h2>
                  <div class="zhaiyao">{{item.article}}</div>
                  <p><span class="m1">{{item.name}}</span><span class="m2">{{item.time}}</span></p>
                </div>
                <div class="xw_right">
                  <image :src="item.img2" class="slide-image" mode="scaleToFill" />             
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>
  
  

  </div>
</template>

<script>
export default {
  data () {
    xianshi:false;
    return {
      tab: 1,
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
      ],
      xmhd:[
        {
          title:'22小程序实现样式绑定小程',
          article:'小程序实现样式绑定小程序实现样式绑定点击切换样式',
          name:'家居严选师',
          time:'2020-12-4',
          img2:'http://vip.yijienet.com/tt/img1.jpg',
          img3:'/static/images/an1.png',
          num:1130
        }
      ],
      lpdt:[
        {
          title:'33小程序实现样式绑定小程',
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
      changTab(index) {
        this.tab = index;
      },
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
 

.newslist{ width:90%; margin-left: 5%; margin-right: 5%;}
.lanmunews{ display: flex; flex-direction: row; margin-top: 20rpx;}
.newxw{ margin-right:40rpx; font-size: 32rpx;}
.selected { border-bottom:6rpx rgb(15, 142, 228) solid; padding-bottom:20rpx; font-size: 35rpx; font-weight: bold;}


.xinwennr{ margin-top:10rpx;}
.news_list{ width: 100%; }
.news_list ul li{overflow: hidden; padding-top: 5%; padding-bottom: 3%; border-bottom:2rpx rgb(240, 240, 240) solid; }
.news_list ul li .xw_lelf{ float: left; width: 65%;}
.news_list ul li .xw_lelf h2{ font-size: 34rpx; font-weight: bold; margin-top: 2%;}
.news_list ul li .xw_lelf .zhaiyao{ font-size: 28rpx; margin-top:20rpx;}
.news_list ul li .xw_lelf h2 p{ width:30rpx; height:8rpx; border-radius:20rpx; background: rgb(18, 168, 255); position:absolute; left: 8%; top:5%;}
.news_list ul li .xw_lelf p{  margin-top:20rpx; color: rgb(104, 104, 104); font-size:27rpx;}
.news_list ul li .xw_lelf p span.m1{ margin-right: 3%;}
.news_list ul li .xw_right{ float: right; width: 33%;}
.news_list ul li .xw_right image{ width: 100%; height:200rpx; border-radius:6rpx;}

 

</style>
