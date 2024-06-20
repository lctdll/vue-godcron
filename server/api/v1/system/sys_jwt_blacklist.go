package system

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"vue-godcron/global"
	"vue-godcron/model/common/response"
	"vue-godcron/model/system"
	"vue-godcron/utils"
)

type JwtApi struct{}

// JsonInBlacklist
// @Tags      Jwt
// @Summary   jwt加入黑名单
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Success   200  {object}  response.Response{msg=string}  "jwt加入黑名单"
// @Router    /jwt/jsonInBlacklist [post]
func (j *JwtApi) JsonInBlacklist(c *gin.Context) {
	token := utils.GetToken(c)
	jwt := system.JwtBlacklist{Jwt: token}
	err := jwtService.JsonInBlacklist(jwt)
	if err != nil {
		global.GVA_LOG.Error("jwt作废失败!", zap.Error(err))
		response.FailWithMessage("jwt作废失败", c)
		return
	}
	utils.ClearToken(c)
	response.OkWithMessage("jwt作废成功", c)
}
