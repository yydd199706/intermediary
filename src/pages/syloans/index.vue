<template>
  <div class="indexstyle">

    <div class="jisuanqi">
      <div class="lanmu">
        <div :class="{'selected':tab === 1,'title':true}" class="default" @click="changTab(1)">商业贷款</div>
        <div :class="{'selected':tab === 2,'title':true}" class="default" @click="changTab(2)">组合贷款</div>
        <div :class="{'selected':tab === 3,'title':true}" class="default" @click="changTab(3)">公积金贷款</div>
      </div>

      <div class="diakuand1">
        <!-- 商业贷款开始 -->
        <div class="syloans" v-if="tab===1">
          <!-- 计算方式切换开始 -->
          <div class="jisuan">
            <div class="biaots">计算方式</div>
            <radio-group class="radio-group" >
              <label class="label"><radio class="radio" :value="1"  @click="anniu(1)" color="#348cf0" checked></radio>按贷款总额</label>
              <label class="label1"><radio class="radio" :value="2"  @click="anniu(2)" color="#348cf0" ></radio>按房屋总价</label>
            </radio-group>
          </div>
          <!-- 计算方式切换结束 -->

          <!-- 按贷款总额和房价总价内容开始 -->
          <div class="anniunr">
            <!-- 按贷款总额开始 -->
            <div class="daikuan">
               <div class="sdjine" v-if="antab===2">
                <h1>房屋总价</h1>
                <div class="shuru"><input :value="housePrice" placeholder="输入金额"  @input="houseVal"/><span>万</span></div>
              </div>
              <div class="sdjine" v-if="antab===2">
                <h1>首付比例</h1>
                <div class="shuru1">
                  <input :value="downText" @click="downPicker" disabled="disabled" placeholder="请选择" />                  
                  <mpvue-picker ref="mpvuedownPicker" :pickerValueDefault='pickerValueDefault' @onConfirm="ondownCancel"
                   :pickerValueArray="downValueArray"></mpvue-picker> 
                  <span><image :src="img1" /></span></div>
              </div>
              <div class="sdjine" v-if="antab===2">
                <h1>首付金额</h1>
                <div class="shuru1">
                  <input :value="downPay" @click="downPicker" disabled="disabled" placeholder="请选择" />  
                  <span>万</span> 
              </div>
              </div>
              <div class="sdjine">
                <h1>贷款总额</h1>
                <div class="shuru"><input placeholder="输入金额" @input="monInp" :value="monVal" /><span>万</span></div>
              </div>
              <div class="sdjine">
                <h1>贷款年限</h1>
                <div class="shuru1">
                  <input :value="yearText" @click="showPicker" disabled="disabled" placeholder="请选择" />                  
                  <mpvue-picker ref="mpvuePicker" :pickerValueDefault='pickerValueDefault' @onConfirm="onyearCancel" :pickerValueArray="sexValueArray"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
               <div class="shangdaililv">
                <div class="sdjine">
                  <h1>商贷利率<span class="sdlltu" @click="lldianji"></span></h1>
                  <div class="shuru1">
                    <input :value="rateText"  @click="businessPicker" placeholder="请选择" :disabled="true"/>                  
                    <mpvue-picker ref="businessPickersd" :pickerValueArray="shangdaiValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="onrateConfirm"></mpvue-picker>
                    <span><image :src="img1" /></span>
                  </div>
                </div>  
              </div>
              <!--还款方式 -->
              <div class="sdjine">
                <h1>还款方式</h1>
                <div class="shuru1">
                  <input :value="repaymentText"  @click="lilvPicker" placeholder="请选择" :disabled="true"/>                  
                  <mpvue-picker ref="mpvue20Picker" :pickerValueDefault="pickerValueDefault" @onConfirm="onrepaymentConfirm"  :pickerValueArray="sourceValueArray" ></mpvue-picker>
                  <span><image :src="img1" /></span>
                </div>
              </div>
              <!--商贷利率 -->
              <button class="kaishi" @click="loanFirst">开始计算</button>
            </div>
          </div>
          <!-- 计算方式内容结束 -->
        </div>
        <!-- 商业贷款结束 -->

        <!-- 组合贷款开始 -->
        <div class="portfolio" v-else-if="tab===2">
          <!-- 计算方式切换开始 -->
          <div class="jisuan">
            <div class="biaots">计算方式</div>
            <radio-group class="radio-group" >
              <radio class="radio" :value="1"  @click="anniua(1)" color="#348cf0" checked>按贷款总额</radio>
              <radio class="radio" :value="2"  @click="anniua(2)" color="#348cf0">按房屋总价</radio>
            </radio-group>
          </div>
          <!-- 计算方式切换结束 -->

          <!-- 计算方式内容开始 -->
          <div class="anniunr">
            <!-- 按贷款总额开始 -->
            <div class="daikuan">
              <!--房屋总价 -->
              <div class="sdjine" v-if="antaba===2">
                <h1>房价总额</h1>
                <div class="shuru"><input :value="housePrice" placeholder="输入金额"  @input="houseVal" /><span>万</span></div>
              </div>
              <!--贷款比例 -->
              <div class="sdjine" v-if="antaba===2">
                <h1>首付比例</h1>
                <div class="shuru1">
                  <input :value="downText" @click="downPicker" disabled="disabled" placeholder="请选择" />                  
                  <mpvue-picker ref="mpvuedownPicker" :pickerValueDefault='pickerValueDefault' @onConfirm="ondownCancel"
                   :pickerValueArray="downValueArray"></mpvue-picker> 
                  <span><image :src="img1" /></span></div>
              </div>
               <div class="sdjine" v-if="antaba===2">
                <h1>首付金额</h1>
                <div class="shuru"><input :value="downPay" @click="downPicker" placeholder="输入金额"/><span>万</span></div>
              </div>
              <!--贷款总额 -->
              <div class="sdjine">
                <h1>贷款总额</h1>
                <div class="shuru"><input placeholder="输入金额" @input="monInp" :value="monVal" /><span>万</span></div>
              </div>
              <!--公积金金额 -->
              <div class="sdjine">
                <h1>公积金贷款</h1>
                <div class="shuru"><input :value="fundVal" placeholder="输入金额" @input="fundInp"/><span>万</span></div>
              </div>
              <!--商贷金额 -->
              <div class="sdjine">
                <h1>商业贷款</h1>
                <div class="shuru"><input :value="busVal" placeholder="输入金额" @input="busInp" /><span>万</span></div>
              </div>
              <!--商贷年限-->
              <div class="sdjine">
                <h1>贷款年限</h1>
                <div class="shuru1">
                  <input :value="yearText" @click="showPicker" disabled="disabled" placeholder="请选择" />                  
                  <mpvue-picker ref="mpvuePicker" :pickerValueDefault='pickerValueDefault' @onConfirm="onyearCancel" :pickerValueArray="sexValueArray"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--商贷利率 -->
              <div class="shangdaililv">
                <div class="sdjine">
                  <h1>商贷利率<span class="sdlltu" @click="lldianji"></span></h1>
                  <div class="shuru1">
                    <input :value="rateText"  @click="businessPicker" placeholder="请选择" :disabled="true"/>                  
                    <mpvue-picker ref="businessPickersd" :pickerValueArray="shangdaiValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="onrateConfirm"></mpvue-picker>
                    <span><image :src="img1" /></span></div>
                </div>  
              </div>
              <!--公积金利率-->
              <div class="sdjine">
                <h1>公积金利率</h1>
                <div class="shuru1">
                  <input :value="accText" @click="fundgjjPicker" placeholder="请选择" :disabled="true"/>                  
                  <mpvue-picker ref="fundPicker" :pickerValueArray="fundValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onaccConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
             
              <div class="sdjine">
                <h1>还款方式</h1>
                <div class="shuru1">
                  <input :value="repaymentText"  @click="lilvPicker" placeholder="请选择" :disabled="true"/>                  
                  <mpvue-picker ref="mpvue20Picker" :pickerValueDefault="pickerValueDefault" @onConfirm="onrepaymentConfirm"  :pickerValueArray="sourceValueArray" ></mpvue-picker>
                  <span><image :src="img1" /></span>
                </div>
              </div>
              <!--开始计算 -->
              <button class="kaishi" @click="combinationClick">开始计算</button>
            </div>
            <!-- 按贷款总额结束 -->
          </div>
          <!-- 计算方式内容结束 -->
        </div>
        <!-- 组合贷款结束 -->

        <!-- 公积金贷款开始 -->
        <div class="gongjijinloan" v-else>
          <!-- 计算方式切换开始 -->
          <div class="jisuan">
            <div class="biaots">计算方式</div>
            <radio-group class="radio-group" >
              <radio class="radio" :value="1"  @click="anniub(1)" color="#348cf0" checked>按贷款总额</radio>
              <radio class="radio" :value="2"  @click="anniub(2)" color="#348cf0">按房屋总价</radio>
            </radio-group>
          </div>
          <!-- 计算方式切换结束 -->

          <!-- 计算方式内容开始 -->
          <div class="anniunr">
            <!-- 按贷款总额开始 -->
            <div class="daikuan">
               <!--房屋总价 -->
              <div class="sdjine" v-if="antabb===2">
                <h1>房屋总价</h1>
                <div class="shuru"><input :value="housePrice" placeholder="输入金额"  @input="houseVal" /><span>万</span></div>
              </div>
              <!--贷款比例 -->
              <div class="sdjine" v-if="antabb===2">
                <h1>首付比例</h1>
                <div class="shuru1">
                  <input :value="downText" @click="downPicker" disabled="disabled" placeholder="请选择" />                  
                  <mpvue-picker ref="mpvuedownPicker" :pickerValueDefault='pickerValueDefault' @onConfirm="ondownCancel"
                   :pickerValueArray="downValueArray"></mpvue-picker> 
                  <span><image :src="img1" /></span></div>
              </div>
              <!--公积金金额 -->
              <div class="sdjine" v-if="antabb===2">
                <h1>首付金额</h1>
                <div class="shuru"><input :value="downPay" @click="downPicker" placeholder="输入金额" /><span>万</span></div>
              </div>
              <!--公积金金额 -->
              <div class="sdjine">
                <h1>贷款总额</h1>
                <div class="shuru"><input placeholder="输入金额" @input="monInp" :value="monVal" /><span>万</span></div>
              </div>
              <!--公积金年限-->
              <div class="sdjine">
                <h1>贷款年限</h1>
                <div class="shuru1">
                   <input :value="yearText" @click="showPicker" disabled="disabled" placeholder="请选择" />                  
                  <mpvue-picker ref="mpvuePicker" :pickerValueDefault='pickerValueDefault' @onConfirm="onyearCancel" :pickerValueArray="sexValueArray"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--公积金利率-->
              <div class="sdjine">
                <h1>公积金利率</h1>
                <div class="shuru1">
                  <input :value="accText" @click="fundgjjPicker" placeholder="请选择" :disabled="true"/>                  
                  <mpvue-picker ref="fundPicker" :pickerValueArray="fundValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onaccConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <div class="sdjine">
                <h1>还款方式</h1>
                <div class="shuru1">
                  <input :value="repaymentText"  @click="lilvPicker" placeholder="请选择" :disabled="true"/>                  
                  <mpvue-picker ref="mpvue20Picker" :pickerValueDefault="pickerValueDefault" @onConfirm="onrepaymentConfirm"  :pickerValueArray="sourceValueArray" ></mpvue-picker>
                  <span><image :src="img1" /></span>
                </div>
              </div>
              <!--开始计算 -->
              <button class="kaishi" @click="loanFirst">开始计算</button>

            </div>
            <!-- 按贷款总额结束 -->

            <!-- 按房屋总价开始 -->
            <!-- <div class="fangwu" v-else>
             
              <div class="sdjine">
                <h1>贷款总额</h1>
                <div class="shuru"><input @input="monInp" :value="monVal" placeholder="输入金额" /><span>万</span></div>
              </div>
              <!--公积金年限-->
              <!-- <div class="sdjine">
                <h1>贷款年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundyears4Picker" placeholder="25年" />                  
                  <mpvue-picker ref="fundyearsnx4Picker" :pickerValueArray="fundyears4ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div> -->
              <!--公积金利率-->
              <!-- <div class="sdjine">
                <h1>公积金利率</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundgjj4Picker" placeholder="最新基准利率（3.25%）" />                  
                  <mpvue-picker ref="fund4Picker" :pickerValueArray="fund4ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span>
                </div>
              </div>
              <div class="sdjine">
                <h1>还款方式</h1>
                <div class="shuru1">
                  <input :value="repaymentText"  @click="lilvPicker" placeholder="请选择" :disabled="true"/>                  
                  <mpvue-picker ref="mpvue20Picker" :pickerValueDefault="pickerValueDefault" @onConfirm="onrepaymentConfirm"  :pickerValueArray="sourceValueArray" ></mpvue-picker>
                  <span><image :src="img1" /></span>
                </div>
              </div> -->
              <!--开始计算 -->
              <!-- <button class="kaishi">开始计算</button>
            </div> -->
            <!-- 按房屋总价结束 -->
          </div>
          <!-- 计算方式内容结束 -->
        </div>
        <!-- 公积金贷款结束 -->
      </div>
    </div>
    <!-- 计算结果显示 -->
    <div class="result" v-if="hide">
      <div class="result_top">
        <div class="result_top_left">
          <div>{{textTitle}}</div>
          <div class="red">￥{{Monthly}}</div>
          <div>{{moneyText}}</div>
        </div>
        <div class="result_top_right" @click="lookMore">查看详情</div>
      </div>
      <div class="result_bot">
        <div>
          <div>贷款总额</div>
          <div class="red">{{monVal}}万</div>
        </div>
        <div>
          <div>支付利息</div>
          <div class="red">{{payInterest}}万</div>
        </div>
        <div>
          <div>还款总额</div>
          <div class="red">{{repayment}}万</div>
        </div>
      </div>
    </div>
 

  
  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
