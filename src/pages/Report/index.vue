<template>
  <div class="indexstyle">
   <!-- 带看报备开始  -->
   <div class="baobei">
     <!-- 项目名称 -->
     <div class="project__input">
       <div class="xmmc">项目名称</div>
       <input id="name" type="text" placeholder="项目名称" placeholder-style="color: #aaa" disabled="disabled" />
     </div>
     <!-- 经纪人姓名 -->
     <div class="project__input">
       <div class="xmmc">经纪人姓名</div>
       <input id="name" type="text" placeholder="经纪人姓名" placeholder-style="color: #aaa" disabled="disabled" />
     </div>
     <!-- 经纪人电话 -->
     <div class="project__input">
       <div class="xmmc">经纪人电话</div>
       <input id="name" type="text" placeholder="经纪人电话" placeholder-style="color: #aaa" disabled="disabled" />
     </div>
     <!-- 经纪人所属公司 -->
     <div class="project__input">
       <div class="xmmc">经纪人所属公司</div>
       <input id="name" type="text" placeholder="经纪人所属公司" placeholder-style="color: #aaa" disabled="disabled" />
     </div>
     <!-- 经纪人所属门店 -->
     <div class="project__input">
       <div class="xmmc">经纪人所属门店</div>
       <input id="name" type="text" placeholder="经纪人所属门店" placeholder-style="color: #aaa" disabled="disabled" />
     </div>
     <!-- 带看人数 -->
     <div class="project__input">
       <div class="xmmc">带看人数</div>
       <!-- <input id="name" type="text" placeholder="带看人数" placeholder-style="color: #aaa" disabled="disabled" /> -->
       <input id="name" type="text" placeholder="请输入备用姓名" placeholder-style="color: #aaa" />
     </div>
   </div>
   <!-- 带看报备结束 -->
 

  
  </div>
</template>

<script>
 
  export default {
 
    data() {
      return {
        

 
      }
    },
    methods: {
 
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

/* 带看报备开始 */
.baobei{ width: 90%; margin-left: 5%; margin-right: 5%;}
.project__input{ margin-top:20rpx; height:60rpx; padding-bottom:10rpx; border-bottom: 1px #ececec solid;}
.project__input .xmmc{ float: left; font-size: 30rpx; width:210rpx; margin-right:20rpx; text-align: justify;text-justify:distribute-all-lines;}
.xmmc:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.project__input input{ float: left; font-size: 30rpx; }

</style>
