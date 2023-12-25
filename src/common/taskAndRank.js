import request from './request'

export default {
  // 查询任务的完成情况
  taskQuery (data) {
    return request.post('/webapi/api/user/task/query', data)
  },
  // 参与某项任务的事件
  executeTask (data) {
    return request.post('/webapi/api/user/task/execute', data)
  },

  // 查询榜单
  getRankInfo (data) {
    return request.post('/webapi/api/board/get', data)
  }
}
