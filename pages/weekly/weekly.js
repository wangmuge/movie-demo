Page({
  data:{
    thisWeek:[{
      name:"耀耀传说",
      comment:"最精彩的演员阵容。",
      imagePath:"/image/111.png",
      ishight:true,
      id:12918416
    },{
      name:"胖子传说",
      comment:"最精彩的演员阵容。最精彩的演技。",
      imagePath:"/image/222.png",
      ishight:true,
      id:1291845
    },{
      name:"帅哥传说",
      comment:"最精彩的演员阵容。",
      imagePath:"/image/333.png",
      ishight:false,
      id:1291842
    },{
      name:"胖子传说2",
      comment:"最精彩的演员阵容。",
      imagePath:"/image/111.png",
      ishight:true,
      id:1291843
    },{
      name:"胖子传说3",
      comment:"最精彩的演员阵容。",
      imagePath:"/image/222.png",
      ishight:false,
      id:1291841
    }],
    count:123,
    score:60,
    currentIndex:0
  },
  onLoad:function(options){
    this.setData({
      currentIndex:this.data.thisWeek.length-1
    })
  },
  f0:function(e){
    this.setData({
      currentIndex:this.data.thisWeek.length-1//切换swiper
    })
  },
  f1:function(e){
    this.setData({
      "thisWeek[4].name":"新名字"
    })
  },
  f2:function(event){
    var movieId = event.currentTarget.dataset.movieId
console.log(event.currentTarget)
    wx.navigateTo({
      url: '/pages/details/details?id='+movieId
    })
  },
  onShareAppMessage:function(){
    return{
      title:"每周推荐"
    }

  }//分享页面
})