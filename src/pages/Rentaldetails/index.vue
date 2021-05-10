<template>
  <div class="indexstyle">

    <!-- 图片轮播 -->
    <div class="lunbo">
      <swiper class="swiper" @change="djimg" >
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image v-if="domain" :src="domain+item.imgurl" class="slide-image" mode="scaleToFill" @click="previewImg(pro,$event)" 
            :data-src="domain+item.imgurl"/>
          </swiper-item>
        </block>
      </swiper>
      <div class="lbvr" v-if="isshowvr == 1 ? true : false">
        <image :src="bf" />
      </div>
      <div class="imageCount">{{currentimg+1}}/{{movies.length}}</div>
    </div>
    <!-- 图片轮播 -->




    <!-- 租房信息开始 -->
    <div class="zfdetails" v-if="houseInfo">
      <div class="btjq">
        <h1><span>{{houseInfo.rent==""||houseInfo.rent==null?'价格待定':houseInfo.rent+'元/月'}}</span></h1>
        <p @click="moreDetails(index,$event)" :data-id="houseInfo.id">点击详情</p>
      </div>
      <h2>{{houseInfo.title}}</h2>
      <div class="jieshao">
        <ul>
          <li>
            <h3>{{houseInfo.Towardname}}</h3>
            <p>朝向</p>
          </li>
          <li>
            <h3>{{houseInfo.area}}m²</h3>
            <p>面积</p>
          </li>
          <li>
            <h3>{{houseInfo.floor}}层</h3>
            <p>楼层</p>
          </li>
          <li>
            <h3>{{houseInfo.Termname}}</h3>
            <p>租期</p>
          </li>
        </ul>
      </div>
      <div class="zf_ys">
        <p>{{houseInfo.Decorationname}}</p>
        <p>{{houseInfo.Zonename}}</p>
        <p>{{houseInfo.Rightnaturename}}</p>
        <p>{{houseInfo.companyname}}</p>
        <p>{{houseInfo.Propertyname}}</p>
      </div>

      <div class="information">
         <div class="bfb" @click="clickAdress">
            <div class="xq_l">地址</div>
            <span class="maohao">：</span>
            <div class="xq_rs">{{houseInfo.address}}</div>
            <p>></p>
         </div>
         <div class="bfb" @click="moreDetails(index,$event)" :data-id="houseInfo.id">
            <div class="xq_l">更多</div>
            <span class="maohao">：</span>
            <div class="xq_rs">{{houseInfo.Specialname}}</div>
            <p>></p>
         </div>
      </div>
 
    </div>
    <!-- 租房信息结束 -->


    <!-- 房源简介开始 -->
    <div class="introduction">
      <div class="fyhx_bt">
        <p>房源简介</p>
      </div>

      <div class="fyjieshao">
        <ul>
          <li v-for="(item, fay) in fangyuanlist" :key="fay">
            <div>
              <image :src='[item.isshow==1?item.img1:item.img2]' class="slide-image" />
              <p :class='[item.isshow==1?"words":"words_s"]'>{{item.name}}</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <!-- 房源简介结束 -->


    <!-- 费用详情开始 -->
    <div class="cost" v-if="feiyongList.length > 0 ? true:false">
      <div class="hx_bt">
        <p>费用详情</p>
      </div>
      <div class="feiyong" v-for="(item, index) in feiyongList" :key="index">
        <h2>{{item.Name}}</h2>
        <h3>{{item.explain}}</h3>
      </div>

    </div>
    <!-- 费用详情结束 -->


    <!-- 推荐经纪人开始 -->
    <div class="agent" v-if="agentlist.length > 0 ? true:false">
      <div class="hx_bt">
        <p>推荐经纪人</p>
        <span @click="agentlists">查看更多</span>
      </div>
      
      <div class="guwen">
          <div class="guwen_list" v-for="(item, index) in agentlist" :key="index" >
            <div class="left_g" @click="agentInfo(index,$event)" :data-id="item.id">
              <image v-if="domain" :src="domain+item.headpic" class="slide-image" mode="scaleToFill"/>
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
              <!-- <p class="wxl"><image :src="img9" class="slide-image" mode="scaleToFill" :data-wxid="item.wxid==''?item.mobile:item.wxid"
                  @click="wxhcopy(index,$event)" /></p> -->
              <p class="wxl"><image :src="img9" class="slide-image" mode="scaleToFill" @click="chatClick(index,$event)" /></p>
              <p class="dhr"><image :src="img10s" class="slide-image" mode="scaleToFill" :data-telphone="item.mobile" @click="telphoneClick(index,$event)" /></p>
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
      <div class="map_img" v-if="location">
        <map id="map" :longitude="location.lng" :latitude="location.lat" :scale="14" :controls="controls" bindcontroltap="controltap" :markers="markers" :bindmarkertap="markertap" :polyline="polyline" :bindregionchange="regionchange" show-location style="width: 100%; height: 220px;" :enable-scroll="false" :enable-zoom="false" @click="clickAdress"></map>
      </div>

    </div>
    <!-- 位置及周边地图结束 -->


    <!-- 同小区房源开始 -->
    <div class="ditu" v-if="sameDistrict.length > 0 ? true:false">
      <div class="hx_bt">
        <p>同小区房源</p>
        <span @click="sameClick">查看更多</span>
      </div>

      <div class="houseyuan_list">
        <scroll-view scroll-x="true" style="width: 100%" class="image-group">
          <div class="fangy_list" v-for="(item, index) in sameDistrict" :key="index" @click="SameDistrictclick(index,$event)" :data-id="item.id">
            <image v-if="domain" :src="domain+item.Imgurl" class="slide-image" />
            <h3><span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirltoilet}}卫</span>/<span>{{item.area}}m²</span>/<span>{{item.Towardname}}</span></h3>
            <p><span class="dj1">{{item.rent==""||item.rent==null?'价格待定':item.rent+'元/月'}}</span></p>
          </div>
        </scroll-view>
      </div>
      
    </div>
    <!-- 同小区房源结束 -->


    <!-- 推荐房源开始 -->
    <div class="recommendfy" v-if="recommended.length > 0 ? true:false">
      <div class="hx_bt">
        <p>推荐房源</p>
      </div>

      <div class="nr-house">
        <div class="h-mt" v-for="(item, index) in recommended" :key="index" @click="SameDistrictclick(index,$event)" :data-id="item.id">
          <image v-if="domain" :src="domain+item.Imgurl" class="new-image" mode="scaleToFill" />
          <div class="r_wz">
            <div class="bt_s">{{item.title}}</div>
            <div class="jieshaot">
              <span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirloffice}}卫</span>/<span>{{item.area}}m²</span>/
              <span>{{item.Towardname}}</span>
            </div>
            <div class="youshi">
              <div class="youshi1">{{item.Decorationname}}</div>
              <div class="youshi1">{{item.Propertyname}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x">
              <p class="money">{{item.rent==""||item.rent==null||item.rent==0?'价格待定':item.rent+'元/月'}}</p>
            </div>
          </div>
        </div>
      </div>
 

    </div>
    <!-- 推荐房源结束 -->



    <!-- 底部按钮开始 -->
    <div class="footer">
      <div class="left_foot">
        <div class="guanzhus">
          <button @click="priceNotice" >
            <image :src='[state==0?img10:img12]' />
            <p>关注</p>   
          </button>       
        </div> 
        <button open-type="share" class="fenxiangs">
          <image :src="img13" class="slide-image" />
          <p>分享</p>
        </button>
        <button class="fenxiangs" @click="anyy_dj">
          <image :src="img14" class="slide-image" />
          <p>预约</p>
        </button>
      </div>
      <div class="right_foot">
        <div class="Report" @click="clickService">打电话</div>
        <div class="Telephone" @click="copy">加微信</div>
      </div>
    </div>
    <!-- 底部按钮开始 -->

    <!-- 弹出预约开始 -->
    <div class="tcyyzg" v-if="yuyue_yc">
        <div class="tcyy">
          <div class="btyy">预约看房</div>
          <div class="appointment">
              <!-- 预约人 -->
              <div class="project__input">
                <div class="xmmc">预约人</div>
                <input id="name" type="text" placeholder="请输入真实姓名" placeholder-style="color: #aaa"
                :value="name" @input="nameVal($event)"/>
              </div>
              <!-- 手机号码 -->
              <div class="project__input">
                <div class="xmmc">手机号码</div>
                <input id="name" type="text" placeholder="请输入手机号码" placeholder-style="color: #aaa"
                 :value="tel" @input="telVal($event)"/>
              </div>
              <!-- 预约描述 -->
              <div class="project__input">
                <div class="xmmc">看房时间</div>
                 <picker
                  mode="date"
                  :value="lookDate"
                  :start="pickerStart"
                  end="endDate"
                  @change="bindDateChangeStart($event)"
                  class="lookClass"
                >
                  <div id="birthday" :style="color">{{ lookDate }}</div>
                </picker>
              </div>
              <div class="project__input borderNone">
                <div class="xmmc">预约描述</div>
                <textarea :value="yuText" @input="makeText($event)"></textarea>
              </div>
              <button class="applyFor" @click="applyClick">立即申请</button>
          </div>
          <div class="ShutDown" @click="ShutDown_gb">X</div>
        </div>
    </div>
    <!-- 弹出预约结束 -->

    <!-- 提醒授权开始 -->
    <div class="authorization" v-if="telHid">
      <div class="authorization_title">授权提示</div>
      <div class="authorization_text">为了更好的为您提供服务，我们请求获取您的电话号码</div>
      <div class="authorization_btn">
        <button @click="quxiao">取消</button>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" hover-class="none">允许</button>
      </div>
    </div>
    <!-- 提醒授权结束 -->
    <!-- 遮罩层开始 -->
     <!--x -->
    <div class="modalMask" v-if="maskHid"></div>
    <!-- 遮罩层结束 -->
   
    <van-toast id="van-toast" />
  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
import QQMapWX from "@/utils/qqmap-wx-jssdk.js";
import Toast from "@/../static/vant/toast/toast";
// 实例化API核心类 
const qqMap = new QQMapWX({
    key: '5TJBZ-XDZCK-O5FJR-AWZUZ-C4YTJ-EUBD5' // 必填
});
export default {
  components: {
    QQMapWX,
    Toast
  },
  data () {
    return {
      markers: [
        {
        id: 1,
        latitude: '',
        longitude: '',
        name: '',
        width: 30,
        height: 30,
        iconPath:app.globalData.imgurl +"map.png",
        callout: {
          content: '',
          color: '#333',
          fontSize: 12,
          borderRadius: 5,
          display: 'ALWAYS',
          padding:8
        }
      }
      ],
      domain:null,
      hxid:"",
      projectInfo:null,
      movies: [],
      imgArr:[],
      bf:app.globalData.imgurl +"vr_icon.png",
      houseInfo:null,
      currentimg: 0, 
      agentlist:[],
      img9:app.globalData.imgurl +"wx.png",
      img10s: app.globalData.imgurl +"dh.png",
      location:null,
      sameDistrict:[],
      recommended:[],
      projectname:"",
      agentPhone:"",
      wechat_num:"",
      maskHid:false,
      telHid:false,
      clickSome:0,   //0为点击关注  1为点击预约
      state:"",
      img10: app.globalData.imgurl +"gz.png",
      img12: app.globalData.imgurl +"xin.png",
      numVal:"",
      openType:"",
      code:"",
      yuyue_yc:"",
      name:"",
      tel:"",
      lookDate:"请选择",
      yuText:"",
      fangyuanlist:[
        {img1:app.globalData.imgurl + "f1.png",img2:app.globalData.imgurl + "f1s.png",name:'电视',isshow:0},
        {img1:app.globalData.imgurl + "f2.png",img2:app.globalData.imgurl + "f2s.png",name:'冰箱',isshow:0},
        {img1:app.globalData.imgurl + "f3.png",img2:app.globalData.imgurl + "f3s.png",name:'洗衣机',isshow:0},
        {img1:app.globalData.imgurl + "f4.png",img2:app.globalData.imgurl + "f4s.png",name:'空调',isshow:0},
        {img1:app.globalData.imgurl + "f5.png",img2:app.globalData.imgurl + "f5s.png",name:'热水器',isshow:0},
        {img1:app.globalData.imgurl + "f6.png",img2:app.globalData.imgurl + "f6s.png",name:'床',isshow:0},
        {img1:app.globalData.imgurl + "f7.png",img2:app.globalData.imgurl + "f7s.png",name:'暖气',isshow:0},
        {img1:app.globalData.imgurl + "f8.png",img2:app.globalData.imgurl + "f8s.png",name:'宽带',isshow:0},
        {img1:app.globalData.imgurl + "f9.png",img2:app.globalData.imgurl + "f9s.png",name:'衣柜',isshow:0},
        {img1:app.globalData.imgurl + "f10.png",img2:app.globalData.imgurl + "f10s.png",name:'天然气',isshow:0},
      ], 
      img13: app.globalData.imgurl + "fx.png",
      img14: app.globalData.imgurl + "yy.png",
      img15: app.globalData.imgurl + "gz.png",
      img16: app.globalData.imgurl + "xin.png",
      feiyongList:"",
      lookList:[
        {
          time:"",
					id: "",
					title: "",
					Imgurl: "",
					apirlroom: "",
          apirloffice:"",
          apirltoilet:"",
          area:"",
          Towardname:"",
          Decorationname:"",
          Propertyname:"",
          price:"",
          averageprice:""
        },
      ],
      arrayzf:[],
      
      // gztu_img:0,
 


     }
  },

  onLoad(option) {
    const that = this;
    that.movies = "";
    that.houseInfo = "";
    that.fangyuanlist = [
        {img1:app.globalData.imgurl + "f1.png",img2:app.globalData.imgurl + "f1s.png",name:'电视',isshow:0},
        {img1:app.globalData.imgurl + "f2.png",img2:app.globalData.imgurl + "f2s.png",name:'冰箱',isshow:0},
        {img1:app.globalData.imgurl + "f3.png",img2:app.globalData.imgurl + "f3s.png",name:'洗衣机',isshow:0},
        {img1:app.globalData.imgurl + "f4.png",img2:app.globalData.imgurl + "f4s.png",name:'空调',isshow:0},
        {img1:app.globalData.imgurl + "f5.png",img2:app.globalData.imgurl + "f5s.png",name:'热水器',isshow:0},
        {img1:app.globalData.imgurl + "f6.png",img2:app.globalData.imgurl + "f6s.png",name:'床',isshow:0},
        {img1:app.globalData.imgurl + "f7.png",img2:app.globalData.imgurl + "f7s.png",name:'暖气',isshow:0},
        {img1:app.globalData.imgurl + "f8.png",img2:app.globalData.imgurl + "f8s.png",name:'宽带',isshow:0},
        {img1:app.globalData.imgurl + "f9.png",img2:app.globalData.imgurl + "f9s.png",name:'衣柜',isshow:0},
        {img1:app.globalData.imgurl + "f10.png",img2:app.globalData.imgurl + "f10s.png",name:'天然气',isshow:0},
      ], 
    that.currentimg=0;
    that.domain=app.globalData.domain;
    that.houserid=option.id;
     //获取详情
      wx.request({
        url:app.globalData.url +"OldHouse/BandEsfInfo" +"?sessionKey=" +app.globalData.sessionKey+'&houseid=' + option.id,
        success: function (res) {
          console.log("租房详情",res)

          //轮播图
          that.movies = res.data.Context.carousel;
          for(var i = 0;i<that.movies.length;i++ ){
            that.imgArr.push(that.domain+that.movies[i].imgurl)
          }
          //房源介绍
          that.houseInfo = res.data.Context.houseInfo;
          that.projectname = res.data.Context.houseInfo.projectname;
          that.numVal=res.data.Context.houseInfo.id; 
          console.log("that.houseInfo",that.houseInfo.furnishings) 
          that.feiyongList = res.data.Context.service ; 
          that.projectInfo={
            id:that.houseInfo.id,
            title:that.houseInfo.title,
            Imgurl:that.houseInfo.Imgurl,
            apirlroom:that.houseInfo.apirlroom,
            apirloffice:that.houseInfo.apirloffice,
            apirltoilet:that.houseInfo.apirltoilet,
            area:that.houseInfo.area,
            Towardname:that.houseInfo.Towardname,
            price:that.houseInfo.rent,
          };
          wx.setStorageSync("projectInfo",that.projectInfo);

          
          // 浏览记录
          if(wx.getStorageSync("arrayzf")){
            that.arrayzf = wx.getStorageSync("arrayzf");
          }
          let patient = res.data;

          let val={
            time:common.ConvertTimestamp(new Date()),
            id:option.id,
            title:that.houseInfo.title,
            Imgurl:that.houseInfo.Imgurl,
            apirlroom:that.houseInfo.apirlroom,
            apirloffice:that.houseInfo.apirloffice,
            apirltoilet:that.houseInfo.apirltoilet,
            area:that.houseInfo.area,
            Towardname:that.houseInfo.Towardname,
            Decorationname:that.houseInfo.Decorationname,
            Propertyname:that.houseInfo.Propertyname,
            rent:that.houseInfo.rent,
          };
          that.arrayzf.push(val);
          var regionValueArray = [];
          that.arrayzf = that.arrayzf.reduce(function(arrRent, objRent) {
            let count = 0;
            arrRent.forEach( function(item,key){
              if(item.id == objRent.id){
                count = 1;
                arrRent[key]=objRent;
              }
            })
            if(!count)arrRent.push(objRent);
            return arrRent;
          },[]);
          that.arrayzf.sort(that.compare('time',false));
          wx.setStorageSync('arrayzf',that.arrayzf);



          
          // 房源简介陈设
          // 拆分出后台数据组成数组
          let arr=that.houseInfo.Furnishingsname.split(",");
          console.log("that.Furnishingsname",arr)
          for(var i=0;i<arr.length;i++){
            // 循环对象
            that.fangyuanlist.forEach(element => {
              if(arr[i]==element.name){
                element.isshow=1;
              }
            });
          }

           
          //经纪人
          that.agentlist = res.data.Context.agentList;
          for(var i =0;i<that.agentlist.length;i++){
            that.company = that.agentlist[i].company;
            that.store = that.agentlist[i].store;
            that.hxid = that.agentlist[i].hxid;
          }
          console.log("经纪人即时通讯id",that.hxid)
          //同小区房源
          that.sameDistrict = res.data.Context.sameDistrict;
          //推荐房源
          that.recommended = res.data.Context.recommendedRent;
          // 当前经纪人
          that.agentPhone = res.data.Context.agent.mobile;
          if(res.data.Context.agent.wxid==""){
            that.wechat_num=res.data.Context.agent.mobile;
          }else{
            that.wechat_num=res.data.Context.agent.wxid;
          }
          


          // 地图
          qqMap.geocoder({
            address:that.houseInfo.address,   //用户输入的地址（注：地址中请包含城市名称，否则会影响解析效果），如：'北京市海淀区淀西大街74号'
            complete: data => {
              if(data.status==0){
                that.location=data.result.location;
                that.markers=[{
                  id: 1,
                  latitude: that.location.lat,
                  longitude: that.location.lng,
                  name: that.houseInfo.projectname,
                  width: 30,
                  height: 30,
                  iconPath:app.globalData.imgurl +"map.png",
                  callout: {
                    content: that.houseInfo.projectname,
                    color: '#333',
                    fontSize: 12,
                    borderRadius: 5,
                    display: 'ALWAYS',
                    padding:8
                  }
                }]
              }else {
                that.markers[0].callout.display="display:'none'";
              }
            }
          })

          


        }
      })

      //获取用户关注
      wx.request({
        url:app.globalData.url +"Percenter/BandUserRelationEsf" +"?sessionKey=" +app.globalData.sessionKey+'&houseId=' + option.id,
        success: function (res) {
          if(res.data.Code==0){
            that.state=res.data.Context.isganzhu;
            // if(that.state>0){
            //   that.bianjia=true;
            //   if(res.data.Context.isdingyue>0){
            //      that.priceStatus=1;
            //   }else{
            //     that.priceStatus=0;
            //   }
            // }else{
            //   that.bianjia=false;
            // }
          }
          // else{
          //   that.state=0;
          // }
        }
      });



  },

  onShow(){
    const that = this;
    wx.request({
      url:app.globalData.url +"Percenter/BandUserRelationEsf" +"?sessionKey=" +app.globalData.sessionKey+'&houseId=' + that.houserid,
      success: function (res) {
        if(res.data.Code==0){
          if(res.data.Context.isganzhu>0){
            that.state=1;
          }else{
            that.state=0;
          }
        }else{
          that.state=0;
        }
      }
    });
    
 
  
  
  },


  onShareAppMessage: function(res) {
    return {
      title: "租房详情",
      path: "/pages/Rentaldetails/main",
      imageUrl: "",
    };
  },

  methods: {
    compare: function(attr,rev){ //第二个参数没有传递 默认升序排列 
    if(rev == undefined){ rev = 1; }else{ rev = (rev) ? 1 : -1; } return function(a,b){ a = a[attr]; b = b[attr]; 
    if(a < b){ return rev * -1; } if(a > b){ return rev * 1; } return 0; } },
       getToday() {
      let myDate = new Date();
      let myMonth = myDate.getMonth() + 1;
      let Hours = myDate.getHours()
      let Minutes = myDate.getMinutes();
      let Seconds = myDate.getSeconds();
      if (myMonth < 10) {
        myMonth = "0" + myMonth; //补齐
      }
      let mydate = myDate.getDate();
      if (myDate.getDate() < 10) {
        mydate = "0" + myDate.getDate(); //补齐
      }
      let today = myDate.getFullYear() + "-" + myMonth + "-" + mydate;
      
      return today;

    },



    djimg(e) {
      this.currentimg = e.target.current;
    }, 
    // gz_dj(){
    //   if(this.gztu_img==1){
    //     this.gztu_img=0;
    //   }else{
    //     this.gztu_img=1;
    //   }
    // },
    //点击放大轮播图片
    previewImg:function(pro,e){
      const that = this;
      var index = pro;
      var img_url = e.target.dataset.src;
      wx.previewImage({
       current: img_url,     //当前图片地址
       urls:that.imgArr,               //所有要预览的图片的地址集合 数组形式
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
      })
    },
    //点击在线咨询进入聊天
    chatClick:function(index,e){
      const that = this;
      wx.request({
          url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
          success: function (data) {
            console.log("data",data)
            if(data.data==true){
              that.telHid=false;
              that.maskHid=false;
              wx.navigateTo({ url: "/pages/chatRental/main?hxid=" + that.hxid + "&headpic=" + that.headpic + "&projectInfo=" + that.projectInfo});
            }else{
              that.telHid=true;
              that.maskHid=true;
            }
          }
      })
    },
    //点击加微信
    wxhcopy:function(index,e){
      const that = this; 
      wx.setClipboardData({
        data: e.mp.currentTarget.dataset.wxid,
        success: function (res) {
          wx.showToast({
            title: '复制成功'
          })
        }
      })

    },
    //点击打电话
    telphoneClick:function(index,e){ 
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.telphone
      })
    },
    //获取经纬度
    clickAdress(e){
      const that = this;
      if(that.location!=null){
        wx.openLocation({
          latitude: that.location.lat,
          longitude: that.location.lng,
          name:that.houseInfo.projectname,
          address:that.houseInfo.address
        })
      }else {
        wx.showToast({
          title: '无法定位到该地址！',
          icon: 'none',
          duration: 2000,
              
        })
      }
    },
    //同小区房源
    SameDistrictclick:function(index,e){ 
      wx.navigateTo({ url: "/pages/Rentaldetails/main?id=" + e.mp.currentTarget.dataset.id});
    },
    //点击查看更多同小区房源
    sameClick:function(){
      const that = this;
      wx.navigateTo({ url: "/pages/Rental/main?keyword="+that.projectname});
    },
    // 点击楼盘信息详情页
    moreDetails:function(index,e){
      wx.navigateTo({ url: "/pages/rentmoreDetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
    // 点击跳转经纪人列表
    agentlists:function(){
      const that = this;
      wx.navigateTo({ url: "/pages/rentAgentList/main?company=" + that.company + "&store=" + that.store});
    },
    //点击跳转经纪人名片
    agentInfo: function(index, e) {
      wx.navigateTo({
        url: "/pages/rentAgentDetails/main?agentid=" + e.mp.currentTarget.dataset.id
      });
    },
    //拨打当前经纪人电话
    clickService:function(){
      const that = this;
      if(that.agentPhone!=""){  
        wx.makePhoneCall({
          phoneNumber: that.agentPhone,
        })
      }else{
        wx.showToast({
          title: '请先添加电话！',
          icon: 'none',
          duration: 2000
        })
      }
    },
    //点击复制当前经纪人微信号
    copy(){
      const that = this;
      wx.setClipboardData({
        data: that.wechat_num,
        success: function (res) {
          wx.showToast({
          title: '复制成功'
          })
        }
      })
    },
    //点击取消授权
    quxiao:function(){
      const that = this;
      that.telHid=false;
      that.maskHid=false;
    },
    //点击获取手机号
    getPhoneNumber(e){
      const that = this;    
      if (e.mp.detail.errMsg == "getPhoneNumber:ok") {
        wx.request({
          url: app.globalData.url +"WxLogin/getPhoneNumber?sessionKey="+app.globalData.sessionKey,
          method:"POST",
          data: {
            encryptedData:e.mp.detail.encryptedData,
            iv:e.mp.detail.iv
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            var obj = JSON.parse(res.data.Context.phoneNumber.trim());
            that.purePhoneNumber=obj;
              wx.request({
                url: app.globalData.url +"WxLogin/RegisterLogin" +"?sessionKey=" +app.globalData.sessionKey,
                method:"POST",
                data: {
                  nickname:that.nickname,
                  headpic:that.headpic,
                  mobile:that.purePhoneNumber
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success (data) {
                  if(data.data.Code==0){
                    that.telHid=false;
                    that.maskHid=false;
                    wx.setStorageSync('member',data.data.Context.member);
                    that.openType="";
                    app.globalData.member=data.data.Context.member;

                    if(that.clickSome==0){
                      wx.request({
                        url:app.globalData.url +"Percenter/BandUserRelationEsf" +"?sessionKey=" +app.globalData.sessionKey+'&houseId=' + that.numVal,
                        success: function (res) {
                          if(res.data.Code==0){
                            if(res.data.Context.isganzhu>0){
                              that.state=1;
                              // that.bianjia=true;
                              // if(res.data.Context.isdingyue >0){
                              //   that.priceStatus=1;
                              // }else{
                              //   that.priceStatus=0;
                              // }
                            }
                            else{
                              // that.priceNotice();
                               that.state=0;
                            }
                          }
                        }
                      });
                    }
                    else{
                      that.tel=app.globalData.member.mobile;
                      that.yuyue_yc=true;
                      wx.request({
                        url:app.globalData.url +"Percenter/BandUserRelationEsf" +"?sessionKey=" +app.globalData.sessionKey+'&houseId=' + that.numVal,
                        success: function (res) {
                          if(res.data.Context.isganzhu>0){
                            that.state=1;
                          }
                        }
                      })
                      
                      
                    }
                  
                  }
                }
              })
          }
        })
      }
    },
    //点击关注
    priceNotice:function(){
      const that = this;
      that.clickSome=0;
      //如果关注状态为0调用关注接口，如果为1调用取消关注接口
      if(that.state==0){
        wx.request({
          url: app.globalData.url +"OldHouse/BandEsfFollow?sessionKey=" +app.globalData.sessionKey+'&houseId=' + that.houserid,
          success (res) {
            console.log("关注接口",res)
            if(res.data.Code==0){
              that.telHid=false;
              that.maskHid=false;
              that.state=1;
              // that.bianjia=true;
              // that.priceStatus=0;
              wx.showToast({
                title: '关注成功',
                icon: 'success',
                duration: 2000
              });
              //that.Message();
              // that.state=1;
            }else{
              that.telHid=true;
              that.maskHid=true; 
            }
          },
        });
      }else{
        wx.request({
          url: app.globalData.url +"OldHouse/BandEsfCancelFollow?sessionKey=" +app.globalData.sessionKey+'&houseId=' + that.houserid,
          success (res) {
            if(res.data.Code==0){
              that.state=0;
              wx.showToast({
                title: '取消关注',
                icon: 'none',
                duration: 2000
              });
              // that.bianjia = false;
            }
          }
        })
      }
    },
    // 点击预约
    anyy_dj(){
      const that = this;
      that.disabled=false;
      that.clickSome=1;
      wx.request({
        url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          if(data.data==true){
            that.telHid=false;
            that.maskHid=false;
            that.yuyue_yc = true;
            that.tel=app.globalData.member.mobile;
          }else{
            that.telHid=true;
            that.maskHid=true;
          }
          
        }
      })
     },
    ShutDown_gb(){
      const that = this;
      that.yuyue_yc =false;
    },
    // 获取姓名
    nameVal:function(e){
      console.log("姓名",e.mp.detail.value)
      const that = this;
      that.name = e.mp.detail.value;
    },
    // 获取手机号码
    telVal:function(e){
      const that = this;
      that.tel = e.mp.detail.value;
    },
    // 获取看房时间
    bindDateChangeStart:function(e){
      const that = this;
      that.color = "color:#333";
      that.lookDate = e.mp.detail.value;
    },
    // 获取预约描述
    makeText:function(e){
      const that = this;
      that.yuText = e.mp.detail.value;
    },
    //申请预约
    applyClick:function(){
      const that = this;
      console.log('app.globalData.member.id',app.globalData.member);
      var reg = /(1[3-9]\d{9}$)/;
      //判断姓名是否为空
      if(that.name==""){
        Toast("姓名不能为空");
        return false;
      }
      //手机号码是否为空并且格式无误
      if (that.tel == "") {
        Toast("电话不能为空");
        return false;
      } else if (!reg.test(that.tel)) {
        Toast("请输入正确格式的手机号码!");
        return false;
      }
      //看房时间是否为空
      if (that.lookDate == ""||that.lookDate=="请选择") {
        Toast("看房时间不能为空");
        return false;
      }
      // if(that.yzm == ""){
      // Toast("验证码不能为空");
      // return false;
      // }else if(that.yzm != that.code){
      //   Toast("验证码错误");
      //   return false;
      // }
      wx.request({
        url: app.globalData.url +"OldHouse/BandEsfSubscribe?sessionKey="+app.globalData.sessionKey,
        method:"POST",
        data: {
          houseid:that.numVal,
          jjrid:that.agentId,
          name:that.name,
          telephone:that.tel,
          createdate:that.lookDate,
          intro:that.yuText
        },
        header:{ 'Content-Type':'application/json' },
        success (data) {
          if(data.data.Code==0){
            that.yuyue_yc=false;
            Toast("预约成功");
            that.name="";
            that.tel="";
            that.yzm="";
            that.disabled=false;
            // that.timeText="发送验证码";
            that.lookDate="请选择";
            that.yuText="";
          }
        }
       });

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
  left:82%;
  bottom:70rpx;
}


/* 租房信息  */
.zfdetails{width: 90%; padding-left: 5%; padding-right: 5%; margin-top:30rpx; padding-bottom:30rpx;  border-bottom:20rpx #f8f8fa solid;}
.btjq{ width: 100%; overflow: hidden;}
.btjq h1{ float: left; font-size:36rpx; color: rgb(255, 58, 58); }
.btjq h1 span{ font-size:52rpx; font-weight: bold; }
.btjq p{ float: right; font-size: 28rpx; color: rgb(26, 154, 228);}
.zfdetails h2{ font-size: 34rpx; font-weight: bold; margin-top:10rpx;}
.jieshao{ margin-top:3%; width: 100%; overflow: hidden; padding-top:20rpx; padding-bottom:20rpx; background: #f8f8fa; 
/* border-bottom:2rpx rgb(236, 236, 236) solid;  */
}
.jieshao ul li{ float: left; width: 25%; text-align: center;} 
.jieshao ul li h3{ font-size: 32rpx; margin-bottom:10rpx;}
.jieshao ul li p{ font-size: 28rpx; color: rgb(121, 121, 121); }
.zf_ys{ width: 100%; margin-top:20rpx;  overflow: hidden; }
.zf_ys p{ float: left; font-size: 26rpx; padding:0 15rpx 0 15rpx; height: 60rpx; line-height:60rpx; background: #f5f5f5; color: #6f6f6f; margin-right:10rpx; border-radius:6rpx; font-weight: bold;}

.information{ width:100%; margin-top:30rpx; }
.information .bfb{ width: 100%; color: #8d8c8c; font-size: 28rpx; height:60rpx; overflow: hidden;}
.xq_l{color:#373737;float: left; font-size:34rpx; width:100rpx; text-align: justify;text-justify:distribute-all-lines; font-weight: 800;}
.xq_l:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.maohao{float: left;color: rgb(160, 160, 160); position: relative; top:0rpx;font-size:34rpx; font-weight: 800;}
.xq_r{float: left; font-size:30rpx; overflow:hidden; text-overflow:ellipsis;white-space:nowrap;width: 54%;}
.bo_lp{ width: 100% !important;}
.xq_rs{float: left; font-size:30rpx; overflow:hidden; text-overflow:ellipsis;white-space:nowrap;width:70%; color: #000; margin-top: 5rpx;}
.information .bfb p{ float: right;color: #c5c5c5; }



/* 房源简介 */
.introduction{ width:100%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.hx_bt{ width:100%; overflow: hidden;}
.hx_bt p{ float: left; font-size:35rpx; font-weight: bold;}
.hx_bt span{ float: right; font-size:25rpx; margin-top: 2%;}
.fyhx_bt{width: 90%; padding-left: 5%; padding-right: 5%; overflow: hidden;}
.fyhx_bt p{ float: left; font-size:35rpx; font-weight: bold;}
.fyhx_bt span{ float: right; font-size:25rpx; color: #2e72f1; margin-top: 2%;}
.fyjieshao{ width: 100%; margin-top: 5%;}
.fyjieshao ul{ overflow: hidden;}
.fyjieshao ul li{  display: inline-block; width: 20%; margin-bottom: 5%;}
.fyjieshao ul li image{ width:70rpx; height:70rpx; display: block; margin: 0 auto;}
.fyjieshao ul li p{ font-size: 28rpx; margin-top:10rpx; text-align: center;}
.words{ color: #222222;}
.words_s{color: #b3b3b3;text-decoration:line-through}
.yajin_tk button{ width: 50%; background: #07c160; color: #fff; height:70rpx; line-height: 70rpx;}

/* 费用详情 */
.cost{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:5%; border-bottom:20rpx #efefef solid;}
.feiyong{ width: 100%; margin-top: 20rpx; border-bottom: 1px rgb(241, 241, 241) dotted; padding-bottom: 20rpx; } 
.feiyong h2{ font-size: 30rpx;display: block;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;  }
.feiyong h3{ display: block; width: 100%; font-size:26rpx; margin-top:10rpx; color:#333;}
.feiyong h3 span{ color: rgb(255, 97, 23);}




/* 中间弹框 */
.tan_yj{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.yajin_tk{ width:70%; margin-left: 10%; margin-right: 10%; padding:5%; background: #fff; position: relative; bottom:35%; border-radius: 3%;}
.yajin_tk h3{ font-size: 35rpx; font-weight: bold;}
.yajin_tk p{ font-size: 30rpx; margin-top: 10%; margin-bottom: 10%;}


/* 推荐经纪人 */
.agent{width: 90%; padding-left: 5%; padding-right: 5%; margin-top:30rpx; padding-bottom:20rpx; border-bottom:20rpx #efefef solid;}
.guwen{ width:100%; margin-top:5%;}
.guwen_list{ width: 100%; margin-top:2%; overflow: hidden; margin-bottom:30rpx;}

.left_g{ float: left; width:75%;}
.left_g image{ float: left; width:110rpx; height:110rpx; border-radius: 50%; margin-right: 2%;}
.neirong{ float: left; width:70%; margin-top: 2%; }
.neirong div h1{float: left; font-size:32rpx; font-weight: bold; margin-right:10rpx; }
.neirong div span{ float: left; font-size: 22rpx; padding:1rpx 2rpx 1rpx 2rpx; border:2rpx #f86577 solid; color: #f86577; text-align: center; border-radius:6rpx; }
.neirong p{ font-size: 27rpx; color: #969ca8; margin-top:2%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}

.right_g{ float: right; margin-top:20rpx; width: 25%; overflow: hidden;}
.right_g p.wxl{ float: left;}
.right_g p.dhr{ float: right ;}
.right_g image{ width:60rpx; height:60rpx;}
/* .guwen{ width:100%; margin-top:5%;}
.guwen_list{ width: 100%; margin-top:2%; overflow: hidden;}
.left_g{ float: left; width:75%;}
.left_g image{ float: left; width:110rpx; height:110rpx; border-radius: 50%; margin-right: 2%;}
.neirong{ float: left; width:70%; margin-top: 2%; }
.neirong div h1{float: left; font-size:32rpx; font-weight: bold; margin-right:10rpx; }
.neirong div span{ float: left; font-size: 22rpx; padding:1rpx 2rpx 1rpx 2rpx; border:2rpx #f86577 solid; color: #f86577; text-align: center; border-radius:6rpx; }
.neirong p{ font-size: 27rpx; color: #969ca8; margin-top:2%;}

.right_g{ float: right; margin-top:20rpx; width: 25%; }
.right_g p{ float: left;margin-left:10%;}
.right_g image{ width:60rpx; height:60rpx;} */


/* 位置及周边地图 */
.ditu{width: 90%; padding-left: 5%; padding-right: 5%; margin-top:30rpx; border-bottom:20rpx #efefef solid;}
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
.houseyuan_list{ width: 100%; margin-top: 5%; margin-bottom: 30rpx;}
.fangy_list{ margin-right:6%; width:58%; margin-right: 5%; height:380rpx;display: inline-block;}
.fangy_list image{ width: 100%; height: 260rpx;}
.fangy_list h3{ font-size: 30rpx; margin-top: 3%;}
.fangy_list p{ font-size: 26rpx; margin-top: 3%;}
.fangy_list p span.dj1{ font-size: 30rpx; font-weight: bold; color: rgb(253, 27, 27); margin-right: 2%;}
.fangy_list p span.dj2{ font-size: 27rpx; color: rgb(146, 146, 146);}
 



/* 推荐房源 */
.recommendfy{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #f8f8fa solid;}
.nr-house{ width:100%;  margin-top:30rpx; padding-bottom: 110rpx;}
.h-mt {overflow: hidden;margin-bottom:15rpx;}
.nr-house image {float: left;width: 40%;height: 200rpx;border-radius: 10rpx;}
.nr-house .r_wz {float: right;width: 57%;}
.bt_s {font-size: 30rpx;font-weight: bold;margin-right: 10rpx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.jieshaot {font-size: 25rpx;color: #333;margin-top: 10rpx;}
.youshi1 {float: left;padding: 0 10rpx;height: 40rpx;line-height: 40rpx;border-radius: 3px;background: #edf0f3;color: #849aae;font-size: 25rpx;text-align: center;margin-top: 10rpx;margin-right: 10rpx;}
.m-x {margin-top: 10rpx;overflow: hidden;}
.m-x p {float: left; font-size: 32rpx;}
.m-x p.money {font-size: 30rpx;color: #fa5741;font-weight: 900;margin-right: 5rpx;}
.money1 {font-size:30rpx;color: #fa5741;font-weight: 900;}
.more-house {width: 94%;height: 70rpx;background: #e8edf3;border-radius: 5px;text-align: center;line-height: 70rpx;font-size: 28rpx;font-weight: bold;margin-left: 3%;margin-right: 3%;margin-top: 30rpx;color: #3072f6;}

/* .nr-house{ width:100%;  margin-top:30rpx;}
.nr-house image{ float: left; width: 40%; height: 180rpx;}
.nr-house .r_wz{ float:right; width: 57%;}
.nr-house .r_wz .bt_s{font-size: 34rpx; font-weight: bold; margin-right:10rpx;}
.jieshao{ font-size: 26rpx; color: #000; margin-top:15rpx;}
.youshi1{ float: left; width:90rpx; height:40rpx; line-height: 40rpx; border-radius:6rpx; background: #edf0f3; color:#849aae; font-size: 25rpx; text-align: center; margin-top:10rpx; margin-right: 10rpx;}
.m-x{ margin-top: 10rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color: rgb(192, 0, 0); font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:#ccc; margin-top: 10rpx; } */




.footer{ width: 100%; height: 130rpx; background: #fff;position: fixed;bottom: 0; z-index: 999;}
.left_foot{ float: left; width:39%;height: 120rpx; margin-top:23rpx; margin-right:3%; margin-left: 3%;}
.left_foot .guanzhus{ float: left; width:33.3%; margin: 0 auto; background: #fff;overflow: inherit;border: none; 
padding: 0 !important;}
.left_foot .guanzhus image{ width:40rpx; height:40rpx;}
.left_foot .guanzhus p{ font-size: 26rpx; color: #000; position: relative; top:-3rpx;
height: 40rpx;line-height: 40rpx;}
 
.left_foot .fenxiangs{ float: left; width:33.3%; height:50rpx; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; background:none; line-height: normal;}
.left_foot button::after{border: none; padding: 0 !important;}
.left_foot .fenxiangs image{ width:40rpx; height:40rpx;}
 .left_foot .fenxiangs p{ font-size: 26rpx; color: #000;/* position: relative; top: -37rpx;*/} 

 .right_foot{ float: right; width:55%; margin-top:22rpx;}
.Report{ float: left; width: 45%; background: #3dc28e; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius: 10rpx; color: #fff; margin-right: 5%;}
.Telephone{ float: right; width: 45%; background: #2e72f1; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}

/* 弹出预约开始 */
.tcyyzg{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;
align-items:flex-end;align-content:center; z-index: 999;}
.tcyy{ width:90%; margin-left:5%; margin-right:5%; background: #fff; border-radius:30rpx;  position: fixed; top:8%;}
.btyy{ width: 100%; height:100rpx; background: #3dc28e; color: #fff; text-align: center; border-top-left-radius:30rpx; border-top-right-radius: 30rpx; line-height:100rpx; font-size: 36rpx; font-weight: bold;}
.appointment{padding:1% 5% 7% 5%; width:90%;}
.project__input{ margin-top:30rpx; height:60rpx; padding-bottom:10rpx; border-bottom: 1px #f3f3f3 solid;}
.project__input .xmmc{ float: left; font-size: 30rpx; width:25%; margin-right:25rpx; text-align: justify;text-justify:distribute-all-lines;}
.xmmc:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.project__input input{ float: left; font-size: 30rpx; width: 68%; }
.project__input textarea{ float: left; font-size: 30rpx; width:68%; border: 2rpx solid #ececec;
height: 185rpx;}
.applyFor{ width:60%; height:80rpx; background: #2e72f1; line-height: 80rpx; text-align: center; font-size: 36rpx; color: #fff; margin-top: 40rpx;}
.ShutDown{ font-size:40rpx; font-weight: bold; position: absolute; top: 20rpx; right: 20rpx; color: #fff;}

/* 提醒授权开始 */
.authorization{width: 80%;margin: 0 auto;position: fixed;top: 390rpx;left: 10%;z-index: 9999;
background: #fff;padding: 30rpx 30rpx 60rpx 30rpx;box-sizing: border-box;border-radius: 10rpx;}
.authorization_title{font-size: 32rpx;color: #040404;font-weight: 700;padding-bottom: 30rpx;
text-align: center;}
.authorization_text{font-size: 28rpx;}
.authorization_btn{justify-content: center;display: flex;margin-top: 30rpx;}
.authorization_btn>button:first-child{background: #EEEEEE;color: #2F2F2F;}
.authorization_btn>button:nth-child(2){margin-right: 0;background: #2e72f1;color: #fff;}
.authorization_btn>button{margin-right: 10%;margin-left: 0;padding: 0;width: 45%;font-size: 28rpx;}
.authorization_btn>button::after{border: none;}
/* 提醒授权结束 */
/* 遮罩层开始 */
.modalMask {
  width: 100% !important;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: #000 !important;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
/* 遮罩层结束 */

.borderNone{border-bottom: none !important;height: 185rpx !important;}

 </style>
