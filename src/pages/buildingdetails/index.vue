<template>
  <div class="indexstyle">

    <div class="building">
      <!-- 楼盘栏目开始 -->
      <scroll-view scroll-x class="bd_lanmu">
        <div class="lm_xx">基础信息</div>
        <div class="lm_xx">销售信息</div>
        <div class="lm_xx">小区概况</div>
        <div class="lm_xx">预售许可证</div>
      </scroll-view>
      <!-- 楼盘栏目结束 -->
      <!-- 内容开始 -->
      <div class="bd_neirong">
        <!-- 基础信息 -->
        <div class="basic">
          <h1>基础信息</h1>
          <div class="b_js">
            <div><span>楼盘别名</span>{{name}}</div> 
            <div><span>楼盘特色</span>{{features}}</div> 
            <div><span>参考均价</span>{{price}}元/平</div> 
            <div><span>参考总价</span>{{price1}}万/套<p class="youzj"><image :src="img1" />咨询房贷首付</p></div> 
            <div><span>物业类型</span>{{wytype}}</div> 
            <div><span>建筑类型</span>{{buildingss}}</div> 
            <div><span>装修标准</span>{{decorate}}</div> 
            <div><span>产权年限</span>{{years}}</div> 
            <div><span>品牌</span>{{brand}}</div> 
            <div><span>开发商</span>{{developers}}</div>
            <div><span>所在区域</span>{{area}}</div> 
            <div><span>楼盘地址</span>{{address}}<p>></p></div> 
          </div>
        </div>
        <!-- 销售信息 -->
        <div class="sales">
          <h1>销售信息</h1>
          <div class="b_js">
            <div><span>售卖状态</span>{{state}}</div> 
            <div><span>售楼地址</span>{{sladdress}}</div> 
            <div><span>售卖楼栋</span>{{build}}</div> 
            <div><span>售卖户型</span>{{door}}<p>></p></div> 
            <div><span>最新开盘</span>{{time}}</div> 
            <div><span>最近交房</span>{{time1}}</div> 
          </div>
        </div>
        <!-- 小区概况 -->
        <div class="community">
          <h1>小区概况</h1>
          <div class="b_js">
            <div><span>占地面积</span>{{area1}}m²</div> 
            <div><span>建筑面积</span>{{area2}}m²</div> 
            <div><span>容积率</span>{{ratio}}<image :src="img2" @click="rjldj" />
            <!-- 中间弹框开始 -->
            <div class="rj_kuang" v-if="rjxs">
              <div>
                <h2>提示</h2>
                <p>容积率是指项目地上总建筑面积与净用地面积的比率，可间接反映出居住密度，容积率越低，居住的舒适度较高。一个良好的居住小区，高层住宅容积率应不超过5，改善型容积率一般在2.0-3.5，新房别墅容积率一般在0.5-1.2。</p>
                <button @click="rjyc">我知道了</button>
              </div>
            </div>
            <!-- 中间弹框结束 -->
            </div> 
            <div><span>绿化率</span>{{Afforestation}}%</div> 
            <div><span>车位配比</span>{{parking}}</div> 
            <div><span>规划楼栋</span>{{planning}}栋</div> 
            <div><span>规划户型</span>{{model}}户</div> 
            <div><span>物业公司</span>{{property}}</div> 
            <div><span>物业费用</span>{{cost}}元/m²/月<image :src="img2" @click="costdj" />
            <!-- 中间弹框开始 -->
            <div class="rj_kuang" v-if="costxs">
              <div>
                <h2>提示</h2>
                <p>物业是小区生活品质和价值的保障，不同定位的小区有着不同的物业费标准；通常情况下，普通住宅物业费2-5元/平米*月，改善及高端小区物业费为5-10元/平米*月或更高，办公、公寓及商业的物业费通常高于同总价位的住宅。</p>
                <button @click="costyc">我知道了</button>
              </div>
            </div>
            <!-- 中间弹框结束 -->
            </div> 
            <div><span>供暖方式</span>{{heating}}</div> 
            <div><span>供水</span>{{water}}<image :src="img2" @click="gsdj" />
            <!-- 中间弹框开始 -->
            <div class="rj_kuang" v-if="gsxs">
              <div>
                <h2>提示</h2>
                <p>民水及市政居住类民用水，根据使用规模收费浮动，平均民用水3元/吨；商水及商业使用类水，收费标准变化较大，平均5元/吨。</p>
                <button @click="gsyc">我知道了</button>
              </div>
            </div>
            <!-- 中间弹框结束 -->
            </div> 
            <div><span>供电</span>{{supply}}<image :src="img2" @click="gddj" />
            <!-- 中间弹框开始 -->
            <div class="rj_kuang" v-if="gdxs">
              <div>
                <h2>提示</h2>
                <p>民水及市政居住类民用水，根据使用规模收费浮动，平均民用水3元/吨；商水及商业使用类水，收费标准变化较大，平均5元/吨。</p>
                <button @click="gdyc">我知道了</button>
              </div>
            </div>
            <!-- 中间弹框结束 -->
            </div> 
          </div>
        </div>
        <!-- 预售许可证 -->
        <div class="license">
          <h1>预售许可证</h1>
          <div class="b_js">
            <div><span>预售证</span>{{booking}}</div> 
            <div><span>发证时间</span>{{time3}}</div> 
            <div><span>绑定楼栋</span>{{bangding}}元/平</div> 
          </div>
        </div>

      </div>
      <!-- 内容结束 -->
    </div>

 
   
  

  </div>
