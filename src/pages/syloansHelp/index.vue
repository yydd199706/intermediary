<template>
  <div class="indexstyle">
    
    <!-- 帮助开始 -->
    <div class="tank_js">
      <div>
        <h3>等额本息</h3>
        <p>每月还款金额不变，其中还款的本金逐月递增，利息逐月递减。</p>
      </div>
      <div>
        <h3>等额本金</h3>
        <p>每月还款金额不同，首月还款金额最多，之后每月递减，其中每月还款的本金不变，利息逐月减少。</p>
      </div>
      <div>
        <h3>贷款年限</h3>
        <p>上限30年，与主贷人年龄、房屋建成年代（房龄）有关。比如：个别银行70减年龄，60减房龄，两者取低值为贷款年限（各个银行政策不一致，请以实际贷款银行为准）。</p>
      </div>
      <div>
        <h3>贷款成数</h3>
        <p>贷款金额与房屋总价的比例，目前一线城市基本上最高可贷6.5成，个别二三线城市最高可贷7成。</p>
      </div>
      <div>
        <h3>贷款利率</h3>
        <h2>商贷利率 = LPR + 基点</h2>
        <p>自2019年10月8日起，新发放的商业住房贷款的贷款利率<span>由“贷款基准利率（4.9%）”转换为“贷款市场报价利率（LPR）”。</span>在LPR的基础上增加基点来确定最终的商贷利率；LPR每月20日（遇节假日顺延）报价一次，可在中国人民银行网站查询。</p>
      </div>
      <div>
        <h2>商贷利率 = LPR + 基点</h2>
        <div class="bgdk">
          <ul class="ny_bt">
            <li>贷款年限</li>
            <li>LPR</li>
          </ul>
          <ul>
            <li>一年及以内</li>
            <li>一年期LPR</li>
          </ul>
          <ul>
            <li>一至五年</li>
            <li>由银行自主选择</li>
          </ul>
          <ul>
            <li>五年及以上</li>
            <li>五年期LPR</li>
          </ul>
        </div>

      </div>
      <div>
        <h2>商贷利率 = LPR + 基点</h2>
        <div class="bgdk">
          <ul class="ny_bt">
            <li>贷款年限</li>
            <li>LPR</li>
          </ul>
          <ul>
            <li>一年及以内</li>
            <li>一年期LPR</li>
          </ul>
          <ul>
            <li>一至五年</li>
            <li>由银行自主选择</li>
          </ul>
          <ul>
            <li>五年及以上</li>
            <li>五年期LPR</li>
          </ul>
        </div>

      </div>
    </div>
    <!-- 帮助结束 -->
    
  

  </div>
</template>

<script>
export default {
  data () {
     return {
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

.tank_js{ width:84%; margin-left:8%; margin-right:8%; margin-top: 5%;}
.tank_js div{ margin-bottom:8%;}
.tank_js div h3{ font-size: 35rpx; font-weight: bold; margin-bottom:2%;}
.tank_js div p{ font-size: 28rpx; line-height:45rpx;}
.tank_js div h2{ font-size: 30rpx; font-weight: bold; margin-top: 1%; margin-bottom: 1%;}
.tank_js div p span{ font-weight: bold;}

.bgdk{ border:2rpx #e7e7e7 solid; width: 100%; border-right: none; margin-top: 2%; border-bottom: none;  }
.bgdk ul{ border-bottom: 2rpx #e7e7e7 solid; overflow: hidden;}
.bgdk ul li{ float: left; padding-left: 5%; width:44.6%; border-right: 2rpx #e7e7e7 solid; font-size:28rpx; height:70rpx; line-height: 70rpx;}
.bgdk ul.ny_bt{ background:#f7f7f7;}

</style>
