import axios from 'axios'
import qs from 'qs'

// 初始化axios
let instance = axios.create({
  timeout: 20000
})

// 拦截器
instance.interceptors.request.use((request) => {
  if (request.data) {
    if ((request.headers['Content-Type'].indexOf('x') !== -1)) {
      request.data = qs.stringify(request.data)
    } else {
      request.data = JSON.stringify(request.data)
    }
  }
  return request
})
instance.interceptors.response.use((res) => {
  return res
}, function (err) {
    // 对响应错误做点什么
  return Promise.reject(err)
})

const fetch = function ({ url, data = {}, ocrFlag = 0, apiFlag = 1, reqTpye = 'post', moduleFlag = 0, headersOpt = {}, silent = 1 }) {
    console.log(ocrFlag, apiFlag, moduleFlag, silent)
    return instance({
      method: reqTpye,
      url: url+ '?time='+new Date().getTime(),
      // url: url,
      data: data,
      headers: headersOpt
    }).then((data) =>{
    })
}
export {fetch}