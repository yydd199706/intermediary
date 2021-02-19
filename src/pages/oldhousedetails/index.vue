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
        <!-- <div class="moredj" @click="priceNotice"><image :src="bjimg" /><span>变价提醒</span></div> -->
        <div class="license"><image :src="yy_img" /><span>房源发布机构</span></div>
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

      <div class="xqxx">
        <div>
          <div class="xq_l">建筑年份</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{buildyear}}</div>
        </div>
        <div>
          <div class="xq_l">单价</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{averageprice}}元/m²</div>
        </div>
        <div>
          <div class="xq_l">楼层</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{floor}}</div>
        </div>
        <div>
          <div class="xq_l">总层数</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{floorcount}}</div>
        </div>
        <div>
          <div class="xq_l">看房时间</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{looktime}}</div>
        </div>
        <div>
          <div class="xq_l">租期</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{Termname}}</div>
        </div>
        <div>
          <div class="xq_l">房屋朝向</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{Towardname}}</div>
        </div>
        <div>
          <div class="xq_l">建筑类型</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{Propertyname}}</div>
        </div>
        <div>
          <div class="xq_l">区域</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{Zonename}}</div>
        </div>
        <div>
          <div class="xq_l">装修情况</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{Decorationname}}</div>
        </div>
        <div>
          <div class="xq_l">产权类型</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{Rightnaturename}}</div>
        </div>
        <div class="bo_lp">
          <div class="xq_l">楼盘名称</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{projectname}}</div>
        </div>
        <div class="bo_lp">
          <div class="xq_l">地址</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{address}}</div>
        </div>
        <div class="bo_lp">
          <div class="xq_l">房源配套</div>
          <span class="maohao">：</span>
          <div class="xq_r">{{Supportingname}}</div>
        </div>
      </div>
    </div>
    <!-- 二手房信息结束 -->

    <!-- 评价分类开始 -->
    <div class="pingjia">
      <div class="hx_bt">
        <p>房源评价</p>
      </div>

      <div class="anniu">
        <scroll-view scroll-x class="top_jj">
            <div :class="{'selected':tab === 1,'title':true}" class="jj_default" @click="jjchangTab(1)">
              <div v-if="tab===1"><image :src="jimg2" class="slide-image" mode="scaleToFill"/></div>
              <div v-else><image :src="jimg1" class="slide-image" mode="scaleToFill"/></div>
              <p>核心卖点</p>
            </div>
            <div :class="{'selected':tab === 2,'title':true}" class="jj_default" @click="jjchangTab(2)">
              <div v-if="tab===2"><image :src="jimg4" class="slide-image" mode="scaleToFill"/></div>
              <div v-else><image :src="jimg3" class="slide-image" mode="scaleToFill"/></div>
              <p>小区介绍</p>
            </div>
            <div :class="{'selected':tab === 3,'title':true}" class="jj_default" @click="jjchangTab(3)">
              <div v-if="tab===3"><image :src="jimg6" class="slide-image" mode="scaleToFill"/></div>
              <div v-else><image :src="jimg5" class="slide-image" mode="scaleToFill"/></div>
              <p>适宜人群</p>
            </div>
            <div :class="{'selected':tab === 4,'title':true}" class="jj_default" @click="jjchangTab(4)">
              <div v-if="tab===4"><image :src="jimg8" class="slide-image" mode="scaleToFill"/></div>
              <div v-else><image :src="jimg7" class="slide-image" mode="scaleToFill"/></div>
              <p>周边配套</p>
            </div>
            <div :class="{'selected':tab === 5,'title':true}" class="jj_default" @click="jjchangTab(5)">
              <div v-if="tab===5"><image :src="jimg10" class="slide-image" mode="scaleToFill"/></div>
              <div v-else><image :src="jimg9" class="slide-image" mode="scaleToFill"/></div>
              <p>费用介绍</p>
            </div>
            <div :class="{'selected':tab === 6,'title':true}" class="jj_default" @click="jjchangTab(6)">
              <div v-if="tab===6"><image :src="jimg12" class="slide-image" mode="scaleToFill"/></div>
              <div v-else><image :src="jimg11" class="slide-image" mode="scaleToFill"/></div>
              <p>交通出行</p>
            </div>
        </scroll-view>
        <div class="diakuand1">
          <div class="neir" v-if="tab===1">{{kspoint==""||kspoint==null?'暂无信息':kspoint}}</div>
          <div class="neir" v-else-if="tab===2">{{comintro==""||comintro==null?'暂无信息':comintro}}</div>
          <div class="neir" v-else-if="tab===3">{{spopul==""||spopul==null?'暂无信息':spopul}}</div>
          <div class="neir" v-else-if="tab===4">{{sfacilit==""||sfacilit==null?'暂无信息':sfacilit}}</div>
          <div class="neir" v-else-if="tab===5">{{costintro==""||costintro==null?'暂无信息':costintro}}</div>
          <div class="neir" v-else>{{transport==""||transport==null?'暂无信息':transport}}</div>
        </div>
      </div>

    </div>
    <!-- 评价分类结束 -->


    <!-- 推荐经纪人开始 -->
    <div class="jingjiren" v-if="agent.length > 0 ? true : false">
      <div class="hx_bt">
        <p>推荐经纪人</p>
        <span @click="agentlists">查看更多</span>
      </div>

      <div class="guwen">

          <div class="guwen_list" v-for="(item, index) in agent" :key="index" >
            <div class="left_g" @click="agentlistJump(index,$event)" :data-id="item.id">
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
              <p class="dhr"><image :src="img10s" class="slide-image" mode="scaleToFill" :data-telphone="item.mobile" @click="telphoneClick(index,$event)" /></p>
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
    <div class="Projectks1" v-if="project===null ? false : true">
      <div class="k1">
          <div class="hx_bt">
            <p>小区项目信息</p>
            <span @click="PlotDetails()">小区详情 ></span>
          </div>
          <div class="xiangmu">
            <div class="l_xiangmu">
              <h1>参考均价：<span>{{project==null?'暂无信息':averagepriceXq+'元/平'}}</span></h1>
              <p>房屋总数：{{housecount}}户</p>
              <p>已售套数：{{soldcount==""||soldcount==null?'暂无信息':soldcount}}</p>
              <p>土地使用年限：{{landyear}}年</p>
              
            </div>
            <div class="r_xiangmu">
              <image :src="domain+ImgUrl" class="slide-image" />
            </div>
          </div>
      </div>
    </div>
    <!-- 小区项目信息结束 -->
    <!-- 同小区成交开始 -->
    <div class="Projectks2" v-if="deal.length > 0 ? true : false">
      <div class="k2">
          <div class="hx_bt1">
            <p>同小区成交（{{cj_num}}）</p>
            <span>更多成交 ></span>
          </div>
          <div class="chengjiao_list">
            <ul>
              <li v-for="(item, cj) in deal" :key="cj">
                <div class="cj_le">
                  <h2><span class="quan"></span><span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirltoilet}}卫</span>/<span>{{item.area}}平米</span>/<span>{{item.Towardname}}</span></h2>
                  <p><span>单价{{item.averageprice}}元/平</span>，<span>{{item.chengj5}}成交</span></p>
                </div>
                <div class="cj_ri">{{item.price}}万</div>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <!-- 同小区成交结束 -->
    <!-- 同小区房源开始 -->
    <div class="Projectks3" v-if="sameDistrict.length > 0 ? true : false">
      <div class="k2">
          <div class="hx_bt1">
            <p>同小区房源</p>
            <span>查看更多</span>
          </div>
          <div class="fangyuan_list">
            <scroll-view scroll-x="true" style="width: 100%" class="image-group">
              <div class="fang_list" v-for="(item, index) in sameDistrict" :key="index">
                <image :src="domain+item.Imgurl" class="slide-image" />
                <h3><span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirltoilet}}卫</span>/<span>{{item.area}}m²</span>/<span>{{item.Towardname}}</span></h3>
                <p><span class="dj1">{{item.price}}万元</span><span class="dj2">{{item.averageprice}}元/平</span></p>
              </div>
            </scroll-view>
          </div>
      </div>
    </div>
    <!-- 同小区房源结束 -->
    


    <!-- 推荐房源开始 -->
    <div class="jingjiren">
      <div class="hx_bt">
        <p>推荐房源</p>
      </div>

      <div class="nr-house">
        <div class="h-mt" v-for="(item, index) in recommended" :key="index">
          <image :src="domain+item.Imgurl" class="new-image" mode="scaleToFill" />
          <div class="r_wz">
            <div class="bt_s">{{ item.title}}</div>
            <div class="jieshao">
              <span>{{item.apirlroom}}室{{item.apirloffice}}厅{{item.apirloffice}}卫</span>/<span>{{item.area}}m²</span>/
              <span>{{item.Towardname}}</span>
            </div>
            <div class="youshi">
              <div class="youshi1">{{item.Decorationname}}</div>
              <div class="youshi1">{{item.Propertyname}}</div>
            </div>
            <div class="clear"></div>
            <div class="m-x">
              <p class="money">{{item.price==""||item.price==null?'总价：暂无':item.price+'万'}}</p>
              <p class="average">{{item.averageprice==""||item.averageprice==null?'价格待定':item.averageprice+'元/平'}}</p>
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
          <button class="gzdianji" @click="gz_dj" v-if="gztu_img==0" ><image :src="img10" /></button>
          <button class="gzxianshi" @click="gz_dj" v-else ><image :src="img12" /></button>
          <p>关注</p>          
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
                <input id="name" type="text" placeholder="请输入真实姓名" placeholder-style="color: #aaa"/>
              </div>
              <!-- 房源编号 -->
              <div class="project__input">
                <div class="xmmc">房源编号</div>
                <input id="name" type="text" placeholder="AK001884" placeholder-style="color: #aaa" disabled="disabled"/>
              </div>
              <!-- 手机号码 -->
              <div class="project__input">
                <div class="xmmc">手机号码</div>
                <input id="name" type="text" placeholder="请输入手机号码" placeholder-style="color: #aaa"/>
              </div>
              <!-- 验证码 -->
              <div class="project__input">
                <div class="xmmc">验证码</div>
                <input id="name" type="text" placeholder="请输入验证码" placeholder-style="color: #aaa"/>
              </div>
              <!-- 手机验证码 -->
              <div class="project__input">
                <div class="xmmc">手机验证码</div>
                <input id="name" type="text" placeholder="请输入手机验证码" placeholder-style="color: #aaa"/>
              </div>
              <!-- 预约描述 -->
              <div class="project__input">
                <div class="xmmc">预约描述</div>
                <input id="name" type="text" placeholder="请输入描述信息" placeholder-style="color: #aaa"/>
              </div>

              <button class="applyFor">立即申请</button>

          </div>
          <div class="ShutDown" @click="ShutDown_gb">X</div>
        </div>
    </div>
    <!-- 弹出预约结束 -->









  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
