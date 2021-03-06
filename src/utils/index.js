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



function initApp(needUserInfo) {
  
  wx.checkSession({
    success: function (res) {
      //session_key 未过期，并且在本生命周期一直有效
      wx.request({
        url:
          app.globalData.url +
          "WxLogin/CheckSessionKey" +
          "?sessionKey=" +
          wx.getStorageSync("sessionKey"),
        success: function (ck) {
          if (ck.data) {
            app.globalData.sessionKey = wx.getStorageSync("sessionKey");
            app.globalData.member = wx.getStorageSync("member");
            typeof needUserInfo == "function" && needUserInfo(res);
          } else {
            setLogin(needUserInfo);
          }
        }
      });
    },
    fail: function () {
      // session_key 已经失效，需要重新执行登录流程
      setLogin(needUserInfo);
    }
  })
}

function setLogin(needUserInfo) {
  wx.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        wx.request({
          url: app.globalData.url + 'WxLogin/GetSessionKey',
          data: {
            code: res.code
          },
          method: 'POST',
          success: function (res) {
            app.globalData.sessionKey = res.data;
            wx.setStorage({
              key: 'sessionKey',
              data: res.data,
            })
            typeof needUserInfo == "function" && needUserInfo(res);
          }, fail: function (res) {
            console.log("获取用户会话失败！" + JSON.stringify(res));
          }
        })
      } else {
        console.log('微信登录失败！' + res.errMsg)
      }
    }
  })
}
const ConvertTimestamp = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return Date.parse(new Date([year, month, day].map(formatNumber).join('/')));
  }

  //转换日期
  const ConvertDate =timestamp=> {

      let myDate = new Date(timestamp);
      let myMonth = myDate.getMonth() + 1;
      if (myMonth < 10) {
        myMonth = "0" + myMonth; //补齐
      }
      let mydate = myDate.getDate();
      if (myDate.getDate() < 10) {
        mydate = "0" + myDate.getDate(); //补齐
      }
      let today = myDate.getFullYear() + "-" + myMonth + "-" + mydate;
      return today;
    }

    const GetPartTime ={
      now: function() {
        return (new Date()).toLocaleString()
      }
    }

export {
  formatTime,
  initApp,
  ConvertTimestamp,
  ConvertDate,
  GetPartTime
}