<template>
  <div class="indexstyle">
    <div class="bd_lanmu">
      <div class="lm_xx" v-for="i in letters" :key="i" @click="lett(i.id)">{{i.name}}</div>
    </div>
    <scroll-view class="bd_neirong" scroll-y :scroll-top='scrollTop' :scroll-into-view='toView' style="height:300px">
      <div v-for="i in letters" :key="i">
      
      <!-- 基础信息 -->
        <div class="basic" :id="i.id" >
          <h1>{{i.name}}</h1>
          <div class="b_js">
            <div v-for="(ii,ind) in i.sxxinxi" :key="ind"><span>{{ii.sxbm}}</span>{{ii.name}}<p class="youzj" v-if="ii.img1"><image :src="ii.img1" />咨询房贷首付</p></div>            
          </div>
        </div>    
        
       

      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
     return {
      toView: '',
      scrollTop: 0,
      letters: [
        {id: 'A',name: '基础信息',
        sxxinxi: [{sxbm: "楼盘别名",name:"兴安府"},{sxbm: "楼盘特色",name:"限竞房、视频看房、小户型",img1: "http://vip.yijienet.com/tt/img1.jpg"}]}, 
        {id: 'B',name: '销售信息',
        sxxinxi: [{sxbm: "售卖状态",name:"在售"}]}, 
        {id: 'C',name: '小区概况',
        sxxinxi: [{sxbm: "占地面积",name:"43000"}]}, 
        {id: 'D',name: '预售许可证',
        sxxinxi: [{sxbm: "预售证",name:"京房售证字（2020）10号"}]}
      ],
      // img1:"/static/images/xx1.png",
      //  img2:"/static/images/wen.png",
      //  name:"兴安府",
      //  features:"限竞房、视频看房、小户型",
      //  price:6500,
      //  price1:200,
      //  wytype:"住宅",
      //  buildingss:"高层、板楼",
      //  decorate:"精装修",
      //  years:"70年",
      //  brand:"",
      //  developers:"长兴房地产",
      //  area:"陕西安康",
      //  address:"",
      //  state:"在售",
      //  sladdress:"",
      //  build:"共20栋",
      //  door:"2/3/4居",
      //  time:"2020-01-21",
      //  time1:"2022-12-21",
      //  area1:43000,
      //  area2:132000,
      //  ratio:2.8,
      //  Afforestation:35,
      //  parking:"1:1.2",
      //  planning:20,
      //  model:2000,
      //  property:"",
      //  cost:4.3,
      //  heating:"集中供暖",
      //  water:"民水",
      //  supply:"民电",
      //  rjxs:false,
      //  costxs:false,
      //  gsxs:false,
      //  gdxs:false,
      //  booking:"京房售证字（2020）10号",
      //  time3:"2020-01-19",
      //  bangding:"6号楼，1号楼，2号楼，三号楼，四号楼，五号楼，六号楼" 

    }
  },
  methods:{
    
     lett(l) {
        this.toView = l
        console.log(this.toView) 
      }


  }
 


 

   

}
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
 
 
.building{ width: 100%;}
.bd_lanmu{width:98%; line-height: 42px; position: relative; overflow: hidden; white-space: nowrap; margin-right:1%; margin-left:1%;} 
.lm_xx{color:#9399a5; display: inline-block; margin-right:4%; margin-left:4%; font-size: 30rpx;}

.bd_neirong{ width:100%;}
.basic{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom: 10px #efefef solid; margin-top: 3%;}
.basic h1{ font-size: 36rpx; color: #000; font-weight: bold;}
.b_js div{ margin-top:4%; font-size: 30rpx; line-height: 55rpx;}
.b_js div span{ color: #9399a5; margin-right: 3%;}
.b_js div p{ float: right; color: #a3a6a8; }
.b_js div p.youzj{ position: relative; top: -7%; font-size: 26rpx; width:30%;}
.youzj image{ width:32rpx; height:32rpx; margin-right:4%; margin-top:2%;}

.sales{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom: 10px #efefef solid; margin-top: 3%;}
.sales h1{ font-size: 36rpx; color: #000; font-weight: bold;}

.community{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom: 10px #efefef solid; margin-top: 3%;}
.community h1{ font-size: 36rpx; color: #000; font-weight: bold;}
.community .b_js div image{ width: 30rpx; height: 30rpx; margin-left:2%;}
/* 中间弹框 */
.rj_kuang{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.rj_kuang div{ width:80%; margin-left: 5%; margin-right: 5%; padding: 5%; background: rgb(255, 255, 255); border-radius:2%; position: relative; bottom:35%;}
.rj_kuang h2{ font-size: 30rpx; margin-bottom: 5%;}
.rj_kuang p{font-size: 28rpx;  margin-bottom: 5%;}
.rj_kuang button{ width: 90%; background: #07c160; color: #fff;}


.license{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom: 10px #efefef solid; margin-top: 3%;}
.license h1{ font-size: 36rpx; color: #000; font-weight: bold;}


</style>
