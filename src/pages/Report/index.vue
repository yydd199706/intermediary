<template>
  <div class="indexstyle">
    <!-- 带看报备开始  -->
    <div class="baobei">
      <div class="biaoti_1">带看报备</div>
      <!-- <div class="baobei_kuang"> -->
      <!-- 项目名称 -->
      <!-- <div class="project__input">
          <div class="xmmc">项目名称</div>
          <input id="name" type="text" placeholder="项目名称" placeholder-style="color: #aaa" disabled="disabled" />
      </div>-->
      <!-- 经纪人姓名 -->
      <!-- <div class="project__input">
          <div class="xmmc">经纪人姓名</div>
          <input id="name" type="text" placeholder="经纪人姓名" placeholder-style="color: #aaa" disabled="disabled" />
      </div>-->
      <!-- 经纪人电话 -->
      <!-- <div class="project__input">
          <div class="xmmc">经纪人电话</div>
          <input id="name" type="text" placeholder="经纪人电话" placeholder-style="color: #aaa" disabled="disabled" />
      </div>-->
      <!-- 经纪人所属公司 -->
      <!-- <div class="project__input">
          <div class="xmmc">经纪人所属公司</div>
          <input id="name" type="text" placeholder="经纪人所属公司" placeholder-style="color: #aaa" disabled="disabled" />
      </div>-->
      <!-- 经纪人所属门店 -->
      <!-- <div class="project__input">
          <div class="xmmc">经纪人所属门店</div>
          <input id="name" type="text" placeholder="经纪人所属门店" placeholder-style="color: #aaa" disabled="disabled" />
      </div>-->
      <!-- 带看人数 -->
      <!-- <div class="project__input">
          <div class="xmmc">带看人数</div>
          <input id="name" type="text" placeholder="请输入备用姓名" placeholder-style="color: #aaa" />
          <span class="mustBuil">*</span>
      </div>-->
      <!-- 带看时间 -->
      <!-- <div class="project__input">
          <div class="xmmc">带看时间</div>
          <input id="name" type="text" placeholder="带看时间" placeholder-style="color: #aaa" />
        </div>
      </div>-->
      <!-- <div class="project__input">
          <div class="xmmc">带看项目</div>
          <div class="shuru1">
            <input :value="repaymentText"  @click="lilvPicker" placeholder="请选择" :disabled="true"/>                  
            <mpvue-picker ref="mpvue20Picker" :pickerValueDefault="pickerValueDefault" @onConfirm="onrepaymentConfirm"  :pickerValueArray="sourceValueArray" ></mpvue-picker>
          </div>
        </div> -->
        <div class="baobei_kuang1 pro">
          <div class="xmmc">带看项目</div>
          <div class="shuru1">
            <input :value="nameArr"  @click="lilvPicker" placeholder="请选择" :disabled="true"/>     
          </div>
        </div>
      <div class="baobei_kuang1" v-for="(item, index) in bbList" :key="index">
        
        <!-- 客户姓名 -->
        <div class="project__input">
          <div class="xmmc">客户姓名</div>
          <input
            id="name"
            type="text" 
            data-id="index"
            placeholder="请输入真实姓名"
            :value="item.cname"
            @input="nameVal($event,index)"
            placeholder-style="color: #aaa"
          />
        </div>
        <!-- 客户电话 -->
        <div class="project__input">
          <div class="xmmc">手机号码</div>
          <input
            id="telphone"
            type="text"
            data-id="index"
            placeholder="请输入手机号码"
            :value="item.telphone"
            @input="telVal($event,index)"
            placeholder-style="color: #aaa"
          />
        </div>

        <!-- 带看时间 -->
        <div class="project__input">
          <div class="xmmc">带看时间</div>
          <picker
            mode="date"
            :value="item.lookDate"
            :start="pickerStart"
            end="endDate"
            @change="bindDateChangeStart($event,index)"
            class="lookClass"
          >
            <div id="birthday" :style="color">{{ item.lookDate }}</div>
          </picker>
        </div>

        <!-- 备注 -->
        <div class="project__input borderNone">
          <div class="xmmc">备注</div>
          <textarea data-id="index" :value="item.remarks" @input="remarksVal($event,index)"></textarea>
        </div>
      </div>

      <!-- 添加更多信息 -->
      <div class="tianjia">
        <button @click="dj_tj(index)">
          <span>添加更多信息</span>
        </button>
        <button class="Submit" @click="submitClick(index)">
          <span>点击提交</span>
        </button>
      </div>
    </div>
    <!-- 带看报备结束 -->

    <van-toast id="van-toast" />
  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
