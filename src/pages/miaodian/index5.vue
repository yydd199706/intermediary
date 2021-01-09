<template>
  <div class="longinPage">

    <div class="right_Letter">
      <div class="Letter_list" v-for="(item,index) in LetterCity" :key="index" @click="addClassName(index,item.letter)" :class="{active:index == thatnum}">{{item.letter}}</div>
    </div>
    
    <scroll-view class="longinPage_scroll"  :scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll" :scroll-into-view="toView" :scroll-with-animation="true">
      <div class="Letter_city" v-for="(item,index) in LetterCity" :key="index" :id="item.letter">
        <div class="Letter_title">{{item.letter}}</div>
        111111111111111111
      </div>
    </scroll-view>

  </div>
</template>
 
<script>
// import LetterCity from "@/../static/LetterCity.json"
 
export default {
  data () {
    return {
      LetterCity: ['今日特惠', '烟灶推荐', '净水饮水推荐', '洗碗机推荐'],
      hotCity:[],
      thatnum: 0,
      scrollTop:0,
      toView:'',
    }
  },
  onLoad:function(options){
    //标题
    wx.setNavigationBarTitle({
      title: '选择城市'
    })
    this.LetterCity=LetterCity
 
    //获取开通城市
    this.$http.post({
      url:"",
      data:{
        source:'2',
      }  
    })
    .then(res => {
      if(res.code==1000){
        this.hotCity=res.data
      }else{
        wx.showToast({
          title: res.message, 
          icon: 'loading', 
          duration: 2000, 
          mask: true, 
        });
      }
    })
 
 
  },
  methods: {
    scrolltolower(){
 
    },
    scroll(e) {
      console.log(e.mp.detail.scrollTop)
    }, 
    //to首页
    toHome(name,numID){
      wx.setStorage({
        key:'cityName',
        data:name
      })
      wx.setStorage({
        key:'cityId',
        data:numID
      })
      wx.switchTab({url: "/pages/index/main"})
    },
    //选择字母
    addClassName: function(index,id) {
      this.Tips(id)
      this.thatnum = index;
      var that=this;
      for (let i = 0; i < that.LetterCity.length; ++i) {
        if (that.LetterCity[i].letter == id) {
          that.toView= that.LetterCity[i].letter
          break
        }
      }
    },
    //提示
    Tips(text){
      wx.showToast({
        title: text,
        icon: 'none',
        duration: 500
      });
    },
  }
}
</script>
 
<style scoped>
.longinPage{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: #F7F7F7;
  padding: 0 9% 0 3%;
  box-sizing: border-box;
  overflow: hidden;
}
.longinPage_scroll{
  width: 100%;
  height: 100%;
  padding-top: 10px;
}
.bottom_text{
  font-size: 20px;
  color: #B5B5B5;
  text-align: center;
}
.right_Letter{
  position: fixed;
  right: 10px;
  top: 80px;
  z-index: 100;
  width: 25px;
  overflow: hidden;
}
.Letter_list{
  width: 25px;
  height: 25px;
  font-size: 14px;
  color: #006A3C;
  text-align: center;
  line-height: 25px;
  margin-bottom: 5px;
}
.head_gps{
  margin-top: 10px;
}
.title{
  font-size: 14px;
  color: #333333;
  margin-bottom: 10px;
}
.city_list{
  width: 96px;
  height: 27px;
  border: 1px solid #CCCBCB;
  border-radius: 2px;
  line-height: 27px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #6D6D6D;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.hot_city{
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
}
.Letter_title{
  width: 22px;
  height: 22px;
  background: #006A3C;
  border-radius: 50%;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  line-height: 22px;
  margin: 15px 0;
}
.Letter_province{
  font-size: 20px;
}
.placeholder {
  width: 30%;
  height: 0px;
}
.active{
  background: #006A3C;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
}
.box{
  width: 100%;
  height: 30px;
}
 
/*隐藏滚动条*/
.longinPage_scroll ::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>