<template>
  <div class="indexstyle">
    <!-- 置业顾问介绍开始 -->
    <div class="jjr">
      <div class="jjr_kuang">
        <div class="top_js">
          <div class="lelf_jj">
              <div class="sybp"><image :src="img2" /><span>“爽约必赔” ></span></div>
              <div class="zy_title">杨女士</div>
          </div>
          <div class="right_jj">
            <image :src="img1" />
          </div>
        </div> 

        <div class="youshis">
            <div class="l_my">满意度5分</div>
            <div class="c_lj">万家</div>
            <div class="c_lj">南环干道</div>
        </div>

        <div class="pingjia">
          <ul>
            <li>
              <h2>178</h2>
              <p>帮助客户</p>
            </li>
            <li>
              <h2>15</h2>
              <p>累计带看</p>
            </li>
            <li>
              <h2>2</h2>
              <p>成交数量</p>
            </li>
            <li>
              <h2>0-1年</h2>
              <p>从业时间</p>
            </li>
          </ul>
        </div>
            
         
      </div> 
    </div>

    <!-- 置业顾问介绍结束 -->

    <!-- 客户评价开始 -->
    <div class="khpingjia">
      <div class="pj_biaoti">
         <div class="khpj_l">客户评价</div>
         <div class="gd_r">40条优质评价 ></div>
      </div>

    </div>
    <!-- 客户评价结束 -->

    <!-- 楼盘点评开始 -->
    <div class="lpdianping">
      <div class="pj_biaoti">
         <div class="khpj_l">楼盘点评</div>
         <div class="gd_r">17条优质点评 ></div>
      </div>

      <div class="lp_nei" v-for="(item, index) in comment" :key="index">
         <div class="dianping">{{item.comment}}</div>
         <div class="loupan">
           <div class="l_loupan1"><image :src="item.lp_img" /></div>
           <div class="r_loupan2">
             <div class="t_bs">
               <h1>{{item.title}}</h1>
               <span>{{item.lptype}}</span>
             </div>
             <div class="lp_jiage">{{item.money}}</div>
           </div>
         </div>
         <div class="lp_time">{{item.time}}</div>
      </div>

    </div>
    <!-- 楼盘点评结束 -->


    <!-- 精选楼盘开始 -->
    <div class="jxloupan">
      <div class="pj_biaoti">
         <div class="khpj_l">精选楼盘</div>
      </div>

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
    <!-- 精选楼盘结束 -->
     


    






   
  

  </div>
</template>