import QQMapWX from "@/utils/qqmap-wx-jssdk.js";
// 实例化API核心类 
const qqMap = new QQMapWX({
    key: '5TJBZ-XDZCK-O5FJR-AWZUZ-C4YTJ-EUBD5' // 必填
});
export default {
  components: {
    QQMapWX
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
        iconPath:'/static/images/map.png',
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
      latitude: '',
      longitude: '',
      id:"",
      company:"",
      storename:"",
      yuyue_yc:false,
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
      reservedtelphone:"",
      wechat_num:"",
      bjimg: app.globalData.imgurl +"tx.png",
      rootImg1: app.globalData.imgurl +"jt1.jpg",
      img9:"/static/images/wx.png",
      img10s: app.globalData.imgurl +"dh.png",
      agent: [],
      likes: [],
      kspoint:"",
      comintro:"",
      spopul:"",
      sfacilit:"",
      costintro:"",
      transport:"",
      currentTab: 1,
      movies: [],
      isshowvr:"",
      img_vr: app.globalData.imgurl +"VR.png",
      current: 0,
      averagepriceXq:"",
      housecount:"",
      soldcount:"",
      landyear:"",
      ImgUrl:"",
      deal:[],
      sameDistrict:[],
      recommended: [],
      img10: app.globalData.imgurl +"gz.png",
      img12: app.globalData.imgurl +"xin.png",
      img13: app.globalData.imgurl +"fx.png",
      img14: app.globalData.imgurl +"yy.png",
      gztu_img:0,
      project:null,
      yy_img: app.globalData.imgurl +"yyzz.png",
      tab: 1,
      bai:0,
      jimg1: app.globalData.imgurl +"an1.png",
      jimg2: app.globalData.imgurl +"an1s.png",
      jimg3: app.globalData.imgurl +"an2.png",
      jimg4: app.globalData.imgurl +"an2s.png",
      jimg5: app.globalData.imgurl +"an3.png",
      jimg6: app.globalData.imgurl +"an3s.png",
      jimg7: app.globalData.imgurl +"an4.png",
      jimg8: app.globalData.imgurl +"an4s.png",
      jimg9: app.globalData.imgurl +"an5.png",
      jimg10: app.globalData.imgurl +"an5s.png",
      jimg11: app.globalData.imgurl +"an6.png",
      jimg12: app.globalData.imgurl +"an6s.png",

    }
  },
  onLoad(option) {
    const that = this;
    var demo = new QQMapWX({ key: '5TJBZ-XDZCK-O5FJR-AWZUZ-C4YTJ-EUBD5' });
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
          //房源评价
          that.kspoint = res.data.Context.houseInfo.kspoint;
          that.comintro = res.data.Context.houseInfo.comintro;
          that.spopul = res.data.Context.houseInfo.spopul;
          that.sfacilit = res.data.Context.houseInfo.sfacilit;
          that.costintro = res.data.Context.houseInfo.costintro;
          that.transport = res.data.Context.houseInfo.transport;
          //推荐经纪人
          that.agent = res.data.Context.agentList;
          for(var i =0;i<that.agent.length;i++){
            that.company = that.agent[i].company;
            that.storename = that.agent[i].storename;
            console.log('门店id',that.storename);
          console.log('公司id',that.company);
          }
          // that.company = res.data.Context.agent.company;
          // that.storename = res.data.Context.agent.storename;
          // console.log('门店id',that.storename);
          // console.log('公司id',that.company);
          //猜你喜欢
          that.likes = res.data.Context.guessLike;
          //小区项目信息
          that.project = res.data.Context.project;
          if(res.data.Context.project!=null){
             that.averagepriceXq = res.data.Context.project.averageprice;
             that.housecount = res.data.Context.project.housecount;
             that.soldcount = res.data.Context.project.soldcount;
             that.landyear = res.data.Context.project.landyear;
             that.ImgUrl = res.data.Context.project.ImgUrl;
             that.id=res.data.Context.project.id;
             //wx.setStorageSync('id',res.data.Context.project.id);
          }
          //同小区成交
          that.deal = res.data.Context.deal;
          //同小区房源
          that.sameDistrict = res.data.Context.sameDistrict;
          //推荐房源
          that.recommended = res.data.Context.recommended;
          //当前经纪人
          that.reservedtelphone=res.data.Context.agent.mobile;
          if(res.data.Context.agent.wxid==""){
            that.wechat_num=res.data.Context.agent.mobile;
          }else{
            that.wechat_num=res.data.Context.agent.wxid;
          }
          demo.geocoder({
    address: that.address,   //用户输入的地址（注：地址中请包含城市名称，否则会影响解析效果），如：'北京市海淀区彩和坊路海淀西大街74号'
    complete: data => {
      if(data.status==0){
        that.latitude=data.result.location.lat;
        that.longitude=data.result.location.lng;
        that.markers=[{
          id: 1,
          latitude: data.result.location.lat,
          longitude: data.result.location.lng,
          name: that.projectname,
          width: 30,
          height: 30,
          iconPath:'/static/images/map.png',
          callout: {
            content: that.projectname,
            color: '#333',
            fontSize: 12,
            borderRadius: 5,
            display: 'ALWAYS',
            padding:8
        }
        }]
        // that.mapHid=true;
      }else {
        // that.mapHid=false;
        that.markers[0].callout.display="display:'none'";
      }
    }
    })
          
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
    // clickTab(index) {
    //     this.currentTab = index;
    // },
    jjchangTab(index) {
        this.tab = index;
    },

     djimg(e) {
       this.current = e.target.current;
     },

     anyy_dj(){
       this.yuyue_yc = !this.yuyue_yc;
     },
     ShutDown_gb(){
       this.yuyue_yc = false;
     },

    //底部关注
    gz_dj(){
      if(this.gztu_img==1){
        this.gztu_img=0;
      }else{
        this.gztu_img=1;
      }
    },

    //点击跳转小区详情页
    PlotDetails:function (){
      const that = this;
      wx.navigateTo({ url: "/pages/communityDetails/main?id="+this.id});
    },
    //点击跳转经纪人列表
    agentlists:function (){
      const that = this;
      wx.navigateTo({ url: "/pages/agentList/main?company=" + that.company + "&storename=" + that.storename});
    },
    //点击跳转经纪人名片
    agentlistJump:function(index,e){
      console.log('经纪人名片id',e.mp.currentTarget.dataset.id);
      wx.navigateTo({ url: "/pages/agentDetails/main?agentid=" + e.mp.currentTarget.dataset.id});
    },
    //拨打经纪人电话
    telphoneClick:function(index,e){
      console.log('打电话',e.currentTarget.dataset.telphone);
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.telphone
      })
    },
    //拨打当前经纪人电话
    clickService:function(){
      if(this.reservedtelphone!=""){
        wx.makePhoneCall({
        phoneNumber: this.reservedtelphone,
      })
      }else{
        wx.showToast({
          title: '请先添加电话！',
          icon: 'none',
          duration: 2000
        })
      }
      
    },
     //点击复制微信号
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
    //获取经纬度
    clickAdress(e){
      qqMap.geocoder({
        address: this.address,   //用户输入的地址（注：地址中请包含城市名称，否则会影响解析效果），如：'北京市海淀区彩和坊路海淀西大街74号'
        complete: res => {
          if(res.result.location!=""){
            this.latitude=res.result.location.lat;
            this.longitude=res.result.location.lng;
            wx.openLocation({
              latitude: res.result.location.lat,
              longitude: res.result.location.lng,
              name:this.projectname,
              address: this.address
            })
          }else {
            wx.showToast({
              title: '无法定位到该地址！',
              icon: 'none',
              duration: 2000
            })
          }
        }
        })
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

/* .moredj{float: right;font-size: 24rpx;}
.moredj image{ width:33rpx; height:37rpx; margin-right:10rpx;}
.moredj span{ position: relative; top: -10rpx;} */
.license{ float: right; font-size: 24rpx; color: rgb(124, 124, 124); display: flex; flex-direction: row; margin-bottom: 10rpx;}
.license span{ display: block; margin-top: 3rpx;}
.license image{ width:45rpx; height:33rpx; margin-top:5rpx; display: block; margin-right:10rpx;}
.biaoti{ font-size:43rpx; font-weight: bold; margin-top:1%; }
.mianji{ overflow: hidden; margin-top:3%; }
.lelf_mj{ float: left; width: 26%; border-right: 1px rgb(235, 235, 235) solid;}
.center_mj{ float: left; width:40%; border-right: 1px rgb(235, 235, 235)  solid; margin-left:4%;}
.right_mj{ float: right; width:22%; margin-left:4%;}
.lelf_mj h1,.center_mj h1,.right_mj h1{ color: #fa5741; font-size: 38rpx; font-weight: bold; }
.lelf_mj p,.center_mj p,.right_mj p{ color: #a7a7a7; font-size: 26rpx;}

.xinxi{ margin-top: 3%; padding-bottom:40rpx;}
.xinxi ul{ overflow: hidden;}
.xinxi ul li{ float: left; width: 50%; font-size:29rpx;  color: #000; line-height:65rpx;}
.xinxi ul li span{ color: rgb(160, 160, 160); width: 150rpx; display: inline-block; text-align-last: justify;text-align: justify;text-justify: distribute-all-lines; }
.xinxi div{ color: #000; font-size:30rpx; height: 65rpx; line-height:65rpx; width: 100% !important; overflow: hidden;}
.xinxi div P{ float: left; width: 70%;}
.xinxi div span{color: rgb(160, 160, 160); width: 150rpx;display: inline-block; text-align-last: justify;text-align: justify;text-justify: distribute-all-lines; }
.xinxi div image{ float: right; width:18rpx; height:30rpx; position: relative; top: -50rpx;}

.xqxx{ margin-top: 3%; padding-bottom:40rpx; margin-top:35rpx;}
.xqxx>div{float: left; width: 50%; height:65rpx;}
.xq_l{color: rgb(160, 160, 160);float: left; font-size:29rpx; width:120rpx; text-align: justify;text-justify:distribute-all-lines;}
.xq_l:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.maohao{float: left;color: rgb(160, 160, 160); position: relative; top:0rpx; }
.xq_r{float: left; font-size:28rpx;}
.bo_lp{ width: 100% !important;}
/* .bo_lp span{ float: right;font-size:35rpx;color: rgb(185, 185, 185); position: relative; top: -10rpx;} */


 

.pingjia{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.hx_bt{ width:100%; overflow: hidden;}
.hx_bt p{ float: left; font-size:35rpx; font-weight: bold;}
.hx_bt span{ float: right; font-size:25rpx;}


/* 推荐经纪人 */
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
.top_jj{width: 100%; line-height:84rpx;white-space: nowrap;position: relative;background: #fff; overflow: hidden; }
.jj_default{ width:180rpx; height:160rpx; background: rgb(231, 231, 231);color: #000; display: inline-block; margin-right:20rpx; border-radius:10rpx;}
.jj_default image{width:50rpx; height:50rpx; margin: 0 auto; display: block; margin-top:18%;}
.jj_default p{font-size:26rpx; line-height:60rpx; text-align: center;}
.selected { width:180rpx; height:160rpx; background:#2e72f1;color: #fff;}
.diakuand1{ margin-top: 20rpx;}
.neir{ font-size:30rpx; line-height:50rpx; margin-top:20rpx;height: auto; overflow: hidden;} 



.Projectks1{width: 90%; padding-left: 5%; padding-right: 5%; margin-top: 5%;}
.Projectks2{width: 90%; padding-left: 5%; padding-right: 5%;}
.Projectks3{width: 90%; padding-left: 5%; padding-right: 5%;padding-bottom: 5%; border-bottom:20rpx #efefef solid;}
.k1{padding-bottom:30rpx; border-bottom: 1px rgb(235, 235, 235) solid; }
.xiangmu{ margin-top:5%; overflow: hidden; }
.l_xiangmu{ float: left; width:60%;}
.l_xiangmu h1{ font-size: 32rpx; font-weight: bold; margin-bottom: 5%;}
.l_xiangmu h1 span{ color: rgb(218, 0, 0);}
.l_xiangmu p{ line-height:45rpx; color: rgb(124, 124, 124); font-size:28rpx;}
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
.h-mt {overflow: hidden;margin-bottom:15rpx;}
.nr-house image {float: left;width: 40%;height: 200rpx;border-radius: 10rpx;}
.nr-house .r_wz {float: right;width: 57%;}
.bt_s {font-size: 30rpx;font-weight: bold;margin-right: 10rpx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.jieshao {font-size: 25rpx;color: #333;margin-top: 10rpx;}
.youshi1 {float: left;padding: 0 10rpx;height: 40rpx;line-height: 40rpx;border-radius: 3px;background: #edf0f3;color: #849aae;font-size: 25rpx;text-align: center;margin-top: 10rpx;margin-right: 10rpx;}
.m-x {margin-top: 10rpx;overflow: hidden;}
.m-x p {float: left;}
.m-x p.money {font-size: 30rpx;color: #fa5741;font-weight: 900;margin-right: 5rpx;}
.money1 {font-size:30rpx;color: #fa5741;font-weight: 900;}
.more-house {width: 94%;height: 70rpx;background: #e8edf3;border-radius: 5px;text-align: center;line-height: 70rpx;font-size: 28rpx;font-weight: bold;margin-left: 3%;margin-right: 3%;margin-top: 30rpx;color: #3072f6;}


.footer{ width: 100%; height: 130rpx; background: #fff;position: fixed;bottom: 0; z-index: 9999;}
.left_foot{ float: left; width:39%;height: 120rpx; margin-top:10rpx; margin-right:3%; margin-left: 3%;}
.left_foot .guanzhus{ float: left; width:33.3%; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot .guanzhus image{ width:40rpx; height:40rpx;}
.left_foot .guanzhus p{ font-size: 26rpx; color: #000; position: relative; top:-24rpx; left:22%;}
 


.left_foot .fenxiangs{ float: left; width:33.3%; height:50rpx; margin: 0 auto; background: #fff;overflow: inherit;border: none; padding: 0 !important;}
.left_foot button{border: none; padding: 0 !important; padding-left: 0 !important; padding-right: 0 !important; background:none;}
.left_foot button::after{border: none; padding: 0 !important;}
.left_foot .fenxiangs image{ width:40rpx; height:40rpx;}
.left_foot .fenxiangs p{ font-size: 26rpx; color: #000; position: relative; top: -37rpx;}




.right_foot{ float: right; width:55%; margin-top:22rpx;}
.Report{ float: left; width: 45%; background: #3dc28e; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius: 10rpx; color: #fff; margin-right: 5%;}
.Telephone{ float: right; width: 45%; background: #2e72f1; font-size: 28rpx; height:90rpx; line-height:90rpx; text-align: center; border-radius:10rpx; color: #fff; margin-right: 5%;}


/* 弹出预约开始 */
.tcyyzg{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.tcyy{ width:90%; margin-left:5%; margin-right:5%; background: #fff; border-radius:30rpx;  position: relative; bottom:20%;}
.btyy{ width: 100%; height:100rpx; background: #3dc28e; color: #fff; text-align: center; border-top-left-radius:30rpx; border-top-right-radius: 30rpx; line-height:100rpx; font-size: 36rpx; font-weight: bold;}
.appointment{padding:1% 5% 7% 5%; width:90%;}
.project__input{ margin-top:30rpx; height:60rpx; padding-bottom:10rpx; border-bottom: 1px #ececec solid;}
.project__input .xmmc{ float: left; font-size: 30rpx; width:160rpx; margin-right:25rpx; text-align: justify;text-justify:distribute-all-lines;}
.xmmc:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.project__input input{ float: left; font-size: 30rpx; }
.project__input textarea{ float: left; font-size: 30rpx; width:69%; }
.applyFor{ width:60%; height:80rpx; background: #2e72f1; line-height: 80rpx; text-align: center; font-size: 36rpx; color: #fff; margin-top: 40rpx;}
.ShutDown{ font-size:40rpx; font-weight: bold; position: absolute; top: 20rpx; right: 20rpx; color: #fff;}




 </style>
