/* eslint-disable new-cap */
import {
  ENV,
  OUT_SIDE_CURRENT_TOKEN,
  OUT_SIDE_CURRENT_UDID,
  OUT_SIDE_CURRENT_XUA
} from '@/common/config/constant'
import axios from 'axios'
import Cookies from 'js-cookie'
// import { Toast } from 'vant'

const cubeBorderHost = {
  dev: 'https://test-api.bxcube.com',
  test: 'https://test-api.bxcube.com',
  uat: 'https://uat-api.bxcube.com',
  prod: 'https://api.bxcube.com'
}[ENV]

const instance = new axios.create({
  // baseURL: apiHost,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'X-AccessToken': Cookies.get(OUT_SIDE_CURRENT_TOKEN),
    'X-Udid': Cookies.get(OUT_SIDE_CURRENT_UDID),
    'x-user-agent': Cookies.get(OUT_SIDE_CURRENT_XUA)
  }

  const host = cubeBorderHost

  config.url = `${host}${config.url}`
  console.log('config', config)
  return config
})
// 响应拦截器 需要拦截是否登录
instance.interceptors.response.use((response) => {
  const code = response?.data?.code
  const msg = response?.data?.msg || '系统异常，请稍后重试'
  // 认为是正常请求
  if (code === '8000') {
    return response?.data?.result
    // 未登录，跳转到登录页
  } else if (code === '9001') {
    // window.location.href = '/cube/login'
  } else {
    // 否则弹错误消息
    // Toast.fail(msg)

    return Promise.reject(msg)
  }
})

export default instance
