// pages/category/index.js

// 导入自定义的request对象
import {request} from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenu: [],
    rightMenu: [],
    currentIndex: 0,
    scrollTop: 0
  },
  cates: [], //在这定义全局数据变量，
  //可以通过this.cates在多个函数内进行修改和使用，
  //这是与在函数内定义变量的不同之处，
  //函数内的变量声明其作用域仅限函数内部

  handleIndexTap: function(e){
    // console.log(e)
    // 事件绑定函数的传入参数为事件e，index被包含在事件e中
    let index = e.currentTarget.dataset.index
    let rightMenu = this.cates[index].children
    this.setData({rightMenu})

    // 改变页面数据后，页面可以自动检测到并且刷新组件？？？？
    // Page.data改动会触发渲染层重新渲染
    this.setData({
      currentIndex: index,
      scrollTop: 0
    })
  },

  async getCate(){
    // 利用Promise优化，在出现嵌套调用时可以更加直观。
    // request({url: '/category_detail/'})
    // .then((res)=>{
    //   this.cates = res.data.message
    //   // js中{}的键如果不是变量会自动变为字符串？？？
    //   // 答：js中加不加引号是一样的。
    //   wx.setStorageSync("cates", {time:Date.now(), data: this.cates})
    //   // console.log(this.cates)
    //   let leftMenu = this.cates.map(v=>v.cat_name)
    //   let rightMenu = this.cates[0].children
    //   this.setData({leftMenu, rightMenu})
    // })
    // .catch((res)=>{
    //   console.log("fail")
    // })

    // 利用async await关键字将请求操作变成同步的（等待请求响应后再执行下面的步骤）
    // 注意只能是本函数内的操作同步，也就是说本函数内await操作后的语句会等待响应后
    // 执行，但是函数之后的操作不会等待函数结束，函数与之后的操作之间是异步的
    let res = await request({url: '/category_detail/'})   
    this.cates = res
    wx.setStorageSync("cates", {time:Date.now(), data: this.cates})
    let leftMenu = this.cates.map(v=>v.cat_name)
    let rightMenu = this.cates[0].children
    this.setData({leftMenu, rightMenu})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 利用数据缓存加快程序编译速度，请求过的数据规定时间内不需要再次请求
     * 小程序自带本地存储功能
     * wx.setStorageSync(key, value) wx.getStorageSync(key) 
     * Date.now() 获取现在的时间，单位为毫秒
     */
    let cs = wx.getStorageSync("cates");
    if (cs) {
      if ((Date.now() - cs.time) > 10*1000){
        this.getCate()
        // 如果这里有操作，它不会等待getCate函数结束后再执行
      }else{
        this.cates = cs.data
        let leftMenu = this.cates.map(v=>v.cat_name)
        let rightMenu = this.cates[0].children
        this.setData({leftMenu, rightMenu})
      }
    }else{
      this.getCate()
    }
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})