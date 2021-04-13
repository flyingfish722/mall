// export的作用是将变量暴露，供其他文件导入
// Promise对象可以处理嵌套调用的问题，具体讲解看百度
export const request = function(para){
  // 定义baseUrl，方便改动
  let baseUrl = 'http://127.0.0.1:5000'
  return new Promise(function(resolve, reject){
    wx.request({
      ...para,
      url: baseUrl+para.url,
      success: (result)=>{
        resolve(result.data.message)
      },
      fail:  (result)=>{
        reject(result)
      }
    }      
    ) 
  }
  )
}