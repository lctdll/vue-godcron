package godcron

import (
	"encoding/json"
	"gitee.com/LCTDDL/MYCODE/Lnet/hcli"
	"gitee.com/LCTDDL/MYCODE/utils/Lconv"
	"gitee.com/extddl/procfs"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
	"strings"
	"vue-godcron/global"
	godcron "vue-godcron/godcron/model"
	"vue-godcron/model/common/response"
	"vue-godcron/utils"
)

type AgtServiceApi struct{}

func (a AgtServiceApi) CreateAgtGroup(c *gin.Context) {
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

type Service struct {
	Name      string `toml:"-" json:"Name"`
	Grepf     string `toml:"Grepf" json:"Grepf"`
	Portf     uint64 `toml:"Portf" json:"Portf"`
	Envs      string `toml:"Envs" json:"Envs"`
	Home      string `toml:"Home" json:"Home"`
	ExecStart string `toml:"ExecStart" json:"ExecStart"`
	AutoStart bool   `toml:"AutoStart" json:"AutoStart"`
}
type Service2 struct {
	Name            string              `toml:"-" json:"Name"`
	Type            string              `toml:"Type" json:"Type"`
	CheckMode       string              `toml:"CheckMode" json:"CheckMode"`
	Grepf           procfs.GrepCmdList  `toml:"Grepf" json:"Grepf"`
	Portf           procfs.PortThePidSt `toml:"Portf" json:"Portf"`
	Envs            []string            `toml:"Envs" json:"Envs"`
	EnvironmentFile string              `toml:"EnvironmentFile" json:"EnvironmentFile"`
	Home            string              `toml:"Home" json:"Home"`
	ExecStart       string              `toml:"ExecStart" json:"ExecStart"`
	ExecReload      string              `toml:"ExecReload" json:"ExecReload"`
	KillMode        string              `toml:"KillMode" json:"KillMode"`
	AutoStart       bool                `toml:"AutoStart" json:"AutoStart"`
}

// @Router /agtgroup/agtSvcAct [get]
func (a AgtServiceApi) ServiceAct(c *gin.Context) {
	Hosts := c.Query("hosts")
	hss, _ := Lconv.SplitString(Hosts, ",", -1)
	act := c.Query("action")
	var s1 Service
	c.ShouldBindJSON(&s1)

	marshal, err := json.Marshal(Service2{
		Name:      s1.Name,
		Grepf:     strings.Split(s1.Grepf, ","),
		Portf:     procfs.PortThePidSt(s1.Portf),
		Home:      s1.Home,
		ExecStart: s1.ExecStart,
	})
	if err != nil {
		return
	}
	//fmt.Println(string(marshal), Hosts, act)
	if len(hss) > 0 {

		_, err := hc.Post("http://"+hss[0]+"/api/v1/service/svc?action="+act, hcli.SetBody(marshal))
		if err != nil {
			global.GVA_LOG.Error("创建失败!", zap.Error(err))
			response.FailWithMessage("查询失败:"+err.Error(), c)
			return
		}

		response.OkWithMessage("", c)
		return

	}
	response.FailWithMessage("查询失败:"+"err.Error()", c)
}

// @Router /agtgroup/agtSvcDel [delete]
func (a AgtServiceApi) ServiceActDelete(c *gin.Context) {
	Hosts := c.Query("hosts")
	hss, _ := Lconv.SplitString(Hosts, ",", -1)
	name := c.Query("name")
	if len(hss) > 0 {

		_, err := hc.Delete("http://" + hss[0] + "/api/v1/service/svcdelete?name=" + name)
		if err != nil {
			global.GVA_LOG.Error("删除失败!", zap.Error(err))
			response.FailWithMessage("删除失败:"+err.Error(), c)
			return
		}

		response.OkWithMessage("", c)
		return

	}
	response.FailWithMessage("ServiceActDelete失败:"+"err.Error()", c)
}

type SvcResponse struct {
	Code int      `json:"code"`
	Data ListData `json:"data"`
	Msg  string   `json:"msg"`
}

type ListData struct {
	List []SvcState `json:"list"`
}
type SvcState struct {
	Name      string `json:"Name"`
	IsRunning bool   `json:"IsRunning"`
	AutoStart bool   `json:"AutoStart"`
	Uptime    string `json:"Uptime"`
	Host      string `json:"Host"`
}

// @Router /agtgroup/getAgtSvcList [get]
func (a AgtServiceApi) ServiceStateList(c *gin.Context) {
	Hosts := c.Query("hosts")
	hss, _ := Lconv.SplitString(Hosts, ",", -1)
	if len(hss) > 0 {
		var resultsvclist ListData
		get, err := hc.Get("http://" + hss[0] + "/api/v1/service/svcstatelist")
		if err != nil {
			global.GVA_LOG.Error("创建失败!", zap.Error(err))
			response.FailWithMessage("查询失败:"+err.Error(), c)
			return
		}
		var r SvcResponse
		json.Unmarshal(get.DataBytes(), &r)
		for _, v := range r.Data.List {
			v.Host = hss[0]
			resultsvclist.List = append(resultsvclist.List, v)
		}

		c.JSON(http.StatusOK, SvcResponse{
			Code: 0,
			Data: resultsvclist,
			Msg:  "",
		})
		return

	}
	response.FailWithMessage("查询失败:"+"err.Error()", c)
}
