<template>
  <div class="indexstyle">
    <!-- 搜索开始 -->
    <div class="sousuo">
      <input type="text" placeholder="请输入项目" 
      @input="bindName" :value="name">
      <image :src="img2" mode="scaleToFill"/>
    </div>
    <!-- 搜索结束 -->
    <!-- 二手房搜索列表展示开始 -->
    <div v-if="type=='esf'">
    <div v-if="esfList.length>0&&name.length>0?true:false" class="esfList">
      <div v-for="(item, index) in esfList" :key="index" @click="esfClick(index,$event)" :data-name="item.projectname">
        <div>{{item.projectname}}</div>
        <div>{{item.groupcount}}套</div>
      </div>
    </div>
    </div>

    <!-- 新房搜索列表展示开始 -->
    <div v-if="type=='project'">
    <div class="esfList">
      <div v-for="(item, index) in project" :key="index" @click="projectClick(index,$event)" :data-name="item.name">
        <div>{{item.name}}</div>
        <!-- <div>{{item.housecount}}套</div> -->
      </div>
    </div>
    </div>

    <!-- 租房搜索列表展示开始 -->
    <div v-if="type=='rent'">
    <div v-if="rentList.length>0?true:false" class="esfList">
      <div v-for="(item, index) in rentList" :key="index" @click="rentClick(index,$event)" :data-name="item.projectname">
        <div>{{item.projectname}}</div>
        <div>{{item.groupcount}}套</div>
      </div>
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
        project:[],
        rentList:[],
        type:"",
        // search:[
        //   {title:'天一城市之光',img1: "/static/images/sshot.png"},
        //   {title:'兴安府',img1: "/static/images/sshot.png"},
        //   {title:'天一城市之光',img1: "/static/images/sshot.png"},
        //   {title:'天一城市之光'},
        //   {title:'天一城市之光'}
        // ]
      }
    },
    onLoad(option){
      const that = this;
      console.log("111",option)
      that.type = option.type;

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
            type:that.type,
          },
           header: {
        'content-type': 'application/json' // 默认值
      },
        success: function (res) {
          console.log("模糊词",res)
          that.esfList=res.data.Context.esfList;
          that.project=res.data.Context.projectList;
          that.rentList=res.data.Context.rentList;
        },
        fail: function (res) {},
      });
      }
    },
    //点击筛选
    esfClick:function(index,e){
      const that = this;
      wx.navigateTo({url:"/pages/oldhouse/main?keyword="+e.mp.currentTarget.dataset.name});
    },

    projectClick:function(index,e){
      const that = this;
      wx.navigateTo({url:"/pages/newhouse/main?keyword="+e.mp.currentTarget.dataset.name});
    },
    rentClick:function(index,e){
      const that = this;
      wx.navigateTo({url:"/pages/Rental/main?keyword="+e.mp.currentTarget.dataset.name});
    },



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
.esfList>div>div:nth-child(2){float: right;}
</style>
