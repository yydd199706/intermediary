<template>
  <div class="indexstyle">

    <div class="heard">
      <!-- 搜索开始 -->
      <div class="search">
        <input type="text" placeholder="请输入楼盘名或区域"
        disabled="disabled" @click="searchUrl" :value="keyword"/>
        <image :src="img2" mode="scaleToFill"/>
      </div>
      <!-- 搜索结束 -->

      <!-- 二级导航开始 -->
      <div class="nav">
        <div class="navigation" v-for="(item, index) in navs" :key="index" @click="navClick(index,$event)">
          <image :src="item.img3" mode="scaleToFill"/>
          <div class="biaoti">{{item.title}}</div>
        </div>
      </div>
      <!-- 二级导航结束 -->
    </div>



    <!-- 筛选开始 -->
    <div class="shaixuan">
      <div class="shang_sx">

        <div class="s_lanmu">
           <div class="region_bt" @click="dianji_qy" :class="[zoneArr.length>0||xianshi_qy==true?'career':'']">
             {{zoneArr.length>1?'多选':'区域'}}
             <image :src='[xianshi_qy==false?img3:img4]' mode="scaleToFill"/>
            </div>
            <div class="region_bt" @click="dianji_jg" :class="[priceArr.length>0||xianshi_jg==true?'career':'']">
             {{priceArr.length>1?'多选':'价格'}}
             <image :src='[xianshi_jg==false?img3:img4]' mode="scaleToFill"/>
           </div>
           <div class="region_bt" @click="dianji_hx" :class="[apirlroomArr.length>0||xianshi_hx==true?'career':'']">
             {{apirlroomArr.length>1?'多选':'户型'}}
             <image :src='[xianshi_hx==false?img3:img4]' mode="scaleToFill"/>
           </div>
           <div class="region_bt" @click="dianji_sx" :class="[propertytypeArr.length>0||xianshi_sx==true||specialId!=''||
             salestateId!=''?'career':'']">{{propertytypeArr.length>1?'多选':'筛选'}}
             <image :src='[xianshi_sx==false?img3:img4]' mode="scaleToFill"/>
           </div>
           <div class="region_bt" @click="dianji_sort" :class="[isPx||pxName!='排序'?'career':'']">{{pxName}}
             <image :src='[xianshi_sort==false?img3:img4]' mode="scaleToFill"/>
           </div>
        </div>




        <!-- 区域开始 -->
        <div class="region_xl" v-if="xianshi_qy">
          <div class="huxing">
            <p v-for="(item, index) in regionType" :key="index" :data-id="item.Id" :data-isQytype="item.isQytype"
              @click="quClick(index,$event)" :data-name="item.Name" :class="[item.isQytype?'type':'none']"
              :data-show="show">
              {{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="x_dibu" @click="qyReset">
            <div class="z_buxian">
              <div><image :src='img6' mode="scaleToFill"/></div>
              <div>重置</div>
              </div>
            <div class="y_quding" @click="qySure">确定</div> 
          </div>
        </div>
        <!-- 区域开始 -->

        <!-- 价格开始 -->
        <div class="region_xl" v-if="xianshi_jg">
          <div class="huxing">
            <p v-for="(item, index) in priceType" :key="index" :data-id="item.Id" :data-isJgtype="item.isJgtype"
              @click="jgClick(index,$event)" :data-name="item.Name" :class="[item.isJgtype?'type':'none']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="x_dibu" @click="jgReset">
            <div class="z_buxian">
              <div><image :src='img6' mode="scaleToFill"/></div>
              <div>重置</div>
              </div> 
            <div class="y_quding" @click="qySure">确定</div>
          </div>
        </div>
        <!-- 价格开始 -->

        <!-- 户型开始 -->
        <div class="region_xl" v-if="xianshi_hx">
          <div class="huxing">
            <p v-for="(item, index) in apirlroomType" :key="index" :data-id="item.Id" :data-isHxtype="item.isHxtype"
              @click="hxClick(index,$event)" :data-name="item.Name" :class="[item.isHxtype?'type':'none']">{{item.Name}}</p>
          <div class="clear"></div>
          </div>
          <div class="x_dibu">
            <div class="z_buxian" @click="hxReset">
              <div><image :src='img6' mode="scaleToFill"/></div>
              <div>重置</div>
            </div>
            <div class="y_quding" @click="qySure">确定</div>
          </div>
        </div>
        <!-- 户型开始 -->


        <!-- 筛选开始 -->
        <div class="region_xl" v-if="xianshi_sx">
          <div class="huxing">
            <h1>类型</h1>
            <p v-for="(item, index) in propertytypeType" :key="index" :data-id="item.Id" :data-isLxtype="item.isLxtype"
              @click="propertytypeClick(index,$event)" :data-name="item.Name" :class="[item.isLxtype?'type':'none']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="huxing">
            <h1>特色</h1>
            <p v-for="(item, index) in specialType" :key="index" :data-id="item.Id"
              @click="specialClick(index,$event)" :data-name="item.Name" :class="[special==index?'type':'']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="huxing">
            <h1>销售状态</h1>
            <p v-for="(item, index) in salestateType" :key="index" :data-id="item.Id"
              @click="salestateClick(index,$event)" :data-name="item.Name" :class="[salestate==index?'type':'']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="x_dibu">
            <div class="z_buxian" @click="gdReset">
              <div><image :src='img6' mode="scaleToFill"/></div>
              <div>重置</div>
              </div>
            <div class="y_quding" @click="qySure">确定</div>
          </div>
        </div>
        <!-- 筛选开始 -->

        <!-- 排序分类开始 -->
        <div class="region_xl" v-if="xianshi_sort">
          <div class="sort">
             <!-- :class="[item.isHxtype?'type':'none']" -->
            <div v-for="(item, index) in orderByType" :key="index" :class="[indAction==index?'colors':'']"
              @click="sortClick(index,$event)" :data-id="item.id">
              {{item.Name}}</div>
          </div>
        </div>
        <!-- 排序分类结束 -->
        <div class="clear"></div>

      </div>
    </div>
    <!-- 筛选开始 -->

    <!-- 遮罩层开始 -->
    <div class="modalMask" v-if="maskHid"></div>
    <!-- 遮罩层结束 -->

    <!-- 文章列表开始 -->
    <div class="intention-nr">
        <div class="intention-mt" v-for="(item, index) in newslist" :key="index" :data-id="item.id" @click="newDetail(index,$event)">
          <image :src="domain+item.ImgUrl" class="new-image" mode="scaleToFill" />
          <div class="intention-right">
            <div class="bt_ri">
              <div class="bt_s newHouse_name">{{item.name}}</div>
              <div class="salestatename">{{item.salestatename}} </div>
            </div>
            <div class="NewsTitle">{{item.NewsTitle==""?"暂无优惠":item.NewsTitle}}</div>
             <div class="zonename">
              {{item.zonename}}
            </div>
            <div class="youshi">
              <div class="youshi2">{{item.Decorationname}}</div>
              <div class="youshi2">{{item.existingname}}</div> 
            </div>

            <div class="m-x">
              <p class="money">{{item.averageprice==""||item.averageprice==null?'价格待定':'均价'+item.averageprice+'元/m²'}}</p>
            </div>
          </div>
        </div>
      </div>
    <!-- 文章列表结束 -->

    <!-- 暂无内容 -->
    <div class="none" v-if="newslist.length==0?true:false">
      <image :src="img5" class="new-image" mode="scaleToFill" />
      <div>暂无内容哟~~</div>
    </div>

    <!-- 一键回到顶部 -->
    <div class="hujian" v-if="topHid" @click="goTop">
      <image :src="img" class="new-image" mode="scaleToFill" />
    </div>




  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () { 
    return {
      img2: app.globalData.imgurl + "ss.png",
      navs: [
        { img3: app.globalData.imgurl + "qbxm1.png", title:'全部项目'},
        { img3: app.globalData.imgurl + "qbxm2.png", title:'在售项目'},
        { img3: app.globalData.imgurl + "qbxm3.png", title:'优惠项目'},
        { img3: app.globalData.imgurl + "qbxm4.png", title:'最新开盘'}
      ],
      newslist: [],
      domain:null,
      xianshi:false,
      maskHid:false,
      topHid:false,
      isdiscount:false,
      pageNumber:1,
      pageRecord:6,
      img:app.globalData.imgurl +"hj.png",
      img2:app.globalData.imgurl +"ss.png",
      img3:app.globalData.imgurl +"down_ra.png",
      img4:app.globalData.imgurl +"top_ra.png",
      img5:app.globalData.imgurl +"null_data.png",
      img6:app.globalData.imgurl +"clear.png",
      regionType:[],
      priceType:[],
      apirlroomType:[],
      specialType:[],
      propertytypeType:[],
      salestateType:[],
      orderByType:[{Name:"默认排序"},{Name:"总价从低到高",id:"1|0"},{Name:"总价从高到低",id:"1|1"},
      {Name:"单价从低到高",id:"2|0"},{Name:"单价从高到低",id:"2|1"},{Name:"面积从大到小",id:"3|1"},{Name:"面积从小到大",id:"3|0"}],
      isQu:false,
      isJg:false,
      isHx:false,
      isGd:false, 
      isPx:false,
      zoneArr:[],
      apirlroomArr:[],
      priceArr:[],
      propertytypeArr: [],
      zonearr:[],
      apirlroomarr:[],
      pricearr:[],
      propertytypearrs: [],
      specialId:"",
      salestateId: [],
      orderById:"",
      keyword:"",
      salestate:null,
      special:null,
      company:null,
      decoration:null,
      buildyear:null,
      toward:null,
      floor:null,
      supporting:null,
      orderBy:null,
      allPage:null,
      indAction:null,
      qyName:"区域",
      jgName:"价格",
      hxName:"户型",
      gdName:"更多",
      pxName:"排序", 
      xianshi_qy:false,
      xianshi_dq:true,
      xianshi_dt:false,
      xianshi_jg:false,
      xianshi_zj:true,
      xianshi_dj:false,
      xianshi_hx:false,
      xianshi_sx:false,
      xianshi_sort:false,
      show: false,
      qybtn:false,
      jgbtn:false,
      hxbtn:false,
      gdbtn:false,
      dqval: 0

    }
  },
  onLoad(option){
    const that = this;
    that.domain=app.globalData.domain;
    that.keyword=option.keyword;
    //获取筛选条件
      wx.request({
        url:
          app.globalData.url +
          "Project/BandProjectScreenCondition" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          that.regionType = res.data.Context.zone;
          that.priceType = res.data.Context.price;
          that.apirlroomType = res.data.Context.apirlroom;
          // that.areaType = res.data.Context.area; 
          that.propertytypeType = res.data.Context.propertytype; 
          for(var i=0;i<that.regionType.length;i++){
            that.regionType[i].isQytype=false;
          }
          for(var i=0;i<that.priceType.length;i++){
            that.priceType[i].isJgtype=false;
          }
          for(var i=0;i<that.apirlroomType.length;i++){
            that.apirlroomType[i].isHxtype=false;
          }
          for(var i=0;i<that.propertytypeType.length;i++){
            that.propertytypeType[i].isLxtype=false;
          } 
          that.specialType = res.data.Context.special;
          that.salestateType = res.data.Context.salestate;
        },
        fail: function (res) {},
      });
  },
  onShow(){
    const that = this;
    that.zoneArr=[];
    that.apirlroomArr=[];
    that.priceArr=[];
    that.propertytypeArr= [];
    that.zonearr=[];
    that.apirlroomarr=[];
    that.pricearr=[];
    that.propertytypearrs= [];
    that.newslist=[];
    that.specialId="";
    that.salestateId=[];
    that.orderById="";
    that.pageNumber=1;
    that.qyName="区域";
    that.jgName="价格";
    that.hxName="户型";
    that.gdName="更多";
    that.pxName="排序";
    that.isQu=false;
    that.isJg=false;
    that.isHx=false;
    that.isGd=false;
    that.isPx=false;
    that.xianshi_qy=false;
    that.xianshi_jg=false;
    that.xianshi_hx=false;
    that.xianshi_sx=false;
    that.maskHid=false;
    that.typeFun();
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },



  methods:{
    //点击区域
    dianji_qy:function(){
      const that = this;
      that.xianshi_qy=!that.xianshi_qy;
      if(that.xianshi_qy==true){
        that.maskHid=true;
        if(that.zoneArr.length==0){
          for (var j = 0; j < that.regionType.length; j++) {
            that.regionType[j].isQytype=false;
          }
        }
      }else{
        that.maskHid=false;
      }
      that.xianshi_sort=false;
      that.xianshi_jg=false;
      that.xianshi_hx=false;
      that.xianshi_sx=false;
      that.isQu=!that.isQu;
      that.isJg=false;
      that.isHx=false;
      that.isGd=false;
      that.isPx=false;
    },
    //点击价格
    dianji_jg:function(){
      const that = this;
      that.xianshi_jg=!that.xianshi_jg;
      if(that.xianshi_jg==true){
        that.maskHid=true;
        if(that.priceArr.length==0){
          for (var j = 0; j < that.priceType.length; j++) {
            that.priceType[j].isJgtype=false;
          }
        }
      }else{
        that.maskHid=false;
      }
      that.xianshi_sort=false;
      that.xianshi_qy=false;
      that.xianshi_hx=false;
      that.xianshi_sx=false;
      that.isJg=!that.isJg;
      that.isQu=false;
      that.isHx=false;
      that.isGd=false;
      that.isPx=false;
    },
    //点击户型
    dianji_hx:function(){
      const that = this;
      that.xianshi_hx=!that.xianshi_hx;
      if(that.xianshi_hx==true){
        that.maskHid=true;
        if(that.apirlroomArr.length==0){
          for (var j = 0; j < that.apirlroomType.length; j++) {
            that.apirlroomType[j].isHxtype=false;
          }
        }
      }else{
        that.maskHid=false;
      }
      that.xianshi_sort=false;
      that.xianshi_qy=false;
      that.xianshi_jg=false;
      that.xianshi_sx=false;
       that.isHx=!that.isHx;
       that.isQu=false;
      that.isJg=false;
      that.isGd=false;
      that.isPx=false;
    },
    //点击筛选
    dianji_sx:function(){
      const that = this;
      that.xianshi_sx=!that.xianshi_sx;
      if(that.xianshi_sx==true){
        that.maskHid=true;
        if(that.propertytypeArr.length==0){
          for (var j = 0; j < that.propertytypeType.length; j++) {
            that.propertytypeType[j].isLxtype=false;
          }
        }
      }else{
        that.maskHid=false;
      }
      that.xianshi_sort=false;
      that.xianshi_qy=false;
      that.xianshi_jg=false;
      that.xianshi_hx=false;
      that.isGd=!that.isGd;
      that.isQu=false;
      that.isJg=false;
      that.isHx=false;
      that.isPx=false;
    },
    //点击排序
    dianji_sort:function(){
      const that = this;
      that.xianshi_sort=!that.xianshi_sort;
      if(that.xianshi_sort==true){
        that.maskHid=true; 
      }else{
        that.maskHid=false; 
      }
      // that.maskHid=!that.maskHid;
      // 
      that.xianshi_qy=false;
      that.xianshi_hx=false;
      that.xianshi_jg=false;
      that.xianshi_sx=false;
      that.isPx=true;
      
    },
    //点击区域分类
    quClick:function(index,e){
      const that = this;
      var id=e.mp.currentTarget.dataset.id;
      that.qyName="区域";
      that.isQu=true;
      for (var j = 0; j < that.regionType.length; j++) {
        if (that.regionType[j].Id == id) {
            if(that.regionType[j].isQytype==false){
              that.regionType[j].isQytype=true;
              that.zonearr.push(id);
            }else if(that.regionType[j].isQytype==true){
              for(var i = 0;i<that.zonearr.length;i++){
                if(that.regionType[j].Id==that.zonearr[i]){
                   that.regionType[j].isQytype=false;
                  that.zonearr.splice(i,1);
                }
              }
            }
          }
        }
    },
    //点击价格分类
    jgClick:function(index,e){
      const that = this; 
      var priceId=e.mp.currentTarget.dataset.id;
      that.jgName="价格";
      that.isJg=true;
      for (var j = 0; j < that.priceType.length; j++) {
        if (that.priceType[j].Id == priceId) {
            if(that.priceType[j].isJgtype==false){
              that.priceType[j].isJgtype=true;
              that.pricearr.push(priceId);
            }else if(that.priceType[j].isJgtype==true){
              for(var i = 0;i<that.pricearr.length;i++){
                if(that.priceType[j].Id==that.pricearr[i]){
                   that.priceType[j].isJgtype=false;
                  that.pricearr.splice(i,1);
                }
              }
            }
          }
        }
    },
    //点击户型分类
    hxClick:function(index,e){
      const that = this;
      that.apirlroomId=e.mp.currentTarget.dataset.id;
      for (var j = 0; j < that.apirlroomType.length; j++) {
        if (that.apirlroomType[j].Id == that.apirlroomId) {
            if(that.apirlroomType[j].isHxtype==false){
              that.apirlroomType[j].isHxtype=true;
              that.apirlroomarr.push(that.apirlroomId);
            }else if(that.apirlroomType[j].isHxtype==true){
              for(var i = 0;i<that.apirlroomarr.length;i++){
                if(that.apirlroomType[j].Id==that.apirlroomarr[i]){
                   that.apirlroomType[j].isHxtype=false;
                  that.apirlroomarr.splice(i,1);
                }
              }
            }
          }
        }
    },



    //点击更多-类型分类
    propertytypeClick:function(index,e){
      const that = this;
      that.propertytypeId=e.mp.currentTarget.dataset.id;
      for (var j = 0; j < that.propertytypeType.length; j++) {
        if (that.propertytypeType[j].Id == that.propertytypeId) {
            if(that.propertytypeType[j].isLxtype==false){
              that.propertytypeType[j].isLxtype=true;
              that.propertytypearrs.push(that.propertytypeId);
            }else if(that.propertytypeType[j].isLxtype==true){
              for(var i = 0;i<that.propertytypearrs.length;i++){
                if(that.propertytypeType[j].Id==that.propertytypearrs[i]){
                   that.propertytypeType[j].isLxtype=false;
                  that.propertytypearrs.splice(i,1);
                }
              }
            }
          }
        }
    },



    //点击更多-特色分类
    specialClick:function(index,e){
      const that = this;
      if(that.special==index){
        that.special=null;
        that.specialId="";
      }else{
        that.special=index;
        that.specialId=e.mp.currentTarget.dataset.id;
      }
    },
    //点击更多-销售状态分类
    salestateClick:function(index,e){
      const that = this;
      if(that.salestate==index){
        that.salestate=null;
        that.salestateId="";
      }else{
        that.salestate=index;
        that.salestateId=e.mp.currentTarget.dataset.id;
      }
    },
    //点击更多-排序分类
    sortClick:function(index,e){
      const that = this;
      that.xianshi_sort=false;
      that.maskHid=false;
      that.indAction=index;
      that.newslist=[];
      if(that.indAction==0){
        that.zoneArr=[];
        that.apirlroomArr=[];
        that.priceArr=[];
        that.propertytypeArr= [];
        that.specialId="";
        that.salestateId=[];
        that.orderById="";
        that.pageNumber=1;
        that.pageRecord=6;
        that.typeFun();
      }else{
        that.orderById=e.mp.currentTarget.dataset.id;
        that.pageNumber=1;
        that.pageRecord=6;
        that.typeFun();
      }
    },

    
    //点击区域-确定
    qySure:function(index,e){
      const that = this;
      that.xianshi_qy=false;
      that.xianshi_jg=false;
      that.xianshi_hx=false;
      that.xianshi_sx=false;
      that.maskHid=false;
      that.zoneArr=that.zonearr;
      that.apirlroomArr=that.apirlroomarr;
      that.priceArr=that.pricearr;
      that.propertytypeArr=that.propertytypearrs;
      that.pageNumber=1;
      that.newslist=[];
      that.typeFun();
    },
    // 点击更多-确定
    btnSure:function(){
      const that = this;
      that.xianshi_sx=false;
      that.maskHid=false;
      that.isGd=true;
      
      that.typeFun();
    },
    // 点击区域-重置
    qyReset:function(){
      const that = this;
      that.zonearr=[];
      for(var i=0;i<that.regionType.length;i++){
        that.regionType[i].isQytype=false;
      }
    },
     // 点击价格-重置
    jgReset:function(){
      const that = this;
      that.pricearr=[];
      for(var i=0;i<that.priceType.length;i++){
        that.priceType[i].isJgtype=false;
      }
    },
    // 点击户型-重置
    hxReset:function(){
      const that = this;
      that.apirlroomarr=[];
      for(var i=0;i<that.apirlroomType.length;i++){
        that.apirlroomType[i].isHxtype=false;
      }
    },
    // 点击更多-重置
    gdReset:function(){
      const that = this;
      that.propertytypeArr== [];
      that.special=null;
      that.specialId="";
      that.salestate=null;
      that.salestateId=[];
      that.orderBy=null;
      that.orderById="";
      for(var i=0;i<that.propertytypeType.length;i++){
        that.propertytypeType[i].isLxtype=false;
      }
    },
    //点击导航筛选
    navClick:function(index,$event){
      const that = this;
      that.newslist=[];
      if(index==0){
         that.zoneArr=[];
        that.apirlroomArr=[];
        that.priceArr=[];
        that.salestateId, //销售状态
        that.specialId,
        that.propertytypeArr=[];
        that.orderById,
        that.keyword="";
        that.pageNumber=1;
        that.isdiscount=false;
        that.typeFun();
      }else if(index==1){
        that.zoneArr=[];
        that.apirlroomArr=[];
        that.priceArr=[];
        that.salestateId="03";
        that.specialId,
        that.propertytypeArr=[];
        that.orderById,
        that.keyword="";
        that.pageNumber=1;
        that.isdiscount=false;
        that.typeFun();
      }else if(index==2){
        that.zoneArr=[];
        that.apirlroomArr=[];
        that.priceArr=[];
        that.salestateId="";
        that.specialId="",
        that.propertytypeArr=[];
        that.orderById="",
        that.keyword="";
        that.pageNumber=1;
        that.isdiscount=true;
        that.typeFun();
      }else if(index==3){
        that.zoneArr=[];
        that.apirlroomArr=[];
        that.priceArr=[];
        that.salestateId="02";
        that.specialId="",
        that.propertytypeArr=[];
        that.orderById="",
        that.keyword="";
        that.pageNumber=1;
        that.isdiscount=false;
        that.typeFun();
      }
     
    },
    //筛选封装
    typeFun(){
      const that = this;
     wx.request({
      url: app.globalData.url +"Project/BandProjectList" +"?sessionKey=" +app.globalData.sessionKey,
      method:"POST",
      data: {
        zone: that.zoneArr,
        apirlroom: that.apirlroomArr,
        price: that.priceArr,
        salestate: that.salestateId, //销售状态
        special: that.specialId,
        propertytype: that.propertytypeArr, //建筑类型
        orderBy: that.orderById,
        keyword:that.keyword,
        pageNumber:that.pageNumber,
        pageRecord:that.pageRecord,
        isdiscount:that.isdiscount
      },
      header: {
        'content-type': 'application/json' 
      },
      success (res) {
        console.log('res',res)
         if (res.data.Context.project.length > 0) {
          for (var i = 0; i < res.data.Context.project.length; i++) {
           that.newslist.push(res.data.Context.project[i]);
          }
        } 
        if (res.data.Context.recordCount == 0) {
        } else {
          that.allPage = res.data.Context.recordCount;
        }
      }
    })
    },
    //一键回到顶部
    goTop: function() {
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        });
      }
    },
    //点击跳转搜索页
    searchUrl:function(){
       wx.navigateTo({url:"/pages/search/main?type=" + "project"});
    },
    //点击跳转新房详情页
    newDetail:function(index,e){
      console.log('新房详情',e.mp.currentTarget.dataset)
      wx.navigateTo({ url: "/pages/newhousedetails/main?id=" + e.mp.currentTarget.dataset.id });
    },
     




  },
  onPageScroll: function(e) {
    // 获取滚动条当前位置
    if (e.scrollTop >= 200) {
      this.topHid = true;
    } else if (e.scrollTop == 0) {
      this.topHid = false;
    }
  },
  // 上拉加载，拉到底部触发
  onReachBottom: function() {
    const that = this;
    // that.topHid=true;
    that.pageNumber = that.pageNumber + 1;
    if (that.pageNumber <= that.allPage) {
      that.typeFun();
    }
  }

   

}
</script>

