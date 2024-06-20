package manager

import (
	"github.com/gin-gonic/gin"
	"vue-godcron/api/v1"
	"vue-godcron/middleware"
)

type AgentTableRouter struct {
}

// InitAgentTableRouter 初始化 agent 路由信息
func (s *AgentTableRouter) InitAgentTableRouter(Router *gin.RouterGroup, PublicRouter *gin.RouterGroup) {
	agentRouter := Router.Group("agent").Use(middleware.OperationRecord())
	agentRouterWithoutRecord := Router.Group("agent")
	agentRouterWithoutAuth := PublicRouter.Group("agent")

	var agentApi = v1.ApiGroupApp.ManagerApiGroup.AgentTableApi
	{
		agentRouter.POST("createAgentTable", agentApi.CreateAgentTable)             // 新建agent
		agentRouter.DELETE("deleteAgentTable", agentApi.DeleteAgentTable)           // 删除agent
		agentRouter.DELETE("deleteAgentClousm", agentApi.DeleteAgentClousm)         // 删除agent
		agentRouter.DELETE("deleteAgentTableByIds", agentApi.DeleteAgentTableByIds) // 批量删除agent
		agentRouter.PUT("updateAgentTable", agentApi.UpdateAgentTable)              // 更新agent
	}
	{
		agentRouterWithoutRecord.GET("findAgentTable", agentApi.FindAgentTable)       // 根据ID获取agent
		agentRouterWithoutRecord.GET("getAgentTableList", agentApi.GetAgentTableList) // 获取agent列表
	}
	{
		agentRouterWithoutAuth.GET("getAgentTablePublic", agentApi.GetAgentTablePublic) // 获取agent列表
	}
}
