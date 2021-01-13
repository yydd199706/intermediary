<template>
  <div class="indexstyle">

    <div class="zxwt">
       <div class="proName">姓名</div>
       <input type="text" :value="projectName" placeholder="请输入您的姓名" placeholder-style="color: #aaa" disabled="disabled">
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
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
/* 图片开始 */
.tu_img{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top: 5%;}
.tu_img image{ width: 100%; height: 500rpx; border-radius:20rpx;box-shadow:3px 8px 1px #ebebeb;}
/* 委托开始 */
.weituo{ width: 94%; margin-left:3%; margin-right:3%; display: flex; flex-direction: row; margin-top:7%;}
.weituo button{ width:46%; height:90rpx; background: #ffc543; font-size: 30rpx; text-align: center; line-height: 90rpx; margin-left: 2%; margin-right: 2%;box-shadow:3px 3px 6px #ffd67c; color: #fff;}
.weituo button::after{border: none;}
.weituo button.wtzx2{ background: #4681f6; box-shadow:3px 3px 6px #5288f5;}
/* 甩手掌柜开始 */
.sszg{ width: 90%; margin-left: 5%; margin-right: 5%; margin-top:5%;}
.ss_biaoti{ margin-top:10%; overflow: hidden; }
.zoub{ font-size: 38rpx; font-weight: bold; float: left; width:85%;}
.zoub image{ width:30rpx; height: 30rpx; margin-right: 3%;}
.xiangxi{ font-size:28rpx; float: right; color: rgb(170, 170, 170); margin-top:1%;} 
.neirong{ margin-top:3%; line-height:50rpx; font-size:28rpx; color: rgb(139, 139, 139);}
/* 加入我们 */
.join{ margin-top:10%; margin-bottom: 10%;}
.join button{ width:400rpx; height:100rpx; line-height: 100rpx; border-radius:50rpx;background-image: linear-gradient(to right, #64e4cc, #45c8cd); color: #fff;}
.join p{ color: #999999; font-size:28rpx; text-align: center; margin-top:3%;}



</style>
