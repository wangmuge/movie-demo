Page({
  data: {

  },
  onLoad: function (options) {
    console.log(options.id)//id是调转url问号后面的参数
    this.setData({
      mid: options.id
    })
    
    var that = this//让内部访问外部变量
    wx.request({
      url: 'https://liudongtushuguan.cn/v2/movie/subject/' + options.id,
      method: "GET",
      // data:{
      //   x:1,y:2
      // },
      header: {
        "content-type": "json"
      },
      success: function (res) {
        console.log(res)
        that.setData({
          movie: res.data
        })
      },
      fail: function () {
wx.hideNavigationBarLoading({
  complete: (res) => {},
})
      },
      complete: function () {

      }
    })
    wx.showNavigationBarLoading({
      complete: (res) => {},
    })
  }, onShareAppMessage:function(){
    return{
      title:this.data.options.id
    }

  }//分享页面
  
})