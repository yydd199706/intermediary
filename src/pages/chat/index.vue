<template>
  <div class="indexstyle">

    <div class="chat">
      <scroll-view scroll-y="true" class='padding20' style="height:1000rpx;width:auto;"> 
        <!-- 时间 -->
        <div class="timetop">
          <div class="time_chat">14:48</div>
        </div>

        <!-- 内容 -->
        <div class="content_chat">
          <!-- 我发出的内容 -->
          <div class="meIssue">
            <image :src="item.img1" class="me_img" />
            <div class="chat_list">
              <div class="me_text">{{item.text}}</div>
            </div>
          </div>
          <!-- 对方发出的内容 -->
          <div class="otherParty"></div>
        </div>


      </scroll-view>
    </div>

     





     
   
  

  </div>
</template>

<script>
export default {
  data () {
    return {
     


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
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
 



</style>
