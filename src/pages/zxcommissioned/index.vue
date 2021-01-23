<template>
  <div class="indexstyle">

    <div class="zxwt">
       <div class="proName">姓名</div>
       <input type="text" :value="projectName" placeholder="请输入您的姓名" placeholder-style="color: #aaa; font-size: 28rpx;" disabled="disabled">
    </div>

    <div class="zxwt">
       <div class="proName">电话</div>
       <input type="text" :value="projectName" placeholder="请输入手机号" placeholder-style="color: #aaa; font-size: 28rpx;" disabled="disabled">
    </div>

    <div class="wenzi">收不到短信？拨打<span>091510000000</span>联系客服MM电话委托</div>

    <div class="anwt">
      <button>立即委托</button>
    </div>
     


    






   
  

  </div>
</template>

<script>
export default {
  data () {
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
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}

.zxwt{ width: 90%; margin-left: 5%; margin-right: 5%; display: flex; flex-direction: row; margin-top: 5%; padding-bottom:3%; border-bottom: 1rpx rgb(233, 233, 233) solid;}
.proName{ margin-right: 5%;}
.wenzi{ color: rgb(90, 90, 90); margin-top: 10%; font-size:27rpx; text-align: center;}
.wenzi span{ color: #4bc0ca; font-weight: bold;}

.anwt{ margin-top:15%; width: 70%; margin-left: 15%; margin-right: 15%; height: 70rpx; line-height: 70rpx;}
.anwt button{ background: #4bc0ca;font-size: 30rpx; text-align: center; line-height: 90rpx; margin-left: 2%; margin-right: 2%;box-shadow:3px 3px 6px #b6f5fd; color: #fff;}

</style>
