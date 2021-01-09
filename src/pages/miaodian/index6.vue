<template>
  <div class="longinPage">

<div class="container">
	<div class="navigate">
		<div class="title">
			<div class="title {actionView=='product'?'checked':''}" bindtap="toViewClick" data-hash="product">商品</div>
		</div>
		<div class="title">
			<div class="title {actionView=='comment'?'checked':''}" bindtap="toViewClick" data-hash="comment">评价</div>
		</div>
		<div class="title">
			<div class="title {actionView=='info'?'checked':''}" bindtap="toViewClick" data-hash="info">详情</div>
		</div>
    <div class="title">
			<div class="title {actionView=='project'?'checked':''}" bindtap="toViewClick" data-hash="project">项目</div>
		</div>
	</div>
	<scroll-view style="height:{winHeight}" scroll-into-view="{toView}" scroll-y="true" bindscroll="scrollTo">
		<div id="product" class="content">商品信息...</div>
		<div id="comment" class="content">评价内容...</div>
		<div id="info" class="content">商品详情...</div>
		<div id="project" class="content">项目详情...</div>
	</scroll-view>
</div>
  </div>
</template>
 
<script>
  
export default {
  data () {
    return {
    winHeight: '100%',
    toView: 'product',//锚点跳转的ID
    actionView: 'product',//控制导航显示
    productTop: 0,//商品信息距离顶部的距离
    commentTop: 0,//评价内容距离顶部的距离
    infoTop: 0,//商品详情距离顶部的距离
    projectTop: 0,//项目详情距离顶部的距离    
    }
  },

  //导航+锚点定位
  toViewClick(e) {
    console.log(e);
    this.setData({
      toView: e.target.dataset.hash,  
      actionView: e.target.dataset.hash
    })
  },
  scrollTo(e){
    console.log(e)
    let scrollTop = e.detail.scrollTop+60
    if(scrollTop>=this.data.projectTop){
      this.setData({
        actionView:'project'
      })
    }else if(scrollTop>=this.data.infoTop){
      this.setData({
        actionView:'info'
      })
    }else if(scrollTop>=this.data.commentTop){
      this.setData({
        actionView:'comment'
      })
    }else{
      this.setData({
        actionView:'product'
      })
    }
  },
  // onShow 页面显示出来时
  onShow() {
    // 获取各模块距离顶部的距离
    new Promise(resolve => {
      let query = wx.createSelectorQuery();
      query.select('#product').boundingClientRect();
      query.select('#comment').boundingClientRect();
      query.select('#info').boundingClientRect();
      query.select('#project').boundingClientRect();
      query.exec(function (res) {
        resolve(res);
      });
    }).then(res => {
      this.setData({
        productTop: res[0].top,
        commentTop: res[1].top,
        infoTop: res[2].top,
        projectTop: res[3].top
      });
    });
  },
  
  
 
}
</script>
 
<style scoped>
.navigate {
  background: #fff;
  height: 80rpx;
  padding: 0 30rpx;
  margin-bottom: 10rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.navigate .title {
  margin: 20rpx 16rpx;
  float: left;
  font-size: 27rpx;
}
.navigate .title .right {
  float: right;
  margin-top: -5rpx;
}

.navigate .checked {
  color: #f73c3c;
}
.content {
  height: 1200rpx;
}
</style>

