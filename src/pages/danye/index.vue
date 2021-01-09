<template>
  <div class="indexstyle">

    <!-- 图片开始 -->
    <div class="toutu">
      <image :src="img1" />
    </div>
    <!-- 图片结束 -->

    <!-- 搜索开始 -->
    <div class="search">
      <image :src="img2" mode="scaleToFill"/>
      <span>搜索</span>
    </div>
    <!-- 搜索结束 -->

    <!-- 固定搜索开始 -->
    <div class="search_gd" v-if="search_gd">
      <div class="sou_l">
        <image :src="img7" mode="scaleToFill"/>
        <span>搜索</span>
      </div>
      <div class="sou_bt">项目展示</div>

    </div>
    <!-- 固定搜索结束 -->










    <!-- 内容开始 -->
    <div class="neirong">
      <div class="t_wenzi">你陪伴孩子的时光，会成为他回忆你时的开怀大笑 ></div>

      <div class="xiangmu">

        <div class="xm_k1" v-for="(item, index) in xmproject" :key="index">
          <div class="xmk1_l"><image :src="item.img3"/></div>
          <div class="xmk1_r">
            <div class="xm_biaoti">
              <h1>{{item.name}}</h1>
              <span>￥{{item.money}}万元</span>
            </div>
            <div class="xm_dizhi">
              <p>{{item.address}}</p>
              <span>开盘：{{item.time}}</span>
            </div>
            <image :src="item.img4" mode="scaleToFill"/>
          </div>
        </div>

        <div class="xm_k1">
          <div class="xmk1_ls"><image :src="img5"/></div>
          <div class="xmk1_rs">2个项目</div>
        </div>

      </div>


      <!-- 地址分享开始 -->
      <div class="di_foot">
        <div class="dizhi_foot"><span>兴安府</span> ▪ <span>安康市</span></div>
        <div class="fenxiang">
          <image :src="img6" mode="scaleToFill"/>
          <span>分享</span>
        </div>
      </div>
      <!-- 地址分享开始 -->




    </div>
    <!-- 内容结束 -->

   
  

  </div>
</template>

<script>
export default {
  data () {
    xianshi:false;
    return {
      img1: 'http://vip.yijienet.com/tt/img1.jpg',
      img2: "/static/images/sous.png",
      
      xmproject: [
        {img3: '/static/images/dizhi.png', name:'长安金茂府', money:'240-260', address:'安康市汉滨区', time:'2020年12月16日', img4:'http://vip.yijienet.com/tt/img1.jpg'},
        {img3: '/static/images/dizhi.png', name:'长安金茂府', money:'240-260', address:'安康市汉滨区', time:'2020年12月16日', img4:'http://vip.yijienet.com/tt/img1.jpg'}

      ],
      img5: "/static/images/xm.png",
      img6: "/static/images/fx1.png",
      img7: "/static/images/sous1.png",
      search_gd:false,
  
 


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
 
.toutu{ width: 100%; height:600rpx;}
.toutu image{ width: 100%; height: 100%;}
 
/* 搜索 */
.search{ width: 95%; position:absolute; top: 10px; left:5%; z-index: 9999; }
.search image{ width:20px; height:20px; margin-right:2%; position: relative; top:5px;}
.search span{ color: #fff; font-size: 30rpx;}

/* 内容开始 */
.neirong{ width:90%;  background: #192437; padding-left: 5%; padding-right: 5%; padding-top: 5%; padding-bottom: 5%; }
.t_wenzi{ color: #bdbebf; padding-left:5%; border-left: 2px #474f5f solid; font-size: 27rpx; line-height: 15px;margin-bottom: 5%; margin-top: 3%; }
.xiangmu{ margin-top:10%; border-left: 2px #474f5f solid; }

.xm_k1{ width:100%; overflow: hidden; position: relative; left: -3%; margin-bottom: 5%;}
.xmk1_l{ width:10%; float: left;}
.xmk1_l image{ width: 20px; height: 20px; }
.xmk1_r{ float: right; width:90%;}
.xm_biaoti{width:100%; overflow: hidden; margin-bottom:2%;}
.xm_biaoti h1{ color: #fac78b; font-weight: bold; font-size:35rpx; float: left; }
.xm_biaoti span{ color: #fff; font-size: 26rpx; float: right;}
.xm_dizhi{ overflow: hidden; margin-bottom:3%;}
.xm_dizhi p{ font-size: 26rpx; color: #8b919a; float: left; }
.xm_dizhi span{ font-size: 26rpx; float: right; color: #8b919a;}
.xmk1_r image{ width: 100%; height:300rpx; border-radius: 5px;}

.xmk1_ls{ width:10%; float: left;}
.xmk1_ls image{ width:18px; height: 18px; }
.xmk1_rs{float: right; width:90%;color: #fac78b; font-weight: bold; font-size:35rpx;}


.di_foot{ margin-top:10%; margin-bottom: 10%; }
.dizhi_foot{ font-size: 32rpx; color: #bababa; text-align: center;}
.fenxiang{ width:260rpx; height:80rpx; line-height: 80rpx; border-radius:30px; background: #695c57; margin: 0 auto; margin-top:7%;}
.fenxiang image{ width: 20px; height: 20px; margin-top:3%; margin-right:6%; margin-left:25%;}
.fenxiang span{ color: #fff;}


/* 固定搜索开始 */
.search_gd{ width: 100%; height: 100rpx; line-height: 100rpx; background: #fff; display: flex; flex-direction: row;position: fixed; top: 0; z-index: 9999999999999; }
.sou_l{ margin-left: 5%; width:40%;}
.sou_l image{ width:20px; height:20px; margin-right:4%; position: relative; top:5px; }
.sou_l span{ color: #000; font-size: 28rpx;}
.sou_bt{text-align: left; font-weight: bold; }



</style>
