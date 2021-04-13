<template>
  <div class="indexstyle">
    <web-view :src="linkurl"></web-view>
  </div>
</template>


<script>
const app = getApp();
const common = require("@/utils/index");
 export default {
  data() {
    return {
      linkurl:"",
    };
  },

  onLoad(option) {
    const that = this;
    that.domain = app.globalData.domain;
    that.loupanid = option.projectId;
    wx.request({
      url:app.globalData.url +"Project/BandProjectInfo" +"?sessionKey=" +app.globalData.sessionKey+'&projectId=' + option.projectId,
      success(res) {
        console.log("vr页",res.data.Context.projectInfo.vrurl)
        that.linkurl = res.data.Context.projectInfo.vrurl;
        
      }
    });
  },

  methods: {
  }
};

</script>

<style scoped>
 
</style>
