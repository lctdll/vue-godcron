import service from '@/utils/request'

// @Tags getAgtSvcList
// @Summary 创建AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgtGroup true "创建AgtGroup"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /agtgroup/createAgtGroup [post]
export const getAgtSvcList = (params) => {
    return service({
      url: '/agtgroup/getAgtSvcList',
      method: 'get',
      params
    })
}

// @Tags getAgtSvcList
// @Summary 创建AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.AgtGroup true "创建AgtGroup"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /agtgroup/agtSvcAct [post]
export const postAgtSvcAct = (params,data) => {
    return service({
      url: '/agtgroup/agtSvcAct',
      method: 'post',
      params,
      data
    })
}

export const deleteAgtSvc = (params) => {
    return service({
      url: '/agtgroup/agtSvcDel',
      method: 'delete',
      params
    })
}