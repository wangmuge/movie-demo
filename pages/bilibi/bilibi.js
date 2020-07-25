Page({
  data:{
    //被点击索引
    currentIndexNav:0,
    navList:[],
    swiperList:[],
    videoList:[]
  },
  activeNav(e){
    let that = this
    console.log(this.data.currentIndexNav)
    this.setData({
      currentIndexNav:e.target.dataset.index
    })

  },
//获取首页导航数据
  getNavList(){

    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success(res){
        console.log(res)
        if(res.data.code === 0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  getSwiperList(){
    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success(res){
        console.log(res)
        if(res.data.code === 0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }

      }
    })
  },
  getVideoList(){
    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success(res){
        console.log(res)
        if(res.data.code === 0){
          that.setData({
            videoList:res.data.data.videoList

          })
        }
      }
    })
  },
  onLoad:function(options){
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
  }
})