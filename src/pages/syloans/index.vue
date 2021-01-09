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

          <!-- 计算方式内容开始 -->
          <div class="anniunr">
            <!-- 按贷款总额开始 -->
            <div class="daikuan" v-if="antab===1">
              <!--商贷金额 -->
              <div class="sdjine">
                <h1>商贷金额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--商贷年限 -->
              <div class="sdjine">
                <h1>商贷年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="showPicker" placeholder="30年" />                  
                  <mpvue-picker ref="mpvuePicker" :pickerValueArray="sexValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--利率方式 -->
              <div class="sdjine">
                <h1>利率方式</h1>
                <div class="shuru1">
                  <input :value="callText"  @click="lilvPicker" placeholder="按LPR" />                  
                  <mpvue-picker ref="mpvue20Picker" :pickerValueArray="sourceValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="oncallConfirm" ></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--历史LPR -->
              <div class="lskuang">
                <div class="lishilpr">
                  <div class="sz_ls">07.20</div>
                  <div class="mingzi">LPR：一年期3.85%，五年期4.65%</div>
                  <div class="djlishi" @click="djlishi_lpr">历史LPR</div>
                </div>
                <!-- 历史LPR中间弹框开始 -->
                <div class="LPRtankuang" v-if="lslpr_xianshi">
                  <div class="lilvzz_z" style="height:800rpx;overflow-y:auto">
                    <h3>LPR（贷款市场报价利率）</h3>
                    <p>自2019年10月8日起，新发放的商业住房贷款的贷款利率由<span>“贷款基准利率（4.9%）”转换为“贷款市场报价利率（LPR）”</span>。在LPR的基础上增加基点来确定最终的商贷利率；LPR每月20日（遇节假日顺延）报价一次，可在中国人民银行网站查询。</p>
                    <p><span>最近一年LPR值</span></p>
                    <p>（贷款年限在1-5年期间，由银行自主选择采用一年期or五年期LPR）</p>
                    <div class="llbiaoge">
                      <ul>
                        <li>发布时间</li>
                        <li>一年期</li>
                        <li>五年期</li>
                      </ul>
                      <ul>
                        <li>7/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>6/22/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>5/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>4/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>3/20/2020</li>
                        <li>4.05%</li>
                        <li>4.75%</li>
                      </ul>
                      <ul>
                        <li>2/20/2020</li>
                        <li>4.05%</li>
                        <li>4.75%</li>
                      </ul>
                      <ul>
                        <li>1/20/2020</li>
                        <li>4.15%</li>
                        <li>4.8%</li>
                      </ul>
                      <ul>
                        <li>12/20/2019</li>
                        <li>4.15%/li>
                        <li>4.8%</li>
                      </ul>

                    </div>
                    <button class="know" @click="zd_js">知道了</button>
                  </div>
                </div>
                <!-- 历史LPR中间弹框结束-->
              </div>
              <!--商贷利率 -->
              <div class="shangdaililv">
                <div class="sdjine">
                  <h1>商贷利率<span class="sdlltu" @click="lldianji"><image :src="img2" /></span></h1>
                  <div class="shuru1">
                    <input :value="callText"  @click="businessPicker" placeholder="4.65%（LPR+0基点）" />                  
                    <mpvue-picker ref="businessPickersd" :pickerValueArray="shangdaiValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="oncallConfirm"></mpvue-picker>
                    <span><image :src="img1" /></span></div>
                </div>  
                <!-- 中间利率弹框开始 -->
                <div class="zhedc" v-if="zgc_xianshi">
                <div class="llxianshi">
                  <h2>商贷利率</h2>
                  <p>自2019年10月8日起，商业贷款利率的计算方式由“贷款基准利率（4.9%）*上浮或下浮比例”改为“LPR+基点”</p>
                  <p>基点，即浮动值，10基点=0.1%</p>
                  <p><span>提醒：</span>如果是存量贷款的固定利率转LPR，则基点=（老利率-4.8%）x10000</p>
                  <p><span>举例</span></p>
                  <p>当前贷款利率4.9%，下浮10%，则：</p>
                  <p>老利率为4.9%*（1-10%）= 4.41%</p>
                  <p>基点=（4.41%-4.8%）*10000= -39</p>
                  <button class="know" @click="lilvdj">知道了</button>
                </div>
                </div>
                <!-- 中间利率弹框结束 -->
              </div>
              <!--开始计算 -->
              <button class="kaishi">开始计算</button>

            </div>
            <!-- 按贷款总额结束 -->

            <!-- 按房屋总价开始 -->
            <div class="fangwu" v-else>
              <!--房屋总价 -->
              <div class="sdjine">
                <h1>房屋总价</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--贷款比例 -->
              <div class="sdjine">
                <h1>贷款比例</h1>
                <div class="shuru"><input value="6.5" /><span>成</span></div>
              </div>
              <!--贷款金额 -->
              <div class="sdjine">
                <h1>贷款金额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--商贷年限 -->
              <div class="sdjine">
                <h1>商贷年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="show2Picker" placeholder="30年" />                  
                  <mpvue-picker ref="mpvue2Picker" :pickerValueArray="sex2ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--利率方式 -->
              <div class="sdjine">
                <h1>利率方式</h1>
                <div class="shuru1">
                  <input :value="callText"  @click="lilv2Picker" placeholder="按LPR" />                  
                  <mpvue-picker ref="mpvue202Picker" :pickerValueArray="source2ValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="oncallConfirm" ></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--历史LPR -->
              <div class="lskuang">
                <div class="lishilpr">
                  <div class="sz_ls">07.20</div>
                  <div class="mingzi">LPR：一年期3.85%，五年期4.65%</div>
                  <div class="djlishi" @click="djlishi_lpr">历史LPR</div>
                </div>
                <!-- 历史LPR中间弹框开始 -->
                <div class="LPRtankuang" v-if="lslpr_xianshi">
                  <div class="lilvzz_z" style="height:800rpx;overflow-y:auto">
                    <h3>LPR（贷款市场报价利率）</h3>
                    <p>自2019年10月8日起，新发放的商业住房贷款的贷款利率由<span>“贷款基准利率（4.9%）”转换为“贷款市场报价利率（LPR）”</span>。在LPR的基础上增加基点来确定最终的商贷利率；LPR每月20日（遇节假日顺延）报价一次，可在中国人民银行网站查询。</p>
                    <p><span>最近一年LPR值</span></p>
                    <p>（贷款年限在1-5年期间，由银行自主选择采用一年期or五年期LPR）</p>
                    <div class="llbiaoge">
                      <ul>
                        <li>发布时间</li>
                        <li>一年期</li>
                        <li>五年期</li>
                      </ul>
                      <ul>
                        <li>7/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>6/22/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>5/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>4/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>3/20/2020</li>
                        <li>4.05%</li>
                        <li>4.75%</li>
                      </ul>
                      <ul>
                        <li>2/20/2020</li>
                        <li>4.05%</li>
                        <li>4.75%</li>
                      </ul>
                      <ul>
                        <li>1/20/2020</li>
                        <li>4.15%</li>
                        <li>4.8%</li>
                      </ul>
                      <ul>
                        <li>12/20/2019</li>
                        <li>4.15%/li>
                        <li>4.8%</li>
                      </ul>

                    </div>
                    <button class="know" @click="zd_js">知道了</button>
                  </div>
                </div>
                <!-- 历史LPR中间弹框结束-->
              </div>
              <!--商贷利率 -->
              <div class="shangdaililv">
                <div class="sdjine">
                  <h1>商贷利率<span class="sdlltu" @click="lldianji"><image :src="img2" /></span></h1>
                  <div class="shuru1">
                    <input :value="callText"  @click="business4Picker" placeholder="4.65%（LPR+0基点）" />                  
                    <mpvue-picker ref="business4Pickersd" :pickerValueArray="shangdai4ValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="oncallConfirm"></mpvue-picker>
                    <span><image :src="img1" /></span></div>
                </div>  
                <!-- 中间利率弹框开始 -->
                <div class="zhedc" v-if="zgc_xianshi">
                <div class="llxianshi">
                  <h2>商贷利率</h2>
                  <p>自2019年10月8日起，商业贷款利率的计算方式由“贷款基准利率（4.9%）*上浮或下浮比例”改为“LPR+基点”</p>
                  <p>基点，即浮动值，10基点=0.1%</p>
                  <p><span>提醒：</span>如果是存量贷款的固定利率转LPR，则基点=（老利率-4.8%）x10000</p>
                  <p><span>举例</span></p>
                  <p>当前贷款利率4.9%，下浮10%，则：</p>
                  <p>老利率为4.9%*（1-10%）= 4.41%</p>
                  <p>基点=（4.41%-4.8%）*10000= -39</p>
                  <button class="know" @click="lilvdj">知道了</button>
                </div>
                </div>
                <!-- 中间利率弹框结束 -->
              </div>
              <!--开始计算 -->
              <button class="kaishi">开始计算</button>
            </div>
            <!-- 按房屋总价结束 -->
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
              <radio class="radio1" :value="2"  @click="anniua(2)" color="#348cf0">按房屋总价</radio>
            </radio-group>
          </div>
          <!-- 计算方式切换结束 -->

          <!-- 计算方式内容开始 -->
          <div class="anniunr">
            <!-- 按贷款总额开始 -->
            <div class="daikuan" v-if="antaba===1">
              <!--贷款总额 -->
              <div class="sdjine">
                <h1>贷款总额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--公积金金额 -->
              <div class="sdjine">
                <h1>公积金金额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--公积金年限-->
              <div class="sdjine">
                <h1>公积金年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundyearsPicker" placeholder="25年" />                  
                  <mpvue-picker ref="fundyearsnxPicker" :pickerValueArray="fundyearsValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--公积金利率-->
              <div class="sdjine">
                <h1>公积金利率</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundgjjPicker" placeholder="最新基准利率（3.25%）" />                  
                  <mpvue-picker ref="fundPicker" :pickerValueArray="fundValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--商贷金额 -->
              <div class="sdjine">
                <h1>商贷金额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--商贷年限-->
              <div class="sdjine">
                <h1>商贷年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="show3Picker" placeholder="30年" />                  
                  <mpvue-picker ref="mpvue3Picker" :pickerValueArray="sex3ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--利率方式 -->
              <div class="sdjine">
                <h1>利率方式</h1>
                <div class="shuru1">
                  <input :value="callText"  @click="rateswayPicker" placeholder="按LPR" />                  
                  <mpvue-picker ref="rateswayfsPicker" :pickerValueArray="rateswayValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="oncallConfirm" ></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--历史LPR -->
              <div class="lskuang">
                <div class="lishilpr">
                  <div class="sz_ls">07.20</div>
                  <div class="mingzi">LPR：一年期3.85%，五年期4.65%</div>
                  <div class="djlishi" @click="djlishi_lpr">历史LPR</div>
                </div>
                <!-- 历史LPR中间弹框开始 -->
                <div class="LPRtankuang" v-if="lslpr_xianshi">
                  <div class="lilvzz_z" style="height:800rpx;overflow-y:auto">
                    <h3>LPR（贷款市场报价利率）</h3>
                    <p>自2019年10月8日起，新发放的商业住房贷款的贷款利率由<span>“贷款基准利率（4.9%）”转换为“贷款市场报价利率（LPR）”</span>。在LPR的基础上增加基点来确定最终的商贷利率；LPR每月20日（遇节假日顺延）报价一次，可在中国人民银行网站查询。</p>
                    <p><span>最近一年LPR值</span></p>
                    <p>（贷款年限在1-5年期间，由银行自主选择采用一年期or五年期LPR）</p>
                    <div class="llbiaoge">
                      <ul>
                        <li>发布时间</li>
                        <li>一年期</li>
                        <li>五年期</li>
                      </ul>
                      <ul>
                        <li>7/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>6/22/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>5/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>4/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>3/20/2020</li>
                        <li>4.05%</li>
                        <li>4.75%</li>
                      </ul>
                      <ul>
                        <li>2/20/2020</li>
                        <li>4.05%</li>
                        <li>4.75%</li>
                      </ul>
                      <ul>
                        <li>1/20/2020</li>
                        <li>4.15%</li>
                        <li>4.8%</li>
                      </ul>
                      <ul>
                        <li>12/20/2019</li>
                        <li>4.15%/li>
                        <li>4.8%</li>
                      </ul>

                    </div>
                    <button class="know" @click="zd_js">知道了</button>
                  </div>
                </div>
                <!-- 历史LPR中间弹框结束-->
              </div>
              <!--商贷利率 -->
              <div class="shangdaililv">
                <div class="sdjine">
                  <h1>商贷利率<span class="sdlltu" @click="lldianji"><image :src="img2" /></span></h1>
                  <div class="shuru1">
                    <input :value="callText"  @click="business2Picker" placeholder="4.65%（LPR+0基点）" />                  
                    <mpvue-picker ref="business2Pickersd" :pickerValueArray="shangdai2ValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="oncallConfirm"></mpvue-picker>
                    <span><image :src="img1" /></span></div>
                </div>  
                <!-- 中间利率弹框开始 -->
                <div class="zhedc" v-if="zgc_xianshi">
                <div class="llxianshi">
                  <h2>商贷利率</h2>
                  <p>自2019年10月8日起，商业贷款利率的计算方式由“贷款基准利率（4.9%）*上浮或下浮比例”改为“LPR+基点”</p>
                  <p>基点，即浮动值，10基点=0.1%</p>
                  <p><span>提醒：</span>如果是存量贷款的固定利率转LPR，则基点=（老利率-4.8%）x10000</p>
                  <p><span>举例</span></p>
                  <p>当前贷款利率4.9%，下浮10%，则：</p>
                  <p>老利率为4.9%*（1-10%）= 4.41%</p>
                  <p>基点=（4.41%-4.8%）*10000= -39</p>
                  <button class="know" @click="lilvdj">知道了</button>
                </div>
                </div>
                <!-- 中间利率弹框结束 -->
              </div>
              <!--开始计算 -->
              <button class="kaishi">开始计算</button>

            </div>
            <!-- 按贷款总额结束 -->

            <!-- 按房屋总价开始 -->
            <div class="fangwu" v-else>
              <!--房屋总价 -->
              <div class="sdjine">
                <h1>房屋总价</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--贷款比例 -->
              <div class="sdjine">
                <h1>贷款比例</h1>
                <div class="shuru"><input value="6.5" /><span>成</span></div>
              </div>
              <!--贷款总额 -->
              <div class="sdjine">
                <h1>贷款总额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--公积金金额 -->
              <div class="sdjine">
                <h1>公积金金额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--公积金年限-->
              <div class="sdjine">
                <h1>公积金年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundyears2Picker" placeholder="25年" />                  
                  <mpvue-picker ref="fundyearsnx2Picker" :pickerValueArray="fundyears2ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--公积金利率-->
              <div class="sdjine">
                <h1>公积金利率</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundgjj2Picker" placeholder="最新基准利率（3.25%）" />                  
                  <mpvue-picker ref="fund2Picker" :pickerValueArray="fund2ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--贷款金额 -->
              <div class="sdjine">
                <h1>贷款金额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--商贷年限-->
              <div class="sdjine">
                <h1>商贷年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="show4Picker" placeholder="30年" />                  
                  <mpvue-picker ref="mpvue4Picker" :pickerValueArray="sex4ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--利率方式 -->
              <div class="sdjine">
                <h1>利率方式</h1>
                <div class="shuru1">
                  <input :value="callText"  @click="ratesway4Picker" placeholder="按LPR" />                  
                  <mpvue-picker ref="rateswayfs4Picker" :pickerValueArray="ratesway4ValueArray" :pickerValueDefault="pickerValueDefault" @onConfirm="oncallConfirm" ></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--历史LPR -->
              <div class="lskuang">
                <div class="lishilpr">
                  <div class="sz_ls">07.20</div>
                  <div class="mingzi">LPR：一年期3.85%，五年期4.65%</div>
                  <div class="djlishi" @click="djlishi_lpr">历史LPR</div>
                </div>
                <!-- 历史LPR中间弹框开始 -->
                <div class="LPRtankuang" v-if="lslpr_xianshi">
                  <div class="lilvzz_z" style="height:800rpx;overflow-y:auto">
                    <h3>LPR（贷款市场报价利率）</h3>
                    <p>自2019年10月8日起，新发放的商业住房贷款的贷款利率由<span>“贷款基准利率（4.9%）”转换为“贷款市场报价利率（LPR）”</span>。在LPR的基础上增加基点来确定最终的商贷利率；LPR每月20日（遇节假日顺延）报价一次，可在中国人民银行网站查询。</p>
                    <p><span>最近一年LPR值</span></p>
                    <p>（贷款年限在1-5年期间，由银行自主选择采用一年期or五年期LPR）</p>
                    <div class="llbiaoge">
                      <ul>
                        <li>发布时间</li>
                        <li>一年期</li>
                        <li>五年期</li>
                      </ul>
                      <ul>
                        <li>7/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>6/22/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>5/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>4/20/2020</li>
                        <li>3.85%</li>
                        <li>4.65%</li>
                      </ul>
                      <ul>
                        <li>3/20/2020</li>
                        <li>4.05%</li>
                        <li>4.75%</li>
                      </ul>
                      <ul>
                        <li>2/20/2020</li>
                        <li>4.05%</li>
                        <li>4.75%</li>
                      </ul>
                      <ul>
                        <li>1/20/2020</li>
                        <li>4.15%</li>
                        <li>4.8%</li>
                      </ul>
                      <ul>
                        <li>12/20/2019</li>
                        <li>4.15%/li>
                        <li>4.8%</li>
                      </ul>

                    </div>
                    <button class="know" @click="zd_js">知道了</button>
                  </div>
                </div>
                <!-- 历史LPR中间弹框结束-->
              </div>
              <!--商贷利率 -->
              <div class="shangdaililv">
                <div class="sdjine">
                  <h1>商贷利率<span class="sdlltu" @click="lldianji"><image :src="img2" /></span></h1>
                  <div class="shuru1">
                    <input :value="callText"  @click="lilvPicker" placeholder="4.65%（LPR+0基点）" />                  
                    <mpvue-picker ref="mpvue20Picker" :pickerValueDefault="pickerValueDefault" @onConfirm="oncallConfirm" :pickerValueArray="shangdaiValueArray"></mpvue-picker>
                    <span><image :src="img1" /></span></div>
                </div>  
                <!-- 中间利率弹框开始 -->
                <div class="zhedc" v-if="zgc_xianshi">
                <div class="llxianshi">
                  <h2>商贷利率</h2>
                  <p>自2019年10月8日起，商业贷款利率的计算方式由“贷款基准利率（4.9%）*上浮或下浮比例”改为“LPR+基点”</p>
                  <p>基点，即浮动值，10基点=0.1%</p>
                  <p><span>提醒：</span>如果是存量贷款的固定利率转LPR，则基点=（老利率-4.8%）x10000</p>
                  <p><span>举例</span></p>
                  <p>当前贷款利率4.9%，下浮10%，则：</p>
                  <p>老利率为4.9%*（1-10%）= 4.41%</p>
                  <p>基点=（4.41%-4.8%）*10000= -39</p>
                  <button class="know" @click="lilvdj">知道了</button>
                </div>
                </div>
                <!-- 中间利率弹框结束 -->
              </div>
              <!--开始计算 -->
              <button class="kaishi">开始计算</button>
            </div>
            <!-- 按房屋总价结束 -->
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
              <radio class="radio1" :value="2"  @click="anniub(2)" color="#348cf0">按房屋总价</radio>
            </radio-group>
          </div>
          <!-- 计算方式切换结束 -->

          <!-- 计算方式内容开始 -->
          <div class="anniunr">
            <!-- 按贷款总额开始 -->
            <div class="daikuan" v-if="antabb===1">
              <!--公积金金额 -->
              <div class="sdjine">
                <h1>公积金金额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--公积金年限-->
              <div class="sdjine">
                <h1>公积金年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundyears3Picker" placeholder="25年" />                  
                  <mpvue-picker ref="fundyearsnx3Picker" :pickerValueArray="fundyears3ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--公积金利率-->
              <div class="sdjine">
                <h1>公积金利率</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundgjj3Picker" placeholder="最新基准利率（3.25%）" />                  
                  <mpvue-picker ref="fund3Picker" :pickerValueArray="fund3ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--开始计算 -->
              <button class="kaishi">开始计算</button>

            </div>
            <!-- 按贷款总额结束 -->

            <!-- 按房屋总价开始 -->
            <div class="fangwu" v-else>
              <!--房屋总价 -->
              <div class="sdjine">
                <h1>房屋总价</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--贷款比例 -->
              <div class="sdjine">
                <h1>贷款比例</h1>
                <div class="shuru"><input value="6.5" /><span>成</span></div>
              </div>
              <!--公积金金额 -->
              <div class="sdjine">
                <h1>公积金金额</h1>
                <div class="shuru"><input value="0" /><span>万</span></div>
              </div>
              <!--公积金年限-->
              <div class="sdjine">
                <h1>公积金年限</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundyears4Picker" placeholder="25年" />                  
                  <mpvue-picker ref="fundyearsnx4Picker" :pickerValueArray="fundyears4ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--公积金利率-->
              <div class="sdjine">
                <h1>公积金利率</h1>
                <div class="shuru1">
                  <input :value="sexText" @click="fundgjj4Picker" placeholder="最新基准利率（3.25%）" />                  
                  <mpvue-picker ref="fund4Picker" :pickerValueArray="fund4ValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
                  <span><image :src="img1" /></span></div>
              </div>
              <!--开始计算 -->
              <button class="kaishi">开始计算</button>
            </div>
            <!-- 按房屋总价结束 -->
          </div>
          <!-- 计算方式内容结束 -->
        </div>
        <!-- 公积金贷款结束 -->
      </div>



    </div>

  
 

  
  </div>
