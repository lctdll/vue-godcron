package manager

import (
	"github.com/gin-gonic/gin"
	"vue-godcron/server/api/v1"
	"vue-godcron/server/middleware"
)

type AgentTableRouter struct {
}

// InitAgentTableRouter 初始化 agent 路由信息
func (s *AgentTableRouter) InitAgentTableRouter(Router *gin.RouterGroup, PublicRouter *gin.RouterGroup) {
	ATRouter := Router.Group("AT").Use(middleware.OperationRecord())
	ATRouterWithoutRecord := Router.Group("AT")
	ATRouterWithoutAuth := PublicRouter.Group("AT")

	var ATApi = v1.ApiGroupApp.ManagerApiGroup.AgentTableApi
	{
		ATRouter.POST("createAgentTable", ATApi.CreateAgentTable)             // 新建agent
		ATRouter.DELETE("deleteAgentTable", ATApi.DeleteAgentTable)           // 删除agent
		ATRouter.DELETE("deleteAgentTableByIds", ATApi.DeleteAgentTableByIds) // 批量删除agent
		ATRouter.PUT("updateAgentTable", ATApi.UpdateAgentTable)              // 更新agent
	}
	{
		ATRouterWithoutRecord.GET("findAgentTable", ATApi.FindAgentTable)       // 根据ID获取agent
		ATRouterWithoutRecord.GET("getAgentTableList", ATApi.GetAgentTableList) // 获取agent列表
	}
	{
		ATRouterWithoutAuth.GET("getAgentTablePublic", ATApi.GetAgentTablePublic) // 获取agent列表
	}
}
