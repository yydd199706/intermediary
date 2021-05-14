<template>
  <div class="indexstyle">
    <!-- 栏目切换开始 -->
    <div class="liulan">
      <div :class="{'houses1':tab === 1}" class="ll_top" @click="lldj(1)">二手房</div>
      <div :class="{'houses1':tab === 2}" class="ll_top" @click="lldj(2)">新房</div>
      <div :class="{'houses1':tab === 3}" class="ll_top" @click="lldj(3)">租房</div>
    </div>
    <!-- 栏目切换结束 -->
    <div class="ll_xmnr">
      <!-- 二手房开始 -->
      <div class="secondary" v-if="tab===1">
        <div class="sjd" v-for="(item,index) in browse" :key="index">
          <!-- 二手房列表开始 -->
          <div
            class="h-mt"
            v-for="(data, ind) in item"
            :key="ind"
            :data-id="data.id"
            @click="esfDetail(index,$event)"
          >
            <!-- 时间 -->
            <div class="time" v-if="ind==0">{{data.time}}</div>
            <image :src="domain+data.Imgurl" class="new-image" mode="scaleToFill" />
            <div class="r_wz">
              <div class="bt_s">{{data.title}}</div>
              <div class="jieshao">
                <span>{{data.apirlroom}}室{{data.apirloffice}}厅{{data.apirloffice}}卫</span>/
                <span>{{data.area}}m²</span>/
                <span>{{data.Towardname}}</span>
              </div>
              <div class="youshi">
                <div>{{data.Decorationname}}</div>
                <div>{{data.Propertyname}}</div>
              </div>
              <div class="m-x">
                <p class="money">{{data.price==""||data.price==null?'总价：暂无':data.price+'万'}}</p>
                <p
                  class="average"
                >{{data.averageprice==""||data.averageprice==null?'价格待定':data.averageprice+'元/平'}}</p>
              </div>
            </div>
          </div>
          <!-- 二手房列表结束 -->
        </div>
      </div>
      <!-- 二手房结束 -->

      <!-- 新房开始 -->
      <div class="newroom" v-else-if="tab===2">
        <!-- 新房列表开始 -->
        <div class="intention-nr" v-for="(item,index) in browseNew" :key="index">
          <div
            class="intention-mt"
            v-for="(data, ind) in item"
            :key="ind"
            :data-id="data.id"
            @click="newDetail(index,$event)"
          >
            <!-- 时间 -->
            <div class="time" v-if="ind==0">{{data.time}}</div>
            <image :src="domain+data.ImgUrl" class="new-image" mode="scaleToFill" />
            <div class="intention-right">
              <div class="bt_ri">
                <div class="bt_s newHouse_name">{{data.name}}</div>
                <div class="salestatename">{{data.salestatename}}</div>
              </div>
              <div class="zonename">{{data.zonename}}</div>
              <div class="youshi">
                <div
                  class="youshi2"
                >{{data.Decorationname==""||data.Decorationname==null?'暂无':data.Decorationname}}</div>
                <div
                  class="youshi2"
                >{{data.existingname==""||data.existingname==null?'暂无':data.existingname}}</div>
              </div>

              <div class="m-x">
                <p
                  class="money"
                >{{data.averageprice==""||data.averageprice==null?'价格待定':'均价'+data.averageprice+'元/m²'}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 新房列表结束 -->
      </div>
      <!-- 新房结束 -->

      <!-- 租房开始 -->
      <div class="Renthouse" v-else>
        <div class="sjd" v-for="(item,index) in browseRent" :key="index">
          <!-- 二手房列表开始 -->
          <div
            class="h-mt"
            v-for="(data, ind) in item"
            :key="ind"
            :data-id="data.id"
            @click="rentDetail(index,$event)"
          >
            <!-- 时间 -->
            <div class="time" v-if="ind==0">{{data.time}}</div>
            <image :src="domain+data.Imgurl" class="new-image" mode="scaleToFill" />
            <div class="r_wz">
              <div class="bt_s">{{data.title}}</div>
              <div class="jieshao">
                <span>{{data.apirlroom}}室{{data.apirloffice}}厅{{data.apirloffice}}卫</span>/
                <span>{{data.area}}m²</span>/
                <span>{{data.Towardname}}</span>
              </div>
              <div class="youshi">
                <div>{{data.Decorationname}}</div>
                <div>{{data.Propertyname}}</div>
              </div>
              <div class="m-x">
                <p class="money">{{data.rent==""||data.rent==null?'价格待定':data.rent+'元/月'}}</p>
              </div>
            </div>
          </div>
          <!-- 二手房列表结束 -->
        </div>
      </div>
      <!-- 租房结束 -->
      <div class="none" v-if="noneHid">
        <image :src="img" class="new-image" mode="scaleToFill" />
        <div>您还没有浏览过的房源~</div>
      </div>
    </div>
  </div>
</template>

<script>
const app = getApp();
const common = require("@/utils/index");
export default {
  data() {
    return {
      tab: 1,
      browse: [],
      browseRent: [],
      browseNew: [],
      newslist: [],
      domain: null,
      noneHid: true,
      img: app.globalData.imgurl + "null_data.png",
      yigz: 0,
      houseTemp: [],
      houseList: [[]],
      houseRent: [],
      houseRentList: [[]],
      houseNew: [],
      houseNewList: [[]]
    };
  },
  onLoad() {
    const that = this;
    common.initApp(function (userInfo) { 

      that.houseTemp = wx.getStorageSync("array");

      that.domain = app.globalData.domain;
      if (that.tab == 1) {
        if (that.houseTemp.length == 0) {
          that.noneHid = true;
          that.browse = [];
        } else {
          that.noneHid = false;
          for (let i = 0; i < that.houseTemp.length; i++) {
            that.houseTemp[i].time = common.ConvertDate(that.houseTemp[i].time);
          }
          that.houseTemp.reduce(function(arr, obj, index) {
            let count = 0;
            for (let key in arr) {
              if (arr[key].time == obj.time) {
                count = 1;
                that.houseList[key].push(obj);
                break;
              }
            }
            if (!count) {
              that.houseList[index] = new Array();
              that.houseList[index].push(obj);
            }
            arr.push(obj);
            return arr;
          }, []);
          that.browse = that.houseList;
        }
      }
    })
  },

  onUnload() {
    const that = this;
    that.tab = 1;
  },

  methods: {
    lldj(index) {
      const that = this;
      this.tab = index;

      if (that.tab == 1) {
        // 二手房
        that.houseTemp = wx.getStorageSync("array");
        if (that.houseTemp.length == 0) {
          that.noneHid = true;
          that.browse = [];
        } else {
          that.noneHid = false;
          for (let i = 0; i < that.houseTemp.length; i++) {
            that.houseTemp[i].time = common.ConvertDate(that.houseTemp[i].time);
          }
          that.houseTemp.reduce(function(arr, obj, index) {
            let count = 0;
            for (let key in arr) {
              if (arr[key].time == obj.time) {
                count = 1;
                that.houseList[key].push(obj);
                break;
              }
            }
            if (!count) {
              that.houseList[index] = new Array();
              that.houseList[index].push(obj);
            }
            arr.push(obj);
            return arr;
          }, []);
          that.browse = that.houseList;
        }
      } else if (that.tab == 2) {
        // 新房
        that.houseNew = wx.getStorageSync("arrayxf");
        if (that.houseNew.length == 0) {
          that.noneHid = true;
          that.browseNew = [];
        } else {
          that.noneHid = false;
          for (let i = 0; i < that.houseNew.length; i++) {
            that.houseNew[i].time = common.ConvertDate(that.houseNew[i].time);
          }
          that.houseNew.reduce(function(arr, obj, index) {
            let count = 0;
            for (let key in arr) {
              if (arr[key].time == obj.time) {
                count = 1;
                that.houseNewList[key].push(obj);
                break;
              }
            }
            if (!count) {
              that.houseNewList[index] = new Array();
              that.houseNewList[index].push(obj);
            }
            arr.push(obj);
            return arr;
          }, []);

          that.browseNew = that.houseNewList;
        }
      } else if (that.tab == 3) {
        // 租房
        that.houseRent = wx.getStorageSync("arrayzf");
        if (that.houseRent.length == 0) {
          that.noneHid = true;
          that.browseRent = [];
        } else {
          that.noneHid = false;
          for (let i = 0; i < that.houseRent.length; i++) {
            that.houseRent[i].time = common.ConvertDate(that.houseRent[i].time);
          }
          that.houseRent.reduce(function(arr, obj, index) {
            let count = 0;
            for (let key in arr) {
              if (arr[key].time == obj.time) {
                count = 1;
                that.houseRentList[key].push(obj);
                break;
              }
            }
            if (!count) {
              that.houseRentList[index] = new Array();
              that.houseRentList[index].push(obj);
            }
            arr.push(obj);
            return arr;
          }, []);

          that.browseRent = that.houseRentList;
        }
      }
    },
    guanzhudj() {
      if (this.yigz == 1) {
        this.yigz = 0;
      } else {
        this.yigz = 1;
      }
    },
    //点击跳转二手房详情
    esfDetail: function(index, e) {
      wx.navigateTo({
        url: "/pages/oldhousedetails/main?id=" + e.mp.currentTarget.dataset.id
      });
    },
    //点击跳转新房详情
    newDetail: function(index, e) {
      wx.navigateTo({
        url: "/pages/newhousedetails/main?id=" + e.mp.currentTarget.dataset.id
      });
    },
    //点击跳转租房详情
    rentDetail: function(index, e) {
      wx.navigateTo({
        url: "/pages/Rentaldetails/main?id=" + e.mp.currentTarget.dataset.id
      });
    }
  }
};
</script>

<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;
}
.hsxian {
  width: 100%;
  height: 20rpx;
  background: #f8f8fa;
}
.indexstyle {
  width: 100%;
  margin: 0 auto;
  background: #fff;
}