import Toast from "@/../static/vant/toast/toast";
export default {
  components: {
    Toast
  },
  data() {
    return {
      pickerStart: "",
      color: "color:#aaa",
      bbList: [
        {
          mid: 0,
          state: 0,
          cname: "",
          telphone: "",
          lookDate: "请选择",
          remarks: ""
        }
      ],
      
      houserid: "",
      mid: "",
      index: 0,
      nameArr:[],
      idArr:[]
    };
  },
  onLoad(option) {
    const that = this;
      that.nameArr=option.nameArr;
      that.idArr=option.idArr;
      that.bbList=[
          {
            mid: 0,
            state: 0,
            cname: "",
            telphone: "",
            lookDate: "请选择",
            remarks: ""
          }
        ];
  
      that.domain = app.globalData.domain;
      that.houserid = option.pid;
      that.mid = option.mid;
      that.bbList[0].mid=that.mid;
      that.bbList[0].cname="";
      that.bbList[0].telphone="";
      that.bbList[0].lookDate="请选择";
      that.bbList[0].remarks="";
  },
  methods: {
    dj_tj: function(index) {
      const that = this;
      var reg = /(1[3-9]\d{9}$)/;
      //姓名是否为空
      if (that.bbList[index].cname == "") {
        Toast("姓名不能为空");
        return false;
      }
      //手机号码是否为空并且格式无误
      if (that.bbList[index].telphone == "") {
        Toast("电话不能为空");
        return false;
      } else if (!reg.test(that.bbList[index].telphone)) {
        Toast("请输入正确格式的手机号码!");
        return false;
      }
      //带看时间是否为空
      if (that.bbList[index].lookDate == "" || that.bbList[index].lookDate == "请选择") {
        Toast("看房时间不能为空");
        return false;
      }

      var newData = {
        mid: that.mid,
        state: 0,
        cname: "",
        telphone: "",
        lookDate: "请选择",
        remarks: ""
      };
      that.bbList.push(newData);//实质是添加lists数组内容，使for循环多一次
      that.index = that.bbList.length -1 ;
    },

    //获取姓名
    nameVal: function(e, index) {
      const that = this;
      that.bbList[index].cname = e.mp.detail.value;
    },
    // 获取电话
    telVal: function(e, index) {
      const that = this;
      that.bbList[index].telphone = e.mp.detail.value;
    },
    //获取带看时间
    bindDateChangeStart: function(e, index) {
      const that = this;
      that.color = "color:#333";
      that.bbList[index].lookDate = e.mp.detail.value;
    },
    //获取备注
    remarksVal: function(e, index) {
      const that = this;
      that.bbList[index].remarks = e.mp.detail.value;
    },
    //点击提交
    submitClick: function(index) {
      const that = this;
      var reg = /(1[3-9]\d{9}$)/;
      //姓名是否为空
      if (that.bbList[index].cname == "") {
        Toast("姓名不能为空");
        return false;
      }
      //手机号码是否为空并且格式无误
      if (that.bbList[index].telphone == "") {
        Toast("电话不能为空");
        return false;
      } else if (!reg.test(that.bbList[index].telphone)) {
        Toast("请输入正确格式的手机号码!");
        return false;
      }
      //带看时间是否为空
      if (that.bbList[index].lookDate == "" || that.bbList[index].lookDate == "请选择") {
        Toast("看房时间不能为空");
        return false;
      }
      
      // if()
      var idArr=that.idArr;
      var arr = idArr.length>0?idArr.split(","):idArr.split();
      wx.request({
        url:app.globalData.url + "Project/AddReportLook?sessionKey=" + app.globalData.sessionKey,
        method: "POST",
        data: {
          bfrecord:that.bbList,
          pids:arr
        },
        header: { "Content-Type": "application/json" },
        success(res) {
          console.log("报备",res.data.Code)

          if(res.data.Code == 0){
            wx.showToast({
            icon:'success',
            title:'报备成功！'
            })
            setTimeout(item => {
            wx.navigateBack({
              delta: 1 //返回上一级页面
            })
            },3000)
          }else{
            wx.showToast({
            icon:'none',
            title:'报备失败'
            })
          }

          // Toast("预约成功");
          // wx.navigateBack({ delta: 1 }) //返回上一级页面
        }
      });
    }
  }
};
</script>



