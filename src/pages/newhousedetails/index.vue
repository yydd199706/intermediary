<template>
  <div class="indexstyle">
     
     <!-- vr开始 -->
     <div class="contain">
        <scroll-view scroll-x class="top">
           <div class="tabbar" :class="{'tabbar-bottom':currentTab==index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)">
                {{item.title}}
            </div>
        </scroll-view>

        <swiper class="swiper" :current="currentTab" @change="changeTab">
            <!-- VR视频-->
            <swiper-item class="vrdajia">
              <div class="vrda">
                  <image :src="img5" class="vr-image" mode="scaleToFill"/>
             </div>
            </swiper-item>

            <!-- 图片-->
            <swiper-item>
                <div>
                    <swiper class="swiper">
                        <block v-for="(item, index) in movies" :key="index">
                        <swiper-item>
                            <image :src="item.img4" class="vr-image" mode="scaleToFill"/>
                        </swiper-item>
                        </block>
                    </swiper>
                </div>
            </swiper-item>

        </swiper>
     </div>
     <!-- vr结束 -->


    <!-- 新房信息开始 -->
    <div class="newhousedetails">
       <div class="housedetails_name">
         <h1>城投佳境</h1>
         <p>在售</p>
       </div>
       <div class="advantage">
         <div v-for="(xin, ind) in ys_house" :key="ind">{{xin.id}}</div>
       </div>

       <div class="price">
         <div class="lelf_p">
           <h2>参考价格（均价/总价）</h2>
           <div class="jiage"><span>{{price}}元</span>/<span>{{price1}}万</span></div>
         </div>
         <div class="right_p">
           <h2>建面</h2>
           <div class="jiage">{{price2}}m²</div>
         </div>
       </div>

       <div class="information">
         <div class="shang">
            <div class="fl">类型：<span>{{typess}}</span></div>
            <div class="fr">户型：<span>{{housetype}}</span></div>
            <div class="fl">结构：<span>{{structure}}</span></div>
            <div class="fr">开盘：<span>{{opendate==""?'暂无':opendate}}</span></div>
            <div class="clear"></div>
         </div>
         <div class="bfb">地址：<span>{{address==""?'暂无':address}}</span><p><image :src="img1" mode="scaleToFill"/></p></div>
         <div class="bfb">更多：<span>{{address==""?'暂无':address}}</span><p><image :src="img1" mode="scaleToFill"/></p></div>
       </div>

       <div class="anniu">
         <div class="bjtz">
           <image :src="img2" mode="scaleToFill"/>
           <span>变价通知</span>
         </div>
         <div class="kptx">
           <image :src="img3" mode="scaleToFill"/>
           <span>开盘提醒</span>
         </div>
         <div class="clear"></div>
       </div>

    </div>
    <!-- 新房信息结束 -->
 
    <!-- 介绍开始 -->
    <div class="rollnavs">
      <!-- 优惠开始 -->
      <div class="Discount">
        <p>优惠信息</p>
        <image :src="img6" class="yh-image" mode="scaleToFill"/>
      </div>
      <!-- 优惠结束 -->
      
      <!-- 户型开始 -->
      <div class="huxingda">
        <div class="hx_bt">
          <p>户型介绍</p>
          <span>更多户型</span>
          <div class="clear"></div>
        </div>

        <div class="huxingqh">
          <div class="bthx" :class="{'selected':hxtab === 1}" @click="huxing(1)">一室（1）</div>
          <div class="bthx" :class="{'selected':hxtab === 2}" @click="huxing(2)">四室（4）</div>
        </div>
        
        <div class="huxing">
          <scroll-view scroll-x="true" style="width: 100%" class="image-group">
            <div class="yishi" v-if="hxtab===1">
              <div class="dg_hx" v-for="(item, houselist) in housegengd" :key="houselist">
                <image :src="item.img7" class="yh-image" mode="scaleToFill"/>
                <div class="bt_s">
                  <h1>{{item.title}}</h1>
                  <h2>在售</h2>
                  <h3 v-for="(f, inds) in item.yshi" :key="inds">
                    <p v-if="inds<1">{{f.id}}</p>
                  </h3>
                  <div class="clear"></div>
                </div>
                <div class="jm"><span>{{item.building}}</span>/<span>{{item.orientation}}</span></div>
                <div class="price_s">约{{item.money}}万/套</div>
              </div>
            </div>

            <div class="yishi" v-else>
              <div class="dg_hx" v-for="(item, houselist) in housegengd" :key="houselist">
                <image :src="item.img7" class="yh-image" mode="scaleToFill"/>
                <div class="bt_s">
                  <h1>{{item.title}}</h1>
                  <h2>在售22</h2>
                  <h3 v-for="(f, inds) in item.yshi" :key="inds">
                    <p v-if="inds<1">{{f.id}}</p>
                  </h3>
                  <div class="clear"></div>
                </div>
                <div class="jm"><span>{{item.building}}</span>/<span>{{item.orientation}}</span></div>
                <div class="price_s">约{{item.money}}万/套</div>
              </div>
            </div>

           </scroll-view>
        </div>

      </div>
      <!-- 户型结束 -->

      <!-- 位置及周边配套开始 -->
      <div class="huxingda">
        <div class="hx_bt">
          <p>位置及周边配套</p>
        </div>
        <div class="map_img">
          <map id="map" :longitude="longitude" :latitude="latitude" :scale="14" :controls="controls" 
          bindcontroltap="controltap" :markers="markers" :bindmarkertap="markertap" :polyline="polyline"
          :bindregionchange="regionchange" show-location style="width: 100%; height: 220px;"
          :enable-scroll="false" :enable-zoom="false" @click="clickAdress"></map>
         </div>
      </div>
      <!-- 位置及周边配套结束 -->

      <!-- 置业顾问开始 -->
      <div class="huxingda">
        <div class="hx_bt">
          <p>置业顾问</p>
          <span>更多顾问</span>
          <div class="clear"></div>
        </div>
        <div class="fuwu">
          <p><image :src="mf1" mode="scaleToFill"/>全程免费</p>
          <p><image :src="mf2" mode="scaleToFill"/>专业服务</p>
          <p><image :src="mf3" mode="scaleToFill"/>区域解读</p>
          <p><image :src="mf4" mode="scaleToFill"/>户型分析</p>
          <div class="clear"></div>
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
                <p>服务用户{{item.service1}}次 • 总带看{{item.service2}}次</p>
              </div>
            </div>
            <div class="right_g"><image :src="item.img9" class="slide-image" mode="scaleToFill" /></div>

            <div class="pingjia" v-for="(item, pj) in item.pingjialist" :key="pj">
              <p v-if="pj<2">{{item.evaluate}}</p>
            </div>
          </div>

        </div>
         
      </div>
      <!-- 置业顾问结束 -->

      <!-- 楼盘动态开始 -->
      <div class="huxingda">
        <div class="hx_bt">
          <p>楼盘动态</p>
          <span>更多动态</span>
          <div class="clear"></div>
        </div>
        <div class="zixun">
          <ul>
            <li v-for="(item, index) in newsArr" :key="index">
              <h2>{{item.title}}</h2>
              <p>{{item.abstract}}</p>
              <span>{{item.timesj}}</span>
            </li>
          </ul>
        </div>
        
 
         
      </div>
      <!-- 楼盘动态结束 -->

      <!-- 猜你喜欢开始 -->
      <div class="huxingda">
        <div class="hx_bt">
          <p>猜你喜欢</p>
          <div class="clear"></div>
        </div>

        <div class="intention-nr">

        <div class="intention-mt" v-for="(item, index) in newslist" :key="index">
          <image :src="item.img7" class="new-image" mode="scaleToFill"/>
          <div class="intention-right">

            <div class="bt_ri">
              <h1>{{item.title}}</h1>
              <p>在售</p>
              <div class="clear"></div>
            </div>

            <div class="youshi" v-for="(f, inds) in item.advantage1" :key="inds">
              <div class="youshi2" v-if="inds<4">{{f.id}}</div>
            </div>
            <div class="clear"></div>

            <div class="m-x clear">
              <p class="money">{{item.price}}元/m²</p><p class="money1">建面{{item.price1}}元/平</p>
            </div>

          </div>
          <div class="clear"></div> 
        </div>
      </div>
        
      </div>
      <!-- 猜你喜欢结束 -->

    </div>
    <!-- 介绍结束 -->


    <!-- 底部按钮开始 -->
    <div class="footer">
      <div class="left_foot">
        <div class="guanzhus">
          <button class="gzdianji" @click="gz_dj" v-if="gztu_img==0" ><image :src="img10" /></button>
          <button class="gzxianshi" @click="gz_dj" v-else ><image :src="img12" /></button>
          <p>关注</p>          
        </div>

        <button open-type="share" class="fenxiangs">
          <image :src="img11" class="slide-image" />
          <p>分享</p>
        </button>
      </div>
      <div class="right_foot">
        <div class="Report">带看报备</div>
        <div class="Telephone">400电话</div>
      </div>
    </div>
    <!-- 底部按钮开始 -->








  </div>
