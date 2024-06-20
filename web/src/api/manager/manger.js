import service from '@/utils/request'

// @Tags AgentTable
// @Summary 创建agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgentTable true "创建agent"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /agent/createAgentTable [post]
export const createAgentTable = (data) => {
  return service({
    url: '/agent/createAgentTable',
    method: 'post',
    data
  })
}

// @Summary 删除agent
// @Produce  application/json
// @Param ID float64
// @Router /menu/deleteBaseMenu [post]
export const deleteBaseAgent= (data) => {
  return service({
    url: '/agent/deleteAgentClousm',
    method: 'delete',
    data
  })
}

// @Tags AgentTable
// @Summary 删除agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgentTable true "删除agent"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /agent/deleteAgentTable [delete]
export const deleteAgentTable = (params) => {
  return service({
    url: '/agent/deleteAgentTable',
    method: 'delete',
    params
  })
}

// @Tags AgentTable
// @Summary 批量删除agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除agent"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /agent/deleteAgentTable [delete]
export const deleteAgentTableByIds = (params) => {
  return service({
    url: '/agent/deleteAgentTableByIds',
    method: 'delete',
    params
  })
}

// @Tags AgentTable
// @Summary 更新agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgentTable true "更新agent"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /agent/updateAgentTable [put]
export const updateAgentTable = (data) => {
  return service({
    url: '/agent/updateAgentTable',
    method: 'put',
    data
  })
}

// @Tags AgentTable
// @Summary 用id查询agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.AgentTable true "用id查询agent"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /agent/findAgentTable [get]
export const findAgentTable = (params) => {
  return service({
    url: '/agent/findAgentTable',
    method: 'get',
    params
  })
}

// @Tags AgentTable
// @Summary 分页获取agent列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取agent列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /agent/getAgentTableList [get]
export const getAgentTableList = (params) => {
  return service({
    url: '/agent/getAgentTableList',
    method: 'get',
    params
  })
}
