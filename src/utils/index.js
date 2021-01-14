const app = getApp()

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



function checkSession(needUserInfo) {
  wx.checkSession({
    success: function(res) {
      //session_key 未过期，并且在本生命周期一直有效
      console.log('session_key 未过期！')
       typeof needUserInfo == "function" && needUserInfo(res);
    },
    fail: function() {
      // session_key 已经失效，需要重新执行登录流程
      wx.login({
        success: function(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: app.globalData.url+'WxLogin/GetSessionKey',
              data: {
                code: res.code
              },
              method: 'POST',
              success: function(res) {
                app.globalData.sessionKey = res.data;
                wx.setStorage({
                  key: 'sessionKey',
                  data: res.data,
                })
                //callback
               typeof needUserInfo == "function" && needUserInfo(res);
              },fail: function (res) {
                console.log("失败："+JSON.stringify(res));
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  })
}


export{
  formatTime,
  checkSession
}