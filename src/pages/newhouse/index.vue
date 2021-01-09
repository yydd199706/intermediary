<template>
  <div class="indexstyle">
    <!-- 搜索开始 -->
    <div class="search">
      <input type="text" placeholder="请输入楼盘名或区域" placeholder-style="font-size:14px; padding-left:35px;">
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

    <!-- 灰色线  -->
    <div class="hsxian"></div>


    <!-- 筛选开始 -->
    <div class="shaixuan">
      <div class="shang_sx">

        <div class="s_lanmu">
           <div class="region_bt" @click="dianji_qy">区域</div>
           <div class="region_bt" @click="dianji_jg">价格</div>
           <div class="region_bt" @click="dianji_hx">户型</div>
           <div class="region_bt" @click="dianji_sx">筛选</div>
        </div>




        <!-- 区域开始 -->
        <div class="region_xl" v-if="xianshi_qy">
          <div class="l_mingzi">
            <p @click="dianji_dq">地区</p>
            <p @click="dianji_dt">地铁</p>
          </div>

          <div class="r_neirong">
            <div v-if="xianshi_dq">
              <p>不限</p>
              <p>东城</p>
              <p>东城</p>
              <p>东城</p>
              <p>东城</p>
              <p>东城</p>
            </div>

            <div v-if="xianshi_dt">
              <p>不限</p>
              <p>东城</p>
              <p>东城</p>
              <p>东城</p>
              <p>东城</p>
              <p>东城</p>
            </div>
          </div>

          <div class="x_dibu">
            <div class="z_buxian">不限条件</div>
            <div class="y_quding">确定</div>
          </div>

        </div>
        <!-- 区域开始 -->

        <!-- 价格开始 -->
        <div class="region_xl" v-if="xianshi_jg">
          <div class="l_mingzi">
            <p @click="dianji_zj">总价</p>
            <p @click="dianji_dj">单价</p>
          </div>

          <div class="r_neirong">
            <div v-if="xianshi_zj">
              <p>不限</p>
                 <p>100万以下</p>
                 <p>100万以下</p>
                 <p>100万以下</p>
                 <p>100万以下</p>
                 <p>100万以下</p>
            </div>

            <div v-if="xianshi_dj">
              <p>2000元/m²</p>
                 <p>2000元/m²</p>
                 <p>2000元/m²</p>
                 <p>2000元/m²</p>
                 <p>2000元/m²</p>
                 <p>2000元/m²</p>
            </div>
          </div>

        </div>
        <!-- 价格开始 -->

        <!-- 户型开始 -->
        <div class="region_xl" v-if="xianshi_hx">
          <div class="huxing">
            <p>不限</p>
            <p>1居</p>
            <p>2居</p>
            <p>3居</p>
            <p>4居</p>
            <p>5居</p>
            <p>5居+</p>
            <div class="clear"></div>
          </div>

          <div class="x_dibu">
            <div class="z_buxian">不限条件</div>
            <div class="y_quding">确定</div>
          </div>

        </div>
        <!-- 户型开始 -->


        <!-- 筛选开始 -->
        <div class="region_xl" v-if="xianshi_sx">
          <div class="huxing">
            <h1>面积（m²）</h1>
            <p>50m²以下</p>
            <p>50-70m²</p>
            <p>50-70m²</p>
            <p>50-70m²</p>
            <p>50-70m²</p>
            <p>50-70m²</p>
            <p>50-70m²</p>
            <div class="clear"></div>
          </div>

          <div class="huxing">
            <h1>类型</h1>
            <p>住宅</p>
            <p>别墅</p>
            <p>别墅</p>
            <p>别墅</p>
            <p>别墅</p>
            <p>别墅</p>
            <p>别墅</p>
            <div class="clear"></div>
          </div>

          <div class="huxing">
            <h1>特色</h1>
            <p>特价好房</p>
            <p>特价好房</p>
            <p>特价好房</p>
            <p>特价好房</p>
            <p>特价好房</p>
            <p>特价好房</p>
            <p>特价好房</p>
            <div class="clear"></div>
          </div>

          <div class="huxing">
            <h1>售卖状态</h1>
            <p>在售</p>
            <p>未开盘</p>
            <p>售馨</p>
            <div class="clear"></div>
          </div>

          <div class="huxing">
            <h1>开盘时间</h1>
            <p>近期开盘</p>
            <p>近期开盘</p>
            <p>近期开盘</p>
            <p>近期开盘</p>
            <p>近期开盘</p>
            <p>近期开盘</p>
            <p>近期开盘</p>
            <div class="clear"></div>
          </div>

          <div class="x_dibu">
            <div class="z_buxian">不限条件</div>
            <div class="y_quding">确定</div>
          </div>


        </div>
        <!-- 筛选开始 -->
        <div class="clear"></div>

      </div>
    </div>
 
    <!-- 筛选开始 -->






    <!-- 文章列表开始 -->
    <div class="intention-house">
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
              <div class="youshi2" v-if="inds<2">{{f.id}}</div>
            </div><div class="clear"></div>

            <div class="m-x clear">
              <p class="money">{{item.price}}元/m²</p><p class="money1">建面{{item.price1}}元/平</p>
            </div>

          </div>
          <div class="clear"></div> 
        </div>

 
      </div>
    </div> 
    <!-- 文章列表结束 -->




  </div>
</template>

