<template>
  <div class="indexstyle">

<!-- 导航 -->
<div class='nav' id="tab-con"> 
 	<div @click="toblock1" :data-ondiv="0" class="{ondiv==0?'specify-style':''}" >关于我</div>
 	<div @click="toblock2" :data-ondiv="1" class="{ondiv==1?'specify-style':''}">工作经验</div>
 	<div @click="toblock3" :data-ondiv="2" class="{ondiv==2?'specify-style':''}">项目经验</div>
 </div>
 <!-- 中部内容 -->
 <div class="body">
 	<scroll-view class="list" scroll-y="true" >
 		<div id='block_1'>
 			<!-- 第一个板块 -->
 		</div>
 		<div id='block_2'>
 			<!-- 第二个板块 -->
 		</div>
 		<div id='block_3'>
 			<!-- 第三个板块 -->
 		</div>
 		<div id='block_3'>
 			<!-- 嗯，高度不够凑数的 -->
 		</div>
 	</scroll-view>
 </div>
 


  </div>
</template>

<script>
export default {
  data () {
     return {
       //当前离顶部滚动的距离
      top: 0,
      ondiv:0,


    }
  },

  onLoad() { 
    

      
         
  },
 

 
 
  methods:{
    // toblock1:function(e){
    //   console.info('1111',e.currentTarget.dataset.ondiv);
    //   me.setData({
    //     ondiv:e.currentTarget.dataset.ondiv
    //   })

    // },
    //点击跳转到板块一
    toblock1: function (e) {
      const that = this;
      that.ondiv=e.currentTarget.dataset.ondiv;
      wx.pageScrollTo({
        selector: '#block_1',
        
      })
      
    },
    //点击跳转到板块二
    toblock2: function () {
      const that = this;
      that.ondiv=e.currentTarget.dataset.ondiv;
      wx.pageScrollTo({
        selector: '#block_2',
       
      })
    },
    //点击跳转到板块三
    toblock3: function () {
      const that = this;
      that.ondiv=e.currentTarget.dataset.ondiv;
      wx.pageScrollTo({
        selector: '#block_3',
      
      })
    },
    
     
     

  },

 


 

   

}
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}


.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100rpx;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}

.specify-style {
  font-weight: 800;
  position: relative;
}

.specify-style::before {
  content: '';
  border: solid transparent;
  border-width: 0px 14rpx 14rpx 14rpx;
  border-bottom-color: snow;
  position: absolute;
  z-index: 1000;
  margin-top: 36rpx;
  left: 37%;
}

#block_1,
#block_2,
#block_3 {
  height: 70vh;
}

#block_1 {
  background-color: aqua;
}

#block_2 {
  background-color: bisque;
}

#block_3 {
  background-color: cadetblue;
}
  
 


</style>