</template>

<script>
export default {
  data () {
     return {
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
  methods:{
    rjldj(){
      this.rjxs = !this.rjxs;
    },
    rjyc(){
      this.rjxs = false;
    },
    costdj(){
      this.costxs = !this.costxs;
    },
    costyc(){
      this.costxs = false;
    },
    gsdj(){
      this.gsxs = !this.gsxs;
    },
    gsyc(){
      this.gsxs = false;
    },
    gddj(){
      this.gdxs = !this.gsxs;
    },
    gdyc(){
      this.gdxs = false;
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
 
 
.building{ width: 100%;}
.bd_lanmu{width:98%; line-height:84rpx; position: relative; overflow: hidden; white-space: nowrap; margin-right:1%; margin-left:1%; padding-top:4%;} 
.lm_xx{color:#9399a5; display: inline-block; margin-right:4%; margin-left:4%; font-size: 30rpx;}

.bd_neirong{ width:100%;}
.basic{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid; margin-top: 3%;}
.basic h1{ font-size: 36rpx; color: #000; font-weight: bold;}
.b_js div{ margin-top:4%; font-size: 30rpx; line-height: 55rpx;}
.b_js div span{ color: #9399a5; margin-right: 3%;}
.b_js div p{ float: right; color: #a3a6a8; }
.b_js div p.youzj{ position: relative; top: -7%; font-size: 26rpx; width:30%;}
.youzj image{ width:32rpx; height:32rpx; margin-right:4%; margin-top:2%;}

.sales{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid; margin-top: 3%;}
.sales h1{ font-size: 36rpx; color: #000; font-weight: bold;}

.community{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid; margin-top: 3%;}
.community h1{ font-size: 36rpx; color: #000; font-weight: bold;}
.community .b_js div image{ width: 30rpx; height: 30rpx; margin-left:2%;}
/* 中间弹框 */
.rj_kuang{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.rj_kuang div{ width:80%; margin-left: 5%; margin-right: 5%; padding: 5%; background: rgb(255, 255, 255); border-radius:2%; position: relative; bottom:35%;}
.rj_kuang h2{ font-size: 30rpx; margin-bottom: 5%;}
.rj_kuang p{font-size: 28rpx;  margin-bottom: 5%;}
.rj_kuang button{ width: 90%; background: #07c160; color: #fff;}


.license{ width: 90%; padding-left: 5%; padding-right: 5%; padding-bottom: 5%; border-bottom:20rpx #efefef solid; margin-top: 3%;}
.license h1{ font-size: 36rpx; color: #000; font-weight: bold;}


</style>
