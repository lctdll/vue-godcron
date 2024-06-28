package godcron

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"vue-godcron/global"
	"vue-godcron/godcron/model"
	godcronReq "vue-godcron/godcron/model/request"
	"vue-godcron/model/common/response"
	"vue-godcron/service"
	"vue-godcron/utils"
)

type AgtGroupApi struct {
}

var agtgroupService = service.ServiceGroupApp.GodcronServiceGroup

// CreateAgtGroup 创建AgtGroup
// @Tags AgtGroup
// @Summary 创建AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body godcron.AgtGroup true "创建AgtGroup"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /agtgroup/createAgtGroup [post]
func (agtgroupApi *AgtGroupApi) CreateAgtGroup(c *gin.Context) {
	var agtgroup godcron.AgtGroup
	err := c.ShouldBindJSON(&agtgroup)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	agtgroup.CreatedBy = utils.GetUserID(c)
	if err := agtgroupService.CreateAgtGroup(&agtgroup); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

type AgtListGroup struct {
	Group_name      string   `json:"group_name" form:"group_name" binding:"required"`                                  //组名
	Agent_addr_list []string `json:"agent_addr_list" form:"agent_addr_list"   binding:"required" swaggertype:"object"` //agent地址
	CreatedBy       uint     `gorm:"column:created_by;comment:创建者"`
	UpdatedBy       uint     `gorm:"column:updated_by;comment:更新者"`
	DeletedBy       uint     `gorm:"column:deleted_by;comment:删除者"`
}

// CreateAgtListGroup 创建AgtGroup
// @Tags AgtGroup
// @Summary 创建AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body godcron.AgtGroup true "创建AgtGroup"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /agtgroup/createAgtListGroup [post]
func (agtgroupApi *AgtGroupApi) CreateAgtListGroup(c *gin.Context) {
	var agtgroup AgtListGroup
	err := c.ShouldBindJSON(&agtgroup)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	//fmt.Println(agtgroup)
	agtgroup.CreatedBy = utils.GetUserID(c)
	if err := agtgroupService.CreateAgtListGroup(agtgroup.Group_name, agtgroup.Agent_addr_list, agtgroup.CreatedBy); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteAgtGroup 删除AgtGroup
// @Tags AgtGroup
// @Summary 删除AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body godcron.AgtGroup true "删除AgtGroup"
// @Success 200 {object} response.Response{msg=string} "删除成功"
// @Router /agtgroup/deleteAgtGroup [delete]
func (agtgroupApi *AgtGroupApi) DeleteAgtGroup(c *gin.Context) {
	ID := c.Query("ID")
	userID := utils.GetUserID(c)
	if err := agtgroupService.DeleteAgtGroup(ID, userID); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteAgtGroupByIds 批量删除AgtGroup
// @Tags AgtGroup
// @Summary 批量删除AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {object} response.Response{msg=string} "批量删除成功"
// @Router /agtgroup/deleteAgtGroupByIds [delete]
func (agtgroupApi *AgtGroupApi) DeleteAgtGroupByIds(c *gin.Context) {
	IDs := c.QueryArray("IDs[]")
	userID := utils.GetUserID(c)
	if err := agtgroupService.DeleteAgtGroupByIds(IDs, userID); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateAgtGroup 更新AgtGroup
// @Tags AgtGroup
// @Summary 更新AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body godcron.AgtGroup true "更新AgtGroup"
// @Success 200 {object} response.Response{msg=string} "更新成功"
// @Router /agtgroup/updateAgtGroup [put]
func (agtgroupApi *AgtGroupApi) UpdateAgtGroup(c *gin.Context) {
	var agtgroup godcron.AgtGroup
	err := c.ShouldBindJSON(&agtgroup)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	agtgroup.UpdatedBy = utils.GetUserID(c)

	if err := agtgroupService.UpdateAgtGroup(agtgroup); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindAgtGroup 用id查询AgtGroup
// @Tags AgtGroup
// @Summary 用id查询AgtGroup
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query godcron.AgtGroup true "用id查询AgtGroup"
// @Success 200 {object} response.Response{data=object{reagtgroup=godcron.AgtGroup},msg=string} "查询成功"
// @Router /agtgroup/findAgtGroup [get]
func (agtgroupApi *AgtGroupApi) FindAgtGroup(c *gin.Context) {
	ID := c.Query("ID")
	if reagtgroup, err := agtgroupService.GetAgtGroup(ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(reagtgroup, c)
	}
}

// GetAgtGroupList 分页获取AgtGroup列表
// @Tags AgtGroup
// @Summary 分页获取AgtGroup列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query godcronReq.AgtGroupSearch true "分页获取AgtGroup列表"
// @Success 200 {object} response.Response{data=response.PageResult,msg=string} "获取成功"
// @Router /agtgroup/getAgtGroupList [get]
func (agtgroupApi *AgtGroupApi) GetAgtGroupList(c *gin.Context) {
	var pageInfo godcronReq.AgtGroupSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := agtgroupService.GetAgtGroupInfoList(pageInfo); err != nil {
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

// GetAgtGroupPublic 不需要鉴权的AgtGroup接口
// @Tags AgtGroup
// @Summary 不需要鉴权的AgtGroup接口
// @accept application/json
// @Produce application/json
// @Param data query godcronReq.AgtGroupSearch true "分页获取AgtGroup列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /agtgroup/getAgtGroupPublic [get]
func (agtgroupApi *AgtGroupApi) GetAgtGroupPublic(c *gin.Context) {
	// 此接口不需要鉴权
	// 示例为返回了一个固定的消息接口，一般本接口用于C端服务，需要自己实现业务逻辑
	response.OkWithDetailed(gin.H{
		"info": "不需要鉴权的AgtGroup接口信息",
	}, "获取成功", c)
}
