<template>
  <div class="indexstyle">
   <!-- 带看报备开始  -->
   <div class="baobei">
      <div class="baobei_kuang">
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
          <input id="name" type="text" placeholder="请输入备用姓名" placeholder-style="color: #aaa" />
          <span v-if="spansImg1" class="mustBuil">*</span>
        </div>
        <!-- 带看时间 -->
        <div class="project__input">
          <div class="xmmc">带看时间</div>
          <input id="name" type="text" placeholder="带看时间" placeholder-style="color: #aaa" />
        </div>
        <!-- 客户姓名 -->
        <div class="project__input">
          <div class="xmmc">客户姓名</div>
          <input id="name" type="text" placeholder="带看时间" placeholder-style="color: #aaa" />
        </div>
        
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
.indexstyle{width: 100%; margin: 0 auto; background: #0a8de4;}

/* 带看报备开始 */
/* .baobei{ width:80%; margin-left: 5%; margin-right: 5%; background: #fff; padding: 5%; border-radius: 20rpx;} */
.baobei{width: 140%; height: 500rpx; position: absolute; left: -20%; top: 0; z-index: -1; content: ''; border-radius: 0 0 50% 50%; background: linear-gradient(#239bea, #0a8de4); }
.baobei_kuang{ width:58%; margin-left:17%; margin-right:17%; padding:4%; background:#fff; border-radius:30rpx; margin-top:8%; padding-bottom:7%; }

.project__input{ margin-top:30rpx; height:60rpx; padding-bottom:10rpx; border-bottom: 1px #ececec solid;}
.project__input .xmmc{ float: left; font-size: 30rpx; width:210rpx; margin-right:25rpx; text-align: justify;text-justify:distribute-all-lines;}
.xmmc:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.project__input input{ float: left; font-size: 30rpx; }
.project__input span{display: inline-block;
  height: 0;
  width: 100%;}
.mustBuil{ float: right;}

</style>
