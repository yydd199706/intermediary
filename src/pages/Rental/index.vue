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
    </div>
 

    <!-- 筛选开始 -->
    <div class="shaixuan">
      <div class="shang_sx">
        <div class="s_lanmu">
           <div class="region_bt" @click="dianji_qy" :class="[zoneArr.length>0||xianshi_qy==true?'career':'']">
             {{zoneArr.length>1?'多选':'区域'}}
             <image :src='[xianshi_qy==false?img3:img4]' mode="scaleToFill"/>
            </div>
           <!-- <div class="region_bt" @click="dianji_jg" :class="[priceArr.length>0||xianshi_jg==true?'career':'']">
             {{priceArr.length>1?'多选':'价格'}}
             <image :src='[xianshi_jg==false?img3:img4]' mode="scaleToFill"/>
           </div> -->
           <!-- <div class="region_bt" @click="dianji_jg" :class="[rentArr.length>0||xianshi_jg==true?'career':'']">
             {{rentArr.length>1?'多选':'租金'}}
             <image :src='[xianshi_jg==false?img3:img4]' mode="scaleToFill"/>
           </div> -->
           <div class="region_bt" @click="dianji_jg" :class="[xianshi_jg==true||rentId!=''?'career':'']">{{jgName}}
             <image :src='[xianshi_jg==false?img3:img4]' mode="scaleToFill"/>
           </div>

           <div class="region_bt" @click="dianji_hx" :class="[apirlroomArr.length>0||xianshi_hx==true?'career':'']">
             {{apirlroomArr.length>1?'多选':'户型'}}
             <image :src='[xianshi_hx==false?img3:img4]' mode="scaleToFill"/>
           </div>
           <div class="region_bt" @click="dianji_sx" :class="[areaArr.length>0||xianshi_sx==true||specialId!=''||
             companyId!=''||decorationId!=''||buildyearId!=''||towardId!=''||floorId!=''||supportingId!=''
             ?'career':'']">{{areaArr.length>1?'多选':'更多'}}
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
            <!-- <p v-for="(item, index) in priceType" :key="index" :data-id="item.Id" :data-isJgtype="item.isJgtype"
              @click="jgClick(index,$event)" :data-name="item.Name" :class="[item.isJgtype?'type':'none']">{{item.Name}}</p> -->
            <p v-for="(item, index) in priceType" :key="index" :data-id="item.Id"
              @click="jgClick(index,$event)" :data-name="item.Name" :class="[zjtate==index?'type':'']">{{item.Name}}</p>
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
            <h1>面积（m²）</h1>
            <p v-for="(item, index) in areaType" :key="index" :data-id="item.Id" :data-isAreatype="item.isAreatype"
              @click="areaClick(index,$event)" :data-name="item.Name" :class="[item.isAreatype?'type':'none']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="huxing">
            <h1>房龄</h1>
            <p v-for="(item, index) in buildyearType" :key="index" :data-id="item.Id"
              @click="buildClick(index,$event)" :data-name="item.Name" :class="[buildyear==index?'type':'']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="companywap">
            <h1>中介</h1>
            <p v-for="(item, index) in companyType" :key="index" class="company" :data-id="item.Id"
              @click="companyClick(index,$event)" :data-name="item.Name" :class="[company==index?'type':'']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="huxing">
            <h1>装修情况</h1>
            <p v-for="(item, index) in decorationType" :key="index" :data-id="item.Id"
              @click="decorationClick(index,$event)" :data-name="item.Name" :class="[decoration==index?'type':'']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="huxing">
            <h1>楼层</h1>
           <p v-for="(item, index) in floorType" :key="index" :data-id="item.Id"
              @click="floorClick(index,$event)" :data-name="item.Name" :class="[floor==index?'type':'']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="huxing">
            <h1>特色</h1>
            <p v-for="(item, index) in specialType" :key="index" :data-id="item.Id"
              @click="specialClick(index,$event)" :data-name="item.Name" :class="[special==index?'type':'']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
          <div class="companywap">
            <h1>配套</h1>
            <p v-for="(item, index) in supportingType" :key="index" class="company" :data-id="item.Id"
              @click="supportingClick(index,$event)" :data-name="item.Name" :class="[supporting==index?'type':'']">{{item.Name}}</p>
            <div class="clear"></div>
          </div>
           <div class="huxing">
            <h1>朝向</h1>
            <p v-for="(item, index) in towardType" :key="index" :data-id="item.Id"
              @click="towardClick(index,$event)" :data-name="item.Name" :class="[toward==index?'type':'']">{{item.Name}}</p>
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
        <!-- 排序分类开始 -->
        <div class="region_xl" v-if="xianshi_sort">
          <div class="sort">
             <!-- :class="[item.isHxtype?'type':'none']" -->
            <div v-for="(item, index) in orderByType" :key="index" :class="[indAction==index?'colors':'']"
              @click="sortClick(index,$event)" :data-id="item.id">
              {{item.Name}}</div>
          <!-- <div class="clear"></div> -->
          </div>
        </div>
        <!-- 排序分类结束 -->
        <!-- 筛选开始 -->
        <div class="clear"></div>
      </div>
    </div>
    <!-- 筛选开始 -->
    <!-- 列表开始 -->
    <!-- 遮罩层开始 -->
    <div class="modalMask" v-if="maskHid"></div>
    <!-- 遮罩层结束 -->
    <div class="intention-house" v-if="esf.length>0?true:false">
      <div class="intention-nr">
        <div class="h-mt" v-for="(item, index) in esf" :key="index" :data-id="item.id" @click="esfDetail(index,$event)">
          <image :src="item.Imgurl =='' ? lisImgurl : domain+item.Imgurl" class="new-image" mode="scaleToFill" />
          <div class="r_wz">
            <div class="bt_s">{{item.title}}</div>
            <div class="jieshao">
              <span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirloffice}}卫</span>/<span>{{item.area}}m²</span>/
              <span>{{item.Towardname}}</span>
            </div>
            <div class="youshi">
              <div>{{item.Decorationname}}</div>
              <div>{{item.Propertyname}}</div>
            </div>
            <!-- <div class="clear"></div> -->
            <div class="m-x">
              <div class="money">{{item.rent==""||item.rent==null?'价格待定':item.rent+'元/月'}}</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <!-- 暂无内容 -->
    <div class="none" v-if="esf.length==0?true:false">
      <image :src="img5" class="new-image" mode="scaleToFill" />
      <div>暂无内容哟~~</div>
    </div>
    <!-- 一键回到顶部 -->
    <div class="hujian" v-if="topHid" @click="goTop">
      <image :src="img" class="new-image" mode="scaleToFill" />
    </div>
    <!-- 文章列表结束 -->
  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      domain:null,
      xianshi:false,
      maskHid:false,
      topHid:false,
      pageNumber:1,
      pageRecord:6,
      img:app.globalData.imgurl +"hj.png",
      img2:app.globalData.imgurl +"ss.png",
      img3:app.globalData.imgurl +"down_ra.png",
      img4:app.globalData.imgurl +"top_ra.png",
      img5:app.globalData.imgurl +"null_data.png",
      img6:app.globalData.imgurl +"clear.png",
      lisImgurl:app.globalData.imgurl +"zanwutup.jpg",
      regionType:[],
      priceType:[],
      apirlroomType:[],
      areaType:[],
      buildyearType:[],
      companyType:[],
      decorationType:[],
      floorType:[],
      specialType:[],
      supportingType:[],
      towardType:[],
      orderByType:[{Name:"默认排序"},
      {Name:"租金从低到高",id:"4|0"},{Name:"租金从高到低",id:"4|1"},{Name:"面积从大到小",id:"3|1"},{Name:"面积从小到大",id:"3|0"}],
      isQu:false,
      isJg:false,
      isHx:false,
      isGd:false, 
      isPx:false,
      zoneArr:[],
      apirlroomArr:[],
      priceArr:[],
      rentArr:[],
      areaArr:[],
      zonearr:[],
      apirlroomarr:[],
      rentarr:[],
      areaarr:[],
      specialId:"",
      rentId:[],

      companyId:"",
      decorationId:"",
      buildyearId:"",
      towardId:"",
      floorId:"",
      supportingId:"",
      orderById:"",
      keyword:"",
      special:null,
      company:null,
      decoration:null,
      zjtate:null,

      buildyear:null,
      toward:null,
      floor:null,
      supporting:null,
      orderBy:null,
      allPage:null,
      indAction:null,
      qyName:"区域",
      jgName:"租金",
      hxName:"户型",
      gdName:"更多",
      pxName:"排序",
      esf:[], 
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
          "OldHouse/BandEsfScreenCondition" +
          "?sessionKey=" +
          app.globalData.sessionKey,
        success: function (res) {
          console.log("hux",res)
          that.regionType = res.data.Context.zone;
          that.priceType = res.data.Context.rent;
          that.apirlroomType = res.data.Context.apirlroom;
          that.areaType = res.data.Context.area; 
          for(var i=0;i<that.regionType.length;i++){
            that.regionType[i].isQytype=false;
          }
          for(var i=0;i<that.priceType.length;i++){
            that.priceType[i].isJgtype=false;
          }
          for(var i=0;i<that.apirlroomType.length;i++){
            that.apirlroomType[i].isHxtype=false;
          }
          for(var i=0;i<that.areaType.length;i++){
            that.areaType[i].isAreatype=false;
          }
           
          that.buildyearType = res.data.Context.buildyear;
          that.companyType = res.data.Context.company;
          that.decorationType = res.data.Context.decoration;
          that.floorType = res.data.Context.floor;
          that.specialType = res.data.Context.special;
          that.supportingType = res.data.Context.supporting;
          that.towardType = res.data.Context.toward;
        },
        fail: function (res) {},
      });
  },
  onShow(){
    const that = this;
    that.zoneArr=[];
    that.apirlroomArr=[];
    that.priceArr=[];
    that.rentArr=[];
    that.areaArr=[];
    that.zonearr=[];
    that.apirlroomarr=[];
    that.pricearr=[];
    that.rentarr=[];
    that.areaarr=[];
    that.esf=[];
    that.specialId="";
    that.rentId=[];
    that.zjtate = null;

    that.companyId="";
    that.decorationId="";
    that.buildyearId="";
    that.towardId="";
    that.floorId="";
    that.supportingId="";
    that.orderById="";
    that.pageNumber=1;
    that.qyName="区域";
    that.jgName="租金";
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
    // dianji_jg:function(){
    //   const that = this;
    //   that.xianshi_jg=!that.xianshi_jg;
    //   if(that.xianshi_jg==true){
    //     that.maskHid=true;
    //     if(that.priceArr.length==0){
    //       for (var j = 0; j < that.priceType.length; j++) {
    //         that.priceType[j].isJgtype=false;
    //       }
    //     }
    //   }else{
    //     that.maskHid=false;
    //   }
    //   that.xianshi_sort=false;
    //   that.xianshi_qy=false;
    //   that.xianshi_hx=false;
    //   that.xianshi_sx=false;
    //   that.isJg=!that.isJg;
    //   that.isQu=false;
    //   that.isHx=false;
    //   that.isGd=false;
    //   that.isPx=false;
    // },
    //点击价格
    dianji_jg:function(){
      const that = this;
      that.xianshi_jg=!that.xianshi_jg;
      if(that.xianshi_jg==true){
        that.maskHid=true;
        // if(that.rentArr.length==0){
        //   for (var j = 0; j < that.priceType.length; j++) {
        //     that.priceType[j].isJgtype=false;
        //   }
        // }
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
    //点击更多
    dianji_sx:function(){
      const that = this;
      that.xianshi_sx=!that.xianshi_sx;
      if(that.xianshi_sx==true){
        that.maskHid=true;
        if(that.areaArr.length==0){
          for (var j = 0; j < that.areaType.length; j++) {
            that.areaType[j].isAreatype=false;
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
      // that.maskHid=!that.maskHid;
      // that.isPx=true;
      if(that.xianshi_sort==true){
        that.maskHid=true; 
      }else{
        that.maskHid=false; 
      }
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
 
    //价格分类
    jgClick:function(index,e){
      const that = this;
      console.log("价格",e)
      // that.isJg=true;
      if(that.zjtate==index){
        that.zjtate=null;
        that.rentId="";
      }else{
        that.zjtate=index;
        that.rentId=e.mp.currentTarget.dataset.id;
      }
    },
    //点击价格分类
    // jgClick:function(index,e){
    //   const that = this;
    //   var priceId=e.mp.currentTarget.dataset.id;
    //   that.jgName="租金";
    //   that.isJg=true;
    //   for (var j = 0; j < that.priceType.length; j++) {
    //     if (that.priceType[j].Id == priceId) {
    //         if(that.priceType[j].isJgtype==false){
    //           that.priceType[j].isJgtype=true;
    //           that.rentarr.push(priceId);
    //         }else if(that.priceType[j].isJgtype==true){
    //           for(var i = 0;i<that.rentarr.length;i++){
    //             if(that.priceType[j].Id==that.rentarr[i]){
    //                that.priceType[j].isJgtype=false;
    //               that.rentarr.splice(i,1);
    //             }
    //           }
    //         }
    //       }
    //     }
    // },
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
    //点击更多-面积分类
    areaClick:function(index,e){
      const that = this;
      that.areaId=e.mp.currentTarget.dataset.id;
         for (var j = 0; j < that.areaType.length; j++) {
        if (that.areaType[j].Id == that.areaId) {
            if(that.areaType[j].isAreatype==false){
              that.areaType[j].isAreatype=true;
              that.areaarr.push(that.areaId);
            }else if(that.areaType[j].isAreatype==true){
              for(var i = 0;i<that.areaarr.length;i++){
                if(that.areaType[j].Id==that.areaarr[i]){
                   that.areaType[j].isAreatype=false;
                  that.areaarr.splice(i,1);
                }
              }
            }
          }
        }
    },
     //点击更多-房龄分类
    buildClick:function(index,e){
      const that = this;
      if(that.buildyear==index){
        that.buildyear=null;
        that.buildyearId="";
      }else{
        that.buildyear=index;
        that.buildyearId=e.mp.currentTarget.dataset.id;
      }
      // if(that.buildyear==null){
      //    that.buildyear=index;
      //    that.buildyearId=e.mp.currentTarget.dataset.id;
      // }else{
      //   that.buildyear=null;
      //   that.buildyearId="";
      // }
    },
    //点击更多-中介分类
    companyClick:function(index,e){
      const that = this;
      if(that.company==index){
        that.company=null;
        that.companyId="";
      }else{
        that.company=index;
        that.companyId=e.mp.currentTarget.dataset.id;
      }
      // if(that.company==null){
      //    that.company=index;
      //    that.companyId=e.mp.currentTarget.dataset.id;
      // }else{
      //   that.company=null;
      //   that.companyId="";
      // }
    },
    //点击更多-装修情况分类
    decorationClick:function(index,e){
      const that = this;
      if(that.decoration==index){
        that.decoration=null;
        that.decorationId="";
      }else{
        that.decoration=index;
        that.decorationId=e.mp.currentTarget.dataset.id;
      }
      // if(that.decoration==null){
      //    that.decoration=index;
      //    that.decorationId=e.mp.currentTarget.dataset.id;
      // }else{
      //   that.decoration=null;
      //   that.decorationId="";
      // }
    },
    //点击更多-装修情况分类
    floorClick:function(index,e){
      const that = this;
      if(that.floor==index){
        that.floor=null;
        that.floorId="";
      }else{
        that.floor=index;
        that.floorId=e.mp.currentTarget.dataset.id;
      }
      // if(that.floor==null){
      //    that.floor=index;
      //    that.floorId=e.mp.currentTarget.dataset.id;
      // }else{
      //   that.floor=null;
      //   that.floorId="";
      // }
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
      // if(that.special==null){
      //    that.special=index;
      //    that.specialId=e.mp.currentTarget.dataset.id;
      // }else{
      //   that.special=null;
      //   that.specialId="";
      // }
    },
    //点击更多-配套分类
    supportingClick:function(index,e){
      const that = this;
      if(that.supporting==index){
        that.supporting=null;
        that.supportingId="";
      }else{
        that.supporting=index;
        that.supportingId=e.mp.currentTarget.dataset.id;
      }
      // if(that.supporting==null){
      //    that.supporting=index;
      //    that.supportingId=e.mp.currentTarget.dataset.id;
      // }else{
      //   that.supporting=null;
      //   that.supportingId="";
      // }
    },

    //点击更多-朝向分类
    towardClick:function(index,e){
      const that = this;
      if(that.toward==index){
        that.toward=null;
        that.towardId="";
      }else{
        that.toward=index;
        that.towardId=e.mp.currentTarget.dataset.id;
      }

    },
    //点击排序分类
    sortClick:function(index,e){
      const that = this;
      that.xianshi_sort=false;
      that.maskHid=false;
      that.indAction=index;
      that.esf=[];
      if(that.indAction==0){
        that.zoneArr=[];
        that.apirlroomArr=[];
        that.priceArr=[];
        that.rentArr=[];
        that.areaArr=[];
        that.specialId="";
        that.companyId="";
        that.decorationId="";
        that.buildyearId="";
        that.towardId="";
        that.floorId="";
        that.supportingId="";
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
      that.rentArr=that.rentarr;
      that.areaArr=that.areaarr;
      that.pageNumber=1;
      that.esf=[];
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
      that.zjtate=null;
      that.rentId=[];
      // that.pricearr=[];
      // that.rentarr=[];
      // for(var i=0;i<that.priceType.length;i++){
      //   that.priceType[i].isJgtype=false;
      // }
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
      that.areaarr=[];
      that.buildyear=null;
      that.buildyearId="";
      that.company=null;
      that.companyId="";
      that.decoration=null;
      that.decorationId="";
      that.floor=null;
      that.floorId="";
      that.special=null;
      that.specialId="";
      that.supporting=null;
      that.supportingId="";
      that.toward=null;
      that.towardId="";
      that.orderBy=null;
      that.orderById="";
      for(var i=0;i<that.areaType.length;i++){
        that.areaType[i].isAreatype=false;
      }
    },
    //筛选封装
    typeFun(){
      const that = this;
     wx.request({
      url: app.globalData.url +"OldHouse/BandEsfList" +"?sessionKey=" +app.globalData.sessionKey,
      method:"POST",
      data: {
        zone: that.zoneArr,
        rent: that.rentId,
        apirlroom: that.apirlroomArr,
        price:[],
        area: that.areaArr,
        special: that.specialId,
        company: that.companyId,
        decoration: that.decorationId,
        buildyear: that.buildyearId,
        toward: that.towardId,
        floor: that.floorId,
        supporting: that.supportingId,
        orderBy: that.orderById,
        keyword:that.keyword,
        pageNumber:that.pageNumber,
        pageRecord:that.pageRecord,
        publishtype:1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) { 
        console.log("that.orderById",that.orderById)
        console.log("租房",res.data.Context.esf[0].rent)
         if (res.data.Context.esf.length > 0) {
          for (var i = 0; i < res.data.Context.esf.length; i++) {
           that.esf.push(res.data.Context.esf[i]); 
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
       wx.navigateTo({url:"/pages/search/main?type=" + "rent"});
    },
    //点击跳转二手房详情页
    esfDetail:function(index,e){
      wx.navigateTo({ url: "/pages/Rentaldetails/main?id=" + e.mp.currentTarget.dataset.id });
    }
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
.career{color:#3072F6;}
.type{background: #EAF1FE !important;color: #3072F6;}
 .none{width: 100%;text-align: center;/*height: 675rpx;*/ margin-top: 20%;} 
.none>image{width:200rpx;height:200rpx;}
.none>div{ font-size: 28rpx; color: #ccc; margin-top: 10rpx; text-align: center;}
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
 
.heard{ background: #fff; position: relative; z-index: 999999; padding-bottom: 25rpx; }
/* 搜索 */
.search{ width: 90%; margin: 0 auto; margin-left: 5%;position: relative;background: #f1f1f1; border-radius:60rpx;}
.search input{ height:80rpx; line-height:80rpx;margin: 0 auto; width:80%;margin-left: 80rpx;font-size: 26rpx;  }
.search image{ width: 40rpx; height: 40rpx; position: absolute; top:20rpx; left:3%; }

/* 导航 */
.nav{ width: 94%; margin-left: 3%; margin-right: 3%; background: #fff; margin: 0 auto; height:220rpx; }
.navigation{ float: left; width:25%; margin: 0 auto; padding-top:30rpx;}
.navigation image{ width:110rpx; height:110rpx; text-align: center; margin: 0 auto; margin-left:40rpx;}
.navigation .biaoti{ font-size:29rpx; text-align: center;}





/* 猜你意向的新房 */
.intention-house{ width: 94%; margin-left: 3%; margin-right: 3%; background: #fff; margin: 0 auto; height:380rpx; margin-bottom:20rpx;}
.intention-nr{ width: 94%; margin-left: 3%; margin-right: 3%; margin-top:30rpx;}

.intention-mt{ padding-bottom:30rpx; border-bottom: 1px rgb(236, 236, 236) solid; margin-top: 30rpx;}
.intention-nr image{ float: left; width: 35%; height:160rpx; border-radius: 10rpx;}
.intention-right{ float:left; margin-left: 30rpx; }
.intention-nr .intention-right .bt_ri h1{ float: left; font-size: 34rpx; font-weight: bold; margin-right:4rpx;}
.intention-nr .intention-right .bt_ri p{ float: right; width:60rpx; height:30rpx; line-height: 30rpx; background: #0a8de4; text-align: center; font-size: 20rpx;  margin-right:10rpx; color: #fff; border-radius: 6rpx;}
.youshi2{ float: left; padding-left:10rpx; padding-right:10rpx; height:40rpx; line-height: 40rpx; border-radius:6rpx; border: 2rpx #ccc solid; color: rgb(16, 61, 128); font-size: 22rpx; text-align: center; margin-top:15rpx; margin-right: 10rpx;}
.m-x{ margin-top: 15rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color: rgb(192, 0, 0); font-weight: 900; margin-right: 5rpx;float: left;}
.m-x p.money1{ font-size:26rpx; color:#ccc; margin-top: 10rpx;}

/* 筛选 */
.shaixuan{ width: 100%;background: #fff; padding-top: 20rpx; position: relative; z-index: 99999;  border-top: 20rpx #f7f7f7 solid;}
.shang_sx{ width: 100%; clear: both;position: relative;}
.s_lanmu{ width: 100%; border-bottom: 2rpx rgb(241, 241, 241) solid; height:60rpx;display: flex;
justify-content: center;line-height: 60rpx;
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
.youshi{overflow:hidden;}
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
.average{color: #A1A1A1;margin-left: 20rpx;font-size: 28rpx;float: left;}
.hujian{width: 110rpx;height: 110rpx;position: fixed;right: 10rpx;bottom: 300rpx;}
.hujian>image{width: 100%;height: 100%;}
.sort{padding: 0 0 50rpx 40rpx;color: #333;font-size: 28rpx;box-sizing: border-box;}
.sort>div{padding-top: 50rpx;}
.colors{color: #3072F6;}
</style>