<style scoped>
.NewsTitle{font-size: 28rpx;color: #333;padding-top: 10rpx;overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;}
.career{color:#3072F6;}
.type{background: #EAF1FE !important;color: #3072F6;}
 .none{width: 100%;text-align: center;/*height: 675rpx;*/ margin-top: 20%;} 
.none>image{width:200rpx;height:200rpx;}
.none>div{ font-size: 28rpx; color: #ccc; margin-top: 10rpx; text-align: center;}
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:20rpx; background:#f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
 
.heard{ background: #fff; position: relative; z-index: 999999; padding-top: 25rpx; }
 /* 搜索 */
.search{ width: 90%;  margin:0 auto; margin-left: 5%;position: relative;background: #f1f1f1; border-radius:60rpx;}
.search input{ height:80rpx; line-height:80rpx;margin: 0 auto; width:80%;margin-left: 80rpx;font-size: 26rpx;  }
.search image{ width: 40rpx; height: 40rpx; position: absolute; top:20rpx; left:3%; }

/* 导航 */
.nav{ width: 94%; padding-left: 3%; padding-right: 3%; background: #fff; margin: 0 auto; height:200rpx; border-bottom:20rpx #f7f7f7 solid;  }
.navigation{ float: left; width:25%; margin: 0 auto; padding-top:30rpx;}
.navigation image{ width:90rpx; height:90rpx; text-align: center; margin: 0 auto; display: block;}
.navigation .biaoti{ font-size:29rpx; text-align: center; margin-top: 3%;}





/* 新房列表 */
.intention-house {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 5%;
  padding-bottom: 5%;
  border-bottom: 20rpx #efefef solid;
}
.intention-nr {
  width: 94%;
  margin: 30rpx auto;
}
.intention-mt {
  overflow: hidden;
  width: 100%;
  margin-bottom: 15rpx;
}
.intention-nr image {
  float: left;
  width: 45%;
  height: 234rpx;
  border-radius: 10rpx;
}
.intention-nr .intention-right {
  float: right;
  width: 52%;
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
.average{color: #A1A1A1;margin-left: 20rpx;font-size: 28rpx;}
.proNew{overflow: hidden;margin-left: 3%;margin-right: 3%;margin-top: 20rpx;}
.proNew>div{float: left;width: 66%;font-size: 30rpx;margin-top: 10rpx;}
.proNew>image{float: left;width: 32%;height: 160rpx;margin-right: 2%;border-radius: 10rpx;}

/* .intention-house{ width: 94%; margin-left: 3%; margin-right: 3%; background: #fff; margin: 0 auto; height:380rpx; padding-top:3%; margin-bottom:5%;}
.intention-nr{ width: 94%; margin-left: 3%; margin-right: 3%; margin-top:30rpx;}

.intention-mt{ padding-bottom:30rpx; border-bottom: 1px rgb(236, 236, 236) solid; margin-top:30rpx;}
.intention-nr image{ float: left; width: 40%; height:160rpx; border-radius:10rpx;}
.intention-nr .intention-right{ float:right; width: 57%; }
.intention-nr .intention-right .bt_ri h1{ float: left; font-size: 34rpx; font-weight: bold; margin-right:4rpx;}
.intention-nr .intention-right .bt_ri p{ float: right; width:60rpx; height:30rpx; line-height: 30rpx; background: #0a8de4; text-align: center; font-size: 20rpx;  margin-right:10rpx; color: #fff; border-radius:6rpx;}
.youshi2{ float: left; padding-left:10rpx; padding-right:10rpx; height:40rpx; line-height: 40rpx; border-radius:6rpx; border:2rpx #f0f0f0 solid; color:#6b7072; font-size: 22rpx; text-align: center; margin-top:15rpx; margin-right: 10rpx;}
.m-x{ margin-top: 15rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color:#fa5741; font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:rgb(180, 180, 180); margin-top: 10rpx; } */

/* 筛选 */
/* .shaixuan{ width: 100%; position: sticky; top: 0; height:80rpx; background: #fff; }
.shang_sx{ width: 100%; clear: both;}
.s_lanmu{ width: 100%; border-bottom:2rpx rgb(241, 241, 241) solid; height:60rpx; padding-top:5%;}
.region_bt{ float: left; width: 25%; font-size:28rpx; text-align: center;}
.region_xl{ width: 100%; background: #fff;}
.l_mingzi{ float: left; width:25%; background: #fff; border-left:2rpx #ccc solid; margin-top:20rpx;}
.l_mingzi p{ font-size:28rpx; text-align: center; height:80rpx; line-height:80rpx;}
.r_neirong{ float: right; width:68%; background: #f8f8fa; padding-top:20rpx; padding-left:6%; padding-bottom:20rpx;}
.r_neirong p{ font-size:28rpx;  height:80rpx; line-height:80rpx; } */


/* 筛选 */
.shaixuan{ width: 100%;background: #fff; padding-top: 20rpx; position: relative; z-index: 99999; }
.shang_sx{ width: 100%; clear: both;position: relative;}
.s_lanmu{ width: 100%; border-bottom: 2rpx rgb(241, 241, 241) solid; height:60rpx;display: flex;justify-content: center;
line-height: 60rpx; background: #fff; position: relative; z-index: 99999;
}
/* .region_bt{ float: left; width: 25%; font-size: 14px; text-align: center;} */
.region_bt{font-size: 28rpx;width: 25%;text-align: center;}
.region_bt image{width: 24rpx;height: 24rpx;position: relative;top: 3rpx;}
.region_xl{ width: 100%; background:#fff;position: relative;z-index: 99999;}
.l_mingzi{ float: left; width:25%; background: #fff; border-left: 2rpx #ccc solid; margin-top: 20rpx;}
.l_mingzi p{ font-size: 28rpx; text-align: center; height:80rpx; line-height:80rpx;}
.r_neirong{ float: right; width:68%; background: #f8f8fa; padding-top:20rpx; padding-left:6%; padding-bottom: 20rpx;}
.r_neirong p{ font-size: 28rpx;  height:80rpx; line-height:80rpx; }




.x_dibu{ width:90%; border-top: 2rpx rgb(241, 241, 241) solid;  height: 120rpx; clear: both; padding-left:5%; padding-right: 5%;}
.z_buxian{ float: left; width:50%; margin-right:6%; height:80rpx; font-size: 28rpx; line-height:80rpx; 
border-radius: 10rpx; background:#f8f8fa; margin-top: 20rpx; text-align: center;display: flex;justify-content: center;}
.z_buxian>div:first-child{width: 50rpx;height: 50rpx;float: left;line-height: 50rpx;margin-top: 15rpx;margin-right: 10rpx;}
.z_buxian>div:last-child{float: left;font-size: 26rpx;}
.z_buxian>div:first-child>image{width: 100%;height: 100%;}
.y_quding{ float: right; width:44%; height: 80rpx; line-height: 80rpx; font-size: 28rpx; border-radius: 10rpx; background: #2e72f1; text-align: center; margin-top: 20rpx; color: #fff;}

/* 户型 */
.huxing{ width:90%; padding-left: 5%; padding-right: 5%; padding-top: 20rpx; margin-bottom:20rpx; clear: both;}
.huxing p{ float: left; width: 21%; margin-left: 2%; margin-right: 2%; height: 50rpx; line-height: 50rpx; text-align: center;background: #f8f8fa; margin-top: 19rpx; margin-bottom: 10rpx; font-size: 24rpx;}
.huxing h1{ margin-top: 10rpx; margin-bottom: 20rpx; font-size: 28rpx; font-weight: bold;}
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
/* .company{padding: 0 20rpx;width: 0;} */
.companywap{ width:90%; padding-left: 5%; padding-right: 5%; padding-top: 20rpx; margin-bottom:20rpx; clear: both;}

.companywap p{ float: left; margin-left: 2%; margin-right: 2%; height: 50rpx; line-height: 50rpx; 
text-align: center;background: #f8f8fa; margin-top: 19rpx; 
margin-bottom: 10rpx; font-size: 24rpx;padding: 0 20rpx;box-sizing: border-box;}
.companywap h1{ margin-top: 10rpx; margin-bottom: 20rpx; font-size: 28rpx; font-weight: bold;}
.h-mt {overflow: hidden;margin-bottom:15rpx;}
.h-mt image {
  float: left;
  width: 40%;
  height: 200rpx;
  border-radius: 10rpx;
}
.r_wz {float: right;width: 57%;}
.bt_s{
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
/* .youshi{overflow:hidden;}
.youshi>div {
  float: left;padding: 0 10rpx;
  height: 40rpx;
  line-height: 40rpx;
  border-radius: 3px;
  background: #edf0f3;
  color: #849aae;
  font-size: 25rpx;
  text-align: center;
  margin-top: 10rpx;
  margin-right: 10rpx;
} */
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
.average{color: #A1A1A1;margin-left: 20rpx;font-size: 28rpx;float: left;}
.hujian{width: 110rpx;height: 110rpx;position: fixed;right: 10rpx;bottom: 300rpx;}
.hujian>image{width: 100%;height: 100%;}
.sort{padding: 0 0 50rpx 40rpx;color: #333;font-size: 28rpx;box-sizing: border-box;}
.sort>div{padding-top: 50rpx;}
.colors{color: #3072F6;}
</style>
