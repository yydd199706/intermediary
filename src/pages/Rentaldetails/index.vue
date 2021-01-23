<template>
  <div class="indexstyle">


    <!-- 图片轮播 -->
    <div class="lunbo">
      <swiper class="swiper" @change="djimg">
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="item.img1" class="slide-image" mode="scaleToFill"/>
          </swiper-item>
        </block>
      </swiper>
      <div class="imageCount">{{currentimg+1}}/{{movies.length}}</div>
    </div>
    <!-- 图片轮播 -->




    <!-- 租房信息开始 -->
    <div class="zfdetails">
      <div class="btjq">
        <h1><span>{{monthly}}</span>元/月（季付）</h1>
        <p>点击详情</p>
      </div>
      <h2>{{name}}</h2>
      <div class="jieshao">
        <ul>
          <li>
            <h3>{{orientation}}</h3>
            <p>朝向</p>
          </li>
          <li>
            <h3>{{area}}m²</h3>
            <p>面积</p>
          </li>
          <li>
            <h3>{{floor}}层</h3>
            <p>楼层</p>
          </li>
          <li>
            <h3>{{time}}</h3>
            <p>入住时间</p>
          </li>
        </ul>
      </div>
      <div class="zf_ys" v-for="(item,yous) in youshilist" :key="yous">
        <p>{{item.id}}</p>
      </div>
 
    </div>
    <!-- 租房信息结束 -->


    <!-- 房源简介开始 -->
    <div class="introduction">
      <div class="hx_bt">
        <p>房源简介</p>
      </div>

      <div class="fyjieshao">
        <ul>
          <li v-for="(item, fay) in fangyuanlist" :key="fay">
            <image :src="item.img1" class="slide-image" />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>

    </div>
    <!-- 房源简介结束 -->


    <!-- 费用详情开始 -->
    <div class="cost">
      <div class="hx_bt">
        <p>费用详情</p>
        <span>咨询更多费用明细</span>
      </div>
      <div class="feiyong">
        <h2>年租价（当租期不足1年时租金可能会上浮，详询管家）</h2>
        <ul>
          <li>付款方式</li>
          <li>租金<p>(元/月)</p></li>
          <li>押金<image :src="img14" @click="yajin_dj" /><p>(元)</p></li>
          <li>服务费<p>(元(一次收费))</p></li>
          <li>中介费<p>(元)</p></li>
        </ul>
        <ul>
          <li>季付</li>
          <li>26000</li>
          <li>52000</li>
          <li>0</li>
          <li>0</li>
        </ul>
        <!-- 中间弹框开始 -->
        <div class="tan_yj" v-if="yajin_xs">
          <div class="yajin_tk">
            <h3>押金</h3>
            <p>该房源押金包含：房屋押金</p>
            <button @click="zhidao">知道了</button>
          </div>
        </div>
        <!-- 中间弹框结束 -->
      </div>

    </div>
    <!-- 费用详情结束 -->


    <!-- 推荐经纪人开始 -->
    <div class="agent">
      <div class="hx_bt">
        <p>推荐经纪人</p>
      </div>

      <div class="guwen">
          <div class="guwen_list" v-for="(item, index) in guwenlists" :key="index">
            <div class="left_g">
              <image :src="item.img8" class="slide-image" mode="scaleToFill"/>
              <div class="neirong">
                <div>
                  <h1>{{item.name}}</h1>
                  <span>满意度{{item.fraction}}分</span>
                  <div class="clear"></div>
                </div>
                <p>{{item.neirong}}</p>
              </div>
            </div>
            <div class="right_g">
              <p><image :src="item.img9" class="slide-image" mode="scaleToFill" /></p>
              <p><image :src="item.img10" class="slide-image" mode="scaleToFill" /></p>
            </div>
          </div>
      </div>

    </div>
    <!-- 推荐经纪人结束 -->


    <!-- 位置及周边地图开始 -->
    <div class="ditu">
      <div class="hx_bt">
        <p>位置及周边地图</p>
      </div>
      <div class="map_img">
          <map id="map" :longitude="longitude" :latitude="latitude" :scale="14" :controls="controls" 
          bindcontroltap="controltap" :markers="markers" :bindmarkertap="markertap" :polyline="polyline"
          :bindregionchange="regionchange" show-location style="width: 100%; height: 220px;"
          :enable-scroll="false" :enable-zoom="false" @click="clickAdress"></map>
      </div>

    </div>
    <!-- 位置及周边地图结束 -->


    <!-- 同小区房源开始 -->
    <div class="ditu">
      <div class="hx_bt">
        <p>同小区房源</p>
      </div>

      <div class="houseyuan_list">
        <scroll-view scroll-x="true" style="width: 100%" class="image-group">
          <div class="fangy_list" v-for="(item, fy) in fangyuanh" :key="fy">
            <image :src="item.img11" class="slide-image" />
            <h3><span>{{item.fangy1}}</span>/<span>{{item.fangy2}}m²</span>/<span>{{item.fangy3}}</span></h3>
            <p><span class="dj1">{{item.fangy4}}万元</span><span class="dj2">{{item.fangy5}}元/平</span></p>
          </div>
        </scroll-view>
      </div>
      
    </div>
    <!-- 同小区房源结束 -->


    <!-- 推荐房源开始 -->
    <div class="recommendfy">
      <div class="hx_bt">
        <p>推荐房源</p>
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
              <div class="youshi1" v-if="inds<2">{{f.id}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x"><p class="money">{{item.price}}万</p><p class="money1">{{item.price1}}元/平</p></div>
          </div>
          <div class="clear"></div>

        </div>

      </div>
 

    </div>
    <!-- 推荐房源结束 -->


    <!-- 底部按钮开始 -->
    <div class="footer">
      <div class="left_foot">

        <div class="guanzhus">
          <button class="gzdianji" @click="gz_dj" v-if="gztu_img==0" ><image :src="img15" /></button>
          <button class="gzxianshi" @click="gz_dj" v-else ><image :src="img16" /></button>
          <p>关注</p>          
        </div>

        <button open-type="share" class="fenxiangs">
          <image :src="img13" class="slide-image" />
          <p>分享</p>
        </button>
        <button class="fenxiangs">
          <image :src="img14" class="slide-image" />
          <p>预约</p>
        </button>
      </div>
      <div class="right_foot">
        <div class="Report">打电话</div>
        <div class="Telephone">加微信</div>
      </div>
    </div>
    <!-- 底部按钮开始 -->

 
  </div>
</template>

<script>
export default {
  data () {
    return {
      movies: [
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'},
        {img1: 'http://vip.yijienet.com/tt/img1.jpg'}
      ],
      currentimg: 0,
      monthly:2000,
      name:'整租 城投佳境 3室2厅',
      orientation:'南北',
      area:120,
      floor:10,
      time:'随时入住',
      youshilist:[
        {id:'近地铁'},
        {id:'精装修'},
      ],
      fangyuanlist:[
        {img1:'/static/images/z1.png',name:'电视'},
        {img1:'/static/images/z2.png',name:'冰箱'},
        {img1:'/static/images/z3.png',name:'洗衣机'},
        {img1:'/static/images/z4.png',name:'空调'},
        {img1:'/static/images/z5.png',name:'热水器'},
        {img1:'/static/images/z6.png',name:'床'},
        {img1:'/static/images/z7.png',name:'暖气'},
        {img1:'/static/images/z8.png',name:'宽带'},
        {img1:'/static/images/z9.png',name:'衣柜'},
        {img1:'/static/images/z10.png',name:'天然气'},
        {img1:'/static/images/z11.png',name:'沙发'},
        {img1:'/static/images/z12.png',name:'桌子'},
      ],
      guwenlists: [
            {
              img8:'http://vip.yijienet.com/tt/img1.jpg',name:'王先生',fraction:5,neirong:'我带看过本房，清楚本房特色',img9:'/static/images/wx.png',img10:'/static/images/dh.png',
            }
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
      fangyuanh:[
        {img11:'http://vip.yijienet.com/tt/img1.jpg',fangy1:'2室一厅',fangy2:80.5,fangy3:'北',fangy4:130,fangy5:6500.5},
        {img11:'http://vip.yijienet.com/tt/img1.jpg',fangy1:'2室一厅',fangy2:80.5,fangy3:'北',fangy4:130,fangy5:6500.5},
        {img11:'http://vip.yijienet.com/tt/img1.jpg',fangy1:'2室一厅',fangy2:80.5,fangy3:'北',fangy4:130,fangy5:6500.5}
      ],
      img12: "/static/images/gz.png",
      img13: "/static/images/fx.png",
      img14: "/static/images/yy.png",
      img15: "/static/images/gz.png",
      img16: "/static/images/xin.png",
      yajin_xs:false,
      gztu_img:0,
 


     }
  },
  methods: {
    djimg(e) {
      this.currentimg = e.target.current;
    },
    yajin_dj(){
      this.yajin_xs = !this.yajin_xs;
    },
    zhidao(){
      this.yajin_xs=false;
    },
    gz_dj(){
          if(this.gztu_img==1){
            this.gztu_img=0;
          }else{
            this.gztu_img=1;
          }
    }
 
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


.lunbo{ width: 100%; height: 500rpx;}
.swiper{ width: 100%; height: 100%;}
.lunbo image{ width: 100%; height: 100%;}
.imageCount {
  width:100rpx;
  height:45rpx;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius:40rpx;
  line-height:50rpx;
  color:#fff;
  text-align:center;
  font-size:24rpx;
  position:relative;
  left:42%;
  bottom:70rpx;
}


/* 租房信息  */
.zfdetails{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 8%;  border-bottom:20rpx #f8f8fa solid;}
.btjq{ width: 100%; overflow: hidden;}
.btjq h1{ float: left; font-size:32rpx; color: rgb(255, 58, 58);}
.btjq h1 span{ font-size: 38rpx;}
.btjq p{ float: right; font-size: 28rpx; color: rgb(26, 154, 228);}
.zfdetails h2{ font-size: 34rpx; font-weight: bold; margin-top:10rpx;}
.jieshao{ margin-top:3%; width: 100%; overflow: hidden; padding-top:2%; padding-bottom:2%; border-top:2rpx rgb(236, 236, 236) solid; border-bottom:2rpx rgb(236, 236, 236) solid; }
.jieshao ul li{ float: left; width: 25%; text-align: center;}
.jieshao ul li h3{ font-size: 32rpx; margin-bottom:10rpx;}
.jieshao ul li p{ font-size: 28rpx; color: rgb(121, 121, 121); }
.zf_ys{ width: 100%; margin-top: 3%; }
.zf_ys p{ float: left; font-size: 26rpx; padding: 2rpx 10rpx 2rpx 10rpx; background: #edf0f3; color: #849aae; margin-right:6rpx; border-radius:6rpx;}

/* 房源简介 */
.introduction{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.hx_bt{ width:100%; overflow: hidden;}
.hx_bt p{ float: left; font-size:35rpx; font-weight: bold;}
.hx_bt span{ float: right; font-size:25rpx; color: #2e72f1; margin-top: 2%;}
.fyjieshao{ width: 100%; margin-top: 5%;}
.fyjieshao ul{ overflow: hidden;}
.fyjieshao ul li{  display: inline-block; width: 20%; margin-bottom: 5%;}
.fyjieshao ul li image{ width:60rpx; height:60rpx; display: block; margin: 0 auto;}
.fyjieshao ul li p{ font-size: 28rpx; margin-top:10rpx; text-align: center;}
.yajin_tk button{ width: 50%; background: #07c160; color: #fff; height:70rpx; line-height: 70rpx;}

/* 费用详情 */
.cost{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:5%; border-bottom:20rpx #efefef solid;}
.feiyong{ width: 100%; margin-top:5%;}
.feiyong h2{ font-size: 26rpx; margin-bottom: 5%;}
.feiyong ul{ display: flex; flex-direction: row; margin-top:2%;}
.feiyong ul li{ font-size: 26rpx; text-align: center; width: 20%; }
.feiyong ul li p{ font-size: 21rpx; color: rgb(146, 146, 146); margin-top: 2%;}
.feiyong ul li image{ width:25rpx; height: 25rpx; margin-left: 3%;}
/* 中间弹框 */
.tan_yj{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.yajin_tk{ width:70%; margin-left: 10%; margin-right: 10%; padding:5%; background: #fff; position: relative; bottom:35%; border-radius: 3%;}
.yajin_tk h3{ font-size: 35rpx; font-weight: bold;}
.yajin_tk p{ font-size: 30rpx; margin-top: 10%; margin-bottom: 10%;}


/* 推荐经纪人 */
.agent{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.guwen{ width:100%; margin-top:5%;}
.guwen_list{ width: 100%; margin-top:2%; overflow: hidden;}
.left_g{ float: left; width:75%;}
.left_g image{ float: left; width:110rpx; height:110rpx; border-radius: 50%; margin-right: 2%;}
.neirong{ float: left; width:70%; margin-top: 2%; }
.neirong div h1{float: left; font-size:32rpx; font-weight: bold; margin-right:10rpx; }
.neirong div span{ float: left; font-size: 22rpx; padding:1rpx 2rpx 1rpx 2rpx; border:2rpx #f86577 solid; color: #f86577; text-align: center; border-radius:6rpx; }
.neirong p{ font-size: 27rpx; color: #969ca8; margin-top:2%;}

.right_g{ float: right; margin-top:20rpx; width: 25%; }
.right_g p{ float: left;margin-left:10%;}
.right_g image{ width:60rpx; height:60rpx;}


/* 位置及周边地图 */
.ditu{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.map{background: rgba(255,255,255,0.8);padding: 20rpx;margin-top: 25rpx;
    box-sizing: border-box;border-radius: 10rpx;position: relative;top: -50rpx;}
.map_img{width:100%; margin-bottom: 50rpx; margin-top: 3%;}
.map_img>image{width: 100%;height: 100%; margin-top: 3%;}


/* 同小区房源 */
.image-group {
  display: flex;
  white-space: nowrap;
  margin-top:10rpx;
}
.houseyuan_list{ width: 100%; margin-top: 5%;}
.fangy_list{ margin-right:6%; width:58%; margin-right: 5%; height:380rpx;display: inline-block;}
.fangy_list image{ width: 100%; height: 260rpx;}
.fangy_list h3{ font-size: 30rpx; margin-top: 3%;}
.fangy_list p{ font-size: 26rpx; margin-top: 3%;}
.fangy_list p span.dj1{ font-size: 30rpx; font-weight: bold; color: rgb(253, 27, 27); margin-right: 2%;}
.fangy_list p span.dj2{ font-size: 27rpx; color: rgb(146, 146, 146);}
 



/* 推荐房源 */
.recommendfy{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #f8f8fa solid;}
.nr-house{ width:100%;  margin-top:30rpx;}
.nr-house image{ float: left; width: 40%; height: 180rpx;}
.nr-house .r_wz{ float:right; width: 57%;}
.nr-house .r_wz .bt_s{font-size: 34rpx; font-weight: bold; margin-right:10rpx;}
.jieshao{ font-size: 26rpx; color: #000; margin-top:10rpx;}
.youshi1{ float: left; width:90rpx; height:40rpx; line-height: 40rpx; border-radius:6rpx; background: #edf0f3; color:#849aae; font-size: 25rpx; text-align: center; margin-top:10rpx; margin-right: 10rpx;}
.m-x{ margin-top: 10rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color: rgb(192, 0, 0); font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:#ccc; margin-top: 10rpx; }




/* 底部按钮 */
.footer{ width: 100%; height: 120rpx; background: #fff;position: fixed;bottom: 0;}
.left_foot{ float: left; width:39%;height: 120rpx; margin-right:3%; margin-left: 3%;}
.left_foot .guanzhus{ float: left; width:33.3%; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot .guanzhus image{ width:36rpx; height:36rpx;}
.left_foot .guanzhus p{ font-size: 26rpx; color: #000; position: relative; top:-24rpx; left:22%;}

.left_foot .fenxiangs{ float: left; width:33.3%; height:50rpx; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important;}
.left_foot button::after{border: none; padding: 0 !important;}
.left_foot .fenxiangs image{ width:36rpx; height:36rpx;}
.left_foot .fenxiangs p{ font-size: 26rpx; color: #000; position: relative; top: -40rpx;}

.right_foot{ float: right; width:55%; margin-top:14rpx;}
.Report{ float: left; width: 45%; background: #3dc28e; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius: 10rpx; color: #fff; margin-right: 5%;}
.Telephone{ float: right; width: 45%; background: #2e72f1; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}



 </style>
