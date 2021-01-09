

<template>
  <div>
    
<scroll-view class="content" scroll-into-view="toView" scroll-y="true" scroll-with-animation="true" style="height:winHeight">
    <div v-for="(item, index) in act_addList" :key="index">
        <div class="address_top" id="'inToView'+item.id">{{item.region}}</div>
        <div  v-for="(item, ind) in item.city" :key="ind">
            <div class="address_bottom">{{item.name}}</div>
        </div>
    </div>
</scroll-view>
<div class="orientation_region">
    <div class="orientation">自动定位</div>
    <block v-for="(item, index) in orientationList" :key="index">
        <div class="orientation_city" bindtap="scrollToViewFn" data-id="item.id">
            {{item.region}}
        </div>
    </block>
</div>
 


  </div>
</template>
   
  
 

<script>
export default{
 data() {
 return {
orientationList: [
      {
        id: "01",
        region: "东北"
      },
      {
        id: "02",
        region: "华北"
      },
      {
        id: "03",
        region: "华东"
      },
      {
        id: "04",
        region: "华南"
      },
      {
        id: "05",
        region: "华中"
      },
      {
        id: "06",
        region: "西北"
      },
      {
        id: "07",
        region: "西南"
      }
    ],
    act_addList: [
      {
        id: "01", region: "东北地区",
        city: [
          { id: "0101", name: "白山江源" },
          { id: "0102", name: "白山市" },
          { id: "0103", name: "宾县" },
          { id: "0104", name: "大庆" },
          { id: "0105", name: "测试1" },
          { id: "0106", name: "测试2" },
          { id: "0107", name: "测试3" },
          { id: "0108", name: "测试4" },
          { id: "0109", name: "测试5" },
          { id: "0110", name: "测试6" },
        ]
      },
      {
        id: "02", region: "华北地区",
        city: [
          { id: "0201", name: "包头" },
          { id: "0202", name: "保定" },
          { id: "0206", name: "测试2" },
          { id: "0207", name: "测试3" },
          { id: "0208", name: "测试4" },
          { id: "0209", name: "测试5" },
          { id: "0210", name: "测试6" },
        ]
      },
      {
        id: "03",
        region: "华东地区",
        city: [
          { id: "0303", name: "开封市" },
          { id: "3104", name: "安阳市" },
        ]
      },
      {
        id: "04", region: "华南地区",
        city: [
          { id: "0401", name: "黑龙江市" },
          { id: "0407", name: "测试3" },
          { id: "0508", name: "测试4" },
          { id: "0609", name: "测试5" },
          { id: "0710", name: "测试6" },
          { id: "0711", name: "测试8" },
          { id: "0712", name: "测试9" },
          { id: "0713", name: "测试10" },
          { id: "0714", name: "测试11" },
        ]
      },
      {
        id: "05",
        region: "华中地区",
        city: [
          { id: "0501", name: "黑龙江市" }
        ]
      },
      {
        id: "06",
        region: "西北地区",
        city: [
          { id: "0603", name: "开封市" },
          { id: "0604", name: "安阳市" }
        ]
      },
      {
        id: "07",
        region: "西南地区",
        city: [
          { id: "0703", name: "开封市" },
          { id: "0704", name: "安阳市" },
          { id: "0401", name: "黑龙江市" },
          { id: "0407", name: "测试3" },
          { id: "0508", name: "测试4" },
          { id: "0609", name: "测试5" },
          { id: "0710", name: "测试6" },
          { id: "0711", name: "测试8" },
          { id: "0712", name: "测试9" },
          { id: "0713", name: "测试10" },
          { id: "0714", name: "测试11" },
          { id: "0401", name: "黑龙江市" },
          { id: "0407", name: "测试3" },
          { id: "0508", name: "测试4" },
          { id: "0609", name: "测试5" },
          { id: "0710", name: "测试6" },
          { id: "0711", name: "测试8" },
          { id: "0712", name: "测试9" },
          { id: "0713", name: "测试10" },
          { id: "0714", name: "测试11" },
        ]
      },
    ],
    toView: 'inToView01', }
 },

 methods: {
scrollToViewFn(e) {
    var _id = e.target.dataset.id;
    this.setData({
      toView: 'inToView' + _id
    })
    console.log(this.data.toView)
  }
  
  }
}


</script>





<style scoped>
page {
    height: 100%;
}

.content {
    padding-bottom: 20rpx;
    box-sizing: border-box;
    height: 100%;
}

.address_top {
    height: 76rpx;
    line-height: 76rpx;
    background: #f4f4f4;
    color: #999999;
    font-size: 28rpx;
    padding: 0 20rpx;
}

.address_bottom {
    height: 88rpx;
    line-height: 88rpx;
    background: #fff;
    color: #000000;
    font-size: 32rpx;
    padding: 0 20rpx;
    border-bottom: 2rpx #ebebeb solid;
    margin-left: 20rpx;
    margin-right: 50rpx;
}


.orientation {
    white-space: normal;
    display: inline-block;
    width: 55rpx;
    height: 58rpx;
    color: #999;
    text-align: center;
}

.orientation_region {
    width: 55rpx;
    font-size: 20rpx;
    position: fixed;
    top: 220rpx;
    right: 0rpx;
}

.orientation_city {
    height: 50rpx;
    line-height: 50rpx;
    color: #000;
    text-align: center;
}
</style>
