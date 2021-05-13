<template>
  <div class="indexstyle">

    <div class="zxwt">
       <div class="proName">姓名</div>
       <input type="text" :value="entrustName" @input="nameVal($event)" placeholder="请输入您的姓名" placeholder-style="color: #aaa; font-size: 30rpx;">
    </div>

    <div class="zxwt">
       <div class="proName">电话</div>
       <input type="text" :value="entrustTel" @input="telVal($event)" placeholder="请输入手机号" placeholder-style="color: #aaa; font-size: 30rpx;" >
    </div>

    <div class="zxwt">
      <div class="proName">中介公司</div>
       <input :value="entrustCompany" @click="mpvuePicker" disabled="disabled" placeholder="请选择" placeholder-style="color: #aaa; font-size: 30rpx;" />
       <mpvue-picker ref="mpvuePicker" :pickerValueDefault='pickerValueDefault' @onConfirm="CompanyConfirm" @onClick="CompanyClick" :pickerValueArray="company"></mpvue-picker>
    </div>

    <div class="zxwt">
      <div class="proName">中介门店</div>
       <input :value="entrustStore" @click="storesPicker" disabled="disabled" placeholder="请选择" placeholder-style="color: #aaa; font-size: 30rpx;" />
       <mpvue-picker ref="storesPicker" :pickerValueDefault='pickerValueDefault' @onConfirm="StoresConfirm" @onClick="StoresClick" :pickerValueArray="stores"></mpvue-picker>
    </div>

    <div class="zxwt borderNone">
       <div class="proName">委托描述</div>
       <textarea :value="entrustText" @input="TextVal($event)"></textarea>
    </div>

 






    <div class="wenzi">收不到短信？拨打<span>400-6800-869</span>联系客服MM电话委托</div>

    <div class="anwt">
      <button @click="entrust()">立即委托</button>
    </div>
     

    <van-toast id="van-toast" />

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
import Toast from "@/../static/vant/toast/toast";
import mpvuePicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";
import storesPicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";


export default {

  components: {
    mpvuePicker,
    storesPicker,
    Toast
  },
  data () {
    return {
      pickerValueDefault: [0],
      company:[],
      stores:[],
      entrustName:"",
      entrustTel:"",
      entrustCompany:null,
      CompanyIndex:null,
      entrustText:"",
      entrustStore:"",
      StoreIndex:null,




    }
  }, 
  onLoad(option) {
    const that = this;
    common.initApp(function (userInfo) {
      that.domain=app.globalData.domain;
      that.entrustName="",
      that.entrustTel="",
      that.entrustCompany="",
      that.entrustStore="",
      that.entrustText="",

      wx.request({
        url: app.globalData.url +"Entrust/BandCompanyStore?sessionKey=" +app.globalData.sessionKey,
        success (res) {
          
          that.company = res.data.Context.CompanyStoreList;

          console.log("ddd",that.company)
        }
      })
    })

  },


  methods: {

    mpvuePicker() {
      const that = this;
      that.$refs.mpvuePicker.show();
    },
    storesPicker() {
      const that = this;
      that.$refs.storesPicker.show();
    },
 

    // 获取姓名
    nameVal:function(e){
      const that = this;
      if (e.mp.detail.value == null || e.mp.detail.value == "") {
        that.entrustName = "";
      } else {
        that.entrustName = e.mp.detail.value;
      }
    },
    // 获取电话
    telVal:function(e){
      const that = this;
      if (e.mp.detail.value == null || e.mp.detail.value == "") {
        that.entrustTel = "";
      } else {
        that.entrustTel = e.mp.detail.value;
      }
    },
    //获取中介公司
    CompanyClick(e){
      const that = this;
      that.CompanyConfirm(e);
    },
    CompanyConfirm(e){
      const that = this;
      that.entrustCompany  = e.label;
      that.entrustStore  = "";
      that.CompanyIndex = e.value[0];
      console.log("公司",e)
      for (var i = 0; i < that.company.length; i++) {
        if(that.CompanyIndex == that.company[i].value){
          that.stores=that.company[i].sub;
          break; 
        }
      }

    },
    //获取中介门店
    StoresClick(e){
      const that = this;
      that.StoresConfirm(e);
    },
    StoresConfirm(e){
      console.log("门店",e)
      const that = this;
      that.StoreIndex = e.value[0];
      that.entrustStore = e.label;
    },
    //获取委托描述
    TextVal(e){
      const that = this;
      that.entrustText = e.mp.detail.value;
    },

    // 立即委托
    entrust:function(){
      const that = this;
      var reg = /(1[3-9]\d{9}$)/;
      //判断姓名是否为空
      if(that.entrustName==""){
        Toast("姓名不能为空");
        return false;
      }
      //手机号码是否为空并且格式无误
      if (that.entrustTel == "") {
        Toast("电话不能为空");
        return false;
      } else if (!reg.test(that.entrustTel)) {
        Toast("请输入正确格式的手机号码!");
        return false;
      }
      //中介公司是否为空
      if (that.entrustCompany == ""||that.entrustCompany=="请选择") {
        Toast("中介公司不能为空");
        return false;
      }
      //中介门店是否为空
      if (that.entrustStore == ""||that.entrustStore=="请选择") {
        Toast("中介门店不能为空");
        return false;
      }

      wx.request({
        url: app.globalData.url +"Entrust/BandHouseEntrus?sessionKey="+app.globalData.sessionKey,
        method:"POST",
        data: {
          username:that.entrustName,
          telphone:that.entrustTel,
          company:that.CompanyIndex,
          store:that.StoreIndex,
          describe:that.entrustText,
        },
        header:{ 'Content-Type':'application/json' },
        success (res) {
          console.log("委托",res)
          if(res.data.Code==0){
            wx.showToast({
              icon:'success',
              title:'委托成功！'
            })
            setTimeout(item => {
              wx.navigateBack({
                delta: 1 //返回上一级页面
              })
            },2000)
          }else{
            wx.showToast({
              icon:'none',
              title:'委托失败！'
            })
          }
        }
      })


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

.zxwt{ width: 90%; margin-left: 5%; margin-right: 5%; display: flex; flex-direction: row; border-bottom: 2rpx #f5f5f5 solid; height: 70rpx; margin-top: 31rpx;}
.proName{ float: left; width: 20%; margin-right: 25rpx; text-align: justify; text-justify: distribute-all-lines;  font-size:30rpx;}
.proName:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.zxwt input{ float: left;}
.zxwt textarea{float: left; font-size: 30rpx; width:75%; border:2rpx #f5f5f5 solid; height:260rpx;}
.borderNone{border-bottom: none !important;height: 260rpx !important; }
.wenzi{ color: rgb(90, 90, 90); margin-top: 10%; font-size:27rpx; text-align: center;}
.wenzi span{ color: #4bc0ca; font-weight: bold;}

.anwt{ margin-top:15%; width: 70%; margin-left: 15%; margin-right: 15%; height: 70rpx; line-height: 70rpx;}
.anwt button{ background: #4bc0ca;font-size: 30rpx; text-align: center; line-height: 90rpx; margin-left: 2%; margin-right: 2%;box-shadow:3px 3px 6px #b6f5fd; color: #fff;}

</style>
