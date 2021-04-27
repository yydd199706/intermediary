<template>
  <div class="indexstyle">
    
    <div class="newschat">
      <div class="chatlist" v-for="(item, index) in chatlistarr" :key="index">
        <div class="chat_lelf">
          <div class="num">{{item.num}}</div>
          <image :src="item.img1" />
        </div>
        <div class="chat_right">
          <div>
            <div class="title_bt">{{item.title}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="content_nr">{{item.content}}</div>
        </div>
      </div>
    </div>



     





     
   
  

  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data () {
    return {
      chatlistarr:[
        {img1:"/static/images/meimg.png",num:2,title:"杨女士",time:"2021-4-27",content:"您好"},
        {img1:"/static/images/meimg.png",num:2,title:"杨女士",time:"2021-4-27",content:"您好"},
        {img1:"/static/images/meimg.png",num:2,title:"杨女士",time:"2021-4-27",content:"您好"}
      ]

     


    }
  },
  onLoad(option) {
    const that = this;
    that.domain=app.globalData.domain;






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

.newschat{ width: 90%; margin-left: 5%; margin-right: 5%;}
.chatlist{ overflow: hidden; margin-bottom: 10rpx;}
.chat_lelf{ float: left; width:22%;}
.chat_lelf image{ width: 120rpx; height: 120rpx; border-radius: 50%;}
.chat_lelf .num{ width:30rpx; height:30rpx; text-align: center; line-height:30rpx;  border-radius: 50%; background: rgb(247, 1, 1);
 color: #fff; position: relative; top:40rpx; left:90rpx; z-index: 99; font-size: 24rpx;}
 .chat_right{ float: left; border-bottom: 1rpx rgb(241, 241, 241) solid; width:78%; margin-top:35rpx;}
 .chat_right>div{ overflow: hidden;}
 .title_bt{ float: left; font-size: 34rpx; font-weight: bold;}
 .time{ float: right; font-size: 24rpx; color: #b7b9bb;}
 .content_nr{ margin-top: 15rpx; margin-bottom:15rpx; font-size: 30rpx; color: #b3b3b3;}

</style>
