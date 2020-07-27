Page({
  data:{
    videoInfo:null,
    otherList:[],
    commentData:null

  },
  onLoad:function(option){
    let videoId = option.id;
    console.log(option.id)
    this.getCurrentVideo(videoId);
    this.getOtherList(videoId);
    this.getCommentList(videoId);
  },
  getCurrentVideo(videoId){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id='+videoId,
      success(res){
        console.log(res);
        if(res.data.code === 0){
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
      }
    })
  },
  getOtherList(videoId){
    let that = this
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList?id='+videoId,
      success(res){
        console.log(res)
        if(res.data.code === 0){
          that.setData({
            otherList:res.data.data.otherList
          })

        }
      }
    })
  },
  getCommentList(videoId){
    let that = this
    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/commentList",
      success(res){
        console.log(res)
        if(res.data.code === 0){
          that.setData({

            commentData:res.data.data.commentData
          })
        }
      }
    })
  }
  
})