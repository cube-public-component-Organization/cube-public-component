const axios = require('axios')

const instance = new axios.create({
  // baseURL: 'http://127.0.0.1:7001',
  // baseURL: 'http://192.168.25.87:8080',
  // baseURL: 'https://test-kelvin-fe.yupaopao.com',
  // baseURL: 'http://10.72.97.43:7001', // test
  // baseURL: 'http://10.73.8.156:7001', // uat
  baseURL: 'https://test-api.bxcube.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  withCredentials: true
})

instance.interceptors.response.use((response) => {
  const code = response?.data?.code
  // 认为是正常请求
  if (code === '8000') {
    return response?.data?.result
  } else {
    // 否则弹错误消息
    return Promise.reject(response?.data?.msg)
  }
})

module.exports = {
  getCurrentInfo (data) {
    return instance.post('/capi/component/getCurrentInfo', data)
  },
  uploadFile (formData) {
    return instance.post('/capi/component/publish', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...formData.getHeaders()
      },
    })
  }
}
