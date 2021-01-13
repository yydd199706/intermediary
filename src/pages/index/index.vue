<template>
  <div class="indexstyle">
    <!-- 轮播图开始 -->
    <div class="bannar">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000" easing-function="easeInOutCubic">
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
              <image :src="item.img1" class="slide-image" mode="scaleToFill"/>
          </swiper-item>
      </block>
      </swiper>
    </div>
    <!-- 轮播图结束 -->
    <!-- 搜索开始 -->
    <div class="search">
      <input type="text" placeholder="您想住在哪里？" placeholder-style="font-size:14px; padding-left:35px;">
      <image :src="img2" mode="scaleToFill"/>
    </div>
    <!-- 搜索结束 -->

    <!-- 二级导航开始 -->
    <div class="nav">
      <div class="navigation" v-for="(item, index) in navs" :key="index">
        <image :src="item.img3" mode="scaleToFill"/>
        <div class="biaoti">{{item.title}}</div>
      </div>
    </div>
    <!-- 二级导航结束 -->

    <!-- 楼盘动态开始 -->
    <div class="news-s">
      <div class="biaoti-new">
        <div class="wz-bt">楼盘动态</div>
        <div class="more">查看更多</div>
      </div>
      <swiper class="swiper-news" autoplay="true" interval="6000" vertical="false" >
        <block v-for="(item, index) in news" :key="index">
          <swiper-item>
              <p>{{item.title}}</p>
              <image :src="item.img4" class="new-image" mode="scaleToFill"/>
          </swiper-item>
        </block>
      </swiper>
     </div>
    <!-- 楼盘动态结束 -->

    <!-- 楼盘动态开始 -->
    <div class="news-s">
      <div class="biaoti-new">
        <div class="wz-bt">楼盘活动</div>
        <div class="more">查看更多</div>
      </div>
      <swiper class="swiper-news" autoplay="true" interval="7000" vertical="false" >
        <block v-for="(item, index) in activity" :key="index">
          <swiper-item>
              <p>{{item.title}}</p>
              <image :src="item.img5" class="new-image" mode="scaleToFill"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 楼盘动态结束 -->


    <!-- 热门楼盘开始 -->
    <div class="hot-s">
      <div class="biaoti-new">
        <div class="wz-bt">热门楼盘</div>
        <div class="more">查看更多</div>
      </div>
      <div class="hot-nr">
        <scroll-view scroll-x="true" style="width: 100%" class="image-group">
          <div class="loupanlist" v-for="(item, index) in hot" :key="index">
            <image :src="item.img6" class="hot-image" mode="scaleToFill"/>
            <div class="location">{{item.name}}</div>
            <h2>{{item.title}}</h2>
            <p>{{item.area}}m²</p>
            <h3>{{item.price}}元/m²</h3>
          </div>
        </scroll-view>
      </div>
    </div>
    <!-- 热门楼盘结束 -->



    <!-- 必看好房开始 -->
    <div class="hot-s">
      <div class="biaoti-new">
        <div class="wz-bt">必看好房</div>
        <div class="more">查看更多</div>
      </div>
      <div class="hot-nr">
        <scroll-view scroll-x="true" style="width: 100%" class="image-group">
          <div class="loupanlist" v-for="(item, index) in hot" :key="index">
            <image :src="item.img6" class="hot-image" mode="scaleToFill"/>
            <div class="location">{{item.name}}</div>
            <h2>{{item.title}}</h2>
            <p>{{item.area}}m²</p>
            <h3>{{item.price}}元/m²</h3>
          </div>
        </scroll-view>
      </div>
    </div>
    <!-- 必看好房结束 -->


    <!-- 想住靓房开始 -->
    <div class="house-s">
      <div class="biaoti-new">
        <div class="wz-bt">想住靓房</div>
        <div class="more">查看更多</div>
      </div>

      <div class="nr-house">

        <div class="h-mt" v-for="(item, index) in house" :key="index">
          <image :src="item.img6" class="new-image" mode="scaleToFill"/>
          <div class="r_wz">
            <div class="bt_s">{{item.title}}</div>
            <div class="jieshao" v-for="(w, ind) in item.area" :key="ind">
              <span>{{w.model}}</span>/
              <span>{{w.size}}m²</span>/
              <span>{{w.direction}}</span>/
              <span>{{w.name}}</span>
            </div>
            <div class="youshi" v-for="(f, inds) in item.advantage" :key="inds">
              <div class="youshi1" v-if="inds<3">{{f.id}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x"><p class="money">{{item.price}}万</p><p class="money1">{{item.price1}}元/平</p></div>
          </div>
        </div>

      </div>

      <div class="more-house">查看更多</div>
      
    </div>
    <!-- 想住靓房结束 -->



    <!-- 猜你意向的新房开始 -->
    <div class="intention-house">
      <div class="biaoti-new">
        <div class="wz-bt">猜你意向的新房</div>
        <div class="more">查看更多</div>
      </div>

      <div class="intention-nr">
        <div class="intention-mt" v-for="(item, index) in house1" :key="index">
          <image :src="item.img7" class="new-image" mode="scaleToFill"/>
          <div class="intention-right">

            <div class="bt_ri">
              <h1>{{item.title}}</h1>
              <p>在售</p>
            </div>

            <div class="youshi" v-for="(f, inds) in item.advantage1" :key="inds">
              <div class="youshi2" v-if="inds<3">{{f.id}}</div>
            </div>
            <div class="clear"></div>


            <div class="m-x">
              <p class="money">均价{{item.price}}元/m²</p>
              <image :src="item.img8" class="intention-image" mode="scaleToFill"/>
            </div>

          </div>
        </div>
      </div>

      <div class="more-house">查看更多</div>
      
    </div> 
    <!-- 猜你意向的新房结束 -->


    <!-- 猜你想买的二手房开始 -->
    <div class="house-s">
      <div class="biaoti-new">
        <div class="wz-bt">猜你想买的二手房</div>
        <div class="more">查看更多</div>
      </div>

      <div class="nr-house">
        <div class="h-mt" v-for="(item, index) in house" :key="index">
          <image :src="item.img6" class="new-image" mode="scaleToFill"/>
          <div class="r_wz">
            <div class="bt_s">{{item.title}}</div>
            <div class="jieshao" v-for="(w, ind) in item.area" :key="ind">
              <span>{{w.model}}</span>/
              <span>{{w.size}}m²</span>/
              <span>{{w.direction}}</span>/
              <span>{{w.name}}</span>
            </div>
            <div class="youshi" v-for="(f, inds) in item.advantage" :key="inds">
              <div class="youshi1" v-if="inds<3">{{f.id}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x"><p class="money">{{item.price}}万</p><p class="money1">{{item.price1}}元/平</p></div>
          </div>
        </div>
      </div>

      <div class="more-house">查看更多</div>
      
    </div>
    <!-- 猜你想买的二手房结束 -->



    <!-- 猜你想租的房源开始 -->
    <div class="intention-house">
      <div class="biaoti-new">
        <div class="wz-bt">猜你想租的房源</div>
        <div class="more">查看更多</div>
      </div>

      <div class="intention-nr">
        <div class="intention-mt" v-for="(item, index) in house1" :key="index">
          <image :src="item.img7" class="new-image" mode="scaleToFill"/>
          <div class="intention-right">
            <div class="bt_ri">
              <h1>{{item.title}}</h1>
              <p>在售</p>
              <div class="clear"></div>
            </div>
            <div class="youshi" v-for="(f, inds) in item.advantage1" :key="inds">
              <div class="youshi2" v-if="inds<3">{{f.id}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x">
              <p class="money">均价{{item.price}}元/m²</p>
              <image :src="item.img8" class="intention-image" mode="scaleToFill"/>
              <div class="clear"></div>
            </div>

          </div>
        </div>
      </div>

      <div class="more-house">查看更多</div>
      
    </div> 
    <!-- 猜你想租的房源结束 -->    



 



  </div>
</template>

<script>
export default {
  data () {
    return {
      movies: [
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'}
      ],
      img2: "/static/images/ss.png",
      navs: [
        { img3:'/static/images/n1.png', title:'二手房', path:'new house/main'},
        { img3:'/static/images/n2.png', title:'新房'},
        { img3:'/static/images/n3.png', title:'租房'},
        { img3:'/static/images/n4.png', title:'房贷计算器'}
      ],
      news: [
        { img4:'http://vip.yijienet.com/tt/img1.jpg', title:'11动态动态动态动态动态动态动态动态动态动态'},
        { img4:'http://vip.yijienet.com/tt/img1.jpg', title:'22动态动态动态动态动态动态动态动态动态动态'},
        { img4:'http://vip.yijienet.com/tt/img1.jpg', title:'33动态动态动态动态动态动态动态动态动态动态'},
        { img4:'http://vip.yijienet.com/tt/img1.jpg', title:'44动态动态动态动态动态动态动态动态动态动态'}
      ],
      activity: [
        { img5:'http://vip.yijienet.com/tt/img1.jpg', title:'11活动活动活动活动活动活动活动活动活动活动'},
        { img5:'http://vip.yijienet.com/tt/img1.jpg', title:'22活动活动活动活动活动活动活动活动活动活动'},
        { img5:'http://vip.yijienet.com/tt/img1.jpg', title:'33活动活动活动活动活动活动活动活动活动活动'},
        { img5:'http://vip.yijienet.com/tt/img1.jpg', title:'44活动活动活动活动活动活动活动活动活动活动'}
      ],
      hot: [
        { img6:'http://vip.yijienet.com/tt/img1.jpg', name:'安康', title:'城投佳境', area:'90-120', price:6200},
        { img6:'http://vip.yijienet.com/tt/img1.jpg', name:'安康', title:'城投佳境', area:'90-120', price:6200},
        { img6:'http://vip.yijienet.com/tt/img1.jpg', name:'安康', title:'城投佳境', area:'90-120', price:6200},
        { img6:'http://vip.yijienet.com/tt/img1.jpg', name:'安康', title:'城投佳境', area:'90-120', price:6200},
        { img6:'http://vip.yijienet.com/tt/img1.jpg', name:'安康', title:'城投佳境', area:'90-120', price:6200},
        { img6:'http://vip.yijienet.com/tt/img1.jpg', name:'安康', title:'城投佳境', area:'90-120', price:6200}
      ],
      house: [
        { 
          img6:'http://vip.yijienet.com/tt/img1.jpg', title:'城投佳境',
          area: [
            { model:'2室1厅', size:90, direction:'西北', name:'城投佳境'}
          ],
          advantage: [
            { id:'满五年'},
            { id:'满五年'},
            { id:'满五年'}
          ],
          price:555, price1:6500,


        }
      ],
      house1: [
        { 
          img7:'http://vip.yijienet.com/tt/img1.jpg', title:'城投佳境',
          advantage1: [
            { id:'住宅'},
            { id:'小户型'},
            { id:'公交直达'}
          ],
          price:5820,
          img8:'/static/images/jt.jpg',


        }
      ]




    }
  }



}
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}

.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
.slide-image{ width: 100%; height:500rpx;}
.bannar{ width: 100%; margin: 0 auto;}
.banner image{ width: 100%; height:500rpx;}
  


/* 搜索 */
.search{ width: 90%; position: absolute; z-index: 9999; top:40rpx; margin: 0 auto; margin-left: 5%; }
.search input{background:  rgba(255,255,255,0.9); height:42px; line-height:42px; width:100%; border-radius:5px; margin: 0 auto;  }
.search image{ width:40rpx; height: 40rpx; position: absolute; top:25rpx; left:20rpx; }

/* 导航 */
.nav{width:100%; margin-top:5%; padding-bottom:5%; border-bottom:20rpx #efefef solid; overflow: hidden;}
.navigation{ float: left; width: 24%; margin: 0 auto; }
.navigation image{ width:90rpx; height:90rpx; text-align: center; margin: 0 auto; display: block;}
.navigation .biaoti{ font-size:30rpx; text-align: center; margin-top: 5%;}



/* 资讯 */
.image-group {
  display: flex;
  white-space: nowrap;
  margin-top:10rpx;
}
.news-s{width:94%; padding-left: 3%; padding-right: 3%; margin-top:5%; padding-bottom:3%; border-bottom:20rpx #efefef solid;}
.biaoti-new{ width: 94%; margin-left: 3%; margin-right: 3%;margin-top:2%; overflow: hidden; line-height:33rpx; }
.biaoti-new .wz-bt{ float: left; border-left:5px #0a8de4 solid; padding-left:10px; font-weight: bold;}
.biaoti-new .more{ float: right; font-size:25rpx; color: rgb(167, 167, 167);}

.swiper-news{ width: 94%; margin-left: 3%; margin-right: 3%; margin-top:3%; height:170rpx; overflow: hidden;  }
.swiper-news p{ width:65%; float: left; margin-top:5px; line-height:28px; font-size: 28rpx; }
.swiper-news image{ width:32%; float: right; height:160rpx; border-radius: 3px; }
 

/* 热门楼盘 */
.hot-s{width:94%; padding-left: 3%; padding-right: 3%; margin-top:5%; padding-bottom:3%; border-bottom:20rpx #efefef solid;}
.hot-nr{ width:96%; margin-top: 10px; margin-left: 2%; margin-right: 2%;}
.hot-nr .loupanlist{height:290rpx;display: inline-block; width: 31.3%; margin-left: 1%; margin-right: 1%;}
.hot-nr .loupanlist image{ width: 100%; height:200rpx; border-radius:5px;}
.hot-nr .loupanlist .location{ width:60rpx; height: 35rpx;  border-radius:3px; background: rgba(255, 255, 255, 0.76); position: relative; top: -60rpx; left:140rpx; font-size:22rpx; text-align: center;}
.hot-nr .loupanlist h2{ position: relative; top: -30rpx; font-size:29rpx; font-weight: bold; }
.hot-nr .loupanlist p{ font-size: 22rpx; color: #ccc; position: relative; top: -25rpx;}
.hot-nr .loupanlist h3{ font-size: 25rpx;font-weight: 900;  color: rgb(204, 0, 0); position: relative; top: -20rpx;}

/* 想住靓房 */
.house-s{ width:94%; padding-left: 3%; padding-right: 3%; margin-top:5%; padding-bottom:5%; border-bottom:20rpx #efefef solid;}
.nr-house{ width: 94%; margin-left: 3%; margin-right: 3%; margin-top:15px;}
.h-mt{ overflow: hidden;}
.nr-house image{ float: left; width: 40%; height: 200rpx;}
.nr-house .r_wz{ float:right; width: 57%;}
.nr-house .r_wz .bt_s{font-size: 34rpx; font-weight: bold; margin-right:10rpx;}
.jieshao{ font-size: 26rpx; color: #000; margin-top:10rpx;}
.youshi1{ float: left; width:90rpx; height:40rpx; line-height: 40rpx; border-radius:3px; background: #edf0f3; color: #849aae; font-size: 25rpx; text-align: center; margin-top:10rpx; margin-right: 10rpx;}
.m-x{ margin-top: 15rpx; overflow: hidden; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 32rpx; color:#fa5741; font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:#ccc; margin-top: 10rpx; }
.more-house{ width: 94%; height:70rpx; background: #e8edf3; border-radius:5px; text-align: center; line-height:70rpx; font-size: 28rpx; font-weight: bold; margin-left: 3%; margin-right: 3%; margin-top: 30rpx; color: #3072f6;}


/* 猜你意向的新房 */
.intention-house{ width:94%; padding-left: 3%; padding-right: 3%; margin-top:5%; padding-bottom:5%; border-bottom:20rpx #efefef solid;}
.intention-nr{ width: 94%; margin-left: 3%; margin-right: 3%; margin-top:15px;}
.intention-mt{ overflow: hidden;}
.intention-nr image{ float: left; width: 40%; height: 190rpx;}
.intention-nr .intention-right{ float:right; width: 57%; margin-top: 20rpx;}
.intention-nr .intention-right .bt_ri{ overflow: hidden;}
.intention-nr .intention-right .bt_ri h1{ float: left; font-size: 34rpx; font-weight: bold; margin-right:4rpx;}
.intention-nr .intention-right .bt_ri p{ float: right; width:60rpx; height:30rpx; line-height: 30rpx; background: #0a8de4; text-align: center; font-size: 20rpx;  margin-right:10rpx; color: #fff; border-radius: 3px;}
 .youshi2{ float: left; padding-left:10rpx; padding-right:10rpx; height:40rpx; line-height: 40rpx; border-radius:3px; border:1rpx #efefef solid; color:#6b7072; font-size: 25rpx; text-align: center; margin-top:15rpx; margin-right: 10rpx;}
 .m-x image{ float: right; width: 14px; height: 8px; margin-top: 5rpx;}

 



</style>
