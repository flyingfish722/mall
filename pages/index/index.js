//Page Object

// 导入自定义的request对象
import {request} from "../../request/index.js"

Page({
  data: {
    swiperList: [],
    cateList: [],
    floorList: []
  },
  //options(Object)
  getSwiper: function(){
    // 微信小程序原生请求数据方法
    // wx.request({
    //   url: 'http://127.0.0.1:5000/items',
    //   success: function(res){
    //     console.log(res)
    //     this.setData({swiperList:res.data.message})
    //   },
    //   fail: function(res){
    //     console.log("fail")
    //     console.log(res)
    //   }
    // })


    // 利用Promise优化，在出现嵌套调用时可以更加直观。
    request({url: '/items'})
    .then((result)=>{
      this.setData({swiperList:result})
    })
    .catch((result)=>{
      console.log("fail")
    })
  },
  getCate: function(){
    // 利用Promise优化，在出现嵌套调用时可以更加直观。
    request({url: '/category/'})
    .then((result)=>{
      this.setData({cateList:result})
    })
    .catch((result)=>{
      console.log("fail")
    })
  },
  getFloor: function(){
    // 利用Promise优化，在出现嵌套调用时可以更加直观。
    request({url: '/floors/'})
    .then((result)=>{
      this.setData({floorList: result})
    })
    .catch((result)=>{
      console.log("fail")
    })
  },

  onLoad: function(options) {
    this.getSwiper()
    this.getCate()
    this.getFloor()

  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  