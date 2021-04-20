<template>
  <div class="indexstyle">
     
     <!-- 图片轮播 -->
    <div class="lunbo">
      <swiper class="swiper" @change="djimg" >
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image v-if="domain" :src="domain+item.imgurl" class="slide-image" mode="scaleToFill" @click="previewImg(pro,$event)" :data-src="domain+item.imgurl"/>
          </swiper-item>
        </block>
      </swiper>
      <div class="lbvr" v-if="vrurl =='' ? false : true" @click="previewVr">
        <image :src="bf" />
      </div>
      <div class="imageCount">{{current+1}}/{{movies.length}}</div>
    </div>
    <!-- 图片轮播 -->
     <!-- 轮播图开始 -->
     <!-- <div class="contain">
      <scroll-view scroll-x class="top">
        <div class="tabbar" :class="{'tabbar-bottom':currentTab==index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)">
          {{item.title}}
        </div>
      </scroll-view>

      <swiper class="swiper" :current="currentTab" @change="changeTab"> -->
        <!-- VR视频-->
        <!-- <swiper-item class="vrdajia">
          <div class="play" v-if="vrimg != null && vrimg!='' ? true : false" @click="previewVr" ><image :src="bf" mode="scaleToFill"/></div>
          <div class="vrda">
            <image :src="vrimg != null && vrimg!='' ? domain+vrimg : zwvr" class="vr-image" mode="scaleToFill"/>
          </div>
        </swiper-item> -->

        <!-- 图片-->
        <!-- <swiper-item>
          <div>
            <swiper class="swiper">
              <block v-for="(item, index) in movies" :key="index">
                <swiper-item>
                  <image v-if="domain" :src="domain+item.imgurl" class="vr-image" mode="scaleToFill" @click="previewImg(pro,$event)" 
                  :data-src="domain+item.imgurl"/>
                </swiper-item>
              </block>
            </swiper>
          </div>
        </swiper-item>

      </swiper>
    </div> -->
    <!--轮播图结束 -->


    <!-- 新房信息开始 -->
    <div class="newhousedetails" v-if="projectInfo">
       <div class="housedetails_name">
         <h1>{{projectInfo.name}}</h1>
         <p>{{projectInfo.salestatename}}</p>
       </div>
       <div class="advantage">
         <div v-if="projectInfo.Decorationname==''?false:true">{{projectInfo.Decorationname}}</div>
         <div v-if="projectInfo.existingname==''?false:true">{{projectInfo.existingname}}</div>
         <div v-if="projectInfo.zonename==''?false:true">{{projectInfo.zonename}}</div>
         <div v-if="projectInfo.BS_HotGasname==''?false:true">{{projectInfo.BS_HotGasname}}</div>
         <div v-if="projectInfo.BS_Securityname==''?false:true">{{projectInfo.BS_Securityname}}</div>
       </div>

       <div class="price">
         <div class="lelf_p">
           <h2>参考均价</h2>
           <div class="jiage">{{projectInfo.averageprice==""||projectInfo.averageprice==null?'价格待定':projectInfo.averageprice+'元/㎡'}}</div>
         </div>
         <div class="right_p">
           <h2>开盘时间</h2>
           <div class="jiage">{{projectInfo.opendate==""||projectInfo.opendate==null?'暂无信息':projectInfo.opendate}}</div>
         </div>
       </div>

       <div class="information">
         <div class="shang">
          <div>
            <div class="xq_l">总套数</div>
            <span class="maohao">：</span>
            <div class="xq_r">{{projectInfo.housecountv==""?'暂无':projectInfo.housecount+'套'}}</div>
          </div>
          <div>
            <div class="xq_l">土地年限</div>
            <span class="maohao">：</span>
            <div class="xq_r">{{projectInfo.landyear==""?'暂无':projectInfo.landyear+'年'}}</div>
          </div>
          <div>
            <div class="xq_l">车位个数</div>
            <span class="maohao">：</span>
            <div class="xq_r">{{projectInfo.parknumber==""?'暂无':projectInfo.parknumber+'个'}}</div>
          </div>
          <div>
            <div class="xq_l">物业费</div>
            <span class="maohao">：</span>
            <div class="xq_r">{{projectInfo.propertycost==""?'暂无':projectInfo.propertycost+'元/㎡'}}</div>
          </div>
         </div>
         <div class="bfb" @click="clickAdress">
            <div class="xq_l">地址</div>
            <span class="maohao">：</span>
            <div class="xq_rs">{{projectInfo.address==""?'暂无':projectInfo.address}}</div>
            <p>></p>
         </div>
         <div class="bfb" @click="moreDetails(index,$event)" :data-id="projectInfo.id">
            <div class="xq_l">更多</div>
            <span class="maohao">：</span>
            <div class="xq_rs">点击查看更多详情</div>
            <p>></p>
         </div>
       </div>

       <div class="anniu">
         <div class="bjtz" @click="newMessage">
           <image :src="img2" mode="scaleToFill"/>
           <span>变价通知</span>
         </div>
         <div class="kptx" @click="newOpening">
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
      <div class="discountdiv" v-if="discountList.length > 0 ? true : false">
        <p>优惠信息</p>
        <div class="discount" v-for="(item, index) in discountList" :key="index">
          <h2>{{item.title }}</h2>
          <h3>{{item.keyword}}<span>...[查看详情]</span></h3>
        </div>
      </div>
      <!-- 优惠结束 -->
      
      <!-- 户型开始 -->
      <div class="huxingda">
        <div class="hx_bt">
          <p>户型介绍</p>
        </div>

        <div class="huxingqh" v-for="(item, index) in houseArr" :key="index">
          <div class="bthx" :class="{'selected':j === index}" @click="huxing(index)">{{item.Key}}</div>
         
        </div>
          <div class="huxing">
          <scroll-view scroll-x="true" style="width: 100%" class="image-group">
            <div class="yishi" >
              <div class="dg_hx" v-for="(item, ind) in housegengdss" :key="ind">
                <image v-if="domain" :src="domain+item.imgurl" class="yh-image" mode="scaleToFill" @click="HousetypeImg(pro,$event)" :data-src="domain+item.imgurl"/>
                <div class="bt_s"><h1>{{item.title}}</h1></div>
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
        <div class="map_img" v-if="location">
          <div class="waper"></div>
          <map id="map" :longitude="location.lng" :latitude="location.lat" :scale="14" :controls="controls" 
          bindcontroltap="controltap" :markers="markers" :bindmarkertap="markertap" :polyline="polyline"
          :bindregionchange="regionchange" show-location style="width: 100%; height: 220px;"
          :enable-scroll="false" :enable-zoom="false" @click="clickAdress"></map>
         </div>
         
      </div>
      <!-- 位置及周边配套结束 -->

      <!-- 置业顾问开始  -->
      <div class="huxingda" v-if="guwenlists.length > 0 ? true : false">
        <div class="hx_bt">
          <p>置业顾问</p>
          <span @click="consultant">更多顾问</span>
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

          <div class="guwen_list" v-for="(item, index) in guwenlists" :key="index" >
            <div class="left_g" @click="consultantClick(index,$event)" :data-id="item.id">
              <image :src="item.imghead_url==''?img1:domain+item.imghead_url" class="slide-image" mode="scaleToFill"/>
              <div class="neirong">
                <div>
                  <h1>{{item.realname}}</h1>
                  <!-- <span>{{item.companyname}}</span> -->
                  <div class="clear"></div>
                </div>
                <!-- <p>{{item.evaluation}}</p> -->
              </div>
            </div>
            <div class="right_g">
              <p class="wxl"><image :src="img9" class="slide-image" mode="scaleToFill" :data-wxid="item.wxid==''?item.telphone:item.wxid"
                  @click="wxhcopy(index,$event)" /></p>
              <p class="dhr"><image :src="img10s" class="slide-image" mode="scaleToFill" :data-telphone="item.telphone" @click="telphoneClick(index,$event)" /></p>
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
            <div class="intention-mt" v-for="(item, index) in newslikelist" :key="index" :data-id="item.id" @click="newDetail(index,$event)">
              <image :src="domain+item.ImgUrl" class="new-image" mode="scaleToFill" />
              <div class="intention-right">
                <div class="bt_ri">
                  <div class="bt_s newHouse_name">{{item.name}}</div>
                  <div class="salestatename">{{item.salestatename}} </div>
                </div>
                <div class="zonename">
                  {{item.zonename}}
                </div>
                <div class="youshi">
                  <div class="youshi2">{{item.Decorationname==""||item.Decorationname==null?'暂无':item.Decorationname}}</div>
                  <div class="youshi2">{{item.existingname==""||item.existingname==null?'暂无':item.existingname}}</div> 
                </div>

                <div class="m-x">
                  <p class="money">{{item.averageprice==""||item.averageprice==null?'价格待定':'均价'+item.averageprice+'元/m²'}}</p>
                </div>
              </div>
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
          <button @click="followClick">
            <image :src='[state==0?img10:img12]' />
            <p>关注</p>
          </button>
        </div>

        <button open-type="share" class="fenxiangs">
          <image :src="img11" class="slide-image" />
          <p>分享</p>
        </button>
      </div>
      <div class="right_foot">
        <div class="Report" @click="reportClick(index,$event)" >带看报备</div>
        <div class="Telephone" @click="clickService">400电话</div>
      </div>
    </div>
    <!-- 底部按钮开始 -->


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
      current: 0,
      location:null,
      domain:null,
      vrurl:"",
      vrimg:"",
      imgArr:[],
      ImgUrl:"",
      img_url:"",
      zwvr:app.globalData.imgurl +"vrsp.png",
      img_vr: app.globalData.imgurl +"VR.png",
      bf:app.globalData.imgurl +"vr_icon.png",
      projectInfo:null,
      newslikelist:[],
      houseArr:[], 
      housegengd:[],
      housegengdss:[],
      listData:[],
      j:0,
      houserid:"",
      maskHid:false,
      telHid:false,
      code:"",
      state:"",
      extnumber:"",
      hostphone:"", 
      HousetypeImgs:"", 
      loupanid:"",
      guwenlists:[],
      discountList:[],
      img9:app.globalData.imgurl +"wx.png",
      img10s: app.globalData.imgurl +"dh.png",
      address:"",
      img1:app.globalData.imgurl +"ren.png",
      img2:app.globalData.imgurl +"bj.png",
      img3:app.globalData.imgurl +"tx.png",
      img10: app.globalData.imgurl +"gz.png",
      img11: app.globalData.imgurl +"fx.png",
      img12: app.globalData.imgurl +"xin.png",
      mf1: app.globalData.imgurl +"mf1.png",
      mf2: app.globalData.imgurl +"mf2.png",
      mf3: app.globalData.imgurl +"mf3.png",
      mf4: app.globalData.imgurl +"mf4.png",
      tabBar: [{ "title": "VR" },{ "title": "图片" }],
      currentTab: 0,
      movies: [], 
      newsArr: [],
      lookList:[
        {
          time:"",
					id: "",
					name: "",
					ImgUrl: "",
          salestatename:"",
          zonename:"",
          Decorationname:"",
          existingname:"",
          averageprice:"",

        },
      ], 
      arrayxf:[],
          






    }
  },
  onLoad(option) {
    const that = this;
    that.movies="";
    that.projectInfo="",
    that.domain=app.globalData.domain;
    that.houserid=option.id;
    that.imgArr=[];
    that.houseArr=[];
    that.housegengd=[];
    that.listData=[];
    that.state=0;
    //获取详情
      wx.request({
        url:app.globalData.url +"Project/BandProjectInfo" +"?sessionKey=" +app.globalData.sessionKey+'&projectId=' + option.id,
        success: function (res) {
          console.log('详情',res)
          // 房源轮播图
          that.movies = res.data.Context.pictureInfo;
          for(var i = 0;i<that.movies.length;i++){
            that.imgArr.push(that.domain+that.movies[i].imgurl); 
          } 
          //房源基本信息详情
          that.projectInfo = res.data.Context.projectInfo;
          that.loupanid = res.data.Context.projectInfo.id;  //楼盘id
          that.extnumber = res.data.Context.projectInfo.extnumber;   //分机号
          that.hostphone = res.data.Context.hostphone;   //400总号
          that.vrimg = res.data.Context.projectInfo.vrimg;
          that.vrurl=res.data.Context.projectInfo.vrurl;
          that.newsArr=res.data.Context.salesnews;


          // 浏览记录
          if(wx.getStorageSync("arrayxf")){
            that.arrayxf = wx.getStorageSync("arrayxf");
          }
          let patient = res.data;

          let val={
            time:common.ConvertTimestamp(new Date()),
            id:option.id,
            name:that.projectInfo.name,
            ImgUrl:that.projectInfo.ImgUrl,
            salestatename:that.projectInfo.salestatename,
            zonename:that.projectInfo.zonename,
            Decorationname:that.projectInfo.Decorationname,
            existingname:that.projectInfo.existingname,
            averageprice:that.projectInfo.averageprice
          };
          that.arrayxf.push(val);
          var regionValueArray = [];
          that.arrayxf = that.arrayxf.reduce(function(arr, obj) {
            let count = 0;
            arr.forEach( function(item,key){
              if(item.id == obj.id){
                count = 1;
                arr[key]=obj;
              }
            })
            if(!count)arr.push(obj);
            return arr;
          },[]);
          that.arrayxf.sort(that.compare('time',false));
          wx.setStorageSync('arrayxf',that.arrayxf);


          //优惠信息
          that.discountList = res.data.Context.offerinfo;
          // 猜你喜欢
          that.newslikelist = res.data.Context.guessInfo;
          // 户型图
          that.houseArr = res.data.Context.doormodleList;
          for(var i = 0;i<that.houseArr.length;i++){
            that.housegengd.push(that.houseArr[i].List);
          }
          that.housegengdss = that.housegengd[0]; 
          that.HousetypeImgs = that.housegengdss[0].imgurl;
          that.listData.push(that.domain+that.HousetypeImgs);
          console.log('户型图片',that.listData)
          //置业顾问
          that.guwenlists = res.data.Context.managerList;



          // 地图
          qqMap.geocoder({
          address:that.projectInfo.address,   //用户输入的地址（注：地址中请包含城市名称，否则会影响解析效果），如：'北京市海淀区彩和坊路海淀西大街74号'
          complete: data => {
            if(data.status==0){
              that.location=data.result.location;
              that.markers=[{
                id: 1,
                latitude: that.location.lat,
                longitude: that.location.lng,
                name: that.projectInfo.name,
                width: 30,
                height: 30,
                iconPath:app.globalData.imgurl +"map.png",
                callout: {
                  content: that.projectInfo.name,
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

           
           
        },
        fail: function (res) {},
      });

      //获取用户关注
      wx.request({
        url:app.globalData.url +"Percenter/BandUserRelationProject" +"?sessionKey=" +app.globalData.sessionKey+'&projectId=' + that.houserid,
        success: function (res) {
          if(res.data.Code==0){
            that.state=res.data.Context.isganzhu;
          }
        }
      });

      
         
  },
  onShow(){
  const that = this;
    wx.request({
      url:app.globalData.url +"Percenter/BandUserRelationProject" +"?sessionKey=" +app.globalData.sessionKey+'&projectId=' + that.houserid,
      success: function (res) {
        if(res.data.Code==0){
          if(res.data.Context.isganzhu>0){
            that.state=1;
          }else{
            that.state=0;
          }
        }
      }
    });
  
  
  },
  onShareAppMessage: function(res) {
    return {
      title: "新房详情",
      path: "/pages/newhousedetails/main",
      imageUrl: "",
    };
  },
 
  methods: {
    // 浏览记录
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



    clickTab(e) {
      this.currentTab = e;
    },
    changeTab(e) {
      this.currentTab = e.mp.detail.current;
    },
    huxing(index){
      this.j = index;
      this.housegengdss = this.housegengd[index];
    },
    gz_dj(){
      if(this.gztu_img==1){
        this.gztu_img=0;
      }else{
        this.gztu_img=1;
      }
    },
    djimg(e) {
       this.current = e.target.current;
     },
    //点击放大轮播图片
    previewImg:function(pro,e){
    const that = this;
    var index = pro;
    var img_url = e.target.dataset.src;
      wx.previewImage({
        current: img_url,     //当前图片地址
        urls:that.imgArr,     //所有要预览的图片的地址集合 数组形式
        success: function(res) {},
        fail: function(res) {
        },
        complete: function(res) {},
      })
    },
    //点击跳转vr
    previewVr:function(){
      const that = this;
      wx.navigateTo({ url: "/pages/vrurl/main?projectId=" + that.loupanid});
    },

    //变价通知
    newMessage(){
      const that = this;
      wx.request({
        url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          console.log("qqq",data)
          if(data.data==true){
            that.telHid=false;
            that.maskHid=false;
            wx.request({
              url: app.globalData.url +"Percenter/BandUserRelationProject?sessionKey=" +app.globalData.sessionKey+'&projectId=' + that.houserid,
              success: function (res) {
                console.log("变价",res)
                if(res.data.Context.isprice>0){
                  wx.showToast({
                    title: '您已订阅',
                    duration: 1000,
                  })
                }else{
                  wx.requestSubscribeMessage({
                    tmplIds: ["UrMP877AEme8QjIJuirocbL4kgk90Lb2ZJUOROVdKgk"],
                    success(data) {
                      if(data["UrMP877AEme8QjIJuirocbL4kgk90Lb2ZJUOROVdKgk"] == "accept"){ 
                        console.log("允许")
                        that.pushFun();
                      } else if(data["UrMP877AEme8QjIJuirocbL4kgk90Lb2ZJUOROVdKgk"] == "reject") {
                        console.log("拒绝")
                        Toast("允许后才可以订阅消息哦");
                      }
                    }
                  })
                }
              }
            }) 
          }else{
            that.telHid=true;
            that.maskHid=true;
          }
        }
      })

    },
    //发送变价通知推送消息接口
    pushFun(){
      const that = this;
      wx.request({
        url: app.globalData.url +"Project/AddPriceChange?sessionKey=" +app.globalData.sessionKey+'&project_id=' + that.houserid,
        success (res) { 
          wx.showToast({
            title: '订阅成功',
            duration: 1000,
          })
        }
      })
    },
    //开盘提醒
    newOpening(){
      const that = this;
      wx.request({
        url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          console.log("qqq",data)
          if(data.data==true){
            that.telHid=false;
            that.maskHid=false;
            wx.request({
              url: app.globalData.url +"Percenter/BandUserRelationProject?sessionKey=" +app.globalData.sessionKey+'&projectId=' + that.houserid,
              success: function (res) {
                console.log("变价",res)
                if(res.data.Context.isopen>0){
                  wx.showToast({
                    title: '您已订阅',
                    duration: 1000,
                  })
                }else{
                  wx.requestSubscribeMessage({
                    tmplIds: ["eGx1SbCD5dk-B9WiB4mKN_GDxSCLsEyJ3DzDTM_sjaI"],
                    success(data) {
                      if(data["eGx1SbCD5dk-B9WiB4mKN_GDxSCLsEyJ3DzDTM_sjaI"] == "accept"){ 
                        console.log("允许")
                        that.reminderFun();
                      } else if(data["eGx1SbCD5dk-B9WiB4mKN_GDxSCLsEyJ3DzDTM_sjaI"] == "reject") {
                        console.log("拒绝")
                        Toast("允许后才可以订阅消息哦");
                      }
                    }
                  })
                }
              }
            }) 
          }else{
            that.telHid=true;
            that.maskHid=true;
          }
        }
      })

    },
    //发送变价通知推送消息接口
    reminderFun(){
      const that = this;
      wx.request({
        url: app.globalData.url +"Project/AddOpenChange?sessionKey=" +app.globalData.sessionKey+'&project_id=' + that.houserid,
        success (res) { 
          wx.showToast({
            title: '订阅成功',
            duration: 1000,
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
                  console.log("deng",data)
                  if(data.data.Code==0){
                    that.telHid=false;
                    that.maskHid=false;
                    wx.setStorageSync('member',data.data.Context.member);
                    that.openType="";
                    app.globalData.member=data.data.Context.member; 

                      //检查是否关注
                      wx.request({
                        url:app.globalData.url +"Percenter/BandUserRelationProject" +"?sessionKey=" +app.globalData.sessionKey+'&projectId=' + that.houserid,
                        success: function (res) {
                          if(res.data.Code==0){
                            if(res.data.Context.isganzhu>0){
                              that.state=1;
                            }else{
                              that.state=0;
                            }
                          }
                          
                        }
                      });
 
                  
                  }
                }
              })
          }
        })
      }
    },

    //点击关注
    //如果关注状态为0调用关注接口，如果为1调用取消关注接口
    followClick(){
      const that = this; 
      if(that.state==0){
         wx.request({
            url: app.globalData.url +"Project/BandProjectFollow?sessionKey=" +app.globalData.sessionKey+'&projectId=' + that.houserid,
            success (res) {
              console.log("关注",res)
              if(res.data.Code==0){
                that.telHid=false;
                that.maskHid=false;
                that.state=1;
                wx.showToast({
                  title: '关注成功',
                  icon: 'success',
                  duration: 2000
                });
              }else{
                that.telHid=true;
                that.maskHid=true;
              }

            }
         })

      }else{
        wx.request({
            url: app.globalData.url +"Project/BandProjectCancelFollow?sessionKey=" +app.globalData.sessionKey+'&projectId=' + that.houserid,
            success (res) {
              if(res.data.Code==0){
                that.state=0;
                wx.showToast({
                  title: '取消关注',
                  icon: 'none',
                  duration: 2000
                });

              }
            }
        })

      }

    },


    //点击户型图片放大
    HousetypeImg:function(pro,e){
      const that = this;
      var index = pro;
      console.log('户型图片',e.target.dataset.src)
      var img_url = e.target.dataset.src;
        wx.previewImage({
          current: img_url,     //当前图片地址
          urls:that.listData,     //预览的图片的地址
          success: function(res) {},
          fail: function(res) {
          },
          complete: function(res) {},
        })
    },
    // 拨打400电话
    clickService(){
      const that = this;
      wx.makePhoneCall({
        phoneNumber:that.hostphone+","+that.extnumber //仅为示例，并非真实的电话号码
        
      })
    },
    //拨打置业顾问电话
    telphoneClick:function(index,e){
      console.log('置业顾问电话',e.currentTarget.dataset.telphone)
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.telphone
      })
    },
    //置业顾问点击复制微信号
    wxhcopy: function(index, e) {
      const that = this;
      console.log("置业顾问微信号",e.mp.currentTarget.dataset.wxid)
      wx.setClipboardData({
        data: e.mp.currentTarget.dataset.wxid,
        success: function (res) {
          wx.showToast({
            title: '复制成功'
          })
        }
      })
    },
    //点击跳转新房详情页
    newDetail:function(index,e){
      console.log('新房详情',e.mp.currentTarget.dataset)
      wx.navigateTo({ url: "/pages/newhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
    //获取经纬度
    clickAdress(e){
     const that = this;
      if(that.location!=null){
        wx.openLocation({
          latitude: that.location.lat,
          longitude: that.location.lng,
          name: that.projectInfo.name, 
          address: that.projectInfo.address, 
        })
      }else {
        wx.showToast({
          title: '无法定位到该地址！',
          icon: 'none',
          duration: 2000,
        })
      }
    },
    
    // 点击楼盘信息详情页
    moreDetails:function(index,e){
      wx.navigateTo({ url: "/pages/buildingdetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
    // 点击跳转带看报备
    reportClick:function(index,e){
      const that = this;
      wx.request({
        url:app.globalData.url +"WxLogin/CheckLogin" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (data) {
          
          if(data.data==true){
            that.telHid=false;
            that.maskHid=false;
            if(app.globalData.member.type == 1){
              wx.showToast({
                title: '你不是经纪人',
                icon: 'none',
                duration: 1000,
              })
            }else{
              wx.navigateTo({ url: "/pages/Report/main?pid=" + that.houserid + "&mid=" + app.globalData.member.id});  
            }
          }else{
            that.telHid=true;
            that.maskHid=true;
          }
        }
      })
    }, 
    // 点击置业顾问跳转列表页
    consultant:function(index,e){
      const that = this;
      wx.navigateTo({ url: "/pages/consultantList/main?projectId=" + that.loupanid});
    },
    //点击置业顾问跳转置业顾问名片
    consultantClick:function(index,e){
      console.log("置业顾问",e)
      wx.navigateTo({ url: "/pages/consultantDetails/main?mid=" + e.mp.currentTarget.dataset.id});
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

/* vr图片 */
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

/* .top {
   width:160rpx; height:40rpx; border-radius:40rpx; 
   text-align: center;
   line-height:40rpx; margin: 0 auto; 
   position: absolute;
   background: rgba(255, 255, 255, 0.596); top:410rpx; z-index: 9999; left: 40%;
 }
 .tabbar {
   width:80rpx;
   font-size:26rpx;
   height:40rpx;
   display: inline-block;
   color: #000;
 }
.tabbar-bottom { width:80rpx; height:42rpx; line-height:42rpx; text-align: center; background: #2196f3; color: #fff; border-radius:40rpx; }
.swiper{ height:480rpx;}
.vrdajia{ height: 1200rpx;}
.vrda{ width: 100%; height: 1200rpx; position: relative; z-index: 9;}
.vr-image{ width: 100%; }
.play{ width:150rpx; height: 150rpx; position: absolute; z-index: 999; left:42%; top:32%;}
.play image{ width:150rpx; height: 150rpx; display: block; margin: 0 auto;} */



.newhousedetails{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:40rpx;  border-bottom:20rpx #efefef solid;}
.housedetails_name{ margin-top: 30rpx; clear: both; }
.housedetails_name h1{ font-size:43rpx; font-weight: bold; float: left; margin-right: 10rpx;} 
.housedetails_name p{ font-size: 24rpx; padding:3rpx 8rpx; background: rgb(30, 129, 241); float: left; border-radius:6rpx; color: #fff; margin-top:10rpx;}
.advantage{ clear: both; margin-top:20rpx;}
.advantage div{ float: left; padding: 5rpx 10rpx; font-size: 20rpx; border:2rpx #ccc solid; color: #a8a8a8; border-radius:6rpx; 
margin-right:10rpx; margin-top:20rpx; font-size: 26rpx; }

.price{ width: 100%; clear: both;}
.lelf_p{ float: left; width:49%; margin-top:25rpx; margin-bottom: 25rpx;border-right: 1px #e8e8e8 solid;}
.lelf_p h2{ color: #a8a8a8; font-size:26rpx; margin-bottom:10rpx; }
.lelf_p .jiage{ font-size:38rpx; color: #fa5741; font-weight: bold; margin-top:6rpx;} 

.right_p{ float: right; width:50%; margin-top:25rpx; margin-bottom:25rpx;}
.right_p h2{ color: #a8a8a8; font-size:26rpx; margin-left: 15%;margin-bottom:10rpx; }
.right_p .jiage{ font-size:38rpx; color: #fa5741; font-weight: bold; margin-top:6rpx; margin-left: 15%;} 

.information{ width:100%;}
.information .shang{ clear: both;  }
.information .shang{ margin-top: 3%; padding-bottom:40rpx; margin-top:35rpx;}
.information .shang>div{float: left; width: 50%; height:65rpx;}
.xq_l{color: rgb(160, 160, 160);float: left; font-size:30rpx; width:120rpx; text-align: justify;text-justify:distribute-all-lines;}
.xq_l:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.maohao{float: left;color: rgb(160, 160, 160); position: relative; top:0rpx;font-size:30rpx; }
.xq_r{float: left; font-size:30rpx; overflow:hidden; text-overflow:ellipsis;white-space:nowrap;width: 54%;}
.bo_lp{ width: 100% !important;}
/* .information .fl{ float: left; width:50%; color: #8d8c8c; font-size: 28rpx; margin-top: 10rpx; margin-bottom: 10rpx;  }
.information .fl span{ color: #000;}
.information .fr{ float: right;width:50%; color: #8d8c8c; font-size: 28rpx; margin-top: 10rpx; margin-bottom: 10rpx; }
.information .fr span{ color: #000;} */
.information .bfb{ width: 100%; color: #8d8c8c; font-size: 28rpx; height: 60rpx; overflow: hidden;}
/* .information .bfb span{ color: #000; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 70%; display: inline-flex;} */
.xq_rs{float: left; font-size:30rpx;  overflow:hidden; text-overflow:ellipsis;white-space:nowrap;width:70%; color: #000;}
.information div p{ float: right;color: #c5c5c5; }

.anniu{ width: 100%; margin-top: 30rpx; }
.bjtz{ float: left; width: 45%; margin-right: 4%; border:3rpx #3072f6 solid;   height: 80rpx; border-radius:10rpx; text-align: center; line-height: 80rpx;}
.bjtz image{ width:45rpx; height:45rpx; margin-top:16rpx; margin-right:12rpx;}
.bjtz span{ color: #3072f6; position: relative; top:-8rpx;font-weight: bold; }

.kptx{ float: right; width: 45%; margin-left: 4%;  border:3rpx #3072f6 solid; height: 80rpx; border-radius:10rpx; text-align: center; line-height: 80rpx;}
.kptx image{ width:45rpx; height:45rpx; margin-top:16rpx; margin-right:12rpx;}
.kptx span{ color: #3072f6; position: relative; top:-7rpx;font-weight: bold;}



.discountdiv{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:5%;  border-bottom:20rpx #efefef solid;;}
.discountdiv p{ font-size:35rpx; font-weight: bold; }
.discountdiv .discount{ width: 100%; margin-top: 20rpx; border-bottom: 1px rgb(241, 241, 241) dotted; padding-bottom: 20rpx; } 
.discountdiv .discount h2{ font-size: 30rpx;display: block;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;  }
.discountdiv .discount h3{ display: block; width: 100%; font-size:26rpx; margin-top:10rpx; color:#333;}
.discountdiv .discount h3 span{ color: rgb(255, 97, 23);}

.huxingda{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom:6%;  border-bottom:20rpx #efefef solid;}
.hx_bt{ width:100%; overflow: hidden;}
.hx_bt p{ float: left; font-size:35rpx; font-weight: bold;}
.hx_bt span{ float: right; font-size:25rpx;}

 
.image-group { display: flex; white-space: nowrap; margin-top:10rpx;}

.huxingqh{ margin-top: 5%;}
.bthx{ font-size: 32rpx; margin-right:4%; float: left;  }
.selected{ color:rgb(39, 151, 226); font-weight: 700; }
.huxing{ width: 100%;}
.dg_hx{ margin-right:6%; width:70%; margin-top: 3%; display: inline-block; }
.dg_hx image{ width:100%;height:360rpx;}
.dg_hx .bt_s{ clear: both; margin-top: 3%;}
.dg_hx .bt_s h1{ width:90%; float: left; font-size: 30rpx; font-weight: 900; margin-right: 2%; white-space: nowrap; overflow: hidden; 
text-overflow: ellipsis;}
.dg_hx .bt_s h2{ float: left; font-size: 22rpx; color: #fff; background: #2196f3; padding: 3rpx 5rpx; border-radius:4rpx; margin-right: 3%;margin-top: 1%;}
.dg_hx .bt_s h3{ float: left;margin-top: 1%; }
.dg_hx .bt_s h3 p{ float: left; font-size: 22rpx; border-radius:4rpx; border:2rpx #ccc solid; width:50rpx; margin-right:1%; text-align: center;}
.dg_hx .jm{ font-size: 27rpx; margin-top:2%;} 
.dg_hx .price_s{ color: #f16160; font-size:28rpx; margin-top: 2%; font-weight: 800;}


.map{background: rgba(255,255,255,0.8);padding: 20rpx;margin-top: 25rpx;box-sizing: border-box;border-radius: 10rpx; }
.map_img{width:100%; margin-bottom: 50rpx; position: relative; top:20rpx; }
.map_img>image{width: 100%;height: 100%; margin-top: 3%;}
.waper{width: 100%;height: 100%;position: absolute;top: 0;left: 0;}

.fuwu{ width:100%; margin-top: 3%;}
.fuwu image{ width:28rpx; height:28rpx; margin-right:3%; display: block; margin-top: 3%; float: left;  }
.fuwu p{ float: left; width: 25%; font-size: 25rpx; color: #969ca8; position: relative; top: -28%;}


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

/* .guwen_list{ width: 100%; margin-top:2%; overflow: hidden;}
.left_g{ float: left; width:85%;}
.left_g image{ float: left; width:120rpx; height:120rpx; border-radius: 50%; margin-right: 2%;}
.neirong{ float: left; width:70%; margin-top:3%; }
.neirong div h1{float: left; font-size:36rpx; font-weight: bold; margin-right:10rpx; }
.neirong div span{ float: left; font-size:26rpx; padding:1rpx 2rpx; border:2rpx #f86577 solid; color: #f86577; text-align: center; border-radius:6rpx;}
.neirong p{ font-size:28rpx; color: #969ca8; margin-top: 2%;}

.pingjia{ margin-top:1%; font-size:24rpx; margin-top: 5%; margin-left:18%;}
.pingjia p{ float: left; padding: 3rpx 6rpx 3rpx 6rpx; border-radius:4rpx; margin-right: 2%; background: #f1f1f1; color: #969ca8;}

.right_g{ float: right; margin-top:8%;}
.right_g image{ width:50rpx; height:50rpx;}*/


.zixun{ width:100%; margin-top:5%;}
.zixun ul li{ margin-top: 2%;}
.zixun ul li h2{ font-size:30rpx; }
.zixun ul li p{ font-size: 27rpx; line-height:42rpx; margin-top:2%;}
.zixun ul li span{ font-size: 25rpx; color: #ccc;} */


/* 猜你喜欢 */
.intention-house {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 5%;
  padding-bottom: 5%;
  border-bottom: 20rpx #efefef solid;
}
.intention-nr {
  width:100%;
  margin-top: 15px;
}
.intention-mt {
  overflow: hidden;
  width:100%;
  margin-bottom: 15rpx;
}
.intention-nr image {
  float: left;
  width: 40%;
  height: 190rpx;
  border-radius: 10rpx;
}
.intention-nr .intention-right {
  float: right;
  width: 57%;
  /* margin-top: 20rpx; */
}
.intention-nr .intention-right .bt_ri {
  overflow: hidden;
}
.intention-nr .intention-right .bt_ri h1 {
  float: left;
  font-size: 34rpx;
  font-weight: bold;
  margin-right: 4rpx;
}
.salestatename {
  float: right;
  width: 115rpx;
  height: 40rpx;
  line-height: 40rpx;
  background: #0a8de4;
  text-align: center;
  font-size: 25rpx;
  margin-right: 10rpx;
  color: #fff;
  border-radius: 3px;
}
.youshi{overflow:hidden;}
.youshi2 {
  float: left;
  padding-left: 10rpx;
  padding-right: 10rpx;
  height: 40rpx;
  line-height: 40rpx;
  border-radius: 3px;
  border: 1rpx #efefef solid;
  color: #6b7072;
  font-size: 25rpx;
  text-align: center;
  margin-top: 15rpx;
  margin-right: 10rpx;
}
.m-x image {
  float: right;
  width: 14px;
  height: 8px;
  margin-top: 5rpx;
}
.newHouse_name{float: left;}
.zonename{color: #333;font-size: 25rpx;margin-top: 10rpx;}
/* .average{color: #A1A1A1;margin-left: 20rpx;font-size: 28rpx;}
.proNew{overflow: hidden;margin-left: 3%;margin-right: 3%;margin-top: 20rpx;}
.proNew>div{float: left;width: 66%;font-size: 30rpx;margin-top: 10rpx;}
.proNew>image{float: left;width: 32%;height: 160rpx;margin-right: 2%;border-radius: 10rpx;} */
.intention-right .r_wz {float: right;width: 57%;}
.intention-right .bt_s{
  width: 60%;
  font-size: 30rpx;
  font-weight: bold;
  margin-right: 10rpx;
  white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis; 
}
.jieshao {
  font-size: 25rpx;
  color: #333;
  margin-top: 10rpx;
}
.m-x {
  margin-top: 10rpx;
  overflow: hidden;height: 50rpx;line-height: 50rpx;
}
.money {
  font-size: 30rpx;
  color: #fa5741;
  font-weight: 900;
  margin-right: 5rpx;
} 



/* 底部 */
.footer{ width:97%; height: 120rpx; background: #fff;position: fixed;bottom: 0; padding-left:3%;}
.left_foot{ float: left; width:27%;height: 120rpx;}

/* .left_foot .guanzhus{ float: left; width:50%; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot .guanzhus image{ width:36rpx; height:36rpx;}
.left_foot .guanzhus p{ font-size: 26rpx; color: #000; position: relative; top:-24rpx; left:22%;} */

.left_foot .guanzhus{ float: left; width:50%; margin: 0 auto; background: #fff;overflow: inherit;border: none; 
padding: 0 !important;}
.left_foot .guanzhus button{ background: none;}
.left_foot .guanzhus image{ width:40rpx; height:40rpx;}
.left_foot .guanzhus p{ font-size: 26rpx; color: #000; position: relative; top:-28rpx; height: 40rpx;line-height: 40rpx;}
 

 


.left_foot .fenxiangs{ float: left; width:50%; height:50rpx; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important;}
.left_foot button::after{border: none; padding: 0 !important;}
.left_foot .fenxiangs image{ width:36rpx; height:36rpx;}
.left_foot .fenxiangs p{ font-size: 26rpx; color: #000; position: relative; top: -40rpx;}

.right_foot{ float: right; width:70%; margin-top:14rpx;}
.Report{ float: left; width: 45%; background: #3dc28e; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius: 5px; color: #fff; margin-right: 5%;}
.Telephone{ float: right; width: 45%; background: #2e72f1; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}

/* 提醒授权开始 */
.authorization{width: 80%;margin: 0 auto;position: fixed;top: 390rpx;left: 10%;z-index:999999999;
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

</style>
