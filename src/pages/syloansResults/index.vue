<template>
  <div class="indexstyle">
    
    <div class="jisuanqi">
      <!-- 栏目切换开始 -->
      <div class="top_lanmu">
        <div class="debx" :class="{'yangshi' :tab==1}" @click="lmdianji(1)">等额本息</div>
        <div class="debx" :class="{'yangshi' :tab==2}" @click="lmdianji(2)">等额本金</div>
      </div>
      <!-- 栏目切换结束 -->

      <!-- 切换内容开始 -->
      <div class="bottom_neirong">
        <!-- 等额本息开始 -->
        <div class="benxi" v-if="tab==1">
          <div class="shang_my">
            <div class="my_kuang">
              <!-- 每月应还 -->
              <div class="s_yingh">
                <h1>每月应还</h1>
                <div class="jine">
                  <div class="qian">1,031.27</div>
                  <div class="dw_r">
                    <image :src="img1" />
                    <p>元</p>
                  </div>
                </div>
              </div>
              <!-- 贷款总额 -->
              <div class="daikuan">
                <div>
                  <h2>贷款总额</h2>
                  <p>20万</p>
                </div>
                <div>
                  <h2>利息总额</h2>
                  <p>17.13万</p>
                </div>
                <div>
                  <h2>贷款年限</h2>
                  <p>30万</p>
                </div>
              </div>
            </div>
            <div class="my_wenzi"><span>每月还款金额不变，</span>其中还款的本金逐月递增，利息逐月递减。计算结果仅供参考。</div>
          </div>

          <div class="xia_qi">
            <ul class="bi_qi">
              <li class="q1">期数</li>
              <li>月供总额</li>
              <li>月供本金</li>
              <li>月供利息</li>
              <li>剩余本金</li>
            </ul>
            <ul>
              <li class="q1">1</li>
              <li>1546.91</li>
              <li>384.41</li>
              <li>1162.50</li>
              <li>299615.29</li>
            </ul>
            <ul>
              <li class="q1">2</li>
              <li>1546.91</li>
              <li>384.41</li>
              <li>1162.50</li>
              <li>299615.29</li>
            </ul>
          </div>

        </div>
        <!-- 等额本息结束 -->

        <!-- 等额本金开始 -->
        <div class="benjin" v-else>
          <div class="shang_my">
            <div class="my_kuang">
              <!-- 每月应还 -->
              <div class="s_yingh">
                <h1>每月应还</h1>
                <div class="jine">
                  <div class="qian">1,031.27</div>
                  <div class="dw_r">
                    <image :src="img1" />
                    <p>元</p>
                  </div>
                </div>
                <h2>每月递减约3.23元</h2>
              </div>
              <!-- 贷款总额 -->
              <div class="daikuan">
                <div>
                  <h2>贷款总额</h2>
                  <p>20万</p>
                </div>
                <div>
                  <h2>利息总额</h2>
                  <p>17.13万</p>
                </div>
                <div>
                  <h2>贷款年限</h2>
                  <p>30万</p>
                </div>
              </div>
            </div>
            <div class="my_wenzi"><span>每月还款金额递减3.23元，</span>其中每月还款的本金不变，利息逐月减少。计算结构仅供参考。</div>
          </div>

          <div class="xia_qi">
            <ul class="bi_qi">
              <li class="q1">期数</li>
              <li>月供总额</li>
              <li>月供本金</li>
              <li>月供利息</li>
              <li>剩余本金</li>
            </ul>
            <ul>
              <li class="q1">1</li>
              <li>1546.91</li>
              <li>384.41</li>
              <li>1162.50</li>
              <li>299615.29</li>
            </ul>
            <ul>
              <li class="q1">2</li>
              <li>1546.91</li>
              <li>384.41</li>
              <li>1162.50</li>
              <li>299615.29</li>
            </ul>
          </div>
        </div>
        <!-- 等额本金结束 -->
        
      </div>
      <!-- 切换内容结束 -->


    </div>

    
  

  </div>
</template>

<script>
export default {
  data () {
     return {
       tab: 1,
       img1: "/static/images/wen.png",
 
    }
  },
  methods: {
    lmdianji(index){
      this.tab = index;
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
 
.jisuanqi{ width: 100%;} 
.top_lanmu{ margin-top: 5%; padding-left:25%; padding-right:25%; display: flex; flex-direction: row;position: sticky;top: 0; background: #fff;  width:50%; padding-bottom: 5%;}
.debx{ margin-left: 5%; margin-right: 5%; padding-bottom:2%;}
.yangshi{ border-bottom:4rpx rgb(28, 139, 243) solid; color:rgb(28, 139, 243); font-weight: bold;}

.bottom_neirong{ width:90%; margin-left: 5%; margin-right: 5%; } 
.benxi{ width: 100%;}
.my_kuang{ width: 100%; background: #3072f6; border-radius: 5%;}
.s_yingh h1{ font-size: 30rpx; text-align: center; margin-bottom: 2%; color: #fff; padding-top:8%;}
.s_yingh .jine{ display: flex; flex-direction: row; margin-left:19%; margin-right:19%;}
.s_yingh .jine .qian{ font-size:80rpx; font-weight: bold; color: #fff; margin-right: 3%;}
.s_yingh .jine .dw_r image{ width: 30rpx; height: 30rpx; margin-top:50%; display: block;}
.s_yingh .jine .dw_r p{ font-size: 30rpx; color: #fff;}
.s_yingh h2{font-size: 30rpx; text-align: center; color: #fff; padding-top:1%;}
.daikuan{ width: 100%; display: flex; flex-direction: row; color: #fff;}
.daikuan div{ width: 33.3%; margin-top:10%; margin-bottom:8%; text-align: center; border-right: 1px #6d9bf8 solid;}
.daikuan div h2{ color: #acc6fb; margin-bottom:8%; font-size: 28rpx;}
.my_wenzi{ width:94%; margin-top: 5%; line-height:45rpx; font-size: 28rpx; margin-left: 3%; margin-right: 3%;}
.my_wenzi span{ color: #3072f6; font-weight: bold;} 

.xia_qi{ width:94%; margin-left: 3%; margin-right: 3%;}
.xia_qi ul{ padding-bottom:5%; display: flex; flex-direction: row;}
.xia_qi ul li{ width: 32%; font-size: 26rpx; text-align: center;}
.xia_qi ul li.q1{ width: 13% !important;}
.xia_qi ul.bi_qi{ font-weight: bold; margin-top:10%; display: flex; flex-direction: row;position: sticky;top:7%; width: 100%; background: #fff;}

</style>
