<script>
App({
  globalData: {
    domain: 'https://ltj.1fangtong.cn:451/',
    url: 'https://ltj.1fangtong.cn:451/api/',
    imgurl: 'https://ltj.1fangtong.cn:451/wximg/',

    // domain: 'https://www.e-fangtong.com/',
    // url: 'https://www.e-fangtong.com/api/',
    // imgurl: 'https://www.e-fangtong.com/wximg/',
    sessionKey: '',
    member:null,
    tab:1
  },
  onLaunch: function() {

  }
})
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
