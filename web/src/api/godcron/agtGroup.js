import service from '@/utils/request'

// @Tags AgtGroup
// @Summary 创建AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgtGroup true "创建AgtGroup"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /agtgroup/createAgtGroup [post]
export const createAgtGroup = (data) => {
  return service({
    url: '/agtgroup/createAgtGroup',
    method: 'post',
    data
  })
}

// @Tags AgtGroup
// @Summary 创建AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgtGroup true "创建AgtGroup"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /agtgroup/createAgtGroup [post]
export const createAgtlistGroup = (data) => {
  return service({
    url: '/agtgroup/createAgtListGroup',
    method: 'post',
    data
  })
}

// @Tags AgtGroup
// @Summary 删除AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgtGroup true "删除AgtGroup"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /agtgroup/deleteAgtGroup [delete]
export const deleteAgtGroup = (params) => {
  return service({
    url: '/agtgroup/deleteAgtGroup',
    method: 'delete',
    params
  })
}

// @Tags AgtGroup
// @Summary 批量删除AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除AgtGroup"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /agtgroup/deleteAgtGroup [delete]
export const deleteAgtGroupByIds = (params) => {
  return service({
    url: '/agtgroup/deleteAgtGroupByIds',
    method: 'delete',
    params
  })
}

// @Tags AgtGroup
// @Summary 更新AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgtGroup true "更新AgtGroup"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /agtgroup/updateAgtGroup [put]
export const updateAgtGroup = (data) => {
  return service({
    url: '/agtgroup/updateAgtGroup',
    method: 'put',
    data
  })
}

// @Tags AgtGroup
// @Summary 用id查询AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.AgtGroup true "用id查询AgtGroup"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /agtgroup/findAgtGroup [get]
export const findAgtGroup = (params) => {
  return service({
    url: '/agtgroup/findAgtGroup',
    method: 'get',
    params
  })
}

// @Tags AgtGroup
// @Summary 分页获取AgtGroup列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取AgtGroup列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /agtgroup/getAgtGroupList [get]
export const getAgtGroupList = (params) => {
  return service({
    url: '/agtgroup/getAgtGroupList',
    method: 'get',
    params
  })
}
