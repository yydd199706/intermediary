<template>
  <div class="indexstyle">
    <div class="bd_lanmu">
      <div class="lm_xx" :class="(i.id)==currentTab?'tabbar-bottom':''" v-for="(i, index) in letters" :key="index" @click="lett(i.id)">{{i.name}}{{index}}</div>
    </div>
    <scroll-view class="bd_neirong" scroll-y :scroll-top='scrollTop' :scroll-into-view='toView' style="height:winHeight">
      <div v-for="(i, index) in letters" :key="index" :current="currentTab" @change="changeTab">
      
      <!-- 基础信息 -->
        <div class="basic" :id="i.id" >
          <h1>{{i.name}}</h1>
          <div class="b_js" v-if="(i.id)=='A'">
            <div><span>楼盘别名</span>{{name}}</div> 
            <div><span>楼盘特色</span>{{features}}</div> 
            <div><span>参考均价</span>{{price}}元/平</div> 
            <div><span>参考总价</span>{{price1}}万/套</div> 
            <div><span>物业类型</span>{{wytype}}</div> 
            <div><span>建筑类型</span>{{buildingss}}</div> 
            <div><span>装修标准</span>{{decorate}}</div> 
            <div><span>产权年限</span>{{years}}</div> 
            <div><span>品牌</span>{{brand}}</div> 
            <div><span>开发商</span>{{developers}}</div>
            <div><span>所在区域</span>{{area}}</div> 
            <div><span>楼盘地址</span>{{address}}<p>></p></div> 
          </div>
           <div class="b_js" v-else-if="(i.id)=='B'">
             <div><span>售卖状态</span>{{state}}</div> 
            <div><span>售楼地址</span>{{sladdress}}</div> 
            <div><span>售卖楼栋</span>{{build}}</div> 
            <div><span>售卖户型</span>{{door}}<p>></p></div> 
            <div><span>最新开盘</span>{{time}}</div> 
            <div><span>最近交房</span>{{time1}}</div> 
          </div>
           <div class="b_js" v-else-if="(i.id)=='C'">
             <div><span>占地面积</span>{{area1}}m²</div> 
            <div><span>建筑面积</span>{{area2}}m²</div> 
            <div><span>容积率</span>{{ratio}}</div> 
            <div><span>绿化率</span>{{Afforestation}}%</div> 
            <div><span>车位配比</span>{{parking}}</div> 
            <div><span>规划楼栋</span>{{planning}}栋</div> 
            <div><span>规划户型</span>{{model}}户</div> 
            <div><span>物业公司</span>{{property}}</div> 
            <div><span>物业费用</span>{{cost}}元/m²/月</div> 
            <div><span>供暖方式</span>{{heating}}</div> 
            <div><span>供水</span>{{water}}</div> 
            <div><span>供电</span>{{supply}}</div> 
          </div>
        </div>
        <!-- 销售信息 -->
        <!-- <div class="sales" :id="i.id">
          <h1>{{i.name}}</h1>
          <div class="b_js">
            <div><span>售卖状态</span>{{state}}</div> 
            <div><span>售楼地址</span>{{sladdress}}</div> 
            <div><span>售卖楼栋</span>{{build}}</div> 
            <div><span>售卖户型</span>{{door}}<p>></p></div> 
            <div><span>最新开盘</span>{{time}}</div> 
            <div><span>最近交房</span>{{time1}}</div> 
          </div>
        </div> -->
        <!-- 小区概况 -->
        <!-- <div class="community" :id="i.id">
          <h1>{{i.name}}</h1>
          <div class="b_js">
            <div><span>占地面积</span>{{area1}}m²</div> 
            <div><span>建筑面积</span>{{area2}}m²</div> 
            <div><span>容积率</span>{{ratio}}</div> 
            <div><span>绿化率</span>{{Afforestation}}%</div> 
            <div><span>车位配比</span>{{parking}}</div> 
            <div><span>规划楼栋</span>{{planning}}栋</div> 
            <div><span>规划户型</span>{{model}}户</div> 
            <div><span>物业公司</span>{{property}}</div> 
            <div><span>物业费用</span>{{cost}}元/m²/月</div> 
            <div><span>供暖方式</span>{{heating}}</div> 
            <div><span>供水</span>{{water}}</div> 
            <div><span>供电</span>{{supply}}</div> 
          </div>
        </div> -->


      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
     return {
       winHeight:'100%',
      toView: '',
      currentTab: 'A',
      scrollTop: 0,
      letters: [{id: 'A',name: '基础信息'}, {id: 'B',name: '销售信息'}, {id: 'C',name: '小区概况'}],
      img1:"/static/images/xx1.png",
       img2:"/static/images/wen.png",
       name:"兴安府",
       features:"限竞房、视频看房、小户型",
       price:6500,
       price1:200,
       wytype:"住宅",
       buildingss:"高层、板楼",
       decorate:"精装修",
       years:"70年",
       brand:"",
       developers:"长兴房地产",
       area:"陕西安康",
       address:"",
       state:"在售",
       sladdress:"",
       build:"共20栋",
       door:"2/3/4居",
       time:"2020-01-21",
       time1:"2022-12-21",
       area1:43000,
       area2:132000,
       ratio:2.8,
       Afforestation:35,
       parking:"1:1.2",
       planning:20,
       model:2000,
       property:"",
       cost:4.3,
       heating:"集中供暖",
       water:"民水",
       supply:"民电",
       rjxs:false,
       costxs:false,
       gsxs:false,
       gdxs:false,
       booking:"京房售证字（2020）10号",
       time3:"2020-01-19",
       bangding:"6号楼，1号楼，2号楼，三号楼，四号楼，五号楼，六号楼" 

    }
  },

  onLoad(){
    let that =this;
    wx.getSystemInfo({
      success:function(res){
        that.winHeight = res.windowHeight-(res.windowWidth*90/750)+'px';
        console.log(res.windowHeight-(res.windowWidth*90/750)+'px')
      }
    })
  },
  methods:{
    
     lett(l) {
        this.toView = l; 
        this.currentTab = l;       
        console.log(this.toView)
      },


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
.bd_lanmu{width:98%; line-height: 42px; position: relative; overflow: hidden; white-space: nowrap; margin-right:1%; margin-left:1%; padding-top:4%;} 
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

 .tabbar-bottom {color: rgb(0, 148, 247); font-weight: bold;}


</style>
