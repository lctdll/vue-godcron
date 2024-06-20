package manager

import (
	"bytes"
	"encoding/json"
	"gitee.com/LCTDDL/MYCODE/Lnet/hcli"
	"gitee.com/LCTDDL/MYCODE/utils/Lconv"
	"github.com/gin-gonic/gin"
	"github.com/pelletier/go-toml/v2"
	"io"
	"vue-godcron/model/common/response"
)

var hc = hcli.NewCli()

type AgentJobApi struct {
}

type AgentJobscrud struct {
	Groups    string `json:"groups" toml:"groups"`
	Hosts     string `json:"hosts" toml:"hosts"`
	ActionMod string `json:"action" toml:"action" binding:"required"`
	Name      string `gorm:"snot null;unique" form:"name" json:"name" toml:"name" binding:"required"`
	Spec      string `gorm:"not null;type:spec" form:"spec" json:"spec" toml:"spec" binding:"required"`
	Exec      string `gorm:"not null;type:exec" form:"exec" json:"exec" toml:"exec" binding:"required"`
	Text      string `gorm:"not null;type:text" form:"text" json:"text" toml:"text" binding:"required"`
}

// CreateJob 创建Job
// @Tags AgentTable
// @Summary 创建agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "创建agent"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /agent/createAgentTable [post]
func (a *AgentJobApi) CreateJob(c *gin.Context) {
	var ajcr AgentJobscrud
	if err := c.ShouldBind(&ajcr); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	var hostmap = make(map[string]struct{})
	//gss, _ := Lconv.SplitString(ajcr.Groups, ",", -1)
	//if len(gss) != 0 {
	//	hostmap = agent_hosts.OrmGroupAgentGetList(gss...)
	//}

	hss, _ := Lconv.SplitString(ajcr.Hosts, ",", -1)
	if len(hss) != 0 {
		for _, s := range hss {
			hostmap[s] = struct{}{}
		}
	}

	var outb bytes.Buffer
	var outdata respdata
	switch ajcr.ActionMod {
	case "add":
		for s, _ := range hostmap {
			marshal, err := toml.Marshal(ajcr)
			if err != nil {
				response.FailWithMessage(err.Error(), c)
				return
			}
			post, err := hc.Post("http://"+s+"/api/v1/task/create", hcli.HContentType("application/toml"), hcli.SetBody(marshal))
			if err != nil {
				response.FailWithMessage(err.Error(), c)
				return
			}
			io.Copy(&outb, post.Body)
			json.Unmarshal(outb.Bytes(), &outdata)
			outb.Reset()
			if outdata.Code != 0 {
				response.FailWithMessage(outdata.Msg, c)
				return
			}

			post.Body.Close()
		}
		response.OkWithMessage("ok", c)

	}
}

type respdata struct {
	Code int    `json:"code"`
	Data any    `json:"data"`
	Msg  string `json:"msg"`
}

// GetAgentJobList 创建Job
// @Tags AgentTable
// @Summary 创建agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "创建agent"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /manager/getAgentJobList [get]
func (a *AgentJobApi) GetAgentJobList(c *gin.Context) {
	//var ajcr AgentJobscrud
	addragt := c.Query("agent_addr")
	if addragt == "" {
		response.FailWithMessage("parm is not key [agent_addr]", c)
		return
	}

	post, err := hc.Get("http://" + addragt + "/api/v1/task/list")
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	var outb bytes.Buffer
	var outdata respdata
	io.Copy(&outb, post.Body)
	json.Unmarshal(outb.Bytes(), &outdata)
	outb.Reset()
	if outdata.Code != 0 {
		response.FailWithMessage(outdata.Msg, c)
		return
	}
	post.Body.Close()

	response.OkWithData(outdata.Data, c)
}

type deletejonbame struct {
	Name string `json:"name" toml:"name"`
}

// DeleteAgentJob 创建Job
// @Tags AgentTable
// @Summary 创建agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "创建agent"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /manager/deleteAgentJob [delete]
func (a *AgentJobApi) DeleteAgentJob(c *gin.Context) {
	//var ajcr AgentJobscrud
	addragt := c.Query("agent_addr")
	jobName := c.Query("job_name")
	if addragt == "" || jobName == "" {
		response.FailWithMessage("parm is not key [agent_addr or job_name]", c)
		return
	}

	var d = deletejonbame{Name: jobName}
	marshal, err := json.Marshal(&d)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	post, err := hc.Delete("http://"+addragt+"/api/v1/task/delete", hcli.SetBody(marshal))
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	var outb bytes.Buffer
	var outdata respdata
	io.Copy(&outb, post.Body)
	json.Unmarshal(outb.Bytes(), &outdata)
	outb.Reset()
	if outdata.Code != 0 {
		response.FailWithMessage(outdata.Msg, c)
		return
	}
	post.Body.Close()

	response.OkWithData(outdata.Data, c)
}

type JobApiCurd struct {
	Action string `json:"action"`
	Name   string `form:"name" json:"name" binding:"required"`
}

// ActionAgentJob
// @Tags AgentTable
// @Summary 创建agent
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body manager.AgentTable true "创建agent"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /manager/ationAgentJob [get]
func (a *AgentJobApi) ActionAgentJob(c *gin.Context) {
	//var ajcr AgentJobscrud
	addragt := c.Query("agent_addr")
	jobName := c.Query("job_name")
	action := c.Query("action")
	if addragt == "" || jobName == "" || action == "" {
		response.FailWithMessage("parm is not key [agent_addr or job_name or action]", c)
		return
	}

	var d = JobApiCurd{Action: action, Name: jobName}
	marshal, err := json.Marshal(&d)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	var post hcli.Response
	post, err = hc.Post("http://"+addragt+"/api/v1/task/job", hcli.SetBody(marshal))
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	var outb bytes.Buffer
	var outdata respdata
	io.Copy(&outb, post.Body)
	json.Unmarshal(outb.Bytes(), &outdata)
	outb.Reset()
	if outdata.Code != 0 {
		response.FailWithMessage(outdata.Msg, c)
		return
	}
	post.Body.Close()

	response.OkWithData(outdata.Data, c)
}
