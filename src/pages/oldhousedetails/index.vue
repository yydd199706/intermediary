<template>
  <div class="indexstyle">


    <!-- 图片轮播 -->
    <div class="lunbo">
      <swiper class="swiper" @change="djimg" >
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="domain+item.imgurl" class="slide-image" mode="scaleToFill"/>
          </swiper-item>
        </block>
      </swiper>
      
      <div class="lbvr" v-if="isshowvr == 1 ? true : false">
        <image :src="img_vr" />
      </div>

      <div class="imageCount">{{current+1}}/{{movies.length}}</div>
    </div>
    <!-- 图片轮播 -->




    <!-- 二手房信息开始 -->
    <div class="ershou">
      <div>
        <div class="features">
            <p>{{Decorationname}}</p>
            <p>{{looktime}}</p>
        </div>
        <div class="moredj" @click="priceNotice"><image :src="bjimg" /><span>变价提醒</span></div>
      </div>
      <div class="biaoti">{{title}}</div> 
      <div class="mianji">
          <div class="lelf_mj">
            <h1>{{price}}万</h1>
            <p>售价</p>
          </div>
          <div class="center_mj">
            <h1>{{apirlroom}}室{{apirloffice}}厅{{apirltoilet}}卫</h1>
            <p>户型</p>
          </div>
          <div class="right_mj">
            <h1>{{area}}m²</h1>
            <p>建筑面积</p>
          </div>
      </div>
      <div class="xinxi">
          <ul>
            <li>单价：<span>{{averageprice}}元/m²</span></li>
            <li>建筑年份：<span>{{buildyear}}</span></li>
            <li>楼层：<span>{{floor}}</span></li>
            <li>总层数：<span>{{floorcount}}</span></li>
            <li>看房时间：<span>{{looktime}}</span></li>
            <li>租期：<span>{{Termname}}</span></li>
            <li>房屋朝向：<span>{{Towardname}}</span></li>
            <li>建筑类型：<span>{{Propertyname}}</span></li>
            <li>区域：<span>{{Zonename}}</span></li>
            <li>装修情况：<span>{{Decorationname}}</span></li>
            <li>产权类型：<span>{{Rightnaturename}}</span></li>
          </ul>
          <div><p>楼盘名称：<span>{{projectname}}</span></p><image :src="rootImg1" class="slide-image" mode="scaleToFill"/></div>
          <div><p>地址：<span>{{address}}</span></p></div>
          <div><p>房源配套：<span>{{Supportingname}}</span></p></div>
          <div><p>房源特色：<span>{{Specialname}}</span></p></div>
      </div>

    </div>
    <!-- 二手房信息结束 -->

    <!-- 评价分类开始 -->
    <div class="pingjia">
      <div class="hx_bt">
        <p>房源评价</p>
      </div>

      <div class="anniu">
          <scroll-view scroll-x class="top">
              <div class="an_qh" :class="{'tabbar-bottom':currentTab==index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)" >
                  <div v-if="currentTab==index"><image :src="item.img2" class="slide-image" mode="scaleToFill"/></div>
                  <div v-else><image :src="item.img1" class="slide-image" mode="scaleToFill"/></div>
                  <p>{{item.title}}</p>
              </div>
          </scroll-view>
          <swiper :current="currentTab" @change="changeTab">
            <swiper-item>
            <div class="neir">核心卖点核心卖点核心卖点核心卖点核心卖点核心卖点</div>
            </swiper-item>
            <swiper-item>
            <div class="neir">核心卖点核心卖点核心卖点核心卖点核心卖点核心卖点</div>
            </swiper-item>
          </swiper>

      </div>

    </div>
    <!-- 评价分类结束 -->


    <!-- 推荐经纪人开始 -->
    <div class="jingjiren" v-if="agent.length > 0 ? true : false">
      <div class="hx_bt">
        <p>推荐经纪人</p>
        <span>查看更多</span>
      </div>

      <div class="guwen">

          <div class="guwen_list" v-for="(item, index) in agent" :key="index">
            <div class="left_g">
              <image :src="domain+item.headpic" class="slide-image" mode="scaleToFill"/>
              <div class="neirong">
                <div>
                  <h1>{{item.realname}}</h1>
                  <span>{{item.companyname}}</span>
                  <div class="clear"></div>
                </div>
                <p>{{item.evaluation}}</p>
              </div>
            </div>
            <div class="right_g">
              <p class="wxl"><image :src="img9" class="slide-image" mode="scaleToFill" /></p>
              <p class="dhr"><image :src="img10s" class="slide-image" mode="scaleToFill" /></p>
            </div>
          </div>

        </div>

    </div>
    <!-- 推荐经纪人结束 -->


    <!-- 猜你喜欢开始 -->
    <div class="jingjiren" v-if="likes.length > 0 ? true : false">
      <div class="hx_bt">
        <p>猜你喜欢</p>
        <span>查看更多</span>
      </div>

      <div class="xihuan">
        <scroll-view scroll-x="true" style="width: 100%" class="image-group">
          <div class="likelist" v-for="(item, cai) in likes" :key="cai">
            <div class="tupian_l">
              <image :src="domain+item.Imgurl" mode="scaleToFill"/>
              <div class="guanzhu" v-if="gznum > 0 ? true : false">{{item.gznum}}人关注</div>
            </div>
            <div class="wenzi_r">
              <h1>{{item.title}}</h1>
              <div class="ys_kuai">
                <p>{{item.Decorationname}}</p>
                <p>{{item.looktime}}</p>
                <p>{{item.Towardname}}</p>
              </div><div class="clear"></div>
              <div class="jiaqian"><span class="jq1">{{item.price}}万</span><span class="jq2">{{item.averageprice}}元/平</span></div>
            </div>
          </div>
              
        </scroll-view>
      </div>
 

    </div>
    <!-- 猜你喜欢结束 -->


    <!-- 位置及周边配套开始 -->
    <div class="jingjiren">
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


    <!-- 小区项目信息开始 -->
    <div class="Projectks">
      <div class="k1">
          <div class="hx_bt">
            <p>小区项目信息</p>
            <span>小区详情 ></span>
          </div>
          <div class="xiangmu">
            <div class="l_xiangmu">
              <h1>参考均价：<span>{{averagepriceXq}}元/平</span></h1>
              <p>房屋总数：{{housecount}}户</p>
              <p>已售套数：{{soldcount==""||soldcount==null?'暂无信息':soldcount}}</p>
              <p>土地使用年限：{{landyear}}年</p>
              
            </div>
            <div class="r_xiangmu">
              <image :src="domain+ImgUrl" class="slide-image" />
            </div>
          </div>
      </div>

      <div class="k2" v-if="chengjiao.length > 0 ? true : false">
          <div class="hx_bt1">
            <p>同小区成交（{{cj_num}}）</p>
            <span>更多成交 ></span>
          </div>
          <div class="chengjiao_list">
            <ul>
              <li v-for="(item, cj) in chengjiao" :key="cj">
                <div class="cj_le">
                  <h2><span class="quan"></span><span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirltoilet}}卫</span>/<span>{{item.area}}平米</span>/<span>{{item.Towardname}}</span></h2>
                  <p><span>单价{{item.averageprice}}元/平</span>，<span>{{item.chengj5}}成交</span></p>
                </div>
                <div class="cj_ri">{{item.price}}万</div>
              </li>
            </ul>
          </div>
      </div>


      <div class="k2" v-if="fangyuan.length > 0 ? true : false">
          <div class="hx_bt1">
            <p>同小区房源</p>
            <span>查看更多</span>
          </div>
          <div class="fangyuan_list">
            <scroll-view scroll-x="true" style="width: 100%" class="image-group">
              <div class="fang_list" v-for="(item, fy) in fangyuan" :key="fy">
                <image :src="domain+item.Imgurl" class="slide-image" />
                <h3><span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirltoilet}}卫</span>/<span>{{item.area}}m²</span>/<span>{{item.Towardname}}</span></h3>
                <p><span class="dj1">{{item.price}}万元</span><span class="dj2">{{item.averageprice}}元/平</span></p>
              </div>
            </scroll-view>
          </div>
      </div>

     </div>
    <!-- 小区项目信息结束 -->


    <!-- 推荐房源开始 -->
    <div class="jingjiren">
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
          <button class="gzdianji" @click="gz_dj" v-if="gztu_img==0" ><image :src="img10" /></button>
          <button class="gzxianshi" @click="gz_dj" v-else ><image :src="img12" /></button>
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
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      domain:null,
      Decorationname:"",
      looktime:"",
      title:"",
      price:"",
      averageprice:"",
      area:"",
      projectname:"",
      buildyear:"",
      apirlroom:"",
      apirloffice:"",
      apirltoilet:"",
      floor:"",
      floorcount:"",
      address:"",
      Termname:"",
      Towardname:"",
      Propertyname:"",
      Zonename:"",
      Towardname:"",
      Rightnaturename:"",
      Supportingname:"",
      Specialname:"",
      bjimg: app.globalData.imgurl +"tx.png",
      rootImg1: app.globalData.imgurl +"jt1.jpg",
      img9: app.globalData.imgurl +"wx.png",
      img10s: app.globalData.imgurl +"dh.png",
      agent: [],
      likes: [],
      tabBar: [
          {img1: app.globalData.imgurl +'an1.png',img2: app.globalData.imgurl +'an1s.png',title:'核心卖点'},
          {img1: app.globalData.imgurl +'an1.png',img2: app.globalData.imgurl +'an1s.png',title:'小区介绍'},
          {img1: app.globalData.imgurl +'an1.png',img2: app.globalData.imgurl +'an1s.png',title:'适宜人群'},
          {img1: app.globalData.imgurl +'an1.png',img2: app.globalData.imgurl +'an1s.png',title:'周边配套'},
          {img1: app.globalData.imgurl +'an1.png',img2: app.globalData.imgurl +'an1s.png',title:'费用介绍'},
          {img1: app.globalData.imgurl +'an1.png',img2: app.globalData.imgurl +'an1s.png',title:'交通出行'},
      ],
      currentTab: 0,
      movies: [],
      isshowvr:"",
      img_vr: app.globalData.imgurl +"VR.png",
      current: 0,
      averagepriceXq:"",
      housecount:"",
      soldcount:"",
      landyear:"",
      ImgUrl:"",
      chengjiao:[],
      fangyuan:[],
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
      img10: app.globalData.imgurl +"gz.png",
      img12: app.globalData.imgurl +"xin.png",
      img13: app.globalData.imgurl +"fx.png",
      img14: app.globalData.imgurl +"yy.png",
      gztu_img:0,

    }
  },
  onLoad(option) {
    const that = this;
    that.domain=app.globalData.domain;
    console.log(option)
      //获取详情
      wx.request({
        url:app.globalData.url +"OldHouse/BandEsfInfo" +"?sessionKey=" +app.globalData.sessionKey+'&houseid=' + option.id,
        success: function (res) {
          let patient = res.data
          console.log('详情',res);
          //房源轮播图
          that.movies = res.data.Context.carousel;
          that.isshowvr = res.data.Context.houseInfo.isshowvr;
          //房源基本信息详情
          that.title = res.data.Context.houseInfo.title;
          that.price = res.data.Context.houseInfo.price;
          that.averageprice = res.data.Context.houseInfo.averageprice;
          that.area = res.data.Context.houseInfo.area;
          that.projectname = res.data.Context.houseInfo.projectname;
          that.buildyear = res.data.Context.houseInfo.buildyear;
          that.apirlroom = res.data.Context.houseInfo.apirlroom;
          that.apirloffice = res.data.Context.houseInfo.apirloffice;
          that.apirltoilet = res.data.Context.houseInfo.apirltoilet;
          that.floor = res.data.Context.houseInfo.floor;
          that.floorcount = res.data.Context.houseInfo.floorcount;
          that.address = res.data.Context.houseInfo.address;
          that.looktime = res.data.Context.houseInfo.looktime;
          that.Termname = res.data.Context.houseInfo.Termname;
          that.Towardname = res.data.Context.houseInfo.Towardname;
          that.Propertyname = res.data.Context.houseInfo.Propertyname;
          that.Zonename = res.data.Context.houseInfo.Zonename;
          that.Decorationname = res.data.Context.houseInfo.Decorationname;
          that.Towardname = res.data.Context.houseInfo.Towardname;
          that.Rightnaturename = res.data.Context.houseInfo.Rightnaturename;
          that.Supportingname = res.data.Context.houseInfo.Supportingname;
          that.Specialname = res.data.Context.houseInfo.Specialname;
          //推荐经纪人
          that.agent = res.data.Context.agent;
          //猜你喜欢
          that.likes = res.data.Context.guessLike;
          //小区项目信息
          that.averagepriceXq = res.data.Context.project.averageprice;
          that.housecount = res.data.Context.project.housecount;
          that.soldcount = res.data.Context.project.soldcount;
          that.landyear = res.data.Context.project.landyear;
          that.ImgUrl = res.data.Context.project.ImgUrl;
          //同小区成交
          that.chengjiao = res.data.Context.deal;
          //同小区房源
          that.fangyuan = res.data.Context.sameDistrict;
 
          
          
        },
     
        fail: function (res) {},
      });

  },
 



  methods: {
    //图片轮播切换
    clickTab(e) {
      this.currentTab = e;
    },
    changeTab(e) {
      this.currentTab = e.mp.detail.current;
    },
    djimg(e) {
      this.current = e.target.current;
    },
    //底部关注
    gz_dj(){
      if(this.gztu_img==1){
        this.gztu_img=0;
      }else{
        this.gztu_img=1;
      }
    },

        

 
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


.lunbo{ width: 100%; height: 500rpx; position: relative;}
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
  position:absolute;
  left:80%;
  bottom:30rpx;
}
.lbvr{ position: absolute; left:40%; top:200rpx; z-index: 999999;}
.lbvr image{ width:130rpx; height:130rpx;}