<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.hsxian {
  width: 100%;
  height: 10px;
  background: #f8f8fa;
}
.indexstyle {
  width: 100%;
  margin: 0 auto;
  background: #0a8de4;
}

/* 带看报备开始 */
/* .baobei{ width:80%; margin-left: 5%; margin-right: 5%; background: #fff; padding: 5%; border-radius: 20rpx;} */
.baobei {
  width: 100%;
  height: 400rpx;
  position: absolute;
  /* left: -20%; */
  top: 0;
  z-index: -1;
  content: "";
  /* border-radius: 0 0 50% 50%; */
  background: linear-gradient(#239bea, #0a8de4);
}
.baobei_kuang {
  width:80%;
  margin-left:5%;
  margin-right:5%;
  padding: 4%;
  background: #fff;
  border-radius: 30rpx;
  margin-top: 4%;
  padding-bottom: 5%; /* border-bottom: 10rpx rgb(233, 233, 233) solid; border-left:4rpx rgb(233, 233, 233) solid; border-right:4rpx rgb(233, 233, 233) solid;*/
  box-shadow: 1px 1px 10px rgb(211, 211, 211);
}
.baobei_kuang1 {
  /* width:80%; */
  overflow: hidden;
  margin-left:5%;
  margin-right:5%;
  padding: 4%;
  background: #fff;
  border-radius: 30rpx;
  margin-top: 4%; 
  padding-bottom: 5%;
  box-shadow: 1px 1px 10px rgb(211, 211, 211);
}
.biaoti_1 {
  font-size: 38rpx;
  color: #fff;
  text-align: center;
  font-weight: bold;
  margin-top: 5%;
}

.project__input {
  margin-top: 30rpx;
  height: 60rpx;
  padding-bottom: 10rpx;
  border-bottom: 1px #f5f5f5 solid;
}
.project__input .xmmc {
  float: left;
  font-size: 30rpx;
  width: 140rpx;
  margin-right: 25rpx;
  text-align: justify;
  text-justify: distribute-all-lines;
}
.xmmc{float: left;}
.xmmc:after {
  width: 100%;
  height: 0;
  margin: 0;
  display: inline-block;
  overflow: hidden;
  content: "";
}
.project__input input {
  float: left;
  font-size: 30rpx; width: 68%;
}
.project__input span {
  display: inline-block;
  height: 0;
  color: rgb(255, 0, 0);
  font-size: 40rpx;
  font-weight: bold;
}
.project__input textarea {
  float: left;
  font-size: 30rpx;
  width: 68%;
  border: 2rpx solid #ececec;
  height: 185rpx;
}
.borderNone {
  border-bottom: none !important;
  height: 185rpx !important;
}

.mustBuil {
  float: right;
}
.pro{padding: 0 30rpx !important;box-sizing: border-box;height: 80rpx;}
.pro>div{height: 100%;line-height: 80rpx;}
.pro>div:first-child{margin-right: 25rpx;font-size: 30rpx;}
.pro>div input{height: 100%;line-height: 80rpx;}
.shuru1{float: left;width: 76%;}
.shuru1>input{width: 100%;font-size: 30rpx;}
/* 添加更多信息 */
.tianjia {
  width:90%;
  margin-left:5%;
  margin-right:5%;
  margin-top: 40rpx; overflow: hidden; margin-bottom: 50rpx;
}
.tianjia button {
  float: left;
  width: 46%;
  margin-left: 2%;
  margin-right: 2%;
  background: #0f90e5;
}
.tianjia button image {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
  position: relative;
  top: 7rpx;
}
.tianjia button span {
  color: #fff;
  font-size: 33rpx;
}
.tianjia button.Submit {
  background: #3dc28e;
}

.lookClass {
  font-size: 30rpx;
}
</style>
