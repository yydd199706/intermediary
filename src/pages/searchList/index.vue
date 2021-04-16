<template>
<div class="ld">
	
	<div class="search">
		<div class="lelf_search">
			<div class="top_search" @click="toggleDrop">
				<span>{{ selections[nowIndex].label }}</span>
        <image :src="img1" class="vr-image" mode="scaleToFill"/>
			</div>
			<div class="bottom_search" v-if="isDrop">
				<div class="list_search" :class="{'selected':nowIndex == index}" v-for="(item, index) in selections" :key="index" 
        :data-type="item.type" @click="chooseSelection(index,$event)">{{item.label}}</div>
			</div>
		</div>
		<div class="right_search"><input type="text" placeholder="请输入项目" @input="bindName" :value="name"></div>
      
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
    <div class="esfList" v-if="project.length>0&&name.length>0?true:false">
      <div v-for="(item, index) in project" :key="index" @click="projectClick(index,$event)" :data-name="item.name">
        <div>{{item.name}}</div>
        <div>{{item.housecount}}套</div>
      </div>
    </div>
    </div>

    <!-- 租房搜索列表展示开始 -->
    <div v-if="type=='rent'">
    <div v-if="rentList.length>0&&name.length>0?true:false" class="esfList">
      <div v-for="(item, index) in rentList" :key="index" @click="rentClick(index,$event)" :data-name="item.projectname">
        <div>{{item.projectname}}</div>
        <div>{{item.groupcount}}套</div>
      </div>
    </div>
    </div>

</div>
</template>




<script>
const app = getApp();
const common = require("@/utils/index");
export default {
	props: {
    selections: {
      default: [{label: '二手房',type:"esf"},{label: '新房',type:"project"},{label: '租房',type:"rent"}]
    }
  },
  data () {
    return {
	    isDrop: false,
      nowIndex: 0,
      esfList:[],
      project:[],
      rentList:[], 
      name:'',
      type:"esf",
      img1:"/static/images/ssjt.png"
    }
  },

  onLoad(option){
    const that = this;
    console.log("111",option); 

  },

  methods:{
	// 点击下拉显示框
	toggleDrop () {
    this.isDrop = !this.isDrop
  },
	// 点击下拉列表
	chooseSelection (index,e) {
    const that = this;
    that.type=e.mp.currentTarget.dataset.type;
    this.nowIndex = index;
    this.isDrop = false;
    // this.$emit('on-change', this.selections[this.nowIndex])
  },
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
.search{ width:90%;  margin-left: 5%; margin-right: 5%; border: 1px rgb(224, 224, 224) solid; height:90rpx; border-radius:10rpx;box-shadow: 1px 1px 5px #b3b3b338;}
.lelf_search{ float: left; width: 30%;}
.right_search{ float: right; width:65%; margin-top: 20rpx; margin-left: 5%; }
.top_search{ width: 100%;border-right: 1px rgb(224, 224, 224) solid; height: 40rpx;}
.top_search image{ width:25rpx; height: 15rpx; position: relative; top:-47rpx; left:140rpx;}
.top_search span{ font-size: 32rpx; font-weight: bold; display: block; height:45rpx; margin-top: 25rpx; margin-left:20rpx; text-align: right; width:50%;}
.bottom_search{width:70%; border: 1px rgb(224, 224, 224) solid; border-radius: 10rpx; padding-left:15%; padding-right:15%; margin-top:50rpx;} 
.bottom_search .list_search{ height:80rpx; line-height:80rpx; text-align: center; border-bottom:1px rgb(236, 236, 236) solid;
  } 

.selected{ color: rgb(0, 92, 197);}


.esfList{width: 90%;margin: 0 auto;}
.esfList>div{width: 100%;border-bottom: 2rpx solid #E4E6F0;overflow: hidden;height: 85rpx;line-height: 85rpx;font-size: 26rpx;
}
.esfList>div>div:first-child{float: left;}
.esfList>div>div:last-child{float: right;}

</style>
