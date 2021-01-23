<template>
  <div class="indexstyle">
    <!-- 动态栏目切换开始 -->
    <div class="dt_lm">
      <div class="dongtai" :class="{'zixun' :tab==1}" @click="dtdianji(1)">楼盘动态</div>
      <div class="dongtai" :class="{'zixun' :tab==2}" @click="dtdianji(2)">楼盘活动</div>
      <div class="dongtai" :class="{'zixun' :tab==3}" @click="dtdianji(3)">楼市新闻</div>
    </div>
    <!-- 动态栏目切换结束 -->

    <!-- 楼盘资讯负责声明开始 -->
    <div class="shengming">
      <div class="sm_zx">楼盘资讯<span @click="shengmdj">免责声明 ></span></div>
      <!-- 弹框开始 -->
      <div class="tanchu" v-if="smtanchu">
        <div class="tank">
          <h2>免责声明</h2>
          <p>本页面内容，旨在满足广大用户的信息需求而采集提供，如有异议请及时与我们联系。页面所载内容不代表本网站之观点或意见，仅供用户参考借鉴，最终以政府网站或开发商实际公示为准。商品房预售须取得《商品房预售许可证》，用户在购房时需谨慎查验开发商的证件信息。</p>
          <button @click="guandiao">我知道了</button>
        </div>
      </div>
      <!-- 弹框结束 -->
    </div>
    <!-- 楼盘资讯负责声明结束 -->

    <!-- 动态列表内容开始 -->
    <div class="zx_nr">
      <!-- 楼盘动态开始 -->
      <div class="dynamic" v-if="tab==1">
        <div class="zixunlist" v-for="(item, index) in dtlist" :key="index">
          <div class="time">{{item.time}}</div>
          <div class="kuang">
            <div class="zxunnr">
              <div class="lelf_zx"><image :src="item.img1" /></div>
              <div class="right_zx">
                <h3>{{item.title}}</h3>
                <p>{{item.abstract}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 楼盘动态结束 -->
      <!-- 楼盘活动开始 -->
      <div class="activity" v-else-if="tab==2">
        <div class="zixunlist" v-for="(item, index) in loupanlist" :key="index">
          <div class="time">{{item.time}}</div>
          <div class="kuang">
            <div class="zxunnr">
              <div class="lelf_zx"><image :src="item.img1" /></div>
              <div class="right_zx">
                <h3>{{item.title}}</h3>
                <p>{{item.abstract}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 楼盘活动结束 -->
      <!-- 楼市新闻开始 -->
      <div class="news" v-else>
        <div class="zixunlist" v-for="(item, index) in loushilist" :key="index">
          <div class="time">{{item.time}}</div>
          <div class="kuang">
            <div class="zxunnr">
              <div class="lelf_zx"><image :src="item.img1" /></div>
              <div class="right_zx">
                <h3>{{item.title}}</h3>
                <p>{{item.abstract}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 楼市新闻结束 -->
    </div>
    <!-- 动态列表内容结束 -->

    
     
  

  </div>
</template>

<script>
export default {
  data () {
     return {
       tab:1,
       smtanchu:false,
       dtlist:[
         {time:'2020年12月28日',img1:'/static/images/quan.png',title:'1楼盘动态楼盘动态楼盘动态楼盘',abstract:'楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态'}
       ],
       loupanlist:[
         {time:'2020年12月28日',img1:'/static/images/quan.png',title:'2楼盘动态楼盘动态楼盘动态楼盘',abstract:'楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态'}
       ],
       loushilist:[
         {time:'2020年12月28日',img1:'/static/images/quan.png',title:'3楼盘动态楼盘动态楼盘动态楼盘',abstract:'楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态楼盘动态'}
       ],
     }
  },
  methods: {
    dtdianji(index){
      this.tab = index;
    },
    shengmdj(){
      this.smtanchu = !this.smtanchu;
    },
    guandiao(){
      this.smtanchu = false;
    }
   }
 


 

   

}
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}

/* 栏目切换 */
.dt_lm{ width:96%; display: flex; flex-direction: row; height:60rpx; line-height: 60rpx; margin-left: 2%; margin-right: 2%; margin-top:5%;}
.dt_lm .dongtai{ width: 31.3%; text-align: center;background: #eff0f0; margin-left: 1%; margin-right: 1%; font-size:30rpx; border-radius: 80rpx;}
.zixun{ color: #4681f7; background: #eaf1fe !important;}

/* 楼盘资讯负责声明开始 */
.shengming{ margin-top:7%; margin-left: 5%; margin-right: 5%;}
.sm_zx{ font-size: 30rpx; color: #9399a5;}
.sm_zx span{ color: #222222;}
.tanchu{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.tank{ width:74%; margin-left: 5%; margin-right: 5%;padding:8%; background: #fff; border-radius: 30rpx; position: relative; bottom:20%;}
.tank h2{ font-size: 50rpx; font-weight: bold; margin-bottom: 4%;}
.tank p{ line-height:60rpx;}
.tank button{ width:100%; height:90rpx; background: #3072f6; color: #fff; margin-top: 5%; margin-bottom: 5%;}

/* 动态列表内容开始 */
.zx_nr{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:7%;}
.dynamic{ width:100%;}
.zixunlist{ width: 100%; margin-bottom:7%;}
.time{font-size:28rpx; color: #5680a6;}

.kuang{ margin-top:3%; border-left:2rpx #e4e4e4 solid; margin-left:2%; }
.zxunnr{ width:100%; overflow: hidden; position: relative; left: -2%; top: -15%; }
.lelf_zx{  width:8%; float: left;}
.lelf_zx image{ width:25rpx; height:25rpx;}
.right_zx{float: right; width:92%;}
.right_zx h3{ font-size: 37rpx; font-weight: bold; margin-bottom:2%; color: #101d37;}
.right_zx p{ line-height:45rpx; color: #9399a5; font-size: 31rpx;}


</style>