const llsd=4.9;
var llgjj = 3.25;
import mpvuePicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按贷款总额——贷款年限
import mpvue20Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按贷款总额——利率方式
import businessPickersd from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按贷款总额——商贷利率

import mpvue2Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按房屋总价——贷款年限
import mpvue202Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按房屋总价——利率方式
import business2Pickersd from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按房屋总价——商贷利率

import fundyearsnxPicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 组合贷款——按贷款总额——公积金年限
import fundPicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 组合贷款——按贷款总额——公积金利率
import mpvue3Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按贷款总额——贷款年限
import rateswayfsPicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按贷款总额——利率方式
import business3Pickersd from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按贷款总额——商贷利率

import fundyearsnx2Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 组合贷款——按房屋总价——公积金年限
import fund2Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 组合贷款——按房屋总价——公积金利率
import mpvue4Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按房屋总价——贷款年限
import rateswayfs4Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按房屋总价——利率方式
import business4Pickersd from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按房屋总价——商贷利率

import fundyearsnx3Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 公积金贷款——按贷款总额——公积金年限
import fund3Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 公积金贷款——按贷款总额——公积金利率

import fundyearsnx4Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 公积金贷款——按房屋总价——公积金年限
import fund4Picker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 公积金贷款——按房屋总价——公积金利率
import mpvuedownPicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";


  export default {
  components: {
    mpvuePicker,// 商业贷款——按贷款总额——贷款年限
    mpvue20Picker,// 商业贷款——按贷款总额——利率方式
    businessPickersd,// 商业贷款——按贷款总额——商贷利率
    mpvuedownPicker,
    mpvue2Picker,// 商业贷款——按房屋总价——贷款年限
    mpvue202Picker,// 商业贷款——按房屋总价——利率方式
    business2Pickersd,// 商业贷款——按房屋总价——商贷利率
    fundyearsnxPicker,// 组合贷款——按贷款总额——公积金年限
    fundPicker,// 组合贷款——按贷款总额——公积金利率
    mpvue3Picker,// 商业贷款——按贷款总额——贷款年限
    rateswayfsPicker,// 商业贷款——按贷款总额——利率方式
    business3Pickersd,// 商业贷款——按贷款总额——商贷利率
    fundyearsnx2Picker,// 组合贷款——按房屋总价——公积金年限
    fund2Picker,// 组合贷款——按房屋总价——公积金利率
    mpvue4Picker,// 商业贷款——按房屋总价——贷款年限
    rateswayfs4Picker,// 商业贷款——按房屋总价——利率方式
    business4Pickersd,// 商业贷款——按房屋总价——商贷利率
    fundyearsnx3Picker,// 公积金贷款——按贷款总额——公积金年限
    fund3Picker,// 组合贷款——按贷款总额——公积金利率
    fundyearsnx4Picker,// 公积金贷款——按房屋总价——公积金年限
    fund4Picker,// 组合贷款——按房屋总价——公积金利率


  },
    data() {
      return {
        tab: 1,
        antab:1,
        antaba:1,
        antabb:1,
        img1:app.globalData.imgurl +"jt1.jpg",
        img2:app.globalData.imgurl +"wen.png",
        monVal:"",
        pickerValueDefault: [0],
        //贷款年限
        sexValueArray:[{label:'360期(30年)',value:'360期(30年)'},{label:'348期(29年)',value:'348期(29年)'},
        {label:'336期(28年)',value:'336期(28年)'},{label:'324期(27年)',value:'324期(27年)'},
        {label:'312期(26年)',value:'312期(26年)'},{label:'300期(25年)',value:'300期(25年)'},
        {label:'288期(24年)',value:'288期(24年)'},{label:'276期(23年)',value:'276期(23年)'},
        {label:'264期(22年)',value:'264期(22年)'},{label:'252期(21年)',value:'252期(21年)'},
        {label:'240期(20年)',value:'240期(20年)'},{label:'228期(19年)',value:'228期(19年)'},
        {label:'216期(18年)',value:'216期(18年)'},{label:'204期(17年)',value:'204期(17年)'},
        {label:'192期(16年)',value:'192期(16年)'},{label:'180期(15年)',value:'180期(15年)'},
        {label:'168期(14年)',value:'168期(14年)'},{label:'156期(13年)',value:'156期(13年)'},
        {label:'144期(12年)',value:'144期(12年)'},{label:'132期(11年)',value:'132期(11年)'},
        {label:'120期(10年)',value:'120期(10年)'},{label:'108期(9年)',value:'108期(9年)'},
        {label:'96期(8年)',value:'96期(8年)'},{label:'84期(7年)',value:'84期(7年)'},
        {label:'72期(6年)',value:'72期(6年)'},{label:'60期(5年)',value:'60期(5年)'},{label:'48期(4年)',value:'48期(4年)'},
        {label:'36期(3年)',value:'36期(3年)'},{label:'24期(2年)',value:'24期(2年)'},{label:'12期(1年)',value:'12期(1年)'}],
        //还款方式
        sourceValueArray:[{label:'等额本息',value:'等额本息'},{label:'等额本金',value:'等额本金'}],
        //商业贷款-商贷利率
        shangdaiValueArray:[{label:'基准利率',value:"1"},{label:'7折',value:"0.7"},{label:'75折',value:"0.75"},
        {label:'8折',value:"0.8"},{label:'85折',value:"0.85"},{label:'88折',value:"0.88"},{label:'9折',value:"0.9"},
        {label:'95折',value:"0.95"},{label:'1.1倍',value:"1.1"},{label:'1.2倍',value:"1.2"},{label:'1.3倍',value:"1.3"}],
        sex2ValueArray:[{label:'20年',value:0},{label:'20年',value:1},{label:'25年',value:2},{label:'30年',value:3}],
        source2ValueArray:[{label:'按旧版基准利率',value:0},{label:'按LPR',value:1}],
        shangdai2ValueArray:[{label:'4.65%（LPR+0基点）',value:0},{label:'5.2%（LPR+55基点）',value:1},
        {label:'5.7%（LPR+105基点）',value:2}],
        fundyearsValueArray:[{label:'25年',value:0},{label:'26年',value:1},{label:'27年',value:2},
        {label:'28年',value:3},{label:'29年',value:4}],
        fundValueArray:[{label:'基准利率',value:"1"},{label:'7折',value:"0.7"},{label:'75折',value:"0.75"}
        ,{label:'8折',value:"0.8"},{label:'85折',value:"0.85"},{label:'88折',value:"0.88"},{label:'9折',value:"0.9"}
        ,{label:'95折',value:"0.95"},{label:'1.1倍',value:"1.1"},{label:'1.2倍',value:"1.2"},{label:'1.3倍',value:"1.3"}],
        sex3ValueArray:[{label:'20年',value:0},{label:'20年',value:1},{label:'25年',value:2},{label:'30年',value:3}],
        rateswayValueArray:[{label:'按旧版基准利率',value:0},{label:'按LPR',value:1}],
        shangdai3ValueArray:[{label:'4.65%（LPR+0基点）',value:0},{label:'5.2%（LPR+55基点）',value:1},
        {label:'5.7%（LPR+105基点）',value:2}],
        fundyears2ValueArray:[{label:'25年',value:0},{label:'26年',value:0},{label:'27年',value:0},
        {label:'28年',value:0},{label:'29年',value:0}],
        fund2ValueArray:[{label:'最新基准利率（3.25%）',value:0},{label:'最新基准利率上浮10%（3.575%）',value:0}],
        sex4ValueArray:[{label:'20年',value:0},{label:'20年',value:0},{label:'25年',value:0},{label:'30年',value:1}],
        ratesway4ValueArray:[{label:'按旧版基准利率',value:0},{label:'按LPR',value:0}],
        shangdai4ValueArray:[{label:'4.65%（LPR+0基点）',value:0},{label:'5.2%（LPR+55基点）',value:0},
        {label:'5.7%（LPR+105基点）',value:0}],
        fundyears3ValueArray:[{label:'25年',value:0},{label:'26年',value:0},{label:'27年',value:0},
        {label:'28年',value:0},{label:'29年',value:0}],
        fund3ValueArray:[{label:'最新基准利率（3.25%）',value:0},{label:'最新基准利率上浮10%（3.575%）',value:0}],
        fundyears4ValueArray:[{label:'25年',value:0},{label:'26年',value:0},{label:'27年',value:0},
        {label:'28年',value:0},{label:'29年',value:0}],
        fund4ValueArray:[{label:'最新基准利率（3.25%）',value:0},{label:'最新基准利率上浮10%（3.575%）',value:0}],
        //首付比例
        downValueArray:[{label:'20%',value:'20%'},{label:'25%',value:'25%'},{label:'30%',value:'30%'},
        {label:'35%',value:'35%'},{label:'40%',value:'40%'},{label:'45%',value:'45%'},{label:'50%',value:'50%'},
        {label:'55%',value:'55%'},{label:'60%',value:'60%'},{label:'65%',value:'65%'},{label:'70%',value:'70%'},
        {label:'75%',value:'75%'}],
        zgc_xianshi:false,
        lslpr_xianshi:false,
        yearText:"",//商贷年限
        rateText:"",  //商贷利率
        housePrice:"",//商贷-房屋总价
        downText:"", //首付比例
        repaymentText:"",
        Monthly:"",
        payInterest:"",
        repayment:"",
        textTitle:"",
        moneyText:"",
        fundVal:"",  //组合贷款-公积金贷款
        busVal:"",  //组合贷款爬-商业贷款
        accText:"",  //组合贷款-公基金利率
        downPay:"", //首付金额
        arrayObj:[],
        hide:false
       }
    },
    onShow(){
      const that = this;
      that.hide=false;
      that.monVal="";
      that.housePrice="";
      that.downPay="";
      that.fundVal="";
      that.busVal="";
      var val=that.shangdaiValueArray[0].value;
      var value = that.fundValueArray[0].value;
      that.yearText=that.sexValueArray[0].value;
      that.rateText = (val * llsd).toFixed(3)+"%";
      that.repaymentText=that.sourceValueArray[0].value;
      that.downText=that.downValueArray[0].value;
      that.accText=(value * llgjj).toFixed(3)+"%";
    },
    methods: {
      changTab(index) {
        const that = this;
        that.antab=1;
        that.antaba=1;
        that.antabb=1;
        that.tab = index;
        that.hide=false;
      },
      anniu(index) {
        this.antab = index;
      },
      anniua(index) {
        this.antaba = index;
      },
      anniub(index) {
        this.antabb = index;
      },
      //获取商贷金额
      monInp:function(e){
        const that = this;
        that.arrayObj=[];
        console.log('eeeee',e.mp.detail.value);
        that.monVal=e.mp.detail.value;
        
      },
      //商业贷款-房屋总价
      houseVal:function(e){
        const that = this;
        that.housePrice=e.mp.detail.value;
        that.setloanMoney(parseFloat(that.housePrice),parseFloat(that.downText) / 100);
      },
      // 商业贷款——按贷款总额——商贷年限
      showPicker() {
      this.$refs.mpvuePicker.show();
      this.arrayObj=[];
      },
    //选择商贷年限
    onyearCancel(e){
      const that = this;
      console.log('商贷年限',e.value);
       that.yearText=e.value;
       that.arrayObj=[];
    },
      // 商业贷款——按贷款总额——利率方式
      lilvPicker() {
      this.$refs.mpvue20Picker.show();
      },   
      // 商业贷款——按贷款总额——商贷利率
      businessPicker(){
      this.$refs.businessPickersd.show()
      },
      //选择商贷利率
      onrateConfirm(e){
        const that = this;
        var val = e.value;
        that.arrayObj=[];
       
        that.rateText = (val * llsd).toFixed(3)+"%";
      },
      //选择还款方式
      onrepaymentConfirm(e){
        const that = this;
        that.repaymentText=e.value;
        that.arrayObj=[];
      },
      //首付比例
      downPicker(){
         this.$refs.mpvuedownPicker.show()
      },
      //商贷-首付比例选择
      ondownCancel(e){
        const that = this;
        that.downText=e.value;
        that.setloanMoney(parseFloat(that.housePrice),parseFloat(that.downText) / 100);
        // that.setloanMoney(parseInt(that.downText) / 100);
        console.log('that.downText',that.downText);
      },
      // 商业贷款——按房屋总价——商贷年限

      show2Picker() {
      this.$refs.mpvue2Picker.show();
      },
      // 商业贷款——按房屋总价——利率方式
      lilv2Picker() {
      this.$refs.mpvue202Picker.show();
      }, 
      // 商业贷款——按房屋总价——商贷利率
      business2Picker(){
      this.$refs.business2Pickersd.show()
      },
      //组合贷款-公积金贷款
      fundInp:function(e){
        const that = this;
        that.arrayObj=[];
        that.fundVal=e.target.value;
        if(that.monVal!=""){
          that.busVal=that.monVal-that.fundVal;
        }
        
      },
      //选择公积金利率
      onaccConfirm(e){
        const that = this;
        var val = e.value;
        that.accText = (val * llgjj).toFixed(3)+"%";
        that.arrayObj=[];
      },
      //组合贷款-商业贷款
      busInp:function(e) {
        const that = this;
        that.busVal=e.target.value;
        that.arrayObj=[];
        if(that.monVal!=""&&that.busVal!=""){
          that.fundVal=that.monVal-that.busVal;
        }
        
      },
      // 组合贷款——按贷款总额——公积金年限
      fundyearsPicker(){
      this.$refs.fundyearsnxPicker.show()
      },
      // 组合贷款——按贷款总额——公积金利率
      fundgjjPicker() {
      this.$refs.fundPicker.show();
      },
      // 组合贷款——按贷款总额——商贷年限
      show3Picker() {
      this.$refs.mpvue3Picker.show();
      },
      // 商业贷款——按贷款总额——利率方式
      rateswayPicker(){
      this.$refs.rateswayfsPicker.show()
      },
      // 商业贷款——按贷款总额——商贷利率
      business3Picker(){
      this.$refs.business3Pickersd.show()
      },


      // 组合贷款——按房屋总价——公积金年限
      fundyears2Picker(){
      this.$refs.fundyearsnx2Picker.show()
      },
      // 组合贷款——按房屋总价——公积金利率
      fundgjj2Picker() {
      this.$refs.fund2Picker.show();
      },
      // 组合贷款——按房屋总价——商贷年限
      show4Picker() {
      this.$refs.mpvue4Picker.show();
      },
      // 商业贷款——按房屋总价——利率方式
      ratesway4Picker(){
      this.$refs.rateswayfs4Picker.show()
      },
      // 商业贷款——按房屋总价——商贷利率
      business4Picker(){
      this.$refs.business4Pickersd.show()
      },


      // 公积金贷款——按贷款总额——公积金年限
      fundyears3Picker(){
      this.$refs.fundyearsnx3Picker.show()
      },
      // 公积金贷款——按贷款总额——公积金利率
      fundgjj3Picker() {
      this.$refs.fund3Picker.show();
      },
      

      // 公积金贷款——按贷款总额——公积金年限
      fundyears4Picker(){
      this.$refs.fundyearsnx4Picker.show()
      },
      // 公积金贷款——按贷款总额——公积金利率
      fundgjj4Picker() {
      this.$refs.fund4Picker.show();
      },




      onConfirm(e) {
        console.log(e);
      },



      // 商贷利率
      lldianji(){
        this.zgc_xianshi = !this.zgc_xianshi;
      },
      lilvdj(){
        this.zgc_xianshi = false;
      },
      // 历史LPR
      djlishi_lpr(){
        this.lslpr_xianshi = !this.lslpr_xianshi;
      },
      zd_js(){
        this.lslpr_xianshi = false;
      },

    
    //性别确认
    onSexConfirm(e){
       if (e.label == null) {
        this.sex2 = false;
        this.sex1 = true;
      } else {
        this.sex2 = true;
        this.sex1 = false;
        this.sexText=e.label;
        this.sexIndex = e.value[0];
      }
      this.show = true;
      
    },
  //按照贷款金额计算
  loanFirst:function(){
    const I = this;
    if(I.monVal==""){
      wx.showToast({
        title: '贷款总额应该大于0',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
    // I.hide=true;
    // that.arrayObj=[];
    var money1 = I.monVal == "" ? 0 : parseFloat(I.monVal) * 10000;
    var month1 = parseInt(I.yearText);
    var apr1="";
    if(I.tab==1){
     apr1=parseFloat(I.rateText) / 100;
    }else if(I.tab==3){
      apr1=parseFloat(I.accText) / 100;
       console.log('公积金贷款',apr1);
    }
    
    if (I.repaymentText == '等额本息') {
        I.PrintType1(money1, 0, month1, apr1, 0);
    } else if (I.repaymentText == '等额本金') {
        I.PrintType2(money1, 0, month1, apr1, 0);
    }
     var arrayObj= JSON.stringify(I.arrayObj);
  wx.navigateTo({url:"/pages/table/main?arrayObj="+arrayObj + "&monVal=" + I.monVal +
   "&payInterest=" + I.payInterest+"&repayment=" + I.repayment+"&yearText=" + I.yearText+
   "&repaymentText=" + I.repaymentText+"&rateText="+I.rateText+"&accText="+I.accText+
   "&busVal="+I.busVal+"&fundVal="+I.fundVal+"&tab="+I.tab});
  },
  //按组合贷款计算
  combinationClick:function() {
    const I = this;
    // that.arrayObj=[];
    if(I.monVal==""){
      wx.showToast({
        title: '贷款总额应该大于0',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
    // I.hide=true;
    var month1 = parseInt(I.yearText);
  var money1 = I.busVal == "" ? 0 : parseFloat(I.busVal) * 10000;
        var money2 = I.fundVal == "" ? 0 : parseFloat(I.fundVal) * 10000;
        var apr1 = I.rateText == "基准利率4.9" ? (4.9 / 100) : parseFloat(I.rateText) / 100;
        var apr2 = I.accText == "基准利率3.25" ? (3.25 / 100) : parseFloat(I.accText) / 100;
        if (I.repaymentText == '等额本息') {
            I.PrintType1(money1, money2, month1, apr1, apr2);
            console.log('44444444',money1);
            console.log('55555',money2);
        } else if (I.repaymentText == '等额本金') {
            I.PrintType2(money1, money2, month1, apr1, apr2);
        }
         var arrayObj= JSON.stringify(I.arrayObj);
  wx.navigateTo({url:"/pages/table/main?arrayObj="+arrayObj + "&monVal=" + I.monVal +
   "&payInterest=" + I.payInterest+"&repayment=" + I.repayment+"&yearText=" + I.yearText+
   "&repaymentText=" + I.repaymentText+"&rateText="+I.rateText+"&accText="+I.accText+
   "&busVal="+I.busVal+"&fundVal="+I.fundVal+"&tab="+I.tab});
  },
PrintType1(money1, money2, month1, apr1, apr2) { //等额本息
const that = this;
    var I = this;
    
    var mapr1 = apr1 / 12; //商业月利率
    var mapr2 = apr2 / 12; //公积金月利率
    var fm1 = 1;
    for (var i = 1; i < month1; i++) {
        fm1 += Math.pow(1 + mapr1, i);
    }
    var fm2 = 1;
    for (var i = 1; i < month1; i++) {
        fm2 += Math.pow(1 + mapr2, i);
    }
    var perMonth1 = parseFloat((money1 * Math.pow(1 + mapr1, month1) / fm1).toFixed(2)); //商业每月还款额,保留两位小数
    console.log('每月还款',perMonth1.toFixed(0));
    var perMonth2 = parseFloat((money2 * Math.pow(1 + mapr2, month1) / fm2).toFixed(2)); //公积金每月还款额,保留两位小数

    var leftMoney1 = money1;
    var leftMoney2 = money2;
    var tempMoney1 = money1;
    var tempMoney2 = money2;
    var month = month1;
    var totalLX1 = 0;
    var totalLXT = 0;
    for (var i = 1; i <= month; i++) {
        var lx1 = (tempMoney1 * mapr1).toFixed(2);
        tempMoney1 = (tempMoney1 * (1 + mapr1) - perMonth1).toFixed(2);

        var lx2 = (tempMoney2 * mapr2).toFixed(2);
        tempMoney2 = (tempMoney2 * (1 + mapr2) - perMonth2).toFixed(2);

        if (i <= month1) {
            totalLXT += parseFloat(lx1 + lx2);
        }

    }
    var totalAmount = money1 + money2 + totalLXT;
    for (var i = 1; i <= month; i++) {
        var lx1 = parseFloat((leftMoney1 * mapr1).toFixed(2));
        leftMoney1 = (leftMoney1 * (1 + mapr1) - perMonth1).toFixed(2);

        var lx2 = parseFloat((leftMoney2 * mapr2).toFixed(2));
        leftMoney2 = (leftMoney2 * (1 + mapr2) - perMonth2).toFixed(2);
        if (i <= month1) {
            totalLX1 += parseFloat(lx1 + lx2);
        }
        totalAmount -= (perMonth1 + perMonth2);
           var detail = 
           {
             index:i,
             supply:parseFloat((perMonth1 + perMonth2).toFixed(2)),
             principal:parseFloat((perMonth1 - lx1).toFixed(2) + (perMonth2 - lx2).toFixed(2)),
             interest:parseFloat(lx1.toFixed(2) + lx2.toFixed(2)),
             surplus:parseFloat(totalAmount.toFixed(2))
           }
          //  (i, perMonth1.toFixed(0) + perMonth2.toFixed(0), (perMonth1 - lx1).toFixed(0) + (perMonth2 - lx2).toFixed(0), lx1.toFixed(0) + lx2.toFixed(0), (totalAmount).toFixed(0));
        I.arrayObj.push(detail); 
        
    }
    console.log('详情',I.arrayObj);   
    that.moneyText="每月还款额固定";
    that.textTitle="每月月供";
    that.monVal=(money1 + money2) / 10000;
    that.payInterest=(totalLX1.toFixed(0) / 10000).toFixed(2);
    that.repayment=((money1 + money2 + totalLX1).toFixed(0) / 10000).toFixed(2);
    that.Monthly=parseFloat(perMonth1 + perMonth2).toFixed(2);
},
PrintType2(money1, money2, month1, apr1, apr2) { //等额本金
    const that = this;
    var I = this;
    var mapr1 = apr1 / 12; //商业月利率
    var mapr2 = apr2 / 12; //公积金月利率
    //每月还本金
    var bj1 = money1 / month1;
    var bj2 = money2 / month1;

    var leftMoney1 = money1;
    var leftMoney2 = money2;
    var tempMoney1 = money1;
    var tempMoney2 = money2;

    var month = month1;
    var totalLX1 = 0;
    var totalLXT = 0;
    var firstPerMoney = 0;

    for (var i = 1; i <= month; i++) {
        var lx1 = parseFloat((tempMoney1 * mapr1).toFixed(2));
        var perMoney1 = parseFloat((parseFloat(bj1) + parseFloat(lx1)).toFixed(2)); //本期还款
        tempMoney1 = (tempMoney1 * (1 + mapr1) - perMoney1).toFixed(2);

        var lx2 = parseFloat((tempMoney2 * mapr2).toFixed(2));
        var perMoney2 = parseFloat((parseFloat(bj2) + parseFloat(lx2)).toFixed(2)); //本期还款
        tempMoney2 = (tempMoney2 * (1 + mapr2) - perMoney2).toFixed(2);

        if (i <= month1) {
            totalLXT += parseFloat(lx1 + lx2);
        }
    }
    var totalAmount = money1 + money2 + totalLXT;
    for (var i = 1; i <= month; i++) {
        var lx1 = parseFloat((leftMoney1 * mapr1).toFixed(2));
        var perMoney1 = parseFloat((parseFloat(bj1) + parseFloat(lx1)).toFixed(2)); //本期还款
        leftMoney1 = (leftMoney1 * (1 + mapr1) - perMoney1).toFixed(2);

        var lx2 = parseFloat((leftMoney2 * mapr2).toFixed(2));
        var perMoney2 = parseFloat((parseFloat(bj2) + parseFloat(lx2)).toFixed(2)); //本期还款
        leftMoney2 = (leftMoney2 * (1 + mapr2) - perMoney2).toFixed(2);

        if (i == 1) {
            firstPerMoney = perMoney1 + perMoney2;
        }
        if (i <= month1) {
            totalLX1 += parseFloat(lx1 + lx2);
        }

        totalAmount -= (perMoney1 + perMoney2);
        var detail = 
           {
             index:i,
             supply:parseFloat((perMoney1 + perMoney2).toFixed(2)),
             principal:parseFloat((perMoney1 - lx1).toFixed(2) + (perMoney2 - lx2).toFixed(2)),
             interest:parseFloat(lx1.toFixed(2) + lx2.toFixed(2)),
             surplus:parseFloat(totalAmount.toFixed(2))
           }
        I.arrayObj.push(detail);
    }
    that.moneyText="每月递减" + lx1 + "元";
    that.textTitle="首月月供";
    that.monVal=(money1 + money2) / 10000;
    that.payInterest=(totalLX1.toFixed(0) / 10000).toFixed(2);
    that.repayment=((money1 + money2 + totalLX1).toFixed(0) / 10000).toFixed(2);
    that.Monthly=firstPerMoney;
},
//点击查看更多查看详情
lookMore:function() {
  const that = this;
var apr1="";
 
},
// Detail(periods, supply, principal, interest, surplus) {
//     var D = this;
//     D.periods = periods;
//     D.supply = supply;
//     D.principal = principal;
//     D.interest = interest;
//     D.surplus = surplus;
// },
//计算首付金额
setloanMoney(obj,attr) {
  const that = this;
    var money = obj;
    var ratio = attr;
    that.downPay=(money * ratio).toFixed(2);
    that.monVal=money-that.downPay;
    console.log('that.monVal',that.monVal);
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


/* 头部切换 */
.jisuanqi{ width: 90%; margin-left: 5%; margin-right: 5%; }
.lanmu{ border-bottom:2rpx solid #e6e6e6; overflow: hidden; width: 100%; display: flex; flex-direction: row; margin-top:3%;  }
.lanmu .default{width:33.3%; font-size:35rpx; font-weight: bold; }
.title { flex: 1; text-align: center;}
.selected { border-bottom:4rpx  rgb(15, 142, 228) solid; color: rgb(15, 142, 228); width:20rpx !important; border-radius:4rpx; padding-bottom:4%;}

/* 商业贷款 */
.syloans .jisuan{ display: flex; flex-direction: row; margin-top:5%; padding-bottom:5%; border-bottom:2rpx solid #e7e7e7; width: 94%; margin-left: 3%; margin-right: 3%; }
.jisuan .biaots{ width:28.3%; margin-left: 1%; font-weight: bold;}
.radio-group{ width:70.6%;}
.radio-group .radio{transform: scale(.8); }
.radio-group .label{float: left; width:48%; font-size:31rpx; margin-right: 2%;}
.radio-group .label1{ float: right; width:48%; margin-left:2%; font-size: 31rpx; }



.sdjine{display: flex; flex-direction: row; margin-top:5%; padding-bottom:5%; border-bottom:2rpx solid #e7e7e7; width: 94%; margin-left: 3%; margin-right: 3%; }
.sdjine h1{width: 28.3%; margin-left: 1%; font-weight: bold;}
.sdjine .shuru{ width:70.6%; text-align: left;}
.sdjine .shuru input{ float: left; width: 80%;}
.sdjine .shuru span{ float: right;  width:10%;}
.sdjine .shuru span image{ width:18rpx; height:30rpx;}

.sdjine .shuru1{ width:66.6%; }
.sdjine h1 span.sdlltu image{ width:30rpx; height:30rpx; margin-left:10rpx; position: relative; top:6rpx;}

.sdjine .shuru1 p{ float: left; width:78%;}
.sdjine .shuru1 span{ float: right;  width:10%;}
.sdjine .shuru1 span image{ width:18rpx; height:30rpx;}
.sdjine .shuru1 input{ float: left; width:78%;}
.kaishi{ margin-top:10%; margin-left: 3%; margin-right: 3%; width: 94%; background: rgb(52, 140, 240); color: #fff;}

/* 中间利率弹框 */
.zhedc{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.llxianshi{ width:80%; margin-left:5%; margin-right:5%; background: #fff; border-radius:10rpx; padding: 5%; position: relative; bottom:20%;}
.llxianshi h2{ font-size: 32rpx; font-weight: bold; margin-bottom: 5%; margin-top: 5%;}
.llxianshi p{ font-size: 28rpx; margin-bottom:2%;}
.llxianshi p span{ font-weight: bold;}
.know{ width: 100%; height:80rpx; line-height: 80rpx; color:#3072f6; border:2rpx #3072f6 solid; font-size: 32rpx; margin-top: 7%; margin-bottom: 5%; }


/* 历史LPR */
.lskuang{ width: 100%; height:80rpx; line-height: 80rpx; background: #d7e8f2; border-radius:10rpx;}
.lskuang .lishilpr{ margin-left: 3%; margin-right: 3%; display: flex; flex-direction: row; font-size: 26rpx;}
.sz_ls{ padding:1rpx 5rpx; background: #3072f6; border-radius: 5px; height: 30rpx; line-height: 30rpx; margin-top:4%; font-size: 24rpx; color: #fff;}
.mingzi{ margin-left: 3%; color: rgb(156, 156, 156); font-size: 24rpx;}
.djlishi{ color: #3072f6; font-size: 26rpx; font-weight: bold; margin-left:10%;}
/* 历史LPR中间弹框开始 */
.LPRtankuang{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.lilvzz_z{ width:80%; margin-left:5%; margin-right:5%; background: #fff; border-radius:10rpx; padding: 5%; position: relative; bottom:15%; height:1000rpx;}
.lilvzz_z h3{ font-size:34rpx; font-weight: bold;}
.lilvzz_z p{ line-height:45rpx; font-size: 28rpx; margin-bottom:1%;}
.lilvzz_z p span{ font-weight: bold;}
.llbiaoge{ width: 100%; border: 1px rgb(209, 209, 209) solid; border-right:none}
.llbiaoge ul{ display: flex; flex-direction: row; border-bottom: 1px rgb(209, 209, 209) solid;}
.llbiaoge ul li{ width: 33.3%; font-size:28rpx; text-align: center; border-right:2rpx rgb(209, 209, 209) solid;}

/* 组合贷款 */
.portfolio .jisuan{ display: flex; flex-direction: row; margin-top:5%; padding-bottom:5%; border-bottom:2rpx solid #e7e7e7; width: 94%; margin-left: 3%; margin-right: 3%; }

/* 公积金贷款 */
.gongjijinloan .jisuan{ display: flex; flex-direction: row; margin-top:5%; padding-bottom:5%; border-bottom:2rpx solid #e7e7e7; width: 94%; margin-left: 3%; margin-right: 3%; }
.result{width: 94%;margin: 30rpx auto 50rpx auto;}
.result_top{overflow: hidden;font-size: 30rpx;border-bottom: 2rpx solid #e7e7e7;padding-bottom: 30rpx;}
.result_top_left{float: left;}
.result_top_right{float: right;}
.result_bot{margin-top: 60rpx;display: flex;justify-content: center;font-size: 30rpx;}
.result_bot>div{width: 30%;text-align: center;}
.red{color: #3072f6;font-weight: bold;}
</style>
s