.ershou{ width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; border-bottom:20rpx #efefef solid;}
.ershou div{overflow: hidden;}
.features{ float: left;}
.features p{float: left; font-size: 26rpx; padding: 2rpx 10rpx 2rpx 10rpx; background: #edf0f3; color: #849aae; margin-right:6rpx; border-radius:6rpx;}

/* .features{ float: left;}
.features>div {float: left; font-size: 24rpx; padding: 2rpx 10rpx 2rpx 10rpx; background: #edf0f3; color: #849aae; margin-right:6rpx; border-radius:6rpx;} */

.moredj{float: right;font-size: 24rpx;}
.moredj image{ width:33rpx; height:37rpx; margin-right:10rpx;}
.moredj span{ position: relative; top: -10rpx;}
.biaoti{ font-size:43rpx; font-weight: bold; margin-top:1%; }
.mianji{ overflow: hidden; margin-top:3%; }
.lelf_mj{ float: left; width: 26%; border-right: 1px rgb(235, 235, 235) solid;}
.center_mj{ float: left; width:40%; border-right: 1px rgb(235, 235, 235)  solid; margin-left:4%;}
.right_mj{ float: right; width:22%; margin-left:4%;}
.lelf_mj h1,.center_mj h1,.right_mj h1{ color: #fa5741; font-size: 38rpx; font-weight: bold; }
.lelf_mj p,.center_mj p,.right_mj p{ color: #a7a7a7; font-size: 26rpx;}

.xinxi{ margin-top: 3%; padding-bottom:40rpx;}
.xinxi ul{ overflow: hidden;}
.xinxi ul li{ float: left; width: 50%; font-size:30rpx; color: rgb(160, 160, 160); line-height:65rpx;}
.xinxi ul li span{ color: #000;}
.xinxi div{ font-size:30rpx; color: rgb(160, 160, 160); height: 65rpx; line-height:65rpx; width: 100% !important; overflow: hidden;}
.xinxi div P{ float: left; width: 70%;}
.xinxi div span{ color: #000;}
.xinxi div image{ float: right; width:18rpx; height:30rpx; position: relative; top: -50rpx;}


.pingjia{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.hx_bt{ width:100%; overflow: hidden;}
.hx_bt p{ float: left; font-size:35rpx; font-weight: bold;}
.hx_bt span{ float: right; font-size:25rpx;}



.jingjiren{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:20rpx; border-bottom:20rpx #efefef solid;}
.guwen{ width:100%; margin-top:5%;}
.guwen_list{ width: 100%; margin-top:2%; overflow: hidden; margin-bottom:30rpx;}

.left_g{ float: left; width:75%;}
.left_g image{ float: left; width:110rpx; height:110rpx; border-radius: 50%; margin-right: 2%;}
.neirong{ float: left; width:70%; margin-top: 2%; }
.neirong div h1{float: left; font-size:32rpx; font-weight: bold; margin-right:10rpx; }
.neirong div span{ float: left; font-size: 22rpx; padding:1rpx 2rpx 1rpx 2rpx; border:2rpx #f86577 solid; color: #f86577; text-align: center; border-radius:6rpx; }
.neirong p{ font-size: 27rpx; color: #969ca8; margin-top:2%;}

.right_g{ float: right; margin-top:20rpx; width: 25%; overflow: hidden;}
.right_g p.wxl{ float: left;}
.right_g p.dhr{ float: right ;}
.right_g image{ width:60rpx; height:60rpx;}



 
.image-group {
  display: flex;
  white-space: nowrap;
  margin-top:10rpx;
}
.likelist{ overflow: hidden; margin-top: 5%;margin-right:6%; width:80%; height:160rpx;display: inline-block;}
.tupian_l{ float: left;width:30%;}
.tupian_l image{ width:100%; height: 150rpx;}
.tupian_l .guanzhu{ width: 100%; height:40rpx; background:rgba(20, 20, 20, 0.616); text-align: center; line-height:40rpx; position: relative; top: -40rpx; color: #fff; font-size: 24rpx;}
.wenzi_r{ float: right; width: 65%;}
.wenzi_r h1{ font-size:32rpx; font-weight: bold;}
.ys_kuai{ width:100%; margin-top: 3%; }
.ys_kuai p{font-size: 24rpx; padding: 2rpx 5rpx 2rpx 5rpx;  background: #edf0f3; color: #849aae; margin-right:6rpx; border-radius:6rpx; margin-right:6rpx; float: left;}
.wenzi_r .jiaqian{ margin-top: 3%;}
.wenzi_r .jiaqian span.jq1{ font-size: 32rpx; color: #fa5741; margin-right:20rpx; font-weight: bold;}
.wenzi_r .jiaqian span.jq2{ font-size:26rpx; color: #9e9e9e; }



.map{background: rgba(255,255,255,0.8);padding: 20rpx;margin-top: 25rpx;
    box-sizing: border-box;border-radius: 10rpx;position: relative;top: -50rpx;}
.map_img{width:100%; margin-bottom: 50rpx; margin-top: 3%;}
.map_img>image{width: 100%;height: 100%; margin-top: 3%;}



.anniu{ width: 100%; margin-top:20rpx;}
.top {width: 100%; line-height:84rpx;white-space: nowrap;position: relative;background: #fff; overflow: hidden; }
.an_qh{ width:180rpx; height:160rpx; background: rgb(231, 231, 231);color: #000; display: inline-block; margin-right:20rpx; border-radius:10rpx;}
.an_qh image{width:50rpx; height:50rpx; margin: 0 auto; display: block; margin-top:18%;}
.an_qh p{font-size:26rpx; line-height:60rpx; text-align: center;}
.tabbar-bottom { width:180rpx; height:160rpx; background:#2e72f1;color: #fff;}
.neir{ font-size: 26rpx; margin-top:20rpx; height:300rpx; overflow: hidden;}
.anniu swiper{ height:80rpx !important;} 


.Projectks{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.k1{padding-bottom:30rpx; border-bottom: 1px rgb(235, 235, 235) solid; }
.xiangmu{ margin-top:5%; overflow: hidden; }
.l_xiangmu{ float: left; width:60%;}
.l_xiangmu h1{ font-size: 32rpx; font-weight: bold; margin-bottom: 5%;}
.l_xiangmu h1 span{ color: rgb(218, 0, 0);}
.l_xiangmu p{ line-height:40rpx; color: rgb(124, 124, 124); font-size:28rpx;}
.r_xiangmu{ width: 40%; float: right;}
.r_xiangmu image{ width: 100%; height:200rpx;}

.k2{padding-bottom:30rpx;margin-top: 5%; border-bottom: 1px rgb(235, 235, 235) solid; }
.hx_bt1{ width:100%; overflow: hidden;}
.hx_bt1 p{ float: left; font-size:32rpx; font-weight: bold; }
.hx_bt1 span{ float: right; font-size:24rpx;}
.chengjiao_list{  margin-top: 5%; border-left: 2rpx #e4e4e4 solid; }
.chengjiao_list ul{width: 100%;overflow: hidden; position: relative; left:-12rpx; }
.chengjiao_list ul li{ overflow: hidden; margin-bottom:40rpx; }
.chengjiao_list ul li .cj_le{ width:80%; float: left;}
.chengjiao_list ul li .cj_le h2{ font-size: 31rpx; line-height: 28rpx;}
.quan{ width: 20rpx; height: 20rpx; background: #e4e4e4; display: inline-block; position: relative; top: -6rpx;  z-index: 9999; margin-right: 20rpx; border-radius:30rpx;}
.chengjiao_list ul li .cj_le p{ font-size:28rpx; color: rgb(131, 131, 131); margin-top: 10rpx; margin-left:42rpx;}
.cj_ri{ float: right; font-size: 34rpx; font-weight: bold; color: rgb(233, 39, 39);}



.k3{ margin-top: 5%;}
.fangyuan_list{ width: 100%; margin-top: 5%;}
.fang_list{ overflow: hidden; margin-right:6%; width:58%; margin-right: 5%; height:380rpx;display: inline-block;}
.fang_list image{ width: 100%; height: 260rpx;}
.fang_list h3{ font-size: 30rpx; margin-top: 3%;}
.fang_list p{ font-size: 26rpx; margin-top: 3%;}
.fang_list p span.dj1{ font-size: 30rpx; font-weight: bold; color: rgb(253, 27, 27); margin-right: 2%;}
.fang_list p span.dj2{ font-size: 27rpx; color: rgb(146, 146, 146);}


/* 推荐房源 */
.house-s{width:100%; background: #fff; margin: 0 auto; height:380rpx; padding-top:40rpx; margin-bottom:20rpx;}
.nr-house{ width:100%;  margin-top:30rpx; padding-bottom: 110rpx;}
.nr-house image{ float: left; width: 40%; height: 180rpx;}
.nr-house .r_wz{ float:right; width: 57%;}
.nr-house .r_wz .bt_s{font-size: 34rpx; font-weight: bold; margin-right:10rpx;}
.jieshao{ font-size: 26rpx; color: #000; margin-top:10rpx;}
.youshi1{ float: left; width:90rpx; height:40rpx; line-height: 40rpx; border-radius:6rpx; background: #edf0f3; color:#849aae; font-size: 25rpx; text-align: center; margin-top:10rpx; margin-right: 10rpx;}
.m-x{ margin-top: 10rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color: rgb(192, 0, 0); font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:#ccc; margin-top: 10rpx; }



.footer{ width: 100%; height: 130rpx; background: #fff;position: fixed;bottom: 0; z-index: 9999;}
.left_foot{ float: left; width:39%;height: 120rpx; margin-top:10rpx; margin-right:3%; margin-left: 3%;}

.left_foot .guanzhus{ float: left; width:33.3%; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot .guanzhus image{ width:36rpx; height:36rpx;}
.left_foot .guanzhus p{ font-size: 26rpx; color: #000; position: relative; top:-24rpx; left:22%;}
 


.left_foot .fenxiangs{ float: left; width:33.3%; height:50rpx; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; background:none;}
.left_foot button::after{border: none; padding: 0 !important;}
.left_foot .fenxiangs image{ width:36rpx; height:36rpx;}
.left_foot .fenxiangs p{ font-size: 26rpx; color: #000; position: relative; top: -37rpx;}




.right_foot{ float: right; width:55%; margin-top:22rpx;}
.Report{ float: left; width: 45%; background: #3dc28e; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius: 10rpx; color: #fff; margin-right: 5%;}
.Telephone{ float: right; width: 45%; background: #2e72f1; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}




 </style>