</template>

<script>
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



  export default {
  components: {
    mpvuePicker,// 商业贷款——按贷款总额——贷款年限
    mpvue20Picker,// 商业贷款——按贷款总额——利率方式
    businessPickersd,// 商业贷款——按贷款总额——商贷利率

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
        img1: "/static/images/jt1.jpg",
        img2: "/static/images/wen.png",
        // 商业贷款——按贷款总额——贷款年限
        sexValueArray:[{label:'20年',value:0},{label:'20年',value:0},{label:'25年',value:0},{label:'30年',value:1}],
        pickerValueDefault: [1],
        // 商业贷款——按贷款总额——利率方式
        sourceValueArray:[{label:'按旧版基准利率',value:0},{label:'按LPR',value:0}],
        // 商业贷款——按贷款总额——商贷利率
        shangdaiValueArray:[{label:'4.65%（LPR+0基点）',value:0},{label:'5.2%（LPR+55基点）',value:0},{label:'5.7%（LPR+105基点）',value:0}],

        // 商业贷款——按房屋总价——贷款年限
        sex2ValueArray:[{label:'20年',value:0},{label:'20年',value:0},{label:'25年',value:0},{label:'30年',value:1}],
        // 商业贷款——按房屋总价——利率方式
        source2ValueArray:[{label:'按旧版基准利率',value:0},{label:'按LPR',value:0}],
        // 商业贷款——按房屋总价——商贷利率
        shangdai2ValueArray:[{label:'4.65%（LPR+0基点）',value:0},{label:'5.2%（LPR+55基点）',value:0},{label:'5.7%（LPR+105基点）',value:0}],
        
        // 组合贷款——按贷款总额——公积金年限
        fundyearsValueArray:[{label:'25年',value:0},{label:'26年',value:0},{label:'27年',value:0},{label:'28年',value:0},{label:'29年',value:0}],
        // 组合贷款——按贷款总额——公积金利率
        fundValueArray:[{label:'最新基准利率（3.25%）',value:0},{label:'最新基准利率上浮10%（3.575%）',value:0}],
        // 商业贷款——按贷款总额——贷款年限
        sex3ValueArray:[{label:'20年',value:0},{label:'20年',value:0},{label:'25年',value:0},{label:'30年',value:1}],
        // 商业贷款——按贷款总额——利率方式
        rateswayValueArray:[{label:'按旧版基准利率',value:0},{label:'按LPR',value:0}],
        // 商业贷款——按贷款总额——商贷利率
        shangdai3ValueArray:[{label:'4.65%（LPR+0基点）',value:0},{label:'5.2%（LPR+55基点）',value:0},{label:'5.7%（LPR+105基点）',value:0}],


        // 组合贷款——按房屋总价——公积金年限
        fundyears2ValueArray:[{label:'25年',value:0},{label:'26年',value:0},{label:'27年',value:0},{label:'28年',value:0},{label:'29年',value:0}],
        // 组合贷款——按房屋总价——公积金利率
        fund2ValueArray:[{label:'最新基准利率（3.25%）',value:0},{label:'最新基准利率上浮10%（3.575%）',value:0}],
        // 商业贷款——按房屋总价——贷款年限
        sex4ValueArray:[{label:'20年',value:0},{label:'20年',value:0},{label:'25年',value:0},{label:'30年',value:1}],
        // 商业贷款——按房屋总价——利率方式
        ratesway4ValueArray:[{label:'按旧版基准利率',value:0},{label:'按LPR',value:0}],
        // 商业贷款——按房屋总价——商贷利率
        shangdai4ValueArray:[{label:'4.65%（LPR+0基点）',value:0},{label:'5.2%（LPR+55基点）',value:0},{label:'5.7%（LPR+105基点）',value:0}],


        // 公积金贷款——按贷款总额——公积金年限
        fundyears3ValueArray:[{label:'25年',value:0},{label:'26年',value:0},{label:'27年',value:0},{label:'28年',value:0},{label:'29年',value:0}],
        // 公积金贷款——按贷款总额——公积金利率
        fund3ValueArray:[{label:'最新基准利率（3.25%）',value:0},{label:'最新基准利率上浮10%（3.575%）',value:0}],

        // 公积金贷款——按房屋总价——公积金年限
        fundyears4ValueArray:[{label:'25年',value:0},{label:'26年',value:0},{label:'27年',value:0},{label:'28年',value:0},{label:'29年',value:0}],
        // 公积金贷款——按房屋总价——公积金利率
        fund4ValueArray:[{label:'最新基准利率（3.25%）',value:0},{label:'最新基准利率上浮10%（3.575%）',value:0}],


        
        zgc_xianshi:false,
        lslpr_xianshi:false

 

 
      }
    },
    methods: {
      changTab(index) {
        this.tab = index;
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

      // 商业贷款——按贷款总额——商贷年限
      showPicker() {
      this.$refs.mpvuePicker.show();
      },
      // 商业贷款——按贷款总额——利率方式
      lilvPicker() {
      this.$refs.mpvue20Picker.show();
      },   
      // 商业贷款——按贷款总额——商贷利率
      businessPicker(){
      this.$refs.businessPickersd.show()
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
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}


/* 头部切换 */
.jisuanqi{ width: 90%; margin-left: 5%; margin-right: 5%; }
.lanmu{ border-bottom: 1px solid #e6e6e6; overflow: hidden; width: 100%; display: flex; flex-direction: row; margin-top:3%;  }
.lanmu .default{width:33.3%; font-size:35rpx; font-weight: bold; }
.title { flex: 1; text-align: center;}
.selected { border-bottom:2px  rgb(15, 142, 228) solid; color: rgb(15, 142, 228); width:10px !important; border-radius:2px; padding-bottom:4%;}

/* 商业贷款 */
.syloans .jisuan{ display: flex; flex-direction: row; margin-top:5%; padding-bottom:5%; border-bottom: 1px solid #e7e7e7; width: 94%; margin-left: 3%; margin-right: 3%; }
.jisuan .biaots{ width:28.3%; margin-left: 1%; font-weight: bold;}
.radio-group{ width:70.6%;}
.radio-group .radio{transform: scale(.8); }
.radio-group .label{float: left; width:48%; font-size:31rpx; margin-right: 2%;}
.radio-group .label1{ float: right; width:48%; margin-left:2%; font-size: 31rpx; }



.sdjine{display: flex; flex-direction: row; margin-top:5%; padding-bottom:5%; border-bottom: 1px solid #e7e7e7; width: 94%; margin-left: 3%; margin-right: 3%; }
.sdjine h1{width: 28.3%; margin-left: 1%; font-weight: bold;}
.sdjine .shuru{ width:70.6%; text-align: left;}
.sdjine .shuru input{ float: left; width: 80%;}
.sdjine .shuru span{ float: right;  width:10%;}
.sdjine .shuru span image{ width: 9px; height: 15px;}

.sdjine .shuru1{ width:66.6%; }
.sdjine h1 span.sdlltu image{ width:15px; height:15px; margin-left: 5px; position: relative; top:3px;}

.sdjine .shuru1 p{ float: left; width:78%;}
.sdjine .shuru1 span{ float: right;  width:10%;}
.sdjine .shuru1 span image{ width: 9px; height: 15px;}
.sdjine .shuru1 input{ float: left; width:78%;}
.kaishi{ margin-top:10%; margin-left: 3%; margin-right: 3%; width: 94%; background: rgb(52, 140, 240); color: #fff;}

/* 中间利率弹框 */
.zhedc{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.llxianshi{ width:80%; margin-left:5%; margin-right:5%; background: #fff; border-radius:5px; padding: 5%; position: relative; bottom:20%;}
.llxianshi h2{ font-size: 32rpx; font-weight: bold; margin-bottom: 5%; margin-top: 5%;}
.llxianshi p{ font-size: 28rpx; margin-bottom:2%;}
.llxianshi p span{ font-weight: bold;}
.know{ width: 100%; height:80rpx; line-height: 80rpx; color:#3072f6; border: 1px #3072f6 solid; font-size: 32rpx; margin-top: 7%; margin-bottom: 5%; }


/* 历史LPR */
.lskuang{ width: 100%; height:80rpx; line-height: 80rpx; background: #d7e8f2; border-radius: 5px;}
.lskuang .lishilpr{ margin-left: 3%; margin-right: 3%; display: flex; flex-direction: row; font-size: 26rpx;}
.sz_ls{ padding:1rpx 5rpx; background: #3072f6; border-radius: 5px; height: 30rpx; line-height: 30rpx; margin-top:4%; font-size: 24rpx; color: #fff;}
.mingzi{ margin-left: 3%; color: rgb(156, 156, 156); font-size: 24rpx;}
.djlishi{ color: #3072f6; font-size: 26rpx; font-weight: bold; margin-left:10%;}
/* 历史LPR中间弹框开始 */
.LPRtankuang{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#333333d1;display:flex;align-items:flex-end;align-content:center; z-index: 999999;}
.lilvzz_z{ width:80%; margin-left:5%; margin-right:5%; background: #fff; border-radius:5px; padding: 5%; position: relative; bottom:15%; height: 500px;}
.lilvzz_z h3{ font-size:34rpx; font-weight: bold;}
.lilvzz_z p{ line-height:45rpx; font-size: 28rpx; margin-bottom:1%;}
.lilvzz_z p span{ font-weight: bold;}
.llbiaoge{ width: 100%; border: 1px rgb(209, 209, 209) solid; border-right:none}
.llbiaoge ul{ display: flex; flex-direction: row; border-bottom: 1px rgb(209, 209, 209) solid;}
.llbiaoge ul li{ width: 33.3%; font-size:28rpx; text-align: center; border-right: 1px rgb(209, 209, 209) solid;}

/* 组合贷款 */
.portfolio .jisuan{ display: flex; flex-direction: row; margin-top:5%; padding-bottom:5%; border-bottom: 1px solid #e7e7e7; width: 94%; margin-left: 3%; margin-right: 3%; }

/* 公积金贷款 */
.gongjijinloan .jisuan{ display: flex; flex-direction: row; margin-top:5%; padding-bottom:5%; border-bottom: 1px solid #e7e7e7; width: 94%; margin-left: 3%; margin-right: 3%; }




</style>
