// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 属性定义方式如下
    tabs:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapItemClick: function(e){
      let {index} = e.currentTarget.dataset

      //触发父组件函数，处理相应数据，为什么要这么做，
      //因为在这里无法对父页面中的数据进行处理
      this.triggerEvent("itemClick", {index}) // {index} 相当于 {'index': index}
    }
  }
})
