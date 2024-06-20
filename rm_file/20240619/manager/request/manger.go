package request

import (
	"time"
	"vue-godcron/server/model/common/request"
)

type AgentTableSearch struct {
	StartCreatedAt *time.Time `json:"startCreatedAt" form:"startCreatedAt"`
	EndCreatedAt   *time.Time `json:"endCreatedAt" form:"endCreatedAt"`

	request.PageInfo
}
