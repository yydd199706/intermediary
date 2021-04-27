<template>
  <div class="indexstyle">

    <div class="zxwt">
       <div class="proName">姓名</div>
       <input type="text" :value="projectName" placeholder="请输入您的姓名" placeholder-style="color: #aaa; font-size: 30rpx;">
    </div>

    <div class="zxwt">
       <div class="proName">电话</div>
       <input type="text" :value="projectName" placeholder="请输入手机号" placeholder-style="color: #aaa; font-size: 30rpx;" disabled="disabled">
    </div>

    <div class="zxwt">
       <div class="proName">小区名称</div>
       <input type="text" :value="projectName" placeholder="滨江尚城" placeholder-style="color: #aaa; font-size: 30rpx;" >
    </div>

    <div class="zxwt">
       <div class="proName">房源地址</div>
       <input type="text" :value="projectName" placeholder="房源地址" placeholder-style="color: #aaa; font-size: 30rpx;" disabled="disabled">
    </div>

    <div class="zxwt">
       <div class="proName">房源属性</div>
       <input type="text" :value="projectName" placeholder="房源属性" placeholder-style="color: #aaa; font-size: 30rpx;" disabled="disabled">
    </div>

    <div class="zxwt">
       <div class="proName">期望售价</div>
       <input type="text" :value="projectName" placeholder="期望售价" placeholder-style="color: #aaa; font-size: 30rpx;" disabled="disabled">
    </div>
 
    <div class="zxwt">
      <div class="proName">中介公司</div>
       <input :value="sexText" @click="showPicker" disabled="disabled" placeholder="请选择" placeholder-style="color: #aaa; font-size: 30rpx;" />
       <mpvue-picker ref="mpvuePicker" :pickerValueDefault='pickerValueDefault' @onConfirm="oncallCancel" :pickerValueArray="sexValueArray"></mpvue-picker>
    </div>

    <div class="zxwt">
      <div class="proName">中介门店</div>
       <input :value="sexText" @click="storesPicker" disabled="disabled" placeholder="请选择" placeholder-style="color: #aaa; font-size: 30rpx;" />
       <mpvue-picker ref="storesPicker" :pickerValueDefault='pickerValueDefault' @onConfirm="oncallCancel" :pickerValueArray="stores"></mpvue-picker>
    </div>






    <div class="wenzi">收不到短信？拨打<span>091510000000</span>联系客服MM电话委托</div>

    <div class="anwt">
      <button>立即委托</button>
    </div>
     


    






   
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
// import companyPicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";
// import storesPicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";
import mpvuePicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按贷款总额——贷款年限
import storesPicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";// 商业贷款——按贷款总额——贷款年限



export default {
  // components: {
  //   companyPicker,
  //   storesPicker,
  // },
  components: {
    mpvuePicker,// 商业贷款——按贷款总额——贷款年限
    storesPicker,
  },
  data () {
    return {
      // mode: 'selector',
      // company: [{label: '大堂地产',value: 1},{label: '大堂地产2',value: 2},{label: '大堂地产3',value: 3},{label: '大堂地产4',value: 4}],
      // stores:[{label: '住宿费',value: 1},{label: '活动费',value: 2},{label: '通讯费',value: 3},{label: '补助',value: 4}],
      // pickerValueDefault: [1],
      pickerValueDefault: [1],
      sexValueArray:[{label:'15年',value:0},{label:'20年',value:1},{label:'25年',value:2},{label:'30年',value:3}],
      stores:[{label: '住宿费',value: 1},{label: '活动费',value: 2},{label: '通讯费',value: 3},{label: '补助',value: 4}],


    }
  }, 


   methods: {
    // companyPicker() {
    //   this.$refs.companyPicker.show();
    // },
    // storesPicker() {
    //   this.$refs.storesPicker.show();
    // },
    // 商业贷款——按贷款总额——商贷年限
    showPicker() {
      this.$refs.mpvuePicker.show();
    },
    storesPicker() {
      this.$refs.storesPicker.show();
    },
    onConfirm(e) {
      console.log(e);
    },
    onChange(e) {
      console.log(e);
    },
    onCancel(e) {
      console.log(e);
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

.zxwt{ width: 90%; margin-left: 5%; margin-right: 5%; display: flex; flex-direction: row; border-bottom: 1rpx rgb(241, 241, 241) solid; height: 70rpx; margin-top: 31rpx;}
.proName{ float: left; width: 20%; margin-right: 25rpx; text-align: justify; text-justify: distribute-all-lines;  font-size:30rpx;}
.proName:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.zxwt input{ float: left;}
.wenzi{ color: rgb(90, 90, 90); margin-top: 10%; font-size:27rpx; text-align: center;}
.wenzi span{ color: #4bc0ca; font-weight: bold;}

.anwt{ margin-top:15%; width: 70%; margin-left: 15%; margin-right: 15%; height: 70rpx; line-height: 70rpx;}
.anwt button{ background: #4bc0ca;font-size: 30rpx; text-align: center; line-height: 90rpx; margin-left: 2%; margin-right: 2%;box-shadow:3px 3px 6px #b6f5fd; color: #fff;}

</style>
