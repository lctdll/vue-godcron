package manager

import (
	"github.com/gin-gonic/gin"
	v1 "vue-godcron/api/v1"
	"vue-godcron/middleware"
)

type AgentJobRouter struct {
}

// InitAgentTableRouter 初始化 agent 路由信息
func (s *AgentJobRouter) InitAgentTableRouter(Router *gin.RouterGroup, PublicRouter *gin.RouterGroup) {
	agentRouter := Router.Group("manager").Use(middleware.OperationRecord())
	agentRouterWithoutRecord := Router.Group("manager")
	//agentRouterWithoutAuth := PublicRouter.Group("manager")

	var jobApi = v1.ApiGroupApp.ManagerApiGroup.AgentJobApi
	{
		agentRouter.POST("createAgentJob", jobApi.CreateJob)        // 创建JOB
		agentRouter.DELETE("deleteAgentJob", jobApi.DeleteAgentJob) // 删除agent
		agentRouter.GET("actionAgentJob", jobApi.ActionAgentJob)    // 删除agent
		//agentRouter.DELETE("deleteAgentTable", jobApi.DeleteAgentTable)           // 删除agent

		//agentRouter.DELETE("deleteAgentTableByIds", jobApi.DeleteAgentTableByIds) // 批量删除agent
		//agentRouter.PUT("updateAgentTable", jobApi.UpdateAgentTable)              // 更新agent
	}
	{
		//agentRouterWithoutRecord.GET("findAgentTable", jobApi.FindAgentTable)       // 根据ID获取agent
		agentRouterWithoutRecord.GET("getAgentJobList", jobApi.GetAgentJobList) // 获取JOB列表
	}
	{
		//agentRouterWithoutAuth.GET("getAgentTablePublic", jobApi.GetAgentTablePublic) // 获取agent列表
	}
}
