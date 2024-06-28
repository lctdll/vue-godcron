package godcron

import (
	"github.com/gin-gonic/gin"
	"vue-godcron/api/v1"
	"vue-godcron/middleware"
)

type AgtGroupRouter struct {
}

// InitAgtGroupRouter 初始化 AgtGroup 路由信息
func (s *AgtGroupRouter) InitAgtGroupRouter(Router *gin.RouterGroup, PublicRouter *gin.RouterGroup) {
	agtgroupRouter := Router.Group("agtgroup").Use(middleware.OperationRecord())
	agtgroupRouterWithoutRecord := Router.Group("agtgroup")
	agtgroupRouterWithoutAuth := PublicRouter.Group("agtgroup")

	var agtgroupApi = v1.ApiGroupApp.GodcronApiGroup.AgtGroupApi
	{
		agtgroupRouter.POST("createAgtGroup", agtgroupApi.CreateAgtGroup)             // 新建AgtGroup
		agtgroupRouter.POST("createAgtListGroup", agtgroupApi.CreateAgtListGroup)     // 新建AgtGroup
		agtgroupRouter.DELETE("deleteAgtGroup", agtgroupApi.DeleteAgtGroup)           // 删除AgtGroup
		agtgroupRouter.DELETE("deleteAgtGroupByIds", agtgroupApi.DeleteAgtGroupByIds) // 批量删除AgtGroup
		agtgroupRouter.PUT("updateAgtGroup", agtgroupApi.UpdateAgtGroup)              // 更新AgtGroup
	}
	{
		agtgroupRouterWithoutRecord.GET("findAgtGroup", agtgroupApi.FindAgtGroup)       // 根据ID获取AgtGroup
		agtgroupRouterWithoutRecord.GET("getAgtGroupList", agtgroupApi.GetAgtGroupList) // 获取AgtGroup列表
	}
	{
		agtgroupRouterWithoutAuth.GET("getAgtGroupPublic", agtgroupApi.GetAgtGroupPublic) // 获取AgtGroup列表
	}

	///////////////////////////////////////////////////////

	var agtsvcApi = v1.ApiGroupApp.GodcronApiGroup.AgtServiceApi

	{
		agtgroupRouter.POST("agtSvcAct", agtsvcApi.ServiceAct) // 新建AgtGroup
		agtgroupRouter.DELETE("agtSvcDel", agtsvcApi.ServiceActDelete)
	}

	{
		agtgroupRouterWithoutAuth.GET("getAgtSvcList", agtsvcApi.ServiceStateList) // 获取AgtService列表
	}

}
