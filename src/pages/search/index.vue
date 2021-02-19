<template>
  <div class="indexstyle">
    <!-- 搜索开始 -->
    <div class="sousuo">
      <input type="text" placeholder="请输入项目" 
      @input="bindName" :value="name">
      <image :src="img2" mode="scaleToFill"/>
    </div>
    <!-- 搜索结束 -->
    <!-- 搜索列表展示开始 -->
    <div v-if="esfList.length>0&&name.length>0?true:false" class="esfList">
      <div v-for="(item, index) in esfList" :key="index" @click="searchClick(index,$event)" :data-name="item.projectname">
        <div>{{item.projectname}}</div>
        <div>{{item.groupcount}}套</div>
      </div>
    </div>
    <!-- 搜索列表展示结束 -->
    <!-- 热门搜索开始 -->
    <!-- <div class="hotsousuo">
      <h1>热门搜索</h1>
      <div class="ssci" v-for="(item, index) in search" :key="index">
        <div class="xmss"><p>{{item.title}}</p><span><image :src="item.img1" /></span></div>
      </div>
    </div> -->
    <!-- 热门搜索结束 -->
 
 
 

  
  </div>
</template>

<script>
const app = getApp();
 const common = require("@/utils/index");
  export default {
 
    data() {
      return {
        name:'',
        img2: app.globalData.imgurl +"ss.png",
        esfList:[],
        search:[
          {title:'天一城市之光',img1: "/static/images/sshot.png"},
          {title:'兴安府',img1: "/static/images/sshot.png"},
          {title:'天一城市之光',img1: "/static/images/sshot.png"},
          {title:'天一城市之光'},
          {title:'天一城市之光'}
        ]
      }
    },
    onShow(){
      const that = this;
      that.name="";

    },
    methods: {
       //获取项目名称
    bindName:function(e){
      const that = this;
      // that.projectArr=[];
      that.name = e.mp.detail.value;
      if (that.name.length > 0) {
          //获取筛选条件
      wx.request({
        url:app.globalData.url +"Index/BandSearchList" +"?sessionKey=" +app.globalData.sessionKey,
          method:"POST",
          data:{
            keyword:that.name,
            type:'esf'
          },
           header: {
        'content-type': 'application/json' // 默认值
      },
        success: function (res) {
          console.log('查询结果',res);
          that.esfList=res.data.Context.esfList;
        },
        fail: function (res) {},
      });
      }
    },
    //点击筛选
    searchClick:function(index,e){
      console.log('e',e.mp.currentTarget.dataset.name);
      var word = e.mp.currentTarget.dataset.name;
      // wx.setStorageSync('keyword',word);
      wx.navigateTo({url:"/pages/oldhouse/main?keyword="+word});
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

/* 搜索 */
.sousuo{ width: 90%;  margin: 0 auto; margin-left: 5%;position: relative;background: #f2f2f2;border-radius:60rpx;}
.sousuo input{ height:80rpx; line-height:80rpx; width:80%;margin-left: 80rpx;font-size: 26rpx;}
.sousuo image{ width:40rpx; height:40rpx; position: absolute; top:20rpx; left:3%; }
 
.hotsousuo{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:6%; }
.hotsousuo h1{ font-size: 40rpx; font-weight: bold;}
.ssci{ margin-top:1%; width: 100%; }
.xmss{ margin-top:6%; padding-left:5%; padding-right:10%;float: left; display: flex; flex-direction: row; }
.xmss p{ font-size:31rpx;  }
.xmss image{ width: 24rpx; height:30rpx; position: relative; left:15rpx; }
.esfList{width: 90%;margin: 0 auto;}
.esfList>div{width: 100%;border-bottom: 2rpx solid #E4E6F0;overflow: hidden;height: 85rpx;line-height: 85rpx;font-size: 26rpx;
}
.esfList>div>div:first-child{float: left;}
.esfList>div>div:last-child{float: right;}
</style>
