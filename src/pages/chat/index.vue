<template>
  <div class="indexstyle">

    <div class="chat">
      <scroll-view scroll-y="true" class='padding20' style="height:1000rpx;width:auto;"> 
        <block v-for="(item, index) in chatList" :key="index">
          <!-- 时间 -->
          <div class="timetop">
            <div class="time_chat">14:48</div>
          </div>

          <!-- 内容开始 -->
          <div class="content_chat">
            <!-- 我发出的内容 -->
            <div class="meIssue">
              <image :src="item.img1" class="me_img" />
              <div class="chat_list">
                <div class="me_text">{{item.text}}</div>
                <image :src="item.img2" class="me_img" />
              </div>
            </div>
            <!-- 对方发出的内容 -->
            <div class="otherParty">
              <image :src="item.img1" class="me_img" />
            </div>

          </div>
          <!-- 内容结束-->

        </block>
      </scroll-view>
    </div>

     





     
   
  

  </div>
</template>

<script>
export default {
  data () {
    return {
      chatList:[
        {img1:"/static/images/meimg.png",text:"您好",img2:"/static/images/sj.png"}
      ]
     


    }
  },
 


 

   

}
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #f1f1f1;}

.chat{ width: 100%; margin: 0 auto;}
.timetop{ width: 100rpx; height: 60rpx; line-height: 60rpx; background: #dadada; border-radius:6rpx; margin: 0 auto; margin-top: 30rpx;}
.time_chat{ text-align: center; color: #fff; font-size: 28rpx;}
.content_chat{ width: 90%; margin-left: 5%; margin-right: 5%;}
/* .meIssue{ width: 70%;} */
.meIssue image{ width: 65rpx; height: 65rpx;} 
.meIssue .me_text{max-width: 70%; background: #fff; padding: 20rpx; border-radius: 10rpx; margin-right:20rpx;}
.chat_list image{ width:14rpx; height:22rpx;}


</style>
