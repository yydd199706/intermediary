<template>
  <div class="indexstyle">
   <!-- 带看报备开始  -->
   <div class="baobei">
      <div class="biaoti_1">带看报备</div>
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
          <span class="mustBuil">*</span>
        </div>
        <!-- 带看时间 -->
        <div class="project__input">
          <div class="xmmc">带看时间</div>
          <input id="name" type="text" placeholder="带看时间" placeholder-style="color: #aaa" />
        </div>
      </div>

      <div class="baobei_kuang1">
        <!-- 客户姓名 -->
        <div class="project__input">
          <div class="xmmc">客户姓名</div>
          <input id="name" type="text" placeholder="带看时间" placeholder-style="color: #aaa" />
        </div>
        <!-- 客户电话 -->
        <div class="project__input">
          <div class="xmmc">客户电话</div>
          <input id="name" type="text" placeholder="客户电话" placeholder-style="color: #aaa" />
        </div>
        <!-- 添加更多信息 -->
        <div class="tianjia">
          <button @click="dj_tj">
            <image :src="img1" />
            <span>添加更多信息</span>
          </button>
        </div>

        <!-- 添加 -->
        <div class="tjdd" v-if="tianjia">
          <!-- 客户姓名 -->
          <div class="project__input">
            <div class="xmmc">客户姓名</div>
            <input id="name" type="text" placeholder="带看时间" placeholder-style="color: #aaa" />
          </div>
          <!-- 客户电话 -->
          <div class="project__input">
            <div class="xmmc">客户电话</div>
            <input id="name" type="text" placeholder="客户电话" placeholder-style="color: #aaa" />
          </div>
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
        img1:"/static/images/tianjia.png",
        

 
      }
    },
    methods: {
      dj_tj:function(){

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
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #0a8de4;}

/* 带看报备开始 */
/* .baobei{ width:80%; margin-left: 5%; margin-right: 5%; background: #fff; padding: 5%; border-radius: 20rpx;} */
.baobei{width: 140%; height:800rpx; position: absolute; left: -20%; top: 0; z-index: -1; content: ''; border-radius: 0 0 50% 50%; background: linear-gradient(#239bea, #0a8de4); }
  .baobei_kuang{ width:58%; margin-left:17%; margin-right:17%; padding:4%; background:#fff; border-radius:30rpx; margin-top:4%; padding-bottom:5%;/* border-bottom: 10rpx rgb(233, 233, 233) solid; border-left:4rpx rgb(233, 233, 233) solid; border-right:4rpx rgb(233, 233, 233) solid;*/ box-shadow:1px 1px 10px rgb(211, 211, 211);}  
.baobei_kuang1{ width:58%; margin-left:17%; margin-right:17%; padding:4%; background:#fff; border-radius:30rpx; margin-top:4%; margin-bottom: 10%; padding-bottom:5%; box-shadow:1px 1px 10px rgb(211, 211, 211);} 
.biaoti_1{ font-size: 38rpx; color: #fff; text-align: center; font-weight: bold; margin-top: 5%;}

.project__input{ margin-top:30rpx; height:60rpx; padding-bottom:10rpx; border-bottom: 1px #ececec solid;}
.project__input .xmmc{ float: left; font-size: 30rpx; width:210rpx; margin-right:25rpx; text-align: justify;text-justify:distribute-all-lines;}
.xmmc:after {width: 100%;height: 0;margin: 0;display: inline-block;overflow: hidden;content: '';}
.project__input input{ float: left; font-size: 30rpx; }
.project__input span{display: inline-block; height: 0; color: rgb(255, 0, 0); font-size: 40rpx; font-weight: bold;}
.mustBuil{ float: right;}
/* 添加更多信息 */
.tianjia{ width: 80%; margin-left: 10%; margin-right: 10%; margin-top:40rpx;}
.tianjia button{ background:#0f90e5;}
.tianjia button image{ width:40rpx; height:40rpx; margin-right: 20rpx;position: relative; top:7rpx;}
.tianjia button span{ color: #fff; font-size: 33rpx;}



</style>
