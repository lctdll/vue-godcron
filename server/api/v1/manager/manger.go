package manager

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"vue-godcron/global"
	"vue-godcron/model/common/response"
	"vue-godcron/model/manager"
	managerReq "vue-godcron/model/manager/request"
	"vue-godcron/service"
	"vue-godcron/utils"
)

type AgentTableApi struct {
}

var agentService = service.ServiceGroupApp.ManagerServiceGroup.AgentTableService

// CreateAgentTable 创建agent
// @Tags AgentTable
// @Summary 创建agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "创建agent"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /agent/createAgentTable [post]
func (agentApi *AgentTableApi) CreateAgentTable(c *gin.Context) {
	var agent manager.AgentTable
	err := c.ShouldBindJSON(&agent)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	agent.CreatedBy = utils.GetUserID(c)

	if err := agentService.CreateAgentTable(&agent); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteAgentClousm 创建agent
// @Tags AgentTable
// @Summary 创建agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "创建agent"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /agent/deleteAgentClousm [delete]
func (agentApi *AgentTableApi) DeleteAgentClousm(c *gin.Context) {
	var agent manager.AgentTable
	err := c.ShouldBindJSON(&agent)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	agent.CreatedBy = utils.GetUserID(c)

	if err := agentService.DeleteAgentTableByAddress(agent.AgentAddr); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
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
// @Router /agent/deleteAgentTable [delete]
func (agentApi *AgentTableApi) DeleteAgentTable(c *gin.Context) {
	ID := c.Query("ID")
	userID := utils.GetUserID(c)
	if err := agentService.DeleteAgentTable(ID, userID); err != nil {
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
// @Router /agent/deleteAgentTableByIds [delete]
func (agentApi *AgentTableApi) DeleteAgentTableByIds(c *gin.Context) {
	IDs := c.QueryArray("IDs[]")
	userID := utils.GetUserID(c)
	if err := agentService.DeleteAgentTableByIds(IDs, userID); err != nil {
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
// @Router /agent/updateAgentTable [put]
func (agentApi *AgentTableApi) UpdateAgentTable(c *gin.Context) {
	var agent manager.AgentTable
	err := c.ShouldBindJSON(&agent)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	agent.UpdatedBy = utils.GetUserID(c)

	if err := agentService.UpdateAgentTable(agent); err != nil {
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
// @Success 200 {object} response.Response{data=object{reagent=manager.AgentTable},msg=string} "查询成功"
// @Router /agent/findAgentTable [get]
func (agentApi *AgentTableApi) FindAgentTable(c *gin.Context) {
	ID := c.Query("ID")
	if reagent, err := agentService.GetAgentTable(ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(reagent, c)
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
// @Router /agent/getAgentTableList [get]
func (agentApi *AgentTableApi) GetAgentTableList(c *gin.Context) {
	var pageInfo managerReq.AgentTableSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if list, total, err := agentService.GetAgentTableInfoList(pageInfo); err != nil {
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
// @Router /agent/getAgentTablePublic [get]
func (agentApi *AgentTableApi) GetAgentTablePublic(c *gin.Context) {
	// 此接口不需要鉴权
	// 示例为返回了一个固定的消息接口，一般本接口用于C端服务，需要自己实现业务逻辑
	response.OkWithDetailed(gin.H{
		"info": "不需要鉴权的agent接口信息",
	}, "获取成功", c)
}
