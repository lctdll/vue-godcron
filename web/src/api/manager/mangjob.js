import service from '@/utils/request'


// @Summary 新增agent
// @Produce  application/json
// @Param menu Object
// @Router /manager/createAgentJob [post]
export const addAgentJob = (data) => {
    return service({
      url: '/manager/createAgentJob',
      method: 'post',
      data
    })
}


// @Summary 获取agent JOb 列表
// @Produce  application/json
// @Param menu Object
// @Router /manager/getAgentJobList [post]
export const getAgentJobList = (params) => {
  return service({
    url: '/manager/getAgentJobList',
    method: 'get',
    params
  })
}

export const deletebaseAgentJob = (params) => {
  return service({
    url: '/manager/deleteAgentJob',
    method: 'delete',
    params
  })
}

// action start/stop job
export const actiontAgentJob = (params) => {
  return service({
    url: '/manager/actionAgentJob',
    method: 'get',
    params
  })
}