</template>

<script>
export default {
  data () {
    return {
      ys_house: [
            { id:'VR看房'},
            { id:'特价好房'},
            { id:'小户型'},
            { id:'商业类'}
          ],
          price:5800,
          price1:120,
          price2:'90-120',
          opendate:"",
          typess: '别墅',
          housetype: '3居',
          structure: '板楼',
          img1: "/static/images/jt1.jpg",
          address:"",
          img2: "/static/images/bj.png",
          img3: "/static/images/kp.png",
          img10: "/static/images/gz.png",
          img11: "/static/images/fx.png",
          img12: "/static/images/xin.png",
          mf1:"/static/images/mf1.png",
          mf2:"/static/images/mf2.png",
          mf3:"/static/images/mf3.png",
          mf4:"/static/images/mf4.png",
          
          tabBar: [
                { "title": "VP" },
                { "title": "图片" }
            ],
          currentTab: 0,
          movies: [
                {img4: 'http://vip.yijienet.com/tt/img1.jpg'},
                {img4: 'http://vip.yijienet.com/tt/img1.jpg'}
          ],

          img5: 'http://vip.yijienet.com/tt/img1.jpg',
          img6: '/static/images/yh.png',
          housegengd: [
            {
              img7:'http://vip.yijienet.com/tt/img1.jpg',title:'三室两厅1厨2卫',
              yshi: [
                { id:'花园'},
                { id:'主卧带卫'}
              ],
              building:'建面120m²',orientation:'朝向南',money:150

              },
              {
              img7:'http://vip.yijienet.com/tt/img1.jpg',title:'三室两厅1厨2卫',
              yshi: [
                { id:'花园'},
                { id:'主卧带卫'}
              ],
              building:'建面120m²',orientation:'朝向南',money:150

              }
          ],
          guwenlists: [
            {
              img8:'http://vip.yijienet.com/tt/img1.jpg',name:'王先生',fraction:5,service1:400,service2:100,img9:'/static/images/zx.png',
              pingjialist: [
                {evaluate:'态度礼貌有亲和力'},
                {evaluate:'形象整洁'},
                {evaluate:'行程提前电联'}
              ],

            }
          ],
          newsArr: [
            {title:'周边环境介绍周边环境介绍',abstract:'周边环境介绍周边环境介绍周边环境介绍周边环境介绍周边环境介绍周边环境介绍周边环境介绍周边环境介绍',timesj:'2020年11月29日'}
          ],
          newslist: [
            { 
              img7:'http://vip.yijienet.com/tt/img1.jpg', title:'城投佳境',
              advantage1: [
                { id:'别墅'},
                { id:'小户型'},
                { id:'公交直达'},
                { id:'视频看房'}
              ],
              price:555, price1:6500,
            }

          ],
          hxtab:1,
          gztu_img:0,
          






    }
  },
 
  methods: {
         clickTab(e) {
             this.currentTab = e;
        },
        changeTab(e) {
             this.currentTab = e.mp.detail.current;
        },
        huxing(index){
          this.hxtab = index;
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

/* vr图片 */
.top {
   width:160rpx; height:40rpx; border-radius:40rpx; background: rgba(255, 255, 255, 0.404);
   text-align: center;
   line-height:40rpx; margin: 0 auto;
   white-space: nowrap;
   position: absolute;
   background: rgba(255, 255, 255, 0.596); top:420rpx; z-index: 99999999999; left: 40%;
 }
 .tabbar {
   width:80rpx;
   font-size:26rpx;
   height:40rpx;
   display: inline-block;
   color: #000;
 }
 .tabbar-bottom { width:80rpx; height:40rpx; line-height:40rpx; text-align: center; background: #2196f3; color: #fff; border-radius:40rpx; }
.swiper{ height:480rpx;}
.vrdajia{ height: 1200rpx;}
.vrda{ width: 100%; height: 1200rpx;}
.vr-image{ width: 100%; }




.newhousedetails{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 8%;  border-bottom:20rpx #efefef solid;}
.housedetails_name{ margin-top: 30rpx; clear: both; }
.housedetails_name h1{ font-size: 36rpx; font-weight: bold; float: left; margin-right: 10rpx;} 
.housedetails_name p{ font-size: 20rpx; padding:3rpx 8rpx; background: rgb(30, 129, 241); float: left; border-radius:6rpx; color: #fff; margin-top:10rpx;}
.advantage{ clear: both; margin-top:20rpx;}
.advantage div{ float: left; padding: 5rpx 10rpx; font-size: 20rpx; border:2rpx #ccc solid; color: #b8b8b8; border-radius:6rpx; margin-right:10rpx; margin-top:20rpx; }

.price{ width: 100%; clear: both;}
.lelf_p{ float: left; width:40%; margin-top:20rpx; margin-bottom: 20rpx;}
.lelf_p h2{ color: #b8b8b8; font-size:24rpx; }
.lelf_p .jiage{ font-size:28rpx; color: #d4553d; font-weight: 900; margin-top:6rpx;} 

.right_p{ float: right; width:40%; margin-top:20rpx; margin-bottom:20rpx;}
.right_p h2{ color: #b8b8b8; font-size:24rpx; margin-left: 10%; }
.right_p .jiage{ font-size:28rpx; color: #d4553d; font-weight: 900; margin-top:6rpx; margin-left: 10%;} 

.information{ width:100%;}
.information .shang{ clear: both;  }
.information .fl{ float: left; width:35%; color: #8d8c8c; font-size: 28rpx; margin-top: 10rpx; margin-bottom: 10rpx;  }
.information .fl span{ color: #000;}
.information .fr{ float: right;width:35%; color: #8d8c8c; font-size: 28rpx; margin-top: 10rpx; margin-bottom: 10rpx; }
.information .fr span{ color: #000;}
.information .bfb{ width: 100%; color: #8d8c8c; font-size: 28rpx; margin-top: 15rpx; margin-bottom: 15rpx;}
.information .bfb span{ color: #000;}
.information div p{ float: right; width:18rpx; height:30rpx;}

.anniu{ width: 100%; margin-top: 30rpx; }
.bjtz{ float: left; width: 45%; margin-right: 5%; background: #36a5f0; height: 80rpx; border-radius:6rpx; text-align: center; line-height: 80rpx;}
.bjtz image{ width:50rpx; height:44rpx; margin-top:16rpx; margin-right:12rpx;}
.bjtz span{ color: #fff; position: relative; top:-8rpx; }

.kptx{ float: right; width: 45%; margin-left: 5%; background: #f09936; height: 80rpx; border-radius:6rpx; text-align: center; line-height: 80rpx;}
.kptx image{ width:42rpx; height:50rpx; margin-top:16rpx; margin-right:12rpx;}
.kptx span{ color: #fff; position: relative; top:-16rpx;}



.Discount{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:5%;  border-bottom:20rpx #efefef solid;;}
.Discount p{ font-size:35rpx; font-weight: bold; }
.Discount image{ width:100%; height:120rpx; margin-top: 3%;}

.huxingda{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 8%;  border-bottom:20rpx #efefef solid;}
.hx_bt{ width:100%; clear: both;}
.hx_bt p{ float: left; font-size:35rpx; font-weight: bold;}
.hx_bt span{ float: right; font-size:25rpx;}

 
.image-group { display: flex; white-space: nowrap; margin-top:10rpx;}

.huxingqh{display: flex; flex-direction: row; margin-top: 5%;}
.bthx{ font-size: 30rpx; margin-right: 3%;}
.selected{ color:rgb(39, 151, 226); font-weight: 700; }
.huxing{ width: 100%;}
.dg_hx{ margin-right:6%; width:70%; margin-top: 3%; height:450rpx;display: inline-block; }
.dg_hx image{ width:100%;height:300rpx;}
.dg_hx .bt_s{ clear: both; margin-top: 3%;}
.dg_hx .bt_s h1{ float: left; font-size: 30rpx; font-weight: 900; margin-right: 2%;}
.dg_hx .bt_s h2{ float: left; font-size: 22rpx; color: #fff; background: #2196f3; padding: 3rpx 5rpx; border-radius:4rpx; margin-right: 3%;margin-top: 1%;}
.dg_hx .bt_s h3{ float: left;margin-top: 1%; }
.dg_hx .bt_s h3 p{ float: left; font-size: 22rpx; border-radius:4rpx; border:2rpx #ccc solid; width:50rpx; margin-right:1%; text-align: center;}
.dg_hx .jm{ font-size: 27rpx; margin-top:2%;} 
.dg_hx .price_s{ color: #f16160; font-size:28rpx; margin-top: 2%; font-weight: 800;}


.map{background: rgba(255,255,255,0.8);padding: 20rpx;margin-top: 25rpx;
    box-sizing: border-box;border-radius: 10rpx;position: relative;top: -50rpx;}
.map_img{width:100%; margin-bottom: 50rpx; margin-top: 3%;}
.map_img>image{width: 100%;height: 100%; margin-top: 3%;}


.fuwu{ width:100%; margin-top: 3%;}
.fuwu image{ width:28rpx; height:28rpx; margin-right:3%; display: block; margin-top: 3%; float: left;  }
.fuwu p{ float: left; width: 25%; font-size: 25rpx; color: #969ca8; position: relative; top: -28%;}


.guwen{ width:100%; margin-top:5%;}
.guwen_list{ width: 100%; margin-top:2%; overflow: hidden;}
.left_g{ float: left; width:85%;}
.left_g image{ float: left; width:120rpx; height:120rpx; border-radius: 50%; margin-right: 2%;}
.neirong{ float: left; width:70%; margin-top:3%; }
.neirong div h1{float: left; font-size:36rpx; font-weight: bold; margin-right:10rpx; }
.neirong div span{ float: left; font-size:26rpx; padding:1rpx 2rpx; border:2rpx #f86577 solid; color: #f86577; text-align: center; border-radius:6rpx;}
.neirong p{ font-size:28rpx; color: #969ca8; margin-top: 2%;}

.pingjia{ margin-top:1%; font-size:24rpx; margin-top: 5%; margin-left:18%;}
.pingjia p{ float: left; padding: 3rpx 6rpx 3rpx 6rpx; border-radius:4rpx; margin-right: 2%; background: #f1f1f1; color: #969ca8;}

.right_g{ float: right; margin-top:8%;}
.right_g image{ width:50rpx; height:50rpx;}


.zixun{ width:100%; margin-top:5%;}
.zixun ul li{ margin-top: 2%;}
.zixun ul li h2{ font-size:30rpx; }
.zixun ul li p{ font-size: 27rpx; line-height:42rpx; margin-top:2%;}
.zixun ul li span{ font-size: 25rpx; color: #ccc;}



.intention-nr{ width:100%; margin-top:30rpx;}

.intention-mt{ padding-bottom:30rpx; border-bottom:2rpx rgb(236, 236, 236) solid; margin-top:30rpx;}
.intention-nr image{ float: left; width:30%; height:150rpx; border-radius:10rpx;}
.intention-nr .intention-right{ float:right; width:67%; }
.intention-nr .intention-right .bt_ri h1{ float: left; font-size: 30rpx; font-weight: bold; margin-right:4rpx;}
.intention-nr .intention-right .bt_ri p{ float: right; width:60rpx; height:30rpx; line-height: 30rpx; background: #0a8de4; text-align: center; font-size: 20rpx;  margin-right:10rpx; color: #fff; border-radius: 3px;}
.youshi2{ float: left; padding: 3rpx 8rpx 3rpx 8rpx; border-radius:6rpx; border:2rpx #f4f4f4 solid; color:#979799; font-size: 22rpx; text-align: center; margin-top:15rpx; margin-right: 10rpx;}
.m-x{ margin-top: 15rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 30rpx; color:#df573d; font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:24rpx; color:#ccc; margin-top: 10rpx; }


.footer{ width:97%; height: 120rpx; background: #fff;position: fixed;bottom: 0; padding-left:3%;}
.left_foot{ float: left; width:27%;height: 120rpx;}

.left_foot .guanzhus{ float: left; width:50%; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot .guanzhus image{ width:36rpx; height:36rpx;}
.left_foot .guanzhus p{ font-size: 26rpx; color: #000; position: relative; top:-24rpx; left:22%;}
 


.left_foot .fenxiangs{ float: left; width:50%; height:50rpx; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important;}
.left_foot button::after{border: none; padding: 0 !important;}
.left_foot .fenxiangs image{ width:36rpx; height:36rpx;}
.left_foot .fenxiangs p{ font-size: 26rpx; color: #000; position: relative; top: -40rpx;}

.right_foot{ float: right; width:70%; margin-top:14rpx;}
.Report{ float: left; width: 45%; background: #3dc28e; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius: 5px; color: #fff; margin-right: 5%;}
.Telephone{ float: right; width: 45%; background: #2e72f1; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}
</style>
