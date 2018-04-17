//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    id: 2,
    showTemplate: false,
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' }
  },
  //事件处理函数
  bindViewTap: function() {
    console.log('bindViewTap');
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  markertap: function() {
    console.log('markertap');
  },
  handleTap3: function (e) {
    console.log('inner view');
  },
  handleTap2: function (e) {
    console.log(e)
    console.log(e.type)
    console.log('middle view');
  },
  handleTap1: function (e) {
    console.log('outer view');
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    wx.getLocation({
      success: function(res) {
        console.log(res.latitude)
        console.log(res.longitude)
      },
    });
    /*wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })*/
  }
})