.liulan {
  display: flex;
  flex-direction: row;
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 3%;
  border-bottom: 2rpx #f0f0f0 solid;
}
.liulan .ll_top {
  font-size: 35rpx;
  line-height: 65rpx;
  width: 17.3%;
  margin-left: 8%;
  margin-right: 8%;
  text-align: center;
}
.houses1 {
  border-bottom: 4rpx #3072f6 solid;
  color: #3072f6;
  font-weight: bold;
}

/* 二手房开始 */
.secondary {
  width: 100%;
}
.sjd {
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  line-height: 80rpx;
}
.h-mt {
  margin-top: 5%;
  width: 100%;
  border-bottom: 2rpx #f0f0f0 solid;
  padding-bottom: 5%;
  overflow: hidden;
}
.h-mt .time {
  background: #f1f1f1;
  margin-bottom: 20rpx;
  padding-left: 15rpx;
  height: 70rpx;
  line-height: 70rpx;
}
.h-mt image {
  float: left;
  width: 40%;
  height: 200rpx;
  border-radius: 3%;
}
.h-mt .r_wz {
  float: right;
  width: 57%;
}
.h-mt .r_wz .bt_s {
  font-size: 30rpx;
  font-weight: bold;
  margin-right: 10rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 40rpx;
}
.jieshao {
  font-size: 26rpx;
  color: #000;
  margin-top: 10rpx;
  line-height: 40rpx;
}
.youshi1 {
  float: left;
  width: 90rpx;
  height: 40rpx;
  line-height: 40rpx;
  border-radius: 6rpx;
  background: #edf0f3;
  color: #849aae;
  font-size: 25rpx;
  text-align: center;
  margin-top: 10rpx;
  margin-right: 10rpx;
}
.m-x {
  margin-top: 5rpx;
  line-height: 40rpx;
}
.m-x p {
  float: left;
}
.money {
  color: #fa5741;
  font-weight: 900;
  margin-right: 5rpx;
  font-size: 32rpx;
}
.average {
  color: #a1a1a1;
  margin-left: 10rpx;
  font-size: 26rpx;
  margin-top: 4rpx;
}
.m-x p.money1 {
  font-size: 26rpx;
  color: #ccc;
  margin-top: 10rpx;
}

