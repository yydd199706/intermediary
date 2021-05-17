<template>
  <div class="indexstyle">
    <div class="indexstyle_top">
      <span>切换项目</span>
      <div class="indexstyle_inp" @click="listShow">
        {{proName}}<span>{{proId}}</span>
        <div v-if="listHid" class="proList">
          <div @click="getAll">全部</div>
        <div v-for="(item ,index) in proList" :key="index" :data-name="item"
        @click="proClick(index,$event)">
          {{item}}
        </div>
        </div>
    </div>
    <!-- {{item.dict}} -->
    </div>
    <div class="line"></div>
    <div class="tabTop">
      <div @click="interestClick(index,$event)" v-for="(item,index) in tabArr" :key="index">
        <div :class="[indAction==index?'colors':'']">{{item.tab}}</div>
        <div class="lines" v-if="indAction==index?true:false"></div>
      </div>
    </div>
    <div class="indexstyle_bot">
      <div class="indexstyle_bot_top">
        <div>报备明细123</div>
        <div>带看时间</div>
      </div>
      <div class="indexstyle_bot_list" v-for="(item ,index) in n_bfrList" :key="index">
        <div>
          <div>{{item.cname}}</div>
          <div>{{item.telphone}}</div>
        </div>
        <div>{{item.looktime}}</div>
      </div>
    </div>

    
  </div>

</template>

<script>
const app = getApp();
 const common = require("@/utils/index");
  export default {
    data() {
      return {
        listHid:false,
        indAction:0,
        proName:"全部",
        tabArr:[{tab:"未确认带看"},{tab:"确认带看"}],
        proList:[],
        n_bfrList:[],
        proId:""
      }
    },
    onLoad(option){
    },
    onShow(){
      const that = this;
      that.proId="";
      that.proName="全部";
      that.fun();
      //  wx.request({
      //   url:app.globalData.url +"Percenter/BandReportLookList" +"?sessionKey=" +app.globalData.sessionKey,
      //   success: function (res) {
      //     console.log('res==',res);
      //   that.n_bfrList =res.data.Context.n_bfrList;
      //   that.proList=res.data.Context.dictionary;
      //   }
      //   })
    },
    methods: {
      //点击全部
      getAll:function(){
        getCurrentPages()[getCurrentPages().length - 1].onShow();
      },
      //点击显示项目列表
      listShow:function(){
        const that = this;
        if(that.listHid==true){
          that.listHid=false;
        }else{
          that.listHid=true;
        }
      },
      //点击切换项目
      proClick:function(index,e){
        const that = this;
        that.proName=e.mp.currentTarget.dataset.name;
        that.proId=index;
        that.fun(index);
        // console.log('e',e.mp.currentTarget.dataset.name);
        // t
        
      },
      //点击切换带看状态
      interestClick:function(index,e){
         const that = this;
          that.indAction=index;
          that.fun(that.proId);
      },
      fun(index){
        const that = this;
        wx.request({
        url:app.globalData.url +"Percenter/BandReportLookList" +"?sessionKey=" +app.globalData.sessionKey,
        success: function (res) {
          console.log('res==',res);
          that.proList=res.data.Context.dictionary;
          if(that.proId==""){
            if(that.indAction==0){
            that.n_bfrList = res.data.Context.n_bfrList;
          }else{
             that.n_bfrList = res.data.Context.s_bfrList;
          }
          }else{
            if(that.indAction==0){
              console.log('未带看');
            var LivingArr = res.data.Context.n_bfrList.filter(item => item.pid == index);
            that.n_bfrList=LivingArr;
          }else{
            console.log('已带看');
             var LivingArr = res.data.Context.s_bfrList.filter(item => item.pid == index);
            that.n_bfrList=LivingArr;
          }
          }
          
        }
        })
      }

    }



  }

</script>



<style scoped>
.indexstyle_top{width: 90%;margin: 50rpx auto;height: 50rpx;}
.indexstyle_top>span{float: left;}
.indexstyle_inp{float: left;border: 2rpx solid rgb(224, 224, 224);width: 73%;height: 50rpx;line-height: 50rpx;
margin-left: 15rpx;font-size: 26rpx;padding-left: 20rpx;position: relative;}
.line{width: 100%;height: 20rpx;background: #F1F1F1;}
.indexstyle_bot{padding: 20rpx 40rpx 0 40rpx;box-sizing: border-box;}
.indexstyle_bot_top{overflow: hidden;}
.indexstyle_bot_top>div:first-child{float: left;}
.indexstyle_bot_top>div:last-child{float: right;}
.indexstyle_bot_list{overflow: hidden;padding-bottom: 20rpx;padding-top: 20rpx;
    border-bottom: 2rpx solid rgb(224, 224, 224);}
.indexstyle_bot_list>div:first-child{float: left;}
.indexstyle_bot_list>div:last-child{float: right;}
.proList{width: 100%;;position: absolute;top: 52rpx;left: 0;background: #fff;}
.proList>div{border-bottom: 2rpx solid rgb(224, 224, 224);height: 60rpx;line-height: 60rpx;width: 100%;
text-align: center;}
.tabTop{height: 100rpx;line-height: 100rpx;display: flex;justify-content: center;border-bottom: 4rpx solid #F7F7F7;}
.tabTop>div{text-align: center;width: 50%;}
.lines{width: 140rpx;height: 4rpx;background: #3072f6;margin: 0 auto;}
.colors{color: #3072f6;}
</style>