<script>
export default {
  data () {
    xianshi:false;
    return {
      img2: "/static/images/ss.png",
      navs: [
        { img3:'/static/images/n1.png', title:'全部项目'},
        { img3:'/static/images/n2.png', title:'在售项目'},
        { img3:'/static/images/n3.png', title:'优惠项目'},
        { img3:'/static/images/n4.png', title:'最新开盘'}
      ],
      newslist: [
        { 
          img7:'http://vip.yijienet.com/tt/img1.jpg', title:'城投佳境',
          advantage1: [
            { id:'住宅'},
            { id:'小户型'},
            { id:'公交直达'}
          ],
          price:555, price1:6500,
        }

      ],

      xianshi_qy:false,
      xianshi_dq:true,
      xianshi_dt:false,
      xianshi_jg:false,
      xianshi_zj:true,
      xianshi_dj:false,

      xianshi_hx:false,
      xianshi_sx:false,





    }
  },



  methods:{
    dianji_qy:function(){
      this.xianshi_qy=!this.xianshi_qy;
    },
    dianji_dq:function(){
      this.xianshi_dq=!this.xianshi_dq;
    },
    dianji_dt:function(){
      this.xianshi_dt=!this.xianshi_dt;
    },
    dianji_jg:function(){
      this.xianshi_jg=!this.xianshi_jg;
    },
    dianji_zj:function(){
      this.xianshi_zj=!this.xianshi_zj;
    },
    dianji_dj:function(){
      this.xianshi_dj=!this.xianshi_dj;
    },
    
    dianji_hx:function(){
      this.xianshi_hx=!this.xianshi_hx;
    },
    dianji_sx:function(){
      this.xianshi_sx=!this.xianshi_sx;
    },


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
 

/* 搜索 */
.search{ width: 90%;  margin: 0 auto; margin-left: 5%; }
.search input{ height:40px; line-height:40px; width:100%; border-radius:30px; margin: 0 auto; background: #f8f8fa;  }
.search image{ width: 20px; height: 20px; position: absolute; top:2%; left:7%; }

/* 导航 */
.nav{ width: 94%; margin-left: 3%; margin-right: 3%; background: #fff; margin: 0 auto; height:110px; }
.navigation{ float: left; width:25%; margin: 0 auto; padding-top:15px;}
.navigation image{ width:110rpx; height:110rpx; text-align: center; margin: 0 auto; margin-left:20px;}
.navigation .biaoti{ font-size:29rpx; text-align: center;}





/* 猜你意向的新房 */
.intention-house{ width: 94%; margin-left: 3%; margin-right: 3%; background: #fff; margin: 0 auto; height:190px; padding-top:10px; margin-bottom:10px;}
.intention-nr{ width: 94%; margin-left: 3%; margin-right: 3%; margin-top:15px;}

.intention-mt{ padding-bottom:15px; border-bottom: 1px rgb(236, 236, 236) solid; margin-top: 15px;}
.intention-nr image{ float: left; width: 40%; height:160rpx; border-radius: 5px;}
.intention-nr .intention-right{ float:right; width: 57%; }
.intention-nr .intention-right .bt_ri h1{ float: left; font-size: 34rpx; font-weight: bold; margin-right:4rpx;}
.intention-nr .intention-right .bt_ri p{ float: right; width:60rpx; height:30rpx; line-height: 30rpx; background: #0a8de4; text-align: center; font-size: 20rpx;  margin-right:10rpx; color: #fff; border-radius: 3px;}
.youshi2{ float: left; padding-left:10rpx; padding-right:10rpx; height:40rpx; line-height: 40rpx; border-radius:3px; border: 1px #f0f0f0 solid; color:#6b7072; font-size: 22rpx; text-align: center; margin-top:15rpx; margin-right: 10rpx;}
.m-x{ margin-top: 15rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color: rgb(192, 0, 0); font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:#ccc; margin-top: 10rpx; }

/* 筛选 */
.shaixuan{ width: 100%; position: sticky; top: 0; height: 40px; background: #fff; }
.shang_sx{ width: 100%; clear: both;}
.s_lanmu{ width: 100%; border-bottom: 1px rgb(241, 241, 241) solid; height:30px; padding-top: 10px;}
.region_bt{ float: left; width: 25%; font-size: 14px; text-align: center;}
.region_xl{ width: 100%; background: #fff;}
.l_mingzi{ float: left; width:25%; background: #fff; border-left: 1px #ccc solid; margin-top: 10px;}
.l_mingzi p{ font-size: 14px; text-align: center; height:40px; line-height:40px;}
.r_neirong{ float: right; width:68%; background: #f8f8fa; padding-top:10px; padding-left:6%; padding-bottom: 10px;}
.r_neirong p{ font-size: 14px;  height:40px; line-height:40px; }

.x_dibu{ width:90%; border-top: 1px rgb(241, 241, 241) solid;  height: 60px; clear: both; padding-left:5%; padding-right: 5%;}
.z_buxian{ float: left; width:50%; margin-right:6%; height:80rpx; font-size: 14px; line-height:80rpx; border-radius: 5px; background:#f8f8fa; margin-top: 10px; text-align: center;}
.y_quding{ float: right; width:44%; height: 80rpx; line-height: 80rpx; font-size: 14px; border-radius: 5px; background: #2e72f1; text-align: center; margin-top: 10px; color: #fff;}

/* 户型 */
.huxing{ width:90%; padding-left: 5%; padding-right: 5%; padding-top: 10px; margin-bottom:10px; clear: both;}
.huxing p{ float: left; width: 21%; margin-left: 2%; margin-right: 2%; height: 50rpx; line-height: 50rpx; text-align: center;background: #f8f8fa; margin-top: 5px; margin-bottom: 5px; font-size: 12px;}
.huxing h1{ margin-top: 5px; margin-bottom: 10px; font-size: 14px; font-weight: bold;}

</style>