/* 新房开始 */
.newroom {
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
}
.intention-nr {
  width: 100%;
  margin-top: 15px;
}
.intention-mt {
  margin-top: 40rpx;
  overflow: hidden;
  width: 100%;
  margin-bottom: 40rpx;
  border-bottom: 2rpx #f0f0f0 solid;
}
.intention-mt .time {
  background: #f1f1f1;
  margin-bottom: 20rpx;
  padding-left: 15rpx;
  height: 70rpx;
  line-height: 70rpx;
}

.intention-nr image {
  float: left;
  width: 40%;
  height: 190rpx;
  border-radius: 10rpx;
}
.intention-nr .intention-right {
  float: right;
  width: 57%;
  /* margin-top: 20rpx; */
}
.intention-nr .intention-right .bt_ri {
  overflow: hidden;
}
.intention-nr .intention-right .bt_ri h1 {
  float: left;
  font-size: 34rpx;
  font-weight: bold;
  margin-right: 4rpx;
}
.salestatename {
  float: right;
  width: 115rpx;
  height: 40rpx;
  line-height: 40rpx;
  background: #0a8de4;
  text-align: center;
  font-size: 25rpx;
  margin-right: 10rpx;
  color: #fff;
  border-radius: 3px;
}
.intention-right .youshi {
  overflow: hidden;
}
.intention-right .youshi2 {
  float: left;
  padding-left: 10rpx;
  padding-right: 10rpx;
  height: 40rpx;
  line-height: 40rpx;
  border-radius: 3px;
  border: 1rpx #efefef solid;
  color: #6b7072;
  font-size: 25rpx;
  text-align: center;
  margin-top: 15rpx;
  margin-right: 10rpx;
}
.m-x image {
  float: right;
  width: 14px;
  height: 8px;
  margin-top: 5rpx;
}
.newHouse_name {
  float: left;
}
.zonename {
  color: #333;
  font-size: 25rpx;
  margin-top: 10rpx;
}
/* .average{color: #A1A1A1;margin-left: 20rpx;font-size: 28rpx;}
.proNew{overflow: hidden;margin-left: 3%;margin-right: 3%;margin-top: 20rpx;}
.proNew>div{float: left;width: 66%;font-size: 30rpx;margin-top: 10rpx;}
.proNew>image{float: left;width: 32%;height: 160rpx;margin-right: 2%;border-radius: 10rpx;} */
.intention-right .r_wz {
  float: right;
  width: 57%;
}
.intention-right .bt_s {
  width: 60%;
  font-size: 30rpx;
  font-weight: bold;
  margin-right: 10rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jieshao {
  font-size: 25rpx;
  color: #333;
  margin-top: 10rpx;
}
.m-x {
  margin-top: 10rpx;
  overflow: hidden;
  height: 50rpx;
  line-height: 50rpx;
}
.money {
  font-size: 30rpx;
  color: #fa5741;
  font-weight: 900;
  margin-right: 5rpx;
}

/* .intention-mt{ padding-bottom:30rpx; border-bottom: 2rpx rgb(236, 236, 236) solid; margin-top:30rpx; overflow: hidden;}
.intention-mt image{ float: left; width:35%; height:230rpx; border-radius:3%;}
.intention-mt .intention-right{ float:right; width:62%; }
.intention-mt .intention-right .bt_ri h1{ float: left; font-size: 34rpx; font-weight: bold; margin-right:4rpx;}
.intention-mt .intention-right .bt_ri p{ float: right; width:70rpx; height:30rpx; line-height: 30rpx; background: #5f94ff; text-align: center; font-size:26rpx;  margin-right:10rpx; color: #fff; border-radius:6rpx;}
.jieshao1{ font-size: 24rpx; color:#999999; margin-top:5rpx; line-height:40rpx;}
.youshi2{ float: left; padding: 3rpx 8rpx 3rpx 8rpx; border-radius:6rpx; border: 2rpx #f0eded solid; color:#979799; font-size: 24rpx; text-align: center; margin-top:5rpx; margin-right:5rpx;}
.m-x1{ margin-top:5rpx; }
.m-x1 p.money{ font-size: 34rpx; color:#df573d; font-weight: 900; margin-right: 5rpx;} */
/* 未关注 */
/* .wgz{ margin-top:2%; }
.wgz image{ width:26rpx; height:26rpx; margin-right: 3%; margin-left:13%; margin-top:8%;}
.wgz span{ font-size:28rpx; color: #999999; position: relative; left: -5%; top: -7%;}
.wgz button{ padding:0; width:150rpx; height:50rpx; line-height:50rpx; border: 2rpx #f0eded solid; color:#979799; border-radius:50rpx; display: inline-block;}
.wgz button::after{border: none;} */

/* 已关注 */
/* .ygz{ margin-top: 2%;}
.ygz image{ width:26rpx; height:26rpx; margin-right: 3%; margin-left:6%; margin-top:8%;}
.ygz span{ font-size:26rpx; color: #999999; position: relative; left: -5%; top: -7%;}
.ygz button{ padding:0; width:150rpx; height:50rpx; line-height:50rpx; border: 2rpx #f0eded solid; color:#979799; border-radius:50rpx;display: inline-block;}
.ygz button::after{border: none;} */
.youshi {
  overflow: hidden;
}
.youshi > div {
  float: left;
  padding: 0 10rpx;
  height: 40rpx;
  line-height: 40rpx;
  border-radius: 3px;
  background: #edf0f3;
  color: #849aae;
  font-size: 25rpx;
  text-align: center;
  margin-top: 10rpx;
  margin-right: 10rpx;
}
.none {
  width: 100%;
  margin-top: 150rpx;
  text-align: center;
}
.none > image {
  width: 200rpx;
  height: 200rpx;
}
.none > div {
  font-size: 28rpx;
  margin-top: 20rpx;
  color: #a1a1a1;
}
.over {
  font-size: 28rpx;
  color: #a1a1a1;
  text-align: center;
  padding-bottom: 30rpx;
}
</style>
