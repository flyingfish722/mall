// pages/goods_list/index.js
import {request} from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id: 0,
        name: "综合排序",
        is_active: true
      },
      {
        id: 1,
        name: "销量优先",
        is_active: false
      },
      {
        id: 2,
        name: "信用优先",
        is_active: false
      }
    ],
    goodsList: []
  },

  handleItemClick: function(e){
    let {index} = e.detail
    let {tabs} = this.data

    /**
     *  forEach 和 map 都可以传递三个参数 item index array，如果函数只有一个
     *  形参，它就会传递item，有两个则是item index
     * 两者的区别：forEach函数没有返回值。传入的函数也应该没有返回值，只是遍历进行处理；
     * 而map函数会返回一个新的列表。所需要的函数需要有返回值。
     * 
     * == 与 === 的区别：==值比较值，===同时比较值和类型。例如：
     * 1 == '1' true     1==='1' false
     * 
     * 
     */
     
    tabs.forEach(function(v){
      v.is_active = (v.id==index?true:false)
    })
    tabs.map
    this.setData({tabs})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: async function (options) {
    let {cat_id} = options
    let res = await request({url: '/goods_list/', data: {cat_id: cat_id}})
    let goodsList = res.goods
    this.setData({goodsList})
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