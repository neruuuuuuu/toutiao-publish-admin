import axios from 'axios'
import store from '../store'

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 如果用户已登录，统一给接口设置 token 信息
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  console.log('请求拦截器成功')
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log('请求拦截器失败')
  return Promise.reject(error)
})

export default request