<script>
export default {
  data () {
    return {
      img1: "http://vip.yijienet.com/tt/img1.jpg",
      img2: "/static/images/pei.png",
      comment:[
        {comment:'很高兴为您服务，希望我的评盘能够对您有所帮助希望我的评盘能够对您有所帮助希望我的评盘能够对您有所帮助希望我的评盘能够对您有所帮助。',lp_img:'http://vip.yijienet.com/tt/img1.jpg',title:'兴安府',lptype:'商业',money:'800元/m²',time:'2021年1月13日'}
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
  


    }
  },
  methods: {

 

 
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

/* 置业顾问开始 */
.jjr{width: 140%; height: 500rpx; position: absolute; left: -20%; top: 0; z-index: -1; content: ''; border-radius: 0 0 50% 50%; background: linear-gradient(#5087f5, #3072f6); }
.jjr_kuang{ width:64%; margin-left:18%; margin-right:18%; background:#fff; border-radius:3%; margin-top:10%; padding-bottom:7%; box-shadow: 2px 2px 10px #ccc;  }
.top_js{ width:86%; overflow: hidden; margin-left:7%; margin-right: 7%; padding-top:10%;}

.lelf_jj{ float: left; width: 60%;}
.sybp{ width: 100%;}
.sybp image{ width: 35rpx; height: 35rpx; }
.sybp span{ font-size:28rpx; position: relative; top: -5rpx }
.zy_title{ font-size: 40rpx; font-weight: bold; margin-top:12%;}
 
.right_jj{ float: right;  }
.right_jj image{ width: 150rpx; height: 150rpx; border-radius: 50%;}

.youshis{ width:86%; margin-left:7%; margin-right:7%; display: flex; flex-direction: row;}
.l_my{ font-size: 24rpx;padding:1rpx 7rpx 1rpx 7rpx; background: #fcf2e0; color: #e3b35d; }
.c_lj{font-size: 24rpx;padding:1rpx 7rpx 1rpx 7rpx; background: #f1f1f1; color: #272727; margin-left: 3%;}
 
.pingjia{ width:92%; margin-left:5%; margin-right:3%; margin-top:7%;}
.pingjia ul{ overflow: hidden;}
.pingjia ul li{ width:18%; float: left; margin-left:3%; margin-right:3%; }
.pingjia ul li h2{ font-size: 40rpx; font-weight: bold; color: #372b17;}
.pingjia ul li h2 span{ font-size: 24rpx;}
.pingjia ul li p{ font-size: 26rpx; color: #877e67; margin-top:2%;}

/* 客户评价开始 */
.khpingjia{ width:90%; margin-left:5%; margin-right: 5%; margin-top: 85%;}
.pj_biaoti{ width:100%; overflow: hidden;}
.khpj_l{ float: left; font-size:40rpx; font-weight: bold;}
.gd_r{ float: right; font-size: 28rpx; color: rgb(112, 112, 112);} 

/* 楼盘点评开始 */
.lpdianping{ width:90%; margin-left:5%; margin-right: 5%; margin-top:60rpx; margin-bottom:30rpx; }
.lp_nei{ width: 100%; margin-top: 20rpx; border-bottom:2rpx rgb(236, 236, 236) solid;}
.dianping{ font-size:30rpx; line-height:45rpx;}
.loupan{ margin-top: 20rpx; width:95%; overflow: hidden; background: #eef4fa; padding-top: 20rpx; padding-left:3%; padding-bottom: 20rpx;}
.l_loupan1{ float: left; width:30%;}
.l_loupan1 image{ width:170rpx; height: 120rpx; border-radius:10rpx;}
.r_loupan2{ float: right; width:70%;}
.r_loupan2 .t_bs{ display: flex; flex-direction: row; margin-top:10rpx;}
.r_loupan2 .t_bs h1{ font-size:37rpx; font-weight: bold;}
.r_loupan2 .t_bs span{ font-size: 26rpx; padding: 0 10rpx 0 10rpx; height:32rpx; line-height: 32rpx; border-radius:6rpx; color: #000; border: 1px rgb(119, 119, 119) solid; display: block; margin-left: 14rpx; margin-top: 6rpx; }
.lp_jiage{ margin-top:5rpx; color:#fa5741; font-weight: bold;}
.lp_time{ font-size: 26rpx; color: rgb(146, 146, 146); margin-top:20rpx; margin-bottom:20rpx;}

/* 精选楼盘开始 */
.jxloupan{ width:90%; margin-left:5%; margin-right: 5%; margin-top:60rpx;}
.intention-mt{ padding-bottom:30rpx; border-bottom:2rpx rgb(236, 236, 236) solid; margin-top:30rpx;}
.intention-mt image{ float: left; width: 40%; height:160rpx; border-radius:10rpx;}
.intention-mt .intention-right{ float:right; width: 57%; }
.intention-mt .intention-right .bt_ri h1{ float: left; font-size: 34rpx; font-weight: bold; margin-right:4rpx;}
.intention-mt .intention-right .bt_ri p{ float: right; width:60rpx; height:30rpx; line-height: 30rpx; background: #0a8de4; text-align: center; font-size: 20rpx;  margin-right:10rpx; color: #fff; border-radius:6rpx;}
.youshi2{ float: left; padding-left:10rpx; padding-right:10rpx; height:40rpx; line-height: 40rpx; border-radius:6rpx; border:2rpx #f0f0f0 solid; color:#6b7072; font-size: 22rpx; text-align: center; margin-top:15rpx; margin-right: 10rpx;}
.m-x{ margin-top: 15rpx; }
.m-x p{ float: left;}
.m-x p.money{ font-size: 34rpx; color:#fa5741; font-weight: 900; margin-right: 5rpx;}
.m-x p.money1{ font-size:26rpx; color:rgb(180, 180, 180); margin-top: 10rpx; }



</style>
