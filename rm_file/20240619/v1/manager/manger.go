package manager

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"vue-godcron/server/global"
	"vue-godcron/server/model/common/response"
	"vue-godcron/server/model/manager"
	managerReq "vue-godcron/server/model/manager/request"
	"vue-godcron/server/service"
	"vue-godcron/server/utils"
)

type AgentTableApi struct {
}

var ATService = service.ServiceGroupApp.ManagerServiceGroup.AgentTableService

// CreateAgentTable 创建agent
// @Tags AgentTable
// @Summary 创建agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "创建agent"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /AT/createAgentTable [post]
func (ATApi *AgentTableApi) CreateAgentTable(c *gin.Context) {
	var AT manager.AgentTable
	err := c.ShouldBindJSON(&AT)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	AT.CreatedBy = utils.GetUserID(c)

	if err := ATService.CreateAgentTable(&AT); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteAgentTable 删除agent
// @Tags AgentTable
// @Summary 删除agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "删除agent"
// @Success 200 {object} response.Response{msg=string} "删除成功"
// @Router /AT/deleteAgentTable [delete]
func (ATApi *AgentTableApi) DeleteAgentTable(c *gin.Context) {
	ID := c.Query("ID")
	userID := utils.GetUserID(c)
	if err := ATService.DeleteAgentTable(ID, userID); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteAgentTableByIds 批量删除agent
// @Tags AgentTable
// @Summary 批量删除agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {object} response.Response{msg=string} "批量删除成功"
// @Router /AT/deleteAgentTableByIds [delete]
func (ATApi *AgentTableApi) DeleteAgentTableByIds(c *gin.Context) {
	IDs := c.QueryArray("IDs[]")
	userID := utils.GetUserID(c)
	if err := ATService.DeleteAgentTableByIds(IDs, userID); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateAgentTable 更新agent
// @Tags AgentTable
// @Summary 更新agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "更新agent"
// @Success 200 {object} response.Response{msg=string} "更新成功"
// @Router /AT/updateAgentTable [put]
func (ATApi *AgentTableApi) UpdateAgentTable(c *gin.Context) {
	var AT manager.AgentTable
	err := c.ShouldBindJSON(&AT)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	AT.UpdatedBy = utils.GetUserID(c)

	if err := ATService.UpdateAgentTable(AT); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindAgentTable 用id查询agent
// @Tags AgentTable
// @Summary 用id查询agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query manager.AgentTable true "用id查询agent"
// @Success 200 {object} response.Response{data=object{reAT=manager.AgentTable},msg=string} "查询成功"
// @Router /AT/findAgentTable [get]
func (ATApi *AgentTableApi) FindAgentTable(c *gin.Context) {
	ID := c.Query("ID")
	if reAT, err := ATService.GetAgentTable(ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(reAT, c)
	}
}

// GetAgentTableList 分页获取agent列表
// @Tags AgentTable
// @Summary 分页获取agent列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query managerReq.AgentTableSearch true "分页获取agent列表"
// @Success 200 {object} response.Response{data=response.PageResult,msg=string} "获取成功"
// @Router /AT/getAgentTableList [get]
func (ATApi *AgentTableApi) GetAgentTableList(c *gin.Context) {
	var pageInfo managerReq.AgentTableSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := ATService.GetAgentTableInfoList(pageInfo); err != nil {
		global.GVA_LOG.Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", c)
	} else {
		response.OkWithDetailed(response.PageResult{
			List:     list,
			Total:    total,
			Page:     pageInfo.Page,
			PageSize: pageInfo.PageSize,
		}, "获取成功", c)
	}
}

// GetAgentTablePublic 不需要鉴权的agent接口
// @Tags AgentTable
// @Summary 不需要鉴权的agent接口
// @accept application/json
// @Produce application/json
// @Param data query managerReq.AgentTableSearch true "分页获取agent列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /AT/getAgentTablePublic [get]
func (ATApi *AgentTableApi) GetAgentTablePublic(c *gin.Context) {
	// 此接口不需要鉴权
	// 示例为返回了一个固定的消息接口，一般本接口用于C端服务，需要自己实现业务逻辑
	response.OkWithDetailed(gin.H{
		"info": "不需要鉴权的agent接口信息",
	}, "获取成功", c)
}
